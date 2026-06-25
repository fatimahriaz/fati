// ============================================================================
// useApiData HOOK
// A small reusable hook that calls an API function and tracks
// { data, isLoading, error } so every page doesn't have to repeat the
// same useState/useEffect boilerplate. Once a page's API call is wired to
// a real backend endpoint, this hook's behavior doesn't need to change --
// it just starts returning real data instead of mock data.
//
// Usage:
//   const { data, isLoading, error, refetch } = useApiData(getEstimationReport);
// ============================================================================

import { useState, useEffect, useCallback } from "react";

export function useApiData(apiFunction, dependencies = []) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await apiFunction();
      setData(result);
    } catch (err) {
      setError(err.message || "Something went wrong while loading data.");
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}
