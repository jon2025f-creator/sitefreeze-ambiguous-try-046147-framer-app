import { a as U } from "chunk-BWOBSYK2.mjs";
import { a as M } from "chunk-SWYZG2NI.mjs";
import { b as V } from "chunk-4JY5UMT2.mjs";
import { e as k } from "chunk-WLHSDIGQ.mjs";
var b = k(M(), 1);
var L = (0, b.createContext)(null);
L.displayName = "EngineContext";
function P() {
  let i = (0, b.useContext)(L);
  if (i) return i;
  let e = U();
  if (e) return e;
  throw new Error("EngineContext is not initialized");
}
var d = { None: 0, Mutable: 1, Watching: 2, RecursedCheck: 4, Recursed: 8, Dirty: 16, Pending: 32 };
function A({ update: i, notify: e, unwatched: t }) {
  return { link: l, unlink: p, propagate: f, checkDirty: g, shallowPropagate: m };
  function l(n, o, a) {
    let u = o.depsTail;
    if (u !== void 0 && u.dep === n) return;
    let r = u !== void 0 ? u.nextDep : o.deps;
    if (r !== void 0 && r.dep === n) {
      ((r.version = a), (o.depsTail = r));
      return;
    }
    let s = n.subsTail;
    if (s !== void 0 && s.version === a && s.sub === o) return;
    let c =
      (o.depsTail =
      n.subsTail =
        { version: a, dep: n, sub: o, prevDep: u, nextDep: r, prevSub: s, nextSub: void 0 });
    (r !== void 0 && (r.prevDep = c),
      u !== void 0 ? (u.nextDep = c) : (o.deps = c),
      s !== void 0 ? (s.nextSub = c) : (n.subs = c));
  }
  function p(n, o = n.sub) {
    let { dep: a, prevDep: u, nextDep: r, nextSub: s, prevSub: c } = n;
    return (
      r !== void 0 ? (r.prevDep = u) : (o.depsTail = u),
      u !== void 0 ? (u.nextDep = r) : (o.deps = r),
      s !== void 0 ? (s.prevSub = c) : (a.subsTail = c),
      c !== void 0 ? (c.nextSub = s) : (a.subs = s) === void 0 && t(a),
      r
    );
  }
  function f(n, o) {
    let a = n.nextSub,
      u;
    e: do {
      let r = n.sub,
        s = r.flags;
      if (
        (s & 60
          ? s & 12
            ? s & 4
              ? !(s & 48) && w(n, r)
                ? ((r.flags = s | 40), (s &= 1))
                : (s = 0)
              : (r.flags = (s & -9) | 32)
            : (s = 0)
          : ((r.flags = s | 32), o && (r.flags |= 8)),
        s & 2 && e(r),
        s & 1)
      ) {
        let c = r.subs;
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
  function g(n, o) {
    let a,
      u = 0,
      r = !1;
    e: do {
      let s = n.dep,
        c = s.flags;
      if (o.flags & 16) r = !0;
      else if ((c & 17) === 17) {
        let h = s.subs;
        i(s) && (h.nextSub !== void 0 && m(h), (r = !0));
      } else if ((c & 33) === 33) {
        ((a = { value: n, prev: a }), (n = s.deps), (o = s), ++u);
        continue;
      }
      if (!r) {
        let h = n.nextDep;
        if (h !== void 0) {
          n = h;
          continue;
        }
      }
      for (; u--;) {
        if (((n = a.value), (a = a.prev), r)) {
          let D = o.subs;
          if (i(o)) {
            (D.nextSub !== void 0 && m(D), (o = n.sub));
            continue;
          }
          r = !1;
        } else o.flags &= -33;
        o = n.sub;
        let h = n.nextDep;
        if (h !== void 0) {
          n = h;
          continue e;
        }
      }
      return r && !!o.flags;
    } while (!0);
  }
  function m(n) {
    do {
      let o = n.sub,
        a = o.flags;
      (a & 48) === 32 && ((o.flags = a | 16), (a & 6) === 2 && e(o));
    } while ((n = n.nextSub) !== void 0);
  }
  function w(n, o) {
    let a = o.depsTail;
    for (; a !== void 0;) {
      if (a === n) return !0;
      a = a.prevDep;
    }
    return !1;
  }
}
var C = k(M(), 1),
  x = 0,
  S,
  y = !1,
  {
    link: B,
    unlink: T,
    propagate: O,
    checkDirty: F,
    shallowPropagate: N,
  } = A({
    update(i) {
      return i.update();
    },
    notify(i) {
      return i.notify();
    },
    unwatched(i) {
      i instanceof v && i.unwatch();
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
      if (y) throw new Error("Cannot read state inside watcher");
      if (this.flags & d.Dirty && this.update()) {
        let t = this.subs;
        t !== void 0 && N(t);
      }
      return (S !== void 0 && B(this, S, x), this.currentValue);
    }
    peek() {
      return this.pendingValue;
    }
    set(e) {
      if (y) throw new Error("Cannot write state inside watcher");
      if (S !== void 0) throw new Error("Cannot write state inside computed");
      if (this.equals(this.pendingValue, e)) return !1;
      ((this.pendingValue = e), (this.flags = d.Mutable | d.Dirty));
      let t = this.subs;
      return (t !== void 0 && O(t, !1), !0);
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
function _(i) {
  return (e, t) => {
    let l = new WeakMap();
    return {
      get() {
        let p = l.get(this);
        return (V(p, "Signal must exist"), p.get());
      },
      set(p) {
        let f = l.get(this);
        (V(f, "Signal must exist"),
          V(!this.scheduler.inReactRenderPhase, "Cannot set state during React render phase"),
          f.set(p) && this.scheduler.signalChanges(this));
      },
      init(p) {
        let f = new E(p, i);
        l.set(this, f);
      },
    };
  };
}
var v = class {
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
    if (y) throw new Error("Cannot read computed inside watcher");
    let e = this.flags;
    if (e === d.None || e & d.Dirty) this.updateAndPropagate();
    else if (e & d.Pending) {
      let t = this.deps;
      t !== void 0 && F(t, this) ? this.updateAndPropagate() : (this.flags = e & ~d.Pending);
    }
    return (S !== void 0 && B(this, S, x), this.value);
  }
  updateAndPropagate() {
    if (this.update()) {
      let t = this.subs;
      t !== void 0 && N(t);
    }
  }
  update() {
    let e = S;
    ((S = this), (this.depsTail = void 0), (this.flags = d.Mutable | d.RecursedCheck));
    try {
      x++;
      let t = this.compute();
      return this.hasValue && this.equals(this.value, t)
        ? !1
        : ((this.value = t), (this.hasValue = !0), !0);
    } finally {
      ((S = e), (this.flags &= ~d.RecursedCheck));
      let t = this.depsTail,
        l = t !== void 0 ? t.nextDep : this.deps;
      for (; l !== void 0;) l = T(l, this);
    }
  }
  unwatch() {
    if (this.depsTail === void 0) return;
    this.flags = d.Mutable | d.Dirty;
    let t = this.depsTail;
    for (; t !== void 0;) {
      let l = t.prevDep;
      (T(t, this), (t = l));
    }
  }
};
function z(i) {
  return (e, t) => {
    let l = new WeakMap();
    return function () {
      let p = l.get(this);
      if (p) return p.get();
      let f = () => e.call(this),
        g = new v(f, i);
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
    if (y) throw new Error("Cannot watch signal inside watcher");
    (e !== void 0 && B(e, this, x), this.deps !== void 0 && (this.flags = d.Watching));
  }
  unwatch(e) {
    if (y) throw new Error("Cannot unwatch signal inside watcher");
    let t = this.depsTail;
    for (; t !== void 0;) {
      let l = t.prevDep;
      (t.dep === e && T(t, this), (t = l));
    }
    this.deps === void 0 && (this.flags = d.None);
  }
  notify() {
    this.flags = d.None;
    let e = y;
    y = !0;
    try {
      this.callback();
    } finally {
      y = e;
    }
  }
};
function j(i, e, t = Object.is) {
  let { scheduler: l } = P(),
    p = (0, C.useMemo)(() => {
      let f = new v(
        () => ({ value: i() }),
        (g, m) => t(g.value, m.value)
      );
      return {
        subscribe(g) {
          let m = new R(() => {
            l.scheduleRenderCallback(w);
          });
          function w() {
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
function J(i, e) {
  return j(() => i[e], [i, e]);
}
export { A as a, L as b, P as c, E as d, _ as e, z as f, j as g, J as h };
//# sourceMappingURL=chunk-PWPT6KBA.mjs.map
