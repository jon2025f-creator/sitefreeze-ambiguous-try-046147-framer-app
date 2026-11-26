import { B as Hr, d as gs, f as Rt, g as Pe, n as bs, o as ve } from "chunk-GV47JEYI.mjs";
import { a as Ct, b as fs, g as j, h as An } from "chunk-WCKYYOJP.mjs";
import { a as us, b as ae, e as Ps, j as vs, k as te, t as Is, w as Nt } from "chunk-XWVB37KR.mjs";
import { e as Fn, f as we, g as Af } from "chunk-3CKYEPG2.mjs";
import { Ne as Ce, Ob as ys, nf as xs, pd as hs, xf as Qe, zb as ms } from "chunk-DPHJW6UJ.mjs";
import {
  A as We,
  b as Ze,
  c as ds,
  d as Q,
  e as Oe,
  f as Bn,
  g as q,
  i as Tt,
  j as cs,
  u as ps,
  z as Vt,
} from "chunk-UZPM4XYH.mjs";
import { a as Zt, b as St } from "chunk-WRBBN7SY.mjs";
import { a as ce } from "chunk-YVT73FKN.mjs";
import { a as On } from "chunk-MSHSIAEI.mjs";
import { g as Ss, k as Rs } from "chunk-JUEYLPZJ.mjs";
import { a as En } from "chunk-UZNETSBG.mjs";
import { b as Ns } from "chunk-5WL5Y35Q.mjs";
import { b as X } from "chunk-AYNVEX5D.mjs";
import { a as oe } from "chunk-2FCXHKEL.mjs";
import {
  a as ee,
  b as f,
  f as R,
  g,
  h as Ts,
  j as G,
  p as v,
  r as Cs,
  s as Ve,
  v as Vs,
} from "chunk-ARJ7WQTJ.mjs";
import { a as ne } from "chunk-SWYZG2NI.mjs";
import { o as ls } from "chunk-HTBRLWIL.mjs";
import { g as os, i as rs, k as is, l as Je, o as as, r as ss } from "chunk-L5AQ4LH7.mjs";
import { b as ns, j as bt } from "chunk-EAUMDN6M.mjs";
import { b as C, c as W } from "chunk-4JY5UMT2.mjs";
import { c as ts, e as B } from "chunk-WLHSDIGQ.mjs";
var tf = ts((H) => {
  "use strict";
  var Da = Symbol.for("react.element"),
    ka = Symbol.for("react.portal"),
    yr = Symbol.for("react.fragment"),
    hr = Symbol.for("react.strict_mode"),
    xr = Symbol.for("react.profiler"),
    gr = Symbol.for("react.provider"),
    br = Symbol.for("react.context"),
    uC = Symbol.for("react.server_context"),
    Tr = Symbol.for("react.forward_ref"),
    Cr = Symbol.for("react.suspense"),
    Vr = Symbol.for("react.suspense_list"),
    Sr = Symbol.for("react.memo"),
    Rr = Symbol.for("react.lazy"),
    dC = Symbol.for("react.offscreen"),
    ef;
  ef = Symbol.for("react.module.reference");
  function Ne(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Da:
          switch (((e = e.type), e)) {
            case yr:
            case xr:
            case hr:
            case Cr:
            case Vr:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case uC:
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
        case ka:
          return t;
      }
    }
  }
  H.ContextConsumer = br;
  H.ContextProvider = gr;
  H.Element = Da;
  H.ForwardRef = Tr;
  H.Fragment = yr;
  H.Lazy = Rr;
  H.Memo = Sr;
  H.Portal = ka;
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
    return typeof e == "object" && e !== null && e.$$typeof === Da;
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
    return Ne(e) === ka;
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
      e === dC ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Rr ||
          e.$$typeof === Sr ||
          e.$$typeof === gr ||
          e.$$typeof === br ||
          e.$$typeof === Tr ||
          e.$$typeof === ef ||
          e.getModuleId !== void 0))
    );
  };
  H.typeOf = Ne;
});
var of = ts((nH, nf) => {
  "use strict";
  nf.exports = tf();
});
function Qt(e, t) {
  let o = 10 ** Math.round(Math.abs(t));
  return Math.round(e * o) / o;
}
function QV(e, t) {
  let n = e.toFixed(t);
  return t === 0 ? n : `${+n}`;
}
function Gr(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Ds(e) {
  return Math.round(e * 2) / 2;
}
function Me(e, t) {
  return { x: e, y: t };
}
((P) => {
  ((P.isQuadrilateralPoints = (y) => y?.length === 4),
    (P.add = (...y) => y.reduce((T, S) => ({ x: T.x + S.x, y: T.y + S.y }), { x: 0, y: 0 })),
    (P.subtract = (y, T) => ({ x: y.x - T.x, y: y.y - T.y })),
    (P.multiply = (y, T) => ({ x: y.x * T, y: y.y * T })),
    (P.divide = (y, T) => ({ x: y.x / T, y: y.y / T })),
    (P.absolute = (y) => ({ x: Math.abs(y.x), y: Math.abs(y.y) })),
    (P.reverse = (y) => ({ x: y.x * -1, y: y.y * -1 })),
    (P.pixelAligned = (y, T = { x: 0, y: 0 }) => ({ x: Gr(y.x, T.x), y: Gr(y.y, T.y) })),
    (P.distance = (y, T) => {
      let S = Math.abs(y.x - T.x),
        U = Math.abs(y.y - T.y);
      return Math.sqrt(S * S + U * U);
    }),
    (P.angle = (y, T) => (Math.atan2(T.y - y.y, T.x - y.x) * 180) / Math.PI - 90),
    (P.angleFromX = (y, T) => (Math.atan2(T.y - y.y, T.x - y.x) * 180) / Math.PI),
    (P.isEqual = (y, T) => y.x === T.x && y.y === T.y),
    (P.rotationNormalizer = () => {
      let y;
      return (T) => {
        typeof y != "number" && (y = T);
        let S = y - T,
          U = Math.abs(S) + 180,
          _ = Math.floor(U / 360);
        return (S < 180 && (T -= _ * 360), S > 180 && (T += _ * 360), (y = T), T);
      };
    }));
  function x(y, T) {
    return { x: (y.x + T.x) / 2, y: (y.y + T.y) / 2 };
  }
  P.center = x;
  function h(y) {
    let T = 0,
      S = 0;
    y.forEach((Ye) => {
      ((T += Ye.x), (S += Ye.y));
    });
    let U = T / y.length,
      _ = S / y.length;
    return { x: U, y: _ };
  }
  P.centroid = h;
  function V(y) {
    let T = P.centroid(y),
      S = new Map();
    for (let U = 0; U < y.length; U++) {
      let _ = y[U];
      _ && S.set(_, Math.atan2(_.y - T.y, _.x - T.x));
    }
    return y.sort((U, _) => (S.get(U) ?? 0) - (S.get(_) ?? 0));
  }
  P.sortClockwise = V;
})((Me ||= {}));
function ks(e) {
  return e * (Math.PI / 180);
}
var ot = (() => {
  function e(t, n) {
    return { a: t, b: n };
  }
  return (
    (e.offset = (t, n) => {
      let o = Me.angleFromX(t.a, t.b),
        r = ks(o),
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
        p = (c - l) * (u - i) - (m - u) * (l - r),
        x = (c - l) * (s - i) - (m - u) * (a - r),
        h = (a - r) * (u - i) - (s - i) * (l - r);
      if ((p === 0 && x === 0) || x === 0) return null;
      let V = p / x,
        P = h / x;
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
        i = Me(n.x - r, n.y + o);
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
    (e.distance = (t) => Me.distance(t.a, t.b)),
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
      let n = Qt(e.x, t),
        o = Qt(e.y, t),
        r = Qt(e.width, t),
        i = Qt(e.height, t);
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
        s = Me.distance(t, n),
        l = Me.distance(t, r);
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
        p = Math.min(o, i, s, u),
        x = Math.max(o, i, s, u) - p;
      return { x: c, y: p, width: m, height: x };
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
        Me.distance({ x: n, y: o }, { x: 0, y: 0 })
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
        o = ot(t, n),
        r = N.edges(e);
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
      let r = N.pointDistance(o, t);
      for (let i = 1; i < e.length; i += 1) {
        let a = e[i];
        Vt(a);
        let s = N.pointDistance(a, t);
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
var Wn = class {
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
var re = (() => {
    function e(t) {
      return (
        ws(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        Be(t) ? t : new jr(t)
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
      (e.get = (t, n) => (t == null ? n : Be(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let n = {};
        for (let o in t) {
          let r = t[o];
          Be(r) ? (n[o] = r.get()) : (n[o] = r);
        }
        return n;
      }),
      e
    );
  })(),
  Ms = "onUpdate",
  Bs = "finishTransaction";
function Be(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    Ms in e &&
    e[Ms] instanceof Function &&
    Bs in e &&
    e[Bs] instanceof Function
  );
}
function Ff(e, t) {
  return {
    interpolate(n, o) {
      let r = n.get(),
        i = o.get(),
        a = re(r);
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
var jr = class {
  constructor(t) {
    this.value = t;
  }
  value;
  observers = new Wn();
  static interpolationFor(t, n) {
    if (Be(t)) return Ff(t, n);
  }
  get() {
    return this.value;
  }
  set(t, n) {
    let o = this.value;
    (Be(t) && (t = t.get()), (this.value = t));
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
function Of(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function zn(e) {
  return typeof e != "string" && typeof e != "number";
}
function Hn(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !Of(e);
}
function I(e) {
  return Number.isFinite(e);
}
function bS(e) {
  return I(e) ? e : void 0;
}
var vS = {
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
  jn = ((a) => (
    (a[(a.FixedNumber = 0)] = "FixedNumber"),
    (a[(a.Percentage = 1)] = "Percentage"),
    (a[(a.Auto = 2)] = "Auto"),
    (a[(a.FractionOfFreeSpace = 3)] = "FractionOfFreeSpace"),
    (a[(a.Viewport = 4)] = "Viewport"),
    (a[(a.FitImage = 5)] = "FitImage"),
    a
  ))(jn || {});
function Pt(e) {
  return Tt(e) ? !1 : e === 2 || e === 5;
}
function IS(e) {
  return !(!Hn(e) || !zn(e));
}
var _r = {
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
function en(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var Ur = {
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
        m = _r.quickfix({
          left: I(t) || Be(t),
          right: I(n) || Be(n),
          top: I(o) || Be(o),
          bottom: I(r) || Be(r),
          widthType: en(i),
          heightType: en(a),
          aspectRatio: u || null,
          fixedSize: c === !0,
        }),
        p = null,
        x = null,
        h = 0,
        V = 0;
      if (m.widthType !== 0 && typeof i == "string") {
        let T = parseFloat(i);
        i.endsWith("fr") ? ((h = 3), (p = T)) : i === "auto" ? (h = 2) : ((h = 1), (p = T / 100));
      } else i !== void 0 && typeof i != "string" && (p = re.getNumber(i));
      if (m.heightType !== 0 && typeof a == "string") {
        let T = parseFloat(a);
        a.endsWith("fr")
          ? ((V = 3), (x = T))
          : a === "auto"
            ? (V = 2)
            : ((V = 1), (x = parseFloat(a) / 100));
      } else a !== void 0 && typeof a != "string" && (x = re.getNumber(a));
      let P = 0.5,
        y = 0.5;
      return (
        s && (P = parseFloat(s) / 100),
        l && (y = parseFloat(l) / 100),
        {
          left: m.left ? re.getNumber(t) : null,
          right: m.right ? re.getNumber(n) : null,
          top: m.top ? re.getNumber(o) : null,
          bottom: m.bottom ? re.getNumber(r) : null,
          widthType: h,
          heightType: V,
          width: p,
          height: x,
          aspectRatio: m.aspectRatio || null,
          centerAnchorX: P,
          centerAnchorY: y,
        }
      );
    },
    toSize: (e, t, n, o) => {
      let r = null,
        i = null,
        a = t?.sizing ? re.getNumber(t?.sizing.width) : null,
        s = t?.sizing ? re.getNumber(t?.sizing.height) : null,
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
            We(e.widthType);
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
            We(e.heightType);
        }
      return _f(r, i, e, { height: s ?? 0, width: a ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, n = null, o = !1, r = null) => {
      let i = e.left || 0,
        a = e.top || 0,
        { width: s, height: l } = Ur.toSize(e, t, n, r),
        u = t?.positioning ?? null,
        c = u ? re.getNumber(u.width) : null,
        m = u ? re.getNumber(u.height) : null;
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
      let p = { x: i, y: a, width: s, height: l };
      return o ? N.pixelAligned(p) : p;
    },
  },
  Wf = 200,
  zf = 200;
function Gn(e, t, n, o) {
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
      if (!o) return Hf(e);
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
function Hf(e) {
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
function Gf(e, t, n, o) {
  return (
    t.minHeight && (e = Math.max(Gn("minHeight", t.minHeight, n, o), e)),
    t.maxHeight && (e = Math.min(Gn("maxHeight", t.maxHeight, n, o), e)),
    e
  );
}
function jf(e, t, n, o) {
  return (
    t.minWidth && (e = Math.max(Gn("minWidth", t.minWidth, n, o), e)),
    t.maxWidth && (e = Math.min(Gn("maxWidth", t.maxWidth, n, o), e)),
    e
  );
}
function _f(e, t, n, o, r) {
  let i = jf(I(e) ? e : Wf, n, o, r),
    a = Gf(I(t) ? t : zf, n, o, r);
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
function kS(e, t = class {}) {
  class n extends t {
    __class = vt[e];
    static displayName = `WithClassDiscriminatorMixin(${e})`;
  }
  return ((n.prototype.__class = e), n);
}
function LS(e, t) {
  ((e.prototype.__class = t), (e.displayName = `WithClassDiscriminatorMixin(${t})`));
}
var Uf = new Set(Object.keys(vt));
function As(e) {
  return Uf.has(e);
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
  return e ? (e === "RootNode" ? !0 : Kr(e)) : !1;
}
function Kr(e) {
  return e
    ? !!(Kf(e) || $r(e) || e === "OverlayNode" || e === "SlotNode" || e === "SlotPropertyNode")
    : !1;
}
function Kf(e) {
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
function $r(e) {
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
function WS(e) {
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
function zS(e) {
  return e ? Fs(e) : !1;
}
function HS(e) {
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
function GS(e) {
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
function D(e, t) {
  return e?.__class === t;
}
function KS(e) {
  return D(e, "RootNode");
}
function $S(e) {
  return D(e, "AgentSkillNode");
}
function qS(e) {
  return D(e, "AgentSkillsListNode");
}
function XS(e) {
  return D(e, "DatabaseListNode");
}
function qr(e) {
  return D(e, "FrameNode");
}
function zs(e) {
  return qr(e) && e.layout === "stack";
}
function Hs(e) {
  return qr(e) && e.layout === "grid";
}
function YS(e) {
  return qr(e) && e.layout !== void 0;
}
function Xr(e) {
  return !e || (!zs(e) && !Hs(e)) ? !1 : !!e.dataIdentifier;
}
function $f(e) {
  return !e || (!zs(e) && !Hs(e)) || e.dataIdentifier ? !1 : !!e.dataRepeaterArray;
}
function Ee(e) {
  return e ? Xr(e) || $f(e) : !1;
}
function It(e) {
  return D(e, "SmartComponentNode");
}
function Dt(e) {
  return e?.__class === "LayoutTemplateNode";
}
function Gs(e) {
  return e?.__class === "VectorSetNode";
}
function ze(e) {
  return D(e, "WebPageNode");
}
function JS(e) {
  return e?.__class === "DesignPageNode";
}
function js(e) {
  return e?.__class === "CanvasPageNode";
}
function ZS(e) {
  return D(e, "ContentManagementNode");
}
function QS(e) {
  return e?.__class === "TextNode";
}
function kt(e) {
  return D(e, "RichTextNode");
}
function qf(e) {
  return D(e, "CodeComponentNode");
}
function eR(e) {
  return D(e, "ShaderNode");
}
function tR(e) {
  return D(e, "OverlayNode");
}
function _s(e) {
  return D(e, "SVGNode");
}
function _n(e) {
  return D(e, "CollectionNode");
}
function Us(e) {
  return D(e, "CollectionItemNode");
}
function nR(e) {
  return e?.__class === "BranchNode";
}
function oR(e) {
  return D(e, "BranchesNode");
}
function Un(e) {
  return D(e, "ShapeContainerNode");
}
function Xf(e) {
  return e?.__class === "BooleanShapeNode";
}
function Yf(e) {
  return e?.__class === "ShapeGroupNode";
}
function Jf(e) {
  return e?.__class === "PathNode";
}
function Zf(e) {
  return e?.__class === "RectangleShapeNode";
}
function Qf(e) {
  return e?.__class === "StarShapeNode";
}
function em(e) {
  return e?.__class === "OvalShapeNode";
}
function tm(e) {
  return e?.__class === "PolygonShapeNode";
}
function rR(e) {
  return Yf(e) || Xf(e) || Jf(e) || Zf(e) || em(e) || tm(e) || Qf(e);
}
function iR(e) {
  return D(e, "RoutesNode");
}
function aR(e) {
  return D(e, "RedirectRouteNode");
}
function sR(e) {
  return D(e, "ProxyRouteNode");
}
function lR(e) {
  return D(e, "RewriteRouteNode");
}
function uR(e) {
  return D(e, "HeaderRouteNode");
}
function dR(e) {
  return D(e, "FirewallRouteNode");
}
function cR(e) {
  return D(e, "ColorStyleTokenNode");
}
function pR(e) {
  return D(e, "ColorStyleTokenListNode");
}
function fR(e) {
  return D(e, "SharedEnumListNode");
}
function Ks(e) {
  return D(e, "SharedEnumNode");
}
function mR(e) {
  return D(e, "ErrorListNode");
}
function yR(e) {
  return e?.__class === "ErrorNode";
}
function hR(e) {
  return e?.__class === "FormPlainTextInputNode";
}
function xR(e) {
  return e?.__class === "FormBooleanInputNode";
}
function gR(e) {
  return e?.__class === "FormSelectNode";
}
function bR(e) {
  return D(e, "ComponentPresetNode");
}
function TR(e) {
  return D(e, "PresetsListNode");
}
function Yr(e) {
  return e?.__class === "TextStylePresetNode";
}
function CR(e) {
  return Yr(e) && !e.replicaInfo;
}
function VR(e) {
  return Yr(e) && !!e.replicaInfo;
}
function SR(e) {
  return e?.__class === "LinkStylePresetNode";
}
function $s(e) {
  return e?.__class === "BlockquoteStylePresetNode";
}
function RR(e) {
  return e?.__class === "TableStylePresetNode";
}
function NR(e) {
  return $s(e) && !e.replicaInfo;
}
function PR(e) {
  return !!e?.replicaInfo && (Yr(e) || $s(e));
}
function vR(e) {
  return e?.__class === "ImageStylePresetNode";
}
function IR(e) {
  return e?.__class === "InlineCodeStylePresetNode";
}
function Kn(e) {
  return D(e, "RouteSegmentNode");
}
function DR(e) {
  return D(e, "RouteSegmentRootNode");
}
function qs(e) {
  return D(e, "SlotNode");
}
function $n(e) {
  return D(e, "SlotPropertyNode");
}
function kR(e) {
  return D(e, "EntityFolderNode");
}
function LR(e) {
  return D(e, "EntityReferenceNode");
}
function wR(e) {
  return D(e, "ExternalModulesListNode");
}
function MR(e) {
  return e?.__class === "ExternalModuleNode";
}
function BR(e) {
  return D(e, "AnalyticsScopeNode");
}
function ER(e) {
  return e?.__class === "LocalizationGlossaryNode";
}
function AR(e) {
  return e?.__class === "LocalizationGlossaryItemNode";
}
function FR(e) {
  return D(e, "FunnelNode");
}
function OR(e) {
  return D(e, "FunnelStepNode");
}
function WR(e) {
  return D(e, "FunnelStepActionNode");
}
function nm(e) {
  return e ? qf(e) && e.isVectorInstance : !1;
}
function zR(e) {
  if (!nm(e)) return !1;
  let t = e.dynamicVectorSetIdentifier;
  return t?.type === "variableReference" || t?.type === "computedValue";
}
function HR(e) {
  return e?.__class === "CustomCodeScopeNode";
}
function GR(e) {
  return e?.__class === "CustomCodeNode";
}
var Xs = "hidden master",
  _R = { isMaster: !1, isExternalMaster: null, replicaInfo: null },
  om = "isMaster";
function tn(e) {
  return om in e;
}
function Lt(e) {
  return tn(e) && e.isMaster;
}
function UR(e) {
  return tn(e) && !!e.isExternalMaster;
}
function KR(e) {
  let t = tn(e) ? e.isExternalMaster : null;
  return !!t && t !== Xs;
}
function $R(e) {
  return tn(e) ? e.isExternalMaster === Xs : !1;
}
function nn(e) {
  return e ? tn(e) && !!e.replicaInfo : !1;
}
function qR(e) {
  return e ? !nn(e) : !1;
}
function Ys(e) {
  return nn(e) && !!e.replicaInfo.inheritsFrom;
}
function wt(e) {
  return e ? !!e.originalid && !nn(e) : !1;
}
function XR(e) {
  return !!e.originalid;
}
function Js(e) {
  for (let t of e.ancestors()) if (Lt(t)) return !0;
  return !1;
}
function YR(e) {
  return Lt(e) || Js(e);
}
function JR(e, { includeSelf: t } = { includeSelf: !0 }) {
  if (t && Lt(e)) return e;
  for (let n of e.ancestors()) if (Lt(n)) return n;
  return null;
}
function ZR(e) {
  return wt(e) || Js(e);
}
function Mt(e) {
  return G(e) && e.length === 4 && e.every(R);
}
function Zs(e) {
  return Mt(e) ? [Math.min(Math.max(e[0], 0), 1), e[1], Math.min(Math.max(e[2], 0), 1), e[3]] : e;
}
function qn(e) {
  for (let t of Reflect.ownKeys(e)) {
    let n = e[t];
    !n || (typeof n != "object" && !Cs(n)) || qn(n);
  }
  return Object.freeze(e);
}
var rm = {
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
qn(rm);
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
qn(rt);
var Bt = "type",
  Xn = "durationBasedSpring",
  Jn = "ease",
  im = "duration",
  am = "delay",
  Qs = "stiffness",
  el = "damping",
  sm = "mass",
  ei = [im, am, Qs, el, sm],
  Jr = "bounce",
  Yn = "stagger";
function on(e) {
  return e === "spring" || e === "tween" || e === "inertia" || e === !1;
}
function ti(e) {
  return !g(e) || !on(e[Bt]) || !Mt(e[Jn]) ? !1 : ei.every((t) => R(e[t]));
}
function Zn(e) {
  return g(e) ? (on(e[Bt]) || Mt(e[Jn]) ? !0 : ei.some((t) => R(e[t]))) : !1;
}
function tl(e) {
  switch (e.type) {
    case "spring":
      return { type: "spring", ...mm(e), delay: e.delay };
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
var lm = ["stiffness", "damping", "mass"],
  um = ["duration", "bounce"],
  dm = ["ease"];
function cm(e) {
  return "type" in e
    ? e.type === !1
      ? !0
      : e.type !== "tween" || dm.some((t) => t in e)
        ? !1
        : e.duration === 0
    : !1;
}
function pm(e) {
  return e.type !== "spring" || lm.some((t) => t in e) ? !1 : um.some((t) => t in e);
}
var Zr = "bounceStiffness",
  Qr = "bounceDamping",
  fm = (e) => {
    let t = { ...rt },
      n = e[Bt];
    on(n) && (t[Bt] = cm(e) ? !1 : n);
    let o = e[Jn];
    Mt(o) && (t[Jn] = o);
    for (let r of ei) {
      let i = e[r];
      R(i) && (t[r] = i);
    }
    return (
      Zr in e && R(e[Zr]) && (t[Qs] = e[Zr]),
      Qr in e && R(e[Qr]) && (t[el] = e[Qr]),
      Yn in e && R(e[Yn]) && (t[Yn] = e[Yn]),
      Xn in e ? (t[Xn] = e[Xn]) : pm(e) && (t[Xn] = !0),
      Jr in e && (t[Jr] = e[Jr]),
      t
    );
  };
function nl(e) {
  return Zn(e) && !on(e[Bt]);
}
function cN(e, t = rt) {
  return g(e) && on(e[Bt]) ? e : Zn(e) ? fm(e) : t;
}
function pN(e) {
  return ti(e) && e.type === "tween";
}
function fN(e) {
  return `all ${e.duration}s cubic-bezier(${e.ease.join(",")}) ${e.delay}s`;
}
function mm(e) {
  return e.type === "spring" && e.durationBasedSpring
    ? { duration: Math.min(e.duration, 10), bounce: e.bounce ?? 0 }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
var mN = (e) => e * 1e3;
var O = ((k) => (
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
    (k.Ref = "ref"),
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
    (k.SharedType = "sharedtype"),
    k
  ))(O || {}),
  ym = {
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
function hN(e) {
  return e.type in ym;
}
var hm = /^(?![\p{L}\p{M}\d-]*-$)(?!-)[\p{L}\p{M}\d-]+$/u,
  ol = /^(?:[\p{L}\p{M}\d](?:[\p{L}\p{M}\d-]*[\p{L}\p{M}\d])?\.)+[\p{L}\p{M}]+$/u;
function gN(e, t) {
  return e
    ? t && e === "www"
      ? "InvalidPhrase"
      : (t ? hm : ol).exec(e)
        ? null
        : "InvalidCharacter"
    : "Empty";
}
function ni(e, t = !1) {
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
function bN(e) {
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
function oi(e) {
  return (
    (e = e.trim()),
    e
      ? ni(e, !0)
        ? { result: "ok", normalizedValue: e }
        : ni(`https://${e}`)
          ? { result: "ok", normalizedValue: `https://${e}` }
          : { result: "error", message: "Please enter a valid URL" }
      : { result: "error", message: "Please enter a valid URL" }
  );
}
var rl = ":([a-z]\\w*)",
  SN = new RegExp(rl, "i"),
  ri = new RegExp(rl, "gi");
var il = "type",
  xm = "fetchDataValue";
function Qn(e) {
  return g(e) && il in e && e[il] === xm;
}
function LN(e) {
  return oi(e.url).result !== "error";
}
function wN(e) {
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
function MN(e) {
  if (e.controlProp) return e.controlProp.value;
  let t = e.fallbackValue;
  return (C(!v(t), "fallbackValue must be defined"), t);
}
function BN(e) {
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
    !Qn(t) ||
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
function EN(e, t) {
  let n = oi(e.url);
  return n.result !== "ok"
    ? e.url
    : n.normalizedValue.replaceAll(ri, (i, a) => {
        let s = e.variables[a];
        return s ? (f(s) ? s : t(s)) : "";
      });
}
function al(e) {
  let t = e.matchAll(ri),
    n = new Set();
  for (let o of t) {
    let r = o[1];
    r && r.length !== 0 && n.add(r);
  }
  return Array.from(n);
}
var AN = [
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
  gm = {
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
function eo(e) {
  return f(e) && Object.hasOwn(ll, e);
}
function rn(e) {
  return f(e) && Object.hasOwn(gm, e);
}
var HN = rn,
  bm = { boolean: !0, number: !0, string: !0, color: !0, date: !0, link: !0, image: !0 };
function GN(e) {
  return f(e) && Object.hasOwn(bm, e);
}
function jN(e) {
  return En(ll).filter(e);
}
var Tm = { responsiveimage: !0 };
function QN(e) {
  return eo(e) ? !0 : f(e) && e in Tm;
}
var Cm = "type",
  Vm = "valueTransform",
  Sm = [
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
  Rm = new Set(Sm),
  Nm = {
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
function Pm(e) {
  return Rm.has(e);
}
function vm(e) {
  return Object.hasOwn(Nm, e);
}
var Im = {
  enumToDisplayName: !0,
  convertFromEnum: !0,
  convertFromBoolean: !0,
  convertFromString: !0,
  arrayToArray: !0,
  toDateString: !0,
};
function Dm(e) {
  return Object.hasOwn(Im, e);
}
var km = {
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
  no = Ps(km);
function eP() {
  return no;
}
function Lm(e) {
  let t = ii[e];
  return !(Ve(t) || v(t));
}
function tP(e) {
  return Lm(e.name);
}
function nP(e) {
  return Pm(e.name) && dl(e.name) !== null;
}
function wm(e) {
  return vm(e) || Dm(e);
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
function oP(e) {
  return ul.includes(e);
}
var ii = {
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
  Mm = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of no) {
        let n = ii[t];
        if (n)
          for (let o of n) {
            let r = e.get(o);
            r ? r.push(t) : e.set(o, [t]);
          }
      }
      return e;
    };
  })();
function Bm(e) {
  return Mm().get(e);
}
function rP(e) {
  let t = Bm(e);
  return !!(t && t.length > 0);
}
function dl(e) {
  return ii[e];
}
var Em = {
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
function iP(e) {
  return Em[e];
}
var ai = {
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
  Am = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of no) {
        let n = ai[t];
        for (let o of n) {
          let r = e.get(o);
          r ? r.push(t) : e.set(o, [t]);
        }
      }
      return e;
    };
  })();
function aP(e) {
  return Am().get(e);
}
function cl(e) {
  return ai[e];
}
function sP(e, t) {
  return wm(e.name) ? ai[e.name].includes(t) : !1;
}
function lP(e) {
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
var uP = new Set(["convertFromBoolean", "equals", "isSet"]),
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
function dP(e, t) {
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
      return we(e);
  }
}
var Fm = new Set(["prefix", "suffix"]);
function Om(e) {
  return Fm.has(e);
}
var to;
function Wm(e) {
  return (
    to ||
      (to = new Set(
        no.filter((t) => {
          let n = dl(t);
          if (n?.length !== 1 || n[0] !== "array") return !1;
          let o = cl(t);
          return o.length !== 1 ? !1 : o[0] === "array";
        })
      )),
    to.has(e)
  );
}
function cP(e) {
  return Wm(e) || Om(e);
}
function pP(e, t) {
  let n = e.findIndex((i) => i.id === t),
    o = e[n];
  if (!o) return null;
  let r = 1;
  if (fl(o.name)) for (let i = n + 1, a = e.length; i < a && e[i]?.name === "negate"; i++) r++;
  return { start: n, length: r };
}
function zm(e) {
  return g(e) && e[Cm] === Vm;
}
function ml(e, t) {
  if (!zm(t) || e.name !== t.name) return !1;
  for (let n of En(e)) if (n !== "id" && e[n] !== t[n]) return !1;
  return !0;
}
var fP = ["standard", "compact"],
  mP = ["short", "long"],
  yP = ["decimal", "currency", "unit"],
  hP = ["symbol", "narrowSymbol", "code", "name"],
  xP = ["short", "narrow", "long"],
  gP = ["year", "month", "day", "hour12", "hour24", "minute"];
var yl = "type",
  an = "variableReference";
function M(e) {
  return g(e) && yl in e && e[yl] === an;
}
function hl(e, t) {
  return { type: an, id: e, providerId: t };
}
function si(e, t) {
  return { type: an, id: e, providerId: t };
}
function oo(e, t) {
  return M(t) ? e.id === t.id && e.providerId === t.providerId : !1;
}
var xl = "transform";
function CP(e) {
  return M(e) && e.providerId === xl;
}
function VP(e) {
  return { type: an, id: e, providerId: xl };
}
var gl = "payload",
  bl = ".";
function SP(e) {
  return M(e) && e.providerId === gl;
}
function RP(e) {
  return { type: an, id: e.join(bl), providerId: gl };
}
function NP(e) {
  let t = Hm(e.id);
  if (!t.some((n) => n.length === 0)) return t;
}
function Hm(e) {
  return e.split(bl);
}
var Tl = "type",
  li = "computedValue",
  Gm = {
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
function wP(e) {
  return f(e) && Object.hasOwn(Gm, e);
}
function ye(e) {
  return g(e) && Tl in e && e[Tl] === li;
}
function MP(e) {
  return ye(e) && Qn(e.startValue);
}
function Cl(e) {
  return ye(e) && M(e.startValue);
}
function BP(e) {
  return (
    ye(e) &&
    e.transforms.length === 1 &&
    e.transforms[0]?.name === "toDateString" &&
    e.transforms[0]?.display === "relative"
  );
}
function EP(e) {
  return ye(e) && e.transforms.some((t) => t.name === "toDateString");
}
function AP(e) {
  return ye(e) && e.transforms.some((t) => t.name === "toDateString" && t.display !== "relative");
}
function Vl(e, t) {
  return !ye(t) ||
    e.outputType !== t.outputType ||
    e.startValue.type !== t.startValue.type ||
    (M(e.startValue) && !oo(e.startValue, t.startValue)) ||
    (Qn(e.startValue) && !sl(e.startValue, t.startValue)) ||
    e.transforms.length !== t.transforms.length
    ? !1
    : e.transforms.every((n, o) => ml(n, t.transforms[o]));
}
function Sl(e, t, n) {
  return M(t)
    ? { type: li, outputType: e, startValue: t, transforms: n }
    : { type: li, outputType: e, startValue: t, transforms: n };
}
function E(e) {
  return M(e) || ye(e);
}
function Rl(e, t) {
  return M(e) ? oo(e, t) : Vl(e, t);
}
var KP = { isVariant: void 0, isBreakpoint: void 0, gesture: void 0, variantTransition: void 0 },
  jm = "isVariant";
function _m(e) {
  return jm in e;
}
var $P = ["hover", "pressed"],
  Um = "gesture";
function Pl(e) {
  return Um in e;
}
function he(e) {
  return _m(e) && e.isVariant === !0;
}
function vl(e) {
  return he(e) && Lt(e);
}
function qP(e) {
  for (let t of e.ancestors()) if (vl(t)) return t;
  return null;
}
function XP(e) {
  return he(e) ? !Pl(e) || !e.gesture : !1;
}
function Nl(e) {
  return Il(e) && Ys(e) && Pl(e) && !!e.gesture;
}
function YP(e) {
  if (Nl(e)) return !0;
  if (!wt(e)) return !1;
  for (let t of e.ancestors()) if (Nl(t)) return !0;
  return !1;
}
function JP(e) {
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
function ZP(e) {
  return he(e) || Km(e);
}
function Km(e) {
  return e.cache.insideVariant;
}
function Il(e) {
  return nn(e) && he(e);
}
function $m(e) {
  return wt(e) && e.cache.insideVariant;
}
function QP(e) {
  return Il(e) || $m(e);
}
var qm = "isBreakpoint";
function Xm(e) {
  return qm in e;
}
function at(e) {
  return e ? he(e) && Xm(e) && e.isBreakpoint === !0 : !1;
}
function ev(e) {
  return at(e) && vl(e);
}
function tv(e) {
  return e ? he(e) && !at(e) : !1;
}
function nv(e) {
  return he(e) ? ti(e.variantTransition) || E(e.variantTransition) || nl(e.variantTransition) : !1;
}
var Ym = bt("serializeJS"),
  Jm = {
    serializeSpread(e) {
      return `...${e}`;
    },
    serializeKeyValue(e, t, n) {
      let o = $(t, n);
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
  Dl = new Intl.Collator("en", { sensitivity: "base" }).compare;
function ro(e, t, n) {
  let o = kl(n, t),
    r = [];
  for (let [i, a] of Object.entries(t)) {
    let s = e.serializeKeyValue(i, a, o);
    s && r.push(s);
  }
  return (
    t instanceof st
      ? (st.isSorted(t) && r.sort(Dl),
        r.unshift(...st.spreadsAtStart(t).map(e.serializeSpread)),
        r.push(...st.spreadsAtEnd(t).map(e.serializeSpread)))
      : r.sort(Dl),
    e.joinObject(r)
  );
}
function $(e, t = new Set()) {
  if (e instanceof A) return String(e);
  if (typeof e == "number" || typeof e == "boolean" || Ve(e)) return String(e);
  if (f(e))
    return JSON.stringify(e).replace(
      /[\u2028\u2029]/gu,
      (n) => `\\u${n.charCodeAt(0).toString(16)}`
    );
  if (G(e)) {
    let n = kl(t, e),
      o = [];
    for (let r of e) {
      let i = $(r, n);
      v(i) || o.push(i);
    }
    return `[${o.join(", ")}]`;
  } else if (typeof e == "object") return ro(Jm, e, t);
}
function kl(e, t) {
  if (e.has(t))
    throw (
      Ym.error("Encountered circular reference to object while serializing:", t),
      Error("Circular Reference")
    );
  let n = new Set(e);
  return (n.add(t), n);
}
var A = class e extends String {
  static fn(t, ...n) {
    let o = [];
    for (let r of n) (r || (R(r) && r === 0) || (f(r) && r === "")) && o.push($(r));
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
      let i = o instanceof A ? $(o) : o;
      n[i] = r;
    }
    return new e(n);
  }
};
function av(e) {
  return e instanceof st;
}
function lt(e, t = "") {
  let n = "";
  for (let o of e) o && (n && (n += t), (n += o instanceof A ? $(o) : o));
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
function io(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((o, r) => {
      n.push($(o), e[r + 1]);
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
})((io ||= {}));
var wl = Symbol("jst template literal");
function sn(e, ...t) {
  if (t.every((o) => f(o) || R(o) || ee(o) || Ve(o))) {
    let o = [e[0]];
    return (
      t.forEach((r, i) => {
        o.push(String(r), e[i + 1]);
      }),
      o.join("")
    );
  }
  let n = ["`", ui(e[0])];
  return (
    t.forEach((o, r) => {
      (f(o)
        ? n.push(ui(o))
        : typeof o == "number" || typeof o == "boolean" || Ve(o)
          ? n.push(String(o))
          : o instanceof A && A.hasMarker(o, wl)
            ? n.push(o.substring(1, o.length - 1))
            : n.push("${", $(o), "}"),
        n.push(ui(e[r + 1])));
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
})((sn ||= {}));
var Zm = /(?<char>[A-Z])/gu;
function Qm(e) {
  return e.replace(Zm, "-$<char>").toLowerCase();
}
var ey = new Set(["viewBox", "stdDeviation"]),
  ty = {
    serializeSpread(e) {
      return `{...${e}}`;
    },
    serializeKeyValue(e, t, n) {
      if (v(t) || A.isUndefined(t)) return;
      let o = ey.has(e) ? e : Qm(e);
      if (t === !0 || A.isTrue(t)) return o;
      if (R(t)) return `${o}="${t}"`;
      let r = $(t, n);
      if (r !== "") return `${o}=${r}`;
    },
    joinObject(e) {
      return e.join(" ");
    },
  };
function Ml(e) {
  return e ? new A(" " + ro(ty, e, new Set())) : io``;
}
var di = Symbol("svg tag");
function El(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((o, r) => {
      n.push($(o), e[r + 1]);
    }),
    A.withMarker(di, n.join(""))
  );
}
((r) => {
  function e(i, a, s) {
    return s && $(s)
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
    return A.withMarker(di, i);
  }
  r.fromTrustedString = n;
  function o(i) {
    return (C(A.hasMarker(i, di), "SVG children can only be svg"), i);
  }
  r.children = o;
})((El ||= {}));
var ny = {
  serializeSpread(e) {
    return `{...${e}}`;
  },
  serializeKeyValue(e, t, n) {
    if (v(t) || A.isUndefined(t)) return;
    if (t === !0 || A.isTrue(t)) return e;
    let o = $(t, n);
    if (o !== "") return `${e}={${o}}`;
  },
  joinObject(e) {
    return e.join(" ");
  },
};
function Bl(e) {
  return e ? new A(" " + ro(ny, e, new Set())) : io``;
}
var ci = Symbol("jsx tag");
function Al(e, ...t) {
  let n = [e[0]];
  return (
    t.forEach((o, r) => {
      n.push($(o), e[r + 1]);
    }),
    A.withMarker(ci, n.join(""))
  );
}
((r) => {
  function e(i) {
    return A.hasMarker(i, ci) ? i : r`{${i}}`;
  }
  r.children = e;
  function t(i) {
    return A.withMarker(ci, i);
  }
  r.fromTrustedString = t;
  function n(i, a, s) {
    return (
      (i = Ll(i) ? i : new A(i)),
      s && $(s) ? r`<${i}${Bl(a)}>${r.children(s)}</${i}>` : r`<${i}${Bl(a)}/>`
    );
  }
  r.tag = n;
  function o(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  r.applyTransforms = o;
})((Al ||= {}));
function ui(e) {
  return e ? e.replace(/[`\\]|\$(?=\{)/gu, "\\$&") : "";
}
var ln = {
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
function He(e, t, n, o = !1) {
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
function et(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Ge(e) {
  let t = ao(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function ao(e) {
  let t = /\d?\.?\d+/u.exec(e);
  if (t) return Number(t[0]);
}
var pi = ((i) => (
    (i.RGB = "rgb"),
    (i.HSL = "hsl"),
    (i.HSV = "hsv"),
    (i.HEX = "hex"),
    (i.NAME = "name"),
    i
  ))(pi || {}),
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
      p = o * (632260 * e.m_b2 - 126452 * e.m_b1);
    ((this.r0s = r / a),
      (this.r0i = (i * t) / a),
      (this.r1s = r / (a + 126452)),
      (this.r1i = ((i - 769860) * t) / (a + 126452)),
      (this.g0s = s / u),
      (this.g0i = (l * t) / u),
      (this.g1s = s / (u + 126452)),
      (this.g1i = ((l - 769860) * t) / (u + 126452)),
      (this.b0s = c / p),
      (this.b0i = (m * t) / p),
      (this.b1s = c / (p + 126452)),
      (this.b1i = ((m - 769860) * t) / (p + 126452)));
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
    r: et(e) ? se(e, 255) * 255 : 0,
    g: et(t) ? se(t, 255) * 255 : 0,
    b: et(n) ? se(n, 255) * 255 : 0,
  };
}
function yi(e, t, n, o) {
  let r = [
    mi(Math.round(e).toString(16)),
    mi(Math.round(t).toString(16)),
    mi(Math.round(n).toString(16)),
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
    i = se(e, 255),
    a = se(t, 255),
    s = se(n, 255),
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
function fi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Gl(e, t, n) {
  let o, r, i;
  if (((e = se(e, 360)), (t = se(t * 100, 100)), (n = se(n * 100, 100)), t === 0)) o = r = i = n;
  else {
    let a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - a;
    ((o = fi(s, a, e + 1 / 3)), (r = fi(s, a, e)), (i = fi(s, a, e - 1 / 3)));
  }
  return { r: o * 255, g: r * 255, b: i * 255 };
}
function hi(e, t, n) {
  ((e = se(e, 255)), (t = se(t, 255)), (n = se(n, 255)));
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
  ((e = se(e, 360) * 6), (t = se(t * 100, 100)), (n = se(n * 100, 100)));
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
function se(e, t) {
  let n, o;
  if ((typeof t == "string" ? (n = parseFloat(t)) : (n = t), typeof e == "string")) {
    oy(e) && (e = "100%");
    let r = ry(e);
    ((o = Math.min(n, Math.max(0, parseFloat(e)))), r && (o = Math.floor(o * n) / 100));
  } else o = e;
  return Math.abs(o - n) < 1e-6 ? 1 : (o % n) / n;
}
function oy(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function ry(e) {
  return typeof e == "string" && e.includes("%");
}
function mi(e) {
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
function un(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    n = e.replace(t, "").trimEnd().toLowerCase(),
    o = ln[n];
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
        ? { h: parseInt(r[1] ?? ""), s: Ge(r[2] ?? ""), l: Ge(r[3] ?? ""), a: 1, format: "hsl" }
        : (r = Ae.hsla.exec(n))
          ? {
              h: parseInt(r[1] ?? ""),
              s: Ge(r[2] ?? ""),
              l: Ge(r[3] ?? ""),
              a: parseFloat(r[4] ?? ""),
              format: "hsl",
            }
          : (r = Ae.hsv.exec(n))
            ? { h: parseInt(r[1] ?? ""), s: Ge(r[2] ?? ""), v: Ge(r[3] ?? ""), a: 1, format: "hsv" }
            : (r = Ae.hsva.exec(n))
              ? {
                  h: parseInt(r[1] ?? ""),
                  s: Ge(r[2] ?? ""),
                  v: Ge(r[3] ?? ""),
                  a: parseFloat(r[4] ?? ""),
                  format: "hsv",
                }
              : (r = Ae.hex8.exec(n))
                ? {
                    r: xe(r[1] ?? ""),
                    g: xe(r[2] ?? ""),
                    b: xe(r[3] ?? ""),
                    a: Ol(r[4] ?? ""),
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
                        a: Ol(r[4] + "" + r[4]),
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
function Ol(e) {
  return xe(e) / 255;
}
var iy =
  /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u;
function _l(e) {
  let t = iy.exec(e);
  if (!t) return null;
  let { r: n = "0", g: o = "0", b: r = "0", a: i } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(o), b: parseFloat(r), a: i ? parseFloat(i) : 1 };
}
function xi(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Ul({ r: e, g: t, b: n, a: o }) {
  return { r: xi(e), g: xi(t), b: xi(n), a: o };
}
function gi(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Kl({ r: e, g: t, b: n, a: o }) {
  return { r: gi(e), g: gi(t), b: gi(n), a: o };
}
var ay = (e) => {
    let { r: t, g: n, b: o, a: r } = Ul(e);
    return {
      x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * o,
      y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * o,
      z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * o,
      a: r,
    };
  },
  sy = ({ x: e = 0, y: t = 0, z: n = 0, a: o = 1 }) =>
    Kl({
      r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
      g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
      b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
      a: o,
    }),
  ly = (e) => {
    let { r: t, g: n, b: o, a: r } = Ul(e);
    return {
      x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * o,
      y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * o,
      z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * o,
      a: r,
    };
  },
  uy = ({ x: e = 0, y: t = 0, z: n = 0, a: o = 1 }) =>
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
function dy(e) {
  return (e = e % 360) < 0 ? e + 360 : e;
}
function bi({ h: e = 0, s: t = 0, v: n = 0, a: o = 1 }) {
  let r = dy(e),
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
function Ti(e) {
  return uy(ly(e));
}
function ql(e) {
  return sy(ay(e));
}
var so = class e {
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
        return new e(bi(t));
      case "srgb":
        return new e(Ti(bi(t)));
    }
  }
  static fromRGB(t) {
    return new e(
      Ti({
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
    let n = _l(t);
    if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
  }
  static srgbFromValue(t) {
    if (!Q(t)) return t;
    let n = e.fromString(t);
    return n ? n.toString("srgb") : t;
  }
  static multiplyAlpha(t, n) {
    return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
  }
};
function Lv(e) {
  return so.srgbFromValue(e);
}
var Xl = new Map(),
  b = (() => {
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
      let l = cy(r, i, a, s);
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
      (e.isColorString = (r) => (typeof r == "string" ? un(r) !== !1 : !1)),
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
      (e.toHex = (r, i = !1) => yi(r.r, r.g, r.b, i)),
      (e.toHexString = (r, i = !1) => `#${e.toHex(r, i)}`),
      (e.isP3String = (r) => (typeof r != "string" ? !1 : so.isP3String(r))),
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
        let i = hi(r.r, r.g, r.b);
        return { h: i.h * 360, s: i.s, v: i.v, a: r.a };
      }),
      (e.toHsvString = (r) => {
        let i = hi(r.r, r.g, r.b),
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
        let i = yi(r.r, r.g, r.b, !0);
        for (let a of Object.keys(ln)) if (ln[a] === i) return a;
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
            r: He(a, [0, 1], [r.r, i.r], s),
            g: He(a, [0, 1], [r.g, i.g], s),
            b: He(a, [0, 1], [r.b, i.b], s),
            a: He(a, [0, 1], [r.a, i.a], s),
          });
        else {
          let c, m;
          (n.isHSL(l)
            ? ((c = e.toHsl(r)), (m = e.toHsl(i)))
            : ((c = e.toHusl(r)), (m = e.toHusl(i))),
            c.s === 0 ? (c.h = m.h) : m.s === 0 && (m.h = c.h));
          let p = c.h,
            x = m.h,
            h = x - p;
          h > 180 ? (h = x - 360 - p) : h < -180 && (h = x + 360 - p);
          let V = {
            h: He(a, [0, 1], [p, p + h], s),
            s: He(a, [0, 1], [c.s, m.s], s),
            l: He(a, [0, 1], [c.l, m.l], s),
            a: He(a, [0, 1], [r.a, i.a], s),
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
          p = u ** 2;
        return Math.sqrt(2 * c + 4 * m + 3 * p + (a * (c - p)) / 256);
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
function cy(e, t, n, o = 1) {
  let r;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof n == "number" &&
    !Number.isNaN(n)
      ? (r = Ci({ r: e, g: t, b: n, a: o }))
      : typeof e == "string"
        ? (r = py(e))
        : typeof e == "object" &&
          (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
            ? (r = Ci(e))
            : (r = Yl(e))),
    r
  );
}
function py(e) {
  let t = un(e);
  if (t) return t.format === "hsl" ? Yl(t) : t.format === "hsv" ? fy(t) : Ci(t);
}
function fy(e) {
  let t = jl(e.h, e.s, e.v);
  return { ...At(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? Jl(e.a) : 1 };
}
function Ci(e) {
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
    (t = et(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = et(e.s) ? e.s : 1),
    typeof e.s == "string" && (n = ao(e.s)),
    (o = et(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (o = ao(e.l)),
    (r = Gl(t, n, o)),
    (i = { h: t, s: n, l: o }),
    { ...r, ...i, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function Jl(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function lo(e) {
  if (!Q(e) || e.charAt(e.length - 1) !== "%") return !1;
  let n = e.slice(0, -1),
    o = parseFloat(n);
  return Oe(o);
}
function Bv(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return Oe(n) ? n : 50;
}
function Ov(e) {
  return e ? Os(e.__class) : !1;
}
function Wv(e) {
  return e ? Kr(e.__class) : !1;
}
function dn(e) {
  return e ? $r(e.__class) : !1;
}
function zv(e) {
  return e ? Ws(e.__class) : !1;
}
function Hv(e, t) {
  let n = e.getNodeParent(t);
  return n === null || !dn(n);
}
function Gv(e, t) {
  if (!dn(t)) return !1;
  let n = e.getNodeParent(t);
  return n === null ? !0 : !dn(n) && !Un(n);
}
var cn = Symbol("Not Found");
function uo(e) {
  return e === cn;
}
function Zl(e) {
  return e !== cn;
}
function Vi(e) {
  return Zl(e) && !St(e);
}
function Uv(e) {
  return Zl(e) && e !== void 0;
}
function Kv(e) {
  return Vi(e) && e !== void 0;
}
function my(e, t) {
  return E(e) ? !Rl(e, t) : e !== t;
}
function Ql(e, t, n, o) {
  let r = t[e];
  if (St(r)) return;
  let i = n[e],
    a = o ? o(i) : i;
  uo(r) ? (t[e] = a) : my(a, r) && (t[e] = Zt);
}
var eI = { codeComponentIdentifier: "", dynamicVectorSetIdentifier: void 0 },
  yy = "codeComponentIdentifier";
function co(e) {
  return e.hasProp(yy);
}
function tI(e, t) {
  !co(e) ||
    !Pe(e.codeComponentIdentifier) ||
    (t.codeComponentIdentifiers.add(e.codeComponentIdentifier),
    Ql("dynamicVectorSetIdentifier", t, e));
}
var po = ((S) => (
    (S.scroll = "framer/Scroll"),
    (S.page = "framer/Page"),
    (S.stack = "framer/Stack"),
    (S.prototype = "framer/Prototype"),
    (S.device = "__builtin/Device"),
    (S.legacyDevice = "@framer/framer.default/./Device.tsx_Device"),
    (S.legacyUnsplash = "@framer/framer.default/./Unsplash.tsx_Unsplash"),
    (S.navigationAction = "framer/useNavigate"),
    (S.openURLAction = "framer/useOpenURL"),
    (S.consoleLogAction = "framer/useLog"),
    (S.setVariantAction = "framer/useSetVariant"),
    (S.triggerEventAction = "framer/useTriggerEvent"),
    (S.showOverlayAction = "framer/useShowOverlay"),
    (S.showRelativeOverlayAction = "framer/useShowRelativeOverlay"),
    (S.loadMoreAction = "framer/useLoadMore"),
    (S.dismissOverlayAction = "framer/useDismissOverlay"),
    (S.setLocaleAction = "framer/useSetLocale"),
    (S.setVariableValueAction = "framer/useSetVariableValue"),
    (S.resetVariableValuesAction = "framer/useResetVariableValues"),
    S
  ))(po || {}),
  hy = new Set(Object.values(po)),
  oI = new Set(Object.values(po).filter((e) => e !== "framer/Prototype"));
function rI(e) {
  return hy.has(e);
}
var xy = new Set(["framer/Stack", "framer/Page", "framer/Scroll"]);
function pn(e) {
  return qs(e) || $n(e) ? !1 : !co(e) || gy(e);
}
function uI(e) {
  return co(e) && e.codeComponentIdentifier === "__builtin/Device";
}
function gy(e) {
  return xy.has(e.codeComponentIdentifier);
}
var by = "fillOpacity";
function bI(e) {
  return by in e;
}
var TI = { fillOpacity: void 0 },
  Ty = "fillType",
  Cy = "fillEnabled",
  Vy = "supportsGradient",
  Sy = "fillImageLocalized";
function Ft(e) {
  return Ty in e && pn(e);
}
function Si(e) {
  return Cy in e && pn(e);
}
function CI(e) {
  return Ft(e) ? (Si(e) ? !!e.fillEnabled : !0) : !1;
}
function VI(e) {
  return Sy in e;
}
function Ry(e) {
  return Vy in e && pn(e);
}
function eu(e) {
  return pn(e) ? (Ry(e) ? e.supportsGradient() : Ft(e)) : !1;
}
function Ny(e) {
  return kt(e) || eu(e);
}
function SI(e) {
  return Ny(e) && !(dn(e) || Un(e) || _s(e));
}
function tu(e) {
  return e === "linear-gradient" || e === "radial-gradient" || e === "conic-gradient";
}
function RI(e) {
  return eu(e) ? tu(e.fillType) : e.getFills().filter(Boolean).length;
}
function NI(e) {
  return e.fillEnabled && e.fillType === "image" && e.fillImage !== null;
}
function PI(e) {
  return Ft(e) && lo(e.fillImagePositionX) && lo(e.fillImagePositionY);
}
function nu(e) {
  return Si(e) && !e.fillEnabled ? !1 : Ft(e) && e.fillType === "image";
}
function Py(e) {
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
function vI(e) {
  return !Ft(e) || (Si(e) && !e.fillEnabled) ? !1 : !Py(e);
}
function II(e) {
  switch (e) {
    case void 0:
    case "contain":
      return "fit";
    default:
      return "fill";
  }
}
function vy(e) {
  return !e || !Ft(e) ? !1 : tu(e.fillType);
}
function DI(e) {
  if (vy(e) && !v(e.fillType))
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
function kI(e, t, n) {
  let o = n === "conic-gradient" ? 360 : 100,
    r = n === "conic-gradient" ? "deg" : "%";
  return sn.join(
    Array.from({ length: e }).map((i, a) => sn`${t} ${Math.round((a / (e - 1)) * o)}${r}`),
    ", "
  );
}
var Iy = ["left", "center", "right"],
  Dy = new Set(Iy),
  ky = ["top", "center", "bottom"],
  Ly = new Set(ky);
function LI(e, t) {
  return f(e)
    ? ((t === "y" || t === "fillImagePositionY") && Ly.has(e)) ||
      ((t === "x" || t === "fillImagePositionX") && Dy.has(e))
      ? !0
      : lo(e)
    : !1;
}
var wy = {
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
function ou(e) {
  let t = ("" + e).trim().toLowerCase(),
    n = t.lastIndexOf(".");
  return wy[~n ? t.substring(++n) : t];
}
var My = { auto: !0, lossless: !0, small: !0, medium: !0, large: !0, full: !0 };
function ru(e) {
  return vs(e) && e in My;
}
var fo = "framer/asset-reference,";
function By(e) {
  return e.startsWith(`data:${fo}`);
}
function GI(e) {
  return ou(e)?.startsWith("image/") ?? !1;
}
var iu = "originalFilename",
  au = "packageIdentifier",
  su = "preferredSize",
  lu = "presetName",
  uu = "width",
  du = "height";
function cu(e, t = null, n = null, o = null, r = null, i = null) {
  C(e !== "", "Can\u2019t create asset reference for empty identifier");
  let a = new URL(`data:${fo}${e}`);
  return (
    n && a.searchParams.set(iu, n),
    t && a.searchParams.set(au, t),
    o && a.searchParams.set(su, o),
    r && a.searchParams.set(lu, r),
    i && (a.searchParams.set(uu, i.width.toString()), a.searchParams.set(du, i.height.toString())),
    a.href
  );
}
function jI({
  identifier: e,
  preferredSize: t,
  intrinsicSize: n,
  packageIdentifier: o,
  originalFilename: r,
  presetName: i,
}) {
  return cu(e, o, r, t, i, n);
}
function _I(e) {
  return cu(
    e.identifier,
    e.packageIdentifier,
    e.originalFilename,
    e.preferredSize,
    e.presetName,
    e.intrinsicSize
  );
}
function pu(e) {
  if (By(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(fo.length),
        o = t.searchParams.get(iu),
        r = t.searchParams.get(au),
        i = t.searchParams.get(su),
        a = t.searchParams.get(lu),
        s = t.searchParams.get(uu),
        l = t.searchParams.get(du);
      return {
        identifier: n,
        originalFilename: o,
        packageIdentifier: r,
        preferredSize: ru(i) ? i : void 0,
        presetName: a,
        fileExtension: o && Ey(o),
        intrinsicSize: s && l ? { width: parseInt(s), height: parseInt(l) } : void 0,
      };
    } catch {
      return;
    }
}
function Ey(e) {
  return e.split(".").pop() ?? "";
}
var Ri = class {},
  Ni = class extends Ri {},
  mo = class extends Ni {
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
var YI = {},
  Ay = "children";
function Fy(e) {
  return Ay in e && e.children !== void 0;
}
var Oy = new mo();
function fu(e) {
  return Fy(e) ? e.children : Oy;
}
function mu(e) {
  for (let t in e) return !1;
  return !0;
}
var Pi = "default";
function tD(e) {
  return js(e) ? e.getGroundNodes().length === 0 : !1;
}
function nD(e) {
  if (!ze(e)) return !1;
  let t = e.getGroundNodes();
  return t.length > 1 ? !1 : t.length === 0 ? !0 : t[0]?.children?.length === 0;
}
function Wy(e) {
  return e ? !e.children || e.children.length === 0 : !1;
}
function zy(e) {
  return e === "";
}
function vi(e) {
  return !!(e.webPageId && zy(e.segment));
}
function oD(e) {
  return vi(e) && Wy(e);
}
function Hy(e, t) {
  let n = t.get(e);
  if (!Kn(n)) return;
  let o = t.get(n.webPageId);
  if (ze(o) || n.children.length > 0) return;
  let r = n.parentid;
  (t.remove(n.id), r && Hy(r, t));
}
var Ot = "default",
  yu = "include";
function iD(e, t) {
  return t === Ot ? yu : (e.localeConfig?.[t]?.inclusion ?? Gy(e, t) ?? yu);
}
function Gy(e, t) {
  if (e.includedLocales !== void 0) return e.includedLocales.includes(t) ? "include" : "exclude";
}
var xu = (e) => {
    let t = N.fromRect(e.getBoundingClientRect());
    return ((t.x = t.x + Ct.scrollX), (t.y = t.y + Ct.scrollY), t);
  },
  jy = (e) => N.merge(...e.map(xu)),
  _y = (e, t) => {
    let n = gu(e, t);
    return { x: n.x, y: n.y, width: e.width, height: e.height };
  },
  Uy = (e, t) => {
    let n = bu(e, t);
    return { x: n.x, y: n.y, width: e.width, height: e.height };
  },
  Ii = (e) => {
    let t = e.getBoundingClientRect();
    return { x: t.left + Ct.scrollX, y: t.top + Ct.scrollY, width: t.width, height: t.height };
  },
  Ky = (e) => ({ x: e.pageX, y: e.pageY }),
  $y = (e) => ({ x: e.clientX, y: e.clientY }),
  gu = (e, t) => {
    let n = Ii(t);
    return { x: e.x + n.x, y: e.y + n.y };
  },
  bu = (e, t) => {
    let n = Ii(t);
    return { x: e.x - n.x, y: e.y - n.y };
  },
  dD = (e, t = {}) => {
    let n = new KeyboardEvent("keydown", { bubbles: !0, keyCode: e, ...t }),
      o = document.activeElement;
    o && o.dispatchEvent(n);
  },
  cD = {
    frameFromElement: xu,
    frameFromElements: jy,
    convertToPageFrame: _y,
    convertFromPageFrame: Uy,
    getPageFrame: Ii,
    fromEventForPage: Ky,
    fromEventForClient: $y,
    convertToPagePoint: gu,
    convertFromPagePoint: bu,
  },
  hu,
  qy = !is() && typeof Document < "u" && typeof Document.parseHTMLUnsafe == "function";
function Tu(e, t) {
  return qy && !t
    ? Document.parseHTMLUnsafe(e)
    : ((hu ??= new DOMParser()), hu.parseFromString(e, t ?? "text/html"));
}
function pD(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
var Xy = /&(?:[gl]t|quot|#39|amp|#6[02]|#34|apos|#38);/gu,
  Yy = {
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
function fD(e) {
  return e.replace(Xy, (t) => Yy[t]);
}
function Cu(e) {
  let t = `<html><body>${e}</body></html>`;
  return Tu(t).body;
}
function Jy(e, t) {
  let n = new Map();
  function o(r) {
    let i = n.get(r);
    if (f(i)) return i;
    let a = e(r);
    if ((n.set(r, a), n.size > t)) {
      let s = n.keys().next().value;
      f(s) && n.delete(s);
    }
    return a;
  }
  return o;
}
var Zy = 1e5,
  Di = Jy(Qy, Zy);
function Qy(e) {
  let t = Cu(e),
    n = t.innerText;
  return ls.isTest ? (n ?? t.textContent ?? "") : (C(n !== null), n);
}
function Vu(
  e,
  t = `
`
) {
  let n = e.replace(/<\/(h[1-6]|p|ul|ol)>/gu, `</$1>${t}`),
    o = Di(n),
    r = t.length;
  return r && o.endsWith(t) ? o.slice(0, r * -1) : o;
}
function Su(e, { preserveTrailingEmptyBlockNewLine: t = !1 } = {}) {
  let n = yo(e.childNodes);
  if (n.length === 0) return "";
  let o = n.join(`
`);
  return !t || e.childNodes.some(ho)
    ? o
    : o +
        `
`;
}
function Ru(e) {
  return e.replaceAll(/\n+/gu, "");
}
function yo(e) {
  return e.flatMap((t) => (t.type === "media" || t.type === "module" ? [] : [eh(t)]));
}
function eh(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.map(ih).join("");
    case "bulletedList":
    case "numberedList":
      return nh(e.childNodes).join(`
`);
    case "blockquote":
      return yo(e.childNodes).join(`
`);
    case "table":
      return e.childNodes.map(oh).join(`
`);
    case "media":
    case "module":
      return "";
  }
}
function th(e) {
  return yo(e.childNodes).join(`
`);
}
function nh(e) {
  return e.flatMap((t) => {
    let n = th(t);
    return n.length > 0 ? [n] : [];
  });
}
function oh(e) {
  return e.childNodes.map(rh).join(`
`);
}
function rh(e) {
  return yo(e.childNodes).join(`
`);
}
function ih(e) {
  switch (e.type) {
    case "text":
      return e.text;
    case "lineBreak":
      return `
`;
  }
}
function ho(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.some(uh);
    case "bulletedList":
    case "numberedList":
      return e.childNodes.some(ah);
    case "blockquote":
      return e.childNodes.some(ho);
    case "table":
      return e.childNodes.some(sh);
    case "media":
    case "module":
      return !1;
  }
}
function ah(e) {
  return e.childNodes.some(ho);
}
function sh(e) {
  return e.childNodes.some(lh);
}
function lh(e) {
  return e.childNodes.some(ho);
}
function uh(e) {
  switch (e.type) {
    case "text":
      return e.text.length > 0;
    case "lineBreak":
      return !1;
  }
}
var ki = {};
Object.freeze(ki);
function PD(e, t) {
  if (!e) return ki;
  let n = e,
    o = {},
    r = !1;
  for (let i of t) {
    let a = n[i.id];
    a !== void 0 && ((o[i.id] = a), (r = !0));
  }
  return r ? o : ki;
}
function xo(e) {
  return e?.value !== void 0 && e?.value !== null;
}
function vD(e, t) {
  let n = e?.[t];
  return xo(n) ? n.value : void 0;
}
function dh(e, { preserveNewLines: t = !1 } = {}) {
  return f(e.value)
    ? e.type !== "rich-text"
      ? e.value
      : t
        ? Vu(e.value)
        : Di(e.value)
    : ch(e.value, { preserveNewLines: t });
}
function ID(e, t) {
  if (e != null) {
    if (e.value === null) return null;
    if (xo(e)) return dh(e, t);
  }
}
function ch(e, { preserveNewLines: t }) {
  let n = Su(e);
  return t ? n : Ru(n);
}
function Nu(e, t) {
  if (!t || !e || e.id === Ot) return null;
  for (; e;) {
    let n = t[e.id];
    if (n && xo(n)) return n;
    e = e.fallback;
  }
  return null;
}
var Pu = "routeSegmentRoot";
var ph = new Set(["/404.html", "/404", "/404/"]),
  vu = new Set(Array.from(ph).map((e) => e.replaceAll("/", "")));
var Iu = {
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
function ku(e) {
  return f(e) && e in Iu;
}
var AD = Iu;
function fh(e) {
  return f(e) && e in Du;
}
var FD = Du;
function OD(e) {
  if (!f(e)) return !1;
  if (ku(e)) return !0;
  let [t, n] = Lu(e);
  return !!(t && n);
}
function Lu(e) {
  if (!f(e)) return [void 0, void 0];
  let t = e.split("-"),
    n = "",
    o;
  for (let r of t) {
    if (fh(r)) {
      o = r;
      continue;
    }
    if (!n) {
      n = r;
      continue;
    }
    n += "-" + r;
  }
  return [ku(n) ? n : void 0, o];
}
var mh = new Set(["ar", "dv", "fa", "he", "ks", "ps", "sd", "ug", "ur", "yi"]);
function yh(e) {
  return e.endsWith("-Arab") || e.includes("-Arab-");
}
function go(e) {
  if (yh(e)) return "rtl";
  let [t] = Lu(e);
  return t && mh.has(t) ? "rtl" : "ltr";
}
var wu = Symbol();
function je(e) {
  let t,
    n = wu;
  return (...o) => {
    if (t && Is(t, o) && n !== wu) return n;
    t = o;
    let r = e(...o);
    return ((n = r), r);
  };
}
function Li(e, t) {
  let n = e.root.getDefaultLocale(),
    o = e.root.locales ?? On();
  return t === "includeDrafts" ? hh(n, o) : xh(n, o);
}
function $D(e, t, n = "includeDrafts") {
  let o = Li(e, n),
    r = o[0];
  return (
    C(r, "Default locale should always exist"),
    t ? (o.find(({ id: i }) => i === t) ?? r) : r
  );
}
var hh = je((e, t) => {
    let n = [e, ...t];
    return wi(n, { includeDrafts: !0 });
  }),
  xh = je((e, t) => {
    let n = [e, ...t];
    return wi(n, { includeDrafts: !1 });
  });
function wi(e, { includeDrafts: t }) {
  let n = new Map(),
    o = new Map();
  for (let a of e) (n.set(a.id, a), a.fallback && o.set(a.id, a.fallback));
  let r = [],
    i = !t && Rs.isOn("skipPublishingLocalesFallingBackToDraft");
  for (let a of e) {
    if ((!t && a.draft) || (i && Bu(a, n))) continue;
    let s = Mu(a);
    if ((r.push(s), !a.fallback)) continue;
    let l = s,
      u = n.get(a.fallback),
      c = new Set();
    for (c.add(a.id); u && !c.has(u.id);) {
      c.add(u.id);
      let m = Mu(u);
      ((l.fallback = m), (l = m));
      let p = o.get(u.id);
      u = p ? n.get(p) : void 0;
    }
  }
  return r;
}
function qD(e) {
  let t = new Map(e.map((n) => [n.id, n]));
  return e.filter((n) => !n.draft && Bu(n, t));
}
function Bu(e, t) {
  let n = new Set(),
    o = e;
  for (; o;) {
    if (n.has(o.id)) return !1;
    if ((n.add(o.id), o.draft)) return !0;
    o = o.fallback ? t.get(o.fallback) : void 0;
  }
  return !1;
}
function Mu(e) {
  return { id: e.id, code: e.code, slug: e.slug, name: e.name, textDirection: go(e.code) };
}
var XD = { vekterLocalesToRouterLocales: wi };
var gh = "$";
function Eu(e) {
  let t = e.get(Pu);
  return (
    C(t, "RouteSegmentRootNode not found"),
    C(
      t.parentid === e.root.id,
      "RouteSegmentRootNode is not under the tree root. Parent id: " + t.parentid
    ),
    t
  );
}
function rk(e, t) {
  let n = Li(e, "excludeDrafts"),
    o = Object.fromEntries(n.map((l) => [l.id, {}])),
    r = new Map(),
    i = 0,
    a = () => `${gh}${i++}`,
    s = new Set();
  for (let l of t.children) Au(e, "", r, o, a, s, l, n);
  return { webPageSegmentReferencePathByWebPageId: r, localizedSegments: o };
}
function Au(e, t, n, o, r, i, a, s) {
  C(o[Pi], "dictionary should include default");
  let l = a.webPageId ? e.get(a.webPageId) : void 0,
    u = !!l && !l.isDraft && !i.has(l.id);
  u && i.add(l.id);
  let c;
  bh(a) ? (a.segment ? ((c = r()), (t = `${t}/${c}`)) : (t = `${t}/`)) : (t = `${t}/${a.segment}`);
  let m = u;
  for (let p of a.children) m = Au(e, t, n, o, r, i, p, s) || m;
  if (m && c) {
    o[Pi][c] = a.segment;
    for (let p of s) {
      let x = Nu(p, a.segmentLocalized);
      if (x?.value && x.value !== a.segment) {
        let h = p.id;
        (C(o[h], "localizedSegments should include all locales"), (o[h][c] = x.value));
      }
    }
  }
  return (u && a.webPageId && n.set(a.webPageId, t), m);
}
var bh = (e) => !(!!e.dataIdentifier || vu.has(e.segment) || vi(e));
function Fu(e, t) {
  let o = Eu(e).getRouteSegmentIdForWebPageId(t);
  return e.getNode(o);
}
function Ou(e, t) {
  let n = Th(t);
  return n ? e.getNodeWithTrait(n, _n) : null;
}
function Th(e) {
  if (!e) return null;
  let t = ve(e);
  return !Rt(t) || !Pe(t) || t.type !== "collection" ? null : t.localIdName;
}
var bo = B(ne(), 1);
var Ai = B(oe(), 1);
function Ch(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function Wt(e) {
  return !e._constraints || Ch(e) ? !1 : e._constraints.enabled;
}
function Vh(e) {
  let { size: t } = e,
    { width: n, height: o } = e;
  return (
    I(t) && (n === void 0 && (n = t), o === void 0 && (o = t)),
    I(n) && I(o) ? { width: n, height: o } : null
  );
}
function Sh(e) {
  let t = Vh(e);
  if (t === null) return null;
  let { left: n, top: o } = e;
  return I(n) && I(o) ? { x: n, y: o, ...t } : null;
}
var Bi = ((o) => (
  (o[(o.Unknown = 0)] = "Unknown"),
  (o[(o.Disabled = 1)] = "Disabled"),
  (o[(o.DisabledForCurrentLevel = 2)] = "DisabledForCurrentLevel"),
  o
))(Bi || {});
function Rh(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let o = t === 1 || t === 2;
  if (!Wt(e) || o) return Sh(e);
  let r = Nh(e),
    i = Ph(t),
    a = i ? { sizing: i, positioning: i, viewport: null } : null;
  return Ur.toRect(r, a, null, n, null);
}
function Nh(e) {
  let { left: t, right: n, top: o, bottom: r, center: i, _constraints: a, size: s } = e,
    { width: l, height: u } = e;
  (l === void 0 && (l = s), u === void 0 && (u = s));
  let { aspectRatio: c, autoSize: m } = a,
    p = _r.quickfix({
      left: I(t),
      right: I(n),
      top: I(o),
      bottom: I(r),
      widthType: en(l),
      heightType: en(u),
      aspectRatio: c || null,
      fixedSize: m === !0,
    }),
    x = null,
    h = null,
    V = 0,
    P = 0;
  if (p.widthType !== 0 && typeof l == "string") {
    let S = parseFloat(l);
    l.endsWith("fr") ? ((V = 3), (x = S)) : l === "auto" ? (V = 2) : ((V = 1), (x = S / 100));
  } else l !== void 0 && typeof l != "string" && (x = l);
  if (p.heightType !== 0 && typeof u == "string") {
    let S = parseFloat(u);
    u.endsWith("fr")
      ? ((P = 3), (h = S))
      : u === "auto"
        ? (P = 2)
        : ((P = 1), (h = parseFloat(u) / 100));
  } else u !== void 0 && typeof u != "string" && (h = u);
  let y = 0.5,
    T = 0.5;
  return (
    (i === !0 || i === "x") && ((p.left = !1), typeof t == "string" && (y = parseFloat(t) / 100)),
    (i === !0 || i === "y") && ((p.top = !1), typeof o == "string" && (T = parseFloat(o) / 100)),
    {
      left: p.left ? t : null,
      right: p.right ? n : null,
      top: p.top ? o : null,
      bottom: p.bottom ? r : null,
      widthType: V,
      heightType: P,
      width: x,
      height: h,
      aspectRatio: p.aspectRatio || null,
      centerAnchorX: y,
      centerAnchorY: T,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
var Wu = bo.default.createContext({ parentSize: 0 });
function Ph(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function zu() {
  return bo.default.useContext(Wu).parentSize;
}
function Hu(e) {
  return typeof e == "object";
}
var vh = (e) => {
  let t = zu(),
    { parentSize: n, children: o } = e,
    r = bo.default.useMemo(() => ({ parentSize: n }), [Ih(n), Dh(n)]);
  return t === 1 ? o || null : (0, Ai.jsx)(Wu.Provider, { value: r, children: o });
};
function Ih(e) {
  return Hu(e) ? e.width : e;
}
function Dh(e) {
  return Hu(e) ? e.height : e;
}
function To(e, t) {
  return (0, Ai.jsx)(vh, { parentSize: t, children: e });
}
function Gu(e) {
  let t = zu();
  return Rh(e, t, !0);
}
function Ei({ width: e, height: t }) {
  return e === "auto" || e === "min-content" || t === "auto" || t === "min-content";
}
var Fi = {
  isImageObject: function (e) {
    return !e || typeof e == "string" ? !1 : typeof e == "object" && "src" in e;
  },
};
function kh(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: o, id: r } = t,
    i = n ?? r,
    a = o && i ? o[i] : void 0;
  return (a && typeof a == "string" && (e = { ...e, src: a }), e);
}
function ju(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Fi.isImageObject(t)) return;
  let o = null;
  if ((Q(n) ? (o = { alt: "", src: n }) : (o = re.get(t, null)), !!Fi.isImageObject(o)))
    return kh(o, e);
}
var Oi = (e) => e instanceof ms;
function Lh(e, t) {
  if (e.size < t) return;
  let o = Math.round(Math.random());
  for (let r of e.keys()) (++o & 1) !== 1 && e.delete(r);
}
function _u(e, t, n, o) {
  let r = t.get(n);
  if (r) return r;
  Lh(t, e);
  let i = o(n);
  return (t.set(n, i), i);
}
var Co = {
  hueRotate: (e, t) => b.toHslString(b.hueRotate(b(e), t)),
  setAlpha: (e, t) => b.toRgbString(b.alpha(b(e), t)),
  getAlpha: (e) => {
    let t = un(e);
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
var Uu = (e) => {
  let t = 0,
    n,
    o;
  if (e.length === 0) return t;
  for (n = 0; n < e.length; n++) ((o = e.charCodeAt(n)), (t = (t << 5) - t + o), (t |= 0));
  return t;
};
var wh = /var\(.+\)/u,
  Mh = new Map();
function Bh(e, t) {
  let n = [e, t];
  return wh.test(e) ? e : _u(1e3, Mh, n, () => Co.multiplyAlpha(e, t));
}
function ut(e, t = 1) {
  let n;
  return (
    "stops" in e
      ? (n = e.stops)
      : (n = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? n : n.map((o) => ({ ...o, value: Bh(o.value, t) }))
  );
}
function zt(e, t) {
  let n = 0;
  return (
    ut(e, t).forEach((o) => {
      n ^= Uu(o.value) ^ o.position;
    }),
    n
  );
}
var Eh = ["stops"];
function Ht(e) {
  return Eh.every((t) => t in e);
}
var Ah = ["start", "end"];
function Gt(e) {
  return Ah.every((t) => t in e);
}
var Fh = ["angle", "alpha"],
  Vo = {
    isLinearGradient: (e) => q(e) && Fh.every((t) => t in e) && (Gt(e) || Ht(e)),
    hash: (e) => e.angle ^ zt(e, e.alpha),
    toCSS: (e, t, n) => {
      let o = ut(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = Math.round(r),
        a = o.map((s) => `${n?.(s.value) ?? s.value} ${s.position * 100}%`);
      return `linear-gradient(${i}deg, ${a.join(", ")})`;
    },
  };
var Oh = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"],
  So = {
    isRadialGradient: (e) => q(e) && Oh.every((t) => t in e) && (Gt(e) || Ht(e)),
    hash: (e) =>
      e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ zt(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: n, widthFactor: o, heightFactor: r, centerAnchorX: i, centerAnchorY: a } = e,
        s = ut(e, n),
        l = s.map((u, c) => {
          let m = s[c + 1],
            p = u.position === 1 && m?.position === 1 ? u.position - 1e-4 : u.position;
          return `${t?.(u.value) ?? u.value} ${p * 100}%`;
        });
      return `radial-gradient(${o * 100}% ${r * 100}% at ${i * 100}% ${a * 100}%, ${l.join(", ")})`;
    },
  };
var Wh = ["alpha", "angle", "centerAnchorX", "centerAnchorY"],
  zh = {
    isConicGradient: (e) => q(e) && Wh.every((t) => t in e) && (Gt(e) || Ht(e)),
    hash: (e) => e.centerAnchorX ^ e.centerAnchorY ^ e.angle ^ zt(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: n, angle: o, centerAnchorX: r, centerAnchorY: i } = e,
        a = Math.round(o),
        l = ut(e, n)
          .map((u) => `${t?.(u.value) ?? u.value} ${u.position * 360}deg`)
          .join(", ");
      return `conic-gradient(from ${a}deg at ${r * 100}% ${i * 100}%, ${l})`;
    },
  };
var Hh = ["color", "x", "y", "blur"],
  Jk = { is: (e) => e && Hh.every((t) => t in e) },
  Wi = ["x", "y", "color", "inset", "blur", "spread"],
  Ku = {
    is: (e) => e && Wi.every((t) => t in e),
    toCSS: (e) =>
      `${e.inset ? "inset " : ""}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`,
  };
var $u = "0.000001px",
  zi = ` translateZ(${$u})`,
  qu = as() || rs() || ss();
function Xu(e) {
  e.willChange = "transform";
  let t = j.current() === j.canvas;
  qu && t && (e.translateZ = $u);
}
function Yu(e) {
  ((e.willChange = "transform"), Ju(e, !0));
}
function nL(e, t) {
  (t
    ? (e.style.willChange || "") !== "transform" && (e.style.willChange = "transform")
    : e.style.removeProperty("will-change"),
    Ju(e.style, t));
}
function Ju(e, t) {
  let n = j.current() === j.canvas;
  if (!qu || !n) return;
  let o = (Q(e.transform) && e.transform) || "";
  t ? o.includes(zi) || (e.transform = o + zi) : (e.transform = o.replace(zi, ""));
}
var Qu = B(ne(), 1);
var fe = (e) => e;
function Zu(e, t, n, o = !0) {
  if (!e) return;
  let r = fe(e.style),
    i = n || r[t],
    a = () => {
      Gh(i) && (r[t] = i);
    };
  ((r[t] = null), o ? Promise.resolve().then(a) : setTimeout(a, 0));
}
function Gh(e) {
  return Q(e) || Oe(e) || cs(e);
}
var Ro = (() => {
  class e extends Qu.Component {
    static defaultProps = {};
    static applyWillChange(n, o, r) {
      n.willChangeTransform && (r ? Xu(o) : Yu(o));
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
        Zu(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return e;
})();
var ed = B(ne(), 1);
function Hi() {
  let e = j.current();
  return e === j.canvas || e === j.export;
}
function mL() {
  let [e] = (0, ed.useState)(() => Hi());
  return e;
}
var td = B(ne(), 1),
  nd = td.default.createContext(void 0);
var Gi;
function od() {
  return Gi !== void 0;
}
function xL(e) {
  Gi = e;
}
function rd(e, t) {
  Gi?.(e, t);
}
var fn = B(ne(), 1);
var sd = B(oe(), 1),
  _h = "style[data-framer-css-ssr-minified]",
  Uh = (() => {
    if (!Je()) return new Set();
    let e = document.querySelector(_h)?.getAttribute("data-framer-components");
    return e ? new Set(e.split(" ")) : new Set();
  })(),
  RL = "data-framer-css-ssr";
function id() {
  return fs() ? j.preview : j.current();
}
var ad = (e, t, n) => {
    if (od() && n !== void 0 && !Ze(t)) {
      let o = Array.isArray(t)
        ? t
        : t.split(`
`);
      rd(n, o.filter(Boolean));
    }
    return fn.default.forwardRef((o, r) => {
      let { sheet: i, cache: a } = fn.default.useContext(nd) ?? {},
        s = n;
      if (!Je()) {
        Ze(t) && (t = t(id(), o));
        let l = Array.isArray(t)
          ? t.join(`
`)
          : t;
        Kh.add(l, s);
      }
      return (
        (0, fn.useInsertionEffect)(() => {
          if (s && Uh.has(s)) return;
          (Ze(t)
            ? t(id(), o)
            : Array.isArray(t)
              ? t
              : t.split(`
`)
          ).forEach((u) => u && An(u, i, a));
        }, []),
        (0, sd.jsx)(e, { ...o, ref: r })
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
  Kh = new ji();
var $h, No;
function qh() {
  return ($h ??= import("https://app.framerstatic.com/libraryCSSRules-GQ6M5LSD.mjs").then((e) => {
    if (((No = e.getCombinedCSSRules), Je())) for (let t of No()) An(t, void 0);
    return e;
  }));
}
function Xh() {
  return No ? No() : (Je() && qh(), []);
}
function ld(e) {
  return ad(e, Xh, "framer-lib-combinedCSSRules");
}
function ud(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === "x"
        ? `translateX(-50%) ${n}`
        : e === "y"
          ? `translateY(-50%) ${n}`
          : n || "none";
}
var le = B(ne(), 1);
var _i = B(oe(), 1),
  jt = le.default.createContext({
    getLayoutId: (e) => null,
    persistLayoutIdCache: () => {},
    top: !1,
    enabled: !0,
  });
function LL({ children: e }) {
  if ((0, le.useContext)(jt).top) return e;
  let n = (0, le.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    o = (0, le.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    r = (0, le.useRef)(new Set()),
    i = (0, le.useCallback)(({ id: l, name: u, duplicatedFrom: c }) => {
      if (!l) return null;
      let m = r.current,
        p = u ? "byName" : "byId",
        x = n.current[p][l];
      if (x) return x;
      let h = u || l;
      if (!c && !m.has(h) && (!n.current.byLayoutId[h] || n.current.byLayoutId[h] === h))
        return (
          n.current.count[p][h] === void 0 &&
            ((n.current.count[p][h] = 0), (n.current.byLayoutId[h] = h), (o.current[p][l] = h)),
          m.add(h),
          h
        );
      let V;
      if (c?.length)
        for (let ue = c.length - 1; ue >= 0; ue--) {
          let de = c[ue];
          Vt(!!de, "duplicatedId must be defined");
          let ie = n.current[p][de],
            ke = n.current.byLastId[de];
          if (ke && !V) {
            let Mn = n.current.byLayoutId[ke],
              Le = !Mn || Mn === u;
            ke && !m.has(ke) && (!u || Le) && (V = [ke, de]);
          }
          let zr = ie ? n.current.byLayoutId[ie] : void 0,
            Xa = !zr || zr === u;
          if (ie && !m.has(ie) && (!u || Xa))
            return ((o.current[p][l] = ie), (o.current.byLastId[de] = ie), m.add(ie), ie);
        }
      let P = n.current.byLastId[l];
      if (P && !m.has(P)) return (m.add(P), (o.current.byId[l] = P), P);
      if (V) {
        let [ue, de] = V;
        return ((o.current[p][l] = ue), (o.current.byLastId[de] = ue), m.add(ue), ue);
      }
      let y = n.current.byPossibleId[l];
      if (y && !m.has(y)) return (m.add(y), (o.current.byId[l] = y), y);
      let T = c?.[0],
        S = u || T || l,
        U = (n.current.count[p][S] ?? -1) + 1,
        { layoutId: _, value: Ye } = Yh(S, U, m);
      if (((n.current.count[p][S] = Ye), (o.current[p][l] = _), c?.length && !u)) {
        let ue = c[c.length - 1];
        if ((ue && (o.current.byLastId[ue] = _), c.length > 1))
          for (let de = 0; de < c.length - 1; de++) {
            let ie = c[de];
            ie !== void 0 && (o.current.byPossibleId[ie] || (o.current.byPossibleId[ie] = _));
          }
      }
      return ((o.current.byLayoutId[_] = h), m.add(_), _);
    }, []),
    a = (0, le.useCallback)(() => {
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
        r.current.clear());
    }, []),
    s = (0, le.useRef)({ getLayoutId: i, persistLayoutIdCache: a, top: !0, enabled: !0 }).current;
  return (0, _i.jsx)(jt.Provider, { value: s, children: e });
}
function Yh(e, t, n) {
  let o = t,
    r = o ? `${e}-${o}` : e;
  for (; n.has(r);) (o++, (r = `${e}-${o}`));
  return { layoutId: r, value: o };
}
function wL({ enabled: e = !0, ...t }) {
  let n = (0, le.useContext)(jt),
    o = (0, le.useMemo)(() => ({ ...n, enabled: e }), [e]);
  return (0, _i.jsx)(jt.Provider, { ...t, value: o });
}
var dd = B(ne(), 1),
  mn = dd.default.createContext(!1);
var yn = B(ne(), 1);
var Ui = B(ne(), 1);
function Ki() {
  let [e, t] = Ui.default.useState(0);
  return Ui.default.useCallback(() => t((n) => n + 1), []);
}
var Po = B(ne(), 1),
  vo = typeof document < "u" ? Po.useLayoutEffect : Po.useEffect;
var qi = B(oe(), 1),
  cd = 200,
  $i = class {
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
  Io = Je() ? new $i() : void 0;
function zL(e) {
  let t = Ki();
  (0, yn.useEffect)(() => {
    let n = e?.current;
    if (n)
      return (
        Io?.observeElementWithCallback(e.current, t),
        () => {
          Io?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Jh(e) {
  let t = Ki(),
    n = yn.default.useRef(null);
  function o(r) {
    (r.width === 0 && r.height === 0) ||
      ((!n.current || r.height !== n.current.height || r.width !== n.current.width) &&
        ((n.current = { width: r.width, height: r.height }), t()));
  }
  return (
    vo(() => {
      if (!e.current) return;
      let { offsetWidth: r, offsetHeight: i } = e.current;
      return (
        o({ width: r, height: i }),
        Io.observeElementWithCallback(e.current, o),
        () => {
          e.current && Io.unobserve(e.current);
        }
      );
    }, []),
    n.current
  );
}
var Xi = "data-framer-size-compatibility-wrapper",
  HL = (e) => (t) => {
    let n = yn.default.useRef(null),
      o = Jh(n),
      r = { [Xi]: !0 },
      i = !!o,
      a = t.width ?? cd,
      s = t.height ?? cd;
    return (0, qi.jsx)("div", {
      style: { width: "100%", height: "100%", pointerEvents: "none" },
      ref: n,
      ...r,
      children: i && (0, qi.jsx)(e, { ...t, width: o?.width ?? a, height: o?.height ?? s }),
    });
  };
function pd(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(Xi)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(fd)
    .map(md);
}
function fd(e) {
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
function md(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents")
    return e;
  let t = [...e.children].find(fd);
  return t ? md(t) : e;
}
var yd = B(ne(), 1);
function hn(e) {
  return e.replace(/^id_/u, "").replace(/\\/gu, "");
}
function hd(e, t, n = () => [], o = {}) {
  let { id: r, visible: i, _needsMeasure: a } = e,
    { skipHook: s = !1 } = o,
    l = (0, yd.useContext)(mn),
    u = j.current() === j.canvas;
  vo(() => {
    !u ||
      l ||
      s ||
      (t.current && r && i && a && ae.queueMeasureRequest(hn(r), t.current, n(t.current)));
  });
}
function ZL(e) {
  let t = e.closest("[data-framer-component-container]");
  t && ae.queueMeasureRequest(hn(t.id), t, pd(t));
}
var Ie = B(ne(), 1);
function Zh(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
var Qh =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
  xd = Zh(
    (e) =>
      Qh.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  );
var Fe = B(ne(), 1);
var dt = { borderRadius: "inherit", cornerShape: "inherit" };
var _e = B(oe(), 1),
  Yi = { position: "absolute", ...dt, top: 0, right: 0, bottom: 0, left: 0 };
function ex() {
  return {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "64px auto",
    backgroundImage: ps(ae.imagePlaceholderSvg),
  };
}
function tx(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function gd(e, t) {
  let n = e ?? "center",
    o = t ?? "center";
  return n === "center" && o === "center" ? "center" : n + " " + o;
}
function Ji(e) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    ...dt,
    objectPosition: gd(e.positionX, e.positionY),
    objectFit: tx(e.fit),
  };
}
function nx(e) {
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
function ox({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: o,
  draggable: r,
  avoidAsyncDecoding: i,
}) {
  let a = ae.useImageSource(e, t, n),
    s = Ji(e),
    { decoding: l, onImageLoad: u, onImageMount: c } = nx(i);
  return (0, _e.jsx)("img", {
    suppressHydrationWarning: !0,
    ref: c,
    decoding: l,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: e.srcSet ? e.sizes : void 0,
    srcSet: e.srcSet,
    src: a,
    onLoad: u,
    alt: o ?? e.alt ?? "",
    style: s,
    draggable: r,
  });
}
function rx({ image: e, containerSize: t, nodeId: n }) {
  let o = Fe.default.useRef(null),
    r = ae.useImageElement(e, t, n),
    i = Ji(e);
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
    (0, _e.jsx)("div", { ref: o, style: { display: "contents", ...dt } })
  );
}
function ix({ nodeId: e, image: t, containerSize: n }) {
  let o = Fe.default.useRef(null),
    r = ae.useImageSource(t, n, e);
  return (
    Fe.default.useLayoutEffect(() => {
      let i = o.current;
      if (i === null) return;
      let a = Ji(t);
      ae.renderOptimizedCanvasImage(i, r, a, e);
    }, [e, t, r]),
    (0, _e.jsx)("div", { ref: o, style: { display: "contents", ...dt } })
  );
}
function bd({ layoutId: e, image: t, ...n }) {
  e && (e += "-background");
  let o = null,
    r = !!e,
    i = null;
  if (Q(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let s = Oe(t.backgroundSize) ? t.backgroundSize : 1,
        l = { width: Math.round(s * t.pixelWidth), height: Math.round(s * t.pixelHeight) },
        u = Ds(s * (t.pixelWidth / 2)),
        c = ae.useImageSource(t, l);
      ((o = {
        ...Yi,
        backgroundImage: `url(${c})`,
        backgroundRepeat: "repeat",
        backgroundPosition: gd(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${u}px auto`,
      }),
        (i = null),
        (r = !0));
    } else
      j.current() !== j.canvas
        ? (i = (0, _e.jsx)(ox, { image: t, avoidAsyncDecoding: j.current() === j.export, ...n }))
        : ae.canRenderOptimizedCanvasImage(ae.useImageSource(t))
          ? (i = (0, _e.jsx)(ix, { image: t, ...n }))
          : (i = (0, _e.jsx)(rx, { image: t, ...n }));
  let a = i ? Yi : (o ?? { ...Yi, ...ex() });
  return r
    ? (0, _e.jsx)(Qe.div, {
        layoutId: e,
        style: a,
        "data-framer-background-image-wrapper": !0,
        children: i,
      })
    : (0, _e.jsx)("div", { style: a, "data-framer-background-image-wrapper": !0, children: i });
}
var Zi = B(oe(), 1);
function ax(e, t, n = !0) {
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
function Td(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...dt,
    pointerEvents: "none",
  };
  return e.border
    ? ((n.border = e.border), (0, Zi.jsx)(Qe.div, { style: n }))
    : (ax(e, n, !1), (0, Zi.jsx)(Qe.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Cd(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Vd(e) {
  return e && e !== "search" && e !== "slot" && e !== "template" ? Qe[e] : Qe.div;
}
var sx = os();
function lx(e, t, n) {
  ((e["data-framer-layout-hint-center-x"] = t === !0 || t === "x" ? !0 : void 0),
    (e["data-framer-layout-hint-center-y"] = t === !0 || t === "y" ? !0 : void 0),
    (e["data-framer-layout-hint-x"] = n?.x),
    (e["data-framer-layout-hint-y"] = n?.y));
}
function Sd(e, t) {
  let n = {};
  return (
    j.current() !== j.canvas ||
      lx(n, sx ? e : void 0, {
        x: typeof t?.x == "number" ? t.x : void 0,
        y: typeof t?.y == "number" ? t.y : void 0,
      }),
    n
  );
}
var Do = B(ne(), 1);
function ko(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let { _forwardedOverrides: n } = e;
  return n
    ? ((t = Do.default.Children.map(t, (o) =>
        Do.default.isValidElement(o) ? Do.default.cloneElement(o, { _forwardedOverrides: n }) : o
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
var Lo = B(ne(), 1);
function wo(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: o, layoutIdKey: r, duplicatedFrom: i, __fromCodeComponentNode: a = !1, drag: s } = e,
    { getLayoutId: l, enabled: u } = (0, Lo.useContext)(jt);
  return (0, Lo.useMemo)(() => {
    if (!u) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !r || a)) return;
    let m = c || l({ id: r, name: o, duplicatedFrom: i });
    if (m) return n ? `${m}-${n}` : m;
  }, [u]);
}
function Rd({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == "string" || Oi(t)
      ? (n.backgroundColor = t)
      : b.isColorObject(e) && (n.backgroundColor = e.initialValue || b.toRgbString(e))
    : e &&
      ((e = re.get(e, null)),
      typeof e == "string" || Oi(e)
        ? (n.background = e)
        : Vo.isLinearGradient(e)
          ? (n.background = Vo.toCSS(e))
          : So.isRadialGradient(e)
            ? (n.background = So.toCSS(e))
            : b.isColorObject(e) && (n.backgroundColor = e.initialValue || b.toRgbString(e)));
}
function F(e, t, n, o) {
  if ((o === void 0 && (o = t), e[t] !== void 0)) {
    n[o] = e[t];
    return;
  }
}
function Nd(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function Pd(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function vd(e) {
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
    Rd(e, t),
    t
  );
}
var Ue = B(oe(), 1);
function ux(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof fe(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var Id = [
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
  dx = new Set([...Id, ...Id.map((e) => `${e}Capture`)]);
function cx(e) {
  if (e.drag) return "grab";
  for (let t in e) if (dx.has(t)) return "pointer";
}
var Qi = "overflow";
function px(e) {
  return Dd(e) ? !0 : e.style ? !!Dd(e.style) : !1;
}
function Dd(e) {
  return Qi in e && (e[Qi] === "scroll" || e[Qi] === "auto");
}
function Mo(e) {
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
      positionFixed: p,
      positionAbsolute: x,
    } = e,
    h = Ce(e.minWidth),
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
    positionFixed: p,
    positionAbsolute: x,
    minWidth: h,
    minHeight: V,
    maxWidth: P,
    maxHeight: y,
  };
}
var kd = { x: 0, y: 0, width: 200, height: 200 };
function fx(e) {
  let t = (0, Ie.useContext)(mn),
    { style: n, _initialStyle: o, __fromCanvasComponent: r, size: i } = e,
    a = Mo(e),
    s = Gu(a),
    l = {
      display: "block",
      flex: n?.flex ?? "0 0 auto",
      userSelect: j.current() !== j.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let u = !ux(e) && !e.__fromCanvasComponent && !px(e),
    c = e.style ? !("pointerEvents" in e.style) : !0;
  u && c && (l.pointerEvents = "none");
  let p = Ie.default.Children.count(e.children) > 0 &&
      Ie.default.Children.toArray(e.children).every(
        (y) => typeof y == "string" || typeof y == "number"
      ) && { display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" },
    x = vd(e);
  (i === void 0 && !r && (Nd(x) || (l.width = kd.width), Pd(x) || (l.height = kd.height)),
    a.minWidth !== void 0 && (l.minWidth = a.minWidth),
    a.minHeight !== void 0 && (l.minHeight = a.minHeight));
  let h = {};
  (Wt(a) &&
    s &&
    !Ei(e) &&
    (h = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(l, p, o, x, h, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    Ro.applyWillChange(e, l, !0));
  let V = l;
  l.transform || (V = { x: 0, y: 0, ...l });
  let P = Hi();
  return (
    e.positionSticky
      ? (!P || ae.isOnPageCanvas || t) &&
        ((V.position = "sticky"),
        (V.willChange = "transform"),
        (V.top = e.positionStickyTop),
        (V.right = e.positionStickyRight),
        (V.bottom = e.positionStickyBottom),
        (V.left = e.positionStickyLeft))
      : P &&
        (e.positionFixed
          ? (V.position = ae.isOnPageCanvas ? "fixed" : "absolute")
          : e.positionAbsolute && (V.position = "absolute")),
    "rotate" in V && V.rotate === void 0 && delete V.rotate,
    [V, s]
  );
}
var mx = new Set([
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
function yx(e) {
  let t = {};
  for (let n in e)
    (xs(n) || xd(n)) && !mx.has(n)
      ? (t[n] = fe(e)[n])
      : (n === "positionTransition" || n === "layoutTransition") &&
        ((t.layout = !0),
        typeof fe(e)[n] != "boolean" && !e.transition && (t.transition = fe(e)[n]));
  return t;
}
function hx(e) {
  return "data-framer-name" in e;
}
var xx = (0, Ie.forwardRef)(function (t, n) {
    let { name: o, center: r, border: i, _border: a, __portal: s } = t,
      { props: l, children: u } = ko(t),
      c = yx(l),
      m = wo(t),
      p = cx(t),
      x = (0, Ie.useRef)(null),
      h = n ?? x,
      V = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": p,
        "data-framer-highlight": p === "pointer" ? !0 : void 0,
        "data-layoutid": m,
        "data-framer-offset-parent-id": fe(t)["data-framer-offset-parent-id"],
      };
    !hx(t) && o && (fe(V)["data-framer-name"] = o);
    let [P, y] = fx(l),
      T = Mo(l),
      S = Ei(T),
      U = r && !(y && !S && Wt(T)) ? r : void 0;
    (U
      ? c.transformTemplate || (c.transformTemplate = ud(r))
      : c.transformTemplate || (c.transformTemplate = void 0),
      Object.assign(V, Sd(U, l.style)),
      hd(t, h));
    let _ = ju(t),
      Ye = (0, Ie.useContext)(mn),
      ue = bx(l, T, y, Ye),
      de = To(
        (0, Ue.jsxs)(Ue.Fragment, {
          children: [
            _
              ? (0, Ue.jsx)(bd, {
                  alt: t.alt ?? "",
                  image: _,
                  containerSize: y ?? void 0,
                  nodeId: t.id && hn(t.id),
                  layoutId: m,
                })
              : null,
            u,
            (0, Ue.jsx)(Td, { ...a, border: i, layoutId: m }),
          ],
        }),
        ue
      ),
      ie = Vd(t.as),
      ke = Cd(_);
    return (
      t.fitImageDimension &&
        ke &&
        ((P[t.fitImageDimension] = "auto"), (P.aspectRatio = ke.width / ke.height)),
      (0, Ue.jsxs)(ie, { ...V, ...c, layoutId: m, style: P, ref: h, children: [de, s] })
    );
  }),
  gx = (0, Ie.forwardRef)(function (t, n) {
    let { visible: o = !0 } = t;
    return o ? (0, Ue.jsx)(xx, { ...t, ref: n }) : null;
  }),
  Ld = ld(gx);
function bx(e, t, n, o) {
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
var Tx = ["actionIdentifier", "identifier", "controls"];
function Bo(e) {
  return g(e) && Tx.every((t) => t in e);
}
function lM(e) {
  return g(e) && "gamepadId" in e;
}
function uM(e, t) {
  if (!t.has(e.identifier)) return (t.add(e.identifier), e);
  let n = Ns();
  return (t.add(n), { ...e, identifier: n });
}
var Cx = ["start", "center", "end"];
function mM(e) {
  return f(e) ? Cx.includes(e) : !1;
}
var Vx = ["fixed", "minmax"];
function yM(e) {
  return f(e) ? Vx.includes(e) : !1;
}
var Sx = ["fixed", "auto", "fit"];
function hM(e) {
  return f(e) ? Sx.includes(e) : !1;
}
var Rx = "columnMasonry";
var Nx = ["stack", "grid"],
  xM = {
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
  wd = "horizontal",
  Md = "center",
  Bd = "center",
  Ed = "layout";
function ct(e) {
  return Ed in e;
}
function gM(e) {
  return f(e) ? Nx.includes(e) : !1;
}
var Px = ["start", "end", "center"];
function vx(e) {
  return v(e) ? !1 : E(e) ? !0 : ea(e) && Px.includes(e);
}
function bM(e) {
  return !ct(e) || e.layout !== "stack" || !e.stackDistribution ? !1 : vx(e.stackDistribution);
}
function Ad(e) {
  return ct(e) && !v(e.layout);
}
function TM(e) {
  return Ad(e) && e.layout === "stack";
}
function Ix(e) {
  return Ad(e) && e.layout === "grid";
}
function CM(e) {
  return Ix(e) && e.gridType === Rx;
}
function VM(e) {
  return Ed in e;
}
function Dx(e) {
  if (Fd(e)) return e;
  if (f(e))
    switch (e) {
      case "row":
        return "horizontal";
      case "column":
        return "vertical";
      default:
        return;
    }
}
var Eo = ["horizontal", "vertical"];
function Fd(e) {
  return f(e) && Eo.includes(e);
}
function SM(e) {
  if (!Fd(e)) return e;
  switch (e) {
    case "horizontal":
      return "row";
    case "vertical":
      return "column";
    default:
      W(e);
  }
}
var kx = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];
function Lx(e) {
  return f(e) && kx.includes(e);
}
var Ao = ["start", "center", "end", "space-between", "space-around", "space-evenly"];
function ea(e) {
  return f(e) && Ao.includes(e);
}
function Fo(e) {
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
function wx(e) {
  if (ea(e)) return e;
  if (Lx(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
var Mx = ["flex-start", "flex-end", "center"];
function Od(e) {
  return f(e) && Mx.includes(e);
}
var Oo = ["start", "center", "end"];
function Wd(e) {
  return f(e) ? Oo.includes(e) : !1;
}
function Bx(e) {
  if (Wd(e)) return e;
  if (Od(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
function zd(e) {
  if (Od(e) || !Wd(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function RM(e, t) {
  switch (e) {
    case "stackDirection":
      return Dx(t);
    case "stackDistribution":
      return wx(t);
    case "stackAlignment":
      return Bx(t);
    default:
      return t;
  }
}
function NM(e) {
  return !e || !ct(e) ? null : (e.layout ?? null);
}
var Ex = ["sticky", "fixed", "absolute"],
  Ax = new Set(Ex);
function IM(e) {
  return f(e) && Ax.has(e);
}
var DM = {
    position: void 0,
    positionStickyTop: void 0,
    positionStickyRight: void 0,
    positionStickyBottom: void 0,
    positionStickyLeft: void 0,
  },
  Fx = "position";
function xn(e) {
  return !e || e.__unsafeIsSlotPropertyChildNode() ? !1 : Fx in e;
}
var BM = {
    carouselEffectEnabled: void 0,
    carouselEffectLoop: void 0,
    carouselEffectAutoPlay: void 0,
    carouselEffectInterval: void 0,
    carouselEffectSnap: void 0,
    carouselEffectTransition: void 0,
  },
  EM = {
    carouselEffectEnabled: !0,
    carouselEffectLoop: !0,
    carouselEffectAutoPlay: !1,
    carouselEffectInterval: 1.5,
    carouselEffectSnap: !0,
    carouselEffectTransition: void 0,
  },
  AM = { ...rt, stiffness: 200, damping: 40 },
  Ox = "carouselEffectEnabled";
function Wx(e) {
  return Ox in e;
}
function ta(e) {
  return zx(e) && e.carouselEffectEnabled === !0;
}
function na(e) {
  return xn(e) && e.position !== void 0 && e.cache.carouselAncestorId === e.parentid;
}
function zx(e) {
  return !(
    !Wx(e) ||
    !ct(e) ||
    e.layout !== "stack" ||
    Hx(e) ||
    e.stackWrapEnabled ||
    ("tickerEffectEnabled" in e && e.tickerEffectEnabled === !0)
  );
}
function Hx(e) {
  return !!e.cache.carouselAncestorId;
}
function FM(e) {
  return !!(e.cache.carouselAncestorId && e.parentid === e.cache.carouselAncestorId && !na(e));
}
var oa = ["default", "reverse"],
  HM = {
    tickerEffectEnabled: void 0,
    tickerEffectVelocity: void 0,
    tickerEffectHoverModifier: void 0,
    tickerEffectDirectionModifier: void 0,
    tickerEffectDraggable: void 0,
  },
  GM = {
    tickerEffectEnabled: !0,
    tickerEffectVelocity: 100,
    tickerEffectHoverModifier: 100,
    tickerEffectDirectionModifier: "default",
    tickerEffectDraggable: !1,
  },
  Gx = "tickerEffectEnabled";
function jx(e) {
  return Gx in e;
}
function jM(e) {
  return _x(e) && e.tickerEffectEnabled === !0;
}
function _x(e) {
  return !(
    !jx(e) ||
    !ct(e) ||
    e.layout !== "stack" ||
    Ux(e) ||
    e.stackWrapEnabled ||
    ("carouselEffectEnabled" in e && e.carouselEffectEnabled === !0)
  );
}
function Ux(e) {
  return !!e.cache.tickerAncestorId;
}
function _M(e) {
  return !!(e.cache.tickerAncestorId && e.parentid === e.cache.tickerAncestorId);
}
function UM(e) {
  return e === "default" || e === "reverse";
}
function Hd(e) {
  switch (e) {
    case "default":
      return "Default";
    case "reverse":
      return "Reverse";
  }
}
var Kx = "usesDOMRect";
function Gd(e) {
  return Kx in e;
}
var $x = ["start", "center", "end"],
  Wo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  ra = [...Wo, "all"];
function jd(e) {
  return R(e) ? `Span ${e}` : "Span all";
}
var _d = Wo.map(jd),
  Ud = ra.map(jd);
function XM(e) {
  return e === "all" ? !0 : R(e) && e > 0;
}
function YM(e) {
  return R(e) && e > 0;
}
function JM(e) {
  return f(e) ? $x.includes(e) : !1;
}
var ZM = {
    gridItemHorizontalAlignment: void 0,
    gridItemVerticalAlignment: void 0,
    gridItemColumnSpan: void 0,
    gridItemRowSpan: void 0,
  },
  qx = "gridItemHorizontalAlignment";
function QM(e) {
  return qx in e;
}
var nB = { width: 100, height: 100 },
  oB = { width: 1, height: 1 },
  Xx = "width";
function Kd(e) {
  return $n(e) ? !1 : Xx in e;
}
var qd = [
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
  Yx = new RegExp(`^([+-]?(?:\\d*\\.)?\\d+(?:e[+-]?\\d+)?)(${qd.join("|")})?$`, "i"),
  Jx = new Map(qd.map((e) => [e.toLowerCase(), e]));
function _t(e, t) {
  let n = e.match(Yx);
  if (!n) return [NaN, void 0];
  let [, o, r] = n,
    i = parseFloat(o);
  if (Number.isNaN(i)) return [NaN, void 0];
  if (!r) return [i, t];
  let a = Jx.get(r.toLowerCase());
  if (!a) throw Error(`unrecognized CSS unit ${r}`);
  return [i, a];
}
function aB(e) {
  if (!f(e)) return !1;
  let [t] = _t(e);
  return !Number.isNaN(t);
}
function $d(e, t) {
  return `${e}${t}`;
}
function sB(e, { parentSize: t, viewportSize: n }) {
  if (v(e)) return;
  if (R(e)) return e;
  let [o, r] = _t(e);
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
function lB(e) {
  if (!f(e)) return [void 0, void 0, void 0, void 0];
  let t = e.split(" ");
  if (t.length === 1) {
    let [n] = _t(t[0]),
      o = $d(n, "px");
    return [o, o, o, o];
  }
  return t.length !== 4
    ? [void 0, void 0, void 0, void 0]
    : t.map((n) => {
        let [o] = _t(n);
        return $d(o, "px");
      });
}
var Zx = /(?<value>\d{1,5})px/gu;
function uB(e, t) {
  return e.replace(Zx, (n, o) => `${t(Number(o))}px`);
}
function mB(e, t) {
  let n = ia(e, t);
  return !Ve(n);
}
function ia(e, t) {
  let n = Qx(e, t);
  return n && at(n) ? n : null;
}
function Qx(e, t, n = !0) {
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
function yB(e, t) {
  return t.parentid && at(e.get(t.parentid));
}
var CB = { repeatArray: void 0, repeatArrayTransforms: void 0 },
  eg = "repeatArray";
function Xd(e) {
  return !(!e || !(eg in e) || he(e) || Ee(e));
}
function Ut(e) {
  return !!e && Xd(e) && !!e.repeatArray;
}
function tg(e, t) {
  return e.getNodeWithTrait(t.getPrimaryId(), Xd)?.repeatArray;
}
function VB(e, t) {
  let n = tg(e, t);
  if (n) return Sl("array", n, t.repeatArrayTransforms ?? []);
}
var aa = "element",
  Yd = "collection",
  Jd = "collectionItemId",
  Zd = "pathVariables",
  sa = "framer/page-link,";
function zo(e) {
  return Q(e) && e.startsWith(`data:${sa}`);
}
function NB(e = null, t = {}) {
  let n = e || "none",
    o = new URL(`data:${sa}${n}`);
  return (
    t.element && o.searchParams.append(aa, t.element),
    t.collectionItem &&
      (o.searchParams.append(Yd, t.collectionItem.collection),
      o.searchParams.append(Jd, t.collectionItem.collectionItemId),
      o.searchParams.append(Zd, new URLSearchParams(t.collectionItem.pathVariables).toString())),
    o.href
  );
}
function la(e) {
  if (zo(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(sa.length),
        o = t.searchParams,
        r = o.has(aa) ? o.get(aa) : void 0,
        i,
        a = o.get(Yd),
        s = o.get(Jd),
        l = o.get(Zd);
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
function PB(e) {
  return !zo(e);
}
function vB(e, t, n) {
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
function ng(e, t = 0) {
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
function og(e, t) {
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
  let t = ng(e);
  return og(e, t);
}
var Qd = "--token-";
function rg(e) {
  return e ? e.slice(Qd.length) : null;
}
function ig(e) {
  let { customProperty: t } = ua(e);
  return rg(t);
}
function da(e) {
  return typeof e != "string" ? !1 : e.trim().startsWith(`var(${Qd}`);
}
function LB(e) {
  let { customProperty: t, fallback: n } = ua(e);
  if (t && n) return `var(${t}, ${n})`;
  if (t) return `var(${t})`;
}
function wB(e, t) {
  if (!da(e)) return;
  let n = ig(e);
  if (n) return t[n];
}
function AB(e) {
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
function FB(e) {
  return e > 0 ? "any" : "__legacy";
}
function OB(e) {
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
function WB(e) {
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
function zB(e) {
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
function HB(e) {
  let t = e.framerContractVersion;
  if (!t) return 0;
  let n = parseInt(t, 10);
  return !Number.isFinite(n) || n < 0 ? 0 : n;
}
function GB(e, t) {
  return e?.[t] !== void 0;
}
var ag = "getBreakpointValues";
function UB(e) {
  return e ? ag in e : !1;
}
var sg = "min",
  lg = "max",
  ug = "canvasClassName";
function dg(e) {
  return g(e)
    ? sg in e
      ? R(e.min)
      : lg in e
        ? R(e.max)
        : ug in e
          ? f(e.canvasClassName)
          : !1
    : !1;
}
function ec(e) {
  if (!g(e)) return !1;
  for (let t in e) {
    let n = e[t];
    if (dg(n)) return !0;
  }
  return !1;
}
function Go(e, t) {
  if (!v(e))
    for (let n in e) {
      let o = e[n],
        r = o?.min ?? 0,
        i = o?.max ?? 1 / 0;
      if (t >= r && t <= i) return n;
    }
}
var QB = { layoutTemplateIdentifierOverride: void 0 },
  pg = "layoutTemplateIdentifier";
function tc(e) {
  return e ? pg in e : !1;
}
function nc(e, t) {
  if (!t || !at(t)) return;
  let n = e.getScopeNodeFor(t);
  if (tc(n)) return n.layoutTemplateIdentifier;
}
function eE(e) {
  return !!(tc(e) && e.layoutTemplateIdentifier);
}
function oc(e) {
  return !e || !Gd(e) ? !1 : !!e.usesLayoutTemplateRectForModuleIdentifierCached();
}
function fg(e, t) {
  let n = e.framerDefaultVariant,
    o = e.framerBreakpoints;
  if (!o) return n;
  let r = JSON.parse(o);
  return Go(r, t) ?? n;
}
function tE(e, t, n) {
  let o = t.componentForIdentifier(e)?.annotations;
  if (o) return fg(o, n);
}
var jo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  De = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
function rc(e) {
  let t = Ss(e),
    n = jo.charAt(t % jo.length);
  for (t = Math.floor(t / jo.length); t > 0;)
    ((n += De.charAt(t % De.length)), (t = Math.floor(t / De.length)));
  return n;
}
function ge() {
  return Ke(jo) + Ke(De) + Ke(De) + Ke(De) + Ke(De) + Ke(De) + Ke(De) + Ke(De) + Ke(De);
}
function Ke(e) {
  return e.charAt(Math.floor(Math.random() * e.length));
}
var tt = {
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
  mg = ["blockStyles", "backgroundMask", "textStylePreset"],
  yg = ["header", "cell"];
function sE(e) {
  return f(e) && yg.some((t) => e === t);
}
var hg = {
    textBlock: !0,
    numberedList: !0,
    bulletedList: !0,
    blockquote: !0,
    media: !0,
    module: !0,
    table: !0,
  },
  xg = ["inlineStyles", "backgroundStyles", "inlineCodeStylePreset", "linkStylePreset"],
  lE = ["openInNewTab", "smoothScroll", "clickTrackingId", "relValues", "preserveParams"];
function ic(e) {
  return f(e) && e in tt;
}
function gg(e) {
  return ic(e) && e.endsWith("Localized");
}
function uE(e) {
  return gg(e) ? e : `${e}Localized`;
}
var bg = {
  collectionControlPropLocalized: "collectionControlProp",
  controlPropLocalized: "controlProp",
  richTextNodeLocalized: "richTextNode",
};
function Tg(e) {
  return bg[e];
}
function dE(e) {
  return { ...e, variant: Tg(e.variant), childNodes: e.childNodes };
}
function cE(e) {
  return gn(e) && tt[e.variant].styles;
}
function pE(e) {
  return gn(e) && !tt[e.variant].styles;
}
function fE(e) {
  return xg.some((t) => t in e);
}
function mE(e) {
  return mg.some((t) => t in e);
}
function yE(e) {
  return gn(e) && !e.variant.endsWith("Localized");
}
function pt(e, t) {
  return tt[e][t];
}
function gn(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "type" in e &&
    e.type === "richText" &&
    "variant" in e &&
    ic(e.variant) &&
    "childNodes" in e &&
    Array.isArray(e.childNodes)
  );
}
function Cg(e) {
  return Ts(e, "type") && f(e.type) && hg[e.type] === !0;
}
function Se(e, t) {
  if (!Cg(e)) return !1;
  switch (e.type) {
    case "textBlock":
      return !0;
    case "table":
      return tt[t].tables;
    case "module":
      return tt[t].embeds;
    case "media":
      return tt[t].media;
    case "blockquote":
      return tt[t].blockquotes;
    case "numberedList":
    case "bulletedList":
      return e.childNodes.every((n) => n.childNodes.every((o) => Se(o, t)));
  }
  W(e);
}
function ac(e) {
  let t = {};
  for (let n in e) {
    let o = e[n];
    v(o) || (t[n] = o);
  }
  return t;
}
function PE(e) {
  for (let t in e) {
    let n = e[t];
    if (n) return n;
  }
}
var pa = "webPage",
  Vg = "webPageId",
  fa = "url",
  Sg = "url";
function ft(e) {
  return g(e) && "type" in e && (e.type === pa || e.type === fa);
}
function ca(e) {
  return ft(e) && e.type === fa;
}
function Kt(e) {
  return ft(e) && e.type === pa;
}
function Rg(e) {
  if (Sg in e) return fa;
  if (Vg in e) return pa;
  throw new Error("Link: Cannot infer Link type from link provided without a type.");
}
function sc(e) {
  return { ...ac(e), type: Rg(e) };
}
function Ng(e) {
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
function _o(e) {
  if (E(e) || ft(e)) return e;
  if (zo(e)) {
    let t = la(e);
    if (!t?.target) return;
    let n = t.collectionItem,
      o = t.element === "none" ? void 0 : t.element;
    return sc({ webPageId: t.target, hash: o || void 0, pathVariables: Ng(n) });
  }
  if (!(!f(e) || !e)) return sc({ url: e });
}
function Pg(e, t) {
  if (e === t) return !0;
  try {
    return new URL(e).href === new URL(t).href;
  } catch {
    return !1;
  }
}
function vE(e, t, n) {
  return ca(e) && ca(t)
    ? Pg(e.url, t.url)
    : !Kt(e) || !Kt(t) || e.webPageId !== t.webPageId
      ? !1
      : n?.ignoreHash
        ? ce(e.pathVariables, t.pathVariables)
        : e.hash !== t.hash
          ? !1
          : ce(e.pathVariables, t.pathVariables) && ce(e.hashVariables, t.hashVariables);
}
function IE(e) {
  if (!Kt(e)) return (ca(e) || void 0, !1);
  if (e.pathVariables) {
    for (let t in e.pathVariables) if (M(e.pathVariables[t])) return !0;
  }
  if (e.hashVariables) {
    for (let t in e.hashVariables) if (M(e.hashVariables[t])) return !0;
  }
  return !1;
}
function DE(e, t) {
  return Kt(e) && !t?.has(e.webPageId);
}
var lc = ["nofollow", "noreferrer", "me", "ugc", "sponsored"];
var vg = lc,
  Ig = new Set(vg),
  ma = (e) => Ig.has(e),
  uc = (e) => (G(e) ? e.every(ma) : !1);
function dc(e) {
  let t = "hasProp";
  return !!e && typeof e == "object" && t in e && typeof e[t] == "function";
}
var cc = Symbol("localizedOptionTitles");
function bn(e, t) {
  e[cc] = t;
}
function pc(e) {
  return e[cc] ?? null;
}
function ya(e, t, n) {
  if (e === void 0) return t.push("u");
  if (e === null) return t.push("n");
  let o = typeof e;
  if (o === "string") return t.push(JSON.stringify(e));
  if (o !== "object") return t.push(String(e));
  if (Array.isArray(e)) {
    for (let i = 0; i < e.length; i++) (ya(e[i], t, n), t.push(","));
    return;
  }
  let r = dc(e) ? e.keys() : Object.keys(e);
  r.sort();
  for (let i of r) {
    let a = e[i];
    (n && ((a = n(i, a, e)), a === void 0)) || (t.push(i), t.push(":"), ya(a, t, n), t.push(","));
  }
}
function fc(e, t) {
  let n = [];
  return (ya(e, n, t), n.join(""));
}
var Dg = 1;
function HE(e) {
  return bs("sharedEnum", e, "default").value;
}
function mc(e) {
  let t = ve(e);
  if (!(!Rt(t) || t.type !== "sharedEnum")) return t.localIdName;
}
function kg(e) {
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
function GE(e) {
  return fc({ version: Dg, definition: kg(e) });
}
var ha = Symbol("fromOtherProject");
function YE(e) {
  let t = { ...e.properties },
    n = !1;
  for (let [o, r] of Object.entries(t))
    !g(r) || r.type !== "sharedtype" || ((t[o] = { ...r, [ha]: !0 }), (n = !0));
  return n ? { ...e, properties: t } : e;
}
function xa(e) {
  return ha in e && e[ha] === !0;
}
function JE(e) {
  return e?.type === "sharedtype" && "kind" in e && e.kind === "enum";
}
function xc(e, t) {
  let n = mc(t);
  if (!n) return;
  let o = e.get(n);
  return Ks(o) ? o : void 0;
}
var yc = new WeakMap();
function Lg(e, t) {
  if (t?.type === "enum") return t;
  if (t?.type !== "sharedtype") return;
  if (t.kind !== "enum") {
    t.kind;
    return;
  }
  if (xa(t)) return;
  let n = xc(e, t.moduleIdentifier);
  if (!n) return;
  if (n.mutable) return hc(t, n);
  let o = yc.get(n);
  o || ((o = new WeakMap()), yc.set(n, o));
  let r = o.get(t);
  return (r || ((r = hc(t, n)), o.set(t, r)), r);
}
function ZE(e, t) {
  return t?.type !== "sharedtype" || !e ? t : (Lg(e, t) ?? t);
}
function hc(e, t) {
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
      bn(
        o,
        t.cases.map((r) => r.nameLocalized)
      ),
    o
  );
}
function QE(e, t) {
  return wg(t, xc(e, t.moduleIdentifier));
}
function wg(e, t) {
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
function bc(e) {
  return { collectionRepeatedItemId: e, repeatedItemId: e };
}
function Tc(e, t) {
  let n = t?.getPrimaryId();
  if (((t = e.get(n)), !Ee(t))) return null;
  if (t.repeatedItemId !== void 0) return gc(e, t, t.repeatedItemId);
  let o = gc(e, t, t.collectionRepeatedItemId);
  return o || Vc(t);
}
function oA(e, t) {
  let n = t.cache.repeatedAncestorRepeaterIds;
  if (n !== null) return n;
  let o = Mg(e, t);
  return ((t.cache.repeatedAncestorRepeaterIds = o), o);
}
function Mg(e, t) {
  let n = [],
    o = t,
    r = e.getParent(t.id);
  for (; r;) {
    if (Ut(r)) n.push(r.id);
    else if (Ee(r)) {
      let i = Tc(e, r);
      i && o.getPrimaryId() === i.id && n.push(r.id);
    }
    if (((o = r), (r = e.getParent(r.id)), r && e.isGroundNode(r))) break;
  }
  return (n.reverse(), n);
}
function rA(e, t) {
  let n = t;
  for (let o of t.ancestors()) {
    if (Ee(o)) return { repeater: o, inRepeatedChild: $t(e, n, o) };
    n = o;
  }
}
function iA(e) {
  for (let t of e.ancestors()) if (Ee(t)) return t;
}
function Cc(e, t) {
  return e.getNodeWithTrait(t.parentid, Ee) ?? void 0;
}
function aA(e, t) {
  return e.getNodeWithTrait(t.parentid, Xr) ?? void 0;
}
function Bg(e, t) {
  if (!t) return null;
  let n = Tc(e, t);
  return n ? (t.originalid ? t.children?.find((r) => r.originalid === n.id) : n) : null;
}
function $t(e, t, n) {
  return ((n ??= Cc(e, t)), Bg(e, n)?.id === t.id);
}
function sA(e, t) {
  return $t(e, t) || Ut(t);
}
function lA(e, t, n) {
  return !!n && Ee(e) && !$t(t, n, e);
}
function uA(e) {
  let t = e.children?.at(0);
  e.set(bc(t?.id));
}
function dA(e, t) {
  let n = new Map();
  for (let o of t) {
    let r = Eg(e, o);
    r && n.set(r.repeaterId, r);
  }
  return [...n.values()];
}
function Eg(e, t) {
  let n = Cc(e, t);
  if (!n || !$t(e, t, n)) return null;
  let o = t.getPrimaryId();
  return {
    repeaterId: n.getPrimaryId(),
    disableFallback: n.repeatedItemId !== void 0,
    repeatedItemId: o,
    repeatedItemChildIds: t.children?.map((r) => r.getPrimaryId()) ?? [],
  };
}
function cA(e, t, n) {
  for (let o of t) {
    let r = e.get(o.repeaterId);
    if (!Ee(r)) continue;
    let i = Ag(e, r, o, n);
    (i === r.repeatedItemId && i === r.collectionRepeatedItemId) || r.set(bc(i));
  }
}
function Ag(e, t, n, o) {
  let r = new Set(),
    i = o?.get(n.repeatedItemId);
  (i && r.add(i), r.add(n.repeatedItemId));
  for (let a of n.repeatedItemChildIds) r.add(a);
  for (let a of r) {
    let s = Fg(e, t, a);
    if (s) return s.id;
  }
  if (!n.disableFallback) return Vc(t)?.id;
}
function Fg(e, t, n) {
  let o = e.get(n);
  for (; o;) {
    if (o.parentid === t.id) return Ut(o) ? null : o;
    if (!o.parentid) return null;
    o = e.get(o.parentid);
  }
  return null;
}
function gc(e, t, n) {
  let o = e.get(n);
  return !o || Ut(o) || o.parentid !== t.id ? null : o;
}
function Vc(e) {
  let t = e.children.at(0);
  return !t || Ut(t) ? null : t;
}
var Og = bt("RichTextNode"),
  Sc = new Set();
function gA(e, t) {
  if (mt(t)) return t;
  if (!Sc.has(e)) {
    Sc.add(e);
    let n = g(t) && t.constructor === Object ? "plain object" : typeof t;
    Og.reportError(`RichTextNode ${e} has invalid stored html (${n})`);
  }
  return "";
}
function mt(e) {
  return typeof e == "string" || gn(e);
}
function bA(e, t) {
  C(
    typeof e == "string",
    `${t}: Rich text value is stored as JSON here, but this path still expects HTML.`
  );
}
function Rc(e, t = (n, o) => n === o) {
  let n = cn;
  for (let o of e)
    if (uo(n)) n = o;
    else if (!t(o, n)) return Zt;
  return n;
}
function SA(e, t) {
  let n = e[0];
  if (n === void 0) return cn;
  let o = n[t];
  for (let [r, i] of e.entries()) {
    if (r === 0) continue;
    let a = i[t];
    if (o !== a) return Zt;
  }
  return o;
}
function RA(...e) {
  return e.find(Vi);
}
var Pc = "borderColor";
function kA(e) {
  return {
    borderWidth: e.borderPerSide
      ? { top: e.borderTop, right: e.borderRight, bottom: e.borderBottom, left: e.borderLeft }
      : e.borderWidth,
    borderColor: e.borderColor,
    borderStyle: e.borderStyle,
  };
}
function Cn(e) {
  if (!g(e)) return !1;
  let t = "borderWidth",
    n = "borderStyle",
    o = "borderPerSide",
    r = "borderTop",
    i = "borderRight",
    a = "borderBottom",
    s = "borderLeft";
  return !(
    !f(e[Pc]) ||
    !f(e[n]) ||
    !te(e[t]) ||
    !ee(e[o]) ||
    !te(e[r]) ||
    !te(e[i]) ||
    !te(e[s]) ||
    !te(e[a])
  );
}
var Wg = { solid: !0, dashed: !0, dotted: !0, double: !0 };
function LA(e) {
  return f(e) && Object.hasOwn(Wg, e);
}
var nt = {
  borderColor: "black",
  borderStyle: "solid",
  borderPerSide: !1,
  borderBottom: 1,
  borderLeft: 1,
  borderRight: 1,
  borderTop: 1,
  borderWidth: 1,
};
function vc(e) {
  if (!Cn(e)) return e;
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
function wA(e) {
  let t = { ...nt };
  return (
    te(e.borderTop) && (t.borderTop = e.borderTop),
    te(e.borderRight) && (t.borderRight = e.borderRight),
    te(e.borderBottom) && (t.borderBottom = e.borderBottom),
    te(e.borderLeft) && (t.borderLeft = e.borderLeft),
    te(e.borderWidth) && (t.borderWidth = e.borderWidth),
    f(e.borderColor) && (t.borderColor = e.borderColor),
    f(e.borderStyle) && (t.borderStyle = e.borderStyle),
    ee(e.borderPerSide) && (t.borderPerSide = e.borderPerSide),
    t
  );
}
function MA(e) {
  let t = { ...nt };
  return (
    te(e.borderTop) && (t.borderTop = e.borderTop),
    te(e.borderRight) && (t.borderRight = e.borderRight),
    te(e.borderBottom) && (t.borderBottom = e.borderBottom),
    te(e.borderLeft) && (t.borderLeft = e.borderLeft),
    te(e.borderWidth) && (t.borderWidth = e.borderWidth),
    f(e.borderColor) && (t.borderColor = e.borderColor),
    f(e.borderStyle) && (t.borderStyle = e.borderStyle),
    ee(e.borderPerSide) && (t.borderPerSide = e.borderPerSide),
    t
  );
}
function BA(e) {
  if (!e) return nt;
  let t = 0,
    n = e.borderTopWidth ?? e.borderWidth ?? t,
    o = e.borderRightWidth ?? e.borderWidth ?? t,
    r = e.borderBottomWidth ?? e.borderWidth ?? t,
    i = e.borderLeftWidth ?? e.borderWidth ?? t,
    a = e.borderWidth ?? nt.borderWidth,
    s = St(Rc([n, o, r, i, a])),
    l = e.borderStyle ?? nt.borderStyle,
    u = e.borderColor ?? nt.borderColor;
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
function Nc(e) {
  return f(e) || v(e);
}
function Tn(e) {
  return te(e) || v(e);
}
function EA(e) {
  if (!g(e)) return !1;
  let t = "borderWidth",
    n = "borderStyle",
    o = "borderTopWidth",
    r = "borderRightWidth",
    i = "borderBottomWidth",
    a = "borderLeftWidth";
  return !(
    !Nc(e[Pc]) ||
    !Nc(e[n]) ||
    !Tn(e[o]) ||
    !Tn(e[r]) ||
    !Tn(e[a]) ||
    !Tn(e[i]) ||
    !Tn(e[t])
  );
}
function Ic(e, t) {
  for (let n in e) if (e[n] === t) return !0;
  return !1;
}
function Dc(e) {
  return Ic(O, e);
}
function zA(e) {
  return e === "image" || e === "responsiveimage";
}
var zg = bt("RawControlProp"),
  kc = "type";
function $e(e) {
  if (!g(e) || !(kc in e)) return !1;
  let t = e[kc];
  return t === null
    ? (zg.reportErrorOnceEveryTenMinutes(new Error("Encountered raw control prop with null type"), {
        value: e,
      }),
      !0)
    : Dc(t);
}
function UA(e) {
  return g(e) ? Object.values(e).every((t) => t === void 0 || $e(t)) : !1;
}
var Hg = [
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
  Gg = new Set(Hg);
function Lc(e) {
  return f(e) && Gg.has(e);
}
var XA = "--framer-custom-cursors";
var jg = "customCursorSmartComponentId";
function YA(e) {
  return g(e) && jg in e;
}
var _g = {
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
  JA = { ..._g, cursor: void 0, customCursorType: void 0 },
  ZA = "default",
  Ug = "cursor";
function wc(e) {
  return Ug in e;
}
function QA(e) {
  if (wc(e))
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
var eF = 20;
function Kg(e) {
  return f(e.customCursorSmartComponentId);
}
function tF(e, t) {
  return !t || !wc(t) || t.customCursorType !== "component" || !Kg(t)
    ? !1
    : It(e.get(t.customCursorSmartComponentId));
}
var $g = "single",
  qg = "fused";
function aF(e) {
  return { single: e, fused: [e, e, e, e] };
}
function Vn(e) {
  if (!g(e) || !R(e[$g])) return !1;
  let t = e[qg];
  return G(t) && t.length === 4 && t.every(R);
}
function sF(e) {
  return $e(e) && e.type === "fusednumber" && Vn(e.value);
}
var Xg = "isFused";
function Mc(e) {
  return g(e) && ee(e[Xg]);
}
var Yg = "id";
function Jg(e) {
  return Yg in e;
}
var Zg = "value";
function Qg(e) {
  return g(e) && Jg(e) && Zg in e;
}
function vF(e) {
  return e.type === "array" && Ec(e.value);
}
function IF(e) {
  return e.type === "object" && (g(e.value) || Ve(e.value));
}
function Bc(e) {
  return e.type !== "fusednumber" || !Mc(e) ? !1 : Vn(e.value);
}
function qt(e) {
  return X(e) && e.endsWith("px") && R(Number.parseFloat(e));
}
function eb(e) {
  if (!X(e)) return !1;
  let [t, n] = _t(e);
  return !Number.isNaN(t) && n === "%";
}
function DF(e) {
  return g(e) && e.type === "image";
}
var tb = { string: !0, richtext: !0, image: !0, link: !0 };
function kF(e) {
  return e ? e.type in tb : !1;
}
function Uo(e) {
  return g(e) && R(e.latitude) && R(e.longitude);
}
function LF(e) {
  return !(
    !g(e) ||
    !Uo(e.coordinate) ||
    (e.title !== void 0 && !X(e.title)) ||
    (e.address !== void 0 && !X(e.address))
  );
}
function wF(e) {
  return ye(e) || Ec(e);
}
function Ec(e) {
  return G(e) && e.every(Qg);
}
function MF(e) {
  return E(e) || ee(e);
}
function BF(e) {
  return E(e) || X(e);
}
function EF(e) {
  return E(e) || X(e) || v(e);
}
function AF(e) {
  return X(e) || M(e);
}
function FF(e) {
  return E(e) || X(e) || ee(e) || R(e) || v(e) || Ve(e);
}
function OF(e) {
  return E(e) || G(e);
}
function WF(e) {
  return G(e) && e.every(Bo);
}
function zF(e) {
  return E(e) || X(e) || v(e);
}
function HF(e) {
  return M(e) || uc(e);
}
function GF(e) {
  return M(e) || typeof e == "boolean" || (typeof e == "number" && Number.isFinite(e));
}
function jF(e) {
  return E(e) || R(e);
}
function _F(e) {
  return g(e);
}
function UF(e) {
  return E(e) || mt(e);
}
function KF(e) {
  return E(e) || X(e);
}
function $F(e) {
  return E(e) || X(e) || v(e);
}
function qF(e) {
  return Kt(e) || v(e);
}
function XF(e) {
  return g(e) || v(e);
}
function YF(e) {
  return g(e) || v(e);
}
function JF(e) {
  return M(e) || Cn(e);
}
function ZF(e) {
  return M(e) || Lc(e);
}
function QF(e) {
  if (E(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? qt(t[0]) : t.length === 2 && t.every(qt);
}
function e0(e) {
  if (E(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? qt(t[0]) : t.length === 4 && t.every(qt);
}
function t0(e) {
  if (E(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? qt(t[0]) || eb(t[0]) : t.length === 4 && t.every(qt);
}
function n0(e) {
  return M(e) || X(e) || v(e);
}
function o0(e) {
  return E(e) || (G(e) && e.every(X)) || v(e);
}
function r0(e) {
  return (X(e) && Pe(e)) || M(e) || v(e);
}
function i0(e) {
  return M(e) || X(e) || v(e);
}
function a0(e) {
  return G(e);
}
function s0(e) {
  return Uo(e) || M(e) || v(e);
}
function m0(e, t) {
  return e === t ? !0 : e.variant !== t.variant ? !1 : Ko(e.variant, e.childNodes, t.childNodes);
}
function Ko(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!zc(e, t[o], n[o])) return !1;
  return !0;
}
var z = (e, t, n) => Object.is(t, n),
  Sn = (e, t, n) => ce(t, n),
  Ac = (e, t, n) => ga(t, n),
  Fc = { type: z, tag: z, textDirection: z, childNodes: fb },
  nb = { ...Fc, blockStyles: Sn, backgroundMask: Sn, textStylePreset: z },
  Oc = { type: z, textDirection: z },
  ob = { ...Oc, childNodes: Hc },
  Wc = { type: z, textDirection: z, listStyleType: z, start: z },
  rb = { ...Wc, childNodes: Hc },
  ib = { type: z, childNodes: Ko },
  ab = { type: z, mediaType: z, src: z, alt: z, pixelWidth: z, pixelHeight: z, link: Ac },
  sb = { type: z, identifier: z, embedId: z, props: Sn, width: z, alignment: z },
  lb = { type: z, childNodes: db };
function y0(e, t) {
  return e.id !== void 0 && e.id === t.id && e.variant === t.variant;
}
function h0(e, t, n) {
  return t === n || zc(e, t, n);
}
function zc(e, t, n) {
  if (t.type !== n.type) return !1;
  switch (t.type) {
    case "textBlock":
      return (C(n.type === "textBlock"), pt(e, "styles") ? Re(e, t, n, nb) : Re(e, t, n, Fc));
    case "bulletedList":
      return (C(n.type === "bulletedList"), Re(e, t, n, ob));
    case "numberedList":
      return (C(n.type === "numberedList"), Re(e, t, n, rb));
    case "blockquote":
      return (
        C(n.type === "blockquote"),
        C(pt(e, "blockquotes"), "Document variant does not support blockquotes"),
        Re(e, t, n, ib)
      );
    case "media":
      return (
        C(n.type === "media"),
        C(pt(e, "media"), "Document variant does not support media block"),
        Re(e, t, n, ab)
      );
    case "module":
      return (
        C(n.type === "module"),
        C(pt(e, "embeds"), "Document variant does not support embeds"),
        Re(e, t, n, sb)
      );
    case "table":
      return (
        C(n.type === "table"),
        C(pt(e, "tables"), "Document variant does not support tables"),
        Re(e, t, n, lb)
      );
    default:
      W(t);
  }
}
function x0(e, t, n) {
  if (t.type !== n.type) return !1;
  switch (t.type) {
    case "blockquote":
    case "table":
    case "tableRow":
      return !0;
    case "bulletedList":
      return (C(n.type === "bulletedList"), Re(e, t, n, Oc));
    case "numberedList":
      return (C(n.type === "numberedList"), Re(e, t, n, Wc));
    default:
      W(t);
  }
}
function ub(e, t, n) {
  return t === n || Ko(e, t.childNodes, n.childNodes);
}
function Hc(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!ub(e, t[o], n[o])) return !1;
  return !0;
}
function db(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!cb(e, t[o].childNodes, n[o].childNodes)) return !1;
  return !0;
}
function cb(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!pb(e, t[o], n[o])) return !1;
  return !0;
}
function pb(e, t, n) {
  return t === n
    ? !0
    : t.cellType !== n.cellType || t.rowSpan !== n.rowSpan || t.columnSpan !== n.columnSpan
      ? !1
      : Ko(e, t.childNodes, n.childNodes);
}
function fb(e, t, n) {
  if (t.length !== n.length) return !1;
  for (let o = 0; o < t.length; o++) if (!yb(e, t[o], n[o])) return !1;
  return !0;
}
var Gc = { type: z, text: z, bold: z, italic: z, inlineCode: z, link: Ac },
  mb = {
    ...Gc,
    inlineStyles: Sn,
    backgroundStyles: Sn,
    inlineCodeStylePreset: z,
    linkStylePreset: z,
  };
function yb(e, t, n) {
  return t.type !== n.type
    ? !1
    : t.type === "lineBreak"
      ? !0
      : n.type !== "text"
        ? !1
        : pt(e, "styles")
          ? Re(e, t, n, mb)
          : Re(e, t, n, Gc);
}
function ga(e, t) {
  return e === t
    ? !0
    : e === void 0 ||
        t === void 0 ||
        !Nt(e.openInNewTab, t.openInNewTab) ||
        !Nt(e.smoothScroll, t.smoothScroll) ||
        !Nt(e.clickTrackingId, t.clickTrackingId) ||
        !Nt(e.preserveParams, t.preserveParams) ||
        !hb(e.relValues, t.relValues)
      ? !1
      : ce(e.link, t.link);
}
function hb(e, t) {
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
function jc(e, t) {
  if (t in e) return Reflect.get(e, t);
}
function ba(e, t, n) {
  return jc(e, n) === jc(t, n);
}
function v0(e, t = e.variant, n = Rn) {
  try {
    return n(e);
  } catch (o) {
    return (ns(o), { id: ge(), type: "richText", variant: t, childNodes: [] });
  }
}
function Rn(e) {
  let t = _c(e);
  return { ...t, childNodes: $o(t.childNodes, !1) };
}
function I0(e) {
  return _c(e);
}
function _c(e) {
  return {
    id: e.id ?? ge(),
    type: "richText",
    variant: e.variant,
    childNodes: qo(e.variant, e.childNodes),
  };
}
function $o(e, t) {
  return e.map((n) => {
    switch (n.type) {
      case "textBlock": {
        let o = t ? "inherit" : n.textDirection === "inherit" ? "auto" : n.textDirection;
        return o === n.textDirection ? n : { ...n, textDirection: o };
      }
      case "bulletedList":
      case "numberedList":
        return {
          ...n,
          childNodes: n.childNodes.map((o) => ({ ...o, childNodes: $o(o.childNodes, !0) })),
        };
      case "blockquote":
        return { ...n, childNodes: $o(n.childNodes, !1) };
      case "table":
        return {
          ...n,
          childNodes: n.childNodes.map((o) => ({
            ...o,
            childNodes: o.childNodes.map((r) => ({ ...r, childNodes: $o(r.childNodes, !1) })),
          })),
        };
      case "media":
      case "module":
        return n;
    }
  });
}
function qo(e, t) {
  return t.map((n) => xb(e, n));
}
function xb(e, t) {
  switch (t.type) {
    case "textBlock":
      return gb(e, t);
    case "bulletedList":
      return bb(e, t);
    case "numberedList":
      return Tb(e, t);
    case "blockquote": {
      let n = Cb(e, t);
      return (C(Se(n, e), "normalizeRichTextDocument: unexpected node: blockquote"), n);
    }
    case "table": {
      let n = Vb(e, t);
      return (C(Se(n, e), "normalizeRichTextDocument: unexpected node: table"), n);
    }
    case "media":
    case "module":
      return t;
  }
}
function gb(e, t) {
  return { ...t, childNodes: Ib(e, t.childNodes) };
}
function bb(e, t) {
  let n = t.childNodes.map((o) => Uc(e, o));
  return { ...t, childNodes: n.length > 0 ? n : [Kc()] };
}
function Tb(e, t) {
  let n = t.childNodes.map((o) => Uc(e, o));
  return { ...t, childNodes: n.length > 0 ? n : [Kc()] };
}
function Cb(e, t) {
  let n = qo(e, t.childNodes);
  return { ...t, childNodes: n.length > 0 ? n : [Nn()] };
}
function Vb(e, t) {
  if (t.childNodes.length === 0) return { ...t, childNodes: [Bb()] };
  if (t.childNodes.every((o) => o.childNodes.length === 0))
    return { ...t, childNodes: t.childNodes.map((o) => ({ ...o, childNodes: [Ta()] })) };
  let n = t.childNodes.map((o) => Pb(e, o));
  return { ...t, childNodes: Sb(e, n) };
}
function Sb(e, t) {
  let { width: n, height: o, slots: r } = Nb(t);
  for (
    C(n > 0, "richTextDocumentNormalization: table has no cells"),
      C(o > 0, "richTextDocumentNormalization: table has no rows");
    t.length < o;
  )
    t.push(Eb());
  for (let i = 0; i < o; i++) {
    let a = r[i],
      s = t[i];
    C(a && s, "richTextDocumentNormalization: row length mismatch");
    let l = 0;
    for (let u = 0; u < a.length; u++) {
      let c = s.childNodes[l],
        m = a[u];
      if (!m?.length) (s.childNodes.splice(l, 0, Ta()), l++);
      else if (c)
        for (let p of m) {
          C(p, "richTextDocumentNormalization: slotCell is undefined");
          let x = p.cellX + p.width,
            h = p.cellY + p.height;
          (C(
            u >= p.cellX && u < x && i >= p.cellY && i < h,
            () =>
              `richTextDocumentNormalization: table cell bounds error. (${u}, ${i}) not within (${p.cellX}, ${p.cellY})...(${x}, ${h})`
          ),
            p.cell === c && l++);
        }
    }
  }
  return Rb(t);
}
function Rb(e) {
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
function Nb(e) {
  let t = [],
    n = 0,
    o = 0,
    r = 0,
    i = [];
  for (let p = 0; p < e.length; p++) a(e[p], p);
  return (
    s(),
    {
      width: n,
      height: o,
      slots: Array.from({ length: o }, (p, x) =>
        Array.from({ length: n }, (h, V) => t[x]?.[V] ?? [])
      ),
    }
  );
  function a(p, x) {
    (o === r && o++,
      C(r <= o, "richTextDocumentNormalization: table forming algorithm height error"));
    let h = 0;
    if ((l(), p.childNodes.length === 0)) {
      r++;
      return;
    }
    for (let V = 0; V < p.childNodes.length; V++) {
      let P = p.childNodes[V];
      for (; h < n && m(h, r);) h++;
      (h === n && n++,
        C(h <= n, "richTextDocumentNormalization: table forming algorithm width error"));
      let y = Math.min(P.columnSpan || 1, 1e3),
        T = Math.min(P.rowSpan ?? 1, 65534),
        S = !1;
      (T === 0 && ((S = !0), (T = 1)), n < h + y && (n = h + y), o < r + T && (o = r + T));
      let U = { cell: P, cellX: h, cellY: r, width: y, height: T };
      (u(U), S && i.push({ cell: U, cellX: h, width: y }), (h += y));
    }
    r += 1;
  }
  function s() {
    for (; r < o;) (l(), (r += 1));
    i = [];
  }
  function l() {
    for (let { cell: p, cellX: x, width: h } of i) (c(p, r, x, x + h), p.height++);
  }
  function u(p) {
    for (let x = p.cellX; x < p.cellX + p.width; x++)
      for (let h = p.cellY; h < p.cellY + p.height; h++) {
        let V = (t[h] ??= []);
        (V[x] ??= []).push(p);
      }
  }
  function c(p, x, h, V) {
    t[x] ??= [];
    for (let P = h; P < V; P++) (t[x][P] ??= []).push(p);
  }
  function m(p, x) {
    return !!t[x]?.[p]?.length;
  }
}
function Uc(e, t) {
  let n = qo(e, t.childNodes);
  return { ...t, childNodes: n.length > 0 ? n : [Nn("inherit")] };
}
function Pb(e, t) {
  return { ...t, childNodes: t.childNodes.map((n) => vb(e, n)) };
}
function vb(e, t) {
  let n = qo(e, t.childNodes),
    o = { ...t, childNodes: n.length > 0 ? n : [Nn()] };
  return (
    o.columnSpan !== void 0 && o.columnSpan < 1 && (o.columnSpan = 1),
    o.rowSpan !== void 0 && o.rowSpan < 0 && (o.rowSpan = 0),
    o
  );
}
function Ib(e, t) {
  let o = kb(t).filter((i) => i.type === "lineBreak" || i.text.length > 0),
    r = wb(o);
  if (r.some((i) => i.type === "text")) return r;
  for (let i of t)
    if (i.type === "text" && i.text === "" && Db(i)) {
      r.push(i);
      break;
    }
  return r;
}
function Db(e) {
  let t = e;
  return !!(t.inlineStyles || t.linkStylePreset || t.inlineCodeStylePreset);
}
function kb(e) {
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
    Lb(n, t);
  }
  return t;
}
function Lb(e, t) {
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
function wb(e) {
  let t = [];
  for (let n of e) {
    let o = t[t.length - 1];
    if (o?.type === "text" && n.type === "text" && Mb(o, n)) {
      t[t.length - 1] = { ...o, text: o.text + n.text };
      continue;
    }
    t.push(n.type === "text" ? { ...n } : n);
  }
  return t;
}
function Mb(e, t) {
  if (e.bold !== t.bold || e.italic !== t.italic || e.inlineCode !== t.inlineCode) return !1;
  let n = "inlineStyles" in e ? e.inlineStyles : void 0,
    o = "inlineStyles" in t ? t.inlineStyles : void 0;
  if (!ce(n, o)) return !1;
  let r = "backgroundStyles" in e ? e.backgroundStyles : void 0,
    i = "backgroundStyles" in t ? t.backgroundStyles : void 0;
  return !ce(r, i) || !ba(e, t, "inlineCodeStylePreset") || !ba(e, t, "linkStylePreset")
    ? !1
    : ga(e.link, t.link);
}
function Nn(e = "auto") {
  return { id: ge(), type: "textBlock", tag: "p", textDirection: e, childNodes: [] };
}
function Kc() {
  return { id: ge(), type: "listItem", childNodes: [Nn("inherit")] };
}
function Bb() {
  return { id: ge(), type: "tableRow", childNodes: [Ta()] };
}
function Eb() {
  return { id: ge(), type: "tableRow", childNodes: [] };
}
function Ta() {
  return { id: ge(), type: "tableCell", cellType: "cell", childNodes: [Nn()] };
}
function M0(e, t) {
  t.document?.(e);
  for (let n of e.childNodes) Xo(n, t);
}
function Ab(e, t) {
  if (t.document?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let o = Yo(n, t);
    if (o) return o;
  }
}
function B0(e) {
  return (
    Ab(e, {
      text(t) {
        return t.text.length > 0;
      },
      media() {
        return !0;
      },
      module() {
        return !0;
      },
    }) !== void 0
  );
}
function Yc(e, t, n = {}) {
  let o = be(e, t.document, (r) => {
    let i = qe(r.childNodes, (a) => Jo(e.variant, a, t));
    return i === r.childNodes ? r : { ...r, childNodes: i };
  });
  return o === e ? e : n.normalize === !1 ? o : Rn(o);
}
function Xo(e, t) {
  switch (e.type) {
    case "textBlock":
      t.textBlock?.(e);
      for (let n of e.childNodes) Wb(n, t);
      return;
    case "bulletedList":
      t.bulletedList?.(e);
      for (let n of e.childNodes) $c(n, t);
      return;
    case "numberedList":
      t.numberedList?.(e);
      for (let n of e.childNodes) $c(n, t);
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
      for (let n of e.childNodes) Fb(n, t);
      return;
  }
}
function $c(e, t) {
  t.listItem?.(e);
  for (let n of e.childNodes) Xo(n, t);
}
function Fb(e, t) {
  t.tableRow?.(e);
  for (let n of e.childNodes) Ob(n, t);
}
function Ob(e, t) {
  t.tableCell?.(e);
  for (let n of e.childNodes) Xo(n, t);
}
function Wb(e, t) {
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
        let o = Gb(n, t);
        if (o) return o;
      }
      return;
    case "bulletedList":
      if (t.bulletedList?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let o = qc(n, t);
        if (o) return o;
      }
      return;
    case "numberedList":
      if (t.numberedList?.(e) === !0) return e;
      for (let n of e.childNodes) {
        let o = qc(n, t);
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
        let o = zb(n, t);
        if (o) return o;
      }
      return;
  }
}
function qc(e, t) {
  if (t.listItem?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let o = Yo(n, t);
    if (o) return o;
  }
}
function zb(e, t) {
  if (t.tableRow?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let o = Hb(n, t);
    if (o) return o;
  }
}
function Hb(e, t) {
  if (t.tableCell?.(e) === !0) return e;
  for (let n of e.childNodes) {
    let o = Yo(n, t);
    if (o) return o;
  }
}
function Gb(e, t) {
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
        let i = qe(r.childNodes, (a) => Ub(e, a, n));
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
        let i = qe(r.childNodes, (a) => Xc(e, a, n));
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
        let i = qe(r.childNodes, (a) => Xc(e, a, n));
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
        let i = qe(r.childNodes, (a) => Jo(e, a, n));
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
        let i = qe(r.childNodes, (a) => jb(e, a, n));
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
function Xc(e, t, n) {
  return be(t, n.listItem, (o) => {
    let r = qe(o.childNodes, (i) => Jo(e, i, n));
    return r === o.childNodes ? o : { ...o, childNodes: r };
  });
}
function jb(e, t, n) {
  return be(t, n.tableRow, (o) => {
    let r = qe(o.childNodes, (i) => _b(e, i, n));
    return r === o.childNodes ? o : { ...o, childNodes: r };
  });
}
function _b(e, t, n) {
  return be(t, n.tableCell, (o) => {
    let r = qe(o.childNodes, (i) => Jo(e, i, n));
    return r === o.childNodes ? o : { ...o, childNodes: r };
  });
}
function Ub(e, t, n) {
  switch (t.type) {
    case "text":
      return be(t, n.text, (o) => o);
    case "lineBreak":
      return be(t, n.lineBreak, (o) => o);
  }
}
function be(e, t, n) {
  let o = Kb(e, t),
    r = n(o);
  return $b(r, t);
}
function Kb(e, t) {
  return !t || typeof t == "function" ? e : (t.enter?.(e) ?? e);
}
function $b(e, t) {
  return t ? (typeof t == "function" ? t(e) : (t.exit?.(e) ?? e)) : e;
}
function qe(e, t) {
  let n;
  for (let o = 0; o < e.length; o++) {
    let r = e[o];
    if (!r) continue;
    let i = t(r);
    i !== r && ((n ??= Array.from(e)), (n[o] = i));
  }
  return n ?? e;
}
var Jc = Symbol.for("framer.sharedEnum"),
  O0 = Symbol.for("framer.sharedTypeIdentity");
function Zo(e) {
  return q(e) && Jc in e;
}
function W0(e) {
  let { options: t, localizedOptionTitles: n } = e,
    o = t.map((i, a) => e.optionTitles?.[a] ?? i),
    r = (i) => {
      if (typeof i != "string") return;
      let a = o.indexOf(i);
      return a === -1 ? void 0 : t[a];
    };
  return {
    [Jc]: !0,
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
function qb(e) {
  return q(e) || Ze(e);
}
var Zc = "optional";
function Xb(e) {
  return !!e && Zc in e && e[Zc] === !0;
}
function Yb(e) {
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
        if (!("definition" in e) || !Zo(e.definition)) return;
        let { definition: t } = e;
        if (t.kind === "enum")
          return Q(e.defaultValue) && t.options.includes(e.defaultValue) ? e.defaultValue : void 0;
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
        return Oe(e.defaultValue) ? e.defaultValue : void 0;
      case "transition":
        return q(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return q(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
      case "location":
        return q(e.defaultValue) ? e.defaultValue : void 0;
      case "linkrelvalues":
        return Bn(e.defaultValue) ? e.defaultValue : void 0;
      case "multicollectionreference":
        return Bn(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = q(e.defaultValue) ? e.defaultValue : {};
        return (q(e.controls) && Qc(t, e.controls), t);
      }
      case "array":
        return Bn(e.defaultValue) ? e.defaultValue : void 0;
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
function Qc(e, t) {
  for (let n in t) {
    let o = t[n];
    if (!o) continue;
    let r = e[n];
    if (!Tt(r) || Xb(o)) continue;
    let i = Yb(o);
    Tt(i) || (e[n] = i);
  }
}
function Jb(e) {
  if (q(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function ep(e, t) {
  if (!qb(e)) return;
  let n = Jb(e);
  Qc(n, t);
}
var tp = "outputControls";
function Zb(e) {
  return (q(e) || Ze(e)) && tp in e;
}
function np(e, t) {
  Object.assign(e, { [tp]: t });
}
function K0(e) {
  if (Zb(e)) return e.outputControls;
}
function op(e, t, n) {
  (Object.assign(e, { propertyControls: t }), Qb(t), ep(e, t), n !== void 0 && np(e, n));
}
function Qb(e) {
  for (let t of Object.values(e))
    t?.type !== "sharedtype" ||
      !("definition" in t) ||
      !Zo(t.definition) ||
      !Object.isExtensible(t) ||
      Object.defineProperty(t, "options", { value: t.definition.options, configurable: !0 });
}
function Z0(e) {
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
function Ca(e) {
  let { paddingPerSide: t, paddingTop: n, paddingBottom: o, paddingLeft: r, paddingRight: i } = e;
  return t !== !1 && (n !== void 0 || o !== void 0 || r !== void 0 || i !== void 0);
}
function rp(e) {
  let { padding: t = 0, paddingTop: n, paddingBottom: o, paddingLeft: r, paddingRight: i } = e;
  return Ca(e)
    ? {
        top: n !== void 0 ? n : t,
        bottom: o !== void 0 ? o : t,
        left: r !== void 0 ? r : t,
        right: i !== void 0 ? i : t,
      }
    : { top: t, bottom: t, left: t, right: t };
}
function ip({ top: e, left: t, bottom: n, right: o }) {
  return e === o && o === n && n === t ? `${e}px` : `${e}px ${o}px ${n}px ${t}px`;
}
function oO(e) {
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
var tr = B(ne(), 1);
var up = B(oe(), 1),
  hO = (() => {
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
          className: p,
          willChangeTransform: x,
          __fromCodeComponentNode: h,
          parentSize: V,
          __contentWrapperStyle: P,
          ...y
        } = n,
        T = nr(i),
        S = sp(a),
        U = sp(s),
        _ = Ca(y) || y.padding ? ip(rp(y)) : void 0,
        Ye = _ === void 0 ? {} : { padding: _ },
        {
          width: ue,
          height: de,
          minWidth: ie,
          maxWidth: ke,
          minHeight: zr,
          maxHeight: Xa,
          ...Mn
        } = P ?? {},
        Le = {
          ...m,
          display: "flex",
          flexDirection: T,
          flexWrap: u ? "wrap" : "nowrap",
          justifyContent: S,
          alignItems: U,
          alignContent: U,
          ...Ye,
          ...Mn,
        };
      (Ro.applyWillChange({ willChangeTransform: x }, Le, !0),
        h &&
          !Wt(Mo(y)) &&
          ((y.width = "100%"), (y.height = "100%"), (y._constraints = { enabled: !0 })));
      let Lf = wo(n),
        { children: wf, props: Mf } = ko(y, c),
        Ya = y.widthType ?? (y.width === "auto" ? 2 : 0),
        Ja = y.heightType ?? (y.height === "auto" ? 2 : 0),
        Bf = eT(wf, i, Ya, Ja),
        Ef = To(Bf, V ?? 1),
        Za = { "data-framer-component-type": "Stack" },
        Qa = y.__fromCanvasComponent;
      if ((Qa && (Za["data-framer-generated"] = !0), tT(l, S, u))) {
        let es = lp(S);
        ((es || i !== "horizontal") && (Le.columnGap = `${l}px`),
          (es || i !== "vertical") && (Le.rowGap = `${l}px`));
      }
      return (
        Le.width === void 0 && Ya === 2 && (Le.width = "min-content"),
        Le.height === void 0 && Ja === 2 && (Le.height = "min-content"),
        (0, up.jsx)(Ld, {
          as: r,
          background: Qa ? void 0 : "none",
          ...Mf,
          layoutId: Lf,
          ref: o,
          ...Za,
          style: Le,
          className: p,
          layoutScroll: !0,
          children: Ef,
        })
      );
    });
    return (
      (e.defaultProps = { distribution: "start" }),
      (e.displayName = "Stack"),
      op(e, {
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
function ap(e) {
  return typeof e == "string" && e.endsWith("fr");
}
function er(e) {
  let t = parseFloat(e);
  return I(t) ? t : 0;
}
function eT(e, t, n, o) {
  return tr.default.Children.map(e, (r) => {
    if (!Hn(r) || !zn(r)) return;
    let i = t === "vertical",
      a = {},
      s = !1,
      { style: l, size: u } = r.props,
      { width: c, height: m } = r.props;
    u !== void 0 && (c === void 0 && (c = u), m === void 0 && (m = u));
    let p = c,
      x = m;
    if (
      (ap(c) &&
        ((s = !0),
        (s = !0),
        i
          ? n === 2
            ? ((a.alignSelf = "stretch"), (p = "auto"))
            : (p = `${er(c) * 100}%`)
          : ((p = 1), (a.flexGrow = er(c)), (a.flexBasis = 0)),
        (a.width = p)),
      ap(m) &&
        ((s = !0),
        i
          ? ((x = 1), (a.flexGrow = er(m)), (a.flexBasis = 0))
          : o === 2
            ? ((a.alignSelf = "stretch"), (x = "auto"))
            : (x = `${er(m) * 100}%`),
        (a.height = x)),
      !s)
    )
      return r;
    let h = { ...l, ...a };
    return tr.default.cloneElement(r, { width: p, height: x, style: h });
  });
}
function lp(e) {
  return e ? !["space-between", "space-around", "space-evenly", "stretch"].includes(e) : !1;
}
function tT(e, t, n) {
  return !(!e || (!n && !lp(t)));
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
function sp(e) {
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
  VO = { imageRendering: void 0 },
  SO = { imageRendering: "auto" },
  nT = "imageRendering";
function RO(e) {
  return kt(e) && !E(e.htmlContent) ? !1 : nT in e;
}
var oT = new Set(or);
function rT(e) {
  return f(e) && oT.has(e);
}
function NO(e) {
  return rT(e) ? e : "auto";
}
function dp(e) {
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
  iT = ["clip", "hidden"],
  aT = ["visible", "auto"],
  LO = { overflow: void 0, overflowX: void 0, overflowY: void 0 },
  cp = "overflow",
  wO = [cp, "overflowX", "overflowY"];
function pp(e) {
  return e ? cp in e : !1;
}
var sT = new Set(rr);
function MO(e) {
  return f(e) ? sT.has(e) : !1;
}
var lT = new Set(iT);
function BO(e) {
  return f(e) && lT.has(e);
}
var uT = new Set(aT);
function EO(e) {
  return f(e) && uT.has(e);
}
function fp(e) {
  return e === "auto" ? "Scroll" : Fn(e);
}
function AO(e) {
  if (!pp(e)) return !1;
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
function FO(e) {
  return pp(e) ? e.overflow === "auto" || e.overflowX === "auto" || e.overflowY === "auto" : !1;
}
function OO(e, t) {
  return v(t) && !v(e.overflowX) && !E(e.overflowX) && e.overflowX === e.overflowY;
}
var mp = { visible: "clip", clip: "visible", auto: "hidden", hidden: "auto" };
function WO(e, t, n, o = {}) {
  let r = e.resolveValue(t) || e.resolveValue(n);
  return r ? (o.preferSame ? r : mp[r]) : "clip";
}
function zO(e, t) {
  return e === t || v(t) ? !0 : (v(e) && (e = "visible"), mp[e] === t);
}
function yp(e) {
  let t = {};
  for (let n in e) {
    let o = e[n];
    if ($e(o))
      if (o.type === "fusednumber")
        R(o.value) ? (t[n] = o.value) : Bc(o) && (t[n] = o.value.single);
      else if (o.type === "object" && g(o.value)) {
        if (!g(o.value)) continue;
        t[n] = yp(o.value);
      } else
        o.type === "array" && G(o.value)
          ? (t[n] = o.value
              .filter($e)
              .map((r) => (r.type === "object" ? (g(r.value) ? yp(r.value) : void 0) : r.value)))
          : (t[n] = o.value);
  }
  return t;
}
function hp(e) {
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
      return nt;
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
var dT = {
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
function xp(e) {
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
function tW(e) {
  return e.type !== "controlReference"
    ? xp({ type: e.type })
    : e.expectedType === "segmentedenum"
      ? !1
      : xp({ type: e.type, expectedType: e.expectedType, entityIdentifier: e.entityIdentifier });
}
function cT(e) {
  return e === "WebPage" || e === "SmartComponent";
}
function pT(e, t) {
  return cT(t) ? Object.hasOwn(dT, e) : !1;
}
function fT(e, t) {
  return pT(e.type, t) ? (e.type !== "controlReference" ? !0 : e.expectedType !== "file") : !1;
}
function Z(e, t) {
  return fT(e, t) && e.optional === !0;
}
function Xt(e) {
  return !Vs(e) && e.type !== "divider";
}
function nW(e) {
  return e.type === "string";
}
function oW(e) {
  return e.type === "richtext";
}
function rW(e) {
  return e.type === "slug";
}
function iW(e) {
  return e.type === "date";
}
function mT(e) {
  return e.type === "collectionreference";
}
function yT(e) {
  return e.type === "multicollectionreference";
}
function aW(e) {
  return mT(e) || yT(e);
}
function hT(e) {
  return Xt(e) && rn(e.type);
}
var sW = hT;
function lW(e) {
  return e?.type === "divider";
}
function xT(e) {
  return e.type === "array";
}
function uW(e) {
  return e.type === "object";
}
function gT(e) {
  return e.type === "image";
}
function bT(e) {
  return xT(e) && e.itemVariables.length === 1 && e.itemVariables.every(gT);
}
function Va(e) {
  return bT(e) && e.displayGalleryAsArray !== !0;
}
var TT = { string: !0, richtext: !0, enum: !0 };
function CT(e) {
  return Xt(e) ? e.type in TT : !1;
}
function bp(e) {
  return CT(e) && e.preventLocalization === !0;
}
function dW(e) {
  return e.fallbackValue === "associatedVariable" && !!e.associatedStringVariable;
}
var VT = {
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
function Tp(e) {
  return Object.hasOwn(VT, e.type);
}
var ST = {
  boolean: !0,
  date: !0,
  string: !0,
  number: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  controlReference: !0,
};
function mW(e) {
  return Xt(e) ? Object.hasOwn(ST, e.type) : !1;
}
function Cp(e, t) {
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
var RT = { color: "rgba(0,0,0,0.25)", x: 0, y: 2, blur: 5 },
  NT = {
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
function Vp(e, t) {
  let n = { ...t, ...e };
  return (n.id || (n.id = Hr()), n);
}
function PT(e) {
  if (!g(e) || !("id" in e)) return !1;
  for (let n of Wi) if (!(n in e)) return !1;
  return !0;
}
function ir(e) {
  return G(e) && e.every(PT);
}
function VW(e) {
  return Vp(e, RT);
}
function ar(e) {
  return Vp(e, NT);
}
function SW(e) {
  return { ...e, id: Hr() };
}
function RW(e, t) {
  return { ...e, ...t };
}
var vT = /,(?![^(]*\))/u,
  IT = /\s(?![^(]*\))/u,
  DT = /(?:#|0x)(?:[a-f\d]{3}|[a-f\d]{6})\b|(?:rgb|hsl)a?\([^)]*\)/u,
  Sp = (e, t) => {
    let n = e.trim().toLowerCase().split(IT),
      o = n.includes("inset"),
      r = [],
      i = n.find((c) => DT.test(c)) ?? n[n.length - 1];
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
function DW(e, t) {
  let n = Sp(e, 0);
  if (
    n.color === "transparent" ||
    n.color === "rgba(0, 0, 0, 0)" ||
    (n.x === 0 && n.y === 0 && n.spread === 0 && n.blur === 0)
  )
    return;
  let o = b(n.color);
  if (!(!o || o.a <= 0)) return { ...n, id: t };
}
function Sa(e) {
  return e
    .split(vT)
    .map(Sp)
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
function kW(e) {
  let t = e.boxShadow;
  if (!(!t || t === "none")) return { boxShadows: Sa(t) };
}
function FW(e) {
  return ir(e) || E(e) ? e : [];
}
function OW(e) {
  return f(e)
    ? Sa(e)
    : G(e) && e.every(Ku.is)
      ? e.map((t, n) => ar({ ...t, id: `box-shadow-${n}` }))
      : [];
}
function Rp(e) {
  let { id: t, ...n } = e;
  return n;
}
var kT = "alt";
function Ra(e) {
  return g(e) && kT in e;
}
var Np = "altLocalized";
function HW(e) {
  return g(e) && Np in e && !!e[Np];
}
var LT = "positionX",
  wT = "positionY";
function Pp(e) {
  return g(e) ? LT in e || wT in e : !1;
}
function Na(e) {
  return Pp(e) ? f(e.positionX) && f(e.positionY) : !1;
}
var MT = {};
function _W(e) {
  return Pp(e) ? e : MT;
}
function vp(e) {
  return e.embedId !== void 0 ? e.embedId : /-\d+$/u.test(e.id) ? rc(e.id) : e.id;
}
function qW(e) {
  let t = new Set();
  return Yc(
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
var Yt = 16,
  JW = { rootFontSize: void 0 },
  Pa = "rootFontSize";
function ZW(e) {
  return Pa in e;
}
function Ip(e) {
  return Pa in e && R(e[Pa]);
}
var Dp = "--framer-root-font-size";
function cz(e, t, n, o) {
  if (o) {
    let r = BT(t, o, n);
    if (R(r)) return r;
  }
  if (Dt(e)) return e.getPrimaryVariant().rootFontSize;
  if (ze(e)) {
    let r = e.layoutTemplateIdentifier;
    return r ? kp(r, n) : e.getPrimaryVariant().rootFontSize;
  }
  return AT(t.root, n);
}
function BT(e, t, n) {
  let o = ia(e, t);
  if (o) return oc(o) ? ET(e, n, o) : Ip(o) ? o.rootFontSize : Yt;
}
function ET(e, t, n) {
  let o = nc(e, n);
  if (!o) return Yt;
  let r = ve(o)?.localId;
  if (!r) return Yt;
  let i = t
    .forType("layoutTemplate")
    .getByLocalId(r)
    .annotations(null, "default")?.framerBreakpoints;
  if (!i || !ec(i)) return Yt;
  C(Kd(n), "Breakpoint node must have size properties");
  let a = Go(i, n.width);
  return a && R(i[a]?.rootFontSize) ? i[a].rootFontSize : Yt;
}
function AT(e, t) {
  if (e.layoutTemplateIdentifier) return kp(e.layoutTemplateIdentifier, t);
  if (!e.homePageNodeId) return;
  let n = t.forType("screen").getByStableName(e.homePageNodeId).annotations(null, "default");
  return Lp(n);
}
function kp(e, t) {
  let n = ve(e),
    o = t.forType("layoutTemplate").getByLocalId(n.localId).annotations(null, n.exportSpecifier);
  return Lp(o);
}
function Lp(e) {
  if (!e) return;
  let t = e.framerRootFontSize;
  if (R(t)) return t;
}
var wp = /var\(--variable-reference-(?<variableId>[^)-]*)(?:-(?<providerId>[^)]*))?/;
function hz(e) {
  let t = new RegExp(wp, "g"),
    n = e.matchAll(t),
    o = [];
  for (let r of n) {
    if (!r.groups) continue;
    let { variableId: i, providerId: a } = r.groups,
      s = si(i, a);
    o.push(s);
  }
  return o;
}
function xz(e) {
  return f(e) && e.startsWith("--");
}
function gz(e) {
  let t = wp.exec(e);
  if (t?.groups) {
    let { variableId: n, providerId: o } = t.groups;
    return si(n, o);
  }
}
function FT(e) {
  let t = e.providerId ? `-${e.providerId}` : "";
  return `--variable-reference-${e.id}${t}`;
}
function Mp(e) {
  return `var(${FT(e)})`;
}
function bz(e) {
  return `calc(var(${Dp}, 1rem) * ${e})`;
}
var OT = /calc\(var\(--framer-root-font-size,\s*1rem\)\s*\*\s*(?<remValue>\d+(?:\.\d+)?)\)/u;
function Tz(e) {
  let t = OT.exec(e);
  if (t?.groups) {
    let { remValue: n } = t.groups,
      o = parseFloat(n);
    return R(o) ? [o, "rem"] : void 0;
  }
}
var WT = new Set(["img", "br"]);
function Bp(e, t) {
  return J("ul", { dir: lr(e.textDirection) }, ...e.childNodes.map(t));
}
function Ep(e, t) {
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
function Ap(e, t) {
  return J("blockquote", {}, ...e.childNodes.map(t));
}
function Fp(e, t) {
  return J(
    "figure",
    { class: "framer-table-wrapper" },
    J("table", {}, J("tbody", {}, ...e.childNodes.map((n) => zT(n, t))))
  );
}
function zT(e, t) {
  return J("tr", {}, ...e.childNodes.map((n) => HT(n, t)));
}
function HT(e, t) {
  return J(
    e.cellType === "header" ? "th" : "td",
    { colspan: e.columnSpan, rowspan: e.rowSpan },
    ...e.childNodes.map(t)
  );
}
function Op(e) {
  return e.type === "lineBreak" ? J("br", {}) : GT(e);
}
function GT(e) {
  let t = _T(e.text);
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
    "data-framer-open-in-new-tab": o === !0 ? !0 : Pn(o),
    "data-framer-smooth-scroll": r === !0 ? !0 : Pn(r),
    "data-framer-click-tracking-id": typeof i == "string" ? i : Pn(i),
    rel: Array.isArray(a) && a.length > 0 ? a.join(" ") : void 0,
    "data-framer-rel": Pn(a),
    "data-framer-preserve-params": typeof s == "boolean" ? String(s) : Pn(s),
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
        r === "style" && (o += ` style="${jT(i)}"`);
        continue;
      }
      if (i === !0) {
        o += ` ${r}=""`;
        continue;
      }
      o += ` ${r}="${Wp(String(i))}"`;
    }
  }
  return WT.has(e) ? `<${e}${o}>` : `<${e}${o}>${n.join("")}</${e}>`;
}
function jT(e) {
  let t = "";
  for (let n in e) {
    let o = e[n];
    o !== void 0 && (t && (t += " "), (t += `${n}: ${Wp(o)};`));
  }
  return t;
}
function _T(e) {
  return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function Wp(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function Pn(e) {
  if (M(e)) return Mp(e);
}
function UT(e) {
  return Rn(e).childNodes.map(ur).join("");
}
function Hp(e) {
  return typeof e == "string" ? e : UT(e);
}
function ur(e) {
  switch (e.type) {
    case "textBlock":
      return KT(e);
    case "bulletedList":
      return Bp(e, zp);
    case "numberedList":
      return Ep(e, zp);
    case "blockquote":
      return Ap(e, ur);
    case "media":
      return $T(e);
    case "module":
      return qT(e);
    case "table":
      return Fp(e, ur);
    default:
      W(e);
  }
}
function KT(e) {
  return J(e.tag, { dir: lr(e.textDirection) }, ...e.childNodes.map(Op));
}
function zp(e) {
  let t = e.childNodes[0],
    n = t?.type === "textBlock" ? t.tag : "p";
  return J("li", { "data-preset-tag": n }, ...e.childNodes.map(ur));
}
function $T(e) {
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
function qT(e) {
  return J("framer-module", {
    "data-module-identifier": e.identifier,
    "data-module-embed-id": vp(e),
    "data-module-props": JSON.stringify(e.props),
    "data-module-width": e.width,
    "data-module-alignment": e.alignment,
  });
}
var Gp = Symbol("dataIdentifier");
function vn(e, t) {
  e[Gp] = t;
}
function kz(e) {
  return e[Gp] ?? null;
}
var jp = ["page", "step", "location", "date", "time", "true", "false"],
  wz = { ariaCurrent: void 0 },
  Mz = { ariaCurrent: "page" },
  XT = "ariaCurrent";
function Bz(e) {
  return XT in e;
}
var _p = ["menu", "listbox", "tree", "grid", "dialog", "true", "false"],
  Az = { ariaHaspopup: void 0 },
  Fz = { ariaHaspopup: "menu" },
  YT = "ariaHaspopup";
function Oz(e) {
  return YT in e;
}
var Up = ["off", "polite", "assertive"],
  zz = { ariaLive: void 0 },
  Hz = { ariaLive: "polite" },
  JT = "ariaLive";
function Gz(e) {
  return JT in e;
}
var Kp = [
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
  _z = { ariaRole: void 0 },
  Uz = { ariaRole: "button" };
function Kz(e) {
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
  Xz = "multiply",
  Yz = { blendingMode: void 0 },
  ZT = "blendingMode";
function Jz(e) {
  return ZT in e;
}
var QT = new Set(dr);
function Zz(e) {
  return f(e) && QT.has(e);
}
var va = ["contain", "none"],
  t1 = { overscrollBehavior: void 0 },
  eC = "overscrollBehavior";
function n1(e) {
  return e ? eC in e : !1;
}
function o1(e) {
  return f(e) && (e === "contain" || e === "none");
}
var r1 = { overscrollBehavior: "contain" };
var cr = ["none", "auto"],
  s1 = { pointerEvents: void 0 },
  l1 = { pointerEvents: "none" },
  tC = "pointerEvents";
function u1(e) {
  return tC in e;
}
var $p = new Set(cr);
function d1(e) {
  return f(e.pointerEvents) && $p.has(e.pointerEvents);
}
function c1(e) {
  return f(e) && $p.has(e);
}
var pr = ["none", "auto"],
  m1 = { userSelect: void 0 },
  y1 = { userSelect: "none" },
  nC = "userSelect";
function h1(e) {
  return nC in e;
}
var qp = new Set(pr);
function x1(e) {
  return f(e.userSelect) && qp.has(e.userSelect);
}
function g1(e) {
  return f(e) && qp.has(e);
}
var Ia = ["text", "textarea", "email", "number", "tel", "url", "date", "time"],
  Xp = {
    text: "Text",
    textarea: "Text area",
    number: "Number",
    email: "Email",
    tel: "Phone number",
    url: "URL",
    date: "Date",
    time: "Time",
  };
function oC(e) {
  return f(e) && e in Xp;
}
function Yp(e) {
  return oC(e) ? Xp[e] : "Text";
}
function V1(e) {
  return E(e) || e === "date" || e === "time";
}
function S1(e) {
  return E(e) || e === "text";
}
var rC = "formTextInputType";
function iC(e) {
  return rC in e;
}
var R1 = {
  formTextInputType: void 0,
  formTextAreaResizable: void 0,
  formTextInputMinNumber: void 0,
  formTextInputMaxNumber: void 0,
  formInputMaxLength: void 0,
};
function N1(e) {
  return iC(e) && e.formTextInputType === "textarea";
}
var Jp = {
  stackDirection: {
    type: "enum",
    defaultValue: nr(wd),
    options: Eo.map(nr),
    optionTitles: Eo.map(we),
    displaySegmentedControl: !0,
    optionIcons: ["direction-horizontal", "direction-vertical"],
  },
  stackDistribution: {
    type: "enum",
    defaultValue: Fo(Md),
    options: Ao.map(Fo),
    optionTitles: Ao.map(we),
  },
  stackAlignment: {
    type: "enum",
    defaultValue: Fo(Bd),
    options: Oo.map(zd),
    optionTitles: Oo.map(we),
  },
  gridItemColumnSpan: { type: "enum", defaultValue: 1, options: ra, optionTitles: Ud },
  gridItemRowSpan: { type: "enum", defaultValue: 1, options: Wo, optionTitles: _d },
  userSelect: {
    type: "enum",
    defaultValue: "auto",
    options: pr.map((e) => e),
    optionTitles: pr.map(we),
  },
  overscrollBehavior: {
    type: "enum",
    defaultValue: "none",
    options: va.map((e) => e),
    optionTitles: va.map(we),
  },
  overflow: {
    type: "enum",
    defaultValue: "auto",
    options: rr.map((e) => e),
    optionTitles: rr.map(fp),
  },
  pointerEvents: {
    type: "enum",
    defaultValue: "auto",
    options: cr.map((e) => e),
    optionTitles: cr.map(we),
  },
  blendingMode: {
    type: "enum",
    defaultValue: "multiply",
    options: dr.map((e) => e),
    optionTitles: dr.map(we),
  },
  formTextInputType: {
    type: "enum",
    defaultValue: "text",
    options: [...Ia],
    optionTitles: Ia.map(Yp),
  },
  imageRendering: {
    type: "enum",
    defaultValue: "auto",
    displaySegmentedControl: !0,
    options: [...or],
    optionTitles: or.map(dp),
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
  ariaCurrent: { type: "enum", defaultValue: "page", options: [...jp] },
  ariaHaspopup: { type: "enum", defaultValue: "menu", options: [..._p] },
  ariaHidden: { type: "boolean", defaultValue: !1 },
  ariaDisabled: { type: "boolean", defaultValue: !1 },
  ariaRoleDescription: { type: "string", defaultValue: "" },
  ariaRole: { type: "enum", defaultValue: "button", options: [...Kp] },
  ariaLive: { type: "enum", defaultValue: "polite", options: [...Up] },
  ariaDescription: { type: "string", defaultValue: "" },
  tickerEffectDirectionModifier: {
    type: "enum",
    defaultValue: "default",
    displaySegmentedControl: !0,
    options: oa,
    optionTitles: oa.map(Hd),
  },
};
function U1(e) {
  return Object.hasOwn(Jp, e);
}
function Zp(e) {
  let t = Jp[e];
  return (C(t, () => `unknown node property control: ${e}`), t);
}
var $1 = "framer/nodePropertyDefinitions",
  aC = [
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
  sC = new Set(aC);
function Qp(e) {
  return typeof e == "string" && sC.has(e);
}
var lC = "src";
function fr(e) {
  return g(e) && f(e[lC]);
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
function Q1(e, t) {
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
var Nr = B(of(), 1);
function TH(e, t) {
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
      return ee(t) || (R(t) && Number.isFinite(t));
    case "boolean":
      return ee(t);
    case "number":
      return R(t);
    case "string":
    case "dimension":
    case "color":
    case "componentinstance":
      return f(t);
    case "slot":
      return f(t) || G(t);
    case "richtext":
      return mt(t) || (0, Nr.isElement)(t);
    case "responsiveimage":
      return fr(t);
    case "file":
    case "image":
      return f(t) || v(t);
    case "enum":
    case "segmentedenum":
      return !!(t === void 0 || t === null || ee(t) || R(t) || f(t));
    case "fusednumber":
      return Vn(t);
    case "eventhandler":
      return G(t) && t.every(Bo);
    case "transition":
      return Zn(t);
    case "border":
      return Cn(t);
    case "link":
      return ft(_o(t));
    case "linkrelvalues":
      return G(t) && t.every(ma);
    case "date":
      return t === void 0 ? !0 : f(t);
    case "object":
      return g(t);
    case "cursor":
      return f(t);
    case "boxshadow":
      return ir(t);
    case "gap":
    case "padding":
    case "borderradius":
      return f(t);
    case "collectionreference":
    case "sharedtype":
      return f(t);
    case "multicollectionreference":
      return G(t) && t.every(f);
    case "trackingid":
      return f(t);
    case "array":
      return G(t);
    case "vectorsetitem":
      return (f(t) && Pe(t)) || (0, Nr.isValidElementType)(t);
    case "ref":
    case "changehandler":
      return !1;
    case "location":
      return Uo(t);
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
  return La(e, t) && !E(t) ? t : hp(e);
}
function L(e) {
  return e.name || "Unknown";
}
function kH(e, t) {
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
    optional: Z(e, t) ? !0 : void 0,
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
    optional: Z(e, t) ? !0 : void 0,
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
    optional: Z(e, t) ? !0 : void 0,
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
    optional: Z(e, t) ? !0 : void 0,
  };
  return (e.options?.displayTime && (n.displayTime = !0), n);
}
function lG(e) {
  return e === "enum" || e === "file";
}
function uG(e) {
  return e.type === "controlReference"
    ? e.expectedType === "segmentedenum"
      ? "enum"
      : e.expectedType
    : e.type;
}
function dG(e) {
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
var cC = {
  responsiveimage: "image",
  fusednumber: null,
  slot: null,
  changehandler: null,
  font: null,
  pagescope: null,
};
function cG(e) {
  return eo(e) ? e : cC[e];
}
var pC = ["eventhandler"];
function pG(e) {
  return pC.includes(e.type);
}
function fG(e) {
  return Tp(e) ? (e.required ?? !1) : !1;
}
var fC = {
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
function af(e) {
  return Object.hasOwn(fC, e.type);
}
function mG(e) {
  return e?.type === "array" && e.control.type === "object";
}
function yG(e) {
  return e.type === "array";
}
function mC(e, t, n, o) {
  let r = {},
    i = Va(n);
  for (let s of n.itemVariables) {
    if (!Xt(s)) continue;
    let l = Wa(e, t, s, o);
    l &&
      (C(af(l), "Expected array item property control to be usable in an object"),
      i && l.type === "responsiveimage" ? (r[s.id] = xC(l)) : (r[s.id] = l));
  }
  let a = n.initialValue?.map((s) => {
    let l = {};
    if (!s || s.type !== "object" || !g(s.value)) return l;
    for (let u in s.value) {
      let c = s.value[u];
      if (!c) continue;
      let m = sf(c);
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
function yC(e, t, n, o) {
  let r = {};
  for (let a of n.fieldVariables) {
    let s = Wa(e, t, a, o);
    s && (C(af(s), "Expected object field control to be usable in an object"), (r[a.id] = s));
  }
  let i = Z(n, o);
  return {
    type: n.type,
    controls: r,
    title: L(n),
    description: n.description,
    optional: i ? !0 : void 0,
    __vekterDefault: i ? void 0 : hC(n),
  };
}
function hC(e) {
  let t = {};
  for (let n of e.fieldVariables) {
    let o = sf(e.initialValue[n.id]);
    v(o) || (t[n.id] = o);
  }
  return t;
}
function xC(e) {
  let { __defaultAssetReference: t, __vekterDefault: n, ...o } = e;
  return o;
}
function sf(e) {
  if (!$e(e)) return;
  let t = e.type;
  if (rn(t))
    switch (t) {
      case "image": {
        if (!f(e.value)) return;
        let n, o, r;
        return (
          Ra(e) && (n = e.alt),
          Na(e) && ((o = e.positionX), (r = e.positionY)),
          { assetReference: e.value, alt: n, positionX: o, positionY: r }
        );
      }
      case "boolean":
        return ee(e.value) ? e.value : void 0;
      case "number":
        return R(e.value) ? e.value : void 0;
      case "string":
      case "color":
      case "date":
      case "file":
        return f(e.value) ? e.value : void 0;
      case "richtext":
        return mt(e.value) ? e.value : void 0;
      case "link":
        return ft(e.value) ? e.value : void 0;
      case "vectorsetitem":
        return f(e.value) && Pe(e.value) ? e.value : void 0;
      default:
        W(t);
    }
}
function hG(e, t, n) {
  if (!Va(e)) return gC(t, n);
}
function gC(e, t) {
  if (!Z(e, t)) return bC(e);
}
function bC(e) {
  switch (e.type) {
    case "image":
      return f(e.initialValue) ? { type: "image", value: e.initialValue } : e.initialValue;
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
      return { type: "link", value: _o(e.initialValue) };
    case "vectorsetitem":
      return { type: "vectorsetitem", value: e.initialValue.identifier };
    default:
      W(e);
  }
}
function TC(e, t) {
  let n = Z(e, t);
  return { ...wa(e, t), defaultValue: n ? void 0 : me(e.type, e.initialValue) };
}
function yt(e, t) {
  let n = Z(e, t);
  return { ...Ma(e, t), defaultValue: n ? void 0 : me(e.type, e.initialValue) };
}
function CC(e) {
  let t = da(e.initialValue) ? e.initialValue : Co.toFormatString(e.initialValue);
  return { ...Ba(e), defaultValue: me(e.type, t) };
}
function VC(e, t) {
  let { min: n, max: o, step: r, units: i, literals: a } = e.options ?? {},
    s = Z(e, t);
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
function SC(e, t) {
  let n = Z(e, t);
  return {
    ...Ea(e, t),
    defaultValue: n ? void 0 : me(e.type, e.initialValue),
    maxLength: e.options?.maxLength,
  };
}
function RC(e) {
  let { placeholder: t, maxLength: n } = e.options ?? {};
  return {
    type: e.type,
    title: L(e),
    defaultValue: Hp(me(e.type, e.initialValue)),
    placeholder: t,
    maxLength: n,
    description: e.description,
    preventLocalization: e.preventLocalization,
  };
}
function NC(e) {
  let t = Aa(e);
  if (
    (f(e.initialValue) && (t.__defaultAssetReference = e.initialValue),
    $e(e.initialValue) && f(e.initialValue.value))
  ) {
    let n = e.initialValue.value;
    t.__defaultAssetReference = n;
    let o = { assetReference: n };
    ((t.__vekterDefault = o),
      Ra(e.initialValue) && f(e.initialValue.alt) && (o.alt = e.initialValue.alt),
      Na(e.initialValue) &&
        ((o.positionX = e.initialValue.positionX), (o.positionY = e.initialValue.positionY)));
  }
  return t;
}
function PC(e) {
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
function vC(e, t, n, o) {
  let r = kC(e, t, n, o);
  return r ? { type: n.type, title: L(n), payload: r } : { type: n.type, title: L(n) };
}
var IC = {
  boolean: !0,
  number: !0,
  string: !0,
  color: !0,
  date: !0,
  link: !0,
  image: !0,
  responsiveimage: !0,
};
function DC(e) {
  return Object.hasOwn(IC, e.type);
}
function kC(e, t, n, o) {
  if (!n.payload) return;
  let r = {};
  for (let i of n.payload) {
    let a = Wa(e, t, i, o);
    a && DC(a) && (r[i.id] = a);
  }
  return mu(r) ? void 0 : r;
}
function LC(e) {
  return { type: e.type, title: L(e), description: e.description };
}
function wC(e) {
  return { type: e.type, title: L(e), description: e.description };
}
function MC(e) {
  return { type: e.type, title: L(e), description: e.description, defaultValue: e.initialValue };
}
function BC(e) {
  let t = me(e.type, e.initialValue);
  return {
    type: e.type,
    title: L(e),
    defaultValue: t ? tl(t) : void 0,
    description: e.description,
  };
}
function EC(e) {
  return { type: e.type, title: L(e), defaultValue: e.initialValue, description: e.description };
}
function AC(e) {
  let t = me(e.type, e.initialValue),
    n = t ? vc(t) : void 0;
  return { type: e.type, title: L(e), description: e.description, defaultValue: n };
}
function FC(e) {
  return {
    type: e.type,
    title: L(e),
    defaultValue: e.initialValue.map(Rp),
    description: e.description,
  };
}
function OC(e) {
  return { type: e.type, title: L(e), description: e.description, defaultValue: e.initialValue };
}
function WC(e) {
  return { type: e.type, title: L(e), description: e.description, defaultValue: e.initialValue };
}
function zC(e) {
  return { type: e.type, title: L(e), description: e.description, defaultValue: e.initialValue };
}
function HC(e, t) {
  let n = Z(e, t);
  return {
    type: e.type,
    title: L(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: n ? void 0 : e.initialValue,
    optional: n ? !0 : void 0,
  };
}
function GC(e, t) {
  let n = Z(e, t);
  return {
    type: e.type,
    title: L(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: n ? void 0 : e.initialValue,
    optional: n ? !0 : void 0,
  };
}
function jC(e) {
  return { type: e.type, title: L(e), description: e.description };
}
function _C(e) {
  return {
    type: e.type,
    title: L(e),
    description: e.description,
    setModuleId: e.setModuleId,
    defaultValue: e.initialValue,
  };
}
function UC(e) {
  return Fa(e);
}
function KC(e) {
  return { type: e.type, title: L(e), description: e.description, defaultValue: e.initialValue };
}
function $C(e, t) {
  let n = Z(e, t);
  return { ...Oa(e, t), defaultValue: n ? void 0 : me(e.type, e.initialValue) };
}
function qC(e, t) {
  let n = Z(e, t),
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
  return (bp(e) || bn(s, a), s);
}
function rf(e, t) {
  switch (e) {
    case "enum":
    case "sharedtype":
      return t === "enum" || t === "segmentedenum";
    default:
      return e === t;
  }
}
function XC(e, t) {
  let n = ve(t);
  if (gs(n)) {
    let o = e.getNode(n.moduleId);
    if (o) return o.codeComponentIdentifier;
  }
  return t;
}
function YC(e, t, n) {
  if (n.type === "nodePropertyControlReference") {
    if (!Qp(n.controlKey)) return null;
    let a = Zp(n.controlKey);
    return (
      C(
        a && rf(a.type, n.expectedType),
        () => `incompatible node property control: ${n.controlKey} ${n.expectedType}`
      ),
      a
    );
  }
  let o = XC(e, n.entityIdentifier),
    r = t.componentForIdentifier(o);
  if (!r?.properties || (r.type !== "component" && r.type !== "data")) return null;
  let i = r.properties[n.controlKey];
  return !i || !rf(i.type, n.expectedType) ? null : i;
}
function JC(e, t) {
  let n = Z(e, t);
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
function ZC(e, t, n, o) {
  let r = YC(e, t, n);
  if (!r) return null;
  let i = n.type === "controlReference" && Z(n, o);
  switch (n.expectedType) {
    case "enum":
    case "segmentedenum": {
      if (r.type === "sharedtype") {
        if (xa(r)) return null;
        let s = {
          type: "sharedtype",
          kind: r.kind,
          moduleIdentifier: r.moduleIdentifier,
          title: L(n),
          defaultValue: i || !f(n.initialValue) ? void 0 : n.initialValue,
          description: n.description,
          optional: i ? !0 : void 0,
        };
        return (
          n.type === "controlReference" &&
            vn(s, { dataIdentifier: n.entityIdentifier, enumFieldKey: n.controlKey }),
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
        let s = QC(e, t, n, r.options);
        s && bn(a, s);
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
            __defaultAssetReference: f(n.initialValue) ? n.initialValue : void 0,
          };
    default:
      throw Error("Unsupported control reference type");
  }
}
function QC(e, t, n, o) {
  if (!Pe(n.entityIdentifier)) return null;
  let i = Ou(e, n.entityIdentifier)?.getPropertyControls(e, t)[n.controlKey];
  if (i?.type !== "enum") return null;
  let a = pc(i);
  return a ? o.map((s) => a[i.options.indexOf(s)]) : null;
}
function eV(e, t) {
  return {
    type: "string",
    title: L(t),
    description: t.description,
    preventLocalization: e.root.translatePagePaths === "no",
  };
}
var tV = { string: !0, richtext: !0 };
function xG(e) {
  return e.type in tV;
}
function Wa(e, t, n, o) {
  switch (n.type) {
    case "array":
      return mC(e, t, n, o);
    case "object":
      return yC(e, t, n, o);
    case "boolean":
      return TC(n, o);
    case "number":
      return yt(n, o);
    case "motionvalue":
      return Cp(n, L(n));
    case "dimension":
      return VC(n, o);
    case "color":
      return CC(n);
    case "string":
      return SC(n, o);
    case "richtext":
      return RC(n);
    case "image":
      return NC(n);
    case "eventhandler":
      return vC(e, t, n, o);
    case "link":
      return UC(n);
    case "linkrelvalues":
      return KC(n);
    case "date":
      return $C(n, o);
    case "enum":
      return qC(n, o);
    case "file":
      return PC(n);
    case "ref":
      return { type: n.type, title: L(n), description: n.description };
    case "scrollsectionref":
      return LC(n);
    case "customcursor":
      return wC(n);
    case "cursor":
      return MC(n);
    case "transition":
      return BC(n);
    case "border":
      return AC(n);
    case "location":
      return EC(n);
    case "boxshadow":
      return FC(n);
    case "gap":
      return OC(n);
    case "padding":
      return WC(n);
    case "borderradius":
      return zC(n);
    case "collectionreference":
      return HC(n, o);
    case "multicollectionreference":
      return GC(n, o);
    case "trackingid":
      return jC(n);
    case "vectorsetitem":
      return _C(n);
    case "sharedtype":
      return JC(n, o);
    case "nodePropertyControlReference":
    case "controlReference":
      return ZC(e, t, n, o);
    case "slug":
      return eV(e, n);
    default:
      W(n);
  }
}
function gG(e) {
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
function bG(e) {
  return e ? It(e) || Dt(e) || Gs(e) || ze(e) : !1;
}
var K = class extends Map {};
var lf = B(Af(), 1),
  ht = "previousItemId";
function NG(e) {
  return Pr(ht, "Previous", e.instanceIdentifier);
}
function PG({ name: e, dataIdentifier: t }) {
  return [
    {
      id: "id",
      name: e ? (0, lf.singular)(e) : "Unknown",
      type: "collectionreference",
      dataIdentifier: t,
      initialValue: void 0,
      exposeInProps: !0,
    },
    rV(),
    aV(),
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
function vG(e) {
  return Pr(xt, "Next", e.instanceIdentifier);
}
function IG(e) {
  return e === ht || e === xt;
}
var oV = "createdAt";
function rV() {
  return { type: "date", name: "Created", id: oV, initialValue: void 0, exposeInProps: !0 };
}
var iV = "updatedAt";
function aV() {
  return { type: "date", name: "Updated", id: iV, initialValue: void 0, exposeInProps: !0 };
}
var kG = { hookIdentifier: void 0 },
  sV = "hookIdentifier";
function lV(e) {
  return !!(e && sV in e);
}
function In(e) {
  return lV(e) && e.hookIdentifier !== void 0;
}
var gt = ".";
function WG(e, t, n) {
  return e === ht || e === xt ? n.length === 0 : !n.includes(t);
}
function uV(e, t) {
  return e === t || dV(e, t);
}
function dV(e, t) {
  return e.endsWith(t) && e[e.length - t.length - 1] === gt;
}
function uf(e, t) {
  return e.startsWith(t) && e[t.length] === gt;
}
function zG(e) {
  return uf(e, ht) || uf(e, xt);
}
function Jt(e) {
  return e.includes(gt);
}
function HG(e) {
  return Jt(e.id);
}
function vr(e, t) {
  return e ? e + gt + t : t;
}
function GG(e) {
  let t = e.lastIndexOf(gt);
  if (!(t < 0)) return e.slice(0, t);
}
function jG(e, t, n) {
  let o = vr(e, t);
  return hl(o, n);
}
function cV(e) {
  return e === "id";
}
function _G(e) {
  return uV(e, "id");
}
function UG(e) {
  let t = Object.entries(e.properties);
  for (let [n, o] of t)
    if (!cV(n) && (o?.type === "collectionreference" || o?.type === "multicollectionreference"))
      return !0;
  return !1;
}
function pV(e) {
  return e.split(gt);
}
function fV(e) {
  return e.join(gt);
}
function KG(e) {
  if (nu(e) && M(e.fillImage) && Jt(e.fillImage.id)) return e.fillImage;
  if (kt(e)) {
    if (Cl(e.textContent) && Jt(e.textContent.startValue.id)) return e.textContent.startValue;
    if (M(e.htmlContent) && Jt(e.htmlContent.id)) return e.htmlContent;
    if (M(e.textContent) && Jt(e.textContent.id)) return e.textContent;
  }
}
function $G(e, t, n, o, r) {
  if (!Jt(n)) return { collectionItemNode: o, collectionNode: r, variableId: n };
  let i = df(e, t, n, o, r);
  if (i.length === 0) return;
  let a;
  i.length === 1 ? (a = i[0]) : i.length > 1 && (a = i[i.length - 2]);
  let { collectionItemNode: s, variableId: l } = a ?? {};
  if (!s || !l) return;
  let u = e.getNodeWithTrait(s.parentid, _n);
  if (u) return { collectionItemNode: s, collectionNode: u, variableId: l };
}
function df(e, t, n, o, r) {
  let i = pV(n),
    a = i[0] === xt,
    s = i[0] === ht;
  if (a || s) {
    let c = a ? 1 : -1,
      m = r.getSortedChildren("public-only", "group-drafts"),
      p = m.findIndex((h) => h.id === o.id);
    if (p === -1) return [];
    let x = m[p + c];
    return x ? df(e, t, fV(i.slice(1)), x, r) : [];
  }
  let l = [{ collectionItemNode: o, variableId: i[0] }],
    u = o;
  for (let c = 0; c < i.length; c++) {
    let m = i[c];
    if (!m) break;
    let p = u.getControlProp(m);
    if (p?.type !== "collectionreference") break;
    C(!M(p.value), "Collections don't support variables");
    let x = e.getNodeWithTrait(p.value, Us);
    if (!x) break;
    u = x;
    let h = i[c + 1];
    if (!h) break;
    l.push({ collectionItemNode: u, variableId: h });
  }
  return l;
}
function mV(e) {
  return e.title ?? e.name;
}
function tj(e) {
  return e.replace(/^\.\/(.*)\.(?:tsx|ts|js)$/u, "$1");
}
function nj(e) {
  let t = new K();
  for (let n in e) {
    let o = e[n];
    if (o && (t.set(n, o), o.type === "object"))
      for (let r in o.controls) {
        let i = o.controls[r];
        i && t.set(vr(n, r), { ...i, title: i.title ?? Fn(r) });
      }
  }
  return t;
}
function oj(e, t) {
  let n = new K();
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
function cf(e) {
  return `${e}${za}`;
}
function yV(e) {
  return !!e?.endsWith(za);
}
function Ir(e) {
  if (!(!e || !yV(e))) return e.slice(0, -za.length);
}
function rj(e, t) {
  let n = Ir(e);
  if (!n) return;
  let o = t.get(n);
  if (o) return cf(o);
}
function pf(e, t) {
  if (e.getPrimaryId() === t) return e;
  for (let n of e.ancestors()) if (n.getPrimaryId() === t) return n;
}
function ij(e, t) {
  if (!t) return;
  let n = Ir(t);
  if (!n) return;
  let o = pf(e, n);
  return In(o) ? o.hookIdentifier : void 0;
}
function aj(e, t, n, o) {
  if (!t) return;
  let r = Ir(t);
  if (!r) return;
  let i = pf(e, r);
  if (!In(i)) return;
  let a = i.cache.getHookCache().getMaps(i.hookIdentifier, n);
  if (!a) return;
  let s = o?.get(t);
  return s ? { ...a, valueMap: s } : a;
}
function ff(e, t, n) {
  if (!In(e)) return;
  let o = e.cache.getHookCache().getMaps(e.hookIdentifier, t);
  if (!o) return;
  let r = cf(e.getPrimaryId()),
    i = n?.get(r) ?? o.valueMap;
  return {
    providerId: r,
    sourceIdentifier: e.hookIdentifier,
    variableMap: o.variableMap,
    controlMap: o.controlMap,
    valueMap: i,
  };
}
function sj(e, t, n) {
  let o = Ir(n);
  if (!o) return;
  let r = e.get(o);
  if (!In(r)) return;
  let i = t.hookForIdentifier(r.hookIdentifier);
  if (i) return mV(i);
}
var mf = "carousel_source_identifier",
  Dr = "carousel_provider_id",
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
  kr = {
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
  Dn = { id: w.hasNext, name: "Has Next", type: "boolean", initialValue: !1 },
  kn = { id: w.hasPrevious, name: "Has Previous", type: "boolean", initialValue: !1 },
  wr = { id: w.dots, name: "Pagination", type: "array", initialValue: [], itemVariables: [] },
  Mr = { id: w.nextPage, name: "Next", type: "eventhandler", initialValue: void 0 },
  Br = { id: w.previousPage, name: "Previous", type: "eventhandler", initialValue: void 0 },
  hV = { id: Ga, name: "Page", type: "number", initialValue: 1, options: { min: 1, step: 1 } },
  Er = { id: w.goToPage, name: "Go to", type: "eventhandler", initialValue: void 0, payload: [hV] },
  Ha = {
    [w.activeItemIndex]: kr,
    [w.totalItems]: Lr,
    [w.hasNext]: Dn,
    [w.hasPrevious]: kn,
    [w.dots]: wr,
    [w.nextPage]: Mr,
    [w.previousPage]: Br,
    [w.goToPage]: Er,
  };
function dj(e) {
  if (e in Ha) return Ha[e];
}
function cj(e) {
  return e in Ha;
}
var xV = "variables";
function fj(e) {
  return e ? xV in e : !1;
}
var gV = "getProvidedVariableMap";
function yj(e) {
  return !!e && gV in e;
}
function ja(e) {
  return e.root.getDefaultLocaleName("Default locale");
}
function yf(e, t) {
  return !t || !e ? "ltr" : go(e.code);
}
var hf = "global_locale",
  xf = "global_layout_direction",
  Ar = "locale_provider_id",
  gf = "locale_source_identifier",
  bV = "Left to Right",
  TV = "Right to Left";
function Dj(e) {
  return ze(e) || It(e) || Dt(e);
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
            id: hf,
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
              id: xf,
              type: "enum",
              name: "Layout Direction",
              initialValue: void 0,
              cases: [
                { id: "ltr", name: bV },
                { id: "rtl", name: TV },
              ],
            }),
            e);
    };
  })(),
  kj = je((e) => (e ? bf(e) : null)),
  CV = je((e, t) => {
    if (!e && !t) return;
    let n = new K();
    return (e && n.set(e.id, e), t && n.set(t.id, t), n);
  });
function Lj(e) {
  let t = _a(e),
    n = Ua(e);
  return CV(t, n);
}
function bf(e) {
  let t = [],
    n = [];
  for (let r of e.cases) (t.push(r.id), n.push(r.name));
  let o = { type: "enum", title: "Locale", options: t, optionTitles: n };
  return (vn(o, { dataIdentifier: gf, enumFieldKey: hf }), o);
}
function VV(e) {
  let t = [],
    n = [];
  for (let r of e.cases) (t.push(r.id), n.push(r.name));
  let o = { type: "enum", title: "Layout Direction", options: t, optionTitles: n };
  return (vn(o, { dataIdentifier: gf, enumFieldKey: xf }), o);
}
var SV = je((e, t) => {
  if (!e && !t) return;
  let n = new K();
  return (e && n.set(e.id, bf(e)), t && n.set(t.id, VV(t)), n);
});
function RV(e) {
  let t = _a(e),
    n = Ua(e);
  return SV(t, n);
}
var NV = je((e) => {
  if (!e) return;
  let t = new Map();
  return (t.set(Ar, e), t);
});
function wj(e) {
  let t = RV(e);
  return NV(t);
}
var PV = je((e, t, n, o) => {
  if (!e && !t) return;
  let r = new K();
  (e && r.set(e.id, n?.id ?? Ot), t && r.set(t.id, yf(n, o)));
  let i = new Map();
  return (i.set(Ar, r), i);
});
function Mj(e, t) {
  let n = _a(e),
    o = Ua(e);
  return PV(n, o, t, e.root.adaptLayoutToTextDirection);
}
var Tf = "default",
  Ln = class {
    has(t) {
      return !1;
    }
    get(t) {}
    *[Symbol.iterator]() {}
  },
  Ej = new Ln(),
  Aj = new Ln(),
  Fj = new Ln();
function Cf(e) {
  let t = pu(e);
  if (t) return t.intrinsicSize;
  let n = e.split("?")[1];
  if (!n) return;
  let o = new URLSearchParams(n),
    r = parseInt(o.get("width") ?? "", 10),
    i = parseInt(o.get("height") ?? "", 10);
  if (!(!R(r) || !R(i))) return { width: r, height: i };
}
var vV = "type",
  IV = "webPageId";
function Vf(e, t) {
  return e.type !== "link" || !g(t) || vV in t ? !1 : IV in t;
}
function DV(e, t) {
  let n = t;
  for (; Kn(n);) {
    if (n.dataIdentifier) return n.dataIdentifier;
    n = e.getParent(n.id);
  }
}
function kV(e, t) {
  if (t.unresolvedPathSlugs)
    for (let n in t.unresolvedPathSlugs) {
      let o = t.unresolvedPathSlugs[n];
      if (!g(o)) continue;
      let r = o.collectionItemId;
      if (!f(r)) continue;
      let i = Fu(e, t.webPageId);
      if (!i) return;
      let a = DV(e, i);
      if (!a) return;
      let s = { identifier: a, collectionItemId: r, key: n, value: "" };
      return { [n]: s };
    }
}
function Sf(e, t) {
  return { type: "webPage", webPageId: t.webPageId, pathVariables: kV(e, t) };
}
function Fr(e, t, n) {
  if (Vf(t, n)) return Sf(e, n);
  let o = me(t.type, n);
  if (t.type === "array") {
    if (!G(o)) return o;
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
    let r = Cf(o.src);
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
var Xe = class {
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
var wn = "repeater_item_index",
  Te = "repeater_item_count";
function u_(e, t, n, o, r) {
  let i = new Or(e, t, n);
  return new Ka(i, o, r);
}
var $a = {
    id: wn,
    name: "Item Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  LV = yt($a, "WebPage"),
  Wr = {
    id: Te,
    name: "Visible Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  d_ = [$a, Wr],
  qa = yt(Wr, "WebPage");
function c_(e) {
  return e === wn || e === Te;
}
function p_(e) {
  return e === Te;
}
var Rf = class extends Xe {
    constructor(t) {
      let n = new K();
      (n.set(Te, Wr), super(t, n));
    }
  },
  Nf = class extends Xe {
    constructor(t, n) {
      let o = new K();
      (o.set(Te, n), super(t, o));
    }
  },
  Pf = class extends Xe {
    constructor(t) {
      let n = new K();
      (n.set(Te, qa), super(t, n));
    }
  },
  vf = class extends Xe {
    constructor(t) {
      let n = new K();
      (n.set(wn, $a), n.set(Te, Wr), super(t, n));
    }
  },
  Ka = class extends Xe {
    constructor(t, n, o) {
      let r = new K();
      (r.set(wn, n + 1), r.set(Te, o), super(t, r));
    }
  },
  If = class extends Xe {
    constructor(t) {
      let n = new K();
      (n.set(wn, LV), n.set(Te, qa), super(t, n));
    }
  };
function f_(e, t, n, o) {
  let r = new Map(e),
    i = new Map(t),
    a = new K(),
    s = new K();
  return (
    a.set(Te, qa),
    s.set(Te, o),
    r.set(n, a),
    i.set(n, s),
    { nonRepeatedChildCombinedControlMap: r, nonRepeatedChildCombinedValueMap: i }
  );
}
function P_(e) {
  let t = e;
  for (let n of e.ancestors()) {
    if (ta(n)) return na(t);
    t = n;
  }
  return !1;
}
var wV = yt(kr, "WebPage"),
  MV = yt(Lr, "WebPage"),
  BV = { type: "boolean", title: Dn.name, defaultValue: Dn.initialValue },
  EV = { type: "boolean", title: kn.name, defaultValue: kn.initialValue },
  AV = { type: "array", title: wr.name, control: { type: "object", controls: {} } },
  FV = { type: "number", title: "Page", defaultValue: 1, min: 1, step: 1, displayStepper: !0 },
  OV = { type: "eventhandler", title: Mr.name },
  WV = { type: "eventhandler", title: Br.name },
  zV = { type: "eventhandler", title: Er.name, payload: { [Ga]: FV } },
  HV = jV(),
  GV = _V();
function jV() {
  let e = new K();
  return (
    e.set(w.activeItemIndex, kr),
    e.set(w.totalItems, Lr),
    e.set(w.hasNext, Dn),
    e.set(w.hasPrevious, kn),
    e.set(w.dots, wr),
    e.set(w.nextPage, Mr),
    e.set(w.previousPage, Br),
    e.set(w.goToPage, Er),
    e
  );
}
function _V() {
  let e = new K();
  return (
    e.set(w.activeItemIndex, wV),
    e.set(w.totalItems, MV),
    e.set(w.hasNext, BV),
    e.set(w.hasPrevious, EV),
    e.set(w.dots, AV),
    e.set(w.nextPage, OV),
    e.set(w.previousPage, WV),
    e.set(w.goToPage, zV),
    e
  );
}
function UV(e) {
  return Array.from({ length: e }, (t, n) => ({ id: String(n + 1) }));
}
function KV(e) {
  let t = new K();
  return (
    t.set(w.activeItemIndex, 1),
    t.set(w.totalItems, e),
    t.set(w.hasNext, e > 1),
    t.set(w.hasPrevious, !1),
    t.set(w.dots, UV(e)),
    t
  );
}
function $V() {
  return HV;
}
function qV() {
  return GV;
}
function XV(e, t) {
  let n = t?.get(Te),
    o = R(n) ? e.tree() : void 0,
    r = 0;
  for (let i of fu(e))
    if (!(xn(i) && i.position !== void 0)) {
      if (R(n) && o && $t(o, i)) {
        r += n;
        continue;
      }
      r++;
    }
  return r;
}
function v_(e, t) {
  let n = e.cache.carouselAncestorId;
  if (!n) return;
  let o = e.tree();
  if (!o) return;
  let r = o.get(n);
  if (r) return Df(e, r, t);
}
function Df(e, t, n) {
  let o = XV(t, n?.get(t.getPrimaryId())),
    r = e.cache.carouselValueMap;
  if (r?.itemCount === o) return r.valueMap;
  let i = KV(o);
  return ((e.cache.carouselValueMap = { itemCount: o, valueMap: i }), i);
}
function kf(e, t) {
  if (!xn(e) || e.position === void 0) return;
  let n = e.tree()?.get(e.parentid);
  if (!(!n || !ta(n)))
    return {
      providerId: Dr,
      sourceIdentifier: mf,
      variableMap: $V(),
      controlMap: qV(),
      valueMap: Df(e, n, t),
    };
}
var YV = On();
function E_(e, t, n) {
  let o = [],
    r = kf(e, t);
  r && o.push(r);
  let i = ff(e, n, t);
  return (i && o.push(i), o.length > 0 ? o : YV);
}
function A_(e) {
  return e === Ar || e === Dr;
}
function F_(e, t, n, o, r) {
  if (!t && n.length === 0) return e;
  let i;
  e
    ? ((i = new Map(e)), t && i.set(r, t))
    : t
      ? (i = new Map([
          [r, t],
          [Tf, t],
        ]))
      : (i = new Map());
  for (let a of n) i.set(a.providerId, o(a));
  return i;
}
function O_(e) {
  return e.map(JV);
}
function W_(e) {
  return e.map(ZV);
}
function JV(e) {
  return e.valueMap;
}
function ZV(e) {
  return e.controlMap;
}
function z_(e, t) {
  if (t.length === 0) return e;
  let n = new Map(e ?? []);
  for (let o of t) n.set(o.providerId, o.valueMap);
  return n;
}
export {
  Qt as a,
  QV as b,
  Gr as c,
  Ds as d,
  Me as e,
  ws as f,
  Wn as g,
  re as h,
  Be as i,
  ks as j,
  ot as k,
  N as l,
  I as m,
  bS as n,
  fe as o,
  zn as p,
  Hn as q,
  vS as r,
  jn as s,
  Pt as t,
  IS as u,
  _r as v,
  en as w,
  Ur as x,
  Wt as y,
  Bi as z,
  Rh as A,
  Wu as B,
  Ph as C,
  zu as D,
  vh as E,
  Gu as F,
  Ei as G,
  Td as H,
  Fi as I,
  ju as J,
  Oi as K,
  He as L,
  pi as M,
  Fl as N,
  un as O,
  so as P,
  Lv as Q,
  b as R,
  _u as S,
  Uu as T,
  Co as U,
  ut as V,
  zh as W,
  Vo as X,
  So as Y,
  Rd as Z,
  Hh as _,
  Jk as $,
  Ku as aa,
  Yu as ba,
  nL as ca,
  Zu as da,
  Ro as ea,
  Hi as fa,
  mL as ga,
  xd as ha,
  bd as ia,
  Cd as ja,
  Vd as ka,
  nd as la,
  xL as ma,
  RL as na,
  ad as oa,
  Kh as pa,
  qh as qa,
  ld as ra,
  lx as sa,
  Sd as ta,
  ud as ua,
  jt as va,
  LL as wa,
  wL as xa,
  wo as ya,
  vo as za,
  mn as Aa,
  Ki as Ba,
  zL as Ca,
  HL as Da,
  pd as Ea,
  hd as Fa,
  ZL as Ga,
  fx as Ha,
  Ld as Ia,
  O as Ja,
  hN as Ka,
  kS as La,
  LS as Ma,
  As as Na,
  Fs as Oa,
  Kr as Pa,
  Kf as Qa,
  $r as Ra,
  Ws as Sa,
  WS as Ta,
  zS as Ua,
  HS as Va,
  GS as Wa,
  D as Xa,
  KS as Ya,
  $S as Za,
  qS as _a,
  XS as $a,
  qr as ab,
  zs as bb,
  Hs as cb,
  YS as db,
  Xr as eb,
  $f as fb,
  Ee as gb,
  It as hb,
  Dt as ib,
  Gs as jb,
  ze as kb,
  JS as lb,
  js as mb,
  ZS as nb,
  QS as ob,
  kt as pb,
  qf as qb,
  eR as rb,
  tR as sb,
  _s as tb,
  _n as ub,
  Us as vb,
  nR as wb,
  oR as xb,
  Un as yb,
  Xf as zb,
  Yf as Ab,
  Jf as Bb,
  Zf as Cb,
  Qf as Db,
  em as Eb,
  tm as Fb,
  rR as Gb,
  iR as Hb,
  aR as Ib,
  sR as Jb,
  lR as Kb,
  uR as Lb,
  dR as Mb,
  cR as Nb,
  pR as Ob,
  fR as Pb,
  Ks as Qb,
  mR as Rb,
  yR as Sb,
  hR as Tb,
  xR as Ub,
  gR as Vb,
  bR as Wb,
  TR as Xb,
  Yr as Yb,
  CR as Zb,
  VR as _b,
  SR as $b,
  $s as ac,
  RR as bc,
  NR as cc,
  PR as dc,
  vR as ec,
  IR as fc,
  Kn as gc,
  DR as hc,
  qs as ic,
  $n as jc,
  kR as kc,
  LR as lc,
  wR as mc,
  MR as nc,
  BR as oc,
  ER as pc,
  AR as qc,
  FR as rc,
  OR as sc,
  WR as tc,
  nm as uc,
  zR as vc,
  HR as wc,
  GR as xc,
  Bo as yc,
  lM as zc,
  uM as Ac,
  hy as Bc,
  oI as Cc,
  rI as Dc,
  Mt as Ec,
  Zs as Fc,
  qn as Gc,
  rm as Hc,
  rt as Ic,
  Jn as Jc,
  im as Kc,
  am as Lc,
  Qs as Mc,
  el as Nc,
  sm as Oc,
  Jr as Pc,
  ti as Qc,
  Zn as Rc,
  tl as Sc,
  fm as Tc,
  cN as Uc,
  pN as Vc,
  fN as Wc,
  mm as Xc,
  mN as Yc,
  gN as Zc,
  ni as _c,
  bN as $c,
  oi as ad,
  rl as bd,
  SN as cd,
  ri as dd,
  Qn as ed,
  LN as fd,
  wN as gd,
  MN as hd,
  BN as id,
  EN as jd,
  al as kd,
  AN as ld,
  eo as md,
  rn as nd,
  HN as od,
  GN as pd,
  jN as qd,
  QN as rd,
  Rm as sd,
  Pm as td,
  vm as ud,
  Dm as vd,
  eP as wd,
  Lm as xd,
  tP as yd,
  nP as zd,
  wm as Ad,
  oP as Bd,
  Bm as Cd,
  rP as Dd,
  dl as Ed,
  iP as Fd,
  ai as Gd,
  aP as Hd,
  cl as Id,
  sP as Jd,
  lP as Kd,
  uP as Ld,
  fl as Md,
  dP as Nd,
  Om as Od,
  Wm as Pd,
  cP as Qd,
  pP as Rd,
  zm as Sd,
  fP as Td,
  mP as Ud,
  yP as Vd,
  hP as Wd,
  xP as Xd,
  gP as Yd,
  M as Zd,
  hl as _d,
  si as $d,
  oo as ae,
  xl as be,
  CP as ce,
  VP as de,
  gl as ee,
  SP as fe,
  RP as ge,
  NP as he,
  Hm as ie,
  wP as je,
  ye as ke,
  MP as le,
  Cl as me,
  BP as ne,
  EP as oe,
  AP as pe,
  Sl as qe,
  E as re,
  Rl as se,
  mM as te,
  yM as ue,
  hM as ve,
  Rx as we,
  Nx as xe,
  xM as ye,
  wd as ze,
  Md as Ae,
  Bd as Be,
  ct as Ce,
  gM as De,
  vx as Ee,
  bM as Fe,
  Ad as Ge,
  TM as He,
  Ix as Ie,
  CM as Je,
  VM as Ke,
  Dx as Le,
  Eo as Me,
  Fd as Ne,
  SM as Oe,
  Ao as Pe,
  ea as Qe,
  Fo as Re,
  wx as Se,
  Oo as Te,
  Wd as Ue,
  zd as Ve,
  RM as We,
  NM as Xe,
  Ex as Ye,
  IM as Ze,
  DM as _e,
  xn as $e,
  BM as af,
  EM as bf,
  AM as cf,
  Wx as df,
  ta as ef,
  na as ff,
  Hx as gf,
  FM as hf,
  HM as if,
  GM as jf,
  jx as kf,
  jM as lf,
  Ux as mf,
  _M as nf,
  UM as of,
  Xs as pf,
  _R as qf,
  tn as rf,
  Lt as sf,
  UR as tf,
  KR as uf,
  $R as vf,
  nn as wf,
  qR as xf,
  Ys as yf,
  wt as zf,
  XR as Af,
  Js as Bf,
  YR as Cf,
  JR as Df,
  ZR as Ef,
  KP as Ff,
  _m as Gf,
  $P as Hf,
  Pl as If,
  he as Jf,
  vl as Kf,
  qP as Lf,
  XP as Mf,
  Nl as Nf,
  YP as Of,
  JP as Pf,
  ZP as Qf,
  Il as Rf,
  $m as Sf,
  QP as Tf,
  Xm as Uf,
  at as Vf,
  ev as Wf,
  tv as Xf,
  nv as Yf,
  Gd as Zf,
  $x as _f,
  Wo as $f,
  ra as ag,
  jd as bg,
  XM as cg,
  YM as dg,
  JM as eg,
  ZM as fg,
  QM as gg,
  nB as hg,
  oB as ig,
  Kd as jg,
  _t as kg,
  aB as lg,
  $d as mg,
  sB as ng,
  lB as og,
  uB as pg,
  $ as qg,
  A as rg,
  Ll as sg,
  st as tg,
  av as ug,
  lt as vg,
  io as wg,
  sn as xg,
  El as yg,
  Al as zg,
  lo as Ag,
  Bv as Bg,
  Ov as Cg,
  Wv as Dg,
  dn as Eg,
  zv as Fg,
  Hv as Gg,
  Gv as Hg,
  cn as Ig,
  uo as Jg,
  Zl as Kg,
  Vi as Lg,
  Uv as Mg,
  Kv as Ng,
  my as Og,
  Ql as Pg,
  eI as Qg,
  co as Rg,
  tI as Sg,
  xy as Tg,
  pn as Ug,
  uI as Vg,
  bI as Wg,
  TI as Xg,
  Ft as Yg,
  Si as Zg,
  CI as _g,
  VI as $g,
  eu as ah,
  Ny as bh,
  SI as ch,
  tu as dh,
  RI as eh,
  NI as fh,
  PI as gh,
  nu as hh,
  Py as ih,
  vI as jh,
  II as kh,
  DI as lh,
  kI as mh,
  Iy as nh,
  ky as oh,
  LI as ph,
  mB as qh,
  ia as rh,
  Qx as sh,
  yB as th,
  CB as uh,
  Xd as vh,
  Ut as wh,
  tg as xh,
  VB as yh,
  Yt as zh,
  JW as Ah,
  ZW as Bh,
  Ip as Ch,
  zo as Dh,
  NB as Eh,
  la as Fh,
  PB as Gh,
  vB as Hh,
  xu as Ih,
  jy as Jh,
  dD as Kh,
  cD as Lh,
  Tu as Mh,
  pD as Nh,
  fD as Oh,
  Qo as Ph,
  ng as Qh,
  ua as Rh,
  Qd as Sh,
  rg as Th,
  ig as Uh,
  da as Vh,
  LB as Wh,
  wB as Xh,
  AB as Yh,
  FB as Zh,
  OB as _h,
  WB as $h,
  zB as ai,
  HB as bi,
  GB as ci,
  Go as di,
  UB as ei,
  ec as fi,
  QB as gi,
  tc as hi,
  nc as ii,
  eE as ji,
  oc as ki,
  tE as li,
  Dp as mi,
  cz as ni,
  hz as oi,
  xz as pi,
  gz as qi,
  FT as ri,
  Mp as si,
  bz as ti,
  Tz as ui,
  ge as vi,
  mg as wi,
  yg as xi,
  sE as yi,
  xg as zi,
  lE as Ai,
  gg as Bi,
  uE as Ci,
  dE as Di,
  cE as Ei,
  pE as Fi,
  fE as Gi,
  mE as Hi,
  yE as Ii,
  pt as Ji,
  gn as Ki,
  Se as Li,
  ac as Mi,
  ou as Ni,
  By as Oi,
  GI as Pi,
  cu as Qi,
  jI as Ri,
  _I as Si,
  pu as Ti,
  PE as Ui,
  ft as Vi,
  ca as Wi,
  Kt as Xi,
  sc as Yi,
  _o as Zi,
  vE as _i,
  IE as $i,
  DE as aj,
  vg as bj,
  ma as cj,
  uc as dj,
  kG as ej,
  lV as fj,
  In as gj,
  Ri as hj,
  Ni as ij,
  mo as jj,
  YI as kj,
  Fy as lj,
  fu as mj,
  Hg as nj,
  Lc as oj,
  XA as pj,
  YA as qj,
  _g as rj,
  JA as sj,
  ZA as tj,
  wc as uj,
  QA as vj,
  eF as wj,
  Kg as xj,
  tF as yj,
  mu as zj,
  pc as Aj,
  dc as Bj,
  fc as Cj,
  HE as Dj,
  mc as Ej,
  kg as Fj,
  GE as Gj,
  YE as Hj,
  xa as Ij,
  JE as Jj,
  xc as Kj,
  Lg as Lj,
  ZE as Mj,
  QE as Nj,
  wg as Oj,
  Ot as Pj,
  yu as Qj,
  iD as Rj,
  Cu as Sj,
  Di as Tj,
  Vu as Uj,
  Su as Vj,
  Ru as Wj,
  ki as Xj,
  PD as Yj,
  xo as Zj,
  vD as _j,
  ID as $j,
  Nu as ak,
  bc as bk,
  Tc as ck,
  oA as dk,
  Mg as ek,
  rA as fk,
  iA as gk,
  Cc as hk,
  aA as ik,
  Bg as jk,
  $t as kk,
  sA as lk,
  lA as mk,
  uA as nk,
  dA as ok,
  cA as pk,
  Pi as qk,
  tD as rk,
  nD as sk,
  Wy as tk,
  vi as uk,
  oD as vk,
  Hy as wk,
  Pu as xk,
  ph as yk,
  vu as zk,
  ku as Ak,
  AD as Bk,
  fh as Ck,
  FD as Dk,
  OD as Ek,
  Lu as Fk,
  go as Gk,
  je as Hk,
  Li as Ik,
  $D as Jk,
  qD as Kk,
  XD as Lk,
  Eu as Mk,
  rk as Nk,
  bh as Ok,
  Fu as Pk,
  Ou as Qk,
  Th as Rk,
  fr as Sk,
  gA as Tk,
  mt as Uk,
  bA as Vk,
  Rc as Wk,
  SA as Xk,
  RA as Yk,
  Pc as Zk,
  kA as _k,
  Cn as $k,
  LA as al,
  nt as bl,
  vc as cl,
  wA as dl,
  MA as el,
  BA as fl,
  EA as gl,
  Ic as hl,
  Dc as il,
  zA as jl,
  $e as kl,
  UA as ll,
  aF as ml,
  Vn as nl,
  sF as ol,
  Mc as pl,
  Jg as ql,
  Qg as rl,
  vF as sl,
  IF as tl,
  DF as ul,
  kF as vl,
  Uo as wl,
  LF as xl,
  wF as yl,
  Ec as zl,
  MF as Al,
  BF as Bl,
  EF as Cl,
  AF as Dl,
  FF as El,
  OF as Fl,
  WF as Gl,
  zF as Hl,
  HF as Il,
  GF as Jl,
  jF as Kl,
  _F as Ll,
  UF as Ml,
  KF as Nl,
  $F as Ol,
  qF as Pl,
  XF as Ql,
  YF as Rl,
  JF as Sl,
  ZF as Tl,
  QF as Ul,
  e0 as Vl,
  t0 as Wl,
  n0 as Xl,
  o0 as Yl,
  r0 as Zl,
  i0 as _l,
  a0 as $l,
  s0 as am,
  Na as bm,
  _W as cm,
  mr as dm,
  Q1 as em,
  PT as fm,
  ir as gm,
  VW as hm,
  ar as im,
  SW as jm,
  RW as km,
  of as lm,
  TH as mm,
  La as nm,
  DW as om,
  Sa as pm,
  kW as qm,
  FW as rm,
  OW as sm,
  Rp as tm,
  Ra as um,
  HW as vm,
  Cp as wm,
  m0 as xm,
  y0 as ym,
  h0 as zm,
  x0 as Am,
  ub as Bm,
  pb as Cm,
  ga as Dm,
  v0 as Em,
  Rn as Fm,
  I0 as Gm,
  M0 as Hm,
  Ab as Im,
  B0 as Jm,
  Yc as Km,
  vp as Lm,
  qW as Mm,
  Bp as Nm,
  Ep as Om,
  Ap as Pm,
  Fp as Qm,
  Op as Rm,
  sr as Sm,
  lr as Tm,
  J as Um,
  UT as Vm,
  Hp as Wm,
  vn as Xm,
  kz as Ym,
  O0 as Zm,
  Zo as _m,
  W0 as $m,
  K0 as an,
  op as bn,
  Z0 as cn,
  rp as dn,
  ip as en,
  oO as fn,
  hO as gn,
  ap as hn,
  er as in,
  tT as jn,
  nr as kn,
  sp as ln,
  jp as mn,
  wz as nn,
  Mz as on,
  Bz as pn,
  _p as qn,
  Az as rn,
  Fz as sn,
  Oz as tn,
  Up as un,
  zz as vn,
  Hz as wn,
  Gz as xn,
  Kp as yn,
  _z as zn,
  Uz as An,
  Kz as Bn,
  dr as Cn,
  Xz as Dn,
  Yz as En,
  Jz as Fn,
  Zz as Gn,
  or as Hn,
  VO as In,
  SO as Jn,
  RO as Kn,
  rT as Ln,
  NO as Mn,
  dp as Nn,
  rr as On,
  LO as Pn,
  wO as Qn,
  pp as Rn,
  MO as Sn,
  BO as Tn,
  EO as Un,
  fp as Vn,
  AO as Wn,
  FO as Xn,
  OO as Yn,
  mp as Zn,
  WO as _n,
  zO as $n,
  va as ao,
  t1 as bo,
  n1 as co,
  o1 as do,
  r1 as eo,
  cr as fo,
  s1 as go,
  l1 as ho,
  u1 as io,
  d1 as jo,
  c1 as ko,
  pr as lo,
  m1 as mo,
  y1 as no,
  h1 as oo,
  x1 as po,
  g1 as qo,
  Ia as ro,
  oC as so,
  Yp as to,
  V1 as uo,
  S1 as vo,
  iC as wo,
  R1 as xo,
  N1 as yo,
  U1 as zo,
  Zp as Ao,
  $1 as Bo,
  Qp as Co,
  yp as Do,
  hp as Eo,
  me as Fo,
  xp as Go,
  tW as Ho,
  pT as Io,
  fT as Jo,
  Z as Ko,
  Xt as Lo,
  nW as Mo,
  oW as No,
  rW as Oo,
  iW as Po,
  mT as Qo,
  yT as Ro,
  aW as So,
  hT as To,
  sW as Uo,
  lW as Vo,
  xT as Wo,
  uW as Xo,
  bT as Yo,
  Va as Zo,
  CT as _o,
  bp as $o,
  dW as ap,
  kH as bp,
  Tp as cp,
  mW as dp,
  lG as ep,
  uG as fp,
  dG as gp,
  cG as hp,
  pG as ip,
  fG as jp,
  mG as kp,
  yG as lp,
  hG as mp,
  gC as np,
  bC as op,
  FC as pp,
  XC as qp,
  YC as rp,
  xG as sp,
  Wa as tp,
  gG as up,
  bG as vp,
  K as wp,
  ht as xp,
  NG as yp,
  PG as zp,
  xt as Ap,
  vG as Bp,
  IG as Cp,
  oV as Dp,
  rV as Ep,
  iV as Fp,
  aV as Gp,
  gt as Hp,
  WG as Ip,
  uV as Jp,
  uf as Kp,
  zG as Lp,
  Jt as Mp,
  HG as Np,
  vr as Op,
  GG as Pp,
  jG as Qp,
  cV as Rp,
  _G as Sp,
  UG as Tp,
  pV as Up,
  fV as Vp,
  KG as Wp,
  $G as Xp,
  mV as Yp,
  tj as Zp,
  nj as _p,
  oj as $p,
  cf as aq,
  yV as bq,
  Ir as cq,
  rj as dq,
  ij as eq,
  aj as fq,
  sj as gq,
  yj as hq,
  Cf as iq,
  ja as jq,
  yf as kq,
  hf as lq,
  xf as mq,
  Ar as nq,
  gf as oq,
  bV as pq,
  TV as qq,
  Dj as rq,
  _a as sq,
  Ua as tq,
  kj as uq,
  Lj as vq,
  RV as wq,
  wj as xq,
  Mj as yq,
  Tf as zq,
  Ej as Aq,
  Aj as Bq,
  Fj as Cq,
  mf as Dq,
  Dr as Eq,
  w as Fq,
  Ga as Gq,
  hV as Hq,
  dj as Iq,
  cj as Jq,
  Or as Kq,
  Xe as Lq,
  wn as Mq,
  Te as Nq,
  u_ as Oq,
  d_ as Pq,
  c_ as Qq,
  p_ as Rq,
  Rf as Sq,
  Nf as Tq,
  Pf as Uq,
  vf as Vq,
  Ka as Wq,
  If as Xq,
  f_ as Yq,
  P_ as Zq,
  FV as _q,
  qV as $q,
  v_ as ar,
  E_ as br,
  A_ as cr,
  F_ as dr,
  O_ as er,
  W_ as fr,
  JV as gr,
  ZV as hr,
  z_ as ir,
  fj as jr,
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
//# sourceMappingURL=chunk-EWG6V33O.mjs.map
