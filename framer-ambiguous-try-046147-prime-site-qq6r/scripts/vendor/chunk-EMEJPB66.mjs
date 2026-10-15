import {
  a as ye,
  b as Pe,
  c as we,
  d as xe,
  e as me,
  f as Ae,
  g as Me,
  h as Ce,
  i as Ee,
  j as Oe,
  k as ke,
  l as Se,
  m as Le,
  n as De,
  o as Ne,
  p as Re,
  q as We,
  r as Be,
  s as $e,
  t as He,
  u as Ie,
} from "chunk-FCOEVT45.mjs";
import { b as Te } from "chunk-SFAGFBDE.mjs";
import { c as qe, e as oe } from "chunk-ZHENBEUN.mjs";
import { b as Fe, c as ze, d as U } from "chunk-T7T33KYZ.mjs";
import { b as M } from "chunk-KZLNHVFP.mjs";
import { a as b } from "chunk-QFU6OGL3.mjs";
import { b as pe, c as B } from "chunk-AYNVEX5D.mjs";
import { a as V } from "chunk-2FCXHKEL.mjs";
import { a as te } from "chunk-SWYZG2NI.mjs";
import { c as w } from "chunk-4JY5UMT2.mjs";
import { e as O } from "chunk-WLHSDIGQ.mjs";
var re = O(te()),
  ne = (0, re.createContext)(void 0);
ne.displayName = "WithinPopoverContext";
function Kt(e = !1) {
  return (0, re.useContext)(ne) ?? e;
}
var Ve = "--margin-top",
  je = "--margin-bottom",
  _e = "t1harvmc";
var Ue = O(V());
function Ke({
  size: e = Te.size.base,
  lineHeight: t = 1.5,
  children: o,
  className: r,
  style: s,
  disableSpacingCorrection: a,
  ...d
}) {
  let n = 0,
    i = 0;
  if (a) n = i = 0;
  else if (B(e)) {
    let c = Math.floor((e * t - e) / 2),
      p = e / 12;
    ((n = `-${p + c}px`), (i = `-${1 + p + c}px`));
  } else {
    let c = `(${e} * ${t} - ${e}) / 2`,
      p = `${e} / 12`;
    ((n = `calc(-1 * ${c} - ${p})`), (i = `calc(-1px - ${c} - ${p})`));
  }
  let u = {
    fontSize: B(e) ? `${e}px` : e,
    lineHeight: B(e) ? `${e * t}px` : `calc(${e} * ${t})`,
    [Ve]: n,
    [je]: i,
    ...s,
  };
  return (0, Ue.jsx)("div", { className: b(_e, r), style: u, ...d, children: o });
}
var T = O(te());
var Ye = b(ye, "cnajjln"),
  Ze = "c93qo4z",
  Xe = "coyqxha",
  Ge = "a1lz2nwz",
  Je = "t1uoieyj",
  Qe = "aq1ds02",
  et = "beba92x",
  tt = "e1xmktzb",
  ot = "c14lm6d1",
  rt = "bisoyrt",
  nt = "pnx7pkp",
  it = "c1s4occc";
var $ = O(te());
var x = O(te());
var st = 0;
function Mt(e) {
  return typeof e == "number" ? e : e === "short" ? 100 : e === "long" ? 500 : 600;
}
function at(e) {
  return Date.now() - st <= 300 ? 0 : Mt(e);
}
function lt() {
  st = Date.now();
}
var Ct = 50;
function ct({ delay: e, disabled: t, hideOnClick: o, isToolbarVariant: r, onClick: s }) {
  let [a, d] = (0, x.useState)("hidden"),
    [n, i] = (0, x.useState)(void 0),
    u = (0, x.useRef)(void 0),
    c = (0, x.useRef)(void 0),
    p = (0, x.useCallback)(() => {
      (clearTimeout(u.current), clearTimeout(c.current), d("hidden"));
    }, []),
    g = (0, x.useCallback)(() => {
      if (t) return;
      if ((clearTimeout(c.current), clearTimeout(u.current), !r)) {
        (i(e), d("visible"));
        return;
      }
      let l = at(e);
      if ((i(void 0), l <= 0)) {
        d("visible");
        return;
      }
      (d("hidden"),
        (u.current = window.setTimeout(() => {
          d("visible");
        }, l)));
    }, [e, t, r]),
    v = (0, x.useCallback)(() => {
      if ((clearTimeout(u.current), !r)) {
        p();
        return;
      }
      if (a !== "exiting") {
        if (a === "visible") {
          (lt(),
            d("exiting"),
            clearTimeout(c.current),
            (c.current = window.setTimeout(() => {
              d("hidden");
            }, Ct)));
          return;
        }
        p();
      }
    }, [p, r, a]),
    m = (0, x.useCallback)(() => {
      (o && p(), s?.());
    }, [o, p, s]);
  return (
    (0, x.useEffect)(() => {
      t && p();
    }, [t, p]),
    (0, x.useEffect)(
      () => () => {
        (clearTimeout(u.current), clearTimeout(c.current));
      },
      []
    ),
    {
      computedDelayMs: n,
      hideTooltip: p,
      handleClick: m,
      handlePointerEnter: g,
      handlePointerLeave: v,
      phase: a,
      shouldRender: a !== "hidden",
    }
  );
}
var f = O(V());
function fe({ className: e, style: t, direction: o }) {
  switch (o) {
    case "left":
      return (0, f.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: b(De, e),
        style: t,
        "aria-hidden": "true",
        children: (0, f.jsx)("path", {
          d: "M 1.333 12.833 C 0.627 13.451 0.627 14.549 1.333 15.167 L 4.585 18.012 C 6.755 19.911 8 22.654 8 25.538 L 8 28 L 8 0 L 8 2.462 C 8 5.346 6.755 8.089 4.585 9.988 Z",
          fill: "currentColor",
        }),
      });
    case "top":
      return (0, f.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: b(Se, e),
        style: t,
        "aria-hidden": "true",
        children: (0, f.jsx)("path", {
          d: "M 12.833 1.333 C 13.451 0.627 14.549 0.627 15.167 1.333 L 18.012 4.585 C 19.911 6.755 22.654 8 25.538 8 L 28 8 L 0 8 L 2.462 8 C 5.346 8 8.089 6.755 9.988 4.585 Z",
          fill: "currentColor",
        }),
      });
    case "right":
      return (0, f.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: b(Ne, e),
        style: t,
        "aria-hidden": "true",
        children: (0, f.jsx)("path", {
          d: "M 6.667 12.833 C 7.373 13.451 7.373 14.549 6.667 15.167 L 3.415 18.012 C 1.245 19.911 0 22.654 0 25.538 L 0 28 L 0 0 L 0 2.462 C 0 5.346 1.245 8.089 3.415 9.988 Z",
          fill: "currentColor",
        }),
      });
    case "bottom":
      return (0, f.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: b(Le, e),
        style: t,
        "aria-hidden": "true",
        children: (0, f.jsx)("path", {
          d: "M 12.833 6.667 C 13.451 7.373 14.549 7.373 15.167 6.667 L 18.012 3.415 C 19.911 1.245 22.654 0 25.538 0 L 28 0 L 0 0 L 2.462 0 C 5.346 0 8.089 1.245 9.988 3.415 Z",
          fill: "currentColor",
        }),
      });
    default:
      w(o);
  }
}
var ut = $.default.memo(
  $.default.forwardRef(function (
    {
      tint: t,
      tooltip: o,
      text: r,
      shortcut: s,
      delay: a,
      className: d,
      direction: n = "top",
      arrowPosition: i,
      variant: u = "default",
      hideArrow: c = u === "toolbar",
      style: p,
    },
    g
  ) {
    let v = u === "toolbar",
      m = { ...p },
      l = {};
    if (
      (a && (m["--delay"] = `${a}ms`),
      t && ((m.background = t), (l.color = t)),
      n === "bottom" && v && (m["--initial-translate-y"] = `${Pe}px`),
      i)
    )
      switch (n) {
        case "top":
        case "bottom":
          l.left = i;
          break;
        case "left":
        case "right":
          l.top = i;
          break;
        default:
          w(n);
      }
    return (0, f.jsxs)("div", {
      className: b(v ? xe : we, v ? Me : Ae, v ? Oe : Ce, n === "bottom" && Ee, d),
      style: m,
      ref: g,
      children: [
        !c && (0, f.jsx)(fe, { direction: n, className: ke, style: l }),
        o ??
          (v
            ? (0, f.jsxs)("div", {
                className: b(We, s && Be),
                children: [
                  (0, f.jsx)("span", { className: $e, children: r }),
                  s && (0, f.jsx)("span", { className: b(He, s.length > 1 && Ie), children: s }),
                ],
              })
            : (0, f.jsx)(Ke, { children: r })),
      ],
    });
  })
);
function Et(e) {
  switch (e) {
    case "top":
    case "bottom":
      return { x: 0, y: M.values.tooltipOffset };
    case "left":
    case "right":
      return { x: M.values.tooltipOffset, y: 0 };
    default:
      w(e);
  }
}
function Ot(e, t, o, r, s, a) {
  let d = (a === "end" ? t.right - o.width : t.left + t.width / 2 - o.width / 2) + s.x,
    n = M.values.tooltipOffset,
    i = Math.max(n, Math.min(d, r - o.width - n)),
    u = t.top + t.height / 2 - o.height / 2;
  switch (e) {
    case "top":
      return { top: Math.round(t.bottom + s.y), left: Math.round(i) };
    case "bottom":
      return { top: Math.round(t.top - o.height - s.y), left: Math.round(i) };
    case "left":
      return { top: Math.round(u + s.y), left: Math.round(t.right + s.x) };
    case "right":
      return { top: Math.round(u + s.y), left: Math.round(t.left - o.width - s.x) };
    default:
      w(e);
  }
}
function To({
  children: e,
  tooltip: t,
  text: o,
  isDisabled: r,
  tint: s,
  delay: a,
  className: d,
  innerClassName: n,
  direction: i = "top",
  arrowPosition: u,
  onClick: c,
  hideOnClick: p = !0,
  shortcut: g,
  variant: v = "default",
  colorVariant: m = "default",
  hideArrow: l,
  positionOffset: L,
  alignment: A = "center",
}) {
  let E = v === "toolbar",
    Y = kt(m),
    {
      computedDelayMs: Z,
      hideTooltip: X,
      handleClick: ie,
      handlePointerEnter: se,
      handlePointerLeave: q,
      phase: j,
      shouldRender: ae,
    } = ct({ delay: a, disabled: r, hideOnClick: p, isToolbarVariant: E, onClick: c }),
    H = $.default.useRef(null),
    D = $.default.useRef(null),
    [N, _] = $.default.useState(null),
    R = !r && ae,
    I = Et(i),
    G = L?.x ?? I.x,
    K = L?.y ?? I.y;
  ($.default.useLayoutEffect(() => {
    if (!R || !E) {
      _(null);
      return;
    }
    if (!H.current || !D.current) return;
    let h = H.current.getBoundingClientRect(),
      P = { width: D.current.offsetWidth, height: D.current.offsetHeight };
    _(Ot(i, h, P, window.innerWidth, { x: G, y: K }, A));
  }, [A, i, E, G, K, R]),
    $.default.useEffect(() => {
      if (!R || !E) return;
      let h = { capture: !0 },
        P = () => {
          (X(), _(null));
        };
      return (
        window.addEventListener("scroll", P, h),
        window.addEventListener("resize", P),
        () => {
          (window.removeEventListener("scroll", P, h), window.removeEventListener("resize", P));
        }
      );
    }, [X, E, R]));
  let J = E
    ? {
        position: "fixed",
        top: N?.top ?? 0,
        right: "auto",
        bottom: "auto",
        left: N?.left ?? 0,
        visibility: N ? "visible" : "hidden",
      }
    : void 0;
  return (0, f.jsxs)(f.Fragment, {
    children: [
      (0, f.jsxs)("div", {
        ref: H,
        className: b(Re, d),
        onPointerEnter: se,
        onPointerLeave: q,
        onClick: ie,
        children: [
          e,
          R &&
            !E &&
            (0, f.jsx)(U, {
              mode: Y,
              "data-testid": dt(m),
              children: (0, f.jsx)(ut, {
                direction: i,
                tint: s,
                delay: Z,
                tooltip: t,
                text: o,
                shortcut: g,
                variant: v,
                hideArrow: l,
                className: b(n, E && j === "exiting" && me),
                arrowPosition: u,
              }),
            }),
        ],
      }),
      R &&
        E &&
        (0, f.jsx)(oe, {
          children: (0, f.jsx)(U, {
            mode: Y,
            "data-testid": dt(m),
            children: (0, f.jsx)(ut, {
              ref: D,
              direction: i,
              tint: s,
              delay: Z,
              tooltip: t,
              text: o,
              shortcut: g,
              variant: v,
              hideArrow: l,
              className: b(n, j === "exiting" && me),
              arrowPosition: u,
              style: J,
            }),
          }),
        }),
    ],
  });
}
function dt(e) {
  return e === "lighter" ? "tooltip-color-variant" : void 0;
}
function kt(e) {
  switch (e) {
    case "default":
      return;
    case "lighter":
      return "tooltipVariantLighter";
    default:
      w(e, "Invalid tooltip color variant");
  }
}
var S = O(V());
function ft(e) {
  return e.type === "anchored" && "top" in e.properties;
}
function St(e) {
  return e.type === "anchored" && "bottom" in e.properties;
}
var Lt = {
    top: M.values.panelPadding,
    right: -M.values.panelPadding,
    bottom: -M.values.panelPadding,
    left: M.values.panelPadding,
  },
  ht = "data-is-popover",
  Dt = `[${ht}]`;
function Lo() {
  return !!document.activeElement?.closest(Dt);
}
function Nt(e, t) {
  return e === "onPageEditing" || t === "darkOnDarkModal"
    ? "darkOnDarkModal"
    : t === "darkOnDarkPopoutWindow"
      ? "darkOnDarkPopoutWindow"
      : "popover";
}
function Rt(e, t, o) {
  if (e === "onPageEditing") return "onPageEditing";
  switch (t) {
    case "component":
    case "darkOnDarkPopoutWindow":
      return t;
    default:
      return o;
  }
}
function Wt(e) {
  let t = Fe(),
    o = ze();
  if (e === "none") return { popoverThemeMode: void 0, contentThemeMode: o ?? t };
  let r = Nt(t, o),
    s = Rt(t, o, r);
  return { popoverThemeMode: r, contentThemeMode: s };
}
function Bt({
  anchor: e,
  alignSelf: t,
  attachTo: o,
  offset: r,
  within: s,
  showArrow: a = !1,
  canClose: d,
  arrow: n,
  focusTrapEnabled: i = !0,
  containerStyleEnabled: u = !0,
  className: c,
  style: p,
  onClose: g,
  children: v,
  fallbackToModalAppearance: m = !1,
  animateAppear: l = !0,
  backdropEnabled: L = !0,
  backdropTintEnabled: A = !0,
  zIndex: E = 24,
  themeBehavior: Y = "auto",
  ...Z
}) {
  let X = n?.anchor ?? null,
    ie = n?.alignSelf ?? t,
    se = n?.offset ?? 0,
    [q, j] = (0, T.useState)(null),
    [ae, H] = (0, T.useState)(!1),
    [D, N] = (0, T.useState)(!1),
    [_, R] = (0, T.useState)({}),
    [I, G] = (0, T.useState)(() => (Array.isArray(o) ? o[0] : o)),
    K = q !== null,
    J = (0, T.useRef)(I),
    h = (0, T.useRef)(null),
    P = (0, T.useRef)(null),
    F = (0, T.useRef)(null),
    k = (0, T.useRef)(null),
    le = (0, T.useRef)(g);
  le.current = g;
  let { popoverThemeMode: bt, contentThemeMode: gt } = Wt(Y);
  ((0, T.useLayoutEffect)(() => {
    let y = () => {
      if (!e || !h.current) {
        j(null);
        return;
      }
      let ee = {
          height: window.visualViewport?.height ?? window.innerHeight,
          width: window.visualViewport?.width ?? window.innerWidth,
        },
        W = Object.assign({}, Lt, s);
      (W.right && W.right < 0 && (W.right += ee.width),
        W.bottom && W.bottom < 0 && (W.bottom += ee.height));
      let ge = e.getBoundingClientRect(),
        ve = h.current.getBoundingClientRect(),
        de = zt(ve, ee, ge, o, J, m, W, r ?? { x: 0, y: 0 });
      (G(de), (J.current = de));
      let z = qt({
        anchorRectangle: ge,
        popoverRectangle: ve,
        actualAttachTo: de,
        alignSelf: t,
        offset: r,
        within: W,
        viewport: ee,
      });
      (j(z),
        h.current &&
          (ft(z)
            ? ((h.current.style.left = `${z.properties.left}px`),
              (h.current.style.top = `${z.properties.top}px`),
              (h.current.style.bottom = "unset"))
            : St(z)
              ? ((h.current.style.left = `${z.properties.left}px`),
                (h.current.style.bottom = `${z.properties.bottom}px`),
                (h.current.style.top = "unset"))
              : ((h.current.style.left = "unset"),
                (h.current.style.bottom = "unset"),
                (h.current.style.top = "unset")),
          R({ visibility: "visible" })));
    };
    (y(), window.addEventListener("resize", y), window.addEventListener("scroll", y));
    let ue = new ResizeObserver(y);
    return (
      e !== null && ue.observe(e),
      h.current && ue.observe(h.current),
      () => {
        (window.removeEventListener("resize", y),
          window.removeEventListener("scroll", y),
          ue.disconnect());
      }
    );
  }, [e, t, o, r, s, m]),
    (0, T.useLayoutEffect)(() => {
      if (!l || !K) {
        (H(!1), N(!1));
        return;
      }
      return (
        k.current !== null && cancelAnimationFrame(k.current),
        H(!1),
        (k.current = requestAnimationFrame(() => {
          (H(!0), (k.current = null));
        })),
        () => {
          k.current !== null && (cancelAnimationFrame(k.current), (k.current = null));
        }
      );
    }, [l, K]),
    (0, T.useEffect)(
      () => () => {
        (P.current !== null && window.clearTimeout(P.current),
          F.current !== null && cancelAnimationFrame(F.current),
          k.current !== null && cancelAnimationFrame(k.current));
      },
      []
    ));
  function be() {
    if (g && !(d && !d())) {
      if (!l) return g();
      D ||
        (N(!0),
        (F.current = requestAnimationFrame(() => {
          F.current = null;
          let y = 100;
          P.current = window.setTimeout(() => {
            (N(!1), (P.current = null), le.current?.());
          }, y);
        })));
    }
  }
  function vt(y) {
    D &&
      y.target === y.currentTarget &&
      y.propertyName === "transform" &&
      (F.current !== null && (cancelAnimationFrame(F.current), (F.current = null)),
      P.current !== null && (window.clearTimeout(P.current), (P.current = null)),
      N(!1),
      le.current?.());
  }
  function Tt(y) {
    (y.stopPropagation(), y.key === "Escape" && be());
  }
  function yt() {
    g && setImmediate(be);
  }
  function Pt(y) {
    y.stopPropagation();
  }
  if (!e) return null;
  let ce = q?.type === "centered",
    wt = $t(I, t),
    Q = Vt({ anchorEl: X, alignment: ie, offset: se, popoverPosition: q, attachTo: I });
  return (0, S.jsx)(oe, {
    mode: bt,
    children: (0, S.jsx)("div", {
      onMouseDown: L ? yt : void 0,
      onKeyDown: L ? Tt : void 0,
      className: b(et, L && tt, ce && ot, ce && A && rt),
      style: { zIndex: E },
      "data-is-popover-backdrop": "true",
      children: (0, S.jsx)("div", {
        ref: h,
        className: b(nt, ce && it),
        style: _,
        onMouseDown: Pt,
        role: "presentation",
        [ht]: !0,
        ...Z,
        children: (0, S.jsx)(ne.Provider, {
          value: !0,
          children: (0, S.jsxs)(qe, {
            focusTrapActive: i,
            className: b(u ? Ye : Ze, !a && Xe, l && Ge, c),
            "data-popover-attach": I ?? void 0,
            "data-entered": l ? String(ae) : void 0,
            "data-leave": D ? "true" : void 0,
            onTransitionEnd: vt,
            style: { "--popover-transform-origin": wt, ...p },
            children: [
              (0, S.jsx)(U, { mode: gt, children: v }),
              a && q?.type === "anchored"
                ? (0, S.jsx)(
                    fe,
                    {
                      direction: Q.position,
                      className: b(Qe, Q.arrowClass, n?.className),
                      style: Q.inlineStyle,
                    },
                    Q.position
                  )
                : null,
            ],
          }),
        }),
      }),
    }),
  });
}
Bt.displayName = "Popover";
function $t(e, t) {
  if (!e) return "center center";
  let o = Ht(t),
    r = It(t);
  switch (e) {
    case "bottom":
      return `top ${o}`;
    case "top":
      return `bottom ${o}`;
    case "left":
      return `${r} right`;
    case "right":
      return `${r} left`;
    default:
      return "top center";
  }
}
function Ht(e) {
  switch (e) {
    case "start":
      return "left";
    case "center":
      return "center";
    case "end":
      return "right";
    default:
      return w(e);
  }
}
function It(e) {
  switch (e) {
    case "start":
      return "top";
    case "center":
      return "center";
    case "end":
      return "bottom";
    default:
      return w(e);
  }
}
function he(e, t) {
  switch (e) {
    case "auto-horizontal":
      return t.left > t.right ? "left" : "right";
    case "auto-vertical":
      return t.top > t.bottom ? "top" : "bottom";
    default:
      return e;
  }
}
function Ft(e, t) {
  let o = t.current;
  return pe(e) ? (o && o !== e ? [o, e] : [e]) : o ? [o, ...e.filter((r) => r !== o)] : e;
}
function zt(e, t, o, r, s, a, d, n) {
  let i = {
    left: o.left - (d.left ?? 0),
    right: (d.right ?? t.width) - o.right,
    top: o.top - (d.top ?? 0),
    bottom: (d.bottom ?? t.height) - o.bottom,
  };
  if (pe(r) && !a) return he(r, i);
  let u = Ft(r, s),
    c = n.x ?? 0,
    p = n.y ?? 0,
    g = u.reduce((v, m) => {
      if (v) return v;
      let l = he(m, i);
      return l === "top" && e.height + p <= i.top
        ? "top"
        : l === "bottom" && e.height + p <= i.bottom
          ? "bottom"
          : l === "left" && e.width + c <= i.left
            ? "left"
            : l === "right" && e.width + c <= i.right
              ? "right"
              : null;
    }, null);
  return g || (a ? null : he(u[0], i));
}
function qt({
  anchorRectangle: e,
  popoverRectangle: t,
  actualAttachTo: o,
  alignSelf: r,
  offset: s = { x: 0, y: 0 },
  within: a,
  viewport: d,
}) {
  if (o === null) return { type: "centered" };
  let n = { ...a },
    i,
    u,
    c;
  switch (o) {
    case "top":
      ((u = d.height - e.top + s.y), (c = pt(r, e, t, s.x)), (n.top = void 0));
      break;
    case "bottom":
      ((i = e.bottom + s.y), (c = pt(r, e, t, s.x)), (n.bottom = void 0));
      break;
    case "left":
      ((i = mt(r, e, t, s.y)), (c = e.left - t.width - s.x), (n.left = void 0));
      break;
    case "right":
      ((i = mt(r, e, t, s.y)), (c = e.right + s.x), (n.right = void 0));
      break;
    default:
      return w(o);
  }
  return (
    B(i) && (n.bottom && (i = Math.min(i, n.bottom - t.height)), n.top && (i = Math.max(i, n.top))),
    B(u) &&
      (n.top && (u = Math.min(u, d.height - n.top - t.height)),
      n.bottom && (u = Math.max(u, d.height - n.bottom))),
    n.right && (c = Math.min(c, n.right - t.width)),
    n.left && (c = Math.max(c, n.left)),
    B(u)
      ? { type: "anchored", properties: { bottom: u, left: c, height: t.height, width: t.width } }
      : { type: "anchored", properties: { top: i ?? 0, left: c, height: t.height, width: t.width } }
  );
}
function pt(e, t, o, r) {
  switch (e) {
    case "start":
      return t.left + r;
    case "center":
      return Math.round(t.left + t.width / 2 - o.width / 2);
    case "end":
      return t.right - o.width - r;
    default:
      return w(e);
  }
}
function mt(e, t, o, r) {
  switch (e) {
    case "start":
      return t.top + r;
    case "center":
      return Math.round(t.top + t.height / 2 - o.height / 2);
    case "end":
      return t.bottom - o.height - r;
    default:
      return w(e);
  }
}
var C = M.values.popoverRadius + 6;
function Vt({ anchorEl: e, alignment: t, offset: o, popoverPosition: r, attachTo: s }) {
  if (!s) return { inlineStyle: {}, position: "top" };
  let a = e
    ? jt({ anchorEl: e, alignment: t, offset: o, popoverPosition: r, attachTo: s })
    : _t({ alignment: t, offset: o });
  return {
    inlineStyle: a.inlineStyle,
    position: a.position,
    arrowClass: a.temporarilyHideArrow ? Je : void 0,
  };
}
function jt({ anchorEl: e, alignment: t, offset: o, popoverPosition: r, attachTo: s }) {
  if (r?.type !== "anchored") return { inlineStyle: {}, position: "top", temporarilyHideArrow: !1 };
  let a = e.getBoundingClientRect(),
    d = r.properties.left,
    n,
    i;
  switch (t) {
    case "start":
      ((n = a.left), (i = a.top));
      break;
    case "center":
      ((n = a.left + a.width / 2), (i = a.top + a.height / 2));
      break;
    case "end":
      ((n = a.right), (i = a.bottom));
      break;
    default:
      w(t);
  }
  let c = n - d + o,
    p = s === "top",
    g = s === "right",
    v = s === "left",
    m = !1;
  if (p) {
    let l = Math.round(c);
    return (
      l < C && ((l = C), (m = !0)),
      l > r.properties.width - C && ((l = r.properties.width - C), (m = !0)),
      {
        inlineStyle: {
          left: `${l}px`,
          bottom: `calc(${M.css.tooltipArrowHeight} * -1)`,
          top: "unset",
        },
        position: "bottom",
        temporarilyHideArrow: m,
      }
    );
  } else if (r && ft(r) && (g || v)) {
    let l = r.properties.top,
      L = Math.round(i - l),
      A = Math.max(L, o);
    return (
      (A = Math.min(A, r.properties.height - o)),
      (g || v) &&
        (A < C && ((A = C), (m = !0)),
        A > r.properties.height - C && ((A = r.properties.height - C), (m = !0))),
      { inlineStyle: { top: `${A}px` }, position: g ? "left" : "right", temporarilyHideArrow: m }
    );
  } else {
    let l = Math.round(c);
    return (
      l < C && ((l = C), (m = !0)),
      l > r.properties.width - C && ((l = r.properties.width - C), (m = !0)),
      { inlineStyle: { left: `${l}px` }, position: "top", temporarilyHideArrow: m }
    );
  }
}
function _t({ alignment: e, offset: t }) {
  let o = M.css.popoverRadius,
    r = {};
  switch (e) {
    case "start":
      r = { left: `calc(${o} + ${t}px)` };
      break;
    case "center":
      break;
    case "end":
      r = { right: `calc(${o} + ${t}px)` };
      break;
    default:
      w(e);
  }
  return { inlineStyle: r, position: "top" };
}
export { ne as a, Kt as b, Ke as c, at as d, lt as e, fe as f, To as g, Dt as h, Lo as i, Bt as j };
//# sourceMappingURL=chunk-EMEJPB66.mjs.map
