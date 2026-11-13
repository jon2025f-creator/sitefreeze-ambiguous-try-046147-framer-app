import { B as ln, d as Es, f as Dt, g as Pe, n as Fs, o as ke, z as Ks } from "chunk-Q5OEXSCG.mjs";
import { a as kt, b as ws, g as _, h as _n } from "chunk-WBRHMFUJ.mjs";
import { a as ks, b as se, e as _s, f as Us, g as ne, t as $s, w as wt } from "chunk-74EX34N2.mjs";
import { e as Kn, f as we, g as mm } from "chunk-GHDF5CG4.mjs";
import { Ne as Ce, Ob as Ms, nf as As, pd as Bs, xf as tt, zb as Ls } from "chunk-DPHJW6UJ.mjs";
import {
  A as We,
  b as et,
  c as vs,
  d as ee,
  e as Oe,
  f as Gn,
  g as q,
  i as Pt,
  j as Is,
  u as Ds,
  z as vt,
} from "chunk-2CEDOG4D.mjs";
import { a as sn, b as It } from "chunk-WRBBN7SY.mjs";
import { a as ce } from "chunk-SMHMQ5IL.mjs";
import { a as Un } from "chunk-MSHSIAEI.mjs";
import { g as Hs, k as Gs } from "chunk-4JPTQLZ5.mjs";
import { a as jn } from "chunk-UZNETSBG.mjs";
import { b as js } from "chunk-YSP5ZHDJ.mjs";
import { b as X } from "chunk-AYNVEX5D.mjs";
import { a as re } from "chunk-2FCXHKEL.mjs";
import {
  a as te,
  b as p,
  f as S,
  g as x,
  h as Os,
  j as B,
  p as P,
  r as Ws,
  s as Ve,
  v as zs,
} from "chunk-ARJ7WQTJ.mjs";
import { a as oe } from "chunk-SWYZG2NI.mjs";
import { o as Ps } from "chunk-MH6PQK43.mjs";
import { g as Cs, i as Vs, k as Ss, l as Qe, o as Ns, r as Rs } from "chunk-VHFKZWVR.mjs";
import { b as Ts, j as Rt } from "chunk-PFWVXZ76.mjs";
import { b as g, c as z } from "chunk-4JY5UMT2.mjs";
import { c as bs, e as M } from "chunk-WLHSDIGQ.mjs";
var Mf = bs((G) => {
  "use strict";
  var qa = Symbol.for("react.element"),
    Xa = Symbol.for("react.portal"),
    wr = Symbol.for("react.fragment"),
    Lr = Symbol.for("react.strict_mode"),
    Mr = Symbol.for("react.profiler"),
    Br = Symbol.for("react.provider"),
    Ar = Symbol.for("react.context"),
    YC = Symbol.for("react.server_context"),
    Er = Symbol.for("react.forward_ref"),
    Fr = Symbol.for("react.suspense"),
    Or = Symbol.for("react.suspense_list"),
    Wr = Symbol.for("react.memo"),
    zr = Symbol.for("react.lazy"),
    JC = Symbol.for("react.offscreen"),
    Lf;
  Lf = Symbol.for("react.module.reference");
  function Re(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case qa:
          switch (((e = e.type), e)) {
            case wr:
            case Mr:
            case Lr:
            case Fr:
            case Or:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case YC:
                case Ar:
                case Er:
                case zr:
                case Wr:
                case Br:
                  return e;
                default:
                  return t;
              }
          }
        case Xa:
          return t;
      }
    }
  }
  G.ContextConsumer = Ar;
  G.ContextProvider = Br;
  G.Element = qa;
  G.ForwardRef = Er;
  G.Fragment = wr;
  G.Lazy = zr;
  G.Memo = Wr;
  G.Portal = Xa;
  G.Profiler = Mr;
  G.StrictMode = Lr;
  G.Suspense = Fr;
  G.SuspenseList = Or;
  G.isAsyncMode = function () {
    return !1;
  };
  G.isConcurrentMode = function () {
    return !1;
  };
  G.isContextConsumer = function (e) {
    return Re(e) === Ar;
  };
  G.isContextProvider = function (e) {
    return Re(e) === Br;
  };
  G.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === qa;
  };
  G.isForwardRef = function (e) {
    return Re(e) === Er;
  };
  G.isFragment = function (e) {
    return Re(e) === wr;
  };
  G.isLazy = function (e) {
    return Re(e) === zr;
  };
  G.isMemo = function (e) {
    return Re(e) === Wr;
  };
  G.isPortal = function (e) {
    return Re(e) === Xa;
  };
  G.isProfiler = function (e) {
    return Re(e) === Mr;
  };
  G.isStrictMode = function (e) {
    return Re(e) === Lr;
  };
  G.isSuspense = function (e) {
    return Re(e) === Fr;
  };
  G.isSuspenseList = function (e) {
    return Re(e) === Or;
  };
  G.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === wr ||
      e === Mr ||
      e === Lr ||
      e === Fr ||
      e === Or ||
      e === JC ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === zr ||
          e.$$typeof === Wr ||
          e.$$typeof === Br ||
          e.$$typeof === Ar ||
          e.$$typeof === Er ||
          e.$$typeof === Lf ||
          e.getModuleId !== void 0))
    );
  };
  G.typeOf = Re;
});
var Af = bs((tj, Bf) => {
  "use strict";
  Bf.exports = Mf();
});
function un(e, t) {
  let o = 10 ** Math.round(Math.abs(t));
  return Math.round(e * o) / o;
}
function FS(e, t) {
  let n = e.toFixed(t);
  return t === 0 ? n : `${+n}`;
}
function ti(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function qs(e) {
  return Math.round(e * 2) / 2;
}
function Le(e, t) {
  return { x: e, y: t };
}
((R) => {
  ((R.isQuadrilateralPoints = (y) => y?.length === 4),
    (R.add = (...y) => y.reduce((C, W) => ({ x: C.x + W.x, y: C.y + W.y }), { x: 0, y: 0 })),
    (R.subtract = (y, C) => ({ x: y.x - C.x, y: y.y - C.y })),
    (R.multiply = (y, C) => ({ x: y.x * C, y: y.y * C })),
    (R.divide = (y, C) => ({ x: y.x / C, y: y.y / C })),
    (R.absolute = (y) => ({ x: Math.abs(y.x), y: Math.abs(y.y) })),
    (R.reverse = (y) => ({ x: y.x * -1, y: y.y * -1 })),
    (R.pixelAligned = (y, C = { x: 0, y: 0 }) => ({ x: ti(y.x, C.x), y: ti(y.y, C.y) })),
    (R.distance = (y, C) => {
      let W = Math.abs(y.x - C.x),
        j = Math.abs(y.y - C.y);
      return Math.sqrt(W * W + j * j);
    }),
    (R.angle = (y, C) => (Math.atan2(C.y - y.y, C.x - y.x) * 180) / Math.PI - 90),
    (R.angleFromX = (y, C) => (Math.atan2(C.y - y.y, C.x - y.x) * 180) / Math.PI),
    (R.isEqual = (y, C) => y.x === C.x && y.y === C.y),
    (R.rotationNormalizer = () => {
      let y;
      return (C) => {
        typeof y != "number" && (y = C);
        let W = y - C,
          j = Math.abs(W) + 180,
          v = Math.floor(j / 360);
        return (W < 180 && (C -= v * 360), W > 180 && (C += v * 360), (y = C), C);
      };
    }));
  function h(y, C) {
    return { x: (y.x + C.x) / 2, y: (y.y + C.y) / 2 };
  }
  R.center = h;
  function T(y) {
    let C = 0,
      W = 0;
    y.forEach((Z) => {
      ((C += Z.x), (W += Z.y));
    });
    let j = C / y.length,
      v = W / y.length;
    return { x: j, y: v };
  }
  R.centroid = T;
  function V(y) {
    let C = R.centroid(y),
      W = new Map();
    for (let j = 0; j < y.length; j++) {
      let v = y[j];
      v && W.set(v, Math.atan2(v.y - C.y, v.x - C.x));
    }
    return y.sort((j, v) => (W.get(j) ?? 0) - (W.get(v) ?? 0));
  }
  R.sortClockwise = V;
})((Le ||= {}));
function Xs(e) {
  return e * (Math.PI / 180);
}
var it = (() => {
  function e(t, n) {
    return { a: t, b: n };
  }
  return (
    (e.offset = (t, n) => {
      let o = Le.angleFromX(t.a, t.b),
        r = Xs(o),
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
        R = T / h;
      return o && (V < 0 || V > 1 || R < 0 || R > 1)
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
      let n = un(e.x, t),
        o = un(e.y, t),
        r = un(e.width, t),
        i = un(e.height, t);
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
      maxX: N.maxX(e),
      minY: e.y,
      midY: e.y + e.height / 2,
      maxY: N.maxY(e),
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
      let t = { x: Math.min(...e.map(N.minX)), y: Math.min(...e.map(N.minY)) },
        n = { x: Math.max(...e.map(N.maxX)), y: Math.max(...e.map(N.maxY)) };
      return N.fromTwoPoints(t, n);
    },
    intersection: (e, t) => {
      let n = Math.max(e.x, t.x),
        o = Math.min(e.x + e.width, t.x + t.width),
        r = Math.max(e.y, t.y),
        i = Math.min(e.y + e.height, t.y + t.height);
      return { x: n, y: r, width: o - n, height: i - r };
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
        o = N.maxX(t);
      return n > t.x && o > e.x;
    },
    overlapVertically: (e, t) => {
      let n = N.maxY(e),
        o = N.maxY(t);
      return n > t.y && o > e.y;
    },
    doesNotIntersect: (e, t) => !t.some((n) => N.intersects(n, e)),
    isEqual: (e, t) => N.equals(e, t),
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
        t.x < e.x ? (n = e.x - t.x) : t.x > N.maxX(e) && (n = t.x - N.maxX(e)),
        t.y < e.y ? (o = e.y - t.y) : t.y > N.maxY(e) && (o = t.y - N.maxY(e)),
        Le.distance({ x: n, y: o }, { x: 0, y: 0 })
      );
    },
    delta: (e, t) => {
      let n = { x: N.minX(e), y: N.minY(e) },
        o = { x: N.minX(t), y: N.minY(t) };
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
      let n = N.minX(e),
        o = N.minY(e),
        r = N.maxX(e),
        i = N.maxY(e);
      for (let a of t) if (a.x < n || a.x > r || a.y < o || a.y > i) return !0;
      return !1;
    },
    edges: (e) => {
      let [t, n, o, r] = N.cornerPoints(e);
      return [it(t, n), it(n, o), it(o, r), it(r, t)];
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
              We(o);
          }
          break;
        case "left":
          r.x = t.x - e.width;
          break;
        case "right":
          r.x = t.x + t.width;
          break;
        default:
          We(n);
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
              We(o);
          }
          break;
        case "top":
          r.y = t.y - e.height;
          break;
        case "bottom":
          r.y = t.y + t.height;
          break;
        default:
          We(n);
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
      let n = N.center(e),
        o = it(t, n),
        r = N.edges(e);
      for (let i = 0; i < r.length; i++) {
        let a = r[i];
        if (a && it.intersection(o, a, !0)) {
          let s = Ys[i];
          return (vt(s, () => `Invalid edge name: ${JSON.stringify(Ys)}`), { edge: a, name: s });
        }
      }
    },
    closestRect: (e, t) => {
      let n = 0,
        o = e[0];
      vt(o, "Rect array is empty");
      let r = N.pointDistance(o, t);
      for (let i = 1; i < e.length; i += 1) {
        let a = e[i];
        vt(a);
        let s = N.pointDistance(a, t);
        if ((s < r && ((n = i), (o = a), (r = s)), r === 0)) break;
      }
      return { rect: o, index: n };
    },
  },
  Ys = ["top", "right", "bottom", "left"];
function Js(e, t, n) {
  let o = n ? `, use ${n} instead` : "",
    r = `Deprecation warning: ${e} will be removed in version ${t}${o}.`;
  ks(r);
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
        Js(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        Me(t) ? t : new ni(t)
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
      (e.get = (t, n) => (t == null ? n : Me(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let o in t) {
          let r = t[o];
          Me(r) ? (n[o] = r.get()) : (n[o] = r);
        }
        return n;
      }),
      e
    );
  })(),
  Zs = "onUpdate",
  Qs = "finishTransaction";
function Me(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    Zs in e &&
    e[Zs] instanceof Function &&
    Qs in e &&
    e[Qs] instanceof Function
  );
}
function ym(e, t) {
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
var ni = class {
  constructor(t) {
    this.value = t;
  }
  value;
  observers = new $n();
  static interpolationFor(t, n) {
    if (Me(t)) return ym(t, n);
  }
  get() {
    return this.value;
  }
  set(t, n) {
    let o = this.value;
    (Me(t) && (t = t.get()), (this.value = t));
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
function hm(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function qn(e) {
  return typeof e != "string" && typeof e != "number";
}
function Xn(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !hm(e);
}
function k(e) {
  return Number.isFinite(e);
}
function oN(e) {
  return k(e) ? e : void 0;
}
var cN = {
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
function pN(e) {
  return !(!Xn(e) || !qn(e));
}
var oi = {
  quickfix: (e) => (
    (Lt(e.widthType) || Lt(e.heightType)) && (e.aspectRatio = null),
    k(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || Lt(e.widthType) || k(e.maxWidth)) && (e.right = !1), (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || Lt(e.heightType) || k(e.maxHeight)) && (e.bottom = !1), (e.heightType = 0)),
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
var ri = {
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
        m = oi.quickfix({
          left: k(t) || Me(t),
          right: k(n) || Me(n),
          top: k(o) || Me(o),
          bottom: k(r) || Me(r),
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
      let R = 0.5,
        y = 0.5;
      return (
        s && (R = parseFloat(s) / 100),
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
          centerAnchorX: R,
          centerAnchorY: y,
        }
      );
    },
    toSize: (e, t, n, o) => {
      let r = null,
        i = null,
        a = t?.sizing ? ie.getNumber(t?.sizing.width) : null,
        s = t?.sizing ? ie.getNumber(t?.sizing.height) : null,
        l = el(e.left, e.right);
      if (a && k(l)) r = a - l;
      else if (n && Lt(e.widthType)) r = n.width;
      else if (k(e.width))
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
            We(e.widthType);
        }
      let u = el(e.top, e.bottom);
      if (s && k(u)) i = s - u;
      else if (n && Lt(e.heightType)) i = n.height;
      else if (k(e.height))
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
            We(e.heightType);
        }
      return Vm(r, i, e, { height: s ?? 0, width: a ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, n = null, o = !1, r = null) => {
      let i = e.left || 0,
        a = e.top || 0,
        { width: s, height: l } = ri.toSize(e, t, n, r),
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
      return o ? N.pixelAligned(f) : f;
    },
  },
  xm = 200,
  gm = 200;
function Yn(e, t, n, o) {
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
      if (!o) return bm(e);
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
function bm(e) {
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
function Tm(e, t, n, o) {
  return (
    t.minHeight && (e = Math.max(Yn("minHeight", t.minHeight, n, o), e)),
    t.maxHeight && (e = Math.min(Yn("maxHeight", t.maxHeight, n, o), e)),
    e
  );
}
function Cm(e, t, n, o) {
  return (
    t.minWidth && (e = Math.max(Yn("minWidth", t.minWidth, n, o), e)),
    t.maxWidth && (e = Math.min(Yn("maxWidth", t.maxWidth, n, o), e)),
    e
  );
}
function Vm(e, t, n, o, r) {
  let i = Cm(k(e) ? e : xm, n, o, r),
    a = Tm(k(t) ? t : gm, n, o, r);
  return (
    k(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (k(n.left) && k(n.right)
        ? (a = i / n.aspectRatio)
        : k(n.top) && k(n.bottom)
          ? (i = a * n.aspectRatio)
          : n.widthType !== 0
            ? (a = i / n.aspectRatio)
            : (i = a * n.aspectRatio)),
    { width: i, height: a }
  );
}
function el(e, t) {
  return !k(e) || !k(t) ? null : e + t;
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
function tl(e, t = class {}) {
  class n extends t {
    __class = Mt[e];
    static displayName = `WithClassDiscriminatorMixin(${e})`;
  }
  return ((n.prototype.__class = e), n);
}
function mN(e, t) {
  ((e.prototype.__class = t), (e.displayName = `WithClassDiscriminatorMixin(${t})`));
}
var Sm = new Set(Object.keys(Mt));
function nl(e) {
  return Sm.has(e);
}
function ol(e) {
  if (!nl(e)) return !1;
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
function rl(e) {
  return e ? (e === "RootNode" ? !0 : ii(e)) : !1;
}
function ii(e) {
  return e
    ? !!(Nm(e) || ai(e) || e === "OverlayNode" || e === "SlotNode" || e === "SlotPropertyNode")
    : !1;
}
function Nm(e) {
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
function ai(e) {
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
function il(e) {
  switch (e) {
    case "CollectionNode":
    case "CollectionItemNode":
    case "ContentManagementNode":
      return !0;
    default:
      return !1;
  }
}
function VN(e) {
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
function SN(e) {
  return e ? ol(e) : !1;
}
function NN(e) {
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
function RN(e) {
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
function IN(e) {
  return I(e, "RootNode");
}
function DN(e) {
  return I(e, "AgentSkillNode");
}
function wN(e) {
  return I(e, "AgentSkillsListNode");
}
function LN(e) {
  return I(e, "DatabaseListNode");
}
function si(e) {
  return I(e, "FrameNode");
}
function al(e) {
  return si(e) && e.layout === "stack";
}
function sl(e) {
  return si(e) && e.layout === "grid";
}
function MN(e) {
  return si(e) && e.layout !== void 0;
}
function li(e) {
  return !e || (!al(e) && !sl(e)) ? !1 : !!e.dataIdentifier;
}
function Rm(e) {
  return !e || (!al(e) && !sl(e)) || e.dataIdentifier ? !1 : !!e.dataRepeaterArray;
}
function Be(e) {
  return e ? li(e) || Rm(e) : !1;
}
function Bt(e) {
  return I(e, "SmartComponentNode");
}
function At(e) {
  return e?.__class === "LayoutTemplateNode";
}
function ll(e) {
  return e?.__class === "VectorSetNode";
}
function ze(e) {
  return I(e, "WebPageNode");
}
function BN(e) {
  return e?.__class === "DesignPageNode";
}
function ul(e) {
  return e?.__class === "CanvasPageNode";
}
function AN(e) {
  return I(e, "ContentManagementNode");
}
function EN(e) {
  return e?.__class === "TextNode";
}
function He(e) {
  return I(e, "RichTextNode");
}
function Pm(e) {
  return I(e, "CodeComponentNode");
}
function FN(e) {
  return I(e, "ShaderNode");
}
function ON(e) {
  return I(e, "OverlayNode");
}
function dl(e) {
  return I(e, "SVGNode");
}
function Zn(e) {
  return I(e, "CollectionNode");
}
function cl(e) {
  return I(e, "CollectionItemNode");
}
function WN(e) {
  return e?.__class === "BranchNode";
}
function zN(e) {
  return I(e, "BranchesNode");
}
function Qn(e) {
  return I(e, "ShapeContainerNode");
}
function km(e) {
  return e?.__class === "BooleanShapeNode";
}
function vm(e) {
  return e?.__class === "ShapeGroupNode";
}
function Im(e) {
  return e?.__class === "PathNode";
}
function Dm(e) {
  return e?.__class === "RectangleShapeNode";
}
function wm(e) {
  return e?.__class === "StarShapeNode";
}
function Lm(e) {
  return e?.__class === "OvalShapeNode";
}
function Mm(e) {
  return e?.__class === "PolygonShapeNode";
}
function HN(e) {
  return vm(e) || km(e) || Im(e) || Dm(e) || Lm(e) || Mm(e) || wm(e);
}
function GN(e) {
  return I(e, "RoutesNode");
}
function jN(e) {
  return I(e, "RedirectRouteNode");
}
function _N(e) {
  return I(e, "ProxyRouteNode");
}
function KN(e) {
  return I(e, "RewriteRouteNode");
}
function UN(e) {
  return I(e, "HeaderRouteNode");
}
function $N(e) {
  return I(e, "FirewallRouteNode");
}
function qN(e) {
  return I(e, "ColorStyleTokenNode");
}
function XN(e) {
  return I(e, "ColorStyleTokenListNode");
}
function YN(e) {
  return I(e, "SharedEnumListNode");
}
function pl(e) {
  return I(e, "SharedEnumNode");
}
function JN(e) {
  return I(e, "ErrorListNode");
}
function ZN(e) {
  return e?.__class === "ErrorNode";
}
function QN(e) {
  return e?.__class === "FormPlainTextInputNode";
}
function eR(e) {
  return e?.__class === "FormBooleanInputNode";
}
function tR(e) {
  return e?.__class === "FormSelectNode";
}
function nR(e) {
  return I(e, "ComponentPresetNode");
}
function oR(e) {
  return I(e, "PresetsListNode");
}
function ui(e) {
  return e?.__class === "TextStylePresetNode";
}
function rR(e) {
  return ui(e) && !e.replicaInfo;
}
function iR(e) {
  return ui(e) && !!e.replicaInfo;
}
function aR(e) {
  return e?.__class === "LinkStylePresetNode";
}
function fl(e) {
  return e?.__class === "BlockquoteStylePresetNode";
}
function sR(e) {
  return e?.__class === "TableStylePresetNode";
}
function lR(e) {
  return fl(e) && !e.replicaInfo;
}
function uR(e) {
  return !!e?.replicaInfo && (ui(e) || fl(e));
}
function dR(e) {
  return e?.__class === "ImageStylePresetNode";
}
function cR(e) {
  return e?.__class === "InlineCodeStylePresetNode";
}
function eo(e) {
  return I(e, "RouteSegmentNode");
}
function pR(e) {
  return I(e, "RouteSegmentRootNode");
}
function ml(e) {
  return I(e, "SlotNode");
}
function to(e) {
  return I(e, "SlotPropertyNode");
}
function fR(e) {
  return I(e, "EntityFolderNode");
}
function mR(e) {
  return I(e, "EntityReferenceNode");
}
function yR(e) {
  return I(e, "ExternalModulesListNode");
}
function hR(e) {
  return e?.__class === "ExternalModuleNode";
}
function xR(e) {
  return I(e, "AnalyticsScopeNode");
}
function gR(e) {
  return e?.__class === "LocalizationGlossaryNode";
}
function bR(e) {
  return e?.__class === "LocalizationGlossaryItemNode";
}
function TR(e) {
  return I(e, "FunnelNode");
}
function CR(e) {
  return I(e, "FunnelStepNode");
}
function VR(e) {
  return I(e, "FunnelStepActionNode");
}
function Bm(e) {
  return e ? Pm(e) && e.isVectorInstance : !1;
}
function SR(e) {
  if (!Bm(e)) return !1;
  let t = e.dynamicVectorSetIdentifier;
  return t?.type === "variableReference" || t?.type === "computedValue";
}
function NR(e) {
  return e?.__class === "CustomCodeScopeNode";
}
function RR(e) {
  return e?.__class === "CustomCodeNode";
}
var yl = "hidden master",
  kR = { isMaster: !1, isExternalMaster: null, replicaInfo: null },
  Am = "isMaster";
function cn(e) {
  return Am in e;
}
function Et(e) {
  return cn(e) && e.isMaster;
}
function vR(e) {
  return cn(e) && !!e.isExternalMaster;
}
function IR(e) {
  let t = cn(e) ? e.isExternalMaster : null;
  return !!t && t !== yl;
}
function DR(e) {
  return cn(e) ? e.isExternalMaster === yl : !1;
}
function pn(e) {
  return e ? cn(e) && !!e.replicaInfo : !1;
}
function wR(e) {
  return e ? !pn(e) : !1;
}
function hl(e) {
  return pn(e) && !!e.replicaInfo.inheritsFrom;
}
function Ft(e) {
  return e ? !!e.originalid && !pn(e) : !1;
}
function LR(e) {
  return !!e.originalid;
}
function xl(e) {
  for (let t of e.ancestors()) if (Et(t)) return !0;
  return !1;
}
function MR(e) {
  return Et(e) || xl(e);
}
function BR(e, { includeSelf: t } = { includeSelf: !0 }) {
  if (t && Et(e)) return e;
  for (let n of e.ancestors()) if (Et(n)) return n;
  return null;
}
function AR(e) {
  return Ft(e) || xl(e);
}
function Ot(e) {
  return B(e) && e.length === 4 && e.every(S);
}
function gl(e) {
  return Ot(e) ? [Math.min(Math.max(e[0], 0), 1), e[1], Math.min(Math.max(e[2], 0), 1), e[3]] : e;
}
function no(e) {
  for (let t of Reflect.ownKeys(e)) {
    let n = e[t];
    !n || (typeof n != "object" && !Ws(n)) || no(n);
  }
  return Object.freeze(e);
}
var Em = {
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
no(Em);
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
no(at);
var Wt = "type",
  oo = "durationBasedSpring",
  io = "ease",
  Fm = "duration",
  Om = "delay",
  bl = "stiffness",
  Tl = "damping",
  Wm = "mass",
  fi = [Fm, Om, bl, Tl, Wm],
  di = "bounce",
  ro = "stagger";
function fn(e) {
  return e === "spring" || e === "tween" || e === "inertia" || e === !1;
}
function mi(e) {
  return !x(e) || !fn(e[Wt]) || !Ot(e[io]) ? !1 : fi.every((t) => S(e[t]));
}
function ao(e) {
  return x(e) ? (fn(e[Wt]) || Ot(e[io]) ? !0 : fi.some((t) => S(e[t]))) : !1;
}
function Cl(e) {
  switch (e.type) {
    case "spring":
      return { type: "spring", ...Um(e), delay: e.delay };
    case "tween":
      return { type: "tween", duration: e.duration, ease: gl(e.ease), delay: e.delay };
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
var zm = ["stiffness", "damping", "mass"],
  Hm = ["duration", "bounce"],
  Gm = ["ease"];
function jm(e) {
  return "type" in e
    ? e.type === !1
      ? !0
      : e.type !== "tween" || Gm.some((t) => t in e)
        ? !1
        : e.duration === 0
    : !1;
}
function _m(e) {
  return e.type !== "spring" || zm.some((t) => t in e) ? !1 : Hm.some((t) => t in e);
}
var ci = "bounceStiffness",
  pi = "bounceDamping",
  Km = (e) => {
    let t = { ...at },
      n = e[Wt];
    fn(n) && (t[Wt] = jm(e) ? !1 : n);
    let o = e[io];
    Ot(o) && (t[io] = o);
    for (let r of fi) {
      let i = e[r];
      S(i) && (t[r] = i);
    }
    return (
      ci in e && S(e[ci]) && (t[bl] = e[ci]),
      pi in e && S(e[pi]) && (t[Tl] = e[pi]),
      ro in e && S(e[ro]) && (t[ro] = e[ro]),
      oo in e ? (t[oo] = e[oo]) : _m(e) && (t[oo] = !0),
      di in e && (t[di] = e[di]),
      t
    );
  };
function Vl(e) {
  return ao(e) && !fn(e[Wt]);
}
function qR(e, t = at) {
  return x(e) && fn(e[Wt]) ? e : ao(e) ? Km(e) : t;
}
function XR(e) {
  return mi(e) && e.type === "tween";
}
function YR(e) {
  return `all ${e.duration}s cubic-bezier(${e.ease.join(",")}) ${e.delay}s`;
}
function Um(e) {
  return e.type === "spring" && e.durationBasedSpring
    ? { duration: Math.min(e.duration, 10), bounce: e.bounce ?? 0 }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
var JR = (e) => e * 1e3;
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
  $m = {
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
function QR(e) {
  return e.type in $m;
}
var qm = /^(?![\p{L}\p{M}\d-]*-$)(?!-)[\p{L}\p{M}\d-]+$/u,
  Sl = /^(?:[\p{L}\p{M}\d](?:[\p{L}\p{M}\d-]*[\p{L}\p{M}\d])?\.)+[\p{L}\p{M}]+$/u;
function tP(e, t) {
  return e
    ? t && e === "www"
      ? "InvalidPhrase"
      : (t ? qm : Sl).exec(e)
        ? null
        : "InvalidCharacter"
    : "Empty";
}
function yi(e, t = !1) {
  try {
    let n = new URL(e);
    return n.protocol === "http:" || n.protocol === "https:"
      ? n.hostname === "localhost"
        ? !0
        : Sl.test(n.hostname)
      : !t;
  } catch {
    return !1;
  }
}
function nP(e) {
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
function hi(e) {
  return (
    (e = e.trim()),
    e
      ? yi(e, !0)
        ? { result: "ok", normalizedValue: e }
        : yi(`https://${e}`)
          ? { result: "ok", normalizedValue: `https://${e}` }
          : { result: "error", message: "Please enter a valid URL" }
      : { result: "error", message: "Please enter a valid URL" }
  );
}
var Nl = ":([a-z]\\w*)",
  aP = new RegExp(Nl, "i"),
  xi = new RegExp(Nl, "gi");
var Rl = "type",
  Xm = "fetchDataValue";
function so(e) {
  return x(e) && Rl in e && e[Rl] === Xm;
}
function mP(e) {
  return hi(e.url).result !== "error";
}
function yP(e) {
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
function hP(e) {
  if (e.controlProp) return e.controlProp.value;
  let t = e.fallbackValue;
  return (g(!P(t), "fallbackValue must be defined"), t);
}
function xP(e) {
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
function kl(e, t) {
  if (
    !so(t) ||
    e.url !== t.url ||
    e.resultKeyPath !== t.resultKeyPath ||
    e.cacheDuration !== t.cacheDuration ||
    e.fallbackValue !== t.fallbackValue
  )
    return !1;
  let n = Pl(e.url),
    o = Pl(t.url);
  if (n.length !== o.length) return !1;
  for (let r in e.variables) if (!ce(e.variables[r], t.variables[r])) return !1;
  return !0;
}
function gP(e, t) {
  let n = hi(e.url);
  return n.result !== "ok"
    ? e.url
    : n.normalizedValue.replaceAll(xi, (i, a) => {
        let s = e.variables[a];
        return s ? (p(s) ? s : t(s)) : "";
      });
}
function Pl(e) {
  let t = e.matchAll(xi),
    n = new Set();
  for (let o of t) {
    let r = o[1];
    r && r.length !== 0 && n.add(r);
  }
  return Array.from(n);
}
var bP = [
  "https://api.fetch.tools/weather?city=:city",
  "https://api.fetch.tools/views",
  "https://api.fetch.tools/location",
  "https://api.fetch.tools/emoji",
];
var vl = {
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
  Ym = {
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
function lo(e) {
  return p(e) && Object.hasOwn(vl, e);
}
function mn(e) {
  return p(e) && Object.hasOwn(Ym, e);
}
var NP = mn,
  Jm = { boolean: !0, number: !0, string: !0, color: !0, date: !0, link: !0, image: !0 };
function RP(e) {
  return p(e) && Object.hasOwn(Jm, e);
}
function PP(e) {
  return jn(vl).filter(e);
}
var Zm = { responsiveimage: !0 };
function EP(e) {
  return lo(e) ? !0 : p(e) && e in Zm;
}
var Qm = "type",
  ey = "valueTransform",
  ty = [
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
  ny = new Set(ty),
  oy = {
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
function ry(e) {
  return ny.has(e);
}
function iy(e) {
  return Object.hasOwn(oy, e);
}
var ay = {
  enumToDisplayName: !0,
  convertFromEnum: !0,
  convertFromBoolean: !0,
  convertFromString: !0,
  arrayToArray: !0,
  toDateString: !0,
};
function sy(e) {
  return Object.hasOwn(ay, e);
}
var ly = {
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
  co = _s(ly);
function FP() {
  return co;
}
function uy(e) {
  let t = gi[e];
  return !(Ve(t) || P(t));
}
function OP(e) {
  return uy(e.name);
}
function WP(e) {
  return ry(e.name) && Dl(e.name) !== null;
}
function dy(e) {
  return iy(e) || sy(e);
}
var Il = [
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
function zP(e) {
  return Il.includes(e);
}
var gi = {
    contains: ["string", "multicollectionreference"],
    containsAny: ["multicollectionreference"],
    containsAll: ["multicollectionreference"],
    endsWith: ["string"],
    startsWith: ["string"],
    prefix: ["string"],
    suffix: ["string"],
    equals: ["string", "boolean", "number", "enum", "date", "collectionreference"],
    isSet: Il,
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
  cy = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of co) {
        let n = gi[t];
        if (n)
          for (let o of n) {
            let r = e.get(o);
            r ? r.push(t) : e.set(o, [t]);
          }
      }
      return e;
    };
  })();
function py(e) {
  return cy().get(e);
}
function HP(e) {
  let t = py(e);
  return !!(t && t.length > 0);
}
function Dl(e) {
  return gi[e];
}
var fy = {
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
function GP(e) {
  return fy[e];
}
var bi = {
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
  my = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of co) {
        let n = bi[t];
        for (let o of n) {
          let r = e.get(o);
          r ? r.push(t) : e.set(o, [t]);
        }
      }
      return e;
    };
  })();
function jP(e) {
  return my().get(e);
}
function wl(e) {
  return bi[e];
}
function _P(e, t) {
  return dy(e.name) ? bi[e.name].includes(t) : !1;
}
function KP(e) {
  switch (e.name) {
    case "convertFromEnum":
    case "convertFromBoolean":
    case "convertFromString":
      return e.outputType;
    default: {
      let t = wl(e.name);
      g(t.length === 1);
      let n = t[0];
      return (g(n, "Value transform output type must be defined"), n);
    }
  }
}
var UP = new Set(["convertFromBoolean", "equals", "isSet"]),
  Ll = {
    isSet: "Isn\u2019t set",
    equals: "Doesn\u2019t equal",
    startsWith: "Doesn\u2019t start with",
    endsWith: "Doesn\u2019t end with",
    contains: "Doesn\u2019t contain",
    greaterThan: "Less than or equal",
    lessThan: "Greater than or equal",
    isIncludedIn: "Isn\u2019t included in",
  };
function Ml(e) {
  return Object.hasOwn(Ll, e);
}
function $P(e, t) {
  if (t) return (g(Ml(e)), Ll[e]);
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
var yy = new Set(["prefix", "suffix"]);
function hy(e) {
  return yy.has(e);
}
var uo;
function xy(e) {
  return (
    uo ||
      (uo = new Set(
        co.filter((t) => {
          let n = Dl(t);
          if (n?.length !== 1 || n[0] !== "array") return !1;
          let o = wl(t);
          return o.length !== 1 ? !1 : o[0] === "array";
        })
      )),
    uo.has(e)
  );
}
function qP(e) {
  return xy(e) || hy(e);
}
function XP(e, t) {
  let n = e.findIndex((i) => i.id === t),
    o = e[n];
  if (!o) return null;
  let r = 1;
  if (Ml(o.name)) for (let i = n + 1, a = e.length; i < a && e[i]?.name === "negate"; i++) r++;
  return { start: n, length: r };
}
function gy(e) {
  return x(e) && e[Qm] === ey;
}
function Bl(e, t) {
  if (!gy(t) || e.name !== t.name) return !1;
  for (let n of jn(e)) if (n !== "id" && e[n] !== t[n]) return !1;
  return !0;
}
var YP = ["standard", "compact"],
  JP = ["short", "long"],
  ZP = ["decimal", "currency", "unit"],
  QP = ["symbol", "narrowSymbol", "code", "name"],
  ek = ["short", "narrow", "long"],
  tk = ["year", "month", "day", "hour12", "hour24", "minute"];
var Al = "type",
  yn = "variableReference";
function L(e) {
  return x(e) && Al in e && e[Al] === yn;
}
function El(e, t) {
  return { type: yn, id: e, providerId: t };
}
function Ti(e, t) {
  return { type: yn, id: e, providerId: t };
}
function po(e, t) {
  return L(t) ? e.id === t.id && e.providerId === t.providerId : !1;
}
var Fl = "transform";
function rk(e) {
  return L(e) && e.providerId === Fl;
}
function ik(e) {
  return { type: yn, id: e, providerId: Fl };
}
var Ol = "payload",
  Wl = ".";
function ak(e) {
  return L(e) && e.providerId === Ol;
}
function sk(e) {
  return { type: yn, id: e.join(Wl), providerId: Ol };
}
function lk(e) {
  let t = by(e.id);
  if (!t.some((n) => n.length === 0)) return t;
}
function by(e) {
  return e.split(Wl);
}
var zl = "type",
  Ci = "computedValue",
  Ty = {
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
function yk(e) {
  return p(e) && Object.hasOwn(Ty, e);
}
function ye(e) {
  return x(e) && zl in e && e[zl] === Ci;
}
function hk(e) {
  return ye(e) && so(e.startValue);
}
function Hl(e) {
  return ye(e) && L(e.startValue);
}
function xk(e) {
  return (
    ye(e) &&
    e.transforms.length === 1 &&
    e.transforms[0]?.name === "toDateString" &&
    e.transforms[0]?.display === "relative"
  );
}
function gk(e) {
  return ye(e) && e.transforms.some((t) => t.name === "toDateString");
}
function bk(e) {
  return ye(e) && e.transforms.some((t) => t.name === "toDateString" && t.display !== "relative");
}
function Gl(e, t) {
  return !ye(t) ||
    e.outputType !== t.outputType ||
    e.startValue.type !== t.startValue.type ||
    (L(e.startValue) && !po(e.startValue, t.startValue)) ||
    (so(e.startValue) && !kl(e.startValue, t.startValue)) ||
    e.transforms.length !== t.transforms.length
    ? !1
    : e.transforms.every((n, o) => Bl(n, t.transforms[o]));
}
function jl(e, t, n) {
  return L(t)
    ? { type: Ci, outputType: e, startValue: t, transforms: n }
    : { type: Ci, outputType: e, startValue: t, transforms: n };
}
function E(e) {
  return L(e) || ye(e);
}
function _l(e, t) {
  return L(e) ? po(e, t) : Gl(e, t);
}
var Ik = { isVariant: void 0, isBreakpoint: void 0, gesture: void 0, variantTransition: void 0 },
  Cy = "isVariant";
function Vy(e) {
  return Cy in e;
}
var Dk = ["hover", "pressed"],
  Sy = "gesture";
function Ul(e) {
  return Sy in e;
}
function he(e) {
  return Vy(e) && e.isVariant === !0;
}
function $l(e) {
  return he(e) && Et(e);
}
function wk(e) {
  for (let t of e.ancestors()) if ($l(t)) return t;
  return null;
}
function Lk(e) {
  return he(e) ? !Ul(e) || !e.gesture : !1;
}
function Kl(e) {
  return ql(e) && hl(e) && Ul(e) && !!e.gesture;
}
function Mk(e) {
  if (Kl(e)) return !0;
  if (!Ft(e)) return !1;
  for (let t of e.ancestors()) if (Kl(t)) return !0;
  return !1;
}
function Bk(e) {
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
function Ak(e) {
  return he(e) || Ny(e);
}
function Ny(e) {
  return e.cache.insideVariant;
}
function ql(e) {
  return pn(e) && he(e);
}
function Ry(e) {
  return Ft(e) && e.cache.insideVariant;
}
function Ek(e) {
  return ql(e) || Ry(e);
}
var Py = "isBreakpoint";
function ky(e) {
  return Py in e;
}
function lt(e) {
  return e ? he(e) && ky(e) && e.isBreakpoint === !0 : !1;
}
function Fk(e) {
  return lt(e) && $l(e);
}
function Ok(e) {
  return e ? he(e) && !lt(e) : !1;
}
function Wk(e) {
  return he(e) ? mi(e.variantTransition) || E(e.variantTransition) || Vl(e.variantTransition) : !1;
}
var vy = Rt("serializeJS"),
  Iy = {
    serializeSpread(e) {
      return `...${e}`;
    },
    serializeKeyValue(e, t, n) {
      let o = $(t, n);
      if (P(o)) return;
      let r = e;
      if (!/^[a-z$_][\w$]*$/i.test(r)) r = JSON.stringify(r);
      else if (r === o) return o;
      return `${r}: ${o}`;
    },
    joinObject(e) {
      return `{${e.join(", ")}}`;
    },
  },
  Xl = new Intl.Collator("en", { sensitivity: "base" }).compare;
function fo(e, t, n) {
  let o = Yl(n, t),
    r = [];
  for (let [i, a] of Object.entries(t)) {
    let s = e.serializeKeyValue(i, a, o);
    s && r.push(s);
  }
  return (
    t instanceof ut
      ? (ut.isSorted(t) && r.sort(Xl),
        r.unshift(...ut.spreadsAtStart(t).map(e.serializeSpread)),
        r.push(...ut.spreadsAtEnd(t).map(e.serializeSpread)))
      : r.sort(Xl),
    e.joinObject(r)
  );
}
function $(e, t = new Set()) {
  if (e instanceof F) return String(e);
  if (typeof e == "number" || typeof e == "boolean" || Ve(e)) return String(e);
  if (p(e))
    return JSON.stringify(e).replace(
      /[\u2028\u2029]/gu,
      (n) => `\\u${n.charCodeAt(0).toString(16)}`
    );
  if (B(e)) {
    let n = Yl(t, e),
      o = [];
    for (let r of e) {
      let i = $(r, n);
      P(i) || o.push(i);
    }
    return `[${o.join(", ")}]`;
  } else if (typeof e == "object") return fo(Iy, e, t);
}
function Yl(e, t) {
  if (e.has(t))
    throw (
      vy.error("Encountered circular reference to object while serializing:", t),
      Error("Circular Reference")
    );
  let n = new Set(e);
  return (n.add(t), n);
}
var F = class e extends String {
  static fn(t, ...n) {
    let o = [];
    for (let r of n) (r || (S(r) && r === 0) || (p(r) && r === "")) && o.push($(r));
    return new e(`${t}(${o.join(", ")})`);
  }
  static optionalFn(t, ...n) {
    return new e(`${t}?.(${n.map((o) => $(o)).join(", ")})`);
  }
  static fromValue(t) {
    return new e($(t));
  }
  static absoluteURL(t) {
    return t.match(/^https?:/u) ? new e($(t)) : new e(`new URL(${$(t)}, import.meta.url).href`);
  }
  static hasMarker(t, n) {
    return t.#e === n;
  }
  static withMarker(t, n) {
    let o = new e(n);
    return ((o.#e = t), o);
  }
  static isUndefined(t) {
    return t instanceof e && $(t) === "undefined";
  }
  static isTrue(t) {
    return t instanceof e && $(t) === "true";
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
})((F ||= {}));
function Jl(e) {
  return e instanceof F;
}
var ut = class e extends Object {
  #e;
  constructor(t, n = 0) {
    (super(), P(t) || e.assign(this, t), (this.#e = n));
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
    for (let n in t) if (!P(t[n])) return !1;
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
      let i = o instanceof F ? $(o) : o;
      n[i] = r;
    }
    return new e(n);
  }
};
function jk(e) {
  return e instanceof ut;
}
function dt(e, t = "") {
  let n = "";
  for (let o of e) o && (n && (n += t), (n += o instanceof F ? $(o) : o));
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
})((dt ||= {}));
function mo(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((o, r) => {
      n.push($(o), e[r + 1]);
    }),
    new F(n.join(""))
  );
}
((r) => {
  function e(...i) {
    return new F(
      dt(
        i,
        `
`
      )
    );
  }
  r.joinLines = e;
  function t(...i) {
    return new F(
      dt(
        i,
        `

`
      )
    );
  }
  r.joinSections = t;
  function n(i) {
    return new F(
      dt(
        i,
        `
`
      )
    );
  }
  r.linesFrom = n;
  function o(i) {
    return new F(dt(i, ", "));
  }
  r.listFrom = o;
})((mo ||= {}));
var Zl = Symbol("jst template literal");
function hn(e, ...t) {
  if (t.every((o) => p(o) || S(o) || te(o) || Ve(o))) {
    let o = [e[0]];
    return (
      t.forEach((r, i) => {
        o.push(String(r), e[i + 1]);
      }),
      o.join("")
    );
  }
  let n = ["`", Vi(e[0])];
  return (
    t.forEach((o, r) => {
      (p(o)
        ? n.push(Vi(o))
        : typeof o == "number" || typeof o == "boolean" || Ve(o)
          ? n.push(String(o))
          : o instanceof F && F.hasMarker(o, Zl)
            ? n.push(o.substring(1, o.length - 1))
            : n.push("${", $(o), "}"),
        n.push(Vi(e[r + 1])));
    }),
    n.push("`"),
    F.withMarker(Zl, n.join(""))
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
      (g(typeof u.index == "number", "unexpected non-number in match"),
        a.push(o.substring(l, u.index)),
        s.push(typeof i == "function" ? i(u[0], ...u.slice(1)) : i),
        (l = u.index + u[0].length));
    return (a.push(o.substring(l)), n(a, ...s));
  }
  n.replaceAll = t;
})((hn ||= {}));
var Dy = /(?<char>[A-Z])/gu;
function wy(e) {
  return e.replace(Dy, "-$<char>").toLowerCase();
}
var Ly = new Set(["viewBox", "stdDeviation"]),
  My = {
    serializeSpread(e) {
      return `{...${e}}`;
    },
    serializeKeyValue(e, t, n) {
      if (P(t) || F.isUndefined(t)) return;
      let o = Ly.has(e) ? e : wy(e);
      if (t === !0 || F.isTrue(t)) return o;
      if (S(t)) return `${o}="${t}"`;
      let r = $(t, n);
      if (r !== "") return `${o}=${r}`;
    },
    joinObject(e) {
      return e.join(" ");
    },
  };
function Ql(e) {
  return e ? new F(" " + fo(My, e, new Set())) : mo``;
}
var Si = Symbol("svg tag");
function tu(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((o, r) => {
      n.push($(o), e[r + 1]);
    }),
    F.withMarker(Si, n.join(""))
  );
}
((r) => {
  function e(i, a, s) {
    return s && $(s)
      ? r`<${new F(i)}${Ql(a)}>${r.children(s)}</${new F(i)}>`
      : r`<${new F(i)}${Ql(a)}/>`;
  }
  r.tag = e;
  function t(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  r.applyTransforms = t;
  function n(i) {
    return F.withMarker(Si, i);
  }
  r.fromTrustedString = n;
  function o(i) {
    return (g(F.hasMarker(i, Si), "SVG children can only be svg"), i);
  }
  r.children = o;
})((tu ||= {}));
var By = {
  serializeSpread(e) {
    return `{...${e}}`;
  },
  serializeKeyValue(e, t, n) {
    if (P(t) || F.isUndefined(t)) return;
    if (t === !0 || F.isTrue(t)) return e;
    let o = $(t, n);
    if (o !== "") return `${e}={${o}}`;
  },
  joinObject(e) {
    return e.join(" ");
  },
};
function eu(e) {
  return e ? new F(" " + fo(By, e, new Set())) : mo``;
}
var Ni = Symbol("jsx tag");
function nu(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((o, r) => {
      n.push($(o), e[r + 1]);
    }),
    F.withMarker(Ni, n.join(""))
  );
}
((r) => {
  function e(i) {
    return F.hasMarker(i, Ni) ? i : r`{${i}}`;
  }
  r.children = e;
  function t(i) {
    return F.withMarker(Ni, i);
  }
  r.fromTrustedString = t;
  function n(i, a, s) {
    return (
      (i = Jl(i) ? i : new F(i)),
      s && $(s) ? r`<${i}${eu(a)}>${r.children(s)}</${i}>` : r`<${i}${eu(a)}/>`
    );
  }
  r.tag = n;
  function o(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  r.applyTransforms = o;
})((nu ||= {}));
function Vi(e) {
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
function Ge(e, t, n, o = !1) {
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
function nt(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function je(e) {
  let t = yo(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function yo(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var Ri = ((i) => (
    (i.RGB = "rgb"),
    (i.HSL = "hsl"),
    (i.HSV = "hsv"),
    (i.HEX = "hex"),
    (i.NAME = "name"),
    i
  ))(Ri || {}),
  ou = ((i) => (
    (i.RGB = "rgb"),
    (i.RGBA = "rgba"),
    (i.HSL = "hsl"),
    (i.HSLA = "hsla"),
    (i.HUSL = "husl"),
    i
  ))(ou || {});
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
function iu(e, t, n) {
  return (
    (pe.rgb_r = e / 255),
    (pe.rgb_g = t / 255),
    (pe.rgb_b = n / 255),
    pe.rgbToHsluv(),
    { h: pe.hsluv_h, s: pe.hsluv_s, l: pe.hsluv_l }
  );
}
function au(e, t, n, o = 1) {
  return (
    (pe.hsluv_h = e),
    (pe.hsluv_s = t),
    (pe.hsluv_l = n),
    pe.hsluvToRgb(),
    { r: pe.rgb_r * 255, g: pe.rgb_g * 255, b: pe.rgb_b * 255, a: o }
  );
}
function zt(e, t, n, o) {
  let r = Math.round(e),
    i = Math.round(t * 100),
    a = Math.round(n * 100);
  return o === void 0 || o === 1
    ? "hsv(" + r + ", " + i + "%, " + a + "%)"
    : "hsva(" + r + ", " + i + "%, " + a + "%, " + o + ")";
}
function su(e, t, n) {
  return {
    r: nt(e) ? le(e, 255) * 255 : 0,
    g: nt(t) ? le(t, 255) * 255 : 0,
    b: nt(n) ? le(n, 255) * 255 : 0,
  };
}
function vi(e, t, n, o) {
  let r = [
    ki(Math.round(e).toString(16)),
    ki(Math.round(t).toString(16)),
    ki(Math.round(n).toString(16)),
  ];
  return o &&
    r[0].charAt(0) === r[0].charAt(1) &&
    r[1].charAt(0) === r[1].charAt(1) &&
    r[2].charAt(0) === r[2].charAt(1)
    ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0)
    : r.join("");
}
function Ht(e, t, n) {
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
function Pi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function lu(e, t, n) {
  let o, r, i;
  if (((e = le(e, 360)), (t = le(t * 100, 100)), (n = le(n * 100, 100)), t === 0)) o = r = i = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - a;
    ((o = Pi(s, a, e + 1 / 3)), (r = Pi(s, a, e)), (i = Pi(s, a, e - 1 / 3)));
  }
  return { r: o * 255, g: r * 255, b: i * 255 };
}
function Ii(e, t, n) {
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
function uu(e, t, n) {
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
    Ay(e) && (e = "100%");
    let r = Ey(e);
    ((o = Math.min(n, Math.max(0, parseFloat(e)))), r && (o = Math.floor(o * n) / 100));
  } else o = e;
  return Math.abs(o - n) < 1e-6 ? 1 : (o % n) / n;
}
function Ay(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function Ey(e) {
  return typeof e == "string" && e.includes("%");
}
function ki(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var Ae = (() => {
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
function gn(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, "").trimEnd().toLowerCase(),
    o = xn[n];
  if ((o && (n = o), n === "transparent")) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let r;
  return (r = Ae.rgb.exec(n))
    ? {
        r: parseInt(r[1] ?? ""),
        g: parseInt(r[2] ?? ""),
        b: parseInt(r[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (r = Ae.rgba.exec(n))
      ? {
          r: parseInt(r[1] ?? ""),
          g: parseInt(r[2] ?? ""),
          b: parseInt(r[3] ?? ""),
          a: parseFloat(r[4] ?? ""),
          format: "rgb",
        }
      : (r = Ae.hsl.exec(n))
        ? { h: parseInt(r[1] ?? ""), s: je(r[2] ?? ""), l: je(r[3] ?? ""), a: 1, format: "hsl" }
        : (r = Ae.hsla.exec(n))
          ? {
              h: parseInt(r[1] ?? ""),
              s: je(r[2] ?? ""),
              l: je(r[3] ?? ""),
              a: parseFloat(r[4] ?? ""),
              format: "hsl",
            }
          : (r = Ae.hsv.exec(n))
            ? { h: parseInt(r[1] ?? ""), s: je(r[2] ?? ""), v: je(r[3] ?? ""), a: 1, format: "hsv" }
            : (r = Ae.hsva.exec(n))
              ? {
                  h: parseInt(r[1] ?? ""),
                  s: je(r[2] ?? ""),
                  v: je(r[3] ?? ""),
                  a: parseFloat(r[4] ?? ""),
                  format: "hsv",
                }
              : (r = Ae.hex8.exec(n))
                ? {
                    r: xe(r[1] ?? ""),
                    g: xe(r[2] ?? ""),
                    b: xe(r[3] ?? ""),
                    a: ru(r[4] ?? ""),
                    format: o ? "name" : "hex",
                  }
                : (r = Ae.hex6.exec(n))
                  ? {
                      r: xe(r[1] ?? ""),
                      g: xe(r[2] ?? ""),
                      b: xe(r[3] ?? ""),
                      a: 1,
                      format: o ? "name" : "hex",
                    }
                  : (r = Ae.hex4.exec(n))
                    ? {
                        r: xe(`${r[1]}${r[1]}`),
                        g: xe(`${r[2]}${r[2]}`),
                        b: xe(`${r[3]}${r[3]}`),
                        a: ru(r[4] + "" + r[4]),
                        format: o ? "name" : "hex",
                      }
                    : (r = Ae.hex3.exec(n))
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
function ru(e) {
  return xe(e) / 255;
}
var Fy =
  /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u;
function du(e) {
  let t = Fy.exec(e);
  if (!t) return null;
  let { r: n = "0", g: o = "0", b: r = "0", a: i } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(o), b: parseFloat(r), a: i ? parseFloat(i) : 1 };
}
function Di(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function cu({ r: e, g: t, b: n, a: o }) {
  return { r: Di(e), g: Di(t), b: Di(n), a: o };
}
function wi(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function pu({ r: e, g: t, b: n, a: o }) {
  return { r: wi(e), g: wi(t), b: wi(n), a: o };
}
var Oy = (e) => {
    let { r: t, g: n, b: o, a: r } = cu(e);
    return {
      x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * o,
      y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * o,
      z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * o,
      a: r,
    };
  },
  Wy = ({ x: e = 0, y: t = 0, z: n = 0, a: o = 1 }) =>
    pu({
      r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
      g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
      b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
      a: o,
    }),
  zy = (e) => {
    let { r: t, g: n, b: o, a: r } = cu(e);
    return {
      x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * o,
      y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * o,
      z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * o,
      a: r,
    };
  },
  Hy = ({ x: e = 0, y: t = 0, z: n = 0, a: o = 1 }) =>
    pu({
      r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
      g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
      b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
      a: o,
    });
function fu({ r: e, g: t, b: n, a: o }) {
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
function Gy(e) {
  return (e = e % 360) < 0 ? e + 360 : e;
}
function Li({ h: e = 0, s: t = 0, v: n = 0, a: o = 1 }) {
  let r = Gy(e),
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
function Mi(e) {
  return Hy(zy(e));
}
function mu(e) {
  return Wy(Oy(e));
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
    return fu(this);
  }
  rgb() {
    return mu(this);
  }
  hsl() {
    return Ht(this.r, this.g, this.b);
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
        return new e(Li(t));
      case "srgb":
        return new e(Mi(Li(t)));
    }
  }
  static fromRGB(t) {
    return new e(
      Mi({
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
    let n = du(t);
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
function mv(e) {
  return ct.srgbFromValue(e);
}
var yu = new Map(),
  b = (() => {
    function e(r, i, a, s) {
      if (typeof r == "string") {
        let u = yu.get(r);
        return u || ((u = t(r)), u === void 0 ? { ...e("black"), isValid: !1 } : (yu.set(r, u), u));
      }
      let l = t(r, i, a, s);
      return l !== void 0 ? l : { ...e("black"), isValid: !1 };
    }
    function t(r, i, a, s) {
      if (r === "") return;
      let l = jy(r, i, a, s);
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
      (e.isColorString = (r) => (typeof r == "string" ? gn(r) !== !1 : !1)),
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
      (e.toHex = (r, i = !1) => vi(r.r, r.g, r.b, i)),
      (e.toHexString = (r, i = !1) => `#${e.toHex(r, i)}`),
      (e.isP3String = (r) => (typeof r != "string" ? !1 : ct.isP3String(r))),
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
      (e.toHusl = (r) => ({ ...iu(r.r, r.g, r.b), a: r.roundA })),
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
        let i = Ii(r.r, r.g, r.b);
        return { h: i.h * 360, s: i.s, v: i.v, a: r.a };
      }),
      (e.toHsvString = (r) => {
        let i = Ii(r.r, r.g, r.b),
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
        let i = vi(r.r, r.g, r.b, !0);
        for (let a of Object.keys(xn)) if (xn[a] === i) return a;
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
            r: Ge(a, [0, 1], [r.r, i.r], s),
            g: Ge(a, [0, 1], [r.g, i.g], s),
            b: Ge(a, [0, 1], [r.b, i.b], s),
            a: Ge(a, [0, 1], [r.a, i.a], s),
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
            h: Ge(a, [0, 1], [f, f + T], s),
            s: Ge(a, [0, 1], [c.s, m.s], s),
            l: Ge(a, [0, 1], [c.l, m.l], s),
            a: Ge(a, [0, 1], [r.a, i.a], s),
          };
          n.isHSL(l) ? (u = e(V)) : (u = e(au(V.h, V.s, V.l, V.a)));
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
      (e.rgbToHsl = (r, i, a) => Ht(r, i, a)),
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
function jy(e, t, n, o = 1) {
  let r;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (r = Bi({ r: e, g: t, b: n, a: o }))
      : typeof e == "string"
        ? (r = _y(e))
        : typeof e == "object" &&
          (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
            ? (r = Bi(e))
            : (r = hu(e))),
    r
  );
}
function _y(e) {
  let t = gn(e);
  if (t) return t.format === "hsl" ? hu(t) : t.format === "hsv" ? Ky(t) : Bi(t);
}
function Ky(e) {
  let t = uu(e.h, e.s, e.v);
  return { ...Ht(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? xu(e.a) : 1 };
}
function Bi(e) {
  let t = su(e.r, e.g, e.b);
  return { ...Ht(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? xu(e.a) : 1 };
}
function hu(e) {
  let t,
    n,
    o,
    r = { r: 0, g: 0, b: 0 },
    i = { h: 0, s: 0, l: 0 };
  return (
    (t = nt(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = nt(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = yo(e.s)),
    (o = nt(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (o = yo(e.l)),
    (r = lu(t, n, o)),
    (i = { h: t, s: n, l: o }),
    { ...r, ...i, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function xu(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function ho(e) {
  if (!ee(e) || e.charAt(e.length - 1) !== "%") return !1;
  let n = e.slice(0, -1),
    o = parseFloat(n);
  return Oe(o);
}
function xv(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return Oe(n) ? n : 50;
}
function Cv(e) {
  return e ? rl(e.__class) : !1;
}
function Vv(e) {
  return e ? ii(e.__class) : !1;
}
function pt(e) {
  return e ? ai(e.__class) : !1;
}
function Sv(e) {
  return e ? il(e.__class) : !1;
}
function Nv(e, t) {
  let n = e.getNodeParent(t);
  return n === null || !pt(n);
}
function Rv(e, t) {
  if (!pt(t)) return !1;
  let n = e.getNodeParent(t);
  return n === null ? !0 : !pt(n) && !Qn(n);
}
var bn = Symbol("Not Found");
function xo(e) {
  return e === bn;
}
function gu(e) {
  return e !== bn;
}
function Ai(e) {
  return gu(e) && !It(e);
}
function vv(e) {
  return gu(e) && e !== void 0;
}
function Iv(e) {
  return Ai(e) && e !== void 0;
}
function Uy(e, t) {
  return E(e) ? !_l(e, t) : e !== t;
}
function bu(e, t, n, o) {
  let r = t[e];
  if (It(r)) return;
  let i = n[e],
    a = o ? o(i) : i;
  xo(r) ? (t[e] = a) : Uy(a, r) && (t[e] = sn);
}
var Fv = { codeComponentIdentifier: "", dynamicVectorSetIdentifier: void 0 },
  $y = "codeComponentIdentifier";
function go(e) {
  return e.hasProp($y);
}
function Ov(e, t) {
  !go(e) ||
    !Pe(e.codeComponentIdentifier) ||
    (t.codeComponentIdentifiers.add(e.codeComponentIdentifier),
    bu("dynamicVectorSetIdentifier", t, e));
}
var bo = ((v) => (
    (v.scroll = "framer/Scroll"),
    (v.page = "framer/Page"),
    (v.stack = "framer/Stack"),
    (v.prototype = "framer/Prototype"),
    (v.device = "__builtin/Device"),
    (v.legacyDevice = "@framer/framer.default/./Device.tsx_Device"),
    (v.legacyUnsplash = "@framer/framer.default/./Unsplash.tsx_Unsplash"),
    (v.navigationAction = "framer/useNavigate"),
    (v.openURLAction = "framer/useOpenURL"),
    (v.consoleLogAction = "framer/useLog"),
    (v.setVariantAction = "framer/useSetVariant"),
    (v.triggerEventAction = "framer/useTriggerEvent"),
    (v.showOverlayAction = "framer/useShowOverlay"),
    (v.showRelativeOverlayAction = "framer/useShowRelativeOverlay"),
    (v.loadMoreAction = "framer/useLoadMore"),
    (v.carouselNavigationAction = "framer/useCarouselNavigation"),
    (v.goToCarouselPageAction = "framer/useGoToCarouselPage"),
    (v.dismissOverlayAction = "framer/useDismissOverlay"),
    (v.setLocaleAction = "framer/useSetLocale"),
    (v.setVariableValueAction = "framer/useSetVariableValue"),
    (v.resetVariableValuesAction = "framer/useResetVariableValues"),
    v
  ))(bo || {}),
  qy = new Set(Object.values(bo)),
  zv = new Set(Object.values(bo).filter((e) => e !== "framer/Prototype"));
function Hv(e) {
  return qy.has(e);
}
var Xy = new Set(["framer/Stack", "framer/Page", "framer/Scroll"]);
function ft(e) {
  return ml(e) || to(e) ? !1 : !go(e) || Yy(e);
}
function Uv(e) {
  return go(e) && e.codeComponentIdentifier === "__builtin/Device";
}
function Yy(e) {
  return Xy.has(e.codeComponentIdentifier);
}
var Jy = "fillOpacity";
function nI(e) {
  return Jy in e;
}
var oI = { fillOpacity: void 0 },
  Zy = "fillType",
  Qy = "fillEnabled",
  eh = "supportsGradient",
  th = "fillImageLocalized";
function Gt(e) {
  return Zy in e && ft(e);
}
function Ei(e) {
  return Qy in e && ft(e);
}
function rI(e) {
  return Gt(e) ? (Ei(e) ? !!e.fillEnabled : !0) : !1;
}
function iI(e) {
  return th in e;
}
function nh(e) {
  return eh in e && ft(e);
}
function Tu(e) {
  return ft(e) ? (nh(e) ? e.supportsGradient() : Gt(e)) : !1;
}
function oh(e) {
  return He(e) || Tu(e);
}
function aI(e) {
  return oh(e) && !(pt(e) || Qn(e) || dl(e));
}
function Cu(e) {
  return e === "linear-gradient" || e === "radial-gradient" || e === "conic-gradient";
}
function sI(e) {
  return Tu(e) ? Cu(e.fillType) : e.getFills().filter(Boolean).length;
}
function lI(e) {
  return e.fillEnabled && e.fillType === "image" && e.fillImage !== null;
}
function uI(e) {
  return Gt(e) && ho(e.fillImagePositionX) && ho(e.fillImagePositionY);
}
function Vu(e) {
  return Ei(e) && !e.fillEnabled ? !1 : Gt(e) && e.fillType === "image";
}
function rh(e) {
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
function dI(e) {
  return !Gt(e) || (Ei(e) && !e.fillEnabled) ? !1 : !rh(e);
}
function cI(e) {
  switch (e) {
    case void 0:
    case "contain":
      return "fit";
    default:
      return "fill";
  }
}
function ih(e) {
  return !e || !Gt(e) ? !1 : Cu(e.fillType);
}
function pI(e) {
  if (ih(e) && !P(e.fillType))
    switch (e.fillType) {
      case "image":
      case "color":
        return;
      case "linear-gradient": {
        let t = e.fillLinearGradient?.stops.length;
        if (!t) return;
        let n = e.fillLinearGradient?.angle;
        return P(n) ? void 0 : { stops: t, info: { type: e.fillType, angle: n } };
      }
      case "radial-gradient": {
        let t = e.fillRadialGradient?.stops.length;
        return t ? { stops: t, info: { type: e.fillType, angle: 0 } } : void 0;
      }
      case "conic-gradient": {
        let t = e.fillConicGradient?.stops.length;
        if (!t) return;
        let n = e.fillLinearGradient?.angle;
        return P(n) ? void 0 : { stops: t, info: { type: e.fillType, angle: n } };
      }
      default:
        z(e.fillType);
    }
}
function fI(e, t, n) {
  let o = n === "conic-gradient" ? 360 : 100,
    r = n === "conic-gradient" ? "deg" : "%";
  return hn.join(
    Array.from({ length: e }).map((i, a) => hn`${t} ${Math.round((a / (e - 1)) * o)}${r}`),
    ", "
  );
}
var ah = ["left", "center", "right"],
  sh = new Set(ah),
  lh = ["top", "center", "bottom"],
  uh = new Set(lh);
function mI(e, t) {
  return p(e)
    ? ((t === "y" || t === "fillImagePositionY") && uh.has(e)) ||
      ((t === "x" || t === "fillImagePositionX") && sh.has(e))
      ? !0
      : ho(e)
    : !1;
}
var dh = {
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
function Su(e) {
  let t = ("" + e).trim().toLowerCase(),
    n = t.lastIndexOf(".");
  return dh[~n ? t.substring(++n) : t];
}
var ch = { auto: !0, lossless: !0, small: !0, medium: !0, large: !0, full: !0 };
function Nu(e) {
  return Us(e) && e in ch;
}
var To = "framer/asset-reference,";
function ph(e) {
  return e.startsWith(`data:${To}`);
}
function RI(e) {
  return Su(e)?.startsWith("image/") ?? !1;
}
var Ru = "originalFilename",
  Pu = "packageIdentifier",
  ku = "preferredSize",
  vu = "presetName",
  Iu = "width",
  Du = "height";
function wu(e, t = null, n = null, o = null, r = null, i = null) {
  g(e !== "", "Can\u2019t create asset reference for empty identifier");
  let a = new URL(`data:${To}${e}`);
  return (
    n && a.searchParams.set(Ru, n),
    t && a.searchParams.set(Pu, t),
    o && a.searchParams.set(ku, o),
    r && a.searchParams.set(vu, r),
    i && (a.searchParams.set(Iu, i.width.toString()), a.searchParams.set(Du, i.height.toString())),
    a.href
  );
}
function PI({
  identifier: e,
  preferredSize: t,
  intrinsicSize: n,
  packageIdentifier: o,
  originalFilename: r,
  presetName: i,
}) {
  return wu(e, o, r, t, i, n);
}
function kI(e) {
  return wu(
    e.identifier,
    e.packageIdentifier,
    e.originalFilename,
    e.preferredSize,
    e.presetName,
    e.intrinsicSize
  );
}
function Lu(e) {
  if (ph(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(To.length),
        o = t.searchParams.get(Ru),
        r = t.searchParams.get(Pu),
        i = t.searchParams.get(ku),
        a = t.searchParams.get(vu),
        s = t.searchParams.get(Iu),
        l = t.searchParams.get(Du);
      return {
        identifier: n,
        originalFilename: o,
        packageIdentifier: r,
        preferredSize: Nu(i) ? i : void 0,
        presetName: a,
        fileExtension: o && fh(o),
        intrinsicSize: s && l ? { width: parseInt(s), height: parseInt(l) } : void 0,
      };
    } catch {
      return;
    }
}
function fh(e) {
  return e.split(".").pop() ?? "";
}
var Fi = class {},
  Oi = class extends Fi {},
  Ee = class extends Oi {
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
var MI = {},
  mh = "children";
function yh(e) {
  return mh in e && e.children !== void 0;
}
var hh = new Ee();
function Mu(e) {
  return yh(e) ? e.children : hh;
}
function Bu(e) {
  for (let t in e) return !1;
  return !0;
}
var Wi = "default";
function OI(e) {
  return ul(e) ? e.getGroundNodes().length === 0 : !1;
}
function WI(e) {
  if (!ze(e)) return !1;
  let t = e.getGroundNodes();
  return t.length > 1 ? !1 : t.length === 0 ? !0 : t[0]?.children?.length === 0;
}
function xh(e) {
  return e ? !e.children || e.children.length === 0 : !1;
}
function gh(e) {
  return e === "";
}
function zi(e) {
  return !!(e.webPageId && gh(e.segment));
}
function zI(e) {
  return zi(e) && xh(e);
}
function bh(e, t) {
  let n = t.get(e);
  if (!eo(n)) return;
  let o = t.get(n.webPageId);
  if (ze(o) || n.children.length > 0) return;
  let r = n.parentid;
  (t.remove(n.id), r && bh(r, t));
}
var Tn = "default";
function jI(e, t) {
  let n = new Map(t.map((a) => [a.id, a])),
    o = n.get(e.id) ?? e,
    r = [o],
    i = new Set([o.id]);
  for (; o.fallback;) {
    let a = n.get(o.fallback);
    if (!a || i.has(a.id)) break;
    ((o = a), i.add(o.id), r.push(o));
  }
  return r;
}
var Th = "locales";
function _I(e) {
  return x(e) && Th in e;
}
function KI(e, t) {
  if (!t || !e) return !1;
  if (e.length > t.length) return !0;
  for (let n of t) {
    let o = e.find((r) => r.id === n.id);
    if (o && (o.fallback !== n.fallback || o.draft !== n.draft)) return !0;
  }
  return !1;
}
function UI(e) {
  return e?.newContentInclusion ?? "include";
}
var Eu = (e) => {
    let t = N.fromRect(e.getBoundingClientRect());
    return ((t.x = t.x + kt.scrollX), (t.y = t.y + kt.scrollY), t);
  },
  Ch = (e) => N.merge(...e.map(Eu)),
  Vh = (e, t) => {
    let n = Fu(e, t);
    return { x: n.x, y: n.y, width: e.width, height: e.height };
  },
  Sh = (e, t) => {
    let n = Ou(e, t);
    return { x: n.x, y: n.y, width: e.width, height: e.height };
  },
  Hi = (e) => {
    let t = e.getBoundingClientRect();
    return { x: t.left + kt.scrollX, y: t.top + kt.scrollY, width: t.width, height: t.height };
  },
  Nh = (e) => ({ x: e.pageX, y: e.pageY }),
  Rh = (e) => ({ x: e.clientX, y: e.clientY }),
  Fu = (e, t) => {
    let n = Hi(t);
    return { x: e.x + n.x, y: e.y + n.y };
  },
  Ou = (e, t) => {
    let n = Hi(t);
    return { x: e.x - n.x, y: e.y - n.y };
  },
  JI = (e, t = {}) => {
    let n = new KeyboardEvent("keydown", { bubbles: !0, keyCode: e, ...t }),
      o = document.activeElement;
    o && o.dispatchEvent(n);
  },
  ZI = {
    frameFromElement: Eu,
    frameFromElements: Ch,
    convertToPageFrame: Vh,
    convertFromPageFrame: Sh,
    getPageFrame: Hi,
    fromEventForPage: Nh,
    fromEventForClient: Rh,
    convertToPagePoint: Fu,
    convertFromPagePoint: Ou,
  },
  Au,
  Ph = !Ss() && typeof Document < "u" && typeof Document.parseHTMLUnsafe == "function";
function Wu(e, t) {
  return Ph && !t
    ? Document.parseHTMLUnsafe(e)
    : ((Au ??= new DOMParser()), Au.parseFromString(e, t ?? "text/html"));
}
function QI(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
var kh = /&(?:[gl]t|quot|#39|amp|#6[02]|#34|apos|#38);/gu,
  vh = {
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
function eD(e) {
  return e.replace(kh, (t) => vh[t]);
}
function zu(e) {
  let t = `<html><body>${e}</body></html>`;
  return Wu(t).body;
}
function Ih(e, t) {
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
var Dh = 1e5,
  Gi = Ih(wh, Dh);
function wh(e) {
  let t = zu(e),
    n = t.innerText;
  return Ps.isTest ? (n ?? t.textContent ?? "") : (g(n !== null), n);
}
function Hu(
  e,
  t = `
`
) {
  let n = e.replace(/<\/(h[1-6]|p|ul|ol)>/gu, `</$1>${t}`),
    o = Gi(n),
    r = t.length;
  return r && o.endsWith(t) ? o.slice(0, r * -1) : o;
}
function Gu(e, { preserveTrailingEmptyBlockNewLine: t = !1 } = {}) {
  let n = Co(e.childNodes);
  if (n.length === 0) return "";
  let o = n.join(`
`);
  return !t || e.childNodes.some(Vo)
    ? o
    : o +
        `
`;
}
function ju(e) {
  return e.replaceAll(/\n+/gu, "");
}
function Co(e) {
  return e.flatMap((t) => (t.type === "media" || t.type === "module" ? [] : [Lh(t)]));
}
function Lh(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.map(Fh).join("");
    case "bulletedList":
    case "numberedList":
      return Bh(e.childNodes).join(`
`);
    case "blockquote":
      return Co(e.childNodes).join(`
`);
    case "table":
      return e.childNodes.map(Ah).join(`
`);
    case "media":
    case "module":
      return "";
  }
}
function Mh(e) {
  return Co(e.childNodes).join(`
`);
}
function Bh(e) {
  return e.flatMap((t) => {
    let n = Mh(t);
    return n.length > 0 ? [n] : [];
  });
}
function Ah(e) {
  return e.childNodes.map(Eh).join(`
`);
}
function Eh(e) {
  return Co(e.childNodes).join(`
`);
}
function Fh(e) {
  switch (e.type) {
    case "text":
      return e.text;
    case "lineBreak":
      return `
`;
  }
}
function Vo(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.some(Hh);
    case "bulletedList":
    case "numberedList":
      return e.childNodes.some(Oh);
    case "blockquote":
      return e.childNodes.some(Vo);
    case "table":
      return e.childNodes.some(Wh);
    case "media":
    case "module":
      return !1;
  }
}
function Oh(e) {
  return e.childNodes.some(Vo);
}
function Wh(e) {
  return e.childNodes.some(zh);
}
function zh(e) {
  return e.childNodes.some(Vo);
}
function Hh(e) {
  switch (e.type) {
    case "text":
      return e.text.length > 0;
    case "lineBreak":
      return !1;
  }
}
var ji = {};
Object.freeze(ji);
function fD(e, t) {
  if (!e) return ji;
  let n = e,
    o = {},
    r = !1;
  for (let i of t) {
    let a = n[i.id];
    a !== void 0 && ((o[i.id] = a), (r = !0));
  }
  return r ? o : ji;
}
function So(e) {
  return e?.value !== void 0 && e?.value !== null;
}
function mD(e, t) {
  let n = e?.[t];
  return So(n) ? n.value : void 0;
}
function Gh(e, { preserveNewLines: t = !1 } = {}) {
  return p(e.value)
    ? e.type !== "rich-text"
      ? e.value
      : t
        ? Hu(e.value)
        : Gi(e.value)
    : jh(e.value, { preserveNewLines: t });
}
function yD(e, t) {
  if (e != null) {
    if (e.value === null) return null;
    if (So(e)) return Gh(e, t);
  }
}
function jh(e, { preserveNewLines: t }) {
  let n = Gu(e);
  return t ? n : ju(n);
}
function _u(e, t) {
  if (!t || !e || e.id === Tn) return null;
  for (; e;) {
    let n = t[e.id];
    if (n && So(n)) return n;
    e = e.fallback;
  }
  return null;
}
var Ku = "routeSegmentRoot";
var _h = new Set(["/404.html", "/404", "/404/"]),
  Uu = new Set(Array.from(_h).map((e) => e.replaceAll("/", "")));
var $u = {
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
  qu = {
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
function Xu(e) {
  return p(e) && e in $u;
}
var SD = $u;
function Kh(e) {
  return p(e) && e in qu;
}
var ND = qu;
function RD(e) {
  if (!p(e)) return !1;
  if (Xu(e)) return !0;
  let [t, n] = Yu(e);
  return !!(t && n);
}
function Yu(e) {
  if (!p(e)) return [void 0, void 0];
  let t = e.split("-"),
    n = "",
    o;
  for (let r of t) {
    if (Kh(r)) {
      o = r;
      continue;
    }
    if (!n) {
      n = r;
      continue;
    }
    n += "-" + r;
  }
  return [Xu(n) ? n : void 0, o];
}
var Uh = new Set(["ar", "dv", "fa", "he", "ks", "ps", "sd", "ug", "ur", "yi"]);
function $h(e) {
  return e.endsWith("-Arab") || e.includes("-Arab-");
}
function No(e) {
  if ($h(e)) return "rtl";
  let [t] = Yu(e);
  return t && Uh.has(t) ? "rtl" : "ltr";
}
var Ju = Symbol();
function _e(e) {
  let t,
    n = Ju;
  return (...o) => {
    if (t && $s(t, o) && n !== Ju) return n;
    t = o;
    let r = e(...o);
    return ((n = r), r);
  };
}
function _i(e, t) {
  let n = e.root.getDefaultLocale(),
    o = e.root.locales ?? Un();
  return t === "includeDrafts" ? qh(n, o) : Xh(n, o);
}
function BD(e, t, n = "includeDrafts") {
  let o = _i(e, n),
    r = o[0];
  return (
    g(r, "Default locale should always exist"),
    t ? (o.find(({ id: i }) => i === t) ?? r) : r
  );
}
var qh = _e((e, t) => {
    let n = [e, ...t];
    return Ki(n, { includeDrafts: !0 });
  }),
  Xh = _e((e, t) => {
    let n = [e, ...t];
    return Ki(n, { includeDrafts: !1 });
  });
function Ki(e, { includeDrafts: t }) {
  let n = new Map(),
    o = new Map();
  for (let a of e) (n.set(a.id, a), a.fallback && o.set(a.id, a.fallback));
  let r = [],
    i = !t && Gs.isOn("skipPublishingLocalesFallingBackToDraft");
  for (let a of e) {
    if ((!t && a.draft) || (i && Qu(a, n))) continue;
    let s = Zu(a);
    if ((r.push(s), !a.fallback)) continue;
    let l = s,
      u = n.get(a.fallback),
      c = new Set();
    for (c.add(a.id); u && !c.has(u.id);) {
      c.add(u.id);
      let m = Zu(u);
      ((l.fallback = m), (l = m));
      let f = o.get(u.id);
      u = f ? n.get(f) : void 0;
    }
  }
  return r;
}
function AD(e) {
  let t = new Map(e.map((n) => [n.id, n]));
  return e.filter((n) => !n.draft && Qu(n, t));
}
function Qu(e, t) {
  let n = new Set(),
    o = e;
  for (; o;) {
    if (n.has(o.id)) return !1;
    if ((n.add(o.id), o.draft)) return !0;
    o = o.fallback ? t.get(o.fallback) : void 0;
  }
  return !1;
}
function Zu(e) {
  return { id: e.id, code: e.code, slug: e.slug, name: e.name, textDirection: No(e.code) };
}
var ED = { vekterLocalesToRouterLocales: Ki };
var Yh = "$";
function ed(e) {
  let t = e.get(Ku);
  return (
    g(t, "RouteSegmentRootNode not found"),
    g(
      t.parentid === e.root.id,
      "RouteSegmentRootNode is not under the tree root. Parent id: " + t.parentid
    ),
    t
  );
}
function KD(e, t) {
  let n = _i(e, "excludeDrafts"),
    o = Object.fromEntries(n.map((l) => [l.id, {}])),
    r = new Map(),
    i = 0,
    a = () => `${Yh}${i++}`,
    s = new Set();
  for (let l of t.children) td(e, "", r, o, a, s, l, n);
  return { webPageSegmentReferencePathByWebPageId: r, localizedSegments: o };
}
function td(e, t, n, o, r, i, a, s) {
  g(o[Wi], "dictionary should include default");
  let l = a.webPageId ? e.get(a.webPageId) : void 0,
    u = !!l && !l.isDraft && !i.has(l.id);
  u && i.add(l.id);
  let c;
  Jh(a) ? (a.segment ? ((c = r()), (t = `${t}/${c}`)) : (t = `${t}/`)) : (t = `${t}/${a.segment}`);
  let m = u;
  for (let f of a.children) m = td(e, t, n, o, r, i, f, s) || m;
  if (m && c) {
    o[Wi][c] = a.segment;
    for (let f of s) {
      let h = _u(f, a.segmentLocalized);
      if (h?.value && h.value !== a.segment) {
        let T = f.id;
        (g(o[T], "localizedSegments should include all locales"), (o[T][c] = h.value));
      }
    }
  }
  return (u && a.webPageId && n.set(a.webPageId, t), m);
}
var Jh = (e) => !(!!e.dataIdentifier || Uu.has(e.segment) || zi(e));
function nd(e, t) {
  let o = ed(e).getRouteSegmentIdForWebPageId(t);
  return e.getNode(o);
}
function od(e, t) {
  let n = Zh(t);
  return n ? e.getNodeWithTrait(n, Zn) : null;
}
function Zh(e) {
  if (!e) return null;
  let t = ke(e);
  return !Dt(t) || !Pe(t) || t.type !== "collection" ? null : t.localIdName;
}
var Ro = M(oe(), 1);
var jt = M(re(), 1);
function Qh(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function _t(e) {
  return !e._constraints || Qh(e) ? !1 : e._constraints.enabled;
}
function ex(e) {
  let { size: t } = e,
    { width: n, height: o } = e;
  return (
    k(t) && (n === void 0 && (n = t), o === void 0 && (o = t)),
    k(n) && k(o) ? { width: n, height: o } : null
  );
}
function tx(e) {
  let t = ex(e);
  if (t === null) return null;
  let { left: n, top: o } = e;
  return k(n) && k(o) ? { x: n, y: o, ...t } : null;
}
function nx(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let o = t === 1 || t === 2;
  if (!_t(e) || o) return tx(e);
  let r = ox(e),
    i = rx(t),
    a = i ? { sizing: i, positioning: i, viewport: null } : null;
  return ri.toRect(r, a, null, n, null);
}
function ox(e) {
  let { left: t, right: n, top: o, bottom: r, center: i, _constraints: a, size: s } = e,
    { width: l, height: u } = e;
  (l === void 0 && (l = s), u === void 0 && (u = s));
  let { aspectRatio: c, autoSize: m } = a,
    f = oi.quickfix({
      left: k(t),
      right: k(n),
      top: k(o),
      bottom: k(r),
      widthType: dn(l),
      heightType: dn(u),
      aspectRatio: c || null,
      fixedSize: m === !0,
    }),
    h = null,
    T = null,
    V = 0,
    R = 0;
  if (f.widthType !== 0 && typeof l == "string") {
    let W = parseFloat(l);
    l.endsWith("fr") ? ((V = 3), (h = W)) : l === "auto" ? (V = 2) : ((V = 1), (h = W / 100));
  } else l !== void 0 && typeof l != "string" && (h = l);
  if (f.heightType !== 0 && typeof u == "string") {
    let W = parseFloat(u);
    u.endsWith("fr")
      ? ((R = 3), (T = W))
      : u === "auto"
        ? (R = 2)
        : ((R = 1), (T = parseFloat(u) / 100));
  } else u !== void 0 && typeof u != "string" && (T = u);
  let y = 0.5,
    C = 0.5;
  return (
    (i === !0 || i === "x") && ((f.left = !1), typeof t == "string" && (y = parseFloat(t) / 100)),
    (i === !0 || i === "y") && ((f.top = !1), typeof o == "string" && (C = parseFloat(o) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? o : null,
      bottom: f.bottom ? r : null,
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
var $i = ((o) => (
    (o[(o.Unknown = 0)] = "Unknown"),
    (o[(o.Disabled = 1)] = "Disabled"),
    (o[(o.DisabledForCurrentLevel = 2)] = "DisabledForCurrentLevel"),
    o
  ))($i || {}),
  rd = Ro.default.createContext({ parentSize: 0 });
function rx(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function id() {
  return Ro.default.useContext(rd).parentSize;
}
function ad(e) {
  return typeof e == "object";
}
var ix = (e) => {
  let t = id(),
    { parentSize: n, children: o } = e,
    r = Ro.default.useMemo(() => ({ parentSize: n }), [ax(n), sx(n)]);
  return t === 1
    ? o
      ? (0, jt.jsx)(jt.Fragment, { children: o })
      : null
    : (0, jt.jsx)(rd.Provider, { value: r, children: o });
};
function ax(e) {
  return ad(e) ? e.width : e;
}
function sx(e) {
  return ad(e) ? e.height : e;
}
function Po(e, t) {
  return (0, jt.jsx)(ix, { parentSize: t, children: e });
}
function sd(e) {
  let t = id();
  return nx(e, t, !0);
}
function qi({ width: e, height: t }) {
  return e === "auto" || e === "min-content" || t === "auto" || t === "min-content";
}
var Xi = {
  isImageObject: function (e) {
    return !e || typeof e == "string" ? !1 : typeof e == "object" && "src" in e;
  },
};
function lx(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: o, id: r } = t,
    i = n ?? r,
    a = o && i ? o[i] : void 0;
  return (a && typeof a == "string" && (e = { ...e, src: a }), e);
}
function ld(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Xi.isImageObject(t)) return;
  let o = null;
  if ((ee(n) ? (o = { alt: "", src: n }) : (o = ie.get(t, null)), !!Xi.isImageObject(o)))
    return lx(o, e);
}
var Yi = (e) => e instanceof Ls;
function ux(e, t) {
  if (e.size < t) return;
  let o = Math.round(Math.random());
  for (let r of e.keys()) (++o & 1) !== 1 && e.delete(r);
}
function ud(e, t, n, o) {
  let r = t.get(n);
  if (r) return r;
  ux(t, e);
  let i = o(n);
  return (t.set(n, i), i);
}
var ko = {
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
var dd = (e) => {
  let t = 0,
    n,
    o;
  if (e.length === 0) return t;
  for (n = 0; n < e.length; n++) ((o = e.charCodeAt(n)), (t = (t << 5) - t + o), (t |= 0));
  return t;
};
var dx = /var\(.+\)/u,
  cx = new Map();
function px(e, t) {
  let n = [e, t];
  return dx.test(e) ? e : ud(1e3, cx, n, () => ko.multiplyAlpha(e, t));
}
function mt(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((o) => ({ ...o, value: px(o.value, t) }))
  );
}
function Kt(e, t) {
  let n = 0;
  return (
    mt(e, t).forEach((o) => {
      n ^= dd(o.value) ^ o.position;
    }),
    n
  );
}
var fx = ["stops"];
function Ut(e) {
  return e && fx.every((t) => t in e);
}
var mx = ["start", "end"];
function $t(e) {
  return e && mx.every((t) => t in e);
}
var yx = ["angle", "alpha"],
  vo = {
    isLinearGradient: (e) => q(e) && yx.every((t) => t in e) && ($t(e) || Ut(e)),
    hash: (e) => e.angle ^ Kt(e, e.alpha),
    toCSS: (e, t, n) => {
      let o = mt(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = Math.round(r),
        a = o.map((s) => `${n?.(s.value) ?? s.value} ${s.position * 100}%`);
      return `linear-gradient(${i}deg, ${a.join(", ")})`;
    },
  };
var hx = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"],
  Io = {
    isRadialGradient: (e) => q(e) && hx.every((t) => t in e) && ($t(e) || Ut(e)),
    hash: (e) =>
      e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Kt(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: n, widthFactor: o, heightFactor: r, centerAnchorX: i, centerAnchorY: a } = e,
        s = mt(e, n),
        l = s.map((u, c) => {
          let m = s[c + 1],
            f = u.position === 1 && m?.position === 1 ? u.position - 1e-4 : u.position;
          return `${t?.(u.value) ?? u.value} ${f * 100}%`;
        });
      return `radial-gradient(${o * 100}% ${r * 100}% at ${i * 100}% ${a * 100}%, ${l.join(", ")})`;
    },
  };
var xx = ["alpha", "angle", "centerAnchorX", "centerAnchorY"],
  gx = {
    isConicGradient: (e) => q(e) && xx.every((t) => t in e) && ($t(e) || Ut(e)),
    hash: (e) => e.centerAnchorX ^ e.centerAnchorY ^ e.angle ^ Kt(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: n, angle: o, centerAnchorX: r, centerAnchorY: i } = e,
        a = Math.round(o),
        l = mt(e, n)
          .map((u) => `${t?.(u.value) ?? u.value} ${u.position * 360}deg`)
          .join(", ");
      return `conic-gradient(from ${a}deg at ${r * 100}% ${i * 100}%, ${l})`;
    },
  };
var Ji = ["color", "x", "y", "blur"],
  Ow = { is: (e) => e && Ji.every((t) => t in e) },
  Zi = ["x", "y", "color", "inset", "blur", "spread"],
  cd = {
    is: (e) => e && Zi.every((t) => t in e),
    toCSS: (e) =>
      `${e.inset ? "inset " : ""}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`,
  };
var pd = "0.000001px",
  Qi = ` translateZ(${pd})`,
  fd = Ns() || Vs() || Rs();
function md(e) {
  e.willChange = "transform";
  let t = _.current() === _.canvas;
  fd && t && (e.translateZ = pd);
}
function yd(e) {
  ((e.willChange = "transform"), hd(e, !0));
}
function jw(e, t) {
  (t
    ? (e.style.willChange || "") !== "transform" && (e.style.willChange = "transform")
    : e.style.removeProperty("will-change"),
    hd(e.style, t));
}
function hd(e, t) {
  let n = _.current() === _.canvas;
  if (!fd || !n) return;
  let o = (ee(e.transform) && e.transform) || "";
  t ? o.includes(Qi) || (e.transform = o + Qi) : (e.transform = o.replace(Qi, ""));
}
var gd = M(oe(), 1);
var fe = (e) => e;
function xd(e, t, n, o = !0) {
  if (!e) return;
  let r = fe(e.style),
    i = n || r[t],
    a = () => {
      bx(i) && (r[t] = i);
    };
  ((r[t] = null), o ? Promise.resolve().then(a) : setTimeout(a, 0));
}
function bx(e) {
  return ee(e) || Oe(e) || Is(e);
}
var Do = (() => {
  class e extends gd.Component {
    static defaultProps = {};
    static applyWillChange(n, o, r) {
      n.willChangeTransform && (r ? md(o) : yd(o));
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
        xd(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return e;
})();
var bd = M(oe(), 1);
function ea() {
  let e = _.current();
  return e === _.canvas || e === _.export;
}
function tL() {
  let [e] = (0, bd.useState)(() => ea());
  return e;
}
var Td = M(oe(), 1),
  Cd = Td.default.createContext(void 0);
var ta;
function Vd() {
  return ta !== void 0;
}
function rL(e) {
  ta = e;
}
function Sd(e, t) {
  ta?.(e, t);
}
var Cn = M(oe(), 1);
var Pd = M(re(), 1),
  Cx = "style[data-framer-css-ssr-minified]",
  Vx = (() => {
    if (!Qe()) return new Set();
    let e = document.querySelector(Cx)?.getAttribute("data-framer-components");
    return e ? new Set(e.split(" ")) : new Set();
  })(),
  cL = "data-framer-css-ssr";
function Nd() {
  return ws() ? _.preview : _.current();
}
var Rd = (e, t, n) => {
    if (Vd() && n !== void 0 && !et(t)) {
      let o = Array.isArray(t)
        ? t
        : t.split(`
`);
      Sd(n, o.filter(Boolean));
    }
    return Cn.default.forwardRef((o, r) => {
      let { sheet: i, cache: a } = Cn.default.useContext(Cd) ?? {},
        s = n;
      if (!Qe()) {
        et(t) && (t = t(Nd(), o));
        let l = Array.isArray(t)
          ? t.join(`
`)
          : t;
        Sx.add(l, s);
      }
      return (
        (0, Cn.useInsertionEffect)(() => {
          if (s && Vx.has(s)) return;
          (et(t)
            ? t(Nd(), o)
            : Array.isArray(t)
              ? t
              : t.split(`
`)
          ).forEach((u) => u && _n(u, i, a));
        }, []),
        (0, Pd.jsx)(e, { ...o, ref: r })
      );
    });
  },
  na = class {
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
  Sx = new na();
var Nx, wo;
function Rx() {
  return (Nx ??= import("https://app.framerstatic.com/libraryCSSRules-P2IPZROH.mjs").then((e) => {
    if (((wo = e.getCombinedCSSRules), Qe())) for (let t of wo()) _n(t, void 0);
    return e;
  }));
}
function Px() {
  return wo ? wo() : (Qe() && Rx(), []);
}
function kd(e) {
  return Rd(e, Px, "framer-lib-combinedCSSRules");
}
function vd(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
        ? `translateX(-50%) ${n}`
        : e === "y"
          ? `translateY(-50%) ${n}`
          : n || "none";
}
var ue = M(oe(), 1);
var Xt = M(re(), 1),
  qt = ue.default.createContext({
    getLayoutId: (e) => null,
    persistLayoutIdCache: () => {},
    top: !1,
    enabled: !0,
  });
function gL({ children: e }) {
  if ((0, ue.useContext)(qt).top) return (0, Xt.jsx)(Xt.Fragment, { children: e });
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
          vt(!!de, "duplicatedId must be defined");
          let ae = n.current[m][de],
            Je = n.current.byLastId[de];
          if (Je && !T) {
            let Qr = n.current.byLayoutId[Je],
              ei = !Qr || Qr === u;
            Je && !r.has(Je) && (!u || ei) && (T = [Je, de]);
          }
          let rt = ae ? n.current.byLayoutId[ae] : void 0,
            fs = !rt || rt === u;
          if (ae && !r.has(ae) && (!u || fs))
            return ((o.current[m][l] = ae), (o.current.byLastId[de] = ae), r.add(ae), ae);
        }
      let V = n.current.byLastId[l];
      if (V && !r.has(V)) return (r.add(V), (o.current.byId[l] = V), V);
      if (T) {
        let [Z, de] = T;
        return ((o.current[m][l] = Z), (o.current.byLastId[de] = Z), r.add(Z), Z);
      }
      let R = n.current.byPossibleId[l];
      if (R && !r.has(R)) return (r.add(R), (o.current.byId[l] = R), R);
      let y = c?.[0],
        C = u || y || l,
        W = (n.current.count[m][C] ?? -1) + 1,
        { layoutId: j, value: v } = kx(C, W, r);
      if (((n.current.count[m][C] = v), (o.current[m][l] = j), c?.length && !u)) {
        let Z = c[c.length - 1];
        if ((Z && (o.current.byLastId[Z] = j), c.length > 1))
          for (let de = 0; de < c.length - 1; de++) {
            let ae = c[de];
            ae !== void 0 && (o.current.byPossibleId[ae] || (o.current.byPossibleId[ae] = j));
          }
      }
      return ((o.current.byLayoutId[j] = h), r.add(j), j);
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
  return (0, Xt.jsx)(qt.Provider, { value: s, children: e });
}
function kx(e, t, n) {
  let o = t,
    r = o ? `${e}-${o}` : e;
  for (; n.has(r);) (o++, (r = `${e}-${o}`));
  return { layoutId: r, value: o };
}
function bL({ enabled: e = !0, ...t }) {
  let n = (0, ue.useContext)(qt),
    o = (0, ue.useMemo)(() => ({ ...n, enabled: e }), [e]);
  return (0, Xt.jsx)(qt.Provider, { ...t, value: o });
}
var Id = M(oe(), 1),
  Vn = Id.default.createContext(!1);
var Sn = M(oe(), 1);
var oa = M(oe(), 1);
function ra() {
  let [e, t] = oa.default.useState(0);
  return oa.default.useCallback(() => t((n) => n + 1), []);
}
var Lo = M(oe(), 1),
  Mo = typeof document < "u" ? Lo.useLayoutEffect : Lo.useEffect;
var aa = M(re(), 1),
  Dd = 200,
  ia = class {
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
  Bo = Qe() ? new ia() : void 0;
function kL(e) {
  let t = ra();
  (0, Sn.useEffect)(() => {
    let n = e?.current;
    if (n)
      return (
        Bo?.observeElementWithCallback(e.current, t),
        () => {
          Bo?.unobserve(n);
        }
      );
  }, [e, t]);
}
function vx(e) {
  let t = ra(),
    n = Sn.default.useRef(null);
  function o(r) {
    (r.width === 0 && r.height === 0) ||
      ((!n.current || r.height !== n.current.height || r.width !== n.current.width) &&
        ((n.current = { width: r.width, height: r.height }), t()));
  }
  return (
    Mo(() => {
      if (!e.current) return;
      let { offsetWidth: r, offsetHeight: i } = e.current;
      return (
        o({ width: r, height: i }),
        Bo.observeElementWithCallback(e.current, o),
        () => {
          e.current && Bo.unobserve(e.current);
        }
      );
    }, []),
    n.current
  );
}
var sa = "data-framer-size-compatibility-wrapper",
  vL = (e) => (t) => {
    let n = Sn.default.useRef(null),
      o = vx(n),
      r = { [sa]: !0 },
      i = !!o,
      a = t.width ?? Dd,
      s = t.height ?? Dd;
    return (0, aa.jsx)("div", {
      style: { width: "100%", height: "100%", pointerEvents: "none" },
      ref: n,
      ...r,
      children: i && (0, aa.jsx)(e, { ...t, width: o?.width ?? a, height: o?.height ?? s }),
    });
  };
function wd(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(sa)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Ld)
    .map(Md);
}
function Ld(e) {
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
function Md(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents")
    return e;
  let t = [...e.children].find(Ld);
  return t ? Md(t) : e;
}
var Bd = M(oe(), 1);
function Nn(e) {
  return e.replace(/^id_/u, "").replace(/\\/gu, "");
}
function Ad(e, t, n = () => [], o = {}) {
  let { id: r, visible: i, _needsMeasure: a } = e,
    { skipHook: s = !1 } = o,
    l = (0, Bd.useContext)(Vn),
    u = _.current() === _.canvas;
  Mo(() => {
    !u ||
      l ||
      s ||
      (t.current && r && i && a && se.queueMeasureRequest(Nn(r), t.current, n(t.current)));
  });
}
function WL(e) {
  let t = e.closest("[data-framer-component-container]");
  t && se.queueMeasureRequest(Nn(t.id), t, wd(t));
}
var ve = M(oe(), 1);
function Ix(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var Dx =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
  Ed = Ix(
    (e) =>
      Dx.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  );
var Fe = M(oe(), 1);
var yt = { borderRadius: "inherit", cornerShape: "inherit" };
var Fd = [1, 2, 2.2],
  wx = [512, 1024, 2048, 4096];
function Od(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    o = t,
    r = 0;
  t > e && ((n = t), (o = e), (r = 1));
  let i = n / o,
    a = [];
  for (let s of wx) {
    if (n <= s) return a;
    a.push({ maxSideSize: s, width: r === 0 ? s : Math.trunc(s / i) });
  }
  return a;
}
function la(e, t) {
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
var Lx = 512;
function Mx(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let o = [];
  for (let r of n) {
    if (r.width < Lx) continue;
    let i = la(e, r.maxSideSize);
    o.push(`${i} ${r.width}w`);
  }
  return (o.push(`${la(e, null)} ${t.pixelWidth}w`), o.join(", ") || void 0);
}
function Bx(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let o = [],
    r = Math.max(t.pixelWidth, t.pixelHeight),
    i = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let a of Fd) {
    let s = Math.round(r * a * i),
      l = la(e, s);
    o.push({ src: l, scale: a });
  }
  return o;
}
function Wd(e, t, n) {
  if (!["auto", "lossless"].includes(t.preferredSize ?? "")) return { src: n, srcSet: void 0 };
  if (e) {
    let o = Bx(n, t, e);
    if (!o?.length) return { src: n, srcSet: void 0 };
    let [r, ...i] = o;
    return { src: r?.src, srcSet: i.map(({ src: a, scale: s }) => `${a} ${s}x`).join(", ") };
  } else {
    let o = Od(t.pixelWidth, t.pixelHeight);
    return { src: n, srcSet: Mx(n, t, o) };
  }
}
var Ke = M(re(), 1),
  ua = { position: "absolute", ...yt, top: 0, right: 0, bottom: 0, left: 0 };
function Ax() {
  return {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "64px auto",
    backgroundImage: Ds(se.imagePlaceholderSvg),
  };
}
function Ex(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function zd(e, t) {
  let n = e ?? "center",
    o = t ?? "center";
  return n === "center" && o === "center" ? "center" : n + " " + o;
}
function da(e) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    ...yt,
    objectPosition: zd(e.positionX, e.positionY),
    objectFit: Ex(e.fit),
  };
}
function Fx(e) {
  let t = Fe.default.useRef(e ? "auto" : "async"),
    n = (0, Fe.useCallback)((i) => {
      ((t.current = "auto"), (i.decoding = "auto"));
    }, []),
    o = (0, Fe.useCallback)(
      (i) => {
        n(i.currentTarget);
      },
      [n]
    ),
    r = (0, Fe.useCallback)(
      (i) => {
        i?.complete && n(i);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: o, onImageMount: r };
}
function Ox({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: o,
  draggable: r,
  avoidAsyncDecoding: i,
}) {
  let a = se.useImageSource(e, t, n),
    s = da(e),
    { decoding: l, onImageLoad: u, onImageMount: c } = Fx(i),
    { srcSet: m, src: f } =
      "srcSet" in e ? { src: a, srcSet: e.srcSet } : Wd(e.nodeFixedSize, e, a);
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
    alt: o ?? e.alt ?? "",
    style: s,
    draggable: r,
  });
}
function Wx({ image: e, containerSize: t, nodeId: n }) {
  let o = Fe.default.useRef(null),
    r = se.useImageElement(e, t, n),
    i = da(e);
  return (
    Fe.default.useLayoutEffect(() => {
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
    (0, Ke.jsx)("div", { ref: o, style: { display: "contents", ...yt } })
  );
}
function zx({ nodeId: e, image: t, containerSize: n }) {
  let o = Fe.default.useRef(null),
    r = se.useImageSource(t, n, e);
  return (
    Fe.default.useLayoutEffect(() => {
      let i = o.current;
      if (i === null) return;
      let a = da(t);
      se.renderOptimizedCanvasImage(i, r, a, e);
    }, [e, t, r]),
    (0, Ke.jsx)("div", { ref: o, style: { display: "contents", ...yt } })
  );
}
function Hd({ layoutId: e, image: t, ...n }) {
  e && (e += "-background");
  let o = null,
    r = !!e,
    i = null;
  if (ee(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let s = Oe(t.backgroundSize) ? t.backgroundSize : 1,
        l = { width: Math.round(s * t.pixelWidth), height: Math.round(s * t.pixelHeight) },
        u = qs(s * (t.pixelWidth / 2)),
        c = se.useImageSource(t, l);
      ((o = {
        ...ua,
        backgroundImage: `url(${c})`,
        backgroundRepeat: "repeat",
        backgroundPosition: zd(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${u}px auto`,
      }),
        (i = null),
        (r = !0));
    } else
      _.current() !== _.canvas
        ? (i = (0, Ke.jsx)(Ox, { image: t, avoidAsyncDecoding: _.current() === _.export, ...n }))
        : se.canRenderOptimizedCanvasImage(se.useImageSource(t))
          ? (i = (0, Ke.jsx)(zx, { image: t, ...n }))
          : (i = (0, Ke.jsx)(Wx, { image: t, ...n }));
  let a = i ? ua : (o ?? { ...ua, ...Ax() });
  return r
    ? (0, Ke.jsx)(tt.div, {
        layoutId: e,
        style: a,
        "data-framer-background-image-wrapper": !0,
        children: i,
      })
    : (0, Ke.jsx)("div", { style: a, "data-framer-background-image-wrapper": !0, children: i });
}
var ca = M(re(), 1);
function Hx(e, t, n = !0) {
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
function Gd(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...yt,
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), (0, ca.jsx)(tt.div, { style: n }))
    : (Hx(e, n, !1), (0, ca.jsx)(tt.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function jd(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function _d(e) {
  return e && e !== "search" && e !== "slot" && e !== "template" ? tt[e] : tt.div;
}
var Gx = Cs();
function jx(e, t, n) {
  ((e["data-framer-layout-hint-center-x"] = t === !0 || t === "x" ? !0 : void 0),
    (e["data-framer-layout-hint-center-y"] = t === !0 || t === "y" ? !0 : void 0),
    (e["data-framer-layout-hint-x"] = n?.x),
    (e["data-framer-layout-hint-y"] = n?.y));
}
function Kd(e, t) {
  let n = {};
  return (
    _.current() !== _.canvas ||
      jx(n, Gx ? e : void 0, {
        x: typeof t?.x == "number" ? t.x : void 0,
        y: typeof t?.y == "number" ? t.y : void 0,
      }),
    n
  );
}
var Ao = M(oe(), 1);
function Eo(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return n
    ? ((t = Ao.default.Children.map(t, (o) =>
        Ao.default.isValidElement(o) ? Ao.default.cloneElement(o, { _forwardedOverrides: n }) : o
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
var Fo = M(oe(), 1);
function Oo(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: o, layoutIdKey: r, duplicatedFrom: i, __fromCodeComponentNode: a = !1, drag: s } = e,
    { getLayoutId: l, enabled: u } = (0, Fo.useContext)(qt);
  return (0, Fo.useMemo)(() => {
    if (!u) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !r || a)) return;
    let m = c || l({ id: r, name: o, duplicatedFrom: i });
    if (m) return n ? `${m}-${n}` : m;
  }, [u]);
}
function Ud({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || Yi(t)
      ? (n.backgroundColor = t)
      : b.isColorObject(e) && (n.backgroundColor = e.initialValue || b.toRgbString(e))
    : e &&
      ((e = ie.get(e, null)),
      typeof e == "string" || Yi(e)
        ? (n.background = e)
        : vo.isLinearGradient(e)
          ? (n.background = vo.toCSS(e))
          : Io.isRadialGradient(e)
            ? (n.background = Io.toCSS(e))
            : b.isColorObject(e) && (n.backgroundColor = e.initialValue || b.toRgbString(e)));
}
function O(e, t, n, o) {
  if ((o === void 0 && (o = t), e[t] !== void 0)) {
    n[o] = e[t];
    return;
  }
}
function $d(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function qd(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Xd(e) {
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
    Ms(n)
      ? (t.cornerShape = Bs(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    O(e, "size", t),
    O(e, "width", t),
    O(e, "height", t),
    O(e, "minWidth", t),
    O(e, "minHeight", t),
    O(e, "top", t),
    O(e, "right", t),
    O(e, "bottom", t),
    O(e, "left", t),
    O(e, "position", t),
    O(e, "overflow", t),
    O(e, "opacity", t),
    e._border?.borderWidth || O(e, "border", t),
    O(e, "borderRadius", t),
    O(e, "radius", t, "borderRadius"),
    O(e, "color", t),
    O(e, "shadow", t, "boxShadow"),
    O(e, "x", t),
    O(e, "y", t),
    O(e, "z", t),
    O(e, "rotate", t),
    O(e, "rotateX", t),
    O(e, "rotateY", t),
    O(e, "rotateZ", t),
    O(e, "scale", t),
    O(e, "scaleX", t),
    O(e, "scaleY", t),
    O(e, "skew", t),
    O(e, "skewX", t),
    O(e, "skewY", t),
    O(e, "originX", t),
    O(e, "originY", t),
    O(e, "originZ", t),
    Ud(e, t),
    t
  );
}
var Ue = M(re(), 1);
function _x(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof fe(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var Yd = [
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
  Kx = new Set([...Yd, ...Yd.map((e) => `${e}Capture`)]);
function Ux(e) {
  if (e.drag) return "grab";
  for (let t in e) if (Kx.has(t)) return "pointer";
}
var pa = "overflow";
function $x(e) {
  return Jd(e) ? !0 : e.style ? !!Jd(e.style) : !1;
}
function Jd(e) {
  return pa in e && (e[pa] === "scroll" || e[pa] === "auto");
}
function Wo(e) {
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
    R = Ce(e.maxWidth),
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
    maxWidth: R,
    maxHeight: y,
  };
}
var Zd = { x: 0, y: 0, width: 200, height: 200 };
function qx(e) {
  let t = (0, ve.useContext)(Vn),
    { style: n, _initialStyle: o, __fromCanvasComponent: r, size: i } = e,
    a = Wo(e),
    s = sd(a),
    l = {
      display: "block",
      flex: n?.flex ?? "0 0 auto",
      userSelect: _.current() !== _.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let u = !_x(e) && !e.__fromCanvasComponent && !$x(e),
    c = e.style ? !("pointerEvents" in e.style) : !0;
  u && c && (l.pointerEvents = "none");
  let f = ve.default.Children.count(e.children) > 0 &&
      ve.default.Children.toArray(e.children).every(
        (y) => typeof y == "string" || typeof y == "number"
      ) && { display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" },
    h = Xd(e);
  (i === void 0 && !r && ($d(h) || (l.width = Zd.width), qd(h) || (l.height = Zd.height)),
    a.minWidth !== void 0 && (l.minWidth = a.minWidth),
    a.minHeight !== void 0 && (l.minHeight = a.minHeight));
  let T = {};
  (_t(a) &&
    s &&
    !qi(e) &&
    (T = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, o, h, T, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Do.applyWillChange(e, l, !0));
  let V = l;
  l.transform || (V = { x: 0, y: 0, ...l });
  let R = ea();
  return (
    e.positionSticky
      ? (!R || se.isOnPageCanvas || t) &&
        ((V.position = "sticky"),
        (V.willChange = "transform"),
        (V.top = e.positionStickyTop),
        (V.right = e.positionStickyRight),
        (V.bottom = e.positionStickyBottom),
        (V.left = e.positionStickyLeft))
      : R &&
        (e.positionFixed
          ? (V.position = se.isOnPageCanvas ? "fixed" : "absolute")
          : e.positionAbsolute && (V.position = "absolute")),
    "rotate" in V && V.rotate === void 0 && delete V.rotate,
    [V, s]
  );
}
var Xx = new Set([
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
function Yx(e) {
  let t = {};
  for (let n in e)
    (As(n) || Ed(n)) && !Xx.has(n)
      ? (t[n] = fe(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof fe(e)[n] != "boolean" && !e.transition && (t.transition = fe(e)[n]));
  return t;
}
function Jx(e) {
  return "data-framer-name" in e;
}
var Zx = (0, ve.forwardRef)(function (t, n) {
    let { name: o, center: r, border: i, _border: a, __portal: s } = t,
      { props: l, children: u } = Eo(t),
      c = Yx(l),
      m = Oo(t),
      f = Ux(t),
      h = (0, ve.useRef)(null),
      T = n ?? h,
      V = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": f,
        "data-framer-highlight": f === "pointer" ? !0 : void 0,
        "data-layoutid": m,
        "data-framer-offset-parent-id": fe(t)["data-framer-offset-parent-id"],
      };
    !Jx(t) && o && (fe(V)["data-framer-name"] = o);
    let [R, y] = qx(l),
      C = Wo(l),
      W = qi(C),
      j = r && !(y && !W && _t(C)) ? r : void 0;
    (j
      ? c.transformTemplate || (c.transformTemplate = vd(r))
      : c.transformTemplate || (c.transformTemplate = void 0),
      Object.assign(V, Kd(j, l.style)),
      Ad(t, T));
    let v = ld(t),
      Z = (0, ve.useContext)(Vn),
      de = eg(l, C, y, Z),
      ae = Po(
        (0, Ue.jsxs)(Ue.Fragment, {
          children: [
            v
              ? (0, Ue.jsx)(Hd, {
                  alt: t.alt ?? "",
                  image: v,
                  containerSize: y ?? void 0,
                  nodeId: t.id && Nn(t.id),
                  layoutId: m,
                })
              : null,
            u,
            (0, Ue.jsx)(Gd, { ...a, border: i, layoutId: m }),
          ],
        }),
        de
      ),
      Je = _d(t.as),
      rt = jd(v);
    return (
      t.fitImageDimension &&
        rt &&
        ((R[t.fitImageDimension] = "auto"), (R.aspectRatio = rt.width / rt.height)),
      (0, Ue.jsxs)(Je, { ...V, ...c, layoutId: m, style: R, ref: T, children: [ae, s] })
    );
  }),
  Qx = (0, ve.forwardRef)(function (t, n) {
    let { visible: o = !0 } = t;
    return o ? (0, Ue.jsx)(Zx, { ...t, ref: n }) : null;
  }),
  Qd = kd(Qx);
function eg(e, t, n, o) {
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
var tg = ["actionIdentifier", "identifier", "controls"];
function zo(e) {
  return x(e) && tg.every((t) => t in e);
}
function QM(e) {
  return x(e) && "gamepadId" in e;
}
function eB(e, t) {
  if (!t.has(e.identifier)) return (t.add(e.identifier), e);
  let n = js();
  return (t.add(n), { ...e, identifier: n });
}
var ng = ["start", "center", "end"];
function iB(e) {
  return p(e) ? ng.includes(e) : !1;
}
var og = ["fixed", "minmax"];
function aB(e) {
  return p(e) ? og.includes(e) : !1;
}
var rg = ["fixed", "auto", "fit"];
function sB(e) {
  return p(e) ? rg.includes(e) : !1;
}
var ig = "columnMasonry";
var ag = ["stack", "grid"],
  lB = {
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
  ec = "horizontal",
  tc = "center",
  nc = "center",
  oc = "layout";
function ht(e) {
  return oc in e;
}
function uB(e) {
  return p(e) ? ag.includes(e) : !1;
}
var sg = ["start", "end", "center"];
function lg(e) {
  return P(e) ? !1 : E(e) ? !0 : fa(e) && sg.includes(e);
}
function dB(e) {
  return !ht(e) || e.layout !== "stack" || !e.stackDistribution ? !1 : lg(e.stackDistribution);
}
function rc(e) {
  return ht(e) && !P(e.layout);
}
function cB(e) {
  return rc(e) && e.layout === "stack";
}
function ug(e) {
  return rc(e) && e.layout === "grid";
}
function pB(e) {
  return ug(e) && e.gridType === ig;
}
function fB(e) {
  return oc in e;
}
function dg(e) {
  if (ic(e)) return e;
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
var Ho = ["horizontal", "vertical"];
function ic(e) {
  return p(e) && Ho.includes(e);
}
function mB(e) {
  if (!ic(e)) return e;
  switch (e) {
    case "horizontal":
      return "row";
    case "vertical":
      return "column";
    default:
      z(e);
  }
}
var cg = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];
function pg(e) {
  return p(e) && cg.includes(e);
}
var Go = ["start", "center", "end", "space-between", "space-around", "space-evenly"];
function fa(e) {
  return p(e) && Go.includes(e);
}
function jo(e) {
  if (!fa(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function fg(e) {
  if (fa(e)) return e;
  if (pg(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
var mg = ["flex-start", "flex-end", "center"];
function ac(e) {
  return p(e) && mg.includes(e);
}
var _o = ["start", "center", "end"];
function sc(e) {
  return p(e) ? _o.includes(e) : !1;
}
function yg(e) {
  if (sc(e)) return e;
  if (ac(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
function lc(e) {
  if (ac(e) || !sc(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function yB(e, t) {
  switch (e) {
    case "stackDirection":
      return dg(t);
    case "stackDistribution":
      return fg(t);
    case "stackAlignment":
      return yg(t);
    default:
      return t;
  }
}
function hB(e) {
  return !e || !ht(e) ? null : (e.layout ?? null);
}
var hg = ["sticky", "fixed", "absolute"],
  xg = new Set(hg);
function bB(e) {
  return p(e) && xg.has(e);
}
var TB = {
    position: void 0,
    positionStickyTop: void 0,
    positionStickyRight: void 0,
    positionStickyBottom: void 0,
    positionStickyLeft: void 0,
  },
  gg = "position";
function Rn(e) {
  return !e || e.__unsafeIsSlotPropertyChildNode() ? !1 : gg in e;
}
var RB = {
    carouselEffectEnabled: void 0,
    carouselEffectLoop: void 0,
    carouselEffectAutoPlay: void 0,
    carouselEffectInterval: void 0,
    carouselEffectSnap: void 0,
    carouselEffectTransition: void 0,
  },
  PB = {
    carouselEffectEnabled: !0,
    carouselEffectLoop: !0,
    carouselEffectAutoPlay: !1,
    carouselEffectInterval: 1.5,
    carouselEffectSnap: !0,
    carouselEffectTransition: void 0,
  },
  kB = { ...at, stiffness: 200, damping: 40 },
  bg = "carouselEffectEnabled";
function Tg(e) {
  return bg in e;
}
function ma(e) {
  return Cg(e) && e.carouselEffectEnabled === !0;
}
function ya(e) {
  return Rn(e) && e.position !== void 0 && e.cache.carouselAncestorId === e.parentid;
}
function Cg(e) {
  return !(
    !Tg(e) ||
    !ht(e) ||
    e.layout !== "stack" ||
    Vg(e) ||
    e.stackWrapEnabled ||
    ("tickerEffectEnabled" in e && e.tickerEffectEnabled === !0)
  );
}
function Vg(e) {
  return !!e.cache.carouselAncestorId;
}
function vB(e) {
  return !!(e.cache.carouselAncestorId && e.parentid === e.cache.carouselAncestorId && !ya(e));
}
var ha = ["default", "reverse"],
  LB = {
    tickerEffectEnabled: void 0,
    tickerEffectVelocity: void 0,
    tickerEffectHoverModifier: void 0,
    tickerEffectDirectionModifier: void 0,
    tickerEffectDraggable: void 0,
  },
  MB = {
    tickerEffectEnabled: !0,
    tickerEffectVelocity: 100,
    tickerEffectHoverModifier: 100,
    tickerEffectDirectionModifier: "default",
    tickerEffectDraggable: !1,
  },
  Sg = "tickerEffectEnabled";
function Ng(e) {
  return Sg in e;
}
function BB(e) {
  return Rg(e) && e.tickerEffectEnabled === !0;
}
function Rg(e) {
  return !(
    !Ng(e) ||
    !ht(e) ||
    e.layout !== "stack" ||
    Pg(e) ||
    e.stackWrapEnabled ||
    ("carouselEffectEnabled" in e && e.carouselEffectEnabled === !0)
  );
}
function Pg(e) {
  return !!e.cache.tickerAncestorId;
}
function AB(e) {
  return !!(e.cache.tickerAncestorId && e.parentid === e.cache.tickerAncestorId);
}
function EB(e) {
  return e === "default" || e === "reverse";
}
function uc(e) {
  switch (e) {
    case "default":
      return "Default";
    case "reverse":
      return "Reverse";
  }
}
var kg = "usesDOMRect";
function dc(e) {
  return kg in e;
}
var vg = ["start", "center", "end"],
  Ko = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  xa = [...Ko, "all"];
function cc(e) {
  return S(e) ? `Span ${e}` : "Span all";
}
var pc = Ko.map(cc),
  fc = xa.map(cc);
function zB(e) {
  return e === "all" ? !0 : S(e) && e > 0;
}
function HB(e) {
  return S(e) && e > 0;
}
function GB(e) {
  return p(e) ? vg.includes(e) : !1;
}
var jB = {
    gridItemHorizontalAlignment: void 0,
    gridItemVerticalAlignment: void 0,
    gridItemColumnSpan: void 0,
    gridItemRowSpan: void 0,
  },
  Ig = "gridItemHorizontalAlignment";
function _B(e) {
  return Ig in e;
}
var $B = { width: 100, height: 100 },
  qB = { width: 1, height: 1 },
  Dg = "width";
function mc(e) {
  return to(e) ? !1 : Dg in e;
}
var hc = [
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
  wg = new RegExp(`^([+-]?(?:\\d*\\.)?\\d+(?:e[+-]?\\d+)?)(${hc.join("|")})?$`, "i"),
  Lg = new Map(hc.map((e) => [e.toLowerCase(), e]));
function Yt(e, t) {
  let n = e.match(wg);
  if (!n) return [NaN, void 0];
  let [, o, r] = n,
    i = parseFloat(o);
  if (Number.isNaN(i)) return [NaN, void 0];
  if (!r) return [i, t];
  let a = Lg.get(r.toLowerCase());
  if (!a) throw Error(`unrecognized CSS unit ${r}`);
  return [i, a];
}
function JB(e) {
  if (!p(e)) return !1;
  let [t] = Yt(e);
  return !Number.isNaN(t);
}
function yc(e, t) {
  return `${e}${t}`;
}
function ZB(e, { parentSize: t, viewportSize: n }) {
  if (P(e)) return;
  if (S(e)) return e;
  let [o, r] = Yt(e);
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
function QB(e) {
  if (!p(e)) return [void 0, void 0, void 0, void 0];
  let t = e.split(" ");
  if (t.length === 1) {
    let [n] = Yt(t[0]),
      o = yc(n, "px");
    return [o, o, o, o];
  }
  return t.length !== 4
    ? [void 0, void 0, void 0, void 0]
    : t.map((n) => {
        let [o] = Yt(n);
        return yc(o, "px");
      });
}
var Mg = /(?<value>\d{1,5})px/gu;
function eA(e, t) {
  return e.replace(Mg, (n, o) => `${t(Number(o))}px`);
}
function iA(e, t) {
  let n = ga(e, t);
  return !Ve(n);
}
function ga(e, t) {
  let n = Bg(e, t);
  return n && lt(n) ? n : null;
}
function Bg(e, t, n = !0) {
  let o = e.get(t);
  if (!o) return null;
  if (he(o)) return o;
  if (n) {
    let i = null;
    if (
      (Ft(o)
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
function aA(e, t) {
  return t.parentid && lt(e.get(t.parentid));
}
var Uo = ["cache", "treeState", "mutable", "update"],
  Ag = new Set(Uo);
function lA(e) {
  return Ag.has(e);
}
var xc = new Set([...Uo, "transient"]);
var mA = { repeatArray: void 0, repeatArrayTransforms: void 0 },
  Eg = "repeatArray";
function gc(e) {
  return !(!e || !(Eg in e) || he(e) || Be(e));
}
function Jt(e) {
  return !!e && gc(e) && !!e.repeatArray;
}
function Fg(e, t) {
  return e.getNodeWithTrait(t.getPrimaryId(), gc)?.repeatArray;
}
function yA(e, t) {
  let n = Fg(e, t);
  if (n) return jl("array", n, t.repeatArrayTransforms ?? []);
}
var ba = "element",
  bc = "collection",
  Tc = "collectionItemId",
  Cc = "pathVariables",
  Ta = "framer/page-link,";
function $o(e) {
  return ee(e) && e.startsWith(`data:${Ta}`);
}
function gA(e = null, t = {}) {
  let n = e || "none",
    o = new URL(`data:${Ta}${n}`);
  return (
    t.element && o.searchParams.append(ba, t.element),
    t.collectionItem &&
      (o.searchParams.append(bc, t.collectionItem.collection),
      o.searchParams.append(Tc, t.collectionItem.collectionItemId),
      o.searchParams.append(Cc, new URLSearchParams(t.collectionItem.pathVariables).toString())),
    o.href
  );
}
function Ca(e) {
  if ($o(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(Ta.length),
        o = t.searchParams,
        r = o.has(ba) ? o.get(ba) : void 0,
        i,
        a = o.get(bc),
        s = o.get(Tc),
        l = o.get(Cc);
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
function bA(e) {
  return !$o(e);
}
function TA(e, t, n) {
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
    let l = Ca(s);
    if (!l?.target) return !1;
    ((o = l.target), (r = l.element ?? void 0), (i = l.collectionItem?.pathVariables));
  }
  let a = r ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(o, r, Object.assign({}, n, i), a), !0);
}
function Og(e, t = 0) {
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
function Wg(e, t) {
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
function Pn(e) {
  let t = Og(e);
  return Wg(e, t);
}
var qo = "--token-";
function Xo(e) {
  return e ? e.slice(qo.length) : null;
}
function Yo(e) {
  let { customProperty: t } = Pn(e);
  return Xo(t);
}
function $e(e) {
  return typeof e != "string" ? !1 : e.trim().startsWith(`var(${qo}`);
}
function Jo(e) {
  let { customProperty: t, fallback: n } = Pn(e);
  if (t && n) return `var(${t}, ${n})`;
  if (t) return `var(${t})`;
}
function Zo(e, t) {
  if (!$e(e)) return;
  let n = Yo(e);
  if (n) return t[n];
}
function kA(e) {
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
function vA(e) {
  return e > 0 ? "any" : "__legacy";
}
function IA(e) {
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
function DA(e) {
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
function wA(e) {
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
function LA(e) {
  let t = e.framerContractVersion;
  if (!t) return 0;
  let n = parseInt(t, 10);
  return !Number.isFinite(n) || n < 0 ? 0 : n;
}
function MA(e, t) {
  return e?.[t] !== void 0;
}
var zg = "getBreakpointValues";
function EA(e) {
  return e ? zg in e : !1;
}
var Hg = "min",
  Gg = "max",
  jg = "canvasClassName";
function _g(e) {
  return x(e)
    ? Hg in e
      ? S(e.min)
      : Gg in e
        ? S(e.max)
        : jg in e
          ? p(e.canvasClassName)
          : !1
    : !1;
}
function Vc(e) {
  if (!x(e)) return !1;
  for (let t in e) {
    let n = e[t];
    if (_g(n)) return !0;
  }
  return !1;
}
function er(e, t) {
  if (!P(e))
    for (let n in e) {
      let o = e[n],
        r = o?.min ?? 0,
        i = o?.max ?? 1 / 0;
      if (t >= r && t <= i) return n;
    }
}
var _A = { layoutTemplateIdentifierOverride: void 0 },
  Ug = "layoutTemplateIdentifier";
function Sc(e) {
  return e ? Ug in e : !1;
}
function Nc(e, t) {
  if (!t || !lt(t)) return;
  let n = e.getScopeNodeFor(t);
  if (Sc(n)) return n.layoutTemplateIdentifier;
}
function KA(e) {
  return !!(Sc(e) && e.layoutTemplateIdentifier);
}
function Rc(e) {
  return !e || !dc(e) ? !1 : !!e.usesLayoutTemplateRectForModuleIdentifierCached();
}
function $g(e, t) {
  let n = e.framerDefaultVariant,
    o = e.framerBreakpoints;
  if (!o) return n;
  let r = JSON.parse(o);
  return er(r, t) ?? n;
}
function UA(e, t, n) {
  let o = t.componentForIdentifier(e)?.annotations;
  if (o) return $g(o, n);
}
var Va = "$control__";
function Sa(e) {
  return e.startsWith(Va);
}
function qA(e) {
  return e.substring(Va.length);
}
function qg(e) {
  return `${Va}${e}`;
}
function XA(e) {
  let t = {};
  for (let n of Object.keys(e)) {
    let o = e[n];
    t[qg(n)] = o;
  }
  return t;
}
function YA(e) {
  for (let t in e) if (Sa(t)) return !0;
  return !1;
}
var tr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  Ie = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
function Pc(e) {
  let t = Hs(e),
    n = tr.charAt(t % tr.length);
  for (t = Math.floor(t / tr.length); t > 0;)
    ((n += Ie.charAt(t % Ie.length)), (t = Math.floor(t / Ie.length)));
  return n;
}
function ge() {
  return qe(tr) + qe(Ie) + qe(Ie) + qe(Ie) + qe(Ie) + qe(Ie) + qe(Ie) + qe(Ie) + qe(Ie);
}
function qe(e) {
  return e.charAt(Math.floor(Math.random() * e.length));
}
var xt = {
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
  Xg = ["blockStyles", "backgroundMask", "textStylePreset"],
  Yg = ["header", "cell"];
function nE(e) {
  return p(e) && Yg.some((t) => e === t);
}
var Jg = {
    textBlock: !0,
    numberedList: !0,
    bulletedList: !0,
    blockquote: !0,
    media: !0,
    module: !0,
    table: !0,
  },
  Zg = ["inlineStyles", "backgroundStyles", "inlineCodeStylePreset", "linkStylePreset"],
  oE = ["openInNewTab", "smoothScroll", "clickTrackingId", "relValues", "preserveParams"];
function kc(e) {
  return p(e) && e in xt;
}
function Qg(e) {
  return kc(e) && e.endsWith("Localized");
}
function rE(e) {
  return Qg(e) ? e : `${e}Localized`;
}
var eb = {
  collectionControlPropLocalized: "collectionControlProp",
  controlPropLocalized: "controlProp",
  richTextNodeLocalized: "richTextNode",
};
function tb(e) {
  return eb[e];
}
function iE(e) {
  return { ...e, variant: tb(e.variant), childNodes: e.childNodes };
}
function aE(e) {
  return Zt(e) && xt[e.variant].styles;
}
function sE(e) {
  return Zg.some((t) => t in e);
}
function lE(e) {
  return Xg.some((t) => t in e);
}
function uE(e) {
  return Zt(e) && !e.variant.endsWith("Localized");
}
function gt(e, t) {
  return xt[e][t];
}
function Zt(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "type" in e &&
    e.type === "richText" &&
    "variant" in e &&
    kc(e.variant) &&
    "childNodes" in e &&
    Array.isArray(e.childNodes)
  );
}
function nb(e) {
  return Os(e, "type") && p(e.type) && Jg[e.type] === !0;
}
function Se(e, t) {
  if (!nb(e)) return !1;
  switch (e.type) {
    case "textBlock":
      return !0;
    case "table":
      return xt[t].tables;
    case "module":
      return xt[t].embeds;
    case "media":
      return xt[t].media;
    case "blockquote":
      return xt[t].blockquotes;
    case "numberedList":
    case "bulletedList":
      return e.childNodes.every((n) => n.childNodes.every((o) => Se(o, t)));
  }
  z(e);
}
function vc(e) {
  let t = {};
  for (let n in e) {
    let o = e[n];
    P(o) || (t[n] = o);
  }
  return t;
}
function TE(e) {
  for (let t in e) {
    let n = e[t];
    if (n) return n;
  }
}
var Ra = "webPage",
  ob = "webPageId",
  Pa = "url",
  rb = "url";
function bt(e) {
  return x(e) && "type" in e && (e.type === Ra || e.type === Pa);
}
function Na(e) {
  return bt(e) && e.type === Pa;
}
function Qt(e) {
  return bt(e) && e.type === Ra;
}
function ib(e) {
  if (rb in e) return Pa;
  if (ob in e) return Ra;
  throw new Error("Link: Cannot infer Link type from link provided without a type.");
}
function Ic(e) {
  return { ...vc(e), type: ib(e) };
}
function ab(e) {
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
function nr(e) {
  if (E(e) || bt(e)) return e;
  if ($o(e)) {
    let t = Ca(e);
    if (!t?.target) return;
    let n = t.collectionItem,
      o = t.element === "none" ? void 0 : t.element;
    return Ic({ webPageId: t.target, hash: o || void 0, pathVariables: ab(n) });
  }
  if (!(!p(e) || !e)) return Ic({ url: e });
}
function sb(e, t) {
  if (e === t) return !0;
  try {
    return new URL(e).href === new URL(t).href;
  } catch {
    return !1;
  }
}
function CE(e, t, n) {
  return Na(e) && Na(t)
    ? sb(e.url, t.url)
    : !Qt(e) || !Qt(t) || e.webPageId !== t.webPageId
      ? !1
      : n?.ignoreHash
        ? ce(e.pathVariables, t.pathVariables)
        : e.hash !== t.hash
          ? !1
          : ce(e.pathVariables, t.pathVariables) && ce(e.hashVariables, t.hashVariables);
}
function VE(e) {
  if (!Qt(e)) return (Na(e) || void 0, !1);
  if (e.pathVariables) {
    for (let t in e.pathVariables) if (L(e.pathVariables[t])) return !0;
  }
  if (e.hashVariables) {
    for (let t in e.hashVariables) if (L(e.hashVariables[t])) return !0;
  }
  return !1;
}
function SE(e, t) {
  return Qt(e) && !t?.has(e.webPageId);
}
var Dc = ["nofollow", "noreferrer", "me", "ugc", "sponsored"];
var lb = Dc,
  ub = new Set(lb),
  ka = (e) => ub.has(e),
  wc = (e) => (B(e) ? e.every(ka) : !1);
function Lc(e, t) {
  for (let n in e) if (e[n] === t) return !0;
  return !1;
}
function Mc(e) {
  return Lc(A, e);
}
var db = Rt("RawControlProp"),
  Bc = "type";
function De(e) {
  if (!x(e) || !(Bc in e)) return !1;
  let t = e[Bc];
  return t === null
    ? (db.reportErrorOnceEveryTenMinutes(new Error("Encountered raw control prop with null type"), {
        value: e,
      }),
      !0)
    : Mc(t);
}
function EE(e) {
  return x(e) ? Object.values(e).every((t) => t === void 0 || De(t)) : !1;
}
var va = (e) => {};
function OE(e) {
  va = e;
}
var Ia = (e) => {};
function WE(e) {
  Ia = e;
}
var Da = (e, t, ...n) => {
  e.assign(t, ...n);
};
function zE(e) {
  Da = e;
}
var or = class {
  hierarchyChange = !1;
  localizationSourceOwnRevision = 0;
  localizationSourceRevision = 0;
  localizationTranslationOwnRevision = 0;
  localizationTranslationRevision = 0;
  reset() {
    this.hierarchyChange = !1;
  }
};
var rr = class {
  treeLineage = null;
  draft = null;
  tree() {
    return this.treeLineage?.latestTree;
  }
};
function QE(e, t, ...n) {
  Da(e, t, ...n);
}
function pb(e) {
  return e ? e.toJS instanceof Function : !1;
}
var ir = { mutable: !0, update: 0 },
  fb = new Set([...xc, "__class", "children", "id"]),
  ar = class extends tl("MutableNode") {
    constructor(t, n, o) {
      (super(),
        va(this),
        (this.id = t?.id ?? ln()),
        (this.parentid = t?.parentid ?? Ks),
        (this.cache = t?.cache ?? n ?? new or()),
        (this.treeState = o ?? new rr()),
        (this.duplicatedFrom = t?.duplicatedFrom ?? null),
        (this.children = t?.children ?? new Ee()),
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
      let o = this.asDraft();
      o[t] = n;
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
        if (fb.has(n)) continue;
        let o = this[n];
        if (n === "replicaInfo" && o) {
          t[n] = JSON.parse(JSON.stringify(o));
          continue;
        }
        if (pb(o)) {
          t[n] = o.toJS();
          continue;
        }
        t[n] = o;
      }
      return t;
    }
    set(t, n) {
      this.treeState.treeLineage?.editHooks?.onTreeEditStart();
      try {
        let o = this.asDraft(n);
        return (o.verifyPropertiesToSet(t), o.assign(t), o);
      } catch (o) {
        throw (this.treeState.treeLineage?.editHooks?.onTreeEditError(o), o);
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
        (n.assign(this, ir, { cache: n.cache, treeState: n.treeState, id: n.id }, t), t?.children)
      )
        return n;
      let o = this.children;
      return (o && (n.children = new Ee(o.map((r) => r.clone({ parentid: n.id })))), n);
    }
    cloneWithIds(t) {
      let n = this.cloneEmpty();
      if ((n.assign(this, ir, { cache: n.cache, treeState: n.treeState }, t), t?.children))
        return n;
      let o = this.children;
      return (o && (n.children = new Ee(o.map((r) => r.cloneWithIds()))), n);
    }
    cloneWithRenamedIds(t, n) {
      let o = this.cloneEmpty();
      if (
        (o.assign(this, ir, { cache: o.cache, treeState: o.treeState, id: o.id }, n),
        t.set(this.id, o.id),
        n?.children)
      )
        return o;
      let r = this.children;
      return (
        r && (o.children = new Ee(r.map((i) => i.cloneWithRenamedIds(t, { parentid: o.id })))),
        o
      );
    }
    cloneWithCallback(t, n) {
      let o = this.cloneEmpty(),
        r = t(this);
      if (
        (o.assign(this, ir, { cache: o.cache, treeState: o.treeState, id: o.id }, r),
        n && o.setProp("parentid", n),
        r?.children)
      )
        return o;
      let i = this.children;
      return (i && (o.children = new Ee(i.map((a) => a.cloneWithCallback(t, o.id)))), o);
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
        for (let o of n) {
          let r = o.find(t);
          if (r) return r;
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
      let n = mb(this);
      if ((yield n, n.skipChildren)) return;
      let o = this.children;
      if (o) for (let r = 0, i = o.length; r < i; r++) yield* o.at(r).fastWalk();
    }
    get(t) {
      return this[t];
    }
    walk() {
      let t = !0,
        n = !1,
        o = [this, 0],
        r = [];
      return {
        [Symbol.iterator]() {
          return this;
        },
        next() {
          if (t) return ((t = !1), { value: o[0], done: !1 });
          if (n) return { value: void 0, done: !0 };
          for (; !o[0].children || o[1] >= o[0].children.length;) {
            let a = r.pop();
            if (!a) return ((n = !0), { value: void 0, done: !0 });
            o = a;
          }
          let i = o[0].children.at(o[1]++);
          return (i.children && (r.push(o), (o = [i, 0])), { value: i, done: !1 });
        },
      };
    }
  };
function mb(e) {
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
      get: (o) => e[o],
      getSubfield: (...o) => {
        let r = e;
        for (let i of o) {
          if (!r || typeof r != "object") return;
          r = r[i];
        }
        return r;
      },
      isKeySetAndNotInherited: (o) => {
        if (!e.originalid) return !0;
        let r = e.tree();
        if (!r) return !1;
        let i = e;
        for (; i && !i.replicaInfo;) i = r.get(i.parentid);
        let a = i?.replicaInfo?.overrides[e.originalid];
        return !!(a && (Object.hasOwn(a, o) || a._deleted?.includes(o)));
      },
      keys: () => Object.keys(e).values(),
      getLocalizationSourceGroupCache: () => e.cache.localizationSourceGroup,
      setLocalizationSourceGroupCache: (o) => {
        let r = e.cache;
        r.localizationSourceGroup = o;
      },
      skipChildren: !1,
    }
  );
}
var Ac = "|local|";
var yb = { color: "rgba(0,0,0,0.25)", x: 0, y: 2, blur: 5 },
  hb = {
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
function Ec(e, t) {
  let n = { ...t, ...e };
  return (n.id || (n.id = ln()), n);
}
function wa(e) {
  if (!x(e) || !("id" in e)) return !1;
  for (let n of Zi) if (!(n in e)) return !1;
  return !0;
}
function en(e) {
  return B(e) && e.every(wa);
}
function iF(e) {
  return Ec(e, yb);
}
function sr(e) {
  return Ec(e, hb);
}
function aF(e) {
  return { ...e, id: ln() };
}
function sF(e, t) {
  return { ...e, ...t };
}
function fF(e) {
  return !(!Fc(e) || e.__class === "ImageStylePresetNode");
}
function mF(e) {
  return La(e) && !pt(e);
}
function yF(e) {
  if (!Fc(e)) return !1;
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
function Fc(e) {
  return La(e) && ft(e);
}
var Oc = "boxShadows",
  Wc = (e) => e === Oc;
function La(e) {
  return x(e) ? Oc in e : !1;
}
function hF(e) {
  return !La(e) || !en(e.boxShadows) ? !1 : e.boxShadows.length > 0;
}
var zc = "shadows",
  Hc = (e) => e === zc;
function TF(e) {
  return zc in e;
}
var CF = { shadows: void 0 };
function Ma(e) {
  return x(e) ? e && Ji.every((t) => t in e) : !1;
}
function VF(e) {
  return B(e) && e.every(Ma);
}
var xb = "removeTokenVariables";
function Gc(e) {
  return typeof e == "object" && e !== null && xb in e;
}
function zF(e, t = !1) {
  let n = {};
  for (let o of e) {
    let r = o.colorForMode(t);
    r && (n[ur(o)] = r);
  }
  return n;
}
function _c(e) {
  let t = { light: { srgb: "", p3: "" }, dark: { srgb: "", p3: "" } };
  for (let n of e) {
    let o = ur(n);
    if (b.isP3String(n.light)) {
      t.light.p3 += `${o}: ${n.light};`;
      let r = ct.fromString(n.light)?.toString("srgb");
      r && (t.light.srgb += `${o}: ${r};`);
    } else t.light.srgb += `${o}: ${n.light};`;
    if (!(!n.dark || n.softDeleted))
      if (b.isP3String(n.dark)) {
        t.dark.p3 += `${o}: ${n.dark};`;
        let r = ct.fromString(n.dark)?.toString("srgb");
        r && (t.dark.srgb += `${o}: ${r};`);
      } else t.dark.srgb += `${o}: ${n.dark};`;
  }
  return t;
}
function HF(e) {
  let t = _c(e);
  return [
    `body { ${t.light.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.light.p3} } }`,
    `@media (prefers-color-scheme: dark) { body { ${t.dark.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.dark.p3} } } }`,
  ];
}
function GF(e) {
  let t = _c(e);
  return [
    `body { ${t.light.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.light.p3} } }`,
    `body[data-framer-theme="dark"] { ${t.dark.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.dark.p3} } }`,
  ];
}
function jF(e, t, n = !1) {
  let o = {};
  for (let r of t) {
    let i = r.colorForMode(n);
    if (!i) return;
    o[r.id] = i;
  }
  return gb(e, o, !0);
}
function gb(e, t, n) {
  let o;
  if (He(e)) {
    let i = e.html;
    if (Zt(i) || Object.keys(t).some((s) => i.includes(ur({ id: s })))) {
      let s = e.removeTokenVariables(t);
      s !== i && ((o ??= {}), (o.html = s));
    }
  }
  let r = Tb(e, t, n);
  return (r && (o = { ...o, ...r }), o);
}
var bb = new Set([...Uo, "children", "id"]);
function Kc(e) {
  return bb.has(e);
}
function Tb(e, t, n) {
  let o;
  return (
    (e instanceof ar ? e.entries() : Object.entries(e)).forEach(([i, a]) => {
      if (Kc(i)) return;
      let s,
        l = Hc(i) || Wc(i);
      if (B(a)) {
        let u = [],
          c = !1;
        (a.forEach((m, f) => {
          let T = l && (Ma(m) || wa(m)) ? lr(m, t) : jc(String(f), m, t, n);
          (T && (c = !0), u.push(T || m));
        }),
          c && (s = u));
      } else s = jc(i, a, t, n);
      typeof s < "u" && (o || (o = {}), (o[i] = s));
    }),
    o
  );
}
function kn(e, t) {
  if (B(e)) {
    for (let n of e) if (kn(n, t)) return !0;
    return !1;
  }
  if (x(e)) {
    let n = Object.values(e);
    for (let o of n) if (kn(o, t)) return !0;
    return !1;
  }
  return $e(e) ? Yo(e) === t : !1;
}
function _F(e, t) {
  if (He(e)) {
    let n = e.getTextColors(!1);
    for (let r of n) if (kn(r, t)) return !0;
    let o = e.getFills();
    for (let r of o) if (kn(r, t)) return !0;
  }
  for (let n in e) if (!Kc(n) && kn(e[n], t)) return !0;
  return !1;
}
function jc(e, t, n, o) {
  if (Sa(e)) return Cb(t, n);
  if (Gc(t)) {
    let i = t.removeTokenVariables(n);
    if (i) return i;
  }
  let r = Zo(t, n);
  if (r) return r;
  if (o && $e(t)) return Jo(t);
}
function Cb(e, t) {
  if (!De(e)) return;
  let { value: n } = e,
    o = lr(n, t);
  return o === void 0 ? void 0 : { ...e, value: o };
}
function lr(e, t) {
  if (B(e)) {
    let n = !1,
      o = e.map((r) => {
        let i = lr(r, t);
        return i ? ((n = !0), i) : r;
      });
    return n ? o : void 0;
  }
  if (x(e)) {
    let n = {},
      o = !1;
    for (let r in e) {
      let i = lr(e[r], t);
      i ? ((o = !0), (n[r] = i)) : (n[r] = e[r]);
    }
    return o ? n : void 0;
  }
  if ($e(e)) return Zo(e, t);
}
function ur(e) {
  return `${qo}${e.id}`;
}
function KF(e, t = {}) {
  let n = e.light;
  if (!n) return "";
  let o = b.isColor(n) ? b.toRgbString(b(n)) : n,
    r = `var(${ur(e)}, ${o})`;
  return t.excludeMetadata === !0 ? r : `${r} ${Vb(e.name, t.packageIdentifier)}`;
}
function UF(e, t) {
  if ($e(e)) {
    let n = Jo(e);
    if (n) return n;
  }
  return p(e) && t ? t(e) : e;
}
function Vb(e, t) {
  let n = { name: e };
  return (t && t !== Ac && (n.packageIdentifier = t), `/* ${JSON.stringify(n)} */`);
}
function $F(e, t) {
  let n = t.commaIndex ?? t.end - 1,
    o = e.substring(t.start + 4, n);
  return Xo(o);
}
function qF(e) {
  return Xo(e);
}
function XF(e) {
  return Pn(e).fallback || null;
}
function Uc(e) {
  let t = "hasProp";
  return !!e && typeof e == "object" && t in e && typeof e[t] == "function";
}
function qc(e) {
  return { collectionRepeatedItemId: e, repeatedItemId: e };
}
function Xc(e, t) {
  let n = t?.getPrimaryId();
  if (((t = e.get(n)), !Be(t))) return null;
  if (t.repeatedItemId !== void 0) return $c(e, t, t.repeatedItemId);
  let o = $c(e, t, t.collectionRepeatedItemId);
  return o || Jc(t);
}
function t0(e, t) {
  let n = t.cache.repeatedAncestorRepeaterIds;
  if (n !== null) return n;
  let o = Sb(e, t);
  return ((t.cache.repeatedAncestorRepeaterIds = o), o);
}
function Sb(e, t) {
  let n = [],
    o = t,
    r = e.getParent(t.id);
  for (; r;) {
    if (Jt(r)) n.push(r.id);
    else if (Be(r)) {
      let i = Xc(e, r);
      i && o.getPrimaryId() === i.id && n.push(r.id);
    }
    if (((o = r), (r = e.getParent(r.id)), r && e.isGroundNode(r))) break;
  }
  return (n.reverse(), n);
}
function n0(e, t) {
  let n = t;
  for (let o of t.ancestors()) {
    if (Be(o)) return { repeater: o, inRepeatedChild: tn(e, n, o) };
    n = o;
  }
}
function o0(e) {
  for (let t of e.ancestors()) if (Be(t)) return t;
}
function Yc(e, t) {
  return e.getNodeWithTrait(t.parentid, Be) ?? void 0;
}
function r0(e, t) {
  return e.getNodeWithTrait(t.parentid, li) ?? void 0;
}
function Nb(e, t) {
  if (!t) return null;
  let n = Xc(e, t);
  return n ? (t.originalid ? t.children?.find((r) => r.originalid === n.id) : n) : null;
}
function tn(e, t, n) {
  return ((n ??= Yc(e, t)), Nb(e, n)?.id === t.id);
}
function i0(e, t) {
  return tn(e, t) || Jt(t);
}
function a0(e, t, n) {
  return !!n && Be(e) && !tn(t, n, e);
}
function s0(e) {
  let t = e.children?.at(0);
  e.set(qc(t?.id));
}
function l0(e, t) {
  let n = new Map();
  for (let o of t) {
    let r = Rb(e, o);
    r && n.set(r.repeaterId, r);
  }
  return [...n.values()];
}
function Rb(e, t) {
  let n = Yc(e, t);
  if (!n || !tn(e, t, n)) return null;
  let o = t.getPrimaryId();
  return {
    repeaterId: n.getPrimaryId(),
    disableFallback: n.repeatedItemId !== void 0,
    repeatedItemId: o,
    repeatedItemChildIds: t.children?.map((r) => r.getPrimaryId()) ?? [],
  };
}
function u0(e, t, n) {
  for (let o of t) {
    let r = e.get(o.repeaterId);
    if (!Be(r)) continue;
    let i = Pb(e, r, o, n);
    (i === r.repeatedItemId && i === r.collectionRepeatedItemId) || r.set(qc(i));
  }
}
function Pb(e, t, n, o) {
  let r = new Set(),
    i = o?.get(n.repeatedItemId);
  (i && r.add(i), r.add(n.repeatedItemId));
  for (let a of n.repeatedItemChildIds) r.add(a);
  for (let a of r) {
    let s = kb(e, t, a);
    if (s) return s.id;
  }
  if (!n.disableFallback) return Jc(t)?.id;
}
function kb(e, t, n) {
  let o = e.get(n);
  for (; o;) {
    if (o.parentid === t.id) return Jt(o) ? null : o;
    if (!o.parentid) return null;
    o = e.get(o.parentid);
  }
  return null;
}
function $c(e, t, n) {
  let o = e.get(n);
  return !o || Jt(o) || o.parentid !== t.id ? null : o;
}
function Jc(e) {
  let t = e.children.at(0);
  return !t || Jt(t) ? null : t;
}
var vb = Rt("RichTextNode"),
  Zc = new Set();
function h0(e, t) {
  if (Tt(t)) return t;
  if (!Zc.has(e)) {
    Zc.add(e);
    let n = x(t) && t.constructor === Object ? "plain object" : typeof t;
    vb.reportError(`RichTextNode ${e} has invalid stored html (${n})`);
  }
  return "";
}
function Tt(e) {
  return typeof e == "string" || Zt(e);
}
function x0(e, t) {
  g(
    typeof e == "string",
    `${t}: Rich text value is stored as JSON here, but this path still expects HTML.`
  );
}
function Qc(e, t = (n, o) => n === o) {
  let n = bn;
  for (let o of e)
    if (xo(n)) n = o;
    else if (!t(o, n)) return sn;
  return n;
}
function C0(e, t) {
  let n = e[0];
  if (n === void 0) return bn;
  let o = n[t];
  for (let [r, i] of e.entries()) {
    if (r === 0) continue;
    let a = i[t];
    if (o !== a) return sn;
  }
  return o;
}
function V0(...e) {
  return e.find(Ai);
}
var tp = "borderColor";
function v0(e) {
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
    o = "borderPerSide",
    r = "borderTop",
    i = "borderRight",
    a = "borderBottom",
    s = "borderLeft";
  return !(
    !p(e[tp]) ||
    !p(e[n]) ||
    !ne(e[t]) ||
    !te(e[o]) ||
    !ne(e[r]) ||
    !ne(e[i]) ||
    !ne(e[s]) ||
    !ne(e[a])
  );
}
var Ib = { solid: !0, dashed: !0, dotted: !0, double: !0 };
function I0(e) {
  return p(e) && Object.hasOwn(Ib, e);
}
var ot = {
  borderColor: "black",
  borderStyle: "solid",
  borderPerSide: !1,
  borderBottom: 1,
  borderLeft: 1,
  borderRight: 1,
  borderTop: 1,
  borderWidth: 1,
};
function np(e) {
  if (!In(e)) return e;
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
function D0(e) {
  let t = { ...ot };
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
function w0(e) {
  let t = { ...ot };
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
function L0(e) {
  if (!e) return ot;
  let t = 0,
    n = e.borderTopWidth ?? e.borderWidth ?? t,
    o = e.borderRightWidth ?? e.borderWidth ?? t,
    r = e.borderBottomWidth ?? e.borderWidth ?? t,
    i = e.borderLeftWidth ?? e.borderWidth ?? t,
    a = e.borderWidth ?? ot.borderWidth,
    s = It(Qc([n, o, r, i, a])),
    l = e.borderStyle ?? ot.borderStyle,
    u = e.borderColor ?? ot.borderColor;
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
function ep(e) {
  return p(e) || P(e);
}
function vn(e) {
  return ne(e) || P(e);
}
function M0(e) {
  if (!x(e)) return !1;
  let t = "borderWidth",
    n = "borderStyle",
    o = "borderTopWidth",
    r = "borderRightWidth",
    i = "borderBottomWidth",
    a = "borderLeftWidth";
  return !(
    !ep(e[tp]) ||
    !ep(e[n]) ||
    !vn(e[o]) ||
    !vn(e[r]) ||
    !vn(e[a]) ||
    !vn(e[i]) ||
    !vn(e[t])
  );
}
var Db = [
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
  wb = new Set(Db);
function op(e) {
  return p(e) && wb.has(e);
}
var F0 = "--framer-custom-cursors";
var Lb = "customCursorSmartComponentId";
function O0(e) {
  return x(e) && Lb in e;
}
var Mb = {
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
  W0 = { ...Mb, cursor: void 0, customCursorType: void 0 },
  z0 = "default",
  Bb = "cursor";
function rp(e) {
  return Bb in e;
}
function H0(e) {
  if (rp(e))
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
var G0 = 20;
function Ab(e) {
  return p(e.customCursorSmartComponentId);
}
function j0(e, t) {
  return !t || !rp(t) || t.customCursorType !== "component" || !Ab(t)
    ? !1
    : Bt(e.get(t.customCursorSmartComponentId));
}
var Eb = "single",
  Fb = "fused";
function q0(e) {
  return { single: e, fused: [e, e, e, e] };
}
function Dn(e) {
  if (!x(e) || !S(e[Eb])) return !1;
  let t = e[Fb];
  return B(t) && t.length === 4 && t.every(S);
}
function X0(e) {
  return De(e) && e.type === "fusednumber" && Dn(e.value);
}
var Ob = "isFused";
function ip(e) {
  return x(e) && te(e[Ob]);
}
var Wb = "id";
function zb(e) {
  return Wb in e;
}
var Hb = "value";
function Gb(e) {
  return x(e) && zb(e) && Hb in e;
}
function yO(e) {
  return e.type === "array" && sp(e.value);
}
function hO(e) {
  return e.type === "object" && (x(e.value) || Ve(e.value));
}
function ap(e) {
  return e.type !== "fusednumber" || !ip(e) ? !1 : Dn(e.value);
}
function nn(e) {
  return X(e) && e.endsWith("px") && S(Number.parseFloat(e));
}
function jb(e) {
  if (!X(e)) return !1;
  let [t, n] = Yt(e);
  return !Number.isNaN(t) && n === "%";
}
function xO(e) {
  return x(e) && e.type === "image";
}
var _b = { string: !0, richtext: !0, image: !0, link: !0 };
function gO(e) {
  return e ? e.type in _b : !1;
}
function dr(e) {
  return x(e) && S(e.latitude) && S(e.longitude);
}
function bO(e) {
  return !(
    !x(e) ||
    !dr(e.coordinate) ||
    (e.title !== void 0 && !X(e.title)) ||
    (e.address !== void 0 && !X(e.address))
  );
}
function TO(e) {
  return ye(e) || sp(e);
}
function sp(e) {
  return B(e) && e.every(Gb);
}
function CO(e) {
  return E(e) || te(e);
}
function VO(e) {
  return E(e) || X(e);
}
function SO(e) {
  return E(e) || X(e) || P(e);
}
function NO(e) {
  return X(e) || L(e);
}
function RO(e) {
  return E(e) || X(e) || te(e) || S(e) || P(e) || Ve(e);
}
function PO(e) {
  return E(e) || B(e);
}
function kO(e) {
  return B(e) && e.every(zo);
}
function vO(e) {
  return E(e) || X(e) || P(e);
}
function IO(e) {
  return L(e) || wc(e);
}
function DO(e) {
  return L(e) || typeof e == "boolean" || (typeof e == "number" && Number.isFinite(e));
}
function wO(e) {
  return E(e) || S(e);
}
function LO(e) {
  return x(e);
}
function MO(e) {
  return E(e) || Tt(e);
}
function BO(e) {
  return E(e) || X(e);
}
function AO(e) {
  return E(e) || X(e) || P(e);
}
function EO(e) {
  return Qt(e) || P(e);
}
function FO(e) {
  return x(e) || P(e);
}
function OO(e) {
  return x(e) || P(e);
}
function WO(e) {
  return L(e) || In(e);
}
function zO(e) {
  return L(e) || op(e);
}
function HO(e) {
  if (E(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? nn(t[0]) : t.length === 2 && t.every(nn);
}
function GO(e) {
  if (E(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? nn(t[0]) : t.length === 4 && t.every(nn);
}
function jO(e) {
  if (E(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? nn(t[0]) || jb(t[0]) : t.length === 4 && t.every(nn);
}
function _O(e) {
  return L(e) || X(e) || P(e);
}
function KO(e) {
  return E(e) || (B(e) && e.every(X)) || P(e);
}
function UO(e) {
  return (X(e) && Pe(e)) || L(e) || P(e);
}
function $O(e) {
  return L(e) || X(e) || P(e);
}
function qO(e) {
  return B(e);
}
function XO(e) {
  return dr(e) || L(e) || P(e);
}
function nW(e, t) {
  return e === t ? !0 : e.variant !== t.variant ? !1 : cr(e.variant, e.childNodes, t.childNodes);
}
function cr(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!pp(e, t[o], n[o])) return !1;
  return !0;
}
var H = (e, t, n) => Object.is(t, n),
  wn = (e, t, n) => ce(t, n),
  lp = (e, t, n) => Ba(t, n),
  up = { type: H, tag: H, textDirection: H, childNodes: nT },
  Kb = { ...up, blockStyles: wn, backgroundMask: wn, textStylePreset: H },
  dp = { type: H, textDirection: H },
  Ub = { ...dp, childNodes: fp },
  cp = { type: H, textDirection: H, listStyleType: H, start: H },
  $b = { ...cp, childNodes: fp },
  qb = { type: H, childNodes: cr },
  Xb = { type: H, mediaType: H, src: H, alt: H, pixelWidth: H, pixelHeight: H, link: lp },
  Yb = { type: H, identifier: H, embedId: H, props: wn, width: H, alignment: H },
  Jb = { type: H, childNodes: Qb };
function oW(e, t) {
  return e.id !== void 0 && e.id === t.id && e.variant === t.variant;
}
function rW(e, t, n) {
  return t === n || pp(e, t, n);
}
function pp(e, t, n) {
  if (t.type !== n.type) return !1;
  switch (t.type) {
    case "textBlock":
      return (g(n.type === "textBlock"), gt(e, "styles") ? Ne(e, t, n, Kb) : Ne(e, t, n, up));
    case "bulletedList":
      return (g(n.type === "bulletedList"), Ne(e, t, n, Ub));
    case "numberedList":
      return (g(n.type === "numberedList"), Ne(e, t, n, $b));
    case "blockquote":
      return (
        g(n.type === "blockquote"),
        g(gt(e, "blockquotes"), "Document variant does not support blockquotes"),
        Ne(e, t, n, qb)
      );
    case "media":
      return (
        g(n.type === "media"),
        g(gt(e, "media"), "Document variant does not support media block"),
        Ne(e, t, n, Xb)
      );
    case "module":
      return (
        g(n.type === "module"),
        g(gt(e, "embeds"), "Document variant does not support embeds"),
        Ne(e, t, n, Yb)
      );
    case "table":
      return (
        g(n.type === "table"),
        g(gt(e, "tables"), "Document variant does not support tables"),
        Ne(e, t, n, Jb)
      );
    default:
      z(t);
  }
}
function iW(e, t, n) {
  if (t.type !== n.type) return !1;
  switch (t.type) {
    case "blockquote":
    case "table":
    case "tableRow":
      return !0;
    case "bulletedList":
      return (g(n.type === "bulletedList"), Ne(e, t, n, dp));
    case "numberedList":
      return (g(n.type === "numberedList"), Ne(e, t, n, cp));
    default:
      z(t);
  }
}
function Zb(e, t, n) {
  return t === n || cr(e, t.childNodes, n.childNodes);
}
function fp(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!Zb(e, t[o], n[o])) return !1;
  return !0;
}
function Qb(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!eT(e, t[o].childNodes, n[o].childNodes)) return !1;
  return !0;
}
function eT(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!tT(e, t[o], n[o])) return !1;
  return !0;
}
function tT(e, t, n) {
  return t === n
    ? !0
    : t.cellType !== n.cellType || t.rowSpan !== n.rowSpan || t.columnSpan !== n.columnSpan
      ? !1
      : cr(e, t.childNodes, n.childNodes);
}
function nT(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!rT(e, t[o], n[o])) return !1;
  return !0;
}
var mp = { type: H, text: H, bold: H, italic: H, inlineCode: H, link: lp },
  oT = {
    ...mp,
    inlineStyles: wn,
    backgroundStyles: wn,
    inlineCodeStylePreset: H,
    linkStylePreset: H,
  };
function rT(e, t, n) {
  return t.type !== n.type
    ? !1
    : t.type === "lineBreak"
      ? !0
      : n.type !== "text"
        ? !1
        : gt(e, "styles")
          ? Ne(e, t, n, oT)
          : Ne(e, t, n, mp);
}
function Ba(e, t) {
  return e === t
    ? !0
    : e === void 0 ||
        t === void 0 ||
        !wt(e.openInNewTab, t.openInNewTab) ||
        !wt(e.smoothScroll, t.smoothScroll) ||
        !wt(e.clickTrackingId, t.clickTrackingId) ||
        !wt(e.preserveParams, t.preserveParams) ||
        !iT(e.relValues, t.relValues)
      ? !1
      : ce(e.link, t.link);
}
function iT(e, t) {
  if (e === t) return !0;
  if (L(e) || L(t)) return wt(e, t);
  let n = e ?? [],
    o = t ?? [];
  if (n.length !== o.length) return !1;
  for (let r = 0; r < n.length; r++) if (n[r] !== o[r]) return !1;
  return !0;
}
function Ne(e, t, n, o) {
  for (let r in o)
    if (Object.hasOwn(o, r)) {
      let i = o[r];
      if (!i(e, t[r], n[r])) return !1;
    }
  return !0;
}
function yp(e, t) {
  return t in e ? Reflect.get(e, t) : void 0;
}
function Aa(e, t, n) {
  return yp(e, n) === yp(t, n);
}
function yW(e, t = e.variant) {
  try {
    return Ln(e);
  } catch (n) {
    return (Ts(n), { id: ge(), type: "richText", variant: t, childNodes: [] });
  }
}
function Ln(e) {
  return {
    id: e.id ?? ge(),
    type: "richText",
    variant: e.variant,
    childNodes: pr(e.variant, e.childNodes),
  };
}
function pr(e, t) {
  return t.map((n) => aT(e, n));
}
function aT(e, t) {
  switch (t.type) {
    case "textBlock":
      return sT(e, t);
    case "bulletedList":
      return lT(e, t);
    case "numberedList":
      return uT(e, t);
    case "blockquote": {
      let n = dT(e, t);
      return (g(Se(n, e), "normalizeRichTextDocument: unexpected node: blockquote"), n);
    }
    case "table": {
      let n = cT(e, t);
      return (g(Se(n, e), "normalizeRichTextDocument: unexpected node: table"), n);
    }
    case "media":
    case "module":
      return t;
  }
}
function sT(e, t) {
  return { ...t, childNodes: hT(e, t.childNodes) };
}
function lT(e, t) {
  let n = t.childNodes.map((o) => hp(e, o));
  return { ...t, childNodes: n.length > 0 ? n : [xp()] };
}
function uT(e, t) {
  let n = t.childNodes.map((o) => hp(e, o));
  return { ...t, childNodes: n.length > 0 ? n : [xp()] };
}
function dT(e, t) {
  let n = pr(e, t.childNodes);
  return { ...t, childNodes: n.length > 0 ? n : [Mn()] };
}
function cT(e, t) {
  if (t.childNodes.length === 0) return { ...t, childNodes: [VT()] };
  if (t.childNodes.every((o) => o.childNodes.length === 0))
    return { ...t, childNodes: t.childNodes.map((o) => ({ ...o, childNodes: [Ea()] })) };
  let n = t.childNodes.map((o) => mT(e, o));
  return { ...t, childNodes: pT(e, n) };
}
function pT(e, t) {
  let { width: n, height: o, slots: r } = fT(t);
  for (
    g(n > 0, "richTextDocumentNormalization: table has no cells"),
      g(o > 0, "richTextDocumentNormalization: table has no rows");
    t.length < o;
  )
    t.push(ST());
  for (let i = 0; i < o; i++) {
    let a = r[i],
      s = t[i];
    g(a && s, "richTextDocumentNormalization: row length mismatch");
    let l = 0;
    for (let u = 0; u < a.length; u++) {
      let c = s.childNodes[l],
        m = a[u];
      if (!m?.length) (s.childNodes.splice(l, 0, Ea()), l++);
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
function fT(e) {
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
      g(r <= o, "richTextDocumentNormalization: table forming algorithm height error"));
    let T = 0;
    if ((l(), f.childNodes.length === 0)) {
      r++;
      return;
    }
    for (let V = 0; V < f.childNodes.length; V++) {
      let R = f.childNodes[V];
      for (; T < n && m(T, r);) T++;
      (T === n && n++,
        g(T <= n, "richTextDocumentNormalization: table forming algorithm width error"));
      let y = Math.min(R.columnSpan || 1, 1e3),
        C = Math.min(R.rowSpan ?? 1, 65534),
        W = !1;
      (C === 0 && ((W = !0), (C = 1)), n < T + y && (n = T + y), o < r + C && (o = r + C));
      let j = { cell: R, cellX: T, cellY: r, width: y, height: C };
      (u(j), W && i.push({ cell: j, cellX: T, width: y }), (T += y));
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
    for (let R = T; R < V; R++) (t[h][R] ??= []).push(f);
  }
  function m(f, h) {
    return !!t[h]?.[f]?.length;
  }
}
function hp(e, t) {
  let n = pr(e, t.childNodes);
  return { ...t, childNodes: n.length > 0 ? n : [Mn("inherit")] };
}
function mT(e, t) {
  return { ...t, childNodes: t.childNodes.map((n) => yT(e, n)) };
}
function yT(e, t) {
  let n = pr(e, t.childNodes),
    o = { ...t, childNodes: n.length > 0 ? n : [Mn()] };
  return (
    o.columnSpan !== void 0 && o.columnSpan < 1 && (o.columnSpan = 1),
    o.rowSpan !== void 0 && o.rowSpan < 0 && (o.rowSpan = 0),
    o
  );
}
function hT(e, t) {
  let o = gT(t).filter((i) => i.type === "lineBreak" || i.text.length > 0),
    r = TT(o);
  if (r.some((i) => i.type === "text")) return r;
  for (let i of t)
    if (i.type === "text" && i.text === "" && xT(i)) {
      r.push(i);
      break;
    }
  return r;
}
function xT(e) {
  let t = e;
  return !!(t.inlineStyles || t.linkStylePreset || t.inlineCodeStylePreset);
}
function gT(e) {
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
    bT(n, t);
  }
  return t;
}
function bT(e, t) {
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
function TT(e) {
  let t = [];
  for (let n of e) {
    let o = t[t.length - 1];
    if (o?.type === "text" && n.type === "text" && CT(o, n)) {
      t[t.length - 1] = { ...o, text: o.text + n.text };
      continue;
    }
    t.push(n.type === "text" ? { ...n } : n);
  }
  return t;
}
function CT(e, t) {
  if (e.bold !== t.bold || e.italic !== t.italic || e.inlineCode !== t.inlineCode) return !1;
  let n = "inlineStyles" in e ? e.inlineStyles : void 0,
    o = "inlineStyles" in t ? t.inlineStyles : void 0;
  if (!ce(n, o)) return !1;
  let r = "backgroundStyles" in e ? e.backgroundStyles : void 0,
    i = "backgroundStyles" in t ? t.backgroundStyles : void 0;
  return !ce(r, i) || !Aa(e, t, "inlineCodeStylePreset") || !Aa(e, t, "linkStylePreset")
    ? !1
    : Ba(e.link, t.link);
}
function Mn(e = "auto") {
  return { id: ge(), type: "textBlock", tag: "p", textDirection: e, childNodes: [] };
}
function xp() {
  return { id: ge(), type: "listItem", childNodes: [Mn("inherit")] };
}
function VT() {
  return { id: ge(), type: "tableRow", childNodes: [Ea()] };
}
function ST() {
  return { id: ge(), type: "tableRow", childNodes: [] };
}
function Ea() {
  return { id: ge(), type: "tableCell", cellType: "cell", childNodes: [Mn()] };
}
function TW(e, t) {
  t.document?.(e);
  for (let n of e.childNodes) fr(n, t);
}
function CW(e, t) {
  if (t.document?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let o = mr(n, t);
    if (o) return o;
  }
}
function Cp(e, t, n = {}) {
  let o = be(e, t.document, (r) => {
    let i = Xe(r.childNodes, (a) => yr(e.variant, a, t));
    return i === r.childNodes ? r : { ...r, childNodes: i };
  });
  return o === e ? e : n.normalize === !1 ? o : Ln(o);
}
function fr(e, t) {
  switch (e.type) {
    case "textBlock":
      t.textBlock?.(e);
      for (let n of e.childNodes) PT(n, t);
      return;
    case "bulletedList":
      t.bulletedList?.(e);
      for (let n of e.childNodes) gp(n, t);
      return;
    case "numberedList":
      t.numberedList?.(e);
      for (let n of e.childNodes) gp(n, t);
      return;
    case "blockquote":
      t.blockquote?.(e);
      for (let n of e.childNodes) fr(n, t);
      return;
    case "media":
      t.media?.(e);
      return;
    case "module":
      t.module?.(e);
      return;
    case "table":
      t.table?.(e);
      for (let n of e.childNodes) NT(n, t);
      return;
  }
}
function gp(e, t) {
  t.listItem?.(e);
  for (let n of e.childNodes) fr(n, t);
}
function NT(e, t) {
  t.tableRow?.(e);
  for (let n of e.childNodes) RT(n, t);
}
function RT(e, t) {
  t.tableCell?.(e);
  for (let n of e.childNodes) fr(n, t);
}
function PT(e, t) {
  switch (e.type) {
    case "text":
      t.text?.(e);
      return;
    case "lineBreak":
      t.lineBreak?.(e);
      return;
  }
}
function mr(e, t) {
  switch (e.type) {
    case "textBlock":
      if (t.textBlock?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let o = IT(n, t);
        if (o) return o;
      }
      return;
    case "bulletedList":
      if (t.bulletedList?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let o = bp(n, t);
        if (o) return o;
      }
      return;
    case "numberedList":
      if (t.numberedList?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let o = bp(n, t);
        if (o) return o;
      }
      return;
    case "blockquote":
      if (t.blockquote?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let o = mr(n, t);
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
        let o = kT(n, t);
        if (o) return o;
      }
      return;
  }
}
function bp(e, t) {
  if (t.listItem?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let o = mr(n, t);
    if (o) return o;
  }
}
function kT(e, t) {
  if (t.tableRow?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let o = vT(n, t);
    if (o) return o;
  }
}
function vT(e, t) {
  if (t.tableCell?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let o = mr(n, t);
    if (o) return o;
  }
}
function IT(e, t) {
  switch (e.type) {
    case "text":
      return t.text?.(e) === !0 ? e : void 0;
    case "lineBreak":
      return t.lineBreak?.(e) === !0 ? e : void 0;
  }
}
function yr(e, t, n) {
  switch (t.type) {
    case "textBlock": {
      let o = be(t, n.textBlock, (r) => {
        let i = Xe(r.childNodes, (a) => LT(e, a, n));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        g(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "bulletedList": {
      let o = be(t, n.bulletedList, (r) => {
        let i = Xe(r.childNodes, (a) => Tp(e, a, n));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        g(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "numberedList": {
      let o = be(t, n.numberedList, (r) => {
        let i = Xe(r.childNodes, (a) => Tp(e, a, n));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        g(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "blockquote": {
      let o = be(t, n.blockquote, (r) => {
        let i = Xe(r.childNodes, (a) => yr(e, a, n));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        g(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "media": {
      let o = be(t, n.media, (r) => r);
      return (
        g(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "module": {
      let o = be(t, n.module, (r) => r);
      return (
        g(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
    case "table": {
      let o = be(t, n.table, (r) => {
        let i = Xe(r.childNodes, (a) => DT(e, a, n));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        g(
          Se(o, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        o
      );
    }
  }
}
function Tp(e, t, n) {
  return be(t, n.listItem, (o) => {
    let r = Xe(o.childNodes, (i) => yr(e, i, n));
    return r === o.childNodes ? o : { ...o, childNodes: r };
  });
}
function DT(e, t, n) {
  return be(t, n.tableRow, (o) => {
    let r = Xe(o.childNodes, (i) => wT(e, i, n));
    return r === o.childNodes ? o : { ...o, childNodes: r };
  });
}
function wT(e, t, n) {
  return be(t, n.tableCell, (o) => {
    let r = Xe(o.childNodes, (i) => yr(e, i, n));
    return r === o.childNodes ? o : { ...o, childNodes: r };
  });
}
function LT(e, t, n) {
  switch (t.type) {
    case "text":
      return be(t, n.text, (o) => o);
    case "lineBreak":
      return be(t, n.lineBreak, (o) => o);
  }
}
function be(e, t, n) {
  let o = MT(e, t),
    r = n(o);
  return BT(r, t);
}
function MT(e, t) {
  return !t || typeof t == "function" ? e : (t.enter?.(e) ?? e);
}
function BT(e, t) {
  return t ? (typeof t == "function" ? t(e) : (t.exit?.(e) ?? e)) : e;
}
function Xe(e, t) {
  let n;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (!r) continue;
    let i = t(r);
    i !== r && ((n ??= Array.from(e)), (n[o] = i));
  }
  return n ?? e;
}
var Vp = Symbol.for("framer.sharedEnum"),
  RW = Symbol.for("framer.sharedTypeIdentity");
function hr(e) {
  return q(e) && Vp in e;
}
function PW(e) {
  let { options: t, localizedOptionTitles: n } = e,
    o = t.map((i, a) => e.optionTitles?.[a] ?? i),
    r = (i) => {
      if (typeof i != "string") return;
      let a = o.indexOf(i);
      return a === -1 ? void 0 : t[a];
    };
  return {
    [Vp]: !0,
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
function AT(e) {
  return q(e) || et(e);
}
var Sp = "optional";
function ET(e) {
  return !!e && Sp in e && e[Sp] === !0;
}
function FT(e) {
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
        if (!("definition" in e) || !hr(e.definition)) return;
        let { definition: t } = e;
        if (t.kind === "enum")
          return ee(e.defaultValue) && t.options.includes(e.defaultValue) ? e.defaultValue : void 0;
        t.kind;
        return;
      }
      case "boolean":
        return vs(e.defaultValue) ? e.defaultValue : void 0;
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
        return (q(e.controls) && Np(t, e.controls), t);
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
function Np(e, t) {
  for (let n in t) {
    let o = t[n];
    if (!o) continue;
    let r = e[n];
    if (!Pt(r) || ET(o)) continue;
    let i = FT(o);
    Pt(i) || (e[n] = i);
  }
}
function OT(e) {
  if (q(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Rp(e, t) {
  if (!AT(e)) return;
  let n = OT(e);
  Np(n, t);
}
var Pp = "outputControls";
function WT(e) {
  return (q(e) || et(e)) && Pp in e;
}
function kp(e, t) {
  Object.assign(e, { [Pp]: t });
}
function MW(e) {
  if (WT(e)) return e.outputControls;
}
function vp(e, t, n) {
  (Object.assign(e, { propertyControls: t }), zT(t), Rp(e, t), n !== void 0 && kp(e, n));
}
function zT(e) {
  for (let t of Object.values(e))
    t?.type !== "sharedtype" ||
      !("definition" in t) ||
      !hr(t.definition) ||
      !Object.isExtensible(t) ||
      Object.defineProperty(t, "options", { value: t.definition.options, configurable: !0 });
}
function WW(e) {
  return e.propertyControls;
}
function xr(e, t = 2) {
  let n = 0;
  if (typeof e == "number") n = e;
  else if (typeof e == "string") n = parseFloat(e);
  else return;
  if (Number.isInteger(n)) return n;
  let o = 1;
  for (; t-- > 0;) o *= 10;
  return (n < 0 && (o *= -1), Math.round(n * o) / o);
}
function Fa(e) {
  let { paddingPerSide: t, paddingTop: n, paddingBottom: o, paddingLeft: r, paddingRight: i } = e;
  return t !== !1 && (n !== void 0 || o !== void 0 || r !== void 0 || i !== void 0);
}
function Ip(e) {
  let { padding: t = 0, paddingTop: n, paddingBottom: o, paddingLeft: r, paddingRight: i } = e;
  return Fa(e)
    ? {
        top: n !== void 0 ? n : t,
        bottom: o !== void 0 ? o : t,
        left: r !== void 0 ? r : t,
        right: i !== void 0 ? i : t,
      }
    : { top: t, bottom: t, left: t, right: t };
}
function Dp({ top: e, left: t, bottom: n, right: o }) {
  return e === o && o === n && n === t ? `${e}px` : `${e}px ${o}px ${n}px ${t}px`;
}
function _W(e) {
  if (e === "none") return null;
  let t = e
      .trim()
      .split(/\s+/u)
      .map((a) => xr(a)),
    [n, o, r, i] = t;
  switch (t.length) {
    case 1:
      return k(n) ? { top: n, right: n, bottom: n, left: n } : null;
    case 2:
      return !k(n) || !k(o) ? null : { top: n, right: o, bottom: n, left: o };
    case 3:
      return !k(n) || !k(o) || !k(r) ? null : { top: n, right: o, bottom: r, left: o };
    case 4:
      return !k(n) || !k(o) || !k(r) || !k(i) ? null : { top: n, right: o, bottom: r, left: i };
    default:
      return null;
  }
}
var br = M(oe(), 1);
var Bp = M(re(), 1),
  oz = (() => {
    let e = br.default.forwardRef(function (n, o) {
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
          __contentWrapperStyle: R,
          ...y
        } = n,
        C = Tr(i),
        W = Lp(a),
        j = Lp(s),
        v = Fa(y) || y.padding ? Dp(Ip(y)) : void 0,
        Z = v === void 0 ? {} : { padding: v },
        {
          width: de,
          height: ae,
          minWidth: Je,
          maxWidth: rt,
          minHeight: fs,
          maxHeight: Qr,
          ...ei
        } = R ?? {},
        Ze = {
          ...m,
          display: "flex",
          flexDirection: C,
          flexWrap: u ? "wrap" : "nowrap",
          justifyContent: W,
          alignItems: j,
          alignContent: j,
          ...Z,
          ...ei,
        };
      (Do.applyWillChange({ willChangeTransform: h }, Ze, !0),
        T &&
          !_t(Wo(y)) &&
          ((y.width = "100%"), (y.height = "100%"), (y._constraints = { enabled: !0 })));
      let um = Oo(n),
        { children: dm, props: cm } = Eo(y, c),
        ms = y.widthType ?? (y.width === "auto" ? 2 : 0),
        ys = y.heightType ?? (y.height === "auto" ? 2 : 0),
        pm = HT(dm, i, ms, ys),
        fm = Po(pm, V ?? 1),
        hs = { "data-framer-component-type": "Stack" },
        xs = y.__fromCanvasComponent;
      if ((xs && (hs["data-framer-generated"] = !0), GT(l, W, u))) {
        let gs = Mp(W);
        ((gs || i !== "horizontal") && (Ze.columnGap = `${l}px`),
          (gs || i !== "vertical") && (Ze.rowGap = `${l}px`));
      }
      return (
        Ze.width === void 0 && ms === 2 && (Ze.width = "min-content"),
        Ze.height === void 0 && ys === 2 && (Ze.height = "min-content"),
        (0, Bp.jsx)(Qd, {
          as: r,
          background: xs ? void 0 : "none",
          ...cm,
          layoutId: um,
          ref: o,
          ...hs,
          style: Ze,
          className: f,
          layoutScroll: !0,
          children: fm,
        })
      );
    });
    return (
      (e.defaultProps = { distribution: "start" }),
      (e.displayName = "Stack"),
      vp(e, {
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
function wp(e) {
  return typeof e == "string" && e.endsWith("fr");
}
function gr(e) {
  let t = parseFloat(e);
  return k(t) ? t : 0;
}
function HT(e, t, n, o) {
  return br.default.Children.map(e, (r) => {
    if (!Xn(r) || !qn(r)) return;
    let i = t === "vertical",
      a = {},
      s = !1,
      { style: l, size: u } = r.props,
      { width: c, height: m } = r.props;
    u !== void 0 && (c === void 0 && (c = u), m === void 0 && (m = u));
    let f = c,
      h = m;
    if (
      (wp(c) &&
        ((s = !0),
        (s = !0),
        i
          ? n === 2
            ? ((a.alignSelf = "stretch"), (f = "auto"))
            : (f = `${gr(c) * 100}%`)
          : ((f = 1), (a.flexGrow = gr(c)), (a.flexBasis = 0)),
        (a.width = f)),
      wp(m) &&
        ((s = !0),
        i
          ? ((h = 1), (a.flexGrow = gr(m)), (a.flexBasis = 0))
          : o === 2
            ? ((a.alignSelf = "stretch"), (h = "auto"))
            : (h = `${gr(m) * 100}%`),
        (a.height = h)),
      !s)
    )
      return r;
    let T = { ...l, ...a };
    return br.default.cloneElement(r, { width: f, height: h, style: T });
  });
}
function Mp(e) {
  return e ? !["space-between", "space-around", "space-evenly", "stretch"].includes(e) : !1;
}
function GT(e, t, n) {
  return !(!e || (!n && !Mp(t)));
}
function Tr(e) {
  switch (e) {
    case "vertical":
      return "column";
    case "horizontal":
      return "row";
    default:
      return e;
  }
}
function Lp(e) {
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
var Cr = ["auto", "pixelated"],
  uz = { imageRendering: void 0 },
  dz = { imageRendering: "auto" },
  jT = "imageRendering";
function cz(e) {
  return He(e) && !E(e.htmlContent) ? !1 : jT in e;
}
var _T = new Set(Cr);
function KT(e) {
  return p(e) && _T.has(e);
}
function pz(e) {
  return KT(e) ? e : "auto";
}
function Ap(e) {
  switch (e) {
    case "auto":
      return "Smooth";
    case "pixelated":
      return "Sharp";
    default:
      return "Unknown";
  }
}
var Vr = ["clip", "visible", "hidden", "auto"],
  UT = ["clip", "hidden"],
  $T = ["visible", "auto"],
  gz = { overflow: void 0, overflowX: void 0, overflowY: void 0 },
  Ep = "overflow",
  bz = [Ep, "overflowX", "overflowY"];
function Fp(e) {
  return e ? Ep in e : !1;
}
var qT = new Set(Vr);
function Tz(e) {
  return p(e) ? qT.has(e) : !1;
}
var XT = new Set(UT);
function Cz(e) {
  return p(e) && XT.has(e);
}
var YT = new Set($T);
function Vz(e) {
  return p(e) && YT.has(e);
}
function Op(e) {
  return e === "auto" ? "Scroll" : Kn(e);
}
function Sz(e) {
  if (!Fp(e)) return !1;
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
function Nz(e) {
  return Fp(e) ? e.overflow === "auto" || e.overflowX === "auto" || e.overflowY === "auto" : !1;
}
function Rz(e, t) {
  return P(t) && !P(e.overflowX) && !E(e.overflowX) && e.overflowX === e.overflowY;
}
var Wp = { visible: "clip", clip: "visible", auto: "hidden", hidden: "auto" };
function Pz(e, t, n, o = {}) {
  let r = e.resolveValue(t) || e.resolveValue(n);
  return r ? (o.preferSame ? r : Wp[r]) : "clip";
}
function kz(e, t) {
  return e === t || P(t) ? !0 : (P(e) && (e = "visible"), Wp[e] === t);
}
function zp(e) {
  let t = {};
  for (let n in e) {
    let o = e[n];
    if (De(o))
      if (o.type === "fusednumber")
        S(o.value) ? (t[n] = o.value) : ap(o) && (t[n] = o.value.single);
      else if (o.type === "object" && x(o.value)) {
        if (!x(o.value)) continue;
        t[n] = zp(o.value);
      } else
        o.type === "array" && B(o.value)
          ? (t[n] = o.value
              .filter(De)
              .map((r) => (r.type === "object" ? (x(r.value) ? zp(r.value) : void 0) : r.value)))
          : (t[n] = o.value);
  }
  return t;
}
function Hp(e) {
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
      return ot;
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
var JT = {
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
function Gp(e) {
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
function Gz(e) {
  return e.type !== "controlReference"
    ? Gp({ type: e.type })
    : e.expectedType === "segmentedenum"
      ? !1
      : Gp({ type: e.type, expectedType: e.expectedType, entityIdentifier: e.entityIdentifier });
}
function ZT(e) {
  return e === "WebPage" || e === "SmartComponent";
}
function QT(e, t) {
  return ZT(t) ? Object.hasOwn(JT, e) : !1;
}
function eC(e, t) {
  return QT(e.type, t) ? (e.type !== "controlReference" ? !0 : e.expectedType !== "file") : !1;
}
function Q(e, t) {
  return eC(e, t) && e.optional === !0;
}
function on(e) {
  return !zs(e) && e.type !== "divider";
}
function jz(e) {
  return e.type === "string";
}
function _z(e) {
  return e.type === "richtext";
}
function Kz(e) {
  return e.type === "slug";
}
function Uz(e) {
  return e.type === "date";
}
function tC(e) {
  return e.type === "collectionreference";
}
function nC(e) {
  return e.type === "multicollectionreference";
}
function $z(e) {
  return tC(e) || nC(e);
}
function oC(e) {
  return on(e) && mn(e.type);
}
var qz = oC;
function Xz(e) {
  return e?.type === "divider";
}
function rC(e) {
  return e.type === "array";
}
function Yz(e) {
  return e.type === "object";
}
function iC(e) {
  return e.type === "image";
}
function aC(e) {
  return rC(e) && e.itemVariables.length === 1 && e.itemVariables.every(iC);
}
function Oa(e) {
  return aC(e) && e.displayGalleryAsArray !== !0;
}
var sC = { string: !0, richtext: !0, enum: !0 };
function lC(e) {
  return on(e) ? e.type in sC : !1;
}
function _p(e) {
  return lC(e) && e.preventLocalization === !0;
}
function Jz(e) {
  return e.fallbackValue === "associatedVariable" && !!e.associatedStringVariable;
}
var uC = {
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
function Kp(e) {
  return Object.hasOwn(uC, e.type);
}
var dC = {
  boolean: !0,
  date: !0,
  string: !0,
  number: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  controlReference: !0,
};
function t1(e) {
  return on(e) ? Object.hasOwn(dC, e.type) : !1;
}
var Up = Symbol("localizedOptionTitles");
function Bn(e, t) {
  e[Up] = t;
}
function $p(e) {
  return e[Up] ?? null;
}
function Wa(e, t, n) {
  if (e === void 0) return t.push("u");
  if (e === null) return t.push("n");
  let o = typeof e;
  if (o === "string") return t.push(JSON.stringify(e));
  if (o !== "object") return t.push(String(e));
  if (Array.isArray(e)) {
    for (let i = 0; i < e.length; i++) (Wa(e[i], t, n), t.push(","));
    return;
  }
  let r = Uc(e) ? e.keys() : Object.keys(e);
  r.sort();
  for (let i of r) {
    let a = e[i];
    (n && ((a = n(i, a, e)), a === void 0)) || (t.push(i), t.push(":"), Wa(a, t, n), t.push(","));
  }
}
function qp(e, t) {
  let n = [];
  return (Wa(e, n, t), n.join(""));
}
var cC = 1;
function l1(e) {
  return Fs("sharedEnum", e, "default").value;
}
function Xp(e) {
  let t = ke(e);
  if (!(!Dt(t) || t.type !== "sharedEnum")) return t.localIdName;
}
function pC(e) {
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
function u1(e) {
  return qp({ version: cC, definition: pC(e) });
}
var za = Symbol("fromOtherProject");
function x1(e) {
  let t = { ...e.properties },
    n = !1;
  for (let [o, r] of Object.entries(t))
    !x(r) || r.type !== "sharedtype" || ((t[o] = { ...r, [za]: !0 }), (n = !0));
  return n ? { ...e, properties: t } : e;
}
function Ha(e) {
  return za in e && e[za] === !0;
}
function g1(e) {
  return e?.type === "sharedtype" && "kind" in e && e.kind === "enum";
}
function Zp(e, t) {
  let n = Xp(t);
  if (!n) return;
  let o = e.get(n);
  return pl(o) ? o : void 0;
}
var Yp = new WeakMap();
function fC(e, t) {
  if (t?.type === "enum") return t;
  if (t?.type !== "sharedtype") return;
  if (t.kind !== "enum") {
    t.kind;
    return;
  }
  if (Ha(t)) return;
  let n = Zp(e, t.moduleIdentifier);
  if (!n) return;
  if (n.mutable) return Jp(t, n);
  let o = Yp.get(n);
  o || ((o = new WeakMap()), Yp.set(n, o));
  let r = o.get(t);
  return (r || ((r = Jp(t, n)), o.set(t, r)), r);
}
function b1(e, t) {
  return t?.type !== "sharedtype" || !e ? t : (fC(e, t) ?? t);
}
function Jp(e, t) {
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
      Bn(
        o,
        t.cases.map((r) => r.nameLocalized)
      ),
    o
  );
}
function T1(e, t) {
  let { kind: n, moduleIdentifier: o, ...r } = t;
  n !== "enum" && void 0;
  let i = Zp(e, o);
  return {
    ...r,
    type: "enum",
    cases: i?.cases ?? [],
    ...(i?.preventLocalization && { preventLocalization: !0 }),
  };
}
function Qp(e, t) {
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
var mC = /,(?![^(]*\))/u,
  yC = /\s(?![^(]*\))/u,
  hC = /(?:#|0x)(?:[a-f\d]{3}|[a-f\d]{6})\b|(?:rgb|hsl)a?\([^)]*\)/u,
  ef = (e, t) => {
    let n = e.trim().toLowerCase().split(yC),
      o = n.includes("inset"),
      r = [],
      i = n.find((c) => hC.test(c)) ?? n[n.length - 1];
    for (let c of n) c !== "inset" && c !== i && r.push(xr(c));
    let [a, s, l, u] = r;
    return sr({
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
function v1(e, t) {
  let n = ef(e, 0);
  if (
    n.color === "transparent" ||
    n.color === "rgba(0, 0, 0, 0)" ||
    (n.x === 0 && n.y === 0 && n.spread === 0 && n.blur === 0)
  )
    return;
  let o = b(n.color);
  if (!(!o || o.a <= 0)) return { ...n, id: t };
}
function Ga(e) {
  return e
    .split(mC)
    .map(ef)
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
function I1(e) {
  let t = e.boxShadow;
  if (!(!t || t === "none")) return { boxShadows: Ga(t) };
}
function E1(e) {
  return en(e) || E(e) ? e : [];
}
function F1(e) {
  return p(e)
    ? Ga(e)
    : B(e) && e.every(cd.is)
      ? e.map((t, n) => sr({ ...t, id: `box-shadow-${n}` }))
      : [];
}
function tf(e) {
  let { id: t, ...n } = e;
  return n;
}
var xC = "alt";
function ja(e) {
  return x(e) && xC in e;
}
var nf = "altLocalized";
function z1(e) {
  return x(e) && nf in e && !!e[nf];
}
var gC = "positionX",
  bC = "positionY";
function of(e) {
  return x(e) ? gC in e || bC in e : !1;
}
function _a(e) {
  return of(e) ? p(e.positionX) && p(e.positionY) : !1;
}
var TC = {};
function j1(e) {
  return of(e) ? e : TC;
}
function rf(e) {
  return e.embedId !== void 0 ? e.embedId : /-\d+$/u.test(e.id) ? Pc(e.id) : e.id;
}
function $1(e) {
  let t = new Set();
  return Cp(
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
var rn = 16,
  Y1 = { rootFontSize: void 0 },
  Ka = "rootFontSize";
function J1(e) {
  return Ka in e;
}
function af(e) {
  return Ka in e && S(e[Ka]);
}
var sf = "--framer-root-font-size";
function dH(e, t, n, o) {
  if (o) {
    let r = CC(t, o, n);
    if (S(r)) return r;
  }
  if (At(e)) return e.getPrimaryVariant().rootFontSize;
  if (ze(e)) {
    let r = e.layoutTemplateIdentifier;
    return r ? lf(r, n) : e.getPrimaryVariant().rootFontSize;
  }
  return SC(t.root, n);
}
function CC(e, t, n) {
  let o = ga(e, t);
  if (o) return Rc(o) ? VC(e, n, o) : af(o) ? o.rootFontSize : rn;
}
function VC(e, t, n) {
  let o = Nc(e, n);
  if (!o) return rn;
  let r = ke(o)?.localId;
  if (!r) return rn;
  let i = t
    .forType("layoutTemplate")
    .getByLocalId(r)
    .annotations(null, "default")?.framerBreakpoints;
  if (!i || !Vc(i)) return rn;
  g(mc(n), "Breakpoint node must have size properties");
  let a = er(i, n.width);
  return a && S(i[a]?.rootFontSize) ? i[a].rootFontSize : rn;
}
function SC(e, t) {
  if (e.layoutTemplateIdentifier) return lf(e.layoutTemplateIdentifier, t);
  if (!e.homePageNodeId) return;
  let n = t.forType("screen").getByStableName(e.homePageNodeId).annotations(null, "default");
  return uf(n);
}
function lf(e, t) {
  let n = ke(e),
    o = t.forType("layoutTemplate").getByLocalId(n.localId).annotations(null, n.exportSpecifier);
  return uf(o);
}
function uf(e) {
  if (!e) return;
  let t = e.framerRootFontSize;
  if (S(t)) return t;
}
var df = /var\(--variable-reference-(?<variableId>[^)-]*)(?:-(?<providerId>[^)]*))?/;
function yH(e) {
  let t = new RegExp(df, "g"),
    n = e.matchAll(t),
    o = [];
  for (let r of n) {
    if (!r.groups) continue;
    let { variableId: i, providerId: a } = r.groups,
      s = Ti(i, a);
    o.push(s);
  }
  return o;
}
function hH(e) {
  return p(e) && e.startsWith("--");
}
function xH(e) {
  let t = df.exec(e);
  if (t?.groups) {
    let { variableId: n, providerId: o } = t.groups;
    return Ti(n, o);
  }
}
function NC(e) {
  let t = e.providerId ? `-${e.providerId}` : "";
  return `--variable-reference-${e.id}${t}`;
}
function cf(e) {
  return `var(${NC(e)})`;
}
function gH(e) {
  return `calc(var(${sf}, 1rem) * ${e})`;
}
var RC = /calc\(var\(--framer-root-font-size,\s*1rem\)\s*\*\s*(?<remValue>\d+(?:\.\d+)?)\)/u;
function bH(e) {
  let t = RC.exec(e);
  if (t?.groups) {
    let { remValue: n } = t.groups,
      o = parseFloat(n);
    return S(o) ? [o, "rem"] : void 0;
  }
}
var PC = new Set(["img", "br"]);
function pf(e, t) {
  return J("ul", { dir: Nr(e.textDirection) }, ...e.childNodes.map(t));
}
function ff(e, t) {
  return J(
    "ol",
    {
      dir: Nr(e.textDirection),
      start: e.start !== 1 ? e.start : void 0,
      style: e.listStyleType !== "decimal" ? { "--list-style-type": e.listStyleType } : void 0,
    },
    ...e.childNodes.map(t)
  );
}
function mf(e, t) {
  return J("blockquote", {}, ...e.childNodes.map(t));
}
function yf(e, t) {
  return J(
    "figure",
    { class: "framer-table-wrapper" },
    J("table", {}, J("tbody", {}, ...e.childNodes.map((n) => kC(n, t))))
  );
}
function kC(e, t) {
  return J("tr", {}, ...e.childNodes.map((n) => vC(n, t)));
}
function vC(e, t) {
  return J(
    e.cellType === "header" ? "th" : "td",
    { colspan: e.columnSpan, rowspan: e.rowSpan },
    ...e.childNodes.map(t)
  );
}
function hf(e) {
  return e.type === "lineBreak" ? J("br", {}) : IC(e);
}
function IC(e) {
  let t = wC(e.text);
  return (
    e.bold && (t = J("strong", {}, t)),
    e.italic && (t = J("em", {}, t)),
    e.inlineCode && (t = J("code", {}, t)),
    e.link && (t = J("a", Sr(e.link), t)),
    t
  );
}
function Sr(e) {
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
    "data-framer-open-in-new-tab": o === !0 ? !0 : An(o),
    "data-framer-smooth-scroll": r === !0 ? !0 : An(r),
    "data-framer-click-tracking-id": typeof i == "string" ? i : An(i),
    rel: Array.isArray(a) && a.length > 0 ? a.join(" ") : void 0,
    "data-framer-rel": An(a),
    "data-framer-preserve-params": typeof s == "boolean" ? String(s) : An(s),
  };
}
function Nr(e) {
  return e === "inherit" ? "auto" : e;
}
function J(e, t, ...n) {
  let o = "";
  for (let r in t) {
    let i = t[r];
    if (!(i === void 0 || i === !1)) {
      if (typeof i == "object") {
        r === "style" && (o += ` style="${DC(i)}"`);
        continue;
      }
      if (i === !0) {
        o += ` ${r}=""`;
        continue;
      }
      o += ` ${r}="${xf(String(i))}"`;
    }
  }
  return PC.has(e) ? `<${e}${o}>` : `<${e}${o}>${n.join("")}</${e}>`;
}
function DC(e) {
  let t = "";
  for (let n in e) {
    let o = e[n];
    o !== void 0 && (t && (t += " "), (t += `${n}: ${xf(o)};`));
  }
  return t;
}
function wC(e) {
  return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function xf(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function An(e) {
  if (L(e)) return cf(e);
}
function LC(e) {
  return Ln(e).childNodes.map(Rr).join("");
}
function bf(e) {
  return typeof e == "string" ? e : LC(e);
}
function Rr(e) {
  switch (e.type) {
    case "textBlock":
      return MC(e);
    case "bulletedList":
      return pf(e, gf);
    case "numberedList":
      return ff(e, gf);
    case "blockquote":
      return mf(e, Rr);
    case "media":
      return BC(e);
    case "module":
      return AC(e);
    case "table":
      return yf(e, Rr);
    default:
      z(e);
  }
}
function MC(e) {
  return J(e.tag, { dir: Nr(e.textDirection) }, ...e.childNodes.map(hf));
}
function gf(e) {
  let t = e.childNodes[0],
    n = t?.type === "textBlock" ? t.tag : "p";
  return J("li", { "data-preset-tag": n }, ...e.childNodes.map(Rr));
}
function BC(e) {
  return e.mediaType === "video"
    ? J("video", { class: "framer-image", src: e.src, ...Sr(e.link) })
    : J("img", {
        alt: e.alt,
        "data-framer-width": e.pixelWidth,
        "data-framer-height": e.pixelHeight,
        ...Sr(e.link),
        src: e.src,
        class: "framer-image",
      });
}
function AC(e) {
  return J("framer-module", {
    "data-module-identifier": e.identifier,
    "data-module-embed-id": rf(e),
    "data-module-props": JSON.stringify(e.props),
    "data-module-width": e.width,
    "data-module-alignment": e.alignment,
  });
}
var Tf = Symbol("dataIdentifier");
function En(e, t) {
  e[Tf] = t;
}
function IH(e) {
  return e[Tf] ?? null;
}
var Cf = ["page", "step", "location", "date", "time", "true", "false"],
  wH = { ariaCurrent: void 0 },
  LH = { ariaCurrent: "page" },
  EC = "ariaCurrent";
function MH(e) {
  return EC in e;
}
var Vf = ["menu", "listbox", "tree", "grid", "dialog", "true", "false"],
  AH = { ariaHaspopup: void 0 },
  EH = { ariaHaspopup: "menu" },
  FC = "ariaHaspopup";
function FH(e) {
  return FC in e;
}
var Sf = ["off", "polite", "assertive"],
  WH = { ariaLive: void 0 },
  zH = { ariaLive: "polite" },
  OC = "ariaLive";
function HH(e) {
  return OC in e;
}
var Nf = [
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
  jH = { ariaRole: void 0 },
  _H = { ariaRole: "button" };
function KH(e) {
  return "ariaRole" in e;
}
var Pr = [
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
  qH = "multiply",
  XH = { blendingMode: void 0 },
  WC = "blendingMode";
function YH(e) {
  return WC in e;
}
var zC = new Set(Pr);
function JH(e) {
  return p(e) && zC.has(e);
}
var Ua = ["contain", "none"],
  eG = { overscrollBehavior: void 0 },
  HC = "overscrollBehavior";
function tG(e) {
  return e ? HC in e : !1;
}
function nG(e) {
  return p(e) && (e === "contain" || e === "none");
}
var oG = { overscrollBehavior: "contain" };
var kr = ["none", "auto"],
  aG = { pointerEvents: void 0 },
  sG = { pointerEvents: "none" },
  GC = "pointerEvents";
function lG(e) {
  return GC in e;
}
var Rf = new Set(kr);
function uG(e) {
  return p(e.pointerEvents) && Rf.has(e.pointerEvents);
}
function dG(e) {
  return p(e) && Rf.has(e);
}
var vr = ["none", "auto"],
  fG = { userSelect: void 0 },
  mG = { userSelect: "none" },
  jC = "userSelect";
function yG(e) {
  return jC in e;
}
var Pf = new Set(vr);
function hG(e) {
  return p(e.userSelect) && Pf.has(e.userSelect);
}
function xG(e) {
  return p(e) && Pf.has(e);
}
var $a = ["text", "textarea", "email", "number", "tel", "url", "date", "time"],
  kf = {
    text: "Text",
    textarea: "Text area",
    number: "Number",
    email: "Email",
    tel: "Phone number",
    url: "URL",
    date: "Date",
    time: "Time",
  };
function _C(e) {
  return p(e) && e in kf;
}
function vf(e) {
  return _C(e) ? kf[e] : "Text";
}
function CG(e) {
  return E(e) || e === "date" || e === "time";
}
function VG(e) {
  return E(e) || e === "text";
}
var KC = "formTextInputType";
function UC(e) {
  return KC in e;
}
var SG = {
  formTextInputType: void 0,
  formTextAreaResizable: void 0,
  formTextInputMinNumber: void 0,
  formTextInputMaxNumber: void 0,
  formInputMaxLength: void 0,
};
function NG(e) {
  return UC(e) && e.formTextInputType === "textarea";
}
var If = {
  stackDirection: {
    type: "enum",
    defaultValue: Tr(ec),
    options: Ho.map(Tr),
    optionTitles: Ho.map(we),
    displaySegmentedControl: !0,
    optionIcons: ["direction-horizontal", "direction-vertical"],
  },
  stackDistribution: {
    type: "enum",
    defaultValue: jo(tc),
    options: Go.map(jo),
    optionTitles: Go.map(we),
  },
  stackAlignment: {
    type: "enum",
    defaultValue: jo(nc),
    options: _o.map(lc),
    optionTitles: _o.map(we),
  },
  gridItemColumnSpan: { type: "enum", defaultValue: 1, options: xa, optionTitles: fc },
  gridItemRowSpan: { type: "enum", defaultValue: 1, options: Ko, optionTitles: pc },
  userSelect: {
    type: "enum",
    defaultValue: "auto",
    options: vr.map((e) => e),
    optionTitles: vr.map(we),
  },
  overscrollBehavior: {
    type: "enum",
    defaultValue: "none",
    options: Ua.map((e) => e),
    optionTitles: Ua.map(we),
  },
  overflow: {
    type: "enum",
    defaultValue: "auto",
    options: Vr.map((e) => e),
    optionTitles: Vr.map(Op),
  },
  pointerEvents: {
    type: "enum",
    defaultValue: "auto",
    options: kr.map((e) => e),
    optionTitles: kr.map(we),
  },
  blendingMode: {
    type: "enum",
    defaultValue: "multiply",
    options: Pr.map((e) => e),
    optionTitles: Pr.map(we),
  },
  formTextInputType: {
    type: "enum",
    defaultValue: "text",
    options: [...$a],
    optionTitles: $a.map(vf),
  },
  imageRendering: {
    type: "enum",
    defaultValue: "auto",
    displaySegmentedControl: !0,
    options: [...Cr],
    optionTitles: Cr.map(Ap),
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
  ariaCurrent: { type: "enum", defaultValue: "page", options: [...Cf] },
  ariaHaspopup: { type: "enum", defaultValue: "menu", options: [...Vf] },
  ariaHidden: { type: "boolean", defaultValue: !1 },
  ariaDisabled: { type: "boolean", defaultValue: !1 },
  ariaRoleDescription: { type: "string", defaultValue: "" },
  ariaRole: { type: "enum", defaultValue: "button", options: [...Nf] },
  ariaLive: { type: "enum", defaultValue: "polite", options: [...Sf] },
  ariaDescription: { type: "string", defaultValue: "" },
  tickerEffectDirectionModifier: {
    type: "enum",
    defaultValue: "default",
    displaySegmentedControl: !0,
    options: ha,
    optionTitles: ha.map(uc),
  },
};
function _G(e) {
  return Object.hasOwn(If, e);
}
function Df(e) {
  let t = If[e];
  return (g(t, () => `unknown node property control: ${e}`), t);
}
var UG = "framer/nodePropertyDefinitions",
  $C = [
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
  qC = new Set($C);
function wf(e) {
  return typeof e == "string" && qC.has(e);
}
var XC = "src";
function Ir(e) {
  return x(e) && p(e[XC]);
}
function Dr(e, t) {
  switch (e.valueType) {
    case "number":
      return typeof t == "number" && Number.isFinite(t);
    case "boolean":
      return typeof t == "boolean";
    default:
      return !1;
  }
}
function ZG(e, t) {
  if (Dr(e, t)) return t;
  if (Dr(e, e.defaultValue)) return e.defaultValue;
  switch (e.valueType) {
    case "number":
      return 0;
    case "boolean":
      return !1;
    default:
      return 0;
  }
}
var Hr = M(Af(), 1);
function bj(e, t) {
  if (e.type === "motionvalue") return L(t) || Dr(e, t);
  if (!Ya(e.type, t)) return !1;
  switch (e.type) {
    case "enum":
    case "segmentedenum":
      return L(t) || (ye(t) && t.outputType === "enum") ? !0 : e.options.some((n) => n === t);
  }
  return !0;
}
function Ya(e, t) {
  if (L(t)) return !0;
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
      return p(t) || B(t);
    case "richtext":
      return Tt(t) || (0, Hr.isElement)(t);
    case "responsiveimage":
      return Ir(t);
    case "file":
    case "image":
      return p(t) || P(t);
    case "enum":
    case "segmentedenum":
      return !!(t === void 0 || t === null || te(t) || S(t) || p(t));
    case "fusednumber":
      return Dn(t);
    case "eventhandler":
      return B(t) && t.every(zo);
    case "transition":
      return ao(t);
    case "border":
      return In(t);
    case "link":
      return bt(nr(t));
    case "linkrelvalues":
      return B(t) && t.every(ka);
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
      return B(t) && t.every(p);
    case "trackingid":
      return p(t);
    case "array":
      return B(t);
    case "vectorsetitem":
      return (p(t) && Pe(t)) || (0, Hr.isValidElementType)(t);
    case "ref":
    case "changehandler":
      return !1;
    case "location":
      return dr(t);
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
  return Ya(e, t) && !E(t) ? t : Hp(e);
}
function w(e) {
  return e.name || "Unknown";
}
function Ij(e, t) {
  switch (e.type) {
    case "boolean":
      return Ja(e, t);
    case "number":
      return Za(e, t);
    case "color":
      return Qa(e);
    case "string":
      return es(e, t);
    case "image":
      return ts(e);
    case "link":
      return ns(e);
    case "date":
      return os(e, t);
    default:
      return z(e);
  }
}
function Ja(e, t) {
  let { enabledTitle: n, disabledTitle: o } = e.options ?? {};
  return {
    type: e.type,
    title: w(e),
    enabledTitle: n,
    disabledTitle: o,
    description: e.description,
    optional: Q(e, t) ? !0 : void 0,
  };
}
function Za(e, t) {
  let { min: n, max: o, step: r, unit: i, displayStepper: a } = e.options ?? {};
  return {
    type: e.type,
    title: w(e),
    min: n,
    max: o,
    step: r,
    unit: i,
    displayStepper: a,
    description: e.description,
    optional: Q(e, t) ? !0 : void 0,
  };
}
function Qa(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function es(e, t) {
  let { placeholder: n, displayTextArea: o } = e.options ?? {};
  return {
    type: e.type,
    title: w(e),
    placeholder: n,
    displayTextArea: o,
    description: e.description,
    preventLocalization: e.preventLocalization,
    optional: Q(e, t) ? !0 : void 0,
  };
}
function ts(e) {
  return { type: "responsiveimage", title: w(e), description: e.description };
}
function ns(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function os(e, t) {
  let n = {
    type: e.type,
    title: w(e),
    description: e.description,
    optional: Q(e, t) ? !0 : void 0,
  };
  return (e.options?.displayTime && (n.displayTime = !0), n);
}
var Ef = ["string", "date", "number", "enum", "sharedtype", "boolean", "slug"];
function ZC(e) {
  return e ? Ef.includes(e.type) : !1;
}
function QC(e) {
  return Ef.includes(e);
}
function u_(e) {
  return e === "enum" || e === "file";
}
function d_(e) {
  return e.type === "controlReference"
    ? e.expectedType === "segmentedenum"
      ? "enum"
      : e.expectedType
    : e.type;
}
function c_(e) {
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
var eV = {
  responsiveimage: "image",
  fusednumber: null,
  slot: null,
  changehandler: null,
  font: null,
  pagescope: null,
};
function p_(e) {
  return lo(e) ? e : eV[e];
}
var tV = ["eventhandler"];
function f_(e) {
  return tV.includes(e.type);
}
function m_(e) {
  return Kp(e) ? (e.required ?? !1) : !1;
}
var nV = {
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
function Of(e) {
  return Object.hasOwn(nV, e.type);
}
function y_(e) {
  return e?.type === "array" && e.control.type === "object";
}
function h_(e) {
  return e.type === "array";
}
function oV(e, t, n, o) {
  let r = {},
    i = Oa(n);
  for (let s of n.itemVariables) {
    if (!on(s)) continue;
    let l = rs(e, t, s, o);
    l &&
      (g(Of(l), "Expected array item property control to be usable in an object"),
      i && l.type === "responsiveimage" ? (r[s.id] = aV(l)) : (r[s.id] = l));
  }
  let a = n.initialValue?.map((s) => {
    let l = {};
    if (!s || s.type !== "object" || !x(s.value)) return l;
    for (let u in s.value) {
      let c = s.value[u];
      if (!c) continue;
      let m = Wf(c);
      P(m) || (l[u] = m);
    }
    return l;
  });
  return {
    type: n.type,
    control: { type: "object", controls: r },
    title: w(n),
    description: n.description,
    minCount: n.minCount,
    maxCount: n.maxCount,
    displayGalleryAsArray: n.displayGalleryAsArray === !0 ? !0 : void 0,
    __vekterDefault: a,
  };
}
function rV(e, t, n, o) {
  let r = {};
  for (let a of n.fieldVariables) {
    let s = rs(e, t, a, o);
    s && (g(Of(s), "Expected object field control to be usable in an object"), (r[a.id] = s));
  }
  let i = Q(n, o);
  return {
    type: n.type,
    controls: r,
    title: w(n),
    description: n.description,
    optional: i ? !0 : void 0,
    __vekterDefault: i ? void 0 : iV(n),
  };
}
function iV(e) {
  let t = {};
  for (let n of e.fieldVariables) {
    let o = Wf(e.initialValue[n.id]);
    P(o) || (t[n.id] = o);
  }
  return t;
}
function aV(e) {
  let { __defaultAssetReference: t, __vekterDefault: n, ...o } = e;
  return o;
}
function Wf(e) {
  if (!De(e)) return;
  let t = e.type;
  if (mn(t))
    switch (t) {
      case "image": {
        if (!p(e.value)) return;
        let n, o, r;
        return (
          ja(e) && (n = e.alt),
          _a(e) && ((o = e.positionX), (r = e.positionY)),
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
        return Tt(e.value) ? e.value : void 0;
      case "link":
        return bt(e.value) ? e.value : void 0;
      case "vectorsetitem":
        return p(e.value) && Pe(e.value) ? e.value : void 0;
      default:
        z(t);
    }
}
function x_(e, t, n) {
  if (!Oa(e)) return sV(t, n);
}
function sV(e, t) {
  if (!Q(e, t)) return lV(e);
}
function lV(e) {
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
      return { type: "link", value: nr(e.initialValue) };
    case "vectorsetitem":
      return { type: "vectorsetitem", value: e.initialValue.identifier };
    default:
      z(e);
  }
}
function uV(e, t) {
  let n = Q(e, t);
  return { ...Ja(e, t), defaultValue: n ? void 0 : me(e.type, e.initialValue) };
}
function Ct(e, t) {
  let n = Q(e, t);
  return { ...Za(e, t), defaultValue: n ? void 0 : me(e.type, e.initialValue) };
}
function dV(e) {
  let t = $e(e.initialValue) ? e.initialValue : ko.toFormatString(e.initialValue);
  return { ...Qa(e), defaultValue: me(e.type, t) };
}
function cV(e, t) {
  let { min: n, max: o, step: r, units: i, literals: a } = e.options ?? {},
    s = Q(e, t);
  return {
    type: e.type,
    title: w(e),
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
function pV(e, t) {
  let n = Q(e, t);
  return {
    ...es(e, t),
    defaultValue: n ? void 0 : me(e.type, e.initialValue),
    maxLength: e.options?.maxLength,
  };
}
function fV(e) {
  let { placeholder: t, maxLength: n } = e.options ?? {};
  return {
    type: e.type,
    title: w(e),
    defaultValue: bf(me(e.type, e.initialValue)),
    placeholder: t,
    maxLength: n,
    description: e.description,
    preventLocalization: e.preventLocalization,
  };
}
function mV(e) {
  let t = ts(e);
  if (
    (p(e.initialValue) && (t.__defaultAssetReference = e.initialValue),
    De(e.initialValue) && p(e.initialValue.value))
  ) {
    let n = e.initialValue.value;
    t.__defaultAssetReference = n;
    let o = { assetReference: n };
    ((t.__vekterDefault = o),
      ja(e.initialValue) && p(e.initialValue.alt) && (o.alt = e.initialValue.alt),
      _a(e.initialValue) &&
        ((o.positionX = e.initialValue.positionX), (o.positionY = e.initialValue.positionY)));
  }
  return t;
}
function yV(e) {
  let t = e.allowedFileTypes.map((r) => r.extension),
    n = new Set(t),
    o = Array.from(n).filter(Boolean);
  return {
    type: "file",
    title: w(e),
    allowedFileTypes: o,
    __defaultAssetReference: me(e.type, e.initialValue),
    description: e.description,
  };
}
function hV(e, t, n, o) {
  let r = bV(e, t, n, o);
  return r ? { type: n.type, title: w(n), payload: r } : { type: n.type, title: w(n) };
}
var xV = {
  boolean: !0,
  number: !0,
  string: !0,
  color: !0,
  date: !0,
  link: !0,
  image: !0,
  responsiveimage: !0,
};
function gV(e) {
  return Object.hasOwn(xV, e.type);
}
function bV(e, t, n, o) {
  if (!n.payload) return;
  let r = {};
  for (let i of n.payload) {
    let a = rs(e, t, i, o);
    a && gV(a) && (r[i.id] = a);
  }
  return Bu(r) ? void 0 : r;
}
function TV(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function CV(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function VV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function SV(e) {
  let t = me(e.type, e.initialValue);
  return {
    type: e.type,
    title: w(e),
    defaultValue: t ? Cl(t) : void 0,
    description: e.description,
  };
}
function NV(e) {
  return { type: e.type, title: w(e), defaultValue: e.initialValue, description: e.description };
}
function RV(e) {
  let t = me(e.type, e.initialValue),
    n = t ? np(t) : void 0;
  return { type: e.type, title: w(e), description: e.description, defaultValue: n };
}
function PV(e) {
  return {
    type: e.type,
    title: w(e),
    defaultValue: e.initialValue.map(tf),
    description: e.description,
  };
}
function kV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function vV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function IV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function DV(e, t) {
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
function wV(e, t) {
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
function LV(e) {
  return { type: e.type, title: w(e), description: e.description };
}
function MV(e) {
  return {
    type: e.type,
    title: w(e),
    description: e.description,
    setModuleId: e.setModuleId,
    defaultValue: e.initialValue,
  };
}
function BV(e) {
  return ns(e);
}
function AV(e) {
  return { type: e.type, title: w(e), description: e.description, defaultValue: e.initialValue };
}
function EV(e, t) {
  let n = Q(e, t);
  return { ...os(e, t), defaultValue: n ? void 0 : me(e.type, e.initialValue) };
}
function FV(e, t) {
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
    title: w(e),
    defaultValue: o,
    options: r,
    optionTitles: i,
    description: e.description,
    optional: n ? !0 : void 0,
  };
  return (_p(e) || Bn(s, a), s);
}
function Ff(e, t) {
  switch (e) {
    case "enum":
    case "sharedtype":
      return t === "enum" || t === "segmentedenum";
    default:
      return e === t;
  }
}
function OV(e, t) {
  let n = ke(t);
  if (Es(n)) {
    let o = e.getNode(n.moduleId);
    if (o) return o.codeComponentIdentifier;
  }
  return t;
}
function WV(e, t, n) {
  if (n.type === "nodePropertyControlReference") {
    if (!wf(n.controlKey)) return null;
    let a = Df(n.controlKey);
    return (
      g(
        a && Ff(a.type, n.expectedType),
        () => `incompatible node property control: ${n.controlKey} ${n.expectedType}`
      ),
      a
    );
  }
  let o = OV(e, n.entityIdentifier),
    r = t.componentForIdentifier(o);
  if (!r?.properties || (r.type !== "component" && r.type !== "data")) return null;
  let i = r.properties[n.controlKey];
  return !i || !Ff(i.type, n.expectedType) ? null : i;
}
function zV(e, t) {
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
function HV(e, t, n, o) {
  let r = WV(e, t, n);
  if (!r) return null;
  let i = n.type === "controlReference" && Q(n, o);
  switch (n.expectedType) {
    case "enum":
    case "segmentedenum": {
      if (r.type === "sharedtype") {
        if (Ha(r)) return null;
        let s = {
          type: "sharedtype",
          kind: r.kind,
          moduleIdentifier: r.moduleIdentifier,
          title: w(n),
          defaultValue: i || !p(n.initialValue) ? void 0 : n.initialValue,
          description: n.description,
          optional: i ? !0 : void 0,
        };
        return (
          n.type === "controlReference" &&
            En(s, { dataIdentifier: n.entityIdentifier, enumFieldKey: n.controlKey }),
          s
        );
      }
      if (r.type !== "enum") return null;
      let a = {
        type: "enum",
        title: w(n),
        options: r.options,
        optionTitles: r.optionTitles,
        displaySegmentedControl: r.displaySegmentedControl,
        defaultValue: i ? void 0 : me(n.expectedType, n.initialValue),
        optionIcons: r.optionIcons,
        description: n.description,
        optional: i ? !0 : void 0,
      };
      if (n.type === "controlReference") {
        let s = GV(e, t, n, r.options);
        s && Bn(a, s);
      }
      return a;
    }
    case "file":
      return r.type !== "file"
        ? null
        : {
            type: "file",
            title: w(n),
            allowedFileTypes: r.allowedFileTypes,
            description: n.description,
            __defaultAssetReference: p(n.initialValue) ? n.initialValue : void 0,
          };
    default:
      throw Error("Unsupported control reference type");
  }
}
function GV(e, t, n, o) {
  if (!Pe(n.entityIdentifier)) return null;
  let i = od(e, n.entityIdentifier)?.getPropertyControls(e, t)[n.controlKey];
  if (i?.type !== "enum") return null;
  let a = $p(i);
  return a ? o.map((s) => a[i.options.indexOf(s)]) : null;
}
function jV(e, t) {
  return {
    type: "string",
    title: w(t),
    description: t.description,
    preventLocalization: e.root.translatePagePaths === "no",
  };
}
var _V = { string: !0, richtext: !0 };
function g_(e) {
  return e.type in _V;
}
function rs(e, t, n, o) {
  switch (n.type) {
    case "array":
      return oV(e, t, n, o);
    case "object":
      return rV(e, t, n, o);
    case "boolean":
      return uV(n, o);
    case "number":
      return Ct(n, o);
    case "motionvalue":
      return Qp(n, w(n));
    case "dimension":
      return cV(n, o);
    case "color":
      return dV(n);
    case "string":
      return pV(n, o);
    case "richtext":
      return fV(n);
    case "image":
      return mV(n);
    case "eventhandler":
      return hV(e, t, n, o);
    case "link":
      return BV(n);
    case "linkrelvalues":
      return AV(n);
    case "date":
      return EV(n, o);
    case "enum":
      return FV(n, o);
    case "file":
      return yV(n);
    case "ref":
      return { type: n.type, title: w(n), description: n.description };
    case "scrollsectionref":
      return TV(n);
    case "customcursor":
      return CV(n);
    case "cursor":
      return VV(n);
    case "transition":
      return SV(n);
    case "border":
      return RV(n);
    case "location":
      return NV(n);
    case "boxshadow":
      return PV(n);
    case "gap":
      return kV(n);
    case "padding":
      return vV(n);
    case "borderradius":
      return IV(n);
    case "collectionreference":
      return DV(n, o);
    case "multicollectionreference":
      return wV(n, o);
    case "trackingid":
      return LV(n);
    case "vectorsetitem":
      return MV(n);
    case "sharedtype":
      return zV(n, o);
    case "nodePropertyControlReference":
    case "controlReference":
      return HV(e, t, n, o);
    case "slug":
      return jV(e, n);
    default:
      z(n);
  }
}
function b_(e) {
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
function T_(e) {
  return e ? Bt(e) || At(e) || ll(e) || ze(e) : !1;
}
var U = class extends Map {};
var zf = "carousel_source_identifier",
  Gr = "carousel_provider_id",
  K = {
    activeItemIndex: "carousel_active_item_index",
    totalItems: "carousel_total_items",
    hasNext: "carousel_has_next",
    hasPrevious: "carousel_has_previous",
    dots: "carousel_dots",
  },
  jr = {
    id: K.activeItemIndex,
    name: "Active Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  _r = {
    id: K.totalItems,
    name: "Total Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  Fn = { id: K.hasNext, name: "Has Next", type: "boolean", initialValue: !1 },
  On = { id: K.hasPrevious, name: "Has Previous", type: "boolean", initialValue: !1 },
  Kr = { id: K.dots, name: "Pagination", type: "array", initialValue: [], itemVariables: [] },
  is = {
    [K.activeItemIndex]: jr,
    [K.totalItems]: _r,
    [K.hasNext]: Fn,
    [K.hasPrevious]: On,
    [K.dots]: Kr,
  };
function R_(e) {
  if (e in is) return is[e];
}
function P_(e) {
  return e in is;
}
var Hf = M(mm(), 1),
  Vt = "previousItemId";
function w_(e) {
  return Ur(Vt, "Previous", e.instanceIdentifier);
}
function L_({ name: e, dataIdentifier: t }) {
  return [
    {
      id: "id",
      name: e ? (0, Hf.singular)(e) : "Unknown",
      type: "collectionreference",
      dataIdentifier: t,
      initialValue: void 0,
      exposeInProps: !0,
    },
    $V(),
    XV(),
    Ur(Vt, "Previous", t),
    Ur(St, "Next", t),
  ];
}
function Ur(e, t, n) {
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
function M_(e) {
  return Ur(St, "Next", e.instanceIdentifier);
}
function B_(e) {
  return e === Vt || e === St;
}
var UV = "createdAt";
function $V() {
  return { type: "date", name: "Created", id: UV, initialValue: void 0, exposeInProps: !0 };
}
var qV = "updatedAt";
function XV() {
  return { type: "date", name: "Updated", id: qV, initialValue: void 0, exposeInProps: !0 };
}
var E_ = { hookIdentifier: void 0 },
  YV = "hookIdentifier";
function JV(e) {
  return !!(e && YV in e);
}
function Wn(e) {
  return JV(e) && e.hookIdentifier !== void 0;
}
var Nt = ".";
function K_(e, t, n) {
  return e === Vt || e === St ? n.length === 0 : !n.includes(t);
}
function ZV(e, t) {
  return e === t || QV(e, t);
}
function QV(e, t) {
  return e.endsWith(t) && e[e.length - t.length - 1] === Nt;
}
function Gf(e, t) {
  return e.startsWith(t) && e[t.length] === Nt;
}
function U_(e) {
  return Gf(e, Vt) || Gf(e, St);
}
function an(e) {
  return e.includes(Nt);
}
function $_(e) {
  return an(e.id);
}
function $r(e, t) {
  return e ? e + Nt + t : t;
}
function q_(e) {
  let t = e.lastIndexOf(Nt);
  if (!(t < 0)) return e.slice(0, t);
}
function X_(e, t, n) {
  let o = $r(e, t);
  return El(o, n);
}
function eS(e) {
  return e === "id";
}
function Y_(e) {
  return ZV(e, "id");
}
function J_(e) {
  let t = Object.entries(e.properties);
  for (let [n, o] of t)
    if (!eS(n) && (o?.type === "collectionreference" || o?.type === "multicollectionreference"))
      return !0;
  return !1;
}
function tS(e) {
  return e.split(Nt);
}
function nS(e) {
  return e.join(Nt);
}
function Z_(e) {
  if (Vu(e) && L(e.fillImage) && an(e.fillImage.id)) return e.fillImage;
  if (He(e)) {
    if (Hl(e.textContent) && an(e.textContent.startValue.id)) return e.textContent.startValue;
    if (L(e.htmlContent) && an(e.htmlContent.id)) return e.htmlContent;
    if (L(e.textContent) && an(e.textContent.id)) return e.textContent;
  }
}
function Q_(e, t, n, o, r) {
  if (!an(n)) return { collectionItemNode: o, collectionNode: r, variableId: n };
  let i = jf(e, t, n, o, r);
  if (i.length === 0) return;
  let a;
  i.length === 1 ? (a = i[0]) : i.length > 1 && (a = i[i.length - 2]);
  let { collectionItemNode: s, variableId: l } = a ?? {};
  if (!s || !l) return;
  let u = e.getNodeWithTrait(s.parentid, Zn);
  if (u) return { collectionItemNode: s, collectionNode: u, variableId: l };
}
function jf(e, t, n, o, r) {
  let i = tS(n),
    a = i[0] === St,
    s = i[0] === Vt;
  if (a || s) {
    let c = a ? 1 : -1,
      m = r.getSortedChildren("public-only", "group-drafts"),
      f = m.findIndex((T) => T.id === o.id);
    if (f === -1) return [];
    let h = m[f + c];
    return h ? jf(e, t, nS(i.slice(1)), h, r) : [];
  }
  let l = [{ collectionItemNode: o, variableId: i[0] }],
    u = o;
  for (let c = 0; c < i.length; c++) {
    let m = i[c];
    if (!m) break;
    let f = u.getControlProp(m);
    if (f?.type !== "collectionreference") break;
    g(!L(f.value), "Collections don't support variables");
    let h = e.getNodeWithTrait(f.value, cl);
    if (!h) break;
    u = h;
    let T = i[c + 1];
    if (!T) break;
    l.push({ collectionItemNode: u, variableId: T });
  }
  return l;
}
function oS(e) {
  return e.title ?? e.name;
}
function s2(e) {
  return e.replace(/^\.\/(.*)\.(?:tsx|ts|js)$/u, "$1");
}
function l2(e) {
  let t = new U();
  for (let n in e) {
    let o = e[n];
    if (o && (t.set(n, o), o.type === "object"))
      for (let r in o.controls) {
        let i = o.controls[r];
        i && t.set($r(n, r), { ...i, title: i.title ?? Kn(r) });
      }
  }
  return t;
}
function u2(e, t) {
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
          c = x(a) ? a[s] : void 0;
        n.set($r(o, s), t ? c : (c ?? u));
      }
  }
  return n;
}
var as = "_hook";
function _f(e) {
  return `${e}${as}`;
}
function rS(e) {
  return !!e?.endsWith(as);
}
function qr(e) {
  if (!(!e || !rS(e))) return e.slice(0, -as.length);
}
function d2(e, t) {
  let n = qr(e);
  if (!n) return;
  let o = t.get(n);
  if (o) return _f(o);
}
function Kf(e, t) {
  if (e.getPrimaryId() === t) return e;
  for (let n of e.ancestors()) if (n.getPrimaryId() === t) return n;
}
function c2(e, t) {
  if (!t) return;
  let n = qr(t);
  if (!n) return;
  let o = Kf(e, n);
  return Wn(o) ? o.hookIdentifier : void 0;
}
function p2(e, t, n, o) {
  if (!t) return;
  let r = qr(t);
  if (!r) return;
  let i = Kf(e, r);
  if (!Wn(i)) return;
  let a = i.cache.getHookCache().getMaps(i.hookIdentifier, n);
  if (!a) return;
  let s = o?.get(t);
  return s ? { ...a, valueMap: s } : a;
}
function Uf(e, t, n) {
  if (!Wn(e)) return;
  let o = e.cache.getHookCache().getMaps(e.hookIdentifier, t);
  if (!o) return;
  let r = _f(e.getPrimaryId()),
    i = n?.get(r) ?? o.valueMap;
  return {
    providerId: r,
    sourceIdentifier: e.hookIdentifier,
    variableMap: o.variableMap,
    controlMap: o.controlMap,
    valueMap: i,
  };
}
function f2(e, t, n) {
  let o = qr(n);
  if (!o) return;
  let r = e.get(o);
  if (!Wn(r)) return;
  let i = t.hookForIdentifier(r.hookIdentifier);
  return i ? oS(i) : void 0;
}
var iS = "variables";
function y2(e) {
  return e ? iS in e : !1;
}
var aS = "getProvidedVariableMap";
function x2(e) {
  return !!e && aS in e;
}
function ss(e) {
  return e.root.getDefaultLocaleName("Default locale");
}
function $f(e, t) {
  return !t || !e ? "ltr" : No(e.code);
}
var qf = "global_locale",
  Xf = "global_layout_direction",
  Xr = "locale_provider_id",
  Yf = "locale_source_identifier",
  sS = "Left to Right",
  lS = "Right to Left";
function w2(e) {
  return ze(e) || Bt(e) || At(e);
}
var ls = (() => {
    let e, t, n;
    return (o) => {
      let r = o.root.locales;
      if (!r || r.length === 0) return null;
      let i = ss(o);
      return (
        (n && i === e && r === t) ||
          ((e = i),
          (t = r),
          (n = {
            id: qf,
            type: "enum",
            name: "Locale",
            initialValue: void 0,
            cases: [{ id: Tn, name: ss(o) }, ...r.map((a) => ({ id: a.id, name: a.name }))],
          })),
        n
      );
    };
  })(),
  us = (() => {
    let e;
    return (t) => {
      let n = t.root.locales;
      return !n || n.length === 0
        ? null
        : e ||
            ((e = {
              id: Xf,
              type: "enum",
              name: "Layout Direction",
              initialValue: void 0,
              cases: [
                { id: "ltr", name: sS },
                { id: "rtl", name: lS },
              ],
            }),
            e);
    };
  })(),
  L2 = _e((e) => (e ? Jf(e) : null)),
  uS = _e((e, t) => {
    if (!e && !t) return;
    let n = new U();
    return (e && n.set(e.id, e), t && n.set(t.id, t), n);
  });
function M2(e) {
  let t = ls(e),
    n = us(e);
  return uS(t, n);
}
function Jf(e) {
  let t = [],
    n = [];
  for (let r of e.cases) (t.push(r.id), n.push(r.name));
  let o = { type: "enum", title: "Locale", options: t, optionTitles: n };
  return (En(o, { dataIdentifier: Yf, enumFieldKey: qf }), o);
}
function dS(e) {
  let t = [],
    n = [];
  for (let r of e.cases) (t.push(r.id), n.push(r.name));
  let o = { type: "enum", title: "Layout Direction", options: t, optionTitles: n };
  return (En(o, { dataIdentifier: Yf, enumFieldKey: Xf }), o);
}
var cS = _e((e, t) => {
  if (!e && !t) return;
  let n = new U();
  return (e && n.set(e.id, Jf(e)), t && n.set(t.id, dS(t)), n);
});
function pS(e) {
  let t = ls(e),
    n = us(e);
  return cS(t, n);
}
var fS = _e((e) => {
  if (!e) return;
  let t = new Map();
  return (t.set(Xr, e), t);
});
function B2(e) {
  let t = pS(e);
  return fS(t);
}
var mS = _e((e, t, n, o) => {
  if (!e && !t) return;
  let r = new U();
  (e && r.set(e.id, n?.id ?? Tn), t && r.set(t.id, $f(n, o)));
  let i = new Map();
  return (i.set(Xr, r), i);
});
function A2(e, t) {
  let n = ls(e),
    o = us(e);
  return mS(n, o, t, e.root.adaptLayoutToTextDirection);
}
var Zf = "default",
  zn = class {
    has(t) {
      return !1;
    }
    get(t) {}
    *[Symbol.iterator]() {}
  },
  F2 = new zn(),
  O2 = new zn(),
  W2 = new zn();
function Qf(e) {
  let t = Lu(e);
  if (t) return t.intrinsicSize;
  let n = e.split("?")[1];
  if (!n) return;
  let o = new URLSearchParams(n),
    r = parseInt(o.get("width") ?? "", 10),
    i = parseInt(o.get("height") ?? "", 10);
  return S(r) && S(i) ? { width: r, height: i } : void 0;
}
var yS = "type",
  hS = "webPageId";
function em(e, t) {
  return e.type !== "link" || !x(t) || yS in t ? !1 : hS in t;
}
function xS(e, t) {
  let n = t;
  for (; eo(n);) {
    if (n.dataIdentifier) return n.dataIdentifier;
    n = e.getParent(n.id);
  }
}
function gS(e, t) {
  if (t.unresolvedPathSlugs)
    for (let n in t.unresolvedPathSlugs) {
      let o = t.unresolvedPathSlugs[n];
      if (!x(o)) continue;
      let r = o.collectionItemId;
      if (!p(r)) continue;
      let i = nd(e, t.webPageId);
      if (!i) return;
      let a = xS(e, i);
      if (!a) return;
      let s = { identifier: a, collectionItemId: r, key: n, value: "" };
      return { [n]: s };
    }
}
function tm(e, t) {
  return { type: "webPage", webPageId: t.webPageId, pathVariables: gS(e, t) };
}
function Yr(e, t, n) {
  if (em(t, n)) return tm(e, n);
  let o = me(t.type, n);
  if (t.type === "array") {
    if (!B(o)) return o;
    let r = t.control;
    return r ? o.map((i) => Yr(e, r, i)) : o;
  }
  if (t.type === "object") {
    if (!x(o)) return o;
    let r = {};
    for (let i in o) {
      let a = t.controls[i];
      ((r[i] = o[i]), a && (r[i] = Yr(e, a, o[i])));
    }
    return r;
  }
  if (t.type === "responsiveimage" && Ir(o)) {
    let r = Qf(o.src);
    return r ? { ...o, pixelWidth: r.width, pixelHeight: r.height } : o;
  }
  return o;
}
var Jr = class {
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
      r = Yr(this.tree, n, o);
    return (this.cache.set(t, r), r);
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
function cK(e, t, n, o, r) {
  let i = new Jr(e, t, n);
  return new ds(i, o, r);
}
var cs = {
    id: Hn,
    name: "Item Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  bS = Ct(cs, "WebPage"),
  Zr = {
    id: Te,
    name: "Visible Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  pK = [cs, Zr],
  ps = Ct(Zr, "WebPage");
function fK(e) {
  return e === Hn || e === Te;
}
function mK(e) {
  return e === Te;
}
var nm = class extends Ye {
    constructor(t) {
      let n = new U();
      (n.set(Te, Zr), super(t, n));
    }
  },
  om = class extends Ye {
    constructor(t, n) {
      let o = new U();
      (o.set(Te, n), super(t, o));
    }
  },
  rm = class extends Ye {
    constructor(t) {
      let n = new U();
      (n.set(Te, ps), super(t, n));
    }
  },
  im = class extends Ye {
    constructor(t) {
      let n = new U();
      (n.set(Hn, cs), n.set(Te, Zr), super(t, n));
    }
  },
  ds = class extends Ye {
    constructor(t, n, o) {
      let r = new U();
      (r.set(Hn, n + 1), r.set(Te, o), super(t, r));
    }
  },
  am = class extends Ye {
    constructor(t) {
      let n = new U();
      (n.set(Hn, bS), n.set(Te, ps), super(t, n));
    }
  };
function yK(e, t, n, o) {
  let r = new Map(e),
    i = new Map(t),
    a = new U(),
    s = new U();
  return (
    a.set(Te, ps),
    s.set(Te, o),
    r.set(n, a),
    i.set(n, s),
    { nonRepeatedChildCombinedControlMap: r, nonRepeatedChildCombinedValueMap: i }
  );
}
function vK(e) {
  let t = e;
  for (let n of e.ancestors()) {
    if (ma(n)) return ya(t);
    t = n;
  }
  return !1;
}
var TS = Ct(jr, "WebPage"),
  CS = Ct(_r, "WebPage"),
  VS = { type: "boolean", title: Fn.name, defaultValue: Fn.initialValue },
  SS = { type: "boolean", title: On.name, defaultValue: On.initialValue },
  NS = { type: "array", title: Kr.name, control: { type: "object", controls: {} } },
  RS = kS(),
  PS = vS();
function kS() {
  let e = new U();
  return (
    e.set(K.activeItemIndex, jr),
    e.set(K.totalItems, _r),
    e.set(K.hasNext, Fn),
    e.set(K.hasPrevious, On),
    e.set(K.dots, Kr),
    e
  );
}
function vS() {
  let e = new U();
  return (
    e.set(K.activeItemIndex, TS),
    e.set(K.totalItems, CS),
    e.set(K.hasNext, VS),
    e.set(K.hasPrevious, SS),
    e.set(K.dots, NS),
    e
  );
}
function IS(e) {
  return Array.from({ length: e }, (t, n) => ({ id: String(n + 1) }));
}
function DS(e) {
  let t = new U();
  return (
    t.set(K.activeItemIndex, 1),
    t.set(K.totalItems, e),
    t.set(K.hasNext, e > 1),
    t.set(K.hasPrevious, !1),
    t.set(K.dots, IS(e)),
    t
  );
}
function wS() {
  return RS;
}
function LS() {
  return PS;
}
function MS(e, t) {
  let n = t?.get(Te),
    o = S(n) ? e.tree() : void 0,
    r = 0;
  for (let i of Mu(e))
    if (!(Rn(i) && i.position !== void 0)) {
      if (S(n) && o && tn(o, i)) {
        r += n;
        continue;
      }
      r++;
    }
  return r;
}
function IK(e, t) {
  let n = e.cache.carouselAncestorId;
  if (!n) return;
  let o = e.tree();
  if (!o) return;
  let r = o.get(n);
  if (r) return sm(e, r, t);
}
function sm(e, t, n) {
  let o = MS(t, n?.get(t.getPrimaryId())),
    r = e.cache.carouselValueMap;
  if (r?.itemCount === o) return r.valueMap;
  let i = DS(o);
  return ((e.cache.carouselValueMap = { itemCount: o, valueMap: i }), i);
}
function lm(e, t) {
  if (!Rn(e) || e.position === void 0) return;
  let n = e.tree()?.get(e.parentid);
  if (!(!n || !ma(n)))
    return {
      providerId: Gr,
      sourceIdentifier: zf,
      variableMap: wS(),
      controlMap: LS(),
      valueMap: sm(e, n, t),
    };
}
var BS = Un();
function FK(e, t, n) {
  let o = [],
    r = lm(e, t);
  r && o.push(r);
  let i = Uf(e, n, t);
  return (i && o.push(i), o.length > 0 ? o : BS);
}
function OK(e) {
  return e === Xr || e === Gr;
}
function WK(e, t, n, o, r) {
  if (!t && n.length === 0) return e;
  let i;
  e
    ? ((i = new Map(e)), t && i.set(r, t))
    : t
      ? (i = new Map([
          [r, t],
          [Zf, t],
        ]))
      : (i = new Map());
  for (let a of n) i.set(a.providerId, o(a));
  return i;
}
function zK(e) {
  return e.map(AS);
}
function HK(e) {
  return e.map(ES);
}
function AS(e) {
  return e.valueMap;
}
function ES(e) {
  return e.controlMap;
}
function GK(e, t) {
  if (t.length === 0) return e;
  let n = new Map(e ?? []);
  for (let o of t) n.set(o.providerId, o.valueMap);
  return n;
}
export {
  un as a,
  FS as b,
  ti as c,
  qs as d,
  Le as e,
  Js as f,
  $n as g,
  ie as h,
  Me as i,
  Xs as j,
  it as k,
  N as l,
  k as m,
  oN as n,
  fe as o,
  qn as p,
  Xn as q,
  cN as r,
  Jn as s,
  Lt as t,
  pN as u,
  oi as v,
  dn as w,
  ri as x,
  _t as y,
  nx as z,
  $i as A,
  rd as B,
  rx as C,
  id as D,
  ix as E,
  sd as F,
  qi as G,
  Gd as H,
  Xi as I,
  ld as J,
  Yi as K,
  Ge as L,
  Ri as M,
  ou as N,
  gn as O,
  ct as P,
  mv as Q,
  b as R,
  ud as S,
  dd as T,
  ko as U,
  mt as V,
  gx as W,
  vo as X,
  Io as Y,
  Ud as Z,
  Ow as _,
  cd as $,
  yd as aa,
  jw as ba,
  xd as ca,
  Do as da,
  ea,
  tL as fa,
  Ed as ga,
  Od as ha,
  Lx as ia,
  Wd as ja,
  Hd as ka,
  jd as la,
  _d as ma,
  Cd as na,
  rL as oa,
  cL as pa,
  Rd as qa,
  Sx as ra,
  Rx as sa,
  kd as ta,
  jx as ua,
  Kd as va,
  vd as wa,
  qt as xa,
  gL as ya,
  bL as za,
  Oo as Aa,
  Mo as Ba,
  Vn as Ca,
  ra as Da,
  kL as Ea,
  vL as Fa,
  wd as Ga,
  Ad as Ha,
  WL as Ia,
  qx as Ja,
  Qd as Ka,
  A as La,
  QR as Ma,
  tl as Na,
  mN as Oa,
  nl as Pa,
  ol as Qa,
  ii as Ra,
  Nm as Sa,
  ai as Ta,
  il as Ua,
  VN as Va,
  SN as Wa,
  NN as Xa,
  RN as Ya,
  I as Za,
  IN as _a,
  DN as $a,
  wN as ab,
  LN as bb,
  si as cb,
  al as db,
  sl as eb,
  MN as fb,
  li as gb,
  Rm as hb,
  Be as ib,
  Bt as jb,
  At as kb,
  ll as lb,
  ze as mb,
  BN as nb,
  ul as ob,
  AN as pb,
  EN as qb,
  He as rb,
  Pm as sb,
  FN as tb,
  ON as ub,
  dl as vb,
  Zn as wb,
  cl as xb,
  WN as yb,
  zN as zb,
  Qn as Ab,
  km as Bb,
  vm as Cb,
  Im as Db,
  Dm as Eb,
  wm as Fb,
  Lm as Gb,
  Mm as Hb,
  HN as Ib,
  GN as Jb,
  jN as Kb,
  _N as Lb,
  KN as Mb,
  UN as Nb,
  $N as Ob,
  qN as Pb,
  XN as Qb,
  YN as Rb,
  pl as Sb,
  JN as Tb,
  ZN as Ub,
  QN as Vb,
  eR as Wb,
  tR as Xb,
  nR as Yb,
  oR as Zb,
  ui as _b,
  rR as $b,
  iR as ac,
  aR as bc,
  fl as cc,
  sR as dc,
  lR as ec,
  uR as fc,
  dR as gc,
  cR as hc,
  eo as ic,
  pR as jc,
  ml as kc,
  to as lc,
  fR as mc,
  mR as nc,
  yR as oc,
  hR as pc,
  xR as qc,
  gR as rc,
  bR as sc,
  TR as tc,
  CR as uc,
  VR as vc,
  Bm as wc,
  SR as xc,
  NR as yc,
  RR as zc,
  zo as Ac,
  QM as Bc,
  eB as Cc,
  qy as Dc,
  zv as Ec,
  Hv as Fc,
  Ot as Gc,
  gl as Hc,
  no as Ic,
  Em as Jc,
  at as Kc,
  io as Lc,
  Fm as Mc,
  Om as Nc,
  bl as Oc,
  Tl as Pc,
  Wm as Qc,
  di as Rc,
  mi as Sc,
  ao as Tc,
  Cl as Uc,
  Km as Vc,
  qR as Wc,
  XR as Xc,
  YR as Yc,
  Um as Zc,
  JR as _c,
  tP as $c,
  yi as ad,
  nP as bd,
  hi as cd,
  Nl as dd,
  aP as ed,
  xi as fd,
  so as gd,
  mP as hd,
  yP as id,
  hP as jd,
  xP as kd,
  gP as ld,
  Pl as md,
  bP as nd,
  lo as od,
  mn as pd,
  NP as qd,
  RP as rd,
  PP as sd,
  EP as td,
  ny as ud,
  ry as vd,
  iy as wd,
  sy as xd,
  FP as yd,
  uy as zd,
  OP as Ad,
  WP as Bd,
  dy as Cd,
  zP as Dd,
  py as Ed,
  HP as Fd,
  Dl as Gd,
  GP as Hd,
  bi as Id,
  jP as Jd,
  wl as Kd,
  _P as Ld,
  KP as Md,
  UP as Nd,
  Ml as Od,
  $P as Pd,
  hy as Qd,
  xy as Rd,
  qP as Sd,
  XP as Td,
  gy as Ud,
  YP as Vd,
  JP as Wd,
  ZP as Xd,
  QP as Yd,
  ek as Zd,
  tk as _d,
  L as $d,
  El as ae,
  Ti as be,
  po as ce,
  Fl as de,
  rk as ee,
  ik as fe,
  Ol as ge,
  ak as he,
  sk as ie,
  lk as je,
  by as ke,
  yk as le,
  ye as me,
  hk as ne,
  Hl as oe,
  xk as pe,
  gk as qe,
  bk as re,
  jl as se,
  E as te,
  _l as ue,
  iB as ve,
  aB as we,
  sB as xe,
  ig as ye,
  ag as ze,
  lB as Ae,
  ec as Be,
  tc as Ce,
  nc as De,
  ht as Ee,
  uB as Fe,
  lg as Ge,
  dB as He,
  rc as Ie,
  cB as Je,
  ug as Ke,
  pB as Le,
  fB as Me,
  dg as Ne,
  Ho as Oe,
  ic as Pe,
  mB as Qe,
  Go as Re,
  fa as Se,
  jo as Te,
  fg as Ue,
  _o as Ve,
  sc as We,
  lc as Xe,
  yB as Ye,
  hB as Ze,
  hg as _e,
  bB as $e,
  TB as af,
  Rn as bf,
  RB as cf,
  PB as df,
  kB as ef,
  Tg as ff,
  ma as gf,
  ya as hf,
  Vg as if,
  vB as jf,
  LB as kf,
  MB as lf,
  Ng as mf,
  BB as nf,
  Pg as of,
  AB as pf,
  EB as qf,
  yl as rf,
  kR as sf,
  cn as tf,
  Et as uf,
  vR as vf,
  IR as wf,
  DR as xf,
  pn as yf,
  wR as zf,
  hl as Af,
  Ft as Bf,
  LR as Cf,
  xl as Df,
  MR as Ef,
  BR as Ff,
  AR as Gf,
  Ik as Hf,
  Vy as If,
  Dk as Jf,
  Ul as Kf,
  he as Lf,
  $l as Mf,
  wk as Nf,
  Lk as Of,
  Kl as Pf,
  Mk as Qf,
  Bk as Rf,
  Ak as Sf,
  ql as Tf,
  Ry as Uf,
  Ek as Vf,
  ky as Wf,
  lt as Xf,
  Fk as Yf,
  Ok as Zf,
  Wk as _f,
  dc as $f,
  vg as ag,
  Ko as bg,
  xa as cg,
  cc as dg,
  zB as eg,
  HB as fg,
  GB as gg,
  jB as hg,
  _B as ig,
  $B as jg,
  qB as kg,
  mc as lg,
  Yt as mg,
  JB as ng,
  yc as og,
  ZB as pg,
  QB as qg,
  eA as rg,
  $ as sg,
  F as tg,
  Jl as ug,
  ut as vg,
  jk as wg,
  dt as xg,
  mo as yg,
  hn as zg,
  tu as Ag,
  nu as Bg,
  ho as Cg,
  xv as Dg,
  Cv as Eg,
  Vv as Fg,
  pt as Gg,
  Sv as Hg,
  Nv as Ig,
  Rv as Jg,
  bn as Kg,
  xo as Lg,
  gu as Mg,
  Ai as Ng,
  vv as Og,
  Iv as Pg,
  Uy as Qg,
  bu as Rg,
  Fv as Sg,
  go as Tg,
  Ov as Ug,
  Xy as Vg,
  ft as Wg,
  Uv as Xg,
  nI as Yg,
  oI as Zg,
  Gt as _g,
  Ei as $g,
  rI as ah,
  iI as bh,
  Tu as ch,
  oh as dh,
  aI as eh,
  Cu as fh,
  sI as gh,
  lI as hh,
  uI as ih,
  Vu as jh,
  rh as kh,
  dI as lh,
  cI as mh,
  pI as nh,
  fI as oh,
  ah as ph,
  lh as qh,
  mI as rh,
  iA as sh,
  ga as th,
  Bg as uh,
  aA as vh,
  Uo as wh,
  lA as xh,
  xc as yh,
  mA as zh,
  gc as Ah,
  Jt as Bh,
  Fg as Ch,
  yA as Dh,
  rn as Eh,
  Y1 as Fh,
  J1 as Gh,
  af as Hh,
  $o as Ih,
  gA as Jh,
  Ca as Kh,
  bA as Lh,
  TA as Mh,
  Eu as Nh,
  Ch as Oh,
  JI as Ph,
  ZI as Qh,
  Wu as Rh,
  QI as Sh,
  eD as Th,
  xr as Uh,
  Og as Vh,
  Pn as Wh,
  qo as Xh,
  Yo as Yh,
  $e as Zh,
  Jo as _h,
  Zo as $h,
  kA as ai,
  vA as bi,
  IA as ci,
  DA as di,
  wA as ei,
  LA as fi,
  MA as gi,
  er as hi,
  EA as ii,
  Vc as ji,
  _A as ki,
  Sc as li,
  Nc as mi,
  KA as ni,
  Rc as oi,
  UA as pi,
  sf as qi,
  dH as ri,
  yH as si,
  hH as ti,
  xH as ui,
  NC as vi,
  cf as wi,
  gH as xi,
  bH as yi,
  Sa as zi,
  qA as Ai,
  qg as Bi,
  XA as Ci,
  YA as Di,
  ge as Ei,
  Xg as Fi,
  Yg as Gi,
  nE as Hi,
  Zg as Ii,
  oE as Ji,
  Qg as Ki,
  rE as Li,
  iE as Mi,
  aE as Ni,
  sE as Oi,
  lE as Pi,
  uE as Qi,
  gt as Ri,
  Zt as Si,
  Se as Ti,
  vc as Ui,
  Su as Vi,
  ph as Wi,
  RI as Xi,
  wu as Yi,
  PI as Zi,
  kI as _i,
  Lu as $i,
  TE as aj,
  bt as bj,
  Na as cj,
  Qt as dj,
  Ic as ej,
  nr as fj,
  CE as gj,
  VE as hj,
  SE as ij,
  lb as jj,
  ka as kj,
  wc as lj,
  Ac as mj,
  wa as nj,
  en as oj,
  iF as pj,
  sr as qj,
  aF as rj,
  sF as sj,
  Lc as tj,
  Mc as uj,
  De as vj,
  EE as wj,
  OE as xj,
  WE as yj,
  zE as zj,
  Fi as Aj,
  Oi as Bj,
  Ee as Cj,
  or as Dj,
  rr as Ej,
  QE as Fj,
  fb as Gj,
  ar as Hj,
  mb as Ij,
  fF as Jj,
  mF as Kj,
  yF as Lj,
  Fc as Mj,
  La as Nj,
  hF as Oj,
  TF as Pj,
  CF as Qj,
  Ma as Rj,
  VF as Sj,
  zF as Tj,
  HF as Uj,
  GF as Vj,
  jF as Wj,
  gb as Xj,
  Tb as Yj,
  _F as Zj,
  ur as _j,
  KF as $j,
  UF as ak,
  $F as bk,
  qF as ck,
  XF as dk,
  E_ as ek,
  JV as fk,
  Wn as gk,
  MI as hk,
  yh as ik,
  Mu as jk,
  Db as kk,
  op as lk,
  F0 as mk,
  O0 as nk,
  Mb as ok,
  W0 as pk,
  z0 as qk,
  rp as rk,
  H0 as sk,
  G0 as tk,
  Ab as uk,
  j0 as vk,
  Bu as wk,
  $p as xk,
  Uc as yk,
  qp as zk,
  l1 as Ak,
  pC as Bk,
  u1 as Ck,
  x1 as Dk,
  g1 as Ek,
  Zp as Fk,
  fC as Gk,
  b1 as Hk,
  T1 as Ik,
  Tn as Jk,
  jI as Kk,
  _I as Lk,
  KI as Mk,
  UI as Nk,
  zu as Ok,
  Gi as Pk,
  Hu as Qk,
  Gu as Rk,
  ju as Sk,
  ji as Tk,
  fD as Uk,
  So as Vk,
  mD as Wk,
  yD as Xk,
  _u as Yk,
  qc as Zk,
  Xc as _k,
  t0 as $k,
  Sb as al,
  n0 as bl,
  o0 as cl,
  Yc as dl,
  r0 as el,
  Nb as fl,
  tn as gl,
  i0 as hl,
  a0 as il,
  s0 as jl,
  l0 as kl,
  u0 as ll,
  Wi as ml,
  OI as nl,
  WI as ol,
  xh as pl,
  zi as ql,
  zI as rl,
  bh as sl,
  Ku as tl,
  _h as ul,
  Uu as vl,
  Xu as wl,
  SD as xl,
  Kh as yl,
  ND as zl,
  RD as Al,
  Yu as Bl,
  No as Cl,
  _e as Dl,
  _i as El,
  BD as Fl,
  AD as Gl,
  ED as Hl,
  ed as Il,
  KD as Jl,
  Jh as Kl,
  nd as Ll,
  od as Ml,
  Zh as Nl,
  Ir as Ol,
  h0 as Pl,
  Tt as Ql,
  x0 as Rl,
  Qc as Sl,
  C0 as Tl,
  V0 as Ul,
  tp as Vl,
  v0 as Wl,
  In as Xl,
  I0 as Yl,
  ot as Zl,
  np as _l,
  D0 as $l,
  w0 as am,
  L0 as bm,
  M0 as cm,
  q0 as dm,
  Dn as em,
  X0 as fm,
  ip as gm,
  zb as hm,
  Gb as im,
  yO as jm,
  hO as km,
  xO as lm,
  gO as mm,
  dr as nm,
  bO as om,
  TO as pm,
  sp as qm,
  CO as rm,
  VO as sm,
  SO as tm,
  NO as um,
  RO as vm,
  PO as wm,
  kO as xm,
  vO as ym,
  IO as zm,
  DO as Am,
  wO as Bm,
  LO as Cm,
  MO as Dm,
  BO as Em,
  AO as Fm,
  EO as Gm,
  FO as Hm,
  OO as Im,
  WO as Jm,
  zO as Km,
  HO as Lm,
  GO as Mm,
  jO as Nm,
  _O as Om,
  KO as Pm,
  UO as Qm,
  $O as Rm,
  qO as Sm,
  XO as Tm,
  _a as Um,
  j1 as Vm,
  Dr as Wm,
  ZG as Xm,
  Af as Ym,
  bj as Zm,
  Ya as _m,
  v1 as $m,
  Ga as an,
  I1 as bn,
  E1 as cn,
  F1 as dn,
  tf as en,
  ja as fn,
  z1 as gn,
  Qp as hn,
  nW as in,
  oW as jn,
  rW as kn,
  iW as ln,
  Zb as mn,
  tT as nn,
  Ba as on,
  yW as pn,
  Ln as qn,
  TW as rn,
  CW as sn,
  Cp as tn,
  rf as un,
  $1 as vn,
  pf as wn,
  ff as xn,
  mf as yn,
  yf as zn,
  hf as An,
  Sr as Bn,
  Nr as Cn,
  J as Dn,
  LC as En,
  bf as Fn,
  En as Gn,
  IH as Hn,
  RW as In,
  hr as Jn,
  PW as Kn,
  MW as Ln,
  vp as Mn,
  WW as Nn,
  Ip as On,
  Dp as Pn,
  _W as Qn,
  oz as Rn,
  wp as Sn,
  gr as Tn,
  GT as Un,
  Tr as Vn,
  Lp as Wn,
  Cf as Xn,
  wH as Yn,
  LH as Zn,
  MH as _n,
  Vf as $n,
  AH as ao,
  EH as bo,
  FH as co,
  Sf as do,
  WH as eo,
  zH as fo,
  HH as go,
  Nf as ho,
  jH as io,
  _H as jo,
  KH as ko,
  Pr as lo,
  qH as mo,
  XH as no,
  YH as oo,
  JH as po,
  uz as qo,
  dz as ro,
  cz as so,
  KT as to,
  pz as uo,
  Ap as vo,
  Vr as wo,
  gz as xo,
  bz as yo,
  Fp as zo,
  Tz as Ao,
  Cz as Bo,
  Vz as Co,
  Op as Do,
  Sz as Eo,
  Nz as Fo,
  Rz as Go,
  Wp as Ho,
  Pz as Io,
  kz as Jo,
  Ua as Ko,
  eG as Lo,
  tG as Mo,
  nG as No,
  oG as Oo,
  kr as Po,
  aG as Qo,
  sG as Ro,
  lG as So,
  uG as To,
  dG as Uo,
  vr as Vo,
  fG as Wo,
  mG as Xo,
  yG as Yo,
  hG as Zo,
  xG as _o,
  $a as $o,
  _C as ap,
  vf as bp,
  CG as cp,
  VG as dp,
  UC as ep,
  SG as fp,
  NG as gp,
  _G as hp,
  Df as ip,
  UG as jp,
  wf as kp,
  zp as lp,
  Hp as mp,
  me as np,
  Gp as op,
  Gz as pp,
  QT as qp,
  eC as rp,
  Q as sp,
  on as tp,
  jz as up,
  _z as vp,
  Kz as wp,
  Uz as xp,
  tC as yp,
  nC as zp,
  $z as Ap,
  oC as Bp,
  qz as Cp,
  Xz as Dp,
  rC as Ep,
  Yz as Fp,
  aC as Gp,
  Oa as Hp,
  lC as Ip,
  _p as Jp,
  Jz as Kp,
  Ij as Lp,
  Kp as Mp,
  t1 as Np,
  ZC as Op,
  QC as Pp,
  u_ as Qp,
  d_ as Rp,
  c_ as Sp,
  p_ as Tp,
  f_ as Up,
  m_ as Vp,
  y_ as Wp,
  h_ as Xp,
  x_ as Yp,
  sV as Zp,
  lV as _p,
  PV as $p,
  OV as aq,
  WV as bq,
  g_ as cq,
  rs as dq,
  b_ as eq,
  T_ as fq,
  x2 as gq,
  Qf as hq,
  ss as iq,
  U as jq,
  $f as kq,
  qf as lq,
  Xf as mq,
  Xr as nq,
  Yf as oq,
  sS as pq,
  lS as qq,
  w2 as rq,
  ls as sq,
  us as tq,
  L2 as uq,
  M2 as vq,
  pS as wq,
  B2 as xq,
  A2 as yq,
  Zf as zq,
  F2 as Aq,
  O2 as Bq,
  W2 as Cq,
  zf as Dq,
  Gr as Eq,
  K as Fq,
  R_ as Gq,
  P_ as Hq,
  Jr as Iq,
  Ye as Jq,
  Hn as Kq,
  Te as Lq,
  cK as Mq,
  pK as Nq,
  fK as Oq,
  mK as Pq,
  nm as Qq,
  om as Rq,
  rm as Sq,
  im as Tq,
  ds as Uq,
  am as Vq,
  yK as Wq,
  vK as Xq,
  LS as Yq,
  IK as Zq,
  Vt as _q,
  w_ as $q,
  L_ as ar,
  St as br,
  M_ as cr,
  B_ as dr,
  UV as er,
  $V as fr,
  qV as gr,
  XV as hr,
  Nt as ir,
  K_ as jr,
  ZV as kr,
  Gf as lr,
  U_ as mr,
  an as nr,
  $_ as or,
  $r as pr,
  q_ as qr,
  X_ as rr,
  eS as sr,
  Y_ as tr,
  J_ as ur,
  tS as vr,
  nS as wr,
  Z_ as xr,
  Q_ as yr,
  oS as zr,
  s2 as Ar,
  l2 as Br,
  u2 as Cr,
  _f as Dr,
  rS as Er,
  qr as Fr,
  d2 as Gr,
  c2 as Hr,
  p2 as Ir,
  f2 as Jr,
  FK as Kr,
  OK as Lr,
  WK as Mr,
  zK as Nr,
  HK as Or,
  AS as Pr,
  ES as Qr,
  GK as Rr,
  y2 as Sr,
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
//# sourceMappingURL=chunk-DHK7DVM4.mjs.map
