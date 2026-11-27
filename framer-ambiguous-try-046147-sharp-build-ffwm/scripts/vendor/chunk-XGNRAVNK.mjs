import { a as m } from "chunk-NJXSBLUG.mjs";
import { a as h } from "chunk-RNHTTH2C.mjs";
import { a as w } from "chunk-SWYZG2NI.mjs";
import { l as a } from "chunk-L5AQ4LH7.mjs";
import { e as R } from "chunk-WLHSDIGQ.mjs";
var D = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu;
function _(e) {
  let i = 0,
    d = e.length;
  for (; i < d && e[i] === "-";) i++;
  for (; d > i && e[d - 1] === "-";) d--;
  return e.slice(i, d);
}
function F(e) {
  return _(e.trim().toLowerCase().replace(D, "-"));
}
var v = R(w(), 1);
function H(e) {
  let i = (0, v.useRef)(null);
  return (i.current === null && (i.current = e()), i.current);
}
var I = 1e3 / 60,
  M = 1e3 / 25,
  U = 500;
function $(e) {
  return typeof e == "function" ? e() : e;
}
var b = { background: 0, "user-visible": 1, "user-blocking": 2 };
function j(e, i) {
  return b[e] > b[i];
}
function k() {
  if (!(typeof scheduler > "u")) return scheduler;
}
var T = Promise.resolve();
function Y(e, i) {
  let d = e?.priority,
    s = k();
  return d === "background"
    ? (i?.() ?? m(1))
    : s?.yield
      ? s.yield(e).catch(h)
      : s?.postTask
        ? s.postTask(h, e).catch(h)
        : i
          ? i()
          : d === "user-blocking"
            ? T
            : m(0);
}
var N = 100;
function q(e, i, d) {
  let s = -1 / 0,
    f,
    p = new Set();
  function g() {
    for (let n of p) n();
    p.clear();
  }
  function y() {
    return document.hidden ? (g(), !0) : !1;
  }
  function E() {
    a() &&
      (document.addEventListener("visibilitychange", y), window.addEventListener("pagehide", g));
  }
  function O(n) {
    return new Promise((r) => {
      (setTimeout(r, N),
        e(() => {
          Y(n, i).then(r);
        }));
    });
  }
  function A(n) {
    return a()
      ? new Promise((r) => {
          let t = !0,
            o = () => {
              t && ((t = !1), p.delete(o), r());
            };
          (p.add(o), y() || E(), n.then(o, o));
        })
      : n;
  }
  function S(n, r) {
    let { continueAfter: t, ensureContinueBeforeUnload: o, ...u } = n,
      c = (r ?? t === "paint") ? O(u) : Y(u, i);
    return o ? A(c) : c;
  }
  function x(n, r, t) {
    t && n.pendingPaintYieldCount++;
    let o = S(r, t),
      u = r.signal,
      l = !0,
      c = (C) => {
        l &&
          ((l = !1),
          u?.removeEventListener("abort", P),
          C && (s = performance.now()),
          t && n.pendingPaintYieldCount--,
          f === n && n.pendingPaintYieldCount === 0 && (f = void 0));
      },
      P = () => c(!1);
    return (
      u?.aborted ? P() : u?.addEventListener("abort", P, { once: !0 }),
      o.then(
        () => c(!0),
        () => c(!0)
      ),
      o
    );
  }
  function B(n, r) {
    let t = f;
    if (!t) {
      let u = performance.now(),
        l = r ?? (n.priority === "user-blocking" ? I : M),
        c = a() && document.hidden ? U : l;
      if (u - s < c) return;
      ((t = { pendingPaintYieldCount: 0 }), (f = t));
    }
    let o = n.continueAfter === "paint" && (t.pendingPaintYieldCount > 0 || d?.() !== !1);
    return x(t, n, o);
  }
  function L(n) {
    let { batch: r, batchDuration: t, ...o } = n ?? {};
    return !a() && !i ? (r ? void 0 : T) : r ? B(o, t) : S(o);
  }
  return L;
}
export { _ as a, F as b, I as c, U as d, $ as e, j as f, q as g, H as h };
//# sourceMappingURL=chunk-XGNRAVNK.mjs.map
