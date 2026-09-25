import { b as he, c as le, d as $ } from "chunk-YX57V7JF.mjs";
import { b as fe } from "chunk-YS3B4HMG.mjs";
import { a as ue } from "chunk-GBD3AMAR.mjs";
import { f as de } from "chunk-EYQVCXHR.mjs";
import { g as oe, q as ce } from "chunk-ZA6L5DVI.mjs";
import { h as ae } from "chunk-LA34HORX.mjs";
import { a as qe } from "chunk-SWYZG2NI.mjs";
import { b as O } from "chunk-4JY5UMT2.mjs";
import { b as ie, i as T } from "chunk-VJ7UYMJI.mjs";
import { a as w } from "chunk-YRQ7G4QH.mjs";
import { c as q, e as se } from "chunk-WLHSDIGQ.mjs";
var Pe = q((L) => {
  "use strict";
  Object.defineProperty(L, "__esModule", { value: !0 });
  L.regionAPIs = void 0;
  L.regionAPIs = new Map([
    ["us", "https://api-iam.intercom.io"],
    ["eu", "https://api-iam.eu.intercom.io"],
    ["ap", "https://api-iam.au.intercom.io"],
  ]);
});
var De = q((k) => {
  "use strict";
  var ot =
    (k && k.__awaiter) ||
    function (r, e, t, n) {
      function s(a) {
        return a instanceof t
          ? a
          : new t(function (o) {
              o(a);
            });
      }
      return new (t || (t = Promise))(function (a, o) {
        function c(h) {
          try {
            f(n.next(h));
          } catch (p) {
            o(p);
          }
        }
        function u(h) {
          try {
            f(n.throw(h));
          } catch (p) {
            o(p);
          }
        }
        function f(h) {
          h.done ? a(h.value) : s(h.value).then(c, u);
        }
        f((n = n.apply(r, e || [])).next());
      });
    };
  Object.defineProperty(k, "__esModule", { value: !0 });
  k.ref = k.init = void 0;
  var Oe = "_intercom_npm_loader",
    x = function () {
      x.loaderQueue(arguments);
    };
  x.q = [];
  x.loaderQueue = function (r) {
    x.q.push(r);
  };
  var V = function () {
      var r,
        e,
        t = document;
      if (!t.getElementById(Oe)) {
        var n = t.createElement("script");
        ((n.type = "text/javascript"),
          (n.async = !0),
          (n.id = Oe),
          (n.src =
            "https://widget.intercom.io/widget/" +
            ((r = window.intercomSettings) === null || r === void 0 ? void 0 : r.app_id)));
        var s = t.getElementsByTagName("script")[0];
        (e = s.parentNode) === null || e === void 0 || e.insertBefore(n, s);
      }
    },
    Ce = () => document.readyState === "complete" || document.readyState === "interactive",
    at = () =>
      ot(void 0, void 0, void 0, function* () {
        var r = window,
          e = r.Intercom;
        (r.intercomSettings && (r.intercomSettings.installation_type = "npm-package"),
          typeof e == "function"
            ? (e("reattach_activator"), e("update", r.intercomSettings))
            : ((r.Intercom = x),
              Ce()
                ? V()
                : (document.addEventListener("readystatechange", function () {
                    Ce() && V();
                  }),
                  r.attachEvent ? r.attachEvent("onload", V) : r.addEventListener("load", V, !1))));
      });
  k.init = at;
  k.ref = void 0;
});
var We = q((i) => {
  "use strict";
  var ct =
    (i && i.__rest) ||
    function (r, e) {
      var t = {};
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
      if (r != null && typeof Object.getOwnPropertySymbols == "function")
        for (var s = 0, n = Object.getOwnPropertySymbols(r); s < n.length; s++)
          e.indexOf(n[s]) < 0 &&
            Object.prototype.propertyIsEnumerable.call(r, n[s]) &&
            (t[n[s]] = r[n[s]]);
      return t;
    };
  Object.defineProperty(i, "__esModule", { value: !0 });
  i.onUserEmailSupplied =
    i.showConversation =
    i.showTicket =
    i.startChecklist =
    i.startSurvey =
    i.showNews =
    i.showArticle =
    i.startTour =
    i.getVisitorId =
    i.trackEvent =
    i.onUnreadCountChange =
    i.onShow =
    i.onHide =
    i.showNewMessage =
    i.showMessages =
    i.showSpace =
    i.show =
    i.hide =
    i.update =
    i.shutdown =
    i.boot =
    i.Intercom =
      void 0;
  var ut = Pe(),
    Me = De(),
    d = (r, ...e) => {
      typeof window !== void 0 && window.Intercom
        ? window.Intercom(r, ...e)
        : console.warn("Please ensure Intercom is setup and running on client-side!");
    },
    dt = (r) => {
      if (typeof r != "object") {
        console.warn("Intercom initialiser called with invalid parameters.");
        return;
      }
      let { region: e = "us" } = r,
        t = ct(r, ["region"]);
      typeof window < "u" &&
        !Me.ref &&
        ((window.intercomSettings = Object.assign(Object.assign({}, t), {
          api_base: ut.regionAPIs.get(e),
        })),
        (0, Me.init)());
    };
  i.Intercom = dt;
  i.default = i.Intercom;
  var ht = (r) => d("boot", r);
  i.boot = ht;
  var lt = () => d("shutdown");
  i.shutdown = lt;
  var ft = (r) => d("update", r);
  i.update = ft;
  var pt = () => d("hide");
  i.hide = pt;
  var gt = () => d("show");
  i.show = gt;
  var mt = (r) => d("showSpace", r);
  i.showSpace = mt;
  var yt = () => d("showMessages");
  i.showMessages = yt;
  var wt = (r) => d("showNewMessage", r);
  i.showNewMessage = wt;
  var vt = (r) => d("onHide", r);
  i.onHide = vt;
  var St = (r) => d("onShow", r);
  i.onShow = St;
  var kt = (r) => d("onUnreadCountChange", r);
  i.onUnreadCountChange = kt;
  var bt = (...r) => d("trackEvent", ...r);
  i.trackEvent = bt;
  var Tt = () => d("getVisitorId");
  i.getVisitorId = Tt;
  var Rt = (r) => d("startTour", r);
  i.startTour = Rt;
  var At = (r) => d("showArticle", r);
  i.showArticle = At;
  var Et = (r) => d("showNews", r);
  i.showNews = Et;
  var It = (r) => d("startSurvey", r);
  i.startSurvey = It;
  var xt = (r) => d("startChecklist", r);
  i.startChecklist = xt;
  var _t = (r) => d("showTicket", r);
  i.showTicket = _t;
  var Pt = (r) => d("showConversation", r);
  i.showConversation = Pt;
  var Ot = (r) => d("onUserEmailSupplied", r);
  i.onUserEmailSupplied = Ot;
});
var v = class r extends Error {
    message;
    code;
    data;
    isTemporary;
    ref;
    status;
    skipSentry;
    constructor({
      message: e,
      code: t,
      data: n = {},
      isTemporary: s,
      ref: a,
      status: o,
      skipSentry: c,
      cause: u,
    }) {
      (super(),
        Error.captureStackTrace && Error.captureStackTrace(this, r),
        (this.message = e),
        (this.code = t),
        (this.data = n),
        (this.isTemporary = !0),
        (this.ref = a),
        (this.status = o),
        (this.skipSentry = !!c),
        (this.cause = u),
        s !== void 0 ? (this.isTemporary = s) : o && (this.isTemporary = o !== C.BadRequest));
    }
    toString() {
      return this.message;
    }
    isUnauthorized() {
      return this.status === C.Unauthorized;
    }
    isNotFound() {
      return this.status === C.NotFound;
    }
    isForbidden() {
      return this.status === C.Forbidden;
    }
    isClientError() {
      return this.status && this.status >= 400 && this.status < 500;
    }
    isServerError() {
      return this.status && this.status >= 500;
    }
  },
  C = {
    Ok: 200,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentDeclined: 402,
    Forbidden: 403,
    NotFound: 404,
    Conflict: 409,
  };
var pe = se(qe(), 1);
async function $e() {
  "serviceWorker" in navigator &&
    (await navigator.serviceWorker.register("/serviceWorker.js"),
    await me({ type: "refreshApiServer", payload: { api: w().api } }));
}
async function ge() {
  (me({ type: "signOut" }),
    navigator.serviceWorker.getRegistrations().then((r) => {
      for (let e of r) e.unregister();
    }));
}
async function me(r) {
  "serviceWorker" in navigator && (await navigator.serviceWorker.ready).active?.postMessage(r);
}
function Bt() {
  pe.default.useEffect(() => {
    $e().catch((r) => {
      T("app:info").warn("Unable to register the service worker", r);
    });
  }, []);
}
var ze = "X-Framer-AI-Credits-Intro-Experiment";
function ye() {
  return ce.isOn("aiCreditsIntroExperiment") ? { [ze]: "on" } : {};
}
async function ve(r, e) {
  let t = r.getReader(),
    n;
  for (; !(n = await t.read()).done;) e(n.value);
}
function Se(r) {
  let e,
    t,
    n,
    s = !1;
  return function (o) {
    e === void 0 ? ((e = o), (t = 0), (n = -1)) : (e = Ke(e, o));
    let c = e.length,
      u = 0;
    for (; t < c;) {
      s && (e[t] === 10 && (u = ++t), (s = !1));
      let f = -1;
      for (; t < c && f === -1; ++t)
        switch (e[t]) {
          case 58:
            n === -1 && (n = t - u);
            break;
          case 13:
            s = !0;
          case 10:
            f = t;
            break;
        }
      if (f === -1) break;
      (r(e.subarray(u, f), n), (u = t), (n = -1));
    }
    u === c ? (e = void 0) : u !== 0 && ((e = e.subarray(u)), (t -= u));
  };
}
function ke(r, e, t) {
  let n = we(),
    s = new TextDecoder();
  return function (o, c) {
    if (o.length === 0) (t?.(n), (n = we()));
    else if (c > 0) {
      let u = s.decode(o.subarray(0, c)),
        f = c + (o[c + 1] === 32 ? 2 : 1),
        h = s.decode(o.subarray(f));
      switch (u) {
        case "data":
          n.data = n.data
            ? n.data +
              `
` +
              h
            : h;
          break;
        case "event":
          n.event = h;
          break;
        case "id":
          r((n.id = h));
          break;
        case "retry":
          let p = parseInt(h, 10);
          isNaN(p) || e((n.retry = p));
          break;
      }
    }
  };
}
function Ke(r, e) {
  let t = new Uint8Array(r.length + e.length);
  return (t.set(r), t.set(e, r.length), t);
}
function we() {
  return { data: "", event: "", id: "", retry: void 0 };
}
var Je = function (r, e) {
    var t = {};
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function")
      for (var s = 0, n = Object.getOwnPropertySymbols(r); s < n.length; s++)
        e.indexOf(n[s]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(r, n[s]) &&
          (t[n[s]] = r[n[s]]);
    return t;
  },
  D = "text/event-stream",
  Qe = 1e3,
  be = "last-event-id";
function z(r, e) {
  var {
      signal: t,
      headers: n,
      onopen: s,
      onmessage: a,
      onclose: o,
      onerror: c,
      openWhenHidden: u,
      fetch: f,
    } = e,
    h = Je(e, [
      "signal",
      "headers",
      "onopen",
      "onmessage",
      "onclose",
      "onerror",
      "openWhenHidden",
      "fetch",
    ]);
  return new Promise((p, Ne) => {
    let A = Object.assign({}, n);
    A.accept || (A.accept = D);
    let E;
    function re() {
      (E.abort(), document.hidden || U());
    }
    u || document.addEventListener("visibilitychange", re);
    let ne = Qe,
      F = 0;
    function N() {
      (document.removeEventListener("visibilitychange", re), window.clearTimeout(F), E.abort());
    }
    t?.addEventListener("abort", () => {
      (N(), p());
    });
    let Ue = f ?? window.fetch,
      He = s ?? Ge;
    async function U() {
      var H;
      E = new AbortController();
      try {
        let P = await Ue(r, Object.assign(Object.assign({}, h), { headers: A, signal: E.signal }));
        (await He(P),
          await ve(
            P.body,
            Se(
              ke(
                (y) => {
                  y ? (A[be] = y) : delete A[be];
                },
                (y) => {
                  ne = y;
                },
                a
              )
            )
          ),
          o?.(),
          N(),
          p());
      } catch (P) {
        if (!E.signal.aborted)
          try {
            let y = (H = c?.(P)) !== null && H !== void 0 ? H : ne;
            (window.clearTimeout(F), (F = window.setTimeout(U, y)));
          } catch (y) {
            (N(), Ne(y));
          }
      }
    }
    U();
  });
}
function Ge(r) {
  let e = r.headers.get("content-type");
  if (!e?.startsWith(D)) throw new Error(`Expected content-type to be ${D}, Actual: ${e}`);
}
function Xe() {
  var r =
    !navigator.userAgentData &&
    /Safari\//.test(navigator.userAgent) &&
    !/Chrom(e|ium)\//.test(navigator.userAgent);
  if (!r || !indexedDB.databases) return Promise.resolve();
  var e;
  return new Promise(function (t) {
    var n = function () {
      return indexedDB.databases().finally(t);
    };
    ((e = setInterval(n, 100)), n());
  }).finally(function () {
    return clearInterval(e);
  });
}
var Te = Xe;
function S(r) {
  return new Promise((e, t) => {
    ((r.oncomplete = r.onsuccess = () => e(r.result)), (r.onabort = r.onerror = () => t(r.error)));
  });
}
function Re(r, e, t) {
  let n = indexedDB.open(r, t);
  return ((n.onupgradeneeded = () => n.result.createObjectStore(e)), S(n));
}
function Ye(r, e) {
  let t = Te()
    .then(() => Re(r, e))
    .then((n) => (n.objectStoreNames.contains(e) ? n : (n.close(), Re(r, e, n.version + 1))));
  return (n, s) => t.then((a) => s(a.transaction(e, n).objectStore(e)));
}
var K;
function b() {
  return (K || (K = Ye("keyval-store", "keyval")), K);
}
function Ae(r, e = b()) {
  return e("readonly", (t) => S(t.get(r)));
}
function Ee(r, e, t = b()) {
  return t("readwrite", (n) => (n.put(e, r), S(n.transaction)));
}
function Gt(r, e = b()) {
  return e("readwrite", (t) => (r.forEach((n) => t.put(n[1], n[0])), S(t.transaction)));
}
function Xt(r, e = b()) {
  return e("readonly", (t) => Promise.all(r.map((n) => S(t.get(n)))));
}
function M(r, e = b()) {
  return e("readwrite", (t) => (t.delete(r), S(t.transaction)));
}
function Yt(r, e = b()) {
  return e("readwrite", (t) => (r.forEach((n) => t.delete(n)), S(t.transaction)));
}
function Ze(r, e) {
  return r(
    "readonly",
    (t) => (
      (t.openCursor().onsuccess = function () {
        this.result && (e(this.result), this.result.continue());
      }),
      S(t.transaction)
    )
  );
}
function Zt(r = b()) {
  let e = [];
  return Ze(r, (t) => e.push(t.key)).then(() => e);
}
var R = class r {
  scopes;
  constructor(e) {
    if (((this.scopes = BigInt(0)), typeof e == "string")) {
      this.scopes = BigInt(e).valueOf();
      return;
    }
    if (typeof e == "bigint") {
      this.scopes = e;
      return;
    }
    if (typeof e == "number") {
      this.addScope(e);
      return;
    }
    if (Array.isArray(e)) {
      this.addScope(...e);
      return;
    }
  }
  addScope(...e) {
    for (let t of e) {
      if (t < 0) throw new Error("Scope must be 0 or bigger.");
      this.scopes = this.scopes | BigInt(1 << t).valueOf();
    }
  }
  hasScope(e) {
    if (e < 0) throw new Error("Scope must be 0 or bigger.");
    return !!((this.scopes >> BigInt(e)) & BigInt(1));
  }
  intersection(e) {
    return new r(this.scopes & e.valueOf());
  }
  matches(e) {
    return this.intersection(e).valueOf() === this.scopes;
  }
  valueOf() {
    return this.scopes;
  }
  toString() {
    return this.scopes.toString();
  }
};
var J = new R([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
  Ie = new R([4, 5, 6, 7, 10, 11]);
var l = T("accessTokenRefresher"),
  tt = 401,
  Q = "access_token",
  G = "access_token.edit",
  rt = 90 * 1e3,
  nt = 30 * 1e3,
  xe = 2 * 1e3,
  W = class {
    constructor(e, t) {
      this.options = t;
      this.url = `${e}/auth/web/access-token`;
      try {
        typeof window < "u" && window.top?.location.href;
      } catch {
        this.isEmbeddedCrossOrigin = !0;
      }
    }
    options;
    _accessToken;
    _accessTokenExpiry;
    _accessTokenStorageKey;
    timer = null;
    url;
    accessTokenWaitList = [];
    retryAttempt = 0;
    MaxRetryDelay = 60 * 1e3;
    BaseRetryDelay = 1e3;
    isUnauthorized = !1;
    hasStarted = !1;
    isEmbeddedCrossOrigin = !1;
    async start() {
      (O(!this.hasStarted, "Attempt to start AccessTokenRefresher more than once."),
        (this.hasStarted = !0));
      let e = await this.loadAccessTokenFromStorage();
      if (e) {
        let { accessToken: t, expiry: n, storageKey: s } = e;
        (this.setToken(t, n, s), this.scheduleRefreshAt(X(n)));
      } else await this.refreshAccessTokenAndScheduleNextRefresh();
    }
    registerForNewToken(e) {
      (l.debug("Adding waiter for new token"), this.accessTokenWaitList.push(e));
    }
    flushWaitList() {
      let e = this.accessTokenWaitList;
      ((this.accessTokenWaitList = []),
        l.debug("Flushing waitlist, contains", e.length, "waiters"));
      for (let t of e) t(this._accessToken);
    }
    isUnauthorizedResponse(e) {
      return e.status === tt;
    }
    handleServerError = (e) => {
      if (!this.isUnauthorizedResponse(e))
        throw (
          l.debug("Error response status:", e.status, "with text:", e.statusText),
          this.retryWithBackoff(),
          new v({ status: e.status, message: e.statusText })
        );
    };
    async refreshAccessTokenAndScheduleNextRefresh() {
      (l.debug("Renewing access token"), this.hasStarted || (this.hasStarted = !0));
      let e;
      try {
        e = await fetch(this.url, { credentials: "include" });
      } catch {
        (l.error("Connection error, retrying\u2026"), this.retryWithBackoff());
        return;
      }
      if (!e.ok) {
        (this.handleServerError(e),
          this.isUnauthorizedResponse(e) &&
            (l.debug("Turning on unauthorized mode"),
            (this.isUnauthorized = !0),
            this.flushWaitList(),
            this.options?.onUnauthorized?.(this)));
        return;
      }
      (l.debug("Received access token"), (this.retryAttempt = 0));
      let t = await e.json(),
        { accessToken: n } = t,
        s = fe(n),
        a = new R(s.scopes);
      if (!this.isEmbeddedCrossOrigin && !this.isValidAccessToken(s.scope, a)) {
        (await this.discardAccessToken(),
          l.reportError(
            `Received access token has insufficient scopes. Wanted: ${J.valueOf()}, got: ${a.valueOf()}`,
            void 0,
            void 0,
            !0
          ),
          this.options?.onInsufficientScopes?.(this),
          this.retryWithBackoff());
        return;
      }
      let o;
      if (
        (t.expiresInSeconds
          ? ((o = Date.now() + t.expiresInSeconds * 1e3),
            l.debug("Received expiry seconds:", t.expiresInSeconds))
          : (o = t.expiresAt),
        !n)
      ) {
        (l.error("Unable to authenticate client"), this.retryWithBackoff());
        return;
      }
      let c = new Date(o);
      if (Number.isNaN(c.getTime())) {
        (l.error("Access Token expiry date is invalid"), this.retryWithBackoff());
        return;
      }
      (this.setToken(n, c, this.isEmbeddedCrossOrigin ? G : Q), this.scheduleRefreshAt(X(c)));
    }
    setToken(e, t, n) {
      (l.debug("Setting acccess token"),
        (this._accessToken = e),
        (this._accessTokenExpiry = t),
        (this._accessTokenStorageKey = n),
        this.flushWaitList(),
        this.saveAccessTokenInStorage(n, { accessToken: e, expiresAt: t.toISOString() }));
    }
    clearRefreshTimer() {
      this.timer &&
        (l.debug("Clearing refresh timer"), clearTimeout(this.timer), (this.timer = null));
    }
    retryWithBackoff() {
      (this.clearRefreshTimer(), (this.retryAttempt += 1));
      let e = Math.floor(
        Math.random() * Math.min(this.MaxRetryDelay, this.BaseRetryDelay * 2 ** this.retryAttempt)
      );
      (l.debug("Retrying after", e), this.scheduleRefreshAfter(e));
    }
    scheduleRefreshAfter(e) {
      (this.clearRefreshTimer(),
        (this.timer = setTimeout(() => this.refreshAccessTokenAndScheduleNextRefresh(), e)));
    }
    scheduleRefreshAt(e) {
      let t = e.getTime() - new Date().getTime();
      if (t <= 0) throw new Error("Refresh time is not valid");
      this.scheduleRefreshAfter(t);
    }
    async saveAccessTokenInStorage(e, t) {
      try {
        await Ee(e, t);
      } catch (n) {
        l.debug("Error in storing access token", n);
      }
    }
    async loadAccessTokenFromStorage() {
      let e = this.isEmbeddedCrossOrigin ? G : Q;
      try {
        let t = await st(e);
        if (!t) return null;
        let { accessToken: n, expiresAt: s } = t,
          a = new Date(s);
        return new Date() >= X(a) ? null : { accessToken: n, expiry: a, storageKey: e };
      } catch (t) {
        return (l.reportError(t, { storageKey: e }), null);
      }
    }
    hasAccessTokenExpired() {
      return this._accessTokenExpiry
        ? new Date().getTime() >= this._accessTokenExpiry.getTime() - nt
        : !1;
    }
    isAccessTokenValid() {
      return this._accessToken && !this.isUnauthorized && !this.hasAccessTokenExpired();
    }
    async getAccessToken() {
      if (this.isUnauthorized) return Promise.resolve(void 0);
      if (this.isAccessTokenValid()) return Promise.resolve(this._accessToken);
      let e = new Promise((t) => this.registerForNewToken(t));
      return (
        this.hasAccessTokenExpired() && (await this.discardAccessToken(!0)),
        this.hasStarted || (await this.start()),
        e
      );
    }
    async getAuthorizationHeaderValue() {
      let e = await this.getAccessToken();
      if (e) return `Bearer ${e}`;
    }
    async stopAuthentication() {
      try {
        (await this.discardAccessToken(!1), (this.hasStarted = !1), await M(Q), await M(G));
      } catch {}
    }
    async discardAccessToken(e = !1) {
      try {
        (l.debug("Discarding access token with renewal", e),
          this.clearRefreshTimer(),
          (this._accessToken = void 0),
          (this._accessTokenExpiry = void 0),
          this._accessTokenStorageKey && (await M(this._accessTokenStorageKey)),
          (this._accessTokenStorageKey = void 0),
          e && !this.isUnauthorized && this.scheduleRefreshAfter(0));
      } catch {}
    }
    async withAuthorizationHeader(e) {
      let t = await this.getAuthorizationHeaderValue();
      return (t && ((e.headers = new Headers(e.headers)), e.headers.set("authorization", t)), e);
    }
    isValidAccessToken(e, t) {
      return e === "public-api" ? Ie.matches(t) : J.matches(t);
    }
  };
function X(r) {
  return new Date(r.getTime() - rt);
}
function st(r) {
  return new Promise((e, t) => {
    let n = setTimeout(() => {
      t(new Error(`Timed out reading access token from IndexedDB after ${xe}ms`));
    }, xe);
    Ae(r)
      .then(e, t)
      .finally(() => clearTimeout(n));
  });
}
var Y = "client",
  Z = class {
    client;
    constructor() {
      ((this.client = it() ?? he()),
        "sessionStorage" in globalThis && sessionStorage.setItem(Y, this.client.toString()));
    }
    seqKey(e, t) {
      let n = `${this.client}:seq:${e}`;
      return t === ue ? n : `${n}:${t}`;
    }
    getSeqWatermark(e, t) {
      if (!("sessionStorage" in globalThis)) return;
      let n = sessionStorage.getItem(this.seqKey(e, t));
      if (!n) return;
      let s = parseInt(n, 10);
      if ($(s)) return s;
    }
    setSeqWatermark(e, t, n) {
      if (!("sessionStorage" in globalThis)) return;
      O($(n), () => `invalid seq: ${n}`);
      let s = this.getSeqWatermark(e, t);
      (s !== void 0 && n <= s) || sessionStorage.setItem(this.seqKey(e, t), n.toString());
    }
    destroy() {
      if (!("sessionStorage" in globalThis)) return;
      let e = `${this.client}:seq:`;
      for (let t = sessionStorage.length - 1; t >= 0; t--) {
        let n = sessionStorage.key(t);
        n?.startsWith(e) && sessionStorage.removeItem(n);
      }
      sessionStorage.removeItem(Y);
    }
  };
function it() {
  if (!("sessionStorage" in globalThis)) return;
  let r = sessionStorage.getItem(Y);
  if (!r) return;
  let e = parseInt(r, 10);
  if (le(e) && e.toString() === r) return e;
}
var I = null;
function dr() {
  return (I || (I = new Z()), I);
}
function _e() {
  (I?.destroy(), (I = null));
}
var g = se(We(), 1),
  Ct = oe.isProduction ? "gmqktfjv" : "iic8t2tp",
  ee = !1,
  mr = (r, e) => {
    (ee
      ? (0, g.update)(Le(r))
      : ((0, g.Intercom)(Le(r)),
        (0, g.onShow)(() => {
          e.isIntercomMessengerVisible = !0;
        }),
        (0, g.onHide)(() => {
          e.isIntercomMessengerVisible = !1;
        })),
      (0, g.show)());
  };
function Le(r) {
  return {
    app_id: Ct,
    hide_default_launcher: !0,
    user_id: r.userId,
    user_hash: r.userIntercomHash,
    email: r.userEmail,
  };
}
function Ve() {
  ee && ((0, g.shutdown)(), (ee = !1));
}
function te(r) {
  Promise.all([r.stopAuthentication(), ge()])
    .catch(ie)
    .finally(() => {
      (_e(), Ve(), (window.location.href = `${w().api}/auth/v4/signout`));
    });
}
var j = new W(w().api, { onInsufficientScopes: (r) => te(r), onUnauthorized: (r) => te(r) });
function je(r) {
  return new v({
    isTemporary: !0,
    message: "Connection error",
    code: -1e3,
    status: 0,
    skipSentry: !0,
    cause: r,
  });
}
var m = Object.freeze({ "X-Requested-By": "Framer" });
var Dt = T("fetcher"),
  Mt = (r, e) => {
    if (!e) return r;
    let t = new URL(r);
    for (let n in e) {
      let s = e[n];
      if (s !== void 0) {
        if (ae(s)) {
          for (let a of s) a && t.searchParams.append(`${n}[]`, a.toString());
          continue;
        }
        t.searchParams.append(n, s.toString());
      }
    }
    return t.href;
  },
  Be = (r) => {
    throw je(r);
  };
function Wt(r) {
  return r instanceof DOMException && r.name === "AbortError";
}
async function Fe(r, e) {
  if (r.ok) return { status: "success", response: r };
  let t = r.statusText,
    n,
    s,
    a;
  try {
    let { error: o, ref: c, data: u } = await r.json();
    (typeof o?.message == "string" && (t = o.message),
      typeof o?.code == "number" && (n = o.code),
      typeof c == "string" && (s = c),
      typeof u == "object" && u && (a = u));
  } catch {}
  return r.status === 401 &&
    (await j.discardAccessToken(!0), t.toLowerCase().includes("jwt expired") && e < 1)
    ? (Dt.reportError(
        new Error(
          "Sent an expired JWT to the backend. This shouldn't happen if AccessTokenRefresher works correctly."
        )
      ),
      await j.getAccessToken(),
      { status: "retry" })
    : { status: "error", error: new v({ data: a, message: t, status: r.status, ref: s, code: n }) };
}
var B = class {
  constructor(e, t) {
    this.baseURL = e;
    this.getDefaultHeaders = t;
  }
  baseURL;
  getDefaultHeaders;
  activeRequestCount = 0;
  waitListeners = new Set();
  readonly = !1;
  withDefaultHeaders(e) {
    let t = this.getDefaultHeaders?.();
    if (!t || Object.keys(t).length === 0) return e;
    let n = new Headers(e.headers);
    for (let [s, a] of Object.entries(t)) n.set(s, a);
    return { ...e, headers: n };
  }
  debugSetReadOnly(e = !0) {
    this.readonly = e;
  }
  doWithListeners(e) {
    this.activeRequestCount++;
    try {
      return e().finally(() => {
        if ((this.activeRequestCount--, this.activeRequestCount === 0)) {
          let t = Array.from(this.waitListeners);
          this.waitListeners.clear();
          for (let n of t)
            try {
              n();
            } catch {}
        }
      });
    } catch (t) {
      this.activeRequestCount--;
      let n = t instanceof Error ? t.message : String(t);
      throw (de("application_error", { message: n, area: "fetch" }), t);
    }
  }
  fetch(e, t, n = 0) {
    return this.doWithListeners(async () => {
      let s = await this.accessTokenRefresher.withAuthorizationHeader(
          this.withDefaultHeaders(t || {})
        ),
        a = await fetch(e, s).catch((c) => {
          throw Wt(c) ? c : Be(c);
        }),
        o = await Fe(a, n);
      if (o.status === "error") throw o.error;
      return o.status === "retry" ? this.fetch(e, t, n + 1) : o.response;
    });
  }
  fetchStream(e, t = {}, n = 0) {
    return this.doWithListeners(async () => {
      let { headers: s, onopen: a, onerror: o, ...c } = t,
        u = await this.accessTokenRefresher.getAuthorizationHeaderValue(),
        f = {
          ...c,
          headers: u ? { ...s, authorization: u } : s,
          onopen: async (h) => {
            let p = await Fe(h, n);
            if (p.status === "error") {
              o?.(p.error);
              return;
            }
            if (p.status === "retry") return this.fetchStream(e, t, n + 1);
            await a?.(p.response);
          },
        };
      return z(e, f).catch(Be);
    });
  }
  wait(e) {
    if (this.activeRequestCount === 0) {
      e();
      return;
    }
    this.waitListeners.add(e);
  }
  async getRaw(e, t, n) {
    return await this.fetch(Mt(`${this.baseURL}${e}`, t), {
      credentials: "include",
      redirect: "error",
      signal: n,
    });
  }
  async get(e, t, n) {
    let s = await this.getRaw(e, t, n);
    return _(s) ? s.json() : s.text();
  }
  async postRaw(e, t, n, s) {
    if (this.readonly) throw Error("apiFetcher is set to readonly");
    let o = typeof t < "u" && n ? { "Content-Type": n, ...m } : m;
    return await this.fetch(`${this.baseURL}${e}`, {
      method: "POST",
      credentials: "include",
      redirect: "error",
      headers: o,
      body: t,
      signal: s,
    });
  }
  async post(e, t, n) {
    if (this.readonly) throw Error("apiFetcher is set to readonly");
    let s = await this.postRaw(e, JSON.stringify(t), "application/json", n);
    return _(s) ? s.json() : s.text();
  }
  postStream(e, t, n) {
    if (this.readonly) throw Error("apiFetcher is set to readonly");
    let s = typeof n < "u",
      a = s ? { "Content-Type": "application/json", ...m } : m;
    return this.fetchStream(`${this.baseURL}${e}`, {
      ...t,
      method: "POST",
      credentials: "include",
      headers: a,
      body: s ? JSON.stringify(n) : null,
    });
  }
  async putRaw(e, t, n, s) {
    if (this.readonly) throw Error("apiFetcher is set to readonly");
    let o = typeof t < "u" && n ? { "Content-Type": n, ...m } : m;
    return await this.fetch(`${this.baseURL}${e}`, {
      method: "PUT",
      credentials: "include",
      headers: o,
      body: t,
      signal: s,
    });
  }
  async put(e, t, n) {
    if (this.readonly) throw Error("apiFetcher is set to readonly");
    let s = await this.putRaw(e, JSON.stringify(t), "application/json", n);
    return _(s) ? s.json() : s.text();
  }
  async patchRaw(e, t, n) {
    if (this.readonly) throw Error("apiFetcher is set to readonly");
    let a = typeof t < "u" && n ? { "Content-Type": n, ...m } : m;
    return await this.fetch(`${this.baseURL}${e}`, {
      method: "PATCH",
      credentials: "include",
      headers: a,
      body: t,
    });
  }
  async patch(e, t) {
    if (this.readonly) throw Error("apiFetcher is set to readonly");
    let n = await this.patchRaw(e, JSON.stringify(t), "application/json");
    return _(n) ? n.json() : n.text();
  }
  async deleteRaw(e, t, n) {
    if (this.readonly) throw Error("apiFetcher is set to readonly");
    let a = typeof t < "u" && n ? { "Content-Type": n, ...m } : m;
    return await this.fetch(`${this.baseURL}${e}`, {
      method: "DELETE",
      credentials: "include",
      redirect: "error",
      body: t,
      headers: a,
    });
  }
  async delete(e, t) {
    if (this.readonly) throw Error("apiFetcher is set to readonly");
    let n = await this.deleteRaw(e, JSON.stringify(t), "application/json");
    return _(n) ? n.json() : n.text();
  }
  get accessTokenRefresher() {
    return j;
  }
};
function _(r) {
  return r.headers.get("Content-Type")?.toLowerCase().startsWith("application/json") ?? !1;
}
var Kr = new B(w().api, ye);
export {
  dr as a,
  v as b,
  C as c,
  ye as d,
  Ye as e,
  Ae as f,
  Ee as g,
  Gt as h,
  Xt as i,
  M as j,
  Yt as k,
  Zt as l,
  W as m,
  Bt as n,
  mr as o,
  Ve as p,
  te as q,
  j as r,
  je as s,
  m as t,
  Wt as u,
  Kr as v,
};
//# sourceMappingURL=chunk-IYQGOT7H.mjs.map
