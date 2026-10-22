import { a as L } from "chunk-WC34TENX.mjs";
import { p as U } from "chunk-5VQJ4RRO.mjs";
import { a as k } from "chunk-SWYZG2NI.mjs";
import { b as v } from "chunk-4JY5UMT2.mjs";
import { e as M } from "chunk-WLHSDIGQ.mjs";
var x = M(k(), 1);
var P = (0, x.createContext)(null);
P.displayName = "EngineContext";
function A() {
  let i = (0, x.useContext)(P);
  if (i) return i;
  let e = L();
  if (e) return e;
  throw new Error("EngineContext is not initialized");
}
var d = { None: 0, Mutable: 1, Watching: 2, RecursedCheck: 4, Recursed: 8, Dirty: 16, Pending: 32 };
function N({ update: i, notify: e, unwatched: t }) {
  return { link: l, unlink: p, propagate: f, checkDirty: g, shallowPropagate: m };
  function l(n, r, a) {
    let u = r.depsTail;
    if (u !== void 0 && u.dep === n) return;
    let o = u !== void 0 ? u.nextDep : r.deps;
    if (o !== void 0 && o.dep === n) {
      ((o.version = a), (r.depsTail = o));
      return;
    }
    let s = n.subsTail;
    if (s !== void 0 && s.version === a && s.sub === r) return;
    let c =
      (r.depsTail =
      n.subsTail =
        { version: a, dep: n, sub: r, prevDep: u, nextDep: o, prevSub: s, nextSub: void 0 });
    (o !== void 0 && (o.prevDep = c),
      u !== void 0 ? (u.nextDep = c) : (r.deps = c),
      s !== void 0 ? (s.nextSub = c) : (n.subs = c));
  }
  function p(n, r = n.sub) {
    let { dep: a, prevDep: u, nextDep: o, nextSub: s, prevSub: c } = n;
    return (
      o !== void 0 ? (o.prevDep = u) : (r.depsTail = u),
      u !== void 0 ? (u.nextDep = o) : (r.deps = o),
      s !== void 0 ? (s.prevSub = c) : (a.subsTail = c),
      c !== void 0 ? (c.nextSub = s) : (a.subs = s) === void 0 && t(a),
      o
    );
  }
  function f(n, r) {
    let a = n.nextSub,
      u;
    e: do {
      let o = n.sub,
        s = o.flags;
      if (
        (s & 60
          ? s & 12
            ? s & 4
              ? !(s & 48) && T(n, o)
                ? ((o.flags = s | 40), (s &= 1))
                : (s = 0)
              : (o.flags = (s & -9) | 32)
            : (s = 0)
          : ((o.flags = s | 32), r && (o.flags |= 8)),
        s & 2 && e(o),
        s & 1)
      ) {
        let c = o.subs;
        if (c !== void 0) {
          let h = (n = c).nextSub;
          h !== void 0 && ((u = { value: a, prev: u }), (a = h));
          continue;
        }
      }
      if ((n = a) !== void 0) {
        a = n.nextSub;
        continue;
      }
      for (; u !== void 0;)
        if (((n = u.value), (u = u.prev), n !== void 0)) {
          a = n.nextSub;
          continue e;
        }
      break;
    } while (!0);
  }
  function g(n, r) {
    let a,
      u = 0,
      o = !1;
    e: do {
      let s = n.dep,
        c = s.flags;
      if (r.flags & 16) o = !0;
      else if ((c & 17) === 17) {
        let h = s.subs;
        i(s) && (h.nextSub !== void 0 && m(h), (o = !0));
      } else if ((c & 33) === 33) {
        ((a = { value: n, prev: a }), (n = s.deps), (r = s), ++u);
        continue;
      }
      if (!o) {
        let h = n.nextDep;
        if (h !== void 0) {
          n = h;
          continue;
        }
      }
      for (; u--;) {
        if (((n = a.value), (a = a.prev), o)) {
          let D = r.subs;
          if (i(r)) {
            (D.nextSub !== void 0 && m(D), (r = n.sub));
            continue;
          }
          o = !1;
        } else r.flags &= -33;
        r = n.sub;
        let h = n.nextDep;
        if (h !== void 0) {
          n = h;
          continue e;
        }
      }
      return o && !!r.flags;
    } while (!0);
  }
  function m(n) {
    do {
      let r = n.sub,
        a = r.flags;
      (a & 48) === 32 && ((r.flags = a | 16), (a & 6) === 2 && e(r));
    } while ((n = n.nextSub) !== void 0);
  }
  function T(n, r) {
    let a = r.depsTail;
    for (; a !== void 0;) {
      if (a === n) return !0;
      a = a.prevDep;
    }
    return !1;
  }
}
var C = M(k(), 1),
  b = 0,
  y,
  S = !1,
  {
    link: B,
    unlink: w,
    propagate: W,
    checkDirty: q,
    shallowPropagate: F,
  } = N({
    update(i) {
      return i.update();
    },
    notify(i) {
      return i.notify();
    },
    unwatched(i) {
      i instanceof V && i.unwatch();
    },
  }),
  E = class {
    constructor(e, t = Object.is) {
      this.equals = t;
      ((this.pendingValue = e), (this.currentValue = e));
    }
    equals;
    subs;
    subsTail;
    flags = d.Mutable;
    pendingValue;
    currentValue;
    get() {
      if (S) throw new Error("Cannot read state inside watcher");
      if (this.flags & d.Dirty && this.update()) {
        let t = this.subs;
        t !== void 0 && F(t);
      }
      return (y !== void 0 && B(this, y, b), this.currentValue);
    }
    set(e) {
      if (S) throw new Error("Cannot write state inside watcher");
      if (y !== void 0) throw new Error("Cannot write state inside computed");
      if (this.equals(this.pendingValue, e)) return !1;
      ((this.pendingValue = e), (this.flags = d.Mutable | d.Dirty));
      let t = this.subs;
      return (t !== void 0 && W(t, !1), !0);
    }
    update() {
      return (
        (this.flags = d.Mutable),
        this.equals(this.currentValue, this.pendingValue)
          ? !1
          : ((this.currentValue = this.pendingValue), !0)
      );
    }
  };
function J(i) {
  return (e, t) => {
    let l = new WeakMap();
    return {
      get() {
        let p = l.get(this);
        return (v(p, "Signal must exist"), p.get());
      },
      set(p) {
        let f = l.get(this);
        (v(f, "Signal must exist"),
          U.isOn("syncProcessWhenReady")
            ? v(!this.scheduler.inReactRenderPhase, "Cannot set state during React render phase")
            : v(!this.scheduler.inRendering, "Cannot set state while rendering"),
          f.set(p) && this.scheduler.signalChanges(this));
      },
      init(p) {
        let f = new E(p, i);
        l.set(this, f);
      },
    };
  };
}
var V = class {
  constructor(e, t = Object.is) {
    this.compute = e;
    this.equals = t;
  }
  compute;
  equals;
  deps;
  depsTail;
  subs;
  subsTail;
  flags = d.None;
  hasValue = !1;
  value;
  get() {
    if (S) throw new Error("Cannot read computed inside watcher");
    let e = this.flags;
    if (e === d.None || e & d.Dirty) this.updateAndPropagate();
    else if (e & d.Pending) {
      let t = this.deps;
      t !== void 0 && q(t, this) ? this.updateAndPropagate() : (this.flags = e & ~d.Pending);
    }
    return (y !== void 0 && B(this, y, b), this.value);
  }
  updateAndPropagate() {
    if (this.update()) {
      let t = this.subs;
      t !== void 0 && F(t);
    }
  }
  update() {
    let e = y;
    ((y = this), (this.depsTail = void 0), (this.flags = d.Mutable | d.RecursedCheck));
    try {
      b++;
      let t = this.compute();
      return this.hasValue && this.equals(this.value, t)
        ? !1
        : ((this.value = t), (this.hasValue = !0), !0);
    } finally {
      ((y = e), (this.flags &= ~d.RecursedCheck));
      let t = this.depsTail,
        l = t !== void 0 ? t.nextDep : this.deps;
      for (; l !== void 0;) l = w(l, this);
    }
  }
  unwatch() {
    if (this.depsTail === void 0) return;
    this.flags = d.Mutable | d.Dirty;
    let t = this.depsTail;
    for (; t !== void 0;) {
      let l = t.prevDep;
      (w(t, this), (t = l));
    }
  }
};
function Q(i) {
  return (e, t) => {
    let l = new WeakMap();
    return function () {
      let p = l.get(this);
      if (p) return p.get();
      let f = () => e.call(this),
        g = new V(f, i);
      return (l.set(this, g), g.get());
    };
  };
}
var R = class {
  constructor(e) {
    this.callback = e;
  }
  callback;
  deps;
  depsTail;
  flags = d.None;
  watch(e) {
    if (S) throw new Error("Cannot watch signal inside watcher");
    (e !== void 0 && B(e, this, b), this.deps !== void 0 && (this.flags = d.Watching));
  }
  unwatch(e) {
    if (S) throw new Error("Cannot unwatch signal inside watcher");
    let t = this.depsTail;
    for (; t !== void 0;) {
      let l = t.prevDep;
      (t.dep === e && w(t, this), (t = l));
    }
    this.deps === void 0 && (this.flags = d.None);
  }
  notify() {
    this.flags = d.None;
    let e = S;
    S = !0;
    try {
      this.callback();
    } finally {
      S = e;
    }
  }
};
function H(i, e, t = Object.is) {
  let { scheduler: l } = A(),
    p = (0, C.useMemo)(() => {
      let f = new V(
        () => ({ value: i() }),
        (g, m) => t(g.value, m.value)
      );
      return {
        subscribe(g) {
          let m = new R(() => {
            l.scheduleRenderCallback(T);
          });
          function T() {
            try {
              g();
            } finally {
              m.watch();
            }
          }
          return (
            m.watch(f),
            () => {
              m.unwatch(f);
            }
          );
        },
        getSnapshot() {
          return f.get();
        },
      };
    }, [...e, t, l]);
  return (0, C.useSyncExternalStore)(p.subscribe, p.getSnapshot).value;
}
function X(i, e) {
  return H(() => i[e], [i, e]);
}
export { N as a, P as b, A as c, J as d, Q as e, H as f, X as g };
//# sourceMappingURL=chunk-K6375COG.mjs.map
