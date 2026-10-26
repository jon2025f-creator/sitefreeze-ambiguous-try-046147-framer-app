import {
  Ha as Bt,
  Ia as Ft,
  Ja as Le,
  Ka as _t,
  Na as Ht,
  Pa as Kt,
  Ra as Ut,
  Sa as Te,
  Ta as Zt,
  Ua as $t,
  Va as Qt,
} from "chunk-SWFUOFKY.mjs";
import { fb as ge, gb as Rt, hb as Vt, ib as Mt, kb as Nt, xb as Gt } from "chunk-EXMIFJ7F.mjs";
import { a as Ee, b as he } from "chunk-FYOWT6IP.mjs";
import { D as Pt, Oa as Et, u as wt } from "chunk-AUBNITPV.mjs";
import { rc as It } from "chunk-V35FO2V2.mjs";
import { h as Lt } from "chunk-XUWD4PKP.mjs";
import { a as Ie, b as Q } from "chunk-JP64H722.mjs";
import { Wh as vt, Xm as bt, al as be, hl as xt, ol as St } from "chunk-N63YOPP3.mjs";
import { Zi as Se, ql as kt, wi as yt } from "chunk-O4DF5MJQ.mjs";
import { a as Wt, b as jt } from "chunk-JEFGSZXW.mjs";
import { e as Ot, h as Dt } from "chunk-6AZSXVZ2.mjs";
import { f as ye } from "chunk-BOLNZQB3.mjs";
import { a as zt } from "chunk-YKO54YLV.mjs";
import { b as H } from "chunk-4SRI54BB.mjs";
import { a as we, b as Tt, u as Pe } from "chunk-7FCUEDBR.mjs";
import { f as $ } from "chunk-2VYRKPPR.mjs";
import { a as fe } from "chunk-QFU6OGL3.mjs";
import { a as At } from "chunk-24G7FGVN.mjs";
import { a as Ct } from "chunk-MSHSIAEI.mjs";
import { a as p } from "chunk-2FCXHKEL.mjs";
import { b as xe, p as me } from "chunk-7NUIQ7JU.mjs";
import { b as gt } from "chunk-Y3GZLMBF.mjs";
import { b as C, c as de } from "chunk-4JY5UMT2.mjs";
import { a as z } from "chunk-SWYZG2NI.mjs";
import { b as ht, i as ue } from "chunk-WBI6GGAG.mjs";
import { e as a } from "chunk-WLHSDIGQ.mjs";
var Ce = a(z(), 1);
var f = a(p(), 1),
  uo = Ce.default.memo(function t({
    nodeIds: e,
    controlKey: r,
    control: o,
    controlPath: c = r,
    getControlPropPaths: s,
    onChange: i,
    onImageUpload: k,
    onContextMenu: l,
    controlProp: n,
    controlSourceIdentifier: R,
    controlSourceControlKey: w,
    sortable: x,
    supportsVariables: y,
    supportsComputedValues: v,
    supportsFetchDataValues: A = v,
    displayInPopover: M,
    icons: Z,
    controlKeyIsTraitTypeKey: D,
    popoutId: I,
    hiddenControlsByNodeId: B,
    scopeType: N,
    deleteEnabled: h,
    deleteTitle: d,
    onDelete: g,
  }) {
    let u, V;
    o.description && (V = (0, f.jsx)(Ht, { description: o.description }));
    let m = Ce.default.useMemo(() => (D ? [yt(r)] : void 0), [r, D]),
      S = Ce.default.useCallback(
        (ft, jr) => {
          i(jr, () => ft, e);
        },
        [e, i]
      ),
      {
        ArrayControlPropRow: F,
        BooleanControlPropRow: pe,
        BorderControlPropRow: ce,
        BorderRadiusControlPropRow: W,
        BoxShadowControlPropRow: P,
        CanvasPageInstanceRow: G,
        CollectionReferenceControlPropRow: L,
        ColorArrayControlPropRow: j,
        ColorControlPropRow: He,
        LocationControlPropRow: We,
        CursorControlPropRow: je,
        CustomCursorControlPropRow: ze,
        DateControlPropRow: Ke,
        DimensionControlPropRow: Ue,
        EnumControlPropRow: Ze,
        FileControlPropRow: $e,
        FontControlPropRow: Qe,
        FusedNumberControlPropRow: qe,
        GapControlPropRow: Ye,
        ImageControlPropRow: Xe,
        LinkControlPropRow: Je,
        LinkRelValuesControlPropRow: et,
        MultiCollectionReferenceControlPropRow: tt,
        MotionValueControlPropRow: rt,
        NumberControlPropRow: ot,
        ObjectControlPropRow: nt,
        PaddingControlPropRow: it,
        PageScopeControlPropRow: st,
        RichTextControlPropRow: at,
        ScrollSectionRefControlPropRow: lt,
        SlotControlPropRow: pt,
        StringControlPropRow: ct,
        TrackingIdControlPropRow: ut,
        TransitionControlPropRow: dt,
        VectorSetItemControlPropRow: mt,
      } = Kt();
    switch (o.type) {
      case "boolean":
        if ((C(n.type === "boolean"), !pe)) return;
        u = (0, f.jsx)(pe, {
          nodeIds: e,
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          sortable: x,
          traitTypeKeys: m,
          supportsVariables: y,
          supportsComputedValues: v,
          supportsFetchDataValues: A,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "motionvalue":
        if ((C(n.type === "motionvalue"), !rt)) return;
        u = (0, f.jsx)(rt, {
          supportsVariables: y,
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          traitTypeKeys: m,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "number":
        if ((C(n.type === "number"), !ot)) return;
        u = (0, f.jsx)(ot, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          sortable: x,
          traitTypeKeys: m,
          supportsVariables: y,
          supportsComputedValues: v,
          nodeIds: e,
          supportsFetchDataValues: A,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "dimension":
        if ((C(n.type === "dimension"), !Ue)) return;
        u = (0, f.jsx)(Ue, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          traitTypeKeys: m,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
          supportsVariables: y,
        });
        break;
      case "string":
        if ((C(n.type === "string"), !ct)) return;
        u = (0, f.jsx)(ct, {
          nodeIds: e,
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: i,
          onContextMenu: l,
          sortable: x,
          traitTypeKeys: m,
          supportsVariables: y,
          supportsFetchDataValues: A,
          supportsComputedValues: v,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "trackingid":
        if ((C(n.type === "trackingid"), !ut)) return;
        u = (0, f.jsx)(ut, {
          controlKey: r,
          control: o,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          traitTypeKeys: m,
          supportsVariables: y,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "richtext":
        if ((C(n.type === "richtext"), !at)) return;
        u = (0, f.jsx)(at, {
          nodeIds: e,
          control: o,
          controlKey: r,
          controlProp: n,
          getControlPropPaths: s,
          onChange: i,
          onContextMenu: l,
          sortable: x,
          traitTypeKeys: m,
          supportsVariables: y,
          scopeType: N,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "fusednumber":
        if ((C(n.type === "fusednumber"), !qe)) return;
        u = (0, f.jsx)(qe, {
          nodeIds: e,
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          traitTypeKeys: m,
          sortable: x,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "enum":
        if ((C(n.type === "enum"), !Ze)) return;
        u = (0, f.jsx)(Ze, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          sortable: x,
          icons: Z,
          controlSourceIdentifier: R,
          controlSourceControlKey: w,
          traitTypeKeys: m,
          supportsVariables: y,
          supportsComputedValues: v,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "color":
        if ((C(n.type === "color"), !He)) return;
        u = (0, f.jsx)(He, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          sortable: x,
          traitTypeKeys: m,
          displayInPopover: M,
          supportsVariables: y,
          supportsComputedValues: v,
          supportsFetchDataValues: A,
          nodeIds: e,
          popoutId: I,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "responsiveimage":
      case "image":
        if ((C(n.type === "image" || n.type === "responsiveimage"), !Xe)) return;
        u = (0, f.jsx)(Xe, {
          nodeIds: e,
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: i,
          onUpload: k,
          onContextMenu: l,
          sortable: x,
          traitTypeKeys: m,
          displayInPopover: M,
          supportsFetchDataValues: A,
          supportsVariables: y,
          popoutId: I,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "file":
        if ((C(n.type === "file"), !$e)) return;
        u = (0, f.jsx)($e, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          sortable: x,
          traitTypeKeys: m,
          supportsVariables: y,
          supportsComputedValues: v,
          controlSourceIdentifier: R,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "slot": {
        if ((C(n.type === "slot"), e.length !== 1)) return null;
        if (R === "framer/Prototype") {
          if (!G) return;
          u = (0, f.jsx)(G, {
            nodeIds: e,
            control: o,
            controlKey: r,
            controlProp: n,
            onChange: S,
            deleteEnabled: h,
            deleteTitle: d,
            onDelete: g,
          });
        } else {
          if (!pt) return;
          u = (0, f.jsx)(pt, {
            nodeIds: e,
            control: o,
            controlKey: r,
            controlPath: c,
            controlProp: n,
            traitTypeKeys: m,
            onChange: i,
            deleteEnabled: h,
            deleteTitle: d,
            onDelete: g,
          });
        }
        break;
      }
      case "transition":
        if ((C(n.type === "transition"), !dt)) return;
        u = (0, f.jsx)(dt, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          sortable: x,
          supportsVariables: y,
          traitTypeKeys: m,
          popoutId: I,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "boxshadow":
        if ((C(n.type === "boxshadow"), !P)) return;
        u = (0, f.jsx)(P, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: i,
          onContextMenu: l,
          supportsVariables: y,
          traitTypeKeys: m,
          popoutId: I,
          nodeIds: e,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "font":
        if ((C(n.type === "font"), !Qe)) return;
        u = (0, f.jsx)(Qe, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: i,
          nodeIds: e,
          traitTypeKeys: m,
          popoutId: I,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "object":
        if ((C(n.type === "object"), !nt)) return;
        u = (0, f.jsx)(nt, {
          control: o,
          controlKey: r,
          controlPath: c,
          getControlPropPaths: s,
          controlProp: n,
          onChange: i,
          nodeIds: e,
          ControlPropRow: t,
          onContextMenu: l,
          sortable: x,
          traitTypeKeys: m,
          popoutId: I,
          scopeType: N,
          hiddenControlsByNodeId: B,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "link":
        if ((C(n.type === "link"), !Je)) return;
        u = (0, f.jsx)(Je, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: i,
          onContextMenu: l,
          sortable: x,
          traitTypeKeys: m,
          supportsVariables: y,
          supportsComputedValues: v,
          supportsFetchDataValues: A,
          nodeIds: e,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "linkrelvalues":
        if ((C(n.type === "linkrelvalues"), !et)) return;
        u = (0, f.jsx)(et, {
          controlKey: r,
          control: o,
          controlProp: n,
          onChange: S,
          supportsVariables: y,
          traitTypeKeys: m,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "pagescope":
        if ((C(n.type === "pagescope"), !st)) return;
        u = (0, f.jsx)(st, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          traitTypeKeys: m,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "date":
        if ((C(n.type === "date"), !Ke)) return;
        u = (0, f.jsx)(Ke, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          sortable: x,
          traitTypeKeys: m,
          supportsVariables: y,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "scrollsectionref":
        if ((C(n.type === "scrollsectionref"), !lt)) return;
        u = (0, f.jsx)(lt, {
          nodeIds: e,
          traitTypeKeys: m,
          controlKey: r,
          control: o,
          controlProp: n,
          onContextMenu: l,
          onChange: i,
          scopeType: N,
          supportsVariables: y,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "customcursor":
        if ((C(n.type === "customcursor"), !ze)) return;
        u = (0, f.jsx)(ze, {
          nodeIds: e,
          traitTypeKeys: m,
          controlKey: r,
          control: o,
          controlProp: n,
          onContextMenu: l,
          onChange: i,
          scopeType: N,
          supportsVariables: y,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "cursor":
        if ((C(n.type === "cursor"), !je)) return;
        u = (0, f.jsx)(je, {
          popoutId: r,
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          traitTypeKeys: m,
          supportsVariables: y,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "array": {
        if ((C(n.type === "array"), o.control.type === "color" && j)) {
          u = (0, f.jsx)(j, {
            nodeIds: e,
            control: o,
            scopeType: N,
            controlKey: r,
            controlPath: c,
            controlProp: n,
            traitTypeKeys: m,
            onChange: i,
            supportsVariables: y,
            deleteEnabled: h,
            deleteTitle: d,
            onDelete: g,
          });
          break;
        }
        if (!F) return;
        u = (0, f.jsx)(F, {
          nodeIds: e,
          control: o,
          scopeType: N,
          controlKey: r,
          controlPath: c,
          getControlPropPaths: s,
          controlProp: n,
          traitTypeKeys: m,
          hiddenControlsByNodeId: B,
          ControlPropRow: t,
          displayInPopover: M,
          onChange: i,
          supportsVariables: y,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      }
      case "border": {
        if ((C(n.type === "border"), !ce)) return;
        u = (0, f.jsx)(ce, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: i,
          onContextMenu: l,
          nodeIds: e,
          traitTypeKeys: m,
          popoutId: r,
          supportsVariables: y,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      }
      case "padding": {
        if ((C(n.type === "padding"), !it)) return;
        u = (0, f.jsx)(it, {
          controlKey: r,
          control: o,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          traitTypeKeys: m,
          supportsVariables: y,
          supportsComputedValues: v,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      }
      case "gap":
        if ((C(n.type === "gap"), !Ye)) return;
        u = (0, f.jsx)(Ye, {
          controlKey: r,
          control: o,
          controlProp: n,
          onChange: i,
          nodeIds: e,
          onContextMenu: l,
          traitTypeKeys: m,
          supportsVariables: y,
          supportsComputedValues: v,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "borderradius":
        if ((C(n.type === "borderradius"), !W)) return;
        u = (0, f.jsx)(W, {
          controlKey: r,
          control: o,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          traitTypeKeys: m,
          supportsVariables: y,
          supportsComputedValues: v,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "collectionreference":
        if ((C(n.type === "collectionreference"), !L)) return;
        u = (0, f.jsx)(L, {
          controlKey: r,
          control: o,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          supportsVariables: y,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "multicollectionreference":
        if ((C(n.type === "multicollectionreference"), !tt)) return;
        u = (0, f.jsx)(tt, {
          controlKey: r,
          control: o,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          supportsComputedValues: v,
          supportsVariables: y,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "vectorsetitem":
        if ((C(n.type === "vectorsetitem"), !mt)) return;
        u = (0, f.jsx)(mt, {
          control: o,
          controlKey: r,
          controlProp: n,
          onChange: S,
          supportsVariables: y,
          traitTypeKeys: m,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "location":
        if ((C(n.type === "location"), !We)) return;
        u = (0, f.jsx)(We, {
          controlKey: r,
          control: o,
          controlProp: n,
          onChange: S,
          onContextMenu: l,
          traitTypeKeys: m,
          supportsVariables: y,
          deleteEnabled: h,
          deleteTitle: d,
          onDelete: g,
        });
        break;
      case "eventhandler":
      case "changehandler":
        break;
      default:
        de(o);
    }
    return (0, f.jsxs)(f.Fragment, { children: [u, V] });
  });
var qt = "l7g1830";
var Yt = a(p());
function Co({ children: t, htmlFor: e, className: r }) {
  return (0, Yt.jsx)("label", { className: fe(qt, r), htmlFor: e, children: t });
}
var Kr = 3,
  T = ue("PartialTreeSender"),
  Ae = Ct();
function tr(t) {
  if (gt(t)) return t.length;
  if (typeof t != "object" || t === null) return 8;
  let e = 0;
  for (let r of Object.values(t)) e += tr(r);
  return e;
}
function Xt() {
  return new Promise((t, e) => {
    if (typeof MessageChannel < "u") {
      let r = new MessageChannel();
      ((r.port1.onmessage = () => t()),
        (r.port1.onmessageerror = () => e()),
        r.port2.postMessage(null));
    } else setTimeout(t, 0);
  });
}
var Jt = class {
  constructor(e, r, o) {
    this.treeUpdater = e;
    ((this.name = r + "-" + String(Math.round(Math.random() * 1e3))),
      (this.chunkingConfig = {
        maxNodesPerChunk: o?.maxNodesPerChunk ?? 1e3,
        maxSizePerChunk: o?.maxSizePerChunk ?? 5e7,
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
  get crdtStore() {
    return this.treeUpdater.store;
  }
  getScopeAsValue(e, r) {
    let o = e.get(r);
    if (o) return this.scopeAsValue(o, e.root.id, e.getService("metadata")?.version !== void 0);
  }
  scopeAsValue(e, r, o) {
    (C(e.parentid === r, "Scope must be a direct child of the root"),
      bt(e) && C(e.isLoaded(), "Scope must be loaded"));
    let c = e.treeState.getSerializedCache(e);
    if (c) return c;
    if (!o) {
      let s = this.crdtStore,
        i = e.treeState.serialized?.hadError;
      if (s && !i) {
        let k = s.getObject(e.id);
        if (k && k.parentid !== Lt) return k;
      }
    }
    return Pt.valueFromNode(e);
  }
  shouldUseChunking(e, r) {
    if (this.timelineCursor) return !1;
    let o = e.chunkingHints;
    if (!o || o.size === 0) return !1;
    let c = ke();
    r && c.add(r);
    for (let s of c)
      if (o.has(s)) return (T.debug(this.name, `chunking required - large page hint: ${s}`), !0);
    return !1;
  }
  serializeTreeChunks(e, r) {
    let o = [],
      c = crypto.randomUUID(),
      s = new Map(),
      i = new Map(),
      k = 0,
      l = 0,
      n = ke();
    r && n.add(r);
    let R = () =>
        s.size >= this.chunkingConfig.maxNodesPerChunk || k >= this.chunkingConfig.maxSizePerChunk,
      w = () => {
        s.size > 0 &&
          (o.push({
            name: this.name,
            timestamp: Date.now(),
            treeChunks: {
              chunkId: c,
              chunkIndex: o.length,
              totalChunks: -1,
              nodes: s,
              childrenMap: i,
              rootId: o.length === 0 ? e.root.id : void 0,
            },
          }),
          (s = new Map()),
          (i = new Map()),
          (k = 0));
      },
      x = (I) => {
        let B = I.children ?? Ae,
          N = { ...I, children: Ae },
          h = tr(N);
        (k + h > this.chunkingConfig.maxSizePerChunk && w(),
          s.set(I.id, N),
          i.set(
            I.id,
            B.map((d) => d.id)
          ),
          (k += h),
          l++,
          R() && w());
        for (let d of B) x(d);
      },
      y = e.root,
      v,
      A = {};
    for (v in y) Se[v] || (A[v] = y[v]);
    let M = e.getNodes(n),
      Z = { ...A, __class: "RootNode", id: e.root.id, children: Ae };
    (s.set(e.root.id, Z),
      i.set(
        e.root.id,
        M.map((I) => I.id)
      ),
      l++,
      R() && w());
    for (let I of M)
      x(this.scopeAsValue(I, e.root.id, e.getService("metadata")?.version !== void 0));
    w();
    let D = o.length;
    for (let I of o) I.treeChunks.totalChunks = D;
    return (
      T.debug(this.name, `directly chunked tree into ${o.length} chunks with ${l} total nodes`),
      o
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
      C(this.chunkIndex >= 0, "Chunk index should not be negative"),
      C(this.chunkIndex <= this.chunkQueue.length, "Chunk index should not exceed queue length"),
      this.chunkIndex < this.chunkQueue.length
    );
  }
  async *drainChunks(e) {
    if (!this.hasMoreChunks()) return;
    let r = this.drainingPromise;
    ((this.drainingPromise = new At()),
      r &&
        (T.debug(this.name, "drainChunks already in progress, waiting for it to finish"), await r),
      T.debug(this.name, "drainChunks started"));
    let o = 0,
      c = performance.now();
    try {
      for (; this.hasMoreChunks();) {
        if (e?.aborted) {
          (T.debug(this.name, "drainChunks aborted, clearing chunk queue"),
            (this.chunkQueue = []),
            (this.chunkIndex = 0));
          return;
        }
        let s = this.getNextChunk();
        (s &&
          (o++,
          T.debug(
            this.name,
            `sending chunk ${s.treeChunks.chunkIndex + 1} of ${s.treeChunks.totalChunks}`
          ),
          yield s),
          await Xt());
      }
    } finally {
      (await Xt(), (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()));
      let s = performance.now() - c,
        i = s > 1e3 ? `${(s / 1e3).toFixed(2)}s` : `${Math.round(s)}ms`;
      (T.debug(this.name, `completed sending ${o} chunks in ${i}`),
        T.debug(this.name, "drainChunks completed"),
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
    if (e === be) return [void 0, void 0];
    if (((this.currentScopeId = e), this.scopeBufferMap.has(this.currentScopeId)))
      return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [void 0, void 0]);
    let r;
    if (this.scopeBufferMap.size >= Kr) {
      let o = ke(),
        c = 1 / 0,
        s;
      for (let [i, k] of this.scopeBufferMap) o.has(i) || (c > k && ((c = k), (s = i)));
      s && (this.scopeBufferMap.delete(s), (r = s));
    }
    return (this.scopeBufferMap.set(this.currentScopeId, performance.now()), [r, e]);
  }
  reset(e) {
    let r = this.treeUpdater.tree;
    if ((this.resetScopeBuffer(e), this.shouldUseChunking(r, e)))
      return (
        (this.chunkQueue = this.serializeTreeChunks(r, e)),
        (this.chunkIndex = 0),
        T.debug(this.name, "initiated direct chunked transfer for tree"),
        null
      );
    let o = this.serializeTree(r, e);
    return ((this.chunkQueue = []), (this.chunkIndex = 0), o);
  }
  update(e) {
    if (!e) return {};
    if (this.hasMoreChunks()) return {};
    let r = this.treeUpdater.tree,
      o = this.treeUpdater.fetchForwardChanges(this.timelineCursor);
    if (!o) {
      if (this.treeUpdater.invalidatedByLoadCompletedDocument(this.timelineCursor))
        return (
          T.debug(
            this.name,
            "cursor invalidated, sending empty update for load completed document"
          ),
          (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()),
          {}
        );
      if ((this.resetScopeBuffer(e), this.shouldUseChunking(r, e))) {
        ((this.chunkQueue = this.serializeTreeChunks(r, e)), (this.chunkIndex = 0));
        let l = this.getNextChunk();
        if (l)
          return (
            this.hasMoreChunks() ||
              (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()),
            T.debug(
              this.name,
              `starting direct chunked resend with ${this.chunkQueue.length} chunks`
            ),
            l
          );
      }
      let k = this.serializeTree(r, e);
      return (
        T.debug(this.name, "cursor invalidated, sending tree with scope:", e),
        (this.timelineCursor = this.treeUpdater.getChangeTrackingCursor()),
        { name: this.name, tree: k, timestamp: Date.now() }
      );
    }
    let [c, s] = this.updateScopeBuffer(e);
    (c && (T.debug(this.name, "deleting scope by diff:", c), er(c, o)),
      o.length === 0 && (o = void 0));
    let i;
    if (
      (s && (T.debug(this.name, "adding scope by subtree:", s), (i = this.getScopeAsValue(r, s))),
      o)
    ) {
      let k = this.getAffectedScopeIDsAfterCrossScopeMove(r, o);
      for (let l of k) {
        if (l !== this.currentScopeId) {
          this.scopeBufferMap.has(l) &&
            (T.debug(this.name, "deleting scope due to cross-scope move:", l),
            er(l, o),
            this.scopeBufferMap.delete(l));
          continue;
        }
        i ||
          (T.debug(this.name, "resending tree with scope due to cross-scope move:", l),
          (i = this.getScopeAsValue(r, l)));
      }
    }
    return { changes: o, scopes: i ? [i] : void 0, timestamp: Date.now() };
  }
  serializeTree(e, r) {
    let o = ke();
    r && o.add(r);
    let c = [];
    for (let l of o) {
      let n = this.getScopeAsValue(e, l);
      n && c.push(n);
    }
    let s = e.root,
      i,
      k = {};
    for (i in s) Se[i] || (k[i] = s[i]);
    return { version: wt, root: { ...k, __class: "RootNode", id: e.root.id, children: c } };
  }
  getAffectedScopeIDsAfterCrossScopeMove(e, r) {
    let o = new Set();
    for (let c of r) {
      if (!c.previousScope || !c.to.parentid) continue;
      let s = e.get(c.id),
        i = e.getScopeNodeFor(s);
      i && o.add(i.id);
    }
    return o;
  }
};
function er(t, e) {
  e.push({ id: t, removed: "CanvasNode", to: {} });
}
function ke() {
  return new Set([It, Et, kt, St, xt, be]);
}
var Ur =
    "autoplay; ambient-light-sensor; accelerometer; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; usb; xr-spatial-tracking",
  Zr = "autoplay",
  $r =
    "autoplay; ambient-light-sensor; accelerometer; camera; display-capture; encrypted-media; fullscreen; geolocation; gyroscope; magnetometer; microphone; midi; picture-in-picture; usb; xr-spatial-tracking; clipboard-read; clipboard-write";
function Bo(t) {
  let e;
  switch (t) {
    case "on_page":
      e = Zr;
      break;
    case "editor":
      e = Ur;
      break;
    case "preview":
      e = $r;
      break;
    default:
      de(t);
  }
  return e;
}
var Re = class {
    constructor(e) {
      this.callbacks = e;
    }
    callbacks;
    experimentListeners = new Map();
    employeesOnlySettingsListeners = new Map();
    projectFeaturesListeners = new Map();
    startUpdatesStream() {
      (Object.keys(xe).forEach((e) => {
        let r = (o) => {
          this.callbacks.updateExperiments({ [e]: o });
        };
        (me.addListener(e, r), this.experimentListeners.set(e, r));
      }),
        Object.keys(Ee).forEach((e) => {
          let r = (o) => {
            this.callbacks.updateEmployeesOnlySettings({ [e]: o });
          };
          (he.addListener(e, r), this.employeesOnlySettingsListeners.set(e, r));
        }));
    }
    getInitialExperiments() {
      let e = {};
      return (
        Object.keys(xe).forEach((r) => {
          e[r] = me.get(r);
        }),
        e
      );
    }
    getInitialEmployeesOnlySettings() {
      let e = {};
      return (
        Object.keys(Ee).forEach((r) => {
          e[r] = he.get(r);
        }),
        e
      );
    }
    initProjectFeatures() {
      Q.updated
        .then(() => {
          let e = {};
          (Object.keys(Ie).forEach((r) => {
            e[r] = Q.get(r);
          }),
            this.callbacks.updateProjectFeatures(e),
            this.projectFeaturesListeners.size === 0 &&
              Object.keys(Ie).forEach((r) => {
                let o = (c) => {
                  this.callbacks.updateProjectFeatures({ [r]: c });
                };
                (Q.addListener(r, o), this.projectFeaturesListeners.set(r, o));
              }));
        })
        .catch(ht);
    }
    stopUpdatesStream() {
      for (let [e, r] of this.experimentListeners) me.removeListener(e, r);
      for (let [e, r] of this.employeesOnlySettingsListeners) he.removeListener(e, r);
      for (let [e, r] of this.projectFeaturesListeners) Q.removeListener(e, r);
      (this.experimentListeners.clear(),
        this.employeesOnlySettingsListeners.clear(),
        this.projectFeaturesListeners.clear());
    }
  },
  rr = class {
    constructor(e, r) {
      this.remoteFlags = e;
      let o = new Re(this.remoteFlags);
      (o.startUpdatesStream(),
        this.remoteFlags.updateExperiments(o.getInitialExperiments()),
        this.remoteFlags.updateEmployeesOnlySettings(o.getInitialEmployeesOnlySettings()),
        r?.addEventListener("abort", () => o.stopUpdatesStream(), { once: !0 }));
    }
    remoteFlags;
  };
var Qr = /[^\p{Letter}\p{Number}()]+/gu;
function $o(t) {
  return vt(t.toLowerCase().replace(Qr, "-"));
}
var or = a(z(), 1);
function Yo() {
  let t = H.values.panelPadding;
  return (0, or.useMemo)(() => ({ top: t, right: -t, bottom: -t, left: t }), [t]);
}
var nr = a(p(), 1);
function qr(t, e) {
  switch (t) {
    case "left":
    case "right":
      return { x: e };
    case "top":
    case "bottom":
    case void 0:
      return { y: e };
  }
}
function tn({
  children: t,
  className: e,
  colorVariant: r,
  direction: o,
  enabled: c,
  offsetDelta: s = 0,
  text: i,
  shortcut: k,
}) {
  let l = H.values.tooltipOffset + s;
  return c
    ? (0, nr.jsx)(Ot, {
        text: i,
        shortcut: k,
        colorVariant: r,
        direction: o,
        className: e,
        positionOffset: qr(o, l),
        children: t,
      })
    : t;
}
var q = a(p());
function ir(t) {
  return (0, q.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: [
      (0, q.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        d: "M.75 3.75a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-3-3Z",
      }),
      (0, q.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1 4V3a2 2 0 0 1 2-2h1M10.75 4V3a2 2 0 0 0-2-2h-1M10.75 7.75v1a2 2 0 0 1-2 2h-1M1 7.75v1a2 2 0 0 0 2 2h1",
      }),
    ],
  });
}
var sr = a(z()),
  _ = a(p());
function ar(t) {
  let e = `layer-breakpoint-icon-${(0, sr.useId)().replace(/:/gu, "")}`;
  return (0, _.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: [
      (0, _.jsx)("defs", {
        children: (0, _.jsx)("clipPath", {
          id: e,
          children: (0, _.jsx)("path", {
            d: "M.5 3.5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3Z",
          }),
        }),
      }),
      (0, _.jsx)("path", {
        d: "M.5 3.5a3 3 0 0 1 3-3h5a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "3",
        clipPath: `url(#${e})`,
      }),
      (0, _.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10 1.5H2.5l-1 1v2H11v-1Z",
      }),
    ],
  });
}
var Y = a(p());
function lr(t) {
  return (0, Y.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: [
      (0, Y.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M1.5 8.75v-5.5C1.5 1.869 3.515.75 6 .75s4.5 1.119 4.5 2.5v5.5m0 0c0 1.381-2.015 2.5-4.5 2.5s-4.5-1.119-4.5-2.5",
      }),
      (0, Y.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M10.25 3.25c0 1.105-1.903 2-4.25 2s-4.25-.895-4.25-2",
      }),
    ],
  });
}
var Ve = a(p());
function pr(t) {
  return (0, Ve.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: (0, Ve.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M4.25 2.25a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H8v2a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 1 9.75v-4a1.5 1.5 0 0 1 1.5-1.5h1.75Z",
    }),
  });
}
var Me = a(p());
function cr(t) {
  return (0, Me.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: (0, Me.jsx)("path", {
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "m1.25 5.5 2.189 2.189a1.5 1.5 0 0 0 2.122 0L10.5 2.75",
    }),
  });
}
var Ne = a(p());
function ur(t) {
  return (0, Ne.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: (0, Ne.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
    }),
  });
}
var X = a(p());
function dr() {
  return (0, X.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "presentation",
    width: "12",
    height: "12",
    children: [
      (0, X.jsx)("path", {
        d: "M 1.25 4.25 L 1.25 4.25 L 1.25 9 C 1.25 9.966 2.034 10.75 3 10.75 L 9 10.75 C 9.966 10.75 10.75 9.966 10.75 9 L 10.75 5.75 C 10.75 4.922 10.078 4.25 9.25 4.25 L 8 4.25 C 7.448 4.25 7 3.802 7 3.25 L 7 2.75 C 7 1.922 6.328 1.25 5.5 1.25 L 2.75 1.25 C 1.922 1.25 1.25 1.922 1.25 2.75 Z",
        fill: "currentColor",
        fillOpacity: "0.15",
        strokeWidth: "1.5",
        stroke: "currentColor",
      }),
      (0, X.jsx)("path", {
        d: "M 8.5 4.25 L 1.5 4.25",
        fill: "transparent",
        strokeWidth: "1.5",
        stroke: "currentColor",
      }),
    ],
  });
}
var J = a(p());
function mr(t) {
  return (0, J.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: [
      (0, J.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, J.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M4.25 4.25v3.5h3.5",
      }),
    ],
  });
}
var ee = a(p());
function fr(t) {
  return (0, ee.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: [
      (0, ee.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, ee.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M6 2v8M2 5h3.5M6.5 7H10",
      }),
    ],
  });
}
var te = a(p());
function hr(t) {
  return (0, te.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: [
      (0, te.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M9 .75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M3 6.75a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5",
      }),
      (0, te.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M4.5 7.5 6 6l1.5-1.5",
      }),
    ],
  });
}
var re = a(p());
function gr(t) {
  return (0, re.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: [
      (0, re.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        d: "M.75 3.75a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v4.5a3 3 0 0 1-3 3h-4.5a3 3 0 0 1-3-3Z",
      }),
      (0, re.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1 4V3a2 2 0 0 1 2-2h1M10.75 4V3a2 2 0 0 0-2-2h-1M10.75 7.75v1a2 2 0 0 1-2 2h-1M1 7.75v1a2 2 0 0 0 2 2h1",
      }),
    ],
  });
}
var Ge = a(p());
function yr(t) {
  return (0, Ge.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: (0, Ge.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M5.293 1.05a1 1 0 0 1 1.414 0l4.243 4.243a1 1 0 0 1 0 1.414L6.707 10.95a1 1 0 0 1-1.414 0L1.05 6.707a1 1 0 0 1 0-1.414Z",
    }),
  });
}
var oe = a(p());
function Cr(t) {
  return (0, oe.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: [
      (0, oe.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M6 1a5 5 0 1 1-.001 10.001A5 5 0 0 1 6 1Z",
      }),
      (0, oe.jsx)("path", {
        fill: "currentColor",
        d: "M6 4.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 6 4.5",
      }),
    ],
  });
}
var Oe = a(p());
function kr(t) {
  return (0, Oe.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: (0, Oe.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
    }),
  });
}
var De = a(p());
function Be(t) {
  return (0, De.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: (0, De.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeWidth: "1.5",
      d: "M6 1a5 5 0 1 1-.001 10.001A5 5 0 0 1 6 1Z",
    }),
  });
}
var ne = a(p());
function vr(t) {
  return (0, ne.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: [
      (0, ne.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, ne.jsx)("path", { fill: "transparent", stroke: "currentColor", d: "M1.5 6h9" }),
    ],
  });
}
var ie = a(p());
function xr(t) {
  return (0, ie.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: [
      (0, ie.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, ie.jsx)("path", { fill: "transparent", stroke: "currentColor", d: "M6 2v8" }),
    ],
  });
}
var se = a(p());
function Sr(t) {
  return (0, se.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    ...t,
    children: [
      (0, se.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeWidth: "1.5",
        d: "M1.5 8.75v-5.5C1.5 1.869 3.515.75 6 .75s4.5 1.119 4.5 2.5v5.5m0 0c0 1.381-2.015 2.5-4.5 2.5s-4.5-1.119-4.5-2.5",
      }),
      (0, se.jsx)("path", {
        fill: "none",
        stroke: "currentColor",
        d: "M10.25 3.25c0 1.105-1.903 2-4.25 2s-4.25-.895-4.25-2M10.25 6c0 1.105-1.903 2-4.25 2s-4.25-.895-4.25-2",
      }),
    ],
  });
}
var ae = a(p());
function br(t) {
  return (0, ae.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: [
      (0, ae.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, ae.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M2 6h8M5 2v3.5M7 6.5V10",
      }),
    ],
  });
}
var le = a(p());
function wr(t) {
  return (0, le.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: [
      (0, le.jsx)("path", {
        fill: "currentColor",
        fillOpacity: 0.15,
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "1.5",
        d: "M1.25 3.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2Z",
      }),
      (0, le.jsx)("path", {
        fill: "transparent",
        stroke: "currentColor",
        d: "M6 2v8M2 5h3.5M6.5 7H10",
      }),
    ],
  });
}
var Fe = a(p());
function Pr(t) {
  return (0, Fe.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: (0, Fe.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "m6 .775 1.94 2.83 3.291.971-2.093 2.719.095 3.43L6 9.575l-3.233 1.15.095-3.43L.769 4.576l3.291-.971Z",
    }),
  });
}
var K = a(p());
function Er(t) {
  return (0, K.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...t,
    children: [
      (0, K.jsx)("path", {
        d: "M 5.5 2.5 C 5.5 1.672 6.172 1 7 1 C 7.916 1 9.084 1 10 1 C 10.828 1 11.5 1.672 11.5 2.5 C 11.5 4.388 11.5 7.612 11.5 9.5 C 11.5 10.328 10.828 11 10 11 C 9.084 11 7.916 11 7 11 C 6.172 11 5.5 10.328 5.5 9.5 C 5.5 7.612 5.5 4.388 5.5 2.5 Z",
      }),
      (0, K.jsx)("path", { d: "M 3 3 L 3 9" }),
      (0, K.jsx)("path", { d: "M 0.5 4.5 L 0.5 7.5" }),
    ],
  });
}
var _e = a(p());
function Ir(t) {
  return (0, _e.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...t,
    children: (0, _e.jsx)("path", {
      fill: "currentColor",
      fillOpacity: 0.15,
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.5",
      d: "M5.148 1.884a1 1 0 0 1 1.704 0l4.21 6.842a1 1 0 0 1-.852 1.524H1.79a1 1 0 0 1-.852-1.524Z",
    }),
  });
}
var ii = {
  component: Bt,
  label: mr,
  checkbox: cr,
  radio: Cr,
  breakpoint: ar,
  grid: Ft,
  masonry: fr,
  frame: ur,
  "frame-round": Be,
  stack: vr,
  switch: Er,
  "stack-horizontal": xr,
  "stack-with-data": Sr,
  "stack-wrap-horizontal": br,
  "stack-wrap-vertical": wr,
  form: Te,
  "form-container": Te,
  "form-input": Zt,
  "form-select": Ut,
  text: $t,
  svg: Le,
  path: hr,
  placeholder: gr,
  boolean: pr,
  star: Pr,
  polygon: yr,
  oval: Be,
  overlay: Qt,
  rectangle: kr,
  image: Le,
  group: dr,
  "collection-item": lr,
  "view-box": ir,
  vector: Ir,
  shader: _t,
};
var b = a(z(), 1);
function Lr(t, e) {
  return e === null ? !1 : t > e;
}
function Yr(t, e) {
  let r = ye(t),
    o = ye(e);
  if (t <= e || r !== o) return r;
  let c = (s) =>
    new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
      maximumFractionDigits: s,
      roundingMode: "ceil",
    }).format(t);
  for (let s of [2, 1]) {
    let i = c(s);
    if (i !== o) return i;
  }
  return r;
}
function Tr(t, e, r = "Please select fewer days.") {
  let o = Yr(t, e),
    c = ye(e);
  return `This period has ${o} events, exceeding the ${c} limit. ${r}`;
}
function ve(t, e, r) {
  return { source: t, rangeDays: Gt(e.startDate, e.endDate), eventCount: r };
}
function Ar(t, e, r) {
  $("analytics_export_start", ve(t, e, r));
}
function Rr(t, e, r) {
  $("analytics_export_success", ve(t, e, r));
}
function Vr(t, e, r) {
  $("analytics_export_cancel", ve(t, e, r));
}
function Mr(t, e, r, o) {
  $("analytics_export_fail", { ...ve(t, e, r), reason: o });
}
var U = a(z(), 1);
function Nr(t, e) {
  if (t === e) return t;
  if (e > t) {
    let r = Math.max(1, Math.ceil((e - t) / 6));
    return Math.min(t + r, e);
  }
  return e;
}
function Gr({ transferredEvents: t, totalEvents: e, isComplete: r }) {
  return r ? 1 : e <= 0 ? 0 : Math.min(t / e, 0.99);
}
function Or({ phase: t, totalEvents: e, transferredEvents: r }) {
  let o = t === "complete" ? e : r,
    [c, s] = (0, U.useState)(0);
  ((0, U.useEffect)(() => {
    t === "inactive" && s(0);
  }, [t]),
    (0, U.useEffect)(() => {
      t === "complete" && s(e);
    }, [t, e]),
    (0, U.useEffect)(() => {
      if (t !== "exporting") return;
      let k = () => {
        s((n) => Nr(n, o));
      };
      k();
      let l = window.setInterval(k, 100);
      return () => window.clearInterval(l);
    }, [t, o]));
  let i =
    t === "inactive"
      ? 0
      : Gr({ transferredEvents: c, totalEvents: e, isComplete: t === "complete" });
  return { displayedEventCount: c, progress: i };
}
var Dr = ue("useAnalyticsExport");
function Br(t) {
  return t instanceof we && t.status === 403;
}
function Jr(t) {
  return Br(t)
    ? "Analytics export is not available on this plan."
    : t instanceof ge
      ? t.message
      : "Something went wrong while exporting. Please try again.";
}
function eo(t) {
  return t instanceof ge
    ? "incomplete"
    : t instanceof we && t.status === Tt.Forbidden
      ? "entitlement"
      : "unknown";
}
function Si(t, e, r, o, c) {
  let [s, i] = (0, b.useState)("idle"),
    [k, l] = (0, b.useState)(0),
    [n, R] = (0, b.useState)(),
    [w, x] = (0, b.useState)(0),
    [y, v] = (0, b.useState)(0),
    [A, M] = (0, b.useState)("inactive"),
    [Z, D] = (0, b.useState)(),
    [I, B] = (0, b.useState)(),
    { displayedEventCount: N, progress: h } = Or({
      phase: A,
      totalEvents: w,
      transferredEvents: y,
    }),
    d = (0, b.useRef)(),
    g = (0, b.useRef)(!1),
    u = (0, b.useRef)(!1);
  (0, b.useEffect)(() => () => d.current?.abort(), []);
  let V = e?.startDate,
    m = e?.endDate;
  (0, b.useEffect)(() => {
    if (!V || !m) {
      i("idle");
      return;
    }
    let P = new AbortController();
    return (
      i("loading"),
      R(void 0),
      Nt(t, { startDate: V, endDate: m }, P.signal)
        .then(({ eventCount: L }) => {
          if (P.signal.aborted) return;
          x(L);
          let j = r !== null && Lr(L, r);
          i(j ? "over_limit" : "ready");
        })
        .catch((L) => {
          P.signal.aborted || Pe(L) || (Dr.reportError(L), i("error"));
        }),
      () => P.abort()
    );
  }, [V, m, t, r, k]);
  let S = (0, b.useCallback)(() => l((P) => P + 1), []),
    F = (0, b.useCallback)(
      (P) => {
        !o || !u.current || ((u.current = !1), Vr(o, P, w));
      },
      [o, w]
    ),
    pe = (0, b.useCallback)(async () => {
      if (!V || !m || s !== "ready" || g.current) return;
      let P = { startDate: V, endDate: m };
      ((g.current = !0), D(void 0), B(void 0), v(0));
      let G = new AbortController();
      ((d.current = G), (u.current = !1), o && (Ar(o, P, w), (u.current = !0)));
      try {
        let L = Rt() ? await Vt(P, G.signal) : void 0,
          j = performance.now();
        return (
          M("exporting"),
          await Mt(t, P, { signal: G.signal, writable: L, onTransferredEvents: v }),
          G.signal.aborted
            ? (F(P), "aborted")
            : (B(performance.now() - j),
              M("complete"),
              o && u.current && ((u.current = !1), Rr(o, P, w)),
              "complete")
        );
      } catch (L) {
        return G.signal.aborted || (M("inactive"), Pe(L))
          ? (F(P), "aborted")
          : (!Br(L) && !(L instanceof ge) && Dr.reportError(L),
            o && u.current && ((u.current = !1), Mr(o, P, w, eo(L))),
            D(Jr(L)),
            "failed");
      } finally {
        d.current === G && (g.current = !1);
      }
    }, [t, V, m, s, o, w, F]),
    ce = (0, b.useCallback)(() => {
      (d.current?.abort(),
        (g.current = !1),
        M("inactive"),
        v(0),
        D(void 0),
        B(void 0),
        V && m && F({ startDate: V, endDate: m }));
    }, [V, m, F]),
    W;
  return (
    s === "over_limit" && r !== null
      ? (W = Tr(w, r, c))
      : s === "error" && (W = n ?? "Could not estimate export size for this range. Try again."),
    {
      volumeCheck: s,
      volumeMessage: W,
      retryVolumeCheck: S,
      totalEvents: w,
      phase: A,
      errorMessage: Z,
      exportDurationMs: I,
      setErrorMessage: D,
      displayedEventCount: N,
      progress: h,
      start: pe,
      cancel: ce,
    }
  );
}
var E = a(z());
var Fr = "p1j5whaq",
  Ii = "i190xtw4",
  Li = "sptrpar",
  Ti = "s1laaeki",
  Ai = "ir4tltr",
  Ri = "pvix4vs",
  Vi = "i1tmo59k",
  Mi = "e1ojgdqj",
  Ni = "i1wtmfop",
  Gi = "slyvz40",
  Oi = "h166ubuf",
  Di = "p1797vmk",
  _r = "d13gkfvk",
  Hr = "ltrjzs0";
var O = a(p()),
  ro = ["bottom", "top"];
function zi({ enabled: t, defaultOpen: e }) {
  let [r, o] = (0, E.useState)(null),
    [c, s] = (0, E.useState)(e),
    i = (0, E.useCallback)(() => {
      t && (s(!0), r?.setAttribute("aria-expanded", "true"));
    }, [t, r]),
    k = (0, E.useCallback)(() => {
      (s(!1), r?.removeAttribute("aria-expanded"));
    }, [r]);
  return { anchorElement: r, setAnchorElement: o, isPopoverOpen: c, open: i, close: k };
}
function Ki(t) {
  return (0, E.useMemo)(() => {
    let e = new Map();
    return (t.forEach((r) => Wr(r, e)), e);
  }, [t]);
}
function Wr(t, e) {
  if (t.type === "section") {
    t.items.forEach((r) => Wr(r, e));
    return;
  }
  e.set(t.value, t);
}
function Ui() {
  let [t, e] = (0, E.useState)(-1),
    [r, o] = (0, E.useState)("nearest-edge"),
    c = (0, E.useCallback)((s, i) => {
      (e(s), o(i));
    }, []);
  return { scrollToIndex: t, scrollToAlignment: r, scrollItemIntoView: c };
}
function Zi({ inputRef: t, focusHandler: e, initialInputValue: r, changeHandler: o }) {
  (0, E.useLayoutEffect)(() => {
    let i = t.current;
    i && (i.focus(), e());
  }, [e, t]);
  let c = E.default.useRef(!1);
  return (
    (0, E.useLayoutEffect)(() => {
      c.current || ((c.current = !0), r && o(r, !1, () => {}));
    }),
    {
      handleInputChange: (0, E.useCallback)(
        (i, k, l, n) => {
          k || o(i, k, l, n);
        },
        [o]
      ),
    }
  );
}
function $i({
  anchorElement: t,
  isOpen: e,
  menuClassName: r,
  menuWidth: o,
  menuMinWidth: c,
  alignSelf: s = "start",
  attachTo: i = ro,
  onClose: k,
  children: l,
}) {
  let [n, R] = (0, E.useState)(0);
  (0, E.useLayoutEffect)(() => {
    if (!t) return;
    let x = () => {
      let v = t.getBoundingClientRect().height;
      R(v);
    };
    x();
    let y = new ResizeObserver(x);
    return (y.observe(t), () => y.disconnect());
  }, [t]);
  let w = (0, E.useMemo)(
    () =>
      t
        ? { x: H.values.popoverAnchorInset, y: -(n - H.values.popoverAnchorInset) }
        : { x: 0, y: 0 },
    [t, n]
  );
  return !e || !t
    ? null
    : (0, O.jsx)(Dt, {
        className: fe(Fr, r),
        style: { width: o, minWidth: c },
        showArrow: !1,
        focusTrapEnabled: !1,
        anchor: t,
        alignSelf: s,
        attachTo: i,
        offset: w,
        animateAppear: !1,
        backdropEnabled: !0,
        onClose: k,
        children: l,
      });
}
function Qi({
  listBoxId: t,
  showList: e,
  large: r,
  displayItems: o,
  checkedItems: c,
  highlightedIndex: s,
  scrollToIndex: i,
  scrollToAlignment: k,
  onSelect: l,
  onHighlight: n,
  stickySectionHeaders: R,
  noSearchResultsEnabled: w,
  isOpen: x,
  flatList: y,
}) {
  let v = w && x && y.length === 0,
    A = e && !v;
  return (0, O.jsxs)(O.Fragment, {
    children: [
      A && (0, O.jsx)("div", { className: _r }),
      A &&
        (0, O.jsx)("div", {
          id: t,
          role: "listbox",
          className: Hr,
          children: (0, O.jsx)(jt, {
            large: r,
            items: o,
            checkedItems: c,
            highlightedIndex: s,
            scrollToIndex: i,
            scrollToAlignment: k,
            onSelect: l,
            onHighlight: n,
            shrinkCompletionLabel: !0,
            stickySectionHeaders: R,
          }),
        }),
      v && (0, O.jsx)(zt, { className: Wt, icon: null, title: void 0, body: "No search results" }),
    ],
  });
}
function qi(t) {
  t.target instanceof HTMLInputElement || t.preventDefault();
}
export {
  Bo as a,
  Re as b,
  rr as c,
  Jt as d,
  $o as e,
  Yo as f,
  cr as g,
  uo as h,
  tn as i,
  ar as j,
  lr as k,
  ir as l,
  ii as m,
  Co as n,
  Si as o,
  Ii as p,
  Li as q,
  Ti as r,
  Ai as s,
  Ri as t,
  Vi as u,
  Mi as v,
  Ni as w,
  Gi as x,
  Oi as y,
  Di as z,
  ro as A,
  zi as B,
  Ki as C,
  Ui as D,
  Zi as E,
  $i as F,
  Qi as G,
  qi as H,
};
//# sourceMappingURL=chunk-OXXQEFPJ.mjs.map
