import { a as q, c as M } from "chunk-7JB7LKQK.mjs";
import { a as O } from "chunk-BWOBSYK2.mjs";
import { a as D } from "chunk-EQBCTBZ3.mjs";
import { j as A } from "chunk-PFWVXZ76.mjs";
import { a as E } from "chunk-YRQ7G4QH.mjs";
import { a as N, c as W, e as z } from "chunk-WLHSDIGQ.mjs";
var L = W((g, k) => {
  "use strict";
  (function (a, o) {
    if (typeof g == "object" && typeof k == "object") k.exports = o();
    else if (typeof define == "function" && define.amd) define([], o);
    else {
      var c = o();
      for (var i in c) (typeof g == "object" ? g : a)[i] = c[i];
    }
  })(window, function () {
    return (function (a) {
      var o = {};
      function c(i) {
        if (o[i]) return o[i].exports;
        var l = (o[i] = { i, l: !1, exports: {} });
        return (a[i].call(l.exports, l, l.exports, c), (l.l = !0), l.exports);
      }
      return (
        (c.m = a),
        (c.c = o),
        (c.d = function (i, l, u) {
          c.o(i, l) || Object.defineProperty(i, l, { enumerable: !0, get: u });
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
          var u = Object.create(null);
          if (
            (c.r(u),
            Object.defineProperty(u, "default", { enumerable: !0, value: i }),
            2 & l && typeof i != "string")
          )
            for (var m in i)
              c.d(
                u,
                m,
                function (r) {
                  return i[r];
                }.bind(null, m)
              );
          return u;
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
      function (a, o, c) {
        "use strict";
        var i =
            (this && this.__createBinding) ||
            (Object.create
              ? function (u, m, r, e) {
                  e === void 0 && (e = r);
                  var n = Object.getOwnPropertyDescriptor(m, r);
                  ((n && ("get" in n ? m.__esModule : !n.writable && !n.configurable)) ||
                    (n = {
                      enumerable: !0,
                      get: function () {
                        return m[r];
                      },
                    }),
                    Object.defineProperty(u, e, n));
                }
              : function (u, m, r, e) {
                  (e === void 0 && (e = r), (u[e] = m[r]));
                }),
          l =
            (this && this.__exportStar) ||
            function (u, m) {
              for (var r in u)
                r === "default" || Object.prototype.hasOwnProperty.call(m, r) || i(m, u, r);
            };
        (Object.defineProperty(o, "__esModule", { value: !0 }), l(c(1), o), l(c(2), o));
      },
      function (a, o, c) {
        "use strict";
        Object.defineProperty(o, "__esModule", { value: !0 });
      },
      function (a, o, c) {
        "use strict";
        var i =
            (this && this.__awaiter) ||
            function (r, e, n, h) {
              return new (n || (n = Promise))(function (p, t) {
                function s(v) {
                  try {
                    f(h.next(v));
                  } catch (b) {
                    t(b);
                  }
                }
                function d(v) {
                  try {
                    f(h.throw(v));
                  } catch (b) {
                    t(b);
                  }
                }
                function f(v) {
                  var b;
                  v.done
                    ? p(v.value)
                    : ((b = v.value),
                      b instanceof n
                        ? b
                        : new n(function (S) {
                            S(b);
                          })).then(s, d);
                }
                f((h = h.apply(r, e || [])).next());
              });
            },
          l =
            (this && this.__rest) ||
            function (r, e) {
              var n = {};
              for (var h in r)
                Object.prototype.hasOwnProperty.call(r, h) && e.indexOf(h) < 0 && (n[h] = r[h]);
              if (r != null && typeof Object.getOwnPropertySymbols == "function") {
                var p = 0;
                for (h = Object.getOwnPropertySymbols(r); p < h.length; p++)
                  e.indexOf(h[p]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(r, h[p]) &&
                    (n[h[p]] = r[h[p]]);
              }
              return n;
            };
        (Object.defineProperty(o, "__esModule", { value: !0 }), (o.FramerTracking = void 0));
        let u = c(3);
        function m() {
          let r = () =>
            Math.floor(65536 * (1 + Math.random()))
              .toString(16)
              .slice(-4);
          return `${r()}${r()}-${r()}-${r()}-${r()}-${r()}${r()}${r()}`;
        }
        o.FramerTracking = class {
          constructor(e) {
            ((this.sourceName = e.sourceName),
              (this.userId = e.userId),
              (this.verbose = e.verbose || !1),
              (this.addContext = e.addContext),
              (this.allowAnonymous = e.allowAnonymous || !1),
              (this.poster = (0, u.createPoster)({
                endpointURL: e.trackingURL,
                onAfterTrack: e.onAfterTrack,
                postBatch: e.postBatch,
                storeId: e.storeId,
                processItem: (n) =>
                  n.data.context.userId
                    ? n
                    : this.userId
                      ? ((n.data.context.userId = this.userId), n)
                      : this.allowAnonymous
                        ? n
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
              let { event: n, type: h } = e,
                p = l(e, ["event", "type"]);
              this.logEvent(n, p);
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
          logEvent(e, n) {
            let h = `%c${e}`,
              p = ["background: blue; border-radius: 3px; color: white; padding: 0 5px;"];
            (n &&
              Object.keys(n).length > 0 &&
              ((h += `
%c${JSON.stringify(n, null, 2)}`),
              p.push("font-family: monospace; opacity: 0.7;")),
              console.log(h, ...p));
          }
          post(e) {
            if (!this.userId) {
              let p = e.type === "identify" ? e.userId : e.context && e.context.userId;
              p && this.setUserId(p);
            }
            let n = Object.assign({}, e.context);
            (typeof window < "u" &&
              (n.language || (n.language = window.navigator.language),
              n.screen ||
                (n.screen = { width: window.screen.width, height: window.screen.height })),
              this.addContext && this.addContext(n));
            let h = {
              data: Object.assign(Object.assign({}, e), { context: n, uuid: e.uuid || m() }),
              source: this.sourceName,
              timestamp: Date.now(),
            };
            this.poster.post(h);
          }
        };
      },
      function (a, o, c) {
        "use strict";
        var i =
          (this && this.__awaiter) ||
          function (p, t, s, d) {
            return new (s || (s = Promise))(function (f, v) {
              function b(w) {
                try {
                  j(d.next(w));
                } catch (y) {
                  v(y);
                }
              }
              function S(w) {
                try {
                  j(d.throw(w));
                } catch (y) {
                  v(y);
                }
              }
              function j(w) {
                var y;
                w.done
                  ? f(w.value)
                  : ((y = w.value),
                    y instanceof s
                      ? y
                      : new s(function (_) {
                          _(y);
                        })).then(b, S);
              }
              j((d = d.apply(p, t || [])).next());
            });
          };
        (Object.defineProperty(o, "__esModule", { value: !0 }), (o.createPoster = void 0));
        let l = c(4);
        o.createPoster = function (p) {
          return new h(p);
        };
        let u = 1e3,
          m = 1e4,
          r = 100,
          e = 4,
          n = 1e3;
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
            if (this.queue.length <= n) return;
            let t = this.queue.length - n;
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
              (this.flushDeadlineTimer = setTimeout(t, this.withBackoff(m))),
              clearTimeout(this.flushTimer),
              (this.flushTimer = setTimeout(t, this.withBackoff(u))));
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
      function (a, o, c) {
        "use strict";
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.createStore = void 0),
          (o.createStore = function (l) {
            return new i(l);
          }));
        class i {
          constructor(u) {
            this.id = u;
          }
          load() {
            let u = this.getLocalStorageSafely();
            if (!u) return [];
            let m = u.getItem(this.id);
            return m
              ? m
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
          save(u) {
            let m = this.getLocalStorageSafely();
            if (!m) return;
            let r = u.map((e) => (e.complete ? "" : "!") + e.json).join(`
`);
            try {
              m.setItem(this.id, r);
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
      function (a, o, c) {
        "use strict";
        var i =
          (this && this.__awaiter) ||
          function (l, u, m, r) {
            return new (m || (m = Promise))(function (e, n) {
              function h(s) {
                try {
                  t(r.next(s));
                } catch (d) {
                  n(d);
                }
              }
              function p(s) {
                try {
                  t(r.throw(s));
                } catch (d) {
                  n(d);
                }
              }
              function t(s) {
                var d;
                s.done
                  ? e(s.value)
                  : ((d = s.value),
                    d instanceof m
                      ? d
                      : new m(function (f) {
                          f(d);
                        })).then(h, p);
              }
              t((r = r.apply(l, u || [])).next());
            });
          };
        (Object.defineProperty(o, "__esModule", { value: !0 }),
          (o.postBatch = void 0),
          (o.postBatch = function (l, u) {
            return i(this, void 0, void 0, function* () {
              let m = yield fetch(l, {
                method: "POST",
                mode: "cors",
                headers: { "Content-Type": "application/json; charset=utf-8" },
                body: u,
              });
              if (!m.ok) throw Error(`Server responded with ${m.statusText}`);
              m.type !== "opaque" && (yield m.json());
            });
          }));
      },
      function (a, o, c) {
        "use strict";
        (Object.defineProperty(o, "__esModule", { value: !0 }), (o.postBatch = void 0));
        let i = c(7);
        o.postBatch = function (l, u) {
          return new Promise((m, r) => {
            let e = l.split("/");
            if (e.length < 3 || e[0] !== "https:" || e[1] !== "")
              throw Error("Expected a valid HTTPS URL");
            let n = {
                hostname: e[2],
                path: "/" + e.slice(3).join("/"),
                headers: {
                  "Content-Length": u.length,
                  "Content-Type": "application/json; charset=utf-8",
                },
                method: "POST",
              },
              h = i.request(n, (p) => {
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
                      (JSON.parse(t), m());
                    } catch (s) {
                      r(s);
                    }
                  }));
              });
            (h.on("error", r), h.write(u), h.end());
          });
        };
      },
      function (a, o) {
        a.exports = N("https");
      },
    ]);
  });
});
var x = (a) =>
  function (c, i) {
    a.track({ ...i, event: c, type: "track" });
  };
var R = z(L(), 1);
var P = `FramerWeb/${globalThis.framerBuildInfo.version}`,
  T,
  U = (a) => {
    ((T = a), M("projectId", a));
  },
  C,
  I = (a) => {
    C = a;
  },
  F = !1;
try {
  F = window.localStorage?.getItem("debug-metrics") === "active";
} catch {}
var V = A("analytics:event"),
  B = new R.FramerTracking({
    sourceName: "framer-web",
    trackingURL: E().events + "/track",
    verbose: F,
    onAfterTrack(a) {
      V.info(a.data.event, a.data);
    },
    addContext: (a) => {
      let o = O();
      if (o?.stores?.scopeStore)
        try {
          ((a.scopeType = o.stores.scopeStore.scopeType),
            (a.scopeId = o.stores.scopeStore.active.id));
        } catch {}
      (o && a.branchId === void 0 && (a.branchId = o.activeBranchId),
        a.appVersion === void 0 &&
          (a.appVersion = `FramerWeb/${globalThis.framerBuildInfo.version}`),
        T && a.projectId === void 0 && (a.projectId = T),
        C !== void 0 && a.legacyProject === void 0 && (a.legacyProject = C),
        a.releaseChannel === void 0 && (a.releaseChannel = D(window)?.channel),
        a.activeMinutes === void 0 && (a.activeMinutes = Math.floor(performance.now() / 6e4)));
    },
  }),
  ee = x(B);
q((a, o) => {
  if (o?.track) {
    let { event: c, ...i } = a;
    B.track({ ...i, type: "track", event: c });
  }
});
export { L as a, P as b, U as c, I as d, B as e, ee as f };
//# sourceMappingURL=chunk-J2I56CTS.mjs.map
