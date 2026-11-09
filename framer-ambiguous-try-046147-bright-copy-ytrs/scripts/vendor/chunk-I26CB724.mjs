import { a as F, c as Hs, d as Ce, e as Gs } from "chunk-TI5B5BNI.mjs";
import { b as Ws, d as rn } from "chunk-KYM2LAWB.mjs";
import { d as ws, f as Rt, g as Re, n as Ls, o as ke } from "chunk-DBPGLK23.mjs";
import { a as Vt, b as ks, g as j, h as zn } from "chunk-WBRHMFUJ.mjs";
import { a as Vs, b as ae, e as Os, f as zs, g as te, t as js, w as kt } from "chunk-HC7MU4J2.mjs";
import { e as Hn, f as Ie, g as am } from "chunk-GHDF5CG4.mjs";
import { Ne as be, Ob as Ps, nf as Ds, pd as Is, xf as Ze, zb as vs } from "chunk-DPHJW6UJ.mjs";
import {
  A as Fe,
  b as Je,
  c as Ss,
  d as Q,
  e as Be,
  f as On,
  g as $,
  i as Ct,
  j as Ns,
  u as Rs,
  z as St,
} from "chunk-2CEDOG4D.mjs";
import { a as nn, b as Nt } from "chunk-WRBBN7SY.mjs";
import { a as de } from "chunk-SMHMQ5IL.mjs";
import { a as Gn } from "chunk-MSHSIAEI.mjs";
import { j as Bs } from "chunk-ASMHRHTH.mjs";
import { a as Wn } from "chunk-UZNETSBG.mjs";
import { b as Fs } from "chunk-YSP5ZHDJ.mjs";
import { b as q } from "chunk-AYNVEX5D.mjs";
import { a as re } from "chunk-2FCXHKEL.mjs";
import {
  a as ee,
  b as p,
  e as S,
  f as g,
  g as Ms,
  i as M,
  o as k,
  q as As,
  r as Te,
  u as Es,
} from "chunk-5EE7LLRA.mjs";
import { b as x, c as W } from "chunk-4JY5UMT2.mjs";
import { a as ne } from "chunk-SWYZG2NI.mjs";
import { o as Cs } from "chunk-MUEZJ6DD.mjs";
import { g as hs, i as xs, k as gs, l as Ye, o as bs, r as Ts } from "chunk-VHFKZWVR.mjs";
import { i as Fn } from "chunk-WBI6GGAG.mjs";
import { c as ys, e as L } from "chunk-WLHSDIGQ.mjs";
var Rf = ys((H) => {
  "use strict";
  var _a = Symbol.for("react.element"),
    Ka = Symbol.for("react.portal"),
    vo = Symbol.for("react.fragment"),
    Po = Symbol.for("react.strict_mode"),
    Io = Symbol.for("react.profiler"),
    Do = Symbol.for("react.provider"),
    wo = Symbol.for("react.context"),
    OC = Symbol.for("react.server_context"),
    Lo = Symbol.for("react.forward_ref"),
    Mo = Symbol.for("react.suspense"),
    Ao = Symbol.for("react.suspense_list"),
    Eo = Symbol.for("react.memo"),
    Bo = Symbol.for("react.lazy"),
    WC = Symbol.for("react.offscreen"),
    Nf;
  Nf = Symbol.for("react.module.reference");
  function Ne(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case _a:
          switch (((e = e.type), e)) {
            case vo:
            case Io:
            case Po:
            case Mo:
            case Ao:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case OC:
                case wo:
                case Lo:
                case Bo:
                case Eo:
                case Do:
                  return e;
                default:
                  return t;
              }
          }
        case Ka:
          return t;
      }
    }
  }
  H.ContextConsumer = wo;
  H.ContextProvider = Do;
  H.Element = _a;
  H.ForwardRef = Lo;
  H.Fragment = vo;
  H.Lazy = Bo;
  H.Memo = Eo;
  H.Portal = Ka;
  H.Profiler = Io;
  H.StrictMode = Po;
  H.Suspense = Mo;
  H.SuspenseList = Ao;
  H.isAsyncMode = function () {
    return !1;
  };
  H.isConcurrentMode = function () {
    return !1;
  };
  H.isContextConsumer = function (e) {
    return Ne(e) === wo;
  };
  H.isContextProvider = function (e) {
    return Ne(e) === Do;
  };
  H.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === _a;
  };
  H.isForwardRef = function (e) {
    return Ne(e) === Lo;
  };
  H.isFragment = function (e) {
    return Ne(e) === vo;
  };
  H.isLazy = function (e) {
    return Ne(e) === Bo;
  };
  H.isMemo = function (e) {
    return Ne(e) === Eo;
  };
  H.isPortal = function (e) {
    return Ne(e) === Ka;
  };
  H.isProfiler = function (e) {
    return Ne(e) === Io;
  };
  H.isStrictMode = function (e) {
    return Ne(e) === Po;
  };
  H.isSuspense = function (e) {
    return Ne(e) === Mo;
  };
  H.isSuspenseList = function (e) {
    return Ne(e) === Ao;
  };
  H.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === vo ||
      e === Io ||
      e === Po ||
      e === Mo ||
      e === Ao ||
      e === WC ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Bo ||
          e.$$typeof === Eo ||
          e.$$typeof === Do ||
          e.$$typeof === wo ||
          e.$$typeof === Lo ||
          e.$$typeof === Nf ||
          e.getModuleId !== void 0))
    );
  };
  H.typeOf = Ne;
});
var vf = ys((BG, kf) => {
  "use strict";
  kf.exports = Rf();
});
function on(e, t) {
  let r = 10 ** Math.round(Math.abs(t));
  return Math.round(e * r) / r;
}
function IS(e, t) {
  let n = e.toFixed(t);
  return t === 0 ? n : `${+n}`;
}
function Jo(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function _s(e) {
  return Math.round(e * 2) / 2;
}
function De(e, t) {
  return { x: e, y: t };
}
((R) => {
  ((R.isQuadrilateralPoints = (y) => y?.length === 4),
    (R.add = (...y) => y.reduce((C, O) => ({ x: C.x + O.x, y: C.y + O.y }), { x: 0, y: 0 })),
    (R.subtract = (y, C) => ({ x: y.x - C.x, y: y.y - C.y })),
    (R.multiply = (y, C) => ({ x: y.x * C, y: y.y * C })),
    (R.divide = (y, C) => ({ x: y.x / C, y: y.y / C })),
    (R.absolute = (y) => ({ x: Math.abs(y.x), y: Math.abs(y.y) })),
    (R.reverse = (y) => ({ x: y.x * -1, y: y.y * -1 })),
    (R.pixelAligned = (y, C = { x: 0, y: 0 }) => ({ x: Jo(y.x, C.x), y: Jo(y.y, C.y) })),
    (R.distance = (y, C) => {
      let O = Math.abs(y.x - C.x),
        G = Math.abs(y.y - C.y);
      return Math.sqrt(O * O + G * G);
    }),
    (R.angle = (y, C) => (Math.atan2(C.y - y.y, C.x - y.x) * 180) / Math.PI - 90),
    (R.angleFromX = (y, C) => (Math.atan2(C.y - y.y, C.x - y.x) * 180) / Math.PI),
    (R.isEqual = (y, C) => y.x === C.x && y.y === C.y),
    (R.rotationNormalizer = () => {
      let y;
      return (C) => {
        typeof y != "number" && (y = C);
        let O = y - C,
          G = Math.abs(O) + 180,
          P = Math.floor(G / 360);
        return (O < 180 && (C -= P * 360), O > 180 && (C += P * 360), (y = C), C);
      };
    }));
  function h(y, C) {
    return { x: (y.x + C.x) / 2, y: (y.y + C.y) / 2 };
  }
  R.center = h;
  function T(y) {
    let C = 0,
      O = 0;
    y.forEach((J) => {
      ((C += J.x), (O += J.y));
    });
    let G = C / y.length,
      P = O / y.length;
    return { x: G, y: P };
  }
  R.centroid = T;
  function V(y) {
    let C = R.centroid(y),
      O = new Map();
    for (let G = 0; G < y.length; G++) {
      let P = y[G];
      P && O.set(P, Math.atan2(P.y - C.y, P.x - C.x));
    }
    return y.sort((G, P) => (O.get(G) ?? 0) - (O.get(P) ?? 0));
  }
  R.sortClockwise = V;
})((De ||= {}));
function Ks(e) {
  return e * (Math.PI / 180);
}
var nt = (() => {
  function e(t, n) {
    return { a: t, b: n };
  }
  return (
    (e.offset = (t, n) => {
      let r = De.angleFromX(t.a, t.b),
        o = Ks(r),
        i = n * Math.sin(o),
        a = n * Math.cos(o);
      return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
    }),
    (e.intersection = (t, n, r) => {
      let o = t.a.x,
        i = t.a.y,
        a = t.b.x,
        s = t.b.y,
        l = n.a.x,
        u = n.a.y,
        c = n.b.x,
        m = n.b.y,
        f = (c - l) * (u - i) - (m - u) * (l - o),
        h = (c - l) * (s - i) - (m - u) * (a - o),
        T = (a - o) * (u - i) - (s - i) * (l - o);
      if ((f === 0 && h === 0) || h === 0) return null;
      let V = f / h,
        R = T / h;
      return r && (V < 0 || V > 1 || R < 0 || R > 1)
        ? null
        : { x: o + V * (a - o), y: i + V * (s - i) };
    }),
    (e.intersectionAngle = (t, n) => {
      let r = t.b.x - t.a.x,
        o = t.b.y - t.a.y,
        i = n.b.x - n.a.x,
        a = n.b.y - n.a.y;
      return Math.atan2(r * a - o * i, r * i + o * a) * (180 / Math.PI);
    }),
    (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
    (e.perpendicular = (t, n) => {
      let r = t.a.x - t.b.x,
        o = t.a.y - t.b.y,
        i = De(n.x - o, n.y + r);
      return e(i, n);
    }),
    (e.projectPoint = (t, n) => {
      let r = e.perpendicular(t, n);
      return e.intersection(t, r);
    }),
    (e.pointAtPercentDistance = (t, n) => {
      let r = e.distance(t),
        o = (n * r) / r;
      return { x: o * t.b.x + (1 - o) * t.a.x, y: o * t.b.y + (1 - o) * t.a.y };
    }),
    (e.distance = (t) => De.distance(t.a, t.b)),
    e
  );
})();
var N = {
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
    divide: (e, t) => N.multiply(e, 1 / t),
    offset: (e, t) => {
      let n = typeof t.x == "number" ? t.x : 0,
        r = typeof t.y == "number" ? t.y : 0;
      return { ...e, x: e.x + n, y: e.y + r };
    },
    inflate: (e, t) => {
      if (t === 0) return e;
      let n = 2 * t;
      return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
    },
    pixelAligned: (e) => {
      let t = Math.round(e.x),
        n = Math.round(e.y),
        r = Math.round(e.x + e.width),
        o = Math.round(e.y + e.height),
        i = Math.max(r - t, 0),
        a = Math.max(o - n, 0);
      return { x: t, y: n, width: i, height: a };
    },
    halfPixelAligned: (e) => {
      let t = Math.round(e.x * 2) / 2,
        n = Math.round(e.y * 2) / 2,
        r = Math.round((e.x + e.width) * 2) / 2,
        o = Math.round((e.y + e.height) * 2) / 2,
        i = Math.max(r - t, 1),
        a = Math.max(o - n, 1);
      return { x: t, y: n, width: i, height: a };
    },
    round: (e, t = 0) => {
      let n = on(e.x, t),
        r = on(e.y, t),
        o = on(e.width, t),
        i = on(e.height, t);
      return { x: n, y: r, width: o, height: i };
    },
    roundToOutside: (e) => {
      let t = Math.floor(e.x),
        n = Math.floor(e.y),
        r = Math.ceil(e.x + e.width),
        o = Math.ceil(e.y + e.height),
        i = Math.max(r - t, 0),
        a = Math.max(o - n, 0);
      return { x: t, y: n, width: i, height: a };
    },
    minX: (e) => e.x,
    maxX: (e) => e.x + e.width,
    minY: (e) => e.y,
    maxY: (e) => e.y + e.height,
    positions: (e) => ({
      minX: e.x,
      midX: e.x + e.width / 2,
      maxX: N.maxX(e),
      minY: e.y,
      midY: e.y + e.height / 2,
      maxY: N.maxY(e),
    }),
    center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
    boundingRectFromPoints: (e) => {
      let t = 1 / 0,
        n = -1 / 0,
        r = 1 / 0,
        o = -1 / 0;
      for (let i = 0; i < e.length; i++) {
        let a = e[i];
        ((t = Math.min(t, a.x)),
          (n = Math.max(n, a.x)),
          (r = Math.min(r, a.y)),
          (o = Math.max(o, a.y)));
      }
      return { x: t, y: r, width: n - t, height: o - r };
    },
    fromPoints: (e) => {
      let [t, n, r, o] = e,
        { x: i, y: a } = t,
        s = De.distance(t, n),
        l = De.distance(t, o);
      return { x: i, y: a, width: s, height: l };
    },
    merge: (...e) => {
      let t = { x: Math.min(...e.map(N.minX)), y: Math.min(...e.map(N.minY)) },
        n = { x: Math.max(...e.map(N.maxX)), y: Math.max(...e.map(N.maxY)) };
      return N.fromTwoPoints(t, n);
    },
    intersection: (e, t) => {
      let n = Math.max(e.x, t.x),
        r = Math.min(e.x + e.width, t.x + t.width),
        o = Math.max(e.y, t.y),
        i = Math.min(e.y + e.height, t.y + t.height);
      return { x: n, y: o, width: r - n, height: i - o };
    },
    points: (e) => [
      { x: N.minX(e), y: N.minY(e) },
      { x: N.minX(e), y: N.maxY(e) },
      { x: N.maxX(e), y: N.minY(e) },
      { x: N.maxX(e), y: N.maxY(e) },
    ],
    pointsAtOrigin: (e) => [
      { x: 0, y: 0 },
      { x: e.width, y: 0 },
      { x: e.width, y: e.height },
      { x: 0, y: e.height },
    ],
    transform: (e, t) => {
      let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
        { x: o, y: i } = t.transformPoint({ x: e.x + e.width, y: e.y }),
        { x: a, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
        { x: l, y: u } = t.transformPoint({ x: e.x, y: e.y + e.height }),
        c = Math.min(n, o, a, l),
        m = Math.max(n, o, a, l) - c,
        f = Math.min(r, i, s, u),
        h = Math.max(r, i, s, u) - f;
      return { x: c, y: f, width: m, height: h };
    },
    containsPoint: (e, t) =>
      !(
        t.x < N.minX(e) ||
        t.x > N.maxX(e) ||
        t.y < N.minY(e) ||
        t.y > N.maxY(e) ||
        Number.isNaN(e.x) ||
        Number.isNaN(e.y)
      ),
    containsRect: (e, t) => {
      for (let n of N.points(t)) if (!N.containsPoint(e, n)) return !1;
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
      !(t.x >= N.maxX(e) || N.maxX(t) <= e.x || t.y >= N.maxY(e) || N.maxY(t) <= e.y),
    overlapHorizontally: (e, t) => {
      let n = N.maxX(e),
        r = N.maxX(t);
      return n > t.x && r > e.x;
    },
    overlapVertically: (e, t) => {
      let n = N.maxY(e),
        r = N.maxY(t);
      return n > t.y && r > e.y;
    },
    doesNotIntersect: (e, t) => !t.some((n) => N.intersects(n, e)),
    isEqual: (e, t) => N.equals(e, t),
    cornerPoints: (e) => {
      let t = e.x,
        n = e.x + e.width,
        r = e.y,
        o = e.y + e.height;
      return [
        { x: t, y: r },
        { x: n, y: r },
        { x: n, y: o },
        { x: t, y: o },
      ];
    },
    midPoints: (e) => {
      let t = e.x,
        n = e.x + e.width / 2,
        r = e.x + e.width,
        o = e.y,
        i = e.y + e.height / 2,
        a = e.y + e.height;
      return [
        { x: n, y: o },
        { x: r, y: i },
        { x: n, y: a },
        { x: t, y: i },
      ];
    },
    pointDistance: (e, t) => {
      let n = 0,
        r = 0;
      return (
        t.x < e.x ? (n = e.x - t.x) : t.x > N.maxX(e) && (n = t.x - N.maxX(e)),
        t.y < e.y ? (r = e.y - t.y) : t.y > N.maxY(e) && (r = t.y - N.maxY(e)),
        De.distance({ x: n, y: r }, { x: 0, y: 0 })
      );
    },
    delta: (e, t) => {
      let n = { x: N.minX(e), y: N.minY(e) },
        r = { x: N.minX(t), y: N.minY(t) };
      return { x: n.x - r.x, y: n.y - r.y };
    },
    withMinSize: (e, t) => {
      let { width: n, height: r } = t,
        o = e.width - n,
        i = e.height - r;
      return {
        width: Math.max(e.width, n),
        height: Math.max(e.height, r),
        x: e.width < n ? e.x + o / 2 : e.x,
        y: e.height < r ? e.y + i / 2 : e.y,
      };
    },
    anyPointsOutsideRect: (e, t) => {
      let n = N.minX(e),
        r = N.minY(e),
        o = N.maxX(e),
        i = N.maxY(e);
      for (let a of t) if (a.x < n || a.x > o || a.y < r || a.y > i) return !0;
      return !1;
    },
    edges: (e) => {
      let [t, n, r, o] = N.cornerPoints(e);
      return [nt(t, n), nt(n, r), nt(r, o), nt(o, t)];
    },
    rebaseRectOnto: (e, t, n, r) => {
      let o = { ...e };
      switch (n) {
        case "bottom":
        case "top":
          switch (r) {
            case "start":
              o.x = t.x;
              break;
            case "center":
              o.x = t.x + t.width / 2 - e.width / 2;
              break;
            case "end":
              o.x = t.x + t.width - e.width;
              break;
            default:
              Fe(r);
          }
          break;
        case "left":
          o.x = t.x - e.width;
          break;
        case "right":
          o.x = t.x + t.width;
          break;
        default:
          Fe(n);
      }
      switch (n) {
        case "left":
        case "right":
          switch (r) {
            case "start":
              o.y = t.y;
              break;
            case "center":
              o.y = t.y + t.height / 2 - e.height / 2;
              break;
            case "end":
              o.y = t.y + t.height - e.height;
              break;
            default:
              Fe(r);
          }
          break;
        case "top":
          o.y = t.y - e.height;
          break;
        case "bottom":
          o.y = t.y + t.height;
          break;
        default:
          Fe(n);
      }
      return o;
    },
    constrain: (e, t) => {
      if (!t) return e;
      let n = Math.max(e.y, t.y);
      n = Math.min(n, t.y + t.height - e.height);
      let r = Math.max(e.x, t.x);
      return (
        (r = Math.min(r, t.x + t.width - e.width)),
        { x: r, y: n, width: e.width, height: e.height }
      );
    },
    closestEdge: (e, t) => {
      let n = N.center(e),
        r = nt(t, n),
        o = N.edges(e);
      for (let i = 0; i < o.length; i++) {
        let a = o[i];
        if (a && nt.intersection(r, a, !0)) {
          let s = Us[i];
          return (St(s, () => `Invalid edge name: ${JSON.stringify(Us)}`), { edge: a, name: s });
        }
      }
    },
    closestRect: (e, t) => {
      let n = 0,
        r = e[0];
      St(r, "Rect array is empty");
      let o = N.pointDistance(r, t);
      for (let i = 1; i < e.length; i += 1) {
        let a = e[i];
        St(a);
        let s = N.pointDistance(a, t);
        if ((s < o && ((n = i), (r = a), (o = s)), o === 0)) break;
      }
      return { rect: r, index: n };
    },
  },
  Us = ["top", "right", "bottom", "left"];
function $s(e, t, n) {
  let r = n ? `, use ${n} instead` : "",
    o = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
  Vs(o);
}
var jn = class {
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
      let r = this.transactions[n] || t;
      ((r.value = t.value), (this.transactions[n] = r));
    } else this.callObservers(t);
  }
  finishTransaction(t) {
    let n = this.transactions[t];
    return (delete this.transactions[t], this.callObservers(n, t));
  }
  callObservers(t, n) {
    let r = [];
    return (
      new Set(this.observers).forEach((o) => {
        typeof o == "function" ? o(t, n) : (o.update(t, n), r.push(o.finish));
      }),
      r
    );
  }
};
var oe = (() => {
    function e(t) {
      return (
        $s(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        we(t) ? t : new Zo(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let n = Math.random(),
          r = new Set();
        t((a, s) => {
          (a.set(s, n), r.add(a));
        }, n);
        let i = [];
        (r.forEach((a) => {
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
        for (let r in t) {
          let o = t[r];
          we(o) ? (n[r] = o.get()) : (n[r] = o);
        }
        return n;
      }),
      e
    );
  })(),
  qs = "onUpdate",
  Xs = "finishTransaction";
function we(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    qs in e &&
    e[qs] instanceof Function &&
    Xs in e &&
    e[Xs] instanceof Function
  );
}
function sm(e, t) {
  return {
    interpolate(n, r) {
      let o = n.get(),
        i = r.get(),
        a = oe(o);
      return (s) => {
        let l = t.interpolate(o, i)(s);
        return (a.set(l), a);
      };
    },
    difference(n, r) {
      let o = n.get();
      return t.difference(o, r.get());
    },
  };
}
var Zo = class {
  constructor(t) {
    this.value = t;
  }
  value;
  observers = new jn();
  static interpolationFor(t, n) {
    if (we(t)) return sm(t, n);
  }
  get() {
    return this.value;
  }
  set(t, n) {
    let r = this.value;
    (we(t) && (t = t.get()), (this.value = t));
    let o = { value: t, oldValue: r };
    this.observers.notify(o, n);
  }
  finishTransaction(t) {
    return this.observers.finishTransaction(t);
  }
  onUpdate(t) {
    return this.observers.add(t);
  }
};
function lm(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function _n(e) {
  return typeof e != "string" && typeof e != "number";
}
function Kn(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !lm(e);
}
function v(e) {
  return Number.isFinite(e);
}
function XS(e) {
  return v(e) ? e : void 0;
}
var rN = {
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
  $n = ((a) => (
    (a[(a.FixedNumber = 0)] = "FixedNumber"),
    (a[(a.Percentage = 1)] = "Percentage"),
    (a[(a.Auto = 2)] = "Auto"),
    (a[(a.FractionOfFreeSpace = 3)] = "FractionOfFreeSpace"),
    (a[(a.Viewport = 4)] = "Viewport"),
    (a[(a.FitImage = 5)] = "FitImage"),
    a
  ))($n || {});
function vt(e) {
  return Ct(e) ? !1 : e === 2 || e === 5;
}
function oN(e) {
  return !(!Kn(e) || !_n(e));
}
var Qo = {
  quickfix: (e) => (
    (vt(e.widthType) || vt(e.heightType)) && (e.aspectRatio = null),
    v(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || vt(e.widthType) || v(e.maxWidth)) && (e.right = !1), (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || vt(e.heightType) || v(e.maxHeight)) && (e.bottom = !1), (e.heightType = 0)),
    e
  ),
};
function an(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var ei = {
    fromProperties: (e) => {
      let {
          left: t,
          right: n,
          top: r,
          bottom: o,
          width: i,
          height: a,
          centerX: s,
          centerY: l,
          aspectRatio: u,
          autoSize: c,
        } = e,
        m = Qo.quickfix({
          left: v(t) || we(t),
          right: v(n) || we(n),
          top: v(r) || we(r),
          bottom: v(o) || we(o),
          widthType: an(i),
          heightType: an(a),
          aspectRatio: u || null,
          fixedSize: c === !0,
        }),
        f = null,
        h = null,
        T = 0,
        V = 0;
      if (m.widthType !== 0 && typeof i == "string") {
        let C = parseFloat(i);
        i.endsWith("fr") ? ((T = 3), (f = C)) : i === "auto" ? (T = 2) : ((T = 1), (f = C / 100));
      } else i !== void 0 && typeof i != "string" && (f = oe.getNumber(i));
      if (m.heightType !== 0 && typeof a == "string") {
        let C = parseFloat(a);
        a.endsWith("fr")
          ? ((V = 3), (h = C))
          : a === "auto"
            ? (V = 2)
            : ((V = 1), (h = parseFloat(a) / 100));
      } else a !== void 0 && typeof a != "string" && (h = oe.getNumber(a));
      let R = 0.5,
        y = 0.5;
      return (
        s && (R = parseFloat(s) / 100),
        l && (y = parseFloat(l) / 100),
        {
          left: m.left ? oe.getNumber(t) : null,
          right: m.right ? oe.getNumber(n) : null,
          top: m.top ? oe.getNumber(r) : null,
          bottom: m.bottom ? oe.getNumber(o) : null,
          widthType: T,
          heightType: V,
          width: f,
          height: h,
          aspectRatio: m.aspectRatio || null,
          centerAnchorX: R,
          centerAnchorY: y,
        }
      );
    },
    toSize: (e, t, n, r) => {
      let o = null,
        i = null,
        a = t?.sizing ? oe.getNumber(t?.sizing.width) : null,
        s = t?.sizing ? oe.getNumber(t?.sizing.height) : null,
        l = Ys(e.left, e.right);
      if (a && v(l)) o = a - l;
      else if (n && vt(e.widthType)) o = n.width;
      else if (v(e.width))
        switch (e.widthType) {
          case 0:
            o = e.width;
            break;
          case 3:
            o = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
            break;
          case 1:
          case 4:
            a && (o = a * e.width);
            break;
          case 2:
          case 5:
            break;
          default:
            Fe(e.widthType);
        }
      let u = Ys(e.top, e.bottom);
      if (s && v(u)) i = s - u;
      else if (n && vt(e.heightType)) i = n.height;
      else if (v(e.height))
        switch (e.heightType) {
          case 0:
            i = e.height;
            break;
          case 3:
            i = r ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height : null;
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
      return mm(o, i, e, { height: s ?? 0, width: a ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, n = null, r = !1, o = null) => {
      let i = e.left || 0,
        a = e.top || 0,
        { width: s, height: l } = ei.toSize(e, t, n, o),
        u = t?.positioning ?? null,
        c = u ? oe.getNumber(u.width) : null,
        m = u ? oe.getNumber(u.height) : null;
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
      return r ? N.pixelAligned(f) : f;
    },
  },
  um = 200,
  dm = 200;
function Un(e, t, n, r) {
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
      if (!r) return cm(e);
      switch (e) {
        case "maxWidth":
        case "minWidth":
          return (parseFloat(t) / 100) * r.width;
        case "maxHeight":
        case "minHeight":
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function cm(e) {
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
function pm(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Un("minHeight", t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Un("maxHeight", t.maxHeight, n, r), e)),
    e
  );
}
function fm(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Un("minWidth", t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Un("maxWidth", t.maxWidth, n, r), e)),
    e
  );
}
function mm(e, t, n, r, o) {
  let i = fm(v(e) ? e : um, n, r, o),
    a = pm(v(t) ? t : dm, n, r, o);
  return (
    v(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (v(n.left) && v(n.right)
        ? (a = i / n.aspectRatio)
        : v(n.top) && v(n.bottom)
          ? (i = a * n.aspectRatio)
          : n.widthType !== 0
            ? (a = i / n.aspectRatio)
            : (i = a * n.aspectRatio)),
    { width: i, height: a }
  );
}
function Ys(e, t) {
  return !v(e) || !v(t) ? null : e + t;
}
var Pt = ((d) => (
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
))(Pt || {});
function Js(e, t = class {}) {
  class n extends t {
    __class = Pt[e];
    static displayName = `WithClassDiscriminatorMixin(${e})`;
  }
  return ((n.prototype.__class = e), n);
}
function aN(e, t) {
  ((e.prototype.__class = t), (e.displayName = `WithClassDiscriminatorMixin(${t})`));
}
var ym = new Set(Object.keys(Pt));
function Zs(e) {
  return ym.has(e);
}
function Qs(e) {
  if (!Zs(e)) return !1;
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
function el(e) {
  return e ? (e === "RootNode" ? !0 : ti(e)) : !1;
}
function ti(e) {
  return e
    ? !!(hm(e) || ni(e) || e === "OverlayNode" || e === "SlotNode" || e === "SlotPropertyNode")
    : !1;
}
function hm(e) {
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
function ni(e) {
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
function tl(e) {
  switch (e) {
    case "CollectionNode":
    case "CollectionItemNode":
    case "ContentManagementNode":
      return !0;
    default:
      return !1;
  }
}
function mN(e) {
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
function yN(e) {
  return e ? Qs(e) : !1;
}
function hN(e) {
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
function xN(e) {
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
function I(e, t) {
  return e?.__class === t;
}
function CN(e) {
  return I(e, "RootNode");
}
function VN(e) {
  return I(e, "AgentSkillNode");
}
function SN(e) {
  return I(e, "AgentSkillsListNode");
}
function NN(e) {
  return I(e, "DatabaseListNode");
}
function ri(e) {
  return I(e, "FrameNode");
}
function nl(e) {
  return ri(e) && e.layout === "stack";
}
function rl(e) {
  return ri(e) && e.layout === "grid";
}
function RN(e) {
  return ri(e) && e.layout !== void 0;
}
function oi(e) {
  return !e || (!nl(e) && !rl(e)) ? !1 : !!e.dataIdentifier;
}
function xm(e) {
  return !e || (!nl(e) && !rl(e)) || e.dataIdentifier ? !1 : !!e.dataRepeaterArray;
}
function Le(e) {
  return e ? oi(e) || xm(e) : !1;
}
function It(e) {
  return I(e, "SmartComponentNode");
}
function Dt(e) {
  return e?.__class === "LayoutTemplateNode";
}
function ol(e) {
  return e?.__class === "VectorSetNode";
}
function Oe(e) {
  return I(e, "WebPageNode");
}
function kN(e) {
  return e?.__class === "DesignPageNode";
}
function il(e) {
  return e?.__class === "CanvasPageNode";
}
function vN(e) {
  return I(e, "ContentManagementNode");
}
function PN(e) {
  return e?.__class === "TextNode";
}
function We(e) {
  return I(e, "RichTextNode");
}
function gm(e) {
  return I(e, "CodeComponentNode");
}
function IN(e) {
  return I(e, "ShaderNode");
}
function DN(e) {
  return I(e, "OverlayNode");
}
function al(e) {
  return I(e, "SVGNode");
}
function qn(e) {
  return I(e, "CollectionNode");
}
function sl(e) {
  return I(e, "CollectionItemNode");
}
function wN(e) {
  return e?.__class === "BranchNode";
}
function LN(e) {
  return I(e, "BranchesNode");
}
function Xn(e) {
  return I(e, "ShapeContainerNode");
}
function bm(e) {
  return e?.__class === "BooleanShapeNode";
}
function Tm(e) {
  return e?.__class === "ShapeGroupNode";
}
function Cm(e) {
  return e?.__class === "PathNode";
}
function Vm(e) {
  return e?.__class === "RectangleShapeNode";
}
function Sm(e) {
  return e?.__class === "StarShapeNode";
}
function Nm(e) {
  return e?.__class === "OvalShapeNode";
}
function Rm(e) {
  return e?.__class === "PolygonShapeNode";
}
function MN(e) {
  return Tm(e) || bm(e) || Cm(e) || Vm(e) || Nm(e) || Rm(e) || Sm(e);
}
function AN(e) {
  return I(e, "RoutesNode");
}
function EN(e) {
  return I(e, "RedirectRouteNode");
}
function BN(e) {
  return I(e, "ProxyRouteNode");
}
function FN(e) {
  return I(e, "RewriteRouteNode");
}
function ON(e) {
  return I(e, "HeaderRouteNode");
}
function WN(e) {
  return I(e, "FirewallRouteNode");
}
function zN(e) {
  return I(e, "ColorStyleTokenNode");
}
function HN(e) {
  return I(e, "ColorStyleTokenListNode");
}
function GN(e) {
  return I(e, "SharedEnumListNode");
}
function ll(e) {
  return I(e, "SharedEnumNode");
}
function jN(e) {
  return I(e, "ErrorListNode");
}
function _N(e) {
  return e?.__class === "ErrorNode";
}
function KN(e) {
  return e?.__class === "FormPlainTextInputNode";
}
function UN(e) {
  return e?.__class === "FormBooleanInputNode";
}
function $N(e) {
  return e?.__class === "FormSelectNode";
}
function qN(e) {
  return I(e, "ComponentPresetNode");
}
function XN(e) {
  return I(e, "PresetsListNode");
}
function ii(e) {
  return e?.__class === "TextStylePresetNode";
}
function YN(e) {
  return ii(e) && !e.replicaInfo;
}
function JN(e) {
  return ii(e) && !!e.replicaInfo;
}
function ZN(e) {
  return e?.__class === "LinkStylePresetNode";
}
function ul(e) {
  return e?.__class === "BlockquoteStylePresetNode";
}
function QN(e) {
  return e?.__class === "TableStylePresetNode";
}
function eR(e) {
  return ul(e) && !e.replicaInfo;
}
function tR(e) {
  return !!e?.replicaInfo && (ii(e) || ul(e));
}
function nR(e) {
  return e?.__class === "ImageStylePresetNode";
}
function rR(e) {
  return e?.__class === "InlineCodeStylePresetNode";
}
function Yn(e) {
  return I(e, "RouteSegmentNode");
}
function oR(e) {
  return I(e, "RouteSegmentRootNode");
}
function dl(e) {
  return I(e, "SlotNode");
}
function Jn(e) {
  return I(e, "SlotPropertyNode");
}
function iR(e) {
  return I(e, "EntityFolderNode");
}
function aR(e) {
  return I(e, "EntityReferenceNode");
}
function sR(e) {
  return I(e, "ExternalModulesListNode");
}
function lR(e) {
  return e?.__class === "ExternalModuleNode";
}
function uR(e) {
  return I(e, "AnalyticsScopeNode");
}
function dR(e) {
  return e?.__class === "LocalizationGlossaryNode";
}
function cR(e) {
  return e?.__class === "LocalizationGlossaryItemNode";
}
function pR(e) {
  return I(e, "FunnelNode");
}
function fR(e) {
  return I(e, "FunnelStepNode");
}
function mR(e) {
  return I(e, "FunnelStepActionNode");
}
function km(e) {
  return e ? gm(e) && e.isVectorInstance : !1;
}
function yR(e) {
  if (!km(e)) return !1;
  let t = e.dynamicVectorSetIdentifier;
  return t?.type === "variableReference" || t?.type === "computedValue";
}
function hR(e) {
  return e?.__class === "CustomCodeScopeNode";
}
function xR(e) {
  return e?.__class === "CustomCodeNode";
}
var cl = "hidden master",
  bR = { isMaster: !1, isExternalMaster: null, replicaInfo: null },
  vm = "isMaster";
function sn(e) {
  return vm in e;
}
function wt(e) {
  return sn(e) && e.isMaster;
}
function TR(e) {
  return sn(e) && !!e.isExternalMaster;
}
function CR(e) {
  let t = sn(e) ? e.isExternalMaster : null;
  return !!t && t !== cl;
}
function VR(e) {
  return sn(e) ? e.isExternalMaster === cl : !1;
}
function ln(e) {
  return e ? sn(e) && !!e.replicaInfo : !1;
}
function SR(e) {
  return e ? !ln(e) : !1;
}
function pl(e) {
  return ln(e) && !!e.replicaInfo.inheritsFrom;
}
function Lt(e) {
  return e ? !!e.originalid && !ln(e) : !1;
}
function NR(e) {
  return !!e.originalid;
}
function fl(e) {
  for (let t of e.ancestors()) if (wt(t)) return !0;
  return !1;
}
function RR(e) {
  return wt(e) || fl(e);
}
function kR(e, { includeSelf: t } = { includeSelf: !0 }) {
  if (t && wt(e)) return e;
  for (let n of e.ancestors()) if (wt(n)) return n;
  return null;
}
function vR(e) {
  return Lt(e) || fl(e);
}
function Mt(e) {
  return M(e) && e.length === 4 && e.every(S);
}
function ml(e) {
  return Mt(e) ? [Math.min(Math.max(e[0], 0), 1), e[1], Math.min(Math.max(e[2], 0), 1), e[3]] : e;
}
function Zn(e) {
  for (let t of Reflect.ownKeys(e)) {
    let n = e[t];
    !n || (typeof n != "object" && !As(n)) || Zn(n);
  }
  return Object.freeze(e);
}
var Pm = {
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
Zn(Pm);
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
Zn(rt);
var At = "type",
  Qn = "durationBasedSpring",
  tr = "ease",
  Im = "duration",
  Dm = "delay",
  yl = "stiffness",
  hl = "damping",
  wm = "mass",
  ui = [Im, Dm, yl, hl, wm],
  ai = "bounce",
  er = "stagger";
function un(e) {
  return e === "spring" || e === "tween" || e === "inertia" || e === !1;
}
function di(e) {
  return !g(e) || !un(e[At]) || !Mt(e[tr]) ? !1 : ui.every((t) => S(e[t]));
}
function nr(e) {
  return g(e) ? (un(e[At]) || Mt(e[tr]) ? !0 : ui.some((t) => S(e[t]))) : !1;
}
function xl(e) {
  switch (e.type) {
    case "spring":
      return { type: "spring", ...Om(e), delay: e.delay };
    case "tween":
      return { type: "tween", duration: e.duration, ease: ml(e.ease), delay: e.delay };
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
var Lm = ["stiffness", "damping", "mass"],
  Mm = ["duration", "bounce"],
  Am = ["ease"];
function Em(e) {
  return "type" in e
    ? e.type === !1
      ? !0
      : e.type !== "tween" || Am.some((t) => t in e)
        ? !1
        : e.duration === 0
    : !1;
}
function Bm(e) {
  return e.type !== "spring" || Lm.some((t) => t in e) ? !1 : Mm.some((t) => t in e);
}
var si = "bounceStiffness",
  li = "bounceDamping",
  Fm = (e) => {
    let t = { ...rt },
      n = e[At];
    un(n) && (t[At] = Em(e) ? !1 : n);
    let r = e[tr];
    Mt(r) && (t[tr] = r);
    for (let o of ui) {
      let i = e[o];
      S(i) && (t[o] = i);
    }
    return (
      si in e && S(e[si]) && (t[yl] = e[si]),
      li in e && S(e[li]) && (t[hl] = e[li]),
      er in e && S(e[er]) && (t[er] = e[er]),
      Qn in e ? (t[Qn] = e[Qn]) : Bm(e) && (t[Qn] = !0),
      ai in e && (t[ai] = e[ai]),
      t
    );
  };
function gl(e) {
  return nr(e) && !un(e[At]);
}
function zR(e, t = rt) {
  return g(e) && un(e[At]) ? e : nr(e) ? Fm(e) : t;
}
function HR(e) {
  return di(e) && e.type === "tween";
}
function GR(e) {
  return `all ${e.duration}s cubic-bezier(${e.ease.join(",")}) ${e.delay}s`;
}
function Om(e) {
  return e.type === "spring" && e.durationBasedSpring
    ? { duration: Math.min(e.duration, 10), bounce: e.bounce ?? 0 }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
var jR = (e) => e * 1e3;
var Wm = /^(?![\p{L}\p{M}\d-]*-$)(?!-)[\p{L}\p{M}\d-]+$/u,
  bl = /^(?:[\p{L}\p{M}\d](?:[\p{L}\p{M}\d-]*[\p{L}\p{M}\d])?\.)+[\p{L}\p{M}]+$/u;
function KR(e, t) {
  return e
    ? t && e === "www"
      ? "InvalidPhrase"
      : (t ? Wm : bl).exec(e)
        ? null
        : "InvalidCharacter"
    : "Empty";
}
function ci(e, t = !1) {
  try {
    let n = new URL(e);
    return n.protocol === "http:" || n.protocol === "https:"
      ? n.hostname === "localhost"
        ? !0
        : bl.test(n.hostname)
      : !t;
  } catch {
    return !1;
  }
}
function UR(e) {
  let t = e.split(/#|\?/u)[0];
  if (!t) return !1;
  let [n, r = ""] = t.split("/", 2),
    o = "/" + r,
    i = new URL("https://example.com");
  return (
    (i.host = n),
    (i.pathname = o),
    !!i.hostname.match(/.+\..+/) && i.href === `https://${n}/${r}`
  );
}
function pi(e) {
  return (
    (e = e.trim()),
    e
      ? ci(e, !0)
        ? { result: "ok", normalizedValue: e }
        : ci(`https://${e}`)
          ? { result: "ok", normalizedValue: `https://${e}` }
          : { result: "error", message: "Please enter a valid URL" }
      : { result: "error", message: "Please enter a valid URL" }
  );
}
var Tl = ":([a-z]\\w*)",
  YR = new RegExp(Tl, "i"),
  fi = new RegExp(Tl, "gi");
var Cl = "type",
  zm = "fetchDataValue";
function rr(e) {
  return g(e) && Cl in e && e[Cl] === zm;
}
function ok(e) {
  return pi(e.url).result !== "error";
}
function ik(e) {
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
function ak(e) {
  if (e.controlProp) return e.controlProp.value;
  let t = e.fallbackValue;
  return (x(!k(t), "fallbackValue must be defined"), t);
}
function sk(e) {
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
function Sl(e, t) {
  if (
    !rr(t) ||
    e.url !== t.url ||
    e.resultKeyPath !== t.resultKeyPath ||
    e.cacheDuration !== t.cacheDuration ||
    e.fallbackValue !== t.fallbackValue
  )
    return !1;
  let n = Vl(e.url),
    r = Vl(t.url);
  if (n.length !== r.length) return !1;
  for (let o in e.variables) if (!de(e.variables[o], t.variables[o])) return !1;
  return !0;
}
function lk(e, t) {
  let n = pi(e.url);
  return n.result !== "ok"
    ? e.url
    : n.normalizedValue.replaceAll(fi, (i, a) => {
        let s = e.variables[a];
        return s ? (p(s) ? s : t(s)) : "";
      });
}
function Vl(e) {
  let t = e.matchAll(fi),
    n = new Set();
  for (let r of t) {
    let o = r[1];
    o && o.length !== 0 && n.add(o);
  }
  return Array.from(n);
}
var uk = [
  "https://api.fetch.tools/weather?city=:city",
  "https://api.fetch.tools/views",
  "https://api.fetch.tools/location",
  "https://api.fetch.tools/emoji",
];
var Nl = {
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
  Hm = {
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
function or(e) {
  return p(e) && Object.hasOwn(Nl, e);
}
function dn(e) {
  return p(e) && Object.hasOwn(Hm, e);
}
var mk = dn,
  Gm = { boolean: !0, number: !0, string: !0, color: !0, date: !0, link: !0, image: !0 };
function yk(e) {
  return p(e) && Object.hasOwn(Gm, e);
}
function hk(e) {
  return Wn(Nl).filter(e);
}
var jm = { responsiveimage: !0 };
function kk(e) {
  return or(e) ? !0 : p(e) && e in jm;
}
var _m = "type",
  Km = "valueTransform",
  Um = [
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
  $m = new Set(Um),
  qm = {
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
function Xm(e) {
  return $m.has(e);
}
function Ym(e) {
  return Object.hasOwn(qm, e);
}
var Jm = {
  enumToDisplayName: !0,
  convertFromEnum: !0,
  convertFromBoolean: !0,
  convertFromString: !0,
  arrayToArray: !0,
  toDateString: !0,
};
function Zm(e) {
  return Object.hasOwn(Jm, e);
}
var Qm = {
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
  ar = Os(Qm);
function vk() {
  return ar;
}
function ey(e) {
  let t = mi[e];
  return !(Te(t) || k(t));
}
function Pk(e) {
  return ey(e.name);
}
function Ik(e) {
  return Xm(e.name) && kl(e.name) !== null;
}
function ty(e) {
  return Ym(e) || Zm(e);
}
var Rl = [
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
function Dk(e) {
  return Rl.includes(e);
}
var mi = {
    contains: ["string", "multicollectionreference"],
    containsAny: ["multicollectionreference"],
    containsAll: ["multicollectionreference"],
    endsWith: ["string"],
    startsWith: ["string"],
    prefix: ["string"],
    suffix: ["string"],
    equals: ["string", "boolean", "number", "enum", "date", "collectionreference"],
    isSet: Rl,
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
  ny = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of ar) {
        let n = mi[t];
        if (n)
          for (let r of n) {
            let o = e.get(r);
            o ? o.push(t) : e.set(r, [t]);
          }
      }
      return e;
    };
  })();
function ry(e) {
  return ny().get(e);
}
function wk(e) {
  let t = ry(e);
  return !!(t && t.length > 0);
}
function kl(e) {
  return mi[e];
}
var oy = {
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
function Lk(e) {
  return oy[e];
}
var yi = {
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
  iy = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of ar) {
        let n = yi[t];
        for (let r of n) {
          let o = e.get(r);
          o ? o.push(t) : e.set(r, [t]);
        }
      }
      return e;
    };
  })();
function Mk(e) {
  return iy().get(e);
}
function vl(e) {
  return yi[e];
}
function Ak(e, t) {
  return ty(e.name) ? yi[e.name].includes(t) : !1;
}
function Ek(e) {
  switch (e.name) {
    case "convertFromEnum":
    case "convertFromBoolean":
    case "convertFromString":
      return e.outputType;
    default: {
      let t = vl(e.name);
      x(t.length === 1);
      let n = t[0];
      return (x(n, "Value transform output type must be defined"), n);
    }
  }
}
var Bk = new Set(["convertFromBoolean", "equals", "isSet"]),
  Pl = {
    isSet: "Isn\u2019t set",
    equals: "Doesn\u2019t equal",
    startsWith: "Doesn\u2019t start with",
    endsWith: "Doesn\u2019t end with",
    contains: "Doesn\u2019t contain",
    greaterThan: "Less than or equal",
    lessThan: "Greater than or equal",
    isIncludedIn: "Isn\u2019t included in",
  };
function Il(e) {
  return Object.hasOwn(Pl, e);
}
function Fk(e, t) {
  if (t) return (x(Il(e)), Pl[e]);
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
      return Ie(e);
  }
}
var ay = new Set(["prefix", "suffix"]);
function sy(e) {
  return ay.has(e);
}
var ir;
function ly(e) {
  return (
    ir ||
      (ir = new Set(
        ar.filter((t) => {
          let n = kl(t);
          if (n?.length !== 1 || n[0] !== "array") return !1;
          let r = vl(t);
          return r.length !== 1 ? !1 : r[0] === "array";
        })
      )),
    ir.has(e)
  );
}
function Ok(e) {
  return ly(e) || sy(e);
}
function Wk(e, t) {
  let n = e.findIndex((i) => i.id === t),
    r = e[n];
  if (!r) return null;
  let o = 1;
  if (Il(r.name)) for (let i = n + 1, a = e.length; i < a && e[i]?.name === "negate"; i++) o++;
  return { start: n, length: o };
}
function uy(e) {
  return g(e) && e[_m] === Km;
}
function Dl(e, t) {
  if (!uy(t) || e.name !== t.name) return !1;
  for (let n of Wn(e)) if (n !== "id" && e[n] !== t[n]) return !1;
  return !0;
}
var zk = ["standard", "compact"],
  Hk = ["short", "long"],
  Gk = ["decimal", "currency", "unit"],
  jk = ["symbol", "narrowSymbol", "code", "name"],
  _k = ["short", "narrow", "long"],
  Kk = ["year", "month", "day", "hour12", "hour24", "minute"];
var wl = "type",
  cn = "variableReference";
function D(e) {
  return g(e) && wl in e && e[wl] === cn;
}
function Ll(e, t) {
  return { type: cn, id: e, providerId: t };
}
function hi(e, t) {
  return { type: cn, id: e, providerId: t };
}
function sr(e, t) {
  return D(t) ? e.id === t.id && e.providerId === t.providerId : !1;
}
var Ml = "transform";
function qk(e) {
  return D(e) && e.providerId === Ml;
}
function Xk(e) {
  return { type: cn, id: e, providerId: Ml };
}
var Al = "payload",
  El = ".";
function Yk(e) {
  return D(e) && e.providerId === Al;
}
function Jk(e) {
  return { type: cn, id: e.join(El), providerId: Al };
}
function Zk(e) {
  let t = dy(e.id);
  if (!t.some((n) => n.length === 0)) return t;
}
function dy(e) {
  return e.split(El);
}
var Bl = "type",
  xi = "computedValue",
  cy = {
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
function iv(e) {
  return p(e) && Object.hasOwn(cy, e);
}
function me(e) {
  return g(e) && Bl in e && e[Bl] === xi;
}
function av(e) {
  return me(e) && rr(e.startValue);
}
function Fl(e) {
  return me(e) && D(e.startValue);
}
function sv(e) {
  return (
    me(e) &&
    e.transforms.length === 1 &&
    e.transforms[0]?.name === "toDateString" &&
    e.transforms[0]?.display === "relative"
  );
}
function lv(e) {
  return me(e) && e.transforms.some((t) => t.name === "toDateString");
}
function uv(e) {
  return me(e) && e.transforms.some((t) => t.name === "toDateString" && t.display !== "relative");
}
function Ol(e, t) {
  return !me(t) ||
    e.outputType !== t.outputType ||
    e.startValue.type !== t.startValue.type ||
    (D(e.startValue) && !sr(e.startValue, t.startValue)) ||
    (rr(e.startValue) && !Sl(e.startValue, t.startValue)) ||
    e.transforms.length !== t.transforms.length
    ? !1
    : e.transforms.every((n, r) => Dl(n, t.transforms[r]));
}
function Wl(e, t, n) {
  return D(t)
    ? { type: xi, outputType: e, startValue: t, transforms: n }
    : { type: xi, outputType: e, startValue: t, transforms: n };
}
function A(e) {
  return D(e) || me(e);
}
function zl(e, t) {
  return D(e) ? sr(e, t) : Ol(e, t);
}
var bv = { isVariant: void 0, isBreakpoint: void 0, gesture: void 0, variantTransition: void 0 },
  py = "isVariant";
function fy(e) {
  return py in e;
}
var Tv = ["hover", "pressed"],
  my = "gesture";
function Gl(e) {
  return my in e;
}
function ye(e) {
  return fy(e) && e.isVariant === !0;
}
function jl(e) {
  return ye(e) && wt(e);
}
function Cv(e) {
  for (let t of e.ancestors()) if (jl(t)) return t;
  return null;
}
function Vv(e) {
  return ye(e) ? !Gl(e) || !e.gesture : !1;
}
function Hl(e) {
  return _l(e) && pl(e) && Gl(e) && !!e.gesture;
}
function Sv(e) {
  if (Hl(e)) return !0;
  if (!Lt(e)) return !1;
  for (let t of e.ancestors()) if (Hl(t)) return !0;
  return !1;
}
function Nv(e) {
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
function Rv(e) {
  return ye(e) || yy(e);
}
function yy(e) {
  return e.cache.insideVariant;
}
function _l(e) {
  return ln(e) && ye(e);
}
function hy(e) {
  return Lt(e) && e.cache.insideVariant;
}
function kv(e) {
  return _l(e) || hy(e);
}
var xy = "isBreakpoint";
function gy(e) {
  return xy in e;
}
function it(e) {
  return e ? ye(e) && gy(e) && e.isBreakpoint === !0 : !1;
}
function vv(e) {
  return it(e) && jl(e);
}
function Pv(e) {
  return e ? ye(e) && !it(e) : !1;
}
function Iv(e) {
  return ye(e) ? di(e.variantTransition) || A(e.variantTransition) || gl(e.variantTransition) : !1;
}
var by = Fn("serializeJS"),
  Ty = {
    serializeSpread(e) {
      return `...${e}`;
    },
    serializeKeyValue(e, t, n) {
      let r = U(t, n);
      if (k(r)) return;
      let o = e;
      if (!/^[a-z$_][\w$]*$/i.test(o)) o = JSON.stringify(o);
      else if (o === r) return r;
      return `${o}: ${r}`;
    },
    joinObject(e) {
      return `{${e.join(", ")}}`;
    },
  },
  Kl = new Intl.Collator("en", { sensitivity: "base" }).compare;
function lr(e, t, n) {
  let r = Ul(n, t),
    o = [];
  for (let [i, a] of Object.entries(t)) {
    let s = e.serializeKeyValue(i, a, r);
    s && o.push(s);
  }
  return (
    t instanceof at
      ? (at.isSorted(t) && o.sort(Kl),
        o.unshift(...at.spreadsAtStart(t).map(e.serializeSpread)),
        o.push(...at.spreadsAtEnd(t).map(e.serializeSpread)))
      : o.sort(Kl),
    e.joinObject(o)
  );
}
function U(e, t = new Set()) {
  if (e instanceof E) return String(e);
  if (typeof e == "number" || typeof e == "boolean" || Te(e)) return String(e);
  if (p(e))
    return JSON.stringify(e).replace(
      /[\u2028\u2029]/gu,
      (n) => `\\u${n.charCodeAt(0).toString(16)}`
    );
  if (M(e)) {
    let n = Ul(t, e),
      r = [];
    for (let o of e) {
      let i = U(o, n);
      k(i) || r.push(i);
    }
    return `[${r.join(", ")}]`;
  } else if (typeof e == "object") return lr(Ty, e, t);
}
function Ul(e, t) {
  if (e.has(t))
    throw (
      by.error("Encountered circular reference to object while serializing:", t),
      Error("Circular Reference")
    );
  let n = new Set(e);
  return (n.add(t), n);
}
var E = class e extends String {
  static fn(t, ...n) {
    let r = [];
    for (let o of n) (o || (S(o) && o === 0) || (p(o) && o === "")) && r.push(U(o));
    return new e(`${t}(${r.join(", ")})`);
  }
  static optionalFn(t, ...n) {
    return new e(`${t}?.(${n.map((r) => U(r)).join(", ")})`);
  }
  static fromValue(t) {
    return new e(U(t));
  }
  static absoluteURL(t) {
    return t.match(/^https?:/u) ? new e(U(t)) : new e(`new URL(${U(t)}, import.meta.url).href`);
  }
  static hasMarker(t, n) {
    return t.#e === n;
  }
  static withMarker(t, n) {
    let r = new e(n);
    return ((r.#e = t), r);
  }
  static isUndefined(t) {
    return t instanceof e && U(t) === "undefined";
  }
  static isTrue(t) {
    return t instanceof e && U(t) === "true";
  }
  #e = Symbol("Safe JS");
};
((t) => {
  class e {
    #e = new globalThis.Set();
    constructor(r) {
      if (r) for (let o of r) this.add(o);
    }
    *[Symbol.iterator]() {
      for (let r of this.#e) yield new t(r);
    }
    get size() {
      return this.#e.size;
    }
    add(r) {
      this.#e.add(String(r));
    }
    delete(r) {
      this.#e.delete(String(r));
    }
    has(r) {
      return this.#e.has(String(r));
    }
    values() {
      return this.#e.values();
    }
  }
  t.Set = e;
})((E ||= {}));
function $l(e) {
  return e instanceof E;
}
var at = class e extends Object {
  #e;
  constructor(t, n = 0) {
    (super(), k(t) || e.assign(this, t), (this.#e = n));
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
    for (let n in t) if (!k(t[n])) return !1;
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
    for (let [r, o] of t) {
      let i = r instanceof E ? U(r) : r;
      n[i] = o;
    }
    return new e(n);
  }
};
function Mv(e) {
  return e instanceof at;
}
function st(e, t = "") {
  let n = "";
  for (let r of e) r && (n && (n += t), (n += r instanceof E ? U(r) : r));
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
  function r(s) {
    return a(
      s,
      `
`
    );
  }
  a.linesFrom = r;
  function o(...s) {
    return a(
      s,
      `

`
    );
  }
  a.sections = o;
  function i(s) {
    return a(
      s,
      `

`
    );
  }
  a.sectionsFrom = i;
})((st ||= {}));
function ur(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((r, o) => {
      n.push(U(r), e[o + 1]);
    }),
    new E(n.join(""))
  );
}
((o) => {
  function e(...i) {
    return new E(
      st(
        i,
        `
`
      )
    );
  }
  o.joinLines = e;
  function t(...i) {
    return new E(
      st(
        i,
        `

`
      )
    );
  }
  o.joinSections = t;
  function n(i) {
    return new E(
      st(
        i,
        `
`
      )
    );
  }
  o.linesFrom = n;
  function r(i) {
    return new E(st(i, ", "));
  }
  o.listFrom = r;
})((ur ||= {}));
var ql = Symbol("jst template literal");
function pn(e, ...t) {
  if (t.every((r) => p(r) || S(r) || ee(r) || Te(r))) {
    let r = [e[0]];
    return (
      t.forEach((o, i) => {
        r.push(String(o), e[i + 1]);
      }),
      r.join("")
    );
  }
  let n = ["`", gi(e[0])];
  return (
    t.forEach((r, o) => {
      (p(r)
        ? n.push(gi(r))
        : typeof r == "number" || typeof r == "boolean" || Te(r)
          ? n.push(String(r))
          : r instanceof E && E.hasMarker(r, ql)
            ? n.push(r.substring(1, r.length - 1))
            : n.push("${", U(r), "}"),
        n.push(gi(e[o + 1])));
    }),
    n.push("`"),
    E.withMarker(ql, n.join(""))
  );
}
((n) => {
  function e(r, o) {
    let i = n`${r[0]}`;
    for (let a = 1; a < r.length; a++) i = n`${i}${o}${r[a]}`;
    return i;
  }
  n.join = e;
  function t(r, o, i) {
    let a = [],
      s = [],
      l = 0;
    for (let u of r.matchAll(o))
      (x(typeof u.index == "number", "unexpected non-number in match"),
        a.push(r.substring(l, u.index)),
        s.push(typeof i == "function" ? i(u[0], ...u.slice(1)) : i),
        (l = u.index + u[0].length));
    return (a.push(r.substring(l)), n(a, ...s));
  }
  n.replaceAll = t;
})((pn ||= {}));
var Cy = /(?<char>[A-Z])/gu;
function Vy(e) {
  return e.replace(Cy, "-$<char>").toLowerCase();
}
var Sy = new Set(["viewBox", "stdDeviation"]),
  Ny = {
    serializeSpread(e) {
      return `{...${e}}`;
    },
    serializeKeyValue(e, t, n) {
      if (k(t) || E.isUndefined(t)) return;
      let r = Sy.has(e) ? e : Vy(e);
      if (t === !0 || E.isTrue(t)) return r;
      if (S(t)) return `${r}="${t}"`;
      let o = U(t, n);
      if (o !== "") return `${r}=${o}`;
    },
    joinObject(e) {
      return e.join(" ");
    },
  };
function Xl(e) {
  return e ? new E(" " + lr(Ny, e, new Set())) : ur``;
}
var bi = Symbol("svg tag");
function Jl(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((r, o) => {
      n.push(U(r), e[o + 1]);
    }),
    E.withMarker(bi, n.join(""))
  );
}
((o) => {
  function e(i, a, s) {
    return s && U(s)
      ? o`<${new E(i)}${Xl(a)}>${o.children(s)}</${new E(i)}>`
      : o`<${new E(i)}${Xl(a)}/>`;
  }
  o.tag = e;
  function t(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  o.applyTransforms = t;
  function n(i) {
    return E.withMarker(bi, i);
  }
  o.fromTrustedString = n;
  function r(i) {
    return (x(E.hasMarker(i, bi), "SVG children can only be svg"), i);
  }
  o.children = r;
})((Jl ||= {}));
var Ry = {
  serializeSpread(e) {
    return `{...${e}}`;
  },
  serializeKeyValue(e, t, n) {
    if (k(t) || E.isUndefined(t)) return;
    if (t === !0 || E.isTrue(t)) return e;
    let r = U(t, n);
    if (r !== "") return `${e}={${r}}`;
  },
  joinObject(e) {
    return e.join(" ");
  },
};
function Yl(e) {
  return e ? new E(" " + lr(Ry, e, new Set())) : ur``;
}
var Ti = Symbol("jsx tag");
function Zl(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((r, o) => {
      n.push(U(r), e[o + 1]);
    }),
    E.withMarker(Ti, n.join(""))
  );
}
((o) => {
  function e(i) {
    return E.hasMarker(i, Ti) ? i : o`{${i}}`;
  }
  o.children = e;
  function t(i) {
    return E.withMarker(Ti, i);
  }
  o.fromTrustedString = t;
  function n(i, a, s) {
    return (
      (i = $l(i) ? i : new E(i)),
      s && U(s) ? o`<${i}${Yl(a)}>${o.children(s)}</${i}>` : o`<${i}${Yl(a)}/>`
    );
  }
  o.tag = n;
  function r(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  o.applyTransforms = r;
})((Zl ||= {}));
function gi(e) {
  return e ? e.replace(/[`\\]|\$(?=\{)/gu, "\\$&") : "";
}
var fn = {
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
function ze(e, t, n, r = !1) {
  let [o, i] = t,
    [a, s] = n,
    l = i - o;
  if (l === 0) return (s + a) / 2;
  let u = s - a;
  if (u === 0) return a;
  let c = a + ((e - o) / l) * u;
  if (r === !0)
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
function He(e) {
  let t = dr(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function dr(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var Ci = ((i) => (
    (i.RGB = "rgb"),
    (i.HSL = "hsl"),
    (i.HSV = "hsv"),
    (i.HEX = "hex"),
    (i.NAME = "name"),
    i
  ))(Ci || {}),
  Ql = ((i) => (
    (i.RGB = "rgb"),
    (i.RGBA = "rgba"),
    (i.HSL = "hsl"),
    (i.HSLA = "hsla"),
    (i.HUSL = "husl"),
    i
  ))(Ql || {});
var X = class e {
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
      r = n % 16,
      o = ((n - r) / 16) | 0;
    return e.hexChars.charAt(o) + e.hexChars.charAt(r);
  }
  static hexToRgbChannel(t, n) {
    let r = e.hexChars.indexOf(t.charAt(n)),
      o = e.hexChars.indexOf(t.charAt(n + 1));
    return (r * 16 + o) / 255;
  }
  static distanceFromOriginAngle(t, n, r) {
    let o = n / (Math.sin(r) - t * Math.cos(r));
    return o < 0 ? 1 / 0 : o;
  }
  static distanceFromOrigin(t, n) {
    return Math.abs(n) / Math.sqrt(Math.pow(t, 2) + 1);
  }
  static min6(t, n, r, o, i, a) {
    return Math.min(t, Math.min(n, Math.min(r, Math.min(o, Math.min(i, a)))));
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
      r = e.toLinear(this.rgb_b);
    ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
      (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
      (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
  }
  xyzToLuv() {
    let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
      n = 4 * this.xyz_x,
      r = 9 * this.xyz_y;
    (t !== 0 ? ((n /= t), (r /= t)) : ((n = NaN), (r = NaN)),
      (this.luv_l = e.yToL(this.xyz_y)),
      this.luv_l === 0
        ? ((this.luv_u = 0), (this.luv_v = 0))
        : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
          (this.luv_v = 13 * this.luv_l * (r - e.refV))));
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
      r = n > e.epsilon ? n : t / e.kappa,
      o = r * (284517 * e.m_r0 - 94839 * e.m_r2),
      i = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
      a = r * (632260 * e.m_r2 - 126452 * e.m_r1),
      s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
      l = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
      u = r * (632260 * e.m_g2 - 126452 * e.m_g1),
      c = r * (284517 * e.m_b0 - 94839 * e.m_b2),
      m = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
      f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
    ((this.r0s = o / a),
      (this.r0i = (i * t) / a),
      (this.r1s = o / (a + 126452)),
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
      r = e.distanceFromOrigin(this.g0s, this.g0i),
      o = e.distanceFromOrigin(this.g1s, this.g1i),
      i = e.distanceFromOrigin(this.b0s, this.b0i),
      a = e.distanceFromOrigin(this.b1s, this.b1i);
    return e.min6(t, n, r, o, i, a);
  }
  calcMaxChromaHsluv(t) {
    let n = (t / 360) * Math.PI * 2,
      r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
      o = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
      i = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
      a = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
      s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
      l = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
    return e.min6(r, o, i, a, s, l);
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
X.hexChars = "0123456789abcdef";
X.refY = 1;
X.refU = 0.19783000664283;
X.refV = 0.46831999493879;
X.kappa = 903.2962962;
X.epsilon = 0.0088564516;
X.m_r0 = 3.240969941904521;
X.m_r1 = -1.537383177570093;
X.m_r2 = -0.498610760293;
X.m_g0 = -0.96924363628087;
X.m_g1 = 1.87596750150772;
X.m_g2 = 0.041555057407175;
X.m_b0 = 0.055630079696993;
X.m_b1 = -0.20397695888897;
X.m_b2 = 1.056971514242878;
var ce = new X();
function tu(e, t, n) {
  return (
    (ce.rgb_r = e / 255),
    (ce.rgb_g = t / 255),
    (ce.rgb_b = n / 255),
    ce.rgbToHsluv(),
    { h: ce.hsluv_h, s: ce.hsluv_s, l: ce.hsluv_l }
  );
}
function nu(e, t, n, r = 1) {
  return (
    (ce.hsluv_h = e),
    (ce.hsluv_s = t),
    (ce.hsluv_l = n),
    ce.hsluvToRgb(),
    { r: ce.rgb_r * 255, g: ce.rgb_g * 255, b: ce.rgb_b * 255, a: r }
  );
}
function Et(e, t, n, r) {
  let o = Math.round(e),
    i = Math.round(t * 100),
    a = Math.round(n * 100);
  return r === void 0 || r === 1
    ? "hsv(" + o + ", " + i + "%, " + a + "%)"
    : "hsva(" + o + ", " + i + "%, " + a + "%, " + r + ")";
}
function ru(e, t, n) {
  return {
    r: Qe(e) ? se(e, 255) * 255 : 0,
    g: Qe(t) ? se(t, 255) * 255 : 0,
    b: Qe(n) ? se(n, 255) * 255 : 0,
  };
}
function Ni(e, t, n, r) {
  let o = [
    Si(Math.round(e).toString(16)),
    Si(Math.round(t).toString(16)),
    Si(Math.round(n).toString(16)),
  ];
  return r &&
    o[0].charAt(0) === o[0].charAt(1) &&
    o[1].charAt(0) === o[1].charAt(1) &&
    o[2].charAt(0) === o[2].charAt(1)
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join("");
}
function Bt(e, t, n) {
  let r,
    o,
    i = se(e, 255),
    a = se(t, 255),
    s = se(n, 255),
    l = Math.max(i, a, s),
    u = Math.min(i, a, s),
    c = (o = r = (l + u) / 2);
  if (l === u) c = o = 0;
  else {
    let m = l - u;
    switch (((o = r > 0.5 ? m / (2 - l - u) : m / (l + u)), l)) {
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
  return { h: c * 360, s: o, l: r };
}
function Vi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function ou(e, t, n) {
  let r, o, i;
  if (((e = se(e, 360)), (t = se(t * 100, 100)), (n = se(n * 100, 100)), t === 0)) r = o = i = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - a;
    ((r = Vi(s, a, e + 1 / 3)), (o = Vi(s, a, e)), (i = Vi(s, a, e - 1 / 3)));
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function Ri(e, t, n) {
  ((e = se(e, 255)), (t = se(t, 255)), (n = se(n, 255)));
  let r = Math.max(e, t, n),
    o = Math.min(e, t, n),
    i = r - o,
    a = 0,
    s = r === 0 ? 0 : i / r,
    l = r;
  if (r === o) a = 0;
  else {
    switch (r) {
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
function iu(e, t, n) {
  ((e = se(e, 360) * 6), (t = se(t * 100, 100)), (n = se(n * 100, 100)));
  let r = Math.floor(e),
    o = e - r,
    i = n * (1 - t),
    a = n * (1 - o * t),
    s = n * (1 - (1 - o) * t),
    l = r % 6,
    u = [n, a, i, i, s, n][l],
    c = [s, n, n, a, i, i][l],
    m = [i, i, s, n, n, a][l];
  return { r: u * 255, g: c * 255, b: m * 255 };
}
function se(e, t) {
  let n, r;
  if ((typeof t == "string" ? (n = parseFloat(t)) : (n = t), typeof e == "string")) {
    ky(e) && (e = "100%");
    let o = vy(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), o && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function ky(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function vy(e) {
  return typeof e == "string" && e.includes("%");
}
function Si(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var Me = (() => {
  let n = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + "[-\\+]?\\d+%?" + ")",
    r = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?",
    o = "[\\s|\\(]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")[,|\\s]+(" + n + ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + r),
    rgba: new RegExp("rgba" + o),
    hsl: new RegExp("hsl" + r),
    hsla: new RegExp("hsla" + o),
    hsv: new RegExp("hsv" + r),
    hsva: new RegExp("hsva" + o),
    hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
    hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
    hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
    hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
  };
})();
function mn(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, "").trimEnd().toLowerCase(),
    r = fn[n];
  if ((r && (n = r), n === "transparent")) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let o;
  return (o = Me.rgb.exec(n))
    ? {
        r: parseInt(o[1] ?? ""),
        g: parseInt(o[2] ?? ""),
        b: parseInt(o[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (o = Me.rgba.exec(n))
      ? {
          r: parseInt(o[1] ?? ""),
          g: parseInt(o[2] ?? ""),
          b: parseInt(o[3] ?? ""),
          a: parseFloat(o[4] ?? ""),
          format: "rgb",
        }
      : (o = Me.hsl.exec(n))
        ? { h: parseInt(o[1] ?? ""), s: He(o[2] ?? ""), l: He(o[3] ?? ""), a: 1, format: "hsl" }
        : (o = Me.hsla.exec(n))
          ? {
              h: parseInt(o[1] ?? ""),
              s: He(o[2] ?? ""),
              l: He(o[3] ?? ""),
              a: parseFloat(o[4] ?? ""),
              format: "hsl",
            }
          : (o = Me.hsv.exec(n))
            ? { h: parseInt(o[1] ?? ""), s: He(o[2] ?? ""), v: He(o[3] ?? ""), a: 1, format: "hsv" }
            : (o = Me.hsva.exec(n))
              ? {
                  h: parseInt(o[1] ?? ""),
                  s: He(o[2] ?? ""),
                  v: He(o[3] ?? ""),
                  a: parseFloat(o[4] ?? ""),
                  format: "hsv",
                }
              : (o = Me.hex8.exec(n))
                ? {
                    r: he(o[1] ?? ""),
                    g: he(o[2] ?? ""),
                    b: he(o[3] ?? ""),
                    a: eu(o[4] ?? ""),
                    format: r ? "name" : "hex",
                  }
                : (o = Me.hex6.exec(n))
                  ? {
                      r: he(o[1] ?? ""),
                      g: he(o[2] ?? ""),
                      b: he(o[3] ?? ""),
                      a: 1,
                      format: r ? "name" : "hex",
                    }
                  : (o = Me.hex4.exec(n))
                    ? {
                        r: he(`${o[1]}${o[1]}`),
                        g: he(`${o[2]}${o[2]}`),
                        b: he(`${o[3]}${o[3]}`),
                        a: eu(o[4] + "" + o[4]),
                        format: r ? "name" : "hex",
                      }
                    : (o = Me.hex3.exec(n))
                      ? {
                          r: he(`${o[1]}${o[1]}`),
                          g: he(`${o[2]}${o[2]}`),
                          b: he(`${o[3]}${o[3]}`),
                          a: 1,
                          format: r ? "name" : "hex",
                        }
                      : !1;
}
function he(e) {
  return parseInt(e, 16);
}
function eu(e) {
  return he(e) / 255;
}
var Py =
  /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u;
function au(e) {
  let t = Py.exec(e);
  if (!t) return null;
  let { r: n = "0", g: r = "0", b: o = "0", a: i } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(o), a: i ? parseFloat(i) : 1 };
}
function ki(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function su({ r: e, g: t, b: n, a: r }) {
  return { r: ki(e), g: ki(t), b: ki(n), a: r };
}
function vi(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function lu({ r: e, g: t, b: n, a: r }) {
  return { r: vi(e), g: vi(t), b: vi(n), a: r };
}
var Iy = (e) => {
    let { r: t, g: n, b: r, a: o } = su(e);
    return {
      x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
      y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
      z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
      a: o,
    };
  },
  Dy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
    lu({
      r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
      g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
      b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
      a: r,
    }),
  wy = (e) => {
    let { r: t, g: n, b: r, a: o } = su(e);
    return {
      x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
      y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
      z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
      a: o,
    };
  },
  Ly = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
    lu({
      r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
      g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
      b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
      a: r,
    });
function uu({ r: e, g: t, b: n, a: r }) {
  let o = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = { h: 0, s: o === 0 ? 0 : 1 - i / o, v: o, a: r };
  return (
    o - i !== 0 &&
      (a.h =
        (o === e
          ? (t - n) / (o - i) + (t < n ? 6 : 0)
          : o === t
            ? (n - e) / (o - i) + 2
            : (e - t) / (o - i) + 4) * 60),
    a
  );
}
function My(e) {
  return (e = e % 360) < 0 ? e + 360 : e;
}
function Pi({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let o = My(e),
    i = Math.abs(((o / 60) % 2) - 1);
  switch (Math.floor(o / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * i), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * i), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * i), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * i), b: n, a: r };
    case 4:
      return { r: n * (1 - t * i), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * i), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Ii(e) {
  return Ly(wy(e));
}
function du(e) {
  return Dy(Iy(e));
}
var lt = class e {
  format = "p3";
  r;
  g;
  b;
  a;
  constructor(t) {
    ((this.r = t.r ?? 0), (this.g = t.g ?? 0), (this.b = t.b ?? 0), (this.a = t.a ?? 1));
  }
  hsv() {
    return uu(this);
  }
  rgb() {
    return du(this);
  }
  hsl() {
    return Bt(this.r, this.g, this.b);
  }
  toString(t = "p3", n) {
    switch (t) {
      case "p3": {
        let r = n?.r ?? this.r,
          o = n?.g ?? this.g,
          i = n?.b ?? this.b,
          a = n?.a ?? this.a;
        return a === 1
          ? `color(display-p3 ${r} ${o} ${i})`
          : `color(display-p3 ${r} ${o} ${i} / ${a})`;
      }
      case "srgb": {
        let r = this.rgb(),
          o = Math.round(Math.max(0, Math.min(r.r, 1)) * 100) / 100,
          i = Math.round(Math.max(0, Math.min(r.g, 1)) * 100) / 100,
          a = Math.round(Math.max(0, Math.min(r.b, 1)) * 100) / 100,
          s = n?.r ?? o * 255,
          l = n?.g ?? i * 255,
          u = n?.b ?? a * 255,
          c = n?.a ?? r.a ?? 1;
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
        return new e(Pi(t));
      case "srgb":
        return new e(Ii(Pi(t)));
    }
  }
  static fromRGB(t) {
    return new e(
      Ii({
        r: Math.round((t.r / 255) * 1e4) / 1e4,
        g: Math.round((t.g / 255) * 1e4) / 1e4,
        b: Math.round((t.b / 255) * 1e4) / 1e4,
        a: t.a ?? 1,
      })
    );
  }
  static fromRGBString(t) {
    let n = b(t);
    if (n) return e.fromRGB(n);
  }
  static fromString(t) {
    if (!e.isP3String(t)) return;
    let n = au(t);
    if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
  }
  static srgbFromValue(t) {
    if (!Q(t) || !b.isP3String(t)) return t;
    let n = e.fromString(t);
    return n ? n.toString("srgb") : t;
  }
  static multiplyAlpha(t, n) {
    return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
  }
};
function oP(e) {
  return lt.srgbFromValue(e);
}
var cu = new Map(),
  b = (() => {
    function e(o, i, a, s) {
      if (typeof o == "string") {
        let u = cu.get(o);
        return u || ((u = t(o)), u === void 0 ? { ...e("black"), isValid: !1 } : (cu.set(o, u), u));
      }
      let l = t(o, i, a, s);
      return l !== void 0 ? l : { ...e("black"), isValid: !1 };
    }
    function t(o, i, a, s) {
      if (o === "") return;
      let l = Ay(o, i, a, s);
      if (l) {
        let u = {
          r: l.r,
          g: l.g,
          b: l.b,
          a: l.a,
          h: l.h,
          s: l.s,
          l: l.l,
          initialValue: typeof o == "string" && l.format !== "hsv" ? o : void 0,
          roundA: Math.round(100 * l.a) / 100,
          format: l.format,
          mix: e.mix,
          toValue: () => e.toRgbString(u),
        };
        return u;
      } else return;
    }
    let n = {
      isRGB(o) {
        return o === "rgb" || o === "rgba";
      },
      isHSL(o) {
        return o === "hsl" || o === "hsla";
      },
    };
    ((e.inspect = (o, i) =>
      o.format === "hsl"
        ? `<${o.constructor.name} h:${o.h} s:${o.s} l:${o.l} a:${o.a}>`
        : o.format === "hex" || o.format === "name"
          ? `<${o.constructor.name} "${i}">`
          : `<${o.constructor.name} r:${o.r} g:${o.g} b:${o.b} a:${o.a}>`),
      (e.isColor = (o) => (typeof o == "string" ? e.isColorString(o) : e.isColorObject(o))),
      (e.isColorString = (o) => (typeof o == "string" ? mn(o) !== !1 : !1)),
      (e.isColorObject = (o) =>
        $(o) &&
        typeof o.r == "number" &&
        typeof o.g == "number" &&
        typeof o.b == "number" &&
        typeof o.h == "number" &&
        typeof o.s == "number" &&
        typeof o.l == "number" &&
        typeof o.a == "number" &&
        typeof o.roundA == "number" &&
        typeof o.format == "string"),
      (e.toString = (o) => e.toRgbString(o)),
      (e.toHex = (o, i = !1) => Ni(o.r, o.g, o.b, i)),
      (e.toHexString = (o, i = !1) => `#${e.toHex(o, i)}`),
      (e.isP3String = (o) => (typeof o != "string" ? !1 : lt.isP3String(o))),
      (e.toRgbString = (o) =>
        o.a === 1
          ? "rgb(" + Math.round(o.r) + ", " + Math.round(o.g) + ", " + Math.round(o.b) + ")"
          : "rgba(" +
            Math.round(o.r) +
            ", " +
            Math.round(o.g) +
            ", " +
            Math.round(o.b) +
            ", " +
            o.roundA +
            ")"),
      (e.toHusl = (o) => ({ ...tu(o.r, o.g, o.b), a: o.roundA })),
      (e.toHslString = (o) => {
        let i = e.toHsl(o),
          a = Math.round(i.h),
          s = Math.round(i.s * 100),
          l = Math.round(i.l * 100);
        return o.a === 1
          ? "hsl(" + a + ", " + s + "%, " + l + "%)"
          : "hsla(" + a + ", " + s + "%, " + l + "%, " + o.roundA + ")";
      }),
      (e.toHsv = (o) => {
        let i = Ri(o.r, o.g, o.b);
        return { h: i.h * 360, s: i.s, v: i.v, a: o.a };
      }),
      (e.toHsvString = (o) => {
        let i = Ri(o.r, o.g, o.b),
          a = Math.round(i.h * 360),
          s = Math.round(i.s * 100),
          l = Math.round(i.v * 100);
        return o.a === 1
          ? "hsv(" + a + ", " + s + "%, " + l + "%)"
          : "hsva(" + a + ", " + s + "%, " + l + "%, " + o.roundA + ")";
      }),
      (e.toName = (o) => {
        if (o.a === 0) return "transparent";
        if (o.a < 1) return !1;
        let i = Ni(o.r, o.g, o.b, !0);
        for (let a of Object.keys(fn)) if (fn[a] === i) return a;
        return !1;
      }),
      (e.toHsl = (o) => ({ h: Math.round(o.h), s: o.s, l: o.l, a: o.a })),
      (e.toRgb = (o) => ({ r: Math.round(o.r), g: Math.round(o.g), b: Math.round(o.b), a: o.a })),
      (e.brighten = (o, i = 10) => {
        let a = e.toRgb(o);
        return (
          (a.r = Math.max(0, Math.min(255, a.r - Math.round(255 * -(i / 100))))),
          (a.g = Math.max(0, Math.min(255, a.g - Math.round(255 * -(i / 100))))),
          (a.b = Math.max(0, Math.min(255, a.b - Math.round(255 * -(i / 100))))),
          e(a)
        );
      }),
      (e.lighten = (o, i = 10) => {
        let a = e.toHsl(o);
        return ((a.l += i / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a));
      }),
      (e.darken = (o, i = 10) => {
        let a = e.toHsl(o);
        return ((a.l -= i / 100), (a.l = Math.min(1, Math.max(0, a.l))), e(a));
      }),
      (e.saturate = (o, i = 10) => {
        let a = e.toHsl(o);
        return ((a.s += i / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a));
      }),
      (e.desaturate = (o, i = 10) => {
        let a = e.toHsl(o);
        return ((a.s -= i / 100), (a.s = Math.min(1, Math.max(0, a.s))), e(a));
      }),
      (e.grayscale = (o) => e.desaturate(o, 100)),
      (e.hueRotate = (o, i) => {
        let a = e.toHsl(o);
        return ((a.h += i), (a.h = a.h > 360 ? a.h - 360 : a.h), e(a));
      }),
      (e.alpha = (o, i = 1) => e({ r: o.r, g: o.g, b: o.b, a: i })),
      (e.transparent = (o) => e.alpha(o, 0)),
      (e.multiplyAlpha = (o, i = 1) => e({ r: o.r, g: o.g, b: o.b, a: o.a * i })),
      (e.alphaComposite = (o, i) => {
        if (o.a === 1) return o;
        if (i.a < 1)
          throw new Error(
            "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
          );
        return o.a === 0
          ? i
          : e({
              r: Math.round(o.r * o.a + i.r * (1 - o.a)),
              g: Math.round(o.g * o.a + i.g * (1 - o.a)),
              b: Math.round(o.b * o.a + i.b * (1 - o.a)),
              a: 1,
            });
      }),
      (e.interpolate = (o, i, a = "rgb") => {
        if (!e.isColorObject(o) || !e.isColorObject(i))
          throw new TypeError("Both arguments for Color.interpolate must be Color objects");
        return (s) => e.mixAsColor(o, i, s, !1, a);
      }),
      (e.mix = (o, i, { model: a = "rgb" } = {}) => {
        let s = typeof o == "string" ? e(o) : o,
          l = e.interpolate(s, i, a);
        return (u) => e.toRgbString(l(u));
      }),
      (e.mixAsColor = (o, i, a = 0.5, s = !1, l = "rgb") => {
        let u = null;
        if (n.isRGB(l))
          u = e({
            r: ze(a, [0, 1], [o.r, i.r], s),
            g: ze(a, [0, 1], [o.g, i.g], s),
            b: ze(a, [0, 1], [o.b, i.b], s),
            a: ze(a, [0, 1], [o.a, i.a], s),
          });
        else {
          let c, m;
          (n.isHSL(l)
            ? ((c = e.toHsl(o)), (m = e.toHsl(i)))
            : ((c = e.toHusl(o)), (m = e.toHusl(i))),
            c.s === 0 ? (c.h = m.h) : m.s === 0 && (m.h = c.h));
          let f = c.h,
            h = m.h,
            T = h - f;
          T > 180 ? (T = h - 360 - f) : T < -180 && (T = h + 360 - f);
          let V = {
            h: ze(a, [0, 1], [f, f + T], s),
            s: ze(a, [0, 1], [c.s, m.s], s),
            l: ze(a, [0, 1], [c.l, m.l], s),
            a: ze(a, [0, 1], [o.a, i.a], s),
          };
          n.isHSL(l) ? (u = e(V)) : (u = e(nu(V.h, V.s, V.l, V.a)));
        }
        return u;
      }),
      (e.random = (o = 1) => {
        function i() {
          return Math.floor(Math.random() * 255);
        }
        return e("rgba(" + i() + ", " + i() + ", " + i() + ", " + o + ")");
      }),
      (e.grey = (o = 0.5, i = 1) => (
        (o = Math.floor(o * 255)),
        e("rgba(" + o + ", " + o + ", " + o + ", " + i + ")")
      )),
      (e.gray = e.grey),
      (e.rgbToHsl = (o, i, a) => Bt(o, i, a)),
      (e.isValidColorProperty = (o, i) =>
        !!(
          (o.toLowerCase().slice(-5) === "color" || o === "fill" || o === "stroke") &&
          typeof i == "string" &&
          e.isColorString(i)
        )),
      (e.difference = (o, i) => {
        let a = (o.r + i.r) / 2,
          s = o.r - i.r,
          l = o.g - i.g,
          u = o.b - i.b,
          c = s ** 2,
          m = l ** 2,
          f = u ** 2;
        return Math.sqrt(2 * c + 4 * m + 3 * f + (a * (c - f)) / 256);
      }),
      (e.equal = (o, i, a = 0.1) =>
        !(
          Math.abs(o.r - i.r) >= a ||
          Math.abs(o.g - i.g) >= a ||
          Math.abs(o.b - i.b) >= a ||
          Math.abs(o.a - i.a) * 256 >= a
        )));
    function r(o) {
      o /= 255;
      let i = Math.abs(o);
      return i < 0.04045 ? o / 12.92 : (Math.sign(o) || 1) * ((i + 0.055) / 1.055) ** 2.4;
    }
    return (
      (e.luminance = (o) => {
        let { r: i, g: a, b: s } = e.toRgb(o);
        return 0.2126 * r(i) + 0.7152 * r(a) + 0.0722 * r(s);
      }),
      (e.contrast = (o, i) => {
        let a = e.luminance(o),
          s = e.luminance(i);
        return (Math.max(a, s) + 0.05) / (Math.min(a, s) + 0.05);
      }),
      e
    );
  })();
function Ay(e, t, n, r = 1) {
  let o;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (o = Di({ r: e, g: t, b: n, a: r }))
      : typeof e == "string"
        ? (o = Ey(e))
        : typeof e == "object" &&
          (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
            ? (o = Di(e))
            : (o = pu(e))),
    o
  );
}
function Ey(e) {
  let t = mn(e);
  if (t) return t.format === "hsl" ? pu(t) : t.format === "hsv" ? By(t) : Di(t);
}
function By(e) {
  let t = iu(e.h, e.s, e.v);
  return { ...Bt(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? fu(e.a) : 1 };
}
function Di(e) {
  let t = ru(e.r, e.g, e.b);
  return { ...Bt(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? fu(e.a) : 1 };
}
function pu(e) {
  let t,
    n,
    r,
    o = { r: 0, g: 0, b: 0 },
    i = { h: 0, s: 0, l: 0 };
  return (
    (t = Qe(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Qe(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = dr(e.s)),
    (r = Qe(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (r = dr(e.l)),
    (o = ou(t, n, r)),
    (i = { h: t, s: n, l: r }),
    { ...o, ...i, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function fu(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function cr(e) {
  if (!Q(e) || e.charAt(e.length - 1) !== "%") return !1;
  let n = e.slice(0, -1),
    r = parseFloat(n);
  return Be(r);
}
function sP(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return Be(n) ? n : 50;
}
function cP(e) {
  return e ? el(e.__class) : !1;
}
function pP(e) {
  return e ? ti(e.__class) : !1;
}
function ut(e) {
  return e ? ni(e.__class) : !1;
}
function fP(e) {
  return e ? tl(e.__class) : !1;
}
function mP(e, t) {
  let n = e.getNodeParent(t);
  return n === null || !ut(n);
}
function yP(e, t) {
  if (!ut(t)) return !1;
  let n = e.getNodeParent(t);
  return n === null ? !0 : !ut(n) && !Xn(n);
}
var yn = Symbol("Not Found");
function pr(e) {
  return e === yn;
}
function mu(e) {
  return e !== yn;
}
function wi(e) {
  return mu(e) && !Nt(e);
}
function gP(e) {
  return mu(e) && e !== void 0;
}
function bP(e) {
  return wi(e) && e !== void 0;
}
function Fy(e, t) {
  return A(e) ? !zl(e, t) : e !== t;
}
function yu(e, t, n, r) {
  let o = t[e];
  if (Nt(o)) return;
  let i = n[e],
    a = r ? r(i) : i;
  pr(o) ? (t[e] = a) : Fy(a, o) && (t[e] = nn);
}
var vP = { codeComponentIdentifier: "", dynamicVectorSetIdentifier: void 0 },
  Oy = "codeComponentIdentifier";
function fr(e) {
  return e.hasProp(Oy);
}
function PP(e, t) {
  !fr(e) ||
    !Re(e.codeComponentIdentifier) ||
    (t.codeComponentIdentifiers.add(e.codeComponentIdentifier),
    yu("dynamicVectorSetIdentifier", t, e));
}
var mr = ((P) => (
    (P.scroll = "framer/Scroll"),
    (P.page = "framer/Page"),
    (P.stack = "framer/Stack"),
    (P.prototype = "framer/Prototype"),
    (P.device = "__builtin/Device"),
    (P.legacyDevice = "@framer/framer.default/./Device.tsx_Device"),
    (P.legacyUnsplash = "@framer/framer.default/./Unsplash.tsx_Unsplash"),
    (P.navigationAction = "framer/useNavigate"),
    (P.openURLAction = "framer/useOpenURL"),
    (P.consoleLogAction = "framer/useLog"),
    (P.setVariantAction = "framer/useSetVariant"),
    (P.triggerEventAction = "framer/useTriggerEvent"),
    (P.showOverlayAction = "framer/useShowOverlay"),
    (P.showRelativeOverlayAction = "framer/useShowRelativeOverlay"),
    (P.loadMoreAction = "framer/useLoadMore"),
    (P.carouselNavigationAction = "framer/useCarouselNavigation"),
    (P.goToCarouselPageAction = "framer/useGoToCarouselPage"),
    (P.dismissOverlayAction = "framer/useDismissOverlay"),
    (P.setLocaleAction = "framer/useSetLocale"),
    (P.setVariableValueAction = "framer/useSetVariableValue"),
    (P.resetVariableValuesAction = "framer/useResetVariableValues"),
    P
  ))(mr || {}),
  Wy = new Set(Object.values(mr)),
  DP = new Set(Object.values(mr).filter((e) => e !== "framer/Prototype"));
function wP(e) {
  return Wy.has(e);
}
var zy = new Set(["framer/Stack", "framer/Page", "framer/Scroll"]);
function dt(e) {
  return dl(e) || Jn(e) ? !1 : !fr(e) || Hy(e);
}
function BP(e) {
  return fr(e) && e.codeComponentIdentifier === "__builtin/Device";
}
function Hy(e) {
  return zy.has(e.codeComponentIdentifier);
}
var Gy = "fillOpacity";
function UP(e) {
  return Gy in e;
}
var $P = { fillOpacity: void 0 },
  jy = "fillType",
  _y = "fillEnabled",
  Ky = "supportsGradient",
  Uy = "fillImageLocalized";
function Ft(e) {
  return jy in e && dt(e);
}
function Li(e) {
  return _y in e && dt(e);
}
function qP(e) {
  return Ft(e) ? (Li(e) ? !!e.fillEnabled : !0) : !1;
}
function XP(e) {
  return Uy in e;
}
function $y(e) {
  return Ky in e && dt(e);
}
function hu(e) {
  return dt(e) ? ($y(e) ? e.supportsGradient() : Ft(e)) : !1;
}
function qy(e) {
  return We(e) || hu(e);
}
function YP(e) {
  return qy(e) && !(ut(e) || Xn(e) || al(e));
}
function xu(e) {
  return e === "linear-gradient" || e === "radial-gradient" || e === "conic-gradient";
}
function JP(e) {
  return hu(e) ? xu(e.fillType) : e.getFills().filter(Boolean).length;
}
function ZP(e) {
  return e.fillEnabled && e.fillType === "image" && e.fillImage !== null;
}
function QP(e) {
  return Ft(e) && cr(e.fillImagePositionX) && cr(e.fillImagePositionY);
}
function gu(e) {
  return Li(e) && !e.fillEnabled ? !1 : Ft(e) && e.fillType === "image";
}
function Xy(e) {
  if (!e.fillType) return !1;
  switch (e.fillType) {
    case "color": {
      let t = e.resolveValue("fillColor");
      return t ? b(t).a === 0 : !1;
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
function eI(e) {
  return !Ft(e) || (Li(e) && !e.fillEnabled) ? !1 : !Xy(e);
}
function tI(e) {
  switch (e) {
    case void 0:
    case "contain":
      return "fit";
    default:
      return "fill";
  }
}
function Yy(e) {
  return !e || !Ft(e) ? !1 : xu(e.fillType);
}
function nI(e) {
  if (Yy(e) && !k(e.fillType))
    switch (e.fillType) {
      case "image":
      case "color":
        return;
      case "linear-gradient": {
        let t = e.fillLinearGradient?.stops.length;
        if (!t) return;
        let n = e.fillLinearGradient?.angle;
        return k(n) ? void 0 : { stops: t, info: { type: e.fillType, angle: n } };
      }
      case "radial-gradient": {
        let t = e.fillRadialGradient?.stops.length;
        return t ? { stops: t, info: { type: e.fillType, angle: 0 } } : void 0;
      }
      case "conic-gradient": {
        let t = e.fillConicGradient?.stops.length;
        if (!t) return;
        let n = e.fillLinearGradient?.angle;
        return k(n) ? void 0 : { stops: t, info: { type: e.fillType, angle: n } };
      }
      default:
        W(e.fillType);
    }
}
function rI(e, t, n) {
  let r = n === "conic-gradient" ? 360 : 100,
    o = n === "conic-gradient" ? "deg" : "%";
  return pn.join(
    Array.from({ length: e }).map((i, a) => pn`${t} ${Math.round((a / (e - 1)) * r)}${o}`),
    ", "
  );
}
var Jy = ["left", "center", "right"],
  Zy = new Set(Jy),
  Qy = ["top", "center", "bottom"],
  eh = new Set(Qy);
function oI(e, t) {
  return p(e)
    ? ((t === "y" || t === "fillImagePositionY") && eh.has(e)) ||
      ((t === "x" || t === "fillImagePositionX") && Zy.has(e))
      ? !0
      : cr(e)
    : !1;
}
var th = {
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
function bu(e) {
  let t = ("" + e).trim().toLowerCase(),
    n = t.lastIndexOf(".");
  return th[~n ? t.substring(++n) : t];
}
var nh = { auto: !0, lossless: !0, small: !0, medium: !0, large: !0, full: !0 };
function Tu(e) {
  return zs(e) && e in nh;
}
var yr = "framer/asset-reference,";
function rh(e) {
  return e.startsWith(`data:${yr}`);
}
function yI(e) {
  return bu(e)?.startsWith("image/") ?? !1;
}
var Cu = "originalFilename",
  Vu = "packageIdentifier",
  Su = "preferredSize",
  Nu = "presetName",
  Ru = "width",
  ku = "height";
function vu(e, t = null, n = null, r = null, o = null, i = null) {
  x(e !== "", "Can\u2019t create asset reference for empty identifier");
  let a = new URL(`data:${yr}${e}`);
  return (
    n && a.searchParams.set(Cu, n),
    t && a.searchParams.set(Vu, t),
    r && a.searchParams.set(Su, r),
    o && a.searchParams.set(Nu, o),
    i && (a.searchParams.set(Ru, i.width.toString()), a.searchParams.set(ku, i.height.toString())),
    a.href
  );
}
function hI({
  identifier: e,
  preferredSize: t,
  intrinsicSize: n,
  packageIdentifier: r,
  originalFilename: o,
  presetName: i,
}) {
  return vu(e, r, o, t, i, n);
}
function xI(e) {
  return vu(
    e.identifier,
    e.packageIdentifier,
    e.originalFilename,
    e.preferredSize,
    e.presetName,
    e.intrinsicSize
  );
}
function Pu(e) {
  if (rh(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(yr.length),
        r = t.searchParams.get(Cu),
        o = t.searchParams.get(Vu),
        i = t.searchParams.get(Su),
        a = t.searchParams.get(Nu),
        s = t.searchParams.get(Ru),
        l = t.searchParams.get(ku);
      return {
        identifier: n,
        originalFilename: r,
        packageIdentifier: o,
        preferredSize: Tu(i) ? i : void 0,
        presetName: a,
        fileExtension: r && oh(r),
        intrinsicSize: s && l ? { width: parseInt(s), height: parseInt(l) } : void 0,
      };
    } catch {
      return;
    }
}
function oh(e) {
  return e.split(".").pop() ?? "";
}
var Mi = class {},
  Ai = class extends Mi {},
  Ae = class extends Ai {
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
        let r = this.childIds[n],
          o = this.childById.get(r);
        if (t(o, n)) return !0;
      }
      return !1;
    }
    every(t) {
      for (let n = 0; n < this.childIds.length; n++) {
        let r = this.childIds[n],
          o = this.childById.get(r);
        if (!t(o, n)) return !1;
      }
      return !0;
    }
    forEach(t) {
      for (let n = 0; n < this.childIds.length; n++) {
        let r = this.childIds[n],
          o = this.childById.get(r);
        t(o, n);
      }
    }
    map(t) {
      let n = Array(this.childIds.length);
      for (let r = 0; r < this.childIds.length; r++) {
        let o = this.childIds[r],
          i = this.childById.get(o);
        n[r] = t(i, r);
      }
      return n;
    }
    reduce(t, n) {
      let r = n;
      for (let o = 0; o < this.childIds.length; o++) {
        let i = this.childIds[o],
          a = this.childById.get(i);
        r = t(r, a, o);
      }
      return r;
    }
    filter(t) {
      let n = [];
      for (let r = 0; r < this.childIds.length; r++) {
        let o = this.childIds[r],
          i = this.childById.get(o);
        t(i, r) && n.push(i);
      }
      return n;
    }
    sort(t) {
      let n = this.toArray().sort(t);
      for (let r = 0; r < n.length; r++) this.childIds[r] = n[r].id;
    }
    find(t) {
      let n = this.findIndex(t);
      if (n !== -1) return this.at(n);
    }
    findIndex(t) {
      for (let n = 0; n < this.childIds.length; n++) {
        let r = this.childIds[n],
          o = this.childById.get(r);
        if (t(o, n)) return n;
      }
      return -1;
    }
    findLast(t) {
      let n = this.findLastIndex(t);
      if (n !== -1) return this.at(n);
    }
    findLastIndex(t) {
      for (let n = this.childIds.length - 1; n >= 0; n--) {
        let r = this.childIds[n],
          o = this.childById.get(r);
        if (t(o, n)) return n;
      }
      return -1;
    }
    slice(t, n) {
      let r = this.childIds.slice(t, n),
        o = Array(r.length);
      for (let i = 0; i < r.length; i++) {
        let a = r[i],
          s = this.childById.get(a);
        o[i] = s;
      }
      return o;
    }
    splice(t, n = 1 / 0, ...r) {
      let o = r.map((a) => a.id),
        i = this.childIds.splice(t, n, ...o);
      for (let a of i) this.childById.delete(a);
      for (let a of r) this.childById.set(a.id, a);
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
        let r = this.childIds[n],
          o = this.childById.get(r);
        t[n] = o;
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
var SI = {},
  ih = "children";
function ah(e) {
  return ih in e && e.children !== void 0;
}
var sh = new Ae();
function Iu(e) {
  return ah(e) ? e.children : sh;
}
function Du(e) {
  for (let t in e) return !1;
  return !0;
}
var Ei = "default";
function PI(e) {
  return il(e) ? e.getGroundNodes().length === 0 : !1;
}
function II(e) {
  if (!Oe(e)) return !1;
  let t = e.getGroundNodes();
  return t.length > 1 ? !1 : t.length === 0 ? !0 : t[0]?.children?.length === 0;
}
function lh(e) {
  return e ? !e.children || e.children.length === 0 : !1;
}
function uh(e) {
  return e === "";
}
function Bi(e) {
  return !!(e.webPageId && uh(e.segment));
}
function DI(e) {
  return Bi(e) && lh(e);
}
function dh(e, t) {
  let n = t.get(e);
  if (!Yn(n)) return;
  let r = t.get(n.webPageId);
  if (Oe(r) || n.children.length > 0) return;
  let o = n.parentid;
  (t.remove(n.id), o && dh(o, t));
}
var hn = "default";
function MI(e, t) {
  let n = new Map(t.map((a) => [a.id, a])),
    r = n.get(e.id) ?? e,
    o = [r],
    i = new Set([r.id]);
  for (; r.fallback;) {
    let a = n.get(r.fallback);
    if (!a || i.has(a.id)) break;
    ((r = a), i.add(r.id), o.push(r));
  }
  return o;
}
var ch = "locales";
function AI(e) {
  return g(e) && ch in e;
}
function EI(e, t) {
  if (!t || !e) return !1;
  if (e.length > t.length) return !0;
  for (let n of t) {
    let r = e.find((o) => o.id === n.id);
    if (r && (r.fallback !== n.fallback || r.draft !== n.draft)) return !0;
  }
  return !1;
}
function BI(e) {
  return e?.newContentInclusion ?? "include";
}
var Lu = (e) => {
    let t = N.fromRect(e.getBoundingClientRect());
    return ((t.x = t.x + Vt.scrollX), (t.y = t.y + Vt.scrollY), t);
  },
  ph = (e) => N.merge(...e.map(Lu)),
  fh = (e, t) => {
    let n = Mu(e, t);
    return { x: n.x, y: n.y, width: e.width, height: e.height };
  },
  mh = (e, t) => {
    let n = Au(e, t);
    return { x: n.x, y: n.y, width: e.width, height: e.height };
  },
  Fi = (e) => {
    let t = e.getBoundingClientRect();
    return { x: t.left + Vt.scrollX, y: t.top + Vt.scrollY, width: t.width, height: t.height };
  },
  yh = (e) => ({ x: e.pageX, y: e.pageY }),
  hh = (e) => ({ x: e.clientX, y: e.clientY }),
  Mu = (e, t) => {
    let n = Fi(t);
    return { x: e.x + n.x, y: e.y + n.y };
  },
  Au = (e, t) => {
    let n = Fi(t);
    return { x: e.x - n.x, y: e.y - n.y };
  },
  HI = (e, t = {}) => {
    let n = new KeyboardEvent("keydown", { bubbles: !0, keyCode: e, ...t }),
      r = document.activeElement;
    r && r.dispatchEvent(n);
  },
  GI = {
    frameFromElement: Lu,
    frameFromElements: ph,
    convertToPageFrame: fh,
    convertFromPageFrame: mh,
    getPageFrame: Fi,
    fromEventForPage: yh,
    fromEventForClient: hh,
    convertToPagePoint: Mu,
    convertFromPagePoint: Au,
  },
  wu,
  xh = !gs() && typeof Document < "u" && typeof Document.parseHTMLUnsafe == "function";
function Eu(e, t) {
  return xh && !t
    ? Document.parseHTMLUnsafe(e)
    : ((wu ??= new DOMParser()), wu.parseFromString(e, t ?? "text/html"));
}
function jI(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
var gh = /&(?:[gl]t|quot|#39|amp|#6[02]|#34|apos|#38);/gu,
  bh = {
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
function _I(e) {
  return e.replace(gh, (t) => bh[t]);
}
function Bu(e) {
  let t = `<body>${e}</body>`;
  return Eu(t).body;
}
function Th(e, t) {
  let n = new Map();
  function r(o) {
    let i = n.get(o);
    if (p(i)) return i;
    let a = e(o);
    if ((n.set(o, a), n.size > t)) {
      let s = n.keys().next().value;
      p(s) && n.delete(s);
    }
    return a;
  }
  return r;
}
var Ch = 1e5,
  Oi = Th(Vh, Ch);
function Vh(e) {
  let t = Bu(e),
    n = t.innerText;
  return Cs.isTest ? (n ?? t.textContent ?? "") : (x(n !== null), n);
}
function Fu(
  e,
  t = `
`
) {
  let n = e.replace(/<\/(h[1-6]|p|ul|ol)>/gu, `</$1>${t}`),
    r = Oi(n),
    o = t.length;
  return o && r.endsWith(t) ? r.slice(0, o * -1) : r;
}
function Ou(e, { preserveTrailingEmptyBlockNewLine: t = !1 } = {}) {
  let n = hr(e.childNodes);
  if (n.length === 0) return "";
  let r = n.join(`
`);
  return !t || e.childNodes.some(xr)
    ? r
    : r +
        `
`;
}
function Wu(e) {
  return e.replaceAll(/\n+/gu, "");
}
function hr(e) {
  return e.flatMap((t) => (t.type === "media" || t.type === "module" ? [] : [Sh(t)]));
}
function Sh(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.map(Ph).join("");
    case "bulletedList":
    case "numberedList":
      return Rh(e.childNodes).join(`
`);
    case "blockquote":
      return hr(e.childNodes).join(`
`);
    case "table":
      return e.childNodes.map(kh).join(`
`);
    case "media":
    case "module":
      return "";
  }
}
function Nh(e) {
  return hr(e.childNodes).join(`
`);
}
function Rh(e) {
  return e.flatMap((t) => {
    let n = Nh(t);
    return n.length > 0 ? [n] : [];
  });
}
function kh(e) {
  return e.childNodes.map(vh).join(`
`);
}
function vh(e) {
  return hr(e.childNodes).join(`
`);
}
function Ph(e) {
  switch (e.type) {
    case "text":
      return e.text;
    case "lineBreak":
      return `
`;
  }
}
function xr(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.some(Lh);
    case "bulletedList":
    case "numberedList":
      return e.childNodes.some(Ih);
    case "blockquote":
      return e.childNodes.some(xr);
    case "table":
      return e.childNodes.some(Dh);
    case "media":
    case "module":
      return !1;
  }
}
function Ih(e) {
  return e.childNodes.some(xr);
}
function Dh(e) {
  return e.childNodes.some(wh);
}
function wh(e) {
  return e.childNodes.some(xr);
}
function Lh(e) {
  switch (e.type) {
    case "text":
      return e.text.length > 0;
    case "lineBreak":
      return !1;
  }
}
var Wi = {};
Object.freeze(Wi);
function rD(e, t) {
  if (!e) return Wi;
  let n = e,
    r = {},
    o = !1;
  for (let i of t) {
    let a = n[i.id];
    a !== void 0 && ((r[i.id] = a), (o = !0));
  }
  return o ? r : Wi;
}
function gr(e) {
  return e?.value !== void 0 && e?.value !== null;
}
function oD(e, t) {
  let n = e?.[t];
  return gr(n) ? n.value : void 0;
}
function Mh(e, { preserveNewLines: t = !1 } = {}) {
  return p(e.value)
    ? e.type !== "rich-text"
      ? e.value
      : t
        ? Fu(e.value)
        : Oi(e.value)
    : Ah(e.value, { preserveNewLines: t });
}
function iD(e, t) {
  if (e != null) {
    if (e.value === null) return null;
    if (gr(e)) return Mh(e, t);
  }
}
function Ah(e, { preserveNewLines: t }) {
  let n = Ou(e);
  return t ? n : Wu(n);
}
function zu(e, t) {
  if (!t || !e || e.id === hn) return null;
  for (; e;) {
    let n = t[e.id];
    if (n && gr(n)) return n;
    e = e.fallback;
  }
  return null;
}
var Hu = "routeSegmentRoot";
var Eh = new Set(["/404.html", "/404", "/404/"]),
  Gu = new Set(Array.from(Eh).map((e) => e.replaceAll("/", "")));
var ju = {
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
  _u = {
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
function Ku(e) {
  return p(e) && e in ju;
}
var fD = ju;
function Bh(e) {
  return p(e) && e in _u;
}
var mD = _u;
function yD(e) {
  if (!p(e)) return !1;
  if (Ku(e)) return !0;
  let [t, n] = Uu(e);
  return !!(t && n);
}
function Uu(e) {
  if (!p(e)) return [void 0, void 0];
  let t = e.split("-"),
    n = "",
    r;
  for (let o of t) {
    if (Bh(o)) {
      r = o;
      continue;
    }
    if (!n) {
      n = o;
      continue;
    }
    n += "-" + o;
  }
  return [Ku(n) ? n : void 0, r];
}
var Fh = new Set(["ar", "dv", "fa", "he", "ks", "ps", "sd", "ug", "ur", "yi"]);
function Oh(e) {
  return e.endsWith("-Arab") || e.includes("-Arab-");
}
function br(e) {
  if (Oh(e)) return "rtl";
  let [t] = Uu(e);
  return t && Fh.has(t) ? "rtl" : "ltr";
}
var $u = Symbol();
function Ge(e) {
  let t,
    n = $u;
  return (...r) => {
    if (t && js(t, r) && n !== $u) return n;
    t = r;
    let o = e(...r);
    return ((n = o), o);
  };
}
function zi(e, t) {
  let n = e.root.getDefaultLocale(),
    r = e.root.locales ?? Gn();
  return t === "includeDrafts" ? Wh(n, r) : zh(n, r);
}
function ND(e, t, n = "includeDrafts") {
  let r = zi(e, n),
    o = r[0];
  return (
    x(o, "Default locale should always exist"),
    t ? (r.find(({ id: i }) => i === t) ?? o) : o
  );
}
var Wh = Ge((e, t) => {
    let n = [e, ...t];
    return Hi(n, { includeDrafts: !0 });
  }),
  zh = Ge((e, t) => {
    let n = [e, ...t];
    return Hi(n, { includeDrafts: !1 });
  });
function Hi(e, { includeDrafts: t }) {
  let n = new Map(),
    r = new Map();
  for (let a of e) (n.set(a.id, a), a.fallback && r.set(a.id, a.fallback));
  let o = [],
    i = !t && Bs.isOn("skipPublishingLocalesFallingBackToDraft");
  for (let a of e) {
    if ((!t && a.draft) || (i && Xu(a, n))) continue;
    let s = qu(a);
    if ((o.push(s), !a.fallback)) continue;
    let l = s,
      u = n.get(a.fallback),
      c = new Set();
    for (c.add(a.id); u && !c.has(u.id);) {
      c.add(u.id);
      let m = qu(u);
      ((l.fallback = m), (l = m));
      let f = r.get(u.id);
      u = f ? n.get(f) : void 0;
    }
  }
  return o;
}
function RD(e) {
  let t = new Map(e.map((n) => [n.id, n]));
  return e.filter((n) => !n.draft && Xu(n, t));
}
function Xu(e, t) {
  let n = new Set(),
    r = e;
  for (; r;) {
    if (n.has(r.id)) return !1;
    if ((n.add(r.id), r.draft)) return !0;
    r = r.fallback ? t.get(r.fallback) : void 0;
  }
  return !1;
}
function qu(e) {
  return { id: e.id, code: e.code, slug: e.slug, name: e.name, textDirection: br(e.code) };
}
var kD = { vekterLocalesToRouterLocales: Hi };
var Hh = "$";
function Yu(e) {
  let t = e.get(Hu);
  return (
    x(t, "RouteSegmentRootNode not found"),
    x(
      t.parentid === e.root.id,
      "RouteSegmentRootNode is not under the tree root. Parent id: " + t.parentid
    ),
    t
  );
}
function ED(e, t) {
  let n = zi(e, "excludeDrafts"),
    r = Object.fromEntries(n.map((l) => [l.id, {}])),
    o = new Map(),
    i = 0,
    a = () => `${Hh}${i++}`,
    s = new Set();
  for (let l of t.children) Ju(e, "", o, r, a, s, l, n);
  return { webPageSegmentReferencePathByWebPageId: o, localizedSegments: r };
}
function Ju(e, t, n, r, o, i, a, s) {
  x(r[Ei], "dictionary should include default");
  let l = a.webPageId ? e.get(a.webPageId) : void 0,
    u = !!l && !l.isDraft && !i.has(l.id);
  u && i.add(l.id);
  let c;
  Gh(a) ? (a.segment ? ((c = o()), (t = `${t}/${c}`)) : (t = `${t}/`)) : (t = `${t}/${a.segment}`);
  let m = u;
  for (let f of a.children) m = Ju(e, t, n, r, o, i, f, s) || m;
  if (m && c) {
    r[Ei][c] = a.segment;
    for (let f of s) {
      let h = zu(f, a.segmentLocalized);
      if (h?.value && h.value !== a.segment) {
        let T = f.id;
        (x(r[T], "localizedSegments should include all locales"), (r[T][c] = h.value));
      }
    }
  }
  return (u && a.webPageId && n.set(a.webPageId, t), m);
}
var Gh = (e) => !(!!e.dataIdentifier || Gu.has(e.segment) || Bi(e));
function Zu(e, t) {
  let r = Yu(e).getRouteSegmentIdForWebPageId(t);
  return e.getNode(r);
}
function Qu(e, t) {
  let n = jh(t);
  return n ? e.getNodeWithTrait(n, qn) : null;
}
function jh(e) {
  if (!e) return null;
  let t = ke(e);
  return !Rt(t) || !Re(t) || t.type !== "collection" ? null : t.localIdName;
}
var Tr = L(ne(), 1);
var Ot = L(re(), 1);
function _h(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function Wt(e) {
  return !e._constraints || _h(e) ? !1 : e._constraints.enabled;
}
function Kh(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    v(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    v(n) && v(r) ? { width: n, height: r } : null
  );
}
function Uh(e) {
  let t = Kh(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return v(n) && v(r) ? { x: n, y: r, ...t } : null;
}
function $h(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Wt(e) || r) return Uh(e);
  let o = qh(e),
    i = Xh(t),
    a = i ? { sizing: i, positioning: i, viewport: null } : null;
  return ei.toRect(o, a, null, n, null);
}
function qh(e) {
  let { left: t, right: n, top: r, bottom: o, center: i, _constraints: a, size: s } = e,
    { width: l, height: u } = e;
  (l === void 0 && (l = s), u === void 0 && (u = s));
  let { aspectRatio: c, autoSize: m } = a,
    f = Qo.quickfix({
      left: v(t),
      right: v(n),
      top: v(r),
      bottom: v(o),
      widthType: an(l),
      heightType: an(u),
      aspectRatio: c || null,
      fixedSize: m === !0,
    }),
    h = null,
    T = null,
    V = 0,
    R = 0;
  if (f.widthType !== 0 && typeof l == "string") {
    let O = parseFloat(l);
    l.endsWith("fr") ? ((V = 3), (h = O)) : l === "auto" ? (V = 2) : ((V = 1), (h = O / 100));
  } else l !== void 0 && typeof l != "string" && (h = l);
  if (f.heightType !== 0 && typeof u == "string") {
    let O = parseFloat(u);
    u.endsWith("fr")
      ? ((R = 3), (T = O))
      : u === "auto"
        ? (R = 2)
        : ((R = 1), (T = parseFloat(u) / 100));
  } else u !== void 0 && typeof u != "string" && (T = u);
  let y = 0.5,
    C = 0.5;
  return (
    (i === !0 || i === "x") && ((f.left = !1), typeof t == "string" && (y = parseFloat(t) / 100)),
    (i === !0 || i === "y") && ((f.top = !1), typeof r == "string" && (C = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? o : null,
      widthType: V,
      heightType: R,
      width: h,
      height: T,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: y,
      centerAnchorY: C,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var ji = ((r) => (
    (r[(r.Unknown = 0)] = "Unknown"),
    (r[(r.Disabled = 1)] = "Disabled"),
    (r[(r.DisabledForCurrentLevel = 2)] = "DisabledForCurrentLevel"),
    r
  ))(ji || {}),
  ed = Tr.default.createContext({ parentSize: 0 });
function Xh(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function td() {
  return Tr.default.useContext(ed).parentSize;
}
function nd(e) {
  return typeof e == "object";
}
var Yh = (e) => {
  let t = td(),
    { parentSize: n, children: r } = e,
    o = Tr.default.useMemo(() => ({ parentSize: n }), [Jh(n), Zh(n)]);
  return t === 1
    ? r
      ? (0, Ot.jsx)(Ot.Fragment, { children: r })
      : null
    : (0, Ot.jsx)(ed.Provider, { value: o, children: r });
};
function Jh(e) {
  return nd(e) ? e.width : e;
}
function Zh(e) {
  return nd(e) ? e.height : e;
}
function Cr(e, t) {
  return (0, Ot.jsx)(Yh, { parentSize: t, children: e });
}
function rd(e) {
  let t = td();
  return $h(e, t, !0);
}
function _i({ width: e, height: t }) {
  return e === "auto" || e === "min-content" || t === "auto" || t === "min-content";
}
var Ki = {
  isImageObject: function (e) {
    return !e || typeof e == "string" ? !1 : typeof e == "object" && "src" in e;
  },
};
function Qh(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: o } = t,
    i = n ?? o,
    a = r && i ? r[i] : void 0;
  return (a && typeof a == "string" && (e = { ...e, src: a }), e);
}
function od(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Ki.isImageObject(t)) return;
  let r = null;
  if ((Q(n) ? (r = { alt: "", src: n }) : (r = oe.get(t, null)), !!Ki.isImageObject(r)))
    return Qh(r, e);
}
var Ui = (e) => e instanceof vs;
function ex(e, t) {
  if (e.size < t) return;
  let r = Math.round(Math.random());
  for (let o of e.keys()) (++r & 1) !== 1 && e.delete(o);
}
function id(e, t, n, r) {
  let o = t.get(n);
  if (o) return o;
  ex(t, e);
  let i = r(n);
  return (t.set(n, i), i);
}
var Vr = {
  hueRotate: (e, t) => b.toHslString(b.hueRotate(b(e), t)),
  setAlpha: (e, t) => b.toRgbString(b.alpha(b(e), t)),
  getAlpha: (e) => {
    let t = mn(e);
    return t ? t.a : 1;
  },
  multiplyAlpha: (e, t) => b.toRgbString(b.multiplyAlpha(b(e), t)),
  toHexValue: (e) => b.toHex(b(e)).toUpperCase(),
  toHex: (e) => b.toHexString(b(e)).toUpperCase(),
  toRgb: (e) => b.toRgb(b(e)),
  toRgbString: (e) => b.toRgbString(b(e)),
  toHSV: (e) => b.toHsv(b(e)),
  toHSL: (e) => b.toHsl(b(e)),
  toHslString: (e) => b.toHslString(b(e)),
  toHsvString: (e) => b.toHsvString(b(e)),
  hsvToHSLString: (e) => b.toHslString(b(Et(e.h, e.s, e.v, e.a))),
  hsvToHexValue: (e) => b.toHex(b(Et(e.h, e.s, e.v, e.a))).toUpperCase(),
  hsvToHex: (e) => b.toHexString(b(Et(e.h, e.s, e.v, e.a))).toUpperCase(),
  hsvToRgbString: (e) => b.toRgbString(b(Et(e.h, e.s, e.v, e.a))),
  hsvToString: (e) => Et(e.h, e.s, e.v),
  rgbaToString: (e) => b.toRgbString(b(e)),
  rgbToHexValue: (e) => b.toHex(b(e)),
  rgbToHexString: (e) => b.toHexString(b(e)),
  hslToString: (e) => b.toHslString(b(e)),
  hslToRgbString: (e) => b.toRgbString(b(e)),
  toColorPickerSquare: (e) => b.toRgbString(b({ h: e, s: 1, l: 0.5, a: 1 })),
  isValid: (e) => b(e).isValid !== !1,
  equals: (e, t) =>
    b.isP3String(e) || b.isP3String(t)
      ? e === t
      : (typeof e == "string" && (e = b(e)), typeof t == "string" && (t = b(t)), b.equal(e, t)),
  toHexOrRgbaString: (e) => {
    let t = b(e);
    return t.a !== 1 ? b.toRgbString(t) : b.toHexString(t);
  },
  toFormatString: (e) => (b.isP3String(e) ? e : b.toRgbString(b(e))),
};
var ad = (e) => {
  let t = 0,
    n,
    r;
  if (e.length === 0) return t;
  for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
  return t;
};
var tx = /var\(.+\)/u,
  nx = new Map();
function rx(e, t) {
  let n = [e, t];
  return tx.test(e) ? e : id(1e3, nx, n, () => Vr.multiplyAlpha(e, t));
}
function ct(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((r) => ({ ...r, value: rx(r.value, t) }))
  );
}
function zt(e, t) {
  let n = 0;
  return (
    ct(e, t).forEach((r) => {
      n ^= ad(r.value) ^ r.position;
    }),
    n
  );
}
var ox = ["stops"];
function Ht(e) {
  return e && ox.every((t) => t in e);
}
var ix = ["start", "end"];
function Gt(e) {
  return e && ix.every((t) => t in e);
}
var ax = ["angle", "alpha"],
  Sr = {
    isLinearGradient: (e) => $(e) && ax.every((t) => t in e) && (Gt(e) || Ht(e)),
    hash: (e) => e.angle ^ zt(e, e.alpha),
    toCSS: (e, t, n) => {
      let r = ct(e, e.alpha),
        o = t !== void 0 ? t : e.angle,
        i = Math.round(o),
        a = r.map((s) => `${n?.(s.value) ?? s.value} ${s.position * 100}%`);
      return `linear-gradient(${i}deg, ${a.join(", ")})`;
    },
  };
var sx = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"],
  Nr = {
    isRadialGradient: (e) => $(e) && sx.every((t) => t in e) && (Gt(e) || Ht(e)),
    hash: (e) =>
      e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ zt(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: n, widthFactor: r, heightFactor: o, centerAnchorX: i, centerAnchorY: a } = e,
        s = ct(e, n),
        l = s.map((u, c) => {
          let m = s[c + 1],
            f = u.position === 1 && m?.position === 1 ? u.position - 1e-4 : u.position;
          return `${t?.(u.value) ?? u.value} ${f * 100}%`;
        });
      return `radial-gradient(${r * 100}% ${o * 100}% at ${i * 100}% ${a * 100}%, ${l.join(", ")})`;
    },
  };
var lx = ["alpha", "angle", "centerAnchorX", "centerAnchorY"],
  ux = {
    isConicGradient: (e) => $(e) && lx.every((t) => t in e) && (Gt(e) || Ht(e)),
    hash: (e) => e.centerAnchorX ^ e.centerAnchorY ^ e.angle ^ zt(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: n, angle: r, centerAnchorX: o, centerAnchorY: i } = e,
        a = Math.round(r),
        l = ct(e, n)
          .map((u) => `${t?.(u.value) ?? u.value} ${u.position * 360}deg`)
          .join(", ");
      return `conic-gradient(from ${a}deg at ${o * 100}% ${i * 100}%, ${l})`;
    },
  };
var $i = ["color", "x", "y", "blur"],
  Pw = { is: (e) => e && $i.every((t) => t in e) },
  qi = ["x", "y", "color", "inset", "blur", "spread"],
  sd = {
    is: (e) => e && qi.every((t) => t in e),
    toCSS: (e) =>
      `${e.inset ? "inset " : ""}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`,
  };
var ld = "0.000001px",
  Xi = ` translateZ(${ld})`,
  ud = bs() || xs() || Ts();
function dd(e) {
  e.willChange = "transform";
  let t = j.current() === j.canvas;
  ud && t && (e.translateZ = ld);
}
function cd(e) {
  ((e.willChange = "transform"), pd(e, !0));
}
function Mw(e, t) {
  (t
    ? (e.style.willChange || "") !== "transform" && (e.style.willChange = "transform")
    : e.style.removeProperty("will-change"),
    pd(e.style, t));
}
function pd(e, t) {
  let n = j.current() === j.canvas;
  if (!ud || !n) return;
  let r = (Q(e.transform) && e.transform) || "";
  t ? r.includes(Xi) || (e.transform = r + Xi) : (e.transform = r.replace(Xi, ""));
}
var md = L(ne(), 1);
var pe = (e) => e;
function fd(e, t, n, r = !0) {
  if (!e) return;
  let o = pe(e.style),
    i = n || o[t],
    a = () => {
      dx(i) && (o[t] = i);
    };
  ((o[t] = null), r ? Promise.resolve().then(a) : setTimeout(a, 0));
}
function dx(e) {
  return Q(e) || Be(e) || Ns(e);
}
var Rr = (() => {
  class e extends md.Component {
    static defaultProps = {};
    static applyWillChange(n, r, o) {
      n.willChangeTransform && (o ? dd(r) : cd(r));
    }
    layerElement = null;
    setLayerElement = (n) => {
      this.layerElement = n;
    };
    shouldComponentUpdate(n, r) {
      return n._needsMeasure || this.state !== r || !de(this.props, n);
    }
    componentDidUpdate(n) {
      pe(this.props).clip &&
        pe(this.props).radius === 0 &&
        pe(n).radius !== 0 &&
        fd(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return e;
})();
var yd = L(ne(), 1);
function Yi() {
  let e = j.current();
  return e === j.canvas || e === j.export;
}
function Kw() {
  let [e] = (0, yd.useState)(() => Yi());
  return e;
}
var hd = L(ne(), 1),
  xd = hd.default.createContext(void 0);
var Ji;
function gd() {
  return Ji !== void 0;
}
function qw(e) {
  Ji = e;
}
function bd(e, t) {
  Ji?.(e, t);
}
var xn = L(ne(), 1);
var Vd = L(re(), 1),
  px = "style[data-framer-css-ssr-minified]",
  fx = (() => {
    if (!Ye()) return new Set();
    let e = document.querySelector(px)?.getAttribute("data-framer-components");
    return e ? new Set(e.split(" ")) : new Set();
  })(),
  tL = "data-framer-css-ssr";
function Td() {
  return ks() ? j.preview : j.current();
}
var Cd = (e, t, n) => {
    if (gd() && n !== void 0 && !Je(t)) {
      let r = Array.isArray(t)
        ? t
        : t.split(`
`);
      bd(n, r.filter(Boolean));
    }
    return xn.default.forwardRef((r, o) => {
      let { sheet: i, cache: a } = xn.default.useContext(xd) ?? {},
        s = n;
      if (!Ye()) {
        Je(t) && (t = t(Td(), r));
        let l = Array.isArray(t)
          ? t.join(`
`)
          : t;
        mx.add(l, s);
      }
      return (
        (0, xn.useInsertionEffect)(() => {
          if (s && fx.has(s)) return;
          (Je(t)
            ? t(Td(), r)
            : Array.isArray(t)
              ? t
              : t.split(`
`)
          ).forEach((u) => u && zn(u, i, a));
        }, []),
        (0, Vd.jsx)(e, { ...r, ref: o })
      );
    });
  },
  Zi = class {
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
  mx = new Zi();
var yx, kr;
function hx() {
  return (yx ??= import("https://app.framerstatic.com/libraryCSSRules-P2IPZROH.mjs").then((e) => {
    if (((kr = e.getCombinedCSSRules), Ye())) for (let t of kr()) zn(t, void 0);
    return e;
  }));
}
function xx() {
  return kr ? kr() : (Ye() && hx(), []);
}
function Sd(e) {
  return Cd(e, xx, "framer-lib-combinedCSSRules");
}
function Nd(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
        ? `translateX(-50%) ${n}`
        : e === "y"
          ? `translateY(-50%) ${n}`
          : n || "none";
}
var le = L(ne(), 1);
var _t = L(re(), 1),
  jt = le.default.createContext({
    getLayoutId: (e) => null,
    persistLayoutIdCache: () => {},
    top: !1,
    enabled: !0,
  });
function lL({ children: e }) {
  if ((0, le.useContext)(jt).top) return (0, _t.jsx)(_t.Fragment, { children: e });
  let n = (0, le.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = (0, le.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    o = (0, le.useRef)(new Set()).current,
    i = (0, le.useCallback)(({ id: l, name: u, duplicatedFrom: c }) => {
      if (!l) return null;
      let m = u ? "byName" : "byId",
        f = n.current[m][l];
      if (f) return f;
      let h = u || l;
      if (!c && !o.has(h) && (!n.current.byLayoutId[h] || n.current.byLayoutId[h] === h))
        return (
          n.current.count[m][h] === void 0 &&
            ((n.current.count[m][h] = 0), (n.current.byLayoutId[h] = h), (r.current[m][l] = h)),
          o.add(h),
          h
        );
      let T;
      if (c?.length)
        for (let J = c.length - 1; J >= 0; J--) {
          let ue = c[J];
          St(!!ue, "duplicatedId must be defined");
          let ie = n.current[m][ue],
            qe = n.current.byLastId[ue];
          if (qe && !T) {
            let Xo = n.current.byLayoutId[qe],
              Yo = !Xo || Xo === u;
            qe && !o.has(qe) && (!u || Yo) && (T = [qe, ue]);
          }
          let tt = ie ? n.current.byLayoutId[ie] : void 0,
            us = !tt || tt === u;
          if (ie && !o.has(ie) && (!u || us))
            return ((r.current[m][l] = ie), (r.current.byLastId[ue] = ie), o.add(ie), ie);
        }
      let V = n.current.byLastId[l];
      if (V && !o.has(V)) return (o.add(V), (r.current.byId[l] = V), V);
      if (T) {
        let [J, ue] = T;
        return ((r.current[m][l] = J), (r.current.byLastId[ue] = J), o.add(J), J);
      }
      let R = n.current.byPossibleId[l];
      if (R && !o.has(R)) return (o.add(R), (r.current.byId[l] = R), R);
      let y = c?.[0],
        C = u || y || l,
        O = (n.current.count[m][C] ?? -1) + 1,
        { layoutId: G, value: P } = gx(C, O, o);
      if (((n.current.count[m][C] = P), (r.current[m][l] = G), c?.length && !u)) {
        let J = c[c.length - 1];
        if ((J && (r.current.byLastId[J] = G), c.length > 1))
          for (let ue = 0; ue < c.length - 1; ue++) {
            let ie = c[ue];
            ie !== void 0 && (r.current.byPossibleId[ie] || (r.current.byPossibleId[ie] = G));
          }
      }
      return ((r.current.byLayoutId[G] = h), o.add(G), G);
    }, []),
    a = (0, le.useCallback)(() => {
      ((n.current = {
        byId: { ...n.current.byId, ...r.current.byId },
        byLastId: { ...n.current.byLastId, ...r.current.byLastId },
        byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
        byName: { ...n.current.byName, ...r.current.byName },
        byLastName: { ...n.current.byLastName, ...r.current.byLastName },
        byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
        count: { ...n.current.count, byName: {} },
      }),
        (r.current = {
          byId: {},
          byName: {},
          byLastId: {},
          byPossibleId: {},
          byLastName: {},
          byLayoutId: {},
        }),
        o.clear());
    }, []),
    s = (0, le.useRef)({ getLayoutId: i, persistLayoutIdCache: a, top: !0, enabled: !0 }).current;
  return (0, _t.jsx)(jt.Provider, { value: s, children: e });
}
function gx(e, t, n) {
  let r = t,
    o = r ? `${e}-${r}` : e;
  for (; n.has(o);) (r++, (o = `${e}-${r}`));
  return { layoutId: o, value: r };
}
function uL({ enabled: e = !0, ...t }) {
  let n = (0, le.useContext)(jt),
    r = (0, le.useMemo)(() => ({ ...n, enabled: e }), [e]);
  return (0, _t.jsx)(jt.Provider, { ...t, value: r });
}
var Rd = L(ne(), 1),
  gn = Rd.default.createContext(!1);
var bn = L(ne(), 1);
var Qi = L(ne(), 1);
function ea() {
  let [e, t] = Qi.default.useState(0);
  return Qi.default.useCallback(() => t((n) => n + 1), []);
}
var vr = L(ne(), 1),
  Pr = typeof document < "u" ? vr.useLayoutEffect : vr.useEffect;
var na = L(re(), 1),
  kd = 200,
  ta = class {
    sharedResizeObserver;
    callbacks = new WeakMap();
    constructor() {
      this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
    }
    updateResizedElements(t) {
      for (let n of t) {
        let r = this.callbacks.get(n.target);
        r && r(n.contentRect);
      }
    }
    observeElementWithCallback(t, n) {
      (this.sharedResizeObserver.observe(t), this.callbacks.set(t, n));
    }
    unobserve(t) {
      (this.sharedResizeObserver.unobserve(t), this.callbacks.delete(t));
    }
  },
  Ir = Ye() ? new ta() : void 0;
function xL(e) {
  let t = ea();
  (0, bn.useEffect)(() => {
    let n = e?.current;
    if (n)
      return (
        Ir?.observeElementWithCallback(e.current, t),
        () => {
          Ir?.unobserve(n);
        }
      );
  }, [e, t]);
}
function bx(e) {
  let t = ea(),
    n = bn.default.useRef(null);
  function r(o) {
    (o.width === 0 && o.height === 0) ||
      ((!n.current || o.height !== n.current.height || o.width !== n.current.width) &&
        ((n.current = { width: o.width, height: o.height }), t()));
  }
  return (
    Pr(() => {
      if (!e.current) return;
      let { offsetWidth: o, offsetHeight: i } = e.current;
      return (
        r({ width: o, height: i }),
        Ir.observeElementWithCallback(e.current, r),
        () => {
          e.current && Ir.unobserve(e.current);
        }
      );
    }, []),
    n.current
  );
}
var ra = "data-framer-size-compatibility-wrapper",
  gL = (e) => (t) => {
    let n = bn.default.useRef(null),
      r = bx(n),
      o = { [ra]: !0 },
      i = !!r,
      a = t.width ?? kd,
      s = t.height ?? kd;
    return (0, na.jsx)("div", {
      style: { width: "100%", height: "100%", pointerEvents: "none" },
      ref: n,
      ...o,
      children: i && (0, na.jsx)(e, { ...t, width: r?.width ?? a, height: r?.height ?? s }),
    });
  };
function vd(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(ra)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Pd)
    .map(Id);
}
function Pd(e) {
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
function Id(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents")
    return e;
  let t = [...e.children].find(Pd);
  return t ? Id(t) : e;
}
var Dd = L(ne(), 1);
function Tn(e) {
  return e.replace(/^id_/u, "").replace(/\\/gu, "");
}
function wd(e, t, n = () => [], r = {}) {
  let { id: o, visible: i, _needsMeasure: a } = e,
    { skipHook: s = !1 } = r,
    l = (0, Dd.useContext)(gn),
    u = j.current() === j.canvas;
  Pr(() => {
    !u ||
      l ||
      s ||
      (t.current && o && i && a && ae.queueMeasureRequest(Tn(o), t.current, n(t.current)));
  });
}
function IL(e) {
  let t = e.closest("[data-framer-component-container]");
  t && ae.queueMeasureRequest(Tn(t.id), t, vd(t));
}
var ve = L(ne(), 1);
function Tx(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var Cx =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
  Ld = Tx(
    (e) =>
      Cx.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  );
var Ee = L(ne(), 1);
var pt = { borderRadius: "inherit", cornerShape: "inherit" };
var Md = [1, 2, 2.2],
  Vx = [512, 1024, 2048, 4096];
function Ad(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    o = 0;
  t > e && ((n = t), (r = e), (o = 1));
  let i = n / r,
    a = [];
  for (let s of Vx) {
    if (n <= s) return a;
    a.push({ maxSideSize: s, width: o === 0 ? s : Math.trunc(s / i) });
  }
  return a;
}
function oa(e, t) {
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
var Sx = 512;
function Nx(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let o of n) {
    if (o.width < Sx) continue;
    let i = oa(e, o.maxSideSize);
    r.push(`${i} ${o.width}w`);
  }
  return (r.push(`${oa(e, null)} ${t.pixelWidth}w`), r.join(", ") || void 0);
}
function Rx(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    o = Math.max(t.pixelWidth, t.pixelHeight),
    i = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let a of Md) {
    let s = Math.round(o * a * i),
      l = oa(e, s);
    r.push({ src: l, scale: a });
  }
  return r;
}
function Ed(e, t, n) {
  if (!["auto", "lossless"].includes(t.preferredSize ?? "")) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Rx(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [o, ...i] = r;
    return { src: o?.src, srcSet: i.map(({ src: a, scale: s }) => `${a} ${s}x`).join(", ") };
  } else {
    let r = Ad(t.pixelWidth, t.pixelHeight);
    return { src: n, srcSet: Nx(n, t, r) };
  }
}
var je = L(re(), 1),
  ia = { position: "absolute", ...pt, top: 0, right: 0, bottom: 0, left: 0 };
function kx() {
  return {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "64px auto",
    backgroundImage: Rs(ae.imagePlaceholderSvg),
  };
}
function vx(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function Bd(e, t) {
  let n = e ?? "center",
    r = t ?? "center";
  return n === "center" && r === "center" ? "center" : n + " " + r;
}
function aa(e) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    ...pt,
    objectPosition: Bd(e.positionX, e.positionY),
    objectFit: vx(e.fit),
  };
}
function Px(e) {
  let t = Ee.default.useRef(e ? "auto" : "async"),
    n = (0, Ee.useCallback)((i) => {
      ((t.current = "auto"), (i.decoding = "auto"));
    }, []),
    r = (0, Ee.useCallback)(
      (i) => {
        n(i.currentTarget);
      },
      [n]
    ),
    o = (0, Ee.useCallback)(
      (i) => {
        i?.complete && n(i);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: o };
}
function Ix({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: o,
  avoidAsyncDecoding: i,
}) {
  let a = ae.useImageSource(e, t, n),
    s = aa(e),
    { decoding: l, onImageLoad: u, onImageMount: c } = Px(i),
    { srcSet: m, src: f } =
      "srcSet" in e ? { src: a, srcSet: e.srcSet } : Ed(e.nodeFixedSize, e, a);
  return (0, je.jsx)("img", {
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
    alt: r ?? e.alt ?? "",
    style: s,
    draggable: o,
  });
}
function Dx({ image: e, containerSize: t, nodeId: n }) {
  let r = Ee.default.useRef(null),
    o = ae.useImageElement(e, t, n),
    i = aa(e);
  return (
    Ee.default.useLayoutEffect(() => {
      let a = r.current;
      if (a !== null)
        return (
          a.appendChild(o),
          () => {
            a.removeChild(o);
          }
        );
    }, [o]),
    Object.assign(o.style, i),
    (0, je.jsx)("div", { ref: r, style: { display: "contents", ...pt } })
  );
}
function wx({ nodeId: e, image: t, containerSize: n }) {
  let r = Ee.default.useRef(null),
    o = ae.useImageSource(t, n, e);
  return (
    Ee.default.useLayoutEffect(() => {
      let i = r.current;
      if (i === null) return;
      let a = aa(t);
      ae.renderOptimizedCanvasImage(i, o, a, e);
    }, [e, t, o]),
    (0, je.jsx)("div", { ref: r, style: { display: "contents", ...pt } })
  );
}
function Fd({ layoutId: e, image: t, ...n }) {
  e && (e += "-background");
  let r = null,
    o = !!e,
    i = null;
  if (Q(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let s = Be(t.backgroundSize) ? t.backgroundSize : 1,
        l = { width: Math.round(s * t.pixelWidth), height: Math.round(s * t.pixelHeight) },
        u = _s(s * (t.pixelWidth / 2)),
        c = ae.useImageSource(t, l);
      ((r = {
        ...ia,
        backgroundImage: `url(${c})`,
        backgroundRepeat: "repeat",
        backgroundPosition: Bd(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${u}px auto`,
      }),
        (i = null),
        (o = !0));
    } else
      j.current() !== j.canvas
        ? (i = (0, je.jsx)(Ix, { image: t, avoidAsyncDecoding: j.current() === j.export, ...n }))
        : ae.canRenderOptimizedCanvasImage(ae.useImageSource(t))
          ? (i = (0, je.jsx)(wx, { image: t, ...n }))
          : (i = (0, je.jsx)(Dx, { image: t, ...n }));
  let a = i ? ia : (r ?? { ...ia, ...kx() });
  return o
    ? (0, je.jsx)(Ze.div, {
        layoutId: e,
        style: a,
        "data-framer-background-image-wrapper": !0,
        children: i,
      })
    : (0, je.jsx)("div", { style: a, "data-framer-background-image-wrapper": !0, children: i });
}
var sa = L(re(), 1);
function Lx(e, t, n = !0) {
  let { borderWidth: r, borderStyle: o, borderColor: i } = e;
  if (!r) return;
  let a, s, l, u;
  if (
    (typeof r == "number"
      ? (a = s = l = u = r)
      : ((a = r.top || 0), (s = r.bottom || 0), (l = r.left || 0), (u = r.right || 0)),
    !(a === 0 && s === 0 && l === 0 && u === 0))
  ) {
    if (n && a === s && a === l && a === u) {
      t.border = `${a}px ${o} ${i}`;
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
function Od(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...pt,
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), (0, sa.jsx)(Ze.div, { style: n }))
    : (Lx(e, n, !1), (0, sa.jsx)(Ze.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Wd(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function zd(e) {
  return e && e !== "search" && e !== "slot" && e !== "template" ? Ze[e] : Ze.div;
}
var Mx = hs();
function Ax(e, t, n) {
  ((e["data-framer-layout-hint-center-x"] = t === !0 || t === "x" ? !0 : void 0),
    (e["data-framer-layout-hint-center-y"] = t === !0 || t === "y" ? !0 : void 0),
    (e["data-framer-layout-hint-x"] = n?.x),
    (e["data-framer-layout-hint-y"] = n?.y));
}
function Hd(e, t) {
  let n = {};
  return (
    j.current() !== j.canvas ||
      Ax(n, Mx ? e : void 0, {
        x: typeof t?.x == "number" ? t.x : void 0,
        y: typeof t?.y == "number" ? t.y : void 0,
      }),
    n
  );
}
var Dr = L(ne(), 1);
function wr(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return n
    ? ((t = Dr.default.Children.map(t, (r) =>
        Dr.default.isValidElement(r) ? Dr.default.cloneElement(r, { _forwardedOverrides: n }) : r
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
var Lr = L(ne(), 1);
function Mr(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: o, duplicatedFrom: i, __fromCodeComponentNode: a = !1, drag: s } = e,
    { getLayoutId: l, enabled: u } = (0, Lr.useContext)(jt);
  return (0, Lr.useMemo)(() => {
    if (!u) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !o || a)) return;
    let m = c || l({ id: o, name: r, duplicatedFrom: i });
    if (m) return n ? `${m}-${n}` : m;
  }, [u]);
}
function Gd({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || Ui(t)
      ? (n.backgroundColor = t)
      : b.isColorObject(e) && (n.backgroundColor = e.initialValue || b.toRgbString(e))
    : e &&
      ((e = oe.get(e, null)),
      typeof e == "string" || Ui(e)
        ? (n.background = e)
        : Sr.isLinearGradient(e)
          ? (n.background = Sr.toCSS(e))
          : Nr.isRadialGradient(e)
            ? (n.background = Nr.toCSS(e))
            : b.isColorObject(e) && (n.backgroundColor = e.initialValue || b.toRgbString(e)));
}
function B(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function jd(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function _d(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Kd(e) {
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
    Ps(n)
      ? (t.cornerShape = Is(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    B(e, "size", t),
    B(e, "width", t),
    B(e, "height", t),
    B(e, "minWidth", t),
    B(e, "minHeight", t),
    B(e, "top", t),
    B(e, "right", t),
    B(e, "bottom", t),
    B(e, "left", t),
    B(e, "position", t),
    B(e, "overflow", t),
    B(e, "opacity", t),
    e._border?.borderWidth || B(e, "border", t),
    B(e, "borderRadius", t),
    B(e, "radius", t, "borderRadius"),
    B(e, "color", t),
    B(e, "shadow", t, "boxShadow"),
    B(e, "x", t),
    B(e, "y", t),
    B(e, "z", t),
    B(e, "rotate", t),
    B(e, "rotateX", t),
    B(e, "rotateY", t),
    B(e, "rotateZ", t),
    B(e, "scale", t),
    B(e, "scaleX", t),
    B(e, "scaleY", t),
    B(e, "skew", t),
    B(e, "skewX", t),
    B(e, "skewY", t),
    B(e, "originX", t),
    B(e, "originY", t),
    B(e, "originZ", t),
    Gd(e, t),
    t
  );
}
var _e = L(re(), 1);
function Ex(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof pe(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var Ud = [
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
  Bx = new Set([...Ud, ...Ud.map((e) => `${e}Capture`)]);
function Fx(e) {
  if (e.drag) return "grab";
  for (let t in e) if (Bx.has(t)) return "pointer";
}
var la = "overflow";
function Ox(e) {
  return $d(e) ? !0 : e.style ? !!$d(e.style) : !1;
}
function $d(e) {
  return la in e && (e[la] === "scroll" || e[la] === "auto");
}
function Ar(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: o,
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
    T = be(e.minWidth),
    V = be(e.minHeight),
    R = be(e.maxWidth),
    y = be(e.maxHeight);
  return {
    top: be(n),
    left: be(t),
    bottom: be(r),
    right: be(o),
    width: be(i),
    height: be(a),
    size: be(u),
    center: s,
    _constraints: l,
    widthType: c,
    heightType: m,
    positionFixed: f,
    positionAbsolute: h,
    minWidth: T,
    minHeight: V,
    maxWidth: R,
    maxHeight: y,
  };
}
var qd = { x: 0, y: 0, width: 200, height: 200 };
function Wx(e) {
  let t = (0, ve.useContext)(gn),
    { style: n, _initialStyle: r, __fromCanvasComponent: o, size: i } = e,
    a = Ar(e),
    s = rd(a),
    l = {
      display: "block",
      flex: n?.flex ?? "0 0 auto",
      userSelect: j.current() !== j.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let u = !Ex(e) && !e.__fromCanvasComponent && !Ox(e),
    c = e.style ? !("pointerEvents" in e.style) : !0;
  u && c && (l.pointerEvents = "none");
  let f = ve.default.Children.count(e.children) > 0 &&
      ve.default.Children.toArray(e.children).every(
        (y) => typeof y == "string" || typeof y == "number"
      ) && { display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" },
    h = Kd(e);
  (i === void 0 && !o && (jd(h) || (l.width = qd.width), _d(h) || (l.height = qd.height)),
    a.minWidth !== void 0 && (l.minWidth = a.minWidth),
    a.minHeight !== void 0 && (l.minHeight = a.minHeight));
  let T = {};
  (Wt(a) &&
    s &&
    !_i(e) &&
    (T = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, r, h, T, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Rr.applyWillChange(e, l, !0));
  let V = l;
  l.transform || (V = { x: 0, y: 0, ...l });
  let R = Yi();
  return (
    e.positionSticky
      ? (!R || ae.isOnPageCanvas || t) &&
        ((V.position = "sticky"),
        (V.willChange = "transform"),
        (V.top = e.positionStickyTop),
        (V.right = e.positionStickyRight),
        (V.bottom = e.positionStickyBottom),
        (V.left = e.positionStickyLeft))
      : R &&
        (e.positionFixed
          ? (V.position = ae.isOnPageCanvas ? "fixed" : "absolute")
          : e.positionAbsolute && (V.position = "absolute")),
    "rotate" in V && V.rotate === void 0 && delete V.rotate,
    [V, s]
  );
}
var zx = new Set([
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
function Hx(e) {
  let t = {};
  for (let n in e)
    (Ds(n) || Ld(n)) && !zx.has(n)
      ? (t[n] = pe(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof pe(e)[n] != "boolean" && !e.transition && (t.transition = pe(e)[n]));
  return t;
}
function Gx(e) {
  return "data-framer-name" in e;
}
var jx = (0, ve.forwardRef)(function (t, n) {
    let { name: r, center: o, border: i, _border: a, __portal: s } = t,
      { props: l, children: u } = wr(t),
      c = Hx(l),
      m = Mr(t),
      f = Fx(t),
      h = (0, ve.useRef)(null),
      T = n ?? h,
      V = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": f,
        "data-framer-highlight": f === "pointer" ? !0 : void 0,
        "data-layoutid": m,
        "data-framer-offset-parent-id": pe(t)["data-framer-offset-parent-id"],
      };
    !Gx(t) && r && (pe(V)["data-framer-name"] = r);
    let [R, y] = Wx(l),
      C = Ar(l),
      O = _i(C),
      G = o && !(y && !O && Wt(C)) ? o : void 0;
    (G
      ? c.transformTemplate || (c.transformTemplate = Nd(o))
      : c.transformTemplate || (c.transformTemplate = void 0),
      Object.assign(V, Hd(G, l.style)),
      wd(t, T));
    let P = od(t),
      J = (0, ve.useContext)(gn),
      ue = Kx(l, C, y, J),
      ie = Cr(
        (0, _e.jsxs)(_e.Fragment, {
          children: [
            P
              ? (0, _e.jsx)(Fd, {
                  alt: t.alt ?? "",
                  image: P,
                  containerSize: y ?? void 0,
                  nodeId: t.id && Tn(t.id),
                  layoutId: m,
                })
              : null,
            u,
            (0, _e.jsx)(Od, { ...a, border: i, layoutId: m }),
          ],
        }),
        ue
      ),
      qe = zd(t.as),
      tt = Wd(P);
    return (
      t.fitImageDimension &&
        tt &&
        ((R[t.fitImageDimension] = "auto"), (R.aspectRatio = tt.width / tt.height)),
      (0, _e.jsxs)(qe, { ...V, ...c, layoutId: m, style: R, ref: T, children: [ie, s] })
    );
  }),
  _x = (0, ve.forwardRef)(function (t, n) {
    let { visible: r = !0 } = t;
    return r ? (0, _e.jsx)(jx, { ...t, ref: n }) : null;
  }),
  Xd = Sd(_x);
function Kx(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: o } = e,
    { widthType: i = 0, heightType: a = 0, width: s, height: l } = t;
  return n && !o
    ? n
    : i === 0 && a === 0 && typeof s == "number" && typeof l == "number"
      ? { width: s, height: l }
      : o || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
var Ux = ["actionIdentifier", "identifier", "controls"];
function Er(e) {
  return g(e) && Ux.every((t) => t in e);
}
function jM(e) {
  return g(e) && "gamepadId" in e;
}
function _M(e, t) {
  if (!t.has(e.identifier)) return (t.add(e.identifier), e);
  let n = Fs();
  return (t.add(n), { ...e, identifier: n });
}
var $x = ["start", "center", "end"];
function XM(e) {
  return p(e) ? $x.includes(e) : !1;
}
var qx = ["fixed", "minmax"];
function YM(e) {
  return p(e) ? qx.includes(e) : !1;
}
var Xx = ["fixed", "auto", "fit"];
function JM(e) {
  return p(e) ? Xx.includes(e) : !1;
}
var Yx = "columnMasonry";
var Jx = ["stack", "grid"],
  ZM = {
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
  Yd = "horizontal",
  Jd = "center",
  Zd = "center",
  Qd = "layout";
function ft(e) {
  return Qd in e;
}
function QM(e) {
  return p(e) ? Jx.includes(e) : !1;
}
var Zx = ["start", "end", "center"];
function Qx(e) {
  return k(e) ? !1 : A(e) ? !0 : ua(e) && Zx.includes(e);
}
function eA(e) {
  return !ft(e) || e.layout !== "stack" || !e.stackDistribution ? !1 : Qx(e.stackDistribution);
}
function ec(e) {
  return ft(e) && !k(e.layout);
}
function tA(e) {
  return ec(e) && e.layout === "stack";
}
function eg(e) {
  return ec(e) && e.layout === "grid";
}
function nA(e) {
  return eg(e) && e.gridType === Yx;
}
function rA(e) {
  return Qd in e;
}
function tg(e) {
  if (tc(e)) return e;
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
var Br = ["horizontal", "vertical"];
function tc(e) {
  return p(e) && Br.includes(e);
}
function oA(e) {
  if (!tc(e)) return e;
  switch (e) {
    case "horizontal":
      return "row";
    case "vertical":
      return "column";
    default:
      W(e);
  }
}
var ng = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];
function rg(e) {
  return p(e) && ng.includes(e);
}
var Fr = ["start", "center", "end", "space-between", "space-around", "space-evenly"];
function ua(e) {
  return p(e) && Fr.includes(e);
}
function Or(e) {
  if (!ua(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function og(e) {
  if (ua(e)) return e;
  if (rg(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
var ig = ["flex-start", "flex-end", "center"];
function nc(e) {
  return p(e) && ig.includes(e);
}
var Wr = ["start", "center", "end"];
function rc(e) {
  return p(e) ? Wr.includes(e) : !1;
}
function ag(e) {
  if (rc(e)) return e;
  if (nc(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
function oc(e) {
  if (nc(e) || !rc(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function iA(e, t) {
  switch (e) {
    case "stackDirection":
      return tg(t);
    case "stackDistribution":
      return og(t);
    case "stackAlignment":
      return ag(t);
    default:
      return t;
  }
}
function aA(e) {
  return !e || !ft(e) ? null : (e.layout ?? null);
}
var sg = ["sticky", "fixed", "absolute"],
  lg = new Set(sg);
function uA(e) {
  return p(e) && lg.has(e);
}
var dA = {
    position: void 0,
    positionStickyTop: void 0,
    positionStickyRight: void 0,
    positionStickyBottom: void 0,
    positionStickyLeft: void 0,
  },
  ug = "position";
function Cn(e) {
  return !e || e.__unsafeIsSlotPropertyChildNode() ? !1 : ug in e;
}
var yA = {
    carouselEffectEnabled: void 0,
    carouselEffectLoop: void 0,
    carouselEffectAutoPlay: void 0,
    carouselEffectInterval: void 0,
    carouselEffectSnap: void 0,
    carouselEffectTransition: void 0,
  },
  hA = {
    carouselEffectEnabled: !0,
    carouselEffectLoop: !0,
    carouselEffectAutoPlay: !1,
    carouselEffectInterval: 1.5,
    carouselEffectSnap: !0,
    carouselEffectTransition: void 0,
  },
  xA = { ...rt, stiffness: 200, damping: 40 },
  dg = "carouselEffectEnabled";
function cg(e) {
  return dg in e;
}
function da(e) {
  return pg(e) && e.carouselEffectEnabled === !0;
}
function ca(e) {
  return Cn(e) && e.position !== void 0 && e.cache.carouselAncestorId === e.parentid;
}
function pg(e) {
  return !(
    !cg(e) ||
    !ft(e) ||
    e.layout !== "stack" ||
    fg(e) ||
    e.stackWrapEnabled ||
    ("tickerEffectEnabled" in e && e.tickerEffectEnabled === !0)
  );
}
function fg(e) {
  return !!e.cache.carouselAncestorId;
}
function gA(e) {
  return !!(e.cache.carouselAncestorId && e.parentid === e.cache.carouselAncestorId && !ca(e));
}
var pa = ["default", "reverse"],
  VA = {
    tickerEffectEnabled: void 0,
    tickerEffectVelocity: void 0,
    tickerEffectHoverModifier: void 0,
    tickerEffectDirectionModifier: void 0,
    tickerEffectDraggable: void 0,
  },
  SA = {
    tickerEffectEnabled: !0,
    tickerEffectVelocity: 100,
    tickerEffectHoverModifier: 100,
    tickerEffectDirectionModifier: "default",
    tickerEffectDraggable: !1,
  },
  mg = "tickerEffectEnabled";
function yg(e) {
  return mg in e;
}
function NA(e) {
  return hg(e) && e.tickerEffectEnabled === !0;
}
function hg(e) {
  return !(
    !yg(e) ||
    !ft(e) ||
    e.layout !== "stack" ||
    xg(e) ||
    e.stackWrapEnabled ||
    ("carouselEffectEnabled" in e && e.carouselEffectEnabled === !0)
  );
}
function xg(e) {
  return !!e.cache.tickerAncestorId;
}
function RA(e) {
  return !!(e.cache.tickerAncestorId && e.parentid === e.cache.tickerAncestorId);
}
function kA(e) {
  return e === "default" || e === "reverse";
}
function ic(e) {
  switch (e) {
    case "default":
      return "Default";
    case "reverse":
      return "Reverse";
  }
}
var gg = "usesDOMRect";
function ac(e) {
  return gg in e;
}
var bg = ["start", "center", "end"],
  zr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  fa = [...zr, "all"];
function sc(e) {
  return S(e) ? `Span ${e}` : "Span all";
}
var lc = zr.map(sc),
  uc = fa.map(sc);
function DA(e) {
  return e === "all" ? !0 : S(e) && e > 0;
}
function wA(e) {
  return S(e) && e > 0;
}
function LA(e) {
  return p(e) ? bg.includes(e) : !1;
}
var MA = {
    gridItemHorizontalAlignment: void 0,
    gridItemVerticalAlignment: void 0,
    gridItemColumnSpan: void 0,
    gridItemRowSpan: void 0,
  },
  Tg = "gridItemHorizontalAlignment";
function AA(e) {
  return Tg in e;
}
var FA = { width: 100, height: 100 },
  OA = { width: 1, height: 1 },
  Cg = "width";
function dc(e) {
  return Jn(e) ? !1 : Cg in e;
}
var pc = [
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
  Vg = new RegExp(`^([+-]?(?:\\d*\\.)?\\d+(?:e[+-]?\\d+)?)(${pc.join("|")})?$`, "i"),
  Sg = new Map(pc.map((e) => [e.toLowerCase(), e]));
function Kt(e, t) {
  let n = e.match(Vg);
  if (!n) return [NaN, void 0];
  let [, r, o] = n,
    i = parseFloat(r);
  if (Number.isNaN(i)) return [NaN, void 0];
  if (!o) return [i, t];
  let a = Sg.get(o.toLowerCase());
  if (!a) throw Error(`unrecognized CSS unit ${o}`);
  return [i, a];
}
function HA(e) {
  if (!p(e)) return !1;
  let [t] = Kt(e);
  return !Number.isNaN(t);
}
function cc(e, t) {
  return `${e}${t}`;
}
function GA(e, { parentSize: t, viewportSize: n }) {
  if (k(e)) return;
  if (S(e)) return e;
  let [r, o] = Kt(e);
  if (!Number.isNaN(r))
    switch (o) {
      case "px":
        return r;
      case "%":
        return t ? (r / 100) * t : void 0;
      case "vh":
      case "vw":
        return n ? (r / 100) * n : void 0;
      default:
        return;
    }
}
function jA(e) {
  if (!p(e)) return [void 0, void 0, void 0, void 0];
  let t = e.split(" ");
  if (t.length === 1) {
    let [n] = Kt(t[0]),
      r = cc(n, "px");
    return [r, r, r, r];
  }
  return t.length !== 4
    ? [void 0, void 0, void 0, void 0]
    : t.map((n) => {
        let [r] = Kt(n);
        return cc(r, "px");
      });
}
var Ng = /(?<value>\d{1,5})px/gu;
function _A(e, t) {
  return e.replace(Ng, (n, r) => `${t(Number(r))}px`);
}
function XA(e, t) {
  let n = ma(e, t);
  return !Te(n);
}
function ma(e, t) {
  let n = Rg(e, t);
  return n && it(n) ? n : null;
}
function Rg(e, t, n = !0) {
  let r = e.get(t);
  if (!r) return null;
  if (ye(r)) return r;
  if (n) {
    let i = null;
    if (
      (Lt(r)
        ? (i = r.cache.replicaAncestorId)
        : r.cache.masterAncestorId && (i = r.cache.masterAncestorId),
      i)
    ) {
      let a = e.getNode(i);
      return !a || !ye(a) ? null : a;
    }
  }
  let o = e.getGroundNodeFor(r);
  return !o || !ye(o) ? null : o;
}
function YA(e, t) {
  return t.parentid && it(e.get(t.parentid));
}
var Hr = ["cache", "treeState", "mutable", "update"],
  kg = new Set(Hr);
function ZA(e) {
  return kg.has(e);
}
var fc = new Set([...Hr, "transient"]);
var oE = { repeatArray: void 0, repeatArrayTransforms: void 0 },
  vg = "repeatArray";
function mc(e) {
  return !(!e || !(vg in e) || ye(e) || Le(e));
}
function Ut(e) {
  return !!e && mc(e) && !!e.repeatArray;
}
function Pg(e, t) {
  return e.getNodeWithTrait(t.getPrimaryId(), mc)?.repeatArray;
}
function iE(e, t) {
  let n = Pg(e, t);
  if (n) return Wl("array", n, t.repeatArrayTransforms ?? []);
}
var ya = "element",
  yc = "collection",
  hc = "collectionItemId",
  xc = "pathVariables",
  ha = "framer/page-link,";
function Gr(e) {
  return Q(e) && e.startsWith(`data:${ha}`);
}
function lE(e = null, t = {}) {
  let n = e || "none",
    r = new URL(`data:${ha}${n}`);
  return (
    t.element && r.searchParams.append(ya, t.element),
    t.collectionItem &&
      (r.searchParams.append(yc, t.collectionItem.collection),
      r.searchParams.append(hc, t.collectionItem.collectionItemId),
      r.searchParams.append(xc, new URLSearchParams(t.collectionItem.pathVariables).toString())),
    r.href
  );
}
function xa(e) {
  if (Gr(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(ha.length),
        r = t.searchParams,
        o = r.has(ya) ? r.get(ya) : void 0,
        i,
        a = r.get(yc),
        s = r.get(hc),
        l = r.get(xc);
      if (a && s && l) {
        let u = Object.fromEntries(new URLSearchParams(l).entries());
        i = { collection: a, collectionItemId: s, pathVariables: u };
      }
      return {
        target: n === "none" ? null : n,
        element: o === "none" ? void 0 : o,
        collectionItem: i,
      };
    } catch {
      return;
    }
}
function uE(e) {
  return !Gr(e);
}
function dE(e, t, n) {
  let r = t.getAttribute("data-framer-page-link-target"),
    o,
    i;
  if (r) {
    o = t.getAttribute("data-framer-page-link-element") ?? void 0;
    let s = t.getAttribute("data-framer-page-link-path-variables");
    s && (i = Object.fromEntries(new URLSearchParams(s).entries()));
  } else {
    let s = t.getAttribute("href");
    if (!s) return !1;
    let l = xa(s);
    if (!l?.target) return !1;
    ((r = l.target), (o = l.element ?? void 0), (i = l.collectionItem?.pathVariables));
  }
  let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, o, Object.assign({}, n, i), a), !0);
}
function Ig(e, t = 0) {
  let n = e.indexOf("var(", t);
  if (n === -1) return null;
  let r = n + 4,
    o = 1,
    i;
  for (let a = r; a < e.length; a++)
    if (e[a] === "(") o++;
    else if (e[a] === ")") {
      if ((o--, o === 0)) return { start: n, end: a + 1, commaIndex: i };
    } else i === void 0 && e[a] === "," && (i = a);
  return null;
}
function Dg(e, t) {
  if (!t) return {};
  let { start: n, end: r, commaIndex: o } = t,
    i = e.substring(r).trim();
  return o
    ? {
        customProperty: e.substring(n + 4, o),
        fallback: e.substring(o + 1, r - 1).trim(),
        metadata: i,
      }
    : { customProperty: e.substring(n + 4, r - 1), metadata: i };
}
function Vn(e) {
  let t = Ig(e);
  return Dg(e, t);
}
var jr = "--token-";
function _r(e) {
  return e ? e.slice(jr.length) : null;
}
function Kr(e) {
  let { customProperty: t } = Vn(e);
  return _r(t);
}
function Ke(e) {
  return typeof e != "string" ? !1 : e.trim().startsWith(`var(${jr}`);
}
function Ur(e) {
  let { customProperty: t, fallback: n } = Vn(e);
  if (t && n) return `var(${t}, ${n})`;
  if (t) return `var(${t})`;
}
function $r(e, t) {
  if (!Ke(e)) return;
  let n = Kr(e);
  if (n) return t[n];
}
function xE(e) {
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
function gE(e) {
  return e > 0 ? "any" : "__legacy";
}
function bE(e) {
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
function TE(e) {
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
function CE(e) {
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
function VE(e) {
  let t = e.framerContractVersion;
  if (!t) return 0;
  let n = parseInt(t, 10);
  return !Number.isFinite(n) || n < 0 ? 0 : n;
}
function SE(e, t) {
  return e?.[t] !== void 0;
}
var wg = "getBreakpointValues";
function kE(e) {
  return e ? wg in e : !1;
}
var Lg = "min",
  Mg = "max",
  Ag = "canvasClassName";
function Eg(e) {
  return g(e)
    ? Lg in e
      ? S(e.min)
      : Mg in e
        ? S(e.max)
        : Ag in e
          ? p(e.canvasClassName)
          : !1
    : !1;
}
function gc(e) {
  if (!g(e)) return !1;
  for (let t in e) {
    let n = e[t];
    if (Eg(n)) return !0;
  }
  return !1;
}
function Xr(e, t) {
  if (!k(e))
    for (let n in e) {
      let r = e[n],
        o = r?.min ?? 0,
        i = r?.max ?? 1 / 0;
      if (t >= o && t <= i) return n;
    }
}
var AE = { layoutTemplateIdentifierOverride: void 0 },
  Fg = "layoutTemplateIdentifier";
function bc(e) {
  return e ? Fg in e : !1;
}
function Tc(e, t) {
  if (!t || !it(t)) return;
  let n = e.getScopeNodeFor(t);
  if (bc(n)) return n.layoutTemplateIdentifier;
}
function EE(e) {
  return !!(bc(e) && e.layoutTemplateIdentifier);
}
function Cc(e) {
  return !e || !ac(e) ? !1 : !!e.usesLayoutTemplateRectForModuleIdentifierCached();
}
function Og(e, t) {
  let n = e.framerDefaultVariant,
    r = e.framerBreakpoints;
  if (!r) return n;
  let o = JSON.parse(r);
  return Xr(o, t) ?? n;
}
function BE(e, t, n) {
  let r = t.componentForIdentifier(e)?.annotations;
  if (r) return Og(r, n);
}
var ga = "$control__";
function ba(e) {
  return e.startsWith(ga);
}
function OE(e) {
  return e.substring(ga.length);
}
function Wg(e) {
  return `${ga}${e}`;
}
function WE(e) {
  let t = {};
  for (let n of Object.keys(e)) {
    let r = e[n];
    t[Wg(n)] = r;
  }
  return t;
}
function zE(e) {
  for (let t in e) if (ba(t)) return !0;
  return !1;
}
var mt = {
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
  zg = ["blockStyles", "backgroundMask", "textStylePreset"],
  Hg = ["header", "cell"];
function _E(e) {
  return p(e) && Hg.some((t) => e === t);
}
var Gg = {
    textBlock: !0,
    numberedList: !0,
    bulletedList: !0,
    blockquote: !0,
    media: !0,
    module: !0,
    table: !0,
  },
  jg = ["inlineStyles", "backgroundStyles", "inlineCodeStylePreset", "linkStylePreset"],
  KE = ["openInNewTab", "smoothScroll", "clickTrackingId", "relValues", "preserveParams"];
function Vc(e) {
  return p(e) && e in mt;
}
function _g(e) {
  return Vc(e) && e.endsWith("Localized");
}
function UE(e) {
  return _g(e) ? e : `${e}Localized`;
}
var Kg = {
  collectionControlPropLocalized: "collectionControlProp",
  controlPropLocalized: "controlProp",
  richTextNodeLocalized: "richTextNode",
};
function Ug(e) {
  return Kg[e];
}
function $E(e) {
  return { ...e, variant: Ug(e.variant), childNodes: e.childNodes };
}
function qE(e) {
  return $t(e) && mt[e.variant].styles;
}
function XE(e) {
  return jg.some((t) => t in e);
}
function YE(e) {
  return zg.some((t) => t in e);
}
function JE(e) {
  return $t(e) && !e.variant.endsWith("Localized");
}
function yt(e, t) {
  return mt[e][t];
}
function $t(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "type" in e &&
    e.type === "richText" &&
    "variant" in e &&
    Vc(e.variant) &&
    "childNodes" in e &&
    Array.isArray(e.childNodes)
  );
}
function $g(e) {
  return Ms(e, "type") && p(e.type) && Gg[e.type] === !0;
}
function Ve(e, t) {
  if (!$g(e)) return !1;
  switch (e.type) {
    case "textBlock":
      return !0;
    case "table":
      return mt[t].tables;
    case "module":
      return mt[t].embeds;
    case "media":
      return mt[t].media;
    case "blockquote":
      return mt[t].blockquotes;
    case "numberedList":
    case "bulletedList":
      return e.childNodes.every((n) => n.childNodes.every((r) => Ve(r, t)));
  }
  W(e);
}
function Sc(e) {
  let t = {};
  for (let n in e) {
    let r = e[n];
    k(r) || (t[n] = r);
  }
  return t;
}
function lB(e) {
  for (let t in e) {
    let n = e[t];
    if (n) return n;
  }
}
var Ca = "webPage",
  qg = "webPageId",
  Va = "url",
  Xg = "url";
function ht(e) {
  return g(e) && "type" in e && (e.type === Ca || e.type === Va);
}
function Ta(e) {
  return ht(e) && e.type === Va;
}
function qt(e) {
  return ht(e) && e.type === Ca;
}
function Yg(e) {
  if (Xg in e) return Va;
  if (qg in e) return Ca;
  throw new Error("Link: Cannot infer Link type from link provided without a type.");
}
function Nc(e) {
  return { ...Sc(e), type: Yg(e) };
}
function Jg(e) {
  if (!e?.pathVariables) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    if (!r) continue;
    let o = { identifier: e.collection, collectionItemId: e.collectionItemId, key: n, value: r };
    t[n] = o;
  }
  return t;
}
function Yr(e) {
  if (A(e) || ht(e)) return e;
  if (Gr(e)) {
    let t = xa(e);
    if (!t?.target) return;
    let n = t.collectionItem,
      r = t.element === "none" ? void 0 : t.element;
    return Nc({ webPageId: t.target, hash: r || void 0, pathVariables: Jg(n) });
  }
  if (!(!p(e) || !e)) return Nc({ url: e });
}
function Zg(e, t) {
  if (e === t) return !0;
  try {
    return new URL(e).href === new URL(t).href;
  } catch {
    return !1;
  }
}
function uB(e, t, n) {
  return Ta(e) && Ta(t)
    ? Zg(e.url, t.url)
    : !qt(e) || !qt(t) || e.webPageId !== t.webPageId
      ? !1
      : n?.ignoreHash
        ? de(e.pathVariables, t.pathVariables)
        : e.hash !== t.hash
          ? !1
          : de(e.pathVariables, t.pathVariables) && de(e.hashVariables, t.hashVariables);
}
function dB(e) {
  if (!qt(e)) return (Ta(e) || void 0, !1);
  if (e.pathVariables) {
    for (let t in e.pathVariables) if (D(e.pathVariables[t])) return !0;
  }
  if (e.hashVariables) {
    for (let t in e.hashVariables) if (D(e.hashVariables[t])) return !0;
  }
  return !1;
}
function cB(e, t) {
  return qt(e) && !t?.has(e.webPageId);
}
var Rc = ["nofollow", "noreferrer", "me", "ugc", "sponsored"];
var Qg = Rc,
  eb = new Set(Qg),
  Sa = (e) => eb.has(e),
  kc = (e) => (M(e) ? e.every(Sa) : !1);
function vc(e) {
  return Gs(F, e);
}
var tb = Fn("RawControlProp"),
  Pc = "type";
function Pe(e) {
  if (!g(e) || !(Pc in e)) return !1;
  let t = e[Pc];
  return t === null
    ? (tb.reportErrorOnceEveryTenMinutes(new Error("Encountered raw control prop with null type"), {
        value: e,
      }),
      !0)
    : vc(t);
}
function SB(e) {
  return g(e) ? Object.values(e).every((t) => t === void 0 || Pe(t)) : !1;
}
var Na = (e) => {};
function RB(e) {
  Na = e;
}
var Ra = (e) => {};
function kB(e) {
  Ra = e;
}
var ka = (e, t, ...n) => {
  e.assign(t, ...n);
};
function vB(e) {
  ka = e;
}
var Jr = class {
  hierarchyChange = !1;
  localizationSourceOwnRevision = 0;
  localizationSourceRevision = 0;
  localizationTranslationOwnRevision = 0;
  localizationTranslationRevision = 0;
  reset() {
    this.hierarchyChange = !1;
  }
};
var Zr = class {
  treeLineage = null;
  draft = null;
  tree() {
    return this.treeLineage?.latestTree;
  }
};
function zB(e, t, ...n) {
  ka(e, t, ...n);
}
function rb(e) {
  return e ? e.toJS instanceof Function : !1;
}
var Qr = { mutable: !0, update: 0 },
  ob = new Set([...fc, "__class", "children", "id"]),
  eo = class extends Js("MutableNode") {
    constructor(t, n, r) {
      (super(),
        Na(this),
        (this.id = t?.id ?? rn()),
        (this.parentid = t?.parentid ?? Ws),
        (this.cache = t?.cache ?? n ?? new Jr()),
        (this.treeState = r ?? new Zr()),
        (this.duplicatedFrom = t?.duplicatedFrom ?? null),
        (this.children = t?.children ?? new Ae()),
        (this.originalid = t?.originalid ?? null),
        (this.mutable = t?.mutable ?? !0),
        (this.update = t?.update ?? 0),
        t?.replicaInfo && this.setProp("replicaInfo", t.replicaInfo));
    }
    assign(...t) {
      return Object.assign(this, ...t);
    }
    keys() {
      return Object.keys(this);
    }
    values() {
      return Object.values(this);
    }
    entries() {
      return Object.entries(this);
    }
    raw(t) {
      return Object.assign({}, this, t);
    }
    getDataOverrides() {
      return this;
    }
    setProp(t, n) {
      let r = this.asDraft();
      r[t] = n;
    }
    resetToDefault(t) {
      let n = this.asDraft();
      n[t] = void 0;
    }
    deleteProp(t) {
      let n = this.asDraft();
      delete n[t];
    }
    hasProp(t) {
      return Object.hasOwn(this, t);
    }
    equals(t) {
      return this === t;
    }
    getPrimaryId() {
      return this.originalid ?? this.id;
    }
    toJS() {
      let t = { id: this.id, __class: this.__class };
      this.children && (t.children = this.replicaInfo ? [] : this.children.map((n) => n.toJS()));
      for (let n in this) {
        if (ob.has(n)) continue;
        let r = this[n];
        if (n === "replicaInfo" && r) {
          t[n] = JSON.parse(JSON.stringify(r));
          continue;
        }
        if (rb(r)) {
          t[n] = r.toJS();
          continue;
        }
        t[n] = r;
      }
      return t;
    }
    set(t, n) {
      this.treeState.treeLineage?.editHooks?.onTreeEditStart();
      try {
        let r = this.asDraft(n);
        return (r.verifyPropertiesToSet(t), r.assign(t), r);
      } catch (r) {
        throw (this.treeState.treeLineage?.editHooks?.onTreeEditError(r), r);
      } finally {
        this.treeState.treeLineage?.editHooks?.onTreeEditEnd();
      }
    }
    verifyPropertiesToSet(t) {
      this.treeState.treeLineage &&
        (x(!t.id, "`id` should not be set"),
        x(!t.parentid || this.parentid === t.parentid, "`parentid` should not be set"),
        x(!t.children, "`children` should not be set"),
        x(!t.mutable, "`mutable` should not be set"),
        x(!t.update, "`update` should not be set"),
        x(!t.cache, "`cache` should not be set"),
        x(!t.treeState, "`treeState` should not be set"));
    }
    cloneEmpty() {
      return new this.constructor();
    }
    clone(t) {
      let n = this.cloneEmpty();
      if (
        (n.assign(this, Qr, { cache: n.cache, treeState: n.treeState, id: n.id }, t), t?.children)
      )
        return n;
      let r = this.children;
      return (r && (n.children = new Ae(r.map((o) => o.clone({ parentid: n.id })))), n);
    }
    cloneWithIds(t) {
      let n = this.cloneEmpty();
      if ((n.assign(this, Qr, { cache: n.cache, treeState: n.treeState }, t), t?.children))
        return n;
      let r = this.children;
      return (r && (n.children = new Ae(r.map((o) => o.cloneWithIds()))), n);
    }
    cloneWithRenamedIds(t, n) {
      let r = this.cloneEmpty();
      if (
        (r.assign(this, Qr, { cache: r.cache, treeState: r.treeState, id: r.id }, n),
        t.set(this.id, r.id),
        n?.children)
      )
        return r;
      let o = this.children;
      return (
        o && (r.children = new Ae(o.map((i) => i.cloneWithRenamedIds(t, { parentid: r.id })))),
        r
      );
    }
    cloneWithCallback(t, n) {
      let r = this.cloneEmpty(),
        o = t(this);
      if (
        (r.assign(this, Qr, { cache: r.cache, treeState: r.treeState, id: r.id }, o),
        n && r.setProp("parentid", n),
        o?.children)
      )
        return r;
      let i = this.children;
      return (i && (r.children = new Ae(i.map((a) => a.cloneWithCallback(t, r.id)))), r);
    }
    freeze() {
      return (
        x(this.mutable, "Node must be mutable when freezing"),
        (this.mutable = !1),
        (this.treeState.draft = null),
        !1,
        this
      );
    }
    preCommit(t, n) {}
    preFreeze(t, n) {}
    treeOrLatest(t) {
      return t || this.tree();
    }
    tree() {
      return this.treeState?.treeLineage?.latestTree;
    }
    isMutable() {
      return this.mutable;
    }
    asDraft(t) {
      return this.mutable ? this : this.treeOrLatest(t)?.getNodeAsDraft(this);
    }
    draftOrCurrent() {
      return this.treeState.draft ? this.treeState.draft : this;
    }
    getChild(t) {
      if (!this.children || t < 0 || t >= this.children.length) return null;
      let n = this.children.at(t);
      return n || null;
    }
    addChild(t) {
      return (
        x(this.mutable, "Node must be mutable when adding children"),
        x(this.children, "Node must have children"),
        this.children && ((t.parentid = this.id), this.children.push(t)),
        t
      );
    }
    find(t) {
      if (t(this)) return this;
      let n = this.children;
      if (n)
        for (let r of n) {
          let o = r.find(t);
          if (o) return o;
        }
      return null;
    }
    *ancestors() {
      let t = this.tree();
      if (!t || !t.has(this.id)) throw Error("Only nodes in a tree have access to their parents.");
      let n = t.get(this.parentid);
      for (; n;) (yield n, (n = t.get(n.parentid)));
    }
    *fastWalk(t = {}) {
      let n = ib(this);
      if ((yield n, n.skipChildren)) return;
      let r = this.children;
      if (r) for (let o = 0, i = r.length; o < i; o++) yield* r.at(o).fastWalk();
    }
    get(t) {
      return this[t];
    }
    walk() {
      let t = !0,
        n = !1,
        r = [this, 0],
        o = [];
      return {
        [Symbol.iterator]() {
          return this;
        },
        next() {
          if (t) return ((t = !1), { value: r[0], done: !1 });
          if (n) return { value: void 0, done: !0 };
          for (; !r[0].children || r[1] >= r[0].children.length;) {
            let a = o.pop();
            if (!a) return ((n = !0), { value: void 0, done: !0 });
            r = a;
          }
          let i = r[0].children.at(r[1]++);
          return (i.children && (o.push(r), (r = [i, 0])), { value: i, done: !1 });
        },
      };
    }
  };
function ib(e) {
  let t = !0;
  return (
    "isLoaded" in e &&
      (x(typeof e.isLoaded == "function", "isLoaded must be a function"), (t = !!e.isLoaded())),
    {
      id: e.id,
      __class: e.__class,
      update: e.update,
      mutable: e.mutable,
      isLoaded: t,
      get: (r) => e[r],
      getSubfield: (...r) => {
        let o = e;
        for (let i of r) {
          if (!o || typeof o != "object") return;
          o = o[i];
        }
        return o;
      },
      isKeySetAndNotInherited: (r) => {
        if (!e.originalid) return !0;
        let o = e.tree();
        if (!o) return !1;
        let i = e;
        for (; i && !i.replicaInfo;) i = o.get(i.parentid);
        let a = i?.replicaInfo?.overrides[e.originalid];
        return !!(a && (Object.hasOwn(a, r) || a._deleted?.includes(r)));
      },
      keys: () => Object.keys(e).values(),
      getLocalizationSourceGroupCache: () => e.cache.localizationSourceGroup,
      setLocalizationSourceGroupCache: (r) => {
        let o = e.cache;
        o.localizationSourceGroup = r;
      },
      skipChildren: !1,
    }
  );
}
var Ic = "|local|";
var ab = { color: "rgba(0,0,0,0.25)", x: 0, y: 2, blur: 5 },
  sb = {
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
function Dc(e, t) {
  let n = { ...t, ...e };
  return (n.id || (n.id = rn()), n);
}
function va(e) {
  if (!g(e) || !("id" in e)) return !1;
  for (let n of qi) if (!(n in e)) return !1;
  return !0;
}
function Xt(e) {
  return M(e) && e.every(va);
}
function UB(e) {
  return Dc(e, ab);
}
function to(e) {
  return Dc(e, sb);
}
function $B(e) {
  return { ...e, id: rn() };
}
function qB(e, t) {
  return { ...e, ...t };
}
function eF(e) {
  return !(!wc(e) || e.__class === "ImageStylePresetNode");
}
function tF(e) {
  return Pa(e) && !ut(e);
}
function nF(e) {
  if (!wc(e)) return !1;
  switch (e.__class) {
    case "CodeComponentNode":
    case "FormBooleanInputNode":
    case "FormPlainTextInputNode":
    case "FormSelectNode":
    case "FrameNode":
    case "ImageStylePresetNode":
    case "ShaderNode":
      return !0;
    default:
      return !1;
  }
}
function wc(e) {
  return Pa(e) && dt(e);
}
var Lc = "boxShadows",
  Mc = (e) => e === Lc;
function Pa(e) {
  return g(e) ? Lc in e : !1;
}
function rF(e) {
  return !Pa(e) || !Xt(e.boxShadows) ? !1 : e.boxShadows.length > 0;
}
var Ac = "shadows",
  Ec = (e) => e === Ac;
function sF(e) {
  return Ac in e;
}
var lF = { shadows: void 0 };
function Ia(e) {
  return g(e) ? e && $i.every((t) => t in e) : !1;
}
function uF(e) {
  return M(e) && e.every(Ia);
}
var lb = "removeTokenVariables";
function Bc(e) {
  return typeof e == "object" && e !== null && lb in e;
}
function vF(e, t = !1) {
  let n = {};
  for (let r of e) {
    let o = r.colorForMode(t);
    o && (n[ro(r)] = o);
  }
  return n;
}
function Oc(e) {
  let t = { light: { srgb: "", p3: "" }, dark: { srgb: "", p3: "" } };
  for (let n of e) {
    let r = ro(n);
    if (b.isP3String(n.light)) {
      t.light.p3 += `${r}: ${n.light};`;
      let o = lt.fromString(n.light)?.toString("srgb");
      o && (t.light.srgb += `${r}: ${o};`);
    } else t.light.srgb += `${r}: ${n.light};`;
    if (!(!n.dark || n.softDeleted))
      if (b.isP3String(n.dark)) {
        t.dark.p3 += `${r}: ${n.dark};`;
        let o = lt.fromString(n.dark)?.toString("srgb");
        o && (t.dark.srgb += `${r}: ${o};`);
      } else t.dark.srgb += `${r}: ${n.dark};`;
  }
  return t;
}
function PF(e) {
  let t = Oc(e);
  return [
    `body { ${t.light.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.light.p3} } }`,
    `@media (prefers-color-scheme: dark) { body { ${t.dark.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.dark.p3} } } }`,
  ];
}
function IF(e) {
  let t = Oc(e);
  return [
    `body { ${t.light.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.light.p3} } }`,
    `body[data-framer-theme="dark"] { ${t.dark.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.dark.p3} } }`,
  ];
}
function DF(e, t, n = !1) {
  let r = {};
  for (let o of t) {
    let i = o.colorForMode(n);
    if (!i) return;
    r[o.id] = i;
  }
  return ub(e, r, !0);
}
function ub(e, t, n) {
  let r;
  if (We(e)) {
    let i = e.html;
    if ($t(i) || Object.keys(t).some((s) => i.includes(ro({ id: s })))) {
      let s = e.removeTokenVariables(t);
      s !== i && ((r ??= {}), (r.html = s));
    }
  }
  let o = cb(e, t, n);
  return (o && (r = { ...r, ...o }), r);
}
var db = new Set([...Hr, "children", "id"]);
function Wc(e) {
  return db.has(e);
}
function cb(e, t, n) {
  let r;
  return (
    (e instanceof eo ? e.entries() : Object.entries(e)).forEach(([i, a]) => {
      if (Wc(i)) return;
      let s,
        l = Ec(i) || Mc(i);
      if (M(a)) {
        let u = [],
          c = !1;
        (a.forEach((m, f) => {
          let T = l && (Ia(m) || va(m)) ? no(m, t) : Fc(String(f), m, t, n);
          (T && (c = !0), u.push(T || m));
        }),
          c && (s = u));
      } else s = Fc(i, a, t, n);
      typeof s < "u" && (r || (r = {}), (r[i] = s));
    }),
    r
  );
}
function Sn(e, t) {
  if (M(e)) {
    for (let n of e) if (Sn(n, t)) return !0;
    return !1;
  }
  if (g(e)) {
    let n = Object.values(e);
    for (let r of n) if (Sn(r, t)) return !0;
    return !1;
  }
  return Ke(e) ? Kr(e) === t : !1;
}
function wF(e, t) {
  if (We(e)) {
    let n = e.getTextColors(!1);
    for (let o of n) if (Sn(o, t)) return !0;
    let r = e.getFills();
    for (let o of r) if (Sn(o, t)) return !0;
  }
  for (let n in e) if (!Wc(n) && Sn(e[n], t)) return !0;
  return !1;
}
function Fc(e, t, n, r) {
  if (ba(e)) return pb(t, n);
  if (Bc(t)) {
    let i = t.removeTokenVariables(n);
    if (i) return i;
  }
  let o = $r(t, n);
  if (o) return o;
  if (r && Ke(t)) return Ur(t);
}
function pb(e, t) {
  if (!Pe(e)) return;
  let { value: n } = e,
    r = no(n, t);
  return r === void 0 ? void 0 : { ...e, value: r };
}
function no(e, t) {
  if (M(e)) {
    let n = !1,
      r = e.map((o) => {
        let i = no(o, t);
        return i ? ((n = !0), i) : o;
      });
    return n ? r : void 0;
  }
  if (g(e)) {
    let n = {},
      r = !1;
    for (let o in e) {
      let i = no(e[o], t);
      i ? ((r = !0), (n[o] = i)) : (n[o] = e[o]);
    }
    return r ? n : void 0;
  }
  if (Ke(e)) return $r(e, t);
}
function ro(e) {
  return `${jr}${e.id}`;
}
function LF(e, t = {}) {
  let n = e.light;
  if (!n) return "";
  let r = b.isColor(n) ? b.toRgbString(b(n)) : n,
    o = `var(${ro(e)}, ${r})`;
  return t.excludeMetadata === !0 ? o : `${o} ${fb(e.name, t.packageIdentifier)}`;
}
function MF(e, t) {
  if (Ke(e)) {
    let n = Ur(e);
    if (n) return n;
  }
  return p(e) && t ? t(e) : e;
}
function fb(e, t) {
  let n = { name: e };
  return (t && t !== Ic && (n.packageIdentifier = t), `/* ${JSON.stringify(n)} */`);
}
function AF(e, t) {
  let n = t.commaIndex ?? t.end - 1,
    r = e.substring(t.start + 4, n);
  return _r(r);
}
function EF(e) {
  return _r(e);
}
function BF(e) {
  return Vn(e).fallback || null;
}
function zc(e) {
  let t = "hasProp";
  return !!e && typeof e == "object" && t in e && typeof e[t] == "function";
}
function Gc(e) {
  return { collectionRepeatedItemId: e, repeatedItemId: e };
}
function jc(e, t) {
  let n = t?.getPrimaryId();
  if (((t = e.get(n)), !Le(t))) return null;
  if (t.repeatedItemId !== void 0) return Hc(e, t, t.repeatedItemId);
  let r = Hc(e, t, t.collectionRepeatedItemId);
  return r || Kc(t);
}
function GF(e, t) {
  let n = t.cache.repeatedAncestorRepeaterIds;
  if (n !== null) return n;
  let r = mb(e, t);
  return ((t.cache.repeatedAncestorRepeaterIds = r), r);
}
function mb(e, t) {
  let n = [],
    r = t,
    o = e.getParent(t.id);
  for (; o;) {
    if (Ut(o)) n.push(o.id);
    else if (Le(o)) {
      let i = jc(e, o);
      i && r.getPrimaryId() === i.id && n.push(o.id);
    }
    if (((r = o), (o = e.getParent(o.id)), o && e.isGroundNode(o))) break;
  }
  return (n.reverse(), n);
}
function jF(e, t) {
  let n = t;
  for (let r of t.ancestors()) {
    if (Le(r)) return { repeater: r, inRepeatedChild: Yt(e, n, r) };
    n = r;
  }
}
function _F(e) {
  for (let t of e.ancestors()) if (Le(t)) return t;
}
function _c(e, t) {
  return e.getNodeWithTrait(t.parentid, Le) ?? void 0;
}
function KF(e, t) {
  return e.getNodeWithTrait(t.parentid, oi) ?? void 0;
}
function yb(e, t) {
  if (!t) return null;
  let n = jc(e, t);
  return n ? (t.originalid ? t.children?.find((o) => o.originalid === n.id) : n) : null;
}
function Yt(e, t, n) {
  return ((n ??= _c(e, t)), yb(e, n)?.id === t.id);
}
function UF(e, t) {
  return Yt(e, t) || Ut(t);
}
function $F(e, t, n) {
  return !!n && Le(e) && !Yt(t, n, e);
}
function qF(e) {
  let t = e.children?.at(0);
  e.set(Gc(t?.id));
}
function XF(e, t) {
  let n = new Map();
  for (let r of t) {
    let o = hb(e, r);
    o && n.set(o.repeaterId, o);
  }
  return [...n.values()];
}
function hb(e, t) {
  let n = _c(e, t);
  if (!n || !Yt(e, t, n)) return null;
  let r = t.getPrimaryId();
  return {
    repeaterId: n.getPrimaryId(),
    disableFallback: n.repeatedItemId !== void 0,
    repeatedItemId: r,
    repeatedItemChildIds: t.children?.map((o) => o.getPrimaryId()) ?? [],
  };
}
function YF(e, t, n) {
  for (let r of t) {
    let o = e.get(r.repeaterId);
    if (!Le(o)) continue;
    let i = xb(e, o, r, n);
    (i === o.repeatedItemId && i === o.collectionRepeatedItemId) || o.set(Gc(i));
  }
}
function xb(e, t, n, r) {
  let o = new Set(),
    i = r?.get(n.repeatedItemId);
  (i && o.add(i), o.add(n.repeatedItemId));
  for (let a of n.repeatedItemChildIds) o.add(a);
  for (let a of o) {
    let s = gb(e, t, a);
    if (s) return s.id;
  }
  if (!n.disableFallback) return Kc(t)?.id;
}
function gb(e, t, n) {
  let r = e.get(n);
  for (; r;) {
    if (r.parentid === t.id) return Ut(r) ? null : r;
    if (!r.parentid) return null;
    r = e.get(r.parentid);
  }
  return null;
}
function Hc(e, t, n) {
  let r = e.get(n);
  return !r || Ut(r) || r.parentid !== t.id ? null : r;
}
function Kc(e) {
  let t = e.children.at(0);
  return !t || Ut(t) ? null : t;
}
function Jt(e) {
  return typeof e == "string" || $t(e);
}
function t0(e, t) {
  x(
    typeof e == "string",
    `${t}: Rich text value is stored as JSON here, but this path still expects HTML.`
  );
}
function Uc(e, t = (n, r) => n === r) {
  let n = yn;
  for (let r of e)
    if (pr(n)) n = r;
    else if (!t(r, n)) return nn;
  return n;
}
function i0(e, t) {
  let n = e[0];
  if (n === void 0) return yn;
  let r = n[t];
  for (let [o, i] of e.entries()) {
    if (o === 0) continue;
    let a = i[t];
    if (r !== a) return nn;
  }
  return r;
}
function a0(...e) {
  return e.find(wi);
}
var qc = "borderColor";
function p0(e) {
  return {
    borderWidth: e.borderPerSide
      ? { top: e.borderTop, right: e.borderRight, bottom: e.borderBottom, left: e.borderLeft }
      : e.borderWidth,
    borderColor: e.borderColor,
    borderStyle: e.borderStyle,
  };
}
function Rn(e) {
  if (!g(e)) return !1;
  let t = "borderWidth",
    n = "borderStyle",
    r = "borderPerSide",
    o = "borderTop",
    i = "borderRight",
    a = "borderBottom",
    s = "borderLeft";
  return !(
    !p(e[qc]) ||
    !p(e[n]) ||
    !te(e[t]) ||
    !ee(e[r]) ||
    !te(e[o]) ||
    !te(e[i]) ||
    !te(e[s]) ||
    !te(e[a])
  );
}
var bb = { solid: !0, dashed: !0, dotted: !0, double: !0 };
function f0(e) {
  return p(e) && Object.hasOwn(bb, e);
}
var et = {
  borderColor: "black",
  borderStyle: "solid",
  borderPerSide: !1,
  borderBottom: 1,
  borderLeft: 1,
  borderRight: 1,
  borderTop: 1,
  borderWidth: 1,
};
function Xc(e) {
  if (!Rn(e)) return e;
  let {
    borderColor: t,
    borderStyle: n,
    borderPerSide: r,
    borderWidth: o,
    borderTop: i,
    borderRight: a,
    borderBottom: s,
    borderLeft: l,
  } = e;
  return r
    ? {
        borderColor: t,
        borderStyle: n,
        borderTopWidth: i,
        borderRightWidth: a,
        borderBottomWidth: s,
        borderLeftWidth: l,
      }
    : { borderColor: t, borderStyle: n, borderWidth: o };
}
function m0(e) {
  let t = { ...et };
  return (
    te(e.borderTop) && (t.borderTop = e.borderTop),
    te(e.borderRight) && (t.borderRight = e.borderRight),
    te(e.borderBottom) && (t.borderBottom = e.borderBottom),
    te(e.borderLeft) && (t.borderLeft = e.borderLeft),
    te(e.borderWidth) && (t.borderWidth = e.borderWidth),
    p(e.borderColor) && (t.borderColor = e.borderColor),
    p(e.borderStyle) && (t.borderStyle = e.borderStyle),
    ee(e.borderPerSide) && (t.borderPerSide = e.borderPerSide),
    t
  );
}
function y0(e) {
  let t = { ...et };
  return (
    te(e.borderTop) && (t.borderTop = e.borderTop),
    te(e.borderRight) && (t.borderRight = e.borderRight),
    te(e.borderBottom) && (t.borderBottom = e.borderBottom),
    te(e.borderLeft) && (t.borderLeft = e.borderLeft),
    te(e.borderWidth) && (t.borderWidth = e.borderWidth),
    p(e.borderColor) && (t.borderColor = e.borderColor),
    p(e.borderStyle) && (t.borderStyle = e.borderStyle),
    ee(e.borderPerSide) && (t.borderPerSide = e.borderPerSide),
    t
  );
}
function h0(e) {
  if (!e) return et;
  let t = 0,
    n = e.borderTopWidth ?? e.borderWidth ?? t,
    r = e.borderRightWidth ?? e.borderWidth ?? t,
    o = e.borderBottomWidth ?? e.borderWidth ?? t,
    i = e.borderLeftWidth ?? e.borderWidth ?? t,
    a = e.borderWidth ?? et.borderWidth,
    s = Nt(Uc([n, r, o, i, a])),
    l = e.borderStyle ?? et.borderStyle,
    u = e.borderColor ?? et.borderColor;
  return {
    borderPerSide: s,
    borderTop: n,
    borderRight: r,
    borderBottom: o,
    borderLeft: i,
    borderColor: u,
    borderStyle: l,
    borderWidth: a,
  };
}
function $c(e) {
  return p(e) || k(e);
}
function Nn(e) {
  return te(e) || k(e);
}
function x0(e) {
  if (!g(e)) return !1;
  let t = "borderWidth",
    n = "borderStyle",
    r = "borderTopWidth",
    o = "borderRightWidth",
    i = "borderBottomWidth",
    a = "borderLeftWidth";
  return !(
    !$c(e[qc]) ||
    !$c(e[n]) ||
    !Nn(e[r]) ||
    !Nn(e[o]) ||
    !Nn(e[a]) ||
    !Nn(e[i]) ||
    !Nn(e[t])
  );
}
var Tb = [
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
  Cb = new Set(Tb);
function Yc(e) {
  return p(e) && Cb.has(e);
}
var C0 = "--framer-custom-cursors";
var Vb = "customCursorSmartComponentId";
function V0(e) {
  return g(e) && Vb in e;
}
var Sb = {
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
  S0 = { ...Sb, cursor: void 0, customCursorType: void 0 },
  N0 = "default",
  Nb = "cursor";
function Jc(e) {
  return Nb in e;
}
function R0(e) {
  if (Jc(e))
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
var k0 = 20;
function Rb(e) {
  return p(e.customCursorSmartComponentId);
}
function v0(e, t) {
  return !t || !Jc(t) || t.customCursorType !== "component" || !Rb(t)
    ? !1
    : It(e.get(t.customCursorSmartComponentId));
}
var kb = "single",
  vb = "fused";
function L0(e) {
  return { single: e, fused: [e, e, e, e] };
}
function kn(e) {
  if (!g(e) || !S(e[kb])) return !1;
  let t = e[vb];
  return M(t) && t.length === 4 && t.every(S);
}
function M0(e) {
  return Pe(e) && e.type === "fusednumber" && kn(e.value);
}
var Pb = "isFused";
function Zc(e) {
  return g(e) && ee(e[Pb]);
}
var Ib = "id";
function Db(e) {
  return Ib in e;
}
var wb = "value";
function Lb(e) {
  return g(e) && Db(e) && wb in e;
}
function Q0(e) {
  return e.type === "array" && ep(e.value);
}
function eO(e) {
  return e.type === "object" && (g(e.value) || Te(e.value));
}
function Qc(e) {
  return e.type !== "fusednumber" || !Zc(e) ? !1 : kn(e.value);
}
function Zt(e) {
  return q(e) && e.endsWith("px") && S(Number.parseFloat(e));
}
function Mb(e) {
  if (!q(e)) return !1;
  let [t, n] = Kt(e);
  return !Number.isNaN(t) && n === "%";
}
function tO(e) {
  return g(e) && e.type === "image";
}
var Ab = { string: !0, richtext: !0, image: !0, link: !0 };
function nO(e) {
  return e ? e.type in Ab : !1;
}
function oo(e) {
  return g(e) && S(e.latitude) && S(e.longitude);
}
function rO(e) {
  return !(
    !g(e) ||
    !oo(e.coordinate) ||
    (e.title !== void 0 && !q(e.title)) ||
    (e.address !== void 0 && !q(e.address))
  );
}
function oO(e) {
  return me(e) || ep(e);
}
function ep(e) {
  return M(e) && e.every(Lb);
}
function iO(e) {
  return A(e) || ee(e);
}
function aO(e) {
  return A(e) || q(e);
}
function sO(e) {
  return A(e) || q(e) || k(e);
}
function lO(e) {
  return q(e) || D(e);
}
function uO(e) {
  return A(e) || q(e) || ee(e) || S(e) || k(e) || Te(e);
}
function dO(e) {
  return A(e) || M(e);
}
function cO(e) {
  return M(e) && e.every(Er);
}
function pO(e) {
  return A(e) || q(e) || k(e);
}
function fO(e) {
  return D(e) || kc(e);
}
function mO(e) {
  return D(e) || typeof e == "boolean" || (typeof e == "number" && Number.isFinite(e));
}
function yO(e) {
  return A(e) || S(e);
}
function hO(e) {
  return g(e);
}
function xO(e) {
  return A(e) || Jt(e);
}
function gO(e) {
  return A(e) || q(e);
}
function bO(e) {
  return A(e) || q(e) || k(e);
}
function TO(e) {
  return qt(e) || k(e);
}
function CO(e) {
  return g(e) || k(e);
}
function VO(e) {
  return g(e) || k(e);
}
function SO(e) {
  return D(e) || Rn(e);
}
function NO(e) {
  return D(e) || Yc(e);
}
function RO(e) {
  if (A(e)) return !0;
  if (!q(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? Zt(t[0]) : t.length === 2 && t.every(Zt);
}
function kO(e) {
  if (A(e)) return !0;
  if (!q(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? Zt(t[0]) : t.length === 4 && t.every(Zt);
}
function vO(e) {
  if (A(e)) return !0;
  if (!q(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? Zt(t[0]) || Mb(t[0]) : t.length === 4 && t.every(Zt);
}
function PO(e) {
  return D(e) || q(e) || k(e);
}
function IO(e) {
  return A(e) || (M(e) && e.every(q)) || k(e);
}
function DO(e) {
  return (q(e) && Re(e)) || D(e) || k(e);
}
function wO(e) {
  return D(e) || q(e) || k(e);
}
function LO(e) {
  return M(e);
}
function MO(e) {
  return oo(e) || D(e) || k(e);
}
function zO(e, t) {
  return e === t ? !0 : e.variant !== t.variant ? !1 : io(e.variant, e.childNodes, t.childNodes);
}
function io(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let r = 0; r < t.length; r++) if (!ip(e, t[r], n[r])) return !1;
  return !0;
}
var z = (e, t, n) => Object.is(t, n),
  vn = (e, t, n) => de(t, n),
  tp = (e, t, n) => Da(t, n),
  np = { type: z, tag: z, textDirection: z, childNodes: Ub },
  Eb = { ...np, blockStyles: vn, backgroundMask: vn, textStylePreset: z },
  rp = { type: z, textDirection: z },
  Bb = { ...rp, childNodes: ap },
  op = { type: z, textDirection: z, listStyleType: z, start: z },
  Fb = { ...op, childNodes: ap },
  Ob = { type: z, childNodes: io },
  Wb = { type: z, mediaType: z, src: z, alt: z, pixelWidth: z, pixelHeight: z, link: tp },
  zb = { type: z, identifier: z, embedId: z, props: vn, width: z, alignment: z },
  Hb = { type: z, childNodes: jb };
function HO(e, t) {
  return e.id !== void 0 && e.id === t.id && e.variant === t.variant;
}
function GO(e, t, n) {
  return t === n || ip(e, t, n);
}
function ip(e, t, n) {
  if (t.type !== n.type) return !1;
  switch (t.type) {
    case "textBlock":
      return (x(n.type === "textBlock"), yt(e, "styles") ? Se(e, t, n, Eb) : Se(e, t, n, np));
    case "bulletedList":
      return (x(n.type === "bulletedList"), Se(e, t, n, Bb));
    case "numberedList":
      return (x(n.type === "numberedList"), Se(e, t, n, Fb));
    case "blockquote":
      return (
        x(n.type === "blockquote"),
        x(yt(e, "blockquotes"), "Document variant does not support blockquotes"),
        Se(e, t, n, Ob)
      );
    case "media":
      return (
        x(n.type === "media"),
        x(yt(e, "media"), "Document variant does not support media block"),
        Se(e, t, n, Wb)
      );
    case "module":
      return (
        x(n.type === "module"),
        x(yt(e, "embeds"), "Document variant does not support embeds"),
        Se(e, t, n, zb)
      );
    case "table":
      return (
        x(n.type === "table"),
        x(yt(e, "tables"), "Document variant does not support tables"),
        Se(e, t, n, Hb)
      );
    default:
      W(t);
  }
}
function jO(e, t, n) {
  if (t.type !== n.type) return !1;
  switch (t.type) {
    case "blockquote":
    case "table":
    case "tableRow":
      return !0;
    case "bulletedList":
      return (x(n.type === "bulletedList"), Se(e, t, n, rp));
    case "numberedList":
      return (x(n.type === "numberedList"), Se(e, t, n, op));
    default:
      W(t);
  }
}
function Gb(e, t, n) {
  return t === n || io(e, t.childNodes, n.childNodes);
}
function ap(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let r = 0; r < t.length; r++) if (!Gb(e, t[r], n[r])) return !1;
  return !0;
}
function jb(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let r = 0; r < t.length; r++) if (!_b(e, t[r].childNodes, n[r].childNodes)) return !1;
  return !0;
}
function _b(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let r = 0; r < t.length; r++) if (!Kb(e, t[r], n[r])) return !1;
  return !0;
}
function Kb(e, t, n) {
  return t === n
    ? !0
    : t.cellType !== n.cellType || t.rowSpan !== n.rowSpan || t.columnSpan !== n.columnSpan
      ? !1
      : io(e, t.childNodes, n.childNodes);
}
function Ub(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let r = 0; r < t.length; r++) if (!qb(e, t[r], n[r])) return !1;
  return !0;
}
var sp = { type: z, text: z, bold: z, italic: z, inlineCode: z, link: tp },
  $b = {
    ...sp,
    inlineStyles: vn,
    backgroundStyles: vn,
    inlineCodeStylePreset: z,
    linkStylePreset: z,
  };
function qb(e, t, n) {
  return t.type !== n.type
    ? !1
    : t.type === "lineBreak"
      ? !0
      : n.type !== "text"
        ? !1
        : yt(e, "styles")
          ? Se(e, t, n, $b)
          : Se(e, t, n, sp);
}
function Da(e, t) {
  return e === t
    ? !0
    : e === void 0 ||
        t === void 0 ||
        !kt(e.openInNewTab, t.openInNewTab) ||
        !kt(e.smoothScroll, t.smoothScroll) ||
        !kt(e.clickTrackingId, t.clickTrackingId) ||
        !kt(e.preserveParams, t.preserveParams) ||
        !Xb(e.relValues, t.relValues)
      ? !1
      : de(e.link, t.link);
}
function Xb(e, t) {
  if (e === t) return !0;
  if (D(e) || D(t)) return kt(e, t);
  let n = e ?? [],
    r = t ?? [];
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) if (n[o] !== r[o]) return !1;
  return !0;
}
function Se(e, t, n, r) {
  for (let o in r)
    if (Object.hasOwn(r, o)) {
      let i = r[o];
      if (!i(e, t[o], n[o])) return !1;
    }
  return !0;
}
function lp(e, t) {
  return t in e ? Reflect.get(e, t) : void 0;
}
function wa(e, t, n) {
  return lp(e, n) === lp(t, n);
}
function ao(e) {
  return {
    id: e.id ?? Ce(),
    type: "richText",
    variant: e.variant,
    childNodes: so(e.variant, e.childNodes),
  };
}
function so(e, t) {
  return t.map((n) => Yb(e, n));
}
function Yb(e, t) {
  switch (t.type) {
    case "textBlock":
      return Jb(e, t);
    case "bulletedList":
      return Zb(e, t);
    case "numberedList":
      return Qb(e, t);
    case "blockquote": {
      let n = eT(e, t);
      return (x(Ve(n, e), "normalizeRichTextDocument: unexpected node: blockquote"), n);
    }
    case "table": {
      let n = tT(e, t);
      return (x(Ve(n, e), "normalizeRichTextDocument: unexpected node: table"), n);
    }
    case "media":
    case "module":
      return t;
  }
}
function Jb(e, t) {
  return { ...t, childNodes: aT(e, t.childNodes) };
}
function Zb(e, t) {
  let n = t.childNodes.map((r) => up(e, r));
  return { ...t, childNodes: n.length > 0 ? n : [dp()] };
}
function Qb(e, t) {
  let n = t.childNodes.map((r) => up(e, r));
  return { ...t, childNodes: n.length > 0 ? n : [dp()] };
}
function eT(e, t) {
  let n = so(e, t.childNodes);
  return { ...t, childNodes: n.length > 0 ? n : [Pn()] };
}
function tT(e, t) {
  if (t.childNodes.length === 0) return { ...t, childNodes: [pT()] };
  if (t.childNodes.every((r) => r.childNodes.length === 0))
    return { ...t, childNodes: t.childNodes.map((r) => ({ ...r, childNodes: [La()] })) };
  let n = t.childNodes.map((r) => oT(e, r));
  return { ...t, childNodes: nT(e, n) };
}
function nT(e, t) {
  let { width: n, height: r, slots: o } = rT(t);
  for (
    x(n > 0, "richTextDocumentNormalization: table has no cells"),
      x(r > 0, "richTextDocumentNormalization: table has no rows");
    t.length < r;
  )
    t.push(fT());
  for (let i = 0; i < r; i++) {
    let a = o[i],
      s = t[i];
    x(a && s, "richTextDocumentNormalization: row length mismatch");
    let l = 0;
    for (let u = 0; u < a.length; u++) {
      let c = s.childNodes[l],
        m = a[u];
      if (!m?.length) (s.childNodes.splice(l, 0, La()), l++);
      else if (c)
        for (let f of m) {
          x(f, "richTextDocumentNormalization: slotCell is undefined");
          let h = f.cellX + f.width,
            T = f.cellY + f.height;
          (x(
            u >= f.cellX && u < h && i >= f.cellY && i < T,
            () =>
              `richTextDocumentNormalization: table cell bounds error. (${u}, ${i}) not within (${f.cellX}, ${f.cellY})...(${h}, ${T})`
          ),
            f.cell === c && l++);
        }
    }
  }
  return t;
}
function rT(e) {
  let t = [],
    n = 0,
    r = 0,
    o = 0,
    i = [];
  for (let f = 0; f < e.length; f++) a(e[f], f);
  return (
    s(),
    {
      width: n,
      height: r,
      slots: Array.from({ length: r }, (f, h) =>
        Array.from({ length: n }, (T, V) => t[h]?.[V] ?? [])
      ),
    }
  );
  function a(f, h) {
    (r === o && r++,
      x(o <= r, "richTextDocumentNormalization: table forming algorithm height error"));
    let T = 0;
    if ((l(), f.childNodes.length === 0)) {
      o++;
      return;
    }
    for (let V = 0; V < f.childNodes.length; V++) {
      let R = f.childNodes[V];
      for (; T < n && m(T, o);) T++;
      (T === n && n++,
        x(T <= n, "richTextDocumentNormalization: table forming algorithm width error"));
      let y = Math.min(R.columnSpan || 1, 1e3),
        C = Math.min(R.rowSpan ?? 1, 65534),
        O = !1;
      (C === 0 && ((O = !0), (C = 1)), n < T + y && (n = T + y), r < o + C && (r = o + C));
      let G = { cell: R, cellX: T, cellY: o, width: y, height: C };
      (u(G), O && i.push({ cell: G, cellX: T, width: y }), (T += y));
    }
    o += 1;
  }
  function s() {
    for (; o < r;) (l(), (o += 1));
    i = [];
  }
  function l() {
    for (let { cell: f, cellX: h, width: T } of i) (c(f, o, h, h + T), f.height++);
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
    for (let R = T; R < V; R++) (t[h][R] ??= []).push(f);
  }
  function m(f, h) {
    return !!t[h]?.[f]?.length;
  }
}
function up(e, t) {
  let n = so(e, t.childNodes);
  return { ...t, childNodes: n.length > 0 ? n : [Pn("inherit")] };
}
function oT(e, t) {
  return { ...t, childNodes: t.childNodes.map((n) => iT(e, n)) };
}
function iT(e, t) {
  let n = so(e, t.childNodes),
    r = { ...t, childNodes: n.length > 0 ? n : [Pn()] };
  return (
    r.columnSpan !== void 0 && r.columnSpan < 1 && (r.columnSpan = 1),
    r.rowSpan !== void 0 && r.rowSpan < 0 && (r.rowSpan = 0),
    r
  );
}
function aT(e, t) {
  let r = lT(t).filter((i) => i.type === "lineBreak" || i.text.length > 0),
    o = dT(r);
  if (o.some((i) => i.type === "text")) return o;
  for (let i of t)
    if (i.type === "text" && i.text === "" && sT(i)) {
      o.push(i);
      break;
    }
  return o;
}
function sT(e) {
  let t = e;
  return !!(t.inlineStyles || t.linkStylePreset || t.inlineCodeStylePreset);
}
function lT(e) {
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
    uT(n, t);
  }
  return t;
}
function uT(e, t) {
  let n = 0,
    r = !1;
  for (; n < e.text.length;) {
    let o = e.text.indexOf(
      `
`,
      n
    );
    if (o === -1) {
      let a = e.text.slice(n);
      a.length > 0 && t.push({ ...e, id: r ? Ce() : e.id, text: a });
      return;
    }
    let i = e.text.slice(n, o);
    (i.length > 0 && (t.push({ ...e, id: r ? Ce() : e.id, text: i }), (r = !0)),
      t.push({ id: Ce(), type: "lineBreak" }),
      (n = o + 1));
  }
}
function dT(e) {
  let t = [];
  for (let n of e) {
    let r = t[t.length - 1];
    if (r?.type === "text" && n.type === "text" && cT(r, n)) {
      t[t.length - 1] = { ...r, text: r.text + n.text };
      continue;
    }
    t.push(n.type === "text" ? { ...n } : n);
  }
  return t;
}
function cT(e, t) {
  if (e.bold !== t.bold || e.italic !== t.italic || e.inlineCode !== t.inlineCode) return !1;
  let n = "inlineStyles" in e ? e.inlineStyles : void 0,
    r = "inlineStyles" in t ? t.inlineStyles : void 0;
  if (!de(n, r)) return !1;
  let o = "backgroundStyles" in e ? e.backgroundStyles : void 0,
    i = "backgroundStyles" in t ? t.backgroundStyles : void 0;
  return !de(o, i) || !wa(e, t, "inlineCodeStylePreset") || !wa(e, t, "linkStylePreset")
    ? !1
    : Da(e.link, t.link);
}
function Pn(e = "auto") {
  return { id: Ce(), type: "textBlock", tag: "p", textDirection: e, childNodes: [] };
}
function dp() {
  return { id: Ce(), type: "listItem", childNodes: [Pn("inherit")] };
}
function pT() {
  return { id: Ce(), type: "tableRow", childNodes: [La()] };
}
function fT() {
  return { id: Ce(), type: "tableRow", childNodes: [] };
}
function La() {
  return { id: Ce(), type: "tableCell", cellType: "cell", childNodes: [Pn()] };
}
function nW(e, t) {
  t.document?.(e);
  for (let n of e.childNodes) lo(n, t);
}
function rW(e, t) {
  if (t.document?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let r = uo(n, t);
    if (r) return r;
  }
}
function mp(e, t, n = {}) {
  let r = xe(e, t.document, (o) => {
    let i = Ue(o.childNodes, (a) => co(e.variant, a, t));
    return i === o.childNodes ? o : { ...o, childNodes: i };
  });
  return r === e ? e : n.normalize === !1 ? r : ao(r);
}
function lo(e, t) {
  switch (e.type) {
    case "textBlock":
      t.textBlock?.(e);
      for (let n of e.childNodes) hT(n, t);
      return;
    case "bulletedList":
      t.bulletedList?.(e);
      for (let n of e.childNodes) cp(n, t);
      return;
    case "numberedList":
      t.numberedList?.(e);
      for (let n of e.childNodes) cp(n, t);
      return;
    case "blockquote":
      t.blockquote?.(e);
      for (let n of e.childNodes) lo(n, t);
      return;
    case "media":
      t.media?.(e);
      return;
    case "module":
      t.module?.(e);
      return;
    case "table":
      t.table?.(e);
      for (let n of e.childNodes) mT(n, t);
      return;
  }
}
function cp(e, t) {
  t.listItem?.(e);
  for (let n of e.childNodes) lo(n, t);
}
function mT(e, t) {
  t.tableRow?.(e);
  for (let n of e.childNodes) yT(n, t);
}
function yT(e, t) {
  t.tableCell?.(e);
  for (let n of e.childNodes) lo(n, t);
}
function hT(e, t) {
  switch (e.type) {
    case "text":
      t.text?.(e);
      return;
    case "lineBreak":
      t.lineBreak?.(e);
      return;
  }
}
function uo(e, t) {
  switch (e.type) {
    case "textBlock":
      if (t.textBlock?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let r = bT(n, t);
        if (r) return r;
      }
      return;
    case "bulletedList":
      if (t.bulletedList?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let r = pp(n, t);
        if (r) return r;
      }
      return;
    case "numberedList":
      if (t.numberedList?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let r = pp(n, t);
        if (r) return r;
      }
      return;
    case "blockquote":
      if (t.blockquote?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let r = uo(n, t);
        if (r) return r;
      }
      return;
    case "media":
      return t.media?.(e) === !0 ? e : void 0;
    case "module":
      return t.module?.(e) === !0 ? e : void 0;
    case "table":
      if (t.table?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let r = xT(n, t);
        if (r) return r;
      }
      return;
  }
}
function pp(e, t) {
  if (t.listItem?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let r = uo(n, t);
    if (r) return r;
  }
}
function xT(e, t) {
  if (t.tableRow?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let r = gT(n, t);
    if (r) return r;
  }
}
function gT(e, t) {
  if (t.tableCell?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let r = uo(n, t);
    if (r) return r;
  }
}
function bT(e, t) {
  switch (e.type) {
    case "text":
      return t.text?.(e) === !0 ? e : void 0;
    case "lineBreak":
      return t.lineBreak?.(e) === !0 ? e : void 0;
  }
}
function co(e, t, n) {
  switch (t.type) {
    case "textBlock": {
      let r = xe(t, n.textBlock, (o) => {
        let i = Ue(o.childNodes, (a) => VT(e, a, n));
        return i === o.childNodes ? o : { ...o, childNodes: i };
      });
      return (
        x(
          Ve(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
    case "bulletedList": {
      let r = xe(t, n.bulletedList, (o) => {
        let i = Ue(o.childNodes, (a) => fp(e, a, n));
        return i === o.childNodes ? o : { ...o, childNodes: i };
      });
      return (
        x(
          Ve(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
    case "numberedList": {
      let r = xe(t, n.numberedList, (o) => {
        let i = Ue(o.childNodes, (a) => fp(e, a, n));
        return i === o.childNodes ? o : { ...o, childNodes: i };
      });
      return (
        x(
          Ve(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
    case "blockquote": {
      let r = xe(t, n.blockquote, (o) => {
        let i = Ue(o.childNodes, (a) => co(e, a, n));
        return i === o.childNodes ? o : { ...o, childNodes: i };
      });
      return (
        x(
          Ve(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
    case "media": {
      let r = xe(t, n.media, (o) => o);
      return (
        x(
          Ve(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
    case "module": {
      let r = xe(t, n.module, (o) => o);
      return (
        x(
          Ve(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
    case "table": {
      let r = xe(t, n.table, (o) => {
        let i = Ue(o.childNodes, (a) => TT(e, a, n));
        return i === o.childNodes ? o : { ...o, childNodes: i };
      });
      return (
        x(
          Ve(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
  }
}
function fp(e, t, n) {
  return xe(t, n.listItem, (r) => {
    let o = Ue(r.childNodes, (i) => co(e, i, n));
    return o === r.childNodes ? r : { ...r, childNodes: o };
  });
}
function TT(e, t, n) {
  return xe(t, n.tableRow, (r) => {
    let o = Ue(r.childNodes, (i) => CT(e, i, n));
    return o === r.childNodes ? r : { ...r, childNodes: o };
  });
}
function CT(e, t, n) {
  return xe(t, n.tableCell, (r) => {
    let o = Ue(r.childNodes, (i) => co(e, i, n));
    return o === r.childNodes ? r : { ...r, childNodes: o };
  });
}
function VT(e, t, n) {
  switch (t.type) {
    case "text":
      return xe(t, n.text, (r) => r);
    case "lineBreak":
      return xe(t, n.lineBreak, (r) => r);
  }
}
function xe(e, t, n) {
  let r = ST(e, t),
    o = n(r);
  return NT(o, t);
}
function ST(e, t) {
  return !t || typeof t == "function" ? e : (t.enter?.(e) ?? e);
}
function NT(e, t) {
  return t ? (typeof t == "function" ? t(e) : (t.exit?.(e) ?? e)) : e;
}
function Ue(e, t) {
  let n;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (!o) continue;
    let i = t(o);
    i !== o && ((n ??= Array.from(e)), (n[r] = i));
  }
  return n ?? e;
}
var yp = Symbol.for("framer.sharedEnum"),
  sW = Symbol.for("framer.sharedTypeIdentity");
function po(e) {
  return $(e) && yp in e;
}
function lW(e) {
  let { options: t, localizedOptionTitles: n } = e,
    r = t.map((i, a) => e.optionTitles?.[a] ?? i),
    o = (i) => {
      if (typeof i != "string") return;
      let a = r.indexOf(i);
      return a === -1 ? void 0 : t[a];
    };
  return {
    [yp]: !0,
    kind: "enum",
    options: t,
    optionTitles: r,
    titleFor(i, a) {
      if (typeof i != "string") return;
      let s = t.indexOf(i);
      if (s !== -1) {
        for (let l = a; l; l = l.fallback) {
          let u = n?.[l.id]?.[s];
          if (u) return u;
        }
        return r[s];
      }
    },
    optionForTitle: o,
    getValidValue(i, a) {
      return typeof i == "string" && t.includes(i)
        ? i
        : (o(i) ?? (a !== void 0 && t.includes(a) ? a : void 0));
    },
  };
}
function RT(e) {
  return $(e) || Je(e);
}
var hp = "optional";
function kT(e) {
  return !!e && hp in e && e[hp] === !0;
}
function vT(e) {
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
        return Q(e.defaultValue) ? e.defaultValue : void 0;
      case "sharedtype": {
        if (!("definition" in e) || !po(e.definition)) return;
        let { definition: t } = e;
        if (t.kind === "enum")
          return Q(e.defaultValue) && t.options.includes(e.defaultValue) ? e.defaultValue : void 0;
        t.kind;
        return;
      }
      case "boolean":
        return Ss(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return Ct(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case "fusednumber":
      case "number":
        return Be(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return $(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return $(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
      case "location":
        return $(e.defaultValue) ? e.defaultValue : void 0;
      case "linkrelvalues":
        return On(e.defaultValue) ? e.defaultValue : void 0;
      case "multicollectionreference":
        return On(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = $(e.defaultValue) ? e.defaultValue : {};
        return ($(e.controls) && xp(t, e.controls), t);
      }
      case "array":
        return On(e.defaultValue) ? e.defaultValue : void 0;
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
function xp(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let o = e[n];
    if (!Ct(o) || kT(r)) continue;
    let i = vT(r);
    Ct(i) || (e[n] = i);
  }
}
function PT(e) {
  if ($(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function gp(e, t) {
  if (!RT(e)) return;
  let n = PT(e);
  xp(n, t);
}
var bp = "outputControls";
function IT(e) {
  return ($(e) || Je(e)) && bp in e;
}
function Tp(e, t) {
  Object.assign(e, { [bp]: t });
}
function yW(e) {
  if (IT(e)) return e.outputControls;
}
function Cp(e, t, n) {
  (Object.assign(e, { propertyControls: t }), DT(t), gp(e, t), n !== void 0 && Tp(e, n));
}
function DT(e) {
  for (let t of Object.values(e))
    t?.type !== "sharedtype" ||
      !("definition" in t) ||
      !po(t.definition) ||
      !Object.isExtensible(t) ||
      Object.defineProperty(t, "options", { value: t.definition.options, configurable: !0 });
}
function CW(e) {
  return e.propertyControls;
}
function fo(e, t = 2) {
  let n = 0;
  if (typeof e == "number") n = e;
  else if (typeof e == "string") n = parseFloat(e);
  else return;
  if (Number.isInteger(n)) return n;
  let r = 1;
  for (; t-- > 0;) r *= 10;
  return (n < 0 && (r *= -1), Math.round(n * r) / r);
}
function Ma(e) {
  let { paddingPerSide: t, paddingTop: n, paddingBottom: r, paddingLeft: o, paddingRight: i } = e;
  return t !== !1 && (n !== void 0 || r !== void 0 || o !== void 0 || i !== void 0);
}
function Vp(e) {
  let { padding: t = 0, paddingTop: n, paddingBottom: r, paddingLeft: o, paddingRight: i } = e;
  return Ma(e)
    ? {
        top: n !== void 0 ? n : t,
        bottom: r !== void 0 ? r : t,
        left: o !== void 0 ? o : t,
        right: i !== void 0 ? i : t,
      }
    : { top: t, bottom: t, left: t, right: t };
}
function Sp({ top: e, left: t, bottom: n, right: r }) {
  return e === r && r === n && n === t ? `${e}px` : `${e}px ${r}px ${n}px ${t}px`;
}
function kW(e) {
  if (e === "none") return null;
  let t = e
      .trim()
      .split(/\s+/u)
      .map((a) => fo(a)),
    [n, r, o, i] = t;
  switch (t.length) {
    case 1:
      return v(n) ? { top: n, right: n, bottom: n, left: n } : null;
    case 2:
      return !v(n) || !v(r) ? null : { top: n, right: r, bottom: n, left: r };
    case 3:
      return !v(n) || !v(r) || !v(o) ? null : { top: n, right: r, bottom: o, left: r };
    case 4:
      return !v(n) || !v(r) || !v(o) || !v(i) ? null : { top: n, right: r, bottom: o, left: i };
    default:
      return null;
  }
}
var yo = L(ne(), 1);
var vp = L(re(), 1),
  WW = (() => {
    let e = yo.default.forwardRef(function (n, r) {
      let {
          as: o = "div",
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
          __contentWrapperStyle: R,
          ...y
        } = n,
        C = ho(i),
        O = Rp(a),
        G = Rp(s),
        P = Ma(y) || y.padding ? Sp(Vp(y)) : void 0,
        J = P === void 0 ? {} : { padding: P },
        {
          width: ue,
          height: ie,
          minWidth: qe,
          maxWidth: tt,
          minHeight: us,
          maxHeight: Xo,
          ...Yo
        } = R ?? {},
        Xe = {
          ...m,
          display: "flex",
          flexDirection: C,
          flexWrap: u ? "wrap" : "nowrap",
          justifyContent: O,
          alignItems: G,
          alignContent: G,
          ...J,
          ...Yo,
        };
      (Rr.applyWillChange({ willChangeTransform: h }, Xe, !0),
        T &&
          !Wt(Ar(y)) &&
          ((y.width = "100%"), (y.height = "100%"), (y._constraints = { enabled: !0 })));
      let tm = Mr(n),
        { children: nm, props: rm } = wr(y, c),
        ds = y.widthType ?? (y.width === "auto" ? 2 : 0),
        cs = y.heightType ?? (y.height === "auto" ? 2 : 0),
        om = wT(nm, i, ds, cs),
        im = Cr(om, V ?? 1),
        ps = { "data-framer-component-type": "Stack" },
        fs = y.__fromCanvasComponent;
      if ((fs && (ps["data-framer-generated"] = !0), LT(l, O, u))) {
        let ms = kp(O);
        ((ms || i !== "horizontal") && (Xe.columnGap = `${l}px`),
          (ms || i !== "vertical") && (Xe.rowGap = `${l}px`));
      }
      return (
        Xe.width === void 0 && ds === 2 && (Xe.width = "min-content"),
        Xe.height === void 0 && cs === 2 && (Xe.height = "min-content"),
        (0, vp.jsx)(Xd, {
          as: o,
          background: fs ? void 0 : "none",
          ...rm,
          layoutId: tm,
          ref: r,
          ...ps,
          style: Xe,
          className: f,
          layoutScroll: !0,
          children: im,
        })
      );
    });
    return (
      (e.defaultProps = { distribution: "start" }),
      (e.displayName = "Stack"),
      Cp(e, {
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
function Np(e) {
  return typeof e == "string" && e.endsWith("fr");
}
function mo(e) {
  let t = parseFloat(e);
  return v(t) ? t : 0;
}
function wT(e, t, n, r) {
  return yo.default.Children.map(e, (o) => {
    if (!Kn(o) || !_n(o)) return;
    let i = t === "vertical",
      a = {},
      s = !1,
      { style: l, size: u } = o.props,
      { width: c, height: m } = o.props;
    u !== void 0 && (c === void 0 && (c = u), m === void 0 && (m = u));
    let f = c,
      h = m;
    if (
      (Np(c) &&
        ((s = !0),
        (s = !0),
        i
          ? n === 2
            ? ((a.alignSelf = "stretch"), (f = "auto"))
            : (f = `${mo(c) * 100}%`)
          : ((f = 1), (a.flexGrow = mo(c)), (a.flexBasis = 0)),
        (a.width = f)),
      Np(m) &&
        ((s = !0),
        i
          ? ((h = 1), (a.flexGrow = mo(m)), (a.flexBasis = 0))
          : r === 2
            ? ((a.alignSelf = "stretch"), (h = "auto"))
            : (h = `${mo(m) * 100}%`),
        (a.height = h)),
      !s)
    )
      return o;
    let T = { ...l, ...a };
    return yo.default.cloneElement(o, { width: f, height: h, style: T });
  });
}
function kp(e) {
  return e ? !["space-between", "space-around", "space-evenly", "stretch"].includes(e) : !1;
}
function LT(e, t, n) {
  return !(!e || (!n && !kp(t)));
}
function ho(e) {
  switch (e) {
    case "vertical":
      return "column";
    case "horizontal":
      return "row";
    default:
      return e;
  }
}
function Rp(e) {
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
var xo = ["auto", "pixelated"],
  KW = { imageRendering: void 0 },
  UW = { imageRendering: "auto" },
  MT = "imageRendering";
function $W(e) {
  return We(e) && !A(e.htmlContent) ? !1 : MT in e;
}
var AT = new Set(xo);
function ET(e) {
  return p(e) && AT.has(e);
}
function qW(e) {
  return ET(e) ? e : "auto";
}
function Pp(e) {
  switch (e) {
    case "auto":
      return "Smooth";
    case "pixelated":
      return "Sharp";
    default:
      return "Unknown";
  }
}
var go = ["clip", "visible", "hidden", "auto"],
  BT = ["clip", "hidden"],
  FT = ["visible", "auto"],
  ez = { overflow: void 0, overflowX: void 0, overflowY: void 0 },
  Ip = "overflow",
  tz = [Ip, "overflowX", "overflowY"];
function Dp(e) {
  return e ? Ip in e : !1;
}
var OT = new Set(go);
function nz(e) {
  return p(e) ? OT.has(e) : !1;
}
var WT = new Set(BT);
function rz(e) {
  return p(e) && WT.has(e);
}
var zT = new Set(FT);
function oz(e) {
  return p(e) && zT.has(e);
}
function wp(e) {
  return e === "auto" ? "Scroll" : Hn(e);
}
function iz(e) {
  if (!Dp(e)) return !1;
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
function az(e) {
  return Dp(e) ? e.overflow === "auto" || e.overflowX === "auto" || e.overflowY === "auto" : !1;
}
function sz(e, t) {
  return k(t) && !k(e.overflowX) && !A(e.overflowX) && e.overflowX === e.overflowY;
}
var Lp = { visible: "clip", clip: "visible", auto: "hidden", hidden: "auto" };
function lz(e, t, n, r = {}) {
  let o = e.resolveValue(t) || e.resolveValue(n);
  return o ? (r.preferSame ? o : Lp[o]) : "clip";
}
function uz(e, t) {
  return e === t || k(t) ? !0 : (k(e) && (e = "visible"), Lp[e] === t);
}
function Mp(e) {
  let t = {};
  for (let n in e) {
    let r = e[n];
    if (Pe(r))
      if (r.type === "fusednumber")
        S(r.value) ? (t[n] = r.value) : Qc(r) && (t[n] = r.value.single);
      else if (r.type === "object" && g(r.value)) {
        if (!g(r.value)) continue;
        t[n] = Mp(r.value);
      } else
        r.type === "array" && M(r.value)
          ? (t[n] = r.value
              .filter(Pe)
              .map((o) => (o.type === "object" ? (g(o.value) ? Mp(o.value) : void 0) : o.value)))
          : (t[n] = r.value);
  }
  return t;
}
function Ap(e) {
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
      return et;
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
var HT = {
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
function Ep(e) {
  if (e.type === "controlReference") {
    if (e.expectedType !== "enum") return !1;
    let t = ke(e.entityIdentifier);
    return Rt(t) && t.type === "collection";
  }
  return (
    e.type === "boolean" ||
    e.type === "string" ||
    e.type === "number" ||
    e.type === "date" ||
    e.type === "collectionreference" ||
    e.type === "multicollectionreference"
  );
}
function Nz(e) {
  return e.type !== "controlReference"
    ? Ep({ type: e.type })
    : e.expectedType === "segmentedenum"
      ? !1
      : Ep({ type: e.type, expectedType: e.expectedType, entityIdentifier: e.entityIdentifier });
}
function GT(e) {
  return e === "WebPage" || e === "SmartComponent";
}
function jT(e, t) {
  return GT(t) ? Object.hasOwn(HT, e) : !1;
}
function _T(e, t) {
  return jT(e.type, t) ? (e.type !== "controlReference" ? !0 : e.expectedType !== "file") : !1;
}
function Z(e, t) {
  return _T(e, t) && e.optional === !0;
}
function Qt(e) {
  return !Es(e) && e.type !== "divider";
}
function Rz(e) {
  return e.type === "string";
}
function kz(e) {
  return e.type === "richtext";
}
function vz(e) {
  return e.type === "slug";
}
function Pz(e) {
  return e.type === "date";
}
function KT(e) {
  return e.type === "collectionreference";
}
function UT(e) {
  return e.type === "multicollectionreference";
}
function Iz(e) {
  return KT(e) || UT(e);
}
function $T(e) {
  return Qt(e) && dn(e.type);
}
var Dz = $T;
function wz(e) {
  return e?.type === "divider";
}
function qT(e) {
  return e.type === "array";
}
function Lz(e) {
  return e.type === "object";
}
function XT(e) {
  return e.type === "image";
}
function YT(e) {
  return qT(e) && e.itemVariables.length === 1 && e.itemVariables.every(XT);
}
function Aa(e) {
  return YT(e) && e.displayGalleryAsArray !== !0;
}
var JT = {
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
function Fp(e) {
  return Object.hasOwn(JT, e.type);
}
var ZT = {
  boolean: !0,
  date: !0,
  string: !0,
  number: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  controlReference: !0,
};
function Bz(e) {
  return Qt(e) ? Object.hasOwn(ZT, e.type) : !1;
}
var Op = Symbol("localizedOptionTitles");
function In(e, t) {
  e[Op] = t;
}
function Wp(e) {
  return e[Op] ?? null;
}
function Ea(e, t, n) {
  if (e === void 0) return t.push("u");
  if (e === null) return t.push("n");
  let r = typeof e;
  if (r === "string") return t.push(JSON.stringify(e));
  if (r !== "object") return t.push(String(e));
  if (Array.isArray(e)) {
    for (let i = 0; i < e.length; i++) (Ea(e[i], t, n), t.push(","));
    return;
  }
  let o = zc(e) ? e.keys() : Object.keys(e);
  o.sort();
  for (let i of o) {
    let a = e[i];
    (n && ((a = n(i, a, e)), a === void 0)) || (t.push(i), t.push(":"), Ea(a, t, n), t.push(","));
  }
}
function zp(e, t) {
  let n = [];
  return (Ea(e, n, t), n.join(""));
}
var QT = 1;
function jz(e) {
  return Ls("sharedEnum", e, "default").value;
}
function Hp(e) {
  let t = ke(e);
  if (!(!Rt(t) || t.type !== "sharedEnum")) return t.localIdName;
}
function eC(e) {
  let t = {},
    n = e.preventLocalization ? [] : e.cases;
  for (let [r, o] of n.entries())
    for (let [i, a] of Object.entries(o.nameLocalized ?? {})) {
      let s = a?.value;
      typeof s != "string" || s === "" || ((t[i] ??= e.cases.map(() => null)), (t[i][r] = s));
    }
  return {
    options: e.cases.map((r) => r.id),
    optionTitles: e.cases.map((r) => r.name),
    localizedOptionTitles: t,
  };
}
function _z(e) {
  return zp({ version: QT, definition: eC(e) });
}
var Ba = Symbol("fromOtherProject");
function Zz(e) {
  let t = { ...e.properties },
    n = !1;
  for (let [r, o] of Object.entries(t))
    !g(o) || o.type !== "sharedtype" || ((t[r] = { ...o, [Ba]: !0 }), (n = !0));
  return n ? { ...e, properties: t } : e;
}
function Fa(e) {
  return Ba in e && e[Ba] === !0;
}
function Qz(e) {
  return e?.type === "sharedtype" && "kind" in e && e.kind === "enum";
}
function _p(e, t) {
  let n = Hp(t);
  if (!n) return;
  let r = e.get(n);
  return ll(r) ? r : void 0;
}
var Gp = new WeakMap();
function tC(e, t) {
  if (t?.type === "enum") return t;
  if (t?.type !== "sharedtype") return;
  if (t.kind !== "enum") {
    t.kind;
    return;
  }
  if (Fa(t)) return;
  let n = _p(e, t.moduleIdentifier);
  if (!n) return;
  if (n.mutable) return jp(t, n);
  let r = Gp.get(n);
  r || ((r = new WeakMap()), Gp.set(n, r));
  let o = r.get(t);
  return (o || ((o = jp(t, n)), r.set(t, o)), o);
}
function e1(e, t) {
  return t?.type !== "sharedtype" || !e ? t : (tC(e, t) ?? t);
}
function jp(e, t) {
  let n = t.cases.map((o) => o.id),
    r = {
      ...e,
      type: "enum",
      defaultValue: e.defaultValue && n.includes(e.defaultValue) ? e.defaultValue : void 0,
      options: n,
      optionTitles: t.cases.map((o) => o.name),
    };
  return (
    t.preventLocalization ||
      In(
        r,
        t.cases.map((o) => o.nameLocalized)
      ),
    r
  );
}
function t1(e, t) {
  let { kind: n, moduleIdentifier: r, ...o } = t;
  n !== "enum" && void 0;
  let i = _p(e, r);
  return {
    ...o,
    type: "enum",
    cases: i?.cases ?? [],
    ...(i?.preventLocalization && { preventLocalization: !0 }),
  };
}
function Kp(e, t) {
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
var nC = /,(?![^(]*\))/u,
  rC = /\s(?![^(]*\))/u,
  oC = /(?:#|0x)(?:[a-f\d]{3}|[a-f\d]{6})\b|(?:rgb|hsl)a?\([^)]*\)/u,
  Up = (e, t) => {
    let n = e.trim().toLowerCase().split(rC),
      r = n.includes("inset"),
      o = [],
      i = n.find((c) => oC.test(c)) ?? n[n.length - 1];
    for (let c of n) c !== "inset" && c !== i && o.push(fo(c));
    let [a, s, l, u] = o;
    return to({
      type: "box",
      inset: r,
      x: a,
      y: s,
      blur: l,
      spread: u,
      color: i,
      id: `box-shadow-${t}`,
    });
  };
function u1(e, t) {
  let n = Up(e, 0);
  if (
    n.color === "transparent" ||
    n.color === "rgba(0, 0, 0, 0)" ||
    (n.x === 0 && n.y === 0 && n.spread === 0 && n.blur === 0)
  )
    return;
  let r = b(n.color);
  if (!(!r || r.a <= 0)) return { ...n, id: t };
}
function Oa(e) {
  return e
    .split(nC)
    .map(Up)
    .filter((t) => {
      if (
        t.color === "transparent" ||
        t.color === "rgba(0, 0, 0, 0)" ||
        (t.x === 0 && t.y === 0 && t.spread === 0 && t.blur === 0)
      )
        return !1;
      let n = b(t.color);
      return n ? n.a > 0 : !1;
    });
}
function d1(e) {
  let t = e.boxShadow;
  if (!(!t || t === "none")) return { boxShadows: Oa(t) };
}
function x1(e) {
  return Xt(e) || A(e) ? e : [];
}
function g1(e) {
  return p(e)
    ? Oa(e)
    : M(e) && e.every(sd.is)
      ? e.map((t, n) => to({ ...t, id: `box-shadow-${n}` }))
      : [];
}
function $p(e) {
  let { id: t, ...n } = e;
  return n;
}
var iC = "alt";
function Wa(e) {
  return g(e) && iC in e;
}
var qp = "altLocalized";
function C1(e) {
  return g(e) && qp in e && !!e[qp];
}
var aC = "positionX",
  sC = "positionY";
function Xp(e) {
  return g(e) ? aC in e || sC in e : !1;
}
function za(e) {
  return Xp(e) ? p(e.positionX) && p(e.positionY) : !1;
}
var lC = {};
function N1(e) {
  return Xp(e) ? e : lC;
}
function Yp(e) {
  return e.embedId !== void 0 ? e.embedId : /-\d+$/u.test(e.id) ? Hs(e.id) : e.id;
}
function P1(e) {
  let t = new Set();
  return mp(
    e,
    {
      module(n) {
        let r = n.embedId;
        if (r === void 0) return n;
        if (!t.has(r)) return (t.add(r), n);
        let o = Ce();
        return (t.add(o), { ...n, embedId: o });
      },
    },
    { normalize: !1 }
  );
}
var en = 16,
  w1 = { rootFontSize: void 0 },
  Ha = "rootFontSize";
function L1(e) {
  return Ha in e;
}
function Jp(e) {
  return Ha in e && S(e[Ha]);
}
var Zp = "--framer-root-font-size";
function K1(e, t, n, r) {
  if (r) {
    let o = uC(t, r, n);
    if (S(o)) return o;
  }
  if (Dt(e)) return e.getPrimaryVariant().rootFontSize;
  if (Oe(e)) {
    let o = e.layoutTemplateIdentifier;
    return o ? Qp(o, n) : e.getPrimaryVariant().rootFontSize;
  }
  return cC(t.root, n);
}
function uC(e, t, n) {
  let r = ma(e, t);
  if (r) return Cc(r) ? dC(e, n, r) : Jp(r) ? r.rootFontSize : en;
}
function dC(e, t, n) {
  let r = Tc(e, n);
  if (!r) return en;
  let o = ke(r)?.localId;
  if (!o) return en;
  let i = t
    .forType("layoutTemplate")
    .getByLocalId(o)
    .annotations(null, "default")?.framerBreakpoints;
  if (!i || !gc(i)) return en;
  x(dc(n), "Breakpoint node must have size properties");
  let a = Xr(i, n.width);
  return a && S(i[a]?.rootFontSize) ? i[a].rootFontSize : en;
}
function cC(e, t) {
  if (e.layoutTemplateIdentifier) return Qp(e.layoutTemplateIdentifier, t);
  if (!e.homePageNodeId) return;
  let n = t.forType("screen").getByStableName(e.homePageNodeId).annotations(null, "default");
  return ef(n);
}
function Qp(e, t) {
  let n = ke(e),
    r = t.forType("layoutTemplate").getByLocalId(n.localId).annotations(null, n.exportSpecifier);
  return ef(r);
}
function ef(e) {
  if (!e) return;
  let t = e.framerRootFontSize;
  if (S(t)) return t;
}
var tf = /var\(--variable-reference-(?<variableId>[^)-]*)(?:-(?<providerId>[^)]*))?/;
function Y1(e) {
  let t = new RegExp(tf, "g"),
    n = e.matchAll(t),
    r = [];
  for (let o of n) {
    if (!o.groups) continue;
    let { variableId: i, providerId: a } = o.groups,
      s = hi(i, a);
    r.push(s);
  }
  return r;
}
function J1(e) {
  return p(e) && e.startsWith("--");
}
function Z1(e) {
  let t = tf.exec(e);
  if (t?.groups) {
    let { variableId: n, providerId: r } = t.groups;
    return hi(n, r);
  }
}
function pC(e) {
  let t = e.providerId ? `-${e.providerId}` : "";
  return `--variable-reference-${e.id}${t}`;
}
function nf(e) {
  return `var(${pC(e)})`;
}
function Q1(e) {
  return `calc(var(${Zp}, 1rem) * ${e})`;
}
var fC = /calc\(var\(--framer-root-font-size,\s*1rem\)\s*\*\s*(?<remValue>\d+(?:\.\d+)?)\)/u;
function eH(e) {
  let t = fC.exec(e);
  if (t?.groups) {
    let { remValue: n } = t.groups,
      r = parseFloat(n);
    return S(r) ? [r, "rem"] : void 0;
  }
}
var mC = new Set(["img", "br"]);
function rf(e, t) {
  return Y("ul", { dir: To(e.textDirection) }, ...e.childNodes.map(t));
}
function of(e, t) {
  return Y(
    "ol",
    {
      dir: To(e.textDirection),
      start: e.start !== 1 ? e.start : void 0,
      style: e.listStyleType !== "decimal" ? { "--list-style-type": e.listStyleType } : void 0,
    },
    ...e.childNodes.map(t)
  );
}
function af(e, t) {
  return Y("blockquote", {}, ...e.childNodes.map(t));
}
function sf(e, t) {
  return Y(
    "figure",
    { class: "framer-table-wrapper" },
    Y("table", {}, Y("tbody", {}, ...e.childNodes.map((n) => yC(n, t))))
  );
}
function yC(e, t) {
  return Y("tr", {}, ...e.childNodes.map((n) => hC(n, t)));
}
function hC(e, t) {
  return Y(
    e.cellType === "header" ? "th" : "td",
    { colspan: e.columnSpan, rowspan: e.rowSpan },
    ...e.childNodes.map(t)
  );
}
function lf(e) {
  return e.type === "lineBreak" ? Y("br", {}) : xC(e);
}
function xC(e) {
  let t = bC(e.text);
  return (
    e.bold && (t = Y("strong", {}, t)),
    e.italic && (t = Y("em", {}, t)),
    e.inlineCode && (t = Y("code", {}, t)),
    e.link && (t = Y("a", bo(e.link), t)),
    t
  );
}
function bo(e) {
  if (!e) return {};
  let {
    link: t,
    id: n,
    openInNewTab: r,
    smoothScroll: o,
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
    "data-framer-open-in-new-tab": r === !0 ? !0 : Dn(r),
    "data-framer-smooth-scroll": o === !0 ? !0 : Dn(o),
    "data-framer-click-tracking-id": typeof i == "string" ? i : Dn(i),
    rel: Array.isArray(a) && a.length > 0 ? a.join(" ") : void 0,
    "data-framer-rel": Dn(a),
    "data-framer-preserve-params": typeof s == "boolean" ? String(s) : Dn(s),
  };
}
function To(e) {
  return e === "inherit" ? "auto" : e;
}
function Y(e, t, ...n) {
  let r = "";
  for (let o in t) {
    let i = t[o];
    if (!(i === void 0 || i === !1)) {
      if (typeof i == "object") {
        o === "style" && (r += ` style="${gC(i)}"`);
        continue;
      }
      if (i === !0) {
        r += ` ${o}=""`;
        continue;
      }
      r += ` ${o}="${uf(String(i))}"`;
    }
  }
  return mC.has(e) ? `<${e}${r}>` : `<${e}${r}>${n.join("")}</${e}>`;
}
function gC(e) {
  let t = "";
  for (let n in e) {
    let r = e[n];
    r !== void 0 && (t && (t += " "), (t += `${n}: ${uf(r)};`));
  }
  return t;
}
function bC(e) {
  return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function uf(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function Dn(e) {
  if (D(e)) return nf(e);
}
function TC(e) {
  return ao(e).childNodes.map(Co).join("");
}
function cf(e) {
  return typeof e == "string" ? e : TC(e);
}
function Co(e) {
  switch (e.type) {
    case "textBlock":
      return CC(e);
    case "bulletedList":
      return rf(e, df);
    case "numberedList":
      return of(e, df);
    case "blockquote":
      return af(e, Co);
    case "media":
      return VC(e);
    case "module":
      return SC(e);
    case "table":
      return sf(e, Co);
    default:
      W(e);
  }
}
function CC(e) {
  return Y(e.tag, { dir: To(e.textDirection) }, ...e.childNodes.map(lf));
}
function df(e) {
  let t = e.childNodes[0],
    n = t?.type === "textBlock" ? t.tag : "p";
  return Y("li", { "data-preset-tag": n }, ...e.childNodes.map(Co));
}
function VC(e) {
  return e.mediaType === "video"
    ? Y("video", { class: "framer-image", src: e.src, ...bo(e.link) })
    : Y("img", {
        alt: e.alt,
        "data-framer-width": e.pixelWidth,
        "data-framer-height": e.pixelHeight,
        ...bo(e.link),
        src: e.src,
        class: "framer-image",
      });
}
function SC(e) {
  return Y("framer-module", {
    "data-module-identifier": e.identifier,
    "data-module-embed-id": Yp(e),
    "data-module-props": JSON.stringify(e.props),
    "data-module-width": e.width,
    "data-module-alignment": e.alignment,
  });
}
var pf = Symbol("dataIdentifier");
function wn(e, t) {
  e[pf] = t;
}
function dH(e) {
  return e[pf] ?? null;
}
var ff = ["page", "step", "location", "date", "time", "true", "false"],
  pH = { ariaCurrent: void 0 },
  fH = { ariaCurrent: "page" },
  NC = "ariaCurrent";
function mH(e) {
  return NC in e;
}
var mf = ["menu", "listbox", "tree", "grid", "dialog", "true", "false"],
  hH = { ariaHaspopup: void 0 },
  xH = { ariaHaspopup: "menu" },
  RC = "ariaHaspopup";
function gH(e) {
  return RC in e;
}
var yf = ["off", "polite", "assertive"],
  TH = { ariaLive: void 0 },
  CH = { ariaLive: "polite" },
  kC = "ariaLive";
function VH(e) {
  return kC in e;
}
var hf = [
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
  NH = { ariaRole: void 0 },
  RH = { ariaRole: "button" };
function kH(e) {
  return "ariaRole" in e;
}
var Vo = [
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
  IH = "multiply",
  DH = { blendingMode: void 0 },
  vC = "blendingMode";
function wH(e) {
  return vC in e;
}
var PC = new Set(Vo);
function LH(e) {
  return p(e) && PC.has(e);
}
var Ga = ["contain", "none"],
  EH = { overscrollBehavior: void 0 },
  IC = "overscrollBehavior";
function BH(e) {
  return e ? IC in e : !1;
}
function FH(e) {
  return p(e) && (e === "contain" || e === "none");
}
var OH = { overscrollBehavior: "contain" };
var So = ["none", "auto"],
  HH = { pointerEvents: void 0 },
  GH = { pointerEvents: "none" },
  DC = "pointerEvents";
function jH(e) {
  return DC in e;
}
var xf = new Set(So);
function _H(e) {
  return p(e.pointerEvents) && xf.has(e.pointerEvents);
}
function KH(e) {
  return p(e) && xf.has(e);
}
var No = ["none", "auto"],
  qH = { userSelect: void 0 },
  XH = { userSelect: "none" },
  wC = "userSelect";
function YH(e) {
  return wC in e;
}
var gf = new Set(No);
function JH(e) {
  return p(e.userSelect) && gf.has(e.userSelect);
}
function ZH(e) {
  return p(e) && gf.has(e);
}
var ja = ["text", "textarea", "email", "number", "tel", "url", "date", "time"],
  bf = {
    text: "Text",
    textarea: "Text area",
    number: "Number",
    email: "Email",
    tel: "Phone number",
    url: "URL",
    date: "Date",
    time: "Time",
  };
function LC(e) {
  return p(e) && e in bf;
}
function Tf(e) {
  return LC(e) ? bf[e] : "Text";
}
function nG(e) {
  return A(e) || e === "date" || e === "time";
}
function rG(e) {
  return A(e) || e === "text";
}
var MC = "formTextInputType";
function AC(e) {
  return MC in e;
}
var oG = {
  formTextInputType: void 0,
  formTextAreaResizable: void 0,
  formTextInputMinNumber: void 0,
  formTextInputMaxNumber: void 0,
  formInputMaxLength: void 0,
};
function iG(e) {
  return AC(e) && e.formTextInputType === "textarea";
}
var Cf = {
  stackDirection: {
    type: "enum",
    defaultValue: ho(Yd),
    options: Br.map(ho),
    optionTitles: Br.map(Ie),
    displaySegmentedControl: !0,
    optionIcons: ["direction-horizontal", "direction-vertical"],
  },
  stackDistribution: {
    type: "enum",
    defaultValue: Or(Jd),
    options: Fr.map(Or),
    optionTitles: Fr.map(Ie),
  },
  stackAlignment: {
    type: "enum",
    defaultValue: Or(Zd),
    options: Wr.map(oc),
    optionTitles: Wr.map(Ie),
  },
  gridItemColumnSpan: { type: "enum", defaultValue: 1, options: fa, optionTitles: uc },
  gridItemRowSpan: { type: "enum", defaultValue: 1, options: zr, optionTitles: lc },
  userSelect: {
    type: "enum",
    defaultValue: "auto",
    options: No.map((e) => e),
    optionTitles: No.map(Ie),
  },
  overscrollBehavior: {
    type: "enum",
    defaultValue: "none",
    options: Ga.map((e) => e),
    optionTitles: Ga.map(Ie),
  },
  overflow: {
    type: "enum",
    defaultValue: "auto",
    options: go.map((e) => e),
    optionTitles: go.map(wp),
  },
  pointerEvents: {
    type: "enum",
    defaultValue: "auto",
    options: So.map((e) => e),
    optionTitles: So.map(Ie),
  },
  blendingMode: {
    type: "enum",
    defaultValue: "multiply",
    options: Vo.map((e) => e),
    optionTitles: Vo.map(Ie),
  },
  formTextInputType: {
    type: "enum",
    defaultValue: "text",
    options: [...ja],
    optionTitles: ja.map(Tf),
  },
  imageRendering: {
    type: "enum",
    defaultValue: "auto",
    displaySegmentedControl: !0,
    options: [...xo],
    optionTitles: xo.map(Pp),
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
  ariaCurrent: { type: "enum", defaultValue: "page", options: [...ff] },
  ariaHaspopup: { type: "enum", defaultValue: "menu", options: [...mf] },
  ariaHidden: { type: "boolean", defaultValue: !1 },
  ariaDisabled: { type: "boolean", defaultValue: !1 },
  ariaRoleDescription: { type: "string", defaultValue: "" },
  ariaRole: { type: "enum", defaultValue: "button", options: [...hf] },
  ariaLive: { type: "enum", defaultValue: "polite", options: [...yf] },
  ariaDescription: { type: "string", defaultValue: "" },
  tickerEffectDirectionModifier: {
    type: "enum",
    defaultValue: "default",
    displaySegmentedControl: !0,
    options: pa,
    optionTitles: pa.map(ic),
  },
};
function RG(e) {
  return Object.hasOwn(Cf, e);
}
function Vf(e) {
  let t = Cf[e];
  return (x(t, () => `unknown node property control: ${e}`), t);
}
var vG = "framer/nodePropertyDefinitions",
  EC = [
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
  BC = new Set(EC);
function Sf(e) {
  return typeof e == "string" && BC.has(e);
}
var FC = "src";
function Ro(e) {
  return g(e) && p(e[FC]);
}
function ko(e, t) {
  switch (e.valueType) {
    case "number":
      return typeof t == "number" && Number.isFinite(t);
    case "boolean":
      return typeof t == "boolean";
    default:
      return !1;
  }
}
function MG(e, t) {
  if (ko(e, t)) return t;
  if (ko(e, e.defaultValue)) return e.defaultValue;
  switch (e.valueType) {
    case "number":
      return 0;
    case "boolean":
      return !1;
    default:
      return 0;
  }
}
var Fo = L(vf(), 1);
function ej(e, t) {
  if (e.type === "motionvalue") return D(t) || ko(e, t);
  if (!Ua(e.type, t)) return !1;
  switch (e.type) {
    case "enum":
    case "segmentedenum":
      return D(t) || (me(t) && t.outputType === "enum") ? !0 : e.options.some((n) => n === t);
  }
  return !0;
}
function Ua(e, t) {
  if (D(t)) return !0;
  if (me(t)) return t.outputType === e;
  switch (e) {
    case "motionvalue":
      return ee(t) || (S(t) && Number.isFinite(t));
    case "boolean":
      return ee(t);
    case "number":
      return S(t);
    case "string":
    case "dimension":
    case "color":
    case "componentinstance":
      return p(t);
    case "slot":
      return p(t) || M(t);
    case "richtext":
      return Jt(t) || (0, Fo.isElement)(t);
    case "responsiveimage":
      return Ro(t);
    case "file":
    case "image":
      return p(t) || k(t);
    case "enum":
    case "segmentedenum":
      return !!(t === void 0 || t === null || ee(t) || S(t) || p(t));
    case "fusednumber":
      return kn(t);
    case "eventhandler":
      return M(t) && t.every(Er);
    case "transition":
      return nr(t);
    case "border":
      return Rn(t);
    case "link":
      return ht(Yr(t));
    case "linkrelvalues":
      return M(t) && t.every(Sa);
    case "date":
      return t === void 0 ? !0 : p(t);
    case "object":
      return g(t);
    case "cursor":
      return p(t);
    case "boxshadow":
      return Xt(t);
    case "gap":
    case "padding":
    case "borderradius":
      return p(t);
    case "collectionreference":
    case "sharedtype":
      return p(t);
    case "multicollectionreference":
      return M(t) && t.every(p);
    case "trackingid":
      return p(t);
    case "array":
      return M(t);
    case "vectorsetitem":
      return (p(t) && Re(t)) || (0, Fo.isValidElementType)(t);
    case "changehandler":
      return !1;
    case "location":
      return oo(t);
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
function fe(e, t) {
  return Ua(e, t) && !A(t) ? t : Ap(e);
}
function w(e) {
  return e.name || "Unknown";
}
function dj(e, t) {
  switch (e.type) {
    case "boolean":
      return $a(e, t);
    case "number":
      return qa(e, t);
    case "color":
      return Xa(e);
    case "string":
      return Ya(e, t);
    case "image":
      return Ja(e);
    case "link":
      return Za(e);
    case "date":
      return Qa(e, t);
    default:
      return W(e);
  }
}
function $a(e, t) {
  let { enabledTitle: n, disabledTitle: r } = e.options ?? {};
  return {
    type: e.type,
    title: w(e),
    enabledTitle: n,
    disabledTitle: r,
    description: e.description,
    optional: Z(e, t) ? !0 : void 0,
  };
}
function qa(e, t) {
  let { min: n, max: r, step: o, unit: i, displayStepper: a } = e.options ?? {};
  return {
    type: e.type,
    title: w(e),
    min: n,
    max: r,
    step: o,
    unit: i,
    displayStepper: a,
    description: e.description,
    optional: Z(e, t) ? !0 : void 0,
  };
}
function Xa(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function Ya(e, t) {
  let { placeholder: n, displayTextArea: r } = e.options ?? {};
  return {
    type: e.type,
    title: w(e),
    placeholder: n,
    displayTextArea: r,
    description: e.description,
    preventLocalization: e.preventLocalization,
    optional: Z(e, t) ? !0 : void 0,
  };
}
function Ja(e) {
  return { type: "responsiveimage", title: w(e), description: e.description };
}
function Za(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function Qa(e, t) {
  let n = {
    type: e.type,
    title: w(e),
    description: e.description,
    optional: Z(e, t) ? !0 : void 0,
  };
  return (e.options?.displayTime && (n.displayTime = !0), n);
}
var Pf = ["string", "date", "number", "enum", "sharedtype", "boolean", "slug"];
function zC(e) {
  return e ? Pf.includes(e.type) : !1;
}
function HC(e) {
  return Pf.includes(e);
}
function _j(e) {
  return e === "enum" || e === "file";
}
function Kj(e) {
  return e.type === "controlReference"
    ? e.expectedType === "segmentedenum"
      ? "enum"
      : e.expectedType
    : e.type;
}
function Uj(e) {
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
var GC = {
  responsiveimage: "image",
  fusednumber: null,
  slot: null,
  changehandler: null,
  font: null,
  pagescope: null,
};
function $j(e) {
  return or(e) ? e : GC[e];
}
var jC = ["eventhandler"];
function qj(e) {
  return jC.includes(e.type);
}
function Xj(e) {
  return Fp(e) ? (e.required ?? !1) : !1;
}
var _C = { string: !0, richtext: !0, enum: !0 };
function KC(e) {
  return Qt(e) ? e.type in _C : !1;
}
function UC(e) {
  return KC(e) && e.preventLocalization === !0;
}
var $C = {
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
function Df(e) {
  return Object.hasOwn($C, e.type);
}
function Yj(e) {
  return e?.type === "array" && e.control.type === "object";
}
function Jj(e) {
  return e.type === "array";
}
function qC(e, t, n, r) {
  let o = {},
    i = Aa(n);
  for (let s of n.itemVariables) {
    if (!Qt(s)) continue;
    let l = es(e, t, s, r);
    l &&
      (x(Df(l), "Expected array item property control to be usable in an object"),
      i && l.type === "responsiveimage" ? (o[s.id] = JC(l)) : (o[s.id] = l));
  }
  let a = n.initialValue?.map((s) => {
    let l = {};
    if (!s || s.type !== "object" || !g(s.value)) return l;
    for (let u in s.value) {
      let c = s.value[u];
      if (!c) continue;
      let m = wf(c);
      k(m) || (l[u] = m);
    }
    return l;
  });
  return {
    type: n.type,
    control: { type: "object", controls: o },
    title: w(n),
    description: n.description,
    minCount: n.minCount,
    maxCount: n.maxCount,
    displayGalleryAsArray: n.displayGalleryAsArray === !0 ? !0 : void 0,
    __vekterDefault: a,
  };
}
function XC(e, t, n, r) {
  let o = {};
  for (let a of n.fieldVariables) {
    let s = es(e, t, a, r);
    s && (x(Df(s), "Expected object field control to be usable in an object"), (o[a.id] = s));
  }
  let i = Z(n, r);
  return {
    type: n.type,
    controls: o,
    title: w(n),
    description: n.description,
    optional: i ? !0 : void 0,
    __vekterDefault: i ? void 0 : YC(n),
  };
}
function YC(e) {
  let t = {};
  for (let n of e.fieldVariables) {
    let r = wf(e.initialValue[n.id]);
    k(r) || (t[n.id] = r);
  }
  return t;
}
function JC(e) {
  let { __defaultAssetReference: t, __vekterDefault: n, ...r } = e;
  return r;
}
function wf(e) {
  if (!Pe(e)) return;
  let t = e.type;
  if (dn(t))
    switch (t) {
      case "image": {
        if (!p(e.value)) return;
        let n, r, o;
        return (
          Wa(e) && (n = e.alt),
          za(e) && ((r = e.positionX), (o = e.positionY)),
          { assetReference: e.value, alt: n, positionX: r, positionY: o }
        );
      }
      case "boolean":
        return ee(e.value) ? e.value : void 0;
      case "number":
        return S(e.value) ? e.value : void 0;
      case "string":
      case "color":
      case "date":
      case "file":
        return p(e.value) ? e.value : void 0;
      case "richtext":
        return Jt(e.value) ? e.value : void 0;
      case "link":
        return ht(e.value) ? e.value : void 0;
      case "vectorsetitem":
        return p(e.value) && Re(e.value) ? e.value : void 0;
      default:
        W(t);
    }
}
function Zj(e, t, n) {
  if (!Aa(e)) return ZC(t, n);
}
function ZC(e, t) {
  if (!Z(e, t)) return QC(e);
}
function QC(e) {
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
      return { type: "link", value: Yr(e.initialValue) };
    case "vectorsetitem":
      return { type: "vectorsetitem", value: e.initialValue.identifier };
    default:
      W(e);
  }
}
function eV(e, t) {
  let n = Z(e, t);
  return { ...$a(e, t), defaultValue: n ? void 0 : fe(e.type, e.initialValue) };
}
function xt(e, t) {
  let n = Z(e, t);
  return { ...qa(e, t), defaultValue: n ? void 0 : fe(e.type, e.initialValue) };
}
function tV(e) {
  let t = Ke(e.initialValue) ? e.initialValue : Vr.toFormatString(e.initialValue);
  return { ...Xa(e), defaultValue: fe(e.type, t) };
}
function nV(e, t) {
  let { min: n, max: r, step: o, units: i, literals: a } = e.options ?? {},
    s = Z(e, t);
  return {
    type: e.type,
    title: w(e),
    defaultValue: s ? void 0 : fe(e.type, e.initialValue),
    min: n,
    max: r,
    step: o,
    units: i,
    literals: a,
    description: e.description,
    optional: s ? !0 : void 0,
  };
}
function rV(e, t) {
  let n = Z(e, t);
  return {
    ...Ya(e, t),
    defaultValue: n ? void 0 : fe(e.type, e.initialValue),
    maxLength: e.options?.maxLength,
  };
}
function oV(e) {
  let { placeholder: t, maxLength: n } = e.options ?? {};
  return {
    type: e.type,
    title: w(e),
    defaultValue: cf(fe(e.type, e.initialValue)),
    placeholder: t,
    maxLength: n,
    description: e.description,
    preventLocalization: e.preventLocalization,
  };
}
function iV(e) {
  let t = Ja(e);
  if (
    (p(e.initialValue) && (t.__defaultAssetReference = e.initialValue),
    Pe(e.initialValue) && p(e.initialValue.value))
  ) {
    let n = e.initialValue.value;
    t.__defaultAssetReference = n;
    let r = { assetReference: n };
    ((t.__vekterDefault = r),
      Wa(e.initialValue) && p(e.initialValue.alt) && (r.alt = e.initialValue.alt),
      za(e.initialValue) &&
        ((r.positionX = e.initialValue.positionX), (r.positionY = e.initialValue.positionY)));
  }
  return t;
}
function aV(e) {
  let t = e.allowedFileTypes.map((o) => o.extension),
    n = new Set(t),
    r = Array.from(n).filter(Boolean);
  return {
    type: "file",
    title: w(e),
    allowedFileTypes: r,
    __defaultAssetReference: fe(e.type, e.initialValue),
    description: e.description,
  };
}
function sV(e, t, n, r) {
  let o = dV(e, t, n, r);
  return o ? { type: n.type, title: w(n), payload: o } : { type: n.type, title: w(n) };
}
var lV = {
  boolean: !0,
  number: !0,
  string: !0,
  color: !0,
  date: !0,
  link: !0,
  image: !0,
  responsiveimage: !0,
};
function uV(e) {
  return Object.hasOwn(lV, e.type);
}
function dV(e, t, n, r) {
  if (!n.payload) return;
  let o = {};
  for (let i of n.payload) {
    let a = es(e, t, i, r);
    a && uV(a) && (o[i.id] = a);
  }
  return Du(o) ? void 0 : o;
}
function cV(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function pV(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function fV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function mV(e) {
  let t = fe(e.type, e.initialValue);
  return {
    type: e.type,
    title: w(e),
    defaultValue: t ? xl(t) : void 0,
    description: e.description,
  };
}
function yV(e) {
  return { type: e.type, title: w(e), defaultValue: e.initialValue, description: e.description };
}
function hV(e) {
  let t = fe(e.type, e.initialValue),
    n = t ? Xc(t) : void 0;
  return { type: e.type, title: w(e), description: e.description, defaultValue: n };
}
function xV(e) {
  return {
    type: e.type,
    title: w(e),
    defaultValue: e.initialValue.map($p),
    description: e.description,
  };
}
function gV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function bV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function TV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function CV(e, t) {
  let n = Z(e, t);
  return {
    type: e.type,
    title: w(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: n ? void 0 : e.initialValue,
    optional: n ? !0 : void 0,
  };
}
function VV(e, t) {
  let n = Z(e, t);
  return {
    type: e.type,
    title: w(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: n ? void 0 : e.initialValue,
    optional: n ? !0 : void 0,
  };
}
function SV(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function NV(e) {
  return {
    type: e.type,
    title: w(e),
    description: e.description,
    setModuleId: e.setModuleId,
    defaultValue: e.initialValue,
  };
}
function RV(e) {
  return Za(e);
}
function kV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function vV(e, t) {
  let n = Z(e, t);
  return { ...Qa(e, t), defaultValue: n ? void 0 : fe(e.type, e.initialValue) };
}
function PV(e, t) {
  let n = Z(e, t),
    r,
    o = [],
    i = [],
    a = [];
  e.cases.forEach((l) => {
    (o.push(l.id),
      i.push(l.name),
      a.push(l.nameLocalized),
      !n && e.initialValue === l.id && (r = l.id));
  });
  let s = {
    type: e.type,
    title: w(e),
    defaultValue: r,
    options: o,
    optionTitles: i,
    description: e.description,
    optional: n ? !0 : void 0,
  };
  return (UC(e) || In(s, a), s);
}
function If(e, t) {
  switch (e) {
    case "enum":
    case "sharedtype":
      return t === "enum" || t === "segmentedenum";
    default:
      return e === t;
  }
}
function IV(e, t) {
  let n = ke(t);
  if (ws(n)) {
    let r = e.getNode(n.moduleId);
    if (r) return r.codeComponentIdentifier;
  }
  return t;
}
function DV(e, t, n) {
  if (n.type === "nodePropertyControlReference") {
    if (!Sf(n.controlKey)) return null;
    let a = Vf(n.controlKey);
    return (
      x(
        a && If(a.type, n.expectedType),
        () => `incompatible node property control: ${n.controlKey} ${n.expectedType}`
      ),
      a
    );
  }
  let r = IV(e, n.entityIdentifier),
    o = t.componentForIdentifier(r);
  if (!o?.properties || (o.type !== "component" && o.type !== "data")) return null;
  let i = o.properties[n.controlKey];
  return !i || !If(i.type, n.expectedType) ? null : i;
}
function wV(e, t) {
  let n = Z(e, t);
  return {
    type: e.type,
    kind: e.kind,
    moduleIdentifier: e.moduleIdentifier,
    title: w(e),
    description: e.description,
    defaultValue: n ? void 0 : e.initialValue,
    optional: n ? !0 : void 0,
  };
}
function LV(e, t, n, r) {
  let o = DV(e, t, n);
  if (!o) return null;
  let i = n.type === "controlReference" && Z(n, r);
  switch (n.expectedType) {
    case "enum":
    case "segmentedenum": {
      if (o.type === "sharedtype") {
        if (Fa(o)) return null;
        let s = {
          type: "sharedtype",
          kind: o.kind,
          moduleIdentifier: o.moduleIdentifier,
          title: w(n),
          defaultValue: i || !p(n.initialValue) ? void 0 : n.initialValue,
          description: n.description,
          optional: i ? !0 : void 0,
        };
        return (
          n.type === "controlReference" &&
            wn(s, { dataIdentifier: n.entityIdentifier, enumFieldKey: n.controlKey }),
          s
        );
      }
      if (o.type !== "enum") return null;
      let a = {
        type: "enum",
        title: w(n),
        options: o.options,
        optionTitles: o.optionTitles,
        displaySegmentedControl: o.displaySegmentedControl,
        defaultValue: i ? void 0 : fe(n.expectedType, n.initialValue),
        optionIcons: o.optionIcons,
        description: n.description,
        optional: i ? !0 : void 0,
      };
      if (n.type === "controlReference") {
        let s = MV(e, t, n, o.options);
        s && In(a, s);
      }
      return a;
    }
    case "file":
      return o.type !== "file"
        ? null
        : {
            type: "file",
            title: w(n),
            allowedFileTypes: o.allowedFileTypes,
            description: n.description,
            __defaultAssetReference: p(n.initialValue) ? n.initialValue : void 0,
          };
    default:
      throw Error("Unsupported control reference type");
  }
}
function MV(e, t, n, r) {
  if (!Re(n.entityIdentifier)) return null;
  let i = Qu(e, n.entityIdentifier)?.getPropertyControls(e, t)[n.controlKey];
  if (i?.type !== "enum") return null;
  let a = Wp(i);
  return a ? r.map((s) => a[i.options.indexOf(s)]) : null;
}
function AV(e, t) {
  return {
    type: "string",
    title: w(t),
    description: t.description,
    preventLocalization: e.root.translatePagePaths === "no",
  };
}
var EV = { string: !0, richtext: !0 };
function Qj(e) {
  return e.type in EV;
}
function es(e, t, n, r) {
  switch (n.type) {
    case "array":
      return qC(e, t, n, r);
    case "object":
      return XC(e, t, n, r);
    case "boolean":
      return eV(n, r);
    case "number":
      return xt(n, r);
    case "motionvalue":
      return Kp(n, w(n));
    case "dimension":
      return nV(n, r);
    case "color":
      return tV(n);
    case "string":
      return rV(n, r);
    case "richtext":
      return oV(n);
    case "image":
      return iV(n);
    case "eventhandler":
      return sV(e, t, n, r);
    case "link":
      return RV(n);
    case "linkrelvalues":
      return kV(n);
    case "date":
      return vV(n, r);
    case "enum":
      return PV(n, r);
    case "file":
      return aV(n);
    case "scrollsectionref":
      return cV(n);
    case "customcursor":
      return pV(n);
    case "cursor":
      return fV(n);
    case "transition":
      return mV(n);
    case "border":
      return hV(n);
    case "location":
      return yV(n);
    case "boxshadow":
      return xV(n);
    case "gap":
      return gV(n);
    case "padding":
      return bV(n);
    case "borderradius":
      return TV(n);
    case "collectionreference":
      return CV(n, r);
    case "multicollectionreference":
      return VV(n, r);
    case "trackingid":
      return SV(n);
    case "vectorsetitem":
      return NV(n);
    case "sharedtype":
      return wV(n, r);
    case "nodePropertyControlReference":
    case "controlReference":
      return LV(e, t, n, r);
    case "slug":
      return AV(e, n);
    default:
      W(n);
  }
}
function e_(e) {
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
function t_(e) {
  return e.fallbackValue === "associatedVariable" && !!e.associatedStringVariable;
}
function n_(e) {
  return e ? It(e) || Dt(e) || ol(e) || Oe(e) : !1;
}
var K = class extends Map {};
var Lf = "carousel_source_identifier",
  Oo = "carousel_provider_id",
  _ = {
    activeItemIndex: "carousel_active_item_index",
    totalItems: "carousel_total_items",
    hasNext: "carousel_has_next",
    hasPrevious: "carousel_has_previous",
    dots: "carousel_dots",
  },
  Wo = {
    id: _.activeItemIndex,
    name: "Active Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  zo = {
    id: _.totalItems,
    name: "Total Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  Ln = { id: _.hasNext, name: "Has Next", type: "boolean", initialValue: !1 },
  Mn = { id: _.hasPrevious, name: "Has Previous", type: "boolean", initialValue: !1 },
  Ho = { id: _.dots, name: "Pagination", type: "array", initialValue: [], itemVariables: [] },
  ts = {
    [_.activeItemIndex]: Wo,
    [_.totalItems]: zo,
    [_.hasNext]: Ln,
    [_.hasPrevious]: Mn,
    [_.dots]: Ho,
  };
function s_(e) {
  if (e in ts) return ts[e];
}
function l_(e) {
  return e in ts;
}
var Mf = L(am(), 1),
  gt = "previousItemId";
function f_(e) {
  return Go(gt, "Previous", e.instanceIdentifier);
}
function m_({ name: e, dataIdentifier: t }) {
  return [
    {
      id: "id",
      name: e ? (0, Mf.singular)(e) : "Unknown",
      type: "collectionreference",
      dataIdentifier: t,
      initialValue: void 0,
      exposeInProps: !0,
    },
    OV(),
    zV(),
    Go(gt, "Previous", t),
    Go(bt, "Next", t),
  ];
}
function Go(e, t, n) {
  return {
    type: "collectionreference",
    name: t,
    id: e,
    dataIdentifier: n,
    initialValue: void 0,
    exposeInProps: !0,
  };
}
var bt = "nextItemId";
function y_(e) {
  return Go(bt, "Next", e.instanceIdentifier);
}
function h_(e) {
  return e === gt || e === bt;
}
var FV = "createdAt";
function OV() {
  return { type: "date", name: "Created", id: FV, initialValue: void 0, exposeInProps: !0 };
}
var WV = "updatedAt";
function zV() {
  return { type: "date", name: "Updated", id: WV, initialValue: void 0, exposeInProps: !0 };
}
var g_ = { hookIdentifier: void 0 },
  HV = "hookIdentifier";
function GV(e) {
  return !!(e && HV in e);
}
function An(e) {
  return GV(e) && e.hookIdentifier !== void 0;
}
var Tt = ".";
function v_(e, t, n) {
  return e === gt || e === bt ? n.length === 0 : !n.includes(t);
}
function jV(e, t) {
  return e === t || _V(e, t);
}
function _V(e, t) {
  return e.endsWith(t) && e[e.length - t.length - 1] === Tt;
}
function Af(e, t) {
  return e.startsWith(t) && e[t.length] === Tt;
}
function P_(e) {
  return Af(e, gt) || Af(e, bt);
}
function tn(e) {
  return e.includes(Tt);
}
function I_(e) {
  return tn(e.id);
}
function jo(e, t) {
  return e ? e + Tt + t : t;
}
function D_(e) {
  let t = e.lastIndexOf(Tt);
  if (!(t < 0)) return e.slice(0, t);
}
function w_(e, t, n) {
  let r = jo(e, t);
  return Ll(r, n);
}
function KV(e) {
  return e === "id";
}
function L_(e) {
  return jV(e, "id");
}
function M_(e) {
  let t = Object.entries(e.properties);
  for (let [n, r] of t)
    if (!KV(n) && (r?.type === "collectionreference" || r?.type === "multicollectionreference"))
      return !0;
  return !1;
}
function UV(e) {
  return e.split(Tt);
}
function $V(e) {
  return e.join(Tt);
}
function A_(e) {
  if (gu(e) && D(e.fillImage) && tn(e.fillImage.id)) return e.fillImage;
  if (We(e)) {
    if (Fl(e.textContent) && tn(e.textContent.startValue.id)) return e.textContent.startValue;
    if (D(e.htmlContent) && tn(e.htmlContent.id)) return e.htmlContent;
    if (D(e.textContent) && tn(e.textContent.id)) return e.textContent;
  }
}
function E_(e, t, n, r, o) {
  if (!tn(n)) return { collectionItemNode: r, collectionNode: o, variableId: n };
  let i = Ef(e, t, n, r, o);
  if (i.length === 0) return;
  let a;
  i.length === 1 ? (a = i[0]) : i.length > 1 && (a = i[i.length - 2]);
  let { collectionItemNode: s, variableId: l } = a ?? {};
  if (!s || !l) return;
  let u = e.getNodeWithTrait(s.parentid, qn);
  if (u) return { collectionItemNode: s, collectionNode: u, variableId: l };
}
function Ef(e, t, n, r, o) {
  let i = UV(n),
    a = i[0] === bt,
    s = i[0] === gt;
  if (a || s) {
    let c = a ? 1 : -1,
      m = o.getSortedChildren("public-only", "group-drafts"),
      f = m.findIndex((T) => T.id === r.id);
    if (f === -1) return [];
    let h = m[f + c];
    return h ? Ef(e, t, $V(i.slice(1)), h, o) : [];
  }
  let l = [{ collectionItemNode: r, variableId: i[0] }],
    u = r;
  for (let c = 0; c < i.length; c++) {
    let m = i[c];
    if (!m) break;
    let f = u.getControlProp(m);
    if (f?.type !== "collectionreference") break;
    x(!D(f.value), "Collections don't support variables");
    let h = e.getNodeWithTrait(f.value, sl);
    if (!h) break;
    u = h;
    let T = i[c + 1];
    if (!T) break;
    l.push({ collectionItemNode: u, variableId: T });
  }
  return l;
}
function qV(e) {
  return e.title ?? e.name;
}
function j_(e) {
  return e.replace(/^\.\/(.*)\.(?:tsx|ts|js)$/u, "$1");
}
function __(e) {
  let t = new K();
  for (let n in e) {
    let r = e[n];
    if (r && (t.set(n, r), r.type === "object"))
      for (let o in r.controls) {
        let i = r.controls[o];
        i && t.set(jo(n, o), { ...i, title: i.title ?? Hn(o) });
      }
  }
  return t;
}
function K_(e, t) {
  let n = new K();
  for (let r in e) {
    let o = e[r];
    if (!o) continue;
    let i = "defaultValue" in o ? o.defaultValue : void 0,
      a = t ? t[r] : i;
    if ((n.set(r, a), o.type === "object"))
      for (let s in o.controls) {
        let l = o.controls[s];
        if (!l) continue;
        let u = "defaultValue" in l ? l.defaultValue : void 0,
          c = g(a) ? a[s] : void 0;
        n.set(jo(r, s), t ? c : (c ?? u));
      }
  }
  return n;
}
var ns = "_hook";
function Bf(e) {
  return `${e}${ns}`;
}
function XV(e) {
  return !!e?.endsWith(ns);
}
function _o(e) {
  if (!(!e || !XV(e))) return e.slice(0, -ns.length);
}
function U_(e, t) {
  let n = _o(e);
  if (!n) return;
  let r = t.get(n);
  if (r) return Bf(r);
}
function Ff(e, t) {
  if (e.getPrimaryId() === t) return e;
  for (let n of e.ancestors()) if (n.getPrimaryId() === t) return n;
}
function $_(e, t) {
  if (!t) return;
  let n = _o(t);
  if (!n) return;
  let r = Ff(e, n);
  return An(r) ? r.hookIdentifier : void 0;
}
function q_(e, t, n, r) {
  if (!t) return;
  let o = _o(t);
  if (!o) return;
  let i = Ff(e, o);
  if (!An(i)) return;
  let a = i.cache.getHookCache().getMaps(i.hookIdentifier, n);
  if (!a) return;
  let s = r?.get(t);
  return s ? { ...a, valueMap: s } : a;
}
function Of(e, t, n) {
  if (!An(e)) return;
  let r = e.cache.getHookCache().getMaps(e.hookIdentifier, t);
  if (!r) return;
  let o = Bf(e.getPrimaryId()),
    i = n?.get(o) ?? r.valueMap;
  return {
    providerId: o,
    sourceIdentifier: e.hookIdentifier,
    variableMap: r.variableMap,
    controlMap: r.controlMap,
    valueMap: i,
  };
}
function X_(e, t, n) {
  let r = _o(n);
  if (!r) return;
  let o = e.get(r);
  if (!An(o)) return;
  let i = t.hookForIdentifier(o.hookIdentifier);
  return i ? qV(i) : void 0;
}
var YV = "variables";
function J_(e) {
  return e ? YV in e : !1;
}
var JV = "getProvidedVariableMap";
function Q_(e) {
  return !!e && JV in e;
}
function rs(e) {
  return e.root.getDefaultLocaleName("Default locale");
}
function Wf(e, t) {
  return !t || !e ? "ltr" : br(e.code);
}
var zf = "global_locale",
  Hf = "global_layout_direction",
  Ko = "locale_provider_id",
  Gf = "locale_source_identifier",
  ZV = "Left to Right",
  QV = "Right to Left";
function f2(e) {
  return Oe(e) || It(e) || Dt(e);
}
var os = (() => {
    let e, t, n;
    return (r) => {
      let o = r.root.locales;
      if (!o || o.length === 0) return null;
      let i = rs(r);
      return (
        (n && i === e && o === t) ||
          ((e = i),
          (t = o),
          (n = {
            id: zf,
            type: "enum",
            name: "Locale",
            initialValue: void 0,
            cases: [{ id: hn, name: rs(r) }, ...o.map((a) => ({ id: a.id, name: a.name }))],
          })),
        n
      );
    };
  })(),
  is = (() => {
    let e;
    return (t) => {
      let n = t.root.locales;
      return !n || n.length === 0
        ? null
        : e ||
            ((e = {
              id: Hf,
              type: "enum",
              name: "Layout Direction",
              initialValue: void 0,
              cases: [
                { id: "ltr", name: ZV },
                { id: "rtl", name: QV },
              ],
            }),
            e);
    };
  })(),
  m2 = Ge((e) => (e ? jf(e) : null)),
  eS = Ge((e, t) => {
    if (!e && !t) return;
    let n = new K();
    return (e && n.set(e.id, e), t && n.set(t.id, t), n);
  });
function y2(e) {
  let t = os(e),
    n = is(e);
  return eS(t, n);
}
function jf(e) {
  let t = [],
    n = [];
  for (let o of e.cases) (t.push(o.id), n.push(o.name));
  let r = { type: "enum", title: "Locale", options: t, optionTitles: n };
  return (wn(r, { dataIdentifier: Gf, enumFieldKey: zf }), r);
}
function tS(e) {
  let t = [],
    n = [];
  for (let o of e.cases) (t.push(o.id), n.push(o.name));
  let r = { type: "enum", title: "Layout Direction", options: t, optionTitles: n };
  return (wn(r, { dataIdentifier: Gf, enumFieldKey: Hf }), r);
}
var nS = Ge((e, t) => {
  if (!e && !t) return;
  let n = new K();
  return (e && n.set(e.id, jf(e)), t && n.set(t.id, tS(t)), n);
});
function rS(e) {
  let t = os(e),
    n = is(e);
  return nS(t, n);
}
var oS = Ge((e) => {
  if (!e) return;
  let t = new Map();
  return (t.set(Ko, e), t);
});
function h2(e) {
  let t = rS(e);
  return oS(t);
}
var iS = Ge((e, t, n, r) => {
  if (!e && !t) return;
  let o = new K();
  (e && o.set(e.id, n?.id ?? hn), t && o.set(t.id, Wf(n, r)));
  let i = new Map();
  return (i.set(Ko, o), i);
});
function x2(e, t) {
  let n = os(e),
    r = is(e);
  return iS(n, r, t, e.root.adaptLayoutToTextDirection);
}
var _f = "default",
  En = class {
    has(t) {
      return !1;
    }
    get(t) {}
    *[Symbol.iterator]() {}
  },
  b2 = new En(),
  T2 = new En(),
  C2 = new En();
function Kf(e) {
  let t = Pu(e);
  if (t) return t.intrinsicSize;
  let n = e.split("?")[1];
  if (!n) return;
  let r = new URLSearchParams(n),
    o = parseInt(r.get("width") ?? "", 10),
    i = parseInt(r.get("height") ?? "", 10);
  return S(o) && S(i) ? { width: o, height: i } : void 0;
}
var aS = "type",
  sS = "webPageId";
function Uf(e, t) {
  return e.type !== "link" || !g(t) || aS in t ? !1 : sS in t;
}
function lS(e, t) {
  let n = t;
  for (; Yn(n);) {
    if (n.dataIdentifier) return n.dataIdentifier;
    n = e.getParent(n.id);
  }
}
function uS(e, t) {
  if (t.unresolvedPathSlugs)
    for (let n in t.unresolvedPathSlugs) {
      let r = t.unresolvedPathSlugs[n];
      if (!g(r)) continue;
      let o = r.collectionItemId;
      if (!p(o)) continue;
      let i = Zu(e, t.webPageId);
      if (!i) return;
      let a = lS(e, i);
      if (!a) return;
      let s = { identifier: a, collectionItemId: o, key: n, value: "" };
      return { [n]: s };
    }
}
function $f(e, t) {
  return { type: "webPage", webPageId: t.webPageId, pathVariables: uS(e, t) };
}
function Uo(e, t, n) {
  if (Uf(t, n)) return $f(e, n);
  let r = fe(t.type, n);
  if (t.type === "array") {
    if (!M(r)) return r;
    let o = t.control;
    return o ? r.map((i) => Uo(e, o, i)) : r;
  }
  if (t.type === "object") {
    if (!g(r)) return r;
    let o = {};
    for (let i in r) {
      let a = t.controls[i];
      ((o[i] = r[i]), a && (o[i] = Uo(e, a, r[i])));
    }
    return o;
  }
  if (t.type === "responsiveimage" && Ro(r)) {
    let o = Kf(r.src);
    return o ? { ...r, pixelWidth: o.width, pixelHeight: o.height } : r;
  }
  return r;
}
var $o = class {
  constructor(t, n, r) {
    this.tree = t;
    this.controlMap = n;
    this.data = r;
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
    let r = this.data?.[t],
      o = Uo(this.tree, n, r);
    return (this.cache.set(t, o), o);
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
  ge = "repeater_item_count";
function $2(e, t, n, r, o) {
  let i = new $o(e, t, n);
  return new as(i, r, o);
}
var ss = {
    id: Bn,
    name: "Item Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  dS = xt(ss, "WebPage"),
  qo = {
    id: ge,
    name: "Visible Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  q2 = [ss, qo],
  ls = xt(qo, "WebPage");
function X2(e) {
  return e === Bn || e === ge;
}
function Y2(e) {
  return e === ge;
}
var qf = class extends $e {
    constructor(t) {
      let n = new K();
      (n.set(ge, qo), super(t, n));
    }
  },
  Xf = class extends $e {
    constructor(t, n) {
      let r = new K();
      (r.set(ge, n), super(t, r));
    }
  },
  Yf = class extends $e {
    constructor(t) {
      let n = new K();
      (n.set(ge, ls), super(t, n));
    }
  },
  Jf = class extends $e {
    constructor(t) {
      let n = new K();
      (n.set(Bn, ss), n.set(ge, qo), super(t, n));
    }
  },
  as = class extends $e {
    constructor(t, n, r) {
      let o = new K();
      (o.set(Bn, n + 1), o.set(ge, r), super(t, o));
    }
  },
  Zf = class extends $e {
    constructor(t) {
      let n = new K();
      (n.set(Bn, dS), n.set(ge, ls), super(t, n));
    }
  };
function J2(e, t, n, r) {
  let o = new Map(e),
    i = new Map(t),
    a = new K(),
    s = new K();
  return (
    a.set(ge, ls),
    s.set(ge, r),
    o.set(n, a),
    i.set(n, s),
    { nonRepeatedChildCombinedControlMap: o, nonRepeatedChildCombinedValueMap: i }
  );
}
function dK(e) {
  let t = e;
  for (let n of e.ancestors()) {
    if (da(n)) return ca(t);
    t = n;
  }
  return !1;
}
var cS = xt(Wo, "WebPage"),
  pS = xt(zo, "WebPage"),
  fS = { type: "boolean", title: Ln.name, defaultValue: Ln.initialValue },
  mS = { type: "boolean", title: Mn.name, defaultValue: Mn.initialValue },
  yS = { type: "array", title: Ho.name, control: { type: "object", controls: {} } },
  hS = gS(),
  xS = bS();
function gS() {
  let e = new K();
  return (
    e.set(_.activeItemIndex, Wo),
    e.set(_.totalItems, zo),
    e.set(_.hasNext, Ln),
    e.set(_.hasPrevious, Mn),
    e.set(_.dots, Ho),
    e
  );
}
function bS() {
  let e = new K();
  return (
    e.set(_.activeItemIndex, cS),
    e.set(_.totalItems, pS),
    e.set(_.hasNext, fS),
    e.set(_.hasPrevious, mS),
    e.set(_.dots, yS),
    e
  );
}
function TS(e) {
  return Array.from({ length: e }, (t, n) => ({ id: String(n + 1) }));
}
function CS(e) {
  let t = new K();
  return (
    t.set(_.activeItemIndex, 1),
    t.set(_.totalItems, e),
    t.set(_.hasNext, e > 1),
    t.set(_.hasPrevious, !1),
    t.set(_.dots, TS(e)),
    t
  );
}
function VS() {
  return hS;
}
function SS() {
  return xS;
}
function NS(e, t) {
  let n = t?.get(ge),
    r = S(n) ? e.tree() : void 0,
    o = 0;
  for (let i of Iu(e))
    if (!(Cn(i) && i.position !== void 0)) {
      if (S(n) && r && Yt(r, i)) {
        o += n;
        continue;
      }
      o++;
    }
  return o;
}
function cK(e, t) {
  let n = e.cache.carouselAncestorId;
  if (!n) return;
  let r = e.tree();
  if (!r) return;
  let o = r.get(n);
  if (o) return Qf(e, o, t);
}
function Qf(e, t, n) {
  let r = NS(t, n?.get(t.getPrimaryId())),
    o = e.cache.carouselValueMap;
  if (o?.itemCount === r) return o.valueMap;
  let i = CS(r);
  return ((e.cache.carouselValueMap = { itemCount: r, valueMap: i }), i);
}
function em(e, t) {
  if (!Cn(e) || e.position === void 0) return;
  let n = e.tree()?.get(e.parentid);
  if (!(!n || !da(n)))
    return {
      providerId: Oo,
      sourceIdentifier: Lf,
      variableMap: VS(),
      controlMap: SS(),
      valueMap: Qf(e, n, t),
    };
}
var RS = Gn();
function bK(e, t, n) {
  let r = [],
    o = em(e, t);
  o && r.push(o);
  let i = Of(e, n, t);
  return (i && r.push(i), r.length > 0 ? r : RS);
}
function TK(e) {
  return e === Ko || e === Oo;
}
function CK(e, t, n, r, o) {
  if (!t && n.length === 0) return e;
  let i;
  e
    ? ((i = new Map(e)), t && i.set(o, t))
    : t
      ? (i = new Map([
          [o, t],
          [_f, t],
        ]))
      : (i = new Map());
  for (let a of n) i.set(a.providerId, r(a));
  return i;
}
function VK(e) {
  return e.map(kS);
}
function SK(e) {
  return e.map(vS);
}
function kS(e) {
  return e.valueMap;
}
function vS(e) {
  return e.controlMap;
}
function NK(e, t) {
  if (t.length === 0) return e;
  let n = new Map(e ?? []);
  for (let r of t) n.set(r.providerId, r.valueMap);
  return n;
}
export {
  on as a,
  IS as b,
  Jo as c,
  _s as d,
  De as e,
  $s as f,
  jn as g,
  oe as h,
  we as i,
  Ks as j,
  nt as k,
  N as l,
  v as m,
  XS as n,
  pe as o,
  _n as p,
  Kn as q,
  rN as r,
  $n as s,
  vt as t,
  oN as u,
  Qo as v,
  an as w,
  ei as x,
  Wt as y,
  $h as z,
  ji as A,
  ed as B,
  Xh as C,
  td as D,
  Yh as E,
  rd as F,
  _i as G,
  Od as H,
  Ki as I,
  od as J,
  Ui as K,
  ze as L,
  Ci as M,
  Ql as N,
  mn as O,
  lt as P,
  oP as Q,
  b as R,
  id as S,
  ad as T,
  Vr as U,
  ct as V,
  ux as W,
  Sr as X,
  Nr as Y,
  Gd as Z,
  Pw as _,
  sd as $,
  cd as aa,
  Mw as ba,
  fd as ca,
  Rr as da,
  Yi as ea,
  Kw as fa,
  Ld as ga,
  Ad as ha,
  Sx as ia,
  Ed as ja,
  Fd as ka,
  Wd as la,
  zd as ma,
  xd as na,
  qw as oa,
  tL as pa,
  Cd as qa,
  mx as ra,
  hx as sa,
  Sd as ta,
  Ax as ua,
  Hd as va,
  Nd as wa,
  jt as xa,
  lL as ya,
  uL as za,
  Mr as Aa,
  Pr as Ba,
  gn as Ca,
  ea as Da,
  xL as Ea,
  gL as Fa,
  vd as Ga,
  wd as Ha,
  IL as Ia,
  Wx as Ja,
  Xd as Ka,
  Js as La,
  aN as Ma,
  Zs as Na,
  Qs as Oa,
  ti as Pa,
  hm as Qa,
  ni as Ra,
  tl as Sa,
  mN as Ta,
  yN as Ua,
  hN as Va,
  xN as Wa,
  I as Xa,
  CN as Ya,
  VN as Za,
  SN as _a,
  NN as $a,
  ri as ab,
  nl as bb,
  rl as cb,
  RN as db,
  oi as eb,
  xm as fb,
  Le as gb,
  It as hb,
  Dt as ib,
  ol as jb,
  Oe as kb,
  kN as lb,
  il as mb,
  vN as nb,
  PN as ob,
  We as pb,
  gm as qb,
  IN as rb,
  DN as sb,
  al as tb,
  qn as ub,
  sl as vb,
  wN as wb,
  LN as xb,
  Xn as yb,
  bm as zb,
  Tm as Ab,
  Cm as Bb,
  Vm as Cb,
  Sm as Db,
  Nm as Eb,
  Rm as Fb,
  MN as Gb,
  AN as Hb,
  EN as Ib,
  BN as Jb,
  FN as Kb,
  ON as Lb,
  WN as Mb,
  zN as Nb,
  HN as Ob,
  GN as Pb,
  ll as Qb,
  jN as Rb,
  _N as Sb,
  KN as Tb,
  UN as Ub,
  $N as Vb,
  qN as Wb,
  XN as Xb,
  ii as Yb,
  YN as Zb,
  JN as _b,
  ZN as $b,
  ul as ac,
  QN as bc,
  eR as cc,
  tR as dc,
  nR as ec,
  rR as fc,
  Yn as gc,
  oR as hc,
  dl as ic,
  Jn as jc,
  iR as kc,
  aR as lc,
  sR as mc,
  lR as nc,
  uR as oc,
  dR as pc,
  cR as qc,
  pR as rc,
  fR as sc,
  mR as tc,
  km as uc,
  yR as vc,
  hR as wc,
  xR as xc,
  Er as yc,
  jM as zc,
  _M as Ac,
  Wy as Bc,
  DP as Cc,
  wP as Dc,
  Mt as Ec,
  ml as Fc,
  Zn as Gc,
  Pm as Hc,
  rt as Ic,
  tr as Jc,
  Im as Kc,
  Dm as Lc,
  yl as Mc,
  hl as Nc,
  wm as Oc,
  ai as Pc,
  di as Qc,
  nr as Rc,
  xl as Sc,
  Fm as Tc,
  zR as Uc,
  HR as Vc,
  GR as Wc,
  Om as Xc,
  jR as Yc,
  KR as Zc,
  ci as _c,
  UR as $c,
  pi as ad,
  Tl as bd,
  YR as cd,
  fi as dd,
  rr as ed,
  ok as fd,
  ik as gd,
  ak as hd,
  sk as id,
  lk as jd,
  Vl as kd,
  uk as ld,
  or as md,
  dn as nd,
  mk as od,
  yk as pd,
  hk as qd,
  kk as rd,
  $m as sd,
  Xm as td,
  Ym as ud,
  Zm as vd,
  vk as wd,
  ey as xd,
  Pk as yd,
  Ik as zd,
  ty as Ad,
  Dk as Bd,
  ry as Cd,
  wk as Dd,
  kl as Ed,
  Lk as Fd,
  yi as Gd,
  Mk as Hd,
  vl as Id,
  Ak as Jd,
  Ek as Kd,
  Bk as Ld,
  Il as Md,
  Fk as Nd,
  sy as Od,
  ly as Pd,
  Ok as Qd,
  Wk as Rd,
  uy as Sd,
  zk as Td,
  Hk as Ud,
  Gk as Vd,
  jk as Wd,
  _k as Xd,
  Kk as Yd,
  D as Zd,
  Ll as _d,
  hi as $d,
  sr as ae,
  Ml as be,
  qk as ce,
  Xk as de,
  Al as ee,
  Yk as fe,
  Jk as ge,
  Zk as he,
  dy as ie,
  iv as je,
  me as ke,
  av as le,
  Fl as me,
  sv as ne,
  lv as oe,
  uv as pe,
  Wl as qe,
  A as re,
  zl as se,
  XM as te,
  YM as ue,
  JM as ve,
  Yx as we,
  Jx as xe,
  ZM as ye,
  Yd as ze,
  Jd as Ae,
  Zd as Be,
  ft as Ce,
  QM as De,
  Qx as Ee,
  eA as Fe,
  ec as Ge,
  tA as He,
  eg as Ie,
  nA as Je,
  rA as Ke,
  tg as Le,
  Br as Me,
  tc as Ne,
  oA as Oe,
  Fr as Pe,
  ua as Qe,
  Or as Re,
  og as Se,
  Wr as Te,
  rc as Ue,
  oc as Ve,
  iA as We,
  aA as Xe,
  sg as Ye,
  uA as Ze,
  dA as _e,
  Cn as $e,
  yA as af,
  hA as bf,
  xA as cf,
  cg as df,
  da as ef,
  ca as ff,
  fg as gf,
  gA as hf,
  VA as if,
  SA as jf,
  yg as kf,
  NA as lf,
  xg as mf,
  RA as nf,
  kA as of,
  cl as pf,
  bR as qf,
  sn as rf,
  wt as sf,
  TR as tf,
  CR as uf,
  VR as vf,
  ln as wf,
  SR as xf,
  pl as yf,
  Lt as zf,
  NR as Af,
  fl as Bf,
  RR as Cf,
  kR as Df,
  vR as Ef,
  bv as Ff,
  fy as Gf,
  Tv as Hf,
  Gl as If,
  ye as Jf,
  jl as Kf,
  Cv as Lf,
  Vv as Mf,
  Hl as Nf,
  Sv as Of,
  Nv as Pf,
  Rv as Qf,
  _l as Rf,
  hy as Sf,
  kv as Tf,
  gy as Uf,
  it as Vf,
  vv as Wf,
  Pv as Xf,
  Iv as Yf,
  ac as Zf,
  bg as _f,
  zr as $f,
  fa as ag,
  sc as bg,
  DA as cg,
  wA as dg,
  LA as eg,
  MA as fg,
  AA as gg,
  FA as hg,
  OA as ig,
  dc as jg,
  Kt as kg,
  HA as lg,
  cc as mg,
  GA as ng,
  jA as og,
  _A as pg,
  U as qg,
  E as rg,
  $l as sg,
  at as tg,
  Mv as ug,
  st as vg,
  ur as wg,
  pn as xg,
  Jl as yg,
  Zl as zg,
  cr as Ag,
  sP as Bg,
  cP as Cg,
  pP as Dg,
  ut as Eg,
  fP as Fg,
  mP as Gg,
  yP as Hg,
  yn as Ig,
  pr as Jg,
  mu as Kg,
  wi as Lg,
  gP as Mg,
  bP as Ng,
  Fy as Og,
  yu as Pg,
  vP as Qg,
  fr as Rg,
  PP as Sg,
  zy as Tg,
  dt as Ug,
  BP as Vg,
  UP as Wg,
  $P as Xg,
  Ft as Yg,
  Li as Zg,
  qP as _g,
  XP as $g,
  hu as ah,
  qy as bh,
  YP as ch,
  xu as dh,
  JP as eh,
  ZP as fh,
  QP as gh,
  gu as hh,
  Xy as ih,
  eI as jh,
  tI as kh,
  nI as lh,
  rI as mh,
  Jy as nh,
  Qy as oh,
  oI as ph,
  XA as qh,
  ma as rh,
  Rg as sh,
  YA as th,
  Hr as uh,
  ZA as vh,
  fc as wh,
  oE as xh,
  mc as yh,
  Ut as zh,
  Pg as Ah,
  iE as Bh,
  en as Ch,
  w1 as Dh,
  L1 as Eh,
  Jp as Fh,
  Gr as Gh,
  lE as Hh,
  xa as Ih,
  uE as Jh,
  dE as Kh,
  Lu as Lh,
  ph as Mh,
  HI as Nh,
  GI as Oh,
  Eu as Ph,
  jI as Qh,
  _I as Rh,
  fo as Sh,
  Ig as Th,
  Vn as Uh,
  jr as Vh,
  Kr as Wh,
  Ke as Xh,
  Ur as Yh,
  $r as Zh,
  xE as _h,
  gE as $h,
  bE as ai,
  TE as bi,
  CE as ci,
  VE as di,
  SE as ei,
  Xr as fi,
  kE as gi,
  gc as hi,
  AE as ii,
  bc as ji,
  Tc as ki,
  EE as li,
  Cc as mi,
  BE as ni,
  Zp as oi,
  K1 as pi,
  Y1 as qi,
  J1 as ri,
  Z1 as si,
  pC as ti,
  nf as ui,
  Q1 as vi,
  eH as wi,
  ba as xi,
  OE as yi,
  Wg as zi,
  WE as Ai,
  zE as Bi,
  zg as Ci,
  Hg as Di,
  _E as Ei,
  jg as Fi,
  KE as Gi,
  _g as Hi,
  UE as Ii,
  $E as Ji,
  qE as Ki,
  XE as Li,
  YE as Mi,
  JE as Ni,
  yt as Oi,
  $t as Pi,
  Ve as Qi,
  Sc as Ri,
  bu as Si,
  rh as Ti,
  yI as Ui,
  vu as Vi,
  hI as Wi,
  xI as Xi,
  Pu as Yi,
  lB as Zi,
  ht as _i,
  Ta as $i,
  qt as aj,
  Nc as bj,
  Yr as cj,
  uB as dj,
  dB as ej,
  cB as fj,
  Qg as gj,
  Sa as hj,
  kc as ij,
  Ic as jj,
  va as kj,
  Xt as lj,
  UB as mj,
  to as nj,
  $B as oj,
  qB as pj,
  vc as qj,
  Pe as rj,
  SB as sj,
  RB as tj,
  kB as uj,
  vB as vj,
  Mi as wj,
  Ai as xj,
  Ae as yj,
  Jr as zj,
  Zr as Aj,
  zB as Bj,
  ob as Cj,
  eo as Dj,
  ib as Ej,
  eF as Fj,
  tF as Gj,
  nF as Hj,
  wc as Ij,
  Pa as Jj,
  rF as Kj,
  sF as Lj,
  lF as Mj,
  Ia as Nj,
  uF as Oj,
  vF as Pj,
  PF as Qj,
  IF as Rj,
  DF as Sj,
  ub as Tj,
  cb as Uj,
  wF as Vj,
  ro as Wj,
  LF as Xj,
  MF as Yj,
  AF as Zj,
  EF as _j,
  BF as $j,
  g_ as ak,
  GV as bk,
  An as ck,
  SI as dk,
  ah as ek,
  Iu as fk,
  Tb as gk,
  Yc as hk,
  C0 as ik,
  V0 as jk,
  Sb as kk,
  S0 as lk,
  N0 as mk,
  Jc as nk,
  R0 as ok,
  k0 as pk,
  Rb as qk,
  v0 as rk,
  Du as sk,
  Wp as tk,
  zc as uk,
  zp as vk,
  jz as wk,
  eC as xk,
  _z as yk,
  Zz as zk,
  Qz as Ak,
  _p as Bk,
  tC as Ck,
  e1 as Dk,
  t1 as Ek,
  hn as Fk,
  MI as Gk,
  AI as Hk,
  EI as Ik,
  BI as Jk,
  Bu as Kk,
  Oi as Lk,
  Fu as Mk,
  Ou as Nk,
  Wu as Ok,
  Wi as Pk,
  rD as Qk,
  gr as Rk,
  oD as Sk,
  iD as Tk,
  zu as Uk,
  Gc as Vk,
  jc as Wk,
  GF as Xk,
  mb as Yk,
  jF as Zk,
  _F as _k,
  _c as $k,
  KF as al,
  yb as bl,
  Yt as cl,
  UF as dl,
  $F as el,
  qF as fl,
  XF as gl,
  YF as hl,
  Ei as il,
  PI as jl,
  II as kl,
  lh as ll,
  Bi as ml,
  DI as nl,
  dh as ol,
  Hu as pl,
  Eh as ql,
  Gu as rl,
  Ku as sl,
  fD as tl,
  Bh as ul,
  mD as vl,
  yD as wl,
  Uu as xl,
  br as yl,
  Ge as zl,
  zi as Al,
  ND as Bl,
  RD as Cl,
  kD as Dl,
  Yu as El,
  ED as Fl,
  Gh as Gl,
  Zu as Hl,
  Qu as Il,
  jh as Jl,
  Ro as Kl,
  Jt as Ll,
  t0 as Ml,
  Uc as Nl,
  i0 as Ol,
  a0 as Pl,
  qc as Ql,
  p0 as Rl,
  Rn as Sl,
  f0 as Tl,
  et as Ul,
  Xc as Vl,
  m0 as Wl,
  y0 as Xl,
  h0 as Yl,
  x0 as Zl,
  L0 as _l,
  kn as $l,
  M0 as am,
  Zc as bm,
  Db as cm,
  Lb as dm,
  Q0 as em,
  eO as fm,
  tO as gm,
  nO as hm,
  oo as im,
  rO as jm,
  oO as km,
  ep as lm,
  iO as mm,
  aO as nm,
  sO as om,
  lO as pm,
  uO as qm,
  dO as rm,
  cO as sm,
  pO as tm,
  fO as um,
  mO as vm,
  yO as wm,
  hO as xm,
  xO as ym,
  gO as zm,
  bO as Am,
  TO as Bm,
  CO as Cm,
  VO as Dm,
  SO as Em,
  NO as Fm,
  RO as Gm,
  kO as Hm,
  vO as Im,
  PO as Jm,
  IO as Km,
  DO as Lm,
  wO as Mm,
  LO as Nm,
  MO as Om,
  za as Pm,
  N1 as Qm,
  ko as Rm,
  MG as Sm,
  vf as Tm,
  ej as Um,
  Ua as Vm,
  u1 as Wm,
  Oa as Xm,
  d1 as Ym,
  x1 as Zm,
  g1 as _m,
  $p as $m,
  Wa as an,
  C1 as bn,
  Kp as cn,
  zO as dn,
  HO as en,
  GO as fn,
  jO as gn,
  Gb as hn,
  Kb as in,
  Da as jn,
  ao as kn,
  nW as ln,
  rW as mn,
  mp as nn,
  Yp as on,
  P1 as pn,
  rf as qn,
  of as rn,
  af as sn,
  sf as tn,
  lf as un,
  bo as vn,
  To as wn,
  Y as xn,
  TC as yn,
  cf as zn,
  wn as An,
  dH as Bn,
  sW as Cn,
  po as Dn,
  lW as En,
  yW as Fn,
  Cp as Gn,
  CW as Hn,
  Vp as In,
  Sp as Jn,
  kW as Kn,
  WW as Ln,
  Np as Mn,
  mo as Nn,
  LT as On,
  ho as Pn,
  Rp as Qn,
  ff as Rn,
  pH as Sn,
  fH as Tn,
  mH as Un,
  mf as Vn,
  hH as Wn,
  xH as Xn,
  gH as Yn,
  yf as Zn,
  TH as _n,
  CH as $n,
  VH as ao,
  hf as bo,
  NH as co,
  RH as do,
  kH as eo,
  Vo as fo,
  IH as go,
  DH as ho,
  wH as io,
  LH as jo,
  KW as ko,
  UW as lo,
  $W as mo,
  ET as no,
  qW as oo,
  Pp as po,
  go as qo,
  ez as ro,
  tz as so,
  Dp as to,
  nz as uo,
  rz as vo,
  oz as wo,
  wp as xo,
  iz as yo,
  az as zo,
  sz as Ao,
  Lp as Bo,
  lz as Co,
  uz as Do,
  Ga as Eo,
  EH as Fo,
  BH as Go,
  FH as Ho,
  OH as Io,
  So as Jo,
  HH as Ko,
  GH as Lo,
  jH as Mo,
  _H as No,
  KH as Oo,
  No as Po,
  qH as Qo,
  XH as Ro,
  YH as So,
  JH as To,
  ZH as Uo,
  ja as Vo,
  LC as Wo,
  Tf as Xo,
  nG as Yo,
  rG as Zo,
  AC as _o,
  oG as $o,
  iG as ap,
  RG as bp,
  Vf as cp,
  vG as dp,
  Sf as ep,
  Mp as fp,
  Ap as gp,
  fe as hp,
  Ep as ip,
  Nz as jp,
  jT as kp,
  _T as lp,
  Z as mp,
  Qt as np,
  Rz as op,
  kz as pp,
  vz as qp,
  Pz as rp,
  KT as sp,
  UT as tp,
  Iz as up,
  $T as vp,
  Dz as wp,
  wz as xp,
  qT as yp,
  Lz as zp,
  YT as Ap,
  Aa as Bp,
  dj as Cp,
  Fp as Dp,
  Bz as Ep,
  zC as Fp,
  HC as Gp,
  _j as Hp,
  Kj as Ip,
  Uj as Jp,
  $j as Kp,
  qj as Lp,
  Xj as Mp,
  KC as Np,
  UC as Op,
  Yj as Pp,
  Jj as Qp,
  Zj as Rp,
  ZC as Sp,
  QC as Tp,
  xV as Up,
  IV as Vp,
  DV as Wp,
  Qj as Xp,
  es as Yp,
  e_ as Zp,
  t_ as _p,
  n_ as $p,
  Q_ as aq,
  Kf as bq,
  rs as cq,
  K as dq,
  Wf as eq,
  zf as fq,
  Hf as gq,
  Ko as hq,
  Gf as iq,
  ZV as jq,
  QV as kq,
  f2 as lq,
  os as mq,
  is as nq,
  m2 as oq,
  y2 as pq,
  rS as qq,
  h2 as rq,
  x2 as sq,
  _f as tq,
  b2 as uq,
  T2 as vq,
  C2 as wq,
  Lf as xq,
  Oo as yq,
  _ as zq,
  s_ as Aq,
  l_ as Bq,
  $o as Cq,
  $e as Dq,
  Bn as Eq,
  ge as Fq,
  $2 as Gq,
  q2 as Hq,
  X2 as Iq,
  Y2 as Jq,
  qf as Kq,
  Xf as Lq,
  Yf as Mq,
  Jf as Nq,
  as as Oq,
  Zf as Pq,
  J2 as Qq,
  dK as Rq,
  SS as Sq,
  cK as Tq,
  gt as Uq,
  f_ as Vq,
  m_ as Wq,
  bt as Xq,
  y_ as Yq,
  h_ as Zq,
  FV as _q,
  OV as $q,
  WV as ar,
  zV as br,
  Tt as cr,
  v_ as dr,
  jV as er,
  Af as fr,
  P_ as gr,
  tn as hr,
  I_ as ir,
  jo as jr,
  D_ as kr,
  w_ as lr,
  KV as mr,
  L_ as nr,
  M_ as or,
  UV as pr,
  $V as qr,
  A_ as rr,
  E_ as sr,
  qV as tr,
  j_ as ur,
  __ as vr,
  K_ as wr,
  Bf as xr,
  XV as yr,
  _o as zr,
  U_ as Ar,
  $_ as Br,
  q_ as Cr,
  X_ as Dr,
  bK as Er,
  TK as Fr,
  CK as Gr,
  VK as Hr,
  SK as Ir,
  kS as Jr,
  vS as Kr,
  NK as Lr,
  J_ as Mr,
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
//# sourceMappingURL=chunk-I26CB724.mjs.map
