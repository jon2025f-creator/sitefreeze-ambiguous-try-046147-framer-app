import { a as u, b as i } from "chunk-ZUOFWZXP.mjs";
import { a as r, b as t, v as c } from "chunk-VFNFPNND.mjs";
import { j as o } from "chunk-EAUMDN6M.mjs";
var a = o("accessRequest");
async function q(s) {
  try {
    let e = await c.post("/web/access-requests/grant", { requestId: s });
    return {
      status: 0,
      accessRequest: e.accessRequest,
      requestingUser: e.requestingUser,
      resource: e.resource,
    };
  } catch (e) {
    return u(e)
      ? {
          status: 1,
          editorLimit: e.data.editorLimit,
          licenseType: e.data.licenseType,
          teamId: e.data.teamId,
          teamName: e.data.teamName,
        }
      : i(e)
        ? {
            status: 4,
            projectId: e.data.projectId,
            licenseType: e.data.licenseType,
            editorLimit: e.data.editorLimit,
          }
        : e instanceof r && e.status === t.Conflict
          ? { status: 2 }
          : (a.reportError(e), { status: 3 });
  }
}
async function m(s) {
  try {
    let e = await c.post("/web/access-requests/deny", { requestId: s });
    return {
      status: 0,
      accessRequest: e.accessRequest,
      requestingUser: e.requestingUser,
      resource: e.resource,
    };
  } catch (e) {
    return e instanceof r && e.status === t.Conflict
      ? { status: 2 }
      : (a.reportError(e), { status: 3 });
  }
}
export { q as a, m as b };
//# sourceMappingURL=chunk-2BR7N3Z5.mjs.map
