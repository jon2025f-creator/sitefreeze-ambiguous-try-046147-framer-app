import { c as P } from "chunk-D3BIVQHH.mjs";
import { Md as v } from "chunk-KQFBCFXI.mjs";
import { a as d, u as R, v as y } from "chunk-QINDDHGZ.mjs";
import { g as T } from "chunk-ARJ7WQTJ.mjs";
import { p as h } from "chunk-UW3PRHRG.mjs";
import { b as p } from "chunk-4JY5UMT2.mjs";
function m(t) {
  let e = 0,
    r = !1,
    n = (o) => {
      let a = o;
      return (t && (a -= 1), Math.max(0, a));
    },
    s = () => e + (r ? 1 : 0);
  return {
    addText(o) {
      if (!o) return n(s());
      for (let a = 0; a < o.length; a++)
        o[a] ===
        `
`
          ? (e++, (r = !1))
          : (r = !0);
      return n(s());
    },
    finish() {
      return (r && (e++, (r = !1)), n(e));
    },
  };
}
var b = "text/csv;charset=utf-8",
  N = "X-Next-Cursor",
  Y = 1e4,
  g = 4,
  B = 500,
  E = class extends Error {
    name = "AnalyticsExportIncompleteError";
  };
function X(t) {
  return t.headers.get(N)?.trim() || void 0;
}
function C(t) {
  return t === 429 || t >= 500;
}
function D(t) {
  let e = t.status ?? 0;
  return e >= 400 && e < 500 && e !== 429 ? !1 : C(e);
}
function H(t) {
  if (!D(t)) {
    let { message: e, status: r, data: n, code: s, ref: o, skipSentry: a } = t;
    return new d({
      message: e,
      status: r,
      data: n,
      code: s,
      ref: o,
      isTemporary: !1,
      skipSentry: a,
    });
  }
  return t;
}
async function W(t) {
  let e = t.statusText || "Analytics export request failed",
    r = {};
  try {
    let s = await t.text();
    if (s)
      try {
        let o = JSON.parse(s);
        (typeof o.error?.message == "string" && (e = o.error.message), T(o.data) && (r = o.data));
      } catch {
        e = s;
      }
  } catch {}
  let n = t.status;
  return new d({ message: e, status: n, data: r, isTemporary: C(n) });
}
async function L(t, e, r) {
  let n = `/web/analytics/${t}/events-export`;
  for (let s = 0; s < g; s++) {
    if (s > 0) {
      if (r?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
      await v(s, B);
    }
    try {
      let o = await y.getRaw(n, e, r);
      if (o.ok) return o;
      let a = await W(o);
      if (!a.isTemporary || s === g - 1) throw a;
    } catch (o) {
      if (R(o)) throw o;
      if (o instanceof d) {
        let a = H(o);
        if (!D(a) || s === g - 1) throw a;
        continue;
      }
      if (s === g - 1) throw o;
    }
  }
  throw new Error("Analytics export page fetch exhausted retries");
}
async function* G(t, { startDate: e, endDate: r }, n, s) {
  let o,
    a = !0,
    i = new Set();
  for (let c = 0; c < Y; c++) {
    s?.(c + 1);
    let l = await L(t, { startDate: e, endDate: r, includeHeader: a, cursor: o }, n);
    yield l;
    let u = X(l);
    if (!u) return;
    if (i.has(u)) throw new E("Export pagination repeated; try again or use a smaller date range.");
    (i.add(u), (o = u), (a = !1));
  }
  throw new E("Export is too large to download in one file. Try a smaller date range.");
}
async function F(t, e, r, n) {
  let s = 0,
    o = 0;
  for await (let a of G(t, e, r.signal, r.onPageStarted)) {
    let i = o,
      l = await n(a, s === 0, (u) => {
        r.onTransferredEvents?.(i + u);
      });
    ((o += l), s++, r.onPageComplete?.(s, o));
  }
}
async function V(t, e, r) {
  let n = [],
    s = _(e);
  return (
    await F(t, e, r, async (o, a, i) => {
      let c = await o.text();
      n.push(new Blob([c], { type: b }));
      let l = m(a);
      l.addText(c);
      let u = l.finish();
      return (i(u), u);
    }),
    { blob: new Blob(n, { type: b }), filename: s }
  );
}
function O() {
  let t = globalThis.showSaveFilePicker;
  if (typeof t == "function") return t.bind(globalThis);
}
function q() {
  return !h() && O() !== void 0;
}
async function I(t, e) {
  if (e?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
  let r = O();
  if (!r) throw new Error("File System Access API is not available");
  let n = await r({
    suggestedName: _(t),
    types: [{ description: "CSV", accept: { "text/csv": [".csv"] } }],
  });
  if (e?.aborted) throw new DOMException("The operation was aborted.", "AbortError");
  return n.createWritable();
}
async function ut(t, e, r = {}) {
  if (q()) {
    await z(t, e, r);
    return;
  }
  let { blob: n, filename: s } = await V(t, e, r);
  P(n, s);
}
async function z(t, e, r) {
  let n = r.writable;
  n || (n = await I(e, r.signal));
  try {
    (await F(t, e, r, async (s, o, a) =>
      J({ response: s, writable: n, includesHeader: o, onPageProgress: a })
    ),
      p(n),
      await n.close());
  } catch (s) {
    throw (await n?.abort().catch(() => {}), s);
  }
}
async function J({ response: t, writable: e, includesHeader: r, onPageProgress: n }) {
  if (!t.body) {
    let c = await t.text(),
      l = new Blob([c], { type: b });
    await e.write(l);
    let u = m(r);
    u.addText(c);
    let A = u.finish();
    return (n(A), A);
  }
  let s = t.body.getReader(),
    o = new TextDecoder(),
    a = m(r);
  for (;;) {
    let { done: c, value: l } = await s.read();
    if (c) break;
    (await e.write(l), n(a.addText(o.decode(l, { stream: !0 }))));
  }
  a.addText(o.decode());
  let i = a.finish();
  return (n(i), i);
}
function S(t) {
  let [e, r, n] = t.split("-");
  return `${n}-${r}-${e.slice(-2)}`;
}
function _({ startDate: t, endDate: e }) {
  let r = S(t),
    n = S(e);
  return `Analytics Export \u2014 ${r} \u2192 ${n}.csv`;
}
async function ft(t, { startDate: e, endDate: r }, n) {
  return await y.get(`/web/analytics/${t}/events-export-count`, { startDate: e, endDate: r }, n);
}
var M = "2024-11-01",
  Z = /^\d{4}-\d{2}-\d{2}$/,
  j = 1440 * 60 * 1e3;
function mt(t, e) {
  return !(t === void 0 || (t !== null && t <= 0) || e === void 0 || (e !== null && e <= 0));
}
function gt(t) {
  return t === null ? null : t === void 0 || t <= 0 ? 0 : t;
}
function K(t = new Date()) {
  return $(new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())));
}
function Et(t, e = new Date()) {
  if (t === null) return M;
  let r = K(e);
  if (t === void 0 || t <= 0) return r;
  let n = f(r, -(t - 1));
  return x(n, M, r);
}
function x(t, e, r) {
  return t < e ? e : t > r ? r : t;
}
function Q(t, e, r) {
  return t < f(e, -r);
}
function f(t, e) {
  let r = new Date(w(t));
  return (r.setUTCDate(r.getUTCDate() + e), $(r));
}
function U(t) {
  return t === null ? null : t - 1;
}
function xt(t, e, r) {
  let { fromDay: n } = k({ ...r, fromDay: t, toDay: e });
  return { fromDay: n };
}
function yt(t, e, r, n) {
  return k({ ...n, fromDay: t, toDay: x(r, t, n.maxExportDay) });
}
function bt(t, e, r) {
  if (!Z.test(t)) throw new Error(`${r} expected '${e}' to be a UTC calendar day (YYYY-MM-DD).`);
  let n = new Date(`${t}T00:00:00.000Z`);
  if (Number.isNaN(n.getTime()) || n.toISOString().slice(0, 10) !== t)
    throw new Error(`${r} expected '${e}' to be a valid UTC calendar day.`);
}
function wt(t, e, r, n) {
  if (r === null) return;
  let s = r - 1,
    o = f(e, -s);
  if (t < o) throw new Error(n);
}
function k({ fromDay: t, toDay: e, minDay: r, maxExportDay: n, maxExportInclusiveDays: s }) {
  let o = e > n ? n : e,
    a = x(t, r, o),
    i = U(s);
  return (i !== null && Q(a, o, i) && ((a = f(o, -i)), a < r && (a = r)), { fromDay: a, toDay: o });
}
function At(t, e, r, n) {
  return t > e
    ? { canExport: !1, message: "The start date must be before the end date." }
    : t > n || e > n
      ? { canExport: !1, message: "Export dates must be on or before today (UTC)." }
      : t < r
        ? {
            canExport: !1,
            message: `The selected range is outside your analytics retention. Earliest available date is ${r} (UTC).`,
          }
        : { canExport: !0 };
}
function ht(t, e, r, n) {
  let s = x(t, e, r),
    o = e,
    a = U(n);
  if (a !== null) {
    let i = f(t, -a);
    i > o && (o = i);
  }
  return (o > s && (o = s), { min: o, max: s });
}
function w(t) {
  let [e, r, n] = t.split("-").map(Number);
  return (p(e && r && n, "day must be a valid yyyy-MM-dd string"), Date.UTC(e, r - 1, n));
}
function $(t) {
  let e = t.getUTCFullYear(),
    r = String(t.getUTCMonth() + 1).padStart(2, "0"),
    n = String(t.getUTCDate()).padStart(2, "0");
  return `${e}-${r}-${n}`;
}
function Tt(t, e) {
  let r = w(t),
    n = w(e);
  return Math.floor((n - r) / j) + 1;
}
export {
  E as a,
  q as b,
  I as c,
  ut as d,
  _ as e,
  ft as f,
  mt as g,
  gt as h,
  K as i,
  Et as j,
  f as k,
  xt as l,
  yt as m,
  bt as n,
  wt as o,
  k as p,
  At as q,
  ht as r,
  Tt as s,
};
//# sourceMappingURL=chunk-MEVTXF5O.mjs.map
