import { a as r, b as t } from "chunk-VFNFPNND.mjs";
function o(e) {
  return e instanceof r && e.status === t.BadRequest && e.data.reason === "editor_limit_reached";
}
function a(e) {
  return (
    e instanceof r && e.status === t.BadRequest && e.data.reason === "project_editor_limit_reached"
  );
}
export { o as a, a as b };
//# sourceMappingURL=chunk-ZUOFWZXP.mjs.map
