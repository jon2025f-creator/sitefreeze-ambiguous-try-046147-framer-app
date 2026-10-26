import { a as Ls, c as io } from "chunk-TXCWPKWI.mjs";
import { a as Nt, b as Ts, g as _, h as Ho } from "chunk-NYCWGTYH.mjs";
import { a as hs, b as se, e as ws, f as Ms, g as ee, t as Es, w as Pt } from "chunk-XWI2DDVD.mjs";
import { e as Go, f as De, g as Xf } from "chunk-GHDF5CG4.mjs";
import { Af as et, Eb as Cs, Qe as Ce, Tb as Vs, qf as Ns, sd as Ss } from "chunk-VED5QBJM.mjs";
import {
  A as We,
  b as Qe,
  c as xs,
  d as ne,
  e as Oe,
  f as Wo,
  g as Z,
  i as St,
  j as gs,
  u as bs,
  z as Rt,
} from "chunk-4NZK3QP7.mjs";
import { a as ro, b as It } from "chunk-WRBBN7SY.mjs";
import { a as ce } from "chunk-SMHMQ5IL.mjs";
import { a as jo } from "chunk-MSHSIAEI.mjs";
import { b as Ds } from "chunk-YSP5ZHDJ.mjs";
import { b as q } from "chunk-AYNVEX5D.mjs";
import { a as re } from "chunk-2FCXHKEL.mjs";
import { l as vs, p as ks } from "chunk-7NUIQ7JU.mjs";
import {
  a as Q,
  b as p,
  e as S,
  f as b,
  g as Rs,
  h as B,
  n as I,
  p as Is,
  q as Ve,
  t as Ps,
} from "chunk-Y3GZLMBF.mjs";
import { a as zo } from "chunk-UZNETSBG.mjs";
import { b as x, c as w } from "chunk-4JY5UMT2.mjs";
import { a as oe } from "chunk-SWYZG2NI.mjs";
import { m as ys } from "chunk-I5EFRSXX.mjs";
import { g as ds, i as cs, k as ps, l as Ze, o as fs, r as ms } from "chunk-VHFKZWVR.mjs";
import { i as Oo } from "chunk-WBI6GGAG.mjs";
import { a as us } from "chunk-YRQ7G4QH.mjs";
import { c as ls, e as E } from "chunk-WLHSDIGQ.mjs";
var mf = ls((G) => {
  "use strict";
  var Fa = Symbol.for("react.element"),
    Oa = Symbol.for("react.portal"),
    Vr = Symbol.for("react.fragment"),
    Sr = Symbol.for("react.strict_mode"),
    Nr = Symbol.for("react.profiler"),
    Rr = Symbol.for("react.provider"),
    Ir = Symbol.for("react.context"),
    gC = Symbol.for("react.server_context"),
    Pr = Symbol.for("react.forward_ref"),
    vr = Symbol.for("react.suspense"),
    kr = Symbol.for("react.suspense_list"),
    Dr = Symbol.for("react.memo"),
    wr = Symbol.for("react.lazy"),
    bC = Symbol.for("react.offscreen"),
    ff;
  ff = Symbol.for("react.module.reference");
  function Re(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Fa:
          switch (((e = e.type), e)) {
            case Vr:
            case Nr:
            case Sr:
            case vr:
            case kr:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case gC:
                case Ir:
                case Pr:
                case wr:
                case Dr:
                case Rr:
                  return e;
                default:
                  return t;
              }
          }
        case Oa:
          return t;
      }
    }
  }
  G.ContextConsumer = Ir;
  G.ContextProvider = Rr;
  G.Element = Fa;
  G.ForwardRef = Pr;
  G.Fragment = Vr;
  G.Lazy = wr;
  G.Memo = Dr;
  G.Portal = Oa;
  G.Profiler = Nr;
  G.StrictMode = Sr;
  G.Suspense = vr;
  G.SuspenseList = kr;
  G.isAsyncMode = function () {
    return !1;
  };
  G.isConcurrentMode = function () {
    return !1;
  };
  G.isContextConsumer = function (e) {
    return Re(e) === Ir;
  };
  G.isContextProvider = function (e) {
    return Re(e) === Rr;
  };
  G.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Fa;
  };
  G.isForwardRef = function (e) {
    return Re(e) === Pr;
  };
  G.isFragment = function (e) {
    return Re(e) === Vr;
  };
  G.isLazy = function (e) {
    return Re(e) === wr;
  };
  G.isMemo = function (e) {
    return Re(e) === Dr;
  };
  G.isPortal = function (e) {
    return Re(e) === Oa;
  };
  G.isProfiler = function (e) {
    return Re(e) === Nr;
  };
  G.isStrictMode = function (e) {
    return Re(e) === Sr;
  };
  G.isSuspense = function (e) {
    return Re(e) === vr;
  };
  G.isSuspenseList = function (e) {
    return Re(e) === kr;
  };
  G.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === Vr ||
      e === Nr ||
      e === Sr ||
      e === vr ||
      e === kr ||
      e === bC ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === wr ||
          e.$$typeof === Dr ||
          e.$$typeof === Rr ||
          e.$$typeof === Ir ||
          e.$$typeof === Pr ||
          e.$$typeof === ff ||
          e.getModuleId !== void 0))
    );
  };
  G.typeOf = Re;
});
var hf = ls((nG, yf) => {
  "use strict";
  yf.exports = mf();
});
function ao(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function sS(e, t) {
  let o = e.toFixed(t);
  return t === 0 ? o : `${+o}`;
}
function Kr(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Bs(e) {
  return Math.round(e * 2) / 2;
}
function we(e, t) {
  return { x: e, y: t };
}
((R) => {
  ((R.isQuadrilateralPoints = (y) => y?.length === 4),
    (R.add = (...y) => y.reduce((T, W) => ({ x: T.x + W.x, y: T.y + W.y }), { x: 0, y: 0 })),
    (R.subtract = (y, T) => ({ x: y.x - T.x, y: y.y - T.y })),
    (R.multiply = (y, T) => ({ x: y.x * T, y: y.y * T })),
    (R.divide = (y, T) => ({ x: y.x / T, y: y.y / T })),
    (R.absolute = (y) => ({ x: Math.abs(y.x), y: Math.abs(y.y) })),
    (R.reverse = (y) => ({ x: y.x * -1, y: y.y * -1 })),
    (R.pixelAligned = (y, T = { x: 0, y: 0 }) => ({ x: Kr(y.x, T.x), y: Kr(y.y, T.y) })),
    (R.distance = (y, T) => {
      let W = Math.abs(y.x - T.x),
        j = Math.abs(y.y - T.y);
      return Math.sqrt(W * W + j * j);
    }),
    (R.angle = (y, T) => (Math.atan2(T.y - y.y, T.x - y.x) * 180) / Math.PI - 90),
    (R.angleFromX = (y, T) => (Math.atan2(T.y - y.y, T.x - y.x) * 180) / Math.PI),
    (R.isEqual = (y, T) => y.x === T.x && y.y === T.y),
    (R.rotationNormalizer = () => {
      let y;
      return (T) => {
        typeof y != "number" && (y = T);
        let W = y - T,
          j = Math.abs(W) + 180,
          v = Math.floor(j / 360);
        return (W < 180 && (T -= v * 360), W > 180 && (T += v * 360), (y = T), T);
      };
    }));
  function h(y, T) {
    return { x: (y.x + T.x) / 2, y: (y.y + T.y) / 2 };
  }
  R.center = h;
  function C(y) {
    let T = 0,
      W = 0;
    y.forEach((J) => {
      ((T += J.x), (W += J.y));
    });
    let j = T / y.length,
      v = W / y.length;
    return { x: j, y: v };
  }
  R.centroid = C;
  function V(y) {
    let T = R.centroid(y),
      W = new Map();
    for (let j = 0; j < y.length; j++) {
      let v = y[j];
      v && W.set(v, Math.atan2(v.y - T.y, v.x - T.x));
    }
    return y.sort((j, v) => (W.get(j) ?? 0) - (W.get(v) ?? 0));
  }
  R.sortClockwise = V;
})((we ||= {}));
function As(e) {
  return e * (Math.PI / 180);
}
var rt = (() => {
  function e(t, o) {
    return { a: t, b: o };
  }
  return (
    (e.offset = (t, o) => {
      let n = we.angleFromX(t.a, t.b),
        r = As(n),
        i = o * Math.sin(r),
        a = o * Math.cos(r);
      return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
    }),
    (e.intersection = (t, o, n) => {
      let r = t.a.x,
        i = t.a.y,
        a = t.b.x,
        s = t.b.y,
        l = o.a.x,
        u = o.a.y,
        c = o.b.x,
        m = o.b.y,
        f = (c - l) * (u - i) - (m - u) * (l - r),
        h = (c - l) * (s - i) - (m - u) * (a - r),
        C = (a - r) * (u - i) - (s - i) * (l - r);
      if ((f === 0 && h === 0) || h === 0) return null;
      let V = f / h,
        R = C / h;
      return n && (V < 0 || V > 1 || R < 0 || R > 1)
        ? null
        : { x: r + V * (a - r), y: i + V * (s - i) };
    }),
    (e.intersectionAngle = (t, o) => {
      let n = t.b.x - t.a.x,
        r = t.b.y - t.a.y,
        i = o.b.x - o.a.x,
        a = o.b.y - o.a.y;
      return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
    }),
    (e.isOrthogonal = (t) => t.a.x === t.b.x || t.a.y === t.b.y),
    (e.perpendicular = (t, o) => {
      let n = t.a.x - t.b.x,
        r = t.a.y - t.b.y,
        i = we(o.x - r, o.y + n);
      return e(i, o);
    }),
    (e.projectPoint = (t, o) => {
      let n = e.perpendicular(t, o);
      return e.intersection(t, n);
    }),
    (e.pointAtPercentDistance = (t, o) => {
      let n = e.distance(t),
        r = (o * n) / n;
      return { x: r * t.b.x + (1 - r) * t.a.x, y: r * t.b.y + (1 - r) * t.a.y };
    }),
    (e.distance = (t) => we.distance(t.a, t.b)),
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
      let o = typeof t.x == "number" ? t.x : 0,
        n = typeof t.y == "number" ? t.y : 0;
      return { ...e, x: e.x + o, y: e.y + n };
    },
    inflate: (e, t) => {
      if (t === 0) return e;
      let o = 2 * t;
      return { x: e.x - t, y: e.y - t, width: e.width + o, height: e.height + o };
    },
    pixelAligned: (e) => {
      let t = Math.round(e.x),
        o = Math.round(e.y),
        n = Math.round(e.x + e.width),
        r = Math.round(e.y + e.height),
        i = Math.max(n - t, 0),
        a = Math.max(r - o, 0);
      return { x: t, y: o, width: i, height: a };
    },
    halfPixelAligned: (e) => {
      let t = Math.round(e.x * 2) / 2,
        o = Math.round(e.y * 2) / 2,
        n = Math.round((e.x + e.width) * 2) / 2,
        r = Math.round((e.y + e.height) * 2) / 2,
        i = Math.max(n - t, 1),
        a = Math.max(r - o, 1);
      return { x: t, y: o, width: i, height: a };
    },
    round: (e, t = 0) => {
      let o = ao(e.x, t),
        n = ao(e.y, t),
        r = ao(e.width, t),
        i = ao(e.height, t);
      return { x: o, y: n, width: r, height: i };
    },
    roundToOutside: (e) => {
      let t = Math.floor(e.x),
        o = Math.floor(e.y),
        n = Math.ceil(e.x + e.width),
        r = Math.ceil(e.y + e.height),
        i = Math.max(n - t, 0),
        a = Math.max(r - o, 0);
      return { x: t, y: o, width: i, height: a };
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
        o = -1 / 0,
        n = 1 / 0,
        r = -1 / 0;
      for (let i = 0; i < e.length; i++) {
        let a = e[i];
        ((t = Math.min(t, a.x)),
          (o = Math.max(o, a.x)),
          (n = Math.min(n, a.y)),
          (r = Math.max(r, a.y)));
      }
      return { x: t, y: n, width: o - t, height: r - n };
    },
    fromPoints: (e) => {
      let [t, o, n, r] = e,
        { x: i, y: a } = t,
        s = we.distance(t, o),
        l = we.distance(t, r);
      return { x: i, y: a, width: s, height: l };
    },
    merge: (...e) => {
      let t = { x: Math.min(...e.map(N.minX)), y: Math.min(...e.map(N.minY)) },
        o = { x: Math.max(...e.map(N.maxX)), y: Math.max(...e.map(N.maxY)) };
      return N.fromTwoPoints(t, o);
    },
    intersection: (e, t) => {
      let o = Math.max(e.x, t.x),
        n = Math.min(e.x + e.width, t.x + t.width),
        r = Math.max(e.y, t.y),
        i = Math.min(e.y + e.height, t.y + t.height);
      return { x: o, y: r, width: n - o, height: i - r };
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
      let { x: o, y: n } = t.transformPoint({ x: e.x, y: e.y }),
        { x: r, y: i } = t.transformPoint({ x: e.x + e.width, y: e.y }),
        { x: a, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
        { x: l, y: u } = t.transformPoint({ x: e.x, y: e.y + e.height }),
        c = Math.min(o, r, a, l),
        m = Math.max(o, r, a, l) - c,
        f = Math.min(n, i, s, u),
        h = Math.max(n, i, s, u) - f;
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
      for (let o of N.points(t)) if (!N.containsPoint(e, o)) return !1;
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
      let o = N.maxX(e),
        n = N.maxX(t);
      return o > t.x && n > e.x;
    },
    overlapVertically: (e, t) => {
      let o = N.maxY(e),
        n = N.maxY(t);
      return o > t.y && n > e.y;
    },
    doesNotIntersect: (e, t) => !t.some((o) => N.intersects(o, e)),
    isEqual: (e, t) => N.equals(e, t),
    cornerPoints: (e) => {
      let t = e.x,
        o = e.x + e.width,
        n = e.y,
        r = e.y + e.height;
      return [
        { x: t, y: n },
        { x: o, y: n },
        { x: o, y: r },
        { x: t, y: r },
      ];
    },
    midPoints: (e) => {
      let t = e.x,
        o = e.x + e.width / 2,
        n = e.x + e.width,
        r = e.y,
        i = e.y + e.height / 2,
        a = e.y + e.height;
      return [
        { x: o, y: r },
        { x: n, y: i },
        { x: o, y: a },
        { x: t, y: i },
      ];
    },
    pointDistance: (e, t) => {
      let o = 0,
        n = 0;
      return (
        t.x < e.x ? (o = e.x - t.x) : t.x > N.maxX(e) && (o = t.x - N.maxX(e)),
        t.y < e.y ? (n = e.y - t.y) : t.y > N.maxY(e) && (n = t.y - N.maxY(e)),
        we.distance({ x: o, y: n }, { x: 0, y: 0 })
      );
    },
    delta: (e, t) => {
      let o = { x: N.minX(e), y: N.minY(e) },
        n = { x: N.minX(t), y: N.minY(t) };
      return { x: o.x - n.x, y: o.y - n.y };
    },
    withMinSize: (e, t) => {
      let { width: o, height: n } = t,
        r = e.width - o,
        i = e.height - n;
      return {
        width: Math.max(e.width, o),
        height: Math.max(e.height, n),
        x: e.width < o ? e.x + r / 2 : e.x,
        y: e.height < n ? e.y + i / 2 : e.y,
      };
    },
    anyPointsOutsideRect: (e, t) => {
      let o = N.minX(e),
        n = N.minY(e),
        r = N.maxX(e),
        i = N.maxY(e);
      for (let a of t) if (a.x < o || a.x > r || a.y < n || a.y > i) return !0;
      return !1;
    },
    edges: (e) => {
      let [t, o, n, r] = N.cornerPoints(e);
      return [rt(t, o), rt(o, n), rt(n, r), rt(r, t)];
    },
    rebaseRectOnto: (e, t, o, n) => {
      let r = { ...e };
      switch (o) {
        case "bottom":
        case "top":
          switch (n) {
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
              We(n);
          }
          break;
        case "left":
          r.x = t.x - e.width;
          break;
        case "right":
          r.x = t.x + t.width;
          break;
        default:
          We(o);
      }
      switch (o) {
        case "left":
        case "right":
          switch (n) {
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
              We(n);
          }
          break;
        case "top":
          r.y = t.y - e.height;
          break;
        case "bottom":
          r.y = t.y + t.height;
          break;
        default:
          We(o);
      }
      return r;
    },
    constrain: (e, t) => {
      if (!t) return e;
      let o = Math.max(e.y, t.y);
      o = Math.min(o, t.y + t.height - e.height);
      let n = Math.max(e.x, t.x);
      return (
        (n = Math.min(n, t.x + t.width - e.width)),
        { x: n, y: o, width: e.width, height: e.height }
      );
    },
    closestEdge: (e, t) => {
      let o = N.center(e),
        n = rt(t, o),
        r = N.edges(e);
      for (let i = 0; i < r.length; i++) {
        let a = r[i];
        if (a && rt.intersection(n, a, !0)) {
          let s = Fs[i];
          return (Rt(s, () => `Invalid edge name: ${JSON.stringify(Fs)}`), { edge: a, name: s });
        }
      }
    },
    closestRect: (e, t) => {
      let o = 0,
        n = e[0];
      Rt(n, "Rect array is empty");
      let r = N.pointDistance(n, t);
      for (let i = 1; i < e.length; i += 1) {
        let a = e[i];
        Rt(a);
        let s = N.pointDistance(a, t);
        if ((s < r && ((o = i), (n = a), (r = s)), r === 0)) break;
      }
      return { rect: n, index: o };
    },
  },
  Fs = ["top", "right", "bottom", "left"];
function Os(e, t, o) {
  let n = o ? `, use ${o} instead` : "",
    r = `Deprecation warning: ${e} will be removed in version ${t}${n}.`;
  hs(r);
}
var _o = class {
  observers = new Set();
  transactions = {};
  add(t) {
    this.observers.add(t);
    let o = !1;
    return () => {
      o || ((o = !0), this.remove(t));
    };
  }
  remove(t) {
    this.observers.delete(t);
  }
  notify(t, o) {
    if (o) {
      let n = this.transactions[o] || t;
      ((n.value = t.value), (this.transactions[o] = n));
    } else this.callObservers(t);
  }
  finishTransaction(t) {
    let o = this.transactions[t];
    return (delete this.transactions[t], this.callObservers(o, t));
  }
  callObservers(t, o) {
    let n = [];
    return (
      new Set(this.observers).forEach((r) => {
        typeof r == "function" ? r(t, o) : (r.update(t, o), n.push(r.finish));
      }),
      n
    );
  }
};
var ie = (() => {
    function e(t) {
      return (
        Os(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        Le(t) ? t : new Ur(t)
      );
    }
    return (
      (e.transaction = (t) => {
        let o = Math.random(),
          n = new Set();
        t((a, s) => {
          (a.set(s, o), n.add(a));
        }, o);
        let i = [];
        (n.forEach((a) => {
          i.push(...a.finishTransaction(o));
        }),
          i.forEach((a) => {
            a(o);
          }));
      }),
      (e.getNumber = (t, o = 0) => e.get(t, o)),
      (e.get = (t, o) => (t == null ? o : Le(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let o = {};
        for (let n in t) {
          let r = t[n];
          Le(r) ? (o[n] = r.get()) : (o[n] = r);
        }
        return o;
      }),
      e
    );
  })(),
  Ws = "onUpdate",
  zs = "finishTransaction";
function Le(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    Ws in e &&
    e[Ws] instanceof Function &&
    zs in e &&
    e[zs] instanceof Function
  );
}
function Yf(e, t) {
  return {
    interpolate(o, n) {
      let r = o.get(),
        i = n.get(),
        a = ie(r);
      return (s) => {
        let l = t.interpolate(r, i)(s);
        return (a.set(l), a);
      };
    },
    difference(o, n) {
      let r = o.get();
      return t.difference(r, n.get());
    },
  };
}
var Ur = class {
  constructor(t) {
    this.value = t;
  }
  value;
  observers = new _o();
  static interpolationFor(t, o) {
    if (Le(t)) return Yf(t, o);
  }
  get() {
    return this.value;
  }
  set(t, o) {
    let n = this.value;
    (Le(t) && (t = t.get()), (this.value = t));
    let r = { value: t, oldValue: n };
    this.observers.notify(r, o);
  }
  finishTransaction(t) {
    return this.observers.finishTransaction(t);
  }
  onUpdate(t) {
    return this.observers.add(t);
  }
};
function Jf(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function $o(e) {
  return typeof e != "string" && typeof e != "number";
}
function Ko(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !Jf(e);
}
function P(e) {
  return Number.isFinite(e);
}
function PS(e) {
  return P(e) ? e : void 0;
}
var BS = {
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
  qo = ((a) => (
    (a[(a.FixedNumber = 0)] = "FixedNumber"),
    (a[(a.Percentage = 1)] = "Percentage"),
    (a[(a.Auto = 2)] = "Auto"),
    (a[(a.FractionOfFreeSpace = 3)] = "FractionOfFreeSpace"),
    (a[(a.Viewport = 4)] = "Viewport"),
    (a[(a.FitImage = 5)] = "FitImage"),
    a
  ))(qo || {});
function vt(e) {
  return St(e) ? !1 : e === 2 || e === 5;
}
function AS(e) {
  return !(!Ko(e) || !$o(e));
}
var qr = {
  quickfix: (e) => (
    (vt(e.widthType) || vt(e.heightType)) && (e.aspectRatio = null),
    P(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || vt(e.widthType) || P(e.maxWidth)) && (e.right = !1), (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || vt(e.heightType) || P(e.maxHeight)) && (e.bottom = !1), (e.heightType = 0)),
    e
  ),
};
function so(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var Xr = {
    fromProperties: (e) => {
      let {
          left: t,
          right: o,
          top: n,
          bottom: r,
          width: i,
          height: a,
          centerX: s,
          centerY: l,
          aspectRatio: u,
          autoSize: c,
        } = e,
        m = qr.quickfix({
          left: P(t) || Le(t),
          right: P(o) || Le(o),
          top: P(n) || Le(n),
          bottom: P(r) || Le(r),
          widthType: so(i),
          heightType: so(a),
          aspectRatio: u || null,
          fixedSize: c === !0,
        }),
        f = null,
        h = null,
        C = 0,
        V = 0;
      if (m.widthType !== 0 && typeof i == "string") {
        let T = parseFloat(i);
        i.endsWith("fr") ? ((C = 3), (f = T)) : i === "auto" ? (C = 2) : ((C = 1), (f = T / 100));
      } else i !== void 0 && typeof i != "string" && (f = ie.getNumber(i));
      if (m.heightType !== 0 && typeof a == "string") {
        let T = parseFloat(a);
        a.endsWith("fr")
          ? ((V = 3), (h = T))
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
          right: m.right ? ie.getNumber(o) : null,
          top: m.top ? ie.getNumber(n) : null,
          bottom: m.bottom ? ie.getNumber(r) : null,
          widthType: C,
          heightType: V,
          width: f,
          height: h,
          aspectRatio: m.aspectRatio || null,
          centerAnchorX: R,
          centerAnchorY: y,
        }
      );
    },
    toSize: (e, t, o, n) => {
      let r = null,
        i = null,
        a = t?.sizing ? ie.getNumber(t?.sizing.width) : null,
        s = t?.sizing ? ie.getNumber(t?.sizing.height) : null,
        l = Hs(e.left, e.right);
      if (a && P(l)) r = a - l;
      else if (o && vt(e.widthType)) r = o.width;
      else if (P(e.width))
        switch (e.widthType) {
          case 0:
            r = e.width;
            break;
          case 3:
            r = n ? (n.freeSpaceInParent.width / n.freeSpaceUnitDivisor.width) * e.width : null;
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
      let u = Hs(e.top, e.bottom);
      if (s && P(u)) i = s - u;
      else if (o && vt(e.heightType)) i = o.height;
      else if (P(e.height))
        switch (e.heightType) {
          case 0:
            i = e.height;
            break;
          case 3:
            i = n ? (n.freeSpaceInParent.height / n.freeSpaceUnitDivisor.height) * e.height : null;
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
      return nm(r, i, e, { height: s ?? 0, width: a ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, o = null, n = !1, r = null) => {
      let i = e.left || 0,
        a = e.top || 0,
        { width: s, height: l } = Xr.toSize(e, t, o, r),
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
      return n ? N.pixelAligned(f) : f;
    },
  },
  Zf = 200,
  Qf = 200;
function Uo(e, t, o, n) {
  if (typeof t == "string") {
    if (t.endsWith("%") && o)
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
    if (t.endsWith("vh")) {
      if (!n) return em(e);
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
    }
    return parseFloat(t);
  }
  return t;
}
function em(e) {
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
function tm(e, t, o, n) {
  return (
    t.minHeight && (e = Math.max(Uo("minHeight", t.minHeight, o, n), e)),
    t.maxHeight && (e = Math.min(Uo("maxHeight", t.maxHeight, o, n), e)),
    e
  );
}
function om(e, t, o, n) {
  return (
    t.minWidth && (e = Math.max(Uo("minWidth", t.minWidth, o, n), e)),
    t.maxWidth && (e = Math.min(Uo("maxWidth", t.maxWidth, o, n), e)),
    e
  );
}
function nm(e, t, o, n, r) {
  let i = om(P(e) ? e : Zf, o, n, r),
    a = tm(P(t) ? t : Qf, o, n, r);
  return (
    P(o.aspectRatio) &&
      o.aspectRatio > 0 &&
      (P(o.left) && P(o.right)
        ? (a = i / o.aspectRatio)
        : P(o.top) && P(o.bottom)
          ? (i = a * o.aspectRatio)
          : o.widthType !== 0
            ? (a = i / o.aspectRatio)
            : (i = a * o.aspectRatio)),
    { width: i, height: a }
  );
}
function Hs(e, t) {
  return !P(e) || !P(t) ? null : e + t;
}
var rm = /^local-module:([a-zA-Z\d]+\/[^:]+)(?::(.+))?$/u,
  im = /^module:([a-zA-Z\d]{20})\/([a-zA-Z\d]{20})\/([^:]+)(?::(.+))?$/u;
function zS(e) {
  return e === "codeFile" || e === "shader";
}
function HS(e) {
  try {
    let t = e;
    switch (t) {
      case "canvasComponent":
      case "codeFile":
      case "collection":
      case "draftCollection":
      case "componentPresets":
      case "prototype":
      case "screen":
      case "css":
      case "webPageMetadata":
      case "siteMetadata":
      case "layoutTemplate":
      case "localization":
      case "vector":
      case "vectorSet":
      case "design":
      case "config":
      case "snippets":
      case "shader":
        return !0;
      default:
        w(t);
    }
  } catch {
    return !1;
  }
}
function GS(e) {
  return e.kind === "externalModuleExport"
    ? `module:${e.moduleId}/${e.saveId}/${e.file}`
    : e.kind === "localModuleExport"
      ? `local-module:${e.localId}`
      : e.value;
}
function Gs(e) {
  return (
    typeof e == "string" && (e = ye(e)),
    e?.kind === "externalModule" || e?.kind === "externalModuleExport"
  );
}
function Xo(e) {
  return (
    typeof e == "string" && (e = ye(e)),
    e?.kind === "localModule" || e?.kind === "localModuleExport"
  );
}
function Ie(e) {
  return (
    typeof e == "string" && (e = ye(e)),
    e?.kind === "externalModuleExport" || e?.kind === "localModuleExport"
  );
}
function jS(e) {
  return (
    typeof e == "string" && (e = ye(e)),
    e
      ? e.kind === "externalModule" ||
        e.kind === "externalModuleExport" ||
        e.kind === "localModule" ||
        e.kind === "localModuleExport"
      : !1
  );
}
function lo(e, t, o, n) {
  let r = `${e}/${t}/${o}`,
    i = `${us().modulesCDN}/${r}`;
  return n
    ? {
        kind: "externalModuleExport",
        value: `module:${r}:${n}`,
        bareValue: `module:${r}`,
        moduleId: e,
        saveId: t,
        file: o,
        importSpecifier: i,
        exportSpecifier: n,
      }
    : {
        kind: "externalModule",
        value: `module:${r}`,
        moduleId: e,
        saveId: t,
        file: o,
        importSpecifier: i,
      };
}
function kt(e, t) {
  let { type: o, name: n } = sm(e);
  return t
    ? {
        kind: "localModuleExport",
        value: `local-module:${e}:${t}`,
        bareValue: `local-module:${e}`,
        localId: e,
        type: o,
        localIdName: n,
        exportSpecifier: t,
      }
    : { kind: "localModule", value: `local-module:${e}`, localId: e, type: o, localIdName: n };
}
function _S(e) {
  let t = e.indexOf("/");
  return [e.substring(0, t), e.substring(t + 1)];
}
function am(e, t) {
  return `${e}/${t}`;
}
function sm(e) {
  let [t, o] = e.split("/", 2);
  if (!t || !o) throw Error(`Invalid local id: ${e}`);
  return { type: t, name: o };
}
function $S(e, t, o) {
  let n = am(e, t);
  return kt(n, o);
}
function ye(e) {
  if (!e) return;
  let t = e.match(rm);
  if (t) {
    x(t[1], "The localId match from the module identifier should be defined.");
    let n = t[1],
      r = t[2];
    return kt(n, r);
  }
  let o = e.match(im);
  if (o) {
    let [, n, r, i, a] = o;
    return (
      x(n, "The moduleId match from the module identifier should be defined."),
      x(r, "The saveId match from the module identifier should be defined."),
      x(i, "The path match from the module identifier should be defined."),
      lo(n, r, i, a)
    );
  }
}
function KS(e, t, o, n) {
  if (e.kind === "localModule") return lo(t, o, n);
  if (e.kind === "localModuleExport") return lo(t, o, n, e.exportSpecifier);
  w(e);
}
function US(e, t) {
  if (e.kind === "externalModule") return kt(t);
  if (e.kind === "externalModuleExport") return kt(t, e.exportSpecifier);
  w(e);
}
function qS(e, t) {
  if (e.kind === "externalModule" || e.kind === "externalModuleExport")
    return lo(e.moduleId, e.saveId, e.file, t);
  if (e.kind === "localModule" || e.kind === "localModuleExport") return kt(e.localId, t);
  w(e);
}
function XS(e) {
  if (e.kind === "externalModule" || e.kind === "localModule") return e;
  if (e.kind === "externalModuleExport") return lo(e.moduleId, e.saveId, e.file);
  if (e.kind === "localModuleExport") return kt(e.localId);
  w(e);
}
function YS(e) {
  return e;
}
function JS(e) {
  let t = e.indexOf(":");
  return t === -1
    ? { localId: e, exportSpecifier: void 0 }
    : { localId: e.slice(0, t), exportSpecifier: e.slice(t + 1) };
}
function ZS(e, t) {
  return `#framer/local/${e}/${t}`;
}
function QS(e) {
  return e.startsWith("#framer/local/");
}
function eN(e) {
  return e.startsWith("!missing/");
}
var Dt = ((d) => (
  (d.AbTestsEntityTypeRootNode = "AbTestsEntityTypeRootNode"),
  (d.AgentDragSelectTool = "AgentDragSelectTool"),
  (d.AgentPanelTool = "AgentPanelTool"),
  (d.AgentSelectTool = "AgentSelectTool"),
  (d.AgentSkillNode = "AgentSkillNode"),
  (d.AgentSkillsListNode = "AgentSkillsListNode"),
  (d.AnalyticsScopeNode = "AnalyticsScopeNode"),
  (d.AssetsEntityTypeRootNode = "AssetsEntityTypeRootNode"),
  (d.BlockquoteEntityTypeRootNode = "BlockquoteEntityTypeRootNode"),
  (d.BlockquoteStylePresetNode = "BlockquoteStylePresetNode"),
  (d.BooleanShapeNode = "BooleanShapeNode"),
  (d.BoxShadow = "BoxShadow"),
  (d.BranchNode = "BranchNode"),
  (d.BranchesNode = "BranchesNode"),
  (d.CanvasNode = "CanvasNode"),
  (d.CanvasPageNode = "CanvasPageNode"),
  (d.CanvasScopeNode = "CanvasScopeNode"),
  (d.ChatTool = "ChatTool"),
  (d.CMSEntityTypeRootNode = "CMSEntityTypeRootNode"),
  (d.CodeComponentNode = "CodeComponentNode"),
  (d.CodeFileEntityTypeRootNode = "CodeFileEntityTypeRootNode"),
  (d.CollectionReferenceVariableEditTool = "CollectionReferenceVariableEditTool"),
  (d.CollectionItemNode = "CollectionItemNode"),
  (d.CollectionNode = "CollectionNode"),
  (d.Color = "Color"),
  (d.ColorEntityTypeRootNode = "ColorEntityTypeRootNode"),
  (d.ColorStyleTokenListNode = "ColorStyleTokenListNode"),
  (d.ColorStyleTokenNode = "ColorStyleTokenNode"),
  (d.ComponentEntityTypeRootNode = "ComponentEntityTypeRootNode"),
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
  (d.InlineCodeEntityTypeRootNode = "InlineCodeEntityTypeRootNode"),
  (d.InlineCodeStylePresetNode = "InlineCodeStylePresetNode"),
  (d.LayoutTemplateEntityTypeRootNode = "LayoutTemplateEntityTypeRootNode"),
  (d.LayoutTemplateNode = "LayoutTemplateNode"),
  (d.LineAnchorMoveTool = "LineAnchorMoveTool"),
  (d.LinearGradient = "LinearGradient"),
  (d.LinkEntityTypeRootNode = "LinkEntityTypeRootNode"),
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
  (d.TextEntityTypeRootNode = "TextEntityTypeRootNode"),
  (d.TextNode = "TextNode"),
  (d.TextStylePresetNode = "TextStylePresetNode"),
  (d.VectorSetEntityTypeRootNode = "VectorSetEntityTypeRootNode"),
  (d.VectorSetNode = "VectorSetNode"),
  (d.VekterGradientTool = "VekterGradientTool"),
  (d.VekterPathEngine = "VekterPathEngine"),
  (d.VekterTool = "VekterTool"),
  (d.ViewportResizeTool = "ViewportResizeTool"),
  (d.WebPageNode = "WebPageNode"),
  (d.ZoomSelectTool = "ZoomSelectTool"),
  (d.ZoomTool = "ZoomTool"),
  d
))(Dt || {});
function js(e, t = class {}) {
  class o extends t {
    __class = Dt[e];
    static displayName = `WithClassDiscriminatorMixin(${e})`;
  }
  return ((o.prototype.__class = e), o);
}
function oN(e, t) {
  ((e.prototype.__class = t), (e.displayName = `WithClassDiscriminatorMixin(${t})`));
}
var lm = new Set(Object.keys(Dt));
function _s(e) {
  return lm.has(e);
}
function $s(e) {
  if (!_s(e)) return !1;
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
    case "BlockquoteEntityTypeRootNode":
    case "BlockquoteStylePresetNode":
    case "BooleanShapeNode":
    case "BoxShadow":
    case "BranchNode":
    case "BranchesNode":
    case "CanvasNode":
    case "ChatTool":
    case "CMSEntityTypeRootNode":
    case "CodeComponentNode":
    case "CodeFileEntityTypeRootNode":
    case "CollectionReferenceVariableEditTool":
    case "CollectionItemNode":
    case "CollectionNode":
    case "Color":
    case "ColorEntityTypeRootNode":
    case "ColorStyleTokenListNode":
    case "ColorStyleTokenNode":
    case "ComponentEntityTypeRootNode":
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
    case "InlineCodeEntityTypeRootNode":
    case "InlineCodeStylePresetNode":
    case "LayoutTemplateEntityTypeRootNode":
    case "LineAnchorMoveTool":
    case "LinearGradient":
    case "LinkEntityTypeRootNode":
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
    case "TextEntityTypeRootNode":
    case "TextNode":
    case "TextStylePresetNode":
    case "VectorSetEntityTypeRootNode":
    case "VekterGradientTool":
    case "VekterPathEngine":
    case "VekterTool":
    case "ViewportResizeTool":
    case "ZoomSelectTool":
    case "ZoomTool":
      return !1;
    default:
      return w(e);
  }
}
function Ks(e) {
  return e ? (e === "RootNode" ? !0 : Yr(e)) : !1;
}
function Yr(e) {
  return e
    ? !!(um(e) || Jr(e) || e === "OverlayNode" || e === "SlotNode" || e === "SlotPropertyNode")
    : !1;
}
function um(e) {
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
function Jr(e) {
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
function Us(e) {
  switch (e) {
    case "CollectionNode":
    case "CollectionItemNode":
    case "ContentManagementNode":
      return !0;
    default:
      return !1;
  }
}
function dN(e) {
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
function cN(e) {
  return e ? $s(e) : !1;
}
function pN(e) {
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
function fN(e) {
  switch (e) {
    case "AbTestsEntityTypeRootNode":
    case "AssetsEntityTypeRootNode":
    case "BlockquoteEntityTypeRootNode":
    case "CMSEntityTypeRootNode":
    case "CodeFileEntityTypeRootNode":
    case "ColorEntityTypeRootNode":
    case "ComponentEntityTypeRootNode":
    case "ContentManagementEntityTypeRootNode":
    case "DesignPageEntityTypeRootNode":
    case "FunnelsEntityTypeRootNode":
    case "InlineCodeEntityTypeRootNode":
    case "LayoutTemplateEntityTypeRootNode":
    case "LinkEntityTypeRootNode":
    case "TextEntityTypeRootNode":
    case "VectorSetEntityTypeRootNode":
      return !0;
    default:
      return !1;
  }
}
function D(e, t) {
  return e?.__class === t;
}
function xN(e) {
  return D(e, "RootNode");
}
function gN(e) {
  return D(e, "AgentSkillNode");
}
function bN(e) {
  return D(e, "AgentSkillsListNode");
}
function TN(e) {
  return D(e, "DatabaseListNode");
}
function Zr(e) {
  return D(e, "FrameNode");
}
function qs(e) {
  return Zr(e) && e.layout === "stack";
}
function Xs(e) {
  return Zr(e) && e.layout === "grid";
}
function CN(e) {
  return Zr(e) && e.layout !== void 0;
}
function Qr(e) {
  return !e || (!qs(e) && !Xs(e)) ? !1 : !!e.dataIdentifier;
}
function dm(e) {
  return !e || (!qs(e) && !Xs(e)) || e.dataIdentifier ? !1 : !!e.dataRepeaterArray;
}
function Me(e) {
  return e ? Qr(e) || dm(e) : !1;
}
function wt(e) {
  return D(e, "SmartComponentNode");
}
function Lt(e) {
  return e?.__class === "LayoutTemplateNode";
}
function Ys(e) {
  return e?.__class === "VectorSetNode";
}
function ze(e) {
  return D(e, "WebPageNode");
}
function VN(e) {
  return e?.__class === "DesignPageNode";
}
function Js(e) {
  return e?.__class === "CanvasPageNode";
}
function SN(e) {
  return D(e, "ContentManagementNode");
}
function NN(e) {
  return e?.__class === "TextNode";
}
function He(e) {
  return D(e, "RichTextNode");
}
function cm(e) {
  return D(e, "CodeComponentNode");
}
function RN(e) {
  return D(e, "ShaderNode");
}
function IN(e) {
  return D(e, "OverlayNode");
}
function Zs(e) {
  return D(e, "SVGNode");
}
function Yo(e) {
  return D(e, "CollectionNode");
}
function Qs(e) {
  return D(e, "CollectionItemNode");
}
function PN(e) {
  return e?.__class === "BranchNode";
}
function vN(e) {
  return D(e, "BranchesNode");
}
function Jo(e) {
  return D(e, "ShapeContainerNode");
}
function kN(e) {
  return e?.__class === "BooleanShapeNode";
}
function DN(e) {
  return e?.__class === "ShapeGroupNode";
}
function wN(e) {
  return e?.__class === "PathNode";
}
function LN(e) {
  return e?.__class === "RectangleShapeNode";
}
function MN(e) {
  return e?.__class === "StarShapeNode";
}
function EN(e) {
  return e?.__class === "OvalShapeNode";
}
function BN(e) {
  return e?.__class === "PolygonShapeNode";
}
function AN(e) {
  return D(e, "RoutesNode");
}
function FN(e) {
  return D(e, "RedirectRouteNode");
}
function ON(e) {
  return D(e, "ProxyRouteNode");
}
function WN(e) {
  return D(e, "RewriteRouteNode");
}
function zN(e) {
  return D(e, "HeaderRouteNode");
}
function HN(e) {
  return D(e, "FirewallRouteNode");
}
function GN(e) {
  return D(e, "ColorStyleTokenNode");
}
function jN(e) {
  return D(e, "ColorStyleTokenListNode");
}
function _N(e) {
  return D(e, "ErrorListNode");
}
function $N(e) {
  return e?.__class === "ErrorNode";
}
function KN(e) {
  return e?.__class === "FormPlainTextInputNode";
}
function UN(e) {
  return e?.__class === "FormBooleanInputNode";
}
function qN(e) {
  return e?.__class === "FormSelectNode";
}
function XN(e) {
  return D(e, "ComponentPresetNode");
}
function YN(e) {
  return D(e, "PresetsListNode");
}
function ei(e) {
  return e?.__class === "TextStylePresetNode";
}
function JN(e) {
  return ei(e) && !e.replicaInfo;
}
function ZN(e) {
  return ei(e) && !!e.replicaInfo;
}
function QN(e) {
  return e?.__class === "LinkStylePresetNode";
}
function el(e) {
  return e?.__class === "BlockquoteStylePresetNode";
}
function eR(e) {
  return e?.__class === "TableStylePresetNode";
}
function tR(e) {
  return el(e) && !e.replicaInfo;
}
function oR(e) {
  return !!e?.replicaInfo && (ei(e) || el(e));
}
function nR(e) {
  return e?.__class === "ImageStylePresetNode";
}
function rR(e) {
  return e?.__class === "InlineCodeStylePresetNode";
}
function Zo(e) {
  return D(e, "RouteSegmentNode");
}
function iR(e) {
  return D(e, "RouteSegmentRootNode");
}
function tl(e) {
  return D(e, "SlotNode");
}
function Qo(e) {
  return D(e, "SlotPropertyNode");
}
function aR(e) {
  return D(e, "EntityFolderNode");
}
function sR(e) {
  return D(e, "EntityReferenceNode");
}
function lR(e) {
  return D(e, "ExternalModulesListNode");
}
function uR(e) {
  return e?.__class === "ExternalModuleNode";
}
function dR(e) {
  return D(e, "AnalyticsScopeNode");
}
function cR(e) {
  return e?.__class === "LocalizationGlossaryNode";
}
function pR(e) {
  return e?.__class === "LocalizationGlossaryItemNode";
}
function fR(e) {
  return D(e, "FunnelNode");
}
function mR(e) {
  return D(e, "FunnelStepNode");
}
function yR(e) {
  return D(e, "FunnelStepActionNode");
}
function pm(e) {
  return e ? cm(e) && e.isVectorInstance : !1;
}
function hR(e) {
  if (!pm(e)) return !1;
  let t = e.dynamicVectorSetIdentifier;
  return t?.type === "variableReference" || t?.type === "computedValue";
}
function xR(e) {
  return e?.__class === "CustomCodeScopeNode";
}
function gR(e) {
  return e?.__class === "CustomCodeNode";
}
var ol = "hidden master",
  TR = { isMaster: !1, isExternalMaster: null, replicaInfo: null },
  fm = "isMaster";
function uo(e) {
  return fm in e;
}
function Mt(e) {
  return uo(e) && e.isMaster;
}
function CR(e) {
  return uo(e) && !!e.isExternalMaster;
}
function VR(e) {
  let t = uo(e) ? e.isExternalMaster : null;
  return !!t && t !== ol;
}
function SR(e) {
  return uo(e) ? e.isExternalMaster === ol : !1;
}
function co(e) {
  return e ? uo(e) && !!e.replicaInfo : !1;
}
function NR(e) {
  return e ? !co(e) : !1;
}
function nl(e) {
  return co(e) && !!e.replicaInfo.inheritsFrom;
}
function Et(e) {
  return !!e.originalid && !co(e);
}
function RR(e) {
  return !!e.originalid;
}
function rl(e) {
  for (let t of e.ancestors()) if (Mt(t)) return !0;
  return !1;
}
function IR(e) {
  return Mt(e) || rl(e);
}
function PR(e, { includeSelf: t } = { includeSelf: !0 }) {
  if (t && Mt(e)) return e;
  for (let o of e.ancestors()) if (Mt(o)) return o;
  return null;
}
function vR(e) {
  return Et(e) || rl(e);
}
function Bt(e) {
  return B(e) && e.length === 4 && e.every(S);
}
function il(e) {
  return Bt(e) ? [Math.min(Math.max(e[0], 0), 1), e[1], Math.min(Math.max(e[2], 0), 1), e[3]] : e;
}
function en(e) {
  for (let t of Reflect.ownKeys(e)) {
    let o = e[t];
    !o || (typeof o != "object" && !Is(o)) || en(o);
  }
  return Object.freeze(e);
}
var mm = {
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
en(mm);
var po = {
  type: "spring",
  ease: [0.44, 0, 0.56, 1],
  duration: 0.3,
  delay: 0,
  stiffness: 500,
  damping: 60,
  mass: 1,
  stagger: 0,
};
en(po);
var At = "type",
  tn = "durationBasedSpring",
  nn = "ease",
  ym = "duration",
  hm = "delay",
  al = "stiffness",
  sl = "damping",
  xm = "mass",
  ri = [ym, hm, al, sl, xm],
  ti = "bounce",
  on = "stagger";
function fo(e) {
  return e === "spring" || e === "tween" || e === "inertia" || e === !1;
}
function ii(e) {
  return !b(e) || !fo(e[At]) || !Bt(e[nn]) ? !1 : ri.every((t) => S(e[t]));
}
function rn(e) {
  return b(e) ? (fo(e[At]) || Bt(e[nn]) ? !0 : ri.some((t) => S(e[t]))) : !1;
}
function ll(e) {
  switch (e.type) {
    case "spring":
      return { type: "spring", ...Nm(e), delay: e.delay };
    case "tween":
      return { type: "tween", duration: e.duration, ease: il(e.ease), delay: e.delay };
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
      w(e.type);
  }
}
var gm = ["stiffness", "damping", "mass"],
  bm = ["duration", "bounce"],
  Tm = ["ease"];
function Cm(e) {
  return "type" in e
    ? e.type === !1
      ? !0
      : e.type !== "tween" || Tm.some((t) => t in e)
        ? !1
        : e.duration === 0
    : !1;
}
function Vm(e) {
  return e.type !== "spring" || gm.some((t) => t in e) ? !1 : bm.some((t) => t in e);
}
var oi = "bounceStiffness",
  ni = "bounceDamping",
  Sm = (e) => {
    let t = { ...po },
      o = e[At];
    fo(o) && (t[At] = Cm(e) ? !1 : o);
    let n = e[nn];
    Bt(n) && (t[nn] = n);
    for (let r of ri) {
      let i = e[r];
      S(i) && (t[r] = i);
    }
    return (
      oi in e && S(e[oi]) && (t[al] = e[oi]),
      ni in e && S(e[ni]) && (t[sl] = e[ni]),
      on in e && S(e[on]) && (t[on] = e[on]),
      tn in e ? (t[tn] = e[tn]) : Vm(e) && (t[tn] = !0),
      ti in e && (t[ti] = e[ti]),
      t
    );
  };
function ul(e) {
  return rn(e) && !fo(e[At]);
}
function HR(e) {
  return b(e) && fo(e[At]) ? e : rn(e) ? Sm(e) : po;
}
function GR(e) {
  return ii(e) && e.type === "tween";
}
function jR(e) {
  return `all ${e.duration}s cubic-bezier(${e.ease.join(",")}) ${e.delay}s`;
}
function Nm(e) {
  return e.type === "spring" && e.durationBasedSpring
    ? { duration: Math.min(e.duration, 10), bounce: e.bounce ?? 0 }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
var _R = (e) => e * 1e3;
var z = ((k) => (
    (k.Boolean = "boolean"),
    (k.Number = "number"),
    (k.MotionValue = "motionvalue"),
    (k.Dimension = "dimension"),
    (k.String = "string"),
    (k.RichText = "richtext"),
    (k.FusedNumber = "fusednumber"),
    (k.Enum = "enum"),
    (k.SegmentedEnum = "segmentedenum"),
    (k.Color = "color"),
    (k.Image = "image"),
    (k.ResponsiveImage = "responsiveimage"),
    (k.File = "file"),
    (k.ComponentInstance = "componentinstance"),
    (k.Slot = "slot"),
    (k.Array = "array"),
    (k.EventHandler = "eventhandler"),
    (k.ChangeHandler = "changehandler"),
    (k.Transition = "transition"),
    (k.BoxShadow = "boxshadow"),
    (k.Link = "link"),
    (k.Date = "date"),
    (k.Object = "object"),
    (k.Font = "font"),
    (k.PageScope = "pagescope"),
    (k.ScrollSectionRef = "scrollsectionref"),
    (k.CustomCursor = "customcursor"),
    (k.Border = "border"),
    (k.Cursor = "cursor"),
    (k.Padding = "padding"),
    (k.BorderRadius = "borderradius"),
    (k.Gap = "gap"),
    (k.CollectionReference = "collectionreference"),
    (k.MultiCollectionReference = "multicollectionreference"),
    (k.TrackingId = "trackingid"),
    (k.VectorSetItem = "vectorsetitem"),
    (k.LinkRelValues = "linkrelvalues"),
    (k.Location = "location"),
    k
  ))(z || {}),
  Rm = {
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
function KR(e) {
  return e.type in Rm;
}
var Im = /^(?![\p{L}\p{M}\d-]*-$)(?!-)[\p{L}\p{M}\d-]+$/u,
  dl = /^(?:[\p{L}\p{M}\d](?:[\p{L}\p{M}\d-]*[\p{L}\p{M}\d])?\.)+[\p{L}\p{M}]+$/u;
function qR(e, t) {
  return e
    ? t && e === "www"
      ? "InvalidPhrase"
      : (t ? Im : dl).exec(e)
        ? null
        : "InvalidCharacter"
    : "Empty";
}
function ai(e, t = !1) {
  try {
    let o = new URL(e);
    return o.protocol === "http:" || o.protocol === "https:"
      ? o.hostname === "localhost"
        ? !0
        : dl.test(o.hostname)
      : !t;
  } catch {
    return !1;
  }
}
function XR(e) {
  let t = e.split(/#|\?/u)[0];
  if (!t) return !1;
  let [o, n = ""] = t.split("/", 2),
    r = "/" + n,
    i = new URL("https://example.com");
  return (
    (i.host = o),
    (i.pathname = r),
    !!i.hostname.match(/.+\..+/) && i.href === `https://${o}/${n}`
  );
}
function si(e) {
  return (
    (e = e.trim()),
    e
      ? ai(e, !0)
        ? { result: "ok", normalizedValue: e }
        : ai(`https://${e}`)
          ? { result: "ok", normalizedValue: `https://${e}` }
          : { result: "error", message: "Please enter a valid URL" }
      : { result: "error", message: "Please enter a valid URL" }
  );
}
var cl = ":([a-z]\\w*)",
  QR = new RegExp(cl, "i"),
  li = new RegExp(cl, "gi");
var pl = "type",
  Pm = "fetchDataValue";
function an(e) {
  return b(e) && pl in e && e[pl] === Pm;
}
function sI(e) {
  return si(e.url).result !== "error";
}
function lI(e) {
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
function uI(e) {
  if (e.controlProp) return e.controlProp.value;
  let t = e.fallbackValue;
  return (x(!I(t), "fallbackValue must be defined"), t);
}
function dI(e) {
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
function ml(e, t) {
  if (
    !an(t) ||
    e.url !== t.url ||
    e.resultKeyPath !== t.resultKeyPath ||
    e.cacheDuration !== t.cacheDuration ||
    e.fallbackValue !== t.fallbackValue
  )
    return !1;
  let o = fl(e.url),
    n = fl(t.url);
  if (o.length !== n.length) return !1;
  for (let r in e.variables) if (!ce(e.variables[r], t.variables[r])) return !1;
  return !0;
}
function cI(e, t) {
  let o = si(e.url);
  return o.result !== "ok"
    ? e.url
    : o.normalizedValue.replaceAll(li, (i, a) => {
        let s = e.variables[a];
        return s ? (p(s) ? s : t(s)) : "";
      });
}
function fl(e) {
  let t = e.matchAll(li),
    o = new Set();
  for (let n of t) {
    let r = n[1];
    r && r.length !== 0 && o.add(r);
  }
  return Array.from(o);
}
var pI = [
  "https://api.fetch.tools/weather?city=:city",
  "https://api.fetch.tools/views",
  "https://api.fetch.tools/location",
  "https://api.fetch.tools/emoji",
];
var yl = {
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
    controlReference: !0,
    nodePropertyControlReference: !0,
    slug: !0,
  },
  vm = {
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
function sn(e) {
  return p(e) && Object.hasOwn(yl, e);
}
function mo(e) {
  return p(e) && Object.hasOwn(vm, e);
}
var xI = mo,
  km = { boolean: !0, number: !0, string: !0, color: !0, date: !0, link: !0, image: !0 };
function gI(e) {
  return p(e) && Object.hasOwn(km, e);
}
function bI(e) {
  return zo(yl).filter(e);
}
var Dm = { responsiveimage: !0 };
function kI(e) {
  return sn(e) ? !0 : p(e) && e in Dm;
}
var wm = "type",
  Lm = "valueTransform",
  Mm = [
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
  Em = new Set(Mm),
  Bm = {
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
function Am(e) {
  return Em.has(e);
}
function Fm(e) {
  return Object.hasOwn(Bm, e);
}
var Om = {
  enumToDisplayName: !0,
  convertFromEnum: !0,
  convertFromBoolean: !0,
  convertFromString: !0,
  arrayToArray: !0,
  toDateString: !0,
};
function Wm(e) {
  return Object.hasOwn(Om, e);
}
var zm = {
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
  un = ws(zm);
function DI() {
  return un;
}
function Hm(e) {
  let t = ui[e];
  return !(Ve(t) || I(t));
}
function wI(e) {
  return Hm(e.name);
}
function LI(e) {
  return Am(e.name) && xl(e.name) !== null;
}
function Gm(e) {
  return Fm(e) || Wm(e);
}
var hl = [
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
function MI(e) {
  return hl.includes(e);
}
var ui = {
    contains: ["string", "multicollectionreference"],
    containsAny: ["multicollectionreference"],
    containsAll: ["multicollectionreference"],
    endsWith: ["string"],
    startsWith: ["string"],
    prefix: ["string"],
    suffix: ["string"],
    equals: ["string", "boolean", "number", "enum", "date", "collectionreference"],
    isSet: hl,
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
  jm = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of un) {
        let o = ui[t];
        if (o)
          for (let n of o) {
            let r = e.get(n);
            r ? r.push(t) : e.set(n, [t]);
          }
      }
      return e;
    };
  })();
function _m(e) {
  return jm().get(e);
}
function EI(e) {
  let t = _m(e);
  return !!(t && t.length > 0);
}
function xl(e) {
  return ui[e];
}
var $m = {
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
function BI(e) {
  return $m[e];
}
var di = {
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
  Km = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of un) {
        let o = di[t];
        for (let n of o) {
          let r = e.get(n);
          r ? r.push(t) : e.set(n, [t]);
        }
      }
      return e;
    };
  })();
function AI(e) {
  return Km().get(e);
}
function gl(e) {
  return di[e];
}
function FI(e, t) {
  return Gm(e.name) ? di[e.name].includes(t) : !1;
}
function OI(e) {
  switch (e.name) {
    case "convertFromEnum":
    case "convertFromBoolean":
    case "convertFromString":
      return e.outputType;
    default: {
      let t = gl(e.name);
      x(t.length === 1);
      let o = t[0];
      return (x(o, "Value transform output type must be defined"), o);
    }
  }
}
var WI = new Set(["convertFromBoolean", "equals", "isSet"]),
  bl = {
    isSet: "Isn\u2019t set",
    equals: "Doesn\u2019t equal",
    startsWith: "Doesn\u2019t start with",
    endsWith: "Doesn\u2019t end with",
    contains: "Doesn\u2019t contain",
    greaterThan: "Less than or equal",
    lessThan: "Greater than or equal",
    isIncludedIn: "Isn\u2019t included in",
  };
function Tl(e) {
  return Object.hasOwn(bl, e);
}
function zI(e, t) {
  if (t) return (x(Tl(e)), bl[e]);
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
var Um = new Set(["prefix", "suffix"]);
function qm(e) {
  return Um.has(e);
}
var ln;
function Xm(e) {
  return (
    ln ||
      (ln = new Set(
        un.filter((t) => {
          let o = xl(t);
          if (o?.length !== 1 || o[0] !== "array") return !1;
          let n = gl(t);
          return n.length !== 1 ? !1 : n[0] === "array";
        })
      )),
    ln.has(e)
  );
}
function HI(e) {
  return Xm(e) || qm(e);
}
function GI(e, t) {
  let o = e.findIndex((i) => i.id === t),
    n = e[o];
  if (!n) return null;
  let r = 1;
  if (Tl(n.name)) for (let i = o + 1, a = e.length; i < a && e[i]?.name === "negate"; i++) r++;
  return { start: o, length: r };
}
function Ym(e) {
  return b(e) && e[wm] === Lm;
}
function Cl(e, t) {
  if (!Ym(t) || e.name !== t.name) return !1;
  for (let o of zo(e)) if (o !== "id" && e[o] !== t[o]) return !1;
  return !0;
}
var jI = ["standard", "compact"],
  _I = ["short", "long"],
  $I = ["decimal", "currency", "unit"],
  KI = ["symbol", "narrowSymbol", "code", "name"],
  UI = ["short", "narrow", "long"],
  qI = ["year", "month", "day", "hour12", "hour24", "minute"];
var Vl = "type",
  yo = "variableReference";
function L(e) {
  return b(e) && Vl in e && e[Vl] === yo;
}
function Sl(e, t) {
  return { type: yo, id: e, providerId: t };
}
function ci(e, t) {
  return { type: yo, id: e, providerId: t };
}
function dn(e, t) {
  return L(t) ? e.id === t.id && e.providerId === t.providerId : !1;
}
var Nl = "transform";
function JI(e) {
  return L(e) && e.providerId === Nl;
}
function ZI(e) {
  return { type: yo, id: e, providerId: Nl };
}
var Rl = "payload",
  Il = ".";
function QI(e) {
  return L(e) && e.providerId === Rl;
}
function eP(e) {
  return { type: yo, id: e.join(Il), providerId: Rl };
}
function tP(e) {
  let t = Jm(e.id);
  if (!t.some((o) => o.length === 0)) return t;
}
function Jm(e) {
  return e.split(Il);
}
var Pl = "type",
  pi = "computedValue",
  Zm = {
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
function lP(e) {
  return p(e) && Object.hasOwn(Zm, e);
}
function he(e) {
  return b(e) && Pl in e && e[Pl] === pi;
}
function uP(e) {
  return he(e) && an(e.startValue);
}
function vl(e) {
  return he(e) && L(e.startValue);
}
function dP(e) {
  return (
    he(e) &&
    e.transforms.length === 1 &&
    e.transforms[0]?.name === "toDateString" &&
    e.transforms[0]?.display === "relative"
  );
}
function cP(e) {
  return he(e) && e.transforms.some((t) => t.name === "toDateString");
}
function pP(e) {
  return he(e) && e.transforms.some((t) => t.name === "toDateString" && t.display !== "relative");
}
function kl(e, t) {
  return !he(t) ||
    e.outputType !== t.outputType ||
    e.startValue.type !== t.startValue.type ||
    (L(e.startValue) && !dn(e.startValue, t.startValue)) ||
    (an(e.startValue) && !ml(e.startValue, t.startValue)) ||
    e.transforms.length !== t.transforms.length
    ? !1
    : e.transforms.every((o, n) => Cl(o, t.transforms[n]));
}
function Dl(e, t, o) {
  return L(t)
    ? { type: pi, outputType: e, startValue: t, transforms: o }
    : { type: pi, outputType: e, startValue: t, transforms: o };
}
function A(e) {
  return L(e) || he(e);
}
function wl(e, t) {
  return L(e) ? dn(e, t) : kl(e, t);
}
var VP = { isVariant: void 0, isBreakpoint: void 0, gesture: void 0, variantTransition: void 0 },
  Qm = "isVariant";
function ey(e) {
  return Qm in e;
}
var SP = ["hover", "pressed"],
  ty = "gesture";
function Ml(e) {
  return ty in e;
}
function xe(e) {
  return ey(e) && e.isVariant === !0;
}
function El(e) {
  return xe(e) && Mt(e);
}
function NP(e) {
  for (let t of e.ancestors()) if (El(t)) return t;
  return null;
}
function RP(e) {
  return xe(e) ? !Ml(e) || !e.gesture : !1;
}
function Ll(e) {
  return Bl(e) && nl(e) && Ml(e) && !!e.gesture;
}
function IP(e) {
  if (Ll(e)) return !0;
  if (!Et(e)) return !1;
  for (let t of e.ancestors()) if (Ll(t)) return !0;
  return !1;
}
function PP(e) {
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
      w(e);
  }
}
function vP(e) {
  return xe(e) || oy(e);
}
function oy(e) {
  return e.cache.insideVariant;
}
function Bl(e) {
  return co(e) && xe(e);
}
function ny(e) {
  return Et(e) && e.cache.insideVariant;
}
function kP(e) {
  return Bl(e) || ny(e);
}
var ry = "isBreakpoint";
function iy(e) {
  return ry in e;
}
function at(e) {
  return e ? xe(e) && iy(e) && e.isBreakpoint === !0 : !1;
}
function DP(e) {
  return at(e) && El(e);
}
function wP(e) {
  return e ? xe(e) && !at(e) : !1;
}
function LP(e) {
  return xe(e) ? ii(e.variantTransition) || A(e.variantTransition) || ul(e.variantTransition) : !1;
}
function AP(e) {
  return e ? Ks(e.__class) : !1;
}
function FP(e) {
  return e ? Yr(e.__class) : !1;
}
function st(e) {
  return e ? Jr(e.__class) : !1;
}
function OP(e) {
  return e ? Us(e.__class) : !1;
}
function WP(e, t) {
  let o = e.getNodeParent(t);
  return o === null || !st(o);
}
function zP(e, t) {
  if (!st(t)) return !1;
  let o = e.getNodeParent(t);
  return o === null ? !0 : !st(o) && !Jo(o);
}
var ay = Oo("serializeJS"),
  sy = {
    serializeSpread(e) {
      return `...${e}`;
    },
    serializeKeyValue(e, t, o) {
      let n = U(t, o);
      if (I(n)) return;
      let r = e;
      if (!/^[a-z$_][\w$]*$/i.test(r)) r = JSON.stringify(r);
      else if (r === n) return n;
      return `${r}: ${n}`;
    },
    joinObject(e) {
      return `{${e.join(", ")}}`;
    },
  },
  Al = new Intl.Collator("en", { sensitivity: "base" }).compare;
function cn(e, t, o) {
  let n = Fl(o, t),
    r = [];
  for (let [i, a] of Object.entries(t)) {
    let s = e.serializeKeyValue(i, a, n);
    s && r.push(s);
  }
  return (
    t instanceof lt
      ? (lt.isSorted(t) && r.sort(Al),
        r.unshift(...lt.spreadsAtStart(t).map(e.serializeSpread)),
        r.push(...lt.spreadsAtEnd(t).map(e.serializeSpread)))
      : r.sort(Al),
    e.joinObject(r)
  );
}
function U(e, t = new Set()) {
  if (e instanceof F) return String(e);
  if (typeof e == "number" || typeof e == "boolean" || Ve(e)) return String(e);
  if (p(e))
    return JSON.stringify(e).replace(
      /[\u2028\u2029]/gu,
      (o) => `\\u${o.charCodeAt(0).toString(16)}`
    );
  if (B(e)) {
    let o = Fl(t, e),
      n = [];
    for (let r of e) {
      let i = U(r, o);
      I(i) || n.push(i);
    }
    return `[${n.join(", ")}]`;
  } else if (typeof e == "object") return cn(sy, e, t);
}
function Fl(e, t) {
  if (e.has(t))
    throw (
      ay.error("Encountered circular reference to object while serializing:", t),
      Error("Circular Reference")
    );
  let o = new Set(e);
  return (o.add(t), o);
}
var F = class e extends String {
  static fn(t, ...o) {
    let n = [];
    for (let r of o) (r || (S(r) && r === 0) || (p(r) && r === "")) && n.push(U(r));
    return new e(`${t}(${n.join(", ")})`);
  }
  static optionalFn(t, ...o) {
    return new e(`${t}?.(${o.map((n) => U(n)).join(", ")})`);
  }
  static fromValue(t) {
    return new e(U(t));
  }
  static absoluteURL(t) {
    return t.match(/^https?:/u) ? new e(U(t)) : new e(`new URL(${U(t)}, import.meta.url).href`);
  }
  static hasMarker(t, o) {
    return t.#e === o;
  }
  static withMarker(t, o) {
    let n = new e(o);
    return ((n.#e = t), n);
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
    constructor(n) {
      if (n) for (let r of n) this.add(r);
    }
    *[Symbol.iterator]() {
      for (let n of this.#e) yield new t(n);
    }
    get size() {
      return this.#e.size;
    }
    add(n) {
      this.#e.add(String(n));
    }
    delete(n) {
      this.#e.delete(String(n));
    }
    has(n) {
      return this.#e.has(String(n));
    }
    values() {
      return this.#e.values();
    }
  }
  t.Set = e;
})((F ||= {}));
function Ol(e) {
  return e instanceof F;
}
var lt = class e extends Object {
  #e;
  constructor(t, o = 0) {
    (super(), I(t) || e.assign(this, t), (this.#e = o));
  }
  #t = [];
  static spreadsAtEnd(t) {
    return t.#t;
  }
  #o = [];
  static spreadsAtStart(t) {
    return t.#o;
  }
  static hasSpreads(t) {
    return t.#t.length > 0 || t.#o.length > 0;
  }
  static isEmpty(t) {
    if (e.hasSpreads(t)) return !1;
    for (let o in t) if (!I(t[o])) return !1;
    return !0;
  }
  static addSpreadAtEnd(t, o) {
    t.#t.push(o);
  }
  static addSpreadAtStart(t, o) {
    t.#o.push(o);
  }
  static isSorted(t) {
    return t.#e === 0;
  }
  static assign(t, o) {
    return (o instanceof e && (t.#t.push(...o.#t), t.#o.push(...o.#o)), Object.assign(t, o));
  }
  static fromEntries(t) {
    let o = {};
    for (let [n, r] of t) {
      let i = n instanceof F ? U(n) : n;
      o[i] = r;
    }
    return new e(o);
  }
};
function _P(e) {
  return e instanceof lt;
}
function ut(e, t = "") {
  let o = "";
  for (let n of e) n && (o && (o += t), (o += n instanceof F ? U(n) : n));
  return o;
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
  function o(...s) {
    return a(
      s,
      `
`
    );
  }
  a.lines = o;
  function n(s) {
    return a(
      s,
      `
`
    );
  }
  a.linesFrom = n;
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
})((ut ||= {}));
function pn(e, ...t) {
  let o = [e[0]];
  return (
    t.forEach((n, r) => {
      o.push(U(n), e[r + 1]);
    }),
    new F(o.join(""))
  );
}
((r) => {
  function e(...i) {
    return new F(
      ut(
        i,
        `
`
      )
    );
  }
  r.joinLines = e;
  function t(...i) {
    return new F(
      ut(
        i,
        `

`
      )
    );
  }
  r.joinSections = t;
  function o(i) {
    return new F(
      ut(
        i,
        `
`
      )
    );
  }
  r.linesFrom = o;
  function n(i) {
    return new F(ut(i, ", "));
  }
  r.listFrom = n;
})((pn ||= {}));
var Wl = Symbol("jst template literal");
function ho(e, ...t) {
  if (t.every((n) => p(n) || S(n) || Q(n) || Ve(n))) {
    let n = [e[0]];
    return (
      t.forEach((r, i) => {
        n.push(String(r), e[i + 1]);
      }),
      n.join("")
    );
  }
  let o = ["`", fi(e[0])];
  return (
    t.forEach((n, r) => {
      (p(n)
        ? o.push(fi(n))
        : typeof n == "number" || typeof n == "boolean" || Ve(n)
          ? o.push(String(n))
          : n instanceof F && F.hasMarker(n, Wl)
            ? o.push(n.substring(1, n.length - 1))
            : o.push("${", U(n), "}"),
        o.push(fi(e[r + 1])));
    }),
    o.push("`"),
    F.withMarker(Wl, o.join(""))
  );
}
((o) => {
  function e(n, r) {
    let i = o`${n[0]}`;
    for (let a = 1; a < n.length; a++) i = o`${i}${r}${n[a]}`;
    return i;
  }
  o.join = e;
  function t(n, r, i) {
    let a = [],
      s = [],
      l = 0;
    for (let u of n.matchAll(r))
      (x(typeof u.index == "number", "unexpected non-number in match"),
        a.push(n.substring(l, u.index)),
        s.push(typeof i == "function" ? i(u[0], ...u.slice(1)) : i),
        (l = u.index + u[0].length));
    return (a.push(n.substring(l)), o(a, ...s));
  }
  o.replaceAll = t;
})((ho ||= {}));
var ly = /(?<char>[A-Z])/gu;
function uy(e) {
  return e.replace(ly, "-$<char>").toLowerCase();
}
var dy = new Set(["viewBox", "stdDeviation"]),
  cy = {
    serializeSpread(e) {
      return `{...${e}}`;
    },
    serializeKeyValue(e, t, o) {
      if (I(t) || F.isUndefined(t)) return;
      let n = dy.has(e) ? e : uy(e);
      if (t === !0 || F.isTrue(t)) return n;
      if (S(t)) return `${n}="${t}"`;
      let r = U(t, o);
      if (r !== "") return `${n}=${r}`;
    },
    joinObject(e) {
      return e.join(" ");
    },
  };
function zl(e) {
  return e ? new F(" " + cn(cy, e, new Set())) : pn``;
}
var mi = Symbol("svg tag");
function Gl(e, ...t) {
  let o = [e[0]];
  return (
    t.forEach((n, r) => {
      o.push(U(n), e[r + 1]);
    }),
    F.withMarker(mi, o.join(""))
  );
}
((r) => {
  function e(i, a, s) {
    return s && U(s)
      ? r`<${new F(i)}${zl(a)}>${r.children(s)}</${new F(i)}>`
      : r`<${new F(i)}${zl(a)}/>`;
  }
  r.tag = e;
  function t(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  r.applyTransforms = t;
  function o(i) {
    return F.withMarker(mi, i);
  }
  r.fromTrustedString = o;
  function n(i) {
    return (x(F.hasMarker(i, mi), "SVG children can only be svg"), i);
  }
  r.children = n;
})((Gl ||= {}));
var py = {
  serializeSpread(e) {
    return `{...${e}}`;
  },
  serializeKeyValue(e, t, o) {
    if (I(t) || F.isUndefined(t)) return;
    if (t === !0 || F.isTrue(t)) return e;
    let n = U(t, o);
    if (n !== "") return `${e}={${n}}`;
  },
  joinObject(e) {
    return e.join(" ");
  },
};
function Hl(e) {
  return e ? new F(" " + cn(py, e, new Set())) : pn``;
}
var yi = Symbol("jsx tag");
function jl(e, ...t) {
  let o = [e[0]];
  return (
    t.forEach((n, r) => {
      o.push(U(n), e[r + 1]);
    }),
    F.withMarker(yi, o.join(""))
  );
}
((r) => {
  function e(i) {
    return F.hasMarker(i, yi) ? i : r`{${i}}`;
  }
  r.children = e;
  function t(i) {
    return F.withMarker(yi, i);
  }
  r.fromTrustedString = t;
  function o(i, a, s) {
    return (
      (i = Ol(i) ? i : new F(i)),
      s && U(s) ? r`<${i}${Hl(a)}>${r.children(s)}</${i}>` : r`<${i}${Hl(a)}/>`
    );
  }
  r.tag = o;
  function n(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  r.applyTransforms = n;
})((jl ||= {}));
function fi(e) {
  return e ? e.replace(/[`\\]|\$(?=\{)/gu, "\\$&") : "";
}
var xo = {
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
function Ge(e, t, o, n = !1) {
  let [r, i] = t,
    [a, s] = o,
    l = i - r;
  if (l === 0) return (s + a) / 2;
  let u = s - a;
  if (u === 0) return a;
  let c = a + ((e - r) / l) * u;
  if (n === !0)
    if (a < s) {
      if (c < a) return a;
      if (c > s) return s;
    } else {
      if (c > a) return a;
      if (c < s) return s;
    }
  return c;
}
function tt(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function je(e) {
  let t = fn(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function fn(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var hi = ((i) => (
    (i.RGB = "rgb"),
    (i.HSL = "hsl"),
    (i.HSV = "hsv"),
    (i.HEX = "hex"),
    (i.NAME = "name"),
    i
  ))(hi || {}),
  _l = ((i) => (
    (i.RGB = "rgb"),
    (i.RGBA = "rgba"),
    (i.HSL = "hsl"),
    (i.HSLA = "hsla"),
    (i.HUSL = "husl"),
    i
  ))(_l || {});
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
    let o = Math.round(t * 255),
      n = o % 16,
      r = ((o - n) / 16) | 0;
    return e.hexChars.charAt(r) + e.hexChars.charAt(n);
  }
  static hexToRgbChannel(t, o) {
    let n = e.hexChars.indexOf(t.charAt(o)),
      r = e.hexChars.indexOf(t.charAt(o + 1));
    return (n * 16 + r) / 255;
  }
  static distanceFromOriginAngle(t, o, n) {
    let r = o / (Math.sin(n) - t * Math.cos(n));
    return r < 0 ? 1 / 0 : r;
  }
  static distanceFromOrigin(t, o) {
    return Math.abs(o) / Math.sqrt(Math.pow(t, 2) + 1);
  }
  static min6(t, o, n, r, i, a) {
    return Math.min(t, Math.min(o, Math.min(n, Math.min(r, Math.min(i, a)))));
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
      o = e.toLinear(this.rgb_g),
      n = e.toLinear(this.rgb_b);
    ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * o + 0.18048078840183 * n),
      (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * o + 0.072192315360733 * n),
      (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * o + 0.95053215224966 * n));
  }
  xyzToLuv() {
    let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
      o = 4 * this.xyz_x,
      n = 9 * this.xyz_y;
    (t !== 0 ? ((o /= t), (n /= t)) : ((o = NaN), (n = NaN)),
      (this.luv_l = e.yToL(this.xyz_y)),
      this.luv_l === 0
        ? ((this.luv_u = 0), (this.luv_v = 0))
        : ((this.luv_u = 13 * this.luv_l * (o - e.refU)),
          (this.luv_v = 13 * this.luv_l * (n - e.refV))));
  }
  luvToXyz() {
    if (this.luv_l === 0) {
      ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
      return;
    }
    let t = this.luv_u / (13 * this.luv_l) + e.refU,
      o = this.luv_v / (13 * this.luv_l) + e.refV;
    ((this.xyz_y = e.lToY(this.luv_l)),
      (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * o - t * o)),
      (this.xyz_z = (9 * this.xyz_y - 15 * o * this.xyz_y - o * this.xyz_x) / (3 * o)));
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
    let o = Math.pow(t + 16, 3) / 1560896,
      n = o > e.epsilon ? o : t / e.kappa,
      r = n * (284517 * e.m_r0 - 94839 * e.m_r2),
      i = n * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
      a = n * (632260 * e.m_r2 - 126452 * e.m_r1),
      s = n * (284517 * e.m_g0 - 94839 * e.m_g2),
      l = n * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
      u = n * (632260 * e.m_g2 - 126452 * e.m_g1),
      c = n * (284517 * e.m_b0 - 94839 * e.m_b2),
      m = n * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
      f = n * (632260 * e.m_b2 - 126452 * e.m_b1);
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
      o = e.distanceFromOrigin(this.r1s, this.r1i),
      n = e.distanceFromOrigin(this.g0s, this.g0i),
      r = e.distanceFromOrigin(this.g1s, this.g1i),
      i = e.distanceFromOrigin(this.b0s, this.b0i),
      a = e.distanceFromOrigin(this.b1s, this.b1i);
    return e.min6(t, o, n, r, i, a);
  }
  calcMaxChromaHsluv(t) {
    let o = (t / 360) * Math.PI * 2,
      n = e.distanceFromOriginAngle(this.r0s, this.r0i, o),
      r = e.distanceFromOriginAngle(this.r1s, this.r1i, o),
      i = e.distanceFromOriginAngle(this.g0s, this.g0i, o),
      a = e.distanceFromOriginAngle(this.g1s, this.g1i, o),
      s = e.distanceFromOriginAngle(this.b0s, this.b0i, o),
      l = e.distanceFromOriginAngle(this.b1s, this.b1i, o);
    return e.min6(n, r, i, a, s, l);
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
var pe = new X();
function Kl(e, t, o) {
  return (
    (pe.rgb_r = e / 255),
    (pe.rgb_g = t / 255),
    (pe.rgb_b = o / 255),
    pe.rgbToHsluv(),
    { h: pe.hsluv_h, s: pe.hsluv_s, l: pe.hsluv_l }
  );
}
function Ul(e, t, o, n = 1) {
  return (
    (pe.hsluv_h = e),
    (pe.hsluv_s = t),
    (pe.hsluv_l = o),
    pe.hsluvToRgb(),
    { r: pe.rgb_r * 255, g: pe.rgb_g * 255, b: pe.rgb_b * 255, a: n }
  );
}
function Ft(e, t, o, n) {
  let r = Math.round(e),
    i = Math.round(t * 100),
    a = Math.round(o * 100);
  return n === void 0 || n === 1
    ? "hsv(" + r + ", " + i + "%, " + a + "%)"
    : "hsva(" + r + ", " + i + "%, " + a + "%, " + n + ")";
}
function ql(e, t, o) {
  return {
    r: tt(e) ? le(e, 255) * 255 : 0,
    g: tt(t) ? le(t, 255) * 255 : 0,
    b: tt(o) ? le(o, 255) * 255 : 0,
  };
}
function bi(e, t, o, n) {
  let r = [
    gi(Math.round(e).toString(16)),
    gi(Math.round(t).toString(16)),
    gi(Math.round(o).toString(16)),
  ];
  return n &&
    r[0].charAt(0) === r[0].charAt(1) &&
    r[1].charAt(0) === r[1].charAt(1) &&
    r[2].charAt(0) === r[2].charAt(1)
    ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0)
    : r.join("");
}
function Ot(e, t, o) {
  let n,
    r,
    i = le(e, 255),
    a = le(t, 255),
    s = le(o, 255),
    l = Math.max(i, a, s),
    u = Math.min(i, a, s),
    c = (r = n = (l + u) / 2);
  if (l === u) c = r = 0;
  else {
    let m = l - u;
    switch (((r = n > 0.5 ? m / (2 - l - u) : m / (l + u)), l)) {
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
  return { h: c * 360, s: r, l: n };
}
function xi(e, t, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6 ? e + (t - e) * 6 * o : o < 1 / 2 ? t : o < 2 / 3 ? e + (t - e) * (2 / 3 - o) * 6 : e
  );
}
function Xl(e, t, o) {
  let n, r, i;
  if (((e = le(e, 360)), (t = le(t * 100, 100)), (o = le(o * 100, 100)), t === 0)) n = r = i = o;
  else {
    let a = o < 0.5 ? o * (1 + t) : o + t - o * t,
      s = 2 * o - a;
    ((n = xi(s, a, e + 1 / 3)), (r = xi(s, a, e)), (i = xi(s, a, e - 1 / 3)));
  }
  return { r: n * 255, g: r * 255, b: i * 255 };
}
function Ti(e, t, o) {
  ((e = le(e, 255)), (t = le(t, 255)), (o = le(o, 255)));
  let n = Math.max(e, t, o),
    r = Math.min(e, t, o),
    i = n - r,
    a = 0,
    s = n === 0 ? 0 : i / n,
    l = n;
  if (n === r) a = 0;
  else {
    switch (n) {
      case e:
        a = (t - o) / i + (t < o ? 6 : 0);
        break;
      case t:
        a = (o - e) / i + 2;
        break;
      case o:
        a = (e - t) / i + 4;
        break;
    }
    a /= 6;
  }
  return { h: a, s, v: l };
}
function Yl(e, t, o) {
  ((e = le(e, 360) * 6), (t = le(t * 100, 100)), (o = le(o * 100, 100)));
  let n = Math.floor(e),
    r = e - n,
    i = o * (1 - t),
    a = o * (1 - r * t),
    s = o * (1 - (1 - r) * t),
    l = n % 6,
    u = [o, a, i, i, s, o][l],
    c = [s, o, o, a, i, i][l],
    m = [i, i, s, o, o, a][l];
  return { r: u * 255, g: c * 255, b: m * 255 };
}
function le(e, t) {
  let o, n;
  if ((typeof t == "string" ? (o = parseFloat(t)) : (o = t), typeof e == "string")) {
    fy(e) && (e = "100%");
    let r = my(e);
    ((n = Math.min(o, Math.max(0, parseFloat(e)))), r && (n = Math.floor(n * o) / 100));
  } else n = e;
  return Math.abs(n - o) < 1e-6 ? 1 : (n % o) / o;
}
function fy(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function my(e) {
  return typeof e == "string" && e.includes("%");
}
function gi(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var Ee = (() => {
  let o = "(?:" + "[-\\+]?\\d*\\.\\d+%?" + ")|(?:" + "[-\\+]?\\d+%?" + ")",
    n = "[\\s|\\(]+(" + o + ")[,|\\s]+(" + o + ")[,|\\s]+(" + o + ")\\s*\\)?",
    r = "[\\s|\\(]+(" + o + ")[,|\\s]+(" + o + ")[,|\\s]+(" + o + ")[,|\\s]+(" + o + ")\\s*\\)?";
  return {
    rgb: new RegExp("rgb" + n),
    rgba: new RegExp("rgba" + r),
    hsl: new RegExp("hsl" + n),
    hsla: new RegExp("hsla" + r),
    hsv: new RegExp("hsv" + n),
    hsva: new RegExp("hsva" + r),
    hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
    hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
    hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
    hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
  };
})();
function go(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    o = e.replace(t, "").trimEnd().toLowerCase(),
    n = xo[o];
  if ((n && (o = n), o === "transparent")) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let r;
  return (r = Ee.rgb.exec(o))
    ? {
        r: parseInt(r[1] ?? ""),
        g: parseInt(r[2] ?? ""),
        b: parseInt(r[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (r = Ee.rgba.exec(o))
      ? {
          r: parseInt(r[1] ?? ""),
          g: parseInt(r[2] ?? ""),
          b: parseInt(r[3] ?? ""),
          a: parseFloat(r[4] ?? ""),
          format: "rgb",
        }
      : (r = Ee.hsl.exec(o))
        ? { h: parseInt(r[1] ?? ""), s: je(r[2] ?? ""), l: je(r[3] ?? ""), a: 1, format: "hsl" }
        : (r = Ee.hsla.exec(o))
          ? {
              h: parseInt(r[1] ?? ""),
              s: je(r[2] ?? ""),
              l: je(r[3] ?? ""),
              a: parseFloat(r[4] ?? ""),
              format: "hsl",
            }
          : (r = Ee.hsv.exec(o))
            ? { h: parseInt(r[1] ?? ""), s: je(r[2] ?? ""), v: je(r[3] ?? ""), a: 1, format: "hsv" }
            : (r = Ee.hsva.exec(o))
              ? {
                  h: parseInt(r[1] ?? ""),
                  s: je(r[2] ?? ""),
                  v: je(r[3] ?? ""),
                  a: parseFloat(r[4] ?? ""),
                  format: "hsv",
                }
              : (r = Ee.hex8.exec(o))
                ? {
                    r: ge(r[1] ?? ""),
                    g: ge(r[2] ?? ""),
                    b: ge(r[3] ?? ""),
                    a: $l(r[4] ?? ""),
                    format: n ? "name" : "hex",
                  }
                : (r = Ee.hex6.exec(o))
                  ? {
                      r: ge(r[1] ?? ""),
                      g: ge(r[2] ?? ""),
                      b: ge(r[3] ?? ""),
                      a: 1,
                      format: n ? "name" : "hex",
                    }
                  : (r = Ee.hex4.exec(o))
                    ? {
                        r: ge(`${r[1]}${r[1]}`),
                        g: ge(`${r[2]}${r[2]}`),
                        b: ge(`${r[3]}${r[3]}`),
                        a: $l(r[4] + "" + r[4]),
                        format: n ? "name" : "hex",
                      }
                    : (r = Ee.hex3.exec(o))
                      ? {
                          r: ge(`${r[1]}${r[1]}`),
                          g: ge(`${r[2]}${r[2]}`),
                          b: ge(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? "name" : "hex",
                        }
                      : !1;
}
function ge(e) {
  return parseInt(e, 16);
}
function $l(e) {
  return ge(e) / 255;
}
var yy =
  /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u;
function Jl(e) {
  let t = yy.exec(e);
  if (!t) return null;
  let { r: o = "0", g: n = "0", b: r = "0", a: i } = t.groups ?? {};
  return { r: parseFloat(o), g: parseFloat(n), b: parseFloat(r), a: i ? parseFloat(i) : 1 };
}
function Ci(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Zl({ r: e, g: t, b: o, a: n }) {
  return { r: Ci(e), g: Ci(t), b: Ci(o), a: n };
}
function Vi(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Ql({ r: e, g: t, b: o, a: n }) {
  return { r: Vi(e), g: Vi(t), b: Vi(o), a: n };
}
var hy = (e) => {
    let { r: t, g: o, b: n, a: r } = Zl(e);
    return {
      x: 0.486570948648216 * t + 0.265667693169093 * o + 0.1982172852343625 * n,
      y: 0.2289745640697487 * t + 0.6917385218365062 * o + 0.079286914093745 * n,
      z: 0 * t + 0.0451133818589026 * o + 1.043944368900976 * n,
      a: r,
    };
  },
  xy = ({ x: e = 0, y: t = 0, z: o = 0, a: n = 1 }) =>
    Ql({
      r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * o,
      g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * o,
      b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * o,
      a: n,
    }),
  gy = (e) => {
    let { r: t, g: o, b: n, a: r } = Zl(e);
    return {
      x: 0.4123907992659593 * t + 0.357584339383878 * o + 0.1804807884018343 * n,
      y: 0.2126390058715102 * t + 0.715168678767756 * o + 0.0721923153607337 * n,
      z: 0.0193308187155918 * t + 0.119194779794626 * o + 0.9505321522496607 * n,
      a: r,
    };
  },
  by = ({ x: e = 0, y: t = 0, z: o = 0, a: n = 1 }) =>
    Ql({
      r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * o,
      g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * o,
      b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * o,
      a: n,
    });
function eu({ r: e, g: t, b: o, a: n }) {
  let r = Math.max(e, t, o),
    i = Math.min(e, t, o),
    a = { h: 0, s: r === 0 ? 0 : 1 - i / r, v: r, a: n };
  return (
    r - i !== 0 &&
      (a.h =
        (r === e
          ? (t - o) / (r - i) + (t < o ? 6 : 0)
          : r === t
            ? (o - e) / (r - i) + 2
            : (e - t) / (r - i) + 4) * 60),
    a
  );
}
function Ty(e) {
  return (e = e % 360) < 0 ? e + 360 : e;
}
function Si({ h: e = 0, s: t = 0, v: o = 0, a: n = 1 }) {
  let r = Ty(e),
    i = Math.abs(((r / 60) % 2) - 1);
  switch (Math.floor(r / 60)) {
    case 0:
      return { r: o, g: o * (1 - t * i), b: o * (1 - t), a: n };
    case 1:
      return { r: o * (1 - t * i), g: o, b: o * (1 - t), a: n };
    case 2:
      return { r: o * (1 - t), g: o, b: o * (1 - t * i), a: n };
    case 3:
      return { r: o * (1 - t), g: o * (1 - t * i), b: o, a: n };
    case 4:
      return { r: o * (1 - t * i), g: o * (1 - t), b: o, a: n };
    case 5:
      return { r: o, g: o * (1 - t), b: o * (1 - t * i), a: n };
    default:
      return { r: o * (1 - t), g: o * (1 - t), b: o * (1 - t), a: n };
  }
}
function Ni(e) {
  return by(gy(e));
}
function tu(e) {
  return xy(hy(e));
}
var dt = class e {
  format = "p3";
  r;
  g;
  b;
  a;
  constructor(t) {
    ((this.r = t.r ?? 0), (this.g = t.g ?? 0), (this.b = t.b ?? 0), (this.a = t.a ?? 1));
  }
  hsv() {
    return eu(this);
  }
  rgb() {
    return tu(this);
  }
  hsl() {
    return Ot(this.r, this.g, this.b);
  }
  toString(t = "p3", o) {
    switch (t) {
      case "p3": {
        let n = o?.r ?? this.r,
          r = o?.g ?? this.g,
          i = o?.b ?? this.b,
          a = o?.a ?? this.a;
        return a === 1
          ? `color(display-p3 ${n} ${r} ${i})`
          : `color(display-p3 ${n} ${r} ${i} / ${a})`;
      }
      case "srgb": {
        let n = this.rgb(),
          r = Math.round(Math.max(0, Math.min(n.r, 1)) * 100) / 100,
          i = Math.round(Math.max(0, Math.min(n.g, 1)) * 100) / 100,
          a = Math.round(Math.max(0, Math.min(n.b, 1)) * 100) / 100,
          s = o?.r ?? r * 255,
          l = o?.g ?? i * 255,
          u = o?.b ?? a * 255,
          c = o?.a ?? n.a ?? 1;
        return c === 1 ? `rgb(${s}, ${l}, ${u})` : `rgba(${s}, ${l}, ${u}, ${c})`;
      }
    }
  }
  static isP3String(t) {
    return t.startsWith("color(display-p3");
  }
  static fromHSV(t, o = "p3") {
    switch (o) {
      case "p3":
        return new e(Si(t));
      case "srgb":
        return new e(Ni(Si(t)));
    }
  }
  static fromRGB(t) {
    return new e(
      Ni({
        r: Math.round((t.r / 255) * 1e4) / 1e4,
        g: Math.round((t.g / 255) * 1e4) / 1e4,
        b: Math.round((t.b / 255) * 1e4) / 1e4,
        a: t.a ?? 1,
      })
    );
  }
  static fromRGBString(t) {
    let o = g(t);
    if (o) return e.fromRGB(o);
  }
  static fromString(t) {
    if (!e.isP3String(t)) return;
    let o = Jl(t);
    if (o) return new e({ r: o.r, g: o.g, b: o.b, a: o.a });
  }
  static srgbFromValue(t) {
    if (!ne(t) || !g.isP3String(t)) return t;
    let o = e.fromString(t);
    return o ? o.toString("srgb") : t;
  }
  static multiplyAlpha(t, o) {
    return new e({ r: t.r, g: t.g, b: t.b, a: t.a * o });
  }
};
function yv(e) {
  return dt.srgbFromValue(e);
}
var ou = new Map(),
  g = (() => {
    function e(r, i, a, s) {
      if (typeof r == "string") {
        let u = ou.get(r);
        return u || ((u = t(r)), u === void 0 ? { ...e("black"), isValid: !1 } : (ou.set(r, u), u));
      }
      let l = t(r, i, a, s);
      return l !== void 0 ? l : { ...e("black"), isValid: !1 };
    }
    function t(r, i, a, s) {
      if (r === "") return;
      let l = Cy(r, i, a, s);
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
    let o = {
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
      (e.isColorString = (r) => (typeof r == "string" ? go(r) !== !1 : !1)),
      (e.isColorObject = (r) =>
        Z(r) &&
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
      (e.toHex = (r, i = !1) => bi(r.r, r.g, r.b, i)),
      (e.toHexString = (r, i = !1) => `#${e.toHex(r, i)}`),
      (e.isP3String = (r) => (typeof r != "string" ? !1 : dt.isP3String(r))),
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
      (e.toHusl = (r) => ({ ...Kl(r.r, r.g, r.b), a: r.roundA })),
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
        let i = Ti(r.r, r.g, r.b);
        return { h: i.h * 360, s: i.s, v: i.v, a: r.a };
      }),
      (e.toHsvString = (r) => {
        let i = Ti(r.r, r.g, r.b),
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
        let i = bi(r.r, r.g, r.b, !0);
        for (let a of Object.keys(xo)) if (xo[a] === i) return a;
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
        if (o.isRGB(l))
          u = e({
            r: Ge(a, [0, 1], [r.r, i.r], s),
            g: Ge(a, [0, 1], [r.g, i.g], s),
            b: Ge(a, [0, 1], [r.b, i.b], s),
            a: Ge(a, [0, 1], [r.a, i.a], s),
          });
        else {
          let c, m;
          (o.isHSL(l)
            ? ((c = e.toHsl(r)), (m = e.toHsl(i)))
            : ((c = e.toHusl(r)), (m = e.toHusl(i))),
            c.s === 0 ? (c.h = m.h) : m.s === 0 && (m.h = c.h));
          let f = c.h,
            h = m.h,
            C = h - f;
          C > 180 ? (C = h - 360 - f) : C < -180 && (C = h + 360 - f);
          let V = {
            h: Ge(a, [0, 1], [f, f + C], s),
            s: Ge(a, [0, 1], [c.s, m.s], s),
            l: Ge(a, [0, 1], [c.l, m.l], s),
            a: Ge(a, [0, 1], [r.a, i.a], s),
          };
          o.isHSL(l) ? (u = e(V)) : (u = e(Ul(V.h, V.s, V.l, V.a)));
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
      (e.rgbToHsl = (r, i, a) => Ot(r, i, a)),
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
    function n(r) {
      r /= 255;
      let i = Math.abs(r);
      return i < 0.04045 ? r / 12.92 : (Math.sign(r) || 1) * ((i + 0.055) / 1.055) ** 2.4;
    }
    return (
      (e.luminance = (r) => {
        let { r: i, g: a, b: s } = e.toRgb(r);
        return 0.2126 * n(i) + 0.7152 * n(a) + 0.0722 * n(s);
      }),
      (e.contrast = (r, i) => {
        let a = e.luminance(r),
          s = e.luminance(i);
        return (Math.max(a, s) + 0.05) / (Math.min(a, s) + 0.05);
      }),
      e
    );
  })();
function Cy(e, t, o, n = 1) {
  let r;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof o == "number" &&
    !Number.isNaN(o)
      ? (r = Ri({ r: e, g: t, b: o, a: n }))
      : typeof e == "string"
        ? (r = Vy(e))
        : typeof e == "object" &&
          (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
            ? (r = Ri(e))
            : (r = nu(e))),
    r
  );
}
function Vy(e) {
  let t = go(e);
  if (t) return t.format === "hsl" ? nu(t) : t.format === "hsv" ? Sy(t) : Ri(t);
}
function Sy(e) {
  let t = Yl(e.h, e.s, e.v);
  return { ...Ot(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? ru(e.a) : 1 };
}
function Ri(e) {
  let t = ql(e.r, e.g, e.b);
  return { ...Ot(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? ru(e.a) : 1 };
}
function nu(e) {
  let t,
    o,
    n,
    r = { r: 0, g: 0, b: 0 },
    i = { h: 0, s: 0, l: 0 };
  return (
    (t = tt(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (o = tt(e.s) ? e.s : 1),
    typeof e.s == "string" && (o = fn(e.s)),
    (n = tt(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (n = fn(e.l)),
    (r = Xl(t, o, n)),
    (i = { h: t, s: o, l: n }),
    { ...r, ...i, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function ru(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function mn(e) {
  if (!ne(e) || e.charAt(e.length - 1) !== "%") return !1;
  let o = e.slice(0, -1),
    n = parseFloat(o);
  return Oe(n);
}
function gv(e) {
  let t = e.slice(0, -1),
    o = parseFloat(t);
  return Oe(o) ? o : 50;
}
var bo = Symbol("Not Found");
function yn(e) {
  return e === bo;
}
function iu(e) {
  return e !== bo;
}
function Ii(e) {
  return iu(e) && !It(e);
}
function Cv(e) {
  return iu(e) && e !== void 0;
}
function Vv(e) {
  return Ii(e) && e !== void 0;
}
function Ny(e, t) {
  return A(e) ? !wl(e, t) : e !== t;
}
function au(e, t, o, n) {
  let r = t[e];
  if (It(r)) return;
  let i = o[e],
    a = n ? n(i) : i;
  yn(r) ? (t[e] = a) : Ny(a, r) && (t[e] = ro);
}
var Dv = { codeComponentIdentifier: "", dynamicVectorSetIdentifier: void 0 },
  Ry = "codeComponentIdentifier";
function hn(e) {
  return e.hasProp(Ry);
}
function wv(e, t) {
  !hn(e) ||
    !Ie(e.codeComponentIdentifier) ||
    (t.codeComponentIdentifiers.add(e.codeComponentIdentifier),
    au("dynamicVectorSetIdentifier", t, e));
}
var xn = ((v) => (
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
  ))(xn || {}),
  Iy = new Set(Object.values(xn)),
  Mv = new Set(Object.values(xn).filter((e) => e !== "framer/Prototype"));
function Ev(e) {
  return Iy.has(e);
}
var Py = new Set(["framer/Stack", "framer/Page", "framer/Scroll"]);
function ct(e) {
  return tl(e) || Qo(e) ? !1 : !hn(e) || vy(e);
}
function Wv(e) {
  return hn(e) && e.codeComponentIdentifier === "__builtin/Device";
}
function vy(e) {
  return Py.has(e.codeComponentIdentifier);
}
var ky = "fillOpacity";
function Xv(e) {
  return ky in e;
}
var Yv = { fillOpacity: void 0 },
  Dy = "fillType",
  wy = "fillEnabled",
  Ly = "supportsGradient",
  My = "fillImageLocalized";
function Wt(e) {
  return Dy in e && ct(e);
}
function Pi(e) {
  return wy in e && ct(e);
}
function Jv(e) {
  return Wt(e) ? (Pi(e) ? !!e.fillEnabled : !0) : !1;
}
function Zv(e) {
  return My in e;
}
function Ey(e) {
  return Ly in e && ct(e);
}
function su(e) {
  return ct(e) ? (Ey(e) ? e.supportsGradient() : Wt(e)) : !1;
}
function By(e) {
  return He(e) || su(e);
}
function Qv(e) {
  return By(e) && !(st(e) || Jo(e) || Zs(e));
}
function lu(e) {
  return e === "linear-gradient" || e === "radial-gradient" || e === "conic-gradient";
}
function ek(e) {
  return su(e) ? lu(e.fillType) : e.getFills().filter(Boolean).length;
}
function tk(e) {
  return e.fillEnabled && e.fillType === "image" && e.fillImage !== null;
}
function ok(e) {
  return Wt(e) && mn(e.fillImagePositionX) && mn(e.fillImagePositionY);
}
function uu(e) {
  return Pi(e) && !e.fillEnabled ? !1 : Wt(e) && e.fillType === "image";
}
function Ay(e) {
  if (!e.fillType) return !1;
  switch (e.fillType) {
    case "color": {
      let t = e.resolveValue("fillColor");
      return t ? g(t).a === 0 : !1;
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
      w(e.fillType);
  }
}
function nk(e) {
  return !Wt(e) || (Pi(e) && !e.fillEnabled) ? !1 : !Ay(e);
}
function rk(e) {
  switch (e) {
    case void 0:
    case "contain":
      return "fit";
    default:
      return "fill";
  }
}
function Fy(e) {
  return !e || !Wt(e) ? !1 : lu(e.fillType);
}
function ik(e) {
  if (Fy(e) && !I(e.fillType))
    switch (e.fillType) {
      case "image":
      case "color":
        return;
      case "linear-gradient": {
        let t = e.fillLinearGradient?.stops.length;
        if (!t) return;
        let o = e.fillLinearGradient?.angle;
        return I(o) ? void 0 : { stops: t, info: { type: e.fillType, angle: o } };
      }
      case "radial-gradient": {
        let t = e.fillRadialGradient?.stops.length;
        return t ? { stops: t, info: { type: e.fillType, angle: 0 } } : void 0;
      }
      case "conic-gradient": {
        let t = e.fillConicGradient?.stops.length;
        if (!t) return;
        let o = e.fillLinearGradient?.angle;
        return I(o) ? void 0 : { stops: t, info: { type: e.fillType, angle: o } };
      }
      default:
        w(e.fillType);
    }
}
function ak(e, t, o) {
  let n = o === "conic-gradient" ? 360 : 100,
    r = o === "conic-gradient" ? "deg" : "%";
  return ho.join(
    Array.from({ length: e }).map((i, a) => ho`${t} ${Math.round((a / (e - 1)) * n)}${r}`),
    ", "
  );
}
var Oy = ["left", "center", "right"],
  Wy = new Set(Oy),
  zy = ["top", "center", "bottom"],
  Hy = new Set(zy);
function sk(e, t) {
  return p(e)
    ? ((t === "y" || t === "fillImagePositionY") && Hy.has(e)) ||
      ((t === "x" || t === "fillImagePositionX") && Wy.has(e))
      ? !0
      : mn(e)
    : !1;
}
var vi = class {},
  ki = class extends vi {},
  Be = class extends ki {
    childIds = [];
    childById = new Map();
    constructor(t) {
      if ((super(), t)) for (let o of t) this.push(o);
    }
    get length() {
      return this.childIds.length;
    }
    at(t) {
      let o = this.childIds.at(t);
      if (o) return this.childById.get(o);
    }
    indexOf(t) {
      return this.findIndex((o) => o === t);
    }
    some(t) {
      for (let o = 0; o < this.childIds.length; o++) {
        let n = this.childIds[o],
          r = this.childById.get(n);
        if (t(r, o)) return !0;
      }
      return !1;
    }
    every(t) {
      for (let o = 0; o < this.childIds.length; o++) {
        let n = this.childIds[o],
          r = this.childById.get(n);
        if (!t(r, o)) return !1;
      }
      return !0;
    }
    forEach(t) {
      for (let o = 0; o < this.childIds.length; o++) {
        let n = this.childIds[o],
          r = this.childById.get(n);
        t(r, o);
      }
    }
    map(t) {
      let o = Array(this.childIds.length);
      for (let n = 0; n < this.childIds.length; n++) {
        let r = this.childIds[n],
          i = this.childById.get(r);
        o[n] = t(i, n);
      }
      return o;
    }
    reduce(t, o) {
      let n = o;
      for (let r = 0; r < this.childIds.length; r++) {
        let i = this.childIds[r],
          a = this.childById.get(i);
        n = t(n, a, r);
      }
      return n;
    }
    filter(t) {
      let o = [];
      for (let n = 0; n < this.childIds.length; n++) {
        let r = this.childIds[n],
          i = this.childById.get(r);
        t(i, n) && o.push(i);
      }
      return o;
    }
    sort(t) {
      let o = this.toArray().sort(t);
      for (let n = 0; n < o.length; n++) this.childIds[n] = o[n].id;
    }
    find(t) {
      let o = this.findIndex(t);
      if (o !== -1) return this.at(o);
    }
    findIndex(t) {
      for (let o = 0; o < this.childIds.length; o++) {
        let n = this.childIds[o],
          r = this.childById.get(n);
        if (t(r, o)) return o;
      }
      return -1;
    }
    findLast(t) {
      let o = this.findLastIndex(t);
      if (o !== -1) return this.at(o);
    }
    findLastIndex(t) {
      for (let o = this.childIds.length - 1; o >= 0; o--) {
        let n = this.childIds[o],
          r = this.childById.get(n);
        if (t(r, o)) return o;
      }
      return -1;
    }
    slice(t, o) {
      let n = this.childIds.slice(t, o),
        r = Array(n.length);
      for (let i = 0; i < n.length; i++) {
        let a = n[i],
          s = this.childById.get(a);
        r[i] = s;
      }
      return r;
    }
    splice(t, o = 1 / 0, ...n) {
      let r = n.map((a) => a.id),
        i = this.childIds.splice(t, o, ...r);
      for (let a of i) this.childById.delete(a);
      for (let a of n) this.childById.set(a.id, a);
    }
    push(...t) {
      for (let o of t) (this.childIds.push(o.id), this.childById.set(o.id, o));
    }
    swap(t) {
      this.childById.has(t.id) && this.childById.set(t.id, t);
    }
    toArray() {
      let t = Array(this.childIds.length);
      for (let o = 0; o < this.childIds.length; o++) {
        let n = this.childIds[o],
          r = this.childById.get(n);
        t[o] = r;
      }
      return t;
    }
    *[Symbol.iterator]() {
      for (let t = 0; t < this.childIds.length; t++) {
        let o = this.childIds[t];
        yield this.childById.get(o);
      }
    }
  };
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
function du(e) {
  let t = ("" + e).trim().toLowerCase(),
    o = t.lastIndexOf(".");
  return Gy[~o ? t.substring(++o) : t];
}
var jy = { auto: !0, lossless: !0, small: !0, medium: !0, large: !0, full: !0 };
function cu(e) {
  return Ms(e) && e in jy;
}
var gn = "framer/asset-reference,";
function _y(e) {
  return e.startsWith(`data:${gn}`);
}
function Ck(e) {
  return du(e)?.startsWith("image/") ?? !1;
}
var pu = "originalFilename",
  fu = "packageIdentifier",
  mu = "preferredSize",
  yu = "presetName",
  hu = "width",
  xu = "height";
function gu(e, t = null, o = null, n = null, r = null, i = null) {
  x(e !== "", "Can\u2019t create asset reference for empty identifier");
  let a = new URL(`data:${gn}${e}`);
  return (
    o && a.searchParams.set(pu, o),
    t && a.searchParams.set(fu, t),
    n && a.searchParams.set(mu, n),
    r && a.searchParams.set(yu, r),
    i && (a.searchParams.set(hu, i.width.toString()), a.searchParams.set(xu, i.height.toString())),
    a.href
  );
}
function Vk({
  identifier: e,
  preferredSize: t,
  intrinsicSize: o,
  packageIdentifier: n,
  originalFilename: r,
  presetName: i,
}) {
  return gu(e, n, r, t, i, o);
}
function Sk(e) {
  return gu(
    e.identifier,
    e.packageIdentifier,
    e.originalFilename,
    e.preferredSize,
    e.presetName,
    e.intrinsicSize
  );
}
function bu(e) {
  if (_y(e))
    try {
      let t = new URL(e),
        o = t.pathname.substring(gn.length),
        n = t.searchParams.get(pu),
        r = t.searchParams.get(fu),
        i = t.searchParams.get(mu),
        a = t.searchParams.get(yu),
        s = t.searchParams.get(hu),
        l = t.searchParams.get(xu);
      return {
        identifier: o,
        originalFilename: n,
        packageIdentifier: r,
        preferredSize: cu(i) ? i : void 0,
        presetName: a,
        fileExtension: n && $y(n),
        intrinsicSize: s && l ? { width: parseInt(s), height: parseInt(l) } : void 0,
      };
    } catch {
      return;
    }
}
function $y(e) {
  return e.split(".").pop() ?? "";
}
var Ik = {},
  Ky = "children";
function Uy(e) {
  return Ky in e && e.children !== void 0;
}
var qy = new Be();
function Tu(e) {
  return Uy(e) ? e.children : qy;
}
function Cu(e) {
  for (let t in e) return !1;
  return !0;
}
var Mk = { repeatArray: void 0, repeatArrayTransforms: void 0 },
  Xy = "repeatArray";
function Vu(e) {
  return !(!e || !(Xy in e) || xe(e) || Me(e));
}
function zt(e) {
  return !!e && Vu(e) && !!e.repeatArray;
}
function Yy(e, t) {
  return e.getNodeWithTrait(t.getPrimaryId(), Vu)?.repeatArray;
}
function Ek(e, t) {
  let o = Yy(e, t);
  if (o) return Dl("array", o, t.repeatArrayTransforms ?? []);
}
function Nu(e) {
  return { collectionRepeatedItemId: e, repeatedItemId: e };
}
function Ru(e, t) {
  let o = t?.getPrimaryId();
  if (((t = e.get(o)), !Me(t))) return null;
  if (t.repeatedItemId !== void 0) return Su(e, t, t.repeatedItemId);
  let n = Su(e, t, t.collectionRepeatedItemId);
  return n || Pu(t);
}
function Ok(e, t) {
  let o = t.cache.repeatedAncestorRepeaterIds;
  if (o !== null) return o;
  let n = Jy(e, t);
  return ((t.cache.repeatedAncestorRepeaterIds = n), n);
}
function Jy(e, t) {
  let o = [],
    n = t,
    r = e.getParent(t.id);
  for (; r;) {
    if (zt(r)) o.push(r.id);
    else if (Me(r)) {
      let i = Ru(e, r);
      i && n.getPrimaryId() === i.id && o.push(r.id);
    }
    if (((n = r), (r = e.getParent(r.id)), r && e.isGroundNode(r))) break;
  }
  return (o.reverse(), o);
}
function Wk(e, t) {
  let o = t;
  for (let n of t.ancestors()) {
    if (Me(n)) return { repeater: n, inRepeatedChild: Ht(e, o, n) };
    o = n;
  }
}
function zk(e) {
  for (let t of e.ancestors()) if (Me(t)) return t;
}
function Iu(e, t) {
  return e.getNodeWithTrait(t.parentid, Me) ?? void 0;
}
function Hk(e, t) {
  return e.getNodeWithTrait(t.parentid, Qr) ?? void 0;
}
function Zy(e, t) {
  if (!t) return null;
  let o = Ru(e, t);
  return o ? (t.originalid ? t.children?.find((r) => r.originalid === o.id) : o) : null;
}
function Ht(e, t, o) {
  return ((o ??= Iu(e, t)), Zy(e, o)?.id === t.id);
}
function Gk(e, t) {
  return Ht(e, t) || zt(t);
}
function jk(e, t, o) {
  return !!o && Me(e) && !Ht(t, o, e);
}
function _k(e) {
  let t = e.children?.at(0);
  e.set(Nu(t?.id));
}
function $k(e, t) {
  let o = new Map();
  for (let n of t) {
    let r = Qy(e, n);
    r && o.set(r.repeaterId, r);
  }
  return [...o.values()];
}
function Qy(e, t) {
  let o = Iu(e, t);
  if (!o || !Ht(e, t, o)) return null;
  let n = t.getPrimaryId();
  return {
    repeaterId: o.getPrimaryId(),
    disableFallback: o.repeatedItemId !== void 0,
    repeatedItemId: n,
    repeatedItemChildIds: t.children?.map((r) => r.getPrimaryId()) ?? [],
  };
}
function Kk(e, t, o) {
  for (let n of t) {
    let r = e.get(n.repeaterId);
    if (!Me(r)) continue;
    let i = eh(e, r, n, o);
    (i === r.repeatedItemId && i === r.collectionRepeatedItemId) || r.set(Nu(i));
  }
}
function eh(e, t, o, n) {
  let r = new Set(),
    i = n?.get(o.repeatedItemId);
  (i && r.add(i), r.add(o.repeatedItemId));
  for (let a of o.repeatedItemChildIds) r.add(a);
  for (let a of r) {
    let s = th(e, t, a);
    if (s) return s.id;
  }
  if (!o.disableFallback) return Pu(t)?.id;
}
function th(e, t, o) {
  let n = e.get(o);
  for (; n;) {
    if (n.parentid === t.id) return zt(n) ? null : n;
    if (!n.parentid) return null;
    n = e.get(n.parentid);
  }
  return null;
}
function Su(e, t, o) {
  let n = e.get(o);
  return !n || zt(n) || n.parentid !== t.id ? null : n;
}
function Pu(e) {
  let t = e.children.at(0);
  return !t || zt(t) ? null : t;
}
var Di = "default";
function Yk(e) {
  return Js(e) ? e.getGroundNodes().length === 0 : !1;
}
function Jk(e) {
  if (!ze(e)) return !1;
  let t = e.getGroundNodes();
  return t.length > 1 ? !1 : t.length === 0 ? !0 : t[0]?.children?.length === 0;
}
function oh(e) {
  return e ? !e.children || e.children.length === 0 : !1;
}
function nh(e) {
  return e === "";
}
function wi(e) {
  return !!(e.webPageId && nh(e.segment));
}
function Zk(e) {
  return wi(e) && oh(e);
}
function rh(e, t) {
  let o = t.get(e);
  if (!Zo(o)) return;
  let n = t.get(o.webPageId);
  if (ze(n) || o.children.length > 0) return;
  let r = o.parentid;
  (t.remove(o.id), r && rh(r, t));
}
var To = "default",
  ih = "locales";
function tD(e) {
  return b(e) && ih in e;
}
function oD(e, t) {
  if (!t || !e) return !1;
  if (e.length > t.length) return !0;
  for (let o of t) {
    let n = e.find((r) => r.id === o.id);
    if (n && (n.fallback !== o.fallback || n.draft !== o.draft)) return !0;
  }
  return !1;
}
function nD(e) {
  return e?.newContentInclusion ?? "include";
}
var ku = (e) => {
    let t = N.fromRect(e.getBoundingClientRect());
    return ((t.x = t.x + Nt.scrollX), (t.y = t.y + Nt.scrollY), t);
  },
  ah = (e) => N.merge(...e.map(ku)),
  sh = (e, t) => {
    let o = Du(e, t);
    return { x: o.x, y: o.y, width: e.width, height: e.height };
  },
  lh = (e, t) => {
    let o = wu(e, t);
    return { x: o.x, y: o.y, width: e.width, height: e.height };
  },
  Li = (e) => {
    let t = e.getBoundingClientRect();
    return { x: t.left + Nt.scrollX, y: t.top + Nt.scrollY, width: t.width, height: t.height };
  },
  uh = (e) => ({ x: e.pageX, y: e.pageY }),
  dh = (e) => ({ x: e.clientX, y: e.clientY }),
  Du = (e, t) => {
    let o = Li(t);
    return { x: e.x + o.x, y: e.y + o.y };
  },
  wu = (e, t) => {
    let o = Li(t);
    return { x: e.x - o.x, y: e.y - o.y };
  },
  lD = (e, t = {}) => {
    let o = new KeyboardEvent("keydown", { bubbles: !0, keyCode: e, ...t }),
      n = document.activeElement;
    n && n.dispatchEvent(o);
  },
  uD = {
    frameFromElement: ku,
    frameFromElements: ah,
    convertToPageFrame: sh,
    convertFromPageFrame: lh,
    getPageFrame: Li,
    fromEventForPage: uh,
    fromEventForClient: dh,
    convertToPagePoint: Du,
    convertFromPagePoint: wu,
  },
  vu,
  ch = !ps() && typeof Document < "u" && typeof Document.parseHTMLUnsafe == "function";
function Lu(e, t) {
  return ch && !t
    ? Document.parseHTMLUnsafe(e)
    : ((vu ??= new DOMParser()), vu.parseFromString(e, t ?? "text/html"));
}
function dD(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
var ph = /&(?:[gl]t|quot|#39|amp|#6[02]|#34|apos|#38);/gu,
  fh = {
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
function cD(e) {
  return e.replace(ph, (t) => fh[t]);
}
function Mu(e) {
  let t = `<body>${e}</body>`;
  return Lu(t).body;
}
function mh(e, t) {
  let o = new Map();
  function n(r) {
    let i = o.get(r);
    if (p(i)) return i;
    let a = e(r);
    if ((o.set(r, a), o.size > t)) {
      let s = o.keys().next().value;
      p(s) && o.delete(s);
    }
    return a;
  }
  return n;
}
var yh = 1e5,
  Mi = mh(hh, yh);
function hh(e) {
  let t = Mu(e),
    o = t.innerText;
  return ys.isTest ? (o ?? t.textContent ?? "") : (x(o !== null), o);
}
function Eu(
  e,
  t = `
`
) {
  let o = e.replace(/<\/(h[1-6]|p|ul|ol)>/gu, `</$1>${t}`),
    n = Mi(o),
    r = t.length;
  return r && n.endsWith(t) ? n.slice(0, r * -1) : n;
}
function Bu(e, { preserveTrailingEmptyBlockNewLine: t = !1 } = {}) {
  let o = bn(e.childNodes);
  if (o.length === 0) return "";
  let n = o.join(`
`);
  return !t || e.childNodes.some(Tn)
    ? n
    : n +
        `
`;
}
function Au(e) {
  return e.replaceAll(/\n+/gu, "");
}
function bn(e) {
  return e.flatMap((t) => (t.type === "media" || t.type === "module" ? [] : [xh(t)]));
}
function xh(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.map(Vh).join("");
    case "bulletedList":
    case "numberedList":
      return bh(e.childNodes).join(`
`);
    case "blockquote":
      return bn(e.childNodes).join(`
`);
    case "table":
      return e.childNodes.map(Th).join(`
`);
    case "media":
    case "module":
      return "";
  }
}
function gh(e) {
  return bn(e.childNodes).join(`
`);
}
function bh(e) {
  return e.flatMap((t) => {
    let o = gh(t);
    return o.length > 0 ? [o] : [];
  });
}
function Th(e) {
  return e.childNodes.map(Ch).join(`
`);
}
function Ch(e) {
  return bn(e.childNodes).join(`
`);
}
function Vh(e) {
  switch (e.type) {
    case "text":
      return e.text;
    case "lineBreak":
      return `
`;
  }
}
function Tn(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.some(Ih);
    case "bulletedList":
    case "numberedList":
      return e.childNodes.some(Sh);
    case "blockquote":
      return e.childNodes.some(Tn);
    case "table":
      return e.childNodes.some(Nh);
    case "media":
    case "module":
      return !1;
  }
}
function Sh(e) {
  return e.childNodes.some(Tn);
}
function Nh(e) {
  return e.childNodes.some(Rh);
}
function Rh(e) {
  return e.childNodes.some(Tn);
}
function Ih(e) {
  switch (e.type) {
    case "text":
      return e.text.length > 0;
    case "lineBreak":
      return !1;
  }
}
function Ei(e) {
  return e?.value !== void 0 && e?.value !== null;
}
function Ph(e, { preserveNewLines: t = !1 } = {}) {
  return p(e.value)
    ? e.type !== "rich-text"
      ? e.value
      : t
        ? Eu(e.value)
        : Mi(e.value)
    : vh(e.value, { preserveNewLines: t });
}
function ND(e, t) {
  if (e != null) {
    if (e.value === null) return null;
    if (Ei(e)) return Ph(e, t);
  }
}
function vh(e, { preserveNewLines: t }) {
  let o = Bu(e);
  return t ? o : Au(o);
}
function Fu(e, t) {
  if (!t || !e || e.id === To) return null;
  for (; e;) {
    let o = t[e.id];
    if (o && Ei(o)) return o;
    e = e.fallback;
  }
  return null;
}
var Ou = "routeSegmentRoot";
var kh = new Set(["/404.html", "/404", "/404/"]),
  Wu = new Set(Array.from(kh).map((e) => e.replaceAll("/", "")));
var zu = {
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
  Hu = {
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
function Gu(e) {
  return p(e) && e in zu;
}
var LD = zu;
function Dh(e) {
  return p(e) && e in Hu;
}
var MD = Hu;
function ED(e) {
  if (!p(e)) return !1;
  if (Gu(e)) return !0;
  let [t, o] = ju(e);
  return !!(t && o);
}
function ju(e) {
  if (!p(e)) return [void 0, void 0];
  let t = e.split("-"),
    o = "",
    n;
  for (let r of t) {
    if (Dh(r)) {
      n = r;
      continue;
    }
    if (!o) {
      o = r;
      continue;
    }
    o += "-" + r;
  }
  return [Gu(o) ? o : void 0, n];
}
var wh = new Set(["ar", "dv", "fa", "he", "ks", "ps", "sd", "ug", "ur", "yi"]);
function Lh(e) {
  return e.endsWith("-Arab") || e.includes("-Arab-");
}
function Cn(e) {
  if (Lh(e)) return "rtl";
  let [t] = ju(e);
  return t && wh.has(t) ? "rtl" : "ltr";
}
var _u = Symbol();
function _e(e) {
  let t,
    o = _u;
  return (...n) => {
    if (t && Es(t, n) && o !== _u) return o;
    t = n;
    let r = e(...n);
    return ((o = r), r);
  };
}
function Bi(e, t) {
  let o = e.root.getDefaultLocale(),
    n = e.root.locales ?? jo();
  return t === "includeDrafts" ? Mh(o, n) : Eh(o, n);
}
function jD(e, t, o = "includeDrafts") {
  let n = Bi(e, o),
    r = n[0];
  return (
    x(r, "Default locale should always exist"),
    t ? (n.find(({ id: i }) => i === t) ?? r) : r
  );
}
var Mh = _e((e, t) => {
    let o = [e, ...t];
    return Ai(o, { includeDrafts: !0 });
  }),
  Eh = _e((e, t) => {
    let o = [e, ...t];
    return Ai(o, { includeDrafts: !1 });
  });
function Ai(e, { includeDrafts: t }) {
  let o = new Map(),
    n = new Map();
  for (let a of e) (o.set(a.id, a), a.fallback && n.set(a.id, a.fallback));
  let r = [],
    i = !t && ks.isOn("skipPublishingLocalesFallingBackToDraft");
  for (let a of e) {
    if ((!t && a.draft) || (i && Ku(a, o))) continue;
    let s = $u(a);
    if ((r.push(s), !a.fallback)) continue;
    let l = s,
      u = o.get(a.fallback),
      c = new Set();
    for (c.add(a.id); u && !c.has(u.id);) {
      c.add(u.id);
      let m = $u(u);
      ((l.fallback = m), (l = m));
      let f = n.get(u.id);
      u = f ? o.get(f) : void 0;
    }
  }
  return r;
}
function _D(e) {
  let t = new Map(e.map((o) => [o.id, o]));
  return e.filter((o) => !o.draft && Ku(o, t));
}
function Ku(e, t) {
  let o = new Set(),
    n = e;
  for (; n;) {
    if (o.has(n.id)) return !1;
    if ((o.add(n.id), n.draft)) return !0;
    n = n.fallback ? t.get(n.fallback) : void 0;
  }
  return !1;
}
function $u(e) {
  return { id: e.id, code: e.code, slug: e.slug, name: e.name, textDirection: Cn(e.code) };
}
var $D = { vekterLocalesToRouterLocales: Ai };
var Bh = "$";
function Uu(e) {
  let t = e.get(Ou);
  return (
    x(t, "RouteSegmentRootNode not found"),
    x(
      t.parentid === e.root.id,
      "RouteSegmentRootNode is not under the tree root. Parent id: " + t.parentid
    ),
    t
  );
}
function ew(e, t) {
  let o = Bi(e, "excludeDrafts"),
    n = Object.fromEntries(o.map((l) => [l.id, {}])),
    r = new Map(),
    i = 0,
    a = () => `${Bh}${i++}`,
    s = new Set();
  for (let l of t.children) qu(e, "", r, n, a, s, l, o);
  return { webPageSegmentReferencePathByWebPageId: r, localizedSegments: n };
}
function qu(e, t, o, n, r, i, a, s) {
  x(n[Di], "dictionary should include default");
  let l = a.webPageId ? e.get(a.webPageId) : void 0,
    u = !!l && !l.isDraft && !i.has(l.id);
  u && i.add(l.id);
  let c;
  Ah(a) ? (a.segment ? ((c = r()), (t = `${t}/${c}`)) : (t = `${t}/`)) : (t = `${t}/${a.segment}`);
  let m = u;
  for (let f of a.children) m = qu(e, t, o, n, r, i, f, s) || m;
  if (m && c) {
    n[Di][c] = a.segment;
    for (let f of s) {
      let h = Fu(f, a.segmentLocalized);
      if (h?.value && h.value !== a.segment) {
        let C = f.id;
        (x(n[C], "localizedSegments should include all locales"), (n[C][c] = h.value));
      }
    }
  }
  return (u && a.webPageId && o.set(a.webPageId, t), m);
}
var Ah = (e) => !(!!e.dataIdentifier || Wu.has(e.segment) || wi(e));
function Xu(e, t) {
  let n = Uu(e).getRouteSegmentIdForWebPageId(t);
  return e.getNode(n);
}
function Ju(e, t) {
  let o = Fh(t);
  return o ? e.getNodeWithTrait(o, Yo) : null;
}
function Fh(e) {
  if (!e) return null;
  let t = ye(e);
  return !Xo(t) || !Ie(t) || t.type !== "collection" ? null : t.localIdName;
}
var Vn = E(oe(), 1);
var Gt = E(re(), 1);
function Oh(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function jt(e) {
  return !e._constraints || Oh(e) ? !1 : e._constraints.enabled;
}
function Wh(e) {
  let { size: t } = e,
    { width: o, height: n } = e;
  return (
    P(t) && (o === void 0 && (o = t), n === void 0 && (n = t)),
    P(o) && P(n) ? { width: o, height: n } : null
  );
}
function zh(e) {
  let t = Wh(e);
  if (t === null) return null;
  let { left: o, top: n } = e;
  return P(o) && P(n) ? { x: o, y: n, ...t } : null;
}
function Hh(e, t, o = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let n = t === 1 || t === 2;
  if (!jt(e) || n) return zh(e);
  let r = Gh(e),
    i = jh(t),
    a = i ? { sizing: i, positioning: i, viewport: null } : null;
  return Xr.toRect(r, a, null, o, null);
}
function Gh(e) {
  let { left: t, right: o, top: n, bottom: r, center: i, _constraints: a, size: s } = e,
    { width: l, height: u } = e;
  (l === void 0 && (l = s), u === void 0 && (u = s));
  let { aspectRatio: c, autoSize: m } = a,
    f = qr.quickfix({
      left: P(t),
      right: P(o),
      top: P(n),
      bottom: P(r),
      widthType: so(l),
      heightType: so(u),
      aspectRatio: c || null,
      fixedSize: m === !0,
    }),
    h = null,
    C = null,
    V = 0,
    R = 0;
  if (f.widthType !== 0 && typeof l == "string") {
    let W = parseFloat(l);
    l.endsWith("fr") ? ((V = 3), (h = W)) : l === "auto" ? (V = 2) : ((V = 1), (h = W / 100));
  } else l !== void 0 && typeof l != "string" && (h = l);
  if (f.heightType !== 0 && typeof u == "string") {
    let W = parseFloat(u);
    u.endsWith("fr")
      ? ((R = 3), (C = W))
      : u === "auto"
        ? (R = 2)
        : ((R = 1), (C = parseFloat(u) / 100));
  } else u !== void 0 && typeof u != "string" && (C = u);
  let y = 0.5,
    T = 0.5;
  return (
    (i === !0 || i === "x") && ((f.left = !1), typeof t == "string" && (y = parseFloat(t) / 100)),
    (i === !0 || i === "y") && ((f.top = !1), typeof n == "string" && (T = parseFloat(n) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? o : null,
      top: f.top ? n : null,
      bottom: f.bottom ? r : null,
      widthType: V,
      heightType: R,
      width: h,
      height: C,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: y,
      centerAnchorY: T,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var Fi = ((n) => (
    (n[(n.Unknown = 0)] = "Unknown"),
    (n[(n.Disabled = 1)] = "Disabled"),
    (n[(n.DisabledForCurrentLevel = 2)] = "DisabledForCurrentLevel"),
    n
  ))(Fi || {}),
  Zu = Vn.default.createContext({ parentSize: 0 });
function jh(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Qu() {
  return Vn.default.useContext(Zu).parentSize;
}
function ed(e) {
  return typeof e == "object";
}
var _h = (e) => {
  let t = Qu(),
    { parentSize: o, children: n } = e,
    r = Vn.default.useMemo(() => ({ parentSize: o }), [$h(o), Kh(o)]);
  return t === 1
    ? n
      ? (0, Gt.jsx)(Gt.Fragment, { children: n })
      : null
    : (0, Gt.jsx)(Zu.Provider, { value: r, children: n });
};
function $h(e) {
  return ed(e) ? e.width : e;
}
function Kh(e) {
  return ed(e) ? e.height : e;
}
function Sn(e, t) {
  return (0, Gt.jsx)(_h, { parentSize: t, children: e });
}
function td(e) {
  let t = Qu();
  return Hh(e, t, !0);
}
function Oi({ width: e, height: t }) {
  return e === "auto" || e === "min-content" || t === "auto" || t === "min-content";
}
var Wi = {
  isImageObject: function (e) {
    return !e || typeof e == "string" ? !1 : typeof e == "object" && "src" in e;
  },
};
function Uh(e, t) {
  let { _forwardedOverrideId: o, _forwardedOverrides: n, id: r } = t,
    i = o ?? r,
    a = n && i ? n[i] : void 0;
  return (a && typeof a == "string" && (e = { ...e, src: a }), e);
}
function od(e) {
  let { background: t, image: o } = e;
  if (o !== void 0 && t && !Wi.isImageObject(t)) return;
  let n = null;
  if ((ne(o) ? (n = { alt: "", src: o }) : (n = ie.get(t, null)), !!Wi.isImageObject(n)))
    return Uh(n, e);
}
var zi = (e) => e instanceof Cs;
function qh(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let r of e.keys()) (++n & 1) !== 1 && e.delete(r);
}
function nd(e, t, o, n) {
  let r = t.get(o);
  if (r) return r;
  qh(t, e);
  let i = n(o);
  return (t.set(o, i), i);
}
var Nn = {
  hueRotate: (e, t) => g.toHslString(g.hueRotate(g(e), t)),
  setAlpha: (e, t) => g.toRgbString(g.alpha(g(e), t)),
  getAlpha: (e) => {
    let t = go(e);
    return t ? t.a : 1;
  },
  multiplyAlpha: (e, t) => g.toRgbString(g.multiplyAlpha(g(e), t)),
  toHexValue: (e) => g.toHex(g(e)).toUpperCase(),
  toHex: (e) => g.toHexString(g(e)).toUpperCase(),
  toRgb: (e) => g.toRgb(g(e)),
  toRgbString: (e) => g.toRgbString(g(e)),
  toHSV: (e) => g.toHsv(g(e)),
  toHSL: (e) => g.toHsl(g(e)),
  toHslString: (e) => g.toHslString(g(e)),
  toHsvString: (e) => g.toHsvString(g(e)),
  hsvToHSLString: (e) => g.toHslString(g(Ft(e.h, e.s, e.v, e.a))),
  hsvToHexValue: (e) => g.toHex(g(Ft(e.h, e.s, e.v, e.a))).toUpperCase(),
  hsvToHex: (e) => g.toHexString(g(Ft(e.h, e.s, e.v, e.a))).toUpperCase(),
  hsvToRgbString: (e) => g.toRgbString(g(Ft(e.h, e.s, e.v, e.a))),
  hsvToString: (e) => Ft(e.h, e.s, e.v),
  rgbaToString: (e) => g.toRgbString(g(e)),
  rgbToHexValue: (e) => g.toHex(g(e)),
  rgbToHexString: (e) => g.toHexString(g(e)),
  hslToString: (e) => g.toHslString(g(e)),
  hslToRgbString: (e) => g.toRgbString(g(e)),
  toColorPickerSquare: (e) => g.toRgbString(g({ h: e, s: 1, l: 0.5, a: 1 })),
  isValid: (e) => g(e).isValid !== !1,
  equals: (e, t) =>
    g.isP3String(e) || g.isP3String(t)
      ? e === t
      : (typeof e == "string" && (e = g(e)), typeof t == "string" && (t = g(t)), g.equal(e, t)),
  toHexOrRgbaString: (e) => {
    let t = g(e);
    return t.a !== 1 ? g.toRgbString(t) : g.toHexString(t);
  },
  toFormatString: (e) => (g.isP3String(e) ? e : g.toRgbString(g(e))),
};
var rd = (e) => {
  let t = 0,
    o,
    n;
  if (e.length === 0) return t;
  for (o = 0; o < e.length; o++) ((n = e.charCodeAt(o)), (t = (t << 5) - t + n), (t |= 0));
  return t;
};
var Xh = /var\(.+\)/u,
  Yh = new Map();
function Jh(e, t) {
  let o = [e, t];
  return Xh.test(e) ? e : nd(1e3, Yh, o, () => Nn.multiplyAlpha(e, t));
}
function pt(e, t = 1) {
  let o;
  return (
    "stops" in e
      ? (o = e.stops)
      : (o = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? o : o.map((n) => ({ ...n, value: Jh(n.value, t) }))
  );
}
function _t(e, t) {
  let o = 0;
  return (
    pt(e, t).forEach((n) => {
      o ^= rd(n.value) ^ n.position;
    }),
    o
  );
}
var Zh = ["stops"];
function $t(e) {
  return e && Zh.every((t) => t in e);
}
var Qh = ["start", "end"];
function Kt(e) {
  return e && Qh.every((t) => t in e);
}
var ex = ["angle", "alpha"],
  Rn = {
    isLinearGradient: (e) => Z(e) && ex.every((t) => t in e) && (Kt(e) || $t(e)),
    hash: (e) => e.angle ^ _t(e, e.alpha),
    toCSS: (e, t, o) => {
      let n = pt(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = Math.round(r),
        a = n.map((s) => `${o?.(s.value) ?? s.value} ${s.position * 100}%`);
      return `linear-gradient(${i}deg, ${a.join(", ")})`;
    },
  };
var tx = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"],
  In = {
    isRadialGradient: (e) => Z(e) && tx.every((t) => t in e) && (Kt(e) || $t(e)),
    hash: (e) =>
      e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ _t(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: o, widthFactor: n, heightFactor: r, centerAnchorX: i, centerAnchorY: a } = e,
        s = pt(e, o),
        l = s.map((u, c) => {
          let m = s[c + 1],
            f = u.position === 1 && m?.position === 1 ? u.position - 1e-4 : u.position;
          return `${t?.(u.value) ?? u.value} ${f * 100}%`;
        });
      return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${a * 100}%, ${l.join(", ")})`;
    },
  };
var ox = ["alpha", "angle", "centerAnchorX", "centerAnchorY"],
  nx = {
    isConicGradient: (e) => Z(e) && ox.every((t) => t in e) && (Kt(e) || $t(e)),
    hash: (e) => e.centerAnchorX ^ e.centerAnchorY ^ e.angle ^ _t(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: o, angle: n, centerAnchorX: r, centerAnchorY: i } = e,
        a = Math.round(n),
        l = pt(e, o)
          .map((u) => `${t?.(u.value) ?? u.value} ${u.position * 360}deg`)
          .join(", ");
      return `conic-gradient(from ${a}deg at ${r * 100}% ${i * 100}%, ${l})`;
    },
  };
var Hi = ["color", "x", "y", "blur"],
  Uw = { is: (e) => e && Hi.every((t) => t in e) },
  Gi = ["x", "y", "color", "inset", "blur", "spread"],
  id = {
    is: (e) => e && Gi.every((t) => t in e),
    toCSS: (e) =>
      `${e.inset ? "inset " : ""}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`,
  };
var ad = "0.000001px",
  ji = ` translateZ(${ad})`,
  sd = fs() || cs() || ms();
function ld(e) {
  e.willChange = "transform";
  let t = _.current() === _.canvas;
  sd && t && (e.translateZ = ad);
}
function ud(e) {
  ((e.willChange = "transform"), dd(e, !0));
}
function Zw(e, t) {
  (t
    ? (e.style.willChange || "") !== "transform" && (e.style.willChange = "transform")
    : e.style.removeProperty("will-change"),
    dd(e.style, t));
}
function dd(e, t) {
  let o = _.current() === _.canvas;
  if (!sd || !o) return;
  let n = (ne(e.transform) && e.transform) || "";
  t ? n.includes(ji) || (e.transform = n + ji) : (e.transform = n.replace(ji, ""));
}
var pd = E(oe(), 1);
var fe = (e) => e;
function cd(e, t, o, n = !0) {
  if (!e) return;
  let r = fe(e.style),
    i = o || r[t],
    a = () => {
      rx(i) && (r[t] = i);
    };
  ((r[t] = null), n ? Promise.resolve().then(a) : setTimeout(a, 0));
}
function rx(e) {
  return ne(e) || Oe(e) || gs(e);
}
var Pn = (() => {
  class e extends pd.Component {
    static defaultProps = {};
    static applyWillChange(o, n, r) {
      o.willChangeTransform && (r ? ld(n) : ud(n));
    }
    layerElement = null;
    setLayerElement = (o) => {
      this.layerElement = o;
    };
    shouldComponentUpdate(o, n) {
      return o._needsMeasure || this.state !== n || !ce(this.props, o);
    }
    componentDidUpdate(o) {
      fe(this.props).clip &&
        fe(this.props).radius === 0 &&
        fe(o).radius !== 0 &&
        cd(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return e;
})();
var fd = E(oe(), 1);
function _i() {
  let e = _.current();
  return e === _.canvas || e === _.export;
}
function dL() {
  let [e] = (0, fd.useState)(() => _i());
  return e;
}
var md = E(oe(), 1),
  yd = md.default.createContext(void 0);
var $i;
function hd() {
  return $i !== void 0;
}
function fL(e) {
  $i = e;
}
function xd(e, t) {
  $i?.(e, t);
}
var Co = E(oe(), 1);
var Td = E(re(), 1),
  ax = "style[data-framer-css-ssr-minified]",
  sx = (() => {
    if (!Ze()) return new Set();
    let e = document.querySelector(ax)?.getAttribute("data-framer-components");
    return e ? new Set(e.split(" ")) : new Set();
  })(),
  TL = "data-framer-css-ssr";
function gd() {
  return Ts() ? _.preview : _.current();
}
var bd = (e, t, o) => {
    if (hd() && o !== void 0 && !Qe(t)) {
      let n = Array.isArray(t)
        ? t
        : t.split(`
`);
      xd(o, n.filter(Boolean));
    }
    return Co.default.forwardRef((n, r) => {
      let { sheet: i, cache: a } = Co.default.useContext(yd) ?? {},
        s = o;
      if (!Ze()) {
        Qe(t) && (t = t(gd(), n));
        let l = Array.isArray(t)
          ? t.join(`
`)
          : t;
        lx.add(l, s);
      }
      return (
        (0, Co.useInsertionEffect)(() => {
          if (s && sx.has(s)) return;
          (Qe(t)
            ? t(gd(), n)
            : Array.isArray(t)
              ? t
              : t.split(`
`)
          ).forEach((u) => u && Ho(u, i, a));
        }, []),
        (0, Td.jsx)(e, { ...n, ref: r })
      );
    });
  },
  Ki = class {
    styles = new Set();
    componentIds = new Set();
    add(t, o) {
      (this.styles.add(t), o && this.componentIds.add(o));
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
  lx = new Ki();
var ux, vn;
function dx() {
  return (ux ??= import("https://app.framerstatic.com/libraryCSSRules-D54UNXME.mjs").then((e) => {
    if (((vn = e.getCombinedCSSRules), Ze())) for (let t of vn()) Ho(t, void 0);
    return e;
  }));
}
function cx() {
  return vn ? vn() : (Ze() && dx(), []);
}
function Cd(e) {
  return bd(e, cx, "framer-lib-combinedCSSRules");
}
function Vd(e) {
  return (t, o) =>
    e === !0
      ? `translate(-50%, -50%) ${o}`
      : e === "x"
        ? `translateX(-50%) ${o}`
        : e === "y"
          ? `translateY(-50%) ${o}`
          : o || "none";
}
var ue = E(oe(), 1);
var qt = E(re(), 1),
  Ut = ue.default.createContext({
    getLayoutId: (e) => null,
    persistLayoutIdCache: () => {},
    top: !1,
    enabled: !0,
  });
function PL({ children: e }) {
  if ((0, ue.useContext)(Ut).top) return (0, qt.jsx)(qt.Fragment, { children: e });
  let o = (0, ue.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = (0, ue.useRef)({
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
        f = o.current[m][l];
      if (f) return f;
      let h = u || l;
      if (!c && !r.has(h) && (!o.current.byLayoutId[h] || o.current.byLayoutId[h] === h))
        return (
          o.current.count[m][h] === void 0 &&
            ((o.current.count[m][h] = 0), (o.current.byLayoutId[h] = h), (n.current[m][l] = h)),
          r.add(h),
          h
        );
      let C;
      if (c?.length)
        for (let J = c.length - 1; J >= 0; J--) {
          let de = c[J];
          Rt(!!de, "duplicatedId must be defined");
          let ae = o.current[m][de],
            Ye = o.current.byLastId[de];
          if (Ye && !C) {
            let _r = o.current.byLayoutId[Ye],
              $r = !_r || _r === u;
            Ye && !r.has(Ye) && (!u || $r) && (C = [Ye, de]);
          }
          let nt = ae ? o.current.byLayoutId[ae] : void 0,
            ns = !nt || nt === u;
          if (ae && !r.has(ae) && (!u || ns))
            return ((n.current[m][l] = ae), (n.current.byLastId[de] = ae), r.add(ae), ae);
        }
      let V = o.current.byLastId[l];
      if (V && !r.has(V)) return (r.add(V), (n.current.byId[l] = V), V);
      if (C) {
        let [J, de] = C;
        return ((n.current[m][l] = J), (n.current.byLastId[de] = J), r.add(J), J);
      }
      let R = o.current.byPossibleId[l];
      if (R && !r.has(R)) return (r.add(R), (n.current.byId[l] = R), R);
      let y = c?.[0],
        T = u || y || l,
        W = (o.current.count[m][T] ?? -1) + 1,
        { layoutId: j, value: v } = px(T, W, r);
      if (((o.current.count[m][T] = v), (n.current[m][l] = j), c?.length && !u)) {
        let J = c[c.length - 1];
        if ((J && (n.current.byLastId[J] = j), c.length > 1))
          for (let de = 0; de < c.length - 1; de++) {
            let ae = c[de];
            ae !== void 0 && (n.current.byPossibleId[ae] || (n.current.byPossibleId[ae] = j));
          }
      }
      return ((n.current.byLayoutId[j] = h), r.add(j), j);
    }, []),
    a = (0, ue.useCallback)(() => {
      ((o.current = {
        byId: { ...o.current.byId, ...n.current.byId },
        byLastId: { ...o.current.byLastId, ...n.current.byLastId },
        byPossibleId: { ...o.current.byPossibleId, ...n.current.byPossibleId },
        byName: { ...o.current.byName, ...n.current.byName },
        byLastName: { ...o.current.byLastName, ...n.current.byLastName },
        byLayoutId: { ...o.current.byLayoutId, ...n.current.byLayoutId },
        count: { ...o.current.count, byName: {} },
      }),
        (n.current = {
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
  return (0, qt.jsx)(Ut.Provider, { value: s, children: e });
}
function px(e, t, o) {
  let n = t,
    r = n ? `${e}-${n}` : e;
  for (; o.has(r);) (n++, (r = `${e}-${n}`));
  return { layoutId: r, value: n };
}
function vL({ enabled: e = !0, ...t }) {
  let o = (0, ue.useContext)(Ut),
    n = (0, ue.useMemo)(() => ({ ...o, enabled: e }), [e]);
  return (0, qt.jsx)(Ut.Provider, { ...t, value: n });
}
var Sd = E(oe(), 1),
  Vo = Sd.default.createContext(!1);
var So = E(oe(), 1);
var Ui = E(oe(), 1);
function qi() {
  let [e, t] = Ui.default.useState(0);
  return Ui.default.useCallback(() => t((o) => o + 1), []);
}
var kn = E(oe(), 1),
  Dn = typeof document < "u" ? kn.useLayoutEffect : kn.useEffect;
var Yi = E(re(), 1),
  Nd = 200,
  Xi = class {
    sharedResizeObserver;
    callbacks = new WeakMap();
    constructor() {
      this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
    }
    updateResizedElements(t) {
      for (let o of t) {
        let n = this.callbacks.get(o.target);
        n && n(o.contentRect);
      }
    }
    observeElementWithCallback(t, o) {
      (this.sharedResizeObserver.observe(t), this.callbacks.set(t, o));
    }
    unobserve(t) {
      (this.sharedResizeObserver.unobserve(t), this.callbacks.delete(t));
    }
  },
  wn = Ze() ? new Xi() : void 0;
function AL(e) {
  let t = qi();
  (0, So.useEffect)(() => {
    let o = e?.current;
    if (o)
      return (
        wn?.observeElementWithCallback(e.current, t),
        () => {
          wn?.unobserve(o);
        }
      );
  }, [e, t]);
}
function fx(e) {
  let t = qi(),
    o = So.default.useRef(null);
  function n(r) {
    (r.width === 0 && r.height === 0) ||
      ((!o.current || r.height !== o.current.height || r.width !== o.current.width) &&
        ((o.current = { width: r.width, height: r.height }), t()));
  }
  return (
    Dn(() => {
      if (!e.current) return;
      let { offsetWidth: r, offsetHeight: i } = e.current;
      return (
        n({ width: r, height: i }),
        wn.observeElementWithCallback(e.current, n),
        () => {
          e.current && wn.unobserve(e.current);
        }
      );
    }, []),
    o.current
  );
}
var Ji = "data-framer-size-compatibility-wrapper",
  FL = (e) => (t) => {
    let o = So.default.useRef(null),
      n = fx(o),
      r = { [Ji]: !0 },
      i = !!n,
      a = t.width ?? Nd,
      s = t.height ?? Nd;
    return (0, Yi.jsx)("div", {
      style: { width: "100%", height: "100%", pointerEvents: "none" },
      ref: o,
      ...r,
      children: i && (0, Yi.jsx)(e, { ...t, width: n?.width ?? a, height: n?.height ?? s }),
    });
  };
function Rd(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(Ji)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Id)
    .map(Pd);
}
function Id(e) {
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
function Pd(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents")
    return e;
  let t = [...e.children].find(Id);
  return t ? Pd(t) : e;
}
var vd = E(oe(), 1);
function No(e) {
  return e.replace(/^id_/u, "").replace(/\\/gu, "");
}
function kd(e, t, o = () => [], n = {}) {
  let { id: r, visible: i, _needsMeasure: a } = e,
    { skipHook: s = !1 } = n,
    l = (0, vd.useContext)(Vo),
    u = _.current() === _.canvas;
  Dn(() => {
    !u ||
      l ||
      s ||
      (t.current && r && i && a && se.queueMeasureRequest(No(r), t.current, o(t.current)));
  });
}
function qL(e) {
  let t = e.closest("[data-framer-component-container]");
  t && se.queueMeasureRequest(No(t.id), t, Rd(t));
}
var Pe = E(oe(), 1);
function mx(e) {
  let t = Object.create(Object.prototype);
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
var yx =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
  Dd = mx(
    (e) =>
      yx.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  );
var Ae = E(oe(), 1);
var ft = { borderRadius: "inherit", cornerShape: "inherit" };
var wd = [1, 2, 2.2],
  hx = [512, 1024, 2048, 4096];
function Ld(e, t) {
  if (e === void 0 || t === void 0) return;
  let o = e,
    n = t,
    r = 0;
  t > e && ((o = t), (n = e), (r = 1));
  let i = o / n,
    a = [];
  for (let s of hx) {
    if (o <= s) return a;
    a.push({ maxSideSize: s, width: r === 0 ? s : Math.trunc(s / i) });
  }
  return a;
}
function Zi(e, t) {
  try {
    let o = new URL(e);
    return (
      t ? o.searchParams.set("scale-down-to", `${t}`) : o.searchParams.delete("scale-down-to"),
      o.toString()
    );
  } catch {
    return e;
  }
}
var xx = 512;
function gx(e, t, o) {
  if (!o || o.length === 0 || !t.pixelWidth) return;
  let n = [];
  for (let r of o) {
    if (r.width < xx) continue;
    let i = Zi(e, r.maxSideSize);
    n.push(`${i} ${r.width}w`);
  }
  return (n.push(`${Zi(e, null)} ${t.pixelWidth}w`), n.join(", ") || void 0);
}
function bx(e, t, o) {
  if (!t.pixelWidth || !t.pixelHeight || !o?.width || !o?.height) return;
  let n = [],
    r = Math.max(t.pixelWidth, t.pixelHeight),
    i = Math.max(o.width / t.pixelWidth, o.height / t.pixelHeight);
  for (let a of wd) {
    let s = Math.round(r * a * i),
      l = Zi(e, s);
    n.push({ src: l, scale: a });
  }
  return n;
}
function Md(e, t, o) {
  if (!["auto", "lossless"].includes(t.preferredSize ?? "")) return { src: o, srcSet: void 0 };
  if (e) {
    let n = bx(o, t, e);
    if (!n?.length) return { src: o, srcSet: void 0 };
    let [r, ...i] = n;
    return { src: r?.src, srcSet: i.map(({ src: a, scale: s }) => `${a} ${s}x`).join(", ") };
  } else {
    let n = Ld(t.pixelWidth, t.pixelHeight);
    return { src: o, srcSet: gx(o, t, n) };
  }
}
var $e = E(re(), 1),
  Qi = { position: "absolute", ...ft, top: 0, right: 0, bottom: 0, left: 0 };
function Tx() {
  return {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "64px auto",
    backgroundImage: bs(se.imagePlaceholderSvg),
  };
}
function Cx(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function Ed(e, t) {
  let o = e ?? "center",
    n = t ?? "center";
  return o === "center" && n === "center" ? "center" : o + " " + n;
}
function ea(e) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    ...ft,
    objectPosition: Ed(e.positionX, e.positionY),
    objectFit: Cx(e.fit),
  };
}
function Vx(e) {
  let t = Ae.default.useRef(e ? "auto" : "async"),
    o = (0, Ae.useCallback)((i) => {
      ((t.current = "auto"), (i.decoding = "auto"));
    }, []),
    n = (0, Ae.useCallback)(
      (i) => {
        o(i.currentTarget);
      },
      [o]
    ),
    r = (0, Ae.useCallback)(
      (i) => {
        i?.complete && o(i);
      },
      [o]
    );
  return { decoding: t.current, onImageLoad: n, onImageMount: r };
}
function Sx({
  image: e,
  containerSize: t,
  nodeId: o,
  alt: n,
  draggable: r,
  avoidAsyncDecoding: i,
}) {
  let a = se.useImageSource(e, t, o),
    s = ea(e),
    { decoding: l, onImageLoad: u, onImageMount: c } = Vx(i),
    { srcSet: m, src: f } =
      "srcSet" in e ? { src: a, srcSet: e.srcSet } : Md(e.nodeFixedSize, e, a);
  return (0, $e.jsx)("img", {
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
    alt: n ?? e.alt ?? "",
    style: s,
    draggable: r,
  });
}
function Nx({ image: e, containerSize: t, nodeId: o }) {
  let n = Ae.default.useRef(null),
    r = se.useImageElement(e, t, o),
    i = ea(e);
  return (
    Ae.default.useLayoutEffect(() => {
      let a = n.current;
      if (a !== null)
        return (
          a.appendChild(r),
          () => {
            a.removeChild(r);
          }
        );
    }, [r]),
    Object.assign(r.style, i),
    (0, $e.jsx)("div", { ref: n, style: { display: "contents", ...ft } })
  );
}
function Rx({ nodeId: e, image: t, containerSize: o }) {
  let n = Ae.default.useRef(null),
    r = se.useImageSource(t, o, e);
  return (
    Ae.default.useLayoutEffect(() => {
      let i = n.current;
      if (i === null) return;
      let a = ea(t);
      se.renderOptimizedCanvasImage(i, r, a, e);
    }, [e, t, r]),
    (0, $e.jsx)("div", { ref: n, style: { display: "contents", ...ft } })
  );
}
function Bd({ layoutId: e, image: t, ...o }) {
  e && (e += "-background");
  let n = null,
    r = !!e,
    i = null;
  if (ne(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let s = Oe(t.backgroundSize) ? t.backgroundSize : 1,
        l = { width: Math.round(s * t.pixelWidth), height: Math.round(s * t.pixelHeight) },
        u = Bs(s * (t.pixelWidth / 2)),
        c = se.useImageSource(t, l);
      ((n = {
        ...Qi,
        backgroundImage: `url(${c})`,
        backgroundRepeat: "repeat",
        backgroundPosition: Ed(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${u}px auto`,
      }),
        (i = null),
        (r = !0));
    } else
      _.current() !== _.canvas
        ? (i = (0, $e.jsx)(Sx, { image: t, avoidAsyncDecoding: _.current() === _.export, ...o }))
        : se.canRenderOptimizedCanvasImage(se.useImageSource(t))
          ? (i = (0, $e.jsx)(Rx, { image: t, ...o }))
          : (i = (0, $e.jsx)(Nx, { image: t, ...o }));
  let a = i ? Qi : (n ?? { ...Qi, ...Tx() });
  return r
    ? (0, $e.jsx)(et.div, {
        layoutId: e,
        style: a,
        "data-framer-background-image-wrapper": !0,
        children: i,
      })
    : (0, $e.jsx)("div", { style: a, "data-framer-background-image-wrapper": !0, children: i });
}
var ta = E(re(), 1);
function Ix(e, t, o = !0) {
  let { borderWidth: n, borderStyle: r, borderColor: i } = e;
  if (!n) return;
  let a, s, l, u;
  if (
    (typeof n == "number"
      ? (a = s = l = u = n)
      : ((a = n.top || 0), (s = n.bottom || 0), (l = n.left || 0), (u = n.right || 0)),
    !(a === 0 && s === 0 && l === 0 && u === 0))
  ) {
    if (o && a === s && a === l && a === u) {
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
function Ad(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let o = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...ft,
    pointerEvents: "none",
  };
  return e.border
    ? ((o.border = e.border), (0, ta.jsx)(et.div, { style: o }))
    : (Ix(e, o, !1), (0, ta.jsx)(et.div, { "data-frame-border": !0, style: o, layoutId: t }));
}
function Fd(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Od(e) {
  return e && e !== "search" && e !== "slot" && e !== "template" ? et[e] : et.div;
}
var Px = ds();
function vx(e, t, o) {
  ((e["data-framer-layout-hint-center-x"] = t === !0 || t === "x" ? !0 : void 0),
    (e["data-framer-layout-hint-center-y"] = t === !0 || t === "y" ? !0 : void 0),
    (e["data-framer-layout-hint-x"] = o?.x),
    (e["data-framer-layout-hint-y"] = o?.y));
}
function Wd(e, t) {
  let o = {};
  return (
    _.current() !== _.canvas ||
      vx(o, Px ? e : void 0, {
        x: typeof t?.x == "number" ? t.x : void 0,
        y: typeof t?.y == "number" ? t.y : void 0,
      }),
    o
  );
}
var Ln = E(oe(), 1);
function Mn(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let o = e._forwardedOverrides;
  return o
    ? ((t = Ln.default.Children.map(t, (n) =>
        Ln.default.isValidElement(n) ? Ln.default.cloneElement(n, { _forwardedOverrides: o }) : n
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
var En = E(oe(), 1);
function Bn(e, { specificLayoutId: t, postfix: o } = {}) {
  let { name: n, layoutIdKey: r, duplicatedFrom: i, __fromCodeComponentNode: a = !1, drag: s } = e,
    { getLayoutId: l, enabled: u } = (0, En.useContext)(Ut);
  return (0, En.useMemo)(() => {
    if (!u) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !r || a)) return;
    let m = c || l({ id: r, name: n, duplicatedFrom: i });
    if (m) return o ? `${m}-${o}` : m;
  }, [u]);
}
function zd({ background: e, backgroundColor: t }, o) {
  t
    ? typeof t == "string" || zi(t)
      ? (o.backgroundColor = t)
      : g.isColorObject(e) && (o.backgroundColor = e.initialValue || g.toRgbString(e))
    : e &&
      ((e = ie.get(e, null)),
      typeof e == "string" || zi(e)
        ? (o.background = e)
        : Rn.isLinearGradient(e)
          ? (o.background = Rn.toCSS(e))
          : In.isRadialGradient(e)
            ? (o.background = In.toCSS(e))
            : g.isColorObject(e) && (o.backgroundColor = e.initialValue || g.toRgbString(e)));
}
function O(e, t, o, n) {
  if ((n === void 0 && (n = t), e[t] !== void 0)) {
    o[n] = e[t];
    return;
  }
}
function Hd(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Gd(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function jd(e) {
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
  let { cornerShape: o } = e;
  return (
    Vs(o)
      ? (t.cornerShape = Ss(() => `superellipse(${o.get()})`))
      : o !== void 0 && (t.cornerShape = `superellipse(${o})`),
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
    zd(e, t),
    t
  );
}
var Ke = E(re(), 1);
function kx(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof fe(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var _d = [
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
  Dx = new Set([..._d, ..._d.map((e) => `${e}Capture`)]);
function wx(e) {
  if (e.drag) return "grab";
  for (let t in e) if (Dx.has(t)) return "pointer";
}
var oa = "overflow";
function Lx(e) {
  return $d(e) ? !0 : e.style ? !!$d(e.style) : !1;
}
function $d(e) {
  return oa in e && (e[oa] === "scroll" || e[oa] === "auto");
}
function An(e) {
  let {
      left: t,
      top: o,
      bottom: n,
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
    C = Ce(e.minWidth),
    V = Ce(e.minHeight),
    R = Ce(e.maxWidth),
    y = Ce(e.maxHeight);
  return {
    top: Ce(o),
    left: Ce(t),
    bottom: Ce(n),
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
    minWidth: C,
    minHeight: V,
    maxWidth: R,
    maxHeight: y,
  };
}
var Kd = { x: 0, y: 0, width: 200, height: 200 };
function Mx(e) {
  let t = (0, Pe.useContext)(Vo),
    { style: o, _initialStyle: n, __fromCanvasComponent: r, size: i } = e,
    a = An(e),
    s = td(a),
    l = {
      display: "block",
      flex: o?.flex ?? "0 0 auto",
      userSelect: _.current() !== _.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let u = !kx(e) && !e.__fromCanvasComponent && !Lx(e),
    c = e.style ? !("pointerEvents" in e.style) : !0;
  u && c && (l.pointerEvents = "none");
  let f = Pe.default.Children.count(e.children) > 0 &&
      Pe.default.Children.toArray(e.children).every(
        (y) => typeof y == "string" || typeof y == "number"
      ) && { display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" },
    h = jd(e);
  (i === void 0 && !r && (Hd(h) || (l.width = Kd.width), Gd(h) || (l.height = Kd.height)),
    a.minWidth !== void 0 && (l.minWidth = a.minWidth),
    a.minHeight !== void 0 && (l.minHeight = a.minHeight));
  let C = {};
  (jt(a) &&
    s &&
    !Oi(e) &&
    (C = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, n, h, C, o),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Pn.applyWillChange(e, l, !0));
  let V = l;
  l.transform || (V = { x: 0, y: 0, ...l });
  let R = _i();
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
var Ex = new Set([
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
function Bx(e) {
  let t = {};
  for (let o in e)
    (Ns(o) || Dd(o)) && !Ex.has(o)
      ? (t[o] = fe(e)[o])
      : (o === "positionTransition" || o === "layoutTransition") &&
        ((t.layout = !0),
        typeof fe(e)[o] != "boolean" && !e.transition && (t.transition = fe(e)[o]));
  return t;
}
function Ax(e) {
  return "data-framer-name" in e;
}
var Fx = (0, Pe.forwardRef)(function (t, o) {
    let { name: n, center: r, border: i, _border: a, __portal: s } = t,
      { props: l, children: u } = Mn(t),
      c = Bx(l),
      m = Bn(t),
      f = wx(t),
      h = (0, Pe.useRef)(null),
      C = o ?? h,
      V = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": f,
        "data-framer-highlight": f === "pointer" ? !0 : void 0,
        "data-layoutid": m,
        "data-framer-offset-parent-id": fe(t)["data-framer-offset-parent-id"],
      };
    !Ax(t) && n && (fe(V)["data-framer-name"] = n);
    let [R, y] = Mx(l),
      T = An(l),
      W = Oi(T),
      j = r && !(y && !W && jt(T)) ? r : void 0;
    (j
      ? c.transformTemplate || (c.transformTemplate = Vd(r))
      : c.transformTemplate || (c.transformTemplate = void 0),
      Object.assign(V, Wd(j, l.style)),
      kd(t, C));
    let v = od(t),
      J = (0, Pe.useContext)(Vo),
      de = Wx(l, T, y, J),
      ae = Sn(
        (0, Ke.jsxs)(Ke.Fragment, {
          children: [
            v
              ? (0, Ke.jsx)(Bd, {
                  alt: t.alt ?? "",
                  image: v,
                  containerSize: y ?? void 0,
                  nodeId: t.id && No(t.id),
                  layoutId: m,
                })
              : null,
            u,
            (0, Ke.jsx)(Ad, { ...a, border: i, layoutId: m }),
          ],
        }),
        de
      ),
      Ye = Od(t.as),
      nt = Fd(v);
    return (
      t.fitImageDimension &&
        nt &&
        ((R[t.fitImageDimension] = "auto"), (R.aspectRatio = nt.width / nt.height)),
      (0, Ke.jsxs)(Ye, { ...V, ...c, layoutId: m, style: R, ref: C, children: [ae, s] })
    );
  }),
  Ox = (0, Pe.forwardRef)(function (t, o) {
    let { visible: n = !0 } = t;
    return n ? (0, Ke.jsx)(Fx, { ...t, ref: o }) : null;
  }),
  Ud = Cd(Ox);
function Wx(e, t, o, n) {
  if (n) return o ? { width: o.width, height: o.height } : 1;
  let { _usesDOMRect: r } = e,
    { widthType: i = 0, heightType: a = 0, width: s, height: l } = t;
  return o && !r
    ? o
    : i === 0 && a === 0 && typeof s == "number" && typeof l == "number"
      ? { width: s, height: l }
      : r || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
var zx = ["actionIdentifier", "identifier", "controls"];
function Fn(e) {
  return b(e) && zx.every((t) => t in e);
}
function lE(e) {
  return b(e) && "gamepadId" in e;
}
function uE(e, t) {
  if (!t.has(e.identifier)) return (t.add(e.identifier), e);
  let o = Ds();
  return (t.add(o), { ...e, identifier: o });
}
var Hx = ["start", "center", "end"];
function mE(e) {
  return p(e) ? Hx.includes(e) : !1;
}
var Gx = ["fixed", "minmax"];
function yE(e) {
  return p(e) ? Gx.includes(e) : !1;
}
var jx = ["fixed", "auto", "fit"];
function hE(e) {
  return p(e) ? jx.includes(e) : !1;
}
var _x = "columnMasonry";
var $x = ["stack", "grid"],
  xE = {
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
  qd = "horizontal",
  Xd = "center",
  Yd = "center",
  Jd = "layout";
function mt(e) {
  return Jd in e;
}
function gE(e) {
  return p(e) ? $x.includes(e) : !1;
}
var Kx = ["start", "end", "center"];
function Ux(e) {
  return I(e) ? !1 : A(e) ? !0 : na(e) && Kx.includes(e);
}
function bE(e) {
  return !mt(e) || e.layout !== "stack" || !e.stackDistribution ? !1 : Ux(e.stackDistribution);
}
function Zd(e) {
  return mt(e) && !I(e.layout);
}
function TE(e) {
  return Zd(e) && e.layout === "stack";
}
function qx(e) {
  return Zd(e) && e.layout === "grid";
}
function CE(e) {
  return qx(e) && e.gridType === _x;
}
function VE(e) {
  return Jd in e;
}
function Xx(e) {
  if (Qd(e)) return e;
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
var On = ["horizontal", "vertical"];
function Qd(e) {
  return p(e) && On.includes(e);
}
function SE(e) {
  if (!Qd(e)) return e;
  switch (e) {
    case "horizontal":
      return "row";
    case "vertical":
      return "column";
    default:
      w(e);
  }
}
var Yx = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];
function Jx(e) {
  return p(e) && Yx.includes(e);
}
var Wn = ["start", "center", "end", "space-between", "space-around", "space-evenly"];
function na(e) {
  return p(e) && Wn.includes(e);
}
function zn(e) {
  if (!na(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function Zx(e) {
  if (na(e)) return e;
  if (Jx(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
var Qx = ["flex-start", "flex-end", "center"];
function ec(e) {
  return p(e) && Qx.includes(e);
}
var Hn = ["start", "center", "end"];
function tc(e) {
  return p(e) ? Hn.includes(e) : !1;
}
function eg(e) {
  if (tc(e)) return e;
  if (ec(e))
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
  if (ec(e) || !tc(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function NE(e, t) {
  switch (e) {
    case "stackDirection":
      return Xx(t);
    case "stackDistribution":
      return Zx(t);
    case "stackAlignment":
      return eg(t);
    default:
      return t;
  }
}
function RE(e) {
  return !e || !mt(e) ? null : (e.layout ?? null);
}
var tg = ["sticky", "fixed", "absolute"],
  og = new Set(tg);
function vE(e) {
  return p(e) && og.has(e);
}
var kE = {
    position: void 0,
    positionStickyTop: void 0,
    positionStickyRight: void 0,
    positionStickyBottom: void 0,
    positionStickyLeft: void 0,
  },
  ng = "position";
function nc(e) {
  return !e || e.__unsafeIsSlotPropertyChildNode() ? !1 : ng in e;
}
var ME = {
    carouselEffectEnabled: void 0,
    carouselEffectLoop: void 0,
    carouselEffectAutoPlay: void 0,
    carouselEffectInterval: void 0,
    carouselEffectSnap: void 0,
  },
  EE = {
    carouselEffectEnabled: !0,
    carouselEffectLoop: !0,
    carouselEffectAutoPlay: !1,
    carouselEffectInterval: 1.5,
    carouselEffectSnap: !0,
  },
  rg = "carouselEffectEnabled";
function ig(e) {
  return rg in e;
}
function rc(e) {
  return ag(e) && e.carouselEffectEnabled === !0;
}
function Ro(e) {
  return nc(e) && e.position !== void 0 && e.cache.carouselAncestorId === e.parentid;
}
function ag(e) {
  return !(
    !ig(e) ||
    !mt(e) ||
    e.layout !== "stack" ||
    sg(e) ||
    e.stackWrapEnabled ||
    ("tickerEffectEnabled" in e && e.tickerEffectEnabled === !0)
  );
}
function sg(e) {
  return !!e.cache.carouselAncestorId;
}
function BE(e) {
  return !!(e.cache.carouselAncestorId && e.parentid === e.cache.carouselAncestorId && !Ro(e));
}
var ra = ["default", "reverse"],
  WE = {
    tickerEffectEnabled: void 0,
    tickerEffectVelocity: void 0,
    tickerEffectHoverModifier: void 0,
    tickerEffectDirectionModifier: void 0,
    tickerEffectDraggable: void 0,
  },
  zE = {
    tickerEffectEnabled: !0,
    tickerEffectVelocity: 100,
    tickerEffectHoverModifier: 100,
    tickerEffectDirectionModifier: "default",
    tickerEffectDraggable: !1,
  },
  lg = "tickerEffectEnabled";
function ug(e) {
  return lg in e;
}
function HE(e) {
  return dg(e) && e.tickerEffectEnabled === !0;
}
function dg(e) {
  return !(
    !ug(e) ||
    !mt(e) ||
    e.layout !== "stack" ||
    cg(e) ||
    e.stackWrapEnabled ||
    ("carouselEffectEnabled" in e && e.carouselEffectEnabled === !0)
  );
}
function cg(e) {
  return !!e.cache.tickerAncestorId;
}
function GE(e) {
  return !!(e.cache.tickerAncestorId && e.parentid === e.cache.tickerAncestorId);
}
function jE(e) {
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
var pg = "usesDOMRect";
function ac(e) {
  return pg in e;
}
var fg = ["start", "center", "end"],
  Gn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  ia = [...Gn, "all"];
function sc(e) {
  return S(e) ? `Span ${e}` : "Span all";
}
var lc = Gn.map(sc),
  uc = ia.map(sc);
function UE(e) {
  return e === "all" ? !0 : S(e) && e > 0;
}
function qE(e) {
  return S(e) && e > 0;
}
function XE(e) {
  return p(e) ? fg.includes(e) : !1;
}
var YE = {
    gridItemHorizontalAlignment: void 0,
    gridItemVerticalAlignment: void 0,
    gridItemColumnSpan: void 0,
    gridItemRowSpan: void 0,
  },
  mg = "gridItemHorizontalAlignment";
function JE(e) {
  return mg in e;
}
var eB = { width: 100, height: 100 },
  tB = { width: 1, height: 1 },
  yg = "width";
function dc(e) {
  return Qo(e) ? !1 : yg in e;
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
  hg = new RegExp(`^([+-]?(?:\\d*\\.)?\\d+(?:e[+-]?\\d+)?)(${pc.join("|")})?$`, "i"),
  xg = new Map(pc.map((e) => [e.toLowerCase(), e]));
function Xt(e, t) {
  let o = e.match(hg);
  if (!o) return [NaN, void 0];
  let [, n, r] = o,
    i = parseFloat(n);
  if (Number.isNaN(i)) return [NaN, void 0];
  if (!r) return [i, t];
  let a = xg.get(r.toLowerCase());
  if (!a) throw Error(`unrecognized CSS unit ${r}`);
  return [i, a];
}
function rB(e) {
  if (!p(e)) return !1;
  let [t] = Xt(e);
  return !Number.isNaN(t);
}
function cc(e, t) {
  return `${e}${t}`;
}
function iB(e, { parentSize: t, viewportSize: o }) {
  if (I(e)) return;
  if (S(e)) return e;
  let [n, r] = Xt(e);
  if (!Number.isNaN(n))
    switch (r) {
      case "px":
        return n;
      case "%":
        return t ? (n / 100) * t : void 0;
      case "vh":
      case "vw":
        return o ? (n / 100) * o : void 0;
      default:
        return;
    }
}
function aB(e) {
  if (!p(e)) return [void 0, void 0, void 0, void 0];
  let t = e.split(" ");
  if (t.length === 1) {
    let [o] = Xt(t[0]),
      n = cc(o, "px");
    return [n, n, n, n];
  }
  return t.length !== 4
    ? [void 0, void 0, void 0, void 0]
    : t.map((o) => {
        let [n] = Xt(o);
        return cc(n, "px");
      });
}
var gg = /(?<value>\d{1,5})px/gu;
function sB(e, t) {
  return e.replace(gg, (o, n) => `${t(Number(n))}px`);
}
function pB(e, t) {
  let o = aa(e, t);
  return !Ve(o);
}
function aa(e, t) {
  let o = bg(e, t);
  return o && at(o) ? o : null;
}
function bg(e, t, o = !0) {
  let n = e.get(t);
  if (!n) return null;
  if (xe(n)) return n;
  if (o) {
    let i = null;
    if (
      (Et(n)
        ? (i = n.cache.replicaAncestorId)
        : n.cache.masterAncestorId && (i = n.cache.masterAncestorId),
      i)
    ) {
      let a = e.getNode(i);
      return !a || !xe(a) ? null : a;
    }
  }
  let r = e.getGroundNodeFor(n);
  return !r || !xe(r) ? null : r;
}
function fB(e, t) {
  return t.parentid && at(e.get(t.parentid));
}
var sa = "element",
  fc = "collection",
  mc = "collectionItemId",
  yc = "pathVariables",
  la = "framer/page-link,";
function jn(e) {
  return ne(e) && e.startsWith(`data:${la}`);
}
function hB(e = null, t = {}) {
  let o = e || "none",
    n = new URL(`data:${la}${o}`);
  return (
    t.element && n.searchParams.append(sa, t.element),
    t.collectionItem &&
      (n.searchParams.append(fc, t.collectionItem.collection),
      n.searchParams.append(mc, t.collectionItem.collectionItemId),
      n.searchParams.append(yc, new URLSearchParams(t.collectionItem.pathVariables).toString())),
    n.href
  );
}
function ua(e) {
  if (jn(e))
    try {
      let t = new URL(e),
        o = t.pathname.substring(la.length),
        n = t.searchParams,
        r = n.has(sa) ? n.get(sa) : void 0,
        i,
        a = n.get(fc),
        s = n.get(mc),
        l = n.get(yc);
      if (a && s && l) {
        let u = Object.fromEntries(new URLSearchParams(l).entries());
        i = { collection: a, collectionItemId: s, pathVariables: u };
      }
      return {
        target: o === "none" ? null : o,
        element: r === "none" ? void 0 : r,
        collectionItem: i,
      };
    } catch {
      return;
    }
}
function xB(e) {
  return !jn(e);
}
function gB(e, t, o) {
  let n = t.getAttribute("data-framer-page-link-target"),
    r,
    i;
  if (n) {
    r = t.getAttribute("data-framer-page-link-element") ?? void 0;
    let s = t.getAttribute("data-framer-page-link-path-variables");
    s && (i = Object.fromEntries(new URLSearchParams(s).entries()));
  } else {
    let s = t.getAttribute("href");
    if (!s) return !1;
    let l = ua(s);
    if (!l?.target) return !1;
    ((n = l.target), (r = l.element ?? void 0), (i = l.collectionItem?.pathVariables));
  }
  let a = r ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(n, r, Object.assign({}, o, i), a), !0);
}
var hc = "|local|";
function xc(e, t) {
  for (let o in e) if (e[o] === t) return !0;
  return !1;
}
function gc(e) {
  return xc(z, e);
}
var Tg = Oo("RawControlProp"),
  bc = "type";
function ve(e) {
  if (!b(e) || !(bc in e)) return !1;
  let t = e[bc];
  return t === null
    ? (Tg.reportErrorOnceEveryTenMinutes(new Error("Encountered raw control prop with null type"), {
        value: e,
      }),
      !0)
    : gc(t);
}
function vB(e) {
  return b(e) ? Object.values(e).every((t) => t === void 0 || ve(t)) : !1;
}
var da = "$control__";
function ca(e) {
  return e.startsWith(da);
}
function DB(e) {
  return e.substring(da.length);
}
function Cg(e) {
  return `${da}${e}`;
}
function wB(e) {
  let t = {};
  for (let o of Object.keys(e)) {
    let n = e[o];
    t[Cg(o)] = n;
  }
  return t;
}
function LB(e) {
  for (let t in e) if (ca(t)) return !0;
  return !1;
}
var yt = {
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
  Vg = ["blockStyles", "backgroundMask", "textStylePreset"],
  Sg = ["header", "cell"];
function AB(e) {
  return p(e) && Sg.some((t) => e === t);
}
var Ng = {
    textBlock: !0,
    numberedList: !0,
    bulletedList: !0,
    blockquote: !0,
    media: !0,
    module: !0,
    table: !0,
  },
  Rg = ["inlineStyles", "backgroundStyles", "inlineCodeStylePreset", "linkStylePreset"],
  FB = ["openInNewTab", "smoothScroll", "clickTrackingId", "relValues", "preserveParams"];
function Tc(e) {
  return p(e) && e in yt;
}
function Ig(e) {
  return Tc(e) && e.endsWith("Localized");
}
function OB(e) {
  return Ig(e) ? e : `${e}Localized`;
}
var Pg = {
  collectionControlPropLocalized: "collectionControlProp",
  controlPropLocalized: "controlProp",
  richTextNodeLocalized: "richTextNode",
};
function vg(e) {
  return Pg[e];
}
function WB(e) {
  return { ...e, variant: vg(e.variant), childNodes: e.childNodes };
}
function zB(e) {
  return Yt(e) && yt[e.variant].styles;
}
function HB(e) {
  return Rg.some((t) => t in e);
}
function GB(e) {
  return Vg.some((t) => t in e);
}
function jB(e) {
  return Yt(e) && !e.variant.endsWith("Localized");
}
function ht(e, t) {
  return yt[e][t];
}
function Yt(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "type" in e &&
    e.type === "richText" &&
    "variant" in e &&
    Tc(e.variant) &&
    "childNodes" in e &&
    Array.isArray(e.childNodes)
  );
}
function kg(e) {
  return Rs(e, "type") && p(e.type) && Ng[e.type] === !0;
}
function Se(e, t) {
  if (!kg(e)) return !1;
  switch (e.type) {
    case "textBlock":
      return !0;
    case "table":
      return yt[t].tables;
    case "module":
      return yt[t].embeds;
    case "media":
      return yt[t].media;
    case "blockquote":
      return yt[t].blockquotes;
    case "numberedList":
    case "bulletedList":
      return e.childNodes.every((o) => o.childNodes.every((n) => Se(n, t)));
  }
  w(e);
}
var Cc = { cache: !0, treeState: !0, mutable: !0, transient: !0, update: !0 };
var pa = (e) => {};
function KB(e) {
  pa = e;
}
var fa = (e) => {};
function UB(e) {
  fa = e;
}
var ma = (e, t, ...o) => {
  e.assign(t, ...o);
};
function qB(e) {
  ma = e;
}
var _n = class {
  hierarchyChange = !1;
  localizationSourceOwnRevision = 0;
  localizationSourceRevision = 0;
  localizationTranslationOwnRevision = 0;
  localizationTranslationRevision = 0;
  reset() {
    this.hierarchyChange = !1;
  }
};
var $n = class {
  treeLineage = null;
  draft = null;
  tree() {
    return this.treeLineage?.latestTree;
  }
};
function sA(e, t, ...o) {
  ma(e, t, ...o);
}
function wg(e) {
  return e ? e.toJS instanceof Function : !1;
}
var Kn = { mutable: !0, update: 0 },
  Lg = { ...Cc, __class: !0, children: !0, id: !0 },
  Un = class extends js("MutableNode") {
    constructor(t, o, n) {
      (super(),
        pa(this),
        (this.id = t?.id ?? io()),
        (this.parentid = t?.parentid ?? Ls),
        (this.cache = t?.cache ?? o ?? new _n()),
        (this.treeState = n ?? new $n()),
        (this.duplicatedFrom = t?.duplicatedFrom ?? null),
        (this.children = t?.children ?? new Be()),
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
    setProp(t, o) {
      let n = this.asDraft();
      n[t] = o;
    }
    resetToDefault(t) {
      let o = this.asDraft();
      o[t] = void 0;
    }
    deleteProp(t) {
      let o = this.asDraft();
      delete o[t];
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
      this.children && (t.children = this.replicaInfo ? [] : this.children.map((o) => o.toJS()));
      for (let o in this) {
        if (Lg[o]) continue;
        let n = this[o];
        if (o === "replicaInfo" && n) {
          t[o] = JSON.parse(JSON.stringify(n));
          continue;
        }
        if (wg(n)) {
          t[o] = n.toJS();
          continue;
        }
        t[o] = n;
      }
      return t;
    }
    set(t, o) {
      this.treeState.treeLineage?.editHooks?.onTreeEditStart();
      try {
        let n = this.asDraft(o);
        return (n.verifyPropertiesToSet(t), n.assign(t), n);
      } catch (n) {
        throw (this.treeState.treeLineage?.editHooks?.onTreeEditError(n), n);
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
      let o = this.cloneEmpty();
      if (
        (o.assign(this, Kn, { cache: o.cache, treeState: o.treeState, id: o.id }, t), t?.children)
      )
        return o;
      let n = this.children;
      return (n && (o.children = new Be(n.map((r) => r.clone({ parentid: o.id })))), o);
    }
    cloneWithIds(t) {
      let o = this.cloneEmpty();
      if ((o.assign(this, Kn, { cache: o.cache, treeState: o.treeState }, t), t?.children))
        return o;
      let n = this.children;
      return (n && (o.children = new Be(n.map((r) => r.cloneWithIds()))), o);
    }
    cloneWithRenamedIds(t, o) {
      let n = this.cloneEmpty();
      if (
        (n.assign(this, Kn, { cache: n.cache, treeState: n.treeState, id: n.id }, o),
        t.set(this.id, n.id),
        o?.children)
      )
        return n;
      let r = this.children;
      return (
        r && (n.children = new Be(r.map((i) => i.cloneWithRenamedIds(t, { parentid: n.id })))),
        n
      );
    }
    cloneWithCallback(t, o) {
      let n = this.cloneEmpty(),
        r = t(this);
      if (
        (n.assign(this, Kn, { cache: n.cache, treeState: n.treeState, id: n.id }, r),
        o && n.setProp("parentid", o),
        r?.children)
      )
        return n;
      let i = this.children;
      return (i && (n.children = new Be(i.map((a) => a.cloneWithCallback(t, n.id)))), n);
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
    preCommit(t, o) {}
    preFreeze(t, o) {}
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
      let o = this.children.at(t);
      return o || null;
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
      let o = this.children;
      if (o)
        for (let n of o) {
          let r = n.find(t);
          if (r) return r;
        }
      return null;
    }
    *ancestors() {
      let t = this.tree();
      if (!t || !t.has(this.id)) throw Error("Only nodes in a tree have access to their parents.");
      let o = t.get(this.parentid);
      for (; o;) (yield o, (o = t.get(o.parentid)));
    }
    *fastWalk(t = {}) {
      let o = Mg(this);
      if ((yield o, o.skipChildren)) return;
      let n = this.children;
      if (n) for (let r = 0, i = n.length; r < i; r++) yield* n.at(r).fastWalk();
    }
    get(t) {
      return this[t];
    }
    walk() {
      let t = !0,
        o = !1,
        n = [this, 0],
        r = [];
      return {
        [Symbol.iterator]() {
          return this;
        },
        next() {
          if (t) return ((t = !1), { value: n[0], done: !1 });
          if (o) return { value: void 0, done: !0 };
          for (; !n[0].children || n[1] >= n[0].children.length;) {
            let a = r.pop();
            if (!a) return ((o = !0), { value: void 0, done: !0 });
            n = a;
          }
          let i = n[0].children.at(n[1]++);
          return (i.children && (r.push(n), (n = [i, 0])), { value: i, done: !1 });
        },
      };
    }
  };
function Mg(e) {
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
      get: (n) => e[n],
      getSubfield: (...n) => {
        let r = e;
        for (let i of n) {
          if (!r || typeof r != "object") return;
          r = r[i];
        }
        return r;
      },
      isKeySetAndNotInherited: (n) => {
        if (!e.originalid) return !0;
        let r = e.tree();
        if (!r) return !1;
        let i = e;
        for (; i && !i.replicaInfo;) i = r.get(i.parentid);
        let a = i?.replicaInfo?.overrides[e.originalid];
        return !!(a && (Object.hasOwn(a, n) || a._deleted?.includes(n)));
      },
      keys: () => Object.keys(e).values(),
      getLocalizationSourceGroupCache: () => e.cache.localizationSourceGroup,
      setLocalizationSourceGroupCache: (n) => {
        let r = e.cache;
        r.localizationSourceGroup = n;
      },
      skipChildren: !1,
    }
  );
}
var Eg = { color: "rgba(0,0,0,0.25)", x: 0, y: 2, blur: 5 },
  Bg = {
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
function Vc(e, t) {
  let o = { ...t, ...e };
  return (o.id || (o.id = io()), o);
}
function ya(e) {
  if (!b(e) || !("id" in e)) return !1;
  for (let o of Gi) if (!(o in e)) return !1;
  return !0;
}
function Jt(e) {
  return B(e) && e.every(ya);
}
function pA(e) {
  return Vc(e, Eg);
}
function qn(e) {
  return Vc(e, Bg);
}
function fA(e) {
  return { ...e, id: io() };
}
function mA(e, t) {
  return { ...e, ...t };
}
function Ag(e, t = 0) {
  let o = e.indexOf("var(", t);
  if (o === -1) return null;
  let n = o + 4,
    r = 1,
    i;
  for (let a = n; a < e.length; a++)
    if (e[a] === "(") r++;
    else if (e[a] === ")") {
      if ((r--, r === 0)) return { start: o, end: a + 1, commaIndex: i };
    } else i === void 0 && e[a] === "," && (i = a);
  return null;
}
function Fg(e, t) {
  if (!t) return {};
  let { start: o, end: n, commaIndex: r } = t,
    i = e.substring(n).trim();
  return r
    ? {
        customProperty: e.substring(o + 4, r),
        fallback: e.substring(r + 1, n - 1).trim(),
        metadata: i,
      }
    : { customProperty: e.substring(o + 4, n - 1), metadata: i };
}
function Xn(e) {
  let t = Ag(e);
  return Fg(e, t);
}
function CA(e) {
  return !(!Sc(e) || e.__class === "ImageStylePresetNode");
}
function VA(e) {
  return ha(e) && !st(e);
}
function SA(e) {
  if (!Sc(e)) return !1;
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
function Sc(e) {
  return ha(e) && ct(e);
}
var Nc = "boxShadows",
  Rc = (e) => e === Nc;
function ha(e) {
  return b(e) ? Nc in e : !1;
}
function NA(e) {
  return !ha(e) || !Jt(e.boxShadows) ? !1 : e.boxShadows.length > 0;
}
var Ic = "shadows",
  Pc = (e) => e === Ic;
function vA(e) {
  return Ic in e;
}
var kA = { shadows: void 0 };
function xa(e) {
  return b(e) ? e && Hi.every((t) => t in e) : !1;
}
function DA(e) {
  return B(e) && e.every(xa);
}
var Og = "removeTokenVariables";
function vc(e) {
  return typeof e == "object" && e !== null && Og in e;
}
function KA(e, t = !1) {
  let o = {};
  for (let n of e) {
    let r = n.colorForMode(t);
    r && (o[Jn(n)] = r);
  }
  return o;
}
function Dc(e) {
  let t = { light: { srgb: "", p3: "" }, dark: { srgb: "", p3: "" } };
  for (let o of e) {
    let n = Jn(o);
    if (g.isP3String(o.light)) {
      t.light.p3 += `${n}: ${o.light};`;
      let r = dt.fromString(o.light)?.toString("srgb");
      r && (t.light.srgb += `${n}: ${r};`);
    } else t.light.srgb += `${n}: ${o.light};`;
    if (!(!o.dark || o.softDeleted))
      if (g.isP3String(o.dark)) {
        t.dark.p3 += `${n}: ${o.dark};`;
        let r = dt.fromString(o.dark)?.toString("srgb");
        r && (t.dark.srgb += `${n}: ${r};`);
      } else t.dark.srgb += `${n}: ${o.dark};`;
  }
  return t;
}
function UA(e) {
  let t = Dc(e);
  return [
    `body { ${t.light.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.light.p3} } }`,
    `@media (prefers-color-scheme: dark) { body { ${t.dark.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.dark.p3} } } }`,
  ];
}
function qA(e) {
  let t = Dc(e);
  return [
    `body { ${t.light.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.light.p3} } }`,
    `body[data-framer-theme="dark"] { ${t.dark.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.dark.p3} } }`,
  ];
}
function XA(e, t, o = !1) {
  let n,
    r = {};
  for (let a of t) {
    let s = a.colorForMode(o);
    if (!s) return;
    r[a.id] = s;
  }
  if (He(e)) {
    let a = e.html;
    if (Yt(a) || t.some((l) => a.includes(Jn(l)))) {
      let l = e.removeTokenVariables(r);
      l !== a && ((n ??= {}), (n.html = l));
    }
  }
  let i = Wg(e, r);
  return (i && (n = { ...n, ...i }), n);
}
function wc(e) {
  return e === "children" || e === "id" || e === "cache" || e === "treeState";
}
function Wg(e, t) {
  let o;
  return (
    (e instanceof Un ? e.entries() : Object.entries(e)).forEach(([r, i]) => {
      if (wc(r)) return;
      let a,
        s = Pc(r) || Rc(r);
      if (B(i)) {
        let l = [],
          u = !1;
        (i.forEach((c, m) => {
          let h = s && (xa(c) || ya(c)) ? Yn(c, t) : kc(String(m), c, t);
          (h && (u = !0), l.push(h || c));
        }),
          u && (a = l));
      } else a = kc(r, i, t);
      typeof a < "u" && (o || (o = {}), (o[r] = a));
    }),
    o
  );
}
function Io(e, t) {
  if (B(e)) {
    for (let o of e) if (Io(o, t)) return !0;
    return !1;
  }
  if (b(e)) {
    let o = Object.values(e);
    for (let n of o) if (Io(n, t)) return !0;
    return !1;
  }
  return xt(e) ? Ec(e) === t : !1;
}
function YA(e, t) {
  if (He(e)) {
    let o = e.getTextColors(!1);
    for (let r of o) if (Io(r, t)) return !0;
    let n = e.getFills();
    for (let r of n) if (Io(r, t)) return !0;
  }
  for (let o in e) if (!wc(o) && Io(e[o], t)) return !0;
  return !1;
}
function Lc(e, t) {
  if (!xt(e)) return;
  let o = Ec(e);
  if (o) return t[o];
}
function kc(e, t, o) {
  if (ca(e)) return zg(t, o);
  if (vc(t)) {
    let r = t.removeTokenVariables(o);
    if (r) return r;
  }
  let n = Lc(t, o);
  if (n) return n;
  if (xt(t)) return Mc(t);
}
function zg(e, t) {
  if (!ve(e)) return;
  let { value: o } = e,
    n = Yn(o, t);
  return n === void 0 ? void 0 : { ...e, value: n };
}
function Yn(e, t) {
  if (B(e)) {
    let o = !1,
      n = e.map((r) => {
        let i = Yn(r, t);
        return i ? ((o = !0), i) : r;
      });
    return o ? n : void 0;
  }
  if (b(e)) {
    let o = {},
      n = !1;
    for (let r in e) {
      let i = Yn(e[r], t);
      i ? ((n = !0), (o[r] = i)) : (o[r] = e[r]);
    }
    return n ? o : void 0;
  }
  if (xt(e)) return Lc(e, t);
}
var ga = "--token-";
function Jn(e) {
  return `${ga}${e.id}`;
}
function JA(e, t = {}) {
  let o = e.light;
  if (!o) return "";
  let n = g.isColor(o) ? g.toRgbString(g(o)) : o,
    r = `var(${Jn(e)}, ${n})`;
  return t.excludeMetadata === !0 ? r : `${r} ${Hg(e.name, t.packageIdentifier)}`;
}
function Mc(e) {
  let { customProperty: t, fallback: o } = Xn(e);
  if (t && o) return `var(${t}, ${o})`;
  if (t) return `var(${t})`;
}
function ZA(e, t) {
  if (xt(e)) {
    let o = Mc(e);
    if (o) return o;
  }
  return p(e) && t ? t(e) : e;
}
function Hg(e, t) {
  let o = { name: e };
  return (t && t !== hc && (o.packageIdentifier = t), `/* ${JSON.stringify(o)} */`);
}
function ba(e) {
  return e ? e.slice(ga.length) : null;
}
function QA(e, t) {
  let o = t.commaIndex ?? t.end - 1,
    n = e.substring(t.start + 4, o);
  return ba(n);
}
function eF(e) {
  return ba(e);
}
function Ec(e) {
  let { customProperty: t } = Xn(e);
  return ba(t);
}
function tF(e) {
  return Xn(e).fallback || null;
}
function xt(e) {
  return typeof e != "string" ? !1 : e.trim().startsWith(`var(${ga}`);
}
function iF(e) {
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
function aF(e) {
  return e > 0 ? "any" : "__legacy";
}
function sF(e) {
  switch (e) {
    case "any":
    case "auto":
      return !0;
    case "any-prefer-fixed":
    case "fixed":
    case "__legacy":
      return !1;
    default:
      w(e);
  }
}
function lF(e) {
  switch (e) {
    case "any":
    case "any-prefer-fixed":
    case "auto":
      return !0;
    case "fixed":
    case "__legacy":
      return !1;
    default:
      w(e);
  }
}
function uF(e) {
  switch (e) {
    case "any":
    case "any-prefer-fixed":
    case "fixed":
    case "__legacy":
      return !0;
    case "auto":
      return !1;
    default:
      w(e);
  }
}
function dF(e) {
  let t = e.framerContractVersion;
  if (!t) return 0;
  let o = parseInt(t, 10);
  return !Number.isFinite(o) || o < 0 ? 0 : o;
}
function cF(e, t) {
  return e?.[t] !== void 0;
}
var Gg = "getBreakpointValues";
function mF(e) {
  return e ? Gg in e : !1;
}
var jg = "min",
  _g = "max",
  $g = "canvasClassName";
function Kg(e) {
  return b(e)
    ? jg in e
      ? S(e.min)
      : _g in e
        ? S(e.max)
        : $g in e
          ? p(e.canvasClassName)
          : !1
    : !1;
}
function Bc(e) {
  if (!b(e)) return !1;
  for (let t in e) {
    let o = e[t];
    if (Kg(o)) return !0;
  }
  return !1;
}
function Zn(e, t) {
  if (!I(e))
    for (let o in e) {
      let n = e[o],
        r = n?.min ?? 0,
        i = n?.max ?? 1 / 0;
      if (t >= r && t <= i) return o;
    }
}
var VF = { layoutTemplateIdentifierOverride: void 0 },
  qg = "layoutTemplateIdentifier";
function Ac(e) {
  return e ? qg in e : !1;
}
function Fc(e, t) {
  if (!t || !at(t)) return;
  let o = e.getScopeNodeFor(t);
  if (Ac(o)) return o.layoutTemplateIdentifier;
}
function SF(e) {
  return !!(Ac(e) && e.layoutTemplateIdentifier);
}
function Oc(e) {
  return !e || !ac(e) ? !1 : !!e.usesLayoutTemplateRectForModuleIdentifierCached();
}
function Xg(e, t) {
  let o = e.framerDefaultVariant,
    n = e.framerBreakpoints;
  if (!n) return o;
  let r = JSON.parse(n);
  return Zn(r, t) ?? o;
}
function NF(e, t, o) {
  let n = t.componentForIdentifier(e)?.annotations;
  if (n) return Xg(n, o);
}
var Zt = 16,
  PF = { rootFontSize: void 0 },
  Ca = "rootFontSize";
function vF(e) {
  return Ca in e;
}
function Wc(e) {
  return Ca in e && S(e[Ca]);
}
var zc = "--framer-root-font-size";
function HF(e, t, o, n) {
  if (n) {
    let r = Yg(t, n, o);
    if (S(r)) return r;
  }
  if (Lt(e)) return e.getPrimaryVariant().rootFontSize;
  if (ze(e)) {
    let r = e.layoutTemplateIdentifier;
    return r ? Hc(r, o) : e.getPrimaryVariant().rootFontSize;
  }
  return Zg(t.root, o);
}
function Yg(e, t, o) {
  let n = aa(e, t);
  if (n) return Oc(n) ? Jg(e, o, n) : Wc(n) ? n.rootFontSize : Zt;
}
function Jg(e, t, o) {
  let n = Fc(e, o);
  if (!n) return Zt;
  let r = ye(n)?.localId;
  if (!r) return Zt;
  let i = t
    .forType("layoutTemplate")
    .getByLocalId(r)
    .annotations(null, "default")?.framerBreakpoints;
  if (!i || !Bc(i)) return Zt;
  x(dc(o), "Breakpoint node must have size properties");
  let a = Zn(i, o.width);
  return a && S(i[a]?.rootFontSize) ? i[a].rootFontSize : Zt;
}
function Zg(e, t) {
  if (e.layoutTemplateIdentifier) return Hc(e.layoutTemplateIdentifier, t);
  if (!e.homePageNodeId) return;
  let o = t.forType("screen").getByStableName(e.homePageNodeId).annotations(null, "default");
  return Gc(o);
}
function Hc(e, t) {
  let o = ye(e),
    n = t.forType("layoutTemplate").getByLocalId(o.localId).annotations(null, o.exportSpecifier);
  return Gc(n);
}
function Gc(e) {
  if (!e) return;
  let t = e.framerRootFontSize;
  if (S(t)) return t;
}
var Qn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  ke = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
function jc(e) {
  let t = vs(e),
    o = Qn.charAt(t % Qn.length);
  for (t = Math.floor(t / Qn.length); t > 0;)
    ((o += ke.charAt(t % ke.length)), (t = Math.floor(t / ke.length)));
  return o;
}
function Ne() {
  return Ue(Qn) + Ue(ke) + Ue(ke) + Ue(ke) + Ue(ke) + Ue(ke) + Ue(ke) + Ue(ke) + Ue(ke);
}
function Ue(e) {
  return e.charAt(Math.floor(Math.random() * e.length));
}
function _c(e) {
  let t = {};
  for (let o in e) {
    let n = e[o];
    I(n) || (t[o] = n);
  }
  return t;
}
function e0(e) {
  for (let t in e) {
    let o = e[t];
    if (o) return o;
  }
}
var Sa = "webPage",
  Qg = "webPageId",
  Na = "url",
  eb = "url";
function gt(e) {
  return b(e) && "type" in e && (e.type === Sa || e.type === Na);
}
function Va(e) {
  return gt(e) && e.type === Na;
}
function Qt(e) {
  return gt(e) && e.type === Sa;
}
function tb(e) {
  if (eb in e) return Na;
  if (Qg in e) return Sa;
  throw new Error("Link: Cannot infer Link type from link provided without a type.");
}
function $c(e) {
  return { ..._c(e), type: tb(e) };
}
function ob(e) {
  if (!e?.pathVariables) return;
  let t = {};
  for (let o in e.pathVariables) {
    let n = e.pathVariables[o];
    if (!n) continue;
    let r = { identifier: e.collection, collectionItemId: e.collectionItemId, key: o, value: n };
    t[o] = r;
  }
  return t;
}
function er(e) {
  if (A(e) || gt(e)) return e;
  if (jn(e)) {
    let t = ua(e);
    if (!t?.target) return;
    let o = t.collectionItem,
      n = t.element === "none" ? void 0 : t.element;
    return $c({ webPageId: t.target, hash: n || void 0, pathVariables: ob(o) });
  }
  if (!(!p(e) || !e)) return $c({ url: e });
}
function nb(e, t) {
  if (e === t) return !0;
  try {
    return new URL(e).href === new URL(t).href;
  } catch {
    return !1;
  }
}
function t0(e, t, o) {
  return Va(e) && Va(t)
    ? nb(e.url, t.url)
    : !Qt(e) || !Qt(t) || e.webPageId !== t.webPageId
      ? !1
      : o?.ignoreHash
        ? ce(e.pathVariables, t.pathVariables)
        : e.hash !== t.hash
          ? !1
          : ce(e.pathVariables, t.pathVariables) && ce(e.hashVariables, t.hashVariables);
}
function o0(e) {
  if (!Qt(e)) return (Va(e) || void 0, !1);
  if (e.pathVariables) {
    for (let t in e.pathVariables) if (L(e.pathVariables[t])) return !0;
  }
  if (e.hashVariables) {
    for (let t in e.hashVariables) if (L(e.hashVariables[t])) return !0;
  }
  return !1;
}
function n0(e, t) {
  return Qt(e) && !t?.has(e.webPageId);
}
var Kc = ["nofollow", "noreferrer", "me", "ugc", "sponsored"];
var rb = Kc,
  ib = new Set(rb),
  Ra = (e) => ib.has(e),
  Uc = (e) => (B(e) ? e.every(Ra) : !1);
var u0 = { hookIdentifier: void 0 },
  ab = "hookIdentifier";
function sb(e) {
  return !!(e && ab in e);
}
function Po(e) {
  return sb(e) && e.hookIdentifier !== void 0;
}
function eo(e) {
  return typeof e == "string" || Yt(e);
}
function m0(e, t) {
  x(
    typeof e == "string",
    `${t}: Rich text value is stored as JSON here, but this path still expects HTML.`
  );
}
function qc(e, t = (o, n) => o === n) {
  let o = bo;
  for (let n of e)
    if (yn(o)) o = n;
    else if (!t(n, o)) return ro;
  return o;
}
function g0(e, t) {
  let o = e[0];
  if (o === void 0) return bo;
  let n = o[t];
  for (let [r, i] of e.entries()) {
    if (r === 0) continue;
    let a = i[t];
    if (n !== a) return ro;
  }
  return n;
}
function b0(...e) {
  return e.find(Ii);
}
var Yc = "borderColor";
function R0(e) {
  return {
    borderWidth: e.borderPerSide
      ? { top: e.borderTop, right: e.borderRight, bottom: e.borderBottom, left: e.borderLeft }
      : e.borderWidth,
    borderColor: e.borderColor,
    borderStyle: e.borderStyle,
  };
}
function ko(e) {
  if (!b(e)) return !1;
  let t = "borderWidth",
    o = "borderStyle",
    n = "borderPerSide",
    r = "borderTop",
    i = "borderRight",
    a = "borderBottom",
    s = "borderLeft";
  return !(
    !p(e[Yc]) ||
    !p(e[o]) ||
    !ee(e[t]) ||
    !Q(e[n]) ||
    !ee(e[r]) ||
    !ee(e[i]) ||
    !ee(e[s]) ||
    !ee(e[a])
  );
}
var lb = { solid: !0, dashed: !0, dotted: !0, double: !0 };
function I0(e) {
  return p(e) && Object.hasOwn(lb, e);
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
function Jc(e) {
  if (!ko(e)) return e;
  let {
    borderColor: t,
    borderStyle: o,
    borderPerSide: n,
    borderWidth: r,
    borderTop: i,
    borderRight: a,
    borderBottom: s,
    borderLeft: l,
  } = e;
  return n
    ? {
        borderColor: t,
        borderStyle: o,
        borderTopWidth: i,
        borderRightWidth: a,
        borderBottomWidth: s,
        borderLeftWidth: l,
      }
    : { borderColor: t, borderStyle: o, borderWidth: r };
}
function P0(e) {
  let t = { ...ot };
  return (
    ee(e.borderTop) && (t.borderTop = e.borderTop),
    ee(e.borderRight) && (t.borderRight = e.borderRight),
    ee(e.borderBottom) && (t.borderBottom = e.borderBottom),
    ee(e.borderLeft) && (t.borderLeft = e.borderLeft),
    ee(e.borderWidth) && (t.borderWidth = e.borderWidth),
    p(e.borderColor) && (t.borderColor = e.borderColor),
    p(e.borderStyle) && (t.borderStyle = e.borderStyle),
    Q(e.borderPerSide) && (t.borderPerSide = e.borderPerSide),
    t
  );
}
function v0(e) {
  let t = { ...ot };
  return (
    ee(e.borderTop) && (t.borderTop = e.borderTop),
    ee(e.borderRight) && (t.borderRight = e.borderRight),
    ee(e.borderBottom) && (t.borderBottom = e.borderBottom),
    ee(e.borderLeft) && (t.borderLeft = e.borderLeft),
    ee(e.borderWidth) && (t.borderWidth = e.borderWidth),
    p(e.borderColor) && (t.borderColor = e.borderColor),
    p(e.borderStyle) && (t.borderStyle = e.borderStyle),
    Q(e.borderPerSide) && (t.borderPerSide = e.borderPerSide),
    t
  );
}
function k0(e) {
  if (!e) return ot;
  let t = 0,
    o = e.borderTopWidth ?? e.borderWidth ?? t,
    n = e.borderRightWidth ?? e.borderWidth ?? t,
    r = e.borderBottomWidth ?? e.borderWidth ?? t,
    i = e.borderLeftWidth ?? e.borderWidth ?? t,
    a = e.borderWidth ?? ot.borderWidth,
    s = It(qc([o, n, r, i, a])),
    l = e.borderStyle ?? ot.borderStyle,
    u = e.borderColor ?? ot.borderColor;
  return {
    borderPerSide: s,
    borderTop: o,
    borderRight: n,
    borderBottom: r,
    borderLeft: i,
    borderColor: u,
    borderStyle: l,
    borderWidth: a,
  };
}
function Xc(e) {
  return p(e) || I(e);
}
function vo(e) {
  return ee(e) || I(e);
}
function D0(e) {
  if (!b(e)) return !1;
  let t = "borderWidth",
    o = "borderStyle",
    n = "borderTopWidth",
    r = "borderRightWidth",
    i = "borderBottomWidth",
    a = "borderLeftWidth";
  return !(
    !Xc(e[Yc]) ||
    !Xc(e[o]) ||
    !vo(e[n]) ||
    !vo(e[r]) ||
    !vo(e[a]) ||
    !vo(e[i]) ||
    !vo(e[t])
  );
}
var ub = [
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
  db = new Set(ub);
function Zc(e) {
  return p(e) && db.has(e);
}
var E0 = "--framer-custom-cursors";
var cb = "customCursorSmartComponentId";
function B0(e) {
  return b(e) && cb in e;
}
var pb = {
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
  A0 = { ...pb, cursor: void 0, customCursorType: void 0 },
  F0 = "default",
  fb = "cursor";
function Qc(e) {
  return fb in e;
}
function O0(e) {
  if (Qc(e))
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
var W0 = 20;
function mb(e) {
  return p(e.customCursorSmartComponentId);
}
function z0(e, t) {
  return !t || !Qc(t) || t.customCursorType !== "component" || !mb(t)
    ? !1
    : wt(e.get(t.customCursorSmartComponentId));
}
var yb = "single",
  hb = "fused";
function $0(e) {
  return { single: e, fused: [e, e, e, e] };
}
function Do(e) {
  if (!b(e) || !S(e[yb])) return !1;
  let t = e[hb];
  return B(t) && t.length === 4 && t.every(S);
}
function K0(e) {
  return ve(e) && e.type === "fusednumber" && Do(e.value);
}
var xb = "isFused";
function ep(e) {
  return b(e) && Q(e[xb]);
}
var gb = "id";
function bb(e) {
  return gb in e;
}
var Tb = "value";
function Cb(e) {
  return b(e) && bb(e) && Tb in e;
}
function pO(e) {
  return e.type === "array" && op(e.value);
}
function fO(e) {
  return e.type === "object" && (b(e.value) || Ve(e.value));
}
function tp(e) {
  return e.type !== "fusednumber" || !ep(e) ? !1 : Do(e.value);
}
function to(e) {
  return q(e) && e.endsWith("px") && S(Number.parseFloat(e));
}
function Vb(e) {
  if (!q(e)) return !1;
  let [t, o] = Xt(e);
  return !Number.isNaN(t) && o === "%";
}
function mO(e) {
  return b(e) && e.type === "image";
}
var Sb = { string: !0, richtext: !0, image: !0, link: !0 };
function yO(e) {
  return e ? e.type in Sb : !1;
}
function tr(e) {
  return b(e) && S(e.latitude) && S(e.longitude);
}
function hO(e) {
  return !(
    !b(e) ||
    !tr(e.coordinate) ||
    (e.title !== void 0 && !q(e.title)) ||
    (e.address !== void 0 && !q(e.address))
  );
}
function xO(e) {
  return he(e) || op(e);
}
function op(e) {
  return B(e) && e.every(Cb);
}
function gO(e) {
  return A(e) || Q(e);
}
function bO(e) {
  return A(e) || q(e);
}
function TO(e) {
  return A(e) || q(e) || I(e);
}
function CO(e) {
  return q(e) || L(e);
}
function VO(e) {
  return A(e) || q(e) || Q(e) || S(e) || I(e) || Ve(e);
}
function SO(e) {
  return A(e) || B(e);
}
function NO(e) {
  return B(e) && e.every(Fn);
}
function RO(e) {
  return A(e) || q(e) || I(e);
}
function IO(e) {
  return L(e) || Uc(e);
}
function PO(e) {
  return L(e) || typeof e == "boolean" || (typeof e == "number" && Number.isFinite(e));
}
function vO(e) {
  return A(e) || S(e);
}
function kO(e) {
  return b(e);
}
function DO(e) {
  return A(e) || eo(e);
}
function wO(e) {
  return A(e) || q(e);
}
function LO(e) {
  return A(e) || q(e) || I(e);
}
function MO(e) {
  return Qt(e) || I(e);
}
function EO(e) {
  return b(e) || I(e);
}
function BO(e) {
  return b(e) || I(e);
}
function AO(e) {
  return L(e) || ko(e);
}
function FO(e) {
  return L(e) || Zc(e);
}
function OO(e) {
  if (A(e)) return !0;
  if (!q(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? to(t[0]) : t.length === 2 && t.every(to);
}
function WO(e) {
  if (A(e)) return !0;
  if (!q(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? to(t[0]) : t.length === 4 && t.every(to);
}
function zO(e) {
  if (A(e)) return !0;
  if (!q(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? to(t[0]) || Vb(t[0]) : t.length === 4 && t.every(to);
}
function HO(e) {
  return L(e) || q(e) || I(e);
}
function GO(e) {
  return A(e) || (B(e) && e.every(q)) || I(e);
}
function jO(e) {
  return (q(e) && Ie(e)) || L(e) || I(e);
}
function _O(e) {
  return L(e) || q(e) || I(e);
}
function $O(e) {
  return B(e);
}
function KO(e) {
  return tr(e) || L(e) || I(e);
}
function QO(e, t) {
  return e === t ? !0 : e.variant !== t.variant ? !1 : or(e.variant, e.childNodes, t.childNodes);
}
function or(e, t, o) {
  if (t.length !== o.length) return !1;
  for (let n = 0; n < t.length; n++) if (!ip(e, t[n], o[n])) return !1;
  return !0;
}
var H = (e, t, o) => Object.is(t, o),
  wo = (e, t, o) => ce(t, o),
  np = (e, t, o) => Ia(t, o),
  rp = { type: H, tag: H, textDirection: H, childNodes: Mb },
  Nb = { ...rp, blockStyles: wo, backgroundMask: wo, textStylePreset: H },
  Rb = { type: H, textDirection: H, childNodes: ap },
  Ib = { type: H, textDirection: H, listStyleType: H, start: H, childNodes: ap },
  Pb = { type: H, childNodes: or },
  vb = { type: H, mediaType: H, src: H, alt: H, pixelWidth: H, pixelHeight: H, link: np },
  kb = { type: H, identifier: H, embedId: H, props: wo, width: H, alignment: H },
  Db = { type: H, childNodes: wb };
function eW(e, t) {
  return e.id !== void 0 && e.id === t.id && e.variant === t.variant;
}
function tW(e, t, o) {
  return t === o || ip(e, t, o);
}
function ip(e, t, o) {
  if (t.type !== o.type) return !1;
  switch (t.type) {
    case "textBlock":
      return (x(o.type === "textBlock"), ht(e, "styles") ? Fe(e, t, o, Nb) : Fe(e, t, o, rp));
    case "bulletedList":
      return (x(o.type === "bulletedList"), Fe(e, t, o, Rb));
    case "numberedList":
      return (x(o.type === "numberedList"), Fe(e, t, o, Ib));
    case "blockquote":
      return (
        x(o.type === "blockquote"),
        x(ht(e, "blockquotes"), "Document variant does not support blockquotes"),
        Fe(e, t, o, Pb)
      );
    case "media":
      return (
        x(o.type === "media"),
        x(ht(e, "media"), "Document variant does not support media block"),
        Fe(e, t, o, vb)
      );
    case "module":
      return (
        x(o.type === "module"),
        x(ht(e, "embeds"), "Document variant does not support embeds"),
        Fe(e, t, o, kb)
      );
    case "table":
      return (
        x(o.type === "table"),
        x(ht(e, "tables"), "Document variant does not support tables"),
        Fe(e, t, o, Db)
      );
    default:
      w(t);
  }
}
function ap(e, t, o) {
  if (t.length !== o.length) return !1;
  for (let n = 0; n < t.length; n++) if (!or(e, t[n].childNodes, o[n].childNodes)) return !1;
  return !0;
}
function wb(e, t, o) {
  if (t.length !== o.length) return !1;
  for (let n = 0; n < t.length; n++) if (!Lb(e, t[n].childNodes, o[n].childNodes)) return !1;
  return !0;
}
function Lb(e, t, o) {
  if (t.length !== o.length) return !1;
  for (let n = 0; n < t.length; n++) {
    let r = t[n],
      i = o[n];
    if (r.cellType !== i.cellType || !or(e, r.childNodes, i.childNodes)) return !1;
  }
  return !0;
}
function Mb(e, t, o) {
  if (t.length !== o.length) return !1;
  for (let n = 0; n < t.length; n++) if (!Bb(e, t[n], o[n])) return !1;
  return !0;
}
var sp = { type: H, text: H, bold: H, italic: H, inlineCode: H, link: np },
  Eb = {
    ...sp,
    inlineStyles: wo,
    backgroundStyles: wo,
    inlineCodeStylePreset: H,
    linkStylePreset: H,
  };
function Bb(e, t, o) {
  return t.type !== o.type
    ? !1
    : t.type === "lineBreak"
      ? !0
      : o.type !== "text"
        ? !1
        : ht(e, "styles")
          ? Fe(e, t, o, Eb)
          : Fe(e, t, o, sp);
}
function Ia(e, t) {
  return e === t
    ? !0
    : e === void 0 ||
        t === void 0 ||
        !Pt(e.openInNewTab, t.openInNewTab) ||
        !Pt(e.smoothScroll, t.smoothScroll) ||
        !Pt(e.clickTrackingId, t.clickTrackingId) ||
        !Pt(e.preserveParams, t.preserveParams) ||
        !Ab(e.relValues, t.relValues)
      ? !1
      : ce(e.link, t.link);
}
function Ab(e, t) {
  if (e === t) return !0;
  if (e === void 0 || t === void 0) return !1;
  if (L(e) || L(t)) return Pt(e, t);
  if (e.length !== t.length) return !1;
  for (let o = 0; o < e.length; o++) if (e[o] !== t[o]) return !1;
  return !0;
}
function Fe(e, t, o, n) {
  for (let r in n)
    if (Object.hasOwn(n, r)) {
      let i = n[r];
      if (!i(e, t[r], o[r])) return !1;
    }
  return !0;
}
function lp(e, t) {
  return t in e ? Reflect.get(e, t) : void 0;
}
function Pa(e, t, o) {
  return lp(e, o) === lp(t, o);
}
function nr(e) {
  return {
    id: e.id ?? Ne(),
    type: "richText",
    variant: e.variant,
    childNodes: rr(e.variant, e.childNodes),
  };
}
function rr(e, t) {
  return t.map((o) => Fb(e, o));
}
function Fb(e, t) {
  switch (t.type) {
    case "textBlock":
      return Ob(e, t);
    case "bulletedList":
      return Wb(e, t);
    case "numberedList":
      return zb(e, t);
    case "blockquote": {
      let o = Hb(e, t);
      return (x(Se(o, e), "normalizeRichTextDocument: unexpected node: blockquote"), o);
    }
    case "table": {
      let o = Gb(e, t);
      return (x(Se(o, e), "normalizeRichTextDocument: unexpected node: table"), o);
    }
    case "media":
    case "module":
      return t;
  }
}
function Ob(e, t) {
  return { ...t, childNodes: Ub(e, t.childNodes) };
}
function Wb(e, t) {
  let o = t.childNodes.map((n) => up(e, n));
  return { ...t, childNodes: o.length > 0 ? o : [dp()] };
}
function zb(e, t) {
  let o = t.childNodes.map((n) => up(e, n));
  return { ...t, childNodes: o.length > 0 ? o : [dp()] };
}
function Hb(e, t) {
  let o = rr(e, t.childNodes);
  return { ...t, childNodes: o.length > 0 ? o : [Lo()] };
}
function Gb(e, t) {
  if (t.childNodes.length === 0) return { ...t, childNodes: [Qb()] };
  if (t.childNodes.every((n) => n.childNodes.length === 0))
    return { ...t, childNodes: t.childNodes.map((n) => ({ ...n, childNodes: [va()] })) };
  let o = t.childNodes.map((n) => $b(e, n));
  return { ...t, childNodes: jb(e, o) };
}
function jb(e, t) {
  let { width: o, height: n, slots: r } = _b(t);
  for (
    x(o > 0, "richTextDocumentNormalization: table has no cells"),
      x(n > 0, "richTextDocumentNormalization: table has no rows");
    t.length < n;
  )
    t.push(eT());
  for (let i = 0; i < n; i++) {
    let a = r[i],
      s = t[i];
    x(a && s, "richTextDocumentNormalization: row length mismatch");
    let l = 0;
    for (let u = 0; u < a.length; u++) {
      let c = s.childNodes[l],
        m = a[u];
      if (!m?.length) (s.childNodes.splice(l, 0, va()), l++);
      else if (c)
        for (let f of m) {
          x(f, "richTextDocumentNormalization: slotCell is undefined");
          let h = f.cellX + f.width,
            C = f.cellY + f.height;
          (x(
            u >= f.cellX && u < h && i >= f.cellY && i < C,
            () =>
              `richTextDocumentNormalization: table cell bounds error. (${u}, ${i}) not within (${f.cellX}, ${f.cellY})...(${h}, ${C})`
          ),
            f.cell === c && l++);
        }
    }
  }
  return t;
}
function _b(e) {
  let t = [],
    o = 0,
    n = 0,
    r = 0,
    i = [];
  for (let f = 0; f < e.length; f++) a(e[f], f);
  return (
    s(),
    {
      width: o,
      height: n,
      slots: Array.from({ length: n }, (f, h) =>
        Array.from({ length: o }, (C, V) => t[h]?.[V] ?? [])
      ),
    }
  );
  function a(f, h) {
    (n === r && n++,
      x(r <= n, "richTextDocumentNormalization: table forming algorithm height error"));
    let C = 0;
    if ((l(), f.childNodes.length === 0)) {
      r++;
      return;
    }
    for (let V = 0; V < f.childNodes.length; V++) {
      let R = f.childNodes[V];
      for (; C < o && m(C, r);) C++;
      (C === o && o++,
        x(C <= o, "richTextDocumentNormalization: table forming algorithm width error"));
      let y = Math.min(R.columnSpan || 1, 1e3),
        T = Math.min(R.rowSpan ?? 1, 65534),
        W = !1;
      (T === 0 && ((W = !0), (T = 1)), o < C + y && (o = C + y), n < r + T && (n = r + T));
      let j = { cell: R, cellX: C, cellY: r, width: y, height: T };
      (u(j), W && i.push({ cell: j, cellX: C, width: y }), (C += y));
    }
    r += 1;
  }
  function s() {
    for (; r < n;) (l(), (r += 1));
    i = [];
  }
  function l() {
    for (let { cell: f, cellX: h, width: C } of i) (c(f, r, h, h + C), f.height++);
  }
  function u(f) {
    for (let h = f.cellX; h < f.cellX + f.width; h++)
      for (let C = f.cellY; C < f.cellY + f.height; C++) {
        let V = (t[C] ??= []);
        (V[h] ??= []).push(f);
      }
  }
  function c(f, h, C, V) {
    t[h] ??= [];
    for (let R = C; R < V; R++) (t[h][R] ??= []).push(f);
  }
  function m(f, h) {
    return !!t[h]?.[f]?.length;
  }
}
function up(e, t) {
  let o = rr(e, t.childNodes);
  return { ...t, childNodes: o.length > 0 ? o : [Lo("inherit")] };
}
function $b(e, t) {
  return { ...t, childNodes: t.childNodes.map((o) => Kb(e, o)) };
}
function Kb(e, t) {
  let o = rr(e, t.childNodes),
    n = { ...t, childNodes: o.length > 0 ? o : [Lo()] };
  return (
    n.columnSpan !== void 0 && n.columnSpan < 1 && (n.columnSpan = 1),
    n.rowSpan !== void 0 && n.rowSpan < 0 && (n.rowSpan = 0),
    n
  );
}
function Ub(e, t) {
  let n = Xb(t).filter((i) => i.type === "lineBreak" || i.text.length > 0),
    r = Jb(n);
  if (r.some((i) => i.type === "text")) return r;
  for (let i of t)
    if (i.type === "text" && i.text === "" && qb(i)) {
      r.push(i);
      break;
    }
  return r;
}
function qb(e) {
  let t = e;
  return !!(t.inlineStyles || t.linkStylePreset || t.inlineCodeStylePreset);
}
function Xb(e) {
  let t = [];
  for (let o of e) {
    if (
      o.type === "lineBreak" ||
      !o.text.includes(`
`)
    ) {
      t.push(o);
      continue;
    }
    Yb(o, t);
  }
  return t;
}
function Yb(e, t) {
  let o = 0,
    n = !1;
  for (; o < e.text.length;) {
    let r = e.text.indexOf(
      `
`,
      o
    );
    if (r === -1) {
      let a = e.text.slice(o);
      a.length > 0 && t.push({ ...e, id: n ? Ne() : e.id, text: a });
      return;
    }
    let i = e.text.slice(o, r);
    (i.length > 0 && (t.push({ ...e, id: n ? Ne() : e.id, text: i }), (n = !0)),
      t.push({ id: Ne(), type: "lineBreak" }),
      (o = r + 1));
  }
}
function Jb(e) {
  let t = [];
  for (let o of e) {
    let n = t[t.length - 1];
    if (n?.type === "text" && o.type === "text" && Zb(n, o)) {
      t[t.length - 1] = { ...n, text: n.text + o.text };
      continue;
    }
    t.push(o.type === "text" ? { ...o } : o);
  }
  return t;
}
function Zb(e, t) {
  if (e.bold !== t.bold || e.italic !== t.italic || e.inlineCode !== t.inlineCode) return !1;
  let o = "inlineStyles" in e ? e.inlineStyles : void 0,
    n = "inlineStyles" in t ? t.inlineStyles : void 0;
  if (!ce(o, n)) return !1;
  let r = "backgroundStyles" in e ? e.backgroundStyles : void 0,
    i = "backgroundStyles" in t ? t.backgroundStyles : void 0;
  return !ce(r, i) || !Pa(e, t, "inlineCodeStylePreset") || !Pa(e, t, "linkStylePreset")
    ? !1
    : Ia(e.link, t.link);
}
function Lo(e = "auto") {
  return { id: Ne(), type: "textBlock", tag: "p", textDirection: e, childNodes: [] };
}
function dp() {
  return { id: Ne(), type: "listItem", childNodes: [Lo("inherit")] };
}
function Qb() {
  return { id: Ne(), type: "tableRow", childNodes: [va()] };
}
function eT() {
  return { id: Ne(), type: "tableRow", childNodes: [] };
}
function va() {
  return { id: Ne(), type: "tableCell", cellType: "cell", childNodes: [Lo()] };
}
function mW(e, t) {
  t.document?.(e);
  for (let o of e.childNodes) ir(o, t);
}
function yW(e, t) {
  if (t.document?.(e) === !0) return e;
  for (let o of e.childNodes) {
    let n = ar(o, t);
    if (n) return n;
  }
}
function mp(e, t, o = {}) {
  let n = be(e, t.document, (r) => {
    let i = qe(r.childNodes, (a) => sr(e.variant, a, t));
    return i === r.childNodes ? r : { ...r, childNodes: i };
  });
  return n === e ? e : o.normalize === !1 ? n : nr(n);
}
function ir(e, t) {
  switch (e.type) {
    case "textBlock":
      t.textBlock?.(e);
      for (let o of e.childNodes) nT(o, t);
      return;
    case "bulletedList":
      t.bulletedList?.(e);
      for (let o of e.childNodes) cp(o, t);
      return;
    case "numberedList":
      t.numberedList?.(e);
      for (let o of e.childNodes) cp(o, t);
      return;
    case "blockquote":
      t.blockquote?.(e);
      for (let o of e.childNodes) ir(o, t);
      return;
    case "media":
      t.media?.(e);
      return;
    case "module":
      t.module?.(e);
      return;
    case "table":
      t.table?.(e);
      for (let o of e.childNodes) tT(o, t);
      return;
  }
}
function cp(e, t) {
  t.listItem?.(e);
  for (let o of e.childNodes) ir(o, t);
}
function tT(e, t) {
  t.tableRow?.(e);
  for (let o of e.childNodes) oT(o, t);
}
function oT(e, t) {
  t.tableCell?.(e);
  for (let o of e.childNodes) ir(o, t);
}
function nT(e, t) {
  switch (e.type) {
    case "text":
      t.text?.(e);
      return;
    case "lineBreak":
      t.lineBreak?.(e);
      return;
  }
}
function ar(e, t) {
  switch (e.type) {
    case "textBlock":
      if (t.textBlock?.(e) === !0) return e;
      for (let o of e.childNodes) {
        let n = aT(o, t);
        if (n) return n;
      }
      return;
    case "bulletedList":
      if (t.bulletedList?.(e) === !0) return e;
      for (let o of e.childNodes) {
        let n = pp(o, t);
        if (n) return n;
      }
      return;
    case "numberedList":
      if (t.numberedList?.(e) === !0) return e;
      for (let o of e.childNodes) {
        let n = pp(o, t);
        if (n) return n;
      }
      return;
    case "blockquote":
      if (t.blockquote?.(e) === !0) return e;
      for (let o of e.childNodes) {
        let n = ar(o, t);
        if (n) return n;
      }
      return;
    case "media":
      return t.media?.(e) === !0 ? e : void 0;
    case "module":
      return t.module?.(e) === !0 ? e : void 0;
    case "table":
      if (t.table?.(e) === !0) return e;
      for (let o of e.childNodes) {
        let n = rT(o, t);
        if (n) return n;
      }
      return;
  }
}
function pp(e, t) {
  if (t.listItem?.(e) === !0) return e;
  for (let o of e.childNodes) {
    let n = ar(o, t);
    if (n) return n;
  }
}
function rT(e, t) {
  if (t.tableRow?.(e) === !0) return e;
  for (let o of e.childNodes) {
    let n = iT(o, t);
    if (n) return n;
  }
}
function iT(e, t) {
  if (t.tableCell?.(e) === !0) return e;
  for (let o of e.childNodes) {
    let n = ar(o, t);
    if (n) return n;
  }
}
function aT(e, t) {
  switch (e.type) {
    case "text":
      return t.text?.(e) === !0 ? e : void 0;
    case "lineBreak":
      return t.lineBreak?.(e) === !0 ? e : void 0;
  }
}
function sr(e, t, o) {
  switch (t.type) {
    case "textBlock": {
      let n = be(t, o.textBlock, (r) => {
        let i = qe(r.childNodes, (a) => uT(e, a, o));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        x(
          Se(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
    case "bulletedList": {
      let n = be(t, o.bulletedList, (r) => {
        let i = qe(r.childNodes, (a) => fp(e, a, o));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        x(
          Se(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
    case "numberedList": {
      let n = be(t, o.numberedList, (r) => {
        let i = qe(r.childNodes, (a) => fp(e, a, o));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        x(
          Se(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
    case "blockquote": {
      let n = be(t, o.blockquote, (r) => {
        let i = qe(r.childNodes, (a) => sr(e, a, o));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        x(
          Se(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
    case "media": {
      let n = be(t, o.media, (r) => r);
      return (
        x(
          Se(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
    case "module": {
      let n = be(t, o.module, (r) => r);
      return (
        x(
          Se(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
    case "table": {
      let n = be(t, o.table, (r) => {
        let i = qe(r.childNodes, (a) => sT(e, a, o));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        x(
          Se(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
  }
}
function fp(e, t, o) {
  return be(t, o.listItem, (n) => {
    let r = qe(n.childNodes, (i) => sr(e, i, o));
    return r === n.childNodes ? n : { ...n, childNodes: r };
  });
}
function sT(e, t, o) {
  return be(t, o.tableRow, (n) => {
    let r = qe(n.childNodes, (i) => lT(e, i, o));
    return r === n.childNodes ? n : { ...n, childNodes: r };
  });
}
function lT(e, t, o) {
  return be(t, o.tableCell, (n) => {
    let r = qe(n.childNodes, (i) => sr(e, i, o));
    return r === n.childNodes ? n : { ...n, childNodes: r };
  });
}
function uT(e, t, o) {
  switch (t.type) {
    case "text":
      return be(t, o.text, (n) => n);
    case "lineBreak":
      return be(t, o.lineBreak, (n) => n);
  }
}
function be(e, t, o) {
  let n = dT(e, t),
    r = o(n);
  return cT(r, t);
}
function dT(e, t) {
  return !t || typeof t == "function" ? e : (t.enter?.(e) ?? e);
}
function cT(e, t) {
  return t ? (typeof t == "function" ? t(e) : (t.exit?.(e) ?? e)) : e;
}
function qe(e, t) {
  let o;
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (!r) continue;
    let i = t(r);
    i !== r && ((o ??= Array.from(e)), (o[n] = i));
  }
  return o ?? e;
}
function pT(e) {
  return Z(e) || Qe(e);
}
var yp = "optional";
function fT(e) {
  return !!e && yp in e && e[yp] === !0;
}
function mT(e) {
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
        return ne(e.defaultValue) ? e.defaultValue : void 0;
      case "boolean":
        return xs(e.defaultValue) ? e.defaultValue : void 0;
      case "enum":
        return St(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case "fusednumber":
      case "number":
        return Oe(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return Z(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return Z(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
      case "location":
        return Z(e.defaultValue) ? e.defaultValue : void 0;
      case "linkrelvalues":
        return Wo(e.defaultValue) ? e.defaultValue : void 0;
      case "multicollectionreference":
        return Wo(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = Z(e.defaultValue) ? e.defaultValue : {};
        return (Z(e.controls) && hp(t, e.controls), t);
      }
      case "array":
        return Wo(e.defaultValue) ? e.defaultValue : void 0;
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
function hp(e, t) {
  for (let o in t) {
    let n = t[o];
    if (!n) continue;
    let r = e[o];
    if (!St(r) || fT(n)) continue;
    let i = mT(n);
    St(i) || (e[o] = i);
  }
}
function yT(e) {
  if (Z(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function xp(e, t) {
  if (!pT(e)) return;
  let o = yT(e);
  hp(o, t);
}
var gp = "outputControls";
function hT(e) {
  return (Z(e) || Qe(e)) && gp in e;
}
function bp(e, t) {
  Object.assign(e, { [gp]: t });
}
function CW(e) {
  if (hT(e)) return e.outputControls;
}
function Tp(e, t, o) {
  (Object.assign(e, { propertyControls: t }), xp(e, t), o !== void 0 && bp(e, o));
}
function RW(e) {
  return e.propertyControls;
}
function lr(e, t = 2) {
  let o = 0;
  if (typeof e == "number") o = e;
  else if (typeof e == "string") o = parseFloat(e);
  else return;
  if (Number.isInteger(o)) return o;
  let n = 1;
  for (; t-- > 0;) n *= 10;
  return (o < 0 && (n *= -1), Math.round(o * n) / n);
}
function ka(e) {
  let { paddingPerSide: t, paddingTop: o, paddingBottom: n, paddingLeft: r, paddingRight: i } = e;
  return t !== !1 && (o !== void 0 || n !== void 0 || r !== void 0 || i !== void 0);
}
function Cp(e) {
  let { padding: t = 0, paddingTop: o, paddingBottom: n, paddingLeft: r, paddingRight: i } = e;
  return ka(e)
    ? {
        top: o !== void 0 ? o : t,
        bottom: n !== void 0 ? n : t,
        left: r !== void 0 ? r : t,
        right: i !== void 0 ? i : t,
      }
    : { top: t, bottom: t, left: t, right: t };
}
function Vp({ top: e, left: t, bottom: o, right: n }) {
  return e === n && n === o && o === t ? `${e}px` : `${e}px ${n}px ${o}px ${t}px`;
}
function DW(e) {
  if (e === "none") return null;
  let t = e
      .trim()
      .split(/\s+/u)
      .map((a) => lr(a)),
    [o, n, r, i] = t;
  switch (t.length) {
    case 1:
      return P(o) ? { top: o, right: o, bottom: o, left: o } : null;
    case 2:
      return !P(o) || !P(n) ? null : { top: o, right: n, bottom: o, left: n };
    case 3:
      return !P(o) || !P(n) || !P(r) ? null : { top: o, right: n, bottom: r, left: n };
    case 4:
      return !P(o) || !P(n) || !P(r) || !P(i) ? null : { top: o, right: n, bottom: r, left: i };
    default:
      return null;
  }
}
var dr = E(oe(), 1);
var Ip = E(re(), 1),
  jW = (() => {
    let e = dr.default.forwardRef(function (o, n) {
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
          __fromCodeComponentNode: C,
          parentSize: V,
          __contentWrapperStyle: R,
          ...y
        } = o,
        T = cr(i),
        W = Np(a),
        j = Np(s),
        v = ka(y) || y.padding ? Vp(Cp(y)) : void 0,
        J = v === void 0 ? {} : { padding: v },
        {
          width: de,
          height: ae,
          minWidth: Ye,
          maxWidth: nt,
          minHeight: ns,
          maxHeight: _r,
          ...$r
        } = R ?? {},
        Je = {
          ...m,
          display: "flex",
          flexDirection: T,
          flexWrap: u ? "wrap" : "nowrap",
          justifyContent: W,
          alignItems: j,
          alignContent: j,
          ...J,
          ...$r,
        };
      (Pn.applyWillChange({ willChangeTransform: h }, Je, !0),
        C &&
          !jt(An(y)) &&
          ((y.width = "100%"), (y.height = "100%"), (y._constraints = { enabled: !0 })));
      let _f = Bn(o),
        { children: $f, props: Kf } = Mn(y, c),
        rs = y.widthType ?? (y.width === "auto" ? 2 : 0),
        is = y.heightType ?? (y.height === "auto" ? 2 : 0),
        Uf = xT($f, i, rs, is),
        qf = Sn(Uf, V ?? 1),
        k = { "data-framer-component-type": "Stack" },
        as = y.__fromCanvasComponent;
      if ((as && (k["data-framer-generated"] = !0), gT(l, W, u))) {
        let ss = Rp(W);
        ((ss || i !== "horizontal") && (Je.columnGap = `${l}px`),
          (ss || i !== "vertical") && (Je.rowGap = `${l}px`));
      }
      return (
        Je.width === void 0 && rs === 2 && (Je.width = "min-content"),
        Je.height === void 0 && is === 2 && (Je.height = "min-content"),
        (0, Ip.jsx)(Ud, {
          as: r,
          background: as ? void 0 : "none",
          ...Kf,
          layoutId: _f,
          ref: n,
          ...k,
          style: Je,
          className: f,
          layoutScroll: !0,
          children: qf,
        })
      );
    });
    return (
      (e.defaultProps = { distribution: "start" }),
      (e.displayName = "Stack"),
      Tp(e, {
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
function Sp(e) {
  return typeof e == "string" && e.endsWith("fr");
}
function ur(e) {
  let t = parseFloat(e);
  return P(t) ? t : 0;
}
function xT(e, t, o, n) {
  return dr.default.Children.map(e, (r) => {
    if (!Ko(r) || !$o(r)) return;
    let i = t === "vertical",
      a = {},
      s = !1,
      { style: l, size: u } = r.props,
      { width: c, height: m } = r.props;
    u !== void 0 && (c === void 0 && (c = u), m === void 0 && (m = u));
    let f = c,
      h = m;
    if (
      (Sp(c) &&
        ((s = !0),
        (s = !0),
        i
          ? o === 2
            ? ((a.alignSelf = "stretch"), (f = "auto"))
            : (f = `${ur(c) * 100}%`)
          : ((f = 1), (a.flexGrow = ur(c)), (a.flexBasis = 0)),
        (a.width = f)),
      Sp(m) &&
        ((s = !0),
        i
          ? ((h = 1), (a.flexGrow = ur(m)), (a.flexBasis = 0))
          : n === 2
            ? ((a.alignSelf = "stretch"), (h = "auto"))
            : (h = `${ur(m) * 100}%`),
        (a.height = h)),
      !s)
    )
      return r;
    let C = { ...l, ...a };
    return dr.default.cloneElement(r, { width: f, height: h, style: C });
  });
}
function Rp(e) {
  return e ? !["space-between", "space-around", "space-evenly", "stretch"].includes(e) : !1;
}
function gT(e, t, o) {
  return !(!e || (!o && !Rp(t)));
}
function cr(e) {
  switch (e) {
    case "vertical":
      return "column";
    case "horizontal":
      return "row";
    default:
      return e;
  }
}
function Np(e) {
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
var pr = ["auto", "pixelated"],
  XW = { imageRendering: void 0 },
  YW = { imageRendering: "auto" },
  bT = "imageRendering";
function JW(e) {
  return He(e) && !A(e.htmlContent) ? !1 : bT in e;
}
var TT = new Set(pr);
function CT(e) {
  return p(e) && TT.has(e);
}
function ZW(e) {
  return CT(e) ? e : "auto";
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
var fr = ["clip", "visible", "hidden", "auto"],
  VT = ["clip", "hidden"],
  ST = ["visible", "auto"],
  rz = { overflow: void 0, overflowX: void 0, overflowY: void 0 },
  vp = "overflow",
  iz = [vp, "overflowX", "overflowY"];
function kp(e) {
  return e ? vp in e : !1;
}
var NT = new Set(fr);
function az(e) {
  return p(e) ? NT.has(e) : !1;
}
var RT = new Set(VT);
function sz(e) {
  return p(e) && RT.has(e);
}
var IT = new Set(ST);
function lz(e) {
  return p(e) && IT.has(e);
}
function Dp(e) {
  return e === "auto" ? "Scroll" : Go(e);
}
function uz(e) {
  if (!kp(e)) return !1;
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
function dz(e) {
  return kp(e) ? e.overflow === "auto" || e.overflowX === "auto" || e.overflowY === "auto" : !1;
}
function cz(e, t) {
  return I(t) && !I(e.overflowX) && !A(e.overflowX) && e.overflowX === e.overflowY;
}
var wp = { visible: "clip", clip: "visible", auto: "hidden", hidden: "auto" };
function pz(e, t, o, n = {}) {
  let r = e.resolveValue(t) || e.resolveValue(o);
  return r ? (n.preferSame ? r : wp[r]) : "clip";
}
function fz(e, t) {
  return e === t || I(t) ? !0 : (I(e) && (e = "visible"), wp[e] === t);
}
var Lp = ["page", "step", "location", "date", "time", "true", "false"],
  yz = { ariaCurrent: void 0 },
  hz = { ariaCurrent: "page" },
  PT = "ariaCurrent";
function xz(e) {
  return PT in e;
}
var Mp = ["menu", "listbox", "tree", "grid", "dialog", "true", "false"],
  bz = { ariaHaspopup: void 0 },
  Tz = { ariaHaspopup: "menu" },
  vT = "ariaHaspopup";
function Cz(e) {
  return vT in e;
}
var Ep = ["off", "polite", "assertive"],
  Sz = { ariaLive: void 0 },
  Nz = { ariaLive: "polite" },
  kT = "ariaLive";
function Rz(e) {
  return kT in e;
}
var Bp = [
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
  Pz = { ariaRole: void 0 },
  vz = { ariaRole: "button" };
function kz(e) {
  return "ariaRole" in e;
}
var mr = [
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
  Lz = "multiply",
  Mz = { blendingMode: void 0 },
  DT = "blendingMode";
function Ez(e) {
  return DT in e;
}
var wT = new Set(mr);
function Bz(e) {
  return p(e) && wT.has(e);
}
var Da = ["contain", "none"],
  Oz = { overscrollBehavior: void 0 },
  LT = "overscrollBehavior";
function Wz(e) {
  return e ? LT in e : !1;
}
function zz(e) {
  return p(e) && (e === "contain" || e === "none");
}
var Hz = { overscrollBehavior: "contain" };
var yr = ["none", "auto"],
  _z = { pointerEvents: void 0 },
  $z = { pointerEvents: "none" },
  MT = "pointerEvents";
function Kz(e) {
  return MT in e;
}
var Ap = new Set(yr);
function Uz(e) {
  return p(e.pointerEvents) && Ap.has(e.pointerEvents);
}
function qz(e) {
  return p(e) && Ap.has(e);
}
var hr = ["none", "auto"],
  Jz = { userSelect: void 0 },
  Zz = { userSelect: "none" },
  ET = "userSelect";
function Qz(e) {
  return ET in e;
}
var Fp = new Set(hr);
function e1(e) {
  return p(e.userSelect) && Fp.has(e.userSelect);
}
function t1(e) {
  return p(e) && Fp.has(e);
}
var wa = ["text", "textarea", "email", "number", "tel", "url", "date", "time"],
  Op = {
    text: "Text",
    textarea: "Text area",
    number: "Number",
    email: "Email",
    tel: "Phone number",
    url: "URL",
    date: "Date",
    time: "Time",
  };
function BT(e) {
  return p(e) && e in Op;
}
function Wp(e) {
  return BT(e) ? Op[e] : "Text";
}
function i1(e) {
  return A(e) || e === "date" || e === "time";
}
function a1(e) {
  return A(e) || e === "text";
}
var AT = "formTextInputType";
function FT(e) {
  return AT in e;
}
var s1 = {
  formTextInputType: void 0,
  formTextAreaResizable: void 0,
  formTextInputMinNumber: void 0,
  formTextInputMaxNumber: void 0,
  formInputMaxLength: void 0,
};
function l1(e) {
  return FT(e) && e.formTextInputType === "textarea";
}
var zp = {
  stackDirection: {
    type: "enum",
    defaultValue: cr(qd),
    options: On.map(cr),
    optionTitles: On.map(De),
    displaySegmentedControl: !0,
    optionIcons: ["direction-horizontal", "direction-vertical"],
  },
  stackDistribution: {
    type: "enum",
    defaultValue: zn(Xd),
    options: Wn.map(zn),
    optionTitles: Wn.map(De),
  },
  stackAlignment: {
    type: "enum",
    defaultValue: zn(Yd),
    options: Hn.map(oc),
    optionTitles: Hn.map(De),
  },
  gridItemColumnSpan: { type: "enum", defaultValue: 1, options: ia, optionTitles: uc },
  gridItemRowSpan: { type: "enum", defaultValue: 1, options: Gn, optionTitles: lc },
  userSelect: {
    type: "enum",
    defaultValue: "auto",
    options: hr.map((e) => e),
    optionTitles: hr.map(De),
  },
  overscrollBehavior: {
    type: "enum",
    defaultValue: "none",
    options: Da.map((e) => e),
    optionTitles: Da.map(De),
  },
  overflow: {
    type: "enum",
    defaultValue: "auto",
    options: fr.map((e) => e),
    optionTitles: fr.map(Dp),
  },
  pointerEvents: {
    type: "enum",
    defaultValue: "auto",
    options: yr.map((e) => e),
    optionTitles: yr.map(De),
  },
  blendingMode: {
    type: "enum",
    defaultValue: "multiply",
    options: mr.map((e) => e),
    optionTitles: mr.map(De),
  },
  formTextInputType: {
    type: "enum",
    defaultValue: "text",
    options: [...wa],
    optionTitles: wa.map(Wp),
  },
  imageRendering: {
    type: "enum",
    defaultValue: "auto",
    displaySegmentedControl: !0,
    options: [...pr],
    optionTitles: pr.map(Pp),
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
  ariaCurrent: { type: "enum", defaultValue: "page", options: [...Lp] },
  ariaHaspopup: { type: "enum", defaultValue: "menu", options: [...Mp] },
  ariaHidden: { type: "boolean", defaultValue: !1 },
  ariaDisabled: { type: "boolean", defaultValue: !1 },
  ariaRoleDescription: { type: "string", defaultValue: "" },
  ariaRole: { type: "enum", defaultValue: "button", options: [...Bp] },
  ariaLive: { type: "enum", defaultValue: "polite", options: [...Ep] },
  ariaDescription: { type: "string", defaultValue: "" },
  tickerEffectDirectionModifier: {
    type: "enum",
    defaultValue: "default",
    displaySegmentedControl: !0,
    options: ra,
    optionTitles: ra.map(ic),
  },
};
function v1(e) {
  return Object.hasOwn(zp, e);
}
function Hp(e) {
  let t = zp[e];
  return (x(t, () => `unknown node property control: ${e}`), t);
}
function Gp(e) {
  let t = {};
  for (let o in e) {
    let n = e[o];
    if (ve(n))
      if (n.type === "fusednumber")
        S(n.value) ? (t[o] = n.value) : tp(n) && (t[o] = n.value.single);
      else if (n.type === "object" && b(n.value)) {
        if (!b(n.value)) continue;
        t[o] = Gp(n.value);
      } else
        n.type === "array" && B(n.value)
          ? (t[o] = n.value
              .filter(ve)
              .map((r) => (r.type === "object" ? (b(r.value) ? Gp(r.value) : void 0) : r.value)))
          : (t[o] = n.value);
  }
  return t;
}
function jp(e) {
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
      return po;
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
var OT = {
  boolean: !0,
  date: !0,
  enum: !0,
  number: !0,
  dimension: !0,
  string: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  object: !0,
  controlReference: !0,
};
function _p(e) {
  if (e.type === "controlReference") {
    if (e.expectedType !== "enum") return !1;
    let t = ye(e.entityIdentifier);
    return Xo(t) && t.type === "collection";
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
function j1(e) {
  return e.type !== "controlReference"
    ? _p({ type: e.type })
    : e.expectedType === "segmentedenum"
      ? !1
      : _p({ type: e.type, expectedType: e.expectedType, entityIdentifier: e.entityIdentifier });
}
function WT(e) {
  return e === "WebPage" || e === "SmartComponent";
}
function zT(e, t) {
  return WT(t) ? Object.hasOwn(OT, e) : !1;
}
function HT(e, t) {
  return zT(e.type, t) ? (e.type !== "controlReference" ? !0 : e.expectedType !== "file") : !1;
}
function te(e, t) {
  return HT(e, t) && e.optional === !0;
}
function oo(e) {
  return !Ps(e) && e.type !== "divider";
}
function _1(e) {
  return e.type === "string";
}
function $1(e) {
  return e.type === "richtext";
}
function K1(e) {
  return e.type === "slug";
}
function U1(e) {
  return e.type === "date";
}
function GT(e) {
  return e.type === "collectionreference";
}
function jT(e) {
  return e.type === "multicollectionreference";
}
function q1(e) {
  return GT(e) || jT(e);
}
function _T(e) {
  return oo(e) && mo(e.type);
}
var X1 = _T;
function Y1(e) {
  return e?.type === "divider";
}
function $T(e) {
  return e.type === "array";
}
function J1(e) {
  return e.type === "object";
}
function KT(e) {
  return e.type === "image";
}
function UT(e) {
  return $T(e) && e.itemVariables.length === 1 && e.itemVariables.every(KT);
}
function La(e) {
  return UT(e) && e.displayGalleryAsArray !== !0;
}
var qT = {
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
  return Object.hasOwn(qT, e.type);
}
var XT = {
  boolean: !0,
  date: !0,
  string: !0,
  number: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  controlReference: !0,
};
function tH(e) {
  return oo(e) ? Object.hasOwn(XT, e.type) : !1;
}
function Up(e, t) {
  let o = { type: e.type, title: t, description: e.description };
  switch (e.valueType) {
    case "number":
      return {
        ...o,
        valueType: e.valueType,
        defaultValue: e.initialValue,
        min: e.options?.min,
        max: e.options?.max,
        step: e.options?.step,
        displayStepper: e.options?.displayStepper,
      };
    case "boolean":
      return { ...o, valueType: e.valueType, defaultValue: e.initialValue };
    default:
      w(e);
  }
}
var YT = /,(?![^(]*\))/u,
  JT = /\s(?![^(]*\))/u,
  ZT = /(?:#|0x)(?:[a-f\d]{3}|[a-f\d]{6})\b|(?:rgb|hsl)a?\([^)]*\)/u,
  qp = (e, t) => {
    let o = e.trim().toLowerCase().split(JT),
      n = o.includes("inset"),
      r = [],
      i = o.find((c) => ZT.test(c)) ?? o[o.length - 1];
    for (let c of o) c !== "inset" && c !== i && r.push(lr(c));
    let [a, s, l, u] = r;
    return qn({
      type: "box",
      inset: n,
      x: a,
      y: s,
      blur: l,
      spread: u,
      color: i,
      id: `box-shadow-${t}`,
    });
  };
function uH(e, t) {
  let o = qp(e, 0);
  if (
    o.color === "transparent" ||
    o.color === "rgba(0, 0, 0, 0)" ||
    (o.x === 0 && o.y === 0 && o.spread === 0 && o.blur === 0)
  )
    return;
  let n = g(o.color);
  if (!(!n || n.a <= 0)) return { ...o, id: t };
}
function Ma(e) {
  return e
    .split(YT)
    .map(qp)
    .filter((t) => {
      if (
        t.color === "transparent" ||
        t.color === "rgba(0, 0, 0, 0)" ||
        (t.x === 0 && t.y === 0 && t.spread === 0 && t.blur === 0)
      )
        return !1;
      let o = g(t.color);
      return o ? o.a > 0 : !1;
    });
}
function dH(e) {
  let t = e.boxShadow;
  if (!(!t || t === "none")) return { boxShadows: Ma(t) };
}
function xH(e) {
  return Jt(e) || A(e) ? e : [];
}
function gH(e) {
  return p(e)
    ? Ma(e)
    : B(e) && e.every(id.is)
      ? e.map((t, o) => qn({ ...t, id: `box-shadow-${o}` }))
      : [];
}
function Xp(e) {
  let { id: t, ...o } = e;
  return o;
}
var QT = "alt";
function Ea(e) {
  return b(e) && QT in e;
}
var Yp = "altLocalized";
function CH(e) {
  return b(e) && Yp in e && !!e[Yp];
}
var eC = "positionX",
  tC = "positionY";
function Jp(e) {
  return b(e) ? eC in e || tC in e : !1;
}
function Ba(e) {
  return Jp(e) ? p(e.positionX) && p(e.positionY) : !1;
}
var oC = {};
function NH(e) {
  return Jp(e) ? e : oC;
}
function Zp(e) {
  return e.embedId !== void 0 ? e.embedId : /-\d+$/u.test(e.id) ? jc(e.id) : e.id;
}
function vH(e) {
  let t = new Set();
  return mp(
    e,
    {
      module(o) {
        let n = o.embedId;
        if (n === void 0) return o;
        if (!t.has(n)) return (t.add(n), o);
        let r = Ne();
        return (t.add(r), { ...o, embedId: r });
      },
    },
    { normalize: !1 }
  );
}
var Qp = /var\(--variable-reference-(?<variableId>[^)-]*)(?:-(?<providerId>[^)]*))?/;
function MH(e) {
  let t = new RegExp(Qp, "g"),
    o = e.matchAll(t),
    n = [];
  for (let r of o) {
    if (!r.groups) continue;
    let { variableId: i, providerId: a } = r.groups,
      s = ci(i, a);
    n.push(s);
  }
  return n;
}
function EH(e) {
  return p(e) && e.startsWith("--");
}
function BH(e) {
  let t = Qp.exec(e);
  if (t?.groups) {
    let { variableId: o, providerId: n } = t.groups;
    return ci(o, n);
  }
}
function nC(e) {
  let t = e.providerId ? `-${e.providerId}` : "";
  return `--variable-reference-${e.id}${t}`;
}
function ef(e) {
  return `var(${nC(e)})`;
}
function AH(e) {
  return `calc(var(${zc}, 1rem) * ${e})`;
}
var rC = /calc\(var\(--framer-root-font-size,\s*1rem\)\s*\*\s*(?<remValue>\d+(?:\.\d+)?)\)/u;
function FH(e) {
  let t = rC.exec(e);
  if (t?.groups) {
    let { remValue: o } = t.groups,
      n = parseFloat(o);
    return S(n) ? [n, "rem"] : void 0;
  }
}
var iC = new Set(["img", "br"]);
function tf(e, t) {
  return Y("ul", { dir: gr(e.textDirection) }, ...e.childNodes.map(t));
}
function of(e, t) {
  return Y(
    "ol",
    {
      dir: gr(e.textDirection),
      start: e.start !== 1 ? e.start : void 0,
      style: e.listStyleType !== "decimal" ? { "--list-style-type": e.listStyleType } : void 0,
    },
    ...e.childNodes.map(t)
  );
}
function nf(e, t) {
  return Y("blockquote", {}, ...e.childNodes.map(t));
}
function rf(e, t) {
  return Y(
    "figure",
    { class: "framer-table-wrapper" },
    Y("table", {}, Y("tbody", {}, ...e.childNodes.map((o) => aC(o, t))))
  );
}
function aC(e, t) {
  return Y("tr", {}, ...e.childNodes.map((o) => sC(o, t)));
}
function sC(e, t) {
  return Y(
    e.cellType === "header" ? "th" : "td",
    { colspan: e.columnSpan, rowspan: e.rowSpan },
    ...e.childNodes.map(t)
  );
}
function af(e) {
  return e.type === "lineBreak" ? Y("br", {}) : lC(e);
}
function lC(e) {
  let t = dC(e.text);
  return (
    e.bold && (t = Y("strong", {}, t)),
    e.italic && (t = Y("em", {}, t)),
    e.inlineCode && (t = Y("code", {}, t)),
    e.link && (t = Y("a", xr(e.link), t)),
    t
  );
}
function xr(e) {
  if (!e) return {};
  let {
    link: t,
    id: o,
    openInNewTab: n,
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
    "data-framer-open-in-new-tab": n === !0 ? !0 : Mo(n),
    "data-framer-smooth-scroll": r === !0 ? !0 : Mo(r),
    "data-framer-click-tracking-id": typeof i == "string" ? i : Mo(i),
    rel: Array.isArray(a) && a.length > 0 ? a.join(" ") : void 0,
    "data-framer-rel": Mo(a),
    "data-framer-preserve-params": typeof s == "boolean" ? String(s) : Mo(s),
  };
}
function gr(e) {
  return e === "inherit" ? "auto" : e;
}
function Y(e, t, ...o) {
  let n = "";
  for (let r in t) {
    let i = t[r];
    if (!(i === void 0 || i === !1)) {
      if (typeof i == "object") {
        r === "style" && (n += ` style="${uC(i)}"`);
        continue;
      }
      if (i === !0) {
        n += ` ${r}=""`;
        continue;
      }
      n += ` ${r}="${sf(String(i))}"`;
    }
  }
  return iC.has(e) ? `<${e}${n}>` : `<${e}${n}>${o.join("")}</${e}>`;
}
function uC(e) {
  let t = "";
  for (let o in e) {
    let n = e[o];
    n !== void 0 && (t && (t += " "), (t += `${o}: ${sf(n)};`));
  }
  return t;
}
function dC(e) {
  return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function sf(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function Mo(e) {
  if (L(e)) return ef(e);
}
function cC(e) {
  return nr(e).childNodes.map(br).join("");
}
function uf(e) {
  return typeof e == "string" ? e : cC(e);
}
function br(e) {
  switch (e.type) {
    case "textBlock":
      return pC(e);
    case "bulletedList":
      return tf(e, lf);
    case "numberedList":
      return of(e, lf);
    case "blockquote":
      return nf(e, br);
    case "media":
      return fC(e);
    case "module":
      return mC(e);
    case "table":
      return rf(e, br);
    default:
      w(e);
  }
}
function pC(e) {
  return Y(e.tag, { dir: gr(e.textDirection) }, ...e.childNodes.map(af));
}
function lf(e) {
  let t = e.childNodes[0],
    o = t?.type === "textBlock" ? t.tag : "p";
  return Y("li", { "data-preset-tag": o }, ...e.childNodes.map(br));
}
function fC(e) {
  return e.mediaType === "video"
    ? Y("video", { class: "framer-image", src: e.src, ...xr(e.link) })
    : Y("img", {
        alt: e.alt,
        "data-framer-width": e.pixelWidth,
        "data-framer-height": e.pixelHeight,
        ...xr(e.link),
        src: e.src,
        class: "framer-image",
      });
}
function mC(e) {
  return Y("framer-module", {
    "data-module-identifier": e.identifier,
    "data-module-embed-id": Zp(e),
    "data-module-props": JSON.stringify(e.props),
    "data-module-width": e.width,
    "data-module-alignment": e.alignment,
  });
}
var df = Symbol("localizedOptionTitles");
function Aa(e, t) {
  e[df] = t;
}
function cf(e) {
  return e[df] ?? null;
}
var qH = "framer/nodePropertyDefinitions",
  yC = [
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
  hC = new Set(yC);
function pf(e) {
  return typeof e == "string" && hC.has(e);
}
var xC = "src";
function Tr(e) {
  return b(e) && p(e[xC]);
}
function Cr(e, t) {
  switch (e.valueType) {
    case "number":
      return typeof t == "number" && Number.isFinite(t);
    case "boolean":
      return typeof t == "boolean";
    default:
      return !1;
  }
}
function eG(e, t) {
  if (Cr(e, t)) return t;
  if (Cr(e, e.defaultValue)) return e.defaultValue;
  switch (e.valueType) {
    case "number":
      return 0;
    case "boolean":
      return !1;
    default:
      return 0;
  }
}
var Lr = E(hf(), 1);
function CG(e, t) {
  if (e.type === "motionvalue") return L(t) || Cr(e, t);
  if (!Wa(e.type, t)) return !1;
  switch (e.type) {
    case "enum":
    case "segmentedenum":
      return L(t) || (he(t) && t.outputType === "enum") ? !0 : e.options.some((o) => o === t);
  }
  return !0;
}
function Wa(e, t) {
  if (L(t)) return !0;
  if (he(t)) return t.outputType === e;
  switch (e) {
    case "motionvalue":
      return Q(t) || (S(t) && Number.isFinite(t));
    case "boolean":
      return Q(t);
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
      return eo(t) || (0, Lr.isElement)(t);
    case "responsiveimage":
      return Tr(t);
    case "file":
    case "image":
      return p(t) || I(t);
    case "enum":
    case "segmentedenum":
      return !!(t === void 0 || t === null || Q(t) || S(t) || p(t));
    case "fusednumber":
      return Do(t);
    case "eventhandler":
      return B(t) && t.every(Fn);
    case "transition":
      return rn(t);
    case "border":
      return ko(t);
    case "link":
      return gt(er(t));
    case "linkrelvalues":
      return B(t) && t.every(Ra);
    case "date":
      return t === void 0 ? !0 : p(t);
    case "object":
      return b(t);
    case "cursor":
      return p(t);
    case "boxshadow":
      return Jt(t);
    case "gap":
    case "padding":
    case "borderradius":
      return p(t);
    case "collectionreference":
      return p(t);
    case "multicollectionreference":
      return B(t) && t.every(p);
    case "trackingid":
      return p(t);
    case "array":
      return B(t);
    case "vectorsetitem":
      return (p(t) && Ie(t)) || (0, Lr.isValidElementType)(t);
    case "changehandler":
      return !1;
    case "location":
      return tr(t);
    case "font":
    case "pagescope":
    case "customcursor":
    case "scrollsectionref":
    case null:
      return !1;
    default:
      w(e);
  }
}
function me(e, t) {
  return Wa(e, t) && !A(t) ? t : jp(e);
}
function M(e) {
  return e.name || "Unknown";
}
function wG(e, t) {
  switch (e.type) {
    case "boolean":
      return za(e, t);
    case "number":
      return Ha(e, t);
    case "color":
      return Ga(e);
    case "string":
      return ja(e, t);
    case "image":
      return _a(e);
    case "link":
      return $a(e);
    case "date":
      return Ka(e, t);
    default:
      return w(e);
  }
}
function za(e, t) {
  let { enabledTitle: o, disabledTitle: n } = e.options ?? {};
  return {
    type: e.type,
    title: M(e),
    enabledTitle: o,
    disabledTitle: n,
    description: e.description,
    optional: te(e, t) ? !0 : void 0,
  };
}
function Ha(e, t) {
  let { min: o, max: n, step: r, unit: i, displayStepper: a } = e.options ?? {};
  return {
    type: e.type,
    title: M(e),
    min: o,
    max: n,
    step: r,
    unit: i,
    displayStepper: a,
    description: e.description,
    optional: te(e, t) ? !0 : void 0,
  };
}
function Ga(e) {
  return { type: e.type, title: M(e), description: e.description };
}
function ja(e, t) {
  let { placeholder: o, displayTextArea: n } = e.options ?? {};
  return {
    type: e.type,
    title: M(e),
    placeholder: o,
    displayTextArea: n,
    description: e.description,
    preventLocalization: e.preventLocalization,
    optional: te(e, t) ? !0 : void 0,
  };
}
function _a(e) {
  return { type: "responsiveimage", title: M(e), description: e.description };
}
function $a(e) {
  return { type: e.type, title: M(e), description: e.description };
}
function Ka(e, t) {
  let o = {
    type: e.type,
    title: M(e),
    description: e.description,
    optional: te(e, t) ? !0 : void 0,
  };
  return (e.options?.displayTime && (o.displayTime = !0), o);
}
var xf = ["string", "date", "number", "enum", "boolean", "slug"];
function TC(e) {
  return e ? xf.includes(e.type) : !1;
}
function CC(e) {
  return xf.includes(e);
}
function uj(e) {
  return e === "enum" || e === "file";
}
function dj(e) {
  return e.type === "controlReference"
    ? e.expectedType === "segmentedenum"
      ? "enum"
      : e.expectedType
    : e.type;
}
function cj(e) {
  switch (e.type) {
    case "slug":
      return "string";
    case "controlReference":
    case "nodePropertyControlReference":
      return e.expectedType === "segmentedenum" ? "enum" : e.expectedType;
    default:
      return e.type;
  }
}
var VC = {
  responsiveimage: "image",
  fusednumber: null,
  slot: null,
  changehandler: null,
  font: null,
  pagescope: null,
};
function pj(e) {
  return sn(e) ? e : VC[e];
}
var SC = ["eventhandler"];
function fj(e) {
  return SC.includes(e.type);
}
function mj(e) {
  return Kp(e) ? (e.required ?? !1) : !1;
}
var NC = { string: !0, richtext: !0, enum: !0 };
function RC(e) {
  return oo(e) ? e.type in NC : !1;
}
function IC(e) {
  return RC(e) && e.preventLocalization === !0;
}
var PC = {
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
function bf(e) {
  return Object.hasOwn(PC, e.type);
}
function yj(e) {
  return e?.type === "array" && e.control.type === "object";
}
function hj(e) {
  return e.type === "array";
}
function vC(e, t, o, n) {
  let r = {},
    i = La(o);
  for (let s of o.itemVariables) {
    if (!oo(s)) continue;
    let l = Ua(e, t, s, n);
    l &&
      (x(bf(l), "Expected array item property control to be usable in an object"),
      i && l.type === "responsiveimage" ? (r[s.id] = wC(l)) : (r[s.id] = l));
  }
  let a = o.initialValue?.map((s) => {
    let l = {};
    if (!s || s.type !== "object" || !b(s.value)) return l;
    for (let u in s.value) {
      let c = s.value[u];
      if (!c) continue;
      let m = Tf(c);
      I(m) || (l[u] = m);
    }
    return l;
  });
  return {
    type: o.type,
    control: { type: "object", controls: r },
    title: M(o),
    description: o.description,
    minCount: o.minCount,
    maxCount: o.maxCount,
    displayGalleryAsArray: o.displayGalleryAsArray === !0 ? !0 : void 0,
    __vekterDefault: a,
  };
}
function kC(e, t, o, n) {
  let r = {};
  for (let a of o.fieldVariables) {
    let s = Ua(e, t, a, n);
    s && (x(bf(s), "Expected object field control to be usable in an object"), (r[a.id] = s));
  }
  let i = te(o, n);
  return {
    type: o.type,
    controls: r,
    title: M(o),
    description: o.description,
    optional: i ? !0 : void 0,
    __vekterDefault: i ? void 0 : DC(o),
  };
}
function DC(e) {
  let t = {};
  for (let o of e.fieldVariables) {
    let n = Tf(e.initialValue[o.id]);
    I(n) || (t[o.id] = n);
  }
  return t;
}
function wC(e) {
  let { __defaultAssetReference: t, __vekterDefault: o, ...n } = e;
  return n;
}
function Tf(e) {
  if (!ve(e)) return;
  let t = e.type;
  if (mo(t))
    switch (t) {
      case "image": {
        if (!p(e.value)) return;
        let o, n, r;
        return (
          Ea(e) && (o = e.alt),
          Ba(e) && ((n = e.positionX), (r = e.positionY)),
          { assetReference: e.value, alt: o, positionX: n, positionY: r }
        );
      }
      case "boolean":
        return Q(e.value) ? e.value : void 0;
      case "number":
        return S(e.value) ? e.value : void 0;
      case "string":
      case "color":
      case "date":
      case "file":
        return p(e.value) ? e.value : void 0;
      case "richtext":
        return eo(e.value) ? e.value : void 0;
      case "link":
        return gt(e.value) ? e.value : void 0;
      case "vectorsetitem":
        return p(e.value) && Ie(e.value) ? e.value : void 0;
      default:
        w(t);
    }
}
function xj(e, t, o) {
  if (!La(e)) return LC(t, o);
}
function LC(e, t) {
  if (!te(e, t)) return MC(e);
}
function MC(e) {
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
      return { type: "link", value: er(e.initialValue) };
    case "vectorsetitem":
      return { type: "vectorsetitem", value: e.initialValue.identifier };
    default:
      w(e);
  }
}
function EC(e, t) {
  let o = te(e, t);
  return { ...za(e, t), defaultValue: o ? void 0 : me(e.type, e.initialValue) };
}
function bt(e, t) {
  let o = te(e, t);
  return { ...Ha(e, t), defaultValue: o ? void 0 : me(e.type, e.initialValue) };
}
function BC(e) {
  let t = xt(e.initialValue) ? e.initialValue : Nn.toFormatString(e.initialValue);
  return { ...Ga(e), defaultValue: me(e.type, t) };
}
function AC(e, t) {
  let { min: o, max: n, step: r, units: i, literals: a } = e.options ?? {},
    s = te(e, t);
  return {
    type: e.type,
    title: M(e),
    defaultValue: s ? void 0 : me(e.type, e.initialValue),
    min: o,
    max: n,
    step: r,
    units: i,
    literals: a,
    description: e.description,
    optional: s ? !0 : void 0,
  };
}
function FC(e, t) {
  let o = te(e, t);
  return {
    ...ja(e, t),
    defaultValue: o ? void 0 : me(e.type, e.initialValue),
    maxLength: e.options?.maxLength,
  };
}
function OC(e) {
  let { placeholder: t, maxLength: o } = e.options ?? {};
  return {
    type: e.type,
    title: M(e),
    defaultValue: uf(me(e.type, e.initialValue)),
    placeholder: t,
    maxLength: o,
    description: e.description,
    preventLocalization: e.preventLocalization,
  };
}
function WC(e) {
  let t = _a(e);
  if (
    (p(e.initialValue) && (t.__defaultAssetReference = e.initialValue),
    ve(e.initialValue) && p(e.initialValue.value))
  ) {
    let o = e.initialValue.value;
    t.__defaultAssetReference = o;
    let n = { assetReference: o };
    ((t.__vekterDefault = n),
      Ea(e.initialValue) && p(e.initialValue.alt) && (n.alt = e.initialValue.alt),
      Ba(e.initialValue) &&
        ((n.positionX = e.initialValue.positionX), (n.positionY = e.initialValue.positionY)));
  }
  return t;
}
function zC(e) {
  let t = e.allowedFileTypes.map((r) => r.extension),
    o = new Set(t),
    n = Array.from(o).filter(Boolean);
  return {
    type: "file",
    title: M(e),
    allowedFileTypes: n,
    __defaultAssetReference: me(e.type, e.initialValue),
    description: e.description,
  };
}
function HC(e, t, o, n) {
  let r = _C(e, t, o, n);
  return r ? { type: o.type, title: M(o), payload: r } : { type: o.type, title: M(o) };
}
var GC = {
  boolean: !0,
  number: !0,
  string: !0,
  color: !0,
  date: !0,
  link: !0,
  image: !0,
  responsiveimage: !0,
};
function jC(e) {
  return Object.hasOwn(GC, e.type);
}
function _C(e, t, o, n) {
  if (!o.payload) return;
  let r = {};
  for (let i of o.payload) {
    let a = Ua(e, t, i, n);
    a && jC(a) && (r[i.id] = a);
  }
  return Cu(r) ? void 0 : r;
}
function $C(e) {
  return { type: e.type, title: M(e), description: e.description };
}
function KC(e) {
  return { type: e.type, title: M(e), description: e.description };
}
function UC(e) {
  return { type: e.type, title: M(e), description: e.description, defaultValue: e.initialValue };
}
function qC(e) {
  let t = me(e.type, e.initialValue);
  return {
    type: e.type,
    title: M(e),
    defaultValue: t ? ll(t) : void 0,
    description: e.description,
  };
}
function XC(e) {
  return { type: e.type, title: M(e), defaultValue: e.initialValue, description: e.description };
}
function YC(e) {
  let t = me(e.type, e.initialValue),
    o = t ? Jc(t) : void 0;
  return { type: e.type, title: M(e), description: e.description, defaultValue: o };
}
function JC(e) {
  return {
    type: e.type,
    title: M(e),
    defaultValue: e.initialValue.map(Xp),
    description: e.description,
  };
}
function ZC(e) {
  return { type: e.type, title: M(e), description: e.description, defaultValue: e.initialValue };
}
function QC(e) {
  return { type: e.type, title: M(e), description: e.description, defaultValue: e.initialValue };
}
function eV(e) {
  return { type: e.type, title: M(e), description: e.description, defaultValue: e.initialValue };
}
function tV(e, t) {
  let o = te(e, t);
  return {
    type: e.type,
    title: M(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: o ? void 0 : e.initialValue,
    optional: o ? !0 : void 0,
  };
}
function oV(e, t) {
  let o = te(e, t);
  return {
    type: e.type,
    title: M(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: o ? void 0 : e.initialValue,
    optional: o ? !0 : void 0,
  };
}
function nV(e) {
  return { type: e.type, title: M(e), description: e.description };
}
function rV(e) {
  return {
    type: e.type,
    title: M(e),
    description: e.description,
    setModuleId: e.setModuleId,
    defaultValue: e.initialValue,
  };
}
function iV(e) {
  return $a(e);
}
function aV(e) {
  return { type: e.type, title: M(e), description: e.description, defaultValue: e.initialValue };
}
function sV(e, t) {
  let o = te(e, t);
  return { ...Ka(e, t), defaultValue: o ? void 0 : me(e.type, e.initialValue) };
}
function lV(e, t) {
  let o = te(e, t),
    n,
    r = [],
    i = [],
    a = [];
  e.cases.forEach((l) => {
    (r.push(l.id),
      i.push(l.name),
      a.push(l.nameLocalized),
      !o && e.initialValue === l.id && (n = l.id));
  });
  let s = {
    type: e.type,
    title: M(e),
    defaultValue: n,
    options: r,
    optionTitles: i,
    description: e.description,
    optional: o ? !0 : void 0,
  };
  return (IC(e) || Aa(s, a), s);
}
function gf(e, t) {
  return e === "enum" ? t === "enum" || t === "segmentedenum" : e === t;
}
function uV(e, t) {
  let o = ye(t);
  if (Gs(o)) {
    let n = e.getNode(o.moduleId);
    if (n) return n.codeComponentIdentifier;
  }
  return t;
}
function dV(e, t, o) {
  if (o.type === "nodePropertyControlReference") {
    if (!pf(o.controlKey)) return null;
    let a = Hp(o.controlKey);
    return (
      x(
        a && gf(a.type, o.expectedType),
        () => `incompatible node property control: ${o.controlKey} ${o.expectedType}`
      ),
      a
    );
  }
  let n = uV(e, o.entityIdentifier),
    r = t.componentForIdentifier(n);
  if (!r?.properties || (r.type !== "component" && r.type !== "data")) return null;
  let i = r.properties[o.controlKey];
  return !i || !gf(i.type, o.expectedType) ? null : i;
}
function cV(e, t, o, n) {
  let r = dV(e, t, o);
  if (!r) return null;
  let i = o.type === "controlReference" && te(o, n);
  switch (o.expectedType) {
    case "enum":
    case "segmentedenum": {
      if (r.type !== "enum") return null;
      let a = {
        type: "enum",
        title: M(o),
        options: r.options,
        optionTitles: r.optionTitles,
        displaySegmentedControl: r.displaySegmentedControl,
        defaultValue: i ? void 0 : me(o.expectedType, o.initialValue),
        optionIcons: r.optionIcons,
        description: o.description,
        optional: i ? !0 : void 0,
      };
      if (o.type === "controlReference") {
        let s = pV(e, t, o, r.options);
        s && Aa(a, s);
      }
      return a;
    }
    case "file":
      return r.type !== "file"
        ? null
        : {
            type: "file",
            title: M(o),
            allowedFileTypes: r.allowedFileTypes,
            description: o.description,
            __defaultAssetReference: p(o.initialValue) ? o.initialValue : void 0,
          };
    default:
      throw Error("Unsupported control reference type");
  }
}
function pV(e, t, o, n) {
  if (!Ie(o.entityIdentifier)) return null;
  let i = Ju(e, o.entityIdentifier)?.getPropertyControls(e, t)[o.controlKey];
  if (i?.type !== "enum") return null;
  let a = cf(i);
  return a ? n.map((s) => a[i.options.indexOf(s)]) : null;
}
function fV(e, t) {
  return {
    type: "string",
    title: M(t),
    description: t.description,
    preventLocalization: e.root.translatePagePaths === "no",
  };
}
var mV = { string: !0, richtext: !0 };
function gj(e) {
  return e.type in mV;
}
function Ua(e, t, o, n) {
  switch (o.type) {
    case "array":
      return vC(e, t, o, n);
    case "object":
      return kC(e, t, o, n);
    case "boolean":
      return EC(o, n);
    case "number":
      return bt(o, n);
    case "motionvalue":
      return Up(o, M(o));
    case "dimension":
      return AC(o, n);
    case "color":
      return BC(o);
    case "string":
      return FC(o, n);
    case "richtext":
      return OC(o);
    case "image":
      return WC(o);
    case "eventhandler":
      return HC(e, t, o, n);
    case "link":
      return iV(o);
    case "linkrelvalues":
      return aV(o);
    case "date":
      return sV(o, n);
    case "enum":
      return lV(o, n);
    case "file":
      return zC(o);
    case "scrollsectionref":
      return $C(o);
    case "customcursor":
      return KC(o);
    case "cursor":
      return UC(o);
    case "transition":
      return qC(o);
    case "border":
      return YC(o);
    case "location":
      return XC(o);
    case "boxshadow":
      return JC(o);
    case "gap":
      return ZC(o);
    case "padding":
      return QC(o);
    case "borderradius":
      return eV(o);
    case "collectionreference":
      return tV(o, n);
    case "multicollectionreference":
      return oV(o, n);
    case "trackingid":
      return nV(o);
    case "vectorsetitem":
      return rV(o);
    case "nodePropertyControlReference":
    case "controlReference":
      return cV(e, t, o, n);
    case "slug":
      return fV(e, o);
    default:
      w(o);
  }
}
function bj(e) {
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
function Tj(e) {
  return e.fallbackValue === "associatedVariable" && !!e.associatedStringVariable;
}
function Cj(e) {
  return e ? wt(e) || Lt(e) || Ys(e) || ze(e) : !1;
}
var yV = "getProvidedVariableMap";
function Nj(e) {
  return !!e && yV in e;
}
var K = class extends Map {};
function qa(e) {
  return e.root.getDefaultLocaleName("Default locale");
}
function Cf(e, t) {
  return !t || !e ? "ltr" : Cn(e.code);
}
var Vf = Symbol("dataIdentifier");
function Xa(e, t) {
  e[Vf] = t;
}
function Dj(e) {
  return e[Vf] ?? null;
}
var Sf = "global_locale",
  Nf = "global_layout_direction",
  Mr = "locale_provider_id",
  Rf = "locale_source_identifier",
  hV = "Left to Right",
  xV = "Right to Left";
function Hj(e) {
  return ze(e) || wt(e) || Lt(e);
}
var Ya = (() => {
    let e, t, o;
    return (n) => {
      let r = n.root.locales;
      if (!r || r.length === 0) return null;
      let i = qa(n);
      return (
        (o && i === e && r === t) ||
          ((e = i),
          (t = r),
          (o = {
            id: Sf,
            type: "enum",
            name: "Locale",
            initialValue: void 0,
            cases: [{ id: To, name: qa(n) }, ...r.map((a) => ({ id: a.id, name: a.name }))],
          })),
        o
      );
    };
  })(),
  Ja = (() => {
    let e;
    return (t) => {
      let o = t.root.locales;
      return !o || o.length === 0
        ? null
        : e ||
            ((e = {
              id: Nf,
              type: "enum",
              name: "Layout Direction",
              initialValue: void 0,
              cases: [
                { id: "ltr", name: hV },
                { id: "rtl", name: xV },
              ],
            }),
            e);
    };
  })(),
  Gj = _e((e) => (e ? If(e) : null)),
  gV = _e((e, t) => {
    if (!e && !t) return;
    let o = new K();
    return (e && o.set(e.id, e), t && o.set(t.id, t), o);
  });
function jj(e) {
  let t = Ya(e),
    o = Ja(e);
  return gV(t, o);
}
function If(e) {
  let t = [],
    o = [];
  for (let r of e.cases) (t.push(r.id), o.push(r.name));
  let n = { type: "enum", title: "Locale", options: t, optionTitles: o };
  return (Xa(n, { dataIdentifier: Rf, enumFieldKey: Sf }), n);
}
function bV(e) {
  let t = [],
    o = [];
  for (let r of e.cases) (t.push(r.id), o.push(r.name));
  let n = { type: "enum", title: "Layout Direction", options: t, optionTitles: o };
  return (Xa(n, { dataIdentifier: Rf, enumFieldKey: Nf }), n);
}
var TV = _e((e, t) => {
  if (!e && !t) return;
  let o = new K();
  return (e && o.set(e.id, If(e)), t && o.set(t.id, bV(t)), o);
});
function CV(e) {
  let t = Ya(e),
    o = Ja(e);
  return TV(t, o);
}
var VV = _e((e) => {
  if (!e) return;
  let t = new Map();
  return (t.set(Mr, e), t);
});
function _j(e) {
  let t = CV(e);
  return VV(t);
}
var SV = _e((e, t, o, n) => {
  if (!e && !t) return;
  let r = new K();
  (e && r.set(e.id, o?.id ?? To), t && r.set(t.id, Cf(o, n)));
  let i = new Map();
  return (i.set(Mr, r), i);
});
function $j(e, t) {
  let o = Ya(e),
    n = Ja(e);
  return SV(o, n, t, e.root.adaptLayoutToTextDirection);
}
var Pf = "carousel_source_identifier",
  Er = "carousel_provider_id",
  $ = {
    activeItemIndex: "carousel_active_item_index",
    totalItems: "carousel_total_items",
    hasNext: "carousel_has_next",
    hasPrevious: "carousel_has_previous",
    dots: "carousel_dots",
  },
  Br = {
    id: $.activeItemIndex,
    name: "Active Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  Ar = {
    id: $.totalItems,
    name: "Total Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  Eo = { id: $.hasNext, name: "Has Next", type: "boolean", initialValue: !1 },
  Bo = { id: $.hasPrevious, name: "Has Previous", type: "boolean", initialValue: !1 },
  Fr = { id: $.dots, name: "Pagination", type: "array", initialValue: [], itemVariables: [] },
  Za = {
    [$.activeItemIndex]: Br,
    [$.totalItems]: Ar,
    [$.hasNext]: Eo,
    [$.hasPrevious]: Bo,
    [$.dots]: Fr,
  };
function qj(e) {
  if (e in Za) return Za[e];
}
function Xj(e) {
  return e in Za;
}
function vf(e) {
  let t = bu(e);
  if (t) return t.intrinsicSize;
  let o = e.split("?")[1];
  if (!o) return;
  let n = new URLSearchParams(o),
    r = parseInt(n.get("width") ?? "", 10),
    i = parseInt(n.get("height") ?? "", 10);
  return S(r) && S(i) ? { width: r, height: i } : void 0;
}
var NV = "type",
  RV = "webPageId";
function kf(e, t) {
  return e.type !== "link" || !b(t) || NV in t ? !1 : RV in t;
}
function IV(e, t) {
  let o = t;
  for (; Zo(o);) {
    if (o.dataIdentifier) return o.dataIdentifier;
    o = e.getParent(o.id);
  }
}
function PV(e, t) {
  if (t.unresolvedPathSlugs)
    for (let o in t.unresolvedPathSlugs) {
      let n = t.unresolvedPathSlugs[o];
      if (!b(n)) continue;
      let r = n.collectionItemId;
      if (!p(r)) continue;
      let i = Xu(e, t.webPageId);
      if (!i) return;
      let a = IV(e, i);
      if (!a) return;
      let s = { identifier: a, collectionItemId: r, key: o, value: "" };
      return { [o]: s };
    }
}
function Df(e, t) {
  return { type: "webPage", webPageId: t.webPageId, pathVariables: PV(e, t) };
}
function Or(e, t, o) {
  if (kf(t, o)) return Df(e, o);
  let n = me(t.type, o);
  if (t.type === "array") {
    if (!B(n)) return n;
    let r = t.control;
    return r ? n.map((i) => Or(e, r, i)) : n;
  }
  if (t.type === "object") {
    if (!b(n)) return n;
    let r = {};
    for (let i in n) {
      let a = t.controls[i];
      ((r[i] = n[i]), a && (r[i] = Or(e, a, n[i])));
    }
    return r;
  }
  if (t.type === "responsiveimage" && Tr(n)) {
    let r = vf(n.src);
    return r ? { ...n, pixelWidth: r.width, pixelHeight: r.height } : n;
  }
  return n;
}
var Wr = class {
  constructor(t, o, n) {
    this.tree = t;
    this.controlMap = o;
    this.data = n;
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
    let o = this.controlMap.get(t);
    if (!o) return;
    let n = this.data?.[t],
      r = Or(this.tree, o, n);
    return (this.cache.set(t, r), r);
  }
  *[Symbol.iterator]() {
    for (let [t] of this.controlMap) {
      let o = this.get(t);
      yield [t, o];
    }
  }
};
var Xe = class {
  constructor(t, o) {
    this.leftMap = t;
    this.rightMap = o;
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
      let o = t[0];
      this.rightMap.has(o) || (yield t);
    }
    yield* this.rightMap;
  }
};
var Ao = "repeater_item_index",
  Te = "repeater_item_count";
function C_(e, t, o, n, r) {
  let i = new Wr(e, t, o);
  return new Qa(i, n, r);
}
var es = {
    id: Ao,
    name: "Item Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  vV = bt(es, "WebPage"),
  zr = {
    id: Te,
    name: "Visible Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  V_ = [es, zr],
  ts = bt(zr, "WebPage");
function S_(e) {
  return e === Ao || e === Te;
}
function N_(e) {
  return e === Te;
}
var wf = class extends Xe {
    constructor(t) {
      let o = new K();
      (o.set(Te, zr), super(t, o));
    }
  },
  Lf = class extends Xe {
    constructor(t, o) {
      let n = new K();
      (n.set(Te, o), super(t, n));
    }
  },
  Mf = class extends Xe {
    constructor(t) {
      let o = new K();
      (o.set(Te, ts), super(t, o));
    }
  },
  Ef = class extends Xe {
    constructor(t) {
      let o = new K();
      (o.set(Ao, es), o.set(Te, zr), super(t, o));
    }
  },
  Qa = class extends Xe {
    constructor(t, o, n) {
      let r = new K();
      (r.set(Ao, o + 1), r.set(Te, n), super(t, r));
    }
  },
  Bf = class extends Xe {
    constructor(t) {
      let o = new K();
      (o.set(Ao, vV), o.set(Te, ts), super(t, o));
    }
  };
function R_(e, t, o, n) {
  let r = new Map(e),
    i = new Map(t),
    a = new K(),
    s = new K();
  return (
    a.set(Te, ts),
    s.set(Te, n),
    r.set(o, a),
    i.set(o, s),
    { nonRepeatedChildCombinedControlMap: r, nonRepeatedChildCombinedValueMap: i }
  );
}
var Af = E(Xf(), 1),
  Tt = "previousItemId";
function D_(e) {
  return Hr(Tt, "Previous", e.instanceIdentifier);
}
function w_({ name: e, dataIdentifier: t }) {
  return [
    {
      id: "id",
      name: e ? (0, Af.singular)(e) : "Unknown",
      type: "collectionreference",
      dataIdentifier: t,
      initialValue: void 0,
      exposeInProps: !0,
    },
    wV(),
    MV(),
    Hr(Tt, "Previous", t),
    Hr(Ct, "Next", t),
  ];
}
function Hr(e, t, o) {
  return {
    type: "collectionreference",
    name: t,
    id: e,
    dataIdentifier: o,
    initialValue: void 0,
    exposeInProps: !0,
  };
}
var Ct = "nextItemId";
function L_(e) {
  return Hr(Ct, "Next", e.instanceIdentifier);
}
function M_(e) {
  return e === Tt || e === Ct;
}
var DV = "createdAt";
function wV() {
  return { type: "date", name: "Created", id: DV, initialValue: void 0, exposeInProps: !0 };
}
var LV = "updatedAt";
function MV() {
  return { type: "date", name: "Updated", id: LV, initialValue: void 0, exposeInProps: !0 };
}
var Vt = ".";
function G_(e, t, o) {
  return e === Tt || e === Ct ? o.length === 0 : !o.includes(t);
}
function EV(e, t) {
  return e === t || BV(e, t);
}
function BV(e, t) {
  return e.endsWith(t) && e[e.length - t.length - 1] === Vt;
}
function Ff(e, t) {
  return e.startsWith(t) && e[t.length] === Vt;
}
function j_(e) {
  return Ff(e, Tt) || Ff(e, Ct);
}
function no(e) {
  return e.includes(Vt);
}
function __(e) {
  return no(e.id);
}
function Gr(e, t) {
  return e ? e + Vt + t : t;
}
function $_(e) {
  let t = e.lastIndexOf(Vt);
  if (!(t < 0)) return e.slice(0, t);
}
function K_(e, t, o) {
  let n = Gr(e, t);
  return Sl(n, o);
}
function AV(e) {
  return e === "id";
}
function U_(e) {
  return EV(e, "id");
}
function q_(e) {
  let t = Object.entries(e.properties);
  for (let [o, n] of t)
    if (!AV(o) && (n?.type === "collectionreference" || n?.type === "multicollectionreference"))
      return !0;
  return !1;
}
function FV(e) {
  return e.split(Vt);
}
function OV(e) {
  return e.join(Vt);
}
function X_(e) {
  if (uu(e) && L(e.fillImage) && no(e.fillImage.id)) return e.fillImage;
  if (He(e)) {
    if (vl(e.textContent) && no(e.textContent.startValue.id)) return e.textContent.startValue;
    if (L(e.htmlContent) && no(e.htmlContent.id)) return e.htmlContent;
    if (L(e.textContent) && no(e.textContent.id)) return e.textContent;
  }
}
function Y_(e, t, o, n, r) {
  if (!no(o)) return { collectionItemNode: n, collectionNode: r, variableId: o };
  let i = Of(e, t, o, n, r);
  if (i.length === 0) return;
  let a;
  i.length === 1 ? (a = i[0]) : i.length > 1 && (a = i[i.length - 2]);
  let { collectionItemNode: s, variableId: l } = a ?? {};
  if (!s || !l) return;
  let u = e.getNodeWithTrait(s.parentid, Yo);
  if (u) return { collectionItemNode: s, collectionNode: u, variableId: l };
}
function Of(e, t, o, n, r) {
  let i = FV(o),
    a = i[0] === Ct,
    s = i[0] === Tt;
  if (a || s) {
    let c = a ? 1 : -1,
      m = r.getSortedChildren("public-only", "group-drafts"),
      f = m.findIndex((C) => C.id === n.id);
    if (f === -1) return [];
    let h = m[f + c];
    return h ? Of(e, t, OV(i.slice(1)), h, r) : [];
  }
  let l = [{ collectionItemNode: n, variableId: i[0] }],
    u = n;
  for (let c = 0; c < i.length; c++) {
    let m = i[c];
    if (!m) break;
    let f = u.getControlProp(m);
    if (f?.type !== "collectionreference") break;
    x(!L(f.value), "Collections don't support variables");
    let h = e.getNodeWithTrait(f.value, Qs);
    if (!h) break;
    u = h;
    let C = i[c + 1];
    if (!C) break;
    l.push({ collectionItemNode: u, variableId: C });
  }
  return l;
}
function WV(e) {
  return e.title ?? e.name;
}
function r2(e) {
  return e.replace(/^\.\/(.*)\.(?:tsx|ts|js)$/u, "$1");
}
function i2(e) {
  let t = new K();
  for (let o in e) {
    let n = e[o];
    if (n && (t.set(o, n), n.type === "object"))
      for (let r in n.controls) {
        let i = n.controls[r];
        i && t.set(Gr(o, r), { ...i, title: i.title ?? Go(r) });
      }
  }
  return t;
}
function a2(e, t) {
  let o = new K();
  for (let n in e) {
    let r = e[n];
    if (!r) continue;
    let i = "defaultValue" in r ? r.defaultValue : void 0,
      a = t ? t[n] : i;
    if ((o.set(n, a), r.type === "object"))
      for (let s in r.controls) {
        let l = r.controls[s];
        if (!l) continue;
        let u = "defaultValue" in l ? l.defaultValue : void 0,
          c = b(a) ? a[s] : void 0;
        o.set(Gr(n, s), t ? c : (c ?? u));
      }
  }
  return o;
}
var os = "_hook";
function Wf(e) {
  return `${e}${os}`;
}
function zV(e) {
  return !!e?.endsWith(os);
}
function jr(e) {
  if (!(!e || !zV(e))) return e.slice(0, -os.length);
}
function s2(e, t) {
  let o = jr(e);
  if (!o) return;
  let n = t.get(o);
  if (n) return Wf(n);
}
function zf(e, t) {
  if (e.getPrimaryId() === t) return e;
  for (let o of e.ancestors()) if (o.getPrimaryId() === t) return o;
}
function l2(e, t) {
  if (!t) return;
  let o = jr(t);
  if (!o) return;
  let n = zf(e, o);
  return Po(n) ? n.hookIdentifier : void 0;
}
function u2(e, t, o, n) {
  if (!t) return;
  let r = jr(t);
  if (!r) return;
  let i = zf(e, r);
  if (!Po(i)) return;
  let a = i.cache.getHookCache().getMaps(i.hookIdentifier, o);
  if (!a) return;
  let s = n?.get(t);
  return s ? { ...a, valueMap: s } : a;
}
function Hf(e, t, o) {
  if (!Po(e)) return;
  let n = e.cache.getHookCache().getMaps(e.hookIdentifier, t);
  if (!n) return;
  let r = Wf(e.getPrimaryId()),
    i = o?.get(r) ?? n.valueMap;
  return {
    providerId: r,
    sourceIdentifier: e.hookIdentifier,
    variableMap: n.variableMap,
    controlMap: n.controlMap,
    valueMap: i,
  };
}
function d2(e, t, o) {
  let n = jr(o);
  if (!n) return;
  let r = e.get(n);
  if (!Po(r)) return;
  let i = t.hookForIdentifier(r.hookIdentifier);
  return i ? WV(i) : void 0;
}
var Gf = "default",
  Fo = class {
    has(t) {
      return !1;
    }
    get(t) {}
    *[Symbol.iterator]() {}
  },
  p2 = new Fo(),
  f2 = new Fo(),
  m2 = new Fo();
function I2(e) {
  let t = e;
  for (let o of e.ancestors()) {
    if (rc(o)) return Ro(t);
    t = o;
  }
  return !1;
}
var HV = bt(Br, "WebPage"),
  GV = bt(Ar, "WebPage"),
  jV = { type: "boolean", title: Eo.name, defaultValue: Eo.initialValue },
  _V = { type: "boolean", title: Bo.name, defaultValue: Bo.initialValue },
  $V = { type: "array", title: Fr.name, control: { type: "object", controls: {} } },
  KV = qV(),
  UV = XV();
function qV() {
  let e = new K();
  return (
    e.set($.activeItemIndex, Br),
    e.set($.totalItems, Ar),
    e.set($.hasNext, Eo),
    e.set($.hasPrevious, Bo),
    e.set($.dots, Fr),
    e
  );
}
function XV() {
  let e = new K();
  return (
    e.set($.activeItemIndex, HV),
    e.set($.totalItems, GV),
    e.set($.hasNext, jV),
    e.set($.hasPrevious, _V),
    e.set($.dots, $V),
    e
  );
}
function YV(e) {
  return Array.from({ length: e }, (t, o) => ({ id: String(o + 1) }));
}
function JV(e) {
  let t = new K();
  return (
    t.set($.activeItemIndex, 1),
    t.set($.totalItems, e),
    t.set($.hasNext, e > 1),
    t.set($.hasPrevious, !1),
    t.set($.dots, YV(e)),
    t
  );
}
function ZV() {
  return KV;
}
function QV() {
  return UV;
}
function eS(e, t) {
  let o = t?.get(Te),
    n = S(o) ? e.tree() : void 0,
    r = 0;
  for (let i of Tu(e))
    if (!Ro(i)) {
      if (S(o) && n && Ht(n, i)) {
        r += o;
        continue;
      }
      r++;
    }
  return r;
}
function tS(e, t) {
  let o = e.cache.carouselAncestorId;
  if (!o) return;
  let n = e.tree();
  if (!n) return;
  let r = n.get(o);
  if (!r) return;
  let i = eS(r, t?.get(r.getPrimaryId())),
    a = e.cache.carouselValueMap;
  if (a?.itemCount === i) return a.valueMap;
  let s = JV(i);
  return ((e.cache.carouselValueMap = { itemCount: i, valueMap: s }), s);
}
function jf(e, t) {
  if (!Ro(e)) return;
  let o = tS(e, t);
  if (o)
    return {
      providerId: Er,
      sourceIdentifier: Pf,
      variableMap: ZV(),
      controlMap: QV(),
      valueMap: o,
    };
}
var oS = jo();
function E2(e, t, o) {
  let n = [],
    r = jf(e, t);
  r && n.push(r);
  let i = Hf(e, o, t);
  return (i && n.push(i), n.length > 0 ? n : oS);
}
function B2(e) {
  return e === Mr || e === Er;
}
function A2(e, t, o, n, r) {
  if (!t && o.length === 0) return e;
  let i;
  e
    ? ((i = new Map(e)), t && i.set(r, t))
    : t
      ? (i = new Map([
          [r, t],
          [Gf, t],
        ]))
      : (i = new Map());
  for (let a of o) i.set(a.providerId, n(a));
  return i;
}
function F2(e) {
  return e.map(nS);
}
function O2(e) {
  return e.map(rS);
}
function nS(e) {
  return e.valueMap;
}
function rS(e) {
  return e.controlMap;
}
function W2(e, t) {
  if (t.length === 0) return e;
  let o = new Map(e ?? []);
  for (let n of t) o.set(n.providerId, n.valueMap);
  return o;
}
var iS = "variables";
function H2(e) {
  return e ? iS in e : !1;
}
export {
  ao as a,
  sS as b,
  Kr as c,
  Bs as d,
  we as e,
  Os as f,
  _o as g,
  ie as h,
  Le as i,
  As as j,
  rt as k,
  N as l,
  P as m,
  PS as n,
  fe as o,
  $o as p,
  Ko as q,
  BS as r,
  qo as s,
  vt as t,
  AS as u,
  qr as v,
  so as w,
  Xr as x,
  jt as y,
  Hh as z,
  Fi as A,
  Zu as B,
  jh as C,
  Qu as D,
  _h as E,
  td as F,
  Oi as G,
  Ad as H,
  Wi as I,
  od as J,
  zi as K,
  Ge as L,
  hi as M,
  _l as N,
  go as O,
  dt as P,
  yv as Q,
  g as R,
  nd as S,
  rd as T,
  Nn as U,
  pt as V,
  nx as W,
  Rn as X,
  In as Y,
  zd as Z,
  Uw as _,
  id as $,
  ud as aa,
  Zw as ba,
  cd as ca,
  Pn as da,
  _i as ea,
  dL as fa,
  Dd as ga,
  Ld as ha,
  xx as ia,
  Md as ja,
  Bd as ka,
  Fd as la,
  Od as ma,
  yd as na,
  fL as oa,
  TL as pa,
  bd as qa,
  lx as ra,
  dx as sa,
  Cd as ta,
  vx as ua,
  Wd as va,
  Vd as wa,
  Ut as xa,
  PL as ya,
  vL as za,
  Bn as Aa,
  Dn as Ba,
  Vo as Ca,
  qi as Da,
  AL as Ea,
  FL as Fa,
  Rd as Ga,
  kd as Ha,
  qL as Ia,
  Mx as Ja,
  Ud as Ka,
  zS as La,
  HS as Ma,
  GS as Na,
  Gs as Oa,
  Xo as Pa,
  Ie as Qa,
  jS as Ra,
  lo as Sa,
  kt as Ta,
  _S as Ua,
  am as Va,
  sm as Wa,
  $S as Xa,
  ye as Ya,
  KS as Za,
  US as _a,
  qS as $a,
  XS as ab,
  YS as bb,
  JS as cb,
  ZS as db,
  QS as eb,
  eN as fb,
  z as gb,
  KR as hb,
  js as ib,
  oN as jb,
  _s as kb,
  $s as lb,
  Yr as mb,
  um as nb,
  Jr as ob,
  Us as pb,
  dN as qb,
  cN as rb,
  pN as sb,
  fN as tb,
  D as ub,
  xN as vb,
  gN as wb,
  bN as xb,
  TN as yb,
  Zr as zb,
  qs as Ab,
  Xs as Bb,
  CN as Cb,
  Qr as Db,
  dm as Eb,
  Me as Fb,
  wt as Gb,
  Lt as Hb,
  Ys as Ib,
  ze as Jb,
  VN as Kb,
  Js as Lb,
  SN as Mb,
  NN as Nb,
  He as Ob,
  cm as Pb,
  RN as Qb,
  IN as Rb,
  Zs as Sb,
  Yo as Tb,
  Qs as Ub,
  PN as Vb,
  vN as Wb,
  Jo as Xb,
  kN as Yb,
  DN as Zb,
  wN as _b,
  LN as $b,
  MN as ac,
  EN as bc,
  BN as cc,
  AN as dc,
  FN as ec,
  ON as fc,
  WN as gc,
  zN as hc,
  HN as ic,
  GN as jc,
  jN as kc,
  _N as lc,
  $N as mc,
  KN as nc,
  UN as oc,
  qN as pc,
  XN as qc,
  YN as rc,
  ei as sc,
  JN as tc,
  ZN as uc,
  QN as vc,
  el as wc,
  eR as xc,
  tR as yc,
  oR as zc,
  nR as Ac,
  rR as Bc,
  Zo as Cc,
  iR as Dc,
  tl as Ec,
  Qo as Fc,
  aR as Gc,
  sR as Hc,
  lR as Ic,
  uR as Jc,
  dR as Kc,
  cR as Lc,
  pR as Mc,
  fR as Nc,
  mR as Oc,
  yR as Pc,
  pm as Qc,
  hR as Rc,
  xR as Sc,
  gR as Tc,
  Fn as Uc,
  lE as Vc,
  uE as Wc,
  Iy as Xc,
  Mv as Yc,
  Ev as Zc,
  qR as _c,
  ai as $c,
  XR as ad,
  si as bd,
  cl as cd,
  QR as dd,
  li as ed,
  an as fd,
  sI as gd,
  lI as hd,
  uI as id,
  dI as jd,
  cI as kd,
  fl as ld,
  pI as md,
  sn as nd,
  mo as od,
  xI as pd,
  gI as qd,
  bI as rd,
  kI as sd,
  Em as td,
  Am as ud,
  Fm as vd,
  Wm as wd,
  DI as xd,
  Hm as yd,
  wI as zd,
  LI as Ad,
  Gm as Bd,
  MI as Cd,
  _m as Dd,
  EI as Ed,
  xl as Fd,
  BI as Gd,
  di as Hd,
  AI as Id,
  gl as Jd,
  FI as Kd,
  OI as Ld,
  WI as Md,
  Tl as Nd,
  zI as Od,
  qm as Pd,
  Xm as Qd,
  HI as Rd,
  GI as Sd,
  Ym as Td,
  jI as Ud,
  _I as Vd,
  $I as Wd,
  KI as Xd,
  UI as Yd,
  qI as Zd,
  L as _d,
  Sl as $d,
  ci as ae,
  dn as be,
  Nl as ce,
  JI as de,
  ZI as ee,
  Rl as fe,
  QI as ge,
  eP as he,
  tP as ie,
  Jm as je,
  lP as ke,
  he as le,
  uP as me,
  vl as ne,
  dP as oe,
  cP as pe,
  pP as qe,
  Dl as re,
  A as se,
  wl as te,
  mE as ue,
  yE as ve,
  hE as we,
  _x as xe,
  $x as ye,
  xE as ze,
  qd as Ae,
  Xd as Be,
  Yd as Ce,
  mt as De,
  gE as Ee,
  Ux as Fe,
  bE as Ge,
  Zd as He,
  TE as Ie,
  qx as Je,
  CE as Ke,
  VE as Le,
  Xx as Me,
  On as Ne,
  Qd as Oe,
  SE as Pe,
  Wn as Qe,
  na as Re,
  zn as Se,
  Zx as Te,
  Hn as Ue,
  tc as Ve,
  oc as We,
  NE as Xe,
  RE as Ye,
  tg as Ze,
  vE as _e,
  kE as $e,
  nc as af,
  ME as bf,
  EE as cf,
  ig as df,
  rc as ef,
  Ro as ff,
  sg as gf,
  BE as hf,
  WE as if,
  zE as jf,
  ug as kf,
  HE as lf,
  cg as mf,
  GE as nf,
  jE as of,
  Bt as pf,
  il as qf,
  en as rf,
  mm as sf,
  po as tf,
  nn as uf,
  ym as vf,
  hm as wf,
  al as xf,
  sl as yf,
  xm as zf,
  ti as Af,
  ii as Bf,
  rn as Cf,
  ll as Df,
  Sm as Ef,
  HR as Ff,
  GR as Gf,
  jR as Hf,
  Nm as If,
  _R as Jf,
  ol as Kf,
  TR as Lf,
  uo as Mf,
  Mt as Nf,
  CR as Of,
  VR as Pf,
  SR as Qf,
  co as Rf,
  NR as Sf,
  nl as Tf,
  Et as Uf,
  RR as Vf,
  rl as Wf,
  IR as Xf,
  PR as Yf,
  vR as Zf,
  VP as _f,
  ey as $f,
  SP as ag,
  Ml as bg,
  xe as cg,
  El as dg,
  NP as eg,
  RP as fg,
  Ll as gg,
  IP as hg,
  PP as ig,
  vP as jg,
  Bl as kg,
  ny as lg,
  kP as mg,
  iy as ng,
  at as og,
  DP as pg,
  wP as qg,
  LP as rg,
  ac as sg,
  fg as tg,
  Gn as ug,
  ia as vg,
  sc as wg,
  UE as xg,
  qE as yg,
  XE as zg,
  YE as Ag,
  JE as Bg,
  eB as Cg,
  tB as Dg,
  dc as Eg,
  Xt as Fg,
  rB as Gg,
  cc as Hg,
  iB as Ig,
  aB as Jg,
  sB as Kg,
  U as Lg,
  F as Mg,
  Ol as Ng,
  lt as Og,
  _P as Pg,
  ut as Qg,
  pn as Rg,
  ho as Sg,
  Gl as Tg,
  jl as Ug,
  mn as Vg,
  gv as Wg,
  AP as Xg,
  FP as Yg,
  st as Zg,
  OP as _g,
  WP as $g,
  zP as ah,
  bo as bh,
  yn as ch,
  iu as dh,
  Ii as eh,
  Cv as fh,
  Vv as gh,
  Ny as hh,
  au as ih,
  Dv as jh,
  hn as kh,
  wv as lh,
  Py as mh,
  ct as nh,
  Wv as oh,
  Xv as ph,
  Yv as qh,
  Wt as rh,
  Pi as sh,
  Jv as th,
  Zv as uh,
  su as vh,
  By as wh,
  Qv as xh,
  lu as yh,
  ek as zh,
  tk as Ah,
  ok as Bh,
  uu as Ch,
  Ay as Dh,
  nk as Eh,
  rk as Fh,
  ik as Gh,
  ak as Hh,
  Oy as Ih,
  zy as Jh,
  sk as Kh,
  pB as Lh,
  aa as Mh,
  bg as Nh,
  fB as Oh,
  Mk as Ph,
  Vu as Qh,
  zt as Rh,
  Yy as Sh,
  Ek as Th,
  Zt as Uh,
  PF as Vh,
  vF as Wh,
  Wc as Xh,
  jn as Yh,
  hB as Zh,
  ua as _h,
  xB as $h,
  gB as ai,
  ku as bi,
  ah as ci,
  lD as di,
  uD as ei,
  Lu as fi,
  dD as gi,
  cD as hi,
  lr as ii,
  hc as ji,
  ya as ki,
  Jt as li,
  pA as mi,
  qn as ni,
  fA as oi,
  mA as pi,
  xc as qi,
  gc as ri,
  ve as si,
  vB as ti,
  ca as ui,
  DB as vi,
  Cg as wi,
  wB as xi,
  LB as yi,
  Vg as zi,
  Sg as Ai,
  AB as Bi,
  Rg as Ci,
  FB as Di,
  Ig as Ei,
  OB as Fi,
  WB as Gi,
  zB as Hi,
  HB as Ii,
  GB as Ji,
  jB as Ki,
  ht as Li,
  Yt as Mi,
  Se as Ni,
  Ag as Oi,
  Xn as Pi,
  KB as Qi,
  UB as Ri,
  qB as Si,
  ki as Ti,
  Be as Ui,
  _n as Vi,
  $n as Wi,
  Cc as Xi,
  sA as Yi,
  Lg as Zi,
  Un as _i,
  Mg as $i,
  CA as aj,
  VA as bj,
  SA as cj,
  Sc as dj,
  ha as ej,
  NA as fj,
  vA as gj,
  kA as hj,
  xa as ij,
  DA as jj,
  KA as kj,
  UA as lj,
  qA as mj,
  XA as nj,
  YA as oj,
  Lc as pj,
  Jn as qj,
  JA as rj,
  Mc as sj,
  ZA as tj,
  QA as uj,
  eF as vj,
  Ec as wj,
  tF as xj,
  xt as yj,
  iF as zj,
  aF as Aj,
  sF as Bj,
  lF as Cj,
  uF as Dj,
  dF as Ej,
  cF as Fj,
  Zn as Gj,
  mF as Hj,
  Bc as Ij,
  VF as Jj,
  Ac as Kj,
  Fc as Lj,
  SF as Mj,
  Oc as Nj,
  NF as Oj,
  zc as Pj,
  HF as Qj,
  MH as Rj,
  EH as Sj,
  BH as Tj,
  nC as Uj,
  ef as Vj,
  AH as Wj,
  FH as Xj,
  Ne as Yj,
  _c as Zj,
  du as _j,
  _y as $j,
  Ck as ak,
  gu as bk,
  Vk as ck,
  Sk as dk,
  bu as ek,
  e0 as fk,
  gt as gk,
  Va as hk,
  Qt as ik,
  $c as jk,
  er as kk,
  t0 as lk,
  o0 as mk,
  n0 as nk,
  rb as ok,
  Ra as pk,
  Uc as qk,
  u0 as rk,
  sb as sk,
  Po as tk,
  Ik as uk,
  Uy as vk,
  Tu as wk,
  ub as xk,
  Zc as yk,
  E0 as zk,
  B0 as Ak,
  pb as Bk,
  A0 as Ck,
  F0 as Dk,
  Qc as Ek,
  O0 as Fk,
  W0 as Gk,
  mb as Hk,
  z0 as Ik,
  Cu as Jk,
  To as Kk,
  tD as Lk,
  oD as Mk,
  nD as Nk,
  Mu as Ok,
  Mi as Pk,
  Eu as Qk,
  Bu as Rk,
  Au as Sk,
  Ei as Tk,
  ND as Uk,
  Fu as Vk,
  Nu as Wk,
  Ru as Xk,
  Ok as Yk,
  Jy as Zk,
  Wk as _k,
  zk as $k,
  Iu as al,
  Hk as bl,
  Zy as cl,
  Ht as dl,
  Gk as el,
  jk as fl,
  _k as gl,
  $k as hl,
  Kk as il,
  Di as jl,
  Yk as kl,
  Jk as ll,
  oh as ml,
  wi as nl,
  Zk as ol,
  rh as pl,
  Ou as ql,
  kh as rl,
  Wu as sl,
  Gu as tl,
  LD as ul,
  Dh as vl,
  MD as wl,
  ED as xl,
  ju as yl,
  Cn as zl,
  _e as Al,
  Bi as Bl,
  jD as Cl,
  _D as Dl,
  $D as El,
  Uu as Fl,
  ew as Gl,
  Ah as Hl,
  Xu as Il,
  Ju as Jl,
  Fh as Kl,
  Tr as Ll,
  eo as Ml,
  m0 as Nl,
  qc as Ol,
  g0 as Pl,
  b0 as Ql,
  Yc as Rl,
  R0 as Sl,
  ko as Tl,
  I0 as Ul,
  ot as Vl,
  Jc as Wl,
  P0 as Xl,
  v0 as Yl,
  k0 as Zl,
  D0 as _l,
  $0 as $l,
  Do as am,
  K0 as bm,
  ep as cm,
  bb as dm,
  Cb as em,
  pO as fm,
  fO as gm,
  mO as hm,
  yO as im,
  tr as jm,
  hO as km,
  xO as lm,
  op as mm,
  gO as nm,
  bO as om,
  TO as pm,
  CO as qm,
  VO as rm,
  SO as sm,
  NO as tm,
  RO as um,
  IO as vm,
  PO as wm,
  vO as xm,
  kO as ym,
  DO as zm,
  wO as Am,
  LO as Bm,
  MO as Cm,
  EO as Dm,
  BO as Em,
  AO as Fm,
  FO as Gm,
  OO as Hm,
  WO as Im,
  zO as Jm,
  HO as Km,
  GO as Lm,
  jO as Mm,
  _O as Nm,
  $O as Om,
  KO as Pm,
  Ba as Qm,
  NH as Rm,
  Cr as Sm,
  eG as Tm,
  hf as Um,
  CG as Vm,
  Wa as Wm,
  uH as Xm,
  Ma as Ym,
  dH as Zm,
  xH as _m,
  gH as $m,
  Xp as an,
  Ea as bn,
  CH as cn,
  cf as dn,
  Up as en,
  QO as fn,
  eW as gn,
  tW as hn,
  Ia as in,
  nr as jn,
  mW as kn,
  yW as ln,
  mp as mn,
  Zp as nn,
  vH as on,
  tf as pn,
  of as qn,
  nf as rn,
  rf as sn,
  af as tn,
  xr as un,
  gr as vn,
  Y as wn,
  cC as xn,
  uf as yn,
  CW as zn,
  Tp as An,
  RW as Bn,
  Cp as Cn,
  Vp as Dn,
  DW as En,
  jW as Fn,
  Sp as Gn,
  ur as Hn,
  gT as In,
  cr as Jn,
  Np as Kn,
  Lp as Ln,
  yz as Mn,
  hz as Nn,
  xz as On,
  Mp as Pn,
  bz as Qn,
  Tz as Rn,
  Cz as Sn,
  Ep as Tn,
  Sz as Un,
  Nz as Vn,
  Rz as Wn,
  Bp as Xn,
  Pz as Yn,
  vz as Zn,
  kz as _n,
  mr as $n,
  Lz as ao,
  Mz as bo,
  Ez as co,
  Bz as do,
  XW as eo,
  YW as fo,
  JW as go,
  CT as ho,
  ZW as io,
  Pp as jo,
  fr as ko,
  rz as lo,
  iz as mo,
  kp as no,
  az as oo,
  sz as po,
  lz as qo,
  Dp as ro,
  uz as so,
  dz as to,
  cz as uo,
  wp as vo,
  pz as wo,
  fz as xo,
  Da as yo,
  Oz as zo,
  Wz as Ao,
  zz as Bo,
  Hz as Co,
  yr as Do,
  _z as Eo,
  $z as Fo,
  Kz as Go,
  Uz as Ho,
  qz as Io,
  hr as Jo,
  Jz as Ko,
  Zz as Lo,
  Qz as Mo,
  e1 as No,
  t1 as Oo,
  wa as Po,
  BT as Qo,
  Wp as Ro,
  i1 as So,
  a1 as To,
  FT as Uo,
  s1 as Vo,
  l1 as Wo,
  v1 as Xo,
  Hp as Yo,
  qH as Zo,
  pf as _o,
  Gp as $o,
  jp as ap,
  me as bp,
  _p as cp,
  j1 as dp,
  zT as ep,
  HT as fp,
  te as gp,
  oo as hp,
  _1 as ip,
  $1 as jp,
  K1 as kp,
  U1 as lp,
  GT as mp,
  jT as np,
  q1 as op,
  _T as pp,
  X1 as qp,
  Y1 as rp,
  $T as sp,
  J1 as tp,
  UT as up,
  La as vp,
  wG as wp,
  Kp as xp,
  tH as yp,
  TC as zp,
  CC as Ap,
  uj as Bp,
  dj as Cp,
  cj as Dp,
  pj as Ep,
  fj as Fp,
  mj as Gp,
  RC as Hp,
  IC as Ip,
  yj as Jp,
  hj as Kp,
  xj as Lp,
  LC as Mp,
  MC as Np,
  JC as Op,
  uV as Pp,
  dV as Qp,
  gj as Rp,
  Ua as Sp,
  bj as Tp,
  Tj as Up,
  Cj as Vp,
  Nj as Wp,
  vf as Xp,
  qa as Yp,
  K as Zp,
  Cf as _p,
  Xa as $p,
  Dj as aq,
  Sf as bq,
  Nf as cq,
  Mr as dq,
  Rf as eq,
  hV as fq,
  xV as gq,
  Hj as hq,
  Ya as iq,
  Ja as jq,
  Gj as kq,
  jj as lq,
  CV as mq,
  _j as nq,
  $j as oq,
  Gf as pq,
  p2 as qq,
  f2 as rq,
  m2 as sq,
  Pf as tq,
  Er as uq,
  $ as vq,
  qj as wq,
  Xj as xq,
  Wr as yq,
  Xe as zq,
  Ao as Aq,
  Te as Bq,
  C_ as Cq,
  V_ as Dq,
  S_ as Eq,
  N_ as Fq,
  wf as Gq,
  Lf as Hq,
  Mf as Iq,
  Ef as Jq,
  Qa as Kq,
  Bf as Lq,
  R_ as Mq,
  I2 as Nq,
  QV as Oq,
  tS as Pq,
  Tt as Qq,
  D_ as Rq,
  w_ as Sq,
  Ct as Tq,
  L_ as Uq,
  M_ as Vq,
  DV as Wq,
  wV as Xq,
  LV as Yq,
  MV as Zq,
  Vt as _q,
  G_ as $q,
  EV as ar,
  Ff as br,
  j_ as cr,
  no as dr,
  __ as er,
  Gr as fr,
  $_ as gr,
  K_ as hr,
  AV as ir,
  U_ as jr,
  q_ as kr,
  FV as lr,
  OV as mr,
  X_ as nr,
  Y_ as or,
  WV as pr,
  r2 as qr,
  i2 as rr,
  a2 as sr,
  Wf as tr,
  zV as ur,
  jr as vr,
  s2 as wr,
  l2 as xr,
  u2 as yr,
  d2 as zr,
  E2 as Ar,
  B2 as Br,
  A2 as Cr,
  F2 as Dr,
  O2 as Er,
  nS as Fr,
  rS as Gr,
  W2 as Hr,
  H2 as Ir,
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
//# sourceMappingURL=chunk-O4DF5MJQ.mjs.map
