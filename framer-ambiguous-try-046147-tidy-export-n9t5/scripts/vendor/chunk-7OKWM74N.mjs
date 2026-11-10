import { E as Ue, G as j } from "chunk-BMV3OQDF.mjs";
import { e as Ge } from "chunk-E5OEW2PT.mjs";
import { a as X, b as He, c as Ne, d as Le, f as Be, s as Oe } from "chunk-65HNOCXW.mjs";
import { ai as Fe, qj as Ve } from "chunk-WXB3REPI.mjs";
import { Bi as Ie, Gk as Me, Lg as De } from "chunk-PT3LJ7DW.mjs";
import { g as ve } from "chunk-NV34DTUJ.mjs";
import { f as Y } from "chunk-RYFGM7EN.mjs";
import { a as W, b as _e, u as q } from "chunk-VYMQRK2U.mjs";
import { f as L } from "chunk-C7MDP62F.mjs";
import { c as Ke } from "chunk-AHMJYXZJ.mjs";
import { b as ke } from "chunk-WRBBN7SY.mjs";
import { a as U } from "chunk-2FCXHKEL.mjs";
import { b as u, c as Se } from "chunk-4JY5UMT2.mjs";
import { a as z } from "chunk-SWYZG2NI.mjs";
import { i as we } from "chunk-WBI6GGAG.mjs";
import { e as K } from "chunk-WLHSDIGQ.mjs";
var $ = K(z(), 1);
function Xe(n) {
  let t = Ke();
  return Ge(() => Me(t.tree, n ?? void 0), [t, n], "Tree");
}
var je = K(U(), 1);
function Ye({ control: n, controlProp: t, ...r }) {
  let { EnumControlPropRow: o } = j(),
    b = Xe(n);
  if (!o || !b) return null;
  let { value: C } = t,
    d = ke(C) || De(C) ? C : Ve(b, t);
  return (0, je.jsx)(o, {
    ...r,
    control: b,
    controlProp: { ...t, value: d },
    sharedEnumIdentifier: ve(n.moduleIdentifier) ? n.moduleIdentifier : void 0,
  });
}
var s = K(U(), 1),
  Kr = $.default.memo(function n({
    nodeIds: t,
    controlKey: r,
    control: o,
    controlPath: b = r,
    getControlPropPaths: C,
    onChange: d,
    onImageUpload: M,
    onContextMenu: m,
    controlProp: e,
    controlSourceIdentifier: F,
    controlSourceControlKey: R,
    sortable: h,
    supportsVariables: y,
    supportsComputedValues: x,
    supportsFetchDataValues: w = x,
    displayInPopover: k,
    icons: B,
    controlKeyIsTraitTypeKey: I,
    popoutId: v,
    hiddenControlsByNodeId: V,
    scopeType: D,
    deleteEnabled: c,
    deleteTitle: p,
    onDelete: l,
  }) {
    let a, T;
    o.description && (T = (0, s.jsx)(Ue, { description: o.description }));
    let i = $.default.useMemo(() => (I ? [Ie(r)] : void 0), [r, I]),
      f = $.default.useCallback(
        (Ae, nr) => {
          d(nr, () => Ae, t);
        },
        [t, d]
      ),
      {
        ArrayControlPropRow: S,
        BooleanControlPropRow: O,
        BorderControlPropRow: G,
        BorderRadiusControlPropRow: _,
        BoxShadowControlPropRow: E,
        CanvasPageInstanceRow: A,
        CollectionReferenceControlPropRow: P,
        ColorArrayControlPropRow: H,
        ColorControlPropRow: Q,
        LocationControlPropRow: Z,
        CursorControlPropRow: ee,
        CustomCursorControlPropRow: re,
        DateControlPropRow: te,
        DimensionControlPropRow: oe,
        EnumControlPropRow: ne,
        FileControlPropRow: ae,
        FontControlPropRow: ie,
        FusedNumberControlPropRow: se,
        GapControlPropRow: pe,
        ImageControlPropRow: le,
        LinkControlPropRow: ce,
        LinkRelValuesControlPropRow: ue,
        MultiCollectionReferenceControlPropRow: me,
        MotionValueControlPropRow: ye,
        NumberControlPropRow: de,
        ObjectControlPropRow: fe,
        PaddingControlPropRow: Ce,
        PageScopeControlPropRow: ge,
        RichTextControlPropRow: Ee,
        ScrollSectionRefControlPropRow: be,
        SlotControlPropRow: xe,
        StringControlPropRow: Pe,
        TrackingIdControlPropRow: he,
        TransitionControlPropRow: Re,
        VectorSetItemControlPropRow: Te,
      } = j();
    switch (o.type) {
      case "boolean":
        if ((u(e.type === "boolean"), !O)) return;
        a = (0, s.jsx)(O, {
          nodeIds: t,
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          sortable: h,
          traitTypeKeys: i,
          supportsVariables: y,
          supportsComputedValues: x,
          supportsFetchDataValues: w,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "motionvalue":
        if ((u(e.type === "motionvalue"), !ye)) return;
        a = (0, s.jsx)(ye, {
          supportsVariables: y,
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          traitTypeKeys: i,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "number":
        if ((u(e.type === "number"), !de)) return;
        a = (0, s.jsx)(de, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          sortable: h,
          traitTypeKeys: i,
          supportsVariables: y,
          supportsComputedValues: x,
          nodeIds: t,
          supportsFetchDataValues: w,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "dimension":
        if ((u(e.type === "dimension"), !oe)) return;
        a = (0, s.jsx)(oe, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          traitTypeKeys: i,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
          supportsVariables: y,
        });
        break;
      case "string":
        if ((u(e.type === "string"), !Pe)) return;
        a = (0, s.jsx)(Pe, {
          nodeIds: t,
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: d,
          onContextMenu: m,
          sortable: h,
          traitTypeKeys: i,
          supportsVariables: y,
          supportsFetchDataValues: w,
          supportsComputedValues: x,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "trackingid":
        if ((u(e.type === "trackingid"), !he)) return;
        a = (0, s.jsx)(he, {
          controlKey: r,
          control: o,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          traitTypeKeys: i,
          supportsVariables: y,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "richtext":
        if ((u(e.type === "richtext"), !Ee)) return;
        a = (0, s.jsx)(Ee, {
          nodeIds: t,
          control: o,
          controlKey: r,
          controlProp: e,
          getControlPropPaths: C,
          onChange: d,
          onContextMenu: m,
          sortable: h,
          traitTypeKeys: i,
          supportsVariables: y,
          scopeType: D,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "fusednumber":
        if ((u(e.type === "fusednumber"), !se)) return;
        a = (0, s.jsx)(se, {
          nodeIds: t,
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          traitTypeKeys: i,
          sortable: h,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "enum":
        if ((u(e.type === "enum"), !ne)) return;
        a = (0, s.jsx)(ne, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          sortable: h,
          icons: B,
          controlSourceIdentifier: F,
          controlSourceControlKey: R,
          traitTypeKeys: i,
          supportsVariables: y,
          supportsComputedValues: x,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "sharedtype":
        (u(e.type === "enum"),
          (a = (0, s.jsx)(Ye, {
            control: o,
            controlKey: r,
            controlProp: e,
            onChange: f,
            onContextMenu: m,
            sortable: h,
            icons: B,
            controlSourceIdentifier: F,
            controlSourceControlKey: R,
            traitTypeKeys: i,
            supportsVariables: y,
            supportsComputedValues: x,
            deleteEnabled: c,
            deleteTitle: p,
            onDelete: l,
          })));
        break;
      case "color":
        if ((u(e.type === "color"), !Q)) return;
        a = (0, s.jsx)(Q, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          sortable: h,
          traitTypeKeys: i,
          displayInPopover: k,
          supportsVariables: y,
          supportsComputedValues: x,
          supportsFetchDataValues: w,
          nodeIds: t,
          popoutId: v,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "responsiveimage":
      case "image":
        if ((u(e.type === "image" || e.type === "responsiveimage"), !le)) return;
        a = (0, s.jsx)(le, {
          nodeIds: t,
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: d,
          onUpload: M,
          onContextMenu: m,
          sortable: h,
          traitTypeKeys: i,
          displayInPopover: k,
          supportsFetchDataValues: w,
          supportsVariables: y,
          popoutId: v,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "file":
        if ((u(e.type === "file"), !ae)) return;
        a = (0, s.jsx)(ae, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          sortable: h,
          traitTypeKeys: i,
          supportsVariables: y,
          supportsComputedValues: x,
          controlSourceIdentifier: F,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "slot": {
        if ((u(e.type === "slot"), t.length !== 1)) return null;
        if (F === "framer/Prototype") {
          if (!A) return;
          a = (0, s.jsx)(A, {
            nodeIds: t,
            control: o,
            controlKey: r,
            controlProp: e,
            onChange: f,
            deleteEnabled: c,
            deleteTitle: p,
            onDelete: l,
          });
        } else {
          if (!xe) return;
          a = (0, s.jsx)(xe, {
            nodeIds: t,
            control: o,
            controlKey: r,
            controlPath: b,
            controlProp: e,
            traitTypeKeys: i,
            onChange: d,
            deleteEnabled: c,
            deleteTitle: p,
            onDelete: l,
          });
        }
        break;
      }
      case "transition":
        if ((u(e.type === "transition"), !Re)) return;
        a = (0, s.jsx)(Re, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          sortable: h,
          supportsVariables: y,
          traitTypeKeys: i,
          popoutId: v,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "boxshadow":
        if ((u(e.type === "boxshadow"), !E)) return;
        a = (0, s.jsx)(E, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: d,
          onContextMenu: m,
          supportsVariables: y,
          traitTypeKeys: i,
          popoutId: v,
          nodeIds: t,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "font":
        if ((u(e.type === "font"), !ie)) return;
        a = (0, s.jsx)(ie, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: d,
          nodeIds: t,
          traitTypeKeys: i,
          popoutId: v,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "object":
        if ((u(e.type === "object"), !fe)) return;
        a = (0, s.jsx)(fe, {
          control: o,
          controlKey: r,
          controlPath: b,
          getControlPropPaths: C,
          controlProp: e,
          onChange: d,
          nodeIds: t,
          ControlPropRow: n,
          onContextMenu: m,
          sortable: h,
          traitTypeKeys: i,
          popoutId: v,
          scopeType: D,
          hiddenControlsByNodeId: V,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "link":
        if ((u(e.type === "link"), !ce)) return;
        a = (0, s.jsx)(ce, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: d,
          onContextMenu: m,
          sortable: h,
          traitTypeKeys: i,
          supportsVariables: y,
          supportsComputedValues: x,
          supportsFetchDataValues: w,
          nodeIds: t,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "linkrelvalues":
        if ((u(e.type === "linkrelvalues"), !ue)) return;
        a = (0, s.jsx)(ue, {
          controlKey: r,
          control: o,
          controlProp: e,
          onChange: f,
          supportsVariables: y,
          traitTypeKeys: i,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "pagescope":
        if ((u(e.type === "pagescope"), !ge)) return;
        a = (0, s.jsx)(ge, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          traitTypeKeys: i,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "date":
        if ((u(e.type === "date"), !te)) return;
        a = (0, s.jsx)(te, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          sortable: h,
          traitTypeKeys: i,
          supportsVariables: y,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "scrollsectionref":
        if ((u(e.type === "scrollsectionref"), !be)) return;
        a = (0, s.jsx)(be, {
          nodeIds: t,
          traitTypeKeys: i,
          controlKey: r,
          control: o,
          controlProp: e,
          onContextMenu: m,
          onChange: d,
          scopeType: D,
          supportsVariables: y,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "customcursor":
        if ((u(e.type === "customcursor"), !re)) return;
        a = (0, s.jsx)(re, {
          nodeIds: t,
          traitTypeKeys: i,
          controlKey: r,
          control: o,
          controlProp: e,
          onContextMenu: m,
          onChange: d,
          scopeType: D,
          supportsVariables: y,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "cursor":
        if ((u(e.type === "cursor"), !ee)) return;
        a = (0, s.jsx)(ee, {
          popoutId: r,
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          traitTypeKeys: i,
          supportsVariables: y,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "array": {
        if ((u(e.type === "array"), o.control.type === "color" && H)) {
          a = (0, s.jsx)(H, {
            nodeIds: t,
            control: o,
            scopeType: D,
            controlKey: r,
            controlPath: b,
            controlProp: e,
            traitTypeKeys: i,
            onChange: d,
            supportsVariables: y,
            deleteEnabled: c,
            deleteTitle: p,
            onDelete: l,
          });
          break;
        }
        if (!S) return;
        a = (0, s.jsx)(S, {
          nodeIds: t,
          control: o,
          scopeType: D,
          controlKey: r,
          controlPath: b,
          getControlPropPaths: C,
          controlProp: e,
          traitTypeKeys: i,
          hiddenControlsByNodeId: V,
          ControlPropRow: n,
          displayInPopover: k,
          onChange: d,
          supportsVariables: y,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      }
      case "border": {
        if ((u(e.type === "border"), !G)) return;
        a = (0, s.jsx)(G, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: d,
          onContextMenu: m,
          nodeIds: t,
          traitTypeKeys: i,
          popoutId: r,
          supportsVariables: y,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      }
      case "padding": {
        if ((u(e.type === "padding"), !Ce)) return;
        a = (0, s.jsx)(Ce, {
          controlKey: r,
          control: o,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          traitTypeKeys: i,
          supportsVariables: y,
          supportsComputedValues: x,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      }
      case "gap":
        if ((u(e.type === "gap"), !pe)) return;
        a = (0, s.jsx)(pe, {
          controlKey: r,
          control: o,
          controlProp: e,
          onChange: d,
          nodeIds: t,
          onContextMenu: m,
          traitTypeKeys: i,
          supportsVariables: y,
          supportsComputedValues: x,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "borderradius":
        if ((u(e.type === "borderradius"), !_)) return;
        a = (0, s.jsx)(_, {
          controlKey: r,
          control: o,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          traitTypeKeys: i,
          supportsVariables: y,
          supportsComputedValues: x,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "collectionreference":
        if ((u(e.type === "collectionreference"), !P)) return;
        a = (0, s.jsx)(P, {
          controlKey: r,
          control: o,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          supportsVariables: y,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "multicollectionreference":
        if ((u(e.type === "multicollectionreference"), !me)) return;
        a = (0, s.jsx)(me, {
          controlKey: r,
          control: o,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          supportsComputedValues: x,
          supportsVariables: y,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "vectorsetitem":
        if ((u(e.type === "vectorsetitem"), !Te)) return;
        a = (0, s.jsx)(Te, {
          control: o,
          controlKey: r,
          controlProp: e,
          onChange: f,
          supportsVariables: y,
          traitTypeKeys: i,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "location":
        if ((u(e.type === "location"), !Z)) return;
        a = (0, s.jsx)(Z, {
          controlKey: r,
          control: o,
          controlProp: e,
          onChange: f,
          onContextMenu: m,
          traitTypeKeys: i,
          supportsVariables: y,
          deleteEnabled: c,
          deleteTitle: p,
          onDelete: l,
        });
        break;
      case "eventhandler":
      case "changehandler":
        break;
      default:
        Se(o);
    }
    return (0, s.jsxs)(s.Fragment, { children: [a, T] });
  });
var ar = /[^\p{Letter}\p{Number}()]+/gu;
function Vr(n) {
  return Fe(n.toLowerCase().replace(ar, "-"));
}
var g = K(z(), 1);
function $e(n, t) {
  return t === null ? !1 : n > t;
}
function ir(n, t) {
  let r = Y(n),
    o = Y(t);
  if (n <= t || r !== o) return r;
  let b = (C) =>
    new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: C,
      roundingMode: "ceil",
    }).format(n);
  for (let C of [2, 1]) {
    let d = b(C);
    if (d !== o) return d;
  }
  return r;
}
function Je(n, t, r = "Please select fewer days.") {
  let o = ir(n, t),
    b = Y(t);
  return `This period has ${o} events, exceeding the ${b} limit. ${r}`;
}
function J(n, t, r) {
  return { source: n, rangeDays: Oe(t.startDate, t.endDate), eventCount: r };
}
function ze(n, t, r) {
  L("analytics_export_start", J(n, t, r));
}
function We(n, t, r) {
  L("analytics_export_success", J(n, t, r));
}
function qe(n, t, r) {
  L("analytics_export_cancel", J(n, t, r));
}
function Qe(n, t, r, o) {
  L("analytics_export_fail", { ...J(n, t, r), reason: o });
}
var N = K(z(), 1);
function Ze(n, t) {
  if (n === t) return n;
  if (t > n) {
    let r = Math.max(1, Math.ceil((t - n) / 6));
    return Math.min(n + r, t);
  }
  return t;
}
function er({ transferredEvents: n, totalEvents: t, isComplete: r }) {
  return r ? 1 : t <= 0 ? 0 : Math.min(n / t, 0.99);
}
function rr({ phase: n, totalEvents: t, transferredEvents: r }) {
  let o = n === "complete" ? t : r,
    [b, C] = (0, N.useState)(0);
  ((0, N.useEffect)(() => {
    n === "inactive" && C(0);
  }, [n]),
    (0, N.useEffect)(() => {
      n === "complete" && C(t);
    }, [n, t]),
    (0, N.useEffect)(() => {
      if (n !== "exporting") return;
      let M = () => {
        C((e) => Ze(e, o));
      };
      M();
      let m = window.setInterval(M, 100);
      return () => window.clearInterval(m);
    }, [n, o]));
  let d =
    n === "inactive"
      ? 0
      : er({ transferredEvents: b, totalEvents: t, isComplete: n === "complete" });
  return { displayedEventCount: b, progress: d };
}
var tr = we("useAnalyticsExport");
function or(n) {
  return n instanceof W && n.status === 403;
}
function pr(n) {
  return or(n)
    ? "Analytics export is not available on this plan."
    : n instanceof X
      ? n.message
      : "Something went wrong while exporting. Please try again.";
}
function lr(n) {
  return n instanceof X
    ? "incomplete"
    : n instanceof W && n.status === _e.Forbidden
      ? "entitlement"
      : "unknown";
}
function Qr(n, t, r, o, b) {
  let [C, d] = (0, g.useState)("idle"),
    [M, m] = (0, g.useState)(0),
    [e, F] = (0, g.useState)(),
    [R, h] = (0, g.useState)(0),
    [y, x] = (0, g.useState)(0),
    [w, k] = (0, g.useState)("inactive"),
    [B, I] = (0, g.useState)(),
    [v, V] = (0, g.useState)(),
    { displayedEventCount: D, progress: c } = rr({
      phase: w,
      totalEvents: R,
      transferredEvents: y,
    }),
    p = (0, g.useRef)(),
    l = (0, g.useRef)(!1),
    a = (0, g.useRef)(!1);
  (0, g.useEffect)(() => () => p.current?.abort(), []);
  let T = t?.startDate,
    i = t?.endDate;
  (0, g.useEffect)(() => {
    if (!T || !i) {
      d("idle");
      return;
    }
    let E = new AbortController();
    return (
      d("loading"),
      F(void 0),
      Be(n, { startDate: T, endDate: i }, E.signal)
        .then(({ eventCount: P }) => {
          if (E.signal.aborted) return;
          h(P);
          let H = r !== null && $e(P, r);
          d(H ? "over_limit" : "ready");
        })
        .catch((P) => {
          E.signal.aborted || q(P) || (tr.reportError(P), d("error"));
        }),
      () => E.abort()
    );
  }, [T, i, n, r, M]);
  let f = (0, g.useCallback)(() => m((E) => E + 1), []),
    S = (0, g.useCallback)(
      (E) => {
        !o || !a.current || ((a.current = !1), qe(o, E, R));
      },
      [o, R]
    ),
    O = (0, g.useCallback)(async () => {
      if (!T || !i || C !== "ready" || l.current) return;
      let E = { startDate: T, endDate: i };
      ((l.current = !0), I(void 0), V(void 0), x(0));
      let A = new AbortController();
      ((p.current = A), (a.current = !1), o && (ze(o, E, R), (a.current = !0)));
      try {
        let P = He() ? await Ne(E, A.signal) : void 0,
          H = performance.now();
        return (
          k("exporting"),
          await Le(n, E, { signal: A.signal, writable: P, onTransferredEvents: x }),
          A.signal.aborted
            ? (S(E), "aborted")
            : (V(performance.now() - H),
              k("complete"),
              o && a.current && ((a.current = !1), We(o, E, R)),
              "complete")
        );
      } catch (P) {
        return A.signal.aborted || (k("inactive"), q(P))
          ? (S(E), "aborted")
          : (!or(P) && !(P instanceof X) && tr.reportError(P),
            o && a.current && ((a.current = !1), Qe(o, E, R, lr(P))),
            I(pr(P)),
            "failed");
      } finally {
        p.current === A && (l.current = !1);
      }
    }, [n, T, i, C, o, R, S]),
    G = (0, g.useCallback)(() => {
      (p.current?.abort(),
        (l.current = !1),
        k("inactive"),
        x(0),
        I(void 0),
        V(void 0),
        T && i && S({ startDate: T, endDate: i }));
    }, [T, i, S]),
    _;
  return (
    C === "over_limit" && r !== null
      ? (_ = Je(R, r, b))
      : C === "error" && (_ = e ?? "Could not estimate export size for this range. Try again."),
    {
      volumeCheck: C,
      volumeMessage: _,
      retryVolumeCheck: f,
      totalEvents: R,
      phase: w,
      errorMessage: B,
      exportDurationMs: v,
      setErrorMessage: I,
      displayedEventCount: D,
      progress: c,
      start: O,
      cancel: G,
    }
  );
}
export { Vr as a, Xe as b, Kr as c, Qr as d };
//# sourceMappingURL=chunk-7OKWM74N.mjs.map
