// ============================================================================
// MOCK DATA - Device Summary
// Cards: Meter Count, Router Count, Collector Count
// Table 1: Meter Hardware Counts (by hardware model)
// Table 2: Router Hardware Counts (by hardware model)
//
// DELETE this file once /api/device-summary exists.
// ============================================================================

// Top stat cards
export const MOCK_DEVICE_SUMMARY_CARDS = {
  meterCount: { value: "4,121,543", label: "Meter Count" },
  routerCount: { value: "28,491", label: "Router Count" },
  collectorCount: { value: "1,204", label: "Collector Count" },
};

// Table 1: Meter Hardware Counts
// Columns: HARDWARE_MODEL + count columns
export const MOCK_METER_HARDWARE_COLUMNS = [
  { key: "hardware_model", label: "Hardware Model" },
  { key: "total", label: "Total", align: "right" },
  { key: "normal", label: "Normal", align: "right" },
  { key: "failed", label: "Failed", align: "right" },
  { key: "lost", label: "Lost", align: "right" },
];

export const MOCK_METER_HARDWARE_ROWS = [
  { hardware_model: "G5 Integrated FOCUS A", total: 941, normal: 920, failed: 12, lost: 9 },
  { hardware_model: "G5 Integrated Focus A Xei", total: 461, normal: 445, failed: 8, lost: 8 },
  { hardware_model: "Grid Stream RF Inventory", total: 292, normal: 281, failed: 6, lost: 5 },
  { hardware_model: "RF Enhanced Focus AX", total: 132, normal: 128, failed: 2, lost: 2 },
  { hardware_model: "RF Enhanced Integrated", total: 117, normal: 115, failed: 1, lost: 1 },
  { hardware_model: "Other", total: 49, normal: 47, failed: 1, lost: 1 },
];

// Table 2: Router Hardware Counts
export const MOCK_ROUTER_HARDWARE_COLUMNS = [
  { key: "hardware_model", label: "Hardware Model" },
  { key: "total", label: "Total", align: "right" },
  { key: "active", label: "Active", align: "right" },
  { key: "inactive", label: "Inactive", align: "right" },
];

export const MOCK_ROUTER_HARDWARE_ROWS = [
  { hardware_model: "Cisco IR510", total: 12400, active: 12100, inactive: 300 },
  { hardware_model: "Cisco IR529", total: 9800, active: 9600, inactive: 200 },
  { hardware_model: "Itron OpenWay", total: 4200, active: 4100, inactive: 100 },
  { hardware_model: "Other", total: 2091, active: 2050, inactive: 41 },
];
