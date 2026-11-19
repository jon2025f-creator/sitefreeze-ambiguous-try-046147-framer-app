import { a as St } from "chunk-Y25EYODC.mjs";
import {
  Ch as Pe,
  Dh as ut,
  Eh as ft,
  od as lt,
  pd as ht,
  sd as we,
  td as y,
  vd as K,
  vl as oe,
  wl as gt,
  yl as se,
} from "chunk-5XOLRYO5.mjs";
import { s as Te, v as Ne } from "chunk-5UNTLSPE.mjs";
import { c as pt } from "chunk-N27G2WQY.mjs";
import { Id as ve, Ua as nt, Wc as Se, md as T, n as ye, oe as N } from "chunk-QRTINJ5S.mjs";
import { c as dt } from "chunk-E5B536XW.mjs";
import { u as be } from "chunk-55YMXLAA.mjs";
import { Eg as ee, Pl as st, wn as te, yl as ot } from "chunk-MA6ZGCX5.mjs";
import {
  Bf as me,
  Di as tt,
  Jb as We,
  Qb as Ke,
  Rb as Ye,
  Tb as Je,
  Zb as qe,
  ab as Ve,
  bb as He,
  jc as Ge,
  mb as X,
  nb as $e,
  ob as je,
  oc as Xe,
  sb as z,
  tf as Ze,
  uf as Z,
  vf as et,
  wj as ge,
  xk as rt,
  yb as pe,
  yf as W,
  zb as Q,
} from "chunk-FKPWJLHJ.mjs";
import { B as Qe, z as fe } from "chunk-Q5OEXSCG.mjs";
import { f as yt } from "chunk-OF7356GI.mjs";
import { a as Ce, s as mt } from "chunk-GD32T574.mjs";
import { g as it } from "chunk-6B5LV63O.mjs";
import { a as p, c as re, g as at } from "chunk-3PRKS5EZ.mjs";
import { a as ct } from "chunk-7PTYK46L.mjs";
import { k as Ue } from "chunk-ND5T7YN3.mjs";
import { b as R, f as E, g as O, j as k } from "chunk-ARJ7WQTJ.mjs";
import { o as ze } from "chunk-YNQ74JTU.mjs";
import { c as Me, j as b } from "chunk-PFWVXZ76.mjs";
import { b as u } from "chunk-4JY5UMT2.mjs";
var Kt = "local-overlay/",
  vt = "localOnly",
  bt = class {
    constructor(t) {
      this.mainStore = t;
      (u(t.branchId === p, "branch store registry must be seeded with the main store"),
        (this._activeBranchId = p),
        this.stores.set(p, t));
    }
    mainStore;
    _activeBranchId;
    stores = new Map();
    localOnlyLayers = new Map();
    localOnlyLayerOrder = [];
    localOnlyMetadataRowsByBranchId = new Map();
    reset() {
      for (let t of this.stores.values()) t.base?.detachBranch(t);
      ((this._activeBranchId = p),
        (this.stores = new Map([[p, this.mainStore]])),
        this.localOnlyLayers.clear(),
        (this.localOnlyLayerOrder = []),
        this.localOnlyMetadataRowsByBranchId.clear());
    }
    get activeBranchId() {
      return this._activeBranchId;
    }
    get activeStore() {
      return this.getStore(this.activeBranchId);
    }
    get effectiveViewBranchId() {
      return this.localOnlyLayerOrder.reduce(
        (t, e) => this.localOnlyLayers.get(e)?.branchId ?? t,
        this.activeBranchId
      );
    }
    get hasActiveLocalOnlyBranches() {
      return this.localOnlyLayerOrder.length > 0;
    }
    getStore(t) {
      return (
        this.stores.has(t) || this.resolveMaterializedBranchHierarchy(t),
        this.getOrCreateStore(t)
      );
    }
    peekStore(t) {
      return this.stores.get(t);
    }
    forgetStore(t) {
      u(t !== p, "Cannot forget the main branch store");
      let e = this.stores.get(t);
      (e?.base?.detachBranch(e),
        this.stores.delete(t),
        this._activeBranchId === t && (this._activeBranchId = p));
    }
    evictInactiveStores(t, e) {
      let r = [],
        o = e === void 0 ? void 0 : new Set(e);
      for (let [s, i] of [...this.stores].reverse())
        s === p ||
          s === this._activeBranchId ||
          (o !== void 0 && !o.has(s)) ||
          t(s) ||
          i.permanentError !== null ||
          i.branches.length > 0 ||
          (this.forgetStore(s), r.push(s));
      return r;
    }
    getBranchPath(t = this.activeBranchId) {
      return this.resolveBranchPath(t);
    }
    branchExists(t) {
      try {
        return (this.resolveBranchPath(t), !0);
      } catch {
        return !1;
      }
    }
    isBranchPruned(t) {
      return this.mainStore.getCurrentValue(t, re) === dt;
    }
    get materializedBranchIds() {
      return [...this.stores.keys()];
    }
    findFirstNonDeletedBranch(t) {
      if (!this.branchExists(t)) return p;
      let e = t;
      for (; e !== p;) {
        let r = this.getBaseId(e);
        if (typeof this.mainStore.getObjectKey(e, at) != "number") return e;
        e = r;
      }
      return p;
    }
    resolveBranchHierarchy(t) {
      this.getStore(t).resolveOverlayHierarchy();
    }
    resolveMaterializedBranchHierarchy(t) {
      this.getDeepestMaterializedStore(t)?.resolveOverlayHierarchy();
    }
    switchActiveBranch(t) {
      let e = this.getStore(t);
      return ((this._activeBranchId = t), this.resolveBranchHierarchy(t), e);
    }
    rebaseStore(t) {
      u(t !== p, "Cannot rebase the main branch store");
      let e = [];
      for (let [r, o] of this.stores) (r === t || Jt(o, t)) && e.push([r, o]);
      for (let [r, o] of e) (o.base?.detachBranch(o), this.stores.delete(r));
      this.getDeepestMaterializedStore(this.getBaseId(t))?.resolveOverlayHierarchy();
      for (let [r] of e) this.getOrCreateStore(r);
    }
    rebaseStoresToMatchMetadata() {
      let t = [];
      for (let [e, r] of this.stores)
        e !== p && r.base?.branchId !== this.getBaseId(e) && t.push(e);
      for (let e of t)
        this.stores.get(e)?.base?.branchId !== this.getBaseId(e) && this.rebaseStore(e);
    }
    getLocalOnlyLayer(t) {
      return this.localOnlyLayers.get(t);
    }
    getOrCreateLocalOnlyLayer(t) {
      let e = this.localOnlyLayers.get(t);
      if (e) return e;
      let r = Yt(t),
        o = this.activeBranchId;
      this.createLocalOnlyBranchMetadata(r, this.effectiveViewBranchId);
      let s = { key: t, branchId: r, upstreamBranchId: o };
      return (
        this.localOnlyLayers.set(t, s),
        this.localOnlyLayerOrder.push(t),
        this.getStore(r),
        s
      );
    }
    removeLocalOnlyLayer(t) {
      let e = this.localOnlyLayers.get(t);
      if (e)
        return (
          this.localOnlyLayers.delete(t),
          (this.localOnlyLayerOrder = this.localOnlyLayerOrder.filter((r) => r !== t)),
          this.localOnlyMetadataRowsByBranchId.delete(e.branchId),
          this.forgetStore(e.branchId),
          this.rebaseLocalOnlyLayers(),
          e
        );
    }
    dropActiveLocalOnlyLayers() {
      for (let t of this.localOnlyLayers.values())
        (this.localOnlyMetadataRowsByBranchId.delete(t.branchId), this.forgetStore(t.branchId));
      (this.localOnlyLayers.clear(), (this.localOnlyLayerOrder = []));
    }
    clearLocalOnlyLayers() {
      this.dropActiveLocalOnlyLayers();
    }
    getLocalOnlyRows() {
      let t = [];
      for (let e of this.localOnlyLayerOrder) {
        let r = this.localOnlyLayers.get(e);
        if (!r) continue;
        this.localOnlyMetadataRowsByBranchId.get(r.branchId)?.forEach((i) => t.push(i));
        let s = this.getStore(r.branchId);
        for (let i of s.getSerializableRows()) t.push({ ...i, branchId: r.branchId });
      }
      return t;
    }
    isLocalOnlyBranch(t) {
      return this.mainStore.getObjectKey(t, vt) === !0;
    }
    isLocalOnlyRow(t, e) {
      return this.isLocalOnlyBranch(t.branchId)
        ? !0
        : t.branchId === p && this.isLocalOnlyBranch(e.id);
    }
    getDeepestMaterializedStore(t) {
      let e;
      for (let r of this.getBranchPath(t)) {
        let o = this.stores.get(r);
        o && (e = o);
      }
      return e;
    }
    resolveBranchPath(t) {
      return t === p ? [p] : [...this.resolveBranchPath(this.getBaseId(t)), t];
    }
    getOrCreateStore(t) {
      let e = this.stores.get(t);
      if (e) return e;
      u(t !== p, "main store is missing from branch store registry");
      let o = this.getOrCreateStore(this.getBaseId(t)).branch(t);
      return (this.stores.set(t, o), o);
    }
    getBaseId(t) {
      return pt(this.mainStore, t);
    }
    createLocalOnlyBranchMetadata(t, e) {
      let r = this.mainStore.getObjectKey(t, re);
      u(
        r === void 0 || this.isLocalOnlyBranch(t),
        "Local-only branch id collides with a persisted branch: " + t
      );
      let o = this.mainStore.length;
      this.mainStore.batch(() => {
        this.mainStore.importObject(t, { id: t, [re]: e, [vt]: !0 });
      });
      let s = this.mainStore.getSerializableRows(o).filter((i) => i.id === t);
      if (s.length > 0) {
        this.localOnlyMetadataRowsByBranchId.set(t, s);
        return;
      }
      this.localOnlyMetadataRowsByBranchId.has(t) ||
        this.localOnlyMetadataRowsByBranchId.set(t, this.getBranchMetadataRows(t));
    }
    getBranchMetadataRows(t) {
      let e = [];
      for (let r of this.mainStore.getSerializableRows()) r.id === t && e.push(r);
      return e;
    }
    rebaseLocalOnlyLayers() {
      this.localOnlyLayerOrder.reduce((t, e) => {
        let r = this.localOnlyLayers.get(e);
        return r
          ? (this.createLocalOnlyBranchMetadata(r.branchId, t),
            this.forgetStore(r.branchId),
            this.getStore(r.branchId),
            r.branchId)
          : t;
      }, this.activeBranchId);
    }
  };
function Yt(n) {
  return `${Kt}${encodeURIComponent(n)}`;
}
function Jt(n, t) {
  for (let e = n.base; e; e = e.base) if (e.branchId === t) return !0;
  return !1;
}
function wt(n) {
  return Map.groupBy(n, (t) => t.branchId ?? p);
}
var w = ',"children":[';
var U = [
  "contentManagement",
  "analyticsScope",
  "externalModules",
  "localModules",
  "presets",
  "colorStyles",
  "sharedEnums",
  "routeSegmentRoot",
  "abTestsEntityRoot",
  "assetsEntityRoot",
  "blockquoteStyleEntityRoot",
  "cmsStyleEntityRoot",
  "codeFileEntityRoot",
  "codeStyleEntityRoot",
  "colorStyleTokenEntityRoot",
  "componentInstanceEntityRoot",
  "contentManagementEntityRoot",
  "designPageEntityRoot",
  "funnelsEntityRoot",
  "layoutTemplateEntityRoot",
  "linkStyleEntityRoot",
  "textStyleEntityRoot",
  "vectorSetEntityRoot",
  "customCodeScope",
  "branches",
  "agentSkills",
  "databases",
  "errors",
];
var qt = "last-active-branch:";
function Tt(n) {
  return `${qt}${n}`;
}
function Ct(n, t) {
  try {
    return n.getItem(t);
  } catch {
    return null;
  }
}
function Pt(n, t, e) {
  try {
    e === null ? n.removeItem(t) : n.setItem(t, e);
  } catch {}
}
function mr(n) {
  let t = Tt(n),
    e = Ct(sessionStorage, t) ?? Ct(localStorage, t);
  return e && e !== p ? e : null;
}
function Nt(n, t) {
  let e = Tt(n);
  (Pt(sessionStorage, e, t), Pt(localStorage, e, t === p ? null : t));
}
function Le(n, t, e) {
  return n.slice(t, e + w.length) + "]}";
}
function Ie(n, t) {
  let e = `"id":"${t}"`;
  return n.indexOf(e) >= 0;
}
function ne(n, t = 1) {
  return n.startsWith(`{"v":${t},`) && n.indexOf(w) >= 0 && n.endsWith("]}}");
}
function Gt(n, t) {
  if (n !== "children") return t;
}
function Xt(n, t) {
  let e = JSON.stringify(n, Gt),
    r = `${w}${t.join(",")}]`;
  return `${e.slice(0, -1)}${r}}`;
}
function Sr(n) {
  if (!n.children) return JSON.stringify(n);
  let t = n.children.map((e) => JSON.stringify(e));
  return Xt(n, t);
}
function L(n, t) {
  return n == null || typeof n != "object" ? !1 : Object.hasOwnProperty.call(n, t);
}
function I(n, t, e, r, o = new Set()) {
  (o.add(t.id), e.delete(t.id));
  let s = L(t, "replicaInfo") && typeof t.replicaInfo == "object" && t.replicaInfo;
  if (
    (s && L(s, "master") && typeof s.master == "string" && (o.has(s.master) || e.add(s.master)),
    r && t.codeComponentIdentifier === "framer/Prototype")
  ) {
    let i =
      L(t, "$control__children") && typeof t.$control__children == "object" && t.$control__children;
    if (i && (L(i, "type") && i.type) === "componentinstance") {
      let a = L(i, "value") && i.value;
      if (typeof a == "string" && !o.has(a)) e.add(a);
      else if (Array.isArray(a)) {
        let d = a[0];
        (L(d, "type") && d.type) === "componentinstance" &&
          typeof d.value == "string" &&
          (o.has(d.value) || e.add(d.value));
      }
    }
  }
  if (t.children) for (let i of t.children) I(n, i, e, r, o);
}
var Lt = 300 * 1024 * 1024,
  x = {
    ASCII: 128,
    TWO_BYTE: 224,
    TWO_BYTE_VALUE: 192,
    THREE_BYTE: 240,
    THREE_BYTE_VALUE: 224,
    FOUR_BYTE: 248,
    FOUR_BYTE_VALUE: 240,
    CONTINUATION: 192,
    CONTINUATION_VALUE: 128,
  },
  Qt = 2155905152,
  H = 4,
  D = {
    QUOTE: 34,
    BACKSLASH: 92,
    OPEN_BRACE: 123,
    CLOSE_BRACE: 125,
    OPEN_BRACKET: 91,
    CLOSE_BRACKET: 93,
    COMMA: 44,
    SPACE: 32,
    TAB: 9,
    NEWLINE: 10,
    CARRIAGE_RETURN: 13,
  },
  $ = new Uint8Array(256);
$[D.SPACE] = 1;
$[D.TAB] = 1;
$[D.NEWLINE] = 1;
$[D.CARRIAGE_RETURN] = 1;
var De = class {
    bytes;
    u32View;
    constructor(t) {
      this.bytes = t;
      let e = Math.floor(t.length / H);
      this.u32View = new Uint32Array(t.buffer, t.byteOffset, e);
    }
    scanUtf16UnitsToByteOffset(t, e) {
      if (e === 0) return t;
      let r = this.tryFastAsciiScan(t, e);
      if (r !== null) return r;
      let o = 0,
        s = t;
      for (; o < e && s < this.bytes.length;) {
        let i = this.bytes[s];
        i < x.ASCII
          ? (o++, s++)
          : (i & x.TWO_BYTE) === x.TWO_BYTE_VALUE
            ? (o++, (s += 2))
            : (i & x.THREE_BYTE) === x.THREE_BYTE_VALUE
              ? (o++, (s += 3))
              : (i & x.FOUR_BYTE) === x.FOUR_BYTE_VALUE
                ? ((o += 2), (s += 4))
                : s++;
      }
      return s;
    }
    tryFastAsciiScan(t, e) {
      if (t % H !== 0) return null;
      let r = t / H,
        o = e,
        s = r;
      for (; o >= H && s < this.u32View.length;)
        if ((this.u32View[s] & Qt) === 0) ((o -= H), s++);
        else return null;
      return o === 0 ? s * H : null;
    }
  },
  Ae = class {
    bytes;
    decoder = new TextDecoder();
    encoder = new TextEncoder();
    childrenKeyBytes = this.encoder.encode(w);
    childrenKeyTable = null;
    constructor(t) {
      this.bytes = t;
    }
    parseJsonSlice(t, e) {
      let r = this.bytes.subarray(t, e),
        o = this.decoder.decode(r);
      return JSON.parse(o);
    }
    parseShallowPage(t, e) {
      return this.parsePageInternal(t, e, !1);
    }
    parseFullPage(t, e) {
      return this.parsePageInternal(t, e, !0);
    }
    parsePageInternal(t, e, r) {
      let o = this.indexOfPattern(this.childrenKeyBytes, t, e);
      if (o === -1) return this.parseJsonSlice(t, e);
      let s = o + this.childrenKeyBytes.length,
        i = this.parseShallowObject(t, s);
      if (r) {
        let c = o + this.childrenKeyBytes.length - 1,
          a = e - 1;
        i.children = this.parseChildrenArray(c, a);
      } else i.children = [];
      return i;
    }
    parseShallowObject(t, e) {
      let r = this.bytes.subarray(t, e),
        o = this.decoder.decode(r) + "]}";
      return JSON.parse(o);
    }
    parseChildrenArray(t, e) {
      return e - t < Lt ? this.parseJsonSlice(t, e) : this.parseChildrenByteLevel(t, e);
    }
    parseChildrenByteLevel(t, e) {
      let r = [],
        o = t + 1;
      for (; o < e && $[this.bytes[o]] === 1;) o++;
      for (; o < e - 1 && this.bytes[o] !== D.CLOSE_BRACKET;) {
        let s = o,
          i = 0,
          c = !1,
          a = !1;
        for (; o < e;) {
          let d = this.bytes[o];
          if (a) a = !1;
          else if (d === D.BACKSLASH) a = !0;
          else if (d === D.QUOTE && !a) c = !c;
          else if (!c) {
            if (d === D.OPEN_BRACE) i++;
            else if (d === D.CLOSE_BRACE && (i--, i === 0)) {
              o++;
              break;
            }
          }
          o++;
        }
        if (o > s)
          if (o - s >= Lt) r.push(this.parsePageInternal(s, o, !0));
          else {
            let l = this.bytes.subarray(s, o),
              f = this.decoder.decode(l),
              h = JSON.parse(f);
            r.push(h);
          }
        o = this.skipCommaAndWhitespace(o, e);
      }
      return r;
    }
    skipCommaAndWhitespace(t, e) {
      for (; t < e;) {
        let r = this.bytes[t];
        if (r === D.COMMA || this.isWhitespace(r)) t++;
        else break;
      }
      return t;
    }
    isWhitespace(t) {
      return $[t] === 1;
    }
    indexOfPattern(t, e, r) {
      if (t.length === 0) return e;
      if (t.length === 1) {
        for (let a = e; a < r; a++) if (this.bytes[a] === t[0]) return a;
        return -1;
      }
      let o;
      t === this.childrenKeyBytes
        ? (this.childrenKeyTable || (this.childrenKeyTable = this.createBadCharTable(t)),
          (o = this.childrenKeyTable))
        : (o = this.createBadCharTable(t));
      let s = r - e,
        i = t.length,
        c = 0;
      for (; c <= s - i;) {
        let a = i - 1;
        for (; a >= 0 && t[a] === this.bytes[e + c + a];) a--;
        if (a < 0) return e + c;
        {
          let d = this.bytes[e + c + a],
            l = o[d] ?? -1;
          c += Math.max(1, a - l);
        }
      }
      return -1;
    }
    createBadCharTable(t) {
      let e = new Int32Array(256);
      e.fill(-1);
      for (let r = 0; r < t.length - 1; r++) {
        let o = t[r];
        o !== void 0 && (e[o] = r);
      }
      return e;
    }
  },
  ie = class {
    bytes;
    scanner;
    jsonParser;
    decoder = new TextDecoder();
    encoder = new TextEncoder();
    root;
    version;
    pageLengthsUtf16;
    pageBoundaries = [];
    shallowPages = new Map();
    parsedPages = new Map();
    pageBoundaryMap = new Map();
    dependencies;
    chunkingHints = new Set();
    constructor(t, e = {}) {
      ((this.bytes = t),
        (this.dependencies = e.dependencies ?? []),
        (this.scanner = new De(t)),
        (this.jsonParser = new Ae(t)));
      let {
        root: r,
        version: o,
        header: s,
        childrenStartByteOffset: i,
      } = this.parseHeaderAndRoot();
      if (
        ((this.root = r),
        (this.version = o),
        (this.pageLengthsUtf16 = s),
        e.mustBeVersion && this.version !== e.mustBeVersion)
      )
        throw new Error(`Version mismatch: expected ${e.mustBeVersion}, got ${this.version}.
                Document version does not match required version.`);
      (this.calculatePageBoundaries(i), e.headerOnly || this.initializeShallowPages());
    }
    parseHeaderAndRoot() {
      let t = this.encoder.encode(w),
        e = this.jsonParser.indexOfPattern(t, 0, this.bytes.length);
      if (e === -1)
        throw new Error(
          `Document format error: '${w}' key not found in ${this.bytes.length} byte document`
        );
      let r = e + t.length,
        o = this.bytes.slice(0, r),
        s = this.decoder.decode(o) + "]}}",
        i = JSON.parse(s);
      if (i.v !== 1)
        throw new Error(`Invalid document version: expected ${1}, got ${i.v}
                Document may be from a different version or corrupted.`);
      if (!i.header || !Array.isArray(i.header))
        throw new Error(`Invalid document header: expected array, got ${typeof i.header}.
                Header contains page length information required for parsing.`);
      if (!i.root || typeof i.root != "object" || !i.root.__class)
        throw new Error(`Invalid document root: missing root object or __class property.
                Root: ${JSON.stringify(i.root).slice(0, 100)}...`);
      return (
        (i.root.children = []),
        {
          root: i.root,
          version: i.version,
          header: i.header,
          childrenStartByteOffset: e + t.length,
        }
      );
    }
    calculatePageBoundaries(t) {
      let e = t;
      for (let r = 0; r < this.pageLengthsUtf16.length; r++) {
        let o = this.pageLengthsUtf16[r],
          s = this.scanner.tryFastAsciiScan(e, o);
        s === null && (s = this.scanner.scanUtf16UnitsToByteOffset(e, o));
        let i = { pageIndex: r, startByteOffset: e, endByteOffset: s, utf16UnitLength: o };
        (this.pageBoundaries.push(i), (e = s + 1));
      }
    }
    initializeShallowPages() {
      for (let t of this.pageBoundaries) {
        let e = this.jsonParser.parseShallowPage(t.startByteOffset, t.endByteOffset);
        (this.shallowPages.set(e.id, e),
          this.pageBoundaryMap.set(e.id, t),
          this.root.children.push(e),
          t.utf16UnitLength > 2e8 && this.chunkingHints.add(e.id));
      }
    }
    parseFullPage(t) {
      if (this.parsedPages.has(t)) return this.parsedPages.get(t) ?? null;
      let e = this.pageBoundaryMap.get(t);
      if (!e) return null;
      let r = this.jsonParser.parseFullPage(e.startByteOffset, e.endByteOffset);
      this.parsedPages.set(t, r);
      let o = this.root.children.findIndex((s) => s.id === t);
      return (o !== -1 && (this.root.children[o] = r), r);
    }
    getPagesToLoad() {
      let t = new Set();
      for (let e of this.shallowPages.keys()) this.parsedPages.has(e) || t.add(e);
      return t;
    }
    getHomePageNodeID() {
      if (L(this.root, "homePageNodeId") && typeof this.root.homePageNodeId == "string")
        return this.root.homePageNodeId;
    }
    getShallowPages() {
      return Array.from(this.shallowPages.values());
    }
    getShallowPage(t) {
      return this.shallowPages.get(t);
    }
    getParsedPageById(t) {
      let e = this.parsedPages.get(t);
      return e || this.parsePageWithId(t);
    }
    parsePageWithId(t) {
      return this.parsedPages.has(t) ? null : (this.parseFullPage(t) ?? null);
    }
    parseNextPage() {
      for (let [t, e] of this.shallowPages)
        if (!this.parsedPages.has(t)) return this.parseFullPage(t) || void 0;
    }
    getPagesContainingId(t) {
      if (this.shallowPages.has(t)) return [t];
      let e = [],
        r = this.encoder.encode(`"id":"${t}"`);
      for (let [o, s] of this.pageBoundaryMap)
        this.jsonParser.indexOfPattern(r, s.startByteOffset, s.endByteOffset) !== -1 && e.push(o);
      return e;
    }
    parsePagesContainingId(t) {
      let e = this.getPagesContainingId(t),
        r = [];
      for (let o of e) {
        let s = this.parseFullPage(o);
        s && r.push(s);
      }
      return r;
    }
    getPartialDocumentForPageIds(t) {
      for (let r of U) this.parseFullPage(r);
      let e = new Set();
      for (let r of this.dependencies) {
        let o = this.parseFullPage(r);
        o && I(o, o, e, !0);
      }
      for (let r of t) {
        let o = this.parseFullPage(r);
        o && I(o, o, e, !0);
      }
      return (this.parseDependentPages(e), this.root);
    }
    parseDependentPages(t) {
      let e = new Set();
      for (let r of t) {
        if (this.parsedPages.has(r)) continue;
        let o = this.parseFullPage(r);
        if (o) {
          I(o, o, e, !1);
          continue;
        }
        for (let s of this.parsePagesContainingId(r)) I(s, s, e, !1);
      }
      e.size > 0 && this.parseDependentPages(e);
    }
    getChunkingHints() {
      return this.chunkingHints;
    }
  };
var ae = class {
  shallowPageToChildrenStrings = new Map();
  idToShallowPage = new Map();
  dependencies;
  chunkingHints = new Set();
  idToParsedPage = new Map();
  root;
  version;
  getPagesToLoad() {
    let t = new Set();
    for (let e of this.idToShallowPage.keys()) this.idToParsedPage.has(e) || t.add(e);
    return t;
  }
  constructor(t, { dependencies: e, mustBeVersion: r } = {}) {
    u(ne(t, 1), "The passed document string is not parsable");
    let o = t.indexOf(w),
      s = Le(t, 0, o),
      i = JSON.parse(s + "}"),
      c = i.header;
    ((this.root = i.root),
      (this.version = i.version ?? 0),
      (this.dependencies = e ?? []),
      r && u(this.version === r, "The passed document has an invalid version"),
      u(c && Array.isArray(c), "The header from the Byte Addressable document is missing"),
      u(this.root.__class, "The document is missing a shallow root and a __class property"),
      this.populateShallowPagesData(t, c, o + w.length),
      this.identifyLargePages(c));
  }
  identifyLargePages(t) {
    let e = 0;
    for (let r of t) {
      if (r > 2e8) {
        let o = this.root.children[e];
        o && this.chunkingHints.add(o.id);
      }
      e++;
    }
  }
  parsePage(t) {
    if (this.idToParsedPage.has(t)) return;
    let e = this.idToShallowPage.get(t);
    e && this.parseShallowPage(e);
  }
  parseAndAnalyzePage(t, e, r, o) {
    if (this.idToParsedPage.has(t)) return;
    let s = this.idToShallowPage.get(t);
    if (!s) {
      if (o) return;
      u(s, "page id does not match tracked shallow pages");
    }
    let i = this.parseShallowPage(s);
    I(i, i, e, r);
  }
  deconstructPageAndChildren(t, e, r) {
    let o = t.indexOf(w, e);
    if (o < 0 || o > e + r) return [JSON.parse(t.slice(e, e + r)), ""];
    let s = JSON.parse(Le(t, e, o)),
      i = t.slice(o + w.length - 1, e + r - 1);
    return [s, i];
  }
  populateShallowPagesData(t, e, r) {
    let o = r;
    for (let s of e) {
      let [i, c] = this.deconstructPageAndChildren(t, o, s);
      (this.root.children.push(i),
        this.idToShallowPage.set(i.id, i),
        this.shallowPageToChildrenStrings.set(i, c),
        (o += s + 1));
    }
  }
  parsePageWithChildren(t, e) {
    return (e.length > 0 && (t.children = JSON.parse(e)), this.idToParsedPage.set(t.id, t), t);
  }
  parseShallowPage(t) {
    let e = this.idToParsedPage.get(t.id);
    if (e) return e;
    let r = this.shallowPageToChildrenStrings.get(t);
    if (r === void 0) throw Error("Shallow page is not available in the map");
    return this.parsePageWithChildren(t, r);
  }
  parseDependentPages(t) {
    let e = new Set();
    for (let r of t) {
      if (this.idToParsedPage.has(r)) continue;
      let o = this.idToShallowPage.get(r);
      if (o) {
        let s = this.parseShallowPage(o);
        I(s, s, e, !1);
        continue;
      }
      for (let s of this.parsePagesContainingId(r)) I(s, s, e, !1);
    }
    e.size > 0 && this.parseDependentPages(e);
  }
  getHomePageNodeID() {
    if (L(this.root, "homePageNodeId") && typeof this.root.homePageNodeId == "string")
      return this.root.homePageNodeId;
  }
  getShallowPages() {
    return [...this.shallowPageToChildrenStrings.keys()];
  }
  getShallowPage(t) {
    return this.idToShallowPage.get(t);
  }
  getPartialDocumentForPageIds(t) {
    for (let r of U) this.parsePage(r);
    let e = new Set();
    for (let r of this.dependencies) this.parseAndAnalyzePage(r, e, !0, !0);
    for (let r of t) this.parseAndAnalyzePage(r, e, !0, !1);
    return (this.parseDependentPages(e), this.root);
  }
  getParsedPageById(t) {
    let e = this.idToParsedPage.get(t);
    return e || this.parsePageWithId(t);
  }
  parsePageWithId(t) {
    if (this.idToParsedPage.has(t)) return null;
    let e = this.idToShallowPage.get(t);
    if (!e) return null;
    let r = this.shallowPageToChildrenStrings.get(e);
    return typeof r != "string" ? null : this.parsePageWithChildren(e, r);
  }
  parseNextPage() {
    for (let [t, e] of this.shallowPageToChildrenStrings)
      if (!this.idToParsedPage.has(t.id)) return this.parsePageWithChildren(t, e);
  }
  parsePagesContainingId(t) {
    let e = [];
    for (let [r, o] of this.shallowPageToChildrenStrings)
      this.idToParsedPage.has(r.id) || (Ie(o, t) && e.push(this.parsePageWithChildren(r, o)));
    return e;
  }
  getPagesContainingId(t) {
    if (this.idToShallowPage.has(t)) return [t];
    let e = [];
    for (let [r, o] of this.shallowPageToChildrenStrings) Ie(o, t) && e.push(r.id);
    return e;
  }
  getChunkingHints() {
    return this.chunkingHints;
  }
};
var Re = class extends Error {
    constructor(t, e) {
      super(`Document version is too low. Expected ${e}, got ${t}.`);
    }
  },
  Be = class extends Error {
    constructor(t, e) {
      super(`Document version is too high. Expected ${e}, got ${t}.`);
    }
  };
function It(n) {
  if (!ut(n) || n === null) throw Error("Invalid document.");
  if (!E(n.version)) throw Error("Unable to read document.version");
  if (!n.root) throw Error("Unable to read document.root");
  if (n.version < N.minimumLegacySerializationVersion)
    throw new Re(n.version, N.minimumLegacySerializationVersion);
  if (n.version > ve) throw new Be(n.version, ve);
}
function Y(n, t) {
  let e = !1;
  function r(i, c, a) {
    if (!i) return;
    let d = i.id;
    if (a.has(d)) {
      ((e = !0), t && t.push({ id: d, stack: c.slice() }));
      return;
    }
    if ((a.add(d), c.push(d), z(i))) {
      let f = i.getRawControlProps(),
        h = Object.keys(f);
      for (let v of h) {
        let m = f[v];
        if (m) {
          if (m.type === "slot" && k(m.value))
            for (let P of m.value) {
              if (!O(P)) continue;
              let M = P["reference"];
              if (!R(M)) continue;
              let Wt = n.get(M);
              r(Wt, c, a);
            }
          else if (m.type === "componentinstance" && R(m.value)) {
            let P = n.get(m.value);
            r(P, c, a);
          } else if (k(m.value))
            for (let P of m.value) {
              if (!O(P) || P.type !== "componentinstance") continue;
              let A = P.value;
              if (!R(A)) continue;
              let M = n.get(A);
              r(M, c, a);
            }
        }
      }
    }
    let l = i.children;
    if (l) for (let f of l) r(f, c, a);
    (a.delete(d), c.pop());
  }
  let o = new Set(),
    s = [];
  return (r(n.root, s, o), e);
}
var er = b("TreeRepair"),
  tr = 100;
function B(n) {
  n.length !== 0 &&
    er.reportErrorOnceEveryTenMinutes(
      Me(new Error("TreeRepair caught errors"), ["TreeRepair caught errors"]),
      { errorCount: n.length, errors: n.slice(0, tr) }
    );
}
function Dt(n, t, e) {
  It(n);
  let r = ft(n),
    o = T(r.root, null, { extraChecksAndFixes: !0, errors: e, warnings: e });
  if (!o) throw Error("Unable to create load document");
  Bt(o, e);
  let s = new Map();
  (ce(s, e, o, fe), kt(s, o, e));
  let i = N.createByAdoptingRoot(o);
  (i.verify(), (i = ee.treeDidLoad(i, t, e).didNonLinearMove(t)));
  let c = [];
  return (
    Y(i, c) &&
      (c.forEach((a) => {
        (e.push(`${a.id}: code component links itself via ${a.stack}`), de(i, a.id, a.stack));
      }),
      (i = i.commit(t))),
    i
  );
}
function At(n, t) {
  Bt(n, t);
  let e = new Map();
  (ce(e, t, n, fe), kt(e, n, t));
}
function _(n, t) {
  let e = new Map();
  (ce(e, t, n, n.parentid), rr(e, n, t));
}
function Rt(n) {
  return je(n) || X(n);
}
function Bt(n, t = []) {
  let e = n.children,
    r = e.find(Rt);
  r === void 0 &&
    (t.push(`${n.id}: Root does not contain a page`), (r = new ye({ id: Pe(n) })), e.push(r));
  for (let o = 0; o < e.length; o++) {
    let s = e.at(o);
    if (s && !Et(s)) {
      if (pe(s)) {
        (t.push(`${s.id}: BranchNode is not under BranchesNode`), e.splice(o--, 1));
        let i = n.children.find(Q);
        (i || ((i = new Se()), n.children.push(i)),
          i.children.push(s),
          s.setProp("parentid", i.id));
        continue;
      }
      (t.push(`${s.id}: Ground node is not on a page`),
        e.splice(o--, 1),
        r.children.push(s),
        s.setProp("parentid", r.id));
    }
  }
}
function Et(n) {
  return (
    te(n) ||
    et(n) ||
    Xe(n) ||
    st(n) ||
    qe(n) ||
    We(n) ||
    Ke(n) ||
    Ye(n) ||
    Ge(n) ||
    nt(n) ||
    Je(n) ||
    Q(n) ||
    Ve(n) ||
    He(n)
  );
}
function Ot(n, t) {
  let e = n.root,
    r = e.children.find(Rt),
    o = e.children.find(Q);
  for (let s of e.children.filter((i) => !Et(i))) {
    if (pe(s)) {
      (t.push(`${s.id}: BranchNode is not under BranchesNode`),
        (o ??= n.insertNode(new Se(), e.id)),
        n.move(s.id, o.id));
      continue;
    }
    (t.push(`${s.id}: Ground node is not on a page`),
      r ||
        (t.push(`${e.id}: Root does not contain a page`),
        (r = n.insertNode(new ye({ id: Pe(e) }), e.id))),
      n.move(s.id, r.id));
  }
}
function de(n, t, e) {
  let r = n.get(e[e.length - 1]);
  if (!z(r)) return;
  let o = r.getRawControlProps(),
    s = {};
  for (let c in o) {
    let a = o[c];
    if (!a) continue;
    let { type: d, value: l } = a;
    if (d === "slot" && k(l)) {
      let f = l.filter((h) => (O(h) ? h["reference"] !== t : !0));
      f.length !== l.length && (s[c] = { type: "slot", value: f });
    } else if (d === "componentinstance" && l === t) s[c] = { type: "slot", value: [] };
    else if (k(l)) {
      let f = l.filter((h) => (!O(h) || h.type !== "componentinstance" ? !0 : h.value !== t));
      f.length !== l.length && (s[c] = { type: "array", value: f });
    }
  }
  if (rt(s)) return;
  let i = tt(s);
  r.set(i);
}
function ce(n, t, e, r) {
  for (e.setProp("parentid", r); n.has(e.id);)
    (t.push(`${e.id}: duplicate id in document`), (e.id = Qe()));
  n.set(e.id, e);
  let o = e.children;
  if (o) for (let s of o) ce(n, t, s, e.id);
}
function kt(n, t, e) {
  for (let r of t.walk())
    (u(r.isMutable()),
      z(r) && xt(n, r.id, new Set([r.id]), r, e),
      Z(r) && _t(n, r, r, e),
      W(r) && (Ft(n, r, e), Mt(n, r, e)),
      me(r) && zt(r, e));
}
function rr(n, t, e) {
  for (let r of t.walk()) (u(r.isMutable()), W(r) ? Mt(n, r, e) : me(r) && zt(r, e));
}
function xt(n, t, e, r, o) {
  function s(a) {
    if (!R(a)) return !1;
    if (e.has(a)) return (o.push(`${t}: code component links itself via ${r.id}`), !0);
    let d = n.get(a);
    if (!d) return (o.push(`${r.id}: code component has bad link at ${a}`), !0);
    let l = !1;
    for (let f of d.walk())
      e.has(f.id)
        ? (o.push(`${t}: code component links itself via ${r.id} via ${a}`), (l = !0))
        : z(f) && xt(n, t, new Set([...e, f.id]), f, o);
    return l;
  }
  let i = r.getRawControlProps(),
    c = Object.keys(i);
  for (let a of c) {
    let d = i[a];
    if (!ge(d)) continue;
    if (d.type === "slot" && k(d.value)) {
      let h = [];
      for (let v = 0; v < d.value.length; v++) {
        let m = d.value[v];
        if (!O(m)) continue;
        let A = m["reference"];
        R(A) && s(A) && h.push(v);
      }
      for (; h.length > 0;) d.value.splice(h.pop(), 1);
      continue;
    }
    if (d.type === "componentinstance" && R(d.value)) {
      if (!s(d.value)) continue;
      d.value = void 0;
      continue;
    }
    let l = d.value;
    if (!Array.isArray(l)) continue;
    let f = [];
    for (let h = 0, v = l.length; h < v; h++) {
      let m = l[h];
      ge(m) && m.type === "componentinstance" && R(m.value) && s(m.value) && f.push(h);
    }
    for (; f.length > 0;) l.splice(f.pop(), 1);
  }
}
function Ee(n) {
  (n.setProp("originalid", null), n.setProp("replicaInfo", null));
}
function _t(n, t, e, r) {
  for (let o of e.walk())
    if (o !== e && Ze(o) && W(o)) {
      let s = Ft(n, o, r);
      if (!s) continue;
      if (t === s) {
        (r.push(`${t.id}: template component links itself via ${e.id}`), Ee(o));
        continue;
      }
      _t(n, t, s, r);
    }
}
function Ft(n, t, e) {
  let r = t.replicaInfo.master,
    o = n.get(r);
  return o
    ? Z(o)
      ? (t.originalid !== r &&
          (e.push(`${t.id}: template originalid doesn't point to master id: ${t.originalid}`),
          t.setProp("originalid", r)),
        o)
      : (e.push(`${t.id}: template references a node that is not a master: ${r}`), Ee(t), null)
    : (e.push(`${t.id}: template references a master that doesn't exist: ${r}`), Ee(t), null);
}
function Mt(n, t, e) {
  if (!t.replicaInfo) return;
  let r = t.replicaInfo.inheritsFrom;
  if (!r) return;
  let o = n.get(r);
  o
    ? !Z(o) &&
      !W(o) &&
      (e.push(`${t.id}: template references an inherit that isn't a master or a replica: ${r}`),
      (t.replicaInfo.inheritsFrom = void 0))
    : (e.push(`${t.id}: template references an inherit that doesn't exist: ${r}`),
      (t.replicaInfo.inheritsFrom = void 0));
}
function zt(n, t) {
  n.originalid &&
    (n.setProp("originalid", null),
    t.push(`${n.id}: removing original id from orphan replica child`));
}
var le = b("remote:verify");
function Ut(n, t, e, r) {
  let o = n.getPartialDocumentForPageIds(e),
    s = [],
    i = le.isLoggingTraceMessages() ? [] : void 0,
    c = T(o, null, { extraChecksAndFixes: !0, errors: s, warnings: i });
  (y("parsingRootNode"), u(c, () => `error loading root node: ${o.id} ${JSON.stringify(s)}`));
  for (let d of c.children ?? []) d.children && d.children.length > 0 && _(d, s);
  (s.length > 0 &&
    le.warn(
      "errors loading server tree: " +
        s.join(`
`)
    ),
    B(s),
    i &&
      i.length > 0 &&
      le.trace(
        "warnings loading server tree: " +
          i.join(`
`)
      ));
  let a = N.createByAdoptingRoot(c, r);
  return (
    a.loadReplicasAndCodeComponents(a.root),
    y("parsingReplicasExpansion"),
    a.hasUncommittedChanges() && (a = a.commit(t)),
    a
  );
}
function po(n, t) {
  let e = n.parseNextPage();
  if (!e) return !0;
  let r = [],
    o = T(e, n.root.id, { extraChecksAndFixes: !0, errors: r });
  return (
    u(o, () => `error loading page node: ${e.id} ${JSON.stringify(r)}`),
    _(o, r),
    r.length > 0 &&
      le.warn(
        "warnings loading server tree: " +
          r.join(`
`)
      ),
    B(r),
    t.set(o.id, o),
    !1
  );
}
function fo(n, t, e) {
  return (
    n.makeLatest(),
    (n.editClosed = !1),
    (n.isViewOnly = !1),
    n.root.children.forEach((r, o) => {
      let s = e.get(r.id);
      s && (n.remove(s.id), n.insertNode(s, n.root.id, o));
    }),
    (n.inEditor = !1),
    n.loadReplicasAndCodeComponents(n.root),
    n.hasUncommittedChanges() && (n = n.commit(t)),
    (n.inEditor = !0),
    n
  );
}
var sr = b("DocumentLoader"),
  Oe = b("remote:verify"),
  he = class n {
    constructor(t, e, r) {
      this.componentLoader = t;
      this.parser = e;
      this.settings = r;
      ((this.canvasTreeVersion = this.parser.version),
        (this.chunkingHints = this.parser.getChunkingHints()));
    }
    componentLoader;
    parser;
    settings;
    canvasTreeVersion = 0;
    chunkingHints;
    static async createPartialParser(t, e, r) {
      if (typeof t == "string") {
        let o = new ae(t);
        return new n(e, o, r);
      } else {
        let o = new ie(t);
        return new n(e, o, r);
      }
    }
    readFirstPage() {
      let t = !1,
        e = [];
      if (
        (this.settings.activeNodeId &&
          (e.push(...this.parser.getPagesContainingId(this.settings.activeNodeId)),
          (t = e.some((r) => se(this.parser.getShallowPage(r))))),
        !t)
      ) {
        let r = this.parser.getShallowPages(),
          { maybeFirstPage: o } = oe(r, this.parser.getHomePageNodeID());
        e.push(o.id);
        let s = 0,
          i;
        for (let c of r) {
          if ((X(c, !0) && s++, s > 1)) break;
          $e(c, !0) && (i ??= c.id);
        }
        s === 1 && i && i !== o.id && e.push(i);
      }
      return (
        sr.debug("loadPartialDocument():", e),
        Ut(this.parser, this.componentLoader, e, this.settings.treeServices)
      );
    }
    getScopesToLoad() {
      return this.parser.getPagesToLoad();
    }
    getParsedPageById(t) {
      return this.parser.getParsedPageById(t);
    }
    buildPage(t) {
      if (!t) return;
      let e = [],
        r = Oe.isLoggingTraceMessages() ? [] : void 0,
        o = T(t, this.parser.root.id, { extraChecksAndFixes: !0, errors: e, warnings: r });
      if (
        (o && _(o, e),
        e.length > 0 &&
          Oe.warn(
            "errors loading server tree: " +
              e.join(`
`)
          ),
        B(e),
        r &&
          r.length > 0 &&
          Oe.trace(
            "warnings loading server tree: " +
              r.join(`
`)
          ),
        !!o)
      )
        return o;
    }
  };
var ke = b("app");
function Lo(n, t) {
  let e,
    r = new XMLHttpRequest();
  r.open("GET", n.toString(), !1);
  try {
    (r.send(), (e = JSON.parse(r.responseText)));
  } catch (o) {
    ke.error(`Retrieving document \u201C${n}\u201D failed. (${o})`);
  }
  return xe(e, t);
}
function Vt(n) {
  ze.isTest ||
    n.forEach((t) => {
      ke.warn("[repaired]", t);
    });
}
function xe(n, t) {
  let e = [];
  try {
    let r = Dt(n, t, e);
    return (Vt(e), r);
  } catch (r) {
    throw (Vt(e), ke.warn("tree failed to verify:", r), r);
  }
}
var g = b("DocumentLoader"),
  G = 10,
  J = 1e3;
function F(n) {
  return n < 1024 * 0.75
    ? `${Math.round(n)}b`
    : n < 1024 * 1024 * 0.75
      ? `${(n / 1024).toFixed(2)}kb`
      : `${(n / 1024 / 1024).toFixed(2)}Mb`;
}
function C(n) {
  return n < 200
    ? `${n.toFixed(1)}ms`
    : n < 20 * 1e3
      ? `${(n / 1e3).toFixed(3)}s`
      : `${Math.round(n / 1e3)}s`;
}
var ue = class extends lt.default {
  constructor(e, r, o, s) {
    super();
    this.componentLoader = e;
    this.treeVersion = r;
    this.documentURL = o;
    this.settings = s;
    ((this.scheduler = new St(s.isUserIdleCallback)),
      g.debug("new:", this.treeVersion, this.documentURL));
  }
  componentLoader;
  treeVersion;
  documentURL;
  settings;
  scheduler;
  activelyLoadingScope = !1;
  retryCount = 0;
  scopesToLoad = new Set();
  prioritizedScopeIds = new Set();
  currentLoadingScope = void 0;
  partialParser;
  canvasTreeVersion = 0;
  documentSize = 0;
  loadedFirstScope = !1;
  loadingDuration = 0;
  parsingDuration = 0;
  debugPaused = !1;
  loadingScopesPaused = !1;
  loadAllDataPriority = 0;
  loadedAllData = !1;
  updatePauseResumeState = () => {
    if (!this.loadedFirstScope) {
      (this.scheduler.fast(), this.scheduler.resume());
      return;
    }
    let e = this.loadAllDataPriority > 0 || this.prioritizedScopeIds.size > 0,
      r = this.loadingScopesPaused || this.debugPaused;
    (e ? this.scheduler.fast() : this.scheduler.slow(),
      e || !r || this.scopesToLoad.size <= 0 ? this.scheduler.resume() : this.scheduler.pause());
  };
  pauseLoadingScopes() {
    this.loadingScopesPaused ||
      ((this.loadingScopesPaused = !0),
      g.debug("pauseLoadingScopes"),
      this.updatePauseResumeState());
  }
  resumeLoadingScopes() {
    this.loadingScopesPaused &&
      ((this.loadingScopesPaused = !1),
      g.debug("resumeLoadingScopes"),
      this.updatePauseResumeState());
  }
  prioritizeLoadingAllData(e) {
    let r = "preload" in e && e.preload;
    if (r) return () => {};
    let o = performance.now(),
      s = this.numberOfScopesToLoad();
    ((this.loadAllDataPriority = Math.max(1, this.loadAllDataPriority + 1)),
      g.debug("prioritizeLoadingScopes:", this.loadAllDataPriority),
      this.updatePauseResumeState());
    let i = r || ("doNotTrack" in e && e.doNotTrack),
      c = !1,
      a = i
        ? void 0
        : this.afterAllDataLoaded(() => {
            if (c) return;
            u("operationName" in e, "operationName is required");
            let f = performance.now() - o;
            it("fulltree_force_load", {
              operationName: e.operationName,
              durationMs: Math.round(f),
              background: e.operationInBackground,
              shallowScopesCount: s,
            });
          }),
      d = this.afterAllDataLoaded(() => {
        if (c) return;
        u(!("preload" in e), "preload should never load all data");
        let l = {
          operationName: e.operationName,
          durationMs: Math.round(performance.now() - o),
          background: e.operationInBackground,
          shallowScopesCount: s,
        };
        g.reportError(new Error("Full tree loaded"), l, { operationName: e.operationName });
      });
    return () => {
      c || ((c = !0), a?.(), d(), this.stopPrioritizingLoadingAllData());
    };
  }
  stopPrioritizingLoadingAllData() {
    ((this.loadAllDataPriority -= 1),
      g.debug("stopPrioritizingLoadingScopes:", this.loadAllDataPriority),
      this.updatePauseResumeState());
  }
  debugPause() {
    this.debugPaused ||
      ((this.debugPaused = !0), g.debug("debugPause"), this.updatePauseResumeState());
  }
  debugResume() {
    this.debugPaused &&
      ((this.debugPaused = !1), g.debug("debugResume"), this.updatePauseResumeState());
  }
  isDebugPaused() {
    return this.debugPaused;
  }
  afterAllDataLoaded(e) {
    if (e) {
      let r = !1,
        o = () => {
          queueMicrotask(() => {
            r || e();
          });
        };
      return this.loadedAllData
        ? (o(),
          () => {
            r = !0;
          })
        : (this.once("loadedAllData", o),
          () => {
            ((r = !0), this.off("loadedAllData", o));
          });
    }
    return this.loadedAllData
      ? Promise.resolve()
      : new Promise((r) => {
          let o = () => {
            queueMicrotask(r);
          };
          this.once("loadedAllData", o);
        });
  }
  tree;
  async start() {
    return this.scheduler.run(async () => {
      (g.debug("start"), y("parsingInit"), this.updatePauseResumeState());
      let e = performance.now(),
        r = await this.loadData();
      ((this.loadingDuration = performance.now() - e), y("documentBytesReady"));
      let o = typeof r == "string" ? r.length : r.byteLength;
      if (
        (K({
          format: r instanceof Uint8Array ? "crdt" : "json",
          strategy: "full-load",
          sources: ["tree-download"],
          snapshotBytes: o,
          snapshotSource: "downloaded",
          cachedRows: 0,
          cachedRowBytes: 0,
          downloadedRows: 0,
          downloadedRowBytes: 0,
        }),
        await this.scheduler.throwIfErrored(),
        !this.settings.partialParsing || (typeof r == "string" && !ne(r)))
      )
        return this.parseFullDocumentSync(r);
      let s = await this.loadDocumentVersion(r);
      (await this.scheduler.yield(),
        (this.tree = await this.loadFirstTree(s)),
        await this.loadAllScopesAsync());
    });
  }
  async loadAllScopesAsync() {
    ((this.loadedFirstScope = !0),
      this.updatePauseResumeState(),
      await this.scheduler.yield(),
      y("parsingResume"));
    let e;
    for (; (e = this.nextScopeIdToLoad()) !== void 0;)
      (await this.loadScopeAsync(e), this.updatePauseResumeState(), await this.scheduler.yield());
    (await this.emitWrapped(() => {
      (u(this.tree, "tree must have been set"),
        this.tree.setService("loader", void 0),
        (this.loadedAllData = !0),
        this.emit("loadedAllData"));
    }),
      g.debug(
        "done",
        F(this.documentSize),
        "loading:",
        C(this.loadingDuration),
        "parsing:",
        C(this.parsingDuration)
      ));
  }
  async loadData() {
    if (this.settings.loadedData) return this.settings.loadedData;
    g.debug("Document in cache is not up to date. Tree version:", this.treeVersion);
    let e = this.settings.initData,
      r = e?.version === this.treeVersion,
      o = e?.prefetchPromise;
    if ((e && (e.prefetchPromise = void 0), r && o)) {
      g.debug("loadData: prefetch");
      let a = await o;
      if (
        (o
          .then((d) => d.duration)
          .then((d) => {
            y("dataLoad", d);
          })
          .catch(() => {}),
        await this.scheduler.resumeOrThrow(),
        a.buffer)
      ) {
        g.debug("loadData: prefetch bytes parser");
        let d = await a.buffer;
        return (
          await this.scheduler.resumeOrThrow(),
          a.status < 200 || a.status >= 300
            ? this.handleErrorAndRetry(a.status, "Error loading project data")
            : new Uint8Array(d)
        );
      }
      if (a.text) {
        let d = await a.text;
        return (
          await this.scheduler.resumeOrThrow(),
          a.status < 200 || a.status >= 300 ? this.handleErrorAndRetry(a.status, d) : d
        );
      }
    }
    g.debug("loadData: fetch");
    let s;
    this.settings.refreshAccessToken &&
      ((s = await this.settings.refreshAccessToken({})), await this.scheduler.resumeOrThrow());
    let i = await fetch(this.documentURL, s);
    await this.scheduler.resumeOrThrow();
    function c(a) {
      if (!a.body) return !1;
      let d = new URLSearchParams(window.location.search).has("bytes"),
        l = document.cookie.includes("bytes-parser=true"),
        f = parseInt(a.headers.get("Uncompressed-Content-Length") ?? "0", 10) > 2e8;
      return (d && (document.cookie = "bytes-parser=true; path=/;"), d || l || f);
    }
    if ((y("dataLoad"), i.status < 200 || i.status >= 300)) {
      let a = await i.text();
      return this.handleErrorAndRetry(i.status, a);
    }
    if (c(i)) {
      g.debug("loadData: using streaming parser");
      let a = await i.arrayBuffer();
      return new Uint8Array(a);
    } else {
      g.debug("loadData: using text parser");
      let a = await i.text();
      return (await this.scheduler.resumeOrThrow(), a);
    }
  }
  async handleErrorAndRetry(e, r) {
    let o = !1;
    try {
      o = JSON.parse(r).retry;
    } catch {}
    if (o && this.retryCount < G)
      return (
        g.debug("onErrorStatusLoaded, retry:", this.retryCount),
        await this.scheduler.sleep(this.retryCount * J + Math.random() * J),
        (this.retryCount += 1),
        this.loadData()
      );
    throw Error(o ? "Too many retries" : `Fetch Error: ${e} - ${r}`);
  }
  parseFullDocumentSync(e) {
    if (typeof e != "string")
      throw new Error("Full document sync parsing requires string data, not ReadableStream");
    let r = performance.now();
    this.documentSize = e.length;
    let o = JSON.parse(e);
    if (!E(o.version)) throw Error("cannot read document version");
    if (
      ((this.canvasTreeVersion = o.version),
      g.debug(
        "parseFullDocumentSync",
        this.canvasTreeVersion,
        F(this.documentSize),
        C(this.loadingDuration)
      ),
      this.emit("loadedDocumentVersion", o.version),
      this.scheduler.isDone())
    )
      return;
    let s = xe(o, this.componentLoader);
    (this.emit("loadedFirstData", s),
      !this.scheduler.isDone() &&
        (this.emit("loadedAllData"),
        (this.parsingDuration += performance.now() - r),
        y("parsingFirstPage"),
        g.debug(
          "done",
          F(this.documentSize),
          "loading:",
          C(this.loadingDuration),
          "parsing:",
          C(this.parsingDuration)
        )));
  }
  hasLoadedScope(e) {
    if (this.removedByDiff.has(e)) {
      let s = this.tree?.latestTree().get(e);
      return te(s) && s.isLoaded();
    }
    let r = this.scopesToLoad.has(e),
      o = this.currentLoadingScope?.id === e;
    return !r && !o;
  }
  numberOfScopesToLoad() {
    return this.scopesToLoad.size + (this.currentLoadingScope ? 1 : 0);
  }
  prioritizeLoadingScope(e, r) {
    let o, s;
    if (typeof r == "function") this.addScopeLoadCallback(e, r);
    else if (r && "onLoaded" in r) (this.addScopeLoadCallback(e, r.onLoaded), (s = r));
    else {
      let i = new ct();
      ((o = i), this.addScopeLoadCallback(e, i.resolve), (s = r));
    }
    if (!s?.preload)
      return (
        this.scopesToLoad.has(e) &&
          (this.prioritizedScopeIds.add(e),
          this.updatePauseResumeState(),
          this.addScopeLoadCallback(e, this.updatePauseResumeState)),
        o
      );
  }
  nextScopeIdToLoad() {
    for (let r of this.prioritizedScopeIds)
      if ((this.prioritizedScopeIds.delete(r), !!this.scopesToLoad.has(r)))
        return (this.scopesToLoad.delete(r), this.scheduler.fast(), r);
    let e = this.loadAllDataPriority > 0;
    this.settings.loadInBackground && !e ? this.scheduler.slow() : this.scheduler.fast();
    for (let r of this.scopesToLoad) return (this.scopesToLoad.delete(r), r);
  }
  async loadDocumentVersion(e) {
    let r = performance.now(),
      o = await he.createPartialParser(e, this.componentLoader, this.settings);
    return (
      typeof e == "string" ? (this.documentSize = e.length) : (this.documentSize = 0),
      (this.canvasTreeVersion = o.canvasTreeVersion),
      (this.parsingDuration += performance.now() - r),
      g.debug(
        "loadDocumentVersion",
        this.canvasTreeVersion,
        typeof e == "string" ? F(this.documentSize) : "stream",
        C(this.loadingDuration)
      ),
      await this.emitWrapped(() => {
        if (this.scheduler.isDone()) return;
        let s = performance.now();
        (this.emit("loadedDocumentVersion", this.canvasTreeVersion),
          (this.parsingDuration += performance.now() - s));
      }),
      (this.partialParser = o),
      o
    );
  }
  async loadFirstTree(e) {
    let r = performance.now(),
      o = e.readFirstPage();
    this.scopesToLoad = e.getScopesToLoad();
    for (let s of this.scopesToLoad) {
      let i = o.get(s);
      i && (i.treeState.isShallowLoad = !0);
    }
    return (
      (this.parsingDuration += performance.now() - r),
      g.debug("loadFirstTree", C(this.parsingDuration)),
      await this.emitWrapped(() => {
        if (this.scheduler.isDone()) return;
        let s = performance.now();
        (o.setService("loader", this),
          (o.chunkingHints = e.chunkingHints),
          this.emit("loadedFirstData", o),
          y("parsingFirstPage"),
          (this.parsingDuration += performance.now() - s));
      }),
      o
    );
  }
  async loadScopeAsync(e) {
    let r = performance.now();
    (u(!this.currentLoadingScope, "already have a currently loading scope"),
      (this.activelyLoadingScope = !0));
    let o = (this.currentLoadingScope = this.createLoadingScope(e));
    await this.emitWrapped(() => {
      if (
        ((this.activelyLoadingScope = !1),
        (this.currentLoadingScope = void 0),
        this.scheduler.isDone())
      )
        return;
      let s = performance.now(),
        i = o.force(),
        c = i.take();
      if (!c) return;
      this.emit("loadedScope", c);
      let a = performance.now();
      ((this.parsingDuration += i.duration + a - s),
        this.signalScopeLoadCallbacks(c.id),
        g.debug(
          "loadScopeAsync:",
          e,
          C(i.duration),
          "scheduler priority:",
          this.scheduler.currentPriority()
        ),
        be("loadScopeAsync", r, a, "vekter"));
    });
  }
  createLoadingScope(e) {
    return (
      u(this.partialParser, "loadScope before the parser is available"),
      new _e(e, this.partialParser)
    );
  }
  reloadScope(e) {
    return (this.scopesToLoad.add(e), this.loadScope(e));
  }
  invalidateScopeForReload(e) {}
  loadScope(e) {
    let r = performance.now();
    if (this.currentLoadingScope?.id === e) {
      let i = this.currentLoadingScope.force();
      return ((this.parsingDuration += i.duration), (this.currentLoadingScope = void 0), i.take());
    }
    if ((this.prioritizedScopeIds.delete(e), !this.scopesToLoad.has(e))) return;
    this.scopesToLoad.delete(e);
    let o = this.createLoadingScope(e).force(),
      s = performance.now();
    return (
      (this.parsingDuration += o.duration + s - r),
      g.debug("loadScope:", e, C(o.duration)),
      this.signalScopeLoadCallbacks(e),
      be("loadScope", r, s, "vekter"),
      o.take()
    );
  }
  loadCallbacksPerScope = new Map();
  addScopeLoadCallback(e, r) {
    if (!r) return;
    if (this.hasLoadedScope(e)) {
      setTimeout(r);
      return;
    }
    let o = this.loadCallbacksPerScope.get(e) ?? [];
    (o.push(r), this.loadCallbacksPerScope.set(e, o));
  }
  signalScopeLoadCallbacks(e) {
    setTimeout(() => {
      let r = this.loadCallbacksPerScope.get(e);
      if (r) {
        for (let o of r) o();
        this.loadCallbacksPerScope.delete(e);
      }
    });
  }
  async emitWrapped(e) {
    (await this.scheduler.resumeOrThrow(),
      this.settings.asyncEventWrapper ? await this.settings.asyncEventWrapper(e) : e());
  }
  async nodeIdsToLoad() {
    let e = performance.now(),
      r = new Set();
    if (!this.partialParser) return r;
    for (let o of this.scopesToLoad) {
      let s = yt({ batch: !0, continueAfter: "paint" });
      s && (await s);
      let i = this.partialParser.getParsedPageById(o);
      Ht(r, i);
    }
    for (let o of this.addedByDiff) r.add(o);
    for (let o of this.removedByDiff) r.delete(o);
    return (g.debug("nodeIdsToLoad", r.size, C(performance.now() - e)), r);
  }
  addedByDiff = new Set();
  removedByDiff = new Set();
  addNodeChanges(e) {
    for (let r of e) {
      let o = r.id;
      r.added
        ? (this.addedByDiff.add(o), this.removedByDiff.delete(o))
        : r.removed && (this.addedByDiff.delete(o), this.removedByDiff.add(o));
    }
  }
};
function Ht(n, t) {
  if (t && (n.add(t.id), !!t.children)) for (let e of t.children) Ht(n, e);
}
var q = class {
    constructor(t, e) {
      this.node = t;
      this.duration = e;
    }
    node;
    duration;
    take() {
      let t = this.node;
      return ((this.node = void 0), t);
    }
  },
  _e = class {
    constructor(t, e) {
      this.id = t;
      this.parser = e;
    }
    id;
    parser;
    data = void 0;
    loadedScope = void 0;
    force() {
      if (this.loadedScope) return this.loadedScope;
      let t = performance.now();
      this.data || (this.data = this.parser.getParsedPageById(this.id));
      let e = this.parser.buildPage(this.data);
      return (
        e && (e.treeState.isShallowLoad = !1),
        (this.loadedScope = new q(e, performance.now() - t)),
        this.loadedScope
      );
    }
  };
var Fe = class {
    constructor(t, e, r) {
      this.id = t;
      this.store = e;
      this.trackSerializedCache = r;
    }
    id;
    store;
    trackSerializedCache;
    loadedScope;
    loadScopeDataFromStore() {
      let t = this.store.getObject(this.id);
      if (!t) {
        S.debug("No object with id " + this.id + " in the store");
        return;
      }
      return t;
    }
    createNodeFromData(t) {
      let e = this.buildPage(t);
      if (e)
        return (
          (e.treeState.isShallowLoad = !1),
          e.treeState.setSerializedCache(e, t),
          this.trackSerializedCache(e),
          e
        );
    }
    force() {
      if (this.loadedScope) return this.loadedScope;
      let t = performance.now(),
        e = this.loadScopeDataFromStore(),
        r = this.createNodeFromData(e),
        o = performance.now() - t;
      return ((this.loadedScope = new q(r, o)), this.loadedScope);
    }
    buildPage(t) {
      if (!t) return;
      let e = [],
        r = S.isLoggingTraceMessages() ? [] : void 0,
        o = T(t, void 0, { extraChecksAndFixes: !0, errors: e, warnings: r });
      if (
        (o && _(o, e),
        e.length > 0 &&
          S.warn(
            "errors loading server tree: " +
              e.join(`
`)
          ),
        B(e),
        r &&
          r.length > 0 &&
          S.trace(
            "warnings loading server tree: " +
              r.join(`
`)
          ),
        !!o)
      )
        return o;
    }
  },
  S = b("CrdtDocumentLoader"),
  $t = class {
    constructor(t, e) {
      this.mainStore = t;
      this.branches = e;
    }
    mainStore;
    branches;
    get store() {
      return this.branches?.activeStore ?? this.mainStore;
    }
    loadSnapshot(t) {
      ((this.branches?.getStore(p) ?? this.mainStore).fromBuffer(t), this.branches?.reset());
    }
    reset() {
      ((this.branches?.getStore(p) ?? this.mainStore).reset(), this.branches?.reset());
    }
    install() {}
  },
  nr = 2,
  jt = class extends ue {
    constructor(e, r, o, s, i, c) {
      super(o, s, i, c);
      this.storeTarget = e;
      this.projectId = r;
    }
    storeTarget;
    projectId;
    parsedIds = new Set();
    serializedScopeNodes = new Set();
    serializedCacheClearScheduled = !1;
    storeTargetInstalled = !1;
    get store() {
      return this.storeTarget.store;
    }
    get branches() {
      return this.storeTarget.branches;
    }
    switchToInitialBranch() {
      if (!this.branches) return;
      let e = this.settings.activeBranchId;
      !e || e === p || this.branches.switchActiveBranch(this.branches.findFirstNonDeletedBranch(e));
    }
    loadFirstCrdtTreeFromStore(e) {
      if (Ue.isOn("canvasTreeCrdtDriver")) return this.loadStoreBackedTree(e.rootId);
      let r = [],
        o = [],
        i = this.store.getObjectWithShallowChildren(e.rootId, 1);
      u(i, "Root object not found in store");
      let { pagesToLoad: c, firstFoundPages: a } = this.findFirstPagesToLoad(i, e.rootId),
        d = T(i, null, { extraChecksAndFixes: !0, errors: r, warnings: o });
      u(d, "Unable to load document");
      for (let h of d.children)
        ((h.treeState.isShallowLoad = !0), U.includes(h.id) && c.push(h.id));
      for (let h of c) {
        if (!h) continue;
        let v = this.store.getObject(h);
        if (!v) {
          S.debug("No value for " + h);
          continue;
        }
        let m = T(v);
        (u(m, "Scope node instance could not be created"),
          (m.treeState.isShallowLoad = !1),
          m.treeState.setSerializedCache(m, v),
          this.trackSerializedScopeCache(m));
        let P = d.children.findIndex((M) => M.id === h);
        (P >= 0 && d.children.splice(P, 1, m), this.parsedIds.add(h));
        let A = m;
        h === a?.maybeFirstPage.id &&
          a.firstDesignPage &&
          gt(A, a.firstDesignPage) !== A &&
          c.push(a.firstDesignPage.id);
      }
      At(d, r);
      for (let h of d.children) this.parsedIds.has(h.id) || this.scopesToLoad.add(h.id);
      if (r.length > 0 || o.length > 0)
        for (let h of d.children) h.treeState.serialized = { hadError: !0 };
      let l = N.createByAdoptingRoot(d, this.settings.treeServices);
      (l.verify(),
        (l = ee.treeDidLoad(l, this.componentLoader, []).didNonLinearMove(this.componentLoader)));
      let f = [];
      return (
        Y(l, f) &&
          (f.forEach((h) => {
            (r.push(`${h.id}: code component links itself via ${h.stack}`), de(l, h.id, h.stack));
          }),
          (l = l.commit(this.componentLoader))),
        B(r),
        (l.chunkingHints = this.computeChunkingHints()),
        l.setService("loader", this),
        l
      );
    }
    findFirstPagesToLoad(e, r) {
      let s = [],
        i,
        c = this.settings.activeNodeId,
        a = c ? this.store.getObjectWithShallowChildren(c, 1) : void 0;
      for (; a && a.parentid !== r;) {
        if (!a.parentid) throw Error("active node has no parent");
        a = this.store.getObjectWithShallowChildren(a.parentid, 1);
      }
      return (
        se(a)
          ? s.push(a.id)
          : ((i = oe(e.children ?? [], e?.homePageNodeId)), s.push(i.maybeFirstPage.id)),
        { pagesToLoad: s, firstFoundPages: i }
      );
    }
    loadStoreBackedTree(e) {
      u(this.store.hasDefinedObjectKey(e, "__class"), "Root object not found in store");
      let r = N.createFromStore(this.store, this.settings.treeServices),
        o = [];
      (Ot(r, o), o.length > 0 && (r = r.commit(this.componentLoader)));
      for (let s of this.store.getChildrenIds(e)) this.parsedIds.add(s);
      return (
        B(o),
        (r.chunkingHints = this.computeChunkingHints()),
        r.setService("loader", this),
        r
      );
    }
    computeChunkingHints() {
      if (this.documentSize < 0)
        return (
          S.warn("document size not set, skipping chunking hints:", this.documentSize),
          new Set()
        );
      let e = new Set();
      if (this.documentSize < 2e8) return e;
      let r = this.store.getHierarchy(),
        o = r.getRootId();
      if (!o) return e;
      let s = r.sizeWithoutReplicas(),
        i = this.documentSize / s,
        c = r.getChildrenIds(o);
      for (let a of c) {
        if (a === ot) {
          e.add(a);
          continue;
        }
        r.getSubtreeCount(a) * i * nr > 2e8 && e.add(a);
      }
      return e;
    }
    async loadFirstCrdtTree(e) {
      let r = this.loadFirstCrdtTreeFromStore(e);
      return (
        await this.emitWrapped(() => {
          if (this.scheduler.isDone()) return;
          let o = performance.now();
          (this.storeTarget.install(),
            (this.storeTargetInstalled = !0),
            this.projectId && this.branches && Nt(this.projectId, this.branches.activeBranchId),
            this.emit("loadedFirstData", r),
            y("parsingFirstPage"),
            (this.parsingDuration += performance.now() - o));
        }),
        r
      );
    }
    async createTreeFromBuffer(e) {
      (u(e, "createTreeFromBuffer requires document bytes"), (this.documentSize = e.byteLength));
      let r = Ne.loadVersionFromBuffer(e);
      if ((this.emit("loadedFormatVersion", r), this.scheduler.isCancelled())) {
        this.storeTarget.reset();
        return;
      }
      try {
        (this.storeTarget.loadSnapshot(e), y("buildStore"), this.switchToInitialBranch());
        let o = this.store.getObject("meta");
        if (!o) throw new Error("Meta field not found");
        if (!E(o.version)) throw Error("cannot read document version");
        if (
          ((this.canvasTreeVersion = o.version),
          S.debug(
            "createTree",
            this.canvasTreeVersion,
            F(this.documentSize),
            C(this.loadingDuration)
          ),
          this.emit("loadedDocumentVersion", o.version),
          this.scheduler.isCancelled())
        ) {
          this.storeTarget.reset();
          return;
        }
        ((this.tree = await this.loadFirstCrdtTree(o)),
          this.settings.localCache?.storeSnapshot(e, this.treeVersion, {
            syncStrategy: "full-load",
          }),
          (e = void 0),
          await this.loadAllScopesAsync());
      } catch (o) {
        if (this.scheduler.isCancelled()) return;
        throw (this.storeTarget.reset(), o);
      }
    }
    async createTreeFromCachedState(e, r = 0) {
      this.documentSize = e.snapshot.byteLength;
      let o = Ne.loadVersionFromBuffer(e.snapshot);
      if (o < Te)
        return (
          S.reportError(
            "cached binary format is behind current version, falling back to full document load",
            {
              version: this.treeVersion,
              cachedBinaryVersion: o,
              currentBinaryVersion: Te,
              documentSize: this.documentSize,
            }
          ),
          this.settings.localCache?.abortAndClearCache(),
          this.storeTarget.reset(),
          !1
        );
      if ((this.emit("loadedFormatVersion", o), this.scheduler.isCancelled()))
        return (this.storeTarget.reset(), !0);
      try {
        (this.storeTarget.loadSnapshot(e.snapshot),
          y("buildStore"),
          e.rows.length > 0 && (this.addCachedRowsToStores(e.rows), y("addedRows")));
        let s = e;
        if (((s.snapshot = void 0), r)) {
          let c = this.store.getHierarchy().computeTreeHash();
          if (r !== c)
            return (
              S.reportCriticalError("hierarchy hash mismatch, falling back to full document load", {
                version: this.treeVersion,
                hierarchyHash: r,
                computedHierarchyHash: c,
                documentSize: this.documentSize,
              }),
              this.settings.localCache?.abortAndClearCache(),
              this.storeTarget.reset(),
              !1
            );
        }
        this.switchToInitialBranch();
        let i = this.store.getObject("meta");
        if (!i) throw new Error("Meta field not found");
        if (!E(i.version)) throw Error("cannot read document version");
        return (
          (this.canvasTreeVersion = i.version),
          S.debug(
            "createTreeFromCachedState",
            this.canvasTreeVersion,
            F(this.documentSize),
            C(this.loadingDuration)
          ),
          this.emit("loadedDocumentVersion", i.version),
          this.scheduler.isCancelled()
            ? (this.storeTarget.reset(), !0)
            : ((this.tree = await this.loadFirstCrdtTree(i)), await this.loadAllScopesAsync(), !0)
        );
      } catch (s) {
        if (this.scheduler.isCancelled()) return !0;
        throw (this.storeTarget.reset(), s);
      }
    }
    addCachedRowsToStores(e) {
      function* r(a) {
        for (let d of a) for (let l of d.rows) yield l;
      }
      this.branches && u(this.store === this.branches.getStore(p), "main store mismatch");
      let o = wt(r(e)),
        s = o.get(p);
      if ((s && this.store.addSerializableRows(s), o.delete(p), o.size === 0)) return;
      let i = this.branches;
      u(i, "branch registry is required to load cached branch rows");
      for (let a of o.keys()) i.isBranchPruned(a) && o.delete(a);
      let c = [...o].sort(([a], [d]) => i.getBranchPath(a).length - i.getBranchPath(d).length);
      for (let [a, d] of c) i.getStore(a).addSerializableRows(d);
    }
    async start() {
      await this.scheduler.run(async () => {
        (S.debug("start"), y("parsingInit"), this.updatePauseResumeState());
        let e = [],
          r = performance.now(),
          o = this.settings.localCache;
        if (o && !o.aborted)
          try {
            let c = !!this.settings.initData?.prefetchSyncPromise;
            e.push(c ? "prefetch-sync" : "sync");
            let a = this.settings.initData?.prefetchSyncPromise ?? this.fetchTreeSync();
            (this.settings.initData && delete this.settings.initData.prefetchSyncPromise,
              a
                .then((l) => l.duration)
                .then((l) => y("dataLoad", l))
                .catch(() => {}));
            let d = await o.syncCrdtData(a);
            if (((a = void 0), d && d.version >= this.treeVersion)) {
              if (
                ((this.loadingDuration = performance.now() - r),
                y("documentBytesReady"),
                K({
                  format: "crdt",
                  strategy: d.syncStrategy,
                  sources: e,
                  snapshotBytes: d.snapshot.byteLength,
                  snapshotSource: d.snapshotSource,
                  cacheBackend: d.cacheBackend,
                  cachedRows: d.cachedRows,
                  cachedRowBytes: d.cachedRowBytes,
                  downloadedRows: d.downloadedRows,
                  downloadedRowBytes: d.downloadedRowBytes,
                }),
                await this.scheduler.yield(),
                await this.createTreeFromCachedState(d, d.hierarchyHash))
              )
                return;
              S.warn("local cache failed to create tree, falling back to full document load");
            } else
              d
                ? S.warn(
                    "local cache behind websocket init tree version, falling back to full document load"
                  )
                : S.warn("local cache failed, falling back to full document load");
          } catch (c) {
            if (this.storeTargetInstalled) throw (o.abortAndClearCache(), c);
            S.warn("tree/sync failed, falling back to full document load:", c);
          }
        let s = await this.loadCrdtData(e);
        ((this.loadingDuration = performance.now() - r),
          y("documentBytesReady"),
          K({
            format: "crdt",
            strategy: "full-load",
            sources: e,
            snapshotBytes: s.byteLength,
            snapshotSource: "downloaded",
            cachedRows: 0,
            cachedRowBytes: 0,
            downloadedRows: 0,
            downloadedRowBytes: 0,
          }),
          await this.scheduler.yield());
        let i = this.createTreeFromBuffer(s);
        ((s = void 0), await i);
      });
    }
    startFromStore() {
      let e = this.store.getObject("meta");
      if (!e) throw Error("Meta field not found");
      return (
        (this.storeTargetInstalled = !0),
        (this.tree = this.loadFirstCrdtTreeFromStore(e)),
        this.pauseLoadingScopes(),
        this.scheduler
          .run(async () => {
            await this.loadAllScopesAsync();
          })
          .catch((r) => {
            this.scheduler.isCancelled() || this.emit("error", r);
          }),
        this.tree
      );
    }
    async fetchTreeSync() {
      let e = this.settings.localCache;
      u(e, "fetchTreeSync requires localCache");
      let r = e.getCachedTreeVersion(),
        o = this.settings.initData?.syncURL;
      u(o, "Expected syncURL in tree init data");
      let s = new URL(o);
      s.searchParams.set("version", r.toString());
      let i = performance.now();
      we && !we.isComplete() && (i = ht);
      let c;
      this.settings.refreshAccessToken && (c = await this.settings.refreshAccessToken({}));
      let a = await fetch(s, c),
        d = "Sync-Strategy";
      return {
        status: a.status,
        headers: a.headers,
        duration: Promise.resolve(performance.now() - i),
        updates: a.headers.get(d) === "incremental" ? a.json() : void 0,
        snapshot: a.headers.get(d) === "snapshot" ? a.arrayBuffer() : void 0,
      };
    }
    async loadCrdtData(e = []) {
      if (this.settings.loadedData && this.settings.loadedData instanceof Uint8Array)
        return (S.debug("loadData: loadedData"), e.push("loaded-data"), this.settings.loadedData);
      let r = this.settings.initData;
      if ((S.debug("loadData: prefetch"), r?.prefetchPromise)) {
        let s = r.prefetchPromise;
        if ((delete r.prefetchPromise, r.version === this.treeVersion)) {
          e.push("prefetch-tree");
          let i = await s;
          if (
            (i.duration.then((c) => y("dataLoad", c)).catch(() => {}),
            i.status < 200 || i.status >= 300)
          )
            throw new Error(`Failed to fetch project data. Status code: ${i.status}`);
          if (i.buffer) {
            S.debug("loadData: prefetch bytes parser");
            let c = await i.buffer;
            return (await this.scheduler.yield(), new Uint8Array(c));
          }
        }
      }
      if (r?.prefetchSyncPromise) {
        let s = r.prefetchSyncPromise;
        delete r.prefetchSyncPromise;
        let i = await s;
        if (Number(i.headers.get("Tree-Version")) === this.treeVersion) {
          if (
            (i.duration.then((a) => y("dataLoad", a)).catch(() => {}),
            i.status < 200 || i.status >= 300)
          )
            throw new Error(`Failed to fetch project data. Status code: ${i.status}`);
          if (i.snapshot) {
            (e.push("prefetch-sync"), S.debug("loadData: prefetch sync snapshot"));
            let a = await i.snapshot;
            return (await this.scheduler.yield(), new Uint8Array(a));
          }
        }
      }
      (e.push("tree-download"), S.debug("loadData: fetch"));
      let o;
      this.settings.refreshAccessToken &&
        ((o = await this.settings.refreshAccessToken({})), await this.scheduler.yield());
      for (let s = 0; s < G; ++s)
        try {
          return await this.downloadTreeData(o);
        } catch (i) {
          if (!(i instanceof Ce) || !i.isTemporary || s === G - 1) throw i;
          (S.debug("temporary error loading document, retry:", s),
            await this.scheduler.sleep(s * J + Math.random() * J));
        }
      throw Error(`Failed to fetch project data after attempting ${G} times`);
    }
    async downloadTreeData(e) {
      let { signal: r } = this.scheduler,
        o;
      try {
        o = await fetch(this.documentURL, { ...e, signal: r });
      } catch (i) {
        throw r.aborted ? r.reason : mt(i);
      }
      if (o.status < 200 || o.status >= 300)
        throw new Ce({
          isTemporary: !0,
          message: `Failed to download document (status ${o.status})`,
          status: o.status,
          skipSentry: !0,
        });
      await this.scheduler.yield();
      let s = await o.arrayBuffer();
      return (await this.scheduler.yield(), new Uint8Array(s));
    }
    addNodeChanges(e) {
      super.addNodeChanges(e);
      for (let r of e) r.removed && this.parsedIds.delete(r.id);
    }
    invalidateScopeForReload(e) {
      (this.parsedIds.delete(e), this.scopesToLoad.add(e));
      let r = this.tree?.get(e);
      r && r.treeState.clearSerializedCache();
    }
    createLoadingScope(e) {
      return new Fe(e, this.store, (r) => this.trackSerializedScopeCache(r));
    }
    trackSerializedScopeCache(e) {
      if ((this.serializedScopeNodes.add(e), this.serializedCacheClearScheduled)) return;
      ((this.serializedCacheClearScheduled = !0),
        (this.settings.isUserIdleCallback ?? ((o) => setTimeout(o, 0)))(() =>
          this.clearSerializedScopeCaches()
        ));
    }
    clearSerializedScopeCaches() {
      for (let e of this.serializedScopeNodes) e.treeState.clearSerializedCache();
      (this.serializedScopeNodes.clear(), (this.serializedCacheClearScheduled = !1));
    }
  };
export {
  mr as a,
  Nt as b,
  bt as c,
  wt as d,
  Xt as e,
  Sr as f,
  ae as g,
  Dt as h,
  Ut as i,
  po as j,
  fo as k,
  Lo as l,
  xe as m,
  ue as n,
  $t as o,
  jt as p,
};
//# sourceMappingURL=chunk-CFBVJ4C5.mjs.map
