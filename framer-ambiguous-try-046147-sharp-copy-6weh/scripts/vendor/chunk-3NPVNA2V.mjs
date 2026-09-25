import { v as t } from "chunk-IYQGOT7H.mjs";
function a(e) {
  return t.post("/web/access-requests", e);
}
var s = "request-access-project",
  c = "request-access-team";
function i(e) {
  return {
    projectSuccess: () =>
      e({
        key: s,
        type: "add",
        variant: "success",
        icon: "success",
        primaryText: "You requested",
        secondaryText: "edit access for this project.",
      }),
    projectError: () =>
      e({
        key: s,
        type: "add",
        variant: "error",
        icon: "error",
        primaryText: "Failed to request",
        secondaryText: "edit access for this project.",
      }),
    teamSuccess: (r) =>
      e({
        key: c,
        type: "add",
        variant: "success",
        icon: "success",
        primaryText: "Requested editor role",
        secondaryText: `in ${r}.`,
      }),
    teamError: (r) =>
      e({
        key: c,
        type: "add",
        variant: "error",
        icon: "error",
        primaryText: "Failed to request editor role",
        secondaryText: `in ${r}.`,
      }),
  };
}
export { a, i as b };
//# sourceMappingURL=chunk-3NPVNA2V.mjs.map
