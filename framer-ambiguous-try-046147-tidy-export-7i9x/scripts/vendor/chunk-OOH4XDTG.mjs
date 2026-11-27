import { a as i, b as s } from "chunk-ZUOFWZXP.mjs";
import { v as t } from "chunk-VFNFPNND.mjs";
import { j as r } from "chunk-EAUMDN6M.mjs";
var d = r("invite");
async function L(o, { id: a, role: m, permissions: n }) {
  try {
    return (
      await t.post(`/web/projects/${o}/acl/${a}`, { role: m, permissions: n ?? void 0 }),
      { status: 0 }
    );
  } catch (e) {
    return i(e)
      ? {
          status: 1,
          editorLimit: e.data.editorLimit,
          licenseType: e.data.licenseType,
          teamId: e.data.teamId,
          teamName: e.data.teamName,
        }
      : s(e)
        ? {
            status: 3,
            projectId: e.data.projectId,
            licenseType: e.data.licenseType,
            editorLimit: e.data.editorLimit,
          }
        : (d.reportError(e), { status: 2 });
  }
}
export { L as a };
//# sourceMappingURL=chunk-OOH4XDTG.mjs.map
