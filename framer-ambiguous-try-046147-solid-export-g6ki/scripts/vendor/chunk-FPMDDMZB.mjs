import { e as Vc, q as Cs } from "chunk-RDLE5VXU.mjs";
import { e as Tc, i as Oc } from "chunk-L72QRVKJ.mjs";
import { a as kc } from "chunk-QVDGMSWL.mjs";
import { a as Lc, c as Fc } from "chunk-YY75G3LC.mjs";
import { a as Nc } from "chunk-RMB7H6JT.mjs";
import { b as xs } from "chunk-WPWSHZF5.mjs";
import { a as Ss } from "chunk-OZ4TWKMQ.mjs";
import { c as ws } from "chunk-EKYJNLIX.mjs";
import { a as Wc, b as Bc } from "chunk-LJSYJA5R.mjs";
import { a as Hc } from "chunk-VD6KMVU6.mjs";
import { d as ys } from "chunk-HYJDZVWB.mjs";
import { a as Ac } from "chunk-4HRYW54D.mjs";
import { a as jd } from "chunk-SJ5ZASSS.mjs";
import { a as Oo } from "chunk-VRDPJZ6M.mjs";
import { a as Ct } from "chunk-OUR6HJKJ.mjs";
import { d as rn } from "chunk-VW2PG5NQ.mjs";
import { c as Mc, d as Rc } from "chunk-3PIOJLHR.mjs";
import { a as Dc } from "chunk-LVTM6NBN.mjs";
import { a as be } from "chunk-QFU6OGL3.mjs";
import { a as Pc } from "chunk-XQSJQJWX.mjs";
import { a as To } from "chunk-LUZ6ND5K.mjs";
import { a as de } from "chunk-2FCXHKEL.mjs";
import { b as _t, e as Ec, i as Do, o as yt, q as nn, u as Ic } from "chunk-5EE7LLRA.mjs";
import { b as ko, c as wc } from "chunk-4JY5UMT2.mjs";
import { a as ie } from "chunk-SWYZG2NI.mjs";
import { o as Sc } from "chunk-MUEZJ6DD.mjs";
import { d as it, u as Rn, v as Cc } from "chunk-VHFKZWVR.mjs";
import { d as yc } from "chunk-WBI6GGAG.mjs";
import { e as N } from "chunk-WLHSDIGQ.mjs";
var Es = N(de());
function zc(e) {
  return (0, Es.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8",
    fill: "none",
    role: "presentation",
    ...e,
    children: (0, Es.jsx)("path", {
      d: "M 2.5 0.5 C 2.5 0.5 4.074 2.337 4.942 3.349 C 5.263 3.724 5.263 4.276 4.942 4.651 C 4.074 5.663 2.5 7.5 2.5 7.5",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
function mt(e) {
  let { render: t, type: n } = e;
  return t || n !== void 0 ? e : { ...e, type: "button" };
}
function Fo(e) {
  let t = [];
  for (let n of e) t.push(...n);
  return t;
}
function Vo(e) {
  return e.slice().reverse();
}
function Ft(...e) {}
function Ho(e, t) {
  if (e === t) return !0;
  if (!e || !t || typeof e != "object" || typeof t != "object") return !1;
  let n = Object.keys(e),
    r = Object.keys(t),
    { length: o } = n;
  if (r.length !== o) return !1;
  for (let i of n) if (e[i] !== t[i]) return !1;
  return !0;
}
function gn(e, t) {
  return _d(e) ? e(qd(t) ? t() : t) : e;
}
function _d(e) {
  return typeof e == "function";
}
function qd(e) {
  return typeof e == "function";
}
function $e(e, t) {
  return typeof Object.hasOwn == "function"
    ? Object.hasOwn(e, t)
    : Object.prototype.hasOwnProperty.call(e, t);
}
function Ee(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
function Tr(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function Uc(e, t) {
  let n = { ...e };
  for (let r of t) $e(n, r) && delete n[r];
  return n;
}
function $c(e, t) {
  let n = {};
  for (let r of t) $e(e, r) && (n[r] = e[r]);
  return n;
}
function No(e) {
  return e;
}
function Gc(e = Ft) {
  let t = requestAnimationFrame(() => {
    t = requestAnimationFrame(e);
  });
  return () => cancelAnimationFrame(t);
}
function fe(e, t) {
  if (!e) throw typeof t != "string" ? new Error("Invariant failed") : new Error(t);
}
function Ps(e) {
  return Object.keys(e);
}
function Wo(e, ...t) {
  let n = typeof e == "function" ? e(...t) : e;
  return n == null ? !1 : !n;
}
function dt(e) {
  return e.disabled || e["aria-disabled"] === !0 || e["aria-disabled"] === "true";
}
function Bo(e) {
  return e.getAttribute("aria-disabled") === "true" || ("disabled" in e && e.disabled === !0);
}
function bn(e) {
  let t = {};
  for (let n in e) $e(e, n) && n !== "__proto__" && e[n] !== void 0 && (t[n] = e[n]);
  return t;
}
function te(...e) {
  for (let t of e) if (t !== void 0) return t;
}
var on = Ud();
function Ud() {
  return typeof window < "u" && !!window.document?.createElement;
}
function Yc(e, t) {
  let n = e;
  for (; n;) {
    let r = Object.getOwnPropertyDescriptor(n, t);
    if (r?.get) return r.get;
    n = Object.getPrototypeOf(n);
  }
}
var Kc = on ? Yc(Object.getPrototypeOf(window.document), "nodeType") : void 0,
  jc = on ? Yc(Object.getPrototypeOf(window.document), "activeElement") : void 0;
function Is(e) {
  return e ? e.window === e : !1;
}
function _c(e) {
  if (!e) return !1;
  if (!Kc) return e.nodeType === 9;
  try {
    return Kc.call(e) === 9;
  } catch {
    return !1;
  }
}
function $d(e, t) {
  try {
    return e.document === t;
  } catch {
    return !1;
  }
}
function ce(e) {
  if (!e) return document;
  if (_c(e)) return e;
  if (Is(e)) return e.document;
  let t = e.ownerDocument;
  return _c(t) ? t : document;
}
function Be(e) {
  if (!e) return self;
  if (Is(e)) return e;
  let t = ce(e),
    { defaultView: n } = t;
  return Is(n) && $d(n, t) ? n : window;
}
function Je(e, { frame: t = !0, activeDescendant: n = !1 } = {}) {
  let r = ce(e),
    o = jc ? jc.call(r) : r.activeElement;
  if (!o?.nodeName) return null;
  if (t && Dr(o) && o.contentDocument?.body)
    return Je(o.contentDocument.body, { frame: t, activeDescendant: n });
  if (n) {
    let i = o.getAttribute("aria-activedescendant");
    if (i) {
      let s = ce(o).getElementById(i);
      if (s) return s;
    }
  }
  return o;
}
function we(e, t) {
  return e === t || e.contains(t);
}
function ze(e) {
  return e?.nodeType === 1;
}
function Or(e) {
  return typeof e?.nodeType == "number";
}
function Dr(e) {
  return e.tagName === "IFRAME";
}
function Vt(e) {
  let t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? Gd.indexOf(e.type) !== -1 : !1;
}
var Gd = ["button", "color", "file", "image", "reset", "submit"];
function zo(e) {
  if (typeof e.checkVisibility == "function") return e.checkVisibility();
  let t = e;
  return t.offsetWidth > 0 || t.offsetHeight > 0 || e.getClientRects().length > 0;
}
function et(e) {
  try {
    return e.tagName === "TEXTAREA" ? !0 : e.tagName !== "INPUT" ? !1 : e.selectionStart !== null;
  } catch {
    return !1;
  }
}
function tr(e) {
  return e.isContentEditable || et(e);
}
function Ko(e) {
  if (et(e)) return e.value;
  if (e.isContentEditable) {
    let t = ce(e).createRange();
    return (t.selectNodeContents(e), t.toString());
  }
  return "";
}
function An(e) {
  let t = 0,
    n = 0;
  if (et(e)) ((t = e.selectionStart || 0), (n = e.selectionEnd || 0));
  else if (e.isContentEditable) {
    let r = ce(e).getSelection();
    if (r?.rangeCount && r.anchorNode && we(e, r.anchorNode) && r.focusNode && we(e, r.focusNode)) {
      let o = r.getRangeAt(0),
        i = o.cloneRange();
      (i.selectNodeContents(e),
        i.setEnd(o.startContainer, o.startOffset),
        (t = i.toString().length),
        i.setEnd(o.endContainer, o.endOffset),
        (n = i.toString().length));
    }
  }
  return { start: t, end: n };
}
var Yd = ["dialog", "menu", "listbox", "tree", "grid"],
  qc = { menu: "menuitem", listbox: "option", tree: "treeitem" };
function sn(e, t) {
  let n = e?.getAttribute("role");
  return n && Yd.indexOf(n) !== -1 ? n : t;
}
function Ms(e) {
  if (e != null && $e(qc, e)) return qc[e];
}
function jo(e, t) {
  let n = sn(e);
  return typeof n != "string" ? t : (Ms(n) ?? t);
}
function kn(e) {
  if (!e) return null;
  let t = (r) => r === "auto" || r === "scroll";
  if (e.clientHeight && e.scrollHeight > e.clientHeight) {
    let { overflowY: r } = getComputedStyle(e);
    if (t(r)) return e;
  } else if (e.clientWidth && e.scrollWidth > e.clientWidth) {
    let { overflowX: r } = getComputedStyle(e);
    if (t(r)) return e;
  }
  let n = ce(e);
  return kn(e.parentElement) || n.scrollingElement || n.body;
}
function _o(e, ...t) {
  /text|search|password|tel|url/i.test(e.type) && e.setSelectionRange(...t);
}
function Xc(e, t) {
  let n = e.map((o, i) => [i, o]),
    r = !1;
  return (
    n.sort(([o, i], [s, u]) => {
      let a = t(i),
        c = t(u);
      return a === c || !a || !c ? 0 : Xd(a, c) ? (o > s && (r = !0), -1) : (o < s && (r = !0), 1);
    }),
    r ? n.map(([o, i]) => i) : e
  );
}
function Xd(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
function Rs() {
  return on && !!navigator.maxTouchPoints;
}
function nr() {
  return on ? /mac|iphone|ipad|ipod/i.test(navigator.platform) : !1;
}
function rr() {
  return on && nr() && /apple/i.test(navigator.vendor);
}
function Jc() {
  return on && /firefox\//i.test(navigator.userAgent);
}
function Zc() {
  return on && navigator.platform.startsWith("Mac") && !Rs();
}
function Qc(e) {
  let { currentTarget: t, target: n } = e;
  return t ? (Or(n) ? !we(t, n) : !0) : !1;
}
function De(e) {
  return e.target === e.currentTarget;
}
function ea(e) {
  if (!ze(e)) return !1;
  let t = e,
    n = t.tagName.toLowerCase();
  return (
    n === "a" || (n === "button" && t.type === "submit") || (n === "input" && t.type === "submit")
  );
}
function qo(e) {
  let t = nr();
  return (t && !e.metaKey) || (!t && !e.ctrlKey) ? !1 : ea(e.currentTarget);
}
function Uo(e) {
  return e.altKey ? ea(e.currentTarget) : !1;
}
function ta(e, t, n) {
  let { Event: r } = Be(e),
    o = new r(t, n);
  return e.dispatchEvent(o);
}
function Dn(e, t) {
  let { FocusEvent: n } = Be(e),
    r = new n("blur", t),
    o = e.dispatchEvent(r),
    i = { ...t, bubbles: !0 };
  return (e.dispatchEvent(new n("focusout", i)), o);
}
var Jd = {
  width: !0,
  height: !0,
  pressure: !0,
  tangentialPressure: !0,
  tiltX: !0,
  tiltY: !0,
  twist: !0,
  altitudeAngle: !0,
  azimuthAngle: !0,
  isPrimary: !0,
  coalescedEvents: !0,
  predictedEvents: !0,
  persistentDeviceId: !0,
};
function Zd(e, t) {
  let n = t ?? {},
    r = e.Window,
    o = typeof r == "function" && e instanceof r ? e : null;
  return new Proxy(
    {},
    {
      get(i, s) {
        if (s === "view") return o;
        if (s === "composed") return !0;
        if (s === "pointerId") return n.pointerId ?? -1;
        if (s === "pointerType") return n.pointerType ?? "";
        if (!$e(Jd, s)) return Reflect.get(n, s);
      },
    }
  );
}
function As(e, t) {
  let n = Be(e),
    r = new (n.PointerEvent ?? n.MouseEvent)("click", Zd(n, t));
  return e.dispatchEvent(r);
}
function qt(e, t) {
  let n = t || e.currentTarget,
    r = e.relatedTarget;
  return !Or(r) || !we(n, r);
}
function na(e) {
  return e.type === "input";
}
function Tn(e, t, n, r) {
  let i = ((u) => {
      if (r) {
        let c = setTimeout(u, r);
        return () => clearTimeout(c);
      }
      let a = requestAnimationFrame(u);
      return () => cancelAnimationFrame(a);
    })(() => {
      (e.removeEventListener(t, s, !0), n());
    }),
    s = () => {
      (i(), n());
    };
  return (
    e.addEventListener(t, s, { once: !0, capture: !0 }),
    () => {
      (i(), e.removeEventListener(t, s, !0));
    }
  );
}
function Ae(e, t, n, r = window) {
  let o = [];
  try {
    r.document.addEventListener(e, t, n);
    for (let s of Array.from(r.frames)) o.push(Ae(e, t, n, s));
  } catch {}
  return () => {
    try {
      r.document.removeEventListener(e, t, n);
    } catch {}
    for (let s of o) s();
  };
}
var $o =
  "input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], summary, iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false'])";
function Qd(e) {
  return Number.parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
function Ke(e) {
  return !(!e.matches($o) || !zo(e) || e.closest("[inert]"));
}
function er(e) {
  if (!Ke(e) || Qd(e)) return !1;
  if (!("form" in e) || !e.form || e.checked || e.type !== "radio") return !0;
  let t = e.form.elements.namedItem(e.name);
  if (!t || !("length" in t)) return !0;
  let n = Je(e);
  return (
    !n || n === e || !("form" in n) || n.form !== e.form || !("name" in n) || n.name !== e.name
  );
}
function Go(e, t) {
  let n = Array.from(e.querySelectorAll($o));
  t && n.unshift(e);
  let r = n.filter(Ke);
  return (
    r.forEach((o, i) => {
      if (!Dr(o)) return;
      let s = o.contentDocument?.body;
      s && r.splice(i, 1, ...Go(s));
    }),
    r
  );
}
function ep(e, t) {
  let [n] = Go(e, t);
  return n || null;
}
function Yo(e, t, n) {
  let r = Array.from(e.querySelectorAll($o)).filter(er);
  return (
    t && er(e) && r.unshift(e),
    r.forEach((o, i) => {
      if (!Dr(o)) return;
      let s = o.contentDocument?.body;
      if (!s) return;
      let u = Yo(s, !1, n);
      r.splice(i, 1, ...u);
    }),
    !r.length && n ? Go(e) : r
  );
}
function Lo(e, t, n) {
  if (t && er(e)) {
    if (!Dr(e)) return e;
    let o = e.contentDocument?.body;
    if (!o) return e;
    let i = Lo(o, !1, n);
    if (i) return i;
  }
  let r = e.querySelectorAll($o);
  for (let o of r)
    if (er(o)) {
      if (Dr(o)) {
        let i = o.contentDocument?.body;
        if (!i) return o;
        let s = Lo(i, !1, n);
        if (s) return s;
        continue;
      }
      return o;
    }
  return n ? ep(e) : null;
}
function ra({
  container: e,
  includeContainer: t,
  reverse: n,
  fallbackToEdge: r,
  fallbackToFocusable: o,
}) {
  let i = Je(e),
    s = Go(e, t);
  n && s.reverse();
  let u = s.indexOf(i),
    a = s.slice(u + 1);
  return a.find(er) || (r ? s.find(er) : null) || (o ? a[0] : null) || null;
}
function tp(e, t, n, r) {
  return ra({ container: e, includeContainer: t, fallbackToEdge: n, fallbackToFocusable: r });
}
function Xo(e, t) {
  return tp(document.body, !1, e, t);
}
function np(e, t, n, r) {
  return ra({
    container: e,
    includeContainer: t,
    reverse: !0,
    fallbackToEdge: n,
    fallbackToFocusable: r,
  });
}
function ks(e, t) {
  return np(document.body, !1, e, t);
}
function wt(e) {
  let t = Je(e);
  if (!t) return !1;
  if (t === e) return !0;
  let n = t.getAttribute("aria-activedescendant");
  return n ? n === e.id : !1;
}
function Et(e) {
  let t = Je(e);
  if (!t) return !1;
  if (we(e, t)) return !0;
  let n = t.getAttribute("aria-activedescendant");
  return !n || !("id" in e) ? !1 : n === e.id ? !0 : !!e.querySelector(`#${CSS.escape(n)}`);
}
function rp(e) {
  let t = e.getAttribute("tabindex") ?? "";
  (e.setAttribute("data-tabindex", t), e.setAttribute("tabindex", "-1"));
}
function oa(e, t) {
  let n = Yo(e, t);
  for (let r of n) rp(r);
}
function ia(e) {
  let t = e.querySelectorAll("[data-tabindex]"),
    n = (r) => {
      let o = r.getAttribute("data-tabindex");
      (r.removeAttribute("data-tabindex"),
        o ? r.setAttribute("tabindex", o) : r.removeAttribute("tabindex"));
    };
  e.hasAttribute("data-tabindex") && n(e);
  for (let r of t) n(r);
}
function sa(e) {
  return async () => {
    let t = await e?.();
    return sa(async () => (await t?.(), e));
  };
}
var wv = op();
function op({ limit: e = 100 } = {}) {
  let t = [],
    n = [],
    r = null,
    o = () => t.length > 0,
    i = () => n.length > 0;
  return {
    canUndo: o,
    canRedo: i,
    undo: async () => {
      o() && ((r = null), n.push(await t.pop()?.()));
    },
    redo: async () => {
      i() && ((r = null), t.push(await n.pop()?.()));
    },
    execute: async (c, l) => {
      if (!c) return;
      let f = l === r;
      r = l ?? null;
      let d = f ? Math.max(0, t.length - 1) : t.length,
        h = await c();
      if (!h) return;
      n = [];
      let m = t[d];
      for (
        t[d] = sa(async () => {
          await h?.();
          let v = await m?.();
          return async () => {
            (await v?.(), await c?.());
          };
        });
        t.length > e;
      )
        t.shift();
    },
  };
}
var Ds = Symbol("accessibleWhenDisabled");
function ua(e) {
  return e.accessibleWhenDisabled ?? e.onLoadedMetadataCapture?.[Ds];
}
var Jo = "data-truly-disabled";
function ca(e) {
  return e.getAttribute(Jo) === "true";
}
function aa(e) {
  let t = e.getAttribute(Jo);
  if (t === "true") return !0;
  if (t === "false") return !1;
}
function Ts(e) {
  return (
    e === "ArrowUp" ||
    e === "ArrowRight" ||
    e === "ArrowDown" ||
    e === "ArrowLeft" ||
    e === "Home" ||
    e === "End" ||
    e === "PageUp" ||
    e === "PageDown"
  );
}
function ip(e) {
  return e.nodeType === e.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function On(e) {
  let t = e?.getRootNode();
  return t && ip(t) && t.activeElement ? t.activeElement : Je(e);
}
function Zo(e) {
  return wt(e) || On(e) === e;
}
var la = N(ie(), 1),
  Qo = (0, la.createContext)(!0);
var rt = N(ie(), 1),
  Se = N(ie(), 1),
  Ln = N(de(), 1);
function Lr(e, t) {
  if (typeof e == "function") {
    let n = e(t);
    if (typeof n == "function") return n;
  } else e && (e.current = t);
}
function sp(e) {
  return !e || !(0, Se.isValidElement)(e) ? !1 : "ref" in e.props || "ref" in e;
}
function up(e) {
  return sp(e) ? { ...e.props }.ref || e.ref : null;
}
function cp(e, t) {
  let n = { ...e };
  for (let r in t) {
    if (!$e(t, r) || r === "__proto__") continue;
    if (r === "className") {
      let i = "className",
        s = e[i],
        u = t[i];
      s && u ? (n[i] = `${s} ${u}`) : (n[i] = u || s);
      continue;
    }
    if (r === "style") {
      let i = "style";
      n[i] = e[i] ? { ...e[i], ...t[i] } : t[i];
      continue;
    }
    let o = t[r];
    if (o !== void 0) {
      if (r.startsWith("on")) {
        if (typeof o != "function") continue;
        let i = e[r];
        if (typeof i == "function") {
          n[r] = (...s) => {
            (o(...s), i(...s));
          };
          continue;
        }
      }
      n[r] = o;
    }
  }
  return n;
}
var Os = { ...rt },
  pa = Os.useId,
  Av = Os.useDeferredValue,
  ap = Os.useInsertionEffect ?? ((e) => e()),
  $ = on ? Se.useLayoutEffect : Se.useEffect;
function lp(e) {
  let [t] = (0, Se.useState)(e);
  return t;
}
function or(e) {
  let t = (0, Se.useRef)(e);
  return (
    $(() => {
      t.current = e;
    }),
    t
  );
}
function _(e) {
  let t = (0, Se.useRef)(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return (
    ap(() => {
      t.current = e;
    }),
    (0, Se.useCallback)((...n) => t.current?.(...n), [])
  );
}
function ti(e) {
  let [t, n] = (0, Se.useState)(null);
  return (
    $(() => {
      if (t == null || !e) return;
      let r = null;
      return (
        e((o) => ((r = o), t)),
        () => {
          e(r);
        }
      );
    }, [t, e]),
    [t, n]
  );
}
function ae(...e) {
  return (0, Se.useMemo)(() => {
    if (e.some(Boolean))
      return (t) => {
        let n = [];
        for (let r of e) {
          if (!r) continue;
          let o = Lr(r, t);
          n.push({ ref: r, cleanup: typeof o == "function" ? o : void 0 });
        }
        if (n.some((r) => r.cleanup))
          return () => {
            for (let { ref: r, cleanup: o } of n) o ? o() : Lr(r, null);
          };
      };
  }, e);
}
function fp(e) {
  let [t, n] = (0, Se.useState)(e);
  return (
    $(() => {
      if (e || t) return;
      let r = Math.random().toString(36).slice(2, 8);
      n(`id-${r}`);
    }, [e, t]),
    e || t
  );
}
function mp(e) {
  let t = pa();
  return e || t;
}
var dp = pa ? mp : fp;
function Te(e) {
  return dp(e);
}
function ha(e, t) {
  let n = (i) => {
      if (typeof i == "string") return i;
    },
    [r, o] = (0, Se.useState)(() => n(t));
  return (
    $(() => {
      let i = e && "current" in e ? e.current : e;
      o(i?.tagName.toLowerCase() || n(t));
    }, [e, t]),
    r
  );
}
function Ls(e, t, n) {
  let r = lp(n),
    [o, i] = (0, Se.useState)(r);
  return (
    (0, Se.useEffect)(() => {
      let s = e && "current" in e ? e.current : e;
      if (!s) return;
      let u = () => {
          let c = s.getAttribute(t);
          i(c ?? r);
        },
        a = new MutationObserver(u);
      return (a.observe(s, { attributeFilter: [t] }), u(), () => a.disconnect());
    }, [e, t, r]),
    o
  );
}
function It(e, t) {
  let n = (0, Se.useRef)(!1);
  ((0, Se.useEffect)(() => {
    if (n.current) return e();
    n.current = !0;
  }, t),
    (0, Se.useEffect)(
      () => () => {
        n.current = !1;
      },
      []
    ));
}
function ga(e, t) {
  let n = (0, Se.useRef)(!1);
  ($(() => {
    if (n.current) return e();
    n.current = !0;
  }, t),
    $(
      () => () => {
        n.current = !1;
      },
      []
    ));
}
function ir() {
  return (0, Se.useReducer)(() => [], []);
}
function pe(e) {
  return _(typeof e == "function" ? e : () => e);
}
function ge(e, t, n = []) {
  let r = (0, Se.useCallback)(
    (o) => (e.wrapElement && (o = e.wrapElement(o)), t(o)),
    [...n, e.wrapElement]
  );
  return { ...e, wrapElement: r };
}
function sr(e = !1, t) {
  let [n, r] = (0, Se.useState)(null);
  return { portalRef: ae(r, t), portalNode: n, domReady: !e || n };
}
function ur(e, t, n) {
  let r = e.onLoadedMetadataCapture,
    o = (0, Se.useMemo)(
      () => Object.assign(Ft.bind(null), r, ...(n !== void 0 ? [{ [t]: n }] : [])),
      [r, t, n]
    );
  return [r?.[t], { onLoadedMetadataCapture: o }];
}
var fa = !1;
function cr() {
  return (
    (0, Se.useEffect)(() => {
      fa ||
        (Ae("mousemove", hp, !0),
        Ae("mousedown", ei, !0),
        Ae("mouseup", ei, !0),
        Ae("keydown", ei, !0),
        Ae("scroll", ei, !0),
        (fa = !0));
    }, []),
    _(() => Fs)
  );
}
var Fs = !1,
  ma = 0,
  da = 0;
function pp(e) {
  let t = e.movementX || e.screenX - ma,
    n = e.movementY || e.screenY - da;
  return ((ma = e.screenX), (da = e.screenY), t || n || !1);
}
function hp(e) {
  pp(e) && (Fs = !0);
}
function ei() {
  Fs = !1;
}
function q(e) {
  let t = rt.forwardRef((n, r) => e(bn({ ...n, ref: r })));
  return ((t.displayName = e.displayName || e.name), t);
}
function Ut(e, t) {
  return rt.memo(e, t);
}
function J(e, t) {
  let { wrapElement: n, render: r, ...o } = t,
    i = ae(t.ref, up(r)),
    s;
  if (rt.isValidElement(r)) {
    let u = { ...r.props, ref: i };
    s = rt.cloneElement(r, cp(o, u));
  } else r ? (s = r(o)) : (s = (0, Ln.jsx)(e, { ...o }));
  return n ? n(s) : s;
}
function Q(e) {
  let t = (n = {}) => e(n);
  return ((t.displayName = e.name), t);
}
function qe(e = [], t = []) {
  let n = rt.createContext(void 0),
    r = rt.createContext(void 0),
    o = () => rt.useContext(n),
    i = (c = !1) => {
      let l = rt.useContext(r),
        f = o();
      return c ? l : l || f;
    },
    s = () => {
      let c = rt.useContext(r),
        l = o();
      if (!(c && c === l)) return l;
    },
    u = (c) =>
      e.reduceRight(
        (l, f) => (0, Ln.jsx)(f, { ...c, children: l }),
        (0, Ln.jsx)(n.Provider, { ...c })
      );
  return {
    context: n,
    scopedContext: r,
    useContext: o,
    useScopedContext: i,
    useProviderContext: s,
    ContextProvider: u,
    ScopedContextProvider: (c) =>
      (0, Ln.jsx)(u, {
        ...c,
        children: t.reduceRight(
          (l, f) => (0, Ln.jsx)(f, { ...c, children: l }),
          (0, Ln.jsx)(r.Provider, { ...c })
        ),
      }),
  };
}
var Ze = N(ie(), 1),
  gp = "div",
  xa = rr(),
  ya = 1,
  Ca = 2,
  ba = 3,
  bp = [
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
  ];
function vp(e) {
  let { tagName: t, readOnly: n, type: r } = e;
  return (t === "TEXTAREA" && !n) || (t === "SELECT" && !n)
    ? !0
    : t === "INPUT" && !n
      ? bp.includes(r)
      : !!(e.isContentEditable || (e.getAttribute("role") === "combobox" && e.dataset.name));
}
function xp(e) {
  return e
    ? e === "button" ||
        e === "summary" ||
        e === "input" ||
        e === "select" ||
        e === "textarea" ||
        e === "a"
    : !0;
}
function yp(e) {
  return e ? e === "button" || e === "input" || e === "select" || e === "textarea" : !0;
}
function Cp(e) {
  let t = 0;
  return (xp(e) && (t |= ya), yp(e) && (t |= Ca), t);
}
function Sp(e) {
  if (e.tagName === "BUTTON") {
    let { type: t } = e;
    return t === "submit";
  }
  if (e.tagName === "INPUT") {
    let { type: t } = e;
    return t === "submit" || t === "image";
  }
  return !1;
}
function wp({
  focusable: e,
  trulyDisabled: t,
  nativeTabbable: n,
  supportsDisabled: r,
  safariTabIndex: o,
  tabIndexProp: i,
}) {
  return e ? (t ? (n && !r ? -1 : void 0) : n ? (o && i == null ? 0 : i) : (i ?? 0)) : i;
}
function ni(e, t) {
  return _((n) => {
    (e?.(n), !n.defaultPrevented && t && (n.stopPropagation(), n.preventDefault()));
  });
}
var va = !1,
  ri = !0;
function Ep(e) {
  let t = e.target;
  ze(t) && !t.hasAttribute("data-focus-visible") && (ri = !1);
}
function Ip(e) {
  if (Ts(e.key)) {
    ri = !0;
    return;
  }
  e.metaKey || e.ctrlKey || (e.altKey && (!xa || e.key !== "Tab")) || (ri = !0);
}
var un = Q(function ({
    focusable: t = !0,
    accessibleWhenDisabled: n,
    autoFocus: r,
    onFocusVisible: o,
    ...i
  }) {
    let s = (0, Ze.useRef)(null),
      [u, a] = ur(i, Ds, n);
    ((n ??= u),
      (0, Ze.useEffect)(() => {
        t && (va || (Ae("mousedown", Ep, !0), Ae("keydown", Ip, !0), (va = !0)));
      }, [t]));
    let c = t && dt(i),
      l = c && !n,
      [f, d] = (0, Ze.useState)(!1),
      h = (0, Ze.useRef)(!1),
      m = (0, Ze.useRef)(null),
      v = _((F) => {
        (m.current?.(),
          (m.current = null),
          (h.current = !1),
          F?.removeAttribute("data-focus-visible"));
      });
    ((0, Ze.useEffect)(() => {
      (t && !l) || (v(s.current), f && d(!1));
    }, [t, l, f, v]),
      (0, Ze.useEffect)(() => {
        if (!t || !f) return;
        let F = s.current;
        if (!F || typeof IntersectionObserver > "u") return;
        let U = new IntersectionObserver(() => {
          Ke(F) || ((h.current = !1), d(!1));
        });
        return (U.observe(F), () => U.disconnect());
      }, [t, f]),
      (0, Ze.useEffect)(() => () => m.current?.(), []));
    let x = ni(i.onKeyPressCapture, c),
      R = ni(i.onMouseDownCapture, c),
      b = ni(i.onClickCapture, c),
      g = ni(i.onAuxClickCapture, c),
      C = (F, U) => {
        if ((U && (F.currentTarget = U), !t)) return;
        let G = F.currentTarget;
        if (G && Zo(G) && (o?.(F), !F.defaultPrevented)) {
          if (((G.dataset.focusVisible = "true"), (h.current = !0), Sp(G))) {
            if ((m.current?.(), (m.current = null), typeof IntersectionObserver < "u")) {
              let Z = new IntersectionObserver(() => {
                Ke(G) || v(G);
              });
              (Z.observe(G), (m.current = () => Z.disconnect()));
            }
            return;
          }
          d(!0);
        }
      },
      w = i.onKeyDownCapture,
      L = _((F) => {
        if (
          (w?.(F),
          F.defaultPrevented ||
            !t ||
            f ||
            h.current ||
            ((F.metaKey || F.altKey || F.ctrlKey) && !Ts(F.key)) ||
            !De(F))
        )
          return;
        let U = F.currentTarget;
        Tn(U, "focusout", () => C(F, U));
      }),
      S = i.onFocusCapture,
      T = _((F) => {
        if ((S?.(F), F.defaultPrevented || !t)) return;
        if (!De(F)) {
          d(!1);
          return;
        }
        let U = F.currentTarget,
          G = () => C(F, U);
        ri || vp(F.target) ? Tn(F.target, "focusout", G) : d(!1);
      }),
      p = i.onBlur,
      P = _((F) => {
        (p?.(F), t && qt(F) && (v(F.currentTarget), d(!1)));
      }),
      M = (0, Ze.useContext)(Qo),
      y = _((F) => {
        t &&
          r &&
          F &&
          M &&
          queueMicrotask(() => {
            wt(F) || (Ke(F) && F.focus());
          });
      }),
      [E, I] = (0, Ze.useState)(ba);
    $(() => {
      let F = s.current;
      if (!F) return;
      let U = Cp(F.tagName.toLowerCase());
      U !== ba && I(U);
    }, []);
    let A = t && !!(E & ya),
      V = t && !!(E & Ca),
      [D, H] = (0, Ze.useState)(!1);
    xa &&
      (0, Ze.useEffect)(() => {
        if (!t) return;
        let F = s.current;
        if (!F) return;
        let { type: U } = F,
          G = F.tagName === "INPUT" && (U === "checkbox" || U === "radio");
        H(Vt(F) || G);
      }, [t]);
    let K = i.style,
      re = (0, Ze.useMemo)(() => (l ? { pointerEvents: "none", ...K } : K), [l, K]);
    return (
      (i = {
        "data-focus-visible": (t && f) || void 0,
        "data-autofocus": r || void 0,
        "aria-disabled": c || void 0,
        ...i,
        ...a,
        ref: ae(s, y, i.ref),
        style: re,
        tabIndex: wp({
          focusable: t,
          trulyDisabled: l,
          nativeTabbable: A,
          supportsDisabled: V,
          safariTabIndex: D,
          tabIndexProp: i.tabIndex,
        }),
        disabled: V && l ? !0 : void 0,
        [Jo]: c ? l : void 0,
        contentEditable: c ? void 0 : i.contentEditable,
        onKeyPressCapture: x,
        onClickCapture: b,
        onAuxClickCapture: g,
        onMouseDownCapture: R,
        onKeyDownCapture: L,
        onFocusCapture: T,
        onBlur: P,
      }),
      bn(i)
    );
  }),
  Fv = q(function (t) {
    let n = un(t);
    return J(gp, n);
  });
var vn = N(ie(), 1),
  Pp = "button";
function Sa(e) {
  if (!e.isTrusted) return !1;
  let t = e.currentTarget;
  return e.key === "Enter"
    ? Vt(t) || t.tagName === "SUMMARY" || t.tagName === "A"
    : e.key === " "
      ? Vt(t) || t.tagName === "SUMMARY" || t.tagName === "INPUT" || t.tagName === "SELECT"
      : !1;
}
var Mp = Symbol("command"),
  Fr = Q(function ({ clickOnEnter: t = !0, clickOnSpace: n = !0, ...r }) {
    let o = (0, vn.useRef)(null),
      [i, s] = (0, vn.useState)(!1),
      u = r.type;
    (0, vn.useEffect)(() => {
      let C = o.current;
      if (!C) return;
      let w = Vt(C);
      (u !== void 0 && w && C.type === "button") || s(w);
    }, [u]);
    let [a, c] = (0, vn.useState)(!1),
      l = (0, vn.useRef)(!1),
      f = dt(r),
      [d, h] = ur(r, Mp, !0);
    $(() => {
      f && ((l.current = !1), c(!1));
    }, [f]);
    let m = r.onKeyDown,
      v = _((C) => {
        m?.(C);
        let w = C.currentTarget;
        if (C.defaultPrevented || d || f || !De(C) || et(w) || w.isContentEditable) return;
        let L = t && C.key === "Enter",
          S = n && C.key === " ",
          T = C.key === "Enter" && !t,
          p = C.key === " " && !n;
        if (T || p) {
          C.preventDefault();
          return;
        }
        if (L || S) {
          let P = Sa(C);
          if (L) {
            if (!P) {
              C.preventDefault();
              let { view: M, ...y } = C,
                E = () => As(w, y);
              Jc() ? Tn(w, "keyup", E) : queueMicrotask(E);
            }
          } else S && ((l.current = !0), P || (C.preventDefault(), c(!0)));
        }
      }),
      x = r.onKeyUp,
      R = _((C) => {
        if ((x?.(C), d)) return;
        let w = n && C.key === " ";
        if (!l.current || !w) return;
        let L = Sa(C);
        if (((l.current = !1), L || c(!1), C.defaultPrevented || !De(C) || f || C.metaKey || L))
          return;
        C.preventDefault();
        let S = C.currentTarget,
          { view: T, ...p } = C;
        queueMicrotask(() => As(S, p));
      }),
      b = r.onBlur,
      g = _((C) => {
        (b?.(C), l.current && ((l.current = !1), c(!1)));
      });
    return (
      (r = {
        "data-active": a || void 0,
        type: i ? "button" : void 0,
        ...h,
        ...r,
        ref: ae(o, r.ref),
        onKeyDown: v,
        onKeyUp: R,
        onBlur: g,
      }),
      (r = un(r)),
      r
    );
  }),
  zv = q(function (t) {
    let n = Fr(mt(t));
    return J(Pp, n);
  });
var Vr = qe(),
  oi = Vr.useContext,
  _v = Vr.useScopedContext,
  qv = Vr.useProviderContext,
  wa = Vr.ContextProvider,
  Ea = Vr.ScopedContextProvider;
var ii = N(ie(), 1),
  Rp = "div",
  Vs = Q(function ({ store: t, shouldRegisterItem: n = !0, getItem: r = No, element: o, ...i }) {
    let s = oi();
    t = t || s;
    let u = Te(i.id),
      a = (0, ii.useRef)(o);
    return (
      (0, ii.useEffect)(() => {
        let c = a.current;
        if (!u || !c || !n) return;
        let l = r({ id: u, element: c });
        return t?.renderItem(l);
      }, [u, n, r, t]),
      (i = { ...i, ref: ae(a, i.ref) }),
      i
    );
  }),
  Xv = q(function (t) {
    let n = Vs(t);
    return J(Rp, n);
  });
var Hs = N(ie(), 1),
  Hr = qe([wa], [Ea]),
  Ap = Hr.useContext,
  $t = Hr.useScopedContext,
  Ia = Hr.useProviderContext,
  xn = Hr.ContextProvider,
  Gt = Hr.ScopedContextProvider,
  Pa = (0, Hs.createContext)(void 0),
  Ma = (0, Hs.createContext)(void 0);
var fr = N(ie(), 1);
function Fn(e, t) {
  let n = e.__unstableInternals;
  return (fe(n, "Invalid store"), n[t]);
}
function Aa(e, t) {
  if (!e) return !0;
  for (let n of e)
    if (t instanceof Set) {
      if (t.has(n)) return !0;
    } else if (Nr(n, t)) return !0;
  return !1;
}
function Nr(e, t) {
  return e === t || (e !== e && t !== t);
}
function ka(e, t, n, r) {
  let o;
  for (let i of Ps(t))
    Nr(t[i], n[i]) || (r !== void 0 && Aa([i], r)) || ((o ??= { ...e }), (o[i] = t[i]));
  return o;
}
var kp = 100;
function Dp(e, t, n) {
  if (t)
    for (let r of t) {
      let o = e.get(r);
      (o || ((o = new Set()), e.set(r, o)), o.add(n));
    }
}
function Tp(e, t, n) {
  if (e && t)
    for (let r of t) {
      let o = e.get(r);
      o && (o.delete(n), o.size || e.delete(r));
    }
}
function Da(e) {
  let t = new Set(),
    n = e.currentListener;
  if (!n) return t;
  for (let r of e.keyedListeners) if ((t.add(r), r === n)) return t;
  return (t.clear(), t.add(n), t);
}
function si(e) {
  e.notifiedListeners ??= Da(e);
}
function Ws(e, t) {
  if (!e.currentListener) return !1;
  let n = !1;
  for (let o of e.keyedListeners) {
    if (o === e.currentListener) {
      n = !0;
      continue;
    }
    if (n && o === t) return !1;
  }
  let r = !1;
  for (let o of e.group.listeners) {
    if (o === e.currentListener) return r;
    o === t && (r = !0);
  }
  return !1;
}
function Ns(e, t, n) {
  for (let r of e)
    if (r.group === t && !r.recovering && !(n && !r.keyedListeners.has(n))) {
      si(r);
      for (let o of r.group.listeners) {
        if (o === r.currentListener) break;
        Ws(r, o) && r.notifiedListeners?.add(o);
      }
    }
}
function Op(e, t, n) {
  for (let r of e)
    r.group === t && (r.recovering || (Ws(r, n) && (si(r), r.notifiedListeners?.add(n))));
}
function Lp({ fastPathFrames: e, group: t, keys: n, listener: r }) {
  let o = t.listeners.has(r);
  for (let i of e)
    i.group === t &&
      (i.recovering ||
        (n.includes(i.updatedKey) &&
          (Ws(i, r)
            ? (si(i), i.notifiedListeners?.add(r))
            : o && (si(i), (i.recoverToLive = !0)))));
}
function Fp(e, t, n) {
  for (let r of e) r.group === t && r.notifiedListeners?.delete(n);
}
function Vp({ fastPathFrames: e, group: t, keys: n, listener: r }) {
  for (let o of e)
    o.group === t && (o.recovering || (n.includes(o.updatedKey) && o.keyedListeners.add(r)));
}
function Hp(e, t) {
  if (!e.disposables.size) return;
  let n = e.disposables.get(t);
  n && (e.disposables.delete(t), n());
}
function Ta(e, t, n) {
  let r = e.disposables.get(t);
  if (!r) {
    e.disposables.set(t, n);
    return;
  }
  e.disposables.set(t, () => {
    (r(), n());
  });
}
function Oa(e, t, n, r, o, i) {
  if (e.suspendCounts?.has(t)) return;
  let { disposables: s } = e,
    u = s.size ? s.get(t) : void 0;
  if (u) {
    s.delete(t);
    let c = n;
    (u(), (n = o?.() ?? n), n !== c && (r = ka(r, n, c, i) ?? r));
  }
  let a = t(n, r);
  a && Ta(e, t, a);
}
function Ra({ group: e, getState: t, prevState: n, updatedKey: r, notifiedListeners: o }) {
  let i = e.allKeysListeners;
  for (let s of e.listeners)
    o?.has(s) ||
      (!i?.has(s) && !Aa(e.listenerKeys.get(s), r)) ||
      (o?.add(s), Oa(e, s, t(), n, t, r));
}
function Ge(e, ...t) {
  let n = e,
    r = n,
    o = Ft,
    i = !1,
    s = !1,
    u = new Set(),
    a = new Set(),
    c = new Set(),
    l = { listeners: new Set(), disposables: new Map(), listenerKeys: new WeakMap() },
    f = { listeners: new Set(), disposables: new Map(), listenerKeys: new WeakMap() },
    d = (M) => (c.add(M), () => c.delete(M)),
    h = () => {
      let M = a.size,
        y = Symbol();
      a.add(y);
      let E = () => {
        a.delete(y) && (a.size || o());
      };
      if (M) return E;
      let I = Ps(n),
        A = [];
      for (let H of t) {
        let K = H?.getState?.();
        if (!K) continue;
        let re = I.filter((F) => $e(K, F));
        if (re.length) {
          if (t.length === 1 || re.length === I.length) {
            for (let F of re)
              A.push(
                me(H, [F], (U) => {
                  p(F, U[F], !0);
                })
              );
            continue;
          }
          A.push(
            st(H, re, (F, U) => {
              for (let G of re) F[G] !== U[G] && p(G, F[G], !0);
            })
          );
          for (let F of re) {
            let U = H?.getState?.();
            U && p(F, U[F], !0);
          }
        }
      }
      let V = [];
      for (let H of c) V.push(H());
      let D = t.map(Wr);
      return ((o = Ee(...A, ...V, ...D)), E);
    },
    m = (M, y, E) => {
      E !== void 0 && (E ? Tp(M.listenersByKey, E, y) : M.allKeysListeners?.delete(y));
    },
    v = [],
    x = (M, y, E = l) => {
      let I = M ? [...M] : null,
        A = E.listeners.has(y);
      return (
        A || Fp(v, E, y),
        I
          ? Lp({ fastPathFrames: v, group: E, keys: I, listener: y })
          : (A && Ns(v, E), Op(v, E, y)),
        A && (Ns(v, E, y), m(E, y, E.listenerKeys.get(y))),
        E.listeners.add(y),
        I
          ? ((E.listenersByKey ??= new Map()),
            Dp(E.listenersByKey, I, y),
            Vp({ fastPathFrames: v, group: E, keys: I, listener: y }))
          : ((E.allKeysListeners ??= new Set()), E.allKeysListeners.add(y)),
        E.listenerKeys.set(y, I),
        () => {
          let V = E.disposables.get(y);
          (E.disposables.delete(y), Ns(v, E, y));
          let D = E.listenerKeys.get(y);
          (m(E, y, I),
            D !== I && m(E, y, D),
            E.listenerKeys.delete(y),
            E.listeners.delete(y),
            V?.());
        }
      );
    },
    R = (M, y) => x(M, y),
    b = (M, y, E) => {
      let I = M.listeners.has(y);
      if (I) {
        M.suspendCounts ??= new Map();
        let V = M.suspendCounts.get(y) ?? 0;
        M.suspendCounts.set(y, V + 1);
      }
      let A;
      try {
        let V = n;
        (Hp(M, y), n !== V && (A = ka(E, n, V)));
        let D = y(n, A ?? E);
        D && Ta(M, y, D);
      } finally {
        if (I) {
          let V = M.suspendCounts,
            D = V?.get(y);
          (D && D > 1 ? V?.set(y, D - 1) : V?.delete(y), V?.size || delete M.suspendCounts);
        }
      }
    },
    g = (M, y) => (b(l, y, n), x(M, y)),
    C = (M, y) => (!f.listeners.size && !s && (r = n), b(f, y, r), x(M, y, f)),
    w = (M) => Ge($c(n, M), P),
    L = (M) => Ge(Uc(n, M), P),
    S = () => n,
    T = (M, y, E) => {
      if (!(E instanceof Set) && !M.allKeysListeners?.size) {
        let I = M.listenersByKey?.get(E);
        if (!I) return;
        let A = { group: M, keyedListeners: I, updatedKey: E, currentListener: null };
        v.push(A);
        try {
          for (let V of I) {
            if (
              A.notifiedListeners?.has(V) ||
              ((A.currentListener = V),
              A.notifiedListeners?.add(V),
              Oa(M, V, n, y, S, E),
              !M.allKeysListeners?.size && !A.recoverToLive)
            )
              continue;
            let D = A.notifiedListeners ?? Da(A);
            ((A.notifiedListeners = D),
              (A.recovering = !0),
              Ra({ group: M, getState: S, prevState: y, updatedKey: E, notifiedListeners: D }));
            return;
          }
        } finally {
          v.pop();
        }
        return;
      }
      Ra({ group: M, getState: S, prevState: y, updatedKey: E });
    },
    p = (M, y, E = !1) => {
      if (!$e(n, M)) return;
      let I = n[M],
        A = gn(y, () => I);
      if (Nr(A, I)) return;
      let V = s;
      s = !0;
      let D = n,
        H = { ...n, [M]: A };
      n = H;
      let K = !1;
      try {
        if (!E && t.length) {
          for (let re of t)
            if ((re?.setState?.(M, A), !Nr(n[M], A))) {
              K = !0;
              break;
            }
          if (K) {
            let re = 0;
            for (; re < kp; re += 1) {
              let F = !1;
              for (let U of t) {
                let G = n[M];
                (U?.setState?.(M, G), Nr(n[M], G) || (F = !0));
              }
              if (!F) break;
            }
          }
        }
        if (!K) {
          let re = n === H ? D : { ...n, [M]: D[M] };
          T(l, re, M);
        }
      } finally {
        s = V;
      }
      if (!f.listeners.size) {
        s || (r = n);
        return;
      }
      (u.add(M),
        !i &&
          ((i = !0),
          queueMicrotask(() => {
            i = !1;
            let re = n,
              F = u;
            u = new Set();
            let U = r;
            (T(f, U, F), r === U && (r = re));
          })));
    },
    P = {
      getState: S,
      setState: p,
      __unstableInternals: { setup: d, init: h, subscribe: R, sync: g, batch: C, pick: w, omit: L },
    };
  return P;
}
function xe(e, ...t) {
  if (e) return Fn(e, "setup")(...t);
}
function Wr(e, ...t) {
  if (e) return Fn(e, "init")(...t);
}
function st(e, ...t) {
  if (e) return Fn(e, "subscribe")(...t);
}
function me(e, ...t) {
  if (e) return Fn(e, "sync")(...t);
}
function yn(e, ...t) {
  if (e) return Fn(e, "batch")(...t);
}
function ar(e, ...t) {
  if (e) return Fn(e, "omit")(...t);
}
function ui(e, ...t) {
  if (e) return Fn(e, "pick")(...t);
}
function Cn(...e) {
  let t = {};
  for (let r of e) {
    let o = r?.getState?.();
    o && Object.assign(t, o);
  }
  let n = Ge(t, ...e);
  return Object.assign({}, ...e, n);
}
function Np(e) {
  let t = e.find((o) => !!o.element),
    n = [...e].reverse().find((o) => !!o.element)?.element,
    r = t?.element?.parentElement;
  if (!n) return ce(r).body;
  for (; r;) {
    if (r.contains(n)) return r;
    r = r.parentElement;
  }
  return ce(r).body;
}
function Wp(e) {
  return e?.__unstablePrivateStore;
}
var ci = 64;
function La(e, t) {
  if (e.length < ci) {
    t.ids && ((t.items = void 0), (t.ids = void 0));
    return;
  }
  if (t.items === e) return t.ids;
  let n = new Set();
  for (let r of e) n.add(r.id);
  return ((t.items = e), (t.ids = n), n);
}
function Bs(e, t, n) {
  if (e.length < ci) {
    t.ids && ((t.items = void 0), (t.ids = void 0));
    return;
  }
  if (!n) {
    n = new Set();
    for (let r of e) n.add(r.id);
  }
  ((t.items = e), (t.ids = n));
}
function Fa(e = {}) {
  e.store;
  let t = e.store?.getState(),
    n = te(e.items, t?.items, e.defaultItems, []),
    r = Wp(e.store),
    o = r?.__unstableCollectionLookup ?? {
      controlledItems: new Map(n.map((b) => [b.id, b])),
      registeredItems: new Map(),
      controlledItemsSource: n,
      propagatedItems: n,
    },
    { controlledItems: i, registeredItems: s } = o,
    u = {},
    a = {},
    c = { items: n, renderedItems: te(t?.renderedItems, []) },
    l = Ge(c, e.store),
    f = Object.assign(Ge({ items: n, renderedItems: c.renderedItems }, r), {
      __unstableCollectionLookup: o,
    }),
    d = (b) => {
      let g = Xc(b, (C) => C.element);
      (f.setState("renderedItems", g), l.setState("renderedItems", g));
    },
    h = (b) => {
      if (b !== o.controlledItemsSource) {
        ((o.controlledItemsSource = b), i.clear());
        for (let g of b) i.set(g.id, g);
      }
    },
    m = (b, g) => {
      if (b !== "items") {
        l.setState(b, g);
        return;
      }
      l.setState("items", (C) => {
        let w = gn(g, C);
        return w === C ? C : ((o.propagatedItems = w), h(w), w);
      });
    };
  (xe(l, () => Wr(f)),
    r ||
      (st(l, ["items"], ({ items: b }) => {
        b !== o.propagatedItems && ((o.propagatedItems = b), h(b));
      }),
      xe(f, () =>
        yn(f, ["items"], ({ items: b }) => {
          ((o.propagatedItems = b), l.setState("items", b));
        })
      )),
    xe(f, () =>
      yn(f, ["renderedItems"], (b) => {
        if (
          (b.renderedItems !== l.getState().renderedItems && d(b.renderedItems),
          typeof IntersectionObserver != "function")
        )
          return;
        let g = !0,
          C = 0,
          w = () => {
            if (g) {
              g = !1;
              return;
            }
            (cancelAnimationFrame(C), (C = requestAnimationFrame(() => d(b.renderedItems))));
          },
          L = Np(b.renderedItems),
          S = new IntersectionObserver(w, { root: L });
        for (let T of b.renderedItems) T.element && S.observe(T.element);
        return () => {
          (cancelAnimationFrame(C), S.disconnect());
        };
      })
    ));
  let v = (b, g, C) => {
      let w = C?.registeredItems,
        L = C?.controlledItems;
      return (S) => {
        let T = w?.get(S.id),
          p = !!T || !!L?.has(S.id),
          P;
        return (
          f.setState(b, (y) => {
            let E = g.ids || (y.length >= ci && !p) ? La(y, g) : void 0,
              I = E && !E.has(S.id) ? -1 : y.findIndex(({ id: V }) => V === S.id),
              A = y.slice();
            if (I !== -1) {
              P = y[I];
              let V = { ...P, ...S };
              ((A[I] = V), w?.set(S.id, V));
            } else (A.push(S), w?.set(S.id, S), E?.add(S.id));
            return ((g.ids || (I === -1 && A.length >= ci)) && Bs(A, g, E), A);
          }),
          () => {
            (w && (T ? w.set(S.id, T) : w.delete(S.id)),
              f.setState(b, (y) => {
                let E = g.ids ? La(y, g) : void 0;
                if (!P) {
                  let V = y.filter(({ id: D }) => D !== S.id);
                  return (E?.delete(S.id), g.ids && Bs(V, g, E), V);
                }
                let I = y.findIndex(({ id: V }) => V === S.id);
                if (I === -1) return y;
                let A = y.slice();
                return ((A[I] = P), g.ids && Bs(A, g, E), A);
              }));
          }
        );
      };
    },
    x = v("items", u, o),
    R = v("renderedItems", a);
  return {
    ...l,
    setState: m,
    registerItem: x,
    renderItem: (b) => Ee(x(b), R(b)),
    item: (b) => (b ? (s.size ? (s.get(b) ?? i.get(b) ?? null) : (i.get(b) ?? null)) : null),
    __unstablePrivateStore: f,
  };
}
var Bp = { id: null };
function Yt(e, t) {
  return e.find((n) => (t ? !n.disabled && n.id !== t : !n.disabled));
}
function zp(e) {
  for (let t = e.length - 1; t >= 0; t -= 1) {
    let n = e[t];
    if (n && !n.disabled) return n;
  }
}
function Kp(e, t) {
  return e.filter((n) => (t ? !n.disabled && n.id !== t : !n.disabled));
}
function Va(e, t) {
  return e.filter((n) => n.rowId === t);
}
function Ha({ items: e, fromIndex: t, step: n, rowId: r, excludeId: o }) {
  for (let i = t; i >= 0 && i < e.length; i += n) {
    let s = e[i];
    if (!s || s.rowId !== r || s.disabled) continue;
    let u = s.id;
    if (!(o != null && u === o)) return u;
  }
}
function zs(e, t, n = !1) {
  let r = e.findIndex((o) => o.id === t);
  return [...e.slice(r + 1), ...(n ? [Bp] : []), ...e.slice(0, r)];
}
var jp = 48,
  _p = 4;
function qp(e) {
  let t = [],
    n,
    r;
  for (let o of e) {
    let i = o.rowId;
    if (n && r === i) {
      n.push(o);
      continue;
    }
    let s = t.find((u) => u[0]?.rowId === i);
    (s ? (s.push(o), (n = s)) : ((n = [o]), t.push(n)), (r = i));
  }
  return t;
}
function Up(e) {
  let t = e[0];
  if (!t) return [];
  let n = 1;
  for (; n < e.length && e[n]?.rowId === t.rowId;) n += 1;
  let r = e.slice(0, n);
  if (n === e.length) return [r];
  let o = [r],
    i;
  for (; n < e.length; n += 1) {
    let s = e[n];
    if (!s) continue;
    let u = i ? i.get(s.rowId) : o.find((c) => c[0]?.rowId === s.rowId);
    if (u) {
      u.push(s);
      continue;
    }
    let a = [s];
    (o.push(a),
      i ? i.set(s.rowId, a) : o.length === _p && (i = new Map(o.map((c) => [c[0]?.rowId, c]))));
  }
  return o;
}
function li(e) {
  return e.length >= jp ? Up(e) : qp(e);
}
function Na(e) {
  let t = 0;
  for (let { length: n } of e) n > t && (t = n);
  return t;
}
function $p(e) {
  return { id: "__EMPTY_ITEM__", disabled: !0, rowId: e };
}
function Gp(e, t, n) {
  let r = Na(e);
  for (let o of e)
    for (let i = 0; i < r; i += 1) {
      let s = o[i];
      if (!s || (n && s.disabled)) {
        let u = i === 0 && n ? Yt(o) : o[i - 1];
        o[i] = u && t !== u.id && n ? u : $p(u?.rowId);
      }
    }
  return e;
}
function Yp(e) {
  let t = li(e),
    n = Na(t),
    r = [];
  for (let o = 0; o < n; o += 1)
    for (let i of t) {
      let s = i[o];
      s && r.push({ ...s, rowId: s.rowId ? `${o}` : void 0 });
    }
  return r;
}
function lr(e = {}) {
  let t = e.store?.getState(),
    n = Fa(e),
    r = te(e.activeId, t?.activeId, e.defaultActiveId),
    o = te(t?.compositeElement, t?.baseElement, null),
    i = te(
      e.compositeElementInFocusOrder,
      e.includesBaseElement,
      t?.compositeElementInFocusOrder,
      t?.includesBaseElement,
      r === null
    ),
    s = {
      ...n.getState(),
      id: te(e.id, t?.id) ?? `id-${Math.random().toString(36).slice(2, 8)}`,
      activeId: r,
      compositeElement: o,
      baseElement: o,
      compositeElementInFocusOrder: i,
      includesBaseElement: i,
      moves: te(t?.moves, 0),
      orientation: te(e.orientation, t?.orientation, "both"),
      rtl: te(e.rtl, t?.rtl, !1),
      virtualFocus: te(e.virtualFocus, t?.virtualFocus, !1),
      focusLoop: te(e.focusLoop, t?.focusLoop, !1),
      focusWrap: te(e.focusWrap, t?.focusWrap, !1),
      focusShift: te(e.focusShift, t?.focusShift, !1),
    },
    u = Ge(s, n, e.store);
  (xe(u, () =>
    Ee(
      me(u, ["compositeElement"], (l) => {
        u.setState("baseElement", l.compositeElement);
      }),
      me(u, ["baseElement"], (l) => {
        u.setState("compositeElement", l.baseElement);
      }),
      me(u, ["compositeElementInFocusOrder"], (l) => {
        u.setState("includesBaseElement", l.compositeElementInFocusOrder);
      }),
      me(u, ["includesBaseElement"], (l) => {
        u.setState("compositeElementInFocusOrder", l.includesBaseElement);
      })
    )
  ),
    xe(u, () =>
      me(u, ["renderedItems", "activeId"], (l) => {
        u.setState("activeId", (f) => (f !== void 0 ? f : Yt(l.renderedItems)?.id));
      })
    ));
  let a = (l = "next", f = {}) => {
      let d = u.getState(),
        h = te(
          f.compositeElementInFocusOrder,
          f.includesBaseElement,
          d.compositeElementInFocusOrder
        ),
        {
          skip: m = 0,
          activeId: v = d.activeId,
          focusShift: x = d.focusShift,
          focusLoop: R = d.focusLoop,
          focusWrap: b = d.focusWrap,
          renderedItems: g = d.renderedItems,
          rtl: C = d.rtl,
        } = f,
        w = l === "up" || l === "down",
        L = l === "next" || l === "down",
        S = L ? C && !w : !C || w,
        T = x && !m;
      if (!m && !b && !h && v != null && (!w || (!T && !g.some((K) => K.rowId != null)))) {
        let K = -1;
        if (g === d.renderedItems) {
          let F = g[0];
          if (F && n.item(F.id) === F) {
            let U = n.item(v);
            U?.id === v && (K = g.indexOf(U));
          }
        }
        K === -1 && (K = g.findIndex((F) => F.id === v));
        let re = g[K];
        if (re) {
          let F = S ? -1 : 1,
            U = Ha({ items: g, fromIndex: K + F, step: F, rowId: re.rowId, excludeId: v });
          return U !== void 0
            ? U
            : R && (w ? R !== "horizontal" : R !== "vertical")
              ? Ha({
                  items: g,
                  fromIndex: F === 1 ? 0 : g.length - 1,
                  step: F,
                  rowId: re.rowId,
                  excludeId: v,
                })
              : void 0;
        }
      }
      let p = w ? Fo(Gp(li(g), v, T)) : g;
      if (((p = S ? Vo(p) : p), (p = w ? Yp(p) : p), v == null)) return Yt(p)?.id;
      let P = p.find((K) => K.id === v);
      if (!P) return Yt(p)?.id;
      let M = p.some((K) => K.rowId),
        y = p.indexOf(P),
        E = p.slice(y + 1),
        I = Va(E, P.rowId);
      if (m) {
        let K = Kp(I, v);
        return (K.slice(m)[0] || K[K.length - 1])?.id;
      }
      let A = R && (w ? R !== "horizontal" : R !== "vertical"),
        V = M && b && (w ? b !== "horizontal" : b !== "vertical"),
        D = L ? (!M || w) && A && h : w ? h : !1;
      if (A) return Yt(zs(V && !D ? p : Va(p, P.rowId), v, D), v)?.id;
      if (V) {
        let K = Yt(D ? I : E, v);
        return D ? K?.id || null : K?.id;
      }
      let H = Yt(I, v);
      return !H && D ? null : H?.id;
    },
    c = (l, f) => (typeof f == "number" ? a(l, { skip: f }) : a(l, f));
  return {
    ...n,
    ...u,
    setCompositeElement: (l) => u.setState("compositeElement", l),
    setBaseElement: (l) => u.setState("compositeElement", l),
    setActiveId: (l) => u.setState("activeId", l),
    move: (l) => {
      l !== void 0 && (u.setState("activeId", l), u.setState("moves", (f) => f + 1));
    },
    first: () => Yt(u.getState().renderedItems)?.id,
    last: () => zp(u.getState().renderedItems)?.id,
    next: (l) => c("next", l),
    previous: (l) => c("previous", l),
    down: (l) => c("down", l),
    up: (l) => c("up", l),
  };
}
var Ba = zs,
  za = Yt,
  Ka = li,
  fi = new WeakSet();
function ja(e) {
  Je(e) === e && (fi.add(e), queueMicrotask(() => fi.delete(e)));
}
function _a(e) {
  fi.delete(e);
}
function Xp(e, t) {
  let { virtualFocus: n, compositeElement: r } = e.getState();
  if (!n || !r || !et(r)) {
    t();
    return;
  }
  let o = r.scrollLeft,
    i = r.scrollTop;
  (t(), (r.scrollLeft = o), (r.scrollTop = i));
}
function qa(e) {
  let t = e.getState();
  return "contentElement" in t ? t.contentElement : null;
}
function js(e) {
  let { compositeElement: t } = e.getState(),
    n = On(t);
  return n ? (t?.contains(n) || Ht(e, n) ? !0 : !!qa(e)?.contains(n)) : !1;
}
function Jp({
  store: e,
  id: t,
  focus: n,
  markedOnly: r,
  requireFocus: o,
  focusOwner: i,
  scrollIntoView: s,
  onConsume: u,
}) {
  let a = null,
    c,
    l = !1,
    f = !1,
    d = !1,
    h = !1,
    m = !1,
    v = e.getState().compositeElement,
    x = On(v),
    R = o ? i || x : null,
    b = !!v?.contains(x),
    g = (I) => {
      if (!R) return !0;
      let A = On(R);
      return A === R || A === I ? !0 : js(e);
    },
    C = (I) => {
      if ("mounted" in I) {
        if (I.mounted) h = !0;
        else if (h) return !0;
      }
      if ("open" in I) {
        if (I.open) m = !0;
        else if (m) return !0;
      }
      return t != null && I.activeId != null && I.activeId !== t;
    },
    w = (I, A) => {
      if (!("open" in I) || I.open) return !1;
      let V = qa(e);
      if (!V?.contains(A)) return !1;
      let { compositeElement: D } = I;
      return !D || V.contains(D) ? !1 : zo(A);
    },
    L = (I) => {
      let A = cn(e, c ?? (t === void 0 ? I.activeId : t));
      return A?.element?.isConnected ? ((c = A.id), A.element) : null;
    },
    S,
    T,
    p = () => {
      ((d = !0), S?.(), T?.());
    },
    P = !1,
    M = () => {
      P || ((P = !0), u?.());
    },
    y = () => {
      if (!d) return (M(), p());
    },
    E = () => {
      if (d) return;
      let I = e.getState();
      if (C(I)) return y();
      let A = !1;
      if (a) {
        if (!a.isConnected && ((A = l && !f && Je(a) === ce(a).body), (a = L(I)), !a)) return y();
      } else if (((a = L(I)), !a)) return;
      if (A) l = !1;
      else if (!g(a)) return y();
      let V = n && b && w(I, a);
      if (V) {
        let { activeId: D } = I;
        if (D != null && D !== c) return y();
      }
      if (n && !l && !V) {
        ((l = !0), M(), (f = !1));
        let D = a;
        S?.();
        let H = () => {
            f = !fi.has(D);
          },
          K = () => {
            f = !1;
          };
        if (
          (D.addEventListener("blur", H),
          D.addEventListener("focus", K),
          (S = () => {
            (D.removeEventListener("blur", H), D.removeEventListener("focus", K));
          }),
          Xp(e, () => {
            D.focus({ preventScroll: !0 });
          }),
          d)
        )
          return;
      }
      if (r && !a.hasAttribute("data-autofocus")) return V ? void 0 : y();
      if (zo(a) && !("unstable_placing" in I && I.unstable_placing)) {
        if ((V || y(), s)) {
          s(a);
          return;
        }
        a.scrollIntoView({ block: "nearest", inline: "nearest" });
      }
    };
  return (
    (T = st(e, ["activeId", "items", "mounted", "open", "unstable_placing"], E)),
    E(),
    Object.assign(p, { settle: y })
  );
}
function mi(e) {
  let t = (0, fr.useRef)(null),
    n = (0, fr.useRef)(e),
    r = (0, fr.useCallback)(() => {
      (t.current?.(), (t.current = null));
    }, []),
    o = (0, fr.useCallback)(
      (i) => {
        if (!e || n.current !== e) return;
        (t.current?.settle(), (t.current = null));
        let s = Jp({ store: e, ...i });
        return ((t.current = s), s);
      },
      [e]
    );
  return (
    $(
      () => (
        (n.current = e),
        () => {
          ((n.current = void 0), r());
        }
      ),
      [e, r]
    ),
    o
  );
}
function cn(e, t) {
  return (t && e.item(t)) || null;
}
function Ua(e, t = !1) {
  if (et(e)) e.setSelectionRange(t ? e.value.length : 0, e.value.length);
  else if (e.isContentEditable) {
    let n = ce(e).getSelection();
    (n?.selectAllChildren(e), t && n?.collapseToEnd());
  }
}
var Ks = Symbol("FOCUS_SILENTLY");
function $a(e) {
  ((e[Ks] = !0), e.focus({ preventScroll: !0 }));
}
function Ga(e) {
  let t = e[Ks];
  return (delete e[Ks], t);
}
function Ht(e, t, n) {
  if (!t || t === n) return !1;
  let r = e.item(t.id);
  return !(!r || (n && r.element === n));
}
var Pt = N(ie(), 1),
  Ja = N(de(), 1);
var Nt = N(ie(), 1),
  qs = N(jd(), 1),
  di = () => () => {};
function pi(e) {
  return Array.isArray(e);
}
function _s(e, t) {
  return e === t || (e !== e && t !== t);
}
function Zp(e, t) {
  if (e?.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n];
    if (!_s(r, t[n])) return !1;
  }
  return !0;
}
function Ya(e) {
  let [t, n] = Nt.useState(() => (e === null ? null : [...e]));
  if (e === null) return (t !== null && n(null), null);
  if (Zp(t, e)) return t;
  let r = [...e];
  return (n(r), r);
}
function z(e, t = No, n) {
  let r = Ya(pi(t) ? t : typeof t == "function" ? null : [t]),
    o = Nt.useCallback((s) => (!e || r?.length === 0 ? di() : st(e, r, s)), [e, r]),
    i = () => {
      let s = e?.getState();
      if (pi(t)) return n?.(s);
      if (typeof t == "function") return t(s);
      if (s && $e(s, t)) return s[t];
    };
  return (0, qs.useSyncExternalStore)(o, i, i);
}
function Qp(e, t) {
  let n = [],
    r = !1;
  for (let o in e) {
    let i = e[o];
    if (i !== void 0) {
      if (typeof i == "function") {
        r = !0;
        continue;
      }
      n.includes(i) || n.push(i);
    }
  }
  if (!r) return n;
  if (!t) return null;
  for (let o of t) n.includes(o) || n.push(o);
  return n;
}
function Vn(e, t, n) {
  let r = pi(t) ? (n ?? {}) : t,
    o = pi(t) ? t : void 0,
    i = Nt.useRef({}),
    s = Ya(Qp(r, o)),
    u = Nt.useCallback((c) => (!e || s?.length === 0 ? di() : st(e, s, c)), [e, s]),
    a = () => {
      let c = e?.getState(),
        l = !1,
        f = i.current;
      for (let d in r) {
        let h = r[d];
        if (h === void 0) continue;
        if (typeof h == "function") {
          let v = h(c);
          Object.is(v, f[d]) || ((f[d] = v), (l = !0));
        }
        if (typeof h == "function") continue;
        let m = c && $e(c, h) ? c[h] : void 0;
        Object.is(m, f[d]) || ((f[d] = m), (l = !0));
      }
      return (l && (i.current = { ...f }), i.current);
    };
  return (0, qs.useSyncExternalStore)(u, a, a);
}
function Ie(e, t, n, r) {
  let o = $e(t, n) ? t[n] : void 0,
    i = r ? t[r] : void 0,
    s = !!i,
    u = or({ value: o, setValue: i });
  ($(() => {
    if (s)
      return st(e, [n], (a, c) => {
        let { value: l, setValue: f } = u.current;
        f && (_s(a[n], c[n]) || _s(a[n], l) || f(a[n]));
      });
  }, [e, n, s, u]),
    $(() => {
      if (o !== void 0)
        return (
          e.setState(n, o),
          yn(e, [n], () => {
            o !== void 0 && e.setState(n, o);
          })
        );
    }));
}
function ut(e, t) {
  let [n, r] = Nt.useState(() => e(t));
  $(() => Wr(n), [n]);
  let o = Nt.useCallback((i) => z(n, i), [n]);
  return [
    Nt.useMemo(() => ({ ...n, useState: o }), [n, o]),
    _(() => {
      r((i) => e({ ...t, ...i.getState() }));
    }),
  ];
}
var eh = "button";
function th(e) {
  return tr(e) ? !0 : e.tagName === "INPUT" && !Vt(e);
}
function nh(e, t = !1) {
  let n = e.clientHeight,
    { top: r } = e.getBoundingClientRect(),
    o = Math.max(n * 0.875, n - 40) * 1.5,
    i = t ? n - o + r : o + r;
  return e.tagName === "HTML" ? i + e.scrollTop : i;
}
function rh(e, t = !1) {
  let { top: n } = e.getBoundingClientRect();
  return t ? n + e.clientHeight : n;
}
function Xa(e, t, n, r = !1) {
  if (!t || !n) return;
  let { renderedItems: o } = t.getState(),
    i = kn(e);
  if (!i) return;
  let s = nh(i, r),
    u,
    a;
  for (let c = 0; c < o.length; c += 1) {
    let l = u;
    if (((u = n(c)), !u)) break;
    if (u === l) continue;
    let f = cn(t, u)?.element;
    if (!f) continue;
    let d = rh(f, r) - s,
      h = Math.abs(d);
    if ((r && d <= 0) || (!r && d >= 0)) {
      a !== void 0 && a < h && (u = l);
      break;
    }
    a = h;
  }
  return u;
}
function oh(e, t) {
  return De(e) ? !1 : Ht(t, e.target);
}
var Br = Q(function ({
    store: t,
    rowId: n,
    preventScrollOnKeyDown: r = !1,
    moveOnKeyPress: o = !0,
    tabbable: i = !1,
    getItem: s,
    typeaheadText: u,
    "aria-setsize": a,
    "aria-posinset": c,
    unstable_scrollIntoView: l,
    ...f
  }) {
    let d = $t();
    t = t || d;
    let h = ua(f),
      m = Te(f.id),
      v = (0, Pt.useRef)(null),
      x = (0, Pt.useRef)(null),
      R = (0, Pt.useCallback)((O) => {
        let j = x.current;
        (!O && j && ja(j), O && _a(O), (x.current = O));
      }, []),
      b = (0, Pt.useContext)(Ma),
      g = dt(f),
      C = g && !h,
      w = g && f.focusable === !1,
      L = f.shouldRegisterItem,
      S = (O) => {
        if (n) return n;
        if (O && b?.compositeElement && b.compositeElement === O.compositeElement) return b.id;
      },
      {
        rowId: T,
        compositeElement: p,
        ariaSetSize: P,
        ariaPosInSet: M,
      } = Vn(t, ["compositeElement", "renderedItems"], {
        rowId: S,
        compositeElement(O) {
          return O?.compositeElement || void 0;
        },
        ariaSetSize(O) {
          if (a != null) return a;
          if (O && b?.ariaSetSize && b.compositeElement === O.compositeElement)
            return b.ariaSetSize;
        },
        ariaPosInSet(O) {
          if (c != null) return c;
          if (!O || !b?.ariaPosInSet || b.compositeElement !== O.compositeElement) return;
          let j = S(O),
            ve = O.renderedItems.filter((ye) => ye.rowId === j);
          return b.ariaPosInSet + ve.findIndex((ye) => ye.id === m);
        },
      }),
      { isActiveItem: y, isTabbable: E } = Vn(
        t,
        ["activeId", "compositeElement", "renderedItems", "virtualFocus", "items"],
        {
          isActiveItem(O) {
            return !!O && O.activeId === m;
          },
          isTabbable(O) {
            if (!O || (!O.compositeElement && !O.renderedItems.length)) return !0;
            if (O.virtualFocus) return !1;
            if (!O.renderedItems.length || i) return !0;
            if (O.activeId === null) return !1;
            let j = t?.item(O.activeId);
            return j?.disabled || !j?.element ? !0 : O.activeId === m;
          },
        }
      ),
      I = (0, Pt.useCallback)(
        (O) => {
          let j = (O.element ? aa(O.element) : void 0) ?? (w || C),
            ve = {
              ...O,
              id: m || O.id,
              rowId: T,
              disabled: j,
              children: O.element?.textContent,
              typeaheadText: u,
            };
          return s ? s(ve) : ve;
        },
        [m, T, w, C, u, s]
      ),
      A = f.onFocus,
      V = (0, Pt.useRef)(!1),
      D = (0, Pt.useRef)(null),
      H = mi(t),
      K = _((O) => {
        if ((A?.(O), O.defaultPrevented || Qc(O) || !m || !t || oh(O, t))) return;
        let { virtualFocus: j, compositeElement: ve } = t.getState();
        if ((t.setActiveId(m), tr(O.currentTarget) && Ua(O.currentTarget), !j)) {
          De(O) && t.item(m) && H({ id: m, markedOnly: !0, requireFocus: !0, scrollIntoView: l });
          return;
        }
        if (!De(O) || th(O.currentTarget)) return;
        let ye = (He, _e) => {
          if (!Ke(_e)) return;
          let Ne = He === _e || Ht(t, He);
          (t.item(m) && H({ id: m, markedOnly: !0, requireFocus: !0, scrollIntoView: l }),
            (V.current = !0),
            Ne ? $a(_e) : _e.focus({ preventScroll: !0 }));
        };
        if (ve?.isConnected) {
          ye(O.relatedTarget, ve);
          return;
        }
        if (L === !1) return;
        let { currentTarget: ke, relatedTarget: Me } = O,
          Re = () => {
            (D.current?.(), (D.current = null));
          };
        (Re(),
          (D.current = st(t, null, () => {
            if (Je(ke) !== ke) {
              Re();
              return;
            }
            let He = t.getState(),
              _e = He.compositeElement;
            _e?.isConnected && (Re(), He.virtualFocus && ye(Me, _e));
          })));
      }),
      re = f.onBlurCapture,
      F = _((O) => {
        (re?.(O),
          !O.defaultPrevented &&
            t?.getState()?.virtualFocus &&
            V.current &&
            ((V.current = !1), O.preventDefault(), O.stopPropagation()));
      }),
      U = f.onKeyDown,
      G = pe(r),
      Z = pe(o),
      he = _((O) => {
        if ((U?.(O), O.defaultPrevented || !De(O) || !t)) return;
        let { currentTarget: j } = O,
          ve = t.getState(),
          ye = !!t.item(m)?.rowId,
          ke = ve.orientation !== "horizontal",
          Me = ve.orientation !== "vertical",
          Re = () => !!(ye || Me || !ve.compositeElement || !et(ve.compositeElement)),
          He = {
            ArrowUp: (ye || ke) && t.up,
            ArrowRight: (ye || Me) && t.next,
            ArrowDown: (ye || ke) && t.down,
            ArrowLeft: (ye || Me) && t.previous,
            Home: () => {
              if (Re()) return !ye || O.ctrlKey ? t?.first() : t?.previous(-1);
            },
            End: () => {
              if (Re()) return !ye || O.ctrlKey ? t?.last() : t?.next(-1);
            },
            PageUp: () => Xa(j, t, t?.up, !0),
            PageDown: () => Xa(j, t, t?.down),
          }[O.key];
        if (He) {
          if (tr(j)) {
            let Ne = An(j),
              Dt = Me && O.key === "ArrowLeft",
              We = Me && O.key === "ArrowRight",
              ht = ke && O.key === "ArrowUp",
              Tt = ke && O.key === "ArrowDown";
            if (We || Tt) {
              let { length: Qe } = Ko(j);
              if (Ne.end !== Qe) return;
            } else if ((Dt || ht) && Ne.start !== 0) return;
          }
          let _e = He();
          if (G(O) || _e !== void 0) {
            if (!Z(O)) return;
            (O.preventDefault(), t.move(_e));
          }
        }
      }),
      Oe = (0, Pt.useMemo)(() => ({ id: m, compositeElement: p }), [m, p]);
    return (
      (f = ge(f, (O) => (0, Ja.jsx)(Pa.Provider, { value: Oe, children: O }), [Oe])),
      (f = {
        "data-active-item": y || void 0,
        ...f,
        id: m,
        ref: ae(v, R, f.ref),
        tabIndex: E ? f.tabIndex : -1,
        onFocus: K,
        onBlurCapture: F,
        onKeyDown: he,
      }),
      (f = Fr(f)),
      (f = Vs({ store: t, ...f, getItem: I, shouldRegisterItem: m ? L : !1 })),
      { ...f, "aria-setsize": P, "aria-posinset": M }
    );
  }),
  Za = Ut(
    q(function (t) {
      let n = Br(mt(t));
      return J(eh, n);
    })
  );
var Qa = new WeakMap();
function el(e, t, n) {
  let { KeyboardEvent: r } = Be(e),
    o = new r(t.type, n);
  return (Qa.set(o, hi(t)), e.dispatchEvent(o));
}
function hi(e) {
  return Qa.get(e) ?? e;
}
var ih = Symbol("cancelled"),
  Us = new WeakMap();
function Sn(e, t) {
  let n = e.getState,
    r = Us.get(n);
  if (r) return r;
  let o = t?.getState();
  if (t && o && $e(o, "moves") && $e(o, "activeId")) {
    let s = Sn(t);
    return (Us.set(n, s), s);
  }
  let i = { consumedBy: null, targetId: e.getState().activeId };
  return (
    Us.set(n, i),
    me(e, ["moves", "activeId"], (s, u) => {
      if (s.moves !== u.moves) {
        ((i.consumedBy = null), (i.targetId = s.activeId));
        return;
      }
      s.activeId !== u.activeId && (i.targetId = ih);
    }),
    i
  );
}
var Hn = N(ie(), 1),
  gi = N(de(), 1);
var sh = "div";
function uh(e) {
  return e.some((t) => !!t.rowId);
}
function ch(e) {
  let t = e.target;
  return t && !et(t) ? !1 : e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
function ah(e) {
  return e.key === "Shift" || e.key === "Control" || e.key === "Alt" || e.key === "Meta";
}
function tl(e, t, n) {
  return _((r) => {
    if ((t?.(r), r.defaultPrevented || r.isPropagationStopped() || !De(r) || ah(r) || ch(r)))
      return;
    let o = e.getState(),
      i = cn(e, o.activeId)?.element;
    if (!i) return;
    let { view: s, ...u } = r;
    (i !== n?.current && i.focus({ preventScroll: !0 }),
      el(i, r.nativeEvent, u) || r.preventDefault(),
      r.currentTarget.contains(i) && r.stopPropagation());
  });
}
function lh(e) {
  return za(Fo(Vo(Ka(e))));
}
function nl(e, t) {
  let { consumedBy: n } = Sn(e);
  return !n || n === t;
}
function rl(e, t, n) {
  e.getState().moves === n && (Sn(e).consumedBy = t);
}
var fh = Ut(function ({
    store: t,
    focusOnMove: n,
    previousElementRef: r,
    present: o,
    scrollIntoView: i,
  }) {
    let s = z(t, "moves"),
      u = z(t, "compositeElement"),
      a = (0, Hn.useMemo)(() => ({}), [t.getState]);
    return (
      (0, Hn.useEffect)(() => {
        let c = Sn(t);
        if (!s || !n || !nl(t, a)) return;
        let { activeId: l } = t.getState();
        if (l != null && l === c.targetId)
          return o({
            id: l,
            requireFocus: js(t),
            focus: !0,
            scrollIntoView: i,
            onConsume: () => rl(t, a, s),
          });
      }, [t, s, n, u, o, i, a]),
      $(() => {
        let c = Sn(t);
        if (!s || !u || !nl(t, a)) return;
        let { activeId: l } = t.getState();
        if (l !== null || l !== c.targetId) return;
        rl(t, a, s);
        let f = r.current;
        ((r.current = null),
          f && Dn(f, { relatedTarget: u }),
          wt(u) ||
            (Ke(u) && u.scrollIntoView({ block: "nearest", inline: "nearest" }),
            u.focus({ preventScroll: !0 })));
      }, [t, s, u, r, a]),
      null
    );
  }),
  zr = Q(function ({
    store: t,
    composite: n = !0,
    focusOnMove: r = n,
    moveOnKeyPress: o = !0,
    unstable_scrollIntoView: i,
    ...s
  }) {
    let u = Ia();
    ((t = t || u), fe(t, !1));
    let a = (0, Hn.useRef)(null),
      c = (0, Hn.useRef)(null),
      l = mi(t),
      [, f] = ti(n ? t.setCompositeElement : null),
      d = z(t, "virtualFocus"),
      h = z(t, n && d ? ["activeId"] : [], (P) => (n && d ? P.activeId : null));
    $(() => {
      if (!t || !n || !d) return;
      let P = c.current;
      if (((c.current = null), !P)) return;
      let M = cn(t, h)?.element || Je(P);
      M !== P && Dn(P, { relatedTarget: M });
    }, [t, h, d, n]);
    let m = tl(t, s.onKeyDownCapture, c),
      v = tl(t, s.onKeyUpCapture, c),
      x = s.onFocusCapture,
      R = _((P) => {
        if ((x?.(P), P.defaultPrevented || !t)) return;
        let { virtualFocus: M } = t.getState();
        if (!M) return;
        let y = P.relatedTarget,
          E = Ga(P.currentTarget);
        De(P) && E && (P.stopPropagation(), (c.current = y));
      }),
      b = s.onFocus,
      g = _((P) => {
        if ((b?.(P), P.defaultPrevented || !n || !t)) return;
        let { relatedTarget: M } = P,
          { virtualFocus: y } = t.getState();
        if (y)
          De(P) &&
            !Ht(t, M) &&
            queueMicrotask(() =>
              l({ focus: !0, markedOnly: !0, requireFocus: !0, scrollIntoView: i })
            );
        else if (De(P)) {
          if (!Ht(t, M)) {
            let { activeId: E } = t.getState();
            E != null && l({ id: E, markedOnly: !0, requireFocus: !0, scrollIntoView: i });
          }
          t.setActiveId(null);
        }
      }),
      C = s.onBlurCapture,
      w = _((P) => {
        if ((C?.(P), P.defaultPrevented || !t)) return;
        let { virtualFocus: M, activeId: y, compositeElement: E } = t.getState();
        if (!M || P.currentTarget !== E) return;
        let I = cn(t, y)?.element,
          A = P.relatedTarget,
          V = Ht(t, A),
          D = c.current;
        ((c.current = null),
          De(P) && V
            ? (A === I ? D && D !== A && Dn(D, P) : I ? Dn(I, P) : D && Dn(D, P),
              P.stopPropagation())
            : !Ht(t, P.target) && I && Dn(I, P));
      }),
      L = s.onKeyDown,
      S = pe(o),
      T = _((P) => {
        if ((L?.(P), P.nativeEvent.isComposing || P.defaultPrevented || !t || !De(P))) return;
        let { orientation: M, items: y, renderedItems: E, activeId: I, rtl: A } = t.getState(),
          V = cn(t, I);
        if (V?.element?.isConnected) return;
        let D = V && I != null,
          H = D ? y : E,
          K = M !== "horizontal",
          re = M !== "vertical",
          F = uh(H);
        if (
          (P.key === "ArrowLeft" ||
            P.key === "ArrowRight" ||
            P.key === "Home" ||
            P.key === "End") &&
          et(P.currentTarget)
        )
          return;
        let Oe = {
          ArrowUp:
            (F || K) &&
            (() => (D ? t.up({ activeId: I, renderedItems: H }) : F ? lh(E)?.id : t?.last())),
          ArrowRight:
            (F || re) &&
            (() => (D ? t.next({ activeId: I, renderedItems: H }) : A ? t.last() : t.first())),
          ArrowDown:
            (F || K) && (() => (D ? t.down({ activeId: I, renderedItems: H }) : t.first())),
          ArrowLeft:
            (F || re) &&
            (() => (D ? t.previous({ activeId: I, renderedItems: H }) : A ? t.first() : t.last())),
          Home: t.first,
          End: t.last,
          PageUp: t.first,
          PageDown: t.last,
        }[P.key];
        if (Oe) {
          let O = Oe();
          if (O !== void 0) {
            if (!S(P)) return;
            (P.preventDefault(), t.move(O));
          }
        }
      });
    ((s = ge(
      s,
      (P) =>
        (0, gi.jsxs)(Gt, {
          value: t,
          children: [
            P,
            n &&
              (0, gi.jsx)(fh, {
                store: t,
                focusOnMove: r,
                previousElementRef: c,
                present: l,
                scrollIntoView: i,
              }),
          ],
        }),
      [t, n, r, l]
    )),
      (s = {
        "aria-activedescendant": z(t, n && d ? ["items"] : [], () => {
          if (t && n && d) return cn(t, h)?.id;
        }),
        ...s,
        ref: ae(a, f, s.ref),
        onKeyDownCapture: m,
        onKeyUpCapture: v,
        onFocusCapture: R,
        onFocus: g,
        onBlurCapture: w,
        onKeyDown: T,
      }));
    let p = z(t, n && !d ? ["activeId"] : [], (P) => n && (d || P.activeId === null));
    return ((s = un({ focusable: p, ...s })), s);
  }),
  ol = q(function (t) {
    let n = zr(t);
    return J(sh, n);
  });
var Kr = qe(),
  qx = Kr.useContext,
  Ux = Kr.useScopedContext,
  jr = Kr.useProviderContext,
  il = Kr.ContextProvider,
  sl = Kr.ScopedContextProvider;
var $s = N(ie(), 1),
  _r = qe([il], [sl]),
  Xx = _r.useContext,
  Jx = _r.useScopedContext,
  Nn = _r.useProviderContext,
  ul = _r.ContextProvider,
  mr = _r.ScopedContextProvider,
  bi = (0, $s.createContext)(void 0),
  cl = (0, $s.createContext)(void 0);
var Wn = N(ie(), 1),
  Gs = N(de(), 1);
var ml = N(To(), 1),
  mh = "div";
function al(e, t) {
  let n = setTimeout(t, e);
  return () => clearTimeout(n);
}
function ll(e) {
  let t = e?.trim() || "0s",
    n = t.endsWith("ms") ? 1 : 1e3,
    r = Number.parseFloat(t) * n;
  return Number.isNaN(r) ? 0 : r;
}
function fl(e, t, n) {
  let r = e.split(","),
    o = t.split(","),
    i = n.split(","),
    s = 0;
  for (let [u, a] of r.entries()) {
    if (a.trim() === "none") continue;
    let c = ll(o[u % o.length]),
      l = ll(i[u % i.length]);
    s = Math.max(s, c + l);
  }
  return s;
}
function dh(e) {
  let {
    transitionProperty: t,
    transitionDuration: n,
    transitionDelay: r,
    animationName: o,
    animationDuration: i,
    animationDelay: s,
  } = getComputedStyle(e);
  return Math.max(fl(t, r, n), fl(o, s, i));
}
function an(e, t, n) {
  return !n && t !== !1 && (!e || !!t);
}
var qr = Q(function ({ store: t, alwaysVisible: n, unstable_otherElementRef: r, ...o }) {
    let i = jr();
    ((t = t || i), fe(t, !1));
    let s = (0, Wn.useRef)(null),
      u = Te(o.id),
      [a, c] = (0, Wn.useState)(null),
      {
        open: l,
        mounted: f,
        animated: d,
        contentElement: h,
      } = Vn(t, {
        open: "open",
        mounted: "mounted",
        animated: "animated",
        contentElement: "contentElement",
      }),
      m = z(t.disclosure, "contentElement"),
      v = (0, Wn.useRef)(!1);
    ($(() => {
      s.current && t?.setContentElement(s.current);
    }, [t]),
      $(() => {
        let g;
        return (
          t?.setState("animated", (C) => ((g = C), !0)),
          () => {
            g !== void 0 && t?.setState("animated", g);
          }
        );
      }, [t]),
      $(() => {
        if (!d) {
          l ? v.current && ((v.current = !1), c("enter")) : ((v.current = !0), c(null));
          return;
        }
        if (!h?.isConnected) {
          c(null);
          return;
        }
        return Gc(() => {
          c(l ? "enter" : f ? "leave" : null);
        });
      }, [d, h, l, f]),
      $(() => {
        if (!t || !d || !a || !h) return;
        let g = () => t?.setState("animating", !1),
          C = () => (0, ml.flushSync)(g);
        if ((a === "leave" && l) || (a === "enter" && !l)) return;
        if (typeof d == "number") return al(d, C);
        let w = [h];
        m && w.push(m);
        let L = r?.current;
        L && w.push(L);
        let S = Math.max(...w.map(dh));
        if (!S) {
          (a === "enter" && t.setState("animated", !1), g());
          return;
        }
        return al(Math.max(S - 1e3 / 60, 0), C);
      }, [t, d, h, m, r, l, a]),
      (o = ge(o, (g) => (0, Gs.jsx)(mr, { value: t, children: g }), [t])));
    let x = an(f, o.hidden, n),
      R = o.style,
      b = (0, Wn.useMemo)(() => (x ? { ...R, display: "none" } : R), [x, R]);
    return (
      (o = {
        "data-open": l || void 0,
        "data-enter": a === "enter" || void 0,
        "data-leave": a === "leave" || void 0,
        hidden: x,
        ...o,
        id: u,
        ref: ae(u ? t.setContentElement : null, s, o.ref),
        style: b,
      }),
      bn(o)
    );
  }),
  ph = q(function (t) {
    let n = qr(t);
    return J(mh, n);
  }),
  oy = q(function ({ unmountOnHide: t, ...n }) {
    let r = jr(),
      o = n.store || r;
    return z(o, ["mounted"], (i) => !t || i?.mounted) === !1 ? null : (0, Gs.jsx)(ph, { ...n });
  });
function hh(e) {
  let t = e?.unstable_onHideRequest,
    n = e?.unstable_requestHide;
  if (t && n) return { onHideRequest: t, requestHide: n };
}
function vi(e = {}) {
  let t =
    e.store || e.disclosure
      ? Cn(e.store, ar(e.disclosure, ["contentElement", "disclosureElement"]))
      : void 0;
  let n = t?.getState(),
    r = te(e.open, n?.open, e.defaultOpen, !1),
    o = te(e.animated, n?.animated, !1),
    i = {
      open: r,
      animated: o,
      animating: !!o && r,
      mounted: r,
      contentElement: te(n?.contentElement, null),
      disclosureElement: te(n?.disclosureElement, null),
    },
    s = t ? Ge(i, t) : Ge(i);
  (xe(s, () =>
    me(s, ["animated", "animating"], (d) => {
      d.animated || s.setState("animating", !1);
    })
  ),
    xe(s, () =>
      st(s, ["open"], () => {
        s.getState().animated && s.setState("animating", !0);
      })
    ),
    xe(s, () =>
      me(s, ["open", "animating"], (d) => {
        s.setState("mounted", d.open || d.animating);
      })
    ));
  let u = hh(e.store),
    a = new Map(),
    c =
      u?.onHideRequest ??
      ((d) =>
        d === l
          ? () => {}
          : (a.set(d, (a.get(d) ?? 0) + 1),
            () => {
              let h = a.get(d);
              if (h != null) {
                if (h > 1) {
                  a.set(d, h - 1);
                  return;
                }
                a.delete(d);
              }
            })),
    l =
      u?.requestHide ??
      ((d) => {
        let h = [...a.keys()],
          m = (v) => {
            let x = h[v];
            if (!x) {
              d();
              return;
            }
            x(() => m(v + 1));
          };
        m(0);
      });
  xe(s, () => {
    if (e.disclosure) return c(e.disclosure.unstable_requestHide);
  });
  let f = (d) => {
    let { open: h } = s.getState(),
      m = gn(d, h);
    if (!h || m) {
      s.setState("open", m);
      return;
    }
    l(() => s.setState("open", !1));
  };
  return {
    ...s,
    disclosure: e.disclosure,
    setOpen: f,
    show: () => s.setState("open", !0),
    hide: () => f(!1),
    toggle: () => f((d) => !d),
    unstable_onHideRequest: c,
    unstable_requestHide: l,
    stopAnimation: () => s.setState("animating", !1),
    setContentElement: (d) => s.setState("contentElement", d),
    setDisclosureElement: (d) => s.setState("disclosureElement", d),
  };
}
function Ys(e, t, n) {
  return (
    It(t, [n.store, n.disclosure, t]),
    Ie(e, n, "open", "setOpen"),
    Ie(e, n, "mounted", "setMounted"),
    Ie(e, n, "animated"),
    Object.assign(e, { disclosure: n.disclosure })
  );
}
function dl(e = {}) {
  let [t, n] = ut(vi, e);
  return Ys(t, n, e);
}
var Ur = qe([ul], [mr]),
  bh = Ur.useContext,
  dy = Ur.useScopedContext,
  $r = Ur.useProviderContext,
  xi = Ur.ContextProvider,
  wn = Ur.ScopedContextProvider;
var Gr = N(ie(), 1),
  yi = (0, Gr.createContext)(null),
  Yr = qe([xi, xn], [wn, Gt]),
  Xs = Yr.useContext,
  dr = Yr.useScopedContext,
  Ci = Yr.useProviderContext,
  pl = Yr.ContextProvider,
  hl = Yr.ScopedContextProvider,
  gl = (0, Gr.createContext)(void 0),
  bl = (0, Gr.createContext)(!1),
  Js = (0, Gr.createContext)(null);
function vl(e, t, n) {
  return (It(t, [n.store, t]), Ie(e, n, "items", "setItems"), e);
}
function Zs(e) {
  return { id: Te(e.id), ...e };
}
function Xr(e, t, n) {
  ((e = vl(e, t, n)), Sn(e, n.store), Ie(e, n, "activeId", "setActiveId"));
  let r = { compositeElementInFocusOrder: n.compositeElementInFocusOrder ?? n.includesBaseElement };
  return (
    Ie(e, r, "compositeElementInFocusOrder"),
    Ie(e, n, "virtualFocus"),
    Ie(e, n, "orientation"),
    Ie(e, n, "rtl"),
    Ie(e, n, "focusLoop"),
    Ie(e, n, "focusWrap"),
    Ie(e, n, "focusShift"),
    e
  );
}
function xl(e = {}) {
  e = Zs(e);
  let [t, n] = ut(lr, e);
  return Xr(t, n, e);
}
var vh = "hr",
  Qs = Q(function ({ orientation: t = "horizontal", ...n }) {
    return ((n = { role: "separator", "aria-orientation": t, ...n }), n);
  }),
  Ry = q(function (t) {
    let n = Qs(t);
    return J(vh, n);
  });
var xh = "hr",
  eu = Q(function ({ store: t, orientation: n, ...r }) {
    let o = $t();
    ((t = t || o), fe(t, !1));
    let i = z(
      t,
      ["orientation"],
      (s) => n ?? (s.orientation === "horizontal" ? "vertical" : "horizontal")
    );
    return ((r = Qs({ ...r, orientation: i })), r);
  }),
  yh = q(function (t) {
    let n = eu(t);
    return J(xh, n);
  });
var yl = N(de(), 1),
  Ch = "div",
  tu = Q(function ({ autoFocusOnShow: t = !0, ...n }) {
    return ((n = ge(n, (r) => (0, yl.jsx)(Qo.Provider, { value: t, children: r }), [t])), n);
  }),
  Ny = q(function (t) {
    let n = tu(t);
    return J(Ch, n);
  });
var Cl = N(ie(), 1),
  nu = (0, Cl.createContext)(0);
var Sl = N(ie(), 1),
  wl = N(de(), 1);
function El({ level: e, children: t }) {
  let n = (0, Sl.useContext)(nu),
    r = Math.max(Math.min(e || n + 1, 6), 1);
  return (0, wl.jsx)(nu.Provider, { value: r, children: t });
}
var Sh = "span";
function ru(e) {
  return {
    borderWidth: 0,
    clipPath: "inset(50%)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: "1px",
    ...e,
  };
}
var ou = Q(function (t) {
    return ((t = { ...t, style: ru(t.style) }), t);
  }),
  _y = q(function (t) {
    let n = ou(t);
    return J(Sh, n);
  });
var wh = "span",
  Eh = Q(function (t) {
    return (
      (t = {
        "data-focus-trap": "",
        tabIndex: 0,
        "aria-hidden": !0,
        ...t,
        style: { position: "fixed", top: 0, left: 0, ...t.style },
      }),
      (t = ou(t)),
      t
    );
  }),
  Jr = q(function (t) {
    let n = Eh(t);
    return J(wh, n);
  });
var Il = N(ie(), 1),
  iu = (0, Il.createContext)(null);
var ct = N(ie(), 1),
  ot = N(de(), 1),
  su = N(To(), 1),
  Ih = "div";
function Pl(e) {
  let t = ce(e),
    { fullscreenElement: n } = t,
    r = Be(e).HTMLElement;
  return r && n instanceof r ? n : t.body;
}
function Ph(e, t) {
  return t ? (typeof t == "function" ? t(e) : t) : ce(e).createElement("div");
}
function Mh(e = "id") {
  return `${e ? `${e}-` : ""}${Math.random().toString(36).slice(2, 8)}`;
}
function En(e) {
  queueMicrotask(() => {
    e?.focus();
  });
}
function Ml(e, t) {
  return { ref: e, node: t, cleanup: Lr(e, t) };
}
function Rl(e) {
  typeof e.cleanup == "function" ? e.cleanup() : Lr(e.ref, null);
}
var uu = Q(function ({
    preserveTabOrder: t,
    preserveTabOrderAnchor: n,
    portalElement: r,
    portalRef: o,
    portal: i = !0,
    ...s
  }) {
    let u = (0, ct.useRef)(null),
      a = ae(u, s.ref),
      c = (0, ct.useContext)(iu),
      [l, f] = (0, ct.useState)(null),
      [d, h] = (0, ct.useState)(null),
      m = (0, ct.useRef)(null),
      v = (0, ct.useRef)(null),
      x = (0, ct.useRef)(null),
      R = (0, ct.useRef)(null),
      b = or(o),
      g = (0, ct.useRef)(null);
    return (
      $(() => {
        let C = u.current;
        if (!C || !i) {
          f(null);
          return;
        }
        let w = Ph(C, r);
        if (!w) {
          f(null);
          return;
        }
        let L = w.isConnected;
        return (
          L || (c || Pl(C)).appendChild(w),
          w.id || (w.id = C.id ? `portal/${C.id}` : Mh()),
          f(w),
          (g.current = Ml(b.current, w)),
          () => {
            let S = g.current;
            (S && ((g.current = null), Rl(S)), L || w.remove());
          }
        );
      }, [i, r, c, b]),
      $(() => {
        let C = g.current;
        C && C.ref !== o && (Rl(C), (g.current = Ml(o, C.node)));
      }, [o]),
      (0, ct.useEffect)(() => {
        if (!l || c || r) return;
        let C = ce(l),
          w = () => {
            let L = Pl(l);
            l.parentElement !== L && L.appendChild(l);
          };
        return (
          l.isConnected && w(),
          C.addEventListener("fullscreenchange", w),
          () => {
            C.removeEventListener("fullscreenchange", w);
          }
        );
      }, [l, c, r]),
      $(() => {
        if (!i || !t || !n) return;
        let C = ce(n).createElement("span");
        return (
          (C.style.position = "fixed"),
          n.insertAdjacentElement("afterend", C),
          h(C),
          () => {
            (C.remove(), h(null));
          }
        );
      }, [i, t, n]),
      (0, ct.useEffect)(() => {
        if (!l || !t) return;
        let C = 0,
          w = (L) => {
            if (!qt(L)) return;
            let S = L.type === "focusin";
            if ((cancelAnimationFrame(C), S)) return ia(l);
            C = requestAnimationFrame(() => {
              oa(l, !0);
            });
          };
        return (
          l.addEventListener("focusin", w, !0),
          l.addEventListener("focusout", w, !0),
          () => {
            (cancelAnimationFrame(C),
              l.removeEventListener("focusin", w, !0),
              l.removeEventListener("focusout", w, !0));
          }
        );
      }, [l, t]),
      (s = ge(
        s,
        (C) => {
          if (((C = (0, ot.jsx)(iu.Provider, { value: l || c, children: C })), !i)) return C;
          if (!l)
            return (0, ot.jsx)("span", {
              ref: a,
              id: s.id,
              style: { position: "fixed" },
              hidden: !0,
            });
          ((C = (0, ot.jsxs)(ot.Fragment, {
            children: [
              t &&
                (0, ot.jsx)(Jr, {
                  ref: v,
                  "data-focus-trap": s.id,
                  className: "__focus-trap-inner-before",
                  onFocus: (L) => {
                    qt(L, l) ? En(Xo()) : En(m.current);
                  },
                }),
              C,
              t &&
                (0, ot.jsx)(Jr, {
                  ref: x,
                  "data-focus-trap": s.id,
                  className: "__focus-trap-inner-after",
                  onFocus: (L) => {
                    qt(L, l) ? En(ks()) : En(R.current);
                  },
                }),
            ],
          })),
            (C = (0, su.createPortal)(C, l)));
          let w = (0, ot.jsxs)(ot.Fragment, {
            children: [
              t &&
                (0, ot.jsx)(Jr, {
                  ref: m,
                  "data-focus-trap": s.id,
                  className: "__focus-trap-outer-before",
                  onFocus: (L) => {
                    L.relatedTarget !== R.current && qt(L, l) ? En(v.current) : En(ks());
                  },
                }),
              t && (0, ot.jsx)("span", { "aria-owns": l.id, style: { position: "fixed" } }),
              t &&
                (0, ot.jsx)(Jr, {
                  ref: R,
                  "data-focus-trap": s.id,
                  className: "__focus-trap-outer-after",
                  onFocus: (L) => {
                    if (qt(L, l)) En(x.current);
                    else {
                      let S = Xo();
                      if (S === v.current) {
                        requestAnimationFrame(() => Xo()?.focus());
                        return;
                      }
                      En(S);
                    }
                  },
                }),
            ],
          });
          return (
            d && t && (w = (0, su.createPortal)(w, d)),
            (0, ot.jsxs)(ot.Fragment, { children: [w, C] })
          );
        },
        [l, c, i, s.id, t, d]
      )),
      (s = { ...s, ref: a }),
      s
    );
  }),
  eC = q(function (t) {
    let n = uu(t);
    return J(Ih, n);
  });
function Si(e, ...t) {
  if (!e) return !1;
  let n = e.getAttribute("data-backdrop");
  return n == null ? !1 : n === "" || n === "true" || !t.length ? !0 : t.some((r) => n === r);
}
var Al = new WeakMap();
function Rh(e, t, n) {
  for (; n.length;) {
    let r = n[n.length - 1];
    if (!r) {
      e.delete(t);
      return;
    }
    if (!r.disposed) return;
    (n.pop(), r.cleanup());
  }
  e.delete(t);
}
function pr(e, t, n) {
  let r = Al.get(e);
  r || ((r = new Map()), Al.set(e, r));
  let o = r.get(t) ?? [],
    i = { cleanup: n(), disposed: !1 };
  return (
    o.length || r.set(t, o),
    o.push(i),
    () => {
      o.includes(i) && ((i.disposed = !0), Rh(r, t, o));
    }
  );
}
function Zr(e, t, n) {
  return pr(e, t, () => {
    let o = e.getAttribute(t);
    return (
      e.setAttribute(t, n),
      () => {
        o == null ? e.removeAttribute(t) : e.setAttribute(t, o);
      }
    );
  });
}
function Xt(e, t, n) {
  return pr(e, t, () => {
    let o = t in e,
      i = e[t];
    return (
      (e[t] = n),
      () => {
        o ? (e[t] = i) : delete e[t];
      }
    );
  });
}
function hr(e, t) {
  return e
    ? pr(e, "style", () => {
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
function Qr(e, t, n) {
  return e
    ? pr(e, t, () => {
        let o = e.style.getPropertyValue(t),
          i = e.style.getPropertyPriority(t);
        return (
          e.style.setProperty(t, n),
          () => {
            o ? e.style.setProperty(t, o, i) : e.style.removeProperty(t);
          }
        );
      })
    : () => {};
}
function cu(e, t) {
  if (!t) return !1;
  if (t.get(e)?.has("ancestorMark")) return !0;
  do {
    if (t.get(e)?.has("mark")) return !0;
    if (!e.parentElement) return !1;
    e = e.parentElement;
  } while (!0);
}
var wi = new WeakMap();
function gr(e = "", t = "outside") {
  return `__ariakit-dialog-${t}${e ? `-${e}` : ""}`;
}
function kl(e, t = "") {
  return Ee(Xt(e, gr(), !0), Xt(e, gr(t), !0));
}
function Ei(e, t = "") {
  return Ee(Xt(e, gr("", "ancestor"), !0), Xt(e, gr(t, "ancestor"), !0));
}
function au(e, t) {
  let n = new WeakSet();
  wi.set(e, n);
  for (let r of t) r && n.add(r);
  return () => {
    wi.get(e) === n && wi.delete(e);
  };
}
function eo(e, t) {
  let n = wi.get(t);
  if (!n) return !1;
  do {
    if (n.has(e)) return !0;
    if (!e.parentElement) return !1;
    e = e.parentElement;
  } while (!0);
}
function Bn(e, t) {
  let n = gr(t, "ancestor");
  if (e[n]) return !0;
  let r = gr(t);
  do {
    if (e[r]) return !0;
    if (!e.parentElement) return !1;
    e = e.parentElement;
  } while (!0);
}
function Ii(e) {
  return { cleanups: new Map(), previousCleanups: e };
}
function to({ walk: e, element: t, kind: n, setup: r }) {
  let o = e.cleanups.get(t) ?? new Map();
  if (o.has(n)) return;
  e.cleanups.set(t, o);
  let i = e.previousCleanups?.get(t),
    s = i?.get(n);
  (i?.delete(n), o.set(n, s ?? r()));
}
function Pi(e) {
  return (e.previousCleanups && no(e.previousCleanups), e.cleanups);
}
function Mi({ walk: e, element: t, id: n, ids: r }) {
  Si(t, ...r) || to({ walk: e, element: t, kind: "mark", setup: () => kl(t, n) });
}
function Ri({ walk: e, ancestor: t, element: n, id: r }) {
  (n.hasAttribute("data-dialog") && n.id !== r) ||
    to({ walk: e, element: t, kind: "ancestorMark", setup: () => Ei(t, r) });
}
function no(e) {
  for (let t of e.values()) for (let n of t.values()) n();
  e.clear();
}
function lu(e) {
  return `__ariakit-dialog-snapshot-${e}`;
}
function fu(e, t) {
  let n = lu(e),
    r = [];
  for (let o of t) r.push(Xt(o, n, !0));
  return () => {
    for (let o of r) o();
  };
}
var Ah = ["SCRIPT", "STYLE"];
function kh(e, t) {
  let n = ce(t),
    r = lu(e);
  if (!n.body[r]) return !0;
  do {
    if (t === n.body) return !1;
    if (t[r]) return !0;
    if (!t.parentElement) return !1;
    t = t.parentElement;
  } while (!0);
}
function Dh(e, t, n) {
  return Ah.includes(t.tagName) || !kh(e, t) ? !1 : !n.some((r) => r && we(t, r));
}
function ro(e, t, n, r) {
  for (let o of t) {
    if (!o?.isConnected) continue;
    let i = t.some((a) => (!a || a === o ? !1 : a.contains(o))),
      s = ce(o),
      u = o;
    for (; o.parentElement && o !== s.body;) {
      if ((r?.(o.parentElement, u), !i))
        for (let a of o.parentElement.children) Dh(e, a, t) && n(a, u);
      o = o.parentElement;
    }
  }
}
function Dl(e, t) {
  let { body: n } = ce(t[0]),
    r = [];
  return (
    ro(e, t, (o) => {
      r.push(o);
    }),
    Ee(Xt(n, lu(e), !0), fu(e, r))
  );
}
function Tl(e, t, n) {
  let r = Ii(n),
    o = t.map((i) => i?.id);
  return (
    ro(
      e,
      t,
      (i) => {
        Mi({ walk: r, element: i, id: e, ids: o });
      },
      (i, s) => {
        Ri({ walk: r, ancestor: i, element: s, id: e });
      }
    ),
    Pi(r)
  );
}
var Ol = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "svg",
];
var Th = "div",
  bC = Q(function (t) {
    return t;
  }),
  br = q(function (t) {
    return J(Th, t);
  });
Object.assign(
  br,
  Ol.reduce(
    (e, t) => (
      (e[t] = q(function (r) {
        return J(t, r);
      })),
      e
    ),
    {}
  )
);
var ki = N(ie(), 1),
  Ai = N(de(), 1);
function Ll({ store: e, backdrop: t, backdropRef: n, alwaysVisible: r, hidden: o }) {
  let i = (0, ki.useRef)(null),
    s = dl({ disclosure: e }),
    u = z(e, "contentElement");
  ($(() => {
    let l = i.current,
      f = u;
    l && f && (l.style.zIndex = getComputedStyle(f).zIndex);
  }, [u]),
    $(() => {
      let l = u?.id;
      if (!l) return;
      let f = i.current;
      if (f) return Ei(f, l);
    }, [u]));
  let a = qr({
    ref: ae(i, n),
    store: s,
    role: "presentation",
    "data-backdrop": u?.id || "",
    alwaysVisible: r,
    ...(o != null && { hidden: o }),
    style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 },
  });
  return t
    ? (0, ki.isValidElement)(t)
      ? (0, Ai.jsx)(br, { ...a, render: t })
      : (0, Ai.jsx)(br, { ...a, render: (0, Ai.jsx)(typeof t != "boolean" ? t : "div", {}) })
    : null;
}
function Di(e = {}) {
  return vi(e);
}
function mu(e, t, n) {
  return Ys(e, t, n);
}
function du(e = {}) {
  let [t, n] = ut(Di, e);
  return mu(t, n, e);
}
function zn(e, ...t) {
  if (!e) return !1;
  let n = e.getAttribute("data-dialog-hidden-dismiss");
  return n == null ? !1 : n === "" || !t.length ? !0 : t.some((r) => n === r);
}
function oo() {
  return "inert" in HTMLElement.prototype;
}
function Fl(e) {
  return Zr(e, "aria-hidden", "true");
}
function Vl(e, ...t) {
  if (!e) return !1;
  let n = e.getAttribute("data-focus-trap");
  return n == null ? !1 : t.length ? (n === "" ? !1 : t.some((r) => n === r)) : !0;
}
function pu(e, t) {
  if (!("style" in e)) return Ft;
  if (oo()) return Xt(e, "inert", !0);
  let n = Yo(e, !0).map((r) => {
    if (t?.some((i) => i && we(i, r))) return Ft;
    let o = pr(
      r,
      "focus",
      () => (
        (r.focus = Ft),
        () => {
          delete r.focus;
        }
      )
    );
    return Ee(Zr(r, "tabindex", "-1"), o);
  });
  return Ee(...n, Fl(e), hr(e, { pointerEvents: "none", userSelect: "none", cursor: "default" }));
}
function Lh({ walk: e, element: t, elements: n, ids: r }) {
  Si(t, ...r) ||
    Vl(t, ...r) ||
    zn(t, ...r) ||
    to({ walk: e, element: t, kind: "disable", setup: () => pu(t, n) });
}
function Fh(e, t, n) {
  t.hasAttribute("role") &&
    (n.some((r) => r && we(r, t)) ||
      to({ walk: e, element: t, kind: "role", setup: () => Zr(t, "role", "none") }));
}
function Hl(e, t, n) {
  n && !oo() && no(n);
  let r = Ii(n),
    o = t.map((i) => i?.id);
  return (
    ro(
      e,
      t,
      (i) => {
        (Mi({ walk: r, element: i, id: e, ids: o }),
          Lh({ walk: r, element: i, elements: t, ids: o }));
      },
      (i, s) => {
        (Ri({ walk: r, ancestor: i, element: s, id: e }), Fh(r, i, t));
      }
    ),
    Pi(r)
  );
}
var Ti = N(ie(), 1);
function hu(e) {
  let t = [e];
  for (;;) {
    let n;
    try {
      n = Be(e).frameElement;
    } catch {
      return t;
    }
    if (!ze(n)) return t;
    (t.push(n), (e = n));
  }
}
function gu(e, t) {
  let n = e.composedPath().filter(ze);
  !n.length && ze(e.target) && n.push(e.target);
  let r = n[0];
  if (r) for (let i of hu(r).slice(1)) n.includes(i) || n.push(i);
  let o = t?.getRootNode();
  return {
    elements: n,
    rootTarget: o ? n.find((i) => i.getRootNode() === o) || e.target : n[0] || e.target,
  };
}
function Nl(e, t, n) {
  let r = (0, Ti.useRef)(null);
  return (
    (0, Ti.useEffect)(() => {
      if (!e) {
        r.current = null;
        return;
      }
      return Ae(
        "mousedown",
        (i) => {
          r.current = gu(i, n);
        },
        !0,
        t
      );
    }, [e, t, n]),
    r
  );
}
var Oi = N(ie(), 1);
function Bl(e) {
  let t = hu(e).at(-1);
  return Be(t ?? e);
}
function Wl(e) {
  return e.isConnected;
}
function Vh(e, t) {
  if (!e) return !1;
  if (we(e, t)) return !0;
  let n = t.getAttribute("aria-activedescendant");
  if (n) {
    let r = ce(t).getElementById(n);
    if (r) return we(e, r);
  }
  return !1;
}
function Hh(e, t) {
  if (!("clientY" in e)) return !1;
  let n = t.getBoundingClientRect();
  return n.width === 0 || n.height === 0
    ? !1
    : n.top <= e.clientY &&
        e.clientY <= n.top + n.height &&
        n.left <= e.clientX &&
        e.clientX <= n.left + n.width;
}
function Nh(e, t, n) {
  return we(t, e) || Vh(n, e) || e.hasAttribute("data-focus-trap") || zn(e, t.id) ? !0 : eo(e, t);
}
function zl(e, t, n) {
  return e.elements.some((r) => Nh(r, t, n));
}
function bu({
  store: e,
  type: t,
  listener: n,
  capture: r,
  open: o,
  contentElement: i,
  focusedRef: s,
}) {
  let u = _(n);
  (0, Oi.useEffect)(() => {
    if (!o) return;
    let a = (l) => {
        let { contentElement: f, disclosureElement: d } = e.getState();
        if (!f) return;
        let h = gu(l, f),
          m = h.elements[0],
          v = h.rootTarget;
        if (!ze(v) || (m && !Wl(m)) || !Wl(v) || zl(h, f, d)) return;
        let x = ce(f);
        if (ce(v) !== x) {
          u(l);
          return;
        }
        (ce(m ?? v) === x && Hh(l, f)) || (s.current && !Bn(v, f.id)) || u(l);
      },
      c = i ? Bl(i) : void 0;
    return Ae(t, a, r, c);
  }, [o, r, e, t, u, i, s]);
}
function vu(e, t) {
  return typeof e == "function" ? e(t) : !!e;
}
function Kl({
  store: e,
  hideOnInteractOutside: t,
  domReady: n,
  interactedOutsideRef: r,
  focusedStoreRef: o,
}) {
  let i = z(e, "open"),
    s = z(e, "contentElement"),
    u = s ? Bl(s) : void 0,
    a = Nl(i, u, s),
    c = (0, Oi.useRef)(!1);
  $(() => {
    if (!i || !n || !s) return;
    c.current = !1;
    let d = () => {
      ((c.current = !0), (o.current = e));
    };
    return (s.addEventListener("focusin", d, !0), () => s.removeEventListener("focusin", d, !0));
  }, [i, n, s, e, o]);
  let l = { store: e, capture: !0, open: i, contentElement: s, focusedRef: c },
    f = () => {
      (e.hide(), e.getState().open && (r.current = !1));
    };
  (bu({
    ...l,
    type: "click",
    listener: (d) => {
      let { contentElement: h, disclosureElement: m } = e.getState(),
        v = a.current;
      if (!v || !h || zl(v, h, m)) return;
      let x = v.rootTarget;
      ze(x) && ((ce(x) === ce(h) && !Bn(x, h.id)) || (vu(t, d) && ((r.current = !0), f())));
    },
  }),
    bu({
      ...l,
      type: "focusin",
      listener: (d) => {
        let { contentElement: h } = e.getState();
        if (!h || d.target === ce(h) || !vu(t, d)) return;
        let m = d.target;
        (ze(m) && ce(m) !== ce(h) && (r.current = !0), f());
      },
    }),
    bu({
      ...l,
      type: "contextmenu",
      listener: (d) => {
        vu(t, d) && ((r.current = !0), f());
      },
    }));
}
var Wt = N(ie(), 1),
  _l = N(de(), 1);
var jl = (0, Wt.createContext)({});
function ql(e) {
  let t = (0, Wt.useContext)(jl),
    [n, r] = (0, Wt.useState)([]),
    o = (0, Wt.useCallback)(
      (s) => (
        r((u) => [...u, s]),
        Ee(t.add?.(s), () => {
          r((u) => u.filter((a) => a !== s));
        })
      ),
      [t]
    );
  $(
    () =>
      me(e, ["open", "contentElement"], (s) => {
        if (s.open && s.contentElement) return t.add?.(e);
      }),
    [e, t]
  );
  let i = (0, Wt.useMemo)(() => ({ store: e, add: o }), [e, o]);
  return {
    wrapElement: (0, Wt.useCallback)(
      (s) => (0, _l.jsx)(jl.Provider, { value: i, children: s }),
      [i]
    ),
    nestedDialogs: n,
  };
}
var Ul = N(ie(), 1),
  $l = N(To(), 1);
function Gl({ attribute: e, contentId: t, contentElement: n, enabled: r }) {
  let [o, i] = ir(),
    s = (0, Ul.useCallback)(() => {
      if (!r || !n) return !1;
      let { body: u } = ce(n),
        a = u.getAttribute(e);
      return !a || a === t;
    }, [o, r, n, e, t]);
  return (
    $(() => {
      if (!r || !t || !n) return;
      let { body: u } = ce(n);
      if (s()) return (u.setAttribute(e, t), () => u.removeAttribute(e));
      let a = new MutationObserver(() => (0, $l.flushSync)(i));
      return (a.observe(u, { attributeFilter: [e] }), () => a.disconnect());
    }, [o, r, t, n, s, e, i]),
    s
  );
}
var Xl = N(ie(), 1),
  Jl = nr() && !Zc(),
  Wh = Jl ? Xl.useEffect : $;
function Bh(e) {
  let { CSS: t } = e;
  return !!t?.supports("scrollbar-gutter", "stable");
}
function Yl(e) {
  let t = e.getBoundingClientRect().left;
  return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function Zl(e, t, n) {
  let r = Gl({
    attribute: "data-dialog-prevent-body-scroll",
    contentElement: e,
    contentId: t,
    enabled: n,
  });
  Wh(() => {
    if (!r() || !e) return;
    let o = ce(e),
      i = Be(e),
      { documentElement: s, body: u } = o,
      a = s.style.getPropertyValue("--scrollbar-width"),
      c = a ? Number.parseInt(a, 10) : i.innerWidth - s.clientWidth,
      l = () => {
        let h = i.getComputedStyle(s),
          m = h.getPropertyValue("scrollbar-gutter"),
          v = m.includes("stable"),
          x = (C) => !C || C === "visible",
          R = !x(h.getPropertyValue("overflow-x")) || !x(h.getPropertyValue("overflow-y")),
          b = () => Ee(Qr(s, "overflow-x", "hidden"), Qr(s, "overflow-y", "hidden")),
          g = (C) => (R ? Ee(C, b()) : C);
        return !v && !c
          ? g(hr(u, { overflow: "hidden" }))
          : v || Bh(i)
            ? Ee(Qr(s, "scrollbar-gutter", v ? m : "stable"), b())
            : g(
                Ee(
                  Qr(s, "--scrollbar-width", `${c}px`),
                  hr(u, { overflow: "hidden", [Yl(s)]: `${c}px` })
                )
              );
      },
      f = () => {
        let { scrollX: h, scrollY: m, visualViewport: v } = i,
          x = v?.offsetLeft ?? 0,
          R = v?.offsetTop ?? 0,
          b = hr(u, {
            position: "fixed",
            overflow: "hidden",
            top: `${-(m - Math.floor(R))}px`,
            left: `${-(h - Math.floor(x))}px`,
            right: "0",
            [Yl(s)]: `${c}px`,
          });
        return () => {
          (b(), i.scrollTo({ left: h, top: m, behavior: "instant" }));
        };
      };
    if (Jl) return f();
    let d = l();
    return () => {
      queueMicrotask(d);
    };
  }, [r, e]);
}
var Pe = N(ie(), 1),
  tt = N(de(), 1);
var nf = new WeakSet();
function zh(e) {
  nf.add(e);
}
function yu(e) {
  return nf.has(e);
}
var vr = new Map();
function Kh(e, t = {}) {
  return (
    vr.set(e, t),
    () => {
      vr.delete(e);
    }
  );
}
function jh(e) {
  let t = [];
  for (let n of vr.keys()) {
    if (n === e) break;
    let { current: r } = n;
    r?.isConnected && ((e.current && we(r, e.current)) || t.push(r));
  }
  return t;
}
function _h(e) {
  let t = !1;
  for (let [n, r] of vr) {
    if (n === e) {
      t = !0;
      continue;
    }
    t && r.onEarlierDialogElementChange?.();
  }
}
function qh(e) {
  let t = e.current;
  if (!t || !Bn(t)) return !1;
  let n = vr.get(e)?.getOutsideCleanups?.(),
    r = !1,
    o = !1;
  for (let [i, s] of vr) {
    if (i === e) {
      r = !0;
      continue;
    }
    let u = i.current;
    if (u && cu(t, s.getOutsideCleanups?.())) {
      if (r || !cu(u, n)) return !0;
      o = !0;
    }
  }
  return !(r && o);
}
var Uh = "div",
  $h = rr(),
  xu = new WeakSet(),
  Ql = new WeakSet();
function Gh(e) {
  let t = Je(e);
  return !t || (e && we(e, t)) || zn(t, e?.id) ? !1 : !!Ke(t);
}
function Yh(e) {
  let t = e;
  for (; t.shadowRoot;) {
    let n = t.shadowRoot.activeElement;
    if (!ze(n)) break;
    t = n;
  }
  return t;
}
function ef(e, t, n) {
  return we(t, e) || (n && we(n, e)) ? !0 : eo(e, t);
}
function Xh(e) {
  let t = e.querySelectorAll("[data-dialog-dismiss]");
  for (let n of t) if (n.closest("[data-dialog]") === e) return !0;
  return !1;
}
function tf(e, t = !1) {
  if (!e) return null;
  let n = "current" in e ? e.current : e;
  return n ? (t ? (Ke(n) ? n : null) : n) : null;
}
function Jh(e) {
  if (!e.isConnected) return [];
  let t = e.getRootNode(),
    n = t.querySelectorAll("[data-dialog][data-dialog-portal][data-open]"),
    r = [],
    o = !1;
  for (let i of n) {
    if (i === e) {
      o = !0;
      continue;
    }
    if (!o) continue;
    let s = i.getAttribute("data-dialog-portal");
    if (!s) continue;
    let u = t.getElementById(s);
    !u || !we(u, i) || xu.has(u) || r.push(u);
  }
  return r;
}
var Cu = Q(function ({
  store: t,
  open: n,
  onClose: r,
  focusable: o = !0,
  modal: i = !0,
  portal: s = i,
  backdrop: u = i,
  hideOnEscape: a = !0,
  hideOnInteractOutside: c = !0,
  getPersistentElements: l,
  preventBodyScroll: f = i,
  autoFocusOnShow: d = !0,
  autoFocusOnHide: h = !0,
  initialFocus: m,
  finalFocus: v,
  unmountOnHide: x,
  unstable_treeSnapshotKey: R,
  ...b
}) {
  let g = Nn(),
    C = (0, Pe.useRef)(null),
    w = (0, Pe.useRef)(null),
    L = i && s && !b.portalElement,
    S = (0, Pe.useRef)(!1),
    T = _(() => {
      let k = C.current;
      if (!k) return !0;
      let ee = new Event("close", { bubbles: !1, cancelable: !0 });
      return (
        r && k.addEventListener("close", r, { once: !0 }),
        k.dispatchEvent(ee),
        !ee.defaultPrevented
      );
    }),
    p = du({
      store: t || g,
      open: n,
      setOpen(k) {
        k || S.current || T() || p.setOpen(!0);
      },
    });
  $(
    () =>
      p.unstable_onHideRequest((k) => {
        if (!S.current) {
          S.current = !0;
          try {
            if (!T()) return;
            k();
          } finally {
            S.current = !1;
          }
        }
      }),
    [p, T]
  );
  let { portalRef: P, portalNode: M, domReady: y } = sr(s, b.portalRef),
    E = b.preserveTabOrder,
    I = z(p, ["mounted"], (k) => E && !i && k.mounted),
    A = Te(b.id),
    V = z(p, "open"),
    D = z(p, "mounted"),
    H = z(p, "contentElement"),
    K = an(D, b.hidden, b.alwaysVisible);
  Zl(H, A, f && !K);
  let re = (0, Pe.useRef)(!1),
    F = (0, Pe.useRef)(null);
  ($(
    () =>
      me(p, ["open"], (k) => {
        if (!k.open) {
          F.current = null;
          return;
        }
        ((re.current = !1), F.current !== p && (F.current = null));
      }),
    [p]
  ),
    Kl({
      store: p,
      hideOnInteractOutside: c,
      domReady: y,
      interactedOutsideRef: re,
      focusedStoreRef: F,
    }));
  let { wrapElement: U, nestedDialogs: G } = ql(p);
  b = ge(b, U, [U]);
  let Z = (0, Pe.useRef)(null);
  ($h &&
    (0, Pe.useEffect)(() => {
      if (!y) return;
      let k = C.current;
      if (!k) return;
      let ee = ce(k),
        oe = (X) => {
          Z.current = X.target;
        };
      return (
        ee.addEventListener("mousedown", oe, !0),
        () => {
          ee.removeEventListener("mousedown", oe, !0);
        }
      );
    }, [y]),
    $(() => {
      if (!V || F.current === p) return;
      let k = C.current;
      if (
        (() => {
          let { disclosureElement: se } = p.getState();
          return !(!se || yu(se) || !se.isConnected || (k && we(k, se)));
        })()
      )
        return;
      let oe = (se) => {
          (zh(se), p.setDisclosureElement(se));
        },
        X = Je(k, { activeDescendant: !0 });
      if (X) {
        if (X.tagName === "BODY") {
          let se = Z.current;
          if (((Z.current = null), !se?.isConnected || !Ke(se) || (k && we(k, se)))) return;
          oe(se);
          return;
        }
        (k && we(k, X)) || oe(X);
      }
    }, [p, V]),
    (0, Pe.useEffect)(() => {
      if (!D || !y) return;
      let k = C.current;
      if (!k) return;
      let ee = Be(k),
        oe = ee.visualViewport || ee,
        X = () => {
          let se = ee.visualViewport?.height ?? ee.innerHeight;
          k.style.setProperty("--dialog-viewport-height", `${se}px`);
        };
      return (
        X(),
        oe.addEventListener("resize", X),
        () => {
          oe.removeEventListener("resize", X);
        }
      );
    }, [D, y]));
  let [he, Oe] = (0, Pe.useState)(!1);
  ($(() => {
    if (!(i && V && y) || !H) {
      Oe(!1);
      return;
    }
    let k = () => {
      Oe(!Xh(H));
    };
    k();
    let { MutationObserver: ee } = Be(H),
      oe = new ee(k);
    return (oe.observe(H, { childList: !0, subtree: !0 }), () => oe.disconnect());
  }, [i, V, y, H]),
    $(() => {
      if (!oo() || V || !D || !y) return;
      let k = C.current;
      if (k) return pu(k);
    }, [V, D, y]));
  let O = V && y,
    j = (0, Pe.useRef)(null);
  $(() => {
    if (!A || !L || !O || !M) {
      j.current = null;
      return;
    }
    let k = C.current;
    if (!k || !we(M, k)) {
      j.current = null;
      return;
    }
    return (
      j.current?.portal !== M && (j.current = { portal: M, peers: Jh(k) }),
      xu.add(M),
      () => {
        xu.delete(M);
      }
    );
  }, [A, O, L, M]);
  let ve = !!O,
    [ye, ke] = (0, Pe.useState)(0);
  $(() => {
    if (ve)
      return Kh(C, {
        getOutsideCleanups: () => He.current?.outsideCleanups,
        onEarlierDialogElementChange: () => {
          ke((k) => k + 1);
        },
      });
  }, [ve]);
  let Me = (0, Pe.useRef)(null);
  ($(() => {
    if (!ve) {
      Me.current = null;
      return;
    }
    if (!H) return;
    let k = Me.current;
    ((Me.current = H), k && k !== H && _h(C));
  }, [ve, H]),
    $(() => {
      if (!A || !O) return;
      let k = C.current;
      return Dl(A, [k]);
    }, [A, O, R]),
    $(() => {
      if (!A || !O) return;
      let k = jh(C);
      return fu(A, k);
    }, [A, O, ye]));
  let Re = _(l),
    He = (0, Pe.useRef)(null);
  ($(
    () => () => {
      let k = He.current;
      k && ((He.current = null), k.restoreInsideMarks(), no(k.outsideCleanups));
    },
    [A, p, O, H, i, L, Re, R]
  ),
    $(() => {
      if (!A || !O) return;
      let { disclosureElement: k } = p.getState(),
        ee = H ?? C.current;
      if (!ee) return;
      let oe = [
          ee,
          ...(Re() || []),
          ...(j.current?.peers || []),
          ...G.map((lt) => lt.getState().contentElement),
        ],
        X = He.current;
      X?.restoreInsideMarks();
      let se = au(ee, oe),
        Fe = i ? Hl(A, oe, X?.outsideCleanups) : Tl(A, [k, ...oe], X?.outsideCleanups);
      He.current = { restoreInsideMarks: se, outsideCleanups: Fe };
    }, [A, p, O, H, i, L, Re, G, R, ye]));
  let _e = !!d,
    Ne = pe(d),
    [Dt, We] = (0, Pe.useState)(!1);
  (0, Pe.useEffect)(() => {
    if (!V || !_e || !y || !H?.isConnected) return;
    let k =
        tf(m, !0) || H.querySelector("[data-autofocus=true],[autofocus]") || Lo(H, !0, s && I) || H,
      ee = Ke(k);
    Ne(ee ? k : null) &&
      (We(!0),
      queueMicrotask(() => {
        let { open: oe, disclosureElement: X } = p.getState();
        if (!oe) return;
        let se = Je(H, { frame: !1 }),
          Fe = se && Yh(se);
        (F.current === p && se && Fe && Ke(Fe) && !ef(se, H, X) && !ef(Fe, H, X)) ||
          (Ke(k) && k.scrollIntoView({ block: "nearest", inline: "nearest" }),
          k.focus({ preventScroll: !0 }));
      }));
  }, [V, _e, y, H, m, s, I, p, Ne, F]);
  let ht = !!h,
    Tt = pe(h),
    [Qe, Ot] = (0, Pe.useState)(!1);
  $(() => {
    if (V) return (Ot(!0), () => Ot(!1));
  }, [V]);
  let gt = (0, Pe.useCallback)(
      (k, ee = !0) => {
        if (re.current) return;
        let { disclosureElement: oe } = p.getState();
        if (Gh(k)) return;
        let X = tf(v) || oe;
        if (X?.id) {
          let Fe = ce(X),
            lt = `[aria-activedescendant="${X.id}"]`,
            xt = Fe.querySelector(lt);
          xt && (X = xt);
        }
        if (X && !Ke(X)) {
          let Fe = X.closest("[data-dialog]");
          if (Fe?.id) {
            let lt = ce(Fe),
              xt = `[aria-controls~="${Fe.id}"]`,
              ft = lt.querySelector(xt);
            ft && (X = ft);
          }
        }
        let se = X && Ke(X);
        if (!se && ee) {
          requestAnimationFrame(() => gt(k, !1));
          return;
        }
        Tt(se ? X : null) && se && X?.focus();
      },
      [p, v, Tt]
    ),
    bt = (0, Pe.useRef)(!1);
  ($(() => {
    if (V || !Qe || !ht) return;
    let k = C.current;
    ((bt.current = !0), gt(k));
  }, [V, Qe, y, ht, gt]),
    (0, Pe.useEffect)(() => {
      if (!Qe || !ht) return;
      let k = C.current;
      return () => {
        if (bt.current) {
          bt.current = !1;
          return;
        }
        gt(k);
      };
    }, [Qe, ht, gt]));
  let jt = pe(a),
    [Xe] = (0, Pe.useState)(() => new WeakMap()),
    [Lt] = (0, Pe.useState)(() => new WeakMap()),
    Jn = b.onKeyDown,
    Zn = b.onKeyDownCapture,
    Y = b.onFocusCapture,
    ue = _((k) => {
      if ((Y?.(k), !p.getState().open)) return;
      let ee = k.target;
      Or(ee) && we(k.currentTarget, ee) && (F.current = p);
    }),
    Ce = _((k) => {
      if (k.key !== "Escape" || !k.bubbles) return !1;
      let ee = Xe.get(k);
      if (ee) return k.defaultPrevented && !ee.defaultPrevented ? !1 : ee.accepted;
      if (k.defaultPrevented) return !1;
      let oe = C.current;
      if (!D || !oe) return !1;
      let X = hi(k),
        se = Lt.get(X);
      return (
        se || ((se = { accepted: !qh(C) && !Ql.has(X) && jt(k), hidden: !1 }), Lt.set(X, se)),
        Xe.set(k, { accepted: se.accepted, defaultPrevented: k.defaultPrevented }),
        se.accepted
      );
    }),
    Le = _((k) => {
      let ee = Ce(k);
      if ((Xe.delete(k), !ee)) return !1;
      let oe = hi(k),
        X = Lt.get(oe);
      return (X?.hidden || (X && (X.hidden = !0), Ql.add(oe), p.hide()), !0);
    }),
    Ue = _((k) => {
      let ee = k.nativeEvent,
        oe = ee.cancelBubble;
      if ((Jn?.(k), oe)) {
        Xe.delete(ee);
        return;
      }
      Le(ee) && k.stopPropagation();
    }),
    St = _((k) => {
      let ee = k.nativeEvent,
        oe = ee.cancelBubble;
      if ((Zn?.(k), oe)) {
        Xe.delete(ee);
        return;
      }
      Ce(ee) && (k.isPropagationStopped() || ee.cancelBubble) && Le(ee);
    });
  ((0, Pe.useEffect)(() => {
    if (!y || !D) return;
    let k = (X) => {
        if (X.key !== "Escape" || !X.bubbles) return;
        if (X.cancelBubble) {
          Xe.delete(X);
          return;
        }
        if (Xe.has(X)) return;
        let se = C.current;
        if (!se) return;
        let Fe = [X.target, X.composedPath()[0]].filter(Or),
          { disclosureElement: lt } = p.getState(),
          xt = (ft) =>
            !!(
              (ze(ft) && ft.tagName === "BODY") ||
              we(se, ft) ||
              !lt ||
              we(lt, ft) ||
              (ze(ft) && Bn(ft, se.id)) ||
              (ze(ft) && zn(ft, se.id))
            );
        Fe.some(xt) && Ce(X) && X.cancelBubble && Le(X);
      },
      ee = (X) => {
        if (Xe.has(X)) {
          if (X.cancelBubble) {
            Xe.delete(X);
            return;
          }
          Le(X) && X.stopPropagation();
        }
      },
      oe = H ? Be(H) : void 0;
    return Ee(Ae("keydown", k, !0, oe), Ae("keydown", ee, !1, oe));
  }, [p, y, D, H, Le, Ce, Xe]),
    (b = ge(b, (k) => (0, tt.jsx)(El, { level: i ? 1 : void 0, children: k }), [i])));
  let pn = b.hidden,
    tn = b.alwaysVisible;
  ((b = ge(
    b,
    (k) =>
      (0, tt.jsxs)(tt.Fragment, {
        children: [
          he &&
            (0, tt.jsx)("button", {
              type: "button",
              tabIndex: -1,
              "data-dialog-hidden-dismiss": A || "",
              style: ru(),
              onClick: p.hide,
              children: "Dismiss popup",
            }),
          k,
        ],
      }),
    [he, A, p]
  )),
    (b = ge(
      b,
      (k) =>
        (0, tt.jsxs)(tt.Fragment, {
          children: [
            !!u &&
              (0, tt.jsx)(Ll, {
                store: p,
                backdrop: u,
                backdropRef: w,
                hidden: pn,
                alwaysVisible: tn,
              }),
            k,
          ],
        }),
      [p, u, pn, tn]
    )));
  let [Qn, vt] = (0, Pe.useState)(),
    [hn, B] = (0, Pe.useState)();
  return (
    (b = ge(
      b,
      (k) =>
        (0, tt.jsx)(mr, {
          value: p,
          children: (0, tt.jsx)(bi.Provider, {
            value: vt,
            children: (0, tt.jsx)(cl.Provider, { value: B, children: k }),
          }),
        }),
      [p]
    )),
    (b = {
      "data-dialog": "",
      role: "dialog",
      tabIndex: o ? -1 : void 0,
      "aria-labelledby": b["aria-label"] != null ? void 0 : Qn,
      "aria-describedby": hn,
      ...b,
      "data-dialog-portal": L ? M?.id : void 0,
      id: A,
      ref: ae(C, b.ref),
      onFocusCapture: ue,
      onKeyDown: Ue,
      onKeyDownCapture: St,
    }),
    (b = tu({ ...b, autoFocusOnShow: Dt })),
    (b = qr({ store: p, ...b, unstable_otherElementRef: w })),
    (b = un({ ...b, focusable: o })),
    (b = uu({ portal: s, ...b, portalRef: P, preserveTabOrder: I })),
    b
  );
});
function Kn(e, t = Nn) {
  return q(function (r) {
    let o = t(),
      i = r.store || o;
    return z(i, ["mounted"], (s) => !r.unmountOnHide || s?.mounted || !!r.open)
      ? (0, tt.jsx)(e, { ...r })
      : null;
  });
}
var rf = Kn(
    q(function (t) {
      let n = Cu(t);
      return J(Uh, n);
    }),
    Nn
  ),
  Zh = q(function (t) {
    let n = du({ open: t.open });
    return (0, tt.jsx)(rf, { ...t, store: n });
  }),
  FS = q(function (t) {
    let n = Nn();
    return t.store || n || !t.unmountOnHide ? (0, tt.jsx)(rf, { ...t }) : (0, tt.jsx)(Zh, { ...t });
  });
function xr(e) {
  return e.split("-")[0];
}
var Nf = N(ie(), 1),
  Iu = N(de(), 1);
var Mt = Math.min,
  at = Math.max,
  so = Math.round,
  uo = Math.floor,
  ln = (e) => ({ x: e, y: e }),
  Qh = { left: "right", right: "left", bottom: "top", top: "bottom" },
  eg = { start: "end", end: "start" };
function Fi(e, t, n) {
  return at(e, Mt(t, n));
}
function fn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jt(e) {
  return e.split("-")[0];
}
function jn(e) {
  return e.split("-")[1];
}
function Vi(e) {
  return e === "x" ? "y" : "x";
}
function Hi(e) {
  return e === "y" ? "height" : "width";
}
function mn(e) {
  return ["top", "bottom"].includes(Jt(e)) ? "y" : "x";
}
function Ni(e) {
  return Vi(mn(e));
}
function of(e, t, n) {
  n === void 0 && (n = !1);
  let r = jn(e),
    o = Ni(e),
    i = Hi(o),
    s =
      o === "x"
        ? r === (n ? "end" : "start")
          ? "right"
          : "left"
        : r === "start"
          ? "bottom"
          : "top";
  return (t.reference[i] > t.floating[i] && (s = io(s)), [s, io(s)]);
}
function sf(e) {
  let t = io(e);
  return [Li(e), t, Li(t)];
}
function Li(e) {
  return e.replace(/start|end/g, (t) => eg[t]);
}
function tg(e, t, n) {
  let r = ["left", "right"],
    o = ["right", "left"],
    i = ["top", "bottom"],
    s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? o : r) : t ? r : o;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function uf(e, t, n, r) {
  let o = jn(e),
    i = tg(Jt(e), n === "start", r);
  return (o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Li)))), i);
}
function io(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Qh[t]);
}
function ng(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Su(e) {
  return typeof e != "number" ? ng(e) : { top: e, right: e, bottom: e, left: e };
}
function _n(e) {
  let { x: t, y: n, width: r, height: o } = e;
  return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function cf(e, t, n) {
  let { reference: r, floating: o } = e,
    i = mn(t),
    s = Ni(t),
    u = Hi(s),
    a = Jt(t),
    c = i === "y",
    l = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    d = r[u] / 2 - o[u] / 2,
    h;
  switch (a) {
    case "top":
      h = { x: l, y: r.y - o.height };
      break;
    case "bottom":
      h = { x: l, y: r.y + r.height };
      break;
    case "right":
      h = { x: r.x + r.width, y: f };
      break;
    case "left":
      h = { x: r.x - o.width, y: f };
      break;
    default:
      h = { x: r.x, y: r.y };
  }
  switch (jn(t)) {
    case "start":
      h[s] -= d * (n && c ? -1 : 1);
      break;
    case "end":
      h[s] += d * (n && c ? -1 : 1);
      break;
  }
  return h;
}
var af = async (e, t, n) => {
  let { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: s } = n,
    u = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t)),
    c = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: l, y: f } = cf(c, r, a),
    d = r,
    h = {},
    m = 0;
  for (let v = 0; v < u.length; v++) {
    let { name: x, fn: R } = u[v],
      {
        x: b,
        y: g,
        data: C,
        reset: w,
      } = await R({
        x: l,
        y: f,
        initialPlacement: r,
        placement: d,
        strategy: o,
        middlewareData: h,
        rects: c,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((l = b ?? l),
      (f = g ?? f),
      (h = { ...h, [x]: { ...h[x], ...C } }),
      w &&
        m <= 50 &&
        (m++,
        typeof w == "object" &&
          (w.placement && (d = w.placement),
          w.rects &&
            (c =
              w.rects === !0
                ? await s.getElementRects({ reference: e, floating: t, strategy: o })
                : w.rects),
          ({ x: l, y: f } = cf(c, d, a))),
        (v = -1)));
  }
  return { x: l, y: f, placement: d, strategy: o, middlewareData: h };
};
async function Wi(e, t) {
  var n;
  t === void 0 && (t = {});
  let { x: r, y: o, platform: i, rects: s, elements: u, strategy: a } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: l = "viewport",
      elementContext: f = "floating",
      altBoundary: d = !1,
      padding: h = 0,
    } = fn(t, e),
    m = Su(h),
    x = u[d ? (f === "floating" ? "reference" : "floating") : f],
    R = _n(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n
            ? x
            : x.contextElement ||
              (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(u.floating))),
        boundary: c,
        rootBoundary: l,
        strategy: a,
      })
    ),
    b =
      f === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(u.floating)),
    C = (await (i.isElement == null ? void 0 : i.isElement(g)))
      ? (await (i.getScale == null ? void 0 : i.getScale(g))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    w = _n(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: u,
            rect: b,
            offsetParent: g,
            strategy: a,
          })
        : b
    );
  return {
    top: (R.top - w.top + m.top) / C.y,
    bottom: (w.bottom - R.bottom + m.bottom) / C.y,
    left: (R.left - w.left + m.left) / C.x,
    right: (w.right - R.right + m.right) / C.x,
  };
}
var lf = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    let { x: n, y: r, placement: o, rects: i, platform: s, elements: u, middlewareData: a } = t,
      { element: c, padding: l = 0 } = fn(e, t) || {};
    if (c == null) return {};
    let f = Su(l),
      d = { x: n, y: r },
      h = Ni(o),
      m = Hi(h),
      v = await s.getDimensions(c),
      x = h === "y",
      R = x ? "top" : "left",
      b = x ? "bottom" : "right",
      g = x ? "clientHeight" : "clientWidth",
      C = i.reference[m] + i.reference[h] - d[h] - i.floating[m],
      w = d[h] - i.reference[h],
      L = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c)),
      S = L ? L[g] : 0;
    (!S || !(await (s.isElement == null ? void 0 : s.isElement(L)))) &&
      (S = u.floating[g] || i.floating[m]);
    let T = C / 2 - w / 2,
      p = S / 2 - v[m] / 2 - 1,
      P = Mt(f[R], p),
      M = Mt(f[b], p),
      y = P,
      E = S - v[m] - M,
      I = S / 2 - v[m] / 2 + T,
      A = Fi(y, I, E),
      V =
        !a.arrow && jn(o) != null && I !== A && i.reference[m] / 2 - (I < y ? P : M) - v[m] / 2 < 0,
      D = V ? (I < y ? I - y : I - E) : 0;
    return {
      [h]: d[h] + D,
      data: { [h]: A, centerOffset: I - A - D, ...(V && { alignmentOffset: D }) },
      reset: V,
    };
  },
});
var ff = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "flip",
      options: e,
      async fn(t) {
        var n, r;
        let {
            placement: o,
            middlewareData: i,
            rects: s,
            initialPlacement: u,
            platform: a,
            elements: c,
          } = t,
          {
            mainAxis: l = !0,
            crossAxis: f = !0,
            fallbackPlacements: d,
            fallbackStrategy: h = "bestFit",
            fallbackAxisSideDirection: m = "none",
            flipAlignment: v = !0,
            ...x
          } = fn(e, t);
        if ((n = i.arrow) != null && n.alignmentOffset) return {};
        let R = Jt(o),
          b = mn(u),
          g = Jt(u) === u,
          C = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)),
          w = d || (g || !v ? [io(u)] : sf(u)),
          L = m !== "none";
        !d && L && w.push(...uf(u, v, m, C));
        let S = [u, ...w],
          T = await Wi(t, x),
          p = [],
          P = ((r = i.flip) == null ? void 0 : r.overflows) || [];
        if ((l && p.push(T[R]), f)) {
          let I = of(o, s, C);
          p.push(T[I[0]], T[I[1]]);
        }
        if (((P = [...P, { placement: o, overflows: p }]), !p.every((I) => I <= 0))) {
          var M, y;
          let I = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1,
            A = S[I];
          if (A) return { data: { index: I, overflows: P }, reset: { placement: A } };
          let V =
            (y = P.filter((D) => D.overflows[0] <= 0).sort(
              (D, H) => D.overflows[1] - H.overflows[1]
            )[0]) == null
              ? void 0
              : y.placement;
          if (!V)
            switch (h) {
              case "bestFit": {
                var E;
                let D =
                  (E = P.filter((H) => {
                    if (L) {
                      let K = mn(H.placement);
                      return K === b || K === "y";
                    }
                    return !0;
                  })
                    .map((H) => [
                      H.placement,
                      H.overflows.filter((K) => K > 0).reduce((K, re) => K + re, 0),
                    ])
                    .sort((H, K) => H[1] - K[1])[0]) == null
                    ? void 0
                    : E[0];
                D && (V = D);
                break;
              }
              case "initialPlacement":
                V = u;
                break;
            }
          if (o !== V) return { reset: { placement: V } };
        }
        return {};
      },
    }
  );
};
async function rg(e, t) {
  let { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Jt(n),
    u = jn(n),
    a = mn(n) === "y",
    c = ["left", "top"].includes(s) ? -1 : 1,
    l = i && a ? -1 : 1,
    f = fn(t, e),
    {
      mainAxis: d,
      crossAxis: h,
      alignmentAxis: m,
    } = typeof f == "number"
      ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
      : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...f };
  return (
    u && typeof m == "number" && (h = u === "end" ? m * -1 : m),
    a ? { x: h * l, y: d * c } : { x: d * c, y: h * l }
  );
}
var mf = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          let { x: o, y: i, placement: s, middlewareData: u } = t,
            a = await rg(t, e);
          return s === ((n = u.offset) == null ? void 0 : n.placement) &&
            (r = u.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  df = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          let { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: u = {
                fn: (x) => {
                  let { x: R, y: b } = x;
                  return { x: R, y: b };
                },
              },
              ...a
            } = fn(e, t),
            c = { x: n, y: r },
            l = await Wi(t, a),
            f = mn(Jt(o)),
            d = Vi(f),
            h = c[d],
            m = c[f];
          if (i) {
            let x = d === "y" ? "top" : "left",
              R = d === "y" ? "bottom" : "right",
              b = h + l[x],
              g = h - l[R];
            h = Fi(b, h, g);
          }
          if (s) {
            let x = f === "y" ? "top" : "left",
              R = f === "y" ? "bottom" : "right",
              b = m + l[x],
              g = m - l[R];
            m = Fi(b, m, g);
          }
          let v = u.fn({ ...t, [d]: h, [f]: m });
          return { ...v, data: { x: v.x - n, y: v.y - r } };
        },
      }
    );
  },
  pf = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          let { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: u = 0, mainAxis: a = !0, crossAxis: c = !0 } = fn(e, t),
            l = { x: n, y: r },
            f = mn(o),
            d = Vi(f),
            h = l[d],
            m = l[f],
            v = fn(u, t),
            x =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (a) {
            let g = d === "y" ? "height" : "width",
              C = i.reference[d] - i.floating[g] + x.mainAxis,
              w = i.reference[d] + i.reference[g] - x.mainAxis;
            h < C ? (h = C) : h > w && (h = w);
          }
          if (c) {
            var R, b;
            let g = d === "y" ? "width" : "height",
              C = ["top", "left"].includes(Jt(o)),
              w =
                i.reference[f] -
                i.floating[g] +
                ((C && ((R = s.offset) == null ? void 0 : R[f])) || 0) +
                (C ? 0 : x.crossAxis),
              L =
                i.reference[f] +
                i.reference[g] +
                (C ? 0 : ((b = s.offset) == null ? void 0 : b[f]) || 0) -
                (C ? x.crossAxis : 0);
            m < w ? (m = w) : m > L && (m = L);
          }
          return { [d]: h, [f]: m };
        },
      }
    );
  },
  hf = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          let { placement: n, rects: r, platform: o, elements: i } = t,
            { apply: s = () => {}, ...u } = fn(e, t),
            a = await Wi(t, u),
            c = Jt(n),
            l = jn(n),
            f = mn(n) === "y",
            { width: d, height: h } = r.floating,
            m,
            v;
          c === "top" || c === "bottom"
            ? ((m = c),
              (v =
                l === ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating))) ? "start" : "end")
                  ? "left"
                  : "right"))
            : ((v = c), (m = l === "end" ? "top" : "bottom"));
          let x = h - a.top - a.bottom,
            R = d - a.left - a.right,
            b = Mt(h - a[m], x),
            g = Mt(d - a[v], R),
            C = !t.middlewareData.shift,
            w = b,
            L = g;
          if ((f ? (L = l || C ? Mt(g, R) : R) : (w = l || C ? Mt(b, x) : x), C && !l)) {
            let T = at(a.left, 0),
              p = at(a.right, 0),
              P = at(a.top, 0),
              M = at(a.bottom, 0);
            f
              ? (L = d - 2 * (T !== 0 || p !== 0 ? T + p : at(a.left, a.right)))
              : (w = h - 2 * (P !== 0 || M !== 0 ? P + M : at(a.top, a.bottom)));
          }
          await s({ ...t, availableWidth: L, availableHeight: w });
          let S = await o.getDimensions(i.floating);
          return d !== S.width || h !== S.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function qn(e) {
  return bf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function pt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Zt(e) {
  var t;
  return (t = (bf(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function bf(e) {
  return e instanceof Node || e instanceof pt(e).Node;
}
function Rt(e) {
  return e instanceof Element || e instanceof pt(e).Element;
}
function Bt(e) {
  return e instanceof HTMLElement || e instanceof pt(e).HTMLElement;
}
function gf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pt(e).ShadowRoot;
}
function Cr(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: o } = At(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function vf(e) {
  return ["table", "td", "th"].includes(qn(e));
}
function co(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Bi(e) {
  let t = zi(),
    n = Rt(e) ? At(e) : e;
  return (
    n.transform !== "none" ||
    n.perspective !== "none" ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) ||
    ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r))
  );
}
function xf(e) {
  let t = dn(e);
  for (; Bt(t) && !Un(t);) {
    if (Bi(t)) return t;
    if (co(t)) return null;
    t = dn(t);
  }
  return null;
}
function zi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Un(e) {
  return ["html", "body", "#document"].includes(qn(e));
}
function At(e) {
  return pt(e).getComputedStyle(e);
}
function ao(e) {
  return Rt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function dn(e) {
  if (qn(e) === "html") return e;
  let t = e.assignedSlot || e.parentNode || (gf(e) && e.host) || Zt(e);
  return gf(t) ? t.host : t;
}
function yf(e) {
  let t = dn(e);
  return Un(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Bt(t) && Cr(t) ? t : yf(t);
}
function yr(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  let o = yf(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = pt(o);
  return i
    ? t.concat(
        s,
        s.visualViewport || [],
        Cr(o) ? o : [],
        s.frameElement && n ? yr(s.frameElement) : []
      )
    : t.concat(o, yr(o, [], n));
}
function wf(e) {
  let t = At(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    o = Bt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    u = so(n) !== i || so(r) !== s;
  return (u && ((n = i), (r = s)), { width: n, height: r, $: u });
}
function Eu(e) {
  return Rt(e) ? e : e.contextElement;
}
function Sr(e) {
  let t = Eu(e);
  if (!Bt(t)) return ln(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = wf(t),
    s = (i ? so(n.width) : n.width) / r,
    u = (i ? so(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!u || !Number.isFinite(u)) && (u = 1),
    { x: s, y: u }
  );
}
var og = ln(0);
function Ef(e) {
  let t = pt(e);
  return !zi() || !t.visualViewport
    ? og
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ig(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== pt(e)) ? !1 : t);
}
function $n(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let o = e.getBoundingClientRect(),
    i = Eu(e),
    s = ln(1);
  t && (r ? Rt(r) && (s = Sr(r)) : (s = Sr(e)));
  let u = ig(i, n, r) ? Ef(i) : ln(0),
    a = (o.left + u.x) / s.x,
    c = (o.top + u.y) / s.y,
    l = o.width / s.x,
    f = o.height / s.y;
  if (i) {
    let d = pt(i),
      h = r && Rt(r) ? pt(r) : r,
      m = d,
      v = m.frameElement;
    for (; v && r && h !== m;) {
      let x = Sr(v),
        R = v.getBoundingClientRect(),
        b = At(v),
        g = R.left + (v.clientLeft + parseFloat(b.paddingLeft)) * x.x,
        C = R.top + (v.clientTop + parseFloat(b.paddingTop)) * x.y;
      ((a *= x.x),
        (c *= x.y),
        (l *= x.x),
        (f *= x.y),
        (a += g),
        (c += C),
        (m = pt(v)),
        (v = m.frameElement));
    }
  }
  return _n({ width: l, height: f, x: a, y: c });
}
function sg(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
    i = o === "fixed",
    s = Zt(r),
    u = t ? co(t.floating) : !1;
  if (r === s || (u && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    c = ln(1),
    l = ln(0),
    f = Bt(r);
  if ((f || (!f && !i)) && ((qn(r) !== "body" || Cr(s)) && (a = ao(r)), Bt(r))) {
    let d = $n(r);
    ((c = Sr(r)), (l.x = d.x + r.clientLeft), (l.y = d.y + r.clientTop));
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + l.x,
    y: n.y * c.y - a.scrollTop * c.y + l.y,
  };
}
function ug(e) {
  return Array.from(e.getClientRects());
}
function If(e) {
  return $n(Zt(e)).left + ao(e).scrollLeft;
}
function cg(e) {
  let t = Zt(e),
    n = ao(e),
    r = e.ownerDocument.body,
    o = at(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = at(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
    s = -n.scrollLeft + If(e),
    u = -n.scrollTop;
  return (
    At(r).direction === "rtl" && (s += at(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: u }
  );
}
function ag(e, t) {
  let n = pt(e),
    r = Zt(e),
    o = n.visualViewport,
    i = r.clientWidth,
    s = r.clientHeight,
    u = 0,
    a = 0;
  if (o) {
    ((i = o.width), (s = o.height));
    let c = zi();
    (!c || (c && t === "fixed")) && ((u = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: u, y: a };
}
function lg(e, t) {
  let n = $n(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Bt(e) ? Sr(e) : ln(1),
    s = e.clientWidth * i.x,
    u = e.clientHeight * i.y,
    a = o * i.x,
    c = r * i.y;
  return { width: s, height: u, x: a, y: c };
}
function Cf(e, t, n) {
  let r;
  if (t === "viewport") r = ag(e, n);
  else if (t === "document") r = cg(Zt(e));
  else if (Rt(t)) r = lg(t, n);
  else {
    let o = Ef(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return _n(r);
}
function Pf(e, t) {
  let n = dn(e);
  return n === t || !Rt(n) || Un(n) ? !1 : At(n).position === "fixed" || Pf(n, t);
}
function fg(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = yr(e, [], !1).filter((u) => Rt(u) && qn(u) !== "body"),
    o = null,
    i = At(e).position === "fixed",
    s = i ? dn(e) : e;
  for (; Rt(s) && !Un(s);) {
    let u = At(s),
      a = Bi(s);
    (!a && u.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a && u.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ||
            (Cr(s) && !a && Pf(e, s))
      )
        ? (r = r.filter((l) => l !== s))
        : (o = u),
      (s = dn(s)));
  }
  return (t.set(e, r), r);
}
function mg(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
    s = [...(n === "clippingAncestors" ? (co(t) ? [] : fg(t, this._c)) : [].concat(n)), r],
    u = s[0],
    a = s.reduce(
      (c, l) => {
        let f = Cf(t, l, o);
        return (
          (c.top = at(f.top, c.top)),
          (c.right = Mt(f.right, c.right)),
          (c.bottom = Mt(f.bottom, c.bottom)),
          (c.left = at(f.left, c.left)),
          c
        );
      },
      Cf(t, u, o)
    );
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}
function dg(e) {
  let { width: t, height: n } = wf(e);
  return { width: t, height: n };
}
function pg(e, t, n) {
  let r = Bt(t),
    o = Zt(t),
    i = n === "fixed",
    s = $n(e, !0, i, t),
    u = { scrollLeft: 0, scrollTop: 0 },
    a = ln(0);
  if (r || (!r && !i))
    if (((qn(t) !== "body" || Cr(o)) && (u = ao(t)), r)) {
      let f = $n(t, !0, i, t);
      ((a.x = f.x + t.clientLeft), (a.y = f.y + t.clientTop));
    } else o && (a.x = If(o));
  let c = s.left + u.scrollLeft - a.x,
    l = s.top + u.scrollTop - a.y;
  return { x: c, y: l, width: s.width, height: s.height };
}
function wu(e) {
  return At(e).position === "static";
}
function Sf(e, t) {
  return !Bt(e) || At(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Mf(e, t) {
  let n = pt(e);
  if (co(e)) return n;
  if (!Bt(e)) {
    let o = dn(e);
    for (; o && !Un(o);) {
      if (Rt(o) && !wu(o)) return o;
      o = dn(o);
    }
    return n;
  }
  let r = Sf(e, t);
  for (; r && vf(r) && wu(r);) r = Sf(r, t);
  return r && Un(r) && wu(r) && !Bi(r) ? n : r || xf(e) || n;
}
var hg = async function (e) {
  let t = this.getOffsetParent || Mf,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: pg(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function gg(e) {
  return At(e).direction === "rtl";
}
var bg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: sg,
  getDocumentElement: Zt,
  getClippingRect: mg,
  getOffsetParent: Mf,
  getElementRects: hg,
  getClientRects: ug,
  getDimensions: dg,
  getScale: Sr,
  isElement: Rt,
  isRTL: gg,
};
function vg(e, t) {
  let n = null,
    r,
    o = Zt(e);
  function i() {
    var u;
    (clearTimeout(r), (u = n) == null || u.disconnect(), (n = null));
  }
  function s(u, a) {
    (u === void 0 && (u = !1), a === void 0 && (a = 1), i());
    let { left: c, top: l, width: f, height: d } = e.getBoundingClientRect();
    if ((u || t(), !f || !d)) return;
    let h = uo(l),
      m = uo(o.clientWidth - (c + f)),
      v = uo(o.clientHeight - (l + d)),
      x = uo(c),
      b = {
        rootMargin: -h + "px " + -m + "px " + -v + "px " + -x + "px",
        threshold: at(0, Mt(1, a)) || 1,
      },
      g = !0;
    function C(w) {
      let L = w[0].intersectionRatio;
      if (L !== a) {
        if (!g) return s();
        L
          ? s(!1, L)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      g = !1;
    }
    try {
      n = new IntersectionObserver(C, { ...b, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(C, b);
    }
    n.observe(e);
  }
  return (s(!0), i);
}
function Rf(e, t, n, r) {
  r === void 0 && (r = {});
  let {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: u = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    c = Eu(e),
    l = o || i ? [...(c ? yr(c) : []), ...yr(t)] : [];
  l.forEach((R) => {
    (o && R.addEventListener("scroll", n, { passive: !0 }), i && R.addEventListener("resize", n));
  });
  let f = c && u ? vg(c, n) : null,
    d = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((R) => {
      let [b] = R;
      (b &&
        b.target === c &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(d),
        (d = requestAnimationFrame(() => {
          var g;
          (g = h) == null || g.observe(t);
        }))),
        n());
    })),
    c && !a && h.observe(c),
    h.observe(t));
  let m,
    v = a ? $n(e) : null;
  a && x();
  function x() {
    let R = $n(e);
    (v && (R.x !== v.x || R.y !== v.y || R.width !== v.width || R.height !== v.height) && n(),
      (v = R),
      (m = requestAnimationFrame(x)));
  }
  return (
    n(),
    () => {
      var R;
      (l.forEach((b) => {
        (o && b.removeEventListener("scroll", n), i && b.removeEventListener("resize", n));
      }),
        f?.(),
        (R = h) == null || R.disconnect(),
        (h = null),
        a && cancelAnimationFrame(m));
    }
  );
}
var Af = mf;
var kf = df,
  Df = ff,
  Tf = hf;
var Of = lf;
var Lf = pf,
  Ff = (e, t, n) => {
    let r = new Map(),
      o = { platform: bg, ...n },
      i = { ...o.platform, _c: r };
    return af(e, t, { ...o, platform: i });
  };
var xg = "div",
  lo = new WeakMap();
function Vf(e = 0, t = 0, n = 0, r = 0) {
  if (typeof DOMRect == "function") return new DOMRect(e, t, n, r);
  let o = { x: e, y: t, width: n, height: r, top: t, right: e + n, bottom: t + r, left: e };
  return { ...o, toJSON: () => o };
}
function yg(e) {
  if (!e) return Vf();
  let { x: t, y: n, width: r, height: o } = e;
  return Vf(t, n, r, o);
}
function Cg(e, t) {
  return {
    contextElement: e || void 0,
    getBoundingClientRect: () => {
      let n = e,
        r = t?.(n);
      return r || !n ? yg(r) : n.getBoundingClientRect();
    },
  };
}
function Sg(e) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e);
}
function Hf(e) {
  let t = window.devicePixelRatio || 1;
  return Math.round(e * t) / t;
}
function wg(e) {
  return typeof e == "number" ? e : Math.max(e.left ?? 0, e.right ?? 0);
}
function Eg(e, t) {
  return Af(({ placement: n }) => {
    let r = (e?.clientHeight || 0) / 2,
      o = typeof t.gutter == "number" ? t.gutter + r : (t.gutter ?? r);
    return { crossAxis: n.split("-")[1] ? void 0 : t.shift, mainAxis: o, alignmentAxis: t.shift };
  });
}
function Ig(e) {
  if (e.flip === !1) return;
  let t = typeof e.flip == "string" ? e.flip.split(" ") : void 0;
  return (fe(!t || t.every(Sg), !1), Df({ padding: e.overflowPadding, fallbackPlacements: t }));
}
function Pg(e) {
  if (!(!e.slide && !e.overlap))
    return kf({
      mainAxis: e.slide,
      crossAxis: e.overlap,
      padding: e.overflowPadding,
      limiter: Lf(),
    });
}
function Mg(e, t) {
  return Tf({
    padding: e.overflowPadding,
    apply({ elements: n, availableWidth: r, availableHeight: o, rects: i }) {
      if (t?.()) return;
      let s = n.floating,
        u = Math.round(i.reference.width);
      ((r = Math.floor(r)),
        (o = Math.floor(o)),
        s.style.setProperty("--popover-anchor-width", `${u}px`),
        s.style.setProperty("--popover-available-width", `${r}px`),
        s.style.setProperty("--popover-available-height", `${o}px`),
        e.sameWidth && (s.style.width = `${u}px`),
        e.fitViewport && ((s.style.maxWidth = `${r}px`), (s.style.maxHeight = `${o}px`)));
    },
  });
}
function Rg(e, t) {
  if (e) return Of({ element: e, padding: t.arrowPadding });
}
var Pu = Q(function ({
    store: t,
    modal: n = !1,
    portal: r = n,
    preserveTabOrder: o = !0,
    autoFocusOnShow: i = !0,
    wrapperProps: s,
    fixed: u = !1,
    flip: a = !0,
    shift: c = 0,
    slide: l = !0,
    overlap: f = !1,
    sameWidth: d = !1,
    fitViewport: h = !1,
    gutter: m,
    arrowPadding: v = 4,
    overflowPadding: x = 8,
    getAnchorRect: R,
    updatePosition: b,
    ...g
  }) {
    let C = $r();
    ((t = t || C), fe(t, !1));
    let w = z(t, "arrowElement"),
      L = z(t, "anchorElement"),
      S = o && r && !n,
      T = z(t, S ? ["disclosureElement"] : [], (j) => (S ? j.disclosureElement : null)),
      p = z(t, "popoverElement"),
      P = z(t, "unstable_placing"),
      M = z(t, "contentElement"),
      y = z(t, "placement"),
      E = z(t, "mounted"),
      I = z(t, "rendered"),
      A = (0, Nf.useRef)(null),
      V = !P,
      { portalRef: D, domReady: H } = sr(r, g.portalRef),
      K = _(R),
      re = _(b),
      F = !!b,
      U = typeof x == "number" ? x : (x.top ?? 0),
      G = typeof x == "number" ? x : (x.right ?? 0),
      Z = typeof x == "number" ? x : (x.bottom ?? 0),
      he = typeof x == "number" ? x : (x.left ?? 0),
      Oe = !E && an(E, g.hidden, g.alwaysVisible);
    ($(() => {
      if ((E && t?.setState("unstable_placing", !0), !p?.isConnected)) return;
      let j = { top: U, right: G, bottom: Z, left: he };
      if ((p.style.setProperty("--popover-overflow-padding", `${wg(j)}px`), Oe && !F)) return;
      let ve = Cg(L, K),
        ye = !1,
        ke = !1,
        Me = () => !!(ye || !p.isConnected),
        Re = async () => {
          if (Me() || !E) return;
          w || (A.current = A.current || document.createElement("div"));
          let Ne = w || A.current,
            Dt = [
              Eg(Ne, { gutter: m, shift: c }),
              Ig({ flip: a, overflowPadding: j }),
              Pg({ slide: l, shift: c, overlap: f, overflowPadding: j }),
              Rg(Ne, { arrowPadding: v }),
              Mg({ sameWidth: d, fitViewport: h, overflowPadding: j }, Me),
            ],
            We = await Ff(ve, p, {
              placement: y,
              strategy: u ? "fixed" : "absolute",
              middleware: Dt,
            });
          if (Me()) return;
          t?.setState("currentPlacement", We.placement);
          let ht = Hf(We.x),
            Tt = Hf(We.y);
          if (
            (Object.assign(p.style, {
              top: "0",
              left: "0",
              transform: `translate3d(${ht}px,${Tt}px,0)`,
            }),
            (ke = !0),
            Ne && We.middlewareData.arrow)
          ) {
            let { x: Qe, y: Ot } = We.middlewareData.arrow,
              gt = xr(We.placement),
              bt = Ne.clientWidth / 2,
              jt = Ne.clientHeight / 2,
              Xe = Qe != null ? Qe + bt : -bt,
              Lt = Ot != null ? Ot + jt : -jt;
            (p.style.setProperty(
              "--popover-transform-origin",
              {
                top: `${Xe}px calc(100% + ${jt}px)`,
                bottom: `${Xe}px ${-jt}px`,
                left: `calc(100% + ${bt}px) ${Lt}px`,
                right: `${-bt}px ${Lt}px`,
              }[gt]
            ),
              Object.assign(Ne.style, {
                left: Qe != null ? `${Qe}px` : "",
                top: Ot != null ? `${Ot}px` : "",
                right: "",
                bottom: "",
                [gt]: "100%",
              }));
          }
        },
        _e = Rf(
          ve,
          p,
          async () => {
            if (!Me()) {
              try {
                F ? await re({ updatePosition: Re }) : await Re();
              } catch (Ne) {
                throw (ke && !Me() && t?.setState("unstable_placing", !1), Ne);
              }
              Me() || t?.setState("unstable_placing", !1);
            }
          },
          { elementResize: typeof ResizeObserver == "function" }
        );
      return () => {
        ((ye = !0), _e());
      };
    }, [t, I, p, w, L, y, E, Oe, H, u, a, c, l, f, d, h, m, v, U, G, Z, he, K, F, re]),
      $(() => {
        if (!E || !H || !p?.isConnected || !M?.isConnected) return;
        let j = () => {
          p.style.zIndex = getComputedStyle(M).zIndex;
        };
        j();
        let ve = requestAnimationFrame(() => {
          ve = requestAnimationFrame(j);
        });
        return () => cancelAnimationFrame(ve);
      }, [E, H, p, M]),
      $(() => {
        if (!t) return;
        let j = t;
        lo.set(j, (lo.get(j) ?? 0) + 1);
        let ve = me(j, ["mounted"], (ye) => {
          j.setState("unstable_placing", ye.mounted);
        });
        return () => {
          (ve(),
            lo.set(j, (lo.get(j) ?? 1) - 1),
            queueMicrotask(() => {
              lo.get(j) || j.setState("unstable_placing", !1);
            }));
        };
      }, [t]));
    let O = u ? "fixed" : "absolute";
    return (
      (g = ge(
        g,
        (j) =>
          (0, Iu.jsx)("div", {
            ...s,
            style: { position: O, top: 0, left: 0, width: "max-content", ...s?.style },
            ref: t?.setPopoverElement,
            children: j,
          }),
        [t, O, s]
      )),
      (g = ge(g, (j) => (0, Iu.jsx)(wn, { value: t, children: j }), [t])),
      (g = { "data-placing": P || void 0, ...g, style: { position: "relative", ...g.style } }),
      (g = Cu({
        store: t,
        modal: n,
        portal: r,
        preserveTabOrder: o,
        preserveTabOrderAnchor: T || L,
        autoFocusOnShow: V && i,
        ...g,
        portalRef: D,
      })),
      g
    );
  }),
  Wf = Kn(
    q(function (t) {
      let n = Pu(t);
      return J(xg, n);
    }),
    $r
  );
var fo = qe([xi], [wn]),
  Ag = fo.useContext,
  lw = fo.useScopedContext,
  Mu = fo.useProviderContext,
  Bf = fo.ContextProvider,
  Ki = fo.ScopedContextProvider;
function Ru(e) {
  return [e.clientX, e.clientY];
}
function zf(e, t) {
  let [n, r] = e,
    o = !1,
    i = t.length;
  for (let s = i, u = 0, a = s - 1; u < s; a = u++) {
    let c = t[u],
      l = t[a],
      f = t[a === 0 ? s - 1 : a - 1];
    if (c == null || l == null || f == null) return !1;
    let [d, h] = c,
      [m, v] = l,
      [, x] = f,
      R = (h - v) * (n - d) - (d - m) * (r - h);
    if (v < h) {
      if (r >= v && r < h) {
        if (R === 0) return !0;
        R > 0 && (r === v ? r > x && (o = !o) : (o = !o));
      }
    } else if (h < v) {
      if (r > h && r <= v) {
        if (R === 0) return !0;
        R < 0 && (r === v ? r < x && (o = !o) : (o = !o));
      }
    } else if (r === h && ((n >= m && n <= d) || (n >= d && n <= m))) return !0;
  }
  return o;
}
function kg(e, t) {
  let { top: n, right: r, bottom: o, left: i } = t,
    [s, u] = e;
  return [s < i ? "left" : s > r ? "right" : null, u < n ? "top" : u > o ? "bottom" : null];
}
function Kf(e, t) {
  let n = e.getBoundingClientRect(),
    { top: r, right: o, bottom: i, left: s } = n,
    [u, a] = kg(t, n),
    c = [t];
  return (
    u
      ? (a !== "top" && c.push([u === "left" ? s : o, r]),
        c.push([u === "left" ? o : s, r]),
        c.push([u === "left" ? o : s, i]),
        a !== "bottom" && c.push([u === "left" ? s : o, i]))
      : a === "top"
        ? (c.push([s, r]), c.push([s, i]), c.push([o, i]), c.push([o, r]))
        : (c.push([s, i]), c.push([s, r]), c.push([o, r]), c.push([o, i])),
    c
  );
}
var Ve = N(ie(), 1),
  Au = N(de(), 1);
function ku({ hideOnEscape: e, onClose: t, onEscapeClose: n }) {
  let r = (0, Ve.useRef)(null);
  return {
    hideOnEscape: _((o) => {
      if (Wo(e, o)) return !1;
      let i = {};
      return (
        (r.current = i),
        setTimeout(() => {
          r.current === i && (r.current = null);
        }),
        !0
      );
    }),
    onClose: _((o) => {
      let i = r.current;
      ((r.current = null), t?.(o), !o.defaultPrevented && i && n());
    }),
  };
}
var Dg = "div";
function Tg(e, t, n, r) {
  return !!(
    Et(t) ||
    e.includes(t) ||
    n.some((o) => o && e.includes(o)) ||
    r?.some((o) => Et(o) || e.includes(o))
  );
}
function jf({
  event: e,
  element: t,
  enterPointRef: n,
  disablePointerEvents: r,
  refreshEnterPoint: o = !1,
}) {
  let i = n.current;
  if (!i) return !1;
  let s = Ru(e),
    u = Kf(t, i);
  return zf(s, u)
    ? (o && (n.current = s), r(e) && (e.preventDefault(), e.stopPropagation()), !0)
    : !1;
}
function Og({ store: e, ...t }) {
  let [n, r] = (0, Ve.useState)(!1),
    o = z(e, "mounted");
  (0, Ve.useEffect)(() => {
    o || r(!1);
  }, [o]);
  let i = t.onFocus,
    s = _((a) => {
      (i?.(a), !a.defaultPrevented && r(!0));
    }),
    u = (0, Ve.useRef)(null);
  return (
    (0, Ve.useEffect)(
      () =>
        me(e, ["anchorElement"], (a) => {
          u.current = a.anchorElement;
        }),
      [e]
    ),
    (t = { autoFocusOnHide: n, finalFocus: u, ...t, onFocus: s }),
    t
  );
}
var _f = (0, Ve.createContext)(null),
  ji = Q(function ({
    store: t,
    modal: n = !1,
    portal: r = n,
    hideOnEscape: o = !0,
    hideOnHoverOutside: i = !0,
    disablePointerEventsOnApproach: s = !!i,
    ...u
  }) {
    let a = Mu();
    ((t = t || a), fe(t, !1));
    let c = (0, Ve.useRef)(null),
      l = (0, Ve.useRef)([]),
      f = (0, Ve.useRef)(0),
      d = (0, Ve.useRef)(null),
      { portalRef: h, domReady: m } = sr(r, u.portalRef),
      v = cr(),
      x = !!i,
      R = pe(i),
      b = !!s,
      g = pe(s),
      C = z(t, "open"),
      w = z(t, "mounted"),
      L = (0, Ve.useCallback)(() => {
        (window.clearTimeout(f.current), (f.current = 0));
      }, []);
    ((0, Ve.useEffect)(() => {
      if (!m || !w || (!x && !b)) return;
      let y = c.current;
      return y
        ? Ee(
            Ae(
              "mousemove",
              (I) => {
                if (!t || !v()) return;
                let {
                    anchorElement: A,
                    disclosureElement: V,
                    hideTimeout: D,
                    timeout: H,
                  } = t.getState(),
                  K = I.composedPath(),
                  re = [A, V],
                  F = re.find((U) => U && K.includes(U));
                if (Tg(K, y, re, l.current)) {
                  ((d.current = F ? Ru(I) : null), L());
                  return;
                }
                f.current ||
                  jf({
                    event: I,
                    element: y,
                    enterPointRef: d,
                    disablePointerEvents: g,
                    refreshEnterPoint: !0,
                  }) ||
                  (R(I) &&
                    (f.current = window.setTimeout(() => {
                      ((f.current = 0), t?.hide());
                    }, D ?? H)));
              },
              !0
            ),
            L
          )
        : void 0;
    }, [t, v, m, w, x, b, l, L, g, R]),
      (0, Ve.useEffect)(() => {
        if (!m || !w || !b) return;
        let y = (E) => {
          let I = c.current;
          I && jf({ event: E, element: I, enterPointRef: d, disablePointerEvents: g });
        };
        return Ee(
          Ae("mouseenter", y, !0),
          Ae("mouseover", y, !0),
          Ae("mouseout", y, !0),
          Ae("mouseleave", y, !0)
        );
      }, [m, w, b, g]),
      (0, Ve.useEffect)(() => {
        m && (C || t?.setAutoFocusOnShow(!1));
      }, [t, m, C]));
    let S = or(C);
    (0, Ve.useEffect)(() => {
      if (m)
        return () => {
          S.current || t?.setAutoFocusOnShow(!1);
        };
    }, [t, m]);
    let T = (0, Ve.useContext)(_f);
    $(() => {
      if (n || !r || !w || !m) return;
      let y = c.current;
      if (y) return T?.(y);
    }, [n, r, w, m, T]);
    let p = (0, Ve.useCallback)(
      (y) => {
        (L(), (l.current = [...l.current, y]));
        let E = T?.(y);
        return () => {
          (L(), (l.current = l.current.filter((I) => I !== y)), E?.());
        };
      },
      [L, T]
    );
    ((u = ge(
      u,
      (y) =>
        (0, Au.jsx)(Ki, {
          value: t,
          children: (0, Au.jsx)(_f.Provider, { value: p, children: y }),
        }),
      [t, p]
    )),
      (u = { ...u, ref: ae(c, u.ref) }),
      (u = Og({ store: t, ...u })));
    let P = z(t, ["autoFocusOnShow"], (y) => n || y.autoFocusOnShow),
      M = ku({
        hideOnEscape: o,
        onClose: u.onClose,
        onEscapeClose() {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              t?.getState().open && t.hide();
            });
          });
        },
      });
    return (
      (u = Pu({
        store: t,
        modal: n,
        portal: r,
        autoFocusOnShow: P,
        ...u,
        portalRef: h,
        hideOnEscape: M.hideOnEscape,
        onClose: M.onClose,
      })),
      u
    );
  }),
  mo = Kn(
    q(function (t) {
      let n = ji(t);
      return J(Dg, n);
    }),
    Mu
  );
var In = N(ie(), 1),
  qf = Q(function ({
    store: t,
    showOnHover: n = !0,
    unstable_showOnHoverWhenDisabled: r = !0,
    setAnchorElement: o = !1,
    ...i
  }) {
    let s = dt(i),
      u = i.focusable !== !1,
      a = (0, In.useRef)(null),
      c = (0, In.useRef)(0),
      l = _((g) => (s && !u ? !0 : ca(g)));
    ((0, In.useEffect)(() => () => window.clearTimeout(c.current), []),
      (0, In.useEffect)(
        () =>
          Ae(
            "mouseleave",
            (C) => {
              let w = a.current;
              w && C.target === w && (window.clearTimeout(c.current), (c.current = 0));
            },
            !0
          ),
        []
      ));
    let f = i.onMouseMove,
      d = pe(n),
      h = pe(r),
      m = cr(),
      v = _((g) => {
        if ((f?.(g), g.defaultPrevented || c.current || !m())) return;
        let C = g.currentTarget;
        if (l(C) || ((s || Bo(C)) && !h(g)) || !d(g)) return;
        (o && t.setAnchorElement(C), t.setDisclosureElement(C));
        let { showTimeout: w, timeout: L } = t.getState(),
          S = () => {
            ((c.current = 0),
              m() &&
                (l(C) ||
                  (o && t.setAnchorElement(C),
                  t.show(),
                  queueMicrotask(() => {
                    t.setDisclosureElement(C);
                  }))));
          },
          T = w ?? L;
        T === 0 ? S() : (c.current = window.setTimeout(S, T));
      }),
      x = i.onClick,
      R = _((g) => {
        (x?.(g), window.clearTimeout(c.current), (c.current = 0));
      }),
      b = (0, In.useCallback)(
        (g) => {
          if (((a.current = g), !o)) return;
          let { anchorElement: C } = t.getState();
          C?.isConnected || t.setAnchorElement(g);
        },
        [t, o]
      );
    return ((i = { ...i, ref: ae(b, i.ref), onMouseMove: v, onClick: R }), (i = un(i)), i);
  });
function wr({ popover: e, ...t } = {}) {
  let n = Cn(
    t.store,
    ar(e, [
      "arrowElement",
      "anchorElement",
      "contentElement",
      "popoverElement",
      "disclosureElement",
      "unstable_placing",
    ])
  );
  let r = n?.getState(),
    o = Di({ ...t, store: n }),
    i = te(t.placement, r?.placement, "bottom"),
    s = {
      ...o.getState(),
      placement: i,
      currentPlacement: i,
      anchorElement: te(r?.anchorElement, null),
      popoverElement: te(r?.popoverElement, null),
      arrowElement: te(r?.arrowElement, null),
      rendered: Symbol("rendered"),
      unstable_placing: !1,
    },
    u = Ge(s, o, n),
    a = s.anchorElement === s.disclosureElement ? s.anchorElement : null;
  return (
    xe(u, () =>
      me(u, ["anchorElement", "disclosureElement"], (c) => {
        if (c.anchorElement && c.anchorElement !== a) {
          a = null;
          return;
        }
        ((a = c.disclosureElement), u.setState("anchorElement", a));
      })
    ),
    xe(u, () => e?.unstable_onHideRequest(o.unstable_requestHide)),
    {
      ...o,
      ...u,
      setAnchorElement: (c) => u.setState("anchorElement", c),
      setPopoverElement: (c) => u.setState("popoverElement", c),
      setArrowElement: (c) => u.setState("arrowElement", c),
      render: () => u.setState("rendered", Symbol("rendered")),
    }
  );
}
function po(e, t, n) {
  return (It(t, [n.popover, t]), Ie(e, n, "placement"), mu(e, t, n));
}
function Uf(e = {}) {
  let [t, n] = ut(wr, e);
  return po(t, n, e);
}
function _i(e = {}) {
  let t = e.store?.getState(),
    n = wr({ ...e, placement: te(e.placement, t?.placement, "bottom") }),
    r = te(e.timeout, t?.timeout, 500),
    o = {
      ...n.getState(),
      timeout: r,
      showTimeout: te(e.showTimeout, t?.showTimeout),
      hideTimeout: te(e.hideTimeout, t?.hideTimeout),
      autoFocusOnShow: te(t?.autoFocusOnShow, !1),
    },
    i = Ge(o, n, e.store);
  return { ...n, ...i, setAutoFocusOnShow: (s) => i.setState("autoFocusOnShow", s) };
}
function Du(e, t, n) {
  return (Ie(e, n, "timeout"), Ie(e, n, "showTimeout"), Ie(e, n, "hideTimeout"), po(e, t, n));
}
function qi(e = {}) {
  let [t, n] = ut(_i, e);
  return Du(t, n, e);
}
var ho = qe([xn], [Gt]),
  $f = ho.useContext,
  Gf = ho.useScopedContext,
  Kw = ho.useProviderContext,
  jw = ho.ContextProvider,
  _w = ho.ScopedContextProvider;
var Er = N(ie(), 1),
  Yf = "button",
  Tu = Q(function (t) {
    let n = (0, Er.useRef)(null),
      r = ha(n, Yf),
      [o, i] = (0, Er.useState)(() => !!r && Vt({ tagName: r, type: t.type }));
    return (
      (0, Er.useEffect)(() => {
        n.current && i(Vt(n.current));
      }, []),
      (t = { role: !o && r !== "a" ? "button" : void 0, ...t, ref: ae(n, t.ref) }),
      (t = Fr(t)),
      t
    );
  }),
  Xw = q(function (t) {
    let n = Tu(mt(t));
    return J(Yf, n);
  });
var Pn = N(ie(), 1);
var Vg = "button",
  Hg = Symbol("disclosure"),
  Ou = Q(function ({ store: t, toggleOnClick: n = !0, ...r }) {
    let o = jr();
    ((t = t || o), fe(t, !1));
    let i = (0, Pn.useRef)(null),
      [s, u] = (0, Pn.useState)(!1),
      a = z(t, "disclosureElement"),
      c = z(t, "open"),
      l = (0, Pn.useCallback)(
        (x) => {
          let R = i.current;
          if (((i.current = x), x)) {
            t?.getState().disclosureElement?.isConnected || t.setDisclosureElement(x);
            return;
          }
          t?.getState().disclosureElement === R && t.setDisclosureElement(null);
        },
        [t]
      );
    (0, Pn.useEffect)(() => {
      let x = a === i.current;
      (a?.isConnected || (t?.setDisclosureElement(i.current), (x = !0)), u(c && x));
    }, [a, t, c]);
    let f = r.onClick,
      d = pe(n),
      [h, m] = ur(r, Hg, !0),
      v = _((x) => {
        (f?.(x),
          !x.defaultPrevented &&
            (h || (d(x) && (t?.setDisclosureElement(x.currentTarget), t?.toggle()))));
      });
    return (
      (r = {
        "aria-expanded": s,
        "aria-controls": z(t, "contentElement")?.id,
        ...m,
        ...r,
        ref: ae(l, r.ref),
        onClick: v,
      }),
      (r = Tu(r)),
      r
    );
  }),
  oE = q(function (t) {
    let n = Ou(mt(t));
    return J(Vg, n);
  });
var Ng = "button",
  Lu = Q(function ({ store: t, ...n }) {
    let r = Nn();
    ((t = t || r), fe(t, !1));
    let o = z(t, "contentElement");
    return ((n = { "aria-haspopup": sn(o, "dialog"), ...n }), (n = Ou({ store: t, ...n })), n);
  }),
  mE = q(function (t) {
    let n = Lu(mt(t));
    return J(Ng, n);
  });
var Xf = N(de(), 1),
  Wg = "button",
  Fu = Q(function ({ store: t, ...n }) {
    let r = $r();
    return (
      (t = t || r),
      fe(t, !1),
      (n = ge(n, (o) => (0, Xf.jsx)(wn, { value: t, children: o }), [t])),
      (n = Lu({ store: t, ...n })),
      n
    );
  }),
  Bg = q(function (t) {
    let n = Fu(mt(t));
    return J(Wg, n);
  });
var zg = "div",
  Jf = new WeakMap();
function Kg(e) {
  let t = Jf.get(e);
  return (t || ((t = { chars: "", cleanupTimeout: 0 }), Jf.set(e, t)), t);
}
function Ui(e) {
  e.chars = "";
}
function jg(e, t) {
  let n = e.target;
  return n && et(n)
    ? !1
    : e.key === " " && t.chars.length
      ? !0
      : e.key.length === 1 &&
        !e.ctrlKey &&
        !e.altKey &&
        !e.metaKey &&
        /^[\p{Letter}\p{Number}]$/u.test(e.key);
}
function _g(e, t) {
  if (De(e)) return !0;
  let n = e.target;
  return n ? t.some((r) => r.element === n) : !1;
}
function qg(e) {
  return e.filter((t) => !t.disabled);
}
function $i(e, t) {
  let n = e.typeaheadText ?? (e.element?.textContent || e.children || ("value" in e && e.value));
  return n ? Tr(n).trim().toLowerCase().startsWith(t.toLowerCase()) : !1;
}
function Ug({ activeId: e, char: t, items: n, typeaheadState: r }) {
  if (!e) return n;
  let o = n.find((s) => s.id === e);
  if (!o || !$i(o, t)) return n;
  let { chars: i } = r;
  return i !== t && $i(o, i)
    ? n
    : ((r.chars = t),
      Ba(
        n.filter((s) => $i(s, t)),
        e
      ).filter((s) => s.id !== e));
}
var go = Q(function ({ store: t, typeahead: n = !0, ...r }) {
    let o = $t();
    ((t = t || o), fe(t, !1));
    let i = r.onKeyDownCapture,
      s = _((u) => {
        if ((i?.(u), u.defaultPrevented || !n || !t)) return;
        let a = Kg(t);
        if (!jg(u, a)) return Ui(a);
        let { renderedItems: c, items: l, activeId: f } = t.getState(),
          d = qg(l.length > c.length ? l : c);
        if (!_g(u, d)) return Ui(a);
        (u.preventDefault(),
          window.clearTimeout(a.cleanupTimeout),
          (a.cleanupTimeout = window.setTimeout(() => {
            Ui(a);
          }, 500)));
        let h = u.key.toLowerCase();
        ((a.chars += h), (d = Ug({ activeId: f, char: h, items: d, typeaheadState: a })));
        let m = d.find((v) => $i(v, a.chars));
        m ? t.move(m.id) : Ui(a);
      });
    return ((r = { ...r, onKeyDownCapture: s }), bn(r));
  }),
  $g = q(function (t) {
    let n = go(t);
    return J(zg, n);
  });
var Zf = N(ie(), 1),
  Gg = "div";
function Yg(e) {
  let t = e.relatedTarget;
  return ze(t) ? we(e.currentTarget, t) : !1;
}
var Vu = Symbol("composite-hover");
function Xg(e) {
  let { relatedTarget: t } = e;
  if (!ze(t)) return !1;
  let n = t;
  do {
    if ($e(n, Vu) && n[Vu]) return !0;
    n = n.parentElement;
  } while (n);
  return !1;
}
var bo = Q(function ({ store: t, focusOnHover: n = !0, blurOnHoverEnd: r = !!n, ...o }) {
    let i = $t();
    ((t = t || i), fe(t, !1));
    let s = cr(),
      u = o.onMouseMove,
      a = pe(n),
      c = _((m) => {
        if ((u?.(m), !m.defaultPrevented && s() && a(m))) {
          if (!Et(m.currentTarget)) {
            let v = t?.getState().compositeElement;
            v && !wt(v) && v.focus({ preventScroll: !0 });
          }
          t?.setActiveId(m.currentTarget.id);
        }
      }),
      l = o.onMouseLeave,
      f = pe(r),
      d = _((m) => {
        (l?.(m),
          !m.defaultPrevented &&
            s() &&
            (Yg(m) ||
              Xg(m) ||
              (a(m) &&
                f(m) &&
                (t?.setActiveId(null),
                t?.getState().compositeElement?.focus({ preventScroll: !0 })))));
      }),
      h = (0, Zf.useCallback)((m) => {
        m && (m[Vu] = !0);
      }, []);
    return ((o = { ...o, ref: ae(h, o.ref), onMouseMove: c, onMouseLeave: d }), o);
  }),
  Jg = Ut(
    q(function (t) {
      let n = bo(t);
      return J(Gg, n);
    })
  );
var Hu = N(ie(), 1),
  vo = qe([xn, Bf], [Gt, Ki]),
  kt = vo.useContext,
  Qf = vo.useScopedContext,
  Gn = vo.useProviderContext,
  Gi = vo.ContextProvider,
  em = vo.ScopedContextProvider;
var KE = (0, Hu.createContext)(void 0),
  Yi = (0, Hu.createContext)(!1);
var Xi = N(ie(), 1),
  Nu = N(de(), 1);
var Zg = "div";
function Qg({ store: e, ...t }) {
  let [n, r] = (0, Xi.useState)(void 0),
    o = t["aria-label"],
    i = z(e, "disclosureElement"),
    s = z(e, "contentElement");
  return (
    (0, Xi.useEffect)(() => {
      let u = s;
      if (!u) return;
      let a = o || u.hasAttribute("aria-label") ? void 0 : i?.id || void 0;
      r(a);
    }, [o, i, s]),
    n
  );
}
var Wu = Q(function ({ store: t, alwaysVisible: n, composite: r, ...o }) {
    let i = Gn();
    ((t = t || i), fe(t, !1));
    let s = t.parent,
      u = t.menubar,
      a = !!s,
      c = Te(o.id),
      l = o.onKeyDown,
      f = z(t, ["placement"], (w) => xr(w.placement)),
      d = z(t, ["orientation"], (w) => (w.orientation === "both" ? void 0 : w.orientation)),
      h = d !== "vertical",
      m = z(u, ["orientation"], (w) => !!w && w.orientation !== "vertical"),
      v = _((w) => {
        if ((l?.(w), w.defaultPrevented)) return;
        let L = w.target;
        if (!(!De(w) && !Ht(t, L))) {
          if (tr(L)) {
            let S = An(L),
              T = w.key === "ArrowLeft" || w.key === "ArrowUp",
              p = w.key === "ArrowRight" || w.key === "ArrowDown";
            if ((T && S.start !== 0) || (p && S.end !== Ko(L).length)) return;
          }
          if (a || (u && !h)) {
            let S = {
              ArrowRight: () => f === "left" && !h,
              ArrowLeft: () => f === "right" && !h,
              ArrowUp: () => f === "bottom" && h,
              ArrowDown: () => f === "top" && h,
            }[w.key];
            if (S?.()) return (w.stopPropagation(), w.preventDefault(), t?.hide());
          }
          if (u) {
            let S = {
                ArrowRight: () => {
                  if (m) return u.next();
                },
                ArrowLeft: () => {
                  if (m) return u.previous();
                },
                ArrowDown: () => {
                  if (!m) return u.down();
                },
                ArrowUp: () => {
                  if (!m) return u.up();
                },
              }[w.key],
              T = S?.();
            T !== void 0 && (w.stopPropagation(), w.preventDefault(), u.move(T));
          }
        }
      });
    o = ge(o, (w) => (0, Nu.jsx)(em, { value: t, children: w }), [t]);
    let x = Qg({ store: t, ...o }),
      R = z(t, "mounted"),
      b = an(R, o.hidden, n),
      g = b ? { ...o.style, display: "none" } : o.style;
    ((o = ge(o, (w) => (0, Nu.jsx)(Yi.Provider, { value: b, children: w }), [b])),
      (o = {
        "aria-labelledby": x,
        hidden: b,
        ...o,
        id: c,
        ref: ae(c ? t.setContentElement : null, o.ref),
        style: g,
        onKeyDown: v,
      }));
    let C = !!t.combobox;
    return (
      (r = r ?? !C),
      r && (o = { role: "menu", "aria-orientation": d, ...o }),
      (o = zr({ store: t, composite: r, ...o })),
      (o = go({ store: t, typeahead: !C, ...o })),
      o
    );
  }),
  eb = q(function (t) {
    let n = Wu(t);
    return J(Zg, n);
  });
var zt = N(ie(), 1);
var tb = "div",
  nb = Q(function ({
    store: t,
    modal: n = !1,
    portal: r = n,
    hideOnEscape: o = !0,
    autoFocusOnShow: i = !0,
    hideOnHoverOutside: s,
    alwaysVisible: u,
    getPersistentElements: a,
    unstable_treeSnapshotKey: c,
    ...l
  }) {
    let f = Gn();
    ((t = t || f), fe(t, !1));
    let d = (0, zt.useRef)(null),
      h = t.parent,
      m = t.menubar,
      v = !!h,
      x = !!m && !v,
      R = v ? !1 : n;
    l = { ...l, ref: ae(d, l.ref) };
    let { "aria-labelledby": b, ...g } = Wu({ store: t, alwaysVisible: u, ...l });
    l = g;
    let [C, w] = (0, zt.useState)(),
      L = z(t, ["autoFocusOnShow", "initialFocus", "renderedItems", "compositeElement"], (D) => {
        if (!D.autoFocusOnShow) return;
        let H = (K) => !K.disabled && !!K.element;
        switch (D.initialFocus) {
          case "first":
            return D.renderedItems.find(H)?.element || null;
          case "last":
            for (let K = D.renderedItems.length - 1; K >= 0; K -= 1) {
              let re = D.renderedItems[K];
              if (re && H(re)) return re.element;
            }
            return null;
          default:
            return D.compositeElement;
        }
      });
    (0, zt.useEffect)(() => {
      let D = !1;
      return (
        w((H) => {
          if (D) return;
          if (R && H?.current?.isConnected) return H;
          if (L === void 0) return;
          if (L && L === H?.current) return H;
          let K = (0, zt.createRef)();
          return ((K.current = L), K);
        }),
        () => {
          D = !0;
        }
      );
    }, [R, L]);
    let S = !!C || !!l.initialFocus || R,
      T = i === !1 ? !1 : S && i,
      p = z(
        t,
        ["disclosureElement", "anchorElement"],
        (D) => D.disclosureElement || D.anchorElement
      ),
      P = z(t, ["disclosureElement", "contentElement"], (D) => {
        let { disclosureElement: H, contentElement: K } = D;
        return !H?.isConnected || yu(H) || K?.contains(H) ? null : H;
      }),
      M = R ? P : null,
      y = (0, zt.useMemo)(() => [c, M], [c, M]),
      E = z(t.combobox || t, "contentElement"),
      I = z(h?.combobox || h, "contentElement"),
      A = (0, zt.useMemo)(() => {
        if (!I || !E) return;
        let D = E.getAttribute("role"),
          H = I.getAttribute("role");
        if (!((H === "menu" || H === "menubar") && D === "menu")) return I;
      }, [E, I]);
    A !== void 0 && (l = { preserveTabOrderAnchor: A, ...l });
    let V = ku({ hideOnEscape: o, onClose: l.onClose, onEscapeClose: () => h?.hideAll() });
    return (
      (l = ji({
        store: t,
        alwaysVisible: u,
        initialFocus: C,
        autoFocusOnShow: T,
        finalFocus: p,
        ...l,
        hideOnEscape: V.hideOnEscape,
        onClose: V.onClose,
        hideOnHoverOutside(D) {
          let H = t?.getState().disclosureElement;
          return (typeof s == "function" ? s(D) : (s ?? (v ? !0 : x ? (H ? !Et(H) : !0) : !1)))
            ? D.defaultPrevented || !v || !H || (ta(H, "mouseout", D), !Et(H))
              ? !0
              : (requestAnimationFrame(() => {
                  Et(H) || t?.hide();
                }),
                !1)
            : !1;
        },
        getPersistentElements() {
          let D = a?.() || [];
          return !R || !P ? D : [...D, P];
        },
        unstable_treeSnapshotKey: y,
        modal: R,
        portal: r,
        backdrop: v ? !1 : l.backdrop,
      })),
      (l = { "aria-labelledby": b, ...l }),
      l
    );
  }),
  Ji = Kn(
    q(function (t) {
      let n = nb(t);
      return J(tb, n);
    }),
    Gn
  );
var nm = N(ie(), 1),
  Bu = N(de(), 1);
var rb = "button";
function ob(e, t) {
  return {
    ArrowDown: t === "bottom" || t === "top" ? "first" : !1,
    ArrowUp: t === "bottom" || t === "top" ? "last" : !1,
    ArrowRight: t === "right" ? "first" : !1,
    ArrowLeft: t === "left" ? "first" : !1,
  }[e.key];
}
function tm(e, t) {
  return !!e?.some((n) =>
    !n.element || n.element === t ? !1 : n.element.getAttribute("aria-expanded") === "true"
  );
}
var ib = Q(function ({
    store: t,
    focusable: n,
    accessibleWhenDisabled: r,
    showOnHover: o,
    unstable_showOnHoverWhenDisabled: i = !1,
    ...s
  }) {
    let u = Gn();
    ((t = t || u), fe(t, !1));
    let a = (0, nm.useRef)(null),
      c = t.parent,
      l = t.menubar,
      f = !!c,
      d = !!l && !f,
      h = dt(s),
      m = (y) => h || Bo(y),
      v = () => {
        let y = a.current;
        y && (t?.setDisclosureElement(y), t?.show());
      },
      x = s.onFocus,
      R = _((y) => {
        if (
          (x?.(y),
          m(y.currentTarget) ||
            y.defaultPrevented ||
            (t?.setAutoFocusOnShow(!1), t?.setActiveId(null), !l) ||
            !d)
        )
          return;
        let { items: E } = l.getState();
        tm(E, y.currentTarget) && v();
      }),
      b = z(t, ["placement"], (y) => xr(y.placement)),
      g = s.onKeyDown,
      C = _((y) => {
        if ((g?.(y), m(y.currentTarget) || y.defaultPrevented)) return;
        let E = ob(y, b);
        if (E) {
          y.preventDefault();
          let { open: I } = t.getState();
          if (I) {
            let A = E === "last" ? t.last() : t.first();
            t.move(A);
            return;
          }
          (v(), t?.setAutoFocusOnShow(!0), t?.setInitialFocus(E));
        }
      }),
      w = s.onClick,
      L = _((y) => {
        if ((w?.(y), y.defaultPrevented || !t)) return;
        let E = !y.detail,
          { open: I } = t.getState();
        ((!I || E) &&
          ((!f || E) && t.setAutoFocusOnShow(!0), t.setInitialFocus(E ? "first" : "container")),
          f && v());
      });
    ((s = ge(s, (y) => (0, Bu.jsx)(Gi, { value: t, children: y }), [t])),
      f && (s = { ...s, render: (0, Bu.jsx)(br.div, { render: s.render }) }));
    let S = Te(s.id),
      T = z(c?.combobox || c, "contentElement"),
      p = f || d ? jo(T, "menuitem") : void 0,
      P = z(t, "contentElement"),
      M = !!t.combobox;
    return (
      (s = {
        role: p,
        "aria-haspopup": sn(P, M ? "dialog" : "menu"),
        ...s,
        id: S,
        ref: ae(a, s.ref),
        onFocus: R,
        onKeyDown: C,
        onClick: L,
      }),
      (s = qf({
        store: t,
        focusable: n,
        accessibleWhenDisabled: r,
        ...s,
        unstable_showOnHoverWhenDisabled: i,
        showOnHover: (y) => {
          if (
            !(() => {
              if (typeof o == "function") return o(y);
              if (o != null) return o;
              if (f) return !0;
              if (!l) return !1;
              let { items: A } = l.getState();
              return d && tm(A);
            })()
          )
            return !1;
          let I = d ? l : c;
          return (I && I.setActiveId(y.currentTarget.id), !0);
        },
      })),
      (s = Fu({ store: t, toggleOnClick: !f, focusable: n, accessibleWhenDisabled: r, ...s })),
      (s = go({ store: t, typeahead: d, ...s })),
      s
    );
  }),
  Zi = q(function (t) {
    let n = ib(t);
    return J(rb, mt(n));
  });
var rm = N(ie(), 1);
var sb = "div";
function ub(e, t, n) {
  if (!e) return !1;
  if (Et(e)) return !0;
  let r = t
    ?.find((i) => (i.element === n ? !1 : i.element?.getAttribute("aria-expanded") === "true"))
    ?.element?.getAttribute("aria-controls");
  if (!r) return !1;
  let o = ce(e).getElementById(r);
  return o ? (Et(o) ? !0 : !!o.querySelector("[role=menuitem][aria-expanded=true]")) : !1;
}
var cb = Q(function ({
    store: t,
    hideOnClick: n = !0,
    preventScrollOnKeyDown: r = !0,
    focusOnHover: o,
    blurOnHoverEnd: i,
    ...s
  }) {
    let u = Qf(!0),
      a = Gf();
    ((t = t || u || a), fe(t, !1));
    let c = s.onClick,
      l = pe(n),
      f = "hideAll" in t ? t.hideAll : void 0,
      d = !!f,
      h = _((x) => {
        if ((c?.(x), x.defaultPrevented || Uo(x) || qo(x) || !f)) return;
        let R = x.currentTarget.getAttribute("aria-haspopup");
        (R && R !== "false") || (l(x) && f());
      }),
      m = z(t, ["contentElement"], (x) => ("contentElement" in x ? x.contentElement : null)),
      v = (0, rm.useContext)(Yi);
    return (
      (s = { role: jo(m, "menuitem"), ...s, onClick: h }),
      (s = Br({
        store: t,
        preventScrollOnKeyDown: r,
        ...s,
        shouldRegisterItem: v ? !1 : s.shouldRegisterItem,
      })),
      (s = bo({
        store: t,
        ...s,
        focusOnHover(x) {
          let R = () => (typeof o == "function" ? o(x) : (o ?? !0));
          if (!t || !R()) return !1;
          let { compositeElement: b, items: g } = t.getState();
          return d
            ? (x.currentTarget.hasAttribute("aria-expanded") &&
                x.currentTarget.focus({ preventScroll: !0 }),
              !0)
            : ub(b, g, x.currentTarget)
              ? (x.currentTarget.focus({ preventScroll: !0 }), !0)
              : !1;
        },
        blurOnHoverEnd(x) {
          return typeof i == "function" ? i(x) : (i ?? d);
        },
      })),
      s
    );
  }),
  Qi = Ut(
    q(function (t) {
      let n = cb(t);
      return J(sb, n);
    })
  );
function om({ combobox: e, parent: t, menubar: n, ...r } = {}) {
  let o = !!n && !t,
    i = Cn(
      r.store,
      ui(t, ["values"]),
      ar(e, [
        "arrowElement",
        "anchorElement",
        "contentElement",
        "popoverElement",
        "disclosureElement",
        "placement",
        "currentPlacement",
      ])
    );
  let s = i.getState(),
    u = (t || n)?.getState().orientation === "vertical" ? "right-start" : "bottom-start",
    a = lr({ ...r, store: i, orientation: te(r.orientation, s.orientation, "vertical") }),
    c = _i({
      ...r,
      store: i,
      placement: te(r.placement, s.placement, u),
      timeout: te(r.timeout, s.timeout, o ? 0 : 150),
      hideTimeout: te(r.hideTimeout, s.hideTimeout, 0),
    }),
    l = {
      ...a.getState(),
      ...c.getState(),
      initialFocus: te(s.initialFocus, "container"),
      values: te(r.values, s.values, r.defaultValues, {}),
    },
    f = Ge(l, a, c, i);
  return (
    xe(f, () => e?.unstable_onHideRequest(c.unstable_requestHide)),
    xe(f, () =>
      me(f, ["mounted"], (d) => {
        d.mounted || f.setState("activeId", null);
      })
    ),
    {
      ...a,
      ...c,
      ...f,
      combobox: e,
      parent: t,
      menubar: n,
      hideAll: () => {
        (c.hide(), t?.hideAll());
      },
      setInitialFocus: (d) => f.setState("initialFocus", d),
      setValues: (d) => f.setState("values", d),
      setValue: (d, h) => {
        d !== "__proto__" &&
          d !== "constructor" &&
          (Array.isArray(d) ||
            f.setState("values", (m) => {
              let v = m[d],
                x = gn(h, v);
              return x === v ? m : { ...m, [d]: x !== void 0 && x };
            }));
      },
    }
  );
}
function lb(e, t, n) {
  return (
    It(t, [n.combobox, n.parent, n.menubar, t]),
    Ie(e, n, "values", "setValues"),
    Object.assign(Du(Xr(e, t, n), t, n), {
      combobox: n.combobox,
      parent: n.parent,
      menubar: n.menubar,
    })
  );
}
function Ir(e = {}) {
  let t = kt(),
    n = $f(),
    r = Ci();
  e = {
    ...e,
    parent: e.parent !== void 0 ? e.parent : t,
    menubar: e.menubar !== void 0 ? e.menubar : n,
    combobox: e.combobox !== void 0 ? e.combobox : r,
  };
  let [o, i] = ut(om, e);
  return lb(o, i, e);
}
var im = N(de(), 1);
function es(e = {}) {
  let t = Ir(e);
  return (0, im.jsx)(Gi, { value: t, children: e.children });
}
var fb = "hr",
  mb = Q(function ({ store: t, ...n }) {
    let r = kt();
    return ((t = t || r), (n = eu({ store: t, ...n })), n);
  }),
  ts = q(function (t) {
    let n = mb(t);
    return J(fb, n);
  });
var pb = new WeakMap(),
  sm = new WeakMap();
function xo(e) {
  e.scrollIntoView({ block: "nearest", inline: "nearest" });
}
function hb(e, t) {
  let n = Be(e);
  if (!n.getComputedStyle(t).writingMode.startsWith("horizontal")) return null;
  let r = null,
    o = null,
    i = e.parentElement;
  for (; i && t.contains(i);) {
    let s = n.getComputedStyle(i);
    if (s.overflowY !== "visible" && s.overflowY !== "clip" && i.scrollHeight > i.clientHeight) {
      if (r) return null;
      r = i;
    }
    if (s.overflowX !== "visible" && s.overflowX !== "clip" && i.scrollWidth > i.clientWidth) {
      if (o) return null;
      o = i;
    }
    if (i === t) break;
    i = i.parentElement;
  }
  return o && o !== r ? null : r;
}
function gb(e, t) {
  let n = e.getBoundingClientRect(),
    r = t.getBoundingClientRect(),
    o = r.width / t.offsetWidth || 1,
    i = r.left + t.clientLeft * o,
    s = i + t.clientWidth * o,
    u = t.clientWidth * o,
    a = n.left < i,
    c = n.right > s,
    l = (a && !c && n.width < u) || (c && !a && n.width > u),
    f = (a && !c && n.width > u) || (c && !a && n.width < u),
    d = 0;
  l ? (d = (n.left - i) / o) : f && (d = (n.right - s) / o);
  let h = r.height / t.offsetHeight || 1,
    m = (n.top + n.height / 2 - (r.top + (t.clientTop + t.clientHeight / 2) * h)) / h;
  t.scrollBy({ left: d, top: m });
}
function ns(e) {
  if (!e) return xo;
  let t = sm.get(e);
  if (t) return t;
  let n = (r) => {
    let { contentElement: o, moves: i, selectElement: s } = e.getState();
    if (!s || i !== pb.get(s) || !o?.contains(r)) return xo(r);
    let u = hb(r, o);
    if (!u) return xo(r);
    gb(r, u);
  };
  return (sm.set(e, n), n);
}
var je = N(ie(), 1),
  Pr = N(de(), 1);
var bb = "input";
function vb(e, t, n) {
  return n ? e.find((r) => !r.disabled && r.value)?.value === t : !1;
}
function um(e, t) {
  if (!t || e == null) return !1;
  let n = Tr(e),
    r = Tr(t);
  return n.length !== e.length || r.length !== t.length
    ? !1
    : r.length > n.length && r.toLowerCase().startsWith(n.toLowerCase());
}
function xb(e) {
  return e === "inline" || e === "list" || e === "both" || e === "none";
}
function yb(e) {
  return e.find((t) => (t.disabled ? !1 : t.element?.getAttribute("role") !== "tab"))?.id;
}
var Cb = Q(function ({
    store: t,
    focusable: n = !0,
    autoSelect: r = !1,
    getAutoSelectId: o,
    setValueOnChange: i,
    showMinLength: s = 0,
    showOnChange: u,
    showOnMouseDown: a,
    showOnClick: c = a,
    showOnKeyDown: l,
    showOnKeyPress: f = l,
    blurActiveItemOnClick: d,
    setValueOnClick: h = !0,
    moveOnKeyPress: m = !0,
    autoComplete: v = "list",
    name: x,
    form: R,
    disabled: b,
    ...g
  }) {
    let C = dr(!0),
      w = Ci();
    ((t = t || w || C), fe(t, !1));
    let L = (0, je.useRef)(null),
      [S, T] = ir(),
      p = (0, je.useRef)(!1),
      P = (0, je.useRef)(!1),
      M = (0, je.useRef)(null),
      y = () => {
        let B = M.current;
        B != null && (cancelAnimationFrame(B), (M.current = null));
      },
      E = z(t, ["virtualFocus"], (B) => B.virtualFocus && r),
      I = v === "inline" || v === "both",
      [A, V] = (0, je.useState)(I);
    ga(() => {
      I && V(!0);
    }, [I]);
    let D = z(t, "inputValue"),
      H = z(t, ["selectedValue"], (B) => {
        if (x && Array.isArray(B.selectedValue)) return B.selectedValue;
      }),
      K = Array.isArray(H),
      re = (0, je.useRef)(void 0);
    (0, je.useEffect)(
      () =>
        me(t, ["selectedValue", "activeId"], (B, k) => {
          re.current = k.selectedValue;
        }),
      [t]
    );
    let F = z(t, ["activeValue", "selectedValue", "activeId"], (B) => {
        if (
          I &&
          A &&
          !(
            B.activeValue &&
            Array.isArray(B.selectedValue) &&
            (B.selectedValue.includes(B.activeValue) || re.current?.includes(B.activeValue))
          )
        )
          return B.activeValue;
      }),
      U = z(t, "renderedItems"),
      G = z(t, "open"),
      Z = z(t, "contentElement"),
      he = z(t, "unstable_placing"),
      Oe = vb(U, F, E),
      O = (0, je.useMemo)(() => {
        if (!I || !A) return D;
        if (Oe) {
          if (um(D, F)) {
            let B = F?.slice(D.length) || "";
            return D + B;
          }
          return D;
        }
        return F || D;
      }, [I, A, Oe, F, D]);
    ((0, je.useEffect)(() => {
      let B = L.current;
      if (!B) return;
      let k = () => V(!0);
      return (
        B.addEventListener("combobox-item-move", k),
        () => {
          B.removeEventListener("combobox-item-move", k);
        }
      );
    }, []),
      (0, je.useEffect)(() => {
        if (!I || !A || !F || !Oe || !um(D, F)) return;
        let B = Ft;
        return (
          queueMicrotask(() => {
            let k = L.current;
            if (!k) return;
            let { start: ee, end: oe } = An(k),
              X = D.length,
              se = F.length;
            (_o(k, X, se),
              (B = () => {
                if (!wt(k)) return;
                let { start: Fe, end: lt } = An(k);
                Fe === X && lt === se && _o(k, ee, oe);
              }));
          }),
          () => B()
        );
      }, [S, I, A, F, Oe, D]));
    let j = _(o),
      ve = (0, je.useRef)(null),
      ye = (0, je.useRef)(void 0),
      ke = (0, je.useRef)(!1),
      Me = (0, je.useRef)(!1);
    ((0, je.useEffect)(() => {
      if (!G || !Z) return;
      let B = kn(Z);
      if (!B) return;
      let k = () => {
          ((p.current = !1), (ke.current = !0));
        },
        ee = () => {
          if ((Me.current || (ke.current = !0), !t || !p.current)) return;
          let { activeId: X } = t.getState();
          X !== null && X !== ve.current && (p.current = !1);
        },
        oe = { passive: !0, capture: !0 };
      return (
        B.addEventListener("wheel", k, oe),
        B.addEventListener("touchmove", k, oe),
        B.addEventListener("scroll", ee, oe),
        () => {
          (B.removeEventListener("wheel", k, !0),
            B.removeEventListener("touchmove", k, !0),
            B.removeEventListener("scroll", ee, !0));
        }
      );
    }, [G, Z, t]),
      $(() => {
        ((ke.current = !1), D && (P.current || (p.current = !0)));
      }, [D]),
      $(() => {
        (E !== "always" && G) || (p.current = G);
      }, [E, G]),
      $(() => {
        G || (ye.current = void 0);
      }, [G]));
    let Re = z(t, "resetValueOnSelect");
    (It(() => {
      let B = p.current;
      if (!t || !G || P.current || (!B && (!Re || ke.current))) return;
      let k = t.getState(),
        { compositeElement: ee, activeId: oe, selectElement: X, selectedValue: se } = k;
      if ((ee && !Zo(ee)) || k.unstable_placing) return;
      let Fe = t.item(oe)?.value,
        lt = Fe != null && (Array.isArray(se) ? se.includes(Fe) : se === Fe);
      if (E && B && !(X && !D && lt)) {
        let xt = j(U),
          ft = xt !== void 0 ? xt : (yb(U) ?? t.first());
        ve.current = ft;
        let kr = ft ?? null,
          vs = t.item(kr)?.value,
          xc = ye.current;
        kr !== oe || xc?.id !== kr || xc?.value !== vs
          ? ((ye.current = { id: kr, value: vs }), t.move(kr))
          : t.setState("activeValue", vs);
      } else {
        let xt = t.item(oe || t.first())?.element;
        xt &&
          "scrollIntoView" in xt &&
          ((Me.current = !0),
          xt.scrollIntoView({ block: "nearest", inline: "nearest" }),
          requestAnimationFrame(() => {
            Me.current = !1;
          }));
      }
    }, [t, G, he, S, D, E, Re, j, U]),
      (0, je.useEffect)(() => {
        if (!I) return;
        let B = L.current;
        if (!B) return;
        let k = [B, Z].filter((oe) => !!oe),
          ee = (oe) => {
            k.every((X) => qt(oe, X)) && t?.setInputValue(O);
          };
        for (let oe of k) oe.addEventListener("focusout", ee);
        return () => {
          for (let oe of k) oe.removeEventListener("focusout", ee);
        };
      }, [I, Z, t, O]));
    let He = (B) => B.currentTarget.value.length >= s,
      _e = g.onChange,
      Ne = pe(u ?? He),
      Dt = pe(i ?? !t.tag),
      We = _((B) => {
        if ((_e?.(B), B.defaultPrevented || !t)) return;
        let k = B.currentTarget,
          { value: ee, selectionStart: oe, selectionEnd: X } = k,
          se = B.nativeEvent;
        if (
          ((p.current = !0), na(se) && (se.isComposing && ((p.current = !1), (P.current = !0)), I))
        ) {
          let Fe = se.inputType === "insertText" || se.inputType === "insertCompositionText",
            lt = oe === ee.length;
          V(Fe && lt);
        }
        if (Dt(B)) {
          let Fe = ee === t.getState().inputValue;
          (t.setInputValue(ee),
            queueMicrotask(() => {
              _o(k, oe, X);
            }),
            I && E && Fe && T());
        }
        (Ne(B) && t.show(), (!E || !p.current) && t.setActiveId(null));
      });
    (0, je.useEffect)(() => y, []);
    let ht = g.onCompositionStart,
      Tt = _((B) => {
        (y(), (p.current = !1), (P.current = !0), ht?.(B));
      }),
      Qe = g.onCompositionEnd,
      Ot = _((B) => {
        ((p.current = !0),
          (P.current = !1),
          Qe?.(B),
          !B.defaultPrevented &&
            E &&
            (y(),
            (M.current = requestAnimationFrame(() => {
              ((M.current = null), !P.current && T());
            }))));
      }),
      gt = g.onMouseDown,
      bt = pe(d ?? (() => t.getState().compositeElementInFocusOrder)),
      jt = pe(h),
      Xe = pe(c ?? He),
      Lt = _((B) => {
        (gt?.(B),
          !B.defaultPrevented &&
            (B.button ||
              B.ctrlKey ||
              (t &&
                (bt(B) && t.setActiveId(null),
                jt(B) && t.setInputValue(O),
                Xe(B) && Tn(B.currentTarget, "mouseup", t.show)))));
      }),
      Jn = g.onKeyDown,
      Zn = pe(f ?? He),
      Y = _((B) => {
        if ((Jn?.(B), B.repeat || (p.current = !1), B.defaultPrevented || !t)) return;
        let { open: k } = t.getState();
        if (k && B.key === "Enter") {
          B.preventDefault();
          return;
        }
        B.ctrlKey ||
          B.altKey ||
          B.shiftKey ||
          B.metaKey ||
          k ||
          ((B.key === "ArrowUp" || B.key === "ArrowDown") &&
            Zn(B) &&
            (B.preventDefault(), t.show()));
      }),
      ue = g.onBlur,
      Ce = _((B) => {
        ((p.current = !1), ue?.(B));
      }),
      Le = Te(g.id),
      Ue = xb(v) ? v : void 0,
      St = z(t, ["activeId"], (B) => B.activeId === null),
      pn = dt({ disabled: b, "aria-disabled": g["aria-disabled"] }),
      tn = g.composite !== !1,
      [, Qn] = ti(tn ? null : t.setCompositeElement),
      vt = z(t, K ? ["compositeElement"] : [], (B) => (K ? B.compositeElement : null));
    ((g = ge(
      g,
      (B) =>
        !x || !Array.isArray(H) || (tn && !vt)
          ? B
          : (0, Pr.jsxs)(Pr.Fragment, {
              children: [
                B,
                H.map((k, ee) =>
                  (0, Pr.jsx)(
                    "input",
                    { type: "hidden", name: x, form: R, disabled: pn, value: k },
                    ee
                  )
                ),
              ],
            }),
      [x, R, pn, tn, vt, H]
    )),
      (g = {
        role: "combobox",
        "aria-autocomplete": Ue,
        "aria-haspopup": sn(Z, "listbox"),
        "aria-expanded": G,
        "aria-controls": Z?.id,
        "data-active-item": St || void 0,
        value: O,
        ...g,
        id: Le,
        name: K ? void 0 : x,
        form: R,
        disabled: b,
        ref: ae(L, t.setInputElement, tn ? void 0 : Qn, g.ref),
        onChange: We,
        onCompositionStart: Tt,
        onCompositionEnd: Ot,
        onMouseDown: Lt,
        onKeyDown: Y,
        onBlur: Ce,
      }));
    let hn = ns(t);
    return (
      (g = zr({
        store: t,
        unstable_scrollIntoView: hn,
        focusable: n,
        ...g,
        moveOnKeyPress: (B) => (Wo(m, B) ? !1 : (I && V(!0), !0)),
      })),
      { autoComplete: "off", ...g }
    );
  }),
  rs = q(function (t) {
    let n = Cb(t);
    return J(bb, n);
  });
var os = N(ie(), 1),
  zu = N(de(), 1);
var Sb = "div";
function wb(e, t) {
  if (t != null) return e == null ? !1 : Array.isArray(e) ? e.includes(t) : e === t;
}
function Eb(e) {
  return Ms(e) ?? "option";
}
var Ib = Q(function ({
    store: t,
    value: n,
    hideOnClick: r,
    setValueOnClick: o,
    selectValueOnClick: i = !0,
    resetValueOnSelect: s,
    focusOnHover: u,
    moveOnKeyPress: a = !0,
    preventScrollOnKeyDown: c,
    getItem: l,
    ...f
  }) {
    let d = dr();
    ((t = t || d), fe(t, !1));
    let h = Te(f.id),
      m = (0, os.useContext)(yi),
      v = m?.store === t,
      {
        resetValueOnSelectState: x,
        multiSelectable: R,
        selected: b,
        autoFocusSelected: g,
        selectElement: C,
        contentElement: w,
      } = Vn(t, ["selectedValue"], {
        resetValueOnSelectState: "resetValueOnSelect",
        multiSelectable(Z) {
          return Array.isArray(Z.selectedValue);
        },
        selected(Z) {
          return wb(Z.selectedValue, n);
        },
        autoFocusSelected(Z) {
          return n == null
            ? !1
            : Array.isArray(Z.selectedValue)
              ? Z.selectedValue[Z.selectedValue.length - 1] === n
              : Z.selectedValue === n;
        },
        selectElement: "selectElement",
        contentElement: "contentElement",
      }),
      L = !!C,
      S = !!C,
      T = dt(f),
      p = (0, os.useCallback)(
        (Z) => {
          let he = { ...Z, value: S && T ? void 0 : n };
          return l ? l(he) : he;
        },
        [S, T, n, l]
      );
    ((o = o ?? (!S && !R)), (r = r ?? (n != null && !R)), (c = c ?? S));
    let P = v ? m?.role : sn(w),
      M = Eb(typeof P == "string" ? P : void 0),
      y = f.onClick,
      E = pe(o),
      I = pe(i),
      A = pe(s ?? x),
      V = pe(r),
      D = _((Z) => {
        (y?.(Z),
          !Z.defaultPrevented &&
            (Uo(Z) ||
              qo(Z) ||
              (n != null &&
                (I(Z) &&
                  (A(Z) && t?.resetInputValue(),
                  t?.setSelectedValue((he) =>
                    Array.isArray(he)
                      ? he.includes(n)
                        ? he.filter((Oe) => Oe !== n)
                        : [...he, n]
                      : n
                  )),
                E(Z) && t?.setInputValue(n)),
              V(Z) && t?.hide())));
      }),
      H = f.onKeyDown,
      K = _((Z) => {
        if ((H?.(Z), Z.defaultPrevented)) return;
        let he = t?.getState().compositeElement;
        if (!he || wt(he)) return;
        let Oe = Z.key.length === 1 && !Z.ctrlKey && !Z.metaKey,
          O = (nr() ? Z.metaKey : Z.ctrlKey) && Z.key.toLowerCase() === "v",
          j = Z.key === "Backspace" || Z.key === "Delete";
        if (Oe || O || j) {
          if (he === C) return;
          if (et(he)) {
            (queueMicrotask(() => he.focus()), t?.setInputValue(he.value));
            return;
          }
          (he.focus(), "value" in he && typeof he.value == "string" && t?.setInputValue(he.value));
        }
      });
    ((S || R) && b != null && (f = { "aria-selected": b, ...f }),
      (f = ge(
        f,
        (Z) =>
          (0, zu.jsx)(gl.Provider, {
            value: n,
            children: (0, zu.jsx)(bl.Provider, { value: b ?? !1, children: Z }),
          }),
        [n, b]
      )));
    let re = L ? g : void 0;
    ((f = { role: M, children: n, ...f, id: h, onClick: D, onKeyDown: K }),
      f.autoFocus === void 0 &&
        re !== void 0 &&
        ((f.autoFocus = !1), (f["data-autofocus"] = re || void 0)));
    let F = pe(a),
      U = ns(t);
    f = Br({
      store: t,
      unstable_scrollIntoView: U,
      ...f,
      getItem: p,
      preventScrollOnKeyDown: c,
      moveOnKeyPress: (Z) => {
        if (!F(Z)) return !1;
        let he = new Event("combobox-item-move");
        return (t?.getState().compositeElement?.dispatchEvent(he), !0);
      },
    });
    let G = pe(u ?? S);
    return (
      (f = bo({
        store: t,
        ...f,
        focusOnHover(Z) {
          return !t.getState().open || !G(Z) ? !1 : t.getState().open;
        },
      })),
      f
    );
  }),
  is = Ut(
    q(function (t) {
      let n = Ib(t);
      return J(Sb, n);
    })
  );
var Qt = N(ie(), 1),
  yo = N(de(), 1);
var Pb = "div",
  Mb = Q(function ({ store: t, alwaysVisible: n, ...r }) {
    let o = dr(!0),
      i = Xs();
    t = t || i;
    let s = !!t && t === o;
    fe(t, !1);
    let u = r.onFocus,
      a = _((E) => {
        if ((u?.(E), E.defaultPrevented || !De(E))) return;
        let I = t.getState().compositeElement;
        if (!I || !Ke(I)) return;
        let A = E.currentTarget;
        queueMicrotask(() => {
          On(A) === A && I.focus();
        });
      }),
      c = (0, Qt.useRef)(null),
      l = Te(r.id),
      f = z(t, "mounted"),
      d = an(f, r.hidden, n),
      h = d ? { ...r.style, display: "none" } : r.style,
      m = z(t, ["selectedValue"], (E) => Array.isArray(E.selectedValue)),
      v = Ls(c, "role", r.role),
      x = (0, Qt.useMemo)(() => ({ store: t, role: v }), [t, v]),
      R = ((v === "listbox" || v === "tree" || v === "grid") && m) || void 0,
      [b, g] = (0, Qt.useState)(!1),
      C = z(t, "contentElement"),
      w = (0, Qt.useContext)(Js),
      L = (0, Qt.useState)(),
      [S, T] = w || L,
      p = (0, Qt.useMemo)(() => [S, T], [S, T]);
    ($(() => {
      if (!f) return;
      let E = c.current;
      if (!E || C !== E) return;
      let I = () => {
          g(!!E.querySelector("[data-combobox-list]"));
        },
        A = new MutationObserver(I);
      return (A.observe(E, { subtree: !0, childList: !0 }), I(), () => A.disconnect());
    }, [f, C]),
      b || (r = { role: "listbox", "aria-multiselectable": R, ...r }),
      (r = ge(
        r,
        (E) =>
          (0, yo.jsx)(hl, {
            value: t,
            children: (0, yo.jsx)(Js.Provider, {
              value: p,
              children: (0, yo.jsx)(bi.Provider, {
                value: T,
                children: (0, yo.jsx)(yi.Provider, { value: x, children: E }),
              }),
            }),
          }),
        [t, x, p]
      )));
    let P = l && (!o || !s) ? t.setContentElement : null,
      M = z(t, ["labelElement", "selectLabelElement"], (E) =>
        S ? null : E.selectLabelElement || E.labelElement
      );
    Ls(M, "id");
    let y = S || M?.id;
    return (
      (r = {
        "data-combobox-list": "",
        "aria-labelledby": r["aria-label"] != null ? void 0 : y,
        hidden: d,
        ...r,
        id: l,
        onFocus: a,
        ref: ae(P, c, r.ref),
        style: h,
        tabIndex: -1,
      }),
      r
    );
  }),
  ss = q(function (t) {
    let n = Mb(t);
    return J(Pb, n);
  });
var Ku = N(ie(), 1),
  AP = (0, Ku.createContext)(null),
  kP = (0, Ku.createContext)(null),
  Co = qe([xn], [Gt]),
  cm = Co.useContext,
  DP = Co.useScopedContext,
  TP = Co.useProviderContext,
  OP = Co.ContextProvider,
  LP = Co.ScopedContextProvider;
var Rb = rr() && Rs();
function am({ tag: e, ...t } = {}) {
  let n = Cn(t.store, ui(e, ["value", "rtl"])),
    r = te(t.defaultInputValue, t.defaultValue);
  ({ ...t });
  let o = e?.getState(),
    i = n?.getState(),
    s = te(t.activeId, i?.activeId, t.defaultActiveId, null),
    u = lr({
      ...t,
      activeId: s,
      compositeElementInFocusOrder: te(
        t.compositeElementInFocusOrder,
        t.includesBaseElement,
        i?.compositeElementInFocusOrder,
        i?.includesBaseElement,
        !0
      ),
      orientation: te(t.orientation, i?.orientation, "vertical"),
      focusLoop: te(t.focusLoop, i?.focusLoop, !0),
      focusWrap: te(t.focusWrap, i?.focusWrap, !0),
      virtualFocus: te(t.virtualFocus, i?.virtualFocus, !0),
    }),
    a = wr({ ...t, placement: te(t.placement, i?.placement, "bottom-start") }),
    c = te(t.inputValue, t.value, i?.inputValue, i?.value, r, ""),
    l = te(t.selectedValue, i?.selectedValue, o?.values, t.defaultSelectedValue, ""),
    f =
      t.selectedValue === void 0 &&
      i?.selectedValue === void 0 &&
      o?.values === void 0 &&
      t.defaultSelectedValue === void 0,
    d = Array.isArray(l),
    h = {
      ...u.getState(),
      ...a.getState(),
      inputValue: c,
      value: c,
      selectedValue: l,
      resetValueOnSelect: te(t.resetValueOnSelect, i?.resetValueOnSelect, d),
      resetValueOnHide: te(t.resetValueOnHide, i?.resetValueOnHide, d && !e),
      selectOnMove: te(t.selectOnMove, i?.selectOnMove, !1),
      activeValue: i?.activeValue,
      inputElement: te(i?.inputElement, null),
      labelElement: te(i?.labelElement, null),
      selectElement: te(i?.selectElement, null),
      selectLabelElement: te(i?.selectLabelElement, null),
    },
    m = Ge(h, u, a, n);
  xe(m, () =>
    Ee(
      me(m, ["inputValue"], (S) => {
        m.setState("value", S.inputValue);
      }),
      me(m, ["value"], (S) => {
        m.setState("inputValue", S.value);
      })
    )
  );
  let v = !1,
    x = new Set();
  (t.focusLoop === void 0 && i?.focusLoop === void 0 && x.add("focusLoop"),
    t.focusWrap === void 0 && i?.focusWrap === void 0 && x.add("focusWrap"),
    t.compositeElementInFocusOrder === void 0 &&
      t.includesBaseElement === void 0 &&
      i?.compositeElementInFocusOrder === void 0 &&
      i?.includesBaseElement === void 0 &&
      x.add("compositeElementInFocusOrder"),
    t.resetValueOnSelect === void 0 &&
      i?.resetValueOnSelect === void 0 &&
      x.add("resetValueOnSelect"));
  let R = h.compositeElement === h.selectElement ? h.selectElement : null,
    b = h.selectElement || h.compositeElement || h.disclosureElement,
    g = h.anchorElement === b ? h.anchorElement : null;
  (xe(m, () =>
    me(m, ["compositeElement", "selectElement"], (S) => {
      if (!(!S.selectElement && !R)) {
        if (S.compositeElement && S.compositeElement === S.selectElement) {
          R = S.selectElement;
          return;
        }
        if (S.compositeElement && S.compositeElement !== R) {
          R = null;
          return;
        }
        ((R = S.selectElement), m.setState("compositeElement", R));
      }
    })
  ),
    xe(m, () =>
      me(m, ["selectElement"], (S) => {
        if (!S.selectElement) return;
        let {
          focusLoop: T,
          focusWrap: p,
          compositeElementInFocusOrder: P,
          resetValueOnSelect: M,
        } = m.getState();
        return (
          x.has("focusLoop") && u.setState("focusLoop", !1),
          x.has("focusWrap") && u.setState("focusWrap", !1),
          x.has("compositeElementInFocusOrder") && u.setState("compositeElementInFocusOrder", !1),
          x.has("resetValueOnSelect") && m.setState("resetValueOnSelect", !0),
          () => {
            let y = m.getState();
            (x.has("focusLoop") && !y.focusLoop && u.setState("focusLoop", T),
              x.has("focusWrap") && !y.focusWrap && u.setState("focusWrap", p),
              x.has("compositeElementInFocusOrder") &&
                !y.compositeElementInFocusOrder &&
                u.setState("compositeElementInFocusOrder", P),
              x.has("resetValueOnSelect") &&
                y.resetValueOnSelect &&
                m.setState("resetValueOnSelect", M));
          }
        );
      })
    ),
    xe(m, () =>
      me(m, ["anchorElement", "compositeElement", "disclosureElement", "selectElement"], (S) => {
        if (S.anchorElement && S.anchorElement !== g) {
          g = null;
          return;
        }
        ((g = S.selectElement || S.compositeElement || S.disclosureElement),
          m.setState("anchorElement", g));
      })
    ),
    xe(m, () =>
      me(m, ["items", "selectedValue", "selectElement"], (S, T) => {
        if (f) {
          if (S.selectedValue !== T.selectedValue) {
            f = !1;
            return;
          }
          S.selectElement &&
            queueMicrotask(() => {
              if (!f) return;
              let p = m.getState();
              if (!p.selectElement) return;
              let P = p.items.find((M) => !M.disabled && M.value != null);
              P?.value != null && ((f = !1), m.setState("selectedValue", P.value));
            });
        }
      })
    ),
    Rb &&
      xe(m, () =>
        me(m, ["virtualFocus"], () => {
          m.setState("virtualFocus", !1);
        })
      ),
    xe(m, () => {
      if (e)
        return Ee(
          me(m, ["selectedValue"], (S) => {
            Array.isArray(S.selectedValue) && e.setValues(S.selectedValue);
          }),
          me(e, ["values"], (S) => {
            m.setState("selectedValue", S.values);
          })
        );
    }),
    xe(m, () =>
      me(m, ["resetValueOnHide", "mounted"], (S) => {
        S.resetValueOnHide && (S.mounted || m.setState("inputValue", c));
      })
    ),
    xe(m, () =>
      me(m, ["open"], (S) => {
        if (S.open) {
          v = !0;
          return;
        }
        ((v = !1), m.setState("activeId", s), m.setState("moves", 0));
      })
    ),
    xe(m, () =>
      me(m, ["moves", "activeId"], (S, T) => {
        (S.moves !== T.moves && (v = !1),
          S.activeId !== T.activeId && (v = !1),
          S.moves === T.moves && m.setState("activeValue", void 0));
      })
    ),
    xe(m, () =>
      yn(m, ["moves", "renderedItems"], (S, T) => {
        if (S.moves === T.moves) return;
        let { activeId: p } = m.getState(),
          P = u.item(p);
        m.setState("activeValue", P?.value);
      })
    ),
    xe(m, () =>
      me(m, ["items", "mounted", "open", "selectedValue", "selectElement"], (S) => {
        if (!S.selectElement || (S.mounted && !v)) return;
        let T = Array.isArray(S.selectedValue) ? S.selectedValue : [S.selectedValue],
          p = T[T.length - 1];
        if (p == null) return;
        let P = S.items.find((M) => !M.disabled && M.value === p);
        P && ((v = !1), m.setState("activeId", P.id));
      })
    ),
    xe(m, () =>
      yn(m, ["selectOnMove", "moves"], (S) => {
        let { activeId: T, open: p, selectedValue: P, selectElement: M } = m.getState();
        if (!M || (!S.selectOnMove && p) || Array.isArray(P) || !S.moves || !T) return;
        let y = u.item(T);
        !y || y.disabled || y.value == null || m.setState("selectedValue", y.value);
      })
    ));
  let C = (S) => {
      m.setState("inputValue", S);
    },
    w = () => C(h.inputValue),
    L = (S, T) => {
      (x.delete(S),
        S === "includesBaseElement" && x.delete("compositeElementInFocusOrder"),
        S === "selectedValue" && (f = !1),
        m.setState(S, T));
    };
  return {
    ...a,
    ...u,
    ...m,
    setState: L,
    tag: e,
    setInputValue: C,
    resetInputValue: w,
    setValue: C,
    resetValue: w,
    setSelectedValue: (S) => L("selectedValue", S),
    setInputElement: (S) => m.setState("inputElement", S),
    setLabelElement: (S) => m.setState("labelElement", S),
    setSelectElement: (S) => m.setState("selectElement", S),
    setSelectLabelElement: (S) => m.setState("selectLabelElement", S),
  };
}
function kb(e) {
  let t = cm();
  return ((e = { ...e, tag: e.tag !== void 0 ? e.tag : t }), Zs(e));
}
function Db(e, t, n) {
  It(t, [n.tag, t]);
  let r = { inputValue: n.inputValue ?? n.value, setInputValue: n.setInputValue ?? n.setValue };
  return (
    Ie(e, r, "inputValue", "setInputValue"),
    Ie(e, n, "selectedValue", "setSelectedValue"),
    Ie(e, n, "selectOnMove"),
    Ie(e, n, "resetValueOnHide"),
    Ie(e, n, "resetValueOnSelect"),
    Object.assign(Xr(po(e, t, n), t, n), { tag: n.tag })
  );
}
function ju(e = {}) {
  e = kb(e);
  let [t, n] = ut(am, e);
  return Db(t, n, e);
}
var lm = N(de(), 1);
function us(e = {}) {
  let t = ju(e);
  return (0, lm.jsx)(pl, { value: t, children: e.children });
}
var Ye = N(ie(), 1);
var cs = 800,
  fm = 0.9,
  mm = 4,
  dm = Ct.values.menuPadding * 2,
  pm = -Ct.values.menuPadding,
  hm = 40,
  Tb = 4,
  gm = Ct.values.avatarSize + Tb * 2,
  _u = 1,
  bm = "mu6ry6k",
  vm = "m1irwbe6",
  xm = "mqwxsfx",
  ym = "my9bzvl",
  Cm = be(Vc, "ihvwyj9"),
  Sm = "s1aq9ud6",
  wm = "b1r3i2ed",
  Em = "adwpnn1",
  Im = "ak05by6",
  Pm = "d1ide4av",
  qu = "bqsdyuc",
  Mm = "d10bnj1v",
  Rm = "c1lrhh4u",
  Uu = "c1fc9sk1",
  Yn = "lfbiwg1",
  $u = be(Yn, "l154ipfz"),
  Gu = "m1e3rcy1",
  Yu = "mxzzb2k",
  Am = be(Yu, "m8c9l16"),
  km = "m1t22t6v",
  Dm = "me5hedy",
  Tm = "msnmoi2",
  Om = be(Yn, "m19qrosd"),
  Lm = "s1vev1e1",
  Ob = "msbtwy1",
  Fm = be(Ob, "m1d3tuh7"),
  Vm = "a1nw69yk",
  g0 = "i5l2dp5",
  Hm = "m4c5y86",
  Nm = "wz1j6h7",
  Wm = "s6v9qln",
  Bm = "s1pch1jc",
  zm = "s1eng4sn",
  Km = "e17nx5wn",
  jm = "a12bxrva",
  as = "m1j21kss",
  ls = "m1s6bdnk";
var le = N(ie(), 1),
  Ym = N(de(), 1);
var Xm = N(To(), 1),
  Lb = "div",
  qm = (0, le.createContext)(null),
  Fb = { current: null };
function Um() {
  let e = 0;
  return {
    run: (r) => {
      e ||
        (e = requestAnimationFrame(() => {
          ((e = 0), r());
        }));
    },
    cancel: () => {
      (cancelAnimationFrame(e), (e = 0));
    },
  };
}
function Vb(e, t, n) {
  let r = 0,
    o = Mr(e) - 1;
  for (; r <= o;) {
    let i = ((r + o) / 2) | 0,
      s = n(i);
    if (s === t) return i;
    s < t ? (r = i + 1) : (o = i - 1);
  }
  return r > 0 ? r - 1 : 0;
}
function Mr(e) {
  return typeof e == "number" ? e : e.length;
}
function Zu(e) {
  return !e || typeof e != "object" ? { value: e } : e;
}
function Rr(e, t, n) {
  if ((fe(n, "CollectionRenderer must be given an `id` prop."), e && typeof e == "object")) {
    let r = Zu(e);
    if (r.id != null) return r.id;
  }
  return `${n}/${t}`;
}
function wo(e, t) {
  if (typeof e == "number") return t >= e ? null : {};
  let n = e[t];
  return n ? (typeof n == "object" ? n : { value: n }) : null;
}
function Eo(e, t, n) {
  let r = Zu(e),
    o = t ? "width" : "height",
    i = r.style;
  if (i) {
    let c = i[o];
    if (typeof c == "number") return c;
  }
  let s = r.items,
    u =
      !r.orientation ||
      (t && r.orientation === "horizontal") ||
      (!t && r.orientation === "vertical");
  if (s?.length && u) {
    let c = (r.paddingStart ?? r.padding ?? 0) + (r.paddingEnd ?? r.padding ?? 0),
      l = (r.gap ?? 0) * (s.length - 1) + c;
    if (r.itemSize) return l + r.itemSize * s.length;
    let f = s.reduce((d, h) => d + Eo(h, t), l);
    if (f !== l) return f;
  }
  let a = n !== !1 ? r.element || n : null;
  if (a?.isConnected) return a.getBoundingClientRect()[o];
  if (s?.length && !u) {
    let c = s.reduce((l, f) => Math.max(l, Eo(f, t)), 0);
    if (c) return c;
  }
  return 0;
}
function Hb(e) {
  let t = Mr(e.items),
    n = 0,
    r = e.estimatedItemSize,
    o = (i) => {
      let s = n;
      ((n = n + 1), (r = (r * s + i) / n));
    };
  for (let i = 0; i < t; i += 1) {
    let s = wo(e.items, i),
      u = Rr(s, i, e.baseId),
      a = e.data.get(u),
      c = e.elements.get(u),
      l = Eo(s, e.horizontal, c);
    l ? o(l) : a?.rendered && o(a.end - a.start);
  }
  return r;
}
function Ju(e, t) {
  return "scrollX" in e ? (t ? e.scrollX : e.scrollY) : t ? e.scrollLeft : e.scrollTop;
}
function Xu(e) {
  let { defaultView: t, documentElement: n } = e.ownerDocument;
  return e === n ? t : e;
}
function $m(e, t) {
  if (t === void 0) return kn(e);
  if (typeof t == "function") return t(e);
  let n = t;
  return ze(n) ? n : t && "current" in t ? t.current : t;
}
function Gm() {
  return null;
}
function Nb(e, t, n) {
  let [r, o] = (0, le.useState)(null),
    i = (0, le.useRef)(null),
    s = (0, le.useRef)(null),
    u = (0, le.useRef)(!1),
    a = (0, le.useRef)(e),
    c = (0, le.useRef)({ revalidated: !1, resolve: Gm }),
    l = (0, le.useMemo)(
      () => ({
        disable: () => {
          c.current = { revalidated: !0, resolve: Gm };
        },
        invalidate: () => {
          c.current = { ...c.current, revalidated: !1 };
        },
        revalidate: () => {
          let { revalidated: d, resolve: h } = c.current;
          if (d) return;
          c.current = { revalidated: !0, resolve: h };
          let m = h();
          ((i.current = m), m !== s.current && ((s.current = m), o(m)));
        },
        setResolve: (d) => {
          c.current = { revalidated: !1, resolve: d };
        },
      }),
      []
    ),
    f = () => {
      let d = e?.current;
      return d ? $m(d, t) : null;
    };
  return (
    $(() => {
      if ((n?.invalidate(), t === void 0)) {
        (l.disable(), (s.current = null));
        return;
      }
      ((s.current = r), l.setResolve(f), (i.current = f()));
    }),
    (0, le.useEffect)(() => {
      if (t === void 0) {
        (n?.revalidate(), a.current !== e && ((a.current = e), (u.current = !1)));
        let h = e?.current;
        h
          ? u.current || ((i.current = $m(h, t)), (u.current = !0))
          : ((u.current = !1), (i.current = null));
      } else {
        ((u.current = !1), l.revalidate());
        return;
      }
      let d = i.current;
      d !== r && o(d);
    }),
    [r, i, l]
  );
}
function Wb(e, t, n) {
  let r = Be(e),
    o = r?.document.documentElement,
    i = e.getBoundingClientRect(),
    s = n ? i.left : i.top;
  if (t === o) return Ju(r, n) + s;
  let u = t.getBoundingClientRect(),
    a = n ? u.left : u.top,
    c = Ju(t, n);
  return s - a + c;
}
function So(e, t, n) {
  let r = Ju(t, n),
    o = Wb(e, t, n),
    i = n ? t.clientWidth : t.clientHeight,
    s = r - o;
  return { start: s, end: s + i };
}
function Bb(e) {
  let t = Mr(e.items),
    n = e.paddingStart + e.paddingEnd;
  if (!t) return n;
  let r = t - 1,
    o = r * e.gap;
  if (e.itemSize != null) return t * e.itemSize + o + n;
  let i = t * e.estimatedItemSize + o + n;
  if (!e.baseId) return i;
  let s = Rr(wo(e.items, r), r, e.baseId),
    u = e.data.get(s);
  if (u?.end) return u.end + e.paddingEnd;
  if (!Array.isArray(e.items)) return i;
  let a = e.items.reduce((c, l) => c + Eo(l, e.horizontal, !1), 0);
  return a ? a + o + n : i;
}
function zb(e) {
  let t = Mr(e.items),
    n,
    r = e.paddingStart,
    o = Hb(e);
  for (let i = 0; i < t; i += 1) {
    let s = wo(e.items, i),
      u = Rr(s, i, e.baseId),
      a = e.data.get(u),
      c = a?.rendered ?? !1,
      l = (d, h = c) => {
        i > 0 && (r += e.gap);
        let m = r + d;
        (Ho(a, { index: i, rendered: h, start: r, end: m }) ||
          (n || (n = new Map(e.data)), n.set(u, { index: i, rendered: h, start: r, end: m })),
          (r = m));
      },
      f = Eo(s, e.horizontal, e.elements.get(u));
    f ? l(f, !0) : a?.rendered ? l(a.end - a.start, !0) : l(o);
  }
  return n;
}
function Qu({
  store: e,
  items: t,
  initialItems: n = 0,
  gap: r = 0,
  itemSize: o,
  estimatedItemSize: i = 40,
  overscan: s,
  orientation: u,
  padding: a = 0,
  paddingStart: c = a,
  paddingEnd: l = a,
  persistentIndices: f,
  scrollElement: d,
  renderOnScroll: h = !0,
  renderOnResize: m = !!h,
  children: v,
  ...x
}) {
  let R = oi(),
    b = e || R,
    g = z(b, ["items"], (Y) => t ?? Y?.items);
  fe(g != null, !1);
  let C = (0, le.useContext)(qm),
    w = b && C?.store !== b ? null : C,
    L = w?.childrenData,
    S = u ?? w?.orientation ?? "vertical",
    T = s ?? w?.overscan ?? 1,
    p = d === void 0 ? w?.scroller : void 0,
    P = d === void 0 ? w?.scrollerRef : void 0,
    M = d === void 0 ? w?.scrollerController : void 0,
    y = (0, le.useRef)(null),
    E = Te(x.id),
    I = S === "horizontal",
    A = (0, le.useMemo)(() => new Map(), []),
    [V, D] = ir(),
    H = (0, le.useCallback)(
      (Y, ue, Ce) =>
        zb({
          baseId: ue,
          items: Ce,
          data: Y,
          gap: r,
          elements: A,
          horizontal: I,
          paddingStart: c,
          estimatedItemSize: i,
        }),
      [r, A, I, c, i]
    ),
    [K, re] = (0, le.useState)(() => {
      if (!n) return [];
      let Y = Mr(g),
        ue = Math.min(Y, Math.abs(n));
      return Array.from({ length: ue }, (Ce, Le) => (n < 0 ? Y - Le - 1 : Le));
    }),
    F = (0, le.useMemo)(() => {
      if (!f) return K;
      let Y = K.slice();
      for (let ue of f) ue < 0 || Y.includes(ue) || Y.push(ue);
      return (Y.sort((ue, Ce) => ue - Ce), Ho(K, Y) ? K : Y);
    }, [K, f]),
    [U, G] = (0, le.useState)(() => {
      if (!E) return new Map();
      let Y = L?.get(E) || new Map();
      return o != null || !g ? Y : H(Y, E, g) || Y;
    }),
    Z = (0, le.useMemo)(
      () =>
        Bb({
          baseId: E,
          items: g,
          data: U,
          gap: r,
          horizontal: I,
          itemSize: o,
          estimatedItemSize: i,
          paddingStart: c,
          paddingEnd: l,
        }),
      [E, g, U, r, I, o, i, c, l]
    );
  ((0, le.useEffect)(() => {
    E && L?.set(E, U);
  }, [E, L, U]),
    (0, le.useEffect)(() => {
      if (o != null || !E || !g) return;
      let Y = H(U, E, g);
      Y && G(Y);
    }, [V, o, E, g, U, H]));
  let [he, Oe, O] = Nb(g && p === void 0 ? y : null, d, M),
    j = d === null ? null : p === void 0 ? he : p,
    ve = d === null ? Fb : P === void 0 ? Oe : P,
    ye = d === void 0 ? M : d === null ? void 0 : O,
    ke = (0, le.useRef)({ start: 0, end: 0 }),
    Me = (0, le.useCallback)(() => {
      let Y = ke.current;
      if ((ye?.revalidate(), ve.current !== j || !j || !g || !E || !Y.end || (!U.size && !o)))
        return;
      let ue = Mr(g),
        Ce = (vt, hn = "start") => {
          if (o) {
            let k = o * vt + r * vt + c;
            return hn === "start" ? k : k + o;
          }
          let B = Rr(wo(g, vt), vt, E);
          return U.get(B)?.[hn] ?? 0;
        },
        Le = Vb(g, Y.start, Ce),
        Ue = Le;
      for (; Ue < ue && Ce(Ue) < Y.end;) Ue += 1;
      let St = Ue - Le ? T : 0,
        pn = Math.max(Le - St, 0),
        tn = Math.min(Ue + St, ue),
        Qn = Array.from({ length: tn - pn }, (vt, hn) => hn + pn);
      re((vt) => (Ho(vt, Qn) ? vt : Qn));
    }, [V, j, ve, ye, g, E, U, o, r, c, T]);
  (0, le.useEffect)(Me, [Me]);
  let Re = _(Me);
  (0, le.useEffect)(() => {
    let Y = y.current;
    Y && j && ((ke.current = So(Y, j, I)), Re());
  }, [j, I, Re]);
  let He = !!h,
    _e = pe(h);
  (0, le.useEffect)(() => {
    if (!He) return;
    let Y = y.current;
    if (!Y || !j) return;
    let ue = Xu(j);
    if (!ue) return;
    let Ce = Um(),
      Le = (Ue) => {
        Ce.run(() => {
          _e(Ue) && ((ke.current = So(Y, j, I)), Re());
        });
      };
    return (
      ue.addEventListener("scroll", Le, { passive: !0 }),
      () => {
        (Ce.cancel(), ue.removeEventListener("scroll", Le));
      }
    );
  }, [He, j, _e, I, Re]);
  let Ne = !!m,
    Dt = pe(m);
  ((0, le.useEffect)(() => {
    if (!Ne) return;
    let Y = y.current;
    if (!Y || !j) return;
    let ue = Xu(j);
    if (!ue) return;
    let Ce = Um();
    if (ue === j) {
      if (typeof ResizeObserver != "function") return;
      let Ue = !0,
        St = new ResizeObserver(() => {
          if (Ue) {
            Ue = !1;
            return;
          }
          Ce.run(() => {
            Dt(j) && ((ke.current = So(Y, j, I)), Re());
          });
        });
      return (
        St.observe(j),
        () => {
          (Ce.cancel(), St.disconnect());
        }
      );
    }
    let Le = () => {
      Ce.run(() => {
        Dt(j) && ((ke.current = So(Y, j, I)), Re());
      });
    };
    return (
      ue.addEventListener("resize", Le, { passive: !0 }),
      () => {
        (Ce.cancel(), ue.removeEventListener("resize", Le));
      }
    );
  }, [Ne, j, Dt, I, Re]),
    (0, le.useEffect)(() => {
      if (typeof IntersectionObserver != "function") return;
      let Y = y.current;
      if (!Y || !j) return;
      let ue = Xu(j);
      if (!ue) return;
      let Ce = new IntersectionObserver(
        () => {
          ((ke.current = So(Y, j, I)), Re());
        },
        { root: j === ue ? j : null }
      );
      return (
        Ce.observe(Y),
        () => {
          Ce.disconnect();
        }
      );
    }, [j, I, Re]));
  let We = (0, le.useMemo)(() => {
    if (typeof ResizeObserver == "function")
      return new ResizeObserver(() => {
        (0, Xm.flushSync)(D);
      });
  }, [D]);
  (0, le.useEffect)(() => {
    for (let Y of A.values()) We?.observe(Y);
    return () => We?.disconnect();
  }, [We, A]);
  let ht = (0, le.useCallback)(
      (Y) => {
        if (!Y || o) return;
        let ue = A.get(Y.id);
        (ue && ue !== Y && We?.unobserve(ue), D(), A.set(Y.id, Y), We?.observe(Y));
      },
      [o, A, D, We]
    ),
    Tt = (0, le.useCallback)(
      (Y, ue) => {
        let Ce = Rr(Y, ue, E),
          Le = o ? c + o * ue + r * ue : (U.get(Ce)?.start ?? 0),
          Ue = {
            id: Ce,
            ref: ht,
            index: ue,
            style: { position: "absolute", left: I ? Le : 0, top: I ? 0 : Le },
          };
        if ((o && (Ue.style[I ? "width" : "height"] = o), Y == null)) return Ue;
        let St = Zu(Y);
        return { ...St, ...Ue, style: { ...St.style, ...Ue.style } };
      },
      [E, U, o, c, r, I, ht]
    ),
    Qe = (0, le.useMemo)(
      () =>
        F.map((Y) => {
          if (Y < 0) return;
          let ue = wo(g, Y);
          if (ue) return Tt(ue, Y);
        }).filter((Y) => Y != null),
      [g, F, Tt]
    );
  (0, le.useEffect)(() => {
    let Y = o ? new Set() : new Set(Qe.map((ue) => ue.id));
    for (let [ue, Ce] of A) Y.has(ue) || (We?.unobserve(Ce), A.delete(ue));
  }, [Qe, o, A, We]);
  let Ot = Qe?.map((Y) => v?.(Y)),
    gt = x.style,
    bt = I ? "width" : "height",
    jt = (0, le.useMemo)(
      () => ({ flex: "none", position: "relative", [bt]: Z, ...gt }),
      [gt, bt, Z]
    ),
    Xe = (0, le.useMemo)(() => new Map(), []),
    Lt = d === void 0 ? p : j,
    Jn = d === void 0 ? P : ve,
    Zn = (0, le.useMemo)(
      () => ({
        store: b,
        orientation: S,
        overscan: T,
        scroller: Lt,
        scrollerRef: Jn,
        scrollerController: ye,
        childrenData: Xe,
      }),
      [b, S, T, Lt, Jn, ye, Xe]
    );
  return (
    (x = ge(x, (Y) => (0, Ym.jsx)(qm.Provider, { value: Zn, children: Y }), [Zn])),
    (x = { id: E, ...x, style: jt, ref: ae(y, x.ref) }),
    { ...x, children: Ot }
  );
}
var C0 = q(function (t) {
  let n = Qu(t);
  return J(Lb, n);
});
var ec = Rr;
var Xn = N(ie(), 1);
var Kb = "div";
function fs(e) {
  return !e || typeof e != "object" ? { value: e } : e;
}
function Jm(e) {
  return e
    ? typeof e == "number"
      ? Array.from({ length: e }, (t, n) => n + 1)
      : e.reduce((t, n, r) => {
          let o = t[r - 1] ?? 0,
            i = fs(n);
          return i.items
            ? ((t[r] = o + (Jm(i.items)[i.items.length - 1] ?? 0)), t)
            : ((t[r] = o + 1), t);
        }, [])
    : [0];
}
function tc(e, t = 1) {
  for (let n = t > 0 ? 0 : e.length - 1; n >= 0 && n < e.length; n += t) {
    let r = e[n],
      o = fs(r);
    if ((o.items && tc(o.items, t) !== -1) || !o.disabled) return n;
  }
  return -1;
}
function jb(e) {
  return tc(e, -1);
}
function Zm(e, t, n) {
  return e.findIndex((r, o) => {
    let i = ec(r, o, n);
    if (i === t) return !0;
    let s = fs(r);
    return s.items?.length ? Zm(s.items, t, i) !== -1 : !1;
  });
}
function Qm(e, t, n) {
  let r = { index: -1, length: -1 };
  return (
    e.forEach((o, i) => {
      let s = ec(o, i, n),
        u = t.startsWith(`${s}/`) ? s.length : -1,
        a = fs(o);
      if (a.items?.length) {
        let c = Qm(a.items, t, s);
        u = Math.max(u, c.length);
      }
      u > r.length && ((r.index = i), (r.length = u));
    }),
    r
  );
}
function _b(e, t, n) {
  let r = Zm(e, t, n);
  return r !== -1 ? r : Qm(e, t, n).index;
}
function qb({
  store: e,
  orientation: t,
  persistentIndices: n,
  children: r,
  "aria-setsize": o,
  "aria-posinset": i = 1,
  ...s
}) {
  let u = $t();
  e = e || u;
  let a = z(
      e,
      ["orientation"],
      (b) => t ?? (b?.orientation === "both" ? "vertical" : b?.orientation)
    ),
    c = z(e, ["mounted", "items"], (b) =>
      b ? ("mounted" in b && !b.mounted ? 0 : (s.items ?? b.items)) : s.items
    ),
    l = Te(s.id),
    f = (0, Xn.useMemo)(() => Jm(c), [c]),
    d = (0, Xn.useMemo)(() => o ?? f[f.length - 1] ?? 0, [o, f]),
    h = (0, Xn.useMemo)(() => (c ? (typeof c == "number" ? 0 : c.length ? tc(c) : -1) : -1), [c]),
    m = (0, Xn.useMemo)(
      () => (c ? (typeof c == "number" ? c - 1 : c.length ? jb(c) : -1) : -1),
      [c]
    ),
    v = z(e, "activeId"),
    x = (0, Xn.useMemo)(
      () => (!l || !c || v == null || typeof c == "number" || !c.length ? -1 : _b(c, v, l)),
      [l, c, v]
    ),
    R = (0, Xn.useMemo)(() => {
      let b = [h, x, m].filter((g) => g >= 0);
      return n ? [...n, ...b] : b;
    }, [h, x, m, n]);
  return Qu({
    id: l,
    store: e,
    orientation: a,
    persistentIndices: R,
    ...s,
    children: (b) => {
      let g = Object.assign({}, b, {
        "aria-setsize": d,
        "aria-posinset": i + (f[b.index - 1] ?? 0),
      });
      return r?.(g);
    },
  });
}
var ed = q(function (t) {
  let n = qb(t);
  return J(Kb, n);
});
var Io = N(de());
function td() {
  return (0, Io.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    children: [
      (0, Io.jsx)("path", {
        d: "M 5.25 1 C 7.597 1 9.5 2.903 9.5 5.25 C 9.5 7.597 7.597 9.5 5.25 9.5 C 2.903 9.5 1 7.597 1 5.25 C 1 2.903 2.903 1 5.25 1 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, Io.jsx)("path", {
        d: "M 8.5 8.5 L 11 11",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var nc = N(ie());
function nd(e, t) {
  if (!Array.isArray(e)) return e === t;
  if (!Array.isArray(t)) return !1;
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
var rd = N(de()),
  ms = class extends nc.default.Component {
    containerRef = nc.default.createRef();
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
      let n = t.style.width || "auto",
        r = t.style.height || "auto";
      ((this.canAnimateWidth = n === "auto"), (this.canAnimateHeight = r === "auto"));
    }
    getSnapshotBeforeUpdate(t) {
      return this.props.animationEnabled !== !1
        ? nd(this.props.dependencies, t.dependencies)
          ? null
          : (this.resetElementSize(), this.getElementSize())
        : (this.hasFixedSize && (this.resetElementSize(), (this.hasFixedSize = !1)), null);
    }
    componentDidUpdate(t, n, r) {
      if (!r) return;
      let o = this.getElement();
      if (!o) return;
      let i = this.getElementSize();
      if (!i) return;
      let s = this.canAnimateWidth && r.width !== i.width,
        u = this.canAnimateHeight && r.height !== i.height;
      (!s && !u) ||
        ((this.hasFixedSize = !0),
        s && (o.style.width = `${r.width}px`),
        u && (o.style.height = `${r.height}px`),
        o.getBoundingClientRect(),
        (o.style.transition = `width ${this.props.duration}s cubic-bezier(${this.props.duration}, 0, 0, 1), height ${this.props.duration}s cubic-bezier(${this.props.duration}, 0, 0, 1)`),
        s && (o.style.width = `${i.width}px`),
        u && (o.style.height = `${i.height}px`));
    }
    onTransitionEnd = (t) => {
      let n = this.getElement();
      t.target === n &&
        (this.hasFixedSize && (this.resetElementSize(), (this.hasFixedSize = !1)),
        this.props.onTransitionEnd?.(),
        t.stopPropagation());
    };
    render() {
      let {
        dependencies: t,
        animationEnabled: n,
        innerRef: r,
        children: o,
        style: i,
        ...s
      } = this.props;
      return (0, rd.jsx)("div", {
        ...s,
        style: { position: "relative", boxSizing: "border-box", ...i },
        onTransitionEnd: this.onTransitionEnd,
        ref: r || this.containerRef,
        children: o,
      });
    }
  };
var ne = N(ie(), 1);
var od = "cq2i6r2",
  id = "o199fue7",
  sd = "o16gpm6";
var Po = N(de(), 1);
function ud({
  avatar: e,
  displayName: t,
  organization: n,
  avatarCustomStyles: r,
  size: o,
  shadow: i,
}) {
  let s = ws(t);
  return (0, Po.jsxs)("div", {
    className: od,
    children: [
      (0, Po.jsx)(Ss, { src: e || void 0, text: s, avatarCustomStyles: r, size: o, shadow: i }),
      n &&
        (0, Po.jsx)(Ss, {
          size: "small",
          src: n.avatar || void 0,
          textCustomStyles: sd,
          avatarCustomStyles: id,
          text: ws(n.displayName),
        }),
    ],
  });
}
var cd = "uchctd1";
var rc = N(de());
function ad({ direction: e = "down", ...t }) {
  return (0, rc.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8",
    className: be(e === "up" && cd),
    ...t,
    children: (0, rc.jsx)("path", {
      d: "M 0.5 3 C 0.5 3 2.337 4.574 3.349 5.442 C 3.724 5.763 4.276 5.763 4.651 5.442 C 5.663 4.574 7.5 3 7.5 3",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var en = N(ie(), 1);
var Ar = N(ie(), 1);
var oc = class {
    sharedIntersectionObserver;
    callbacks = new WeakMap();
    constructor(t) {
      document &&
        (this.sharedIntersectionObserver = new IntersectionObserver(
          this.resizeObserverCallback.bind(this),
          t
        ));
    }
    resizeObserverCallback(t, n) {
      for (let r of t) {
        let o = this.callbacks.get(r.target);
        o && o([r], n);
      }
    }
    observeElementWithCallback(t, n) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.observe(t), this.callbacks.set(t, n));
    }
    unobserve(t) {
      this.sharedIntersectionObserver &&
        (this.sharedIntersectionObserver.unobserve(t), this.callbacks.delete(t));
    }
    get root() {
      return this.sharedIntersectionObserver?.root;
    }
  },
  Gb = (0, Ar.createContext)(new Map());
function ic(e, t, n) {
  if (typeof IntersectionObserver > "u") return;
  let r = Dc(() => `${n.rootMargin}`),
    o = (0, Ar.useContext)(Gb),
    { enabled: i } = n;
  (0, Ar.useEffect)(() => {
    let s = e.current;
    if (!i || !s) return;
    let u = o.get(r);
    if (!u || u.root !== n.root?.current) {
      let { root: a, ...c } = n;
      ((u = new oc({ ...c, root: a?.current })), o.set(r, u));
    }
    return (u.observeElementWithCallback(s, t), () => u?.unobserve(s));
  }, [i]);
}
var ld = "c2v15of",
  sc = "c1tr39qo",
  fd = "a103jkx3",
  md = "auzolsl",
  dd = "o179w3e7",
  pd = be(dd, md),
  hd = be(dd, fd),
  gd = "s1h5p0we",
  bd = "o1hfkq3i",
  vd = be(bd, "uh1045z"),
  xd = be(bd, "d1sgpxwn"),
  yd = "owuysmr",
  Cd = "s3o367f",
  Sd = "b125519b",
  wd = be(Sd, md),
  Ed = be(Sd, fd);
var Mn = N(ie(), 1),
  lc = N(de(), 1),
  uc = (0, Mn.createContext)({
    closeOnSelect: !0,
    reserveCheckmarkColumn: !1,
    keepSubmenusInPlace: !1,
    startTime: void 0,
    mouseDidMove: !1,
  });
uc.displayName = "MenuConfigContext";
var ds = () => (0, Mn.useContext)(uc);
function Id({
  children: e,
  closeOnSelect: t,
  reserveCheckmarkColumn: n = !1,
  keepSubmenusInPlace: r = !1,
  startTime: o,
  mouseDidMove: i,
}) {
  let s = (0, Mn.useMemo)(
    () => ({
      closeOnSelect: t,
      reserveCheckmarkColumn: n,
      keepSubmenusInPlace: r,
      startTime: o,
      mouseDidMove: i,
    }),
    [t, n, r, o, i]
  );
  return (0, lc.jsx)(uc.Provider, { value: s, children: e });
}
var cc = (0, Mn.createContext)(!1);
cc.displayName = "WithinMenuComboboxContext";
function Mo() {
  return (0, Mn.useContext)(cc);
}
function ac({ children: e, withinCombobox: t }) {
  return (0, lc.jsx)(cc.Provider, { value: t, children: e });
}
var nt = N(de(), 1),
  Pd = 50,
  Md = { enabled: !0 },
  fc = ({ menuHeight: e, children: t }) => {
    let n = Mo(),
      o = Fc() * fm,
      i = Math.min(o, cs);
    return e > i
      ? (0, nt.jsx)(Xb, { children: t })
      : (0, nt.jsx)("div", { className: be(n && sc), children: t });
  },
  Xb = ({ children: e }) => {
    let t = Mo(),
      n = (0, en.useRef)(null),
      r = (0, en.useRef)(null),
      o = (0, en.useRef)(null),
      i = Rn(),
      [s, u] = (0, en.useState)(null),
      [a, c] = (0, en.useState)(!0),
      [l, f] = (0, en.useState)(!1);
    (ic(
      r,
      (v) => {
        let [x] = v;
        x && c(x.isIntersecting);
      },
      { root: n, ...Md }
    ),
      ic(
        o,
        (v) => {
          let [x] = v;
          x && f(x.isIntersecting);
        },
        { root: n, ...Md }
      ),
      (0, en.useEffect)(() => {
        let v,
          x,
          R = Ct.values.contentItemHeight,
          b = () => {
            n.current && n.current.scrollBy({ top: R, behavior: "smooth" });
          },
          g = () => {
            n.current && n.current.scrollBy({ top: -R, behavior: "smooth" });
          };
        return (
          s === "down" ? (v = setInterval(b, Pd)) : clearInterval(v),
          s === "up" ? (x = setInterval(g, Pd)) : clearInterval(x),
          () => {
            (clearInterval(v), clearInterval(x));
          }
        );
      }, [s]));
    let d = () => u("up"),
      h = () => u("down"),
      m = () => u(null);
    return (0, nt.jsxs)("div", {
      className: ld,
      children: [
        i && !a && (0, nt.jsx)(Rd, { direction: "up", onMouseEnter: d, onMouseLeave: m }),
        (0, nt.jsx)(Bc, {
          ref: n,
          onWheel: m,
          className: be(i && gd),
          children: (0, nt.jsxs)("div", {
            className: Cd,
            children: [
              (0, nt.jsx)("div", { ref: r, className: wd }),
              (0, nt.jsx)("div", { className: be(t && sc), children: e }),
              (0, nt.jsx)("div", { ref: o, className: Ed }),
            ],
          }),
        }),
        i && !l && (0, nt.jsx)(Rd, { direction: "down", onMouseEnter: h, onMouseLeave: m }),
      ],
    });
  },
  Rd = ({ direction: e, onMouseEnter: t, onMouseLeave: n }) =>
    (0, nt.jsxs)(Oo, {
      gap: 0,
      className: e === "up" ? pd : hd,
      children: [
        e === "down" && (0, nt.jsx)("div", { className: xd }),
        (0, nt.jsx)("div", {
          role: "presentation",
          "aria-label": `Auto scroll content ${e}`,
          onMouseEnter: t,
          onMouseLeave: n,
          className: yd,
          children: (0, nt.jsx)(ad, { direction: e }),
        }),
        e === "up" && (0, nt.jsx)("div", { className: vd }),
      ],
    });
function Ro(e, t) {
  if (e === "") return t;
  let n = e.toLowerCase(),
    r = [];
  for (let o of t) {
    if (!mc(o)) continue;
    let i = o.label?.toLowerCase(),
      s = o.description?.toLowerCase(),
      u = o.aliases?.some((c) => c.toLowerCase().includes(n));
    if (i?.includes(n) || s?.includes(n) || u || o.searchMatch?.(n)) {
      r.push(o);
      continue;
    }
    if (Array.isArray(o.submenu)) {
      let c = Ro(n, o.submenu);
      c.length > 0 && r.push({ ...o, submenu: c });
    }
  }
  return r;
}
function mc(e) {
  return !(
    e.type === "separator" ||
    e.visible === !1 ||
    e.enabled === !1 ||
    nn(e.submenu) ||
    (Do(e.submenu) && e.submenu.length === 0)
  );
}
var Ad = it()
  ? ["Control", "Option", "Shift", "CommandOrControl", "Command"]
  : ["CommandOrControl", "Command", "Control", "Alt", "Shift"];
function fR() {
  return it() ? "" : "+";
}
function dc(e) {
  return e
    ? e
        .split("+")
        .sort((t, n) => {
          let r = Ad.indexOf(t),
            o = Ad.indexOf(n);
          return r !== -1 && o !== -1 ? r - o : r !== -1 ? -1 : o !== -1 ? 1 : 0;
        })
        .map((t) => {
          switch (t) {
            case "Backspace":
            case "Delete":
              return it() ? "\u232B" : "Del";
            case "Command":
              return "\u2318";
            case "CommandOrControl":
              return it() ? "\u2318" : "Ctrl";
            case "Control":
              return it() ? "\u2303" : "Ctrl";
            case "Down":
              return "\u2193";
            case "Enter":
            case "Return":
              return it() ? "\u21A9" : "Enter";
            case "Left":
              return "\u2190";
            case "-":
              return "\u2013";
            case "Option":
              return it() ? "\u2325" : "Alt";
            case "Plus":
              return it() ? "+" : "=";
            case "Right":
              return "\u2192";
            case "Shift":
              return it() ? "\u21E7" : "Shift";
            case "Up":
              return "\u2191";
            case "Escape":
              return "ESC";
          }
          return t;
        })
    : [];
}
var Jb = 7,
  Zb = 22,
  Qb = 28,
  ev = 16,
  tv = 12;
function ps(e) {
  return _t(e.label) ? (e.ellipsis ? `${e.label}\u2026` : e.label) : "";
}
function Ao(e) {
  if (e.acceleratorLabelTokens) return e.acceleratorLabelTokens;
  let t = !it() && !yt(e.acceleratorWindows) ? e.acceleratorWindows : e.accelerator,
    n = !it() && !yt(e.acceleratorLabelWindows) ? e.acceleratorLabelWindows : e.acceleratorLabel;
  if (n) return dc(n);
  if (t) return dc(t);
}
function kd(e, t, n) {
  let r = Math.floor(t);
  if (r <= 0) return [];
  let o = n ?? ((s) => s.length * Jb),
    i = [];
  for (let [s, u] of e.entries()) {
    if (u.type === "separator") continue;
    let a = !!u.submenu,
      c = _t(u.badge) ? u.badge : "",
      l = Ao(u)?.join(" ") ?? "",
      f = [ps(u), c, l].filter((R) => R.length > 0).join(" "),
      d = o(f),
      h = !a && _t(u.description) ? o(u.description) : 0,
      m = (u.icon ? Zb : 0) + (!a && u.avatar ? Qb : 0) + (a ? ev : 0) + (c.length > 0 ? tv : 0),
      v = { item: u, index: s, width: Math.max(d, h) + m },
      x = i.findIndex((R) => R.width < v.width);
    if (x === -1) {
      if (i.length >= r) continue;
      i.push(v);
    } else i.splice(x, 0, v);
    i.length > r && i.pop();
  }
  return i.sort((s, u) => s.index - u.index).map(({ item: s }) => s);
}
var Kt = N(ie(), 1);
function Dd(e, t) {
  let n = Kt.useRef(null),
    r = Kt.useRef(null),
    o = Kt.useRef(!1);
  (Kt.useLayoutEffect(() => {
    r.current && (o.current = !0);
  }, [t]),
    Kt.useEffect(() => {
      if (!e) return;
      function u(a) {
        o.current && a.target instanceof Node && a.target.contains(n.current) && (o.current = !1);
      }
      return (
        document.addEventListener("scroll", u, { capture: !0, passive: !0 }),
        () => document.removeEventListener("scroll", u, { capture: !0 })
      );
    }, [e]));
  let i = Kt.useCallback(
      (u) => (
        (n.current = u),
        o.current || (r.current = u?.getBoundingClientRect() ?? null),
        r.current
      ),
      []
    ),
    s = Kt.useCallback((u) => {
      u || ((o.current = !1), (r.current = null));
    }, []);
  return e ? { getAnchorRect: i, setOpen: s } : void 0;
}
var hs = N(ie(), 1);
var nv = !0;
function pc(e, t) {
  let [n, r] = (0, hs.useState)(() =>
    nn(e) || t?.every((o) => nn(o.enabled) || o.enabled === !1) ? nv : e === !1
  );
  return (
    (0, hs.useEffect)(() => {
      let o = !0;
      return (
        (async () => {
          let [s, u] = await Promise.all([Td(e), Od(t)]);
          o && r(s === !1 || u);
        })(),
        () => {
          o = !1;
        }
      );
    }, [e, t]),
    n
  );
}
async function Td(e) {
  return nn(e) ? e() : e;
}
async function Od(e) {
  if (yt(e) || e.length === 0) return !1;
  for (let t of e) {
    if (t.type === "separator" || (await Td(t.enabled)) === !1) continue;
    let r = nn(t.submenu) ? t.submenu() : t.submenu;
    if (!(r && (await Od(r)))) return !1;
  }
  return !0;
}
var W = N(de(), 1),
  Vd = "data-is-menu",
  Hd = `[${Vd}="true"]`,
  rv = 0,
  ov = 10,
  Ld = new WeakMap(),
  bs = ne.memo(
    ne.forwardRef(function (
      {
        items: t,
        label: n,
        menuProps: r,
        onSearch: o,
        onSelection: i,
        searchValue: s,
        searchPending: u,
        width: a,
        submenuPlacement: c,
        enabled: l,
        icon: f,
        acceleratorLabelTokens: d,
        badge: h,
        badgeClassName: m,
        mode: v,
        ...x
      },
      R
    ) {
      let b = _t(s) && !!o,
        g = kt(),
        C = cv(r?.store, g, c),
        w = pc(l, t),
        { keepSubmenusInPlace: L } = ds(),
        S = Dd(!!g && L, t),
        T = ne.useMemo(() => {
          let M = Rn() ? Ct.values.contentItemHeight : Ct.values.contentItemHeightTouch,
            y = 0,
            E = _u + Ct.values.menuGap * 2;
          for (let I of t) {
            let V = I.type === "separator" ? E : M;
            y += V;
          }
          return y;
        }, [t]),
        p = !g,
        P = (0, W.jsxs)(es, {
          placement: C,
          timeout: rv,
          setOpen: S?.setOpen,
          children: [
            g && (0, W.jsx)(iv, { parent: g }),
            g &&
              (0, W.jsx)(Zi, {
                ref: R,
                ...x,
                disabled: w,
                showOnHover: Rn(),
                render: (M) =>
                  (0, W.jsx)(gs, {
                    ...M,
                    hasSubmenu: !0,
                    className: be(M.className, f && as, f && f.padding !== "compact" && ls),
                  }),
                children: (0, W.jsx)(Wd, {
                  checked: x.checked,
                  icon: f,
                  label: n,
                  acceleratorLabelTokens: d,
                  badge: h,
                  badgeClassName: m,
                }),
              }),
            (0, W.jsx)(Ji, {
              modal: !0,
              portal: !0,
              overlap: !0,
              unmountOnHide: !0,
              ...r,
              [Vd]: !0,
              getAnchorRect: S?.getAnchorRect ?? r?.getAnchorRect,
              gutter: r?.gutter ?? (g ? dm : mm),
              shift: r?.shift ?? (g ? pm : void 0),
              className: be(Fm, p && Vm, r?.className, Wc),
              style: { width: a },
              render: (M) => (0, W.jsx)(ys, { mode: v, children: (0, W.jsx)("div", { ...M }) }),
              children: (0, W.jsx)(av, {
                searchValue: s,
                searchPending: u,
                itemsLength: t.length,
                menuHeight: T,
                withinCombobox: b,
                children: (0, W.jsx)(bv, {
                  items: t,
                  onSelect: i,
                  submenuPlacement: c,
                  isSearching: _t(s) && s.length > 0,
                }),
              }),
            }),
          ],
        });
      return b || o
        ? (0, W.jsx)(us, {
            open: p ? !0 : void 0,
            resetValueOnHide: !0,
            includesBaseElement: !1,
            value: s ?? "",
            setValue: o,
            children: P,
          })
        : P;
    })
  );
function iv({ parent: e }) {
  let t = kt(),
    n = t?.useState("open");
  return (
    ne.useLayoutEffect(() => {
      if (!t || !n) return;
      let r = Ld.get(e);
      (r && r !== t && r.hide(), Ld.set(e, t));
    }, [n, e, t]),
    ne.useLayoutEffect(() => {
      !t || n || t.stopAnimation();
    }, [n, t]),
    null
  );
}
var sv = "right-start",
  uv = "bottom-start";
function cv(e, t, n) {
  let r = e?.useState().currentPlacement,
    o = t?.useState().currentPlacement;
  if (!Ic(t?.parent) && !yt(o)) return o;
  if (t) {
    let s = Cc() ? uv : sv;
    return n ?? s;
  }
  return r;
}
var av = ne.memo(function ({
    children: t,
    searchValue: n,
    searchPending: r,
    itemsLength: o,
    menuHeight: i,
    withinCombobox: s,
  }) {
    let u = ne.useRef(null),
      a = kt();
    ko(a, "Searchable items must be used inside a Menu");
    let c = a.useState("autoFocusOnShow"),
      l = s && c;
    return (
      ne.useEffect(() => {
        if (!l) return;
        let f = requestAnimationFrame(() => {
          u.current?.focus();
        });
        return () => cancelAnimationFrame(f);
      }, [l]),
      s
        ? (0, W.jsx)(ac, {
            withinCombobox: s,
            children: (0, W.jsxs)("div", {
              className: Nm,
              children: [
                (0, W.jsxs)("div", {
                  className: Wm,
                  children: [
                    (0, W.jsx)("div", { className: zm, children: (0, W.jsx)(td, {}) }),
                    (0, W.jsx)(rs, {
                      ref: u,
                      autoFocus: l,
                      autoSelect: !0,
                      spellCheck: !1,
                      value: n,
                      placeholder: "Type to search\u2026",
                      className: Bm,
                    }),
                  ],
                }),
                (0, W.jsx)(fc, {
                  menuHeight: i,
                  children: (0, W.jsx)(ss, {
                    children: (0, W.jsx)(ms, {
                      duration: 0.125,
                      dependencies: [o],
                      className: jm,
                      children:
                        o === 0
                          ? (0, W.jsx)("div", {
                              className: Km,
                              children: (0, W.jsx)(Ac, {
                                children: r ? "Searching\u2026" : "No search results",
                              }),
                            })
                          : t,
                    }),
                  }),
                }),
              ],
            }),
          })
        : (0, W.jsx)(ac, {
            withinCombobox: s,
            children: (0, W.jsx)(fc, { menuHeight: i, children: t }),
          })
    );
  }),
  lv = (e) => (0, W.jsx)(ts, { ...e, className: be(Lm, e.className) }),
  Fd = 14,
  Nd = ({ icon: e }) => {
    let t = { height: e.height ?? Fd, width: e.width ?? Fd };
    return e.inlineSVG
      ? (0, W.jsx)("span", { className: Gu, style: t, dangerouslySetInnerHTML: { __html: e.src } })
      : (0, W.jsx)("span", {
          className: Gu,
          children: (0, W.jsx)("img", {
            style: t,
            src: e.src,
            crossOrigin: e.crossOrigin !== "disabled" ? (e.crossOrigin ?? "anonymous") : void 0,
            alt: "icon",
            decoding: "async",
          }),
        });
  };
function Wd({
  checked: e,
  icon: t,
  label: n,
  acceleratorLabelTokens: r,
  badge: o,
  badgeClassName: i,
}) {
  return (0, W.jsxs)(W.Fragment, {
    children: [
      e && (0, W.jsx)(xs, { className: Uu, children: (0, W.jsx)(Cs, {}) }),
      t && (0, W.jsx)(Nd, { icon: t }),
      (0, W.jsx)("span", { className: be(Yn, rn), children: n }),
      r && (0, W.jsx)(Bd, { acceleratorLabelTokens: r }),
      (0, W.jsxs)("span", {
        className: Sm,
        children: [
          o && (0, W.jsx)("span", { className: be(qu, i), children: o }),
          (0, W.jsx)("span", {
            className: wm,
            "aria-hidden": "true",
            children: (0, W.jsx)(zc, {}),
          }),
        ],
      }),
    ],
  });
}
function fv(e) {
  let t = new MouseEvent("click", {
    bubbles: !0,
    cancelable: !1,
    view: window,
    button: 0,
    buttons: 1,
  });
  return { ...t, ...e, nativeEvent: { ...t, ...e.nativeEvent } };
}
var gs = ne.memo(
    ne.forwardRef(function ({ ...t }, n) {
      let r = ne.useRef(null);
      return (0, W.jsx)("div", {
        ref: r,
        className: be(bm, Nc),
        children: (0, W.jsx)(mv, { ref: n, wrapperRef: r, ...t }),
      });
    })
  ),
  mv = ne.memo(
    ne.forwardRef(function (
      {
        name: t,
        value: n,
        badge: r,
        badgeClassName: o,
        frescoBadgeVariant: i,
        checked: s,
        acceleratorLabelTokens: u,
        icon: a,
        avatar: c,
        description: l,
        hasSubmenu: f = !1,
        enabled: d,
        tooltip: h,
        tooltipClassName: m,
        tooltipWhenDisabled: v = !1,
        readonly: x = !1,
        wrapperRef: R,
        ...b
      },
      g
    ) {
      let { closeOnSelect: C, startTime: w, mouseDidMove: L } = ds(),
        S = Mo(),
        T = kt(),
        p = pc(d);
      ko(T, "MenuItem must be used inside a Menu");
      let P = ne.useRef(null),
        M = Hc(g, P),
        y = Mc(),
        E = b.onClick,
        I = ne.useRef(),
        A = ne.useCallback(
          (O) => {
            (E?.(O), f && T.setAutoFocusOnShow(O.detail === 0 || I.current !== "touch"));
          },
          [E, f, T]
        ),
        V = dv(),
        D = ne.useCallback(() => {
          (T.setAutoFocusOnShow(!0), T.setInitialFocus("first"), T.setOpen(!0));
        }, [T]),
        H = ne.useCallback(
          (O) => {
            if (O.key === "ArrowRight" || O.key === "ArrowLeft")
              switch ((O.stopPropagation(), O.key)) {
                case "ArrowLeft": {
                  let j = f ? T?.parent : T;
                  if (j?.getState().items.length === 0) break;
                  (O.preventDefault(), j?.hide());
                  break;
                }
                case "ArrowRight": {
                  T && (O.preventDefault(), D());
                  break;
                }
                default:
                  wc(O.key);
              }
            if (y && O.key === "Enter") {
              (O.preventDefault(),
                O.stopPropagation(),
                T.getState().open ? (E?.(fv(O)), C && T.hideAll()) : D());
              return;
            }
            b.onKeyDownCapture?.(O);
          },
          [f, T, b.onKeyDownCapture, y, D, E, C]
        ),
        K = ne.useCallback(
          (O) => (!C || O.currentTarget.hasAttribute("aria-expanded") ? !1 : (T.hideAll(), !0)),
          [C, T]
        ),
        re = ne.useCallback(
          (O) => {
            if (O.button === 1) {
              (E?.({ ...O, ctrlKey: !0 }), K(O));
              return;
            }
            !y || !Rc(O.button) || (gc(L, w) && (V.suppressFor(O.currentTarget), A(O), K(O)));
          },
          [E, A, K, w, L, V, y]
        ),
        F = ne.useCallback(
          (O) => {
            V.consume(O.currentTarget) || A(O);
          },
          [A, V]
        ),
        U = Rn(),
        G = {
          ref: M,
          focusOnHover: U,
          blurOnHoverEnd: U,
          ...b,
          className: be(
            Yu,
            l && Am,
            c && c.size !== "small" && Dm,
            a && as,
            a && a.padding !== "compact" && ls,
            b.className
          ),
          "data-selected": a && s ? "true" : void 0,
          onClick: y && C ? void 0 : F,
          hideOnClick: K,
          onMouseUp: re,
          onKeyDownCapture: H,
          onPointerDownCapture: (O) => {
            ((I.current = O.pointerType), b.onPointerDownCapture?.(O));
          },
          disabled: p,
        };
      (c
        ? (G.children = (0, W.jsxs)("span", {
            className: Om,
            children: [
              (0, W.jsx)(ud, {
                avatar: c.src,
                displayName: c.displayName,
                size: c.size,
                shadow: c.shadow,
                avatarCustomStyles: Tm,
              }),
              (0, W.jsx)("span", { className: rn, children: G.children }),
            ],
          }))
        : a &&
          (G.children = (0, W.jsxs)("span", {
            className: Yn,
            children: [(0, W.jsx)(Nd, { icon: a }), G.children],
          })),
        l &&
          (G.children = (0, W.jsxs)(Oo, {
            direction: "column",
            gap: 2,
            children: [
              (0, W.jsx)("span", { className: Yn, children: G.children }),
              (0, W.jsx)("span", { className: Mm, children: l }),
            ],
          })),
        s &&
          !f &&
          !a &&
          (G.children = (0, W.jsxs)("span", {
            className: Rm,
            children: [
              (0, W.jsx)(xs, { className: Uu, children: (0, W.jsx)(Cs, {}) }),
              (0, W.jsx)("span", { className: rn, children: G.children }),
            ],
          })),
        u
          ? (G.children = (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsx)("span", { className: rn, children: G.children }),
                (0, W.jsx)(Bd, { acceleratorLabelTokens: u }),
              ],
            }))
          : r
            ? (G.children = (0, W.jsxs)(W.Fragment, {
                children: [
                  (0, W.jsx)("span", { className: rn, children: G.children }),
                  i
                    ? (0, W.jsx)(kc, {
                        as: "span",
                        variant: i === "default" ? void 0 : i,
                        children: r,
                      })
                    : (0, W.jsx)("span", { className: be(qu, o), children: r }),
                ],
              }))
            : f
              ? (G.children = (0, W.jsx)("span", { className: be(Yn, rn), children: G.children }))
              : (G.children = _t(G.children)
                  ? (0, W.jsx)("span", {
                      className: $u,
                      children: (0, W.jsx)("span", { className: rn, children: G.children }),
                    })
                  : (0, W.jsx)("span", { className: be($u, rn), children: G.children })));
      let Z = ne.useCallback(
        () => (t == null || n == null ? !1 : (T.setValue(t, n), !0)),
        [T, t, n]
      );
      if (x)
        return (0, W.jsx)("div", {
          ref: g,
          id: b.id,
          role: "presentation",
          "data-disabled": p || void 0,
          className: G.className,
          children: G.children,
        });
      let he = S
        ? (0, W.jsx)(is, { ...G, setValueOnClick: !1, value: n, selectValueOnClick: Z })
        : (0, W.jsx)(Qi, { ...G });
      return h
        ? (0, W.jsxs)(W.Fragment, {
            children: [
              he,
              (0, W.jsx)(pv, { anchorRef: p && v ? R : P, className: m, children: h }),
            ],
          })
        : he;
    })
  );
function dv() {
  let e = ne.useRef(null);
  return ne.useMemo(
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
var pv = ne.memo(function ({ anchorRef: t, className: n, children: r }) {
  let o = kt();
  ko(o, "MenuItemTooltip must be used inside a Menu");
  let s = o.useState().currentPlacement?.startsWith("left") ? "left-start" : "right-start",
    u = qi({ placement: s });
  return (
    ne.useEffect(() => {
      let a = t.current;
      if (!a) return;
      u.setAnchorElement(a);
      let c = () => u.show(),
        l = () => u.hide();
      return (
        a.addEventListener("pointerenter", c),
        a.addEventListener("pointerleave", l),
        () => {
          (a.removeEventListener("pointerenter", c), a.removeEventListener("pointerleave", l));
        }
      );
    }, [u, t]),
    (0, W.jsx)(mo, {
      store: u,
      "data-placement": s,
      portal: !0,
      unmountOnHide: !0,
      gutter: 8,
      className: be(Cm, n),
      render: (a) => (0, W.jsx)(ys, { children: (0, W.jsx)("div", { ...a }) }),
      children: r,
    })
  );
});
function Bd({ acceleratorLabelTokens: e }) {
  let n = it() ? void 0 : "+";
  return (0, W.jsx)("span", {
    className: Em,
    children: e.map((r, o) => {
      let i = n && o < e.length - 1;
      return (0, W.jsxs)(
        "span",
        { className: Im, children: [r, i && (0, W.jsx)("span", { className: Pm, children: n })] },
        r
      );
    }),
  });
}
function hv(e) {
  return e.flatMap((t) => {
    let { submenu: n } = t;
    if (!nn(n)) return [{ ...t, submenu: n }];
    let r = n();
    return yt(r) ? [] : [{ ...t, submenu: r }];
  });
}
function hc(e, t, n = "+") {
  return t && e.key ? e.key : e.path.join(n);
}
function gv(e, t) {
  return e.type === "separator"
    ? _u + Ct.values.menuGap * 2
    : e.submenu
      ? t
      : e.avatar && e.avatar.size !== "small"
        ? gm
        : e.description
          ? hm
          : t;
}
var bv = ne.memo(({ items: e, onSelect: t, submenuPlacement: n, isSearching: r }) => {
    let o = ne.useMemo(() => hv(e), [e]),
      { reserveCheckmarkColumn: i, keepSubmenusInPlace: s } = ds(),
      u = i || o.some((p) => p.type !== "separator" && p.checked === !0 && !p.icon),
      a = ne.useId(),
      c = Rn() ? Ct.values.contentItemHeight : Ct.values.contentItemHeightTouch,
      l = ne.useMemo(
        () => o.map((p) => ({ id: `${a}-${hc(p, s, "-")}`, style: { height: gv(p, c) } })),
        [c, s, a, o]
      ),
      f = ne.useMemo(() => (s ? void 0 : l.map((p) => p.id).join(",")), [s, l]),
      d = ne.useMemo(() => {
        if (!s) return;
        let p = [],
          P = 0;
        for (let M of l) (p.push(P), (P += M.style.height));
        return { offsets: p, height: P };
      }, [s, l]),
      h = ne.useRef(null),
      [m, v] = ne.useState(),
      [x, R] = ne.useState(),
      b = !r || yt(x),
      g = ne.useMemo(() => (b ? kd(o, ov, m) : void 0), [b, o, m]),
      C = !yt(x) && (yt(g) || x.items === g),
      w = C ? { width: x.width, minWidth: "100%", maxWidth: "100%" } : void 0;
    (ne.useLayoutEffect(() => {
      let p = h.current;
      if (!p || typeof OffscreenCanvas > "u") return;
      let P = new OffscreenCanvas(0, 0).getContext("2d");
      if (!P) return;
      let { fontStyle: M, fontWeight: y, fontSize: E, fontFamily: I } = getComputedStyle(p);
      ((P.font = `${M} ${y} ${E} ${I}`), v(() => (A) => P.measureText(A).width));
    }, []),
      ne.useLayoutEffect(() => {
        if (!g || C) return;
        let p = h.current;
        if (!p) return;
        let P = Number.parseFloat(getComputedStyle(p).width);
        !Number.isFinite(P) || P === 0 || R({ items: g, width: P });
      }, [C, g]));
    let L = (p) => be(u && p.checked !== !0 && !p.icon && km),
      S = (p, P) => {
        let M = hc(p, s);
        if (p.type === "separator") return (0, W.jsx)(lv, {}, M);
        let y = L(p),
          E = Ao(p);
        if (p.submenu) {
          let I = p.submenu,
            A = p.searchableSubmenu && Do(I);
          return (0, W.jsx)(
            A ? vv : bs,
            {
              id: P.id,
              ref: P.ref,
              "aria-setsize": P["aria-setsize"],
              "aria-posinset": P["aria-posinset"],
              label: p.label,
              badge: p.badge,
              badgeClassName: p.badgeClassName,
              enabled: p.enabled,
              checked: p.checked,
              icon: p.icon,
              className: y,
              items: I,
              onSelection: t,
              onSearch: A ? p.onSubmenuSearch : void 0,
              searchPending: p.submenuSearchPending,
              submenuPlacement: n,
              acceleratorLabelTokens: E,
              width: p.submenuWidth,
            },
            M
          );
        }
        return (0, W.jsx)(
          gs,
          {
            id: P.id,
            ref: P.ref,
            "aria-setsize": P["aria-setsize"],
            "aria-posinset": P["aria-posinset"],
            onClick: p.readonly ? void 0 : (I) => t?.(I, p),
            readonly: p.readonly,
            tooltip: p.tooltip,
            tooltipClassName: p.tooltipClassName,
            tooltipWhenDisabled: p.tooltipWhenDisabled,
            enabled: p.enabled,
            badge: p.badge,
            badgeClassName: p.badgeClassName,
            frescoBadgeVariant: p.frescoBadgeVariant,
            checked: p.checked || p.mixed,
            acceleratorLabelTokens: E,
            icon: p.icon,
            avatar: p.avatar,
            description: p.description,
            className: y,
            children: ps(p),
          },
          M
        );
      },
      T = (p) => {
        let P = p.path.join("+");
        return (0, W.jsx)(
          "div",
          {
            className: xm,
            children: p.submenu
              ? (0, W.jsx)(gs, {
                  readonly: !0,
                  hasSubmenu: !0,
                  className: be(L(p), p.icon && as, p.icon && p.icon.padding !== "compact" && ls),
                  children: (0, W.jsx)(Wd, {
                    checked: p.checked,
                    icon: p.icon,
                    label: p.label,
                    acceleratorLabelTokens: Ao(p),
                    badge: p.badge,
                    badgeClassName: p.badgeClassName,
                  }),
                })
              : (0, W.jsx)(gs, {
                  readonly: !0,
                  badge: p.badge,
                  badgeClassName: p.badgeClassName,
                  frescoBadgeVariant: p.frescoBadgeVariant,
                  checked: p.checked || p.mixed,
                  acceleratorLabelTokens: Ao(p),
                  icon: p.icon,
                  avatar: p.avatar,
                  description: p.description,
                  className: L(p),
                  children: ps(p),
                }),
          },
          P
        );
      };
    return (0, W.jsxs)(W.Fragment, {
      children: [
        g &&
          !C &&
          (0, W.jsx)("div", { ref: h, "aria-hidden": !0, className: ym, children: g.map(T) }),
        (0, W.jsx)(
          ed,
          {
            items: l,
            initialItems: Math.min(l.length, Math.ceil(cs / c)),
            estimatedItemSize: c,
            overscan: 5,
            style: d ? { height: d.height, ...w } : w,
            children: ({
              style: p,
              id: P,
              ref: M,
              index: y,
              "aria-setsize": E,
              "aria-posinset": I,
            }) => {
              let A = o[y];
              if (!A) return null;
              let V = hc(A, s),
                D = d ? { ...p, top: d.offsets[y] } : p;
              return (0, W.jsx)(
                "div",
                {
                  style: D,
                  className: vm,
                  children: S(A, { id: P, ref: M, "aria-setsize": E, "aria-posinset": I }),
                },
                V
              );
            },
          },
          f
        ),
      ],
    });
  }),
  vv = ne.memo(
    ne.forwardRef(function ({ onSearch: t, ...n }, r) {
      let { items: o } = n,
        [i, s] = ne.useState(""),
        u = ne.useCallback(
          (l) => {
            (s(l), t?.(l));
          },
          [t]
        ),
        a = ne.useDeferredValue(i),
        c = ne.useMemo(() => Ro(a, o), [o, a]);
      return (0, W.jsx)(bs, { ...n, ref: r, items: c, searchValue: i, onSearch: u });
    })
  );
function gc(e, t) {
  return !e || !Ec(t) ? !1 : Sc.isAutomation ? !0 : performance.now() - t >= 200;
}
var vc = N(de(), 1),
  xv = 10,
  zd = { placement: "bottom-start", orientation: "vertical" };
function lA({
  menu: e,
  onClose: t,
  vekterTaskScheduler: n,
  setEditReason: r,
  onKeyDown: o,
  onKeyUp: i,
}) {
  let [s, u] = (0, Ye.useState)(""),
    a = Pc(t),
    c = (0, Ye.useMemo)(
      () =>
        !e || e.config.searchable === !1 ? !1 : e.config.searchable === !0 ? !0 : Kd(e.items) > xv,
      [e]
    ),
    l = (0, Ye.useDeferredValue)(s),
    f = (0, Ye.useMemo)(() => {
      if (!c || !e?.items) return e?.items ?? [];
      let T = e.config.getSearchItem ? l.trim() : l,
        p = Ro(T, e.items),
        P = e.config.getSearchItem?.(T);
      return P ? [...Oc([P], null, [-1]), ...p] : p;
    }, [c, e, l]),
    d = Ir({ ...zd, placement: e?.config.placement ?? zd.placement }),
    h = (e?.items.length ?? 0) > 0,
    m = e?.startTime,
    v = e?.id,
    x = (0, Ye.useRef)(),
    [R, b] = (0, Ye.useState)(!1);
  ((0, Ye.useEffect)(
    () =>
      st(d, ["mounted"], (T, p) => {
        if (p.mounted && !T.mounted) {
          u("");
          let P = x.current;
          P !== void 0 && a(P);
        }
      }),
    [d, a]
  ),
    (0, Ye.useEffect)(() => {
      if (!h) {
        d.hide();
        return;
      }
      let T = new AbortController();
      ((x.current = v), d.show());
      let p = !1,
        P = (y) => {
          gc(p, m) && bc(y.target) && d.hide();
        },
        M = () => {
          ((p = !0), b(!0));
        };
      return (
        window.addEventListener("mouseup", P, { signal: T.signal }),
        window.addEventListener("mousemove", M, { once: !0, signal: T.signal }),
        () => {
          (T.abort(), b(!1));
        }
      );
    }, [h, d, m, v]));
  let g = window.innerWidth;
  Lc((T) => {
    T.width !== g && d.hide();
  }, h);
  let C = (0, Ye.useCallback)(() => e?.config.location ?? null, [e?.config.location]),
    w = (0, Ye.useCallback)(
      (T, p) => {
        !e ||
          e?.items.length === 0 ||
          yv(() => {
            let P = yt(p.editReason) ? (p.role ?? p.label) : p.editReason;
            (P && r?.(P),
              e?.config.onSelect
                ? e?.config.onSelect(T, p)
                : p.click
                  ? p.click()
                  : p.role && Tc(p.role, { fromContextMenu: !0 }));
          }, n);
      },
      [e, r, n]
    ),
    L = (0, Ye.useCallback)((T) => u(T), []),
    S = (0, Ye.useMemo)(
      () => ({
        store: d,
        getAnchorRect: C,
        gutter: e?.config.gutter,
        shift: e?.config.shift,
        className: be(Hm, e?.config?.className),
        onKeyDown: o,
        onKeyUp: i,
      }),
      [C, e?.config.gutter, e?.config.shift, e?.config?.className, d, o, i]
    );
  return (
    (0, Ye.useEffect)(() => {
      let T = (p) => {
        bc(p.target) && p.preventDefault();
      };
      return (
        document?.addEventListener("contextmenu", T),
        () => {
          document?.removeEventListener("contextmenu", T);
        }
      );
    }, []),
    (0, vc.jsx)(Id, {
      startTime: e?.startTime,
      mouseDidMove: R,
      closeOnSelect: e?.config?.closeOnSelect ?? !0,
      reserveCheckmarkColumn: e?.config?.reserveCheckmarkColumn ?? !1,
      keepSubmenusInPlace: e?.config?.keepSubmenusInPlace ?? !1,
      children: (0, vc.jsx)(bs, {
        items: f,
        menuProps: S,
        onSelection: w,
        submenuPlacement: e?.config?.submenuPlacement,
        searchValue: c ? s : void 0,
        onSearch: c ? L : void 0,
        width: e?.config?.width,
        mode: e?.config?.mode,
      }),
    })
  );
}
function bc(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = e.getAttribute("data-backdrop");
  return _t(t) && t.length > 0;
}
function fA(e) {
  return e instanceof Element ? !!e.closest(Hd) || bc(e) : !1;
}
function yv(e, t) {
  t?.enterEventHandling();
  try {
    return e();
  } catch (n) {
    throw (t?.errorInEventHandler(yc(n)), n);
  } finally {
    t?.exitEventHandling();
  }
}
function Kd(e) {
  let t = 0;
  for (let n of e) mc(n) && ((t += 1), Array.isArray(n.submenu) && (t += Kd(n.submenu)));
  return t;
}
export {
  st as a,
  z as b,
  Za as c,
  ol as d,
  xl as e,
  Wf as f,
  Uf as g,
  Ir as h,
  mm as i,
  dm as j,
  pm as k,
  Ob as l,
  Fm as m,
  Vm as n,
  g0 as o,
  zc as p,
  td as q,
  nd as r,
  ms as s,
  ud as t,
  Id as u,
  Ro as v,
  fR as w,
  dc as x,
  Hd as y,
  bs as z,
  lA as A,
  fA as B,
};
//# sourceMappingURL=chunk-FPMDDMZB.mjs.map
