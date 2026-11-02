import {
  lb as oo,
  mb as no,
  na as Yt,
  oa as Xt,
  ob as io,
  pa as Pe,
  qb as fe,
  sb as Ee,
  ua as eo,
  ub as po,
} from "chunk-7LFNDODX.mjs";
import { Ga as de, Ha as zt, Ia as jt, Ja as Kt, La as Ht, Ya as Ut } from "chunk-URY23I3V.mjs";
import { e as $t } from "chunk-3SOPMRJT.mjs";
import { a as Zt, b as we, c as Wt } from "chunk-YKQPZTUX.mjs";
import { $d as Ft, Re as Bt, ba as Nt, ie as Ot, qa as Mt } from "chunk-ANJP3CV7.mjs";
import { vc as Vt } from "chunk-WLGYSMAZ.mjs";
import { a as Dt } from "chunk-DUMSLWKR.mjs";
import { a as Se, b as X } from "chunk-G4XUWRQW.mjs";
import { $m as At, Yh as Lt, dl as pe, kj as Tt, kl as It, rl as Rt } from "chunk-67IRKGA3.mjs";
import {
  $j as ke,
  Ml as Et,
  Qa as ft,
  Ub as Ct,
  Ui as kt,
  Wi as xt,
  _k as St,
  cl as wt,
  eh as yt,
  ml as Pt,
} from "chunk-ESJGW6ZP.mjs";
import { c as Jt, e as to, f as ro } from "chunk-CAX5ADDL.mjs";
import { a as so, b as ao } from "chunk-R4ROONZU.mjs";
import { f as me } from "chunk-BOLNZQB3.mjs";
import { e as Qt, h as qt } from "chunk-M2KNKGJM.mjs";
import { a as lo } from "chunk-DQTB2CB4.mjs";
import { a as z } from "chunk-5XODGDYZ.mjs";
import { a as xe, b as Gt, u as be } from "chunk-ODGG6ZFN.mjs";
import { f as Y } from "chunk-QXEOQDUW.mjs";
import { a as ve, b as ue } from "chunk-L35JN2VK.mjs";
import { a as ce } from "chunk-QFU6OGL3.mjs";
import { a as _t } from "chunk-GEBI3FTA.mjs";
import { e as gt } from "chunk-ZNFBUDMT.mjs";
import { c as bt } from "chunk-QFXLDP7M.mjs";
import { b as mt } from "chunk-WRBBN7SY.mjs";
import { a as vt } from "chunk-MSHSIAEI.mjs";
import { b as ye, k as le } from "chunk-BQDYXAIS.mjs";
import { a as k } from "chunk-2FCXHKEL.mjs";
import { b as ht } from "chunk-5EE7LLRA.mjs";
import { b as y, c as ae } from "chunk-4JY5UMT2.mjs";
import { a as q } from "chunk-SWYZG2NI.mjs";
import { b as dt, i as se } from "chunk-WBI6GGAG.mjs";
import { e as u } from "chunk-WLHSDIGQ.mjs";
var he = u(q(), 1);
function co(o) {
  let e = bt();
  return $t(() => St(e.tree, o ?? void 0), [e, o], "Tree");
}
var mo = u(k(), 1);
function uo({ control: o, controlProp: e, ...t }) {
  let { EnumControlPropRow: r } = fe(),
    a = co(o);
  if (!r || !a) return null;
  let { value: i } = e,
    s = mt(i) || yt(i) ? i : Tt(a, e);
  return (0, mo.jsx)(r, {
    ...t,
    control: a,
    controlProp: { ...e, value: s },
    sharedEnumIdentifier: ft(o.moduleIdentifier) ? o.moduleIdentifier : void 0,
  });
}
var m = u(k(), 1),
  Fr = he.default.memo(function o({
    nodeIds: e,
    controlKey: t,
    control: r,
    controlPath: a = t,
    getControlPropPaths: i,
    onChange: s,
    onImageUpload: C,
    onContextMenu: l,
    controlProp: n,
    controlSourceIdentifier: A,
    controlSourceControlKey: S,
    sortable: v,
    supportsVariables: g,
    supportsComputedValues: x,
    supportsFetchDataValues: R = x,
    displayInPopover: M,
    icons: H,
    controlKeyIsTraitTypeKey: O,
    popoutId: L,
    hiddenControlsByNodeId: _,
    scopeType: V,
    deleteEnabled: f,
    deleteTitle: c,
    onDelete: h,
  }) {
    let p, N;
    r.description && (N = (0, m.jsx)(io, { description: r.description }));
    let d = he.default.useMemo(() => (O ? [xt(t)] : void 0), [t, O]),
      b = he.default.useCallback(
        (ut, Jo) => {
          s(Jo, () => ut, e);
        },
        [e, s]
      ),
      {
        ArrayControlPropRow: B,
        BooleanControlPropRow: ne,
        BorderControlPropRow: ie,
        BorderRadiusControlPropRow: U,
        BoxShadowControlPropRow: P,
        CanvasPageInstanceRow: D,
        CollectionReferenceControlPropRow: T,
        ColorArrayControlPropRow: Z,
        ColorControlPropRow: _e,
        LocationControlPropRow: Be,
        CursorControlPropRow: Ge,
        CustomCursorControlPropRow: ze,
        DateControlPropRow: je,
        DimensionControlPropRow: Ke,
        EnumControlPropRow: He,
        FileControlPropRow: Ue,
        FontControlPropRow: Ze,
        FusedNumberControlPropRow: We,
        GapControlPropRow: $e,
        ImageControlPropRow: Qe,
        LinkControlPropRow: qe,
        LinkRelValuesControlPropRow: Ye,
        MultiCollectionReferenceControlPropRow: Xe,
        MotionValueControlPropRow: Je,
        NumberControlPropRow: et,
        ObjectControlPropRow: tt,
        PaddingControlPropRow: ot,
        PageScopeControlPropRow: rt,
        RichTextControlPropRow: nt,
        ScrollSectionRefControlPropRow: it,
        SlotControlPropRow: st,
        StringControlPropRow: at,
        TrackingIdControlPropRow: lt,
        TransitionControlPropRow: pt,
        VectorSetItemControlPropRow: ct,
      } = fe();
    switch (r.type) {
      case "boolean":
        if ((y(n.type === "boolean"), !ne)) return;
        p = (0, m.jsx)(ne, {
          nodeIds: e,
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          supportsFetchDataValues: R,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "motionvalue":
        if ((y(n.type === "motionvalue"), !Je)) return;
        p = (0, m.jsx)(Je, {
          supportsVariables: g,
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          traitTypeKeys: d,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "number":
        if ((y(n.type === "number"), !et)) return;
        p = (0, m.jsx)(et, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          nodeIds: e,
          supportsFetchDataValues: R,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "dimension":
        if ((y(n.type === "dimension"), !Ke)) return;
        p = (0, m.jsx)(Ke, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          traitTypeKeys: d,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
          supportsVariables: g,
        });
        break;
      case "string":
        if ((y(n.type === "string"), !at)) return;
        p = (0, m.jsx)(at, {
          nodeIds: e,
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: s,
          onContextMenu: l,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsFetchDataValues: R,
          supportsComputedValues: x,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "trackingid":
        if ((y(n.type === "trackingid"), !lt)) return;
        p = (0, m.jsx)(lt, {
          controlKey: t,
          control: r,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          traitTypeKeys: d,
          supportsVariables: g,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "richtext":
        if ((y(n.type === "richtext"), !nt)) return;
        p = (0, m.jsx)(nt, {
          nodeIds: e,
          control: r,
          controlKey: t,
          controlProp: n,
          getControlPropPaths: i,
          onChange: s,
          onContextMenu: l,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          scopeType: V,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "fusednumber":
        if ((y(n.type === "fusednumber"), !We)) return;
        p = (0, m.jsx)(We, {
          nodeIds: e,
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          traitTypeKeys: d,
          sortable: v,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "enum":
        if ((y(n.type === "enum"), !He)) return;
        p = (0, m.jsx)(He, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          sortable: v,
          icons: H,
          controlSourceIdentifier: A,
          controlSourceControlKey: S,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "sharedtype":
        (y(n.type === "enum"),
          (p = (0, m.jsx)(uo, {
            control: r,
            controlKey: t,
            controlProp: n,
            onChange: b,
            onContextMenu: l,
            sortable: v,
            icons: H,
            controlSourceIdentifier: A,
            controlSourceControlKey: S,
            traitTypeKeys: d,
            supportsVariables: g,
            supportsComputedValues: x,
            deleteEnabled: f,
            deleteTitle: c,
            onDelete: h,
          })));
        break;
      case "color":
        if ((y(n.type === "color"), !_e)) return;
        p = (0, m.jsx)(_e, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          sortable: v,
          traitTypeKeys: d,
          displayInPopover: M,
          supportsVariables: g,
          supportsComputedValues: x,
          supportsFetchDataValues: R,
          nodeIds: e,
          popoutId: L,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "responsiveimage":
      case "image":
        if ((y(n.type === "image" || n.type === "responsiveimage"), !Qe)) return;
        p = (0, m.jsx)(Qe, {
          nodeIds: e,
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: s,
          onUpload: C,
          onContextMenu: l,
          sortable: v,
          traitTypeKeys: d,
          displayInPopover: M,
          supportsFetchDataValues: R,
          supportsVariables: g,
          popoutId: L,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "file":
        if ((y(n.type === "file"), !Ue)) return;
        p = (0, m.jsx)(Ue, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          controlSourceIdentifier: A,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "slot": {
        if ((y(n.type === "slot"), e.length !== 1)) return null;
        if (A === "framer/Prototype") {
          if (!D) return;
          p = (0, m.jsx)(D, {
            nodeIds: e,
            control: r,
            controlKey: t,
            controlProp: n,
            onChange: b,
            deleteEnabled: f,
            deleteTitle: c,
            onDelete: h,
          });
        } else {
          if (!st) return;
          p = (0, m.jsx)(st, {
            nodeIds: e,
            control: r,
            controlKey: t,
            controlPath: a,
            controlProp: n,
            traitTypeKeys: d,
            onChange: s,
            deleteEnabled: f,
            deleteTitle: c,
            onDelete: h,
          });
        }
        break;
      }
      case "transition":
        if ((y(n.type === "transition"), !pt)) return;
        p = (0, m.jsx)(pt, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          sortable: v,
          supportsVariables: g,
          traitTypeKeys: d,
          popoutId: L,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "boxshadow":
        if ((y(n.type === "boxshadow"), !P)) return;
        p = (0, m.jsx)(P, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: s,
          onContextMenu: l,
          supportsVariables: g,
          traitTypeKeys: d,
          popoutId: L,
          nodeIds: e,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "font":
        if ((y(n.type === "font"), !Ze)) return;
        p = (0, m.jsx)(Ze, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: s,
          nodeIds: e,
          traitTypeKeys: d,
          popoutId: L,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "object":
        if ((y(n.type === "object"), !tt)) return;
        p = (0, m.jsx)(tt, {
          control: r,
          controlKey: t,
          controlPath: a,
          getControlPropPaths: i,
          controlProp: n,
          onChange: s,
          nodeIds: e,
          ControlPropRow: o,
          onContextMenu: l,
          sortable: v,
          traitTypeKeys: d,
          popoutId: L,
          scopeType: V,
          hiddenControlsByNodeId: _,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "link":
        if ((y(n.type === "link"), !qe)) return;
        p = (0, m.jsx)(qe, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: s,
          onContextMenu: l,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          supportsFetchDataValues: R,
          nodeIds: e,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "linkrelvalues":
        if ((y(n.type === "linkrelvalues"), !Ye)) return;
        p = (0, m.jsx)(Ye, {
          controlKey: t,
          control: r,
          controlProp: n,
          onChange: b,
          supportsVariables: g,
          traitTypeKeys: d,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "pagescope":
        if ((y(n.type === "pagescope"), !rt)) return;
        p = (0, m.jsx)(rt, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          traitTypeKeys: d,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "date":
        if ((y(n.type === "date"), !je)) return;
        p = (0, m.jsx)(je, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          sortable: v,
          traitTypeKeys: d,
          supportsVariables: g,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "scrollsectionref":
        if ((y(n.type === "scrollsectionref"), !it)) return;
        p = (0, m.jsx)(it, {
          nodeIds: e,
          traitTypeKeys: d,
          controlKey: t,
          control: r,
          controlProp: n,
          onContextMenu: l,
          onChange: s,
          scopeType: V,
          supportsVariables: g,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "customcursor":
        if ((y(n.type === "customcursor"), !ze)) return;
        p = (0, m.jsx)(ze, {
          nodeIds: e,
          traitTypeKeys: d,
          controlKey: t,
          control: r,
          controlProp: n,
          onContextMenu: l,
          onChange: s,
          scopeType: V,
          supportsVariables: g,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "cursor":
        if ((y(n.type === "cursor"), !Ge)) return;
        p = (0, m.jsx)(Ge, {
          popoutId: t,
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          traitTypeKeys: d,
          supportsVariables: g,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "array": {
        if ((y(n.type === "array"), r.control.type === "color" && Z)) {
          p = (0, m.jsx)(Z, {
            nodeIds: e,
            control: r,
            scopeType: V,
            controlKey: t,
            controlPath: a,
            controlProp: n,
            traitTypeKeys: d,
            onChange: s,
            supportsVariables: g,
            deleteEnabled: f,
            deleteTitle: c,
            onDelete: h,
          });
          break;
        }
        if (!B) return;
        p = (0, m.jsx)(B, {
          nodeIds: e,
          control: r,
          scopeType: V,
          controlKey: t,
          controlPath: a,
          getControlPropPaths: i,
          controlProp: n,
          traitTypeKeys: d,
          hiddenControlsByNodeId: _,
          ControlPropRow: o,
          displayInPopover: M,
          onChange: s,
          supportsVariables: g,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      }
      case "border": {
        if ((y(n.type === "border"), !ie)) return;
        p = (0, m.jsx)(ie, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: s,
          onContextMenu: l,
          nodeIds: e,
          traitTypeKeys: d,
          popoutId: t,
          supportsVariables: g,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      }
      case "padding": {
        if ((y(n.type === "padding"), !ot)) return;
        p = (0, m.jsx)(ot, {
          controlKey: t,
          control: r,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      }
      case "gap":
        if ((y(n.type === "gap"), !$e)) return;
        p = (0, m.jsx)($e, {
          controlKey: t,
          control: r,
          controlProp: n,
          onChange: s,
          nodeIds: e,
          onContextMenu: l,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "borderradius":
        if ((y(n.type === "borderradius"), !U)) return;
        p = (0, m.jsx)(U, {
          controlKey: t,
          control: r,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          traitTypeKeys: d,
          supportsVariables: g,
          supportsComputedValues: x,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "collectionreference":
        if ((y(n.type === "collectionreference"), !T)) return;
        p = (0, m.jsx)(T, {
          controlKey: t,
          control: r,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          supportsVariables: g,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "multicollectionreference":
        if ((y(n.type === "multicollectionreference"), !Xe)) return;
        p = (0, m.jsx)(Xe, {
          controlKey: t,
          control: r,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          supportsComputedValues: x,
          supportsVariables: g,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "vectorsetitem":
        if ((y(n.type === "vectorsetitem"), !ct)) return;
        p = (0, m.jsx)(ct, {
          control: r,
          controlKey: t,
          controlProp: n,
          onChange: b,
          supportsVariables: g,
          traitTypeKeys: d,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "location":
        if ((y(n.type === "location"), !Be)) return;
        p = (0, m.jsx)(Be, {
          controlKey: t,
          control: r,
          controlProp: n,
          onChange: b,
          onContextMenu: l,
          traitTypeKeys: d,
          supportsVariables: g,
          deleteEnabled: f,
          deleteTitle: c,
          onDelete: h,
        });
        break;
      case "eventhandler":
      case "changehandler":
        break;
      default:
        ae(r);
    }
    return (0, m.jsxs)(m.Fragment, { children: [p, N] });
  });
var fo = "l7g1830";
var ho = u(k());
function jr({ children: o, htmlFor: e, className: t }) {
  return (0, ho.jsx)("label", { className: ce(fo, t), htmlFor: e, children: o });
}
var or = { valueLocalized: !0, altLocalized: !0 };
function Le(o, e) {
  let t = {};
  for (let r in o) {
    if (!kt(r)) continue;
    let a = o[r];
    Bt(a) && (t[r] = go(a, e));
  }
  return t;
}
function go(o, e) {
  switch (o.type) {
    case "array":
      return o.value
        ? { ...o, value: o.value.map((t) => t && { ...t, value: Co(t.value, e) }) }
        : o;
    case "object":
      return { ...o, value: Co(o.value, e) };
    default: {
      let t = o,
        r = {};
      for (let a of gt(or)) {
        let i = t[a];
        i && (r[a] = Pt(i, e));
      }
      return { ...o, ...r };
    }
  }
}
function Co(o, e) {
  if (!o) return o;
  let t = {};
  for (let [r, a] of Object.entries(o)) t[r] = go(a, e);
  return t;
}
var rr = 3,
  I = se("PartialTreeSender"),
  Te = vt();
function bo(o) {
  if (ht(o)) return o.length;
  if (typeof o != "object" || o === null) return 8;
  let e = 0;
  for (let t of Object.values(o)) e += bo(t);
  return e;
}
function yo() {
  return new Promise((o, e) => {
    if (typeof MessageChannel < "u") {
      let t = new MessageChannel();
      ((t.port1.onmessage = () => o()),
        (t.port1.onmessageerror = () => e()),
        t.port2.postMessage(null));
    } else setTimeout(o, 0);
  });
}
var ko = class {
  constructor(e, t, r) {
    this.treeUpdater = e;
    ((this.name = t + "-" + String(Math.round(Math.random() * 1e3))),
      (this.chunkingConfig = {
        maxNodesPerChunk: r?.maxNodesPerChunk ?? 1e3,
        maxSizePerChunk: r?.maxSizePerChunk ?? 5e7,
      }));
  }
  treeUpdater;
  name;
  currentScopeId = "";
  timelineCursor;
  scopeBufferMap = new Map();
  chunkQueue = [];
  chunkIndex = 0;
  chunkingConfig;
  drainingPromise;
  localesToSend = [];
  needsFullResend = !1;
  get crdtStore() {
    return this.treeUpdater.store;
  }
  setActiveLocale(e) {
    let t = this.treeUpdater.tree.root,
      r = t.getNonDefaultLocale(e),
      a = r ? wt(r, t.locales ?? []) : [];
    (a.length === this.localesToSend.length &&
      a.every((s, C) => s.id === this.localesToSend[C]?.id)) ||
      ((this.localesToSend = a), (this.needsFullResend = !0));
  }
  getScopeAsValue(e, t) {
    let r = e.get(t);
    if (r) return this.scopeAsValue(r, e.root.id, e.getService("metadata")?.version !== void 0);
  }
  scopeAsValue(e, t, r) {
    let a = this.serializeScope(e, t, r);
    return e.id !== pe ? a : xo(a, (i) => xo(i, (s) => ({ ...s, ...Le(s, this.localesToSend) })));
  }
  serializeScope(e, t, r) {
    (y(e.parentid === t, "Scope must be a direct child of the root"),
      At(e) && y(e.isLoaded(), "Scope must be loaded"));
    let a = e.treeState.getSerializedCache(e);
    if (a) return a;
    if (!r) {
      let i = this.crdtStore,
        s = e.treeState.serialized?.hadError;
      if (i && !s) {
        let C = i.getObject(e.id);
        if (C && C.parentid !== Dt) return C;
      }
    }
    return Ot.valueFromNode(e);
  }
  shouldUseChunking(e, t) {
    if (this.timelineCursor) return !1;
    let r = e.chunkingHints;
    if (!r || r.size === 0) return !1;
    let a = Ce();
    t && a.add(t);
    for (let i of a)
      if (r.has(i)) return (I.debug(this.name, `chunking required - large page hint: ${i}`), !0);
    return !1;
  }
  serializeTreeChunks(e, t) {
    let r = [],
      a = crypto.randomUUID(),
      i = new Map(),
      s = new Map(),
      C = 0,
      l = 0,
      n = Ce();
    t && n.add(t);
    let A = () =>
        i.size >= this.chunkingConfig.maxNodesPerChunk || C >= this.chunkingConfig.maxSizePerChunk,
      S = () => {
        i.size > 0 &&
          (r.push({
            name: this.name,
            timestamp: Date.now(),
            treeChunks: {
              chunkId: a,
              chunkIndex: r.length,
              totalChunks: -1,
              nodes: i,
              childrenMap: s,
              rootId: r.length === 0 ? e.root.id : void 0,
            },
          }),
          (i = new Map()),
          (s = new Map()),
          (C = 0));
      },
      v = (L) => {
        let _ = L.children ?? Te,
          V = { ...L, children: Te },
          f = bo(V);
        (C + f > this.chunkingConfig.maxSizePerChunk && S(),
          i.set(L.id, V),
          s.set(
            L.id,
            _.map((c) => c.id)
          ),
          (C += f),
          l++,
          A() && S());
        for (let c of _) v(c);
      },
      g = e.root,
      x,
      R = {};
    for (x in g) ke.has(x) || (R[x] = g[x]);
    let M = e.getNodes(n),
      H = { ...R, __class: "RootNode", id: e.root.id, children: Te };
    (i.set(e.root.id, H),
      s.set(
        e.root.id,
        M.map((L) => L.id)
      ),
      l++,
      A() && S());
    for (let L of M)
      v(this.scopeAsValue(L, e.root.id, e.getService("metadata")?.version !== void 0));
    S();
    let O = r.length;
    for (let L of r) L.treeChunks.totalChunks = O;
    return (
      I.debug(this.name, `directly chunked tree into ${r.length} chunks with ${l} total nodes`),
      r
    );
  }
  getNextChunk() {
    if (this.chunkQueue.length === 0) return;
    let e = this.chunkQueue[this.chunkIndex];
    return (
      this.chunkIndex++,
      this.chunkIndex >= this.chunkQueue.length && ((this.chunkQueue = []), (this.chunkIndex = 0)),
      e
    );
  }
  hasMoreChunks() {
    return (
      y(this.chunkIndex >= 0, "Chunk index should not be negative"),
      y(this.chunkIndex <= this.chunkQueue.length, "Chunk index should not exceed queue length"),
      this.chunkIndex < this.chunkQueue.length
    );
  }
  async *drainChunks(e) {
    if (!this.hasMoreChunks()) return;
    let t = this.drainingPromise;
    ((this.drainingPromise = new _t()),
      t &&
        (I.debug(this.name, "drainChunks already in progress, waiting for it to finish"), await t),
      I.debug(this.name, "drainChunks started"));
    let r = 0,
      a = performance.now();
    try {
      for (; this.hasMoreChunks();) {
        if (e?.aborted) {
          (I.debug(this.name, "drainChunks aborted, clearing chunk queue"),
            (this.chunkQueue = []),
            (this.chunkIndex = 0));
          return;
        }
        let i = this.getNextChunk();
        (i &&
          (r++,
          I.debug(
            this.name,
            `sending chunk ${i.treeChunks.chunkIndex + 1} of ${i.treeChunks.totalChunks}`
          ),
          yield i),
          await yo());
      }
    } finally {
      await yo();
      let i = performance.now() - a,
        s = i > 1e3 ? `${(i / 1e3).toFixed(2)}s` : `${Math.round(i)}ms`;
      (I.debug(this.name, `completed sending ${r} chunks in ${s}`),
        I.debug(this.name, "drainChunks completed"),
        this.drainingPromise?.resolve(),
        (this.drainingPromise = void 0));
    }
  }
  resetScopeBuffer(e) {
    (this.scopeBufferMap.clear(),
      (this.currentScopeId = e ?? ""),
      e && ((this.timelineCursor = void 0), this.scopeBufferMap.set(e, performance.now())));
  }
  updateScopeBuffer(e) {
    if (this.currentScopeId === e) return [void 0, void 0];
    if (e === pe) return [void 0, void 0];
    if (((this.currentScopeId = e), this.scopeBufferMap.has(this.currentScopeId)))
      return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [void 0, void 0]);
    let t;
    if (this.scopeBufferMap.size >= rr) {
      let r = Ce(),
        a = 1 / 0,
        i;
      for (let [s, C] of this.scopeBufferMap) r.has(s) || (a > C && ((a = C), (i = s)));
      i && (this.scopeBufferMap.delete(i), (t = i));
    }
    return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [t, e]);
  }
  reset(e) {
    let t = this.treeUpdater.tree;
    if ((this.resetScopeBuffer(e), this.shouldUseChunking(t, e)))
      return (
        (this.chunkQueue = this.serializeTreeChunks(t, e)),
        (this.chunkIndex = 0),
        I.debug(this.name, "initiated direct chunked transfer for tree"),
        null
      );
    let r = this.serializeTree(t, e);
    return ((this.chunkQueue = []), (this.chunkIndex = 0), r);
  }
  update(e) {
    if (!e) return {};
    if (this.hasMoreChunks() || this.drainingPromise) return {};
    this.needsFullResend && ((this.needsFullResend = !1), (this.timelineCursor = void 0));
    let t = this.treeUpdater.tree,
      r = this.treeUpdater.fetchForwardChanges(this.timelineCursor);
    if (!r) {
      if (this.treeUpdater.invalidatedByLoadCompletedDocument(this.timelineCursor))
        return (
          I.debug(
            this.name,
            "cursor invalidated, sending empty update for load completed document"
          ),
          (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()),
          {}
        );
      if ((this.resetScopeBuffer(e), this.shouldUseChunking(t, e))) {
        ((this.chunkQueue = this.serializeTreeChunks(t, e)), (this.chunkIndex = 0));
        let l = this.getNextChunk();
        if (l)
          return (
            (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()),
            I.debug(
              this.name,
              `starting direct chunked resend with ${this.chunkQueue.length} chunks`
            ),
            l
          );
      }
      let C = this.serializeTree(t, e);
      return (
        I.debug(this.name, "cursor invalidated, sending tree with scope:", e),
        (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()),
        { name: this.name, tree: C, timestamp: Date.now() }
      );
    }
    let [a, i] = this.updateScopeBuffer(e);
    (a && (I.debug(this.name, "deleting scope by diff:", a), vo(a, r)),
      r.length === 0 && (r = void 0));
    let s;
    if (
      (i && (I.debug(this.name, "adding scope by subtree:", i), (s = this.getScopeAsValue(t, i))),
      r)
    ) {
      let C = this.getAffectedScopeIDsAfterCrossScopeMove(t, r);
      for (let l of C) {
        if (l !== this.currentScopeId) {
          this.scopeBufferMap.has(l) &&
            (I.debug(this.name, "deleting scope due to cross-scope move:", l),
            vo(l, r),
            this.scopeBufferMap.delete(l));
          continue;
        }
        s ||
          (I.debug(this.name, "resending tree with scope due to cross-scope move:", l),
          (s = this.getScopeAsValue(t, l)));
      }
    }
    return {
      changes: r?.map((C) => this.changeForLocalesToSend(t, C)),
      scopes: s ? [s] : void 0,
      timestamp: Date.now(),
    };
  }
  changeForLocalesToSend(e, t) {
    if (!(t.added === "CollectionItemNode" || Ct(e.get(t.id)))) return t;
    let a = Le(t.to, this.localesToSend);
    return { ...t, to: { ...t.to, ...a } };
  }
  serializeTree(e, t) {
    let r = Ce();
    t && r.add(t);
    let a = [];
    for (let l of r) {
      let n = this.getScopeAsValue(e, l);
      n && a.push(n);
    }
    let i = e.root,
      s,
      C = {};
    for (s in i) ke.has(s) || (C[s] = i[s]);
    return { version: Ft, root: { ...C, __class: "RootNode", id: e.root.id, children: a } };
  }
  getAffectedScopeIDsAfterCrossScopeMove(e, t) {
    let r = new Set();
    for (let a of t) {
      if (!a.previousScope || !a.to.parentid) continue;
      let i = e.get(a.id),
        s = e.getScopeNodeFor(i);
      s && r.add(s.id);
    }
    return r;
  }
};
function xo(o, e) {
  return o.children ? { ...o, children: o.children.map(e) } : o;
}
function vo(o, e) {
  e.push({ id: o, removed: "CanvasNode", to: {} });
}
function Ce() {
  return new Set([Vt, Mt, Et, Rt, It, pe, Nt]);
}
var nr =
    "autoplay; ambient-light-sensor; accelerometer; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; usb; xr-spatial-tracking",
  ir = "autoplay",
  sr =
    "autoplay; ambient-light-sensor; accelerometer; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; usb; xr-spatial-tracking; clipboard-read; clipboard-write";
function vn(o) {
  let e;
  switch (o) {
    case "on_page":
      e = ir;
      break;
    case "editor":
      e = nr;
      break;
    case "preview":
      e = sr;
      break;
    default:
      ae(o);
  }
  return e;
}
var Ie = class {
    constructor(e) {
      this.callbacks = e;
    }
    callbacks;
    experimentListeners = new Map();
    employeesOnlySettingsListeners = new Map();
    projectFeaturesListeners = new Map();
    startUpdatesStream() {
      (Object.keys(ye).forEach((e) => {
        let t = (r) => {
          this.callbacks.updateExperiments({ [e]: r });
        };
        (le.addListener(e, t), this.experimentListeners.set(e, t));
      }),
        Object.keys(ve).forEach((e) => {
          let t = (r) => {
            this.callbacks.updateEmployeesOnlySettings({ [e]: r });
          };
          (ue.addListener(e, t), this.employeesOnlySettingsListeners.set(e, t));
        }));
    }
    getInitialExperiments() {
      let e = {};
      return (
        Object.keys(ye).forEach((t) => {
          e[t] = le.get(t);
        }),
        e
      );
    }
    getInitialEmployeesOnlySettings() {
      let e = {};
      return (
        Object.keys(ve).forEach((t) => {
          e[t] = ue.get(t);
        }),
        e
      );
    }
    initProjectFeatures() {
      X.updated
        .then(() => {
          let e = {};
          (Object.keys(Se).forEach((t) => {
            e[t] = X.get(t);
          }),
            this.callbacks.updateProjectFeatures(e),
            this.projectFeaturesListeners.size === 0 &&
              Object.keys(Se).forEach((t) => {
                let r = (a) => {
                  this.callbacks.updateProjectFeatures({ [t]: a });
                };
                (X.addListener(t, r), this.projectFeaturesListeners.set(t, r));
              }));
        })
        .catch(dt);
    }
    stopUpdatesStream() {
      for (let [e, t] of this.experimentListeners) le.removeListener(e, t);
      for (let [e, t] of this.employeesOnlySettingsListeners) ue.removeListener(e, t);
      for (let [e, t] of this.projectFeaturesListeners) X.removeListener(e, t);
      (this.experimentListeners.clear(),
        this.employeesOnlySettingsListeners.clear(),
        this.projectFeaturesListeners.clear());
    }
  },
  So = class {
    constructor(e, t) {
      this.remoteFlags = e;
      let r = new Ie(this.remoteFlags);
      (r.startUpdatesStream(),
        this.remoteFlags.updateExperiments(r.getInitialExperiments()),
        this.remoteFlags.updateEmployeesOnlySettings(r.getInitialEmployeesOnlySettings()),
        t?.addEventListener("abort", () => r.stopUpdatesStream(), { once: !0 }));
    }
    remoteFlags;
  };
var ar = /[^\p{Letter}\p{Number}()]+/gu;
function An(o) {
  return Lt(o.toLowerCase().replace(ar, "-"));
}
var wo = u(q(), 1);
function Vn() {
  let o = z.values.panelPadding;
  return (0, wo.useMemo)(() => ({ top: o, right: -o, bottom: -o, left: o }), [o]);
}
var Po = u(k(), 1);
function lr(o, e) {
  switch (o) {
    case "left":
    case "right":
      return { x: e };
    case "top":
    case "bottom":
    case void 0:
      return { y: e };
  }
}
function _n({
  children: o,
  className: e,
  colorVariant: t,
  direction: r,
  enabled: a,
  offsetDelta: i = 0,
  text: s,
  shortcut: C,
}) {
  let l = z.values.tooltipOffset + i;
  return a
    ? (0, Po.jsx)(Qt, {
        text: s,
        shortcut: C,
        colorVariant: t,
        direction: r,
        className: e,
        positionOffset: lr(r, l),
        children: o,
      })
    : o;
}
var G = u(k());
function Re(o) {
  return (0, G.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: [
      (0, G.jsx)("path", {
        d: "M 1 4 C 1 4 1 3.551 1 3 C 1 1.895 1.895 1 3 1 C 3.551 1 4 1 4 1",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, G.jsx)("path", {
        d: "M 11 4 C 11 4 11 3.551 11 3 C 11 1.895 10.105 1 9 1 C 8.449 1 8 1 8 1",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, G.jsx)("path", {
        d: "M 11 8 C 11 8 11 8.449 11 9 C 11 10.105 10.105 11 9 11 C 8.449 11 8 11 8 11",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, G.jsx)("path", {
        d: "M 1 8 C 1 8 1 8.449 1 9 C 1 10.105 1.895 11 3 11 C 3.551 11 4 11 4 11",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, G.jsx)("path", {
        d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 4.743 11 7.257 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.257 1 4.743 1 3 Z",
        fill: "transparent",
      }),
    ],
  });
}
var Ae = u(k());
function Eo(o) {
  return (0, Ae.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: (0, Ae.jsx)("path", {
      d: "M 4.5 2 C 4.5 1.172 5.172 0.5 6 0.5 C 7.181 0.5 8.819 0.5 10 0.5 C 10.828 0.5 11.5 1.172 11.5 2 C 11.5 3.181 11.5 4.819 11.5 6 C 11.5 6.828 10.828 7.5 10 7.5 C 9.269 7.5 8.364 7.5 7.5 7.5 C 7.5 7.5 7.5 8.865 7.5 10 C 7.5 10.828 6.828 11.5 6 11.5 C 4.819 11.5 3.181 11.5 2 11.5 C 1.172 11.5 0.5 10.828 0.5 10 C 0.5 8.819 0.5 7.181 0.5 6 C 0.5 5.172 1.172 4.5 2 4.5 C 3.135 4.5 4.5 4.5 4.5 4.5 C 4.5 3.636 4.5 2.731 4.5 2 Z",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var Ne = u(k());
function Lo(o) {
  return (0, Ne.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: (0, Ne.jsx)("path", {
      d: "M 1.25 6 C 1.25 6 2.656 7.406 3.543 8.293 C 3.933 8.683 4.567 8.683 4.957 8.293 C 6.641 6.609 10.75 2.5 10.75 2.5",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var J = u(k());
function To(o) {
  return (0, J.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: [
      (0, J.jsx)("path", {
        d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 4.743 11 7.257 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.257 1 4.743 1 3 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, J.jsx)("path", {
        d: "M 4.5 4 L 4.5 7.5 L 8 7.5",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var j = u(k());
function Me(o) {
  return (0, j.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: [
      (0, j.jsx)("path", {
        d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 4.743 11 7.257 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.257 1 4.743 1 3 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, j.jsx)("path", { d: "M 6 1 L 6 11", fill: "transparent", stroke: "currentColor" }),
      (0, j.jsx)("path", { d: "M 1.5 5 L 5.5 5", fill: "transparent", stroke: "currentColor" }),
      (0, j.jsx)("path", { d: "M 6.5 7 L 10.5 7", fill: "transparent", stroke: "currentColor" }),
    ],
  });
}
var W = u(k());
function Io(o) {
  return (0, W.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: [
      (0, W.jsx)("path", {
        d: "M 9 0.75 C 10.243 0.75 11.25 1.757 11.25 3 C 11.25 4.243 10.243 5.25 9 5.25 C 7.757 5.25 6.75 4.243 6.75 3 C 6.75 1.757 7.757 0.75 9 0.75 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, W.jsx)("path", {
        d: "M 3 6.75 C 4.243 6.75 5.25 7.757 5.25 9 C 5.25 10.243 4.243 11.25 3 11.25 C 1.757 11.25 0.75 10.243 0.75 9 C 0.75 7.757 1.757 6.75 3 6.75 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, W.jsx)("path", {
        d: "M 4.5 7.5 L 6 6 L 7.5 4.5",
        fill: "transparent",
        stroke: "currentColor",
      }),
    ],
  });
}
var Ve = u(k());
function Ro(o) {
  return (0, Ve.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: (0, Ve.jsx)("path", {
      d: "M 0 1 C 0 0.448 0.448 0 1 0 C 2.537 0 5.463 0 7 0 C 7.552 0 8 0.448 8 1 C 8 2.537 8 5.463 8 7 C 8 7.552 7.552 8 7 8 C 5.463 8 2.537 8 1 8 C 0.448 8 0 7.552 0 7 C 0 5.463 0 2.537 0 1 Z",
      transform: "translate(2 2) rotate(45 4 4)",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var ee = u(k());
function Ao(o) {
  return (0, ee.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: [
      (0, ee.jsx)("path", {
        d: "M 0.75 5.999 C 0.75 3.1 3.1 0.75 5.999 0.75 C 6 0.75 6 0.75 6.001 0.75 C 8.9 0.75 11.25 3.1 11.25 5.999 C 11.25 6 11.25 6 11.25 6 C 11.25 8.9 8.9 11.25 6 11.25 C 6 11.25 6 11.25 5.999 11.25 C 3.1 11.25 0.75 8.9 0.75 6.001 C 0.75 6 0.75 6 0.75 5.999 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, ee.jsx)("path", {
        d: "M 6 4 C 7.105 4 8 4.895 8 6 C 8 7.105 7.105 8 6 8 C 4.895 8 4 7.105 4 6 C 4 4.895 4.895 4 6 4 Z",
        fill: "transparent",
        stroke: "currentColor",
      }),
    ],
  });
}
var De = u(k());
function Fe(o) {
  return (0, De.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: (0, De.jsx)("path", {
      d: "M 6 0.75 C 8.899 0.75 11.25 3.101 11.25 6 C 11.25 8.899 8.899 11.25 6 11.25 C 3.101 11.25 0.75 8.899 0.75 6 C 0.75 3.101 3.101 0.75 6 0.75 Z",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var te = u(k());
function No(o) {
  return (0, te.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: [
      (0, te.jsx)("path", {
        d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 4.743 11 7.257 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.257 1 4.743 1 3 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, te.jsx)("path", { d: "M 1.5 6 L 10.5 6", fill: "transparent", stroke: "currentColor" }),
    ],
  });
}
var oe = u(k());
function Mo(o) {
  return (0, oe.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: [
      (0, oe.jsx)("path", {
        d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 4.743 11 7.257 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.257 1 4.743 1 3 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, oe.jsx)("path", { d: "M 6 1 L 6 11", fill: "transparent", stroke: "currentColor" }),
    ],
  });
}
var K = u(k());
function Vo(o) {
  return (0, K.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: [
      (0, K.jsx)("path", {
        d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 4.743 11 7.257 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.257 1 4.743 1 3 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, K.jsx)("path", { d: "M 1.5 6 L 10.5 6", fill: "transparent", stroke: "currentColor" }),
      (0, K.jsx)("path", { d: "M 5 1.5 L 5 5.5", fill: "transparent", stroke: "currentColor" }),
      (0, K.jsx)("path", { d: "M 7 6.5 L 7 10.5", fill: "transparent", stroke: "currentColor" }),
    ],
  });
}
var Oe = u(k());
function Do(o) {
  return (0, Oe.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: (0, Oe.jsx)("path", {
      d: "M 5.568 0.839 C 5.761 0.508 6.239 0.508 6.432 0.839 C 6.905 1.651 7.634 2.902 7.91 3.375 C 7.98 3.497 8.099 3.583 8.236 3.612 C 8.771 3.728 10.186 4.035 11.105 4.234 C 11.48 4.315 11.627 4.77 11.372 5.056 C 10.745 5.757 9.781 6.836 9.416 7.245 C 9.323 7.349 9.277 7.489 9.291 7.628 C 9.347 8.173 9.492 9.613 9.587 10.549 C 9.626 10.93 9.239 11.212 8.888 11.057 C 8.027 10.678 6.703 10.094 6.202 9.873 C 6.073 9.817 5.927 9.817 5.798 9.873 C 5.297 10.094 3.972 10.678 3.112 11.057 C 2.761 11.212 2.374 10.93 2.413 10.549 C 2.508 9.613 2.653 8.173 2.709 7.628 C 2.723 7.489 2.677 7.349 2.584 7.245 C 2.219 6.836 1.254 5.757 0.628 5.056 C 0.373 4.77 0.52 4.315 0.895 4.234 C 1.814 4.035 3.229 3.728 3.764 3.612 C 3.901 3.583 4.02 3.497 4.09 3.375 C 4.366 2.902 5.095 1.651 5.568 0.839 Z",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var $ = u(k());
function Fo(o) {
  return (0, $.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...o,
    children: [
      (0, $.jsx)("path", {
        d: "M 5.5 2.5 C 5.5 1.672 6.172 1 7 1 C 7.916 1 9.084 1 10 1 C 10.828 1 11.5 1.672 11.5 2.5 C 11.5 4.388 11.5 7.612 11.5 9.5 C 11.5 10.328 10.828 11 10 11 C 9.084 11 7.916 11 7 11 C 6.172 11 5.5 10.328 5.5 9.5 C 5.5 7.612 5.5 4.388 5.5 2.5 Z",
      }),
      (0, $.jsx)("path", { d: "M 3 3 L 3 9" }),
      (0, $.jsx)("path", { d: "M 0.5 4.5 L 0.5 7.5" }),
    ],
  });
}
var re = u(k());
function Oo(o) {
  return (0, re.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...o,
    children: [
      (0, re.jsx)("path", {
        d: "M 4.5 2 C 4.5 1.172 5.172 0.5 6 0.5 C 7.181 0.5 8.819 0.5 10 0.5 C 10.828 0.5 11.5 1.172 11.5 2 C 11.5 3.181 11.5 4.819 11.5 6 C 11.5 6.828 10.828 7.5 10 7.5 C 8.819 7.5 7.181 7.5 6 7.5 C 5.172 7.5 4.5 6.828 4.5 6 C 4.5 4.819 4.5 3.181 4.5 2 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, re.jsx)("path", {
        d: "M 7.5 7.5 C 7.5 7.5 7.5 8.865 7.5 10 C 7.5 10.828 6.828 11.5 6 11.5 C 4.819 11.5 3.181 11.5 2 11.5 C 1.172 11.5 0.5 10.828 0.5 10 C 0.5 8.819 0.5 7.181 0.5 6 C 0.5 5.172 1.172 4.5 2 4.5 C 3.135 4.5 4.5 4.5 4.5 4.5",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var Ri = {
  component: oo,
  label: To,
  checkbox: Lo,
  radio: Ao,
  breakpoint: Yt,
  grid: ro,
  masonry: Me,
  frame: Ee,
  "frame-round": Fe,
  stack: No,
  switch: Fo,
  "stack-horizontal": Mo,
  "stack-with-data": Zt,
  "stack-wrap-horizontal": Vo,
  "stack-wrap-vertical": Me,
  form: we,
  "form-container": we,
  "form-input": po,
  "form-select": Xt,
  text: Jt,
  svg: Pe,
  path: Io,
  placeholder: Re,
  boolean: Eo,
  star: Do,
  polygon: Ro,
  oval: Fe,
  overlay: Oo,
  rectangle: Ee,
  image: Pe,
  group: to,
  "collection-item": no,
  "view-box": Re,
  vector: eo,
  shader: Wt,
};
var w = u(q(), 1);
function _o(o, e) {
  return e === null ? !1 : o > e;
}
function pr(o, e) {
  let t = me(o),
    r = me(e);
  if (o <= e || t !== r) return t;
  let a = (i) =>
    new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: i,
      roundingMode: "ceil",
    }).format(o);
  for (let i of [2, 1]) {
    let s = a(i);
    if (s !== r) return s;
  }
  return t;
}
function Bo(o, e, t = "Please select fewer days.") {
  let r = pr(o, e),
    a = me(e);
  return `This period has ${r} events, exceeding the ${a} limit. ${t}`;
}
function ge(o, e, t) {
  return { source: o, rangeDays: Ut(e.startDate, e.endDate), eventCount: t };
}
function Go(o, e, t) {
  Y("analytics_export_start", ge(o, e, t));
}
function zo(o, e, t) {
  Y("analytics_export_success", ge(o, e, t));
}
function jo(o, e, t) {
  Y("analytics_export_cancel", ge(o, e, t));
}
function Ko(o, e, t, r) {
  Y("analytics_export_fail", { ...ge(o, e, t), reason: r });
}
var Q = u(q(), 1);
function Ho(o, e) {
  if (o === e) return o;
  if (e > o) {
    let t = Math.max(1, Math.ceil((e - o) / 6));
    return Math.min(o + t, e);
  }
  return e;
}
function Uo({ transferredEvents: o, totalEvents: e, isComplete: t }) {
  return t ? 1 : e <= 0 ? 0 : Math.min(o / e, 0.99);
}
function Zo({ phase: o, totalEvents: e, transferredEvents: t }) {
  let r = o === "complete" ? e : t,
    [a, i] = (0, Q.useState)(0);
  ((0, Q.useEffect)(() => {
    o === "inactive" && i(0);
  }, [o]),
    (0, Q.useEffect)(() => {
      o === "complete" && i(e);
    }, [o, e]),
    (0, Q.useEffect)(() => {
      if (o !== "exporting") return;
      let C = () => {
        i((n) => Ho(n, r));
      };
      C();
      let l = window.setInterval(C, 100);
      return () => window.clearInterval(l);
    }, [o, r]));
  let s =
    o === "inactive"
      ? 0
      : Uo({ transferredEvents: a, totalEvents: e, isComplete: o === "complete" });
  return { displayedEventCount: a, progress: s };
}
var Wo = se("useAnalyticsExport");
function $o(o) {
  return o instanceof xe && o.status === 403;
}
function ur(o) {
  return $o(o)
    ? "Analytics export is not available on this plan."
    : o instanceof de
      ? o.message
      : "Something went wrong while exporting. Please try again.";
}
function dr(o) {
  return o instanceof de
    ? "incomplete"
    : o instanceof xe && o.status === Gt.Forbidden
      ? "entitlement"
      : "unknown";
}
function Wi(o, e, t, r, a) {
  let [i, s] = (0, w.useState)("idle"),
    [C, l] = (0, w.useState)(0),
    [n, A] = (0, w.useState)(),
    [S, v] = (0, w.useState)(0),
    [g, x] = (0, w.useState)(0),
    [R, M] = (0, w.useState)("inactive"),
    [H, O] = (0, w.useState)(),
    [L, _] = (0, w.useState)(),
    { displayedEventCount: V, progress: f } = Zo({
      phase: R,
      totalEvents: S,
      transferredEvents: g,
    }),
    c = (0, w.useRef)(),
    h = (0, w.useRef)(!1),
    p = (0, w.useRef)(!1);
  (0, w.useEffect)(() => () => c.current?.abort(), []);
  let N = e?.startDate,
    d = e?.endDate;
  (0, w.useEffect)(() => {
    if (!N || !d) {
      s("idle");
      return;
    }
    let P = new AbortController();
    return (
      s("loading"),
      A(void 0),
      Ht(o, { startDate: N, endDate: d }, P.signal)
        .then(({ eventCount: T }) => {
          if (P.signal.aborted) return;
          v(T);
          let Z = t !== null && _o(T, t);
          s(Z ? "over_limit" : "ready");
        })
        .catch((T) => {
          P.signal.aborted || be(T) || (Wo.reportError(T), s("error"));
        }),
      () => P.abort()
    );
  }, [N, d, o, t, C]);
  let b = (0, w.useCallback)(() => l((P) => P + 1), []),
    B = (0, w.useCallback)(
      (P) => {
        !r || !p.current || ((p.current = !1), jo(r, P, S));
      },
      [r, S]
    ),
    ne = (0, w.useCallback)(async () => {
      if (!N || !d || i !== "ready" || h.current) return;
      let P = { startDate: N, endDate: d };
      ((h.current = !0), O(void 0), _(void 0), x(0));
      let D = new AbortController();
      ((c.current = D), (p.current = !1), r && (Go(r, P, S), (p.current = !0)));
      try {
        let T = zt() ? await jt(P, D.signal) : void 0,
          Z = performance.now();
        return (
          M("exporting"),
          await Kt(o, P, { signal: D.signal, writable: T, onTransferredEvents: x }),
          D.signal.aborted
            ? (B(P), "aborted")
            : (_(performance.now() - Z),
              M("complete"),
              r && p.current && ((p.current = !1), zo(r, P, S)),
              "complete")
        );
      } catch (T) {
        return D.signal.aborted || (M("inactive"), be(T))
          ? (B(P), "aborted")
          : (!$o(T) && !(T instanceof de) && Wo.reportError(T),
            r && p.current && ((p.current = !1), Ko(r, P, S, dr(T))),
            O(ur(T)),
            "failed");
      } finally {
        c.current === D && (h.current = !1);
      }
    }, [o, N, d, i, r, S, B]),
    ie = (0, w.useCallback)(() => {
      (c.current?.abort(),
        (h.current = !1),
        M("inactive"),
        x(0),
        O(void 0),
        _(void 0),
        N && d && B({ startDate: N, endDate: d }));
    }, [N, d, B]),
    U;
  return (
    i === "over_limit" && t !== null
      ? (U = Bo(S, t, a))
      : i === "error" && (U = n ?? "Could not estimate export size for this range. Try again."),
    {
      volumeCheck: i,
      volumeMessage: U,
      retryVolumeCheck: b,
      totalEvents: S,
      phase: R,
      errorMessage: H,
      exportDurationMs: L,
      setErrorMessage: O,
      displayedEventCount: V,
      progress: f,
      start: ne,
      cancel: ie,
    }
  );
}
var E = u(q());
var Qo = "p1j5whaq",
  Xi = "i190xtw4",
  Ji = "sptrpar",
  es = "s1laaeki",
  ts = "ir4tltr",
  os = "pvix4vs",
  rs = "i1tmo59k",
  ns = "e1ojgdqj",
  is = "i1wtmfop",
  ss = "slyvz40",
  as = "h166ubuf",
  ls = "p1797vmk",
  qo = "d13gkfvk",
  Yo = "ltrjzs0";
var F = u(k()),
  fr = ["bottom", "top"];
function hs({ enabled: o, defaultOpen: e }) {
  let [t, r] = (0, E.useState)(null),
    [a, i] = (0, E.useState)(e),
    s = (0, E.useCallback)(() => {
      o && (i(!0), t?.setAttribute("aria-expanded", "true"));
    }, [o, t]),
    C = (0, E.useCallback)(() => {
      (i(!1), t?.removeAttribute("aria-expanded"));
    }, [t]);
  return { anchorElement: t, setAnchorElement: r, isPopoverOpen: a, open: s, close: C };
}
function Cs(o) {
  return (0, E.useMemo)(() => {
    let e = new Map();
    return (o.forEach((t) => Xo(t, e)), e);
  }, [o]);
}
function Xo(o, e) {
  if (o.type === "section") {
    o.items.forEach((t) => Xo(t, e));
    return;
  }
  e.set(o.value, o);
}
function gs() {
  let [o, e] = (0, E.useState)(-1),
    [t, r] = (0, E.useState)("nearest-edge"),
    a = (0, E.useCallback)((i, s) => {
      (e(i), r(s));
    }, []);
  return { scrollToIndex: o, scrollToAlignment: t, scrollItemIntoView: a };
}
function ys({ inputRef: o, focusHandler: e, initialInputValue: t, changeHandler: r }) {
  (0, E.useLayoutEffect)(() => {
    let s = o.current;
    s && (s.focus(), e());
  }, [e, o]);
  let a = E.default.useRef(!1);
  return (
    (0, E.useLayoutEffect)(() => {
      a.current || ((a.current = !0), t && r(t, !1, () => {}));
    }),
    {
      handleInputChange: (0, E.useCallback)(
        (s, C, l, n) => {
          C || r(s, C, l, n);
        },
        [r]
      ),
    }
  );
}
function ks({
  anchorElement: o,
  isOpen: e,
  menuClassName: t,
  menuWidth: r,
  menuMinWidth: a,
  alignSelf: i = "start",
  attachTo: s = fr,
  onClose: C,
  children: l,
}) {
  let [n, A] = (0, E.useState)(0);
  (0, E.useLayoutEffect)(() => {
    if (!o) return;
    let v = () => {
      let x = o.getBoundingClientRect().height;
      A(x);
    };
    v();
    let g = new ResizeObserver(v);
    return (g.observe(o), () => g.disconnect());
  }, [o]);
  let S = (0, E.useMemo)(
    () =>
      o
        ? { x: z.values.popoverAnchorInset, y: -(n - z.values.popoverAnchorInset) }
        : { x: 0, y: 0 },
    [o, n]
  );
  return !e || !o
    ? null
    : (0, F.jsx)(qt, {
        className: ce(Qo, t),
        style: { width: r, minWidth: a },
        showArrow: !1,
        focusTrapEnabled: !1,
        anchor: o,
        alignSelf: i,
        attachTo: s,
        offset: S,
        animateAppear: !1,
        backdropEnabled: !0,
        onClose: C,
        children: l,
      });
}
function xs({
  listBoxId: o,
  showList: e,
  large: t,
  displayItems: r,
  checkedItems: a,
  highlightedIndex: i,
  scrollToIndex: s,
  scrollToAlignment: C,
  onSelect: l,
  onHighlight: n,
  stickySectionHeaders: A,
  noSearchResultsEnabled: S,
  isOpen: v,
  flatList: g,
}) {
  let x = S && v && g.length === 0,
    R = e && !x;
  return (0, F.jsxs)(F.Fragment, {
    children: [
      R && (0, F.jsx)("div", { className: qo }),
      R &&
        (0, F.jsx)("div", {
          id: o,
          role: "listbox",
          className: Yo,
          children: (0, F.jsx)(ao, {
            large: t,
            items: r,
            checkedItems: a,
            highlightedIndex: i,
            scrollToIndex: s,
            scrollToAlignment: C,
            onSelect: l,
            onHighlight: n,
            shrinkCompletionLabel: !0,
            stickySectionHeaders: A,
          }),
        }),
      x && (0, F.jsx)(lo, { className: so, icon: null, title: void 0, body: "No search results" }),
    ],
  });
}
function vs(o) {
  o.target instanceof HTMLInputElement || o.preventDefault();
}
export {
  vn as a,
  Ie as b,
  So as c,
  ko as d,
  An as e,
  Vn as f,
  Lo as g,
  co as h,
  Fr as i,
  _n as j,
  Re as k,
  Oo as l,
  Ri as m,
  jr as n,
  Wi as o,
  Xi as p,
  Ji as q,
  es as r,
  ts as s,
  os as t,
  rs as u,
  ns as v,
  is as w,
  ss as x,
  as as y,
  ls as z,
  fr as A,
  hs as B,
  Cs as C,
  gs as D,
  ys as E,
  ks as F,
  xs as G,
  vs as H,
};
//# sourceMappingURL=chunk-GWCCEN3Z.mjs.map
