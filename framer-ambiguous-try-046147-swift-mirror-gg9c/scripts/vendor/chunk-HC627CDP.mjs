import { g as na, v as li } from "chunk-FCOEVT45.mjs";
import { e as ra } from "chunk-FW7PEDYJ.mjs";
import { a as oa } from "chunk-KZABOZE4.mjs";
import { a as ia, c as sa } from "chunk-YY75G3LC.mjs";
import { c as ua } from "chunk-U5HWMMS5.mjs";
import { b as ui } from "chunk-WPWSHZF5.mjs";
import { a as fi } from "chunk-CRNXVVNC.mjs";
import { c as mi } from "chunk-EKYJNLIX.mjs";
import { a as ca, b as la } from "chunk-ALPJL5PK.mjs";
import { a as aa } from "chunk-VD6KMVU6.mjs";
import { d as ci } from "chunk-FLHACYJU.mjs";
import { a as rn } from "chunk-AYARID3N.mjs";
import { a as wf } from "chunk-SJ5ZASSS.mjs";
import { b as _t } from "chunk-WDDZ5DYW.mjs";
import { d as kt } from "chunk-IBBQFOLQ.mjs";
import { c as ea, d as ta } from "chunk-3PIOJLHR.mjs";
import { a as fa } from "chunk-LVTM6NBN.mjs";
import { a as ce } from "chunk-QFU6OGL3.mjs";
import { d as Qs } from "chunk-KQKA2AEH.mjs";
import { a as ai } from "chunk-LUZ6ND5K.mjs";
import { a as oe } from "chunk-2FCXHKEL.mjs";
import { a as X } from "chunk-SWYZG2NI.mjs";
import { b as Er, e as Js, h as tn, m as Dt, o as Tt, s as Zs } from "chunk-LA34HORX.mjs";
import { b as si, c as Xs } from "chunk-4JY5UMT2.mjs";
import { m as Ys } from "chunk-G7OZBQQG.mjs";
import { d as $e, u as Zr, v as Gs } from "chunk-VHFKZWVR.mjs";
import { d as qs } from "chunk-VJ7UYMJI.mjs";
import { e as _ } from "chunk-WLHSDIGQ.mjs";
var Pf = Object.defineProperty,
  Ef = Object.defineProperties,
  If = Object.getOwnPropertyDescriptors,
  on = Object.getOwnPropertySymbols,
  da = Object.prototype.hasOwnProperty,
  pa = Object.prototype.propertyIsEnumerable,
  ma = (e, t, o) =>
    t in e ? Pf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o),
  Z = (e, t) => {
    for (var o in t || (t = {})) da.call(t, o) && ma(e, o, t[o]);
    if (on) for (var o of on(t)) pa.call(t, o) && ma(e, o, t[o]);
    return e;
  },
  le = (e, t) => Ef(e, If(t)),
  Ir = (e, t) => {
    var o = {};
    for (var r in e) da.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
    if (e != null && on) for (var r of on(e)) t.indexOf(r) < 0 && pa.call(e, r) && (o[r] = e[r]);
    return o;
  };
function Ft(...e) {}
function Qr(e, t) {
  if (Mf(e)) {
    let o = Of(t) ? t() : t;
    return e(o);
  }
  return e;
}
function Mf(e) {
  return typeof e == "function";
}
function Of(e) {
  return typeof e == "function";
}
function qe(e, t) {
  return typeof Object.hasOwn == "function"
    ? Object.hasOwn(e, t)
    : Object.prototype.hasOwnProperty.call(e, t);
}
function be(...e) {
  return (...t) => {
    for (let o of e) typeof o == "function" && o(...t);
  };
}
function eo(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function di(e, t) {
  let o = Z({}, e);
  for (let r of t) qe(o, r) && delete o[r];
  return o;
}
function pi(e, t) {
  let o = {};
  for (let r of t) qe(e, r) && (o[r] = e[r]);
  return o;
}
function to(e) {
  return e;
}
function te(e, t) {
  if (!e) throw typeof t != "string" ? new Error("Invariant failed") : new Error(t);
}
function vi(e) {
  return Object.keys(e);
}
function ur(e, ...t) {
  let o = typeof e == "function" ? e(...t) : e;
  return o == null ? !1 : !o;
}
function ft(e) {
  return e.disabled || e["aria-disabled"] === !0 || e["aria-disabled"] === "true";
}
function We(e) {
  let t = {};
  for (let o in e) e[o] !== void 0 && (t[o] = e[o]);
  return t;
}
function Y(...e) {
  for (let t of e) if (t !== void 0) return t;
}
function cr(e, t) {
  let o = e.__unstableInternals;
  return (te(o, "Invalid store"), o[t]);
}
function Me(e, ...t) {
  let o = e,
    r = o,
    n = Symbol(),
    i = Ft,
    s = new Set(),
    a = new Set(),
    u = new Set(),
    c = new Set(),
    l = new Set(),
    m = new WeakMap(),
    f = new WeakMap(),
    d = (A) => (u.add(A), () => u.delete(A)),
    v = () => {
      let A = s.size,
        R = Symbol();
      s.add(R);
      let F = () => {
        (s.delete(R), !s.size && i());
      };
      if (A) return F;
      let H = vi(o).map((O) =>
          be(
            ...t.map((k) => {
              var E;
              let D = (E = k?.getState) == null ? void 0 : E.call(k);
              if (D && qe(D, O))
                return ge(k, [O], (K) => {
                  P(O, K[O], !0);
                });
            })
          )
        ),
        B = [];
      for (let O of u) B.push(O());
      let h = t.map(Mr);
      return ((i = be(...H, ...B, ...h)), F);
    },
    p = (A, R, F = c) => (
      F.add(R),
      f.set(R, A),
      () => {
        var H;
        ((H = m.get(R)) == null || H(), m.delete(R), f.delete(R), F.delete(R));
      }
    ),
    x = (A, R) => p(A, R),
    b = (A, R) => (m.set(R, R(o, o)), p(A, R)),
    g = (A, R) => (m.set(R, R(o, r)), p(A, R, l)),
    w = (A) => Me(pi(o, A), M),
    S = (A) => Me(di(o, A), M),
    C = () => o,
    P = (A, R, F = !1) => {
      var H;
      if (!qe(o, A)) return;
      let B = Qr(R, o[A]);
      if (B === o[A]) return;
      if (!F) for (let E of t) (H = E?.setState) == null || H.call(E, A, B);
      let h = o;
      o = le(Z({}, o), { [A]: B });
      let O = Symbol();
      ((n = O), a.add(A));
      let k = (E, D, K) => {
        var I;
        let q = f.get(E),
          N = (he) => (K ? K.has(he) : he === A);
        (!q || q.some(N)) && ((I = m.get(E)) == null || I(), m.set(E, E(o, D)));
      };
      for (let E of c) k(E, h);
      queueMicrotask(() => {
        if (n !== O) return;
        let E = o;
        for (let D of l) k(D, r, a);
        ((r = E), a.clear());
      });
    },
    M = {
      getState: C,
      setState: P,
      __unstableInternals: { setup: d, init: v, subscribe: x, sync: b, batch: g, pick: w, omit: S },
    };
  return M;
}
function we(e, ...t) {
  if (e) return cr(e, "setup")(...t);
}
function Mr(e, ...t) {
  if (e) return cr(e, "init")(...t);
}
function Jt(e, ...t) {
  if (e) return cr(e, "subscribe")(...t);
}
function ge(e, ...t) {
  if (e) return cr(e, "sync")(...t);
}
function Zt(e, ...t) {
  if (e) return cr(e, "batch")(...t);
}
function lr(e, ...t) {
  if (e) return cr(e, "omit")(...t);
}
function ro(e, ...t) {
  if (e) return cr(e, "pick")(...t);
}
function Vt(...e) {
  let t = e.reduce((r, n) => {
      var i;
      let s = (i = n?.getState) == null ? void 0 : i.call(n);
      return s ? Object.assign(r, s) : r;
    }, {}),
    o = Me(t, ...e);
  return Object.assign({}, ...e, o);
}
var Rf = Object.defineProperty,
  Af = Object.defineProperties,
  Df = Object.getOwnPropertyDescriptors,
  nn = Object.getOwnPropertySymbols,
  ha = Object.prototype.hasOwnProperty,
  ba = Object.prototype.propertyIsEnumerable,
  va = (e, t, o) =>
    t in e ? Rf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : (e[t] = o),
  y = (e, t) => {
    for (var o in t || (t = {})) ha.call(t, o) && va(e, o, t[o]);
    if (nn) for (var o of nn(t)) ba.call(t, o) && va(e, o, t[o]);
    return e;
  },
  T = (e, t) => Af(e, Df(t)),
  z = (e, t) => {
    var o = {};
    for (var r in e) ha.call(e, r) && t.indexOf(r) < 0 && (o[r] = e[r]);
    if (e != null && nn) for (var r of nn(e)) t.indexOf(r) < 0 && ba.call(e, r) && (o[r] = e[r]);
    return o;
  };
var ga = _(X(), 1);
function no(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Tf(e) {
  return !e || !(0, ga.isValidElement)(e) ? !1 : "ref" in e.props || "ref" in e;
}
function xa(e) {
  return Tf(e) ? y({}, e.props).ref || e.ref : null;
}
function Sa(e, t) {
  let o = y({}, e);
  for (let r in t) {
    if (!qe(t, r)) continue;
    if (r === "className") {
      let i = "className";
      o[i] = e[i] ? `${e[i]} ${t[i]}` : t[i];
      continue;
    }
    if (r === "style") {
      let i = "style";
      o[i] = e[i] ? y(y({}, e[i]), t[i]) : t[i];
      continue;
    }
    let n = t[r];
    if (typeof n == "function" && r.startsWith("on")) {
      let i = e[r];
      if (typeof i == "function") {
        o[r] = (...s) => {
          (n(...s), i(...s));
        };
        continue;
      }
    }
    o[r] = n;
  }
  return o;
}
var Ht = kf();
function kf() {
  var e;
  return typeof window < "u" && !!((e = window.document) != null && e.createElement);
}
function ne(e) {
  return e ? ("self" in e ? e.document : e.ownerDocument || document) : document;
}
function io(e) {
  return e ? ("self" in e ? e.self : ne(e).defaultView || window) : self;
}
function Je(e, t = !1) {
  let { activeElement: o } = ne(e);
  if (!o?.nodeName) return null;
  if (so(o) && o.contentDocument) return Je(o.contentDocument.body, t);
  if (t) {
    let r = o.getAttribute("aria-activedescendant");
    if (r) {
      let n = ne(o).getElementById(r);
      if (n) return n;
    }
  }
  return o;
}
function de(e, t) {
  return e === t || e.contains(t);
}
function so(e) {
  return e.tagName === "IFRAME";
}
function Ge(e) {
  let t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? _f.indexOf(e.type) !== -1 : !1;
}
var _f = ["button", "color", "file", "image", "reset", "submit"];
function ao(e) {
  if (typeof e.checkVisibility == "function") return e.checkVisibility();
  let t = e;
  return t.offsetWidth > 0 || t.offsetHeight > 0 || e.getClientRects().length > 0;
}
function ke(e) {
  try {
    let t = e instanceof HTMLInputElement && e.selectionStart !== null,
      o = e.tagName === "TEXTAREA";
    return t || o || !1;
  } catch {
    return !1;
  }
}
function uo(e) {
  return e.isContentEditable || ke(e);
}
function hi(e) {
  if (ke(e)) return e.value;
  if (e.isContentEditable) {
    let t = ne(e).createRange();
    return (t.selectNodeContents(e), t.toString());
  }
  return "";
}
function Or(e) {
  let t = 0,
    o = 0;
  if (ke(e)) ((t = e.selectionStart || 0), (o = e.selectionEnd || 0));
  else if (e.isContentEditable) {
    let r = ne(e).getSelection();
    if (r?.rangeCount && r.anchorNode && de(e, r.anchorNode) && r.focusNode && de(e, r.focusNode)) {
      let n = r.getRangeAt(0),
        i = n.cloneRange();
      (i.selectNodeContents(e),
        i.setEnd(n.startContainer, n.startOffset),
        (t = i.toString().length),
        i.setEnd(n.endContainer, n.endOffset),
        (o = i.toString().length));
    }
  }
  return { start: t, end: o };
}
function Qt(e, t) {
  let o = ["dialog", "menu", "listbox", "tree", "grid"],
    r = e?.getAttribute("role");
  return r && o.indexOf(r) !== -1 ? r : t;
}
function co(e, t) {
  var o;
  let r = { menu: "menuitem", listbox: "option", tree: "treeitem" },
    n = Qt(e);
  return n && (o = r[n]) != null ? o : t;
}
function Rr(e) {
  if (!e) return null;
  let t = (o) => o === "auto" || o === "scroll";
  if (e.clientHeight && e.scrollHeight > e.clientHeight) {
    let { overflowY: o } = getComputedStyle(e);
    if (t(o)) return e;
  } else if (e.clientWidth && e.scrollWidth > e.clientWidth) {
    let { overflowX: o } = getComputedStyle(e);
    if (t(o)) return e;
  }
  return Rr(e.parentElement) || document.scrollingElement || document.body;
}
function lo(e, ...t) {
  /text|search|password|tel|url/i.test(e.type) && e.setSelectionRange(...t);
}
function fo(e, t) {
  let o = e.map((n, i) => [i, n]),
    r = !1;
  return (
    o.sort(([n, i], [s, a]) => {
      let u = t(i),
        c = t(a);
      return u === c || !u || !c ? 0 : Ff(u, c) ? (n > s && (r = !0), -1) : (n < s && (r = !0), 1);
    }),
    r ? o.map(([n, i]) => i) : e
  );
}
function Ff(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
function sn() {
  return Ht && !!navigator.maxTouchPoints;
}
function Ar() {
  return Ht ? /mac|iphone|ipad|ipod/i.test(navigator.platform) : !1;
}
function Lt() {
  return Ht && Ar() && /apple/i.test(navigator.vendor);
}
function bi() {
  return Ht && /firefox\//i.test(navigator.userAgent);
}
function gi() {
  return Ht && navigator.platform.startsWith("Mac") && !sn();
}
function an(e) {
  return !!(e.currentTarget && !de(e.currentTarget, e.target));
}
function Ae(e) {
  return e.target === e.currentTarget;
}
function un(e) {
  let t = e.currentTarget;
  if (!t) return !1;
  let o = Ar();
  if ((o && !e.metaKey) || (!o && !e.ctrlKey)) return !1;
  let r = t.tagName.toLowerCase();
  return (
    r === "a" || (r === "button" && t.type === "submit") || (r === "input" && t.type === "submit")
  );
}
function cn(e) {
  let t = e.currentTarget;
  if (!t) return !1;
  let o = t.tagName.toLowerCase();
  return e.altKey
    ? o === "a" || (o === "button" && t.type === "submit") || (o === "input" && t.type === "submit")
    : !1;
}
function Ca(e, t, o) {
  let r = new Event(t, o);
  return e.dispatchEvent(r);
}
function fr(e, t) {
  let o = new FocusEvent("blur", t),
    r = e.dispatchEvent(o),
    n = le(Z({}, t), { bubbles: !0 });
  return (e.dispatchEvent(new FocusEvent("focusout", n)), r);
}
function ya(e, t, o) {
  let r = new KeyboardEvent(t, o);
  return e.dispatchEvent(r);
}
function xi(e, t) {
  let o = new MouseEvent("click", t);
  return e.dispatchEvent(o);
}
function bt(e, t) {
  let o = t || e.currentTarget,
    r = e.relatedTarget;
  return !r || !de(o, r);
}
function gt(e, t, o, r) {
  let i = ((a) => {
      if (r) {
        let c = setTimeout(a, r);
        return () => clearTimeout(c);
      }
      let u = requestAnimationFrame(a);
      return () => cancelAnimationFrame(u);
    })(() => {
      (e.removeEventListener(t, s, !0), o());
    }),
    s = () => {
      (i(), o());
    };
  return (e.addEventListener(t, s, { once: !0, capture: !0 }), i);
}
function xe(e, t, o, r = window) {
  let n = [];
  try {
    r.document.addEventListener(e, t, o);
    for (let s of Array.from(r.frames)) n.push(xe(e, t, o, s));
  } catch {}
  return () => {
    try {
      r.document.removeEventListener(e, t, o);
    } catch {}
    for (let s of n) s();
  };
}
var Vf = _(X(), 1),
  ve = _(X(), 1),
  Si = y({}, Vf),
  wa = Si.useId,
  Mv = Si.useDeferredValue,
  Pa = Si.useInsertionEffect,
  Q = Ht ? ve.useLayoutEffect : ve.useEffect;
function Hf(e) {
  let [t] = (0, ve.useState)(e);
  return t;
}
function fn(e) {
  let t = (0, ve.useRef)(e);
  return (
    Q(() => {
      t.current = e;
    }),
    t
  );
}
function $(e) {
  let t = (0, ve.useRef)(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return (
    Pa
      ? Pa(() => {
          t.current = e;
        })
      : (t.current = e),
    (0, ve.useCallback)((...o) => {
      var r;
      return (r = t.current) == null ? void 0 : r.call(t, ...o);
    }, [])
  );
}
function Oa(e) {
  let [t, o] = (0, ve.useState)(null);
  return (
    Q(() => {
      if (t == null || !e) return;
      let r = null;
      return (
        e((n) => ((r = n), t)),
        () => {
          e(r);
        }
      );
    }, [t, e]),
    [t, o]
  );
}
function ee(...e) {
  return (0, ve.useMemo)(() => {
    if (e.some(Boolean))
      return (t) => {
        for (let o of e) no(o, t);
      };
  }, e);
}
function De(e) {
  if (wa) {
    let r = wa();
    return e || r;
  }
  let [t, o] = (0, ve.useState)(e);
  return (
    Q(() => {
      if (e || t) return;
      let r = Math.random().toString(36).slice(2, 8);
      o(`id-${r}`);
    }, [e, t]),
    e || t
  );
}
function mn(e, t) {
  let o = (i) => {
      if (typeof i == "string") return i;
    },
    [r, n] = (0, ve.useState)(() => o(t));
  return (
    Q(() => {
      let i = e && "current" in e ? e.current : e;
      n(i?.tagName.toLowerCase() || o(t));
    }, [e, t]),
    r
  );
}
function Ra(e, t, o) {
  let r = Hf(o),
    [n, i] = (0, ve.useState)(r);
  return (
    (0, ve.useEffect)(() => {
      let s = e && "current" in e ? e.current : e;
      if (!s) return;
      let a = () => {
          let c = s.getAttribute(t);
          i(c ?? r);
        },
        u = new MutationObserver(a);
      return (u.observe(s, { attributeFilter: [t] }), a(), () => u.disconnect());
    }, [e, t, r]),
    n
  );
}
function ot(e, t) {
  let o = (0, ve.useRef)(!1);
  ((0, ve.useEffect)(() => {
    if (o.current) return e();
    o.current = !0;
  }, t),
    (0, ve.useEffect)(
      () => () => {
        o.current = !1;
      },
      []
    ));
}
function Aa(e, t) {
  let o = (0, ve.useRef)(!1);
  (Q(() => {
    if (o.current) return e();
    o.current = !0;
  }, t),
    Q(
      () => () => {
        o.current = !1;
      },
      []
    ));
}
function dn() {
  return (0, ve.useReducer)(() => [], []);
}
function ae(e) {
  return $(typeof e == "function" ? e : () => e);
}
function fe(e, t, o = []) {
  let r = (0, ve.useCallback)(
    (n) => (e.wrapElement && (n = e.wrapElement(n)), t(n)),
    [...o, e.wrapElement]
  );
  return T(y({}, e), { wrapElement: r });
}
function Dr(e = !1, t) {
  let [o, r] = (0, ve.useState)(null);
  return { portalRef: ee(r, t), portalNode: o, domReady: !e || o };
}
function pn(e, t, o) {
  let r = e.onLoadedMetadataCapture,
    n = (0, ve.useMemo)(() => Object.assign(() => {}, T(y({}, r), { [t]: o })), [r, t, o]);
  return [r?.[t], { onLoadedMetadataCapture: n }];
}
var Ea = !1;
function Tr() {
  return (
    (0, ve.useEffect)(() => {
      Ea ||
        (xe("mousemove", Nf, !0),
        xe("mousedown", ln, !0),
        xe("mouseup", ln, !0),
        xe("keydown", ln, !0),
        xe("scroll", ln, !0),
        (Ea = !0));
    }, []),
    $(() => Ci)
  );
}
var Ci = !1,
  Ia = 0,
  Ma = 0;
function Lf(e) {
  let t = e.movementX || e.screenX - Ia,
    o = e.movementY || e.screenY - Ma;
  return ((Ia = e.screenX), (Ma = e.screenY), t || o || !1);
}
function Nf(e) {
  Lf(e) && (Ci = !0);
}
function ln() {
  Ci = !1;
}
var ze = _(X(), 1),
  mr = _(oe(), 1);
function W(e) {
  let t = ze.forwardRef((o, r) => e(T(y({}, o), { ref: r })));
  return ((t.displayName = e.displayName || e.name), t);
}
function er(e, t) {
  return ze.memo(e, t);
}
function j(e, t) {
  let o = t,
    { wrapElement: r, render: n } = o,
    i = z(o, ["wrapElement", "render"]),
    s = ee(t.ref, xa(n)),
    a;
  if (ze.isValidElement(n)) {
    let u = T(y({}, n.props), { ref: s });
    a = ze.cloneElement(n, Sa(i, u));
  } else n ? (a = n(i)) : (a = (0, mr.jsx)(e, y({}, i)));
  return r ? r(a) : a;
}
function U(e) {
  let t = (o = {}) => e(o);
  return ((t.displayName = e.name), t);
}
function Ee(e = [], t = []) {
  let o = ze.createContext(void 0),
    r = ze.createContext(void 0),
    n = () => ze.useContext(o),
    i = (c = !1) => {
      let l = ze.useContext(r),
        m = n();
      return c ? l : l || m;
    },
    s = () => {
      let c = ze.useContext(r),
        l = n();
      if (!(c && c === l)) return l;
    },
    a = (c) =>
      e.reduceRight(
        (l, m) => (0, mr.jsx)(m, T(y({}, c), { children: l })),
        (0, mr.jsx)(o.Provider, y({}, c))
      );
  return {
    context: o,
    scopedContext: r,
    useContext: n,
    useScopedContext: i,
    useProviderContext: s,
    ContextProvider: a,
    ScopedContextProvider: (c) =>
      (0, mr.jsx)(
        a,
        T(y({}, c), {
          children: t.reduceRight(
            (l, m) => (0, mr.jsx)(m, T(y({}, c), { children: l })),
            (0, mr.jsx)(r.Provider, y({}, c))
          ),
        })
      ),
  };
}
var mo = Ee(),
  Da = mo.useContext,
  _v = mo.useScopedContext,
  Fv = mo.useProviderContext,
  Ta = mo.ContextProvider,
  ka = mo.ScopedContextProvider;
var yi = _(X(), 1),
  po = Ee([Ta], [ka]),
  Nt = po.useContext,
  Nv = po.useScopedContext,
  _a = po.useProviderContext,
  xt = po.ContextProvider,
  tr = po.ScopedContextProvider,
  Fa = (0, yi.createContext)(void 0),
  Va = (0, yi.createContext)(void 0);
var Bf = { id: null };
function Ha(e, t, o = !1) {
  let r = e.findIndex((n) => n.id === t);
  return [...e.slice(r + 1), ...(o ? [Bf] : []), ...e.slice(0, r)];
}
function La(e, t) {
  return e.find((o) => (t ? !o.disabled && o.id !== t : !o.disabled));
}
function St(e, t) {
  return (t && e.item(t)) || null;
}
function Na(e) {
  let t = [];
  for (let o of e) {
    let r = t.find((n) => {
      var i;
      return ((i = n[0]) == null ? void 0 : i.rowId) === o.rowId;
    });
    r ? r.push(o) : t.push([o]);
  }
  return t;
}
function Ba(e, t = !1) {
  if (ke(e)) e.setSelectionRange(t ? e.value.length : 0, e.value.length);
  else if (e.isContentEditable) {
    let o = ne(e).getSelection();
    (o?.selectAllChildren(e), t && o?.collapseToEnd());
  }
}
var wi = Symbol("FOCUS_SILENTLY");
function Wa(e) {
  ((e[wi] = !0), e.focus({ preventScroll: !0 }));
}
function za(e) {
  let t = e[wi];
  return (delete e[wi], t);
}
function dr(e, t, o) {
  if (!t || t === o) return !1;
  let r = e.item(t.id);
  return !(!r || (o && r.element === o));
}
var vn = _(X(), 1),
  Wf = "div",
  Pi = U(function (t) {
    var o = t,
      { store: r, shouldRegisterItem: n = !0, getItem: i = to, element: s } = o,
      a = z(o, ["store", "shouldRegisterItem", "getItem", "element"]);
    let u = Da();
    r = r || u;
    let c = De(a.id),
      l = (0, vn.useRef)(s);
    return (
      (0, vn.useEffect)(() => {
        let m = l.current;
        if (!c || !m || !n) return;
        let f = i({ id: c, element: m });
        return r?.renderItem(f);
      }, [c, n, i, r]),
      (a = T(y({}, a), { ref: ee(l, a.ref) })),
      We(a)
    );
  }),
  Gv = W(function (t) {
    let o = Pi(t);
    return j(Wf, o);
  });
var ja = _(X(), 1),
  hn = (0, ja.createContext)(!0);
var bn =
  "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], summary, iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
function zf(e) {
  return Number.parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
function Ze(e) {
  return !(!e.matches(bn) || !ao(e) || e.closest("[inert]"));
}
function kr(e) {
  if (!Ze(e) || zf(e)) return !1;
  if (!("form" in e) || !e.form || e.checked || e.type !== "radio") return !0;
  let t = e.form.elements.namedItem(e.name);
  if (!t || !("length" in t)) return !0;
  let o = Je(e);
  return !o || o === e || !("form" in o) || o.form !== e.form || o.name !== e.name;
}
function Ei(e, t) {
  let o = Array.from(e.querySelectorAll(bn));
  t && o.unshift(e);
  let r = o.filter(Ze);
  return (
    r.forEach((n, i) => {
      if (so(n) && n.contentDocument) {
        let s = n.contentDocument.body;
        r.splice(i, 1, ...Ei(s));
      }
    }),
    r
  );
}
function vo(e, t, o) {
  let r = Array.from(e.querySelectorAll(bn)),
    n = r.filter(kr);
  return (
    t && kr(e) && n.unshift(e),
    n.forEach((i, s) => {
      if (so(i) && i.contentDocument) {
        let a = i.contentDocument.body,
          u = vo(a, !1, o);
        n.splice(s, 1, ...u);
      }
    }),
    !n.length && o ? r : n
  );
}
function Ka(e, t, o) {
  let [r] = vo(e, t, o);
  return r || null;
}
function jf(e, t, o, r) {
  let n = Je(e),
    i = Ei(e, t),
    s = i.indexOf(n),
    a = i.slice(s + 1);
  return a.find(kr) || (o ? i.find(kr) : null) || (r ? a[0] : null) || null;
}
function gn(e, t) {
  return jf(document.body, !1, e, t);
}
function Kf(e, t, o, r) {
  let n = Je(e),
    i = Ei(e, t).reverse(),
    s = i.indexOf(n),
    a = i.slice(s + 1);
  return a.find(kr) || (o ? i.find(kr) : null) || (r ? a[0] : null) || null;
}
function Ii(e, t) {
  return Kf(document.body, !1, e, t);
}
function Ua(e) {
  for (; e && !Ze(e);) e = e.closest(bn);
  return e || null;
}
function nt(e) {
  let t = Je(e);
  if (!t) return !1;
  if (t === e) return !0;
  let o = t.getAttribute("aria-activedescendant");
  return o ? o === e.id : !1;
}
function it(e) {
  let t = Je(e);
  if (!t) return !1;
  if (de(e, t)) return !0;
  let o = t.getAttribute("aria-activedescendant");
  return !o || !("id" in e) ? !1 : o === e.id ? !0 : !!e.querySelector(`#${CSS.escape(o)}`);
}
function xn(e) {
  !it(e) && Ze(e) && e.focus();
}
function Uf(e) {
  var t;
  let o = (t = e.getAttribute("tabindex")) != null ? t : "";
  (e.setAttribute("data-tabindex", o), e.setAttribute("tabindex", "-1"));
}
function $a(e, t) {
  let o = vo(e, t);
  for (let r of o) Uf(r);
}
function qa(e) {
  let t = e.querySelectorAll("[data-tabindex]"),
    o = (r) => {
      let n = r.getAttribute("data-tabindex");
      (r.removeAttribute("data-tabindex"),
        n ? r.setAttribute("tabindex", n) : r.removeAttribute("tabindex"));
    };
  e.hasAttribute("data-tabindex") && o(e);
  for (let r of t) o(r);
}
function Ga(e, t) {
  "scrollIntoView" in e
    ? (e.focus({ preventScroll: !0 }),
      e.scrollIntoView(Z({ block: "nearest", inline: "nearest" }, t)))
    : e.focus();
}
var Qe = _(X(), 1),
  $f = "div",
  Ya = Lt(),
  qf = [
    "text",
    "search",
    "url",
    "tel",
    "email",
    "password",
    "number",
    "date",
    "month",
    "week",
    "time",
    "datetime",
    "datetime-local",
  ],
  Qa = Symbol("safariFocusAncestor");
function eu(e) {
  return e ? !!e[Qa] : !1;
}
function Xa(e, t) {
  e && (e[Qa] = t);
}
function Gf(e) {
  let { tagName: t, readOnly: o, type: r } = e;
  return (t === "TEXTAREA" && !o) || (t === "SELECT" && !o)
    ? !0
    : t === "INPUT" && !o
      ? qf.includes(r)
      : !!(e.isContentEditable || (e.getAttribute("role") === "combobox" && e.dataset.name));
}
function Yf(e) {
  return "labels" in e ? e.labels : null;
}
function Ja(e) {
  return e.tagName.toLowerCase() === "input" && e.type
    ? e.type === "radio" || e.type === "checkbox"
    : !1;
}
function Xf(e) {
  return e
    ? e === "button" ||
        e === "summary" ||
        e === "input" ||
        e === "select" ||
        e === "textarea" ||
        e === "a"
    : !0;
}
function Jf(e) {
  return e ? e === "button" || e === "input" || e === "select" || e === "textarea" : !0;
}
function Zf(e, t, o, r, n) {
  return e ? (t ? (o && !r ? -1 : void 0) : o ? n : n || 0) : n;
}
function Mi(e, t) {
  return $((o) => {
    (e?.(o), !o.defaultPrevented && t && (o.stopPropagation(), o.preventDefault()));
  });
}
var Za = !1,
  Oi = !0;
function Qf(e) {
  let t = e.target;
  t && "hasAttribute" in t && (t.hasAttribute("data-focus-visible") || (Oi = !1));
}
function em(e) {
  e.metaKey || e.ctrlKey || e.altKey || (Oi = !0);
}
var Bt = U(function (t) {
    var o = t,
      { focusable: r = !0, accessibleWhenDisabled: n, autoFocus: i, onFocusVisible: s } = o,
      a = z(o, ["focusable", "accessibleWhenDisabled", "autoFocus", "onFocusVisible"]);
    let u = (0, Qe.useRef)(null);
    ((0, Qe.useEffect)(() => {
      r && (Za || (xe("mousedown", Qf, !0), xe("keydown", em, !0), (Za = !0)));
    }, [r]),
      Ya &&
        (0, Qe.useEffect)(() => {
          if (!r) return;
          let E = u.current;
          if (!E || !Ja(E)) return;
          let D = Yf(E);
          if (!D) return;
          let K = () => queueMicrotask(() => E.focus());
          for (let I of D) I.addEventListener("mouseup", K);
          return () => {
            for (let I of D) I.removeEventListener("mouseup", K);
          };
        }, [r]));
    let c = r && ft(a),
      l = !!c && !n,
      [m, f] = (0, Qe.useState)(!1);
    ((0, Qe.useEffect)(() => {
      r && l && m && f(!1);
    }, [r, l, m]),
      (0, Qe.useEffect)(() => {
        if (!r || !m) return;
        let E = u.current;
        if (!E || typeof IntersectionObserver > "u") return;
        let D = new IntersectionObserver(() => {
          Ze(E) || f(!1);
        });
        return (D.observe(E), () => D.disconnect());
      }, [r, m]));
    let d = Mi(a.onKeyPressCapture, c),
      v = Mi(a.onMouseDownCapture, c),
      p = Mi(a.onClickCapture, c),
      x = a.onMouseDown,
      b = $((E) => {
        if ((x?.(E), E.defaultPrevented || !r)) return;
        let D = E.currentTarget;
        if (!Ya || an(E) || (!Ge(D) && !Ja(D))) return;
        let K = !1,
          I = () => {
            K = !0;
          },
          q = { capture: !0, once: !0 };
        D.addEventListener("focusin", I, q);
        let N = Ua(D.parentElement);
        (Xa(N, !0),
          gt(D, "mouseup", () => {
            (D.removeEventListener("focusin", I, !0), Xa(N, !1), !K && xn(D));
          }));
      }),
      g = (E, D) => {
        if ((D && (E.currentTarget = D), !r)) return;
        let K = E.currentTarget;
        K && nt(K) && (s?.(E), !E.defaultPrevented && ((K.dataset.focusVisible = "true"), f(!0)));
      },
      w = a.onKeyDownCapture,
      S = $((E) => {
        if ((w?.(E), E.defaultPrevented || !r || m || E.metaKey || E.altKey || E.ctrlKey || !Ae(E)))
          return;
        let D = E.currentTarget;
        gt(D, "focusout", () => g(E, D));
      }),
      C = a.onFocusCapture,
      P = $((E) => {
        if ((C?.(E), E.defaultPrevented || !r)) return;
        if (!Ae(E)) {
          f(!1);
          return;
        }
        let D = E.currentTarget,
          K = () => g(E, D);
        Oi || Gf(E.target) ? gt(E.target, "focusout", K) : f(!1);
      }),
      M = a.onBlur,
      A = $((E) => {
        (M?.(E), r && bt(E) && (E.currentTarget.removeAttribute("data-focus-visible"), f(!1)));
      }),
      R = (0, Qe.useContext)(hn),
      F = $((E) => {
        r &&
          i &&
          E &&
          R &&
          queueMicrotask(() => {
            nt(E) || (Ze(E) && E.focus());
          });
      }),
      H = mn(u),
      B = r && Xf(H),
      h = r && Jf(H),
      O = a.style,
      k = (0, Qe.useMemo)(() => (l ? y({ pointerEvents: "none" }, O) : O), [l, O]);
    return (
      (a = T(
        y(
          {
            "data-focus-visible": (r && m) || void 0,
            "data-autofocus": i || void 0,
            "aria-disabled": c || void 0,
          },
          a
        ),
        {
          ref: ee(u, F, a.ref),
          style: k,
          tabIndex: Zf(r, l, B, h, a.tabIndex),
          disabled: h && l ? !0 : void 0,
          contentEditable: c ? void 0 : a.contentEditable,
          onKeyPressCapture: d,
          onClickCapture: p,
          onMouseDownCapture: v,
          onMouseDown: b,
          onKeyDownCapture: S,
          onFocusCapture: P,
          onBlur: A,
        }
      )),
      We(a)
    );
  }),
  fh = W(function (t) {
    let o = Bt(t);
    return j($f, o);
  });
var rr = _(X(), 1),
  tm = "button";
function tu(e) {
  if (!e.isTrusted) return !1;
  let t = e.currentTarget;
  return e.key === "Enter"
    ? Ge(t) || t.tagName === "SUMMARY" || t.tagName === "A"
    : e.key === " "
      ? Ge(t) || t.tagName === "SUMMARY" || t.tagName === "INPUT" || t.tagName === "SELECT"
      : !1;
}
var rm = Symbol("command"),
  ho = U(function (t) {
    var o = t,
      { clickOnEnter: r = !0, clickOnSpace: n = !0 } = o,
      i = z(o, ["clickOnEnter", "clickOnSpace"]);
    let s = (0, rr.useRef)(null),
      [a, u] = (0, rr.useState)(!1);
    (0, rr.useEffect)(() => {
      s.current && u(Ge(s.current));
    }, []);
    let [c, l] = (0, rr.useState)(!1),
      m = (0, rr.useRef)(!1),
      f = ft(i),
      [d, v] = pn(i, rm, !0),
      p = i.onKeyDown,
      x = $((w) => {
        p?.(w);
        let S = w.currentTarget;
        if (w.defaultPrevented || d || f || !Ae(w) || ke(S) || S.isContentEditable) return;
        let C = r && w.key === "Enter",
          P = n && w.key === " ",
          M = w.key === "Enter" && !r,
          A = w.key === " " && !n;
        if (M || A) {
          w.preventDefault();
          return;
        }
        if (C || P) {
          let R = tu(w);
          if (C) {
            if (!R) {
              w.preventDefault();
              let F = w,
                { view: H } = F,
                B = z(F, ["view"]),
                h = () => xi(S, B);
              bi() ? gt(S, "keyup", h) : queueMicrotask(h);
            }
          } else P && ((m.current = !0), R || (w.preventDefault(), l(!0)));
        }
      }),
      b = i.onKeyUp,
      g = $((w) => {
        if ((b?.(w), w.defaultPrevented || d || f || w.metaKey)) return;
        let S = n && w.key === " ";
        if (m.current && S && ((m.current = !1), !tu(w))) {
          (w.preventDefault(), l(!1));
          let C = w.currentTarget,
            P = w,
            { view: M } = P,
            A = z(P, ["view"]);
          queueMicrotask(() => xi(C, A));
        }
      });
    return (
      (i = T(y(y({ "data-active": c || void 0, type: a ? "button" : void 0 }, v), i), {
        ref: ee(s, i.ref),
        onKeyDown: x,
        onKeyUp: g,
      })),
      (i = Bt(i)),
      i
    );
  }),
  Ch = W(function (t) {
    let o = ho(t);
    return j(tm, o);
  });
var Ct = _(X(), 1),
  ru = _(wf(), 1),
  { useSyncExternalStore: ou } = ru.default,
  nu = () => () => {};
function me(e, t = to) {
  let o = Ct.useCallback((n) => (e ? Jt(e, null, n) : nu()), [e]),
    r = () => {
      let n = typeof t == "string" ? t : null,
        i = typeof t == "function" ? t : null,
        s = e?.getState();
      if (i) return i(s);
      if (s && n && qe(s, n)) return s[n];
    };
  return ou(o, r, r);
}
function bo(e, t) {
  let o = Ct.useRef({}),
    r = Ct.useCallback((i) => (e ? Jt(e, null, i) : nu()), [e]),
    n = () => {
      let i = e?.getState(),
        s = !1,
        a = o.current;
      for (let u in t) {
        let c = t[u];
        if (typeof c == "function") {
          let l = c(i);
          l !== a[u] && ((a[u] = l), (s = !0));
        }
        if (typeof c == "string") {
          if (!i || !qe(i, c)) continue;
          let l = i[c];
          l !== a[u] && ((a[u] = l), (s = !0));
        }
      }
      return (s && (o.current = y({}, a)), o.current);
    };
  return ou(r, n, n);
}
function pe(e, t, o, r) {
  let n = qe(t, o) ? t[o] : void 0,
    i = r ? t[r] : void 0,
    s = fn({ value: n, setValue: i });
  (Q(
    () =>
      ge(e, [o], (a, u) => {
        let { value: c, setValue: l } = s.current;
        l && a[o] !== u[o] && a[o] !== c && l(a[o]);
      }),
    [e, o]
  ),
    Q(() => {
      if (n !== void 0)
        return (
          e.setState(o, n),
          Zt(e, [o], () => {
            n !== void 0 && e.setState(o, n);
          })
        );
    }));
}
function je(e, t) {
  let [o, r] = Ct.useState(() => e(t));
  Q(() => Mr(o), [o]);
  let n = Ct.useCallback((a) => me(o, a), [o]),
    i = Ct.useMemo(() => T(y({}, o), { useState: n }), [o, n]),
    s = $(() => {
      r((a) => e(y(y({}, t), a.getState())));
    });
  return [i, s];
}
var Wt = _(X(), 1),
  su = _(oe(), 1),
  om = "button";
function nm(e) {
  return uo(e) ? !0 : e.tagName === "INPUT" && !Ge(e);
}
function im(e, t = !1) {
  let o = e.clientHeight,
    { top: r } = e.getBoundingClientRect(),
    n = Math.max(o * 0.875, o - 40) * 1.5,
    i = t ? o - n + r : n + r;
  return e.tagName === "HTML" ? i + e.scrollTop : i;
}
function sm(e, t = !1) {
  let { top: o } = e.getBoundingClientRect();
  return t ? o + e.clientHeight : o;
}
function iu(e, t, o, r = !1) {
  var n;
  if (!t || !o) return;
  let { renderedItems: i } = t.getState(),
    s = Rr(e);
  if (!s) return;
  let a = im(s, r),
    u,
    c;
  for (let l = 0; l < i.length; l += 1) {
    let m = u;
    if (((u = o(l)), !u)) break;
    if (u === m) continue;
    let f = (n = St(t, u)) == null ? void 0 : n.element;
    if (!f) continue;
    let v = sm(f, r) - a,
      p = Math.abs(v);
    if ((r && v <= 0) || (!r && v >= 0)) {
      c !== void 0 && c < p && (u = m);
      break;
    }
    c = p;
  }
  return u;
}
function am(e, t) {
  return Ae(e) ? !1 : dr(t, e.target);
}
var _r = U(function (t) {
    var o = t,
      {
        store: r,
        rowId: n,
        preventScrollOnKeyDown: i = !1,
        moveOnKeyPress: s = !0,
        tabbable: a = !1,
        getItem: u,
        "aria-setsize": c,
        "aria-posinset": l,
      } = o,
      m = z(o, [
        "store",
        "rowId",
        "preventScrollOnKeyDown",
        "moveOnKeyPress",
        "tabbable",
        "getItem",
        "aria-setsize",
        "aria-posinset",
      ]);
    let f = Nt();
    r = r || f;
    let d = De(m.id),
      v = (0, Wt.useRef)(null),
      p = (0, Wt.useContext)(Va),
      b = ft(m) && !m.accessibleWhenDisabled,
      {
        rowId: g,
        baseElement: w,
        isActiveItem: S,
        ariaSetSize: C,
        ariaPosInSet: P,
        isTabbable: M,
      } = bo(r, {
        rowId(I) {
          if (n) return n;
          if (I && p?.baseElement && p.baseElement === I.baseElement) return p.id;
        },
        baseElement(I) {
          return I?.baseElement || void 0;
        },
        isActiveItem(I) {
          return !!I && I.activeId === d;
        },
        ariaSetSize(I) {
          if (c != null) return c;
          if (I && p?.ariaSetSize && p.baseElement === I.baseElement) return p.ariaSetSize;
        },
        ariaPosInSet(I) {
          if (l != null) return l;
          if (!I || !p?.ariaPosInSet || p.baseElement !== I.baseElement) return;
          let q = I.renderedItems.filter((N) => N.rowId === g);
          return p.ariaPosInSet + q.findIndex((N) => N.id === d);
        },
        isTabbable(I) {
          if (!I?.renderedItems.length) return !0;
          if (I.virtualFocus) return !1;
          if (a) return !0;
          if (I.activeId === null) return !1;
          let q = r?.item(I.activeId);
          return q?.disabled || !q?.element ? !0 : I.activeId === d;
        },
      }),
      A = (0, Wt.useCallback)(
        (I) => {
          var q;
          let N = T(y({}, I), {
            id: d || I.id,
            rowId: g,
            disabled: !!b,
            children: (q = I.element) == null ? void 0 : q.textContent,
          });
          return u ? u(N) : N;
        },
        [d, g, b, u]
      ),
      R = m.onFocus,
      F = (0, Wt.useRef)(!1),
      H = $((I) => {
        if ((R?.(I), I.defaultPrevented || an(I) || !d || !r || am(I, r))) return;
        let { virtualFocus: q, baseElement: N } = r.getState();
        if (
          (r.setActiveId(d),
          uo(I.currentTarget) && Ba(I.currentTarget),
          !q || !Ae(I) || nm(I.currentTarget) || !N?.isConnected)
        )
          return;
        (Lt() &&
          I.currentTarget.hasAttribute("data-autofocus") &&
          I.currentTarget.scrollIntoView({ block: "nearest", inline: "nearest" }),
          (F.current = !0),
          I.relatedTarget === N || dr(r, I.relatedTarget) ? Wa(N) : N.focus());
      }),
      B = m.onBlurCapture,
      h = $((I) => {
        if ((B?.(I), I.defaultPrevented)) return;
        let q = r?.getState();
        q?.virtualFocus && F.current && ((F.current = !1), I.preventDefault(), I.stopPropagation());
      }),
      O = m.onKeyDown,
      k = ae(i),
      E = ae(s),
      D = $((I) => {
        if ((O?.(I), I.defaultPrevented || !Ae(I) || !r)) return;
        let { currentTarget: q } = I,
          N = r.getState(),
          he = r.item(d),
          ye = !!he?.rowId,
          Se = N.orientation !== "horizontal",
          J = N.orientation !== "vertical",
          Oe = () => !!(ye || J || !N.baseElement || !ke(N.baseElement)),
          Ue = {
            ArrowUp: (ye || Se) && r.up,
            ArrowRight: (ye || J) && r.next,
            ArrowDown: (ye || Se) && r.down,
            ArrowLeft: (ye || J) && r.previous,
            Home: () => {
              if (Oe()) return !ye || I.ctrlKey ? r?.first() : r?.previous(-1);
            },
            End: () => {
              if (Oe()) return !ye || I.ctrlKey ? r?.last() : r?.next(-1);
            },
            PageUp: () => iu(q, r, r?.up, !0),
            PageDown: () => iu(q, r, r?.down),
          }[I.key];
        if (Ue) {
          if (uo(q)) {
            let Ne = Or(q),
              Ot = J && I.key === "ArrowLeft",
              Gt = J && I.key === "ArrowRight",
              lt = Se && I.key === "ArrowUp",
              ht = Se && I.key === "ArrowDown";
            if (Gt || ht) {
              let { length: Yt } = hi(q);
              if (Ne.end !== Yt) return;
            } else if ((Ot || lt) && Ne.start !== 0) return;
          }
          let Xe = Ue();
          if (k(I) || Xe !== void 0) {
            if (!E(I)) return;
            (I.preventDefault(), r.move(Xe));
          }
        }
      }),
      K = (0, Wt.useMemo)(() => ({ id: d, baseElement: w }), [d, w]);
    return (
      (m = fe(m, (I) => (0, su.jsx)(Fa.Provider, { value: K, children: I }), [K])),
      (m = T(y({ id: d, "data-active-item": S || void 0 }, m), {
        ref: ee(v, m.ref),
        tabIndex: M ? m.tabIndex : -1,
        onFocus: H,
        onBlurCapture: h,
        onKeyDown: D,
      })),
      (m = ho(m)),
      (m = Pi(
        T(y({ store: r }, m), { getItem: A, shouldRegisterItem: d ? m.shouldRegisterItem : !1 })
      )),
      We(T(y({}, m), { "aria-setsize": C, "aria-posinset": P }))
    );
  }),
  Ri = er(
    W(function (t) {
      let o = _r(t);
      return j(om, o);
    })
  );
function go(e) {
  let t = [];
  for (let o of e) t.push(...o);
  return t;
}
function Fr(e) {
  return e.slice().reverse();
}
var yt = _(X(), 1),
  uu = _(oe(), 1),
  um = "div";
function cm(e) {
  return e.some((t) => !!t.rowId);
}
function lm(e) {
  let t = e.target;
  return t && !ke(t) ? !1 : e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
function fm(e) {
  return e.key === "Shift" || e.key === "Control" || e.key === "Alt" || e.key === "Meta";
}
function au(e, t, o) {
  return $((r) => {
    var n;
    if ((t?.(r), r.defaultPrevented || r.isPropagationStopped() || !Ae(r) || fm(r) || lm(r)))
      return;
    let i = e.getState(),
      s = (n = St(e, i.activeId)) == null ? void 0 : n.element;
    if (!s) return;
    let a = r,
      { view: u } = a,
      c = z(a, ["view"]),
      l = o?.current;
    (s !== l && s.focus(),
      ya(s, r.type, c) || r.preventDefault(),
      r.currentTarget.contains(s) && r.stopPropagation());
  });
}
function mm(e) {
  return La(go(Fr(Na(e))));
}
function dm(e) {
  let [t, o] = (0, yt.useState)(!1),
    r = (0, yt.useCallback)(() => o(!0), []),
    n = e.useState((i) => St(e, i.activeId));
  return (
    (0, yt.useEffect)(() => {
      let i = n?.element;
      t && i && (o(!1), i.focus({ preventScroll: !0 }));
    }, [n, t]),
    r
  );
}
var Vr = U(function (t) {
    var o = t,
      { store: r, composite: n = !0, focusOnMove: i = n, moveOnKeyPress: s = !0 } = o,
      a = z(o, ["store", "composite", "focusOnMove", "moveOnKeyPress"]);
    let u = _a();
    ((r = r || u), te(r, !1));
    let c = (0, yt.useRef)(null),
      l = (0, yt.useRef)(null),
      m = dm(r),
      f = r.useState("moves"),
      [, d] = Oa(n ? r.setBaseElement : null);
    ((0, yt.useEffect)(() => {
      var h;
      if (!r || !f || !n || !i) return;
      let { activeId: O } = r.getState(),
        k = (h = St(r, O)) == null ? void 0 : h.element;
      k && Ga(k);
    }, [r, f, n, i]),
      Q(() => {
        if (!r || !f || !n) return;
        let { baseElement: h, activeId: O } = r.getState();
        if (!(O === null) || !h) return;
        let E = l.current;
        ((l.current = null), E && fr(E, { relatedTarget: h }), nt(h) || h.focus());
      }, [r, f, n]));
    let v = r.useState("activeId"),
      p = r.useState("virtualFocus");
    Q(() => {
      var h;
      if (!r || !n || !p) return;
      let O = l.current;
      if (((l.current = null), !O)) return;
      let E = ((h = St(r, v)) == null ? void 0 : h.element) || Je(O);
      E !== O && fr(O, { relatedTarget: E });
    }, [r, v, p, n]);
    let x = au(r, a.onKeyDownCapture, l),
      b = au(r, a.onKeyUpCapture, l),
      g = a.onFocusCapture,
      w = $((h) => {
        if ((g?.(h), h.defaultPrevented || !r)) return;
        let { virtualFocus: O } = r.getState();
        if (!O) return;
        let k = h.relatedTarget,
          E = za(h.currentTarget);
        Ae(h) && E && (h.stopPropagation(), (l.current = k));
      }),
      S = a.onFocus,
      C = $((h) => {
        if ((S?.(h), h.defaultPrevented || !n || !r)) return;
        let { relatedTarget: O } = h,
          { virtualFocus: k } = r.getState();
        k ? Ae(h) && !dr(r, O) && queueMicrotask(m) : Ae(h) && r.setActiveId(null);
      }),
      P = a.onBlurCapture,
      M = $((h) => {
        var O;
        if ((P?.(h), h.defaultPrevented || !r)) return;
        let { virtualFocus: k, activeId: E } = r.getState();
        if (!k) return;
        let D = (O = St(r, E)) == null ? void 0 : O.element,
          K = h.relatedTarget,
          I = dr(r, K),
          q = l.current;
        ((l.current = null),
          Ae(h) && I
            ? (K === D ? q && q !== K && fr(q, h) : D ? fr(D, h) : q && fr(q, h),
              h.stopPropagation())
            : !dr(r, h.target) && D && fr(D, h));
      }),
      A = a.onKeyDown,
      R = ae(s),
      F = $((h) => {
        var O;
        if ((A?.(h), h.nativeEvent.isComposing || h.defaultPrevented || !r || !Ae(h))) return;
        let { orientation: k, renderedItems: E, activeId: D } = r.getState(),
          K = St(r, D);
        if ((O = K?.element) != null && O.isConnected) return;
        let I = k !== "horizontal",
          q = k !== "vertical",
          N = cm(E);
        if (
          (h.key === "ArrowLeft" ||
            h.key === "ArrowRight" ||
            h.key === "Home" ||
            h.key === "End") &&
          ke(h.currentTarget)
        )
          return;
        let J = {
          ArrowUp:
            (N || I) &&
            (() => {
              if (N) {
                let Oe = mm(E);
                return Oe?.id;
              }
              return r?.last();
            }),
          ArrowRight: (N || q) && r.first,
          ArrowDown: (N || I) && r.first,
          ArrowLeft: (N || q) && r.last,
          Home: r.first,
          End: r.last,
          PageUp: r.first,
          PageDown: r.last,
        }[h.key];
        if (J) {
          let Oe = J();
          if (Oe !== void 0) {
            if (!R(h)) return;
            (h.preventDefault(), r.move(Oe));
          }
        }
      });
    a = fe(a, (h) => (0, uu.jsx)(xt, { value: r, children: h }), [r]);
    let H = r.useState((h) => {
      var O;
      if (r && n && h.virtualFocus) return (O = St(r, h.activeId)) == null ? void 0 : O.id;
    });
    a = T(y({ "aria-activedescendant": H }, a), {
      ref: ee(c, d, a.ref),
      onKeyDownCapture: x,
      onKeyUpCapture: b,
      onFocusCapture: w,
      onFocus: C,
      onBlurCapture: M,
      onKeyDown: F,
    });
    let B = r.useState((h) => n && (h.virtualFocus || h.activeId === null));
    return ((a = Bt(y({ focusable: B }, a))), a);
  }),
  Ai = W(function (t) {
    let o = Vr(t);
    return j(um, o);
  });
var xo = Ee(),
  ib = xo.useContext,
  sb = xo.useScopedContext,
  So = xo.useProviderContext,
  cu = xo.ContextProvider,
  lu = xo.ScopedContextProvider;
var Di = _(X(), 1),
  Co = Ee([cu], [lu]),
  lb = Co.useContext,
  fb = Co.useScopedContext,
  Hr = Co.useProviderContext,
  fu = Co.ContextProvider,
  Lr = Co.ScopedContextProvider,
  mu = (0, Di.createContext)(void 0),
  du = (0, Di.createContext)(void 0);
var Nr = _(X(), 1),
  hu = _(ai(), 1),
  Ti = _(oe(), 1),
  pm = "div";
function pu(e, t) {
  let o = setTimeout(t, e);
  return () => clearTimeout(o);
}
function vm(e) {
  let t = requestAnimationFrame(() => {
    t = requestAnimationFrame(e);
  });
  return () => cancelAnimationFrame(t);
}
function vu(...e) {
  return e
    .join(", ")
    .split(", ")
    .reduce((t, o) => {
      let r = o.endsWith("ms") ? 1 : 1e3,
        n = Number.parseFloat(o || "0s") * r;
      return n > t ? n : t;
    }, 0);
}
function pr(e, t, o) {
  return !o && t !== !1 && (!e || !!t);
}
var yo = U(function (t) {
    var o = t,
      { store: r, alwaysVisible: n } = o,
      i = z(o, ["store", "alwaysVisible"]);
    let s = So();
    ((r = r || s), te(r, !1));
    let a = (0, Nr.useRef)(null),
      u = De(i.id),
      [c, l] = (0, Nr.useState)(null),
      m = r.useState("open"),
      f = r.useState("mounted"),
      d = r.useState("animated"),
      v = r.useState("contentElement"),
      p = me(r.disclosure, "contentElement");
    (Q(() => {
      a.current && r?.setContentElement(a.current);
    }, [r]),
      Q(() => {
        let w;
        return (
          r?.setState("animated", (S) => ((w = S), !0)),
          () => {
            w !== void 0 && r?.setState("animated", w);
          }
        );
      }, [r]),
      Q(() => {
        if (d) {
          if (!v?.isConnected) {
            l(null);
            return;
          }
          return vm(() => {
            l(m ? "enter" : f ? "leave" : null);
          });
        }
      }, [d, v, m, f]),
      Q(() => {
        if (!r || !d || !c || !v) return;
        let w = () => r?.setState("animating", !1),
          S = () => (0, hu.flushSync)(w);
        if ((c === "leave" && m) || (c === "enter" && !m)) return;
        if (typeof d == "number") return pu(d, S);
        let {
            transitionDuration: C,
            animationDuration: P,
            transitionDelay: M,
            animationDelay: A,
          } = getComputedStyle(v),
          {
            transitionDuration: R = "0",
            animationDuration: F = "0",
            transitionDelay: H = "0",
            animationDelay: B = "0",
          } = p ? getComputedStyle(p) : {},
          h = vu(M, A, H, B),
          O = vu(C, P, R, F),
          k = h + O;
        if (!k) {
          (c === "enter" && r.setState("animated", !1), w());
          return;
        }
        let E = 1e3 / 60,
          D = Math.max(k - E, 0);
        return pu(D, S);
      }, [r, d, v, p, m, c]),
      (i = fe(i, (w) => (0, Ti.jsx)(Lr, { value: r, children: w }), [r])));
    let x = pr(f, i.hidden, n),
      b = i.style,
      g = (0, Nr.useMemo)(() => (x ? T(y({}, b), { display: "none" }) : b), [x, b]);
    return (
      (i = T(
        y(
          {
            id: u,
            "data-open": m || void 0,
            "data-enter": c === "enter" || void 0,
            "data-leave": c === "leave" || void 0,
            hidden: x,
          },
          i
        ),
        { ref: ee(u ? r.setContentElement : null, a, i.ref), style: g }
      )),
      We(i)
    );
  }),
  hm = W(function (t) {
    let o = yo(t);
    return j(pm, o);
  }),
  Sb = W(function (t) {
    var o = t,
      { unmountOnHide: r } = o,
      n = z(o, ["unmountOnHide"]);
    let i = So(),
      s = n.store || i;
    return me(s, (u) => !r || u?.mounted) === !1 ? null : (0, Ti.jsx)(hm, y({}, n));
  });
function wo(e = {}) {
  let t = Vt(e.store, lr(e.disclosure, ["contentElement", "disclosureElement"]));
  let o = t?.getState(),
    r = Y(e.open, o?.open, e.defaultOpen, !1),
    n = Y(e.animated, o?.animated, !1),
    i = {
      open: r,
      animated: n,
      animating: !!n && r,
      mounted: r,
      contentElement: Y(o?.contentElement, null),
      disclosureElement: Y(o?.disclosureElement, null),
    },
    s = Me(i, t);
  return (
    we(s, () =>
      ge(s, ["animated", "animating"], (a) => {
        a.animated || s.setState("animating", !1);
      })
    ),
    we(s, () =>
      Jt(s, ["open"], () => {
        s.getState().animated && s.setState("animating", !0);
      })
    ),
    we(s, () =>
      ge(s, ["open", "animating"], (a) => {
        s.setState("mounted", a.open || a.animating);
      })
    ),
    le(Z({}, s), {
      disclosure: e.disclosure,
      setOpen: (a) => s.setState("open", a),
      show: () => s.setState("open", !0),
      hide: () => s.setState("open", !1),
      toggle: () => s.setState("open", (a) => !a),
      stopAnimation: () => s.setState("animating", !1),
      setContentElement: (a) => s.setState("contentElement", a),
      setDisclosureElement: (a) => s.setState("disclosureElement", a),
    })
  );
}
function ki(e, t, o) {
  return (
    ot(t, [o.store, o.disclosure]),
    pe(e, o, "open", "setOpen"),
    pe(e, o, "mounted", "setMounted"),
    pe(e, o, "animated"),
    Object.assign(e, { disclosure: o.disclosure })
  );
}
function bu(e = {}) {
  let [t, o] = je(wo, e);
  return ki(t, o, e);
}
var Po = Ee([fu], [Lr]),
  Tb = Po.useContext,
  kb = Po.useScopedContext,
  vr = Po.useProviderContext,
  Sn = Po.ContextProvider,
  or = Po.ScopedContextProvider;
function gm(e) {
  var t;
  let o = e.find((i) => !!i.element),
    r = [...e].reverse().find((i) => !!i.element),
    n = (t = o?.element) == null ? void 0 : t.parentElement;
  for (; n && r?.element;) {
    if (r && n.contains(r.element)) return n;
    n = n.parentElement;
  }
  return ne(n).body;
}
function xm(e) {
  return e?.__unstablePrivateStore;
}
function gu(e = {}) {
  var t;
  e.store;
  let o = (t = e.store) == null ? void 0 : t.getState(),
    r = Y(e.items, o?.items, e.defaultItems, []),
    n = new Map(r.map((f) => [f.id, f])),
    i = { items: r, renderedItems: Y(o?.renderedItems, []) },
    s = xm(e.store),
    a = Me({ items: r, renderedItems: i.renderedItems }, s),
    u = Me(i, e.store),
    c = (f) => {
      let d = fo(f, (v) => v.element);
      (a.setState("renderedItems", d), u.setState("renderedItems", d));
    };
  (we(u, () => Mr(a)),
    we(a, () =>
      Zt(a, ["items"], (f) => {
        u.setState("items", f.items);
      })
    ),
    we(a, () =>
      Zt(a, ["renderedItems"], (f) => {
        let d = !0,
          v = requestAnimationFrame(() => {
            let { renderedItems: g } = u.getState();
            f.renderedItems !== g && c(f.renderedItems);
          });
        if (typeof IntersectionObserver != "function") return () => cancelAnimationFrame(v);
        let p = () => {
            if (d) {
              d = !1;
              return;
            }
            (cancelAnimationFrame(v), (v = requestAnimationFrame(() => c(f.renderedItems))));
          },
          x = gm(f.renderedItems),
          b = new IntersectionObserver(p, { root: x });
        for (let g of f.renderedItems) g.element && b.observe(g.element);
        return () => {
          (cancelAnimationFrame(v), b.disconnect());
        };
      })
    ));
  let l = (f, d, v = !1) => {
      let p;
      return (
        d((b) => {
          let g = b.findIndex(({ id: S }) => S === f.id),
            w = b.slice();
          if (g !== -1) {
            p = b[g];
            let S = Z(Z({}, p), f);
            ((w[g] = S), n.set(f.id, S));
          } else (w.push(f), n.set(f.id, f));
          return w;
        }),
        () => {
          d((b) => {
            if (!p) return (v && n.delete(f.id), b.filter(({ id: S }) => S !== f.id));
            let g = b.findIndex(({ id: S }) => S === f.id);
            if (g === -1) return b;
            let w = b.slice();
            return ((w[g] = p), n.set(f.id, p), w);
          });
        }
      );
    },
    m = (f) => l(f, (d) => a.setState("items", d), !0);
  return le(Z({}, u), {
    registerItem: m,
    renderItem: (f) =>
      be(
        m(f),
        l(f, (d) => a.setState("renderedItems", d))
      ),
    item: (f) => {
      if (!f) return null;
      let d = n.get(f);
      if (!d) {
        let { items: v } = a.getState();
        ((d = v.find((p) => p.id === f)), d && n.set(f, d));
      }
      return d || null;
    },
    __unstablePrivateStore: a,
  });
}
function xu(e, t, o) {
  return (ot(t, [o.store]), pe(e, o, "items", "setItems"), e);
}
var Sm = { id: null };
function zt(e, t) {
  return e.find((o) => (t ? !o.disabled && o.id !== t : !o.disabled));
}
function Cm(e, t) {
  return e.filter((o) => (t ? !o.disabled && o.id !== t : !o.disabled));
}
function Su(e, t) {
  return e.filter((o) => o.rowId === t);
}
function ym(e, t, o = !1) {
  let r = e.findIndex((n) => n.id === t);
  return [...e.slice(r + 1), ...(o ? [Sm] : []), ...e.slice(0, r)];
}
function Cu(e) {
  let t = [];
  for (let o of e) {
    let r = t.find((n) => {
      var i;
      return ((i = n[0]) == null ? void 0 : i.rowId) === o.rowId;
    });
    r ? r.push(o) : t.push([o]);
  }
  return t;
}
function yu(e) {
  let t = 0;
  for (let { length: o } of e) o > t && (t = o);
  return t;
}
function wm(e) {
  return { id: "__EMPTY_ITEM__", disabled: !0, rowId: e };
}
function Pm(e, t, o) {
  let r = yu(e);
  for (let n of e)
    for (let i = 0; i < r; i += 1) {
      let s = n[i];
      if (!s || (o && s.disabled)) {
        let u = i === 0 && o ? zt(n) : n[i - 1];
        n[i] = u && t !== u.id && o ? u : wm(u?.rowId);
      }
    }
  return e;
}
function Em(e) {
  let t = Cu(e),
    o = yu(t),
    r = [];
  for (let n = 0; n < o; n += 1)
    for (let i of t) {
      let s = i[n];
      s && r.push(le(Z({}, s), { rowId: s.rowId ? `${n}` : void 0 }));
    }
  return r;
}
function hr(e = {}) {
  var t;
  let o = (t = e.store) == null ? void 0 : t.getState(),
    r = gu(e),
    n = Y(e.activeId, o?.activeId, e.defaultActiveId),
    i = le(Z({}, r.getState()), {
      id: Y(e.id, o?.id, `id-${Math.random().toString(36).slice(2, 8)}`),
      activeId: n,
      baseElement: Y(o?.baseElement, null),
      includesBaseElement: Y(e.includesBaseElement, o?.includesBaseElement, n === null),
      moves: Y(o?.moves, 0),
      orientation: Y(e.orientation, o?.orientation, "both"),
      rtl: Y(e.rtl, o?.rtl, !1),
      virtualFocus: Y(e.virtualFocus, o?.virtualFocus, !1),
      focusLoop: Y(e.focusLoop, o?.focusLoop, !1),
      focusWrap: Y(e.focusWrap, o?.focusWrap, !1),
      focusShift: Y(e.focusShift, o?.focusShift, !1),
    }),
    s = Me(i, r, e.store);
  we(s, () =>
    ge(s, ["renderedItems", "activeId"], (u) => {
      s.setState("activeId", (c) => {
        var l;
        return c !== void 0 ? c : (l = zt(u.renderedItems)) == null ? void 0 : l.id;
      });
    })
  );
  let a = (u = "next", c = {}) => {
    var l, m;
    let f = s.getState(),
      {
        skip: d = 0,
        activeId: v = f.activeId,
        focusShift: p = f.focusShift,
        focusLoop: x = f.focusLoop,
        focusWrap: b = f.focusWrap,
        includesBaseElement: g = f.includesBaseElement,
        renderedItems: w = f.renderedItems,
        rtl: S = f.rtl,
      } = c,
      C = u === "up" || u === "down",
      P = u === "next" || u === "down",
      M = P ? S && !C : !S || C,
      A = p && !d,
      R = C ? go(Pm(Cu(w), v, A)) : w;
    if (((R = M ? Fr(R) : R), (R = C ? Em(R) : R), v == null))
      return (l = zt(R)) == null ? void 0 : l.id;
    let F = R.find((I) => I.id === v);
    if (!F) return (m = zt(R)) == null ? void 0 : m.id;
    let H = R.some((I) => I.rowId),
      B = R.indexOf(F),
      h = R.slice(B + 1),
      O = Su(h, F.rowId);
    if (d) {
      let I = Cm(O, v),
        q = I.slice(d)[0] || I[I.length - 1];
      return q?.id;
    }
    let k = x && (C ? x !== "horizontal" : x !== "vertical"),
      E = H && b && (C ? b !== "horizontal" : b !== "vertical"),
      D = P ? (!H || C) && k && g : C ? g : !1;
    if (k) {
      let I = E && !D ? R : Su(R, F.rowId),
        q = ym(I, v, D),
        N = zt(q, v);
      return N?.id;
    }
    if (E) {
      let I = zt(D ? O : h, v);
      return D ? I?.id || null : I?.id;
    }
    let K = zt(O, v);
    return !K && D ? null : K?.id;
  };
  return le(Z(Z({}, r), s), {
    setBaseElement: (u) => s.setState("baseElement", u),
    setActiveId: (u) => s.setState("activeId", u),
    move: (u) => {
      u !== void 0 && (s.setState("activeId", u), s.setState("moves", (c) => c + 1));
    },
    first: () => {
      var u;
      return (u = zt(s.getState().renderedItems)) == null ? void 0 : u.id;
    },
    last: () => {
      var u;
      return (u = zt(Fr(s.getState().renderedItems))) == null ? void 0 : u.id;
    },
    next: (u) => (u !== void 0 && typeof u == "number" && (u = { skip: u }), a("next", u)),
    previous: (u) => (u !== void 0 && typeof u == "number" && (u = { skip: u }), a("previous", u)),
    down: (u) => (u !== void 0 && typeof u == "number" && (u = { skip: u }), a("down", u)),
    up: (u) => (u !== void 0 && typeof u == "number" && (u = { skip: u }), a("up", u)),
  });
}
function Cn(e) {
  let t = De(e.id);
  return y({ id: t }, e);
}
function Br(e, t, o) {
  return (
    (e = xu(e, t, o)),
    pe(e, o, "activeId", "setActiveId"),
    pe(e, o, "includesBaseElement"),
    pe(e, o, "virtualFocus"),
    pe(e, o, "orientation"),
    pe(e, o, "rtl"),
    pe(e, o, "focusLoop"),
    pe(e, o, "focusWrap"),
    pe(e, o, "focusShift"),
    e
  );
}
function _i(e = {}) {
  e = Cn(e);
  let [t, o] = je(hr, e);
  return Br(t, o, e);
}
var yn = _(X(), 1),
  wn = (0, yn.createContext)(void 0),
  Eo = Ee([Sn, xt], [or, tr]),
  Fi = Eo.useContext,
  Pn = Eo.useScopedContext,
  En = Eo.useProviderContext,
  wu = Eo.ContextProvider,
  Pu = Eo.ScopedContextProvider,
  Eu = (0, yn.createContext)(void 0),
  Iu = (0, yn.createContext)(!1);
var Mm = "hr",
  Vi = U(function (t) {
    var o = t,
      { orientation: r = "horizontal" } = o,
      n = z(o, ["orientation"]);
    return ((n = y({ role: "separator", "aria-orientation": r }, n)), n);
  }),
  ag = W(function (t) {
    let o = Vi(t);
    return j(Mm, o);
  });
var Om = "hr",
  Hi = U(function (t) {
    var o = t,
      { store: r } = o,
      n = z(o, ["store"]);
    let i = Nt();
    ((r = r || i), te(r, !1));
    let s = r.useState((a) => (a.orientation === "horizontal" ? "vertical" : "horizontal"));
    return ((n = Vi(T(y({}, n), { orientation: s }))), n);
  }),
  Rm = W(function (t) {
    let o = Hi(t);
    return j(Om, o);
  });
var Io = Ee([Sn], [or]),
  Am = Io.useContext,
  bg = Io.useScopedContext,
  Mo = Io.useProviderContext,
  Mu = Io.ContextProvider,
  In = Io.ScopedContextProvider;
function Mn(e) {
  return [e.clientX, e.clientY];
}
function Li(e, t) {
  let [o, r] = e,
    n = !1,
    i = t.length;
  for (let s = i, a = 0, u = s - 1; a < s; u = a++) {
    let [c, l] = t[a],
      [m, f] = t[u],
      [, d] = t[u === 0 ? s - 1 : u - 1] || [0, 0],
      v = (l - f) * (o - c) - (c - m) * (r - l);
    if (f < l) {
      if (r >= f && r < l) {
        if (v === 0) return !0;
        v > 0 && (r === f ? r > d && (n = !n) : (n = !n));
      }
    } else if (l < f) {
      if (r > l && r <= f) {
        if (v === 0) return !0;
        v < 0 && (r === f ? r < d && (n = !n) : (n = !n));
      }
    } else if (r === l && ((o >= m && o <= c) || (o >= c && o <= m))) return !0;
  }
  return n;
}
function Dm(e, t) {
  let { top: o, right: r, bottom: n, left: i } = t,
    [s, a] = e,
    u = s < i ? "left" : s > r ? "right" : null,
    c = a < o ? "top" : a > n ? "bottom" : null;
  return [u, c];
}
function Ni(e, t) {
  let o = e.getBoundingClientRect(),
    { top: r, right: n, bottom: i, left: s } = o,
    [a, u] = Dm(t, o),
    c = [t];
  return (
    a
      ? (u !== "top" && c.push([a === "left" ? s : n, r]),
        c.push([a === "left" ? n : s, r]),
        c.push([a === "left" ? n : s, i]),
        u !== "bottom" && c.push([a === "left" ? s : n, i]))
      : u === "top"
        ? (c.push([s, r]), c.push([s, i]), c.push([n, i]), c.push([n, r]))
        : (c.push([s, i]), c.push([s, r]), c.push([n, r]), c.push([n, i])),
    c
  );
}
var Ou = _(X(), 1),
  Bi = (0, Ou.createContext)(null);
var Tm = "span",
  Wi = U(function (t) {
    return (
      (t = T(y({}, t), {
        style: y(
          {
            border: 0,
            clip: "rect(0 0 0 0)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            whiteSpace: "nowrap",
            width: "1px",
          },
          t.style
        ),
      })),
      t
    );
  }),
  wg = W(function (t) {
    let o = Wi(t);
    return j(Tm, o);
  });
var km = "span",
  _m = U(function (t) {
    return (
      (t = T(y({ "data-focus-trap": "", tabIndex: 0, "aria-hidden": !0 }, t), {
        style: y({ position: "fixed", top: 0, left: 0 }, t.style),
      })),
      (t = Wi(t)),
      t
    );
  }),
  Oo = W(function (t) {
    let o = _m(t);
    return j(km, o);
  });
var et = _(X(), 1),
  zi = _(ai(), 1),
  Le = _(oe(), 1),
  Fm = "div";
function Vm(e) {
  return ne(e).body;
}
function Hm(e, t) {
  return t ? (typeof t == "function" ? t(e) : t) : ne(e).createElement("div");
}
function Lm(e = "id") {
  return `${e ? `${e}-` : ""}${Math.random().toString(36).slice(2, 8)}`;
}
function nr(e) {
  queueMicrotask(() => {
    e?.focus();
  });
}
var ji = U(function (t) {
    var o = t,
      {
        preserveTabOrder: r,
        preserveTabOrderAnchor: n,
        portalElement: i,
        portalRef: s,
        portal: a = !0,
      } = o,
      u = z(o, [
        "preserveTabOrder",
        "preserveTabOrderAnchor",
        "portalElement",
        "portalRef",
        "portal",
      ]);
    let c = (0, et.useRef)(null),
      l = ee(c, u.ref),
      m = (0, et.useContext)(Bi),
      [f, d] = (0, et.useState)(null),
      [v, p] = (0, et.useState)(null),
      x = (0, et.useRef)(null),
      b = (0, et.useRef)(null),
      g = (0, et.useRef)(null),
      w = (0, et.useRef)(null);
    return (
      Q(() => {
        let S = c.current;
        if (!S || !a) {
          d(null);
          return;
        }
        let C = Hm(S, i);
        if (!C) {
          d(null);
          return;
        }
        let P = C.isConnected;
        if (
          (P || (m || Vm(S)).appendChild(C),
          C.id || (C.id = S.id ? `portal/${S.id}` : Lm()),
          d(C),
          no(s, C),
          !P)
        )
          return () => {
            (C.remove(), no(s, null));
          };
      }, [a, i, m, s]),
      Q(() => {
        if (!a || !r || !n) return;
        let C = ne(n).createElement("span");
        return (
          (C.style.position = "fixed"),
          n.insertAdjacentElement("afterend", C),
          p(C),
          () => {
            (C.remove(), p(null));
          }
        );
      }, [a, r, n]),
      (0, et.useEffect)(() => {
        if (!f || !r) return;
        let S = 0,
          C = (P) => {
            if (!bt(P)) return;
            let M = P.type === "focusin";
            if ((cancelAnimationFrame(S), M)) return qa(f);
            S = requestAnimationFrame(() => {
              $a(f, !0);
            });
          };
        return (
          f.addEventListener("focusin", C, !0),
          f.addEventListener("focusout", C, !0),
          () => {
            (cancelAnimationFrame(S),
              f.removeEventListener("focusin", C, !0),
              f.removeEventListener("focusout", C, !0));
          }
        );
      }, [f, r]),
      (u = fe(
        u,
        (S) => {
          if (((S = (0, Le.jsx)(Bi.Provider, { value: f || m, children: S })), !a)) return S;
          if (!f)
            return (0, Le.jsx)("span", {
              ref: l,
              id: u.id,
              style: { position: "fixed" },
              hidden: !0,
            });
          ((S = (0, Le.jsxs)(Le.Fragment, {
            children: [
              r &&
                f &&
                (0, Le.jsx)(Oo, {
                  ref: b,
                  "data-focus-trap": u.id,
                  className: "__focus-trap-inner-before",
                  onFocus: (P) => {
                    bt(P, f) ? nr(gn()) : nr(x.current);
                  },
                }),
              S,
              r &&
                f &&
                (0, Le.jsx)(Oo, {
                  ref: g,
                  "data-focus-trap": u.id,
                  className: "__focus-trap-inner-after",
                  onFocus: (P) => {
                    bt(P, f) ? nr(Ii()) : nr(w.current);
                  },
                }),
            ],
          })),
            f && (S = (0, zi.createPortal)(S, f)));
          let C = (0, Le.jsxs)(Le.Fragment, {
            children: [
              r &&
                f &&
                (0, Le.jsx)(Oo, {
                  ref: x,
                  "data-focus-trap": u.id,
                  className: "__focus-trap-outer-before",
                  onFocus: (P) => {
                    !(P.relatedTarget === w.current) && bt(P, f) ? nr(b.current) : nr(Ii());
                  },
                }),
              r && (0, Le.jsx)("span", { "aria-owns": f?.id, style: { position: "fixed" } }),
              r &&
                f &&
                (0, Le.jsx)(Oo, {
                  ref: w,
                  "data-focus-trap": u.id,
                  className: "__focus-trap-outer-after",
                  onFocus: (P) => {
                    if (bt(P, f)) nr(g.current);
                    else {
                      let M = gn();
                      if (M === b.current) {
                        requestAnimationFrame(() => {
                          var A;
                          return (A = gn()) == null ? void 0 : A.focus();
                        });
                        return;
                      }
                      nr(M);
                    }
                  },
                }),
            ],
          });
          return (
            v && r && (C = (0, zi.createPortal)(C, v)),
            (0, Le.jsxs)(Le.Fragment, { children: [C, S] })
          );
        },
        [f, m, a, u.id, r, v]
      )),
      (u = T(y({}, u), { ref: l })),
      u
    );
  }),
  Lg = W(function (t) {
    let o = ji(t);
    return j(Fm, o);
  });
var Ru = _(X(), 1),
  Ki = (0, Ru.createContext)(0);
var Au = _(X(), 1),
  Du = _(oe(), 1);
function Tu({ level: e, children: t }) {
  let o = (0, Au.useContext)(Ki),
    r = Math.max(Math.min(e || o + 1, 6), 1);
  return (0, Du.jsx)(Ki.Provider, { value: r, children: t });
}
var ku = _(oe(), 1),
  Nm = "div",
  Ui = U(function (t) {
    var o = t,
      { autoFocusOnShow: r = !0 } = o,
      n = z(o, ["autoFocusOnShow"]);
    return ((n = fe(n, (i) => (0, ku.jsx)(hn.Provider, { value: r, children: i }), [r])), n);
  }),
  qg = W(function (t) {
    let o = Ui(t);
    return j(Nm, o);
  });
function _u(e, t) {
  let r = ne(e).createElement("button");
  return (
    (r.type = "button"),
    (r.tabIndex = -1),
    (r.textContent = "Dismiss popup"),
    Object.assign(r.style, {
      border: "0px",
      clip: "rect(0 0 0 0)",
      height: "1px",
      margin: "-1px",
      overflow: "hidden",
      padding: "0px",
      position: "absolute",
      whiteSpace: "nowrap",
      width: "1px",
    }),
    r.addEventListener("click", t),
    e.prepend(r),
    () => {
      (r.removeEventListener("click", t), r.remove());
    }
  );
}
var On = _(X(), 1);
function Fu(e) {
  let t = (0, On.useRef)();
  return (
    (0, On.useEffect)(() => {
      if (!e) {
        t.current = null;
        return;
      }
      return xe(
        "mousedown",
        (r) => {
          t.current = r.target;
        },
        !0
      );
    }, [e]),
    t
  );
}
var $i = new WeakMap();
function Wr(e, t, o) {
  $i.has(e) || $i.set(e, new Map());
  let r = $i.get(e),
    n = r.get(t);
  if (!n)
    return (
      r.set(t, o()),
      () => {
        var a;
        ((a = r.get(t)) == null || a(), r.delete(t));
      }
    );
  let i = o(),
    s = () => {
      (i(), n(), r.delete(t));
    };
  return (
    r.set(t, s),
    () => {
      r.get(t) === s && (i(), r.set(t, n));
    }
  );
}
function Ro(e, t, o) {
  return Wr(e, t, () => {
    let n = e.getAttribute(t);
    return (
      e.setAttribute(t, o),
      () => {
        n == null ? e.removeAttribute(t) : e.setAttribute(t, n);
      }
    );
  });
}
function wt(e, t, o) {
  return Wr(e, t, () => {
    let n = t in e,
      i = e[t];
    return (
      (e[t] = o),
      () => {
        n ? (e[t] = i) : delete e[t];
      }
    );
  });
}
function Ao(e, t) {
  return e
    ? Wr(e, "style", () => {
        let r = e.style.cssText;
        return (
          Object.assign(e.style, t),
          () => {
            e.style.cssText = r;
          }
        );
      })
    : () => {};
}
function Vu(e, t, o) {
  return e
    ? Wr(e, t, () => {
        let n = e.style.getPropertyValue(t);
        return (
          e.style.setProperty(t, o),
          () => {
            n ? e.style.setProperty(t, n) : e.style.removeProperty(t);
          }
        );
      })
    : () => {};
}
var Bm = ["SCRIPT", "STYLE"];
function qi(e) {
  return `__ariakit-dialog-snapshot-${e}`;
}
function Wm(e, t) {
  let o = ne(t),
    r = qi(e);
  if (!o.body[r]) return !0;
  do {
    if (t === o.body) return !1;
    if (t[r]) return !0;
    if (!t.parentElement) return !1;
    t = t.parentElement;
  } while (!0);
}
function zm(e, t, o) {
  return Bm.includes(t.tagName) || !Wm(e, t) ? !1 : !o.some((r) => r && de(t, r));
}
function Do(e, t, o, r) {
  for (let n of t) {
    if (!n?.isConnected) continue;
    let i = t.some((u) => (!u || u === n ? !1 : u.contains(n))),
      s = ne(n),
      a = n;
    for (; n.parentElement && n !== s.body;) {
      if ((r?.(n.parentElement, a), !i))
        for (let u of n.parentElement.children) zm(e, u, t) && o(u, a);
      n = n.parentElement;
    }
  }
}
function Hu(e, t) {
  let { body: o } = ne(t[0]),
    r = [];
  return (
    Do(e, t, (i) => {
      r.push(wt(i, qi(e), !0));
    }),
    be(wt(o, qi(e), !0), () => {
      for (let i of r) i();
    })
  );
}
function Rn(e, ...t) {
  if (!e) return !1;
  let o = e.getAttribute("data-backdrop");
  return o == null ? !1 : o === "" || o === "true" || !t.length ? !0 : t.some((r) => o === r);
}
function zr(e = "", t = !1) {
  return `__ariakit-dialog-${t ? "ancestor" : "outside"}${e ? `-${e}` : ""}`;
}
function jm(e, t = "") {
  return be(wt(e, zr(), !0), wt(e, zr(t), !0));
}
function Gi(e, t = "") {
  return be(wt(e, zr("", !0), !0), wt(e, zr(t, !0), !0));
}
function To(e, t) {
  let o = zr(t, !0);
  if (e[o]) return !0;
  let r = zr(t);
  do {
    if (e[r]) return !0;
    if (!e.parentElement) return !1;
    e = e.parentElement;
  } while (!0);
}
function Yi(e, t) {
  let o = [],
    r = t.map((i) => i?.id);
  return (
    Do(
      e,
      t,
      (i) => {
        Rn(i, ...r) || o.unshift(jm(i, e));
      },
      (i, s) => {
        (s.hasAttribute("data-dialog") && s.id !== e) || o.unshift(Gi(i, e));
      }
    ),
    () => {
      for (let i of o) i();
    }
  );
}
var An = _(X(), 1);
function Km(e) {
  return e.tagName === "HTML" ? !0 : de(ne(e).body, e);
}
function Um(e, t) {
  if (!e) return !1;
  if (de(e, t)) return !0;
  let o = t.getAttribute("aria-activedescendant");
  if (o) {
    let r = ne(e).getElementById(o);
    if (r) return de(e, r);
  }
  return !1;
}
function $m(e, t) {
  if (!("clientY" in e)) return !1;
  let o = t.getBoundingClientRect();
  return o.width === 0 || o.height === 0
    ? !1
    : o.top <= e.clientY &&
        e.clientY <= o.top + o.height &&
        o.left <= e.clientX &&
        e.clientX <= o.left + o.width;
}
function Xi({ store: e, type: t, listener: o, capture: r, domReady: n }) {
  let i = $(o),
    s = me(e, "open"),
    a = (0, An.useRef)(!1);
  (Q(() => {
    if (!s || !n) return;
    let { contentElement: u } = e.getState();
    if (!u) return;
    let c = () => {
      a.current = !0;
    };
    return (u.addEventListener("focusin", c, !0), () => u.removeEventListener("focusin", c, !0));
  }, [e, s, n]),
    (0, An.useEffect)(
      () =>
        s
          ? xe(
              t,
              (c) => {
                let { contentElement: l, disclosureElement: m } = e.getState(),
                  f = c.target;
                !l ||
                  !f ||
                  !Km(f) ||
                  de(l, f) ||
                  Um(m, f) ||
                  f.hasAttribute("data-focus-trap") ||
                  $m(c, l) ||
                  (a.current && !To(f, l.id)) ||
                  eu(f) ||
                  i(c);
              },
              r
            )
          : void 0,
      [s, r]
    ));
}
function Ji(e, t) {
  return typeof e == "function" ? e(t) : !!e;
}
function Lu(e, t, o) {
  let r = me(e, "open"),
    n = Fu(r),
    i = { store: e, domReady: o, capture: !0 };
  (Xi(
    T(y({}, i), {
      type: "click",
      listener: (s) => {
        let { contentElement: a } = e.getState(),
          u = n.current;
        u && ao(u) && To(u, a?.id) && Ji(t, s) && e.hide();
      },
    })
  ),
    Xi(
      T(y({}, i), {
        type: "focusin",
        listener: (s) => {
          let { contentElement: a } = e.getState();
          a && s.target !== ne(a) && Ji(t, s) && e.hide();
        },
      })
    ),
    Xi(
      T(y({}, i), {
        type: "contextmenu",
        listener: (s) => {
          Ji(t, s) && e.hide();
        },
      })
    ));
}
var mt = _(X(), 1),
  Bu = _(oe(), 1),
  Nu = (0, mt.createContext)({});
function Wu(e) {
  let t = (0, mt.useContext)(Nu),
    [o, r] = (0, mt.useState)([]),
    n = (0, mt.useCallback)(
      (a) => {
        var u;
        return (
          r((c) => [...c, a]),
          be((u = t.add) == null ? void 0 : u.call(t, a), () => {
            r((c) => c.filter((l) => l !== a));
          })
        );
      },
      [t]
    );
  Q(
    () =>
      ge(e, ["open", "contentElement"], (a) => {
        var u;
        if (a.open && a.contentElement) return (u = t.add) == null ? void 0 : u.call(t, e);
      }),
    [e, t]
  );
  let i = (0, mt.useMemo)(() => ({ store: e, add: n }), [e, n]);
  return {
    wrapElement: (0, mt.useCallback)(
      (a) => (0, Bu.jsx)(Nu.Provider, { value: i, children: a }),
      [i]
    ),
    nestedDialogs: o,
  };
}
var Dn = _(X(), 1),
  zu = _(ai(), 1);
function ju({ attribute: e, contentId: t, contentElement: o, enabled: r }) {
  let [n, i] = dn(),
    s = (0, Dn.useCallback)(() => {
      if (!r || !o) return !1;
      let { body: a } = ne(o),
        u = a.getAttribute(e);
      return !u || u === t;
    }, [n, r, o, e, t]);
  return (
    (0, Dn.useEffect)(() => {
      if (!r || !t || !o) return;
      let { body: a } = ne(o);
      if (s()) return (a.setAttribute(e, t), () => a.removeAttribute(e));
      let u = new MutationObserver(() => (0, zu.flushSync)(i));
      return (u.observe(a, { attributeFilter: [e] }), () => u.disconnect());
    }, [n, r, t, o, s, e]),
    s
  );
}
var Ku = _(X(), 1);
function qm(e) {
  let t = e.getBoundingClientRect().left;
  return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function Uu(e, t, o) {
  let r = ju({
    attribute: "data-dialog-prevent-body-scroll",
    contentElement: e,
    contentId: t,
    enabled: o,
  });
  (0, Ku.useEffect)(() => {
    if (!r() || !e) return;
    let n = ne(e),
      i = io(e),
      { documentElement: s, body: a } = n,
      u = s.style.getPropertyValue("--scrollbar-width"),
      c = u ? Number.parseInt(u) : i.innerWidth - s.clientWidth,
      l = () => Vu(s, "--scrollbar-width", `${c}px`),
      m = qm(s),
      f = () => Ao(a, { overflow: "hidden", [m]: `${c}px` }),
      d = () => {
        var p, x;
        let { scrollX: b, scrollY: g, visualViewport: w } = i,
          S = (p = w?.offsetLeft) != null ? p : 0,
          C = (x = w?.offsetTop) != null ? x : 0,
          P = Ao(a, {
            position: "fixed",
            overflow: "hidden",
            top: `${-(g - Math.floor(C))}px`,
            left: `${-(b - Math.floor(S))}px`,
            right: "0",
            [m]: `${c}px`,
          });
        return () => {
          (P(), i.scrollTo({ left: b, top: g, behavior: "instant" }));
        };
      },
      v = Ar() && !gi();
    return be(l(), v ? d() : f());
  }, [r, e]);
}
function $u(e, ...t) {
  if (!e) return !1;
  let o = e.getAttribute("data-focus-trap");
  return o == null ? !1 : t.length ? (o === "" ? !1 : t.some((r) => o === r)) : !0;
}
function Tn() {
  return "inert" in HTMLElement.prototype;
}
function qu(e) {
  return Ro(e, "aria-hidden", "true");
}
function Zi(e, t) {
  if (!("style" in e)) return Ft;
  if (Tn()) return wt(e, "inert", !0);
  let r = vo(e, !0).map((n) => {
    if (t?.some((s) => s && de(s, n))) return Ft;
    let i = Wr(
      n,
      "focus",
      () => (
        (n.focus = Ft),
        () => {
          delete n.focus;
        }
      )
    );
    return be(Ro(n, "tabindex", "-1"), i);
  });
  return be(...r, qu(e), Ao(e, { pointerEvents: "none", userSelect: "none", cursor: "default" }));
}
function Gu(e, t) {
  let o = [],
    r = t.map((i) => i?.id);
  return (
    Do(
      e,
      t,
      (i) => {
        Rn(i, ...r) || $u(i, ...r) || o.unshift(Zi(i, t));
      },
      (i) => {
        i.hasAttribute("role") &&
          (t.some((s) => s && de(s, i)) || o.unshift(Ro(i, "role", "none")));
      }
    ),
    () => {
      for (let i of o) i();
    }
  );
}
var Gm = "div",
  Ym = [
    "a",
    "button",
    "details",
    "dialog",
    "div",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "section",
    "select",
    "span",
    "summary",
    "textarea",
    "ul",
    "svg",
  ],
  qx = U(function (t) {
    return t;
  }),
  jr = W(function (t) {
    return j(Gm, t);
  });
Object.assign(
  jr,
  Ym.reduce(
    (e, t) => (
      (e[t] = W(function (r) {
        return j(t, r);
      })),
      e
    ),
    {}
  )
);
var Kr = _(X(), 1),
  kn = _(oe(), 1);
function Yu({ store: e, backdrop: t, alwaysVisible: o, hidden: r }) {
  let n = (0, Kr.useRef)(null),
    i = bu({ disclosure: e }),
    s = me(e, "contentElement");
  ((0, Kr.useEffect)(() => {
    let c = n.current,
      l = s;
    c && l && (c.style.zIndex = getComputedStyle(l).zIndex);
  }, [s]),
    Q(() => {
      let c = s?.id;
      if (!c) return;
      let l = n.current;
      if (l) return Gi(l, c);
    }, [s]));
  let a = yo({
    ref: n,
    store: i,
    role: "presentation",
    "data-backdrop": s?.id || "",
    alwaysVisible: o,
    hidden: r ?? void 0,
    style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 },
  });
  if (!t) return null;
  if ((0, Kr.isValidElement)(t)) return (0, kn.jsx)(jr, T(y({}, a), { render: t }));
  let u = typeof t != "boolean" ? t : "div";
  return (0, kn.jsx)(jr, T(y({}, a), { render: (0, kn.jsx)(u, {}) }));
}
function ko(e = {}) {
  return wo(e);
}
function Qi(e, t, o) {
  return ki(e, t, o);
}
function Xu(e = {}) {
  let [t, o] = je(ko, e);
  return Qi(t, o, e);
}
var Te = _(X(), 1),
  dt = _(oe(), 1),
  Jm = "div",
  Ju = Lt();
function Zm(e) {
  let t = Je();
  return !t || (e && de(e, t)) ? !1 : !!Ze(t);
}
function Zu(e, t = !1) {
  if (!e) return null;
  let o = "current" in e ? e.current : e;
  return o ? (t ? (Ze(o) ? o : null) : o) : null;
}
var es = U(function (t) {
  var o = t,
    {
      store: r,
      open: n,
      onClose: i,
      focusable: s = !0,
      modal: a = !0,
      portal: u = !!a,
      backdrop: c = !!a,
      hideOnEscape: l = !0,
      hideOnInteractOutside: m = !0,
      getPersistentElements: f,
      preventBodyScroll: d = !!a,
      autoFocusOnShow: v = !0,
      autoFocusOnHide: p = !0,
      initialFocus: x,
      finalFocus: b,
      unmountOnHide: g,
      unstable_treeSnapshotKey: w,
    } = o,
    S = z(o, [
      "store",
      "open",
      "onClose",
      "focusable",
      "modal",
      "portal",
      "backdrop",
      "hideOnEscape",
      "hideOnInteractOutside",
      "getPersistentElements",
      "preventBodyScroll",
      "autoFocusOnShow",
      "autoFocusOnHide",
      "initialFocus",
      "finalFocus",
      "unmountOnHide",
      "unstable_treeSnapshotKey",
    ]);
  let C = Hr(),
    P = (0, Te.useRef)(null),
    M = Xu({
      store: r || C,
      open: n,
      setOpen(G) {
        if (G) return;
        let ie = P.current;
        if (!ie) return;
        let Re = new Event("close", { bubbles: !1, cancelable: !0 });
        (i && ie.addEventListener("close", i, { once: !0 }),
          ie.dispatchEvent(Re),
          Re.defaultPrevented && M.setOpen(!0));
      },
    }),
    { portalRef: A, domReady: R } = Dr(u, S.portalRef),
    F = S.preserveTabOrder,
    H = me(M, (G) => F && !a && G.mounted),
    B = De(S.id),
    h = me(M, "open"),
    O = me(M, "mounted"),
    k = me(M, "contentElement"),
    E = pr(O, S.hidden, S.alwaysVisible);
  (Uu(k, B, d && !E), Lu(M, m, R));
  let { wrapElement: D, nestedDialogs: K } = Wu(M);
  ((S = fe(S, D, [D])),
    Q(() => {
      if (!h) return;
      let G = P.current,
        ie = Je(G, !0);
      ie && ie.tagName !== "BODY" && ((G && de(G, ie)) || M.setDisclosureElement(ie));
    }, [M, h]),
    Ju &&
      (0, Te.useEffect)(() => {
        if (!O) return;
        let { disclosureElement: G } = M.getState();
        if (!G || !Ge(G)) return;
        let ie = () => {
          let Re = !1,
            ue = () => {
              Re = !0;
            },
            Be = { capture: !0, once: !0 };
          (G.addEventListener("focusin", ue, Be),
            gt(G, "mouseup", () => {
              (G.removeEventListener("focusin", ue, !0), !Re && xn(G));
            }));
        };
        return (
          G.addEventListener("mousedown", ie),
          () => {
            G.removeEventListener("mousedown", ie);
          }
        );
      }, [M, O]),
    (0, Te.useEffect)(() => {
      if (!O || !R) return;
      let G = P.current;
      if (!G) return;
      let ie = io(G),
        Re = ie.visualViewport || ie,
        ue = () => {
          var Be, tt;
          let L =
            (tt = (Be = ie.visualViewport) == null ? void 0 : Be.height) != null
              ? tt
              : ie.innerHeight;
          G.style.setProperty("--dialog-viewport-height", `${L}px`);
        };
      return (
        ue(),
        Re.addEventListener("resize", ue),
        () => {
          Re.removeEventListener("resize", ue);
        }
      );
    }, [O, R]),
    (0, Te.useEffect)(() => {
      if (!a || !O || !R) return;
      let G = P.current;
      if (!(!G || G.querySelector("[data-dialog-dismiss]"))) return _u(G, M.hide);
    }, [M, a, O, R]),
    Q(() => {
      if (!Tn() || h || !O || !R) return;
      let G = P.current;
      if (G) return Zi(G);
    }, [h, O, R]));
  let I = h && R;
  Q(() => {
    if (!B || !I) return;
    let G = P.current;
    return Hu(B, [G]);
  }, [B, I, w]);
  let q = $(f);
  Q(() => {
    if (!B || !I) return;
    let { disclosureElement: G } = M.getState(),
      ie = P.current,
      Re = q() || [],
      ue = [ie, ...Re, ...K.map((Be) => Be.getState().contentElement)];
    return a ? be(Yi(B, ue), Gu(B, ue)) : Yi(B, [G, ...ue]);
  }, [B, M, I, q, K, a, w]);
  let N = !!v,
    he = ae(v),
    [ye, Se] = (0, Te.useState)(!1);
  (0, Te.useEffect)(() => {
    if (!h || !N || !R || !k?.isConnected) return;
    let G =
        Zu(x, !0) || k.querySelector("[data-autofocus=true],[autofocus]") || Ka(k, !0, u && H) || k,
      ie = Ze(G);
    he(ie ? G : null) &&
      (Se(!0),
      queueMicrotask(() => {
        (G.focus(), Ju && ie && G.scrollIntoView({ block: "nearest", inline: "nearest" }));
      }));
  }, [h, N, R, k, x, u, H, he]);
  let J = !!p,
    Oe = ae(p),
    [vt, Ue] = (0, Te.useState)(!1);
  (0, Te.useEffect)(() => {
    if (h) return (Ue(!0), () => Ue(!1));
  }, [h]);
  let Xe = (0, Te.useCallback)(
      (G, ie = !0) => {
        let { disclosureElement: Re } = M.getState();
        if (Zm(G)) return;
        let ue = Zu(b) || Re;
        if (ue?.id) {
          let tt = ne(ue),
            L = `[aria-activedescendant="${ue.id}"]`,
            se = tt.querySelector(L);
          se && (ue = se);
        }
        if (ue && !Ze(ue)) {
          let tt = ue.closest("[data-dialog]");
          if (tt?.id) {
            let L = ne(tt),
              se = `[aria-controls~="${tt.id}"]`,
              Ce = L.querySelector(se);
            Ce && (ue = Ce);
          }
        }
        let Be = ue && Ze(ue);
        if (!Be && ie) {
          requestAnimationFrame(() => Xe(G, !1));
          return;
        }
        Oe(Be ? ue : null) && Be && ue?.focus({ preventScroll: !0 });
      },
      [M, b, Oe]
    ),
    Ne = (0, Te.useRef)(!1);
  (Q(() => {
    if (h || !vt || !J) return;
    let G = P.current;
    ((Ne.current = !0), Xe(G));
  }, [h, vt, R, J, Xe]),
    (0, Te.useEffect)(() => {
      if (!vt || !J) return;
      let G = P.current;
      return () => {
        if (Ne.current) {
          Ne.current = !1;
          return;
        }
        Xe(G);
      };
    }, [vt, J, Xe]));
  let Ot = ae(l);
  ((0, Te.useEffect)(
    () =>
      !R || !O
        ? void 0
        : xe(
            "keydown",
            (ie) => {
              if (ie.key !== "Escape" || ie.defaultPrevented) return;
              let Re = P.current;
              if (!Re || To(Re)) return;
              let ue = ie.target;
              if (!ue) return;
              let { disclosureElement: Be } = M.getState();
              (ue.tagName === "BODY" || de(Re, ue) || !Be || de(Be, ue)) && Ot(ie) && M.hide();
            },
            !0
          ),
    [M, R, O, Ot]
  ),
    (S = fe(S, (G) => (0, dt.jsx)(Tu, { level: a ? 1 : void 0, children: G }), [a])));
  let Gt = S.hidden,
    lt = S.alwaysVisible;
  S = fe(
    S,
    (G) =>
      c
        ? (0, dt.jsxs)(dt.Fragment, {
            children: [
              (0, dt.jsx)(Yu, { store: M, backdrop: c, hidden: Gt, alwaysVisible: lt }),
              G,
            ],
          })
        : G,
    [M, c, Gt, lt]
  );
  let [ht, Yt] = (0, Te.useState)(),
    [Rt, Xt] = (0, Te.useState)();
  return (
    (S = fe(
      S,
      (G) =>
        (0, dt.jsx)(Lr, {
          value: M,
          children: (0, dt.jsx)(mu.Provider, {
            value: Yt,
            children: (0, dt.jsx)(du.Provider, { value: Xt, children: G }),
          }),
        }),
      [M]
    )),
    (S = T(
      y(
        {
          id: B,
          "data-dialog": "",
          role: "dialog",
          tabIndex: s ? -1 : void 0,
          "aria-labelledby": ht,
          "aria-describedby": Rt,
        },
        S
      ),
      { ref: ee(P, S.ref) }
    )),
    (S = Ui(T(y({}, S), { autoFocusOnShow: ye }))),
    (S = yo(y({ store: M }, S))),
    (S = Bt(T(y({}, S), { focusable: s }))),
    (S = ji(T(y({ portal: u }, S), { portalRef: A, preserveTabOrder: H }))),
    S
  );
});
function br(e, t = Hr) {
  return W(function (r) {
    let n = t(),
      i = r.store || n;
    return me(i, (a) => !r.unmountOnHide || a?.mounted || !!r.open)
      ? (0, dt.jsx)(e, y({}, r))
      : null;
  });
}
var _S = br(
  W(function (t) {
    let o = es(t);
    return j(Jm, o);
  }),
  Hr
);
var st = Math.min,
  Ke = Math.max,
  Fo = Math.round,
  Vo = Math.floor,
  jt = (e) => ({ x: e, y: e }),
  Qm = { left: "right", right: "left", bottom: "top", top: "bottom" },
  ed = { start: "end", end: "start" };
function Fn(e, t, o) {
  return Ke(e, st(t, o));
}
function Kt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pt(e) {
  return e.split("-")[0];
}
function gr(e) {
  return e.split("-")[1];
}
function Vn(e) {
  return e === "x" ? "y" : "x";
}
function Hn(e) {
  return e === "y" ? "height" : "width";
}
function Ut(e) {
  return ["top", "bottom"].includes(Pt(e)) ? "y" : "x";
}
function Ln(e) {
  return Vn(Ut(e));
}
function Qu(e, t, o) {
  o === void 0 && (o = !1);
  let r = gr(e),
    n = Ln(e),
    i = Hn(n),
    s =
      n === "x"
        ? r === (o ? "end" : "start")
          ? "right"
          : "left"
        : r === "start"
          ? "bottom"
          : "top";
  return (t.reference[i] > t.floating[i] && (s = _o(s)), [s, _o(s)]);
}
function ec(e) {
  let t = _o(e);
  return [_n(e), t, _n(t)];
}
function _n(e) {
  return e.replace(/start|end/g, (t) => ed[t]);
}
function td(e, t, o) {
  let r = ["left", "right"],
    n = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return o ? (t ? n : r) : t ? r : n;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function tc(e, t, o, r) {
  let n = gr(e),
    i = td(Pt(e), o === "start", r);
  return (n && ((i = i.map((s) => s + "-" + n)), t && (i = i.concat(i.map(_n)))), i);
}
function _o(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Qm[t]);
}
function rd(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function ts(e) {
  return typeof e != "number" ? rd(e) : { top: e, right: e, bottom: e, left: e };
}
function xr(e) {
  let { x: t, y: o, width: r, height: n } = e;
  return { width: r, height: n, top: o, left: t, right: t + r, bottom: o + n, x: t, y: o };
}
function rc(e, t, o) {
  let { reference: r, floating: n } = e,
    i = Ut(t),
    s = Ln(t),
    a = Hn(s),
    u = Pt(t),
    c = i === "y",
    l = r.x + r.width / 2 - n.width / 2,
    m = r.y + r.height / 2 - n.height / 2,
    f = r[a] / 2 - n[a] / 2,
    d;
  switch (u) {
    case "top":
      d = { x: l, y: r.y - n.height };
      break;
    case "bottom":
      d = { x: l, y: r.y + r.height };
      break;
    case "right":
      d = { x: r.x + r.width, y: m };
      break;
    case "left":
      d = { x: r.x - n.width, y: m };
      break;
    default:
      d = { x: r.x, y: r.y };
  }
  switch (gr(t)) {
    case "start":
      d[s] -= f * (o && c ? -1 : 1);
      break;
    case "end":
      d[s] += f * (o && c ? -1 : 1);
      break;
  }
  return d;
}
var oc = async (e, t, o) => {
  let { placement: r = "bottom", strategy: n = "absolute", middleware: i = [], platform: s } = o,
    a = i.filter(Boolean),
    u = await (s.isRTL == null ? void 0 : s.isRTL(t)),
    c = await s.getElementRects({ reference: e, floating: t, strategy: n }),
    { x: l, y: m } = rc(c, r, u),
    f = r,
    d = {},
    v = 0;
  for (let p = 0; p < a.length; p++) {
    let { name: x, fn: b } = a[p],
      {
        x: g,
        y: w,
        data: S,
        reset: C,
      } = await b({
        x: l,
        y: m,
        initialPlacement: r,
        placement: f,
        strategy: n,
        middlewareData: d,
        rects: c,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((l = g ?? l),
      (m = w ?? m),
      (d = { ...d, [x]: { ...d[x], ...S } }),
      C &&
        v <= 50 &&
        (v++,
        typeof C == "object" &&
          (C.placement && (f = C.placement),
          C.rects &&
            (c =
              C.rects === !0
                ? await s.getElementRects({ reference: e, floating: t, strategy: n })
                : C.rects),
          ({ x: l, y: m } = rc(c, f, u))),
        (p = -1)));
  }
  return { x: l, y: m, placement: f, strategy: n, middlewareData: d };
};
async function Nn(e, t) {
  var o;
  t === void 0 && (t = {});
  let { x: r, y: n, platform: i, rects: s, elements: a, strategy: u } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: l = "viewport",
      elementContext: m = "floating",
      altBoundary: f = !1,
      padding: d = 0,
    } = Kt(t, e),
    v = ts(d),
    x = a[f ? (m === "floating" ? "reference" : "floating") : m],
    b = xr(
      await i.getClippingRect({
        element:
          (o = await (i.isElement == null ? void 0 : i.isElement(x))) == null || o
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: u,
      })
    ),
    g =
      m === "floating"
        ? { x: r, y: n, width: s.floating.width, height: s.floating.height }
        : s.reference,
    w = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
    S = (await (i.isElement == null ? void 0 : i.isElement(w)))
      ? (await (i.getScale == null ? void 0 : i.getScale(w))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    C = xr(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: g,
            offsetParent: w,
            strategy: u,
          })
        : g
    );
  return {
    top: (b.top - C.top + v.top) / S.y,
    bottom: (C.bottom - b.bottom + v.bottom) / S.y,
    left: (b.left - C.left + v.left) / S.x,
    right: (C.right - b.right + v.right) / S.x,
  };
}
var nc = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    let { x: o, y: r, placement: n, rects: i, platform: s, elements: a, middlewareData: u } = t,
      { element: c, padding: l = 0 } = Kt(e, t) || {};
    if (c == null) return {};
    let m = ts(l),
      f = { x: o, y: r },
      d = Ln(n),
      v = Hn(d),
      p = await s.getDimensions(c),
      x = d === "y",
      b = x ? "top" : "left",
      g = x ? "bottom" : "right",
      w = x ? "clientHeight" : "clientWidth",
      S = i.reference[v] + i.reference[d] - f[d] - i.floating[v],
      C = f[d] - i.reference[d],
      P = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c)),
      M = P ? P[w] : 0;
    (!M || !(await (s.isElement == null ? void 0 : s.isElement(P)))) &&
      (M = a.floating[w] || i.floating[v]);
    let A = S / 2 - C / 2,
      R = M / 2 - p[v] / 2 - 1,
      F = st(m[b], R),
      H = st(m[g], R),
      B = F,
      h = M - p[v] - H,
      O = M / 2 - p[v] / 2 + A,
      k = Fn(B, O, h),
      E =
        !u.arrow && gr(n) != null && O !== k && i.reference[v] / 2 - (O < B ? F : H) - p[v] / 2 < 0,
      D = E ? (O < B ? O - B : O - h) : 0;
    return {
      [d]: f[d] + D,
      data: { [d]: k, centerOffset: O - k - D, ...(E && { alignmentOffset: D }) },
      reset: E,
    };
  },
});
var ic = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "flip",
      options: e,
      async fn(t) {
        var o, r;
        let {
            placement: n,
            middlewareData: i,
            rects: s,
            initialPlacement: a,
            platform: u,
            elements: c,
          } = t,
          {
            mainAxis: l = !0,
            crossAxis: m = !0,
            fallbackPlacements: f,
            fallbackStrategy: d = "bestFit",
            fallbackAxisSideDirection: v = "none",
            flipAlignment: p = !0,
            ...x
          } = Kt(e, t);
        if ((o = i.arrow) != null && o.alignmentOffset) return {};
        let b = Pt(n),
          g = Ut(a),
          w = Pt(a) === a,
          S = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)),
          C = f || (w || !p ? [_o(a)] : ec(a)),
          P = v !== "none";
        !f && P && C.push(...tc(a, p, v, S));
        let M = [a, ...C],
          A = await Nn(t, x),
          R = [],
          F = ((r = i.flip) == null ? void 0 : r.overflows) || [];
        if ((l && R.push(A[b]), m)) {
          let O = Qu(n, s, S);
          R.push(A[O[0]], A[O[1]]);
        }
        if (((F = [...F, { placement: n, overflows: R }]), !R.every((O) => O <= 0))) {
          var H, B;
          let O = (((H = i.flip) == null ? void 0 : H.index) || 0) + 1,
            k = M[O];
          if (k) return { data: { index: O, overflows: F }, reset: { placement: k } };
          let E =
            (B = F.filter((D) => D.overflows[0] <= 0).sort(
              (D, K) => D.overflows[1] - K.overflows[1]
            )[0]) == null
              ? void 0
              : B.placement;
          if (!E)
            switch (d) {
              case "bestFit": {
                var h;
                let D =
                  (h = F.filter((K) => {
                    if (P) {
                      let I = Ut(K.placement);
                      return I === g || I === "y";
                    }
                    return !0;
                  })
                    .map((K) => [
                      K.placement,
                      K.overflows.filter((I) => I > 0).reduce((I, q) => I + q, 0),
                    ])
                    .sort((K, I) => K[1] - I[1])[0]) == null
                    ? void 0
                    : h[0];
                D && (E = D);
                break;
              }
              case "initialPlacement":
                E = a;
                break;
            }
          if (n !== E) return { reset: { placement: E } };
        }
        return {};
      },
    }
  );
};
async function od(e, t) {
  let { placement: o, platform: r, elements: n } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(n.floating)),
    s = Pt(o),
    a = gr(o),
    u = Ut(o) === "y",
    c = ["left", "top"].includes(s) ? -1 : 1,
    l = i && u ? -1 : 1,
    m = Kt(t, e),
    {
      mainAxis: f,
      crossAxis: d,
      alignmentAxis: v,
    } = typeof m == "number"
      ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
      : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...m };
  return (
    a && typeof v == "number" && (d = a === "end" ? v * -1 : v),
    u ? { x: d * l, y: f * c } : { x: f * c, y: d * l }
  );
}
var sc = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var o, r;
          let { x: n, y: i, placement: s, middlewareData: a } = t,
            u = await od(t, e);
          return s === ((o = a.offset) == null ? void 0 : o.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: n + u.x, y: i + u.y, data: { ...u, placement: s } };
        },
      }
    );
  },
  ac = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          let { x: o, y: r, placement: n } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: a = {
                fn: (x) => {
                  let { x: b, y: g } = x;
                  return { x: b, y: g };
                },
              },
              ...u
            } = Kt(e, t),
            c = { x: o, y: r },
            l = await Nn(t, u),
            m = Ut(Pt(n)),
            f = Vn(m),
            d = c[f],
            v = c[m];
          if (i) {
            let x = f === "y" ? "top" : "left",
              b = f === "y" ? "bottom" : "right",
              g = d + l[x],
              w = d - l[b];
            d = Fn(g, d, w);
          }
          if (s) {
            let x = m === "y" ? "top" : "left",
              b = m === "y" ? "bottom" : "right",
              g = v + l[x],
              w = v - l[b];
            v = Fn(g, v, w);
          }
          let p = a.fn({ ...t, [f]: d, [m]: v });
          return { ...p, data: { x: p.x - o, y: p.y - r } };
        },
      }
    );
  },
  uc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: o, y: r, placement: n, rects: i, middlewareData: s } = t,
            { offset: a = 0, mainAxis: u = !0, crossAxis: c = !0 } = Kt(e, t),
            l = { x: o, y: r },
            m = Ut(n),
            f = Vn(m),
            d = l[f],
            v = l[m],
            p = Kt(a, t),
            x =
              typeof p == "number"
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p };
          if (u) {
            let w = f === "y" ? "height" : "width",
              S = i.reference[f] - i.floating[w] + x.mainAxis,
              C = i.reference[f] + i.reference[w] - x.mainAxis;
            d < S ? (d = S) : d > C && (d = C);
          }
          if (c) {
            var b, g;
            let w = f === "y" ? "width" : "height",
              S = ["top", "left"].includes(Pt(n)),
              C =
                i.reference[m] -
                i.floating[w] +
                ((S && ((b = s.offset) == null ? void 0 : b[m])) || 0) +
                (S ? 0 : x.crossAxis),
              P =
                i.reference[m] +
                i.reference[w] +
                (S ? 0 : ((g = s.offset) == null ? void 0 : g[m]) || 0) -
                (S ? x.crossAxis : 0);
            v < C ? (v = C) : v > P && (v = P);
          }
          return { [f]: d, [m]: v };
        },
      }
    );
  },
  cc = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          let { placement: o, rects: r, platform: n, elements: i } = t,
            { apply: s = () => {}, ...a } = Kt(e, t),
            u = await Nn(t, a),
            c = Pt(o),
            l = gr(o),
            m = Ut(o) === "y",
            { width: f, height: d } = r.floating,
            v,
            p;
          c === "top" || c === "bottom"
            ? ((v = c),
              (p =
                l === ((await (n.isRTL == null ? void 0 : n.isRTL(i.floating))) ? "start" : "end")
                  ? "left"
                  : "right"))
            : ((p = c), (v = l === "end" ? "top" : "bottom"));
          let x = d - u.top - u.bottom,
            b = f - u.left - u.right,
            g = st(d - u[v], x),
            w = st(f - u[p], b),
            S = !t.middlewareData.shift,
            C = g,
            P = w;
          if ((m ? (P = l || S ? st(w, b) : b) : (C = l || S ? st(g, x) : x), S && !l)) {
            let A = Ke(u.left, 0),
              R = Ke(u.right, 0),
              F = Ke(u.top, 0),
              H = Ke(u.bottom, 0);
            m
              ? (P = f - 2 * (A !== 0 || R !== 0 ? A + R : Ke(u.left, u.right)))
              : (C = d - 2 * (F !== 0 || H !== 0 ? F + H : Ke(u.top, u.bottom)));
          }
          await s({ ...t, availableWidth: P, availableHeight: C });
          let M = await n.getDimensions(i.floating);
          return f !== M.width || d !== M.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function Sr(e) {
  return fc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ye(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Et(e) {
  var t;
  return (t = (fc(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function fc(e) {
  return e instanceof Node || e instanceof Ye(e).Node;
}
function at(e) {
  return e instanceof Element || e instanceof Ye(e).Element;
}
function pt(e) {
  return e instanceof HTMLElement || e instanceof Ye(e).HTMLElement;
}
function lc(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ye(e).ShadowRoot;
}
function $r(e) {
  let { overflow: t, overflowX: o, overflowY: r, display: n } = ut(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + o) && !["inline", "contents"].includes(n);
}
function mc(e) {
  return ["table", "td", "th"].includes(Sr(e));
}
function Ho(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Bn(e) {
  let t = Wn(),
    o = at(e) ? ut(e) : e;
  return (
    o.transform !== "none" ||
    o.perspective !== "none" ||
    (o.containerType ? o.containerType !== "normal" : !1) ||
    (!t && (o.backdropFilter ? o.backdropFilter !== "none" : !1)) ||
    (!t && (o.filter ? o.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) => (o.willChange || "").includes(r)) ||
    ["paint", "layout", "strict", "content"].some((r) => (o.contain || "").includes(r))
  );
}
function dc(e) {
  let t = $t(e);
  for (; pt(t) && !Cr(t);) {
    if (Bn(t)) return t;
    if (Ho(t)) return null;
    t = $t(t);
  }
  return null;
}
function Wn() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Cr(e) {
  return ["html", "body", "#document"].includes(Sr(e));
}
function ut(e) {
  return Ye(e).getComputedStyle(e);
}
function Lo(e) {
  return at(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function $t(e) {
  if (Sr(e) === "html") return e;
  let t = e.assignedSlot || e.parentNode || (lc(e) && e.host) || Et(e);
  return lc(t) ? t.host : t;
}
function pc(e) {
  let t = $t(e);
  return Cr(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : pt(t) && $r(t) ? t : pc(t);
}
function Ur(e, t, o) {
  var r;
  (t === void 0 && (t = []), o === void 0 && (o = !0));
  let n = pc(e),
    i = n === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = Ye(n);
  return i
    ? t.concat(
        s,
        s.visualViewport || [],
        $r(n) ? n : [],
        s.frameElement && o ? Ur(s.frameElement) : []
      )
    : t.concat(n, Ur(n, [], o));
}
function bc(e) {
  let t = ut(e),
    o = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    n = pt(e),
    i = n ? e.offsetWidth : o,
    s = n ? e.offsetHeight : r,
    a = Fo(o) !== i || Fo(r) !== s;
  return (a && ((o = i), (r = s)), { width: o, height: r, $: a });
}
function os(e) {
  return at(e) ? e : e.contextElement;
}
function qr(e) {
  let t = os(e);
  if (!pt(t)) return jt(1);
  let o = t.getBoundingClientRect(),
    { width: r, height: n, $: i } = bc(t),
    s = (i ? Fo(o.width) : o.width) / r,
    a = (i ? Fo(o.height) : o.height) / n;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: s, y: a }
  );
}
var nd = jt(0);
function gc(e) {
  let t = Ye(e);
  return !Wn() || !t.visualViewport
    ? nd
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function id(e, t, o) {
  return (t === void 0 && (t = !1), !o || (t && o !== Ye(e)) ? !1 : t);
}
function yr(e, t, o, r) {
  (t === void 0 && (t = !1), o === void 0 && (o = !1));
  let n = e.getBoundingClientRect(),
    i = os(e),
    s = jt(1);
  t && (r ? at(r) && (s = qr(r)) : (s = qr(e)));
  let a = id(i, o, r) ? gc(i) : jt(0),
    u = (n.left + a.x) / s.x,
    c = (n.top + a.y) / s.y,
    l = n.width / s.x,
    m = n.height / s.y;
  if (i) {
    let f = Ye(i),
      d = r && at(r) ? Ye(r) : r,
      v = f,
      p = v.frameElement;
    for (; p && r && d !== v;) {
      let x = qr(p),
        b = p.getBoundingClientRect(),
        g = ut(p),
        w = b.left + (p.clientLeft + parseFloat(g.paddingLeft)) * x.x,
        S = b.top + (p.clientTop + parseFloat(g.paddingTop)) * x.y;
      ((u *= x.x),
        (c *= x.y),
        (l *= x.x),
        (m *= x.y),
        (u += w),
        (c += S),
        (v = Ye(p)),
        (p = v.frameElement));
    }
  }
  return xr({ width: l, height: m, x: u, y: c });
}
function sd(e) {
  let { elements: t, rect: o, offsetParent: r, strategy: n } = e,
    i = n === "fixed",
    s = Et(r),
    a = t ? Ho(t.floating) : !1;
  if (r === s || (a && i)) return o;
  let u = { scrollLeft: 0, scrollTop: 0 },
    c = jt(1),
    l = jt(0),
    m = pt(r);
  if ((m || (!m && !i)) && ((Sr(r) !== "body" || $r(s)) && (u = Lo(r)), pt(r))) {
    let f = yr(r);
    ((c = qr(r)), (l.x = f.x + r.clientLeft), (l.y = f.y + r.clientTop));
  }
  return {
    width: o.width * c.x,
    height: o.height * c.y,
    x: o.x * c.x - u.scrollLeft * c.x + l.x,
    y: o.y * c.y - u.scrollTop * c.y + l.y,
  };
}
function ad(e) {
  return Array.from(e.getClientRects());
}
function xc(e) {
  return yr(Et(e)).left + Lo(e).scrollLeft;
}
function ud(e) {
  let t = Et(e),
    o = Lo(e),
    r = e.ownerDocument.body,
    n = Ke(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = Ke(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
    s = -o.scrollLeft + xc(e),
    a = -o.scrollTop;
  return (
    ut(r).direction === "rtl" && (s += Ke(t.clientWidth, r.clientWidth) - n),
    { width: n, height: i, x: s, y: a }
  );
}
function cd(e, t) {
  let o = Ye(e),
    r = Et(e),
    n = o.visualViewport,
    i = r.clientWidth,
    s = r.clientHeight,
    a = 0,
    u = 0;
  if (n) {
    ((i = n.width), (s = n.height));
    let c = Wn();
    (!c || (c && t === "fixed")) && ((a = n.offsetLeft), (u = n.offsetTop));
  }
  return { width: i, height: s, x: a, y: u };
}
function ld(e, t) {
  let o = yr(e, !0, t === "fixed"),
    r = o.top + e.clientTop,
    n = o.left + e.clientLeft,
    i = pt(e) ? qr(e) : jt(1),
    s = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    u = n * i.x,
    c = r * i.y;
  return { width: s, height: a, x: u, y: c };
}
function vc(e, t, o) {
  let r;
  if (t === "viewport") r = cd(e, o);
  else if (t === "document") r = ud(Et(e));
  else if (at(t)) r = ld(t, o);
  else {
    let n = gc(e);
    r = { ...t, x: t.x - n.x, y: t.y - n.y };
  }
  return xr(r);
}
function Sc(e, t) {
  let o = $t(e);
  return o === t || !at(o) || Cr(o) ? !1 : ut(o).position === "fixed" || Sc(o, t);
}
function fd(e, t) {
  let o = t.get(e);
  if (o) return o;
  let r = Ur(e, [], !1).filter((a) => at(a) && Sr(a) !== "body"),
    n = null,
    i = ut(e).position === "fixed",
    s = i ? $t(e) : e;
  for (; at(s) && !Cr(s);) {
    let a = ut(s),
      u = Bn(s);
    (!u && a.position === "fixed" && (n = null),
      (
        i
          ? !u && !n
          : (!u && a.position === "static" && !!n && ["absolute", "fixed"].includes(n.position)) ||
            ($r(s) && !u && Sc(e, s))
      )
        ? (r = r.filter((l) => l !== s))
        : (n = a),
      (s = $t(s)));
  }
  return (t.set(e, r), r);
}
function md(e) {
  let { element: t, boundary: o, rootBoundary: r, strategy: n } = e,
    s = [...(o === "clippingAncestors" ? (Ho(t) ? [] : fd(t, this._c)) : [].concat(o)), r],
    a = s[0],
    u = s.reduce(
      (c, l) => {
        let m = vc(t, l, n);
        return (
          (c.top = Ke(m.top, c.top)),
          (c.right = st(m.right, c.right)),
          (c.bottom = st(m.bottom, c.bottom)),
          (c.left = Ke(m.left, c.left)),
          c
        );
      },
      vc(t, a, n)
    );
  return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}
function dd(e) {
  let { width: t, height: o } = bc(e);
  return { width: t, height: o };
}
function pd(e, t, o) {
  let r = pt(t),
    n = Et(t),
    i = o === "fixed",
    s = yr(e, !0, i, t),
    a = { scrollLeft: 0, scrollTop: 0 },
    u = jt(0);
  if (r || (!r && !i))
    if (((Sr(t) !== "body" || $r(n)) && (a = Lo(t)), r)) {
      let m = yr(t, !0, i, t);
      ((u.x = m.x + t.clientLeft), (u.y = m.y + t.clientTop));
    } else n && (u.x = xc(n));
  let c = s.left + a.scrollLeft - u.x,
    l = s.top + a.scrollTop - u.y;
  return { x: c, y: l, width: s.width, height: s.height };
}
function rs(e) {
  return ut(e).position === "static";
}
function hc(e, t) {
  return !pt(e) || ut(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Cc(e, t) {
  let o = Ye(e);
  if (Ho(e)) return o;
  if (!pt(e)) {
    let n = $t(e);
    for (; n && !Cr(n);) {
      if (at(n) && !rs(n)) return n;
      n = $t(n);
    }
    return o;
  }
  let r = hc(e, t);
  for (; r && mc(r) && rs(r);) r = hc(r, t);
  return r && Cr(r) && rs(r) && !Bn(r) ? o : r || dc(e) || o;
}
var vd = async function (e) {
  let t = this.getOffsetParent || Cc,
    o = this.getDimensions,
    r = await o(e.floating);
  return {
    reference: pd(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function hd(e) {
  return ut(e).direction === "rtl";
}
var bd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sd,
  getDocumentElement: Et,
  getClippingRect: md,
  getOffsetParent: Cc,
  getElementRects: vd,
  getClientRects: ad,
  getDimensions: dd,
  getScale: qr,
  isElement: at,
  isRTL: hd,
};
function gd(e, t) {
  let o = null,
    r,
    n = Et(e);
  function i() {
    var a;
    (clearTimeout(r), (a = o) == null || a.disconnect(), (o = null));
  }
  function s(a, u) {
    (a === void 0 && (a = !1), u === void 0 && (u = 1), i());
    let { left: c, top: l, width: m, height: f } = e.getBoundingClientRect();
    if ((a || t(), !m || !f)) return;
    let d = Vo(l),
      v = Vo(n.clientWidth - (c + m)),
      p = Vo(n.clientHeight - (l + f)),
      x = Vo(c),
      g = {
        rootMargin: -d + "px " + -v + "px " + -p + "px " + -x + "px",
        threshold: Ke(0, st(1, u)) || 1,
      },
      w = !0;
    function S(C) {
      let P = C[0].intersectionRatio;
      if (P !== u) {
        if (!w) return s();
        P
          ? s(!1, P)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      w = !1;
    }
    try {
      o = new IntersectionObserver(S, { ...g, root: n.ownerDocument });
    } catch {
      o = new IntersectionObserver(S, g);
    }
    o.observe(e);
  }
  return (s(!0), i);
}
function yc(e, t, o, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: n = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: u = !1,
    } = r,
    c = os(e),
    l = n || i ? [...(c ? Ur(c) : []), ...Ur(t)] : [];
  l.forEach((b) => {
    (n && b.addEventListener("scroll", o, { passive: !0 }), i && b.addEventListener("resize", o));
  });
  let m = c && a ? gd(c, o) : null,
    f = -1,
    d = null;
  s &&
    ((d = new ResizeObserver((b) => {
      let [g] = b;
      (g &&
        g.target === c &&
        d &&
        (d.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var w;
          (w = d) == null || w.observe(t);
        }))),
        o());
    })),
    c && !u && d.observe(c),
    d.observe(t));
  let v,
    p = u ? yr(e) : null;
  u && x();
  function x() {
    let b = yr(e);
    (p && (b.x !== p.x || b.y !== p.y || b.width !== p.width || b.height !== p.height) && o(),
      (p = b),
      (v = requestAnimationFrame(x)));
  }
  return (
    o(),
    () => {
      var b;
      (l.forEach((g) => {
        (n && g.removeEventListener("scroll", o), i && g.removeEventListener("resize", o));
      }),
        m?.(),
        (b = d) == null || b.disconnect(),
        (d = null),
        u && cancelAnimationFrame(v));
    }
  );
}
var wc = sc;
var Pc = ac,
  Ec = ic,
  Ic = cc;
var Mc = nc;
var Oc = uc,
  Rc = (e, t, o) => {
    let r = new Map(),
      n = { platform: bd, ...o },
      i = { ...n.platform, _c: r };
    return oc(e, t, { ...n, platform: i });
  };
var zn = _(X(), 1),
  ns = _(oe(), 1),
  xd = "div";
function Ac(e = 0, t = 0, o = 0, r = 0) {
  if (typeof DOMRect == "function") return new DOMRect(e, t, o, r);
  let n = { x: e, y: t, width: o, height: r, top: t, right: e + o, bottom: t + r, left: e };
  return T(y({}, n), { toJSON: () => n });
}
function Sd(e) {
  if (!e) return Ac();
  let { x: t, y: o, width: r, height: n } = e;
  return Ac(t, o, r, n);
}
function Cd(e, t) {
  return {
    contextElement: e || void 0,
    getBoundingClientRect: () => {
      let r = e,
        n = t?.(r);
      return n || !r ? Sd(n) : r.getBoundingClientRect();
    },
  };
}
function yd(e) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e);
}
function Dc(e) {
  let t = window.devicePixelRatio || 1;
  return Math.round(e * t) / t;
}
function wd(e, t) {
  return wc(({ placement: o }) => {
    var r;
    let n = (e?.clientHeight || 0) / 2,
      i = typeof t.gutter == "number" ? t.gutter + n : (r = t.gutter) != null ? r : n;
    return { crossAxis: !!o.split("-")[1] ? void 0 : t.shift, mainAxis: i, alignmentAxis: t.shift };
  });
}
function Pd(e) {
  if (e.flip === !1) return;
  let t = typeof e.flip == "string" ? e.flip.split(" ") : void 0;
  return (te(!t || t.every(yd), !1), Ec({ padding: e.overflowPadding, fallbackPlacements: t }));
}
function Ed(e) {
  if (!(!e.slide && !e.overlap))
    return Pc({
      mainAxis: e.slide,
      crossAxis: e.overlap,
      padding: e.overflowPadding,
      limiter: Oc(),
    });
}
function Id(e) {
  return Ic({
    padding: e.overflowPadding,
    apply({ elements: t, availableWidth: o, availableHeight: r, rects: n }) {
      let i = t.floating,
        s = Math.round(n.reference.width);
      ((o = Math.floor(o)),
        (r = Math.floor(r)),
        i.style.setProperty("--popover-anchor-width", `${s}px`),
        i.style.setProperty("--popover-available-width", `${o}px`),
        i.style.setProperty("--popover-available-height", `${r}px`),
        e.sameWidth && (i.style.width = `${s}px`),
        e.fitViewport && ((i.style.maxWidth = `${o}px`), (i.style.maxHeight = `${r}px`)));
    },
  });
}
function Md(e, t) {
  if (e) return Mc({ element: e, padding: t.arrowPadding });
}
var is = U(function (t) {
    var o = t,
      {
        store: r,
        modal: n = !1,
        portal: i = !!n,
        preserveTabOrder: s = !0,
        autoFocusOnShow: a = !0,
        wrapperProps: u,
        fixed: c = !1,
        flip: l = !0,
        shift: m = 0,
        slide: f = !0,
        overlap: d = !1,
        sameWidth: v = !1,
        fitViewport: p = !1,
        gutter: x,
        arrowPadding: b = 4,
        overflowPadding: g = 8,
        getAnchorRect: w,
        updatePosition: S,
      } = o,
      C = z(o, [
        "store",
        "modal",
        "portal",
        "preserveTabOrder",
        "autoFocusOnShow",
        "wrapperProps",
        "fixed",
        "flip",
        "shift",
        "slide",
        "overlap",
        "sameWidth",
        "fitViewport",
        "gutter",
        "arrowPadding",
        "overflowPadding",
        "getAnchorRect",
        "updatePosition",
      ]);
    let P = vr();
    ((r = r || P), te(r, !1));
    let M = r.useState("arrowElement"),
      A = r.useState("anchorElement"),
      R = r.useState("disclosureElement"),
      F = r.useState("popoverElement"),
      H = r.useState("contentElement"),
      B = r.useState("placement"),
      h = r.useState("mounted"),
      O = r.useState("rendered"),
      k = (0, zn.useRef)(null),
      [E, D] = (0, zn.useState)(!1),
      { portalRef: K, domReady: I } = Dr(i, C.portalRef),
      q = $(w),
      N = $(S),
      he = !!S;
    (Q(() => {
      if (!F?.isConnected) return;
      F.style.setProperty("--popover-overflow-padding", `${g}px`);
      let Se = Cd(A, q),
        J = async () => {
          if (!h) return;
          M || (k.current = k.current || document.createElement("div"));
          let Ue = M || k.current,
            Xe = [
              wd(Ue, { gutter: x, shift: m }),
              Pd({ flip: l, overflowPadding: g }),
              Ed({ slide: f, shift: m, overlap: d, overflowPadding: g }),
              Md(Ue, { arrowPadding: b }),
              Id({ sameWidth: v, fitViewport: p, overflowPadding: g }),
            ],
            Ne = await Rc(Se, F, {
              placement: B,
              strategy: c ? "fixed" : "absolute",
              middleware: Xe,
            });
          (r?.setState("currentPlacement", Ne.placement), D(!0));
          let Ot = Dc(Ne.x),
            Gt = Dc(Ne.y);
          if (
            (Object.assign(F.style, {
              top: "0",
              left: "0",
              transform: `translate3d(${Ot}px,${Gt}px,0)`,
            }),
            Ue && Ne.middlewareData.arrow)
          ) {
            let { x: lt, y: ht } = Ne.middlewareData.arrow,
              Yt = Ne.placement.split("-")[0],
              Rt = Ue.clientWidth / 2,
              Xt = Ue.clientHeight / 2,
              G = lt != null ? lt + Rt : -Rt,
              ie = ht != null ? ht + Xt : -Xt;
            (F.style.setProperty(
              "--popover-transform-origin",
              {
                top: `${G}px calc(100% + ${Xt}px)`,
                bottom: `${G}px ${-Xt}px`,
                left: `calc(100% + ${Rt}px) ${ie}px`,
                right: `${-Rt}px ${ie}px`,
              }[Yt]
            ),
              Object.assign(Ue.style, {
                left: lt != null ? `${lt}px` : "",
                top: ht != null ? `${ht}px` : "",
                [Yt]: "100%",
              }));
          }
        },
        vt = yc(
          Se,
          F,
          async () => {
            he ? (await N({ updatePosition: J }), D(!0)) : await J();
          },
          { elementResize: typeof ResizeObserver == "function" }
        );
      return () => {
        (D(!1), vt());
      };
    }, [r, O, F, M, A, F, B, h, I, c, l, m, f, d, v, p, x, b, g, q, he, N]),
      Q(() => {
        if (!h || !I || !F?.isConnected || !H?.isConnected) return;
        let Se = () => {
          F.style.zIndex = getComputedStyle(H).zIndex;
        };
        Se();
        let J = requestAnimationFrame(() => {
          J = requestAnimationFrame(Se);
        });
        return () => cancelAnimationFrame(J);
      }, [h, I, F, H]));
    let ye = c ? "fixed" : "absolute";
    return (
      (C = fe(
        C,
        (Se) =>
          (0, ns.jsx)(
            "div",
            T(y({}, u), {
              style: y({ position: ye, top: 0, left: 0, width: "max-content" }, u?.style),
              ref: r?.setPopoverElement,
              children: Se,
            })
          ),
        [r, ye, u]
      )),
      (C = fe(C, (Se) => (0, ns.jsx)(or, { value: r, children: Se }), [r])),
      (C = T(y({ "data-placing": !E || void 0 }, C), {
        style: y({ position: "relative" }, C.style),
      })),
      (C = es(
        T(
          y(
            {
              store: r,
              modal: n,
              portal: i,
              preserveTabOrder: s,
              preserveTabOrderAnchor: R || A,
              autoFocusOnShow: E && a,
            },
            C
          ),
          { portalRef: K }
        )
      )),
      C
    );
  }),
  oC = br(
    W(function (t) {
      let o = is(t);
      return j(xd, o);
    }),
    vr
  );
var Pe = _(X(), 1),
  ss = _(oe(), 1),
  Od = "div";
function kc(e, t, o, r) {
  return it(t) ? !0 : e ? !!(de(t, e) || (o && de(o, e)) || r?.some((n) => kc(e, n, o))) : !1;
}
function Rd(e) {
  var t = e,
    { store: o } = t,
    r = z(t, ["store"]);
  let [n, i] = (0, Pe.useState)(!1),
    s = o.useState("mounted");
  (0, Pe.useEffect)(() => {
    s || i(!1);
  }, [s]);
  let a = r.onFocus,
    u = $((l) => {
      (a?.(l), !l.defaultPrevented && i(!0));
    }),
    c = (0, Pe.useRef)(null);
  return (
    (0, Pe.useEffect)(
      () =>
        ge(o, ["anchorElement"], (l) => {
          c.current = l.anchorElement;
        }),
      []
    ),
    (r = T(y({ autoFocusOnHide: n, finalFocus: c }, r), { onFocus: u })),
    r
  );
}
var Tc = (0, Pe.createContext)(null),
  jn = U(function (t) {
    var o = t,
      {
        store: r,
        modal: n = !1,
        portal: i = !!n,
        hideOnEscape: s = !0,
        hideOnHoverOutside: a = !0,
        disablePointerEventsOnApproach: u = !!a,
      } = o,
      c = z(o, [
        "store",
        "modal",
        "portal",
        "hideOnEscape",
        "hideOnHoverOutside",
        "disablePointerEventsOnApproach",
      ]);
    let l = Mo();
    ((r = r || l), te(r, !1));
    let m = (0, Pe.useRef)(null),
      [f, d] = (0, Pe.useState)([]),
      v = (0, Pe.useRef)(0),
      p = (0, Pe.useRef)(null),
      { portalRef: x, domReady: b } = Dr(i, c.portalRef),
      g = Tr(),
      w = !!a,
      S = ae(a),
      C = !!u,
      P = ae(u),
      M = r.useState("open"),
      A = r.useState("mounted");
    ((0, Pe.useEffect)(() => {
      if (!b || !A || (!w && !C)) return;
      let h = m.current;
      return h
        ? be(
            xe(
              "mousemove",
              (k) => {
                if (!r || !g()) return;
                let { anchorElement: E, hideTimeout: D, timeout: K } = r.getState(),
                  I = p.current,
                  [q] = k.composedPath(),
                  N = E;
                if (kc(q, h, N, f)) {
                  ((p.current = q && N && de(N, q) ? Mn(k) : null),
                    window.clearTimeout(v.current),
                    (v.current = 0));
                  return;
                }
                if (!v.current) {
                  if (I) {
                    let he = Mn(k),
                      ye = Ni(h, I);
                    if (Li(he, ye)) {
                      if (((p.current = he), !P(k))) return;
                      (k.preventDefault(), k.stopPropagation());
                      return;
                    }
                  }
                  S(k) &&
                    (v.current = window.setTimeout(() => {
                      ((v.current = 0), r?.hide());
                    }, D ?? K));
                }
              },
              !0
            ),
            () => clearTimeout(v.current)
          )
        : void 0;
    }, [r, g, b, A, w, C, f, P, S]),
      (0, Pe.useEffect)(() => {
        if (!b || !A || !C) return;
        let h = (O) => {
          let k = m.current;
          if (!k) return;
          let E = p.current;
          if (!E) return;
          let D = Ni(k, E);
          if (Li(Mn(O), D)) {
            if (!P(O)) return;
            (O.preventDefault(), O.stopPropagation());
          }
        };
        return be(
          xe("mouseenter", h, !0),
          xe("mouseover", h, !0),
          xe("mouseout", h, !0),
          xe("mouseleave", h, !0)
        );
      }, [b, A, C, P]),
      (0, Pe.useEffect)(() => {
        b && (M || r?.setAutoFocusOnShow(!1));
      }, [r, b, M]));
    let R = fn(M);
    (0, Pe.useEffect)(() => {
      if (b)
        return () => {
          R.current || r?.setAutoFocusOnShow(!1);
        };
    }, [r, b]);
    let F = (0, Pe.useContext)(Tc);
    Q(() => {
      if (n || !i || !A || !b) return;
      let h = m.current;
      if (h) return F?.(h);
    }, [n, i, A, b]);
    let H = (0, Pe.useCallback)(
      (h) => {
        d((k) => [...k, h]);
        let O = F?.(h);
        return () => {
          (d((k) => k.filter((E) => E !== h)), O?.());
        };
      },
      [F]
    );
    ((c = fe(
      c,
      (h) =>
        (0, ss.jsx)(In, {
          value: r,
          children: (0, ss.jsx)(Tc.Provider, { value: H, children: h }),
        }),
      [r, H]
    )),
      (c = T(y({}, c), { ref: ee(m, c.ref) })),
      (c = Rd(y({ store: r }, c))));
    let B = r.useState((h) => n || h.autoFocusOnShow);
    return (
      (c = is(
        T(y({ store: r, modal: n, portal: i, autoFocusOnShow: B }, c), {
          portalRef: x,
          hideOnEscape(h) {
            return ur(s, h)
              ? !1
              : (requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    r?.hide();
                  });
                }),
                !0);
          },
        })
      )),
      c
    );
  }),
  No = br(
    W(function (t) {
      let o = jn(t);
      return j(Od, o);
    }),
    Mo
  );
var wr = _(X(), 1),
  Ad = "a",
  as = U(function (t) {
    var o = t,
      { store: r, showOnHover: n = !0 } = o,
      i = z(o, ["store", "showOnHover"]);
    let s = Mo();
    ((r = r || s), te(r, !1));
    let a = ft(i),
      u = (0, wr.useRef)(0);
    ((0, wr.useEffect)(() => () => window.clearTimeout(u.current), []),
      (0, wr.useEffect)(
        () =>
          xe(
            "mouseleave",
            (b) => {
              if (!r) return;
              let { anchorElement: g } = r.getState();
              g && b.target === g && (window.clearTimeout(u.current), (u.current = 0));
            },
            !0
          ),
        [r]
      ));
    let c = i.onMouseMove,
      l = ae(n),
      m = Tr(),
      f = $((x) => {
        if ((c?.(x), a || !r || x.defaultPrevented || u.current || !m() || !l(x))) return;
        let b = x.currentTarget;
        (r.setAnchorElement(b), r.setDisclosureElement(b));
        let { showTimeout: g, timeout: w } = r.getState(),
          S = () => {
            ((u.current = 0),
              m() &&
                (r?.setAnchorElement(b),
                r?.show(),
                queueMicrotask(() => {
                  r?.setDisclosureElement(b);
                })));
          },
          C = g ?? w;
        C === 0 ? S() : (u.current = window.setTimeout(S, C));
      }),
      d = i.onClick,
      v = $((x) => {
        (d?.(x), r && (window.clearTimeout(u.current), (u.current = 0)));
      }),
      p = (0, wr.useCallback)(
        (x) => {
          if (!r) return;
          let { anchorElement: b } = r.getState();
          b?.isConnected || r.setAnchorElement(x);
        },
        [r]
      );
    return ((i = T(y({}, i), { ref: ee(p, i.ref), onMouseMove: f, onClick: v })), (i = Bt(i)), i);
  }),
  Dd = W(function (t) {
    let o = as(t);
    return j(Ad, o);
  });
function Kn(e = {}) {
  var t = e,
    { popover: o } = t,
    r = Ir(t, ["popover"]);
  let n = Vt(
    r.store,
    lr(o, [
      "arrowElement",
      "anchorElement",
      "contentElement",
      "popoverElement",
      "disclosureElement",
    ])
  );
  let i = n?.getState(),
    s = ko(le(Z({}, r), { store: n })),
    a = Y(r.placement, i?.placement, "bottom"),
    u = le(Z({}, s.getState()), {
      placement: a,
      currentPlacement: a,
      anchorElement: Y(i?.anchorElement, null),
      popoverElement: Y(i?.popoverElement, null),
      arrowElement: Y(i?.arrowElement, null),
      rendered: Symbol("rendered"),
    }),
    c = Me(u, s, n);
  return le(Z(Z({}, s), c), {
    setAnchorElement: (l) => c.setState("anchorElement", l),
    setPopoverElement: (l) => c.setState("popoverElement", l),
    setArrowElement: (l) => c.setState("arrowElement", l),
    render: () => c.setState("rendered", Symbol("rendered")),
  });
}
function Un(e, t, o) {
  return (ot(t, [o.popover]), pe(e, o, "placement"), Qi(e, t, o));
}
function Bo(e = {}) {
  var t;
  let o = (t = e.store) == null ? void 0 : t.getState(),
    r = Kn(le(Z({}, e), { placement: Y(e.placement, o?.placement, "bottom") })),
    n = Y(e.timeout, o?.timeout, 500),
    i = le(Z({}, r.getState()), {
      timeout: n,
      showTimeout: Y(e.showTimeout, o?.showTimeout),
      hideTimeout: Y(e.hideTimeout, o?.hideTimeout),
      autoFocusOnShow: Y(o?.autoFocusOnShow, !1),
    }),
    s = Me(i, r, e.store);
  return le(Z(Z({}, r), s), { setAutoFocusOnShow: (a) => s.setState("autoFocusOnShow", a) });
}
function $n(e, t, o) {
  return (pe(e, o, "timeout"), pe(e, o, "showTimeout"), pe(e, o, "hideTimeout"), Un(e, t, o));
}
function Wo(e = {}) {
  let [t, o] = je(Bo, e);
  return $n(t, o, e);
}
var _c = _(X(), 1),
  zo = Ee([xt], [tr]),
  Fc = zo.useContext,
  Vc = zo.useScopedContext,
  $C = zo.useProviderContext,
  qC = zo.ContextProvider,
  GC = zo.ScopedContextProvider,
  YC = (0, _c.createContext)(void 0);
var kd = "div",
  jo = U(function (t) {
    var o = t,
      { store: r } = o,
      n = z(o, ["store"]);
    let i = vr();
    return ((r = r || i), (n = T(y({}, n), { ref: ee(r?.setAnchorElement, n.ref) })), n);
  }),
  ty = W(function (t) {
    let o = jo(t);
    return j(kd, o);
  });
var Gr = _(X(), 1),
  Hc = "button",
  us = U(function (t) {
    let o = (0, Gr.useRef)(null),
      r = mn(o, Hc),
      [n, i] = (0, Gr.useState)(() => !!r && Ge({ tagName: r, type: t.type }));
    return (
      (0, Gr.useEffect)(() => {
        o.current && i(Ge(o.current));
      }, []),
      (t = T(y({ role: !n && r !== "a" ? "button" : void 0 }, t), { ref: ee(o, t.ref) })),
      (t = ho(t)),
      t
    );
  }),
  uy = W(function (t) {
    let o = us(t);
    return j(Hc, o);
  });
var Yr = _(X(), 1),
  _d = "button",
  Fd = Symbol("disclosure"),
  cs = U(function (t) {
    var o = t,
      { store: r, toggleOnClick: n = !0 } = o,
      i = z(o, ["store", "toggleOnClick"]);
    let s = So();
    ((r = r || s), te(r, !1));
    let a = (0, Yr.useRef)(null),
      [u, c] = (0, Yr.useState)(!1),
      l = r.useState("disclosureElement"),
      m = r.useState("open");
    (0, Yr.useEffect)(() => {
      let g = l === a.current;
      (l?.isConnected || (r?.setDisclosureElement(a.current), (g = !0)), c(m && g));
    }, [l, r, m]);
    let f = i.onClick,
      d = ae(n),
      [v, p] = pn(i, Fd, !0),
      x = $((g) => {
        (f?.(g),
          !g.defaultPrevented &&
            (v || (d(g) && (r?.setDisclosureElement(g.currentTarget), r?.toggle()))));
      }),
      b = r.useState("contentElement");
    return (
      (i = T(y(y({ "aria-expanded": u, "aria-controls": b?.id }, p), i), {
        ref: ee(a, i.ref),
        onClick: x,
      })),
      (i = us(i)),
      i
    );
  }),
  hy = W(function (t) {
    let o = cs(t);
    return j(_d, o);
  });
var Vd = "button",
  ls = U(function (t) {
    var o = t,
      { store: r } = o,
      n = z(o, ["store"]);
    let i = Hr();
    ((r = r || i), te(r, !1));
    let s = r.useState("contentElement");
    return ((n = y({ "aria-haspopup": Qt(s, "dialog") }, n)), (n = cs(y({ store: r }, n))), n);
  }),
  Py = W(function (t) {
    let o = ls(t);
    return j(Vd, o);
  });
var Lc = _(oe(), 1),
  Hd = "button",
  fs = U(function (t) {
    var o = t,
      { store: r } = o,
      n = z(o, ["store"]);
    let i = vr();
    ((r = r || i), te(r, !1));
    let s = n.onClick,
      a = $((u) => {
        (r?.setAnchorElement(u.currentTarget), s?.(u));
      });
    return (
      (n = fe(n, (u) => (0, Lc.jsx)(or, { value: r, children: u }), [r])),
      (n = T(y({}, n), { onClick: a })),
      (n = jo(y({ store: r }, n))),
      (n = ls(y({ store: r }, n))),
      n
    );
  }),
  ky = W(function (t) {
    let o = fs(t);
    return j(Hd, o);
  });
var Nc = _(X(), 1),
  Ld = "div",
  qt = "";
function ms() {
  qt = "";
}
function Nd(e) {
  let t = e.target;
  return t && ke(t)
    ? !1
    : e.key === " " && qt.length
      ? !0
      : e.key.length === 1 &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.metaKey &&
        /^[\p{Letter}\p{Number}]$/u.test(e.key);
}
function Bd(e, t) {
  if (Ae(e)) return !0;
  let o = e.target;
  return o ? t.some((n) => n.element === o) : !1;
}
function Wd(e) {
  return e.filter((t) => !t.disabled);
}
function qn(e, t) {
  var o;
  let r =
    ((o = e.element) == null ? void 0 : o.textContent) || e.children || ("value" in e && e.value);
  return r ? eo(r).trim().toLowerCase().startsWith(t.toLowerCase()) : !1;
}
function zd(e, t, o) {
  if (!o) return e;
  let r = e.find((n) => n.id === o);
  return !r || !qn(r, t) || (qt !== t && qn(r, qt))
    ? e
    : ((qt = t),
      Ha(
        e.filter((n) => qn(n, qt)),
        o
      ).filter((n) => n.id !== o));
}
var Ko = U(function (t) {
    var o = t,
      { store: r, typeahead: n = !0 } = o,
      i = z(o, ["store", "typeahead"]);
    let s = Nt();
    ((r = r || s), te(r, !1));
    let a = i.onKeyDownCapture,
      u = (0, Nc.useRef)(0),
      c = $((l) => {
        if ((a?.(l), l.defaultPrevented || !n || !r)) return;
        if (!Nd(l)) return ms();
        let { renderedItems: m, items: f, activeId: d, id: v } = r.getState(),
          p = Wd(f.length > m.length ? f : m),
          x = ne(l.currentTarget),
          b = `[data-offscreen-id="${v}"]`,
          g = x.querySelectorAll(b);
        for (let C of g) {
          let P = C.ariaDisabled === "true" || ("disabled" in C && !!C.disabled);
          p.push({ id: C.id, element: C, disabled: P });
        }
        if ((g.length && (p = fo(p, (C) => C.element)), !Bd(l, p))) return ms();
        (l.preventDefault(),
          window.clearTimeout(u.current),
          (u.current = window.setTimeout(() => {
            qt = "";
          }, 500)));
        let w = l.key.toLowerCase();
        ((qt += w), (p = zd(p, w, d)));
        let S = p.find((C) => qn(C, qt));
        S ? r.move(S.id) : ms();
      });
    return ((i = T(y({}, i), { onKeyDownCapture: c })), We(i));
  }),
  jd = W(function (t) {
    let o = Ko(t);
    return j(Ld, o);
  });
var Bc = _(X(), 1),
  Kd = "div";
function Wc(e) {
  let t = e.relatedTarget;
  return t?.nodeType === Node.ELEMENT_NODE ? t : null;
}
function Ud(e) {
  let t = Wc(e);
  return t ? de(e.currentTarget, t) : !1;
}
var ds = Symbol("composite-hover");
function $d(e) {
  let t = Wc(e);
  if (!t) return !1;
  do {
    if (qe(t, ds) && t[ds]) return !0;
    t = t.parentElement;
  } while (t);
  return !1;
}
var Uo = U(function (t) {
    var o = t,
      { store: r, focusOnHover: n = !0, blurOnHoverEnd: i = !!n } = o,
      s = z(o, ["store", "focusOnHover", "blurOnHoverEnd"]);
    let a = Nt();
    ((r = r || a), te(r, !1));
    let u = Tr(),
      c = s.onMouseMove,
      l = ae(n),
      m = $((x) => {
        if ((c?.(x), !x.defaultPrevented && u() && l(x))) {
          if (!it(x.currentTarget)) {
            let b = r?.getState().baseElement;
            b && !nt(b) && b.focus();
          }
          r?.setActiveId(x.currentTarget.id);
        }
      }),
      f = s.onMouseLeave,
      d = ae(i),
      v = $((x) => {
        var b;
        (f?.(x),
          !x.defaultPrevented &&
            u() &&
            (Ud(x) ||
              $d(x) ||
              (l(x) &&
                d(x) &&
                (r?.setActiveId(null), (b = r?.getState().baseElement) == null || b.focus()))));
      }),
      p = (0, Bc.useCallback)((x) => {
        x && (x[ds] = !0);
      }, []);
    return ((s = T(y({}, s), { ref: ee(p, s.ref), onMouseMove: m, onMouseLeave: v })), We(s));
  }),
  qd = er(
    W(function (t) {
      let o = Uo(t);
      return j(Kd, o);
    })
  );
var zc = _(X(), 1),
  $o = Ee([xt, Mu], [tr, In]),
  ct = $o.useContext,
  ps = $o.useScopedContext,
  ir = $o.useProviderContext,
  qo = $o.ContextProvider,
  vs = $o.ScopedContextProvider;
var Gd = (0, zc.createContext)(void 0);
var Gn = _(X(), 1),
  jc = _(oe(), 1),
  Yd = "div";
function Xd(e) {
  var t = e,
    { store: o } = t,
    r = z(t, ["store"]);
  let [n, i] = (0, Gn.useState)(void 0),
    s = r["aria-label"],
    a = me(o, "disclosureElement"),
    u = me(o, "contentElement");
  return (
    (0, Gn.useEffect)(() => {
      let c = a;
      if (!c) return;
      let l = u;
      if (!l) return;
      s || l.hasAttribute("aria-label") ? i(void 0) : c.id && i(c.id);
    }, [s, a, u]),
    n
  );
}
var hs = U(function (t) {
    var o = t,
      { store: r, alwaysVisible: n, composite: i } = o,
      s = z(o, ["store", "alwaysVisible", "composite"]);
    let a = ir();
    ((r = r || a), te(r, !1));
    let u = r.parent,
      c = r.menubar,
      l = !!u,
      m = De(s.id),
      f = s.onKeyDown,
      d = r.useState((M) => M.placement.split("-")[0]),
      v = r.useState((M) => (M.orientation === "both" ? void 0 : M.orientation)),
      p = v !== "vertical",
      x = me(c, (M) => !!M && M.orientation !== "vertical"),
      b = $((M) => {
        if ((f?.(M), !M.defaultPrevented)) {
          if (l || (c && !p)) {
            let R = {
              ArrowRight: () => d === "left" && !p,
              ArrowLeft: () => d === "right" && !p,
              ArrowUp: () => d === "bottom" && p,
              ArrowDown: () => d === "top" && p,
            }[M.key];
            if (R?.()) return (M.stopPropagation(), M.preventDefault(), r?.hide());
          }
          if (c) {
            let R = {
                ArrowRight: () => {
                  if (x) return c.next();
                },
                ArrowLeft: () => {
                  if (x) return c.previous();
                },
                ArrowDown: () => {
                  if (!x) return c.next();
                },
                ArrowUp: () => {
                  if (!x) return c.previous();
                },
              }[M.key],
              F = R?.();
            F !== void 0 && (M.stopPropagation(), M.preventDefault(), c.move(F));
          }
        }
      });
    s = fe(s, (M) => (0, jc.jsx)(vs, { value: r, children: M }), [r]);
    let g = Xd(y({ store: r }, s)),
      w = r.useState("mounted"),
      S = pr(w, s.hidden, n),
      C = S ? T(y({}, s.style), { display: "none" }) : s.style;
    s = T(y({ id: m, "aria-labelledby": g, hidden: S }, s), {
      ref: ee(m ? r.setContentElement : null, s.ref),
      style: C,
      onKeyDown: b,
    });
    let P = !!r.combobox;
    return (
      (i = i ?? !P),
      i && (s = y({ role: "menu", "aria-orientation": v }, s)),
      (s = Vr(y({ store: r, composite: i }, s))),
      (s = Ko(y({ store: r, typeahead: !P }, s))),
      s
    );
  }),
  Jd = W(function (t) {
    let o = hs(t);
    return j(Yd, o);
  });
var It = _(X(), 1),
  Zd = "div",
  Qd = U(function (t) {
    var o = t,
      {
        store: r,
        modal: n = !1,
        portal: i = !!n,
        hideOnEscape: s = !0,
        autoFocusOnShow: a = !0,
        hideOnHoverOutside: u,
        alwaysVisible: c,
      } = o,
      l = z(o, [
        "store",
        "modal",
        "portal",
        "hideOnEscape",
        "autoFocusOnShow",
        "hideOnHoverOutside",
        "alwaysVisible",
      ]);
    let m = ir();
    ((r = r || m), te(r, !1));
    let f = (0, It.useRef)(null),
      d = r.parent,
      v = r.menubar,
      p = !!d,
      x = !!v && !p;
    l = T(y({}, l), { ref: ee(f, l.ref) });
    let b = hs(y({ store: r, alwaysVisible: c }, l)),
      { "aria-labelledby": g } = b;
    l = z(b, ["aria-labelledby"]);
    let [S, C] = (0, It.useState)(),
      P = r.useState("autoFocusOnShow"),
      M = r.useState("initialFocus"),
      A = r.useState("baseElement"),
      R = r.useState("renderedItems");
    (0, It.useEffect)(() => {
      let E = !1;
      return (
        C((D) => {
          var K, I, q;
          if (E || !P) return;
          if ((K = D?.current) != null && K.isConnected) return D;
          let N = (0, It.createRef)();
          switch (M) {
            case "first":
              N.current =
                ((I = R.find((he) => !he.disabled && he.element)) == null ? void 0 : I.element) ||
                null;
              break;
            case "last":
              N.current =
                ((q = [...R].reverse().find((he) => !he.disabled && he.element)) == null
                  ? void 0
                  : q.element) || null;
              break;
            default:
              N.current = A;
          }
          return N;
        }),
        () => {
          E = !0;
        }
      );
    }, [r, P, M, R, A]);
    let F = p ? !1 : n,
      H = !!a,
      B = !!S || !!l.initialFocus || !!F,
      h = me(r.combobox || r, "contentElement"),
      O = me(d?.combobox || d, "contentElement"),
      k = (0, It.useMemo)(() => {
        if (!O || !h) return;
        let E = h.getAttribute("role"),
          D = O.getAttribute("role");
        if (!((D === "menu" || D === "menubar") && E === "menu")) return O;
      }, [h, O]);
    return (
      k !== void 0 && (l = y({ preserveTabOrderAnchor: k }, l)),
      (l = jn(
        T(
          y(
            { store: r, alwaysVisible: c, initialFocus: S, autoFocusOnShow: H ? B && a : P || !!F },
            l
          ),
          {
            hideOnEscape(E) {
              return ur(s, E) ? !1 : (r?.hideAll(), !0);
            },
            hideOnHoverOutside(E) {
              let D = r?.getState().disclosureElement;
              return (typeof u == "function" ? u(E) : (u ?? (p ? !0 : x ? (D ? !it(D) : !0) : !1)))
                ? E.defaultPrevented || !p || !D || (Ca(D, "mouseout", E), !it(D))
                  ? !0
                  : (requestAnimationFrame(() => {
                      it(D) || r?.hide();
                    }),
                    !1)
                : !1;
            },
            modal: F,
            portal: i,
            backdrop: p ? !1 : l.backdrop,
          }
        )
      )),
      (l = y({ "aria-labelledby": g }, l)),
      l
    );
  }),
  Yn = br(
    W(function (t) {
      let o = Qd(t);
      return j(Zd, o);
    }),
    ir
  );
var Uc = _(X(), 1),
  bs = _(oe(), 1),
  ep = "button";
function tp(e, t) {
  return {
    ArrowDown: t === "bottom" || t === "top" ? "first" : !1,
    ArrowUp: t === "bottom" || t === "top" ? "last" : !1,
    ArrowRight: t === "right" ? "first" : !1,
    ArrowLeft: t === "left" ? "first" : !1,
  }[e.key];
}
function Kc(e, t) {
  return !!e?.some((o) =>
    !o.element || o.element === t ? !1 : o.element.getAttribute("aria-expanded") === "true"
  );
}
var rp = U(function (t) {
    var o = t,
      { store: r, focusable: n, accessibleWhenDisabled: i, showOnHover: s } = o,
      a = z(o, ["store", "focusable", "accessibleWhenDisabled", "showOnHover"]);
    let u = ir();
    ((r = r || u), te(r, !1));
    let c = (0, Uc.useRef)(null),
      l = r.parent,
      m = r.menubar,
      f = !!l,
      d = !!m && !f,
      v = ft(a),
      p = () => {
        let H = c.current;
        H && (r?.setDisclosureElement(H), r?.setAnchorElement(H), r?.show());
      },
      x = a.onFocus,
      b = $((H) => {
        if (
          (x?.(H),
          v || H.defaultPrevented || (r?.setAutoFocusOnShow(!1), r?.setActiveId(null), !m) || !d)
        )
          return;
        let { items: B } = m.getState();
        Kc(B, H.currentTarget) && p();
      }),
      g = me(r, (H) => H.placement.split("-")[0]),
      w = a.onKeyDown,
      S = $((H) => {
        if ((w?.(H), v || H.defaultPrevented)) return;
        let B = tp(H, g);
        B && (H.preventDefault(), p(), r?.setAutoFocusOnShow(!0), r?.setInitialFocus(B));
      }),
      C = a.onClick,
      P = $((H) => {
        if ((C?.(H), H.defaultPrevented || !r)) return;
        let B = !H.detail,
          { open: h } = r.getState();
        ((!h || B) &&
          ((!f || B) && r.setAutoFocusOnShow(!0), r.setInitialFocus(B ? "first" : "container")),
          f && p());
      });
    ((a = fe(a, (H) => (0, bs.jsx)(qo, { value: r, children: H }), [r])),
      f && (a = T(y({}, a), { render: (0, bs.jsx)(jr.div, { render: a.render }) })));
    let M = De(a.id),
      A = me(l?.combobox || l, "contentElement"),
      R = f || d ? co(A, "menuitem") : void 0,
      F = r.useState("contentElement");
    return (
      (a = T(y({ id: M, role: R, "aria-haspopup": Qt(F, "menu") }, a), {
        ref: ee(c, a.ref),
        onFocus: b,
        onKeyDown: S,
        onClick: P,
      })),
      (a = as(
        T(y({ store: r, focusable: n, accessibleWhenDisabled: i }, a), {
          showOnHover: (H) => {
            if (
              !(() => {
                if (typeof s == "function") return s(H);
                if (s != null) return s;
                if (f) return !0;
                if (!m) return !1;
                let { items: k } = m.getState();
                return d && Kc(k);
              })()
            )
              return !1;
            let O = d ? m : l;
            return (O && O.setActiveId(H.currentTarget.id), !0);
          },
        })
      )),
      (a = fs(y({ store: r, toggleOnClick: !f, focusable: n, accessibleWhenDisabled: i }, a))),
      (a = Ko(y({ store: r, typeahead: d }, a))),
      a
    );
  }),
  Xn = W(function (t) {
    let o = rp(t);
    return j(ep, o);
  });
var op = "div";
function np(e, t, o) {
  var r;
  if (!e) return !1;
  if (it(e)) return !0;
  let n = t?.find((u) => {
      var c;
      return u.element === o
        ? !1
        : ((c = u.element) == null ? void 0 : c.getAttribute("aria-expanded")) === "true";
    }),
    i = (r = n?.element) == null ? void 0 : r.getAttribute("aria-controls");
  if (!i) return !1;
  let a = ne(e).getElementById(i);
  return a ? (it(a) ? !0 : !!a.querySelector("[role=menuitem][aria-expanded=true]")) : !1;
}
var qc = U(function (t) {
    var o = t,
      {
        store: r,
        hideOnClick: n = !0,
        preventScrollOnKeyDown: i = !0,
        focusOnHover: s,
        blurOnHoverEnd: a,
      } = o,
      u = z(o, [
        "store",
        "hideOnClick",
        "preventScrollOnKeyDown",
        "focusOnHover",
        "blurOnHoverEnd",
      ]);
    let c = ps(!0),
      l = Vc();
    ((r = r || c || l), te(r, !1));
    let m = u.onClick,
      f = ae(n),
      d = "hideAll" in r ? r.hideAll : void 0,
      v = !!d,
      p = $((g) => {
        (m?.(g),
          !(
            g.defaultPrevented ||
            cn(g) ||
            un(g) ||
            !d ||
            g.currentTarget.getAttribute("aria-haspopup") === "menu"
          ) &&
            f(g) &&
            d());
      }),
      x = me(r, (g) => ("contentElement" in g ? g.contentElement : null)),
      b = co(x, "menuitem");
    return (
      (u = T(y({ role: b }, u), { onClick: p })),
      (u = _r(y({ store: r, preventScrollOnKeyDown: i }, u))),
      (u = Uo(
        T(y({ store: r }, u), {
          focusOnHover(g) {
            let w = () => (typeof s == "function" ? s(g) : (s ?? !0));
            if (!r || !w()) return !1;
            let { baseElement: S, items: C } = r.getState();
            return v
              ? (g.currentTarget.hasAttribute("aria-expanded") && g.currentTarget.focus(), !0)
              : np(S, C, g.currentTarget)
                ? (g.currentTarget.focus(), !0)
                : !1;
          },
          blurOnHoverEnd(g) {
            return typeof a == "function" ? a(g) : (a ?? v);
          },
        })
      )),
      u
    );
  }),
  Go = er(
    W(function (t) {
      let o = qc(t);
      return j(op, o);
    })
  );
function Gc(e = {}) {
  var t = e,
    { combobox: o, parent: r, menubar: n } = t,
    i = Ir(t, ["combobox", "parent", "menubar"]);
  let s = !!n && !r,
    a = Vt(
      i.store,
      ro(r, ["values"]),
      lr(o, [
        "arrowElement",
        "anchorElement",
        "contentElement",
        "popoverElement",
        "disclosureElement",
      ])
    );
  let u = a.getState(),
    c = hr(le(Z({}, i), { store: a, orientation: Y(i.orientation, u.orientation, "vertical") })),
    l = Bo(
      le(Z({}, i), {
        store: a,
        placement: Y(i.placement, u.placement, "bottom-start"),
        timeout: Y(i.timeout, u.timeout, s ? 0 : 150),
        hideTimeout: Y(i.hideTimeout, u.hideTimeout, 0),
      })
    ),
    m = le(Z(Z({}, c.getState()), l.getState()), {
      initialFocus: Y(u.initialFocus, "container"),
      values: Y(i.values, u.values, i.defaultValues, {}),
    }),
    f = Me(m, c, l, a);
  return (
    we(f, () =>
      ge(f, ["mounted"], (d) => {
        d.mounted || f.setState("activeId", null);
      })
    ),
    we(f, () =>
      ge(r, ["orientation"], (d) => {
        f.setState("placement", d.orientation === "vertical" ? "right-start" : "bottom-start");
      })
    ),
    le(Z(Z(Z({}, c), l), f), {
      combobox: o,
      parent: r,
      menubar: n,
      hideAll: () => {
        (l.hide(), r?.hideAll());
      },
      setInitialFocus: (d) => f.setState("initialFocus", d),
      setValues: (d) => f.setState("values", d),
      setValue: (d, v) => {
        d !== "__proto__" &&
          d !== "constructor" &&
          (Array.isArray(d) ||
            f.setState("values", (p) => {
              let x = p[d],
                b = Qr(v, x);
              return b === x ? p : le(Z({}, p), { [d]: b !== void 0 && b });
            }));
      },
    })
  );
}
function Yc(e, t, o) {
  return (
    ot(t, [o.combobox, o.parent, o.menubar]),
    pe(e, o, "values", "setValues"),
    Object.assign($n(Br(e, t, o), t, o), {
      combobox: o.combobox,
      parent: o.parent,
      menubar: o.menubar,
    })
  );
}
function Pr(e = {}) {
  let t = ct(),
    o = Fc(),
    r = En();
  e = T(y({}, e), {
    parent: e.parent !== void 0 ? e.parent : t,
    menubar: e.menubar !== void 0 ? e.menubar : o,
    combobox: e.combobox !== void 0 ? e.combobox : r,
  });
  let [n, i] = je(Gc, e);
  return Yc(n, i, e);
}
var Xc = _(oe(), 1);
function Jn(e = {}) {
  let t = Pr(e);
  return (0, Xc.jsx)(qo, { value: t, children: e.children });
}
var sp = "hr",
  ap = U(function (t) {
    var o = t,
      { store: r } = o,
      n = z(o, ["store"]);
    let i = ct();
    return ((r = r || i), (n = Hi(y({ store: r }, n))), n);
  }),
  Zn = W(function (t) {
    let o = ap(t);
    return j(sp, o);
  });
var _e = _(X(), 1),
  up = "input";
function Jc(e, t, o) {
  if (!o) return !1;
  let r = e.find((n) => !n.disabled && n.value);
  return r?.value === t;
}
function Zc(e, t) {
  return !t || e == null
    ? !1
    : ((e = eo(e)), t.length > e.length && t.toLowerCase().indexOf(e.toLowerCase()) === 0);
}
function cp(e) {
  return e.type === "input";
}
function lp(e) {
  return e === "inline" || e === "list" || e === "both" || e === "none";
}
function fp(e) {
  let t = e.find((o) => {
    var r;
    return o.disabled ? !1 : ((r = o.element) == null ? void 0 : r.getAttribute("role")) !== "tab";
  });
  return t?.id;
}
var mp = U(function (t) {
    var o = t,
      {
        store: r,
        focusable: n = !0,
        autoSelect: i = !1,
        getAutoSelectId: s,
        setValueOnChange: a,
        showMinLength: u = 0,
        showOnChange: c,
        showOnMouseDown: l,
        showOnClick: m = l,
        showOnKeyDown: f,
        showOnKeyPress: d = f,
        blurActiveItemOnClick: v,
        setValueOnClick: p = !0,
        moveOnKeyPress: x = !0,
        autoComplete: b = "list",
      } = o,
      g = z(o, [
        "store",
        "focusable",
        "autoSelect",
        "getAutoSelectId",
        "setValueOnChange",
        "showMinLength",
        "showOnChange",
        "showOnMouseDown",
        "showOnClick",
        "showOnKeyDown",
        "showOnKeyPress",
        "blurActiveItemOnClick",
        "setValueOnClick",
        "moveOnKeyPress",
        "autoComplete",
      ]);
    let w = En();
    ((r = r || w), te(r, !1));
    let S = (0, _e.useRef)(null),
      [C, P] = dn(),
      M = (0, _e.useRef)(!1),
      A = (0, _e.useRef)(!1),
      R = r.useState((L) => L.virtualFocus && i),
      F = b === "inline" || b === "both",
      [H, B] = (0, _e.useState)(F);
    Aa(() => {
      F && B(!0);
    }, [F]);
    let h = r.useState("value"),
      O = (0, _e.useRef)();
    (0, _e.useEffect)(
      () =>
        ge(r, ["selectedValue", "activeId"], (L, se) => {
          O.current = se.selectedValue;
        }),
      []
    );
    let k = r.useState((L) => {
        var se;
        if (
          F &&
          H &&
          !(
            L.activeValue &&
            Array.isArray(L.selectedValue) &&
            (L.selectedValue.includes(L.activeValue) ||
              ((se = O.current) != null && se.includes(L.activeValue)))
          )
        )
          return L.activeValue;
      }),
      E = r.useState("renderedItems"),
      D = r.useState("open"),
      K = r.useState("contentElement"),
      I = (0, _e.useMemo)(() => {
        if (!F || !H) return h;
        if (Jc(E, k, R)) {
          if (Zc(h, k)) {
            let se = k?.slice(h.length) || "";
            return h + se;
          }
          return h;
        }
        return k || h;
      }, [F, H, E, k, R, h]);
    ((0, _e.useEffect)(() => {
      let L = S.current;
      if (!L) return;
      let se = () => B(!0);
      return (
        L.addEventListener("combobox-item-move", se),
        () => {
          L.removeEventListener("combobox-item-move", se);
        }
      );
    }, []),
      (0, _e.useEffect)(() => {
        if (!F || !H || !k || !Jc(E, k, R) || !Zc(h, k)) return;
        let se = Ft;
        return (
          queueMicrotask(() => {
            let Ce = S.current;
            if (!Ce) return;
            let { start: Ie, end: rt } = Or(Ce),
              At = h.length,
              He = k.length;
            (lo(Ce, At, He),
              (se = () => {
                if (!nt(Ce)) return;
                let { start: ar, end: yf } = Or(Ce);
                ar === At && yf === He && lo(Ce, Ie, rt);
              }));
          }),
          () => se()
        );
      }, [C, F, H, k, E, R, h]));
    let q = (0, _e.useRef)(null),
      N = $(s),
      he = (0, _e.useRef)(null);
    ((0, _e.useEffect)(() => {
      if (!D || !K) return;
      let L = Rr(K);
      if (!L) return;
      q.current = L;
      let se = () => {
          M.current = !1;
        },
        Ce = () => {
          if (!r || !M.current) return;
          let { activeId: rt } = r.getState();
          rt !== null && rt !== he.current && (M.current = !1);
        },
        Ie = { passive: !0, capture: !0 };
      return (
        L.addEventListener("wheel", se, Ie),
        L.addEventListener("touchmove", se, Ie),
        L.addEventListener("scroll", Ce, Ie),
        () => {
          (L.removeEventListener("wheel", se, !0),
            L.removeEventListener("touchmove", se, !0),
            L.removeEventListener("scroll", Ce, !0));
        }
      );
    }, [D, K, r]),
      Q(() => {
        h && (A.current || (M.current = !0));
      }, [h]),
      Q(() => {
        (R !== "always" && D) || (M.current = D);
      }, [R, D]));
    let ye = r.useState("resetValueOnSelect");
    (ot(() => {
      var L, se;
      let Ce = M.current;
      if (!r || !D || (!Ce && !ye)) return;
      let { baseElement: Ie, contentElement: rt, activeId: At } = r.getState();
      if (!(Ie && !nt(Ie))) {
        if (rt?.hasAttribute("data-placing")) {
          let He = new MutationObserver(P);
          return (He.observe(rt, { attributeFilter: ["data-placing"] }), () => He.disconnect());
        }
        if (R && Ce) {
          let He = N(E),
            ar = He !== void 0 ? He : (L = fp(E)) != null ? L : r.first();
          ((he.current = ar), r.move(ar ?? null));
        } else {
          let He = (se = r.item(At || r.first())) == null ? void 0 : se.element;
          He &&
            "scrollIntoView" in He &&
            He.scrollIntoView({ block: "nearest", inline: "nearest" });
        }
      }
    }, [r, D, C, h, R, ye, N, E]),
      (0, _e.useEffect)(() => {
        if (!F) return;
        let L = S.current;
        if (!L) return;
        let se = [L, K].filter((Ie) => !!Ie),
          Ce = (Ie) => {
            se.every((rt) => bt(Ie, rt)) && r?.setValue(I);
          };
        for (let Ie of se) Ie.addEventListener("focusout", Ce);
        return () => {
          for (let Ie of se) Ie.removeEventListener("focusout", Ce);
        };
      }, [F, K, r, I]));
    let Se = (L) => L.currentTarget.value.length >= u,
      J = g.onChange,
      Oe = ae(c ?? Se),
      vt = ae(a ?? !r.tag),
      Ue = $((L) => {
        if ((J?.(L), L.defaultPrevented || !r)) return;
        let se = L.currentTarget,
          { value: Ce, selectionStart: Ie, selectionEnd: rt } = se,
          At = L.nativeEvent;
        if (
          ((M.current = !0), cp(At) && (At.isComposing && ((M.current = !1), (A.current = !0)), F))
        ) {
          let He = At.inputType === "insertText" || At.inputType === "insertCompositionText",
            ar = Ie === Ce.length;
          B(He && ar);
        }
        if (vt(L)) {
          let He = Ce === r.getState().value;
          (r.setValue(Ce),
            queueMicrotask(() => {
              lo(se, Ie, rt);
            }),
            F && R && He && P());
        }
        (Oe(L) && r.show(), (!R || !M.current) && r.setActiveId(null));
      }),
      Xe = g.onCompositionEnd,
      Ne = $((L) => {
        ((M.current = !0), (A.current = !1), Xe?.(L), !L.defaultPrevented && R && P());
      }),
      Ot = g.onMouseDown,
      Gt = ae(v ?? (() => !!r?.getState().includesBaseElement)),
      lt = ae(p),
      ht = ae(m ?? Se),
      Yt = $((L) => {
        (Ot?.(L),
          !L.defaultPrevented &&
            (L.button ||
              L.ctrlKey ||
              (r &&
                (Gt(L) && r.setActiveId(null),
                lt(L) && r.setValue(I),
                ht(L) && gt(L.currentTarget, "mouseup", r.show)))));
      }),
      Rt = g.onKeyDown,
      Xt = ae(d ?? Se),
      G = $((L) => {
        if (
          (Rt?.(L),
          L.repeat || (M.current = !1),
          L.defaultPrevented || L.ctrlKey || L.altKey || L.shiftKey || L.metaKey || !r)
        )
          return;
        let { open: se } = r.getState();
        se ||
          ((L.key === "ArrowUp" || L.key === "ArrowDown") &&
            Xt(L) &&
            (L.preventDefault(), r.show()));
      }),
      ie = g.onBlur,
      Re = $((L) => {
        ((M.current = !1), ie?.(L), L.defaultPrevented);
      }),
      ue = De(g.id),
      Be = lp(b) ? b : void 0,
      tt = r.useState((L) => L.activeId === null);
    return (
      (g = T(
        y(
          {
            id: ue,
            role: "combobox",
            "aria-autocomplete": Be,
            "aria-haspopup": Qt(K, "listbox"),
            "aria-expanded": D,
            "aria-controls": K?.id,
            "data-active-item": tt || void 0,
            value: I,
          },
          g
        ),
        {
          ref: ee(S, g.ref),
          onChange: Ue,
          onCompositionEnd: Ne,
          onMouseDown: Yt,
          onKeyDown: G,
          onBlur: Re,
        }
      )),
      (g = Vr(
        T(y({ store: r, focusable: n }, g), {
          moveOnKeyPress: (L) => (ur(x, L) ? !1 : (F && B(!0), !0)),
        })
      )),
      (g = jo(y({ store: r }, g))),
      y({ autoComplete: "off" }, g)
    );
  }),
  Qn = W(function (t) {
    let o = mp(t);
    return j(up, o);
  });
var ei = _(X(), 1),
  gs = _(oe(), 1),
  dp = "div";
function pp(e, t) {
  if (t != null) return e == null ? !1 : Array.isArray(e) ? e.includes(t) : e === t;
}
function vp(e) {
  var t;
  return (t = { menu: "menuitem", listbox: "option", tree: "treeitem" }[e]) != null ? t : "option";
}
var Qc = U(function (t) {
    var o = t,
      {
        store: r,
        value: n,
        hideOnClick: i,
        setValueOnClick: s,
        selectValueOnClick: a = !0,
        resetValueOnSelect: u,
        focusOnHover: c = !1,
        moveOnKeyPress: l = !0,
        getItem: m,
      } = o,
      f = z(o, [
        "store",
        "value",
        "hideOnClick",
        "setValueOnClick",
        "selectValueOnClick",
        "resetValueOnSelect",
        "focusOnHover",
        "moveOnKeyPress",
        "getItem",
      ]),
      d;
    let v = Pn();
    ((r = r || v), te(r, !1));
    let {
        resetValueOnSelectState: p,
        multiSelectable: x,
        selected: b,
      } = bo(r, {
        resetValueOnSelectState: "resetValueOnSelect",
        multiSelectable(h) {
          return Array.isArray(h.selectedValue);
        },
        selected(h) {
          return pp(h.selectedValue, n);
        },
      }),
      g = (0, ei.useCallback)(
        (h) => {
          let O = T(y({}, h), { value: n });
          return m ? m(O) : O;
        },
        [n, m]
      );
    ((s = s ?? !x), (i = i ?? (n != null && !x)));
    let w = f.onClick,
      S = ae(s),
      C = ae(a),
      P = ae((d = u ?? p) != null ? d : x),
      M = ae(i),
      A = $((h) => {
        (w?.(h),
          !h.defaultPrevented &&
            (cn(h) ||
              un(h) ||
              (n != null &&
                (C(h) &&
                  (P(h) && r?.resetValue(),
                  r?.setSelectedValue((O) =>
                    Array.isArray(O) ? (O.includes(n) ? O.filter((k) => k !== n) : [...O, n]) : n
                  )),
                S(h) && r?.setValue(n)),
              M(h) && r?.hide())));
      }),
      R = f.onKeyDown,
      F = $((h) => {
        if ((R?.(h), h.defaultPrevented)) return;
        let O = r?.getState().baseElement;
        if (!O || nt(O)) return;
        (h.key.length === 1 || h.key === "Backspace" || h.key === "Delete") &&
          (queueMicrotask(() => O.focus()), ke(O) && r?.setValue(O.value));
      });
    (x && b != null && (f = y({ "aria-selected": b }, f)),
      (f = fe(
        f,
        (h) =>
          (0, gs.jsx)(Eu.Provider, {
            value: n,
            children: (0, gs.jsx)(Iu.Provider, { value: b ?? !1, children: h }),
          }),
        [n, b]
      )));
    let H = (0, ei.useContext)(wn);
    f = T(y({ role: vp(H), children: n }, f), { onClick: A, onKeyDown: F });
    let B = ae(l);
    return (
      (f = _r(
        T(y({ store: r }, f), {
          getItem: g,
          moveOnKeyPress: (h) => {
            if (!B(h)) return !1;
            let O = new Event("combobox-item-move"),
              k = r?.getState().baseElement;
            return (k?.dispatchEvent(O), !0);
          },
        })
      )),
      (f = Uo(y({ store: r, focusOnHover: c }, f))),
      f
    );
  }),
  Yo = er(
    W(function (t) {
      let o = Qc(t);
      return j(dp, o);
    })
  );
var ti = _(X(), 1),
  xs = _(oe(), 1),
  hp = "div",
  el = U(function (t) {
    var o = t,
      { store: r, alwaysVisible: n } = o,
      i = z(o, ["store", "alwaysVisible"]);
    let s = Pn(!0),
      a = Fi();
    r = r || a;
    let u = !!r && r === s;
    te(r, !1);
    let c = (0, ti.useRef)(null),
      l = De(i.id),
      m = r.useState("mounted"),
      f = pr(m, i.hidden, n),
      d = f ? T(y({}, i.style), { display: "none" }) : i.style,
      v = r.useState((P) => Array.isArray(P.selectedValue)),
      p = Ra(c, "role", i.role),
      b = ((p === "listbox" || p === "tree" || p === "grid") && v) || void 0,
      [g, w] = (0, ti.useState)(!1),
      S = r.useState("contentElement");
    (Q(() => {
      if (!m) return;
      let P = c.current;
      if (!P || S !== P) return;
      let M = () => {
          w(!!P.querySelector("[role='listbox']"));
        },
        A = new MutationObserver(M);
      return (
        A.observe(P, { subtree: !0, childList: !0, attributeFilter: ["role"] }),
        M(),
        () => A.disconnect()
      );
    }, [m, S]),
      g || (i = y({ role: "listbox", "aria-multiselectable": b }, i)),
      (i = fe(
        i,
        (P) =>
          (0, xs.jsx)(Pu, {
            value: r,
            children: (0, xs.jsx)(wn.Provider, { value: p, children: P }),
          }),
        [r, p]
      )));
    let C = l && (!s || !u) ? r.setContentElement : null;
    return ((i = T(y({ id: l, hidden: f }, i), { ref: ee(C, c, i.ref), style: d })), We(i));
  }),
  Xo = W(function (t) {
    let o = el(t);
    return j(hp, o);
  });
var Ss = _(X(), 1),
  RE = (0, Ss.createContext)(null),
  AE = (0, Ss.createContext)(null),
  Jo = Ee([xt], [tr]),
  tl = Jo.useContext,
  DE = Jo.useScopedContext,
  TE = Jo.useProviderContext,
  kE = Jo.ContextProvider,
  _E = Jo.ScopedContextProvider;
var bp = Lt() && sn();
function rl(e = {}) {
  var t = e,
    { tag: o } = t,
    r = Ir(t, ["tag"]);
  let n = Vt(r.store, ro(o, ["value", "rtl"]));
  let i = o?.getState(),
    s = n?.getState(),
    a = Y(r.activeId, s?.activeId, r.defaultActiveId, null),
    u = hr(
      le(Z({}, r), {
        activeId: a,
        includesBaseElement: Y(r.includesBaseElement, s?.includesBaseElement, !0),
        orientation: Y(r.orientation, s?.orientation, "vertical"),
        focusLoop: Y(r.focusLoop, s?.focusLoop, !0),
        focusWrap: Y(r.focusWrap, s?.focusWrap, !0),
        virtualFocus: Y(r.virtualFocus, s?.virtualFocus, !0),
      })
    ),
    c = Kn(le(Z({}, r), { placement: Y(r.placement, s?.placement, "bottom-start") })),
    l = Y(r.value, s?.value, r.defaultValue, ""),
    m = Y(r.selectedValue, s?.selectedValue, i?.values, r.defaultSelectedValue, ""),
    f = Array.isArray(m),
    d = le(Z(Z({}, u.getState()), c.getState()), {
      value: l,
      selectedValue: m,
      resetValueOnSelect: Y(r.resetValueOnSelect, s?.resetValueOnSelect, f),
      resetValueOnHide: Y(r.resetValueOnHide, s?.resetValueOnHide, f && !o),
      activeValue: s?.activeValue,
    }),
    v = Me(d, u, c, n);
  return (
    bp &&
      we(v, () =>
        ge(v, ["virtualFocus"], () => {
          v.setState("virtualFocus", !1);
        })
      ),
    we(v, () => {
      if (o)
        return be(
          ge(v, ["selectedValue"], (p) => {
            Array.isArray(p.selectedValue) && o.setValues(p.selectedValue);
          }),
          ge(o, ["values"], (p) => {
            v.setState("selectedValue", p.values);
          })
        );
    }),
    we(v, () =>
      ge(v, ["resetValueOnHide", "mounted"], (p) => {
        p.resetValueOnHide && (p.mounted || v.setState("value", l));
      })
    ),
    we(v, () =>
      ge(v, ["open"], (p) => {
        p.open || (v.setState("activeId", a), v.setState("moves", 0));
      })
    ),
    we(v, () =>
      ge(v, ["moves", "activeId"], (p, x) => {
        p.moves === x.moves && v.setState("activeValue", void 0);
      })
    ),
    we(v, () =>
      Zt(v, ["moves", "renderedItems"], (p, x) => {
        if (p.moves === x.moves) return;
        let { activeId: b } = v.getState(),
          g = u.item(b);
        v.setState("activeValue", g?.value);
      })
    ),
    le(Z(Z(Z({}, c), u), v), {
      tag: o,
      setValue: (p) => v.setState("value", p),
      resetValue: () => v.setState("value", d.value),
      setSelectedValue: (p) => v.setState("selectedValue", p),
    })
  );
}
function xp(e) {
  let t = tl();
  return ((e = T(y({}, e), { tag: e.tag !== void 0 ? e.tag : t })), Cn(e));
}
function Sp(e, t, o) {
  return (
    ot(t, [o.tag]),
    pe(e, o, "value", "setValue"),
    pe(e, o, "selectedValue", "setSelectedValue"),
    pe(e, o, "resetValueOnHide"),
    pe(e, o, "resetValueOnSelect"),
    Object.assign(Br(Un(e, t, o), t, o), { tag: o.tag })
  );
}
function Cs(e = {}) {
  e = xp(e);
  let [t, o] = je(rl, e);
  return Sp(t, o, e);
}
var ol = _(oe(), 1);
function ri(e = {}) {
  let t = Cs(e);
  return (0, ol.jsx)(wu, { value: t, children: e.children });
}
var Ve = _(X(), 1);
var nl = 800,
  il = 0.9,
  sl = 4,
  al = _t.values.menuPadding * 2,
  ul = -_t.values.menuPadding,
  cl = 1,
  ll = "mu6ry6k",
  fl = ce(na, "i1irwbe6"),
  ml = "bqwxsfx",
  dl = "ay9bzvl",
  pl = "ahvwyj9",
  vl = "d1aq9ud6",
  hl = "b1r3i2ed",
  bl = "ddwpnn1",
  gl = "ck05by6",
  ys = "c1ide4av",
  Xr = "lqsdyuc",
  ws = ce(Xr, "l10bnj1v"),
  Ps = "m1lrhh4u",
  Es = "m1fc9sk1",
  xl = ce(Es, "mfbiwg1"),
  Sl = "m154ipfz",
  Cl = "m1e3rcy1",
  yl = "mxzzb2k",
  wl = "s8c9l16",
  Cp = "m1t22t6v",
  Pl = ce(Cp, "me5hedy"),
  El = "asnmoi2",
  Il = "m19qrosd",
  Ml = "w1vev1e1",
  Ol = "ssbtwy1",
  Rl = "s1d3tuh7",
  Al = "s1nw69yk",
  Dl = "e5l2dp5",
  Tl = "a4c5y86",
  Is = "mz1j6h7",
  Ms = "m6v9qln";
var Os = _(oe());
function _l(e) {
  return (0, Os.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    fill: "none",
    role: "presentation",
    ...e,
    children: (0, Os.jsx)("path", {
      d: "m3.25 1.5 2.793 2.793a1 1 0 0 1 0 1.414L3.25 8.5",
      fill: "transparent",
      strokeWidth: "1.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var Rs = _(oe());
function Fl() {
  return (0, Rs.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    children: (0, Rs.jsx)("path", {
      d: "M 8 8 L 10.25 10.25 M 5 1 C 7.209 1 9 2.791 9 5 C 9 7.209 7.209 9 5 9 C 2.791 9 1 7.209 1 5 C 1 2.791 2.791 1 5 1 Z",
      fill: "transparent",
      strokeWidth: "1.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: "10",
      strokeDasharray: "",
      strokeDashoffset: "0",
    }),
  });
}
var As = _(X());
function Vl(e, t) {
  if (!Array.isArray(e)) return e === t;
  if (!Array.isArray(t)) return !1;
  let o = e.length;
  if (o !== t.length) return !1;
  for (let r = 0; r < o; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
var Hl = _(oe()),
  oi = class extends As.default.Component {
    containerRef = As.default.createRef();
    canAnimateWidth = !1;
    canAnimateHeight = !1;
    hasFixedSize = !1;
    duration = 0.2;
    getElement() {
      return this.props.innerRef ? this.props.innerRef.current : this.containerRef.current;
    }
    getElementSize() {
      let t = this.getElement();
      return t ? { height: t.offsetHeight, width: t.offsetWidth } : null;
    }
    resetElementSize() {
      let t = this.getElement();
      t &&
        ((t.style.transition = ""),
        this.canAnimateHeight && (t.style.height = "auto"),
        this.canAnimateWidth && (t.style.width = "auto"));
    }
    componentDidMount() {
      let t = this.getElement();
      if (!t) return;
      let o = t.style.width || "auto",
        r = t.style.height || "auto";
      ((this.canAnimateWidth = o === "auto"), (this.canAnimateHeight = r === "auto"));
    }
    getSnapshotBeforeUpdate(t) {
      return this.props.animationEnabled !== !1
        ? Vl(this.props.dependencies, t.dependencies)
          ? null
          : (this.resetElementSize(), this.getElementSize())
        : (this.hasFixedSize && (this.resetElementSize(), (this.hasFixedSize = !1)), null);
    }
    componentDidUpdate(t, o, r) {
      if (!r) return;
      let n = this.getElement();
      if (!n) return;
      let i = this.getElementSize();
      if (!i) return;
      let s = this.canAnimateWidth && r.width !== i.width,
        a = this.canAnimateHeight && r.height !== i.height;
      (!s && !a) ||
        ((this.hasFixedSize = !0),
        s && (n.style.width = `${r.width}px`),
        a && (n.style.height = `${r.height}px`),
        n.getBoundingClientRect(),
        (n.style.transition = `width ${this.props.duration}s cubic-bezier(${this.props.duration}, 0, 0, 1), height ${this.props.duration}s cubic-bezier(${this.props.duration}, 0, 0, 1)`),
        s && (n.style.width = `${i.width}px`),
        a && (n.style.height = `${i.height}px`));
    }
    onTransitionEnd = (t) => {
      let o = this.getElement();
      t.target === o &&
        (this.hasFixedSize && (this.resetElementSize(), (this.hasFixedSize = !1)),
        this.props.onTransitionEnd?.(),
        t.stopPropagation());
    };
    render() {
      let {
        dependencies: t,
        animationEnabled: o,
        innerRef: r,
        children: n,
        style: i,
        ...s
      } = this.props;
      return (0, Hl.jsx)("div", {
        ...s,
        style: { position: "relative", boxSizing: "border-box", ...i },
        onTransitionEnd: this.onTransitionEnd,
        ref: r || this.containerRef,
        children: n,
      });
    }
  };
var re = _(X(), 1);
var Ll = "cq2i6r2",
  Nl = "o199fue7",
  Bl = "o16gpm6";
var Zo = _(oe(), 1);
function Wl({ avatar: e, displayName: t, organization: o, avatarCustomStyles: r }) {
  let n = mi(t);
  return (0, Zo.jsxs)("div", {
    className: Ll,
    children: [
      (0, Zo.jsx)(fi, { src: e || void 0, text: n, avatarCustomStyles: r }),
      o &&
        (0, Zo.jsx)(fi, {
          size: "small",
          src: o.avatar || void 0,
          textCustomStyles: Bl,
          avatarCustomStyles: Nl,
          text: mi(o.displayName),
        }),
    ],
  });
}
var zl = $e()
  ? ["Control", "Option", "Shift", "CommandOrControl", "Command"]
  : ["CommandOrControl", "Command", "Control", "Alt", "Shift"];
function bI() {
  return $e() ? "" : "+";
}
function Ds(e) {
  return e
    ? e
        .split("+")
        .sort((t, o) => {
          let r = zl.indexOf(t),
            n = zl.indexOf(o);
          return r !== -1 && n !== -1 ? r - n : r !== -1 ? -1 : n !== -1 ? 1 : 0;
        })
        .map((t) => {
          switch (t) {
            case "Backspace":
            case "Delete":
              return $e() ? "\u232B" : "Del";
            case "Command":
              return "\u2318";
            case "CommandOrControl":
              return $e() ? "\u2318" : "Ctrl";
            case "Control":
              return $e() ? "\u2303" : "Ctrl";
            case "Down":
              return "\u2193";
            case "Enter":
            case "Return":
              return $e() ? "\u21A9" : "Enter";
            case "Left":
              return "\u2190";
            case "-":
              return "\u2013";
            case "Option":
              return $e() ? "\u2325" : "Alt";
            case "Plus":
              return $e() ? "+" : "=";
            case "Right":
              return "\u2192";
            case "Shift":
              return $e() ? "\u21E7" : "Shift";
            case "Up":
              return "\u2191";
            case "Escape":
              return "ESC";
          }
          return t;
        })
    : [];
}
var jl = "uchctd1";
var Ts = _(oe());
function Kl({ direction: e = "down", ...t }) {
  return (0, Ts.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8",
    className: ce(e === "up" && jl),
    ...t,
    children: (0, Ts.jsx)("path", {
      d: "m1 2.75 3 3 3-3",
      fill: "transparent",
      strokeWidth: "1.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var Mt = _(X(), 1);
var Jr = _(X(), 1);
var ks = class {
    sharedIntersectionObserver;
    callbacks = new WeakMap();
    constructor(t) {
      document &&
        (this.sharedIntersectionObserver = new IntersectionObserver(
          this.resizeObserverCallback.bind(this),
          t
        ));
    }
    resizeObserverCallback(t, o) {
      for (let r of t) {
        let n = this.callbacks.get(r.target);
        n && n([r], o);
      }
    }
    observeElementWithCallback(t, o) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.observe(t), this.callbacks.set(t, o));
    }
    unobserve(t) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.unobserve(t), this.callbacks.delete(t));
    }
    get root() {
      return this.sharedIntersectionObserver?.root;
    }
  },
  Pp = (0, Jr.createContext)(new Map());
function _s(e, t, o) {
  if (typeof IntersectionObserver > "u") return;
  let r = fa(() => `${o.rootMargin}`),
    n = (0, Jr.useContext)(Pp),
    { enabled: i } = o;
  (0, Jr.useEffect)(() => {
    let s = e.current;
    if (!i || !s) return;
    let a = n.get(r);
    if (!a || a.root !== o.root?.current) {
      let { root: u, ...c } = o;
      ((a = new ks({ ...c, root: u?.current })), n.set(r, a));
    }
    return (a.observeElementWithCallback(s, t), () => a?.unobserve(s));
  }, [i]);
}
var Ul = "c2v15of",
  Fs = "c1tr39qo",
  $l = "a103jkx3",
  ql = "auzolsl",
  Gl = "o179w3e7",
  Yl = ce(Gl, ql),
  Xl = ce(Gl, $l),
  Jl = "s1h5p0we",
  Zl = "o1hfkq3i",
  Ql = ce(Zl, "uh1045z"),
  ef = ce(Zl, "d1sgpxwn"),
  tf = "owuysmr",
  rf = "s3o367f",
  of = "b125519b",
  nf = ce(of, ql),
  sf = ce(of, $l);
var sr = _(X(), 1),
  Bs = _(oe(), 1),
  Vs = (0, sr.createContext)({
    closeOnSelect: !0,
    reserveCheckmarkColumn: !1,
    startTime: void 0,
    mouseDidMove: !1,
  });
Vs.displayName = "MenuConfigContext";
var Hs = () => (0, sr.useContext)(Vs);
function af({
  children: e,
  closeOnSelect: t,
  reserveCheckmarkColumn: o = !1,
  startTime: r,
  mouseDidMove: n,
}) {
  let i = (0, sr.useMemo)(
    () => ({ closeOnSelect: t, reserveCheckmarkColumn: o, startTime: r, mouseDidMove: n }),
    [t, o, r, n]
  );
  return (0, Bs.jsx)(Vs.Provider, { value: i, children: e });
}
var Ls = (0, sr.createContext)(!1);
Ls.displayName = "WithinMenuComboboxContext";
function Qo() {
  return (0, sr.useContext)(Ls);
}
function Ns({ children: e, withinCombobox: t }) {
  return (0, Bs.jsx)(Ls.Provider, { value: t, children: e });
}
var Fe = _(oe(), 1),
  uf = 50,
  cf = { enabled: !0 },
  Ws = ({ menuHeight: e, children: t }) => {
    let o = Qo(),
      n = sa() * il,
      i = Math.min(n, nl);
    return e > i
      ? (0, Fe.jsx)(Ip, { children: t })
      : (0, Fe.jsx)("div", { className: ce(o && Fs), children: t });
  },
  Ip = ({ children: e }) => {
    let t = Qo(),
      o = (0, Mt.useRef)(null),
      r = (0, Mt.useRef)(null),
      n = (0, Mt.useRef)(null),
      i = Zr(),
      [s, a] = (0, Mt.useState)(null),
      [u, c] = (0, Mt.useState)(!0),
      [l, m] = (0, Mt.useState)(!1);
    (_s(
      r,
      (p) => {
        let [x] = p;
        x && c(x.isIntersecting);
      },
      { root: o, ...cf }
    ),
      _s(
        n,
        (p) => {
          let [x] = p;
          x && m(x.isIntersecting);
        },
        { root: o, ...cf }
      ),
      (0, Mt.useEffect)(() => {
        let p,
          x,
          b = _t.values.contentItemHeight,
          g = () => {
            o.current && o.current.scrollBy({ top: b, behavior: "smooth" });
          },
          w = () => {
            o.current && o.current.scrollBy({ top: -b, behavior: "smooth" });
          };
        return (
          s === "down" ? (p = setInterval(g, uf)) : clearInterval(p),
          s === "up" ? (x = setInterval(w, uf)) : clearInterval(x),
          () => {
            (clearInterval(p), clearInterval(x));
          }
        );
      }, [s]));
    let f = () => a("up"),
      d = () => a("down"),
      v = () => a(null);
    return (0, Fe.jsxs)("div", {
      className: Ul,
      children: [
        i && !u && (0, Fe.jsx)(lf, { direction: "up", onMouseEnter: f, onMouseLeave: v }),
        (0, Fe.jsx)(la, {
          ref: o,
          onWheel: v,
          className: ce(i && Jl),
          children: (0, Fe.jsxs)("div", {
            className: rf,
            children: [
              (0, Fe.jsx)("div", { ref: r, className: nf }),
              (0, Fe.jsx)("div", { className: ce(t && Fs), children: e }),
              (0, Fe.jsx)("div", { ref: n, className: sf }),
            ],
          }),
        }),
        i && !l && (0, Fe.jsx)(lf, { direction: "down", onMouseEnter: d, onMouseLeave: v }),
      ],
    });
  },
  lf = ({ direction: e, onMouseEnter: t, onMouseLeave: o }) =>
    (0, Fe.jsxs)(rn, {
      gap: 0,
      className: e === "up" ? Yl : Xl,
      children: [
        e === "down" && (0, Fe.jsx)("div", { className: ef }),
        (0, Fe.jsx)("div", {
          role: "presentation",
          "aria-label": `Auto scroll content ${e}`,
          onMouseEnter: t,
          onMouseLeave: o,
          className: tf,
          children: (0, Fe.jsx)(Kl, { direction: e }),
        }),
        e === "up" && (0, Fe.jsx)("div", { className: Ql }),
      ],
    });
function en(e, t) {
  if (e === "") return t;
  let o = e.toLowerCase(),
    r = [];
  for (let n of t) {
    if (!zs(n)) continue;
    let i = n.label?.toLowerCase(),
      s = n.description?.toLowerCase(),
      a = n.aliases?.some((c) => c.toLowerCase().includes(o));
    if (i?.includes(o) || s?.includes(o) || a) {
      r.push(n);
      continue;
    }
    if (Array.isArray(n.submenu)) {
      let c = en(o, n.submenu);
      c.length > 0 && r.push({ ...n, submenu: c });
    }
  }
  return r;
}
function zs(e) {
  return !(
    e.type === "separator" ||
    e.visible === !1 ||
    e.enabled === !1 ||
    Tt(e.submenu) ||
    (tn(e.submenu) && e.submenu.length === 0)
  );
}
var ni = _(X(), 1);
var Mp = !0;
function js(e, t) {
  let [o, r] = (0, ni.useState)(() =>
    Tt(e) || t?.every((n) => Tt(n.enabled) || n.enabled === !1) ? Mp : e === !1
  );
  return (
    (0, ni.useEffect)(() => {
      let n = !0;
      return (
        (async () => {
          let [s, a] = await Promise.all([ff(e), mf(t)]);
          n && r(s === !1 || a);
        })(),
        () => {
          n = !1;
        }
      );
    }, [e, t]),
    o
  );
}
async function ff(e) {
  return Tt(e) ? e() : e;
}
async function mf(e) {
  if (Dt(e) || e.length === 0) return !1;
  for (let t of e) {
    if (t.type === "separator" || (await ff(t.enabled)) === !1) continue;
    let r = Tt(t.submenu) ? t.submenu() : t.submenu;
    if (!(r && (await mf(r)))) return !1;
  }
  return !0;
}
var V = _(oe(), 1),
  vf = "data-is-menu",
  hf = `[${vf}="true"]`,
  Op = 0,
  df = new WeakMap(),
  ii = re.memo(
    re.forwardRef(function (
      {
        items: t,
        label: o,
        menuProps: r,
        onSearch: n,
        onSelection: i,
        searchValue: s,
        width: a,
        submenuPlacement: u,
        enabled: c,
        icon: l,
        acceleratorLabelTokens: m,
        mode: f,
        ...d
      },
      v
    ) {
      let p = Er(s) && !!n,
        x = ct(),
        b = Tp(r?.store, x, u),
        g = js(c, t),
        w = re.useMemo(() => {
          let P = Zr() ? _t.values.contentItemHeight : _t.values.contentItemHeightTouch,
            M = 0,
            A = cl + _t.values.menuGap * 2;
          for (let R of t) {
            let H = R.type === "separator" ? A : P;
            M += H;
          }
          return M;
        }, [t]),
        S = !x,
        C = (0, V.jsxs)(Jn, {
          placement: b,
          timeout: Op,
          children: [
            x && (0, V.jsx)(Rp, { parent: x }),
            x &&
              (0, V.jsxs)(Xn, {
                ref: v,
                ...d,
                disabled: g,
                render: (P) =>
                  (0, V.jsx)(gf, {
                    ...P,
                    hasSubmenu: !0,
                    className: ce(P.className, l && Is, l && l.padding !== "compact" && Ms),
                  }),
                children: [
                  d.checked && (0, V.jsx)(ui, { className: ys, children: (0, V.jsx)(li, {}) }),
                  l && (0, V.jsx)(bf, { icon: l }),
                  (0, V.jsx)("span", { className: ce(Xr, kt), children: o }),
                  m && (0, V.jsx)(xf, { acceleratorLabelTokens: m }),
                  (0, V.jsx)("span", {
                    className: ml,
                    "aria-hidden": "true",
                    children: (0, V.jsx)(_l, {}),
                  }),
                ],
              }),
            (0, V.jsx)(Yn, {
              modal: !0,
              portal: !0,
              overlap: !0,
              unmountOnHide: !0,
              ...r,
              [vf]: !0,
              gutter: r?.gutter ?? (x ? al : sl),
              shift: r?.shift ?? (x ? ul : void 0),
              className: ce(Pl, S && El, r?.className, ca),
              style: { width: a },
              render: (P) => (0, V.jsx)(ci, { mode: f, children: (0, V.jsx)("div", { ...P }) }),
              children: (0, V.jsx)(kp, {
                searchValue: s,
                itemsLength: t.length,
                menuHeight: w,
                withinCombobox: p,
                children: (0, V.jsx)(Np, { items: t, onSelect: i, submenuPlacement: u }),
              }),
            }),
          ],
        });
      return p || n
        ? (0, V.jsx)(ri, {
            open: S ? !0 : void 0,
            resetValueOnHide: !0,
            includesBaseElement: !1,
            value: s ?? "",
            setValue: n,
            children: C,
          })
        : C;
    })
  );
function Rp({ parent: e }) {
  let t = ct(),
    o = t?.useState("open");
  return (
    re.useLayoutEffect(() => {
      if (!t || !o) return;
      let r = df.get(e);
      (r && r !== t && r.hide(), df.set(e, t));
    }, [o, e, t]),
    re.useLayoutEffect(() => {
      !t || o || t.stopAnimation();
    }, [o, t]),
    null
  );
}
var Ap = "right-start",
  Dp = "bottom-start";
function Tp(e, t, o) {
  let r = e?.useState().currentPlacement,
    n = t?.useState().currentPlacement;
  if (!Zs(t?.parent) && !Dt(n)) return n;
  if (t) {
    let s = Gs() ? Dp : Ap;
    return o ?? s;
  }
  return r;
}
var kp = re.memo(function ({
    children: t,
    searchValue: o,
    itemsLength: r,
    menuHeight: n,
    withinCombobox: i,
  }) {
    let s = re.useRef(null);
    return (
      re.useEffect(() => {
        if (!i) return;
        let a = requestAnimationFrame(() => {
          s.current?.focus();
        });
        return () => cancelAnimationFrame(a);
      }, [i]),
      i
        ? (0, V.jsx)(Ns, {
            withinCombobox: i,
            children: (0, V.jsxs)("div", {
              className: Ml,
              children: [
                (0, V.jsxs)("div", {
                  className: Ol,
                  children: [
                    (0, V.jsx)("div", { className: Al, children: (0, V.jsx)(Fl, {}) }),
                    (0, V.jsx)(Qn, {
                      ref: s,
                      autoFocus: !0,
                      autoSelect: !0,
                      spellCheck: !1,
                      value: o,
                      placeholder: "Type to search\u2026",
                      className: Rl,
                    }),
                  ],
                }),
                (0, V.jsx)(Ws, {
                  menuHeight: n,
                  children: (0, V.jsx)(Xo, {
                    children: (0, V.jsx)(oi, {
                      duration: 0.125,
                      dependencies: [r],
                      className: Tl,
                      children:
                        r === 0
                          ? (0, V.jsx)("div", { className: Dl, children: "No search results" })
                          : t,
                    }),
                  }),
                }),
              ],
            }),
          })
        : (0, V.jsx)(Ns, {
            withinCombobox: i,
            children: (0, V.jsx)(Ws, { menuHeight: n, children: t }),
          })
    );
  }),
  _p = (e) => (0, V.jsx)(Zn, { ...e, className: ce(wl, e.className) }),
  pf = 14,
  bf = ({ icon: e }) => {
    let t = { height: e.height ?? pf, width: e.width ?? pf };
    return e.inlineSVG
      ? (0, V.jsx)("span", { className: Ps, style: t, dangerouslySetInnerHTML: { __html: e.src } })
      : (0, V.jsx)("span", {
          className: Ps,
          children: (0, V.jsx)("img", {
            style: t,
            src: e.src,
            crossOrigin: e.crossOrigin !== "disabled" ? (e.crossOrigin ?? "anonymous") : void 0,
            alt: "icon",
            decoding: "async",
          }),
        });
  };
function Fp(e) {
  let t = new MouseEvent("click", {
    bubbles: !0,
    cancelable: !1,
    view: window,
    button: 0,
    buttons: 1,
  });
  return { ...t, ...e, nativeEvent: { ...t, ...e.nativeEvent } };
}
var gf = re.memo(
    re.forwardRef(function ({ ...t }, o) {
      let r = re.useRef(null);
      return (0, V.jsx)("div", {
        ref: r,
        className: ce(ll, ua),
        children: (0, V.jsx)(Vp, { ref: o, wrapperRef: r, ...t }),
      });
    })
  ),
  Vp = re.memo(
    re.forwardRef(function (
      {
        name: t,
        value: o,
        badge: r,
        badgeClassName: n,
        frescoBadgeVariant: i,
        checked: s,
        acceleratorLabelTokens: a,
        icon: u,
        avatar: c,
        description: l,
        hasSubmenu: m = !1,
        enabled: f,
        tooltip: d,
        tooltipClassName: v,
        tooltipWhenDisabled: p = !1,
        readonly: x = !1,
        wrapperRef: b,
        ...g
      },
      w
    ) {
      let { closeOnSelect: S, startTime: C, mouseDidMove: P } = Hs(),
        M = Qo(),
        A = ct(),
        R = js(f);
      si(A, "MenuItem must be used inside a Menu");
      let F = re.useRef(null),
        H = aa(w, F),
        B = ea(),
        h = g.onClick,
        O = Hp(),
        k = re.useCallback(() => {
          (A.setAutoFocusOnShow(!0), A.setInitialFocus("first"), A.setOpen(!0));
        }, [A]),
        E = re.useCallback(
          (J) => {
            if (J.key === "ArrowRight" || J.key === "ArrowLeft")
              switch ((J.stopPropagation(), J.key)) {
                case "ArrowLeft": {
                  let Oe = m ? A?.parent : A;
                  if (Oe?.getState().items.length === 0) break;
                  (J.preventDefault(), Oe?.hide());
                  break;
                }
                case "ArrowRight": {
                  A && (J.preventDefault(), k());
                  break;
                }
                default:
                  Xs(J.key);
              }
            if (B && J.key === "Enter") {
              (J.preventDefault(),
                J.stopPropagation(),
                A.getState().open ? (h?.(Fp(J)), A.hideAll()) : k());
              return;
            }
            g.onKeyDownCapture?.(J);
          },
          [m, A, g.onKeyDownCapture, B, k, h]
        ),
        D = re.useCallback(
          (J) => (!S || J.currentTarget.hasAttribute("aria-expanded") ? !1 : (A.hideAll(), !0)),
          [S, A]
        ),
        K = re.useCallback(
          (J) => {
            if (J.button === 1) {
              (h?.({ ...J, ctrlKey: !0 }), D(J));
              return;
            }
            !B || !ta(J.button) || (Ks(P, C) && (O.suppressFor(J.currentTarget), h?.(J), D(J)));
          },
          [h, D, C, P, O, B]
        ),
        I = re.useCallback(
          (J) => {
            O.consume(J.currentTarget) || h?.(J);
          },
          [h, O]
        ),
        q = Zr(),
        N = {
          ref: H,
          focusOnHover: q,
          blurOnHoverEnd: q,
          ...g,
          className: ce(
            Es,
            l && xl,
            c && Cl,
            u && Is,
            u && u.padding !== "compact" && Ms,
            g.className
          ),
          "data-selected": u && s ? "true" : void 0,
          onClick: B && S ? void 0 : I,
          hideOnClick: D,
          onMouseUp: K,
          onKeyDownCapture: E,
          disabled: R,
        };
      (c
        ? (N.children = (0, V.jsxs)(V.Fragment, {
            children: [
              (0, V.jsx)(Wl, { avatar: c.src, displayName: c.displayName, avatarCustomStyles: yl }),
              (0, V.jsx)("span", { className: kt, children: N.children }),
            ],
          }))
        : u &&
          (N.children = (0, V.jsxs)("span", {
            className: Xr,
            children: [(0, V.jsx)(bf, { icon: u }), N.children],
          })),
        l &&
          (N.children = (0, V.jsxs)(rn, {
            direction: "column",
            gap: 2,
            children: [
              (0, V.jsx)("span", { className: Xr, children: N.children }),
              (0, V.jsx)("span", { className: bl, children: l }),
            ],
          })),
        s &&
          !m &&
          !u &&
          (N.children = (0, V.jsxs)("span", {
            className: gl,
            children: [
              (0, V.jsx)(ui, { className: ys, children: (0, V.jsx)(li, {}) }),
              (0, V.jsx)("span", { className: kt, children: N.children }),
            ],
          })),
        a
          ? (N.children = (0, V.jsxs)(V.Fragment, {
              children: [
                (0, V.jsx)("span", { className: kt, children: N.children }),
                (0, V.jsx)(xf, { acceleratorLabelTokens: a }),
              ],
            }))
          : r
            ? (N.children = (0, V.jsxs)(V.Fragment, {
                children: [
                  (0, V.jsx)("span", { className: kt, children: N.children }),
                  i
                    ? (0, V.jsx)(oa, {
                        as: "span",
                        variant: i === "default" ? void 0 : i,
                        children: r,
                      })
                    : (0, V.jsx)("span", { className: ce(hl, n), children: r }),
                ],
              }))
            : m
              ? (N.children = (0, V.jsx)("span", { className: ce(Xr, kt), children: N.children }))
              : (N.children = Er(N.children)
                  ? (0, V.jsx)("span", {
                      className: ws,
                      children: (0, V.jsx)("span", { className: kt, children: N.children }),
                    })
                  : (0, V.jsx)("span", { className: ce(ws, kt), children: N.children })));
      let he = re.useCallback(
        () => (t == null || o == null ? !1 : (A.setValue(t, o), !0)),
        [A, t, o]
      );
      if (x)
        return (0, V.jsx)("div", {
          ref: w,
          role: "presentation",
          "data-disabled": R || void 0,
          className: N.className,
          children: N.children,
        });
      let ye = M
        ? (0, V.jsx)(Yo, { ...N, setValueOnClick: !1, value: o, selectValueOnClick: he })
        : (0, V.jsx)(Go, { ...N });
      return d
        ? (0, V.jsxs)(V.Fragment, {
            children: [
              ye,
              (0, V.jsx)(Lp, { anchorRef: R && p ? b : F, className: v, children: d }),
            ],
          })
        : ye;
    })
  );
function Hp() {
  let e = re.useRef(null);
  return re.useMemo(
    () => ({
      suppressFor(t) {
        ((e.current = t),
          window.setTimeout(() => {
            e.current === t && (e.current = null);
          }, 0));
      },
      consume(t) {
        return e.current !== t ? !1 : ((e.current = null), !0);
      },
    }),
    []
  );
}
var Lp = re.memo(function ({ anchorRef: t, className: o, children: r }) {
  let n = ct();
  si(n, "MenuItemTooltip must be used inside a Menu");
  let s = n.useState().currentPlacement?.startsWith("left") ? "left-start" : "right-start",
    a = Wo({ placement: s });
  return (
    re.useEffect(() => {
      let u = t.current;
      if (!u) return;
      a.setAnchorElement(u);
      let c = () => a.show(),
        l = () => a.hide();
      return (
        u.addEventListener("pointerenter", c),
        u.addEventListener("pointerleave", l),
        () => {
          (u.removeEventListener("pointerenter", c), u.removeEventListener("pointerleave", l));
        }
      );
    }, [a, t]),
    (0, V.jsx)(No, {
      store: a,
      "data-placement": s,
      portal: !0,
      unmountOnHide: !0,
      gutter: 8,
      className: ce(fl, o),
      render: (u) => (0, V.jsx)(ci, { children: (0, V.jsx)("div", { ...u }) }),
      children: r,
    })
  );
});
function xf({ acceleratorLabelTokens: e }) {
  let o = $e() ? void 0 : "+";
  return (0, V.jsx)("span", {
    className: dl,
    children: e.map((r, n) => {
      let i = o && n < e.length - 1;
      return (0, V.jsxs)(
        "span",
        { className: pl, children: [r, i && (0, V.jsx)("span", { className: vl, children: o })] },
        r
      );
    }),
  });
}
var Np = re.memo(({ items: e, onSelect: t, submenuPlacement: o }) => {
    let { reserveCheckmarkColumn: r } = Hs(),
      n = r || e.some((i) => i.type !== "separator" && i.checked === !0 && !i.icon);
    return e.map((i) => {
      let s = i.path.join("+");
      if (i.type === "separator") return (0, V.jsx)(_p, {}, s);
      let a = ce(n && i.checked !== !0 && !i.icon && Sl),
        u = zp(i);
      if (i.submenu) {
        let l = Tt(i.submenu) ? i.submenu() : i.submenu;
        if (Dt(l)) return null;
        let m = i.searchableSubmenu && tn(l) ? Bp : ii;
        return (0, V.jsx)(
          m,
          {
            label: i.label,
            enabled: i.enabled,
            checked: i.checked,
            icon: i.icon,
            className: a,
            items: l,
            onSelection: t,
            submenuPlacement: o,
            acceleratorLabelTokens: u,
            width: i.submenuWidth,
          },
          s
        );
      }
      let c = i.checked || i.mixed;
      return (0, V.jsx)(
        gf,
        {
          onClick: i.readonly ? void 0 : (l) => t?.(l, i),
          readonly: i.readonly,
          badge: i.badge,
          badgeClassName: i.badgeClassName,
          frescoBadgeVariant: i.frescoBadgeVariant,
          tooltip: i.tooltip,
          tooltipClassName: i.tooltipClassName,
          tooltipWhenDisabled: i.tooltipWhenDisabled,
          enabled: i.enabled,
          checked: c,
          acceleratorLabelTokens: u,
          icon: i.icon,
          avatar: i.avatar,
          description: i.description,
          className: a,
          children: Wp(i),
        },
        s
      );
    });
  }),
  Bp = re.memo(function (t) {
    let { items: o } = t,
      [r, n] = re.useState(""),
      i = re.useDeferredValue(r),
      s = re.useMemo(() => en(i, o), [o, i]);
    return (0, V.jsx)(ii, { ...t, items: s, searchValue: r, onSearch: n });
  });
function Wp(e) {
  return Er(e.label) ? (e.ellipsis ? `${e.label}\u2026` : e.label) : "";
}
function zp(e) {
  if (e.acceleratorLabelTokens) return e.acceleratorLabelTokens;
  let t = !$e() && !Dt(e.acceleratorWindows) ? e.acceleratorWindows : e.accelerator,
    o = !$e() && !Dt(e.acceleratorLabelWindows) ? e.acceleratorLabelWindows : e.acceleratorLabel;
  if (o) return Ds(o);
  if (t) return Ds(t);
}
function Ks(e, t) {
  return !e || !Js(t) ? !1 : Ys.isAutomation ? !0 : performance.now() - t >= 200;
}
var $s = _(oe(), 1),
  jp = 10,
  Sf = { placement: "bottom-start", orientation: "vertical" };
function TM({
  menu: e,
  onClose: t,
  vekterTaskScheduler: o,
  setEditReason: r,
  onKeyDown: n,
  onKeyUp: i,
}) {
  let [s, a] = (0, Ve.useState)(""),
    u = Qs(t),
    c = (0, Ve.useMemo)(
      () =>
        !e || e.config.searchable === !1 ? !1 : e.config.searchable === !0 ? !0 : Cf(e.items) > jp,
      [e]
    ),
    l = (0, Ve.useDeferredValue)(s),
    m = (0, Ve.useMemo)(
      () => (!c || !e?.items ? (e?.items ?? []) : en(l, e.items)),
      [c, e?.items, l]
    ),
    f = Pr({ ...Sf, placement: e?.config.placement ?? Sf.placement }),
    d = (e?.items.length ?? 0) > 0,
    v = e?.startTime,
    [p, x] = (0, Ve.useState)(!1);
  ((0, Ve.useEffect)(() => {
    if (!d) return;
    let C = new AbortController();
    f.show();
    let P = !1,
      M = (R) => {
        Ks(P, v) && Us(R.target) && f.hide();
      },
      A = () => {
        ((P = !0), x(!0));
      };
    return (
      window.addEventListener("mouseup", M, { signal: C.signal }),
      window.addEventListener("mousemove", A, { once: !0, signal: C.signal }),
      () => {
        (C.abort(), x(!1));
      }
    );
  }, [d, f, v]),
    ia(f.hide, d),
    (0, Ve.useEffect)(
      () =>
        Jt(f, ["mounted"], (C, P) => {
          P.mounted && !C.mounted && (a(""), u());
        }),
      [f]
    ));
  let b = (0, Ve.useCallback)(() => e?.config.location ?? null, [e?.config.location]),
    g = (0, Ve.useCallback)(
      (C, P) => {
        !e ||
          e?.items.length === 0 ||
          Kp(() => {
            let M = Dt(P.editReason) ? (P.role ?? P.label) : P.editReason;
            (M && r?.(M),
              e?.config.onSelect
                ? e?.config.onSelect(C, P)
                : P.click
                  ? P.click()
                  : P.role && ra(P.role, { fromContextMenu: !0 }));
          }, o);
      },
      [e, r, o]
    ),
    w = (0, Ve.useCallback)((C) => a(C), []),
    S = (0, Ve.useMemo)(
      () => ({
        store: f,
        getAnchorRect: b,
        gutter: e?.config.gutter,
        shift: e?.config.shift,
        className: ce(Il, e?.config?.className),
        onKeyDown: n,
        onKeyUp: i,
      }),
      [b, e?.config.gutter, e?.config.shift, e?.config?.className, f, n, i]
    );
  return (
    (0, Ve.useEffect)(() => {
      let C = (P) => {
        Us(P.target) && P.preventDefault();
      };
      return (
        document?.addEventListener("contextmenu", C),
        () => {
          document?.removeEventListener("contextmenu", C);
        }
      );
    }, []),
    (0, $s.jsx)(af, {
      startTime: e?.startTime,
      mouseDidMove: p,
      closeOnSelect: e?.config?.closeOnSelect ?? !0,
      reserveCheckmarkColumn: e?.config?.reserveCheckmarkColumn ?? !1,
      children: (0, $s.jsx)(ii, {
        items: m,
        menuProps: S,
        onSelection: g,
        submenuPlacement: e?.config?.submenuPlacement,
        searchValue: c ? s : void 0,
        onSearch: c ? w : void 0,
        width: e?.config?.width,
        mode: e?.config?.mode,
      }),
    })
  );
}
function Us(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = e.getAttribute("data-backdrop");
  return Er(t) && t.length > 0;
}
function kM(e) {
  return e instanceof Element ? !!e.closest(hf) || Us(e) : !1;
}
function Kp(e, t) {
  t?.enterEventHandling();
  try {
    return e();
  } catch (o) {
    throw (t?.errorInEventHandler(qs(o)), o);
  } finally {
    t?.exitEventHandling();
  }
}
function Cf(e) {
  let t = 0;
  for (let o of e) zs(o) && ((t += 1), Array.isArray(o.submenu) && (t += Cf(o.submenu)));
  return t;
}
export {
  Jt as a,
  me as b,
  Ri as c,
  Ai as d,
  _i as e,
  Pr as f,
  sl as g,
  al as h,
  ul as i,
  Cp as j,
  _l as k,
  Fl as l,
  Vl as m,
  oi as n,
  Wl as o,
  bI as p,
  Ds as q,
  af as r,
  en as s,
  hf as t,
  ii as u,
  TM as v,
  kM as w,
};
//# sourceMappingURL=chunk-HC627CDP.mjs.map
