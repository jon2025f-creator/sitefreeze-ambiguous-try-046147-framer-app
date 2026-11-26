import { a as o, b as a } from "chunk-FSWSLVXX.mjs";
import { a as m, v as s } from "chunk-7IBA7WL7.mjs";
import { j as i } from "chunk-EAUMDN6M.mjs";
var c = i("invite");
async function h(n, t) {
  try {
    let e = await s.post(`/web/projects/${n}/acl`, { ...t, permissions: t.permissions ?? void 0 });
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
      : a(e)
        ? {
            status: 4,
            projectId: e.data.projectId,
            licenseType: e.data.licenseType,
            editorLimit: e.data.editorLimit,
          }
        : e instanceof m && e.status === 429
          ? { status: 5 }
          : (c.reportError(e), { status: e instanceof m && e.isTemporary ? 2 : 3 });
  }
}
var p = i("invite");
async function P(n, { id: t, role: e, permissions: d }) {
  try {
    return (
      await s.post(`/web/projects/${n}/acl/${t}`, { role: e, permissions: d ?? void 0 }),
      { status: 0 }
    );
  } catch (r) {
    return o(r)
      ? {
          status: 1,
          editorLimit: r.data.editorLimit,
          licenseType: r.data.licenseType,
          teamId: r.data.teamId,
          teamName: r.data.teamName,
        }
      : a(r)
        ? {
            status: 3,
            projectId: r.data.projectId,
            licenseType: r.data.licenseType,
            editorLimit: r.data.editorLimit,
          }
        : (p.reportError(r), { status: 2 });
  }
}
export { h as a, P as b };
//# sourceMappingURL=chunk-4WKJQI3J.mjs.map
