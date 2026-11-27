import {
  $e as he,
  Bd as Tt,
  Ce as Ot,
  Gd as Ft,
  Ia as d,
  Ke as Wt,
  Od as Pt,
  Pd as Dt,
  Qd as Rt,
  Sd as K,
  af as Lt,
  ff as ye,
  gf as Ie,
  he as j,
  id as N,
  me as ge,
  pe as At,
  ve as kt,
} from "chunk-WKXIZXJ4.mjs";
import {
  Aa as Y,
  Ya as ht,
  dl as fe,
  fc as M,
  gl as P,
  hl as wt,
  ik as xt,
  kc as yt,
  kk as Z,
  kl as St,
  ll as Nt,
  sl as Ct,
  vg as It,
} from "chunk-BP2ZYPEN.mjs";
import {
  $a as lt,
  La as st,
  Mi as ce,
  S as Ze,
  jd as pt,
  la as tt,
  oa as $,
  pf as ft,
  tm as y,
  va as rt,
} from "chunk-RE42INF2.mjs";
import {
  $d as S,
  Af as Je,
  De as Be,
  Eq as f,
  Fg as at,
  Fq as g,
  Gq as pe,
  Ie as Xe,
  Jg as V,
  Kg as se,
  Lf as Qe,
  Mq as ue,
  Nh as ct,
  Si as ut,
  Uf as et,
  Wf as G,
  a as A,
  ab as W,
  ai as le,
  bb as L,
  bi as de,
  cb as B,
  cf as $e,
  db as Ee,
  ef as ne,
  ff as Ye,
  ib as Me,
  ih as nt,
  kb as ze,
  kc as X,
  kf as Ke,
  kg as ot,
  kj as h,
  l as ie,
  li as me,
  ng as it,
  ob as Ue,
  pb as He,
  qb as qe,
  re as F,
  t as Le,
  uo as gt,
  xe as ae,
  xf as je,
} from "chunk-3GNDJY2L.mjs";
import { B as I, i as Ge } from "chunk-GV47JEYI.mjs";
import { a as Vt } from "chunk-D3SZBJZX.mjs";
import { c as b } from "chunk-FH36ATMQ.mjs";
import { a as Gt } from "chunk-K6L5GVTR.mjs";
import { a as ve } from "chunk-DWEQS5LX.mjs";
import { g as bt } from "chunk-FEH5ILSY.mjs";
import { k as C, l as _, p as E, q as dt } from "chunk-XWVB37KR.mjs";
import { a as k, b as O } from "chunk-WRBBN7SY.mjs";
import { a as vt } from "chunk-RNHTTH2C.mjs";
import { h as re } from "chunk-EHED2EQW.mjs";
import { b as mt } from "chunk-AYNVEX5D.mjs";
import { g as Ve, p as _e } from "chunk-ARJ7WQTJ.mjs";
import { o as We } from "chunk-HTBRLWIL.mjs";
import { b as w, j as q } from "chunk-EAUMDN6M.mjs";
import { b as u } from "chunk-4JY5UMT2.mjs";
var _t = ({ naturalWidth: t, naturalHeight: e }) => ({
  nonZeroNaturalWidth: t === 0 ? 300 : t,
  nonZeroNaturalHeight: e === 0 ? 150 : e,
});
var To = {
  cm: 96 / 2.54,
  mm: 96 / 2.54 / 10,
  Q: 96 / 2.54 / 40,
  in: 96,
  pc: 96 / 6,
  pt: 96 / 72,
  px: 1,
  em: 16,
  ex: 8,
  ch: 8,
  rem: 16,
};
function J(t) {
  if (!t) return null;
  let e = /(-?[\d.]+)([a-z%]*)/u.exec(t);
  if (!e) return null;
  let [o, i, a] = e;
  if (i === void 0 || a?.startsWith("%")) return null;
  let r = Math.round(parseFloat(i) * ((a && To[a]) || 1));
  return r <= 0 ? 0 : r;
}
function Fi(t) {
  let e = Fo(t);
  if (!e) throw Error("Invalid SVG");
  let o = J(e.getAttribute("width")),
    i = J(e.getAttribute("height"));
  if (o !== null && i !== null) return { width: o, height: i };
  let a = e.getAttribute("viewBox");
  if (a) {
    let r = a.split(" "),
      n = J(r[2]),
      s = J(r[3]);
    if (n !== null && s !== null) {
      let l = s !== 0 ? n / s : 2;
      return o !== null && i === null
        ? { width: o, height: o / l }
        : i !== null && o === null
          ? { width: i * l, height: i }
          : { width: n, height: s };
    }
  }
  return { width: o ?? 300, height: i ?? 150 };
}
function Fo(t) {
  let e = ct(t, "image/svg+xml"),
    o = e.rootElement || e.childNodes[0];
  if (o?.nodeName.toUpperCase() === "SVG") return o;
}
var Po = 5e4,
  Do = 'xlink:href="data:image/',
  Et = /xlink:href=['"]data:image\/[^;]+;base64,([A-Za-z\d+=/]+)/gu;
function Pi(t) {
  return t.length > Po || t.includes(Do);
}
function Mt(t) {
  let e = 0,
    o;
  for (; (o = Et.exec(t));) {
    let [, i] = o;
    (u(i, "The image regex must have a capture group for the image base64 data"), (e += i.length));
  }
  return (
    (Et.lastIndex = 0),
    e < 50 * 1024
      ? !1
      : (b({
          key: "svg-large-raster-image",
          type: "add",
          variant: "error",
          primaryText: "SVGs with raster images",
          secondaryText: "are not supported.",
          duration: 5e3,
          extraAction: {
            title: "Learn more",
            onClick() {
              Gt(
                "https://www.framer.com/help/articles/understanding-and-fixing-the-svgs-with-large-images-inside-are-not-supported-error/"
              );
            },
          },
        }),
        !0)
  );
}
function xe(t, e, o) {
  let { nonZeroNaturalWidth: i, nonZeroNaturalHeight: a } = _t(t.imageSize);
  return ut({
    identifier: t.filename,
    preferredSize: e,
    intrinsicSize: { width: i, height: a },
    originalFilename: t.originalFilename,
    presetName: o,
  });
}
function ki(t) {
  let e = t[0];
  return e?.filename ? xe(e, e.preferredSize) : null;
}
function Wi(t, e, o, i) {
  let a = { ...e.draftOrCurrent().replicaInfo },
    r = { ...a.overrides };
  ((a.overrides = r), (r[o] = { ...r[o], ...i }), e.set({ replicaInfo: a }, t));
}
function zt(t, e, o) {
  let i = { ...e.draftOrCurrent().replicaInfo },
    a = { ...i.overrides };
  i.overrides = a;
  for (let r in o) a[r] = { ...a[r], ...o[r] };
  e.set({ replicaInfo: i }, t);
}
function Ut(t, e, o, i, a) {
  if (X(i)) return;
  let r = at(e) ? 2 : 0,
    n = A(o.x, r),
    s = A(o.y, r);
  if (
    (se(a.x)
      ? ((a.x = n), (a.y = s))
      : (!O(a.x) && a.x !== n && (a.x = k), !O(a.y) && a.y !== s && (a.y = k)),
    !$(e) || !i)
  )
    return;
  let l = ht(t, e);
  if (!l?.positioning) return;
  let m = l.positioning,
    c = A(m.width - ie.maxX(o), r),
    x = A(m.height - ie.maxY(o), r);
  se(a.right)
    ? ((a.right = c), (a.bottom = x))
    : (!O(a.right) && a.right !== c && (a.right = k),
      !O(a.bottom) && a.bottom !== x && (a.bottom = k));
}
var p = {
  padding: 0,
  gridRowCount: 2,
  gridColumnCount: 2,
  gridRowHeight: 200,
  gridColumnWidth: 200,
  gridColumnMinWidth: 50,
};
Object.freeze(p);
function Sr(t) {
  switch (t) {
    case 23:
      return 0;
    case 24:
      return 1;
    case 26:
      return 4;
    case 27:
      return 3;
    case 25:
    case 28:
      return 2;
    case 22:
      return 5;
  }
}
var Bt = 10,
  Q = (t = "horizontal", e = !0, o) => {
    let i = o?.stores.persistedUserDefaults.layoutGap ?? Bt;
    return {
      layout: "stack",
      stackDirection: t,
      stackDistribution: "start",
      stackAlignment: "center",
      gap: i,
      stackWrapEnabled: !1,
      paddingPerSide: !1,
      padding: e ? i : p.padding,
      paddingTop: p.padding,
      paddingBottom: p.padding,
      paddingLeft: p.padding,
      paddingRight: p.padding,
    };
  },
  Ro = {
    gridItemFillCellWidth: !0,
    gridItemFillCellHeight: !0,
    gridItemHorizontalAlignment: "center",
    gridItemVerticalAlignment: "center",
    gridItemColumnSpan: 1,
    gridItemRowSpan: 1,
  },
  Ao = (t) => ({
    layout: "grid",
    gridColumnCount: p.gridColumnCount,
    gridAlignment: "center",
    gridColumnWidthType: "minmax",
    gridColumnWidth: p.gridColumnWidth,
    gridColumnMinWidth: 50,
    gridRowHeightType: "auto",
    gridRowCount: p.gridRowCount,
    gridRowHeight: p.gridRowHeight,
    gridType: void 0,
    gap: t?.stores.persistedUserDefaults.layoutGap ?? Bt,
    paddingPerSide: !1,
    padding: p.padding,
    paddingTop: p.padding,
    paddingBottom: p.padding,
    paddingLeft: p.padding,
    paddingRight: p.padding,
  }),
  ko = "#BDF",
  Xt = (t, e = {}, o = {}) => {
    let { source: i } = o;
    return Oo(t, e, ko, i);
  };
function Oo(t, e, o, i) {
  i && bt("layout_frame", { source: i });
  let a = { fillEnabled: !0, fillColor: o };
  return (
    L(t) &&
      !t.stackWrapEnabled &&
      (t.widthType !== 2 && ((a.width = 1), (a.widthType = 3)),
      t.heightType !== 2 && ((a.height = 1), (a.heightType = 3))),
    Object.assign(a, e),
    new d(a)
  );
}
var Nr = (t, e) => {
    switch (t) {
      case 0:
      case 1: {
        ((e.layout = "stack"), (e.stackDirection = t === 0 ? "vertical" : "horizontal"));
        break;
      }
      case 2:
      case 3:
      case 4:
        e.overflow = "clip";
        break;
    }
  },
  Wo = (t, e, o, i, a, r) => {
    let n = new d({ ...Q(o, a, t), fillEnabled: !1, ...e });
    u(L(n));
    let s = r ? { widthType: 0, width: r.width, heightType: 0, height: r.height } : void 0;
    for (let l = 0; l < i; l++) {
      let m = Xt(n, s);
      n.addChild(m);
    }
    return n;
  },
  Lo = (t, e, o) => {
    if (!t || !C(e)) return;
    let i = C(o) ? o : 0,
      a = e - i,
      r = Math.floor(a / 3),
      n = e - i - r;
    return { smallHeight: r, tallHeight: n };
  },
  Ht = (t, e, o, i) => {
    let a = new d({ ...Ao(t), fillEnabled: !1, ...e });
    u(B(a));
    let r = e.gridType === ae,
      n = Lo(r, C(e.height) ? e.height : void 0, C(a.gap) ? a.gap : void 0);
    for (let s = 0; s < o; s++) {
      let l = {};
      if (n) {
        let x = s === 0 || s === o - 1 ? n.tallHeight : n.smallHeight;
        Object.assign(l, { heightType: 0, height: x, gridItemFillCellHeight: void 0 });
      } else
        switch (i) {
          case 3:
            s === 0 && (l.gridItemRowSpan = 2);
            break;
          case 4:
            s + 1 === o && (l.gridItemColumnSpan = 2);
            break;
          default:
            break;
        }
      let m = Xt(a, { ...Ro, ...l });
      a.addChild(m);
    }
    return (r && a.setProp("heightType", 2), a);
  },
  Cr = (t, e, o, i = !1) => {
    if (e === 2) return Ht(t, o, i ? 0 : 4);
    if (e === 3 || e === 4) return Ht(t, o, i ? 0 : 3, e);
    let a = i ? 0 : 2;
    return Wo(t, o, o.stackDirection ?? "horizontal", a, !1);
  },
  $t = tt.width,
  Go = (t, e, o, i, a, r) => {
    let n = { x: V, y: V, right: V, bottom: V };
    (Ut(t, e, o, i, n),
      C(n.x) && C(n.right) && a - n.x - n.right < 200 && ((r.left = 0), (r.right = 0)));
  },
  Vo = (t, e) => {
    (t.stackDirection === "horizontal" && !t.stackWrapEnabled && (e.stackDirection = "vertical"),
      t.stackWrapEnabled && t.stackDistribution === "start" && (e.stackDistribution = "center"));
  },
  _o = (t) => {
    let e = {};
    return (
      t.children?.forEach((o) => {
        if (!rt(o)) return;
        let i = o.getPrimaryId();
        e[i] = { maxWidth: "100%" };
      }),
      e
    );
  },
  Eo = (t, e) => {
    C(t.gridColumnCount) && (e.gridColumnCount = 1);
  },
  Mo = (t, e, o, i, a, r) => {
    (Go(t, e, o, i, a, r), !(a > $t) && (L(e) && Vo(e, r), B(e) && Eo(e, r)));
  },
  zo = (t, e, o, i, a, r) => {
    let n = e.getPrimaryId(),
      s = {};
    if ((Mo(t, e, o, i, a, s), (r[n] = s), Xe(e) && e.stackWrapEnabled && a <= $t)) {
      let m = _o(e);
      for (let c in m) r[c] = { ...r[c], ...m[c] };
    }
  };
function br(t, e, o) {
  let i = t.tree.getNode(e);
  if (!i || !Ee(i)) return;
  let a = t.tree.get(o);
  if (!a || !Qe(a) || !G(a)) return;
  let r = t.tree.getScopeNodeFor(a);
  if (!r || !ze(r)) return;
  let n = t.tree.getRect(i),
    s = r.getBreakpointValues();
  for (let l in s) {
    if (l === o) continue;
    let m = t.tree.get(l);
    if (!m || !je(m) || !ot(m)) continue;
    let c = {};
    (zo(t.tree, i, n, a, m.width, c), zt(t.tree, m, c));
  }
}
function Tr(t, e, o, i = t.getParent(o.id), a = lt(t, o)) {
  let r = {
    width: { 2: !0, 0: !0, 3: !0, 1: !0, 4: !0, 5: !0 },
    height: { 2: !0, 0: !0, 3: !0, 1: !0, 4: !0, 5: !0 },
  };
  if (
    (!i || !$(o) || (Tt(o) && o.autoSize === !0) || Ze(o)
      ? ((r.width[1] = !1),
        (r.height[1] = !1),
        (r.width[3] = !1),
        (r.height[3] = !1),
        (r.width[4] = !1),
        (r.height[4] = !1))
      : B(i)
        ? Y(o, i)
          ? ((r.width[3] = !0), (r.height[3] = i.gridRowHeightType !== "fit" && i.gridType !== ae))
          : ((r.width[3] = !1), (r.height[3] = !1))
        : L(i)
          ? (Y(o, i) || (r.width[3] = !1), Y(o, i) || (r.height[3] = !1))
          : ((r.width[3] = !1), (r.height[3] = !1)),
    It(o) &&
      Ve(o.textFitViewBoxSize) &&
      ((r.height[2] = !0),
      (r.width[2] = !1),
      (r.height[0] = !1),
      (r.height[1] = !1),
      (r.height[3] = !1),
      (r.height[4] = !1)),
    (!nt(o) || G(o)) && ((r.width[5] = !1), (r.height[5] = !1)),
    qe(o))
  ) {
    let s = o.getSupportedLayout(e);
    (le(s.width) || (r.width[2] = !1),
      le(s.height) || (r.height[2] = !1),
      de(s.width) || ((r.width[0] = !1), (r.width[1] = !1), (r.width[3] = !1), (r.width[4] = !1)),
      de(s.height) ||
        ((r.height[0] = !1), (r.height[1] = !1), (r.height[3] = !1), (r.height[4] = !1)));
  } else if (W(o)) {
    if (G(o)) {
      ((r.width[2] = !1),
        me(o) && ((r.height[0] = !1), (r.height[1] = !1), (r.height[3] = !1), (r.height[4] = !1)));
      let s = t.get(o.parentid);
      Me(s) && (r.height[2] = !1);
    }
    o.children.length === 0 && ((r.width[2] = !1), (r.height[2] = !1));
  } else W(o) || Ue(o) || He(o) || ((r.width[2] = !1), pt(o) || (r.height[2] = !1));
  return (
    Be(o) && _e(o.layout) && Je(o) && !et(o) && ((r.width[2] = !1), (r.height[2] = !1)),
    a || ((r.width[4] = !1), (r.height[4] = !1)),
    ((G(i) && st(i) && Le(i.heightType)) || me(i)) && ((r.height[3] = !1), (r.height[1] = !1)),
    X(i) && ((r.width[3] = !1), (r.width[1] = !1), (r.height[3] = !1), (r.height[1] = !1)),
    r
  );
}
async function we(t) {
  let e;
  try {
    let o = document.createElement("video");
    o.preload = "metadata";
    let i;
    return (
      typeof t == "string" ? (i = t) : (e = i = URL.createObjectURL(t)),
      await new Promise((a) => {
        (o.addEventListener("loadedmetadata", () => {
          let { videoWidth: r, videoHeight: n } = o;
          a(r > 0 && n > 0 ? { width: r, height: n } : void 0);
        }),
          o.addEventListener("error", () => a(void 0)),
          (o.src = i));
      })
    );
  } catch {
    return;
  } finally {
    e && URL.revokeObjectURL(e);
  }
}
var Uo = q("createService");
function Yt(t) {
  let e = (a) => {
      throw Error("createService Promise not set up");
    },
    o = new Promise((a) => {
      e = (r) => {
        (a(r),
          (e = (n) => {
            Uo.warn(
              "Services must only be initialized once, but createService resolve was called twice for promise",
              o
            );
          }));
      };
    });
  return {
    service: new Proxy(
      {},
      {
        get: (a, r) => {
          let n = new Error("Waiting for service timed out");
          return (...s) => {
            let l;
            return new Promise((m, c) => {
              (t !== void 0 &&
                (l = window.setTimeout(() => {
                  c(n);
                }, t * 1e3)),
                o
                  .then((x) => {
                    window.clearTimeout(l);
                    let T = x;
                    typeof T[r] == "function" ? m(T[r](...s)) : m(T[r]);
                  })
                  .catch(c));
            });
          };
        },
      }
    ),
    resolve: e,
  };
}
var Se = q("ChooseFileService");
function Ne({ silent: t = !1, quiet: e = !1 }) {
  return t
    ? vt
    : e
      ? (o) => {
          (o.type === "add" && o.variant !== "error") || b(o);
        }
      : (o) => b(o);
}
function Ho(t) {
  return t.type === "image";
}
function Ur(t) {
  return t.type === "video";
}
function Zt(t) {
  let e = t.properties?.image?.width,
    o = t.properties?.image?.height;
  return (
    u(e !== void 0 && o !== void 0, "Image asset missing width/height"),
    { naturalWidth: e, naturalHeight: o }
  );
}
var Ce = class {
    constructor(e, o) {
      this.api = e;
      this.assetService = o;
    }
    api;
    assetService;
    async deleteAssets({ keys: e }) {
      (await this.api.deleteAssets(e), this.assetService.deleteProjectAssets(e));
    }
    async uploadImage(
      e,
      {
        silent: o = !1,
        quiet: i = !1,
        maxFileSize: a,
        onExceedsCustomMaxSize: r,
        refreshAssetService: n = !0,
      } = {}
    ) {
      try {
        let s = Ne({ silent: o, quiet: i });
        if (!ft.includes(e.type)) {
          s({
            variant: "error",
            duration: 1 / 0,
            primaryText: "Unsupported image type.",
            secondaryText: "Try png or jpg.",
            type: "add",
          });
          return;
        }
        if (e.type === "image/svg+xml") {
          let m = await e.text();
          if (Mt(m)) return;
        }
        let l = await this.api.uploadAsset(e, {
          maxFileSize: a,
          onExceedsCustomMaxSize: r,
          onToast: s,
        });
        return l
          ? (n && (await this.assetService.refresh().catch(w)),
            {
              type: "image",
              asset: l,
              filename: _(l),
              originalFilename: l.name,
              url: E(l),
              imageSize: Zt(l),
            })
          : void 0;
      } catch (s) {
        if (o) throw s;
        (b({
          variant: "error",
          duration: 1 / 0,
          primaryText: "Couldn\u2019t add image.",
          secondaryText: "It may be too large.",
          type: "add",
        }),
          Se.reportError(s, { fileName: e.name, fileSize: e.size, fileType: e.type }));
      }
    }
    async uploadVideo(
      e,
      {
        silent: o = !1,
        quiet: i = !1,
        maxFileSize: a,
        onExceedsCustomMaxSize: r,
        refreshAssetService: n = !0,
      } = {}
    ) {
      try {
        let s = Ne({ silent: o, quiet: i }),
          l = await Promise.all([
            ve(we(e), 1e4, "Measuring the video took more than 10 seconds"),
            this.api.uploadAsset(e, { maxFileSize: a, onExceedsCustomMaxSize: r, onToast: s }),
          ]),
          [m, c] = l;
        return c
          ? (n && (await this.assetService.refresh().catch(w)),
            {
              type: "video",
              asset: c,
              filename: _(c),
              dimensions: m,
              originalFilename: c.name,
              url: E(c),
            })
          : void 0;
      } catch (s) {
        if (o) throw s;
        (b({
          variant: "error",
          duration: 1 / 0,
          primaryText: "Couldn\u2019t add video.",
          secondaryText: "Please retry.",
          type: "add",
        }),
          Se.reportError(s, { fileName: e.name, fileSize: e.size, fileType: e.type }));
      }
    }
    async uploadAssetByURL(e, { silent: o = !1, refreshAssetService: i = !0 } = {}) {
      let a = dt(e),
        n =
          (a && this.assetService.getAssetByFilename(a.filename)) ??
          (await this.api.uploadAssetByURL(e, o ? void 0 : b)),
        s = { asset: n, filename: _(n), originalFilename: n.name, url: E(n) };
      return (
        i && (await this.assetService.refresh().catch(w)),
        n.mimeType.startsWith("image/")
          ? { ...s, type: "image", imageSize: Zt(n) }
          : n.mimeType.startsWith("video/")
            ? {
                ...s,
                type: "video",
                dimensions: await ve(
                  we(s.url),
                  1e4,
                  "Measuring the video took more than 10 seconds"
                ).catch(() => {}),
              }
            : { ...s, type: "file" }
      );
    }
    async uploadFile(
      e,
      {
        silent: o = !1,
        quiet: i = !1,
        maxFileSize: a,
        onExceedsCustomMaxSize: r,
        refreshAssetService: n = !0,
      } = {}
    ) {
      let s = Ne({ silent: o, quiet: i }),
        l = await this.api.uploadAsset(e, {
          maxFileSize: a,
          onExceedsCustomMaxSize: r,
          onToast: s,
        });
      if (l)
        return (
          n && (await this.assetService.refresh().catch(w)),
          { type: "file", asset: l, filename: _(l), originalFilename: l.name, url: E(l) }
        );
    }
    async uploadImageByURL(e, { refreshAssetService: o = !0 } = {}) {
      let i = [];
      if (!e) return i;
      try {
        let a = await this.uploadAssetByURL(e.url, { refreshAssetService: o });
        (u(Ho(a)), i.push(a));
      } catch (a) {
        Se.warn("Failed to add image by URL:", a);
      }
      return i;
    }
  },
  { service: Kt, resolve: qo } = Yt();
function Hr(t, e) {
  qo(new Ce(t, e));
}
var jt = "https://app.framerstatic.com/apple-music@2x-QNINHCQB.png";
var Jt = "https://app.framerstatic.com/dotlottie@2x-PO7EYB72.png";
var Qt = "https://app.framerstatic.com/gif@2x-YJLRSG23.png";
var eo = "https://app.framerstatic.com/image-light@2x-ZNDSNRGK.png";
var to = "https://app.framerstatic.com/image@2x-J24ALEQ5.png";
var oo = "https://app.framerstatic.com/mp3-light@2x-7JFI5VH3.png";
var io = "https://app.framerstatic.com/mp3@2x-3HRSK7AW.png";
var ro = "https://app.framerstatic.com/podcasts@2x-3YVIB6RX.png";
var ao = "https://app.framerstatic.com/simplecast@2x-4KWTR2UC.png";
var no = "https://app.framerstatic.com/soundcloud@2x-A2MP7SBC.png";
var so = "https://app.framerstatic.com/spotify@2x-FVAZWFD4.png";
var lo = "https://app.framerstatic.com/video-light@2x-SALVCONI.png";
var mo = "https://app.framerstatic.com/video@2x-XC7DTFDW.png";
var be = {
    fillColor: "rgba(187, 187, 187, 0.2)",
    fillType: "color",
    fillEnabled: !0,
    borderEnabled: !0,
    borderPerSide: !1,
    borderWidth: 1,
    borderColor: "rgba(136, 136, 136, 0.2)",
    borderStyle: "solid",
    radius: 4,
    radiusIsRelative: !1,
    radiusPerCorner: !1,
    ...ce,
  },
  Te = {
    padding: 12,
    paddingPerSide: !1,
    radius: 10,
    fillColor: "rgba(187, 187, 187, 0.15)",
    fillType: "color",
    fillEnabled: !0,
    borderEnabled: !0,
    borderPerSide: !1,
    borderWidth: 1,
    borderColor: "rgba(136, 136, 136, 0.1)",
    borderStyle: "solid",
    formInputFontFamily: "Inter",
    formInputFontWeight: 400,
    formInputFontSize: it(14, "px"),
    formInputFontColor: "rgba(153, 153, 153, 1)",
    formInputFontSelector: "Inter",
    formInputFontStyle: "Regular",
    formInputFontLetterSpacing: 0,
    formInputFontLetterSpacingUnit: "em",
    formInputFontLineHeight: 1.2,
    formInputFontLineHeightUnit: "em",
    ...ce,
  },
  co = { ...Te, formInputIconColor: K };
function D(t) {
  let e = t === "next" ? g.nextPage : g.previousPage;
  return Z(e, void 0, f);
}
function uo(t) {
  return { ...Z(g.goToPage, void 0, f), payload: { [pe]: { type: "number", value: t } } };
}
function ca(t) {
  return xt(t) && t.controls.providerId?.value === f;
}
function pa(t) {
  switch (t.actionIdentifier) {
    case "framer/useCarouselNavigation": {
      let e = t.controls.direction?.value === "previous" ? "previous" : "next";
      return { ...D(e), identifier: t.identifier, meta: t.meta };
    }
    case "framer/useGoToCarouselPage": {
      let e = t.controls.page;
      return {
        ...Z(g.goToPage, t.identifier, f),
        meta: t.meta,
        ...(e && { payload: { [pe]: e } }),
      };
    }
    default:
      return;
  }
}
function Fa(t, e) {
  if (!Ye(e)) return [];
  let o = e.id;
  return [
    { label: "Previous", click: () => ai(t, o) },
    { label: "Next", click: () => si(t, o) },
    { label: "Pagination", click: () => di(t, o) },
  ];
}
function Fe(t, e) {
  let o = t.getNodeWithTrait(e, ne);
  if (o?.originalid) {
    let i = t.get(o.originalid);
    if (i && ne(i)) return i;
  }
  return o;
}
function ai(t, e) {
  let o = Fe(t.tree, e);
  if (!o) return;
  let i = ni();
  t.scheduler.process(() => {
    t.tree.insertNode(i, o.id);
  });
}
function z() {
  return F("boolean", S(g.activeItemIndex, f), [
    { type: "valueTransform", id: I(), name: "isSet" },
  ]);
}
function ni() {
  return new d({
    name: "Previous",
    visible: z(),
    layout: "stack",
    stackAlignment: "center",
    stackDistribution: "center",
    heightType: 2,
    widthType: 2,
    padding: 10,
    position: "absolute",
    onTap: [D("previous")],
    children: new h([new N({ html: "<span>Previous</span>", heightType: 2, widthType: 2 })]),
  });
}
function si(t, e) {
  let o = Fe(t.tree, e);
  if (!o) return;
  let i = li();
  t.scheduler.process(() => {
    t.tree.insertNode(i, o.id);
  });
}
function li() {
  return new d({
    name: "Next",
    visible: z(),
    layout: "stack",
    stackAlignment: "center",
    stackDistribution: "center",
    heightType: 2,
    widthType: 2,
    padding: 10,
    position: "absolute",
    onTap: [D("next")],
    children: new h([new N({ html: "<span>Next</span>", heightType: 2, widthType: 2 })]),
  });
}
function di(t, e) {
  let o = Fe(t.tree, e);
  if (!o) return;
  let i = mi();
  t.scheduler.process(() => {
    t.tree.insertNode(i, o.id);
  });
}
function mi(t = {}, e = {}) {
  let o = I(),
    i = new d({
      id: o,
      name: "Dot",
      repeatArray: S(g.dots, f),
      height: 10,
      width: 10,
      radius: 10,
      opacity: F("number", S(ue, o), [
        { id: I(), type: "valueTransform", name: "equals", value: S(g.activeItemIndex, f) },
        {
          id: I(),
          type: "valueTransform",
          name: "convertFromBoolean",
          truthy: 1,
          falsy: 0.5,
          outputType: "number",
        },
      ]),
      fillColor: "rgb(64, 13, 13)",
      onTap: [uo(S(ue, o))],
      ...e,
    });
  return new d({
    name: "Progress",
    visible: z(),
    layout: "stack",
    stackAlignment: "center",
    stackDistribution: "center",
    heightType: 2,
    widthType: 2,
    padding: 5,
    gap: 5,
    radius: 20,
    position: "absolute",
    ...t,
    children: new h([i]),
  });
}
function fo(t) {
  let e = yt.boundingBox(t),
    o = t.pathSegments.map((i) => i.merge({ x: i.x - e.x, y: i.y - e.y }));
  return [{ pathClosed: t.pathClosed, pathSegments: o }, e];
}
function ho() {
  return new d({ width: 400, height: 300, fillEnabled: !0, fillType: "image", fillColor: "#333" });
}
function Fn() {
  return new fe({
    width: 300,
    height: 500,
    codeComponentIdentifier: "framer/Prototype",
    slotsAreChildNodes: re.isOn("componentSlotsAreChildNodes"),
  });
}
async function Pn(t, e, o) {
  o.stores.chromeStore.notifyTilingImageUploadStarted(e.id);
  let i = await Vt(t.imageUrl, t.originalFilename),
    a = await Kt.uploadImage(i, { silent: !0 });
  u(a, "Failed to upload the image");
  let r = xe(a);
  o.scheduler.process(() => {
    if (!W(e)) return;
    let n = o.tree.current(e);
    (n &&
      n.set({
        fillImage: r,
        fillImagePixelWidth: a.imageSize.naturalWidth,
        fillImagePixelHeight: a.imageSize.naturalHeight,
        fillImageResize: "tile",
        fillType: "image",
      }),
      o.stores.chromeStore.notifyTilingImageUploadFinished(e.id));
    let s = o.floatingWindowPopoutNavigation;
    s && !s.isPresenting("fill") && s.presentPopout("fill");
  });
}
async function ci(t, e) {
  if (We.isTest || t.stores.chromeStore.userIsViewer) return;
  let o = P[e],
    { module: i } = await t.stores.modulesStore.lookUpModule(wt(o));
  if (i?.files.module)
    return Ge(
      i.id,
      i.saveId,
      i.files.module,
      "exportSpecifier" in o && mt(o.exportSpecifier) ? o.exportSpecifier : "default"
    );
}
async function ee(t, e) {
  let o = await ci(t, e);
  if (o)
    return (
      t.stores.modulesStore.preloadExternalModules([o]).catch(w),
      t.stores.modulesStore.addExternalModulesToProject([o], { onTreeUpdate: () => {} }).catch(w),
      o.value
    );
}
async function pi(t) {
  return ee(t, "submitButton");
}
async function Dn(t) {
  return ee(t, "infiniteScroll");
}
async function Rn(t) {
  return ee(t, "loadMoreButton");
}
async function An(t) {
  return ee(t, "tab");
}
var te = {
  layout: "stack",
  gap: 10,
  stackDirection: "vertical",
  stackDistribution: "start",
  stackAlignment: "start",
  height: 40,
  heightType: 2,
  width: 1,
  widthType: 3,
  padding: 0,
  paddingPerSide: !1,
  fillEnabled: !1,
  htmlTag: "label",
};
function oe(t, e = "rgb(136, 136, 136)") {
  return `<p style="--framer-font-family: &quot;Inter&quot;, &quot;Inter Placeholder&quot;, sans-serif; --framer-font-weight: 500; --font-selector: SW50ZXItTWVkaXVt; --framer-text-color: ${e}; --framer-font-size: 12px;">${t}</p>`;
}
function go({ label: t, type: e, placeholder: o, name: i }) {
  let a = gt(e);
  return new d({
    ...te,
    children: new h([
      new N({ heightType: 2, widthType: 2, html: oe(t) }),
      new Ot({
        ...Te,
        formInputPlaceholderColor: At,
        height: 40,
        heightType: 0,
        width: 1,
        widthType: 3,
        formTextInputType: e,
        formInputPlaceholder: o,
        formInputName: i,
        ...(a ? { formInputIconColor: K } : {}),
      }),
    ]),
  });
}
function kn() {
  return new d({
    ...te,
    stackDirection: "horizontal",
    stackAlignment: "center",
    children: new h([
      new ge({
        height: 16,
        width: 16,
        aspectRatio: 1,
        heightType: 0,
        widthType: 0,
        formBooleanInputType: "checkbox",
        formInputName: "Newsletter",
        formBooleanInputValue: !1,
        ...be,
        ...Dt,
        ...Rt,
      }),
      new N({
        heightType: 2,
        widthType: 2,
        userSelect: "none",
        html: oe("Subscribe to Newsletter"),
      }),
    ]),
  });
}
function Pe(t, e, o, i = !1) {
  return new d({
    ...te,
    stackDirection: "horizontal",
    stackAlignment: "center",
    children: new h([
      new ge({
        formBooleanInputType: "radio",
        height: 16,
        width: 16,
        heightType: 0,
        widthType: 0,
        aspectRatio: 1,
        formInputName: e,
        formInputValue: o,
        formBooleanInputValue: i,
        ...be,
        radius: 8,
        ...Pt(),
      }),
      new N({ heightType: 2, widthType: 2, userSelect: "none", html: oe(t) }),
    ]),
  });
}
function ui() {
  let t = { ...j(), value: "", title: "Select\u2026", disabled: !0 };
  return new d({
    ...te,
    children: new h([
      new N({ heightType: 2, widthType: 2, html: oe("Location") }),
      new Wt({
        ...co,
        formInputRequired: !0,
        formInputName: "Location",
        formInputInvalidTextColor: kt,
        height: 40,
        heightType: 0,
        width: 1,
        widthType: 3,
        formSelectOptions: [
          t,
          { ...j(), value: "amsterdam", title: "Amsterdam" },
          { ...j(), value: "barcelona", title: "Barcelona" },
        ],
        formInputValue: t.id,
      }),
    ]),
  });
}
function On() {
  return new d({
    layout: "stack",
    gap: 10,
    name: "Radio Group",
    stackDirection: "vertical",
    stackDistribution: "start",
    stackAlignment: "start",
    heightType: 2,
    widthType: 3,
    width: 1,
    padding: 0,
    paddingPerSide: !1,
    fillEnabled: !1,
    children: new h([
      new N({
        heightType: 2,
        widthType: 2,
        html: '<p style="--framer-font-family: &quot;Inter&quot;, &quot;Inter Placeholder&quot;, sans-serif; --framer-font-weight: 500; --font-selector: SW50ZXItTWVkaXVt; --framer-text-color: rgb(136, 136, 136); --framer-font-size: 12px;">Radio</p>',
      }),
      Pe("Option 1", "Radio", "Option 1", !0),
      Pe("Option 2", "Radio", "Option 2"),
      Pe("Option 3", "Radio", "Option 3"),
    ]),
  });
}
var fi = { width: 280, height: 333 };
async function Wn(t) {
  let e = I(),
    o = new d({
      isFormContainer: !0,
      formSubmitButtonId: e,
      layout: "stack",
      gap: 20,
      width: fi.width,
      widthType: 0,
      heightType: 2,
      stackDirection: "vertical",
      paddingPerSide: !1,
      padding: 20,
      stackDistribution: "start",
      overflow: "hidden",
      stackAlignment: "start",
      fillEnabled: !1,
      children: new h([
        go({ label: "Name", type: "text", placeholder: "Jane Smith", name: "Name" }),
        go({ label: "Email", type: "email", placeholder: "jane@framer.com", name: "Email" }),
        ui(),
      ]),
    });
  return (gi(t, o, e), o);
}
function gi(t, e, o) {
  pi(t)
    .then((i) => {
      let a = yi(o, i);
      if (!t.tree.has(e.id)) {
        e.addChild(a);
        return;
      }
      t.scheduler.process(() => {
        t.tree.insertNode(a, e.id);
      });
    })
    .catch(w);
}
var hi = {
  formButtonSuccessVariant: "kkGSMI0fp",
  formButtonSuccessVariantEnabled: !0,
  formButtonPendingVariant: "zNkuqWxeD",
  formButtonPendingVariantEnabled: !0,
};
function yi(t, e) {
  return new fe({
    id: t,
    widthType: 3,
    heightType: 0,
    width: 1,
    height: 40,
    codeComponentIdentifier: e,
    ...hi,
    slotsAreChildNodes: re.isOn("componentSlotsAreChildNodes"),
  });
}
function Ln(t) {
  let e = Q("horizontal", !1, t),
    o = new d({
      width: 450,
      heightType: 2,
      ...e,
      ...Ke,
      tickerEffectVelocity: 50,
      fillEnabled: !1,
      overflow: "clip",
      radius: 10,
    }),
    i = "rgba(136, 136, 136, 0.1)",
    r = {
      width: 200,
      height: 200,
      ...e,
      stackDistribution: "center",
      fillColor: "rgba(187, 187, 187, 0.1)",
      fillEnabled: !0,
      fillType: "color",
      radius: 10,
    },
    n = new d(r);
  n.addChild(new Ie({ width: 80, height: 80, fillColor: i, radius: 8 }));
  let s = new d(r);
  s.addChild(new he({ width: 85, height: 85, fillColor: i, fillEnabled: !0, fillType: "color" }));
  let l = new d(r);
  return (
    l.addChild(
      new ye({
        width: 113,
        height: 109,
        polygonSides: 3,
        fillColor: i,
        fillEnabled: !0,
        fillType: "color",
        radius: 3,
        centered: !0,
      })
    ),
    o.addChild(n),
    o.addChild(s),
    o.addChild(l),
    o
  );
}
function Gn(t) {
  let e = Q("horizontal", !1, t),
    o = [
      new M({ x: 9, y: 2 }),
      new M({
        x: 5.75,
        y: 6.063,
        handleInX: 1.158,
        handleInY: -1.448,
        handleOutX: -0.439,
        handleOutY: 0.548,
        handleMirroring: "asymmetric",
      }),
      new M({
        x: 5.75,
        y: 7.937,
        handleInX: -0.439,
        handleInY: -0.548,
        handleOutX: 1.158,
        handleOutY: 1.448,
        handleMirroring: "asymmetric",
      }),
      new M({ x: 9, y: 12 }),
    ],
    i = new d({
      width: 450,
      heightType: 2,
      ...e,
      ...$e,
      carouselEffectLoop: !1,
      fillEnabled: !1,
      overflow: "clip",
      radius: 10,
    }),
    a = "rgba(136, 136, 136, 0.1)",
    n = {
      width: 0.82,
      widthType: 1,
      height: 200,
      ...e,
      stackDistribution: "center",
      fillColor: "rgba(187, 187, 187, 0.1)",
      fillEnabled: !0,
      fillType: "color",
      radius: 10,
    },
    s = new d(n);
  s.addChild(new Ie({ width: 80, height: 80, fillColor: a, radius: 8 }));
  let l = new d(n);
  l.addChild(new he({ width: 85, height: 85, fillColor: a, fillEnabled: !0, fillType: "color" }));
  let m = new d(n);
  (m.addChild(
    new ye({
      width: 113,
      height: 109,
      polygonSides: 3,
      fillColor: a,
      fillEnabled: !0,
      fillType: "color",
      radius: 3,
      centered: !0,
    })
  ),
    i.addChild(s),
    i.addChild(l),
    i.addChild(m));
  let c = {
      ...e,
      fillEnabled: !1,
      overflow: "clip",
      position: "absolute",
      widthType: 2,
      top: 0,
      bottom: 0,
      left: null,
      right: null,
      pointerEvents: "none",
    },
    x = (wo, U) => {
      let Re = U === "next" ? g.hasNext : g.hasPrevious,
        So =
          U === "previous"
            ? o
            : o.map((H) =>
                H.merge({
                  id: I(),
                  x: 14 - H.x,
                  handleInX: -H.handleInX,
                  handleOutX: -H.handleOutX,
                })
              ),
        [{ pathSegments: No }, Ae] = fo({ pathSegments: So, pathClosed: !1 }),
        ke = new Ft({ width: 14, height: 14, fillEnabled: !1 });
      ke.addChild(
        new Lt({
          pathSegments: No,
          pathClosed: !1,
          ...Ae,
          x: Ae.x + (U === "next" ? 1 : -1),
          fillEnabled: !1,
          strokeEnabled: !0,
          strokeWidth: 1,
          strokeColor: "rgba(136, 136, 136, 0.5)",
          lineJoin: "round",
          lineCap: "round",
        })
      );
      let Oe = new d({
        name: wo,
        visible: z(),
        backgroundBlur: 2,
        onTap: [D(U)],
        fillEnabled: !0,
        fillType: "color",
        fillColor: "rgba(230, 230, 230, 0.2)",
        layout: "stack",
        stackAlignment: "center",
        stackDistribution: "center",
        padding: 4,
        widthType: 2,
        heightType: 2,
        radius: 40,
        opacity: F("number", S(Re, f), [
          {
            type: "valueTransform",
            id: I(),
            name: "convertFromBoolean",
            truthy: 1,
            falsy: 0,
            outputType: "number",
          },
        ]),
        pointerEvents: F("enum", S(Re, f), [
          {
            type: "valueTransform",
            id: I(),
            name: "convertFromBoolean",
            truthy: "auto",
            falsy: "none",
            outputType: "enum",
          },
        ]),
      });
      return (Oe.addChild(ke), Oe);
    },
    T = new d({ ...c, name: "Right Controls", right: 12 });
  T.addChild(x("Next", "next"));
  let De = new d({ ...c, name: "Left Controls", left: 12 });
  return (De.addChild(x("Previous", "previous")), i.addChild(T), i.addChild(De), i);
}
function v(t, e, o) {
  let i = t.find((a) => a.key === e);
  return (u(i, `Missing ${o} insert item with key "${e}".`), i);
}
var Io = {
  key: "video",
  title: P.video.title,
  keywords: "player mp4 film trailer",
  previewImage: mo,
  previewImageLight: lo,
  previewAssetWidth: 60,
  previewAssetHeight: 40,
  intrinsicWidth: 200,
  intrinsicHeight: 112,
  moduleURL: P.video.moduleURL,
  exportSpecifier: P.video.exportSpecifier,
};
function ns() {
  return Ct(Io);
}
var yo = [
    {
      key: "image",
      title: "Image",
      keywords: "image png jpg jpeg webp photo",
      previewImage: to,
      previewImageLight: eo,
      previewAssetWidth: 60,
      previewAssetHeight: 40,
      intrinsicWidth: 400,
      intrinsicHeight: 300,
      hideTitle: !1,
      generateNodes: ho,
    },
    {
      key: "giphy",
      title: "GIF",
      keywords: "gif giphy",
      previewImage: Qt,
      previewAssetWidth: 30,
      previewAssetHeight: 38,
      intrinsicWidth: 400,
      intrinsicHeight: 300,
      moduleURL: y("Gif"),
      exportSpecifier: "Gif",
    },
  ],
  Ii = [
    {
      key: "dotlottie",
      title: "Dot Lottie",
      keywords: "animation lottie svg",
      previewImage: Jt,
      previewAssetWidth: 41,
      previewAssetHeight: 41,
      intrinsicWidth: 500,
      intrinsicHeight: 350,
      moduleURL: y("DotLottie"),
      exportSpecifier: "default",
    },
  ],
  R = [
    {
      key: "spotify",
      title: "Spotify",
      keywords: "music songs artist player",
      previewImage: so,
      previewAssetWidth: 40,
      previewAssetHeight: 40,
      intrinsicWidth: 280,
      intrinsicHeight: 350,
      moduleURL: y("Spotify"),
      exportSpecifier: "Spotify",
    },
    {
      key: "apple podcasts",
      title: "Apple Podcasts",
      displayTitle: "Podcasts",
      keywords: "music story radio",
      previewImage: ro,
      previewAssetWidth: 40,
      previewAssetHeight: 40,
      intrinsicWidth: 460,
      intrinsicHeight: 175,
      moduleURL: y("apple-podcasts"),
    },
    {
      key: "soundcloud",
      title: "SoundCloud",
      keywords: "music songs artist player",
      previewImage: no,
      previewAssetWidth: 60,
      previewAssetHeight: 40,
      intrinsicWidth: 500,
      intrinsicHeight: 300,
      moduleURL: `${y("soundcloud")}#Soundcloud`,
      exportSpecifier: "SoundCloud",
    },
    {
      key: "apple music",
      title: "Apple Music",
      keywords: "music songs artist player",
      previewImage: jt,
      previewAssetWidth: 40,
      previewAssetHeight: 40,
      intrinsicWidth: 400,
      intrinsicHeight: 150,
      moduleURL: y("apple-music"),
    },
    {
      key: "simplecast",
      title: "Simplecast",
      keywords: "podcast",
      previewImage: ao,
      previewAssetWidth: 40,
      previewAssetHeight: 40,
      intrinsicWidth: 400,
      intrinsicHeight: 200,
      moduleURL: y("simplecast"),
    },
    {
      key: "audio mp3",
      title: "MP3",
      keywords: "music player",
      previewImage: io,
      previewImageLight: oo,
      previewAssetWidth: 72,
      previewAssetHeight: 30,
      intrinsicWidth: 240,
      intrinsicHeight: 50,
      moduleURL: y("Audio"),
      exportSpecifier: "Audio",
    },
  ],
  ss = [
    v(yo, "image", "image"),
    Io,
    Nt,
    v(R, "audio mp3", "audio"),
    v(yo, "giphy", "image"),
    St,
    v(Ii, "dotlottie", "animation"),
    v(R, "spotify", "audio"),
    v(R, "apple music", "audio"),
    v(R, "soundcloud", "audio"),
    v(R, "apple podcasts", "audio"),
    v(R, "simplecast", "audio"),
  ];
var vo = "https://app.framerstatic.com/embed-light@2x-PS76WMQ2.png";
var xo = "https://app.framerstatic.com/embed@2x-6J66YCPC.png";
var fs = {
  key: "embed",
  title: "Embed",
  keywords: "iframe",
  previewImage: xo,
  previewImageLight: vo,
  previewAssetWidth: 42,
  previewAssetHeight: 42,
  intrinsicWidth: 600,
  intrinsicHeight: 400,
  moduleURL: y("Embed"),
};
export {
  Wi as a,
  zt as b,
  ca as c,
  pa as d,
  fo as e,
  _t as f,
  Fi as g,
  Fo as h,
  Pi as i,
  Mt as j,
  Ut as k,
  p as l,
  Sr as m,
  Q as n,
  Nr as o,
  Cr as p,
  zo as q,
  br as r,
  Tr as s,
  be as t,
  Te as u,
  co as v,
  xe as w,
  ki as x,
  we as y,
  Yt as z,
  Ho as A,
  Ur as B,
  Kt as C,
  Hr as D,
  Fa as E,
  Fn as F,
  Pn as G,
  Dn as H,
  Rn as I,
  An as J,
  oe as K,
  go as L,
  kn as M,
  ui as N,
  On as O,
  fi as P,
  Wn as Q,
  gi as R,
  hi as S,
  Ln as T,
  Gn as U,
  ns as V,
  ss as W,
  fs as X,
};
//# sourceMappingURL=chunk-TUTQPC7L.mjs.map
