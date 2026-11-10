import { v as n } from "chunk-VYMQRK2U.mjs";
import { a as s } from "chunk-ATYAMW3V.mjs";
import { i as o } from "chunk-WBI6GGAG.mjs";
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
//# sourceMappingURL=chunk-WFNZLIQY.mjs.map
