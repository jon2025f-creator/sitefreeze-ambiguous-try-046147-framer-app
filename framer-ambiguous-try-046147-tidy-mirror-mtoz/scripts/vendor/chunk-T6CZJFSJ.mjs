import { e as Ne, f as Re } from "chunk-SDRCRI4L.mjs";
import { kj as x, lj as Ae, nj as U } from "chunk-R2R4DMTW.mjs";
import { a as be, b as N, c as we, d as Pe, e as _, f as Le, g as Te } from "chunk-CM2MOVMB.mjs";
import { d as Se, e as ve, g as G, h as m, j as A } from "chunk-KAGEVRIQ.mjs";
import { w as K, z as Y } from "chunk-MSZX2N3F.mjs";
import { a as Ie } from "chunk-I6Y2BWR3.mjs";
import { a as F, b as z, e as Ce, h as Be, i as R } from "chunk-JRJIXEN6.mjs";
import { i as me } from "chunk-UXYJ6WA4.mjs";
import { Ne as ge, Pe as C } from "chunk-OI2UHGTV.mjs";
import { a as q } from "chunk-VOXQOAXT.mjs";
import { Zm as ue, bl as le, qg as he } from "chunk-ZMQ5KVTE.mjs";
import { Jb as de, Kb as ce } from "chunk-DWJUKCZJ.mjs";
import { a as J, s as ye } from "chunk-VWQVUKFJ.mjs";
import { f as fe } from "chunk-MYK4KKPI.mjs";
import { a as h, c as $, d as pe } from "chunk-MXPUJWL6.mjs";
import { a as De } from "chunk-24G7FGVN.mjs";
import { e as D } from "chunk-Y3GZLMBF.mjs";
import { b as p } from "chunk-4JY5UMT2.mjs";
import { m as ie } from "chunk-I5EFRSXX.mjs";
import { i as w } from "chunk-WBI6GGAG.mjs";
var Ke = "last-active-branch:";
function ke(d) {
  return `${Ke}${d}`;
}
function Oe(d, t) {
  try {
    return d.getItem(t);
  } catch {
    return null;
  }
}
function Ee(d, t, e) {
  try {
    e === null ? d.removeItem(t) : d.setItem(t, e);
  } catch {}
}
function et(d) {
  let t = ke(d),
    e = Oe(sessionStorage, t) ?? Oe(localStorage, t);
  return e && e !== h ? e : null;
}
function _e(d, t) {
  let e = ke(d);
  (Ee(sessionStorage, e, t), Ee(localStorage, e, t === h ? null : t));
}
var Ye = "local-overlay/",
  Fe = "localOnly",
  ze = class {
    constructor(t) {
      this.mainStore = t;
      (p(t.branchId === h, "branch store registry must be seeded with the main store"),
        (this._activeBranchId = h),
        this.stores.set(h, t));
    }
    mainStore;
    _activeBranchId;
    stores = new Map();
    localOnlyLayers = new Map();
    localOnlyLayerOrder = [];
    localOnlyMetadataRowsByBranchId = new Map();
    reset() {
      for (let t of this.stores.values()) t.base?.detachBranch(t);
      ((this._activeBranchId = h),
        (this.stores = new Map([[h, this.mainStore]])),
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
      p(t !== h, "Cannot forget the main branch store");
      let e = this.stores.get(t);
      (e?.base?.detachBranch(e),
        this.stores.delete(t),
        this._activeBranchId === t && (this._activeBranchId = h));
    }
    evictInactiveStores(t, e) {
      let r = [],
        o = e === void 0 ? void 0 : new Set(e);
      for (let [s, a] of [...this.stores].reverse())
        s === h ||
          s === this._activeBranchId ||
          (o !== void 0 && !o.has(s)) ||
          t(s) ||
          a.permanentError !== null ||
          a.branches.length > 0 ||
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
    findFirstNonDeletedBranch(t) {
      if (!this.branchExists(t)) return h;
      let e = t;
      for (; e !== h;) {
        let r = this.getBaseId(e);
        if (typeof this.mainStore.getObjectKey(e, pe) != "number") return e;
        e = r;
      }
      return h;
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
      p(t !== h, "Cannot rebase the main branch store");
      let e = [];
      for (let [r, o] of this.stores) (r === t || qe(o, t)) && e.push([r, o]);
      for (let [r, o] of e) (o.base?.detachBranch(o), this.stores.delete(r));
      this.getDeepestMaterializedStore(this.getBaseId(t))?.resolveOverlayHierarchy();
      for (let [r] of e) this.getOrCreateStore(r);
    }
    rebaseStoresToMatchMetadata() {
      let t = [];
      for (let [e, r] of this.stores)
        e !== h && r.base?.branchId !== this.getBaseId(e) && t.push(e);
      for (let e of t)
        this.stores.get(e)?.base?.branchId !== this.getBaseId(e) && this.rebaseStore(e);
    }
    getLocalOnlyLayer(t) {
      return this.localOnlyLayers.get(t);
    }
    getOrCreateLocalOnlyLayer(t) {
      let e = this.localOnlyLayers.get(t);
      if (e) return e;
      let r = Je(t),
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
        this.localOnlyMetadataRowsByBranchId.get(r.branchId)?.forEach((a) => t.push(a));
        let s = this.getStore(r.branchId);
        for (let a of s.getSerializableRows()) t.push({ ...a, branchId: r.branchId });
      }
      return t;
    }
    isLocalOnlyBranch(t) {
      return this.mainStore.getObjectKey(t, Fe) === !0;
    }
    isLocalOnlyRow(t, e) {
      return this.isLocalOnlyBranch(t.branchId)
        ? !0
        : t.branchId === h && this.isLocalOnlyBranch(e.id);
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
      return t === h ? [h] : [...this.resolveBranchPath(this.getBaseId(t)), t];
    }
    getOrCreateStore(t) {
      let e = this.stores.get(t);
      if (e) return e;
      p(t !== h, "main store is missing from branch store registry");
      let o = this.getOrCreateStore(this.getBaseId(t)).branch(t);
      return (this.stores.set(t, o), o);
    }
    getBaseId(t) {
      return me(this.mainStore, t);
    }
    createLocalOnlyBranchMetadata(t, e) {
      let r = this.mainStore.getObjectKey(t, $);
      p(
        r === void 0 || this.isLocalOnlyBranch(t),
        "Local-only branch id collides with a persisted branch: " + t
      );
      let o = this.mainStore.length;
      this.mainStore.batch(() => {
        this.mainStore.importObject(t, { id: t, [$]: e, [Fe]: !0 });
      });
      let s = this.mainStore.getSerializableRows(o).filter((a) => a.id === t);
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
function Je(d) {
  return `${Ye}${encodeURIComponent(d)}`;
}
function qe(d, t) {
  for (let e = d.base; e; e = e.base) if (e.branchId === t) return !0;
  return !1;
}
var Ue = 300 * 1024 * 1024,
  L = {
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
  Ge = 2155905152,
  B = 4,
  b = {
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
  I = new Uint8Array(256);
I[b.SPACE] = 1;
I[b.TAB] = 1;
I[b.NEWLINE] = 1;
I[b.CARRIAGE_RETURN] = 1;
var X = class {
    bytes;
    u32View;
    constructor(t) {
      this.bytes = t;
      let e = Math.floor(t.length / B);
      this.u32View = new Uint32Array(t.buffer, t.byteOffset, e);
    }
    scanUtf16UnitsToByteOffset(t, e) {
      if (e === 0) return t;
      let r = this.tryFastAsciiScan(t, e);
      if (r !== null) return r;
      let o = 0,
        s = t;
      for (; o < e && s < this.bytes.length;) {
        let a = this.bytes[s];
        a < L.ASCII
          ? (o++, s++)
          : (a & L.TWO_BYTE) === L.TWO_BYTE_VALUE
            ? (o++, (s += 2))
            : (a & L.THREE_BYTE) === L.THREE_BYTE_VALUE
              ? (o++, (s += 3))
              : (a & L.FOUR_BYTE) === L.FOUR_BYTE_VALUE
                ? ((o += 2), (s += 4))
                : s++;
      }
      return s;
    }
    tryFastAsciiScan(t, e) {
      if (t % B !== 0) return null;
      let r = t / B,
        o = e,
        s = r;
      for (; o >= B && s < this.u32View.length;)
        if ((this.u32View[s] & Ge) === 0) ((o -= B), s++);
        else return null;
      return o === 0 ? s * B : null;
    }
  },
  Q = class {
    bytes;
    decoder = new TextDecoder();
    encoder = new TextEncoder();
    childrenKeyBytes = this.encoder.encode(F);
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
        a = this.parseShallowObject(t, s);
      if (r) {
        let i = o + this.childrenKeyBytes.length - 1,
          n = e - 1;
        a.children = this.parseChildrenArray(i, n);
      } else a.children = [];
      return a;
    }
    parseShallowObject(t, e) {
      let r = this.bytes.subarray(t, e),
        o = this.decoder.decode(r) + "]}";
      return JSON.parse(o);
    }
    parseChildrenArray(t, e) {
      return e - t < Ue ? this.parseJsonSlice(t, e) : this.parseChildrenByteLevel(t, e);
    }
    parseChildrenByteLevel(t, e) {
      let r = [],
        o = t + 1;
      for (; o < e && I[this.bytes[o]] === 1;) o++;
      for (; o < e - 1 && this.bytes[o] !== b.CLOSE_BRACKET;) {
        let s = o,
          a = 0,
          i = !1,
          n = !1;
        for (; o < e;) {
          let c = this.bytes[o];
          if (n) n = !1;
          else if (c === b.BACKSLASH) n = !0;
          else if (c === b.QUOTE && !n) i = !i;
          else if (!i) {
            if (c === b.OPEN_BRACE) a++;
            else if (c === b.CLOSE_BRACE && (a--, a === 0)) {
              o++;
              break;
            }
          }
          o++;
        }
        if (o > s)
          if (o - s >= Ue) r.push(this.parsePageInternal(s, o, !0));
          else {
            let u = this.bytes.subarray(s, o),
              y = this.decoder.decode(u),
              v = JSON.parse(y);
            r.push(v);
          }
        o = this.skipCommaAndWhitespace(o, e);
      }
      return r;
    }
    skipCommaAndWhitespace(t, e) {
      for (; t < e;) {
        let r = this.bytes[t];
        if (r === b.COMMA || this.isWhitespace(r)) t++;
        else break;
      }
      return t;
    }
    isWhitespace(t) {
      return I[t] === 1;
    }
    indexOfPattern(t, e, r) {
      if (t.length === 0) return e;
      if (t.length === 1) {
        for (let n = e; n < r; n++) if (this.bytes[n] === t[0]) return n;
        return -1;
      }
      let o;
      t === this.childrenKeyBytes
        ? (this.childrenKeyTable || (this.childrenKeyTable = this.createBadCharTable(t)),
          (o = this.childrenKeyTable))
        : (o = this.createBadCharTable(t));
      let s = r - e,
        a = t.length,
        i = 0;
      for (; i <= s - a;) {
        let n = a - 1;
        for (; n >= 0 && t[n] === this.bytes[e + i + n];) n--;
        if (n < 0) return e + i;
        {
          let c = this.bytes[e + i + n],
            u = o[c] ?? -1;
          i += Math.max(1, n - u);
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
  M = class {
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
        (this.scanner = new X(t)),
        (this.jsonParser = new Q(t)));
      let {
        root: r,
        version: o,
        header: s,
        childrenStartByteOffset: a,
      } = this.parseHeaderAndRoot();
      if (
        ((this.root = r),
        (this.version = o),
        (this.pageLengthsUtf16 = s),
        e.mustBeVersion && this.version !== e.mustBeVersion)
      )
        throw new Error(`Version mismatch: expected ${e.mustBeVersion}, got ${this.version}.
                Document version does not match required version.`);
      (this.calculatePageBoundaries(a), e.headerOnly || this.initializeShallowPages());
    }
    parseHeaderAndRoot() {
      let t = this.encoder.encode(F),
        e = this.jsonParser.indexOfPattern(t, 0, this.bytes.length);
      if (e === -1)
        throw new Error(
          `Document format error: '${F}' key not found in ${this.bytes.length} byte document`
        );
      let r = e + t.length,
        o = this.bytes.slice(0, r),
        s = this.decoder.decode(o) + "]}}",
        a = JSON.parse(s);
      if (a.v !== 1)
        throw new Error(`Invalid document version: expected ${1}, got ${a.v}
                Document may be from a different version or corrupted.`);
      if (!a.header || !Array.isArray(a.header))
        throw new Error(`Invalid document header: expected array, got ${typeof a.header}.
                Header contains page length information required for parsing.`);
      if (!a.root || typeof a.root != "object" || !a.root.__class)
        throw new Error(`Invalid document root: missing root object or __class property.
                Root: ${JSON.stringify(a.root).slice(0, 100)}...`);
      return (
        (a.root.children = []),
        {
          root: a.root,
          version: a.version,
          header: a.header,
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
        let a = { pageIndex: r, startByteOffset: e, endByteOffset: s, utf16UnitLength: o };
        (this.pageBoundaries.push(a), (e = s + 1));
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
      if (Be(this.root, "homePageNodeId") && typeof this.root.homePageNodeId == "string")
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
      for (let r of z) this.parseFullPage(r);
      let e = new Set();
      for (let r of this.dependencies) {
        let o = this.parseFullPage(r);
        o && R(o, o, e, !0);
      }
      for (let r of t) {
        let o = this.parseFullPage(r);
        o && R(o, o, e, !0);
      }
      return (this.parseDependentPages(e), this.root);
    }
    parseDependentPages(t) {
      let e = new Set();
      for (let r of t) {
        if (this.parsedPages.has(r)) continue;
        let o = this.parseFullPage(r);
        if (o) {
          R(o, o, e, !1);
          continue;
        }
        for (let s of this.parsePagesContainingId(r)) R(s, s, e, !1);
      }
      e.size > 0 && this.parseDependentPages(e);
    }
    getChunkingHints() {
      return this.chunkingHints;
    }
  };
var Xe = w("DocumentLoader"),
  Z = w("remote:verify"),
  H = class d {
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
        let o = new Ie(t);
        return new d(e, o, r);
      } else {
        let o = new M(t);
        return new d(e, o, r);
      }
    }
    readFirstPage() {
      let t = !1,
        e = [];
      if (
        (this.settings.activeNodeId &&
          (e.push(...this.parser.getPagesContainingId(this.settings.activeNodeId)),
          (t = e.some((r) => U(this.parser.getShallowPage(r))))),
        !t)
      ) {
        let r = this.parser.getShallowPages(),
          { maybeFirstPage: o } = x(r, this.parser.getHomePageNodeID());
        e.push(o.id);
        let s = 0,
          a;
        for (let i of r) {
          if ((de(i, !0) && s++, s > 1)) break;
          ce(i, !0) && (a ??= i.id);
        }
        s === 1 && a && a !== o.id && e.push(a);
      }
      return (
        Xe.debug("loadPartialDocument():", e),
        Te(this.parser, this.componentLoader, e, this.settings.treeServices)
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
        r = Z.isLoggingTraceMessages() ? [] : void 0,
        o = C(t, this.parser.root.id, { extraChecksAndFixes: !0, errors: e, warnings: r });
      if (
        (o && _(o, e),
        e.length > 0 &&
          Z.warn(
            "errors loading server tree: " +
              e.join(`
`)
          ),
        N(e),
        r &&
          r.length > 0 &&
          Z.trace(
            "warnings loading server tree: " +
              r.join(`
`)
          ),
        !!o)
      )
        return o;
    }
  };
var ee = w("app");
function wt(d, t) {
  let e,
    r = new XMLHttpRequest();
  r.open("GET", d.toString(), !1);
  try {
    (r.send(), (e = JSON.parse(r.responseText)));
  } catch (o) {
    ee.error(`Retrieving document \u201C${d}\u201D failed. (${o})`);
  }
  return te(e, t);
}
function Me(d) {
  ie.isTest ||
    d.forEach((t) => {
      ee.warn("[repaired]", t);
    });
}
function te(d, t) {
  let e = [];
  try {
    let r = we(d, t, e);
    return (Me(e), r);
  } catch (r) {
    throw (Me(e), ee.warn("tree failed to verify:", r), r);
  }
}
var l = w("DocumentLoader"),
  k = 10,
  O = 1e3;
function T(d) {
  return d < 1024 * 0.75
    ? `${Math.round(d)}b`
    : d < 1024 * 1024 * 0.75
      ? `${(d / 1024).toFixed(2)}kb`
      : `${(d / 1024 / 1024).toFixed(2)}Mb`;
}
function S(d) {
  return d < 200
    ? `${d.toFixed(1)}ms`
    : d < 20 * 1e3
      ? `${(d / 1e3).toFixed(3)}s`
      : `${Math.round(d / 1e3)}s`;
}
var j = class extends Se.default {
  constructor(e, r, o, s) {
    super();
    this.componentLoader = e;
    this.treeVersion = r;
    this.documentURL = o;
    this.settings = s;
    ((this.scheduler = new Re(s.isUserIdleCallback)),
      l.debug("new:", this.treeVersion, this.documentURL));
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
      l.debug("pauseLoadingScopes"),
      this.updatePauseResumeState());
  }
  resumeLoadingScopes() {
    this.loadingScopesPaused &&
      ((this.loadingScopesPaused = !1),
      l.debug("resumeLoadingScopes"),
      this.updatePauseResumeState());
  }
  prioritizeLoadingAllData(e) {
    let r = "preload" in e && e.preload;
    if (r) return () => {};
    let o = performance.now(),
      s = this.numberOfScopesToLoad();
    ((this.loadAllDataPriority = Math.max(1, this.loadAllDataPriority + 1)),
      l.debug("prioritizeLoadingScopes:", this.loadAllDataPriority),
      this.updatePauseResumeState());
    let a = r || ("doNotTrack" in e && e.doNotTrack),
      i = !1,
      n = a
        ? void 0
        : this.afterAllDataLoaded(() => {
            if (i) return;
            p("operationName" in e, "operationName is required");
            let y = performance.now() - o;
            fe("fulltree_force_load", {
              operationName: e.operationName,
              durationMs: Math.round(y),
              background: e.operationInBackground,
              shallowScopesCount: s,
            });
          }),
      c = this.afterAllDataLoaded(() => {
        if (i) return;
        p(!("preload" in e), "preload should never load all data");
        let u = {
          operationName: e.operationName,
          durationMs: Math.round(performance.now() - o),
          background: e.operationInBackground,
          shallowScopesCount: s,
        };
        l.reportError(new Error("Full tree loaded"), u, { operationName: e.operationName });
      });
    return () => {
      i || ((i = !0), n?.(), c(), this.stopPrioritizingLoadingAllData());
    };
  }
  stopPrioritizingLoadingAllData() {
    ((this.loadAllDataPriority -= 1),
      l.debug("stopPrioritizingLoadingScopes:", this.loadAllDataPriority),
      this.updatePauseResumeState());
  }
  debugPause() {
    this.debugPaused ||
      ((this.debugPaused = !0), l.debug("debugPause"), this.updatePauseResumeState());
  }
  debugResume() {
    this.debugPaused &&
      ((this.debugPaused = !1), l.debug("debugResume"), this.updatePauseResumeState());
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
      (l.debug("start"), m("parsingInit"), this.updatePauseResumeState());
      let e = performance.now(),
        r = await this.loadData();
      ((this.loadingDuration = performance.now() - e), m("documentBytesReady"));
      let o = typeof r == "string" ? r.length : r.byteLength;
      if (
        (A({
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
        !this.settings.partialParsing || (typeof r == "string" && !Ce(r)))
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
      m("parsingResume"));
    let e;
    for (; (e = this.nextScopeIdToLoad()) !== void 0;)
      (await this.loadScopeAsync(e), this.updatePauseResumeState(), await this.scheduler.yield());
    (await this.emitWrapped(() => {
      (p(this.tree, "tree must have been set"),
        this.tree.setService("loader", void 0),
        (this.loadedAllData = !0),
        this.emit("loadedAllData"));
    }),
      l.debug(
        "done",
        T(this.documentSize),
        "loading:",
        S(this.loadingDuration),
        "parsing:",
        S(this.parsingDuration)
      ));
  }
  async loadData() {
    if (this.settings.loadedData) return this.settings.loadedData;
    l.debug("Document in cache is not up to date. Tree version:", this.treeVersion);
    let e = this.settings.initData,
      r = e?.version === this.treeVersion,
      o = e?.prefetchPromise;
    if ((e && (e.prefetchPromise = void 0), r && o)) {
      l.debug("loadData: prefetch");
      let n = await o;
      if (
        (o
          .then((c) => c.duration)
          .then((c) => {
            m("dataLoad", c);
          })
          .catch(() => {}),
        await this.scheduler.resumeOrThrow(),
        n.buffer)
      ) {
        l.debug("loadData: prefetch bytes parser");
        let c = await n.buffer;
        return (
          await this.scheduler.resumeOrThrow(),
          n.status < 200 || n.status >= 300
            ? this.handleErrorAndRetry(n.status, "Error loading project data")
            : new Uint8Array(c)
        );
      }
      if (n.text) {
        let c = await n.text;
        return (
          await this.scheduler.resumeOrThrow(),
          n.status < 200 || n.status >= 300 ? this.handleErrorAndRetry(n.status, c) : c
        );
      }
    }
    l.debug("loadData: fetch");
    let s;
    this.settings.refreshAccessToken &&
      ((s = await this.settings.refreshAccessToken({})), await this.scheduler.resumeOrThrow());
    let a = await fetch(this.documentURL, s);
    await this.scheduler.resumeOrThrow();
    function i(n) {
      if (!n.body) return !1;
      let c = new URLSearchParams(window.location.search).has("bytes"),
        u = document.cookie.includes("bytes-parser=true"),
        y = parseInt(n.headers.get("Uncompressed-Content-Length") ?? "0", 10) > 2e8;
      return (c && (document.cookie = "bytes-parser=true; path=/;"), c || u || y);
    }
    if ((m("dataLoad"), a.status < 200 || a.status >= 300)) {
      let n = await a.text();
      return this.handleErrorAndRetry(a.status, n);
    }
    if (i(a)) {
      l.debug("loadData: using streaming parser");
      let n = await a.arrayBuffer();
      return new Uint8Array(n);
    } else {
      l.debug("loadData: using text parser");
      let n = await a.text();
      return (await this.scheduler.resumeOrThrow(), n);
    }
  }
  async handleErrorAndRetry(e, r) {
    let o = !1;
    try {
      o = JSON.parse(r).retry;
    } catch {}
    if (o && this.retryCount < k)
      return (
        l.debug("onErrorStatusLoaded, retry:", this.retryCount),
        await this.scheduler.sleep(this.retryCount * O + Math.random() * O),
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
    if (!D(o.version)) throw Error("cannot read document version");
    if (
      ((this.canvasTreeVersion = o.version),
      l.debug(
        "parseFullDocumentSync",
        this.canvasTreeVersion,
        T(this.documentSize),
        S(this.loadingDuration)
      ),
      this.emit("loadedDocumentVersion", o.version),
      this.scheduler.isDone())
    )
      return;
    let s = te(o, this.componentLoader);
    (this.emit("loadedFirstData", s),
      !this.scheduler.isDone() &&
        (this.emit("loadedAllData"),
        (this.parsingDuration += performance.now() - r),
        m("parsingFirstPage"),
        l.debug(
          "done",
          T(this.documentSize),
          "loading:",
          S(this.loadingDuration),
          "parsing:",
          S(this.parsingDuration)
        )));
  }
  hasLoadedScope(e) {
    if (this.removedByDiff.has(e)) {
      let s = this.tree?.latestTree().get(e);
      return ue(s) && s.isLoaded();
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
      let a = new De();
      ((o = a), this.addScopeLoadCallback(e, a.resolve), (s = r));
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
      o = await H.createPartialParser(e, this.componentLoader, this.settings);
    return (
      typeof e == "string" ? (this.documentSize = e.length) : (this.documentSize = 0),
      (this.canvasTreeVersion = o.canvasTreeVersion),
      (this.parsingDuration += performance.now() - r),
      l.debug(
        "loadDocumentVersion",
        this.canvasTreeVersion,
        typeof e == "string" ? T(this.documentSize) : "stream",
        S(this.loadingDuration)
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
      let a = o.get(s);
      a && (a.treeState.isShallowLoad = !0);
    }
    return (
      (this.parsingDuration += performance.now() - r),
      l.debug("loadFirstTree", S(this.parsingDuration)),
      await this.emitWrapped(() => {
        if (this.scheduler.isDone()) return;
        let s = performance.now();
        (o.setService("loader", this),
          (o.chunkingHints = e.chunkingHints),
          this.emit("loadedFirstData", o),
          m("parsingFirstPage"),
          (this.parsingDuration += performance.now() - s));
      }),
      o
    );
  }
  async loadScopeAsync(e) {
    let r = performance.now();
    (p(!this.currentLoadingScope, "already have a currently loading scope"),
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
        a = o.force(),
        i = a.take();
      if (!i) return;
      this.emit("loadedScope", i);
      let n = performance.now();
      ((this.parsingDuration += a.duration + n - s),
        this.signalScopeLoadCallbacks(i.id),
        l.debug(
          "loadScopeAsync:",
          e,
          S(a.duration),
          "scheduler priority:",
          this.scheduler.currentPriority()
        ),
        q("loadScopeAsync", r, n, "vekter"));
    });
  }
  createLoadingScope(e) {
    return (
      p(this.partialParser, "loadScope before the parser is available"),
      new re(e, this.partialParser)
    );
  }
  reloadScope(e) {
    return (this.scopesToLoad.add(e), this.loadScope(e));
  }
  invalidateScopeForReload(e) {}
  loadScope(e) {
    let r = performance.now();
    if (this.currentLoadingScope?.id === e) {
      let a = this.currentLoadingScope.force();
      return ((this.parsingDuration += a.duration), (this.currentLoadingScope = void 0), a.take());
    }
    if ((this.prioritizedScopeIds.delete(e), !this.scopesToLoad.has(e))) return;
    this.scopesToLoad.delete(e);
    let o = this.createLoadingScope(e).force(),
      s = performance.now();
    return (
      (this.parsingDuration += o.duration + s - r),
      l.debug("loadScope:", e, S(o.duration)),
      this.signalScopeLoadCallbacks(e),
      q("loadScope", r, s, "vekter"),
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
      let s = Ne({ batch: !0, continueAfter: "paint" });
      s && (await s);
      let a = this.partialParser.getParsedPageById(o);
      Ve(r, a);
    }
    for (let o of this.addedByDiff) r.add(o);
    for (let o of this.removedByDiff) r.delete(o);
    return (l.debug("nodeIdsToLoad", r.size, S(performance.now() - e)), r);
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
function Ve(d, t) {
  if (t && (d.add(t.id), !!t.children)) for (let e of t.children) Ve(d, e);
}
var E = class {
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
  re = class {
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
        (this.loadedScope = new E(e, performance.now() - t)),
        this.loadedScope
      );
    }
  };
function He(d) {
  return Map.groupBy(d, (t) => t.branchId ?? h);
}
var oe = class {
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
        f.debug("No object with id " + this.id + " in the store");
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
      return ((this.loadedScope = new E(r, o)), this.loadedScope);
    }
    buildPage(t) {
      if (!t) return;
      let e = [],
        r = f.isLoggingTraceMessages() ? [] : void 0,
        o = C(t, void 0, { extraChecksAndFixes: !0, errors: e, warnings: r });
      if (
        (o && _(o, e),
        e.length > 0 &&
          f.warn(
            "errors loading server tree: " +
              e.join(`
`)
          ),
        N(e),
        r &&
          r.length > 0 &&
          f.trace(
            "warnings loading server tree: " +
              r.join(`
`)
          ),
        !!o)
      )
        return o;
    }
  },
  f = w("CrdtDocumentLoader"),
  je = class {
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
      ((this.branches?.getStore(h) ?? this.mainStore).fromBuffer(t), this.branches?.reset());
    }
    reset() {
      ((this.branches?.getStore(h) ?? this.mainStore).reset(), this.branches?.reset());
    }
    install() {}
  },
  Qe = 2,
  We = class extends j {
    constructor(e, r, o, s, a, i) {
      super(o, s, a, i);
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
      !e || e === h || this.branches.switchActiveBranch(this.branches.findFirstNonDeletedBranch(e));
    }
    loadFirstCrdtTreeFromStore(e) {
      let r = [],
        o = [],
        a = this.store.getObjectWithShallowChildren(e.rootId, 1);
      p(a, "Root object not found in store");
      let i = [],
        n,
        c = this.settings.activeNodeId,
        u = c ? this.store.getObjectWithShallowChildren(c, 1) : void 0;
      for (; u && u.parentid !== e.rootId;) {
        if (!u.parentid) throw Error("active node has no parent");
        u = this.store.getObjectWithShallowChildren(u.parentid, 1);
      }
      U(u)
        ? i.push(u.id)
        : ((n = x(a.children ?? [], a?.homePageNodeId)), i.push(n.maybeFirstPage.id));
      let y = C(a, null, { extraChecksAndFixes: !0, errors: r, warnings: o });
      p(y, "Unable to load document");
      for (let g of y.children)
        ((g.treeState.isShallowLoad = !0), z.includes(g.id) && i.push(g.id));
      for (let g of i) {
        if (!g) continue;
        let W = this.store.getObject(g);
        if (!W) {
          f.debug("No value for " + g);
          continue;
        }
        let P = C(W);
        (p(P, "Scope node instance could not be created"),
          (P.treeState.isShallowLoad = !1),
          P.treeState.setSerializedCache(P, W),
          this.trackSerializedScopeCache(P));
        let ae = y.children.findIndex(($e) => $e.id === g);
        (ae >= 0 && y.children.splice(ae, 1, P), this.parsedIds.add(g));
        let ne = P;
        g === n?.maybeFirstPage.id &&
          n.firstDesignPage &&
          Ae(ne, n.firstDesignPage) !== ne &&
          i.push(n.firstDesignPage.id);
      }
      Pe(y, r);
      for (let g of y.children) this.parsedIds.has(g.id) || this.scopesToLoad.add(g.id);
      if (r.length > 0 || o.length > 0)
        for (let g of y.children) g.treeState.serialized = { hadError: !0 };
      let v = ge.createByAdoptingRoot(y, this.settings.treeServices);
      (v.verify(),
        (v = he.treeDidLoad(v, this.componentLoader, []).didNonLinearMove(this.componentLoader)));
      let se = [];
      return (
        be(v, se) &&
          (se.forEach((g) => {
            (r.push(`${g.id}: code component links itself via ${g.stack}`), Le(v, g.id, g.stack));
          }),
          (v = v.commit(this.componentLoader))),
        N(r),
        (v.chunkingHints = this.computeChunkingHints()),
        v.setService("loader", this),
        v
      );
    }
    computeChunkingHints() {
      if (this.documentSize < 0)
        return (
          f.warn("document size not set, skipping chunking hints:", this.documentSize),
          new Set()
        );
      let e = new Set();
      if (this.documentSize < 2e8) return e;
      let r = this.store.getHierarchy(),
        o = r.getRootId();
      if (!o) return e;
      let s = r.sizeWithoutReplicas(),
        a = this.documentSize / s,
        i = r.getChildrenIds(o);
      for (let n of i) {
        if (n === le) {
          e.add(n);
          continue;
        }
        r.getSubtreeCount(n) * a * Qe > 2e8 && e.add(n);
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
            this.projectId && this.branches && _e(this.projectId, this.branches.activeBranchId),
            this.emit("loadedFirstData", r),
            m("parsingFirstPage"),
            (this.parsingDuration += performance.now() - o));
        }),
        r
      );
    }
    async createTreeFromBuffer(e) {
      (p(e, "createTreeFromBuffer requires document bytes"), (this.documentSize = e.byteLength));
      let r = Y.loadVersionFromBuffer(e);
      if ((this.emit("loadedFormatVersion", r), this.scheduler.isCancelled())) {
        this.storeTarget.reset();
        return;
      }
      try {
        (this.storeTarget.loadSnapshot(e), m("buildStore"), this.switchToInitialBranch());
        let o = this.store.getObject("meta");
        if (!o) throw new Error("Meta field not found");
        if (!D(o.version)) throw Error("cannot read document version");
        if (
          ((this.canvasTreeVersion = o.version),
          f.debug(
            "createTree",
            this.canvasTreeVersion,
            T(this.documentSize),
            S(this.loadingDuration)
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
      let o = Y.loadVersionFromBuffer(e.snapshot);
      if (o < K)
        return (
          f.reportError(
            "cached binary format is behind current version, falling back to full document load",
            {
              version: this.treeVersion,
              cachedBinaryVersion: o,
              currentBinaryVersion: K,
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
          m("buildStore"),
          e.rows.length > 0 && (this.addCachedRowsToStores(e.rows), m("addedRows")));
        let s = e;
        if (((s.snapshot = void 0), r)) {
          let i = this.store.getHierarchy().computeTreeHash();
          if (r !== i)
            return (
              f.reportCriticalError("hierarchy hash mismatch, falling back to full document load", {
                version: this.treeVersion,
                hierarchyHash: r,
                computedHierarchyHash: i,
                documentSize: this.documentSize,
              }),
              this.settings.localCache?.abortAndClearCache(),
              this.storeTarget.reset(),
              !1
            );
        }
        this.switchToInitialBranch();
        let a = this.store.getObject("meta");
        if (!a) throw new Error("Meta field not found");
        if (!D(a.version)) throw Error("cannot read document version");
        return (
          (this.canvasTreeVersion = a.version),
          f.debug(
            "createTreeFromCachedState",
            this.canvasTreeVersion,
            T(this.documentSize),
            S(this.loadingDuration)
          ),
          this.emit("loadedDocumentVersion", a.version),
          this.scheduler.isCancelled()
            ? (this.storeTarget.reset(), !0)
            : ((this.tree = await this.loadFirstCrdtTree(a)), await this.loadAllScopesAsync(), !0)
        );
      } catch (s) {
        if (this.scheduler.isCancelled()) return !0;
        throw (this.storeTarget.reset(), s);
      }
    }
    addCachedRowsToStores(e) {
      function* r(n) {
        for (let c of n) for (let u of c.rows) yield u;
      }
      this.branches && p(this.store === this.branches.getStore(h), "main store mismatch");
      let o = He(r(e)),
        s = o.get(h);
      if ((s && this.store.addSerializableRows(s), o.delete(h), o.size === 0)) return;
      let a = this.branches;
      p(a, "branch registry is required to load cached branch rows");
      let i = [...o].sort(([n], [c]) => a.getBranchPath(n).length - a.getBranchPath(c).length);
      for (let [n, c] of i) a.getStore(n).addSerializableRows(c);
    }
    async start() {
      await this.scheduler.run(async () => {
        (f.debug("start"), m("parsingInit"), this.updatePauseResumeState());
        let e = [],
          r = performance.now(),
          o = this.settings.localCache;
        if (o && !o.aborted)
          try {
            let i = !!this.settings.initData?.prefetchSyncPromise;
            e.push(i ? "prefetch-sync" : "sync");
            let n = this.settings.initData?.prefetchSyncPromise ?? this.fetchTreeSync();
            (this.settings.initData && delete this.settings.initData.prefetchSyncPromise,
              n
                .then((u) => u.duration)
                .then((u) => m("dataLoad", u))
                .catch(() => {}));
            let c = await o.syncCrdtData(n);
            if (((n = void 0), c && c.version >= this.treeVersion)) {
              if (
                ((this.loadingDuration = performance.now() - r),
                m("documentBytesReady"),
                A({
                  format: "crdt",
                  strategy: c.syncStrategy,
                  sources: e,
                  snapshotBytes: c.snapshot.byteLength,
                  snapshotSource: c.snapshotSource,
                  cacheBackend: c.cacheBackend,
                  cachedRows: c.cachedRows,
                  cachedRowBytes: c.cachedRowBytes,
                  downloadedRows: c.downloadedRows,
                  downloadedRowBytes: c.downloadedRowBytes,
                }),
                await this.scheduler.yield(),
                await this.createTreeFromCachedState(c, c.hierarchyHash))
              )
                return;
              f.warn("local cache failed to create tree, falling back to full document load");
            } else
              c
                ? f.warn(
                    "local cache behind websocket init tree version, falling back to full document load"
                  )
                : f.warn("local cache failed, falling back to full document load");
          } catch (i) {
            if (this.storeTargetInstalled) throw (o.abortAndClearCache(), i);
            f.warn("tree/sync failed, falling back to full document load:", i);
          }
        let s = await this.loadCrdtData(e);
        ((this.loadingDuration = performance.now() - r),
          m("documentBytesReady"),
          A({
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
        let a = this.createTreeFromBuffer(s);
        ((s = void 0), await a);
      });
    }
    startFromStore() {
      let e = this.store.getObject("meta");
      if (!e) throw Error("Meta field not found");
      return (
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
      p(e, "fetchTreeSync requires localCache");
      let r = e.getCachedTreeVersion(),
        o = this.settings.initData?.syncURL;
      p(o, "Expected syncURL in tree init data");
      let s = new URL(o);
      s.searchParams.set("version", r.toString());
      let a = performance.now();
      G && !G.isComplete() && (a = ve);
      let i;
      this.settings.refreshAccessToken && (i = await this.settings.refreshAccessToken({}));
      let n = await fetch(s, i),
        c = "Sync-Strategy";
      return {
        status: n.status,
        headers: n.headers,
        duration: Promise.resolve(performance.now() - a),
        updates: n.headers.get(c) === "incremental" ? n.json() : void 0,
        snapshot: n.headers.get(c) === "snapshot" ? n.arrayBuffer() : void 0,
      };
    }
    async loadCrdtData(e = []) {
      if (this.settings.loadedData && this.settings.loadedData instanceof Uint8Array)
        return (f.debug("loadData: loadedData"), e.push("loaded-data"), this.settings.loadedData);
      let r = this.settings.initData;
      if ((f.debug("loadData: prefetch"), r?.prefetchPromise)) {
        let s = r.prefetchPromise;
        if ((delete r.prefetchPromise, r.version === this.treeVersion)) {
          e.push("prefetch-tree");
          let a = await s;
          if (
            (a.duration.then((i) => m("dataLoad", i)).catch(() => {}),
            a.status < 200 || a.status >= 300)
          )
            throw new Error(`Failed to fetch project data. Status code: ${a.status}`);
          if (a.buffer) {
            f.debug("loadData: prefetch bytes parser");
            let i = await a.buffer;
            return (await this.scheduler.yield(), new Uint8Array(i));
          }
        }
      }
      if (r?.prefetchSyncPromise) {
        let s = r.prefetchSyncPromise;
        delete r.prefetchSyncPromise;
        let a = await s;
        if (Number(a.headers.get("Tree-Version")) === this.treeVersion) {
          if (
            (a.duration.then((n) => m("dataLoad", n)).catch(() => {}),
            a.status < 200 || a.status >= 300)
          )
            throw new Error(`Failed to fetch project data. Status code: ${a.status}`);
          if (a.snapshot) {
            (e.push("prefetch-sync"), f.debug("loadData: prefetch sync snapshot"));
            let n = await a.snapshot;
            return (await this.scheduler.yield(), new Uint8Array(n));
          }
        }
      }
      (e.push("tree-download"), f.debug("loadData: fetch"));
      let o;
      this.settings.refreshAccessToken &&
        ((o = await this.settings.refreshAccessToken({})), await this.scheduler.yield());
      for (let s = 0; s < k; ++s)
        try {
          return await this.downloadTreeData(o);
        } catch (a) {
          if (!(a instanceof J) || !a.isTemporary || s === k - 1) throw a;
          (f.debug("temporary error loading document, retry:", s),
            await this.scheduler.sleep(s * O + Math.random() * O));
        }
      throw Error(`Failed to fetch project data after attempting ${k} times`);
    }
    async downloadTreeData(e) {
      let { signal: r } = this.scheduler,
        o;
      try {
        o = await fetch(this.documentURL, { ...e, signal: r });
      } catch (a) {
        throw r.aborted ? r.reason : ye(a);
      }
      if (o.status < 200 || o.status >= 300)
        throw new J({
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
      return new oe(e, this.store, (r) => this.trackSerializedScopeCache(r));
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
export { et as a, _e as b, ze as c, He as d, wt as e, te as f, j as g, je as h, We as i };
//# sourceMappingURL=chunk-T6CZJFSJ.mjs.map
