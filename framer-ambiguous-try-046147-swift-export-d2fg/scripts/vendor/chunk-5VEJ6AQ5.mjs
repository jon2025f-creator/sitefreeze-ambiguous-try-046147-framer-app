import { e as Nu, q as Cs } from "chunk-ETLWQA6D.mjs";
import { e as Tu, i as Ou } from "chunk-OQKRZLQK.mjs";
import { a as Au } from "chunk-SQ6A2IIP.mjs";
import { a as Hu, c as Vu } from "chunk-YY75G3LC.mjs";
import { a as Bu } from "chunk-44GVXXDT.mjs";
import { b as xs } from "chunk-WPWSHZF5.mjs";
import { b as Ss } from "chunk-C66LYCLJ.mjs";
import { c as ws } from "chunk-EKYJNLIX.mjs";
import { a as Lu, b as Fu } from "chunk-LJSYJA5R.mjs";
import { a as Wu } from "chunk-VD6KMVU6.mjs";
import { d as ys } from "chunk-V3XWMOW5.mjs";
import { a as Du } from "chunk-4HRYW54D.mjs";
import { a as Oo } from "chunk-55TARNRL.mjs";
import { a as qd } from "chunk-SJ5ZASSS.mjs";
import { a as Lt } from "chunk-R23XQVNE.mjs";
import { d as rn } from "chunk-Z2L5FPD7.mjs";
import { c as Mu, d as Ru } from "chunk-IMG6DEFK.mjs";
import { a as ku } from "chunk-LVTM6NBN.mjs";
import { a as ve } from "chunk-QFU6OGL3.mjs";
import { a as Pu } from "chunk-Q6UY42VS.mjs";
import { a as To } from "chunk-LUZ6ND5K.mjs";
import { a as de } from "chunk-2FCXHKEL.mjs";
import { b as jt, f as Eu, j as ko, p as yt, r as nn, v as Iu } from "chunk-ARJ7WQTJ.mjs";
import { a as oe } from "chunk-SWYZG2NI.mjs";
import { o as Su } from "chunk-HTBRLWIL.mjs";
import { d as it, u as Ar, v as Cu } from "chunk-L5AQ4LH7.mjs";
import { d as yu } from "chunk-EAUMDN6M.mjs";
import { b as Ao, c as wu } from "chunk-4JY5UMT2.mjs";
import { e as B } from "chunk-WLHSDIGQ.mjs";
var Es = B(de());
function zu(e) {
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
function Ho(e) {
  return e.slice().reverse();
}
function Ft(...e) {}
function Vo(e, t) {
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
  return Ud(e) ? e($d(t) ? t() : t) : e;
}
function Ud(e) {
  return typeof e == "function";
}
function $d(e) {
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
function Uu(e, t) {
  let n = { ...e };
  for (let r of t) $e(n, r) && delete n[r];
  return n;
}
function $u(e, t) {
  let n = {};
  for (let r of t) $e(e, r) && (n[r] = e[r]);
  return n;
}
function No(e) {
  return e;
}
function Gu(e = Ft) {
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
function ee(...e) {
  for (let t of e) if (t !== void 0) return t;
}
var on = Gd();
function Gd() {
  return typeof window < "u" && !!window.document?.createElement;
}
function Yu(e, t) {
  let n = e;
  for (; n;) {
    let r = Object.getOwnPropertyDescriptor(n, t);
    if (r?.get) return r.get;
    n = Object.getPrototypeOf(n);
  }
}
var Ku = on ? Yu(Object.getPrototypeOf(window.document), "nodeType") : void 0,
  _u = on ? Yu(Object.getPrototypeOf(window.document), "activeElement") : void 0;
function Is(e) {
  return e ? e.window === e : !1;
}
function ju(e) {
  if (!e) return !1;
  if (!Ku) return e.nodeType === 9;
  try {
    return Ku.call(e) === 9;
  } catch {
    return !1;
  }
}
function Yd(e, t) {
  try {
    return e.document === t;
  } catch {
    return !1;
  }
}
function ue(e) {
  if (!e) return document;
  if (ju(e)) return e;
  if (Is(e)) return e.document;
  let t = e.ownerDocument;
  return ju(t) ? t : document;
}
function Be(e) {
  if (!e) return self;
  if (Is(e)) return e;
  let t = ue(e),
    { defaultView: n } = t;
  return Is(n) && Yd(n, t) ? n : window;
}
function Je(e, { frame: t = !0, activeDescendant: n = !1 } = {}) {
  let r = ue(e),
    o = _u ? _u.call(r) : r.activeElement;
  if (!o?.nodeName) return null;
  if (t && kr(o) && o.contentDocument?.body)
    return Je(o.contentDocument.body, { frame: t, activeDescendant: n });
  if (n) {
    let i = o.getAttribute("aria-activedescendant");
    if (i) {
      let s = ue(o).getElementById(i);
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
function kr(e) {
  return e.tagName === "IFRAME";
}
function Ht(e) {
  let t = e.tagName.toLowerCase();
  return t === "button" ? !0 : t === "input" && e.type ? Xd.indexOf(e.type) !== -1 : !1;
}
var Xd = ["button", "color", "file", "image", "reset", "submit"];
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
function er(e) {
  return e.isContentEditable || et(e);
}
function Ko(e) {
  if (et(e)) return e.value;
  if (e.isContentEditable) {
    let t = ue(e).createRange();
    return (t.selectNodeContents(e), t.toString());
  }
  return "";
}
function Rn(e) {
  let t = 0,
    n = 0;
  if (et(e)) ((t = e.selectionStart || 0), (n = e.selectionEnd || 0));
  else if (e.isContentEditable) {
    let r = ue(e).getSelection();
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
var Jd = ["dialog", "menu", "listbox", "tree", "grid"],
  qu = { menu: "menuitem", listbox: "option", tree: "treeitem" };
function sn(e, t) {
  let n = e?.getAttribute("role");
  return n && Jd.indexOf(n) !== -1 ? n : t;
}
function Ms(e) {
  if (e != null && $e(qu, e)) return qu[e];
}
function _o(e, t) {
  let n = sn(e);
  return typeof n != "string" ? t : (Ms(n) ?? t);
}
function Dn(e) {
  if (!e) return null;
  let t = (r) => r === "auto" || r === "scroll";
  if (e.clientHeight && e.scrollHeight > e.clientHeight) {
    let { overflowY: r } = getComputedStyle(e);
    if (t(r)) return e;
  } else if (e.clientWidth && e.scrollWidth > e.clientWidth) {
    let { overflowX: r } = getComputedStyle(e);
    if (t(r)) return e;
  }
  let n = ue(e);
  return Dn(e.parentElement) || n.scrollingElement || n.body;
}
function jo(e, ...t) {
  /text|search|password|tel|url/i.test(e.type) && e.setSelectionRange(...t);
}
function Xu(e, t) {
  let n = e.map((o, i) => [i, o]),
    r = !1;
  return (
    n.sort(([o, i], [s, c]) => {
      let a = t(i),
        u = t(c);
      return a === u || !a || !u ? 0 : Zd(a, u) ? (o > s && (r = !0), -1) : (o < s && (r = !0), 1);
    }),
    r ? n.map(([o, i]) => i) : e
  );
}
function Zd(e, t) {
  return !!(t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_PRECEDING);
}
function Rs() {
  return on && !!navigator.maxTouchPoints;
}
function tr() {
  return on ? /mac|iphone|ipad|ipod/i.test(navigator.platform) : !1;
}
function nr() {
  return on && tr() && /apple/i.test(navigator.vendor);
}
function Ju() {
  return on && /firefox\//i.test(navigator.userAgent);
}
function Zu() {
  return on && navigator.platform.startsWith("Mac") && !Rs();
}
function Qu(e) {
  let { currentTarget: t, target: n } = e;
  return t ? (Or(n) ? !we(t, n) : !0) : !1;
}
function Te(e) {
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
  let t = tr();
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
function An(e, t) {
  let { FocusEvent: n } = Be(e),
    r = new n("blur", t),
    o = e.dispatchEvent(r),
    i = { ...t, bubbles: !0 };
  return (e.dispatchEvent(new n("focusout", i)), o);
}
var Qd = {
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
function ep(e, t) {
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
        if (!$e(Qd, s)) return Reflect.get(n, s);
      },
    }
  );
}
function Ds(e, t) {
  let n = Be(e),
    r = new (n.PointerEvent ?? n.MouseEvent)("click", ep(n, t));
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
function kn(e, t, n, r) {
  let i = ((c) => {
      if (r) {
        let u = setTimeout(c, r);
        return () => clearTimeout(u);
      }
      let a = requestAnimationFrame(c);
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
function tp(e) {
  return Number.parseInt(e.getAttribute("tabindex") || "0", 10) < 0;
}
function Ke(e) {
  return !(!e.matches($o) || !zo(e) || e.closest("[inert]"));
}
function Qn(e) {
  if (!Ke(e) || tp(e)) return !1;
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
      if (!kr(o)) return;
      let s = o.contentDocument?.body;
      s && r.splice(i, 1, ...Go(s));
    }),
    r
  );
}
function np(e, t) {
  let [n] = Go(e, t);
  return n || null;
}
function Yo(e, t, n) {
  let r = Array.from(e.querySelectorAll($o)).filter(Qn);
  return (
    t && Qn(e) && r.unshift(e),
    r.forEach((o, i) => {
      if (!kr(o)) return;
      let s = o.contentDocument?.body;
      if (!s) return;
      let c = Yo(s, !1, n);
      r.splice(i, 1, ...c);
    }),
    !r.length && n ? Go(e) : r
  );
}
function Lo(e, t, n) {
  if (t && Qn(e)) {
    if (!kr(e)) return e;
    let o = e.contentDocument?.body;
    if (!o) return e;
    let i = Lo(o, !1, n);
    if (i) return i;
  }
  let r = e.querySelectorAll($o);
  for (let o of r)
    if (Qn(o)) {
      if (kr(o)) {
        let i = o.contentDocument?.body;
        if (!i) return o;
        let s = Lo(i, !1, n);
        if (s) return s;
        continue;
      }
      return o;
    }
  return n ? np(e) : null;
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
  let c = s.indexOf(i),
    a = s.slice(c + 1);
  return a.find(Qn) || (r ? s.find(Qn) : null) || (o ? a[0] : null) || null;
}
function rp(e, t, n, r) {
  return ra({ container: e, includeContainer: t, fallbackToEdge: n, fallbackToFocusable: r });
}
function Xo(e, t) {
  return rp(document.body, !1, e, t);
}
function op(e, t, n, r) {
  return ra({
    container: e,
    includeContainer: t,
    reverse: !0,
    fallbackToEdge: n,
    fallbackToFocusable: r,
  });
}
function As(e, t) {
  return op(document.body, !1, e, t);
}
function St(e) {
  let t = Je(e);
  if (!t) return !1;
  if (t === e) return !0;
  let n = t.getAttribute("aria-activedescendant");
  return n ? n === e.id : !1;
}
function wt(e) {
  let t = Je(e);
  if (!t) return !1;
  if (we(e, t)) return !0;
  let n = t.getAttribute("aria-activedescendant");
  return !n || !("id" in e) ? !1 : n === e.id ? !0 : !!e.querySelector(`#${CSS.escape(n)}`);
}
function ip(e) {
  let t = e.getAttribute("tabindex") ?? "";
  (e.setAttribute("data-tabindex", t), e.setAttribute("tabindex", "-1"));
}
function oa(e, t) {
  let n = Yo(e, t);
  for (let r of n) ip(r);
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
var Pv = sp();
function sp({ limit: e = 100 } = {}) {
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
    execute: async (u, l) => {
      if (!u) return;
      let f = l === r;
      r = l ?? null;
      let d = f ? Math.max(0, t.length - 1) : t.length,
        h = await u();
      if (!h) return;
      n = [];
      let m = t[d];
      for (
        t[d] = sa(async () => {
          await h?.();
          let b = await m?.();
          return async () => {
            (await b?.(), await u?.());
          };
        });
        t.length > e;
      )
        t.shift();
    },
  };
}
var ks = Symbol("accessibleWhenDisabled");
function ca(e) {
  return e.accessibleWhenDisabled ?? e.onLoadedMetadataCapture?.[ks];
}
var Jo = "data-truly-disabled";
function ua(e) {
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
function cp(e) {
  return e.nodeType === e.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
function Tn(e) {
  let t = e?.getRootNode();
  return t && cp(t) && t.activeElement ? t.activeElement : Je(e);
}
function Zo(e) {
  return St(e) || Tn(e) === e;
}
var la = B(oe(), 1),
  Qo = (0, la.createContext)(!0);
var rt = B(oe(), 1),
  Se = B(oe(), 1),
  On = B(de(), 1);
function Lr(e, t) {
  if (typeof e == "function") {
    let n = e(t);
    if (typeof n == "function") return n;
  } else e && (e.current = t);
}
function up(e) {
  return !e || !(0, Se.isValidElement)(e) ? !1 : "ref" in e.props || "ref" in e;
}
function ap(e) {
  return up(e) ? { ...e.props }.ref || e.ref : null;
}
function lp(e, t) {
  let n = { ...e };
  for (let r in t) {
    if (!$e(t, r) || r === "__proto__") continue;
    if (r === "className") {
      let i = "className",
        s = e[i],
        c = t[i];
      s && c ? (n[i] = `${s} ${c}`) : (n[i] = c || s);
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
  Tv = Os.useDeferredValue,
  fp = Os.useInsertionEffect ?? ((e) => e()),
  $ = on ? Se.useLayoutEffect : Se.useEffect;
function mp(e) {
  let [t] = (0, Se.useState)(e);
  return t;
}
function rr(e) {
  let t = (0, Se.useRef)(e);
  return (
    $(() => {
      t.current = e;
    }),
    t
  );
}
function q(e) {
  let t = (0, Se.useRef)(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return (
    fp(() => {
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
function dp(e) {
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
function pp(e) {
  let t = pa();
  return e || t;
}
var hp = pa ? pp : dp;
function Oe(e) {
  return hp(e);
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
  let r = mp(n),
    [o, i] = (0, Se.useState)(r);
  return (
    (0, Se.useEffect)(() => {
      let s = e && "current" in e ? e.current : e;
      if (!s) return;
      let c = () => {
          let u = s.getAttribute(t);
          i(u ?? r);
        },
        a = new MutationObserver(c);
      return (a.observe(s, { attributeFilter: [t] }), c(), () => a.disconnect());
    }, [e, t, r]),
    o
  );
}
function Et(e, t) {
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
function or() {
  return (0, Se.useReducer)(() => [], []);
}
function pe(e) {
  return q(typeof e == "function" ? e : () => e);
}
function ge(e, t, n = []) {
  let r = (0, Se.useCallback)(
    (o) => (e.wrapElement && (o = e.wrapElement(o)), t(o)),
    [...n, e.wrapElement]
  );
  return { ...e, wrapElement: r };
}
function ir(e = !1, t) {
  let [n, r] = (0, Se.useState)(null);
  return { portalRef: ae(r, t), portalNode: n, domReady: !e || n };
}
function sr(e, t, n) {
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
        (Ae("mousemove", bp, !0),
        Ae("mousedown", ei, !0),
        Ae("mouseup", ei, !0),
        Ae("keydown", ei, !0),
        Ae("scroll", ei, !0),
        (fa = !0));
    }, []),
    q(() => Fs)
  );
}
var Fs = !1,
  ma = 0,
  da = 0;
function gp(e) {
  let t = e.movementX || e.screenX - ma,
    n = e.movementY || e.screenY - da;
  return ((ma = e.screenX), (da = e.screenY), t || n || !1);
}
function bp(e) {
  gp(e) && (Fs = !0);
}
function ei() {
  Fs = !1;
}
function U(e) {
  let t = rt.forwardRef((n, r) => e(bn({ ...n, ref: r })));
  return ((t.displayName = e.displayName || e.name), t);
}
function Ut(e, t) {
  return rt.memo(e, t);
}
function J(e, t) {
  let { wrapElement: n, render: r, ...o } = t,
    i = ae(t.ref, ap(r)),
    s;
  if (rt.isValidElement(r)) {
    let c = { ...r.props, ref: i };
    s = rt.cloneElement(r, lp(o, c));
  } else r ? (s = r(o)) : (s = (0, On.jsx)(e, { ...o }));
  return n ? n(s) : s;
}
function Z(e) {
  let t = (n = {}) => e(n);
  return ((t.displayName = e.name), t);
}
function qe(e = [], t = []) {
  let n = rt.createContext(void 0),
    r = rt.createContext(void 0),
    o = () => rt.useContext(n),
    i = (u = !1) => {
      let l = rt.useContext(r),
        f = o();
      return u ? l : l || f;
    },
    s = () => {
      let u = rt.useContext(r),
        l = o();
      if (!(u && u === l)) return l;
    },
    c = (u) =>
      e.reduceRight(
        (l, f) => (0, On.jsx)(f, { ...u, children: l }),
        (0, On.jsx)(n.Provider, { ...u })
      );
  return {
    context: n,
    scopedContext: r,
    useContext: o,
    useScopedContext: i,
    useProviderContext: s,
    ContextProvider: c,
    ScopedContextProvider: (u) =>
      (0, On.jsx)(c, {
        ...u,
        children: t.reduceRight(
          (l, f) => (0, On.jsx)(f, { ...u, children: l }),
          (0, On.jsx)(r.Provider, { ...u })
        ),
      }),
  };
}
var Ze = B(oe(), 1),
  vp = "div",
  xa = nr(),
  ya = 1,
  Ca = 2,
  ba = 3,
  xp = [
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
function yp(e) {
  let { tagName: t, readOnly: n, type: r } = e;
  return (t === "TEXTAREA" && !n) || (t === "SELECT" && !n)
    ? !0
    : t === "INPUT" && !n
      ? xp.includes(r)
      : !!(e.isContentEditable || (e.getAttribute("role") === "combobox" && e.dataset.name));
}
function Cp(e) {
  return e
    ? e === "button" ||
        e === "summary" ||
        e === "input" ||
        e === "select" ||
        e === "textarea" ||
        e === "a"
    : !0;
}
function Sp(e) {
  return e ? e === "button" || e === "input" || e === "select" || e === "textarea" : !0;
}
function wp(e) {
  let t = 0;
  return (Cp(e) && (t |= ya), Sp(e) && (t |= Ca), t);
}
function Ep(e) {
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
function Ip({
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
  return q((n) => {
    (e?.(n), !n.defaultPrevented && t && (n.stopPropagation(), n.preventDefault()));
  });
}
var va = !1,
  ri = !0;
function Pp(e) {
  let t = e.target;
  ze(t) && !t.hasAttribute("data-focus-visible") && (ri = !1);
}
function Mp(e) {
  if (Ts(e.key)) {
    ri = !0;
    return;
  }
  e.metaKey || e.ctrlKey || (e.altKey && (!xa || e.key !== "Tab")) || (ri = !0);
}
var cn = Z(function ({
    focusable: t = !0,
    accessibleWhenDisabled: n,
    autoFocus: r,
    onFocusVisible: o,
    ...i
  }) {
    let s = (0, Ze.useRef)(null),
      [c, a] = sr(i, ks, n);
    ((n ??= c),
      (0, Ze.useEffect)(() => {
        t && (va || (Ae("mousedown", Pp, !0), Ae("keydown", Mp, !0), (va = !0)));
      }, [t]));
    let u = t && dt(i),
      l = u && !n,
      [f, d] = (0, Ze.useState)(!1),
      h = (0, Ze.useRef)(!1),
      m = (0, Ze.useRef)(null),
      b = q((O) => {
        (m.current?.(),
          (m.current = null),
          (h.current = !1),
          O?.removeAttribute("data-focus-visible"));
      });
    ((0, Ze.useEffect)(() => {
      (t && !l) || (b(s.current), f && d(!1));
    }, [t, l, f, b]),
      (0, Ze.useEffect)(() => {
        if (!t || !f) return;
        let O = s.current;
        if (!O || typeof IntersectionObserver > "u") return;
        let G = new IntersectionObserver(() => {
          Ke(O) || ((h.current = !1), d(!1));
        });
        return (G.observe(O), () => G.disconnect());
      }, [t, f]),
      (0, Ze.useEffect)(() => () => m.current?.(), []));
    let v = ni(i.onKeyPressCapture, u),
      R = ni(i.onMouseDownCapture, u),
      x = ni(i.onClickCapture, u),
      g = ni(i.onAuxClickCapture, u),
      y = (O, G) => {
        if ((G && (O.currentTarget = G), !t)) return;
        let se = O.currentTarget;
        if (se && Zo(se) && (o?.(O), !O.defaultPrevented)) {
          if (((se.dataset.focusVisible = "true"), (h.current = !0), Ep(se))) {
            if ((m.current?.(), (m.current = null), typeof IntersectionObserver < "u")) {
              let _ = new IntersectionObserver(() => {
                Ke(se) || b(se);
              });
              (_.observe(se), (m.current = () => _.disconnect()));
            }
            return;
          }
          d(!0);
        }
      },
      S = i.onKeyDownCapture,
      T = q((O) => {
        if (
          (S?.(O),
          O.defaultPrevented ||
            !t ||
            f ||
            h.current ||
            ((O.metaKey || O.altKey || O.ctrlKey) && !Ts(O.key)) ||
            !Te(O))
        )
          return;
        let G = O.currentTarget;
        kn(G, "focusout", () => y(O, G));
      }),
      w = i.onFocusCapture,
      V = q((O) => {
        if ((w?.(O), O.defaultPrevented || !t)) return;
        if (!Te(O)) {
          d(!1);
          return;
        }
        let G = O.currentTarget,
          se = () => y(O, G);
        ri || yp(O.target) ? kn(O.target, "focusout", se) : d(!1);
      }),
      p = i.onBlur,
      I = q((O) => {
        (p?.(O), t && qt(O) && (b(O.currentTarget), d(!1)));
      }),
      M = (0, Ze.useContext)(Qo),
      C = q((O) => {
        t &&
          r &&
          O &&
          M &&
          queueMicrotask(() => {
            St(O) || (Ke(O) && O.focus());
          });
      }),
      [P, E] = (0, Ze.useState)(ba);
    $(() => {
      let O = s.current;
      if (!O) return;
      let G = wp(O.tagName.toLowerCase());
      G !== ba && E(G);
    }, []);
    let D = t && !!(P & ya),
      H = t && !!(P & Ca),
      [A, F] = (0, Ze.useState)(!1);
    xa &&
      (0, Ze.useEffect)(() => {
        if (!t) return;
        let O = s.current;
        if (!O) return;
        let { type: G } = O,
          se = O.tagName === "INPUT" && (G === "checkbox" || G === "radio");
        F(Ht(O) || se);
      }, [t]);
    let j = i.style,
      te = (0, Ze.useMemo)(() => (l ? { pointerEvents: "none", ...j } : j), [l, j]);
    return (
      (i = {
        "data-focus-visible": (t && f) || void 0,
        "data-autofocus": r || void 0,
        "aria-disabled": u || void 0,
        ...i,
        ...a,
        ref: ae(s, C, i.ref),
        style: te,
        tabIndex: Ip({
          focusable: t,
          trulyDisabled: l,
          nativeTabbable: D,
          supportsDisabled: H,
          safariTabIndex: A,
          tabIndexProp: i.tabIndex,
        }),
        disabled: H && l ? !0 : void 0,
        [Jo]: u ? l : void 0,
        contentEditable: u ? void 0 : i.contentEditable,
        onKeyPressCapture: v,
        onClickCapture: x,
        onAuxClickCapture: g,
        onMouseDownCapture: R,
        onKeyDownCapture: T,
        onFocusCapture: V,
        onBlur: I,
      }),
      bn(i)
    );
  }),
  Nv = U(function (t) {
    let n = cn(t);
    return J(vp, n);
  });
var vn = B(oe(), 1),
  Rp = "button";
function Sa(e) {
  if (!e.isTrusted) return !1;
  let t = e.currentTarget;
  return e.key === "Enter"
    ? Ht(t) || t.tagName === "SUMMARY" || t.tagName === "A"
    : e.key === " "
      ? Ht(t) || t.tagName === "SUMMARY" || t.tagName === "INPUT" || t.tagName === "SELECT"
      : !1;
}
var Dp = Symbol("command"),
  Fr = Z(function ({ clickOnEnter: t = !0, clickOnSpace: n = !0, ...r }) {
    let o = (0, vn.useRef)(null),
      [i, s] = (0, vn.useState)(!1),
      c = r.type;
    (0, vn.useEffect)(() => {
      let y = o.current;
      if (!y) return;
      let S = Ht(y);
      (c !== void 0 && S && y.type === "button") || s(S);
    }, [c]);
    let [a, u] = (0, vn.useState)(!1),
      l = (0, vn.useRef)(!1),
      f = dt(r),
      [d, h] = sr(r, Dp, !0);
    $(() => {
      f && ((l.current = !1), u(!1));
    }, [f]);
    let m = r.onKeyDown,
      b = q((y) => {
        m?.(y);
        let S = y.currentTarget;
        if (y.defaultPrevented || d || f || !Te(y) || et(S) || S.isContentEditable) return;
        let T = t && y.key === "Enter",
          w = n && y.key === " ",
          V = y.key === "Enter" && !t,
          p = y.key === " " && !n;
        if (V || p) {
          y.preventDefault();
          return;
        }
        if (T || w) {
          let I = Sa(y);
          if (T) {
            if (!I) {
              y.preventDefault();
              let { view: M, ...C } = y,
                P = () => Ds(S, C);
              Ju() ? kn(S, "keyup", P) : queueMicrotask(P);
            }
          } else w && ((l.current = !0), I || (y.preventDefault(), u(!0)));
        }
      }),
      v = r.onKeyUp,
      R = q((y) => {
        if ((v?.(y), d)) return;
        let S = n && y.key === " ";
        if (!l.current || !S) return;
        let T = Sa(y);
        if (((l.current = !1), T || u(!1), y.defaultPrevented || !Te(y) || f || y.metaKey || T))
          return;
        y.preventDefault();
        let w = y.currentTarget,
          { view: V, ...p } = y;
        queueMicrotask(() => Ds(w, p));
      }),
      x = r.onBlur,
      g = q((y) => {
        (x?.(y), l.current && ((l.current = !1), u(!1)));
      });
    return (
      (r = {
        "data-active": a || void 0,
        type: i ? "button" : void 0,
        ...h,
        ...r,
        ref: ae(o, r.ref),
        onKeyDown: b,
        onKeyUp: R,
        onBlur: g,
      }),
      (r = cn(r)),
      r
    );
  }),
  jv = U(function (t) {
    let n = Fr(mt(t));
    return J(Rp, n);
  });
var Hr = qe(),
  oi = Hr.useContext,
  $v = Hr.useScopedContext,
  Gv = Hr.useProviderContext,
  wa = Hr.ContextProvider,
  Ea = Hr.ScopedContextProvider;
var ii = B(oe(), 1),
  Ap = "div",
  Hs = Z(function ({ store: t, shouldRegisterItem: n = !0, getItem: r = No, element: o, ...i }) {
    let s = oi();
    t = t || s;
    let c = Oe(i.id),
      a = (0, ii.useRef)(o);
    return (
      (0, ii.useEffect)(() => {
        let u = a.current;
        if (!c || !u || !n) return;
        let l = r({ id: c, element: u });
        return t?.renderItem(l);
      }, [c, n, r, t]),
      (i = { ...i, ref: ae(a, i.ref) }),
      i
    );
  }),
  Qv = U(function (t) {
    let n = Hs(t);
    return J(Ap, n);
  });
var Vs = B(oe(), 1),
  Vr = qe([wa], [Ea]),
  kp = Vr.useContext,
  $t = Vr.useScopedContext,
  Ia = Vr.useProviderContext,
  xn = Vr.ContextProvider,
  Gt = Vr.ScopedContextProvider,
  Pa = (0, Vs.createContext)(void 0),
  Ma = (0, Vs.createContext)(void 0);
var lr = B(oe(), 1);
function Ln(e, t) {
  let n = e.__unstableInternals;
  return (fe(n, "Invalid store"), n[t]);
}
function Da(e, t) {
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
function Aa(e, t, n, r) {
  let o;
  for (let i of Ps(t))
    Nr(t[i], n[i]) || (r !== void 0 && Da([i], r)) || ((o ??= { ...e }), (o[i] = t[i]));
  return o;
}
var Tp = 100;
function Op(e, t, n) {
  if (t)
    for (let r of t) {
      let o = e.get(r);
      (o || ((o = new Set()), e.set(r, o)), o.add(n));
    }
}
function Lp(e, t, n) {
  if (e && t)
    for (let r of t) {
      let o = e.get(r);
      o && (o.delete(n), o.size || e.delete(r));
    }
}
function ka(e) {
  let t = new Set(),
    n = e.currentListener;
  if (!n) return t;
  for (let r of e.keyedListeners) if ((t.add(r), r === n)) return t;
  return (t.clear(), t.add(n), t);
}
function si(e) {
  e.notifiedListeners ??= ka(e);
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
function Fp(e, t, n) {
  for (let r of e)
    r.group === t && (r.recovering || (Ws(r, n) && (si(r), r.notifiedListeners?.add(n))));
}
function Hp({ fastPathFrames: e, group: t, keys: n, listener: r }) {
  let o = t.listeners.has(r);
  for (let i of e)
    i.group === t &&
      (i.recovering ||
        (n.includes(i.updatedKey) &&
          (Ws(i, r)
            ? (si(i), i.notifiedListeners?.add(r))
            : o && (si(i), (i.recoverToLive = !0)))));
}
function Vp(e, t, n) {
  for (let r of e) r.group === t && r.notifiedListeners?.delete(n);
}
function Np({ fastPathFrames: e, group: t, keys: n, listener: r }) {
  for (let o of e)
    o.group === t && (o.recovering || (n.includes(o.updatedKey) && o.keyedListeners.add(r)));
}
function Wp(e, t) {
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
    c = s.size ? s.get(t) : void 0;
  if (c) {
    s.delete(t);
    let u = n;
    (c(), (n = o?.() ?? n), n !== u && (r = Aa(r, n, u, i) ?? r));
  }
  let a = t(n, r);
  a && Ta(e, t, a);
}
function Ra({ group: e, getState: t, prevState: n, updatedKey: r, notifiedListeners: o }) {
  let i = e.allKeysListeners;
  for (let s of e.listeners)
    o?.has(s) ||
      (!i?.has(s) && !Da(e.listenerKeys.get(s), r)) ||
      (o?.add(s), Oa(e, s, t(), n, t, r));
}
function Ge(e, ...t) {
  let n = e,
    r = n,
    o = Ft,
    i = !1,
    s = !1,
    c = new Set(),
    a = new Set(),
    u = new Set(),
    l = { listeners: new Set(), disposables: new Map(), listenerKeys: new WeakMap() },
    f = { listeners: new Set(), disposables: new Map(), listenerKeys: new WeakMap() },
    d = (M) => (u.add(M), () => u.delete(M)),
    h = () => {
      let M = a.size,
        C = Symbol();
      a.add(C);
      let P = () => {
        a.delete(C) && (a.size || o());
      };
      if (M) return P;
      let E = Ps(n),
        D = [];
      for (let F of t) {
        let j = F?.getState?.();
        if (!j) continue;
        let te = E.filter((O) => $e(j, O));
        if (te.length) {
          if (t.length === 1 || te.length === E.length) {
            for (let O of te)
              D.push(
                me(F, [O], (G) => {
                  p(O, G[O], !0);
                })
              );
            continue;
          }
          D.push(
            st(F, te, (O, G) => {
              for (let se of te) O[se] !== G[se] && p(se, O[se], !0);
            })
          );
          for (let O of te) {
            let G = F?.getState?.();
            G && p(O, G[O], !0);
          }
        }
      }
      let H = [];
      for (let F of u) H.push(F());
      let A = t.map(Wr);
      return ((o = Ee(...D, ...H, ...A)), P);
    },
    m = (M, C, P) => {
      P !== void 0 && (P ? Lp(M.listenersByKey, P, C) : M.allKeysListeners?.delete(C));
    },
    b = [],
    v = (M, C, P = l) => {
      let E = M ? [...M] : null,
        D = P.listeners.has(C);
      return (
        D || Vp(b, P, C),
        E
          ? Hp({ fastPathFrames: b, group: P, keys: E, listener: C })
          : (D && Ns(b, P), Fp(b, P, C)),
        D && (Ns(b, P, C), m(P, C, P.listenerKeys.get(C))),
        P.listeners.add(C),
        E
          ? ((P.listenersByKey ??= new Map()),
            Op(P.listenersByKey, E, C),
            Np({ fastPathFrames: b, group: P, keys: E, listener: C }))
          : ((P.allKeysListeners ??= new Set()), P.allKeysListeners.add(C)),
        P.listenerKeys.set(C, E),
        () => {
          let H = P.disposables.get(C);
          (P.disposables.delete(C), Ns(b, P, C));
          let A = P.listenerKeys.get(C);
          (m(P, C, E),
            A !== E && m(P, C, A),
            P.listenerKeys.delete(C),
            P.listeners.delete(C),
            H?.());
        }
      );
    },
    R = (M, C) => v(M, C),
    x = (M, C, P) => {
      let E = M.listeners.has(C);
      if (E) {
        M.suspendCounts ??= new Map();
        let H = M.suspendCounts.get(C) ?? 0;
        M.suspendCounts.set(C, H + 1);
      }
      let D;
      try {
        let H = n;
        (Wp(M, C), n !== H && (D = Aa(P, n, H)));
        let A = C(n, D ?? P);
        A && Ta(M, C, A);
      } finally {
        if (E) {
          let H = M.suspendCounts,
            A = H?.get(C);
          (A && A > 1 ? H?.set(C, A - 1) : H?.delete(C), H?.size || delete M.suspendCounts);
        }
      }
    },
    g = (M, C) => (x(l, C, n), v(M, C)),
    y = (M, C) => (!f.listeners.size && !s && (r = n), x(f, C, r), v(M, C, f)),
    S = (M) => Ge($u(n, M), I),
    T = (M) => Ge(Uu(n, M), I),
    w = () => n,
    V = (M, C, P) => {
      if (!(P instanceof Set) && !M.allKeysListeners?.size) {
        let E = M.listenersByKey?.get(P);
        if (!E) return;
        let D = { group: M, keyedListeners: E, updatedKey: P, currentListener: null };
        b.push(D);
        try {
          for (let H of E) {
            if (
              D.notifiedListeners?.has(H) ||
              ((D.currentListener = H),
              D.notifiedListeners?.add(H),
              Oa(M, H, n, C, w, P),
              !M.allKeysListeners?.size && !D.recoverToLive)
            )
              continue;
            let A = D.notifiedListeners ?? ka(D);
            ((D.notifiedListeners = A),
              (D.recovering = !0),
              Ra({ group: M, getState: w, prevState: C, updatedKey: P, notifiedListeners: A }));
            return;
          }
        } finally {
          b.pop();
        }
        return;
      }
      Ra({ group: M, getState: w, prevState: C, updatedKey: P });
    },
    p = (M, C, P = !1) => {
      if (!$e(n, M)) return;
      let E = n[M],
        D = gn(C, () => E);
      if (Nr(D, E)) return;
      let H = s;
      s = !0;
      let A = n,
        F = { ...n, [M]: D };
      n = F;
      let j = !1;
      try {
        if (!P && t.length) {
          for (let te of t)
            if ((te?.setState?.(M, D), !Nr(n[M], D))) {
              j = !0;
              break;
            }
          if (j) {
            let te = 0;
            for (; te < Tp; te += 1) {
              let O = !1;
              for (let G of t) {
                let se = n[M];
                (G?.setState?.(M, se), Nr(n[M], se) || (O = !0));
              }
              if (!O) break;
            }
          }
        }
        if (!j) {
          let te = n === F ? A : { ...n, [M]: A[M] };
          V(l, te, M);
        }
      } finally {
        s = H;
      }
      if (!f.listeners.size) {
        s || (r = n);
        return;
      }
      (c.add(M),
        !i &&
          ((i = !0),
          queueMicrotask(() => {
            i = !1;
            let te = n,
              O = c;
            c = new Set();
            let G = r;
            (V(f, G, O), r === G && (r = te));
          })));
    },
    I = {
      getState: w,
      setState: p,
      __unstableInternals: { setup: d, init: h, subscribe: R, sync: g, batch: y, pick: S, omit: T },
    };
  return I;
}
function ye(e, ...t) {
  if (e) return Ln(e, "setup")(...t);
}
function Wr(e, ...t) {
  if (e) return Ln(e, "init")(...t);
}
function st(e, ...t) {
  if (e) return Ln(e, "subscribe")(...t);
}
function me(e, ...t) {
  if (e) return Ln(e, "sync")(...t);
}
function yn(e, ...t) {
  if (e) return Ln(e, "batch")(...t);
}
function ur(e, ...t) {
  if (e) return Ln(e, "omit")(...t);
}
function ci(e, ...t) {
  if (e) return Ln(e, "pick")(...t);
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
function Bp(e) {
  let t = e.find((o) => !!o.element),
    n = [...e].reverse().find((o) => !!o.element)?.element,
    r = t?.element?.parentElement;
  if (!n) return ue(r).body;
  for (; r;) {
    if (r.contains(n)) return r;
    r = r.parentElement;
  }
  return ue(r).body;
}
function zp(e) {
  return e?.__unstablePrivateStore;
}
var ui = 64;
function La(e, t) {
  if (e.length < ui) {
    t.ids && ((t.items = void 0), (t.ids = void 0));
    return;
  }
  if (t.items === e) return t.ids;
  let n = new Set();
  for (let r of e) n.add(r.id);
  return ((t.items = e), (t.ids = n), n);
}
function Bs(e, t, n) {
  if (e.length < ui) {
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
    n = ee(e.items, t?.items, e.defaultItems, []),
    r = zp(e.store),
    o = r?.__unstableCollectionLookup ?? {
      controlledItems: new Map(n.map((x) => [x.id, x])),
      registeredItems: new Map(),
      controlledItemsSource: n,
      propagatedItems: n,
    },
    { controlledItems: i, registeredItems: s } = o,
    c = {},
    a = {},
    u = { items: n, renderedItems: ee(t?.renderedItems, []) },
    l = Ge(u, e.store),
    f = Object.assign(Ge({ items: n, renderedItems: u.renderedItems }, r), {
      __unstableCollectionLookup: o,
    }),
    d = (x) => {
      let g = Xu(x, (y) => y.element);
      (f.setState("renderedItems", g), l.setState("renderedItems", g));
    },
    h = (x) => {
      if (x !== o.controlledItemsSource) {
        ((o.controlledItemsSource = x), i.clear());
        for (let g of x) i.set(g.id, g);
      }
    },
    m = (x, g) => {
      if (x !== "items") {
        l.setState(x, g);
        return;
      }
      l.setState("items", (y) => {
        let S = gn(g, y);
        return S === y ? y : ((o.propagatedItems = S), h(S), S);
      });
    };
  (ye(l, () => Wr(f)),
    r ||
      (st(l, ["items"], ({ items: x }) => {
        x !== o.propagatedItems && ((o.propagatedItems = x), h(x));
      }),
      ye(f, () =>
        yn(f, ["items"], ({ items: x }) => {
          ((o.propagatedItems = x), l.setState("items", x));
        })
      )),
    ye(f, () =>
      yn(f, ["renderedItems"], (x) => {
        if (
          (x.renderedItems !== l.getState().renderedItems && d(x.renderedItems),
          typeof IntersectionObserver != "function")
        )
          return;
        let g = !0,
          y = 0,
          S = () => {
            if (g) {
              g = !1;
              return;
            }
            (cancelAnimationFrame(y), (y = requestAnimationFrame(() => d(x.renderedItems))));
          },
          T = Bp(x.renderedItems),
          w = new IntersectionObserver(S, { root: T });
        for (let V of x.renderedItems) V.element && w.observe(V.element);
        return () => {
          (cancelAnimationFrame(y), w.disconnect());
        };
      })
    ));
  let b = (x, g, y) => {
      let S = y?.registeredItems,
        T = y?.controlledItems;
      return (w) => {
        let V = S?.get(w.id),
          p = !!V || !!T?.has(w.id),
          I;
        return (
          f.setState(x, (C) => {
            let P = g.ids || (C.length >= ui && !p) ? La(C, g) : void 0,
              E = P && !P.has(w.id) ? -1 : C.findIndex(({ id: H }) => H === w.id),
              D = C.slice();
            if (E !== -1) {
              I = C[E];
              let H = { ...I, ...w };
              ((D[E] = H), S?.set(w.id, H));
            } else (D.push(w), S?.set(w.id, w), P?.add(w.id));
            return ((g.ids || (E === -1 && D.length >= ui)) && Bs(D, g, P), D);
          }),
          () => {
            (S && (V ? S.set(w.id, V) : S.delete(w.id)),
              f.setState(x, (C) => {
                let P = g.ids ? La(C, g) : void 0;
                if (!I) {
                  let H = C.filter(({ id: A }) => A !== w.id);
                  return (P?.delete(w.id), g.ids && Bs(H, g, P), H);
                }
                let E = C.findIndex(({ id: H }) => H === w.id);
                if (E === -1) return C;
                let D = C.slice();
                return ((D[E] = I), g.ids && Bs(D, g, P), D);
              }));
          }
        );
      };
    },
    v = b("items", c, o),
    R = b("renderedItems", a);
  return {
    ...l,
    setState: m,
    registerItem: v,
    renderItem: (x) => Ee(v(x), R(x)),
    item: (x) => (x ? (s.size ? (s.get(x) ?? i.get(x) ?? null) : (i.get(x) ?? null)) : null),
    __unstablePrivateStore: f,
  };
}
var Kp = { id: null };
function Yt(e, t) {
  return e.find((n) => (t ? !n.disabled && n.id !== t : !n.disabled));
}
function _p(e) {
  for (let t = e.length - 1; t >= 0; t -= 1) {
    let n = e[t];
    if (n && !n.disabled) return n;
  }
}
function jp(e, t) {
  return e.filter((n) => (t ? !n.disabled && n.id !== t : !n.disabled));
}
function Ha(e, t) {
  return e.filter((n) => n.rowId === t);
}
function Va({ items: e, fromIndex: t, step: n, rowId: r, excludeId: o }) {
  for (let i = t; i >= 0 && i < e.length; i += n) {
    let s = e[i];
    if (!s || s.rowId !== r || s.disabled) continue;
    let c = s.id;
    if (!(o != null && c === o)) return c;
  }
}
function zs(e, t, n = !1) {
  let r = e.findIndex((o) => o.id === t);
  return [...e.slice(r + 1), ...(n ? [Kp] : []), ...e.slice(0, r)];
}
var qp = 48,
  Up = 4;
function $p(e) {
  let t = [],
    n,
    r;
  for (let o of e) {
    let i = o.rowId;
    if (n && r === i) {
      n.push(o);
      continue;
    }
    let s = t.find((c) => c[0]?.rowId === i);
    (s ? (s.push(o), (n = s)) : ((n = [o]), t.push(n)), (r = i));
  }
  return t;
}
function Gp(e) {
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
    let c = i ? i.get(s.rowId) : o.find((u) => u[0]?.rowId === s.rowId);
    if (c) {
      c.push(s);
      continue;
    }
    let a = [s];
    (o.push(a),
      i ? i.set(s.rowId, a) : o.length === Up && (i = new Map(o.map((u) => [u[0]?.rowId, u]))));
  }
  return o;
}
function li(e) {
  return e.length >= qp ? Gp(e) : $p(e);
}
function Na(e) {
  let t = 0;
  for (let { length: n } of e) n > t && (t = n);
  return t;
}
function Yp(e) {
  return { id: "__EMPTY_ITEM__", disabled: !0, rowId: e };
}
function Xp(e, t, n) {
  let r = Na(e);
  for (let o of e)
    for (let i = 0; i < r; i += 1) {
      let s = o[i];
      if (!s || (n && s.disabled)) {
        let c = i === 0 && n ? Yt(o) : o[i - 1];
        o[i] = c && t !== c.id && n ? c : Yp(c?.rowId);
      }
    }
  return e;
}
function Jp(e) {
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
function ar(e = {}) {
  let t = e.store?.getState(),
    n = Fa(e),
    r = ee(e.activeId, t?.activeId, e.defaultActiveId),
    o = ee(t?.compositeElement, t?.baseElement, null),
    i = ee(
      e.compositeElementInFocusOrder,
      e.includesBaseElement,
      t?.compositeElementInFocusOrder,
      t?.includesBaseElement,
      r === null
    ),
    s = {
      ...n.getState(),
      id: ee(e.id, t?.id) ?? `id-${Math.random().toString(36).slice(2, 8)}`,
      activeId: r,
      compositeElement: o,
      baseElement: o,
      compositeElementInFocusOrder: i,
      includesBaseElement: i,
      moves: ee(t?.moves, 0),
      orientation: ee(e.orientation, t?.orientation, "both"),
      rtl: ee(e.rtl, t?.rtl, !1),
      virtualFocus: ee(e.virtualFocus, t?.virtualFocus, !1),
      focusLoop: ee(e.focusLoop, t?.focusLoop, !1),
      focusWrap: ee(e.focusWrap, t?.focusWrap, !1),
      focusShift: ee(e.focusShift, t?.focusShift, !1),
    },
    c = Ge(s, n, e.store);
  (ye(c, () =>
    Ee(
      me(c, ["compositeElement"], (l) => {
        c.setState("baseElement", l.compositeElement);
      }),
      me(c, ["baseElement"], (l) => {
        c.setState("compositeElement", l.baseElement);
      }),
      me(c, ["compositeElementInFocusOrder"], (l) => {
        c.setState("includesBaseElement", l.compositeElementInFocusOrder);
      }),
      me(c, ["includesBaseElement"], (l) => {
        c.setState("compositeElementInFocusOrder", l.includesBaseElement);
      })
    )
  ),
    ye(c, () =>
      me(c, ["renderedItems", "activeId"], (l) => {
        c.setState("activeId", (f) => (f !== void 0 ? f : Yt(l.renderedItems)?.id));
      })
    ));
  let a = (l = "next", f = {}) => {
      let d = c.getState(),
        h = ee(
          f.compositeElementInFocusOrder,
          f.includesBaseElement,
          d.compositeElementInFocusOrder
        ),
        {
          skip: m = 0,
          activeId: b = d.activeId,
          focusShift: v = d.focusShift,
          focusLoop: R = d.focusLoop,
          focusWrap: x = d.focusWrap,
          renderedItems: g = d.renderedItems,
          rtl: y = d.rtl,
        } = f,
        S = l === "up" || l === "down",
        T = l === "next" || l === "down",
        w = T ? y && !S : !y || S,
        V = v && !m;
      if (!m && !x && !h && b != null && (!S || (!V && !g.some((j) => j.rowId != null)))) {
        let j = -1;
        if (g === d.renderedItems) {
          let O = g[0];
          if (O && n.item(O.id) === O) {
            let G = n.item(b);
            G?.id === b && (j = g.indexOf(G));
          }
        }
        j === -1 && (j = g.findIndex((O) => O.id === b));
        let te = g[j];
        if (te) {
          let O = w ? -1 : 1,
            G = Va({ items: g, fromIndex: j + O, step: O, rowId: te.rowId, excludeId: b });
          return G !== void 0
            ? G
            : R && (S ? R !== "horizontal" : R !== "vertical")
              ? Va({
                  items: g,
                  fromIndex: O === 1 ? 0 : g.length - 1,
                  step: O,
                  rowId: te.rowId,
                  excludeId: b,
                })
              : void 0;
        }
      }
      let p = S ? Fo(Xp(li(g), b, V)) : g;
      if (((p = w ? Ho(p) : p), (p = S ? Jp(p) : p), b == null)) return Yt(p)?.id;
      let I = p.find((j) => j.id === b);
      if (!I) return Yt(p)?.id;
      let M = p.some((j) => j.rowId),
        C = p.indexOf(I),
        P = p.slice(C + 1),
        E = Ha(P, I.rowId);
      if (m) {
        let j = jp(E, b);
        return (j.slice(m)[0] || j[j.length - 1])?.id;
      }
      let D = R && (S ? R !== "horizontal" : R !== "vertical"),
        H = M && x && (S ? x !== "horizontal" : x !== "vertical"),
        A = T ? (!M || S) && D && h : S ? h : !1;
      if (D) return Yt(zs(H && !A ? p : Ha(p, I.rowId), b, A), b)?.id;
      if (H) {
        let j = Yt(A ? E : P, b);
        return A ? j?.id || null : j?.id;
      }
      let F = Yt(E, b);
      return !F && A ? null : F?.id;
    },
    u = (l, f) => (typeof f == "number" ? a(l, { skip: f }) : a(l, f));
  return {
    ...n,
    ...c,
    setCompositeElement: (l) => c.setState("compositeElement", l),
    setBaseElement: (l) => c.setState("compositeElement", l),
    setActiveId: (l) => c.setState("activeId", l),
    move: (l) => {
      l !== void 0 && (c.setState("activeId", l), c.setState("moves", (f) => f + 1));
    },
    first: () => Yt(c.getState().renderedItems)?.id,
    last: () => _p(c.getState().renderedItems)?.id,
    next: (l) => u("next", l),
    previous: (l) => u("previous", l),
    down: (l) => u("down", l),
    up: (l) => u("up", l),
  };
}
var Ba = zs,
  za = Yt,
  Ka = li,
  fi = new WeakSet();
function _a(e) {
  Je(e) === e && (fi.add(e), queueMicrotask(() => fi.delete(e)));
}
function ja(e) {
  fi.delete(e);
}
function Zp(e, t) {
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
function _s(e) {
  let { compositeElement: t } = e.getState(),
    n = Tn(t);
  return n ? (t?.contains(n) || Vt(e, n) ? !0 : !!qa(e)?.contains(n)) : !1;
}
function Qp({
  store: e,
  id: t,
  focus: n,
  markedOnly: r,
  requireFocus: o,
  focusOwner: i,
  scrollIntoView: s,
  onConsume: c,
}) {
  let a = null,
    u,
    l = !1,
    f = !1,
    d = !1,
    h = !1,
    m = !1,
    b = e.getState().compositeElement,
    v = Tn(b),
    R = o ? i || v : null,
    x = !!b?.contains(v),
    g = (E) => {
      if (!R) return !0;
      let D = Tn(R);
      return D === R || D === E ? !0 : _s(e);
    },
    y = (E) => {
      if ("mounted" in E) {
        if (E.mounted) h = !0;
        else if (h) return !0;
      }
      if ("open" in E) {
        if (E.open) m = !0;
        else if (m) return !0;
      }
      return t != null && E.activeId != null && E.activeId !== t;
    },
    S = (E, D) => {
      if (!("open" in E) || E.open) return !1;
      let H = qa(e);
      if (!H?.contains(D)) return !1;
      let { compositeElement: A } = E;
      return !A || H.contains(A) ? !1 : zo(D);
    },
    T = (E) => {
      let D = un(e, u ?? (t === void 0 ? E.activeId : t));
      return D?.element?.isConnected ? ((u = D.id), D.element) : null;
    },
    w,
    V,
    p = () => {
      ((d = !0), w?.(), V?.());
    },
    I = !1,
    M = () => {
      I || ((I = !0), c?.());
    },
    C = () => {
      if (!d) return (M(), p());
    },
    P = () => {
      if (d) return;
      let E = e.getState();
      if (y(E)) return C();
      let D = !1;
      if (a) {
        if (!a.isConnected && ((D = l && !f && Je(a) === ue(a).body), (a = T(E)), !a)) return C();
      } else if (((a = T(E)), !a)) return;
      if (D) l = !1;
      else if (!g(a)) return C();
      let H = n && x && S(E, a);
      if (H) {
        let { activeId: A } = E;
        if (A != null && A !== u) return C();
      }
      if (n && !l && !H) {
        ((l = !0), M(), (f = !1));
        let A = a;
        w?.();
        let F = () => {
            f = !fi.has(A);
          },
          j = () => {
            f = !1;
          };
        if (
          (A.addEventListener("blur", F),
          A.addEventListener("focus", j),
          (w = () => {
            (A.removeEventListener("blur", F), A.removeEventListener("focus", j));
          }),
          Zp(e, () => {
            A.focus({ preventScroll: !0 });
          }),
          d)
        )
          return;
      }
      if (r && !a.hasAttribute("data-autofocus")) return H ? void 0 : C();
      if (zo(a) && !("unstable_placing" in E && E.unstable_placing)) {
        if ((H || C(), s)) {
          s(a);
          return;
        }
        a.scrollIntoView({ block: "nearest", inline: "nearest" });
      }
    };
  return (
    (V = st(e, ["activeId", "items", "mounted", "open", "unstable_placing"], P)),
    P(),
    Object.assign(p, { settle: C })
  );
}
function mi(e) {
  let t = (0, lr.useRef)(null),
    n = (0, lr.useRef)(e),
    r = (0, lr.useCallback)(() => {
      (t.current?.(), (t.current = null));
    }, []),
    o = (0, lr.useCallback)(
      (i) => {
        if (!e || n.current !== e) return;
        (t.current?.settle(), (t.current = null));
        let s = Qp({ store: e, ...i });
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
function un(e, t) {
  return (t && e.item(t)) || null;
}
function Ua(e, t = !1) {
  if (et(e)) e.setSelectionRange(t ? e.value.length : 0, e.value.length);
  else if (e.isContentEditable) {
    let n = ue(e).getSelection();
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
function Vt(e, t, n) {
  if (!t || t === n) return !1;
  let r = e.item(t.id);
  return !(!r || (n && r.element === n));
}
var It = B(oe(), 1),
  Ja = B(de(), 1);
var Nt = B(oe(), 1),
  qs = B(qd(), 1),
  di = () => () => {};
function pi(e) {
  return Array.isArray(e);
}
function js(e, t) {
  return e === t || (e !== e && t !== t);
}
function eh(e, t) {
  if (e?.length !== t.length) return !1;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n];
    if (!js(r, t[n])) return !1;
  }
  return !0;
}
function Ya(e) {
  let [t, n] = Nt.useState(() => (e === null ? null : [...e]));
  if (e === null) return (t !== null && n(null), null);
  if (eh(t, e)) return t;
  let r = [...e];
  return (n(r), r);
}
function K(e, t = No, n) {
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
function th(e, t) {
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
function Fn(e, t, n) {
  let r = pi(t) ? (n ?? {}) : t,
    o = pi(t) ? t : void 0,
    i = Nt.useRef({}),
    s = Ya(th(r, o)),
    c = Nt.useCallback((u) => (!e || s?.length === 0 ? di() : st(e, s, u)), [e, s]),
    a = () => {
      let u = e?.getState(),
        l = !1,
        f = i.current;
      for (let d in r) {
        let h = r[d];
        if (h === void 0) continue;
        if (typeof h == "function") {
          let b = h(u);
          Object.is(b, f[d]) || ((f[d] = b), (l = !0));
        }
        if (typeof h == "function") continue;
        let m = u && $e(u, h) ? u[h] : void 0;
        Object.is(m, f[d]) || ((f[d] = m), (l = !0));
      }
      return (l && (i.current = { ...f }), i.current);
    };
  return (0, qs.useSyncExternalStore)(c, a, a);
}
function Ie(e, t, n, r) {
  let o = $e(t, n) ? t[n] : void 0,
    i = r ? t[r] : void 0,
    s = !!i,
    c = rr({ value: o, setValue: i });
  ($(() => {
    if (s)
      return st(e, [n], (a, u) => {
        let { value: l, setValue: f } = c.current;
        f && (js(a[n], u[n]) || js(a[n], l) || f(a[n]));
      });
  }, [e, n, s, c]),
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
function ct(e, t) {
  let [n, r] = Nt.useState(() => e(t));
  $(() => Wr(n), [n]);
  let o = Nt.useCallback((i) => K(n, i), [n]);
  return [
    Nt.useMemo(() => ({ ...n, useState: o }), [n, o]),
    q(() => {
      r((i) => e({ ...t, ...i.getState() }));
    }),
  ];
}
var nh = "button";
function rh(e) {
  return er(e) ? !0 : e.tagName === "INPUT" && !Ht(e);
}
function oh(e, t = !1) {
  let n = e.clientHeight,
    { top: r } = e.getBoundingClientRect(),
    o = Math.max(n * 0.875, n - 40) * 1.5,
    i = t ? n - o + r : o + r;
  return e.tagName === "HTML" ? i + e.scrollTop : i;
}
function ih(e, t = !1) {
  let { top: n } = e.getBoundingClientRect();
  return t ? n + e.clientHeight : n;
}
function Xa(e, t, n, r = !1) {
  if (!t || !n) return;
  let { renderedItems: o } = t.getState(),
    i = Dn(e);
  if (!i) return;
  let s = oh(i, r),
    c,
    a;
  for (let u = 0; u < o.length; u += 1) {
    let l = c;
    if (((c = n(u)), !c)) break;
    if (c === l) continue;
    let f = un(t, c)?.element;
    if (!f) continue;
    let d = ih(f, r) - s,
      h = Math.abs(d);
    if ((r && d <= 0) || (!r && d >= 0)) {
      a !== void 0 && a < h && (c = l);
      break;
    }
    a = h;
  }
  return c;
}
function sh(e, t) {
  return Te(e) ? !1 : Vt(t, e.target);
}
var Br = Z(function ({
    store: t,
    rowId: n,
    preventScrollOnKeyDown: r = !1,
    moveOnKeyPress: o = !0,
    tabbable: i = !1,
    getItem: s,
    typeaheadText: c,
    "aria-setsize": a,
    "aria-posinset": u,
    unstable_scrollIntoView: l,
    ...f
  }) {
    let d = $t();
    t = t || d;
    let h = ca(f),
      m = Oe(f.id),
      b = (0, It.useRef)(null),
      v = (0, It.useRef)(null),
      R = (0, It.useCallback)((N) => {
        let L = v.current;
        (!N && L && _a(L), N && ja(N), (v.current = N));
      }, []),
      x = (0, It.useContext)(Ma),
      g = dt(f),
      y = g && !h,
      S = g && f.focusable === !1,
      T = f.shouldRegisterItem,
      w = (N) => {
        if (n) return n;
        if (N && x?.compositeElement && x.compositeElement === N.compositeElement) return x.id;
      },
      {
        rowId: V,
        compositeElement: p,
        ariaSetSize: I,
        ariaPosInSet: M,
      } = Fn(t, ["compositeElement", "renderedItems"], {
        rowId: w,
        compositeElement(N) {
          return N?.compositeElement || void 0;
        },
        ariaSetSize(N) {
          if (a != null) return a;
          if (N && x?.ariaSetSize && x.compositeElement === N.compositeElement)
            return x.ariaSetSize;
        },
        ariaPosInSet(N) {
          if (u != null) return u;
          if (!N || !x?.ariaPosInSet || x.compositeElement !== N.compositeElement) return;
          let L = w(N),
            he = N.renderedItems.filter((xe) => xe.rowId === L);
          return x.ariaPosInSet + he.findIndex((xe) => xe.id === m);
        },
      }),
      { isActiveItem: C, isTabbable: P } = Fn(
        t,
        ["activeId", "compositeElement", "renderedItems", "virtualFocus", "items"],
        {
          isActiveItem(N) {
            return !!N && N.activeId === m;
          },
          isTabbable(N) {
            if (!N || (!N.compositeElement && !N.renderedItems.length)) return !0;
            if (N.virtualFocus) return !1;
            if (!N.renderedItems.length || i) return !0;
            if (N.activeId === null) return !1;
            let L = t?.item(N.activeId);
            return L?.disabled || !L?.element ? !0 : N.activeId === m;
          },
        }
      ),
      E = (0, It.useCallback)(
        (N) => {
          let L = (N.element ? aa(N.element) : void 0) ?? (S || y),
            he = {
              ...N,
              id: m || N.id,
              rowId: V,
              disabled: L,
              children: N.element?.textContent,
              typeaheadText: c,
            };
          return s ? s(he) : he;
        },
        [m, V, S, y, c, s]
      ),
      D = f.onFocus,
      H = (0, It.useRef)(!1),
      A = (0, It.useRef)(null),
      F = mi(t),
      j = q((N) => {
        if ((D?.(N), N.defaultPrevented || Qu(N) || !m || !t || sh(N, t))) return;
        let { virtualFocus: L, compositeElement: he } = t.getState();
        if ((t.setActiveId(m), er(N.currentTarget) && Ua(N.currentTarget), !L)) {
          Te(N) && t.item(m) && F({ id: m, markedOnly: !0, requireFocus: !0, scrollIntoView: l });
          return;
        }
        if (!Te(N) || rh(N.currentTarget)) return;
        let xe = (Ve, je) => {
          if (!Ke(je)) return;
          let Ne = Ve === je || Vt(t, Ve);
          (t.item(m) && F({ id: m, markedOnly: !0, requireFocus: !0, scrollIntoView: l }),
            (H.current = !0),
            Ne ? $a(je) : je.focus({ preventScroll: !0 }));
        };
        if (he?.isConnected) {
          xe(N.relatedTarget, he);
          return;
        }
        if (T === !1) return;
        let { currentTarget: ke, relatedTarget: Me } = N,
          Re = () => {
            (A.current?.(), (A.current = null));
          };
        (Re(),
          (A.current = st(t, null, () => {
            if (Je(ke) !== ke) {
              Re();
              return;
            }
            let Ve = t.getState(),
              je = Ve.compositeElement;
            je?.isConnected && (Re(), Ve.virtualFocus && xe(Me, je));
          })));
      }),
      te = f.onBlurCapture,
      O = q((N) => {
        (te?.(N),
          !N.defaultPrevented &&
            t?.getState()?.virtualFocus &&
            H.current &&
            ((H.current = !1), N.preventDefault(), N.stopPropagation()));
      }),
      G = f.onKeyDown,
      se = pe(r),
      _ = pe(o),
      be = q((N) => {
        if ((G?.(N), N.defaultPrevented || !Te(N) || !t)) return;
        let { currentTarget: L } = N,
          he = t.getState(),
          xe = !!t.item(m)?.rowId,
          ke = he.orientation !== "horizontal",
          Me = he.orientation !== "vertical",
          Re = () => !!(xe || Me || !he.compositeElement || !et(he.compositeElement)),
          Ve = {
            ArrowUp: (xe || ke) && t.up,
            ArrowRight: (xe || Me) && t.next,
            ArrowDown: (xe || ke) && t.down,
            ArrowLeft: (xe || Me) && t.previous,
            Home: () => {
              if (Re()) return !xe || N.ctrlKey ? t?.first() : t?.previous(-1);
            },
            End: () => {
              if (Re()) return !xe || N.ctrlKey ? t?.last() : t?.next(-1);
            },
            PageUp: () => Xa(L, t, t?.up, !0),
            PageDown: () => Xa(L, t, t?.down),
          }[N.key];
        if (Ve) {
          if (er(L)) {
            let Ne = Rn(L),
              At = Me && N.key === "ArrowLeft",
              We = Me && N.key === "ArrowRight",
              ht = ke && N.key === "ArrowUp",
              kt = ke && N.key === "ArrowDown";
            if (We || kt) {
              let { length: Qe } = Ko(L);
              if (Ne.end !== Qe) return;
            } else if ((At || ht) && Ne.start !== 0) return;
          }
          let je = Ve();
          if (se(N) || je !== void 0) {
            if (!_(N)) return;
            (N.preventDefault(), t.move(je));
          }
        }
      }),
      De = (0, It.useMemo)(() => ({ id: m, compositeElement: p }), [m, p]);
    return (
      (f = ge(f, (N) => (0, Ja.jsx)(Pa.Provider, { value: De, children: N }), [De])),
      (f = {
        "data-active-item": C || void 0,
        ...f,
        id: m,
        ref: ae(b, R, f.ref),
        tabIndex: P ? f.tabIndex : -1,
        onFocus: j,
        onBlurCapture: O,
        onKeyDown: be,
      }),
      (f = Fr(f)),
      (f = Hs({ store: t, ...f, getItem: E, shouldRegisterItem: m ? T : !1 })),
      { ...f, "aria-setsize": I, "aria-posinset": M }
    );
  }),
  Za = Ut(
    U(function (t) {
      let n = Br(mt(t));
      return J(nh, n);
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
var ch = Symbol("cancelled"),
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
    me(e, ["moves", "activeId"], (s, c) => {
      if (s.moves !== c.moves) {
        ((i.consumedBy = null), (i.targetId = s.activeId));
        return;
      }
      s.activeId !== c.activeId && (i.targetId = ch);
    }),
    i
  );
}
var Hn = B(oe(), 1),
  gi = B(de(), 1);
var uh = "div";
function ah(e) {
  return e.some((t) => !!t.rowId);
}
function lh(e) {
  let t = e.target;
  return t && !et(t) ? !1 : e.key.length === 1 && !e.ctrlKey && !e.metaKey;
}
function fh(e) {
  return e.key === "Shift" || e.key === "Control" || e.key === "Alt" || e.key === "Meta";
}
function tl(e, t, n) {
  return q((r) => {
    if ((t?.(r), r.defaultPrevented || r.isPropagationStopped() || !Te(r) || fh(r) || lh(r)))
      return;
    let o = e.getState(),
      i = un(e, o.activeId)?.element;
    if (!i) return;
    let { view: s, ...c } = r;
    (i !== n?.current && i.focus({ preventScroll: !0 }),
      el(i, r.nativeEvent, c) || r.preventDefault(),
      r.currentTarget.contains(i) && r.stopPropagation());
  });
}
function mh(e) {
  return za(Fo(Ho(Ka(e))));
}
function nl(e, t) {
  let { consumedBy: n } = Sn(e);
  return !n || n === t;
}
function rl(e, t, n) {
  e.getState().moves === n && (Sn(e).consumedBy = t);
}
var dh = Ut(function ({
    store: t,
    focusOnMove: n,
    previousElementRef: r,
    present: o,
    scrollIntoView: i,
  }) {
    let s = K(t, "moves"),
      c = K(t, "compositeElement"),
      a = (0, Hn.useMemo)(() => ({}), [t.getState]);
    return (
      (0, Hn.useEffect)(() => {
        let u = Sn(t);
        if (!s || !n || !nl(t, a)) return;
        let { activeId: l } = t.getState();
        if (l != null && l === u.targetId)
          return o({
            id: l,
            requireFocus: _s(t),
            focus: !0,
            scrollIntoView: i,
            onConsume: () => rl(t, a, s),
          });
      }, [t, s, n, c, o, i, a]),
      $(() => {
        let u = Sn(t);
        if (!s || !c || !nl(t, a)) return;
        let { activeId: l } = t.getState();
        if (l !== null || l !== u.targetId) return;
        rl(t, a, s);
        let f = r.current;
        ((r.current = null),
          f && An(f, { relatedTarget: c }),
          St(c) ||
            (Ke(c) && c.scrollIntoView({ block: "nearest", inline: "nearest" }),
            c.focus({ preventScroll: !0 })));
      }, [t, s, c, r, a]),
      null
    );
  }),
  zr = Z(function ({
    store: t,
    composite: n = !0,
    focusOnMove: r = n,
    moveOnKeyPress: o = !0,
    unstable_scrollIntoView: i,
    ...s
  }) {
    let c = Ia();
    ((t = t || c), fe(t, !1));
    let a = (0, Hn.useRef)(null),
      u = (0, Hn.useRef)(null),
      l = mi(t),
      [, f] = ti(n ? t.setCompositeElement : null),
      d = K(t, "virtualFocus"),
      h = K(t, n && d ? ["activeId"] : [], (I) => (n && d ? I.activeId : null));
    $(() => {
      if (!t || !n || !d) return;
      let I = u.current;
      if (((u.current = null), !I)) return;
      let M = un(t, h)?.element || Je(I);
      M !== I && An(I, { relatedTarget: M });
    }, [t, h, d, n]);
    let m = tl(t, s.onKeyDownCapture, u),
      b = tl(t, s.onKeyUpCapture, u),
      v = s.onFocusCapture,
      R = q((I) => {
        if ((v?.(I), I.defaultPrevented || !t)) return;
        let { virtualFocus: M } = t.getState();
        if (!M) return;
        let C = I.relatedTarget,
          P = Ga(I.currentTarget);
        Te(I) && P && (I.stopPropagation(), (u.current = C));
      }),
      x = s.onFocus,
      g = q((I) => {
        if ((x?.(I), I.defaultPrevented || !n || !t)) return;
        let { relatedTarget: M } = I,
          { virtualFocus: C } = t.getState();
        if (C)
          Te(I) &&
            !Vt(t, M) &&
            queueMicrotask(() =>
              l({ focus: !0, markedOnly: !0, requireFocus: !0, scrollIntoView: i })
            );
        else if (Te(I)) {
          if (!Vt(t, M)) {
            let { activeId: P } = t.getState();
            P != null && l({ id: P, markedOnly: !0, requireFocus: !0, scrollIntoView: i });
          }
          t.setActiveId(null);
        }
      }),
      y = s.onBlurCapture,
      S = q((I) => {
        if ((y?.(I), I.defaultPrevented || !t)) return;
        let { virtualFocus: M, activeId: C, compositeElement: P } = t.getState();
        if (!M || I.currentTarget !== P) return;
        let E = un(t, C)?.element,
          D = I.relatedTarget,
          H = Vt(t, D),
          A = u.current;
        ((u.current = null),
          Te(I) && H
            ? (D === E ? A && A !== D && An(A, I) : E ? An(E, I) : A && An(A, I),
              I.stopPropagation())
            : !Vt(t, I.target) && E && An(E, I));
      }),
      T = s.onKeyDown,
      w = pe(o),
      V = q((I) => {
        if ((T?.(I), I.nativeEvent.isComposing || I.defaultPrevented || !t || !Te(I))) return;
        let { orientation: M, items: C, renderedItems: P, activeId: E, rtl: D } = t.getState(),
          H = un(t, E);
        if (H?.element?.isConnected) return;
        let A = H && E != null,
          F = A ? C : P,
          j = M !== "horizontal",
          te = M !== "vertical",
          O = ah(F);
        if (
          (I.key === "ArrowLeft" ||
            I.key === "ArrowRight" ||
            I.key === "Home" ||
            I.key === "End") &&
          et(I.currentTarget)
        )
          return;
        let De = {
          ArrowUp:
            (O || j) &&
            (() => (A ? t.up({ activeId: E, renderedItems: F }) : O ? mh(P)?.id : t?.last())),
          ArrowRight:
            (O || te) &&
            (() => (A ? t.next({ activeId: E, renderedItems: F }) : D ? t.last() : t.first())),
          ArrowDown:
            (O || j) && (() => (A ? t.down({ activeId: E, renderedItems: F }) : t.first())),
          ArrowLeft:
            (O || te) &&
            (() => (A ? t.previous({ activeId: E, renderedItems: F }) : D ? t.first() : t.last())),
          Home: t.first,
          End: t.last,
          PageUp: t.first,
          PageDown: t.last,
        }[I.key];
        if (De) {
          let N = De();
          if (N !== void 0) {
            if (!w(I)) return;
            (I.preventDefault(), t.move(N));
          }
        }
      });
    ((s = ge(
      s,
      (I) =>
        (0, gi.jsxs)(Gt, {
          value: t,
          children: [
            I,
            n &&
              (0, gi.jsx)(dh, {
                store: t,
                focusOnMove: r,
                previousElementRef: u,
                present: l,
                scrollIntoView: i,
              }),
          ],
        }),
      [t, n, r, l]
    )),
      (s = {
        "aria-activedescendant": K(t, n && d ? ["items"] : [], () => {
          if (t && n && d) return un(t, h)?.id;
        }),
        ...s,
        ref: ae(a, f, s.ref),
        onKeyDownCapture: m,
        onKeyUpCapture: b,
        onFocusCapture: R,
        onFocus: g,
        onBlurCapture: S,
        onKeyDown: V,
      }));
    let p = K(t, n && !d ? ["activeId"] : [], (I) => n && (d || I.activeId === null));
    return ((s = cn({ focusable: p, ...s })), s);
  }),
  ol = U(function (t) {
    let n = zr(t);
    return J(uh, n);
  });
var Kr = qe(),
  Gx = Kr.useContext,
  Yx = Kr.useScopedContext,
  _r = Kr.useProviderContext,
  il = Kr.ContextProvider,
  sl = Kr.ScopedContextProvider;
var $s = B(oe(), 1),
  jr = qe([il], [sl]),
  Qx = jr.useContext,
  ey = jr.useScopedContext,
  Vn = jr.useProviderContext,
  cl = jr.ContextProvider,
  fr = jr.ScopedContextProvider,
  bi = (0, $s.createContext)(void 0),
  ul = (0, $s.createContext)(void 0);
var Nn = B(oe(), 1),
  Gs = B(de(), 1);
var ml = B(To(), 1),
  ph = "div";
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
  for (let [c, a] of r.entries()) {
    if (a.trim() === "none") continue;
    let u = ll(o[c % o.length]),
      l = ll(i[c % i.length]);
    s = Math.max(s, u + l);
  }
  return s;
}
function hh(e) {
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
var qr = Z(function ({ store: t, alwaysVisible: n, unstable_otherElementRef: r, ...o }) {
    let i = _r();
    ((t = t || i), fe(t, !1));
    let s = (0, Nn.useRef)(null),
      c = Oe(o.id),
      [a, u] = (0, Nn.useState)(null),
      {
        open: l,
        mounted: f,
        animated: d,
        contentElement: h,
      } = Fn(t, {
        open: "open",
        mounted: "mounted",
        animated: "animated",
        contentElement: "contentElement",
      }),
      m = K(t.disclosure, "contentElement"),
      b = (0, Nn.useRef)(!1);
    ($(() => {
      s.current && t?.setContentElement(s.current);
    }, [t]),
      $(() => {
        let g;
        return (
          t?.setState("animated", (y) => ((g = y), !0)),
          () => {
            g !== void 0 && t?.setState("animated", g);
          }
        );
      }, [t]),
      $(() => {
        if (!d) {
          l ? b.current && ((b.current = !1), u("enter")) : ((b.current = !0), u(null));
          return;
        }
        if (!h?.isConnected) {
          u(null);
          return;
        }
        return Gu(() => {
          u(l ? "enter" : f ? "leave" : null);
        });
      }, [d, h, l, f]),
      $(() => {
        if (!t || !d || !a || !h) return;
        let g = () => t?.setState("animating", !1),
          y = () => (0, ml.flushSync)(g);
        if ((a === "leave" && l) || (a === "enter" && !l)) return;
        if (typeof d == "number") return al(d, y);
        let S = [h];
        m && S.push(m);
        let T = r?.current;
        T && S.push(T);
        let w = Math.max(...S.map(hh));
        if (!w) {
          (a === "enter" && t.setState("animated", !1), g());
          return;
        }
        return al(Math.max(w - 1e3 / 60, 0), y);
      }, [t, d, h, m, r, l, a]),
      (o = ge(o, (g) => (0, Gs.jsx)(fr, { value: t, children: g }), [t])));
    let v = an(f, o.hidden, n),
      R = o.style,
      x = (0, Nn.useMemo)(() => (v ? { ...R, display: "none" } : R), [v, R]);
    return (
      (o = {
        "data-open": l || void 0,
        "data-enter": a === "enter" || void 0,
        "data-leave": a === "leave" || void 0,
        hidden: v,
        ...o,
        id: c,
        ref: ae(c ? t.setContentElement : null, s, o.ref),
        style: x,
      }),
      bn(o)
    );
  }),
  gh = U(function (t) {
    let n = qr(t);
    return J(ph, n);
  }),
  cy = U(function ({ unmountOnHide: t, ...n }) {
    let r = _r(),
      o = n.store || r;
    return K(o, ["mounted"], (i) => !t || i?.mounted) === !1 ? null : (0, Gs.jsx)(gh, { ...n });
  });
function bh(e) {
  let t = e?.unstable_onHideRequest,
    n = e?.unstable_requestHide;
  if (t && n) return { onHideRequest: t, requestHide: n };
}
function vi(e = {}) {
  let t =
    e.store || e.disclosure
      ? Cn(e.store, ur(e.disclosure, ["contentElement", "disclosureElement"]))
      : void 0;
  let n = t?.getState(),
    r = ee(e.open, n?.open, e.defaultOpen, !1),
    o = ee(e.animated, n?.animated, !1),
    i = {
      open: r,
      animated: o,
      animating: !!o && r,
      mounted: r,
      contentElement: ee(n?.contentElement, null),
      disclosureElement: ee(n?.disclosureElement, null),
    },
    s = t ? Ge(i, t) : Ge(i);
  (ye(s, () =>
    me(s, ["animated", "animating"], (d) => {
      d.animated || s.setState("animating", !1);
    })
  ),
    ye(s, () =>
      st(s, ["open"], () => {
        s.getState().animated && s.setState("animating", !0);
      })
    ),
    ye(s, () =>
      me(s, ["open", "animating"], (d) => {
        s.setState("mounted", d.open || d.animating);
      })
    ));
  let c = bh(e.store),
    a = new Map(),
    u =
      c?.onHideRequest ??
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
      c?.requestHide ??
      ((d) => {
        let h = [...a.keys()],
          m = (b) => {
            let v = h[b];
            if (!v) {
              d();
              return;
            }
            v(() => m(b + 1));
          };
        m(0);
      });
  ye(s, () => {
    if (e.disclosure) return u(e.disclosure.unstable_requestHide);
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
    unstable_onHideRequest: u,
    unstable_requestHide: l,
    stopAnimation: () => s.setState("animating", !1),
    setContentElement: (d) => s.setState("contentElement", d),
    setDisclosureElement: (d) => s.setState("disclosureElement", d),
  };
}
function Ys(e, t, n) {
  return (
    Et(t, [n.store, n.disclosure, t]),
    Ie(e, n, "open", "setOpen"),
    Ie(e, n, "mounted", "setMounted"),
    Ie(e, n, "animated"),
    Object.assign(e, { disclosure: n.disclosure })
  );
}
function dl(e = {}) {
  let [t, n] = ct(vi, e);
  return Ys(t, n, e);
}
var Ur = qe([cl], [fr]),
  xh = Ur.useContext,
  gy = Ur.useScopedContext,
  $r = Ur.useProviderContext,
  xi = Ur.ContextProvider,
  wn = Ur.ScopedContextProvider;
var Gr = B(oe(), 1),
  yi = (0, Gr.createContext)(null),
  Yr = qe([xi, xn], [wn, Gt]),
  Xs = Yr.useContext,
  mr = Yr.useScopedContext,
  Ci = Yr.useProviderContext,
  pl = Yr.ContextProvider,
  hl = Yr.ScopedContextProvider,
  gl = (0, Gr.createContext)(void 0),
  bl = (0, Gr.createContext)(!1),
  Js = (0, Gr.createContext)(null);
function vl(e, t, n) {
  return (Et(t, [n.store, t]), Ie(e, n, "items", "setItems"), e);
}
function Zs(e) {
  return { id: Oe(e.id), ...e };
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
  let [t, n] = ct(ar, e);
  return Xr(t, n, e);
}
var yh = "hr",
  Qs = Z(function ({ orientation: t = "horizontal", ...n }) {
    return ((n = { role: "separator", "aria-orientation": t, ...n }), n);
  }),
  ky = U(function (t) {
    let n = Qs(t);
    return J(yh, n);
  });
var Ch = "hr",
  ec = Z(function ({ store: t, orientation: n, ...r }) {
    let o = $t();
    ((t = t || o), fe(t, !1));
    let i = K(
      t,
      ["orientation"],
      (s) => n ?? (s.orientation === "horizontal" ? "vertical" : "horizontal")
    );
    return ((r = Qs({ ...r, orientation: i })), r);
  }),
  Sh = U(function (t) {
    let n = ec(t);
    return J(Ch, n);
  });
var yl = B(de(), 1),
  wh = "div",
  tc = Z(function ({ autoFocusOnShow: t = !0, ...n }) {
    return ((n = ge(n, (r) => (0, yl.jsx)(Qo.Provider, { value: t, children: r }), [t])), n);
  }),
  zy = U(function (t) {
    let n = tc(t);
    return J(wh, n);
  });
var Cl = B(oe(), 1),
  nc = (0, Cl.createContext)(0);
var Sl = B(oe(), 1),
  wl = B(de(), 1);
function El({ level: e, children: t }) {
  let n = (0, Sl.useContext)(nc),
    r = Math.max(Math.min(e || n + 1, 6), 1);
  return (0, wl.jsx)(nc.Provider, { value: r, children: t });
}
var Eh = "span";
function rc(e) {
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
var oc = Z(function (t) {
    return ((t = { ...t, style: rc(t.style) }), t);
  }),
  $y = U(function (t) {
    let n = oc(t);
    return J(Eh, n);
  });
var Ih = "span",
  Ph = Z(function (t) {
    return (
      (t = {
        "data-focus-trap": "",
        tabIndex: 0,
        "aria-hidden": !0,
        ...t,
        style: { position: "fixed", top: 0, left: 0, ...t.style },
      }),
      (t = oc(t)),
      t
    );
  }),
  Jr = U(function (t) {
    let n = Ph(t);
    return J(Ih, n);
  });
var Il = B(oe(), 1),
  ic = (0, Il.createContext)(null);
var ut = B(oe(), 1),
  ot = B(de(), 1),
  sc = B(To(), 1),
  Mh = "div";
function Pl(e) {
  let t = ue(e),
    { fullscreenElement: n } = t,
    r = Be(e).HTMLElement;
  return r && n instanceof r ? n : t.body;
}
function Rh(e, t) {
  return t ? (typeof t == "function" ? t(e) : t) : ue(e).createElement("div");
}
function Dh(e = "id") {
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
var cc = Z(function ({
    preserveTabOrder: t,
    preserveTabOrderAnchor: n,
    portalElement: r,
    portalRef: o,
    portal: i = !0,
    ...s
  }) {
    let c = (0, ut.useRef)(null),
      a = ae(c, s.ref),
      u = (0, ut.useContext)(ic),
      [l, f] = (0, ut.useState)(null),
      [d, h] = (0, ut.useState)(null),
      m = (0, ut.useRef)(null),
      b = (0, ut.useRef)(null),
      v = (0, ut.useRef)(null),
      R = (0, ut.useRef)(null),
      x = rr(o),
      g = (0, ut.useRef)(null);
    return (
      $(() => {
        let y = c.current;
        if (!y || !i) {
          f(null);
          return;
        }
        let S = Rh(y, r);
        if (!S) {
          f(null);
          return;
        }
        let T = S.isConnected;
        return (
          T || (u || Pl(y)).appendChild(S),
          S.id || (S.id = y.id ? `portal/${y.id}` : Dh()),
          f(S),
          (g.current = Ml(x.current, S)),
          () => {
            let w = g.current;
            (w && ((g.current = null), Rl(w)), T || S.remove());
          }
        );
      }, [i, r, u, x]),
      $(() => {
        let y = g.current;
        y && y.ref !== o && (Rl(y), (g.current = Ml(o, y.node)));
      }, [o]),
      (0, ut.useEffect)(() => {
        if (!l || u || r) return;
        let y = ue(l),
          S = () => {
            let T = Pl(l);
            l.parentElement !== T && T.appendChild(l);
          };
        return (
          l.isConnected && S(),
          y.addEventListener("fullscreenchange", S),
          () => {
            y.removeEventListener("fullscreenchange", S);
          }
        );
      }, [l, u, r]),
      $(() => {
        if (!i || !t || !n) return;
        let y = ue(n).createElement("span");
        return (
          (y.style.position = "fixed"),
          n.insertAdjacentElement("afterend", y),
          h(y),
          () => {
            (y.remove(), h(null));
          }
        );
      }, [i, t, n]),
      (0, ut.useEffect)(() => {
        if (!l || !t) return;
        let y = 0,
          S = (T) => {
            if (!qt(T)) return;
            let w = T.type === "focusin";
            if ((cancelAnimationFrame(y), w)) return ia(l);
            y = requestAnimationFrame(() => {
              oa(l, !0);
            });
          };
        return (
          l.addEventListener("focusin", S, !0),
          l.addEventListener("focusout", S, !0),
          () => {
            (cancelAnimationFrame(y),
              l.removeEventListener("focusin", S, !0),
              l.removeEventListener("focusout", S, !0));
          }
        );
      }, [l, t]),
      (s = ge(
        s,
        (y) => {
          if (((y = (0, ot.jsx)(ic.Provider, { value: l || u, children: y })), !i)) return y;
          if (!l)
            return (0, ot.jsx)("span", {
              ref: a,
              id: s.id,
              style: { position: "fixed" },
              hidden: !0,
            });
          ((y = (0, ot.jsxs)(ot.Fragment, {
            children: [
              t &&
                (0, ot.jsx)(Jr, {
                  ref: b,
                  "data-focus-trap": s.id,
                  className: "__focus-trap-inner-before",
                  onFocus: (T) => {
                    qt(T, l) ? En(Xo()) : En(m.current);
                  },
                }),
              y,
              t &&
                (0, ot.jsx)(Jr, {
                  ref: v,
                  "data-focus-trap": s.id,
                  className: "__focus-trap-inner-after",
                  onFocus: (T) => {
                    qt(T, l) ? En(As()) : En(R.current);
                  },
                }),
            ],
          })),
            (y = (0, sc.createPortal)(y, l)));
          let S = (0, ot.jsxs)(ot.Fragment, {
            children: [
              t &&
                (0, ot.jsx)(Jr, {
                  ref: m,
                  "data-focus-trap": s.id,
                  className: "__focus-trap-outer-before",
                  onFocus: (T) => {
                    T.relatedTarget !== R.current && qt(T, l) ? En(b.current) : En(As());
                  },
                }),
              t && (0, ot.jsx)("span", { "aria-owns": l.id, style: { position: "fixed" } }),
              t &&
                (0, ot.jsx)(Jr, {
                  ref: R,
                  "data-focus-trap": s.id,
                  className: "__focus-trap-outer-after",
                  onFocus: (T) => {
                    if (qt(T, l)) En(v.current);
                    else {
                      let w = Xo();
                      if (w === b.current) {
                        requestAnimationFrame(() => Xo()?.focus());
                        return;
                      }
                      En(w);
                    }
                  },
                }),
            ],
          });
          return (
            d && t && (S = (0, sc.createPortal)(S, d)),
            (0, ot.jsxs)(ot.Fragment, { children: [S, y] })
          );
        },
        [l, u, i, s.id, t, d]
      )),
      (s = { ...s, ref: a }),
      s
    );
  }),
  rC = U(function (t) {
    let n = cc(t);
    return J(Mh, n);
  });
function Si(e, ...t) {
  if (!e) return !1;
  let n = e.getAttribute("data-backdrop");
  return n == null ? !1 : n === "" || n === "true" || !t.length ? !0 : t.some((r) => n === r);
}
var Dl = new WeakMap();
function Ah(e, t, n) {
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
function dr(e, t, n) {
  let r = Dl.get(e);
  r || ((r = new Map()), Dl.set(e, r));
  let o = r.get(t) ?? [],
    i = { cleanup: n(), disposed: !1 };
  return (
    o.length || r.set(t, o),
    o.push(i),
    () => {
      o.includes(i) && ((i.disposed = !0), Ah(r, t, o));
    }
  );
}
function Zr(e, t, n) {
  return dr(e, t, () => {
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
  return dr(e, t, () => {
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
function pr(e, t) {
  return e
    ? dr(e, "style", () => {
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
    ? dr(e, t, () => {
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
function uc(e, t) {
  if (!t) return !1;
  if (t.get(e)?.has("ancestorMark")) return !0;
  do {
    if (t.get(e)?.has("mark")) return !0;
    if (!e.parentElement) return !1;
    e = e.parentElement;
  } while (!0);
}
var wi = new WeakMap();
function hr(e = "", t = "outside") {
  return `__ariakit-dialog-${t}${e ? `-${e}` : ""}`;
}
function Al(e, t = "") {
  return Ee(Xt(e, hr(), !0), Xt(e, hr(t), !0));
}
function Ei(e, t = "") {
  return Ee(Xt(e, hr("", "ancestor"), !0), Xt(e, hr(t, "ancestor"), !0));
}
function ac(e, t) {
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
function Wn(e, t) {
  let n = hr(t, "ancestor");
  if (e[n]) return !0;
  let r = hr(t);
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
  Si(t, ...r) || to({ walk: e, element: t, kind: "mark", setup: () => Al(t, n) });
}
function Ri({ walk: e, ancestor: t, element: n, id: r }) {
  (n.hasAttribute("data-dialog") && n.id !== r) ||
    to({ walk: e, element: t, kind: "ancestorMark", setup: () => Ei(t, r) });
}
function no(e) {
  for (let t of e.values()) for (let n of t.values()) n();
  e.clear();
}
function lc(e) {
  return `__ariakit-dialog-snapshot-${e}`;
}
function fc(e, t) {
  let n = lc(e),
    r = [];
  for (let o of t) r.push(Xt(o, n, !0));
  return () => {
    for (let o of r) o();
  };
}
var kh = ["SCRIPT", "STYLE"];
function Th(e, t) {
  let n = ue(t),
    r = lc(e);
  if (!n.body[r]) return !0;
  do {
    if (t === n.body) return !1;
    if (t[r]) return !0;
    if (!t.parentElement) return !1;
    t = t.parentElement;
  } while (!0);
}
function Oh(e, t, n) {
  return kh.includes(t.tagName) || !Th(e, t) ? !1 : !n.some((r) => r && we(t, r));
}
function ro(e, t, n, r) {
  for (let o of t) {
    if (!o?.isConnected) continue;
    let i = t.some((a) => (!a || a === o ? !1 : a.contains(o))),
      s = ue(o),
      c = o;
    for (; o.parentElement && o !== s.body;) {
      if ((r?.(o.parentElement, c), !i))
        for (let a of o.parentElement.children) Oh(e, a, t) && n(a, c);
      o = o.parentElement;
    }
  }
}
function kl(e, t) {
  let { body: n } = ue(t[0]),
    r = [];
  return (
    ro(e, t, (o) => {
      r.push(o);
    }),
    Ee(Xt(n, lc(e), !0), fc(e, r))
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
var Lh = "div",
  yC = Z(function (t) {
    return t;
  }),
  gr = U(function (t) {
    return J(Lh, t);
  });
Object.assign(
  gr,
  Ol.reduce(
    (e, t) => (
      (e[t] = U(function (r) {
        return J(t, r);
      })),
      e
    ),
    {}
  )
);
var Ai = B(oe(), 1),
  Di = B(de(), 1);
function Ll({ store: e, backdrop: t, backdropRef: n, alwaysVisible: r, hidden: o }) {
  let i = (0, Ai.useRef)(null),
    s = dl({ disclosure: e }),
    c = K(e, "contentElement");
  ($(() => {
    let l = i.current,
      f = c;
    l && f && (l.style.zIndex = getComputedStyle(f).zIndex);
  }, [c]),
    $(() => {
      let l = c?.id;
      if (!l) return;
      let f = i.current;
      if (f) return Ei(f, l);
    }, [c]));
  let a = qr({
    ref: ae(i, n),
    store: s,
    role: "presentation",
    "data-backdrop": c?.id || "",
    alwaysVisible: r,
    ...(o != null && { hidden: o }),
    style: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 },
  });
  return t
    ? (0, Ai.isValidElement)(t)
      ? (0, Di.jsx)(gr, { ...a, render: t })
      : (0, Di.jsx)(gr, { ...a, render: (0, Di.jsx)(typeof t != "boolean" ? t : "div", {}) })
    : null;
}
function ki(e = {}) {
  return vi(e);
}
function mc(e, t, n) {
  return Ys(e, t, n);
}
function dc(e = {}) {
  let [t, n] = ct(ki, e);
  return mc(t, n, e);
}
function Bn(e, ...t) {
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
function Hl(e, ...t) {
  if (!e) return !1;
  let n = e.getAttribute("data-focus-trap");
  return n == null ? !1 : t.length ? (n === "" ? !1 : t.some((r) => n === r)) : !0;
}
function pc(e, t) {
  if (!("style" in e)) return Ft;
  if (oo()) return Xt(e, "inert", !0);
  let n = Yo(e, !0).map((r) => {
    if (t?.some((i) => i && we(i, r))) return Ft;
    let o = dr(
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
  return Ee(...n, Fl(e), pr(e, { pointerEvents: "none", userSelect: "none", cursor: "default" }));
}
function Hh({ walk: e, element: t, elements: n, ids: r }) {
  Si(t, ...r) ||
    Hl(t, ...r) ||
    Bn(t, ...r) ||
    to({ walk: e, element: t, kind: "disable", setup: () => pc(t, n) });
}
function Vh(e, t, n) {
  t.hasAttribute("role") &&
    (n.some((r) => r && we(r, t)) ||
      to({ walk: e, element: t, kind: "role", setup: () => Zr(t, "role", "none") }));
}
function Vl(e, t, n) {
  n && !oo() && no(n);
  let r = Ii(n),
    o = t.map((i) => i?.id);
  return (
    ro(
      e,
      t,
      (i) => {
        (Mi({ walk: r, element: i, id: e, ids: o }),
          Hh({ walk: r, element: i, elements: t, ids: o }));
      },
      (i, s) => {
        (Ri({ walk: r, ancestor: i, element: s, id: e }), Vh(r, i, t));
      }
    ),
    Pi(r)
  );
}
var Ti = B(oe(), 1);
function hc(e) {
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
function gc(e, t) {
  let n = e.composedPath().filter(ze);
  !n.length && ze(e.target) && n.push(e.target);
  let r = n[0];
  if (r) for (let i of hc(r).slice(1)) n.includes(i) || n.push(i);
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
          r.current = gc(i, n);
        },
        !0,
        t
      );
    }, [e, t, n]),
    r
  );
}
var Oi = B(oe(), 1);
function Bl(e) {
  let t = hc(e).at(-1);
  return Be(t ?? e);
}
function Wl(e) {
  return e.isConnected;
}
function Nh(e, t) {
  if (!e) return !1;
  if (we(e, t)) return !0;
  let n = t.getAttribute("aria-activedescendant");
  if (n) {
    let r = ue(t).getElementById(n);
    if (r) return we(e, r);
  }
  return !1;
}
function Wh(e, t) {
  if (!("clientY" in e)) return !1;
  let n = t.getBoundingClientRect();
  return n.width === 0 || n.height === 0
    ? !1
    : n.top <= e.clientY &&
        e.clientY <= n.top + n.height &&
        n.left <= e.clientX &&
        e.clientX <= n.left + n.width;
}
function Bh(e, t, n) {
  return we(t, e) || Nh(n, e) || e.hasAttribute("data-focus-trap") || Bn(e, t.id) ? !0 : eo(e, t);
}
function zl(e, t, n) {
  return e.elements.some((r) => Bh(r, t, n));
}
function bc({
  store: e,
  type: t,
  listener: n,
  capture: r,
  open: o,
  contentElement: i,
  focusedRef: s,
}) {
  let c = q(n);
  (0, Oi.useEffect)(() => {
    if (!o) return;
    let a = (l) => {
        let { contentElement: f, disclosureElement: d } = e.getState();
        if (!f) return;
        let h = gc(l, f),
          m = h.elements[0],
          b = h.rootTarget;
        if (!ze(b) || (m && !Wl(m)) || !Wl(b) || zl(h, f, d)) return;
        let v = ue(f);
        if (ue(b) !== v) {
          c(l);
          return;
        }
        (ue(m ?? b) === v && Wh(l, f)) || (s.current && !Wn(b, f.id)) || c(l);
      },
      u = i ? Bl(i) : void 0;
    return Ae(t, a, r, u);
  }, [o, r, e, t, c, i, s]);
}
function vc(e, t) {
  return typeof e == "function" ? e(t) : !!e;
}
function Kl({
  store: e,
  hideOnInteractOutside: t,
  domReady: n,
  interactedOutsideRef: r,
  focusedStoreRef: o,
}) {
  let i = K(e, "open"),
    s = K(e, "contentElement"),
    c = s ? Bl(s) : void 0,
    a = Nl(i, c, s),
    u = (0, Oi.useRef)(!1);
  $(() => {
    if (!i || !n || !s) return;
    u.current = !1;
    let d = () => {
      ((u.current = !0), (o.current = e));
    };
    return (s.addEventListener("focusin", d, !0), () => s.removeEventListener("focusin", d, !0));
  }, [i, n, s, e, o]);
  let l = { store: e, capture: !0, open: i, contentElement: s, focusedRef: u },
    f = () => {
      (e.hide(), e.getState().open && (r.current = !1));
    };
  (bc({
    ...l,
    type: "click",
    listener: (d) => {
      let { contentElement: h, disclosureElement: m } = e.getState(),
        b = a.current;
      if (!b || !h || zl(b, h, m)) return;
      let v = b.rootTarget;
      ze(v) && ((ue(v) === ue(h) && !Wn(v, h.id)) || (vc(t, d) && ((r.current = !0), f())));
    },
  }),
    bc({
      ...l,
      type: "focusin",
      listener: (d) => {
        let { contentElement: h } = e.getState();
        if (!h || d.target === ue(h) || !vc(t, d)) return;
        let m = d.target;
        (ze(m) && ue(m) !== ue(h) && (r.current = !0), f());
      },
    }),
    bc({
      ...l,
      type: "contextmenu",
      listener: (d) => {
        vc(t, d) && ((r.current = !0), f());
      },
    }));
}
var Wt = B(oe(), 1),
  jl = B(de(), 1);
var _l = (0, Wt.createContext)({});
function ql(e) {
  let t = (0, Wt.useContext)(_l),
    [n, r] = (0, Wt.useState)([]),
    o = (0, Wt.useCallback)(
      (s) => (
        r((c) => [...c, s]),
        Ee(t.add?.(s), () => {
          r((c) => c.filter((a) => a !== s));
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
      (s) => (0, jl.jsx)(_l.Provider, { value: i, children: s }),
      [i]
    ),
    nestedDialogs: n,
  };
}
var Ul = B(oe(), 1),
  $l = B(To(), 1);
function Gl({ attribute: e, contentId: t, contentElement: n, enabled: r }) {
  let [o, i] = or(),
    s = (0, Ul.useCallback)(() => {
      if (!r || !n) return !1;
      let { body: c } = ue(n),
        a = c.getAttribute(e);
      return !a || a === t;
    }, [o, r, n, e, t]);
  return (
    $(() => {
      if (!r || !t || !n) return;
      let { body: c } = ue(n);
      if (s()) return (c.setAttribute(e, t), () => c.removeAttribute(e));
      let a = new MutationObserver(() => (0, $l.flushSync)(i));
      return (a.observe(c, { attributeFilter: [e] }), () => a.disconnect());
    }, [o, r, t, n, s, e, i]),
    s
  );
}
var Xl = B(oe(), 1),
  Jl = tr() && !Zu(),
  zh = Jl ? Xl.useEffect : $;
function Kh(e) {
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
  zh(() => {
    if (!r() || !e) return;
    let o = ue(e),
      i = Be(e),
      { documentElement: s, body: c } = o,
      a = s.style.getPropertyValue("--scrollbar-width"),
      u = a ? Number.parseInt(a, 10) : i.innerWidth - s.clientWidth,
      l = () => {
        let h = i.getComputedStyle(s),
          m = h.getPropertyValue("scrollbar-gutter"),
          b = m.includes("stable"),
          v = (y) => !y || y === "visible",
          R = !v(h.getPropertyValue("overflow-x")) || !v(h.getPropertyValue("overflow-y")),
          x = () => Ee(Qr(s, "overflow-x", "hidden"), Qr(s, "overflow-y", "hidden")),
          g = (y) => (R ? Ee(y, x()) : y);
        return !b && !u
          ? g(pr(c, { overflow: "hidden" }))
          : b || Kh(i)
            ? Ee(Qr(s, "scrollbar-gutter", b ? m : "stable"), x())
            : g(
                Ee(
                  Qr(s, "--scrollbar-width", `${u}px`),
                  pr(c, { overflow: "hidden", [Yl(s)]: `${u}px` })
                )
              );
      },
      f = () => {
        let { scrollX: h, scrollY: m, visualViewport: b } = i,
          v = b?.offsetLeft ?? 0,
          R = b?.offsetTop ?? 0,
          x = pr(c, {
            position: "fixed",
            overflow: "hidden",
            top: `${-(m - Math.floor(R))}px`,
            left: `${-(h - Math.floor(v))}px`,
            right: "0",
            [Yl(s)]: `${u}px`,
          });
        return () => {
          (x(), i.scrollTo({ left: h, top: m, behavior: "instant" }));
        };
      };
    if (Jl) return f();
    let d = l();
    return () => {
      queueMicrotask(d);
    };
  }, [r, e]);
}
var Pe = B(oe(), 1),
  tt = B(de(), 1);
var nf = new WeakSet();
function _h(e) {
  nf.add(e);
}
function yc(e) {
  return nf.has(e);
}
var br = new Map();
function jh(e, t = {}) {
  return (
    br.set(e, t),
    () => {
      br.delete(e);
    }
  );
}
function qh(e) {
  let t = [];
  for (let n of br.keys()) {
    if (n === e) break;
    let { current: r } = n;
    r?.isConnected && ((e.current && we(r, e.current)) || t.push(r));
  }
  return t;
}
function Uh(e) {
  let t = !1;
  for (let [n, r] of br) {
    if (n === e) {
      t = !0;
      continue;
    }
    t && r.onEarlierDialogElementChange?.();
  }
}
function $h(e) {
  let t = e.current;
  if (!t || !Wn(t)) return !1;
  let n = br.get(e)?.getOutsideCleanups?.(),
    r = !1,
    o = !1;
  for (let [i, s] of br) {
    if (i === e) {
      r = !0;
      continue;
    }
    let c = i.current;
    if (c && uc(t, s.getOutsideCleanups?.())) {
      if (r || !uc(c, n)) return !0;
      o = !0;
    }
  }
  return !(r && o);
}
var Gh = "div",
  Yh = nr(),
  xc = new WeakSet(),
  Ql = new WeakSet();
function Xh(e) {
  let t = Je(e);
  return !t || (e && we(e, t)) || Bn(t, e?.id) ? !1 : !!Ke(t);
}
function Jh(e) {
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
function Zh(e) {
  let t = e.querySelectorAll("[data-dialog-dismiss]");
  for (let n of t) if (n.closest("[data-dialog]") === e) return !0;
  return !1;
}
function tf(e, t = !1) {
  if (!e) return null;
  let n = "current" in e ? e.current : e;
  return n ? (t ? (Ke(n) ? n : null) : n) : null;
}
function Qh(e) {
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
    let c = t.getElementById(s);
    !c || !we(c, i) || xc.has(c) || r.push(c);
  }
  return r;
}
var Cc = Z(function ({
  store: t,
  open: n,
  onClose: r,
  focusable: o = !0,
  modal: i = !0,
  portal: s = i,
  backdrop: c = i,
  hideOnEscape: a = !0,
  hideOnInteractOutside: u = !0,
  getPersistentElements: l,
  preventBodyScroll: f = i,
  autoFocusOnShow: d = !0,
  autoFocusOnHide: h = !0,
  initialFocus: m,
  finalFocus: b,
  unmountOnHide: v,
  unstable_treeSnapshotKey: R,
  ...x
}) {
  let g = Vn(),
    y = (0, Pe.useRef)(null),
    S = (0, Pe.useRef)(null),
    T = i && s && !x.portalElement,
    w = (0, Pe.useRef)(!1),
    V = q(() => {
      let k = y.current;
      if (!k) return !0;
      let Q = new Event("close", { bubbles: !1, cancelable: !0 });
      return (
        r && k.addEventListener("close", r, { once: !0 }),
        k.dispatchEvent(Q),
        !Q.defaultPrevented
      );
    }),
    p = dc({
      store: t || g,
      open: n,
      setOpen(k) {
        k || w.current || V() || p.setOpen(!0);
      },
    });
  $(
    () =>
      p.unstable_onHideRequest((k) => {
        if (!w.current) {
          w.current = !0;
          try {
            if (!V()) return;
            k();
          } finally {
            w.current = !1;
          }
        }
      }),
    [p, V]
  );
  let { portalRef: I, portalNode: M, domReady: C } = ir(s, x.portalRef),
    P = x.preserveTabOrder,
    E = K(p, ["mounted"], (k) => P && !i && k.mounted),
    D = Oe(x.id),
    H = K(p, "open"),
    A = K(p, "mounted"),
    F = K(p, "contentElement"),
    j = an(A, x.hidden, x.alwaysVisible);
  Zl(F, D, f && !j);
  let te = (0, Pe.useRef)(!1),
    O = (0, Pe.useRef)(null);
  ($(
    () =>
      me(p, ["open"], (k) => {
        if (!k.open) {
          O.current = null;
          return;
        }
        ((te.current = !1), O.current !== p && (O.current = null));
      }),
    [p]
  ),
    Kl({
      store: p,
      hideOnInteractOutside: u,
      domReady: C,
      interactedOutsideRef: te,
      focusedStoreRef: O,
    }));
  let { wrapElement: G, nestedDialogs: se } = ql(p);
  x = ge(x, G, [G]);
  let _ = (0, Pe.useRef)(null);
  (Yh &&
    (0, Pe.useEffect)(() => {
      if (!C) return;
      let k = y.current;
      if (!k) return;
      let Q = ue(k),
        re = (X) => {
          _.current = X.target;
        };
      return (
        Q.addEventListener("mousedown", re, !0),
        () => {
          Q.removeEventListener("mousedown", re, !0);
        }
      );
    }, [C]),
    $(() => {
      if (!H || O.current === p) return;
      let k = y.current;
      if (
        (() => {
          let { disclosureElement: ie } = p.getState();
          return !(!ie || yc(ie) || !ie.isConnected || (k && we(k, ie)));
        })()
      )
        return;
      let re = (ie) => {
          (_h(ie), p.setDisclosureElement(ie));
        },
        X = Je(k, { activeDescendant: !0 });
      if (X) {
        if (X.tagName === "BODY") {
          let ie = _.current;
          if (((_.current = null), !ie?.isConnected || !Ke(ie) || (k && we(k, ie)))) return;
          re(ie);
          return;
        }
        (k && we(k, X)) || re(X);
      }
    }, [p, H]),
    (0, Pe.useEffect)(() => {
      if (!A || !C) return;
      let k = y.current;
      if (!k) return;
      let Q = Be(k),
        re = Q.visualViewport || Q,
        X = () => {
          let ie = Q.visualViewport?.height ?? Q.innerHeight;
          k.style.setProperty("--dialog-viewport-height", `${ie}px`);
        };
      return (
        X(),
        re.addEventListener("resize", X),
        () => {
          re.removeEventListener("resize", X);
        }
      );
    }, [A, C]));
  let [be, De] = (0, Pe.useState)(!1);
  ($(() => {
    if (!(i && H && C) || !F) {
      De(!1);
      return;
    }
    let k = () => {
      De(!Zh(F));
    };
    k();
    let { MutationObserver: Q } = Be(F),
      re = new Q(k);
    return (re.observe(F, { childList: !0, subtree: !0 }), () => re.disconnect());
  }, [i, H, C, F]),
    $(() => {
      if (!oo() || H || !A || !C) return;
      let k = y.current;
      if (k) return pc(k);
    }, [H, A, C]));
  let N = H && C,
    L = (0, Pe.useRef)(null);
  $(() => {
    if (!D || !T || !N || !M) {
      L.current = null;
      return;
    }
    let k = y.current;
    if (!k || !we(M, k)) {
      L.current = null;
      return;
    }
    return (
      L.current?.portal !== M && (L.current = { portal: M, peers: Qh(k) }),
      xc.add(M),
      () => {
        xc.delete(M);
      }
    );
  }, [D, N, T, M]);
  let he = !!N,
    [xe, ke] = (0, Pe.useState)(0);
  $(() => {
    if (he)
      return jh(y, {
        getOutsideCleanups: () => Ve.current?.outsideCleanups,
        onEarlierDialogElementChange: () => {
          ke((k) => k + 1);
        },
      });
  }, [he]);
  let Me = (0, Pe.useRef)(null);
  ($(() => {
    if (!he) {
      Me.current = null;
      return;
    }
    if (!F) return;
    let k = Me.current;
    ((Me.current = F), k && k !== F && Uh(y));
  }, [he, F]),
    $(() => {
      if (!D || !N) return;
      let k = y.current;
      return kl(D, [k]);
    }, [D, N, R]),
    $(() => {
      if (!D || !N) return;
      let k = qh(y);
      return fc(D, k);
    }, [D, N, xe]));
  let Re = q(l),
    Ve = (0, Pe.useRef)(null);
  ($(
    () => () => {
      let k = Ve.current;
      k && ((Ve.current = null), k.restoreInsideMarks(), no(k.outsideCleanups));
    },
    [D, p, N, F, i, T, Re, R]
  ),
    $(() => {
      if (!D || !N) return;
      let { disclosureElement: k } = p.getState(),
        Q = F ?? y.current;
      if (!Q) return;
      let re = [
          Q,
          ...(Re() || []),
          ...(L.current?.peers || []),
          ...se.map((lt) => lt.getState().contentElement),
        ],
        X = Ve.current;
      X?.restoreInsideMarks();
      let ie = ac(Q, re),
        Fe = i ? Vl(D, re, X?.outsideCleanups) : Tl(D, [k, ...re], X?.outsideCleanups);
      Ve.current = { restoreInsideMarks: ie, outsideCleanups: Fe };
    }, [D, p, N, F, i, T, Re, se, R, xe]));
  let je = !!d,
    Ne = pe(d),
    [At, We] = (0, Pe.useState)(!1);
  (0, Pe.useEffect)(() => {
    if (!H || !je || !C || !F?.isConnected) return;
    let k =
        tf(m, !0) || F.querySelector("[data-autofocus=true],[autofocus]") || Lo(F, !0, s && E) || F,
      Q = Ke(k);
    Ne(Q ? k : null) &&
      (We(!0),
      queueMicrotask(() => {
        let { open: re, disclosureElement: X } = p.getState();
        if (!re) return;
        let ie = Je(F, { frame: !1 }),
          Fe = ie && Jh(ie);
        (O.current === p && ie && Fe && Ke(Fe) && !ef(ie, F, X) && !ef(Fe, F, X)) ||
          (Ke(k) && k.scrollIntoView({ block: "nearest", inline: "nearest" }),
          k.focus({ preventScroll: !0 }));
      }));
  }, [H, je, C, F, m, s, E, p, Ne, O]);
  let ht = !!h,
    kt = pe(h),
    [Qe, Tt] = (0, Pe.useState)(!1);
  $(() => {
    if (H) return (Tt(!0), () => Tt(!1));
  }, [H]);
  let gt = (0, Pe.useCallback)(
      (k, Q = !0) => {
        if (te.current) return;
        let { disclosureElement: re } = p.getState();
        if (Xh(k)) return;
        let X = tf(b) || re;
        if (X?.id) {
          let Fe = ue(X),
            lt = `[aria-activedescendant="${X.id}"]`,
            xt = Fe.querySelector(lt);
          xt && (X = xt);
        }
        if (X && !Ke(X)) {
          let Fe = X.closest("[data-dialog]");
          if (Fe?.id) {
            let lt = ue(Fe),
              xt = `[aria-controls~="${Fe.id}"]`,
              ft = lt.querySelector(xt);
            ft && (X = ft);
          }
        }
        let ie = X && Ke(X);
        if (!ie && Q) {
          requestAnimationFrame(() => gt(k, !1));
          return;
        }
        kt(ie ? X : null) && ie && X?.focus();
      },
      [p, b, kt]
    ),
    bt = (0, Pe.useRef)(!1);
  ($(() => {
    if (H || !Qe || !ht) return;
    let k = y.current;
    ((bt.current = !0), gt(k));
  }, [H, Qe, C, ht, gt]),
    (0, Pe.useEffect)(() => {
      if (!Qe || !ht) return;
      let k = y.current;
      return () => {
        if (bt.current) {
          bt.current = !1;
          return;
        }
        gt(k);
      };
    }, [Qe, ht, gt]));
  let _t = pe(a),
    [Xe] = (0, Pe.useState)(() => new WeakMap()),
    [Ot] = (0, Pe.useState)(() => new WeakMap()),
    Xn = x.onKeyDown,
    Jn = x.onKeyDownCapture,
    Y = x.onFocusCapture,
    ce = q((k) => {
      if ((Y?.(k), !p.getState().open)) return;
      let Q = k.target;
      Or(Q) && we(k.currentTarget, Q) && (O.current = p);
    }),
    Ce = q((k) => {
      if (k.key !== "Escape" || !k.bubbles) return !1;
      let Q = Xe.get(k);
      if (Q) return k.defaultPrevented && !Q.defaultPrevented ? !1 : Q.accepted;
      if (k.defaultPrevented) return !1;
      let re = y.current;
      if (!A || !re) return !1;
      let X = hi(k),
        ie = Ot.get(X);
      return (
        ie || ((ie = { accepted: !$h(y) && !Ql.has(X) && _t(k), hidden: !1 }), Ot.set(X, ie)),
        Xe.set(k, { accepted: ie.accepted, defaultPrevented: k.defaultPrevented }),
        ie.accepted
      );
    }),
    Le = q((k) => {
      let Q = Ce(k);
      if ((Xe.delete(k), !Q)) return !1;
      let re = hi(k),
        X = Ot.get(re);
      return (X?.hidden || (X && (X.hidden = !0), Ql.add(re), p.hide()), !0);
    }),
    Ue = q((k) => {
      let Q = k.nativeEvent,
        re = Q.cancelBubble;
      if ((Xn?.(k), re)) {
        Xe.delete(Q);
        return;
      }
      Le(Q) && k.stopPropagation();
    }),
    Ct = q((k) => {
      let Q = k.nativeEvent,
        re = Q.cancelBubble;
      if ((Jn?.(k), re)) {
        Xe.delete(Q);
        return;
      }
      Ce(Q) && (k.isPropagationStopped() || Q.cancelBubble) && Le(Q);
    });
  ((0, Pe.useEffect)(() => {
    if (!C || !A) return;
    let k = (X) => {
        if (X.key !== "Escape" || !X.bubbles) return;
        if (X.cancelBubble) {
          Xe.delete(X);
          return;
        }
        if (Xe.has(X)) return;
        let ie = y.current;
        if (!ie) return;
        let Fe = [X.target, X.composedPath()[0]].filter(Or),
          { disclosureElement: lt } = p.getState(),
          xt = (ft) =>
            !!(
              (ze(ft) && ft.tagName === "BODY") ||
              we(ie, ft) ||
              !lt ||
              we(lt, ft) ||
              (ze(ft) && Wn(ft, ie.id)) ||
              (ze(ft) && Bn(ft, ie.id))
            );
        Fe.some(xt) && Ce(X) && X.cancelBubble && Le(X);
      },
      Q = (X) => {
        if (Xe.has(X)) {
          if (X.cancelBubble) {
            Xe.delete(X);
            return;
          }
          Le(X) && X.stopPropagation();
        }
      },
      re = F ? Be(F) : void 0;
    return Ee(Ae("keydown", k, !0, re), Ae("keydown", Q, !1, re));
  }, [p, C, A, F, Le, Ce, Xe]),
    (x = ge(x, (k) => (0, tt.jsx)(El, { level: i ? 1 : void 0, children: k }), [i])));
  let pn = x.hidden,
    tn = x.alwaysVisible;
  ((x = ge(
    x,
    (k) =>
      (0, tt.jsxs)(tt.Fragment, {
        children: [
          be &&
            (0, tt.jsx)("button", {
              type: "button",
              tabIndex: -1,
              "data-dialog-hidden-dismiss": D || "",
              style: rc(),
              onClick: p.hide,
              children: "Dismiss popup",
            }),
          k,
        ],
      }),
    [be, D, p]
  )),
    (x = ge(
      x,
      (k) =>
        (0, tt.jsxs)(tt.Fragment, {
          children: [
            !!c &&
              (0, tt.jsx)(Ll, {
                store: p,
                backdrop: c,
                backdropRef: S,
                hidden: pn,
                alwaysVisible: tn,
              }),
            k,
          ],
        }),
      [p, c, pn, tn]
    )));
  let [Zn, vt] = (0, Pe.useState)(),
    [hn, z] = (0, Pe.useState)();
  return (
    (x = ge(
      x,
      (k) =>
        (0, tt.jsx)(fr, {
          value: p,
          children: (0, tt.jsx)(bi.Provider, {
            value: vt,
            children: (0, tt.jsx)(ul.Provider, { value: z, children: k }),
          }),
        }),
      [p]
    )),
    (x = {
      "data-dialog": "",
      role: "dialog",
      tabIndex: o ? -1 : void 0,
      "aria-labelledby": x["aria-label"] != null ? void 0 : Zn,
      "aria-describedby": hn,
      ...x,
      "data-dialog-portal": T ? M?.id : void 0,
      id: D,
      ref: ae(y, x.ref),
      onFocusCapture: ce,
      onKeyDown: Ue,
      onKeyDownCapture: Ct,
    }),
    (x = tc({ ...x, autoFocusOnShow: At })),
    (x = qr({ store: p, ...x, unstable_otherElementRef: S })),
    (x = cn({ ...x, focusable: o })),
    (x = cc({ portal: s, ...x, portalRef: I, preserveTabOrder: E })),
    x
  );
});
function zn(e, t = Vn) {
  return U(function (r) {
    let o = t(),
      i = r.store || o;
    return K(i, ["mounted"], (s) => !r.unmountOnHide || s?.mounted || !!r.open)
      ? (0, tt.jsx)(e, { ...r })
      : null;
  });
}
var rf = zn(
    U(function (t) {
      let n = Cc(t);
      return J(Gh, n);
    }),
    Vn
  ),
  eg = U(function (t) {
    let n = dc({ open: t.open });
    return (0, tt.jsx)(rf, { ...t, store: n });
  }),
  NS = U(function (t) {
    let n = Vn();
    return t.store || n || !t.unmountOnHide ? (0, tt.jsx)(rf, { ...t }) : (0, tt.jsx)(eg, { ...t });
  });
function vr(e) {
  return e.split("-")[0];
}
var Nf = B(oe(), 1),
  Ic = B(de(), 1);
var Pt = Math.min,
  at = Math.max,
  so = Math.round,
  co = Math.floor,
  ln = (e) => ({ x: e, y: e }),
  tg = { left: "right", right: "left", bottom: "top", top: "bottom" },
  ng = { start: "end", end: "start" };
function Fi(e, t, n) {
  return at(e, Pt(t, n));
}
function fn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jt(e) {
  return e.split("-")[0];
}
function Kn(e) {
  return e.split("-")[1];
}
function Hi(e) {
  return e === "x" ? "y" : "x";
}
function Vi(e) {
  return e === "y" ? "height" : "width";
}
function mn(e) {
  return ["top", "bottom"].includes(Jt(e)) ? "y" : "x";
}
function Ni(e) {
  return Hi(mn(e));
}
function of(e, t, n) {
  n === void 0 && (n = !1);
  let r = Kn(e),
    o = Ni(e),
    i = Vi(o),
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
  return e.replace(/start|end/g, (t) => ng[t]);
}
function rg(e, t, n) {
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
function cf(e, t, n, r) {
  let o = Kn(e),
    i = rg(Jt(e), n === "start", r);
  return (o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Li)))), i);
}
function io(e) {
  return e.replace(/left|right|bottom|top/g, (t) => tg[t]);
}
function og(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Sc(e) {
  return typeof e != "number" ? og(e) : { top: e, right: e, bottom: e, left: e };
}
function _n(e) {
  let { x: t, y: n, width: r, height: o } = e;
  return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function uf(e, t, n) {
  let { reference: r, floating: o } = e,
    i = mn(t),
    s = Ni(t),
    c = Vi(s),
    a = Jt(t),
    u = i === "y",
    l = r.x + r.width / 2 - o.width / 2,
    f = r.y + r.height / 2 - o.height / 2,
    d = r[c] / 2 - o[c] / 2,
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
  switch (Kn(t)) {
    case "start":
      h[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      h[s] += d * (n && u ? -1 : 1);
      break;
  }
  return h;
}
var af = async (e, t, n) => {
  let { placement: r = "bottom", strategy: o = "absolute", middleware: i = [], platform: s } = n,
    c = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t)),
    u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: l, y: f } = uf(u, r, a),
    d = r,
    h = {},
    m = 0;
  for (let b = 0; b < c.length; b++) {
    let { name: v, fn: R } = c[b],
      {
        x,
        y: g,
        data: y,
        reset: S,
      } = await R({
        x: l,
        y: f,
        initialPlacement: r,
        placement: d,
        strategy: o,
        middlewareData: h,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    ((l = x ?? l),
      (f = g ?? f),
      (h = { ...h, [v]: { ...h[v], ...y } }),
      S &&
        m <= 50 &&
        (m++,
        typeof S == "object" &&
          (S.placement && (d = S.placement),
          S.rects &&
            (u =
              S.rects === !0
                ? await s.getElementRects({ reference: e, floating: t, strategy: o })
                : S.rects),
          ({ x: l, y: f } = uf(u, d, a))),
        (b = -1)));
  }
  return { x: l, y: f, placement: d, strategy: o, middlewareData: h };
};
async function Wi(e, t) {
  var n;
  t === void 0 && (t = {});
  let { x: r, y: o, platform: i, rects: s, elements: c, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: l = "viewport",
      elementContext: f = "floating",
      altBoundary: d = !1,
      padding: h = 0,
    } = fn(t, e),
    m = Sc(h),
    v = c[d ? (f === "floating" ? "reference" : "floating") : f],
    R = _n(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n
            ? v
            : v.contextElement ||
              (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(c.floating))),
        boundary: u,
        rootBoundary: l,
        strategy: a,
      })
    ),
    x =
      f === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    g = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c.floating)),
    y = (await (i.isElement == null ? void 0 : i.isElement(g)))
      ? (await (i.getScale == null ? void 0 : i.getScale(g))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    S = _n(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: c,
            rect: x,
            offsetParent: g,
            strategy: a,
          })
        : x
    );
  return {
    top: (R.top - S.top + m.top) / y.y,
    bottom: (S.bottom - R.bottom + m.bottom) / y.y,
    left: (R.left - S.left + m.left) / y.x,
    right: (S.right - R.right + m.right) / y.x,
  };
}
var lf = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    let { x: n, y: r, placement: o, rects: i, platform: s, elements: c, middlewareData: a } = t,
      { element: u, padding: l = 0 } = fn(e, t) || {};
    if (u == null) return {};
    let f = Sc(l),
      d = { x: n, y: r },
      h = Ni(o),
      m = Vi(h),
      b = await s.getDimensions(u),
      v = h === "y",
      R = v ? "top" : "left",
      x = v ? "bottom" : "right",
      g = v ? "clientHeight" : "clientWidth",
      y = i.reference[m] + i.reference[h] - d[h] - i.floating[m],
      S = d[h] - i.reference[h],
      T = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u)),
      w = T ? T[g] : 0;
    (!w || !(await (s.isElement == null ? void 0 : s.isElement(T)))) &&
      (w = c.floating[g] || i.floating[m]);
    let V = y / 2 - S / 2,
      p = w / 2 - b[m] / 2 - 1,
      I = Pt(f[R], p),
      M = Pt(f[x], p),
      C = I,
      P = w - b[m] - M,
      E = w / 2 - b[m] / 2 + V,
      D = Fi(C, E, P),
      H =
        !a.arrow && Kn(o) != null && E !== D && i.reference[m] / 2 - (E < C ? I : M) - b[m] / 2 < 0,
      A = H ? (E < C ? E - C : E - P) : 0;
    return {
      [h]: d[h] + A,
      data: { [h]: D, centerOffset: E - D - A, ...(H && { alignmentOffset: A }) },
      reset: H,
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
            initialPlacement: c,
            platform: a,
            elements: u,
          } = t,
          {
            mainAxis: l = !0,
            crossAxis: f = !0,
            fallbackPlacements: d,
            fallbackStrategy: h = "bestFit",
            fallbackAxisSideDirection: m = "none",
            flipAlignment: b = !0,
            ...v
          } = fn(e, t);
        if ((n = i.arrow) != null && n.alignmentOffset) return {};
        let R = Jt(o),
          x = mn(c),
          g = Jt(c) === c,
          y = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
          S = d || (g || !b ? [io(c)] : sf(c)),
          T = m !== "none";
        !d && T && S.push(...cf(c, b, m, y));
        let w = [c, ...S],
          V = await Wi(t, v),
          p = [],
          I = ((r = i.flip) == null ? void 0 : r.overflows) || [];
        if ((l && p.push(V[R]), f)) {
          let E = of(o, s, y);
          p.push(V[E[0]], V[E[1]]);
        }
        if (((I = [...I, { placement: o, overflows: p }]), !p.every((E) => E <= 0))) {
          var M, C;
          let E = (((M = i.flip) == null ? void 0 : M.index) || 0) + 1,
            D = w[E];
          if (D) return { data: { index: E, overflows: I }, reset: { placement: D } };
          let H =
            (C = I.filter((A) => A.overflows[0] <= 0).sort(
              (A, F) => A.overflows[1] - F.overflows[1]
            )[0]) == null
              ? void 0
              : C.placement;
          if (!H)
            switch (h) {
              case "bestFit": {
                var P;
                let A =
                  (P = I.filter((F) => {
                    if (T) {
                      let j = mn(F.placement);
                      return j === x || j === "y";
                    }
                    return !0;
                  })
                    .map((F) => [
                      F.placement,
                      F.overflows.filter((j) => j > 0).reduce((j, te) => j + te, 0),
                    ])
                    .sort((F, j) => F[1] - j[1])[0]) == null
                    ? void 0
                    : P[0];
                A && (H = A);
                break;
              }
              case "initialPlacement":
                H = c;
                break;
            }
          if (o !== H) return { reset: { placement: H } };
        }
        return {};
      },
    }
  );
};
async function ig(e, t) {
  let { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = Jt(n),
    c = Kn(n),
    a = mn(n) === "y",
    u = ["left", "top"].includes(s) ? -1 : 1,
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
    c && typeof m == "number" && (h = c === "end" ? m * -1 : m),
    a ? { x: h * l, y: d * u } : { x: d * u, y: h * l }
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
          let { x: o, y: i, placement: s, middlewareData: c } = t,
            a = await ig(t, e);
          return s === ((n = c.offset) == null ? void 0 : n.placement) &&
            (r = c.arrow) != null &&
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
              limiter: c = {
                fn: (v) => {
                  let { x: R, y: x } = v;
                  return { x: R, y: x };
                },
              },
              ...a
            } = fn(e, t),
            u = { x: n, y: r },
            l = await Wi(t, a),
            f = mn(Jt(o)),
            d = Hi(f),
            h = u[d],
            m = u[f];
          if (i) {
            let v = d === "y" ? "top" : "left",
              R = d === "y" ? "bottom" : "right",
              x = h + l[v],
              g = h - l[R];
            h = Fi(x, h, g);
          }
          if (s) {
            let v = f === "y" ? "top" : "left",
              R = f === "y" ? "bottom" : "right",
              x = m + l[v],
              g = m - l[R];
            m = Fi(x, m, g);
          }
          let b = c.fn({ ...t, [d]: h, [f]: m });
          return { ...b, data: { x: b.x - n, y: b.y - r } };
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
            { offset: c = 0, mainAxis: a = !0, crossAxis: u = !0 } = fn(e, t),
            l = { x: n, y: r },
            f = mn(o),
            d = Hi(f),
            h = l[d],
            m = l[f],
            b = fn(c, t),
            v =
              typeof b == "number"
                ? { mainAxis: b, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...b };
          if (a) {
            let g = d === "y" ? "height" : "width",
              y = i.reference[d] - i.floating[g] + v.mainAxis,
              S = i.reference[d] + i.reference[g] - v.mainAxis;
            h < y ? (h = y) : h > S && (h = S);
          }
          if (u) {
            var R, x;
            let g = d === "y" ? "width" : "height",
              y = ["top", "left"].includes(Jt(o)),
              S =
                i.reference[f] -
                i.floating[g] +
                ((y && ((R = s.offset) == null ? void 0 : R[f])) || 0) +
                (y ? 0 : v.crossAxis),
              T =
                i.reference[f] +
                i.reference[g] +
                (y ? 0 : ((x = s.offset) == null ? void 0 : x[f]) || 0) -
                (y ? v.crossAxis : 0);
            m < S ? (m = S) : m > T && (m = T);
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
            { apply: s = () => {}, ...c } = fn(e, t),
            a = await Wi(t, c),
            u = Jt(n),
            l = Kn(n),
            f = mn(n) === "y",
            { width: d, height: h } = r.floating,
            m,
            b;
          u === "top" || u === "bottom"
            ? ((m = u),
              (b =
                l === ((await (o.isRTL == null ? void 0 : o.isRTL(i.floating))) ? "start" : "end")
                  ? "left"
                  : "right"))
            : ((b = u), (m = l === "end" ? "top" : "bottom"));
          let v = h - a.top - a.bottom,
            R = d - a.left - a.right,
            x = Pt(h - a[m], v),
            g = Pt(d - a[b], R),
            y = !t.middlewareData.shift,
            S = x,
            T = g;
          if ((f ? (T = l || y ? Pt(g, R) : R) : (S = l || y ? Pt(x, v) : v), y && !l)) {
            let V = at(a.left, 0),
              p = at(a.right, 0),
              I = at(a.top, 0),
              M = at(a.bottom, 0);
            f
              ? (T = d - 2 * (V !== 0 || p !== 0 ? V + p : at(a.left, a.right)))
              : (S = h - 2 * (I !== 0 || M !== 0 ? I + M : at(a.top, a.bottom)));
          }
          await s({ ...t, availableWidth: T, availableHeight: S });
          let w = await o.getDimensions(i.floating);
          return d !== w.width || h !== w.height ? { reset: { rects: !0 } } : {};
        },
      }
    );
  };
function jn(e) {
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
function Mt(e) {
  return e instanceof Element || e instanceof pt(e).Element;
}
function Bt(e) {
  return e instanceof HTMLElement || e instanceof pt(e).HTMLElement;
}
function gf(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof pt(e).ShadowRoot;
}
function yr(e) {
  let { overflow: t, overflowX: n, overflowY: r, display: o } = Rt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function vf(e) {
  return ["table", "td", "th"].includes(jn(e));
}
function uo(e) {
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
    n = Mt(e) ? Rt(e) : e;
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
  for (; Bt(t) && !qn(t);) {
    if (Bi(t)) return t;
    if (uo(t)) return null;
    t = dn(t);
  }
  return null;
}
function zi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function qn(e) {
  return ["html", "body", "#document"].includes(jn(e));
}
function Rt(e) {
  return pt(e).getComputedStyle(e);
}
function ao(e) {
  return Mt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function dn(e) {
  if (jn(e) === "html") return e;
  let t = e.assignedSlot || e.parentNode || (gf(e) && e.host) || Zt(e);
  return gf(t) ? t.host : t;
}
function yf(e) {
  let t = dn(e);
  return qn(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Bt(t) && yr(t) ? t : yf(t);
}
function xr(e, t, n) {
  var r;
  (t === void 0 && (t = []), n === void 0 && (n = !0));
  let o = yf(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = pt(o);
  return i
    ? t.concat(
        s,
        s.visualViewport || [],
        yr(o) ? o : [],
        s.frameElement && n ? xr(s.frameElement) : []
      )
    : t.concat(o, xr(o, [], n));
}
function wf(e) {
  let t = Rt(e),
    n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0,
    o = Bt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    c = so(n) !== i || so(r) !== s;
  return (c && ((n = i), (r = s)), { width: n, height: r, $: c });
}
function Ec(e) {
  return Mt(e) ? e : e.contextElement;
}
function Cr(e) {
  let t = Ec(e);
  if (!Bt(t)) return ln(1);
  let n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = wf(t),
    s = (i ? so(n.width) : n.width) / r,
    c = (i ? so(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    { x: s, y: c }
  );
}
var sg = ln(0);
function Ef(e) {
  let t = pt(e);
  return !zi() || !t.visualViewport
    ? sg
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function cg(e, t, n) {
  return (t === void 0 && (t = !1), !n || (t && n !== pt(e)) ? !1 : t);
}
function Un(e, t, n, r) {
  (t === void 0 && (t = !1), n === void 0 && (n = !1));
  let o = e.getBoundingClientRect(),
    i = Ec(e),
    s = ln(1);
  t && (r ? Mt(r) && (s = Cr(r)) : (s = Cr(e)));
  let c = cg(i, n, r) ? Ef(i) : ln(0),
    a = (o.left + c.x) / s.x,
    u = (o.top + c.y) / s.y,
    l = o.width / s.x,
    f = o.height / s.y;
  if (i) {
    let d = pt(i),
      h = r && Mt(r) ? pt(r) : r,
      m = d,
      b = m.frameElement;
    for (; b && r && h !== m;) {
      let v = Cr(b),
        R = b.getBoundingClientRect(),
        x = Rt(b),
        g = R.left + (b.clientLeft + parseFloat(x.paddingLeft)) * v.x,
        y = R.top + (b.clientTop + parseFloat(x.paddingTop)) * v.y;
      ((a *= v.x),
        (u *= v.y),
        (l *= v.x),
        (f *= v.y),
        (a += g),
        (u += y),
        (m = pt(b)),
        (b = m.frameElement));
    }
  }
  return _n({ width: l, height: f, x: a, y: u });
}
function ug(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e,
    i = o === "fixed",
    s = Zt(r),
    c = t ? uo(t.floating) : !1;
  if (r === s || (c && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = ln(1),
    l = ln(0),
    f = Bt(r);
  if ((f || (!f && !i)) && ((jn(r) !== "body" || yr(s)) && (a = ao(r)), Bt(r))) {
    let d = Un(r);
    ((u = Cr(r)), (l.x = d.x + r.clientLeft), (l.y = d.y + r.clientTop));
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + l.x,
    y: n.y * u.y - a.scrollTop * u.y + l.y,
  };
}
function ag(e) {
  return Array.from(e.getClientRects());
}
function If(e) {
  return Un(Zt(e)).left + ao(e).scrollLeft;
}
function lg(e) {
  let t = Zt(e),
    n = ao(e),
    r = e.ownerDocument.body,
    o = at(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = at(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
    s = -n.scrollLeft + If(e),
    c = -n.scrollTop;
  return (
    Rt(r).direction === "rtl" && (s += at(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: c }
  );
}
function fg(e, t) {
  let n = pt(e),
    r = Zt(e),
    o = n.visualViewport,
    i = r.clientWidth,
    s = r.clientHeight,
    c = 0,
    a = 0;
  if (o) {
    ((i = o.width), (s = o.height));
    let u = zi();
    (!u || (u && t === "fixed")) && ((c = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: c, y: a };
}
function mg(e, t) {
  let n = Un(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Bt(e) ? Cr(e) : ln(1),
    s = e.clientWidth * i.x,
    c = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: c, x: a, y: u };
}
function Cf(e, t, n) {
  let r;
  if (t === "viewport") r = fg(e, n);
  else if (t === "document") r = lg(Zt(e));
  else if (Mt(t)) r = mg(t, n);
  else {
    let o = Ef(e);
    r = { ...t, x: t.x - o.x, y: t.y - o.y };
  }
  return _n(r);
}
function Pf(e, t) {
  let n = dn(e);
  return n === t || !Mt(n) || qn(n) ? !1 : Rt(n).position === "fixed" || Pf(n, t);
}
function dg(e, t) {
  let n = t.get(e);
  if (n) return n;
  let r = xr(e, [], !1).filter((c) => Mt(c) && jn(c) !== "body"),
    o = null,
    i = Rt(e).position === "fixed",
    s = i ? dn(e) : e;
  for (; Mt(s) && !qn(s);) {
    let c = Rt(s),
      a = Bi(s);
    (!a && c.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a && c.position === "static" && !!o && ["absolute", "fixed"].includes(o.position)) ||
            (yr(s) && !a && Pf(e, s))
      )
        ? (r = r.filter((l) => l !== s))
        : (o = c),
      (s = dn(s)));
  }
  return (t.set(e, r), r);
}
function pg(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e,
    s = [...(n === "clippingAncestors" ? (uo(t) ? [] : dg(t, this._c)) : [].concat(n)), r],
    c = s[0],
    a = s.reduce(
      (u, l) => {
        let f = Cf(t, l, o);
        return (
          (u.top = at(f.top, u.top)),
          (u.right = Pt(f.right, u.right)),
          (u.bottom = Pt(f.bottom, u.bottom)),
          (u.left = at(f.left, u.left)),
          u
        );
      },
      Cf(t, c, o)
    );
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}
function hg(e) {
  let { width: t, height: n } = wf(e);
  return { width: t, height: n };
}
function gg(e, t, n) {
  let r = Bt(t),
    o = Zt(t),
    i = n === "fixed",
    s = Un(e, !0, i, t),
    c = { scrollLeft: 0, scrollTop: 0 },
    a = ln(0);
  if (r || (!r && !i))
    if (((jn(t) !== "body" || yr(o)) && (c = ao(t)), r)) {
      let f = Un(t, !0, i, t);
      ((a.x = f.x + t.clientLeft), (a.y = f.y + t.clientTop));
    } else o && (a.x = If(o));
  let u = s.left + c.scrollLeft - a.x,
    l = s.top + c.scrollTop - a.y;
  return { x: u, y: l, width: s.width, height: s.height };
}
function wc(e) {
  return Rt(e).position === "static";
}
function Sf(e, t) {
  return !Bt(e) || Rt(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Mf(e, t) {
  let n = pt(e);
  if (uo(e)) return n;
  if (!Bt(e)) {
    let o = dn(e);
    for (; o && !qn(o);) {
      if (Mt(o) && !wc(o)) return o;
      o = dn(o);
    }
    return n;
  }
  let r = Sf(e, t);
  for (; r && vf(r) && wc(r);) r = Sf(r, t);
  return r && qn(r) && wc(r) && !Bi(r) ? n : r || xf(e) || n;
}
var bg = async function (e) {
  let t = this.getOffsetParent || Mf,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: gg(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function vg(e) {
  return Rt(e).direction === "rtl";
}
var xg = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ug,
  getDocumentElement: Zt,
  getClippingRect: pg,
  getOffsetParent: Mf,
  getElementRects: bg,
  getClientRects: ag,
  getDimensions: hg,
  getScale: Cr,
  isElement: Mt,
  isRTL: vg,
};
function yg(e, t) {
  let n = null,
    r,
    o = Zt(e);
  function i() {
    var c;
    (clearTimeout(r), (c = n) == null || c.disconnect(), (n = null));
  }
  function s(c, a) {
    (c === void 0 && (c = !1), a === void 0 && (a = 1), i());
    let { left: u, top: l, width: f, height: d } = e.getBoundingClientRect();
    if ((c || t(), !f || !d)) return;
    let h = co(l),
      m = co(o.clientWidth - (u + f)),
      b = co(o.clientHeight - (l + d)),
      v = co(u),
      x = {
        rootMargin: -h + "px " + -m + "px " + -b + "px " + -v + "px",
        threshold: at(0, Pt(1, a)) || 1,
      },
      g = !0;
    function y(S) {
      let T = S[0].intersectionRatio;
      if (T !== a) {
        if (!g) return s();
        T
          ? s(!1, T)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      g = !1;
    }
    try {
      n = new IntersectionObserver(y, { ...x, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(y, x);
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
      layoutShift: c = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = Ec(e),
    l = o || i ? [...(u ? xr(u) : []), ...xr(t)] : [];
  l.forEach((R) => {
    (o && R.addEventListener("scroll", n, { passive: !0 }), i && R.addEventListener("resize", n));
  });
  let f = u && c ? yg(u, n) : null,
    d = -1,
    h = null;
  s &&
    ((h = new ResizeObserver((R) => {
      let [x] = R;
      (x &&
        x.target === u &&
        h &&
        (h.unobserve(t),
        cancelAnimationFrame(d),
        (d = requestAnimationFrame(() => {
          var g;
          (g = h) == null || g.observe(t);
        }))),
        n());
    })),
    u && !a && h.observe(u),
    h.observe(t));
  let m,
    b = a ? Un(e) : null;
  a && v();
  function v() {
    let R = Un(e);
    (b && (R.x !== b.x || R.y !== b.y || R.width !== b.width || R.height !== b.height) && n(),
      (b = R),
      (m = requestAnimationFrame(v)));
  }
  return (
    n(),
    () => {
      var R;
      (l.forEach((x) => {
        (o && x.removeEventListener("scroll", n), i && x.removeEventListener("resize", n));
      }),
        f?.(),
        (R = h) == null || R.disconnect(),
        (h = null),
        a && cancelAnimationFrame(m));
    }
  );
}
var Df = mf;
var Af = df,
  kf = ff,
  Tf = hf;
var Of = lf;
var Lf = pf,
  Ff = (e, t, n) => {
    let r = new Map(),
      o = { platform: xg, ...n },
      i = { ...o.platform, _c: r };
    return af(e, t, { ...o, platform: i });
  };
var Cg = "div",
  lo = new WeakMap();
function Hf(e = 0, t = 0, n = 0, r = 0) {
  if (typeof DOMRect == "function") return new DOMRect(e, t, n, r);
  let o = { x: e, y: t, width: n, height: r, top: t, right: e + n, bottom: t + r, left: e };
  return { ...o, toJSON: () => o };
}
function Sg(e) {
  if (!e) return Hf();
  let { x: t, y: n, width: r, height: o } = e;
  return Hf(t, n, r, o);
}
function wg(e, t) {
  return {
    contextElement: e || void 0,
    getBoundingClientRect: () => {
      let n = e,
        r = t?.(n);
      return r || !n ? Sg(r) : n.getBoundingClientRect();
    },
  };
}
function Eg(e) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e);
}
function Vf(e) {
  let t = window.devicePixelRatio || 1;
  return Math.round(e * t) / t;
}
function Ig(e) {
  return typeof e == "number" ? e : Math.max(e.left ?? 0, e.right ?? 0);
}
function Pg(e, t) {
  return Df(({ placement: n }) => {
    let r = (e?.clientHeight || 0) / 2,
      o = typeof t.gutter == "number" ? t.gutter + r : (t.gutter ?? r);
    return { crossAxis: n.split("-")[1] ? void 0 : t.shift, mainAxis: o, alignmentAxis: t.shift };
  });
}
function Mg(e) {
  if (e.flip === !1) return;
  let t = typeof e.flip == "string" ? e.flip.split(" ") : void 0;
  return (fe(!t || t.every(Eg), !1), kf({ padding: e.overflowPadding, fallbackPlacements: t }));
}
function Rg(e) {
  if (!(!e.slide && !e.overlap))
    return Af({
      mainAxis: e.slide,
      crossAxis: e.overlap,
      padding: e.overflowPadding,
      limiter: Lf(),
    });
}
function Dg(e, t) {
  return Tf({
    padding: e.overflowPadding,
    apply({ elements: n, availableWidth: r, availableHeight: o, rects: i }) {
      if (t?.()) return;
      let s = n.floating,
        c = Math.round(i.reference.width);
      ((r = Math.floor(r)),
        (o = Math.floor(o)),
        s.style.setProperty("--popover-anchor-width", `${c}px`),
        s.style.setProperty("--popover-available-width", `${r}px`),
        s.style.setProperty("--popover-available-height", `${o}px`),
        e.sameWidth && (s.style.width = `${c}px`),
        e.fitViewport && ((s.style.maxWidth = `${r}px`), (s.style.maxHeight = `${o}px`)));
    },
  });
}
function Ag(e, t) {
  if (e) return Of({ element: e, padding: t.arrowPadding });
}
var Pc = Z(function ({
    store: t,
    modal: n = !1,
    portal: r = n,
    preserveTabOrder: o = !0,
    autoFocusOnShow: i = !0,
    wrapperProps: s,
    fixed: c = !1,
    flip: a = !0,
    shift: u = 0,
    slide: l = !0,
    overlap: f = !1,
    sameWidth: d = !1,
    fitViewport: h = !1,
    gutter: m,
    arrowPadding: b = 4,
    overflowPadding: v = 8,
    getAnchorRect: R,
    updatePosition: x,
    ...g
  }) {
    let y = $r();
    ((t = t || y), fe(t, !1));
    let S = K(t, "arrowElement"),
      T = K(t, "anchorElement"),
      w = o && r && !n,
      V = K(t, w ? ["disclosureElement"] : [], (L) => (w ? L.disclosureElement : null)),
      p = K(t, "popoverElement"),
      I = K(t, "unstable_placing"),
      M = K(t, "contentElement"),
      C = K(t, "placement"),
      P = K(t, "mounted"),
      E = K(t, "rendered"),
      D = (0, Nf.useRef)(null),
      H = !I,
      { portalRef: A, domReady: F } = ir(r, g.portalRef),
      j = q(R),
      te = q(x),
      O = !!x,
      G = typeof v == "number" ? v : (v.top ?? 0),
      se = typeof v == "number" ? v : (v.right ?? 0),
      _ = typeof v == "number" ? v : (v.bottom ?? 0),
      be = typeof v == "number" ? v : (v.left ?? 0),
      De = !P && an(P, g.hidden, g.alwaysVisible);
    ($(() => {
      if ((P && t?.setState("unstable_placing", !0), !p?.isConnected)) return;
      let L = { top: G, right: se, bottom: _, left: be };
      if ((p.style.setProperty("--popover-overflow-padding", `${Ig(L)}px`), De && !O)) return;
      let he = wg(T, j),
        xe = !1,
        ke = !1,
        Me = () => !!(xe || !p.isConnected),
        Re = async () => {
          if (Me() || !P) return;
          S || (D.current = D.current || document.createElement("div"));
          let Ne = S || D.current,
            At = [
              Pg(Ne, { gutter: m, shift: u }),
              Mg({ flip: a, overflowPadding: L }),
              Rg({ slide: l, shift: u, overlap: f, overflowPadding: L }),
              Ag(Ne, { arrowPadding: b }),
              Dg({ sameWidth: d, fitViewport: h, overflowPadding: L }, Me),
            ],
            We = await Ff(he, p, {
              placement: C,
              strategy: c ? "fixed" : "absolute",
              middleware: At,
            });
          if (Me()) return;
          t?.setState("currentPlacement", We.placement);
          let ht = Vf(We.x),
            kt = Vf(We.y);
          if (
            (Object.assign(p.style, {
              top: "0",
              left: "0",
              transform: `translate3d(${ht}px,${kt}px,0)`,
            }),
            (ke = !0),
            Ne && We.middlewareData.arrow)
          ) {
            let { x: Qe, y: Tt } = We.middlewareData.arrow,
              gt = vr(We.placement),
              bt = Ne.clientWidth / 2,
              _t = Ne.clientHeight / 2,
              Xe = Qe != null ? Qe + bt : -bt,
              Ot = Tt != null ? Tt + _t : -_t;
            (p.style.setProperty(
              "--popover-transform-origin",
              {
                top: `${Xe}px calc(100% + ${_t}px)`,
                bottom: `${Xe}px ${-_t}px`,
                left: `calc(100% + ${bt}px) ${Ot}px`,
                right: `${-bt}px ${Ot}px`,
              }[gt]
            ),
              Object.assign(Ne.style, {
                left: Qe != null ? `${Qe}px` : "",
                top: Tt != null ? `${Tt}px` : "",
                right: "",
                bottom: "",
                [gt]: "100%",
              }));
          }
        },
        je = Rf(
          he,
          p,
          async () => {
            if (!Me()) {
              try {
                O ? await te({ updatePosition: Re }) : await Re();
              } catch (Ne) {
                throw (ke && !Me() && t?.setState("unstable_placing", !1), Ne);
              }
              Me() || t?.setState("unstable_placing", !1);
            }
          },
          { elementResize: typeof ResizeObserver == "function" }
        );
      return () => {
        ((xe = !0), je());
      };
    }, [t, E, p, S, T, C, P, De, F, c, a, u, l, f, d, h, m, b, G, se, _, be, j, O, te]),
      $(() => {
        if (!P || !F || !p?.isConnected || !M?.isConnected) return;
        let L = () => {
          p.style.zIndex = getComputedStyle(M).zIndex;
        };
        L();
        let he = requestAnimationFrame(() => {
          he = requestAnimationFrame(L);
        });
        return () => cancelAnimationFrame(he);
      }, [P, F, p, M]),
      $(() => {
        if (!t) return;
        let L = t;
        lo.set(L, (lo.get(L) ?? 0) + 1);
        let he = me(L, ["mounted"], (xe) => {
          L.setState("unstable_placing", xe.mounted);
        });
        return () => {
          (he(),
            lo.set(L, (lo.get(L) ?? 1) - 1),
            queueMicrotask(() => {
              lo.get(L) || L.setState("unstable_placing", !1);
            }));
        };
      }, [t]));
    let N = c ? "fixed" : "absolute";
    return (
      (g = ge(
        g,
        (L) =>
          (0, Ic.jsx)("div", {
            ...s,
            style: { position: N, top: 0, left: 0, width: "max-content", ...s?.style },
            ref: t?.setPopoverElement,
            children: L,
          }),
        [t, N, s]
      )),
      (g = ge(g, (L) => (0, Ic.jsx)(wn, { value: t, children: L }), [t])),
      (g = { "data-placing": I || void 0, ...g, style: { position: "relative", ...g.style } }),
      (g = Cc({
        store: t,
        modal: n,
        portal: r,
        preserveTabOrder: o,
        preserveTabOrderAnchor: V || T,
        autoFocusOnShow: H && i,
        ...g,
        portalRef: A,
      })),
      g
    );
  }),
  Wf = zn(
    U(function (t) {
      let n = Pc(t);
      return J(Cg, n);
    }),
    $r
  );
var fo = qe([xi], [wn]),
  kg = fo.useContext,
  dw = fo.useScopedContext,
  Mc = fo.useProviderContext,
  Bf = fo.ContextProvider,
  Ki = fo.ScopedContextProvider;
function Rc(e) {
  return [e.clientX, e.clientY];
}
function zf(e, t) {
  let [n, r] = e,
    o = !1,
    i = t.length;
  for (let s = i, c = 0, a = s - 1; c < s; a = c++) {
    let u = t[c],
      l = t[a],
      f = t[a === 0 ? s - 1 : a - 1];
    if (u == null || l == null || f == null) return !1;
    let [d, h] = u,
      [m, b] = l,
      [, v] = f,
      R = (h - b) * (n - d) - (d - m) * (r - h);
    if (b < h) {
      if (r >= b && r < h) {
        if (R === 0) return !0;
        R > 0 && (r === b ? r > v && (o = !o) : (o = !o));
      }
    } else if (h < b) {
      if (r > h && r <= b) {
        if (R === 0) return !0;
        R < 0 && (r === b ? r < v && (o = !o) : (o = !o));
      }
    } else if (r === h && ((n >= m && n <= d) || (n >= d && n <= m))) return !0;
  }
  return o;
}
function Tg(e, t) {
  let { top: n, right: r, bottom: o, left: i } = t,
    [s, c] = e;
  return [s < i ? "left" : s > r ? "right" : null, c < n ? "top" : c > o ? "bottom" : null];
}
function Kf(e, t) {
  let n = e.getBoundingClientRect(),
    { top: r, right: o, bottom: i, left: s } = n,
    [c, a] = Tg(t, n),
    u = [t];
  return (
    c
      ? (a !== "top" && u.push([c === "left" ? s : o, r]),
        u.push([c === "left" ? o : s, r]),
        u.push([c === "left" ? o : s, i]),
        a !== "bottom" && u.push([c === "left" ? s : o, i]))
      : a === "top"
        ? (u.push([s, r]), u.push([s, i]), u.push([o, i]), u.push([o, r]))
        : (u.push([s, i]), u.push([s, r]), u.push([o, r]), u.push([o, i])),
    u
  );
}
var He = B(oe(), 1),
  Dc = B(de(), 1);
function Ac({ hideOnEscape: e, onClose: t, onEscapeClose: n }) {
  let r = (0, He.useRef)(null);
  return {
    hideOnEscape: q((o) => {
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
    onClose: q((o) => {
      let i = r.current;
      ((r.current = null), t?.(o), !o.defaultPrevented && i && n());
    }),
  };
}
var Og = "div";
function Lg(e, t, n, r) {
  return !!(
    wt(t) ||
    e.includes(t) ||
    n.some((o) => o && e.includes(o)) ||
    r?.some((o) => wt(o) || e.includes(o))
  );
}
function _f({
  event: e,
  element: t,
  enterPointRef: n,
  disablePointerEvents: r,
  refreshEnterPoint: o = !1,
}) {
  let i = n.current;
  if (!i) return !1;
  let s = Rc(e),
    c = Kf(t, i);
  return zf(s, c)
    ? (o && (n.current = s), r(e) && (e.preventDefault(), e.stopPropagation()), !0)
    : !1;
}
function Fg({ store: e, ...t }) {
  let [n, r] = (0, He.useState)(!1),
    o = K(e, "mounted");
  (0, He.useEffect)(() => {
    o || r(!1);
  }, [o]);
  let i = t.onFocus,
    s = q((a) => {
      (i?.(a), !a.defaultPrevented && r(!0));
    }),
    c = (0, He.useRef)(null);
  return (
    (0, He.useEffect)(
      () =>
        me(e, ["anchorElement"], (a) => {
          c.current = a.anchorElement;
        }),
      [e]
    ),
    (t = { autoFocusOnHide: n, finalFocus: c, ...t, onFocus: s }),
    t
  );
}
var jf = (0, He.createContext)(null),
  _i = Z(function ({
    store: t,
    modal: n = !1,
    portal: r = n,
    hideOnEscape: o = !0,
    hideOnHoverOutside: i = !0,
    disablePointerEventsOnApproach: s = !!i,
    ...c
  }) {
    let a = Mc();
    ((t = t || a), fe(t, !1));
    let u = (0, He.useRef)(null),
      l = (0, He.useRef)([]),
      f = (0, He.useRef)(0),
      d = (0, He.useRef)(null),
      { portalRef: h, domReady: m } = ir(r, c.portalRef),
      b = cr(),
      v = !!i,
      R = pe(i),
      x = !!s,
      g = pe(s),
      y = K(t, "open"),
      S = K(t, "mounted"),
      T = (0, He.useCallback)(() => {
        (window.clearTimeout(f.current), (f.current = 0));
      }, []);
    ((0, He.useEffect)(() => {
      if (!m || !S || (!v && !x)) return;
      let C = u.current;
      return C
        ? Ee(
            Ae(
              "mousemove",
              (E) => {
                if (!t || !b()) return;
                let {
                    anchorElement: D,
                    disclosureElement: H,
                    hideTimeout: A,
                    timeout: F,
                  } = t.getState(),
                  j = E.composedPath(),
                  te = [D, H],
                  O = te.find((G) => G && j.includes(G));
                if (Lg(j, C, te, l.current)) {
                  ((d.current = O ? Rc(E) : null), T());
                  return;
                }
                f.current ||
                  _f({
                    event: E,
                    element: C,
                    enterPointRef: d,
                    disablePointerEvents: g,
                    refreshEnterPoint: !0,
                  }) ||
                  (R(E) &&
                    (f.current = window.setTimeout(() => {
                      ((f.current = 0), t?.hide());
                    }, A ?? F)));
              },
              !0
            ),
            T
          )
        : void 0;
    }, [t, b, m, S, v, x, l, T, g, R]),
      (0, He.useEffect)(() => {
        if (!m || !S || !x) return;
        let C = (P) => {
          let E = u.current;
          E && _f({ event: P, element: E, enterPointRef: d, disablePointerEvents: g });
        };
        return Ee(
          Ae("mouseenter", C, !0),
          Ae("mouseover", C, !0),
          Ae("mouseout", C, !0),
          Ae("mouseleave", C, !0)
        );
      }, [m, S, x, g]),
      (0, He.useEffect)(() => {
        m && (y || t?.setAutoFocusOnShow(!1));
      }, [t, m, y]));
    let w = rr(y);
    (0, He.useEffect)(() => {
      if (m)
        return () => {
          w.current || t?.setAutoFocusOnShow(!1);
        };
    }, [t, m]);
    let V = (0, He.useContext)(jf);
    $(() => {
      if (n || !r || !S || !m) return;
      let C = u.current;
      if (C) return V?.(C);
    }, [n, r, S, m, V]);
    let p = (0, He.useCallback)(
      (C) => {
        (T(), (l.current = [...l.current, C]));
        let P = V?.(C);
        return () => {
          (T(), (l.current = l.current.filter((E) => E !== C)), P?.());
        };
      },
      [T, V]
    );
    ((c = ge(
      c,
      (C) =>
        (0, Dc.jsx)(Ki, {
          value: t,
          children: (0, Dc.jsx)(jf.Provider, { value: p, children: C }),
        }),
      [t, p]
    )),
      (c = { ...c, ref: ae(u, c.ref) }),
      (c = Fg({ store: t, ...c })));
    let I = K(t, ["autoFocusOnShow"], (C) => n || C.autoFocusOnShow),
      M = Ac({
        hideOnEscape: o,
        onClose: c.onClose,
        onEscapeClose() {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              t?.getState().open && t.hide();
            });
          });
        },
      });
    return (
      (c = Pc({
        store: t,
        modal: n,
        portal: r,
        autoFocusOnShow: I,
        ...c,
        portalRef: h,
        hideOnEscape: M.hideOnEscape,
        onClose: M.onClose,
      })),
      c
    );
  }),
  mo = zn(
    U(function (t) {
      let n = _i(t);
      return J(Og, n);
    }),
    Mc
  );
var In = B(oe(), 1),
  qf = Z(function ({
    store: t,
    showOnHover: n = !0,
    unstable_showOnHoverWhenDisabled: r = !0,
    setAnchorElement: o = !1,
    ...i
  }) {
    let s = dt(i),
      c = i.focusable !== !1,
      a = (0, In.useRef)(null),
      u = (0, In.useRef)(0),
      l = q((g) => (s && !c ? !0 : ua(g)));
    ((0, In.useEffect)(() => () => window.clearTimeout(u.current), []),
      (0, In.useEffect)(
        () =>
          Ae(
            "mouseleave",
            (y) => {
              let S = a.current;
              S && y.target === S && (window.clearTimeout(u.current), (u.current = 0));
            },
            !0
          ),
        []
      ));
    let f = i.onMouseMove,
      d = pe(n),
      h = pe(r),
      m = cr(),
      b = q((g) => {
        if ((f?.(g), g.defaultPrevented || u.current || !m())) return;
        let y = g.currentTarget;
        if (l(y) || ((s || Bo(y)) && !h(g)) || !d(g)) return;
        (o && t.setAnchorElement(y), t.setDisclosureElement(y));
        let { showTimeout: S, timeout: T } = t.getState(),
          w = () => {
            ((u.current = 0),
              m() &&
                (l(y) ||
                  (o && t.setAnchorElement(y),
                  t.show(),
                  queueMicrotask(() => {
                    t.setDisclosureElement(y);
                  }))));
          },
          V = S ?? T;
        V === 0 ? w() : (u.current = window.setTimeout(w, V));
      }),
      v = i.onClick,
      R = q((g) => {
        (v?.(g), window.clearTimeout(u.current), (u.current = 0));
      }),
      x = (0, In.useCallback)(
        (g) => {
          if (((a.current = g), !o)) return;
          let { anchorElement: y } = t.getState();
          y?.isConnected || t.setAnchorElement(g);
        },
        [t, o]
      );
    return ((i = { ...i, ref: ae(x, i.ref), onMouseMove: b, onClick: R }), (i = cn(i)), i);
  });
function Sr({ popover: e, ...t } = {}) {
  let n = Cn(
    t.store,
    ur(e, [
      "arrowElement",
      "anchorElement",
      "contentElement",
      "popoverElement",
      "disclosureElement",
      "unstable_placing",
    ])
  );
  let r = n?.getState(),
    o = ki({ ...t, store: n }),
    i = ee(t.placement, r?.placement, "bottom"),
    s = {
      ...o.getState(),
      placement: i,
      currentPlacement: i,
      anchorElement: ee(r?.anchorElement, null),
      popoverElement: ee(r?.popoverElement, null),
      arrowElement: ee(r?.arrowElement, null),
      rendered: Symbol("rendered"),
      unstable_placing: !1,
    },
    c = Ge(s, o, n),
    a = s.anchorElement === s.disclosureElement ? s.anchorElement : null;
  return (
    ye(c, () =>
      me(c, ["anchorElement", "disclosureElement"], (u) => {
        if (u.anchorElement && u.anchorElement !== a) {
          a = null;
          return;
        }
        ((a = u.disclosureElement), c.setState("anchorElement", a));
      })
    ),
    ye(c, () => e?.unstable_onHideRequest(o.unstable_requestHide)),
    {
      ...o,
      ...c,
      setAnchorElement: (u) => c.setState("anchorElement", u),
      setPopoverElement: (u) => c.setState("popoverElement", u),
      setArrowElement: (u) => c.setState("arrowElement", u),
      render: () => c.setState("rendered", Symbol("rendered")),
    }
  );
}
function po(e, t, n) {
  return (Et(t, [n.popover, t]), Ie(e, n, "placement"), mc(e, t, n));
}
function Uf(e = {}) {
  let [t, n] = ct(Sr, e);
  return po(t, n, e);
}
function ji(e = {}) {
  let t = e.store?.getState(),
    n = Sr({ ...e, placement: ee(e.placement, t?.placement, "bottom") }),
    r = ee(e.timeout, t?.timeout, 500),
    o = {
      ...n.getState(),
      timeout: r,
      showTimeout: ee(e.showTimeout, t?.showTimeout),
      hideTimeout: ee(e.hideTimeout, t?.hideTimeout),
      autoFocusOnShow: ee(t?.autoFocusOnShow, !1),
    },
    i = Ge(o, n, e.store);
  return { ...n, ...i, setAutoFocusOnShow: (s) => i.setState("autoFocusOnShow", s) };
}
function kc(e, t, n) {
  return (Ie(e, n, "timeout"), Ie(e, n, "showTimeout"), Ie(e, n, "hideTimeout"), po(e, t, n));
}
function qi(e = {}) {
  let [t, n] = ct(ji, e);
  return kc(t, n, e);
}
var ho = qe([xn], [Gt]),
  $f = ho.useContext,
  Gf = ho.useScopedContext,
  qw = ho.useProviderContext,
  Uw = ho.ContextProvider,
  $w = ho.ScopedContextProvider;
var wr = B(oe(), 1),
  Yf = "button",
  Tc = Z(function (t) {
    let n = (0, wr.useRef)(null),
      r = ha(n, Yf),
      [o, i] = (0, wr.useState)(() => !!r && Ht({ tagName: r, type: t.type }));
    return (
      (0, wr.useEffect)(() => {
        n.current && i(Ht(n.current));
      }, []),
      (t = { role: !o && r !== "a" ? "button" : void 0, ...t, ref: ae(n, t.ref) }),
      (t = Fr(t)),
      t
    );
  }),
  Qw = U(function (t) {
    let n = Tc(mt(t));
    return J(Yf, n);
  });
var Pn = B(oe(), 1);
var Ng = "button",
  Wg = Symbol("disclosure"),
  Oc = Z(function ({ store: t, toggleOnClick: n = !0, ...r }) {
    let o = _r();
    ((t = t || o), fe(t, !1));
    let i = (0, Pn.useRef)(null),
      [s, c] = (0, Pn.useState)(!1),
      a = K(t, "disclosureElement"),
      u = K(t, "open"),
      l = (0, Pn.useCallback)(
        (v) => {
          let R = i.current;
          if (((i.current = v), v)) {
            t?.getState().disclosureElement?.isConnected || t.setDisclosureElement(v);
            return;
          }
          t?.getState().disclosureElement === R && t.setDisclosureElement(null);
        },
        [t]
      );
    (0, Pn.useEffect)(() => {
      let v = a === i.current;
      (a?.isConnected || (t?.setDisclosureElement(i.current), (v = !0)), c(u && v));
    }, [a, t, u]);
    let f = r.onClick,
      d = pe(n),
      [h, m] = sr(r, Wg, !0),
      b = q((v) => {
        (f?.(v),
          !v.defaultPrevented &&
            (h || (d(v) && (t?.setDisclosureElement(v.currentTarget), t?.toggle()))));
      });
    return (
      (r = {
        "aria-expanded": s,
        "aria-controls": K(t, "contentElement")?.id,
        ...m,
        ...r,
        ref: ae(l, r.ref),
        onClick: b,
      }),
      (r = Tc(r)),
      r
    );
  }),
  cE = U(function (t) {
    let n = Oc(mt(t));
    return J(Ng, n);
  });
var Bg = "button",
  Lc = Z(function ({ store: t, ...n }) {
    let r = Vn();
    ((t = t || r), fe(t, !1));
    let o = K(t, "contentElement");
    return ((n = { "aria-haspopup": sn(o, "dialog"), ...n }), (n = Oc({ store: t, ...n })), n);
  }),
  hE = U(function (t) {
    let n = Lc(mt(t));
    return J(Bg, n);
  });
var Xf = B(de(), 1),
  zg = "button",
  Fc = Z(function ({ store: t, ...n }) {
    let r = $r();
    return (
      (t = t || r),
      fe(t, !1),
      (n = ge(n, (o) => (0, Xf.jsx)(wn, { value: t, children: o }), [t])),
      (n = Lc({ store: t, ...n })),
      n
    );
  }),
  Kg = U(function (t) {
    let n = Fc(mt(t));
    return J(zg, n);
  });
var _g = "div",
  Jf = new WeakMap();
function jg(e) {
  let t = Jf.get(e);
  return (t || ((t = { chars: "", cleanupTimeout: 0 }), Jf.set(e, t)), t);
}
function Ui(e) {
  e.chars = "";
}
function qg(e, t) {
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
function Ug(e, t) {
  if (Te(e)) return !0;
  let n = e.target;
  return n ? t.some((r) => r.element === n) : !1;
}
function $g(e) {
  return e.filter((t) => !t.disabled);
}
function $i(e, t) {
  let n = e.typeaheadText ?? (e.element?.textContent || e.children || ("value" in e && e.value));
  return n ? Tr(n).trim().toLowerCase().startsWith(t.toLowerCase()) : !1;
}
function Gg({ activeId: e, char: t, items: n, typeaheadState: r }) {
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
var go = Z(function ({ store: t, typeahead: n = !0, ...r }) {
    let o = $t();
    ((t = t || o), fe(t, !1));
    let i = r.onKeyDownCapture,
      s = q((c) => {
        if ((i?.(c), c.defaultPrevented || !n || !t)) return;
        let a = jg(t);
        if (!qg(c, a)) return Ui(a);
        let { renderedItems: u, items: l, activeId: f } = t.getState(),
          d = $g(l.length > u.length ? l : u);
        if (!Ug(c, d)) return Ui(a);
        (c.preventDefault(),
          window.clearTimeout(a.cleanupTimeout),
          (a.cleanupTimeout = window.setTimeout(() => {
            Ui(a);
          }, 500)));
        let h = c.key.toLowerCase();
        ((a.chars += h), (d = Gg({ activeId: f, char: h, items: d, typeaheadState: a })));
        let m = d.find((b) => $i(b, a.chars));
        m ? t.move(m.id) : Ui(a);
      });
    return ((r = { ...r, onKeyDownCapture: s }), bn(r));
  }),
  Yg = U(function (t) {
    let n = go(t);
    return J(_g, n);
  });
var Zf = B(oe(), 1),
  Xg = "div";
function Jg(e) {
  let t = e.relatedTarget;
  return ze(t) ? we(e.currentTarget, t) : !1;
}
var Hc = Symbol("composite-hover");
function Zg(e) {
  let { relatedTarget: t } = e;
  if (!ze(t)) return !1;
  let n = t;
  do {
    if ($e(n, Hc) && n[Hc]) return !0;
    n = n.parentElement;
  } while (n);
  return !1;
}
var bo = Z(function ({ store: t, focusOnHover: n = !0, blurOnHoverEnd: r = !!n, ...o }) {
    let i = $t();
    ((t = t || i), fe(t, !1));
    let s = cr(),
      c = o.onMouseMove,
      a = pe(n),
      u = q((m) => {
        if ((c?.(m), !m.defaultPrevented && s() && a(m))) {
          if (!wt(m.currentTarget)) {
            let b = t?.getState().compositeElement;
            b && !St(b) && b.focus({ preventScroll: !0 });
          }
          t?.setActiveId(m.currentTarget.id);
        }
      }),
      l = o.onMouseLeave,
      f = pe(r),
      d = q((m) => {
        (l?.(m),
          !m.defaultPrevented &&
            s() &&
            (Jg(m) ||
              Zg(m) ||
              (a(m) &&
                f(m) &&
                (t?.setActiveId(null),
                t?.getState().compositeElement?.focus({ preventScroll: !0 })))));
      }),
      h = (0, Zf.useCallback)((m) => {
        m && (m[Hc] = !0);
      }, []);
    return ((o = { ...o, ref: ae(h, o.ref), onMouseMove: u, onMouseLeave: d }), o);
  }),
  Qg = Ut(
    U(function (t) {
      let n = bo(t);
      return J(Xg, n);
    })
  );
var Vc = B(oe(), 1),
  vo = qe([xn, Bf], [Gt, Ki]),
  Dt = vo.useContext,
  Qf = vo.useScopedContext,
  $n = vo.useProviderContext,
  Gi = vo.ContextProvider,
  em = vo.ScopedContextProvider;
var qE = (0, Vc.createContext)(void 0),
  Yi = (0, Vc.createContext)(!1);
var Xi = B(oe(), 1),
  Nc = B(de(), 1);
var eb = "div";
function tb({ store: e, ...t }) {
  let [n, r] = (0, Xi.useState)(void 0),
    o = t["aria-label"],
    i = K(e, "disclosureElement"),
    s = K(e, "contentElement");
  return (
    (0, Xi.useEffect)(() => {
      let c = s;
      if (!c) return;
      let a = o || c.hasAttribute("aria-label") ? void 0 : i?.id || void 0;
      r(a);
    }, [o, i, s]),
    n
  );
}
var Wc = Z(function ({ store: t, alwaysVisible: n, composite: r, ...o }) {
    let i = $n();
    ((t = t || i), fe(t, !1));
    let s = t.parent,
      c = t.menubar,
      a = !!s,
      u = Oe(o.id),
      l = o.onKeyDown,
      f = K(t, ["placement"], (S) => vr(S.placement)),
      d = K(t, ["orientation"], (S) => (S.orientation === "both" ? void 0 : S.orientation)),
      h = d !== "vertical",
      m = K(c, ["orientation"], (S) => !!S && S.orientation !== "vertical"),
      b = q((S) => {
        if ((l?.(S), S.defaultPrevented)) return;
        let T = S.target;
        if (!(!Te(S) && !Vt(t, T))) {
          if (er(T)) {
            let w = Rn(T),
              V = S.key === "ArrowLeft" || S.key === "ArrowUp",
              p = S.key === "ArrowRight" || S.key === "ArrowDown";
            if ((V && w.start !== 0) || (p && w.end !== Ko(T).length)) return;
          }
          if (a || (c && !h)) {
            let w = {
              ArrowRight: () => f === "left" && !h,
              ArrowLeft: () => f === "right" && !h,
              ArrowUp: () => f === "bottom" && h,
              ArrowDown: () => f === "top" && h,
            }[S.key];
            if (w?.()) return (S.stopPropagation(), S.preventDefault(), t?.hide());
          }
          if (c) {
            let w = {
                ArrowRight: () => {
                  if (m) return c.next();
                },
                ArrowLeft: () => {
                  if (m) return c.previous();
                },
                ArrowDown: () => {
                  if (!m) return c.down();
                },
                ArrowUp: () => {
                  if (!m) return c.up();
                },
              }[S.key],
              V = w?.();
            V !== void 0 && (S.stopPropagation(), S.preventDefault(), c.move(V));
          }
        }
      });
    o = ge(o, (S) => (0, Nc.jsx)(em, { value: t, children: S }), [t]);
    let v = tb({ store: t, ...o }),
      R = K(t, "mounted"),
      x = an(R, o.hidden, n),
      g = x ? { ...o.style, display: "none" } : o.style;
    ((o = ge(o, (S) => (0, Nc.jsx)(Yi.Provider, { value: x, children: S }), [x])),
      (o = {
        "aria-labelledby": v,
        hidden: x,
        ...o,
        id: u,
        ref: ae(u ? t.setContentElement : null, o.ref),
        style: g,
        onKeyDown: b,
      }));
    let y = !!t.combobox;
    return (
      (r = r ?? !y),
      r && (o = { role: "menu", "aria-orientation": d, ...o }),
      (o = zr({ store: t, composite: r, ...o })),
      (o = go({ store: t, typeahead: !y, ...o })),
      o
    );
  }),
  nb = U(function (t) {
    let n = Wc(t);
    return J(eb, n);
  });
var zt = B(oe(), 1);
var rb = "div",
  ob = Z(function ({
    store: t,
    modal: n = !1,
    portal: r = n,
    hideOnEscape: o = !0,
    autoFocusOnShow: i = !0,
    hideOnHoverOutside: s,
    alwaysVisible: c,
    getPersistentElements: a,
    unstable_treeSnapshotKey: u,
    ...l
  }) {
    let f = $n();
    ((t = t || f), fe(t, !1));
    let d = (0, zt.useRef)(null),
      h = t.parent,
      m = t.menubar,
      b = !!h,
      v = !!m && !b,
      R = b ? !1 : n;
    l = { ...l, ref: ae(d, l.ref) };
    let { "aria-labelledby": x, ...g } = Wc({ store: t, alwaysVisible: c, ...l });
    l = g;
    let [y, S] = (0, zt.useState)(),
      T = K(t, ["autoFocusOnShow", "initialFocus", "renderedItems", "compositeElement"], (A) => {
        if (!A.autoFocusOnShow) return;
        let F = (j) => !j.disabled && !!j.element;
        switch (A.initialFocus) {
          case "first":
            return A.renderedItems.find(F)?.element || null;
          case "last":
            for (let j = A.renderedItems.length - 1; j >= 0; j -= 1) {
              let te = A.renderedItems[j];
              if (te && F(te)) return te.element;
            }
            return null;
          default:
            return A.compositeElement;
        }
      });
    (0, zt.useEffect)(() => {
      let A = !1;
      return (
        S((F) => {
          if (A) return;
          if (R && F?.current?.isConnected) return F;
          if (T === void 0) return;
          if (T && T === F?.current) return F;
          let j = (0, zt.createRef)();
          return ((j.current = T), j);
        }),
        () => {
          A = !0;
        }
      );
    }, [R, T]);
    let w = !!y || !!l.initialFocus || R,
      V = i === !1 ? !1 : w && i,
      p = K(
        t,
        ["disclosureElement", "anchorElement"],
        (A) => A.disclosureElement || A.anchorElement
      ),
      I = K(t, ["disclosureElement", "contentElement"], (A) => {
        let { disclosureElement: F, contentElement: j } = A;
        return !F?.isConnected || yc(F) || j?.contains(F) ? null : F;
      }),
      M = R ? I : null,
      C = (0, zt.useMemo)(() => [u, M], [u, M]),
      P = K(t.combobox || t, "contentElement"),
      E = K(h?.combobox || h, "contentElement"),
      D = (0, zt.useMemo)(() => {
        if (!E || !P) return;
        let A = P.getAttribute("role"),
          F = E.getAttribute("role");
        if (!((F === "menu" || F === "menubar") && A === "menu")) return E;
      }, [P, E]);
    D !== void 0 && (l = { preserveTabOrderAnchor: D, ...l });
    let H = Ac({ hideOnEscape: o, onClose: l.onClose, onEscapeClose: () => h?.hideAll() });
    return (
      (l = _i({
        store: t,
        alwaysVisible: c,
        initialFocus: y,
        autoFocusOnShow: V,
        finalFocus: p,
        ...l,
        hideOnEscape: H.hideOnEscape,
        onClose: H.onClose,
        hideOnHoverOutside(A) {
          let F = t?.getState().disclosureElement;
          return (typeof s == "function" ? s(A) : (s ?? (b ? !0 : v ? (F ? !wt(F) : !0) : !1)))
            ? A.defaultPrevented || !b || !F || (ta(F, "mouseout", A), !wt(F))
              ? !0
              : (requestAnimationFrame(() => {
                  wt(F) || t?.hide();
                }),
                !1)
            : !1;
        },
        getPersistentElements() {
          let A = a?.() || [];
          return !R || !I ? A : [...A, I];
        },
        unstable_treeSnapshotKey: C,
        modal: R,
        portal: r,
        backdrop: b ? !1 : l.backdrop,
      })),
      (l = { "aria-labelledby": x, ...l }),
      l
    );
  }),
  Ji = zn(
    U(function (t) {
      let n = ob(t);
      return J(rb, n);
    }),
    $n
  );
var nm = B(oe(), 1),
  Bc = B(de(), 1);
var ib = "button";
function sb(e, t) {
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
var cb = Z(function ({
    store: t,
    focusable: n,
    accessibleWhenDisabled: r,
    showOnHover: o,
    unstable_showOnHoverWhenDisabled: i = !1,
    ...s
  }) {
    let c = $n();
    ((t = t || c), fe(t, !1));
    let a = (0, nm.useRef)(null),
      u = t.parent,
      l = t.menubar,
      f = !!u,
      d = !!l && !f,
      h = dt(s),
      m = (C) => h || Bo(C),
      b = () => {
        let C = a.current;
        C && (t?.setDisclosureElement(C), t?.show());
      },
      v = s.onFocus,
      R = q((C) => {
        if (
          (v?.(C),
          m(C.currentTarget) ||
            C.defaultPrevented ||
            (t?.setAutoFocusOnShow(!1), t?.setActiveId(null), !l) ||
            !d)
        )
          return;
        let { items: P } = l.getState();
        tm(P, C.currentTarget) && b();
      }),
      x = K(t, ["placement"], (C) => vr(C.placement)),
      g = s.onKeyDown,
      y = q((C) => {
        if ((g?.(C), m(C.currentTarget) || C.defaultPrevented)) return;
        let P = sb(C, x);
        if (P) {
          C.preventDefault();
          let { open: E } = t.getState();
          if (E) {
            let D = P === "last" ? t.last() : t.first();
            t.move(D);
            return;
          }
          (b(), t?.setAutoFocusOnShow(!0), t?.setInitialFocus(P));
        }
      }),
      S = s.onClick,
      T = q((C) => {
        if ((S?.(C), C.defaultPrevented || !t)) return;
        let P = !C.detail,
          { open: E } = t.getState();
        ((!E || P) &&
          ((!f || P) && t.setAutoFocusOnShow(!0), t.setInitialFocus(P ? "first" : "container")),
          f && b());
      });
    ((s = ge(s, (C) => (0, Bc.jsx)(Gi, { value: t, children: C }), [t])),
      f && (s = { ...s, render: (0, Bc.jsx)(gr.div, { render: s.render }) }));
    let w = Oe(s.id),
      V = K(u?.combobox || u, "contentElement"),
      p = f || d ? _o(V, "menuitem") : void 0,
      I = K(t, "contentElement"),
      M = !!t.combobox;
    return (
      (s = {
        role: p,
        "aria-haspopup": sn(I, M ? "dialog" : "menu"),
        ...s,
        id: w,
        ref: ae(a, s.ref),
        onFocus: R,
        onKeyDown: y,
        onClick: T,
      }),
      (s = qf({
        store: t,
        focusable: n,
        accessibleWhenDisabled: r,
        ...s,
        unstable_showOnHoverWhenDisabled: i,
        showOnHover: (C) => {
          if (
            !(() => {
              if (typeof o == "function") return o(C);
              if (o != null) return o;
              if (f) return !0;
              if (!l) return !1;
              let { items: D } = l.getState();
              return d && tm(D);
            })()
          )
            return !1;
          let E = d ? l : u;
          return (E && E.setActiveId(C.currentTarget.id), !0);
        },
      })),
      (s = Fc({ store: t, toggleOnClick: !f, focusable: n, accessibleWhenDisabled: r, ...s })),
      (s = go({ store: t, typeahead: d, ...s })),
      s
    );
  }),
  Zi = U(function (t) {
    let n = cb(t);
    return J(ib, mt(n));
  });
var rm = B(oe(), 1);
var ub = "div";
function ab(e, t, n) {
  if (!e) return !1;
  if (wt(e)) return !0;
  let r = t
    ?.find((i) => (i.element === n ? !1 : i.element?.getAttribute("aria-expanded") === "true"))
    ?.element?.getAttribute("aria-controls");
  if (!r) return !1;
  let o = ue(e).getElementById(r);
  return o ? (wt(o) ? !0 : !!o.querySelector("[role=menuitem][aria-expanded=true]")) : !1;
}
var lb = Z(function ({
    store: t,
    hideOnClick: n = !0,
    preventScrollOnKeyDown: r = !0,
    focusOnHover: o,
    blurOnHoverEnd: i,
    ...s
  }) {
    let c = Qf(!0),
      a = Gf();
    ((t = t || c || a), fe(t, !1));
    let u = s.onClick,
      l = pe(n),
      f = "hideAll" in t ? t.hideAll : void 0,
      d = !!f,
      h = q((v) => {
        if ((u?.(v), v.defaultPrevented || Uo(v) || qo(v) || !f)) return;
        let R = v.currentTarget.getAttribute("aria-haspopup");
        (R && R !== "false") || (l(v) && f());
      }),
      m = K(t, ["contentElement"], (v) => ("contentElement" in v ? v.contentElement : null)),
      b = (0, rm.useContext)(Yi);
    return (
      (s = { role: _o(m, "menuitem"), ...s, onClick: h }),
      (s = Br({
        store: t,
        preventScrollOnKeyDown: r,
        ...s,
        shouldRegisterItem: b ? !1 : s.shouldRegisterItem,
      })),
      (s = bo({
        store: t,
        ...s,
        focusOnHover(v) {
          let R = () => (typeof o == "function" ? o(v) : (o ?? !0));
          if (!t || !R()) return !1;
          let { compositeElement: x, items: g } = t.getState();
          return d
            ? (v.currentTarget.hasAttribute("aria-expanded") &&
                v.currentTarget.focus({ preventScroll: !0 }),
              !0)
            : ab(x, g, v.currentTarget)
              ? (v.currentTarget.focus({ preventScroll: !0 }), !0)
              : !1;
        },
        blurOnHoverEnd(v) {
          return typeof i == "function" ? i(v) : (i ?? d);
        },
      })),
      s
    );
  }),
  Qi = Ut(
    U(function (t) {
      let n = lb(t);
      return J(ub, n);
    })
  );
function om({ combobox: e, parent: t, menubar: n, ...r } = {}) {
  let o = !!n && !t,
    i = Cn(
      r.store,
      ci(t, ["values"]),
      ur(e, [
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
    c = (t || n)?.getState().orientation === "vertical" ? "right-start" : "bottom-start",
    a = ar({ ...r, store: i, orientation: ee(r.orientation, s.orientation, "vertical") }),
    u = ji({
      ...r,
      store: i,
      placement: ee(r.placement, s.placement, c),
      timeout: ee(r.timeout, s.timeout, o ? 0 : 150),
      hideTimeout: ee(r.hideTimeout, s.hideTimeout, 0),
    }),
    l = {
      ...a.getState(),
      ...u.getState(),
      initialFocus: ee(s.initialFocus, "container"),
      values: ee(r.values, s.values, r.defaultValues, {}),
    },
    f = Ge(l, a, u, i);
  return (
    ye(f, () => e?.unstable_onHideRequest(u.unstable_requestHide)),
    ye(f, () =>
      me(f, ["mounted"], (d) => {
        d.mounted || f.setState("activeId", null);
      })
    ),
    {
      ...a,
      ...u,
      ...f,
      combobox: e,
      parent: t,
      menubar: n,
      hideAll: () => {
        (u.hide(), t?.hideAll());
      },
      setInitialFocus: (d) => f.setState("initialFocus", d),
      setValues: (d) => f.setState("values", d),
      setValue: (d, h) => {
        d !== "__proto__" &&
          d !== "constructor" &&
          (Array.isArray(d) ||
            f.setState("values", (m) => {
              let b = m[d],
                v = gn(h, b);
              return v === b ? m : { ...m, [d]: v !== void 0 && v };
            }));
      },
    }
  );
}
function mb(e, t, n) {
  return (
    Et(t, [n.combobox, n.parent, n.menubar, t]),
    Ie(e, n, "values", "setValues"),
    Object.assign(kc(Xr(e, t, n), t, n), {
      combobox: n.combobox,
      parent: n.parent,
      menubar: n.menubar,
    })
  );
}
function Er(e = {}) {
  let t = Dt(),
    n = $f(),
    r = Ci();
  e = {
    ...e,
    parent: e.parent !== void 0 ? e.parent : t,
    menubar: e.menubar !== void 0 ? e.menubar : n,
    combobox: e.combobox !== void 0 ? e.combobox : r,
  };
  let [o, i] = ct(om, e);
  return mb(o, i, e);
}
var im = B(de(), 1);
function es(e = {}) {
  let t = Er(e);
  return (0, im.jsx)(Gi, { value: t, children: e.children });
}
var db = "hr",
  pb = Z(function ({ store: t, ...n }) {
    let r = Dt();
    return ((t = t || r), (n = ec({ store: t, ...n })), n);
  }),
  ts = U(function (t) {
    let n = pb(t);
    return J(db, n);
  });
var gb = new WeakMap(),
  sm = new WeakMap();
function xo(e) {
  e.scrollIntoView({ block: "nearest", inline: "nearest" });
}
function bb(e, t) {
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
function vb(e, t) {
  let n = e.getBoundingClientRect(),
    r = t.getBoundingClientRect(),
    o = r.width / t.offsetWidth || 1,
    i = r.left + t.clientLeft * o,
    s = i + t.clientWidth * o,
    c = t.clientWidth * o,
    a = n.left < i,
    u = n.right > s,
    l = (a && !u && n.width < c) || (u && !a && n.width > c),
    f = (a && !u && n.width > c) || (u && !a && n.width < c),
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
    if (!s || i !== gb.get(s) || !o?.contains(r)) return xo(r);
    let c = bb(r, o);
    if (!c) return xo(r);
    vb(r, c);
  };
  return (sm.set(e, n), n);
}
var _e = B(oe(), 1),
  Ir = B(de(), 1);
var xb = "input";
function yb(e, t, n) {
  return n ? e.find((r) => !r.disabled && r.value)?.value === t : !1;
}
function cm(e, t) {
  if (!t || e == null) return !1;
  let n = Tr(e),
    r = Tr(t);
  return n.length !== e.length || r.length !== t.length
    ? !1
    : r.length > n.length && r.toLowerCase().startsWith(n.toLowerCase());
}
function Cb(e) {
  return e === "inline" || e === "list" || e === "both" || e === "none";
}
function Sb(e) {
  return e.find((t) => (t.disabled ? !1 : t.element?.getAttribute("role") !== "tab"))?.id;
}
var wb = Z(function ({
    store: t,
    focusable: n = !0,
    autoSelect: r = !1,
    getAutoSelectId: o,
    setValueOnChange: i,
    showMinLength: s = 0,
    showOnChange: c,
    showOnMouseDown: a,
    showOnClick: u = a,
    showOnKeyDown: l,
    showOnKeyPress: f = l,
    blurActiveItemOnClick: d,
    setValueOnClick: h = !0,
    moveOnKeyPress: m = !0,
    autoComplete: b = "list",
    name: v,
    form: R,
    disabled: x,
    ...g
  }) {
    let y = mr(!0),
      S = Ci();
    ((t = t || S || y), fe(t, !1));
    let T = (0, _e.useRef)(null),
      [w, V] = or(),
      p = (0, _e.useRef)(!1),
      I = (0, _e.useRef)(!1),
      M = (0, _e.useRef)(null),
      C = () => {
        let z = M.current;
        z != null && (cancelAnimationFrame(z), (M.current = null));
      },
      P = K(t, ["virtualFocus"], (z) => z.virtualFocus && r),
      E = b === "inline" || b === "both",
      [D, H] = (0, _e.useState)(E);
    ga(() => {
      E && H(!0);
    }, [E]);
    let A = K(t, "inputValue"),
      F = K(t, ["selectedValue"], (z) => {
        if (v && Array.isArray(z.selectedValue)) return z.selectedValue;
      }),
      j = Array.isArray(F),
      te = (0, _e.useRef)(void 0);
    (0, _e.useEffect)(
      () =>
        me(t, ["selectedValue", "activeId"], (z, k) => {
          te.current = k.selectedValue;
        }),
      [t]
    );
    let O = K(t, ["activeValue", "selectedValue", "activeId"], (z) => {
        if (
          E &&
          D &&
          !(
            z.activeValue &&
            Array.isArray(z.selectedValue) &&
            (z.selectedValue.includes(z.activeValue) || te.current?.includes(z.activeValue))
          )
        )
          return z.activeValue;
      }),
      G = K(t, "renderedItems"),
      se = K(t, "open"),
      _ = K(t, "contentElement"),
      be = K(t, "unstable_placing"),
      De = yb(G, O, P),
      N = (0, _e.useMemo)(() => {
        if (!E || !D) return A;
        if (De) {
          if (cm(A, O)) {
            let z = O?.slice(A.length) || "";
            return A + z;
          }
          return A;
        }
        return O || A;
      }, [E, D, De, O, A]);
    ((0, _e.useEffect)(() => {
      let z = T.current;
      if (!z) return;
      let k = () => H(!0);
      return (
        z.addEventListener("combobox-item-move", k),
        () => {
          z.removeEventListener("combobox-item-move", k);
        }
      );
    }, []),
      (0, _e.useEffect)(() => {
        if (!E || !D || !O || !De || !cm(A, O)) return;
        let z = Ft;
        return (
          queueMicrotask(() => {
            let k = T.current;
            if (!k) return;
            let { start: Q, end: re } = Rn(k),
              X = A.length,
              ie = O.length;
            (jo(k, X, ie),
              (z = () => {
                if (!St(k)) return;
                let { start: Fe, end: lt } = Rn(k);
                Fe === X && lt === ie && jo(k, Q, re);
              }));
          }),
          () => z()
        );
      }, [w, E, D, O, De, A]));
    let L = q(o),
      he = (0, _e.useRef)(null),
      xe = (0, _e.useRef)(void 0),
      ke = (0, _e.useRef)(!1),
      Me = (0, _e.useRef)(!1);
    ((0, _e.useEffect)(() => {
      if (!se || !_) return;
      let z = Dn(_);
      if (!z) return;
      let k = () => {
          ((p.current = !1), (ke.current = !0));
        },
        Q = () => {
          if ((Me.current || (ke.current = !0), !t || !p.current)) return;
          let { activeId: X } = t.getState();
          X !== null && X !== he.current && (p.current = !1);
        },
        re = { passive: !0, capture: !0 };
      return (
        z.addEventListener("wheel", k, re),
        z.addEventListener("touchmove", k, re),
        z.addEventListener("scroll", Q, re),
        () => {
          (z.removeEventListener("wheel", k, !0),
            z.removeEventListener("touchmove", k, !0),
            z.removeEventListener("scroll", Q, !0));
        }
      );
    }, [se, _, t]),
      $(() => {
        ((ke.current = !1), A && (I.current || (p.current = !0)));
      }, [A]),
      $(() => {
        (P !== "always" && se) || (p.current = se);
      }, [P, se]),
      $(() => {
        se || (xe.current = void 0);
      }, [se]));
    let Re = K(t, "resetValueOnSelect");
    (Et(() => {
      let z = p.current;
      if (!t || !se || I.current || (!z && (!Re || ke.current))) return;
      let k = t.getState(),
        { compositeElement: Q, activeId: re, selectElement: X, selectedValue: ie } = k;
      if ((Q && !Zo(Q)) || k.unstable_placing) return;
      let Fe = t.item(re)?.value,
        lt = Fe != null && (Array.isArray(ie) ? ie.includes(Fe) : ie === Fe);
      if (P && z && !(X && !A && lt)) {
        let xt = L(G),
          ft = xt !== void 0 ? xt : (Sb(G) ?? t.first());
        he.current = ft;
        let Dr = ft ?? null,
          vs = t.item(Dr)?.value,
          xu = xe.current;
        Dr !== re || xu?.id !== Dr || xu?.value !== vs
          ? ((xe.current = { id: Dr, value: vs }), t.move(Dr))
          : t.setState("activeValue", vs);
      } else {
        let xt = t.item(re || t.first())?.element;
        xt &&
          "scrollIntoView" in xt &&
          ((Me.current = !0),
          xt.scrollIntoView({ block: "nearest", inline: "nearest" }),
          requestAnimationFrame(() => {
            Me.current = !1;
          }));
      }
    }, [t, se, be, w, A, P, Re, L, G]),
      (0, _e.useEffect)(() => {
        if (!E) return;
        let z = T.current;
        if (!z) return;
        let k = [z, _].filter((re) => !!re),
          Q = (re) => {
            k.every((X) => qt(re, X)) && t?.setInputValue(N);
          };
        for (let re of k) re.addEventListener("focusout", Q);
        return () => {
          for (let re of k) re.removeEventListener("focusout", Q);
        };
      }, [E, _, t, N]));
    let Ve = (z) => z.currentTarget.value.length >= s,
      je = g.onChange,
      Ne = pe(c ?? Ve),
      At = pe(i ?? !t.tag),
      We = q((z) => {
        if ((je?.(z), z.defaultPrevented || !t)) return;
        let k = z.currentTarget,
          { value: Q, selectionStart: re, selectionEnd: X } = k,
          ie = z.nativeEvent;
        if (
          ((p.current = !0), na(ie) && (ie.isComposing && ((p.current = !1), (I.current = !0)), E))
        ) {
          let Fe = ie.inputType === "insertText" || ie.inputType === "insertCompositionText",
            lt = re === Q.length;
          H(Fe && lt);
        }
        if (At(z)) {
          let Fe = Q === t.getState().inputValue;
          (t.setInputValue(Q),
            queueMicrotask(() => {
              jo(k, re, X);
            }),
            E && P && Fe && V());
        }
        (Ne(z) && t.show(), (!P || !p.current) && t.setActiveId(null));
      });
    (0, _e.useEffect)(() => C, []);
    let ht = g.onCompositionStart,
      kt = q((z) => {
        (C(), (p.current = !1), (I.current = !0), ht?.(z));
      }),
      Qe = g.onCompositionEnd,
      Tt = q((z) => {
        ((p.current = !0),
          (I.current = !1),
          Qe?.(z),
          !z.defaultPrevented &&
            P &&
            (C(),
            (M.current = requestAnimationFrame(() => {
              ((M.current = null), !I.current && V());
            }))));
      }),
      gt = g.onMouseDown,
      bt = pe(d ?? (() => t.getState().compositeElementInFocusOrder)),
      _t = pe(h),
      Xe = pe(u ?? Ve),
      Ot = q((z) => {
        (gt?.(z),
          !z.defaultPrevented &&
            (z.button ||
              z.ctrlKey ||
              (t &&
                (bt(z) && t.setActiveId(null),
                _t(z) && t.setInputValue(N),
                Xe(z) && kn(z.currentTarget, "mouseup", t.show)))));
      }),
      Xn = g.onKeyDown,
      Jn = pe(f ?? Ve),
      Y = q((z) => {
        if ((Xn?.(z), z.repeat || (p.current = !1), z.defaultPrevented || !t)) return;
        let { open: k } = t.getState();
        if (k && z.key === "Enter") {
          z.preventDefault();
          return;
        }
        z.ctrlKey ||
          z.altKey ||
          z.shiftKey ||
          z.metaKey ||
          k ||
          ((z.key === "ArrowUp" || z.key === "ArrowDown") &&
            Jn(z) &&
            (z.preventDefault(), t.show()));
      }),
      ce = g.onBlur,
      Ce = q((z) => {
        ((p.current = !1), ce?.(z));
      }),
      Le = Oe(g.id),
      Ue = Cb(b) ? b : void 0,
      Ct = K(t, ["activeId"], (z) => z.activeId === null),
      pn = dt({ disabled: x, "aria-disabled": g["aria-disabled"] }),
      tn = g.composite !== !1,
      [, Zn] = ti(tn ? null : t.setCompositeElement),
      vt = K(t, j ? ["compositeElement"] : [], (z) => (j ? z.compositeElement : null));
    ((g = ge(
      g,
      (z) =>
        !v || !Array.isArray(F) || (tn && !vt)
          ? z
          : (0, Ir.jsxs)(Ir.Fragment, {
              children: [
                z,
                F.map((k, Q) =>
                  (0, Ir.jsx)(
                    "input",
                    { type: "hidden", name: v, form: R, disabled: pn, value: k },
                    Q
                  )
                ),
              ],
            }),
      [v, R, pn, tn, vt, F]
    )),
      (g = {
        role: "combobox",
        "aria-autocomplete": Ue,
        "aria-haspopup": sn(_, "listbox"),
        "aria-expanded": se,
        "aria-controls": _?.id,
        "data-active-item": Ct || void 0,
        value: N,
        ...g,
        id: Le,
        name: j ? void 0 : v,
        form: R,
        disabled: x,
        ref: ae(T, t.setInputElement, tn ? void 0 : Zn, g.ref),
        onChange: We,
        onCompositionStart: kt,
        onCompositionEnd: Tt,
        onMouseDown: Ot,
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
        moveOnKeyPress: (z) => (Wo(m, z) ? !1 : (E && H(!0), !0)),
      })),
      { autoComplete: "off", ...g }
    );
  }),
  rs = U(function (t) {
    let n = wb(t);
    return J(xb, n);
  });
var os = B(oe(), 1),
  zc = B(de(), 1);
var Eb = "div";
function Ib(e, t) {
  if (t != null) return e == null ? !1 : Array.isArray(e) ? e.includes(t) : e === t;
}
function Pb(e) {
  return Ms(e) ?? "option";
}
var Mb = Z(function ({
    store: t,
    value: n,
    hideOnClick: r,
    setValueOnClick: o,
    selectValueOnClick: i = !0,
    resetValueOnSelect: s,
    focusOnHover: c,
    moveOnKeyPress: a = !0,
    preventScrollOnKeyDown: u,
    getItem: l,
    ...f
  }) {
    let d = mr();
    ((t = t || d), fe(t, !1));
    let h = Oe(f.id),
      m = (0, os.useContext)(yi),
      b = m?.store === t,
      {
        resetValueOnSelectState: v,
        multiSelectable: R,
        selected: x,
        autoFocusSelected: g,
        selectElement: y,
        contentElement: S,
      } = Fn(t, ["selectedValue"], {
        resetValueOnSelectState: "resetValueOnSelect",
        multiSelectable(_) {
          return Array.isArray(_.selectedValue);
        },
        selected(_) {
          return Ib(_.selectedValue, n);
        },
        autoFocusSelected(_) {
          return n == null
            ? !1
            : Array.isArray(_.selectedValue)
              ? _.selectedValue[_.selectedValue.length - 1] === n
              : _.selectedValue === n;
        },
        selectElement: "selectElement",
        contentElement: "contentElement",
      }),
      T = !!y,
      w = !!y,
      V = dt(f),
      p = (0, os.useCallback)(
        (_) => {
          let be = { ..._, value: w && V ? void 0 : n };
          return l ? l(be) : be;
        },
        [w, V, n, l]
      );
    ((o = o ?? (!w && !R)), (r = r ?? (n != null && !R)), (u = u ?? w));
    let I = b ? m?.role : sn(S),
      M = Pb(typeof I == "string" ? I : void 0),
      C = f.onClick,
      P = pe(o),
      E = pe(i),
      D = pe(s ?? v),
      H = pe(r),
      A = q((_) => {
        (C?.(_),
          !_.defaultPrevented &&
            (Uo(_) ||
              qo(_) ||
              (n != null &&
                (E(_) &&
                  (D(_) && t?.resetInputValue(),
                  t?.setSelectedValue((be) =>
                    Array.isArray(be)
                      ? be.includes(n)
                        ? be.filter((De) => De !== n)
                        : [...be, n]
                      : n
                  )),
                P(_) && t?.setInputValue(n)),
              H(_) && t?.hide())));
      }),
      F = f.onKeyDown,
      j = q((_) => {
        if ((F?.(_), _.defaultPrevented)) return;
        let be = t?.getState().compositeElement;
        if (!be || St(be)) return;
        let De = _.key.length === 1 && !_.ctrlKey && !_.metaKey,
          N = (tr() ? _.metaKey : _.ctrlKey) && _.key.toLowerCase() === "v",
          L = _.key === "Backspace" || _.key === "Delete";
        if (De || N || L) {
          if (be === y) return;
          if (et(be)) {
            (queueMicrotask(() => be.focus()), t?.setInputValue(be.value));
            return;
          }
          (be.focus(), "value" in be && typeof be.value == "string" && t?.setInputValue(be.value));
        }
      });
    ((w || R) && x != null && (f = { "aria-selected": x, ...f }),
      (f = ge(
        f,
        (_) =>
          (0, zc.jsx)(gl.Provider, {
            value: n,
            children: (0, zc.jsx)(bl.Provider, { value: x ?? !1, children: _ }),
          }),
        [n, x]
      )));
    let te = T ? g : void 0;
    ((f = { role: M, children: n, ...f, id: h, onClick: A, onKeyDown: j }),
      f.autoFocus === void 0 &&
        te !== void 0 &&
        ((f.autoFocus = !1), (f["data-autofocus"] = te || void 0)));
    let O = pe(a),
      G = ns(t);
    f = Br({
      store: t,
      unstable_scrollIntoView: G,
      ...f,
      getItem: p,
      preventScrollOnKeyDown: u,
      moveOnKeyPress: (_) => {
        if (!O(_)) return !1;
        let be = new Event("combobox-item-move");
        return (t?.getState().compositeElement?.dispatchEvent(be), !0);
      },
    });
    let se = pe(c ?? w);
    return (
      (f = bo({
        store: t,
        ...f,
        focusOnHover(_) {
          return !t.getState().open || !se(_) ? !1 : t.getState().open;
        },
      })),
      f
    );
  }),
  is = Ut(
    U(function (t) {
      let n = Mb(t);
      return J(Eb, n);
    })
  );
var Qt = B(oe(), 1),
  yo = B(de(), 1);
var Rb = "div",
  Db = Z(function ({ store: t, alwaysVisible: n, ...r }) {
    let o = mr(!0),
      i = Xs();
    t = t || i;
    let s = !!t && t === o;
    fe(t, !1);
    let c = r.onFocus,
      a = q((P) => {
        if ((c?.(P), P.defaultPrevented || !Te(P))) return;
        let E = t.getState().compositeElement;
        if (!E || !Ke(E)) return;
        let D = P.currentTarget;
        queueMicrotask(() => {
          Tn(D) === D && E.focus();
        });
      }),
      u = (0, Qt.useRef)(null),
      l = Oe(r.id),
      f = K(t, "mounted"),
      d = an(f, r.hidden, n),
      h = d ? { ...r.style, display: "none" } : r.style,
      m = K(t, ["selectedValue"], (P) => Array.isArray(P.selectedValue)),
      b = Ls(u, "role", r.role),
      v = (0, Qt.useMemo)(() => ({ store: t, role: b }), [t, b]),
      R = ((b === "listbox" || b === "tree" || b === "grid") && m) || void 0,
      [x, g] = (0, Qt.useState)(!1),
      y = K(t, "contentElement"),
      S = (0, Qt.useContext)(Js),
      T = (0, Qt.useState)(),
      [w, V] = S || T,
      p = (0, Qt.useMemo)(() => [w, V], [w, V]);
    ($(() => {
      if (!f) return;
      let P = u.current;
      if (!P || y !== P) return;
      let E = () => {
          g(!!P.querySelector("[data-combobox-list]"));
        },
        D = new MutationObserver(E);
      return (D.observe(P, { subtree: !0, childList: !0 }), E(), () => D.disconnect());
    }, [f, y]),
      x || (r = { role: "listbox", "aria-multiselectable": R, ...r }),
      (r = ge(
        r,
        (P) =>
          (0, yo.jsx)(hl, {
            value: t,
            children: (0, yo.jsx)(Js.Provider, {
              value: p,
              children: (0, yo.jsx)(bi.Provider, {
                value: V,
                children: (0, yo.jsx)(yi.Provider, { value: v, children: P }),
              }),
            }),
          }),
        [t, v, p]
      )));
    let I = l && (!o || !s) ? t.setContentElement : null,
      M = K(t, ["labelElement", "selectLabelElement"], (P) =>
        w ? null : P.selectLabelElement || P.labelElement
      );
    Ls(M, "id");
    let C = w || M?.id;
    return (
      (r = {
        "data-combobox-list": "",
        "aria-labelledby": r["aria-label"] != null ? void 0 : C,
        hidden: d,
        ...r,
        id: l,
        onFocus: a,
        ref: ae(I, u, r.ref),
        style: h,
        tabIndex: -1,
      }),
      r
    );
  }),
  ss = U(function (t) {
    let n = Db(t);
    return J(Rb, n);
  });
var Kc = B(oe(), 1),
  TP = (0, Kc.createContext)(null),
  OP = (0, Kc.createContext)(null),
  Co = qe([xn], [Gt]),
  um = Co.useContext,
  LP = Co.useScopedContext,
  FP = Co.useProviderContext,
  HP = Co.ContextProvider,
  VP = Co.ScopedContextProvider;
var Ab = nr() && Rs();
function am({ tag: e, ...t } = {}) {
  let n = Cn(t.store, ci(e, ["value", "rtl"])),
    r = ee(t.defaultInputValue, t.defaultValue);
  ({ ...t });
  let o = e?.getState(),
    i = n?.getState(),
    s = ee(t.activeId, i?.activeId, t.defaultActiveId, null),
    c = ar({
      ...t,
      activeId: s,
      compositeElementInFocusOrder: ee(
        t.compositeElementInFocusOrder,
        t.includesBaseElement,
        i?.compositeElementInFocusOrder,
        i?.includesBaseElement,
        !0
      ),
      orientation: ee(t.orientation, i?.orientation, "vertical"),
      focusLoop: ee(t.focusLoop, i?.focusLoop, !0),
      focusWrap: ee(t.focusWrap, i?.focusWrap, !0),
      virtualFocus: ee(t.virtualFocus, i?.virtualFocus, !0),
    }),
    a = Sr({ ...t, placement: ee(t.placement, i?.placement, "bottom-start") }),
    u = ee(t.inputValue, t.value, i?.inputValue, i?.value, r, ""),
    l = ee(t.selectedValue, i?.selectedValue, o?.values, t.defaultSelectedValue, ""),
    f =
      t.selectedValue === void 0 &&
      i?.selectedValue === void 0 &&
      o?.values === void 0 &&
      t.defaultSelectedValue === void 0,
    d = Array.isArray(l),
    h = {
      ...c.getState(),
      ...a.getState(),
      inputValue: u,
      value: u,
      selectedValue: l,
      resetValueOnSelect: ee(t.resetValueOnSelect, i?.resetValueOnSelect, d),
      resetValueOnHide: ee(t.resetValueOnHide, i?.resetValueOnHide, d && !e),
      selectOnMove: ee(t.selectOnMove, i?.selectOnMove, !1),
      activeValue: i?.activeValue,
      inputElement: ee(i?.inputElement, null),
      labelElement: ee(i?.labelElement, null),
      selectElement: ee(i?.selectElement, null),
      selectLabelElement: ee(i?.selectLabelElement, null),
    },
    m = Ge(h, c, a, n);
  ye(m, () =>
    Ee(
      me(m, ["inputValue"], (w) => {
        m.setState("value", w.inputValue);
      }),
      me(m, ["value"], (w) => {
        m.setState("inputValue", w.value);
      })
    )
  );
  let b = !1,
    v = new Set();
  (t.focusLoop === void 0 && i?.focusLoop === void 0 && v.add("focusLoop"),
    t.focusWrap === void 0 && i?.focusWrap === void 0 && v.add("focusWrap"),
    t.compositeElementInFocusOrder === void 0 &&
      t.includesBaseElement === void 0 &&
      i?.compositeElementInFocusOrder === void 0 &&
      i?.includesBaseElement === void 0 &&
      v.add("compositeElementInFocusOrder"),
    t.resetValueOnSelect === void 0 &&
      i?.resetValueOnSelect === void 0 &&
      v.add("resetValueOnSelect"));
  let R = h.compositeElement === h.selectElement ? h.selectElement : null,
    x = h.selectElement || h.compositeElement || h.disclosureElement,
    g = h.anchorElement === x ? h.anchorElement : null;
  (ye(m, () =>
    me(m, ["compositeElement", "selectElement"], (w) => {
      if (!(!w.selectElement && !R)) {
        if (w.compositeElement && w.compositeElement === w.selectElement) {
          R = w.selectElement;
          return;
        }
        if (w.compositeElement && w.compositeElement !== R) {
          R = null;
          return;
        }
        ((R = w.selectElement), m.setState("compositeElement", R));
      }
    })
  ),
    ye(m, () =>
      me(m, ["selectElement"], (w) => {
        if (!w.selectElement) return;
        let {
          focusLoop: V,
          focusWrap: p,
          compositeElementInFocusOrder: I,
          resetValueOnSelect: M,
        } = m.getState();
        return (
          v.has("focusLoop") && c.setState("focusLoop", !1),
          v.has("focusWrap") && c.setState("focusWrap", !1),
          v.has("compositeElementInFocusOrder") && c.setState("compositeElementInFocusOrder", !1),
          v.has("resetValueOnSelect") && m.setState("resetValueOnSelect", !0),
          () => {
            let C = m.getState();
            (v.has("focusLoop") && !C.focusLoop && c.setState("focusLoop", V),
              v.has("focusWrap") && !C.focusWrap && c.setState("focusWrap", p),
              v.has("compositeElementInFocusOrder") &&
                !C.compositeElementInFocusOrder &&
                c.setState("compositeElementInFocusOrder", I),
              v.has("resetValueOnSelect") &&
                C.resetValueOnSelect &&
                m.setState("resetValueOnSelect", M));
          }
        );
      })
    ),
    ye(m, () =>
      me(m, ["anchorElement", "compositeElement", "disclosureElement", "selectElement"], (w) => {
        if (w.anchorElement && w.anchorElement !== g) {
          g = null;
          return;
        }
        ((g = w.selectElement || w.compositeElement || w.disclosureElement),
          m.setState("anchorElement", g));
      })
    ),
    ye(m, () =>
      me(m, ["items", "selectedValue", "selectElement"], (w, V) => {
        if (f) {
          if (w.selectedValue !== V.selectedValue) {
            f = !1;
            return;
          }
          w.selectElement &&
            queueMicrotask(() => {
              if (!f) return;
              let p = m.getState();
              if (!p.selectElement) return;
              let I = p.items.find((M) => !M.disabled && M.value != null);
              I?.value != null && ((f = !1), m.setState("selectedValue", I.value));
            });
        }
      })
    ),
    Ab &&
      ye(m, () =>
        me(m, ["virtualFocus"], () => {
          m.setState("virtualFocus", !1);
        })
      ),
    ye(m, () => {
      if (e)
        return Ee(
          me(m, ["selectedValue"], (w) => {
            Array.isArray(w.selectedValue) && e.setValues(w.selectedValue);
          }),
          me(e, ["values"], (w) => {
            m.setState("selectedValue", w.values);
          })
        );
    }),
    ye(m, () =>
      me(m, ["resetValueOnHide", "mounted"], (w) => {
        w.resetValueOnHide && (w.mounted || m.setState("inputValue", u));
      })
    ),
    ye(m, () =>
      me(m, ["open"], (w) => {
        if (w.open) {
          b = !0;
          return;
        }
        ((b = !1), m.setState("activeId", s), m.setState("moves", 0));
      })
    ),
    ye(m, () =>
      me(m, ["moves", "activeId"], (w, V) => {
        (w.moves !== V.moves && (b = !1),
          w.activeId !== V.activeId && (b = !1),
          w.moves === V.moves && m.setState("activeValue", void 0));
      })
    ),
    ye(m, () =>
      yn(m, ["moves", "renderedItems"], (w, V) => {
        if (w.moves === V.moves) return;
        let { activeId: p } = m.getState(),
          I = c.item(p);
        m.setState("activeValue", I?.value);
      })
    ),
    ye(m, () =>
      me(m, ["items", "mounted", "open", "selectedValue", "selectElement"], (w) => {
        if (!w.selectElement || (w.mounted && !b)) return;
        let V = Array.isArray(w.selectedValue) ? w.selectedValue : [w.selectedValue],
          p = V[V.length - 1];
        if (p == null) return;
        let I = w.items.find((M) => !M.disabled && M.value === p);
        I && ((b = !1), m.setState("activeId", I.id));
      })
    ),
    ye(m, () =>
      yn(m, ["selectOnMove", "moves"], (w) => {
        let { activeId: V, open: p, selectedValue: I, selectElement: M } = m.getState();
        if (!M || (!w.selectOnMove && p) || Array.isArray(I) || !w.moves || !V) return;
        let C = c.item(V);
        !C || C.disabled || C.value == null || m.setState("selectedValue", C.value);
      })
    ));
  let y = (w) => {
      m.setState("inputValue", w);
    },
    S = () => y(h.inputValue),
    T = (w, V) => {
      (v.delete(w),
        w === "includesBaseElement" && v.delete("compositeElementInFocusOrder"),
        w === "selectedValue" && (f = !1),
        m.setState(w, V));
    };
  return {
    ...a,
    ...c,
    ...m,
    setState: T,
    tag: e,
    setInputValue: y,
    resetInputValue: S,
    setValue: y,
    resetValue: S,
    setSelectedValue: (w) => T("selectedValue", w),
    setInputElement: (w) => m.setState("inputElement", w),
    setLabelElement: (w) => m.setState("labelElement", w),
    setSelectElement: (w) => m.setState("selectElement", w),
    setSelectLabelElement: (w) => m.setState("selectLabelElement", w),
  };
}
function Tb(e) {
  let t = um();
  return ((e = { ...e, tag: e.tag !== void 0 ? e.tag : t }), Zs(e));
}
function Ob(e, t, n) {
  Et(t, [n.tag, t]);
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
function _c(e = {}) {
  e = Tb(e);
  let [t, n] = ct(am, e);
  return Ob(t, n, e);
}
var lm = B(de(), 1);
function cs(e = {}) {
  let t = _c(e);
  return (0, lm.jsx)(pl, { value: t, children: e.children });
}
var Ye = B(oe(), 1);
var us = 800,
  fm = 0.9,
  mm = 4,
  dm = Lt.values.menuPadding * 2,
  pm = -Lt.values.menuPadding,
  hm = 40,
  Lb = 4,
  gm = Lt.values.avatarSize + Lb * 2,
  jc = 1,
  bm = "mu6ry6k",
  vm = "m1irwbe6",
  xm = "mqwxsfx",
  ym = "my9bzvl",
  Cm = ve(Nu, "ihvwyj9"),
  Sm = "s1aq9ud6",
  wm = "b1r3i2ed",
  Em = "adwpnn1",
  Im = "ak05by6",
  Pm = "d1ide4av",
  qc = "bqsdyuc",
  Mm = "d10bnj1v",
  Rm = "l1lrhh4u",
  Dm = "c1fc9sk1",
  Uc = "cfbiwg1",
  Gn = "l154ipfz",
  $c = ve(Gn, "l1e3rcy1"),
  Gc = "mxzzb2k",
  Yc = "m8c9l16",
  Am = ve(Yc, "m1t22t6v"),
  km = "me5hedy",
  Tm = "msnmoi2",
  Om = "m19qrosd",
  Lm = ve(Gn, "m1vev1e1"),
  Fm = "ssbtwy1",
  Fb = "m1d3tuh7",
  Hm = ve(Fb, "m1nw69yk"),
  Vm = "a5l2dp5",
  x0 = "i4c5y86",
  Nm = "mz1j6h7",
  Wm = "w6v9qln",
  Bm = "f1pch1jc",
  zm = "s1eng4sn",
  Km = "s17nx5wn",
  _m = "s12bxrva",
  jm = "e1j21kss",
  qm = "a1s6bdnk",
  as = "m1skb7s7",
  ls = "m18hm58t";
var le = B(oe(), 1),
  Jm = B(de(), 1);
var Zm = B(To(), 1),
  Hb = "div",
  $m = (0, le.createContext)(null),
  Vb = { current: null };
function Gm() {
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
function Nb(e, t, n) {
  let r = 0,
    o = Pr(e) - 1;
  for (; r <= o;) {
    let i = ((r + o) / 2) | 0,
      s = n(i);
    if (s === t) return i;
    s < t ? (r = i + 1) : (o = i - 1);
  }
  return r > 0 ? r - 1 : 0;
}
function Pr(e) {
  return typeof e == "number" ? e : e.length;
}
function Zc(e) {
  return !e || typeof e != "object" ? { value: e } : e;
}
function Mr(e, t, n) {
  if ((fe(n, "CollectionRenderer must be given an `id` prop."), e && typeof e == "object")) {
    let r = Zc(e);
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
  let r = Zc(e),
    o = t ? "width" : "height",
    i = r.style;
  if (i) {
    let u = i[o];
    if (typeof u == "number") return u;
  }
  let s = r.items,
    c =
      !r.orientation ||
      (t && r.orientation === "horizontal") ||
      (!t && r.orientation === "vertical");
  if (s?.length && c) {
    let u = (r.paddingStart ?? r.padding ?? 0) + (r.paddingEnd ?? r.padding ?? 0),
      l = (r.gap ?? 0) * (s.length - 1) + u;
    if (r.itemSize) return l + r.itemSize * s.length;
    let f = s.reduce((d, h) => d + Eo(h, t), l);
    if (f !== l) return f;
  }
  let a = n !== !1 ? r.element || n : null;
  if (a?.isConnected) return a.getBoundingClientRect()[o];
  if (s?.length && !c) {
    let u = s.reduce((l, f) => Math.max(l, Eo(f, t)), 0);
    if (u) return u;
  }
  return 0;
}
function Wb(e) {
  let t = Pr(e.items),
    n = 0,
    r = e.estimatedItemSize,
    o = (i) => {
      let s = n;
      ((n = n + 1), (r = (r * s + i) / n));
    };
  for (let i = 0; i < t; i += 1) {
    let s = wo(e.items, i),
      c = Mr(s, i, e.baseId),
      a = e.data.get(c),
      u = e.elements.get(c),
      l = Eo(s, e.horizontal, u);
    l ? o(l) : a?.rendered && o(a.end - a.start);
  }
  return r;
}
function Jc(e, t) {
  return "scrollX" in e ? (t ? e.scrollX : e.scrollY) : t ? e.scrollLeft : e.scrollTop;
}
function Xc(e) {
  let { defaultView: t, documentElement: n } = e.ownerDocument;
  return e === n ? t : e;
}
function Ym(e, t) {
  if (t === void 0) return Dn(e);
  if (typeof t == "function") return t(e);
  let n = t;
  return ze(n) ? n : t && "current" in t ? t.current : t;
}
function Xm() {
  return null;
}
function Bb(e, t, n) {
  let [r, o] = (0, le.useState)(null),
    i = (0, le.useRef)(null),
    s = (0, le.useRef)(null),
    c = (0, le.useRef)(!1),
    a = (0, le.useRef)(e),
    u = (0, le.useRef)({ revalidated: !1, resolve: Xm }),
    l = (0, le.useMemo)(
      () => ({
        disable: () => {
          u.current = { revalidated: !0, resolve: Xm };
        },
        invalidate: () => {
          u.current = { ...u.current, revalidated: !1 };
        },
        revalidate: () => {
          let { revalidated: d, resolve: h } = u.current;
          if (d) return;
          u.current = { revalidated: !0, resolve: h };
          let m = h();
          ((i.current = m), m !== s.current && ((s.current = m), o(m)));
        },
        setResolve: (d) => {
          u.current = { revalidated: !1, resolve: d };
        },
      }),
      []
    ),
    f = () => {
      let d = e?.current;
      return d ? Ym(d, t) : null;
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
        (n?.revalidate(), a.current !== e && ((a.current = e), (c.current = !1)));
        let h = e?.current;
        h
          ? c.current || ((i.current = Ym(h, t)), (c.current = !0))
          : ((c.current = !1), (i.current = null));
      } else {
        ((c.current = !1), l.revalidate());
        return;
      }
      let d = i.current;
      d !== r && o(d);
    }),
    [r, i, l]
  );
}
function zb(e, t, n) {
  let r = Be(e),
    o = r?.document.documentElement,
    i = e.getBoundingClientRect(),
    s = n ? i.left : i.top;
  if (t === o) return Jc(r, n) + s;
  let c = t.getBoundingClientRect(),
    a = n ? c.left : c.top,
    u = Jc(t, n);
  return s - a + u;
}
function So(e, t, n) {
  let r = Jc(t, n),
    o = zb(e, t, n),
    i = n ? t.clientWidth : t.clientHeight,
    s = r - o;
  return { start: s, end: s + i };
}
function Kb(e) {
  let t = Pr(e.items),
    n = e.paddingStart + e.paddingEnd;
  if (!t) return n;
  let r = t - 1,
    o = r * e.gap;
  if (e.itemSize != null) return t * e.itemSize + o + n;
  let i = t * e.estimatedItemSize + o + n;
  if (!e.baseId) return i;
  let s = Mr(wo(e.items, r), r, e.baseId),
    c = e.data.get(s);
  if (c?.end) return c.end + e.paddingEnd;
  if (!Array.isArray(e.items)) return i;
  let a = e.items.reduce((u, l) => u + Eo(l, e.horizontal, !1), 0);
  return a ? a + o + n : i;
}
function _b(e) {
  let t = Pr(e.items),
    n,
    r = e.paddingStart,
    o = Wb(e);
  for (let i = 0; i < t; i += 1) {
    let s = wo(e.items, i),
      c = Mr(s, i, e.baseId),
      a = e.data.get(c),
      u = a?.rendered ?? !1,
      l = (d, h = u) => {
        i > 0 && (r += e.gap);
        let m = r + d;
        (Vo(a, { index: i, rendered: h, start: r, end: m }) ||
          (n || (n = new Map(e.data)), n.set(c, { index: i, rendered: h, start: r, end: m })),
          (r = m));
      },
      f = Eo(s, e.horizontal, e.elements.get(c));
    f ? l(f, !0) : a?.rendered ? l(a.end - a.start, !0) : l(o);
  }
  return n;
}
function Qc({
  store: e,
  items: t,
  initialItems: n = 0,
  gap: r = 0,
  itemSize: o,
  estimatedItemSize: i = 40,
  overscan: s,
  orientation: c,
  padding: a = 0,
  paddingStart: u = a,
  paddingEnd: l = a,
  persistentIndices: f,
  scrollElement: d,
  renderOnScroll: h = !0,
  renderOnResize: m = !!h,
  children: b,
  ...v
}) {
  let R = oi(),
    x = e || R,
    g = K(x, ["items"], (Y) => t ?? Y?.items);
  fe(g != null, !1);
  let y = (0, le.useContext)($m),
    S = x && y?.store !== x ? null : y,
    T = S?.childrenData,
    w = c ?? S?.orientation ?? "vertical",
    V = s ?? S?.overscan ?? 1,
    p = d === void 0 ? S?.scroller : void 0,
    I = d === void 0 ? S?.scrollerRef : void 0,
    M = d === void 0 ? S?.scrollerController : void 0,
    C = (0, le.useRef)(null),
    P = Oe(v.id),
    E = w === "horizontal",
    D = (0, le.useMemo)(() => new Map(), []),
    [H, A] = or(),
    F = (0, le.useCallback)(
      (Y, ce, Ce) =>
        _b({
          baseId: ce,
          items: Ce,
          data: Y,
          gap: r,
          elements: D,
          horizontal: E,
          paddingStart: u,
          estimatedItemSize: i,
        }),
      [r, D, E, u, i]
    ),
    [j, te] = (0, le.useState)(() => {
      if (!n) return [];
      let Y = Pr(g),
        ce = Math.min(Y, Math.abs(n));
      return Array.from({ length: ce }, (Ce, Le) => (n < 0 ? Y - Le - 1 : Le));
    }),
    O = (0, le.useMemo)(() => {
      if (!f) return j;
      let Y = j.slice();
      for (let ce of f) ce < 0 || Y.includes(ce) || Y.push(ce);
      return (Y.sort((ce, Ce) => ce - Ce), Vo(j, Y) ? j : Y);
    }, [j, f]),
    [G, se] = (0, le.useState)(() => {
      if (!P) return new Map();
      let Y = T?.get(P) || new Map();
      return o != null || !g ? Y : F(Y, P, g) || Y;
    }),
    _ = (0, le.useMemo)(
      () =>
        Kb({
          baseId: P,
          items: g,
          data: G,
          gap: r,
          horizontal: E,
          itemSize: o,
          estimatedItemSize: i,
          paddingStart: u,
          paddingEnd: l,
        }),
      [P, g, G, r, E, o, i, u, l]
    );
  ((0, le.useEffect)(() => {
    P && T?.set(P, G);
  }, [P, T, G]),
    (0, le.useEffect)(() => {
      if (o != null || !P || !g) return;
      let Y = F(G, P, g);
      Y && se(Y);
    }, [H, o, P, g, G, F]));
  let [be, De, N] = Bb(g && p === void 0 ? C : null, d, M),
    L = d === null ? null : p === void 0 ? be : p,
    he = d === null ? Vb : I === void 0 ? De : I,
    xe = d === void 0 ? M : d === null ? void 0 : N,
    ke = (0, le.useRef)({ start: 0, end: 0 }),
    Me = (0, le.useCallback)(() => {
      let Y = ke.current;
      if ((xe?.revalidate(), he.current !== L || !L || !g || !P || !Y.end || (!G.size && !o)))
        return;
      let ce = Pr(g),
        Ce = (vt, hn = "start") => {
          if (o) {
            let k = o * vt + r * vt + u;
            return hn === "start" ? k : k + o;
          }
          let z = Mr(wo(g, vt), vt, P);
          return G.get(z)?.[hn] ?? 0;
        },
        Le = Nb(g, Y.start, Ce),
        Ue = Le;
      for (; Ue < ce && Ce(Ue) < Y.end;) Ue += 1;
      let Ct = Ue - Le ? V : 0,
        pn = Math.max(Le - Ct, 0),
        tn = Math.min(Ue + Ct, ce),
        Zn = Array.from({ length: tn - pn }, (vt, hn) => hn + pn);
      te((vt) => (Vo(vt, Zn) ? vt : Zn));
    }, [H, L, he, xe, g, P, G, o, r, u, V]);
  (0, le.useEffect)(Me, [Me]);
  let Re = q(Me);
  (0, le.useEffect)(() => {
    let Y = C.current;
    Y && L && ((ke.current = So(Y, L, E)), Re());
  }, [L, E, Re]);
  let Ve = !!h,
    je = pe(h);
  (0, le.useEffect)(() => {
    if (!Ve) return;
    let Y = C.current;
    if (!Y || !L) return;
    let ce = Xc(L);
    if (!ce) return;
    let Ce = Gm(),
      Le = (Ue) => {
        Ce.run(() => {
          je(Ue) && ((ke.current = So(Y, L, E)), Re());
        });
      };
    return (
      ce.addEventListener("scroll", Le, { passive: !0 }),
      () => {
        (Ce.cancel(), ce.removeEventListener("scroll", Le));
      }
    );
  }, [Ve, L, je, E, Re]);
  let Ne = !!m,
    At = pe(m);
  ((0, le.useEffect)(() => {
    if (!Ne) return;
    let Y = C.current;
    if (!Y || !L) return;
    let ce = Xc(L);
    if (!ce) return;
    let Ce = Gm();
    if (ce === L) {
      if (typeof ResizeObserver != "function") return;
      let Ue = !0,
        Ct = new ResizeObserver(() => {
          if (Ue) {
            Ue = !1;
            return;
          }
          Ce.run(() => {
            At(L) && ((ke.current = So(Y, L, E)), Re());
          });
        });
      return (
        Ct.observe(L),
        () => {
          (Ce.cancel(), Ct.disconnect());
        }
      );
    }
    let Le = () => {
      Ce.run(() => {
        At(L) && ((ke.current = So(Y, L, E)), Re());
      });
    };
    return (
      ce.addEventListener("resize", Le, { passive: !0 }),
      () => {
        (Ce.cancel(), ce.removeEventListener("resize", Le));
      }
    );
  }, [Ne, L, At, E, Re]),
    (0, le.useEffect)(() => {
      if (typeof IntersectionObserver != "function") return;
      let Y = C.current;
      if (!Y || !L) return;
      let ce = Xc(L);
      if (!ce) return;
      let Ce = new IntersectionObserver(
        () => {
          ((ke.current = So(Y, L, E)), Re());
        },
        { root: L === ce ? L : null }
      );
      return (
        Ce.observe(Y),
        () => {
          Ce.disconnect();
        }
      );
    }, [L, E, Re]));
  let We = (0, le.useMemo)(() => {
    if (typeof ResizeObserver == "function")
      return new ResizeObserver(() => {
        (0, Zm.flushSync)(A);
      });
  }, [A]);
  (0, le.useEffect)(() => {
    for (let Y of D.values()) We?.observe(Y);
    return () => We?.disconnect();
  }, [We, D]);
  let ht = (0, le.useCallback)(
      (Y) => {
        if (!Y || o) return;
        let ce = D.get(Y.id);
        (ce && ce !== Y && We?.unobserve(ce), A(), D.set(Y.id, Y), We?.observe(Y));
      },
      [o, D, A, We]
    ),
    kt = (0, le.useCallback)(
      (Y, ce) => {
        let Ce = Mr(Y, ce, P),
          Le = o ? u + o * ce + r * ce : (G.get(Ce)?.start ?? 0),
          Ue = {
            id: Ce,
            ref: ht,
            index: ce,
            style: { position: "absolute", left: E ? Le : 0, top: E ? 0 : Le },
          };
        if ((o && (Ue.style[E ? "width" : "height"] = o), Y == null)) return Ue;
        let Ct = Zc(Y);
        return { ...Ct, ...Ue, style: { ...Ct.style, ...Ue.style } };
      },
      [P, G, o, u, r, E, ht]
    ),
    Qe = (0, le.useMemo)(
      () =>
        O.map((Y) => {
          if (Y < 0) return;
          let ce = wo(g, Y);
          if (ce) return kt(ce, Y);
        }).filter((Y) => Y != null),
      [g, O, kt]
    );
  (0, le.useEffect)(() => {
    let Y = o ? new Set() : new Set(Qe.map((ce) => ce.id));
    for (let [ce, Ce] of D) Y.has(ce) || (We?.unobserve(Ce), D.delete(ce));
  }, [Qe, o, D, We]);
  let Tt = Qe?.map((Y) => b?.(Y)),
    gt = v.style,
    bt = E ? "width" : "height",
    _t = (0, le.useMemo)(
      () => ({ flex: "none", position: "relative", [bt]: _, ...gt }),
      [gt, bt, _]
    ),
    Xe = (0, le.useMemo)(() => new Map(), []),
    Ot = d === void 0 ? p : L,
    Xn = d === void 0 ? I : he,
    Jn = (0, le.useMemo)(
      () => ({
        store: x,
        orientation: w,
        overscan: V,
        scroller: Ot,
        scrollerRef: Xn,
        scrollerController: xe,
        childrenData: Xe,
      }),
      [x, w, V, Ot, Xn, xe, Xe]
    );
  return (
    (v = ge(v, (Y) => (0, Jm.jsx)($m.Provider, { value: Jn, children: Y }), [Jn])),
    (v = { id: P, ...v, style: _t, ref: ae(C, v.ref) }),
    { ...v, children: Tt }
  );
}
var E0 = U(function (t) {
  let n = Qc(t);
  return J(Hb, n);
});
var eu = Mr;
var Yn = B(oe(), 1);
var jb = "div";
function fs(e) {
  return !e || typeof e != "object" ? { value: e } : e;
}
function Qm(e) {
  return e
    ? typeof e == "number"
      ? Array.from({ length: e }, (t, n) => n + 1)
      : e.reduce((t, n, r) => {
          let o = t[r - 1] ?? 0,
            i = fs(n);
          return i.items
            ? ((t[r] = o + (Qm(i.items)[i.items.length - 1] ?? 0)), t)
            : ((t[r] = o + 1), t);
        }, [])
    : [0];
}
function tu(e, t = 1) {
  for (let n = t > 0 ? 0 : e.length - 1; n >= 0 && n < e.length; n += t) {
    let r = e[n],
      o = fs(r);
    if ((o.items && tu(o.items, t) !== -1) || !o.disabled) return n;
  }
  return -1;
}
function qb(e) {
  return tu(e, -1);
}
function ed(e, t, n) {
  return e.findIndex((r, o) => {
    let i = eu(r, o, n);
    if (i === t) return !0;
    let s = fs(r);
    return s.items?.length ? ed(s.items, t, i) !== -1 : !1;
  });
}
function td(e, t, n) {
  let r = { index: -1, length: -1 };
  return (
    e.forEach((o, i) => {
      let s = eu(o, i, n),
        c = t.startsWith(`${s}/`) ? s.length : -1,
        a = fs(o);
      if (a.items?.length) {
        let u = td(a.items, t, s);
        c = Math.max(c, u.length);
      }
      c > r.length && ((r.index = i), (r.length = c));
    }),
    r
  );
}
function Ub(e, t, n) {
  let r = ed(e, t, n);
  return r !== -1 ? r : td(e, t, n).index;
}
function $b({
  store: e,
  orientation: t,
  persistentIndices: n,
  children: r,
  "aria-setsize": o,
  "aria-posinset": i = 1,
  ...s
}) {
  let c = $t();
  e = e || c;
  let a = K(
      e,
      ["orientation"],
      (x) => t ?? (x?.orientation === "both" ? "vertical" : x?.orientation)
    ),
    u = K(e, ["mounted", "items"], (x) =>
      x ? ("mounted" in x && !x.mounted ? 0 : (s.items ?? x.items)) : s.items
    ),
    l = Oe(s.id),
    f = (0, Yn.useMemo)(() => Qm(u), [u]),
    d = (0, Yn.useMemo)(() => o ?? f[f.length - 1] ?? 0, [o, f]),
    h = (0, Yn.useMemo)(() => (u ? (typeof u == "number" ? 0 : u.length ? tu(u) : -1) : -1), [u]),
    m = (0, Yn.useMemo)(
      () => (u ? (typeof u == "number" ? u - 1 : u.length ? qb(u) : -1) : -1),
      [u]
    ),
    b = K(e, "activeId"),
    v = (0, Yn.useMemo)(
      () => (!l || !u || b == null || typeof u == "number" || !u.length ? -1 : Ub(u, b, l)),
      [l, u, b]
    ),
    R = (0, Yn.useMemo)(() => {
      let x = [h, v, m].filter((g) => g >= 0);
      return n ? [...n, ...x] : x;
    }, [h, v, m, n]);
  return Qc({
    id: l,
    store: e,
    orientation: a,
    persistentIndices: R,
    ...s,
    children: (x) => {
      let g = Object.assign({}, x, {
        "aria-setsize": d,
        "aria-posinset": i + (f[x.index - 1] ?? 0),
      });
      return r?.(g);
    },
  });
}
var nd = U(function (t) {
  let n = $b(t);
  return J(jb, n);
});
var Io = B(de());
function rd() {
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
var nu = B(oe());
function od(e, t) {
  if (!Array.isArray(e)) return e === t;
  if (!Array.isArray(t)) return !1;
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
var id = B(de()),
  ms = class extends nu.default.Component {
    containerRef = nu.default.createRef();
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
        ? od(this.props.dependencies, t.dependencies)
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
        c = this.canAnimateHeight && r.height !== i.height;
      (!s && !c) ||
        ((this.hasFixedSize = !0),
        s && (o.style.width = `${r.width}px`),
        c && (o.style.height = `${r.height}px`),
        o.getBoundingClientRect(),
        (o.style.transition = `width ${this.props.duration}s cubic-bezier(${this.props.duration}, 0, 0, 1), height ${this.props.duration}s cubic-bezier(${this.props.duration}, 0, 0, 1)`),
        s && (o.style.width = `${i.width}px`),
        c && (o.style.height = `${i.height}px`));
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
      return (0, id.jsx)("div", {
        ...s,
        style: { position: "relative", boxSizing: "border-box", ...i },
        onTransitionEnd: this.onTransitionEnd,
        ref: r || this.containerRef,
        children: o,
      });
    }
  };
var ne = B(oe(), 1);
var sd = "cq2i6r2",
  cd = "o199fue7",
  ud = "o16gpm6";
var Po = B(de(), 1);
function ad({
  avatar: e,
  displayName: t,
  organization: n,
  avatarCustomStyles: r,
  size: o,
  shadow: i,
}) {
  let s = ws(t);
  return (0, Po.jsxs)("div", {
    className: sd,
    children: [
      (0, Po.jsx)(Ss, { src: e || void 0, text: s, avatarCustomStyles: r, size: o, shadow: i }),
      n &&
        (0, Po.jsx)(Ss, {
          size: "small",
          src: n.avatar || void 0,
          textCustomStyles: ud,
          avatarCustomStyles: cd,
          text: ws(n.displayName),
        }),
    ],
  });
}
var ld = "uchctd1";
var ru = B(de());
function fd({ direction: e = "down", ...t }) {
  return (0, ru.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "8",
    height: "8",
    className: ve(e === "up" && ld),
    ...t,
    children: (0, ru.jsx)("path", {
      d: "M 0.5 3 C 0.5 3 2.337 4.574 3.349 5.442 C 3.724 5.763 4.276 5.763 4.651 5.442 C 5.663 4.574 7.5 3 7.5 3",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var en = B(oe(), 1);
var Rr = B(oe(), 1);
var ou = class {
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
  Xb = (0, Rr.createContext)(new Map());
function iu(e, t, n) {
  if (typeof IntersectionObserver > "u") return;
  let r = ku(() => `${n.rootMargin}`),
    o = (0, Rr.useContext)(Xb),
    { enabled: i } = n;
  (0, Rr.useEffect)(() => {
    let s = e.current;
    if (!i || !s) return;
    let c = o.get(r);
    if (!c || c.root !== n.root?.current) {
      let { root: a, ...u } = n;
      ((c = new ou({ ...u, root: a?.current })), o.set(r, c));
    }
    return (c.observeElementWithCallback(s, t), () => c?.unobserve(s));
  }, [i]);
}
var md = "c2v15of",
  su = "c1tr39qo",
  dd = "a103jkx3",
  pd = "auzolsl",
  hd = "o179w3e7",
  gd = ve(hd, pd),
  bd = ve(hd, dd),
  vd = "s1h5p0we",
  xd = "o1hfkq3i",
  yd = ve(xd, "uh1045z"),
  Cd = ve(xd, "d1sgpxwn"),
  Sd = "owuysmr",
  wd = "s3o367f",
  Ed = "b125519b",
  Id = ve(Ed, pd),
  Pd = ve(Ed, dd);
var Mn = B(oe(), 1),
  lu = B(de(), 1),
  cu = (0, Mn.createContext)({
    closeOnSelect: !0,
    reserveCheckmarkColumn: !1,
    keepSubmenusInPlace: !1,
    keepFocus: !1,
    startTime: void 0,
    mouseDidMove: !1,
  });
cu.displayName = "MenuConfigContext";
var ds = () => (0, Mn.useContext)(cu);
function Md({
  children: e,
  closeOnSelect: t,
  reserveCheckmarkColumn: n = !1,
  keepSubmenusInPlace: r = !1,
  keepFocus: o = !1,
  startTime: i,
  mouseDidMove: s,
}) {
  let c = (0, Mn.useMemo)(
    () => ({
      closeOnSelect: t,
      reserveCheckmarkColumn: n,
      keepSubmenusInPlace: r,
      keepFocus: o,
      startTime: i,
      mouseDidMove: s,
    }),
    [t, n, r, o, i, s]
  );
  return (0, lu.jsx)(cu.Provider, { value: c, children: e });
}
var uu = (0, Mn.createContext)(!1);
uu.displayName = "WithinMenuComboboxContext";
function Mo() {
  return (0, Mn.useContext)(uu);
}
function au({ children: e, withinCombobox: t }) {
  return (0, lu.jsx)(uu.Provider, { value: t, children: e });
}
var nt = B(de(), 1),
  Rd = 50,
  Dd = { enabled: !0 },
  fu = ({ menuHeight: e, children: t }) => {
    let n = Mo(),
      o = Vu() * fm,
      i = Math.min(o, us);
    return e > i
      ? (0, nt.jsx)(Zb, { children: t })
      : (0, nt.jsx)("div", { className: ve(n && su), children: t });
  },
  Zb = ({ children: e }) => {
    let t = Mo(),
      n = (0, en.useRef)(null),
      r = (0, en.useRef)(null),
      o = (0, en.useRef)(null),
      i = Ar(),
      [s, c] = (0, en.useState)(null),
      [a, u] = (0, en.useState)(!0),
      [l, f] = (0, en.useState)(!1);
    (iu(
      r,
      (b) => {
        let [v] = b;
        v && u(v.isIntersecting);
      },
      { root: n, ...Dd }
    ),
      iu(
        o,
        (b) => {
          let [v] = b;
          v && f(v.isIntersecting);
        },
        { root: n, ...Dd }
      ),
      (0, en.useEffect)(() => {
        let b,
          v,
          R = Lt.values.contentItemHeight,
          x = () => {
            n.current && n.current.scrollBy({ top: R, behavior: "smooth" });
          },
          g = () => {
            n.current && n.current.scrollBy({ top: -R, behavior: "smooth" });
          };
        return (
          s === "down" ? (b = setInterval(x, Rd)) : clearInterval(b),
          s === "up" ? (v = setInterval(g, Rd)) : clearInterval(v),
          () => {
            (clearInterval(b), clearInterval(v));
          }
        );
      }, [s]));
    let d = () => c("up"),
      h = () => c("down"),
      m = () => c(null);
    return (0, nt.jsxs)("div", {
      className: md,
      children: [
        i && !a && (0, nt.jsx)(Ad, { direction: "up", onMouseEnter: d, onMouseLeave: m }),
        (0, nt.jsx)(Fu, {
          ref: n,
          onWheel: m,
          className: ve(i && vd),
          children: (0, nt.jsxs)("div", {
            className: wd,
            children: [
              (0, nt.jsx)("div", { ref: r, className: Id }),
              (0, nt.jsx)("div", { className: ve(t && su), children: e }),
              (0, nt.jsx)("div", { ref: o, className: Pd }),
            ],
          }),
        }),
        i && !l && (0, nt.jsx)(Ad, { direction: "down", onMouseEnter: h, onMouseLeave: m }),
      ],
    });
  },
  Ad = ({ direction: e, onMouseEnter: t, onMouseLeave: n }) =>
    (0, nt.jsxs)(Oo, {
      gap: 0,
      className: e === "up" ? gd : bd,
      children: [
        e === "down" && (0, nt.jsx)("div", { className: Cd }),
        (0, nt.jsx)("div", {
          role: "presentation",
          "aria-label": `Auto scroll content ${e}`,
          onMouseEnter: t,
          onMouseLeave: n,
          className: Sd,
          children: (0, nt.jsx)(fd, { direction: e }),
        }),
        e === "up" && (0, nt.jsx)("div", { className: yd }),
      ],
    });
function Ro(e, t) {
  if (e === "") return t;
  let n = e.toLowerCase(),
    r = [];
  for (let o of t) {
    if (!mu(o)) continue;
    let i = o.label?.toLowerCase(),
      s = o.description?.toLowerCase(),
      c = o.aliases?.some((u) => u.toLowerCase().includes(n));
    if (i?.includes(n) || s?.includes(n) || c || o.searchMatch?.(n)) {
      r.push(o);
      continue;
    }
    if (Array.isArray(o.submenu)) {
      let u = Ro(n, o.submenu);
      u.length > 0 && r.push({ ...o, submenu: u });
    }
  }
  return r;
}
function mu(e) {
  return !(
    e.type === "separator" ||
    e.visible === !1 ||
    e.enabled === !1 ||
    nn(e.submenu) ||
    (ko(e.submenu) && e.submenu.length === 0)
  );
}
var kd = it()
  ? ["Control", "Option", "Shift", "CommandOrControl", "Command"]
  : ["CommandOrControl", "Command", "Control", "Alt", "Shift"];
function pR() {
  return it() ? "" : "+";
}
function du(e) {
  return e
    ? e
        .split("+")
        .sort((t, n) => {
          let r = kd.indexOf(t),
            o = kd.indexOf(n);
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
var Qb = 7,
  ev = 22,
  tv = 28,
  nv = 16,
  rv = 12;
function ps(e) {
  return jt(e.label) ? (e.ellipsis ? `${e.label}\u2026` : e.label) : "";
}
function Do(e) {
  if (e.acceleratorLabelTokens) return e.acceleratorLabelTokens;
  let t = !it() && !yt(e.acceleratorWindows) ? e.acceleratorWindows : e.accelerator,
    n = !it() && !yt(e.acceleratorLabelWindows) ? e.acceleratorLabelWindows : e.acceleratorLabel;
  if (n) return du(n);
  if (t) return du(t);
}
function Td(e, t, n) {
  let r = Math.floor(t);
  if (r <= 0) return [];
  let o = n ?? ((s) => s.length * Qb),
    i = [];
  for (let [s, c] of e.entries()) {
    if (c.type === "separator") continue;
    let a = !!c.submenu,
      u = jt(c.badge) ? c.badge : "",
      l = Do(c)?.join(" ") ?? "",
      f = [ps(c), u, l].filter((R) => R.length > 0).join(" "),
      d = o(f),
      h = !a && jt(c.description) ? o(c.description) : 0,
      m = (c.icon ? ev : 0) + (!a && c.avatar ? tv : 0) + (a ? nv : 0) + (u.length > 0 ? rv : 0),
      b = { item: c, index: s, width: Math.max(d, h) + m },
      v = i.findIndex((R) => R.width < b.width);
    if (v === -1) {
      if (i.length >= r) continue;
      i.push(b);
    } else i.splice(v, 0, b);
    i.length > r && i.pop();
  }
  return i.sort((s, c) => s.index - c.index).map(({ item: s }) => s);
}
var Kt = B(oe(), 1);
function Od(e, t) {
  let n = Kt.useRef(null),
    r = Kt.useRef(null),
    o = Kt.useRef(!1);
  (Kt.useLayoutEffect(() => {
    r.current && (o.current = !0);
  }, [t]),
    Kt.useEffect(() => {
      if (!e) return;
      function c(a) {
        o.current && a.target instanceof Node && a.target.contains(n.current) && (o.current = !1);
      }
      return (
        document.addEventListener("scroll", c, { capture: !0, passive: !0 }),
        () => document.removeEventListener("scroll", c, { capture: !0 })
      );
    }, [e]));
  let i = Kt.useCallback(
      (c) => (
        (n.current = c),
        o.current || (r.current = c?.getBoundingClientRect() ?? null),
        r.current
      ),
      []
    ),
    s = Kt.useCallback((c) => {
      c || ((o.current = !1), (r.current = null));
    }, []);
  if (e) return { getAnchorRect: i, setOpen: s };
}
var hs = B(oe(), 1);
var ov = !0;
function pu(e, t) {
  let [n, r] = (0, hs.useState)(() =>
    nn(e) || t?.every((o) => nn(o.enabled) || o.enabled === !1) ? ov : e === !1
  );
  return (
    (0, hs.useEffect)(() => {
      let o = !0;
      return (
        (async () => {
          let [s, c] = await Promise.all([Ld(e), Fd(t)]);
          o && r(s === !1 || c);
        })(),
        () => {
          o = !1;
        }
      );
    }, [e, t]),
    n
  );
}
async function Ld(e) {
  return nn(e) ? e() : e;
}
async function Fd(e) {
  if (yt(e) || e.length === 0) return !1;
  for (let t of e) {
    if (t.type === "separator" || (await Ld(t.enabled)) === !1) continue;
    let r = nn(t.submenu) ? t.submenu() : t.submenu;
    if (!(r && (await Fd(r)))) return !1;
  }
  return !0;
}
var W = B(de(), 1),
  Nd = "data-is-menu",
  Wd = `[${Nd}="true"]`,
  iv = 0,
  sv = 10,
  Hd = new WeakMap();
function cv(e) {
  e.preventDefault();
}
var bs = ne.memo(
  ne.forwardRef(function (
    {
      items: t,
      label: n,
      menuProps: r,
      onSearch: o,
      onSelection: i,
      searchValue: s,
      searchPending: c,
      width: a,
      fitAvailableHeight: u,
      submenuPlacement: l,
      enabled: f,
      icon: d,
      acceleratorLabelTokens: h,
      badge: m,
      badgeClassName: b,
      mode: v,
      ...R
    },
    x
  ) {
    let g = jt(s) && !!o,
      y = ne.useRef(null),
      S = Dt(),
      T = fv(r?.store, S, l),
      w = pu(f, t),
      { keepSubmenusInPlace: V, keepFocus: p } = ds(),
      I = Od(!!S && V, t),
      M = ne.useMemo(() => {
        let E = Lt.values.contentItemHeight,
          D = 0,
          H = jc + Lt.values.menuGap * 2;
        for (let A of t) {
          let j = A.type === "separator" ? H : E;
          D += j;
        }
        return D;
      }, [t]),
      C = !S,
      P = (0, W.jsxs)(es, {
        placement: T,
        timeout: iv,
        setOpen: I?.setOpen,
        children: [
          S && (0, W.jsx)(uv, { parent: S }),
          S &&
            (0, W.jsx)(Zi, {
              ref: x,
              ...R,
              disabled: w,
              showOnHover: Ar(),
              render: (E) =>
                (0, W.jsx)(gs, {
                  ...E,
                  hasSubmenu: !0,
                  className: ve(E.className, d && as, d && d.padding !== "compact" && ls),
                }),
              children: (0, W.jsx)(zd, {
                checked: R.checked,
                icon: d,
                label: n,
                acceleratorLabelTokens: h,
                badge: m,
                badgeClassName: b,
              }),
            }),
          (0, W.jsx)(Ji, {
            modal: !p,
            autoFocusOnShow: !p,
            portal: !0,
            unmountOnHide: !0,
            onMouseDownCapture: p ? cv : void 0,
            ...r,
            overlap: r?.overlap ?? !0,
            [Nd]: !0,
            getAnchorRect: I?.getAnchorRect ?? r?.getAnchorRect,
            gutter: r?.gutter ?? (S ? dm : mm),
            shift: r?.shift ?? (S ? pm : void 0),
            className: ve(Hm, C && Vm, u && Bm, r?.className, Lu),
            style: { width: a },
            render: (E) => (0, W.jsx)(ys, { mode: v, children: (0, W.jsx)("div", { ...E }) }),
            children: (0, W.jsx)(mv, {
              searchInputRef: y,
              searchValue: s,
              searchPending: c,
              itemsLength: t.length,
              menuHeight: M,
              withinCombobox: g,
              children: (0, W.jsx)(yv, {
                items: t,
                onSelect: i,
                submenuPlacement: l,
                isSearching: jt(s) && s.length > 0,
              }),
            }),
          }),
        ],
      });
    return g || o
      ? (0, W.jsx)(cs, {
          open: C ? !0 : void 0,
          resetValueOnHide: !0,
          includesBaseElement: !1,
          value: s ?? "",
          setValue: o,
          children: P,
        })
      : P;
  })
);
function uv({ parent: e }) {
  let t = Dt(),
    n = t?.useState("open");
  return (
    ne.useLayoutEffect(() => {
      if (!t || !n) return;
      let r = Hd.get(e);
      (r && r !== t && r.hide(), Hd.set(e, t));
    }, [n, e, t]),
    ne.useLayoutEffect(() => {
      !t || n || t.stopAnimation();
    }, [n, t]),
    null
  );
}
var av = "right-start",
  lv = "bottom-start";
function fv(e, t, n) {
  let r = e?.useState().currentPlacement,
    o = t?.useState().currentPlacement;
  if (!Iu(t?.parent) && !yt(o)) return o;
  if (t) {
    let s = Cu() ? lv : av;
    return n ?? s;
  }
  return r;
}
var mv = ne.memo(function ({
    searchInputRef: t,
    children: n,
    searchValue: r,
    searchPending: o,
    itemsLength: i,
    menuHeight: s,
    withinCombobox: c,
  }) {
    let a = Dt();
    Ao(a, "Searchable items must be used inside a Menu");
    let u = a.useState("autoFocusOnShow"),
      l = c && (u || !a.parent);
    return (
      ne.useEffect(() => {
        if (!l) return;
        let f = requestAnimationFrame(() => {
          t.current?.focus();
        });
        return () => cancelAnimationFrame(f);
      }, [l, t]),
      c
        ? (0, W.jsx)(au, {
            withinCombobox: c,
            children: (0, W.jsxs)("div", {
              className: Wm,
              children: [
                (0, W.jsxs)("div", {
                  className: zm,
                  children: [
                    (0, W.jsx)("div", { className: _m, children: (0, W.jsx)(rd, {}) }),
                    (0, W.jsx)(rs, {
                      ref: t,
                      autoFocus: l,
                      autoSelect: !0,
                      spellCheck: !1,
                      value: r,
                      placeholder: "Type to search\u2026",
                      className: Km,
                    }),
                  ],
                }),
                (0, W.jsx)(fu, {
                  menuHeight: s,
                  children: (0, W.jsx)(ss, {
                    children: (0, W.jsx)(ms, {
                      duration: 0.125,
                      dependencies: [i],
                      className: qm,
                      children:
                        i === 0
                          ? (0, W.jsx)("div", {
                              className: jm,
                              children: (0, W.jsx)(Du, {
                                children: o ? "Searching\u2026" : "No search results",
                              }),
                            })
                          : n,
                    }),
                  }),
                }),
              ],
            }),
          })
        : (0, W.jsx)(au, {
            withinCombobox: c,
            children: (0, W.jsx)(fu, { menuHeight: s, children: n }),
          })
    );
  }),
  dv = (e) => (0, W.jsx)(ts, { ...e, className: ve(Fm, e.className) }),
  Vd = 14,
  Bd = ({ icon: e }) => {
    let t = { height: e.height ?? Vd, width: e.width ?? Vd };
    return e.inlineSVG
      ? (0, W.jsx)("span", { className: Gc, style: t, dangerouslySetInnerHTML: { __html: e.src } })
      : (0, W.jsx)("span", {
          className: Gc,
          children: (0, W.jsx)("img", {
            style: t,
            src: e.src,
            crossOrigin: e.crossOrigin !== "disabled" ? (e.crossOrigin ?? "anonymous") : void 0,
            alt: "icon",
            decoding: "async",
          }),
        });
  };
function zd({
  checked: e,
  icon: t,
  label: n,
  acceleratorLabelTokens: r,
  badge: o,
  badgeClassName: i,
}) {
  return (0, W.jsxs)(W.Fragment, {
    children: [
      e && (0, W.jsx)(xs, { className: Uc, children: (0, W.jsx)(Cs, {}) }),
      t && (0, W.jsx)(Bd, { icon: t }),
      (0, W.jsx)("span", { className: ve(Gn, rn), children: n }),
      r && (0, W.jsx)(Kd, { acceleratorLabelTokens: r }),
      (0, W.jsxs)("span", {
        className: Sm,
        children: [
          o && (0, W.jsx)("span", { className: ve(qc, i), children: o }),
          (0, W.jsx)("span", {
            className: wm,
            "aria-hidden": "true",
            children: (0, W.jsx)(zu, {}),
          }),
        ],
      }),
    ],
  });
}
function pv(e) {
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
        className: ve(bm, Bu),
        children: (0, W.jsx)(hv, { ref: n, wrapperRef: r, ...t }),
      });
    })
  ),
  hv = ne.memo(
    ne.forwardRef(function (
      {
        name: t,
        value: n,
        badge: r,
        badgeClassName: o,
        frescoBadgeVariant: i,
        checked: s,
        acceleratorLabelTokens: c,
        icon: a,
        avatar: u,
        description: l,
        labelDetail: f,
        hasSubmenu: d = !1,
        enabled: h,
        tooltip: m,
        tooltipClassName: b,
        tooltipWhenDisabled: v = !1,
        readonly: R = !1,
        wrapperRef: x,
        ...g
      },
      y
    ) {
      let { closeOnSelect: S, startTime: T, mouseDidMove: w } = ds(),
        V = Mo(),
        p = Dt(),
        I = pu(h);
      Ao(p, "MenuItem must be used inside a Menu");
      let M = ne.useRef(null),
        C = Wu(y, M),
        P = Mu(),
        E = g.onClick,
        D = ne.useRef(),
        H = ne.useCallback(
          (L) => {
            (E?.(L), d && p.setAutoFocusOnShow(L.detail === 0 || D.current !== "touch"));
          },
          [E, d, p]
        ),
        A = gv(),
        F = ne.useCallback(() => {
          (p.setAutoFocusOnShow(!0), p.setInitialFocus("first"), p.setOpen(!0));
        }, [p]),
        j = ne.useCallback(
          (L) => {
            if (L.key === "ArrowRight" || L.key === "ArrowLeft")
              switch ((L.stopPropagation(), L.key)) {
                case "ArrowLeft": {
                  let he = d ? p?.parent : p;
                  if (he?.getState().items.length === 0) break;
                  (L.preventDefault(), he?.hide());
                  break;
                }
                case "ArrowRight": {
                  p && (L.preventDefault(), F());
                  break;
                }
                default:
                  wu(L.key);
              }
            if (P && L.key === "Enter") {
              (L.preventDefault(),
                L.stopPropagation(),
                p.getState().open ? (E?.(pv(L)), S && p.hideAll()) : F());
              return;
            }
            g.onKeyDownCapture?.(L);
          },
          [d, p, g.onKeyDownCapture, P, F, E, S]
        ),
        te = ne.useCallback(
          (L) => (!S || L.currentTarget.hasAttribute("aria-expanded") ? !1 : (p.hideAll(), !0)),
          [S, p]
        ),
        O = ne.useCallback(
          (L) => {
            if (L.button === 1) {
              (E?.({ ...L, ctrlKey: !0 }), te(L));
              return;
            }
            !P || !Ru(L.button) || (gu(w, T) && (A.suppressFor(L.currentTarget), H(L), te(L)));
          },
          [E, H, te, T, w, A, P]
        ),
        G = ne.useCallback(
          (L) => {
            A.consume(L.currentTarget) || H(L);
          },
          [H, A]
        ),
        se = Ar(),
        _ = {
          ref: C,
          focusOnHover: se,
          blurOnHoverEnd: se,
          ...g,
          className: ve(
            Yc,
            l && Am,
            u && u.size !== "small" && Tm,
            a && as,
            a && a.padding !== "compact" && ls,
            g.className
          ),
          "data-selected": a && s ? "true" : void 0,
          onClick: P && S ? void 0 : G,
          hideOnClick: te,
          onMouseUp: O,
          onKeyDownCapture: j,
          onPointerDownCapture: (L) => {
            ((D.current = L.pointerType), g.onPointerDownCapture?.(L));
          },
          disabled: I,
        };
      (f &&
        (_.children = (0, W.jsxs)("span", {
          children: [_.children, (0, W.jsx)("span", { className: Rm, children: f })],
        })),
        u
          ? (_.children = (0, W.jsxs)("span", {
              className: Lm,
              children: [
                (0, W.jsx)(ad, {
                  avatar: u.src,
                  displayName: u.displayName,
                  size: u.size,
                  shadow: u.shadow,
                  avatarCustomStyles: Om,
                }),
                (0, W.jsx)("span", { className: rn, children: _.children }),
              ],
            }))
          : a &&
            (_.children = (0, W.jsxs)("span", {
              className: Gn,
              children: [(0, W.jsx)(Bd, { icon: a }), _.children],
            })),
        l &&
          (_.children = (0, W.jsxs)(Oo, {
            direction: "column",
            gap: 2,
            children: [
              (0, W.jsx)("span", { className: Gn, children: _.children }),
              (0, W.jsx)("span", { className: Mm, children: l }),
            ],
          })),
        s &&
          !d &&
          !a &&
          (_.children = (0, W.jsxs)("span", {
            className: Dm,
            children: [
              (0, W.jsx)(xs, { className: Uc, children: (0, W.jsx)(Cs, {}) }),
              (0, W.jsx)("span", { className: rn, children: _.children }),
            ],
          })),
        c
          ? (_.children = (0, W.jsxs)(W.Fragment, {
              children: [
                (0, W.jsx)("span", { className: rn, children: _.children }),
                (0, W.jsx)(Kd, { acceleratorLabelTokens: c }),
              ],
            }))
          : r
            ? (_.children = (0, W.jsxs)(W.Fragment, {
                children: [
                  (0, W.jsx)("span", { className: rn, children: _.children }),
                  i
                    ? (0, W.jsx)(Au, {
                        as: "span",
                        variant: i === "default" ? void 0 : i,
                        children: r,
                      })
                    : (0, W.jsx)("span", { className: ve(qc, o), children: r }),
                ],
              }))
            : d
              ? (_.children = (0, W.jsx)("span", { className: ve(Gn, rn), children: _.children }))
              : (_.children = jt(_.children)
                  ? (0, W.jsx)("span", {
                      className: $c,
                      children: (0, W.jsx)("span", { className: rn, children: _.children }),
                    })
                  : (0, W.jsx)("span", { className: ve($c, rn), children: _.children })));
      let be = ne.useCallback(
        () => (t == null || n == null ? !1 : (p.setValue(t, n), !0)),
        [p, t, n]
      );
      if (R)
        return (0, W.jsx)("div", {
          ref: y,
          id: g.id,
          role: "presentation",
          "data-disabled": I || void 0,
          className: _.className,
          children: _.children,
        });
      let De = V
        ? (0, W.jsx)(is, { ..._, setValueOnClick: !1, value: n, selectValueOnClick: be })
        : (0, W.jsx)(Qi, { ..._ });
      return m
        ? (0, W.jsxs)(W.Fragment, {
            children: [
              De,
              (0, W.jsx)(bv, { anchorRef: I && v ? x : M, className: b, children: m }),
            ],
          })
        : De;
    })
  );
function gv() {
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
var bv = ne.memo(function ({ anchorRef: t, className: n, children: r }) {
  let o = Dt();
  Ao(o, "MenuItemTooltip must be used inside a Menu");
  let s = o.useState().currentPlacement?.startsWith("left") ? "left-start" : "right-start",
    c = qi({ placement: s });
  return (
    ne.useEffect(() => {
      let a = t.current;
      if (!a) return;
      c.setAnchorElement(a);
      let u = () => c.show(),
        l = () => c.hide();
      return (
        a.addEventListener("pointerenter", u),
        a.addEventListener("pointerleave", l),
        () => {
          (a.removeEventListener("pointerenter", u), a.removeEventListener("pointerleave", l));
        }
      );
    }, [c, t]),
    (0, W.jsx)(mo, {
      store: c,
      "data-placement": s,
      portal: !0,
      unmountOnHide: !0,
      hideOnInteractOutside: !1,
      gutter: 8,
      className: ve(Cm, n),
      render: (a) => (0, W.jsx)(ys, { children: (0, W.jsx)("div", { ...a }) }),
      children: r,
    })
  );
});
function Kd({ acceleratorLabelTokens: e }) {
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
function vv(e) {
  return e.flatMap((t) => {
    let { submenu: n } = t;
    if (!nn(n)) return [{ ...t, submenu: n }];
    let r = n();
    return yt(r) ? [] : [{ ...t, submenu: r }];
  });
}
function hu(e, t, n = "+") {
  return t && e.key ? e.key : e.path.join(n);
}
function xv(e, t) {
  return e.type === "separator"
    ? jc + Lt.values.menuGap * 2
    : e.submenu
      ? t
      : e.avatar && e.avatar.size !== "small"
        ? gm
        : e.description
          ? hm
          : t;
}
var yv = ne.memo(({ items: e, onSelect: t, submenuPlacement: n, isSearching: r }) => {
    let o = ne.useMemo(() => vv(e), [e]),
      { reserveCheckmarkColumn: i, keepSubmenusInPlace: s } = ds(),
      c = i || o.some((p) => p.type !== "separator" && p.checked === !0 && !p.icon),
      a = ne.useId(),
      u = Lt.values.contentItemHeight,
      l = ne.useMemo(
        () => o.map((p) => ({ id: `${a}-${hu(p, s, "-")}`, style: { height: xv(p, u) } })),
        [u, s, a, o]
      ),
      f = ne.useMemo(() => (s ? void 0 : l.map((p) => p.id).join(",")), [s, l]),
      d = ne.useMemo(() => {
        if (!s) return;
        let p = [],
          I = 0;
        for (let M of l) (p.push(I), (I += M.style.height));
        return { offsets: p, height: I };
      }, [s, l]),
      h = ne.useRef(null),
      [m, b] = ne.useState(),
      [v, R] = ne.useState(),
      x = !r || yt(v),
      g = ne.useMemo(() => (x ? Td(o, sv, m) : void 0), [x, o, m]),
      y = !yt(v) && (yt(g) || v.items === g),
      S = y ? { width: v.width, minWidth: "100%", maxWidth: "100%" } : void 0;
    (ne.useLayoutEffect(() => {
      let p = h.current;
      if (!p || typeof OffscreenCanvas > "u") return;
      let I = new OffscreenCanvas(0, 0).getContext("2d");
      if (!I) return;
      let { fontStyle: M, fontWeight: C, fontSize: P, fontFamily: E } = getComputedStyle(p);
      ((I.font = `${M} ${C} ${P} ${E}`), b(() => (D) => I.measureText(D).width));
    }, []),
      ne.useLayoutEffect(() => {
        if (!g || y) return;
        let p = h.current;
        if (!p) return;
        let I = Number.parseFloat(getComputedStyle(p).width);
        !Number.isFinite(I) || I === 0 || R({ items: g, width: I });
      }, [y, g]));
    let T = (p) => ve(c && p.checked !== !0 && !p.icon && km),
      w = (p, I) => {
        let M = hu(p, s);
        if (p.type === "separator") return (0, W.jsx)(dv, {}, M);
        let C = T(p),
          P = Do(p);
        if (p.submenu) {
          let E = p.submenu,
            D = p.searchableSubmenu && ko(E);
          return (0, W.jsx)(
            D ? Cv : bs,
            {
              id: I.id,
              ref: I.ref,
              "aria-setsize": I["aria-setsize"],
              "aria-posinset": I["aria-posinset"],
              label: p.label,
              badge: p.badge,
              badgeClassName: p.badgeClassName,
              enabled: p.enabled,
              checked: p.checked,
              icon: p.icon,
              className: C,
              items: E,
              onSelection: t,
              onSearch: D ? p.onSubmenuSearch : void 0,
              searchPending: p.submenuSearchPending,
              submenuPlacement: n,
              acceleratorLabelTokens: P,
              width: p.submenuWidth,
            },
            M
          );
        }
        return (0, W.jsx)(
          gs,
          {
            id: I.id,
            ref: I.ref,
            "aria-setsize": I["aria-setsize"],
            "aria-posinset": I["aria-posinset"],
            onClick: p.readonly ? void 0 : (E) => t?.(E, p),
            readonly: p.readonly,
            tooltip: p.tooltip,
            tooltipClassName: p.tooltipClassName,
            tooltipWhenDisabled: p.tooltipWhenDisabled,
            enabled: p.enabled,
            badge: p.badge,
            badgeClassName: p.badgeClassName,
            frescoBadgeVariant: p.frescoBadgeVariant,
            checked: p.checked || p.mixed,
            acceleratorLabelTokens: P,
            icon: p.icon,
            avatar: p.avatar,
            description: p.description,
            labelDetail: p.labelDetail,
            className: C,
            children: ps(p),
          },
          M
        );
      },
      V = (p) => {
        let I = p.path.join("+");
        return (0, W.jsx)(
          "div",
          {
            className: xm,
            children: p.submenu
              ? (0, W.jsx)(gs, {
                  readonly: !0,
                  hasSubmenu: !0,
                  className: ve(T(p), p.icon && as, p.icon && p.icon.padding !== "compact" && ls),
                  children: (0, W.jsx)(zd, {
                    checked: p.checked,
                    icon: p.icon,
                    label: p.label,
                    acceleratorLabelTokens: Do(p),
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
                  acceleratorLabelTokens: Do(p),
                  icon: p.icon,
                  avatar: p.avatar,
                  description: p.description,
                  labelDetail: p.labelDetail,
                  className: T(p),
                  children: ps(p),
                }),
          },
          I
        );
      };
    return (0, W.jsxs)(W.Fragment, {
      children: [
        g &&
          !y &&
          (0, W.jsx)("div", { ref: h, "aria-hidden": !0, className: ym, children: g.map(V) }),
        (0, W.jsx)(
          nd,
          {
            items: l,
            initialItems: Math.min(l.length, Math.ceil(us / u)),
            estimatedItemSize: u,
            overscan: 5,
            style: d ? { height: d.height, ...S } : S,
            children: ({
              style: p,
              id: I,
              ref: M,
              index: C,
              "aria-setsize": P,
              "aria-posinset": E,
            }) => {
              let D = o[C];
              if (!D) return null;
              let H = hu(D, s),
                A = d ? { ...p, top: d.offsets[C] } : p;
              return (0, W.jsx)(
                "div",
                {
                  style: A,
                  className: vm,
                  children: w(D, { id: I, ref: M, "aria-setsize": P, "aria-posinset": E }),
                },
                H
              );
            },
          },
          f
        ),
      ],
    });
  }),
  Cv = ne.memo(
    ne.forwardRef(function ({ onSearch: t, ...n }, r) {
      let { items: o } = n,
        [i, s] = ne.useState(""),
        c = ne.useCallback(
          (l) => {
            (s(l), t?.(l));
          },
          [t]
        ),
        a = ne.useDeferredValue(i),
        u = ne.useMemo(() => Ro(a, o), [o, a]);
      return (0, W.jsx)(bs, { ...n, ref: r, items: u, searchValue: i, onSearch: c });
    })
  );
function gu(e, t) {
  return !e || !Eu(t) ? !1 : Su.isAutomation ? !0 : performance.now() - t >= 200;
}
var vu = B(de(), 1),
  Sv = 10,
  _d = { placement: "bottom-start", orientation: "vertical" };
function dD({
  menu: e,
  onClose: t,
  vekterTaskScheduler: n,
  setEditReason: r,
  onKeyDown: o,
  onKeyUp: i,
}) {
  let [s, c] = (0, Ye.useState)(""),
    a = Pu(t),
    u = (0, Ye.useMemo)(
      () =>
        !e || e.config.searchable === !1 ? !1 : e.config.searchable === !0 ? !0 : jd(e.items) > Sv,
      [e]
    ),
    l = (0, Ye.useDeferredValue)(s),
    f = (0, Ye.useMemo)(() => {
      if (!u || !e?.items) return e?.items ?? [];
      let p = e.config.getSearchItem ? l.trim() : l,
        I = Ro(p, e.items),
        M = e.config.getSearchItem?.(p);
      return M ? [...Ou([M], null, [-1]), ...I] : I;
    }, [u, e, l]),
    d = Er({ ..._d, placement: e?.config.placement ?? _d.placement }),
    h = (e?.items.length ?? 0) > 0,
    m = e?.startTime,
    b = e?.id,
    v = (0, Ye.useRef)(),
    [R, x] = (0, Ye.useState)(!1);
  ((0, Ye.useEffect)(
    () =>
      st(d, ["mounted"], (p, I) => {
        if (I.mounted && !p.mounted) {
          c("");
          let M = v.current;
          M !== void 0 && a(M);
        }
      }),
    [d, a]
  ),
    (0, Ye.useEffect)(() => {
      if (!h) {
        d.hide();
        return;
      }
      let p = new AbortController();
      ((v.current = b), d.show());
      let I = !1,
        M = (P) => {
          gu(I, m) && bu(P.target) && d.hide();
        },
        C = () => {
          ((I = !0), x(!0));
        };
      return (
        window.addEventListener("mouseup", M, { signal: p.signal }),
        window.addEventListener("mousemove", C, { once: !0, signal: p.signal }),
        () => {
          (p.abort(), x(!1));
        }
      );
    }, [h, d, m, b]));
  let g = window.innerWidth;
  Hu((p) => {
    p.width !== g && d.hide();
  }, h);
  let y = (0, Ye.useCallback)(() => e?.config.location ?? null, [e?.config.location]),
    S = (0, Ye.useCallback)(
      (p, I) => {
        !e ||
          e?.items.length === 0 ||
          wv(() => {
            let M = yt(I.editReason) ? (I.role ?? I.label) : I.editReason;
            (M && r?.(M),
              e?.config.onSelect
                ? e?.config.onSelect(p, I)
                : I.click
                  ? I.click()
                  : I.role && Tu(I.role, { fromContextMenu: !0 }));
          }, n);
      },
      [e, r, n]
    ),
    T = e?.config.onSearch,
    w = (0, Ye.useCallback)(
      (p) => {
        (c(p), T?.(p));
      },
      [T]
    ),
    V = (0, Ye.useMemo)(
      () => ({
        store: d,
        getAnchorRect: y,
        gutter: e?.config.gutter,
        shift: e?.config.shift,
        overlap: e?.config.overlap,
        flip: e?.config.flip,
        className: ve(Nm, e?.config?.className),
        onKeyDown: o,
        onKeyUp: i,
      }),
      [
        y,
        e?.config.gutter,
        e?.config.shift,
        e?.config.overlap,
        e?.config.flip,
        e?.config?.className,
        d,
        o,
        i,
      ]
    );
  return (
    (0, Ye.useEffect)(() => {
      let p = (I) => {
        bu(I.target) && I.preventDefault();
      };
      return (
        document?.addEventListener("contextmenu", p),
        () => {
          document?.removeEventListener("contextmenu", p);
        }
      );
    }, []),
    (0, vu.jsx)(Md, {
      startTime: e?.startTime,
      mouseDidMove: R,
      closeOnSelect: e?.config?.closeOnSelect ?? !0,
      reserveCheckmarkColumn: e?.config?.reserveCheckmarkColumn ?? !1,
      keepSubmenusInPlace: e?.config?.keepSubmenusInPlace ?? !1,
      keepFocus: e?.config?.keepFocus ?? !1,
      children: (0, vu.jsx)(bs, {
        items: f,
        menuProps: V,
        onSelection: S,
        submenuPlacement: e?.config?.submenuPlacement,
        searchValue: u ? s : void 0,
        onSearch: u ? w : void 0,
        width: e?.config?.width,
        fitAvailableHeight: e?.config.fitAvailableHeight,
        mode: e?.config?.mode,
      }),
    })
  );
}
function bu(e) {
  if (!(e instanceof HTMLElement)) return !1;
  let t = e.getAttribute("data-backdrop");
  return jt(t) && t.length > 0;
}
function pD(e) {
  return e instanceof Element ? !!e.closest(Wd) || bu(e) : !1;
}
function wv(e, t) {
  t?.enterEventHandling();
  try {
    return e();
  } catch (n) {
    throw (t?.errorInEventHandler(yu(n)), n);
  } finally {
    t?.exitEventHandling();
  }
}
function jd(e) {
  let t = 0;
  for (let n of e) mu(n) && ((t += 1), Array.isArray(n.submenu) && (t += jd(n.submenu)));
  return t;
}
export {
  st as a,
  K as b,
  Za as c,
  ol as d,
  xl as e,
  Wf as f,
  Uf as g,
  Er as h,
  mm as i,
  dm as j,
  pm as k,
  Fb as l,
  Hm as m,
  Vm as n,
  x0 as o,
  zu as p,
  rd as q,
  od as r,
  ms as s,
  ad as t,
  iu as u,
  Md as v,
  Ro as w,
  pR as x,
  du as y,
  Wd as z,
  bs as A,
  dD as B,
  pD as C,
};
//# sourceMappingURL=chunk-5VEJ6AQ5.mjs.map
