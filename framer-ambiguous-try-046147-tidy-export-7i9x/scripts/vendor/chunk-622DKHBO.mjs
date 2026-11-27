import { a as D, c as M, e as L } from "chunk-TE4NJLC6.mjs";
import { a as x } from "chunk-BWOBSYK2.mjs";
import { a as O } from "chunk-EQBCTBZ3.mjs";
import { w as q } from "chunk-L5AQ4LH7.mjs";
import { j as A } from "chunk-EAUMDN6M.mjs";
import { a as E } from "chunk-5QSN7R54.mjs";
import { a as $, c as Y, e as Q } from "chunk-WLHSDIGQ.mjs";
var F = Y((g, k) => {
  "use strict";
  (function (o, n) {
    if (typeof g == "object" && typeof k == "object") k.exports = n();
    else if (typeof define == "function" && define.amd) define([], n);
    else {
      var c = n();
      for (var i in c) (typeof g == "object" ? g : o)[i] = c[i];
    }
  })(window, function () {
    return (function (o) {
      var n = {};
      function c(i) {
        if (n[i]) return n[i].exports;
        var l = (n[i] = { i, l: !1, exports: {} });
        return (o[i].call(l.exports, l, l.exports, c), (l.l = !0), l.exports);
      }
      return (
        (c.m = o),
        (c.c = n),
        (c.d = function (i, l, m) {
          c.o(i, l) || Object.defineProperty(i, l, { enumerable: !0, get: m });
        }),
        (c.r = function (i) {
          (typeof Symbol < "u" &&
            Symbol.toStringTag &&
            Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(i, "__esModule", { value: !0 }));
        }),
        (c.t = function (i, l) {
          if ((1 & l && (i = c(i)), 8 & l || (4 & l && typeof i == "object" && i && i.__esModule)))
            return i;
          var m = Object.create(null);
          if (
            (c.r(m),
            Object.defineProperty(m, "default", { enumerable: !0, value: i }),
            2 & l && typeof i != "string")
          )
            for (var u in i)
              c.d(
                m,
                u,
                function (r) {
                  return i[r];
                }.bind(null, u)
              );
          return m;
        }),
        (c.n = function (i) {
          var l =
            i && i.__esModule
              ? function () {
                  return i.default;
                }
              : function () {
                  return i;
                };
          return (c.d(l, "a", l), l);
        }),
        (c.o = function (i, l) {
          return Object.prototype.hasOwnProperty.call(i, l);
        }),
        (c.p = ""),
        c((c.s = 0))
      );
    })([
      function (o, n, c) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (m, u, r, e) {
                  e === void 0 && (e = r);
                  var a = Object.getOwnPropertyDescriptor(u, r);
                  ((a && ("get" in a ? u.__esModule : !a.writable && !a.configurable)) ||
                    (a = {
                      enumerable: !0,
                      get: function () {
                        return u[r];
                      },
                    }),
                    Object.defineProperty(m, e, a));
                }
              : function (m, u, r, e) {
                  (e === void 0 && (e = r), (m[e] = u[r]));
                }),
          l =
            (this && this.__exportStar) ||
            function (m, u) {
              for (var r in m)
                r === "default" || Object.prototype.hasOwnProperty.call(u, r) || i(u, m, r);
            };
        (Object.defineProperty(n, "__esModule", { value: !0 }), l(c(1), n), l(c(2), n));
      },
      function (o, n, c) {
        "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
      },
      function (o, n, c) {
        "use strict";
        var i =
            (this && this.__awaiter) ||
            function (r, e, a, h) {
              return new (a || (a = Promise))(function (p, t) {
                function s(v) {
                  try {
                    f(h.next(v));
                  } catch (y) {
                    t(y);
                  }
                }
                function d(v) {
                  try {
                    f(h.throw(v));
                  } catch (y) {
                    t(y);
                  }
                }
                function f(v) {
                  var y;
                  v.done
                    ? p(v.value)
                    : ((y = v.value),
                      y instanceof a
                        ? y
                        : new a(function (S) {
                            S(y);
                          })).then(s, d);
                }
                f((h = h.apply(r, e || [])).next());
              });
            },
          l =
            (this && this.__rest) ||
            function (r, e) {
              var a = {};
              for (var h in r)
                Object.prototype.hasOwnProperty.call(r, h) && e.indexOf(h) < 0 && (a[h] = r[h]);
              if (r != null && typeof Object.getOwnPropertySymbols == "function") {
                var p = 0;
                for (h = Object.getOwnPropertySymbols(r); p < h.length; p++)
                  e.indexOf(h[p]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(r, h[p]) &&
                    (a[h[p]] = r[h[p]]);
              }
              return a;
            };
        (Object.defineProperty(n, "__esModule", { value: !0 }), (n.FramerTracking = void 0));
        let m = c(3);
        function u() {
          let r = () =>
            Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .slice(-4);
          return `${r()}${r()}-${r()}-${r()}-${r()}-${r()}${r()}${r()}`;
        }
        n.FramerTracking = class {
          constructor(e) {
            ((this.sourceName = e.sourceName),
              (this.userId = e.userId),
              (this.verbose = e.verbose || !1),
              (this.addContext = e.addContext),
              (this.allowAnonymous = e.allowAnonymous || !1),
              (this.poster = (0, m.createPoster)({
                endpointURL: e.trackingURL,
                onAfterTrack: e.onAfterTrack,
                postBatch: e.postBatch,
                storeId: e.storeId,
                processItem: (a) =>
                  a.data.context.userId
                    ? a
                    : this.userId
                      ? ((a.data.context.userId = this.userId), a)
                      : this.allowAnonymous
                        ? a
                        : null,
              })));
          }
          flush() {
            return i(this, void 0, void 0, function* () {
              yield this.poster.flush();
            });
          }
          group(e) {
            this.post(Object.assign(Object.assign({}, e), { type: "group" }));
          }
          identify(e) {
            this.post(Object.assign(Object.assign({}, e), { type: "identify" }));
          }
          track(e) {
            if (this.verbose) {
              let { event: a, type: h } = e,
                p = l(e, ["event", "type"]);
              this.logEvent(a, p);
            }
            this.post(Object.assign(Object.assign({}, e), { type: "track" }));
          }
          setUserId(e) {
            (this.userId &&
              this.userId !== e &&
              console.warn("Changing user id from %s to %s", this.userId, e),
              (this.userId = e),
              this.poster.reprocessItems());
          }
          logEvent(e, a) {
            let h = `%c${e}`,
              p = ["background: blue; border-radius: 3px; color: white; padding: 0 5px;"];
            (a &&
              Object.keys(a).length > 0 &&
              ((h += `
%c${JSON.stringify(a, null, 2)}`),
              p.push("font-family: monospace; opacity: 0.7;")),
              console.log(h, ...p));
          }
          post(e) {
            if (!this.userId) {
              let p = e.type === "identify" ? e.userId : e.context && e.context.userId;
              p && this.setUserId(p);
            }
            let a = Object.assign({}, e.context);
            (typeof window < "u" &&
              (a.language || (a.language = window.navigator.language),
              a.screen ||
                (a.screen = { width: window.screen.width, height: window.screen.height })),
              this.addContext && this.addContext(a));
            let h = {
              data: Object.assign(Object.assign({}, e), { context: a, uuid: e.uuid || u() }),
              source: this.sourceName,
              timestamp: Date.now(),
            };
            this.poster.post(h);
          }
        };
      },
      function (o, n, c) {
        "use strict";
        var i =
          (this && this.__awaiter) ||
          function (p, t, s, d) {
            return new (s || (s = Promise))(function (f, v) {
              function y(w) {
                try {
                  j(d.next(w));
                } catch (b) {
                  v(b);
                }
              }
              function S(w) {
                try {
                  j(d.throw(w));
                } catch (b) {
                  v(b);
                }
              }
              function j(w) {
                var b;
                w.done
                  ? f(w.value)
                  : ((b = w.value),
                    b instanceof s
                      ? b
                      : new s(function (V) {
                          V(b);
                        })).then(y, S);
              }
              j((d = d.apply(p, t || [])).next());
            });
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }), (n.createPoster = void 0));
        let l = c(4);
        n.createPoster = function (p) {
          return new h(p);
        };
        let m = 1e3,
          u = 1e4,
          r = 100,
          e = 4,
          a = 1e3;
        class h {
          constructor(t) {
            ((this.failCount = 0),
              (this.endpointURL = t.endpointURL),
              (this.onAfterTrack = t.onAfterTrack),
              (this.processItem = t.processItem),
              t.storeId !== null
                ? ((this.store = (0, l.createStore)(t.storeId || "framer-tracking-client-queue")),
                  (this.queue = this.store.load()))
                : (this.queue = []),
              (this.postBatch =
                t.postBatch ||
                (typeof window < "u" && typeof window.fetch == "function"
                  ? Promise.resolve()
                      .then(() => c(5))
                      .then((s) => s.postBatch)
                  : Promise.resolve()
                      .then(() => c(6))
                      .then((s) => s.postBatch))));
          }
          flush() {
            return i(this, void 0, void 0, function* () {
              if (this.pendingFlushPromise) {
                try {
                  yield this.pendingFlushPromise;
                } catch {}
                return this.queue.length === 0;
              }
              (clearTimeout(this.flushTimer),
                clearTimeout(this.flushDeadlineTimer),
                (this.flushTimer = this.flushDeadlineTimer = void 0));
              let t = this.buildPostBody();
              if (!t) return !0;
              let s = Promise.all([this.postBatch, this.endpointURL]).then(([d, f]) => d(f, t));
              this.pendingFlushPromise = s;
              try {
                (yield s,
                  (this.failCount = 0),
                  (this.queue = this.queue.filter((d) => !d.pending)),
                  this.store && this.store.save(this.queue),
                  this.queue.length > 0 && !this.flushTimer && this.scheduleFlush());
              } catch (d) {
                console.warn("Post failed: %s", d);
                for (let f of this.queue) f.pending && (f.pending = !1);
                (this.failCount++, this.scheduleFlush());
              } finally {
                this.pendingFlushPromise = void 0;
              }
              return this.queue.length === 0;
            });
          }
          post(t) {
            let s = this.createQueueItem(t);
            (this.queue.push(s),
              this.constrainQueueSize(),
              this.store && this.store.save(this.queue),
              this.scheduleFlush());
          }
          reprocessItems(t = !1) {
            let s = !1;
            for (let d of this.queue) d.complete || (this.tryCompleteItem(d) && (s = !0));
            this.store && (t || s) && this.store.save(this.queue);
          }
          buildPostBody() {
            let t = [
                `[
`,
              ],
              s = 0;
            for (let d = 0; d < this.queue.length; d++) {
              let f = this.queue[d];
              if (
                this.tryCompleteItem(f) &&
                (s > 0 &&
                  t.push(`,
`),
                t.push(f.json),
                (f.pending = !0),
                ++s === r)
              )
                break;
            }
            return s === 0
              ? ""
              : (t.push(`
]`),
                t.join(""));
          }
          constrainQueueSize() {
            if (this.queue.length <= a) return;
            let t = this.queue.length - a;
            (this.queue.splice(t), console.warn("Dropping %d item(s) from the queue", t));
          }
          createQueueItem(t) {
            if (!this.processItem)
              return (this.afterTrack(t), { complete: !0, json: JSON.stringify(t) });
            try {
              let s = this.processItem(t);
              return s
                ? (this.afterTrack(s), { complete: !0, json: JSON.stringify(s) })
                : { cache: t, complete: !1, json: JSON.stringify(t) };
            } catch (s) {
              let d = JSON.stringify(t);
              return (
                console.warn(
                  "Failed to process item (%s): %s",
                  s instanceof Error ? s.message : "unknown",
                  d
                ),
                { cache: t, complete: !1, json: d }
              );
            }
          }
          afterTrack(t) {
            if (this.onAfterTrack)
              try {
                this.onAfterTrack(t);
              } catch (s) {
                console.warn("onAfterTrack callback failed: %s", s);
              }
          }
          scheduleFlush() {
            let t = () => this.flush();
            (this.flushDeadlineTimer ||
              (this.flushDeadlineTimer = setTimeout(t, this.withBackoff(u))),
              clearTimeout(this.flushTimer),
              (this.flushTimer = setTimeout(t, this.withBackoff(m))));
          }
          tryCompleteItem(t) {
            if (t.complete) return !0;
            if (!this.processItem) return !1;
            try {
              let s = t.cache || JSON.parse(t.json),
                d = this.processItem(s);
              if (!d) return ((t.cache = s), !1);
              ((t.cache = void 0),
                (t.complete = !0),
                (t.json = JSON.stringify(d)),
                this.afterTrack(d));
            } catch (s) {
              return (
                console.warn(
                  "Failed to process item (%s): %s",
                  s instanceof Error ? s.message : "unknown",
                  t
                ),
                !1
              );
            }
            return !0;
          }
          withBackoff(t) {
            return this.failCount ? t * Math.pow(2, Math.min(this.failCount, e)) : t;
          }
        }
      },
      function (o, n, c) {
        "use strict";
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.createStore = void 0),
          (n.createStore = function (l) {
            return new i(l);
          }));
        class i {
          constructor(m) {
            this.id = m;
          }
          load() {
            let m = this.getLocalStorageSafely();
            if (!m) return [];
            let u = m.getItem(this.id);
            return u
              ? u
                  .split(
                    `
`
                  )
                  .map((r) =>
                    r && r[0] === "!"
                      ? { complete: !1, json: r.slice(1) }
                      : { complete: !0, json: r }
                  )
              : [];
          }
          save(m) {
            let u = this.getLocalStorageSafely();
            if (!u) return;
            let r = m.map((e) => (e.complete ? "" : "!") + e.json).join(`
`);
            try {
              u.setItem(this.id, r);
            } catch {}
          }
          getLocalStorageSafely() {
            try {
              if (typeof window > "u" || !window.localStorage) return null;
            } catch {
              return null;
            }
            return window.localStorage;
          }
        }
      },
      function (o, n, c) {
        "use strict";
        var i =
          (this && this.__awaiter) ||
          function (l, m, u, r) {
            return new (u || (u = Promise))(function (e, a) {
              function h(s) {
                try {
                  t(r.next(s));
                } catch (d) {
                  a(d);
                }
              }
              function p(s) {
                try {
                  t(r.throw(s));
                } catch (d) {
                  a(d);
                }
              }
              function t(s) {
                var d;
                s.done
                  ? e(s.value)
                  : ((d = s.value),
                    d instanceof u
                      ? d
                      : new u(function (f) {
                          f(d);
                        })).then(h, p);
              }
              t((r = r.apply(l, m || [])).next());
            });
          };
        (Object.defineProperty(n, "__esModule", { value: !0 }),
          (n.postBatch = void 0),
          (n.postBatch = function (l, m) {
            return i(this, void 0, void 0, function* () {
              let u = yield fetch(l, {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json; charset=utf-8" },
                body: m,
              });
              if (!u.ok) throw Error(`Server responded with ${u.statusText}`);
              u.type !== "opaque" && (yield u.json());
            });
          }));
      },
      function (o, n, c) {
        "use strict";
        (Object.defineProperty(n, "__esModule", { value: !0 }), (n.postBatch = void 0));
        let i = c(7);
        n.postBatch = function (l, m) {
          return new Promise((u, r) => {
            let e = l.split("/");
            if (e.length < 3 || e[0] !== "https:" || e[1] !== "")
              throw Error("Expected a valid HTTPS URL");
            let a = {
                hostname: e[2],
                path: "/" + e.slice(3).join("/"),
                headers: {
                  "Content-Length": m.length,
                  "Content-Type": "application/json; charset=utf-8",
                },
                method: "POST",
              },
              h = i.request(a, (p) => {
                if (p.statusCode !== 200)
                  return void r(Error(`Server responded with ${p.statusMessage}`));
                p.setEncoding("utf8");
                let t = "";
                (p.on("data", (s) => {
                  t += s;
                }),
                  p.on("error", r),
                  p.on("end", () => {
                    try {
                      (JSON.parse(t), u());
                    } catch (s) {
                      r(s);
                    }
                  }));
              });
            (h.on("error", r), h.write(m), h.end());
          });
        };
      },
      function (o, n) {
        o.exports = $("https");
      },
    ]);
  });
});
var R = (o) =>
  function (c, i) {
    o.track({ ...i, event: c, type: "track" });
  };
var B = Q(F(), 1);
var re = `FramerWeb/${globalThis.framerBuildInfo.version}`,
  T,
  ie = (o) => {
    ((T = o), M("projectId", o));
  },
  C,
  se = (o) => {
    C = o;
  },
  _ = !1;
try {
  _ = window.localStorage?.getItem("debug-metrics") === "active";
} catch {}
var H = A("analytics:event"),
  N = q(),
  W = N,
  oe = (o) => {
    W = o ? "phone" : N;
  },
  z = new B.FramerTracking({
    sourceName: "framer-web",
    trackingURL: E().events + "/track",
    verbose: _,
    onAfterTrack(o) {
      H.info(o.data.event, o.data);
    },
    addContext: (o) => {
      let n = x();
      if (n?.stores?.scopeStore)
        try {
          ((o.scopeType = n.stores.scopeStore.scopeType),
            (o.scopeId = n.stores.scopeStore.active.id));
        } catch {}
      (n && o.branchId === void 0 && (o.branchId = n.activeBranchId),
        o.appVersion === void 0 &&
          (o.appVersion = `FramerWeb/${globalThis.framerBuildInfo.version}`),
        T && o.projectId === void 0 && (o.projectId = T),
        C !== void 0 && o.legacyProject === void 0 && (o.legacyProject = C),
        o.releaseChannel === void 0 && (o.releaseChannel = O(window)?.channel),
        o.hardwareType === void 0 && (o.hardwareType = W),
        o.activeMinutes === void 0 && (o.activeMinutes = L()));
    },
  }),
  ne = R(z);
D((o, n) => {
  if (n?.track) {
    let { event: c, ...i } = o;
    z.track({ ...i, type: "track", event: c });
  }
});
export { F as a, re as b, ie as c, se as d, oe as e, z as f, ne as g };
//# sourceMappingURL=chunk-622DKHBO.mjs.map
