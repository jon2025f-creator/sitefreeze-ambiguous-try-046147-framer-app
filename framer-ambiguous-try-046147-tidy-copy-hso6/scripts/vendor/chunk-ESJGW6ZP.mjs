import { b as Hs, d as ao } from "chunk-KYM2LAWB.mjs";
import { a as Nt, b as vs, g as _, h as _o } from "chunk-NYCWGTYH.mjs";
import { a as Rs, b as se, e as zs, f as Gs, g as oe, t as js, w as Pt } from "chunk-ZNFBUDMT.mjs";
import { e as Ko, f as Le, g as pm } from "chunk-GHDF5CG4.mjs";
import { Ne as Ce, Ob as Ls, nf as Ms, pd as ws, xf as tt, zb as Ds } from "chunk-DPHJW6UJ.mjs";
import {
  A as We,
  b as et,
  c as Is,
  d as ee,
  e as Oe,
  f as Go,
  g as q,
  i as St,
  j as Ps,
  u as ks,
  z as Rt,
} from "chunk-4NZK3QP7.mjs";
import { a as io, b as It } from "chunk-WRBBN7SY.mjs";
import { a as $o } from "chunk-MSHSIAEI.mjs";
import { a as pe } from "chunk-SMHMQ5IL.mjs";
import { g as Fs, k as Os } from "chunk-BQDYXAIS.mjs";
import { a as jo } from "chunk-UZNETSBG.mjs";
import { b as Ws } from "chunk-YSP5ZHDJ.mjs";
import { b as X } from "chunk-AYNVEX5D.mjs";
import { a as re } from "chunk-2FCXHKEL.mjs";
import {
  a as te,
  b as p,
  e as S,
  f as g,
  g as Es,
  i as B,
  o as I,
  q as Bs,
  r as Ve,
  u as As,
} from "chunk-5EE7LLRA.mjs";
import { b as h, c as L } from "chunk-4JY5UMT2.mjs";
import { a as ne } from "chunk-SWYZG2NI.mjs";
import { o as Ns } from "chunk-DIKEVKKF.mjs";
import { g as bs, i as Ts, k as Cs, l as Qe, o as Vs, r as Ss } from "chunk-VHFKZWVR.mjs";
import { i as Ho } from "chunk-WBI6GGAG.mjs";
import { a as gs } from "chunk-YRQ7G4QH.mjs";
import { c as xs, e as E } from "chunk-WLHSDIGQ.mjs";
var Lf = xs((G) => {
  "use strict";
  var $a = Symbol.for("react.element"),
    Ua = Symbol.for("react.portal"),
    Dr = Symbol.for("react.fragment"),
    Lr = Symbol.for("react.strict_mode"),
    wr = Symbol.for("react.profiler"),
    Mr = Symbol.for("react.provider"),
    Er = Symbol.for("react.context"),
    HC = Symbol.for("react.server_context"),
    Br = Symbol.for("react.forward_ref"),
    Ar = Symbol.for("react.suspense"),
    Fr = Symbol.for("react.suspense_list"),
    Or = Symbol.for("react.memo"),
    Wr = Symbol.for("react.lazy"),
    GC = Symbol.for("react.offscreen"),
    Df;
  Df = Symbol.for("react.module.reference");
  function Ie(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case $a:
          switch (((e = e.type), e)) {
            case Dr:
            case wr:
            case Lr:
            case Ar:
            case Fr:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case HC:
                case Er:
                case Br:
                case Wr:
                case Or:
                case Mr:
                  return e;
                default:
                  return t;
              }
          }
        case Ua:
          return t;
      }
    }
  }
  G.ContextConsumer = Er;
  G.ContextProvider = Mr;
  G.Element = $a;
  G.ForwardRef = Br;
  G.Fragment = Dr;
  G.Lazy = Wr;
  G.Memo = Or;
  G.Portal = Ua;
  G.Profiler = wr;
  G.StrictMode = Lr;
  G.Suspense = Ar;
  G.SuspenseList = Fr;
  G.isAsyncMode = function () {
    return !1;
  };
  G.isConcurrentMode = function () {
    return !1;
  };
  G.isContextConsumer = function (e) {
    return Ie(e) === Er;
  };
  G.isContextProvider = function (e) {
    return Ie(e) === Mr;
  };
  G.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === $a;
  };
  G.isForwardRef = function (e) {
    return Ie(e) === Br;
  };
  G.isFragment = function (e) {
    return Ie(e) === Dr;
  };
  G.isLazy = function (e) {
    return Ie(e) === Wr;
  };
  G.isMemo = function (e) {
    return Ie(e) === Or;
  };
  G.isPortal = function (e) {
    return Ie(e) === Ua;
  };
  G.isProfiler = function (e) {
    return Ie(e) === wr;
  };
  G.isStrictMode = function (e) {
    return Ie(e) === Lr;
  };
  G.isSuspense = function (e) {
    return Ie(e) === Ar;
  };
  G.isSuspenseList = function (e) {
    return Ie(e) === Fr;
  };
  G.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === Dr ||
      e === wr ||
      e === Lr ||
      e === Ar ||
      e === Fr ||
      e === GC ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Wr ||
          e.$$typeof === Or ||
          e.$$typeof === Mr ||
          e.$$typeof === Er ||
          e.$$typeof === Br ||
          e.$$typeof === Df ||
          e.getModuleId !== void 0))
    );
  };
  G.typeOf = Ie;
});
var Mf = xs((aj, wf) => {
  "use strict";
  wf.exports = Lf();
});
function so(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function MS(e, t) {
  let o = e.toFixed(t);
  return t === 0 ? o : `${+o}`;
}
function ei(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function _s(e) {
  return Math.round(e * 2) / 2;
}
function we(e, t) {
  return { x: e, y: t };
}
((R) => {
  ((R.isQuadrilateralPoints = (y) => y?.length === 4),
    (R.add = (...y) => y.reduce((C, z) => ({ x: C.x + z.x, y: C.y + z.y }), { x: 0, y: 0 })),
    (R.subtract = (y, C) => ({ x: y.x - C.x, y: y.y - C.y })),
    (R.multiply = (y, C) => ({ x: y.x * C, y: y.y * C })),
    (R.divide = (y, C) => ({ x: y.x / C, y: y.y / C })),
    (R.absolute = (y) => ({ x: Math.abs(y.x), y: Math.abs(y.y) })),
    (R.reverse = (y) => ({ x: y.x * -1, y: y.y * -1 })),
    (R.pixelAligned = (y, C = { x: 0, y: 0 }) => ({ x: ei(y.x, C.x), y: ei(y.y, C.y) })),
    (R.distance = (y, C) => {
      let z = Math.abs(y.x - C.x),
        j = Math.abs(y.y - C.y);
      return Math.sqrt(z * z + j * j);
    }),
    (R.angle = (y, C) => (Math.atan2(C.y - y.y, C.x - y.x) * 180) / Math.PI - 90),
    (R.angleFromX = (y, C) => (Math.atan2(C.y - y.y, C.x - y.x) * 180) / Math.PI),
    (R.isEqual = (y, C) => y.x === C.x && y.y === C.y),
    (R.rotationNormalizer = () => {
      let y;
      return (C) => {
        typeof y != "number" && (y = C);
        let z = y - C,
          j = Math.abs(z) + 180,
          k = Math.floor(j / 360);
        return (z < 180 && (C -= k * 360), z > 180 && (C += k * 360), (y = C), C);
      };
    }));
  function x(y, C) {
    return { x: (y.x + C.x) / 2, y: (y.y + C.y) / 2 };
  }
  R.center = x;
  function T(y) {
    let C = 0,
      z = 0;
    y.forEach((Z) => {
      ((C += Z.x), (z += Z.y));
    });
    let j = C / y.length,
      k = z / y.length;
    return { x: j, y: k };
  }
  R.centroid = T;
  function V(y) {
    let C = R.centroid(y),
      z = new Map();
    for (let j = 0; j < y.length; j++) {
      let k = y[j];
      k && z.set(k, Math.atan2(k.y - C.y, k.x - C.x));
    }
    return y.sort((j, k) => (z.get(j) ?? 0) - (z.get(k) ?? 0));
  }
  R.sortClockwise = V;
})((we ||= {}));
function Ks(e) {
  return e * (Math.PI / 180);
}
var it = (() => {
  function e(t, o) {
    return { a: t, b: o };
  }
  return (
    (e.offset = (t, o) => {
      let n = we.angleFromX(t.a, t.b),
        r = Ks(n),
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
        x = (c - l) * (s - i) - (m - u) * (a - r),
        T = (a - r) * (u - i) - (s - i) * (l - r);
      if ((f === 0 && x === 0) || x === 0) return null;
      let V = f / x,
        R = T / x;
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
      let o = so(e.x, t),
        n = so(e.y, t),
        r = so(e.width, t),
        i = so(e.height, t);
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
        x = Math.max(n, i, s, u) - f;
      return { x: c, y: f, width: m, height: x };
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
      return [it(t, o), it(o, n), it(n, r), it(r, t)];
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
        n = it(t, o),
        r = N.edges(e);
      for (let i = 0; i < r.length; i++) {
        let a = r[i];
        if (a && it.intersection(n, a, !0)) {
          let s = $s[i];
          return (Rt(s, () => `Invalid edge name: ${JSON.stringify($s)}`), { edge: a, name: s });
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
  $s = ["top", "right", "bottom", "left"];
function Us(e, t, o) {
  let n = o ? `, use ${o} instead` : "",
    r = `Deprecation warning: ${e} will be removed in version ${t}${n}.`;
  Rs(r);
}
var Uo = class {
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
        Us(
          "Animatable()",
          "2.0.0",
          "the new animation API (https://www.framer.com/api/animation/)"
        ),
        Me(t) ? t : new ti(t)
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
      (e.get = (t, o) => (t == null ? o : Me(t) ? t.get() : t)),
      (e.objectToValues = (t) => {
        if (!t) return t;
        let o = {};
        for (let n in t) {
          let r = t[n];
          Me(r) ? (o[n] = r.get()) : (o[n] = r);
        }
        return o;
      }),
      e
    );
  })(),
  qs = "onUpdate",
  Xs = "finishTransaction";
function Me(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    qs in e &&
    e[qs] instanceof Function &&
    Xs in e &&
    e[Xs] instanceof Function
  );
}
function fm(e, t) {
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
var ti = class {
  constructor(t) {
    this.value = t;
  }
  value;
  observers = new Uo();
  static interpolationFor(t, o) {
    if (Me(t)) return fm(t, o);
  }
  get() {
    return this.value;
  }
  set(t, o) {
    let n = this.value;
    (Me(t) && (t = t.get()), (this.value = t));
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
function mm(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function qo(e) {
  return typeof e != "string" && typeof e != "number";
}
function Xo(e) {
  return e !== null && typeof e < "u" && typeof e != "boolean" && !mm(e);
}
function P(e) {
  return Number.isFinite(e);
}
function QS(e) {
  return P(e) ? e : void 0;
}
var sN = {
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
  Jo = ((a) => (
    (a[(a.FixedNumber = 0)] = "FixedNumber"),
    (a[(a.Percentage = 1)] = "Percentage"),
    (a[(a.Auto = 2)] = "Auto"),
    (a[(a.FractionOfFreeSpace = 3)] = "FractionOfFreeSpace"),
    (a[(a.Viewport = 4)] = "Viewport"),
    (a[(a.FitImage = 5)] = "FitImage"),
    a
  ))(Jo || {});
function kt(e) {
  return St(e) ? !1 : e === 2 || e === 5;
}
function lN(e) {
  return !(!Xo(e) || !qo(e));
}
var oi = {
  quickfix: (e) => (
    (kt(e.widthType) || kt(e.heightType)) && (e.aspectRatio = null),
    P(e.aspectRatio) &&
      (e.left && e.right && (e.widthType = 0),
      e.top && e.bottom && (e.heightType = 0),
      e.left && e.right && e.top && e.bottom && (e.bottom = !1),
      e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
    e.left &&
      e.right &&
      ((e.fixedSize || kt(e.widthType) || P(e.maxWidth)) && (e.right = !1), (e.widthType = 0)),
    e.top &&
      e.bottom &&
      ((e.fixedSize || kt(e.heightType) || P(e.maxHeight)) && (e.bottom = !1), (e.heightType = 0)),
    e
  ),
};
function lo(e) {
  if (typeof e == "string") {
    let t = e.trim();
    if (t === "auto") return 2;
    if (t.endsWith("fr")) return 3;
    if (t.endsWith("%")) return 1;
    if (t.endsWith("vw") || t.endsWith("vh")) return 4;
  }
  return 0;
}
var ni = {
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
        m = oi.quickfix({
          left: P(t) || Me(t),
          right: P(o) || Me(o),
          top: P(n) || Me(n),
          bottom: P(r) || Me(r),
          widthType: lo(i),
          heightType: lo(a),
          aspectRatio: u || null,
          fixedSize: c === !0,
        }),
        f = null,
        x = null,
        T = 0,
        V = 0;
      if (m.widthType !== 0 && typeof i == "string") {
        let C = parseFloat(i);
        i.endsWith("fr") ? ((T = 3), (f = C)) : i === "auto" ? (T = 2) : ((T = 1), (f = C / 100));
      } else i !== void 0 && typeof i != "string" && (f = ie.getNumber(i));
      if (m.heightType !== 0 && typeof a == "string") {
        let C = parseFloat(a);
        a.endsWith("fr")
          ? ((V = 3), (x = C))
          : a === "auto"
            ? (V = 2)
            : ((V = 1), (x = parseFloat(a) / 100));
      } else a !== void 0 && typeof a != "string" && (x = ie.getNumber(a));
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
          widthType: T,
          heightType: V,
          width: f,
          height: x,
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
        l = Ys(e.left, e.right);
      if (a && P(l)) r = a - l;
      else if (o && kt(e.widthType)) r = o.width;
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
      let u = Ys(e.top, e.bottom);
      if (s && P(u)) i = s - u;
      else if (o && kt(e.heightType)) i = o.height;
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
      return Tm(r, i, e, { height: s ?? 0, width: a ?? 0 }, t?.viewport);
    },
    toRect: (e, t = null, o = null, n = !1, r = null) => {
      let i = e.left || 0,
        a = e.top || 0,
        { width: s, height: l } = ni.toSize(e, t, o, r),
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
  ym = 200,
  hm = 200;
function Yo(e, t, o, n) {
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
      if (!n) return xm(e);
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
function xm(e) {
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
function gm(e, t, o, n) {
  return (
    t.minHeight && (e = Math.max(Yo("minHeight", t.minHeight, o, n), e)),
    t.maxHeight && (e = Math.min(Yo("maxHeight", t.maxHeight, o, n), e)),
    e
  );
}
function bm(e, t, o, n) {
  return (
    t.minWidth && (e = Math.max(Yo("minWidth", t.minWidth, o, n), e)),
    t.maxWidth && (e = Math.min(Yo("maxWidth", t.maxWidth, o, n), e)),
    e
  );
}
function Tm(e, t, o, n, r) {
  let i = bm(P(e) ? e : ym, o, n, r),
    a = gm(P(t) ? t : hm, o, n, r);
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
function Ys(e, t) {
  return !P(e) || !P(t) ? null : e + t;
}
var Cm = /^local-module:([a-zA-Z\d]+\/[^:]+)(?::(.+))?$/u,
  Vm = /^module:([a-zA-Z\d]{20})\/([a-zA-Z\d]{20})\/([^:]+)(?::(.+))?$/u;
function pN(e) {
  return e === "codeFile" || e === "shader";
}
function fN(e) {
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
      case "sharedEnum":
        return !0;
      default:
        L(t);
    }
  } catch {
    return !1;
  }
}
function mN(e) {
  return e.kind === "externalModuleExport"
    ? `module:${e.moduleId}/${e.saveId}/${e.file}`
    : e.kind === "localModuleExport"
      ? `local-module:${e.localId}`
      : e.value;
}
function Js(e) {
  return (
    typeof e == "string" && (e = le(e)),
    e?.kind === "externalModule" || e?.kind === "externalModuleExport"
  );
}
function Dt(e) {
  return (
    typeof e == "string" && (e = le(e)),
    e?.kind === "localModule" || e?.kind === "localModuleExport"
  );
}
function Pe(e) {
  return (
    typeof e == "string" && (e = le(e)),
    e?.kind === "externalModuleExport" || e?.kind === "localModuleExport"
  );
}
function yN(e) {
  return (
    typeof e == "string" && (e = le(e)),
    e
      ? e.kind === "externalModule" ||
        e.kind === "externalModuleExport" ||
        e.kind === "localModule" ||
        e.kind === "localModuleExport"
      : !1
  );
}
function uo(e, t, o, n) {
  let r = `${e}/${t}/${o}`,
    i = `${gs().modulesCDN}/${r}`;
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
function vt(e, t) {
  let { type: o, name: n } = Nm(e);
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
function hN(e) {
  let t = e.indexOf("/");
  return [e.substring(0, t), e.substring(t + 1)];
}
function Sm(e, t) {
  return `${e}/${t}`;
}
function Nm(e) {
  let [t, o] = e.split("/", 2);
  if (!t || !o) throw Error(`Invalid local id: ${e}`);
  return { type: t, name: o };
}
function Zs(e, t, o) {
  let n = Sm(e, t);
  return vt(n, o);
}
function le(e) {
  if (!e) return;
  let t = e.match(Cm);
  if (t) {
    h(t[1], "The localId match from the module identifier should be defined.");
    let n = t[1],
      r = t[2];
    return vt(n, r);
  }
  let o = e.match(Vm);
  if (o) {
    let [, n, r, i, a] = o;
    return (
      h(n, "The moduleId match from the module identifier should be defined."),
      h(r, "The saveId match from the module identifier should be defined."),
      h(i, "The path match from the module identifier should be defined."),
      uo(n, r, i, a)
    );
  }
}
function xN(e, t, o, n) {
  if (e.kind === "localModule") return uo(t, o, n);
  if (e.kind === "localModuleExport") return uo(t, o, n, e.exportSpecifier);
  L(e);
}
function gN(e, t) {
  if (e.kind === "externalModule") return vt(t);
  if (e.kind === "externalModuleExport") return vt(t, e.exportSpecifier);
  L(e);
}
function bN(e, t) {
  if (e.kind === "externalModule" || e.kind === "externalModuleExport")
    return uo(e.moduleId, e.saveId, e.file, t);
  if (e.kind === "localModule" || e.kind === "localModuleExport") return vt(e.localId, t);
  L(e);
}
function TN(e) {
  if (e.kind === "externalModule" || e.kind === "localModule") return e;
  if (e.kind === "externalModuleExport") return uo(e.moduleId, e.saveId, e.file);
  if (e.kind === "localModuleExport") return vt(e.localId);
  L(e);
}
function CN(e) {
  return e;
}
function VN(e) {
  let t = e.indexOf(":");
  return t === -1
    ? { localId: e, exportSpecifier: void 0 }
    : { localId: e.slice(0, t), exportSpecifier: e.slice(t + 1) };
}
function SN(e, t) {
  return `#framer/local/${e}/${t}`;
}
function NN(e) {
  return e.startsWith("#framer/local/");
}
function RN(e) {
  return e.startsWith("!missing/");
}
var Lt = ((d) => (
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
))(Lt || {});
function Qs(e, t = class {}) {
  class o extends t {
    __class = Lt[e];
    static displayName = `WithClassDiscriminatorMixin(${e})`;
  }
  return ((o.prototype.__class = e), o);
}
function PN(e, t) {
  ((e.prototype.__class = t), (e.displayName = `WithClassDiscriminatorMixin(${t})`));
}
var Rm = new Set(Object.keys(Lt));
function el(e) {
  return Rm.has(e);
}
function tl(e) {
  if (!el(e)) return !1;
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
      return L(e);
  }
}
function ol(e) {
  return e ? (e === "RootNode" ? !0 : ri(e)) : !1;
}
function ri(e) {
  return e
    ? !!(Im(e) || ii(e) || e === "OverlayNode" || e === "SlotNode" || e === "SlotPropertyNode")
    : !1;
}
function Im(e) {
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
function ii(e) {
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
function nl(e) {
  switch (e) {
    case "CollectionNode":
    case "CollectionItemNode":
    case "ContentManagementNode":
      return !0;
    default:
      return !1;
  }
}
function BN(e) {
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
function AN(e) {
  return e ? tl(e) : !1;
}
function FN(e) {
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
function ON(e) {
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
function GN(e) {
  return D(e, "RootNode");
}
function jN(e) {
  return D(e, "AgentSkillNode");
}
function _N(e) {
  return D(e, "AgentSkillsListNode");
}
function KN(e) {
  return D(e, "DatabaseListNode");
}
function ai(e) {
  return D(e, "FrameNode");
}
function rl(e) {
  return ai(e) && e.layout === "stack";
}
function il(e) {
  return ai(e) && e.layout === "grid";
}
function $N(e) {
  return ai(e) && e.layout !== void 0;
}
function si(e) {
  return !e || (!rl(e) && !il(e)) ? !1 : !!e.dataIdentifier;
}
function Pm(e) {
  return !e || (!rl(e) && !il(e)) || e.dataIdentifier ? !1 : !!e.dataRepeaterArray;
}
function Ee(e) {
  return e ? si(e) || Pm(e) : !1;
}
function wt(e) {
  return D(e, "SmartComponentNode");
}
function Mt(e) {
  return e?.__class === "LayoutTemplateNode";
}
function al(e) {
  return e?.__class === "VectorSetNode";
}
function ze(e) {
  return D(e, "WebPageNode");
}
function UN(e) {
  return e?.__class === "DesignPageNode";
}
function sl(e) {
  return e?.__class === "CanvasPageNode";
}
function qN(e) {
  return D(e, "ContentManagementNode");
}
function XN(e) {
  return e?.__class === "TextNode";
}
function He(e) {
  return D(e, "RichTextNode");
}
function km(e) {
  return D(e, "CodeComponentNode");
}
function YN(e) {
  return D(e, "ShaderNode");
}
function JN(e) {
  return D(e, "OverlayNode");
}
function ll(e) {
  return D(e, "SVGNode");
}
function Zo(e) {
  return D(e, "CollectionNode");
}
function ul(e) {
  return D(e, "CollectionItemNode");
}
function ZN(e) {
  return e?.__class === "BranchNode";
}
function QN(e) {
  return D(e, "BranchesNode");
}
function Qo(e) {
  return D(e, "ShapeContainerNode");
}
function eR(e) {
  return e?.__class === "BooleanShapeNode";
}
function tR(e) {
  return e?.__class === "ShapeGroupNode";
}
function oR(e) {
  return e?.__class === "PathNode";
}
function nR(e) {
  return e?.__class === "RectangleShapeNode";
}
function rR(e) {
  return e?.__class === "StarShapeNode";
}
function iR(e) {
  return e?.__class === "OvalShapeNode";
}
function aR(e) {
  return e?.__class === "PolygonShapeNode";
}
function sR(e) {
  return D(e, "RoutesNode");
}
function lR(e) {
  return D(e, "RedirectRouteNode");
}
function uR(e) {
  return D(e, "ProxyRouteNode");
}
function dR(e) {
  return D(e, "RewriteRouteNode");
}
function cR(e) {
  return D(e, "HeaderRouteNode");
}
function pR(e) {
  return D(e, "FirewallRouteNode");
}
function fR(e) {
  return D(e, "ColorStyleTokenNode");
}
function mR(e) {
  return D(e, "ColorStyleTokenListNode");
}
function yR(e) {
  return D(e, "SharedEnumListNode");
}
function dl(e) {
  return D(e, "SharedEnumNode");
}
function hR(e) {
  return D(e, "ErrorListNode");
}
function xR(e) {
  return e?.__class === "ErrorNode";
}
function gR(e) {
  return e?.__class === "FormPlainTextInputNode";
}
function bR(e) {
  return e?.__class === "FormBooleanInputNode";
}
function TR(e) {
  return e?.__class === "FormSelectNode";
}
function CR(e) {
  return D(e, "ComponentPresetNode");
}
function VR(e) {
  return D(e, "PresetsListNode");
}
function li(e) {
  return e?.__class === "TextStylePresetNode";
}
function SR(e) {
  return li(e) && !e.replicaInfo;
}
function NR(e) {
  return li(e) && !!e.replicaInfo;
}
function RR(e) {
  return e?.__class === "LinkStylePresetNode";
}
function cl(e) {
  return e?.__class === "BlockquoteStylePresetNode";
}
function IR(e) {
  return e?.__class === "TableStylePresetNode";
}
function PR(e) {
  return cl(e) && !e.replicaInfo;
}
function kR(e) {
  return !!e?.replicaInfo && (li(e) || cl(e));
}
function vR(e) {
  return e?.__class === "ImageStylePresetNode";
}
function DR(e) {
  return e?.__class === "InlineCodeStylePresetNode";
}
function en(e) {
  return D(e, "RouteSegmentNode");
}
function LR(e) {
  return D(e, "RouteSegmentRootNode");
}
function pl(e) {
  return D(e, "SlotNode");
}
function tn(e) {
  return D(e, "SlotPropertyNode");
}
function wR(e) {
  return D(e, "EntityFolderNode");
}
function MR(e) {
  return D(e, "EntityReferenceNode");
}
function ER(e) {
  return D(e, "ExternalModulesListNode");
}
function BR(e) {
  return e?.__class === "ExternalModuleNode";
}
function AR(e) {
  return D(e, "AnalyticsScopeNode");
}
function FR(e) {
  return e?.__class === "LocalizationGlossaryNode";
}
function OR(e) {
  return e?.__class === "LocalizationGlossaryItemNode";
}
function WR(e) {
  return D(e, "FunnelNode");
}
function zR(e) {
  return D(e, "FunnelStepNode");
}
function HR(e) {
  return D(e, "FunnelStepActionNode");
}
function vm(e) {
  return e ? km(e) && e.isVectorInstance : !1;
}
function GR(e) {
  if (!vm(e)) return !1;
  let t = e.dynamicVectorSetIdentifier;
  return t?.type === "variableReference" || t?.type === "computedValue";
}
function jR(e) {
  return e?.__class === "CustomCodeScopeNode";
}
function _R(e) {
  return e?.__class === "CustomCodeNode";
}
var fl = "hidden master",
  $R = { isMaster: !1, isExternalMaster: null, replicaInfo: null },
  Dm = "isMaster";
function co(e) {
  return Dm in e;
}
function Et(e) {
  return co(e) && e.isMaster;
}
function UR(e) {
  return co(e) && !!e.isExternalMaster;
}
function qR(e) {
  let t = co(e) ? e.isExternalMaster : null;
  return !!t && t !== fl;
}
function XR(e) {
  return co(e) ? e.isExternalMaster === fl : !1;
}
function po(e) {
  return e ? co(e) && !!e.replicaInfo : !1;
}
function YR(e) {
  return e ? !po(e) : !1;
}
function ml(e) {
  return po(e) && !!e.replicaInfo.inheritsFrom;
}
function Bt(e) {
  return !!e.originalid && !po(e);
}
function JR(e) {
  return !!e.originalid;
}
function yl(e) {
  for (let t of e.ancestors()) if (Et(t)) return !0;
  return !1;
}
function ZR(e) {
  return Et(e) || yl(e);
}
function QR(e, { includeSelf: t } = { includeSelf: !0 }) {
  if (t && Et(e)) return e;
  for (let o of e.ancestors()) if (Et(o)) return o;
  return null;
}
function eI(e) {
  return Bt(e) || yl(e);
}
function At(e) {
  return B(e) && e.length === 4 && e.every(S);
}
function hl(e) {
  return At(e) ? [Math.min(Math.max(e[0], 0), 1), e[1], Math.min(Math.max(e[2], 0), 1), e[3]] : e;
}
function on(e) {
  for (let t of Reflect.ownKeys(e)) {
    let o = e[t];
    !o || (typeof o != "object" && !Bs(o)) || on(o);
  }
  return Object.freeze(e);
}
var Lm = {
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
on(Lm);
var fo = {
  type: "spring",
  ease: [0.44, 0, 0.56, 1],
  duration: 0.3,
  delay: 0,
  stiffness: 500,
  damping: 60,
  mass: 1,
  stagger: 0,
};
on(fo);
var Ft = "type",
  nn = "durationBasedSpring",
  an = "ease",
  wm = "duration",
  Mm = "delay",
  xl = "stiffness",
  gl = "damping",
  Em = "mass",
  pi = [wm, Mm, xl, gl, Em],
  ui = "bounce",
  rn = "stagger";
function mo(e) {
  return e === "spring" || e === "tween" || e === "inertia" || e === !1;
}
function fi(e) {
  return !g(e) || !mo(e[Ft]) || !At(e[an]) ? !1 : pi.every((t) => S(e[t]));
}
function sn(e) {
  return g(e) ? (mo(e[Ft]) || At(e[an]) ? !0 : pi.some((t) => S(e[t]))) : !1;
}
function bl(e) {
  switch (e.type) {
    case "spring":
      return { type: "spring", ...Hm(e), delay: e.delay };
    case "tween":
      return { type: "tween", duration: e.duration, ease: hl(e.ease), delay: e.delay };
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
      L(e.type);
  }
}
var Bm = ["stiffness", "damping", "mass"],
  Am = ["duration", "bounce"],
  Fm = ["ease"];
function Om(e) {
  return "type" in e
    ? e.type === !1
      ? !0
      : e.type !== "tween" || Fm.some((t) => t in e)
        ? !1
        : e.duration === 0
    : !1;
}
function Wm(e) {
  return e.type !== "spring" || Bm.some((t) => t in e) ? !1 : Am.some((t) => t in e);
}
var di = "bounceStiffness",
  ci = "bounceDamping",
  zm = (e) => {
    let t = { ...fo },
      o = e[Ft];
    mo(o) && (t[Ft] = Om(e) ? !1 : o);
    let n = e[an];
    At(n) && (t[an] = n);
    for (let r of pi) {
      let i = e[r];
      S(i) && (t[r] = i);
    }
    return (
      di in e && S(e[di]) && (t[xl] = e[di]),
      ci in e && S(e[ci]) && (t[gl] = e[ci]),
      rn in e && S(e[rn]) && (t[rn] = e[rn]),
      nn in e ? (t[nn] = e[nn]) : Wm(e) && (t[nn] = !0),
      ui in e && (t[ui] = e[ui]),
      t
    );
  };
function Tl(e) {
  return sn(e) && !mo(e[Ft]);
}
function fI(e) {
  return g(e) && mo(e[Ft]) ? e : sn(e) ? zm(e) : fo;
}
function mI(e) {
  return fi(e) && e.type === "tween";
}
function yI(e) {
  return `all ${e.duration}s cubic-bezier(${e.ease.join(",")}) ${e.delay}s`;
}
function Hm(e) {
  return e.type === "spring" && e.durationBasedSpring
    ? { duration: Math.min(e.duration, 10), bounce: e.bounce ?? 0 }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
var hI = (e) => e * 1e3;
var W = ((v) => (
    (v.Boolean = "boolean"),
    (v.Number = "number"),
    (v.MotionValue = "motionvalue"),
    (v.Dimension = "dimension"),
    (v.String = "string"),
    (v.RichText = "richtext"),
    (v.FusedNumber = "fusednumber"),
    (v.Enum = "enum"),
    (v.SegmentedEnum = "segmentedenum"),
    (v.Color = "color"),
    (v.Image = "image"),
    (v.ResponsiveImage = "responsiveimage"),
    (v.File = "file"),
    (v.ComponentInstance = "componentinstance"),
    (v.Slot = "slot"),
    (v.Array = "array"),
    (v.EventHandler = "eventhandler"),
    (v.ChangeHandler = "changehandler"),
    (v.Transition = "transition"),
    (v.BoxShadow = "boxshadow"),
    (v.Link = "link"),
    (v.Date = "date"),
    (v.Object = "object"),
    (v.Font = "font"),
    (v.PageScope = "pagescope"),
    (v.ScrollSectionRef = "scrollsectionref"),
    (v.CustomCursor = "customcursor"),
    (v.Border = "border"),
    (v.Cursor = "cursor"),
    (v.Padding = "padding"),
    (v.BorderRadius = "borderradius"),
    (v.Gap = "gap"),
    (v.CollectionReference = "collectionreference"),
    (v.MultiCollectionReference = "multicollectionreference"),
    (v.TrackingId = "trackingid"),
    (v.VectorSetItem = "vectorsetitem"),
    (v.LinkRelValues = "linkrelvalues"),
    (v.Location = "location"),
    (v.SharedType = "sharedtype"),
    v
  ))(W || {}),
  Gm = {
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
function gI(e) {
  return e.type in Gm;
}
var jm = /^(?![\p{L}\p{M}\d-]*-$)(?!-)[\p{L}\p{M}\d-]+$/u,
  Cl = /^(?:[\p{L}\p{M}\d](?:[\p{L}\p{M}\d-]*[\p{L}\p{M}\d])?\.)+[\p{L}\p{M}]+$/u;
function TI(e, t) {
  return e
    ? t && e === "www"
      ? "InvalidPhrase"
      : (t ? jm : Cl).exec(e)
        ? null
        : "InvalidCharacter"
    : "Empty";
}
function mi(e, t = !1) {
  try {
    let o = new URL(e);
    return o.protocol === "http:" || o.protocol === "https:"
      ? o.hostname === "localhost"
        ? !0
        : Cl.test(o.hostname)
      : !t;
  } catch {
    return !1;
  }
}
function CI(e) {
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
function yi(e) {
  return (
    (e = e.trim()),
    e
      ? mi(e, !0)
        ? { result: "ok", normalizedValue: e }
        : mi(`https://${e}`)
          ? { result: "ok", normalizedValue: `https://${e}` }
          : { result: "error", message: "Please enter a valid URL" }
      : { result: "error", message: "Please enter a valid URL" }
  );
}
var Vl = ":([a-z]\\w*)",
  RI = new RegExp(Vl, "i"),
  hi = new RegExp(Vl, "gi");
var Sl = "type",
  _m = "fetchDataValue";
function ln(e) {
  return g(e) && Sl in e && e[Sl] === _m;
}
function MI(e) {
  return yi(e.url).result !== "error";
}
function EI(e) {
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
function BI(e) {
  if (e.controlProp) return e.controlProp.value;
  let t = e.fallbackValue;
  return (h(!I(t), "fallbackValue must be defined"), t);
}
function AI(e) {
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
function Rl(e, t) {
  if (
    !ln(t) ||
    e.url !== t.url ||
    e.resultKeyPath !== t.resultKeyPath ||
    e.cacheDuration !== t.cacheDuration ||
    e.fallbackValue !== t.fallbackValue
  )
    return !1;
  let o = Nl(e.url),
    n = Nl(t.url);
  if (o.length !== n.length) return !1;
  for (let r in e.variables) if (!pe(e.variables[r], t.variables[r])) return !1;
  return !0;
}
function FI(e, t) {
  let o = yi(e.url);
  return o.result !== "ok"
    ? e.url
    : o.normalizedValue.replaceAll(hi, (i, a) => {
        let s = e.variables[a];
        return s ? (p(s) ? s : t(s)) : "";
      });
}
function Nl(e) {
  let t = e.matchAll(hi),
    o = new Set();
  for (let n of t) {
    let r = n[1];
    r && r.length !== 0 && o.add(r);
  }
  return Array.from(o);
}
var OI = [
  "https://api.fetch.tools/weather?city=:city",
  "https://api.fetch.tools/views",
  "https://api.fetch.tools/location",
  "https://api.fetch.tools/emoji",
];
var Il = {
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
  Km = {
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
function un(e) {
  return p(e) && Object.hasOwn(Il, e);
}
function yo(e) {
  return p(e) && Object.hasOwn(Km, e);
}
var jI = yo,
  $m = { boolean: !0, number: !0, string: !0, color: !0, date: !0, link: !0, image: !0 };
function _I(e) {
  return p(e) && Object.hasOwn($m, e);
}
function KI(e) {
  return jo(Il).filter(e);
}
var Um = { responsiveimage: !0 };
function tP(e) {
  return un(e) ? !0 : p(e) && e in Um;
}
var qm = "type",
  Xm = "valueTransform",
  Ym = [
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
  Jm = new Set(Ym),
  Zm = {
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
function Qm(e) {
  return Jm.has(e);
}
function ey(e) {
  return Object.hasOwn(Zm, e);
}
var ty = {
  enumToDisplayName: !0,
  convertFromEnum: !0,
  convertFromBoolean: !0,
  convertFromString: !0,
  arrayToArray: !0,
  toDateString: !0,
};
function oy(e) {
  return Object.hasOwn(ty, e);
}
var ny = {
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
  cn = zs(ny);
function oP() {
  return cn;
}
function ry(e) {
  let t = xi[e];
  return !(Ve(t) || I(t));
}
function nP(e) {
  return ry(e.name);
}
function rP(e) {
  return Qm(e.name) && kl(e.name) !== null;
}
function iy(e) {
  return ey(e) || oy(e);
}
var Pl = [
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
function iP(e) {
  return Pl.includes(e);
}
var xi = {
    contains: ["string", "multicollectionreference"],
    containsAny: ["multicollectionreference"],
    containsAll: ["multicollectionreference"],
    endsWith: ["string"],
    startsWith: ["string"],
    prefix: ["string"],
    suffix: ["string"],
    equals: ["string", "boolean", "number", "enum", "date", "collectionreference"],
    isSet: Pl,
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
  ay = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of cn) {
        let o = xi[t];
        if (o)
          for (let n of o) {
            let r = e.get(n);
            r ? r.push(t) : e.set(n, [t]);
          }
      }
      return e;
    };
  })();
function sy(e) {
  return ay().get(e);
}
function aP(e) {
  let t = sy(e);
  return !!(t && t.length > 0);
}
function kl(e) {
  return xi[e];
}
var ly = {
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
function sP(e) {
  return ly[e];
}
var gi = {
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
  uy = (() => {
    let e = null;
    return () => {
      if (e) return e;
      e = new Map();
      for (let t of cn) {
        let o = gi[t];
        for (let n of o) {
          let r = e.get(n);
          r ? r.push(t) : e.set(n, [t]);
        }
      }
      return e;
    };
  })();
function lP(e) {
  return uy().get(e);
}
function vl(e) {
  return gi[e];
}
function uP(e, t) {
  return iy(e.name) ? gi[e.name].includes(t) : !1;
}
function dP(e) {
  switch (e.name) {
    case "convertFromEnum":
    case "convertFromBoolean":
    case "convertFromString":
      return e.outputType;
    default: {
      let t = vl(e.name);
      h(t.length === 1);
      let o = t[0];
      return (h(o, "Value transform output type must be defined"), o);
    }
  }
}
var cP = new Set(["convertFromBoolean", "equals", "isSet"]),
  Dl = {
    isSet: "Isn\u2019t set",
    equals: "Doesn\u2019t equal",
    startsWith: "Doesn\u2019t start with",
    endsWith: "Doesn\u2019t end with",
    contains: "Doesn\u2019t contain",
    greaterThan: "Less than or equal",
    lessThan: "Greater than or equal",
    isIncludedIn: "Isn\u2019t included in",
  };
function Ll(e) {
  return Object.hasOwn(Dl, e);
}
function pP(e, t) {
  if (t) return (h(Ll(e)), Dl[e]);
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
      return Le(e);
  }
}
var dy = new Set(["prefix", "suffix"]);
function cy(e) {
  return dy.has(e);
}
var dn;
function py(e) {
  return (
    dn ||
      (dn = new Set(
        cn.filter((t) => {
          let o = kl(t);
          if (o?.length !== 1 || o[0] !== "array") return !1;
          let n = vl(t);
          return n.length !== 1 ? !1 : n[0] === "array";
        })
      )),
    dn.has(e)
  );
}
function fP(e) {
  return py(e) || cy(e);
}
function mP(e, t) {
  let o = e.findIndex((i) => i.id === t),
    n = e[o];
  if (!n) return null;
  let r = 1;
  if (Ll(n.name)) for (let i = o + 1, a = e.length; i < a && e[i]?.name === "negate"; i++) r++;
  return { start: o, length: r };
}
function fy(e) {
  return g(e) && e[qm] === Xm;
}
function wl(e, t) {
  if (!fy(t) || e.name !== t.name) return !1;
  for (let o of jo(e)) if (o !== "id" && e[o] !== t[o]) return !1;
  return !0;
}
var yP = ["standard", "compact"],
  hP = ["short", "long"],
  xP = ["decimal", "currency", "unit"],
  gP = ["symbol", "narrowSymbol", "code", "name"],
  bP = ["short", "narrow", "long"],
  TP = ["year", "month", "day", "hour12", "hour24", "minute"];
var Ml = "type",
  ho = "variableReference";
function w(e) {
  return g(e) && Ml in e && e[Ml] === ho;
}
function El(e, t) {
  return { type: ho, id: e, providerId: t };
}
function bi(e, t) {
  return { type: ho, id: e, providerId: t };
}
function pn(e, t) {
  return w(t) ? e.id === t.id && e.providerId === t.providerId : !1;
}
var Bl = "transform";
function SP(e) {
  return w(e) && e.providerId === Bl;
}
function NP(e) {
  return { type: ho, id: e, providerId: Bl };
}
var Al = "payload",
  Fl = ".";
function RP(e) {
  return w(e) && e.providerId === Al;
}
function IP(e) {
  return { type: ho, id: e.join(Fl), providerId: Al };
}
function PP(e) {
  let t = my(e.id);
  if (!t.some((o) => o.length === 0)) return t;
}
function my(e) {
  return e.split(Fl);
}
var Ol = "type",
  Ti = "computedValue",
  yy = {
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
function EP(e) {
  return p(e) && Object.hasOwn(yy, e);
}
function he(e) {
  return g(e) && Ol in e && e[Ol] === Ti;
}
function BP(e) {
  return he(e) && ln(e.startValue);
}
function Wl(e) {
  return he(e) && w(e.startValue);
}
function AP(e) {
  return (
    he(e) &&
    e.transforms.length === 1 &&
    e.transforms[0]?.name === "toDateString" &&
    e.transforms[0]?.display === "relative"
  );
}
function FP(e) {
  return he(e) && e.transforms.some((t) => t.name === "toDateString");
}
function OP(e) {
  return he(e) && e.transforms.some((t) => t.name === "toDateString" && t.display !== "relative");
}
function zl(e, t) {
  return !he(t) ||
    e.outputType !== t.outputType ||
    e.startValue.type !== t.startValue.type ||
    (w(e.startValue) && !pn(e.startValue, t.startValue)) ||
    (ln(e.startValue) && !Rl(e.startValue, t.startValue)) ||
    e.transforms.length !== t.transforms.length
    ? !1
    : e.transforms.every((o, n) => wl(o, t.transforms[n]));
}
function Hl(e, t, o) {
  return w(t)
    ? { type: Ti, outputType: e, startValue: t, transforms: o }
    : { type: Ti, outputType: e, startValue: t, transforms: o };
}
function A(e) {
  return w(e) || he(e);
}
function Gl(e, t) {
  return w(e) ? pn(e, t) : zl(e, t);
}
var qP = { isVariant: void 0, isBreakpoint: void 0, gesture: void 0, variantTransition: void 0 },
  hy = "isVariant";
function xy(e) {
  return hy in e;
}
var XP = ["hover", "pressed"],
  gy = "gesture";
function _l(e) {
  return gy in e;
}
function xe(e) {
  return xy(e) && e.isVariant === !0;
}
function Kl(e) {
  return xe(e) && Et(e);
}
function YP(e) {
  for (let t of e.ancestors()) if (Kl(t)) return t;
  return null;
}
function JP(e) {
  return xe(e) ? !_l(e) || !e.gesture : !1;
}
function jl(e) {
  return $l(e) && ml(e) && _l(e) && !!e.gesture;
}
function ZP(e) {
  if (jl(e)) return !0;
  if (!Bt(e)) return !1;
  for (let t of e.ancestors()) if (jl(t)) return !0;
  return !1;
}
function QP(e) {
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
      L(e);
  }
}
function ek(e) {
  return xe(e) || by(e);
}
function by(e) {
  return e.cache.insideVariant;
}
function $l(e) {
  return po(e) && xe(e);
}
function Ty(e) {
  return Bt(e) && e.cache.insideVariant;
}
function tk(e) {
  return $l(e) || Ty(e);
}
var Cy = "isBreakpoint";
function Vy(e) {
  return Cy in e;
}
function st(e) {
  return e ? xe(e) && Vy(e) && e.isBreakpoint === !0 : !1;
}
function ok(e) {
  return st(e) && Kl(e);
}
function nk(e) {
  return e ? xe(e) && !st(e) : !1;
}
function rk(e) {
  return xe(e) ? fi(e.variantTransition) || A(e.variantTransition) || Tl(e.variantTransition) : !1;
}
var Sy = Ho("serializeJS"),
  Ny = {
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
  Ul = new Intl.Collator("en", { sensitivity: "base" }).compare;
function fn(e, t, o) {
  let n = ql(o, t),
    r = [];
  for (let [i, a] of Object.entries(t)) {
    let s = e.serializeKeyValue(i, a, n);
    s && r.push(s);
  }
  return (
    t instanceof lt
      ? (lt.isSorted(t) && r.sort(Ul),
        r.unshift(...lt.spreadsAtStart(t).map(e.serializeSpread)),
        r.push(...lt.spreadsAtEnd(t).map(e.serializeSpread)))
      : r.sort(Ul),
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
    let o = ql(t, e),
      n = [];
    for (let r of e) {
      let i = U(r, o);
      I(i) || n.push(i);
    }
    return `[${n.join(", ")}]`;
  } else if (typeof e == "object") return fn(Ny, e, t);
}
function ql(e, t) {
  if (e.has(t))
    throw (
      Sy.error("Encountered circular reference to object while serializing:", t),
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
function Xl(e) {
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
function lk(e) {
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
function mn(e, ...t) {
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
})((mn ||= {}));
var Yl = Symbol("jst template literal");
function xo(e, ...t) {
  if (t.every((n) => p(n) || S(n) || te(n) || Ve(n))) {
    let n = [e[0]];
    return (
      t.forEach((r, i) => {
        n.push(String(r), e[i + 1]);
      }),
      n.join("")
    );
  }
  let o = ["`", Ci(e[0])];
  return (
    t.forEach((n, r) => {
      (p(n)
        ? o.push(Ci(n))
        : typeof n == "number" || typeof n == "boolean" || Ve(n)
          ? o.push(String(n))
          : n instanceof F && F.hasMarker(n, Yl)
            ? o.push(n.substring(1, n.length - 1))
            : o.push("${", U(n), "}"),
        o.push(Ci(e[r + 1])));
    }),
    o.push("`"),
    F.withMarker(Yl, o.join(""))
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
      (h(typeof u.index == "number", "unexpected non-number in match"),
        a.push(n.substring(l, u.index)),
        s.push(typeof i == "function" ? i(u[0], ...u.slice(1)) : i),
        (l = u.index + u[0].length));
    return (a.push(n.substring(l)), o(a, ...s));
  }
  o.replaceAll = t;
})((xo ||= {}));
var Ry = /(?<char>[A-Z])/gu;
function Iy(e) {
  return e.replace(Ry, "-$<char>").toLowerCase();
}
var Py = new Set(["viewBox", "stdDeviation"]),
  ky = {
    serializeSpread(e) {
      return `{...${e}}`;
    },
    serializeKeyValue(e, t, o) {
      if (I(t) || F.isUndefined(t)) return;
      let n = Py.has(e) ? e : Iy(e);
      if (t === !0 || F.isTrue(t)) return n;
      if (S(t)) return `${n}="${t}"`;
      let r = U(t, o);
      if (r !== "") return `${n}=${r}`;
    },
    joinObject(e) {
      return e.join(" ");
    },
  };
function Jl(e) {
  return e ? new F(" " + fn(ky, e, new Set())) : mn``;
}
var Vi = Symbol("svg tag");
function Ql(e, ...t) {
  let o = [e[0]];
  return (
    t.forEach((n, r) => {
      o.push(U(n), e[r + 1]);
    }),
    F.withMarker(Vi, o.join(""))
  );
}
((r) => {
  function e(i, a, s) {
    return s && U(s)
      ? r`<${new F(i)}${Jl(a)}>${r.children(s)}</${new F(i)}>`
      : r`<${new F(i)}${Jl(a)}/>`;
  }
  r.tag = e;
  function t(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  r.applyTransforms = t;
  function o(i) {
    return F.withMarker(Vi, i);
  }
  r.fromTrustedString = o;
  function n(i) {
    return (h(F.hasMarker(i, Vi), "SVG children can only be svg"), i);
  }
  r.children = n;
})((Ql ||= {}));
var vy = {
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
function Zl(e) {
  return e ? new F(" " + fn(vy, e, new Set())) : mn``;
}
var Si = Symbol("jsx tag");
function eu(e, ...t) {
  let o = [e[0]];
  return (
    t.forEach((n, r) => {
      o.push(U(n), e[r + 1]);
    }),
    F.withMarker(Si, o.join(""))
  );
}
((r) => {
  function e(i) {
    return F.hasMarker(i, Si) ? i : r`{${i}}`;
  }
  r.children = e;
  function t(i) {
    return F.withMarker(Si, i);
  }
  r.fromTrustedString = t;
  function o(i, a, s) {
    return (
      (i = Xl(i) ? i : new F(i)),
      s && U(s) ? r`<${i}${Zl(a)}>${r.children(s)}</${i}>` : r`<${i}${Zl(a)}/>`
    );
  }
  r.tag = o;
  function n(i, a) {
    for (let s of a) i = s?.(i) ?? i;
    return i;
  }
  r.applyTransforms = n;
})((eu ||= {}));
function Ci(e) {
  return e ? e.replace(/[`\\]|\$(?=\{)/gu, "\\$&") : "";
}
var go = {
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
function ot(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function je(e) {
  let t = yn(e);
  return t !== void 0 ? (e.includes("%") ? t / 100 : t) : 0;
}
function yn(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
var Ni = ((i) => (
    (i.RGB = "rgb"),
    (i.HSL = "hsl"),
    (i.HSV = "hsv"),
    (i.HEX = "hex"),
    (i.NAME = "name"),
    i
  ))(Ni || {}),
  tu = ((i) => (
    (i.RGB = "rgb"),
    (i.RGBA = "rgba"),
    (i.HSL = "hsl"),
    (i.HSLA = "hsla"),
    (i.HUSL = "husl"),
    i
  ))(tu || {});
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
var fe = new Y();
function nu(e, t, o) {
  return (
    (fe.rgb_r = e / 255),
    (fe.rgb_g = t / 255),
    (fe.rgb_b = o / 255),
    fe.rgbToHsluv(),
    { h: fe.hsluv_h, s: fe.hsluv_s, l: fe.hsluv_l }
  );
}
function ru(e, t, o, n = 1) {
  return (
    (fe.hsluv_h = e),
    (fe.hsluv_s = t),
    (fe.hsluv_l = o),
    fe.hsluvToRgb(),
    { r: fe.rgb_r * 255, g: fe.rgb_g * 255, b: fe.rgb_b * 255, a: n }
  );
}
function Ot(e, t, o, n) {
  let r = Math.round(e),
    i = Math.round(t * 100),
    a = Math.round(o * 100);
  return n === void 0 || n === 1
    ? "hsv(" + r + ", " + i + "%, " + a + "%)"
    : "hsva(" + r + ", " + i + "%, " + a + "%, " + n + ")";
}
function iu(e, t, o) {
  return {
    r: ot(e) ? ue(e, 255) * 255 : 0,
    g: ot(t) ? ue(t, 255) * 255 : 0,
    b: ot(o) ? ue(o, 255) * 255 : 0,
  };
}
function Pi(e, t, o, n) {
  let r = [
    Ii(Math.round(e).toString(16)),
    Ii(Math.round(t).toString(16)),
    Ii(Math.round(o).toString(16)),
  ];
  return n &&
    r[0].charAt(0) === r[0].charAt(1) &&
    r[1].charAt(0) === r[1].charAt(1) &&
    r[2].charAt(0) === r[2].charAt(1)
    ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0)
    : r.join("");
}
function Wt(e, t, o) {
  let n,
    r,
    i = ue(e, 255),
    a = ue(t, 255),
    s = ue(o, 255),
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
function Ri(e, t, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6 ? e + (t - e) * 6 * o : o < 1 / 2 ? t : o < 2 / 3 ? e + (t - e) * (2 / 3 - o) * 6 : e
  );
}
function au(e, t, o) {
  let n, r, i;
  if (((e = ue(e, 360)), (t = ue(t * 100, 100)), (o = ue(o * 100, 100)), t === 0)) n = r = i = o;
  else {
    let a = o < 0.5 ? o * (1 + t) : o + t - o * t,
      s = 2 * o - a;
    ((n = Ri(s, a, e + 1 / 3)), (r = Ri(s, a, e)), (i = Ri(s, a, e - 1 / 3)));
  }
  return { r: n * 255, g: r * 255, b: i * 255 };
}
function ki(e, t, o) {
  ((e = ue(e, 255)), (t = ue(t, 255)), (o = ue(o, 255)));
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
function su(e, t, o) {
  ((e = ue(e, 360) * 6), (t = ue(t * 100, 100)), (o = ue(o * 100, 100)));
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
function ue(e, t) {
  let o, n;
  if ((typeof t == "string" ? (o = parseFloat(t)) : (o = t), typeof e == "string")) {
    Dy(e) && (e = "100%");
    let r = Ly(e);
    ((n = Math.min(o, Math.max(0, parseFloat(e)))), r && (n = Math.floor(n * o) / 100));
  } else n = e;
  return Math.abs(n - o) < 1e-6 ? 1 : (n % o) / o;
}
function Dy(e) {
  return typeof e == "string" && e.includes(".") && parseFloat(e) === 1;
}
function Ly(e) {
  return typeof e == "string" && e.includes("%");
}
function Ii(e) {
  return e.length === 1 ? "0" + e : "" + e;
}
var Be = (() => {
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
function bo(e) {
  if (e.includes("gradient(") || e.includes("var(")) return !1;
  let t = /^[\s,#]+/u,
    o = e.replace(t, "").trimEnd().toLowerCase(),
    n = go[o];
  if ((n && (o = n), o === "transparent")) return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  let r;
  return (r = Be.rgb.exec(o))
    ? {
        r: parseInt(r[1] ?? ""),
        g: parseInt(r[2] ?? ""),
        b: parseInt(r[3] ?? ""),
        a: 1,
        format: "rgb",
      }
    : (r = Be.rgba.exec(o))
      ? {
          r: parseInt(r[1] ?? ""),
          g: parseInt(r[2] ?? ""),
          b: parseInt(r[3] ?? ""),
          a: parseFloat(r[4] ?? ""),
          format: "rgb",
        }
      : (r = Be.hsl.exec(o))
        ? { h: parseInt(r[1] ?? ""), s: je(r[2] ?? ""), l: je(r[3] ?? ""), a: 1, format: "hsl" }
        : (r = Be.hsla.exec(o))
          ? {
              h: parseInt(r[1] ?? ""),
              s: je(r[2] ?? ""),
              l: je(r[3] ?? ""),
              a: parseFloat(r[4] ?? ""),
              format: "hsl",
            }
          : (r = Be.hsv.exec(o))
            ? { h: parseInt(r[1] ?? ""), s: je(r[2] ?? ""), v: je(r[3] ?? ""), a: 1, format: "hsv" }
            : (r = Be.hsva.exec(o))
              ? {
                  h: parseInt(r[1] ?? ""),
                  s: je(r[2] ?? ""),
                  v: je(r[3] ?? ""),
                  a: parseFloat(r[4] ?? ""),
                  format: "hsv",
                }
              : (r = Be.hex8.exec(o))
                ? {
                    r: ge(r[1] ?? ""),
                    g: ge(r[2] ?? ""),
                    b: ge(r[3] ?? ""),
                    a: ou(r[4] ?? ""),
                    format: n ? "name" : "hex",
                  }
                : (r = Be.hex6.exec(o))
                  ? {
                      r: ge(r[1] ?? ""),
                      g: ge(r[2] ?? ""),
                      b: ge(r[3] ?? ""),
                      a: 1,
                      format: n ? "name" : "hex",
                    }
                  : (r = Be.hex4.exec(o))
                    ? {
                        r: ge(`${r[1]}${r[1]}`),
                        g: ge(`${r[2]}${r[2]}`),
                        b: ge(`${r[3]}${r[3]}`),
                        a: ou(r[4] + "" + r[4]),
                        format: n ? "name" : "hex",
                      }
                    : (r = Be.hex3.exec(o))
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
function ou(e) {
  return ge(e) / 255;
}
var wy =
  /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u;
function lu(e) {
  let t = wy.exec(e);
  if (!t) return null;
  let { r: o = "0", g: n = "0", b: r = "0", a: i } = t.groups ?? {};
  return { r: parseFloat(o), g: parseFloat(n), b: parseFloat(r), a: i ? parseFloat(i) : 1 };
}
function vi(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function uu({ r: e, g: t, b: o, a: n }) {
  return { r: vi(e), g: vi(t), b: vi(o), a: n };
}
function Di(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function du({ r: e, g: t, b: o, a: n }) {
  return { r: Di(e), g: Di(t), b: Di(o), a: n };
}
var My = (e) => {
    let { r: t, g: o, b: n, a: r } = uu(e);
    return {
      x: 0.486570948648216 * t + 0.265667693169093 * o + 0.1982172852343625 * n,
      y: 0.2289745640697487 * t + 0.6917385218365062 * o + 0.079286914093745 * n,
      z: 0 * t + 0.0451133818589026 * o + 1.043944368900976 * n,
      a: r,
    };
  },
  Ey = ({ x: e = 0, y: t = 0, z: o = 0, a: n = 1 }) =>
    du({
      r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * o,
      g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * o,
      b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * o,
      a: n,
    }),
  By = (e) => {
    let { r: t, g: o, b: n, a: r } = uu(e);
    return {
      x: 0.4123907992659593 * t + 0.357584339383878 * o + 0.1804807884018343 * n,
      y: 0.2126390058715102 * t + 0.715168678767756 * o + 0.0721923153607337 * n,
      z: 0.0193308187155918 * t + 0.119194779794626 * o + 0.9505321522496607 * n,
      a: r,
    };
  },
  Ay = ({ x: e = 0, y: t = 0, z: o = 0, a: n = 1 }) =>
    du({
      r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * o,
      g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * o,
      b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * o,
      a: n,
    });
function cu({ r: e, g: t, b: o, a: n }) {
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
function Fy(e) {
  return (e = e % 360) < 0 ? e + 360 : e;
}
function Li({ h: e = 0, s: t = 0, v: o = 0, a: n = 1 }) {
  let r = Fy(e),
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
function wi(e) {
  return Ay(By(e));
}
function pu(e) {
  return Ey(My(e));
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
    return cu(this);
  }
  rgb() {
    return pu(this);
  }
  hsl() {
    return Wt(this.r, this.g, this.b);
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
        return new e(Li(t));
      case "srgb":
        return new e(wi(Li(t)));
    }
  }
  static fromRGB(t) {
    return new e(
      wi({
        r: Math.round((t.r / 255) * 1e4) / 1e4,
        g: Math.round((t.g / 255) * 1e4) / 1e4,
        b: Math.round((t.b / 255) * 1e4) / 1e4,
        a: t.a ?? 1,
      })
    );
  }
  static fromRGBString(t) {
    let o = b(t);
    if (o) return e.fromRGB(o);
  }
  static fromString(t) {
    if (!e.isP3String(t)) return;
    let o = lu(t);
    if (o) return new e({ r: o.r, g: o.g, b: o.b, a: o.a });
  }
  static srgbFromValue(t) {
    if (!ee(t) || !b.isP3String(t)) return t;
    let o = e.fromString(t);
    return o ? o.toString("srgb") : t;
  }
  static multiplyAlpha(t, o) {
    return new e({ r: t.r, g: t.g, b: t.b, a: t.a * o });
  }
};
function Mk(e) {
  return dt.srgbFromValue(e);
}
var fu = new Map(),
  b = (() => {
    function e(r, i, a, s) {
      if (typeof r == "string") {
        let u = fu.get(r);
        return u || ((u = t(r)), u === void 0 ? { ...e("black"), isValid: !1 } : (fu.set(r, u), u));
      }
      let l = t(r, i, a, s);
      return l !== void 0 ? l : { ...e("black"), isValid: !1 };
    }
    function t(r, i, a, s) {
      if (r === "") return;
      let l = Oy(r, i, a, s);
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
      (e.isColorString = (r) => (typeof r == "string" ? bo(r) !== !1 : !1)),
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
      (e.toHex = (r, i = !1) => Pi(r.r, r.g, r.b, i)),
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
      (e.toHusl = (r) => ({ ...nu(r.r, r.g, r.b), a: r.roundA })),
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
        let i = ki(r.r, r.g, r.b);
        return { h: i.h * 360, s: i.s, v: i.v, a: r.a };
      }),
      (e.toHsvString = (r) => {
        let i = ki(r.r, r.g, r.b),
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
        let i = Pi(r.r, r.g, r.b, !0);
        for (let a of Object.keys(go)) if (go[a] === i) return a;
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
            x = m.h,
            T = x - f;
          T > 180 ? (T = x - 360 - f) : T < -180 && (T = x + 360 - f);
          let V = {
            h: Ge(a, [0, 1], [f, f + T], s),
            s: Ge(a, [0, 1], [c.s, m.s], s),
            l: Ge(a, [0, 1], [c.l, m.l], s),
            a: Ge(a, [0, 1], [r.a, i.a], s),
          };
          o.isHSL(l) ? (u = e(V)) : (u = e(ru(V.h, V.s, V.l, V.a)));
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
      (e.rgbToHsl = (r, i, a) => Wt(r, i, a)),
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
function Oy(e, t, o, n = 1) {
  let r;
  return (
    typeof e == "number" &&
    !Number.isNaN(e) &&
    typeof t == "number" &&
    !Number.isNaN(t) &&
    typeof o == "number" &&
    !Number.isNaN(o)
      ? (r = Mi({ r: e, g: t, b: o, a: n }))
      : typeof e == "string"
        ? (r = Wy(e))
        : typeof e == "object" &&
          (e.hasOwnProperty("r") && e.hasOwnProperty("g") && e.hasOwnProperty("b")
            ? (r = Mi(e))
            : (r = mu(e))),
    r
  );
}
function Wy(e) {
  let t = bo(e);
  if (t) return t.format === "hsl" ? mu(t) : t.format === "hsv" ? zy(t) : Mi(t);
}
function zy(e) {
  let t = su(e.h, e.s, e.v);
  return { ...Wt(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? yu(e.a) : 1 };
}
function Mi(e) {
  let t = iu(e.r, e.g, e.b);
  return { ...Wt(t.r, t.g, t.b), ...t, format: "rgb", a: e.a !== void 0 ? yu(e.a) : 1 };
}
function mu(e) {
  let t,
    o,
    n,
    r = { r: 0, g: 0, b: 0 },
    i = { h: 0, s: 0, l: 0 };
  return (
    (t = ot(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (o = ot(e.s) ? e.s : 1),
    typeof e.s == "string" && (o = yn(e.s)),
    (n = ot(e.l) ? e.l : 0.5),
    typeof e.l == "string" && (n = yn(e.l)),
    (r = au(t, o, n)),
    (i = { h: t, s: o, l: n }),
    { ...r, ...i, a: e.a === void 0 ? 1 : e.a, format: "hsl" }
  );
}
function yu(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function hn(e) {
  if (!ee(e) || e.charAt(e.length - 1) !== "%") return !1;
  let o = e.slice(0, -1),
    n = parseFloat(o);
  return Oe(n);
}
function Ak(e) {
  let t = e.slice(0, -1),
    o = parseFloat(t);
  return Oe(o) ? o : 50;
}
function zk(e) {
  return e ? ol(e.__class) : !1;
}
function Hk(e) {
  return e ? ri(e.__class) : !1;
}
function ct(e) {
  return e ? ii(e.__class) : !1;
}
function Gk(e) {
  return e ? nl(e.__class) : !1;
}
function jk(e, t) {
  let o = e.getNodeParent(t);
  return o === null || !ct(o);
}
function _k(e, t) {
  if (!ct(t)) return !1;
  let o = e.getNodeParent(t);
  return o === null ? !0 : !ct(o) && !Qo(o);
}
var To = Symbol("Not Found");
function xn(e) {
  return e === To;
}
function hu(e) {
  return e !== To;
}
function Ei(e) {
  return hu(e) && !It(e);
}
function Uk(e) {
  return hu(e) && e !== void 0;
}
function qk(e) {
  return Ei(e) && e !== void 0;
}
function Hy(e, t) {
  return A(e) ? !Gl(e, t) : e !== t;
}
function xu(e, t, o, n) {
  let r = t[e];
  if (It(r)) return;
  let i = o[e],
    a = n ? n(i) : i;
  xn(r) ? (t[e] = a) : Hy(a, r) && (t[e] = io);
}
var ov = { codeComponentIdentifier: "", dynamicVectorSetIdentifier: void 0 },
  Gy = "codeComponentIdentifier";
function gn(e) {
  return e.hasProp(Gy);
}
function nv(e, t) {
  !gn(e) ||
    !Pe(e.codeComponentIdentifier) ||
    (t.codeComponentIdentifiers.add(e.codeComponentIdentifier),
    xu("dynamicVectorSetIdentifier", t, e));
}
var bn = ((k) => (
    (k.scroll = "framer/Scroll"),
    (k.page = "framer/Page"),
    (k.stack = "framer/Stack"),
    (k.prototype = "framer/Prototype"),
    (k.device = "__builtin/Device"),
    (k.legacyDevice = "@framer/framer.default/./Device.tsx_Device"),
    (k.legacyUnsplash = "@framer/framer.default/./Unsplash.tsx_Unsplash"),
    (k.navigationAction = "framer/useNavigate"),
    (k.openURLAction = "framer/useOpenURL"),
    (k.consoleLogAction = "framer/useLog"),
    (k.setVariantAction = "framer/useSetVariant"),
    (k.triggerEventAction = "framer/useTriggerEvent"),
    (k.showOverlayAction = "framer/useShowOverlay"),
    (k.showRelativeOverlayAction = "framer/useShowRelativeOverlay"),
    (k.loadMoreAction = "framer/useLoadMore"),
    (k.carouselNavigationAction = "framer/useCarouselNavigation"),
    (k.goToCarouselPageAction = "framer/useGoToCarouselPage"),
    (k.dismissOverlayAction = "framer/useDismissOverlay"),
    (k.setLocaleAction = "framer/useSetLocale"),
    (k.setVariableValueAction = "framer/useSetVariableValue"),
    (k.resetVariableValuesAction = "framer/useResetVariableValues"),
    k
  ))(bn || {}),
  jy = new Set(Object.values(bn)),
  iv = new Set(Object.values(bn).filter((e) => e !== "framer/Prototype"));
function av(e) {
  return jy.has(e);
}
var _y = new Set(["framer/Stack", "framer/Page", "framer/Scroll"]);
function pt(e) {
  return pl(e) || tn(e) ? !1 : !gn(e) || Ky(e);
}
function cv(e) {
  return gn(e) && e.codeComponentIdentifier === "__builtin/Device";
}
function Ky(e) {
  return _y.has(e.codeComponentIdentifier);
}
var $y = "fillOpacity";
function Cv(e) {
  return $y in e;
}
var Vv = { fillOpacity: void 0 },
  Uy = "fillType",
  qy = "fillEnabled",
  Xy = "supportsGradient",
  Yy = "fillImageLocalized";
function zt(e) {
  return Uy in e && pt(e);
}
function Bi(e) {
  return qy in e && pt(e);
}
function Sv(e) {
  return zt(e) ? (Bi(e) ? !!e.fillEnabled : !0) : !1;
}
function Nv(e) {
  return Yy in e;
}
function Jy(e) {
  return Xy in e && pt(e);
}
function gu(e) {
  return pt(e) ? (Jy(e) ? e.supportsGradient() : zt(e)) : !1;
}
function Zy(e) {
  return He(e) || gu(e);
}
function Rv(e) {
  return Zy(e) && !(ct(e) || Qo(e) || ll(e));
}
function bu(e) {
  return e === "linear-gradient" || e === "radial-gradient" || e === "conic-gradient";
}
function Iv(e) {
  return gu(e) ? bu(e.fillType) : e.getFills().filter(Boolean).length;
}
function Pv(e) {
  return e.fillEnabled && e.fillType === "image" && e.fillImage !== null;
}
function kv(e) {
  return zt(e) && hn(e.fillImagePositionX) && hn(e.fillImagePositionY);
}
function Tu(e) {
  return Bi(e) && !e.fillEnabled ? !1 : zt(e) && e.fillType === "image";
}
function Qy(e) {
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
      L(e.fillType);
  }
}
function vv(e) {
  return !zt(e) || (Bi(e) && !e.fillEnabled) ? !1 : !Qy(e);
}
function Dv(e) {
  switch (e) {
    case void 0:
    case "contain":
      return "fit";
    default:
      return "fill";
  }
}
function eh(e) {
  return !e || !zt(e) ? !1 : bu(e.fillType);
}
function Lv(e) {
  if (eh(e) && !I(e.fillType))
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
        L(e.fillType);
    }
}
function wv(e, t, o) {
  let n = o === "conic-gradient" ? 360 : 100,
    r = o === "conic-gradient" ? "deg" : "%";
  return xo.join(
    Array.from({ length: e }).map((i, a) => xo`${t} ${Math.round((a / (e - 1)) * n)}${r}`),
    ", "
  );
}
var th = ["left", "center", "right"],
  oh = new Set(th),
  nh = ["top", "center", "bottom"],
  rh = new Set(nh);
function Mv(e, t) {
  return p(e)
    ? ((t === "y" || t === "fillImagePositionY") && rh.has(e)) ||
      ((t === "x" || t === "fillImagePositionX") && oh.has(e))
      ? !0
      : hn(e)
    : !1;
}
var ih = {
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
function Cu(e) {
  let t = ("" + e).trim().toLowerCase(),
    o = t.lastIndexOf(".");
  return ih[~o ? t.substring(++o) : t];
}
var ah = { auto: !0, lossless: !0, small: !0, medium: !0, large: !0, full: !0 };
function Vu(e) {
  return Gs(e) && e in ah;
}
var Tn = "framer/asset-reference,";
function sh(e) {
  return e.startsWith(`data:${Tn}`);
}
function _v(e) {
  return Cu(e)?.startsWith("image/") ?? !1;
}
var Su = "originalFilename",
  Nu = "packageIdentifier",
  Ru = "preferredSize",
  Iu = "presetName",
  Pu = "width",
  ku = "height";
function vu(e, t = null, o = null, n = null, r = null, i = null) {
  h(e !== "", "Can\u2019t create asset reference for empty identifier");
  let a = new URL(`data:${Tn}${e}`);
  return (
    o && a.searchParams.set(Su, o),
    t && a.searchParams.set(Nu, t),
    n && a.searchParams.set(Ru, n),
    r && a.searchParams.set(Iu, r),
    i && (a.searchParams.set(Pu, i.width.toString()), a.searchParams.set(ku, i.height.toString())),
    a.href
  );
}
function Kv({
  identifier: e,
  preferredSize: t,
  intrinsicSize: o,
  packageIdentifier: n,
  originalFilename: r,
  presetName: i,
}) {
  return vu(e, n, r, t, i, o);
}
function $v(e) {
  return vu(
    e.identifier,
    e.packageIdentifier,
    e.originalFilename,
    e.preferredSize,
    e.presetName,
    e.intrinsicSize
  );
}
function Du(e) {
  if (sh(e))
    try {
      let t = new URL(e),
        o = t.pathname.substring(Tn.length),
        n = t.searchParams.get(Su),
        r = t.searchParams.get(Nu),
        i = t.searchParams.get(Ru),
        a = t.searchParams.get(Iu),
        s = t.searchParams.get(Pu),
        l = t.searchParams.get(ku);
      return {
        identifier: o,
        originalFilename: n,
        packageIdentifier: r,
        preferredSize: Vu(i) ? i : void 0,
        presetName: a,
        fileExtension: n && lh(n),
        intrinsicSize: s && l ? { width: parseInt(s), height: parseInt(l) } : void 0,
      };
    } catch {
      return;
    }
}
function lh(e) {
  return e.split(".").pop() ?? "";
}
var Ai = class {},
  Fi = class extends Ai {},
  Ae = class extends Fi {
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
var Zv = {},
  uh = "children";
function dh(e) {
  return uh in e && e.children !== void 0;
}
var ch = new Ae();
function Lu(e) {
  return dh(e) ? e.children : ch;
}
function wu(e) {
  for (let t in e) return !1;
  return !0;
}
var Oi = "default";
function nD(e) {
  return sl(e) ? e.getGroundNodes().length === 0 : !1;
}
function rD(e) {
  if (!ze(e)) return !1;
  let t = e.getGroundNodes();
  return t.length > 1 ? !1 : t.length === 0 ? !0 : t[0]?.children?.length === 0;
}
function ph(e) {
  return e ? !e.children || e.children.length === 0 : !1;
}
function fh(e) {
  return e === "";
}
function Wi(e) {
  return !!(e.webPageId && fh(e.segment));
}
function iD(e) {
  return Wi(e) && ph(e);
}
function mh(e, t) {
  let o = t.get(e);
  if (!en(o)) return;
  let n = t.get(o.webPageId);
  if (ze(n) || o.children.length > 0) return;
  let r = o.parentid;
  (t.remove(o.id), r && mh(r, t));
}
var Co = "default";
function lD(e, t) {
  let o = new Map(t.map((a) => [a.id, a])),
    n = o.get(e.id) ?? e,
    r = [n],
    i = new Set([n.id]);
  for (; n.fallback;) {
    let a = o.get(n.fallback);
    if (!a || i.has(a.id)) break;
    ((n = a), i.add(n.id), r.push(n));
  }
  return r;
}
var yh = "locales";
function uD(e) {
  return g(e) && yh in e;
}
function dD(e, t) {
  if (!t || !e) return !1;
  if (e.length > t.length) return !0;
  for (let o of t) {
    let n = e.find((r) => r.id === o.id);
    if (n && (n.fallback !== o.fallback || n.draft !== o.draft)) return !0;
  }
  return !1;
}
function cD(e) {
  return e?.newContentInclusion ?? "include";
}
var Eu = (e) => {
    let t = N.fromRect(e.getBoundingClientRect());
    return ((t.x = t.x + Nt.scrollX), (t.y = t.y + Nt.scrollY), t);
  },
  hh = (e) => N.merge(...e.map(Eu)),
  xh = (e, t) => {
    let o = Bu(e, t);
    return { x: o.x, y: o.y, width: e.width, height: e.height };
  },
  gh = (e, t) => {
    let o = Au(e, t);
    return { x: o.x, y: o.y, width: e.width, height: e.height };
  },
  zi = (e) => {
    let t = e.getBoundingClientRect();
    return { x: t.left + Nt.scrollX, y: t.top + Nt.scrollY, width: t.width, height: t.height };
  },
  bh = (e) => ({ x: e.pageX, y: e.pageY }),
  Th = (e) => ({ x: e.clientX, y: e.clientY }),
  Bu = (e, t) => {
    let o = zi(t);
    return { x: e.x + o.x, y: e.y + o.y };
  },
  Au = (e, t) => {
    let o = zi(t);
    return { x: e.x - o.x, y: e.y - o.y };
  },
  hD = (e, t = {}) => {
    let o = new KeyboardEvent("keydown", { bubbles: !0, keyCode: e, ...t }),
      n = document.activeElement;
    n && n.dispatchEvent(o);
  },
  xD = {
    frameFromElement: Eu,
    frameFromElements: hh,
    convertToPageFrame: xh,
    convertFromPageFrame: gh,
    getPageFrame: zi,
    fromEventForPage: bh,
    fromEventForClient: Th,
    convertToPagePoint: Bu,
    convertFromPagePoint: Au,
  },
  Mu,
  Ch = !Cs() && typeof Document < "u" && typeof Document.parseHTMLUnsafe == "function";
function Fu(e, t) {
  return Ch && !t
    ? Document.parseHTMLUnsafe(e)
    : ((Mu ??= new DOMParser()), Mu.parseFromString(e, t ?? "text/html"));
}
function gD(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
var Vh = /&(?:[gl]t|quot|#39|amp|#6[02]|#34|apos|#38);/gu,
  Sh = {
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
function bD(e) {
  return e.replace(Vh, (t) => Sh[t]);
}
function Ou(e) {
  let t = `<body>${e}</body>`;
  return Fu(t).body;
}
function Nh(e, t) {
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
var Rh = 1e5,
  Hi = Nh(Ih, Rh);
function Ih(e) {
  let t = Ou(e),
    o = t.innerText;
  return Ns.isTest ? (o ?? t.textContent ?? "") : (h(o !== null), o);
}
function Wu(
  e,
  t = `
`
) {
  let o = e.replace(/<\/(h[1-6]|p|ul|ol)>/gu, `</$1>${t}`),
    n = Hi(o),
    r = t.length;
  return r && n.endsWith(t) ? n.slice(0, r * -1) : n;
}
function zu(e, { preserveTrailingEmptyBlockNewLine: t = !1 } = {}) {
  let o = Cn(e.childNodes);
  if (o.length === 0) return "";
  let n = o.join(`
`);
  return !t || e.childNodes.some(Vn)
    ? n
    : n +
        `
`;
}
function Hu(e) {
  return e.replaceAll(/\n+/gu, "");
}
function Cn(e) {
  return e.flatMap((t) => (t.type === "media" || t.type === "module" ? [] : [Ph(t)]));
}
function Ph(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.map(wh).join("");
    case "bulletedList":
    case "numberedList":
      return vh(e.childNodes).join(`
`);
    case "blockquote":
      return Cn(e.childNodes).join(`
`);
    case "table":
      return e.childNodes.map(Dh).join(`
`);
    case "media":
    case "module":
      return "";
  }
}
function kh(e) {
  return Cn(e.childNodes).join(`
`);
}
function vh(e) {
  return e.flatMap((t) => {
    let o = kh(t);
    return o.length > 0 ? [o] : [];
  });
}
function Dh(e) {
  return e.childNodes.map(Lh).join(`
`);
}
function Lh(e) {
  return Cn(e.childNodes).join(`
`);
}
function wh(e) {
  switch (e.type) {
    case "text":
      return e.text;
    case "lineBreak":
      return `
`;
  }
}
function Vn(e) {
  switch (e.type) {
    case "textBlock":
      return e.childNodes.some(Ah);
    case "bulletedList":
    case "numberedList":
      return e.childNodes.some(Mh);
    case "blockquote":
      return e.childNodes.some(Vn);
    case "table":
      return e.childNodes.some(Eh);
    case "media":
    case "module":
      return !1;
  }
}
function Mh(e) {
  return e.childNodes.some(Vn);
}
function Eh(e) {
  return e.childNodes.some(Bh);
}
function Bh(e) {
  return e.childNodes.some(Vn);
}
function Ah(e) {
  switch (e.type) {
    case "text":
      return e.text.length > 0;
    case "lineBreak":
      return !1;
  }
}
var Gi = {};
Object.freeze(Gi);
function wD(e, t) {
  if (!e) return Gi;
  let o = e,
    n = {},
    r = !1;
  for (let i of t) {
    let a = o[i.id];
    a !== void 0 && ((n[i.id] = a), (r = !0));
  }
  return r ? n : Gi;
}
function ji(e) {
  return e?.value !== void 0 && e?.value !== null;
}
function Fh(e, { preserveNewLines: t = !1 } = {}) {
  return p(e.value)
    ? e.type !== "rich-text"
      ? e.value
      : t
        ? Wu(e.value)
        : Hi(e.value)
    : Oh(e.value, { preserveNewLines: t });
}
function MD(e, t) {
  if (e != null) {
    if (e.value === null) return null;
    if (ji(e)) return Fh(e, t);
  }
}
function Oh(e, { preserveNewLines: t }) {
  let o = zu(e);
  return t ? o : Hu(o);
}
function Gu(e, t) {
  if (!t || !e || e.id === Co) return null;
  for (; e;) {
    let o = t[e.id];
    if (o && ji(o)) return o;
    e = e.fallback;
  }
  return null;
}
var ju = "routeSegmentRoot";
var Wh = new Set(["/404.html", "/404", "/404/"]),
  _u = new Set(Array.from(Wh).map((e) => e.replaceAll("/", "")));
var Ku = {
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
  $u = {
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
function Uu(e) {
  return p(e) && e in Ku;
}
var HD = Ku;
function zh(e) {
  return p(e) && e in $u;
}
var GD = $u;
function jD(e) {
  if (!p(e)) return !1;
  if (Uu(e)) return !0;
  let [t, o] = qu(e);
  return !!(t && o);
}
function qu(e) {
  if (!p(e)) return [void 0, void 0];
  let t = e.split("-"),
    o = "",
    n;
  for (let r of t) {
    if (zh(r)) {
      n = r;
      continue;
    }
    if (!o) {
      o = r;
      continue;
    }
    o += "-" + r;
  }
  return [Uu(o) ? o : void 0, n];
}
var Hh = new Set(["ar", "dv", "fa", "he", "ks", "ps", "sd", "ug", "ur", "yi"]);
function Gh(e) {
  return e.endsWith("-Arab") || e.includes("-Arab-");
}
function Sn(e) {
  if (Gh(e)) return "rtl";
  let [t] = qu(e);
  return t && Hh.has(t) ? "rtl" : "ltr";
}
var Xu = Symbol();
function _e(e) {
  let t,
    o = Xu;
  return (...n) => {
    if (t && js(t, n) && o !== Xu) return o;
    t = n;
    let r = e(...n);
    return ((o = r), r);
  };
}
function _i(e, t) {
  let o = e.root.getDefaultLocale(),
    n = e.root.locales ?? $o();
  return t === "includeDrafts" ? jh(o, n) : _h(o, n);
}
function ZD(e, t, o = "includeDrafts") {
  let n = _i(e, o),
    r = n[0];
  return (
    h(r, "Default locale should always exist"),
    t ? (n.find(({ id: i }) => i === t) ?? r) : r
  );
}
var jh = _e((e, t) => {
    let o = [e, ...t];
    return Ki(o, { includeDrafts: !0 });
  }),
  _h = _e((e, t) => {
    let o = [e, ...t];
    return Ki(o, { includeDrafts: !1 });
  });
function Ki(e, { includeDrafts: t }) {
  let o = new Map(),
    n = new Map();
  for (let a of e) (o.set(a.id, a), a.fallback && n.set(a.id, a.fallback));
  let r = [],
    i = !t && Os.isOn("skipPublishingLocalesFallingBackToDraft");
  for (let a of e) {
    if ((!t && a.draft) || (i && Ju(a, o))) continue;
    let s = Yu(a);
    if ((r.push(s), !a.fallback)) continue;
    let l = s,
      u = o.get(a.fallback),
      c = new Set();
    for (c.add(a.id); u && !c.has(u.id);) {
      c.add(u.id);
      let m = Yu(u);
      ((l.fallback = m), (l = m));
      let f = n.get(u.id);
      u = f ? o.get(f) : void 0;
    }
  }
  return r;
}
function QD(e) {
  let t = new Map(e.map((o) => [o.id, o]));
  return e.filter((o) => !o.draft && Ju(o, t));
}
function Ju(e, t) {
  let o = new Set(),
    n = e;
  for (; n;) {
    if (o.has(n.id)) return !1;
    if ((o.add(n.id), n.draft)) return !0;
    n = n.fallback ? t.get(n.fallback) : void 0;
  }
  return !1;
}
function Yu(e) {
  return { id: e.id, code: e.code, slug: e.slug, name: e.name, textDirection: Sn(e.code) };
}
var eL = { vekterLocalesToRouterLocales: Ki };
var Kh = "$";
function Zu(e) {
  let t = e.get(ju);
  return (
    h(t, "RouteSegmentRootNode not found"),
    h(
      t.parentid === e.root.id,
      "RouteSegmentRootNode is not under the tree root. Parent id: " + t.parentid
    ),
    t
  );
}
function uL(e, t) {
  let o = _i(e, "excludeDrafts"),
    n = Object.fromEntries(o.map((l) => [l.id, {}])),
    r = new Map(),
    i = 0,
    a = () => `${Kh}${i++}`,
    s = new Set();
  for (let l of t.children) Qu(e, "", r, n, a, s, l, o);
  return { webPageSegmentReferencePathByWebPageId: r, localizedSegments: n };
}
function Qu(e, t, o, n, r, i, a, s) {
  h(n[Oi], "dictionary should include default");
  let l = a.webPageId ? e.get(a.webPageId) : void 0,
    u = !!l && !l.isDraft && !i.has(l.id);
  u && i.add(l.id);
  let c;
  $h(a) ? (a.segment ? ((c = r()), (t = `${t}/${c}`)) : (t = `${t}/`)) : (t = `${t}/${a.segment}`);
  let m = u;
  for (let f of a.children) m = Qu(e, t, o, n, r, i, f, s) || m;
  if (m && c) {
    n[Oi][c] = a.segment;
    for (let f of s) {
      let x = Gu(f, a.segmentLocalized);
      if (x?.value && x.value !== a.segment) {
        let T = f.id;
        (h(n[T], "localizedSegments should include all locales"), (n[T][c] = x.value));
      }
    }
  }
  return (u && a.webPageId && o.set(a.webPageId, t), m);
}
var $h = (e) => !(!!e.dataIdentifier || _u.has(e.segment) || Wi(e));
function ed(e, t) {
  let n = Zu(e).getRouteSegmentIdForWebPageId(t);
  return e.getNode(n);
}
function td(e, t) {
  let o = Uh(t);
  return o ? e.getNodeWithTrait(o, Zo) : null;
}
function Uh(e) {
  if (!e) return null;
  let t = le(e);
  return !Dt(t) || !Pe(t) || t.type !== "collection" ? null : t.localIdName;
}
var Nn = E(ne(), 1);
var Ht = E(re(), 1);
function qh(e) {
  return (
    typeof e.right == "string" ||
    typeof e.bottom == "string" ||
    (typeof e.left == "string" && (!e.center || e.center === "y")) ||
    (typeof e.top == "string" && (!e.center || e.center === "x"))
  );
}
function Gt(e) {
  return !e._constraints || qh(e) ? !1 : e._constraints.enabled;
}
function Xh(e) {
  let { size: t } = e,
    { width: o, height: n } = e;
  return (
    P(t) && (o === void 0 && (o = t), n === void 0 && (n = t)),
    P(o) && P(n) ? { width: o, height: n } : null
  );
}
function Yh(e) {
  let t = Xh(e);
  if (t === null) return null;
  let { left: o, top: n } = e;
  return P(o) && P(n) ? { x: o, y: n, ...t } : null;
}
function Jh(e, t, o = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let n = t === 1 || t === 2;
  if (!Gt(e) || n) return Yh(e);
  let r = Zh(e),
    i = Qh(t),
    a = i ? { sizing: i, positioning: i, viewport: null } : null;
  return ni.toRect(r, a, null, o, null);
}
function Zh(e) {
  let { left: t, right: o, top: n, bottom: r, center: i, _constraints: a, size: s } = e,
    { width: l, height: u } = e;
  (l === void 0 && (l = s), u === void 0 && (u = s));
  let { aspectRatio: c, autoSize: m } = a,
    f = oi.quickfix({
      left: P(t),
      right: P(o),
      top: P(n),
      bottom: P(r),
      widthType: lo(l),
      heightType: lo(u),
      aspectRatio: c || null,
      fixedSize: m === !0,
    }),
    x = null,
    T = null,
    V = 0,
    R = 0;
  if (f.widthType !== 0 && typeof l == "string") {
    let z = parseFloat(l);
    l.endsWith("fr") ? ((V = 3), (x = z)) : l === "auto" ? (V = 2) : ((V = 1), (x = z / 100));
  } else l !== void 0 && typeof l != "string" && (x = l);
  if (f.heightType !== 0 && typeof u == "string") {
    let z = parseFloat(u);
    u.endsWith("fr")
      ? ((R = 3), (T = z))
      : u === "auto"
        ? (R = 2)
        : ((R = 1), (T = parseFloat(u) / 100));
  } else u !== void 0 && typeof u != "string" && (T = u);
  let y = 0.5,
    C = 0.5;
  return (
    (i === !0 || i === "x") && ((f.left = !1), typeof t == "string" && (y = parseFloat(t) / 100)),
    (i === !0 || i === "y") && ((f.top = !1), typeof n == "string" && (C = parseFloat(n) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? o : null,
      top: f.top ? n : null,
      bottom: f.bottom ? r : null,
      widthType: V,
      heightType: R,
      width: x,
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
var Ui = ((n) => (
    (n[(n.Unknown = 0)] = "Unknown"),
    (n[(n.Disabled = 1)] = "Disabled"),
    (n[(n.DisabledForCurrentLevel = 2)] = "DisabledForCurrentLevel"),
    n
  ))(Ui || {}),
  od = Nn.default.createContext({ parentSize: 0 });
function Qh(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function nd() {
  return Nn.default.useContext(od).parentSize;
}
function rd(e) {
  return typeof e == "object";
}
var ex = (e) => {
  let t = nd(),
    { parentSize: o, children: n } = e,
    r = Nn.default.useMemo(() => ({ parentSize: o }), [tx(o), ox(o)]);
  return t === 1
    ? n
      ? (0, Ht.jsx)(Ht.Fragment, { children: n })
      : null
    : (0, Ht.jsx)(od.Provider, { value: r, children: n });
};
function tx(e) {
  return rd(e) ? e.width : e;
}
function ox(e) {
  return rd(e) ? e.height : e;
}
function Rn(e, t) {
  return (0, Ht.jsx)(ex, { parentSize: t, children: e });
}
function id(e) {
  let t = nd();
  return Jh(e, t, !0);
}
function qi({ width: e, height: t }) {
  return e === "auto" || e === "min-content" || t === "auto" || t === "min-content";
}
var Xi = {
  isImageObject: function (e) {
    return !e || typeof e == "string" ? !1 : typeof e == "object" && "src" in e;
  },
};
function nx(e, t) {
  let { _forwardedOverrideId: o, _forwardedOverrides: n, id: r } = t,
    i = o ?? r,
    a = n && i ? n[i] : void 0;
  return (a && typeof a == "string" && (e = { ...e, src: a }), e);
}
function ad(e) {
  let { background: t, image: o } = e;
  if (o !== void 0 && t && !Xi.isImageObject(t)) return;
  let n = null;
  if ((ee(o) ? (n = { alt: "", src: o }) : (n = ie.get(t, null)), !!Xi.isImageObject(n)))
    return nx(n, e);
}
var Yi = (e) => e instanceof Ds;
function rx(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let r of e.keys()) (++n & 1) !== 1 && e.delete(r);
}
function sd(e, t, o, n) {
  let r = t.get(o);
  if (r) return r;
  rx(t, e);
  let i = n(o);
  return (t.set(o, i), i);
}
var In = {
  hueRotate: (e, t) => b.toHslString(b.hueRotate(b(e), t)),
  setAlpha: (e, t) => b.toRgbString(b.alpha(b(e), t)),
  getAlpha: (e) => {
    let t = bo(e);
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
  hsvToHSLString: (e) => b.toHslString(b(Ot(e.h, e.s, e.v, e.a))),
  hsvToHexValue: (e) => b.toHex(b(Ot(e.h, e.s, e.v, e.a))).toUpperCase(),
  hsvToHex: (e) => b.toHexString(b(Ot(e.h, e.s, e.v, e.a))).toUpperCase(),
  hsvToRgbString: (e) => b.toRgbString(b(Ot(e.h, e.s, e.v, e.a))),
  hsvToString: (e) => Ot(e.h, e.s, e.v),
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
var ld = (e) => {
  let t = 0,
    o,
    n;
  if (e.length === 0) return t;
  for (o = 0; o < e.length; o++) ((n = e.charCodeAt(o)), (t = (t << 5) - t + n), (t |= 0));
  return t;
};
var ix = /var\(.+\)/u,
  ax = new Map();
function sx(e, t) {
  let o = [e, t];
  return ix.test(e) ? e : sd(1e3, ax, o, () => In.multiplyAlpha(e, t));
}
function ft(e, t = 1) {
  let o;
  return (
    "stops" in e
      ? (o = e.stops)
      : (o = [
          { value: e.start, position: 0 },
          { value: e.end, position: 1 },
        ]),
    t === 1 ? o : o.map((n) => ({ ...n, value: sx(n.value, t) }))
  );
}
function jt(e, t) {
  let o = 0;
  return (
    ft(e, t).forEach((n) => {
      o ^= ld(n.value) ^ n.position;
    }),
    o
  );
}
var lx = ["stops"];
function _t(e) {
  return e && lx.every((t) => t in e);
}
var ux = ["start", "end"];
function Kt(e) {
  return e && ux.every((t) => t in e);
}
var dx = ["angle", "alpha"],
  Pn = {
    isLinearGradient: (e) => q(e) && dx.every((t) => t in e) && (Kt(e) || _t(e)),
    hash: (e) => e.angle ^ jt(e, e.alpha),
    toCSS: (e, t, o) => {
      let n = ft(e, e.alpha),
        r = t !== void 0 ? t : e.angle,
        i = Math.round(r),
        a = n.map((s) => `${o?.(s.value) ?? s.value} ${s.position * 100}%`);
      return `linear-gradient(${i}deg, ${a.join(", ")})`;
    },
  };
var cx = ["widthFactor", "heightFactor", "centerAnchorX", "centerAnchorY", "alpha"],
  kn = {
    isRadialGradient: (e) => q(e) && cx.every((t) => t in e) && (Kt(e) || _t(e)),
    hash: (e) =>
      e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ jt(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: o, widthFactor: n, heightFactor: r, centerAnchorX: i, centerAnchorY: a } = e,
        s = ft(e, o),
        l = s.map((u, c) => {
          let m = s[c + 1],
            f = u.position === 1 && m?.position === 1 ? u.position - 1e-4 : u.position;
          return `${t?.(u.value) ?? u.value} ${f * 100}%`;
        });
      return `radial-gradient(${n * 100}% ${r * 100}% at ${i * 100}% ${a * 100}%, ${l.join(", ")})`;
    },
  };
var px = ["alpha", "angle", "centerAnchorX", "centerAnchorY"],
  fx = {
    isConicGradient: (e) => q(e) && px.every((t) => t in e) && (Kt(e) || _t(e)),
    hash: (e) => e.centerAnchorX ^ e.centerAnchorY ^ e.angle ^ jt(e, e.alpha),
    toCSS: (e, t) => {
      let { alpha: o, angle: n, centerAnchorX: r, centerAnchorY: i } = e,
        a = Math.round(n),
        l = ft(e, o)
          .map((u) => `${t?.(u.value) ?? u.value} ${u.position * 360}deg`)
          .join(", ");
      return `conic-gradient(from ${a}deg at ${r * 100}% ${i * 100}%, ${l})`;
    },
  };
var Ji = ["color", "x", "y", "blur"],
  ow = { is: (e) => e && Ji.every((t) => t in e) },
  Zi = ["x", "y", "color", "inset", "blur", "spread"],
  ud = {
    is: (e) => e && Zi.every((t) => t in e),
    toCSS: (e) =>
      `${e.inset ? "inset " : ""}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`,
  };
var dd = "0.000001px",
  Qi = ` translateZ(${dd})`,
  cd = Vs() || Ts() || Ss();
function pd(e) {
  e.willChange = "transform";
  let t = _.current() === _.canvas;
  cd && t && (e.translateZ = dd);
}
function fd(e) {
  ((e.willChange = "transform"), md(e, !0));
}
function sw(e, t) {
  (t
    ? (e.style.willChange || "") !== "transform" && (e.style.willChange = "transform")
    : e.style.removeProperty("will-change"),
    md(e.style, t));
}
function md(e, t) {
  let o = _.current() === _.canvas;
  if (!cd || !o) return;
  let n = (ee(e.transform) && e.transform) || "";
  t ? n.includes(Qi) || (e.transform = n + Qi) : (e.transform = n.replace(Qi, ""));
}
var hd = E(ne(), 1);
var me = (e) => e;
function yd(e, t, o, n = !0) {
  if (!e) return;
  let r = me(e.style),
    i = o || r[t],
    a = () => {
      mx(i) && (r[t] = i);
    };
  ((r[t] = null), n ? Promise.resolve().then(a) : setTimeout(a, 0));
}
function mx(e) {
  return ee(e) || Oe(e) || Ps(e);
}
var vn = (() => {
  class e extends hd.Component {
    static defaultProps = {};
    static applyWillChange(o, n, r) {
      o.willChangeTransform && (r ? pd(n) : fd(n));
    }
    layerElement = null;
    setLayerElement = (o) => {
      this.layerElement = o;
    };
    shouldComponentUpdate(o, n) {
      return o._needsMeasure || this.state !== n || !pe(this.props, o);
    }
    componentDidUpdate(o) {
      me(this.props).clip &&
        me(this.props).radius === 0 &&
        me(o).radius !== 0 &&
        yd(this.layerElement, "overflow", "hidden", !1);
    }
  }
  return e;
})();
var xd = E(ne(), 1);
function ea() {
  let e = _.current();
  return e === _.canvas || e === _.export;
}
function bw() {
  let [e] = (0, xd.useState)(() => ea());
  return e;
}
var gd = E(ne(), 1),
  bd = gd.default.createContext(void 0);
var ta;
function Td() {
  return ta !== void 0;
}
function Vw(e) {
  ta = e;
}
function Cd(e, t) {
  ta?.(e, t);
}
var Vo = E(ne(), 1);
var Nd = E(re(), 1),
  hx = "style[data-framer-css-ssr-minified]",
  xx = (() => {
    if (!Qe()) return new Set();
    let e = document.querySelector(hx)?.getAttribute("data-framer-components");
    return e ? new Set(e.split(" ")) : new Set();
  })(),
  vw = "data-framer-css-ssr";
function Vd() {
  return vs() ? _.preview : _.current();
}
var Sd = (e, t, o) => {
    if (Td() && o !== void 0 && !et(t)) {
      let n = Array.isArray(t)
        ? t
        : t.split(`
`);
      Cd(o, n.filter(Boolean));
    }
    return Vo.default.forwardRef((n, r) => {
      let { sheet: i, cache: a } = Vo.default.useContext(bd) ?? {},
        s = o;
      if (!Qe()) {
        et(t) && (t = t(Vd(), n));
        let l = Array.isArray(t)
          ? t.join(`
`)
          : t;
        gx.add(l, s);
      }
      return (
        (0, Vo.useInsertionEffect)(() => {
          if (s && xx.has(s)) return;
          (et(t)
            ? t(Vd(), n)
            : Array.isArray(t)
              ? t
              : t.split(`
`)
          ).forEach((u) => u && _o(u, i, a));
        }, []),
        (0, Nd.jsx)(e, { ...n, ref: r })
      );
    });
  },
  oa = class {
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
  gx = new oa();
var bx, Dn;
function Tx() {
  return (bx ??= import("https://app.framerstatic.com/libraryCSSRules-D54UNXME.mjs").then((e) => {
    if (((Dn = e.getCombinedCSSRules), Qe())) for (let t of Dn()) _o(t, void 0);
    return e;
  }));
}
function Cx() {
  return Dn ? Dn() : (Qe() && Tx(), []);
}
function Rd(e) {
  return Sd(e, Cx, "framer-lib-combinedCSSRules");
}
function Id(e) {
  return (t, o) =>
    e === !0
      ? `translate(-50%, -50%) ${o}`
      : e === "x"
        ? `translateX(-50%) ${o}`
        : e === "y"
          ? `translateY(-50%) ${o}`
          : o || "none";
}
var de = E(ne(), 1);
var Ut = E(re(), 1),
  $t = de.default.createContext({
    getLayoutId: (e) => null,
    persistLayoutIdCache: () => {},
    top: !1,
    enabled: !0,
  });
function Aw({ children: e }) {
  if ((0, de.useContext)($t).top) return (0, Ut.jsx)(Ut.Fragment, { children: e });
  let o = (0, de.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = (0, de.useRef)({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
    }),
    r = (0, de.useRef)(new Set()).current,
    i = (0, de.useCallback)(({ id: l, name: u, duplicatedFrom: c }) => {
      if (!l) return null;
      let m = u ? "byName" : "byId",
        f = o.current[m][l];
      if (f) return f;
      let x = u || l;
      if (!c && !r.has(x) && (!o.current.byLayoutId[x] || o.current.byLayoutId[x] === x))
        return (
          o.current.count[m][x] === void 0 &&
            ((o.current.count[m][x] = 0), (o.current.byLayoutId[x] = x), (n.current[m][l] = x)),
          r.add(x),
          x
        );
      let T;
      if (c?.length)
        for (let Z = c.length - 1; Z >= 0; Z--) {
          let ce = c[Z];
          Rt(!!ce, "duplicatedId must be defined");
          let ae = o.current[m][ce],
            Je = o.current.byLastId[ce];
          if (Je && !T) {
            let Zr = o.current.byLayoutId[Je],
              Qr = !Zr || Zr === u;
            Je && !r.has(Je) && (!u || Qr) && (T = [Je, ce]);
          }
          let rt = ae ? o.current.byLayoutId[ae] : void 0,
            ps = !rt || rt === u;
          if (ae && !r.has(ae) && (!u || ps))
            return ((n.current[m][l] = ae), (n.current.byLastId[ce] = ae), r.add(ae), ae);
        }
      let V = o.current.byLastId[l];
      if (V && !r.has(V)) return (r.add(V), (n.current.byId[l] = V), V);
      if (T) {
        let [Z, ce] = T;
        return ((n.current[m][l] = Z), (n.current.byLastId[ce] = Z), r.add(Z), Z);
      }
      let R = o.current.byPossibleId[l];
      if (R && !r.has(R)) return (r.add(R), (n.current.byId[l] = R), R);
      let y = c?.[0],
        C = u || y || l,
        z = (o.current.count[m][C] ?? -1) + 1,
        { layoutId: j, value: k } = Vx(C, z, r);
      if (((o.current.count[m][C] = k), (n.current[m][l] = j), c?.length && !u)) {
        let Z = c[c.length - 1];
        if ((Z && (n.current.byLastId[Z] = j), c.length > 1))
          for (let ce = 0; ce < c.length - 1; ce++) {
            let ae = c[ce];
            ae !== void 0 && (n.current.byPossibleId[ae] || (n.current.byPossibleId[ae] = j));
          }
      }
      return ((n.current.byLayoutId[j] = x), r.add(j), j);
    }, []),
    a = (0, de.useCallback)(() => {
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
    s = (0, de.useRef)({ getLayoutId: i, persistLayoutIdCache: a, top: !0, enabled: !0 }).current;
  return (0, Ut.jsx)($t.Provider, { value: s, children: e });
}
function Vx(e, t, o) {
  let n = t,
    r = n ? `${e}-${n}` : e;
  for (; o.has(r);) (n++, (r = `${e}-${n}`));
  return { layoutId: r, value: n };
}
function Fw({ enabled: e = !0, ...t }) {
  let o = (0, de.useContext)($t),
    n = (0, de.useMemo)(() => ({ ...o, enabled: e }), [e]);
  return (0, Ut.jsx)($t.Provider, { ...t, value: n });
}
var Pd = E(ne(), 1),
  So = Pd.default.createContext(!1);
var No = E(ne(), 1);
var na = E(ne(), 1);
function ra() {
  let [e, t] = na.default.useState(0);
  return na.default.useCallback(() => t((o) => o + 1), []);
}
var Ln = E(ne(), 1),
  wn = typeof document < "u" ? Ln.useLayoutEffect : Ln.useEffect;
var aa = E(re(), 1),
  kd = 200,
  ia = class {
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
  Mn = Qe() ? new ia() : void 0;
function Kw(e) {
  let t = ra();
  (0, No.useEffect)(() => {
    let o = e?.current;
    if (o)
      return (
        Mn?.observeElementWithCallback(e.current, t),
        () => {
          Mn?.unobserve(o);
        }
      );
  }, [e, t]);
}
function Sx(e) {
  let t = ra(),
    o = No.default.useRef(null);
  function n(r) {
    (r.width === 0 && r.height === 0) ||
      ((!o.current || r.height !== o.current.height || r.width !== o.current.width) &&
        ((o.current = { width: r.width, height: r.height }), t()));
  }
  return (
    wn(() => {
      if (!e.current) return;
      let { offsetWidth: r, offsetHeight: i } = e.current;
      return (
        n({ width: r, height: i }),
        Mn.observeElementWithCallback(e.current, n),
        () => {
          e.current && Mn.unobserve(e.current);
        }
      );
    }, []),
    o.current
  );
}
var sa = "data-framer-size-compatibility-wrapper",
  $w = (e) => (t) => {
    let o = No.default.useRef(null),
      n = Sx(o),
      r = { [sa]: !0 },
      i = !!n,
      a = t.width ?? kd,
      s = t.height ?? kd;
    return (0, aa.jsx)("div", {
      style: { width: "100%", height: "100%", pointerEvents: "none" },
      ref: o,
      ...r,
      children: i && (0, aa.jsx)(e, { ...t, width: n?.width ?? a, height: n?.height ?? s }),
    });
  };
function vd(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(sa)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Dd)
    .map(Ld);
}
function Dd(e) {
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
function Ld(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== "contents")
    return e;
  let t = [...e.children].find(Dd);
  return t ? Ld(t) : e;
}
var wd = E(ne(), 1);
function Ro(e) {
  return e.replace(/^id_/u, "").replace(/\\/gu, "");
}
function Md(e, t, o = () => [], n = {}) {
  let { id: r, visible: i, _needsMeasure: a } = e,
    { skipHook: s = !1 } = n,
    l = (0, wd.useContext)(So),
    u = _.current() === _.canvas;
  wn(() => {
    !u ||
      l ||
      s ||
      (t.current && r && i && a && se.queueMeasureRequest(Ro(r), t.current, o(t.current)));
  });
}
function nM(e) {
  let t = e.closest("[data-framer-component-container]");
  t && se.queueMeasureRequest(Ro(t.id), t, vd(t));
}
var ke = E(ne(), 1);
function Nx(e) {
  let t = Object.create(Object.prototype);
  return (o) => (t[o] === void 0 && (t[o] = e(o)), t[o]);
}
var Rx =
    /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u,
  Ed = Nx(
    (e) =>
      Rx.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
  );
var Fe = E(ne(), 1);
var mt = { borderRadius: "inherit", cornerShape: "inherit" };
var Bd = [1, 2, 2.2],
  Ix = [512, 1024, 2048, 4096];
function Ad(e, t) {
  if (e === void 0 || t === void 0) return;
  let o = e,
    n = t,
    r = 0;
  t > e && ((o = t), (n = e), (r = 1));
  let i = o / n,
    a = [];
  for (let s of Ix) {
    if (o <= s) return a;
    a.push({ maxSideSize: s, width: r === 0 ? s : Math.trunc(s / i) });
  }
  return a;
}
function la(e, t) {
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
var Px = 512;
function kx(e, t, o) {
  if (!o || o.length === 0 || !t.pixelWidth) return;
  let n = [];
  for (let r of o) {
    if (r.width < Px) continue;
    let i = la(e, r.maxSideSize);
    n.push(`${i} ${r.width}w`);
  }
  return (n.push(`${la(e, null)} ${t.pixelWidth}w`), n.join(", ") || void 0);
}
function vx(e, t, o) {
  if (!t.pixelWidth || !t.pixelHeight || !o?.width || !o?.height) return;
  let n = [],
    r = Math.max(t.pixelWidth, t.pixelHeight),
    i = Math.max(o.width / t.pixelWidth, o.height / t.pixelHeight);
  for (let a of Bd) {
    let s = Math.round(r * a * i),
      l = la(e, s);
    n.push({ src: l, scale: a });
  }
  return n;
}
function Fd(e, t, o) {
  if (!["auto", "lossless"].includes(t.preferredSize ?? "")) return { src: o, srcSet: void 0 };
  if (e) {
    let n = vx(o, t, e);
    if (!n?.length) return { src: o, srcSet: void 0 };
    let [r, ...i] = n;
    return { src: r?.src, srcSet: i.map(({ src: a, scale: s }) => `${a} ${s}x`).join(", ") };
  } else {
    let n = Ad(t.pixelWidth, t.pixelHeight);
    return { src: o, srcSet: kx(o, t, n) };
  }
}
var Ke = E(re(), 1),
  ua = { position: "absolute", ...mt, top: 0, right: 0, bottom: 0, left: 0 };
function Dx() {
  return {
    backgroundRepeat: "repeat",
    backgroundPosition: "left top",
    backgroundSize: "64px auto",
    backgroundImage: ks(se.imagePlaceholderSvg),
  };
}
function Lx(e) {
  switch (e) {
    case "fit":
      return "contain";
    case "stretch":
      return "fill";
    default:
      return "cover";
  }
}
function Od(e, t) {
  let o = e ?? "center",
    n = t ?? "center";
  return o === "center" && n === "center" ? "center" : o + " " + n;
}
function da(e) {
  return {
    display: "block",
    width: "100%",
    height: "100%",
    ...mt,
    objectPosition: Od(e.positionX, e.positionY),
    objectFit: Lx(e.fit),
  };
}
function wx(e) {
  let t = Fe.default.useRef(e ? "auto" : "async"),
    o = (0, Fe.useCallback)((i) => {
      ((t.current = "auto"), (i.decoding = "auto"));
    }, []),
    n = (0, Fe.useCallback)(
      (i) => {
        o(i.currentTarget);
      },
      [o]
    ),
    r = (0, Fe.useCallback)(
      (i) => {
        i?.complete && o(i);
      },
      [o]
    );
  return { decoding: t.current, onImageLoad: n, onImageMount: r };
}
function Mx({
  image: e,
  containerSize: t,
  nodeId: o,
  alt: n,
  draggable: r,
  avoidAsyncDecoding: i,
}) {
  let a = se.useImageSource(e, t, o),
    s = da(e),
    { decoding: l, onImageLoad: u, onImageMount: c } = wx(i),
    { srcSet: m, src: f } =
      "srcSet" in e ? { src: a, srcSet: e.srcSet } : Fd(e.nodeFixedSize, e, a);
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
    alt: n ?? e.alt ?? "",
    style: s,
    draggable: r,
  });
}
function Ex({ image: e, containerSize: t, nodeId: o }) {
  let n = Fe.default.useRef(null),
    r = se.useImageElement(e, t, o),
    i = da(e);
  return (
    Fe.default.useLayoutEffect(() => {
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
    (0, Ke.jsx)("div", { ref: n, style: { display: "contents", ...mt } })
  );
}
function Bx({ nodeId: e, image: t, containerSize: o }) {
  let n = Fe.default.useRef(null),
    r = se.useImageSource(t, o, e);
  return (
    Fe.default.useLayoutEffect(() => {
      let i = n.current;
      if (i === null) return;
      let a = da(t);
      se.renderOptimizedCanvasImage(i, r, a, e);
    }, [e, t, r]),
    (0, Ke.jsx)("div", { ref: n, style: { display: "contents", ...mt } })
  );
}
function Wd({ layoutId: e, image: t, ...o }) {
  e && (e += "-background");
  let n = null,
    r = !!e,
    i = null;
  if (ee(t.src))
    if (t.fit === "tile" && t.pixelWidth && t.pixelHeight) {
      let s = Oe(t.backgroundSize) ? t.backgroundSize : 1,
        l = { width: Math.round(s * t.pixelWidth), height: Math.round(s * t.pixelHeight) },
        u = _s(s * (t.pixelWidth / 2)),
        c = se.useImageSource(t, l);
      ((n = {
        ...ua,
        backgroundImage: `url(${c})`,
        backgroundRepeat: "repeat",
        backgroundPosition: Od(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${u}px auto`,
      }),
        (i = null),
        (r = !0));
    } else
      _.current() !== _.canvas
        ? (i = (0, Ke.jsx)(Mx, { image: t, avoidAsyncDecoding: _.current() === _.export, ...o }))
        : se.canRenderOptimizedCanvasImage(se.useImageSource(t))
          ? (i = (0, Ke.jsx)(Bx, { image: t, ...o }))
          : (i = (0, Ke.jsx)(Ex, { image: t, ...o }));
  let a = i ? ua : (n ?? { ...ua, ...Dx() });
  return r
    ? (0, Ke.jsx)(tt.div, {
        layoutId: e,
        style: a,
        "data-framer-background-image-wrapper": !0,
        children: i,
      })
    : (0, Ke.jsx)("div", { style: a, "data-framer-background-image-wrapper": !0, children: i });
}
var ca = E(re(), 1);
function Ax(e, t, o = !0) {
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
function zd(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let o = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...mt,
    pointerEvents: "none",
  };
  return e.border
    ? ((o.border = e.border), (0, ca.jsx)(tt.div, { style: o }))
    : (Ax(e, o, !1), (0, ca.jsx)(tt.div, { "data-frame-border": !0, style: o, layoutId: t }));
}
function Hd(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Gd(e) {
  return e && e !== "search" && e !== "slot" && e !== "template" ? tt[e] : tt.div;
}
var Fx = bs();
function Ox(e, t, o) {
  ((e["data-framer-layout-hint-center-x"] = t === !0 || t === "x" ? !0 : void 0),
    (e["data-framer-layout-hint-center-y"] = t === !0 || t === "y" ? !0 : void 0),
    (e["data-framer-layout-hint-x"] = o?.x),
    (e["data-framer-layout-hint-y"] = o?.y));
}
function jd(e, t) {
  let o = {};
  return (
    _.current() !== _.canvas ||
      Ox(o, Fx ? e : void 0, {
        x: typeof t?.x == "number" ? t.x : void 0,
        y: typeof t?.y == "number" ? t.y : void 0,
      }),
    o
  );
}
var En = E(ne(), 1);
function Bn(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let o = e._forwardedOverrides;
  return o
    ? ((t = En.default.Children.map(t, (n) =>
        En.default.isValidElement(n) ? En.default.cloneElement(n, { _forwardedOverrides: o }) : n
      )),
      { props: e, children: t })
    : { props: e, children: t };
}
var An = E(ne(), 1);
function Fn(e, { specificLayoutId: t, postfix: o } = {}) {
  let { name: n, layoutIdKey: r, duplicatedFrom: i, __fromCodeComponentNode: a = !1, drag: s } = e,
    { getLayoutId: l, enabled: u } = (0, An.useContext)($t);
  return (0, An.useMemo)(() => {
    if (!u) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !r || a)) return;
    let m = c || l({ id: r, name: n, duplicatedFrom: i });
    if (m) return o ? `${m}-${o}` : m;
  }, [u]);
}
function _d({ background: e, backgroundColor: t }, o) {
  t
    ? typeof t == "string" || Yi(t)
      ? (o.backgroundColor = t)
      : b.isColorObject(e) && (o.backgroundColor = e.initialValue || b.toRgbString(e))
    : e &&
      ((e = ie.get(e, null)),
      typeof e == "string" || Yi(e)
        ? (o.background = e)
        : Pn.isLinearGradient(e)
          ? (o.background = Pn.toCSS(e))
          : kn.isRadialGradient(e)
            ? (o.background = kn.toCSS(e))
            : b.isColorObject(e) && (o.backgroundColor = e.initialValue || b.toRgbString(e)));
}
function O(e, t, o, n) {
  if ((n === void 0 && (n = t), e[t] !== void 0)) {
    o[n] = e[t];
    return;
  }
}
function Kd(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function $d(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Ud(e) {
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
    Ls(o)
      ? (t.cornerShape = ws(() => `superellipse(${o.get()})`))
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
    _d(e, t),
    t
  );
}
var $e = E(re(), 1);
function Wx(e) {
  for (let t in e)
    if (
      t === "drag" ||
      t.startsWith("while") ||
      (typeof me(e)[t] == "function" && t.startsWith("on") && !t.includes("Animation"))
    )
      return !0;
  return !1;
}
var qd = [
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
  zx = new Set([...qd, ...qd.map((e) => `${e}Capture`)]);
function Hx(e) {
  if (e.drag) return "grab";
  for (let t in e) if (zx.has(t)) return "pointer";
}
var pa = "overflow";
function Gx(e) {
  return Xd(e) ? !0 : e.style ? !!Xd(e.style) : !1;
}
function Xd(e) {
  return pa in e && (e[pa] === "scroll" || e[pa] === "auto");
}
function On(e) {
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
      positionAbsolute: x,
    } = e,
    T = Ce(e.minWidth),
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
    positionAbsolute: x,
    minWidth: T,
    minHeight: V,
    maxWidth: R,
    maxHeight: y,
  };
}
var Yd = { x: 0, y: 0, width: 200, height: 200 };
function jx(e) {
  let t = (0, ke.useContext)(So),
    { style: o, _initialStyle: n, __fromCanvasComponent: r, size: i } = e,
    a = On(e),
    s = id(a),
    l = {
      display: "block",
      flex: o?.flex ?? "0 0 auto",
      userSelect: _.current() !== _.preview ? "none" : void 0,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? "rgba(0, 170, 255, 0.3)" : void 0);
  let u = !Wx(e) && !e.__fromCanvasComponent && !Gx(e),
    c = e.style ? !("pointerEvents" in e.style) : !0;
  u && c && (l.pointerEvents = "none");
  let f = ke.default.Children.count(e.children) > 0 &&
      ke.default.Children.toArray(e.children).every(
        (y) => typeof y == "string" || typeof y == "number"
      ) && { display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" },
    x = Ud(e);
  (i === void 0 && !r && (Kd(x) || (l.width = Yd.width), $d(x) || (l.height = Yd.height)),
    a.minWidth !== void 0 && (l.minWidth = a.minWidth),
    a.minHeight !== void 0 && (l.minHeight = a.minHeight));
  let T = {};
  (Gt(a) &&
    s &&
    !qi(e) &&
    (T = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, n, x, T, o),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    vn.applyWillChange(e, l, !0));
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
var _x = new Set([
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
function Kx(e) {
  let t = {};
  for (let o in e)
    (Ms(o) || Ed(o)) && !_x.has(o)
      ? (t[o] = me(e)[o])
      : (o === "positionTransition" || o === "layoutTransition") &&
        ((t.layout = !0),
        typeof me(e)[o] != "boolean" && !e.transition && (t.transition = me(e)[o]));
  return t;
}
function $x(e) {
  return "data-framer-name" in e;
}
var Ux = (0, ke.forwardRef)(function (t, o) {
    let { name: n, center: r, border: i, _border: a, __portal: s } = t,
      { props: l, children: u } = Bn(t),
      c = Kx(l),
      m = Fn(t),
      f = Hx(t),
      x = (0, ke.useRef)(null),
      T = o ?? x,
      V = {
        "data-framer-component-type": t.componentType ?? "Frame",
        "data-framer-cursor": f,
        "data-framer-highlight": f === "pointer" ? !0 : void 0,
        "data-layoutid": m,
        "data-framer-offset-parent-id": me(t)["data-framer-offset-parent-id"],
      };
    !$x(t) && n && (me(V)["data-framer-name"] = n);
    let [R, y] = jx(l),
      C = On(l),
      z = qi(C),
      j = r && !(y && !z && Gt(C)) ? r : void 0;
    (j
      ? c.transformTemplate || (c.transformTemplate = Id(r))
      : c.transformTemplate || (c.transformTemplate = void 0),
      Object.assign(V, jd(j, l.style)),
      Md(t, T));
    let k = ad(t),
      Z = (0, ke.useContext)(So),
      ce = Xx(l, C, y, Z),
      ae = Rn(
        (0, $e.jsxs)($e.Fragment, {
          children: [
            k
              ? (0, $e.jsx)(Wd, {
                  alt: t.alt ?? "",
                  image: k,
                  containerSize: y ?? void 0,
                  nodeId: t.id && Ro(t.id),
                  layoutId: m,
                })
              : null,
            u,
            (0, $e.jsx)(zd, { ...a, border: i, layoutId: m }),
          ],
        }),
        ce
      ),
      Je = Gd(t.as),
      rt = Hd(k);
    return (
      t.fitImageDimension &&
        rt &&
        ((R[t.fitImageDimension] = "auto"), (R.aspectRatio = rt.width / rt.height)),
      (0, $e.jsxs)(Je, { ...V, ...c, layoutId: m, style: R, ref: T, children: [ae, s] })
    );
  }),
  qx = (0, ke.forwardRef)(function (t, o) {
    let { visible: n = !0 } = t;
    return n ? (0, $e.jsx)(Ux, { ...t, ref: o }) : null;
  }),
  Jd = Rd(qx);
function Xx(e, t, o, n) {
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
var Yx = ["actionIdentifier", "identifier", "controls"];
function Wn(e) {
  return g(e) && Yx.every((t) => t in e);
}
function xE(e) {
  return g(e) && "gamepadId" in e;
}
function gE(e, t) {
  if (!t.has(e.identifier)) return (t.add(e.identifier), e);
  let o = Ws();
  return (t.add(o), { ...e, identifier: o });
}
var Jx = ["start", "center", "end"];
function SE(e) {
  return p(e) ? Jx.includes(e) : !1;
}
var Zx = ["fixed", "minmax"];
function NE(e) {
  return p(e) ? Zx.includes(e) : !1;
}
var Qx = ["fixed", "auto", "fit"];
function RE(e) {
  return p(e) ? Qx.includes(e) : !1;
}
var eg = "columnMasonry";
var tg = ["stack", "grid"],
  IE = {
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
  Zd = "horizontal",
  Qd = "center",
  ec = "center",
  tc = "layout";
function yt(e) {
  return tc in e;
}
function PE(e) {
  return p(e) ? tg.includes(e) : !1;
}
var og = ["start", "end", "center"];
function ng(e) {
  return I(e) ? !1 : A(e) ? !0 : fa(e) && og.includes(e);
}
function kE(e) {
  return !yt(e) || e.layout !== "stack" || !e.stackDistribution ? !1 : ng(e.stackDistribution);
}
function oc(e) {
  return yt(e) && !I(e.layout);
}
function vE(e) {
  return oc(e) && e.layout === "stack";
}
function rg(e) {
  return oc(e) && e.layout === "grid";
}
function DE(e) {
  return rg(e) && e.gridType === eg;
}
function LE(e) {
  return tc in e;
}
function ig(e) {
  if (nc(e)) return e;
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
var zn = ["horizontal", "vertical"];
function nc(e) {
  return p(e) && zn.includes(e);
}
function wE(e) {
  if (!nc(e)) return e;
  switch (e) {
    case "horizontal":
      return "row";
    case "vertical":
      return "column";
    default:
      L(e);
  }
}
var ag = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"];
function sg(e) {
  return p(e) && ag.includes(e);
}
var Hn = ["start", "center", "end", "space-between", "space-around", "space-evenly"];
function fa(e) {
  return p(e) && Hn.includes(e);
}
function Gn(e) {
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
function lg(e) {
  if (fa(e)) return e;
  if (sg(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
var ug = ["flex-start", "flex-end", "center"];
function rc(e) {
  return p(e) && ug.includes(e);
}
var jn = ["start", "center", "end"];
function ic(e) {
  return p(e) ? jn.includes(e) : !1;
}
function dg(e) {
  if (ic(e)) return e;
  if (rc(e))
    switch (e) {
      case "flex-start":
        return "start";
      case "flex-end":
        return "end";
      default:
        return e;
    }
}
function ac(e) {
  if (rc(e) || !ic(e)) return e;
  switch (e) {
    case "start":
      return "flex-start";
    case "end":
      return "flex-end";
    default:
      return e;
  }
}
function ME(e, t) {
  switch (e) {
    case "stackDirection":
      return ig(t);
    case "stackDistribution":
      return lg(t);
    case "stackAlignment":
      return dg(t);
    default:
      return t;
  }
}
function EE(e) {
  return !e || !yt(e) ? null : (e.layout ?? null);
}
var cg = ["sticky", "fixed", "absolute"],
  pg = new Set(cg);
function FE(e) {
  return p(e) && pg.has(e);
}
var OE = {
    position: void 0,
    positionStickyTop: void 0,
    positionStickyRight: void 0,
    positionStickyBottom: void 0,
    positionStickyLeft: void 0,
  },
  fg = "position";
function sc(e) {
  return !e || e.__unsafeIsSlotPropertyChildNode() ? !1 : fg in e;
}
var GE = {
    carouselEffectEnabled: void 0,
    carouselEffectLoop: void 0,
    carouselEffectAutoPlay: void 0,
    carouselEffectInterval: void 0,
    carouselEffectSnap: void 0,
  },
  jE = {
    carouselEffectEnabled: !0,
    carouselEffectLoop: !0,
    carouselEffectAutoPlay: !1,
    carouselEffectInterval: 1.5,
    carouselEffectSnap: !0,
  },
  mg = "carouselEffectEnabled";
function yg(e) {
  return mg in e;
}
function lc(e) {
  return hg(e) && e.carouselEffectEnabled === !0;
}
function Io(e) {
  return sc(e) && e.position !== void 0 && e.cache.carouselAncestorId === e.parentid;
}
function hg(e) {
  return !(
    !yg(e) ||
    !yt(e) ||
    e.layout !== "stack" ||
    xg(e) ||
    e.stackWrapEnabled ||
    ("tickerEffectEnabled" in e && e.tickerEffectEnabled === !0)
  );
}
function xg(e) {
  return !!e.cache.carouselAncestorId;
}
function _E(e) {
  return !!(e.cache.carouselAncestorId && e.parentid === e.cache.carouselAncestorId && !Io(e));
}
var ma = ["default", "reverse"],
  qE = {
    tickerEffectEnabled: void 0,
    tickerEffectVelocity: void 0,
    tickerEffectHoverModifier: void 0,
    tickerEffectDirectionModifier: void 0,
    tickerEffectDraggable: void 0,
  },
  XE = {
    tickerEffectEnabled: !0,
    tickerEffectVelocity: 100,
    tickerEffectHoverModifier: 100,
    tickerEffectDirectionModifier: "default",
    tickerEffectDraggable: !1,
  },
  gg = "tickerEffectEnabled";
function bg(e) {
  return gg in e;
}
function YE(e) {
  return Tg(e) && e.tickerEffectEnabled === !0;
}
function Tg(e) {
  return !(
    !bg(e) ||
    !yt(e) ||
    e.layout !== "stack" ||
    Cg(e) ||
    e.stackWrapEnabled ||
    ("carouselEffectEnabled" in e && e.carouselEffectEnabled === !0)
  );
}
function Cg(e) {
  return !!e.cache.tickerAncestorId;
}
function JE(e) {
  return !!(e.cache.tickerAncestorId && e.parentid === e.cache.tickerAncestorId);
}
function ZE(e) {
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
var Vg = "usesDOMRect";
function dc(e) {
  return Vg in e;
}
var Sg = ["start", "center", "end"],
  _n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  ya = [..._n, "all"];
function cc(e) {
  return S(e) ? `Span ${e}` : "Span all";
}
var pc = _n.map(cc),
  fc = ya.map(cc);
function oB(e) {
  return e === "all" ? !0 : S(e) && e > 0;
}
function nB(e) {
  return S(e) && e > 0;
}
function rB(e) {
  return p(e) ? Sg.includes(e) : !1;
}
var iB = {
    gridItemHorizontalAlignment: void 0,
    gridItemVerticalAlignment: void 0,
    gridItemColumnSpan: void 0,
    gridItemRowSpan: void 0,
  },
  Ng = "gridItemHorizontalAlignment";
function aB(e) {
  return Ng in e;
}
var uB = { width: 100, height: 100 },
  dB = { width: 1, height: 1 },
  Rg = "width";
function mc(e) {
  return tn(e) ? !1 : Rg in e;
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
  Ig = new RegExp(`^([+-]?(?:\\d*\\.)?\\d+(?:e[+-]?\\d+)?)(${hc.join("|")})?$`, "i"),
  Pg = new Map(hc.map((e) => [e.toLowerCase(), e]));
function qt(e, t) {
  let o = e.match(Ig);
  if (!o) return [NaN, void 0];
  let [, n, r] = o,
    i = parseFloat(n);
  if (Number.isNaN(i)) return [NaN, void 0];
  if (!r) return [i, t];
  let a = Pg.get(r.toLowerCase());
  if (!a) throw Error(`unrecognized CSS unit ${r}`);
  return [i, a];
}
function fB(e) {
  if (!p(e)) return !1;
  let [t] = qt(e);
  return !Number.isNaN(t);
}
function yc(e, t) {
  return `${e}${t}`;
}
function mB(e, { parentSize: t, viewportSize: o }) {
  if (I(e)) return;
  if (S(e)) return e;
  let [n, r] = qt(e);
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
function yB(e) {
  if (!p(e)) return [void 0, void 0, void 0, void 0];
  let t = e.split(" ");
  if (t.length === 1) {
    let [o] = qt(t[0]),
      n = yc(o, "px");
    return [n, n, n, n];
  }
  return t.length !== 4
    ? [void 0, void 0, void 0, void 0]
    : t.map((o) => {
        let [n] = qt(o);
        return yc(n, "px");
      });
}
var kg = /(?<value>\d{1,5})px/gu;
function hB(e, t) {
  return e.replace(kg, (o, n) => `${t(Number(n))}px`);
}
function CB(e, t) {
  let o = ha(e, t);
  return !Ve(o);
}
function ha(e, t) {
  let o = vg(e, t);
  return o && st(o) ? o : null;
}
function vg(e, t, o = !0) {
  let n = e.get(t);
  if (!n) return null;
  if (xe(n)) return n;
  if (o) {
    let i = null;
    if (
      (Bt(n)
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
function VB(e, t) {
  return t.parentid && st(e.get(t.parentid));
}
var Kn = ["cache", "treeState", "mutable", "update"],
  Dg = new Set(Kn);
function NB(e) {
  return Dg.has(e);
}
var xc = new Set([...Kn, "transient"]);
var DB = { repeatArray: void 0, repeatArrayTransforms: void 0 },
  Lg = "repeatArray";
function gc(e) {
  return !(!e || !(Lg in e) || xe(e) || Ee(e));
}
function Xt(e) {
  return !!e && gc(e) && !!e.repeatArray;
}
function wg(e, t) {
  return e.getNodeWithTrait(t.getPrimaryId(), gc)?.repeatArray;
}
function LB(e, t) {
  let o = wg(e, t);
  if (o) return Hl("array", o, t.repeatArrayTransforms ?? []);
}
var xa = "element",
  bc = "collection",
  Tc = "collectionItemId",
  Cc = "pathVariables",
  ga = "framer/page-link,";
function $n(e) {
  return ee(e) && e.startsWith(`data:${ga}`);
}
function EB(e = null, t = {}) {
  let o = e || "none",
    n = new URL(`data:${ga}${o}`);
  return (
    t.element && n.searchParams.append(xa, t.element),
    t.collectionItem &&
      (n.searchParams.append(bc, t.collectionItem.collection),
      n.searchParams.append(Tc, t.collectionItem.collectionItemId),
      n.searchParams.append(Cc, new URLSearchParams(t.collectionItem.pathVariables).toString())),
    n.href
  );
}
function ba(e) {
  if ($n(e))
    try {
      let t = new URL(e),
        o = t.pathname.substring(ga.length),
        n = t.searchParams,
        r = n.has(xa) ? n.get(xa) : void 0,
        i,
        a = n.get(bc),
        s = n.get(Tc),
        l = n.get(Cc);
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
function BB(e) {
  return !$n(e);
}
function AB(e, t, o) {
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
    let l = ba(s);
    if (!l?.target) return !1;
    ((n = l.target), (r = l.element ?? void 0), (i = l.collectionItem?.pathVariables));
  }
  let a = r ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(n, r, Object.assign({}, o, i), a), !0);
}
function Mg(e, t = 0) {
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
function Eg(e, t) {
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
function Po(e) {
  let t = Mg(e);
  return Eg(e, t);
}
var Un = "--token-";
function qn(e) {
  return e ? e.slice(Un.length) : null;
}
function Xn(e) {
  let { customProperty: t } = Po(e);
  return qn(t);
}
function Ue(e) {
  return typeof e != "string" ? !1 : e.trim().startsWith(`var(${Un}`);
}
function Yn(e) {
  let { customProperty: t, fallback: o } = Po(e);
  if (t && o) return `var(${t}, ${o})`;
  if (t) return `var(${t})`;
}
function Jn(e, t) {
  if (!Ue(e)) return;
  let o = Xn(e);
  if (o) return t[o];
}
function jB(e) {
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
function _B(e) {
  return e > 0 ? "any" : "__legacy";
}
function KB(e) {
  switch (e) {
    case "any":
    case "auto":
      return !0;
    case "any-prefer-fixed":
    case "fixed":
    case "__legacy":
      return !1;
    default:
      L(e);
  }
}
function $B(e) {
  switch (e) {
    case "any":
    case "any-prefer-fixed":
    case "auto":
      return !0;
    case "fixed":
    case "__legacy":
      return !1;
    default:
      L(e);
  }
}
function UB(e) {
  switch (e) {
    case "any":
    case "any-prefer-fixed":
    case "fixed":
    case "__legacy":
      return !0;
    case "auto":
      return !1;
    default:
      L(e);
  }
}
function qB(e) {
  let t = e.framerContractVersion;
  if (!t) return 0;
  let o = parseInt(t, 10);
  return !Number.isFinite(o) || o < 0 ? 0 : o;
}
function XB(e, t) {
  return e?.[t] !== void 0;
}
var Bg = "getBreakpointValues";
function ZB(e) {
  return e ? Bg in e : !1;
}
var Ag = "min",
  Fg = "max",
  Og = "canvasClassName";
function Wg(e) {
  return g(e)
    ? Ag in e
      ? S(e.min)
      : Fg in e
        ? S(e.max)
        : Og in e
          ? p(e.canvasClassName)
          : !1
    : !1;
}
function Vc(e) {
  if (!g(e)) return !1;
  for (let t in e) {
    let o = e[t];
    if (Wg(o)) return !0;
  }
  return !1;
}
function Qn(e, t) {
  if (!I(e))
    for (let o in e) {
      let n = e[o],
        r = n?.min ?? 0,
        i = n?.max ?? 1 / 0;
      if (t >= r && t <= i) return o;
    }
}
var aA = { layoutTemplateIdentifierOverride: void 0 },
  Hg = "layoutTemplateIdentifier";
function Sc(e) {
  return e ? Hg in e : !1;
}
function Nc(e, t) {
  if (!t || !st(t)) return;
  let o = e.getScopeNodeFor(t);
  if (Sc(o)) return o.layoutTemplateIdentifier;
}
function sA(e) {
  return !!(Sc(e) && e.layoutTemplateIdentifier);
}
function Rc(e) {
  return !e || !dc(e) ? !1 : !!e.usesLayoutTemplateRectForModuleIdentifierCached();
}
function Gg(e, t) {
  let o = e.framerDefaultVariant,
    n = e.framerBreakpoints;
  if (!n) return o;
  let r = JSON.parse(n);
  return Qn(r, t) ?? o;
}
function lA(e, t, o) {
  let n = t.componentForIdentifier(e)?.annotations;
  if (n) return Gg(n, o);
}
var Ta = "$control__";
function Ca(e) {
  return e.startsWith(Ta);
}
function dA(e) {
  return e.substring(Ta.length);
}
function jg(e) {
  return `${Ta}${e}`;
}
function cA(e) {
  let t = {};
  for (let o of Object.keys(e)) {
    let n = e[o];
    t[jg(o)] = n;
  }
  return t;
}
function pA(e) {
  for (let t in e) if (Ca(t)) return !0;
  return !1;
}
var er = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  ve = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
function Ic(e) {
  let t = Fs(e),
    o = er.charAt(t % er.length);
  for (t = Math.floor(t / er.length); t > 0;)
    ((o += ve.charAt(t % ve.length)), (t = Math.floor(t / ve.length)));
  return o;
}
function Se() {
  return qe(er) + qe(ve) + qe(ve) + qe(ve) + qe(ve) + qe(ve) + qe(ve) + qe(ve) + qe(ve);
}
function qe(e) {
  return e.charAt(Math.floor(Math.random() * e.length));
}
var ht = {
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
  _g = ["blockStyles", "backgroundMask", "textStylePreset"],
  Kg = ["header", "cell"];
function gA(e) {
  return p(e) && Kg.some((t) => e === t);
}
var $g = {
    textBlock: !0,
    numberedList: !0,
    bulletedList: !0,
    blockquote: !0,
    media: !0,
    module: !0,
    table: !0,
  },
  Ug = ["inlineStyles", "backgroundStyles", "inlineCodeStylePreset", "linkStylePreset"],
  bA = ["openInNewTab", "smoothScroll", "clickTrackingId", "relValues", "preserveParams"];
function Pc(e) {
  return p(e) && e in ht;
}
function qg(e) {
  return Pc(e) && e.endsWith("Localized");
}
function TA(e) {
  return qg(e) ? e : `${e}Localized`;
}
var Xg = {
  collectionControlPropLocalized: "collectionControlProp",
  controlPropLocalized: "controlProp",
  richTextNodeLocalized: "richTextNode",
};
function Yg(e) {
  return Xg[e];
}
function CA(e) {
  return { ...e, variant: Yg(e.variant), childNodes: e.childNodes };
}
function VA(e) {
  return Yt(e) && ht[e.variant].styles;
}
function SA(e) {
  return Ug.some((t) => t in e);
}
function NA(e) {
  return _g.some((t) => t in e);
}
function RA(e) {
  return Yt(e) && !e.variant.endsWith("Localized");
}
function xt(e, t) {
  return ht[e][t];
}
function Yt(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    "type" in e &&
    e.type === "richText" &&
    "variant" in e &&
    Pc(e.variant) &&
    "childNodes" in e &&
    Array.isArray(e.childNodes)
  );
}
function Jg(e) {
  return Es(e, "type") && p(e.type) && $g[e.type] === !0;
}
function Ne(e, t) {
  if (!Jg(e)) return !1;
  switch (e.type) {
    case "textBlock":
      return !0;
    case "table":
      return ht[t].tables;
    case "module":
      return ht[t].embeds;
    case "media":
      return ht[t].media;
    case "blockquote":
      return ht[t].blockquotes;
    case "numberedList":
    case "bulletedList":
      return e.childNodes.every((o) => o.childNodes.every((n) => Ne(n, t)));
  }
  L(e);
}
function kc(e) {
  let t = {};
  for (let o in e) {
    let n = e[o];
    I(n) || (t[o] = n);
  }
  return t;
}
function AA(e) {
  for (let t in e) {
    let o = e[t];
    if (o) return o;
  }
}
var Sa = "webPage",
  Zg = "webPageId",
  Na = "url",
  Qg = "url";
function gt(e) {
  return g(e) && "type" in e && (e.type === Sa || e.type === Na);
}
function Va(e) {
  return gt(e) && e.type === Na;
}
function Jt(e) {
  return gt(e) && e.type === Sa;
}
function eb(e) {
  if (Qg in e) return Na;
  if (Zg in e) return Sa;
  throw new Error("Link: Cannot infer Link type from link provided without a type.");
}
function vc(e) {
  return { ...kc(e), type: eb(e) };
}
function tb(e) {
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
function tr(e) {
  if (A(e) || gt(e)) return e;
  if ($n(e)) {
    let t = ba(e);
    if (!t?.target) return;
    let o = t.collectionItem,
      n = t.element === "none" ? void 0 : t.element;
    return vc({ webPageId: t.target, hash: n || void 0, pathVariables: tb(o) });
  }
  if (!(!p(e) || !e)) return vc({ url: e });
}
function ob(e, t) {
  if (e === t) return !0;
  try {
    return new URL(e).href === new URL(t).href;
  } catch {
    return !1;
  }
}
function FA(e, t, o) {
  return Va(e) && Va(t)
    ? ob(e.url, t.url)
    : !Jt(e) || !Jt(t) || e.webPageId !== t.webPageId
      ? !1
      : o?.ignoreHash
        ? pe(e.pathVariables, t.pathVariables)
        : e.hash !== t.hash
          ? !1
          : pe(e.pathVariables, t.pathVariables) && pe(e.hashVariables, t.hashVariables);
}
function OA(e) {
  if (!Jt(e)) return (Va(e) || void 0, !1);
  if (e.pathVariables) {
    for (let t in e.pathVariables) if (w(e.pathVariables[t])) return !0;
  }
  if (e.hashVariables) {
    for (let t in e.hashVariables) if (w(e.hashVariables[t])) return !0;
  }
  return !1;
}
function WA(e, t) {
  return Jt(e) && !t?.has(e.webPageId);
}
var Dc = ["nofollow", "noreferrer", "me", "ugc", "sponsored"];
var nb = Dc,
  rb = new Set(nb),
  Ra = (e) => rb.has(e),
  Lc = (e) => (B(e) ? e.every(Ra) : !1);
function wc(e, t) {
  for (let o in e) if (e[o] === t) return !0;
  return !1;
}
function Mc(e) {
  return wc(W, e);
}
var ib = Ho("RawControlProp"),
  Ec = "type";
function De(e) {
  if (!g(e) || !(Ec in e)) return !1;
  let t = e[Ec];
  return t === null
    ? (ib.reportErrorOnceEveryTenMinutes(new Error("Encountered raw control prop with null type"), {
        value: e,
      }),
      !0)
    : Mc(t);
}
function ZA(e) {
  return g(e) ? Object.values(e).every((t) => t === void 0 || De(t)) : !1;
}
var Ia = (e) => {};
function eF(e) {
  Ia = e;
}
var Pa = (e) => {};
function tF(e) {
  Pa = e;
}
var ka = (e, t, ...o) => {
  e.assign(t, ...o);
};
function oF(e) {
  ka = e;
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
var nr = class {
  treeLineage = null;
  draft = null;
  tree() {
    return this.treeLineage?.latestTree;
  }
};
function yF(e, t, ...o) {
  ka(e, t, ...o);
}
function sb(e) {
  return e ? e.toJS instanceof Function : !1;
}
var rr = { mutable: !0, update: 0 },
  lb = new Set([...xc, "__class", "children", "id"]),
  ir = class extends Qs("MutableNode") {
    constructor(t, o, n) {
      (super(),
        Ia(this),
        (this.id = t?.id ?? ao()),
        (this.parentid = t?.parentid ?? Hs),
        (this.cache = t?.cache ?? o ?? new or()),
        (this.treeState = n ?? new nr()),
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
        if (lb.has(o)) continue;
        let n = this[o];
        if (o === "replicaInfo" && n) {
          t[o] = JSON.parse(JSON.stringify(n));
          continue;
        }
        if (sb(n)) {
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
        (h(!t.id, "`id` should not be set"),
        h(!t.parentid || this.parentid === t.parentid, "`parentid` should not be set"),
        h(!t.children, "`children` should not be set"),
        h(!t.mutable, "`mutable` should not be set"),
        h(!t.update, "`update` should not be set"),
        h(!t.cache, "`cache` should not be set"),
        h(!t.treeState, "`treeState` should not be set"));
    }
    cloneEmpty() {
      return new this.constructor();
    }
    clone(t) {
      let o = this.cloneEmpty();
      if (
        (o.assign(this, rr, { cache: o.cache, treeState: o.treeState, id: o.id }, t), t?.children)
      )
        return o;
      let n = this.children;
      return (n && (o.children = new Ae(n.map((r) => r.clone({ parentid: o.id })))), o);
    }
    cloneWithIds(t) {
      let o = this.cloneEmpty();
      if ((o.assign(this, rr, { cache: o.cache, treeState: o.treeState }, t), t?.children))
        return o;
      let n = this.children;
      return (n && (o.children = new Ae(n.map((r) => r.cloneWithIds()))), o);
    }
    cloneWithRenamedIds(t, o) {
      let n = this.cloneEmpty();
      if (
        (n.assign(this, rr, { cache: n.cache, treeState: n.treeState, id: n.id }, o),
        t.set(this.id, n.id),
        o?.children)
      )
        return n;
      let r = this.children;
      return (
        r && (n.children = new Ae(r.map((i) => i.cloneWithRenamedIds(t, { parentid: n.id })))),
        n
      );
    }
    cloneWithCallback(t, o) {
      let n = this.cloneEmpty(),
        r = t(this);
      if (
        (n.assign(this, rr, { cache: n.cache, treeState: n.treeState, id: n.id }, r),
        o && n.setProp("parentid", o),
        r?.children)
      )
        return n;
      let i = this.children;
      return (i && (n.children = new Ae(i.map((a) => a.cloneWithCallback(t, n.id)))), n);
    }
    freeze() {
      return (
        h(this.mutable, "Node must be mutable when freezing"),
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
        h(this.mutable, "Node must be mutable when adding children"),
        h(this.children, "Node must have children"),
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
      let o = ub(this);
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
function ub(e) {
  let t = !0;
  return (
    "isLoaded" in e &&
      (h(typeof e.isLoaded == "function", "isLoaded must be a function"), (t = !!e.isLoaded())),
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
var Bc = "|local|";
var db = { color: "rgba(0,0,0,0.25)", x: 0, y: 2, blur: 5 },
  cb = {
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
function Ac(e, t) {
  let o = { ...t, ...e };
  return (o.id || (o.id = ao()), o);
}
function va(e) {
  if (!g(e) || !("id" in e)) return !1;
  for (let o of Zi) if (!(o in e)) return !1;
  return !0;
}
function Zt(e) {
  return B(e) && e.every(va);
}
function CF(e) {
  return Ac(e, db);
}
function ar(e) {
  return Ac(e, cb);
}
function VF(e) {
  return { ...e, id: ao() };
}
function SF(e, t) {
  return { ...e, ...t };
}
function vF(e) {
  return !(!Fc(e) || e.__class === "ImageStylePresetNode");
}
function DF(e) {
  return Da(e) && !ct(e);
}
function LF(e) {
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
  return Da(e) && pt(e);
}
var Oc = "boxShadows",
  Wc = (e) => e === Oc;
function Da(e) {
  return g(e) ? Oc in e : !1;
}
function wF(e) {
  return !Da(e) || !Zt(e.boxShadows) ? !1 : e.boxShadows.length > 0;
}
var zc = "shadows",
  Hc = (e) => e === zc;
function AF(e) {
  return zc in e;
}
var FF = { shadows: void 0 };
function La(e) {
  return g(e) ? e && Ji.every((t) => t in e) : !1;
}
function OF(e) {
  return B(e) && e.every(La);
}
var pb = "removeTokenVariables";
function Gc(e) {
  return typeof e == "object" && e !== null && pb in e;
}
function o0(e, t = !1) {
  let o = {};
  for (let n of e) {
    let r = n.colorForMode(t);
    r && (o[lr(n)] = r);
  }
  return o;
}
function _c(e) {
  let t = { light: { srgb: "", p3: "" }, dark: { srgb: "", p3: "" } };
  for (let o of e) {
    let n = lr(o);
    if (b.isP3String(o.light)) {
      t.light.p3 += `${n}: ${o.light};`;
      let r = dt.fromString(o.light)?.toString("srgb");
      r && (t.light.srgb += `${n}: ${r};`);
    } else t.light.srgb += `${n}: ${o.light};`;
    if (!(!o.dark || o.softDeleted))
      if (b.isP3String(o.dark)) {
        t.dark.p3 += `${n}: ${o.dark};`;
        let r = dt.fromString(o.dark)?.toString("srgb");
        r && (t.dark.srgb += `${n}: ${r};`);
      } else t.dark.srgb += `${n}: ${o.dark};`;
  }
  return t;
}
function n0(e) {
  let t = _c(e);
  return [
    `body { ${t.light.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.light.p3} } }`,
    `@media (prefers-color-scheme: dark) { body { ${t.dark.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.dark.p3} } } }`,
  ];
}
function r0(e) {
  let t = _c(e);
  return [
    `body { ${t.light.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.light.p3} } }`,
    `body[data-framer-theme="dark"] { ${t.dark.srgb} @supports (color: color(display-p3 1 1 1)) { ${t.dark.p3} } }`,
  ];
}
function i0(e, t, o = !1) {
  let n = {};
  for (let r of t) {
    let i = r.colorForMode(o);
    if (!i) return;
    n[r.id] = i;
  }
  return fb(e, n, !0);
}
function fb(e, t, o) {
  let n;
  if (He(e)) {
    let i = e.html;
    if (Yt(i) || Object.keys(t).some((s) => i.includes(lr({ id: s })))) {
      let s = e.removeTokenVariables(t);
      s !== i && ((n ??= {}), (n.html = s));
    }
  }
  let r = yb(e, t, o);
  return (r && (n = { ...n, ...r }), n);
}
var mb = new Set([...Kn, "children", "id"]);
function Kc(e) {
  return mb.has(e);
}
function yb(e, t, o) {
  let n;
  return (
    (e instanceof ir ? e.entries() : Object.entries(e)).forEach(([i, a]) => {
      if (Kc(i)) return;
      let s,
        l = Hc(i) || Wc(i);
      if (B(a)) {
        let u = [],
          c = !1;
        (a.forEach((m, f) => {
          let T = l && (La(m) || va(m)) ? sr(m, t) : jc(String(f), m, t, o);
          (T && (c = !0), u.push(T || m));
        }),
          c && (s = u));
      } else s = jc(i, a, t, o);
      typeof s < "u" && (n || (n = {}), (n[i] = s));
    }),
    n
  );
}
function ko(e, t) {
  if (B(e)) {
    for (let o of e) if (ko(o, t)) return !0;
    return !1;
  }
  if (g(e)) {
    let o = Object.values(e);
    for (let n of o) if (ko(n, t)) return !0;
    return !1;
  }
  return Ue(e) ? Xn(e) === t : !1;
}
function a0(e, t) {
  if (He(e)) {
    let o = e.getTextColors(!1);
    for (let r of o) if (ko(r, t)) return !0;
    let n = e.getFills();
    for (let r of n) if (ko(r, t)) return !0;
  }
  for (let o in e) if (!Kc(o) && ko(e[o], t)) return !0;
  return !1;
}
function jc(e, t, o, n) {
  if (Ca(e)) return hb(t, o);
  if (Gc(t)) {
    let i = t.removeTokenVariables(o);
    if (i) return i;
  }
  let r = Jn(t, o);
  if (r) return r;
  if (n && Ue(t)) return Yn(t);
}
function hb(e, t) {
  if (!De(e)) return;
  let { value: o } = e,
    n = sr(o, t);
  return n === void 0 ? void 0 : { ...e, value: n };
}
function sr(e, t) {
  if (B(e)) {
    let o = !1,
      n = e.map((r) => {
        let i = sr(r, t);
        return i ? ((o = !0), i) : r;
      });
    return o ? n : void 0;
  }
  if (g(e)) {
    let o = {},
      n = !1;
    for (let r in e) {
      let i = sr(e[r], t);
      i ? ((n = !0), (o[r] = i)) : (o[r] = e[r]);
    }
    return n ? o : void 0;
  }
  if (Ue(e)) return Jn(e, t);
}
function lr(e) {
  return `${Un}${e.id}`;
}
function s0(e, t = {}) {
  let o = e.light;
  if (!o) return "";
  let n = b.isColor(o) ? b.toRgbString(b(o)) : o,
    r = `var(${lr(e)}, ${n})`;
  return t.excludeMetadata === !0 ? r : `${r} ${xb(e.name, t.packageIdentifier)}`;
}
function l0(e, t) {
  if (Ue(e)) {
    let o = Yn(e);
    if (o) return o;
  }
  return p(e) && t ? t(e) : e;
}
function xb(e, t) {
  let o = { name: e };
  return (t && t !== Bc && (o.packageIdentifier = t), `/* ${JSON.stringify(o)} */`);
}
function u0(e, t) {
  let o = t.commaIndex ?? t.end - 1,
    n = e.substring(t.start + 4, o);
  return qn(n);
}
function d0(e) {
  return qn(e);
}
function c0(e) {
  return Po(e).fallback || null;
}
function Uc(e) {
  return { collectionRepeatedItemId: e, repeatedItemId: e };
}
function qc(e, t) {
  let o = t?.getPrimaryId();
  if (((t = e.get(o)), !Ee(t))) return null;
  if (t.repeatedItemId !== void 0) return $c(e, t, t.repeatedItemId);
  let n = $c(e, t, t.collectionRepeatedItemId);
  return n || Yc(t);
}
function h0(e, t) {
  let o = t.cache.repeatedAncestorRepeaterIds;
  if (o !== null) return o;
  let n = gb(e, t);
  return ((t.cache.repeatedAncestorRepeaterIds = n), n);
}
function gb(e, t) {
  let o = [],
    n = t,
    r = e.getParent(t.id);
  for (; r;) {
    if (Xt(r)) o.push(r.id);
    else if (Ee(r)) {
      let i = qc(e, r);
      i && n.getPrimaryId() === i.id && o.push(r.id);
    }
    if (((n = r), (r = e.getParent(r.id)), r && e.isGroundNode(r))) break;
  }
  return (o.reverse(), o);
}
function x0(e, t) {
  let o = t;
  for (let n of t.ancestors()) {
    if (Ee(n)) return { repeater: n, inRepeatedChild: Qt(e, o, n) };
    o = n;
  }
}
function g0(e) {
  for (let t of e.ancestors()) if (Ee(t)) return t;
}
function Xc(e, t) {
  return e.getNodeWithTrait(t.parentid, Ee) ?? void 0;
}
function b0(e, t) {
  return e.getNodeWithTrait(t.parentid, si) ?? void 0;
}
function bb(e, t) {
  if (!t) return null;
  let o = qc(e, t);
  return o ? (t.originalid ? t.children?.find((r) => r.originalid === o.id) : o) : null;
}
function Qt(e, t, o) {
  return ((o ??= Xc(e, t)), bb(e, o)?.id === t.id);
}
function T0(e, t) {
  return Qt(e, t) || Xt(t);
}
function C0(e, t, o) {
  return !!o && Ee(e) && !Qt(t, o, e);
}
function V0(e) {
  let t = e.children?.at(0);
  e.set(Uc(t?.id));
}
function S0(e, t) {
  let o = new Map();
  for (let n of t) {
    let r = Tb(e, n);
    r && o.set(r.repeaterId, r);
  }
  return [...o.values()];
}
function Tb(e, t) {
  let o = Xc(e, t);
  if (!o || !Qt(e, t, o)) return null;
  let n = t.getPrimaryId();
  return {
    repeaterId: o.getPrimaryId(),
    disableFallback: o.repeatedItemId !== void 0,
    repeatedItemId: n,
    repeatedItemChildIds: t.children?.map((r) => r.getPrimaryId()) ?? [],
  };
}
function N0(e, t, o) {
  for (let n of t) {
    let r = e.get(n.repeaterId);
    if (!Ee(r)) continue;
    let i = Cb(e, r, n, o);
    (i === r.repeatedItemId && i === r.collectionRepeatedItemId) || r.set(Uc(i));
  }
}
function Cb(e, t, o, n) {
  let r = new Set(),
    i = n?.get(o.repeatedItemId);
  (i && r.add(i), r.add(o.repeatedItemId));
  for (let a of o.repeatedItemChildIds) r.add(a);
  for (let a of r) {
    let s = Vb(e, t, a);
    if (s) return s.id;
  }
  if (!o.disableFallback) return Yc(t)?.id;
}
function Vb(e, t, o) {
  let n = e.get(o);
  for (; n;) {
    if (n.parentid === t.id) return Xt(n) ? null : n;
    if (!n.parentid) return null;
    n = e.get(n.parentid);
  }
  return null;
}
function $c(e, t, o) {
  let n = e.get(o);
  return !n || Xt(n) || n.parentid !== t.id ? null : n;
}
function Yc(e) {
  let t = e.children.at(0);
  return !t || Xt(t) ? null : t;
}
function eo(e) {
  return typeof e == "string" || Yt(e);
}
function v0(e, t) {
  h(
    typeof e == "string",
    `${t}: Rich text value is stored as JSON here, but this path still expects HTML.`
  );
}
function Jc(e, t = (o, n) => o === n) {
  let o = To;
  for (let n of e)
    if (xn(o)) o = n;
    else if (!t(n, o)) return io;
  return o;
}
function M0(e, t) {
  let o = e[0];
  if (o === void 0) return To;
  let n = o[t];
  for (let [r, i] of e.entries()) {
    if (r === 0) continue;
    let a = i[t];
    if (n !== a) return io;
  }
  return n;
}
function E0(...e) {
  return e.find(Ei);
}
var Qc = "borderColor";
function z0(e) {
  return {
    borderWidth: e.borderPerSide
      ? { top: e.borderTop, right: e.borderRight, bottom: e.borderBottom, left: e.borderLeft }
      : e.borderWidth,
    borderColor: e.borderColor,
    borderStyle: e.borderStyle,
  };
}
function Do(e) {
  if (!g(e)) return !1;
  let t = "borderWidth",
    o = "borderStyle",
    n = "borderPerSide",
    r = "borderTop",
    i = "borderRight",
    a = "borderBottom",
    s = "borderLeft";
  return !(
    !p(e[Qc]) ||
    !p(e[o]) ||
    !oe(e[t]) ||
    !te(e[n]) ||
    !oe(e[r]) ||
    !oe(e[i]) ||
    !oe(e[s]) ||
    !oe(e[a])
  );
}
var Sb = { solid: !0, dashed: !0, dotted: !0, double: !0 };
function H0(e) {
  return p(e) && Object.hasOwn(Sb, e);
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
function ep(e) {
  if (!Do(e)) return e;
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
function G0(e) {
  let t = { ...nt };
  return (
    oe(e.borderTop) && (t.borderTop = e.borderTop),
    oe(e.borderRight) && (t.borderRight = e.borderRight),
    oe(e.borderBottom) && (t.borderBottom = e.borderBottom),
    oe(e.borderLeft) && (t.borderLeft = e.borderLeft),
    oe(e.borderWidth) && (t.borderWidth = e.borderWidth),
    p(e.borderColor) && (t.borderColor = e.borderColor),
    p(e.borderStyle) && (t.borderStyle = e.borderStyle),
    te(e.borderPerSide) && (t.borderPerSide = e.borderPerSide),
    t
  );
}
function j0(e) {
  let t = { ...nt };
  return (
    oe(e.borderTop) && (t.borderTop = e.borderTop),
    oe(e.borderRight) && (t.borderRight = e.borderRight),
    oe(e.borderBottom) && (t.borderBottom = e.borderBottom),
    oe(e.borderLeft) && (t.borderLeft = e.borderLeft),
    oe(e.borderWidth) && (t.borderWidth = e.borderWidth),
    p(e.borderColor) && (t.borderColor = e.borderColor),
    p(e.borderStyle) && (t.borderStyle = e.borderStyle),
    te(e.borderPerSide) && (t.borderPerSide = e.borderPerSide),
    t
  );
}
function _0(e) {
  if (!e) return nt;
  let t = 0,
    o = e.borderTopWidth ?? e.borderWidth ?? t,
    n = e.borderRightWidth ?? e.borderWidth ?? t,
    r = e.borderBottomWidth ?? e.borderWidth ?? t,
    i = e.borderLeftWidth ?? e.borderWidth ?? t,
    a = e.borderWidth ?? nt.borderWidth,
    s = It(Jc([o, n, r, i, a])),
    l = e.borderStyle ?? nt.borderStyle,
    u = e.borderColor ?? nt.borderColor;
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
function Zc(e) {
  return p(e) || I(e);
}
function vo(e) {
  return oe(e) || I(e);
}
function K0(e) {
  if (!g(e)) return !1;
  let t = "borderWidth",
    o = "borderStyle",
    n = "borderTopWidth",
    r = "borderRightWidth",
    i = "borderBottomWidth",
    a = "borderLeftWidth";
  return !(
    !Zc(e[Qc]) ||
    !Zc(e[o]) ||
    !vo(e[n]) ||
    !vo(e[r]) ||
    !vo(e[a]) ||
    !vo(e[i]) ||
    !vo(e[t])
  );
}
var Nb = [
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
  Rb = new Set(Nb);
function tp(e) {
  return p(e) && Rb.has(e);
}
var X0 = "--framer-custom-cursors";
var Ib = "customCursorSmartComponentId";
function Y0(e) {
  return g(e) && Ib in e;
}
var Pb = {
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
  J0 = { ...Pb, cursor: void 0, customCursorType: void 0 },
  Z0 = "default",
  kb = "cursor";
function op(e) {
  return kb in e;
}
function Q0(e) {
  if (op(e))
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
var eO = 20;
function vb(e) {
  return p(e.customCursorSmartComponentId);
}
function tO(e, t) {
  return !t || !op(t) || t.customCursorType !== "component" || !vb(t)
    ? !1
    : wt(e.get(t.customCursorSmartComponentId));
}
var Db = "single",
  Lb = "fused";
function aO(e) {
  return { single: e, fused: [e, e, e, e] };
}
function Lo(e) {
  if (!g(e) || !S(e[Db])) return !1;
  let t = e[Lb];
  return B(t) && t.length === 4 && t.every(S);
}
function sO(e) {
  return De(e) && e.type === "fusednumber" && Lo(e.value);
}
var wb = "isFused";
function np(e) {
  return g(e) && te(e[wb]);
}
var Mb = "id";
function Eb(e) {
  return Mb in e;
}
var Bb = "value";
function Ab(e) {
  return g(e) && Eb(e) && Bb in e;
}
function PO(e) {
  return e.type === "array" && ip(e.value);
}
function kO(e) {
  return e.type === "object" && (g(e.value) || Ve(e.value));
}
function rp(e) {
  return e.type !== "fusednumber" || !np(e) ? !1 : Lo(e.value);
}
function to(e) {
  return X(e) && e.endsWith("px") && S(Number.parseFloat(e));
}
function Fb(e) {
  if (!X(e)) return !1;
  let [t, o] = qt(e);
  return !Number.isNaN(t) && o === "%";
}
function vO(e) {
  return g(e) && e.type === "image";
}
var Ob = { string: !0, richtext: !0, image: !0, link: !0 };
function DO(e) {
  return e ? e.type in Ob : !1;
}
function ur(e) {
  return g(e) && S(e.latitude) && S(e.longitude);
}
function LO(e) {
  return !(
    !g(e) ||
    !ur(e.coordinate) ||
    (e.title !== void 0 && !X(e.title)) ||
    (e.address !== void 0 && !X(e.address))
  );
}
function wO(e) {
  return he(e) || ip(e);
}
function ip(e) {
  return B(e) && e.every(Ab);
}
function MO(e) {
  return A(e) || te(e);
}
function EO(e) {
  return A(e) || X(e);
}
function BO(e) {
  return A(e) || X(e) || I(e);
}
function AO(e) {
  return X(e) || w(e);
}
function FO(e) {
  return A(e) || X(e) || te(e) || S(e) || I(e) || Ve(e);
}
function OO(e) {
  return A(e) || B(e);
}
function WO(e) {
  return B(e) && e.every(Wn);
}
function zO(e) {
  return A(e) || X(e) || I(e);
}
function HO(e) {
  return w(e) || Lc(e);
}
function GO(e) {
  return w(e) || typeof e == "boolean" || (typeof e == "number" && Number.isFinite(e));
}
function jO(e) {
  return A(e) || S(e);
}
function _O(e) {
  return g(e);
}
function KO(e) {
  return A(e) || eo(e);
}
function $O(e) {
  return A(e) || X(e);
}
function UO(e) {
  return A(e) || X(e) || I(e);
}
function qO(e) {
  return Jt(e) || I(e);
}
function XO(e) {
  return g(e) || I(e);
}
function YO(e) {
  return g(e) || I(e);
}
function JO(e) {
  return w(e) || Do(e);
}
function ZO(e) {
  return w(e) || tp(e);
}
function QO(e) {
  if (A(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? to(t[0]) : t.length === 2 && t.every(to);
}
function eW(e) {
  if (A(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? to(t[0]) : t.length === 4 && t.every(to);
}
function tW(e) {
  if (A(e)) return !0;
  if (!X(e)) return !1;
  let t = e.split(" ");
  return t.length === 1 ? to(t[0]) || Fb(t[0]) : t.length === 4 && t.every(to);
}
function oW(e) {
  return w(e) || X(e) || I(e);
}
function nW(e) {
  return A(e) || (B(e) && e.every(X)) || I(e);
}
function rW(e) {
  return (X(e) && Pe(e)) || w(e) || I(e);
}
function iW(e) {
  return w(e) || X(e) || I(e);
}
function aW(e) {
  return B(e);
}
function sW(e) {
  return ur(e) || w(e) || I(e);
}
function mW(e, t) {
  return e === t ? !0 : e.variant !== t.variant ? !1 : dr(e.variant, e.childNodes, t.childNodes);
}
function dr(e, t, o) {
  if (t.length !== o.length) return !1;
  for (let n = 0; n < t.length; n++) if (!dp(e, t[n], o[n])) return !1;
  return !0;
}
var H = (e, t, o) => Object.is(t, o),
  wo = (e, t, o) => pe(t, o),
  ap = (e, t, o) => wa(t, o),
  sp = { type: H, tag: H, textDirection: H, childNodes: Yb },
  Wb = { ...sp, blockStyles: wo, backgroundMask: wo, textStylePreset: H },
  lp = { type: H, textDirection: H },
  zb = { ...lp, childNodes: cp },
  up = { type: H, textDirection: H, listStyleType: H, start: H },
  Hb = { ...up, childNodes: cp },
  Gb = { type: H, childNodes: dr },
  jb = { type: H, mediaType: H, src: H, alt: H, pixelWidth: H, pixelHeight: H, link: ap },
  _b = { type: H, identifier: H, embedId: H, props: wo, width: H, alignment: H },
  Kb = { type: H, childNodes: Ub };
function yW(e, t) {
  return e.id !== void 0 && e.id === t.id && e.variant === t.variant;
}
function hW(e, t, o) {
  return t === o || dp(e, t, o);
}
function dp(e, t, o) {
  if (t.type !== o.type) return !1;
  switch (t.type) {
    case "textBlock":
      return (h(o.type === "textBlock"), xt(e, "styles") ? Re(e, t, o, Wb) : Re(e, t, o, sp));
    case "bulletedList":
      return (h(o.type === "bulletedList"), Re(e, t, o, zb));
    case "numberedList":
      return (h(o.type === "numberedList"), Re(e, t, o, Hb));
    case "blockquote":
      return (
        h(o.type === "blockquote"),
        h(xt(e, "blockquotes"), "Document variant does not support blockquotes"),
        Re(e, t, o, Gb)
      );
    case "media":
      return (
        h(o.type === "media"),
        h(xt(e, "media"), "Document variant does not support media block"),
        Re(e, t, o, jb)
      );
    case "module":
      return (
        h(o.type === "module"),
        h(xt(e, "embeds"), "Document variant does not support embeds"),
        Re(e, t, o, _b)
      );
    case "table":
      return (
        h(o.type === "table"),
        h(xt(e, "tables"), "Document variant does not support tables"),
        Re(e, t, o, Kb)
      );
    default:
      L(t);
  }
}
function xW(e, t, o) {
  if (t.type !== o.type) return !1;
  switch (t.type) {
    case "blockquote":
    case "table":
    case "tableRow":
      return !0;
    case "bulletedList":
      return (h(o.type === "bulletedList"), Re(e, t, o, lp));
    case "numberedList":
      return (h(o.type === "numberedList"), Re(e, t, o, up));
    default:
      L(t);
  }
}
function $b(e, t, o) {
  return t === o || dr(e, t.childNodes, o.childNodes);
}
function cp(e, t, o) {
  if (t.length !== o.length) return !1;
  for (let n = 0; n < t.length; n++) if (!$b(e, t[n], o[n])) return !1;
  return !0;
}
function Ub(e, t, o) {
  if (t.length !== o.length) return !1;
  for (let n = 0; n < t.length; n++) if (!qb(e, t[n].childNodes, o[n].childNodes)) return !1;
  return !0;
}
function qb(e, t, o) {
  if (t.length !== o.length) return !1;
  for (let n = 0; n < t.length; n++) if (!Xb(e, t[n], o[n])) return !1;
  return !0;
}
function Xb(e, t, o) {
  return t === o
    ? !0
    : t.cellType !== o.cellType || t.rowSpan !== o.rowSpan || t.columnSpan !== o.columnSpan
      ? !1
      : dr(e, t.childNodes, o.childNodes);
}
function Yb(e, t, o) {
  if (t.length !== o.length) return !1;
  for (let n = 0; n < t.length; n++) if (!Zb(e, t[n], o[n])) return !1;
  return !0;
}
var pp = { type: H, text: H, bold: H, italic: H, inlineCode: H, link: ap },
  Jb = {
    ...pp,
    inlineStyles: wo,
    backgroundStyles: wo,
    inlineCodeStylePreset: H,
    linkStylePreset: H,
  };
function Zb(e, t, o) {
  return t.type !== o.type
    ? !1
    : t.type === "lineBreak"
      ? !0
      : o.type !== "text"
        ? !1
        : xt(e, "styles")
          ? Re(e, t, o, Jb)
          : Re(e, t, o, pp);
}
function wa(e, t) {
  return e === t
    ? !0
    : e === void 0 ||
        t === void 0 ||
        !Pt(e.openInNewTab, t.openInNewTab) ||
        !Pt(e.smoothScroll, t.smoothScroll) ||
        !Pt(e.clickTrackingId, t.clickTrackingId) ||
        !Pt(e.preserveParams, t.preserveParams) ||
        !Qb(e.relValues, t.relValues)
      ? !1
      : pe(e.link, t.link);
}
function Qb(e, t) {
  if (e === t) return !0;
  if (e === void 0 || t === void 0) return !1;
  if (w(e) || w(t)) return Pt(e, t);
  if (e.length !== t.length) return !1;
  for (let o = 0; o < e.length; o++) if (e[o] !== t[o]) return !1;
  return !0;
}
function Re(e, t, o, n) {
  for (let r in n)
    if (Object.hasOwn(n, r)) {
      let i = n[r];
      if (!i(e, t[r], o[r])) return !1;
    }
  return !0;
}
function fp(e, t) {
  return t in e ? Reflect.get(e, t) : void 0;
}
function Ma(e, t, o) {
  return fp(e, o) === fp(t, o);
}
function cr(e) {
  return {
    id: e.id ?? Se(),
    type: "richText",
    variant: e.variant,
    childNodes: pr(e.variant, e.childNodes),
  };
}
function pr(e, t) {
  return t.map((o) => eT(e, o));
}
function eT(e, t) {
  switch (t.type) {
    case "textBlock":
      return tT(e, t);
    case "bulletedList":
      return oT(e, t);
    case "numberedList":
      return nT(e, t);
    case "blockquote": {
      let o = rT(e, t);
      return (h(Ne(o, e), "normalizeRichTextDocument: unexpected node: blockquote"), o);
    }
    case "table": {
      let o = iT(e, t);
      return (h(Ne(o, e), "normalizeRichTextDocument: unexpected node: table"), o);
    }
    case "media":
    case "module":
      return t;
  }
}
function tT(e, t) {
  return { ...t, childNodes: dT(e, t.childNodes) };
}
function oT(e, t) {
  let o = t.childNodes.map((n) => mp(e, n));
  return { ...t, childNodes: o.length > 0 ? o : [yp()] };
}
function nT(e, t) {
  let o = t.childNodes.map((n) => mp(e, n));
  return { ...t, childNodes: o.length > 0 ? o : [yp()] };
}
function rT(e, t) {
  let o = pr(e, t.childNodes);
  return { ...t, childNodes: o.length > 0 ? o : [Mo()] };
}
function iT(e, t) {
  if (t.childNodes.length === 0) return { ...t, childNodes: [hT()] };
  if (t.childNodes.every((n) => n.childNodes.length === 0))
    return { ...t, childNodes: t.childNodes.map((n) => ({ ...n, childNodes: [Ea()] })) };
  let o = t.childNodes.map((n) => lT(e, n));
  return { ...t, childNodes: aT(e, o) };
}
function aT(e, t) {
  let { width: o, height: n, slots: r } = sT(t);
  for (
    h(o > 0, "richTextDocumentNormalization: table has no cells"),
      h(n > 0, "richTextDocumentNormalization: table has no rows");
    t.length < n;
  )
    t.push(xT());
  for (let i = 0; i < n; i++) {
    let a = r[i],
      s = t[i];
    h(a && s, "richTextDocumentNormalization: row length mismatch");
    let l = 0;
    for (let u = 0; u < a.length; u++) {
      let c = s.childNodes[l],
        m = a[u];
      if (!m?.length) (s.childNodes.splice(l, 0, Ea()), l++);
      else if (c)
        for (let f of m) {
          h(f, "richTextDocumentNormalization: slotCell is undefined");
          let x = f.cellX + f.width,
            T = f.cellY + f.height;
          (h(
            u >= f.cellX && u < x && i >= f.cellY && i < T,
            () =>
              `richTextDocumentNormalization: table cell bounds error. (${u}, ${i}) not within (${f.cellX}, ${f.cellY})...(${x}, ${T})`
          ),
            f.cell === c && l++);
        }
    }
  }
  return t;
}
function sT(e) {
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
      slots: Array.from({ length: n }, (f, x) =>
        Array.from({ length: o }, (T, V) => t[x]?.[V] ?? [])
      ),
    }
  );
  function a(f, x) {
    (n === r && n++,
      h(r <= n, "richTextDocumentNormalization: table forming algorithm height error"));
    let T = 0;
    if ((l(), f.childNodes.length === 0)) {
      r++;
      return;
    }
    for (let V = 0; V < f.childNodes.length; V++) {
      let R = f.childNodes[V];
      for (; T < o && m(T, r);) T++;
      (T === o && o++,
        h(T <= o, "richTextDocumentNormalization: table forming algorithm width error"));
      let y = Math.min(R.columnSpan || 1, 1e3),
        C = Math.min(R.rowSpan ?? 1, 65534),
        z = !1;
      (C === 0 && ((z = !0), (C = 1)), o < T + y && (o = T + y), n < r + C && (n = r + C));
      let j = { cell: R, cellX: T, cellY: r, width: y, height: C };
      (u(j), z && i.push({ cell: j, cellX: T, width: y }), (T += y));
    }
    r += 1;
  }
  function s() {
    for (; r < n;) (l(), (r += 1));
    i = [];
  }
  function l() {
    for (let { cell: f, cellX: x, width: T } of i) (c(f, r, x, x + T), f.height++);
  }
  function u(f) {
    for (let x = f.cellX; x < f.cellX + f.width; x++)
      for (let T = f.cellY; T < f.cellY + f.height; T++) {
        let V = (t[T] ??= []);
        (V[x] ??= []).push(f);
      }
  }
  function c(f, x, T, V) {
    t[x] ??= [];
    for (let R = T; R < V; R++) (t[x][R] ??= []).push(f);
  }
  function m(f, x) {
    return !!t[x]?.[f]?.length;
  }
}
function mp(e, t) {
  let o = pr(e, t.childNodes);
  return { ...t, childNodes: o.length > 0 ? o : [Mo("inherit")] };
}
function lT(e, t) {
  return { ...t, childNodes: t.childNodes.map((o) => uT(e, o)) };
}
function uT(e, t) {
  let o = pr(e, t.childNodes),
    n = { ...t, childNodes: o.length > 0 ? o : [Mo()] };
  return (
    n.columnSpan !== void 0 && n.columnSpan < 1 && (n.columnSpan = 1),
    n.rowSpan !== void 0 && n.rowSpan < 0 && (n.rowSpan = 0),
    n
  );
}
function dT(e, t) {
  let n = pT(t).filter((i) => i.type === "lineBreak" || i.text.length > 0),
    r = mT(n);
  if (r.some((i) => i.type === "text")) return r;
  for (let i of t)
    if (i.type === "text" && i.text === "" && cT(i)) {
      r.push(i);
      break;
    }
  return r;
}
function cT(e) {
  let t = e;
  return !!(t.inlineStyles || t.linkStylePreset || t.inlineCodeStylePreset);
}
function pT(e) {
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
    fT(o, t);
  }
  return t;
}
function fT(e, t) {
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
      a.length > 0 && t.push({ ...e, id: n ? Se() : e.id, text: a });
      return;
    }
    let i = e.text.slice(o, r);
    (i.length > 0 && (t.push({ ...e, id: n ? Se() : e.id, text: i }), (n = !0)),
      t.push({ id: Se(), type: "lineBreak" }),
      (o = r + 1));
  }
}
function mT(e) {
  let t = [];
  for (let o of e) {
    let n = t[t.length - 1];
    if (n?.type === "text" && o.type === "text" && yT(n, o)) {
      t[t.length - 1] = { ...n, text: n.text + o.text };
      continue;
    }
    t.push(o.type === "text" ? { ...o } : o);
  }
  return t;
}
function yT(e, t) {
  if (e.bold !== t.bold || e.italic !== t.italic || e.inlineCode !== t.inlineCode) return !1;
  let o = "inlineStyles" in e ? e.inlineStyles : void 0,
    n = "inlineStyles" in t ? t.inlineStyles : void 0;
  if (!pe(o, n)) return !1;
  let r = "backgroundStyles" in e ? e.backgroundStyles : void 0,
    i = "backgroundStyles" in t ? t.backgroundStyles : void 0;
  return !pe(r, i) || !Ma(e, t, "inlineCodeStylePreset") || !Ma(e, t, "linkStylePreset")
    ? !1
    : wa(e.link, t.link);
}
function Mo(e = "auto") {
  return { id: Se(), type: "textBlock", tag: "p", textDirection: e, childNodes: [] };
}
function yp() {
  return { id: Se(), type: "listItem", childNodes: [Mo("inherit")] };
}
function hT() {
  return { id: Se(), type: "tableRow", childNodes: [Ea()] };
}
function xT() {
  return { id: Se(), type: "tableRow", childNodes: [] };
}
function Ea() {
  return { id: Se(), type: "tableCell", cellType: "cell", childNodes: [Mo()] };
}
function DW(e, t) {
  t.document?.(e);
  for (let o of e.childNodes) fr(o, t);
}
function LW(e, t) {
  if (t.document?.(e) === !0) return e;
  for (let o of e.childNodes) {
    let n = mr(o, t);
    if (n) return n;
  }
}
function bp(e, t, o = {}) {
  let n = be(e, t.document, (r) => {
    let i = Xe(r.childNodes, (a) => yr(e.variant, a, t));
    return i === r.childNodes ? r : { ...r, childNodes: i };
  });
  return n === e ? e : o.normalize === !1 ? n : cr(n);
}
function fr(e, t) {
  switch (e.type) {
    case "textBlock":
      t.textBlock?.(e);
      for (let o of e.childNodes) TT(o, t);
      return;
    case "bulletedList":
      t.bulletedList?.(e);
      for (let o of e.childNodes) hp(o, t);
      return;
    case "numberedList":
      t.numberedList?.(e);
      for (let o of e.childNodes) hp(o, t);
      return;
    case "blockquote":
      t.blockquote?.(e);
      for (let o of e.childNodes) fr(o, t);
      return;
    case "media":
      t.media?.(e);
      return;
    case "module":
      t.module?.(e);
      return;
    case "table":
      t.table?.(e);
      for (let o of e.childNodes) gT(o, t);
      return;
  }
}
function hp(e, t) {
  t.listItem?.(e);
  for (let o of e.childNodes) fr(o, t);
}
function gT(e, t) {
  t.tableRow?.(e);
  for (let o of e.childNodes) bT(o, t);
}
function bT(e, t) {
  t.tableCell?.(e);
  for (let o of e.childNodes) fr(o, t);
}
function TT(e, t) {
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
      for (let o of e.childNodes) {
        let n = ST(o, t);
        if (n) return n;
      }
      return;
    case "bulletedList":
      if (t.bulletedList?.(e) === !0) return e;
      for (let o of e.childNodes) {
        let n = xp(o, t);
        if (n) return n;
      }
      return;
    case "numberedList":
      if (t.numberedList?.(e) === !0) return e;
      for (let o of e.childNodes) {
        let n = xp(o, t);
        if (n) return n;
      }
      return;
    case "blockquote":
      if (t.blockquote?.(e) === !0) return e;
      for (let o of e.childNodes) {
        let n = mr(o, t);
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
        let n = CT(o, t);
        if (n) return n;
      }
      return;
  }
}
function xp(e, t) {
  if (t.listItem?.(e) === !0) return e;
  for (let o of e.childNodes) {
    let n = mr(o, t);
    if (n) return n;
  }
}
function CT(e, t) {
  if (t.tableRow?.(e) === !0) return e;
  for (let o of e.childNodes) {
    let n = VT(o, t);
    if (n) return n;
  }
}
function VT(e, t) {
  if (t.tableCell?.(e) === !0) return e;
  for (let o of e.childNodes) {
    let n = mr(o, t);
    if (n) return n;
  }
}
function ST(e, t) {
  switch (e.type) {
    case "text":
      return t.text?.(e) === !0 ? e : void 0;
    case "lineBreak":
      return t.lineBreak?.(e) === !0 ? e : void 0;
  }
}
function yr(e, t, o) {
  switch (t.type) {
    case "textBlock": {
      let n = be(t, o.textBlock, (r) => {
        let i = Xe(r.childNodes, (a) => IT(e, a, o));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        h(
          Ne(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
    case "bulletedList": {
      let n = be(t, o.bulletedList, (r) => {
        let i = Xe(r.childNodes, (a) => gp(e, a, o));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        h(
          Ne(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
    case "numberedList": {
      let n = be(t, o.numberedList, (r) => {
        let i = Xe(r.childNodes, (a) => gp(e, a, o));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        h(
          Ne(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
    case "blockquote": {
      let n = be(t, o.blockquote, (r) => {
        let i = Xe(r.childNodes, (a) => yr(e, a, o));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        h(
          Ne(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
    case "media": {
      let n = be(t, o.media, (r) => r);
      return (
        h(
          Ne(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
    case "module": {
      let n = be(t, o.module, (r) => r);
      return (
        h(
          Ne(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
    case "table": {
      let n = be(t, o.table, (r) => {
        let i = Xe(r.childNodes, (a) => NT(e, a, o));
        return i === r.childNodes ? r : { ...r, childNodes: i };
      });
      return (
        h(
          Ne(n, e),
          () => "mapRichTextBlock: mapper callback returned an invalid block for variant " + e
        ),
        n
      );
    }
  }
}
function gp(e, t, o) {
  return be(t, o.listItem, (n) => {
    let r = Xe(n.childNodes, (i) => yr(e, i, o));
    return r === n.childNodes ? n : { ...n, childNodes: r };
  });
}
function NT(e, t, o) {
  return be(t, o.tableRow, (n) => {
    let r = Xe(n.childNodes, (i) => RT(e, i, o));
    return r === n.childNodes ? n : { ...n, childNodes: r };
  });
}
function RT(e, t, o) {
  return be(t, o.tableCell, (n) => {
    let r = Xe(n.childNodes, (i) => yr(e, i, o));
    return r === n.childNodes ? n : { ...n, childNodes: r };
  });
}
function IT(e, t, o) {
  switch (t.type) {
    case "text":
      return be(t, o.text, (n) => n);
    case "lineBreak":
      return be(t, o.lineBreak, (n) => n);
  }
}
function be(e, t, o) {
  let n = PT(e, t),
    r = o(n);
  return kT(r, t);
}
function PT(e, t) {
  return !t || typeof t == "function" ? e : (t.enter?.(e) ?? e);
}
function kT(e, t) {
  return t ? (typeof t == "function" ? t(e) : (t.exit?.(e) ?? e)) : e;
}
function Xe(e, t) {
  let o;
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (!r) continue;
    let i = t(r);
    i !== r && ((o ??= Array.from(e)), (o[n] = i));
  }
  return o ?? e;
}
var Tp = Symbol.for("framer.sharedEnum"),
  BW = Symbol.for("framer.sharedTypeIdentity");
function Cp(e) {
  return q(e) && Tp in e;
}
function AW(e) {
  let { options: t, localizedOptionTitles: o } = e,
    n = t.map((i, a) => e.optionTitles?.[a] ?? i),
    r = (i) => {
      if (typeof i != "string") return;
      let a = n.indexOf(i);
      return a === -1 ? void 0 : t[a];
    };
  return {
    [Tp]: !0,
    kind: "enum",
    options: t,
    optionTitles: n,
    titleFor(i, a) {
      if (typeof i != "string") return;
      let s = t.indexOf(i);
      if (s !== -1) {
        for (let l = a; l; l = l.fallback) {
          let u = o?.[l.id]?.[s];
          if (u) return u;
        }
        return n[s];
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
function vT(e) {
  return q(e) || et(e);
}
var Vp = "optional";
function DT(e) {
  return !!e && Vp in e && e[Vp] === !0;
}
function LT(e) {
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
        if (!("definition" in e) || !Cp(e.definition)) return;
        let { definition: t } = e;
        if (t.kind === "enum")
          return ee(e.defaultValue) && t.options.includes(e.defaultValue) ? e.defaultValue : void 0;
        t.kind;
        return;
      }
      case "boolean":
        return Is(e.defaultValue) ? e.defaultValue : void 0;
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
        return q(e.defaultValue) ? e.defaultValue : void 0;
      case "border":
        return q(e.defaultValue) ? e.defaultValue : void 0;
      case "font":
      case "location":
        return q(e.defaultValue) ? e.defaultValue : void 0;
      case "linkrelvalues":
        return Go(e.defaultValue) ? e.defaultValue : void 0;
      case "multicollectionreference":
        return Go(e.defaultValue) ? e.defaultValue : void 0;
      case "object": {
        let t = q(e.defaultValue) ? e.defaultValue : {};
        return (q(e.controls) && Sp(t, e.controls), t);
      }
      case "array":
        return Go(e.defaultValue) ? e.defaultValue : void 0;
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
function Sp(e, t) {
  for (let o in t) {
    let n = t[o];
    if (!n) continue;
    let r = e[o];
    if (!St(r) || DT(n)) continue;
    let i = LT(n);
    St(i) || (e[o] = i);
  }
}
function wT(e) {
  if (q(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Np(e, t) {
  if (!vT(e)) return;
  let o = wT(e);
  Sp(o, t);
}
var Rp = "outputControls";
function MT(e) {
  return (q(e) || et(e)) && Rp in e;
}
function Ip(e, t) {
  Object.assign(e, { [Rp]: t });
}
function jW(e) {
  if (MT(e)) return e.outputControls;
}
function Pp(e, t, o) {
  (Object.assign(e, { propertyControls: t }), Np(e, t), o !== void 0 && Ip(e, o));
}
function UW(e) {
  return e.propertyControls;
}
function hr(e, t = 2) {
  let o = 0;
  if (typeof e == "number") o = e;
  else if (typeof e == "string") o = parseFloat(e);
  else return;
  if (Number.isInteger(o)) return o;
  let n = 1;
  for (; t-- > 0;) n *= 10;
  return (o < 0 && (n *= -1), Math.round(o * n) / n);
}
function Ba(e) {
  let { paddingPerSide: t, paddingTop: o, paddingBottom: n, paddingLeft: r, paddingRight: i } = e;
  return t !== !1 && (o !== void 0 || n !== void 0 || r !== void 0 || i !== void 0);
}
function kp(e) {
  let { padding: t = 0, paddingTop: o, paddingBottom: n, paddingLeft: r, paddingRight: i } = e;
  return Ba(e)
    ? {
        top: o !== void 0 ? o : t,
        bottom: n !== void 0 ? n : t,
        left: r !== void 0 ? r : t,
        right: i !== void 0 ? i : t,
      }
    : { top: t, bottom: t, left: t, right: t };
}
function vp({ top: e, left: t, bottom: o, right: n }) {
  return e === n && n === o && o === t ? `${e}px` : `${e}px ${n}px ${o}px ${t}px`;
}
function ZW(e) {
  if (e === "none") return null;
  let t = e
      .trim()
      .split(/\s+/u)
      .map((a) => hr(a)),
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
var gr = E(ne(), 1);
var Mp = E(re(), 1),
  cz = (() => {
    let e = gr.default.forwardRef(function (o, n) {
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
          willChangeTransform: x,
          __fromCodeComponentNode: T,
          parentSize: V,
          __contentWrapperStyle: R,
          ...y
        } = o,
        C = br(i),
        z = Lp(a),
        j = Lp(s),
        k = Ba(y) || y.padding ? vp(kp(y)) : void 0,
        Z = k === void 0 ? {} : { padding: k },
        {
          width: ce,
          height: ae,
          minWidth: Je,
          maxWidth: rt,
          minHeight: ps,
          maxHeight: Zr,
          ...Qr
        } = R ?? {},
        Ze = {
          ...m,
          display: "flex",
          flexDirection: C,
          flexWrap: u ? "wrap" : "nowrap",
          justifyContent: z,
          alignItems: j,
          alignContent: j,
          ...Z,
          ...Qr,
        };
      (vn.applyWillChange({ willChangeTransform: x }, Ze, !0),
        T &&
          !Gt(On(y)) &&
          ((y.width = "100%"), (y.height = "100%"), (y._constraints = { enabled: !0 })));
      let sm = Fn(o),
        { children: lm, props: um } = Bn(y, c),
        fs = y.widthType ?? (y.width === "auto" ? 2 : 0),
        ms = y.heightType ?? (y.height === "auto" ? 2 : 0),
        dm = ET(lm, i, fs, ms),
        cm = Rn(dm, V ?? 1),
        ys = { "data-framer-component-type": "Stack" },
        v = y.__fromCanvasComponent;
      if ((v && (ys["data-framer-generated"] = !0), BT(l, z, u))) {
        let hs = wp(z);
        ((hs || i !== "horizontal") && (Ze.columnGap = `${l}px`),
          (hs || i !== "vertical") && (Ze.rowGap = `${l}px`));
      }
      return (
        Ze.width === void 0 && fs === 2 && (Ze.width = "min-content"),
        Ze.height === void 0 && ms === 2 && (Ze.height = "min-content"),
        (0, Mp.jsx)(Jd, {
          as: r,
          background: v ? void 0 : "none",
          ...um,
          layoutId: sm,
          ref: n,
          ...ys,
          style: Ze,
          className: f,
          layoutScroll: !0,
          children: cm,
        })
      );
    });
    return (
      (e.defaultProps = { distribution: "start" }),
      (e.displayName = "Stack"),
      Pp(e, {
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
function Dp(e) {
  return typeof e == "string" && e.endsWith("fr");
}
function xr(e) {
  let t = parseFloat(e);
  return P(t) ? t : 0;
}
function ET(e, t, o, n) {
  return gr.default.Children.map(e, (r) => {
    if (!Xo(r) || !qo(r)) return;
    let i = t === "vertical",
      a = {},
      s = !1,
      { style: l, size: u } = r.props,
      { width: c, height: m } = r.props;
    u !== void 0 && (c === void 0 && (c = u), m === void 0 && (m = u));
    let f = c,
      x = m;
    if (
      (Dp(c) &&
        ((s = !0),
        (s = !0),
        i
          ? o === 2
            ? ((a.alignSelf = "stretch"), (f = "auto"))
            : (f = `${xr(c) * 100}%`)
          : ((f = 1), (a.flexGrow = xr(c)), (a.flexBasis = 0)),
        (a.width = f)),
      Dp(m) &&
        ((s = !0),
        i
          ? ((x = 1), (a.flexGrow = xr(m)), (a.flexBasis = 0))
          : n === 2
            ? ((a.alignSelf = "stretch"), (x = "auto"))
            : (x = `${xr(m) * 100}%`),
        (a.height = x)),
      !s)
    )
      return r;
    let T = { ...l, ...a };
    return gr.default.cloneElement(r, { width: f, height: x, style: T });
  });
}
function wp(e) {
  return e ? !["space-between", "space-around", "space-evenly", "stretch"].includes(e) : !1;
}
function BT(e, t, o) {
  return !(!e || (!o && !wp(t)));
}
function br(e) {
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
var Tr = ["auto", "pixelated"],
  xz = { imageRendering: void 0 },
  gz = { imageRendering: "auto" },
  AT = "imageRendering";
function bz(e) {
  return He(e) && !A(e.htmlContent) ? !1 : AT in e;
}
var FT = new Set(Tr);
function OT(e) {
  return p(e) && FT.has(e);
}
function Tz(e) {
  return OT(e) ? e : "auto";
}
function Ep(e) {
  switch (e) {
    case "auto":
      return "Smooth";
    case "pixelated":
      return "Sharp";
    default:
      return "Unknown";
  }
}
var Cr = ["clip", "visible", "hidden", "auto"],
  WT = ["clip", "hidden"],
  zT = ["visible", "auto"],
  Iz = { overflow: void 0, overflowX: void 0, overflowY: void 0 },
  Bp = "overflow",
  Pz = [Bp, "overflowX", "overflowY"];
function Ap(e) {
  return e ? Bp in e : !1;
}
var HT = new Set(Cr);
function kz(e) {
  return p(e) ? HT.has(e) : !1;
}
var GT = new Set(WT);
function vz(e) {
  return p(e) && GT.has(e);
}
var jT = new Set(zT);
function Dz(e) {
  return p(e) && jT.has(e);
}
function Fp(e) {
  return e === "auto" ? "Scroll" : Ko(e);
}
function Lz(e) {
  if (!Ap(e)) return !1;
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
function wz(e) {
  return Ap(e) ? e.overflow === "auto" || e.overflowX === "auto" || e.overflowY === "auto" : !1;
}
function Mz(e, t) {
  return I(t) && !I(e.overflowX) && !A(e.overflowX) && e.overflowX === e.overflowY;
}
var Op = { visible: "clip", clip: "visible", auto: "hidden", hidden: "auto" };
function Ez(e, t, o, n = {}) {
  let r = e.resolveValue(t) || e.resolveValue(o);
  return r ? (n.preferSame ? r : Op[r]) : "clip";
}
function Bz(e, t) {
  return e === t || I(t) ? !0 : (I(e) && (e = "visible"), Op[e] === t);
}
function Wp(e) {
  let t = {};
  for (let o in e) {
    let n = e[o];
    if (De(n))
      if (n.type === "fusednumber")
        S(n.value) ? (t[o] = n.value) : rp(n) && (t[o] = n.value.single);
      else if (n.type === "object" && g(n.value)) {
        if (!g(n.value)) continue;
        t[o] = Wp(n.value);
      } else
        n.type === "array" && B(n.value)
          ? (t[o] = n.value
              .filter(De)
              .map((r) => (r.type === "object" ? (g(r.value) ? Wp(r.value) : void 0) : r.value)))
          : (t[o] = n.value);
  }
  return t;
}
function zp(e) {
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
      return fo;
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
var _T = {
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
function Hp(e) {
  if (e.type === "controlReference") {
    if (e.expectedType !== "enum") return !1;
    let t = le(e.entityIdentifier);
    return Dt(t) && t.type === "collection";
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
function Yz(e) {
  return e.type !== "controlReference"
    ? Hp({ type: e.type })
    : e.expectedType === "segmentedenum"
      ? !1
      : Hp({ type: e.type, expectedType: e.expectedType, entityIdentifier: e.entityIdentifier });
}
function KT(e) {
  return e === "WebPage" || e === "SmartComponent";
}
function $T(e, t) {
  return KT(t) ? Object.hasOwn(_T, e) : !1;
}
function UT(e, t) {
  return $T(e.type, t) ? (e.type !== "controlReference" ? !0 : e.expectedType !== "file") : !1;
}
function Q(e, t) {
  return UT(e, t) && e.optional === !0;
}
function oo(e) {
  return !As(e) && e.type !== "divider";
}
function Jz(e) {
  return e.type === "string";
}
function Zz(e) {
  return e.type === "richtext";
}
function Qz(e) {
  return e.type === "slug";
}
function e1(e) {
  return e.type === "date";
}
function qT(e) {
  return e.type === "collectionreference";
}
function XT(e) {
  return e.type === "multicollectionreference";
}
function t1(e) {
  return qT(e) || XT(e);
}
function YT(e) {
  return oo(e) && yo(e.type);
}
var o1 = YT;
function n1(e) {
  return e?.type === "divider";
}
function JT(e) {
  return e.type === "array";
}
function r1(e) {
  return e.type === "object";
}
function ZT(e) {
  return e.type === "image";
}
function QT(e) {
  return JT(e) && e.itemVariables.length === 1 && e.itemVariables.every(ZT);
}
function Aa(e) {
  return QT(e) && e.displayGalleryAsArray !== !0;
}
var eC = {
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
function jp(e) {
  return Object.hasOwn(eC, e.type);
}
var tC = {
  boolean: !0,
  date: !0,
  string: !0,
  number: !0,
  collectionreference: !0,
  multicollectionreference: !0,
  controlReference: !0,
};
function l1(e) {
  return oo(e) ? Object.hasOwn(tC, e.type) : !1;
}
var _p = Symbol("localizedOptionTitles");
function Eo(e, t) {
  e[_p] = t;
}
function Kp(e) {
  return e[_p] ?? null;
}
function $p(e) {
  let t = "hasProp";
  return !!e && typeof e == "object" && t in e && typeof e[t] == "function";
}
function Fa(e, t, o) {
  if (e === void 0) return t.push("u");
  if (e === null) return t.push("n");
  let n = typeof e;
  if (n === "string") return t.push(JSON.stringify(e));
  if (n !== "object") return t.push(String(e));
  if (Array.isArray(e)) {
    for (let i = 0; i < e.length; i++) (Fa(e[i], t, o), t.push(","));
    return;
  }
  let r = $p(e) ? e.keys() : Object.keys(e);
  r.sort();
  for (let i of r) {
    let a = e[i];
    (o && ((a = o(i, a, e)), a === void 0)) || (t.push(i), t.push(":"), Fa(a, t, o), t.push(","));
  }
}
function Up(e, t) {
  let o = [];
  return (Fa(e, o, t), o.join(""));
}
var oC = 1;
function h1(e) {
  return Zs("sharedEnum", e, "default").value;
}
function qp(e) {
  let t = le(e);
  if (!(!Dt(t) || t.type !== "sharedEnum")) return t.localIdName;
}
function nC(e) {
  let t = {};
  for (let [o, n] of e.cases.entries())
    for (let [r, i] of Object.entries(n.nameLocalized ?? {})) {
      let a = i?.value;
      typeof a != "string" || a === "" || ((t[r] ??= e.cases.map(() => null)), (t[r][o] = a));
    }
  return {
    options: e.cases.map((o) => o.id),
    optionTitles: e.cases.map((o) => o.name),
    localizedOptionTitles: t,
  };
}
function x1(e) {
  return Up({ version: oC, definition: nC(e) });
}
var Oa = Symbol("fromOtherProject");
function R1(e) {
  let t = { ...e.properties },
    o = !1;
  for (let [n, r] of Object.entries(t))
    !g(r) || r.type !== "sharedtype" || ((t[n] = { ...r, [Oa]: !0 }), (o = !0));
  return o ? { ...e, properties: t } : e;
}
function Wa(e) {
  return Oa in e && e[Oa] === !0;
}
function Jp(e, t) {
  let o = qp(t);
  if (!o) return;
  let n = e.get(o);
  return dl(n) ? n : void 0;
}
var Xp = new WeakMap();
function rC(e, t) {
  if (t?.type === "enum") return t;
  if (t?.type !== "sharedtype") return;
  if (t.kind !== "enum") {
    t.kind;
    return;
  }
  if (Wa(t)) return;
  let o = Jp(e, t.moduleIdentifier);
  if (!o) return;
  if (o.mutable) return Yp(t, o);
  let n = Xp.get(o);
  n || ((n = new WeakMap()), Xp.set(o, n));
  let r = n.get(t);
  return (r || ((r = Yp(t, o)), n.set(t, r)), r);
}
function I1(e, t) {
  return t?.type !== "sharedtype" || !e ? t : (rC(e, t) ?? t);
}
function Yp(e, t) {
  let o = t.cases.map((r) => r.id),
    n = {
      ...e,
      type: "enum",
      defaultValue: e.defaultValue && o.includes(e.defaultValue) ? e.defaultValue : void 0,
      options: o,
      optionTitles: t.cases.map((r) => r.name),
    };
  return (
    Eo(
      n,
      t.cases.map((r) => r.nameLocalized)
    ),
    n
  );
}
function P1(e, t) {
  let { kind: o, moduleIdentifier: n, ...r } = t;
  return (o !== "enum" && void 0, { ...r, type: "enum", cases: Jp(e, n)?.cases ?? [] });
}
function Zp(e, t) {
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
      L(e);
  }
}
var iC = /,(?![^(]*\))/u,
  aC = /\s(?![^(]*\))/u,
  sC = /(?:#|0x)(?:[a-f\d]{3}|[a-f\d]{6})\b|(?:rgb|hsl)a?\([^)]*\)/u,
  Qp = (e, t) => {
    let o = e.trim().toLowerCase().split(aC),
      n = o.includes("inset"),
      r = [],
      i = o.find((c) => sC.test(c)) ?? o[o.length - 1];
    for (let c of o) c !== "inset" && c !== i && r.push(hr(c));
    let [a, s, l, u] = r;
    return ar({
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
function B1(e, t) {
  let o = Qp(e, 0);
  if (
    o.color === "transparent" ||
    o.color === "rgba(0, 0, 0, 0)" ||
    (o.x === 0 && o.y === 0 && o.spread === 0 && o.blur === 0)
  )
    return;
  let n = b(o.color);
  if (!(!n || n.a <= 0)) return { ...o, id: t };
}
function za(e) {
  return e
    .split(iC)
    .map(Qp)
    .filter((t) => {
      if (
        t.color === "transparent" ||
        t.color === "rgba(0, 0, 0, 0)" ||
        (t.x === 0 && t.y === 0 && t.spread === 0 && t.blur === 0)
      )
        return !1;
      let o = b(t.color);
      return o ? o.a > 0 : !1;
    });
}
function A1(e) {
  let t = e.boxShadow;
  if (!(!t || t === "none")) return { boxShadows: za(t) };
}
function j1(e) {
  return Zt(e) || A(e) ? e : [];
}
function _1(e) {
  return p(e)
    ? za(e)
    : B(e) && e.every(ud.is)
      ? e.map((t, o) => ar({ ...t, id: `box-shadow-${o}` }))
      : [];
}
function ef(e) {
  let { id: t, ...o } = e;
  return o;
}
var lC = "alt";
function Ha(e) {
  return g(e) && lC in e;
}
var tf = "altLocalized";
function U1(e) {
  return g(e) && tf in e && !!e[tf];
}
var uC = "positionX",
  dC = "positionY";
function of(e) {
  return g(e) ? uC in e || dC in e : !1;
}
function Ga(e) {
  return of(e) ? p(e.positionX) && p(e.positionY) : !1;
}
var cC = {};
function Y1(e) {
  return of(e) ? e : cC;
}
function nf(e) {
  return e.embedId !== void 0 ? e.embedId : /-\d+$/u.test(e.id) ? Ic(e.id) : e.id;
}
function eH(e) {
  let t = new Set();
  return bp(
    e,
    {
      module(o) {
        let n = o.embedId;
        if (n === void 0) return o;
        if (!t.has(n)) return (t.add(n), o);
        let r = Se();
        return (t.add(r), { ...o, embedId: r });
      },
    },
    { normalize: !1 }
  );
}
var no = 16,
  nH = { rootFontSize: void 0 },
  ja = "rootFontSize";
function rH(e) {
  return ja in e;
}
function rf(e) {
  return ja in e && S(e[ja]);
}
var af = "--framer-root-font-size";
function xH(e, t, o, n) {
  if (n) {
    let r = pC(t, n, o);
    if (S(r)) return r;
  }
  if (Mt(e)) return e.getPrimaryVariant().rootFontSize;
  if (ze(e)) {
    let r = e.layoutTemplateIdentifier;
    return r ? sf(r, o) : e.getPrimaryVariant().rootFontSize;
  }
  return mC(t.root, o);
}
function pC(e, t, o) {
  let n = ha(e, t);
  if (n) return Rc(n) ? fC(e, o, n) : rf(n) ? n.rootFontSize : no;
}
function fC(e, t, o) {
  let n = Nc(e, o);
  if (!n) return no;
  let r = le(n)?.localId;
  if (!r) return no;
  let i = t
    .forType("layoutTemplate")
    .getByLocalId(r)
    .annotations(null, "default")?.framerBreakpoints;
  if (!i || !Vc(i)) return no;
  h(mc(o), "Breakpoint node must have size properties");
  let a = Qn(i, o.width);
  return a && S(i[a]?.rootFontSize) ? i[a].rootFontSize : no;
}
function mC(e, t) {
  if (e.layoutTemplateIdentifier) return sf(e.layoutTemplateIdentifier, t);
  if (!e.homePageNodeId) return;
  let o = t.forType("screen").getByStableName(e.homePageNodeId).annotations(null, "default");
  return lf(o);
}
function sf(e, t) {
  let o = le(e),
    n = t.forType("layoutTemplate").getByLocalId(o.localId).annotations(null, o.exportSpecifier);
  return lf(n);
}
function lf(e) {
  if (!e) return;
  let t = e.framerRootFontSize;
  if (S(t)) return t;
}
var uf = /var\(--variable-reference-(?<variableId>[^)-]*)(?:-(?<providerId>[^)]*))?/;
function VH(e) {
  let t = new RegExp(uf, "g"),
    o = e.matchAll(t),
    n = [];
  for (let r of o) {
    if (!r.groups) continue;
    let { variableId: i, providerId: a } = r.groups,
      s = bi(i, a);
    n.push(s);
  }
  return n;
}
function SH(e) {
  return p(e) && e.startsWith("--");
}
function NH(e) {
  let t = uf.exec(e);
  if (t?.groups) {
    let { variableId: o, providerId: n } = t.groups;
    return bi(o, n);
  }
}
function yC(e) {
  let t = e.providerId ? `-${e.providerId}` : "";
  return `--variable-reference-${e.id}${t}`;
}
function df(e) {
  return `var(${yC(e)})`;
}
function RH(e) {
  return `calc(var(${af}, 1rem) * ${e})`;
}
var hC = /calc\(var\(--framer-root-font-size,\s*1rem\)\s*\*\s*(?<remValue>\d+(?:\.\d+)?)\)/u;
function IH(e) {
  let t = hC.exec(e);
  if (t?.groups) {
    let { remValue: o } = t.groups,
      n = parseFloat(o);
    return S(n) ? [n, "rem"] : void 0;
  }
}
var xC = new Set(["img", "br"]);
function cf(e, t) {
  return J("ul", { dir: Sr(e.textDirection) }, ...e.childNodes.map(t));
}
function pf(e, t) {
  return J(
    "ol",
    {
      dir: Sr(e.textDirection),
      start: e.start !== 1 ? e.start : void 0,
      style: e.listStyleType !== "decimal" ? { "--list-style-type": e.listStyleType } : void 0,
    },
    ...e.childNodes.map(t)
  );
}
function ff(e, t) {
  return J("blockquote", {}, ...e.childNodes.map(t));
}
function mf(e, t) {
  return J(
    "figure",
    { class: "framer-table-wrapper" },
    J("table", {}, J("tbody", {}, ...e.childNodes.map((o) => gC(o, t))))
  );
}
function gC(e, t) {
  return J("tr", {}, ...e.childNodes.map((o) => bC(o, t)));
}
function bC(e, t) {
  return J(
    e.cellType === "header" ? "th" : "td",
    { colspan: e.columnSpan, rowspan: e.rowSpan },
    ...e.childNodes.map(t)
  );
}
function yf(e) {
  return e.type === "lineBreak" ? J("br", {}) : TC(e);
}
function TC(e) {
  let t = VC(e.text);
  return (
    e.bold && (t = J("strong", {}, t)),
    e.italic && (t = J("em", {}, t)),
    e.inlineCode && (t = J("code", {}, t)),
    e.link && (t = J("a", Vr(e.link), t)),
    t
  );
}
function Vr(e) {
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
    "data-framer-open-in-new-tab": n === !0 ? !0 : Bo(n),
    "data-framer-smooth-scroll": r === !0 ? !0 : Bo(r),
    "data-framer-click-tracking-id": typeof i == "string" ? i : Bo(i),
    rel: Array.isArray(a) && a.length > 0 ? a.join(" ") : void 0,
    "data-framer-rel": Bo(a),
    "data-framer-preserve-params": typeof s == "boolean" ? String(s) : Bo(s),
  };
}
function Sr(e) {
  return e === "inherit" ? "auto" : e;
}
function J(e, t, ...o) {
  let n = "";
  for (let r in t) {
    let i = t[r];
    if (!(i === void 0 || i === !1)) {
      if (typeof i == "object") {
        r === "style" && (n += ` style="${CC(i)}"`);
        continue;
      }
      if (i === !0) {
        n += ` ${r}=""`;
        continue;
      }
      n += ` ${r}="${hf(String(i))}"`;
    }
  }
  return xC.has(e) ? `<${e}${n}>` : `<${e}${n}>${o.join("")}</${e}>`;
}
function CC(e) {
  let t = "";
  for (let o in e) {
    let n = e[o];
    n !== void 0 && (t && (t += " "), (t += `${o}: ${hf(n)};`));
  }
  return t;
}
function VC(e) {
  return e.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}
function hf(e) {
  return e
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
function Bo(e) {
  if (w(e)) return df(e);
}
function SC(e) {
  return cr(e).childNodes.map(Nr).join("");
}
function gf(e) {
  return typeof e == "string" ? e : SC(e);
}
function Nr(e) {
  switch (e.type) {
    case "textBlock":
      return NC(e);
    case "bulletedList":
      return cf(e, xf);
    case "numberedList":
      return pf(e, xf);
    case "blockquote":
      return ff(e, Nr);
    case "media":
      return RC(e);
    case "module":
      return IC(e);
    case "table":
      return mf(e, Nr);
    default:
      L(e);
  }
}
function NC(e) {
  return J(e.tag, { dir: Sr(e.textDirection) }, ...e.childNodes.map(yf));
}
function xf(e) {
  let t = e.childNodes[0],
    o = t?.type === "textBlock" ? t.tag : "p";
  return J("li", { "data-preset-tag": o }, ...e.childNodes.map(Nr));
}
function RC(e) {
  return e.mediaType === "video"
    ? J("video", { class: "framer-image", src: e.src, ...Vr(e.link) })
    : J("img", {
        alt: e.alt,
        "data-framer-width": e.pixelWidth,
        "data-framer-height": e.pixelHeight,
        ...Vr(e.link),
        src: e.src,
        class: "framer-image",
      });
}
function IC(e) {
  return J("framer-module", {
    "data-module-identifier": e.identifier,
    "data-module-embed-id": nf(e),
    "data-module-props": JSON.stringify(e.props),
    "data-module-width": e.width,
    "data-module-alignment": e.alignment,
  });
}
var bf = ["page", "step", "location", "date", "time", "true", "false"],
  AH = { ariaCurrent: void 0 },
  FH = { ariaCurrent: "page" },
  PC = "ariaCurrent";
function OH(e) {
  return PC in e;
}
var Tf = ["menu", "listbox", "tree", "grid", "dialog", "true", "false"],
  zH = { ariaHaspopup: void 0 },
  HH = { ariaHaspopup: "menu" },
  kC = "ariaHaspopup";
function GH(e) {
  return kC in e;
}
var Cf = ["off", "polite", "assertive"],
  _H = { ariaLive: void 0 },
  KH = { ariaLive: "polite" },
  vC = "ariaLive";
function $H(e) {
  return vC in e;
}
var Vf = [
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
  qH = { ariaRole: void 0 },
  XH = { ariaRole: "button" };
function YH(e) {
  return "ariaRole" in e;
}
var Rr = [
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
  QH = "multiply",
  eG = { blendingMode: void 0 },
  DC = "blendingMode";
function tG(e) {
  return DC in e;
}
var LC = new Set(Rr);
function oG(e) {
  return p(e) && LC.has(e);
}
var _a = ["contain", "none"],
  iG = { overscrollBehavior: void 0 },
  wC = "overscrollBehavior";
function aG(e) {
  return e ? wC in e : !1;
}
function sG(e) {
  return p(e) && (e === "contain" || e === "none");
}
var lG = { overscrollBehavior: "contain" };
var Ir = ["none", "auto"],
  cG = { pointerEvents: void 0 },
  pG = { pointerEvents: "none" },
  MC = "pointerEvents";
function fG(e) {
  return MC in e;
}
var Sf = new Set(Ir);
function mG(e) {
  return p(e.pointerEvents) && Sf.has(e.pointerEvents);
}
function yG(e) {
  return p(e) && Sf.has(e);
}
var Pr = ["none", "auto"],
  gG = { userSelect: void 0 },
  bG = { userSelect: "none" },
  EC = "userSelect";
function TG(e) {
  return EC in e;
}
var Nf = new Set(Pr);
function CG(e) {
  return p(e.userSelect) && Nf.has(e.userSelect);
}
function VG(e) {
  return p(e) && Nf.has(e);
}
var Ka = ["text", "textarea", "email", "number", "tel", "url", "date", "time"],
  Rf = {
    text: "Text",
    textarea: "Text area",
    number: "Number",
    email: "Email",
    tel: "Phone number",
    url: "URL",
    date: "Date",
    time: "Time",
  };
function BC(e) {
  return p(e) && e in Rf;
}
function If(e) {
  return BC(e) ? Rf[e] : "Text";
}
function IG(e) {
  return A(e) || e === "date" || e === "time";
}
function PG(e) {
  return A(e) || e === "text";
}
var AC = "formTextInputType";
function FC(e) {
  return AC in e;
}
var kG = {
  formTextInputType: void 0,
  formTextAreaResizable: void 0,
  formTextInputMinNumber: void 0,
  formTextInputMaxNumber: void 0,
  formInputMaxLength: void 0,
};
function vG(e) {
  return FC(e) && e.formTextInputType === "textarea";
}
var Pf = {
  stackDirection: {
    type: "enum",
    defaultValue: br(Zd),
    options: zn.map(br),
    optionTitles: zn.map(Le),
    displaySegmentedControl: !0,
    optionIcons: ["direction-horizontal", "direction-vertical"],
  },
  stackDistribution: {
    type: "enum",
    defaultValue: Gn(Qd),
    options: Hn.map(Gn),
    optionTitles: Hn.map(Le),
  },
  stackAlignment: {
    type: "enum",
    defaultValue: Gn(ec),
    options: jn.map(ac),
    optionTitles: jn.map(Le),
  },
  gridItemColumnSpan: { type: "enum", defaultValue: 1, options: ya, optionTitles: fc },
  gridItemRowSpan: { type: "enum", defaultValue: 1, options: _n, optionTitles: pc },
  userSelect: {
    type: "enum",
    defaultValue: "auto",
    options: Pr.map((e) => e),
    optionTitles: Pr.map(Le),
  },
  overscrollBehavior: {
    type: "enum",
    defaultValue: "none",
    options: _a.map((e) => e),
    optionTitles: _a.map(Le),
  },
  overflow: {
    type: "enum",
    defaultValue: "auto",
    options: Cr.map((e) => e),
    optionTitles: Cr.map(Fp),
  },
  pointerEvents: {
    type: "enum",
    defaultValue: "auto",
    options: Ir.map((e) => e),
    optionTitles: Ir.map(Le),
  },
  blendingMode: {
    type: "enum",
    defaultValue: "multiply",
    options: Rr.map((e) => e),
    optionTitles: Rr.map(Le),
  },
  formTextInputType: {
    type: "enum",
    defaultValue: "text",
    options: [...Ka],
    optionTitles: Ka.map(If),
  },
  imageRendering: {
    type: "enum",
    defaultValue: "auto",
    displaySegmentedControl: !0,
    options: [...Tr],
    optionTitles: Tr.map(Ep),
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
  ariaCurrent: { type: "enum", defaultValue: "page", options: [...bf] },
  ariaHaspopup: { type: "enum", defaultValue: "menu", options: [...Tf] },
  ariaHidden: { type: "boolean", defaultValue: !1 },
  ariaDisabled: { type: "boolean", defaultValue: !1 },
  ariaRoleDescription: { type: "string", defaultValue: "" },
  ariaRole: { type: "enum", defaultValue: "button", options: [...Vf] },
  ariaLive: { type: "enum", defaultValue: "polite", options: [...Cf] },
  ariaDescription: { type: "string", defaultValue: "" },
  tickerEffectDirectionModifier: {
    type: "enum",
    defaultValue: "default",
    displaySegmentedControl: !0,
    options: ma,
    optionTitles: ma.map(uc),
  },
};
function XG(e) {
  return Object.hasOwn(Pf, e);
}
function kf(e) {
  let t = Pf[e];
  return (h(t, () => `unknown node property control: ${e}`), t);
}
var JG = "framer/nodePropertyDefinitions",
  OC = [
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
  WC = new Set(OC);
function vf(e) {
  return typeof e == "string" && WC.has(e);
}
var zC = "src";
function kr(e) {
  return g(e) && p(e[zC]);
}
function vr(e, t) {
  switch (e.valueType) {
    case "number":
      return typeof t == "number" && Number.isFinite(t);
    case "boolean":
      return typeof t == "boolean";
    default:
      return !1;
  }
}
function nj(e, t) {
  if (vr(e, t)) return t;
  if (vr(e, e.defaultValue)) return e.defaultValue;
  switch (e.valueType) {
    case "number":
      return 0;
    case "boolean":
      return !1;
    default:
      return 0;
  }
}
var zr = E(Mf(), 1);
function Nj(e, t) {
  if (e.type === "motionvalue") return w(t) || vr(e, t);
  if (!qa(e.type, t)) return !1;
  switch (e.type) {
    case "enum":
    case "segmentedenum":
      return w(t) || (he(t) && t.outputType === "enum") ? !0 : e.options.some((o) => o === t);
  }
  return !0;
}
function qa(e, t) {
  if (w(t)) return !0;
  if (he(t)) return t.outputType === e;
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
      return eo(t) || (0, zr.isElement)(t);
    case "responsiveimage":
      return kr(t);
    case "file":
    case "image":
      return p(t) || I(t);
    case "enum":
    case "segmentedenum":
      return !!(t === void 0 || t === null || te(t) || S(t) || p(t));
    case "fusednumber":
      return Lo(t);
    case "eventhandler":
      return B(t) && t.every(Wn);
    case "transition":
      return sn(t);
    case "border":
      return Do(t);
    case "link":
      return gt(tr(t));
    case "linkrelvalues":
      return B(t) && t.every(Ra);
    case "date":
      return t === void 0 ? !0 : p(t);
    case "object":
      return g(t);
    case "cursor":
      return p(t);
    case "boxshadow":
      return Zt(t);
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
      return (p(t) && Pe(t)) || (0, zr.isValidElementType)(t);
    case "changehandler":
      return !1;
    case "location":
      return ur(t);
    case "font":
    case "pagescope":
    case "customcursor":
    case "scrollsectionref":
    case null:
      return !1;
    default:
      L(e);
  }
}
function ye(e, t) {
  return qa(e, t) && !A(t) ? t : zp(e);
}
function M(e) {
  return e.name || "Unknown";
}
function Ej(e, t) {
  switch (e.type) {
    case "boolean":
      return Xa(e, t);
    case "number":
      return Ya(e, t);
    case "color":
      return Ja(e);
    case "string":
      return Za(e, t);
    case "image":
      return Qa(e);
    case "link":
      return es(e);
    case "date":
      return ts(e, t);
    default:
      return L(e);
  }
}
function Xa(e, t) {
  let { enabledTitle: o, disabledTitle: n } = e.options ?? {};
  return {
    type: e.type,
    title: M(e),
    enabledTitle: o,
    disabledTitle: n,
    description: e.description,
    optional: Q(e, t) ? !0 : void 0,
  };
}
function Ya(e, t) {
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
    optional: Q(e, t) ? !0 : void 0,
  };
}
function Ja(e) {
  return { type: e.type, title: M(e), description: e.description };
}
function Za(e, t) {
  let { placeholder: o, displayTextArea: n } = e.options ?? {};
  return {
    type: e.type,
    title: M(e),
    placeholder: o,
    displayTextArea: n,
    description: e.description,
    preventLocalization: e.preventLocalization,
    optional: Q(e, t) ? !0 : void 0,
  };
}
function Qa(e) {
  return { type: "responsiveimage", title: M(e), description: e.description };
}
function es(e) {
  return { type: e.type, title: M(e), description: e.description };
}
function ts(e, t) {
  let o = {
    type: e.type,
    title: M(e),
    description: e.description,
    optional: Q(e, t) ? !0 : void 0,
  };
  return (e.options?.displayTime && (o.displayTime = !0), o);
}
var Ef = ["string", "date", "number", "enum", "sharedtype", "boolean", "slug"];
function jC(e) {
  return e ? Ef.includes(e.type) : !1;
}
function _C(e) {
  return Ef.includes(e);
}
function f_(e) {
  return e === "enum" || e === "file";
}
function m_(e) {
  return e.type === "controlReference"
    ? e.expectedType === "segmentedenum"
      ? "enum"
      : e.expectedType
    : e.type;
}
function y_(e) {
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
var KC = {
  responsiveimage: "image",
  fusednumber: null,
  slot: null,
  changehandler: null,
  font: null,
  pagescope: null,
};
function h_(e) {
  return un(e) ? e : KC[e];
}
var $C = ["eventhandler"];
function x_(e) {
  return $C.includes(e.type);
}
function g_(e) {
  return jp(e) ? (e.required ?? !1) : !1;
}
var UC = { string: !0, richtext: !0, enum: !0 };
function qC(e) {
  return oo(e) ? e.type in UC : !1;
}
function XC(e) {
  return qC(e) && e.preventLocalization === !0;
}
var YC = {
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
function Af(e) {
  return Object.hasOwn(YC, e.type);
}
function b_(e) {
  return e?.type === "array" && e.control.type === "object";
}
function T_(e) {
  return e.type === "array";
}
function JC(e, t, o, n) {
  let r = {},
    i = Aa(o);
  for (let s of o.itemVariables) {
    if (!oo(s)) continue;
    let l = os(e, t, s, n);
    l &&
      (h(Af(l), "Expected array item property control to be usable in an object"),
      i && l.type === "responsiveimage" ? (r[s.id] = eV(l)) : (r[s.id] = l));
  }
  let a = o.initialValue?.map((s) => {
    let l = {};
    if (!s || s.type !== "object" || !g(s.value)) return l;
    for (let u in s.value) {
      let c = s.value[u];
      if (!c) continue;
      let m = Ff(c);
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
function ZC(e, t, o, n) {
  let r = {};
  for (let a of o.fieldVariables) {
    let s = os(e, t, a, n);
    s && (h(Af(s), "Expected object field control to be usable in an object"), (r[a.id] = s));
  }
  let i = Q(o, n);
  return {
    type: o.type,
    controls: r,
    title: M(o),
    description: o.description,
    optional: i ? !0 : void 0,
    __vekterDefault: i ? void 0 : QC(o),
  };
}
function QC(e) {
  let t = {};
  for (let o of e.fieldVariables) {
    let n = Ff(e.initialValue[o.id]);
    I(n) || (t[o.id] = n);
  }
  return t;
}
function eV(e) {
  let { __defaultAssetReference: t, __vekterDefault: o, ...n } = e;
  return n;
}
function Ff(e) {
  if (!De(e)) return;
  let t = e.type;
  if (yo(t))
    switch (t) {
      case "image": {
        if (!p(e.value)) return;
        let o, n, r;
        return (
          Ha(e) && (o = e.alt),
          Ga(e) && ((n = e.positionX), (r = e.positionY)),
          { assetReference: e.value, alt: o, positionX: n, positionY: r }
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
        return eo(e.value) ? e.value : void 0;
      case "link":
        return gt(e.value) ? e.value : void 0;
      case "vectorsetitem":
        return p(e.value) && Pe(e.value) ? e.value : void 0;
      default:
        L(t);
    }
}
function C_(e, t, o) {
  if (!Aa(e)) return tV(t, o);
}
function tV(e, t) {
  if (!Q(e, t)) return oV(e);
}
function oV(e) {
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
      return { type: "link", value: tr(e.initialValue) };
    case "vectorsetitem":
      return { type: "vectorsetitem", value: e.initialValue.identifier };
    default:
      L(e);
  }
}
function nV(e, t) {
  let o = Q(e, t);
  return { ...Xa(e, t), defaultValue: o ? void 0 : ye(e.type, e.initialValue) };
}
function bt(e, t) {
  let o = Q(e, t);
  return { ...Ya(e, t), defaultValue: o ? void 0 : ye(e.type, e.initialValue) };
}
function rV(e) {
  let t = Ue(e.initialValue) ? e.initialValue : In.toFormatString(e.initialValue);
  return { ...Ja(e), defaultValue: ye(e.type, t) };
}
function iV(e, t) {
  let { min: o, max: n, step: r, units: i, literals: a } = e.options ?? {},
    s = Q(e, t);
  return {
    type: e.type,
    title: M(e),
    defaultValue: s ? void 0 : ye(e.type, e.initialValue),
    min: o,
    max: n,
    step: r,
    units: i,
    literals: a,
    description: e.description,
    optional: s ? !0 : void 0,
  };
}
function aV(e, t) {
  let o = Q(e, t);
  return {
    ...Za(e, t),
    defaultValue: o ? void 0 : ye(e.type, e.initialValue),
    maxLength: e.options?.maxLength,
  };
}
function sV(e) {
  let { placeholder: t, maxLength: o } = e.options ?? {};
  return {
    type: e.type,
    title: M(e),
    defaultValue: gf(ye(e.type, e.initialValue)),
    placeholder: t,
    maxLength: o,
    description: e.description,
    preventLocalization: e.preventLocalization,
  };
}
function lV(e) {
  let t = Qa(e);
  if (
    (p(e.initialValue) && (t.__defaultAssetReference = e.initialValue),
    De(e.initialValue) && p(e.initialValue.value))
  ) {
    let o = e.initialValue.value;
    t.__defaultAssetReference = o;
    let n = { assetReference: o };
    ((t.__vekterDefault = n),
      Ha(e.initialValue) && p(e.initialValue.alt) && (n.alt = e.initialValue.alt),
      Ga(e.initialValue) &&
        ((n.positionX = e.initialValue.positionX), (n.positionY = e.initialValue.positionY)));
  }
  return t;
}
function uV(e) {
  let t = e.allowedFileTypes.map((r) => r.extension),
    o = new Set(t),
    n = Array.from(o).filter(Boolean);
  return {
    type: "file",
    title: M(e),
    allowedFileTypes: n,
    __defaultAssetReference: ye(e.type, e.initialValue),
    description: e.description,
  };
}
function dV(e, t, o, n) {
  let r = fV(e, t, o, n);
  return r ? { type: o.type, title: M(o), payload: r } : { type: o.type, title: M(o) };
}
var cV = {
  boolean: !0,
  number: !0,
  string: !0,
  color: !0,
  date: !0,
  link: !0,
  image: !0,
  responsiveimage: !0,
};
function pV(e) {
  return Object.hasOwn(cV, e.type);
}
function fV(e, t, o, n) {
  if (!o.payload) return;
  let r = {};
  for (let i of o.payload) {
    let a = os(e, t, i, n);
    a && pV(a) && (r[i.id] = a);
  }
  return wu(r) ? void 0 : r;
}
function mV(e) {
  return { type: e.type, title: M(e), description: e.description };
}
function yV(e) {
  return { type: e.type, title: M(e), description: e.description };
}
function hV(e) {
  return { type: e.type, title: M(e), description: e.description, defaultValue: e.initialValue };
}
function xV(e) {
  let t = ye(e.type, e.initialValue);
  return {
    type: e.type,
    title: M(e),
    defaultValue: t ? bl(t) : void 0,
    description: e.description,
  };
}
function gV(e) {
  return { type: e.type, title: M(e), defaultValue: e.initialValue, description: e.description };
}
function bV(e) {
  let t = ye(e.type, e.initialValue),
    o = t ? ep(t) : void 0;
  return { type: e.type, title: M(e), description: e.description, defaultValue: o };
}
function TV(e) {
  return {
    type: e.type,
    title: M(e),
    defaultValue: e.initialValue.map(ef),
    description: e.description,
  };
}
function CV(e) {
  return { type: e.type, title: M(e), description: e.description, defaultValue: e.initialValue };
}
function VV(e) {
  return { type: e.type, title: M(e), description: e.description, defaultValue: e.initialValue };
}
function SV(e) {
  return { type: e.type, title: M(e), description: e.description, defaultValue: e.initialValue };
}
function NV(e, t) {
  let o = Q(e, t);
  return {
    type: e.type,
    title: M(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: o ? void 0 : e.initialValue,
    optional: o ? !0 : void 0,
  };
}
function RV(e, t) {
  let o = Q(e, t);
  return {
    type: e.type,
    title: M(e),
    description: e.description,
    dataIdentifier: e.dataIdentifier,
    defaultValue: o ? void 0 : e.initialValue,
    optional: o ? !0 : void 0,
  };
}
function IV(e) {
  return { type: e.type, title: M(e), description: e.description };
}
function PV(e) {
  return {
    type: e.type,
    title: M(e),
    description: e.description,
    setModuleId: e.setModuleId,
    defaultValue: e.initialValue,
  };
}
function kV(e) {
  return es(e);
}
function vV(e) {
  return { type: e.type, title: M(e), description: e.description, defaultValue: e.initialValue };
}
function DV(e, t) {
  let o = Q(e, t);
  return { ...ts(e, t), defaultValue: o ? void 0 : ye(e.type, e.initialValue) };
}
function LV(e, t) {
  let o = Q(e, t),
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
  return (XC(e) || Eo(s, a), s);
}
function Bf(e, t) {
  switch (e) {
    case "enum":
    case "sharedtype":
      return t === "enum" || t === "segmentedenum";
    default:
      return e === t;
  }
}
function wV(e, t) {
  let o = le(t);
  if (Js(o)) {
    let n = e.getNode(o.moduleId);
    if (n) return n.codeComponentIdentifier;
  }
  return t;
}
function MV(e, t, o) {
  if (o.type === "nodePropertyControlReference") {
    if (!vf(o.controlKey)) return null;
    let a = kf(o.controlKey);
    return (
      h(
        a && Bf(a.type, o.expectedType),
        () => `incompatible node property control: ${o.controlKey} ${o.expectedType}`
      ),
      a
    );
  }
  let n = wV(e, o.entityIdentifier),
    r = t.componentForIdentifier(n);
  if (!r?.properties || (r.type !== "component" && r.type !== "data")) return null;
  let i = r.properties[o.controlKey];
  return !i || !Bf(i.type, o.expectedType) ? null : i;
}
function EV(e, t) {
  let o = Q(e, t);
  return {
    type: e.type,
    kind: e.kind,
    moduleIdentifier: e.moduleIdentifier,
    title: M(e),
    description: e.description,
    defaultValue: o ? void 0 : e.initialValue,
    optional: o ? !0 : void 0,
  };
}
function BV(e, t, o, n) {
  let r = MV(e, t, o);
  if (!r) return null;
  let i = o.type === "controlReference" && Q(o, n);
  switch (o.expectedType) {
    case "enum":
    case "segmentedenum": {
      if (r.type === "sharedtype")
        return Wa(r)
          ? null
          : {
              type: "sharedtype",
              kind: r.kind,
              moduleIdentifier: r.moduleIdentifier,
              title: M(o),
              defaultValue: i || !p(o.initialValue) ? void 0 : o.initialValue,
              description: o.description,
              optional: i ? !0 : void 0,
            };
      if (r.type !== "enum") return null;
      let a = {
        type: "enum",
        title: M(o),
        options: r.options,
        optionTitles: r.optionTitles,
        displaySegmentedControl: r.displaySegmentedControl,
        defaultValue: i ? void 0 : ye(o.expectedType, o.initialValue),
        optionIcons: r.optionIcons,
        description: o.description,
        optional: i ? !0 : void 0,
      };
      if (o.type === "controlReference") {
        let s = AV(e, t, o, r.options);
        s && Eo(a, s);
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
function AV(e, t, o, n) {
  if (!Pe(o.entityIdentifier)) return null;
  let i = td(e, o.entityIdentifier)?.getPropertyControls(e, t)[o.controlKey];
  if (i?.type !== "enum") return null;
  let a = Kp(i);
  return a ? n.map((s) => a[i.options.indexOf(s)]) : null;
}
function FV(e, t) {
  return {
    type: "string",
    title: M(t),
    description: t.description,
    preventLocalization: e.root.translatePagePaths === "no",
  };
}
var OV = { string: !0, richtext: !0 };
function V_(e) {
  return e.type in OV;
}
function os(e, t, o, n) {
  switch (o.type) {
    case "array":
      return JC(e, t, o, n);
    case "object":
      return ZC(e, t, o, n);
    case "boolean":
      return nV(o, n);
    case "number":
      return bt(o, n);
    case "motionvalue":
      return Zp(o, M(o));
    case "dimension":
      return iV(o, n);
    case "color":
      return rV(o);
    case "string":
      return aV(o, n);
    case "richtext":
      return sV(o);
    case "image":
      return lV(o);
    case "eventhandler":
      return dV(e, t, o, n);
    case "link":
      return kV(o);
    case "linkrelvalues":
      return vV(o);
    case "date":
      return DV(o, n);
    case "enum":
      return LV(o, n);
    case "file":
      return uV(o);
    case "scrollsectionref":
      return mV(o);
    case "customcursor":
      return yV(o);
    case "cursor":
      return hV(o);
    case "transition":
      return xV(o);
    case "border":
      return bV(o);
    case "location":
      return gV(o);
    case "boxshadow":
      return TV(o);
    case "gap":
      return CV(o);
    case "padding":
      return VV(o);
    case "borderradius":
      return SV(o);
    case "collectionreference":
      return NV(o, n);
    case "multicollectionreference":
      return RV(o, n);
    case "trackingid":
      return IV(o);
    case "vectorsetitem":
      return PV(o);
    case "sharedtype":
      return EV(o, n);
    case "nodePropertyControlReference":
    case "controlReference":
      return BV(e, t, o, n);
    case "slug":
      return FV(e, o);
    default:
      L(o);
  }
}
function S_(e) {
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
function N_(e) {
  return e.fallbackValue === "associatedVariable" && !!e.associatedStringVariable;
}
function R_(e) {
  return e ? wt(e) || Mt(e) || al(e) || ze(e) : !1;
}
var $ = class extends Map {};
var Of = "carousel_source_identifier",
  Hr = "carousel_provider_id",
  K = {
    activeItemIndex: "carousel_active_item_index",
    totalItems: "carousel_total_items",
    hasNext: "carousel_has_next",
    hasPrevious: "carousel_has_previous",
    dots: "carousel_dots",
  },
  Gr = {
    id: K.activeItemIndex,
    name: "Active Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  jr = {
    id: K.totalItems,
    name: "Total Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  Ao = { id: K.hasNext, name: "Has Next", type: "boolean", initialValue: !1 },
  Fo = { id: K.hasPrevious, name: "Has Previous", type: "boolean", initialValue: !1 },
  _r = { id: K.dots, name: "Pagination", type: "array", initialValue: [], itemVariables: [] },
  ns = {
    [K.activeItemIndex]: Gr,
    [K.totalItems]: jr,
    [K.hasNext]: Ao,
    [K.hasPrevious]: Fo,
    [K.dots]: _r,
  };
function D_(e) {
  if (e in ns) return ns[e];
}
function L_(e) {
  return e in ns;
}
var Wf = E(pm(), 1),
  Tt = "previousItemId";
function A_(e) {
  return Kr(Tt, "Previous", e.instanceIdentifier);
}
function F_({ name: e, dataIdentifier: t }) {
  return [
    {
      id: "id",
      name: e ? (0, Wf.singular)(e) : "Unknown",
      type: "collectionreference",
      dataIdentifier: t,
      initialValue: void 0,
      exposeInProps: !0,
    },
    HV(),
    jV(),
    Kr(Tt, "Previous", t),
    Kr(Ct, "Next", t),
  ];
}
function Kr(e, t, o) {
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
function O_(e) {
  return Kr(Ct, "Next", e.instanceIdentifier);
}
function W_(e) {
  return e === Tt || e === Ct;
}
var zV = "createdAt";
function HV() {
  return { type: "date", name: "Created", id: zV, initialValue: void 0, exposeInProps: !0 };
}
var GV = "updatedAt";
function jV() {
  return { type: "date", name: "Updated", id: GV, initialValue: void 0, exposeInProps: !0 };
}
var H_ = { hookIdentifier: void 0 },
  _V = "hookIdentifier";
function KV(e) {
  return !!(e && _V in e);
}
function Oo(e) {
  return KV(e) && e.hookIdentifier !== void 0;
}
var Vt = ".";
function Y_(e, t, o) {
  return e === Tt || e === Ct ? o.length === 0 : !o.includes(t);
}
function $V(e, t) {
  return e === t || UV(e, t);
}
function UV(e, t) {
  return e.endsWith(t) && e[e.length - t.length - 1] === Vt;
}
function zf(e, t) {
  return e.startsWith(t) && e[t.length] === Vt;
}
function J_(e) {
  return zf(e, Tt) || zf(e, Ct);
}
function ro(e) {
  return e.includes(Vt);
}
function Z_(e) {
  return ro(e.id);
}
function $r(e, t) {
  return e ? e + Vt + t : t;
}
function Q_(e) {
  let t = e.lastIndexOf(Vt);
  if (!(t < 0)) return e.slice(0, t);
}
function e2(e, t, o) {
  let n = $r(e, t);
  return El(n, o);
}
function qV(e) {
  return e === "id";
}
function t2(e) {
  return $V(e, "id");
}
function o2(e) {
  let t = Object.entries(e.properties);
  for (let [o, n] of t)
    if (!qV(o) && (n?.type === "collectionreference" || n?.type === "multicollectionreference"))
      return !0;
  return !1;
}
function XV(e) {
  return e.split(Vt);
}
function YV(e) {
  return e.join(Vt);
}
function n2(e) {
  if (Tu(e) && w(e.fillImage) && ro(e.fillImage.id)) return e.fillImage;
  if (He(e)) {
    if (Wl(e.textContent) && ro(e.textContent.startValue.id)) return e.textContent.startValue;
    if (w(e.htmlContent) && ro(e.htmlContent.id)) return e.htmlContent;
    if (w(e.textContent) && ro(e.textContent.id)) return e.textContent;
  }
}
function r2(e, t, o, n, r) {
  if (!ro(o)) return { collectionItemNode: n, collectionNode: r, variableId: o };
  let i = Hf(e, t, o, n, r);
  if (i.length === 0) return;
  let a;
  i.length === 1 ? (a = i[0]) : i.length > 1 && (a = i[i.length - 2]);
  let { collectionItemNode: s, variableId: l } = a ?? {};
  if (!s || !l) return;
  let u = e.getNodeWithTrait(s.parentid, Zo);
  if (u) return { collectionItemNode: s, collectionNode: u, variableId: l };
}
function Hf(e, t, o, n, r) {
  let i = XV(o),
    a = i[0] === Ct,
    s = i[0] === Tt;
  if (a || s) {
    let c = a ? 1 : -1,
      m = r.getSortedChildren("public-only", "group-drafts"),
      f = m.findIndex((T) => T.id === n.id);
    if (f === -1) return [];
    let x = m[f + c];
    return x ? Hf(e, t, YV(i.slice(1)), x, r) : [];
  }
  let l = [{ collectionItemNode: n, variableId: i[0] }],
    u = n;
  for (let c = 0; c < i.length; c++) {
    let m = i[c];
    if (!m) break;
    let f = u.getControlProp(m);
    if (f?.type !== "collectionreference") break;
    h(!w(f.value), "Collections don't support variables");
    let x = e.getNodeWithTrait(f.value, ul);
    if (!x) break;
    u = x;
    let T = i[c + 1];
    if (!T) break;
    l.push({ collectionItemNode: u, variableId: T });
  }
  return l;
}
function JV(e) {
  return e.title ?? e.name;
}
function p2(e) {
  return e.replace(/^\.\/(.*)\.(?:tsx|ts|js)$/u, "$1");
}
function f2(e) {
  let t = new $();
  for (let o in e) {
    let n = e[o];
    if (n && (t.set(o, n), n.type === "object"))
      for (let r in n.controls) {
        let i = n.controls[r];
        i && t.set($r(o, r), { ...i, title: i.title ?? Ko(r) });
      }
  }
  return t;
}
function m2(e, t) {
  let o = new $();
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
          c = g(a) ? a[s] : void 0;
        o.set($r(n, s), t ? c : (c ?? u));
      }
  }
  return o;
}
var rs = "_hook";
function Gf(e) {
  return `${e}${rs}`;
}
function ZV(e) {
  return !!e?.endsWith(rs);
}
function Ur(e) {
  if (!(!e || !ZV(e))) return e.slice(0, -rs.length);
}
function y2(e, t) {
  let o = Ur(e);
  if (!o) return;
  let n = t.get(o);
  if (n) return Gf(n);
}
function jf(e, t) {
  if (e.getPrimaryId() === t) return e;
  for (let o of e.ancestors()) if (o.getPrimaryId() === t) return o;
}
function h2(e, t) {
  if (!t) return;
  let o = Ur(t);
  if (!o) return;
  let n = jf(e, o);
  return Oo(n) ? n.hookIdentifier : void 0;
}
function x2(e, t, o, n) {
  if (!t) return;
  let r = Ur(t);
  if (!r) return;
  let i = jf(e, r);
  if (!Oo(i)) return;
  let a = i.cache.getHookCache().getMaps(i.hookIdentifier, o);
  if (!a) return;
  let s = n?.get(t);
  return s ? { ...a, valueMap: s } : a;
}
function _f(e, t, o) {
  if (!Oo(e)) return;
  let n = e.cache.getHookCache().getMaps(e.hookIdentifier, t);
  if (!n) return;
  let r = Gf(e.getPrimaryId()),
    i = o?.get(r) ?? n.valueMap;
  return {
    providerId: r,
    sourceIdentifier: e.hookIdentifier,
    variableMap: n.variableMap,
    controlMap: n.controlMap,
    valueMap: i,
  };
}
function g2(e, t, o) {
  let n = Ur(o);
  if (!n) return;
  let r = e.get(n);
  if (!Oo(r)) return;
  let i = t.hookForIdentifier(r.hookIdentifier);
  return i ? JV(i) : void 0;
}
var QV = "variables";
function T2(e) {
  return e ? QV in e : !1;
}
var eS = "getProvidedVariableMap";
function V2(e) {
  return !!e && eS in e;
}
function is(e) {
  return e.root.getDefaultLocaleName("Default locale");
}
function Kf(e, t) {
  return !t || !e ? "ltr" : Sn(e.code);
}
var $f = Symbol("dataIdentifier");
function as(e, t) {
  e[$f] = t;
}
function P2(e) {
  return e[$f] ?? null;
}
var Uf = "global_locale",
  qf = "global_layout_direction",
  qr = "locale_provider_id",
  Xf = "locale_source_identifier",
  tS = "Left to Right",
  oS = "Right to Left";
function O2(e) {
  return ze(e) || wt(e) || Mt(e);
}
var ss = (() => {
    let e, t, o;
    return (n) => {
      let r = n.root.locales;
      if (!r || r.length === 0) return null;
      let i = is(n);
      return (
        (o && i === e && r === t) ||
          ((e = i),
          (t = r),
          (o = {
            id: Uf,
            type: "enum",
            name: "Locale",
            initialValue: void 0,
            cases: [{ id: Co, name: is(n) }, ...r.map((a) => ({ id: a.id, name: a.name }))],
          })),
        o
      );
    };
  })(),
  ls = (() => {
    let e;
    return (t) => {
      let o = t.root.locales;
      return !o || o.length === 0
        ? null
        : e ||
            ((e = {
              id: qf,
              type: "enum",
              name: "Layout Direction",
              initialValue: void 0,
              cases: [
                { id: "ltr", name: tS },
                { id: "rtl", name: oS },
              ],
            }),
            e);
    };
  })(),
  W2 = _e((e) => (e ? Yf(e) : null)),
  nS = _e((e, t) => {
    if (!e && !t) return;
    let o = new $();
    return (e && o.set(e.id, e), t && o.set(t.id, t), o);
  });
function z2(e) {
  let t = ss(e),
    o = ls(e);
  return nS(t, o);
}
function Yf(e) {
  let t = [],
    o = [];
  for (let r of e.cases) (t.push(r.id), o.push(r.name));
  let n = { type: "enum", title: "Locale", options: t, optionTitles: o };
  return (as(n, { dataIdentifier: Xf, enumFieldKey: Uf }), n);
}
function rS(e) {
  let t = [],
    o = [];
  for (let r of e.cases) (t.push(r.id), o.push(r.name));
  let n = { type: "enum", title: "Layout Direction", options: t, optionTitles: o };
  return (as(n, { dataIdentifier: Xf, enumFieldKey: qf }), n);
}
var iS = _e((e, t) => {
  if (!e && !t) return;
  let o = new $();
  return (e && o.set(e.id, Yf(e)), t && o.set(t.id, rS(t)), o);
});
function aS(e) {
  let t = ss(e),
    o = ls(e);
  return iS(t, o);
}
var sS = _e((e) => {
  if (!e) return;
  let t = new Map();
  return (t.set(qr, e), t);
});
function H2(e) {
  let t = aS(e);
  return sS(t);
}
var lS = _e((e, t, o, n) => {
  if (!e && !t) return;
  let r = new $();
  (e && r.set(e.id, o?.id ?? Co), t && r.set(t.id, Kf(o, n)));
  let i = new Map();
  return (i.set(qr, r), i);
});
function G2(e, t) {
  let o = ss(e),
    n = ls(e);
  return lS(o, n, t, e.root.adaptLayoutToTextDirection);
}
var Jf = "default",
  Wo = class {
    has(t) {
      return !1;
    }
    get(t) {}
    *[Symbol.iterator]() {}
  },
  _2 = new Wo(),
  K2 = new Wo(),
  $2 = new Wo();
function Zf(e) {
  let t = Du(e);
  if (t) return t.intrinsicSize;
  let o = e.split("?")[1];
  if (!o) return;
  let n = new URLSearchParams(o),
    r = parseInt(n.get("width") ?? "", 10),
    i = parseInt(n.get("height") ?? "", 10);
  return S(r) && S(i) ? { width: r, height: i } : void 0;
}
var uS = "type",
  dS = "webPageId";
function Qf(e, t) {
  return e.type !== "link" || !g(t) || uS in t ? !1 : dS in t;
}
function cS(e, t) {
  let o = t;
  for (; en(o);) {
    if (o.dataIdentifier) return o.dataIdentifier;
    o = e.getParent(o.id);
  }
}
function pS(e, t) {
  if (t.unresolvedPathSlugs)
    for (let o in t.unresolvedPathSlugs) {
      let n = t.unresolvedPathSlugs[o];
      if (!g(n)) continue;
      let r = n.collectionItemId;
      if (!p(r)) continue;
      let i = ed(e, t.webPageId);
      if (!i) return;
      let a = cS(e, i);
      if (!a) return;
      let s = { identifier: a, collectionItemId: r, key: o, value: "" };
      return { [o]: s };
    }
}
function em(e, t) {
  return { type: "webPage", webPageId: t.webPageId, pathVariables: pS(e, t) };
}
function Xr(e, t, o) {
  if (Qf(t, o)) return em(e, o);
  let n = ye(t.type, o);
  if (t.type === "array") {
    if (!B(n)) return n;
    let r = t.control;
    return r ? n.map((i) => Xr(e, r, i)) : n;
  }
  if (t.type === "object") {
    if (!g(n)) return n;
    let r = {};
    for (let i in n) {
      let a = t.controls[i];
      ((r[i] = n[i]), a && (r[i] = Xr(e, a, n[i])));
    }
    return r;
  }
  if (t.type === "responsiveimage" && kr(n)) {
    let r = Zf(n.src);
    return r ? { ...n, pixelWidth: r.width, pixelHeight: r.height } : n;
  }
  return n;
}
var Yr = class {
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
      r = Xr(this.tree, o, n);
    return (this.cache.set(t, r), r);
  }
  *[Symbol.iterator]() {
    for (let [t] of this.controlMap) {
      let o = this.get(t);
      yield [t, o];
    }
  }
};
var Ye = class {
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
var zo = "repeater_item_index",
  Te = "repeater_item_count";
function gK(e, t, o, n, r) {
  let i = new Yr(e, t, o);
  return new us(i, n, r);
}
var ds = {
    id: zo,
    name: "Item Index",
    type: "number",
    initialValue: 1,
    options: { min: 1, step: 1 },
  },
  fS = bt(ds, "WebPage"),
  Jr = {
    id: Te,
    name: "Visible Items",
    type: "number",
    initialValue: 0,
    options: { min: 0, step: 1 },
  },
  bK = [ds, Jr],
  cs = bt(Jr, "WebPage");
function TK(e) {
  return e === zo || e === Te;
}
function CK(e) {
  return e === Te;
}
var tm = class extends Ye {
    constructor(t) {
      let o = new $();
      (o.set(Te, Jr), super(t, o));
    }
  },
  om = class extends Ye {
    constructor(t, o) {
      let n = new $();
      (n.set(Te, o), super(t, n));
    }
  },
  nm = class extends Ye {
    constructor(t) {
      let o = new $();
      (o.set(Te, cs), super(t, o));
    }
  },
  rm = class extends Ye {
    constructor(t) {
      let o = new $();
      (o.set(zo, ds), o.set(Te, Jr), super(t, o));
    }
  },
  us = class extends Ye {
    constructor(t, o, n) {
      let r = new $();
      (r.set(zo, o + 1), r.set(Te, n), super(t, r));
    }
  },
  im = class extends Ye {
    constructor(t) {
      let o = new $();
      (o.set(zo, fS), o.set(Te, cs), super(t, o));
    }
  };
function VK(e, t, o, n) {
  let r = new Map(e),
    i = new Map(t),
    a = new $(),
    s = new $();
  return (
    a.set(Te, cs),
    s.set(Te, n),
    r.set(o, a),
    i.set(o, s),
    { nonRepeatedChildCombinedControlMap: r, nonRepeatedChildCombinedValueMap: i }
  );
}
function EK(e) {
  let t = e;
  for (let o of e.ancestors()) {
    if (lc(o)) return Io(t);
    t = o;
  }
  return !1;
}
var mS = bt(Gr, "WebPage"),
  yS = bt(jr, "WebPage"),
  hS = { type: "boolean", title: Ao.name, defaultValue: Ao.initialValue },
  xS = { type: "boolean", title: Fo.name, defaultValue: Fo.initialValue },
  gS = { type: "array", title: _r.name, control: { type: "object", controls: {} } },
  bS = CS(),
  TS = VS();
function CS() {
  let e = new $();
  return (
    e.set(K.activeItemIndex, Gr),
    e.set(K.totalItems, jr),
    e.set(K.hasNext, Ao),
    e.set(K.hasPrevious, Fo),
    e.set(K.dots, _r),
    e
  );
}
function VS() {
  let e = new $();
  return (
    e.set(K.activeItemIndex, mS),
    e.set(K.totalItems, yS),
    e.set(K.hasNext, hS),
    e.set(K.hasPrevious, xS),
    e.set(K.dots, gS),
    e
  );
}
function SS(e) {
  return Array.from({ length: e }, (t, o) => ({ id: String(o + 1) }));
}
function NS(e) {
  let t = new $();
  return (
    t.set(K.activeItemIndex, 1),
    t.set(K.totalItems, e),
    t.set(K.hasNext, e > 1),
    t.set(K.hasPrevious, !1),
    t.set(K.dots, SS(e)),
    t
  );
}
function RS() {
  return bS;
}
function IS() {
  return TS;
}
function PS(e, t) {
  let o = t?.get(Te),
    n = S(o) ? e.tree() : void 0,
    r = 0;
  for (let i of Lu(e))
    if (!Io(i)) {
      if (S(o) && n && Qt(n, i)) {
        r += o;
        continue;
      }
      r++;
    }
  return r;
}
function kS(e, t) {
  let o = e.cache.carouselAncestorId;
  if (!o) return;
  let n = e.tree();
  if (!n) return;
  let r = n.get(o);
  if (!r) return;
  let i = PS(r, t?.get(r.getPrimaryId())),
    a = e.cache.carouselValueMap;
  if (a?.itemCount === i) return a.valueMap;
  let s = NS(i);
  return ((e.cache.carouselValueMap = { itemCount: i, valueMap: s }), s);
}
function am(e, t) {
  if (!Io(e)) return;
  let o = kS(e, t);
  if (o)
    return {
      providerId: Hr,
      sourceIdentifier: Of,
      variableMap: RS(),
      controlMap: IS(),
      valueMap: o,
    };
}
var vS = $o();
function GK(e, t, o) {
  let n = [],
    r = am(e, t);
  r && n.push(r);
  let i = _f(e, o, t);
  return (i && n.push(i), n.length > 0 ? n : vS);
}
function jK(e) {
  return e === qr || e === Hr;
}
function _K(e, t, o, n, r) {
  if (!t && o.length === 0) return e;
  let i;
  e
    ? ((i = new Map(e)), t && i.set(r, t))
    : t
      ? (i = new Map([
          [r, t],
          [Jf, t],
        ]))
      : (i = new Map());
  for (let a of o) i.set(a.providerId, n(a));
  return i;
}
function KK(e) {
  return e.map(DS);
}
function $K(e) {
  return e.map(LS);
}
function DS(e) {
  return e.valueMap;
}
function LS(e) {
  return e.controlMap;
}
function UK(e, t) {
  if (t.length === 0) return e;
  let o = new Map(e ?? []);
  for (let n of t) o.set(n.providerId, n.valueMap);
  return o;
}
export {
  so as a,
  MS as b,
  ei as c,
  _s as d,
  we as e,
  Us as f,
  Uo as g,
  ie as h,
  Me as i,
  Ks as j,
  it as k,
  N as l,
  P as m,
  QS as n,
  me as o,
  qo as p,
  Xo as q,
  sN as r,
  Jo as s,
  kt as t,
  lN as u,
  oi as v,
  lo as w,
  ni as x,
  Gt as y,
  Jh as z,
  Ui as A,
  od as B,
  Qh as C,
  nd as D,
  ex as E,
  id as F,
  qi as G,
  zd as H,
  Xi as I,
  ad as J,
  Yi as K,
  Ge as L,
  Ni as M,
  tu as N,
  bo as O,
  dt as P,
  Mk as Q,
  b as R,
  sd as S,
  ld as T,
  In as U,
  ft as V,
  fx as W,
  Pn as X,
  kn as Y,
  _d as Z,
  ow as _,
  ud as $,
  fd as aa,
  sw as ba,
  yd as ca,
  vn as da,
  ea,
  bw as fa,
  Ed as ga,
  Ad as ha,
  Px as ia,
  Fd as ja,
  Wd as ka,
  Hd as la,
  Gd as ma,
  bd as na,
  Vw as oa,
  vw as pa,
  Sd as qa,
  gx as ra,
  Tx as sa,
  Rd as ta,
  Ox as ua,
  jd as va,
  Id as wa,
  $t as xa,
  Aw as ya,
  Fw as za,
  Fn as Aa,
  wn as Ba,
  So as Ca,
  ra as Da,
  Kw as Ea,
  $w as Fa,
  vd as Ga,
  Md as Ha,
  nM as Ia,
  jx as Ja,
  Jd as Ka,
  pN as La,
  fN as Ma,
  mN as Na,
  Js as Oa,
  Dt as Pa,
  Pe as Qa,
  yN as Ra,
  uo as Sa,
  vt as Ta,
  hN as Ua,
  Sm as Va,
  Nm as Wa,
  Zs as Xa,
  le as Ya,
  xN as Za,
  gN as _a,
  bN as $a,
  TN as ab,
  CN as bb,
  VN as cb,
  SN as db,
  NN as eb,
  RN as fb,
  W as gb,
  gI as hb,
  Qs as ib,
  PN as jb,
  el as kb,
  tl as lb,
  ri as mb,
  Im as nb,
  ii as ob,
  nl as pb,
  BN as qb,
  AN as rb,
  FN as sb,
  ON as tb,
  D as ub,
  GN as vb,
  jN as wb,
  _N as xb,
  KN as yb,
  ai as zb,
  rl as Ab,
  il as Bb,
  $N as Cb,
  si as Db,
  Pm as Eb,
  Ee as Fb,
  wt as Gb,
  Mt as Hb,
  al as Ib,
  ze as Jb,
  UN as Kb,
  sl as Lb,
  qN as Mb,
  XN as Nb,
  He as Ob,
  km as Pb,
  YN as Qb,
  JN as Rb,
  ll as Sb,
  Zo as Tb,
  ul as Ub,
  ZN as Vb,
  QN as Wb,
  Qo as Xb,
  eR as Yb,
  tR as Zb,
  oR as _b,
  nR as $b,
  rR as ac,
  iR as bc,
  aR as cc,
  sR as dc,
  lR as ec,
  uR as fc,
  dR as gc,
  cR as hc,
  pR as ic,
  fR as jc,
  mR as kc,
  yR as lc,
  dl as mc,
  hR as nc,
  xR as oc,
  gR as pc,
  bR as qc,
  TR as rc,
  CR as sc,
  VR as tc,
  li as uc,
  SR as vc,
  NR as wc,
  RR as xc,
  cl as yc,
  IR as zc,
  PR as Ac,
  kR as Bc,
  vR as Cc,
  DR as Dc,
  en as Ec,
  LR as Fc,
  pl as Gc,
  tn as Hc,
  wR as Ic,
  MR as Jc,
  ER as Kc,
  BR as Lc,
  AR as Mc,
  FR as Nc,
  OR as Oc,
  WR as Pc,
  zR as Qc,
  HR as Rc,
  vm as Sc,
  GR as Tc,
  jR as Uc,
  _R as Vc,
  Wn as Wc,
  xE as Xc,
  gE as Yc,
  jy as Zc,
  iv as _c,
  av as $c,
  TI as ad,
  mi as bd,
  CI as cd,
  yi as dd,
  Vl as ed,
  RI as fd,
  hi as gd,
  ln as hd,
  MI as id,
  EI as jd,
  BI as kd,
  AI as ld,
  FI as md,
  Nl as nd,
  OI as od,
  un as pd,
  yo as qd,
  jI as rd,
  _I as sd,
  KI as td,
  tP as ud,
  Jm as vd,
  Qm as wd,
  ey as xd,
  oy as yd,
  oP as zd,
  ry as Ad,
  nP as Bd,
  rP as Cd,
  iy as Dd,
  iP as Ed,
  sy as Fd,
  aP as Gd,
  kl as Hd,
  sP as Id,
  gi as Jd,
  lP as Kd,
  vl as Ld,
  uP as Md,
  dP as Nd,
  cP as Od,
  Ll as Pd,
  pP as Qd,
  cy as Rd,
  py as Sd,
  fP as Td,
  mP as Ud,
  fy as Vd,
  yP as Wd,
  hP as Xd,
  xP as Yd,
  gP as Zd,
  bP as _d,
  TP as $d,
  w as ae,
  El as be,
  bi as ce,
  pn as de,
  Bl as ee,
  SP as fe,
  NP as ge,
  Al as he,
  RP as ie,
  IP as je,
  PP as ke,
  my as le,
  EP as me,
  he as ne,
  BP as oe,
  Wl as pe,
  AP as qe,
  FP as re,
  OP as se,
  Hl as te,
  A as ue,
  Gl as ve,
  SE as we,
  NE as xe,
  RE as ye,
  eg as ze,
  tg as Ae,
  IE as Be,
  Zd as Ce,
  Qd as De,
  ec as Ee,
  yt as Fe,
  PE as Ge,
  ng as He,
  kE as Ie,
  oc as Je,
  vE as Ke,
  rg as Le,
  DE as Me,
  LE as Ne,
  ig as Oe,
  zn as Pe,
  nc as Qe,
  wE as Re,
  Hn as Se,
  fa as Te,
  Gn as Ue,
  lg as Ve,
  jn as We,
  ic as Xe,
  ac as Ye,
  ME as Ze,
  EE as _e,
  cg as $e,
  FE as af,
  OE as bf,
  sc as cf,
  GE as df,
  jE as ef,
  yg as ff,
  lc as gf,
  Io as hf,
  xg as if,
  _E as jf,
  qE as kf,
  XE as lf,
  bg as mf,
  YE as nf,
  Cg as of,
  JE as pf,
  ZE as qf,
  At as rf,
  hl as sf,
  on as tf,
  Lm as uf,
  fo as vf,
  an as wf,
  wm as xf,
  Mm as yf,
  xl as zf,
  gl as Af,
  Em as Bf,
  ui as Cf,
  fi as Df,
  sn as Ef,
  bl as Ff,
  zm as Gf,
  fI as Hf,
  mI as If,
  yI as Jf,
  Hm as Kf,
  hI as Lf,
  fl as Mf,
  $R as Nf,
  co as Of,
  Et as Pf,
  UR as Qf,
  qR as Rf,
  XR as Sf,
  po as Tf,
  YR as Uf,
  ml as Vf,
  Bt as Wf,
  JR as Xf,
  yl as Yf,
  ZR as Zf,
  QR as _f,
  eI as $f,
  qP as ag,
  xy as bg,
  XP as cg,
  _l as dg,
  xe as eg,
  Kl as fg,
  YP as gg,
  JP as hg,
  jl as ig,
  ZP as jg,
  QP as kg,
  ek as lg,
  $l as mg,
  Ty as ng,
  tk as og,
  Vy as pg,
  st as qg,
  ok as rg,
  nk as sg,
  rk as tg,
  dc as ug,
  Sg as vg,
  _n as wg,
  ya as xg,
  cc as yg,
  oB as zg,
  nB as Ag,
  rB as Bg,
  iB as Cg,
  aB as Dg,
  uB as Eg,
  dB as Fg,
  mc as Gg,
  qt as Hg,
  fB as Ig,
  yc as Jg,
  mB as Kg,
  yB as Lg,
  hB as Mg,
  U as Ng,
  F as Og,
  Xl as Pg,
  lt as Qg,
  lk as Rg,
  ut as Sg,
  mn as Tg,
  xo as Ug,
  Ql as Vg,
  eu as Wg,
  hn as Xg,
  Ak as Yg,
  zk as Zg,
  Hk as _g,
  ct as $g,
  Gk as ah,
  jk as bh,
  _k as ch,
  To as dh,
  xn as eh,
  hu as fh,
  Ei as gh,
  Uk as hh,
  qk as ih,
  Hy as jh,
  xu as kh,
  ov as lh,
  gn as mh,
  nv as nh,
  _y as oh,
  pt as ph,
  cv as qh,
  Cv as rh,
  Vv as sh,
  zt as th,
  Bi as uh,
  Sv as vh,
  Nv as wh,
  gu as xh,
  Zy as yh,
  Rv as zh,
  bu as Ah,
  Iv as Bh,
  Pv as Ch,
  kv as Dh,
  Tu as Eh,
  Qy as Fh,
  vv as Gh,
  Dv as Hh,
  Lv as Ih,
  wv as Jh,
  th as Kh,
  nh as Lh,
  Mv as Mh,
  CB as Nh,
  ha as Oh,
  vg as Ph,
  VB as Qh,
  Kn as Rh,
  NB as Sh,
  xc as Th,
  DB as Uh,
  gc as Vh,
  Xt as Wh,
  wg as Xh,
  LB as Yh,
  no as Zh,
  nH as _h,
  rH as $h,
  rf as ai,
  $n as bi,
  EB as ci,
  ba as di,
  BB as ei,
  AB as fi,
  Eu as gi,
  hh as hi,
  hD as ii,
  xD as ji,
  Fu as ki,
  gD as li,
  bD as mi,
  hr as ni,
  Mg as oi,
  Po as pi,
  Un as qi,
  Xn as ri,
  Ue as si,
  Yn as ti,
  Jn as ui,
  jB as vi,
  _B as wi,
  KB as xi,
  $B as yi,
  UB as zi,
  qB as Ai,
  XB as Bi,
  Qn as Ci,
  ZB as Di,
  Vc as Ei,
  aA as Fi,
  Sc as Gi,
  Nc as Hi,
  sA as Ii,
  Rc as Ji,
  lA as Ki,
  af as Li,
  xH as Mi,
  VH as Ni,
  SH as Oi,
  NH as Pi,
  yC as Qi,
  df as Ri,
  RH as Si,
  IH as Ti,
  Ca as Ui,
  dA as Vi,
  jg as Wi,
  cA as Xi,
  pA as Yi,
  Se as Zi,
  _g as _i,
  Kg as $i,
  gA as aj,
  Ug as bj,
  bA as cj,
  qg as dj,
  TA as ej,
  CA as fj,
  VA as gj,
  SA as hj,
  NA as ij,
  RA as jj,
  xt as kj,
  Yt as lj,
  Ne as mj,
  kc as nj,
  Cu as oj,
  sh as pj,
  _v as qj,
  vu as rj,
  Kv as sj,
  $v as tj,
  Du as uj,
  AA as vj,
  gt as wj,
  Va as xj,
  Jt as yj,
  vc as zj,
  tr as Aj,
  FA as Bj,
  OA as Cj,
  WA as Dj,
  nb as Ej,
  Ra as Fj,
  Lc as Gj,
  Bc as Hj,
  va as Ij,
  Zt as Jj,
  CF as Kj,
  ar as Lj,
  VF as Mj,
  SF as Nj,
  wc as Oj,
  Mc as Pj,
  De as Qj,
  ZA as Rj,
  eF as Sj,
  tF as Tj,
  oF as Uj,
  Ai as Vj,
  Fi as Wj,
  Ae as Xj,
  or as Yj,
  nr as Zj,
  yF as _j,
  lb as $j,
  ir as ak,
  ub as bk,
  vF as ck,
  DF as dk,
  LF as ek,
  Fc as fk,
  Da as gk,
  wF as hk,
  AF as ik,
  FF as jk,
  La as kk,
  OF as lk,
  o0 as mk,
  n0 as nk,
  r0 as ok,
  i0 as pk,
  fb as qk,
  yb as rk,
  a0 as sk,
  lr as tk,
  s0 as uk,
  l0 as vk,
  u0 as wk,
  d0 as xk,
  c0 as yk,
  H_ as zk,
  KV as Ak,
  Oo as Bk,
  Zv as Ck,
  dh as Dk,
  Lu as Ek,
  Nb as Fk,
  tp as Gk,
  X0 as Hk,
  Y0 as Ik,
  Pb as Jk,
  J0 as Kk,
  Z0 as Lk,
  op as Mk,
  Q0 as Nk,
  eO as Ok,
  vb as Pk,
  tO as Qk,
  wu as Rk,
  Kp as Sk,
  $p as Tk,
  Up as Uk,
  h1 as Vk,
  nC as Wk,
  x1 as Xk,
  R1 as Yk,
  Jp as Zk,
  rC as _k,
  I1 as $k,
  P1 as al,
  Co as bl,
  lD as cl,
  uD as dl,
  dD as el,
  cD as fl,
  Ou as gl,
  Hi as hl,
  Wu as il,
  zu as jl,
  Hu as kl,
  Gi as ll,
  wD as ml,
  ji as nl,
  MD as ol,
  Gu as pl,
  Uc as ql,
  qc as rl,
  h0 as sl,
  gb as tl,
  x0 as ul,
  g0 as vl,
  Xc as wl,
  b0 as xl,
  bb as yl,
  Qt as zl,
  T0 as Al,
  C0 as Bl,
  V0 as Cl,
  S0 as Dl,
  N0 as El,
  Oi as Fl,
  nD as Gl,
  rD as Hl,
  ph as Il,
  Wi as Jl,
  iD as Kl,
  mh as Ll,
  ju as Ml,
  Wh as Nl,
  _u as Ol,
  Uu as Pl,
  HD as Ql,
  zh as Rl,
  GD as Sl,
  jD as Tl,
  qu as Ul,
  Sn as Vl,
  _e as Wl,
  _i as Xl,
  ZD as Yl,
  QD as Zl,
  eL as _l,
  Zu as $l,
  uL as am,
  $h as bm,
  ed as cm,
  td as dm,
  Uh as em,
  kr as fm,
  eo as gm,
  v0 as hm,
  Jc as im,
  M0 as jm,
  E0 as km,
  Qc as lm,
  z0 as mm,
  Do as nm,
  H0 as om,
  nt as pm,
  ep as qm,
  G0 as rm,
  j0 as sm,
  _0 as tm,
  K0 as um,
  aO as vm,
  Lo as wm,
  sO as xm,
  np as ym,
  Eb as zm,
  Ab as Am,
  PO as Bm,
  kO as Cm,
  vO as Dm,
  DO as Em,
  ur as Fm,
  LO as Gm,
  wO as Hm,
  ip as Im,
  MO as Jm,
  EO as Km,
  BO as Lm,
  AO as Mm,
  FO as Nm,
  OO as Om,
  WO as Pm,
  zO as Qm,
  HO as Rm,
  GO as Sm,
  jO as Tm,
  _O as Um,
  KO as Vm,
  $O as Wm,
  UO as Xm,
  qO as Ym,
  XO as Zm,
  YO as _m,
  JO as $m,
  ZO as an,
  QO as bn,
  eW as cn,
  tW as dn,
  oW as en,
  nW as fn,
  rW as gn,
  iW as hn,
  aW as in,
  sW as jn,
  Ga as kn,
  Y1 as ln,
  vr as mn,
  nj as nn,
  Mf as on,
  Nj as pn,
  qa as qn,
  B1 as rn,
  za as sn,
  A1 as tn,
  j1 as un,
  _1 as vn,
  ef as wn,
  Ha as xn,
  U1 as yn,
  Zp as zn,
  mW as An,
  yW as Bn,
  hW as Cn,
  xW as Dn,
  $b as En,
  Xb as Fn,
  wa as Gn,
  cr as Hn,
  DW as In,
  LW as Jn,
  bp as Kn,
  nf as Ln,
  eH as Mn,
  cf as Nn,
  pf as On,
  ff as Pn,
  mf as Qn,
  yf as Rn,
  Vr as Sn,
  Sr as Tn,
  J as Un,
  SC as Vn,
  gf as Wn,
  BW as Xn,
  Cp as Yn,
  AW as Zn,
  jW as _n,
  Pp as $n,
  UW as ao,
  kp as bo,
  vp as co,
  ZW as do,
  cz as eo,
  Dp as fo,
  xr as go,
  BT as ho,
  br as io,
  Lp as jo,
  bf as ko,
  AH as lo,
  FH as mo,
  OH as no,
  Tf as oo,
  zH as po,
  HH as qo,
  GH as ro,
  Cf as so,
  _H as to,
  KH as uo,
  $H as vo,
  Vf as wo,
  qH as xo,
  XH as yo,
  YH as zo,
  Rr as Ao,
  QH as Bo,
  eG as Co,
  tG as Do,
  oG as Eo,
  xz as Fo,
  gz as Go,
  bz as Ho,
  OT as Io,
  Tz as Jo,
  Ep as Ko,
  Cr as Lo,
  Iz as Mo,
  Pz as No,
  Ap as Oo,
  kz as Po,
  vz as Qo,
  Dz as Ro,
  Fp as So,
  Lz as To,
  wz as Uo,
  Mz as Vo,
  Op as Wo,
  Ez as Xo,
  Bz as Yo,
  _a as Zo,
  iG as _o,
  aG as $o,
  sG as ap,
  lG as bp,
  Ir as cp,
  cG as dp,
  pG as ep,
  fG as fp,
  mG as gp,
  yG as hp,
  Pr as ip,
  gG as jp,
  bG as kp,
  TG as lp,
  CG as mp,
  VG as np,
  Ka as op,
  BC as pp,
  If as qp,
  IG as rp,
  PG as sp,
  FC as tp,
  kG as up,
  vG as vp,
  XG as wp,
  kf as xp,
  JG as yp,
  vf as zp,
  Wp as Ap,
  zp as Bp,
  ye as Cp,
  Hp as Dp,
  Yz as Ep,
  $T as Fp,
  UT as Gp,
  Q as Hp,
  oo as Ip,
  Jz as Jp,
  Zz as Kp,
  Qz as Lp,
  e1 as Mp,
  qT as Np,
  XT as Op,
  t1 as Pp,
  YT as Qp,
  o1 as Rp,
  n1 as Sp,
  JT as Tp,
  r1 as Up,
  QT as Vp,
  Aa as Wp,
  Ej as Xp,
  jp as Yp,
  l1 as Zp,
  jC as _p,
  _C as $p,
  f_ as aq,
  m_ as bq,
  y_ as cq,
  h_ as dq,
  x_ as eq,
  g_ as fq,
  qC as gq,
  XC as hq,
  b_ as iq,
  T_ as jq,
  C_ as kq,
  tV as lq,
  oV as mq,
  TV as nq,
  wV as oq,
  MV as pq,
  V_ as qq,
  os as rq,
  S_ as sq,
  N_ as tq,
  R_ as uq,
  V2 as vq,
  Zf as wq,
  is as xq,
  $ as yq,
  Kf as zq,
  as as Aq,
  P2 as Bq,
  Uf as Cq,
  qf as Dq,
  qr as Eq,
  Xf as Fq,
  tS as Gq,
  oS as Hq,
  O2 as Iq,
  ss as Jq,
  ls as Kq,
  W2 as Lq,
  z2 as Mq,
  aS as Nq,
  H2 as Oq,
  G2 as Pq,
  Jf as Qq,
  _2 as Rq,
  K2 as Sq,
  $2 as Tq,
  Of as Uq,
  Hr as Vq,
  K as Wq,
  D_ as Xq,
  L_ as Yq,
  Yr as Zq,
  Ye as _q,
  zo as $q,
  Te as ar,
  gK as br,
  bK as cr,
  TK as dr,
  CK as er,
  tm as fr,
  om as gr,
  nm as hr,
  rm as ir,
  us as jr,
  im as kr,
  VK as lr,
  EK as mr,
  IS as nr,
  kS as or,
  Tt as pr,
  A_ as qr,
  F_ as rr,
  Ct as sr,
  O_ as tr,
  W_ as ur,
  zV as vr,
  HV as wr,
  GV as xr,
  jV as yr,
  Vt as zr,
  Y_ as Ar,
  $V as Br,
  zf as Cr,
  J_ as Dr,
  ro as Er,
  Z_ as Fr,
  $r as Gr,
  Q_ as Hr,
  e2 as Ir,
  qV as Jr,
  t2 as Kr,
  o2 as Lr,
  XV as Mr,
  YV as Nr,
  n2 as Or,
  r2 as Pr,
  JV as Qr,
  p2 as Rr,
  f2 as Sr,
  m2 as Tr,
  Gf as Ur,
  ZV as Vr,
  Ur as Wr,
  y2 as Xr,
  h2 as Yr,
  x2 as Zr,
  g2 as _r,
  GK as $r,
  jK as as,
  _K as bs,
  KK as cs,
  $K as ds,
  DS as es,
  LS as fs,
  UK as gs,
  T2 as hs,
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
//# sourceMappingURL=chunk-ESJGW6ZP.mjs.map
