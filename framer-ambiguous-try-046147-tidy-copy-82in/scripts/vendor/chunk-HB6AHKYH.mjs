import { B as ln, d as zs, f as Dt, g as Pe, n as Hs, o as ke, z as Xs } from "chunk-Q5OEXSCG.mjs";
import { a as kt, b as Es, g as _, h as _n } from "chunk-WBRHMFUJ.mjs";
import { a as ws, b as se, e as qs, f as Ys, g as ne, t as Js, w as wt } from "chunk-AAHMUU7O.mjs";
import { e as Kn, f as we, g as gm } from "chunk-3CKYEPG2.mjs";
import { Ne as Ce, Ob as Fs, nf as Ws, pd as Os, xf as tt, zb as As } from "chunk-DPHJW6UJ.mjs";
import {
  A as We,
  b as et,
  c as Ls,
  d as ee,
  e as Oe,
  f as Gn,
  g as q,
  i as Pt,
  j as Ms,
  u as Bs,
  z as vt,
} from "chunk-2CEDOG4D.mjs";
import { a as sn, b as It } from "chunk-WRBBN7SY.mjs";
import { a as ce } from "chunk-SMHMQ5IL.mjs";
import { a as Un } from "chunk-MSHSIAEI.mjs";
import { g as Ks, k as Us } from "chunk-D563A37T.mjs";
import { a as jn } from "chunk-UZNETSBG.mjs";
import { b as $s } from "chunk-YSP5ZHDJ.mjs";
import { b as X } from "chunk-AYNVEX5D.mjs";
import { a as oe } from "chunk-2FCXHKEL.mjs";
import {
  a as te,
  b as p,
  f as S,
  g as x,
  h as Gs,
  j as E,
  p as k,
  r as js,
  s as Ve,
  v as _s,
} from "chunk-ARJ7WQTJ.mjs";
import { a as re } from "chunk-SWYZG2NI.mjs";
import { o as Ds } from "chunk-HJ6ZWR7D.mjs";
import { g as Rs, i as Ps, k as ks, l as Qe, o as vs, r as Is } from "chunk-L5AQ4LH7.mjs";
import { b as Ns, j as Rt } from "chunk-PFWVXZ76.mjs";
import { b as g, c as z } from "chunk-4JY5UMT2.mjs";
import { c as Ss, e as B } from "chunk-WLHSDIGQ.mjs";
var Ff = Ss((G) => {
  "use strict";
  var Ja = Symbol.for("react.element"),
    Za = Symbol.for("react.portal"),
    wo = Symbol.for("react.fragment"),
    Lo = Symbol.for("react.strict_mode"),
    Mo = Symbol.for("react.profiler"),
    Bo = Symbol.for("react.provider"),
    Eo = Symbol.for("react.context"),
    tV = Symbol.for("react.server_context"),
    Ao = Symbol.for("react.forward_ref"),
    Fo = Symbol.for("react.suspense"),
    Oo = Symbol.for("react.suspense_list"),
    Wo = Symbol.for("react.memo"),
    zo = Symbol.for("react.lazy"),
    nV = Symbol.for("react.offscreen"),
    Af;
  Af = Symbol.for("react.module.reference");
  function Re(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Ja:
          switch (((e = e.type), e)) {
            case wo:
            case Mo:
            case Lo:
            case Fo:
            case Oo:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case tV:
                case Eo:
                case Ao:
                case zo:
                case Wo:
                case Bo:
                  return e;
                default:
                  return t;
              }
          }
        case Za:
          return t;
      }
    }
  }
  G.ContextConsumer = Eo;
  G.ContextProvider = Bo;
  G.Element = Ja;
  G.ForwardRef = Ao;
  G.Fragment = wo;
  G.Lazy = zo;
  G.Memo = Wo;
  G.Portal = Za;
  G.Profiler = Mo;
  G.StrictMode = Lo;
  G.Suspense = Fo;
  G.SuspenseList = Oo;
  G.isAsyncMode = function () {
    return !1;
  };
  G.isConcurrentMode = function () {
    return !1;
  };
  G.isContextConsumer = function (e) {
    return Re(e) === Eo;
  };
  G.isContextProvider = function (e) {
    return Re(e) === Bo;
  };
  G.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Ja;
  };
  G.isForwardRef = function (e) {
    return Re(e) === Ao;
  };
  G.isFragment = function (e) {
    return Re(e) === wo;
  };
  G.isLazy = function (e) {
    return Re(e) === zo;
  };
  G.isMemo = function (e) {
    return Re(e) === Wo;
  };
  G.isPortal = function (e) {
    return Re(e) === Za;
  };
  G.isProfiler = function (e) {
    return Re(e) === Mo;
  };
  G.isStrictMode = function (e) {
    return Re(e) === Lo;
  };
  G.isSuspense = function (e) {
    return Re(e) === Fo;
  };
  G.isSuspenseList = function (e) {
    return Re(e) === Oo;
  };
  G.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === wo ||
      e === Mo ||
      e === Lo ||
      e === Fo ||
      e === Oo ||
      e === nV ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === zo ||
          e.$$typeof === Wo ||
          e.$$typeof === Bo ||
          e.$$typeof === Eo ||
          e.$$typeof === Ao ||
          e.$$typeof === Af ||
          e.getModuleId !== void 0))
    );
  };
  G.typeOf = Re;
});
var Wf = Ss((cj, Of) => {
  "use strict";
  Of.exports = Ff();
});
function un(e, t) {
  let r = 10 ** Math.round(Math.abs(t));
  return Math.round(e * r) / r;
}
function $S(e, t) {
  let n = e.toFixed(t);
  return t === 0 ? n : `${+n}`;
}
function oi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Zs(e) {
  return Math.round(e * 2) / 2;
}
function Le(e, t) {
  return { x: e, y: t };
}
((P) => {
  ((P.isQuadrilateralPoints = (y) => y?.length === 4),
    (P.add = (...y) => y.reduce((C, R) => ({ x: C.x + R.x, y: C.y + R.y }), { x: 0, y: 0 })),
    (P.subtract = (y, C) => ({ x: y.x - C.x, y: y.y - C.y })),
    (P.multiply = (y, C) => ({ x: y.x * C, y: y.y * C })),
    (P.divide = (y, C) => ({ x: y.x / C, y: y.y / C })),
    (P.absolute = (y) => ({ x: Math.abs(y.x), y: Math.abs(y.y) })),
    (P.reverse = (y) => ({ x: y.x * -1, y: y.y * -1 })),
    (P.pixelAligned = (y, C = { x: 0, y: 0 }) => ({ x: oi(y.x, C.x), y: oi(y.y, C.y) })),
    (P.distance = (y, C) => {
      let R = Math.abs(y.x - C.x),
        j = Math.abs(y.y - C.y);
      return Math.sqrt(R * R + j * j);
    }),
    (P.angle = (y, C) => (Math.atan2(C.y - y.y, C.x - y.x) * 180) / Math.PI - 90),
    (P.angleFromX = (y, C) => (Math.atan2(C.y - y.y, C.x - y.x) * 180) / Math.PI),
    (P.isEqual = (y, C) => y.x === C.x && y.y === C.y),
    (P.rotationNormalizer = () => {
      let y;
      return (C) => {
        typeof y != "number" && (y = C);
        let R = y - C,
          j = Math.abs(R) + 180,
          $ = Math.floor(j / 360);
        return (R < 180 && (C -= $ * 360), R > 180 && (C += $ * 360), (y = C), C);
      };
    }));
  function h(y, C) {
    return { x: (y.x + C.x) / 2, y: (y.y + C.y) / 2 };
  }
  P.center = h;
  function T(y) {
    let C = 0,
      R = 0;
    y.forEach((Z) => {
      ((C += Z.x), (R += Z.y));
    });
    let j = C / y.length,
      $ = R / y.length;
    return { x: j, y: $ };
  }
  P.centroid = T;
  function V(y) {
    let C = P.centroid(y),
      R = new Map();
    for (let j = 0; j < y.length; j++) {
      let $ = y[j];
      $ && R.set($, Math.atan2($.y - C.y, $.x - C.x));
    }
    return y.sort((j, $) => (R.get(j) ?? 0) - (R.get($) ?? 0));
  }
  P.sortClockwise = V;
})((Le ||= {}));
function Qs(e) {
  return e * (Math.PI / 180);
}
var it = (() => {
  function e(t, n) {
    return { a: t, b: n };
  }
  return (
    (e.offset = (t, n) => {
      let r = Le.angleFromX(t.a, t.b),
        o = Qs(r),
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
        P = T / h;
      return r && (V < 0 || V > 1 || P < 0 || P > 1)
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
        i = Le(n.x - o, n.y + r);
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
    (e.distance = (t) => Le.distance(t.a, t.b)),
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
      let n = un(e.x, t),
        r = un(e.y, t),
        o = un(e.width, t),
        i = un(e.height, t);
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
        s = Le.distance(t, n),
        l = Le.distance(t, o);
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
        Le.distance({ x: n, y: r }, { x: 0, y: 0 })
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
      return [it(t, n), it(n, r), it(r, o), it(o, t)];
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
              We(r);
          }
          break;
        case "left":
          o.x = t.x - e.width;
          break;
        case "right":
          o.x = t.x + t.width;
          break;
        default:
          We(n);
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
              We(r);
          }
          break;
        case "top":
          o.y = t.y - e.height;
          break;
        case "bottom":
          o.y = t.y + t.height;
          break;
        default:
          We(n);
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
        r = it(t, n),
        o = N.edges(e);
      for (let i = 0; i < o.length; i++) {
        let a = o[i];
        if (a && it.intersection(r, a, !0)) {
          let s = el[i];
          return (vt(s, () => `Invalid edge name: ${JSON.stringify(el)}`), { edge: a, name: s });
        }
      }
    },
    closestRect: (e, t) => {
      let n = 0,
        r = e[0];
      vt(r, "Rect array is empty");
      let o = N.pointDistance(r, t);
      for (let i = 1; i < e.length; i += 1) {
        let a = e[i];
        vt(a);
        let s = N.pointDistance(a, t);
        if ((s < o && ((n = i), (r = a), (o = s)), o === 0)) break;
      }
      return { rect: r, index: n };
    },
  },
  el = ["top", "right", "bottom", "left"];
function tl(e, t, n) {
  let r = n ? `, use ${n} instead` : "",
    o = `Deprecation warning: ${e} will be removed in version ${t}${r}.`;
  ws(o);
}
var $n = class {
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
var ie = (() => {
    function e(t) {
      return (
        tl(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        Me(t) ? t : new ii(t)
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
      (e.get = (t, n) => (t == null ? n : Me(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let r in t) {
          let o = t[r];
          Me(o) ? (n[r] = o.get()) : (n[r] = o);
        }
        return n;
      }),
      e
    );
  })(),
  nl = "onUpdate",
  rl = "finishTransaction";
function Me(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    nl in e &&
    e[nl] instanceof Function &&
    rl in e &&
    e[rl] instanceof Function
  );
}
function bm(e, t) {
  return {
    interpolate(n, r) {
      let o = n.get(),
        i = r.get(),
        a = ie(o);
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
var ii = class {
  constructor(t) {
    this.value = t;
  }
  value;
  observers = new $n();
  static interpolationFor(t, n) {
    if (Me(t)) return bm(t, n);
  }
  get() {
    return this.value;
  }
  set(t, n) {
    let r = this.value;
    (Me(t) && (t = t.get()), (this.value = t));
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
function Tm(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function qn(e) {
  return typeof e != "string" && typeof e != "number";
}
function Xn(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !Tm(e);
}
function v(e) {
  return Number.isFinite(e);
}
function fN(e) {
  return v(e) ? e : void 0;
}
var CN = {
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
  Jn = ((a) => (
    (a[(a.FixedNumber = 0)] = "FixedNumber"),
    (a[(a.Percentage = 1)] = "Percentage"),
    (a[(a.Auto = 2)] = "Auto"),
    (a[(a.FractionOfFreeSpace = 3)] = "FractionOfFreeSpace"),
    (a[(a.Viewport = 4)] = "Viewport"),
    (a[(a.FitImage = 5)] = "FitImage"),
    a
  ))(Jn || {});
function Lt(e) {
  return Pt(e) ? !1 : e === 2 || e === 5;
}
function VN(e) {
  return !(!Xn(e) || !qn(e));
}
var ai = {
  quickfix: (e) => (
    (Lt(e.widthType) || Lt(e.heightType)) && (e.aspectRatio = null),
    v(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || Lt(e.widthType) || v(e.maxWidth)) && (e.right = !1), (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || Lt(e.heightType) || v(e.maxHeight)) && (e.bottom = !1), (e.heightType = 0)),
    e
  ),
};
function dn(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var si = {
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
        m = ai.quickfix({
          left: v(t) || Me(t),
          right: v(n) || Me(n),
          top: v(r) || Me(r),
          bottom: v(o) || Me(o),
          widthType: dn(i),
          heightType: dn(a),
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
      } else i !== void 0 && typeof i != "string" && (f = ie.getNumber(i));
      if (m.heightType !== 0 && typeof a == "string") {
        let C = parseFloat(a);
        a.endsWith("fr")
          ? ((V = 3), (h = C))
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
          top: m.top ? ie.getNumber(r) : null,
          bottom: m.bottom ? ie.getNumber(o) : null,
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
    toSize: (e, t, n, r) => {
      let o = null,
        i = null,
        a = t?.sizing ? ie.getNumber(t?.sizing.width) : null,
        s = t?.sizing ? ie.getNumber(t?.sizing.height) : null,
        l = ol(e.left, e.right);
      if (a && v(l)) o = a - l;
      else if (n && Lt(e.widthType)) o = n.width;
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
            We(e.widthType);
        }
      let u = ol(e.top, e.bottom);
      if (s && v(u)) i = s - u;
      else if (n && Lt(e.heightType)) i = n.height;
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
            We(e.heightType);
        }
      return Pm(o, i, e, { height: s ?? 0, width: a ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, n = null, r = !1, o = null) => {
      let i = e.left || 0,
        a = e.top || 0,
        { width: s, height: l } = si.toSize(e, t, n, o),
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
      return r ? N.pixelAligned(f) : f;
    },
  },
  Cm = 200,
  Vm = 200;
function Yn(e, t, n, r) {
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
      if (!r) return Sm(e);
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
function Sm(e) {
  switch (e) {
    case "minWidth":
    case "minHeight":
      return Number.NEGATIVE_INFINITY;
    case "maxWidth":
    case "maxHeight":
      return Number.POSITIVE_INFINITY;
    default:
      We(e, "unknown constraint key");
  }
}
function Nm(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Yn("minHeight", t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Yn("maxHeight", t.maxHeight, n, r), e)),
    e
  );
}
function Rm(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Yn("minWidth", t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Yn("maxWidth", t.maxWidth, n, r), e)),
    e
  );
}
function Pm(e, t, n, r, o) {
  let i = Rm(v(e) ? e : Cm, n, r, o),
    a = Nm(v(t) ? t : Vm, n, r, o);
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
function ol(e, t) {
  return !v(e) || !v(t) ? null : e + t;
}
var Mt = ((d) => (
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
))(Mt || {});
function il(e, t = class {}) {
  class n extends t {
    __class = Mt[e];
    static displayName = `WithClassDiscriminatorMixin(${e})`;
  }
  return ((n.prototype.__class = e), n);
}
function NN(e, t) {
  ((e.prototype.__class = t), (e.displayName = `WithClassDiscriminatorMixin(${t})`));
}
var km = new Set(Object.keys(Mt));
function al(e) {
  return km.has(e);
}
function sl(e) {
  if (!al(e)) return !1;
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
      return z(e);
  }
}
function ll(e) {
  return e ? (e === "RootNode" ? !0 : li(e)) : !1;
}
function li(e) {
  return e
    ? !!(vm(e) || ui(e) || e === "OverlayNode" || e === "SlotNode" || e === "SlotPropertyNode")
    : !1;
}
function vm(e) {
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
function ui(e) {
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
function ul(e) {
  switch (e) {
    case "CollectionNode":
    case "CollectionItemNode":
    case "ContentManagementNode":
      return !0;
    default:
      return !1;
  }
}
function LN(e) {
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
function MN(e) {
  return e ? sl(e) : !1;
}
function BN(e) {
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
function EN(e) {
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
function WN(e) {
  return I(e, "RootNode");
}
function zN(e) {
  return I(e, "AgentSkillNode");
}
function HN(e) {
  return I(e, "AgentSkillsListNode");
}
function GN(e) {
  return I(e, "DatabaseListNode");
}
function di(e) {
  return I(e, "FrameNode");
}
function dl(e) {
  return di(e) && e.layout === "stack";
}
function cl(e) {
  return di(e) && e.layout === "grid";
}
function jN(e) {
  return di(e) && e.layout !== void 0;
}
function ci(e) {
  return !e || (!dl(e) && !cl(e)) ? !1 : !!e.dataIdentifier;
}
function Im(e) {
  return !e || (!dl(e) && !cl(e)) || e.dataIdentifier ? !1 : !!e.dataRepeaterArray;
}
function Be(e) {
  return e ? ci(e) || Im(e) : !1;
}
function Bt(e) {
  return I(e, "SmartComponentNode");
}
function Et(e) {
  return e?.__class === "LayoutTemplateNode";
}
function pl(e) {
  return e?.__class === "VectorSetNode";
}
function ze(e) {
  return I(e, "WebPageNode");
}
function _N(e) {
  return e?.__class === "DesignPageNode";
}
function fl(e) {
  return e?.__class === "CanvasPageNode";
}
function KN(e) {
  return I(e, "ContentManagementNode");
}
function UN(e) {
  return e?.__class === "TextNode";
}
function He(e) {
  return I(e, "RichTextNode");
}
function Dm(e) {
  return I(e, "CodeComponentNode");
}
function $N(e) {
  return I(e, "ShaderNode");
}
function qN(e) {
  return I(e, "OverlayNode");
}
function ml(e) {
  return I(e, "SVGNode");
}
function Zn(e) {
  return I(e, "CollectionNode");
}
function yl(e) {
  return I(e, "CollectionItemNode");
}
function XN(e) {
  return e?.__class === "BranchNode";
}
function YN(e) {
  return I(e, "BranchesNode");
}
function Qn(e) {
  return I(e, "ShapeContainerNode");
}
function wm(e) {
  return e?.__class === "BooleanShapeNode";
}
function Lm(e) {
  return e?.__class === "ShapeGroupNode";
}
function Mm(e) {
  return e?.__class === "PathNode";
}
function Bm(e) {
  return e?.__class === "RectangleShapeNode";
}
function Em(e) {
  return e?.__class === "StarShapeNode";
}
function Am(e) {
  return e?.__class === "OvalShapeNode";
}
function Fm(e) {
  return e?.__class === "PolygonShapeNode";
}
function JN(e) {
  return Lm(e) || wm(e) || Mm(e) || Bm(e) || Am(e) || Fm(e) || Em(e);
}
function ZN(e) {
  return I(e, "RoutesNode");
}
function QN(e) {
  return I(e, "RedirectRouteNode");
}
function eR(e) {
  return I(e, "ProxyRouteNode");
}
function tR(e) {
  return I(e, "RewriteRouteNode");
}
function nR(e) {
  return I(e, "HeaderRouteNode");
}
function rR(e) {
  return I(e, "FirewallRouteNode");
}
function oR(e) {
  return I(e, "ColorStyleTokenNode");
}
function iR(e) {
  return I(e, "ColorStyleTokenListNode");
}
function aR(e) {
  return I(e, "SharedEnumListNode");
}
function hl(e) {
  return I(e, "SharedEnumNode");
}
function sR(e) {
  return I(e, "ErrorListNode");
}
function lR(e) {
  return e?.__class === "ErrorNode";
}
function uR(e) {
  return e?.__class === "FormPlainTextInputNode";
}
function dR(e) {
  return e?.__class === "FormBooleanInputNode";
}
function cR(e) {
  return e?.__class === "FormSelectNode";
}
function pR(e) {
  return I(e, "ComponentPresetNode");
}
function fR(e) {
  return I(e, "PresetsListNode");
}
function pi(e) {
  return e?.__class === "TextStylePresetNode";
}
function mR(e) {
  return pi(e) && !e.replicaInfo;
}
function yR(e) {
  return pi(e) && !!e.replicaInfo;
}
function hR(e) {
  return e?.__class === "LinkStylePresetNode";
}
function xl(e) {
  return e?.__class === "BlockquoteStylePresetNode";
}
function xR(e) {
  return e?.__class === "TableStylePresetNode";
}
function gR(e) {
  return xl(e) && !e.replicaInfo;
}
function bR(e) {
  return !!e?.replicaInfo && (pi(e) || xl(e));
}
function TR(e) {
  return e?.__class === "ImageStylePresetNode";
}
function CR(e) {
  return e?.__class === "InlineCodeStylePresetNode";
}
function er(e) {
  return I(e, "RouteSegmentNode");
}
function VR(e) {
  return I(e, "RouteSegmentRootNode");
}
function gl(e) {
  return I(e, "SlotNode");
}
function tr(e) {
  return I(e, "SlotPropertyNode");
}
function SR(e) {
  return I(e, "EntityFolderNode");
}
function NR(e) {
  return I(e, "EntityReferenceNode");
}
function RR(e) {
  return I(e, "ExternalModulesListNode");
}
function PR(e) {
  return e?.__class === "ExternalModuleNode";
}
function kR(e) {
  return I(e, "AnalyticsScopeNode");
}
function vR(e) {
  return e?.__class === "LocalizationGlossaryNode";
}
function IR(e) {
  return e?.__class === "LocalizationGlossaryItemNode";
}
function DR(e) {
  return I(e, "FunnelNode");
}
function wR(e) {
  return I(e, "FunnelStepNode");
}
function LR(e) {
  return I(e, "FunnelStepActionNode");
}
function Om(e) {
  return e ? Dm(e) && e.isVectorInstance : !1;
}
function MR(e) {
  if (!Om(e)) return !1;
  let t = e.dynamicVectorSetIdentifier;
  return t?.type === "variableReference" || t?.type === "computedValue";
}
function BR(e) {
  return e?.__class === "CustomCodeScopeNode";
}
function ER(e) {
  return e?.__class === "CustomCodeNode";
}
var bl = "hidden master",
  FR = { isMaster: !1, isExternalMaster: null, replicaInfo: null },
  Wm = "isMaster";
function cn(e) {
  return Wm in e;
}
function At(e) {
  return cn(e) && e.isMaster;
}
function OR(e) {
  return cn(e) && !!e.isExternalMaster;
}
function WR(e) {
  let t = cn(e) ? e.isExternalMaster : null;
  return !!t && t !== bl;
}
function zR(e) {
  return cn(e) ? e.isExternalMaster === bl : !1;
}
function pn(e) {
  return e ? cn(e) && !!e.replicaInfo : !1;
}
function HR(e) {
  return e ? !pn(e) : !1;
}
function Tl(e) {
  return pn(e) && !!e.replicaInfo.inheritsFrom;
}
function Ft(e) {
  return e ? !!e.originalid && !pn(e) : !1;
}
function GR(e) {
  return !!e.originalid;
}
function Cl(e) {
  for (let t of e.ancestors()) if (At(t)) return !0;
  return !1;
}
function jR(e) {
  return At(e) || Cl(e);
}
function _R(e, { includeSelf: t } = { includeSelf: !0 }) {
  if (t && At(e)) return e;
  for (let n of e.ancestors()) if (At(n)) return n;
  return null;
}
function KR(e) {
  return Ft(e) || Cl(e);
}
function Ot(e) {
  return E(e) && e.length === 4 && e.every(S);
}
function Vl(e) {
  return Ot(e) ? [Math.min(Math.max(e[0], 0), 1), e[1], Math.min(Math.max(e[2], 0), 1), e[3]] : e;
}
function nr(e) {
  for (let t of Reflect.ownKeys(e)) {
    let n = e[t];
    !n || (typeof n != "object" && !js(n)) || nr(n);
  }
  return Object.freeze(e);
}
var zm = {
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
nr(zm);
var at = {
  type: "spring",
  ease: [0.44, 0, 0.56, 1],
  duration: 0.3,
  delay: 0,
  stiffness: 500,
  damping: 60,
  mass: 1,
  stagger: 0,
};
nr(at);
var Wt = "type",
  rr = "durationBasedSpring",
  ir = "ease",
  Hm = "duration",
  Gm = "delay",
  Sl = "stiffness",
  Nl = "damping",
  jm = "mass",
  hi = [Hm, Gm, Sl, Nl, jm],
  fi = "bounce",
  or = "stagger";
function fn(e) {
  return e === "spring" || e === "tween" || e === "inertia" || e === !1;
}
function xi(e) {
  return !x(e) || !fn(e[Wt]) || !Ot(e[ir]) ? !1 : hi.every((t) => S(e[t]));
}
function ar(e) {
  return x(e) ? (fn(e[Wt]) || Ot(e[ir]) ? !0 : hi.some((t) => S(e[t]))) : !1;
}
function Rl(e) {
  switch (e.type) {
    case "spring":
      return { type: "spring", ...Ym(e), delay: e.delay };
    case "tween":
      return { type: "tween", duration: e.duration, ease: Vl(e.ease), delay: e.delay };
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
      z(e.type);
  }
}
var _m = ["stiffness", "damping", "mass"],
  Km = ["duration", "bounce"],
  Um = ["ease"];
function $m(e) {
  return "type" in e
    ? e.type === !1
      ? !0
      : e.type !== "tween" || Um.some((t) => t in e)
        ? !1
        : e.duration === 0
    : !1;
}
function qm(e) {
  return e.type !== "spring" || _m.some((t) => t in e) ? !1 : Km.some((t) => t in e);
}
var mi = "bounceStiffness",
  yi = "bounceDamping",
  Xm = (e) => {
    let t = { ...at },
      n = e[Wt];
    fn(n) && (t[Wt] = $m(e) ? !1 : n);
    let r = e[ir];
    Ot(r) && (t[ir] = r);
    for (let o of hi) {
      let i = e[o];
      S(i) && (t[o] = i);
    }
    return (
      mi in e && S(e[mi]) && (t[Sl] = e[mi]),
      yi in e && S(e[yi]) && (t[Nl] = e[yi]),
      or in e && S(e[or]) && (t[or] = e[or]),
      rr in e ? (t[rr] = e[rr]) : qm(e) && (t[rr] = !0),
      fi in e && (t[fi] = e[fi]),
      t
    );
  };
function Pl(e) {
  return ar(e) && !fn(e[Wt]);
}
function oP(e, t = at) {
  return x(e) && fn(e[Wt]) ? e : ar(e) ? Xm(e) : t;
}
function iP(e) {
  return xi(e) && e.type === "tween";
}
function aP(e) {
  return `all ${e.duration}s cubic-bezier(${e.ease.join(",")}) ${e.delay}s`;
}
function Ym(e) {
  return e.type === "spring" && e.durationBasedSpring
    ? { duration: Math.min(e.duration, 10), bounce: e.bounce ?? 0 }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
var sP = (e) => e * 1e3;
var A = ((D) => (
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
  ))(A || {}),
  Jm = {
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
function uP(e) {
  return e.type in Jm;
}
var Zm = /^(?![\p{L}\p{M}\d-]*-$)(?!-)[\p{L}\p{M}\d-]+$/u,
  kl = /^(?:[\p{L}\p{M}\d](?:[\p{L}\p{M}\d-]*[\p{L}\p{M}\d])?\.)+[\p{L}\p{M}]+$/u;
function cP(e, t) {
  return e
    ? t && e === "www"
      ? "InvalidPhrase"
      : (t ? Zm : kl).exec(e)
        ? null
        : "InvalidCharacter"
    : "Empty";
}
function gi(e, t = !1) {
  try {
    let n = new URL(e);
    return n.protocol === "http:" || n.protocol === "https:"
      ? n.hostname === "localhost"
        ? !0
        : kl.test(n.hostname)
      : !t;
  } catch {
    return !1;
  }
}
function pP(e) {
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
function bi(e) {
  return (
    (e = e.trim()),
    e
      ? gi(e, !0)
        ? { result: "ok", normalizedValue: e }
        : gi(`https://${e}`)
          ? { result: "ok", normalizedValue: `https://${e}` }
          : { result: "error", message: "Please enter a valid URL" }
      : { result: "error", message: "Please enter a valid URL" }
  );
}
var vl = ":([a-z]\\w*)",
  hP = new RegExp(vl, "i"),
  Ti = new RegExp(vl, "gi");
var Il = "type",
  Qm = "fetchDataValue";
function sr(e) {
  return x(e) && Il in e && e[Il] === Qm;
}
function NP(e) {
  return bi(e.url).result !== "error";
}
function RP(e) {
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
function PP(e) {
  if (e.controlProp) return e.controlProp.value;
  let t = e.fallbackValue;
  return (g(!k(t), "fallbackValue must be defined"), t);
}
function kP(e) {
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
function wl(e, t) {
  if (
    !sr(t) ||
    e.url !== t.url ||
    e.resultKeyPath !== t.resultKeyPath ||
    e.cacheDuration !== t.cacheDuration ||
    e.fallbackValue !== t.fallbackValue
  )
    return !1;
  let n = Dl(e.url),
    r = Dl(t.url);
  if (n.length !== r.length) return !1;
  for (let o in e.variables) if (!ce(e.variables[o], t.variables[o])) return !1;
  return !0;
}
function vP(e, t) {
  let n = bi(e.url);
  return n.result !== "ok"
    ? e.url
    : n.normalizedValue.replaceAll(Ti, (i, a) => {
        let s = e.variables[a];
        return s ? (p(s) ? s : t(s)) : "";
      });
}
function Dl(e) {
  let t = e.matchAll(Ti),
    n = new Set();
  for (let r of t) {
    let o = r[1];
    o && o.length !== 0 && n.add(o);
  }
  return Array.from(n);
}
var IP = [
  "https://api.fetch.tools/weather?city=:city",
  "https://api.fetch.tools/views",
  "https://api.fetch.tools/location",
  "https://api.fetch.tools/emoji",
];
var Ll = {
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
  ey = {
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
function lr(e) {
  return p(e) && Object.hasOwn(Ll, e);
}
function mn(e) {
  return p(e) && Object.hasOwn(ey, e);
}
var BP = mn,
  ty = { boolean: !0, number: !0, string: !0, color: !0, date: !0, link: !0, image: !0 };
function EP(e) {
  return p(e) && Object.hasOwn(ty, e);
}
function AP(e) {
  return jn(Ll).filter(e);
}
var ny = { responsiveimage: !0 };
function UP(e) {
  return lr(e) ? !0 : p(e) && e in ny;
}
var ry = "type",
  oy = "valueTransform",
  iy = [
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
  ay = new Set(iy),
  sy = {
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
function ly(e) {
  return ay.has(e);
}
function uy(e) {
  return Object.hasOwn(sy, e);
}
var dy = {
  enumToDisplayName: !0,
  convertFromEnum: !0,
  convertFromBoolean: !0,
  convertFromString: !0,
  arrayToArray: !0,
  toDateString: !0,
};
function cy(e) {
  return Object.hasOwn(dy, e);
}
var py = {
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
  dr = qs(py);
function $P() {
  return dr;
}
function fy(e) {
  let t = Ci[e];
  return !(Ve(t) || k(t));
}
function qP(e) {
  return fy(e.name);
}
function XP(e) {
  return ly(e.name) && Bl(e.name) !== null;
}
function my(e) {
  return uy(e) || cy(e);
}
var Ml = [
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
function YP(e) {
  return Ml.includes(e);
}
var Ci = {
    contains: ["string", "multicollectionreference"],
    containsAny: ["multicollectionreference"],
    containsAll: ["multicollectionreference"],
    endsWith: ["string"],
    startsWith: ["string"],
    prefix: ["string"],
    suffix: ["string"],
    equals: ["string", "boolean", "number", "enum", "date", "collectionreference"],
    isSet: Ml,
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
  yy = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of dr) {
        let n = Ci[t];
        if (n)
          for (let r of n) {
            let o = e.get(r);
            o ? o.push(t) : e.set(r, [t]);
          }
      }
      return e;
    };
  })();
function hy(e) {
  return yy().get(e);
}
function JP(e) {
  let t = hy(e);
  return !!(t && t.length > 0);
}
function Bl(e) {
  return Ci[e];
}
var xy = {
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
function ZP(e) {
  return xy[e];
}
var Vi = {
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
  gy = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of dr) {
        let n = Vi[t];
        for (let r of n) {
          let o = e.get(r);
          o ? o.push(t) : e.set(r, [t]);
        }
      }
      return e;
    };
  })();
function QP(e) {
  return gy().get(e);
}
function El(e) {
  return Vi[e];
}
function ek(e, t) {
  return my(e.name) ? Vi[e.name].includes(t) : !1;
}
function tk(e) {
  switch (e.name) {
    case "convertFromEnum":
    case "convertFromBoolean":
    case "convertFromString":
      return e.outputType;
    default: {
      let t = El(e.name);
      g(t.length === 1);
      let n = t[0];
      return (g(n, "Value transform output type must be defined"), n);
    }
  }
}
var nk = new Set(["convertFromBoolean", "equals", "isSet"]),
  Al = {
    isSet: "Isn\u2019t set",
    equals: "Doesn\u2019t equal",
    startsWith: "Doesn\u2019t start with",
    endsWith: "Doesn\u2019t end with",
    contains: "Doesn\u2019t contain",
    greaterThan: "Less than or equal",
    lessThan: "Greater than or equal",
    isIncludedIn: "Isn\u2019t included in",
  };
function Fl(e) {
  return Object.hasOwn(Al, e);
}
function rk(e, t) {
  if (t) return (g(Fl(e)), Al[e]);
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
      return we(e);
  }
}
var by = new Set(["prefix", "suffix"]);
function Ty(e) {
  return by.has(e);
}
var ur;
function Cy(e) {
  return (
    ur ||
      (ur = new Set(
        dr.filter((t) => {
          let n = Bl(t);
          if (n?.length !== 1 || n[0] !== "array") return !1;
          let r = El(t);
          return r.length !== 1 ? !1 : r[0] === "array";
        })
      )),
    ur.has(e)
  );
}
function ok(e) {
  return Cy(e) || Ty(e);
}
function ik(e, t) {
  let n = e.findIndex((i) => i.id === t),
    r = e[n];
  if (!r) return null;
  let o = 1;
  if (Fl(r.name)) for (let i = n + 1, a = e.length; i < a && e[i]?.name === "negate"; i++) o++;
  return { start: n, length: o };
}
function Vy(e) {
  return x(e) && e[ry] === oy;
}
function Ol(e, t) {
  if (!Vy(t) || e.name !== t.name) return !1;
  for (let n of jn(e)) if (n !== "id" && e[n] !== t[n]) return !1;
  return !0;
}
var ak = ["standard", "compact"],
  sk = ["short", "long"],
  lk = ["decimal", "currency", "unit"],
  uk = ["symbol", "narrowSymbol", "code", "name"],
  dk = ["short", "narrow", "long"],
  ck = ["year", "month", "day", "hour12", "hour24", "minute"];
var Wl = "type",
  yn = "variableReference";
function M(e) {
  return x(e) && Wl in e && e[Wl] === yn;
}
function zl(e, t) {
  return { type: yn, id: e, providerId: t };
}
function Si(e, t) {
  return { type: yn, id: e, providerId: t };
}
function cr(e, t) {
  return M(t) ? e.id === t.id && e.providerId === t.providerId : !1;
}
var Hl = "transform";
function mk(e) {
  return M(e) && e.providerId === Hl;
}
function yk(e) {
  return { type: yn, id: e, providerId: Hl };
}
var Gl = "payload",
  jl = ".";
function hk(e) {
  return M(e) && e.providerId === Gl;
}
function xk(e) {
  return { type: yn, id: e.join(jl), providerId: Gl };
}
function gk(e) {
  let t = Sy(e.id);
  if (!t.some((n) => n.length === 0)) return t;
}
function Sy(e) {
  return e.split(jl);
}
var _l = "type",
  Ni = "computedValue",
  Ny = {
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
function Rk(e) {
  return p(e) && Object.hasOwn(Ny, e);
}
function ye(e) {
  return x(e) && _l in e && e[_l] === Ni;
}
function Pk(e) {
  return ye(e) && sr(e.startValue);
}
function Kl(e) {
  return ye(e) && M(e.startValue);
}
function kk(e) {
  return (
    ye(e) &&
    e.transforms.length === 1 &&
    e.transforms[0]?.name === "toDateString" &&
    e.transforms[0]?.display === "relative"
  );
}
function vk(e) {
  return ye(e) && e.transforms.some((t) => t.name === "toDateString");
}
function Ik(e) {
  return ye(e) && e.transforms.some((t) => t.name === "toDateString" && t.display !== "relative");
}
function Ul(e, t) {
  return !ye(t) ||
    e.outputType !== t.outputType ||
    e.startValue.type !== t.startValue.type ||
    (M(e.startValue) && !cr(e.startValue, t.startValue)) ||
    (sr(e.startValue) && !wl(e.startValue, t.startValue)) ||
    e.transforms.length !== t.transforms.length
    ? !1
    : e.transforms.every((n, r) => Ol(n, t.transforms[r]));
}
function $l(e, t, n) {
  return M(t)
    ? { type: Ni, outputType: e, startValue: t, transforms: n }
    : { type: Ni, outputType: e, startValue: t, transforms: n };
}
function F(e) {
  return M(e) || ye(e);
}
function ql(e, t) {
  return M(e) ? cr(e, t) : Ul(e, t);
}
var Wk = { isVariant: void 0, isBreakpoint: void 0, gesture: void 0, variantTransition: void 0 },
  Ry = "isVariant";
function Py(e) {
  return Ry in e;
}
var zk = ["hover", "pressed"],
  ky = "gesture";
function Yl(e) {
  return ky in e;
}
function he(e) {
  return Py(e) && e.isVariant === !0;
}
function Jl(e) {
  return he(e) && At(e);
}
function Hk(e) {
  for (let t of e.ancestors()) if (Jl(t)) return t;
  return null;
}
function Gk(e) {
  return he(e) ? !Yl(e) || !e.gesture : !1;
}
function Xl(e) {
  return Zl(e) && Tl(e) && Yl(e) && !!e.gesture;
}
function jk(e) {
  if (Xl(e)) return !0;
  if (!Ft(e)) return !1;
  for (let t of e.ancestors()) if (Xl(t)) return !0;
  return !1;
}
function _k(e) {
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
      z(e);
  }
}
function Kk(e) {
  return he(e) || vy(e);
}
function vy(e) {
  return e.cache.insideVariant;
}
function Zl(e) {
  return pn(e) && he(e);
}
function Iy(e) {
  return Ft(e) && e.cache.insideVariant;
}
function Uk(e) {
  return Zl(e) || Iy(e);
}
var Dy = "isBreakpoint";
function wy(e) {
  return Dy in e;
}
function lt(e) {
  return e ? he(e) && wy(e) && e.isBreakpoint === !0 : !1;
}
function $k(e) {
  return lt(e) && Jl(e);
}
function qk(e) {
  return e ? he(e) && !lt(e) : !1;
}
function Xk(e) {
  return he(e) ? xi(e.variantTransition) || F(e.variantTransition) || Pl(e.variantTransition) : !1;
}
var Ly = Rt("serializeJS"),
  My = {
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
  Ql = new Intl.Collator("en", { sensitivity: "base" }).compare;
function pr(e, t, n) {
  let r = eu(n, t),
    o = [];
  for (let [i, a] of Object.entries(t)) {
    let s = e.serializeKeyValue(i, a, r);
    s && o.push(s);
  }
  return (
    t instanceof ut
      ? (ut.isSorted(t) && o.sort(Ql),
        o.unshift(...ut.spreadsAtStart(t).map(e.serializeSpread)),
        o.push(...ut.spreadsAtEnd(t).map(e.serializeSpread)))
      : o.sort(Ql),
    e.joinObject(o)
  );
}
function U(e, t = new Set()) {
  if (e instanceof O) return String(e);
  if (typeof e == "number" || typeof e == "boolean" || Ve(e)) return String(e);
  if (p(e))
    return JSON.stringify(e).replace(
      /[\u2028\u2029]/gu,
      (n) => `\\u${n.charCodeAt(0).toString(16)}`
    );
  if (E(e)) {
    let n = eu(t, e),
      r = [];
    for (let o of e) {
      let i = U(o, n);
      k(i) || r.push(i);
    }
    return `[${r.join(", ")}]`;
  } else if (typeof e == "object") return pr(My, e, t);
}
function eu(e, t) {
  if (e.has(t))
    throw (
      Ly.error("Encountered circular reference to object while serializing:", t),
      Error("Circular Reference")
    );
  let n = new Set(e);
  return (n.add(t), n);
}
var O = class e extends String {
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
})((O ||= {}));
function tu(e) {
  return e instanceof O;
}
var ut = class e extends Object {
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
      let i = r instanceof O ? U(r) : r;
      n[i] = o;
    }
    return new e(n);
  }
};
function Qk(e) {
  return e instanceof ut;
}
function dt(e, t = "") {
  let n = "";
  for (let r of e) r && (n && (n += t), (n += r instanceof O ? U(r) : r));
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
})((dt ||= {}));
function fr(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((r, o) => {
      n.push(U(r), e[o + 1]);
    }),
    new O(n.join(""))
  );
}
((o) => {
  function e(...i) {
    return new O(
      dt(
        i,
        `
`
      )
    );
  }
  o.joinLines = e;
  function t(...i) {
    return new O(
      dt(
        i,
        `

`
      )
    );
  }
  o.joinSections = t;
  function n(i) {
    return new O(
      dt(
        i,
        `
`
      )
    );
  }
  o.linesFrom = n;
  function r(i) {
    return new O(dt(i, ", "));
  }
  o.listFrom = r;
})((fr ||= {}));
var nu = Symbol("jst template literal");
function hn(e, ...t) {
  if (t.every((r) => p(r) || S(r) || te(r) || Ve(r))) {
    let r = [e[0]];
    return (
      t.forEach((o, i) => {
        r.push(String(o), e[i + 1]);
      }),
      r.join("")
    );
  }
  let n = ["`", Ri(e[0])];
  return (
    t.forEach((r, o) => {
      (p(r)
        ? n.push(Ri(r))
        : typeof r == "number" || typeof r == "boolean" || Ve(r)
          ? n.push(String(r))
          : r instanceof O && O.hasMarker(r, nu)
            ? n.push(r.substring(1, r.length - 1))
            : n.push("${", U(r), "}"),
        n.push(Ri(e[o + 1])));
    }),
    n.push("`"),
    O.withMarker(nu, n.join(""))
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
      (g(typeof u.index == "number", "unexpected non-number in match"),
        a.push(r.substring(l, u.index)),
        s.push(typeof i == "function" ? i(u[0], ...u.slice(1)) : i),
        (l = u.index + u[0].length));
    return (a.push(r.substring(l)), n(a, ...s));
  }
  n.replaceAll = t;
})((hn ||= {}));
var By = /(?<char>[A-Z])/gu;
function Ey(e) {
  return e.replace(By, "-$<char>").toLowerCase();
}
var Ay = new Set(["viewBox", "stdDeviation"]),
  Fy = {
    serializeSpread(e) {
      return `{...${e}}`;
    },
    serializeKeyValue(e, t, n) {
      if (k(t) || O.isUndefined(t)) return;
      let r = Ay.has(e) ? e : Ey(e);
      if (t === !0 || O.isTrue(t)) return r;
      if (S(t)) return `${r}="${t}"`;
      let o = U(t, n);
      if (o !== "") return `${r}=${o}`;
    },
    joinObject(e) {
      return e.join(" ");
    },
  };
function ru(e) {
  return e ? new O(" " + pr(Fy, e, new Set())) : fr``;
}
var Pi = Symbol("svg tag");
function iu(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((r, o) => {
      n.push(U(r), e[o + 1]);
    }),
    O.withMarker(Pi, n.join(""))
  );
}
((o) => {
  function e(i, a, s) {
    return s && U(s)
      ? o`<${new O(i)}${ru(a)}>${o.children(s)}</${new O(i)}>`
      : o`<${new O(i)}${ru(a)}/>`;
  }
  o.tag = e;
  function t(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  o.applyTransforms = t;
  function n(i) {
    return O.withMarker(Pi, i);
  }
  o.fromTrustedString = n;
  function r(i) {
    return (g(O.hasMarker(i, Pi), "SVG children can only be svg"), i);
  }
  o.children = r;
})((iu ||= {}));
var Oy = {
  serializeSpread(e) {
    return `{...${e}}`;
  },
  serializeKeyValue(e, t, n) {
    if (k(t) || O.isUndefined(t)) return;
    if (t === !0 || O.isTrue(t)) return e;
    let r = U(t, n);
    if (r !== "") return `${e}={${r}}`;
  },
  joinObject(e) {
    return e.join(" ");
  },
};
function ou(e) {
  return e ? new O(" " + pr(Oy, e, new Set())) : fr``;
}
var ki = Symbol("jsx tag");
function au(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((r, o) => {
      n.push(U(r), e[o + 1]);
    }),
    O.withMarker(ki, n.join(""))
  );
}
((o) => {
  function e(i) {
    return O.hasMarker(i, ki) ? i : o`{${i}}`;
  }
  o.children = e;
  function t(i) {
    return O.withMarker(ki, i);
  }
  o.fromTrustedString = t;
  function n(i, a, s) {
    return (
      (i = tu(i) ? i : new O(i)),
      s && U(s) ? o`<${i}${ou(a)}>${o.children(s)}</${i}>` : o`<${i}${ou(a)}/>`
    );
  }
  o.tag = n;
  function r(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  o.applyTransforms = r;
})((au ||= {}));
function Ri(e) {
  return e ? e.replace(/[`\\]|\$(?=\{)/gu, "\\$&") : "";
}
var xn = {
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
function Ge(e, t, n, r = !1) {
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
function nt(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function je(e) {
  let t = mr(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function mr(e) {
  let t = /\d?\.?\d+/u.exec(e);
  if (t) return Number(t[0]);
}
var vi = ((i) => (
    (i.RGB = "rgb"),
    (i.HSL = "hsl"),
    (i.HSV = "hsv"),
    (i.HEX = "hex"),
    (i.NAME = "name"),
    i
  ))(vi || {}),
  su = ((i) => (
    (i.RGB = "rgb"),
    (i.RGBA = "rgba"),
    (i.HSL = "hsl"),
    (i.HSLA = "hsla"),
    (i.HUSL = "husl"),
    i
  ))(su || {});
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
function uu(e, t, n) {
  return (
    (pe.rgb_r = e / 255),
    (pe.rgb_g = t / 255),
    (pe.rgb_b = n / 255),
    pe.rgbToHsluv(),
    { h: pe.hsluv_h, s: pe.hsluv_s, l: pe.hsluv_l }
  );
}
function du(e, t, n, r = 1) {
  return (
    (pe.hsluv_h = e),
    (pe.hsluv_s = t),
    (pe.hsluv_l = n),
    pe.hsluvToRgb(),
    { r: pe.rgb_r * 255, g: pe.rgb_g * 255, b: pe.rgb_b * 255, a: r }
  );
}
function zt(e, t, n, r) {
  let o = Math.round(e),
    i = Math.round(t * 100),
    a = Math.round(n * 100);
  return r === void 0 || r === 1
    ? "hsv(" + o + ", " + i + "%, " + a + "%)"
    : "hsva(" + o + ", " + i + "%, " + a + "%, " + r + ")";
}
function cu(e, t, n) {
  return {
    r: nt(e) ? le(e, 255) * 255 : 0,
    g: nt(t) ? le(t, 255) * 255 : 0,
    b: nt(n) ? le(n, 255) * 255 : 0,
  };
}
function wi(e, t, n, r) {
  let o = [
    Di(Math.round(e).toString(16)),
    Di(Math.round(t).toString(16)),
    Di(Math.round(n).toString(16)),
  ];
  return r &&
    o[0].charAt(0) === o[0].charAt(1) &&
    o[1].charAt(0) === o[1].charAt(1) &&
    o[2].charAt(0) === o[2].charAt(1)
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0)
    : o.join("");
}
function Ht(e, t, n) {
  let r,
    o,
    i = le(e, 255),
    a = le(t, 255),
    s = le(n, 255),
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
function Ii(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function pu(e, t, n) {
  let r, o, i;
  if (((e = le(e, 360)), (t = le(t * 100, 100)), (n = le(n * 100, 100)), t === 0)) r = o = i = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - a;
    ((r = Ii(s, a, e + 1 / 3)), (o = Ii(s, a, e)), (i = Ii(s, a, e - 1 / 3)));
  }
  return { r: r * 255, g: o * 255, b: i * 255 };
}
function Li(e, t, n) {
  ((e = le(e, 255)), (t = le(t, 255)), (n = le(n, 255)));
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
function fu(e, t, n) {
  ((e = le(e, 360) * 6), (t = le(t * 100, 100)), (n = le(n * 100, 100)));
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
function le(e, t) {
  let n, r;
  if ((typeof t == "string" ? (n = parseFloat(t)) : (n = t), typeof e == "string")) {
    Wy(e) && (e = "100%");
    let o = zy(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), o && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Wy(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function zy(e) {
  return typeof e == "string" && e.includes("%");
}
function Di(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var Ee = (() => {
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
function gn(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, "").trimEnd().toLowerCase(),
    r = xn[n];
  if ((r && (n = r), n === "transparent")) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let o;
  return (o = Ee.rgb.exec(n))
    ? {
        r: parseInt(o[1] ?? ""),
        g: parseInt(o[2] ?? ""),
        b: parseInt(o[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (o = Ee.rgba.exec(n))
      ? {
          r: parseInt(o[1] ?? ""),
          g: parseInt(o[2] ?? ""),
          b: parseInt(o[3] ?? ""),
          a: parseFloat(o[4] ?? ""),
          format: "rgb",
        }
      : (o = Ee.hsl.exec(n))
        ? { h: parseInt(o[1] ?? ""), s: je(o[2] ?? ""), l: je(o[3] ?? ""), a: 1, format: "hsl" }
        : (o = Ee.hsla.exec(n))
          ? {
              h: parseInt(o[1] ?? ""),
              s: je(o[2] ?? ""),
              l: je(o[3] ?? ""),
              a: parseFloat(o[4] ?? ""),
              format: "hsl",
            }
          : (o = Ee.hsv.exec(n))
            ? { h: parseInt(o[1] ?? ""), s: je(o[2] ?? ""), v: je(o[3] ?? ""), a: 1, format: "hsv" }
            : (o = Ee.hsva.exec(n))
              ? {
                  h: parseInt(o[1] ?? ""),
                  s: je(o[2] ?? ""),
                  v: je(o[3] ?? ""),
                  a: parseFloat(o[4] ?? ""),
                  format: "hsv",
                }
              : (o = Ee.hex8.exec(n))
                ? {
                    r: xe(o[1] ?? ""),
                    g: xe(o[2] ?? ""),
                    b: xe(o[3] ?? ""),
                    a: lu(o[4] ?? ""),
                    format: r ? "name" : "hex",
                  }
                : (o = Ee.hex6.exec(n))
                  ? {
                      r: xe(o[1] ?? ""),
                      g: xe(o[2] ?? ""),
                      b: xe(o[3] ?? ""),
                      a: 1,
                      format: r ? "name" : "hex",
                    }
                  : (o = Ee.hex4.exec(n))
                    ? {
                        r: xe(`${o[1]}${o[1]}`),
                        g: xe(`${o[2]}${o[2]}`),
                        b: xe(`${o[3]}${o[3]}`),
                        a: lu(o[4] + "" + o[4]),
                        format: r ? "name" : "hex",
                      }
                    : (o = Ee.hex3.exec(n))
                      ? {
                          r: xe(`${o[1]}${o[1]}`),
                          g: xe(`${o[2]}${o[2]}`),
                          b: xe(`${o[3]}${o[3]}`),
                          a: 1,
                          format: r ? "name" : "hex",
                        }
                      : !1;
}
function xe(e) {
  return parseInt(e, 16);
}
function lu(e) {
  return xe(e) / 255;
}
var Hy =
  /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u;
function mu(e) {
  let t = Hy.exec(e);
  if (!t) return null;
  let { r: n = "0", g: r = "0", b: o = "0", a: i } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(o), a: i ? parseFloat(i) : 1 };
}
function Mi(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function yu({ r: e, g: t, b: n, a: r }) {
  return { r: Mi(e), g: Mi(t), b: Mi(n), a: r };
}
function Bi(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function hu({ r: e, g: t, b: n, a: r }) {
  return { r: Bi(e), g: Bi(t), b: Bi(n), a: r };
}
var Gy = (e) => {
    let { r: t, g: n, b: r, a: o } = yu(e);
    return {
      x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
      y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
      z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
      a: o,
    };
  },
  jy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
    hu({
      r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
      g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
      b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
      a: r,
    }),
  _y = (e) => {
    let { r: t, g: n, b: r, a: o } = yu(e);
    return {
      x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
      y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
      z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
      a: o,
    };
  },
  Ky = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
    hu({
      r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
      g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
      b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
      a: r,
    });
function xu({ r: e, g: t, b: n, a: r }) {
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
function Uy(e) {
  return (e = e % 360) < 0 ? e + 360 : e;
}
function Ei({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let o = Uy(e),
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
function Ai(e) {
  return Ky(_y(e));
}
function gu(e) {
  return jy(Gy(e));
}
var ct = class e {
  format = "p3";
  r;
  g;
  b;
  a;
  constructor(t) {
    ((this.r = t.r ?? 0), (this.g = t.g ?? 0), (this.b = t.b ?? 0), (this.a = t.a ?? 1));
  }
  hsv() {
    return xu(this);
  }
  rgb() {
    return gu(this);
  }
  hsl() {
    return Ht(this.r, this.g, this.b);
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
        return new e(Ei(t));
      case "srgb":
        return new e(Ai(Ei(t)));
    }
  }
  static fromRGB(t) {
    return new e(
      Ai({
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
    let n = mu(t);
    if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
  }
  static srgbFromValue(t) {
    if (!ee(t) || !b.isP3String(t)) return t;
    let n = e.fromString(t);
    return n ? n.toString("srgb") : t;
  }
  static multiplyAlpha(t, n) {
    return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
  }
};
function Nv(e) {
  return ct.srgbFromValue(e);
}
var bu = new Map(),
  b = (() => {
    function e(o, i, a, s) {
      if (typeof o == "string") {
        let u = bu.get(o);
        return u || ((u = t(o)), u === void 0 ? { ...e("black"), isValid: !1 } : (bu.set(o, u), u));
      }
      let l = t(o, i, a, s);
      return l !== void 0 ? l : { ...e("black"), isValid: !1 };
    }
    function t(o, i, a, s) {
      if (o === "") return;
      let l = $y(o, i, a, s);
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
      (e.isColorString = (o) => (typeof o == "string" ? gn(o) !== !1 : !1)),
      (e.isColorObject = (o) =>
        q(o) &&
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
      (e.toHex = (o, i = !1) => wi(o.r, o.g, o.b, i)),
      (e.toHexString = (o, i = !1) => `#${e.toHex(o, i)}`),
      (e.isP3String = (o) => (typeof o != "string" ? !1 : ct.isP3String(o))),
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
      (e.toHusl = (o) => ({ ...uu(o.r, o.g, o.b), a: o.roundA })),
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
        let i = Li(o.r, o.g, o.b);
        return { h: i.h * 360, s: i.s, v: i.v, a: o.a };
      }),
      (e.toHsvString = (o) => {
        let i = Li(o.r, o.g, o.b),
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
        let i = wi(o.r, o.g, o.b, !0);
        for (let a of Object.keys(xn)) if (xn[a] === i) return a;
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
            r: Ge(a, [0, 1], [o.r, i.r], s),
            g: Ge(a, [0, 1], [o.g, i.g], s),
            b: Ge(a, [0, 1], [o.b, i.b], s),
            a: Ge(a, [0, 1], [o.a, i.a], s),
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
            h: Ge(a, [0, 1], [f, f + T], s),
            s: Ge(a, [0, 1], [c.s, m.s], s),
            l: Ge(a, [0, 1], [c.l, m.l], s),
            a: Ge(a, [0, 1], [o.a, i.a], s),
          };
          n.isHSL(l) ? (u = e(V)) : (u = e(du(V.h, V.s, V.l, V.a)));
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
      (e.rgbToHsl = (o, i, a) => Ht(o, i, a)),
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
function $y(e, t, n, r = 1) {
  let o;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (o = Fi({ r: e, g: t, b: n, a: r }))
      : typeof e == "string"
        ? (o = qy(e))
        : typeof e == "object" &&
          (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
            ? (o = Fi(e))
            : (o = Tu(e))),
    o
  );
}
function qy(e) {
  let t = gn(e);
  if (t) return t.format === "hsl" ? Tu(t) : t.format === "hsv" ? Xy(t) : Fi(t);
}
function Xy(e) {
  let t = fu(e.h, e.s, e.v);
  return { ...Ht(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? Cu(e.a) : 1 };
}
function Fi(e) {
  let t = cu(e.r, e.g, e.b);
  return { ...Ht(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? Cu(e.a) : 1 };
}
function Tu(e) {
  let t,
    n,
    r,
    o = { r: 0, g: 0, b: 0 },
    i = { h: 0, s: 0, l: 0 };
  return (
    (t = nt(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = nt(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = mr(e.s)),
    (r = nt(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (r = mr(e.l)),
    (o = pu(t, n, r)),
    (i = { h: t, s: n, l: r }),
    { ...o, ...i, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function Cu(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function yr(e) {
  if (!ee(e) || e.charAt(e.length - 1) !== "%") return !1;
  let n = e.slice(0, -1),
    r = parseFloat(n);
  return Oe(r);
}
function kv(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return Oe(n) ? n : 50;
}
function wv(e) {
  return e ? ll(e.__class) : !1;
}
function Lv(e) {
  return e ? li(e.__class) : !1;
}
function pt(e) {
  return e ? ui(e.__class) : !1;
}
function Mv(e) {
  return e ? ul(e.__class) : !1;
}
function Bv(e, t) {
  let n = e.getNodeParent(t);
  return n === null || !pt(n);
}
function Ev(e, t) {
  if (!pt(t)) return !1;
  let n = e.getNodeParent(t);
  return n === null ? !0 : !pt(n) && !Qn(n);
}
var bn = Symbol("Not Found");
function hr(e) {
  return e === bn;
}
function Vu(e) {
  return e !== bn;
}
function Oi(e) {
  return Vu(e) && !It(e);
}
function Ov(e) {
  return Vu(e) && e !== void 0;
}
function Wv(e) {
  return Oi(e) && e !== void 0;
}
function Yy(e, t) {
  return F(e) ? !ql(e, t) : e !== t;
}
function Su(e, t, n, r) {
  let o = t[e];
  if (It(o)) return;
  let i = n[e],
    a = r ? r(i) : i;
  hr(o) ? (t[e] = a) : Yy(a, o) && (t[e] = sn);
}
var $v = { codeComponentIdentifier: "", dynamicVectorSetIdentifier: void 0 },
  Jy = "codeComponentIdentifier";
function xr(e) {
  return e.hasProp(Jy);
}
function qv(e, t) {
  !xr(e) ||
    !Pe(e.codeComponentIdentifier) ||
    (t.codeComponentIdentifiers.add(e.codeComponentIdentifier),
    Su("dynamicVectorSetIdentifier", t, e));
}
var gr = ((R) => (
    (R.scroll = "framer/Scroll"),
    (R.page = "framer/Page"),
    (R.stack = "framer/Stack"),
    (R.prototype = "framer/Prototype"),
    (R.device = "__builtin/Device"),
    (R.legacyDevice = "@framer/framer.default/./Device.tsx_Device"),
    (R.legacyUnsplash = "@framer/framer.default/./Unsplash.tsx_Unsplash"),
    (R.navigationAction = "framer/useNavigate"),
    (R.openURLAction = "framer/useOpenURL"),
    (R.consoleLogAction = "framer/useLog"),
    (R.setVariantAction = "framer/useSetVariant"),
    (R.triggerEventAction = "framer/useTriggerEvent"),
    (R.showOverlayAction = "framer/useShowOverlay"),
    (R.showRelativeOverlayAction = "framer/useShowRelativeOverlay"),
    (R.loadMoreAction = "framer/useLoadMore"),
    (R.dismissOverlayAction = "framer/useDismissOverlay"),
    (R.setLocaleAction = "framer/useSetLocale"),
    (R.setVariableValueAction = "framer/useSetVariableValue"),
    (R.resetVariableValuesAction = "framer/useResetVariableValues"),
    R
  ))(gr || {}),
  Zy = new Set(Object.values(gr)),
  Yv = new Set(Object.values(gr).filter((e) => e !== "framer/Prototype"));
function Jv(e) {
  return Zy.has(e);
}
var Qy = new Set(["framer/Stack", "framer/Page", "framer/Scroll"]);
function ft(e) {
  return gl(e) || tr(e) ? !1 : !xr(e) || eh(e);
}
function nI(e) {
  return xr(e) && e.codeComponentIdentifier === "__builtin/Device";
}
function eh(e) {
  return Qy.has(e.codeComponentIdentifier);
}
var th = "fillOpacity";
function pI(e) {
  return th in e;
}
var fI = { fillOpacity: void 0 },
  nh = "fillType",
  rh = "fillEnabled",
  oh = "supportsGradient",
  ih = "fillImageLocalized";
function Gt(e) {
  return nh in e && ft(e);
}
function Wi(e) {
  return rh in e && ft(e);
}
function mI(e) {
  return Gt(e) ? (Wi(e) ? !!e.fillEnabled : !0) : !1;
}
function yI(e) {
  return ih in e;
}
function ah(e) {
  return oh in e && ft(e);
}
function Nu(e) {
  return ft(e) ? (ah(e) ? e.supportsGradient() : Gt(e)) : !1;
}
function sh(e) {
  return He(e) || Nu(e);
}
function hI(e) {
  return sh(e) && !(pt(e) || Qn(e) || ml(e));
}
function Ru(e) {
  return e === "linear-gradient" || e === "radial-gradient" || e === "conic-gradient";
}
function xI(e) {
  return Nu(e) ? Ru(e.fillType) : e.getFills().filter(Boolean).length;
}
function gI(e) {
  return e.fillEnabled && e.fillType === "image" && e.fillImage !== null;
}
function bI(e) {
  return Gt(e) && yr(e.fillImagePositionX) && yr(e.fillImagePositionY);
}
function Pu(e) {
  return Wi(e) && !e.fillEnabled ? !1 : Gt(e) && e.fillType === "image";
}
function lh(e) {
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
      z(e.fillType);
  }
}
function TI(e) {
  return !Gt(e) || (Wi(e) && !e.fillEnabled) ? !1 : !lh(e);
}
function CI(e) {
  switch (e) {
    case void 0:
    case "contain":
      return "fit";
    default:
      return "fill";
  }
}
function uh(e) {
  return !e || !Gt(e) ? !1 : Ru(e.fillType);
}
function VI(e) {
  if (uh(e) && !k(e.fillType))
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
        z(e.fillType);
    }
}
function SI(e, t, n) {
  let r = n === "conic-gradient" ? 360 : 100,
    o = n === "conic-gradient" ? "deg" : "%";
  return hn.join(
    Array.from({ length: e }).map((i, a) => hn`${t} ${Math.round((a / (e - 1)) * r)}${o}`),
    ", "
  );
}
var dh = ["left", "center", "right"],
  ch = new Set(dh),
  ph = ["top", "center", "bottom"],
  fh = new Set(ph);
function NI(e, t) {
  return p(e)
    ? ((t === "y" || t === "fillImagePositionY") && fh.has(e)) ||
      ((t === "x" || t === "fillImagePositionX") && ch.has(e))
      ? !0
      : yr(e)
    : !1;
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
  mh = ["blockStyles", "backgroundMask", "textStylePreset"],
  yh = ["header", "cell"];
function II(e) {
  return p(e) && yh.some((t) => e === t);
}
var hh = {
    textBlock: !0,
    numberedList: !0,
    bulletedList: !0,
    blockquote: !0,
    media: !0,
    module: !0,
    table: !0,
  },
  xh = ["inlineStyles", "backgroundStyles", "inlineCodeStylePreset", "linkStylePreset"],
  DI = ["openInNewTab", "smoothScroll", "clickTrackingId", "relValues", "preserveParams"];
function ku(e) {
  return p(e) && e in mt;
}
function gh(e) {
  return ku(e) && e.endsWith("Localized");
}
function wI(e) {
  return gh(e) ? e : `${e}Localized`;
}
var bh = {
  collectionControlPropLocalized: "collectionControlProp",
  controlPropLocalized: "controlProp",
  richTextNodeLocalized: "richTextNode",
};
function Th(e) {
  return bh[e];
}
function LI(e) {
  return { ...e, variant: Th(e.variant), childNodes: e.childNodes };
}
function MI(e) {
  return jt(e) && mt[e.variant].styles;
}
function BI(e) {
  return xh.some((t) => t in e);
}
function EI(e) {
  return mh.some((t) => t in e);
}
function AI(e) {
  return jt(e) && !e.variant.endsWith("Localized");
}
function yt(e, t) {
  return mt[e][t];
}
function jt(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "type" in e &&
    e.type === "richText" &&
    "variant" in e &&
    ku(e.variant) &&
    "childNodes" in e &&
    Array.isArray(e.childNodes)
  );
}
function Ch(e) {
  return Gs(e, "type") && p(e.type) && hh[e.type] === !0;
}
function Se(e, t) {
  if (!Ch(e)) return !1;
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
      return e.childNodes.every((n) => n.childNodes.every((r) => Se(r, t)));
  }
  z(e);
}
var Vh = {
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
function vu(e) {
  let t = ("" + e).trim().toLowerCase(),
    n = t.lastIndexOf(".");
  return Vh[~n ? t.substring(++n) : t];
}
var Sh = { auto: !0, lossless: !0, small: !0, medium: !0, large: !0, full: !0 };
function Iu(e) {
  return Ys(e) && e in Sh;
}
var br = "framer/asset-reference,";
function Nh(e) {
  return e.startsWith(`data:${br}`);
}
function UI(e) {
  return vu(e)?.startsWith("image/") ?? !1;
}
var Du = "originalFilename",
  wu = "packageIdentifier",
  Lu = "preferredSize",
  Mu = "presetName",
  Bu = "width",
  Eu = "height";
function Au(e, t = null, n = null, r = null, o = null, i = null) {
  g(e !== "", "Can\u2019t create asset reference for empty identifier");
  let a = new URL(`data:${br}${e}`);
  return (
    n && a.searchParams.set(Du, n),
    t && a.searchParams.set(wu, t),
    r && a.searchParams.set(Lu, r),
    o && a.searchParams.set(Mu, o),
    i && (a.searchParams.set(Bu, i.width.toString()), a.searchParams.set(Eu, i.height.toString())),
    a.href
  );
}
function $I({
  identifier: e,
  preferredSize: t,
  intrinsicSize: n,
  packageIdentifier: r,
  originalFilename: o,
  presetName: i,
}) {
  return Au(e, r, o, t, i, n);
}
function qI(e) {
  return Au(
    e.identifier,
    e.packageIdentifier,
    e.originalFilename,
    e.preferredSize,
    e.presetName,
    e.intrinsicSize
  );
}
function Fu(e) {
  if (Nh(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(br.length),
        r = t.searchParams.get(Du),
        o = t.searchParams.get(wu),
        i = t.searchParams.get(Lu),
        a = t.searchParams.get(Mu),
        s = t.searchParams.get(Bu),
        l = t.searchParams.get(Eu);
      return {
        identifier: n,
        originalFilename: r,
        packageIdentifier: o,
        preferredSize: Iu(i) ? i : void 0,
        presetName: a,
        fileExtension: r && Rh(r),
        intrinsicSize: s && l ? { width: parseInt(s), height: parseInt(l) } : void 0,
      };
    } catch {
      return;
    }
}
function Rh(e) {
  return e.split(".").pop() ?? "";
}
var zi = class {},
  Hi = class extends zi {},
  Ae = class extends Hi {
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
var eD = {},
  Ph = "children";
function kh(e) {
  return Ph in e && e.children !== void 0;
}
var vh = new Ae();
function Ou(e) {
  return kh(e) ? e.children : vh;
}
function Wu(e) {
  for (let t in e) return !1;
  return !0;
}
var Gi = "default";
function iD(e) {
  return fl(e) ? e.getGroundNodes().length === 0 : !1;
}
function aD(e) {
  if (!ze(e)) return !1;
  let t = e.getGroundNodes();
  return t.length > 1 ? !1 : t.length === 0 ? !0 : t[0]?.children?.length === 0;
}
function Ih(e) {
  return e ? !e.children || e.children.length === 0 : !1;
}
function Dh(e) {
  return e === "";
}
function ji(e) {
  return !!(e.webPageId && Dh(e.segment));
}
function sD(e) {
  return ji(e) && Ih(e);
}
function wh(e, t) {
  let n = t.get(e);
  if (!er(n)) return;
  let r = t.get(n.webPageId);
  if (ze(r) || n.children.length > 0) return;
  let o = n.parentid;
  (t.remove(n.id), o && wh(o, t));
}
var Tn = "default";
function dD(e, t) {
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
var Lh = "locales";
function cD(e) {
  return x(e) && Lh in e;
}
function pD(e, t) {
  if (!t || !e) return !1;
  if (e.length > t.length) return !0;
  for (let n of t) {
    let r = e.find((o) => o.id === n.id);
    if (r && (r.fallback !== n.fallback || r.draft !== n.draft)) return !0;
  }
  return !1;
}
function fD(e) {
  return e?.newContentInclusion ?? "include";
}
var Hu = (e) => {
    let t = N.fromRect(e.getBoundingClientRect());
    return ((t.x = t.x + kt.scrollX), (t.y = t.y + kt.scrollY), t);
  },
  Mh = (e) => N.merge(...e.map(Hu)),
  Bh = (e, t) => {
    let n = Gu(e, t);
    return { x: n.x, y: n.y, width: e.width, height: e.height };
  },
  Eh = (e, t) => {
    let n = ju(e, t);
    return { x: n.x, y: n.y, width: e.width, height: e.height };
  },
  _i = (e) => {
    let t = e.getBoundingClientRect();
    return { x: t.left + kt.scrollX, y: t.top + kt.scrollY, width: t.width, height: t.height };
  },
  Ah = (e) => ({ x: e.pageX, y: e.pageY }),
  Fh = (e) => ({ x: e.clientX, y: e.clientY }),
  Gu = (e, t) => {
    let n = _i(t);
    return { x: e.x + n.x, y: e.y + n.y };
  },
  ju = (e, t) => {
    let n = _i(t);
    return { x: e.x - n.x, y: e.y - n.y };
  },
  gD = (e, t = {}) => {
    let n = new KeyboardEvent("keydown", { bubbles: !0, keyCode: e, ...t }),
      r = document.activeElement;
    r && r.dispatchEvent(n);
  },
  bD = {
    frameFromElement: Hu,
    frameFromElements: Mh,
    convertToPageFrame: Bh,
    convertFromPageFrame: Eh,
    getPageFrame: _i,
    fromEventForPage: Ah,
    fromEventForClient: Fh,
    convertToPagePoint: Gu,
    convertFromPagePoint: ju,
  },
  zu,
  Oh = !ks() && typeof Document < "u" && typeof Document.parseHTMLUnsafe == "function";
function _u(e, t) {
  return Oh && !t
    ? Document.parseHTMLUnsafe(e)
    : ((zu ??= new DOMParser()), zu.parseFromString(e, t ?? "text/html"));
}
function TD(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
var Wh = /&(?:[gl]t|quot|#39|amp|#6[02]|#34|apos|#38);/gu,
  zh = {
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
function CD(e) {
  return e.replace(Wh, (t) => zh[t]);
}
function Ku(e) {
  let t = `<html><body>${e}</body></html>`;
  return _u(t).body;
}
function Hh(e, t) {
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
var Gh = 1e5,
  Ki = Hh(jh, Gh);
function jh(e) {
  let t = Ku(e),
    n = t.innerText;
  return Ds.isTest ? (n ?? t.textContent ?? "") : (g(n !== null), n);
}
function Uu(
  e,
  t = `
`
) {
  let n = e.replace(/<\/(h[1-6]|p|ul|ol)>/gu, `</$1>${t}`),
    r = Ki(n),
    o = t.length;
  return o && r.endsWith(t) ? r.slice(0, o * -1) : r;
}
function $u(e, { preserveTrailingEmptyBlockNewLine: t = !1 } = {}) {
  let n = Tr(e.childNodes);
  if (n.length === 0) return "";
  let r = n.join(`
`);
  return !t || e.childNodes.some(Cr)
    ? r
    : r +
        `
`;
}
function qu(e) {
  return e.replaceAll(/\n+/gu, "");
}
function Tr(e) {
  return e.flatMap((t) => (t.type === "media" || t.type === "module" ? [] : [_h(t)]));
}
function _h(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.map(Xh).join("");
    case "bulletedList":
    case "numberedList":
      return Uh(e.childNodes).join(`
`);
    case "blockquote":
      return Tr(e.childNodes).join(`
`);
    case "table":
      return e.childNodes.map($h).join(`
`);
    case "media":
    case "module":
      return "";
  }
}
function Kh(e) {
  return Tr(e.childNodes).join(`
`);
}
function Uh(e) {
  return e.flatMap((t) => {
    let n = Kh(t);
    return n.length > 0 ? [n] : [];
  });
}
function $h(e) {
  return e.childNodes.map(qh).join(`
`);
}
function qh(e) {
  return Tr(e.childNodes).join(`
`);
}
function Xh(e) {
  switch (e.type) {
    case "text":
      return e.text;
    case "lineBreak":
      return `
`;
  }
}
function Cr(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.some(Qh);
    case "bulletedList":
    case "numberedList":
      return e.childNodes.some(Yh);
    case "blockquote":
      return e.childNodes.some(Cr);
    case "table":
      return e.childNodes.some(Jh);
    case "media":
    case "module":
      return !1;
  }
}
function Yh(e) {
  return e.childNodes.some(Cr);
}
function Jh(e) {
  return e.childNodes.some(Zh);
}
function Zh(e) {
  return e.childNodes.some(Cr);
}
function Qh(e) {
  switch (e.type) {
    case "text":
      return e.text.length > 0;
    case "lineBreak":
      return !1;
  }
}
var Ui = {};
Object.freeze(Ui);
function BD(e, t) {
  if (!e) return Ui;
  let n = e,
    r = {},
    o = !1;
  for (let i of t) {
    let a = n[i.id];
    a !== void 0 && ((r[i.id] = a), (o = !0));
  }
  return o ? r : Ui;
}
function Vr(e) {
  return e?.value !== void 0 && e?.value !== null;
}
function ED(e, t) {
  let n = e?.[t];
  return Vr(n) ? n.value : void 0;
}
function ex(e, { preserveNewLines: t = !1 } = {}) {
  return p(e.value)
    ? e.type !== "rich-text"
      ? e.value
      : t
        ? Uu(e.value)
        : Ki(e.value)
    : tx(e.value, { preserveNewLines: t });
}
function AD(e, t) {
  if (e != null) {
    if (e.value === null) return null;
    if (Vr(e)) return ex(e, t);
  }
}
function tx(e, { preserveNewLines: t }) {
  let n = $u(e);
  return t ? n : qu(n);
}
function Xu(e, t) {
  if (!t || !e || e.id === Tn) return null;
  for (; e;) {
    let n = t[e.id];
    if (n && Vr(n)) return n;
    e = e.fallback;
  }
  return null;
}
var Yu = "routeSegmentRoot";
var nx = new Set(["/404.html", "/404", "/404/"]),
  Ju = new Set(Array.from(nx).map((e) => e.replaceAll("/", "")));
var Zu = {
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
  Qu = {
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
function ed(e) {
  return p(e) && e in Zu;
}
var _D = Zu;
function rx(e) {
  return p(e) && e in Qu;
}
var KD = Qu;
function UD(e) {
  if (!p(e)) return !1;
  if (ed(e)) return !0;
  let [t, n] = td(e);
  return !!(t && n);
}
function td(e) {
  if (!p(e)) return [void 0, void 0];
  let t = e.split("-"),
    n = "",
    r;
  for (let o of t) {
    if (rx(o)) {
      r = o;
      continue;
    }
    if (!n) {
      n = o;
      continue;
    }
    n += "-" + o;
  }
  return [ed(n) ? n : void 0, r];
}
var ox = new Set(["ar", "dv", "fa", "he", "ks", "ps", "sd", "ug", "ur", "yi"]);
function ix(e) {
  return e.endsWith("-Arab") || e.includes("-Arab-");
}
function Sr(e) {
  if (ix(e)) return "rtl";
  let [t] = td(e);
  return t && ox.has(t) ? "rtl" : "ltr";
}
var nd = Symbol();
function _e(e) {
  let t,
    n = nd;
  return (...r) => {
    if (t && Js(t, r) && n !== nd) return n;
    t = r;
    let o = e(...r);
    return ((n = o), o);
  };
}
function $i(e, t) {
  let n = e.root.getDefaultLocale(),
    r = e.root.locales ?? Un();
  return t === "includeDrafts" ? ax(n, r) : sx(n, r);
}
function tw(e, t, n = "includeDrafts") {
  let r = $i(e, n),
    o = r[0];
  return (
    g(o, "Default locale should always exist"),
    t ? (r.find(({ id: i }) => i === t) ?? o) : o
  );
}
var ax = _e((e, t) => {
    let n = [e, ...t];
    return qi(n, { includeDrafts: !0 });
  }),
  sx = _e((e, t) => {
    let n = [e, ...t];
    return qi(n, { includeDrafts: !1 });
  });
function qi(e, { includeDrafts: t }) {
  let n = new Map(),
    r = new Map();
  for (let a of e) (n.set(a.id, a), a.fallback && r.set(a.id, a.fallback));
  let o = [],
    i = !t && Us.isOn("skipPublishingLocalesFallingBackToDraft");
  for (let a of e) {
    if ((!t && a.draft) || (i && od(a, n))) continue;
    let s = rd(a);
    if ((o.push(s), !a.fallback)) continue;
    let l = s,
      u = n.get(a.fallback),
      c = new Set();
    for (c.add(a.id); u && !c.has(u.id);) {
      c.add(u.id);
      let m = rd(u);
      ((l.fallback = m), (l = m));
      let f = r.get(u.id);
      u = f ? n.get(f) : void 0;
    }
  }
  return o;
}
function nw(e) {
  let t = new Map(e.map((n) => [n.id, n]));
  return e.filter((n) => !n.draft && od(n, t));
}
function od(e, t) {
  let n = new Set(),
    r = e;
  for (; r;) {
    if (n.has(r.id)) return !1;
    if ((n.add(r.id), r.draft)) return !0;
    r = r.fallback ? t.get(r.fallback) : void 0;
  }
  return !1;
}
function rd(e) {
  return { id: e.id, code: e.code, slug: e.slug, name: e.name, textDirection: Sr(e.code) };
}
var rw = { vekterLocalesToRouterLocales: qi };
var lx = "$";
function id(e) {
  let t = e.get(Yu);
  return (
    g(t, "RouteSegmentRootNode not found"),
    g(
      t.parentid === e.root.id,
      "RouteSegmentRootNode is not under the tree root. Parent id: " + t.parentid
    ),
    t
  );
}
function pw(e, t) {
  let n = $i(e, "excludeDrafts"),
    r = Object.fromEntries(n.map((l) => [l.id, {}])),
    o = new Map(),
    i = 0,
    a = () => `${lx}${i++}`,
    s = new Set();
  for (let l of t.children) ad(e, "", o, r, a, s, l, n);
  return { webPageSegmentReferencePathByWebPageId: o, localizedSegments: r };
}
function ad(e, t, n, r, o, i, a, s) {
  g(r[Gi], "dictionary should include default");
  let l = a.webPageId ? e.get(a.webPageId) : void 0,
    u = !!l && !l.isDraft && !i.has(l.id);
  u && i.add(l.id);
  let c;
  ux(a) ? (a.segment ? ((c = o()), (t = `${t}/${c}`)) : (t = `${t}/`)) : (t = `${t}/${a.segment}`);
  let m = u;
  for (let f of a.children) m = ad(e, t, n, r, o, i, f, s) || m;
  if (m && c) {
    r[Gi][c] = a.segment;
    for (let f of s) {
      let h = Xu(f, a.segmentLocalized);
      if (h?.value && h.value !== a.segment) {
        let T = f.id;
        (g(r[T], "localizedSegments should include all locales"), (r[T][c] = h.value));
      }
    }
  }
  return (u && a.webPageId && n.set(a.webPageId, t), m);
}
var ux = (e) => !(!!e.dataIdentifier || Ju.has(e.segment) || ji(e));
function sd(e, t) {
  let r = id(e).getRouteSegmentIdForWebPageId(t);
  return e.getNode(r);
}
function ld(e, t) {
  let n = dx(t);
  return n ? e.getNodeWithTrait(n, Zn) : null;
}
function dx(e) {
  if (!e) return null;
  let t = ke(e);
  return !Dt(t) || !Pe(t) || t.type !== "collection" ? null : t.localIdName;
}
var Nr = B(re(), 1);
var _t = B(oe(), 1);
function cx(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function Kt(e) {
  return !e._constraints || cx(e) ? !1 : e._constraints.enabled;
}
function px(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    v(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    v(n) && v(r) ? { width: n, height: r } : null
  );
}
function fx(e) {
  let t = px(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return v(n) && v(r) ? { x: n, y: r, ...t } : null;
}
function mx(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Kt(e) || r) return fx(e);
  let o = yx(e),
    i = hx(t),
    a = i ? { sizing: i, positioning: i, viewport: null } : null;
  return si.toRect(o, a, null, n, null);
}
function yx(e) {
  let { left: t, right: n, top: r, bottom: o, center: i, _constraints: a, size: s } = e,
    { width: l, height: u } = e;
  (l === void 0 && (l = s), u === void 0 && (u = s));
  let { aspectRatio: c, autoSize: m } = a,
    f = ai.quickfix({
      left: v(t),
      right: v(n),
      top: v(r),
      bottom: v(o),
      widthType: dn(l),
      heightType: dn(u),
      aspectRatio: c || null,
      fixedSize: m === !0,
    }),
    h = null,
    T = null,
    V = 0,
    P = 0;
  if (f.widthType !== 0 && typeof l == "string") {
    let R = parseFloat(l);
    l.endsWith("fr") ? ((V = 3), (h = R)) : l === "auto" ? (V = 2) : ((V = 1), (h = R / 100));
  } else l !== void 0 && typeof l != "string" && (h = l);
  if (f.heightType !== 0 && typeof u == "string") {
    let R = parseFloat(u);
    u.endsWith("fr")
      ? ((P = 3), (T = R))
      : u === "auto"
        ? (P = 2)
        : ((P = 1), (T = parseFloat(u) / 100));
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
      heightType: P,
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
var Yi = ((r) => (
    (r[(r.Unknown = 0)] = "Unknown"),
    (r[(r.Disabled = 1)] = "Disabled"),
    (r[(r.DisabledForCurrentLevel = 2)] = "DisabledForCurrentLevel"),
    r
  ))(Yi || {}),
  ud = Nr.default.createContext({ parentSize: 0 });
function hx(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function dd() {
  return Nr.default.useContext(ud).parentSize;
}
function cd(e) {
  return typeof e == "object";
}
var xx = (e) => {
  let t = dd(),
    { parentSize: n, children: r } = e,
    o = Nr.default.useMemo(() => ({ parentSize: n }), [gx(n), bx(n)]);
  return t === 1
    ? r
      ? (0, _t.jsx)(_t.Fragment, { children: r })
      : null
    : (0, _t.jsx)(ud.Provider, { value: o, children: r });
};
function gx(e) {
  return cd(e) ? e.width : e;
}
function bx(e) {
  return cd(e) ? e.height : e;
}
function Rr(e, t) {
  return (0, _t.jsx)(xx, { parentSize: t, children: e });
}
function pd(e) {
  let t = dd();
  return mx(e, t, !0);
}
function Ji({ width: e, height: t }) {
  return e === "auto" || e === "min-content" || t === "auto" || t === "min-content";
}
var Zi = {
  isImageObject: function (e) {
    return !e || typeof e == "string" ? !1 : typeof e == "object" && "src" in e;
  },
};
function Tx(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: o } = t,
    i = n ?? o,
    a = r && i ? r[i] : void 0;
  return (a && typeof a == "string" && (e = { ...e, src: a }), e);
}
function fd(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Zi.isImageObject(t)) return;
  let r = null;
  if ((ee(n) ? (r = { alt: "", src: n }) : (r = ie.get(t, null)), !!Zi.isImageObject(r)))
    return Tx(r, e);
}
var Qi = (e) => e instanceof As;
function Cx(e, t) {
  if (e.size < t) return;
  let r = Math.round(Math.random());
  for (let o of e.keys()) (++r & 1) !== 1 && e.delete(o);
}
function md(e, t, n, r) {
  let o = t.get(n);
  if (o) return o;
  Cx(t, e);
  let i = r(n);
  return (t.set(n, i), i);
}
var Pr = {
  hueRotate: (e, t) => b.toHslString(b.hueRotate(b(e), t)),
  setAlpha: (e, t) => b.toRgbString(b.alpha(b(e), t)),
  getAlpha: (e) => {
    let t = gn(e);
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
  hsvToHSLString: (e) => b.toHslString(b(zt(e.h, e.s, e.v, e.a))),
  hsvToHexValue: (e) => b.toHex(b(zt(e.h, e.s, e.v, e.a))).toUpperCase(),
  hsvToHex: (e) => b.toHexString(b(zt(e.h, e.s, e.v, e.a))).toUpperCase(),
  hsvToRgbString: (e) => b.toRgbString(b(zt(e.h, e.s, e.v, e.a))),
  hsvToString: (e) => zt(e.h, e.s, e.v),
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
var yd = (e) => {
  let t = 0,
    n,
    r;
  if (e.length === 0) return t;
  for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
  return t;
};
var Vx = /var\(.+\)/u,
  Sx = new Map();
function Nx(e, t) {
  let n = [e, t];
  return Vx.test(e) ? e : md(1e3, Sx, n, () => Pr.multiplyAlpha(e, t));
}
function ht(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((r) => ({ ...r, value: Nx(r.value, t) }))
  );
}
function Ut(e, t) {
  let n = 0;
  return (
    ht(e, t).forEach((r) => {
      n ^= yd(r.value) ^ r.position;
    }),
    n
  );
}
var Rx = ["stops"];
function $t(e) {
  return e && Rx.every((t) => t in e);
}
var Px = ["start", "end"];
function qt(e) {
  return e && Px.every((t) => t in e);
}
var kx = ["angle", "alpha"],
  kr = {
    isLinearGradient: (e) => q(e) && kx.every((t) => t in e) && (qt(e) || $t(e)),
    hash: (e) => e.angle ^ Ut(e, e.alpha),
    toCSS: (e, t, n) => {
      let r = ht(e, e.alpha),
        o = t !== void 0 ? t : e.angle,
        i = Math.round(o),
        a = r.map((s) => `${n?.(s.value) ?? s.value} ${s.position * 100}%`);
      return `linear-gradient(${i}deg, ${a.join(", ")})`;
    },
  };
var vx = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"],
  vr = {
    isRadialGradient: (e) => q(e) && vx.every((t) => t in e) && (qt(e) || $t(e)),
    hash: (e) =>
      e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Ut(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: n, widthFactor: r, heightFactor: o, centerAnchorX: i, centerAnchorY: a } = e,
        s = ht(e, n),
        l = s.map((u, c) => {
          let m = s[c + 1],
            f = u.position === 1 && m?.position === 1 ? u.position - 1e-4 : u.position;
          return `${t?.(u.value) ?? u.value} ${f * 100}%`;
        });
      return `radial-gradient(${r * 100}% ${o * 100}% at ${i * 100}% ${a * 100}%, ${l.join(", ")})`;
    },
  };
var Ix = ["alpha", "angle", "centerAnchorX", "centerAnchorY"],
  Dx = {
    isConicGradient: (e) => q(e) && Ix.every((t) => t in e) && (qt(e) || $t(e)),
    hash: (e) => e.centerAnchorX ^ e.centerAnchorY ^ e.angle ^ Ut(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: n, angle: r, centerAnchorX: o, centerAnchorY: i } = e,
        a = Math.round(r),
        l = ht(e, n)
          .map((u) => `${t?.(u.value) ?? u.value} ${u.position * 360}deg`)
          .join(", ");
      return `conic-gradient(from ${a}deg at ${o * 100}% ${i * 100}%, ${l})`;
    },
  };
var ea = ["color", "x", "y", "blur"],
  iL = { is: (e) => e && ea.every((t) => t in e) },
  ta = ["x", "y", "color", "inset", "blur", "spread"],
  hd = {
    is: (e) => e && ta.every((t) => t in e),
    toCSS: (e) =>
      `${e.inset ? "inset " : ""}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`,
  };
var xd = "0.000001px",
  na = ` translateZ(${xd})`,
  gd = vs() || Ps() || Is();
function bd(e) {
  e.willChange = "transform";
  let t = _.current() === _.canvas;
  gd && t && (e.translateZ = xd);
}
function Td(e) {
  ((e.willChange = "transform"), Cd(e, !0));
}
function dL(e, t) {
  (t
    ? (e.style.willChange || "") !== "transform" && (e.style.willChange = "transform")
    : e.style.removeProperty("will-change"),
    Cd(e.style, t));
}
function Cd(e, t) {
  let n = _.current() === _.canvas;
  if (!gd || !n) return;
  let r = (ee(e.transform) && e.transform) || "";
  t ? r.includes(na) || (e.transform = r + na) : (e.transform = r.replace(na, ""));
}
var Sd = B(re(), 1);
var fe = (e) => e;
function Vd(e, t, n, r = !0) {
  if (!e) return;
  let o = fe(e.style),
    i = n || o[t],
    a = () => {
      wx(i) && (o[t] = i);
    };
  ((o[t] = null), r ? Promise.resolve().then(a) : setTimeout(a, 0));
}
function wx(e) {
  return ee(e) || Oe(e) || Ms(e);
}
var Ir = (() => {
  class e extends Sd.Component {
    static defaultProps = {};
    static applyWillChange(n, r, o) {
      n.willChangeTransform && (o ? bd(r) : Td(r));
    }
    layerElement = null;
    setLayerElement = (n) => {
      this.layerElement = n;
    };
    shouldComponentUpdate(n, r) {
      return n._needsMeasure || this.state !== r || !ce(this.props, n);
    }
    componentDidUpdate(n) {
      fe(this.props).clip &&
        fe(this.props).radius === 0 &&
        fe(n).radius !== 0 &&
        Vd(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return e;
})();
var Nd = B(re(), 1);
function ra() {
  let e = _.current();
  return e === _.canvas || e === _.export;
}
function VL() {
  let [e] = (0, Nd.useState)(() => ra());
  return e;
}
var Rd = B(re(), 1),
  Pd = Rd.default.createContext(void 0);
var oa;
function kd() {
  return oa !== void 0;
}
function RL(e) {
  oa = e;
}
function vd(e, t) {
  oa?.(e, t);
}
var Cn = B(re(), 1);
var wd = B(oe(), 1),
  Mx = "style[data-framer-css-ssr-minified]",
  Bx = (() => {
    if (!Qe()) return new Set();
    let e = document.querySelector(Mx)?.getAttribute("data-framer-components");
    return e ? new Set(e.split(" ")) : new Set();
  })(),
  LL = "data-framer-css-ssr";
function Id() {
  return Es() ? _.preview : _.current();
}
var Dd = (e, t, n) => {
    if (kd() && n !== void 0 && !et(t)) {
      let r = Array.isArray(t)
        ? t
        : t.split(`
`);
      vd(n, r.filter(Boolean));
    }
    return Cn.default.forwardRef((r, o) => {
      let { sheet: i, cache: a } = Cn.default.useContext(Pd) ?? {},
        s = n;
      if (!Qe()) {
        et(t) && (t = t(Id(), r));
        let l = Array.isArray(t)
          ? t.join(`
`)
          : t;
        Ex.add(l, s);
      }
      return (
        (0, Cn.useInsertionEffect)(() => {
          if (s && Bx.has(s)) return;
          (et(t)
            ? t(Id(), r)
            : Array.isArray(t)
              ? t
              : t.split(`
`)
          ).forEach((u) => u && _n(u, i, a));
        }, []),
        (0, wd.jsx)(e, { ...r, ref: o })
      );
    });
  },
  ia = class {
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
  Ex = new ia();
var Ax, Dr;
function Fx() {
  return (Ax ??= import("https://app.framerstatic.com/libraryCSSRules-4NPNTVEO.mjs").then((e) => {
    if (((Dr = e.getCombinedCSSRules), Qe())) for (let t of Dr()) _n(t, void 0);
    return e;
  }));
}
function Ox() {
  return Dr ? Dr() : (Qe() && Fx(), []);
}
function Ld(e) {
  return Dd(e, Ox, "framer-lib-combinedCSSRules");
}
function Md(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
        ? `translateX(-50%) ${n}`
        : e === "y"
          ? `translateY(-50%) ${n}`
          : n || "none";
}
var ue = B(re(), 1);
var Yt = B(oe(), 1),
  Xt = ue.default.createContext({
    getLayoutId: (e) => null,
    persistLayoutIdCache: () => {},
    top: !1,
    enabled: !0,
  });
function WL({ children: e }) {
  if ((0, ue.useContext)(Xt).top) return (0, Yt.jsx)(Yt.Fragment, { children: e });
  let n = (0, ue.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = (0, ue.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    o = (0, ue.useRef)(new Set()).current,
    i = (0, ue.useCallback)(({ id: l, name: u, duplicatedFrom: c }) => {
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
        for (let Z = c.length - 1; Z >= 0; Z--) {
          let de = c[Z];
          vt(!!de, "duplicatedId must be defined");
          let ae = n.current[m][de],
            Je = n.current.byLastId[de];
          if (Je && !T) {
            let ni = n.current.byLayoutId[Je],
              ri = !ni || ni === u;
            Je && !o.has(Je) && (!u || ri) && (T = [Je, de]);
          }
          let ot = ae ? n.current.byLayoutId[ae] : void 0,
            xs = !ot || ot === u;
          if (ae && !o.has(ae) && (!u || xs))
            return ((r.current[m][l] = ae), (r.current.byLastId[de] = ae), o.add(ae), ae);
        }
      let V = n.current.byLastId[l];
      if (V && !o.has(V)) return (o.add(V), (r.current.byId[l] = V), V);
      if (T) {
        let [Z, de] = T;
        return ((r.current[m][l] = Z), (r.current.byLastId[de] = Z), o.add(Z), Z);
      }
      let P = n.current.byPossibleId[l];
      if (P && !o.has(P)) return (o.add(P), (r.current.byId[l] = P), P);
      let y = c?.[0],
        C = u || y || l,
        R = (n.current.count[m][C] ?? -1) + 1,
        { layoutId: j, value: $ } = Wx(C, R, o);
      if (((n.current.count[m][C] = $), (r.current[m][l] = j), c?.length && !u)) {
        let Z = c[c.length - 1];
        if ((Z && (r.current.byLastId[Z] = j), c.length > 1))
          for (let de = 0; de < c.length - 1; de++) {
            let ae = c[de];
            ae !== void 0 && (r.current.byPossibleId[ae] || (r.current.byPossibleId[ae] = j));
          }
      }
      return ((r.current.byLayoutId[j] = h), o.add(j), j);
    }, []),
    a = (0, ue.useCallback)(() => {
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
    s = (0, ue.useRef)({ getLayoutId: i, persistLayoutIdCache: a, top: !0, enabled: !0 }).current;
  return (0, Yt.jsx)(Xt.Provider, { value: s, children: e });
}
function Wx(e, t, n) {
  let r = t,
    o = r ? `${e}-${r}` : e;
  for (; n.has(o);) (r++, (o = `${e}-${r}`));
  return { layoutId: o, value: r };
}
function zL({ enabled: e = !0, ...t }) {
  let n = (0, ue.useContext)(Xt),
    r = (0, ue.useMemo)(() => ({ ...n, enabled: e }), [e]);
  return (0, Yt.jsx)(Xt.Provider, { ...t, value: r });
}
var Bd = B(re(), 1),
  Vn = Bd.default.createContext(!1);
var Sn = B(re(), 1);
var aa = B(re(), 1);
function sa() {
  let [e, t] = aa.default.useState(0);
  return aa.default.useCallback(() => t((n) => n + 1), []);
}
var wr = B(re(), 1),
  Lr = typeof document < "u" ? wr.useLayoutEffect : wr.useEffect;
var ua = B(oe(), 1),
  Ed = 200,
  la = class {
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
  Mr = Qe() ? new la() : void 0;
function qL(e) {
  let t = sa();
  (0, Sn.useEffect)(() => {
    let n = e?.current;
    if (n)
      return (
        Mr?.observeElementWithCallback(e.current, t),
        () => {
          Mr?.unobserve(n);
        }
      );
  }, [e, t]);
}
function zx(e) {
  let t = sa(),
    n = Sn.default.useRef(null);
  function r(o) {
    (o.width === 0 && o.height === 0) ||
      ((!n.current || o.height !== n.current.height || o.width !== n.current.width) &&
        ((n.current = { width: o.width, height: o.height }), t()));
  }
  return (
    Lr(() => {
      if (!e.current) return;
      let { offsetWidth: o, offsetHeight: i } = e.current;
      return (
        r({ width: o, height: i }),
        Mr.observeElementWithCallback(e.current, r),
        () => {
          e.current && Mr.unobserve(e.current);
        }
      );
    }, []),
    n.current
  );
}
var da = "data-framer-size-compatibility-wrapper",
  XL = (e) => (t) => {
    let n = Sn.default.useRef(null),
      r = zx(n),
      o = { [da]: !0 },
      i = !!r,
      a = t.width ?? Ed,
      s = t.height ?? Ed;
    return (0, ua.jsx)("div", {
      style: { width: "100%", height: "100%", pointerEvents: "none" },
      ref: n,
      ...o,
      children: i && (0, ua.jsx)(e, { ...t, width: r?.width ?? a, height: r?.height ?? s }),
    });
  };
function Ad(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(da)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Fd)
    .map(Od);
}
function Fd(e) {
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
function Od(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents")
    return e;
  let t = [...e.children].find(Fd);
  return t ? Od(t) : e;
}
var Wd = B(re(), 1);
function Nn(e) {
  return e.replace(/^id_/u, "").replace(/\\/gu, "");
}
function zd(e, t, n = () => [], r = {}) {
  let { id: o, visible: i, _needsMeasure: a } = e,
    { skipHook: s = !1 } = r,
    l = (0, Wd.useContext)(Vn),
    u = _.current() === _.canvas;
  Lr(() => {
    !u ||
      l ||
      s ||
      (t.current && o && i && a && se.queueMeasureRequest(Nn(o), t.current, n(t.current)));
  });
}
function aM(e) {
  let t = e.closest("[data-framer-component-container]");
  t && se.queueMeasureRequest(Nn(t.id), t, Ad(t));
}
var ve = B(re(), 1);
function Hx(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var Gx =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
  Hd = Hx(
    (e) =>
      Gx.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  );
var Fe = B(re(), 1);
var xt = { borderRadius: "inherit", cornerShape: "inherit" };
var Gd = [1, 2, 2.2],
  jx = [512, 1024, 2048, 4096];
function jd(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    o = 0;
  t > e && ((n = t), (r = e), (o = 1));
  let i = n / r,
    a = [];
  for (let s of jx) {
    if (n <= s) return a;
    a.push({ maxSideSize: s, width: o === 0 ? s : Math.trunc(s / i) });
  }
  return a;
}
function ca(e, t) {
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
var _x = 512;
function Kx(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let o of n) {
    if (o.width < _x) continue;
    let i = ca(e, o.maxSideSize);
    r.push(`${i} ${o.width}w`);
  }
  return (r.push(`${ca(e, null)} ${t.pixelWidth}w`), r.join(", ") || void 0);
}
function Ux(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    o = Math.max(t.pixelWidth, t.pixelHeight),
    i = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let a of Gd) {
    let s = Math.round(o * a * i),
      l = ca(e, s);
    r.push({ src: l, scale: a });
  }
  return r;
}
function _d(e, t, n) {
  if (!["auto", "lossless"].includes(t.preferredSize ?? "")) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Ux(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [o, ...i] = r;
    return { src: o?.src, srcSet: i.map(({ src: a, scale: s }) => `${a} ${s}x`).join(", ") };
  } else {
    let r = jd(t.pixelWidth, t.pixelHeight);
    return { src: n, srcSet: Kx(n, t, r) };
  }
}
var Ke = B(oe(), 1),
  pa = { position: "absolute", ...xt, top: 0, right: 0, bottom: 0, left: 0 };
function $x() {
  return {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "64px auto",
    backgroundImage: Bs(se.imagePlaceholderSvg),
  };
}
function qx(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function Kd(e, t) {
  let n = e ?? "center",
    r = t ?? "center";
  return n === "center" && r === "center" ? "center" : n + " " + r;
}
function fa(e) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    ...xt,
    objectPosition: Kd(e.positionX, e.positionY),
    objectFit: qx(e.fit),
  };
}
function Xx(e) {
  let t = Fe.default.useRef(e ? "auto" : "async"),
    n = (0, Fe.useCallback)((i) => {
      ((t.current = "auto"), (i.decoding = "auto"));
    }, []),
    r = (0, Fe.useCallback)(
      (i) => {
        n(i.currentTarget);
      },
      [n]
    ),
    o = (0, Fe.useCallback)(
      (i) => {
        i?.complete && n(i);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: o };
}
function Yx({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: o,
  avoidAsyncDecoding: i,
}) {
  let a = se.useImageSource(e, t, n),
    s = fa(e),
    { decoding: l, onImageLoad: u, onImageMount: c } = Xx(i),
    { srcSet: m, src: f } =
      "srcSet" in e ? { src: a, srcSet: e.srcSet } : _d(e.nodeFixedSize, e, a);
  return (0, Ke.jsx)("img", {
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
function Jx({ image: e, containerSize: t, nodeId: n }) {
  let r = Fe.default.useRef(null),
    o = se.useImageElement(e, t, n),
    i = fa(e);
  return (
    Fe.default.useLayoutEffect(() => {
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
    (0, Ke.jsx)("div", { ref: r, style: { display: "contents", ...xt } })
  );
}
function Zx({ nodeId: e, image: t, containerSize: n }) {
  let r = Fe.default.useRef(null),
    o = se.useImageSource(t, n, e);
  return (
    Fe.default.useLayoutEffect(() => {
      let i = r.current;
      if (i === null) return;
      let a = fa(t);
      se.renderOptimizedCanvasImage(i, o, a, e);
    }, [e, t, o]),
    (0, Ke.jsx)("div", { ref: r, style: { display: "contents", ...xt } })
  );
}
function Ud({ layoutId: e, image: t, ...n }) {
  e && (e += "-background");
  let r = null,
    o = !!e,
    i = null;
  if (ee(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let s = Oe(t.backgroundSize) ? t.backgroundSize : 1,
        l = { width: Math.round(s * t.pixelWidth), height: Math.round(s * t.pixelHeight) },
        u = Zs(s * (t.pixelWidth / 2)),
        c = se.useImageSource(t, l);
      ((r = {
        ...pa,
        backgroundImage: `url(${c})`,
        backgroundRepeat: "repeat",
        backgroundPosition: Kd(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${u}px auto`,
      }),
        (i = null),
        (o = !0));
    } else
      _.current() !== _.canvas
        ? (i = (0, Ke.jsx)(Yx, { image: t, avoidAsyncDecoding: _.current() === _.export, ...n }))
        : se.canRenderOptimizedCanvasImage(se.useImageSource(t))
          ? (i = (0, Ke.jsx)(Zx, { image: t, ...n }))
          : (i = (0, Ke.jsx)(Jx, { image: t, ...n }));
  let a = i ? pa : (r ?? { ...pa, ...$x() });
  return o
    ? (0, Ke.jsx)(tt.div, {
        layoutId: e,
        style: a,
        "data-framer-background-image-wrapper": !0,
        children: i,
      })
    : (0, Ke.jsx)("div", { style: a, "data-framer-background-image-wrapper": !0, children: i });
}
var ma = B(oe(), 1);
function Qx(e, t, n = !0) {
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
function $d(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...xt,
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), (0, ma.jsx)(tt.div, { style: n }))
    : (Qx(e, n, !1), (0, ma.jsx)(tt.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function qd(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Xd(e) {
  return e && e !== "search" && e !== "slot" && e !== "template" ? tt[e] : tt.div;
}
var eg = Rs();
function tg(e, t, n) {
  ((e["data-framer-layout-hint-center-x"] = t === !0 || t === "x" ? !0 : void 0),
    (e["data-framer-layout-hint-center-y"] = t === !0 || t === "y" ? !0 : void 0),
    (e["data-framer-layout-hint-x"] = n?.x),
    (e["data-framer-layout-hint-y"] = n?.y));
}
function Yd(e, t) {
  let n = {};
  return (
    _.current() !== _.canvas ||
      tg(n, eg ? e : void 0, {
        x: typeof t?.x == "number" ? t.x : void 0,
        y: typeof t?.y == "number" ? t.y : void 0,
      }),
    n
  );
}
var Br = B(re(), 1);
function Er(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return n
    ? ((t = Br.default.Children.map(t, (r) =>
        Br.default.isValidElement(r) ? Br.default.cloneElement(r, { _forwardedOverrides: n }) : r
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
var Ar = B(re(), 1);
function Fr(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: o, duplicatedFrom: i, __fromCodeComponentNode: a = !1, drag: s } = e,
    { getLayoutId: l, enabled: u } = (0, Ar.useContext)(Xt);
  return (0, Ar.useMemo)(() => {
    if (!u) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !o || a)) return;
    let m = c || l({ id: o, name: r, duplicatedFrom: i });
    if (m) return n ? `${m}-${n}` : m;
  }, [u]);
}
function Jd({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || Qi(t)
      ? (n.backgroundColor = t)
      : b.isColorObject(e) && (n.backgroundColor = e.initialValue || b.toRgbString(e))
    : e &&
      ((e = ie.get(e, null)),
      typeof e == "string" || Qi(e)
        ? (n.background = e)
        : kr.isLinearGradient(e)
          ? (n.background = kr.toCSS(e))
          : vr.isRadialGradient(e)
            ? (n.background = vr.toCSS(e))
            : b.isColorObject(e) && (n.backgroundColor = e.initialValue || b.toRgbString(e)));
}
function W(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Zd(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Qd(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function ec(e) {
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
    Fs(n)
      ? (t.cornerShape = Os(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    W(e, "size", t),
    W(e, "width", t),
    W(e, "height", t),
    W(e, "minWidth", t),
    W(e, "minHeight", t),
    W(e, "top", t),
    W(e, "right", t),
    W(e, "bottom", t),
    W(e, "left", t),
    W(e, "position", t),
    W(e, "overflow", t),
    W(e, "opacity", t),
    e._border?.borderWidth || W(e, "border", t),
    W(e, "borderRadius", t),
    W(e, "radius", t, "borderRadius"),
    W(e, "color", t),
    W(e, "shadow", t, "boxShadow"),
    W(e, "x", t),
    W(e, "y", t),
    W(e, "z", t),
    W(e, "rotate", t),
    W(e, "rotateX", t),
    W(e, "rotateY", t),
    W(e, "rotateZ", t),
    W(e, "scale", t),
    W(e, "scaleX", t),
    W(e, "scaleY", t),
    W(e, "skew", t),
    W(e, "skewX", t),
    W(e, "skewY", t),
    W(e, "originX", t),
    W(e, "originY", t),
    W(e, "originZ", t),
    Jd(e, t),
    t
  );
}
var Ue = B(oe(), 1);
function ng(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof fe(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var tc = [
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
  rg = new Set([...tc, ...tc.map((e) => `${e}Capture`)]);
function og(e) {
  if (e.drag) return "grab";
  for (let t in e) if (rg.has(t)) return "pointer";
}
var ya = "overflow";
function ig(e) {
  return nc(e) ? !0 : e.style ? !!nc(e.style) : !1;
}
function nc(e) {
  return ya in e && (e[ya] === "scroll" || e[ya] === "auto");
}
function Or(e) {
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
    T = Ce(e.minWidth),
    V = Ce(e.minHeight),
    P = Ce(e.maxWidth),
    y = Ce(e.maxHeight);
  return {
    top: Ce(n),
    left: Ce(t),
    bottom: Ce(r),
    right: Ce(o),
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
var rc = { x: 0, y: 0, width: 200, height: 200 };
function ag(e) {
  let t = (0, ve.useContext)(Vn),
    { style: n, _initialStyle: r, __fromCanvasComponent: o, size: i } = e,
    a = Or(e),
    s = pd(a),
    l = {
      display: "block",
      flex: n?.flex ?? "0 0 auto",
      userSelect: _.current() !== _.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let u = !ng(e) && !e.__fromCanvasComponent && !ig(e),
    c = e.style ? !("pointerEvents" in e.style) : !0;
  u && c && (l.pointerEvents = "none");
  let f = ve.default.Children.count(e.children) > 0 &&
      ve.default.Children.toArray(e.children).every(
        (y) => typeof y == "string" || typeof y == "number"
      ) && { display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" },
    h = ec(e);
  (i === void 0 && !o && (Zd(h) || (l.width = rc.width), Qd(h) || (l.height = rc.height)),
    a.minWidth !== void 0 && (l.minWidth = a.minWidth),
    a.minHeight !== void 0 && (l.minHeight = a.minHeight));
  let T = {};
  (Kt(a) &&
    s &&
    !Ji(e) &&
    (T = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, r, h, T, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Ir.applyWillChange(e, l, !0));
  let V = l;
  l.transform || (V = { x: 0, y: 0, ...l });
  let P = ra();
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
var sg = new Set([
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
function lg(e) {
  let t = {};
  for (let n in e)
    (Ws(n) || Hd(n)) && !sg.has(n)
      ? (t[n] = fe(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof fe(e)[n] != "boolean" && !e.transition && (t.transition = fe(e)[n]));
  return t;
}
function ug(e) {
  return "data-framer-name" in e;
}
var dg = (0, ve.forwardRef)(function (t, n) {
    let { name: r, center: o, border: i, _border: a, __portal: s } = t,
      { props: l, children: u } = Er(t),
      c = lg(l),
      m = Fr(t),
      f = og(t),
      h = (0, ve.useRef)(null),
      T = n ?? h,
      V = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": f,
        "data-framer-highlight": f === "pointer" ? !0 : void 0,
        "data-layoutid": m,
        "data-framer-offset-parent-id": fe(t)["data-framer-offset-parent-id"],
      };
    !ug(t) && r && (fe(V)["data-framer-name"] = r);
    let [P, y] = ag(l),
      C = Or(l),
      R = Ji(C),
      j = o && !(y && !R && Kt(C)) ? o : void 0;
    (j
      ? c.transformTemplate || (c.transformTemplate = Md(o))
      : c.transformTemplate || (c.transformTemplate = void 0),
      Object.assign(V, Yd(j, l.style)),
      zd(t, T));
    let $ = fd(t),
      Z = (0, ve.useContext)(Vn),
      de = pg(l, C, y, Z),
      ae = Rr(
        (0, Ue.jsxs)(Ue.Fragment, {
          children: [
            $
              ? (0, Ue.jsx)(Ud, {
                  alt: t.alt ?? "",
                  image: $,
                  containerSize: y ?? void 0,
                  nodeId: t.id && Nn(t.id),
                  layoutId: m,
                })
              : null,
            u,
            (0, Ue.jsx)($d, { ...a, border: i, layoutId: m }),
          ],
        }),
        de
      ),
      Je = Xd(t.as),
      ot = qd($);
    return (
      t.fitImageDimension &&
        ot &&
        ((P[t.fitImageDimension] = "auto"), (P.aspectRatio = ot.width / ot.height)),
      (0, Ue.jsxs)(Je, { ...V, ...c, layoutId: m, style: P, ref: T, children: [ae, s] })
    );
  }),
  cg = (0, ve.forwardRef)(function (t, n) {
    let { visible: r = !0 } = t;
    return r ? (0, Ue.jsx)(dg, { ...t, ref: n }) : null;
  }),
  oc = Ld(cg);
function pg(e, t, n, r) {
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
var fg = ["actionIdentifier", "identifier", "controls"];
function Wr(e) {
  return x(e) && fg.every((t) => t in e);
}
function TB(e) {
  return x(e) && "gamepadId" in e;
}
function CB(e, t) {
  if (!t.has(e.identifier)) return (t.add(e.identifier), e);
  let n = $s();
  return (t.add(n), { ...e, identifier: n });
}
var mg = ["start", "center", "end"];
function PB(e) {
  return p(e) ? mg.includes(e) : !1;
}
var yg = ["fixed", "minmax"];
function kB(e) {
  return p(e) ? yg.includes(e) : !1;
}
var hg = ["fixed", "auto", "fit"];
function vB(e) {
  return p(e) ? hg.includes(e) : !1;
}
var xg = "columnMasonry";
var gg = ["stack", "grid"],
  IB = {
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
  ic = "horizontal",
  ac = "center",
  sc = "center",
  lc = "layout";
function gt(e) {
  return lc in e;
}
function DB(e) {
  return p(e) ? gg.includes(e) : !1;
}
var bg = ["start", "end", "center"];
function Tg(e) {
  return k(e) ? !1 : F(e) ? !0 : ha(e) && bg.includes(e);
}
function wB(e) {
  return !gt(e) || e.layout !== "stack" || !e.stackDistribution ? !1 : Tg(e.stackDistribution);
}
function uc(e) {
  return gt(e) && !k(e.layout);
}
function LB(e) {
  return uc(e) && e.layout === "stack";
}
function Cg(e) {
  return uc(e) && e.layout === "grid";
}
function MB(e) {
  return Cg(e) && e.gridType === xg;
}
function BB(e) {
  return lc in e;
}
function Vg(e) {
  if (dc(e)) return e;
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
var zr = ["horizontal", "vertical"];
function dc(e) {
  return p(e) && zr.includes(e);
}
function EB(e) {
  if (!dc(e)) return e;
  switch (e) {
    case "horizontal":
      return "row";
    case "vertical":
      return "column";
    default:
      z(e);
  }
}
var Sg = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];
function Ng(e) {
  return p(e) && Sg.includes(e);
}
var Hr = ["start", "center", "end", "space-between", "space-around", "space-evenly"];
function ha(e) {
  return p(e) && Hr.includes(e);
}
function Gr(e) {
  if (!ha(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function Rg(e) {
  if (ha(e)) return e;
  if (Ng(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
var Pg = ["flex-start", "flex-end", "center"];
function cc(e) {
  return p(e) && Pg.includes(e);
}
var jr = ["start", "center", "end"];
function pc(e) {
  return p(e) ? jr.includes(e) : !1;
}
function kg(e) {
  if (pc(e)) return e;
  if (cc(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
function fc(e) {
  if (cc(e) || !pc(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function AB(e, t) {
  switch (e) {
    case "stackDirection":
      return Vg(t);
    case "stackDistribution":
      return Rg(t);
    case "stackAlignment":
      return kg(t);
    default:
      return t;
  }
}
function FB(e) {
  return !e || !gt(e) ? null : (e.layout ?? null);
}
var vg = ["sticky", "fixed", "absolute"],
  Ig = new Set(vg);
function zB(e) {
  return p(e) && Ig.has(e);
}
var HB = {
    position: void 0,
    positionStickyTop: void 0,
    positionStickyRight: void 0,
    positionStickyBottom: void 0,
    positionStickyLeft: void 0,
  },
  Dg = "position";
function Rn(e) {
  return !e || e.__unsafeIsSlotPropertyChildNode() ? !1 : Dg in e;
}
var UB = {
    carouselEffectEnabled: void 0,
    carouselEffectLoop: void 0,
    carouselEffectAutoPlay: void 0,
    carouselEffectInterval: void 0,
    carouselEffectSnap: void 0,
    carouselEffectTransition: void 0,
  },
  $B = {
    carouselEffectEnabled: !0,
    carouselEffectLoop: !0,
    carouselEffectAutoPlay: !1,
    carouselEffectInterval: 1.5,
    carouselEffectSnap: !0,
    carouselEffectTransition: void 0,
  },
  qB = { ...at, stiffness: 200, damping: 40 },
  wg = "carouselEffectEnabled";
function Lg(e) {
  return wg in e;
}
function xa(e) {
  return Mg(e) && e.carouselEffectEnabled === !0;
}
function ga(e) {
  return Rn(e) && e.position !== void 0 && e.cache.carouselAncestorId === e.parentid;
}
function Mg(e) {
  return !(
    !Lg(e) ||
    !gt(e) ||
    e.layout !== "stack" ||
    Bg(e) ||
    e.stackWrapEnabled ||
    ("tickerEffectEnabled" in e && e.tickerEffectEnabled === !0)
  );
}
function Bg(e) {
  return !!e.cache.carouselAncestorId;
}
function XB(e) {
  return !!(e.cache.carouselAncestorId && e.parentid === e.cache.carouselAncestorId && !ga(e));
}
var ba = ["default", "reverse"],
  QB = {
    tickerEffectEnabled: void 0,
    tickerEffectVelocity: void 0,
    tickerEffectHoverModifier: void 0,
    tickerEffectDirectionModifier: void 0,
    tickerEffectDraggable: void 0,
  },
  eE = {
    tickerEffectEnabled: !0,
    tickerEffectVelocity: 100,
    tickerEffectHoverModifier: 100,
    tickerEffectDirectionModifier: "default",
    tickerEffectDraggable: !1,
  },
  Eg = "tickerEffectEnabled";
function Ag(e) {
  return Eg in e;
}
function tE(e) {
  return Fg(e) && e.tickerEffectEnabled === !0;
}
function Fg(e) {
  return !(
    !Ag(e) ||
    !gt(e) ||
    e.layout !== "stack" ||
    Og(e) ||
    e.stackWrapEnabled ||
    ("carouselEffectEnabled" in e && e.carouselEffectEnabled === !0)
  );
}
function Og(e) {
  return !!e.cache.tickerAncestorId;
}
function nE(e) {
  return !!(e.cache.tickerAncestorId && e.parentid === e.cache.tickerAncestorId);
}
function rE(e) {
  return e === "default" || e === "reverse";
}
function mc(e) {
  switch (e) {
    case "default":
      return "Default";
    case "reverse":
      return "Reverse";
  }
}
var Wg = "usesDOMRect";
function yc(e) {
  return Wg in e;
}
var zg = ["start", "center", "end"],
  _r = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  Ta = [..._r, "all"];
function hc(e) {
  return S(e) ? `Span ${e}` : "Span all";
}
var xc = _r.map(hc),
  gc = Ta.map(hc);
function sE(e) {
  return e === "all" ? !0 : S(e) && e > 0;
}
function lE(e) {
  return S(e) && e > 0;
}
function uE(e) {
  return p(e) ? zg.includes(e) : !1;
}
var dE = {
    gridItemHorizontalAlignment: void 0,
    gridItemVerticalAlignment: void 0,
    gridItemColumnSpan: void 0,
    gridItemRowSpan: void 0,
  },
  Hg = "gridItemHorizontalAlignment";
function cE(e) {
  return Hg in e;
}
var mE = { width: 100, height: 100 },
  yE = { width: 1, height: 1 },
  Gg = "width";
function bc(e) {
  return tr(e) ? !1 : Gg in e;
}
var Cc = [
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
  jg = new RegExp(`^([+-]?(?:\\d*\\.)?\\d+(?:e[+-]?\\d+)?)(${Cc.join("|")})?$`, "i"),
  _g = new Map(Cc.map((e) => [e.toLowerCase(), e]));
function Jt(e, t) {
  let n = e.match(jg);
  if (!n) return [NaN, void 0];
  let [, r, o] = n,
    i = parseFloat(r);
  if (Number.isNaN(i)) return [NaN, void 0];
  if (!o) return [i, t];
  let a = _g.get(o.toLowerCase());
  if (!a) throw Error(`unrecognized CSS unit ${o}`);
  return [i, a];
}
function gE(e) {
  if (!p(e)) return !1;
  let [t] = Jt(e);
  return !Number.isNaN(t);
}
function Tc(e, t) {
  return `${e}${t}`;
}
function bE(e, { parentSize: t, viewportSize: n }) {
  if (k(e)) return;
  if (S(e)) return e;
  let [r, o] = Jt(e);
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
function TE(e) {
  if (!p(e)) return [void 0, void 0, void 0, void 0];
  let t = e.split(" ");
  if (t.length === 1) {
    let [n] = Jt(t[0]),
      r = Tc(n, "px");
    return [r, r, r, r];
  }
  return t.length !== 4
    ? [void 0, void 0, void 0, void 0]
    : t.map((n) => {
        let [r] = Jt(n);
        return Tc(r, "px");
      });
}
var Kg = /(?<value>\d{1,5})px/gu;
function CE(e, t) {
  return e.replace(Kg, (n, r) => `${t(Number(r))}px`);
}
function PE(e, t) {
  let n = Ca(e, t);
  return !Ve(n);
}
function Ca(e, t) {
  let n = Ug(e, t);
  return n && lt(n) ? n : null;
}
function Ug(e, t, n = !0) {
  let r = e.get(t);
  if (!r) return null;
  if (he(r)) return r;
  if (n) {
    let i = null;
    if (
      (Ft(r)
        ? (i = r.cache.replicaAncestorId)
        : r.cache.masterAncestorId && (i = r.cache.masterAncestorId),
      i)
    ) {
      let a = e.getNode(i);
      return !a || !he(a) ? null : a;
    }
  }
  let o = e.getGroundNodeFor(r);
  return !o || !he(o) ? null : o;
}
function kE(e, t) {
  return t.parentid && lt(e.get(t.parentid));
}
var Kr = ["cache", "treeState", "mutable", "update"],
  $g = new Set(Kr);
function IE(e) {
  return $g.has(e);
}
var Vc = new Set([...Kr, "transient"]);
var EE = { repeatArray: void 0, repeatArrayTransforms: void 0 },
  qg = "repeatArray";
function Sc(e) {
  return !(!e || !(qg in e) || he(e) || Be(e));
}
function Zt(e) {
  return !!e && Sc(e) && !!e.repeatArray;
}
function Xg(e, t) {
  return e.getNodeWithTrait(t.getPrimaryId(), Sc)?.repeatArray;
}
function AE(e, t) {
  let n = Xg(e, t);
  if (n) return $l("array", n, t.repeatArrayTransforms ?? []);
}
var Va = "element",
  Nc = "collection",
  Rc = "collectionItemId",
  Pc = "pathVariables",
  Sa = "framer/page-link,";
function Ur(e) {
  return ee(e) && e.startsWith(`data:${Sa}`);
}
function WE(e = null, t = {}) {
  let n = e || "none",
    r = new URL(`data:${Sa}${n}`);
  return (
    t.element && r.searchParams.append(Va, t.element),
    t.collectionItem &&
      (r.searchParams.append(Nc, t.collectionItem.collection),
      r.searchParams.append(Rc, t.collectionItem.collectionItemId),
      r.searchParams.append(Pc, new URLSearchParams(t.collectionItem.pathVariables).toString())),
    r.href
  );
}
function Na(e) {
  if (Ur(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(Sa.length),
        r = t.searchParams,
        o = r.has(Va) ? r.get(Va) : void 0,
        i,
        a = r.get(Nc),
        s = r.get(Rc),
        l = r.get(Pc);
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
function zE(e) {
  return !Ur(e);
}
function HE(e, t, n) {
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
    let l = Na(s);
    if (!l?.target) return !1;
    ((r = l.target), (o = l.element ?? void 0), (i = l.collectionItem?.pathVariables));
  }
  let a = o ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, o, Object.assign({}, n, i), a), !0);
}
function Yg(e, t = 0) {
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
function Jg(e, t) {
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
function Pn(e) {
  let t = Yg(e);
  return Jg(e, t);
}
var $r = "--token-";
function qr(e) {
  return e ? e.slice($r.length) : null;
}
function Xr(e) {
  let { customProperty: t } = Pn(e);
  return qr(t);
}
function $e(e) {
  return typeof e != "string" ? !1 : e.trim().startsWith(`var(${$r}`);
}
function Yr(e) {
  let { customProperty: t, fallback: n } = Pn(e);
  if (t && n) return `var(${t}, ${n})`;
  if (t) return `var(${t})`;
}
function Jr(e, t) {
  if (!$e(e)) return;
  let n = Xr(e);
  if (n) return t[n];
}
function qE(e) {
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
function XE(e) {
  return e > 0 ? "any" : "__legacy";
}
function YE(e) {
  switch (e) {
    case "any":
    case "auto":
      return !0;
    case "any-prefer-fixed":
    case "fixed":
    case "__legacy":
      return !1;
    default:
      z(e);
  }
}
function JE(e) {
  switch (e) {
    case "any":
    case "any-prefer-fixed":
    case "auto":
      return !0;
    case "fixed":
    case "__legacy":
      return !1;
    default:
      z(e);
  }
}
function ZE(e) {
  switch (e) {
    case "any":
    case "any-prefer-fixed":
    case "fixed":
    case "__legacy":
      return !0;
    case "auto":
      return !1;
    default:
      z(e);
  }
}
function QE(e) {
  let t = e.framerContractVersion;
  if (!t) return 0;
  let n = parseInt(t, 10);
  return !Number.isFinite(n) || n < 0 ? 0 : n;
}
function eA(e, t) {
  return e?.[t] !== void 0;
}
var Zg = "getBreakpointValues";
function rA(e) {
  return e ? Zg in e : !1;
}
var Qg = "min",
  eb = "max",
  tb = "canvasClassName";
function nb(e) {
  return x(e)
    ? Qg in e
      ? S(e.min)
      : eb in e
        ? S(e.max)
        : tb in e
          ? p(e.canvasClassName)
          : !1
    : !1;
}
function kc(e) {
  if (!x(e)) return !1;
  for (let t in e) {
    let n = e[t];
    if (nb(n)) return !0;
  }
  return !1;
}
function Qr(e, t) {
  if (!k(e))
    for (let n in e) {
      let r = e[n],
        o = r?.min ?? 0,
        i = r?.max ?? 1 / 0;
      if (t >= o && t <= i) return n;
    }
}
var cA = { layoutTemplateIdentifierOverride: void 0 },
  ob = "layoutTemplateIdentifier";
function vc(e) {
  return e ? ob in e : !1;
}
function Ic(e, t) {
  if (!t || !lt(t)) return;
  let n = e.getScopeNodeFor(t);
  if (vc(n)) return n.layoutTemplateIdentifier;
}
function pA(e) {
  return !!(vc(e) && e.layoutTemplateIdentifier);
}
function Dc(e) {
  return !e || !yc(e) ? !1 : !!e.usesLayoutTemplateRectForModuleIdentifierCached();
}
function ib(e, t) {
  let n = e.framerDefaultVariant,
    r = e.framerBreakpoints;
  if (!r) return n;
  let o = JSON.parse(r);
  return Qr(o, t) ?? n;
}
function fA(e, t, n) {
  let r = t.componentForIdentifier(e)?.annotations;
  if (r) return ib(r, n);
}
var Ra = "$control__";
function Pa(e) {
  return e.startsWith(Ra);
}
function yA(e) {
  return e.substring(Ra.length);
}
function ab(e) {
  return `${Ra}${e}`;
}
function hA(e) {
  let t = {};
  for (let n of Object.keys(e)) {
    let r = e[n];
    t[ab(n)] = r;
  }
  return t;
}
function xA(e) {
  for (let t in e) if (Pa(t)) return !0;
  return !1;
}
var eo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  Ie = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
function wc(e) {
  let t = Ks(e),
    n = eo.charAt(t % eo.length);
  for (t = Math.floor(t / eo.length); t > 0;)
    ((n += Ie.charAt(t % Ie.length)), (t = Math.floor(t / Ie.length)));
  return n;
}
function ge() {
  return qe(eo) + qe(Ie) + qe(Ie) + qe(Ie) + qe(Ie) + qe(Ie) + qe(Ie) + qe(Ie) + qe(Ie);
}
function qe(e) {
  return e.charAt(Math.floor(Math.random() * e.length));
}
function Lc(e) {
  let t = {};
  for (let n in e) {
    let r = e[n];
    k(r) || (t[n] = r);
  }
  return t;
}
function DA(e) {
  for (let t in e) {
    let n = e[t];
    if (n) return n;
  }
}
var va = "webPage",
  sb = "webPageId",
  Ia = "url",
  lb = "url";
function bt(e) {
  return x(e) && "type" in e && (e.type === va || e.type === Ia);
}
function ka(e) {
  return bt(e) && e.type === Ia;
}
function Qt(e) {
  return bt(e) && e.type === va;
}
function ub(e) {
  if (lb in e) return Ia;
  if (sb in e) return va;
  throw new Error("Link: Cannot infer Link type from link provided without a type.");
}
function Mc(e) {
  return { ...Lc(e), type: ub(e) };
}
function db(e) {
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
function to(e) {
  if (F(e) || bt(e)) return e;
  if (Ur(e)) {
    let t = Na(e);
    if (!t?.target) return;
    let n = t.collectionItem,
      r = t.element === "none" ? void 0 : t.element;
    return Mc({ webPageId: t.target, hash: r || void 0, pathVariables: db(n) });
  }
  if (!(!p(e) || !e)) return Mc({ url: e });
}
function cb(e, t) {
  if (e === t) return !0;
  try {
    return new URL(e).href === new URL(t).href;
  } catch {
    return !1;
  }
}
function wA(e, t, n) {
  return ka(e) && ka(t)
    ? cb(e.url, t.url)
    : !Qt(e) || !Qt(t) || e.webPageId !== t.webPageId
      ? !1
      : n?.ignoreHash
        ? ce(e.pathVariables, t.pathVariables)
        : e.hash !== t.hash
          ? !1
          : ce(e.pathVariables, t.pathVariables) && ce(e.hashVariables, t.hashVariables);
}
function LA(e) {
  if (!Qt(e)) return (ka(e) || void 0, !1);
  if (e.pathVariables) {
    for (let t in e.pathVariables) if (M(e.pathVariables[t])) return !0;
  }
  if (e.hashVariables) {
    for (let t in e.hashVariables) if (M(e.hashVariables[t])) return !0;
  }
  return !1;
}
function MA(e, t) {
  return Qt(e) && !t?.has(e.webPageId);
}
var Bc = ["nofollow", "noreferrer", "me", "ugc", "sponsored"];
var pb = Bc,
  fb = new Set(pb),
  Da = (e) => fb.has(e),
  Ec = (e) => (E(e) ? e.every(Da) : !1);
function Ac(e, t) {
  for (let n in e) if (e[n] === t) return !0;
  return !1;
}
function Fc(e) {
  return Ac(A, e);
}
var mb = Rt("RawControlProp"),
  Oc = "type";
function De(e) {
  if (!x(e) || !(Oc in e)) return !1;
  let t = e[Oc];
  return t === null
    ? (mb.reportErrorOnceEveryTenMinutes(new Error("Encountered raw control prop with null type"), {
        value: e,
      }),
      !0)
    : Fc(t);
}
function UA(e) {
  return x(e) ? Object.values(e).every((t) => t === void 0 || De(t)) : !1;
}
var wa = (e) => {};
function qA(e) {
  wa = e;
}
var La = (e) => {};
function XA(e) {
  La = e;
}
var Ma = (e, t, ...n) => {
  e.assign(t, ...n);
};
function YA(e) {
  Ma = e;
}
var no = class {
  hierarchyChange = !1;
  localizationSourceOwnRevision = 0;
  localizationSourceRevision = 0;
  localizationTranslationOwnRevision = 0;
  localizationTranslationRevision = 0;
  reset() {
    this.hierarchyChange = !1;
  }
};
var ro = class {
  treeLineage = null;
  draft = null;
  tree() {
    return this.treeLineage?.latestTree;
  }
};
function uF(e, t, ...n) {
  Ma(e, t, ...n);
}
function hb(e) {
  return e ? e.toJS instanceof Function : !1;
}
var oo = { mutable: !0, update: 0 },
  xb = new Set([...Vc, "__class", "children", "id"]),
  io = class extends il("MutableNode") {
    constructor(t, n, r) {
      (super(),
        wa(this),
        (this.id = t?.id ?? ln()),
        (this.parentid = t?.parentid ?? Xs),
        (this.cache = t?.cache ?? n ?? new no()),
        (this.treeState = r ?? new ro()),
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
        if (xb.has(n)) continue;
        let r = this[n];
        if (n === "replicaInfo" && r) {
          t[n] = JSON.parse(JSON.stringify(r));
          continue;
        }
        if (hb(r)) {
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
        (g(!t.id, "`id` should not be set"),
        g(!t.parentid || this.parentid === t.parentid, "`parentid` should not be set"),
        g(!t.children, "`children` should not be set"),
        g(!t.mutable, "`mutable` should not be set"),
        g(!t.update, "`update` should not be set"),
        g(!t.cache, "`cache` should not be set"),
        g(!t.treeState, "`treeState` should not be set"));
    }
    cloneEmpty() {
      return new this.constructor();
    }
    clone(t) {
      let n = this.cloneEmpty();
      if (
        (n.assign(this, oo, { cache: n.cache, treeState: n.treeState, id: n.id }, t), t?.children)
      )
        return n;
      let r = this.children;
      return (r && (n.children = new Ae(r.map((o) => o.clone({ parentid: n.id })))), n);
    }
    cloneWithIds(t) {
      let n = this.cloneEmpty();
      if ((n.assign(this, oo, { cache: n.cache, treeState: n.treeState }, t), t?.children))
        return n;
      let r = this.children;
      return (r && (n.children = new Ae(r.map((o) => o.cloneWithIds()))), n);
    }
    cloneWithRenamedIds(t, n) {
      let r = this.cloneEmpty();
      if (
        (r.assign(this, oo, { cache: r.cache, treeState: r.treeState, id: r.id }, n),
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
        (r.assign(this, oo, { cache: r.cache, treeState: r.treeState, id: r.id }, o),
        n && r.setProp("parentid", n),
        o?.children)
      )
        return r;
      let i = this.children;
      return (i && (r.children = new Ae(i.map((a) => a.cloneWithCallback(t, r.id)))), r);
    }
    freeze() {
      return (
        g(this.mutable, "Node must be mutable when freezing"),
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
        g(this.mutable, "Node must be mutable when adding children"),
        g(this.children, "Node must have children"),
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
      let n = gb(this);
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
function gb(e) {
  let t = !0;
  return (
    "isLoaded" in e &&
      (g(typeof e.isLoaded == "function", "isLoaded must be a function"), (t = !!e.isLoaded())),
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
var Wc = "|local|";
var bb = { color: "rgba(0,0,0,0.25)", x: 0, y: 2, blur: 5 },
  Tb = {
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
function zc(e, t) {
  let n = { ...t, ...e };
  return (n.id || (n.id = ln()), n);
}
function Ba(e) {
  if (!x(e) || !("id" in e)) return !1;
  for (let n of ta) if (!(n in e)) return !1;
  return !0;
}
function en(e) {
  return E(e) && e.every(Ba);
}
function yF(e) {
  return zc(e, bb);
}
function ao(e) {
  return zc(e, Tb);
}
function hF(e) {
  return { ...e, id: ln() };
}
function xF(e, t) {
  return { ...e, ...t };
}
function SF(e) {
  return !(!Hc(e) || e.__class === "ImageStylePresetNode");
}
function NF(e) {
  return Ea(e) && !pt(e);
}
function RF(e) {
  if (!Hc(e)) return !1;
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
function Hc(e) {
  return Ea(e) && ft(e);
}
var Gc = "boxShadows",
  jc = (e) => e === Gc;
function Ea(e) {
  return x(e) ? Gc in e : !1;
}
function PF(e) {
  return !Ea(e) || !en(e.boxShadows) ? !1 : e.boxShadows.length > 0;
}
var _c = "shadows",
  Kc = (e) => e === _c;
function DF(e) {
  return _c in e;
}
var wF = { shadows: void 0 };
function Aa(e) {
  return x(e) ? e && ea.every((t) => t in e) : !1;
}
function LF(e) {
  return E(e) && e.every(Aa);
}
var Cb = "removeTokenVariables";
function Uc(e) {
  return typeof e == "object" && e !== null && Cb in e;
}
function YF(e, t = !1) {
  let n = {};
  for (let r of e) {
    let o = r.colorForMode(t);
    o && (n[lo(r)] = o);
  }
  return n;
}
function qc(e) {
  let t = { light: { srgb: "", p3: "" }, dark: { srgb: "", p3: "" } };
  for (let n of e) {
    let r = lo(n);
    if (b.isP3String(n.light)) {
      t.light.p3 += `${r}: ${n.light};`;
      let o = ct.fromString(n.light)?.toString("srgb");
      o && (t.light.srgb += `${r}: ${o};`);
    } else t.light.srgb += `${r}: ${n.light};`;
    if (!(!n.dark || n.softDeleted))
      if (b.isP3String(n.dark)) {
        t.dark.p3 += `${r}: ${n.dark};`;
        let o = ct.fromString(n.dark)?.toString("srgb");
        o && (t.dark.srgb += `${r}: ${o};`);
      } else t.dark.srgb += `${r}: ${n.dark};`;
  }
  return t;
}
function JF(e) {
  let t = qc(e);
  return [
    `body { ${t.light.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.light.p3} } }`,
    `@media (prefers-color-scheme: dark) { body { ${t.dark.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.dark.p3} } } }`,
  ];
}
function ZF(e) {
  let t = qc(e);
  return [
    `body { ${t.light.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.light.p3} } }`,
    `body[data-framer-theme="dark"] { ${t.dark.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.dark.p3} } }`,
  ];
}
function QF(e, t, n = !1) {
  let r = {};
  for (let o of t) {
    let i = o.colorForMode(n);
    if (!i) return;
    r[o.id] = i;
  }
  return Vb(e, r, !0);
}
function Vb(e, t, n) {
  let r;
  if (He(e)) {
    let i = e.html;
    if (jt(i) || Object.keys(t).some((s) => i.includes(lo({ id: s })))) {
      let s = e.removeTokenVariables(t);
      s !== i && ((r ??= {}), (r.html = s));
    }
  }
  let o = Nb(e, t, n);
  return (o && (r = { ...r, ...o }), r);
}
var Sb = new Set([...Kr, "children", "id"]);
function Xc(e) {
  return Sb.has(e);
}
function Nb(e, t, n) {
  let r;
  return (
    (e instanceof io ? e.entries() : Object.entries(e)).forEach(([i, a]) => {
      if (Xc(i)) return;
      let s,
        l = Kc(i) || jc(i);
      if (E(a)) {
        let u = [],
          c = !1;
        (a.forEach((m, f) => {
          let T = l && (Aa(m) || Ba(m)) ? so(m, t) : $c(String(f), m, t, n);
          (T && (c = !0), u.push(T || m));
        }),
          c && (s = u));
      } else s = $c(i, a, t, n);
      typeof s < "u" && (r || (r = {}), (r[i] = s));
    }),
    r
  );
}
function kn(e, t) {
  if (E(e)) {
    for (let n of e) if (kn(n, t)) return !0;
    return !1;
  }
  if (x(e)) {
    let n = Object.values(e);
    for (let r of n) if (kn(r, t)) return !0;
    return !1;
  }
  return $e(e) ? Xr(e) === t : !1;
}
function e0(e, t) {
  if (He(e)) {
    let n = e.getTextColors(!1);
    for (let o of n) if (kn(o, t)) return !0;
    let r = e.getFills();
    for (let o of r) if (kn(o, t)) return !0;
  }
  for (let n in e) if (!Xc(n) && kn(e[n], t)) return !0;
  return !1;
}
function $c(e, t, n, r) {
  if (Pa(e)) return Rb(t, n);
  if (Uc(t)) {
    let i = t.removeTokenVariables(n);
    if (i) return i;
  }
  let o = Jr(t, n);
  if (o) return o;
  if (r && $e(t)) return Yr(t);
}
function Rb(e, t) {
  if (!De(e)) return;
  let { value: n } = e,
    r = so(n, t);
  if (r !== void 0) return { ...e, value: r };
}
function so(e, t) {
  if (E(e)) {
    let n = !1,
      r = e.map((o) => {
        let i = so(o, t);
        return i ? ((n = !0), i) : o;
      });
    return n ? r : void 0;
  }
  if (x(e)) {
    let n = {},
      r = !1;
    for (let o in e) {
      let i = so(e[o], t);
      i ? ((r = !0), (n[o] = i)) : (n[o] = e[o]);
    }
    return r ? n : void 0;
  }
  if ($e(e)) return Jr(e, t);
}
function lo(e) {
  return `${$r}${e.id}`;
}
function t0(e, t = {}) {
  let n = e.light;
  if (!n) return "";
  let r = b.isColor(n) ? b.toRgbString(b(n)) : n,
    o = `var(${lo(e)}, ${r})`;
  return t.excludeMetadata === !0 ? o : `${o} ${Pb(e.name, t.packageIdentifier)}`;
}
function n0(e, t) {
  if ($e(e)) {
    let n = Yr(e);
    if (n) return n;
  }
  return p(e) && t ? t(e) : e;
}
function Pb(e, t) {
  let n = { name: e };
  return (t && t !== Wc && (n.packageIdentifier = t), `/* ${JSON.stringify(n)} */`);
}
function r0(e, t) {
  let n = t.commaIndex ?? t.end - 1,
    r = e.substring(t.start + 4, n);
  return qr(r);
}
function o0(e) {
  return qr(e);
}
function i0(e) {
  return Pn(e).fallback || null;
}
function Yc(e) {
  let t = "hasProp";
  return !!e && typeof e == "object" && t in e && typeof e[t] == "function";
}
function Zc(e) {
  return { collectionRepeatedItemId: e, repeatedItemId: e };
}
function Qc(e, t) {
  let n = t?.getPrimaryId();
  if (((t = e.get(n)), !Be(t))) return null;
  if (t.repeatedItemId !== void 0) return Jc(e, t, t.repeatedItemId);
  let r = Jc(e, t, t.collectionRepeatedItemId);
  return r || tp(t);
}
function c0(e, t) {
  let n = t.cache.repeatedAncestorRepeaterIds;
  if (n !== null) return n;
  let r = kb(e, t);
  return ((t.cache.repeatedAncestorRepeaterIds = r), r);
}
function kb(e, t) {
  let n = [],
    r = t,
    o = e.getParent(t.id);
  for (; o;) {
    if (Zt(o)) n.push(o.id);
    else if (Be(o)) {
      let i = Qc(e, o);
      i && r.getPrimaryId() === i.id && n.push(o.id);
    }
    if (((r = o), (o = e.getParent(o.id)), o && e.isGroundNode(o))) break;
  }
  return (n.reverse(), n);
}
function p0(e, t) {
  let n = t;
  for (let r of t.ancestors()) {
    if (Be(r)) return { repeater: r, inRepeatedChild: tn(e, n, r) };
    n = r;
  }
}
function f0(e) {
  for (let t of e.ancestors()) if (Be(t)) return t;
}
function ep(e, t) {
  return e.getNodeWithTrait(t.parentid, Be) ?? void 0;
}
function m0(e, t) {
  return e.getNodeWithTrait(t.parentid, ci) ?? void 0;
}
function vb(e, t) {
  if (!t) return null;
  let n = Qc(e, t);
  return n ? (t.originalid ? t.children?.find((o) => o.originalid === n.id) : n) : null;
}
function tn(e, t, n) {
  return ((n ??= ep(e, t)), vb(e, n)?.id === t.id);
}
function y0(e, t) {
  return tn(e, t) || Zt(t);
}
function h0(e, t, n) {
  return !!n && Be(e) && !tn(t, n, e);
}
function x0(e) {
  let t = e.children?.at(0);
  e.set(Zc(t?.id));
}
function g0(e, t) {
  let n = new Map();
  for (let r of t) {
    let o = Ib(e, r);
    o && n.set(o.repeaterId, o);
  }
  return [...n.values()];
}
function Ib(e, t) {
  let n = ep(e, t);
  if (!n || !tn(e, t, n)) return null;
  let r = t.getPrimaryId();
  return {
    repeaterId: n.getPrimaryId(),
    disableFallback: n.repeatedItemId !== void 0,
    repeatedItemId: r,
    repeatedItemChildIds: t.children?.map((o) => o.getPrimaryId()) ?? [],
  };
}
function b0(e, t, n) {
  for (let r of t) {
    let o = e.get(r.repeaterId);
    if (!Be(o)) continue;
    let i = Db(e, o, r, n);
    (i === o.repeatedItemId && i === o.collectionRepeatedItemId) || o.set(Zc(i));
  }
}
function Db(e, t, n, r) {
  let o = new Set(),
    i = r?.get(n.repeatedItemId);
  (i && o.add(i), o.add(n.repeatedItemId));
  for (let a of n.repeatedItemChildIds) o.add(a);
  for (let a of o) {
    let s = wb(e, t, a);
    if (s) return s.id;
  }
  if (!n.disableFallback) return tp(t)?.id;
}
function wb(e, t, n) {
  let r = e.get(n);
  for (; r;) {
    if (r.parentid === t.id) return Zt(r) ? null : r;
    if (!r.parentid) return null;
    r = e.get(r.parentid);
  }
  return null;
}
function Jc(e, t, n) {
  let r = e.get(n);
  return !r || Zt(r) || r.parentid !== t.id ? null : r;
}
function tp(e) {
  let t = e.children.at(0);
  return !t || Zt(t) ? null : t;
}
var Lb = Rt("RichTextNode"),
  np = new Set();
function P0(e, t) {
  if (Tt(t)) return t;
  if (!np.has(e)) {
    np.add(e);
    let n = x(t) && t.constructor === Object ? "plain object" : typeof t;
    Lb.reportError(`RichTextNode ${e} has invalid stored html (${n})`);
  }
  return "";
}
function Tt(e) {
  return typeof e == "string" || jt(e);
}
function k0(e, t) {
  g(
    typeof e == "string",
    `${t}: Rich text value is stored as JSON here, but this path still expects HTML.`
  );
}
function rp(e, t = (n, r) => n === r) {
  let n = bn;
  for (let r of e)
    if (hr(n)) n = r;
    else if (!t(r, n)) return sn;
  return n;
}
function w0(e, t) {
  let n = e[0];
  if (n === void 0) return bn;
  let r = n[t];
  for (let [o, i] of e.entries()) {
    if (o === 0) continue;
    let a = i[t];
    if (r !== a) return sn;
  }
  return r;
}
function L0(...e) {
  return e.find(Oi);
}
var ip = "borderColor";
function O0(e) {
  return {
    borderWidth: e.borderPerSide
      ? { top: e.borderTop, right: e.borderRight, bottom: e.borderBottom, left: e.borderLeft }
      : e.borderWidth,
    borderColor: e.borderColor,
    borderStyle: e.borderStyle,
  };
}
function In(e) {
  if (!x(e)) return !1;
  let t = "borderWidth",
    n = "borderStyle",
    r = "borderPerSide",
    o = "borderTop",
    i = "borderRight",
    a = "borderBottom",
    s = "borderLeft";
  return !(
    !p(e[ip]) ||
    !p(e[n]) ||
    !ne(e[t]) ||
    !te(e[r]) ||
    !ne(e[o]) ||
    !ne(e[i]) ||
    !ne(e[s]) ||
    !ne(e[a])
  );
}
var Mb = { solid: !0, dashed: !0, dotted: !0, double: !0 };
function W0(e) {
  return p(e) && Object.hasOwn(Mb, e);
}
var rt = {
  borderColor: "black",
  borderStyle: "solid",
  borderPerSide: !1,
  borderBottom: 1,
  borderLeft: 1,
  borderRight: 1,
  borderTop: 1,
  borderWidth: 1,
};
function ap(e) {
  if (!In(e)) return e;
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
function z0(e) {
  let t = { ...rt };
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
function H0(e) {
  let t = { ...rt };
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
function G0(e) {
  if (!e) return rt;
  let t = 0,
    n = e.borderTopWidth ?? e.borderWidth ?? t,
    r = e.borderRightWidth ?? e.borderWidth ?? t,
    o = e.borderBottomWidth ?? e.borderWidth ?? t,
    i = e.borderLeftWidth ?? e.borderWidth ?? t,
    a = e.borderWidth ?? rt.borderWidth,
    s = It(rp([n, r, o, i, a])),
    l = e.borderStyle ?? rt.borderStyle,
    u = e.borderColor ?? rt.borderColor;
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
function op(e) {
  return p(e) || k(e);
}
function vn(e) {
  return ne(e) || k(e);
}
function j0(e) {
  if (!x(e)) return !1;
  let t = "borderWidth",
    n = "borderStyle",
    r = "borderTopWidth",
    o = "borderRightWidth",
    i = "borderBottomWidth",
    a = "borderLeftWidth";
  return !(
    !op(e[ip]) ||
    !op(e[n]) ||
    !vn(e[r]) ||
    !vn(e[o]) ||
    !vn(e[a]) ||
    !vn(e[i]) ||
    !vn(e[t])
  );
}
var Bb = [
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
  Eb = new Set(Bb);
function sp(e) {
  return p(e) && Eb.has(e);
}
var $0 = "--framer-custom-cursors";
var Ab = "customCursorSmartComponentId";
function q0(e) {
  return x(e) && Ab in e;
}
var Fb = {
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
  X0 = { ...Fb, cursor: void 0, customCursorType: void 0 },
  Y0 = "default",
  Ob = "cursor";
function lp(e) {
  return Ob in e;
}
function J0(e) {
  if (lp(e))
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
var Z0 = 20;
function Wb(e) {
  return p(e.customCursorSmartComponentId);
}
function Q0(e, t) {
  return !t || !lp(t) || t.customCursorType !== "component" || !Wb(t)
    ? !1
    : Bt(e.get(t.customCursorSmartComponentId));
}
var zb = "single",
  Hb = "fused";
function oO(e) {
  return { single: e, fused: [e, e, e, e] };
}
function Dn(e) {
  if (!x(e) || !S(e[zb])) return !1;
  let t = e[Hb];
  return E(t) && t.length === 4 && t.every(S);
}
function iO(e) {
  return De(e) && e.type === "fusednumber" && Dn(e.value);
}
var Gb = "isFused";
function up(e) {
  return x(e) && te(e[Gb]);
}
var jb = "id";
function _b(e) {
  return jb in e;
}
var Kb = "value";
function Ub(e) {
  return x(e) && _b(e) && Kb in e;
}
function RO(e) {
  return e.type === "array" && cp(e.value);
}
function PO(e) {
  return e.type === "object" && (x(e.value) || Ve(e.value));
}
function dp(e) {
  return e.type !== "fusednumber" || !up(e) ? !1 : Dn(e.value);
}
function nn(e) {
  return X(e) && e.endsWith("px") && S(Number.parseFloat(e));
}
function $b(e) {
  if (!X(e)) return !1;
  let [t, n] = Jt(e);
  return !Number.isNaN(t) && n === "%";
}
function kO(e) {
  return x(e) && e.type === "image";
}
var qb = { string: !0, richtext: !0, image: !0, link: !0 };
function vO(e) {
  return e ? e.type in qb : !1;
}
function uo(e) {
  return x(e) && S(e.latitude) && S(e.longitude);
}
function IO(e) {
  return !(
    !x(e) ||
    !uo(e.coordinate) ||
    (e.title !== void 0 && !X(e.title)) ||
    (e.address !== void 0 && !X(e.address))
  );
}
function DO(e) {
  return ye(e) || cp(e);
}
function cp(e) {
  return E(e) && e.every(Ub);
}
function wO(e) {
  return F(e) || te(e);
}
function LO(e) {
  return F(e) || X(e);
}
function MO(e) {
  return F(e) || X(e) || k(e);
}
function BO(e) {
  return X(e) || M(e);
}
function EO(e) {
  return F(e) || X(e) || te(e) || S(e) || k(e) || Ve(e);
}
function AO(e) {
  return F(e) || E(e);
}
function FO(e) {
  return E(e) && e.every(Wr);
}
function OO(e) {
  return F(e) || X(e) || k(e);
}
function WO(e) {
  return M(e) || Ec(e);
}
function zO(e) {
  return M(e) || typeof e == "boolean" || (typeof e == "number" && Number.isFinite(e));
}
function HO(e) {
  return F(e) || S(e);
}
function GO(e) {
  return x(e);
}
function jO(e) {
  return F(e) || Tt(e);
}
function _O(e) {
  return F(e) || X(e);
}
function KO(e) {
  return F(e) || X(e) || k(e);
}
function UO(e) {
  return Qt(e) || k(e);
}
function $O(e) {
  return x(e) || k(e);
}
function qO(e) {
  return x(e) || k(e);
}
function XO(e) {
  return M(e) || In(e);
}
function YO(e) {
  return M(e) || sp(e);
}
function JO(e) {
  if (F(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? nn(t[0]) : t.length === 2 && t.every(nn);
}
function ZO(e) {
  if (F(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? nn(t[0]) : t.length === 4 && t.every(nn);
}
function QO(e) {
  if (F(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? nn(t[0]) || $b(t[0]) : t.length === 4 && t.every(nn);
}
function eW(e) {
  return M(e) || X(e) || k(e);
}
function tW(e) {
  return F(e) || (E(e) && e.every(X)) || k(e);
}
function nW(e) {
  return (X(e) && Pe(e)) || M(e) || k(e);
}
function rW(e) {
  return M(e) || X(e) || k(e);
}
function oW(e) {
  return E(e);
}
function iW(e) {
  return uo(e) || M(e) || k(e);
}
function pW(e, t) {
  return e === t ? !0 : e.variant !== t.variant ? !1 : co(e.variant, e.childNodes, t.childNodes);
}
function co(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let r = 0; r < t.length; r++) if (!hp(e, t[r], n[r])) return !1;
  return !0;
}
var H = (e, t, n) => Object.is(t, n),
  wn = (e, t, n) => ce(t, n),
  pp = (e, t, n) => Fa(t, n),
  fp = { type: H, tag: H, textDirection: H, childNodes: aT },
  Xb = { ...fp, blockStyles: wn, backgroundMask: wn, textStylePreset: H },
  mp = { type: H, textDirection: H },
  Yb = { ...mp, childNodes: xp },
  yp = { type: H, textDirection: H, listStyleType: H, start: H },
  Jb = { ...yp, childNodes: xp },
  Zb = { type: H, childNodes: co },
  Qb = { type: H, mediaType: H, src: H, alt: H, pixelWidth: H, pixelHeight: H, link: pp },
  eT = { type: H, identifier: H, embedId: H, props: wn, width: H, alignment: H },
  tT = { type: H, childNodes: rT };
function fW(e, t) {
  return e.id !== void 0 && e.id === t.id && e.variant === t.variant;
}
function mW(e, t, n) {
  return t === n || hp(e, t, n);
}
function hp(e, t, n) {
  if (t.type !== n.type) return !1;
  switch (t.type) {
    case "textBlock":
      return (g(n.type === "textBlock"), yt(e, "styles") ? Ne(e, t, n, Xb) : Ne(e, t, n, fp));
    case "bulletedList":
      return (g(n.type === "bulletedList"), Ne(e, t, n, Yb));
    case "numberedList":
      return (g(n.type === "numberedList"), Ne(e, t, n, Jb));
    case "blockquote":
      return (
        g(n.type === "blockquote"),
        g(yt(e, "blockquotes"), "Document variant does not support blockquotes"),
        Ne(e, t, n, Zb)
      );
    case "media":
      return (
        g(n.type === "media"),
        g(yt(e, "media"), "Document variant does not support media block"),
        Ne(e, t, n, Qb)
      );
    case "module":
      return (
        g(n.type === "module"),
        g(yt(e, "embeds"), "Document variant does not support embeds"),
        Ne(e, t, n, eT)
      );
    case "table":
      return (
        g(n.type === "table"),
        g(yt(e, "tables"), "Document variant does not support tables"),
        Ne(e, t, n, tT)
      );
    default:
      z(t);
  }
}
function yW(e, t, n) {
  if (t.type !== n.type) return !1;
  switch (t.type) {
    case "blockquote":
    case "table":
    case "tableRow":
      return !0;
    case "bulletedList":
      return (g(n.type === "bulletedList"), Ne(e, t, n, mp));
    case "numberedList":
      return (g(n.type === "numberedList"), Ne(e, t, n, yp));
    default:
      z(t);
  }
}
function nT(e, t, n) {
  return t === n || co(e, t.childNodes, n.childNodes);
}
function xp(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let r = 0; r < t.length; r++) if (!nT(e, t[r], n[r])) return !1;
  return !0;
}
function rT(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let r = 0; r < t.length; r++) if (!oT(e, t[r].childNodes, n[r].childNodes)) return !1;
  return !0;
}
function oT(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let r = 0; r < t.length; r++) if (!iT(e, t[r], n[r])) return !1;
  return !0;
}
function iT(e, t, n) {
  return t === n
    ? !0
    : t.cellType !== n.cellType || t.rowSpan !== n.rowSpan || t.columnSpan !== n.columnSpan
      ? !1
      : co(e, t.childNodes, n.childNodes);
}
function aT(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let r = 0; r < t.length; r++) if (!lT(e, t[r], n[r])) return !1;
  return !0;
}
var gp = { type: H, text: H, bold: H, italic: H, inlineCode: H, link: pp },
  sT = {
    ...gp,
    inlineStyles: wn,
    backgroundStyles: wn,
    inlineCodeStylePreset: H,
    linkStylePreset: H,
  };
function lT(e, t, n) {
  return t.type !== n.type
    ? !1
    : t.type === "lineBreak"
      ? !0
      : n.type !== "text"
        ? !1
        : yt(e, "styles")
          ? Ne(e, t, n, sT)
          : Ne(e, t, n, gp);
}
function Fa(e, t) {
  return e === t
    ? !0
    : e === void 0 ||
        t === void 0 ||
        !wt(e.openInNewTab, t.openInNewTab) ||
        !wt(e.smoothScroll, t.smoothScroll) ||
        !wt(e.clickTrackingId, t.clickTrackingId) ||
        !wt(e.preserveParams, t.preserveParams) ||
        !uT(e.relValues, t.relValues)
      ? !1
      : ce(e.link, t.link);
}
function uT(e, t) {
  if (e === t) return !0;
  if (M(e) || M(t)) return wt(e, t);
  let n = e ?? [],
    r = t ?? [];
  if (n.length !== r.length) return !1;
  for (let o = 0; o < n.length; o++) if (n[o] !== r[o]) return !1;
  return !0;
}
function Ne(e, t, n, r) {
  for (let o in r)
    if (Object.hasOwn(r, o)) {
      let i = r[o];
      if (!i(e, t[o], n[o])) return !1;
    }
  return !0;
}
function bp(e, t) {
  if (t in e) return Reflect.get(e, t);
}
function Oa(e, t, n) {
  return bp(e, n) === bp(t, n);
}
function RW(e, t = e.variant) {
  try {
    return Ln(e);
  } catch (n) {
    return (Ns(n), { id: ge(), type: "richText", variant: t, childNodes: [] });
  }
}
function Ln(e) {
  return {
    id: e.id ?? ge(),
    type: "richText",
    variant: e.variant,
    childNodes: po(e.variant, e.childNodes),
  };
}
function po(e, t) {
  return t.map((n) => dT(e, n));
}
function dT(e, t) {
  switch (t.type) {
    case "textBlock":
      return cT(e, t);
    case "bulletedList":
      return pT(e, t);
    case "numberedList":
      return fT(e, t);
    case "blockquote": {
      let n = mT(e, t);
      return (g(Se(n, e), "normalizeRichTextDocument: unexpected node: blockquote"), n);
    }
    case "table": {
      let n = yT(e, t);
      return (g(Se(n, e), "normalizeRichTextDocument: unexpected node: table"), n);
    }
    case "media":
    case "module":
      return t;
  }
}
function cT(e, t) {
  return { ...t, childNodes: TT(e, t.childNodes) };
}
function pT(e, t) {
  let n = t.childNodes.map((r) => Tp(e, r));
  return { ...t, childNodes: n.length > 0 ? n : [Cp()] };
}
function fT(e, t) {
  let n = t.childNodes.map((r) => Tp(e, r));
  return { ...t, childNodes: n.length > 0 ? n : [Cp()] };
}
function mT(e, t) {
  let n = po(e, t.childNodes);
  return { ...t, childNodes: n.length > 0 ? n : [Mn()] };
}
function yT(e, t) {
  if (t.childNodes.length === 0) return { ...t, childNodes: [PT()] };
  if (t.childNodes.every((r) => r.childNodes.length === 0))
    return { ...t, childNodes: t.childNodes.map((r) => ({ ...r, childNodes: [Wa()] })) };
  let n = t.childNodes.map((r) => gT(e, r));
  return { ...t, childNodes: hT(e, n) };
}
function hT(e, t) {
  let { width: n, height: r, slots: o } = xT(t);
  for (
    g(n > 0, "richTextDocumentNormalization: table has no cells"),
      g(r > 0, "richTextDocumentNormalization: table has no rows");
    t.length < r;
  )
    t.push(kT());
  for (let i = 0; i < r; i++) {
    let a = o[i],
      s = t[i];
    g(a && s, "richTextDocumentNormalization: row length mismatch");
    let l = 0;
    for (let u = 0; u < a.length; u++) {
      let c = s.childNodes[l],
        m = a[u];
      if (!m?.length) (s.childNodes.splice(l, 0, Wa()), l++);
      else if (c)
        for (let f of m) {
          g(f, "richTextDocumentNormalization: slotCell is undefined");
          let h = f.cellX + f.width,
            T = f.cellY + f.height;
          (g(
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
function xT(e) {
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
      g(o <= r, "richTextDocumentNormalization: table forming algorithm height error"));
    let T = 0;
    if ((l(), f.childNodes.length === 0)) {
      o++;
      return;
    }
    for (let V = 0; V < f.childNodes.length; V++) {
      let P = f.childNodes[V];
      for (; T < n && m(T, o);) T++;
      (T === n && n++,
        g(T <= n, "richTextDocumentNormalization: table forming algorithm width error"));
      let y = Math.min(P.columnSpan || 1, 1e3),
        C = Math.min(P.rowSpan ?? 1, 65534),
        R = !1;
      (C === 0 && ((R = !0), (C = 1)), n < T + y && (n = T + y), r < o + C && (r = o + C));
      let j = { cell: P, cellX: T, cellY: o, width: y, height: C };
      (u(j), R && i.push({ cell: j, cellX: T, width: y }), (T += y));
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
    for (let P = T; P < V; P++) (t[h][P] ??= []).push(f);
  }
  function m(f, h) {
    return !!t[h]?.[f]?.length;
  }
}
function Tp(e, t) {
  let n = po(e, t.childNodes);
  return { ...t, childNodes: n.length > 0 ? n : [Mn("inherit")] };
}
function gT(e, t) {
  return { ...t, childNodes: t.childNodes.map((n) => bT(e, n)) };
}
function bT(e, t) {
  let n = po(e, t.childNodes),
    r = { ...t, childNodes: n.length > 0 ? n : [Mn()] };
  return (
    r.columnSpan !== void 0 && r.columnSpan < 1 && (r.columnSpan = 1),
    r.rowSpan !== void 0 && r.rowSpan < 0 && (r.rowSpan = 0),
    r
  );
}
function TT(e, t) {
  let r = VT(t).filter((i) => i.type === "lineBreak" || i.text.length > 0),
    o = NT(r);
  if (o.some((i) => i.type === "text")) return o;
  for (let i of t)
    if (i.type === "text" && i.text === "" && CT(i)) {
      o.push(i);
      break;
    }
  return o;
}
function CT(e) {
  let t = e;
  return !!(t.inlineStyles || t.linkStylePreset || t.inlineCodeStylePreset);
}
function VT(e) {
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
    ST(n, t);
  }
  return t;
}
function ST(e, t) {
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
      a.length > 0 && t.push({ ...e, id: r ? ge() : e.id, text: a });
      return;
    }
    let i = e.text.slice(n, o);
    (i.length > 0 && (t.push({ ...e, id: r ? ge() : e.id, text: i }), (r = !0)),
      t.push({ id: ge(), type: "lineBreak" }),
      (n = o + 1));
  }
}
function NT(e) {
  let t = [];
  for (let n of e) {
    let r = t[t.length - 1];
    if (r?.type === "text" && n.type === "text" && RT(r, n)) {
      t[t.length - 1] = { ...r, text: r.text + n.text };
      continue;
    }
    t.push(n.type === "text" ? { ...n } : n);
  }
  return t;
}
function RT(e, t) {
  if (e.bold !== t.bold || e.italic !== t.italic || e.inlineCode !== t.inlineCode) return !1;
  let n = "inlineStyles" in e ? e.inlineStyles : void 0,
    r = "inlineStyles" in t ? t.inlineStyles : void 0;
  if (!ce(n, r)) return !1;
  let o = "backgroundStyles" in e ? e.backgroundStyles : void 0,
    i = "backgroundStyles" in t ? t.backgroundStyles : void 0;
  return !ce(o, i) || !Oa(e, t, "inlineCodeStylePreset") || !Oa(e, t, "linkStylePreset")
    ? !1
    : Fa(e.link, t.link);
}
function Mn(e = "auto") {
  return { id: ge(), type: "textBlock", tag: "p", textDirection: e, childNodes: [] };
}
function Cp() {
  return { id: ge(), type: "listItem", childNodes: [Mn("inherit")] };
}
function PT() {
  return { id: ge(), type: "tableRow", childNodes: [Wa()] };
}
function kT() {
  return { id: ge(), type: "tableRow", childNodes: [] };
}
function Wa() {
  return { id: ge(), type: "tableCell", cellType: "cell", childNodes: [Mn()] };
}
function DW(e, t) {
  t.document?.(e);
  for (let n of e.childNodes) fo(n, t);
}
function wW(e, t) {
  if (t.document?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let r = mo(n, t);
    if (r) return r;
  }
}
function Rp(e, t, n = {}) {
  let r = be(e, t.document, (o) => {
    let i = Xe(o.childNodes, (a) => yo(e.variant, a, t));
    return i === o.childNodes ? o : { ...o, childNodes: i };
  });
  return r === e ? e : n.normalize === !1 ? r : Ln(r);
}
function fo(e, t) {
  switch (e.type) {
    case "textBlock":
      t.textBlock?.(e);
      for (let n of e.childNodes) DT(n, t);
      return;
    case "bulletedList":
      t.bulletedList?.(e);
      for (let n of e.childNodes) Vp(n, t);
      return;
    case "numberedList":
      t.numberedList?.(e);
      for (let n of e.childNodes) Vp(n, t);
      return;
    case "blockquote":
      t.blockquote?.(e);
      for (let n of e.childNodes) fo(n, t);
      return;
    case "media":
      t.media?.(e);
      return;
    case "module":
      t.module?.(e);
      return;
    case "table":
      t.table?.(e);
      for (let n of e.childNodes) vT(n, t);
      return;
  }
}
function Vp(e, t) {
  t.listItem?.(e);
  for (let n of e.childNodes) fo(n, t);
}
function vT(e, t) {
  t.tableRow?.(e);
  for (let n of e.childNodes) IT(n, t);
}
function IT(e, t) {
  t.tableCell?.(e);
  for (let n of e.childNodes) fo(n, t);
}
function DT(e, t) {
  switch (e.type) {
    case "text":
      t.text?.(e);
      return;
    case "lineBreak":
      t.lineBreak?.(e);
      return;
  }
}
function mo(e, t) {
  switch (e.type) {
    case "textBlock":
      if (t.textBlock?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let r = MT(n, t);
        if (r) return r;
      }
      return;
    case "bulletedList":
      if (t.bulletedList?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let r = Sp(n, t);
        if (r) return r;
      }
      return;
    case "numberedList":
      if (t.numberedList?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let r = Sp(n, t);
        if (r) return r;
      }
      return;
    case "blockquote":
      if (t.blockquote?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let r = mo(n, t);
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
        let r = wT(n, t);
        if (r) return r;
      }
      return;
  }
}
function Sp(e, t) {
  if (t.listItem?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let r = mo(n, t);
    if (r) return r;
  }
}
function wT(e, t) {
  if (t.tableRow?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let r = LT(n, t);
    if (r) return r;
  }
}
function LT(e, t) {
  if (t.tableCell?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let r = mo(n, t);
    if (r) return r;
  }
}
function MT(e, t) {
  switch (e.type) {
    case "text":
      return t.text?.(e) === !0 ? e : void 0;
    case "lineBreak":
      return t.lineBreak?.(e) === !0 ? e : void 0;
  }
}
function yo(e, t, n) {
  switch (t.type) {
    case "textBlock": {
      let r = be(t, n.textBlock, (o) => {
        let i = Xe(o.childNodes, (a) => AT(e, a, n));
        return i === o.childNodes ? o : { ...o, childNodes: i };
      });
      return (
        g(
          Se(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
    case "bulletedList": {
      let r = be(t, n.bulletedList, (o) => {
        let i = Xe(o.childNodes, (a) => Np(e, a, n));
        return i === o.childNodes ? o : { ...o, childNodes: i };
      });
      return (
        g(
          Se(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
    case "numberedList": {
      let r = be(t, n.numberedList, (o) => {
        let i = Xe(o.childNodes, (a) => Np(e, a, n));
        return i === o.childNodes ? o : { ...o, childNodes: i };
      });
      return (
        g(
          Se(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
    case "blockquote": {
      let r = be(t, n.blockquote, (o) => {
        let i = Xe(o.childNodes, (a) => yo(e, a, n));
        return i === o.childNodes ? o : { ...o, childNodes: i };
      });
      return (
        g(
          Se(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
    case "media": {
      let r = be(t, n.media, (o) => o);
      return (
        g(
          Se(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
    case "module": {
      let r = be(t, n.module, (o) => o);
      return (
        g(
          Se(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
    case "table": {
      let r = be(t, n.table, (o) => {
        let i = Xe(o.childNodes, (a) => BT(e, a, n));
        return i === o.childNodes ? o : { ...o, childNodes: i };
      });
      return (
        g(
          Se(r, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        r
      );
    }
  }
}
function Np(e, t, n) {
  return be(t, n.listItem, (r) => {
    let o = Xe(r.childNodes, (i) => yo(e, i, n));
    return o === r.childNodes ? r : { ...r, childNodes: o };
  });
}
function BT(e, t, n) {
  return be(t, n.tableRow, (r) => {
    let o = Xe(r.childNodes, (i) => ET(e, i, n));
    return o === r.childNodes ? r : { ...r, childNodes: o };
  });
}
function ET(e, t, n) {
  return be(t, n.tableCell, (r) => {
    let o = Xe(r.childNodes, (i) => yo(e, i, n));
    return o === r.childNodes ? r : { ...r, childNodes: o };
  });
}
function AT(e, t, n) {
  switch (t.type) {
    case "text":
      return be(t, n.text, (r) => r);
    case "lineBreak":
      return be(t, n.lineBreak, (r) => r);
  }
}
function be(e, t, n) {
  let r = FT(e, t),
    o = n(r);
  return OT(o, t);
}
function FT(e, t) {
  return !t || typeof t == "function" ? e : (t.enter?.(e) ?? e);
}
function OT(e, t) {
  return t ? (typeof t == "function" ? t(e) : (t.exit?.(e) ?? e)) : e;
}
function Xe(e, t) {
  let n;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    if (!o) continue;
    let i = t(o);
    i !== o && ((n ??= Array.from(e)), (n[r] = i));
  }
  return n ?? e;
}
var Pp = Symbol.for("framer.sharedEnum"),
  EW = Symbol.for("framer.sharedTypeIdentity");
function ho(e) {
  return q(e) && Pp in e;
}
function AW(e) {
  let { options: t, localizedOptionTitles: n } = e,
    r = t.map((i, a) => e.optionTitles?.[a] ?? i),
    o = (i) => {
      if (typeof i != "string") return;
      let a = r.indexOf(i);
      return a === -1 ? void 0 : t[a];
    };
  return {
    [Pp]: !0,
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
function WT(e) {
  return q(e) || et(e);
}
var kp = "optional";
function zT(e) {
  return !!e && kp in e && e[kp] === !0;
}
function HT(e) {
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
        if (!("definition" in e) || !ho(e.definition)) return;
        let { definition: t } = e;
        if (t.kind === "enum")
          return ee(e.defaultValue) && t.options.includes(e.defaultValue) ? e.defaultValue : void 0;
        t.kind;
        return;
      }
      case "boolean":
        return Ls(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return Pt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case "fusednumber":
      case "number":
        return Oe(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return q(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return q(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
      case "location":
        return q(e.defaultValue) ? e.defaultValue : void 0;
      case "linkrelvalues":
        return Gn(e.defaultValue) ? e.defaultValue : void 0;
      case "multicollectionreference":
        return Gn(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = q(e.defaultValue) ? e.defaultValue : {};
        return (q(e.controls) && vp(t, e.controls), t);
      }
      case "array":
        return Gn(e.defaultValue) ? e.defaultValue : void 0;
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
function vp(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let o = e[n];
    if (!Pt(o) || zT(r)) continue;
    let i = HT(r);
    Pt(i) || (e[n] = i);
  }
}
function GT(e) {
  if (q(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Ip(e, t) {
  if (!WT(e)) return;
  let n = GT(e);
  vp(n, t);
}
var Dp = "outputControls";
function jT(e) {
  return (q(e) || et(e)) && Dp in e;
}
function wp(e, t) {
  Object.assign(e, { [Dp]: t });
}
function jW(e) {
  if (jT(e)) return e.outputControls;
}
function Lp(e, t, n) {
  (Object.assign(e, { propertyControls: t }), _T(t), Ip(e, t), n !== void 0 && wp(e, n));
}
function _T(e) {
  for (let t of Object.values(e))
    t?.type !== "sharedtype" ||
      !("definition" in t) ||
      !ho(t.definition) ||
      !Object.isExtensible(t) ||
      Object.defineProperty(t, "options", { value: t.definition.options, configurable: !0 });
}
function XW(e) {
  return e.propertyControls;
}
function xo(e, t = 2) {
  let n = 0;
  if (typeof e == "number") n = e;
  else if (typeof e == "string") n = parseFloat(e);
  else return;
  if (Number.isInteger(n)) return n;
  let r = 1;
  for (; t-- > 0;) r *= 10;
  return (n < 0 && (r *= -1), Math.round(n * r) / r);
}
function za(e) {
  let { paddingPerSide: t, paddingTop: n, paddingBottom: r, paddingLeft: o, paddingRight: i } = e;
  return t !== !1 && (n !== void 0 || r !== void 0 || o !== void 0 || i !== void 0);
}
function Mp(e) {
  let { padding: t = 0, paddingTop: n, paddingBottom: r, paddingLeft: o, paddingRight: i } = e;
  return za(e)
    ? {
        top: n !== void 0 ? n : t,
        bottom: r !== void 0 ? r : t,
        left: o !== void 0 ? o : t,
        right: i !== void 0 ? i : t,
      }
    : { top: t, bottom: t, left: t, right: t };
}
function Bp({ top: e, left: t, bottom: n, right: r }) {
  return e === r && r === n && n === t ? `${e}px` : `${e}px ${r}px ${n}px ${t}px`;
}
function ez(e) {
  if (e === "none") return null;
  let t = e
      .trim()
      .split(/\s+/u)
      .map((a) => xo(a)),
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
var bo = B(re(), 1);
var Op = B(oe(), 1),
  fz = (() => {
    let e = bo.default.forwardRef(function (n, r) {
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
          __contentWrapperStyle: P,
          ...y
        } = n,
        C = To(i),
        R = Ap(a),
        j = Ap(s),
        $ = za(y) || y.padding ? Bp(Mp(y)) : void 0,
        Z = $ === void 0 ? {} : { padding: $ },
        {
          width: de,
          height: ae,
          minWidth: Je,
          maxWidth: ot,
          minHeight: xs,
          maxHeight: ni,
          ...ri
        } = P ?? {},
        Ze = {
          ...m,
          display: "flex",
          flexDirection: C,
          flexWrap: u ? "wrap" : "nowrap",
          justifyContent: R,
          alignItems: j,
          alignContent: j,
          ...Z,
          ...ri,
        };
      (Ir.applyWillChange({ willChangeTransform: h }, Ze, !0),
        T &&
          !Kt(Or(y)) &&
          ((y.width = "100%"), (y.height = "100%"), (y._constraints = { enabled: !0 })));
      let fm = Fr(n),
        { children: mm, props: ym } = Er(y, c),
        gs = y.widthType ?? (y.width === "auto" ? 2 : 0),
        bs = y.heightType ?? (y.height === "auto" ? 2 : 0),
        hm = KT(mm, i, gs, bs),
        xm = Rr(hm, V ?? 1),
        Ts = { "data-framer-component-type": "Stack" },
        Cs = y.__fromCanvasComponent;
      if ((Cs && (Ts["data-framer-generated"] = !0), UT(l, R, u))) {
        let Vs = Fp(R);
        ((Vs || i !== "horizontal") && (Ze.columnGap = `${l}px`),
          (Vs || i !== "vertical") && (Ze.rowGap = `${l}px`));
      }
      return (
        Ze.width === void 0 && gs === 2 && (Ze.width = "min-content"),
        Ze.height === void 0 && bs === 2 && (Ze.height = "min-content"),
        (0, Op.jsx)(oc, {
          as: o,
          background: Cs ? void 0 : "none",
          ...ym,
          layoutId: fm,
          ref: r,
          ...Ts,
          style: Ze,
          className: f,
          layoutScroll: !0,
          children: xm,
        })
      );
    });
    return (
      (e.defaultProps = { distribution: "start" }),
      (e.displayName = "Stack"),
      Lp(e, {
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
function Ep(e) {
  return typeof e == "string" && e.endsWith("fr");
}
function go(e) {
  let t = parseFloat(e);
  return v(t) ? t : 0;
}
function KT(e, t, n, r) {
  return bo.default.Children.map(e, (o) => {
    if (!Xn(o) || !qn(o)) return;
    let i = t === "vertical",
      a = {},
      s = !1,
      { style: l, size: u } = o.props,
      { width: c, height: m } = o.props;
    u !== void 0 && (c === void 0 && (c = u), m === void 0 && (m = u));
    let f = c,
      h = m;
    if (
      (Ep(c) &&
        ((s = !0),
        (s = !0),
        i
          ? n === 2
            ? ((a.alignSelf = "stretch"), (f = "auto"))
            : (f = `${go(c) * 100}%`)
          : ((f = 1), (a.flexGrow = go(c)), (a.flexBasis = 0)),
        (a.width = f)),
      Ep(m) &&
        ((s = !0),
        i
          ? ((h = 1), (a.flexGrow = go(m)), (a.flexBasis = 0))
          : r === 2
            ? ((a.alignSelf = "stretch"), (h = "auto"))
            : (h = `${go(m) * 100}%`),
        (a.height = h)),
      !s)
    )
      return o;
    let T = { ...l, ...a };
    return bo.default.cloneElement(o, { width: f, height: h, style: T });
  });
}
function Fp(e) {
  return e ? !["space-between", "space-around", "space-evenly", "stretch"].includes(e) : !1;
}
function UT(e, t, n) {
  return !(!e || (!n && !Fp(t)));
}
function To(e) {
  switch (e) {
    case "vertical":
      return "column";
    case "horizontal":
      return "row";
    default:
      return e;
  }
}
function Ap(e) {
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
var Co = ["auto", "pixelated"],
  bz = { imageRendering: void 0 },
  Tz = { imageRendering: "auto" },
  $T = "imageRendering";
function Cz(e) {
  return He(e) && !F(e.htmlContent) ? !1 : $T in e;
}
var qT = new Set(Co);
function XT(e) {
  return p(e) && qT.has(e);
}
function Vz(e) {
  return XT(e) ? e : "auto";
}
function Wp(e) {
  switch (e) {
    case "auto":
      return "Smooth";
    case "pixelated":
      return "Sharp";
    default:
      return "Unknown";
  }
}
var Vo = ["clip", "visible", "hidden", "auto"],
  YT = ["clip", "hidden"],
  JT = ["visible", "auto"],
  vz = { overflow: void 0, overflowX: void 0, overflowY: void 0 },
  zp = "overflow",
  Iz = [zp, "overflowX", "overflowY"];
function Hp(e) {
  return e ? zp in e : !1;
}
var ZT = new Set(Vo);
function Dz(e) {
  return p(e) ? ZT.has(e) : !1;
}
var QT = new Set(YT);
function wz(e) {
  return p(e) && QT.has(e);
}
var eC = new Set(JT);
function Lz(e) {
  return p(e) && eC.has(e);
}
function Gp(e) {
  return e === "auto" ? "Scroll" : Kn(e);
}
function Mz(e) {
  if (!Hp(e)) return !1;
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
function Bz(e) {
  return Hp(e) ? e.overflow === "auto" || e.overflowX === "auto" || e.overflowY === "auto" : !1;
}
function Ez(e, t) {
  return k(t) && !k(e.overflowX) && !F(e.overflowX) && e.overflowX === e.overflowY;
}
var jp = { visible: "clip", clip: "visible", auto: "hidden", hidden: "auto" };
function Az(e, t, n, r = {}) {
  let o = e.resolveValue(t) || e.resolveValue(n);
  return o ? (r.preferSame ? o : jp[o]) : "clip";
}
function Fz(e, t) {
  return e === t || k(t) ? !0 : (k(e) && (e = "visible"), jp[e] === t);
}
function _p(e) {
  let t = {};
  for (let n in e) {
    let r = e[n];
    if (De(r))
      if (r.type === "fusednumber")
        S(r.value) ? (t[n] = r.value) : dp(r) && (t[n] = r.value.single);
      else if (r.type === "object" && x(r.value)) {
        if (!x(r.value)) continue;
        t[n] = _p(r.value);
      } else
        r.type === "array" && E(r.value)
          ? (t[n] = r.value
              .filter(De)
              .map((o) => (o.type === "object" ? (x(o.value) ? _p(o.value) : void 0) : o.value)))
          : (t[n] = r.value);
  }
  return t;
}
function Kp(e) {
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
      return at;
    case "border":
      return rt;
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
var tC = {
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
function Up(e) {
  if (e.type === "controlReference") {
    if (e.expectedType !== "enum") return !1;
    let t = ke(e.entityIdentifier);
    return Dt(t) && t.type === "collection";
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
function Zz(e) {
  return e.type !== "controlReference"
    ? Up({ type: e.type })
    : e.expectedType === "segmentedenum"
      ? !1
      : Up({ type: e.type, expectedType: e.expectedType, entityIdentifier: e.entityIdentifier });
}
function nC(e) {
  return e === "WebPage" || e === "SmartComponent";
}
function rC(e, t) {
  return nC(t) ? Object.hasOwn(tC, e) : !1;
}
function oC(e, t) {
  return rC(e.type, t) ? (e.type !== "controlReference" ? !0 : e.expectedType !== "file") : !1;
}
function Q(e, t) {
  return oC(e, t) && e.optional === !0;
}
function rn(e) {
  return !_s(e) && e.type !== "divider";
}
function Qz(e) {
  return e.type === "string";
}
function e1(e) {
  return e.type === "richtext";
}
function t1(e) {
  return e.type === "slug";
}
function n1(e) {
  return e.type === "date";
}
function iC(e) {
  return e.type === "collectionreference";
}
function aC(e) {
  return e.type === "multicollectionreference";
}
function r1(e) {
  return iC(e) || aC(e);
}
function sC(e) {
  return rn(e) && mn(e.type);
}
var o1 = sC;
function i1(e) {
  return e?.type === "divider";
}
function lC(e) {
  return e.type === "array";
}
function a1(e) {
  return e.type === "object";
}
function uC(e) {
  return e.type === "image";
}
function dC(e) {
  return lC(e) && e.itemVariables.length === 1 && e.itemVariables.every(uC);
}
function Ha(e) {
  return dC(e) && e.displayGalleryAsArray !== !0;
}
var cC = { string: !0, richtext: !0, enum: !0 };
function pC(e) {
  return rn(e) ? e.type in cC : !1;
}
function qp(e) {
  return pC(e) && e.preventLocalization === !0;
}
function s1(e) {
  return e.fallbackValue === "associatedVariable" && !!e.associatedStringVariable;
}
var fC = {
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
function Xp(e) {
  return Object.hasOwn(fC, e.type);
}
var mC = {
  boolean: !0,
  date: !0,
  string: !0,
  number: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  controlReference: !0,
};
function c1(e) {
  return rn(e) ? Object.hasOwn(mC, e.type) : !1;
}
var Yp = Symbol("localizedOptionTitles");
function Bn(e, t) {
  e[Yp] = t;
}
function Jp(e) {
  return e[Yp] ?? null;
}
function Ga(e, t, n) {
  if (e === void 0) return t.push("u");
  if (e === null) return t.push("n");
  let r = typeof e;
  if (r === "string") return t.push(JSON.stringify(e));
  if (r !== "object") return t.push(String(e));
  if (Array.isArray(e)) {
    for (let i = 0; i < e.length; i++) (Ga(e[i], t, n), t.push(","));
    return;
  }
  let o = Yc(e) ? e.keys() : Object.keys(e);
  o.sort();
  for (let i of o) {
    let a = e[i];
    (n && ((a = n(i, a, e)), a === void 0)) || (t.push(i), t.push(":"), Ga(a, t, n), t.push(","));
  }
}
function Zp(e, t) {
  let n = [];
  return (Ga(e, n, t), n.join(""));
}
var yC = 1;
function g1(e) {
  return Hs("sharedEnum", e, "default").value;
}
function Qp(e) {
  let t = ke(e);
  if (!(!Dt(t) || t.type !== "sharedEnum")) return t.localIdName;
}
function hC(e) {
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
function b1(e) {
  return Zp({ version: yC, definition: hC(e) });
}
var ja = Symbol("fromOtherProject");
function k1(e) {
  let t = { ...e.properties },
    n = !1;
  for (let [r, o] of Object.entries(t))
    !x(o) || o.type !== "sharedtype" || ((t[r] = { ...o, [ja]: !0 }), (n = !0));
  return n ? { ...e, properties: t } : e;
}
function _a(e) {
  return ja in e && e[ja] === !0;
}
function v1(e) {
  return e?.type === "sharedtype" && "kind" in e && e.kind === "enum";
}
function nf(e, t) {
  let n = Qp(t);
  if (!n) return;
  let r = e.get(n);
  return hl(r) ? r : void 0;
}
var ef = new WeakMap();
function xC(e, t) {
  if (t?.type === "enum") return t;
  if (t?.type !== "sharedtype") return;
  if (t.kind !== "enum") {
    t.kind;
    return;
  }
  if (_a(t)) return;
  let n = nf(e, t.moduleIdentifier);
  if (!n) return;
  if (n.mutable) return tf(t, n);
  let r = ef.get(n);
  r || ((r = new WeakMap()), ef.set(n, r));
  let o = r.get(t);
  return (o || ((o = tf(t, n)), r.set(t, o)), o);
}
function I1(e, t) {
  return t?.type !== "sharedtype" || !e ? t : (xC(e, t) ?? t);
}
function tf(e, t) {
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
      Bn(
        r,
        t.cases.map((o) => o.nameLocalized)
      ),
    r
  );
}
function D1(e, t) {
  return gC(t, nf(e, t.moduleIdentifier));
}
function gC(e, t) {
  let { kind: n, moduleIdentifier: r, ...o } = e;
  return (
    n !== "enum" && void 0,
    {
      ...o,
      type: "enum",
      cases: t?.cases ?? [],
      ...(t?.preventLocalization && { preventLocalization: !0 }),
    }
  );
}
function rf(e, t) {
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
      z(e);
  }
}
var bC = /,(?![^(]*\))/u,
  TC = /\s(?![^(]*\))/u,
  CC = /(?:#|0x)(?:[a-f\d]{3}|[a-f\d]{6})\b|(?:rgb|hsl)a?\([^)]*\)/u,
  of = (e, t) => {
    let n = e.trim().toLowerCase().split(TC),
      r = n.includes("inset"),
      o = [],
      i = n.find((c) => CC.test(c)) ?? n[n.length - 1];
    for (let c of n) c !== "inset" && c !== i && o.push(xo(c));
    let [a, s, l, u] = o;
    return ao({
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
function O1(e, t) {
  let n = of(e, 0);
  if (
    n.color === "transparent" ||
    n.color === "rgba(0, 0, 0, 0)" ||
    (n.x === 0 && n.y === 0 && n.spread === 0 && n.blur === 0)
  )
    return;
  let r = b(n.color);
  if (!(!r || r.a <= 0)) return { ...n, id: t };
}
function Ka(e) {
  return e
    .split(bC)
    .map(of)
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
function W1(e) {
  let t = e.boxShadow;
  if (!(!t || t === "none")) return { boxShadows: Ka(t) };
}
function U1(e) {
  return en(e) || F(e) ? e : [];
}
function $1(e) {
  return p(e)
    ? Ka(e)
    : E(e) && e.every(hd.is)
      ? e.map((t, n) => ao({ ...t, id: `box-shadow-${n}` }))
      : [];
}
function af(e) {
  let { id: t, ...n } = e;
  return n;
}
var VC = "alt";
function Ua(e) {
  return x(e) && VC in e;
}
var sf = "altLocalized";
function Y1(e) {
  return x(e) && sf in e && !!e[sf];
}
var SC = "positionX",
  NC = "positionY";
function lf(e) {
  return x(e) ? SC in e || NC in e : !1;
}
function $a(e) {
  return lf(e) ? p(e.positionX) && p(e.positionY) : !1;
}
var RC = {};
function Q1(e) {
  return lf(e) ? e : RC;
}
function uf(e) {
  return e.embedId !== void 0 ? e.embedId : /-\d+$/u.test(e.id) ? wc(e.id) : e.id;
}
function rH(e) {
  let t = new Set();
  return Rp(
    e,
    {
      module(n) {
        let r = n.embedId;
        if (r === void 0) return n;
        if (!t.has(r)) return (t.add(r), n);
        let o = ge();
        return (t.add(o), { ...n, embedId: o });
      },
    },
    { normalize: !1 }
  );
}
var on = 16,
  aH = { rootFontSize: void 0 },
  qa = "rootFontSize";
function sH(e) {
  return qa in e;
}
function df(e) {
  return qa in e && S(e[qa]);
}
var cf = "--framer-root-font-size";
function TH(e, t, n, r) {
  if (r) {
    let o = PC(t, r, n);
    if (S(o)) return o;
  }
  if (Et(e)) return e.getPrimaryVariant().rootFontSize;
  if (ze(e)) {
    let o = e.layoutTemplateIdentifier;
    return o ? pf(o, n) : e.getPrimaryVariant().rootFontSize;
  }
  return vC(t.root, n);
}
function PC(e, t, n) {
  let r = Ca(e, t);
  if (r) return Dc(r) ? kC(e, n, r) : df(r) ? r.rootFontSize : on;
}
function kC(e, t, n) {
  let r = Ic(e, n);
  if (!r) return on;
  let o = ke(r)?.localId;
  if (!o) return on;
  let i = t
    .forType("layoutTemplate")
    .getByLocalId(o)
    .annotations(null, "default")?.framerBreakpoints;
  if (!i || !kc(i)) return on;
  g(bc(n), "Breakpoint node must have size properties");
  let a = Qr(i, n.width);
  return a && S(i[a]?.rootFontSize) ? i[a].rootFontSize : on;
}
function vC(e, t) {
  if (e.layoutTemplateIdentifier) return pf(e.layoutTemplateIdentifier, t);
  if (!e.homePageNodeId) return;
  let n = t.forType("screen").getByStableName(e.homePageNodeId).annotations(null, "default");
  return ff(n);
}
function pf(e, t) {
  let n = ke(e),
    r = t.forType("layoutTemplate").getByLocalId(n.localId).annotations(null, n.exportSpecifier);
  return ff(r);
}
function ff(e) {
  if (!e) return;
  let t = e.framerRootFontSize;
  if (S(t)) return t;
}
var mf = /var\(--variable-reference-(?<variableId>[^)-]*)(?:-(?<providerId>[^)]*))?/;
function RH(e) {
  let t = new RegExp(mf, "g"),
    n = e.matchAll(t),
    r = [];
  for (let o of n) {
    if (!o.groups) continue;
    let { variableId: i, providerId: a } = o.groups,
      s = Si(i, a);
    r.push(s);
  }
  return r;
}
function PH(e) {
  return p(e) && e.startsWith("--");
}
function kH(e) {
  let t = mf.exec(e);
  if (t?.groups) {
    let { variableId: n, providerId: r } = t.groups;
    return Si(n, r);
  }
}
function IC(e) {
  let t = e.providerId ? `-${e.providerId}` : "";
  return `--variable-reference-${e.id}${t}`;
}
function yf(e) {
  return `var(${IC(e)})`;
}
function vH(e) {
  return `calc(var(${cf}, 1rem) * ${e})`;
}
var DC = /calc\(var\(--framer-root-font-size,\s*1rem\)\s*\*\s*(?<remValue>\d+(?:\.\d+)?)\)/u;
function IH(e) {
  let t = DC.exec(e);
  if (t?.groups) {
    let { remValue: n } = t.groups,
      r = parseFloat(n);
    return S(r) ? [r, "rem"] : void 0;
  }
}
var wC = new Set(["img", "br"]);
function hf(e, t) {
  return J("ul", { dir: No(e.textDirection) }, ...e.childNodes.map(t));
}
function xf(e, t) {
  return J(
    "ol",
    {
      dir: No(e.textDirection),
      start: e.start !== 1 ? e.start : void 0,
      style: e.listStyleType !== "decimal" ? { "--list-style-type": e.listStyleType } : void 0,
    },
    ...e.childNodes.map(t)
  );
}
function gf(e, t) {
  return J("blockquote", {}, ...e.childNodes.map(t));
}
function bf(e, t) {
  return J(
    "figure",
    { class: "framer-table-wrapper" },
    J("table", {}, J("tbody", {}, ...e.childNodes.map((n) => LC(n, t))))
  );
}
function LC(e, t) {
  return J("tr", {}, ...e.childNodes.map((n) => MC(n, t)));
}
function MC(e, t) {
  return J(
    e.cellType === "header" ? "th" : "td",
    { colspan: e.columnSpan, rowspan: e.rowSpan },
    ...e.childNodes.map(t)
  );
}
function Tf(e) {
  return e.type === "lineBreak" ? J("br", {}) : BC(e);
}
function BC(e) {
  let t = AC(e.text);
  return (
    e.bold && (t = J("strong", {}, t)),
    e.italic && (t = J("em", {}, t)),
    e.inlineCode && (t = J("code", {}, t)),
    e.link && (t = J("a", So(e.link), t)),
    t
  );
}
function So(e) {
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
    "data-framer-open-in-new-tab": r === !0 ? !0 : En(r),
    "data-framer-smooth-scroll": o === !0 ? !0 : En(o),
    "data-framer-click-tracking-id": typeof i == "string" ? i : En(i),
    rel: Array.isArray(a) && a.length > 0 ? a.join(" ") : void 0,
    "data-framer-rel": En(a),
    "data-framer-preserve-params": typeof s == "boolean" ? String(s) : En(s),
  };
}
function No(e) {
  return e === "inherit" ? "auto" : e;
}
function J(e, t, ...n) {
  let r = "";
  for (let o in t) {
    let i = t[o];
    if (!(i === void 0 || i === !1)) {
      if (typeof i == "object") {
        o === "style" && (r += ` style="${EC(i)}"`);
        continue;
      }
      if (i === !0) {
        r += ` ${o}=""`;
        continue;
      }
      r += ` ${o}="${Cf(String(i))}"`;
    }
  }
  return wC.has(e) ? `<${e}${r}>` : `<${e}${r}>${n.join("")}</${e}>`;
}
function EC(e) {
  let t = "";
  for (let n in e) {
    let r = e[n];
    r !== void 0 && (t && (t += " "), (t += `${n}: ${Cf(r)};`));
  }
  return t;
}
function AC(e) {
  return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function Cf(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function En(e) {
  if (M(e)) return yf(e);
}
function FC(e) {
  return Ln(e).childNodes.map(Ro).join("");
}
function Sf(e) {
  return typeof e == "string" ? e : FC(e);
}
function Ro(e) {
  switch (e.type) {
    case "textBlock":
      return OC(e);
    case "bulletedList":
      return hf(e, Vf);
    case "numberedList":
      return xf(e, Vf);
    case "blockquote":
      return gf(e, Ro);
    case "media":
      return WC(e);
    case "module":
      return zC(e);
    case "table":
      return bf(e, Ro);
    default:
      z(e);
  }
}
function OC(e) {
  return J(e.tag, { dir: No(e.textDirection) }, ...e.childNodes.map(Tf));
}
function Vf(e) {
  let t = e.childNodes[0],
    n = t?.type === "textBlock" ? t.tag : "p";
  return J("li", { "data-preset-tag": n }, ...e.childNodes.map(Ro));
}
function WC(e) {
  return e.mediaType === "video"
    ? J("video", { class: "framer-image", src: e.src, ...So(e.link) })
    : J("img", {
        alt: e.alt,
        "data-framer-width": e.pixelWidth,
        "data-framer-height": e.pixelHeight,
        ...So(e.link),
        src: e.src,
        class: "framer-image",
      });
}
function zC(e) {
  return J("framer-module", {
    "data-module-identifier": e.identifier,
    "data-module-embed-id": uf(e),
    "data-module-props": JSON.stringify(e.props),
    "data-module-width": e.width,
    "data-module-alignment": e.alignment,
  });
}
var Nf = Symbol("dataIdentifier");
function An(e, t) {
  e[Nf] = t;
}
function WH(e) {
  return e[Nf] ?? null;
}
var Rf = ["page", "step", "location", "date", "time", "true", "false"],
  HH = { ariaCurrent: void 0 },
  GH = { ariaCurrent: "page" },
  HC = "ariaCurrent";
function jH(e) {
  return HC in e;
}
var Pf = ["menu", "listbox", "tree", "grid", "dialog", "true", "false"],
  KH = { ariaHaspopup: void 0 },
  UH = { ariaHaspopup: "menu" },
  GC = "ariaHaspopup";
function $H(e) {
  return GC in e;
}
var kf = ["off", "polite", "assertive"],
  XH = { ariaLive: void 0 },
  YH = { ariaLive: "polite" },
  jC = "ariaLive";
function JH(e) {
  return jC in e;
}
var vf = [
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
  QH = { ariaRole: void 0 },
  eG = { ariaRole: "button" };
function tG(e) {
  return "ariaRole" in e;
}
var Po = [
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
  oG = "multiply",
  iG = { blendingMode: void 0 },
  _C = "blendingMode";
function aG(e) {
  return _C in e;
}
var KC = new Set(Po);
function sG(e) {
  return p(e) && KC.has(e);
}
var Xa = ["contain", "none"],
  dG = { overscrollBehavior: void 0 },
  UC = "overscrollBehavior";
function cG(e) {
  return e ? UC in e : !1;
}
function pG(e) {
  return p(e) && (e === "contain" || e === "none");
}
var fG = { overscrollBehavior: "contain" };
var ko = ["none", "auto"],
  hG = { pointerEvents: void 0 },
  xG = { pointerEvents: "none" },
  $C = "pointerEvents";
function gG(e) {
  return $C in e;
}
var If = new Set(ko);
function bG(e) {
  return p(e.pointerEvents) && If.has(e.pointerEvents);
}
function TG(e) {
  return p(e) && If.has(e);
}
var vo = ["none", "auto"],
  SG = { userSelect: void 0 },
  NG = { userSelect: "none" },
  qC = "userSelect";
function RG(e) {
  return qC in e;
}
var Df = new Set(vo);
function PG(e) {
  return p(e.userSelect) && Df.has(e.userSelect);
}
function kG(e) {
  return p(e) && Df.has(e);
}
var Ya = ["text", "textarea", "email", "number", "tel", "url", "date", "time"],
  wf = {
    text: "Text",
    textarea: "Text area",
    number: "Number",
    email: "Email",
    tel: "Phone number",
    url: "URL",
    date: "Date",
    time: "Time",
  };
function XC(e) {
  return p(e) && e in wf;
}
function Lf(e) {
  return XC(e) ? wf[e] : "Text";
}
function wG(e) {
  return F(e) || e === "date" || e === "time";
}
function LG(e) {
  return F(e) || e === "text";
}
var YC = "formTextInputType";
function JC(e) {
  return YC in e;
}
var MG = {
  formTextInputType: void 0,
  formTextAreaResizable: void 0,
  formTextInputMinNumber: void 0,
  formTextInputMaxNumber: void 0,
  formInputMaxLength: void 0,
};
function BG(e) {
  return JC(e) && e.formTextInputType === "textarea";
}
var Mf = {
  stackDirection: {
    type: "enum",
    defaultValue: To(ic),
    options: zr.map(To),
    optionTitles: zr.map(we),
    displaySegmentedControl: !0,
    optionIcons: ["direction-horizontal", "direction-vertical"],
  },
  stackDistribution: {
    type: "enum",
    defaultValue: Gr(ac),
    options: Hr.map(Gr),
    optionTitles: Hr.map(we),
  },
  stackAlignment: {
    type: "enum",
    defaultValue: Gr(sc),
    options: jr.map(fc),
    optionTitles: jr.map(we),
  },
  gridItemColumnSpan: { type: "enum", defaultValue: 1, options: Ta, optionTitles: gc },
  gridItemRowSpan: { type: "enum", defaultValue: 1, options: _r, optionTitles: xc },
  userSelect: {
    type: "enum",
    defaultValue: "auto",
    options: vo.map((e) => e),
    optionTitles: vo.map(we),
  },
  overscrollBehavior: {
    type: "enum",
    defaultValue: "none",
    options: Xa.map((e) => e),
    optionTitles: Xa.map(we),
  },
  overflow: {
    type: "enum",
    defaultValue: "auto",
    options: Vo.map((e) => e),
    optionTitles: Vo.map(Gp),
  },
  pointerEvents: {
    type: "enum",
    defaultValue: "auto",
    options: ko.map((e) => e),
    optionTitles: ko.map(we),
  },
  blendingMode: {
    type: "enum",
    defaultValue: "multiply",
    options: Po.map((e) => e),
    optionTitles: Po.map(we),
  },
  formTextInputType: {
    type: "enum",
    defaultValue: "text",
    options: [...Ya],
    optionTitles: Ya.map(Lf),
  },
  imageRendering: {
    type: "enum",
    defaultValue: "auto",
    displaySegmentedControl: !0,
    options: [...Co],
    optionTitles: Co.map(Wp),
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
  ariaCurrent: { type: "enum", defaultValue: "page", options: [...Rf] },
  ariaHaspopup: { type: "enum", defaultValue: "menu", options: [...Pf] },
  ariaHidden: { type: "boolean", defaultValue: !1 },
  ariaDisabled: { type: "boolean", defaultValue: !1 },
  ariaRoleDescription: { type: "string", defaultValue: "" },
  ariaRole: { type: "enum", defaultValue: "button", options: [...vf] },
  ariaLive: { type: "enum", defaultValue: "polite", options: [...kf] },
  ariaDescription: { type: "string", defaultValue: "" },
  tickerEffectDirectionModifier: {
    type: "enum",
    defaultValue: "default",
    displaySegmentedControl: !0,
    options: ba,
    optionTitles: ba.map(mc),
  },
};
function ej(e) {
  return Object.hasOwn(Mf, e);
}
function Bf(e) {
  let t = Mf[e];
  return (g(t, () => `unknown node property control: ${e}`), t);
}
var nj = "framer/nodePropertyDefinitions",
  ZC = [
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
  QC = new Set(ZC);
function Ef(e) {
  return typeof e == "string" && QC.has(e);
}
var eV = "src";
function Io(e) {
  return x(e) && p(e[eV]);
}
function Do(e, t) {
  switch (e.valueType) {
    case "number":
      return typeof t == "number" && Number.isFinite(t);
    case "boolean":
      return typeof t == "boolean";
    default:
      return !1;
  }
}
function lj(e, t) {
  if (Do(e, t)) return t;
  if (Do(e, e.defaultValue)) return e.defaultValue;
  switch (e.valueType) {
    case "number":
      return 0;
    case "boolean":
      return !1;
    default:
      return 0;
  }
}
var Ho = B(Wf(), 1);
function Ij(e, t) {
  if (e.type === "motionvalue") return M(t) || Do(e, t);
  if (!Qa(e.type, t)) return !1;
  switch (e.type) {
    case "enum":
    case "segmentedenum":
      return M(t) || (ye(t) && t.outputType === "enum") ? !0 : e.options.some((n) => n === t);
  }
  return !0;
}
function Qa(e, t) {
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
      return p(t) || E(t);
    case "richtext":
      return Tt(t) || (0, Ho.isElement)(t);
    case "responsiveimage":
      return Io(t);
    case "file":
    case "image":
      return p(t) || k(t);
    case "enum":
    case "segmentedenum":
      return !!(t === void 0 || t === null || te(t) || S(t) || p(t));
    case "fusednumber":
      return Dn(t);
    case "eventhandler":
      return E(t) && t.every(Wr);
    case "transition":
      return ar(t);
    case "border":
      return In(t);
    case "link":
      return bt(to(t));
    case "linkrelvalues":
      return E(t) && t.every(Da);
    case "date":
      return t === void 0 ? !0 : p(t);
    case "object":
      return x(t);
    case "cursor":
      return p(t);
    case "boxshadow":
      return en(t);
    case "gap":
    case "padding":
    case "borderradius":
      return p(t);
    case "collectionreference":
    case "sharedtype":
      return p(t);
    case "multicollectionreference":
      return E(t) && t.every(p);
    case "trackingid":
      return p(t);
    case "array":
      return E(t);
    case "vectorsetitem":
      return (p(t) && Pe(t)) || (0, Ho.isValidElementType)(t);
    case "ref":
    case "changehandler":
      return !1;
    case "location":
      return uo(t);
    case "font":
    case "pagescope":
    case "customcursor":
    case "scrollsectionref":
    case null:
      return !1;
    default:
      z(e);
  }
}
function me(e, t) {
  return Qa(e, t) && !F(t) ? t : Kp(e);
}
function w(e) {
  return e.name || "Unknown";
}
function Wj(e, t) {
  switch (e.type) {
    case "boolean":
      return es(e, t);
    case "number":
      return ts(e, t);
    case "color":
      return ns(e);
    case "string":
      return rs(e, t);
    case "image":
      return os(e);
    case "link":
      return is(e);
    case "date":
      return as(e, t);
    default:
      return z(e);
  }
}
function es(e, t) {
  let { enabledTitle: n, disabledTitle: r } = e.options ?? {};
  return {
    type: e.type,
    title: w(e),
    enabledTitle: n,
    disabledTitle: r,
    description: e.description,
    optional: Q(e, t) ? !0 : void 0,
  };
}
function ts(e, t) {
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
    optional: Q(e, t) ? !0 : void 0,
  };
}
function ns(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function rs(e, t) {
  let { placeholder: n, displayTextArea: r } = e.options ?? {};
  return {
    type: e.type,
    title: w(e),
    placeholder: n,
    displayTextArea: r,
    description: e.description,
    preventLocalization: e.preventLocalization,
    optional: Q(e, t) ? !0 : void 0,
  };
}
function os(e) {
  return { type: "responsiveimage", title: w(e), description: e.description };
}
function is(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function as(e, t) {
  let n = {
    type: e.type,
    title: w(e),
    description: e.description,
    optional: Q(e, t) ? !0 : void 0,
  };
  return (e.options?.displayTime && (n.displayTime = !0), n);
}
var zf = ["string", "date", "number", "enum", "sharedtype", "boolean", "slug"];
function rV(e) {
  return e ? zf.includes(e.type) : !1;
}
function oV(e) {
  return zf.includes(e);
}
function b_(e) {
  return e === "enum" || e === "file";
}
function T_(e) {
  return e.type === "controlReference"
    ? e.expectedType === "segmentedenum"
      ? "enum"
      : e.expectedType
    : e.type;
}
function C_(e) {
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
var iV = {
  responsiveimage: "image",
  fusednumber: null,
  slot: null,
  changehandler: null,
  font: null,
  pagescope: null,
};
function V_(e) {
  return lr(e) ? e : iV[e];
}
var aV = ["eventhandler"];
function S_(e) {
  return aV.includes(e.type);
}
function N_(e) {
  return Xp(e) ? (e.required ?? !1) : !1;
}
var sV = {
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
function Gf(e) {
  return Object.hasOwn(sV, e.type);
}
function R_(e) {
  return e?.type === "array" && e.control.type === "object";
}
function P_(e) {
  return e.type === "array";
}
function lV(e, t, n, r) {
  let o = {},
    i = Ha(n);
  for (let s of n.itemVariables) {
    if (!rn(s)) continue;
    let l = ss(e, t, s, r);
    l &&
      (g(Gf(l), "Expected array item property control to be usable in an object"),
      i && l.type === "responsiveimage" ? (o[s.id] = cV(l)) : (o[s.id] = l));
  }
  let a = n.initialValue?.map((s) => {
    let l = {};
    if (!s || s.type !== "object" || !x(s.value)) return l;
    for (let u in s.value) {
      let c = s.value[u];
      if (!c) continue;
      let m = jf(c);
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
function uV(e, t, n, r) {
  let o = {};
  for (let a of n.fieldVariables) {
    let s = ss(e, t, a, r);
    s && (g(Gf(s), "Expected object field control to be usable in an object"), (o[a.id] = s));
  }
  let i = Q(n, r);
  return {
    type: n.type,
    controls: o,
    title: w(n),
    description: n.description,
    optional: i ? !0 : void 0,
    __vekterDefault: i ? void 0 : dV(n),
  };
}
function dV(e) {
  let t = {};
  for (let n of e.fieldVariables) {
    let r = jf(e.initialValue[n.id]);
    k(r) || (t[n.id] = r);
  }
  return t;
}
function cV(e) {
  let { __defaultAssetReference: t, __vekterDefault: n, ...r } = e;
  return r;
}
function jf(e) {
  if (!De(e)) return;
  let t = e.type;
  if (mn(t))
    switch (t) {
      case "image": {
        if (!p(e.value)) return;
        let n, r, o;
        return (
          Ua(e) && (n = e.alt),
          $a(e) && ((r = e.positionX), (o = e.positionY)),
          { assetReference: e.value, alt: n, positionX: r, positionY: o }
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
        return Tt(e.value) ? e.value : void 0;
      case "link":
        return bt(e.value) ? e.value : void 0;
      case "vectorsetitem":
        return p(e.value) && Pe(e.value) ? e.value : void 0;
      default:
        z(t);
    }
}
function k_(e, t, n) {
  if (!Ha(e)) return pV(t, n);
}
function pV(e, t) {
  if (!Q(e, t)) return fV(e);
}
function fV(e) {
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
      return { type: "link", value: to(e.initialValue) };
    case "vectorsetitem":
      return { type: "vectorsetitem", value: e.initialValue.identifier };
    default:
      z(e);
  }
}
function mV(e, t) {
  let n = Q(e, t);
  return { ...es(e, t), defaultValue: n ? void 0 : me(e.type, e.initialValue) };
}
function Ct(e, t) {
  let n = Q(e, t);
  return { ...ts(e, t), defaultValue: n ? void 0 : me(e.type, e.initialValue) };
}
function yV(e) {
  let t = $e(e.initialValue) ? e.initialValue : Pr.toFormatString(e.initialValue);
  return { ...ns(e), defaultValue: me(e.type, t) };
}
function hV(e, t) {
  let { min: n, max: r, step: o, units: i, literals: a } = e.options ?? {},
    s = Q(e, t);
  return {
    type: e.type,
    title: w(e),
    defaultValue: s ? void 0 : me(e.type, e.initialValue),
    min: n,
    max: r,
    step: o,
    units: i,
    literals: a,
    description: e.description,
    optional: s ? !0 : void 0,
  };
}
function xV(e, t) {
  let n = Q(e, t);
  return {
    ...rs(e, t),
    defaultValue: n ? void 0 : me(e.type, e.initialValue),
    maxLength: e.options?.maxLength,
  };
}
function gV(e) {
  let { placeholder: t, maxLength: n } = e.options ?? {};
  return {
    type: e.type,
    title: w(e),
    defaultValue: Sf(me(e.type, e.initialValue)),
    placeholder: t,
    maxLength: n,
    description: e.description,
    preventLocalization: e.preventLocalization,
  };
}
function bV(e) {
  let t = os(e);
  if (
    (p(e.initialValue) && (t.__defaultAssetReference = e.initialValue),
    De(e.initialValue) && p(e.initialValue.value))
  ) {
    let n = e.initialValue.value;
    t.__defaultAssetReference = n;
    let r = { assetReference: n };
    ((t.__vekterDefault = r),
      Ua(e.initialValue) && p(e.initialValue.alt) && (r.alt = e.initialValue.alt),
      $a(e.initialValue) &&
        ((r.positionX = e.initialValue.positionX), (r.positionY = e.initialValue.positionY)));
  }
  return t;
}
function TV(e) {
  let t = e.allowedFileTypes.map((o) => o.extension),
    n = new Set(t),
    r = Array.from(n).filter(Boolean);
  return {
    type: "file",
    title: w(e),
    allowedFileTypes: r,
    __defaultAssetReference: me(e.type, e.initialValue),
    description: e.description,
  };
}
function CV(e, t, n, r) {
  let o = NV(e, t, n, r);
  return o ? { type: n.type, title: w(n), payload: o } : { type: n.type, title: w(n) };
}
var VV = {
  boolean: !0,
  number: !0,
  string: !0,
  color: !0,
  date: !0,
  link: !0,
  image: !0,
  responsiveimage: !0,
};
function SV(e) {
  return Object.hasOwn(VV, e.type);
}
function NV(e, t, n, r) {
  if (!n.payload) return;
  let o = {};
  for (let i of n.payload) {
    let a = ss(e, t, i, r);
    a && SV(a) && (o[i.id] = a);
  }
  return Wu(o) ? void 0 : o;
}
function RV(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function PV(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function kV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function vV(e) {
  let t = me(e.type, e.initialValue);
  return {
    type: e.type,
    title: w(e),
    defaultValue: t ? Rl(t) : void 0,
    description: e.description,
  };
}
function IV(e) {
  return { type: e.type, title: w(e), defaultValue: e.initialValue, description: e.description };
}
function DV(e) {
  let t = me(e.type, e.initialValue),
    n = t ? ap(t) : void 0;
  return { type: e.type, title: w(e), description: e.description, defaultValue: n };
}
function wV(e) {
  return {
    type: e.type,
    title: w(e),
    defaultValue: e.initialValue.map(af),
    description: e.description,
  };
}
function LV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function MV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function BV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function EV(e, t) {
  let n = Q(e, t);
  return {
    type: e.type,
    title: w(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: n ? void 0 : e.initialValue,
    optional: n ? !0 : void 0,
  };
}
function AV(e, t) {
  let n = Q(e, t);
  return {
    type: e.type,
    title: w(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: n ? void 0 : e.initialValue,
    optional: n ? !0 : void 0,
  };
}
function FV(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function OV(e) {
  return {
    type: e.type,
    title: w(e),
    description: e.description,
    setModuleId: e.setModuleId,
    defaultValue: e.initialValue,
  };
}
function WV(e) {
  return is(e);
}
function zV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function HV(e, t) {
  let n = Q(e, t);
  return { ...as(e, t), defaultValue: n ? void 0 : me(e.type, e.initialValue) };
}
function GV(e, t) {
  let n = Q(e, t),
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
  return (qp(e) || Bn(s, a), s);
}
function Hf(e, t) {
  switch (e) {
    case "enum":
    case "sharedtype":
      return t === "enum" || t === "segmentedenum";
    default:
      return e === t;
  }
}
function jV(e, t) {
  let n = ke(t);
  if (zs(n)) {
    let r = e.getNode(n.moduleId);
    if (r) return r.codeComponentIdentifier;
  }
  return t;
}
function _V(e, t, n) {
  if (n.type === "nodePropertyControlReference") {
    if (!Ef(n.controlKey)) return null;
    let a = Bf(n.controlKey);
    return (
      g(
        a && Hf(a.type, n.expectedType),
        () => `incompatible node property control: ${n.controlKey} ${n.expectedType}`
      ),
      a
    );
  }
  let r = jV(e, n.entityIdentifier),
    o = t.componentForIdentifier(r);
  if (!o?.properties || (o.type !== "component" && o.type !== "data")) return null;
  let i = o.properties[n.controlKey];
  return !i || !Hf(i.type, n.expectedType) ? null : i;
}
function KV(e, t) {
  let n = Q(e, t);
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
function UV(e, t, n, r) {
  let o = _V(e, t, n);
  if (!o) return null;
  let i = n.type === "controlReference" && Q(n, r);
  switch (n.expectedType) {
    case "enum":
    case "segmentedenum": {
      if (o.type === "sharedtype") {
        if (_a(o)) return null;
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
            An(s, { dataIdentifier: n.entityIdentifier, enumFieldKey: n.controlKey }),
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
        defaultValue: i ? void 0 : me(n.expectedType, n.initialValue),
        optionIcons: o.optionIcons,
        description: n.description,
        optional: i ? !0 : void 0,
      };
      if (n.type === "controlReference") {
        let s = $V(e, t, n, o.options);
        s && Bn(a, s);
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
function $V(e, t, n, r) {
  if (!Pe(n.entityIdentifier)) return null;
  let i = ld(e, n.entityIdentifier)?.getPropertyControls(e, t)[n.controlKey];
  if (i?.type !== "enum") return null;
  let a = Jp(i);
  return a ? r.map((s) => a[i.options.indexOf(s)]) : null;
}
function qV(e, t) {
  return {
    type: "string",
    title: w(t),
    description: t.description,
    preventLocalization: e.root.translatePagePaths === "no",
  };
}
var XV = { string: !0, richtext: !0 };
function v_(e) {
  return e.type in XV;
}
function ss(e, t, n, r) {
  switch (n.type) {
    case "array":
      return lV(e, t, n, r);
    case "object":
      return uV(e, t, n, r);
    case "boolean":
      return mV(n, r);
    case "number":
      return Ct(n, r);
    case "motionvalue":
      return rf(n, w(n));
    case "dimension":
      return hV(n, r);
    case "color":
      return yV(n);
    case "string":
      return xV(n, r);
    case "richtext":
      return gV(n);
    case "image":
      return bV(n);
    case "eventhandler":
      return CV(e, t, n, r);
    case "link":
      return WV(n);
    case "linkrelvalues":
      return zV(n);
    case "date":
      return HV(n, r);
    case "enum":
      return GV(n, r);
    case "file":
      return TV(n);
    case "ref":
      return { type: n.type, title: w(n), description: n.description };
    case "scrollsectionref":
      return RV(n);
    case "customcursor":
      return PV(n);
    case "cursor":
      return kV(n);
    case "transition":
      return vV(n);
    case "border":
      return DV(n);
    case "location":
      return IV(n);
    case "boxshadow":
      return wV(n);
    case "gap":
      return LV(n);
    case "padding":
      return MV(n);
    case "borderradius":
      return BV(n);
    case "collectionreference":
      return EV(n, r);
    case "multicollectionreference":
      return AV(n, r);
    case "trackingid":
      return FV(n);
    case "vectorsetitem":
      return OV(n);
    case "sharedtype":
      return KV(n, r);
    case "nodePropertyControlReference":
    case "controlReference":
      return UV(e, t, n, r);
    case "slug":
      return qV(e, n);
    default:
      z(n);
  }
}
function I_(e) {
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
function D_(e) {
  return e ? Bt(e) || Et(e) || pl(e) || ze(e) : !1;
}
var K = class extends Map {};
var _f = "carousel_source_identifier",
  Go = "carousel_provider_id",
  L = {
    activeItemIndex: "carousel_active_item_index",
    totalItems: "carousel_total_items",
    hasNext: "carousel_has_next",
    hasPrevious: "carousel_has_previous",
    dots: "carousel_dots",
    nextPage: "carouselNextPage",
    previousPage: "carouselPreviousPage",
    goToPage: "carouselGoToPage",
  },
  us = "page",
  jo = {
    id: L.activeItemIndex,
    name: "Active Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  _o = {
    id: L.totalItems,
    name: "Total Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  Fn = { id: L.hasNext, name: "Has Next", type: "boolean", initialValue: !1 },
  On = { id: L.hasPrevious, name: "Has Previous", type: "boolean", initialValue: !1 },
  Ko = { id: L.dots, name: "Pagination", type: "array", initialValue: [], itemVariables: [] },
  Uo = { id: L.nextPage, name: "Next", type: "eventhandler", initialValue: void 0 },
  $o = { id: L.previousPage, name: "Previous", type: "eventhandler", initialValue: void 0 },
  YV = { id: us, name: "Page", type: "number", initialValue: 1, options: { min: 1, step: 1 } },
  qo = { id: L.goToPage, name: "Go to", type: "eventhandler", initialValue: void 0, payload: [YV] },
  ls = {
    [L.activeItemIndex]: jo,
    [L.totalItems]: _o,
    [L.hasNext]: Fn,
    [L.hasPrevious]: On,
    [L.dots]: Ko,
    [L.nextPage]: Uo,
    [L.previousPage]: $o,
    [L.goToPage]: qo,
  };
function E_(e) {
  if (e in ls) return ls[e];
}
function A_(e) {
  return e in ls;
}
var Kf = B(gm(), 1),
  Vt = "previousItemId";
function H_(e) {
  return Xo(Vt, "Previous", e.instanceIdentifier);
}
function G_({ name: e, dataIdentifier: t }) {
  return [
    {
      id: "id",
      name: e ? (0, Kf.singular)(e) : "Unknown",
      type: "collectionreference",
      dataIdentifier: t,
      initialValue: void 0,
      exposeInProps: !0,
    },
    QV(),
    tS(),
    Xo(Vt, "Previous", t),
    Xo(St, "Next", t),
  ];
}
function Xo(e, t, n) {
  return {
    type: "collectionreference",
    name: t,
    id: e,
    dataIdentifier: n,
    initialValue: void 0,
    exposeInProps: !0,
  };
}
var St = "nextItemId";
function j_(e) {
  return Xo(St, "Next", e.instanceIdentifier);
}
function __(e) {
  return e === Vt || e === St;
}
var ZV = "createdAt";
function QV() {
  return { type: "date", name: "Created", id: ZV, initialValue: void 0, exposeInProps: !0 };
}
var eS = "updatedAt";
function tS() {
  return { type: "date", name: "Updated", id: eS, initialValue: void 0, exposeInProps: !0 };
}
var U_ = { hookIdentifier: void 0 },
  nS = "hookIdentifier";
function rS(e) {
  return !!(e && nS in e);
}
function Wn(e) {
  return rS(e) && e.hookIdentifier !== void 0;
}
var Nt = ".";
function t2(e, t, n) {
  return e === Vt || e === St ? n.length === 0 : !n.includes(t);
}
function oS(e, t) {
  return e === t || iS(e, t);
}
function iS(e, t) {
  return e.endsWith(t) && e[e.length - t.length - 1] === Nt;
}
function Uf(e, t) {
  return e.startsWith(t) && e[t.length] === Nt;
}
function n2(e) {
  return Uf(e, Vt) || Uf(e, St);
}
function an(e) {
  return e.includes(Nt);
}
function r2(e) {
  return an(e.id);
}
function Yo(e, t) {
  return e ? e + Nt + t : t;
}
function o2(e) {
  let t = e.lastIndexOf(Nt);
  if (!(t < 0)) return e.slice(0, t);
}
function i2(e, t, n) {
  let r = Yo(e, t);
  return zl(r, n);
}
function aS(e) {
  return e === "id";
}
function a2(e) {
  return oS(e, "id");
}
function s2(e) {
  let t = Object.entries(e.properties);
  for (let [n, r] of t)
    if (!aS(n) && (r?.type === "collectionreference" || r?.type === "multicollectionreference"))
      return !0;
  return !1;
}
function sS(e) {
  return e.split(Nt);
}
function lS(e) {
  return e.join(Nt);
}
function l2(e) {
  if (Pu(e) && M(e.fillImage) && an(e.fillImage.id)) return e.fillImage;
  if (He(e)) {
    if (Kl(e.textContent) && an(e.textContent.startValue.id)) return e.textContent.startValue;
    if (M(e.htmlContent) && an(e.htmlContent.id)) return e.htmlContent;
    if (M(e.textContent) && an(e.textContent.id)) return e.textContent;
  }
}
function u2(e, t, n, r, o) {
  if (!an(n)) return { collectionItemNode: r, collectionNode: o, variableId: n };
  let i = $f(e, t, n, r, o);
  if (i.length === 0) return;
  let a;
  i.length === 1 ? (a = i[0]) : i.length > 1 && (a = i[i.length - 2]);
  let { collectionItemNode: s, variableId: l } = a ?? {};
  if (!s || !l) return;
  let u = e.getNodeWithTrait(s.parentid, Zn);
  if (u) return { collectionItemNode: s, collectionNode: u, variableId: l };
}
function $f(e, t, n, r, o) {
  let i = sS(n),
    a = i[0] === St,
    s = i[0] === Vt;
  if (a || s) {
    let c = a ? 1 : -1,
      m = o.getSortedChildren("public-only", "group-drafts"),
      f = m.findIndex((T) => T.id === r.id);
    if (f === -1) return [];
    let h = m[f + c];
    return h ? $f(e, t, lS(i.slice(1)), h, o) : [];
  }
  let l = [{ collectionItemNode: r, variableId: i[0] }],
    u = r;
  for (let c = 0; c < i.length; c++) {
    let m = i[c];
    if (!m) break;
    let f = u.getControlProp(m);
    if (f?.type !== "collectionreference") break;
    g(!M(f.value), "Collections don't support variables");
    let h = e.getNodeWithTrait(f.value, yl);
    if (!h) break;
    u = h;
    let T = i[c + 1];
    if (!T) break;
    l.push({ collectionItemNode: u, variableId: T });
  }
  return l;
}
function uS(e) {
  return e.title ?? e.name;
}
function x2(e) {
  return e.replace(/^\.\/(.*)\.(?:tsx|ts|js)$/u, "$1");
}
function g2(e) {
  let t = new K();
  for (let n in e) {
    let r = e[n];
    if (r && (t.set(n, r), r.type === "object"))
      for (let o in r.controls) {
        let i = r.controls[o];
        i && t.set(Yo(n, o), { ...i, title: i.title ?? Kn(o) });
      }
  }
  return t;
}
function b2(e, t) {
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
          c = x(a) ? a[s] : void 0;
        n.set(Yo(r, s), t ? c : (c ?? u));
      }
  }
  return n;
}
var ds = "_hook";
function qf(e) {
  return `${e}${ds}`;
}
function dS(e) {
  return !!e?.endsWith(ds);
}
function Jo(e) {
  if (!(!e || !dS(e))) return e.slice(0, -ds.length);
}
function T2(e, t) {
  let n = Jo(e);
  if (!n) return;
  let r = t.get(n);
  if (r) return qf(r);
}
function Xf(e, t) {
  if (e.getPrimaryId() === t) return e;
  for (let n of e.ancestors()) if (n.getPrimaryId() === t) return n;
}
function C2(e, t) {
  if (!t) return;
  let n = Jo(t);
  if (!n) return;
  let r = Xf(e, n);
  return Wn(r) ? r.hookIdentifier : void 0;
}
function V2(e, t, n, r) {
  if (!t) return;
  let o = Jo(t);
  if (!o) return;
  let i = Xf(e, o);
  if (!Wn(i)) return;
  let a = i.cache.getHookCache().getMaps(i.hookIdentifier, n);
  if (!a) return;
  let s = r?.get(t);
  return s ? { ...a, valueMap: s } : a;
}
function Yf(e, t, n) {
  if (!Wn(e)) return;
  let r = e.cache.getHookCache().getMaps(e.hookIdentifier, t);
  if (!r) return;
  let o = qf(e.getPrimaryId()),
    i = n?.get(o) ?? r.valueMap;
  return {
    providerId: o,
    sourceIdentifier: e.hookIdentifier,
    variableMap: r.variableMap,
    controlMap: r.controlMap,
    valueMap: i,
  };
}
function S2(e, t, n) {
  let r = Jo(n);
  if (!r) return;
  let o = e.get(r);
  if (!Wn(o)) return;
  let i = t.hookForIdentifier(o.hookIdentifier);
  if (i) return uS(i);
}
var cS = "variables";
function R2(e) {
  return e ? cS in e : !1;
}
var pS = "getProvidedVariableMap";
function k2(e) {
  return !!e && pS in e;
}
function cs(e) {
  return e.root.getDefaultLocaleName("Default locale");
}
function Jf(e, t) {
  return !t || !e ? "ltr" : Sr(e.code);
}
var Zf = "global_locale",
  Qf = "global_layout_direction",
  Zo = "locale_provider_id",
  em = "locale_source_identifier",
  fS = "Left to Right",
  mS = "Right to Left";
function H2(e) {
  return ze(e) || Bt(e) || Et(e);
}
var ps = (() => {
    let e, t, n;
    return (r) => {
      let o = r.root.locales;
      if (!o || o.length === 0) return null;
      let i = cs(r);
      return (
        (n && i === e && o === t) ||
          ((e = i),
          (t = o),
          (n = {
            id: Zf,
            type: "enum",
            name: "Locale",
            initialValue: void 0,
            cases: [{ id: Tn, name: cs(r) }, ...o.map((a) => ({ id: a.id, name: a.name }))],
          })),
        n
      );
    };
  })(),
  fs = (() => {
    let e;
    return (t) => {
      let n = t.root.locales;
      return !n || n.length === 0
        ? null
        : e ||
            ((e = {
              id: Qf,
              type: "enum",
              name: "Layout Direction",
              initialValue: void 0,
              cases: [
                { id: "ltr", name: fS },
                { id: "rtl", name: mS },
              ],
            }),
            e);
    };
  })(),
  G2 = _e((e) => (e ? tm(e) : null)),
  yS = _e((e, t) => {
    if (!e && !t) return;
    let n = new K();
    return (e && n.set(e.id, e), t && n.set(t.id, t), n);
  });
function j2(e) {
  let t = ps(e),
    n = fs(e);
  return yS(t, n);
}
function tm(e) {
  let t = [],
    n = [];
  for (let o of e.cases) (t.push(o.id), n.push(o.name));
  let r = { type: "enum", title: "Locale", options: t, optionTitles: n };
  return (An(r, { dataIdentifier: em, enumFieldKey: Zf }), r);
}
function hS(e) {
  let t = [],
    n = [];
  for (let o of e.cases) (t.push(o.id), n.push(o.name));
  let r = { type: "enum", title: "Layout Direction", options: t, optionTitles: n };
  return (An(r, { dataIdentifier: em, enumFieldKey: Qf }), r);
}
var xS = _e((e, t) => {
  if (!e && !t) return;
  let n = new K();
  return (e && n.set(e.id, tm(e)), t && n.set(t.id, hS(t)), n);
});
function gS(e) {
  let t = ps(e),
    n = fs(e);
  return xS(t, n);
}
var bS = _e((e) => {
  if (!e) return;
  let t = new Map();
  return (t.set(Zo, e), t);
});
function _2(e) {
  let t = gS(e);
  return bS(t);
}
var TS = _e((e, t, n, r) => {
  if (!e && !t) return;
  let o = new K();
  (e && o.set(e.id, n?.id ?? Tn), t && o.set(t.id, Jf(n, r)));
  let i = new Map();
  return (i.set(Zo, o), i);
});
function K2(e, t) {
  let n = ps(e),
    r = fs(e);
  return TS(n, r, t, e.root.adaptLayoutToTextDirection);
}
var nm = "default",
  zn = class {
    has(t) {
      return !1;
    }
    get(t) {}
    *[Symbol.iterator]() {}
  },
  $2 = new zn(),
  q2 = new zn(),
  X2 = new zn();
function rm(e) {
  let t = Fu(e);
  if (t) return t.intrinsicSize;
  let n = e.split("?")[1];
  if (!n) return;
  let r = new URLSearchParams(n),
    o = parseInt(r.get("width") ?? "", 10),
    i = parseInt(r.get("height") ?? "", 10);
  if (!(!S(o) || !S(i))) return { width: o, height: i };
}
var CS = "type",
  VS = "webPageId";
function om(e, t) {
  return e.type !== "link" || !x(t) || CS in t ? !1 : VS in t;
}
function SS(e, t) {
  let n = t;
  for (; er(n);) {
    if (n.dataIdentifier) return n.dataIdentifier;
    n = e.getParent(n.id);
  }
}
function NS(e, t) {
  if (t.unresolvedPathSlugs)
    for (let n in t.unresolvedPathSlugs) {
      let r = t.unresolvedPathSlugs[n];
      if (!x(r)) continue;
      let o = r.collectionItemId;
      if (!p(o)) continue;
      let i = sd(e, t.webPageId);
      if (!i) return;
      let a = SS(e, i);
      if (!a) return;
      let s = { identifier: a, collectionItemId: o, key: n, value: "" };
      return { [n]: s };
    }
}
function im(e, t) {
  return { type: "webPage", webPageId: t.webPageId, pathVariables: NS(e, t) };
}
function Qo(e, t, n) {
  if (om(t, n)) return im(e, n);
  let r = me(t.type, n);
  if (t.type === "array") {
    if (!E(r)) return r;
    let o = t.control;
    return o ? r.map((i) => Qo(e, o, i)) : r;
  }
  if (t.type === "object") {
    if (!x(r)) return r;
    let o = {};
    for (let i in r) {
      let a = t.controls[i];
      ((o[i] = r[i]), a && (o[i] = Qo(e, a, r[i])));
    }
    return o;
  }
  if (t.type === "responsiveimage" && Io(r)) {
    let o = rm(r.src);
    return o ? { ...r, pixelWidth: o.width, pixelHeight: o.height } : r;
  }
  return r;
}
var ei = class {
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
      o = Qo(this.tree, n, r);
    return (this.cache.set(t, o), o);
  }
  *[Symbol.iterator]() {
    for (let [t] of this.controlMap) {
      let n = this.get(t);
      yield [t, n];
    }
  }
};
var Ye = class {
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
var Hn = "repeater_item_index",
  Te = "repeater_item_count";
function CK(e, t, n, r, o) {
  let i = new ei(e, t, n);
  return new ms(i, r, o);
}
var ys = {
    id: Hn,
    name: "Item Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  RS = Ct(ys, "WebPage"),
  ti = {
    id: Te,
    name: "Visible Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  VK = [ys, ti],
  hs = Ct(ti, "WebPage");
function SK(e) {
  return e === Hn || e === Te;
}
function NK(e) {
  return e === Te;
}
var am = class extends Ye {
    constructor(t) {
      let n = new K();
      (n.set(Te, ti), super(t, n));
    }
  },
  sm = class extends Ye {
    constructor(t, n) {
      let r = new K();
      (r.set(Te, n), super(t, r));
    }
  },
  lm = class extends Ye {
    constructor(t) {
      let n = new K();
      (n.set(Te, hs), super(t, n));
    }
  },
  um = class extends Ye {
    constructor(t) {
      let n = new K();
      (n.set(Hn, ys), n.set(Te, ti), super(t, n));
    }
  },
  ms = class extends Ye {
    constructor(t, n, r) {
      let o = new K();
      (o.set(Hn, n + 1), o.set(Te, r), super(t, o));
    }
  },
  dm = class extends Ye {
    constructor(t) {
      let n = new K();
      (n.set(Hn, RS), n.set(Te, hs), super(t, n));
    }
  };
function RK(e, t, n, r) {
  let o = new Map(e),
    i = new Map(t),
    a = new K(),
    s = new K();
  return (
    a.set(Te, hs),
    s.set(Te, r),
    o.set(n, a),
    i.set(n, s),
    { nonRepeatedChildCombinedControlMap: o, nonRepeatedChildCombinedValueMap: i }
  );
}
function OK(e) {
  let t = e;
  for (let n of e.ancestors()) {
    if (xa(n)) return ga(t);
    t = n;
  }
  return !1;
}
var PS = Ct(jo, "WebPage"),
  kS = Ct(_o, "WebPage"),
  vS = { type: "boolean", title: Fn.name, defaultValue: Fn.initialValue },
  IS = { type: "boolean", title: On.name, defaultValue: On.initialValue },
  DS = { type: "array", title: Ko.name, control: { type: "object", controls: {} } },
  wS = { type: "number", title: "Page", defaultValue: 1, min: 1, step: 1, displayStepper: !0 },
  LS = { type: "eventhandler", title: Uo.name },
  MS = { type: "eventhandler", title: $o.name },
  BS = { type: "eventhandler", title: qo.name, payload: { [us]: wS } },
  ES = FS(),
  AS = OS();
function FS() {
  let e = new K();
  return (
    e.set(L.activeItemIndex, jo),
    e.set(L.totalItems, _o),
    e.set(L.hasNext, Fn),
    e.set(L.hasPrevious, On),
    e.set(L.dots, Ko),
    e.set(L.nextPage, Uo),
    e.set(L.previousPage, $o),
    e.set(L.goToPage, qo),
    e
  );
}
function OS() {
  let e = new K();
  return (
    e.set(L.activeItemIndex, PS),
    e.set(L.totalItems, kS),
    e.set(L.hasNext, vS),
    e.set(L.hasPrevious, IS),
    e.set(L.dots, DS),
    e.set(L.nextPage, LS),
    e.set(L.previousPage, MS),
    e.set(L.goToPage, BS),
    e
  );
}
function WS(e) {
  return Array.from({ length: e }, (t, n) => ({ id: String(n + 1) }));
}
function zS(e) {
  let t = new K();
  return (
    t.set(L.activeItemIndex, 1),
    t.set(L.totalItems, e),
    t.set(L.hasNext, e > 1),
    t.set(L.hasPrevious, !1),
    t.set(L.dots, WS(e)),
    t
  );
}
function HS() {
  return ES;
}
function GS() {
  return AS;
}
function jS(e, t) {
  let n = t?.get(Te),
    r = S(n) ? e.tree() : void 0,
    o = 0;
  for (let i of Ou(e))
    if (!(Rn(i) && i.position !== void 0)) {
      if (S(n) && r && tn(r, i)) {
        o += n;
        continue;
      }
      o++;
    }
  return o;
}
function WK(e, t) {
  let n = e.cache.carouselAncestorId;
  if (!n) return;
  let r = e.tree();
  if (!r) return;
  let o = r.get(n);
  if (o) return cm(e, o, t);
}
function cm(e, t, n) {
  let r = jS(t, n?.get(t.getPrimaryId())),
    o = e.cache.carouselValueMap;
  if (o?.itemCount === r) return o.valueMap;
  let i = zS(r);
  return ((e.cache.carouselValueMap = { itemCount: r, valueMap: i }), i);
}
function pm(e, t) {
  if (!Rn(e) || e.position === void 0) return;
  let n = e.tree()?.get(e.parentid);
  if (!(!n || !xa(n)))
    return {
      providerId: Go,
      sourceIdentifier: _f,
      variableMap: HS(),
      controlMap: GS(),
      valueMap: cm(e, n, t),
    };
}
var _S = Un();
function $K(e, t, n) {
  let r = [],
    o = pm(e, t);
  o && r.push(o);
  let i = Yf(e, n, t);
  return (i && r.push(i), r.length > 0 ? r : _S);
}
function qK(e) {
  return e === Zo || e === Go;
}
function XK(e, t, n, r, o) {
  if (!t && n.length === 0) return e;
  let i;
  e
    ? ((i = new Map(e)), t && i.set(o, t))
    : t
      ? (i = new Map([
          [o, t],
          [nm, t],
        ]))
      : (i = new Map());
  for (let a of n) i.set(a.providerId, r(a));
  return i;
}
function YK(e) {
  return e.map(KS);
}
function JK(e) {
  return e.map(US);
}
function KS(e) {
  return e.valueMap;
}
function US(e) {
  return e.controlMap;
}
function ZK(e, t) {
  if (t.length === 0) return e;
  let n = new Map(e ?? []);
  for (let r of t) n.set(r.providerId, r.valueMap);
  return n;
}
export {
  un as a,
  $S as b,
  oi as c,
  Zs as d,
  Le as e,
  tl as f,
  $n as g,
  ie as h,
  Me as i,
  Qs as j,
  it as k,
  N as l,
  v as m,
  fN as n,
  fe as o,
  qn as p,
  Xn as q,
  CN as r,
  Jn as s,
  Lt as t,
  VN as u,
  ai as v,
  dn as w,
  si as x,
  Kt as y,
  mx as z,
  Yi as A,
  ud as B,
  hx as C,
  dd as D,
  xx as E,
  pd as F,
  Ji as G,
  $d as H,
  Zi as I,
  fd as J,
  Qi as K,
  Ge as L,
  vi as M,
  su as N,
  gn as O,
  ct as P,
  Nv as Q,
  b as R,
  md as S,
  yd as T,
  Pr as U,
  ht as V,
  Dx as W,
  kr as X,
  vr as Y,
  Jd as Z,
  iL as _,
  hd as $,
  Td as aa,
  dL as ba,
  Vd as ca,
  Ir as da,
  ra as ea,
  VL as fa,
  Hd as ga,
  jd as ha,
  _x as ia,
  _d as ja,
  Ud as ka,
  qd as la,
  Xd as ma,
  Pd as na,
  RL as oa,
  LL as pa,
  Dd as qa,
  Ex as ra,
  Fx as sa,
  Ld as ta,
  tg as ua,
  Yd as va,
  Md as wa,
  Xt as xa,
  WL as ya,
  zL as za,
  Fr as Aa,
  Lr as Ba,
  Vn as Ca,
  sa as Da,
  qL as Ea,
  XL as Fa,
  Ad as Ga,
  zd as Ha,
  aM as Ia,
  ag as Ja,
  oc as Ka,
  A as La,
  uP as Ma,
  il as Na,
  NN as Oa,
  al as Pa,
  sl as Qa,
  li as Ra,
  vm as Sa,
  ui as Ta,
  ul as Ua,
  LN as Va,
  MN as Wa,
  BN as Xa,
  EN as Ya,
  I as Za,
  WN as _a,
  zN as $a,
  HN as ab,
  GN as bb,
  di as cb,
  dl as db,
  cl as eb,
  jN as fb,
  ci as gb,
  Im as hb,
  Be as ib,
  Bt as jb,
  Et as kb,
  pl as lb,
  ze as mb,
  _N as nb,
  fl as ob,
  KN as pb,
  UN as qb,
  He as rb,
  Dm as sb,
  $N as tb,
  qN as ub,
  ml as vb,
  Zn as wb,
  yl as xb,
  XN as yb,
  YN as zb,
  Qn as Ab,
  wm as Bb,
  Lm as Cb,
  Mm as Db,
  Bm as Eb,
  Em as Fb,
  Am as Gb,
  Fm as Hb,
  JN as Ib,
  ZN as Jb,
  QN as Kb,
  eR as Lb,
  tR as Mb,
  nR as Nb,
  rR as Ob,
  oR as Pb,
  iR as Qb,
  aR as Rb,
  hl as Sb,
  sR as Tb,
  lR as Ub,
  uR as Vb,
  dR as Wb,
  cR as Xb,
  pR as Yb,
  fR as Zb,
  pi as _b,
  mR as $b,
  yR as ac,
  hR as bc,
  xl as cc,
  xR as dc,
  gR as ec,
  bR as fc,
  TR as gc,
  CR as hc,
  er as ic,
  VR as jc,
  gl as kc,
  tr as lc,
  SR as mc,
  NR as nc,
  RR as oc,
  PR as pc,
  kR as qc,
  vR as rc,
  IR as sc,
  DR as tc,
  wR as uc,
  LR as vc,
  Om as wc,
  MR as xc,
  BR as yc,
  ER as zc,
  Wr as Ac,
  TB as Bc,
  CB as Cc,
  Zy as Dc,
  Yv as Ec,
  Jv as Fc,
  Ot as Gc,
  Vl as Hc,
  nr as Ic,
  zm as Jc,
  at as Kc,
  ir as Lc,
  Hm as Mc,
  Gm as Nc,
  Sl as Oc,
  Nl as Pc,
  jm as Qc,
  fi as Rc,
  xi as Sc,
  ar as Tc,
  Rl as Uc,
  Xm as Vc,
  oP as Wc,
  iP as Xc,
  aP as Yc,
  Ym as Zc,
  sP as _c,
  cP as $c,
  gi as ad,
  pP as bd,
  bi as cd,
  vl as dd,
  hP as ed,
  Ti as fd,
  sr as gd,
  NP as hd,
  RP as id,
  PP as jd,
  kP as kd,
  vP as ld,
  Dl as md,
  IP as nd,
  lr as od,
  mn as pd,
  BP as qd,
  EP as rd,
  AP as sd,
  UP as td,
  ay as ud,
  ly as vd,
  uy as wd,
  cy as xd,
  $P as yd,
  fy as zd,
  qP as Ad,
  XP as Bd,
  my as Cd,
  YP as Dd,
  hy as Ed,
  JP as Fd,
  Bl as Gd,
  ZP as Hd,
  Vi as Id,
  QP as Jd,
  El as Kd,
  ek as Ld,
  tk as Md,
  nk as Nd,
  Fl as Od,
  rk as Pd,
  Ty as Qd,
  Cy as Rd,
  ok as Sd,
  ik as Td,
  Vy as Ud,
  ak as Vd,
  sk as Wd,
  lk as Xd,
  uk as Yd,
  dk as Zd,
  ck as _d,
  M as $d,
  zl as ae,
  Si as be,
  cr as ce,
  Hl as de,
  mk as ee,
  yk as fe,
  Gl as ge,
  hk as he,
  xk as ie,
  gk as je,
  Sy as ke,
  Rk as le,
  ye as me,
  Pk as ne,
  Kl as oe,
  kk as pe,
  vk as qe,
  Ik as re,
  $l as se,
  F as te,
  ql as ue,
  PB as ve,
  kB as we,
  vB as xe,
  xg as ye,
  gg as ze,
  IB as Ae,
  ic as Be,
  ac as Ce,
  sc as De,
  gt as Ee,
  DB as Fe,
  Tg as Ge,
  wB as He,
  uc as Ie,
  LB as Je,
  Cg as Ke,
  MB as Le,
  BB as Me,
  Vg as Ne,
  zr as Oe,
  dc as Pe,
  EB as Qe,
  Hr as Re,
  ha as Se,
  Gr as Te,
  Rg as Ue,
  jr as Ve,
  pc as We,
  fc as Xe,
  AB as Ye,
  FB as Ze,
  vg as _e,
  zB as $e,
  HB as af,
  Rn as bf,
  UB as cf,
  $B as df,
  qB as ef,
  Lg as ff,
  xa as gf,
  ga as hf,
  Bg as if,
  XB as jf,
  QB as kf,
  eE as lf,
  Ag as mf,
  tE as nf,
  Og as of,
  nE as pf,
  rE as qf,
  bl as rf,
  FR as sf,
  cn as tf,
  At as uf,
  OR as vf,
  WR as wf,
  zR as xf,
  pn as yf,
  HR as zf,
  Tl as Af,
  Ft as Bf,
  GR as Cf,
  Cl as Df,
  jR as Ef,
  _R as Ff,
  KR as Gf,
  Wk as Hf,
  Py as If,
  zk as Jf,
  Yl as Kf,
  he as Lf,
  Jl as Mf,
  Hk as Nf,
  Gk as Of,
  Xl as Pf,
  jk as Qf,
  _k as Rf,
  Kk as Sf,
  Zl as Tf,
  Iy as Uf,
  Uk as Vf,
  wy as Wf,
  lt as Xf,
  $k as Yf,
  qk as Zf,
  Xk as _f,
  yc as $f,
  zg as ag,
  _r as bg,
  Ta as cg,
  hc as dg,
  sE as eg,
  lE as fg,
  uE as gg,
  dE as hg,
  cE as ig,
  mE as jg,
  yE as kg,
  bc as lg,
  Jt as mg,
  gE as ng,
  Tc as og,
  bE as pg,
  TE as qg,
  CE as rg,
  U as sg,
  O as tg,
  tu as ug,
  ut as vg,
  Qk as wg,
  dt as xg,
  fr as yg,
  hn as zg,
  iu as Ag,
  au as Bg,
  yr as Cg,
  kv as Dg,
  wv as Eg,
  Lv as Fg,
  pt as Gg,
  Mv as Hg,
  Bv as Ig,
  Ev as Jg,
  bn as Kg,
  hr as Lg,
  Vu as Mg,
  Oi as Ng,
  Ov as Og,
  Wv as Pg,
  Yy as Qg,
  Su as Rg,
  $v as Sg,
  xr as Tg,
  qv as Ug,
  Qy as Vg,
  ft as Wg,
  nI as Xg,
  pI as Yg,
  fI as Zg,
  Gt as _g,
  Wi as $g,
  mI as ah,
  yI as bh,
  Nu as ch,
  sh as dh,
  hI as eh,
  Ru as fh,
  xI as gh,
  gI as hh,
  bI as ih,
  Pu as jh,
  lh as kh,
  TI as lh,
  CI as mh,
  VI as nh,
  SI as oh,
  dh as ph,
  ph as qh,
  NI as rh,
  PE as sh,
  Ca as th,
  Ug as uh,
  kE as vh,
  Kr as wh,
  IE as xh,
  Vc as yh,
  EE as zh,
  Sc as Ah,
  Zt as Bh,
  Xg as Ch,
  AE as Dh,
  on as Eh,
  aH as Fh,
  sH as Gh,
  df as Hh,
  Ur as Ih,
  WE as Jh,
  Na as Kh,
  zE as Lh,
  HE as Mh,
  Hu as Nh,
  Mh as Oh,
  gD as Ph,
  bD as Qh,
  _u as Rh,
  TD as Sh,
  CD as Th,
  xo as Uh,
  Yg as Vh,
  Pn as Wh,
  $r as Xh,
  Xr as Yh,
  $e as Zh,
  Yr as _h,
  Jr as $h,
  qE as ai,
  XE as bi,
  YE as ci,
  JE as di,
  ZE as ei,
  QE as fi,
  eA as gi,
  Qr as hi,
  rA as ii,
  kc as ji,
  cA as ki,
  vc as li,
  Ic as mi,
  pA as ni,
  Dc as oi,
  fA as pi,
  cf as qi,
  TH as ri,
  RH as si,
  PH as ti,
  kH as ui,
  IC as vi,
  yf as wi,
  vH as xi,
  IH as yi,
  Ra as zi,
  Pa as Ai,
  yA as Bi,
  ab as Ci,
  hA as Di,
  xA as Ei,
  ge as Fi,
  mh as Gi,
  yh as Hi,
  II as Ii,
  xh as Ji,
  DI as Ki,
  gh as Li,
  wI as Mi,
  LI as Ni,
  MI as Oi,
  BI as Pi,
  EI as Qi,
  AI as Ri,
  yt as Si,
  jt as Ti,
  Se as Ui,
  Lc as Vi,
  vu as Wi,
  Nh as Xi,
  UI as Yi,
  Au as Zi,
  $I as _i,
  qI as $i,
  Fu as aj,
  DA as bj,
  bt as cj,
  ka as dj,
  Qt as ej,
  Mc as fj,
  to as gj,
  wA as hj,
  LA as ij,
  MA as jj,
  pb as kj,
  Da as lj,
  Ec as mj,
  Wc as nj,
  Ba as oj,
  en as pj,
  yF as qj,
  ao as rj,
  hF as sj,
  xF as tj,
  Ac as uj,
  Fc as vj,
  De as wj,
  UA as xj,
  qA as yj,
  XA as zj,
  YA as Aj,
  zi as Bj,
  Hi as Cj,
  Ae as Dj,
  no as Ej,
  ro as Fj,
  uF as Gj,
  xb as Hj,
  io as Ij,
  gb as Jj,
  SF as Kj,
  NF as Lj,
  RF as Mj,
  Hc as Nj,
  Ea as Oj,
  PF as Pj,
  DF as Qj,
  wF as Rj,
  Aa as Sj,
  LF as Tj,
  YF as Uj,
  JF as Vj,
  ZF as Wj,
  QF as Xj,
  Vb as Yj,
  Nb as Zj,
  e0 as _j,
  lo as $j,
  t0 as ak,
  n0 as bk,
  r0 as ck,
  o0 as dk,
  i0 as ek,
  U_ as fk,
  rS as gk,
  Wn as hk,
  eD as ik,
  kh as jk,
  Ou as kk,
  Bb as lk,
  sp as mk,
  $0 as nk,
  q0 as ok,
  Fb as pk,
  X0 as qk,
  Y0 as rk,
  lp as sk,
  J0 as tk,
  Z0 as uk,
  Wb as vk,
  Q0 as wk,
  Wu as xk,
  Jp as yk,
  Yc as zk,
  Zp as Ak,
  g1 as Bk,
  Qp as Ck,
  hC as Dk,
  b1 as Ek,
  k1 as Fk,
  _a as Gk,
  v1 as Hk,
  nf as Ik,
  xC as Jk,
  I1 as Kk,
  D1 as Lk,
  gC as Mk,
  Tn as Nk,
  dD as Ok,
  cD as Pk,
  pD as Qk,
  fD as Rk,
  Ku as Sk,
  Ki as Tk,
  Uu as Uk,
  $u as Vk,
  qu as Wk,
  Ui as Xk,
  BD as Yk,
  Vr as Zk,
  ED as _k,
  AD as $k,
  Xu as al,
  Zc as bl,
  Qc as cl,
  c0 as dl,
  kb as el,
  p0 as fl,
  f0 as gl,
  ep as hl,
  m0 as il,
  vb as jl,
  tn as kl,
  y0 as ll,
  h0 as ml,
  x0 as nl,
  g0 as ol,
  b0 as pl,
  Gi as ql,
  iD as rl,
  aD as sl,
  Ih as tl,
  ji as ul,
  sD as vl,
  wh as wl,
  Yu as xl,
  nx as yl,
  Ju as zl,
  ed as Al,
  _D as Bl,
  rx as Cl,
  KD as Dl,
  UD as El,
  td as Fl,
  Sr as Gl,
  _e as Hl,
  $i as Il,
  tw as Jl,
  nw as Kl,
  rw as Ll,
  id as Ml,
  pw as Nl,
  ux as Ol,
  sd as Pl,
  ld as Ql,
  dx as Rl,
  Io as Sl,
  P0 as Tl,
  Tt as Ul,
  k0 as Vl,
  rp as Wl,
  w0 as Xl,
  L0 as Yl,
  ip as Zl,
  O0 as _l,
  In as $l,
  W0 as am,
  rt as bm,
  ap as cm,
  z0 as dm,
  H0 as em,
  G0 as fm,
  j0 as gm,
  oO as hm,
  Dn as im,
  iO as jm,
  up as km,
  _b as lm,
  Ub as mm,
  RO as nm,
  PO as om,
  kO as pm,
  vO as qm,
  uo as rm,
  IO as sm,
  DO as tm,
  cp as um,
  wO as vm,
  LO as wm,
  MO as xm,
  BO as ym,
  EO as zm,
  AO as Am,
  FO as Bm,
  OO as Cm,
  WO as Dm,
  zO as Em,
  HO as Fm,
  GO as Gm,
  jO as Hm,
  _O as Im,
  KO as Jm,
  UO as Km,
  $O as Lm,
  qO as Mm,
  XO as Nm,
  YO as Om,
  JO as Pm,
  ZO as Qm,
  QO as Rm,
  eW as Sm,
  tW as Tm,
  nW as Um,
  rW as Vm,
  oW as Wm,
  iW as Xm,
  $a as Ym,
  Q1 as Zm,
  Do as _m,
  lj as $m,
  Wf as an,
  Ij as bn,
  Qa as cn,
  O1 as dn,
  Ka as en,
  W1 as fn,
  U1 as gn,
  $1 as hn,
  af as in,
  Ua as jn,
  Y1 as kn,
  rf as ln,
  pW as mn,
  fW as nn,
  mW as on,
  yW as pn,
  nT as qn,
  iT as rn,
  Fa as sn,
  RW as tn,
  Ln as un,
  DW as vn,
  wW as wn,
  Rp as xn,
  uf as yn,
  rH as zn,
  hf as An,
  xf as Bn,
  gf as Cn,
  bf as Dn,
  Tf as En,
  So as Fn,
  No as Gn,
  J as Hn,
  FC as In,
  Sf as Jn,
  An as Kn,
  WH as Ln,
  EW as Mn,
  ho as Nn,
  AW as On,
  jW as Pn,
  Lp as Qn,
  XW as Rn,
  Mp as Sn,
  Bp as Tn,
  ez as Un,
  fz as Vn,
  Ep as Wn,
  go as Xn,
  UT as Yn,
  To as Zn,
  Ap as _n,
  Rf as $n,
  HH as ao,
  GH as bo,
  jH as co,
  Pf as do,
  KH as eo,
  UH as fo,
  $H as go,
  kf as ho,
  XH as io,
  YH as jo,
  JH as ko,
  vf as lo,
  QH as mo,
  eG as no,
  tG as oo,
  Po as po,
  oG as qo,
  iG as ro,
  aG as so,
  sG as to,
  Co as uo,
  bz as vo,
  Tz as wo,
  Cz as xo,
  XT as yo,
  Vz as zo,
  Wp as Ao,
  Vo as Bo,
  vz as Co,
  Iz as Do,
  Hp as Eo,
  Dz as Fo,
  wz as Go,
  Lz as Ho,
  Gp as Io,
  Mz as Jo,
  Bz as Ko,
  Ez as Lo,
  jp as Mo,
  Az as No,
  Fz as Oo,
  Xa as Po,
  dG as Qo,
  cG as Ro,
  pG as So,
  fG as To,
  ko as Uo,
  hG as Vo,
  xG as Wo,
  gG as Xo,
  bG as Yo,
  TG as Zo,
  vo as _o,
  SG as $o,
  NG as ap,
  RG as bp,
  PG as cp,
  kG as dp,
  Ya as ep,
  XC as fp,
  Lf as gp,
  wG as hp,
  LG as ip,
  JC as jp,
  MG as kp,
  BG as lp,
  ej as mp,
  Bf as np,
  nj as op,
  Ef as pp,
  _p as qp,
  Kp as rp,
  me as sp,
  Up as tp,
  Zz as up,
  rC as vp,
  oC as wp,
  Q as xp,
  rn as yp,
  Qz as zp,
  e1 as Ap,
  t1 as Bp,
  n1 as Cp,
  iC as Dp,
  aC as Ep,
  r1 as Fp,
  sC as Gp,
  o1 as Hp,
  i1 as Ip,
  lC as Jp,
  a1 as Kp,
  dC as Lp,
  Ha as Mp,
  pC as Np,
  qp as Op,
  s1 as Pp,
  Wj as Qp,
  Xp as Rp,
  c1 as Sp,
  rV as Tp,
  oV as Up,
  b_ as Vp,
  T_ as Wp,
  C_ as Xp,
  V_ as Yp,
  S_ as Zp,
  N_ as _p,
  R_ as $p,
  P_ as aq,
  k_ as bq,
  pV as cq,
  fV as dq,
  wV as eq,
  jV as fq,
  _V as gq,
  v_ as hq,
  ss as iq,
  I_ as jq,
  D_ as kq,
  k2 as lq,
  rm as mq,
  cs as nq,
  K as oq,
  Jf as pq,
  Zf as qq,
  Qf as rq,
  Zo as sq,
  em as tq,
  fS as uq,
  mS as vq,
  H2 as wq,
  ps as xq,
  fs as yq,
  G2 as zq,
  j2 as Aq,
  gS as Bq,
  _2 as Cq,
  K2 as Dq,
  nm as Eq,
  $2 as Fq,
  q2 as Gq,
  X2 as Hq,
  _f as Iq,
  Go as Jq,
  L as Kq,
  us as Lq,
  YV as Mq,
  E_ as Nq,
  A_ as Oq,
  ei as Pq,
  Ye as Qq,
  Hn as Rq,
  Te as Sq,
  CK as Tq,
  VK as Uq,
  SK as Vq,
  NK as Wq,
  am as Xq,
  sm as Yq,
  lm as Zq,
  um as _q,
  ms as $q,
  dm as ar,
  RK as br,
  OK as cr,
  wS as dr,
  GS as er,
  WK as fr,
  Vt as gr,
  H_ as hr,
  G_ as ir,
  St as jr,
  j_ as kr,
  __ as lr,
  ZV as mr,
  QV as nr,
  eS as or,
  tS as pr,
  Nt as qr,
  t2 as rr,
  oS as sr,
  Uf as tr,
  n2 as ur,
  an as vr,
  r2 as wr,
  Yo as xr,
  o2 as yr,
  i2 as zr,
  aS as Ar,
  a2 as Br,
  s2 as Cr,
  sS as Dr,
  lS as Er,
  l2 as Fr,
  u2 as Gr,
  uS as Hr,
  x2 as Ir,
  g2 as Jr,
  b2 as Kr,
  qf as Lr,
  dS as Mr,
  Jo as Nr,
  T2 as Or,
  C2 as Pr,
  V2 as Qr,
  S2 as Rr,
  $K as Sr,
  qK as Tr,
  XK as Ur,
  YK as Vr,
  JK as Wr,
  KS as Xr,
  US as Yr,
  ZK as Zr,
  R2 as _r,
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
//# sourceMappingURL=chunk-HB6AHKYH.mjs.map
