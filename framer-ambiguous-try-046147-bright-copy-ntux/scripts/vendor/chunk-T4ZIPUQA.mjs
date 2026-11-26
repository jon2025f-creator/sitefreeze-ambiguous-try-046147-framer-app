import { a as o, b as n } from "chunk-ZUOFWZXP.mjs";
import { a as r, v as s } from "chunk-VFNFPNND.mjs";
import { j as i } from "chunk-EAUMDN6M.mjs";
var m = i("invite");
async function l(a, t) {
  try {
    let e = await s.post(`/web/projects/${a}/acl`, { ...t, permissions: t.permissions ?? void 0 });
    return { status: 0, aclEntry: { ...e, kind: e.pending ? "invite" : "user" } };
  } catch (e) {
    return o(e)
      ? {
          status: 1,
          editorLimit: e.data.editorLimit,
          licenseType: e.data.licenseType,
          teamId: e.data.teamId,
          teamName: e.data.teamName,
        }
      : n(e)
        ? {
            status: 4,
            projectId: e.data.projectId,
            licenseType: e.data.licenseType,
            editorLimit: e.data.editorLimit,
          }
        : e instanceof r && e.status === 429
          ? { status: 5 }
          : (m.reportError(e), { status: e instanceof r && e.isTemporary ? 2 : 3 });
  }
}
export { l as a };
//# sourceMappingURL=chunk-T4ZIPUQA.mjs.map
