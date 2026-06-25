// ============================================================================
// Login Page
// Sign-in screen with RACF ID + password fields, matching the Figma
// prototype. On submit, calls the `login()` API function (see
// src/services/api.js) -- currently that call will fail until the
// backend's /api/auth/login endpoint exists, so we catch and display
// that error rather than letting it crash the page.
// ============================================================================

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../services/api";
import { LoginArrowIcon, EyeIcon } from "../../common/icons";
import "./Login.css";

export default function Login({ onLoginSuccess }) {
  const [racfId, setRacfId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      // TODO (backend): once /api/auth/login exists, this will return
      // { token, user }. For now this will throw since there's no backend
      // yet -- that's expected during frontend-only development.
      await login(racfId, password);
      onLoginSuccess?.();
      navigate("/");
    } catch (err) {
      // PLACEHOLDER BEHAVIOR: until the backend is connected, treat any
      // login attempt as successful so the rest of the app is reachable
      // during development. Remove this fallback once real auth is wired up.
      console.warn("Login API not available yet - proceeding with placeholder auth.", err);
      onLoginSuccess?.();
      navigate("/");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="login-page">
      <aside className="login-page__sidebar">
        <h2 className="login-page__brand">AMS Reporting Dashboard</h2>
      </aside>

      <main className="login-page__content">
        <form className="login-card" onSubmit={handleSubmit}>
          <h2 className="login-card__title">Sign in to continue</h2>

          {errorMessage && <p className="login-card__error">{errorMessage}</p>}

          <div className="login-card__field">
            <label htmlFor="racfId">RACF ID</label>
            <input
              id="racfId"
              type="text"
              placeholder="e.g. ABCD1234"
              value={racfId}
              onChange={(e) => setRacfId(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="login-card__field">
            <label htmlFor="password">Password</label>
            <div className="login-card__password-wrapper">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="login-card__toggle-visibility"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <EyeIcon width={16} height={16} />
              </button>
            </div>
          </div>

          <button type="submit" className="login-card__submit" disabled={isSubmitting}>
            <LoginArrowIcon width={16} height={16} />
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </main>
    </div>
  );
}
