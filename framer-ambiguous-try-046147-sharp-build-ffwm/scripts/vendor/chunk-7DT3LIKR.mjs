import { a as rt } from "chunk-2QV7RDTD.mjs";
import { a as it } from "chunk-SG2EJJGG.mjs";
import { a as ge } from "chunk-SCCCCPCG.mjs";
import { Ko as _e, Wo as Je, Xo as Ze, ce as Ye, e as fe } from "chunk-3GNDJY2L.mjs";
import { a as pt, d as yt, f as be } from "chunk-T74TO3LG.mjs";
import { C as bt } from "chunk-RT2IYV6Z.mjs";
import { d as vt, e as gt, h as ht } from "chunk-AA77VSN5.mjs";
import { a as lt } from "chunk-ETLWQA6D.mjs";
import { a as xt } from "chunk-YV5BFUPQ.mjs";
import { a as xe } from "chunk-WPWSHZF5.mjs";
import { a as tt } from "chunk-G3KF7MVA.mjs";
import { a as dt, b as ct } from "chunk-P6Q3LWLD.mjs";
import { a as ut, b as te } from "chunk-W4K45MJ6.mjs";
import { a as ft, b as mt } from "chunk-TS24LVSZ.mjs";
import { c as st, d as he } from "chunk-V3XWMOW5.mjs";
import { a as at } from "chunk-55TARNRL.mjs";
import { a as nt } from "chunk-R23XQVNE.mjs";
import { e as ee } from "chunk-Z2L5FPD7.mjs";
import { b as ot } from "chunk-IMG6DEFK.mjs";
import { a as et, b as N } from "chunk-X27LL6OM.mjs";
import { a as Pt } from "chunk-AHBUMA74.mjs";
import { a as w } from "chunk-QFU6OGL3.mjs";
import { h as me, ya as ve } from "chunk-DPHJW6UJ.mjs";
import { c as H, g as Z } from "chunk-PWPT6KBA.mjs";
import { a as Q } from "chunk-VMMD2EFP.mjs";
import { a as Qe } from "chunk-RNHTTH2C.mjs";
import { a as ze } from "chunk-YVT73FKN.mjs";
import { b as Xe } from "chunk-5WL5Y35Q.mjs";
import { a as I } from "chunk-2FCXHKEL.mjs";
import { b as A, f as T, g as Ue, p as qe, r as Ge } from "chunk-ARJ7WQTJ.mjs";
import { a as E } from "chunk-SWYZG2NI.mjs";
import { o as Ke } from "chunk-HTBRLWIL.mjs";
import { q as $e } from "chunk-L5AQ4LH7.mjs";
import { c as je } from "chunk-4JY5UMT2.mjs";
import { e as c } from "chunk-WLHSDIGQ.mjs";
var U = c(E());
var Pe = c(I()),
  wt = (t) =>
    (0, Pe.jsx)("svg", {
      role: "presentation",
      width: 10,
      height: 10,
      viewBox: "0 0 10 10",
      fill: "none",
      ...t,
      children: (0, Pe.jsx)(pt, {}),
    });
var It = "s1enscsq",
  Rt = "n3d3rfb",
  Ct = "n1nrp7h4",
  ye = "t2qearp",
  we = "o1abtuq3",
  Ie = "ozo04t6",
  Tt = "n117cay8",
  Et = "n1bfwbcs",
  Ot = "t1lmiiaw",
  kt = "n1ukogre",
  St = "fkp7u3w",
  Re = "n171mkxi",
  Ce = "nrmwyvr";
var Wt = [
  "button:not(:disabled):not([tabindex='-1'])",
  "[href]:not([tabindex='-1'])",
  "input:not(:disabled):not([tabindex='-1'])",
  "select:not(:disabled):not([tabindex='-1'])",
  "textarea:not(:disabled):not([tabindex='-1'])",
  "[tabindex]:not([tabindex='-1'])",
].join(", ");
function Te(t) {
  return t.matches(Wt);
}
function Nt(t) {
  return t ? Array.from(t.querySelectorAll(Wt)) : [];
}
function Pn(t, { preventScroll: e = !1, onFocus: o } = {}) {
  return !t || !Te(t) ? !1 : te(t, { preventScroll: e, onFocus: o });
}
var P = c(I()),
  re = U.default.createContext(null);
re.displayName = "NavigationStackItemContext";
var Co = (t) => t,
  ie = ({
    stack: t,
    currentIndex: e,
    onBack: o,
    onClose: n,
    renderNavigationBarWrapper: r = Co,
    navigationBarHidden: a = !1,
  }) => {
    ut();
    let i = t[e],
      s = e > 0,
      d = i?.displayDivider !== !0,
      p = i?.toolbarAction,
      u = i?.autoFocusInside ?? !0,
      f = U.default.useRef(null),
      g = t[e + 1]?.triggerRef,
      x = U.default.useCallback(
        (h) => {
          if (!(h instanceof HTMLElement) || h.contains(document.activeElement) || !u) return;
          let l = h.getAttribute("data-transition-index");
          if (Number(l) !== e) return;
          let m = g?.current;
          if (m instanceof HTMLElement && Te(m) && h.contains(m)) {
            ve.render(() => {
              te(m);
            });
            return;
          }
          let C = To(h);
          C &&
            ve.render(() => {
              te(C, { preventScroll: !0 });
            });
        },
        [u, e, g]
      );
    return (
      U.default.useEffect(() => {
        let h = f.current;
        h && x(h);
      }, [e, i?.id, x]),
      (0, P.jsxs)(P.Fragment, {
        children: [
          !a &&
            r(
              (0, P.jsx)(Oo, {
                disableDivider: d,
                toolbarAction: p,
                onBack: s ? o : void 0,
                onClose: n,
                children: (0, P.jsx)(ko, { stack: t, currentIndex: e }),
              })
            ),
          (0, P.jsx)("div", {
            className: It,
            children: t.map((h, l) => {
              let y = l === e;
              return (0, P.jsx)(
                re.Provider,
                {
                  value: h.id,
                  children: (0, P.jsx)(Eo, {
                    ref: y ? f : void 0,
                    index: l,
                    currentIndex: e,
                    inert: y ? void 0 : "",
                    "aria-hidden": y ? void 0 : !0,
                    children: h.element,
                  }),
                },
                h.id + h.timestamp
              );
            }),
          }),
        ],
      })
    );
  };
function To(t) {
  let e = Nt(t),
    o = e.filter((i) => !i.matches("button")),
    n = o.length > 0 ? o : e,
    r,
    a = -1;
  for (let i of n) {
    let s = i.tabIndex;
    s > a && ((r = i), (a = s));
  }
  return r;
}
var Eo = U.default.forwardRef(function (
  { index: e, currentIndex: o, inert: n, "aria-hidden": r, children: a },
  i
) {
  return (0, P.jsx)("div", {
    ref: i,
    "data-transition-index": e,
    inert: n,
    "aria-hidden": r,
    className: w(Rt, e === o && Ct, e < o && we, e < o && ye, e > o && Ie),
    children: a,
  });
});
function Oo({ disableDivider: t, toolbarAction: e, onBack: o, onClose: n, children: r }) {
  return (0, P.jsx)(ot, {
    children: (0, P.jsxs)(at, {
      className: w(Tt, !t && Et),
      direction: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 0,
      children: [
        (0, P.jsx)(ee, {
          variant: "clean",
          title: "Back",
          onClick: o,
          className: w(xe, Re, !o && Ce),
          tabIndex: o ? 0 : -1,
          children: (0, P.jsx)(wt, {}),
        }),
        r,
        e ??
          (0, P.jsx)(ee, {
            variant: "clean",
            title: "Close",
            onClick: n,
            className: w(xe, Re, !n && Ce),
            children: (0, P.jsx)(tt, {}),
          }),
      ],
    }),
  });
}
function Mt({ index: t, currentIndex: e, stackItem: o }) {
  return (0, P.jsx)("div", {
    className: w(Ot, !o.centerTitle && t === 0 && St, t !== e && ye, t < e && we, t > e && Ie),
    children: (0, P.jsx)("span", { className: w(t === e && kt), children: o.title }),
  });
}
function Nn({ title: t }) {
  return (0, P.jsx)(Mt, {
    index: 0,
    currentIndex: 0,
    stackItem: { id: "1", title: t, timestamp: 0, element: (0, P.jsx)("div", { children: t }) },
  });
}
function ko({ currentIndex: t, stack: e }) {
  return (0, P.jsx)(P.Fragment, {
    children: e.map((o, n) => (0, P.jsx)(Mt, { index: n, currentIndex: t, stackItem: o }, o.id)),
  });
}
var D = c(E(), 1);
var ae = c(E(), 1);
function So(t) {
  try {
    return A(t) ? JSON.parse(t) : null;
  } catch {
    return null;
  }
}
function Ee(t, e) {
  let o = localStorage.getItem(t),
    n = So(o);
  return e(n) ? n : null;
}
function Dn(t, e) {
  let [o] = (0, ae.useState)(() => Ee(t, e)),
    n = (0, ae.useCallback)(
      (r) => {
        let a = JSON.stringify(r);
        localStorage.setItem(t, a);
      },
      [t]
    );
  return [o, n];
}
var $ = c(E(), 1);
var Bt = "wuk326o",
  Dt = "n283lgw",
  Vt = "pue1ity";
var M = c(I(), 1),
  Lt = 0.1,
  Oe = 9999999999999;
function No(t, e) {
  let r = e.width - t.width,
    a = e.height - t.height;
  return { minX: 0, minY: 0, maxX: r, maxY: a };
}
function Ft(t) {
  let e = t.trim(),
    o = parseInt(e);
  return T(o)
    ? e.endsWith("%")
      ? { value: o, unit: "%" }
      : e.endsWith("px")
        ? { value: o, unit: "px" }
        : null
    : null;
}
function Mo(t) {
  switch (t) {
    case "app":
      return "0px";
    case "toolbar":
      return "var(--framerInternalUI-chromeToolbarHeight)";
    case "canvas":
      return "var(--framerInternalUI-chromeMarginTop)";
    default:
      je(t);
  }
}
var se = class extends $.default.Component {
    containerRef = $.default.createRef();
    contentWrapperRef = $.default.createRef();
    static defaultProps = { visible: !0, constraintBy: "canvas" };
    setContainerRefs = (e) => {
      this.containerRef.current = e;
      let { containerRef: o } = this.props;
      o && (o.current = e);
    };
    setContentWrapperRefs = (e) => {
      this.contentWrapperRef.current = e;
      let { contentWrapperRef: o } = this.props;
      o && (o.current = e);
    };
    componentDidMount() {
      let { restorationKey: e } = this.props;
      if (!e) return;
      let o = Ee(e, At);
      o && this.setFloatingWindowProperties(o);
    }
    render() {
      let {
          initialTopOffset: e,
          initialLeftOffset: o,
          rightInsetOverride: n,
          requiredContentWidth: r,
          visible: a,
          className: i,
          zIndex: s,
          constraintBy: d = "canvas",
          verticalConstraintBy: p = d,
        } = this.props,
        u = Oe,
        f = 0,
        g = 1,
        x = 0,
        h = 1;
      if (A(e)) {
        let b = Ft(e);
        b &&
          (b.unit === "%"
            ? ((f = me(0, 100, b.value)), (g = 100 - b.value))
            : b.unit === "px"
              ? ((u = b.value), (f = 1), (g = 0))
              : (b.unit, void 0));
      }
      if (A(o)) {
        let b = Ft(o);
        b?.unit === "%" && ((x = me(0, 100, b.value)), (h = 100 - b.value));
      }
      let l = nt.css.panelPadding,
        y = Mo(p),
        m = p === "app" ? "0px" : "var(--framerInternalUI-chromeMarginBottom)",
        C = `calc(${u}px - ${y} - ${l})`,
        v = d === "app" ? "0px" : "var(--framerInternalUI-chromeMarginLeft)",
        k = n ?? (d === "app" ? "0px" : "var(--framerInternalUI-chromeMarginRight)"),
        V = `calc(${l} * 2)`,
        L = `calc(100vw - ${k} - ${V})`,
        F = r ? `min(${v}, max(0px, calc(${L} - ${r})))` : v;
      return (0, M.jsxs)("div", {
        ref: this.setContainerRefs,
        className: w(Dt, i),
        style: {
          position: "absolute",
          top: `calc(${y} + ${l})`,
          left: `calc(${F} + ${l})`,
          right: `calc(${k} + ${l})`,
          bottom: `calc(${m} + ${l})`,
          display: "flex",
          visibility: a ? "visible" : "hidden",
          flexDirection: "row",
          zIndex: s,
        },
        children: [
          (0, M.jsx)("div", { style: { width: 0, flexGrow: `var(--floating-window-left, ${x})` } }),
          (0, M.jsxs)("div", {
            style: { width: "auto", display: "flex", flexDirection: "column" },
            children: [
              (0, M.jsx)("div", {
                style: {
                  height: 0,
                  flexGrow: `var(--floating-window-top, ${f})`,
                  maxHeight: `var(--floating-window-fixed-top, ${C})`,
                },
              }),
              (0, M.jsx)("div", {
                ref: this.setContentWrapperRefs,
                onPointerDownCapture: this.props.onPointerDownCapture,
                draggable: !1,
                className: w(Vt, ge),
                style: {
                  position: "relative",
                  height: "auto",
                  width: "auto",
                  maxHeight: "100%",
                  flexShrink: 0,
                  transform:
                    "translate(var(--floating-window-x, 0px), var(--floating-window-y, 0px))",
                  transition: "var(--floating-window-transform)",
                },
                children: (0, M.jsx)(ke.Provider, { value: this, children: this.props.children }),
              }),
              (0, M.jsx)("div", {
                style: { height: 0, flexGrow: `var(--floating-window-bottom, ${g})` },
              }),
            ],
          }),
          (0, M.jsx)("div", {
            style: { width: 0, flexGrow: `var(--floating-window-right, ${h})` },
          }),
        ],
      });
    }
    hasMoved = !1;
    dragStartRect = null;
    getConstraintsRect = () => {
      let e = this.containerRef.current;
      return e ? e.getBoundingClientRect() : null;
    };
    getWindowRect = () => {
      let e = this.getConstraintsRect();
      if (!e) return null;
      let o = this.contentWrapperRef.current;
      if (!o) return null;
      let n = o.getBoundingClientRect();
      return { x: n.left - e.x, y: n.top - e.y, width: n.width, height: n.height };
    };
    onDragStart = (e) => {
      ((this.dragStartRect = this.getWindowRect()), (this.hasMoved = !1));
    };
    onDrag = (e) => {
      if (!this.dragStartRect) return;
      let o = this.getWindowRect();
      if (!o) return;
      let { width: n, height: r } = o;
      (!this.hasMoved && e.offset.x === 0 && e.offset.y === 0) ||
        ((this.hasMoved = !0),
        this.setRect(
          { ...fe.add(e.offset, this.dragStartRect), width: n, height: r },
          { rubberBandingEnabled: !0, snapToEdges: !0, fixedTop: !1 }
        ));
    };
    onDragEnd = (e) => {
      this.dragStartRect &&
        ((this.dragStartRect = null),
        this.hasMoved &&
          (this.setFloatingWindowProperties({
            x: 0,
            y: 0,
            transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)",
          }),
          this.props.onDragEnd?.()));
    };
    setPosition(e, { snapToEdges: o }) {
      let n = this.getConstraintsRect(),
        r = this.getWindowRect();
      if (!r || !n) return;
      let a = fe.subtract(e, n);
      this.setRect(
        { ...a, width: r.width, height: r.height },
        { rubberBandingEnabled: !1, fixedTop: !0, snapToEdges: o }
      );
    }
    setRect(e, { rubberBandingEnabled: o, snapToEdges: n, fixedTop: r }) {
      let a = this.getConstraintsRect();
      if (!a) return;
      let { minX: i, minY: s, maxX: d, maxY: p } = No(e, a),
        u = e.x,
        f = e.y;
      if (n) {
        let m = Math.abs(u - i),
          C = Math.abs(u - d),
          v = Math.abs(f - s),
          O = Math.abs(f - p);
        (m < 16 ? (u = i) : C < 16 && (u = d), v < 16 ? (f = s) : O < 16 && (f = p));
      }
      let g = 0,
        x = 0;
      (u <= i ? ((u = 0), (g = e.x - i)) : u >= d && (g = e.x - d),
        f < s ? ((f = s), (x = e.y - s)) : f >= p && (x = e.y - p));
      let h = 0,
        l = 0;
      o && ((h = g * Lt), (l = x * Lt));
      let y = Ko({ ...e, x: u, y: f }, a);
      this.setFloatingWindowProperties({
        top: r ? 1 : y.top,
        bottom: r ? 0 : y.bottom,
        fixedTop: r ? y.top : void 0,
        right: y.right,
        left: y.left,
        x: h,
        y: l,
        transition: "",
      });
    }
    setResizeRect({ top: e, right: o, bottom: n, left: r }) {
      this.setFloatingWindowProperties({
        top: e,
        right: o,
        bottom: n,
        left: r,
        fixedTop: void 0,
        x: 0,
        y: 0,
        transition: "",
      });
    }
    persistCurrentTopOffset = () => {
      let e = this.getWindowRect();
      e && this.setFloatingWindowProperties({ fixedTop: e.y, top: 1, bottom: 0 });
    };
    hasPersistedTopOffset = () => {
      let e = this.containerRef.current?.style.getPropertyValue("--floating-window-fixed-top"),
        o = parseInt(e || "");
      return T(o) && o !== Oe;
    };
    setFloatingWindowProperties(e) {
      let o = this.containerRef.current;
      if (!o) return;
      let n = {};
      (T(e.top) && (n["--floating-window-top"] = e.top.toString()),
        T(e.right) && (n["--floating-window-right"] = e.right.toString()),
        T(e.bottom) && (n["--floating-window-bottom"] = e.bottom.toString()),
        T(e.left) && (n["--floating-window-left"] = e.left.toString()),
        T(e.fixedTop)
          ? (n["--floating-window-fixed-top"] = `${e.fixedTop}px`)
          : (n["--floating-window-fixed-top"] = `${Oe}px`),
        T(e.x) && (n["--floating-window-x"] = `${e.x}px`),
        T(e.y) && (n["--floating-window-y"] = `${e.y}px`),
        A(e.transition) && (n["--floating-window-transform"] = e.transition));
      let r = Object.keys(n);
      for (let i of r) {
        let s = n[i];
        o.style.setProperty(i, s);
      }
      let { restorationKey: a } = this.props;
      if (a && At(e, { strict: !1 })) {
        let i = {
            top: e.top,
            bottom: e.bottom,
            left: e.left,
            right: e.right,
            fixedTop: e.fixedTop,
          },
          s = JSON.stringify(i);
        localStorage.setItem(a, s);
      }
    }
  },
  Bo = "top",
  Do = "right",
  Vo = "bottom",
  Lo = "left",
  Fo = "fixedTop",
  Ao = "x",
  Ho = "y",
  $o = "transition";
function At(t, { strict: e } = { strict: !0 }) {
  if (
    !Ue(t) ||
    (e && (Ao in t || Ho in t || $o in t)) ||
    !T(t[Bo]) ||
    !T(t[Do]) ||
    !T(t[Vo]) ||
    !T(t[Lo])
  )
    return !1;
  let o = t[Fo];
  return T(o) || qe(o);
}
var ke = $.default.createContext(null);
ke.displayName = "ConstraintWindowContext";
var Ht = $.default.forwardRef(function (e, o) {
  let n = $.default.useContext(ke);
  return (0, M.jsx)(yt, {
    ref: o,
    ...e,
    className: w(e.className, Bt, ge),
    onDragStart: n?.onDragStart,
    onDrag: n?.onDrag || Qe,
    onDragEnd: n?.onDragEnd,
    cursor: "grabbing",
  });
});
function Ko(t, e) {
  let o = t.y,
    n = o + t.height,
    r = t.x,
    a = r + t.width,
    i = o,
    s = r,
    d = e.height - n,
    p = e.width - a;
  return { top: i, bottom: d, left: s, right: p };
}
var S = c(E(), 1);
var $t = c(E(), 1),
  le = c(I(), 1),
  de = $t.default.createContext(void 0);
de.displayName = "PropertiesScopeThemeContext";
function Kt({ scope: t, children: e }) {
  return (0, le.jsx)(de.Provider, {
    value: t,
    children: (0, le.jsx)(he, {
      mode: t,
      children: (0, le.jsx)(he, { mode: "properties", children: e }),
    }),
  });
}
var We = c(E(), 1);
var Se = c(E(), 1),
  jt = Se.default.createContext(!1),
  tr = jt.Provider;
function zt() {
  return Se.default.useContext(jt);
}
var oe = We.default.createContext(void 0);
oe.displayName = "VariableProviderInfoContext";
function ur(t = !0) {
  let e = H(),
    o = zt(),
    n = We.default.useContext(oe),
    r = it(
      () => (!N(e) || o || !t ? null : e.stores.treeStore.variableProviderInfo),
      [o, t],
      "VariableProviderInfo"
    );
  return t ? (n !== void 0 ? n : r) : null;
}
function jo(t, e) {
  let { id: o, providerId: n = e?.fallbackProvider } = t;
  return !e || !n
    ? { variable: void 0, providerId: n }
    : { variable: e.combined.get(n)?.get(o), providerId: n };
}
function fr(t, e) {
  let o = jo(t, e);
  if (!e || t.providerId !== Ye) return o;
  let n = rt(e);
  if (!n) return o;
  let r = e.combined.get(n.providerId)?.get(n.variableId);
  if (!r || !Je(r)) return o;
  let a = r.itemVariables.find((i) => i.id === t.id);
  return !a || a.type === "divider"
    ? o
    : { variable: a, providerId: n.providerId, arrayVariableId: r.id };
}
function mr(t, e) {
  let { id: o, providerId: n = e?.fallbackProvider } = t;
  if (!(!e || !n)) return e.combined.get(n)?.get(o);
}
var ce = c(E(), 1),
  Ne = (0, ce.createContext)(!1);
Ne.displayName = "ShaderControlContext";
var Ut = Ne.Provider;
function qt() {
  return (0, ce.useContext)(Ne);
}
var R = c(E(), 1),
  Yt = c(I(), 1),
  Me = (0, R.createContext)(() => () => {});
function hr(t, e) {
  let o = (0, R.useContext)(Me),
    [n, r] = (0, R.useState)(!1);
  return (
    (0, R.useLayoutEffect)(
      () =>
        o((a) => {
          r(() =>
            t
              ? t.some((i) => a.variantOverrideKeys.has(i))
              : e
                ? e.some((i) => a.variantOverrideTraitTypes.has(i))
                : !1
          );
        }),
      [t, e, o]
    ),
    n
  );
}
function Gt() {
  let t = (0, R.useContext)(Me),
    [e, o] = (0, R.useState)({
      variantOverrideKeys: new Set(),
      variantOverrideTraitTypes: new Set(),
    });
  return (
    (0, R.useLayoutEffect)(
      () =>
        t((n) => {
          o(n);
        }),
      [t, o]
    ),
    e
  );
}
function Xt({ children: t, variantOverrideTraitTypes: e, variantOverrideKeys: o }) {
  let n = (0, R.useRef)(),
    r = (0, R.useMemo)(() => {
      let a = new Set();
      return {
        listeners: a,
        addListener: (i) => {
          a.add(i);
          let s = n.current;
          return (
            s && i(s),
            () => {
              a.delete(i);
            }
          );
        },
      };
    }, []);
  return (
    (0, R.useLayoutEffect)(() => {
      let a = { variantOverrideTraitTypes: e, variantOverrideKeys: o };
      ((n.current = a), r.listeners.forEach((i) => i(a)));
    }, [r, o, e]),
    (0, Yt.jsx)(Me.Provider, { value: r.addListener, children: t })
  );
}
var _t = "pvjhuxd",
  Jt = "pcpv5lz",
  Zt = "p1awmd8";
var Qt = c(E(), 1),
  K = (0, Qt.createContext)(null);
K.displayName = "PopoutContext";
var B = c(E(), 1);
function Be(t) {
  switch (t) {
    case "Confirmation":
    case "DeprecatedDrafts":
    case "ImageCrop":
    case "ImageFocalPoint":
    case "QuickActions":
    case "UpsellEnterprise":
    case "UpsellFeature":
      return !0;
    default:
      return !1;
  }
}
function Cr(t) {
  return t === "ConfirmationPlugin" ? 26 : Be(t) ? 25 : 22;
}
function Uo() {
  let t = et(),
    e = Z(() => {
      let { activePlugin: n } = t.stores.pluginStore;
      return n ? n.modeHandlers.mode !== "canvas" : !1;
    }, []),
    o = Z(() => Be(t.stores.modalStore.active.type), []);
  return e || o;
}
function qo() {
  return !1;
}
var eo = $e() ? qo : Uo;
var q = class {
  #t = [];
  #e = -1;
  get stack() {
    return this.#t;
  }
  get currentStackIndex() {
    return this.#e;
  }
  triggerRender;
  willOpen;
  willPush;
  willPop;
  constructor({ triggerRender: e, willOpen: o, willPush: n, willPop: r }) {
    ((this.triggerRender = e), (this.willOpen = o), (this.willPush = n), (this.willPop = r));
  }
  present = (
    e,
    o,
    {
      parent: n,
      triggerRef: r,
      displayDivider: a,
      title: i,
      className: s,
      onDismiss: d,
      onPresent: p,
      toolbarAction: u,
      autoFocusInside: f,
    }
  ) => {
    if (e && this.isPresenting(e, { atIndex: 0 })) {
      this.#e === 0 ? this.close() : (this.setStackIndex(0), this.willOpen?.(r?.current));
      return;
    }
    if (n) {
      let g = this.indexForItem(n);
      if (g === -1) return null;
      ((this.#t = this.#t.slice(0, g + 1)), p?.(), this.willPush?.());
    } else (this.setStackIndex(-1), p?.(), this.willOpen?.(r?.current));
    (this.#t.push({
      id: e,
      timestamp: Date.now(),
      element: o,
      triggerRef: r,
      displayDivider: a,
      title: i,
      className: s,
      onDismiss: d,
      onPresent: p,
      dismissed: !1,
      toolbarAction: u,
      autoFocusInside: f,
    }),
      this.setStackIndex(this.#e + 1));
  };
  updatePopout = (e, o, n, r) => {
    if (this.isClosed()) return;
    let a = this.indexForItem(e);
    if (a === -1) return;
    let i = this.#t[a];
    if (!i) return;
    let s = i.element,
      d = i.title,
      p = i.autoFocusInside;
    (s === o && d === n && p === r) ||
      ((i.element = o),
      (i.title = n),
      (i.autoFocusInside = r),
      a <= this.#e && requestAnimationFrame(this.triggerRender));
  };
  isPresenting = (e, o) => {
    if (this.isClosed()) return !1;
    let n = this.indexForItem(e);
    return !(n < 0 || n > this.#e || (o && o.atIndex !== n));
  };
  isOpen = () => this.#e > -1;
  isClosed = () => !this.isOpen();
  close = () => {
    this.setStackIndex(-1);
  };
  #o = !1;
  get isSuspended() {
    return this.#o;
  }
  set isSuspended(e) {
    this.#o !== e && ((this.#o = e), this.triggerRender());
  }
  dismiss = (e) => {
    let o = this.indexForItem(e);
    o !== -1 && this.#e >= o && (this.willPop?.(), this.setStackIndex(o - 1));
  };
  goBack = (e = !1) => {
    let o = this.stack[0];
    if ((this.willPop?.(), this.setStackIndex(this.#e - 1), e && this.currentStackIndex === -1)) {
      let n = o?.triggerRef?.current;
      n instanceof HTMLElement && n.focus();
    }
  };
  indexForItem = (e) => this.#t.findIndex((o) => o.id === e);
  setStackIndex = (e) => {
    let o = Math.max(-1, e);
    this.#e !== o &&
      (this.#t.forEach((n, r) => {
        r <= e || n.dismissed || ((n.dismissed = !0), n.onDismiss?.());
      }),
      (this.#e = o),
      o < 0 && (this.#t = []),
      this.triggerRender(),
      this.listeners.forEach((n) => n()));
  };
  listeners = new Set();
  addListener(e) {
    this.listeners.add(e);
  }
  removeListener(e) {
    this.listeners.delete(e);
  }
  registeredPopouts = {};
  shouldPresentPopoutIds = new Set();
  registerPopout = (e, o) => {
    ((this.registeredPopouts[e] = o),
      this.shouldPresentPopoutIds.has(e) && (o(), this.shouldPresentPopoutIds.delete(e)));
  };
  deregisterPopout = (e) => {
    delete this.registeredPopouts[e];
    let o = this.indexForItem(e);
    o === -1 || this.#e < o || this.setStackIndex(o - 1);
  };
  popoutIsRegistered = (e) => e in this.registeredPopouts;
  presentPopout = (e) => {
    if (this.isPresenting(e, { atIndex: 0 })) return;
    let o = this.registeredPopouts[e];
    Ge(o) ? o() : this.presentPopoutOnRegistration(e);
  };
  presentPopoutOnRegistration = (e) => {
    this.shouldPresentPopoutIds.has(e) ||
      (this.shouldPresentPopoutIds.add(e),
      setTimeout(() => {
        this.shouldPresentPopoutIds.delete(e);
      }, 100));
  };
};
var to = "pjkind9",
  oo = "s1l0qpj8",
  no = "cftx8i9";
var G = c(E(), 1),
  De = (0, G.createContext)(!1);
De.displayName = "IsInVariableModalContext";
var Fr = De.Provider;
function ro() {
  return (0, G.useContext)(De);
}
var Ve = (0, G.createContext)(!0);
Ve.displayName = "VariableDefaultValueAppliesContext";
var Ar = Ve.Provider;
function Hr() {
  return (0, G.useContext)(Ve);
}
function $r(t, e) {
  return !t || !Ze(t) ? !0 : _e(t, e);
}
var io = c(E(), 1);
function pe(t) {
  let e = H(),
    o = Z(
      () => N(e) && e.stores.chromeStore.overlayStack.at(-1)?.type === "componentRichTextContent",
      [e]
    );
  (0, io.useLayoutEffect)(() => {
    t.isSuspended = o;
  }, [t, o]);
}
var j = c(I(), 1),
  Xo = { x: 10, y: 0 };
function ao({
  navigationRef: t,
  anchorRef: e,
  children: o,
  attachTo: n = "right",
  alignment: r = "center",
  offset: a = Xo,
  within: i,
  onKeydown: s,
  onCopy: d,
  fallbackToModalAppearance: p,
  showArrow: u = !1,
  themeBehavior: f,
}) {
  let g = H(),
    x = B.default.useRef(s);
  x.current = s;
  let h = eo(),
    l = ro(),
    y = l ? B.default.Fragment : xt,
    [m, C] = B.default.useState(0),
    [v] = B.default.useState(() => new q({ triggerRender: () => C((b) => b + 1) }));
  pe(v);
  let O = v.isOpen(),
    k = v.isSuspended,
    V = B.default.useCallback(
      (b) => {
        if ((N(g) && g.stores.mouseStore.setModifiers(b.nativeEvent), b.key === "Escape")) {
          if (v.isSuspended) return;
          (v.goBack(!0), b.stopPropagation());
        }
        x.current?.(b);
      },
      [v]
    ),
    L = B.default.useCallback((b) => {
      N(g) && g.stores.mouseStore.setModifiers(b.nativeEvent);
    }, []);
  ((0, B.useImperativeHandle)(t, () => v, [v]),
    B.default.useEffect(() => {
      if (!(!O || !d))
        return (
          document.addEventListener("copy", d),
          document.addEventListener("cut", d),
          () => {
            (document.removeEventListener("copy", d), document.removeEventListener("cut", d));
          }
        );
    }, [O, d]));
  let F = B.default.useMemo(() => ({ ...a }), [m, a]);
  return (0, j.jsxs)(K.Provider, {
    value: v,
    children: [
      o,
      O &&
        (0, j.jsx)(y, {
          children: (0, j.jsx)(ht, {
            anchor: e.current,
            alignSelf: r,
            attachTo: n,
            offset: F,
            within: i,
            onClose: () => {
              v.isSuspended || v.close();
            },
            className: w(to, k && oo),
            onKeyDown: V,
            onKeyUp: L,
            focusTrapEnabled: !h && !k,
            showArrow: u,
            arrow: u ? { anchor: e.current } : void 0,
            fallbackToModalAppearance: p,
            themeBehavior: l ? "none" : f,
            backdropEnabled: !k,
            backdropTintEnabled: !k,
            hidden: k,
            children: (0, j.jsx)("div", {
              className: w(no),
              children: (0, j.jsx)(ie, {
                stack: v.stack,
                currentIndex: v.currentStackIndex,
                onBack: v.goBack,
                onClose: v.close,
              }),
            }),
          }),
        }),
    ],
  });
}
var W = c(I(), 1),
  co = "data-is-popout-button",
  Yo = "data-is-field-settings-popout",
  po = `[${co}]`,
  _o = `${po}:not([${Yo}])`;
function Jo({
  popout: t,
  navigationTitle: e,
  navigationClassName: o,
  toolbarAction: n,
  id: r,
  enabled: a = !0,
  displayDivider: i,
  onBeforePresent: s = () => !0,
  onPresent: d = () => {},
  onDismiss: p = () => {},
  ref: u,
  autoFocusInside: f,
  displayInPopover: g,
}) {
  let x = Qo(r),
    h = S.default.useRef(null),
    l = u ?? h,
    y = S.default.useContext(re),
    m = S.default.useContext(K),
    [C, v] = S.default.useState(!1),
    O = mt(),
    k = ct(),
    V = Gt(),
    L = S.default.useContext(oe),
    F = gt(g),
    b = qt(),
    z = st(),
    ue = S.default.useContext(de),
    Y = so(
      (0, W.jsx)(oe.Provider, {
        value: L,
        children: (0, W.jsx)(vt.Provider, {
          value: F,
          children: (0, W.jsx)(dt.Provider, {
            value: k,
            children: (0, W.jsx)(ft.Provider, {
              value: O,
              children: (0, W.jsx)(Xt, {
                variantOverrideKeys: V.variantOverrideKeys,
                variantOverrideTraitTypes: V.variantOverrideTraitTypes,
                children: (0, W.jsx)(Ut, {
                  value: b,
                  children: z === "properties" ? (0, W.jsx)(Kt, { scope: ue, children: t }) : t,
                }),
              }),
            }),
          }),
        }),
      })
    ),
    _ = so(e);
  m?.updatePopout(x, Y, _, f);
  let ne = Q(p),
    J = Q(d),
    Ae = Q(() => {
      if (m) {
        if (!a || !s()) {
          m.close();
          return;
        }
        m.present(x, Y, {
          parent: y,
          triggerRef: l,
          displayDivider: i,
          title: _,
          toolbarAction: n,
          className: o,
          onDismiss: ne,
          onPresent: J,
          autoFocusInside: f,
        });
      }
    }),
    Io = Q(() => {
      m?.dismiss(x);
    });
  return (
    S.default.useEffect(() => {
      if (!a || !m) return;
      let He = () => {
        Ke.isTest || v(m.isPresenting(x));
      };
      return (
        m.addListener(He),
        m.registerPopout(x, Ae),
        () => {
          (m.removeListener(He), m.deregisterPopout(x));
        }
      );
    }, [x, a, m]),
    { present: Ae, dismiss: Io, isPresenting: C, ref: l }
  );
}
function so(t) {
  let e = S.default.useRef(t);
  return (ze(t, e.current) || (e.current = t), e.current);
}
function wi({
  popoverNavigationRef: t,
  displayInPopover: e,
  popoverAttachmentEdge: o,
  popoverAlignment: n,
  fallbackToModalAppearance: r,
  popoverOffset: a,
  showArrow: i,
  onPopoverKeydown: s,
  onPopoverCopy: d,
  ...p
}) {
  let u = S.default.useRef(null),
    f = (0, W.jsx)(Zo, { displayInPopover: e, ...p, ref: u });
  return e
    ? (0, W.jsx)(ao, {
        navigationRef: t,
        anchorRef: u,
        attachTo: o,
        alignment: n,
        onKeydown: s,
        onCopy: d,
        offset: a,
        fallbackToModalAppearance: r,
        showArrow: i,
        children: f,
      })
    : f;
}
var Zo = S.default.forwardRef(function (
  {
    id: e,
    large: o,
    popout: n,
    displayDivider: r,
    navigationTitle: a,
    navigationClassName: i,
    toolbarAction: s,
    className: d,
    onKeyDown: p,
    onClick: u,
    tabIndex: f = 0,
    enabled: g = !0,
    useFrescoButton: x = !1,
    withoutStyles: h = !1,
    frescoButtonProps: l = {},
    onBeforePresent: y,
    onPresent: m,
    onDismiss: C,
    autoFocusInside: v,
    togglePopoutEnabled: O = !1,
    displayInPopover: k,
    ...V
  },
  L
) {
  let {
      present: F,
      dismiss: b,
      isPresenting: z,
    } = Jo({
      popout: n,
      id: e,
      displayDivider: r,
      navigationTitle: a,
      navigationClassName: i,
      toolbarAction: s,
      enabled: g,
      onBeforePresent: y,
      onPresent: m,
      onDismiss: C,
      ref: L,
      autoFocusInside: v,
      displayInPopover: k,
    }),
    ue = (J) => {
      switch (J.key) {
        case "Enter":
        case " ":
          (F(), J.preventDefault());
          break;
        case "Escape":
          (J.currentTarget.blur(), b());
          break;
      }
    },
    Y = g === !1,
    _ = {
      role: "button",
      ref: L,
      tabIndex: Y ? void 0 : f,
      "aria-selected": z ? "true" : "false",
      className: w(d, !x && !h && w(_t, Y && Jt, o && Zt)),
      onKeyDown: lo(ue, p),
      [co]: !0,
      ...V,
    },
    ne = O && z ? u : lo(F, u);
  return x
    ? (0, W.jsx)(ee, { enabled: g, ...l, ..._, onClick: ne })
    : (0, W.jsx)("div", { id: e, ..._, onClick: ne });
});
function Le(t) {
  return t instanceof HTMLElement ? !!t.closest(po) : !1;
}
function Ii(t) {
  return t.querySelector(_o);
}
function Ri(t) {
  return document.getElementById(t);
}
function Qo(t) {
  let e = S.default.useRef(t);
  return (t && e.current !== t ? (e.current = t) : e.current || (e.current = Xe()), e.current);
}
function lo(t, e) {
  return e
    ? (o) => {
        (t(o), e(o));
      }
    : t;
}
var uo = w(lt, "wrgelve"),
  fo = "w1ufy8me";
var tn = "data-is-project-bar",
  Wi = `[${tn}]`,
  on = "data-is-left-panel",
  Ni = `[${on}]`,
  nn = "data-is-right-panel",
  mo = `[${nn}]`,
  rn = "data-is-code-editor",
  vo = `[${rn}]`,
  an = "data-is-analytics",
  go = `[${an}]`,
  sn = "data-is-collection-table",
  ho = `[${sn}]`,
  ln = "data-is-collection-left-panel",
  xo = `[${ln}]`,
  dn = "data-is-agent-chat-panel",
  Mi = `[${dn}]`,
  cn = "data-is-editor-overlay",
  bo = `[${cn}]`;
var X = c(I(), 1),
  yo = "data-is-popover-window",
  wo = `[${yo}="true"]`;
function pn(t, e) {
  return t.closest(bo) ? "100%" : e.left < window.innerWidth - e.right ? "0%" : "100%";
}
var Fe = class {
  navigation;
  floatingWindowRef = D.default.createRef();
  initialWindowTopOffset = "0px";
  initialWindowLeftOffset = "100%";
  constraintBy;
  verticalConstraintBy;
  getWindowPosition;
  configuredInitialLeftOffset;
  getOutsidePointerDownBehavior;
  repositionWhenOpen;
  fitContentWidth;
  constructor({
    constraintBy: e = "canvas",
    verticalConstraintBy: o = e,
    getWindowPosition: n = un,
    initialLeftOffset: r,
    getOutsidePointerDownBehavior: a = () => "default",
    repositionWhenOpen: i = !0,
    fitContentWidth: s = !1,
  } = {}) {
    ((this.constraintBy = e),
      (this.verticalConstraintBy = o),
      (this.getWindowPosition = n),
      (this.configuredInitialLeftOffset = r),
      (this.getOutsidePointerDownBehavior = a),
      (this.repositionWhenOpen = i),
      (this.fitContentWidth = s),
      (this.navigation = new q({
        triggerRender: this.rerender,
        willOpen: this.positionWindowNearElement,
        willPush: this.persistCurrentTopOffset,
        willPop: this.persistCurrentTopOffset,
      })));
  }
  positionWindowNearElement = (e) => {
    if (!(e instanceof HTMLElement)) return;
    let o = this.floatingWindowRef.current,
      n = e.getBoundingClientRect(),
      r = this.getWindowPosition(e, n);
    if (o) {
      if (!this.repositionWhenOpen) return;
      o.setPosition(r, { snapToEdges: !1 });
    } else
      ((this.initialWindowTopOffset = `${r.y}px`),
        (this.initialWindowLeftOffset = this.configuredInitialLeftOffset ?? pn(e, n)));
  };
  persistCurrentTopOffset = () => {
    let e = this.floatingWindowRef.current;
    e && (e.hasPersistedTopOffset() || e.persistCurrentTopOffset());
  };
  isOpen = () => this.navigation.isOpen();
  close = () => {
    this.navigation.close();
  };
  _rerender;
  rerender = () => this._rerender?.();
  navigationBarWrapper = (e) => (0, X.jsx)(Ht, { children: e });
  Component = D.default.memo(
    ({
      zIndex: e,
      visible: o,
      rightInsetOverride: n,
      requiredContentWidth: r,
      initialTopOffset: a,
      onPointerDownCapture: i,
    }) => {
      let s = H();
      pe(this.navigation);
      let d = Pt();
      (0, D.useEffect)(
        () => (
          (this._rerender = d),
          () => {
            this._rerender = void 0;
          }
        ),
        [d]
      );
      let p = this.navigation.isOpen();
      D.default.useEffect(() => {
        if (!p) return;
        let l = !1,
          y = !1,
          m = (v) => {
            if (this.navigation.isSuspended) return;
            l = !0;
            let O = this.getOutsidePointerDownBehavior(v.target);
            ((y = O === "keep-open"), O === "close" && this.closeIfPointerDownOutside(v));
          },
          C = (v) => {
            if (!this.navigation.isSuspended && l) {
              if (y) {
                y = !1;
                return;
              }
              this.closeIfClickedOutside(v);
            }
          };
        return (
          document.addEventListener("mousedown", m, { capture: !0 }),
          document.addEventListener("click", C),
          () => {
            (document.removeEventListener("mousedown", m, { capture: !0 }),
              document.removeEventListener("click", C));
          }
        );
      }, [p]);
      let u = (0, D.useCallback)((l) => {
          if (
            (N(s) && s.stores.mouseStore.setModifiers(l.nativeEvent),
            !l.defaultPrevented && l.key === "Escape")
          ) {
            if (this.navigation.isSuspended) return;
            (this.navigation.goBack(!0), l.stopPropagation());
          }
        }, []),
        f = (0, D.useCallback)((l) => {
          N(s) && s.stores.mouseStore.setModifiers(l.nativeEvent);
        }, []);
      if (!p) return null;
      let g = this.navigation.stack[this.navigation.currentStackIndex];
      if (!g) return null;
      let x = this.navigation.isSuspended,
        h = A(g.title) ? g.title : void 0;
      return (0, X.jsx)(se, {
        ref: this.floatingWindowRef,
        zIndex: e,
        visible: o && !x,
        rightInsetOverride: n,
        requiredContentWidth: r,
        onPointerDownCapture: i,
        initialTopOffset: a ?? this.initialWindowTopOffset,
        initialLeftOffset: this.initialWindowLeftOffset,
        constraintBy: this.constraintBy,
        verticalConstraintBy: this.verticalConstraintBy,
        children: (0, X.jsx)("div", {
          role: "dialog",
          "aria-label": h,
          className: w(
            uo,
            this.fitContentWidth && fo,
            this.navigation.stack[this.navigation.currentStackIndex]?.className
          ),
          onKeyDown: u,
          onKeyUp: f,
          onMouseUp: (l) => {
            N(s) && s.stores.canvasMouseTarget.handleMouseUp(l);
          },
          tabIndex: 0,
          [yo]: !0,
          children: (0, X.jsx)(K.Provider, {
            value: this.navigation,
            children: (0, X.jsx)(ie, {
              stack: this.navigation.stack,
              currentIndex: this.navigation.currentStackIndex,
              onBack: this.navigation.goBack,
              onClose: this.navigation.close,
              renderNavigationBarWrapper: this.navigationBarWrapper,
            }),
          }),
        }),
      });
    }
  );
  closeIfClickedOutside = ({ target: e }) => {
    be(e) || Le(e) || (fn(e) && (Po(), this.navigation.close()));
  };
  closeIfPointerDownOutside = ({ target: e }) => {
    be(e) ||
      Le(e) ||
      (e instanceof Element && e.closest(wo)) ||
      bt(e) ||
      (Po(), this.navigation.close());
  };
};
function Po() {
  let t = document.activeElement;
  t instanceof HTMLElement && t.closest(wo) && t.blur();
}
function un(t, e) {
  return { x: e.left, y: e.top - 9 };
}
function fn(t) {
  return t instanceof HTMLElement
    ? !!t.closest(mo) || !!t.closest(vo) || !!t.closest(go) || !!t.closest(xo) || !!t.closest(ho)
    : !1;
}
var Yi = new Fe();
export {
  wt as a,
  Wt as b,
  Te as c,
  Nt as d,
  Pn as e,
  re as f,
  ie as g,
  Oo as h,
  Nn as i,
  Kt as j,
  tr as k,
  zt as l,
  oe as m,
  ur as n,
  jo as o,
  fr as p,
  mr as q,
  Ut as r,
  qt as s,
  hr as t,
  Xt as u,
  _t as v,
  K as w,
  Cr as x,
  eo as y,
  q as z,
  Fr as A,
  ro as B,
  Ar as C,
  Hr as D,
  $r as E,
  ao as F,
  co as G,
  Yo as H,
  Jo as I,
  wi as J,
  Le as K,
  Ii as L,
  Ri as M,
  Dn as N,
  se as O,
  Ht as P,
  tn as Q,
  Wi as R,
  on as S,
  Ni as T,
  nn as U,
  rn as V,
  an as W,
  sn as X,
  ho as Y,
  ln as Z,
  dn as _,
  Mi as $,
  cn as aa,
  wo as ba,
  Fe as ca,
  Yi as da,
};
//# sourceMappingURL=chunk-7DT3LIKR.mjs.map
