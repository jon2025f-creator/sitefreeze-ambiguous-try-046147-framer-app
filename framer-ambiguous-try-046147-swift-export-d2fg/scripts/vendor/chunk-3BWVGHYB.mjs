import { B as Gr, d as gs, f as Rt, g as Pe, n as bs, o as ve } from "chunk-GV47JEYI.mjs";
import { a as Ct, b as fs, g as _, h as Fn } from "chunk-WBRHMFUJ.mjs";
import { a as us, b as se, e as Ps, f as vs, g as ne, p as Is, s as Nt } from "chunk-V6PD4VCB.mjs";
import { e as On, f as De, g as Of } from "chunk-3CKYEPG2.mjs";
import { Ne as Ce, Ob as ys, nf as xs, pd as hs, xf as Ze, zb as ms } from "chunk-DPHJW6UJ.mjs";
import {
  A as Fe,
  b as Je,
  c as ds,
  d as ee,
  e as Ae,
  f as En,
  g as q,
  i as Tt,
  j as cs,
  u as ps,
  z as Vt,
} from "chunk-2CEDOG4D.mjs";
import { a as en, b as St } from "chunk-WRBBN7SY.mjs";
import { a as ce } from "chunk-FZ6XN7HW.mjs";
import { a as Wn } from "chunk-MSHSIAEI.mjs";
import { g as Ss, k as Rs } from "chunk-AZMI4J4S.mjs";
import { a as An } from "chunk-UZNETSBG.mjs";
import { b as Ns } from "chunk-YSP5ZHDJ.mjs";
import { b as X } from "chunk-AYNVEX5D.mjs";
import { a as re } from "chunk-2FCXHKEL.mjs";
import {
  a as te,
  b as p,
  f as S,
  g,
  h as Ts,
  j,
  p as v,
  r as Cs,
  s as Ve,
  v as Vs,
} from "chunk-ARJ7WQTJ.mjs";
import { a as oe } from "chunk-SWYZG2NI.mjs";
import { o as ls } from "chunk-HTBRLWIL.mjs";
import { g as os, i as rs, k as is, l as Ye, o as as, r as ss } from "chunk-L5AQ4LH7.mjs";
import { b as ns, j as bt } from "chunk-EAUMDN6M.mjs";
import { b as C, c as W } from "chunk-4JY5UMT2.mjs";
import { c as ts, e as B } from "chunk-WLHSDIGQ.mjs";
var of = ts((H) => {
  "use strict";
  var ka = Symbol.for("react.element"),
    Da = Symbol.for("react.portal"),
    yr = Symbol.for("react.fragment"),
    hr = Symbol.for("react.strict_mode"),
    xr = Symbol.for("react.profiler"),
    gr = Symbol.for("react.provider"),
    br = Symbol.for("react.context"),
    mC = Symbol.for("react.server_context"),
    Tr = Symbol.for("react.forward_ref"),
    Cr = Symbol.for("react.suspense"),
    Vr = Symbol.for("react.suspense_list"),
    Sr = Symbol.for("react.memo"),
    Rr = Symbol.for("react.lazy"),
    yC = Symbol.for("react.offscreen"),
    nf;
  nf = Symbol.for("react.module.reference");
  function Ne(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case ka:
          switch (((e = e.type), e)) {
            case yr:
            case xr:
            case hr:
            case Cr:
            case Vr:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case mC:
                case br:
                case Tr:
                case Rr:
                case Sr:
                case gr:
                  return e;
                default:
                  return t;
              }
          }
        case Da:
          return t;
      }
    }
  }
  H.ContextConsumer = br;
  H.ContextProvider = gr;
  H.Element = ka;
  H.ForwardRef = Tr;
  H.Fragment = yr;
  H.Lazy = Rr;
  H.Memo = Sr;
  H.Portal = Da;
  H.Profiler = xr;
  H.StrictMode = hr;
  H.Suspense = Cr;
  H.SuspenseList = Vr;
  H.isAsyncMode = function () {
    return !1;
  };
  H.isConcurrentMode = function () {
    return !1;
  };
  H.isContextConsumer = function (e) {
    return Ne(e) === br;
  };
  H.isContextProvider = function (e) {
    return Ne(e) === gr;
  };
  H.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === ka;
  };
  H.isForwardRef = function (e) {
    return Ne(e) === Tr;
  };
  H.isFragment = function (e) {
    return Ne(e) === yr;
  };
  H.isLazy = function (e) {
    return Ne(e) === Rr;
  };
  H.isMemo = function (e) {
    return Ne(e) === Sr;
  };
  H.isPortal = function (e) {
    return Ne(e) === Da;
  };
  H.isProfiler = function (e) {
    return Ne(e) === xr;
  };
  H.isStrictMode = function (e) {
    return Ne(e) === hr;
  };
  H.isSuspense = function (e) {
    return Ne(e) === Cr;
  };
  H.isSuspenseList = function (e) {
    return Ne(e) === Vr;
  };
  H.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === yr ||
      e === xr ||
      e === hr ||
      e === Cr ||
      e === Vr ||
      e === yC ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Rr ||
          e.$$typeof === Sr ||
          e.$$typeof === gr ||
          e.$$typeof === br ||
          e.$$typeof === Tr ||
          e.$$typeof === nf ||
          e.getModuleId !== void 0))
    );
  };
  H.typeOf = Ne;
});
var af = ts((uH, rf) => {
  "use strict";
  rf.exports = of();
});
function tn(e, t) {
  let o = 10 ** Math.round(Math.abs(t));
  return Math.round(e * o) / o;
}
function rS(e, t) {
  let n = e.toFixed(t);
  return t === 0 ? n : `${+n}`;
}
function jr(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function ks(e) {
  return Math.round(e * 2) / 2;
}
function Le(e, t) {
  return { x: e, y: t };
}
((P) => {
  ((P.isQuadrilateralPoints = (y) => y?.length === 4),
    (P.add = (...y) => y.reduce((b, N) => ({ x: b.x + N.x, y: b.y + N.y }), { x: 0, y: 0 })),
    (P.subtract = (y, b) => ({ x: y.x - b.x, y: y.y - b.y })),
    (P.multiply = (y, b) => ({ x: y.x * b, y: y.y * b })),
    (P.divide = (y, b) => ({ x: y.x / b, y: y.y / b })),
    (P.absolute = (y) => ({ x: Math.abs(y.x), y: Math.abs(y.y) })),
    (P.reverse = (y) => ({ x: y.x * -1, y: y.y * -1 })),
    (P.pixelAligned = (y, b = { x: 0, y: 0 }) => ({ x: jr(y.x, b.x), y: jr(y.y, b.y) })),
    (P.distance = (y, b) => {
      let N = Math.abs(y.x - b.x),
        G = Math.abs(y.y - b.y);
      return Math.sqrt(N * N + G * G);
    }),
    (P.angle = (y, b) => (Math.atan2(b.y - y.y, b.x - y.x) * 180) / Math.PI - 90),
    (P.angleFromX = (y, b) => (Math.atan2(b.y - y.y, b.x - y.x) * 180) / Math.PI),
    (P.isEqual = (y, b) => y.x === b.x && y.y === b.y),
    (P.rotationNormalizer = () => {
      let y;
      return (b) => {
        typeof y != "number" && (y = b);
        let N = y - b,
          G = Math.abs(N) + 180,
          $ = Math.floor(G / 360);
        return (N < 180 && (b -= $ * 360), N > 180 && (b += $ * 360), (y = b), b);
      };
    }));
  function h(y, b) {
    return { x: (y.x + b.x) / 2, y: (y.y + b.y) / 2 };
  }
  P.center = h;
  function T(y) {
    let b = 0,
      N = 0;
    y.forEach((Z) => {
      ((b += Z.x), (N += Z.y));
    });
    let G = b / y.length,
      $ = N / y.length;
    return { x: G, y: $ };
  }
  P.centroid = T;
  function V(y) {
    let b = P.centroid(y),
      N = new Map();
    for (let G = 0; G < y.length; G++) {
      let $ = y[G];
      $ && N.set($, Math.atan2($.y - b.y, $.x - b.x));
    }
    return y.sort((G, $) => (N.get(G) ?? 0) - (N.get($) ?? 0));
  }
  P.sortClockwise = V;
})((Le ||= {}));
function Ds(e) {
  return e * (Math.PI / 180);
}
var ot = (() => {
  function e(t, n) {
    return { a: t, b: n };
  }
  return (
    (e.offset = (t, n) => {
      let o = Le.angleFromX(t.a, t.b),
        r = Ds(o),
        i = n * Math.sin(r),
        a = n * Math.cos(r);
      return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
    }),
    (e.intersection = (t, n, o) => {
      let r = t.a.x,
        i = t.a.y,
        a = t.b.x,
        s = t.b.y,
        l = n.a.x,
        u = n.a.y,
        c = n.b.x,
        m = n.b.y,
        f = (c - l) * (u - i) - (m - u) * (l - r),
        h = (c - l) * (s - i) - (m - u) * (a - r),
        T = (a - r) * (u - i) - (s - i) * (l - r);
      if ((f === 0 && h === 0) || h === 0) return null;
      let V = f / h,
        P = T / h;
      return o && (V < 0 || V > 1 || P < 0 || P > 1)
        ? null
        : { x: r + V * (a - r), y: i + V * (s - i) };
    }),
    (e.intersectionAngle = (t, n) => {
      let o = t.b.x - t.a.x,
        r = t.b.y - t.a.y,
        i = n.b.x - n.a.x,
        a = n.b.y - n.a.y;
      return Math.atan2(o * a - r * i, o * i + r * a) * (180 / Math.PI);
    }),
    (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
    (e.perpendicular = (t, n) => {
      let o = t.a.x - t.b.x,
        r = t.a.y - t.b.y,
        i = Le(n.x - r, n.y + o);
      return e(i, n);
    }),
    (e.projectPoint = (t, n) => {
      let o = e.perpendicular(t, n);
      return e.intersection(t, o);
    }),
    (e.pointAtPercentDistance = (t, n) => {
      let o = e.distance(t),
        r = (n * o) / o;
      return { x: r * t.b.x + (1 - r) * t.a.x, y: r * t.b.y + (1 - r) * t.a.y };
    }),
    (e.distance = (t) => Le.distance(t.a, t.b)),
    e
  );
})();
var R = {
    equals: function (e, t) {
      return e === t
        ? !0
        : !e || !t
          ? !1
          : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
    },
    from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
    atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
    fromTwoPoints: (e, t) => ({
      x: Math.min(e.x, t.x),
      y: Math.min(e.y, t.y),
      width: Math.abs(e.x - t.x),
      height: Math.abs(e.y - t.y),
    }),
    fromRect: (e) => ({ x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }),
    multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
    divide: (e, t) => R.multiply(e, 1 / t),
    offset: (e, t) => {
      let n = typeof t.x == "number" ? t.x : 0,
        o = typeof t.y == "number" ? t.y : 0;
      return { ...e, x: e.x + n, y: e.y + o };
    },
    inflate: (e, t) => {
      if (t === 0) return e;
      let n = 2 * t;
      return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
    },
    pixelAligned: (e) => {
      let t = Math.round(e.x),
        n = Math.round(e.y),
        o = Math.round(e.x + e.width),
        r = Math.round(e.y + e.height),
        i = Math.max(o - t, 0),
        a = Math.max(r - n, 0);
      return { x: t, y: n, width: i, height: a };
    },
    halfPixelAligned: (e) => {
      let t = Math.round(e.x * 2) / 2,
        n = Math.round(e.y * 2) / 2,
        o = Math.round((e.x + e.width) * 2) / 2,
        r = Math.round((e.y + e.height) * 2) / 2,
        i = Math.max(o - t, 1),
        a = Math.max(r - n, 1);
      return { x: t, y: n, width: i, height: a };
    },
    round: (e, t = 0) => {
      let n = tn(e.x, t),
        o = tn(e.y, t),
        r = tn(e.width, t),
        i = tn(e.height, t);
      return { x: n, y: o, width: r, height: i };
    },
    roundToOutside: (e) => {
      let t = Math.floor(e.x),
        n = Math.floor(e.y),
        o = Math.ceil(e.x + e.width),
        r = Math.ceil(e.y + e.height),
        i = Math.max(o - t, 0),
        a = Math.max(r - n, 0);
      return { x: t, y: n, width: i, height: a };
    },
    minX: (e) => e.x,
    maxX: (e) => e.x + e.width,
    minY: (e) => e.y,
    maxY: (e) => e.y + e.height,
    positions: (e) => ({
      minX: e.x,
      midX: e.x + e.width / 2,
      maxX: R.maxX(e),
      minY: e.y,
      midY: e.y + e.height / 2,
      maxY: R.maxY(e),
    }),
    center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
    boundingRectFromPoints: (e) => {
      let t = 1 / 0,
        n = -1 / 0,
        o = 1 / 0,
        r = -1 / 0;
      for (let i = 0; i < e.length; i++) {
        let a = e[i];
        ((t = Math.min(t, a.x)),
          (n = Math.max(n, a.x)),
          (o = Math.min(o, a.y)),
          (r = Math.max(r, a.y)));
      }
      return { x: t, y: o, width: n - t, height: r - o };
    },
    fromPoints: (e) => {
      let [t, n, o, r] = e,
        { x: i, y: a } = t,
        s = Le.distance(t, n),
        l = Le.distance(t, r);
      return { x: i, y: a, width: s, height: l };
    },
    merge: (...e) => {
      let t = { x: Math.min(...e.map(R.minX)), y: Math.min(...e.map(R.minY)) },
        n = { x: Math.max(...e.map(R.maxX)), y: Math.max(...e.map(R.maxY)) };
      return R.fromTwoPoints(t, n);
    },
    intersection: (e, t) => {
      let n = Math.max(e.x, t.x),
        o = Math.min(e.x + e.width, t.x + t.width),
        r = Math.max(e.y, t.y),
        i = Math.min(e.y + e.height, t.y + t.height);
      return { x: n, y: r, width: o - n, height: i - r };
    },
    points: (e) => [
      { x: R.minX(e), y: R.minY(e) },
      { x: R.minX(e), y: R.maxY(e) },
      { x: R.maxX(e), y: R.minY(e) },
      { x: R.maxX(e), y: R.maxY(e) },
    ],
    pointsAtOrigin: (e) => [
      { x: 0, y: 0 },
      { x: e.width, y: 0 },
      { x: e.width, y: e.height },
      { x: 0, y: e.height },
    ],
    transform: (e, t) => {
      let { x: n, y: o } = t.transformPoint({ x: e.x, y: e.y }),
        { x: r, y: i } = t.transformPoint({ x: e.x + e.width, y: e.y }),
        { x: a, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
        { x: l, y: u } = t.transformPoint({ x: e.x, y: e.y + e.height }),
        c = Math.min(n, r, a, l),
        m = Math.max(n, r, a, l) - c,
        f = Math.min(o, i, s, u),
        h = Math.max(o, i, s, u) - f;
      return { x: c, y: f, width: m, height: h };
    },
    containsPoint: (e, t) =>
      !(
        t.x < R.minX(e) ||
        t.x > R.maxX(e) ||
        t.y < R.minY(e) ||
        t.y > R.maxY(e) ||
        Number.isNaN(e.x) ||
        Number.isNaN(e.y)
      ),
    containsRect: (e, t) => {
      for (let n of R.points(t)) if (!R.containsPoint(e, n)) return !1;
      return !0;
    },
    toCSS: (e) => ({
      display: "block",
      transform: `translate(${e.x}px, ${e.y}px)`,
      width: `${e.width}px`,
      height: `${e.height}px`,
    }),
    inset: (e, t) => ({
      x: e.x + t,
      y: e.y + t,
      width: Math.max(0, e.width - 2 * t),
      height: Math.max(0, e.height - 2 * t),
    }),
    intersects: (e, t) =>
      !(t.x >= R.maxX(e) || R.maxX(t) <= e.x || t.y >= R.maxY(e) || R.maxY(t) <= e.y),
    overlapHorizontally: (e, t) => {
      let n = R.maxX(e),
        o = R.maxX(t);
      return n > t.x && o > e.x;
    },
    overlapVertically: (e, t) => {
      let n = R.maxY(e),
        o = R.maxY(t);
      return n > t.y && o > e.y;
    },
    doesNotIntersect: (e, t) => !t.some((n) => R.intersects(n, e)),
    isEqual: (e, t) => R.equals(e, t),
    cornerPoints: (e) => {
      let t = e.x,
        n = e.x + e.width,
        o = e.y,
        r = e.y + e.height;
      return [
        { x: t, y: o },
        { x: n, y: o },
        { x: n, y: r },
        { x: t, y: r },
      ];
    },
    midPoints: (e) => {
      let t = e.x,
        n = e.x + e.width / 2,
        o = e.x + e.width,
        r = e.y,
        i = e.y + e.height / 2,
        a = e.y + e.height;
      return [
        { x: n, y: r },
        { x: o, y: i },
        { x: n, y: a },
        { x: t, y: i },
      ];
    },
    pointDistance: (e, t) => {
      let n = 0,
        o = 0;
      return (
        t.x < e.x ? (n = e.x - t.x) : t.x > R.maxX(e) && (n = t.x - R.maxX(e)),
        t.y < e.y ? (o = e.y - t.y) : t.y > R.maxY(e) && (o = t.y - R.maxY(e)),
        Le.distance({ x: n, y: o }, { x: 0, y: 0 })
      );
    },
    delta: (e, t) => {
      let n = { x: R.minX(e), y: R.minY(e) },
        o = { x: R.minX(t), y: R.minY(t) };
      return { x: n.x - o.x, y: n.y - o.y };
    },
    withMinSize: (e, t) => {
      let { width: n, height: o } = t,
        r = e.width - n,
        i = e.height - o;
      return {
        width: Math.max(e.width, n),
        height: Math.max(e.height, o),
        x: e.width < n ? e.x + r / 2 : e.x,
        y: e.height < o ? e.y + i / 2 : e.y,
      };
    },
    anyPointsOutsideRect: (e, t) => {
      let n = R.minX(e),
        o = R.minY(e),
        r = R.maxX(e),
        i = R.maxY(e);
      for (let a of t) if (a.x < n || a.x > r || a.y < o || a.y > i) return !0;
      return !1;
    },
    edges: (e) => {
      let [t, n, o, r] = R.cornerPoints(e);
      return [ot(t, n), ot(n, o), ot(o, r), ot(r, t)];
    },
    rebaseRectOnto: (e, t, n, o) => {
      let r = { ...e };
      switch (n) {
        case "bottom":
        case "top":
          switch (o) {
            case "start":
              r.x = t.x;
              break;
            case "center":
              r.x = t.x + t.width / 2 - e.width / 2;
              break;
            case "end":
              r.x = t.x + t.width - e.width;
              break;
            default:
              Fe(o);
          }
          break;
        case "left":
          r.x = t.x - e.width;
          break;
        case "right":
          r.x = t.x + t.width;
          break;
        default:
          Fe(n);
      }
      switch (n) {
        case "left":
        case "right":
          switch (o) {
            case "start":
              r.y = t.y;
              break;
            case "center":
              r.y = t.y + t.height / 2 - e.height / 2;
              break;
            case "end":
              r.y = t.y + t.height - e.height;
              break;
            default:
              Fe(o);
          }
          break;
        case "top":
          r.y = t.y - e.height;
          break;
        case "bottom":
          r.y = t.y + t.height;
          break;
        default:
          Fe(n);
      }
      return r;
    },
    constrain: (e, t) => {
      if (!t) return e;
      let n = Math.max(e.y, t.y);
      n = Math.min(n, t.y + t.height - e.height);
      let o = Math.max(e.x, t.x);
      return (
        (o = Math.min(o, t.x + t.width - e.width)),
        { x: o, y: n, width: e.width, height: e.height }
      );
    },
    closestEdge: (e, t) => {
      let n = R.center(e),
        o = ot(t, n),
        r = R.edges(e);
      for (let i = 0; i < r.length; i++) {
        let a = r[i];
        if (a && ot.intersection(o, a, !0)) {
          let s = Ls[i];
          return (Vt(s, () => `Invalid edge name: ${JSON.stringify(Ls)}`), { edge: a, name: s });
        }
      }
    },
    closestRect: (e, t) => {
      let n = 0,
        o = e[0];
      Vt(o, "Rect array is empty");
      let r = R.pointDistance(o, t);
      for (let i = 1; i < e.length; i += 1) {
        let a = e[i];
        Vt(a);
        let s = R.pointDistance(a, t);
        if ((s < r && ((n = i), (o = a), (r = s)), r === 0)) break;
      }
      return { rect: o, index: n };
    },
  },
  Ls = ["top", "right", "bottom", "left"];
function ws(e, t, n) {
  let o = n ? `, use ${n} instead` : "",
    r = `Deprecation warning: ${e} will be removed in version ${t}${o}.`;
  us(r);
}
var zn = class {
  observers = new Set();
  transactions = {};
  add(t) {
    this.observers.add(t);
    let n = !1;
    return () => {
      n || ((n = !0), this.remove(t));
    };
  }
  remove(t) {
    this.observers.delete(t);
  }
  notify(t, n) {
    if (n) {
      let o = this.transactions[n] || t;
      ((o.value = t.value), (this.transactions[n] = o));
    } else this.callObservers(t);
  }
  finishTransaction(t) {
    let n = this.transactions[t];
    return (delete this.transactions[t], this.callObservers(n, t));
  }
  callObservers(t, n) {
    let o = [];
    return (
      new Set(this.observers).forEach((r) => {
        typeof r == "function" ? r(t, n) : (r.update(t, n), o.push(r.finish));
      }),
      o
    );
  }
};
var ie = (() => {
    function e(t) {
      return (
        ws(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        we(t) ? t : new _r(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let n = Math.random(),
          o = new Set();
        t((a, s) => {
          (a.set(s, n), o.add(a));
        }, n);
        let i = [];
        (o.forEach((a) => {
          i.push(...a.finishTransaction(n));
        }),
          i.forEach((a) => {
            a(n);
          }));
      }),
      (e.getNumber = (t, n = 0) => e.get(t, n)),
      (e.get = (t, n) => (t == null ? n : we(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let o in t) {
          let r = t[o];
          we(r) ? (n[o] = r.get()) : (n[o] = r);
        }
        return n;
      }),
      e
    );
  })(),
  Ms = "onUpdate",
  Bs = "finishTransaction";
function we(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    Ms in e &&
    e[Ms] instanceof Function &&
    Bs in e &&
    e[Bs] instanceof Function
  );
}
function Wf(e, t) {
  return {
    interpolate(n, o) {
      let r = n.get(),
        i = o.get(),
        a = ie(r);
      return (s) => {
        let l = t.interpolate(r, i)(s);
        return (a.set(l), a);
      };
    },
    difference(n, o) {
      let r = n.get();
      return t.difference(r, o.get());
    },
  };
}
var _r = class {
  constructor(t) {
    this.value = t;
  }
  value;
  observers = new zn();
  static interpolationFor(t, n) {
    if (we(t)) return Wf(t, n);
  }
  get() {
    return this.value;
  }
  set(t, n) {
    let o = this.value;
    (we(t) && (t = t.get()), (this.value = t));
    let r = { value: t, oldValue: o };
    this.observers.notify(r, n);
  }
  finishTransaction(t) {
    return this.observers.finishTransaction(t);
  }
  onUpdate(t) {
    return this.observers.add(t);
  }
};
function zf(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Hn(e) {
  return typeof e != "string" && typeof e != "number";
}
function Gn(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !zf(e);
}
function I(e) {
  return Number.isFinite(e);
}
function RS(e) {
  return I(e) ? e : void 0;
}
var wS = {
    left: null,
    right: null,
    top: null,
    bottom: null,
    centerX: "50%",
    centerY: "50%",
    aspectRatio: null,
    parentSize: null,
    width: 100,
    height: 100,
  },
  _n = ((a) => (
    (a[(a.FixedNumber = 0)] = "FixedNumber"),
    (a[(a.Percentage = 1)] = "Percentage"),
    (a[(a.Auto = 2)] = "Auto"),
    (a[(a.FractionOfFreeSpace = 3)] = "FractionOfFreeSpace"),
    (a[(a.Viewport = 4)] = "Viewport"),
    (a[(a.FitImage = 5)] = "FitImage"),
    a
  ))(_n || {});
function Pt(e) {
  return Tt(e) ? !1 : e === 2 || e === 5;
}
function MS(e) {
  return !(!Gn(e) || !Hn(e));
}
var Ur = {
  quickfix: (e) => (
    (Pt(e.widthType) || Pt(e.heightType)) && (e.aspectRatio = null),
    I(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || Pt(e.widthType) || I(e.maxWidth)) && (e.right = !1), (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || Pt(e.heightType) || I(e.maxHeight)) && (e.bottom = !1), (e.heightType = 0)),
    e
  ),
};
function nn(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var Kr = {
    fromProperties: (e) => {
      let {
          left: t,
          right: n,
          top: o,
          bottom: r,
          width: i,
          height: a,
          centerX: s,
          centerY: l,
          aspectRatio: u,
          autoSize: c,
        } = e,
        m = Ur.quickfix({
          left: I(t) || we(t),
          right: I(n) || we(n),
          top: I(o) || we(o),
          bottom: I(r) || we(r),
          widthType: nn(i),
          heightType: nn(a),
          aspectRatio: u || null,
          fixedSize: c === !0,
        }),
        f = null,
        h = null,
        T = 0,
        V = 0;
      if (m.widthType !== 0 && typeof i == "string") {
        let b = parseFloat(i);
        i.endsWith("fr") ? ((T = 3), (f = b)) : i === "auto" ? (T = 2) : ((T = 1), (f = b / 100));
      } else i !== void 0 && typeof i != "string" && (f = ie.getNumber(i));
      if (m.heightType !== 0 && typeof a == "string") {
        let b = parseFloat(a);
        a.endsWith("fr")
          ? ((V = 3), (h = b))
          : a === "auto"
            ? (V = 2)
            : ((V = 1), (h = parseFloat(a) / 100));
      } else a !== void 0 && typeof a != "string" && (h = ie.getNumber(a));
      let P = 0.5,
        y = 0.5;
      return (
        s && (P = parseFloat(s) / 100),
        l && (y = parseFloat(l) / 100),
        {
          left: m.left ? ie.getNumber(t) : null,
          right: m.right ? ie.getNumber(n) : null,
          top: m.top ? ie.getNumber(o) : null,
          bottom: m.bottom ? ie.getNumber(r) : null,
          widthType: T,
          heightType: V,
          width: f,
          height: h,
          aspectRatio: m.aspectRatio || null,
          centerAnchorX: P,
          centerAnchorY: y,
        }
      );
    },
    toSize: (e, t, n, o) => {
      let r = null,
        i = null,
        a = t?.sizing ? ie.getNumber(t?.sizing.width) : null,
        s = t?.sizing ? ie.getNumber(t?.sizing.height) : null,
        l = Es(e.left, e.right);
      if (a && I(l)) r = a - l;
      else if (n && Pt(e.widthType)) r = n.width;
      else if (I(e.width))
        switch (e.widthType) {
          case 0:
            r = e.width;
            break;
          case 3:
            r = o ? (o.freeSpaceInParent.width / o.freeSpaceUnitDivisor.width) * e.width : null;
            break;
          case 1:
          case 4:
            a && (r = a * e.width);
            break;
          case 2:
          case 5:
            break;
          default:
            Fe(e.widthType);
        }
      let u = Es(e.top, e.bottom);
      if (s && I(u)) i = s - u;
      else if (n && Pt(e.heightType)) i = n.height;
      else if (I(e.height))
        switch (e.heightType) {
          case 0:
            i = e.height;
            break;
          case 3:
            i = o ? (o.freeSpaceInParent.height / o.freeSpaceUnitDivisor.height) * e.height : null;
            break;
          case 1:
          case 4:
            s && (i = s * e.height);
            break;
          case 2:
          case 5:
            break;
          default:
            Fe(e.heightType);
        }
      return Kf(r, i, e, { height: s ?? 0, width: a ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, n = null, o = !1, r = null) => {
      let i = e.left || 0,
        a = e.top || 0,
        { width: s, height: l } = Kr.toSize(e, t, n, r),
        u = t?.positioning ?? null,
        c = u ? ie.getNumber(u.width) : null,
        m = u ? ie.getNumber(u.height) : null;
      (e.left !== null
        ? (i = e.left)
        : c && e.right !== null
          ? (i = c - e.right - s)
          : c && (i = e.centerAnchorX * c - s / 2),
        e.top !== null
          ? (a = e.top)
          : m && e.bottom !== null
            ? (a = m - e.bottom - l)
            : m && (a = e.centerAnchorY * m - l / 2));
      let f = { x: i, y: a, width: s, height: l };
      return o ? R.pixelAligned(f) : f;
    },
  },
  Hf = 200,
  Gf = 200;
function jn(e, t, n, o) {
  if (typeof t == "string") {
    if (t.endsWith("%") && n)
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * n.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith("vh")) {
      if (!o) return jf(e);
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * o.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * o.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function jf(e) {
  switch (e) {
    case "minWidth":
    case "minHeight":
      return Number.NEGATIVE_INFINITY;
    case "maxWidth":
    case "maxHeight":
      return Number.POSITIVE_INFINITY;
    default:
      Fe(e, "unknown constraint key");
  }
}
function _f(e, t, n, o) {
  return (
    t.minHeight && (e = Math.max(jn("minHeight", t.minHeight, n, o), e)),
    t.maxHeight && (e = Math.min(jn("maxHeight", t.maxHeight, n, o), e)),
    e
  );
}
function Uf(e, t, n, o) {
  return (
    t.minWidth && (e = Math.max(jn("minWidth", t.minWidth, n, o), e)),
    t.maxWidth && (e = Math.min(jn("maxWidth", t.maxWidth, n, o), e)),
    e
  );
}
function Kf(e, t, n, o, r) {
  let i = Uf(I(e) ? e : Hf, n, o, r),
    a = _f(I(t) ? t : Gf, n, o, r);
  return (
    I(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (I(n.left) && I(n.right)
        ? (a = i / n.aspectRatio)
        : I(n.top) && I(n.bottom)
          ? (i = a * n.aspectRatio)
          : n.widthType !== 0
            ? (a = i / n.aspectRatio)
            : (i = a * n.aspectRatio)),
    { width: i, height: a }
  );
}
function Es(e, t) {
  return !I(e) || !I(t) ? null : e + t;
}
var vt = ((d) => (
  (d.AbTestsEntityTypeRootNode = "AbTestsEntityTypeRootNode"),
  (d.AgentDragSelectTool = "AgentDragSelectTool"),
  (d.AgentPanelTool = "AgentPanelTool"),
  (d.AgentSelectTool = "AgentSelectTool"),
  (d.AgentSkillNode = "AgentSkillNode"),
  (d.AgentSkillsListNode = "AgentSkillsListNode"),
  (d.AnalyticsScopeNode = "AnalyticsScopeNode"),
  (d.AssetsEntityTypeRootNode = "AssetsEntityTypeRootNode"),
  (d.BlockquoteStylePresetNode = "BlockquoteStylePresetNode"),
  (d.BooleanShapeNode = "BooleanShapeNode"),
  (d.BoxShadow = "BoxShadow"),
  (d.BranchNode = "BranchNode"),
  (d.BranchesNode = "BranchesNode"),
  (d.CanvasNode = "CanvasNode"),
  (d.CanvasPageNode = "CanvasPageNode"),
  (d.CanvasScopeNode = "CanvasScopeNode"),
  (d.ChatTool = "ChatTool"),
  (d.CodeComponentNode = "CodeComponentNode"),
  (d.CollectionReferenceVariableEditTool = "CollectionReferenceVariableEditTool"),
  (d.CollectionItemNode = "CollectionItemNode"),
  (d.CollectionNode = "CollectionNode"),
  (d.Color = "Color"),
  (d.ColorStyleTokenListNode = "ColorStyleTokenListNode"),
  (d.ColorStyleTokenNode = "ColorStyleTokenNode"),
  (d.ComponentPresetNode = "ComponentPresetNode"),
  (d.ConicGradient = "ConicGradient"),
  (d.ContentManagementNode = "ContentManagementNode"),
  (d.ContentManagementEntityTypeRootNode = "ContentManagementEntityTypeRootNode"),
  (d.CreateCodeComponentBaseTool = "CreateCodeComponentBaseTool"),
  (d.CreateFrameBaseTool = "CreateFrameBaseTool"),
  (d.CreateShapeBaseTool = "CreateShapeBaseTool"),
  (d.CreateTextTool = "CreateTextTool"),
  (d.CustomCodeScopeNode = "CustomCodeScopeNode"),
  (d.CustomCodeNode = "CustomCodeNode"),
  (d.DatabaseListNode = "DatabaseListNode"),
  (d.DatabaseNode = "DatabaseNode"),
  (d.DatabaseTableNode = "DatabaseTableNode"),
  (d.DateVariableEditTool = "DateVariableEditTool"),
  (d.DesignPageNode = "DesignPageNode"),
  (d.DesignPageEntityTypeRootNode = "DesignPageEntityTypeRootNode"),
  (d.EntityFolderNode = "EntityFolderNode"),
  (d.EntityReferenceNode = "EntityReferenceNode"),
  (d.EnumVariableEditTool = "EnumVariableEditTool"),
  (d.ErrorListNode = "ErrorListNode"),
  (d.ErrorNode = "ErrorNode"),
  (d.ExportOptions = "ExportOptions"),
  (d.ExternalModuleNode = "ExternalModuleNode"),
  (d.ExternalModulesListNode = "ExternalModulesListNode"),
  (d.FeedbackTool = "FeedbackTool"),
  (d.FormBooleanInputNode = "FormBooleanInputNode"),
  (d.FormPlainTextInputNode = "FormPlainTextInputNode"),
  (d.FormSelectNode = "FormSelectNode"),
  (d.FrameNode = "FrameNode"),
  (d.FunnelNode = "FunnelNode"),
  (d.FunnelsEntityTypeRootNode = "FunnelsEntityTypeRootNode"),
  (d.FunnelStepActionNode = "FunnelStepActionNode"),
  (d.FunnelStepNode = "FunnelStepNode"),
  (d.GapTool = "GapTool"),
  (d.GradientColorStop = "GradientColorStop"),
  (d.GradientToolManagerTool = "GradientToolManagerTool"),
  (d.GuideMoveTool = "GuideMoveTool"),
  (d.HeaderRouteNode = "HeaderRouteNode"),
  (d.FirewallRouteNode = "FirewallRouteNode"),
  (d.HighlightStackItemTool = "HighlightStackItemTool"),
  (d.HighlightTool = "HighlightTool"),
  (d.ImageStylePresetNode = "ImageStylePresetNode"),
  (d.InitialTool = "InitialTool"),
  (d.InlineCodeStylePresetNode = "InlineCodeStylePresetNode"),
  (d.LayoutTemplateNode = "LayoutTemplateNode"),
  (d.LineAnchorMoveTool = "LineAnchorMoveTool"),
  (d.LinearGradient = "LinearGradient"),
  (d.LinkStylePresetNode = "LinkStylePresetNode"),
  (d.LinkTool = "LinkTool"),
  (d.LoadingShieldTool = "LoadingShieldTool"),
  (d.LocalizationGlossaryNode = "LocalizationGlossaryNode"),
  (d.LocalizationGlossaryItemNode = "LocalizationGlossaryItemNode"),
  (d.LocalModuleNode = "LocalModuleNode"),
  (d.LocalModulesListNode = "LocalModulesListNode"),
  (d.MoveTool = "MoveTool"),
  (d.MutableNode = "MutableNode"),
  (d.OvalShapeNode = "OvalShapeNode"),
  (d.OverlayNode = "OverlayNode"),
  (d.PaddingTool = "PaddingTool"),
  (d.PageLinkTool = "PageLinkTool"),
  (d.PanTool = "PanTool"),
  (d.PathCurveBendTool = "PathCurveBendTool"),
  (d.PathDefaultTool = "PathDefaultTool"),
  (d.PathNode = "PathNode"),
  (d.PathSegment = "PathSegment"),
  (d.PathSegmentAdditionTool = "PathSegmentAdditionTool"),
  (d.PathSegmentHandleMoveTool = "PathSegmentHandleMoveTool"),
  (d.PathSegmentMoveTool = "PathSegmentMoveTool"),
  (d.PathSegmentSelectTool = "PathSegmentSelectTool"),
  (d.PolygonShapeNode = "PolygonShapeNode"),
  (d.PresetsListNode = "PresetsListNode"),
  (d.PreviewSettings = "PreviewSettings"),
  (d.ProxyRouteNode = "ProxyRouteNode"),
  (d.RadialGradient = "RadialGradient"),
  (d.RadiusTool = "RadiusTool"),
  (d.RecoveryTool = "RecoveryTool"),
  (d.RectangleShapeNode = "RectangleShapeNode"),
  (d.RedirectRouteNode = "RedirectRouteNode"),
  (d.ResizeTool = "ResizeTool"),
  (d.RewriteRouteNode = "RewriteRouteNode"),
  (d.RichTextEditTool = "RichTextEditTool"),
  (d.RichTextNode = "RichTextNode"),
  (d.RichTextVariableEditTool = "RichTextVariableEditTool"),
  (d.RootNode = "RootNode"),
  (d.RotateTool = "RotateTool"),
  (d.RouteNode = "RouteNode"),
  (d.RouteLocaleNode = "RouteLocaleNode"),
  (d.RouteSegmentNode = "RouteSegmentNode"),
  (d.RouteSegmentRootNode = "RouteSegmentRootNode"),
  (d.RoutesNode = "RoutesNode"),
  (d.SampleColorTool = "SampleColorTool"),
  (d.ScaleTool = "ScaleTool"),
  (d.ScopeNode = "ScopeNode"),
  (d.SelectTool = "SelectTool"),
  (d.ShaderNode = "ShaderNode"),
  (d.Shadow = "Shadow"),
  (d.ShapeContainerNode = "ShapeContainerNode"),
  (d.ShapeGroupNode = "ShapeGroupNode"),
  (d.SharedEnumListNode = "SharedEnumListNode"),
  (d.SharedEnumNode = "SharedEnumNode"),
  (d.SlotConnectTool = "SlotConnectTool"),
  (d.SlotNode = "SlotNode"),
  (d.SlotPropertyNode = "SlotPropertyNode"),
  (d.SmartComponentNode = "SmartComponentNode"),
  (d.StarShapeNode = "StarShapeNode"),
  (d.StringVariableEditTool = "StringVariableEditTool"),
  (d.StyledTextDraft = "StyledTextDraft"),
  (d.SVGNode = "SVGNode"),
  (d.TableStylePresetNode = "TableStylePresetNode"),
  (d.TestTool = "TestTool"),
  (d.TextEditTool = "TextEditTool"),
  (d.TextNode = "TextNode"),
  (d.TextStylePresetNode = "TextStylePresetNode"),
  (d.VectorSetNode = "VectorSetNode"),
  (d.VekterGradientTool = "VekterGradientTool"),
  (d.VekterPathEngine = "VekterPathEngine"),
  (d.VekterTool = "VekterTool"),
  (d.ViewportResizeTool = "ViewportResizeTool"),
  (d.WebPageNode = "WebPageNode"),
  (d.ZoomSelectTool = "ZoomSelectTool"),
  (d.ZoomTool = "ZoomTool"),
  d
))(vt || {});
function ES(e, t = class {}) {
  class n extends t {
    __class = vt[e];
    static displayName = `WithClassDiscriminatorMixin(${e})`;
  }
  return ((n.prototype.__class = e), n);
}
function AS(e, t) {
  ((e.prototype.__class = t), (e.displayName = `WithClassDiscriminatorMixin(${t})`));
}
var $f = new Set(Object.keys(vt));
function As(e) {
  return $f.has(e);
}
function Fs(e) {
  if (!As(e)) return !1;
  switch (e) {
    case "AnalyticsScopeNode":
    case "CanvasPageNode":
    case "CanvasScopeNode":
    case "ContentManagementNode":
    case "CustomCodeScopeNode":
    case "DesignPageNode":
    case "ErrorListNode":
    case "LayoutTemplateNode":
    case "LocalizationGlossaryNode":
    case "RoutesNode":
    case "ScopeNode":
    case "SmartComponentNode":
    case "VectorSetNode":
    case "WebPageNode":
      return !0;
    case "AbTestsEntityTypeRootNode":
    case "AgentDragSelectTool":
    case "AgentPanelTool":
    case "AgentSelectTool":
    case "AgentSkillNode":
    case "AgentSkillsListNode":
    case "BlockquoteStylePresetNode":
    case "BooleanShapeNode":
    case "BoxShadow":
    case "BranchNode":
    case "BranchesNode":
    case "CanvasNode":
    case "ChatTool":
    case "CodeComponentNode":
    case "CollectionReferenceVariableEditTool":
    case "CollectionItemNode":
    case "CollectionNode":
    case "Color":
    case "ColorStyleTokenListNode":
    case "ColorStyleTokenNode":
    case "ComponentPresetNode":
    case "ConicGradient":
    case "ContentManagementEntityTypeRootNode":
    case "CreateCodeComponentBaseTool":
    case "CreateFrameBaseTool":
    case "CreateShapeBaseTool":
    case "CreateTextTool":
    case "CustomCodeNode":
    case "DatabaseListNode":
    case "DatabaseNode":
    case "DatabaseTableNode":
    case "DateVariableEditTool":
    case "DesignPageEntityTypeRootNode":
    case "EntityFolderNode":
    case "EntityReferenceNode":
    case "AssetsEntityTypeRootNode":
    case "EnumVariableEditTool":
    case "ErrorNode":
    case "ExportOptions":
    case "ExternalModuleNode":
    case "ExternalModulesListNode":
    case "FeedbackTool":
    case "FirewallRouteNode":
    case "FormBooleanInputNode":
    case "FormPlainTextInputNode":
    case "FormSelectNode":
    case "FrameNode":
    case "FunnelNode":
    case "FunnelsEntityTypeRootNode":
    case "FunnelStepActionNode":
    case "FunnelStepNode":
    case "GapTool":
    case "GradientColorStop":
    case "GradientToolManagerTool":
    case "GuideMoveTool":
    case "HeaderRouteNode":
    case "HighlightStackItemTool":
    case "HighlightTool":
    case "ImageStylePresetNode":
    case "InitialTool":
    case "InlineCodeStylePresetNode":
    case "LineAnchorMoveTool":
    case "LinearGradient":
    case "LinkStylePresetNode":
    case "LinkTool":
    case "LoadingShieldTool":
    case "LocalizationGlossaryItemNode":
    case "LocalModuleNode":
    case "LocalModulesListNode":
    case "MoveTool":
    case "MutableNode":
    case "OvalShapeNode":
    case "OverlayNode":
    case "PaddingTool":
    case "PageLinkTool":
    case "PanTool":
    case "PathCurveBendTool":
    case "PathDefaultTool":
    case "PathNode":
    case "PathSegment":
    case "PathSegmentAdditionTool":
    case "PathSegmentHandleMoveTool":
    case "PathSegmentMoveTool":
    case "PathSegmentSelectTool":
    case "PolygonShapeNode":
    case "PresetsListNode":
    case "PreviewSettings":
    case "ProxyRouteNode":
    case "RadialGradient":
    case "RadiusTool":
    case "RecoveryTool":
    case "RectangleShapeNode":
    case "RedirectRouteNode":
    case "ResizeTool":
    case "RewriteRouteNode":
    case "RichTextEditTool":
    case "RichTextNode":
    case "RichTextVariableEditTool":
    case "RootNode":
    case "RotateTool":
    case "RouteNode":
    case "RouteLocaleNode":
    case "RouteSegmentNode":
    case "RouteSegmentRootNode":
    case "SampleColorTool":
    case "ScaleTool":
    case "SelectTool":
    case "ShaderNode":
    case "Shadow":
    case "ShapeContainerNode":
    case "ShapeGroupNode":
    case "SharedEnumListNode":
    case "SharedEnumNode":
    case "SlotConnectTool":
    case "SlotNode":
    case "SlotPropertyNode":
    case "StarShapeNode":
    case "StringVariableEditTool":
    case "StyledTextDraft":
    case "SVGNode":
    case "TableStylePresetNode":
    case "TestTool":
    case "TextEditTool":
    case "TextNode":
    case "TextStylePresetNode":
    case "VekterGradientTool":
    case "VekterPathEngine":
    case "VekterTool":
    case "ViewportResizeTool":
    case "ZoomSelectTool":
    case "ZoomTool":
      return !1;
    default:
      return W(e);
  }
}
function Os(e) {
  return e ? (e === "RootNode" ? !0 : $r(e)) : !1;
}
function $r(e) {
  return e
    ? !!(qf(e) || qr(e) || e === "OverlayNode" || e === "SlotNode" || e === "SlotPropertyNode")
    : !1;
}
function qf(e) {
  if (!e) return !1;
  switch (e) {
    case "CodeComponentNode":
    case "FormBooleanInputNode":
    case "FormPlainTextInputNode":
    case "FormSelectNode":
    case "FrameNode":
    case "RichTextNode":
    case "ShapeContainerNode":
    case "SVGNode":
    case "TextNode":
    case "PathNode":
    case "BooleanShapeNode":
    case "ShaderNode":
    case "ShapeGroupNode":
    case "RectangleShapeNode":
    case "OvalShapeNode":
    case "StarShapeNode":
    case "PolygonShapeNode":
      return !0;
    default:
      return !1;
  }
}
function qr(e) {
  switch (e) {
    case "PathNode":
    case "BooleanShapeNode":
    case "ShapeGroupNode":
    case "RectangleShapeNode":
    case "OvalShapeNode":
    case "StarShapeNode":
    case "PolygonShapeNode":
      return !0;
    default:
      return !1;
  }
}
function Ws(e) {
  switch (e) {
    case "CollectionNode":
    case "CollectionItemNode":
    case "ContentManagementNode":
      return !0;
    default:
      return !1;
  }
}
function _S(e) {
  switch (e) {
    case "CanvasPageNode":
    case "CanvasScopeNode":
    case "DesignPageNode":
    case "LayoutTemplateNode":
    case "SmartComponentNode":
    case "VectorSetNode":
    case "WebPageNode":
      return !0;
    default:
      return !1;
  }
}
function US(e) {
  return e ? Fs(e) : !1;
}
function KS(e) {
  switch (e) {
    case "BlockquoteStylePresetNode":
    case "ImageStylePresetNode":
    case "InlineCodeStylePresetNode":
    case "LinkStylePresetNode":
    case "TableStylePresetNode":
    case "TextStylePresetNode":
      return !0;
    default:
      return !1;
  }
}
function $S(e) {
  switch (e) {
    case "AbTestsEntityTypeRootNode":
    case "AssetsEntityTypeRootNode":
    case "ContentManagementEntityTypeRootNode":
    case "DesignPageEntityTypeRootNode":
    case "FunnelsEntityTypeRootNode":
      return !0;
    default:
      return !1;
  }
}
function k(e, t) {
  return e?.__class === t;
}
function JS(e) {
  return k(e, "RootNode");
}
function ZS(e) {
  return k(e, "AgentSkillNode");
}
function QS(e) {
  return k(e, "AgentSkillsListNode");
}
function eR(e) {
  return k(e, "DatabaseListNode");
}
function Xr(e) {
  return k(e, "FrameNode");
}
function zs(e) {
  return Xr(e) && e.layout === "stack";
}
function Hs(e) {
  return Xr(e) && e.layout === "grid";
}
function tR(e) {
  return Xr(e) && e.layout !== void 0;
}
function Yr(e) {
  return !e || (!zs(e) && !Hs(e)) ? !1 : !!e.dataIdentifier;
}
function Xf(e) {
  return !e || (!zs(e) && !Hs(e)) || e.dataIdentifier ? !1 : !!e.dataRepeaterArray;
}
function Me(e) {
  return e ? Yr(e) || Xf(e) : !1;
}
function It(e) {
  return k(e, "SmartComponentNode");
}
function kt(e) {
  return e?.__class === "LayoutTemplateNode";
}
function Gs(e) {
  return e?.__class === "VectorSetNode";
}
function Oe(e) {
  return k(e, "WebPageNode");
}
function nR(e) {
  return e?.__class === "DesignPageNode";
}
function js(e) {
  return e?.__class === "CanvasPageNode";
}
function oR(e) {
  return k(e, "ContentManagementNode");
}
function rR(e) {
  return e?.__class === "TextNode";
}
function Dt(e) {
  return k(e, "RichTextNode");
}
function Yf(e) {
  return k(e, "CodeComponentNode");
}
function iR(e) {
  return k(e, "ShaderNode");
}
function aR(e) {
  return k(e, "OverlayNode");
}
function _s(e) {
  return k(e, "SVGNode");
}
function Un(e) {
  return k(e, "CollectionNode");
}
function Us(e) {
  return k(e, "CollectionItemNode");
}
function sR(e) {
  return e?.__class === "BranchNode";
}
function lR(e) {
  return k(e, "BranchesNode");
}
function Kn(e) {
  return k(e, "ShapeContainerNode");
}
function Jf(e) {
  return e?.__class === "BooleanShapeNode";
}
function Zf(e) {
  return e?.__class === "ShapeGroupNode";
}
function Qf(e) {
  return e?.__class === "PathNode";
}
function em(e) {
  return e?.__class === "RectangleShapeNode";
}
function tm(e) {
  return e?.__class === "StarShapeNode";
}
function nm(e) {
  return e?.__class === "OvalShapeNode";
}
function om(e) {
  return e?.__class === "PolygonShapeNode";
}
function uR(e) {
  return Zf(e) || Jf(e) || Qf(e) || em(e) || nm(e) || om(e) || tm(e);
}
function dR(e) {
  return k(e, "RoutesNode");
}
function cR(e) {
  return k(e, "RedirectRouteNode");
}
function pR(e) {
  return k(e, "ProxyRouteNode");
}
function fR(e) {
  return k(e, "RewriteRouteNode");
}
function mR(e) {
  return k(e, "HeaderRouteNode");
}
function yR(e) {
  return k(e, "FirewallRouteNode");
}
function hR(e) {
  return k(e, "ColorStyleTokenNode");
}
function xR(e) {
  return k(e, "ColorStyleTokenListNode");
}
function gR(e) {
  return k(e, "SharedEnumListNode");
}
function Ks(e) {
  return k(e, "SharedEnumNode");
}
function bR(e) {
  return k(e, "ErrorListNode");
}
function TR(e) {
  return e?.__class === "ErrorNode";
}
function CR(e) {
  return e?.__class === "FormPlainTextInputNode";
}
function VR(e) {
  return e?.__class === "FormBooleanInputNode";
}
function SR(e) {
  return e?.__class === "FormSelectNode";
}
function RR(e) {
  return k(e, "ComponentPresetNode");
}
function NR(e) {
  return k(e, "PresetsListNode");
}
function Jr(e) {
  return e?.__class === "TextStylePresetNode";
}
function PR(e) {
  return Jr(e) && !e.replicaInfo;
}
function vR(e) {
  return Jr(e) && !!e.replicaInfo;
}
function IR(e) {
  return e?.__class === "LinkStylePresetNode";
}
function $s(e) {
  return e?.__class === "BlockquoteStylePresetNode";
}
function kR(e) {
  return e?.__class === "TableStylePresetNode";
}
function DR(e) {
  return $s(e) && !e.replicaInfo;
}
function LR(e) {
  return !!e?.replicaInfo && (Jr(e) || $s(e));
}
function wR(e) {
  return e?.__class === "ImageStylePresetNode";
}
function MR(e) {
  return e?.__class === "InlineCodeStylePresetNode";
}
function $n(e) {
  return k(e, "RouteSegmentNode");
}
function BR(e) {
  return k(e, "RouteSegmentRootNode");
}
function qs(e) {
  return k(e, "SlotNode");
}
function qn(e) {
  return k(e, "SlotPropertyNode");
}
function ER(e) {
  return k(e, "EntityFolderNode");
}
function AR(e) {
  return k(e, "EntityReferenceNode");
}
function FR(e) {
  return k(e, "ExternalModulesListNode");
}
function OR(e) {
  return e?.__class === "ExternalModuleNode";
}
function WR(e) {
  return k(e, "AnalyticsScopeNode");
}
function zR(e) {
  return e?.__class === "LocalizationGlossaryNode";
}
function HR(e) {
  return e?.__class === "LocalizationGlossaryItemNode";
}
function GR(e) {
  return k(e, "FunnelNode");
}
function jR(e) {
  return k(e, "FunnelStepNode");
}
function _R(e) {
  return k(e, "FunnelStepActionNode");
}
function rm(e) {
  return e ? Yf(e) && e.isVectorInstance : !1;
}
function UR(e) {
  if (!rm(e)) return !1;
  let t = e.dynamicVectorSetIdentifier;
  return t?.type === "variableReference" || t?.type === "computedValue";
}
function KR(e) {
  return e?.__class === "CustomCodeScopeNode";
}
function $R(e) {
  return e?.__class === "CustomCodeNode";
}
var Xs = "hidden master",
  XR = { isMaster: !1, isExternalMaster: null, replicaInfo: null },
  im = "isMaster";
function on(e) {
  return im in e;
}
function Lt(e) {
  return on(e) && e.isMaster;
}
function YR(e) {
  return on(e) && !!e.isExternalMaster;
}
function JR(e) {
  let t = on(e) ? e.isExternalMaster : null;
  return !!t && t !== Xs;
}
function ZR(e) {
  return on(e) ? e.isExternalMaster === Xs : !1;
}
function rn(e) {
  return e ? on(e) && !!e.replicaInfo : !1;
}
function QR(e) {
  return e ? !rn(e) : !1;
}
function Ys(e) {
  return rn(e) && !!e.replicaInfo.inheritsFrom;
}
function wt(e) {
  return e ? !!e.originalid && !rn(e) : !1;
}
function eN(e) {
  return !!e.originalid;
}
function Js(e) {
  for (let t of e.ancestors()) if (Lt(t)) return !0;
  return !1;
}
function tN(e) {
  return Lt(e) || Js(e);
}
function nN(e, { includeSelf: t } = { includeSelf: !0 }) {
  if (t && Lt(e)) return e;
  for (let n of e.ancestors()) if (Lt(n)) return n;
  return null;
}
function oN(e) {
  return wt(e) || Js(e);
}
function Mt(e) {
  return j(e) && e.length === 4 && e.every(S);
}
function Zs(e) {
  return Mt(e) ? [Math.min(Math.max(e[0], 0), 1), e[1], Math.min(Math.max(e[2], 0), 1), e[3]] : e;
}
function Xn(e) {
  for (let t of Reflect.ownKeys(e)) {
    let n = e[t];
    !n || (typeof n != "object" && !Cs(n)) || Xn(n);
  }
  return Object.freeze(e);
}
var am = {
  type: "spring",
  ease: [0.44, 0, 0.56, 1],
  duration: 0.4,
  delay: 0,
  stiffness: 400,
  damping: 30,
  mass: 1,
  durationBasedSpring: !0,
  bounce: 0.2,
  stagger: 0,
};
Xn(am);
var rt = {
  type: "spring",
  ease: [0.44, 0, 0.56, 1],
  duration: 0.3,
  delay: 0,
  stiffness: 500,
  damping: 60,
  mass: 1,
  stagger: 0,
};
Xn(rt);
var Bt = "type",
  Yn = "durationBasedSpring",
  Zn = "ease",
  sm = "duration",
  lm = "delay",
  Qs = "stiffness",
  el = "damping",
  um = "mass",
  ti = [sm, lm, Qs, el, um],
  Zr = "bounce",
  Jn = "stagger";
function an(e) {
  return e === "spring" || e === "tween" || e === "inertia" || e === !1;
}
function ni(e) {
  return !g(e) || !an(e[Bt]) || !Mt(e[Zn]) ? !1 : ti.every((t) => S(e[t]));
}
function Qn(e) {
  return g(e) ? (an(e[Bt]) || Mt(e[Zn]) ? !0 : ti.some((t) => S(e[t]))) : !1;
}
function tl(e) {
  switch (e.type) {
    case "spring":
      return { type: "spring", ...hm(e), delay: e.delay };
    case "tween":
      return { type: "tween", duration: e.duration, ease: Zs(e.ease), delay: e.delay };
    case "inertia":
      return {
        type: "inertia",
        bounceStiffness: e.stiffness,
        bounceDamping: e.damping,
        delay: e.delay,
      };
    case !1:
      return { type: "tween", duration: 0 };
    default:
      W(e.type);
  }
}
var dm = ["stiffness", "damping", "mass"],
  cm = ["duration", "bounce"],
  pm = ["ease"];
function fm(e) {
  return "type" in e
    ? e.type === !1
      ? !0
      : e.type !== "tween" || pm.some((t) => t in e)
        ? !1
        : e.duration === 0
    : !1;
}
function mm(e) {
  return e.type !== "spring" || dm.some((t) => t in e) ? !1 : cm.some((t) => t in e);
}
var Qr = "bounceStiffness",
  ei = "bounceDamping",
  ym = (e) => {
    let t = { ...rt },
      n = e[Bt];
    an(n) && (t[Bt] = fm(e) ? !1 : n);
    let o = e[Zn];
    Mt(o) && (t[Zn] = o);
    for (let r of ti) {
      let i = e[r];
      S(i) && (t[r] = i);
    }
    return (
      Qr in e && S(e[Qr]) && (t[Qs] = e[Qr]),
      ei in e && S(e[ei]) && (t[el] = e[ei]),
      Jn in e && S(e[Jn]) && (t[Jn] = e[Jn]),
      Yn in e ? (t[Yn] = e[Yn]) : mm(e) && (t[Yn] = !0),
      Zr in e && (t[Zr] = e[Zr]),
      t
    );
  };
function nl(e) {
  return Qn(e) && !an(e[Bt]);
}
function hN(e, t = rt) {
  return g(e) && an(e[Bt]) ? e : Qn(e) ? ym(e) : t;
}
function xN(e) {
  return ni(e) && e.type === "tween";
}
function gN(e) {
  return `all ${e.duration}s cubic-bezier(${e.ease.join(",")}) ${e.delay}s`;
}
function hm(e) {
  return e.type === "spring" && e.durationBasedSpring
    ? { duration: Math.min(e.duration, 10), bounce: e.bounce ?? 0 }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
var bN = (e) => e * 1e3;
var O = ((D) => (
    (D.Boolean = "boolean"),
    (D.Number = "number"),
    (D.MotionValue = "motionvalue"),
    (D.Dimension = "dimension"),
    (D.String = "string"),
    (D.RichText = "richtext"),
    (D.FusedNumber = "fusednumber"),
    (D.Enum = "enum"),
    (D.SegmentedEnum = "segmentedenum"),
    (D.Color = "color"),
    (D.Image = "image"),
    (D.ResponsiveImage = "responsiveimage"),
    (D.File = "file"),
    (D.ComponentInstance = "componentinstance"),
    (D.Slot = "slot"),
    (D.Array = "array"),
    (D.EventHandler = "eventhandler"),
    (D.ChangeHandler = "changehandler"),
    (D.Transition = "transition"),
    (D.BoxShadow = "boxshadow"),
    (D.Link = "link"),
    (D.Date = "date"),
    (D.Object = "object"),
    (D.Font = "font"),
    (D.PageScope = "pagescope"),
    (D.ScrollSectionRef = "scrollsectionref"),
    (D.Ref = "ref"),
    (D.CustomCursor = "customcursor"),
    (D.Border = "border"),
    (D.Cursor = "cursor"),
    (D.Padding = "padding"),
    (D.BorderRadius = "borderradius"),
    (D.Gap = "gap"),
    (D.CollectionReference = "collectionreference"),
    (D.MultiCollectionReference = "multicollectionreference"),
    (D.TrackingId = "trackingid"),
    (D.VectorSetItem = "vectorsetitem"),
    (D.LinkRelValues = "linkrelvalues"),
    (D.Location = "location"),
    (D.SharedType = "sharedtype"),
    D
  ))(O || {}),
  xm = {
    number: !0,
    enum: !0,
    boolean: !0,
    string: !0,
    richtext: !0,
    color: !0,
    image: !0,
    responsiveimage: !0,
    file: !0,
    transition: !0,
    boxshadow: !0,
    link: !0,
    date: !0,
    array: !0,
    object: !0,
    fusednumber: !0,
    font: !0,
    pagescope: !0,
    scrollsectionref: !0,
    segmentedenum: !0,
    customcursor: !0,
    border: !0,
    cursor: !0,
    gap: !0,
    padding: !0,
    borderradius: !0,
    collectionreference: !0,
    multicollectionreference: !0,
    trackingid: !0,
    location: !0,
    vectorsetitem: !0,
    eventhandler: !0,
  };
function CN(e) {
  return e.type in xm;
}
var gm = /^(?![\p{L}\p{M}\d-]*-$)(?!-)[\p{L}\p{M}\d-]+$/u,
  ol = /^(?:[\p{L}\p{M}\d](?:[\p{L}\p{M}\d-]*[\p{L}\p{M}\d])?\.)+[\p{L}\p{M}]+$/u;
function SN(e, t) {
  return e
    ? t && e === "www"
      ? "InvalidPhrase"
      : (t ? gm : ol).exec(e)
        ? null
        : "InvalidCharacter"
    : "Empty";
}
function oi(e, t = !1) {
  try {
    let n = new URL(e);
    return n.protocol === "http:" || n.protocol === "https:"
      ? n.hostname === "localhost"
        ? !0
        : ol.test(n.hostname)
      : !t;
  } catch {
    return !1;
  }
}
function RN(e) {
  let t = e.split(/#|\?/u)[0];
  if (!t) return !1;
  let [n, o = ""] = t.split("/", 2),
    r = "/" + o,
    i = new URL("https://example.com");
  return (
    (i.host = n),
    (i.pathname = r),
    !!i.hostname.match(/.+\..+/) && i.href === `https://${n}/${o}`
  );
}
function ri(e) {
  return (
    (e = e.trim()),
    e
      ? oi(e, !0)
        ? { result: "ok", normalizedValue: e }
        : oi(`https://${e}`)
          ? { result: "ok", normalizedValue: `https://${e}` }
          : { result: "error", message: "Please enter a valid URL" }
      : { result: "error", message: "Please enter a valid URL" }
  );
}
var rl = ":([a-z]\\w*)",
  IN = new RegExp(rl, "i"),
  ii = new RegExp(rl, "gi");
var il = "type",
  bm = "fetchDataValue";
function eo(e) {
  return g(e) && il in e && e[il] === bm;
}
function AN(e) {
  return ri(e.url).result !== "error";
}
function FN(e) {
  return e.controlProp
    ? e
    : {
        cacheDuration: e.cacheDuration,
        resultKeyPath: e.resultKeyPath,
        type: "fetchDataValue",
        url: e.url,
        variables: e.variables,
        controlProp: { type: e.resultOutputType, value: e.fallbackValue },
        errorControlProp: void 0,
      };
}
function ON(e) {
  if (e.controlProp) return e.controlProp.value;
  let t = e.fallbackValue;
  return (C(!v(t), "fallbackValue must be defined"), t);
}
function WN(e) {
  return {
    type: "fetchDataValue",
    url: "",
    credentials: "same-origin",
    resultKeyPath: "",
    controlProp: e,
    errorControlProp: e.type === "string" ? { type: "string", value: "Error" } : void 0,
    variables: {},
    cacheDuration: 0,
  };
}
function sl(e, t) {
  if (
    !eo(t) ||
    e.url !== t.url ||
    e.resultKeyPath !== t.resultKeyPath ||
    e.cacheDuration !== t.cacheDuration ||
    e.fallbackValue !== t.fallbackValue
  )
    return !1;
  let n = al(e.url),
    o = al(t.url);
  if (n.length !== o.length) return !1;
  for (let r in e.variables) if (!ce(e.variables[r], t.variables[r])) return !1;
  return !0;
}
function zN(e, t) {
  let n = ri(e.url);
  return n.result !== "ok"
    ? e.url
    : n.normalizedValue.replaceAll(ii, (i, a) => {
        let s = e.variables[a];
        return s ? (p(s) ? s : t(s)) : "";
      });
}
function al(e) {
  let t = e.matchAll(ii),
    n = new Set();
  for (let o of t) {
    let r = o[1];
    r && r.length !== 0 && n.add(r);
  }
  return Array.from(n);
}
var HN = [
  "https://api.fetch.tools/weather?city=:city",
  "https://api.fetch.tools/views",
  "https://api.fetch.tools/location",
  "https://api.fetch.tools/emoji",
];
var ll = {
    motionvalue: !0,
    array: !0,
    boolean: !0,
    color: !0,
    eventhandler: !0,
    image: !0,
    number: !0,
    object: !0,
    dimension: !0,
    string: !0,
    richtext: !0,
    link: !0,
    linkrelvalues: !0,
    date: !0,
    enum: !0,
    file: !0,
    scrollsectionref: !0,
    ref: !0,
    customcursor: !0,
    cursor: !0,
    transition: !0,
    border: !0,
    boxshadow: !0,
    gap: !0,
    padding: !0,
    borderradius: !0,
    collectionreference: !0,
    location: !0,
    multicollectionreference: !0,
    trackingid: !0,
    vectorsetitem: !0,
    sharedtype: !0,
    controlReference: !0,
    nodePropertyControlReference: !0,
    slug: !0,
  },
  Tm = {
    image: !0,
    boolean: !0,
    number: !0,
    color: !0,
    string: !0,
    richtext: !0,
    link: !0,
    date: !0,
    file: !0,
    vectorsetitem: !0,
  };
function to(e) {
  return p(e) && Object.hasOwn(ll, e);
}
function sn(e) {
  return p(e) && Object.hasOwn(Tm, e);
}
var KN = sn,
  Cm = { boolean: !0, number: !0, string: !0, color: !0, date: !0, link: !0, image: !0 };
function $N(e) {
  return p(e) && Object.hasOwn(Cm, e);
}
function qN(e) {
  return An(ll).filter(e);
}
var Vm = { responsiveimage: !0 };
function rP(e) {
  return to(e) ? !0 : p(e) && e in Vm;
}
var Sm = "type",
  Rm = "valueTransform",
  Nm = [
    "contains",
    "containsAny",
    "containsAll",
    "startsWith",
    "endsWith",
    "equals",
    "isSet",
    "greaterThan",
    "lessThan",
    "negate",
    "toBoolean",
    "isBefore",
    "isAfter",
    "isBetweenDates",
    "isIncludedIn",
    "convertFromEnum",
    "convertFromString",
  ],
  Pm = new Set(Nm),
  vm = {
    isSet: !0,
    equals: !0,
    startsWith: !0,
    endsWith: !0,
    contains: !0,
    containsAny: !0,
    containsAll: !0,
    greaterThan: !0,
    lessThan: !0,
    negate: !0,
    numberToPixelString: !0,
    radiusForCorner: !0,
    percentageToCornerShape: !0,
    isBefore: !0,
    isAfter: !0,
    isBetweenDates: !0,
    toString: !0,
    numberToString: !0,
    extractDateSegment: !0,
    toNumber: !0,
    toBoolean: !0,
    reverseArray: !0,
    offsetArray: !0,
    limitArray: !0,
    offsetAndLimitArray: !0,
    arrayLength: !0,
    prefix: !0,
    suffix: !0,
    toResponsiveImage: !0,
    toImageSrc: !0,
    toZIndex: !0,
    toAxisOverflow: !0,
    toOverflowWithClipFallback: !0,
    jsonStringify: !0,
    htmlEscape: !0,
    htmlUnescape: !0,
    addImageAlt: !0,
    isIncludedIn: !0,
    isEven: !0,
    isOdd: !0,
    getGridColumnCSSValue: !0,
    getGridRowCSSValue: !0,
    getNumericColumnGap: !0,
    toggleInList: !0,
  };
function Im(e) {
  return Pm.has(e);
}
function km(e) {
  return Object.hasOwn(vm, e);
}
var Dm = {
  enumToDisplayName: !0,
  convertFromEnum: !0,
  convertFromBoolean: !0,
  convertFromString: !0,
  arrayToArray: !0,
  toDateString: !0,
};
function Lm(e) {
  return Object.hasOwn(Dm, e);
}
var wm = {
    isSet: !0,
    convertFromEnum: !0,
    convertFromBoolean: !0,
    convertFromString: !0,
    enumToDisplayName: !0,
    equals: !0,
    startsWith: !0,
    endsWith: !0,
    contains: !0,
    containsAny: !0,
    containsAll: !0,
    greaterThan: !0,
    lessThan: !0,
    isEven: !0,
    isOdd: !0,
    negate: !0,
    numberToPixelString: !0,
    radiusForCorner: !0,
    percentageToCornerShape: !0,
    isBefore: !0,
    isAfter: !0,
    isBetweenDates: !0,
    toString: !0,
    numberToString: !0,
    toDateString: !0,
    toNumber: !0,
    toBoolean: !0,
    limitArray: !0,
    offsetArray: !0,
    reverseArray: !0,
    offsetAndLimitArray: !0,
    arrayLength: !0,
    prefix: !0,
    suffix: !0,
    toResponsiveImage: !0,
    toImageSrc: !0,
    toZIndex: !0,
    toAxisOverflow: !0,
    toOverflowWithClipFallback: !0,
    jsonStringify: !0,
    htmlEscape: !0,
    htmlUnescape: !0,
    addImageAlt: !0,
    isIncludedIn: !0,
    arrayToArray: !0,
    getGridColumnCSSValue: !0,
    getGridRowCSSValue: !0,
    getNumericColumnGap: !0,
    extractDateSegment: !0,
    toggleInList: !0,
  },
  oo = Ps(wm);
function iP() {
  return oo;
}
function Mm(e) {
  let t = ai[e];
  return !(Ve(t) || v(t));
}
function aP(e) {
  return Mm(e.name);
}
function sP(e) {
  return Im(e.name) && dl(e.name) !== null;
}
function Bm(e) {
  return km(e) || Lm(e);
}
var ul = [
  "enum",
  "boolean",
  "number",
  "string",
  "image",
  "date",
  "responsiveimage",
  "link",
  "file",
  "richtext",
  "array",
  "object",
  "collectionreference",
  "multicollectionreference",
];
function lP(e) {
  return ul.includes(e);
}
var ai = {
    contains: ["string", "multicollectionreference"],
    containsAny: ["multicollectionreference"],
    containsAll: ["multicollectionreference"],
    endsWith: ["string"],
    startsWith: ["string"],
    prefix: ["string"],
    suffix: ["string"],
    equals: ["string", "boolean", "number", "enum", "date", "collectionreference"],
    isSet: ul,
    greaterThan: ["number"],
    lessThan: ["number"],
    negate: ["boolean"],
    isBefore: ["date"],
    isAfter: ["date"],
    isBetweenDates: ["date"],
    toDateString: ["date"],
    toString: ["number"],
    numberToString: ["number"],
    isEven: ["number"],
    isOdd: ["number"],
    enumToDisplayName: ["enum"],
    convertFromEnum: ["enum"],
    convertFromBoolean: ["boolean"],
    isIncludedIn: ["collectionreference"],
    convertFromString: ["string"],
    arrayLength: ["array"],
    reverseArray: ["array"],
    offsetArray: ["array"],
    limitArray: ["array"],
    arrayToArray: ["array"],
    extractDateSegment: ["date"],
    toggleInList: ["multicollectionreference"],
    offsetAndLimitArray: null,
    toBoolean: null,
    toNumber: null,
    toResponsiveImage: null,
    toImageSrc: null,
    toZIndex: null,
    toAxisOverflow: null,
    toOverflowWithClipFallback: null,
    jsonStringify: null,
    htmlEscape: null,
    htmlUnescape: null,
    addImageAlt: null,
    numberToPixelString: null,
    radiusForCorner: null,
    percentageToCornerShape: null,
    getGridColumnCSSValue: null,
    getGridRowCSSValue: null,
    getNumericColumnGap: null,
  },
  Em = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of oo) {
        let n = ai[t];
        if (n)
          for (let o of n) {
            let r = e.get(o);
            r ? r.push(t) : e.set(o, [t]);
          }
      }
      return e;
    };
  })();
function Am(e) {
  return Em().get(e);
}
function uP(e) {
  let t = Am(e);
  return !!(t && t.length > 0);
}
function dl(e) {
  return ai[e];
}
var Fm = {
  contains: { value: ["string", "collectionreference"] },
  containsAny: { value: ["multicollectionreference"] },
  containsAll: { value: ["multicollectionreference"] },
  endsWith: { value: ["string"] },
  startsWith: { value: ["string"] },
  equals: { value: ["string", "boolean", "number", "enum", "date", "collectionreference"] },
  greaterThan: { value: ["number"] },
  lessThan: { value: ["number"] },
  isBefore: { value: ["date"] },
  isAfter: { value: ["date"] },
  isBetweenDates: { start: ["date"], end: ["date"] },
  isIncludedIn: { value: ["multicollectionreference"] },
};
function dP(e) {
  return Fm[e];
}
var si = {
    contains: ["boolean"],
    containsAny: ["boolean"],
    containsAll: ["boolean"],
    endsWith: ["boolean"],
    equals: ["boolean"],
    startsWith: ["boolean"],
    isSet: ["boolean"],
    greaterThan: ["boolean"],
    lessThan: ["boolean"],
    negate: ["boolean"],
    isBefore: ["boolean"],
    isAfter: ["boolean"],
    isBetweenDates: ["boolean"],
    toString: ["string"],
    toDateString: ["string"],
    numberToString: ["string"],
    prefix: ["string"],
    suffix: ["string"],
    toNumber: ["number"],
    toBoolean: ["boolean"],
    reverseArray: ["array"],
    offsetArray: ["array"],
    limitArray: ["array"],
    offsetAndLimitArray: ["array"],
    arrayToArray: ["array"],
    arrayLength: ["number"],
    isEven: ["boolean"],
    isOdd: ["boolean"],
    toResponsiveImage: ["responsiveimage"],
    toImageSrc: ["image"],
    toZIndex: ["number"],
    toAxisOverflow: ["string"],
    toOverflowWithClipFallback: ["string"],
    jsonStringify: ["string"],
    htmlEscape: ["string"],
    htmlUnescape: ["string"],
    enumToDisplayName: ["string"],
    convertFromEnum: [
      "string",
      "boolean",
      "enum",
      "number",
      "gap",
      "padding",
      "borderradius",
      "color",
      "link",
      "file",
    ],
    convertFromBoolean: [
      "string",
      "enum",
      "number",
      "gap",
      "padding",
      "borderradius",
      "color",
      "link",
      "file",
    ],
    convertFromString: [
      "string",
      "boolean",
      "enum",
      "number",
      "gap",
      "padding",
      "borderradius",
      "color",
      "link",
      "file",
    ],
    addImageAlt: ["responsiveimage"],
    numberToPixelString: ["string"],
    radiusForCorner: ["string"],
    percentageToCornerShape: ["number"],
    isIncludedIn: ["boolean"],
    getGridColumnCSSValue: ["string"],
    getGridRowCSSValue: ["string"],
    getNumericColumnGap: ["number"],
    extractDateSegment: ["number"],
    toggleInList: ["multicollectionreference"],
  },
  Om = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of oo) {
        let n = si[t];
        for (let o of n) {
          let r = e.get(o);
          r ? r.push(t) : e.set(o, [t]);
        }
      }
      return e;
    };
  })();
function cP(e) {
  return Om().get(e);
}
function cl(e) {
  return si[e];
}
function pP(e, t) {
  return Bm(e.name) ? si[e.name].includes(t) : !1;
}
function fP(e) {
  switch (e.name) {
    case "convertFromEnum":
    case "convertFromBoolean":
    case "convertFromString":
      return e.outputType;
    default: {
      let t = cl(e.name);
      C(t.length === 1);
      let n = t[0];
      return (C(n, "Value transform output type must be defined"), n);
    }
  }
}
var mP = new Set(["convertFromBoolean", "equals", "isSet"]),
  pl = {
    isSet: "Isn\u2019t set",
    equals: "Doesn\u2019t equal",
    startsWith: "Doesn\u2019t start with",
    endsWith: "Doesn\u2019t end with",
    contains: "Doesn\u2019t contain",
    greaterThan: "Less than or equal",
    lessThan: "Greater than or equal",
    isIncludedIn: "Isn\u2019t included in",
  };
function fl(e) {
  return Object.hasOwn(pl, e);
}
function yP(e, t) {
  if (t) return (C(fl(e)), pl[e]);
  switch (e) {
    case "negate":
      return "Invert";
    case "toDateString":
      return "Format";
    case "extractDateSegment":
      return "Extract";
    case "toString":
      return "As plain text";
    case "numberToString":
      return "Format number";
    case "reverseArray":
      return "Reverse";
    case "offsetArray":
      return "Offset";
    case "limitArray":
      return "Limit";
    case "arrayToArray":
      return "Map";
    case "arrayLength":
      return "Count";
    case "enumToDisplayName":
      return "Display option";
    case "convertFromEnum":
    case "convertFromBoolean":
    case "convertFromString":
      return "Convert";
    default:
      return De(e);
  }
}
var Wm = new Set(["prefix", "suffix"]);
function zm(e) {
  return Wm.has(e);
}
var no;
function Hm(e) {
  return (
    no ||
      (no = new Set(
        oo.filter((t) => {
          let n = dl(t);
          if (n?.length !== 1 || n[0] !== "array") return !1;
          let o = cl(t);
          return o.length !== 1 ? !1 : o[0] === "array";
        })
      )),
    no.has(e)
  );
}
function hP(e) {
  return Hm(e) || zm(e);
}
function xP(e, t) {
  let n = e.findIndex((i) => i.id === t),
    o = e[n];
  if (!o) return null;
  let r = 1;
  if (fl(o.name)) for (let i = n + 1, a = e.length; i < a && e[i]?.name === "negate"; i++) r++;
  return { start: n, length: r };
}
function Gm(e) {
  return g(e) && e[Sm] === Rm;
}
function ml(e, t) {
  if (!Gm(t) || e.name !== t.name) return !1;
  for (let n of An(e)) if (n !== "id" && e[n] !== t[n]) return !1;
  return !0;
}
var gP = ["standard", "compact"],
  bP = ["short", "long"],
  TP = ["decimal", "currency", "unit"],
  CP = ["symbol", "narrowSymbol", "code", "name"],
  VP = ["short", "narrow", "long"],
  SP = ["year", "month", "day", "hour12", "hour24", "minute"];
var yl = "type",
  ln = "variableReference";
function M(e) {
  return g(e) && yl in e && e[yl] === ln;
}
function hl(e, t) {
  return { type: ln, id: e, providerId: t };
}
function li(e, t) {
  return { type: ln, id: e, providerId: t };
}
function ro(e, t) {
  return M(t) ? e.id === t.id && e.providerId === t.providerId : !1;
}
var xl = "transform";
function PP(e) {
  return M(e) && e.providerId === xl;
}
function vP(e) {
  return { type: ln, id: e, providerId: xl };
}
var gl = "payload",
  bl = ".";
function IP(e) {
  return M(e) && e.providerId === gl;
}
function kP(e) {
  return { type: ln, id: e.join(bl), providerId: gl };
}
function DP(e) {
  let t = jm(e.id);
  if (!t.some((n) => n.length === 0)) return t;
}
function jm(e) {
  return e.split(bl);
}
var Tl = "type",
  ui = "computedValue",
  _m = {
    array: !0,
    boolean: !0,
    number: !0,
    string: !0,
    enum: !0,
    color: !0,
    link: !0,
    gap: !0,
    padding: !0,
    borderradius: !0,
    image: !0,
    file: !0,
    multicollectionreference: !0,
  };
function FP(e) {
  return p(e) && Object.hasOwn(_m, e);
}
function ye(e) {
  return g(e) && Tl in e && e[Tl] === ui;
}
function OP(e) {
  return ye(e) && eo(e.startValue);
}
function Cl(e) {
  return ye(e) && M(e.startValue);
}
function WP(e) {
  return (
    ye(e) &&
    e.transforms.length === 1 &&
    e.transforms[0]?.name === "toDateString" &&
    e.transforms[0]?.display === "relative"
  );
}
function zP(e) {
  return ye(e) && e.transforms.some((t) => t.name === "toDateString");
}
function HP(e) {
  return ye(e) && e.transforms.some((t) => t.name === "toDateString" && t.display !== "relative");
}
function Vl(e, t) {
  return !ye(t) ||
    e.outputType !== t.outputType ||
    e.startValue.type !== t.startValue.type ||
    (M(e.startValue) && !ro(e.startValue, t.startValue)) ||
    (eo(e.startValue) && !sl(e.startValue, t.startValue)) ||
    e.transforms.length !== t.transforms.length
    ? !1
    : e.transforms.every((n, o) => ml(n, t.transforms[o]));
}
function Sl(e, t, n) {
  return M(t)
    ? { type: ui, outputType: e, startValue: t, transforms: n }
    : { type: ui, outputType: e, startValue: t, transforms: n };
}
function E(e) {
  return M(e) || ye(e);
}
function Rl(e, t) {
  return M(e) ? ro(e, t) : Vl(e, t);
}
var JP = { isVariant: void 0, isBreakpoint: void 0, gesture: void 0, variantTransition: void 0 },
  Um = "isVariant";
function Km(e) {
  return Um in e;
}
var ZP = ["hover", "pressed"],
  $m = "gesture";
function Pl(e) {
  return $m in e;
}
function he(e) {
  return Km(e) && e.isVariant === !0;
}
function vl(e) {
  return he(e) && Lt(e);
}
function QP(e) {
  for (let t of e.ancestors()) if (vl(t)) return t;
  return null;
}
function ev(e) {
  return he(e) ? !Pl(e) || !e.gesture : !1;
}
function Nl(e) {
  return Il(e) && Ys(e) && Pl(e) && !!e.gesture;
}
function tv(e) {
  if (Nl(e)) return !0;
  if (!wt(e)) return !1;
  for (let t of e.ancestors()) if (Nl(t)) return !0;
  return !1;
}
function nv(e) {
  switch (e) {
    case "loading":
      return "Loading";
    case "pressed":
      return "Pressed";
    case "hover":
      return "Hover";
    case "error":
      return "Error";
    default:
      W(e);
  }
}
function ov(e) {
  return he(e) || qm(e);
}
function qm(e) {
  return e.cache.insideVariant;
}
function Il(e) {
  return rn(e) && he(e);
}
function Xm(e) {
  return wt(e) && e.cache.insideVariant;
}
function rv(e) {
  return Il(e) || Xm(e);
}
var Ym = "isBreakpoint";
function Jm(e) {
  return Ym in e;
}
function at(e) {
  return e ? he(e) && Jm(e) && e.isBreakpoint === !0 : !1;
}
function iv(e) {
  return at(e) && vl(e);
}
function av(e) {
  return e ? he(e) && !at(e) : !1;
}
function sv(e) {
  return he(e) ? ni(e.variantTransition) || E(e.variantTransition) || nl(e.variantTransition) : !1;
}
var Zm = bt("serializeJS"),
  Qm = {
    serializeSpread(e) {
      return `...${e}`;
    },
    serializeKeyValue(e, t, n) {
      let o = K(t, n);
      if (v(o)) return;
      let r = e;
      if (!/^[a-z$_][\w$]*$/i.test(r)) r = JSON.stringify(r);
      else if (r === o) return o;
      return `${r}: ${o}`;
    },
    joinObject(e) {
      return `{${e.join(", ")}}`;
    },
  },
  kl = new Intl.Collator("en", { sensitivity: "base" }).compare;
function io(e, t, n) {
  let o = Dl(n, t),
    r = [];
  for (let [i, a] of Object.entries(t)) {
    let s = e.serializeKeyValue(i, a, o);
    s && r.push(s);
  }
  return (
    t instanceof st
      ? (st.isSorted(t) && r.sort(kl),
        r.unshift(...st.spreadsAtStart(t).map(e.serializeSpread)),
        r.push(...st.spreadsAtEnd(t).map(e.serializeSpread)))
      : r.sort(kl),
    e.joinObject(r)
  );
}
function K(e, t = new Set()) {
  if (e instanceof A) return String(e);
  if (typeof e == "number" || typeof e == "boolean" || Ve(e)) return String(e);
  if (p(e))
    return JSON.stringify(e).replace(
      /[\u2028\u2029]/gu,
      (n) => `\\u${n.charCodeAt(0).toString(16)}`
    );
  if (j(e)) {
    let n = Dl(t, e),
      o = [];
    for (let r of e) {
      let i = K(r, n);
      v(i) || o.push(i);
    }
    return `[${o.join(", ")}]`;
  } else if (typeof e == "object") return io(Qm, e, t);
}
function Dl(e, t) {
  if (e.has(t))
    throw (
      Zm.error("Encountered circular reference to object while serializing:", t),
      Error("Circular Reference")
    );
  let n = new Set(e);
  return (n.add(t), n);
}
var A = class e extends String {
  static fn(t, ...n) {
    let o = [];
    for (let r of n) (r || (S(r) && r === 0) || (p(r) && r === "")) && o.push(K(r));
    return new e(`${t}(${o.join(", ")})`);
  }
  static optionalFn(t, ...n) {
    return new e(`${t}?.(${n.map((o) => K(o)).join(", ")})`);
  }
  static fromValue(t) {
    return new e(K(t));
  }
  static absoluteURL(t) {
    return t.match(/^https?:/u) ? new e(K(t)) : new e(`new URL(${K(t)}, import.meta.url).href`);
  }
  static hasMarker(t, n) {
    return t.#e === n;
  }
  static withMarker(t, n) {
    let o = new e(n);
    return ((o.#e = t), o);
  }
  static isUndefined(t) {
    return t instanceof e && K(t) === "undefined";
  }
  static isTrue(t) {
    return t instanceof e && K(t) === "true";
  }
  #e = Symbol("Safe JS");
};
((t) => {
  class e {
    #e = new globalThis.Set();
    constructor(o) {
      if (o) for (let r of o) this.add(r);
    }
    *[Symbol.iterator]() {
      for (let o of this.#e) yield new t(o);
    }
    get size() {
      return this.#e.size;
    }
    add(o) {
      this.#e.add(String(o));
    }
    delete(o) {
      this.#e.delete(String(o));
    }
    has(o) {
      return this.#e.has(String(o));
    }
    values() {
      return this.#e.values();
    }
  }
  t.Set = e;
})((A ||= {}));
function Ll(e) {
  return e instanceof A;
}
var st = class e extends Object {
  #e;
  constructor(t, n = 0) {
    (super(), v(t) || e.assign(this, t), (this.#e = n));
  }
  #t = [];
  static spreadsAtEnd(t) {
    return t.#t;
  }
  #n = [];
  static spreadsAtStart(t) {
    return t.#n;
  }
  static hasSpreads(t) {
    return t.#t.length > 0 || t.#n.length > 0;
  }
  static isEmpty(t) {
    if (e.hasSpreads(t)) return !1;
    for (let n in t) if (!v(t[n])) return !1;
    return !0;
  }
  static addSpreadAtEnd(t, n) {
    t.#t.push(n);
  }
  static addSpreadAtStart(t, n) {
    t.#n.push(n);
  }
  static isSorted(t) {
    return t.#e === 0;
  }
  static assign(t, n) {
    return (n instanceof e && (t.#t.push(...n.#t), t.#n.push(...n.#n)), Object.assign(t, n));
  }
  static fromEntries(t) {
    let n = {};
    for (let [o, r] of t) {
      let i = o instanceof A ? K(o) : o;
      n[i] = r;
    }
    return new e(n);
  }
};
function cv(e) {
  return e instanceof st;
}
function lt(e, t = "") {
  let n = "";
  for (let o of e) o && (n && (n += t), (n += o instanceof A ? K(o) : o));
  return n;
}
((a) => {
  function e(...s) {
    return a(s, ", ");
  }
  a.list = e;
  function t(s) {
    return a(s, ", ");
  }
  a.listFrom = t;
  function n(...s) {
    return a(
      s,
      `
`
    );
  }
  a.lines = n;
  function o(s) {
    return a(
      s,
      `
`
    );
  }
  a.linesFrom = o;
  function r(...s) {
    return a(
      s,
      `

`
    );
  }
  a.sections = r;
  function i(s) {
    return a(
      s,
      `

`
    );
  }
  a.sectionsFrom = i;
})((lt ||= {}));
function ao(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((o, r) => {
      n.push(K(o), e[r + 1]);
    }),
    new A(n.join(""))
  );
}
((r) => {
  function e(...i) {
    return new A(
      lt(
        i,
        `
`
      )
    );
  }
  r.joinLines = e;
  function t(...i) {
    return new A(
      lt(
        i,
        `

`
      )
    );
  }
  r.joinSections = t;
  function n(i) {
    return new A(
      lt(
        i,
        `
`
      )
    );
  }
  r.linesFrom = n;
  function o(i) {
    return new A(lt(i, ", "));
  }
  r.listFrom = o;
})((ao ||= {}));
var wl = Symbol("jst template literal");
function un(e, ...t) {
  if (t.every((o) => p(o) || S(o) || te(o) || Ve(o))) {
    let o = [e[0]];
    return (
      t.forEach((r, i) => {
        o.push(String(r), e[i + 1]);
      }),
      o.join("")
    );
  }
  let n = ["`", di(e[0])];
  return (
    t.forEach((o, r) => {
      (p(o)
        ? n.push(di(o))
        : typeof o == "number" || typeof o == "boolean" || Ve(o)
          ? n.push(String(o))
          : o instanceof A && A.hasMarker(o, wl)
            ? n.push(o.substring(1, o.length - 1))
            : n.push("${", K(o), "}"),
        n.push(di(e[r + 1])));
    }),
    n.push("`"),
    A.withMarker(wl, n.join(""))
  );
}
((n) => {
  function e(o, r) {
    let i = n`${o[0]}`;
    for (let a = 1; a < o.length; a++) i = n`${i}${r}${o[a]}`;
    return i;
  }
  n.join = e;
  function t(o, r, i) {
    let a = [],
      s = [],
      l = 0;
    for (let u of o.matchAll(r))
      (C(typeof u.index == "number", "unexpected non-number in match"),
        a.push(o.substring(l, u.index)),
        s.push(typeof i == "function" ? i(u[0], ...u.slice(1)) : i),
        (l = u.index + u[0].length));
    return (a.push(o.substring(l)), n(a, ...s));
  }
  n.replaceAll = t;
})((un ||= {}));
var ey = /(?<char>[A-Z])/gu;
function ty(e) {
  return e.replace(ey, "-$<char>").toLowerCase();
}
var ny = new Set(["viewBox", "stdDeviation"]),
  oy = {
    serializeSpread(e) {
      return `{...${e}}`;
    },
    serializeKeyValue(e, t, n) {
      if (v(t) || A.isUndefined(t)) return;
      let o = ny.has(e) ? e : ty(e);
      if (t === !0 || A.isTrue(t)) return o;
      if (S(t)) return `${o}="${t}"`;
      let r = K(t, n);
      if (r !== "") return `${o}=${r}`;
    },
    joinObject(e) {
      return e.join(" ");
    },
  };
function Ml(e) {
  return e ? new A(" " + io(oy, e, new Set())) : ao``;
}
var ci = Symbol("svg tag");
function El(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((o, r) => {
      n.push(K(o), e[r + 1]);
    }),
    A.withMarker(ci, n.join(""))
  );
}
((r) => {
  function e(i, a, s) {
    return s && K(s)
      ? r`<${new A(i)}${Ml(a)}>${r.children(s)}</${new A(i)}>`
      : r`<${new A(i)}${Ml(a)}/>`;
  }
  r.tag = e;
  function t(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  r.applyTransforms = t;
  function n(i) {
    return A.withMarker(ci, i);
  }
  r.fromTrustedString = n;
  function o(i) {
    return (C(A.hasMarker(i, ci), "SVG children can only be svg"), i);
  }
  r.children = o;
})((El ||= {}));
var ry = {
  serializeSpread(e) {
    return `{...${e}}`;
  },
  serializeKeyValue(e, t, n) {
    if (v(t) || A.isUndefined(t)) return;
    if (t === !0 || A.isTrue(t)) return e;
    let o = K(t, n);
    if (o !== "") return `${e}={${o}}`;
  },
  joinObject(e) {
    return e.join(" ");
  },
};
function Bl(e) {
  return e ? new A(" " + io(ry, e, new Set())) : ao``;
}
var pi = Symbol("jsx tag");
function Al(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((o, r) => {
      n.push(K(o), e[r + 1]);
    }),
    A.withMarker(pi, n.join(""))
  );
}
((r) => {
  function e(i) {
    return A.hasMarker(i, pi) ? i : r`{${i}}`;
  }
  r.children = e;
  function t(i) {
    return A.withMarker(pi, i);
  }
  r.fromTrustedString = t;
  function n(i, a, s) {
    return (
      (i = Ll(i) ? i : new A(i)),
      s && K(s) ? r`<${i}${Bl(a)}>${r.children(s)}</${i}>` : r`<${i}${Bl(a)}/>`
    );
  }
  r.tag = n;
  function o(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  r.applyTransforms = o;
})((Al ||= {}));
function di(e) {
  return e ? e.replace(/[`\\]|\$(?=\{)/gu, "\\$&") : "";
}
var dn = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32",
};
function We(e, t, n, o = !1) {
  let [r, i] = t,
    [a, s] = n,
    l = i - r;
  if (l === 0) return (s + a) / 2;
  let u = s - a;
  if (u === 0) return a;
  let c = a + ((e - r) / l) * u;
  if (o === !0)
    if (a < s) {
      if (c < a) return a;
      if (c > s) return s;
    } else {
      if (c > a) return a;
      if (c < s) return s;
    }
  return c;
}
function Qe(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function ze(e) {
  let t = so(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function so(e) {
  let t = /\d?\.?\d+/u.exec(e);
  if (t) return Number(t[0]);
}
var fi = ((i) => (
    (i.RGB = "rgb"),
    (i.HSL = "hsl"),
    (i.HSV = "hsv"),
    (i.HEX = "hex"),
    (i.NAME = "name"),
    i
  ))(fi || {}),
  Fl = ((i) => (
    (i.RGB = "rgb"),
    (i.RGBA = "rgba"),
    (i.HSL = "hsl"),
    (i.HSLA = "hsla"),
    (i.HUSL = "husl"),
    i
  ))(Fl || {});
var Y = class e {
  constructor() {
    ((this.hex = "#000000"),
      (this.rgb_r = 0),
      (this.rgb_g = 0),
      (this.rgb_b = 0),
      (this.xyz_x = 0),
      (this.xyz_y = 0),
      (this.xyz_z = 0),
      (this.luv_l = 0),
      (this.luv_u = 0),
      (this.luv_v = 0),
      (this.lch_l = 0),
      (this.lch_c = 0),
      (this.lch_h = 0),
      (this.hsluv_h = 0),
      (this.hsluv_s = 0),
      (this.hsluv_l = 0),
      (this.hpluv_h = 0),
      (this.hpluv_p = 0),
      (this.hpluv_l = 0),
      (this.r0s = 0),
      (this.r0i = 0),
      (this.r1s = 0),
      (this.r1i = 0),
      (this.g0s = 0),
      (this.g0i = 0),
      (this.g1s = 0),
      (this.g1i = 0),
      (this.b0s = 0),
      (this.b0i = 0),
      (this.b1s = 0),
      (this.b1i = 0));
  }
  static fromLinear(t) {
    return t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055;
  }
  static toLinear(t) {
    return t > 0.04045 ? Math.pow((t + 0.055) / 1.055, 2.4) : t / 12.92;
  }
  static yToL(t) {
    return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * Math.pow(t / e.refY, 1 / 3) - 16;
  }
  static lToY(t) {
    return t <= 8 ? (e.refY * t) / e.kappa : e.refY * Math.pow((t + 16) / 116, 3);
  }
  static rgbChannelToHex(t) {
    let n = Math.round(t * 255),
      o = n % 16,
      r = ((n - o) / 16) | 0;
    return e.hexChars.charAt(r) + e.hexChars.charAt(o);
  }
  static hexToRgbChannel(t, n) {
    let o = e.hexChars.indexOf(t.charAt(n)),
      r = e.hexChars.indexOf(t.charAt(n + 1));
    return (o * 16 + r) / 255;
  }
  static distanceFromOriginAngle(t, n, o) {
    let r = n / (Math.sin(o) - t * Math.cos(o));
    return r < 0 ? 1 / 0 : r;
  }
  static distanceFromOrigin(t, n) {
    return Math.abs(n) / Math.sqrt(Math.pow(t, 2) + 1);
  }
  static min6(t, n, o, r, i, a) {
    return Math.min(t, Math.min(n, Math.min(o, Math.min(r, Math.min(i, a)))));
  }
  rgbToHex() {
    ((this.hex = "#"),
      (this.hex += e.rgbChannelToHex(this.rgb_r)),
      (this.hex += e.rgbChannelToHex(this.rgb_g)),
      (this.hex += e.rgbChannelToHex(this.rgb_b)));
  }
  hexToRgb() {
    ((this.hex = this.hex.toLowerCase()),
      (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
      (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
      (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
  }
  xyzToRgb() {
    ((this.rgb_r = e.fromLinear(e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z)),
      (this.rgb_g = e.fromLinear(e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z)),
      (this.rgb_b = e.fromLinear(e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z)));
  }
  rgbToXyz() {
    let t = e.toLinear(this.rgb_r),
      n = e.toLinear(this.rgb_g),
      o = e.toLinear(this.rgb_b);
    ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * o),
      (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * o),
      (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * o));
  }
  xyzToLuv() {
    let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
      n = 4 * this.xyz_x,
      o = 9 * this.xyz_y;
    (t !== 0 ? ((n /= t), (o /= t)) : ((n = NaN), (o = NaN)),
      (this.luv_l = e.yToL(this.xyz_y)),
      this.luv_l === 0
        ? ((this.luv_u = 0), (this.luv_v = 0))
        : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
          (this.luv_v = 13 * this.luv_l * (o - e.refV))));
  }
  luvToXyz() {
    if (this.luv_l === 0) {
      ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
      return;
    }
    let t = this.luv_u / (13 * this.luv_l) + e.refU,
      n = this.luv_v / (13 * this.luv_l) + e.refV;
    ((this.xyz_y = e.lToY(this.luv_l)),
      (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
      (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
  }
  luvToLch() {
    if (
      ((this.lch_l = this.luv_l),
      (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
      this.lch_c < 1e-8)
    )
      this.lch_h = 0;
    else {
      let t = Math.atan2(this.luv_v, this.luv_u);
      ((this.lch_h = (t * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
    }
  }
  lchToLuv() {
    let t = (this.lch_h / 180) * Math.PI;
    ((this.luv_l = this.lch_l),
      (this.luv_u = Math.cos(t) * this.lch_c),
      (this.luv_v = Math.sin(t) * this.lch_c));
  }
  calculateBoundingLines(t) {
    let n = Math.pow(t + 16, 3) / 1560896,
      o = n > e.epsilon ? n : t / e.kappa,
      r = o * (284517 * e.m_r0 - 94839 * e.m_r2),
      i = o * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
      a = o * (632260 * e.m_r2 - 126452 * e.m_r1),
      s = o * (284517 * e.m_g0 - 94839 * e.m_g2),
      l = o * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
      u = o * (632260 * e.m_g2 - 126452 * e.m_g1),
      c = o * (284517 * e.m_b0 - 94839 * e.m_b2),
      m = o * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
      f = o * (632260 * e.m_b2 - 126452 * e.m_b1);
    ((this.r0s = r / a),
      (this.r0i = (i * t) / a),
      (this.r1s = r / (a + 126452)),
      (this.r1i = ((i - 769860) * t) / (a + 126452)),
      (this.g0s = s / u),
      (this.g0i = (l * t) / u),
      (this.g1s = s / (u + 126452)),
      (this.g1i = ((l - 769860) * t) / (u + 126452)),
      (this.b0s = c / f),
      (this.b0i = (m * t) / f),
      (this.b1s = c / (f + 126452)),
      (this.b1i = ((m - 769860) * t) / (f + 126452)));
  }
  calcMaxChromaHpluv() {
    let t = e.distanceFromOrigin(this.r0s, this.r0i),
      n = e.distanceFromOrigin(this.r1s, this.r1i),
      o = e.distanceFromOrigin(this.g0s, this.g0i),
      r = e.distanceFromOrigin(this.g1s, this.g1i),
      i = e.distanceFromOrigin(this.b0s, this.b0i),
      a = e.distanceFromOrigin(this.b1s, this.b1i);
    return e.min6(t, n, o, r, i, a);
  }
  calcMaxChromaHsluv(t) {
    let n = (t / 360) * Math.PI * 2,
      o = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
      r = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
      i = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
      a = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
      s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
      l = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
    return e.min6(o, r, i, a, s, l);
  }
  hsluvToLch() {
    if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
    else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
    else {
      ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
      let t = this.calcMaxChromaHsluv(this.hsluv_h);
      this.lch_c = (t / 100) * this.hsluv_s;
    }
    this.lch_h = this.hsluv_h;
  }
  lchToHsluv() {
    if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
    else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
    else {
      this.calculateBoundingLines(this.lch_l);
      let t = this.calcMaxChromaHsluv(this.lch_h);
      ((this.hsluv_s = (this.lch_c / t) * 100), (this.hsluv_l = this.lch_l));
    }
    this.hsluv_h = this.lch_h;
  }
  hpluvToLch() {
    if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
    else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
    else {
      ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
      let t = this.calcMaxChromaHpluv();
      this.lch_c = (t / 100) * this.hpluv_p;
    }
    this.lch_h = this.hpluv_h;
  }
  lchToHpluv() {
    if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
    else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
    else {
      this.calculateBoundingLines(this.lch_l);
      let t = this.calcMaxChromaHpluv();
      ((this.hpluv_p = (this.lch_c / t) * 100), (this.hpluv_l = this.lch_l));
    }
    this.hpluv_h = this.lch_h;
  }
  hsluvToRgb() {
    (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
  }
  hpluvToRgb() {
    (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
  }
  hsluvToHex() {
    (this.hsluvToRgb(), this.rgbToHex());
  }
  hpluvToHex() {
    (this.hpluvToRgb(), this.rgbToHex());
  }
  rgbToHsluv() {
    (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
  }
  rgbToHpluv() {
    (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
  }
  hexToHsluv() {
    (this.hexToRgb(), this.rgbToHsluv());
  }
  hexToHpluv() {
    (this.hexToRgb(), this.rgbToHpluv());
  }
};
Y.hexChars = "0123456789abcdef";
Y.refY = 1;
Y.refU = 0.19783000664283;
Y.refV = 0.46831999493879;
Y.kappa = 903.2962962;
Y.epsilon = 0.0088564516;
Y.m_r0 = 3.240969941904521;
Y.m_r1 = -1.537383177570093;
Y.m_r2 = -0.498610760293;
Y.m_g0 = -0.96924363628087;
Y.m_g1 = 1.87596750150772;
Y.m_g2 = 0.041555057407175;
Y.m_b0 = 0.055630079696993;
Y.m_b1 = -0.20397695888897;
Y.m_b2 = 1.056971514242878;
var pe = new Y();
function Wl(e, t, n) {
  return (
    (pe.rgb_r = e / 255),
    (pe.rgb_g = t / 255),
    (pe.rgb_b = n / 255),
    pe.rgbToHsluv(),
    { h: pe.hsluv_h, s: pe.hsluv_s, l: pe.hsluv_l }
  );
}
function zl(e, t, n, o = 1) {
  return (
    (pe.hsluv_h = e),
    (pe.hsluv_s = t),
    (pe.hsluv_l = n),
    pe.hsluvToRgb(),
    { r: pe.rgb_r * 255, g: pe.rgb_g * 255, b: pe.rgb_b * 255, a: o }
  );
}
function Et(e, t, n, o) {
  let r = Math.round(e),
    i = Math.round(t * 100),
    a = Math.round(n * 100);
  return o === void 0 || o === 1
    ? "hsv(" + r + ", " + i + "%, " + a + "%)"
    : "hsva(" + r + ", " + i + "%, " + a + "%, " + o + ")";
}
function Hl(e, t, n) {
  return {
    r: Qe(e) ? le(e, 255) * 255 : 0,
    g: Qe(t) ? le(t, 255) * 255 : 0,
    b: Qe(n) ? le(n, 255) * 255 : 0,
  };
}
function hi(e, t, n, o) {
  let r = [
    yi(Math.round(e).toString(16)),
    yi(Math.round(t).toString(16)),
    yi(Math.round(n).toString(16)),
  ];
  return o &&
    r[0].charAt(0) === r[0].charAt(1) &&
    r[1].charAt(0) === r[1].charAt(1) &&
    r[2].charAt(0) === r[2].charAt(1)
    ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0)
    : r.join("");
}
function At(e, t, n) {
  let o,
    r,
    i = le(e, 255),
    a = le(t, 255),
    s = le(n, 255),
    l = Math.max(i, a, s),
    u = Math.min(i, a, s),
    c = (r = o = (l + u) / 2);
  if (l === u) c = r = 0;
  else {
    let m = l - u;
    switch (((r = o > 0.5 ? m / (2 - l - u) : m / (l + u)), l)) {
      case i:
        c = (a - s) / m + (a < s ? 6 : 0);
        break;
      case a:
        c = (s - i) / m + 2;
        break;
      case s:
        c = (i - a) / m + 4;
        break;
    }
    c /= 6;
  }
  return { h: c * 360, s: r, l: o };
}
function mi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Gl(e, t, n) {
  let o, r, i;
  if (((e = le(e, 360)), (t = le(t * 100, 100)), (n = le(n * 100, 100)), t === 0)) o = r = i = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - a;
    ((o = mi(s, a, e + 1 / 3)), (r = mi(s, a, e)), (i = mi(s, a, e - 1 / 3)));
  }
  return { r: o * 255, g: r * 255, b: i * 255 };
}
function xi(e, t, n) {
  ((e = le(e, 255)), (t = le(t, 255)), (n = le(n, 255)));
  let o = Math.max(e, t, n),
    r = Math.min(e, t, n),
    i = o - r,
    a = 0,
    s = o === 0 ? 0 : i / o,
    l = o;
  if (o === r) a = 0;
  else {
    switch (o) {
      case e:
        a = (t - n) / i + (t < n ? 6 : 0);
        break;
      case t:
        a = (n - e) / i + 2;
        break;
      case n:
        a = (e - t) / i + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, v: l };
}
function jl(e, t, n) {
  ((e = le(e, 360) * 6), (t = le(t * 100, 100)), (n = le(n * 100, 100)));
  let o = Math.floor(e),
    r = e - o,
    i = n * (1 - t),
    a = n * (1 - r * t),
    s = n * (1 - (1 - r) * t),
    l = o % 6,
    u = [n, a, i, i, s, n][l],
    c = [s, n, n, a, i, i][l],
    m = [i, i, s, n, n, a][l];
  return { r: u * 255, g: c * 255, b: m * 255 };
}
function le(e, t) {
  let n, o;
  if ((typeof t == "string" ? (n = parseFloat(t)) : (n = t), typeof e == "string")) {
    iy(e) && (e = "100%");
    let r = ay(e);
    ((o = Math.min(n, Math.max(0, parseFloat(e)))), r && (o = Math.floor(o * n) / 100));
  } else o = e;
  return Math.abs(o - n) < 1e-6 ? 1 : (o % n) / n;
}
function iy(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function ay(e) {
  return typeof e == "string" && e.includes("%");
}
function yi(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var Be = (() => {
  let n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + "[-\\+]?\\d+%?" + ")",
    o = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
    r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + o),
    rgba: new RegExp("rgba" + r),
    hsl: new RegExp("hsl" + o),
    hsla: new RegExp("hsla" + r),
    hsv: new RegExp("hsv" + o),
    hsva: new RegExp("hsva" + r),
    hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
    hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
    hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
    hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
  };
})();
function cn(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, "").trimEnd().toLowerCase(),
    o = dn[n];
  if ((o && (n = o), n === "transparent")) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let r;
  return (r = Be.rgb.exec(n))
    ? {
        r: parseInt(r[1] ?? ""),
        g: parseInt(r[2] ?? ""),
        b: parseInt(r[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (r = Be.rgba.exec(n))
      ? {
          r: parseInt(r[1] ?? ""),
          g: parseInt(r[2] ?? ""),
          b: parseInt(r[3] ?? ""),
          a: parseFloat(r[4] ?? ""),
          format: "rgb",
        }
      : (r = Be.hsl.exec(n))
        ? { h: parseInt(r[1] ?? ""), s: ze(r[2] ?? ""), l: ze(r[3] ?? ""), a: 1, format: "hsl" }
        : (r = Be.hsla.exec(n))
          ? {
              h: parseInt(r[1] ?? ""),
              s: ze(r[2] ?? ""),
              l: ze(r[3] ?? ""),
              a: parseFloat(r[4] ?? ""),
              format: "hsl",
            }
          : (r = Be.hsv.exec(n))
            ? { h: parseInt(r[1] ?? ""), s: ze(r[2] ?? ""), v: ze(r[3] ?? ""), a: 1, format: "hsv" }
            : (r = Be.hsva.exec(n))
              ? {
                  h: parseInt(r[1] ?? ""),
                  s: ze(r[2] ?? ""),
                  v: ze(r[3] ?? ""),
                  a: parseFloat(r[4] ?? ""),
                  format: "hsv",
                }
              : (r = Be.hex8.exec(n))
                ? {
                    r: xe(r[1] ?? ""),
                    g: xe(r[2] ?? ""),
                    b: xe(r[3] ?? ""),
                    a: Ol(r[4] ?? ""),
                    format: o ? "name" : "hex",
                  }
                : (r = Be.hex6.exec(n))
                  ? {
                      r: xe(r[1] ?? ""),
                      g: xe(r[2] ?? ""),
                      b: xe(r[3] ?? ""),
                      a: 1,
                      format: o ? "name" : "hex",
                    }
                  : (r = Be.hex4.exec(n))
                    ? {
                        r: xe(`${r[1]}${r[1]}`),
                        g: xe(`${r[2]}${r[2]}`),
                        b: xe(`${r[3]}${r[3]}`),
                        a: Ol(r[4] + "" + r[4]),
                        format: o ? "name" : "hex",
                      }
                    : (r = Be.hex3.exec(n))
                      ? {
                          r: xe(`${r[1]}${r[1]}`),
                          g: xe(`${r[2]}${r[2]}`),
                          b: xe(`${r[3]}${r[3]}`),
                          a: 1,
                          format: o ? "name" : "hex",
                        }
                      : !1;
}
function xe(e) {
  return parseInt(e, 16);
}
function Ol(e) {
  return xe(e) / 255;
}
var sy =
  /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u;
function _l(e) {
  let t = sy.exec(e);
  if (!t) return null;
  let { r: n = "0", g: o = "0", b: r = "0", a: i } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(o), b: parseFloat(r), a: i ? parseFloat(i) : 1 };
}
function gi(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Ul({ r: e, g: t, b: n, a: o }) {
  return { r: gi(e), g: gi(t), b: gi(n), a: o };
}
function bi(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Kl({ r: e, g: t, b: n, a: o }) {
  return { r: bi(e), g: bi(t), b: bi(n), a: o };
}
var ly = (e) => {
    let { r: t, g: n, b: o, a: r } = Ul(e);
    return {
      x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * o,
      y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * o,
      z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * o,
      a: r,
    };
  },
  uy = ({ x: e = 0, y: t = 0, z: n = 0, a: o = 1 }) =>
    Kl({
      r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
      g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
      b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
      a: o,
    }),
  dy = (e) => {
    let { r: t, g: n, b: o, a: r } = Ul(e);
    return {
      x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * o,
      y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * o,
      z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * o,
      a: r,
    };
  },
  cy = ({ x: e = 0, y: t = 0, z: n = 0, a: o = 1 }) =>
    Kl({
      r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
      g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
      b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
      a: o,
    });
function $l({ r: e, g: t, b: n, a: o }) {
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = { h: 0, s: r === 0 ? 0 : 1 - i / r, v: r, a: o };
  return (
    r - i !== 0 &&
      (a.h =
        (r === e
          ? (t - n) / (r - i) + (t < n ? 6 : 0)
          : r === t
            ? (n - e) / (r - i) + 2
            : (e - t) / (r - i) + 4) * 60),
    a
  );
}
function py(e) {
  return (e = e % 360) < 0 ? e + 360 : e;
}
function Ti({ h: e = 0, s: t = 0, v: n = 0, a: o = 1 }) {
  let r = py(e),
    i = Math.abs(((r / 60) % 2) - 1);
  switch (Math.floor(r / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * i), b: n * (1 - t), a: o };
    case 1:
      return { r: n * (1 - t * i), g: n, b: n * (1 - t), a: o };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * i), a: o };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * i), b: n, a: o };
    case 4:
      return { r: n * (1 - t * i), g: n * (1 - t), b: n, a: o };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * i), a: o };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: o };
  }
}
function Ci(e) {
  return cy(dy(e));
}
function ql(e) {
  return uy(ly(e));
}
var lo = class e {
  format = "p3";
  r;
  g;
  b;
  a;
  constructor(t) {
    ((this.r = t.r ?? 0), (this.g = t.g ?? 0), (this.b = t.b ?? 0), (this.a = t.a ?? 1));
  }
  hsv() {
    return $l(this);
  }
  rgb() {
    return ql(this);
  }
  hsl() {
    return At(this.r, this.g, this.b);
  }
  toString(t = "p3", n) {
    switch (t) {
      case "p3": {
        let o = n?.r ?? this.r,
          r = n?.g ?? this.g,
          i = n?.b ?? this.b,
          a = n?.a ?? this.a;
        return a === 1
          ? `color(display-p3 ${o} ${r} ${i})`
          : `color(display-p3 ${o} ${r} ${i} / ${a})`;
      }
      case "srgb": {
        let o = this.rgb(),
          r = Math.round(Math.max(0, Math.min(o.r, 1)) * 100) / 100,
          i = Math.round(Math.max(0, Math.min(o.g, 1)) * 100) / 100,
          a = Math.round(Math.max(0, Math.min(o.b, 1)) * 100) / 100,
          s = n?.r ?? r * 255,
          l = n?.g ?? i * 255,
          u = n?.b ?? a * 255,
          c = n?.a ?? o.a ?? 1;
        return c === 1 ? `rgb(${s}, ${l}, ${u})` : `rgba(${s}, ${l}, ${u}, ${c})`;
      }
    }
  }
  static isP3String(t) {
    return t.startsWith("color(display-p3");
  }
  static fromHSV(t, n = "p3") {
    switch (n) {
      case "p3":
        return new e(Ti(t));
      case "srgb":
        return new e(Ci(Ti(t)));
    }
  }
  static fromRGB(t) {
    return new e(
      Ci({
        r: Math.round((t.r / 255) * 1e4) / 1e4,
        g: Math.round((t.g / 255) * 1e4) / 1e4,
        b: Math.round((t.b / 255) * 1e4) / 1e4,
        a: t.a ?? 1,
      })
    );
  }
  static fromRGBString(t) {
    let n = x(t);
    if (n) return e.fromRGB(n);
  }
  static fromString(t) {
    if (!e.isP3String(t)) return;
    let n = _l(t);
    if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
  }
  static srgbFromValue(t) {
    if (!ee(t) || !x.isP3String(t)) return t;
    let n = e.fromString(t);
    return n ? n.toString("srgb") : t;
  }
  static multiplyAlpha(t, n) {
    return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
  }
};
function Av(e) {
  return lo.srgbFromValue(e);
}
var Xl = new Map(),
  x = (() => {
    function e(r, i, a, s) {
      if (typeof r == "string") {
        let u = Xl.get(r);
        return u || ((u = t(r)), u === void 0 ? { ...e("black"), isValid: !1 } : (Xl.set(r, u), u));
      }
      let l = t(r, i, a, s);
      return l !== void 0 ? l : { ...e("black"), isValid: !1 };
    }
    function t(r, i, a, s) {
      if (r === "") return;
      let l = fy(r, i, a, s);
      if (l) {
        let u = {
          r: l.r,
          g: l.g,
          b: l.b,
          a: l.a,
          h: l.h,
          s: l.s,
          l: l.l,
          initialValue: typeof r == "string" && l.format !== "hsv" ? r : void 0,
          roundA: Math.round(100 * l.a) / 100,
          format: l.format,
          mix: e.mix,
          toValue: () => e.toRgbString(u),
        };
        return u;
      } else return;
    }
    let n = {
      isRGB(r) {
        return r === "rgb" || r === "rgba";
      },
      isHSL(r) {
        return r === "hsl" || r === "hsla";
      },
    };
    ((e.inspect = (r, i) =>
      r.format === "hsl"
        ? `<${r.constructor.name} h:${r.h} s:${r.s} l:${r.l} a:${r.a}>`
        : r.format === "hex" || r.format === "name"
          ? `<${r.constructor.name} "${i}">`
          : `<${r.constructor.name} r:${r.r} g:${r.g} b:${r.b} a:${r.a}>`),
      (e.isColor = (r) => (typeof r == "string" ? e.isColorString(r) : e.isColorObject(r))),
      (e.isColorString = (r) => (typeof r == "string" ? cn(r) !== !1 : !1)),
      (e.isColorObject = (r) =>
        q(r) &&
        typeof r.r == "number" &&
        typeof r.g == "number" &&
        typeof r.b == "number" &&
        typeof r.h == "number" &&
        typeof r.s == "number" &&
        typeof r.l == "number" &&
        typeof r.a == "number" &&
        typeof r.roundA == "number" &&
        typeof r.format == "string"),
      (e.toString = (r) => e.toRgbString(r)),
      (e.toHex = (r, i = !1) => hi(r.r, r.g, r.b, i)),
      (e.toHexString = (r, i = !1) => `#${e.toHex(r, i)}`),
      (e.isP3String = (r) => (typeof r != "string" ? !1 : lo.isP3String(r))),
      (e.toRgbString = (r) =>
        r.a === 1
          ? "rgb(" + Math.round(r.r) + ", " + Math.round(r.g) + ", " + Math.round(r.b) + ")"
          : "rgba(" +
            Math.round(r.r) +
            ", " +
            Math.round(r.g) +
            ", " +
            Math.round(r.b) +
            ", " +
            r.roundA +
            ")"),
      (e.toHusl = (r) => ({ ...Wl(r.r, r.g, r.b), a: r.roundA })),
      (e.toHslString = (r) => {
        let i = e.toHsl(r),
          a = Math.round(i.h),
          s = Math.round(i.s * 100),
          l = Math.round(i.l * 100);
        return r.a === 1
          ? "hsl(" + a + ", " + s + "%, " + l + "%)"
          : "hsla(" + a + ", " + s + "%, " + l + "%, " + r.roundA + ")";
      }),
      (e.toHsv = (r) => {
        let i = xi(r.r, r.g, r.b);
        return { h: i.h * 360, s: i.s, v: i.v, a: r.a };
      }),
      (e.toHsvString = (r) => {
        let i = xi(r.r, r.g, r.b),
          a = Math.round(i.h * 360),
          s = Math.round(i.s * 100),
          l = Math.round(i.v * 100);
        return r.a === 1
          ? "hsv(" + a + ", " + s + "%, " + l + "%)"
          : "hsva(" + a + ", " + s + "%, " + l + "%, " + r.roundA + ")";
      }),
      (e.toName = (r) => {
        if (r.a === 0) return "transparent";
        if (r.a < 1) return !1;
        let i = hi(r.r, r.g, r.b, !0);
        for (let a of Object.keys(dn)) if (dn[a] === i) return a;
        return !1;
      }),
      (e.toHsl = (r) => ({ h: Math.round(r.h), s: r.s, l: r.l, a: r.a })),
      (e.toRgb = (r) => ({ r: Math.round(r.r), g: Math.round(r.g), b: Math.round(r.b), a: r.a })),
      (e.brighten = (r, i = 10) => {
        let a = e.toRgb(r);
        return (
          (a.r = Math.max(0, Math.min(255, a.r - Math.round(255 * -(i / 100))))),
          (a.g = Math.max(0, Math.min(255, a.g - Math.round(255 * -(i / 100))))),
          (a.b = Math.max(0, Math.min(255, a.b - Math.round(255 * -(i / 100))))),
          e(a)
        );
      }),
      (e.lighten = (r, i = 10) => {
        let a = e.toHsl(r);
        return ((a.l += i / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a));
      }),
      (e.darken = (r, i = 10) => {
        let a = e.toHsl(r);
        return ((a.l -= i / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a));
      }),
      (e.saturate = (r, i = 10) => {
        let a = e.toHsl(r);
        return ((a.s += i / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a));
      }),
      (e.desaturate = (r, i = 10) => {
        let a = e.toHsl(r);
        return ((a.s -= i / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a));
      }),
      (e.grayscale = (r) => e.desaturate(r, 100)),
      (e.hueRotate = (r, i) => {
        let a = e.toHsl(r);
        return ((a.h += i), (a.h = a.h > 360 ? a.h - 360 : a.h), e(a));
      }),
      (e.alpha = (r, i = 1) => e({ r: r.r, g: r.g, b: r.b, a: i })),
      (e.transparent = (r) => e.alpha(r, 0)),
      (e.multiplyAlpha = (r, i = 1) => e({ r: r.r, g: r.g, b: r.b, a: r.a * i })),
      (e.alphaComposite = (r, i) => {
        if (r.a === 1) return r;
        if (i.a < 1)
          throw new Error(
            "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
          );
        return r.a === 0
          ? i
          : e({
              r: Math.round(r.r * r.a + i.r * (1 - r.a)),
              g: Math.round(r.g * r.a + i.g * (1 - r.a)),
              b: Math.round(r.b * r.a + i.b * (1 - r.a)),
              a: 1,
            });
      }),
      (e.interpolate = (r, i, a = "rgb") => {
        if (!e.isColorObject(r) || !e.isColorObject(i))
          throw new TypeError("Both arguments for Color.interpolate must be Color objects");
        return (s) => e.mixAsColor(r, i, s, !1, a);
      }),
      (e.mix = (r, i, { model: a = "rgb" } = {}) => {
        let s = typeof r == "string" ? e(r) : r,
          l = e.interpolate(s, i, a);
        return (u) => e.toRgbString(l(u));
      }),
      (e.mixAsColor = (r, i, a = 0.5, s = !1, l = "rgb") => {
        let u = null;
        if (n.isRGB(l))
          u = e({
            r: We(a, [0, 1], [r.r, i.r], s),
            g: We(a, [0, 1], [r.g, i.g], s),
            b: We(a, [0, 1], [r.b, i.b], s),
            a: We(a, [0, 1], [r.a, i.a], s),
          });
        else {
          let c, m;
          (n.isHSL(l)
            ? ((c = e.toHsl(r)), (m = e.toHsl(i)))
            : ((c = e.toHusl(r)), (m = e.toHusl(i))),
            c.s === 0 ? (c.h = m.h) : m.s === 0 && (m.h = c.h));
          let f = c.h,
            h = m.h,
            T = h - f;
          T > 180 ? (T = h - 360 - f) : T < -180 && (T = h + 360 - f);
          let V = {
            h: We(a, [0, 1], [f, f + T], s),
            s: We(a, [0, 1], [c.s, m.s], s),
            l: We(a, [0, 1], [c.l, m.l], s),
            a: We(a, [0, 1], [r.a, i.a], s),
          };
          n.isHSL(l) ? (u = e(V)) : (u = e(zl(V.h, V.s, V.l, V.a)));
        }
        return u;
      }),
      (e.random = (r = 1) => {
        function i() {
          return Math.floor(Math.random() * 255);
        }
        return e("rgba(" + i() + ", " + i() + ", " + i() + ", " + r + ")");
      }),
      (e.grey = (r = 0.5, i = 1) => (
        (r = Math.floor(r * 255)),
        e("rgba(" + r + ", " + r + ", " + r + ", " + i + ")")
      )),
      (e.gray = e.grey),
      (e.rgbToHsl = (r, i, a) => At(r, i, a)),
      (e.isValidColorProperty = (r, i) =>
        !!(
          (r.toLowerCase().slice(-5) === "color" || r === "fill" || r === "stroke") &&
          typeof i == "string" &&
          e.isColorString(i)
        )),
      (e.difference = (r, i) => {
        let a = (r.r + i.r) / 2,
          s = r.r - i.r,
          l = r.g - i.g,
          u = r.b - i.b,
          c = s ** 2,
          m = l ** 2,
          f = u ** 2;
        return Math.sqrt(2 * c + 4 * m + 3 * f + (a * (c - f)) / 256);
      }),
      (e.equal = (r, i, a = 0.1) =>
        !(
          Math.abs(r.r - i.r) >= a ||
          Math.abs(r.g - i.g) >= a ||
          Math.abs(r.b - i.b) >= a ||
          Math.abs(r.a - i.a) * 256 >= a
        )));
    function o(r) {
      r /= 255;
      let i = Math.abs(r);
      return i < 0.04045 ? r / 12.92 : (Math.sign(r) || 1) * ((i + 0.055) / 1.055) ** 2.4;
    }
    return (
      (e.luminance = (r) => {
        let { r: i, g: a, b: s } = e.toRgb(r);
        return 0.2126 * o(i) + 0.7152 * o(a) + 0.0722 * o(s);
      }),
      (e.contrast = (r, i) => {
        let a = e.luminance(r),
          s = e.luminance(i);
        return (Math.max(a, s) + 0.05) / (Math.min(a, s) + 0.05);
      }),
      e
    );
  })();
function fy(e, t, n, o = 1) {
  let r;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (r = Vi({ r: e, g: t, b: n, a: o }))
      : typeof e == "string"
        ? (r = my(e))
        : typeof e == "object" &&
          (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
            ? (r = Vi(e))
            : (r = Yl(e))),
    r
  );
}
function my(e) {
  let t = cn(e);
  if (t) return t.format === "hsl" ? Yl(t) : t.format === "hsv" ? yy(t) : Vi(t);
}
function yy(e) {
  let t = jl(e.h, e.s, e.v);
  return { ...At(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? Jl(e.a) : 1 };
}
function Vi(e) {
  let t = Hl(e.r, e.g, e.b);
  return { ...At(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? Jl(e.a) : 1 };
}
function Yl(e) {
  let t,
    n,
    o,
    r = { r: 0, g: 0, b: 0 },
    i = { h: 0, s: 0, l: 0 };
  return (
    (t = Qe(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Qe(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = so(e.s)),
    (o = Qe(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (o = so(e.l)),
    (r = Gl(t, n, o)),
    (i = { h: t, s: n, l: o }),
    { ...r, ...i, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function Jl(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function uo(e) {
  if (!ee(e) || e.charAt(e.length - 1) !== "%") return !1;
  let n = e.slice(0, -1),
    o = parseFloat(n);
  return Ae(o);
}
function Wv(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return Ae(n) ? n : 50;
}
function jv(e) {
  return e ? Os(e.__class) : !1;
}
function _v(e) {
  return e ? $r(e.__class) : !1;
}
function pn(e) {
  return e ? qr(e.__class) : !1;
}
function Uv(e) {
  return e ? Ws(e.__class) : !1;
}
function Kv(e, t) {
  let n = e.getNodeParent(t);
  return n === null || !pn(n);
}
function $v(e, t) {
  if (!pn(t)) return !1;
  let n = e.getNodeParent(t);
  return n === null ? !0 : !pn(n) && !Kn(n);
}
var fn = Symbol("Not Found");
function co(e) {
  return e === fn;
}
function Zl(e) {
  return e !== fn;
}
function Si(e) {
  return Zl(e) && !St(e);
}
function Yv(e) {
  return Zl(e) && e !== void 0;
}
function Jv(e) {
  return Si(e) && e !== void 0;
}
function hy(e, t) {
  return E(e) ? !Rl(e, t) : e !== t;
}
function Ql(e, t, n, o) {
  let r = t[e];
  if (St(r)) return;
  let i = n[e],
    a = o ? o(i) : i;
  co(r) ? (t[e] = a) : hy(a, r) && (t[e] = en);
}
var iI = { codeComponentIdentifier: "", dynamicVectorSetIdentifier: void 0 },
  xy = "codeComponentIdentifier";
function po(e) {
  return e.hasProp(xy);
}
function aI(e, t) {
  !po(e) ||
    !Pe(e.codeComponentIdentifier) ||
    (t.codeComponentIdentifiers.add(e.codeComponentIdentifier),
    Ql("dynamicVectorSetIdentifier", t, e));
}
var fo = ((N) => (
    (N.scroll = "framer/Scroll"),
    (N.page = "framer/Page"),
    (N.stack = "framer/Stack"),
    (N.prototype = "framer/Prototype"),
    (N.device = "__builtin/Device"),
    (N.legacyDevice = "@framer/framer.default/./Device.tsx_Device"),
    (N.legacyUnsplash = "@framer/framer.default/./Unsplash.tsx_Unsplash"),
    (N.navigationAction = "framer/useNavigate"),
    (N.openURLAction = "framer/useOpenURL"),
    (N.consoleLogAction = "framer/useLog"),
    (N.setVariantAction = "framer/useSetVariant"),
    (N.triggerEventAction = "framer/useTriggerEvent"),
    (N.showOverlayAction = "framer/useShowOverlay"),
    (N.showRelativeOverlayAction = "framer/useShowRelativeOverlay"),
    (N.loadMoreAction = "framer/useLoadMore"),
    (N.dismissOverlayAction = "framer/useDismissOverlay"),
    (N.setLocaleAction = "framer/useSetLocale"),
    (N.setVariableValueAction = "framer/useSetVariableValue"),
    (N.resetVariableValuesAction = "framer/useResetVariableValues"),
    N
  ))(fo || {}),
  gy = new Set(Object.values(fo)),
  lI = new Set(Object.values(fo).filter((e) => e !== "framer/Prototype"));
function uI(e) {
  return gy.has(e);
}
var by = new Set(["framer/Stack", "framer/Page", "framer/Scroll"]);
function mn(e) {
  return qs(e) || qn(e) ? !1 : !po(e) || Ty(e);
}
function mI(e) {
  return po(e) && e.codeComponentIdentifier === "__builtin/Device";
}
function Ty(e) {
  return by.has(e.codeComponentIdentifier);
}
var Cy = "fillOpacity";
function RI(e) {
  return Cy in e;
}
var NI = { fillOpacity: void 0 },
  Vy = "fillType",
  Sy = "fillEnabled",
  Ry = "supportsGradient",
  Ny = "fillImageLocalized";
function Ft(e) {
  return Vy in e && mn(e);
}
function Ri(e) {
  return Sy in e && mn(e);
}
function PI(e) {
  return Ft(e) ? (Ri(e) ? !!e.fillEnabled : !0) : !1;
}
function vI(e) {
  return Ny in e;
}
function Py(e) {
  return Ry in e && mn(e);
}
function eu(e) {
  return mn(e) ? (Py(e) ? e.supportsGradient() : Ft(e)) : !1;
}
function vy(e) {
  return Dt(e) || eu(e);
}
function II(e) {
  return vy(e) && !(pn(e) || Kn(e) || _s(e));
}
function tu(e) {
  return e === "linear-gradient" || e === "radial-gradient" || e === "conic-gradient";
}
function kI(e) {
  return eu(e) ? tu(e.fillType) : e.getFills().filter(Boolean).length;
}
function DI(e) {
  return e.fillEnabled && e.fillType === "image" && e.fillImage !== null;
}
function LI(e) {
  return Ft(e) && uo(e.fillImagePositionX) && uo(e.fillImagePositionY);
}
function nu(e) {
  return Ri(e) && !e.fillEnabled ? !1 : Ft(e) && e.fillType === "image";
}
function Iy(e) {
  if (!e.fillType) return !1;
  switch (e.fillType) {
    case "color": {
      let t = e.resolveValue("fillColor");
      return t ? x(t).a === 0 : !1;
    }
    case "linear-gradient":
      return e.fillLinearGradient ? e.fillLinearGradient.alpha === 0 : !1;
    case "radial-gradient":
      return e.fillRadialGradient ? e.fillRadialGradient.alpha === 0 : !1;
    case "conic-gradient":
      return e.fillConicGradient ? e.fillConicGradient.alpha === 0 : !1;
    case "image":
      return !1;
    default:
      W(e.fillType);
  }
}
function wI(e) {
  return !Ft(e) || (Ri(e) && !e.fillEnabled) ? !1 : !Iy(e);
}
function MI(e) {
  switch (e) {
    case void 0:
    case "contain":
      return "fit";
    default:
      return "fill";
  }
}
function ky(e) {
  return !e || !Ft(e) ? !1 : tu(e.fillType);
}
function BI(e) {
  if (ky(e) && !v(e.fillType))
    switch (e.fillType) {
      case "image":
      case "color":
        return;
      case "linear-gradient": {
        let t = e.fillLinearGradient?.stops.length;
        if (!t) return;
        let n = e.fillLinearGradient?.angle;
        return v(n) ? void 0 : { stops: t, info: { type: e.fillType, angle: n } };
      }
      case "radial-gradient": {
        let t = e.fillRadialGradient?.stops.length;
        return t ? { stops: t, info: { type: e.fillType, angle: 0 } } : void 0;
      }
      case "conic-gradient": {
        let t = e.fillConicGradient?.stops.length;
        if (!t) return;
        let n = e.fillLinearGradient?.angle;
        return v(n) ? void 0 : { stops: t, info: { type: e.fillType, angle: n } };
      }
      default:
        W(e.fillType);
    }
}
function EI(e, t, n) {
  let o = n === "conic-gradient" ? 360 : 100,
    r = n === "conic-gradient" ? "deg" : "%";
  return un.join(
    Array.from({ length: e }).map((i, a) => un`${t} ${Math.round((a / (e - 1)) * o)}${r}`),
    ", "
  );
}
var Dy = ["left", "center", "right"],
  Ly = new Set(Dy),
  wy = ["top", "center", "bottom"],
  My = new Set(wy);
function AI(e, t) {
  return p(e)
    ? ((t === "y" || t === "fillImagePositionY") && My.has(e)) ||
      ((t === "x" || t === "fillImagePositionX") && Ly.has(e))
      ? !0
      : uo(e)
    : !1;
}
var et = {
    collectionControlProp: {
      media: !0,
      embeds: !0,
      links: !0,
      styles: !1,
      variables: !1,
      blockquotes: !0,
      tables: !0,
    },
    collectionControlPropLocalized: {
      media: !0,
      embeds: !0,
      links: !0,
      styles: !1,
      variables: !1,
      blockquotes: !0,
      tables: !0,
    },
    controlProp: {
      media: !1,
      embeds: !1,
      links: !0,
      styles: !1,
      variables: !0,
      blockquotes: !1,
      tables: !1,
    },
    controlPropLocalized: {
      media: !1,
      embeds: !1,
      links: !0,
      styles: !1,
      variables: !0,
      blockquotes: !1,
      tables: !1,
    },
    richTextNode: {
      media: !1,
      embeds: !1,
      links: !0,
      styles: !0,
      variables: !0,
      blockquotes: !1,
      tables: !1,
    },
    richTextNodeLocalized: {
      media: !1,
      embeds: !1,
      links: !0,
      styles: !0,
      variables: !0,
      blockquotes: !1,
      tables: !1,
    },
  },
  By = ["blockStyles", "backgroundMask", "textStylePreset"],
  Ey = ["header", "cell"];
function HI(e) {
  return p(e) && Ey.some((t) => e === t);
}
var Ay = {
    textBlock: !0,
    numberedList: !0,
    bulletedList: !0,
    blockquote: !0,
    media: !0,
    module: !0,
    table: !0,
  },
  Fy = ["inlineStyles", "backgroundStyles", "inlineCodeStylePreset", "linkStylePreset"],
  GI = ["openInNewTab", "smoothScroll", "clickTrackingId", "relValues", "preserveParams"];
function ou(e) {
  return p(e) && e in et;
}
function Oy(e) {
  return ou(e) && e.endsWith("Localized");
}
function jI(e) {
  return Oy(e) ? e : `${e}Localized`;
}
var Wy = {
  collectionControlPropLocalized: "collectionControlProp",
  controlPropLocalized: "controlProp",
  richTextNodeLocalized: "richTextNode",
};
function zy(e) {
  return Wy[e];
}
function _I(e) {
  return { ...e, variant: zy(e.variant), childNodes: e.childNodes };
}
function UI(e) {
  return yn(e) && et[e.variant].styles;
}
function KI(e) {
  return yn(e) && !et[e.variant].styles;
}
function $I(e) {
  return Fy.some((t) => t in e);
}
function qI(e) {
  return By.some((t) => t in e);
}
function XI(e) {
  return yn(e) && !e.variant.endsWith("Localized");
}
function ut(e, t) {
  return et[e][t];
}
function yn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "type" in e &&
    e.type === "richText" &&
    "variant" in e &&
    ou(e.variant) &&
    "childNodes" in e &&
    Array.isArray(e.childNodes)
  );
}
function Hy(e) {
  return Ts(e, "type") && p(e.type) && Ay[e.type] === !0;
}
function Se(e, t) {
  if (!Hy(e)) return !1;
  switch (e.type) {
    case "textBlock":
      return !0;
    case "table":
      return et[t].tables;
    case "module":
      return et[t].embeds;
    case "media":
      return et[t].media;
    case "blockquote":
      return et[t].blockquotes;
    case "numberedList":
    case "bulletedList":
      return e.childNodes.every((n) => n.childNodes.every((o) => Se(o, t)));
  }
  W(e);
}
var Gy = {
  "3g2": "video/3gpp2",
  "3gp": "video/3gpp",
  "3gpp": "video/3gpp",
  "3mf": "model/3mf",
  aac: "audio/aac",
  ac: "application/pkix-attr-cert",
  adp: "audio/adpcm",
  adts: "audio/aac",
  ai: "application/postscript",
  aml: "application/automationml-aml+xml",
  amlx: "application/automationml-amlx+zip",
  amr: "audio/amr",
  apng: "image/apng",
  appcache: "text/cache-manifest",
  appinstaller: "application/appinstaller",
  appx: "application/appx",
  appxbundle: "application/appxbundle",
  asc: "application/pgp-keys",
  atom: "application/atom+xml",
  atomcat: "application/atomcat+xml",
  atomdeleted: "application/atomdeleted+xml",
  atomsvc: "application/atomsvc+xml",
  au: "audio/basic",
  avci: "image/avci",
  avcs: "image/avcs",
  avif: "image/avif",
  aw: "application/applixware",
  bdoc: "application/bdoc",
  bin: "application/octet-stream",
  bmp: "image/bmp",
  bpk: "application/octet-stream",
  btf: "image/prs.btif",
  btif: "image/prs.btif",
  buffer: "application/octet-stream",
  ccxml: "application/ccxml+xml",
  cdfx: "application/cdfx+xml",
  cdmia: "application/cdmi-capability",
  cdmic: "application/cdmi-container",
  cdmid: "application/cdmi-domain",
  cdmio: "application/cdmi-object",
  cdmiq: "application/cdmi-queue",
  cer: "application/pkix-cert",
  cgm: "image/cgm",
  cjs: "application/node",
  class: "application/java-vm",
  coffee: "text/coffeescript",
  conf: "text/plain",
  cpl: "application/cpl+xml",
  cpt: "application/mac-compactpro",
  crl: "application/pkix-crl",
  css: "text/css",
  csv: "text/csv",
  cu: "application/cu-seeme",
  cwl: "application/cwl",
  cww: "application/prs.cww",
  davmount: "application/davmount+xml",
  dbk: "application/docbook+xml",
  deb: "application/octet-stream",
  def: "text/plain",
  deploy: "application/octet-stream",
  dib: "image/bmp",
  "disposition-notification": "message/disposition-notification",
  dist: "application/octet-stream",
  distz: "application/octet-stream",
  dll: "application/octet-stream",
  dmg: "application/octet-stream",
  dms: "application/octet-stream",
  doc: "application/msword",
  dot: "application/msword",
  dpx: "image/dpx",
  drle: "image/dicom-rle",
  dsc: "text/prs.lines.tag",
  dssc: "application/dssc+der",
  dtd: "application/xml-dtd",
  dump: "application/octet-stream",
  dwd: "application/atsc-dwd+xml",
  ear: "application/java-archive",
  ecma: "application/ecmascript",
  elc: "application/octet-stream",
  emf: "image/emf",
  eml: "message/rfc822",
  emma: "application/emma+xml",
  emotionml: "application/emotionml+xml",
  eps: "application/postscript",
  epub: "application/epub+zip",
  exe: "application/octet-stream",
  exi: "application/exi",
  exp: "application/express",
  exr: "image/aces",
  ez: "application/andrew-inset",
  fdf: "application/fdf",
  fdt: "application/fdt+xml",
  fits: "image/fits",
  g3: "image/g3fax",
  gbr: "application/rpki-ghostbusters",
  geojson: "application/geo+json",
  gif: "image/gif",
  glb: "model/gltf-binary",
  gltf: "model/gltf+json",
  gml: "application/gml+xml",
  gpx: "application/gpx+xml",
  gram: "application/srgs",
  grxml: "application/srgs+xml",
  gxf: "application/gxf",
  gz: "application/gzip",
  h261: "video/h261",
  h263: "video/h263",
  h264: "video/h264",
  heic: "image/heic",
  heics: "image/heic-sequence",
  heif: "image/heif",
  heifs: "image/heif-sequence",
  hej2: "image/hej2k",
  held: "application/atsc-held+xml",
  hjson: "application/hjson",
  hlp: "application/winhlp",
  hqx: "application/mac-binhex40",
  hsj2: "image/hsj2",
  htm: "text/html",
  html: "text/html",
  ics: "text/calendar",
  ief: "image/ief",
  ifb: "text/calendar",
  iges: "model/iges",
  igs: "model/iges",
  img: "application/octet-stream",
  in: "text/plain",
  ini: "text/plain",
  ink: "application/inkml+xml",
  inkml: "application/inkml+xml",
  ipfix: "application/ipfix",
  iso: "application/octet-stream",
  its: "application/its+xml",
  jade: "text/jade",
  jar: "application/java-archive",
  jhc: "image/jphc",
  jls: "image/jls",
  jp2: "image/jp2",
  jpe: "image/jpeg",
  jpeg: "image/jpeg",
  jpf: "image/jpx",
  jpg: "image/jpeg",
  jpg2: "image/jp2",
  jpgm: "image/jpm",
  jpgv: "video/jpeg",
  jph: "image/jph",
  jpm: "image/jpm",
  jpx: "image/jpx",
  js: "text/javascript",
  json: "application/json",
  json5: "application/json5",
  jsonld: "application/ld+json",
  jsonml: "application/jsonml+json",
  jsx: "text/jsx",
  jt: "model/jt",
  jxl: "image/jxl",
  jxr: "image/jxr",
  jxra: "image/jxra",
  jxrs: "image/jxrs",
  jxs: "image/jxs",
  jxsc: "image/jxsc",
  jxsi: "image/jxsi",
  jxss: "image/jxss",
  kar: "audio/midi",
  ktx: "image/ktx",
  ktx2: "image/ktx2",
  less: "text/less",
  lgr: "application/lgr+xml",
  list: "text/plain",
  litcoffee: "text/coffeescript",
  log: "text/plain",
  lostxml: "application/lost+xml",
  lrf: "application/octet-stream",
  m1v: "video/mpeg",
  m21: "application/mp21",
  m2a: "audio/mpeg",
  m2t: "video/mp2t",
  m2ts: "video/mp2t",
  m2v: "video/mpeg",
  m3a: "audio/mpeg",
  m4a: "audio/mp4",
  m4p: "application/mp4",
  m4s: "video/iso.segment",
  ma: "application/mathematica",
  mads: "application/mads+xml",
  maei: "application/mmt-aei+xml",
  man: "text/troff",
  manifest: "text/cache-manifest",
  map: "application/json",
  mar: "application/octet-stream",
  markdown: "text/markdown",
  mathml: "application/mathml+xml",
  mb: "application/mathematica",
  mbox: "application/mbox",
  md: "text/markdown",
  mdx: "text/mdx",
  me: "text/troff",
  mesh: "model/mesh",
  meta4: "application/metalink4+xml",
  metalink: "application/metalink+xml",
  mets: "application/mets+xml",
  mft: "application/rpki-manifest",
  mid: "audio/midi",
  midi: "audio/midi",
  mime: "message/rfc822",
  mj2: "video/mj2",
  mjp2: "video/mj2",
  mjs: "text/javascript",
  mml: "text/mathml",
  mods: "application/mods+xml",
  mov: "video/quicktime",
  mp2: "audio/mpeg",
  mp21: "application/mp21",
  mp2a: "audio/mpeg",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mp4a: "audio/mp4",
  mp4s: "application/mp4",
  mp4v: "video/mp4",
  mpd: "application/dash+xml",
  mpe: "video/mpeg",
  mpeg: "video/mpeg",
  mpf: "application/media-policy-dataset+xml",
  mpg: "video/mpeg",
  mpg4: "video/mp4",
  mpga: "audio/mpeg",
  mpp: "application/dash-patch+xml",
  mrc: "application/marc",
  mrcx: "application/marcxml+xml",
  ms: "text/troff",
  mscml: "application/mediaservercontrol+xml",
  msh: "model/mesh",
  msi: "application/octet-stream",
  msix: "application/msix",
  msixbundle: "application/msixbundle",
  msm: "application/octet-stream",
  msp: "application/octet-stream",
  mtl: "model/mtl",
  mts: "video/mp2t",
  musd: "application/mmt-usd+xml",
  mxf: "application/mxf",
  mxmf: "audio/mobile-xmf",
  mxml: "application/xv+xml",
  n3: "text/n3",
  nb: "application/mathematica",
  nq: "application/n-quads",
  nt: "application/n-triples",
  obj: "model/obj",
  oda: "application/oda",
  oga: "audio/ogg",
  ogg: "audio/ogg",
  ogv: "video/ogg",
  ogx: "application/ogg",
  omdoc: "application/omdoc+xml",
  onepkg: "application/onenote",
  onetmp: "application/onenote",
  onetoc: "application/onenote",
  onetoc2: "application/onenote",
  opf: "application/oebps-package+xml",
  opus: "audio/ogg",
  otf: "font/otf",
  owl: "application/rdf+xml",
  oxps: "application/oxps",
  p10: "application/pkcs10",
  p7c: "application/pkcs7-mime",
  p7m: "application/pkcs7-mime",
  p7s: "application/pkcs7-signature",
  p8: "application/pkcs8",
  pdf: "application/pdf",
  pfr: "application/font-tdpfr",
  pgp: "application/pgp-encrypted",
  pkg: "application/octet-stream",
  pki: "application/pkixcmp",
  pkipath: "application/pkix-pkipath",
  pls: "application/pls+xml",
  png: "image/png",
  prc: "model/prc",
  prf: "application/pics-rules",
  provx: "application/provenance+xml",
  ps: "application/postscript",
  pskcxml: "application/pskc+xml",
  pti: "image/prs.pti",
  qt: "video/quicktime",
  raml: "application/raml+yaml",
  rapd: "application/route-apd+xml",
  rdf: "application/rdf+xml",
  relo: "application/p2p-overlay+xml",
  rif: "application/reginfo+xml",
  rl: "application/resource-lists+xml",
  rld: "application/resource-lists-diff+xml",
  rmi: "audio/midi",
  rnc: "application/relax-ng-compact-syntax",
  rng: "application/xml",
  roa: "application/rpki-roa",
  roff: "text/troff",
  rq: "application/sparql-query",
  rs: "application/rls-services+xml",
  rsat: "application/atsc-rsat+xml",
  rsd: "application/rsd+xml",
  rsheet: "application/urc-ressheet+xml",
  rss: "application/rss+xml",
  rtf: "text/rtf",
  rtx: "text/richtext",
  rusd: "application/route-usd+xml",
  s3m: "audio/s3m",
  sbml: "application/sbml+xml",
  scq: "application/scvp-cv-request",
  scs: "application/scvp-cv-response",
  sdp: "application/sdp",
  senmlx: "application/senml+xml",
  sensmlx: "application/sensml+xml",
  ser: "application/java-serialized-object",
  setpay: "application/set-payment-initiation",
  setreg: "application/set-registration-initiation",
  sgi: "image/sgi",
  sgm: "text/sgml",
  sgml: "text/sgml",
  shex: "text/shex",
  shf: "application/shf+xml",
  shtml: "text/html",
  sieve: "application/sieve",
  sig: "application/pgp-signature",
  sil: "audio/silk",
  silo: "model/mesh",
  siv: "application/sieve",
  slim: "text/slim",
  slm: "text/slim",
  sls: "application/route-s-tsid+xml",
  smi: "application/smil+xml",
  smil: "application/smil+xml",
  snd: "audio/basic",
  so: "application/octet-stream",
  spdx: "text/spdx",
  spp: "application/scvp-vp-response",
  spq: "application/scvp-vp-request",
  spx: "audio/ogg",
  sql: "application/sql",
  sru: "application/sru+xml",
  srx: "application/sparql-results+xml",
  ssdl: "application/ssdl+xml",
  ssml: "application/ssml+xml",
  stk: "application/hyperstudio",
  stl: "model/stl",
  stpx: "model/step+xml",
  stpxz: "model/step-xml+zip",
  stpz: "model/step+zip",
  styl: "text/stylus",
  stylus: "text/stylus",
  svg: "image/svg+xml",
  svgz: "image/svg+xml",
  swidtag: "application/swid+xml",
  t: "text/troff",
  t38: "image/t38",
  td: "application/urc-targetdesc+xml",
  tei: "application/tei+xml",
  teicorpus: "application/tei+xml",
  text: "text/plain",
  tfi: "application/thraud+xml",
  tfx: "image/tiff-fx",
  tif: "image/tiff",
  tiff: "image/tiff",
  toml: "application/toml",
  tr: "text/troff",
  trig: "application/trig",
  ts: "video/mp2t",
  tsd: "application/timestamped-data",
  tsv: "text/tab-separated-values",
  ttc: "font/collection",
  ttf: "font/ttf",
  ttl: "text/turtle",
  ttml: "application/ttml+xml",
  txt: "text/plain",
  u3d: "model/u3d",
  u8dsn: "message/global-delivery-status",
  u8hdr: "message/global-headers",
  u8mdn: "message/global-disposition-notification",
  u8msg: "message/global",
  ubj: "application/ubjson",
  uri: "text/uri-list",
  uris: "text/uri-list",
  urls: "text/uri-list",
  vcard: "text/vcard",
  vrml: "model/vrml",
  vtt: "text/vtt",
  vxml: "application/voicexml+xml",
  war: "application/java-archive",
  wasm: "application/wasm",
  wav: "audio/wav",
  weba: "audio/webm",
  webm: "video/webm",
  webmanifest: "application/manifest+json",
  webp: "image/webp",
  wgsl: "text/wgsl",
  wgt: "application/widget",
  wif: "application/watcherinfo+xml",
  wmf: "image/wmf",
  woff: "font/woff",
  woff2: "font/woff2",
  wrl: "model/vrml",
  wsdl: "application/wsdl+xml",
  wspolicy: "application/wspolicy+xml",
  x3d: "model/x3d+xml",
  x3db: "model/x3d+fastinfoset",
  x3dbz: "model/x3d+binary",
  x3dv: "model/x3d-vrml",
  x3dvz: "model/x3d+vrml",
  x3dz: "model/x3d+xml",
  xaml: "application/xaml+xml",
  xav: "application/xcap-att+xml",
  xca: "application/xcap-caps+xml",
  xcs: "application/calendar+xml",
  xdf: "application/xcap-diff+xml",
  xdssc: "application/dssc+xml",
  xel: "application/xcap-el+xml",
  xenc: "application/xenc+xml",
  xer: "application/patch-ops-error+xml",
  xfdf: "application/xfdf",
  xht: "application/xhtml+xml",
  xhtml: "application/xhtml+xml",
  xhvml: "application/xv+xml",
  xlf: "application/xliff+xml",
  xm: "audio/xm",
  xml: "text/xml",
  xns: "application/xcap-ns+xml",
  xop: "application/xop+xml",
  xpl: "application/xproc+xml",
  xsd: "application/xml",
  xsf: "application/prs.xsf+xml",
  xsl: "application/xml",
  xslt: "application/xml",
  xspf: "application/xspf+xml",
  xvm: "application/xv+xml",
  xvml: "application/xv+xml",
  yaml: "text/yaml",
  yang: "application/yang",
  yin: "application/yin+xml",
  yml: "text/yaml",
  zip: "application/zip",
};
function ru(e) {
  let t = ("" + e).trim().toLowerCase(),
    n = t.lastIndexOf(".");
  return Gy[~n ? t.substring(++n) : t];
}
var jy = { auto: !0, lossless: !0, small: !0, medium: !0, large: !0, full: !0 };
function iu(e) {
  return vs(e) && e in jy;
}
var mo = "framer/asset-reference,";
function _y(e) {
  return e.startsWith(`data:${mo}`);
}
function ik(e) {
  return ru(e)?.startsWith("image/") ?? !1;
}
var au = "originalFilename",
  su = "packageIdentifier",
  lu = "preferredSize",
  uu = "presetName",
  du = "width",
  cu = "height";
function pu(e, t = null, n = null, o = null, r = null, i = null) {
  C(e !== "", "Can\u2019t create asset reference for empty identifier");
  let a = new URL(`data:${mo}${e}`);
  return (
    n && a.searchParams.set(au, n),
    t && a.searchParams.set(su, t),
    o && a.searchParams.set(lu, o),
    r && a.searchParams.set(uu, r),
    i && (a.searchParams.set(du, i.width.toString()), a.searchParams.set(cu, i.height.toString())),
    a.href
  );
}
function ak({
  identifier: e,
  preferredSize: t,
  intrinsicSize: n,
  packageIdentifier: o,
  originalFilename: r,
  presetName: i,
}) {
  return pu(e, o, r, t, i, n);
}
function sk(e) {
  return pu(
    e.identifier,
    e.packageIdentifier,
    e.originalFilename,
    e.preferredSize,
    e.presetName,
    e.intrinsicSize
  );
}
function fu(e) {
  if (_y(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(mo.length),
        o = t.searchParams.get(au),
        r = t.searchParams.get(su),
        i = t.searchParams.get(lu),
        a = t.searchParams.get(uu),
        s = t.searchParams.get(du),
        l = t.searchParams.get(cu);
      return {
        identifier: n,
        originalFilename: o,
        packageIdentifier: r,
        preferredSize: iu(i) ? i : void 0,
        presetName: a,
        fileExtension: o && Uy(o),
        intrinsicSize: s && l ? { width: parseInt(s), height: parseInt(l) } : void 0,
      };
    } catch {
      return;
    }
}
function Uy(e) {
  return e.split(".").pop() ?? "";
}
var Ni = class {},
  Pi = class extends Ni {},
  yo = class extends Pi {
    childIds = [];
    childById = new Map();
    constructor(t) {
      if ((super(), t)) for (let n of t) this.push(n);
    }
    get length() {
      return this.childIds.length;
    }
    at(t) {
      let n = this.childIds.at(t);
      if (n) return this.childById.get(n);
    }
    indexOf(t) {
      return this.findIndex((n) => n === t);
    }
    some(t) {
      for (let n = 0; n < this.childIds.length; n++) {
        let o = this.childIds[n],
          r = this.childById.get(o);
        if (t(r, n)) return !0;
      }
      return !1;
    }
    every(t) {
      for (let n = 0; n < this.childIds.length; n++) {
        let o = this.childIds[n],
          r = this.childById.get(o);
        if (!t(r, n)) return !1;
      }
      return !0;
    }
    forEach(t) {
      for (let n = 0; n < this.childIds.length; n++) {
        let o = this.childIds[n],
          r = this.childById.get(o);
        t(r, n);
      }
    }
    map(t) {
      let n = Array(this.childIds.length);
      for (let o = 0; o < this.childIds.length; o++) {
        let r = this.childIds[o],
          i = this.childById.get(r);
        n[o] = t(i, o);
      }
      return n;
    }
    reduce(t, n) {
      let o = n;
      for (let r = 0; r < this.childIds.length; r++) {
        let i = this.childIds[r],
          a = this.childById.get(i);
        o = t(o, a, r);
      }
      return o;
    }
    filter(t) {
      let n = [];
      for (let o = 0; o < this.childIds.length; o++) {
        let r = this.childIds[o],
          i = this.childById.get(r);
        t(i, o) && n.push(i);
      }
      return n;
    }
    sort(t) {
      let n = this.toArray().sort(t);
      for (let o = 0; o < n.length; o++) this.childIds[o] = n[o].id;
    }
    find(t) {
      let n = this.findIndex(t);
      if (n !== -1) return this.at(n);
    }
    findIndex(t) {
      for (let n = 0; n < this.childIds.length; n++) {
        let o = this.childIds[n],
          r = this.childById.get(o);
        if (t(r, n)) return n;
      }
      return -1;
    }
    findLast(t) {
      let n = this.findLastIndex(t);
      if (n !== -1) return this.at(n);
    }
    findLastIndex(t) {
      for (let n = this.childIds.length - 1; n >= 0; n--) {
        let o = this.childIds[n],
          r = this.childById.get(o);
        if (t(r, n)) return n;
      }
      return -1;
    }
    slice(t, n) {
      let o = this.childIds.slice(t, n),
        r = Array(o.length);
      for (let i = 0; i < o.length; i++) {
        let a = o[i],
          s = this.childById.get(a);
        r[i] = s;
      }
      return r;
    }
    splice(t, n = 1 / 0, ...o) {
      let r = o.map((a) => a.id),
        i = this.childIds.splice(t, n, ...r);
      for (let a of i) this.childById.delete(a);
      for (let a of o) this.childById.set(a.id, a);
    }
    push(...t) {
      for (let n of t) (this.childIds.push(n.id), this.childById.set(n.id, n));
    }
    swap(t) {
      this.childById.has(t.id) && this.childById.set(t.id, t);
    }
    toArray() {
      let t = Array(this.childIds.length);
      for (let n = 0; n < this.childIds.length; n++) {
        let o = this.childIds[n],
          r = this.childById.get(o);
        t[n] = r;
      }
      return t;
    }
    *[Symbol.iterator]() {
      for (let t = 0; t < this.childIds.length; t++) {
        let n = this.childIds[t];
        yield this.childById.get(n);
      }
    }
  };
var fk = {},
  Ky = "children";
function $y(e) {
  return Ky in e && e.children !== void 0;
}
var qy = new yo();
function mu(e) {
  return $y(e) ? e.children : qy;
}
function yu(e) {
  for (let t in e) return !1;
  return !0;
}
var vi = "default";
function gk(e) {
  return js(e) ? e.getGroundNodes().length === 0 : !1;
}
function bk(e) {
  if (!Oe(e)) return !1;
  let t = e.getGroundNodes();
  return t.length > 1 ? !1 : t.length === 0 ? !0 : t[0]?.children?.length === 0;
}
function Xy(e) {
  return e ? !e.children || e.children.length === 0 : !1;
}
function Yy(e) {
  return e === "";
}
function Ii(e) {
  return !!(e.webPageId && Yy(e.segment));
}
function Tk(e) {
  return Ii(e) && Xy(e);
}
function Jy(e, t) {
  let n = t.get(e);
  if (!$n(n)) return;
  let o = t.get(n.webPageId);
  if (Oe(o) || n.children.length > 0) return;
  let r = n.parentid;
  (t.remove(n.id), r && Jy(r, t));
}
var Ot = "default",
  hu = "include";
function Vk(e, t) {
  return t === Ot ? hu : (e.localeConfig?.[t]?.inclusion ?? Zy(e, t) ?? hu);
}
function Zy(e, t) {
  if (e.includedLocales !== void 0) return e.includedLocales.includes(t) ? "include" : "exclude";
}
var gu = (e) => {
    let t = R.fromRect(e.getBoundingClientRect());
    return ((t.x = t.x + Ct.scrollX), (t.y = t.y + Ct.scrollY), t);
  },
  Qy = (e) => R.merge(...e.map(gu)),
  eh = (e, t) => {
    let n = bu(e, t);
    return { x: n.x, y: n.y, width: e.width, height: e.height };
  },
  th = (e, t) => {
    let n = Tu(e, t);
    return { x: n.x, y: n.y, width: e.width, height: e.height };
  },
  ki = (e) => {
    let t = e.getBoundingClientRect();
    return { x: t.left + Ct.scrollX, y: t.top + Ct.scrollY, width: t.width, height: t.height };
  },
  nh = (e) => ({ x: e.pageX, y: e.pageY }),
  oh = (e) => ({ x: e.clientX, y: e.clientY }),
  bu = (e, t) => {
    let n = ki(t);
    return { x: e.x + n.x, y: e.y + n.y };
  },
  Tu = (e, t) => {
    let n = ki(t);
    return { x: e.x - n.x, y: e.y - n.y };
  },
  vk = (e, t = {}) => {
    let n = new KeyboardEvent("keydown", { bubbles: !0, keyCode: e, ...t }),
      o = document.activeElement;
    o && o.dispatchEvent(n);
  },
  Ik = {
    frameFromElement: gu,
    frameFromElements: Qy,
    convertToPageFrame: eh,
    convertFromPageFrame: th,
    getPageFrame: ki,
    fromEventForPage: nh,
    fromEventForClient: oh,
    convertToPagePoint: bu,
    convertFromPagePoint: Tu,
  },
  xu,
  rh = !is() && typeof Document < "u" && typeof Document.parseHTMLUnsafe == "function";
function Cu(e, t) {
  return rh && !t
    ? Document.parseHTMLUnsafe(e)
    : ((xu ??= new DOMParser()), xu.parseFromString(e, t ?? "text/html"));
}
function kk(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
var ih = /&(?:[gl]t|quot|#39|amp|#6[02]|#34|apos|#38);/gu,
  ah = {
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&amp;": "&",
    "&#60;": "<",
    "&#62;": ">",
    "&#34;": '"',
    "&apos;": "'",
    "&#38;": "&",
  };
function Dk(e) {
  return e.replace(ih, (t) => ah[t]);
}
function Vu(e) {
  let t = `<html><body>${e}</body></html>`;
  return Cu(t).body;
}
function sh(e, t) {
  let n = new Map();
  function o(r) {
    let i = n.get(r);
    if (p(i)) return i;
    let a = e(r);
    if ((n.set(r, a), n.size > t)) {
      let s = n.keys().next().value;
      p(s) && n.delete(s);
    }
    return a;
  }
  return o;
}
var lh = 1e5,
  Di = sh(uh, lh);
function uh(e) {
  let t = Vu(e),
    n = t.innerText;
  return ls.isTest ? (n ?? t.textContent ?? "") : (C(n !== null), n);
}
function Su(
  e,
  t = `
`
) {
  let n = e.replace(/<\/(h[1-6]|p|ul|ol)>/gu, `</$1>${t}`),
    o = Di(n),
    r = t.length;
  return r && o.endsWith(t) ? o.slice(0, r * -1) : o;
}
function Ru(e, { preserveTrailingEmptyBlockNewLine: t = !1 } = {}) {
  let n = ho(e.childNodes);
  if (n.length === 0) return "";
  let o = n.join(`
`);
  return !t || e.childNodes.some(xo)
    ? o
    : o +
        `
`;
}
function Nu(e) {
  return e.replaceAll(/\n+/gu, "");
}
function ho(e) {
  return e.flatMap((t) => (t.type === "media" || t.type === "module" ? [] : [dh(t)]));
}
function dh(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.map(yh).join("");
    case "bulletedList":
    case "numberedList":
      return ph(e.childNodes).join(`
`);
    case "blockquote":
      return ho(e.childNodes).join(`
`);
    case "table":
      return e.childNodes.map(fh).join(`
`);
    case "media":
    case "module":
      return "";
  }
}
function ch(e) {
  return ho(e.childNodes).join(`
`);
}
function ph(e) {
  return e.flatMap((t) => {
    let n = ch(t);
    return n.length > 0 ? [n] : [];
  });
}
function fh(e) {
  return e.childNodes.map(mh).join(`
`);
}
function mh(e) {
  return ho(e.childNodes).join(`
`);
}
function yh(e) {
  switch (e.type) {
    case "text":
      return e.text;
    case "lineBreak":
      return `
`;
  }
}
function xo(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.some(bh);
    case "bulletedList":
    case "numberedList":
      return e.childNodes.some(hh);
    case "blockquote":
      return e.childNodes.some(xo);
    case "table":
      return e.childNodes.some(xh);
    case "media":
    case "module":
      return !1;
  }
}
function hh(e) {
  return e.childNodes.some(xo);
}
function xh(e) {
  return e.childNodes.some(gh);
}
function gh(e) {
  return e.childNodes.some(xo);
}
function bh(e) {
  switch (e.type) {
    case "text":
      return e.text.length > 0;
    case "lineBreak":
      return !1;
  }
}
var Li = {};
Object.freeze(Li);
function jk(e, t) {
  if (!e) return Li;
  let n = e,
    o = {},
    r = !1;
  for (let i of t) {
    let a = n[i.id];
    a !== void 0 && ((o[i.id] = a), (r = !0));
  }
  return r ? o : Li;
}
function go(e) {
  return e?.value !== void 0 && e?.value !== null;
}
function _k(e, t) {
  let n = e?.[t];
  return go(n) ? n.value : void 0;
}
function Th(e, { preserveNewLines: t = !1 } = {}) {
  return p(e.value)
    ? e.type !== "rich-text"
      ? e.value
      : t
        ? Su(e.value)
        : Di(e.value)
    : Ch(e.value, { preserveNewLines: t });
}
function Uk(e, t) {
  if (e != null) {
    if (e.value === null) return null;
    if (go(e)) return Th(e, t);
  }
}
function Ch(e, { preserveNewLines: t }) {
  let n = Ru(e);
  return t ? n : Nu(n);
}
function Pu(e, t) {
  if (!t || !e || e.id === Ot) return null;
  for (; e;) {
    let n = t[e.id];
    if (n && go(n)) return n;
    e = e.fallback;
  }
  return null;
}
var vu = "routeSegmentRoot";
var Vh = new Set(["/404.html", "/404", "/404/"]),
  Iu = new Set(Array.from(Vh).map((e) => e.replaceAll("/", "")));
var ku = {
    aa: "Afar",
    ab: "Abkhazian",
    ae: "Avestan",
    af: "Afrikaans",
    ak: "Akan",
    sq: "Albanian",
    am: "Amharic",
    an: "Aragonese",
    ar: "Arabic",
    hy: "Armenian",
    as: "Assamese",
    asa: "Asu",
    av: "Avaric",
    ay: "Aymara",
    az: "Azerbaijani",
    "az-Cyrl": "Azerbaijani (Cyrillic)",
    "az-Latn": "Azerbaijani (Latin)",
    bm: "Bambara",
    ba: "Bashkir",
    eu: "Basque",
    be: "Belarusian",
    bem: "Bemba",
    bez: "Bena",
    bn: "Bengali",
    bi: "Bislama",
    bs: "Bosnian",
    br: "Breton",
    bg: "Bulgarian",
    my: "Burmese",
    "yue-Hant": "Cantonese (Traditional)",
    ca: "Catalan",
    tzm: "Central Morocco Tamazight",
    "tzm-Latn": "Central Morocco Tamazight (Latin)",
    chr: "Cherokee",
    ch: "Chamorro",
    ce: "Chechen",
    ny: "Chichewa, Chewa, Nyanja",
    cgg: "Chiga",
    zh: "Chinese",
    "zh-Hans": "Chinese (Simplified Han)",
    "zh-Hant": "Chinese (Traditional Han)",
    cu: "Church Slavic, Old Slavonic",
    cv: "Chuvash",
    kw: "Cornish",
    co: "Corsican",
    cr: "Cree",
    hr: "Croatian",
    cs: "Czech",
    da: "Danish",
    dv: "Divehi, Dhivehi, Maldivian",
    nl: "Dutch",
    dz: "Dzongkha",
    ebu: "Embu",
    en: "English",
    eo: "Esperanto",
    et: "Estonian",
    ee: "Ewe",
    fo: "Faroese",
    fil: "Filipino",
    fi: "Finnish",
    fj: "Fijian",
    fr: "French",
    ff: "Fulah",
    gd: "Gaelic, Scottish Gaelic",
    gl: "Galician",
    lg: "Ganda",
    ka: "Georgian",
    de: "German",
    el: "Greek",
    gn: "Guarani",
    gu: "Gujarati",
    guz: "Gusii",
    ht: "Haitian, Haitian Creole",
    ha: "Hausa",
    "ha-Latn": "Hausa (Latin)",
    haw: "Hawaiian",
    he: "Hebrew",
    hz: "Herero",
    hi: "Hindi",
    ho: "Hiri Motu",
    hu: "Hungarian",
    is: "Icelandic",
    io: "Ido",
    ig: "Igbo",
    id: "Indonesian",
    ia: "Interlingua",
    ie: "Interlingue, Occidental",
    iu: "Inuktitut",
    ik: "Inupiaq",
    ga: "Irish",
    it: "Italian",
    ja: "Japanese",
    jv: "Javanese",
    kea: "Kabuverdianu",
    kab: "Kabyle",
    kl: "Kalaallisut",
    kln: "Kalenjin",
    kam: "Kamba",
    kn: "Kannada",
    kr: "Kanuri",
    ks: "Kashmiri",
    kk: "Kazakh",
    "kk-Cyrl": "Kazakh (Cyrillic)",
    km: "Khmer",
    ki: "Kikuyu",
    rw: "Kinyarwanda",
    ky: "Kirghiz, Kyrgyz",
    kv: "Komi",
    kg: "Kongo",
    kok: "Konkani",
    ko: "Korean",
    khq: "Koyra Chiini",
    ses: "Koyraboro Senni",
    kj: "Kuanyama, Kwanyama",
    ku: "Kurdish",
    lag: "Langi",
    lo: "Lao",
    la: "Latin",
    lv: "Latvian",
    li: "Limburgan, Limburger, Limburgish",
    ln: "Lingala",
    lt: "Lithuanian",
    lu: "Luba-Katanga",
    luo: "Luo",
    lb: "Luxembourgish, Letzeburgesch",
    luy: "Luyia",
    mk: "Macedonian",
    jmc: "Machame",
    kde: "Makonde",
    mg: "Malagasy",
    ms: "Malay",
    ml: "Malayalam",
    mt: "Maltese",
    gv: "Manx",
    mi: "Maori",
    na: "Nauru",
    mr: "Marathi",
    mh: "Marshallese",
    mas: "Masai",
    nv: "Navajo, Navaho",
    mer: "Meru",
    mn: "Mongolian",
    cnr: "Montenegrin",
    mfe: "Morisyen",
    naq: "Nama",
    ne: "Nepali",
    ng: "Ndonga",
    se: "Northern Sami",
    nd: "North Ndebele",
    nb: "Norwegian Bokm\xE5l",
    nn: "Norwegian Nynorsk",
    no: "Norwegian",
    nyn: "Nyankole",
    oc: "Occitan",
    oj: "Ojibwa",
    or: "Oriya",
    om: "Oromo",
    os: "Ossetian, Ossetic",
    pi: "Pali",
    ps: "Pashto",
    fa: "Persian",
    pl: "Polish",
    pt: "Portuguese",
    pa: "Punjabi",
    "pa-Arab": "Punjabi (Arabic)",
    "pa-Guru": "Punjabi (Gurmukhi)",
    qu: "Quechua",
    ro: "Romanian",
    rm: "Romansh",
    rof: "Rombo",
    rn: "Rundi",
    ru: "Russian",
    rwk: "Rwa",
    sm: "Samoan",
    saq: "Samburu",
    sg: "Sango",
    sa: "Sanskrit",
    sc: "Sardinian",
    seh: "Sena",
    sr: "Serbian",
    "sr-Cyrl": "Serbian (Cyrillic)",
    "sr-Latn": "Serbian (Latin)",
    sn: "Shona",
    ii: "Sichuan Yi",
    sd: "Sindhi",
    si: "Sinhala",
    sk: "Slovak",
    sl: "Slovenian",
    xog: "Soga",
    so: "Somali",
    st: "Southern Sotho",
    nr: "South Ndebele",
    es: "Spanish",
    su: "Sundanese",
    sw: "Swahili",
    ss: "Swati",
    sv: "Swedish",
    gsw: "Swiss German",
    shi: "Tachelhit",
    "shi-Latn": "Tachelhit (Latin)",
    "shi-Tfng": "Tachelhit (Tifinagh)",
    tl: "Tagalog",
    ty: "Tahitian",
    dav: "Taita",
    tg: "Tajik",
    ta: "Tamil",
    tt: "Tatar",
    te: "Telugu",
    teo: "Teso",
    th: "Thai",
    bo: "Tibetan",
    ti: "Tigrinya",
    to: "Tonga",
    ts: "Tsonga",
    tn: "Tswana",
    tr: "Turkish",
    tk: "Turkmen",
    tw: "Twi",
    ug: "Uighur, Uyghur",
    uk: "Ukrainian",
    ur: "Urdu",
    uz: "Uzbek",
    "uz-Arab": "Uzbek (Arabic)",
    "uz-Cyrl": "Uzbek (Cyrillic)",
    "uz-Latn": "Uzbek (Latin)",
    ve: "Venda",
    vi: "Vietnamese",
    vo: "Volap\xFCk",
    vun: "Vunjo",
    wa: "Walloon",
    cy: "Welsh",
    fy: "Western Frisian",
    wo: "Wolof",
    xh: "Xhosa",
    yi: "Yiddish",
    yo: "Yoruba",
    za: "Zhuang, Chuang",
    zu: "Zulu",
  },
  Du = {
    AL: "Albania",
    AS: "American Samoa",
    AR: "Argentina",
    AM: "Armenia",
    AT: "Austria",
    AU: "Australia",
    AZ: "Azerbaijan",
    BA: "Bosnia and Herzegovina",
    BD: "Bangladesh",
    BE: "Belgium",
    BF: "Burkina Faso",
    BG: "Bulgaria",
    BH: "Bahrain",
    BI: "Burundi",
    BJ: "Benin",
    BL: "Saint Barth\xE9lemy",
    BN: "Brunei",
    BO: "Bolivia",
    BR: "Brazil",
    BW: "Botswana",
    BY: "Belarus",
    BZ: "Belize",
    CA: "Canada",
    CD: "Congo - Kinshasa",
    CF: "Central African Republic",
    CG: "Congo - Brazzaville",
    CH: "Switzerland",
    CI: "C\xF4te d\u2019Ivoire",
    CL: "Chile",
    CM: "Cameroon",
    CV: "Cape Verde",
    CN: "China",
    CO: "Colombia",
    CR: "Costa Rica",
    CY: "Cyprus",
    CZ: "Czechia",
    DE: "Germany",
    DJ: "Djibouti",
    DK: "Denmark",
    DO: "Dominican Republic",
    DZ: "Algeria",
    EC: "Ecuador",
    EE: "Estonia",
    EG: "Egypt",
    ER: "Eritrea",
    ES: "Spain",
    ET: "Ethiopia",
    FI: "Finland",
    FO: "Faroe Islands",
    FR: "France",
    GA: "Gabon",
    GB: "United Kingdom",
    GE: "Georgia",
    GH: "Ghana",
    GL: "Greenland",
    GN: "Guinea",
    GP: "Guadeloupe",
    GQ: "Equatorial Guinea",
    GR: "Greece",
    GT: "Guatemala",
    GU: "Guam",
    GW: "Guinea-Bissau",
    HK: "Hong Kong SAR China",
    HN: "Honduras",
    HR: "Croatia",
    HU: "Hungary",
    ID: "Indonesia",
    IE: "Ireland",
    IL: "Israel",
    IN: "India",
    IQ: "Iraq",
    IR: "Iran",
    IS: "Iceland",
    IT: "Italy",
    JM: "Jamaica",
    JO: "Jordan",
    JP: "Japan",
    KE: "Kenya",
    KH: "Cambodia",
    KM: "Comoros",
    KR: "South Korea",
    KW: "Kuwait",
    KZ: "Kazakhstan",
    LB: "Lebanon",
    LI: "Liechtenstein",
    LK: "Sri Lanka",
    LT: "Lithuania",
    LU: "Luxembourg",
    LV: "Latvia",
    LY: "Libya",
    MA: "Morocco",
    MC: "Monaco",
    MD: "Moldova",
    ME: "Montenegro",
    MF: "Saint Martin",
    MG: "Madagascar",
    MH: "Marshall Islands",
    MK: "Macedonia",
    ML: "Mali",
    MM: "Myanmar [Burma]",
    MO: "Macau SAR China",
    MP: "Northern Mariana Islands",
    MQ: "Martinique",
    MT: "Malta",
    MU: "Mauritius",
    MX: "Mexico",
    MY: "Malaysia",
    MZ: "Mozambique",
    NA: "Namibia",
    NE: "Niger",
    NG: "Nigeria",
    NI: "Nicaragua",
    NL: "Netherlands",
    NO: "Norway",
    NP: "Nepal",
    NZ: "New Zealand",
    OM: "Oman",
    PA: "Panama",
    PE: "Peru",
    PH: "Philippines",
    PK: "Pakistan",
    PL: "Poland",
    PR: "Puerto Rico",
    PT: "Portugal",
    PY: "Paraguay",
    QA: "Qatar",
    RE: "R\xE9union",
    RO: "Romania",
    RS: "Serbia",
    RU: "Russia",
    RW: "Rwanda",
    SA: "Saudi Arabia",
    SD: "Sudan",
    SE: "Sweden",
    SG: "Singapore",
    SI: "Slovenia",
    SK: "Slovakia",
    SN: "Senegal",
    SO: "Somalia",
    SV: "El Salvador",
    SY: "Syria",
    TD: "Chad",
    TG: "Togo",
    TH: "Thailand",
    TN: "Tunisia",
    TO: "Tonga",
    TR: "Turkey",
    TT: "Trinidad and Tobago",
    TW: "Taiwan",
    TZ: "Tanzania",
    UA: "Ukraine",
    UG: "Uganda",
    UM: "U.S. Minor Outlying Islands",
    AE: "United Arab Emirates",
    US: "United States",
    UY: "Uruguay",
    AF: "Afghanistan",
    UZ: "Uzbekistan",
    VE: "Venezuela",
    VI: "U.S. Virgin Islands",
    VN: "Vietnam",
    YE: "Yemen",
    ZA: "South Africa",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    419: "Latin America",
  };
function Lu(e) {
  return p(e) && e in ku;
}
var Qk = ku;
function Sh(e) {
  return p(e) && e in Du;
}
var eD = Du;
function tD(e) {
  if (!p(e)) return !1;
  if (Lu(e)) return !0;
  let [t, n] = wu(e);
  return !!(t && n);
}
function wu(e) {
  if (!p(e)) return [void 0, void 0];
  let t = e.split("-"),
    n = "",
    o;
  for (let r of t) {
    if (Sh(r)) {
      o = r;
      continue;
    }
    if (!n) {
      n = r;
      continue;
    }
    n += "-" + r;
  }
  return [Lu(n) ? n : void 0, o];
}
var Rh = new Set(["ar", "dv", "fa", "he", "ks", "ps", "sd", "ug", "ur", "yi"]);
function Nh(e) {
  return e.endsWith("-Arab") || e.includes("-Arab-");
}
function bo(e) {
  if (Nh(e)) return "rtl";
  let [t] = wu(e);
  return t && Rh.has(t) ? "rtl" : "ltr";
}
var Mu = Symbol();
function He(e) {
  let t,
    n = Mu;
  return (...o) => {
    if (t && Is(t, o) && n !== Mu) return n;
    t = o;
    let r = e(...o);
    return ((n = r), r);
  };
}
function wi(e, t) {
  let n = e.root.getDefaultLocale(),
    o = e.root.locales ?? Wn();
  return t === "includeDrafts" ? Ph(n, o) : vh(n, o);
}
function dD(e, t, n = "includeDrafts") {
  let o = wi(e, n),
    r = o[0];
  return (
    C(r, "Default locale should always exist"),
    t ? (o.find(({ id: i }) => i === t) ?? r) : r
  );
}
var Ph = He((e, t) => {
    let n = [e, ...t];
    return Mi(n, { includeDrafts: !0 });
  }),
  vh = He((e, t) => {
    let n = [e, ...t];
    return Mi(n, { includeDrafts: !1 });
  });
function Mi(e, { includeDrafts: t }) {
  let n = new Map(),
    o = new Map();
  for (let a of e) (n.set(a.id, a), a.fallback && o.set(a.id, a.fallback));
  let r = [],
    i = !t && Rs.isOn("skipPublishingLocalesFallingBackToDraft");
  for (let a of e) {
    if ((!t && a.draft) || (i && Eu(a, n))) continue;
    let s = Bu(a);
    if ((r.push(s), !a.fallback)) continue;
    let l = s,
      u = n.get(a.fallback),
      c = new Set();
    for (c.add(a.id); u && !c.has(u.id);) {
      c.add(u.id);
      let m = Bu(u);
      ((l.fallback = m), (l = m));
      let f = o.get(u.id);
      u = f ? n.get(f) : void 0;
    }
  }
  return r;
}
function cD(e) {
  let t = new Map(e.map((n) => [n.id, n]));
  return e.filter((n) => !n.draft && Eu(n, t));
}
function Eu(e, t) {
  let n = new Set(),
    o = e;
  for (; o;) {
    if (n.has(o.id)) return !1;
    if ((n.add(o.id), o.draft)) return !0;
    o = o.fallback ? t.get(o.fallback) : void 0;
  }
  return !1;
}
function Bu(e) {
  return { id: e.id, code: e.code, slug: e.slug, name: e.name, textDirection: bo(e.code) };
}
var pD = { vekterLocalesToRouterLocales: Mi };
var Ih = "$";
function Au(e) {
  let t = e.get(vu);
  return (
    C(t, "RouteSegmentRootNode not found"),
    C(
      t.parentid === e.root.id,
      "RouteSegmentRootNode is not under the tree root. Parent id: " + t.parentid
    ),
    t
  );
}
function CD(e, t) {
  let n = wi(e, "excludeDrafts"),
    o = Object.fromEntries(n.map((l) => [l.id, {}])),
    r = new Map(),
    i = 0,
    a = () => `${Ih}${i++}`,
    s = new Set();
  for (let l of t.children) Fu(e, "", r, o, a, s, l, n);
  return { webPageSegmentReferencePathByWebPageId: r, localizedSegments: o };
}
function Fu(e, t, n, o, r, i, a, s) {
  C(o[vi], "dictionary should include default");
  let l = a.webPageId ? e.get(a.webPageId) : void 0,
    u = !!l && !l.isDraft && !i.has(l.id);
  u && i.add(l.id);
  let c;
  kh(a) ? (a.segment ? ((c = r()), (t = `${t}/${c}`)) : (t = `${t}/`)) : (t = `${t}/${a.segment}`);
  let m = u;
  for (let f of a.children) m = Fu(e, t, n, o, r, i, f, s) || m;
  if (m && c) {
    o[vi][c] = a.segment;
    for (let f of s) {
      let h = Pu(f, a.segmentLocalized);
      if (h?.value && h.value !== a.segment) {
        let T = f.id;
        (C(o[T], "localizedSegments should include all locales"), (o[T][c] = h.value));
      }
    }
  }
  return (u && a.webPageId && n.set(a.webPageId, t), m);
}
var kh = (e) => !(!!e.dataIdentifier || Iu.has(e.segment) || Ii(e));
function Ou(e, t) {
  let o = Au(e).getRouteSegmentIdForWebPageId(t);
  return e.getNode(o);
}
function Wu(e, t) {
  let n = Dh(t);
  return n ? e.getNodeWithTrait(n, Un) : null;
}
function Dh(e) {
  if (!e) return null;
  let t = ve(e);
  return !Rt(t) || !Pe(t) || t.type !== "collection" ? null : t.localIdName;
}
var To = B(oe(), 1);
var Wt = B(re(), 1);
function Lh(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function zt(e) {
  return !e._constraints || Lh(e) ? !1 : e._constraints.enabled;
}
function wh(e) {
  let { size: t } = e,
    { width: n, height: o } = e;
  return (
    I(t) && (n === void 0 && (n = t), o === void 0 && (o = t)),
    I(n) && I(o) ? { width: n, height: o } : null
  );
}
function Mh(e) {
  let t = wh(e);
  if (t === null) return null;
  let { left: n, top: o } = e;
  return I(n) && I(o) ? { x: n, y: o, ...t } : null;
}
function Bh(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let o = t === 1 || t === 2;
  if (!zt(e) || o) return Mh(e);
  let r = Eh(e),
    i = Ah(t),
    a = i ? { sizing: i, positioning: i, viewport: null } : null;
  return Kr.toRect(r, a, null, n, null);
}
function Eh(e) {
  let { left: t, right: n, top: o, bottom: r, center: i, _constraints: a, size: s } = e,
    { width: l, height: u } = e;
  (l === void 0 && (l = s), u === void 0 && (u = s));
  let { aspectRatio: c, autoSize: m } = a,
    f = Ur.quickfix({
      left: I(t),
      right: I(n),
      top: I(o),
      bottom: I(r),
      widthType: nn(l),
      heightType: nn(u),
      aspectRatio: c || null,
      fixedSize: m === !0,
    }),
    h = null,
    T = null,
    V = 0,
    P = 0;
  if (f.widthType !== 0 && typeof l == "string") {
    let N = parseFloat(l);
    l.endsWith("fr") ? ((V = 3), (h = N)) : l === "auto" ? (V = 2) : ((V = 1), (h = N / 100));
  } else l !== void 0 && typeof l != "string" && (h = l);
  if (f.heightType !== 0 && typeof u == "string") {
    let N = parseFloat(u);
    u.endsWith("fr")
      ? ((P = 3), (T = N))
      : u === "auto"
        ? (P = 2)
        : ((P = 1), (T = parseFloat(u) / 100));
  } else u !== void 0 && typeof u != "string" && (T = u);
  let y = 0.5,
    b = 0.5;
  return (
    (i === !0 || i === "x") && ((f.left = !1), typeof t == "string" && (y = parseFloat(t) / 100)),
    (i === !0 || i === "y") && ((f.top = !1), typeof o == "string" && (b = parseFloat(o) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? o : null,
      bottom: f.bottom ? r : null,
      widthType: V,
      heightType: P,
      width: h,
      height: T,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: y,
      centerAnchorY: b,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var Ei = ((o) => (
    (o[(o.Unknown = 0)] = "Unknown"),
    (o[(o.Disabled = 1)] = "Disabled"),
    (o[(o.DisabledForCurrentLevel = 2)] = "DisabledForCurrentLevel"),
    o
  ))(Ei || {}),
  zu = To.default.createContext({ parentSize: 0 });
function Ah(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Hu() {
  return To.default.useContext(zu).parentSize;
}
function Gu(e) {
  return typeof e == "object";
}
var Fh = (e) => {
  let t = Hu(),
    { parentSize: n, children: o } = e,
    r = To.default.useMemo(() => ({ parentSize: n }), [Oh(n), Wh(n)]);
  return t === 1
    ? o
      ? (0, Wt.jsx)(Wt.Fragment, { children: o })
      : null
    : (0, Wt.jsx)(zu.Provider, { value: r, children: o });
};
function Oh(e) {
  return Gu(e) ? e.width : e;
}
function Wh(e) {
  return Gu(e) ? e.height : e;
}
function Co(e, t) {
  return (0, Wt.jsx)(Fh, { parentSize: t, children: e });
}
function ju(e) {
  let t = Hu();
  return Bh(e, t, !0);
}
function Ai({ width: e, height: t }) {
  return e === "auto" || e === "min-content" || t === "auto" || t === "min-content";
}
var Fi = {
  isImageObject: function (e) {
    return !e || typeof e == "string" ? !1 : typeof e == "object" && "src" in e;
  },
};
function zh(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: o, id: r } = t,
    i = n ?? r,
    a = o && i ? o[i] : void 0;
  return (a && typeof a == "string" && (e = { ...e, src: a }), e);
}
function _u(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Fi.isImageObject(t)) return;
  let o = null;
  if ((ee(n) ? (o = { alt: "", src: n }) : (o = ie.get(t, null)), !!Fi.isImageObject(o)))
    return zh(o, e);
}
var Oi = (e) => e instanceof ms;
function Hh(e, t) {
  if (e.size < t) return;
  let o = Math.round(Math.random());
  for (let r of e.keys()) (++o & 1) !== 1 && e.delete(r);
}
function Uu(e, t, n, o) {
  let r = t.get(n);
  if (r) return r;
  Hh(t, e);
  let i = o(n);
  return (t.set(n, i), i);
}
var Vo = {
  hueRotate: (e, t) => x.toHslString(x.hueRotate(x(e), t)),
  setAlpha: (e, t) => x.toRgbString(x.alpha(x(e), t)),
  getAlpha: (e) => {
    let t = cn(e);
    return t ? t.a : 1;
  },
  multiplyAlpha: (e, t) => x.toRgbString(x.multiplyAlpha(x(e), t)),
  toHexValue: (e) => x.toHex(x(e)).toUpperCase(),
  toHex: (e) => x.toHexString(x(e)).toUpperCase(),
  toRgb: (e) => x.toRgb(x(e)),
  toRgbString: (e) => x.toRgbString(x(e)),
  toHSV: (e) => x.toHsv(x(e)),
  toHSL: (e) => x.toHsl(x(e)),
  toHslString: (e) => x.toHslString(x(e)),
  toHsvString: (e) => x.toHsvString(x(e)),
  hsvToHSLString: (e) => x.toHslString(x(Et(e.h, e.s, e.v, e.a))),
  hsvToHexValue: (e) => x.toHex(x(Et(e.h, e.s, e.v, e.a))).toUpperCase(),
  hsvToHex: (e) => x.toHexString(x(Et(e.h, e.s, e.v, e.a))).toUpperCase(),
  hsvToRgbString: (e) => x.toRgbString(x(Et(e.h, e.s, e.v, e.a))),
  hsvToString: (e) => Et(e.h, e.s, e.v),
  rgbaToString: (e) => x.toRgbString(x(e)),
  rgbToHexValue: (e) => x.toHex(x(e)),
  rgbToHexString: (e) => x.toHexString(x(e)),
  hslToString: (e) => x.toHslString(x(e)),
  hslToRgbString: (e) => x.toRgbString(x(e)),
  toColorPickerSquare: (e) => x.toRgbString(x({ h: e, s: 1, l: 0.5, a: 1 })),
  isValid: (e) => x(e).isValid !== !1,
  equals: (e, t) =>
    x.isP3String(e) || x.isP3String(t)
      ? e === t
      : (typeof e == "string" && (e = x(e)), typeof t == "string" && (t = x(t)), x.equal(e, t)),
  toHexOrRgbaString: (e) => {
    let t = x(e);
    return t.a !== 1 ? x.toRgbString(t) : x.toHexString(t);
  },
  toFormatString: (e) => (x.isP3String(e) ? e : x.toRgbString(x(e))),
};
var Ku = (e) => {
  let t = 0,
    n,
    o;
  if (e.length === 0) return t;
  for (n = 0; n < e.length; n++) ((o = e.charCodeAt(n)), (t = (t << 5) - t + o), (t |= 0));
  return t;
};
var Gh = /var\(.+\)/u,
  jh = new Map();
function _h(e, t) {
  let n = [e, t];
  return Gh.test(e) ? e : Uu(1e3, jh, n, () => Vo.multiplyAlpha(e, t));
}
function dt(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((o) => ({ ...o, value: _h(o.value, t) }))
  );
}
function Ht(e, t) {
  let n = 0;
  return (
    dt(e, t).forEach((o) => {
      n ^= Ku(o.value) ^ o.position;
    }),
    n
  );
}
var Uh = ["stops"];
function Gt(e) {
  return e && Uh.every((t) => t in e);
}
var Kh = ["start", "end"];
function jt(e) {
  return e && Kh.every((t) => t in e);
}
var $h = ["angle", "alpha"],
  So = {
    isLinearGradient: (e) => q(e) && $h.every((t) => t in e) && (jt(e) || Gt(e)),
    hash: (e) => e.angle ^ Ht(e, e.alpha),
    toCSS: (e, t, n) => {
      let o = dt(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = Math.round(r),
        a = o.map((s) => `${n?.(s.value) ?? s.value} ${s.position * 100}%`);
      return `linear-gradient(${i}deg, ${a.join(", ")})`;
    },
  };
var qh = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"],
  Ro = {
    isRadialGradient: (e) => q(e) && qh.every((t) => t in e) && (jt(e) || Gt(e)),
    hash: (e) =>
      e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Ht(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: n, widthFactor: o, heightFactor: r, centerAnchorX: i, centerAnchorY: a } = e,
        s = dt(e, n),
        l = s.map((u, c) => {
          let m = s[c + 1],
            f = u.position === 1 && m?.position === 1 ? u.position - 1e-4 : u.position;
          return `${t?.(u.value) ?? u.value} ${f * 100}%`;
        });
      return `radial-gradient(${o * 100}% ${r * 100}% at ${i * 100}% ${a * 100}%, ${l.join(", ")})`;
    },
  };
var Xh = ["alpha", "angle", "centerAnchorX", "centerAnchorY"],
  Yh = {
    isConicGradient: (e) => q(e) && Xh.every((t) => t in e) && (jt(e) || Gt(e)),
    hash: (e) => e.centerAnchorX ^ e.centerAnchorY ^ e.angle ^ Ht(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: n, angle: o, centerAnchorX: r, centerAnchorY: i } = e,
        a = Math.round(o),
        l = dt(e, n)
          .map((u) => `${t?.(u.value) ?? u.value} ${u.position * 360}deg`)
          .join(", ");
      return `conic-gradient(from ${a}deg at ${r * 100}% ${i * 100}%, ${l})`;
    },
  };
var Jh = ["color", "x", "y", "blur"],
  mL = { is: (e) => e && Jh.every((t) => t in e) },
  Wi = ["x", "y", "color", "inset", "blur", "spread"],
  $u = {
    is: (e) => e && Wi.every((t) => t in e),
    toCSS: (e) =>
      `${e.inset ? "inset " : ""}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`,
  };
var qu = "0.000001px",
  zi = ` translateZ(${qu})`,
  Xu = as() || rs() || ss();
function Yu(e) {
  e.willChange = "transform";
  let t = _.current() === _.canvas;
  Xu && t && (e.translateZ = qu);
}
function Ju(e) {
  ((e.willChange = "transform"), Zu(e, !0));
}
function bL(e, t) {
  (t
    ? (e.style.willChange || "") !== "transform" && (e.style.willChange = "transform")
    : e.style.removeProperty("will-change"),
    Zu(e.style, t));
}
function Zu(e, t) {
  let n = _.current() === _.canvas;
  if (!Xu || !n) return;
  let o = (ee(e.transform) && e.transform) || "";
  t ? o.includes(zi) || (e.transform = o + zi) : (e.transform = o.replace(zi, ""));
}
var ed = B(oe(), 1);
var fe = (e) => e;
function Qu(e, t, n, o = !0) {
  if (!e) return;
  let r = fe(e.style),
    i = n || r[t],
    a = () => {
      Zh(i) && (r[t] = i);
    };
  ((r[t] = null), o ? Promise.resolve().then(a) : setTimeout(a, 0));
}
function Zh(e) {
  return ee(e) || Ae(e) || cs(e);
}
var No = (() => {
  class e extends ed.Component {
    static defaultProps = {};
    static applyWillChange(n, o, r) {
      n.willChangeTransform && (r ? Yu(o) : Ju(o));
    }
    layerElement = null;
    setLayerElement = (n) => {
      this.layerElement = n;
    };
    shouldComponentUpdate(n, o) {
      return n._needsMeasure || this.state !== o || !ce(this.props, n);
    }
    componentDidUpdate(n) {
      fe(this.props).clip &&
        fe(this.props).radius === 0 &&
        fe(n).radius !== 0 &&
        Qu(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return e;
})();
var td = B(oe(), 1);
function Hi() {
  let e = _.current();
  return e === _.canvas || e === _.export;
}
function LL() {
  let [e] = (0, td.useState)(() => Hi());
  return e;
}
var nd = B(oe(), 1),
  od = nd.default.createContext(void 0);
var Gi;
function rd() {
  return Gi !== void 0;
}
function BL(e) {
  Gi = e;
}
function id(e, t) {
  Gi?.(e, t);
}
var hn = B(oe(), 1);
var ld = B(re(), 1),
  ex = "style[data-framer-css-ssr-minified]",
  tx = (() => {
    if (!Ye()) return new Set();
    let e = document.querySelector(ex)?.getAttribute("data-framer-components");
    return e ? new Set(e.split(" ")) : new Set();
  })(),
  HL = "data-framer-css-ssr";
function ad() {
  return fs() ? _.preview : _.current();
}
var sd = (e, t, n) => {
    if (rd() && n !== void 0 && !Je(t)) {
      let o = Array.isArray(t)
        ? t
        : t.split(`
`);
      id(n, o.filter(Boolean));
    }
    return hn.default.forwardRef((o, r) => {
      let { sheet: i, cache: a } = hn.default.useContext(od) ?? {},
        s = n;
      if (!Ye()) {
        Je(t) && (t = t(ad(), o));
        let l = Array.isArray(t)
          ? t.join(`
`)
          : t;
        nx.add(l, s);
      }
      return (
        (0, hn.useInsertionEffect)(() => {
          if (s && tx.has(s)) return;
          (Je(t)
            ? t(ad(), o)
            : Array.isArray(t)
              ? t
              : t.split(`
`)
          ).forEach((u) => u && Fn(u, i, a));
        }, []),
        (0, ld.jsx)(e, { ...o, ref: r })
      );
    });
  },
  ji = class {
    styles = new Set();
    componentIds = new Set();
    add(t, n) {
      (this.styles.add(t), n && this.componentIds.add(n));
    }
    getStyles() {
      return this.styles;
    }
    getComponentIds() {
      return this.componentIds;
    }
    clear() {
      (this.styles.clear(), this.componentIds.clear());
    }
  },
  nx = new ji();
var ox, Po;
function rx() {
  return (ox ??= import("https://app.framerstatic.com/libraryCSSRules-S3CHEWFD.mjs").then((e) => {
    if (((Po = e.getCombinedCSSRules), Ye())) for (let t of Po()) Fn(t, void 0);
    return e;
  }));
}
function ix() {
  return Po ? Po() : (Ye() && rx(), []);
}
function ud(e) {
  return sd(e, ix, "framer-lib-combinedCSSRules");
}
function dd(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
        ? `translateX(-50%) ${n}`
        : e === "y"
          ? `translateY(-50%) ${n}`
          : n || "none";
}
var ue = B(oe(), 1);
var Ut = B(re(), 1),
  _t = ue.default.createContext({
    getLayoutId: (e) => null,
    persistLayoutIdCache: () => {},
    top: !1,
    enabled: !0,
  });
function qL({ children: e }) {
  if ((0, ue.useContext)(_t).top) return (0, Ut.jsx)(Ut.Fragment, { children: e });
  let n = (0, ue.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    o = (0, ue.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    r = (0, ue.useRef)(new Set()).current,
    i = (0, ue.useCallback)(({ id: l, name: u, duplicatedFrom: c }) => {
      if (!l) return null;
      let m = u ? "byName" : "byId",
        f = n.current[m][l];
      if (f) return f;
      let h = u || l;
      if (!c && !r.has(h) && (!n.current.byLayoutId[h] || n.current.byLayoutId[h] === h))
        return (
          n.current.count[m][h] === void 0 &&
            ((n.current.count[m][h] = 0), (n.current.byLayoutId[h] = h), (o.current[m][l] = h)),
          r.add(h),
          h
        );
      let T;
      if (c?.length)
        for (let Z = c.length - 1; Z >= 0; Z--) {
          let de = c[Z];
          Vt(!!de, "duplicatedId must be defined");
          let ae = n.current[m][de],
            qe = n.current.byLastId[de];
          if (qe && !T) {
            let zr = n.current.byLayoutId[qe],
              Hr = !zr || zr === u;
            qe && !r.has(qe) && (!u || Hr) && (T = [qe, de]);
          }
          let nt = ae ? n.current.byLayoutId[ae] : void 0,
            Xa = !nt || nt === u;
          if (ae && !r.has(ae) && (!u || Xa))
            return ((o.current[m][l] = ae), (o.current.byLastId[de] = ae), r.add(ae), ae);
        }
      let V = n.current.byLastId[l];
      if (V && !r.has(V)) return (r.add(V), (o.current.byId[l] = V), V);
      if (T) {
        let [Z, de] = T;
        return ((o.current[m][l] = Z), (o.current.byLastId[de] = Z), r.add(Z), Z);
      }
      let P = n.current.byPossibleId[l];
      if (P && !r.has(P)) return (r.add(P), (o.current.byId[l] = P), P);
      let y = c?.[0],
        b = u || y || l,
        N = (n.current.count[m][b] ?? -1) + 1,
        { layoutId: G, value: $ } = ax(b, N, r);
      if (((n.current.count[m][b] = $), (o.current[m][l] = G), c?.length && !u)) {
        let Z = c[c.length - 1];
        if ((Z && (o.current.byLastId[Z] = G), c.length > 1))
          for (let de = 0; de < c.length - 1; de++) {
            let ae = c[de];
            ae !== void 0 && (o.current.byPossibleId[ae] || (o.current.byPossibleId[ae] = G));
          }
      }
      return ((o.current.byLayoutId[G] = h), r.add(G), G);
    }, []),
    a = (0, ue.useCallback)(() => {
      ((n.current = {
        byId: { ...n.current.byId, ...o.current.byId },
        byLastId: { ...n.current.byLastId, ...o.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...o.current.byPossibleId },
        byName: { ...n.current.byName, ...o.current.byName },
        byLastName: { ...n.current.byLastName, ...o.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...o.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (o.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        r.clear());
    }, []),
    s = (0, ue.useRef)({ getLayoutId: i, persistLayoutIdCache: a, top: !0, enabled: !0 }).current;
  return (0, Ut.jsx)(_t.Provider, { value: s, children: e });
}
function ax(e, t, n) {
  let o = t,
    r = o ? `${e}-${o}` : e;
  for (; n.has(r);) (o++, (r = `${e}-${o}`));
  return { layoutId: r, value: o };
}
function XL({ enabled: e = !0, ...t }) {
  let n = (0, ue.useContext)(_t),
    o = (0, ue.useMemo)(() => ({ ...n, enabled: e }), [e]);
  return (0, Ut.jsx)(_t.Provider, { ...t, value: o });
}
var cd = B(oe(), 1),
  xn = cd.default.createContext(!1);
var gn = B(oe(), 1);
var _i = B(oe(), 1);
function Ui() {
  let [e, t] = _i.default.useState(0);
  return _i.default.useCallback(() => t((n) => n + 1), []);
}
var vo = B(oe(), 1),
  Io = typeof document < "u" ? vo.useLayoutEffect : vo.useEffect;
var $i = B(re(), 1),
  pd = 200,
  Ki = class {
    sharedResizeObserver;
    callbacks = new WeakMap();
    constructor() {
      this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
    }
    updateResizedElements(t) {
      for (let n of t) {
        let o = this.callbacks.get(n.target);
        o && o(n.contentRect);
      }
    }
    observeElementWithCallback(t, n) {
      (this.sharedResizeObserver.observe(t), this.callbacks.set(t, n));
    }
    unobserve(t) {
      (this.sharedResizeObserver.unobserve(t), this.callbacks.delete(t));
    }
  },
  ko = Ye() ? new Ki() : void 0;
function ow(e) {
  let t = Ui();
  (0, gn.useEffect)(() => {
    let n = e?.current;
    if (n)
      return (
        ko?.observeElementWithCallback(e.current, t),
        () => {
          ko?.unobserve(n);
        }
      );
  }, [e, t]);
}
function sx(e) {
  let t = Ui(),
    n = gn.default.useRef(null);
  function o(r) {
    (r.width === 0 && r.height === 0) ||
      ((!n.current || r.height !== n.current.height || r.width !== n.current.width) &&
        ((n.current = { width: r.width, height: r.height }), t()));
  }
  return (
    Io(() => {
      if (!e.current) return;
      let { offsetWidth: r, offsetHeight: i } = e.current;
      return (
        o({ width: r, height: i }),
        ko.observeElementWithCallback(e.current, o),
        () => {
          e.current && ko.unobserve(e.current);
        }
      );
    }, []),
    n.current
  );
}
var qi = "data-framer-size-compatibility-wrapper",
  rw = (e) => (t) => {
    let n = gn.default.useRef(null),
      o = sx(n),
      r = { [qi]: !0 },
      i = !!o,
      a = t.width ?? pd,
      s = t.height ?? pd;
    return (0, $i.jsx)("div", {
      style: { width: "100%", height: "100%", pointerEvents: "none" },
      ref: n,
      ...r,
      children: i && (0, $i.jsx)(e, { ...t, width: o?.width ?? a, height: o?.height ?? s }),
    });
  };
function fd(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(qi)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(md)
    .map(yd);
}
function md(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function yd(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents")
    return e;
  let t = [...e.children].find(md);
  return t ? yd(t) : e;
}
var hd = B(oe(), 1);
function bn(e) {
  return e.replace(/^id_/u, "").replace(/\\/gu, "");
}
function xd(e, t, n = () => [], o = {}) {
  let { id: r, visible: i, _needsMeasure: a } = e,
    { skipHook: s = !1 } = o,
    l = (0, hd.useContext)(xn),
    u = _.current() === _.canvas;
  Io(() => {
    !u ||
      l ||
      s ||
      (t.current && r && i && a && se.queueMeasureRequest(bn(r), t.current, n(t.current)));
  });
}
function yw(e) {
  let t = e.closest("[data-framer-component-container]");
  t && se.queueMeasureRequest(bn(t.id), t, fd(t));
}
var Ie = B(oe(), 1);
function lx(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var ux =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
  gd = lx(
    (e) =>
      ux.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  );
var Ee = B(oe(), 1);
var ct = { borderRadius: "inherit", cornerShape: "inherit" };
var bd = [1, 2, 2.2],
  dx = [512, 1024, 2048, 4096];
function Td(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    o = t,
    r = 0;
  t > e && ((n = t), (o = e), (r = 1));
  let i = n / o,
    a = [];
  for (let s of dx) {
    if (n <= s) return a;
    a.push({ maxSideSize: s, width: r === 0 ? s : Math.trunc(s / i) });
  }
  return a;
}
function Xi(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set("scale-down-to", `${t}`) : n.searchParams.delete("scale-down-to"),
      n.toString()
    );
  } catch {
    return e;
  }
}
var cx = 512;
function px(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let o = [];
  for (let r of n) {
    if (r.width < cx) continue;
    let i = Xi(e, r.maxSideSize);
    o.push(`${i} ${r.width}w`);
  }
  return (o.push(`${Xi(e, null)} ${t.pixelWidth}w`), o.join(", ") || void 0);
}
function fx(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let o = [],
    r = Math.max(t.pixelWidth, t.pixelHeight),
    i = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let a of bd) {
    let s = Math.round(r * a * i),
      l = Xi(e, s);
    o.push({ src: l, scale: a });
  }
  return o;
}
function Cd(e, t, n) {
  if (!["auto", "lossless"].includes(t.preferredSize ?? "")) return { src: n, srcSet: void 0 };
  if (e) {
    let o = fx(n, t, e);
    if (!o?.length) return { src: n, srcSet: void 0 };
    let [r, ...i] = o;
    return { src: r?.src, srcSet: i.map(({ src: a, scale: s }) => `${a} ${s}x`).join(", ") };
  } else {
    let o = Td(t.pixelWidth, t.pixelHeight);
    return { src: n, srcSet: px(n, t, o) };
  }
}
var Ge = B(re(), 1),
  Yi = { position: "absolute", ...ct, top: 0, right: 0, bottom: 0, left: 0 };
function mx() {
  return {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "64px auto",
    backgroundImage: ps(se.imagePlaceholderSvg),
  };
}
function yx(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function Vd(e, t) {
  let n = e ?? "center",
    o = t ?? "center";
  return n === "center" && o === "center" ? "center" : n + " " + o;
}
function Ji(e) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    ...ct,
    objectPosition: Vd(e.positionX, e.positionY),
    objectFit: yx(e.fit),
  };
}
function hx(e) {
  let t = Ee.default.useRef(e ? "auto" : "async"),
    n = (0, Ee.useCallback)((i) => {
      ((t.current = "auto"), (i.decoding = "auto"));
    }, []),
    o = (0, Ee.useCallback)(
      (i) => {
        n(i.currentTarget);
      },
      [n]
    ),
    r = (0, Ee.useCallback)(
      (i) => {
        i?.complete && n(i);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: o, onImageMount: r };
}
function xx({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: o,
  draggable: r,
  avoidAsyncDecoding: i,
}) {
  let a = se.useImageSource(e, t, n),
    s = Ji(e),
    { decoding: l, onImageLoad: u, onImageMount: c } = hx(i),
    { srcSet: m, src: f } =
      "srcSet" in e ? { src: a, srcSet: e.srcSet } : Cd(e.nodeFixedSize, e, a);
  return (0, Ge.jsx)("img", {
    suppressHydrationWarning: !0,
    ref: c,
    decoding: l,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: m ? e.sizes : void 0,
    srcSet: m,
    src: f,
    onLoad: u,
    alt: o ?? e.alt ?? "",
    style: s,
    draggable: r,
  });
}
function gx({ image: e, containerSize: t, nodeId: n }) {
  let o = Ee.default.useRef(null),
    r = se.useImageElement(e, t, n),
    i = Ji(e);
  return (
    Ee.default.useLayoutEffect(() => {
      let a = o.current;
      if (a !== null)
        return (
          a.appendChild(r),
          () => {
            a.removeChild(r);
          }
        );
    }, [r]),
    Object.assign(r.style, i),
    (0, Ge.jsx)("div", { ref: o, style: { display: "contents", ...ct } })
  );
}
function bx({ nodeId: e, image: t, containerSize: n }) {
  let o = Ee.default.useRef(null),
    r = se.useImageSource(t, n, e);
  return (
    Ee.default.useLayoutEffect(() => {
      let i = o.current;
      if (i === null) return;
      let a = Ji(t);
      se.renderOptimizedCanvasImage(i, r, a, e);
    }, [e, t, r]),
    (0, Ge.jsx)("div", { ref: o, style: { display: "contents", ...ct } })
  );
}
function Sd({ layoutId: e, image: t, ...n }) {
  e && (e += "-background");
  let o = null,
    r = !!e,
    i = null;
  if (ee(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let s = Ae(t.backgroundSize) ? t.backgroundSize : 1,
        l = { width: Math.round(s * t.pixelWidth), height: Math.round(s * t.pixelHeight) },
        u = ks(s * (t.pixelWidth / 2)),
        c = se.useImageSource(t, l);
      ((o = {
        ...Yi,
        backgroundImage: `url(${c})`,
        backgroundRepeat: "repeat",
        backgroundPosition: Vd(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${u}px auto`,
      }),
        (i = null),
        (r = !0));
    } else
      _.current() !== _.canvas
        ? (i = (0, Ge.jsx)(xx, { image: t, avoidAsyncDecoding: _.current() === _.export, ...n }))
        : se.canRenderOptimizedCanvasImage(se.useImageSource(t))
          ? (i = (0, Ge.jsx)(bx, { image: t, ...n }))
          : (i = (0, Ge.jsx)(gx, { image: t, ...n }));
  let a = i ? Yi : (o ?? { ...Yi, ...mx() });
  return r
    ? (0, Ge.jsx)(Ze.div, {
        layoutId: e,
        style: a,
        "data-framer-background-image-wrapper": !0,
        children: i,
      })
    : (0, Ge.jsx)("div", { style: a, "data-framer-background-image-wrapper": !0, children: i });
}
var Zi = B(re(), 1);
function Tx(e, t, n = !0) {
  let { borderWidth: o, borderStyle: r, borderColor: i } = e;
  if (!o) return;
  let a, s, l, u;
  if (
    (typeof o == "number"
      ? (a = s = l = u = o)
      : ((a = o.top || 0), (s = o.bottom || 0), (l = o.left || 0), (u = o.right || 0)),
    !(a === 0 && s === 0 && l === 0 && u === 0))
  ) {
    if (n && a === s && a === l && a === u) {
      t.border = `${a}px ${r} ${i}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${a}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${l}px`),
      (t.borderRightWidth = `${u}px`));
  }
}
function Rd(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...ct,
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), (0, Zi.jsx)(Ze.div, { style: n }))
    : (Tx(e, n, !1), (0, Zi.jsx)(Ze.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Nd(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Pd(e) {
  return e && e !== "search" && e !== "slot" && e !== "template" ? Ze[e] : Ze.div;
}
var Cx = os();
function Vx(e, t, n) {
  ((e["data-framer-layout-hint-center-x"] = t === !0 || t === "x" ? !0 : void 0),
    (e["data-framer-layout-hint-center-y"] = t === !0 || t === "y" ? !0 : void 0),
    (e["data-framer-layout-hint-x"] = n?.x),
    (e["data-framer-layout-hint-y"] = n?.y));
}
function vd(e, t) {
  let n = {};
  return (
    _.current() !== _.canvas ||
      Vx(n, Cx ? e : void 0, {
        x: typeof t?.x == "number" ? t.x : void 0,
        y: typeof t?.y == "number" ? t.y : void 0,
      }),
    n
  );
}
var Do = B(oe(), 1);
function Lo(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return n
    ? ((t = Do.default.Children.map(t, (o) =>
        Do.default.isValidElement(o) ? Do.default.cloneElement(o, { _forwardedOverrides: n }) : o
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
var wo = B(oe(), 1);
function Mo(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: o, layoutIdKey: r, duplicatedFrom: i, __fromCodeComponentNode: a = !1, drag: s } = e,
    { getLayoutId: l, enabled: u } = (0, wo.useContext)(_t);
  return (0, wo.useMemo)(() => {
    if (!u) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !r || a)) return;
    let m = c || l({ id: r, name: o, duplicatedFrom: i });
    if (m) return n ? `${m}-${n}` : m;
  }, [u]);
}
function Id({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || Oi(t)
      ? (n.backgroundColor = t)
      : x.isColorObject(e) && (n.backgroundColor = e.initialValue || x.toRgbString(e))
    : e &&
      ((e = ie.get(e, null)),
      typeof e == "string" || Oi(e)
        ? (n.background = e)
        : So.isLinearGradient(e)
          ? (n.background = So.toCSS(e))
          : Ro.isRadialGradient(e)
            ? (n.background = Ro.toCSS(e))
            : x.isColorObject(e) && (n.backgroundColor = e.initialValue || x.toRgbString(e)));
}
function F(e, t, n, o) {
  if ((o === void 0 && (o = t), e[t] !== void 0)) {
    n[o] = e[t];
    return;
  }
}
function kd(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Dd(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Ld(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = "preserve-3d")
    : e.preserve3d === !1 && (t.transformStyle = "flat"),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = "visible")
      : e.backfaceVisible === !1 && (t.backfaceVisibility = "hidden"),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = "50%"), (t.top = "50%"))
        : e.center === "x"
          ? (t.left = "50%")
          : e.center === "y" && (t.top = "50%")));
  let { cornerShape: n } = e;
  return (
    ys(n)
      ? (t.cornerShape = hs(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    F(e, "size", t),
    F(e, "width", t),
    F(e, "height", t),
    F(e, "minWidth", t),
    F(e, "minHeight", t),
    F(e, "top", t),
    F(e, "right", t),
    F(e, "bottom", t),
    F(e, "left", t),
    F(e, "position", t),
    F(e, "overflow", t),
    F(e, "opacity", t),
    e._border?.borderWidth || F(e, "border", t),
    F(e, "borderRadius", t),
    F(e, "radius", t, "borderRadius"),
    F(e, "color", t),
    F(e, "shadow", t, "boxShadow"),
    F(e, "x", t),
    F(e, "y", t),
    F(e, "z", t),
    F(e, "rotate", t),
    F(e, "rotateX", t),
    F(e, "rotateY", t),
    F(e, "rotateZ", t),
    F(e, "scale", t),
    F(e, "scaleX", t),
    F(e, "scaleY", t),
    F(e, "skew", t),
    F(e, "skewX", t),
    F(e, "skewY", t),
    F(e, "originX", t),
    F(e, "originY", t),
    F(e, "originZ", t),
    Id(e, t),
    t
  );
}
var je = B(re(), 1);
function Sx(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof fe(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var wd = [
    "onClick",
    "onDoubleClick",
    "onMouse",
    "onMouseDown",
    "onMouseUp",
    "onTapDown",
    "onTap",
    "onTapUp",
    "onPointer",
    "onPointerDown",
    "onPointerUp",
    "onTouch",
    "onTouchDown",
    "onTouchUp",
  ],
  Rx = new Set([...wd, ...wd.map((e) => `${e}Capture`)]);
function Nx(e) {
  if (e.drag) return "grab";
  for (let t in e) if (Rx.has(t)) return "pointer";
}
var Qi = "overflow";
function Px(e) {
  return Md(e) ? !0 : e.style ? !!Md(e.style) : !1;
}
function Md(e) {
  return Qi in e && (e[Qi] === "scroll" || e[Qi] === "auto");
}
function Bo(e) {
  let {
      left: t,
      top: n,
      bottom: o,
      right: r,
      width: i,
      height: a,
      center: s,
      _constraints: l,
      size: u,
      widthType: c,
      heightType: m,
      positionFixed: f,
      positionAbsolute: h,
    } = e,
    T = Ce(e.minWidth),
    V = Ce(e.minHeight),
    P = Ce(e.maxWidth),
    y = Ce(e.maxHeight);
  return {
    top: Ce(n),
    left: Ce(t),
    bottom: Ce(o),
    right: Ce(r),
    width: Ce(i),
    height: Ce(a),
    size: Ce(u),
    center: s,
    _constraints: l,
    widthType: c,
    heightType: m,
    positionFixed: f,
    positionAbsolute: h,
    minWidth: T,
    minHeight: V,
    maxWidth: P,
    maxHeight: y,
  };
}
var Bd = { x: 0, y: 0, width: 200, height: 200 };
function vx(e) {
  let t = (0, Ie.useContext)(xn),
    { style: n, _initialStyle: o, __fromCanvasComponent: r, size: i } = e,
    a = Bo(e),
    s = ju(a),
    l = {
      display: "block",
      flex: n?.flex ?? "0 0 auto",
      userSelect: _.current() !== _.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let u = !Sx(e) && !e.__fromCanvasComponent && !Px(e),
    c = e.style ? !("pointerEvents" in e.style) : !0;
  u && c && (l.pointerEvents = "none");
  let f = Ie.default.Children.count(e.children) > 0 &&
      Ie.default.Children.toArray(e.children).every(
        (y) => typeof y == "string" || typeof y == "number"
      ) && { display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" },
    h = Ld(e);
  (i === void 0 && !r && (kd(h) || (l.width = Bd.width), Dd(h) || (l.height = Bd.height)),
    a.minWidth !== void 0 && (l.minWidth = a.minWidth),
    a.minHeight !== void 0 && (l.minHeight = a.minHeight));
  let T = {};
  (zt(a) &&
    s &&
    !Ai(e) &&
    (T = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, o, h, T, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    No.applyWillChange(e, l, !0));
  let V = l;
  l.transform || (V = { x: 0, y: 0, ...l });
  let P = Hi();
  return (
    e.positionSticky
      ? (!P || se.isOnPageCanvas || t) &&
        ((V.position = "sticky"),
        (V.willChange = "transform"),
        (V.top = e.positionStickyTop),
        (V.right = e.positionStickyRight),
        (V.bottom = e.positionStickyBottom),
        (V.left = e.positionStickyLeft))
      : P &&
        (e.positionFixed
          ? (V.position = se.isOnPageCanvas ? "fixed" : "absolute")
          : e.positionAbsolute && (V.position = "absolute")),
    "rotate" in V && V.rotate === void 0 && delete V.rotate,
    [V, s]
  );
}
var Ix = new Set([
  "width",
  "height",
  "opacity",
  "overflow",
  "radius",
  "background",
  "color",
  "x",
  "y",
  "z",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "scale",
  "scaleX",
  "scaleY",
  "skew",
  "skewX",
  "skewY",
  "originX",
  "originY",
  "originZ",
]);
function kx(e) {
  let t = {};
  for (let n in e)
    (xs(n) || gd(n)) && !Ix.has(n)
      ? (t[n] = fe(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof fe(e)[n] != "boolean" && !e.transition && (t.transition = fe(e)[n]));
  return t;
}
function Dx(e) {
  return "data-framer-name" in e;
}
var Lx = (0, Ie.forwardRef)(function (t, n) {
    let { name: o, center: r, border: i, _border: a, __portal: s } = t,
      { props: l, children: u } = Lo(t),
      c = kx(l),
      m = Mo(t),
      f = Nx(t),
      h = (0, Ie.useRef)(null),
      T = n ?? h,
      V = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": f,
        "data-framer-highlight": f === "pointer" ? !0 : void 0,
        "data-layoutid": m,
        "data-framer-offset-parent-id": fe(t)["data-framer-offset-parent-id"],
      };
    !Dx(t) && o && (fe(V)["data-framer-name"] = o);
    let [P, y] = vx(l),
      b = Bo(l),
      N = Ai(b),
      G = r && !(y && !N && zt(b)) ? r : void 0;
    (G
      ? c.transformTemplate || (c.transformTemplate = dd(r))
      : c.transformTemplate || (c.transformTemplate = void 0),
      Object.assign(V, vd(G, l.style)),
      xd(t, T));
    let $ = _u(t),
      Z = (0, Ie.useContext)(xn),
      de = Mx(l, b, y, Z),
      ae = Co(
        (0, je.jsxs)(je.Fragment, {
          children: [
            $
              ? (0, je.jsx)(Sd, {
                  alt: t.alt ?? "",
                  image: $,
                  containerSize: y ?? void 0,
                  nodeId: t.id && bn(t.id),
                  layoutId: m,
                })
              : null,
            u,
            (0, je.jsx)(Rd, { ...a, border: i, layoutId: m }),
          ],
        }),
        de
      ),
      qe = Pd(t.as),
      nt = Nd($);
    return (
      t.fitImageDimension &&
        nt &&
        ((P[t.fitImageDimension] = "auto"), (P.aspectRatio = nt.width / nt.height)),
      (0, je.jsxs)(qe, { ...V, ...c, layoutId: m, style: P, ref: T, children: [ae, s] })
    );
  }),
  wx = (0, Ie.forwardRef)(function (t, n) {
    let { visible: o = !0 } = t;
    return o ? (0, je.jsx)(Lx, { ...t, ref: n }) : null;
  }),
  Ed = ud(wx);
function Mx(e, t, n, o) {
  if (o) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: r } = e,
    { widthType: i = 0, heightType: a = 0, width: s, height: l } = t;
  return n && !r
    ? n
    : i === 0 && a === 0 && typeof s == "number" && typeof l == "number"
      ? { width: s, height: l }
      : r || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
var Bx = ["actionIdentifier", "identifier", "controls"];
function Eo(e) {
  return g(e) && Bx.every((t) => t in e);
}
function kM(e) {
  return g(e) && "gamepadId" in e;
}
function DM(e, t) {
  if (!t.has(e.identifier)) return (t.add(e.identifier), e);
  let n = Ns();
  return (t.add(n), { ...e, identifier: n });
}
var Ex = ["start", "center", "end"];
function EM(e) {
  return p(e) ? Ex.includes(e) : !1;
}
var Ax = ["fixed", "minmax"];
function AM(e) {
  return p(e) ? Ax.includes(e) : !1;
}
var Fx = ["fixed", "auto", "fit"];
function FM(e) {
  return p(e) ? Fx.includes(e) : !1;
}
var Ox = "columnMasonry";
var Wx = ["stack", "grid"],
  OM = {
    layout: void 0,
    gap: void 0,
    stackAlignment: void 0,
    stackDirection: void 0,
    stackDistribution: void 0,
    stackWrapEnabled: void 0,
    gridColumnCount: void 0,
    gridRowCount: void 0,
    gridAlignment: void 0,
    gridColumnWidthType: void 0,
    gridColumnWidth: void 0,
    gridColumnMinWidth: void 0,
    gridRowHeightType: void 0,
    gridRowHeight: void 0,
    gridType: void 0,
  },
  Ad = "horizontal",
  Fd = "center",
  Od = "center",
  Wd = "layout";
function pt(e) {
  return Wd in e;
}
function WM(e) {
  return p(e) ? Wx.includes(e) : !1;
}
var zx = ["start", "end", "center"];
function Hx(e) {
  return v(e) ? !1 : E(e) ? !0 : ea(e) && zx.includes(e);
}
function zM(e) {
  return !pt(e) || e.layout !== "stack" || !e.stackDistribution ? !1 : Hx(e.stackDistribution);
}
function zd(e) {
  return pt(e) && !v(e.layout);
}
function HM(e) {
  return zd(e) && e.layout === "stack";
}
function Gx(e) {
  return zd(e) && e.layout === "grid";
}
function GM(e) {
  return Gx(e) && e.gridType === Ox;
}
function jM(e) {
  return Wd in e;
}
function jx(e) {
  if (Hd(e)) return e;
  if (p(e))
    switch (e) {
      case "row":
        return "horizontal";
      case "column":
        return "vertical";
      default:
        return;
    }
}
var Ao = ["horizontal", "vertical"];
function Hd(e) {
  return p(e) && Ao.includes(e);
}
function _M(e) {
  if (!Hd(e)) return e;
  switch (e) {
    case "horizontal":
      return "row";
    case "vertical":
      return "column";
    default:
      W(e);
  }
}
var _x = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];
function Ux(e) {
  return p(e) && _x.includes(e);
}
var Fo = ["start", "center", "end", "space-between", "space-around", "space-evenly"];
function ea(e) {
  return p(e) && Fo.includes(e);
}
function Oo(e) {
  if (!ea(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function Kx(e) {
  if (ea(e)) return e;
  if (Ux(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
var $x = ["flex-start", "flex-end", "center"];
function Gd(e) {
  return p(e) && $x.includes(e);
}
var Wo = ["start", "center", "end"];
function jd(e) {
  return p(e) ? Wo.includes(e) : !1;
}
function qx(e) {
  if (jd(e)) return e;
  if (Gd(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
function _d(e) {
  if (Gd(e) || !jd(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function UM(e, t) {
  switch (e) {
    case "stackDirection":
      return jx(t);
    case "stackDistribution":
      return Kx(t);
    case "stackAlignment":
      return qx(t);
    default:
      return t;
  }
}
function KM(e) {
  return !e || !pt(e) ? null : (e.layout ?? null);
}
var Xx = ["sticky", "fixed", "absolute"],
  Yx = new Set(Xx);
function XM(e) {
  return p(e) && Yx.has(e);
}
var YM = {
    position: void 0,
    positionStickyTop: void 0,
    positionStickyRight: void 0,
    positionStickyBottom: void 0,
    positionStickyLeft: void 0,
  },
  Jx = "position";
function Tn(e) {
  return !e || e.__unsafeIsSlotPropertyChildNode() ? !1 : Jx in e;
}
var tB = {
    carouselEffectEnabled: void 0,
    carouselEffectLoop: void 0,
    carouselEffectAutoPlay: void 0,
    carouselEffectInterval: void 0,
    carouselEffectSnap: void 0,
    carouselEffectTransition: void 0,
  },
  nB = {
    carouselEffectEnabled: !0,
    carouselEffectLoop: !0,
    carouselEffectAutoPlay: !1,
    carouselEffectInterval: 1.5,
    carouselEffectSnap: !0,
    carouselEffectTransition: void 0,
  },
  oB = { ...rt, stiffness: 200, damping: 40 },
  Zx = "carouselEffectEnabled";
function Qx(e) {
  return Zx in e;
}
function ta(e) {
  return eg(e) && e.carouselEffectEnabled === !0;
}
function na(e) {
  return Tn(e) && e.position !== void 0 && e.cache.carouselAncestorId === e.parentid;
}
function eg(e) {
  return !(
    !Qx(e) ||
    !pt(e) ||
    e.layout !== "stack" ||
    tg(e) ||
    e.stackWrapEnabled ||
    ("tickerEffectEnabled" in e && e.tickerEffectEnabled === !0)
  );
}
function tg(e) {
  return !!e.cache.carouselAncestorId;
}
function rB(e) {
  return !!(e.cache.carouselAncestorId && e.parentid === e.cache.carouselAncestorId && !na(e));
}
var oa = ["default", "reverse"],
  lB = {
    tickerEffectEnabled: void 0,
    tickerEffectVelocity: void 0,
    tickerEffectHoverModifier: void 0,
    tickerEffectDirectionModifier: void 0,
    tickerEffectDraggable: void 0,
  },
  uB = {
    tickerEffectEnabled: !0,
    tickerEffectVelocity: 100,
    tickerEffectHoverModifier: 100,
    tickerEffectDirectionModifier: "default",
    tickerEffectDraggable: !1,
  },
  ng = "tickerEffectEnabled";
function og(e) {
  return ng in e;
}
function dB(e) {
  return rg(e) && e.tickerEffectEnabled === !0;
}
function rg(e) {
  return !(
    !og(e) ||
    !pt(e) ||
    e.layout !== "stack" ||
    ig(e) ||
    e.stackWrapEnabled ||
    ("carouselEffectEnabled" in e && e.carouselEffectEnabled === !0)
  );
}
function ig(e) {
  return !!e.cache.tickerAncestorId;
}
function cB(e) {
  return !!(e.cache.tickerAncestorId && e.parentid === e.cache.tickerAncestorId);
}
function pB(e) {
  return e === "default" || e === "reverse";
}
function Ud(e) {
  switch (e) {
    case "default":
      return "Default";
    case "reverse":
      return "Reverse";
  }
}
var ag = "usesDOMRect";
function Kd(e) {
  return ag in e;
}
var sg = ["start", "center", "end"],
  zo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  ra = [...zo, "all"];
function $d(e) {
  return S(e) ? `Span ${e}` : "Span all";
}
var qd = zo.map($d),
  Xd = ra.map($d);
function hB(e) {
  return e === "all" ? !0 : S(e) && e > 0;
}
function xB(e) {
  return S(e) && e > 0;
}
function gB(e) {
  return p(e) ? sg.includes(e) : !1;
}
var bB = {
    gridItemHorizontalAlignment: void 0,
    gridItemVerticalAlignment: void 0,
    gridItemColumnSpan: void 0,
    gridItemRowSpan: void 0,
  },
  lg = "gridItemHorizontalAlignment";
function TB(e) {
  return lg in e;
}
var SB = { width: 100, height: 100 },
  RB = { width: 1, height: 1 },
  ug = "width";
function Yd(e) {
  return qn(e) ? !1 : ug in e;
}
var Zd = [
    "%",
    "px",
    "cap",
    "ch",
    "em",
    "ex",
    "ic",
    "lh",
    "rem",
    "rlh",
    "cm",
    "mm",
    "Q",
    "in",
    "pc",
    "pt",
    "ms",
    "s",
    "Hz",
    "kHz",
    "dpi",
    "dpcm",
    "dppx",
    "x",
    "deg",
    "grad",
    "rad",
    "turn",
    "fr",
    "vh",
    "svh",
    "lvh",
    "dvh",
    "vw",
    "svw",
    "lvw",
    "dvw",
    "vmin",
    "svmin",
    "lvmin",
    "dvmin",
    "vmax",
    "svmax",
    "lvmax",
    "dvmax",
    "vb",
    "svb",
    "lvb",
    "dvb",
    "vi",
    "svi",
    "lvi",
    "dvi",
  ],
  dg = new RegExp(`^([+-]?(?:\\d*\\.)?\\d+(?:e[+-]?\\d+)?)(${Zd.join("|")})?$`, "i"),
  cg = new Map(Zd.map((e) => [e.toLowerCase(), e]));
function Kt(e, t) {
  let n = e.match(dg);
  if (!n) return [NaN, void 0];
  let [, o, r] = n,
    i = parseFloat(o);
  if (Number.isNaN(i)) return [NaN, void 0];
  if (!r) return [i, t];
  let a = cg.get(r.toLowerCase());
  if (!a) throw Error(`unrecognized CSS unit ${r}`);
  return [i, a];
}
function vB(e) {
  if (!p(e)) return !1;
  let [t] = Kt(e);
  return !Number.isNaN(t);
}
function Jd(e, t) {
  return `${e}${t}`;
}
function IB(e, { parentSize: t, viewportSize: n }) {
  if (v(e)) return;
  if (S(e)) return e;
  let [o, r] = Kt(e);
  if (!Number.isNaN(o))
    switch (r) {
      case "px":
        return o;
      case "%":
        return t ? (o / 100) * t : void 0;
      case "vh":
      case "vw":
        return n ? (o / 100) * n : void 0;
      default:
        return;
    }
}
function kB(e) {
  if (!p(e)) return [void 0, void 0, void 0, void 0];
  let t = e.split(" ");
  if (t.length === 1) {
    let [n] = Kt(t[0]),
      o = Jd(n, "px");
    return [o, o, o, o];
  }
  return t.length !== 4
    ? [void 0, void 0, void 0, void 0]
    : t.map((n) => {
        let [o] = Kt(n);
        return Jd(o, "px");
      });
}
var pg = /(?<value>\d{1,5})px/gu;
function DB(e, t) {
  return e.replace(pg, (n, o) => `${t(Number(o))}px`);
}
function EB(e, t) {
  let n = ia(e, t);
  return !Ve(n);
}
function ia(e, t) {
  let n = fg(e, t);
  return n && at(n) ? n : null;
}
function fg(e, t, n = !0) {
  let o = e.get(t);
  if (!o) return null;
  if (he(o)) return o;
  if (n) {
    let i = null;
    if (
      (wt(o)
        ? (i = o.cache.replicaAncestorId)
        : o.cache.masterAncestorId && (i = o.cache.masterAncestorId),
      i)
    ) {
      let a = e.getNode(i);
      return !a || !he(a) ? null : a;
    }
  }
  let r = e.getGroundNodeFor(o);
  return !r || !he(r) ? null : r;
}
function AB(e, t) {
  return t.parentid && at(e.get(t.parentid));
}
var GB = { repeatArray: void 0, repeatArrayTransforms: void 0 },
  mg = "repeatArray";
function Qd(e) {
  return !(!e || !(mg in e) || he(e) || Me(e));
}
function $t(e) {
  return !!e && Qd(e) && !!e.repeatArray;
}
function yg(e, t) {
  return e.getNodeWithTrait(t.getPrimaryId(), Qd)?.repeatArray;
}
function jB(e, t) {
  let n = yg(e, t);
  if (n) return Sl("array", n, t.repeatArrayTransforms ?? []);
}
var aa = "element",
  ec = "collection",
  tc = "collectionItemId",
  nc = "pathVariables",
  sa = "framer/page-link,";
function Ho(e) {
  return ee(e) && e.startsWith(`data:${sa}`);
}
function KB(e = null, t = {}) {
  let n = e || "none",
    o = new URL(`data:${sa}${n}`);
  return (
    t.element && o.searchParams.append(aa, t.element),
    t.collectionItem &&
      (o.searchParams.append(ec, t.collectionItem.collection),
      o.searchParams.append(tc, t.collectionItem.collectionItemId),
      o.searchParams.append(nc, new URLSearchParams(t.collectionItem.pathVariables).toString())),
    o.href
  );
}
function la(e) {
  if (Ho(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(sa.length),
        o = t.searchParams,
        r = o.has(aa) ? o.get(aa) : void 0,
        i,
        a = o.get(ec),
        s = o.get(tc),
        l = o.get(nc);
      if (a && s && l) {
        let u = Object.fromEntries(new URLSearchParams(l).entries());
        i = { collection: a, collectionItemId: s, pathVariables: u };
      }
      return {
        target: n === "none" ? null : n,
        element: r === "none" ? void 0 : r,
        collectionItem: i,
      };
    } catch {
      return;
    }
}
function $B(e) {
  return !Ho(e);
}
function qB(e, t, n) {
  let o = t.getAttribute("data-framer-page-link-target"),
    r,
    i;
  if (o) {
    r = t.getAttribute("data-framer-page-link-element") ?? void 0;
    let s = t.getAttribute("data-framer-page-link-path-variables");
    s && (i = Object.fromEntries(new URLSearchParams(s).entries()));
  } else {
    let s = t.getAttribute("href");
    if (!s) return !1;
    let l = la(s);
    if (!l?.target) return !1;
    ((o = l.target), (r = l.element ?? void 0), (i = l.collectionItem?.pathVariables));
  }
  let a = r ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(o, r, Object.assign({}, n, i), a), !0);
}
function hg(e, t = 0) {
  let n = e.indexOf("var(", t);
  if (n === -1) return null;
  let o = n + 4,
    r = 1,
    i;
  for (let a = o; a < e.length; a++)
    if (e[a] === "(") r++;
    else if (e[a] === ")") {
      if ((r--, r === 0)) return { start: n, end: a + 1, commaIndex: i };
    } else i === void 0 && e[a] === "," && (i = a);
  return null;
}
function xg(e, t) {
  if (!t) return {};
  let { start: n, end: o, commaIndex: r } = t,
    i = e.substring(o).trim();
  return r
    ? {
        customProperty: e.substring(n + 4, r),
        fallback: e.substring(r + 1, o - 1).trim(),
        metadata: i,
      }
    : { customProperty: e.substring(n + 4, o - 1), metadata: i };
}
function ua(e) {
  let t = hg(e);
  return xg(e, t);
}
var oc = "--token-";
function gg(e) {
  return e ? e.slice(oc.length) : null;
}
function bg(e) {
  let { customProperty: t } = ua(e);
  return gg(t);
}
function da(e) {
  return typeof e != "string" ? !1 : e.trim().startsWith(`var(${oc}`);
}
function ZB(e) {
  let { customProperty: t, fallback: n } = ua(e);
  if (t && n) return `var(${t}, ${n})`;
  if (t) return `var(${t})`;
}
function QB(e, t) {
  if (!da(e)) return;
  let n = bg(e);
  if (n) return t[n];
}
function oE(e) {
  let t = e;
  switch (t) {
    case "any":
    case "any-prefer-fixed":
    case "auto":
    case "fixed":
      return !0;
    case "__legacy":
      return !1;
    default:
      return !1;
  }
}
function rE(e) {
  return e > 0 ? "any" : "__legacy";
}
function iE(e) {
  switch (e) {
    case "any":
    case "auto":
      return !0;
    case "any-prefer-fixed":
    case "fixed":
    case "__legacy":
      return !1;
    default:
      W(e);
  }
}
function aE(e) {
  switch (e) {
    case "any":
    case "any-prefer-fixed":
    case "auto":
      return !0;
    case "fixed":
    case "__legacy":
      return !1;
    default:
      W(e);
  }
}
function sE(e) {
  switch (e) {
    case "any":
    case "any-prefer-fixed":
    case "fixed":
    case "__legacy":
      return !0;
    case "auto":
      return !1;
    default:
      W(e);
  }
}
function lE(e) {
  let t = e.framerContractVersion;
  if (!t) return 0;
  let n = parseInt(t, 10);
  return !Number.isFinite(n) || n < 0 ? 0 : n;
}
function uE(e, t) {
  return e?.[t] !== void 0;
}
var Tg = "getBreakpointValues";
function pE(e) {
  return e ? Tg in e : !1;
}
var Cg = "min",
  Vg = "max",
  Sg = "canvasClassName";
function Rg(e) {
  return g(e)
    ? Cg in e
      ? S(e.min)
      : Vg in e
        ? S(e.max)
        : Sg in e
          ? p(e.canvasClassName)
          : !1
    : !1;
}
function rc(e) {
  if (!g(e)) return !1;
  for (let t in e) {
    let n = e[t];
    if (Rg(n)) return !0;
  }
  return !1;
}
function jo(e, t) {
  if (!v(e))
    for (let n in e) {
      let o = e[n],
        r = o?.min ?? 0,
        i = o?.max ?? 1 / 0;
      if (t >= r && t <= i) return n;
    }
}
var TE = { layoutTemplateIdentifierOverride: void 0 },
  Pg = "layoutTemplateIdentifier";
function ic(e) {
  return e ? Pg in e : !1;
}
function ac(e, t) {
  if (!t || !at(t)) return;
  let n = e.getScopeNodeFor(t);
  if (ic(n)) return n.layoutTemplateIdentifier;
}
function CE(e) {
  return !!(ic(e) && e.layoutTemplateIdentifier);
}
function sc(e) {
  return !e || !Kd(e) ? !1 : !!e.usesLayoutTemplateRectForModuleIdentifierCached();
}
function vg(e, t) {
  let n = e.framerDefaultVariant,
    o = e.framerBreakpoints;
  if (!o) return n;
  let r = JSON.parse(o);
  return jo(r, t) ?? n;
}
function VE(e, t, n) {
  let o = t.componentForIdentifier(e)?.annotations;
  if (o) return vg(o, n);
}
var _o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  ke = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
function lc(e) {
  let t = Ss(e),
    n = _o.charAt(t % _o.length);
  for (t = Math.floor(t / _o.length); t > 0;)
    ((n += ke.charAt(t % ke.length)), (t = Math.floor(t / ke.length)));
  return n;
}
function ge() {
  return _e(_o) + _e(ke) + _e(ke) + _e(ke) + _e(ke) + _e(ke) + _e(ke) + _e(ke) + _e(ke);
}
function _e(e) {
  return e.charAt(Math.floor(Math.random() * e.length));
}
function uc(e) {
  let t = {};
  for (let n in e) {
    let o = e[n];
    v(o) || (t[n] = o);
  }
  return t;
}
function EE(e) {
  for (let t in e) {
    let n = e[t];
    if (n) return n;
  }
}
var pa = "webPage",
  Ig = "webPageId",
  fa = "url",
  kg = "url";
function ft(e) {
  return g(e) && "type" in e && (e.type === pa || e.type === fa);
}
function ca(e) {
  return ft(e) && e.type === fa;
}
function qt(e) {
  return ft(e) && e.type === pa;
}
function Dg(e) {
  if (kg in e) return fa;
  if (Ig in e) return pa;
  throw new Error("Link: Cannot infer Link type from link provided without a type.");
}
function dc(e) {
  return { ...uc(e), type: Dg(e) };
}
function Lg(e) {
  if (!e?.pathVariables) return;
  let t = {};
  for (let n in e.pathVariables) {
    let o = e.pathVariables[n];
    if (!o) continue;
    let r = { identifier: e.collection, collectionItemId: e.collectionItemId, key: n, value: o };
    t[n] = r;
  }
  return t;
}
function Uo(e) {
  if (E(e) || ft(e)) return e;
  if (Ho(e)) {
    let t = la(e);
    if (!t?.target) return;
    let n = t.collectionItem,
      o = t.element === "none" ? void 0 : t.element;
    return dc({ webPageId: t.target, hash: o || void 0, pathVariables: Lg(n) });
  }
  if (!(!p(e) || !e)) return dc({ url: e });
}
function wg(e, t) {
  if (e === t) return !0;
  try {
    return new URL(e).href === new URL(t).href;
  } catch {
    return !1;
  }
}
function AE(e, t, n) {
  return ca(e) && ca(t)
    ? wg(e.url, t.url)
    : !qt(e) || !qt(t) || e.webPageId !== t.webPageId
      ? !1
      : n?.ignoreHash
        ? ce(e.pathVariables, t.pathVariables)
        : e.hash !== t.hash
          ? !1
          : ce(e.pathVariables, t.pathVariables) && ce(e.hashVariables, t.hashVariables);
}
function FE(e) {
  if (!qt(e)) return (ca(e) || void 0, !1);
  if (e.pathVariables) {
    for (let t in e.pathVariables) if (M(e.pathVariables[t])) return !0;
  }
  if (e.hashVariables) {
    for (let t in e.hashVariables) if (M(e.hashVariables[t])) return !0;
  }
  return !1;
}
function OE(e, t) {
  return qt(e) && !t?.has(e.webPageId);
}
var cc = ["nofollow", "noreferrer", "me", "ugc", "sponsored"];
var Mg = cc,
  Bg = new Set(Mg),
  ma = (e) => Bg.has(e),
  pc = (e) => (j(e) ? e.every(ma) : !1);
function fc(e) {
  let t = "hasProp";
  return !!e && typeof e == "object" && t in e && typeof e[t] == "function";
}
function yc(e) {
  return { collectionRepeatedItemId: e, repeatedItemId: e };
}
function hc(e, t) {
  let n = t?.getPrimaryId();
  if (((t = e.get(n)), !Me(t))) return null;
  if (t.repeatedItemId !== void 0) return mc(e, t, t.repeatedItemId);
  let o = mc(e, t, t.collectionRepeatedItemId);
  return o || gc(t);
}
function $E(e, t) {
  let n = t.cache.repeatedAncestorRepeaterIds;
  if (n !== null) return n;
  let o = Eg(e, t);
  return ((t.cache.repeatedAncestorRepeaterIds = o), o);
}
function Eg(e, t) {
  let n = [],
    o = t,
    r = e.getParent(t.id);
  for (; r;) {
    if ($t(r)) n.push(r.id);
    else if (Me(r)) {
      let i = hc(e, r);
      i && o.getPrimaryId() === i.id && n.push(r.id);
    }
    if (((o = r), (r = e.getParent(r.id)), r && e.isGroundNode(r))) break;
  }
  return (n.reverse(), n);
}
function qE(e, t) {
  let n = t;
  for (let o of t.ancestors()) {
    if (Me(o)) return { repeater: o, inRepeatedChild: Xt(e, n, o) };
    n = o;
  }
}
function XE(e) {
  for (let t of e.ancestors()) if (Me(t)) return t;
}
function xc(e, t) {
  return e.getNodeWithTrait(t.parentid, Me) ?? void 0;
}
function YE(e, t) {
  return e.getNodeWithTrait(t.parentid, Yr) ?? void 0;
}
function Ag(e, t) {
  if (!t) return null;
  let n = hc(e, t);
  return n ? (t.originalid ? t.children?.find((r) => r.originalid === n.id) : n) : null;
}
function Xt(e, t, n) {
  return ((n ??= xc(e, t)), Ag(e, n)?.id === t.id);
}
function JE(e, t) {
  return Xt(e, t) || $t(t);
}
function ZE(e, t, n) {
  return !!n && Me(e) && !Xt(t, n, e);
}
function QE(e) {
  let t = e.children?.at(0);
  e.set(yc(t?.id));
}
function eA(e, t) {
  let n = new Map();
  for (let o of t) {
    let r = Fg(e, o);
    r && n.set(r.repeaterId, r);
  }
  return [...n.values()];
}
function Fg(e, t) {
  let n = xc(e, t);
  if (!n || !Xt(e, t, n)) return null;
  let o = t.getPrimaryId();
  return {
    repeaterId: n.getPrimaryId(),
    disableFallback: n.repeatedItemId !== void 0,
    repeatedItemId: o,
    repeatedItemChildIds: t.children?.map((r) => r.getPrimaryId()) ?? [],
  };
}
function tA(e, t, n) {
  for (let o of t) {
    let r = e.get(o.repeaterId);
    if (!Me(r)) continue;
    let i = Og(e, r, o, n);
    (i === r.repeatedItemId && i === r.collectionRepeatedItemId) || r.set(yc(i));
  }
}
function Og(e, t, n, o) {
  let r = new Set(),
    i = o?.get(n.repeatedItemId);
  (i && r.add(i), r.add(n.repeatedItemId));
  for (let a of n.repeatedItemChildIds) r.add(a);
  for (let a of r) {
    let s = Wg(e, t, a);
    if (s) return s.id;
  }
  if (!n.disableFallback) return gc(t)?.id;
}
function Wg(e, t, n) {
  let o = e.get(n);
  for (; o;) {
    if (o.parentid === t.id) return $t(o) ? null : o;
    if (!o.parentid) return null;
    o = e.get(o.parentid);
  }
  return null;
}
function mc(e, t, n) {
  let o = e.get(n);
  return !o || $t(o) || o.parentid !== t.id ? null : o;
}
function gc(e) {
  let t = e.children.at(0);
  return !t || $t(t) ? null : t;
}
var zg = bt("RichTextNode"),
  bc = new Set();
function lA(e, t) {
  if (mt(t)) return t;
  if (!bc.has(e)) {
    bc.add(e);
    let n = g(t) && t.constructor === Object ? "plain object" : typeof t;
    zg.reportError(`RichTextNode ${e} has invalid stored html (${n})`);
  }
  return "";
}
function mt(e) {
  return typeof e == "string" || yn(e);
}
function uA(e, t) {
  C(
    typeof e == "string",
    `${t}: Rich text value is stored as JSON here, but this path still expects HTML.`
  );
}
function Tc(e, t = (n, o) => n === o) {
  let n = fn;
  for (let o of e)
    if (co(n)) n = o;
    else if (!t(o, n)) return en;
  return n;
}
function fA(e, t) {
  let n = e[0];
  if (n === void 0) return fn;
  let o = n[t];
  for (let [r, i] of e.entries()) {
    if (r === 0) continue;
    let a = i[t];
    if (o !== a) return en;
  }
  return o;
}
function mA(...e) {
  return e.find(Si);
}
var Vc = "borderColor";
function TA(e) {
  return {
    borderWidth: e.borderPerSide
      ? { top: e.borderTop, right: e.borderRight, bottom: e.borderBottom, left: e.borderLeft }
      : e.borderWidth,
    borderColor: e.borderColor,
    borderStyle: e.borderStyle,
  };
}
function Vn(e) {
  if (!g(e)) return !1;
  let t = "borderWidth",
    n = "borderStyle",
    o = "borderPerSide",
    r = "borderTop",
    i = "borderRight",
    a = "borderBottom",
    s = "borderLeft";
  return !(
    !p(e[Vc]) ||
    !p(e[n]) ||
    !ne(e[t]) ||
    !te(e[o]) ||
    !ne(e[r]) ||
    !ne(e[i]) ||
    !ne(e[s]) ||
    !ne(e[a])
  );
}
var Hg = { solid: !0, dashed: !0, dotted: !0, double: !0 };
function CA(e) {
  return p(e) && Object.hasOwn(Hg, e);
}
var tt = {
  borderColor: "black",
  borderStyle: "solid",
  borderPerSide: !1,
  borderBottom: 1,
  borderLeft: 1,
  borderRight: 1,
  borderTop: 1,
  borderWidth: 1,
};
function Sc(e) {
  if (!Vn(e)) return e;
  let {
    borderColor: t,
    borderStyle: n,
    borderPerSide: o,
    borderWidth: r,
    borderTop: i,
    borderRight: a,
    borderBottom: s,
    borderLeft: l,
  } = e;
  return o
    ? {
        borderColor: t,
        borderStyle: n,
        borderTopWidth: i,
        borderRightWidth: a,
        borderBottomWidth: s,
        borderLeftWidth: l,
      }
    : { borderColor: t, borderStyle: n, borderWidth: r };
}
function VA(e) {
  let t = { ...tt };
  return (
    ne(e.borderTop) && (t.borderTop = e.borderTop),
    ne(e.borderRight) && (t.borderRight = e.borderRight),
    ne(e.borderBottom) && (t.borderBottom = e.borderBottom),
    ne(e.borderLeft) && (t.borderLeft = e.borderLeft),
    ne(e.borderWidth) && (t.borderWidth = e.borderWidth),
    p(e.borderColor) && (t.borderColor = e.borderColor),
    p(e.borderStyle) && (t.borderStyle = e.borderStyle),
    te(e.borderPerSide) && (t.borderPerSide = e.borderPerSide),
    t
  );
}
function SA(e) {
  let t = { ...tt };
  return (
    ne(e.borderTop) && (t.borderTop = e.borderTop),
    ne(e.borderRight) && (t.borderRight = e.borderRight),
    ne(e.borderBottom) && (t.borderBottom = e.borderBottom),
    ne(e.borderLeft) && (t.borderLeft = e.borderLeft),
    ne(e.borderWidth) && (t.borderWidth = e.borderWidth),
    p(e.borderColor) && (t.borderColor = e.borderColor),
    p(e.borderStyle) && (t.borderStyle = e.borderStyle),
    te(e.borderPerSide) && (t.borderPerSide = e.borderPerSide),
    t
  );
}
function RA(e) {
  if (!e) return tt;
  let t = 0,
    n = e.borderTopWidth ?? e.borderWidth ?? t,
    o = e.borderRightWidth ?? e.borderWidth ?? t,
    r = e.borderBottomWidth ?? e.borderWidth ?? t,
    i = e.borderLeftWidth ?? e.borderWidth ?? t,
    a = e.borderWidth ?? tt.borderWidth,
    s = St(Tc([n, o, r, i, a])),
    l = e.borderStyle ?? tt.borderStyle,
    u = e.borderColor ?? tt.borderColor;
  return {
    borderPerSide: s,
    borderTop: n,
    borderRight: o,
    borderBottom: r,
    borderLeft: i,
    borderColor: u,
    borderStyle: l,
    borderWidth: a,
  };
}
function Cc(e) {
  return p(e) || v(e);
}
function Cn(e) {
  return ne(e) || v(e);
}
function NA(e) {
  if (!g(e)) return !1;
  let t = "borderWidth",
    n = "borderStyle",
    o = "borderTopWidth",
    r = "borderRightWidth",
    i = "borderBottomWidth",
    a = "borderLeftWidth";
  return !(
    !Cc(e[Vc]) ||
    !Cc(e[n]) ||
    !Cn(e[o]) ||
    !Cn(e[r]) ||
    !Cn(e[a]) ||
    !Cn(e[i]) ||
    !Cn(e[t])
  );
}
function Rc(e, t) {
  for (let n in e) if (e[n] === t) return !0;
  return !1;
}
function Nc(e) {
  return Rc(O, e);
}
var Gg = bt("RawControlProp"),
  Pc = "type";
function Ue(e) {
  if (!g(e) || !(Pc in e)) return !1;
  let t = e[Pc];
  return t === null
    ? (Gg.reportErrorOnceEveryTenMinutes(new Error("Encountered raw control prop with null type"), {
        value: e,
      }),
      !0)
    : Nc(t);
}
function BA(e) {
  return g(e) ? Object.values(e).every((t) => t === void 0 || Ue(t)) : !1;
}
var jg = [
    "default",
    "pointer",
    "progress",
    "copy",
    "no-drop",
    "context-menu",
    "grab",
    "grabbing",
    "cell",
    "crosshair",
    "alias",
    "zoom-in",
    "zoom-out",
    "help",
    "nw-resize",
    "n-resize",
    "ne-resize",
    "w-resize",
    "move",
    "e-resize",
    "sw-resize",
    "s-resize",
    "se-resize",
    "ew-resize",
    "ns-resize",
    "nwse-resize",
    "nesw-resize",
    "col-resize",
    "row-resize",
    "text",
    "vertical-text",
    "not-allowed",
    "none",
  ],
  _g = new Set(jg);
function vc(e) {
  return p(e) && _g.has(e);
}
var OA = "--framer-custom-cursors";
var Ug = "customCursorSmartComponentId";
function WA(e) {
  return g(e) && Ug in e;
}
var Kg = {
    customCursorSmartComponentId: void 0,
    customCursorVariant: void 0,
    customCursorFollow: void 0,
    customCursorOffsetX: void 0,
    customCursorOffsetY: void 0,
    customCursorTransitionEnabled: void 0,
    customCursorTransition: void 0,
    customCursorPlacement: void 0,
    customCursorAlignment: void 0,
  },
  zA = { ...Kg, cursor: void 0, customCursorType: void 0 },
  HA = "default",
  $g = "cursor";
function Ic(e) {
  return $g in e;
}
function GA(e) {
  if (Ic(e))
    return {
      customCursorType: e.customCursorType,
      customCursorSmartComponentId: e.customCursorSmartComponentId,
      customCursorVariant: e.customCursorVariant,
      customCursorFollow: e.customCursorFollow,
      customCursorOffsetX: e.customCursorOffsetX,
      customCursorOffsetY: e.customCursorOffsetY,
      customCursorTransitionEnabled: e.customCursorTransitionEnabled,
      customCursorTransition: e.customCursorTransition,
      customCursorPlacement: e.customCursorPlacement,
      customCursorAlignment: e.customCursorAlignment,
    };
}
var jA = 20;
function qg(e) {
  return p(e.customCursorSmartComponentId);
}
function _A(e, t) {
  return !t || !Ic(t) || t.customCursorType !== "component" || !qg(t)
    ? !1
    : It(e.get(t.customCursorSmartComponentId));
}
var Xg = "single",
  Yg = "fused";
function XA(e) {
  return { single: e, fused: [e, e, e, e] };
}
function Sn(e) {
  if (!g(e) || !S(e[Xg])) return !1;
  let t = e[Yg];
  return j(t) && t.length === 4 && t.every(S);
}
function YA(e) {
  return Ue(e) && e.type === "fusednumber" && Sn(e.value);
}
var Jg = "isFused";
function kc(e) {
  return g(e) && te(e[Jg]);
}
var Zg = "id";
function Qg(e) {
  return Zg in e;
}
var eb = "value";
function tb(e) {
  return g(e) && Qg(e) && eb in e;
}
function hF(e) {
  return e.type === "array" && Lc(e.value);
}
function xF(e) {
  return e.type === "object" && (g(e.value) || Ve(e.value));
}
function Dc(e) {
  return e.type !== "fusednumber" || !kc(e) ? !1 : Sn(e.value);
}
function Yt(e) {
  return X(e) && e.endsWith("px") && S(Number.parseFloat(e));
}
function nb(e) {
  if (!X(e)) return !1;
  let [t, n] = Kt(e);
  return !Number.isNaN(t) && n === "%";
}
function gF(e) {
  return g(e) && e.type === "image";
}
var ob = { string: !0, richtext: !0, image: !0, link: !0 };
function bF(e) {
  return e ? e.type in ob : !1;
}
function Ko(e) {
  return g(e) && S(e.latitude) && S(e.longitude);
}
function TF(e) {
  return !(
    !g(e) ||
    !Ko(e.coordinate) ||
    (e.title !== void 0 && !X(e.title)) ||
    (e.address !== void 0 && !X(e.address))
  );
}
function CF(e) {
  return ye(e) || Lc(e);
}
function Lc(e) {
  return j(e) && e.every(tb);
}
function VF(e) {
  return E(e) || te(e);
}
function SF(e) {
  return E(e) || X(e);
}
function RF(e) {
  return E(e) || X(e) || v(e);
}
function NF(e) {
  return X(e) || M(e);
}
function PF(e) {
  return E(e) || X(e) || te(e) || S(e) || v(e) || Ve(e);
}
function vF(e) {
  return E(e) || j(e);
}
function IF(e) {
  return j(e) && e.every(Eo);
}
function kF(e) {
  return E(e) || X(e) || v(e);
}
function DF(e) {
  return M(e) || pc(e);
}
function LF(e) {
  return M(e) || typeof e == "boolean" || (typeof e == "number" && Number.isFinite(e));
}
function wF(e) {
  return E(e) || S(e);
}
function MF(e) {
  return g(e);
}
function BF(e) {
  return E(e) || mt(e);
}
function EF(e) {
  return E(e) || X(e);
}
function AF(e) {
  return E(e) || X(e) || v(e);
}
function FF(e) {
  return qt(e) || v(e);
}
function OF(e) {
  return g(e) || v(e);
}
function WF(e) {
  return g(e) || v(e);
}
function zF(e) {
  return M(e) || Vn(e);
}
function HF(e) {
  return M(e) || vc(e);
}
function GF(e) {
  if (E(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? Yt(t[0]) : t.length === 2 && t.every(Yt);
}
function jF(e) {
  if (E(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? Yt(t[0]) : t.length === 4 && t.every(Yt);
}
function _F(e) {
  if (E(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? Yt(t[0]) || nb(t[0]) : t.length === 4 && t.every(Yt);
}
function UF(e) {
  return M(e) || X(e) || v(e);
}
function KF(e) {
  return E(e) || (j(e) && e.every(X)) || v(e);
}
function $F(e) {
  return (X(e) && Pe(e)) || M(e) || v(e);
}
function qF(e) {
  return M(e) || X(e) || v(e);
}
function XF(e) {
  return j(e);
}
function YF(e) {
  return Ko(e) || M(e) || v(e);
}
function o0(e, t) {
  return e === t ? !0 : e.variant !== t.variant ? !1 : $o(e.variant, e.childNodes, t.childNodes);
}
function $o(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!Ac(e, t[o], n[o])) return !1;
  return !0;
}
var z = (e, t, n) => Object.is(t, n),
  Rn = (e, t, n) => ce(t, n),
  wc = (e, t, n) => ya(t, n),
  Mc = { type: z, tag: z, textDirection: z, childNodes: yb },
  rb = { ...Mc, blockStyles: Rn, backgroundMask: Rn, textStylePreset: z },
  Bc = { type: z, textDirection: z },
  ib = { ...Bc, childNodes: Fc },
  Ec = { type: z, textDirection: z, listStyleType: z, start: z },
  ab = { ...Ec, childNodes: Fc },
  sb = { type: z, childNodes: $o },
  lb = { type: z, mediaType: z, src: z, alt: z, pixelWidth: z, pixelHeight: z, link: wc },
  ub = { type: z, identifier: z, embedId: z, props: Rn, width: z, alignment: z },
  db = { type: z, childNodes: pb };
function r0(e, t) {
  return e.id !== void 0 && e.id === t.id && e.variant === t.variant;
}
function i0(e, t, n) {
  return t === n || Ac(e, t, n);
}
function Ac(e, t, n) {
  if (t.type !== n.type) return !1;
  switch (t.type) {
    case "textBlock":
      return (C(n.type === "textBlock"), ut(e, "styles") ? Re(e, t, n, rb) : Re(e, t, n, Mc));
    case "bulletedList":
      return (C(n.type === "bulletedList"), Re(e, t, n, ib));
    case "numberedList":
      return (C(n.type === "numberedList"), Re(e, t, n, ab));
    case "blockquote":
      return (
        C(n.type === "blockquote"),
        C(ut(e, "blockquotes"), "Document variant does not support blockquotes"),
        Re(e, t, n, sb)
      );
    case "media":
      return (
        C(n.type === "media"),
        C(ut(e, "media"), "Document variant does not support media block"),
        Re(e, t, n, lb)
      );
    case "module":
      return (
        C(n.type === "module"),
        C(ut(e, "embeds"), "Document variant does not support embeds"),
        Re(e, t, n, ub)
      );
    case "table":
      return (
        C(n.type === "table"),
        C(ut(e, "tables"), "Document variant does not support tables"),
        Re(e, t, n, db)
      );
    default:
      W(t);
  }
}
function a0(e, t, n) {
  if (t.type !== n.type) return !1;
  switch (t.type) {
    case "blockquote":
    case "table":
    case "tableRow":
      return !0;
    case "bulletedList":
      return (C(n.type === "bulletedList"), Re(e, t, n, Bc));
    case "numberedList":
      return (C(n.type === "numberedList"), Re(e, t, n, Ec));
    default:
      W(t);
  }
}
function cb(e, t, n) {
  return t === n || $o(e, t.childNodes, n.childNodes);
}
function Fc(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!cb(e, t[o], n[o])) return !1;
  return !0;
}
function pb(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!fb(e, t[o].childNodes, n[o].childNodes)) return !1;
  return !0;
}
function fb(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!mb(e, t[o], n[o])) return !1;
  return !0;
}
function mb(e, t, n) {
  return t === n
    ? !0
    : t.cellType !== n.cellType || t.rowSpan !== n.rowSpan || t.columnSpan !== n.columnSpan
      ? !1
      : $o(e, t.childNodes, n.childNodes);
}
function yb(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!xb(e, t[o], n[o])) return !1;
  return !0;
}
var Oc = { type: z, text: z, bold: z, italic: z, inlineCode: z, link: wc },
  hb = {
    ...Oc,
    inlineStyles: Rn,
    backgroundStyles: Rn,
    inlineCodeStylePreset: z,
    linkStylePreset: z,
  };
function xb(e, t, n) {
  return t.type !== n.type
    ? !1
    : t.type === "lineBreak"
      ? !0
      : n.type !== "text"
        ? !1
        : ut(e, "styles")
          ? Re(e, t, n, hb)
          : Re(e, t, n, Oc);
}
function ya(e, t) {
  return e === t
    ? !0
    : e === void 0 ||
        t === void 0 ||
        !Nt(e.openInNewTab, t.openInNewTab) ||
        !Nt(e.smoothScroll, t.smoothScroll) ||
        !Nt(e.clickTrackingId, t.clickTrackingId) ||
        !Nt(e.preserveParams, t.preserveParams) ||
        !gb(e.relValues, t.relValues)
      ? !1
      : ce(e.link, t.link);
}
function gb(e, t) {
  if (e === t) return !0;
  if (M(e) || M(t)) return Nt(e, t);
  let n = e ?? [],
    o = t ?? [];
  if (n.length !== o.length) return !1;
  for (let r = 0; r < n.length; r++) if (n[r] !== o[r]) return !1;
  return !0;
}
function Re(e, t, n, o) {
  for (let r in o)
    if (Object.hasOwn(o, r)) {
      let i = o[r];
      if (!i(e, t[r], n[r])) return !1;
    }
  return !0;
}
function Wc(e, t) {
  if (t in e) return Reflect.get(e, t);
}
function ha(e, t, n) {
  return Wc(e, n) === Wc(t, n);
}
function h0(e, t = e.variant) {
  try {
    return Nn(e);
  } catch (n) {
    return (ns(n), { id: ge(), type: "richText", variant: t, childNodes: [] });
  }
}
function Nn(e) {
  return {
    id: e.id ?? ge(),
    type: "richText",
    variant: e.variant,
    childNodes: qo(e.variant, e.childNodes),
  };
}
function qo(e, t) {
  return t.map((n) => bb(e, n));
}
function bb(e, t) {
  switch (t.type) {
    case "textBlock":
      return Tb(e, t);
    case "bulletedList":
      return Cb(e, t);
    case "numberedList":
      return Vb(e, t);
    case "blockquote": {
      let n = Sb(e, t);
      return (C(Se(n, e), "normalizeRichTextDocument: unexpected node: blockquote"), n);
    }
    case "table": {
      let n = Rb(e, t);
      return (C(Se(n, e), "normalizeRichTextDocument: unexpected node: table"), n);
    }
    case "media":
    case "module":
      return t;
  }
}
function Tb(e, t) {
  return { ...t, childNodes: Db(e, t.childNodes) };
}
function Cb(e, t) {
  let n = t.childNodes.map((o) => zc(e, o));
  return { ...t, childNodes: n.length > 0 ? n : [Hc()] };
}
function Vb(e, t) {
  let n = t.childNodes.map((o) => zc(e, o));
  return { ...t, childNodes: n.length > 0 ? n : [Hc()] };
}
function Sb(e, t) {
  let n = qo(e, t.childNodes);
  return { ...t, childNodes: n.length > 0 ? n : [Pn()] };
}
function Rb(e, t) {
  if (t.childNodes.length === 0) return { ...t, childNodes: [Ab()] };
  if (t.childNodes.every((o) => o.childNodes.length === 0))
    return { ...t, childNodes: t.childNodes.map((o) => ({ ...o, childNodes: [xa()] })) };
  let n = t.childNodes.map((o) => Ib(e, o));
  return { ...t, childNodes: Nb(e, n) };
}
function Nb(e, t) {
  let { width: n, height: o, slots: r } = vb(t);
  for (
    C(n > 0, "richTextDocumentNormalization: table has no cells"),
      C(o > 0, "richTextDocumentNormalization: table has no rows");
    t.length < o;
  )
    t.push(Fb());
  for (let i = 0; i < o; i++) {
    let a = r[i],
      s = t[i];
    C(a && s, "richTextDocumentNormalization: row length mismatch");
    let l = 0;
    for (let u = 0; u < a.length; u++) {
      let c = s.childNodes[l],
        m = a[u];
      if (!m?.length) (s.childNodes.splice(l, 0, xa()), l++);
      else if (c)
        for (let f of m) {
          C(f, "richTextDocumentNormalization: slotCell is undefined");
          let h = f.cellX + f.width,
            T = f.cellY + f.height;
          (C(
            u >= f.cellX && u < h && i >= f.cellY && i < T,
            () =>
              `richTextDocumentNormalization: table cell bounds error. (${u}, ${i}) not within (${f.cellX}, ${f.cellY})...(${h}, ${T})`
          ),
            f.cell === c && l++);
        }
    }
  }
  return Pb(t);
}
function Pb(e) {
  return e.map((t, n) => ({
    ...t,
    childNodes: t.childNodes.map((o) => {
      if (o.rowSpan !== 0) return o;
      let { rowSpan: r, ...i } = o,
        a = e.length - n;
      return a === 1 ? i : { ...i, rowSpan: a };
    }),
  }));
}
function vb(e) {
  let t = [],
    n = 0,
    o = 0,
    r = 0,
    i = [];
  for (let f = 0; f < e.length; f++) a(e[f], f);
  return (
    s(),
    {
      width: n,
      height: o,
      slots: Array.from({ length: o }, (f, h) =>
        Array.from({ length: n }, (T, V) => t[h]?.[V] ?? [])
      ),
    }
  );
  function a(f, h) {
    (o === r && o++,
      C(r <= o, "richTextDocumentNormalization: table forming algorithm height error"));
    let T = 0;
    if ((l(), f.childNodes.length === 0)) {
      r++;
      return;
    }
    for (let V = 0; V < f.childNodes.length; V++) {
      let P = f.childNodes[V];
      for (; T < n && m(T, r);) T++;
      (T === n && n++,
        C(T <= n, "richTextDocumentNormalization: table forming algorithm width error"));
      let y = Math.min(P.columnSpan || 1, 1e3),
        b = Math.min(P.rowSpan ?? 1, 65534),
        N = !1;
      (b === 0 && ((N = !0), (b = 1)), n < T + y && (n = T + y), o < r + b && (o = r + b));
      let G = { cell: P, cellX: T, cellY: r, width: y, height: b };
      (u(G), N && i.push({ cell: G, cellX: T, width: y }), (T += y));
    }
    r += 1;
  }
  function s() {
    for (; r < o;) (l(), (r += 1));
    i = [];
  }
  function l() {
    for (let { cell: f, cellX: h, width: T } of i) (c(f, r, h, h + T), f.height++);
  }
  function u(f) {
    for (let h = f.cellX; h < f.cellX + f.width; h++)
      for (let T = f.cellY; T < f.cellY + f.height; T++) {
        let V = (t[T] ??= []);
        (V[h] ??= []).push(f);
      }
  }
  function c(f, h, T, V) {
    t[h] ??= [];
    for (let P = T; P < V; P++) (t[h][P] ??= []).push(f);
  }
  function m(f, h) {
    return !!t[h]?.[f]?.length;
  }
}
function zc(e, t) {
  let n = qo(e, t.childNodes);
  return { ...t, childNodes: n.length > 0 ? n : [Pn("inherit")] };
}
function Ib(e, t) {
  return { ...t, childNodes: t.childNodes.map((n) => kb(e, n)) };
}
function kb(e, t) {
  let n = qo(e, t.childNodes),
    o = { ...t, childNodes: n.length > 0 ? n : [Pn()] };
  return (
    o.columnSpan !== void 0 && o.columnSpan < 1 && (o.columnSpan = 1),
    o.rowSpan !== void 0 && o.rowSpan < 0 && (o.rowSpan = 0),
    o
  );
}
function Db(e, t) {
  let o = wb(t).filter((i) => i.type === "lineBreak" || i.text.length > 0),
    r = Bb(o);
  if (r.some((i) => i.type === "text")) return r;
  for (let i of t)
    if (i.type === "text" && i.text === "" && Lb(i)) {
      r.push(i);
      break;
    }
  return r;
}
function Lb(e) {
  let t = e;
  return !!(t.inlineStyles || t.linkStylePreset || t.inlineCodeStylePreset);
}
function wb(e) {
  let t = [];
  for (let n of e) {
    if (
      n.type === "lineBreak" ||
      !n.text.includes(`
`)
    ) {
      t.push(n);
      continue;
    }
    Mb(n, t);
  }
  return t;
}
function Mb(e, t) {
  let n = 0,
    o = !1;
  for (; n < e.text.length;) {
    let r = e.text.indexOf(
      `
`,
      n
    );
    if (r === -1) {
      let a = e.text.slice(n);
      a.length > 0 && t.push({ ...e, id: o ? ge() : e.id, text: a });
      return;
    }
    let i = e.text.slice(n, r);
    (i.length > 0 && (t.push({ ...e, id: o ? ge() : e.id, text: i }), (o = !0)),
      t.push({ id: ge(), type: "lineBreak" }),
      (n = r + 1));
  }
}
function Bb(e) {
  let t = [];
  for (let n of e) {
    let o = t[t.length - 1];
    if (o?.type === "text" && n.type === "text" && Eb(o, n)) {
      t[t.length - 1] = { ...o, text: o.text + n.text };
      continue;
    }
    t.push(n.type === "text" ? { ...n } : n);
  }
  return t;
}
function Eb(e, t) {
  if (e.bold !== t.bold || e.italic !== t.italic || e.inlineCode !== t.inlineCode) return !1;
  let n = "inlineStyles" in e ? e.inlineStyles : void 0,
    o = "inlineStyles" in t ? t.inlineStyles : void 0;
  if (!ce(n, o)) return !1;
  let r = "backgroundStyles" in e ? e.backgroundStyles : void 0,
    i = "backgroundStyles" in t ? t.backgroundStyles : void 0;
  return !ce(r, i) || !ha(e, t, "inlineCodeStylePreset") || !ha(e, t, "linkStylePreset")
    ? !1
    : ya(e.link, t.link);
}
function Pn(e = "auto") {
  return { id: ge(), type: "textBlock", tag: "p", textDirection: e, childNodes: [] };
}
function Hc() {
  return { id: ge(), type: "listItem", childNodes: [Pn("inherit")] };
}
function Ab() {
  return { id: ge(), type: "tableRow", childNodes: [xa()] };
}
function Fb() {
  return { id: ge(), type: "tableRow", childNodes: [] };
}
function xa() {
  return { id: ge(), type: "tableCell", cellType: "cell", childNodes: [Pn()] };
}
function C0(e, t) {
  t.document?.(e);
  for (let n of e.childNodes) Xo(n, t);
}
function V0(e, t) {
  if (t.document?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let o = Yo(n, t);
    if (o) return o;
  }
}
function Uc(e, t, n = {}) {
  let o = be(e, t.document, (r) => {
    let i = Ke(r.childNodes, (a) => Jo(e.variant, a, t));
    return i === r.childNodes ? r : { ...r, childNodes: i };
  });
  return o === e ? e : n.normalize === !1 ? o : Nn(o);
}
function Xo(e, t) {
  switch (e.type) {
    case "textBlock":
      t.textBlock?.(e);
      for (let n of e.childNodes) zb(n, t);
      return;
    case "bulletedList":
      t.bulletedList?.(e);
      for (let n of e.childNodes) Gc(n, t);
      return;
    case "numberedList":
      t.numberedList?.(e);
      for (let n of e.childNodes) Gc(n, t);
      return;
    case "blockquote":
      t.blockquote?.(e);
      for (let n of e.childNodes) Xo(n, t);
      return;
    case "media":
      t.media?.(e);
      return;
    case "module":
      t.module?.(e);
      return;
    case "table":
      t.table?.(e);
      for (let n of e.childNodes) Ob(n, t);
      return;
  }
}
function Gc(e, t) {
  t.listItem?.(e);
  for (let n of e.childNodes) Xo(n, t);
}
function Ob(e, t) {
  t.tableRow?.(e);
  for (let n of e.childNodes) Wb(n, t);
}
function Wb(e, t) {
  t.tableCell?.(e);
  for (let n of e.childNodes) Xo(n, t);
}
function zb(e, t) {
  switch (e.type) {
    case "text":
      t.text?.(e);
      return;
    case "lineBreak":
      t.lineBreak?.(e);
      return;
  }
}
function Yo(e, t) {
  switch (e.type) {
    case "textBlock":
      if (t.textBlock?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let o = jb(n, t);
        if (o) return o;
      }
      return;
    case "bulletedList":
      if (t.bulletedList?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let o = jc(n, t);
        if (o) return o;
      }
      return;
    case "numberedList":
      if (t.numberedList?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let o = jc(n, t);
        if (o) return o;
      }
      return;
    case "blockquote":
      if (t.blockquote?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let o = Yo(n, t);
        if (o) return o;
      }
      return;
    case "media":
      return t.media?.(e) === !0 ? e : void 0;
    case "module":
      return t.module?.(e) === !0 ? e : void 0;
    case "table":
      if (t.table?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let o = Hb(n, t);
        if (o) return o;
      }
      return;
  }
}
function jc(e, t) {
  if (t.listItem?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let o = Yo(n, t);
    if (o) return o;
  }
}
function Hb(e, t) {
  if (t.tableRow?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let o = Gb(n, t);
    if (o) return o;
  }
}
function Gb(e, t) {
  if (t.tableCell?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let o = Yo(n, t);
    if (o) return o;
  }
}
function jb(e, t) {
  switch (e.type) {
    case "text":
      return t.text?.(e) === !0 ? e : void 0;
    case "lineBreak":
      return t.lineBreak?.(e) === !0 ? e : void 0;
  }
}
function Jo(e, t, n) {
  switch (t.type) {
    case "textBlock": {
      let o = be(t, n.textBlock, (r) => {
        let i = Ke(r.childNodes, (a) => Kb(e, a, n));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        C(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "bulletedList": {
      let o = be(t, n.bulletedList, (r) => {
        let i = Ke(r.childNodes, (a) => _c(e, a, n));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        C(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "numberedList": {
      let o = be(t, n.numberedList, (r) => {
        let i = Ke(r.childNodes, (a) => _c(e, a, n));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        C(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "blockquote": {
      let o = be(t, n.blockquote, (r) => {
        let i = Ke(r.childNodes, (a) => Jo(e, a, n));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        C(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "media": {
      let o = be(t, n.media, (r) => r);
      return (
        C(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "module": {
      let o = be(t, n.module, (r) => r);
      return (
        C(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "table": {
      let o = be(t, n.table, (r) => {
        let i = Ke(r.childNodes, (a) => _b(e, a, n));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        C(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
  }
}
function _c(e, t, n) {
  return be(t, n.listItem, (o) => {
    let r = Ke(o.childNodes, (i) => Jo(e, i, n));
    return r === o.childNodes ? o : { ...o, childNodes: r };
  });
}
function _b(e, t, n) {
  return be(t, n.tableRow, (o) => {
    let r = Ke(o.childNodes, (i) => Ub(e, i, n));
    return r === o.childNodes ? o : { ...o, childNodes: r };
  });
}
function Ub(e, t, n) {
  return be(t, n.tableCell, (o) => {
    let r = Ke(o.childNodes, (i) => Jo(e, i, n));
    return r === o.childNodes ? o : { ...o, childNodes: r };
  });
}
function Kb(e, t, n) {
  switch (t.type) {
    case "text":
      return be(t, n.text, (o) => o);
    case "lineBreak":
      return be(t, n.lineBreak, (o) => o);
  }
}
function be(e, t, n) {
  let o = $b(e, t),
    r = n(o);
  return qb(r, t);
}
function $b(e, t) {
  return !t || typeof t == "function" ? e : (t.enter?.(e) ?? e);
}
function qb(e, t) {
  return t ? (typeof t == "function" ? t(e) : (t.exit?.(e) ?? e)) : e;
}
function Ke(e, t) {
  let n;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (!r) continue;
    let i = t(r);
    i !== r && ((n ??= Array.from(e)), (n[o] = i));
  }
  return n ?? e;
}
var Kc = Symbol.for("framer.sharedEnum"),
  P0 = Symbol.for("framer.sharedTypeIdentity");
function Zo(e) {
  return q(e) && Kc in e;
}
function v0(e) {
  let { options: t, localizedOptionTitles: n } = e,
    o = t.map((i, a) => e.optionTitles?.[a] ?? i),
    r = (i) => {
      if (typeof i != "string") return;
      let a = o.indexOf(i);
      return a === -1 ? void 0 : t[a];
    };
  return {
    [Kc]: !0,
    kind: "enum",
    options: t,
    optionTitles: o,
    titleFor(i, a) {
      if (typeof i != "string") return;
      let s = t.indexOf(i);
      if (s !== -1) {
        for (let l = a; l; l = l.fallback) {
          let u = n?.[l.id]?.[s];
          if (u) return u;
        }
        return o[s];
      }
    },
    optionForTitle: r,
    getValidValue(i, a) {
      return typeof i == "string" && t.includes(i)
        ? i
        : (r(i) ?? (a !== void 0 && t.includes(a) ? a : void 0));
    },
  };
}
function Xb(e) {
  return q(e) || Je(e);
}
var $c = "optional";
function Yb(e) {
  return !!e && $c in e && e[$c] === !0;
}
function Jb(e) {
  try {
    switch (e.type) {
      case "string":
      case "collectionreference":
      case "color":
      case "date":
      case "link":
      case "boxshadow":
      case "padding":
      case "borderradius":
      case "gap":
      case "dimension":
        return ee(e.defaultValue) ? e.defaultValue : void 0;
      case "sharedtype": {
        if (!("definition" in e) || !Zo(e.definition)) return;
        let { definition: t } = e;
        if (t.kind === "enum")
          return ee(e.defaultValue) && t.options.includes(e.defaultValue) ? e.defaultValue : void 0;
        t.kind;
        return;
      }
      case "boolean":
        return ds(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return Tt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case "fusednumber":
      case "number":
        return Ae(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return q(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return q(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
      case "location":
        return q(e.defaultValue) ? e.defaultValue : void 0;
      case "linkrelvalues":
        return En(e.defaultValue) ? e.defaultValue : void 0;
      case "multicollectionreference":
        return En(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = q(e.defaultValue) ? e.defaultValue : {};
        return (q(e.controls) && qc(t, e.controls), t);
      }
      case "array":
        return En(e.defaultValue) ? e.defaultValue : void 0;
      case "motionvalue":
      case "file":
      case "image":
      case "richtext":
      case "pagescope":
      case "eventhandler":
      case "changehandler":
      case "segmentedenum":
      case "responsiveimage":
      case "componentinstance":
      case "slot":
      case "ref":
      case "scrollsectionref":
      case "customcursor":
      case "cursor":
      case "trackingid":
      case "vectorsetitem":
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function qc(e, t) {
  for (let n in t) {
    let o = t[n];
    if (!o) continue;
    let r = e[n];
    if (!Tt(r) || Yb(o)) continue;
    let i = Jb(o);
    Tt(i) || (e[n] = i);
  }
}
function Zb(e) {
  if (q(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Xc(e, t) {
  if (!Xb(e)) return;
  let n = Zb(e);
  qc(n, t);
}
var Yc = "outputControls";
function Qb(e) {
  return (q(e) || Je(e)) && Yc in e;
}
function Jc(e, t) {
  Object.assign(e, { [Yc]: t });
}
function B0(e) {
  if (Qb(e)) return e.outputControls;
}
function Zc(e, t, n) {
  (Object.assign(e, { propertyControls: t }), eT(t), Xc(e, t), n !== void 0 && Jc(e, n));
}
function eT(e) {
  for (let t of Object.values(e))
    t?.type !== "sharedtype" ||
      !("definition" in t) ||
      !Zo(t.definition) ||
      !Object.isExtensible(t) ||
      Object.defineProperty(t, "options", { value: t.definition.options, configurable: !0 });
}
function z0(e) {
  return e.propertyControls;
}
function Qo(e, t = 2) {
  let n = 0;
  if (typeof e == "number") n = e;
  else if (typeof e == "string") n = parseFloat(e);
  else return;
  if (Number.isInteger(n)) return n;
  let o = 1;
  for (; t-- > 0;) o *= 10;
  return (n < 0 && (o *= -1), Math.round(n * o) / o);
}
function ga(e) {
  let { paddingPerSide: t, paddingTop: n, paddingBottom: o, paddingLeft: r, paddingRight: i } = e;
  return t !== !1 && (n !== void 0 || o !== void 0 || r !== void 0 || i !== void 0);
}
function Qc(e) {
  let { padding: t = 0, paddingTop: n, paddingBottom: o, paddingLeft: r, paddingRight: i } = e;
  return ga(e)
    ? {
        top: n !== void 0 ? n : t,
        bottom: o !== void 0 ? o : t,
        left: r !== void 0 ? r : t,
        right: i !== void 0 ? i : t,
      }
    : { top: t, bottom: t, left: t, right: t };
}
function ep({ top: e, left: t, bottom: n, right: o }) {
  return e === o && o === n && n === t ? `${e}px` : `${e}px ${o}px ${n}px ${t}px`;
}
function U0(e) {
  if (e === "none") return null;
  let t = e
      .trim()
      .split(/\s+/u)
      .map((a) => Qo(a)),
    [n, o, r, i] = t;
  switch (t.length) {
    case 1:
      return I(n) ? { top: n, right: n, bottom: n, left: n } : null;
    case 2:
      return !I(n) || !I(o) ? null : { top: n, right: o, bottom: n, left: o };
    case 3:
      return !I(n) || !I(o) || !I(r) ? null : { top: n, right: o, bottom: r, left: o };
    case 4:
      return !I(n) || !I(o) || !I(r) || !I(i) ? null : { top: n, right: o, bottom: r, left: i };
    default:
      return null;
  }
}
var tr = B(oe(), 1);
var rp = B(re(), 1),
  rO = (() => {
    let e = tr.default.forwardRef(function (n, o) {
      let {
          as: r = "div",
          direction: i = "vertical",
          distribution: a = "start",
          alignment: s = "center",
          gap: l = 10,
          wrap: u = !1,
          children: c,
          style: m,
          className: f,
          willChangeTransform: h,
          __fromCodeComponentNode: T,
          parentSize: V,
          __contentWrapperStyle: P,
          ...y
        } = n,
        b = nr(i),
        N = np(a),
        G = np(s),
        $ = ga(y) || y.padding ? ep(Qc(y)) : void 0,
        Z = $ === void 0 ? {} : { padding: $ },
        {
          width: de,
          height: ae,
          minWidth: qe,
          maxWidth: nt,
          minHeight: Xa,
          maxHeight: zr,
          ...Hr
        } = P ?? {},
        Xe = {
          ...m,
          display: "flex",
          flexDirection: b,
          flexWrap: u ? "wrap" : "nowrap",
          justifyContent: N,
          alignItems: G,
          alignContent: G,
          ...Z,
          ...Hr,
        };
      (No.applyWillChange({ willChangeTransform: h }, Xe, !0),
        T &&
          !zt(Bo(y)) &&
          ((y.width = "100%"), (y.height = "100%"), (y._constraints = { enabled: !0 })));
      let Mf = Mo(n),
        { children: Bf, props: Ef } = Lo(y, c),
        Ya = y.widthType ?? (y.width === "auto" ? 2 : 0),
        Ja = y.heightType ?? (y.height === "auto" ? 2 : 0),
        Af = tT(Bf, i, Ya, Ja),
        Ff = Co(Af, V ?? 1),
        Za = { "data-framer-component-type": "Stack" },
        Qa = y.__fromCanvasComponent;
      if ((Qa && (Za["data-framer-generated"] = !0), nT(l, N, u))) {
        let es = op(N);
        ((es || i !== "horizontal") && (Xe.columnGap = `${l}px`),
          (es || i !== "vertical") && (Xe.rowGap = `${l}px`));
      }
      return (
        Xe.width === void 0 && Ya === 2 && (Xe.width = "min-content"),
        Xe.height === void 0 && Ja === 2 && (Xe.height = "min-content"),
        (0, rp.jsx)(Ed, {
          as: r,
          background: Qa ? void 0 : "none",
          ...Ef,
          layoutId: Mf,
          ref: o,
          ...Za,
          style: Xe,
          className: f,
          layoutScroll: !0,
          children: Ff,
        })
      );
    });
    return (
      (e.defaultProps = { distribution: "start" }),
      (e.displayName = "Stack"),
      Zc(e, {
        direction: {
          type: "segmentedenum",
          options: ["horizontal", "vertical"],
          title: "Direction",
          defaultValue: "vertical",
        },
        distribution: {
          type: "enum",
          options: ["start", "center", "end", "space-between", "space-around", "space-evenly"],
          optionTitles: ["Start", "Center", "End", "Space Between", "Space Around", "Space Evenly"],
          title: "Distribute",
          defaultValue: "space-around",
        },
        alignment: {
          type: "segmentedenum",
          options: ["start", "center", "end"],
          title: "Align",
          defaultValue: "center",
        },
        gap: {
          type: "number",
          min: 0,
          title: "Gap",
          hidden: (t) =>
            t.distribution !== void 0 &&
            ["space-between", "space-around", "space-evenly"].includes(t.distribution),
          defaultValue: 10,
        },
        padding: {
          type: "fusednumber",
          toggleKey: "paddingPerSide",
          toggleTitles: ["Padding", "Padding per side"],
          valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
          valueLabels: ["t", "r", "b", "l"],
          min: 0,
          title: "Padding",
          defaultValue: 0,
        },
      }),
      e
    );
  })();
function tp(e) {
  return typeof e == "string" && e.endsWith("fr");
}
function er(e) {
  let t = parseFloat(e);
  return I(t) ? t : 0;
}
function tT(e, t, n, o) {
  return tr.default.Children.map(e, (r) => {
    if (!Gn(r) || !Hn(r)) return;
    let i = t === "vertical",
      a = {},
      s = !1,
      { style: l, size: u } = r.props,
      { width: c, height: m } = r.props;
    u !== void 0 && (c === void 0 && (c = u), m === void 0 && (m = u));
    let f = c,
      h = m;
    if (
      (tp(c) &&
        ((s = !0),
        (s = !0),
        i
          ? n === 2
            ? ((a.alignSelf = "stretch"), (f = "auto"))
            : (f = `${er(c) * 100}%`)
          : ((f = 1), (a.flexGrow = er(c)), (a.flexBasis = 0)),
        (a.width = f)),
      tp(m) &&
        ((s = !0),
        i
          ? ((h = 1), (a.flexGrow = er(m)), (a.flexBasis = 0))
          : o === 2
            ? ((a.alignSelf = "stretch"), (h = "auto"))
            : (h = `${er(m) * 100}%`),
        (a.height = h)),
      !s)
    )
      return r;
    let T = { ...l, ...a };
    return tr.default.cloneElement(r, { width: f, height: h, style: T });
  });
}
function op(e) {
  return e ? !["space-between", "space-around", "space-evenly", "stretch"].includes(e) : !1;
}
function nT(e, t, n) {
  return !(!e || (!n && !op(t)));
}
function nr(e) {
  switch (e) {
    case "vertical":
      return "column";
    case "horizontal":
      return "row";
    default:
      return e;
  }
}
function np(e) {
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
var or = ["auto", "pixelated"],
  dO = { imageRendering: void 0 },
  cO = { imageRendering: "auto" },
  oT = "imageRendering";
function pO(e) {
  return Dt(e) && !E(e.htmlContent) ? !1 : oT in e;
}
var rT = new Set(or);
function iT(e) {
  return p(e) && rT.has(e);
}
function fO(e) {
  return iT(e) ? e : "auto";
}
function ip(e) {
  switch (e) {
    case "auto":
      return "Smooth";
    case "pixelated":
      return "Sharp";
    default:
      return "Unknown";
  }
}
var rr = ["clip", "visible", "hidden", "auto"],
  aT = ["clip", "hidden"],
  sT = ["visible", "auto"],
  bO = { overflow: void 0, overflowX: void 0, overflowY: void 0 },
  ap = "overflow",
  TO = [ap, "overflowX", "overflowY"];
function sp(e) {
  return e ? ap in e : !1;
}
var lT = new Set(rr);
function CO(e) {
  return p(e) ? lT.has(e) : !1;
}
var uT = new Set(aT);
function VO(e) {
  return p(e) && uT.has(e);
}
var dT = new Set(sT);
function SO(e) {
  return p(e) && dT.has(e);
}
function lp(e) {
  return e === "auto" ? "Scroll" : On(e);
}
function RO(e) {
  if (!sp(e)) return !1;
  let t = e.resolveValue("overflow");
  switch (t) {
    case "hidden":
    case "auto":
      return !0;
    case "visible":
    case void 0:
      return e.resolveValue("overflowX") === "clip" && e.resolveValue("overflowY") === "clip";
    case "clip":
      return !(
        e.resolveValue("overflowX") === "visible" || e.resolveValue("overflowY") === "visible"
      );
    default:
      return !1;
  }
}
function NO(e) {
  return sp(e) ? e.overflow === "auto" || e.overflowX === "auto" || e.overflowY === "auto" : !1;
}
function PO(e, t) {
  return v(t) && !v(e.overflowX) && !E(e.overflowX) && e.overflowX === e.overflowY;
}
var up = { visible: "clip", clip: "visible", auto: "hidden", hidden: "auto" };
function vO(e, t, n, o = {}) {
  let r = e.resolveValue(t) || e.resolveValue(n);
  return r ? (o.preferSame ? r : up[r]) : "clip";
}
function IO(e, t) {
  return e === t || v(t) ? !0 : (v(e) && (e = "visible"), up[e] === t);
}
function dp(e) {
  let t = {};
  for (let n in e) {
    let o = e[n];
    if (Ue(o))
      if (o.type === "fusednumber")
        S(o.value) ? (t[n] = o.value) : Dc(o) && (t[n] = o.value.single);
      else if (o.type === "object" && g(o.value)) {
        if (!g(o.value)) continue;
        t[n] = dp(o.value);
      } else
        o.type === "array" && j(o.value)
          ? (t[n] = o.value
              .filter(Ue)
              .map((r) => (r.type === "object" ? (g(r.value) ? dp(r.value) : void 0) : r.value)))
          : (t[n] = o.value);
  }
  return t;
}
function cp(e) {
  switch (e) {
    case "boolean":
      return !0;
    case "number":
      return 0;
    case "string":
    case "link":
      return "";
    case "richtext":
      return "";
    case "color":
      return "#09F";
    case "fusednumber":
      return { single: 0, fused: [0, 0, 0, 0] };
    case "transition":
      return rt;
    case "border":
      return tt;
    case "object":
      return {};
    case "padding":
    case "borderradius":
      return "0px";
    case "array":
      return [];
    default:
      return;
  }
}
var cT = {
  boolean: !0,
  date: !0,
  enum: !0,
  number: !0,
  dimension: !0,
  string: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  sharedtype: !0,
  object: !0,
  controlReference: !0,
};
function pp(e) {
  if (e.type === "controlReference") {
    if (e.expectedType !== "enum") return !1;
    let t = ve(e.entityIdentifier);
    return Rt(t) && t.type === "collection";
  }
  return (
    e.type === "ref" ||
    e.type === "boolean" ||
    e.type === "string" ||
    e.type === "number" ||
    e.type === "date" ||
    e.type === "collectionreference" ||
    e.type === "multicollectionreference"
  );
}
function jO(e) {
  return e.type !== "controlReference"
    ? pp({ type: e.type })
    : e.expectedType === "segmentedenum"
      ? !1
      : pp({ type: e.type, expectedType: e.expectedType, entityIdentifier: e.entityIdentifier });
}
function pT(e) {
  return e === "WebPage" || e === "SmartComponent";
}
function fT(e, t) {
  return pT(t) ? Object.hasOwn(cT, e) : !1;
}
function mT(e, t) {
  return fT(e.type, t) ? (e.type !== "controlReference" ? !0 : e.expectedType !== "file") : !1;
}
function Q(e, t) {
  return mT(e, t) && e.optional === !0;
}
function Jt(e) {
  return !Vs(e) && e.type !== "divider";
}
function _O(e) {
  return e.type === "string";
}
function UO(e) {
  return e.type === "richtext";
}
function KO(e) {
  return e.type === "slug";
}
function $O(e) {
  return e.type === "date";
}
function yT(e) {
  return e.type === "collectionreference";
}
function hT(e) {
  return e.type === "multicollectionreference";
}
function qO(e) {
  return yT(e) || hT(e);
}
function xT(e) {
  return Jt(e) && sn(e.type);
}
var XO = xT;
function YO(e) {
  return e?.type === "divider";
}
function gT(e) {
  return e.type === "array";
}
function JO(e) {
  return e.type === "object";
}
function bT(e) {
  return e.type === "image";
}
function TT(e) {
  return gT(e) && e.itemVariables.length === 1 && e.itemVariables.every(bT);
}
function ba(e) {
  return TT(e) && e.displayGalleryAsArray !== !0;
}
var CT = { string: !0, richtext: !0, enum: !0 };
function VT(e) {
  return Jt(e) ? e.type in CT : !1;
}
function mp(e) {
  return VT(e) && e.preventLocalization === !0;
}
function ZO(e) {
  return e.fallbackValue === "associatedVariable" && !!e.associatedStringVariable;
}
var ST = {
  string: !0,
  richtext: !0,
  image: !0,
  file: !0,
  link: !0,
  linkrelvalues: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  array: !0,
  date: !0,
};
function yp(e) {
  return Object.hasOwn(ST, e.type);
}
var RT = {
  boolean: !0,
  date: !0,
  string: !0,
  number: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  controlReference: !0,
};
function nW(e) {
  return Jt(e) ? Object.hasOwn(RT, e.type) : !1;
}
var hp = Symbol("localizedOptionTitles");
function vn(e, t) {
  e[hp] = t;
}
function xp(e) {
  return e[hp] ?? null;
}
function Ta(e, t, n) {
  if (e === void 0) return t.push("u");
  if (e === null) return t.push("n");
  let o = typeof e;
  if (o === "string") return t.push(JSON.stringify(e));
  if (o !== "object") return t.push(String(e));
  if (Array.isArray(e)) {
    for (let i = 0; i < e.length; i++) (Ta(e[i], t, n), t.push(","));
    return;
  }
  let r = fc(e) ? e.keys() : Object.keys(e);
  r.sort();
  for (let i of r) {
    let a = e[i];
    (n && ((a = n(i, a, e)), a === void 0)) || (t.push(i), t.push(":"), Ta(a, t, n), t.push(","));
  }
}
function gp(e, t) {
  let n = [];
  return (Ta(e, n, t), n.join(""));
}
var NT = 1;
function uW(e) {
  return bs("sharedEnum", e, "default").value;
}
function bp(e) {
  let t = ve(e);
  if (!(!Rt(t) || t.type !== "sharedEnum")) return t.localIdName;
}
function PT(e) {
  let t = {},
    n = e.preventLocalization ? [] : e.cases;
  for (let [o, r] of n.entries())
    for (let [i, a] of Object.entries(r.nameLocalized ?? {})) {
      let s = a?.value;
      typeof s != "string" || s === "" || ((t[i] ??= e.cases.map(() => null)), (t[i][o] = s));
    }
  return {
    options: e.cases.map((o) => o.id),
    optionTitles: e.cases.map((o) => o.name),
    localizedOptionTitles: t,
  };
}
function dW(e) {
  return gp({ version: NT, definition: PT(e) });
}
var Ca = Symbol("fromOtherProject");
function gW(e) {
  let t = { ...e.properties },
    n = !1;
  for (let [o, r] of Object.entries(t))
    !g(r) || r.type !== "sharedtype" || ((t[o] = { ...r, [Ca]: !0 }), (n = !0));
  return n ? { ...e, properties: t } : e;
}
function Va(e) {
  return Ca in e && e[Ca] === !0;
}
function bW(e) {
  return e?.type === "sharedtype" && "kind" in e && e.kind === "enum";
}
function Vp(e, t) {
  let n = bp(t);
  if (!n) return;
  let o = e.get(n);
  return Ks(o) ? o : void 0;
}
var Tp = new WeakMap();
function vT(e, t) {
  if (t?.type === "enum") return t;
  if (t?.type !== "sharedtype") return;
  if (t.kind !== "enum") {
    t.kind;
    return;
  }
  if (Va(t)) return;
  let n = Vp(e, t.moduleIdentifier);
  if (!n) return;
  if (n.mutable) return Cp(t, n);
  let o = Tp.get(n);
  o || ((o = new WeakMap()), Tp.set(n, o));
  let r = o.get(t);
  return (r || ((r = Cp(t, n)), o.set(t, r)), r);
}
function TW(e, t) {
  return t?.type !== "sharedtype" || !e ? t : (vT(e, t) ?? t);
}
function Cp(e, t) {
  let n = t.cases.map((r) => r.id),
    o = {
      ...e,
      type: "enum",
      defaultValue: e.defaultValue && n.includes(e.defaultValue) ? e.defaultValue : void 0,
      options: n,
      optionTitles: t.cases.map((r) => r.name),
    };
  return (
    t.preventLocalization ||
      vn(
        o,
        t.cases.map((r) => r.nameLocalized)
      ),
    o
  );
}
function CW(e, t) {
  return IT(t, Vp(e, t.moduleIdentifier));
}
function IT(e, t) {
  let { kind: n, moduleIdentifier: o, ...r } = e;
  return (
    n !== "enum" && void 0,
    {
      ...r,
      type: "enum",
      cases: t?.cases ?? [],
      ...(t?.preventLocalization && { preventLocalization: !0 }),
    }
  );
}
function Sp(e, t) {
  let n = { type: e.type, title: t, description: e.description };
  switch (e.valueType) {
    case "number":
      return {
        ...n,
        valueType: e.valueType,
        defaultValue: e.initialValue,
        min: e.options?.min,
        max: e.options?.max,
        step: e.options?.step,
        displayStepper: e.options?.displayStepper,
      };
    case "boolean":
      return { ...n, valueType: e.valueType, defaultValue: e.initialValue };
    default:
      W(e);
  }
}
var kT = { color: "rgba(0,0,0,0.25)", x: 0, y: 2, blur: 5 },
  DT = {
    type: "box",
    color: "rgba(0,0,0,0.25)",
    x: 0,
    y: 2,
    inset: !1,
    blur: 5,
    spread: 0,
    diffusion: 0.5,
    focus: 0.5,
  };
function Rp(e, t) {
  let n = { ...t, ...e };
  return (n.id || (n.id = Gr()), n);
}
function LT(e) {
  if (!g(e) || !("id" in e)) return !1;
  for (let n of Wi) if (!(n in e)) return !1;
  return !0;
}
function ir(e) {
  return j(e) && e.every(LT);
}
function kW(e) {
  return Rp(e, kT);
}
function ar(e) {
  return Rp(e, DT);
}
function DW(e) {
  return { ...e, id: Gr() };
}
function LW(e, t) {
  return { ...e, ...t };
}
var wT = /,(?![^(]*\))/u,
  MT = /\s(?![^(]*\))/u,
  BT = /(?:#|0x)(?:[a-f\d]{3}|[a-f\d]{6})\b|(?:rgb|hsl)a?\([^)]*\)/u,
  Np = (e, t) => {
    let n = e.trim().toLowerCase().split(MT),
      o = n.includes("inset"),
      r = [],
      i = n.find((c) => BT.test(c)) ?? n[n.length - 1];
    for (let c of n) c !== "inset" && c !== i && r.push(Qo(c));
    let [a, s, l, u] = r;
    return ar({
      type: "box",
      inset: o,
      x: a,
      y: s,
      blur: l,
      spread: u,
      color: i,
      id: `box-shadow-${t}`,
    });
  };
function AW(e, t) {
  let n = Np(e, 0);
  if (
    n.color === "transparent" ||
    n.color === "rgba(0, 0, 0, 0)" ||
    (n.x === 0 && n.y === 0 && n.spread === 0 && n.blur === 0)
  )
    return;
  let o = x(n.color);
  if (!(!o || o.a <= 0)) return { ...n, id: t };
}
function Sa(e) {
  return e
    .split(wT)
    .map(Np)
    .filter((t) => {
      if (
        t.color === "transparent" ||
        t.color === "rgba(0, 0, 0, 0)" ||
        (t.x === 0 && t.y === 0 && t.spread === 0 && t.blur === 0)
      )
        return !1;
      let n = x(t.color);
      return n ? n.a > 0 : !1;
    });
}
function FW(e) {
  let t = e.boxShadow;
  if (!(!t || t === "none")) return { boxShadows: Sa(t) };
}
function _W(e) {
  return ir(e) || E(e) ? e : [];
}
function UW(e) {
  return p(e)
    ? Sa(e)
    : j(e) && e.every($u.is)
      ? e.map((t, n) => ar({ ...t, id: `box-shadow-${n}` }))
      : [];
}
function Pp(e) {
  let { id: t, ...n } = e;
  return n;
}
var ET = "alt";
function Ra(e) {
  return g(e) && ET in e;
}
var vp = "altLocalized";
function qW(e) {
  return g(e) && vp in e && !!e[vp];
}
var AT = "positionX",
  FT = "positionY";
function Ip(e) {
  return g(e) ? AT in e || FT in e : !1;
}
function Na(e) {
  return Ip(e) ? p(e.positionX) && p(e.positionY) : !1;
}
var OT = {};
function JW(e) {
  return Ip(e) ? e : OT;
}
function kp(e) {
  return e.embedId !== void 0 ? e.embedId : /-\d+$/u.test(e.id) ? lc(e.id) : e.id;
}
function tz(e) {
  let t = new Set();
  return Uc(
    e,
    {
      module(n) {
        let o = n.embedId;
        if (o === void 0) return n;
        if (!t.has(o)) return (t.add(o), n);
        let r = ge();
        return (t.add(r), { ...n, embedId: r });
      },
    },
    { normalize: !1 }
  );
}
var Zt = 16,
  rz = { rootFontSize: void 0 },
  Pa = "rootFontSize";
function iz(e) {
  return Pa in e;
}
function Dp(e) {
  return Pa in e && S(e[Pa]);
}
var Lp = "--framer-root-font-size";
function gz(e, t, n, o) {
  if (o) {
    let r = WT(t, o, n);
    if (S(r)) return r;
  }
  if (kt(e)) return e.getPrimaryVariant().rootFontSize;
  if (Oe(e)) {
    let r = e.layoutTemplateIdentifier;
    return r ? wp(r, n) : e.getPrimaryVariant().rootFontSize;
  }
  return HT(t.root, n);
}
function WT(e, t, n) {
  let o = ia(e, t);
  if (o) return sc(o) ? zT(e, n, o) : Dp(o) ? o.rootFontSize : Zt;
}
function zT(e, t, n) {
  let o = ac(e, n);
  if (!o) return Zt;
  let r = ve(o)?.localId;
  if (!r) return Zt;
  let i = t
    .forType("layoutTemplate")
    .getByLocalId(r)
    .annotations(null, "default")?.framerBreakpoints;
  if (!i || !rc(i)) return Zt;
  C(Yd(n), "Breakpoint node must have size properties");
  let a = jo(i, n.width);
  return a && S(i[a]?.rootFontSize) ? i[a].rootFontSize : Zt;
}
function HT(e, t) {
  if (e.layoutTemplateIdentifier) return wp(e.layoutTemplateIdentifier, t);
  if (!e.homePageNodeId) return;
  let n = t.forType("screen").getByStableName(e.homePageNodeId).annotations(null, "default");
  return Mp(n);
}
function wp(e, t) {
  let n = ve(e),
    o = t.forType("layoutTemplate").getByLocalId(n.localId).annotations(null, n.exportSpecifier);
  return Mp(o);
}
function Mp(e) {
  if (!e) return;
  let t = e.framerRootFontSize;
  if (S(t)) return t;
}
var Bp = /var\(--variable-reference-(?<variableId>[^)-]*)(?:-(?<providerId>[^)]*))?/;
function Sz(e) {
  let t = new RegExp(Bp, "g"),
    n = e.matchAll(t),
    o = [];
  for (let r of n) {
    if (!r.groups) continue;
    let { variableId: i, providerId: a } = r.groups,
      s = li(i, a);
    o.push(s);
  }
  return o;
}
function Rz(e) {
  return p(e) && e.startsWith("--");
}
function Nz(e) {
  let t = Bp.exec(e);
  if (t?.groups) {
    let { variableId: n, providerId: o } = t.groups;
    return li(n, o);
  }
}
function GT(e) {
  let t = e.providerId ? `-${e.providerId}` : "";
  return `--variable-reference-${e.id}${t}`;
}
function Ep(e) {
  return `var(${GT(e)})`;
}
function Pz(e) {
  return `calc(var(${Lp}, 1rem) * ${e})`;
}
var jT = /calc\(var\(--framer-root-font-size,\s*1rem\)\s*\*\s*(?<remValue>\d+(?:\.\d+)?)\)/u;
function vz(e) {
  let t = jT.exec(e);
  if (t?.groups) {
    let { remValue: n } = t.groups,
      o = parseFloat(n);
    return S(o) ? [o, "rem"] : void 0;
  }
}
var _T = new Set(["img", "br"]);
function Ap(e, t) {
  return J("ul", { dir: lr(e.textDirection) }, ...e.childNodes.map(t));
}
function Fp(e, t) {
  return J(
    "ol",
    {
      dir: lr(e.textDirection),
      start: e.start !== 1 ? e.start : void 0,
      style: e.listStyleType !== "decimal" ? { "--list-style-type": e.listStyleType } : void 0,
    },
    ...e.childNodes.map(t)
  );
}
function Op(e, t) {
  return J("blockquote", {}, ...e.childNodes.map(t));
}
function Wp(e, t) {
  return J(
    "figure",
    { class: "framer-table-wrapper" },
    J("table", {}, J("tbody", {}, ...e.childNodes.map((n) => UT(n, t))))
  );
}
function UT(e, t) {
  return J("tr", {}, ...e.childNodes.map((n) => KT(n, t)));
}
function KT(e, t) {
  return J(
    e.cellType === "header" ? "th" : "td",
    { colspan: e.columnSpan, rowspan: e.rowSpan },
    ...e.childNodes.map(t)
  );
}
function zp(e) {
  return e.type === "lineBreak" ? J("br", {}) : $T(e);
}
function $T(e) {
  let t = XT(e.text);
  return (
    e.bold && (t = J("strong", {}, t)),
    e.italic && (t = J("em", {}, t)),
    e.inlineCode && (t = J("code", {}, t)),
    e.link && (t = J("a", sr(e.link), t)),
    t
  );
}
function sr(e) {
  if (!e) return {};
  let {
    link: t,
    id: n,
    openInNewTab: o,
    smoothScroll: r,
    clickTrackingId: i,
    relValues: a,
    preserveParams: s,
    ...l
  } = e;
  return {
    "data-framer-link":
      t.type === "variableReference"
        ? `VariableReference:${JSON.stringify(t)}`
        : `Link:${JSON.stringify(t)}`,
    "data-framer-open-in-new-tab": o === !0 ? !0 : In(o),
    "data-framer-smooth-scroll": r === !0 ? !0 : In(r),
    "data-framer-click-tracking-id": typeof i == "string" ? i : In(i),
    rel: Array.isArray(a) && a.length > 0 ? a.join(" ") : void 0,
    "data-framer-rel": In(a),
    "data-framer-preserve-params": typeof s == "boolean" ? String(s) : In(s),
  };
}
function lr(e) {
  return e === "inherit" ? "auto" : e;
}
function J(e, t, ...n) {
  let o = "";
  for (let r in t) {
    let i = t[r];
    if (!(i === void 0 || i === !1)) {
      if (typeof i == "object") {
        r === "style" && (o += ` style="${qT(i)}"`);
        continue;
      }
      if (i === !0) {
        o += ` ${r}=""`;
        continue;
      }
      o += ` ${r}="${Hp(String(i))}"`;
    }
  }
  return _T.has(e) ? `<${e}${o}>` : `<${e}${o}>${n.join("")}</${e}>`;
}
function qT(e) {
  let t = "";
  for (let n in e) {
    let o = e[n];
    o !== void 0 && (t && (t += " "), (t += `${n}: ${Hp(o)};`));
  }
  return t;
}
function XT(e) {
  return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function Hp(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function In(e) {
  if (M(e)) return Ep(e);
}
function YT(e) {
  return Nn(e).childNodes.map(ur).join("");
}
function jp(e) {
  return typeof e == "string" ? e : YT(e);
}
function ur(e) {
  switch (e.type) {
    case "textBlock":
      return JT(e);
    case "bulletedList":
      return Ap(e, Gp);
    case "numberedList":
      return Fp(e, Gp);
    case "blockquote":
      return Op(e, ur);
    case "media":
      return ZT(e);
    case "module":
      return QT(e);
    case "table":
      return Wp(e, ur);
    default:
      W(e);
  }
}
function JT(e) {
  return J(e.tag, { dir: lr(e.textDirection) }, ...e.childNodes.map(zp));
}
function Gp(e) {
  let t = e.childNodes[0],
    n = t?.type === "textBlock" ? t.tag : "p";
  return J("li", { "data-preset-tag": n }, ...e.childNodes.map(ur));
}
function ZT(e) {
  return e.mediaType === "video"
    ? J("video", { class: "framer-image", src: e.src, ...sr(e.link) })
    : J("img", {
        alt: e.alt,
        "data-framer-width": e.pixelWidth,
        "data-framer-height": e.pixelHeight,
        ...sr(e.link),
        src: e.src,
        class: "framer-image",
      });
}
function QT(e) {
  return J("framer-module", {
    "data-module-identifier": e.identifier,
    "data-module-embed-id": kp(e),
    "data-module-props": JSON.stringify(e.props),
    "data-module-width": e.width,
    "data-module-alignment": e.alignment,
  });
}
var _p = Symbol("dataIdentifier");
function kn(e, t) {
  e[_p] = t;
}
function Fz(e) {
  return e[_p] ?? null;
}
var Up = ["page", "step", "location", "date", "time", "true", "false"],
  Wz = { ariaCurrent: void 0 },
  zz = { ariaCurrent: "page" },
  eC = "ariaCurrent";
function Hz(e) {
  return eC in e;
}
var Kp = ["menu", "listbox", "tree", "grid", "dialog", "true", "false"],
  jz = { ariaHaspopup: void 0 },
  _z = { ariaHaspopup: "menu" },
  tC = "ariaHaspopup";
function Uz(e) {
  return tC in e;
}
var $p = ["off", "polite", "assertive"],
  $z = { ariaLive: void 0 },
  qz = { ariaLive: "polite" },
  nC = "ariaLive";
function Xz(e) {
  return nC in e;
}
var qp = [
    "alert",
    "alertdialog",
    "application",
    "article",
    "banner",
    "blockquote",
    "button",
    "caption",
    "cell",
    "checkbox",
    "code",
    "columnheader",
    "combobox",
    "complementary",
    "contentinfo",
    "definition",
    "deletion",
    "dialog",
    "document",
    "emphasis",
    "feed",
    "figure",
    "form",
    "grid",
    "gridcell",
    "group",
    "heading",
    "img",
    "insertion",
    "link",
    "list",
    "listbox",
    "listitem",
    "log",
    "main",
    "mark",
    "marquee",
    "math",
    "menu",
    "menubar",
    "menuitem",
    "menuitemcheckbox",
    "menuitemradio",
    "meter",
    "navigation",
    "none",
    "note",
    "option",
    "paragraph",
    "presentation",
    "progressbar",
    "radio",
    "radiogroup",
    "region",
    "row",
    "rowgroup",
    "rowheader",
    "scrollbar",
    "search",
    "searchbox",
    "separator",
    "slider",
    "spinbutton",
    "status",
    "strong",
    "subscript",
    "superscript",
    "switch",
    "tab",
    "table",
    "tablist",
    "tabpanel",
    "term",
    "textbox",
    "time",
    "timer",
    "toolbar",
    "tooltip",
    "tree",
    "treegrid",
    "treeitem",
  ],
  Jz = { ariaRole: void 0 },
  Zz = { ariaRole: "button" };
function Qz(e) {
  return "ariaRole" in e;
}
var dr = [
    "normal",
    "multiply",
    "screen",
    "plus-lighter",
    "overlay",
    "darken",
    "lighten",
    "color-dodge",
    "color-burn",
    "hard-light",
    "soft-light",
    "difference",
    "exclusion",
    "hue",
    "saturation",
    "color",
    "luminosity",
  ],
  n1 = "multiply",
  o1 = { blendingMode: void 0 },
  oC = "blendingMode";
function r1(e) {
  return oC in e;
}
var rC = new Set(dr);
function i1(e) {
  return p(e) && rC.has(e);
}
var va = ["contain", "none"],
  l1 = { overscrollBehavior: void 0 },
  iC = "overscrollBehavior";
function u1(e) {
  return e ? iC in e : !1;
}
function d1(e) {
  return p(e) && (e === "contain" || e === "none");
}
var c1 = { overscrollBehavior: "contain" };
var cr = ["none", "auto"],
  m1 = { pointerEvents: void 0 },
  y1 = { pointerEvents: "none" },
  aC = "pointerEvents";
function h1(e) {
  return aC in e;
}
var Xp = new Set(cr);
function x1(e) {
  return p(e.pointerEvents) && Xp.has(e.pointerEvents);
}
function g1(e) {
  return p(e) && Xp.has(e);
}
var pr = ["none", "auto"],
  C1 = { userSelect: void 0 },
  V1 = { userSelect: "none" },
  sC = "userSelect";
function S1(e) {
  return sC in e;
}
var Yp = new Set(pr);
function R1(e) {
  return p(e.userSelect) && Yp.has(e.userSelect);
}
function N1(e) {
  return p(e) && Yp.has(e);
}
var Ia = ["text", "textarea", "email", "number", "tel", "url", "date", "time"],
  Jp = {
    text: "Text",
    textarea: "Text area",
    number: "Number",
    email: "Email",
    tel: "Phone number",
    url: "URL",
    date: "Date",
    time: "Time",
  };
function lC(e) {
  return p(e) && e in Jp;
}
function Zp(e) {
  return lC(e) ? Jp[e] : "Text";
}
function k1(e) {
  return E(e) || e === "date" || e === "time";
}
function D1(e) {
  return E(e) || e === "text";
}
var uC = "formTextInputType";
function dC(e) {
  return uC in e;
}
var L1 = {
  formTextInputType: void 0,
  formTextAreaResizable: void 0,
  formTextInputMinNumber: void 0,
  formTextInputMaxNumber: void 0,
  formInputMaxLength: void 0,
};
function w1(e) {
  return dC(e) && e.formTextInputType === "textarea";
}
var Qp = {
  stackDirection: {
    type: "enum",
    defaultValue: nr(Ad),
    options: Ao.map(nr),
    optionTitles: Ao.map(De),
    displaySegmentedControl: !0,
    optionIcons: ["direction-horizontal", "direction-vertical"],
  },
  stackDistribution: {
    type: "enum",
    defaultValue: Oo(Fd),
    options: Fo.map(Oo),
    optionTitles: Fo.map(De),
  },
  stackAlignment: {
    type: "enum",
    defaultValue: Oo(Od),
    options: Wo.map(_d),
    optionTitles: Wo.map(De),
  },
  gridItemColumnSpan: { type: "enum", defaultValue: 1, options: ra, optionTitles: Xd },
  gridItemRowSpan: { type: "enum", defaultValue: 1, options: zo, optionTitles: qd },
  userSelect: {
    type: "enum",
    defaultValue: "auto",
    options: pr.map((e) => e),
    optionTitles: pr.map(De),
  },
  overscrollBehavior: {
    type: "enum",
    defaultValue: "none",
    options: va.map((e) => e),
    optionTitles: va.map(De),
  },
  overflow: {
    type: "enum",
    defaultValue: "auto",
    options: rr.map((e) => e),
    optionTitles: rr.map(lp),
  },
  pointerEvents: {
    type: "enum",
    defaultValue: "auto",
    options: cr.map((e) => e),
    optionTitles: cr.map(De),
  },
  blendingMode: {
    type: "enum",
    defaultValue: "multiply",
    options: dr.map((e) => e),
    optionTitles: dr.map(De),
  },
  formTextInputType: {
    type: "enum",
    defaultValue: "text",
    options: [...Ia],
    optionTitles: Ia.map(Zp),
  },
  imageRendering: {
    type: "enum",
    defaultValue: "auto",
    displaySegmentedControl: !0,
    options: [...or],
    optionTitles: or.map(ip),
  },
  opacity: { type: "number", min: 0, max: 1, step: 0.01, defaultValue: 1, displayStepper: !1 },
  gap: { type: "gap" },
  padding: { type: "padding" },
  radius: { type: "borderradius" },
  tabIndex: { type: "number", min: -1, max: 5, step: 1, defaultValue: 0, displayStepper: !0 },
  ariaExpanded: { type: "boolean", defaultValue: !1 },
  ariaAtomic: { type: "boolean", defaultValue: !1 },
  ariaPressed: { type: "boolean", defaultValue: !1 },
  ariaChecked: { type: "boolean", defaultValue: !1 },
  ariaSelected: { type: "boolean", defaultValue: !1 },
  ariaReadonly: { type: "boolean", defaultValue: !1 },
  ariaRequired: { type: "boolean", defaultValue: !1 },
  ariaBusy: { type: "boolean", defaultValue: !1 },
  ariaModal: { type: "boolean", defaultValue: !0 },
  ariaCurrent: { type: "enum", defaultValue: "page", options: [...Up] },
  ariaHaspopup: { type: "enum", defaultValue: "menu", options: [...Kp] },
  ariaHidden: { type: "boolean", defaultValue: !1 },
  ariaDisabled: { type: "boolean", defaultValue: !1 },
  ariaRoleDescription: { type: "string", defaultValue: "" },
  ariaRole: { type: "enum", defaultValue: "button", options: [...qp] },
  ariaLive: { type: "enum", defaultValue: "polite", options: [...$p] },
  ariaDescription: { type: "string", defaultValue: "" },
  tickerEffectDirectionModifier: {
    type: "enum",
    defaultValue: "default",
    displaySegmentedControl: !0,
    options: oa,
    optionTitles: oa.map(Ud),
  },
};
function Z1(e) {
  return Object.hasOwn(Qp, e);
}
function ef(e) {
  let t = Qp[e];
  return (C(t, () => `unknown node property control: ${e}`), t);
}
var eH = "framer/nodePropertyDefinitions",
  cC = [
    "stackDirection",
    "stackDistribution",
    "stackAlignment",
    "gridItemColumnSpan",
    "gridItemRowSpan",
    "userSelect",
    "overscrollBehavior",
    "overflow",
    "pointerEvents",
    "blendingMode",
    "formTextInputType",
    "imageRendering",
    "ariaCurrent",
    "ariaHaspopup",
    "ariaRole",
    "ariaLive",
    "tickerEffectDirectionModifier",
  ],
  pC = new Set(cC);
function tf(e) {
  return typeof e == "string" && pC.has(e);
}
var fC = "src";
function fr(e) {
  return g(e) && p(e[fC]);
}
function mr(e, t) {
  switch (e.valueType) {
    case "number":
      return typeof t == "number" && Number.isFinite(t);
    case "boolean":
      return typeof t == "boolean";
    default:
      return !1;
  }
}
function aH(e, t) {
  if (mr(e, t)) return t;
  if (mr(e, e.defaultValue)) return e.defaultValue;
  switch (e.valueType) {
    case "number":
      return 0;
    case "boolean":
      return !1;
    default:
      return 0;
  }
}
var Nr = B(af(), 1);
function vH(e, t) {
  if (e.type === "motionvalue") return M(t) || mr(e, t);
  if (!La(e.type, t)) return !1;
  switch (e.type) {
    case "enum":
    case "segmentedenum":
      return M(t) || (ye(t) && t.outputType === "enum") ? !0 : e.options.some((n) => n === t);
  }
  return !0;
}
function La(e, t) {
  if (M(t)) return !0;
  if (ye(t)) return t.outputType === e;
  switch (e) {
    case "motionvalue":
      return te(t) || (S(t) && Number.isFinite(t));
    case "boolean":
      return te(t);
    case "number":
      return S(t);
    case "string":
    case "dimension":
    case "color":
    case "componentinstance":
      return p(t);
    case "slot":
      return p(t) || j(t);
    case "richtext":
      return mt(t) || (0, Nr.isElement)(t);
    case "responsiveimage":
      return fr(t);
    case "file":
    case "image":
      return p(t) || v(t);
    case "enum":
    case "segmentedenum":
      return !!(t === void 0 || t === null || te(t) || S(t) || p(t));
    case "fusednumber":
      return Sn(t);
    case "eventhandler":
      return j(t) && t.every(Eo);
    case "transition":
      return Qn(t);
    case "border":
      return Vn(t);
    case "link":
      return ft(Uo(t));
    case "linkrelvalues":
      return j(t) && t.every(ma);
    case "date":
      return t === void 0 ? !0 : p(t);
    case "object":
      return g(t);
    case "cursor":
      return p(t);
    case "boxshadow":
      return ir(t);
    case "gap":
    case "padding":
    case "borderradius":
      return p(t);
    case "collectionreference":
    case "sharedtype":
      return p(t);
    case "multicollectionreference":
      return j(t) && t.every(p);
    case "trackingid":
      return p(t);
    case "array":
      return j(t);
    case "vectorsetitem":
      return (p(t) && Pe(t)) || (0, Nr.isValidElementType)(t);
    case "ref":
    case "changehandler":
      return !1;
    case "location":
      return Ko(t);
    case "font":
    case "pagescope":
    case "customcursor":
    case "scrollsectionref":
    case null:
      return !1;
    default:
      W(e);
  }
}
function me(e, t) {
  return La(e, t) && !E(t) ? t : cp(e);
}
function L(e) {
  return e.name || "Unknown";
}
function FH(e, t) {
  switch (e.type) {
    case "boolean":
      return wa(e, t);
    case "number":
      return Ma(e, t);
    case "color":
      return Ba(e);
    case "string":
      return Ea(e, t);
    case "image":
      return Aa(e);
    case "link":
      return Fa(e);
    case "date":
      return Oa(e, t);
    default:
      return W(e);
  }
}
function wa(e, t) {
  let { enabledTitle: n, disabledTitle: o } = e.options ?? {};
  return {
    type: e.type,
    title: L(e),
    enabledTitle: n,
    disabledTitle: o,
    description: e.description,
    optional: Q(e, t) ? !0 : void 0,
  };
}
function Ma(e, t) {
  let { min: n, max: o, step: r, unit: i, displayStepper: a } = e.options ?? {};
  return {
    type: e.type,
    title: L(e),
    min: n,
    max: o,
    step: r,
    unit: i,
    displayStepper: a,
    description: e.description,
    optional: Q(e, t) ? !0 : void 0,
  };
}
function Ba(e) {
  return { type: e.type, title: L(e), description: e.description };
}
function Ea(e, t) {
  let { placeholder: n, displayTextArea: o } = e.options ?? {};
  return {
    type: e.type,
    title: L(e),
    placeholder: n,
    displayTextArea: o,
    description: e.description,
    preventLocalization: e.preventLocalization,
    optional: Q(e, t) ? !0 : void 0,
  };
}
function Aa(e) {
  return { type: "responsiveimage", title: L(e), description: e.description };
}
function Fa(e) {
  return { type: e.type, title: L(e), description: e.description };
}
function Oa(e, t) {
  let n = {
    type: e.type,
    title: L(e),
    description: e.description,
    optional: Q(e, t) ? !0 : void 0,
  };
  return (e.options?.displayTime && (n.displayTime = !0), n);
}
function yG(e) {
  return e === "enum" || e === "file";
}
function hG(e) {
  return e.type === "controlReference"
    ? e.expectedType === "segmentedenum"
      ? "enum"
      : e.expectedType
    : e.type;
}
function xG(e) {
  switch (e.type) {
    case "slug":
      return "string";
    case "sharedtype":
      return e.kind;
    case "controlReference":
    case "nodePropertyControlReference":
      return e.expectedType === "segmentedenum" ? "enum" : e.expectedType;
    default:
      return e.type;
  }
}
var hC = {
  responsiveimage: "image",
  fusednumber: null,
  slot: null,
  changehandler: null,
  font: null,
  pagescope: null,
};
function gG(e) {
  return to(e) ? e : hC[e];
}
var xC = ["eventhandler"];
function bG(e) {
  return xC.includes(e.type);
}
function TG(e) {
  return yp(e) ? (e.required ?? !1) : !1;
}
var gC = {
  number: !0,
  enum: !0,
  boolean: !0,
  string: !0,
  richtext: !0,
  color: !0,
  image: !0,
  responsiveimage: !0,
  file: !0,
  transition: !0,
  boxshadow: !0,
  link: !0,
  date: !0,
  array: !0,
  object: !0,
  fusednumber: !0,
  font: !0,
  pagescope: !0,
  scrollsectionref: !0,
  customcursor: !0,
  border: !0,
  cursor: !0,
  gap: !0,
  padding: !0,
  borderradius: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  trackingid: !0,
  location: !0,
  vectorsetitem: !0,
  eventhandler: !0,
};
function lf(e) {
  return Object.hasOwn(gC, e.type);
}
function CG(e) {
  return e?.type === "array" && e.control.type === "object";
}
function VG(e) {
  return e.type === "array";
}
function bC(e, t, n, o) {
  let r = {},
    i = ba(n);
  for (let s of n.itemVariables) {
    if (!Jt(s)) continue;
    let l = Wa(e, t, s, o);
    l &&
      (C(lf(l), "Expected array item property control to be usable in an object"),
      i && l.type === "responsiveimage" ? (r[s.id] = VC(l)) : (r[s.id] = l));
  }
  let a = n.initialValue?.map((s) => {
    let l = {};
    if (!s || s.type !== "object" || !g(s.value)) return l;
    for (let u in s.value) {
      let c = s.value[u];
      if (!c) continue;
      let m = uf(c);
      v(m) || (l[u] = m);
    }
    return l;
  });
  return {
    type: n.type,
    control: { type: "object", controls: r },
    title: L(n),
    description: n.description,
    minCount: n.minCount,
    maxCount: n.maxCount,
    displayGalleryAsArray: n.displayGalleryAsArray === !0 ? !0 : void 0,
    __vekterDefault: a,
  };
}
function TC(e, t, n, o) {
  let r = {};
  for (let a of n.fieldVariables) {
    let s = Wa(e, t, a, o);
    s && (C(lf(s), "Expected object field control to be usable in an object"), (r[a.id] = s));
  }
  let i = Q(n, o);
  return {
    type: n.type,
    controls: r,
    title: L(n),
    description: n.description,
    optional: i ? !0 : void 0,
    __vekterDefault: i ? void 0 : CC(n),
  };
}
function CC(e) {
  let t = {};
  for (let n of e.fieldVariables) {
    let o = uf(e.initialValue[n.id]);
    v(o) || (t[n.id] = o);
  }
  return t;
}
function VC(e) {
  let { __defaultAssetReference: t, __vekterDefault: n, ...o } = e;
  return o;
}
function uf(e) {
  if (!Ue(e)) return;
  let t = e.type;
  if (sn(t))
    switch (t) {
      case "image": {
        if (!p(e.value)) return;
        let n, o, r;
        return (
          Ra(e) && (n = e.alt),
          Na(e) && ((o = e.positionX), (r = e.positionY)),
          { assetReference: e.value, alt: n, positionX: o, positionY: r }
        );
      }
      case "boolean":
        return te(e.value) ? e.value : void 0;
      case "number":
        return S(e.value) ? e.value : void 0;
      case "string":
      case "color":
      case "date":
      case "file":
        return p(e.value) ? e.value : void 0;
      case "richtext":
        return mt(e.value) ? e.value : void 0;
      case "link":
        return ft(e.value) ? e.value : void 0;
      case "vectorsetitem":
        return p(e.value) && Pe(e.value) ? e.value : void 0;
      default:
        W(t);
    }
}
function SG(e, t, n) {
  if (!ba(e)) return SC(t, n);
}
function SC(e, t) {
  if (!Q(e, t)) return RC(e);
}
function RC(e) {
  switch (e.type) {
    case "image":
      return p(e.initialValue) ? { type: "image", value: e.initialValue } : e.initialValue;
    case "boolean":
      return { type: "boolean", value: e.initialValue };
    case "number":
      return { type: "number", value: e.initialValue };
    case "string":
      return { type: "string", value: e.initialValue };
    case "richtext":
      return { type: "richtext", value: e.initialValue };
    case "color":
      return { type: "color", value: e.initialValue };
    case "date":
      return { type: "date", value: e.initialValue };
    case "file":
      return { type: "file", value: e.initialValue };
    case "link":
      return { type: "link", value: Uo(e.initialValue) };
    case "vectorsetitem":
      return { type: "vectorsetitem", value: e.initialValue.identifier };
    default:
      W(e);
  }
}
function NC(e, t) {
  let n = Q(e, t);
  return { ...wa(e, t), defaultValue: n ? void 0 : me(e.type, e.initialValue) };
}
function yt(e, t) {
  let n = Q(e, t);
  return { ...Ma(e, t), defaultValue: n ? void 0 : me(e.type, e.initialValue) };
}
function PC(e) {
  let t = da(e.initialValue) ? e.initialValue : Vo.toFormatString(e.initialValue);
  return { ...Ba(e), defaultValue: me(e.type, t) };
}
function vC(e, t) {
  let { min: n, max: o, step: r, units: i, literals: a } = e.options ?? {},
    s = Q(e, t);
  return {
    type: e.type,
    title: L(e),
    defaultValue: s ? void 0 : me(e.type, e.initialValue),
    min: n,
    max: o,
    step: r,
    units: i,
    literals: a,
    description: e.description,
    optional: s ? !0 : void 0,
  };
}
function IC(e, t) {
  let n = Q(e, t);
  return {
    ...Ea(e, t),
    defaultValue: n ? void 0 : me(e.type, e.initialValue),
    maxLength: e.options?.maxLength,
  };
}
function kC(e) {
  let { placeholder: t, maxLength: n } = e.options ?? {};
  return {
    type: e.type,
    title: L(e),
    defaultValue: jp(me(e.type, e.initialValue)),
    placeholder: t,
    maxLength: n,
    description: e.description,
    preventLocalization: e.preventLocalization,
  };
}
function DC(e) {
  let t = Aa(e);
  if (
    (p(e.initialValue) && (t.__defaultAssetReference = e.initialValue),
    Ue(e.initialValue) && p(e.initialValue.value))
  ) {
    let n = e.initialValue.value;
    t.__defaultAssetReference = n;
    let o = { assetReference: n };
    ((t.__vekterDefault = o),
      Ra(e.initialValue) && p(e.initialValue.alt) && (o.alt = e.initialValue.alt),
      Na(e.initialValue) &&
        ((o.positionX = e.initialValue.positionX), (o.positionY = e.initialValue.positionY)));
  }
  return t;
}
function LC(e) {
  let t = e.allowedFileTypes.map((r) => r.extension),
    n = new Set(t),
    o = Array.from(n).filter(Boolean);
  return {
    type: "file",
    title: L(e),
    allowedFileTypes: o,
    __defaultAssetReference: me(e.type, e.initialValue),
    description: e.description,
  };
}
function wC(e, t, n, o) {
  let r = EC(e, t, n, o);
  return r ? { type: n.type, title: L(n), payload: r } : { type: n.type, title: L(n) };
}
var MC = {
  boolean: !0,
  number: !0,
  string: !0,
  color: !0,
  date: !0,
  link: !0,
  image: !0,
  responsiveimage: !0,
};
function BC(e) {
  return Object.hasOwn(MC, e.type);
}
function EC(e, t, n, o) {
  if (!n.payload) return;
  let r = {};
  for (let i of n.payload) {
    let a = Wa(e, t, i, o);
    a && BC(a) && (r[i.id] = a);
  }
  return yu(r) ? void 0 : r;
}
function AC(e) {
  return { type: e.type, title: L(e), description: e.description };
}
function FC(e) {
  return { type: e.type, title: L(e), description: e.description };
}
function OC(e) {
  return { type: e.type, title: L(e), description: e.description, defaultValue: e.initialValue };
}
function WC(e) {
  let t = me(e.type, e.initialValue);
  return {
    type: e.type,
    title: L(e),
    defaultValue: t ? tl(t) : void 0,
    description: e.description,
  };
}
function zC(e) {
  return { type: e.type, title: L(e), defaultValue: e.initialValue, description: e.description };
}
function HC(e) {
  let t = me(e.type, e.initialValue),
    n = t ? Sc(t) : void 0;
  return { type: e.type, title: L(e), description: e.description, defaultValue: n };
}
function GC(e) {
  return {
    type: e.type,
    title: L(e),
    defaultValue: e.initialValue.map(Pp),
    description: e.description,
  };
}
function jC(e) {
  return { type: e.type, title: L(e), description: e.description, defaultValue: e.initialValue };
}
function _C(e) {
  return { type: e.type, title: L(e), description: e.description, defaultValue: e.initialValue };
}
function UC(e) {
  return { type: e.type, title: L(e), description: e.description, defaultValue: e.initialValue };
}
function KC(e, t) {
  let n = Q(e, t);
  return {
    type: e.type,
    title: L(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: n ? void 0 : e.initialValue,
    optional: n ? !0 : void 0,
  };
}
function $C(e, t) {
  let n = Q(e, t);
  return {
    type: e.type,
    title: L(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: n ? void 0 : e.initialValue,
    optional: n ? !0 : void 0,
  };
}
function qC(e) {
  return { type: e.type, title: L(e), description: e.description };
}
function XC(e) {
  return {
    type: e.type,
    title: L(e),
    description: e.description,
    setModuleId: e.setModuleId,
    defaultValue: e.initialValue,
  };
}
function YC(e) {
  return Fa(e);
}
function JC(e) {
  return { type: e.type, title: L(e), description: e.description, defaultValue: e.initialValue };
}
function ZC(e, t) {
  let n = Q(e, t);
  return { ...Oa(e, t), defaultValue: n ? void 0 : me(e.type, e.initialValue) };
}
function QC(e, t) {
  let n = Q(e, t),
    o,
    r = [],
    i = [],
    a = [];
  e.cases.forEach((l) => {
    (r.push(l.id),
      i.push(l.name),
      a.push(l.nameLocalized),
      !n && e.initialValue === l.id && (o = l.id));
  });
  let s = {
    type: e.type,
    title: L(e),
    defaultValue: o,
    options: r,
    optionTitles: i,
    description: e.description,
    optional: n ? !0 : void 0,
  };
  return (mp(e) || vn(s, a), s);
}
function sf(e, t) {
  switch (e) {
    case "enum":
    case "sharedtype":
      return t === "enum" || t === "segmentedenum";
    default:
      return e === t;
  }
}
function eV(e, t) {
  let n = ve(t);
  if (gs(n)) {
    let o = e.getNode(n.moduleId);
    if (o) return o.codeComponentIdentifier;
  }
  return t;
}
function tV(e, t, n) {
  if (n.type === "nodePropertyControlReference") {
    if (!tf(n.controlKey)) return null;
    let a = ef(n.controlKey);
    return (
      C(
        a && sf(a.type, n.expectedType),
        () => `incompatible node property control: ${n.controlKey} ${n.expectedType}`
      ),
      a
    );
  }
  let o = eV(e, n.entityIdentifier),
    r = t.componentForIdentifier(o);
  if (!r?.properties || (r.type !== "component" && r.type !== "data")) return null;
  let i = r.properties[n.controlKey];
  return !i || !sf(i.type, n.expectedType) ? null : i;
}
function nV(e, t) {
  let n = Q(e, t);
  return {
    type: e.type,
    kind: e.kind,
    moduleIdentifier: e.moduleIdentifier,
    title: L(e),
    description: e.description,
    defaultValue: n ? void 0 : e.initialValue,
    optional: n ? !0 : void 0,
  };
}
function oV(e, t, n, o) {
  let r = tV(e, t, n);
  if (!r) return null;
  let i = n.type === "controlReference" && Q(n, o);
  switch (n.expectedType) {
    case "enum":
    case "segmentedenum": {
      if (r.type === "sharedtype") {
        if (Va(r)) return null;
        let s = {
          type: "sharedtype",
          kind: r.kind,
          moduleIdentifier: r.moduleIdentifier,
          title: L(n),
          defaultValue: i || !p(n.initialValue) ? void 0 : n.initialValue,
          description: n.description,
          optional: i ? !0 : void 0,
        };
        return (
          n.type === "controlReference" &&
            kn(s, { dataIdentifier: n.entityIdentifier, enumFieldKey: n.controlKey }),
          s
        );
      }
      if (r.type !== "enum") return null;
      let a = {
        type: "enum",
        title: L(n),
        options: r.options,
        optionTitles: r.optionTitles,
        displaySegmentedControl: r.displaySegmentedControl,
        defaultValue: i ? void 0 : me(n.expectedType, n.initialValue),
        optionIcons: r.optionIcons,
        description: n.description,
        optional: i ? !0 : void 0,
      };
      if (n.type === "controlReference") {
        let s = rV(e, t, n, r.options);
        s && vn(a, s);
      }
      return a;
    }
    case "file":
      return r.type !== "file"
        ? null
        : {
            type: "file",
            title: L(n),
            allowedFileTypes: r.allowedFileTypes,
            description: n.description,
            __defaultAssetReference: p(n.initialValue) ? n.initialValue : void 0,
          };
    default:
      throw Error("Unsupported control reference type");
  }
}
function rV(e, t, n, o) {
  if (!Pe(n.entityIdentifier)) return null;
  let i = Wu(e, n.entityIdentifier)?.getPropertyControls(e, t)[n.controlKey];
  if (i?.type !== "enum") return null;
  let a = xp(i);
  return a ? o.map((s) => a[i.options.indexOf(s)]) : null;
}
function iV(e, t) {
  return {
    type: "string",
    title: L(t),
    description: t.description,
    preventLocalization: e.root.translatePagePaths === "no",
  };
}
var aV = { string: !0, richtext: !0 };
function RG(e) {
  return e.type in aV;
}
function Wa(e, t, n, o) {
  switch (n.type) {
    case "array":
      return bC(e, t, n, o);
    case "object":
      return TC(e, t, n, o);
    case "boolean":
      return NC(n, o);
    case "number":
      return yt(n, o);
    case "motionvalue":
      return Sp(n, L(n));
    case "dimension":
      return vC(n, o);
    case "color":
      return PC(n);
    case "string":
      return IC(n, o);
    case "richtext":
      return kC(n);
    case "image":
      return DC(n);
    case "eventhandler":
      return wC(e, t, n, o);
    case "link":
      return YC(n);
    case "linkrelvalues":
      return JC(n);
    case "date":
      return ZC(n, o);
    case "enum":
      return QC(n, o);
    case "file":
      return LC(n);
    case "ref":
      return { type: n.type, title: L(n), description: n.description };
    case "scrollsectionref":
      return AC(n);
    case "customcursor":
      return FC(n);
    case "cursor":
      return OC(n);
    case "transition":
      return WC(n);
    case "border":
      return HC(n);
    case "location":
      return zC(n);
    case "boxshadow":
      return GC(n);
    case "gap":
      return jC(n);
    case "padding":
      return _C(n);
    case "borderradius":
      return UC(n);
    case "collectionreference":
      return KC(n, o);
    case "multicollectionreference":
      return $C(n, o);
    case "trackingid":
      return qC(n);
    case "vectorsetitem":
      return XC(n);
    case "sharedtype":
      return nV(n, o);
    case "nodePropertyControlReference":
    case "controlReference":
      return oV(e, t, n, o);
    case "slug":
      return iV(e, n);
    default:
      W(n);
  }
}
function NG(e) {
  switch (e) {
    case "motionvalue":
      return "Motion Value";
    case "array":
      return "Array";
    case "object":
      return "Object";
    case "boolean":
      return "Featured";
    case "color":
      return "Tint";
    case "image":
      return "Image";
    case "number":
      return "Count";
    case "dimension":
      return "Size";
    case "string":
      return "Name";
    case "richtext":
      return "Content";
    case "link":
      return "Link";
    case "linkrelvalues":
      return "Link Rel";
    case "date":
      return "Date";
    case "sharedtype":
    case "enum":
      return "Option";
    case "file":
      return "File";
    case "gap":
      return "Gap";
    case "padding":
      return "Padding";
    case "borderradius":
      return "Radius";
    case "collectionreference":
      return "Reference";
    case "location":
      return "Location";
    case "multicollectionreference":
      return "Multi-Reference";
    case "trackingid":
      return "Tracking";
    case "vectorsetitem":
      return "Icon";
    case "eventhandler":
      return "Click";
    case "ref":
      return "Ref";
    case "scrollsectionref":
      return "Scroll Section";
    case "customcursor":
    case "cursor":
      return "Cursor";
    case "transition":
      return "Transition";
    case "border":
      return "Border";
    case "boxshadow":
      return "Shadow";
    case "nodePropertyControlReference":
    case "controlReference":
      return "Control Reference";
    case "slug":
      return "Slug";
  }
}
function PG(e) {
  return e ? It(e) || kt(e) || Gs(e) || Oe(e) : !1;
}
var U = class extends Map {};
var df = B(Of(), 1),
  ht = "previousItemId";
function wG(e) {
  return Pr(ht, "Previous", e.instanceIdentifier);
}
function MG({ name: e, dataIdentifier: t }) {
  return [
    {
      id: "id",
      name: e ? (0, df.singular)(e) : "Unknown",
      type: "collectionreference",
      dataIdentifier: t,
      initialValue: void 0,
      exposeInProps: !0,
    },
    uV(),
    cV(),
    Pr(ht, "Previous", t),
    Pr(xt, "Next", t),
  ];
}
function Pr(e, t, n) {
  return {
    type: "collectionreference",
    name: t,
    id: e,
    dataIdentifier: n,
    initialValue: void 0,
    exposeInProps: !0,
  };
}
var xt = "nextItemId";
function BG(e) {
  return Pr(xt, "Next", e.instanceIdentifier);
}
function EG(e) {
  return e === ht || e === xt;
}
var lV = "createdAt";
function uV() {
  return { type: "date", name: "Created", id: lV, initialValue: void 0, exposeInProps: !0 };
}
var dV = "updatedAt";
function cV() {
  return { type: "date", name: "Updated", id: dV, initialValue: void 0, exposeInProps: !0 };
}
var FG = { hookIdentifier: void 0 },
  pV = "hookIdentifier";
function fV(e) {
  return !!(e && pV in e);
}
function Dn(e) {
  return fV(e) && e.hookIdentifier !== void 0;
}
var gt = ".";
function KG(e, t, n) {
  return e === ht || e === xt ? n.length === 0 : !n.includes(t);
}
function mV(e, t) {
  return e === t || yV(e, t);
}
function yV(e, t) {
  return e.endsWith(t) && e[e.length - t.length - 1] === gt;
}
function cf(e, t) {
  return e.startsWith(t) && e[t.length] === gt;
}
function $G(e) {
  return cf(e, ht) || cf(e, xt);
}
function Qt(e) {
  return e.includes(gt);
}
function qG(e) {
  return Qt(e.id);
}
function vr(e, t) {
  return e ? e + gt + t : t;
}
function XG(e) {
  let t = e.lastIndexOf(gt);
  if (!(t < 0)) return e.slice(0, t);
}
function YG(e, t, n) {
  let o = vr(e, t);
  return hl(o, n);
}
function hV(e) {
  return e === "id";
}
function JG(e) {
  return mV(e, "id");
}
function ZG(e) {
  let t = Object.entries(e.properties);
  for (let [n, o] of t)
    if (!hV(n) && (o?.type === "collectionreference" || o?.type === "multicollectionreference"))
      return !0;
  return !1;
}
function xV(e) {
  return e.split(gt);
}
function gV(e) {
  return e.join(gt);
}
function QG(e) {
  if (nu(e) && M(e.fillImage) && Qt(e.fillImage.id)) return e.fillImage;
  if (Dt(e)) {
    if (Cl(e.textContent) && Qt(e.textContent.startValue.id)) return e.textContent.startValue;
    if (M(e.htmlContent) && Qt(e.htmlContent.id)) return e.htmlContent;
    if (M(e.textContent) && Qt(e.textContent.id)) return e.textContent;
  }
}
function ej(e, t, n, o, r) {
  if (!Qt(n)) return { collectionItemNode: o, collectionNode: r, variableId: n };
  let i = pf(e, t, n, o, r);
  if (i.length === 0) return;
  let a;
  i.length === 1 ? (a = i[0]) : i.length > 1 && (a = i[i.length - 2]);
  let { collectionItemNode: s, variableId: l } = a ?? {};
  if (!s || !l) return;
  let u = e.getNodeWithTrait(s.parentid, Un);
  if (u) return { collectionItemNode: s, collectionNode: u, variableId: l };
}
function pf(e, t, n, o, r) {
  let i = xV(n),
    a = i[0] === xt,
    s = i[0] === ht;
  if (a || s) {
    let c = a ? 1 : -1,
      m = r.getSortedChildren("public-only", "group-drafts"),
      f = m.findIndex((T) => T.id === o.id);
    if (f === -1) return [];
    let h = m[f + c];
    return h ? pf(e, t, gV(i.slice(1)), h, r) : [];
  }
  let l = [{ collectionItemNode: o, variableId: i[0] }],
    u = o;
  for (let c = 0; c < i.length; c++) {
    let m = i[c];
    if (!m) break;
    let f = u.getControlProp(m);
    if (f?.type !== "collectionreference") break;
    C(!M(f.value), "Collections don't support variables");
    let h = e.getNodeWithTrait(f.value, Us);
    if (!h) break;
    u = h;
    let T = i[c + 1];
    if (!T) break;
    l.push({ collectionItemNode: u, variableId: T });
  }
  return l;
}
function bV(e) {
  return e.title ?? e.name;
}
function lj(e) {
  return e.replace(/^\.\/(.*)\.(?:tsx|ts|js)$/u, "$1");
}
function uj(e) {
  let t = new U();
  for (let n in e) {
    let o = e[n];
    if (o && (t.set(n, o), o.type === "object"))
      for (let r in o.controls) {
        let i = o.controls[r];
        i && t.set(vr(n, r), { ...i, title: i.title ?? On(r) });
      }
  }
  return t;
}
function dj(e, t) {
  let n = new U();
  for (let o in e) {
    let r = e[o];
    if (!r) continue;
    let i = "defaultValue" in r ? r.defaultValue : void 0,
      a = t ? t[o] : i;
    if ((n.set(o, a), r.type === "object"))
      for (let s in r.controls) {
        let l = r.controls[s];
        if (!l) continue;
        let u = "defaultValue" in l ? l.defaultValue : void 0,
          c = g(a) ? a[s] : void 0;
        n.set(vr(o, s), t ? c : (c ?? u));
      }
  }
  return n;
}
var za = "_hook";
function ff(e) {
  return `${e}${za}`;
}
function TV(e) {
  return !!e?.endsWith(za);
}
function Ir(e) {
  if (!(!e || !TV(e))) return e.slice(0, -za.length);
}
function cj(e, t) {
  let n = Ir(e);
  if (!n) return;
  let o = t.get(n);
  if (o) return ff(o);
}
function mf(e, t) {
  if (e.getPrimaryId() === t) return e;
  for (let n of e.ancestors()) if (n.getPrimaryId() === t) return n;
}
function pj(e, t) {
  if (!t) return;
  let n = Ir(t);
  if (!n) return;
  let o = mf(e, n);
  return Dn(o) ? o.hookIdentifier : void 0;
}
function fj(e, t, n, o) {
  if (!t) return;
  let r = Ir(t);
  if (!r) return;
  let i = mf(e, r);
  if (!Dn(i)) return;
  let a = i.cache.getHookCache().getMaps(i.hookIdentifier, n);
  if (!a) return;
  let s = o?.get(t);
  return s ? { ...a, valueMap: s } : a;
}
function yf(e, t, n) {
  if (!Dn(e)) return;
  let o = e.cache.getHookCache().getMaps(e.hookIdentifier, t);
  if (!o) return;
  let r = ff(e.getPrimaryId()),
    i = n?.get(r) ?? o.valueMap;
  return {
    providerId: r,
    sourceIdentifier: e.hookIdentifier,
    variableMap: o.variableMap,
    controlMap: o.controlMap,
    valueMap: i,
  };
}
function mj(e, t, n) {
  let o = Ir(n);
  if (!o) return;
  let r = e.get(o);
  if (!Dn(r)) return;
  let i = t.hookForIdentifier(r.hookIdentifier);
  if (i) return bV(i);
}
var hf = "carousel_source_identifier",
  kr = "carousel_provider_id",
  w = {
    activeItemIndex: "carousel_active_item_index",
    totalItems: "carousel_total_items",
    hasNext: "carousel_has_next",
    hasPrevious: "carousel_has_previous",
    dots: "carousel_dots",
    nextPage: "carouselNextPage",
    previousPage: "carouselPreviousPage",
    goToPage: "carouselGoToPage",
  },
  Ga = "page",
  Dr = {
    id: w.activeItemIndex,
    name: "Active Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  Lr = {
    id: w.totalItems,
    name: "Total Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  Ln = { id: w.hasNext, name: "Has Next", type: "boolean", initialValue: !1 },
  wn = { id: w.hasPrevious, name: "Has Previous", type: "boolean", initialValue: !1 },
  wr = { id: w.dots, name: "Pagination", type: "array", initialValue: [], itemVariables: [] },
  Mr = { id: w.nextPage, name: "Next", type: "eventhandler", initialValue: void 0 },
  Br = { id: w.previousPage, name: "Previous", type: "eventhandler", initialValue: void 0 },
  CV = { id: Ga, name: "Page", type: "number", initialValue: 1, options: { min: 1, step: 1 } },
  Er = { id: w.goToPage, name: "Go to", type: "eventhandler", initialValue: void 0, payload: [CV] },
  Ha = {
    [w.activeItemIndex]: Dr,
    [w.totalItems]: Lr,
    [w.hasNext]: Ln,
    [w.hasPrevious]: wn,
    [w.dots]: wr,
    [w.nextPage]: Mr,
    [w.previousPage]: Br,
    [w.goToPage]: Er,
  };
function xj(e) {
  if (e in Ha) return Ha[e];
}
function gj(e) {
  return e in Ha;
}
var VV = "variables";
function Tj(e) {
  return e ? VV in e : !1;
}
var SV = "getProvidedVariableMap";
function Vj(e) {
  return !!e && SV in e;
}
function ja(e) {
  return e.root.getDefaultLocaleName("Default locale");
}
function xf(e, t) {
  return !t || !e ? "ltr" : bo(e.code);
}
var gf = "global_locale",
  bf = "global_layout_direction",
  Ar = "locale_provider_id",
  Tf = "locale_source_identifier",
  RV = "Left to Right",
  NV = "Right to Left";
function Aj(e) {
  return Oe(e) || It(e) || kt(e);
}
var _a = (() => {
    let e, t, n;
    return (o) => {
      let r = o.root.locales;
      if (!r || r.length === 0) return null;
      let i = ja(o);
      return (
        (n && i === e && r === t) ||
          ((e = i),
          (t = r),
          (n = {
            id: gf,
            type: "enum",
            name: "Locale",
            initialValue: void 0,
            cases: [{ id: Ot, name: ja(o) }, ...r.map((a) => ({ id: a.id, name: a.name }))],
          })),
        n
      );
    };
  })(),
  Ua = (() => {
    let e;
    return (t) => {
      let n = t.root.locales;
      return !n || n.length === 0
        ? null
        : e ||
            ((e = {
              id: bf,
              type: "enum",
              name: "Layout Direction",
              initialValue: void 0,
              cases: [
                { id: "ltr", name: RV },
                { id: "rtl", name: NV },
              ],
            }),
            e);
    };
  })(),
  Fj = He((e) => (e ? Cf(e) : null)),
  PV = He((e, t) => {
    if (!e && !t) return;
    let n = new U();
    return (e && n.set(e.id, e), t && n.set(t.id, t), n);
  });
function Oj(e) {
  let t = _a(e),
    n = Ua(e);
  return PV(t, n);
}
function Cf(e) {
  let t = [],
    n = [];
  for (let r of e.cases) (t.push(r.id), n.push(r.name));
  let o = { type: "enum", title: "Locale", options: t, optionTitles: n };
  return (kn(o, { dataIdentifier: Tf, enumFieldKey: gf }), o);
}
function vV(e) {
  let t = [],
    n = [];
  for (let r of e.cases) (t.push(r.id), n.push(r.name));
  let o = { type: "enum", title: "Layout Direction", options: t, optionTitles: n };
  return (kn(o, { dataIdentifier: Tf, enumFieldKey: bf }), o);
}
var IV = He((e, t) => {
  if (!e && !t) return;
  let n = new U();
  return (e && n.set(e.id, Cf(e)), t && n.set(t.id, vV(t)), n);
});
function kV(e) {
  let t = _a(e),
    n = Ua(e);
  return IV(t, n);
}
var DV = He((e) => {
  if (!e) return;
  let t = new Map();
  return (t.set(Ar, e), t);
});
function Wj(e) {
  let t = kV(e);
  return DV(t);
}
var LV = He((e, t, n, o) => {
  if (!e && !t) return;
  let r = new U();
  (e && r.set(e.id, n?.id ?? Ot), t && r.set(t.id, xf(n, o)));
  let i = new Map();
  return (i.set(Ar, r), i);
});
function zj(e, t) {
  let n = _a(e),
    o = Ua(e);
  return LV(n, o, t, e.root.adaptLayoutToTextDirection);
}
var Vf = "default",
  Mn = class {
    has(t) {
      return !1;
    }
    get(t) {}
    *[Symbol.iterator]() {}
  },
  Gj = new Mn(),
  jj = new Mn(),
  _j = new Mn();
function Sf(e) {
  let t = fu(e);
  if (t) return t.intrinsicSize;
  let n = e.split("?")[1];
  if (!n) return;
  let o = new URLSearchParams(n),
    r = parseInt(o.get("width") ?? "", 10),
    i = parseInt(o.get("height") ?? "", 10);
  if (!(!S(r) || !S(i))) return { width: r, height: i };
}
var wV = "type",
  MV = "webPageId";
function Rf(e, t) {
  return e.type !== "link" || !g(t) || wV in t ? !1 : MV in t;
}
function BV(e, t) {
  let n = t;
  for (; $n(n);) {
    if (n.dataIdentifier) return n.dataIdentifier;
    n = e.getParent(n.id);
  }
}
function EV(e, t) {
  if (t.unresolvedPathSlugs)
    for (let n in t.unresolvedPathSlugs) {
      let o = t.unresolvedPathSlugs[n];
      if (!g(o)) continue;
      let r = o.collectionItemId;
      if (!p(r)) continue;
      let i = Ou(e, t.webPageId);
      if (!i) return;
      let a = BV(e, i);
      if (!a) return;
      let s = { identifier: a, collectionItemId: r, key: n, value: "" };
      return { [n]: s };
    }
}
function Nf(e, t) {
  return { type: "webPage", webPageId: t.webPageId, pathVariables: EV(e, t) };
}
function Fr(e, t, n) {
  if (Rf(t, n)) return Nf(e, n);
  let o = me(t.type, n);
  if (t.type === "array") {
    if (!j(o)) return o;
    let r = t.control;
    return r ? o.map((i) => Fr(e, r, i)) : o;
  }
  if (t.type === "object") {
    if (!g(o)) return o;
    let r = {};
    for (let i in o) {
      let a = t.controls[i];
      ((r[i] = o[i]), a && (r[i] = Fr(e, a, o[i])));
    }
    return r;
  }
  if (t.type === "responsiveimage" && fr(o)) {
    let r = Sf(o.src);
    return r ? { ...o, pixelWidth: r.width, pixelHeight: r.height } : o;
  }
  return o;
}
var Or = class {
  constructor(t, n, o) {
    this.tree = t;
    this.controlMap = n;
    this.data = o;
  }
  tree;
  controlMap;
  data;
  cache = new Map();
  has(t) {
    return this.controlMap.has(t);
  }
  get(t) {
    if (this.cache.has(t)) return this.cache.get(t);
    let n = this.controlMap.get(t);
    if (!n) return;
    let o = this.data?.[t],
      r = Fr(this.tree, n, o);
    return (this.cache.set(t, r), r);
  }
  *[Symbol.iterator]() {
    for (let [t] of this.controlMap) {
      let n = this.get(t);
      yield [t, n];
    }
  }
};
var $e = class {
  constructor(t, n) {
    this.leftMap = t;
    this.rightMap = n;
  }
  leftMap;
  rightMap;
  has(t) {
    return !!(this.rightMap.has(t) || this.leftMap.has(t));
  }
  get(t) {
    if (this.rightMap.has(t)) return this.rightMap.get(t);
    if (this.leftMap.has(t)) return this.leftMap.get(t);
  }
  *[Symbol.iterator]() {
    for (let t of this.leftMap) {
      let n = t[0];
      this.rightMap.has(n) || (yield t);
    }
    yield* this.rightMap;
  }
};
var Bn = "repeater_item_index",
  Te = "repeater_item_count";
function h_(e, t, n, o, r) {
  let i = new Or(e, t, n);
  return new Ka(i, o, r);
}
var $a = {
    id: Bn,
    name: "Item Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  AV = yt($a, "WebPage"),
  Wr = {
    id: Te,
    name: "Visible Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  x_ = [$a, Wr],
  qa = yt(Wr, "WebPage");
function g_(e) {
  return e === Bn || e === Te;
}
function b_(e) {
  return e === Te;
}
var Pf = class extends $e {
    constructor(t) {
      let n = new U();
      (n.set(Te, Wr), super(t, n));
    }
  },
  vf = class extends $e {
    constructor(t, n) {
      let o = new U();
      (o.set(Te, n), super(t, o));
    }
  },
  If = class extends $e {
    constructor(t) {
      let n = new U();
      (n.set(Te, qa), super(t, n));
    }
  },
  kf = class extends $e {
    constructor(t) {
      let n = new U();
      (n.set(Bn, $a), n.set(Te, Wr), super(t, n));
    }
  },
  Ka = class extends $e {
    constructor(t, n, o) {
      let r = new U();
      (r.set(Bn, n + 1), r.set(Te, o), super(t, r));
    }
  },
  Df = class extends $e {
    constructor(t) {
      let n = new U();
      (n.set(Bn, AV), n.set(Te, qa), super(t, n));
    }
  };
function T_(e, t, n, o) {
  let r = new Map(e),
    i = new Map(t),
    a = new U(),
    s = new U();
  return (
    a.set(Te, qa),
    s.set(Te, o),
    r.set(n, a),
    i.set(n, s),
    { nonRepeatedChildCombinedControlMap: r, nonRepeatedChildCombinedValueMap: i }
  );
}
function M_(e) {
  let t = e;
  for (let n of e.ancestors()) {
    if (ta(n)) return na(t);
    t = n;
  }
  return !1;
}
var FV = yt(Dr, "WebPage"),
  OV = yt(Lr, "WebPage"),
  WV = { type: "boolean", title: Ln.name, defaultValue: Ln.initialValue },
  zV = { type: "boolean", title: wn.name, defaultValue: wn.initialValue },
  HV = { type: "array", title: wr.name, control: { type: "object", controls: {} } },
  GV = { type: "number", title: "Page", defaultValue: 1, min: 1, step: 1, displayStepper: !0 },
  jV = { type: "eventhandler", title: Mr.name },
  _V = { type: "eventhandler", title: Br.name },
  UV = { type: "eventhandler", title: Er.name, payload: { [Ga]: GV } },
  KV = qV(),
  $V = XV();
function qV() {
  let e = new U();
  return (
    e.set(w.activeItemIndex, Dr),
    e.set(w.totalItems, Lr),
    e.set(w.hasNext, Ln),
    e.set(w.hasPrevious, wn),
    e.set(w.dots, wr),
    e.set(w.nextPage, Mr),
    e.set(w.previousPage, Br),
    e.set(w.goToPage, Er),
    e
  );
}
function XV() {
  let e = new U();
  return (
    e.set(w.activeItemIndex, FV),
    e.set(w.totalItems, OV),
    e.set(w.hasNext, WV),
    e.set(w.hasPrevious, zV),
    e.set(w.dots, HV),
    e.set(w.nextPage, jV),
    e.set(w.previousPage, _V),
    e.set(w.goToPage, UV),
    e
  );
}
function YV(e) {
  return Array.from({ length: e }, (t, n) => ({ id: String(n + 1) }));
}
function JV(e) {
  let t = new U();
  return (
    t.set(w.activeItemIndex, 1),
    t.set(w.totalItems, e),
    t.set(w.hasNext, e > 1),
    t.set(w.hasPrevious, !1),
    t.set(w.dots, YV(e)),
    t
  );
}
function ZV() {
  return KV;
}
function QV() {
  return $V;
}
function eS(e, t) {
  let n = t?.get(Te),
    o = S(n) ? e.tree() : void 0,
    r = 0;
  for (let i of mu(e))
    if (!(Tn(i) && i.position !== void 0)) {
      if (S(n) && o && Xt(o, i)) {
        r += n;
        continue;
      }
      r++;
    }
  return r;
}
function B_(e, t) {
  let n = e.cache.carouselAncestorId;
  if (!n) return;
  let o = e.tree();
  if (!o) return;
  let r = o.get(n);
  if (r) return Lf(e, r, t);
}
function Lf(e, t, n) {
  let o = eS(t, n?.get(t.getPrimaryId())),
    r = e.cache.carouselValueMap;
  if (r?.itemCount === o) return r.valueMap;
  let i = JV(o);
  return ((e.cache.carouselValueMap = { itemCount: o, valueMap: i }), i);
}
function wf(e, t) {
  if (!Tn(e) || e.position === void 0) return;
  let n = e.tree()?.get(e.parentid);
  if (!(!n || !ta(n)))
    return {
      providerId: kr,
      sourceIdentifier: hf,
      variableMap: ZV(),
      controlMap: QV(),
      valueMap: Lf(e, n, t),
    };
}
var tS = Wn();
function G_(e, t, n) {
  let o = [],
    r = wf(e, t);
  r && o.push(r);
  let i = yf(e, n, t);
  return (i && o.push(i), o.length > 0 ? o : tS);
}
function j_(e) {
  return e === Ar || e === kr;
}
function __(e, t, n, o, r) {
  if (!t && n.length === 0) return e;
  let i;
  e
    ? ((i = new Map(e)), t && i.set(r, t))
    : t
      ? (i = new Map([
          [r, t],
          [Vf, t],
        ]))
      : (i = new Map());
  for (let a of n) i.set(a.providerId, o(a));
  return i;
}
function U_(e) {
  return e.map(nS);
}
function K_(e) {
  return e.map(oS);
}
function nS(e) {
  return e.valueMap;
}
function oS(e) {
  return e.controlMap;
}
function $_(e, t) {
  if (t.length === 0) return e;
  let n = new Map(e ?? []);
  for (let o of t) n.set(o.providerId, o.valueMap);
  return n;
}
export {
  tn as a,
  rS as b,
  jr as c,
  ks as d,
  Le as e,
  ws as f,
  zn as g,
  ie as h,
  we as i,
  Ds as j,
  ot as k,
  R as l,
  I as m,
  RS as n,
  fe as o,
  Hn as p,
  Gn as q,
  wS as r,
  _n as s,
  Pt as t,
  MS as u,
  Ur as v,
  nn as w,
  Kr as x,
  zt as y,
  Bh as z,
  Ei as A,
  zu as B,
  Ah as C,
  Hu as D,
  Fh as E,
  ju as F,
  Ai as G,
  Rd as H,
  Fi as I,
  _u as J,
  Oi as K,
  We as L,
  fi as M,
  Fl as N,
  cn as O,
  lo as P,
  Av as Q,
  x as R,
  Uu as S,
  Ku as T,
  Vo as U,
  dt as V,
  Yh as W,
  So as X,
  Ro as Y,
  Id as Z,
  Jh as _,
  mL as $,
  $u as aa,
  Ju as ba,
  bL as ca,
  Qu as da,
  No as ea,
  Hi as fa,
  LL as ga,
  gd as ha,
  Td as ia,
  cx as ja,
  Cd as ka,
  Sd as la,
  Nd as ma,
  Pd as na,
  od as oa,
  BL as pa,
  HL as qa,
  sd as ra,
  nx as sa,
  rx as ta,
  ud as ua,
  Vx as va,
  vd as wa,
  dd as xa,
  _t as ya,
  qL as za,
  XL as Aa,
  Mo as Ba,
  Io as Ca,
  xn as Da,
  Ui as Ea,
  ow as Fa,
  rw as Ga,
  fd as Ha,
  xd as Ia,
  yw as Ja,
  vx as Ka,
  Ed as La,
  O as Ma,
  CN as Na,
  ES as Oa,
  AS as Pa,
  As as Qa,
  Fs as Ra,
  $r as Sa,
  qf as Ta,
  qr as Ua,
  Ws as Va,
  _S as Wa,
  US as Xa,
  KS as Ya,
  $S as Za,
  k as _a,
  JS as $a,
  ZS as ab,
  QS as bb,
  eR as cb,
  Xr as db,
  zs as eb,
  Hs as fb,
  tR as gb,
  Yr as hb,
  Xf as ib,
  Me as jb,
  It as kb,
  kt as lb,
  Gs as mb,
  Oe as nb,
  nR as ob,
  js as pb,
  oR as qb,
  rR as rb,
  Dt as sb,
  Yf as tb,
  iR as ub,
  aR as vb,
  _s as wb,
  Un as xb,
  Us as yb,
  sR as zb,
  lR as Ab,
  Kn as Bb,
  Jf as Cb,
  Zf as Db,
  Qf as Eb,
  em as Fb,
  tm as Gb,
  nm as Hb,
  om as Ib,
  uR as Jb,
  dR as Kb,
  cR as Lb,
  pR as Mb,
  fR as Nb,
  mR as Ob,
  yR as Pb,
  hR as Qb,
  xR as Rb,
  gR as Sb,
  Ks as Tb,
  bR as Ub,
  TR as Vb,
  CR as Wb,
  VR as Xb,
  SR as Yb,
  RR as Zb,
  NR as _b,
  Jr as $b,
  PR as ac,
  vR as bc,
  IR as cc,
  $s as dc,
  kR as ec,
  DR as fc,
  LR as gc,
  wR as hc,
  MR as ic,
  $n as jc,
  BR as kc,
  qs as lc,
  qn as mc,
  ER as nc,
  AR as oc,
  FR as pc,
  OR as qc,
  WR as rc,
  zR as sc,
  HR as tc,
  GR as uc,
  jR as vc,
  _R as wc,
  rm as xc,
  UR as yc,
  KR as zc,
  $R as Ac,
  Eo as Bc,
  kM as Cc,
  DM as Dc,
  gy as Ec,
  lI as Fc,
  uI as Gc,
  Mt as Hc,
  Zs as Ic,
  Xn as Jc,
  am as Kc,
  rt as Lc,
  Zn as Mc,
  sm as Nc,
  lm as Oc,
  Qs as Pc,
  el as Qc,
  um as Rc,
  Zr as Sc,
  ni as Tc,
  Qn as Uc,
  tl as Vc,
  ym as Wc,
  hN as Xc,
  xN as Yc,
  gN as Zc,
  hm as _c,
  bN as $c,
  SN as ad,
  oi as bd,
  RN as cd,
  ri as dd,
  rl as ed,
  IN as fd,
  ii as gd,
  eo as hd,
  AN as id,
  FN as jd,
  ON as kd,
  WN as ld,
  zN as md,
  al as nd,
  HN as od,
  to as pd,
  sn as qd,
  KN as rd,
  $N as sd,
  qN as td,
  rP as ud,
  Pm as vd,
  Im as wd,
  km as xd,
  Lm as yd,
  iP as zd,
  Mm as Ad,
  aP as Bd,
  sP as Cd,
  Bm as Dd,
  lP as Ed,
  Am as Fd,
  uP as Gd,
  dl as Hd,
  dP as Id,
  si as Jd,
  cP as Kd,
  cl as Ld,
  pP as Md,
  fP as Nd,
  mP as Od,
  fl as Pd,
  yP as Qd,
  zm as Rd,
  Hm as Sd,
  hP as Td,
  xP as Ud,
  Gm as Vd,
  gP as Wd,
  bP as Xd,
  TP as Yd,
  CP as Zd,
  VP as _d,
  SP as $d,
  M as ae,
  hl as be,
  li as ce,
  ro as de,
  xl as ee,
  PP as fe,
  vP as ge,
  gl as he,
  IP as ie,
  kP as je,
  DP as ke,
  jm as le,
  FP as me,
  ye as ne,
  OP as oe,
  Cl as pe,
  WP as qe,
  zP as re,
  HP as se,
  Sl as te,
  E as ue,
  Rl as ve,
  EM as we,
  AM as xe,
  FM as ye,
  Ox as ze,
  Wx as Ae,
  OM as Be,
  Ad as Ce,
  Fd as De,
  Od as Ee,
  pt as Fe,
  WM as Ge,
  Hx as He,
  zM as Ie,
  zd as Je,
  HM as Ke,
  Gx as Le,
  GM as Me,
  jM as Ne,
  jx as Oe,
  Ao as Pe,
  Hd as Qe,
  _M as Re,
  Fo as Se,
  ea as Te,
  Oo as Ue,
  Kx as Ve,
  Wo as We,
  jd as Xe,
  _d as Ye,
  UM as Ze,
  KM as _e,
  Xx as $e,
  XM as af,
  YM as bf,
  Tn as cf,
  tB as df,
  nB as ef,
  oB as ff,
  Qx as gf,
  ta as hf,
  na as if,
  tg as jf,
  rB as kf,
  lB as lf,
  uB as mf,
  og as nf,
  dB as of,
  ig as pf,
  cB as qf,
  pB as rf,
  Xs as sf,
  XR as tf,
  on as uf,
  Lt as vf,
  YR as wf,
  JR as xf,
  ZR as yf,
  rn as zf,
  QR as Af,
  Ys as Bf,
  wt as Cf,
  eN as Df,
  Js as Ef,
  tN as Ff,
  nN as Gf,
  oN as Hf,
  JP as If,
  Km as Jf,
  ZP as Kf,
  Pl as Lf,
  he as Mf,
  vl as Nf,
  QP as Of,
  ev as Pf,
  Nl as Qf,
  tv as Rf,
  nv as Sf,
  ov as Tf,
  Il as Uf,
  Xm as Vf,
  rv as Wf,
  Jm as Xf,
  at as Yf,
  iv as Zf,
  av as _f,
  sv as $f,
  Kd as ag,
  sg as bg,
  zo as cg,
  ra as dg,
  $d as eg,
  hB as fg,
  xB as gg,
  gB as hg,
  bB as ig,
  TB as jg,
  SB as kg,
  RB as lg,
  Yd as mg,
  Kt as ng,
  vB as og,
  Jd as pg,
  IB as qg,
  kB as rg,
  DB as sg,
  K as tg,
  A as ug,
  Ll as vg,
  st as wg,
  cv as xg,
  lt as yg,
  ao as zg,
  un as Ag,
  El as Bg,
  Al as Cg,
  uo as Dg,
  Wv as Eg,
  jv as Fg,
  _v as Gg,
  pn as Hg,
  Uv as Ig,
  Kv as Jg,
  $v as Kg,
  fn as Lg,
  co as Mg,
  Zl as Ng,
  Si as Og,
  Yv as Pg,
  Jv as Qg,
  hy as Rg,
  Ql as Sg,
  iI as Tg,
  po as Ug,
  aI as Vg,
  by as Wg,
  mn as Xg,
  mI as Yg,
  RI as Zg,
  NI as _g,
  Ft as $g,
  Ri as ah,
  PI as bh,
  vI as ch,
  eu as dh,
  vy as eh,
  II as fh,
  tu as gh,
  kI as hh,
  DI as ih,
  LI as jh,
  nu as kh,
  Iy as lh,
  wI as mh,
  MI as nh,
  BI as oh,
  EI as ph,
  Dy as qh,
  wy as rh,
  AI as sh,
  EB as th,
  ia as uh,
  fg as vh,
  AB as wh,
  GB as xh,
  Qd as yh,
  $t as zh,
  yg as Ah,
  jB as Bh,
  Zt as Ch,
  rz as Dh,
  iz as Eh,
  Dp as Fh,
  Ho as Gh,
  KB as Hh,
  la as Ih,
  $B as Jh,
  qB as Kh,
  gu as Lh,
  Qy as Mh,
  vk as Nh,
  Ik as Oh,
  Cu as Ph,
  kk as Qh,
  Dk as Rh,
  Qo as Sh,
  hg as Th,
  ua as Uh,
  oc as Vh,
  gg as Wh,
  bg as Xh,
  da as Yh,
  ZB as Zh,
  QB as _h,
  oE as $h,
  rE as ai,
  iE as bi,
  aE as ci,
  sE as di,
  lE as ei,
  uE as fi,
  jo as gi,
  pE as hi,
  rc as ii,
  TE as ji,
  ic as ki,
  ac as li,
  CE as mi,
  sc as ni,
  VE as oi,
  Lp as pi,
  gz as qi,
  Sz as ri,
  Rz as si,
  Nz as ti,
  GT as ui,
  Ep as vi,
  Pz as wi,
  vz as xi,
  ge as yi,
  By as zi,
  Ey as Ai,
  HI as Bi,
  Fy as Ci,
  GI as Di,
  Oy as Ei,
  jI as Fi,
  _I as Gi,
  UI as Hi,
  KI as Ii,
  $I as Ji,
  qI as Ki,
  XI as Li,
  ut as Mi,
  yn as Ni,
  Se as Oi,
  uc as Pi,
  ru as Qi,
  _y as Ri,
  ik as Si,
  pu as Ti,
  ak as Ui,
  sk as Vi,
  fu as Wi,
  EE as Xi,
  ft as Yi,
  ca as Zi,
  qt as _i,
  dc as $i,
  Uo as aj,
  AE as bj,
  FE as cj,
  OE as dj,
  Mg as ej,
  ma as fj,
  pc as gj,
  FG as hj,
  fV as ij,
  Dn as jj,
  Ni as kj,
  Pi as lj,
  yo as mj,
  fk as nj,
  $y as oj,
  mu as pj,
  jg as qj,
  vc as rj,
  OA as sj,
  WA as tj,
  Kg as uj,
  zA as vj,
  HA as wj,
  Ic as xj,
  GA as yj,
  jA as zj,
  qg as Aj,
  _A as Bj,
  yu as Cj,
  xp as Dj,
  fc as Ej,
  gp as Fj,
  uW as Gj,
  bp as Hj,
  PT as Ij,
  dW as Jj,
  gW as Kj,
  Va as Lj,
  bW as Mj,
  Vp as Nj,
  vT as Oj,
  TW as Pj,
  CW as Qj,
  IT as Rj,
  Ot as Sj,
  hu as Tj,
  Vk as Uj,
  Vu as Vj,
  Di as Wj,
  Su as Xj,
  Ru as Yj,
  Nu as Zj,
  Li as _j,
  jk as $j,
  go as ak,
  _k as bk,
  Uk as ck,
  Pu as dk,
  yc as ek,
  hc as fk,
  $E as gk,
  Eg as hk,
  qE as ik,
  XE as jk,
  xc as kk,
  YE as lk,
  Ag as mk,
  Xt as nk,
  JE as ok,
  ZE as pk,
  QE as qk,
  eA as rk,
  tA as sk,
  vi as tk,
  gk as uk,
  bk as vk,
  Xy as wk,
  Ii as xk,
  Tk as yk,
  Jy as zk,
  vu as Ak,
  Vh as Bk,
  Iu as Ck,
  Lu as Dk,
  Qk as Ek,
  Sh as Fk,
  eD as Gk,
  tD as Hk,
  wu as Ik,
  bo as Jk,
  He as Kk,
  wi as Lk,
  dD as Mk,
  cD as Nk,
  pD as Ok,
  Au as Pk,
  CD as Qk,
  kh as Rk,
  Ou as Sk,
  Wu as Tk,
  Dh as Uk,
  fr as Vk,
  lA as Wk,
  mt as Xk,
  uA as Yk,
  Tc as Zk,
  fA as _k,
  mA as $k,
  Vc as al,
  TA as bl,
  Vn as cl,
  CA as dl,
  tt as el,
  Sc as fl,
  VA as gl,
  SA as hl,
  RA as il,
  NA as jl,
  Rc as kl,
  Nc as ll,
  Ue as ml,
  BA as nl,
  XA as ol,
  Sn as pl,
  YA as ql,
  kc as rl,
  Qg as sl,
  tb as tl,
  hF as ul,
  xF as vl,
  gF as wl,
  bF as xl,
  Ko as yl,
  TF as zl,
  CF as Al,
  Lc as Bl,
  VF as Cl,
  SF as Dl,
  RF as El,
  NF as Fl,
  PF as Gl,
  vF as Hl,
  IF as Il,
  kF as Jl,
  DF as Kl,
  LF as Ll,
  wF as Ml,
  MF as Nl,
  BF as Ol,
  EF as Pl,
  AF as Ql,
  FF as Rl,
  OF as Sl,
  WF as Tl,
  zF as Ul,
  HF as Vl,
  GF as Wl,
  jF as Xl,
  _F as Yl,
  UF as Zl,
  KF as _l,
  $F as $l,
  qF as am,
  XF as bm,
  YF as cm,
  Na as dm,
  JW as em,
  mr as fm,
  aH as gm,
  LT as hm,
  ir as im,
  kW as jm,
  ar as km,
  DW as lm,
  LW as mm,
  af as nm,
  vH as om,
  La as pm,
  AW as qm,
  Sa as rm,
  FW as sm,
  _W as tm,
  UW as um,
  Pp as vm,
  Ra as wm,
  qW as xm,
  Sp as ym,
  o0 as zm,
  r0 as Am,
  i0 as Bm,
  a0 as Cm,
  cb as Dm,
  mb as Em,
  ya as Fm,
  h0 as Gm,
  Nn as Hm,
  C0 as Im,
  V0 as Jm,
  Uc as Km,
  kp as Lm,
  tz as Mm,
  Ap as Nm,
  Fp as Om,
  Op as Pm,
  Wp as Qm,
  zp as Rm,
  sr as Sm,
  lr as Tm,
  J as Um,
  YT as Vm,
  jp as Wm,
  kn as Xm,
  Fz as Ym,
  P0 as Zm,
  Zo as _m,
  v0 as $m,
  B0 as an,
  Zc as bn,
  z0 as cn,
  Qc as dn,
  ep as en,
  U0 as fn,
  rO as gn,
  tp as hn,
  er as in,
  nT as jn,
  nr as kn,
  np as ln,
  Up as mn,
  Wz as nn,
  zz as on,
  Hz as pn,
  Kp as qn,
  jz as rn,
  _z as sn,
  Uz as tn,
  $p as un,
  $z as vn,
  qz as wn,
  Xz as xn,
  qp as yn,
  Jz as zn,
  Zz as An,
  Qz as Bn,
  dr as Cn,
  n1 as Dn,
  o1 as En,
  r1 as Fn,
  i1 as Gn,
  or as Hn,
  dO as In,
  cO as Jn,
  pO as Kn,
  iT as Ln,
  fO as Mn,
  ip as Nn,
  rr as On,
  bO as Pn,
  TO as Qn,
  sp as Rn,
  CO as Sn,
  VO as Tn,
  SO as Un,
  lp as Vn,
  RO as Wn,
  NO as Xn,
  PO as Yn,
  up as Zn,
  vO as _n,
  IO as $n,
  va as ao,
  l1 as bo,
  u1 as co,
  d1 as do,
  c1 as eo,
  cr as fo,
  m1 as go,
  y1 as ho,
  h1 as io,
  x1 as jo,
  g1 as ko,
  pr as lo,
  C1 as mo,
  V1 as no,
  S1 as oo,
  R1 as po,
  N1 as qo,
  Ia as ro,
  lC as so,
  Zp as to,
  k1 as uo,
  D1 as vo,
  dC as wo,
  L1 as xo,
  w1 as yo,
  Z1 as zo,
  ef as Ao,
  eH as Bo,
  tf as Co,
  dp as Do,
  cp as Eo,
  me as Fo,
  pp as Go,
  jO as Ho,
  fT as Io,
  mT as Jo,
  Q as Ko,
  Jt as Lo,
  _O as Mo,
  UO as No,
  KO as Oo,
  $O as Po,
  yT as Qo,
  hT as Ro,
  qO as So,
  xT as To,
  XO as Uo,
  YO as Vo,
  gT as Wo,
  JO as Xo,
  TT as Yo,
  ba as Zo,
  VT as _o,
  mp as $o,
  ZO as ap,
  FH as bp,
  yp as cp,
  nW as dp,
  yG as ep,
  hG as fp,
  xG as gp,
  gG as hp,
  bG as ip,
  TG as jp,
  CG as kp,
  VG as lp,
  SG as mp,
  SC as np,
  RC as op,
  GC as pp,
  eV as qp,
  tV as rp,
  RG as sp,
  Wa as tp,
  NG as up,
  PG as vp,
  U as wp,
  ht as xp,
  wG as yp,
  MG as zp,
  xt as Ap,
  BG as Bp,
  EG as Cp,
  lV as Dp,
  uV as Ep,
  dV as Fp,
  cV as Gp,
  gt as Hp,
  KG as Ip,
  mV as Jp,
  cf as Kp,
  $G as Lp,
  Qt as Mp,
  qG as Np,
  vr as Op,
  XG as Pp,
  YG as Qp,
  hV as Rp,
  JG as Sp,
  ZG as Tp,
  xV as Up,
  gV as Vp,
  QG as Wp,
  ej as Xp,
  bV as Yp,
  lj as Zp,
  uj as _p,
  dj as $p,
  ff as aq,
  TV as bq,
  Ir as cq,
  cj as dq,
  pj as eq,
  fj as fq,
  mj as gq,
  Vj as hq,
  Sf as iq,
  ja as jq,
  xf as kq,
  gf as lq,
  bf as mq,
  Ar as nq,
  Tf as oq,
  RV as pq,
  NV as qq,
  Aj as rq,
  _a as sq,
  Ua as tq,
  Fj as uq,
  Oj as vq,
  kV as wq,
  Wj as xq,
  zj as yq,
  Vf as zq,
  Gj as Aq,
  jj as Bq,
  _j as Cq,
  hf as Dq,
  kr as Eq,
  w as Fq,
  Ga as Gq,
  CV as Hq,
  xj as Iq,
  gj as Jq,
  Or as Kq,
  $e as Lq,
  Bn as Mq,
  Te as Nq,
  h_ as Oq,
  x_ as Pq,
  g_ as Qq,
  b_ as Rq,
  Pf as Sq,
  vf as Tq,
  If as Uq,
  kf as Vq,
  Ka as Wq,
  Df as Xq,
  T_ as Yq,
  M_ as Zq,
  GV as _q,
  QV as $q,
  B_ as ar,
  G_ as br,
  j_ as cr,
  __ as dr,
  U_ as er,
  K_ as fr,
  nS as gr,
  oS as hr,
  $_ as ir,
  Tj as jr,
};
/**
 * @license Emotion v11.0.0
 * MIT License
 *
 * Copyright (c) Emotion team and other contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
  (**
   * @license React
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=chunk-3BWVGHYB.mjs.map
