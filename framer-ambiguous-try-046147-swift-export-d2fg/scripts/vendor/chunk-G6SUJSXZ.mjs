import {
  $e as Q,
  Cf as Gt,
  Ge as At,
  He as Wt,
  Ie as Lt,
  Ke as J,
  Ra as m,
  Tf as ve,
  Uf as _t,
  Zf as Ie,
  _f as we,
  ae as b,
  ef as ye,
  hf as Ot,
  nf as Vt,
  te as Dt,
  uf as Mt,
  ye as Rt,
} from "chunk-NTK4GTQN.mjs";
import {
  Da as lt,
  Sa as ct,
  Un as wt,
  aa as Qe,
  bp as H,
  fb as pt,
  gp as St,
  hy as ge,
  ky as I,
  mx as Nt,
  my as f,
  ny as D,
  ox as K,
  oy as bt,
  pd as gt,
  rf as vt,
  ry as kt,
  sy as Ft,
  ta as nt,
  tj as ue,
  wa as j,
  wn as Y,
  wt as xt,
  zy as Tt,
} from "chunk-PD63MKYU.mjs";
import {
  Cf as ot,
  Eq as g,
  Fe as je,
  Fq as y,
  Gq as fe,
  Hg as dt,
  Ke as Ye,
  Lg as _,
  Mg as de,
  Mq as he,
  Nf as it,
  Ph as ht,
  Ui as yt,
  Wf as rt,
  Yf as G,
  a as W,
  be as N,
  ci as me,
  db as V,
  di as ce,
  eb as M,
  ef as Ke,
  fb as $,
  gb as Ue,
  gf as le,
  hf as Je,
  kh as mt,
  l as ne,
  lb as qe,
  mc as Z,
  mf as et,
  mg as at,
  mj as v,
  nb as Be,
  ni as pe,
  pg as st,
  rb as Xe,
  sb as $e,
  t as _e,
  tb as Ze,
  te as P,
  uo as It,
  ze as se,
  zf as tt,
} from "chunk-3BWVGHYB.mjs";
import { B as w, i as Ee } from "chunk-GV47JEYI.mjs";
import { a as zt } from "chunk-D3SZBJZX.mjs";
import { c as F } from "chunk-FH36ATMQ.mjs";
import { a as Et } from "chunk-K6L5GVTR.mjs";
import { a as Se } from "chunk-DWEQS5LX.mjs";
import { g as Pt } from "chunk-DDQ2IDFF.mjs";
import { g as k, h as E, l as z, m as ut } from "chunk-V6PD4VCB.mjs";
import { a as L, b as O } from "chunk-WRBBN7SY.mjs";
import { a as Ct } from "chunk-RNHTTH2C.mjs";
import { k as ae } from "chunk-AZMI4J4S.mjs";
import { b as ft } from "chunk-AYNVEX5D.mjs";
import { a as Ge } from "chunk-2FCXHKEL.mjs";
import { g as ze, p as He } from "chunk-ARJ7WQTJ.mjs";
import { o as Me } from "chunk-HTBRLWIL.mjs";
import { b as C, j as X } from "chunk-EAUMDN6M.mjs";
import { b as h } from "chunk-4JY5UMT2.mjs";
import { e as Ve } from "chunk-WLHSDIGQ.mjs";
var Ht = ({ naturalWidth: t, naturalHeight: e }) => ({
  nonZeroNaturalWidth: t === 0 ? 300 : t,
  nonZeroNaturalHeight: e === 0 ? 150 : e,
});
var Ho = {
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
function ee(t) {
  if (!t) return null;
  let e = /(-?[\d.]+)([a-z%]*)/u.exec(t);
  if (!e) return null;
  let [o, i, n] = e;
  if (i === void 0 || n?.startsWith("%")) return null;
  let r = Math.round(parseFloat(i) * ((n && Ho[n]) || 1));
  return r <= 0 ? 0 : r;
}
function qi(t) {
  let e = Uo(t);
  if (!e) throw Error("Invalid SVG");
  let o = ee(e.getAttribute("width")),
    i = ee(e.getAttribute("height"));
  if (o !== null && i !== null) return { width: o, height: i };
  let n = e.getAttribute("viewBox");
  if (n) {
    let r = n.split(" "),
      a = ee(r[2]),
      s = ee(r[3]);
    if (a !== null && s !== null) {
      let l = s !== 0 ? a / s : 2;
      return o !== null && i === null
        ? { width: o, height: o / l }
        : i !== null && o === null
          ? { width: i * l, height: i }
          : { width: a, height: s };
    }
  }
  return { width: o ?? 300, height: i ?? 150 };
}
function Uo(t) {
  let e = ht(t, "image/svg+xml"),
    o = e.rootElement || e.childNodes[0];
  if (o?.nodeName.toUpperCase() === "SVG") return o;
}
var qo = 5e4,
  Bo = 'xlink:href="data:image/',
  Ut = /xlink:href=['"]data:image\/[^;]+;base64,([A-Za-z\d+=/]+)/gu;
function Bi(t) {
  return t.length > qo || t.includes(Bo);
}
function qt(t) {
  let e = 0,
    o;
  for (; (o = Ut.exec(t));) {
    let [, i] = o;
    (h(i, "The image regex must have a capture group for the image base64 data"), (e += i.length));
  }
  return (
    (Ut.lastIndex = 0),
    e < 50 * 1024
      ? !1
      : (F({
          key: "svg-large-raster-image",
          type: "add",
          variant: "error",
          primaryText: "SVGs with raster images",
          secondaryText: "are not supported.",
          duration: 5e3,
          extraAction: {
            title: "Learn more",
            onClick() {
              Et(
                "https://www.framer.com/help/articles/understanding-and-fixing-the-svgs-with-large-images-inside-are-not-supported-error/"
              );
            },
          },
        }),
        !0)
  );
}
function xe(t, e, o) {
  let { nonZeroNaturalWidth: i, nonZeroNaturalHeight: n } = Ht(t.imageSize);
  return yt({
    identifier: t.filename,
    preferredSize: e,
    intrinsicSize: { width: i, height: n },
    originalFilename: t.originalFilename,
    presetName: o,
  });
}
function ji(t) {
  let e = t[0];
  return e?.filename ? xe(e, e.preferredSize) : null;
}
function Ki(t, e, o, i) {
  let n = { ...e.draftOrCurrent().replicaInfo },
    r = { ...n.overrides };
  ((n.overrides = r), (r[o] = { ...r[o], ...i }), e.set({ replicaInfo: n }, t));
}
function Bt(t, e, o) {
  let i = { ...e.draftOrCurrent().replicaInfo },
    n = { ...i.overrides };
  i.overrides = n;
  for (let r in o) n[r] = { ...n[r], ...o[r] };
  e.set({ replicaInfo: i }, t);
}
var d = Ve(Ge(), 1);
function Xt() {
  return (0, d.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    "aria-hidden": !0,
    role: "presentation",
    children: (0, d.jsxs)("g", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        (0, d.jsx)("path", {
          strokeWidth: "3",
          d: "M13.5 5.5h13a8 8 0 0 1 8 8v13a8 8 0 0 1-8 8h-13a8 8 0 0 1-8-8v-13a8 8 0 0 1 8-8",
        }),
        (0, d.jsx)("path", { strokeWidth: "3", d: "M11.5 21.5s2.5 5 8.5 5 8.5-5 8.5-5" }),
        (0, d.jsx)("path", {
          strokeWidth: "2",
          d: "M17 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M25 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0",
        }),
      ],
    }),
  });
}
function $t() {
  return (0, d.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    "aria-hidden": !0,
    role: "presentation",
    children: (0, d.jsx)("path", {
      fill: "currentColor",
      d: "M11.686 10.605a1.25 1.25 0 0 0-2.372 0l-6.25 18.75A1.25 1.25 0 0 0 4.25 31h12.5a1.25 1.25 0 0 0 1.186-1.645ZM5.984 28.5 10.5 14.953 15.016 28.5ZM33 12.875A8.125 8.125 0 1 0 24.875 21 8.134 8.134 0 0 0 33 12.875m-13.75 0a5.624 5.624 0 1 1 11.25 0 5.624 5.624 0 1 1-11.25 0M35.269 23.5H21.731c-.68 0-1.231.572-1.231 1.278v8.944c0 .706.551 1.278 1.231 1.278h13.538c.68 0 1.231-.572 1.231-1.278v-8.944c0-.706-.551-1.278-1.231-1.278m-1.23 8.944H22.962v-6.388h11.077Z",
    }),
  });
}
function Zt() {
  return (0, d.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    "aria-hidden": !0,
    role: "presentation",
    children: (0, d.jsx)("path", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.5",
      d: "M27.5 20a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m0 0c0 2.762 1.678 5 3.75 5S35 22.762 35 20a15 15 0 1 0-4.393 10.607M27.5 20v-6.25",
    }),
  });
}
function jt() {
  return (0, d.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    "aria-hidden": !0,
    role: "presentation",
    children: (0, d.jsx)("path", {
      d: "M 32.362 20.366 C 35.879 16.851 35.879 11.152 32.362 7.636 C 28.845 4.121 23.143 4.121 19.626 7.636 L 9.5 17.757 L 9.5 30.502 L 22.251 30.502 Z M 26.002 14.009 L 5 35 M 28.252 24.504 L 15.501 24.504",
      fill: "none",
      strokeWidth: "3",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
function Yt() {
  return (0, d.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    "aria-hidden": !0,
    role: "presentation",
    children: (0, d.jsxs)("g", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "2.5",
      children: [
        (0, d.jsx)("path", {
          d: "M6 20.25h28M20 5.75c-7.385 8.256-7.385 20.744 0 29 7.385-8.256 7.385-20.744 0-29",
        }),
        (0, d.jsx)("path", {
          d: "M5.5 20.25c0-8.008 6.492-14.5 14.5-14.5s14.5 6.492 14.5 14.5-6.492 14.5-14.5 14.5-14.5-6.492-14.5-14.5",
        }),
      ],
    }),
  });
}
function Kt() {
  return (0, d.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    "aria-hidden": !0,
    role: "presentation",
    children: (0, d.jsx)("path", {
      fill: "currentColor",
      d: "M20 4C11.166 4 4 11.166 4 20s7.166 16 16 16 16-7.166 16-16S28.834 4 20 4m0 28.794c-7.054 0-12.794-5.74-12.794-12.794S12.946 7.206 20 7.206 32.794 12.946 32.794 20 27.054 32.794 20 32.794m1.202-24.016-7.214 13.627h5.034v8.817l6.99-13.627h-4.81Z",
    }),
  });
}
function Jt() {
  return (0, d.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    "aria-hidden": !0,
    role: "presentation",
    children: (0, d.jsx)("path", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M30.359 10.548c4.014-1.443 6.862-1.762 7.506-.607 1.208 2.167-5.811 8.707-15.676 14.605-9.867 5.899-18.845 8.924-20.054 6.757-.641-1.151 1.038-3.535 4.229-6.4M19.616 34.5c-7.734 0-14.003-6.492-14.003-14.5S11.882 5.5 19.616 5.5c7.733 0 14.002 6.492 14.002 14.5s-6.269 14.5-14.002 14.5",
    }),
  });
}
function Qt() {
  return (0, d.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    "aria-hidden": !0,
    role: "presentation",
    children: (0, d.jsx)("path", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      d: "M12 12v16m0-16a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 16a4 4 0 1 0 0 8 4 4 0 0 0 0-8m12-4a4 4 0 1 1 8 0 4 4 0 0 1-8 0m0 0h-2c-5.523 0-10-4.477-10-10v-1",
    }),
  });
}
function eo() {
  return (0, d.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    "aria-hidden": !0,
    role: "presentation",
    children: (0, d.jsx)("path", {
      fill: "currentColor",
      d: "M18.226 1.67a1.592 1.592 0 0 1 0 2.266c-1.717 1.707-2.866 5.158-3.234 8.87-.179 1.805-.159 3.566.032 5.046q.082.63.196 1.151l10.705-10.63a1.62 1.62 0 0 1 2.281 0 1.59 1.59 0 0 1 0 2.266l-12.448 12.36a1.62 1.62 0 0 1-2.474-.228c-.797-1.158-1.24-2.808-1.459-4.512a25.8 25.8 0 0 1-.043-5.767q.072-.745.189-1.506a26 26 0 0 0-2.031 3.279c-1.023 2.005-1.593 3.972-1.507 5.821.084 1.796.79 3.613 2.565 5.375a1.59 1.59 0 0 1 .394 1.622l-.839 2.595 2.612-.834a1.61 1.61 0 0 1 1.636.391c1.9 1.889 3.787 2.638 5.594 2.746 1.851.107 3.792-.448 5.765-1.472 1.16-.602 2.29-1.345 3.374-2.156q-.833.132-1.672.215a25.4 25.4 0 0 1-5.795-.058c-1.73-.237-3.397-.704-4.592-1.526a1.598 1.598 0 0 1-.224-2.448L29.73 12.15a1.62 1.62 0 0 1 2.281 0 1.59 1.59 0 0 1 0 2.263L21.243 25.108q.569.135 1.263.23c1.485.203 3.239.224 5.035.045 3.68-.365 7.132-1.532 8.903-3.288l.002-.004a1.62 1.62 0 0 1 2.281 0 1.59 1.59 0 0 1 0 2.266l-.439.439c-2.548 2.537-6.363 6.337-10.63 8.553-2.288 1.188-4.82 1.987-7.452 1.832-2.406-.142-4.76-1.076-6.955-2.996l-4.699 1.502a1.62 1.62 0 0 1-1.636-.393 1.6 1.6 0 0 1-.396-1.623l1.513-4.669c-1.844-2.109-2.713-4.409-2.821-6.77-.12-2.587.676-5.115 1.848-7.413 2.329-4.56 6.363-8.644 8.883-11.144V1.67a1.62 1.62 0 0 1 2.283 0",
    }),
  });
}
function to() {
  return (0, d.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    "aria-hidden": !0,
    role: "presentation",
    children: (0, d.jsx)("path", {
      d: "M 14 21.5 L 18.5 26 L 26 15.5 M 35 20 C 35 28.284 28.285 35 20 35 C 11.715 35 5 28.284 5 20 C 5 11.716 11.715 5 20 5 C 28.285 5 35 11.716 35 20",
      fill: "none",
      strokeWidth: "3",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
function oo() {
  return (0, d.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    "aria-hidden": !0,
    role: "presentation",
    children: (0, d.jsxs)("g", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3",
      children: [
        (0, d.jsx)("path", { d: "M15 20a5 5 0 1 1 10.001.001A5 5 0 0 1 15 20" }),
        (0, d.jsx)("path", {
          d: "M20 27.5a7.5 7.5 0 1 1-7.5-7.5 7.5 7.5 0 1 1 7.5-7.5 7.5 7.5 0 1 1 7.5 7.5 7.5 7.5 0 1 1-7.5 7.5M20 12.5V15M12.5 20H15M27.5 20H25M20 27.5V25M13.333 13.333l3.134 3.134M23.533 16.467l3.134-3.134M13.333 26.667l3.134-3.134M23.533 23.533l3.134 3.134",
        }),
      ],
    }),
  });
}
function io() {
  return (0, d.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    fill: "none",
    "aria-hidden": !0,
    role: "presentation",
    children: [
      (0, d.jsx)("path", {
        fill: "none",
        stroke: "currentColor",
        strokeMiterlimit: "10",
        strokeWidth: "3",
        d: "M14.73 35A9.73 9.73 0 0 1 5 25.27V14.73A9.73 9.73 0 0 1 14.73 5h10.54A9.73 9.73 0 0 1 35 14.73v10.54A9.73 9.73 0 0 1 25.27 35Z",
      }),
      (0, d.jsx)("path", {
        fill: "none",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "3",
        d: "m19.522 10.381-1.034 3.079a7.87 7.87 0 0 1-5.013 5.018l-3.115 1.035a.524.524 0 0 0 0 .995l3.115 1.035a7.85 7.85 0 0 1 4.974 4.979l1.034 3.118a.524.524 0 0 0 .995 0l1.073-3.079a7.85 7.85 0 0 1 4.974-4.978l3.115-1.035a.525.525 0 0 0 0-.996l-3.076-1.074a7.857 7.857 0 0 1-5.013-5.018l-1.034-3.118a.523.523 0 0 0-.995.039",
      }),
    ],
  });
}
var Xo = [
    {
      key: "iconic",
      title: "Iconic",
      keywords: "icons vectors",
      previewIcon: Xt,
      intrinsicWidth: 24,
      intrinsicHeight: 24,
      ...f("Iconic"),
    },
    {
      key: "phosphor",
      title: "Phosphor",
      keywords: "icons vectors",
      previewIcon: $t,
      intrinsicWidth: 24,
      intrinsicHeight: 24,
      ...f("Phosphor"),
    },
    {
      key: "hero",
      title: "Hero",
      keywords: "icons vectors",
      previewIcon: Zt,
      intrinsicWidth: 24,
      intrinsicHeight: 24,
      ...f("HeroIcons"),
    },
    {
      key: "feather",
      title: "Feather",
      keywords: "icons vectors",
      previewIcon: jt,
      intrinsicWidth: 24,
      intrinsicHeight: 24,
      ...f("Feather"),
    },
    {
      key: "meteor",
      title: "Meteor",
      keywords: "icons vectors",
      previewIcon: Yt,
      intrinsicWidth: 24,
      intrinsicHeight: 24,
      ...f("Meteor"),
    },
    {
      key: "material",
      title: "Material",
      keywords: "icons vectors",
      previewIcon: Kt,
      intrinsicWidth: 24,
      intrinsicHeight: 24,
      ...f("Material"),
    },
    {
      key: "basicons",
      title: "Basicons",
      keywords: "icons vectors",
      previewIcon: Jt,
      intrinsicWidth: 24,
      intrinsicHeight: 24,
      ...f("Basicons"),
    },
    {
      key: "flowbite",
      title: "Flowbite",
      keywords: "icons vectors",
      previewIcon: Qt,
      intrinsicWidth: 24,
      intrinsicHeight: 24,
      ...f("Flowbite"),
    },
    {
      key: "nonicons",
      title: "Nonicons",
      keywords: "icons vectors",
      previewIcon: eo,
      intrinsicWidth: 24,
      intrinsicHeight: 24,
      ...f("Nonicons"),
    },
    {
      key: "sargam",
      title: "Sargam",
      keywords: "icons vectors",
      previewIcon: to,
      intrinsicWidth: 24,
      intrinsicHeight: 24,
      ...f("Sargam"),
    },
    {
      key: "lucide",
      title: "Lucide",
      keywords: "icons vectors",
      previewIcon: oo,
      intrinsicWidth: 24,
      intrinsicHeight: 24,
      ...f("Lucide"),
    },
    {
      key: "mage",
      title: "Mage",
      keywords: "icons vectors",
      previewIcon: io,
      intrinsicWidth: 24,
      intrinsicHeight: 24,
      ...f("Mage"),
    },
  ],
  or = new Set(Xo.map((t) => t.vectorSetModuleId));
function ro(t, e, o, i, n) {
  if (Z(i)) return;
  let r = dt(e) ? 2 : 0,
    a = W(o.x, r),
    s = W(o.y, r);
  if (
    (de(n.x)
      ? ((n.x = a), (n.y = s))
      : (!O(n.x) && n.x !== a && (n.x = L), !O(n.y) && n.y !== s && (n.y = L)),
    !j(e) || !i)
  )
    return;
  let l = wt(t, e);
  if (!l?.positioning) return;
  let c = l.positioning,
    p = W(c.width - ne.maxX(o), r),
    x = W(c.height - ne.maxY(o), r);
  de(n.right)
    ? ((n.right = p), (n.bottom = x))
    : (!O(n.right) && n.right !== p && (n.right = L),
      !O(n.bottom) && n.bottom !== x && (n.bottom = L));
}
var u = {
  padding: 0,
  gridRowCount: 2,
  gridColumnCount: 2,
  gridRowHeight: 200,
  gridColumnWidth: 200,
  gridColumnMinWidth: 50,
};
Object.freeze(u);
function qr(t) {
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
var so = 10,
  te = (t = "horizontal", e = !0, o) => {
    let i = o?.stores.persistedUserDefaults.layoutGap ?? so;
    return {
      layout: "stack",
      stackDirection: t,
      stackDistribution: "start",
      stackAlignment: "center",
      gap: i,
      stackWrapEnabled: !1,
      paddingPerSide: !1,
      padding: e ? i : u.padding,
      paddingTop: u.padding,
      paddingBottom: u.padding,
      paddingLeft: u.padding,
      paddingRight: u.padding,
    };
  },
  $o = {
    gridItemFillCellWidth: !0,
    gridItemFillCellHeight: !0,
    gridItemHorizontalAlignment: "center",
    gridItemVerticalAlignment: "center",
    gridItemColumnSpan: 1,
    gridItemRowSpan: 1,
  },
  Zo = (t) => ({
    layout: "grid",
    gridColumnCount: u.gridColumnCount,
    gridAlignment: "center",
    gridColumnWidthType: "minmax",
    gridColumnWidth: u.gridColumnWidth,
    gridColumnMinWidth: 50,
    gridRowHeightType: "auto",
    gridRowCount: u.gridRowCount,
    gridRowHeight: u.gridRowHeight,
    gridType: void 0,
    gap: t?.stores.persistedUserDefaults.layoutGap ?? so,
    paddingPerSide: !1,
    padding: u.padding,
    paddingTop: u.padding,
    paddingBottom: u.padding,
    paddingLeft: u.padding,
    paddingRight: u.padding,
  }),
  jo = "#BDF",
  lo = (t, e = {}, o = {}) => {
    let { source: i } = o;
    return Yo(t, e, jo, i);
  };
function Yo(t, e, o, i) {
  i && Pt("layout_frame", { source: i });
  let n = { fillEnabled: !0, fillColor: o };
  return (
    M(t) &&
      !t.stackWrapEnabled &&
      (t.widthType !== 2 && ((n.width = 1), (n.widthType = 3)),
      t.heightType !== 2 && ((n.height = 1), (n.heightType = 3))),
    Object.assign(n, e),
    new m(n)
  );
}
var Br = (t, e) => {
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
  Ko = (t, e, o, i, n, r) => {
    let a = new m({ ...te(o, n, t), fillEnabled: !1, ...e });
    h(M(a));
    let s = r ? { widthType: 0, width: r.width, heightType: 0, height: r.height } : void 0;
    for (let l = 0; l < i; l++) {
      let c = lo(a, s);
      a.addChild(c);
    }
    return a;
  },
  Jo = (t, e, o) => {
    if (!t || !k(e)) return;
    let i = k(o) ? o : 0,
      n = e - i,
      r = Math.floor(n / 3),
      a = e - i - r;
    return { smallHeight: r, tallHeight: a };
  },
  no = (t, e, o, i) => {
    let n = new m({ ...Zo(t), fillEnabled: !1, ...e });
    h($(n));
    let r = e.gridType === se,
      a = Jo(r, k(e.height) ? e.height : void 0, k(n.gap) ? n.gap : void 0);
    for (let s = 0; s < o; s++) {
      let l = {};
      if (a) {
        let x = s === 0 || s === o - 1 ? a.tallHeight : a.smallHeight;
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
      let c = lo(n, { ...$o, ...l });
      n.addChild(c);
    }
    return (r && n.setProp("heightType", 2), n);
  },
  Xr = (t, e, o, i = !1) => {
    if (e === 2) return no(t, o, i ? 0 : 4);
    if (e === 3 || e === 4) return no(t, o, i ? 0 : 3, e);
    let n = i ? 0 : 2;
    return Ko(t, o, o.stackDirection ?? "horizontal", n, !1);
  },
  mo = nt.width,
  Qo = (t, e, o, i, n, r) => {
    let a = { x: _, y: _, right: _, bottom: _ };
    (ro(t, e, o, i, a),
      k(a.x) && k(a.right) && n - a.x - a.right < 200 && ((r.left = 0), (r.right = 0)));
  },
  ei = (t, e) => {
    (t.stackDirection === "horizontal" && !t.stackWrapEnabled && (e.stackDirection = "vertical"),
      t.stackWrapEnabled && t.stackDistribution === "start" && (e.stackDistribution = "center"));
  },
  ti = (t) => {
    let e = {};
    return (
      t.children?.forEach((o) => {
        if (!lt(o)) return;
        let i = o.getPrimaryId();
        e[i] = { maxWidth: "100%" };
      }),
      e
    );
  },
  oi = (t, e) => {
    k(t.gridColumnCount) && (e.gridColumnCount = 1);
  },
  ii = (t, e, o, i, n, r) => {
    (Qo(t, e, o, i, n, r), !(n > mo) && (M(e) && ei(e, r), $(e) && oi(e, r)));
  },
  ri = (t, e, o, i, n, r) => {
    let a = e.getPrimaryId(),
      s = {};
    if ((ii(t, e, o, i, n, s), (r[a] = s), Ye(e) && e.stackWrapEnabled && n <= mo)) {
      let c = ti(e);
      for (let p in c) r[p] = { ...r[p], ...c[p] };
    }
  };
function $r(t, e, o) {
  let i = t.tree.getNode(e);
  if (!i || !Ue(i)) return;
  let n = t.tree.get(o);
  if (!n || !it(n) || !G(n)) return;
  let r = t.tree.getScopeNodeFor(n);
  if (!r || !Be(r)) return;
  let a = t.tree.getRect(i),
    s = r.getBreakpointValues();
  for (let l in s) {
    if (l === o) continue;
    let c = t.tree.get(l);
    if (!c || !tt(c) || !at(c)) continue;
    let p = {};
    (ri(t.tree, i, a, n, c.width, p), Bt(t.tree, c, p));
  }
}
function Zr(t, e, o, i = t.getParent(o.id), n = pt(t, o)) {
  let r = {
    width: { 2: !0, 0: !0, 3: !0, 1: !0, 4: !0, 5: !0 },
    height: { 2: !0, 0: !0, 3: !0, 1: !0, 4: !0, 5: !0 },
  };
  if (
    (!i || !j(o) || (Dt(o) && o.autoSize === !0) || Qe(o)
      ? ((r.width[1] = !1),
        (r.height[1] = !1),
        (r.width[3] = !1),
        (r.height[3] = !1),
        (r.width[4] = !1),
        (r.height[4] = !1))
      : $(i)
        ? Y(o, i)
          ? ((r.width[3] = !0), (r.height[3] = i.gridRowHeightType !== "fit" && i.gridType !== se))
          : ((r.width[3] = !1), (r.height[3] = !1))
        : M(i)
          ? (Y(o, i) || (r.width[3] = !1), Y(o, i) || (r.height[3] = !1))
          : ((r.width[3] = !1), (r.height[3] = !1)),
    xt(o) &&
      ze(o.textFitViewBoxSize) &&
      ((r.height[2] = !0),
      (r.width[2] = !1),
      (r.height[0] = !1),
      (r.height[1] = !1),
      (r.height[3] = !1),
      (r.height[4] = !1)),
    (!mt(o) || G(o)) && ((r.width[5] = !1), (r.height[5] = !1)),
    Ze(o))
  ) {
    let s = o.getSupportedLayout(e);
    (me(s.width) || (r.width[2] = !1),
      me(s.height) || (r.height[2] = !1),
      ce(s.width) || ((r.width[0] = !1), (r.width[1] = !1), (r.width[3] = !1), (r.width[4] = !1)),
      ce(s.height) ||
        ((r.height[0] = !1), (r.height[1] = !1), (r.height[3] = !1), (r.height[4] = !1)));
  } else if (V(o)) {
    if (G(o)) {
      ((r.width[2] = !1),
        pe(o) && ((r.height[0] = !1), (r.height[1] = !1), (r.height[3] = !1), (r.height[4] = !1)));
      let s = t.get(o.parentid);
      qe(s) && (r.height[2] = !1);
    }
    o.children.length === 0 && ((r.width[2] = !1), (r.height[2] = !1));
  } else V(o) || Xe(o) || $e(o) || ((r.width[2] = !1), gt(o) || (r.height[2] = !1));
  return (
    je(o) && He(o.layout) && ot(o) && !rt(o) && ((r.width[2] = !1), (r.height[2] = !1)),
    n || ((r.width[4] = !1), (r.height[4] = !1)),
    ((G(i) && ct(i) && _e(i.heightType)) || pe(i)) && ((r.height[3] = !1), (r.height[1] = !1)),
    Z(i) && ((r.width[3] = !1), (r.width[1] = !1), (r.height[3] = !1), (r.height[1] = !1)),
    r
  );
}
async function Ce(t) {
  let e;
  try {
    let o = document.createElement("video");
    o.preload = "metadata";
    let i;
    return (
      typeof t == "string" ? (i = t) : (e = i = URL.createObjectURL(t)),
      await new Promise((n) => {
        (o.addEventListener("loadedmetadata", () => {
          let { videoWidth: r, videoHeight: a } = o;
          n(r > 0 && a > 0 ? { width: r, height: a } : void 0);
        }),
          o.addEventListener("error", () => n(void 0)),
          (o.src = i));
      })
    );
  } catch {
    return;
  } finally {
    e && URL.revokeObjectURL(e);
  }
}
var ni = X("createService");
function co(t) {
  let e = (n) => {
      throw Error("createService Promise not set up");
    },
    o = new Promise((n) => {
      e = (r) => {
        (n(r),
          (e = (a) => {
            ni.warn(
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
        get: (n, r) => {
          let a = new Error("Waiting for service timed out");
          return (...s) => {
            let l;
            return new Promise((c, p) => {
              (t !== void 0 &&
                (l = window.setTimeout(() => {
                  p(a);
                }, t * 1e3)),
                o
                  .then((x) => {
                    window.clearTimeout(l);
                    let T = x;
                    typeof T[r] == "function" ? c(T[r](...s)) : c(T[r]);
                  })
                  .catch(p));
            });
          };
        },
      }
    ),
    resolve: e,
  };
}
var Ne = X("ChooseFileService");
function be({ silent: t = !1, quiet: e = !1 }) {
  return t
    ? Ct
    : e
      ? (o) => {
          (o.type === "add" && o.variant !== "error") || F(o);
        }
      : (o) => F(o);
}
function ai(t) {
  return t.type === "image";
}
function cn(t) {
  return t.type === "video";
}
function po(t) {
  let e = t.properties?.image?.width,
    o = t.properties?.image?.height;
  return (
    h(e !== void 0 && o !== void 0, "Image asset missing width/height"),
    { naturalWidth: e, naturalHeight: o }
  );
}
var ke = class {
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
        maxFileSize: n,
        onExceedsCustomMaxSize: r,
        refreshAssetService: a = !0,
      } = {}
    ) {
      try {
        let s = be({ silent: o, quiet: i });
        if (!vt.includes(e.type)) {
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
          let c = await e.text();
          if (qt(c)) return;
        }
        let l = await this.api.uploadAsset(e, {
          maxFileSize: n,
          onExceedsCustomMaxSize: r,
          onToast: s,
        });
        return l
          ? (a && (await this.assetService.refresh().catch(C)),
            {
              type: "image",
              asset: l,
              filename: E(l),
              originalFilename: l.name,
              url: z(l),
              imageSize: po(l),
            })
          : void 0;
      } catch (s) {
        if (o) throw s;
        (F({
          variant: "error",
          duration: 1 / 0,
          primaryText: "Couldn\u2019t add image.",
          secondaryText: "It may be too large.",
          type: "add",
        }),
          Ne.reportError(s, { fileName: e.name, fileSize: e.size, fileType: e.type }));
      }
    }
    async uploadVideo(
      e,
      {
        silent: o = !1,
        quiet: i = !1,
        maxFileSize: n,
        onExceedsCustomMaxSize: r,
        refreshAssetService: a = !0,
      } = {}
    ) {
      try {
        let s = be({ silent: o, quiet: i }),
          l = await Promise.all([
            Se(Ce(e), 1e4, "Measuring the video took more than 10 seconds"),
            this.api.uploadAsset(e, { maxFileSize: n, onExceedsCustomMaxSize: r, onToast: s }),
          ]),
          [c, p] = l;
        return p
          ? (a && (await this.assetService.refresh().catch(C)),
            {
              type: "video",
              asset: p,
              filename: E(p),
              dimensions: c,
              originalFilename: p.name,
              url: z(p),
            })
          : void 0;
      } catch (s) {
        if (o) throw s;
        (F({
          variant: "error",
          duration: 1 / 0,
          primaryText: "Couldn\u2019t add video.",
          secondaryText: "Please retry.",
          type: "add",
        }),
          Ne.reportError(s, { fileName: e.name, fileSize: e.size, fileType: e.type }));
      }
    }
    async uploadAssetByURL(e, { silent: o = !1, refreshAssetService: i = !0 } = {}) {
      let n = ut(e),
        a =
          (n && this.assetService.getAssetByFilename(n.filename)) ??
          (await this.api.uploadAssetByURL(e, o ? void 0 : F)),
        s = { asset: a, filename: E(a), originalFilename: a.name, url: z(a) };
      return (
        i && (await this.assetService.refresh().catch(C)),
        a.mimeType.startsWith("image/")
          ? { ...s, type: "image", imageSize: po(a) }
          : a.mimeType.startsWith("video/")
            ? {
                ...s,
                type: "video",
                dimensions: await Se(
                  Ce(s.url),
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
        maxFileSize: n,
        onExceedsCustomMaxSize: r,
        refreshAssetService: a = !0,
      } = {}
    ) {
      let s = be({ silent: o, quiet: i }),
        l = await this.api.uploadAsset(e, {
          maxFileSize: n,
          onExceedsCustomMaxSize: r,
          onToast: s,
        });
      if (l)
        return (
          a && (await this.assetService.refresh().catch(C)),
          { type: "file", asset: l, filename: E(l), originalFilename: l.name, url: z(l) }
        );
    }
    async uploadImageByURL(e, { refreshAssetService: o = !0 } = {}) {
      let i = [];
      if (!e) return i;
      try {
        let n = await this.uploadAssetByURL(e.url, { refreshAssetService: o });
        (h(ai(n)), i.push(n));
      } catch (n) {
        Ne.warn("Failed to add image by URL:", n);
      }
      return i;
    }
  },
  { service: uo, resolve: si } = co();
function pn(t, e) {
  si(new ke(t, e));
}
var fo = "https://app.framerstatic.com/apple-music@2x-QNINHCQB.png";
var ho = "https://app.framerstatic.com/dotlottie@2x-PO7EYB72.png";
var go = "https://app.framerstatic.com/gif@2x-YJLRSG23.png";
var yo = "https://app.framerstatic.com/image-light@2x-ZNDSNRGK.png";
var vo = "https://app.framerstatic.com/image@2x-J24ALEQ5.png";
var Io = "https://app.framerstatic.com/mp3-light@2x-7JFI5VH3.png";
var wo = "https://app.framerstatic.com/mp3@2x-3HRSK7AW.png";
var So = "https://app.framerstatic.com/podcasts@2x-3YVIB6RX.png";
var xo = "https://app.framerstatic.com/simplecast@2x-4KWTR2UC.png";
var Co = "https://app.framerstatic.com/soundcloud@2x-A2MP7SBC.png";
var No = "https://app.framerstatic.com/spotify@2x-FVAZWFD4.png";
var bo = "https://app.framerstatic.com/video-light@2x-SALVCONI.png";
var ko = "https://app.framerstatic.com/video@2x-XC7DTFDW.png";
var Fe = {
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
    ...ue,
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
    formInputFontSize: st(14, "px"),
    formInputFontColor: "rgba(153, 153, 153, 1)",
    formInputFontSelector: "Inter",
    formInputFontStyle: "Regular",
    formInputFontLetterSpacing: 0,
    formInputFontLetterSpacingUnit: "em",
    formInputFontLineHeight: 1.2,
    formInputFontLineHeightUnit: "em",
    ...ue,
  },
  Fo = { ...Te, formInputIconColor: J };
function R(t) {
  let e = t === "next" ? y.nextPage : y.previousPage;
  return K(e, void 0, g);
}
function Po(t) {
  return { ...K(y.goToPage, void 0, g), payload: { [fe]: { type: "number", value: t } } };
}
function Ln(t) {
  return Nt(t) && t.controls.providerId?.value === g;
}
function On(t) {
  switch (t.actionIdentifier) {
    case "framer/useCarouselNavigation": {
      let e = t.controls.direction?.value === "previous" ? "previous" : "next";
      return { ...R(e), identifier: t.identifier, meta: t.meta };
    }
    case "framer/useGoToCarouselPage": {
      let e = t.controls.page;
      return {
        ...K(y.goToPage, t.identifier, g),
        meta: t.meta,
        ...(e && { payload: { [fe]: e } }),
      };
    }
    default:
      return;
  }
}
function Yn(t, e) {
  if (!Je(e)) return [];
  let o = e.id;
  return [
    { label: "Previous", click: () => xi(t, o) },
    { label: "Next", click: () => Ni(t, o) },
    { label: "Pagination", click: () => ki(t, o) },
  ];
}
function Pe(t, e) {
  let o = t.getNodeWithTrait(e, le);
  if (o?.originalid) {
    let i = t.get(o.originalid);
    if (i && le(i)) return i;
  }
  return o;
}
function xi(t, e) {
  let o = Pe(t.tree, e);
  if (!o) return;
  let i = Ci();
  t.scheduler.process(() => {
    t.tree.insertNode(i, o.id);
  });
}
function U() {
  return P("boolean", N(y.activeItemIndex, g), [
    { type: "valueTransform", id: w(), name: "isSet" },
  ]);
}
function Ci() {
  return new m({
    name: "Previous",
    visible: U(),
    layout: "stack",
    stackAlignment: "center",
    stackDistribution: "center",
    heightType: 2,
    widthType: 2,
    padding: 10,
    position: "absolute",
    onTap: [R("previous")],
    children: new v([new b({ html: "<span>Previous</span>", heightType: 2, widthType: 2 })]),
  });
}
function Ni(t, e) {
  let o = Pe(t.tree, e);
  if (!o) return;
  let i = bi();
  t.scheduler.process(() => {
    t.tree.insertNode(i, o.id);
  });
}
function bi() {
  return new m({
    name: "Next",
    visible: U(),
    layout: "stack",
    stackAlignment: "center",
    stackDistribution: "center",
    heightType: 2,
    widthType: 2,
    padding: 10,
    position: "absolute",
    onTap: [R("next")],
    children: new v([new b({ html: "<span>Next</span>", heightType: 2, widthType: 2 })]),
  });
}
function ki(t, e) {
  let o = Pe(t.tree, e);
  if (!o) return;
  let i = Fi();
  t.scheduler.process(() => {
    t.tree.insertNode(i, o.id);
  });
}
function Fi(t = {}, e = {}) {
  let o = w(),
    i = new m({
      id: o,
      name: "Dot",
      repeatArray: N(y.dots, g),
      height: 10,
      width: 10,
      radius: 10,
      opacity: P("number", N(he, o), [
        { id: w(), type: "valueTransform", name: "equals", value: N(y.activeItemIndex, g) },
        {
          id: w(),
          type: "valueTransform",
          name: "convertFromBoolean",
          truthy: 1,
          falsy: 0.5,
          outputType: "number",
        },
      ]),
      fillColor: "rgb(64, 13, 13)",
      onTap: [Po(N(he, o))],
      ...e,
    });
  return new m({
    name: "Progress",
    visible: U(),
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
    children: new v([i]),
  });
}
function Do(t) {
  let e = St.boundingBox(t),
    o = t.pathSegments.map((i) => i.merge({ x: i.x - e.x, y: i.y - e.y }));
  return [{ pathClosed: t.pathClosed, pathSegments: o }, e];
}
function Ao() {
  return new m({ width: 400, height: 300, fillEnabled: !0, fillType: "image", fillColor: "#333" });
}
function ja() {
  return new ge({
    width: 300,
    height: 500,
    codeComponentIdentifier: "framer/Prototype",
    slotsAreChildNodes: ae.isOn("componentSlotsAreChildNodes"),
  });
}
async function Ya(t, e, o) {
  o.stores.chromeStore.notifyTilingImageUploadStarted(e.id);
  let i = await zt(t.imageUrl, t.originalFilename),
    n = await uo.uploadImage(i, { silent: !0 });
  h(n, "Failed to upload the image");
  let r = xe(n);
  o.scheduler.process(() => {
    if (!V(e)) return;
    let a = o.tree.current(e);
    (a &&
      a.set({
        fillImage: r,
        fillImagePixelWidth: n.imageSize.naturalWidth,
        fillImagePixelHeight: n.imageSize.naturalHeight,
        fillImageResize: "tile",
        fillType: "image",
      }),
      o.stores.chromeStore.notifyTilingImageUploadFinished(e.id));
    let s = o.floatingWindowPopoutNavigation;
    s && !s.isPresenting("fill") && s.presentPopout("fill");
  });
}
async function Ti(t, e) {
  if (Me.isTest || t.stores.chromeStore.userIsViewer) return;
  let o = D[e],
    { module: i } = await t.stores.modulesStore.lookUpModule(bt(o));
  if (i?.files.module)
    return Ee(
      i.id,
      i.saveId,
      i.files.module,
      "exportSpecifier" in o && ft(o.exportSpecifier) ? o.exportSpecifier : "default"
    );
}
async function oe(t, e) {
  let o = await Ti(t, e);
  if (o)
    return (
      t.stores.modulesStore.preloadExternalModules([o]).catch(C),
      t.stores.modulesStore.addExternalModulesToProject([o], { onTreeUpdate: () => {} }).catch(C),
      o.value
    );
}
async function Pi(t) {
  return oe(t, "submitButton");
}
async function Ka(t) {
  return oe(t, "infiniteScroll");
}
async function Ja(t) {
  return oe(t, "loadMoreButton");
}
async function Qa(t) {
  return oe(t, "tab");
}
var ie = {
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
function re(t, e = "rgb(136, 136, 136)") {
  return `<p style="--framer-font-family: &quot;Inter&quot;, &quot;Inter Placeholder&quot;, sans-serif; --framer-font-weight: 500; --font-selector: SW50ZXItTWVkaXVt; --framer-text-color: ${e}; --framer-font-size: 12px;">${t}</p>`;
}
function Ro({ label: t, type: e, placeholder: o, name: i }) {
  let n = It(e);
  return new m({
    ...ie,
    children: new v([
      new b({ heightType: 2, widthType: 2, html: re(t) }),
      new Mt({
        ...Te,
        formInputPlaceholderColor: Ot,
        height: 40,
        heightType: 0,
        width: 1,
        widthType: 3,
        formTextInputType: e,
        formInputPlaceholder: o,
        formInputName: i,
        ...(n ? { formInputIconColor: J } : {}),
      }),
    ]),
  });
}
function es() {
  return new m({
    ...ie,
    stackDirection: "horizontal",
    stackAlignment: "center",
    children: new v([
      new ye({
        height: 16,
        width: 16,
        aspectRatio: 1,
        heightType: 0,
        widthType: 0,
        formBooleanInputType: "checkbox",
        formInputName: "Newsletter",
        formBooleanInputValue: !1,
        ...Fe,
        ...Wt,
        ...Lt,
      }),
      new b({
        heightType: 2,
        widthType: 2,
        userSelect: "none",
        html: re("Subscribe to Newsletter"),
      }),
    ]),
  });
}
function De(t, e, o, i = !1) {
  return new m({
    ...ie,
    stackDirection: "horizontal",
    stackAlignment: "center",
    children: new v([
      new ye({
        formBooleanInputType: "radio",
        height: 16,
        width: 16,
        heightType: 0,
        widthType: 0,
        aspectRatio: 1,
        formInputName: e,
        formInputValue: o,
        formBooleanInputValue: i,
        ...Fe,
        radius: 8,
        ...At(),
      }),
      new b({ heightType: 2, widthType: 2, userSelect: "none", html: re(t) }),
    ]),
  });
}
function Di() {
  let t = { ...Q(), value: "", title: "Select\u2026", disabled: !0 };
  return new m({
    ...ie,
    children: new v([
      new b({ heightType: 2, widthType: 2, html: re("Location") }),
      new Gt({
        ...Fo,
        formInputRequired: !0,
        formInputName: "Location",
        formInputInvalidTextColor: Vt,
        height: 40,
        heightType: 0,
        width: 1,
        widthType: 3,
        formSelectOptions: [
          t,
          { ...Q(), value: "amsterdam", title: "Amsterdam" },
          { ...Q(), value: "barcelona", title: "Barcelona" },
        ],
        formInputValue: t.id,
      }),
    ]),
  });
}
function ts() {
  return new m({
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
    children: new v([
      new b({
        heightType: 2,
        widthType: 2,
        html: '<p style="--framer-font-family: &quot;Inter&quot;, &quot;Inter Placeholder&quot;, sans-serif; --framer-font-weight: 500; --font-selector: SW50ZXItTWVkaXVt; --framer-text-color: rgb(136, 136, 136); --framer-font-size: 12px;">Radio</p>',
      }),
      De("Option 1", "Radio", "Option 1", !0),
      De("Option 2", "Radio", "Option 2"),
      De("Option 3", "Radio", "Option 3"),
    ]),
  });
}
var Ri = { width: 280, height: 333 };
async function os(t) {
  let e = w(),
    o = new m({
      isFormContainer: !0,
      formSubmitButtonId: e,
      layout: "stack",
      gap: 20,
      width: Ri.width,
      widthType: 0,
      heightType: 2,
      stackDirection: "vertical",
      paddingPerSide: !1,
      padding: 20,
      stackDistribution: "start",
      overflow: "hidden",
      stackAlignment: "start",
      fillEnabled: !1,
      children: new v([
        Ro({ label: "Name", type: "text", placeholder: "Jane Smith", name: "Name" }),
        Ro({ label: "Email", type: "email", placeholder: "jane@framer.com", name: "Email" }),
        Di(),
      ]),
    });
  return (Ai(t, o, e), o);
}
function Ai(t, e, o) {
  Pi(t)
    .then((i) => {
      let n = Li(o, i);
      if (!t.tree.has(e.id)) {
        e.addChild(n);
        return;
      }
      t.scheduler.process(() => {
        t.tree.insertNode(n, e.id);
      });
    })
    .catch(C);
}
var Wi = {
  formButtonSuccessVariant: "kkGSMI0fp",
  formButtonSuccessVariantEnabled: !0,
  formButtonPendingVariant: "zNkuqWxeD",
  formButtonPendingVariantEnabled: !0,
};
function Li(t, e) {
  return new ge({
    id: t,
    widthType: 3,
    heightType: 0,
    width: 1,
    height: 40,
    codeComponentIdentifier: e,
    ...Wi,
    slotsAreChildNodes: ae.isOn("componentSlotsAreChildNodes"),
  });
}
function is(t) {
  let e = te("horizontal", !1, t),
    o = new m({
      width: 450,
      heightType: 2,
      ...e,
      ...et,
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
    a = new m(r);
  a.addChild(new we({ width: 80, height: 80, fillColor: i, radius: 8 }));
  let s = new m(r);
  s.addChild(new ve({ width: 85, height: 85, fillColor: i, fillEnabled: !0, fillType: "color" }));
  let l = new m(r);
  return (
    l.addChild(
      new Ie({
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
    o.addChild(a),
    o.addChild(s),
    o.addChild(l),
    o
  );
}
function rs(t) {
  let e = te("horizontal", !1, t),
    o = [
      new H({ x: 9, y: 2 }),
      new H({
        x: 5.75,
        y: 6.063,
        handleInX: 1.158,
        handleInY: -1.448,
        handleOutX: -0.439,
        handleOutY: 0.548,
        handleMirroring: "asymmetric",
      }),
      new H({
        x: 5.75,
        y: 7.937,
        handleInX: -0.439,
        handleInY: -0.548,
        handleOutX: 1.158,
        handleOutY: 1.448,
        handleMirroring: "asymmetric",
      }),
      new H({ x: 9, y: 12 }),
    ],
    i = new m({
      width: 450,
      heightType: 2,
      ...e,
      ...Ke,
      carouselEffectLoop: !1,
      fillEnabled: !1,
      overflow: "clip",
      radius: 10,
    }),
    n = "rgba(136, 136, 136, 0.1)",
    a = {
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
    s = new m(a);
  s.addChild(new we({ width: 80, height: 80, fillColor: n, radius: 8 }));
  let l = new m(a);
  l.addChild(new ve({ width: 85, height: 85, fillColor: n, fillEnabled: !0, fillType: "color" }));
  let c = new m(a);
  (c.addChild(
    new Ie({
      width: 113,
      height: 109,
      polygonSides: 3,
      fillColor: n,
      fillEnabled: !0,
      fillType: "color",
      radius: 3,
      centered: !0,
    })
  ),
    i.addChild(s),
    i.addChild(l),
    i.addChild(c));
  let p = {
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
    x = (Mo, q) => {
      let Ae = q === "next" ? y.hasNext : y.hasPrevious,
        Go =
          q === "previous"
            ? o
            : o.map((B) =>
                B.merge({
                  id: w(),
                  x: 14 - B.x,
                  handleInX: -B.handleInX,
                  handleOutX: -B.handleOutX,
                })
              ),
        [{ pathSegments: _o }, We] = Do({ pathSegments: Go, pathClosed: !1 }),
        Le = new Rt({ width: 14, height: 14, fillEnabled: !1 });
      Le.addChild(
        new _t({
          pathSegments: _o,
          pathClosed: !1,
          ...We,
          x: We.x + (q === "next" ? 1 : -1),
          fillEnabled: !1,
          strokeEnabled: !0,
          strokeWidth: 1,
          strokeColor: "rgba(136, 136, 136, 0.5)",
          lineJoin: "round",
          lineCap: "round",
        })
      );
      let Oe = new m({
        name: Mo,
        visible: U(),
        backgroundBlur: 2,
        onTap: [R(q)],
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
        opacity: P("number", N(Ae, g), [
          {
            type: "valueTransform",
            id: w(),
            name: "convertFromBoolean",
            truthy: 1,
            falsy: 0,
            outputType: "number",
          },
        ]),
        pointerEvents: P("enum", N(Ae, g), [
          {
            type: "valueTransform",
            id: w(),
            name: "convertFromBoolean",
            truthy: "auto",
            falsy: "none",
            outputType: "enum",
          },
        ]),
      });
      return (Oe.addChild(Le), Oe);
    },
    T = new m({ ...p, name: "Right Controls", right: 12 });
  T.addChild(x("Next", "next"));
  let Re = new m({ ...p, name: "Left Controls", left: 12 });
  return (Re.addChild(x("Previous", "previous")), i.addChild(T), i.addChild(Re), i);
}
function S(t, e, o) {
  let i = t.find((n) => n.key === e);
  return (h(i, `Missing ${o} insert item with key "${e}".`), i);
}
var Lo = {
  key: "video",
  title: D.video.title,
  keywords: "player mp4 film trailer",
  previewImage: ko,
  previewImageLight: bo,
  previewAssetWidth: 60,
  previewAssetHeight: 40,
  intrinsicWidth: 200,
  intrinsicHeight: 112,
  moduleURL: D.video.moduleURL,
  exportSpecifier: D.video.exportSpecifier,
};
function Ts() {
  return Tt(Lo);
}
var Wo = [
    {
      key: "image",
      title: "Image",
      keywords: "image png jpg jpeg webp photo",
      previewImage: vo,
      previewImageLight: yo,
      previewAssetWidth: 60,
      previewAssetHeight: 40,
      intrinsicWidth: 400,
      intrinsicHeight: 300,
      hideTitle: !1,
      generateNodes: Ao,
    },
    {
      key: "giphy",
      title: "GIF",
      keywords: "gif giphy",
      previewImage: go,
      previewAssetWidth: 30,
      previewAssetHeight: 38,
      intrinsicWidth: 400,
      intrinsicHeight: 300,
      moduleURL: I("Gif"),
      exportSpecifier: "Gif",
    },
  ],
  Oi = [
    {
      key: "dotlottie",
      title: "Dot Lottie",
      keywords: "animation lottie svg",
      previewImage: ho,
      previewAssetWidth: 41,
      previewAssetHeight: 41,
      intrinsicWidth: 500,
      intrinsicHeight: 350,
      moduleURL: I("DotLottie"),
      exportSpecifier: "default",
    },
  ],
  A = [
    {
      key: "spotify",
      title: "Spotify",
      keywords: "music songs artist player",
      previewImage: No,
      previewAssetWidth: 40,
      previewAssetHeight: 40,
      intrinsicWidth: 280,
      intrinsicHeight: 350,
      moduleURL: I("Spotify"),
      exportSpecifier: "Spotify",
    },
    {
      key: "apple podcasts",
      title: "Apple Podcasts",
      displayTitle: "Podcasts",
      keywords: "music story radio",
      previewImage: So,
      previewAssetWidth: 40,
      previewAssetHeight: 40,
      intrinsicWidth: 460,
      intrinsicHeight: 175,
      moduleURL: I("apple-podcasts"),
    },
    {
      key: "soundcloud",
      title: "SoundCloud",
      keywords: "music songs artist player",
      previewImage: Co,
      previewAssetWidth: 60,
      previewAssetHeight: 40,
      intrinsicWidth: 500,
      intrinsicHeight: 300,
      moduleURL: `${I("soundcloud")}#Soundcloud`,
      exportSpecifier: "SoundCloud",
    },
    {
      key: "apple music",
      title: "Apple Music",
      keywords: "music songs artist player",
      previewImage: fo,
      previewAssetWidth: 40,
      previewAssetHeight: 40,
      intrinsicWidth: 400,
      intrinsicHeight: 150,
      moduleURL: I("apple-music"),
    },
    {
      key: "simplecast",
      title: "Simplecast",
      keywords: "podcast",
      previewImage: xo,
      previewAssetWidth: 40,
      previewAssetHeight: 40,
      intrinsicWidth: 400,
      intrinsicHeight: 200,
      moduleURL: I("simplecast"),
    },
    {
      key: "audio mp3",
      title: "MP3",
      keywords: "music player",
      previewImage: wo,
      previewImageLight: Io,
      previewAssetWidth: 72,
      previewAssetHeight: 30,
      intrinsicWidth: 240,
      intrinsicHeight: 50,
      moduleURL: I("Audio"),
      exportSpecifier: "Audio",
    },
  ],
  Ps = [
    S(Wo, "image", "image"),
    Lo,
    Ft,
    S(A, "audio mp3", "audio"),
    S(Wo, "giphy", "image"),
    kt,
    S(Oi, "dotlottie", "animation"),
    S(A, "spotify", "audio"),
    S(A, "apple music", "audio"),
    S(A, "soundcloud", "audio"),
    S(A, "apple podcasts", "audio"),
    S(A, "simplecast", "audio"),
  ];
var Oo = "https://app.framerstatic.com/embed-light@2x-PS76WMQ2.png";
var Vo = "https://app.framerstatic.com/embed@2x-6J66YCPC.png";
var Vs = {
  key: "embed",
  title: "Embed",
  keywords: "iframe",
  previewImage: Vo,
  previewImageLight: Oo,
  previewAssetWidth: 42,
  previewAssetHeight: 42,
  intrinsicWidth: 600,
  intrinsicHeight: 400,
  moduleURL: I("Embed"),
};
export {
  Ki as a,
  Bt as b,
  Ln as c,
  On as d,
  Xo as e,
  or as f,
  Do as g,
  Ht as h,
  qi as i,
  Uo as j,
  Bi as k,
  qt as l,
  ro as m,
  u as n,
  qr as o,
  te as p,
  Br as q,
  Xr as r,
  ri as s,
  $r as t,
  Zr as u,
  Fe as v,
  Te as w,
  Fo as x,
  xe as y,
  ji as z,
  Ce as A,
  co as B,
  ai as C,
  cn as D,
  uo as E,
  pn as F,
  Yn as G,
  ja as H,
  Ya as I,
  Ka as J,
  Ja as K,
  Qa as L,
  re as M,
  Ro as N,
  es as O,
  Di as P,
  ts as Q,
  Ri as R,
  os as S,
  Ai as T,
  Wi as U,
  is as V,
  rs as W,
  Ts as X,
  Ps as Y,
  Vs as Z,
};
//# sourceMappingURL=chunk-G6SUJSXZ.mjs.map
