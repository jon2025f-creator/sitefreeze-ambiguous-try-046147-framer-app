import { b as n } from "chunk-7MZDLLYM.mjs";
import { _ as s } from "chunk-T6DXIA74.mjs";
import { h as o } from "chunk-KPMZENE5.mjs";
var l = o("pollProject");
async function d(i, c) {
  let { intervalMillis: a, attempts: r, stopCondition: p } = c;
  try {
    for (let t = 0; t < r; t++) {
      let e = await n.get(`/web/projects/${i}`, { includeAiCreditLimit: "true" });
      if (p(e)) return { status: 0, project: e };
      t < r - 1 && (await s(a));
    }
    return { status: 1, message: `Polling exceeded ${r} attempts` };
  } catch (t) {
    return (l.reportError(t), { status: 2, error: t });
  }
}
export { d as a };
//# sourceMappingURL=chunk-PNLXYC5Q.mjs.map
