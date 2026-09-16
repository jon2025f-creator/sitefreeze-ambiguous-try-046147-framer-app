import { e as Se, g as Pe } from "chunk-W5XPGZCD.mjs";
import { ua as ye } from "chunk-6EDHJFQR.mjs";
import {
  Na as Ne,
  Pa as Ae,
  Qa as Fe,
  Sa as Ve,
  ei as W,
  ga as Ie,
  ha as Me,
  ia as De,
} from "chunk-XBNEUAFG.mjs";
import { m as pe, r as Le, s as Q } from "chunk-7UODUE3C.mjs";
import { e as te, h as re } from "chunk-6HKXOBGL.mjs";
import { l as ge, m as N, o as ke } from "chunk-QEUKYDWB.mjs";
import { Od as xe, g as fe } from "chunk-YUW2K2TN.mjs";
import { p as I } from "chunk-K3FIARHK.mjs";
import { Xh as K } from "chunk-X3TLBDOB.mjs";
import { c as Z } from "chunk-JGLE5AEB.mjs";
import { q as O } from "chunk-G762HQED.mjs";
import { a as Ee, i as Ue } from "chunk-Z2D6QWS4.mjs";
import { a as ee } from "chunk-GBWZWM2Q.mjs";
import { a as P } from "chunk-7BWPFUCH.mjs";
import { g as z, q as X } from "chunk-ONZSSKY2.mjs";
import { b as Re } from "chunk-LA34HORX.mjs";
import { a as it } from "chunk-SWYZG2NI.mjs";
import { b as l, c as we } from "chunk-4JY5UMT2.mjs";
import { l as D } from "chunk-6BQLHAAI.mjs";
import { c as J, h as S } from "chunk-KPMZENE5.mjs";
import { e as ot } from "chunk-WLHSDIGQ.mjs";
function ne(a) {
  let { appEnvironment: e, session: t, seq: r, count: n, reasons: o, changes: i } = a;
  return { appEnvironment: e, session: t, seq: r, changes: i, count: n, reasons: o };
}
function Oe(a, e) {
  return { ...a, next: e };
}
function _e(a) {
  return "rows" in a;
}
var oe = S("remote:sync"),
  je = [1e4, 2e4, 4e4],
  st = je.reduce((a, e) => a + e, 0),
  at = 1e4,
  He = st + at,
  dt = 672 * 60 * 60 * 1e3,
  Be = "resend",
  ct = "recovered",
  ie = class {
    constructor(e, t = crypto.randomUUID()) {
      this.storage = e;
      this.outboxId = t;
    }
    storage;
    outboxId;
    messageSeq = 0;
    unconfirmed = new Map();
    confirmedViaRetry = new Map();
    recoveryInProgress = !1;
    recoveryRetryAt;
    recoveryPreviousCutoff = Number.NEGATIVE_INFINITY;
    get entries() {
      return this.unconfirmed;
    }
    get size() {
      return this.unconfirmed.size;
    }
    canAttemptRecovery() {
      return this.canAttemptRecoveryAt(Date.now());
    }
    canAttemptRecoveryAt(e) {
      return this.recoveryInProgress
        ? !1
        : this.recoveryRetryAt === void 0
          ? !0
          : this.recoveryRetryAt > 0 && e >= this.recoveryRetryAt;
    }
    hasUnconfirmed() {
      return this.unconfirmed.size > 0;
    }
    hasUnconfirmedHierarchyChanges() {
      for (let e of this.unconfirmed.values())
        if (e.rows.some((t) => t.key === "parentid")) return !0;
      return !1;
    }
    add(e, t, r, n) {
      let o = {
        seq: ++this.messageSeq,
        rows: e,
        reasons: t,
        ts: n,
        appEnvironment: r,
        attempts: 0,
        lastAttemptAt: n,
      };
      (oe.debug("create CRDT rows message:", e.length, "inflight:", this.unconfirmed.size, o.seq),
        this.unconfirmed.set(o.seq, o));
      let i = {
          binarySchemaVersion: pe,
          documentSchemaVersion: fe,
          rows: o.rows,
          reasons: o.reasons,
          ts: o.ts,
          appEnvironment: o.appEnvironment,
        },
        s = this.storage?.write(this.outboxId, i, n);
      return ((o.deleteHandle = s?.remove), o.seq);
    }
    async flushToStorage() {
      await this.storage?.flush();
    }
    async recoverAbandonedUpdates(e, t = Date.now()) {
      if (!this.canAttemptRecoveryAt(t)) return [];
      if (!this.storage) return ((this.recoveryRetryAt = 0), []);
      this.recoveryInProgress = !0;
      try {
        let r = t - He,
          n = t - dt,
          { entries: o, latestTooRecentTimestamp: i } = await this.storage.sweepEntries(
            this.outboxId,
            n,
            r,
            this.recoveryPreviousCutoff
          );
        ((this.recoveryPreviousCutoff = r), (this.recoveryRetryAt = i === void 0 ? 0 : i + He + 1));
        let s = [];
        for (let d of o) {
          if (
            d.entry.binarySchemaVersion !== pe ||
            d.entry.documentSchemaVersion !== fe ||
            !d.entry.rows.every((c) => c.user === e)
          )
            continue;
          let h = this.adopt(d.entry, d.remove, t);
          s.push(this.take(h, t));
        }
        return s;
      } finally {
        this.recoveryInProgress = !1;
      }
    }
    adopt(e, t, r) {
      let n = {
        seq: ++this.messageSeq,
        rows: e.rows,
        reasons: [e.reasons, ct].filter(Boolean).join(" "),
        ts: e.ts,
        appEnvironment: e.appEnvironment,
        attempts: 0,
        lastAttemptAt: r,
        deleteHandle: t,
      };
      return (
        oe.info("recovering an abandoned update", { seq: n.seq, rows: e.rows.length }),
        this.unconfirmed.set(n.seq, n),
        n.seq
      );
    }
    take(e, t) {
      let r = this.unconfirmed.get(e);
      return (
        l(r, `No unconfirmed update for message seq ${e}. Pass the seq that add returned.`),
        r.attempts++,
        (r.lastAttemptAt = t),
        ve(r)
      );
    }
    takePendingRetries(e) {
      let t = [];
      for (let r of this.unconfirmed.values()) {
        let n = r.attempts > 0 ? je[r.attempts - 1] : 0;
        if (n === void 0 || e - r.lastAttemptAt < n) continue;
        (oe.info("retrying unconfirmed update", { seq: r.seq, attempts: r.attempts }),
          r.attempts++,
          (r.lastAttemptAt = e));
        let o = ve(r);
        ((o.reasons = [r.reasons, Be].filter(Boolean).join(" ")), t.push(o));
      }
      return t;
    }
    takeAllForReconnect(e) {
      let t = [];
      this.confirmedViaRetry.clear();
      for (let r of this.unconfirmed.values()) {
        ((r.attempts = 1), (r.lastAttemptAt = e));
        let n = ve(r);
        ((n.reasons = [r.reasons, Be].filter(Boolean).join(" ")), t.push(n));
      }
      return t;
    }
    confirm(e) {
      let t = this.unconfirmed.get(e);
      if (!t) {
        let r = this.confirmedViaRetry.get(e);
        return r
          ? (r.pendingConfirmations--,
            r.pendingConfirmations <= 0 && this.confirmedViaRetry.delete(e),
            { kind: "duplicate", rows: r.rows })
          : { kind: "unknown" };
      }
      return (
        t.deleteHandle?.(),
        this.unconfirmed.delete(e),
        lt(t) &&
          (oe.info("confirm arrived for a retried update", { seq: e, attempts: t.attempts }),
          this.confirmedViaRetry.set(e, { rows: t.rows, pendingConfirmations: t.attempts - 1 })),
        { kind: "confirmed", rows: t.rows }
      );
    }
  };
function lt(a) {
  return a.attempts > 1;
}
function ve({ seq: a, rows: e, reasons: t, ts: r, appEnvironment: n }) {
  return { seq: a, rows: e, reasons: t, ts: r, appEnvironment: n };
}
var x = S("remote:sync"),
  ht = 1e3,
  mt = Le + ht,
  se = class {
    constructor(e, t = mt, r) {
      this.committer = e;
      this.maxRowsPerMessage = t;
      this.outbox = new ie(r);
    }
    committer;
    maxRowsPerMessage;
    session = 0;
    treeVersion = 0;
    updatesSeen = 0;
    init = 0;
    expectingInitialUpdates = 0;
    hasError = !1;
    waitingForTree = !1;
    outbox;
    appEnvironment;
    get waitingForInitialUpdates() {
      return this.expectingInitialUpdates > this.updatesSeen;
    }
    get isLoading() {
      return this.waitingForTree || this.waitingForInitialUpdates;
    }
    get isReady() {
      return !(this.hasError || this.waitingForTree || this.waitingForInitialUpdates);
    }
    error(e, t) {
      return ((this.hasError = !0), Error(e, { cause: t }));
    }
    recordHistoricTree(e, t) {
      this.committer.recordHistoricTree(e, {
        containsLocalEdits: this.committer.hasLocalEdits() || this.outbox.hasUnconfirmed(),
        hasHierarchyChanges: t,
      });
    }
    hasHierarchyChangesAfterVersion(e) {
      return this.committer.hasHierarchyChangesAfterVersion(e)
        ? !0
        : this.outbox.hasUnconfirmedHierarchyChanges();
    }
    checkRemoteVersion(e, t, r = this.treeVersion) {
      return (
        l(Number.isFinite(e), `${t === "confirm" ? "Confirm" : "Update"} must have tree version`),
        e <= r ? (x.debug(`ignoring old ${t}:`, e, " <= ", r), "ignore") : "apply"
      );
    }
    verify(e, t) {
      let r = this.committer.getTreeForVersion(e);
      if (!r) return (x.debug("verify: unable to find tree with version", e), !0);
      if (r.containsLocalEdits)
        return (x.debug("verify: unable verify an entry with local edits"), !0);
      let n = r.tree,
        o = n.computeTreeHash();
      if (o !== t) {
        if ((x.warn("verify: failed", o, "!==", t), t === 0)) return !0;
        x.reportError("Tree verification failed", {
          localHash: o,
          serverHash: t,
          treeVersion: e,
          treeSize: n.size(),
        });
      } else x.debug("verify: passed; hash:", t);
      return o === t;
    }
    setTree(e, t, r) {
      (x.info("setTree", t),
        this.committer.reset(e, r),
        (this.treeVersion = t),
        (this.waitingForTree = !1),
        (this.hasError = !1),
        this.recordHistoricTree(t, !1));
    }
    resetSession() {
      ((this.treeVersion = 0), (this.waitingForTree = !1));
    }
    debugResetSessionAndTree(e) {
      (this.resetSession(), this.setTree(e, 0));
    }
    handleInit(e, t) {
      return (
        (this.init += 1),
        this.init === 1 && (te("wsTreeInitMessages"), re(t)),
        x.info("init", this.init, {
          treeVersion: e,
          initialUpdates: t,
          localTreeVersion: this.treeVersion,
        }),
        (this.hasError = !1),
        (this.expectingInitialUpdates = t),
        (this.updatesSeen = 0),
        this.treeVersion !== e || this.waitingForTree
          ? ((this.waitingForTree = !0), !0)
          : ((this.committer.remoteTreeVersion = e), this.recordHistoricTree(e, !1), !1)
      );
    }
    hasMessageForRemote() {
      return this.committer.hasLocalEdits();
    }
    hasOnlyEmptyChangesForRemote() {
      return this.committer.hasLocalEdits() ? this.committer.hasOnlyEmptyChangesForRemote() : !0;
    }
    onLoadedFirstData() {
      this.committer.resetLastSeqTaken();
    }
    createMessages(e) {
      let t = this.committer.takePendingRows(e);
      if (t.length <= 0) return [];
      let r = this.committer.getEditReasons();
      if (t.length <= this.maxRowsPerMessage) return [this.createMessage(t, r)];
      let n = [],
        o = 0,
        i = 0,
        s = t.at(0);
      l(s);
      for (let d = 1; d <= t.length; d++) {
        let h = t[d];
        (h && Ue(s, h)) ||
          (i > o &&
            d - o > this.maxRowsPerMessage &&
            (n.push(this.createMessage(t.slice(o, i), r)), (o = i)),
          (i = d),
          h && (s = h));
      }
      return (n.push(this.createMessage(t.slice(o), r)), n);
    }
    createMessage(e, t) {
      let r = Date.now(),
        n = this.outbox.add(e, t, this.appEnvironment, r);
      return this.outbox.take(n, r);
    }
    hasInFlightUpdates() {
      return this.outbox.hasUnconfirmed();
    }
    createUnconfirmedMessages(e = Date.now()) {
      return (l(this.isReady), this.outbox.takeAllForReconnect(e));
    }
    handleConfirmMessage(e) {
      if (this.hasError || this.waitingForTree) return;
      l(
        Number.isInteger(e.next) && e.next > 0,
        `Tree version ${e.next} is not a positive integer. The server sent a malformed confirmation.`
      );
      let t = this.outbox.confirm(e.seq);
      if (t.kind === "unknown") {
        x.warn("ignoring confirm for untracked seq:", e.seq);
        return;
      }
      t.kind === "duplicate" && x.info("duplicate confirm", { seq: e.seq, next: e.next });
      let r = t.rows.some((n) => n.key === "parentid");
      if (this.checkRemoteVersion(e.next, "confirm") === "apply")
        return (
          (this.treeVersion = e.next),
          this.committer.handleRemoteConfirm(e.next, {
            containsLocalEdits: this.committer.hasLocalEdits() || this.outbox.hasUnconfirmed(),
            hasHierarchyChanges: r,
          }),
          t.rows
        );
    }
    handleRemotePatches(e, t, r, n = !1) {
      if (
        !(this.hasError || this.waitingForTree) &&
        !(!n && this.checkRemoteVersion(t, "update") !== "apply")
      )
        return (
          (this.treeVersion = t),
          this.committer.handleRemotePatches(e, t, {
            containsLocalEdits: this.committer.hasLocalEdits() || this.outbox.hasUnconfirmed(),
            hasHierarchyChanges: r,
          })
        );
    }
    loadedAllScopes() {
      this.committer.loadedAllScopes({
        containsLocalEdits: this.committer.hasLocalEdits() || this.outbox.hasUnconfirmed(),
        hasHierarchyChanges: !1,
      });
    }
    loadOneScope(e, t) {
      return this.committer.loadOneScope(e, t);
    }
  };
var _ = S("remote:sync:crdt-update-storage"),
  ut = "crdt-update",
  ft = 1e3,
  be = class {
    constructor(e) {
      this.projectId = e;
    }
    projectId;
    directory;
    getProjectDirectory() {
      return ((this.directory ??= this.openProjectDirectory()), this.directory);
    }
    async openProjectDirectory() {
      return (
        await (await navigator.storage.getDirectory()).getDirectoryHandle(ut, { create: !0 })
      ).getDirectoryHandle(this.projectId, { create: !0 });
    }
    async keys() {
      let e = [],
        t = await this.getProjectDirectory();
      for await (let r of t.keys()) e.push(r);
      return e;
    }
    async get(e) {
      return (await (await (await this.getProjectDirectory()).getFileHandle(e)).getFile()).text();
    }
    async write(e, t) {
      let o = await (
        await (await this.getProjectDirectory()).getFileHandle(e, { create: !0 })
      ).createWritable();
      (await o.write(t), await o.close());
    }
    async remove(e) {
      await (await this.getProjectDirectory()).removeEntry(e);
    }
  },
  Te = class {
    constructor(e, t = ft) {
      this.backend = e;
      this.writeDelayMs = t;
    }
    backend;
    writeDelayMs;
    counter = 0;
    timer;
    scheduled = new Map();
    write(e, t, r) {
      let n = St(r, e, this.counter++),
        o = Tt(t);
      return (
        this.scheduled.set(n, o),
        clearTimeout(this.timer),
        (this.timer = setTimeout(this.onWriteDelayElapsed, this.writeDelayMs)),
        { remove: () => this.removeEntry(n, o) }
      );
    }
    onWriteDelayElapsed = () => {
      this.flush();
    };
    async flush() {
      (clearTimeout(this.timer), (this.timer = void 0));
      let e = [...this.scheduled];
      (this.scheduled.clear(), await Promise.all(e.map(([t, r]) => this.writeFile(t, r))));
    }
    async writeFile(e, t) {
      try {
        await this.backend.write(e, JSON.stringify(t.entry));
      } catch (r) {
        _.warn("could not persist pending entry:", e, r);
      }
      t.finish();
    }
    async removeEntry(e, t) {
      if (this.scheduled.delete(e)) {
        t.finish();
        return;
      }
      (await t.finished, await this.removeFile(e));
    }
    async sweepEntries(e, t, r, n = Number.NEGATIVE_INFINITY) {
      let o = [],
        i = await this.keys(),
        s = [],
        d,
        h = i.filter((c) => {
          let m = vt(c);
          if (!m) return (s.push(c), _.warn("unrecognised pending entry:", c), !1);
          let [f, p] = m;
          return f < t
            ? (s.push(c), !1)
            : p === e || f < n
              ? !1
              : f >= r
                ? ((d = Math.max(d ?? 0, f)), !1)
                : !0;
        });
      for (let c of h) {
        let m = await this.readFile(c);
        if (m === void 0) continue;
        let f = yt(m);
        if ("error" in f) {
          (s.push(c), _.warn("unreadable pending entry:", c, f.error));
          continue;
        }
        o.push({ entry: f.entry, remove: () => this.removeFile(c) });
      }
      return (await this.evict(s), { entries: o, latestTooRecentTimestamp: d });
    }
    async evict(e) {
      for (let t of e) await this.removeFile(t);
    }
    async keys() {
      try {
        return await this.backend.keys();
      } catch (e) {
        return (_.warn("could not scan pending entries:", e), []);
      }
    }
    async readFile(e) {
      try {
        return await this.backend.get(e);
      } catch (t) {
        _.warn("unreadable pending entry:", e, t);
      }
    }
    async removeFile(e) {
      try {
        await this.backend.remove(e);
      } catch (t) {
        if (t instanceof DOMException && t.name === "NotFoundError") {
          _.debug("pending entry already deleted:", e);
          return;
        }
        _.warn("could not delete pending entry:", e, t);
      }
    }
  },
  pt = I.enum({ vekter: "vekter", on_page: "on_page", api: "api" }),
  gt = I.looseObject({
    binarySchemaVersion: I.number(),
    documentSchemaVersion: I.number(),
    rows: I.custom(Array.isArray),
    ts: I.number(),
    appEnvironment: pt.optional(),
    reasons: I.string().optional(),
  });
function yt(a) {
  let e;
  try {
    e = JSON.parse(a);
  } catch (r) {
    return { error: r instanceof Error ? r.message : String(r) };
  }
  let t = gt.safeParse(e);
  return t.success ? { entry: t.data } : { error: I.prettifyError(t.error) };
}
function St(a, e, t) {
  return `${a}--${e}--${t}`;
}
function vt(a) {
  let e = a.split("--");
  if (e.length !== 3) return;
  let t = Number(e[0]);
  if (!Number.isSafeInteger(t) || t < 0) return;
  let r = e[1];
  if (r === void 0) return;
  let n = Number(e[2]);
  if (!(!Number.isSafeInteger(n) || n < 0)) return [t, r, n];
}
function bt() {
  return !(
    typeof navigator > "u" ||
    typeof navigator.storage > "u" ||
    typeof navigator.storage.getDirectory > "u" ||
    !("FileSystemFileHandle" in globalThis) ||
    typeof FileSystemFileHandle.prototype.createWritable > "u"
  );
}
function Tt(a) {
  let e = () => {},
    t = new Promise((r) => {
      e = r;
    });
  return { entry: a, finished: t, finish: e };
}
function ze(a) {
  if (!X.isOn("persistCrdtUpdates") || !bt()) return;
  let e = new be(a);
  return new Te(e);
}
var H = class {
  rowArrays = [];
  rowCount = 0;
  get length() {
    return this.rowCount;
  }
  add(e) {
    e.length !== 0 && (this.rowArrays.push(e), (this.rowCount += e.length));
  }
  toArray() {
    return Array.from(this);
  }
  some(e) {
    for (let t of this.rowArrays) for (let r of t) if (e(r)) return !0;
    return !1;
  }
  *[Symbol.iterator]() {
    for (let e of this.rowArrays) yield* e;
  }
};
var Ct = { children: !0, contentHash: !0, parentid: !0, $keep: !0 };
function wt(a, e) {
  if (a !== "cached") return e;
}
function We(a) {
  if (a === void 0) return;
  let e = JSON.stringify(a, wt);
  if (e !== void 0) return JSON.parse(e);
}
function Rt(a, e) {
  return P(a, e) ? !1 : a === void 0 || e === void 0 ? !0 : !P(We(a), We(e));
}
function qe(a, e, t) {
  let r = a.getHierarchy(),
    n = e.getHierarchy(),
    o = new Set(),
    i = !1;
  function s(m, f) {
    if ((o.add(m), (f += "." + m), !n.has(m))) ((i = !0), t.push("-node: " + f));
    else {
      let p = [],
        b = r.getChildrenIds(m),
        T = n.getChildrenIds(m);
      P(b, T) || p.push(` .children: [${b.join(",")}] != [${T.join(",")}]`);
      let w = a.getLatest(m),
        me = e.getLatest(m),
        F = new Set();
      for (let R of w?.keys() ?? []) F.add(R);
      for (let R of me?.keys() ?? []) F.add(R);
      for (let R of F) {
        if (R in Ct) continue;
        let u = a.getObjectKey(m, R),
          g = e.getObjectKey(m, R);
        Rt(u, g) && p.push(` .${R}: ${JSON.stringify(u)} != ${JSON.stringify(g)}`);
      }
      if (p.length > 0) {
        ((i = !0), t.push("!node: " + f));
        for (let R of p) t.push(R);
      }
    }
    for (let p of r.getChildrenIds(m)) s(p, f);
  }
  function d(m, f) {
    ((f += "." + m), o.has(m) || ((i = !0), t.push("+node: " + f)));
    for (let p of n.getChildrenIds(m)) d(p, f);
  }
  let h = r.getRootId();
  h && s(h, "");
  let c = n.getRootId();
  return (c && d(c, ""), i);
}
var A = S("remote:connection"),
  v = S("remote:verify"),
  Et = /Version-(\d+)/u,
  Ut = /\d+\.crdt.*/u,
  xt = 5,
  $e = class {
    constructor(e, t, r, n, o, i, s, d = ze(n)) {
      this.componentLoader = t;
      this.userId = r;
      this.projectId = n;
      this.callbacks = o;
      this.localCache = i;
      (l(e instanceof Ve, "tree updater must be a CrdtTreeCommitter"),
        (this.treeSync = new se(e, void 0, d)),
        (this.treeSync.appEnvironment = s),
        (this.treeSync.waitingForTree = !0),
        !D.benchmarkSkipTreeVerify &&
          X.isOn("verifyTreeOnCommit") &&
          (e.onCommitVerifyError = this.handleCommitVerifyError.bind(this)),
        Object.defineProperty(window, "store", { configurable: !0, get: () => this.store }));
    }
    componentLoader;
    userId;
    projectId;
    callbacks;
    localCache;
    treeSync;
    remoteUpdates = [];
    ignoreTreeVerifies = !1;
    ignoreTreeVerifyVersion = 0;
    shouldCrashFromDebug = !1;
    pendingTreeVerify;
    documentHidden = !1;
    get verifyIsBlockedByLoader() {
      return !!(this.loader?.activelyLoadingScope || this.treeSync.committer.isPartialLoading);
    }
    loader;
    documentSize = 0;
    loaderPromise;
    get unconfirmedCrdtUpdates() {
      return this.treeSync.outbox.entries;
    }
    recorder;
    get treeVersion() {
      return this.treeSync.treeVersion;
    }
    get isReady() {
      return this.treeSync.isReady;
    }
    get waitingForTree() {
      return this.treeSync.waitingForTree;
    }
    get store() {
      return this.treeSync.committer.store;
    }
    get isLoading() {
      return this.treeSync.isLoading;
    }
    get localUpdatesInFlight() {
      return [];
    }
    get localUpdatesAtInit() {
      return [];
    }
    get hasError() {
      return this.treeSync.hasError;
    }
    get init() {
      return this.treeSync.init;
    }
    get session() {
      return this.treeSync.session;
    }
    setTree(e, t, r) {
      (this.treeSync.setTree(e, t, r), this.reapplyUnconfirmedRows());
    }
    reapplyUnconfirmedRows() {
      let e = new H();
      for (let t of this.treeSync.outbox.entries.values()) e.add(t.rows);
      this.applyCollectedRows(e, this.treeSync.treeVersion);
    }
    get hasUpdatesToProcess() {
      return !this.waitingForTree && this.remoteUpdates.length > 0;
    }
    resetSession() {
      ((this.pendingTreeVerify = void 0), this.treeSync.resetSession());
    }
    setDocumentHidden(e) {
      let t = this.documentHidden;
      ((this.documentHidden = e),
        t && !e && this.maybeEvaluatePendingTreeVerify(),
        e && this.treeSync.outbox.flushToStorage());
    }
    maybeEvaluatePendingTreeVerify() {
      let e = this.pendingTreeVerify;
      e !== void 0 &&
        (this.documentHidden ||
          this.treeSync.hasError ||
          (this.treeSync.isReady &&
            (this.remoteUpdates.length > 0 ||
              this.verifyIsBlockedByLoader ||
              this.treeSync.treeVersion < e.version ||
              ((this.pendingTreeVerify = void 0),
              this.handleTreeVerify(e.url, e.version, e.hash)))));
    }
    debugResetSessionAndTree(e) {
      this.treeSync.debugResetSessionAndTree(e);
    }
    debugCrash() {
      this.shouldCrashFromDebug = !0;
    }
    canProcessChanges() {
      if (!this.treeSync.isReady || this.shouldCrashFromDebug) {
        if (this.treeSync.hasOnlyEmptyChangesForRemote() || this.treeSync.waitingForTree) return !1;
        let e = "is not ready";
        throw (
          this.treeSync.hasError
            ? (e = "had an error")
            : this.treeSync.waitingForTree
              ? (e = "is waiting for tree data")
              : this.treeSync.waitingForInitialUpdates
                ? (e = "is waiting for initial updates")
                : this.shouldCrashFromDebug &&
                  ((this.shouldCrashFromDebug = !1), (e = "is doing a deliberate crash test")),
          this.treeSync.error("cannot create local updates when the document " + e)
        );
      }
      return !0;
    }
    processViewOnly() {
      this.store.seq <= 0 ||
        (this.treeSync.onLoadedFirstData(),
        A.warn("cannot create local updates when the user is a viewer"));
    }
    handleRows(e, t) {
      this.remoteUpdates.push(t);
    }
    handleConfirmRows(e) {
      this.remoteUpdates.push(e);
    }
    handleInit(e, t) {
      return (
        (this.remoteUpdates.length = 0),
        (this.pendingTreeVerify = void 0),
        { needsDownload: this.treeSync.handleInit(e, t) }
      );
    }
    handleTreeUpdate() {
      throw new Error("Json tree updates cannot be handled by Crdt data handler");
    }
    handleTreeVerify(e, t, r) {
      if (!this.treeSync.isReady || this.ignoreTreeVerifies || this.ignoreTreeVerifyVersion === t)
        return;
      if (this.documentHidden) {
        (v.debug("remote tree verify deferred while document hidden", {
          version: t,
          clientVersion: this.treeSync.treeVersion,
          queuedUpdates: this.remoteUpdates.length,
        }),
          (this.pendingTreeVerify = { url: e, version: t, hash: r }));
        return;
      }
      if (this.verifyIsBlockedByLoader) {
        (v.debug("remote tree verify deferred while loader is integrating scopes", {
          version: t,
          clientVersion: this.treeSync.treeVersion,
          queuedUpdates: this.remoteUpdates.length,
          activelyLoadingScope: this.loader?.activelyLoadingScope ?? !1,
          isPartialLoading: this.treeSync.committer.isPartialLoading,
        }),
          (this.pendingTreeVerify = { url: e, version: t, hash: r }));
        return;
      }
      if (this.treeSync.hasHierarchyChangesAfterVersion(t)) {
        (v.debug("remote tree verify skipped due to later hierarchy changes", {
          version: t,
          hash: r,
        }),
          this.verifyStoreTreeWithCanvasTree(r));
        return;
      }
      let o = this.treeSync.committer.branches.getStore(Ee).getHierarchy().computeTreeHash();
      if (o !== r) {
        (v.error("remote tree verify failed", { version: t, hash: r, localHash: o }),
          this.localCache?.abortAndClearCache(),
          this.verifyLocalTreeWithServer(e, t));
        let d = new Error("Local document out of sync with document on server.");
        ((this.remoteUpdates.length = 0), (this.treeSync.hasError = !0), this.callbacks.error(d));
        return;
      }
      if (!this.verifyStoreTreeWithCanvasTree(r)) return;
      v.debug("tree verify passed", { version: t, hash: r });
      let i = ee(),
        s = z.isDevelopment || z.isLocal;
      (i || s) && this.verifyLocalTreeWithServer(e, t);
    }
    verifyStoreTreeWithCanvasTree(e) {
      let t = this.treeSync.committer.verifyTree();
      if (!t) return !0;
      let r = {
        version: this.treeSync.treeVersion,
        hash: e,
        queuedUpdates: this.remoteUpdates.length,
        activelyLoadingScope: this.loader?.activelyLoadingScope ?? !1,
        isPartialLoading: this.treeSync.committer.isPartialLoading,
        documentHidden: this.documentHidden,
        hadPendingTreeVerify: this.pendingTreeVerify !== void 0,
        treeSize: this.treeSync.committer.tree.size(),
        detail: t.message,
      };
      return (v.error("local tree verify failed", r), this.crashFromTreeVerifyFailure(t, r), !1);
    }
    crashFromTreeVerifyFailure(e, t) {
      (v.reportError(e, t),
        (this.remoteUpdates.length = 0),
        (this.treeSync.hasError = !0),
        this.callbacks.error(new Error(`Tree out of sync with store. ${e.message}`)));
    }
    handleCommitVerifyError(e, t) {
      let r = {
        version: this.treeSync.treeVersion,
        queuedUpdates: this.remoteUpdates.length,
        isPartialLoading: this.treeSync.committer.isPartialLoading,
        documentHidden: this.documentHidden,
        treeSize: this.treeSync.committer.tree.size(),
        ...t,
      };
      (v.error("commit tree verify failed", r), this.crashFromTreeVerifyFailure(e, r));
    }
    applyCollectedRows(e, t) {
      if (e.length === 0) return;
      let r = this.treeSync.committer,
        n = Ae(r.branches, e, r.effectiveViewBranchId);
      Fe(r.effectiveViewStore, r.tree, n);
      let o = e.some((s) => s.key === "parentid"),
        i = this.treeSync.handleRemotePatches(n, t, o, !0);
      (i && this.loader?.addNodeChanges(i),
        this.recorder && this.recorder({ source: "remote", rows: e.toArray() }));
    }
    processRemoteUpdates() {
      if (
        (A.debug(
          "processRemoteUpdates: starting - waitingForTree:",
          this.treeSync.waitingForTree,
          "waitingForInitialUpdates:",
          this.treeSync.waitingForInitialUpdates,
          "hasError:",
          this.treeSync.hasError,
          "isReady:",
          this.isReady,
          "remoteUpdates.length:",
          this.remoteUpdates.length
        ),
        this.treeSync.waitingForTree)
      ) {
        A.debug("processRemoteUpdates: exiting early - waitingForTree=true");
        return;
      }
      if (this.loader?.activelyLoadingScope) {
        A.debug("processRemoteUpdates: exiting early - activelyLoadingScope=true");
        return;
      }
      let e;
      try {
        if (
          (l(
            !this.treeSync.committer.tree.hasUncommittedChanges(),
            "tree must not have uncommitted changes"
          ),
          this.shouldCrashFromDebug)
        )
          throw ((this.shouldCrashFromDebug = !1), Error("RemoteDocument CrashTest"));
        let t = new H(),
          r = this.treeSync.treeVersion;
        for (; this.remoteUpdates.length > 0;) {
          let n = this.remoteUpdates.shift();
          if (!n) break;
          if (((e = n), !_e(n))) {
            (this.applyCollectedRows(t, r), (t = new H()), (r = this.treeSync.treeVersion));
            let o = this.treeSync.handleConfirmMessage(n);
            if (
              (this.localCache && o && this.localCache.addRows(o, this.treeSync.treeVersion),
              (r = this.treeSync.treeVersion),
              this.treeSync.waitingForTree)
            )
              break;
            continue;
          }
          if (
            (l(typeof n.next == "number", "Update must have tree version"),
            this.treeSync.checkRemoteVersion(n.next, "update", r) === "ignore")
          ) {
            this.treeSync.updatesSeen += 1;
            continue;
          }
          (Q.verifyBatches(n.rows),
            (r = n.next),
            t.add(n.rows),
            this.localCache?.addRows(n.rows, n.next),
            (this.treeSync.updatesSeen += 1));
        }
        if (
          (this.applyCollectedRows(t, r),
          this.treeSync.committer.branches.rebaseStoresToMatchMetadata(),
          this.loader)
        ) {
          let n = this.treeSync.committer.tree.root.children;
          if (!n.some((i) => W(i) && i.isValid())) {
            A.info("cannot show any page, forcing load of next page");
            let i = n.find((d) => W(d));
            if (!i) throw Error("No scope to load");
            let s = this.loader.loadScope(i.id);
            if (!s) throw Error("Unable to load scope");
            this.treeSync.loadOneScope(s, !1);
          }
        }
        this.callbacks.updateProcessed(this.treeSync.committer.tree);
      } catch (t) {
        let r = J(t);
        throw (
          A.error("Error processing remote updates:", r, {
            updateVersions: this.remoteUpdates.map((n) => n.next),
          }),
          A.debug("Last update:", e),
          (this.remoteUpdates.length = 0),
          this.treeSync.error(r.message),
          r
        );
      }
      this.maybeEvaluatePendingTreeVerify();
    }
    get hasPendingTreeVerify() {
      return this.pendingTreeVerify !== void 0;
    }
    async verifyTreeWithServer() {
      let e = `/projects/${this.projectId}/tree/latest?forceSnapshot=true`,
        t = new URL(ye(e)),
        r;
      try {
        ((this.ignoreTreeVerifies = !0), (r = await fetch(t, await O.withAuthorizationHeader({}))));
      } finally {
        this.ignoreTreeVerifies = !1;
      }
      if (!r.ok) throw Error(`unable to fetch document json: ${r.status} ${r.statusText}`);
      let n = r.headers.get("etag") || "",
        o = Number.parseInt(n.match(Et)?.[1] ?? "0", 10);
      if (!Number.isFinite(o) || o <= 0)
        throw Error(`unable to parse document tree version from: ${n}`);
      let i = this.treeSync.treeVersion - o;
      this.ignoreTreeVerifyVersion = o;
      let s = new Uint8Array(await r.arrayBuffer()),
        d = this.compareLocalStoreWithServerCrdt(s, o);
      if (d) throw d;
      if (!this.verifyStoreTreeWithCanvasTree(0)) throw Error("Tree out of sync with store.");
      return i;
    }
    flushUpdates(e) {
      if (!this.treeSync.isReady) return !1;
      this.treeSync.outbox.flushToStorage();
      let t = this.treeSync.createMessages(this.userId);
      for (let r of t) e.sendMessage({ type: "rows", value: r });
      return t.length > 0;
    }
    resendUnconfirmedUpdates(e) {
      let t = this.treeSync.createUnconfirmedMessages();
      for (let r of t) e.sendMessage({ type: "rows", value: r });
    }
    retryUnconfirmedUpdates(e) {
      if (this.treeSync.isReady)
        for (let t of this.treeSync.outbox.takePendingRetries(Date.now()))
          e.sendMessage({ type: "rows", value: t });
    }
    handleNetworkReady(e) {
      return (this.resendUnconfirmedUpdates(e), this.maybeSend(e));
    }
    recoverAbandonedUpdatesIfNeeded(e) {
      this.treeSync.isReady &&
        (this.treeSync.committer.tree.isViewOnly ||
          (this.treeSync.outbox.canAttemptRecovery() && this.recoverAbandonedUpdates(e)));
    }
    async recoverAbandonedUpdates(e) {
      let t = await this.treeSync.outbox.recoverAbandonedUpdates(this.userId);
      if (t.length === 0 || !this.treeSync.isReady) return;
      let r = new H();
      for (let n of t) (Q.verifyBatches(n.rows), r.add(n.rows));
      (this.applyCollectedRows(r, this.treeSync.treeVersion),
        this.callbacks.updateProcessed(this.treeSync.committer.tree));
      for (let n of t)
        (A.debug("recovering an abandoned update from an earlier session", {
          seq: n.seq,
          reasons: n.reasons,
          rows: n.rows.length,
          age: Date.now() - n.ts,
        }),
          e.sendMessage({ type: "rows", value: n }));
    }
    getDocumentURL() {
      return new URL(ye(`/projects/${this.projectId}/tree/latest`));
    }
    cancelAndClearLoader() {
      (this.loader?.scheduler.cancel(), (this.loader = void 0));
    }
    maybeSend(e) {
      if (!this.treeSync.isReady || !this.treeSync.hasMessageForRemote()) return "nothingToSend";
      if (this.treeSync.outbox.size >= xt) return "postpone";
      let r = this.treeSync.createMessages(this.userId);
      if (r.length === 0) return "nothingToSend";
      for (let n of r) e.sendMessage({ type: "rows", value: n });
      return "didSend";
    }
    createLoader(e, t, r) {
      this.loader?.scheduler.cancel();
      let n = new Pe(
        this.treeSync.committer.createStagedDocumentLoaderStoreTarget(),
        this.projectId,
        this.componentLoader,
        t,
        e,
        r
      );
      return (
        (this.loader = n),
        n.on("loadedFirstData", () => {
          this.treeSync.onLoadedFirstData();
        }),
        this.loader
      );
    }
    finishLoading() {
      this.loader = void 0;
    }
    compareLocalStoreWithServerCrdt(e, t) {
      let { remoteStore: r, compareResult: n } = this.createRemoteStore(e);
      v.debug(
        "local:",
        this.store.getHierarchy().computeTreeHash(),
        this.store.getHierarchy().sizeWithoutReplicas(),
        "remote:",
        r.getHierarchy().computeTreeHash(),
        r.getHierarchy().sizeWithoutReplicas(),
        "version:",
        t
      );
      let o,
        i = [];
      return (
        qe(this.store, r, i)
          ? (v.warn(
              `stores are different
` +
                i.join(`
`)
            ),
            (o = Error("Local document different from server document.")),
            v.reportError(o, {
              differences: i,
              localOnlyRows: n.extra.length,
              remoteOnlyRows: n.missing.length,
            }))
          : n.extra.length > 0 || n.missing.length > 0
            ? v.debug("stores are same after reconciling rows", {
                localOnlyRows: n.extra.length,
                remoteOnlyRows: n.missing.length,
              })
            : v.debug("stores are same"),
        o
      );
    }
    createRemoteStore(e) {
      let t = new Q({ client: 0, user: "" });
      t.fromBuffer(e);
      let r = this.treeSync.committer.branches,
        n = new Ne(t),
        o = r.activeBranchId,
        i = t,
        s = { extra: [], missing: [] };
      for (let d of r.getBranchPath(o)) {
        let h = r.getStore(d);
        i = n.getStore(d);
        let c = h.compare(i.manifest);
        for (let m of c.extra) s.extra.push(m);
        for (let m of c.missing) s.missing.push(m);
        this.appendLocalRowsMissingFromServer(h, i, c.extra);
      }
      return (n.resolveBranchHierarchy(o), { remoteStore: i, compareResult: s });
    }
    appendLocalRowsMissingFromServer(e, t, r) {
      if (r.length === 0) return;
      let n = new Map();
      for (let i of e.getSerializableRows()) {
        let s = `${i.client}:${i.seq}`,
          d = n.get(s);
        if (d) {
          d.push(i);
          continue;
        }
        n.set(s, [i]);
      }
      let o = [];
      for (let i of r) {
        let s = n.get(`${i.client}:${i.seq}`);
        l(s, () => `unable to find local rows for timestamp ${i.client} ${i.seq}`);
        for (let d of s) o.push(d);
      }
      t.addSerializableRows(o);
    }
    async verifyLocalTreeWithServer(e, t) {
      try {
        let r = e.replace(Ut, t + ".crdt"),
          n = new URL(r, window.location.origin);
        v.debug("verifying local tree with server crdt:", n);
        let o = await fetch(n, await O.withAuthorizationHeader({}));
        if (!o.ok)
          if (o.status === 404) {
            let d = this.getDocumentURL();
            if (
              (v.debug("404, retrying crdt with:", d),
              (o = await fetch(d, await O.withAuthorizationHeader({}))),
              o.ok)
            ) {
              if (!o.headers.get("etag")?.includes(t.toString()))
                throw Error(`lastest tree version does not match: ${o.headers.get("etag")} ${t}`);
            } else throw Error(`unable to fetch latest crdt document: ${o.status} ${o.statusText}`);
          } else throw Error(`unable to fetch crdt document: ${o.status} ${o.statusText}`);
        let i = new Uint8Array(await o.arrayBuffer());
        v.debug("using crdt from server");
        let s = this.compareLocalStoreWithServerCrdt(i, t);
        if (s) throw s;
      } catch (r) {
        (v.error("Error:", r), this.callbacks.error(J(r)));
      }
    }
    getRowsToSend() {
      return this.treeSync.committer.takePendingRows(this.userId);
    }
    loadedAllScopes() {
      (this.treeSync.loadedAllScopes(), this.maybeEvaluatePendingTreeVerify());
    }
    loadOneScope(e, t) {
      let r = this.treeSync.loadOneScope(e, t);
      return (this.maybeEvaluatePendingTreeVerify(), r);
    }
    remoteUpdateCount() {
      return this.remoteUpdates.length;
    }
    syncDiagnostics() {
      let e = Array.from(this.treeSync.outbox.entries.values(), (t) => ({
        seq: t.seq,
        rows: t.rows.length,
        attempts: t.attempts,
        lastAttemptAgoMs: Date.now() - t.lastAttemptAt,
      }));
      return {
        outboxSize: this.treeSync.outbox.size,
        unconfirmed: e,
        isReady: this.treeSync.isReady,
        hasMessageForRemote: this.treeSync.hasMessageForRemote(),
        remoteUpdates: this.remoteUpdates.length,
      };
    }
    hasUnconfirmedChanges() {
      return this.treeSync.hasInFlightUpdates()
        ? !0
        : this.treeSync.isReady && !this.treeSync.hasOnlyEmptyChangesForRemote();
    }
    error(e, t) {
      return this.treeSync.error(e, t);
    }
  };
var Ge = class {
  undoBuffer = [];
  redoBuffer = [];
  undoGroup = [];
  scheduledEndUndoGroup;
  canUndo(e) {
    return !!this.undoBuffer.at(-1)?.canApply(e);
  }
  peekUndo() {
    return this.undoBuffer.at(-1);
  }
  undo(e, t) {
    let r = this.peekUndo();
    if (!r?.canApply(e)) return;
    (this.undoBuffer.pop(), r.undo(e));
    let n = Je(r);
    (t && (n.metadata = { ...n.metadata, ...t }), this.redoBuffer.push(n));
    let o = this.undoBuffer.length;
    return (
      this.undoGroup.forEach((i, s) => {
        this.undoGroup[s] = Math.min(i, o);
      }),
      r
    );
  }
  canRedo(e) {
    return this.redoBuffer.at(-1)?.canApply(e) === !0;
  }
  peekRedo() {
    return this.redoBuffer.at(-1);
  }
  redo(e, t) {
    let r = this.peekRedo();
    if (!r?.canApply(e)) return;
    (this.redoBuffer.pop(), r.redo(e));
    let n = Je(r);
    return (t && (n.metadata = { ...n.metadata, ...t }), this.undoBuffer.push(n), r);
  }
  beginUndoGroup() {
    this.undoGroup.push(this.undoBuffer.length);
  }
  discardUndoGroup(e) {
    let t = this.undoGroup.pop();
    if (t === void 0 || t >= this.undoBuffer.length) return;
    let r = this.undoBuffer.splice(t);
    for (let n = r.length - 1; n >= 0; n--) r[n]?.undo(e);
    return r[0];
  }
  scheduleEndUndoGroup() {
    let e = this.undoGroup.pop();
    e !== void 0 && (e >= this.undoBuffer.length || (this.scheduledEndUndoGroup = e));
  }
  clearUndoStack() {
    ((this.undoBuffer.length = 0),
      (this.redoBuffer.length = 0),
      (this.undoGroup.length = 0),
      (this.scheduledEndUndoGroup = void 0));
  }
  addUndoEntry(e) {
    (this.undoBuffer.push(e), (this.redoBuffer.length = 0));
  }
  getUndoBufferSize() {
    return this.undoBuffer.length;
  }
};
function Je(a) {
  return Object.assign(Object.create(Object.getPrototypeOf(a)), a);
}
var y = ot(it(), 1);
var Lt = 0,
  ae = class {
    id = ++Lt;
    currentRtt = NaN;
    rtts = [];
    rttIndex = 0;
    pending = Array.from(Array(128), () => ({ type: "", time: 0 }));
    start = 0;
    end = 0;
    overflow = 0;
    lastSendTime = 0;
    bytesSent = 0;
    bytesReceived = 0;
    read() {
      let { bytesSent: e, bytesReceived: t, id: r } = this;
      return ((this.bytesSent = 0), (this.bytesReceived = 0), [e, t, this.rtt(), r]);
    }
    computeRtt() {
      let e = this.rtts.length;
      if (e === 0) {
        this.currentRtt = NaN;
        return;
      }
      let t = 0;
      for (let r of this.rtts) t += r;
      this.currentRtt = t / e;
    }
    lastSend() {
      return this.lastSendTime;
    }
    rtt() {
      return (
        Number.isNaN(this.currentRtt) && this.computeRtt(),
        Math.max(this.currentRtt || 0, this.pendingRtt())
      );
    }
    pendingRtt() {
      if (this.start === this.end) return 0;
      let e = this.pending[this.start];
      return performance.now() - e.time;
    }
    pendingCount(e) {
      if (!e) return this.start > this.end ? 128 - this.start + this.end : this.end - this.start;
      let t = 0;
      for (let r = this.start; r !== this.end; r = (r + 1) & 127) this.pending[r].type === e && t++;
      return t;
    }
    sent(e, t) {
      ((this.bytesSent += t.length),
        this.end === (this.start === 0 ? 127 : this.start - 1) &&
          ((this.start = (this.start + 1) & 127), this.overflow++));
      let r = this.pending[this.end];
      ((r.type = e),
        (r.time = performance.now()),
        (this.end = (this.end + 1) & 127),
        (this.lastSendTime = r.time));
    }
    received(e) {
      this.bytesReceived += e.length;
    }
    reset() {
      ((this.start = 0),
        (this.end = 0),
        (this.overflow = 0),
        (this.rtts = []),
        (this.rttIndex = 0),
        (this.currentRtt = NaN));
    }
    acked() {
      if (this.start === this.end) {
        console.warn("Called SocketStats.acked() with empty buffer");
        return;
      }
      if (this.overflow > 0) {
        this.overflow--;
        return;
      }
      let e = this.pending[this.start],
        t = performance.now() - e.time;
      (this.rtts.length < 32
        ? this.rtts.push(t)
        : ((this.rtts[this.rttIndex] = t), (this.rttIndex = (this.rttIndex + 1) & 31)),
        (this.start = (this.start + 1) & 127),
        (this.currentRtt = NaN));
    }
  };
var U = S("remote:socket"),
  kt = 25,
  It = 50,
  Ke = 5e3,
  Ye = 0.1,
  Mt = 5e3,
  Dt = 53;
function Nt(a) {
  switch (a) {
    case "AccessDenied":
    case "ClientNeedsUpdate":
    case "ClientTooNew":
    case "DocumentNotFound":
    case "UnsupportedSchema":
    case "Maintenance":
    case "UnknownPermanentError":
    case "ClientSidePermanentError":
    case "CrdtMigrationFailed":
    case "TreeModeMismatch":
    case "MessageTooBig":
      return !1;
    case "ReconnectToNewServer":
    case "ForcedReconnect":
    case "UnknownRecoverableError":
      return !0;
    default:
      return we(a);
  }
}
function At(a) {
  return Math.min(kt * 2 ** a, Ke);
}
function Xe(a, e) {
  let t = 1 - Ye + e() * Ye * 2;
  return Math.min(Math.round(a * t), Ke);
}
function Ft(a, e, t = Math.random) {
  return a === "ReconnectToNewServer"
    ? { delay: Xe(It, t), nextReconnectAttempt: e }
    : { delay: Xe(At(e), t), nextReconnectAttempt: e + 1 };
}
function Br({ url: a, documentConnection: e, tunnel: t, getSubprotocols: r }) {
  let n = (0, y.useRef)(null),
    o = (0, y.useRef)({ incoming: !1, outgoing: !1 }),
    i = (0, y.useRef)(!1),
    s = (0, y.useRef)(!0),
    d = (0, y.useRef)({ onConnect: new Set(), onDisconnect: new Set(), onMessage: new Set() }),
    h = (0, y.useRef)(a),
    c = (0, y.useRef)(!0),
    m = (0, y.useRef)(void 0),
    f = (0, y.useRef)(0),
    p = (0, y.useRef)(r);
  p.current = r;
  function b() {
    m.current !== void 0 && (window.clearTimeout(m.current), (m.current = void 0));
  }
  let T = (0, y.useCallback)(() => {
      c.current = !1;
      let u = n.current;
      u && u.ws.readyState < WebSocket.CLOSING && ((u.clientClosed = !0), u.ws.close());
    }, []),
    w = (0, y.useCallback)(async () => {
      if ((b(), !c.current || n.current)) return;
      function u(C) {
        m.current === void 0 &&
          (m.current = window.setTimeout(() => {
            ((m.current = void 0),
              navigator.onLine && ((document.hidden && !D.isApiPlugin) || w()));
          }, C));
      }
      let g = new URL(h.current);
      if (
        (g.searchParams.set("v", Dt.toString()),
        g.searchParams.set("tunnel", t || ""),
        g.searchParams.set("source", "project"),
        xe() && g.searchParams.set("mode", "crdt"),
        e.treeSchema <= 0)
      )
        return;
      (g.searchParams.set("treeSchema", e.treeSchema.toString()),
        g.searchParams.set("treeVersion", e.treeVersion.toString()));
      let Ce = await p.current?.().catch((C) => {
        U.warn("Error resolving websocket subprotocols:", C);
      });
      if (!c.current || n.current) return;
      U.debug("connecting to", g.href);
      let j = new WebSocket(g.href, Ce),
        V = new ae(),
        ue = { ws: j, stats: V, clientClosed: !1 };
      ((i.current = !1), e.setSocketStats(V));
      let Y = 0,
        $ = 0;
      (j.addEventListener("open", () => {
        (U.debug("open"),
          ($ = window.setTimeout(() => {
            ((f.current = 0), ($ = 0));
          }, Mt)),
          (Y = window.setInterval(() => {
            if (
              performance.now() - V.lastSend() < 1e3 ||
              V.pendingCount("ping") > 1 ||
              j.readyState !== WebSocket.OPEN
            )
              return;
            let C = "ping {}";
            (j.send(C), V.sent("ping", C));
          }, 1e3)));
        for (let C of d.current.onConnect)
          try {
            C(s.current);
          } catch (E) {
            U.warn("Error in onConnect handler:", E);
          }
        s.current = !1;
      }),
        j.addEventListener("close", (C) => {
          let E = Pt(C);
          if (
            (U.debug("close:", E, "clientClosed:", ue.clientClosed, C),
            Y !== 0 && (clearInterval(Y), (Y = 0)),
            $ !== 0 && (clearTimeout($), ($ = 0)),
            n.current === ue)
          ) {
            Nt(E) || (c.current = !1);
            for (let M of d.current.onDisconnect)
              try {
                M(E);
              } catch (G) {
                U.warn("Error in onDisconnect handler:", G);
              }
            if (((n.current = null), c.current)) {
              let { delay: M, nextReconnectAttempt: G } = Ft(E, f.current);
              ((f.current = G), u(M));
            }
          }
        }),
        j.addEventListener("message", (C) => {
          try {
            if (o.current.incoming) {
              i.current = !0;
              return;
            }
            let E = C.data;
            V.received(E);
            let M = Ot(E);
            if (M.type === "ack") {
              V.acked();
              return;
            } else M.type === "redirect" && (h.current = M.value.url);
            for (let G of d.current.onMessage)
              try {
                G(M);
              } catch (nt) {
                U.warn("Error in onMessage handler:", nt);
              }
          } catch (E) {
            U.warn("Error receiving:", E);
          }
        }),
        (n.current = ue));
    }, [e]);
  (0, y.useEffect)(() => {
    w();
  }, [w]);
  let me = (0, y.useCallback)(
    ({ online: u, visible: g }) => {
      u && (g || D.isApiPlugin) ? w() : D.isApiPlugin || b();
    },
    [w]
  );
  Vt(me);
  let F = (0, y.useCallback)(() => {
    if ((b(), n.current)) {
      (n.current.stats.reset(),
        (n.current.clientClosed = !0),
        n.current.ws.close(),
        (n.current = null));
      for (let u of d.current.onDisconnect)
        try {
          u("ForcedReconnect");
        } catch (g) {
          U.warn("Error in onDisconnect handler:", g);
        }
    }
    ((c.current = !0), w());
  }, [w]);
  return (0, y.useMemo)(
    () => ({
      isConnected() {
        return n.current?.ws.readyState === WebSocket.OPEN;
      },
      getSocketStats() {
        return n.current?.stats;
      },
      connect() {
        ((c.current = !0), w());
      },
      disconnect() {
        T();
      },
      onConnect(u) {
        return (
          d.current.onConnect.add(u),
          () => {
            d.current.onConnect.delete(u);
          }
        );
      },
      onDisconnect(u) {
        return (
          d.current.onDisconnect.add(u),
          () => {
            d.current.onDisconnect.delete(u);
          }
        );
      },
      onMessage(u) {
        return (
          d.current.onMessage.add(u),
          () => {
            d.current.onMessage.delete(u);
          }
        );
      },
      send(u) {
        if (n.current?.ws.readyState !== 1) {
          u.type !== "state" && U.warn("Dropping", u.type, "message.");
          return;
        }
        if (!o.current.outgoing)
          try {
            let g = `${u.type} ${JSON.stringify(u.value)}`;
            (n.current.ws.send(g), n.current.stats.sent(u.type, g));
          } catch (g) {
            U.warn("Error sending", u.type, "message:", g);
          }
      },
      forceReconnect() {
        F();
      },
      debugSetBlocked(u, g) {
        ((o.current[u] = g),
          u === "incoming" && !g && i.current && n.current && ((i.current = !1), F()));
      },
      debugIsBlocked(u) {
        return o.current[u];
      },
    }),
    [w, T, F]
  );
}
function Vt(a) {
  (0, y.useEffect)(() => {
    (document.addEventListener("visibilitychange", e),
      window.addEventListener("online", e),
      window.addEventListener("offline", e));
    function e() {
      a({ online: navigator.onLine, visible: !document.hidden });
    }
    return () => {
      (document.removeEventListener("visibilitychange", e),
        window.removeEventListener("online", e),
        window.removeEventListener("offline", e));
    };
  }, [a]);
}
function Pt(a) {
  switch (a.reason) {
    case "ERR_RECONNECT_TO_NEW_SERVER":
      return "ReconnectToNewServer";
    case "ERR_ACCESS_DENIED":
      return "AccessDenied";
    case "ERR_CLIENT_NEEDS_UPDATE":
      return "ClientNeedsUpdate";
    case "ERR_DOCUMENT_NOT_FOUND":
      return "DocumentNotFound";
    case "ERR_UNSUPPORTED_SCHEMA_VERSION":
      return "UnsupportedSchema";
    case "ERR_MAINTENANCE":
      return "Maintenance";
    case "ERR_INVALID_OPERATION":
      return "ClientSidePermanentError";
    case "ERR_CRDT_MIGRATION_FAILED":
      return "CrdtMigrationFailed";
    case "ERR_UNKNOWN":
      return "UnknownPermanentError";
  }
  return a.code === 1009
    ? "MessageTooBig"
    : a.code === 1011
      ? "ClientNeedsUpdate"
      : "UnknownRecoverableError";
}
function Ot(a) {
  let e = a.indexOf(" "),
    t = a.indexOf(" ", e + 1);
  l(e >= 0 && t >= 0, "Invalid data");
  let r = a.substring(0, e),
    n = a.substring(e + 1, t),
    o = a.substring(t + 1),
    i = JSON.parse(o);
  return { id: r, type: n, value: i };
}
var _t = S("app");
function qr() {
  (_t.reportError("Socket message too big"),
    Z({
      type: "add",
      variant: "error",
      primaryText: "Failed to save.",
      secondaryText: "Too many changes.",
      key: "message-too-big",
      duration: Number.POSITIVE_INFINITY,
      showCloseButton: "never",
    }));
}
function Jr(a) {
  Z({
    type: "add",
    variant: "warning",
    primaryText: "Project format updated.",
    secondaryText: "Reload to continue.",
    key: "tree-mode-mismatch",
    duration: Number.POSITIVE_INFINITY,
    icon: "warning",
    showCloseButton: "never",
    action: a ?? { title: "Reload", onClick: () => window.top.location.reload() },
  });
}
function Qe(a) {
  return typeof a == "object" && a !== null && "next" in a;
}
function de(a) {
  return Qe(a) && "session" in a;
}
function ce(a) {
  return Qe(a) && "changes" in a && Array.isArray(a.changes);
}
var L = S("remote:sync"),
  Ze = 2 ** 52,
  le = class {
    constructor(e, t, r = 0, n) {
      this.timeline = e;
      this.componentLoader = t;
      this.setTree(e.tree, r, n);
    }
    timeline;
    componentLoader;
    rollingDiff = null;
    session = Math.floor(Math.random() * Ze);
    seq = 0;
    treeVersion = 0;
    updatesSeen = 0;
    init = 0;
    expectingInitialUpdates = 0;
    localUpdatesInFlight = [];
    localUpdatesAtInit = [];
    hasError = !1;
    waitingForTree = !1;
    get waitingForInitialUpdates() {
      return this.expectingInitialUpdates > this.updatesSeen;
    }
    get isLoading() {
      return this.waitingForTree || this.waitingForInitialUpdates;
    }
    get isReady() {
      return !(this.hasError || this.waitingForTree || this.waitingForInitialUpdates);
    }
    get tree() {
      return this.timeline.tree;
    }
    error(e, t) {
      return ((this.hasError = !0), Error(e, { cause: t }));
    }
    verify(e, t) {
      let r = this.timeline.getTreeForVersion(e);
      if (!r) return (L.info("verify: unable to find tree with version", e), !0);
      let n = r.computeTreeHash();
      if (n !== t) {
        if ((L.warn("verify: failed", n, "!==", t), t === 0)) return !0;
        L.reportError("Tree verification failed", {
          localHash: n,
          serverHash: t,
          treeVersion: e,
          treeSize: r.size(),
        });
      } else L.debug("verify: passed; hash:", t);
      return n === t;
    }
    setTree(e, t, r) {
      (L.info("setTree", t),
        this.timeline.reset(e, r),
        this.setRemoteTreeVersion(t),
        r?.isLoading &&
          ((this.rollingDiff = new Ie()), this.rollingDiff.addChanges(r?.initialChanges)),
        (this.treeVersion = t),
        (this.waitingForTree = !1),
        (this.hasError = !1),
        (this.localUpdatesInFlight = []));
    }
    resetSession() {
      ((this.treeVersion = 0),
        (this.session = Math.floor(Math.random() * Ze)),
        (this.localUpdatesInFlight = []),
        (this.localUpdatesAtInit = []));
    }
    debugResetSessionAndTree(e) {
      (this.resetSession(), this.setTree(e, 0));
    }
    handleInit(e, t) {
      return (
        (this.init += 1),
        this.init === 1 && (te("wsTreeInitMessages"), re(t)),
        L.info("init", this.init, {
          treeVersion: e,
          initialUpdates: t,
          localTreeVersion: this.treeVersion,
        }),
        L.debug("init updates:", {
          seen: this.updatesSeen,
          inFlight: this.localUpdatesInFlight.length,
          previous: this.localUpdatesAtInit.length,
        }),
        (this.hasError = !1),
        (this.expectingInitialUpdates = t),
        (this.updatesSeen = 0),
        (this.localUpdatesAtInit = this.localUpdatesInFlight.slice()),
        this.treeVersion !== e || this.waitingForTree ? ((this.waitingForTree = !0), !0) : !1
      );
    }
    trimForShallowLoading() {
      let e = this.timeline,
        t = this.getRemoteIndex() - 3;
      t <= 0 ||
        ((e.trimmed += t),
        L.debug(
          "trim",
          t,
          "new offset:",
          e.trimmed,
          "entries.length:",
          e.entries.length,
          "after load"
        ),
        e.entries.splice(0, t),
        l(
          this.timeline.remoteTreeIndex === 0 || this.getRemoteIndex() >= 0,
          "must have some buffer before remoteTreeIndex"
        ));
    }
    loadedAllScopes() {
      let e = this.timeline;
      (L.info(
        "done loading, took:",
        Math.round((performance.now() - e.resetTime) / 100) / 10,
        "seconds"
      ),
        l(e.isPartialLoading, "Must be in loading mode"),
        (e.isPartialLoading = !1),
        (this.rollingDiff = null));
      let t = this.getRemoteEntry();
      t && ((t.version = e.remoteTreeVersion), this.trimForShallowLoading());
    }
    loadOneScope(e, t) {
      let r = this.timeline;
      (L.debug("loadOneScope:", e.id),
        l(r.isPartialLoading, "Must be loading"),
        l(!e.cache.isShallowLoad, "Scope must not be shallow"));
      let n = this.getRemoteEntry();
      l(n, "remote tree is missing");
      let o = r.tree.isViewOnly;
      ((n.tree.editClosed = !1),
        (n.tree.isViewOnly = !1),
        (n.tree.inEditor = !1),
        n.tree.makeLatest());
      let i = new Set(),
        s = n.tree.root.children.findIndex((h) => h.id === e.id);
      if (e.__class === "WebPageNode" || e.__class === "SmartComponentNode") {
        (De(e), (n.tree = n.tree.commitWithLoadedScope(this.componentLoader, e)));
        for (let h of e.walk()) (r.trackChange(h.id), i.add(h.id));
      } else (n.tree.remove(e.id), n.tree.insertNode(e, n.tree.root.id, s));
      if (this.rollingDiff) {
        let h = this.rollingDiff.getChanges();
        i.size > 0 ? ge(h, i) && N(n.tree, h) : N(n.tree, h);
      } else {
        let h = 0,
          c = i.size > 0,
          m = this.getRemoteIndex();
        for (let f of r.entries) {
          if (h > m) break;
          (h++,
            !f.wasScopeInsert && ((c && !ge(f.changes, i)) || ((c = !1), N(n.tree, f.changes))));
        }
      }
      s === -1
        ? l(!n.tree.get(e.id), "Scope must have been deleted by remote diffs")
        : n.tree.loadReplicasAndCodeComponents(e);
      let d = n.tree.commit(this.componentLoader, (h, c) => {
        let m = h?.id ?? c?.id;
        m && r.trackChange(m);
      });
      return (
        (n.tree.inEditor = !0),
        (d.inEditor = !0),
        this.incrementRemoteTreeIndex(),
        t || (r.latestReversibleNodeChanges = null),
        this.addTreeToTimeline(d),
        r.legacyMode && r.invalidateAllCursors(),
        (r.tree.isViewOnly = o),
        this.rollingDiff && this.trimForShallowLoading(),
        r.tree
      );
    }
    getRemoteEntry() {
      return this.timeline.getEntry(this.getRemoteIndex());
    }
    setRemoteTreeVersion(e) {
      if (((this.timeline.remoteTreeVersion = e), this.timeline.isPartialLoading)) return;
      let t = this.getRemoteEntry();
      (l(t, "remote tree is missing"), (t.version = e));
    }
  };
var k = S("remote:sync"),
  he = class extends le {
    appEnvironment;
    localChangesSentToRemote = 0;
    setTree(e, t, r) {
      (super.setTree(e, t, r), (this.localChangesSentToRemote = 0));
    }
    handleRemoteUpdate(e) {
      if (this.hasError || this.waitingForTree) return;
      l(typeof e.next == "number", "must be a valid tree update");
      let t = e.next;
      if (
        (k.trace("this:", this.session, this.seq, "at:", this.treeVersion, "update:", e),
        t !== this.treeVersion + 1)
      ) {
        if (t <= this.treeVersion) {
          k.debug("ignoring old update:", t, " <= ", this.treeVersion);
          return;
        }
        throw this.error("missing update: " + this.treeVersion + " + 1 != " + t);
      }
      if (((this.updatesSeen += 1), (this.treeVersion = t), de(e) && e.session === this.session)) {
        let r = this.localUpdatesInFlight[0];
        if (r?.seq === e.seq)
          (this.localUpdatesInFlight.shift(),
            this.confirmLocalChangesByRemote(r.count, t),
            (r.confirmed = !0));
        else {
          let n = this.localUpdatesAtInit.find((o) => o.seq === e.seq);
          if (n) (this.insertRemoteChanges(n.changes, t), (n.confirmed = !0));
          else {
            let o = this.localUpdatesInFlight.findIndex((s) => s.seq === e.seq),
              i =
                o === -1
                  ? "unknown local update: " + e.seq + " != " + r?.seq
                  : "missing local update: " + e.seq + " != " + r?.seq + ", is index: " + o;
            throw this.error(i);
          }
        }
      } else
        ce(e)
          ? e.changes.length > 0 && this.insertRemoteChanges(e.changes, t)
          : k.reportErrorOncePerMinute(new Error("Unknown remote update"), { update: e });
    }
    confirmLocalChangesByRemote(e, t = 0) {
      let r = this.timeline;
      if (
        (l(e >= 1, "cannot confirm less than one change"),
        l(
          this.localChangesSentToRemote >= e,
          "cannot confirm local changes that have not been sent"
        ),
        l(r.remoteTreeIndex < r.localTreeIndex, "must have unconfirmed local changes"),
        this.rollingDiff)
      )
        for (let n = 1; n <= e; n++)
          this.rollingDiff.addChanges(r.getEntry(r.remoteTreeIndex + n)?.changes);
      return (
        (this.localChangesSentToRemote -= e),
        r.incrementRemoteTreeIndex(e),
        this.setRemoteTreeVersion(t),
        r.tree
      );
    }
    insertRemoteChanges(e, t = 0) {
      let r = this.timeline;
      (k.debug("insertRemoteChanges:", e.length),
        l(r.tree === r.getLastEntry().tree, "tree out of sync"),
        l(r.remoteTreeIndex <= r.localTreeIndex, "remote tree too far ahead"),
        this.rollingDiff && this.rollingDiff.addChanges(e));
      let n = this.getRemoteEntry();
      l(n, "remote tree is missing");
      let o = r.tree.isViewOnly;
      ((n.tree.editClosed = !1),
        (n.tree.isViewOnly = !1),
        n.tree.makeLatest(),
        n.tree.beginAllowPartialScopeAccess(),
        N(n.tree, e));
      let i = n.tree.commitDiffs(this.componentLoader);
      for (let d of e) r.trackChange(d.id, d);
      for (let d of n.tree.getNodesChangedByCommit()) r.trackChange(d.id);
      (r.incrementRemoteTreeIndex(1), (r.latestReversibleNodeChanges = null));
      let s = r.entries.length - this.getRemoteIndex();
      return (
        l(s >= 0, "computed rebase is off"),
        s === 0 ? this.addRemoteTreeWithChanges(i, e) : this.rebaseRemoteTreeWithChanges(i, e, s),
        this.trim(),
        this.setRemoteTreeVersion(t),
        n.tree.endAllowPartialScopeAccess(),
        (r.tree.isViewOnly = o),
        r.tree
      );
    }
    addRemoteTreeWithChanges(e, t) {
      k.trace("addRemoteTreeWithChanges:", t.length);
      let r = this.timeline.getLastEntry();
      return (
        l(e.lineage === r.tree.lineage, "Trees must belong to the same line."),
        l(!e.hasUncommittedChanges(), "Tree cannot have uncommitted changes."),
        r.tree !== e && r.tree.releaseMemory(),
        this.timeline.addEntry(e, t)
      );
    }
    rebaseRemoteTreeWithChanges(e, t, r) {
      let n = this.timeline;
      (k.debug("rebaseRemoteTreeWithChanges:", r, "changes:", t.length),
        l(e.lineage === n.getLastEntry().tree.lineage, "Trees must belong to the same line."),
        l(!e.hasUncommittedChanges(), "Tree cannot have uncommitted changes."),
        l(n.entries.length >= r, () => `rebase ${r} > commits ${n.entries.length}`));
      let o = n.entries.splice(n.entries.length - r, r);
      l(o.length === r, () => `must have ${r} entries to process`);
      let i = n.addEntry(e, t, [], !0),
        s = e;
      for (let d = 0; d < r; d++) {
        let h = o[d];
        (N(e, h.changes), (e = e.commitDiffs(this.componentLoader)));
        for (let c of h.changes) n.trackChange(c.id, c);
        for (let c of s.getNodesChangedByCommit()) n.trackChange(c.id);
        (n.addEntry(e, h.changes, h.editReasons, h.wasRebase),
          e !== s && (s.releaseMemory(), (s = e)));
      }
      return ((n.tree = e), i);
    }
    addTreeToTimeline(e) {
      let r = this.timeline.entries.length - this.getRemoteIndex();
      l(r >= 0, "computed rebase is off");
      let n;
      (r === 0
        ? (n = this.addRemoteTreeWithChanges(e, []))
        : (n = this.rebaseRemoteTreeWithChanges(e, [], r)),
        (n.wasScopeInsert = !0));
    }
    loadCompleteTree(e, t = 0) {
      let r = this.timeline;
      (k.debug(
        "load complete tree:",
        r.tree.sizeAtStart(),
        "->",
        e.size(),
        "entries:",
        r.entries.length
      ),
        l(r.trimmed === 0, "cannot load complete tree while having local changes"),
        l(!e.hasUncommittedChanges(), "tree should be clean"),
        r.entries.forEach((s, d) => {
          d > r.remoteTreeIndex || N(e, s.changes);
        }),
        e.hasUncommittedChanges() && (e = e.commitDiffs(this.componentLoader)));
      let n = [],
        o = r.tree;
      if (o.sizeAtStart() * 2 > e.size()) {
        let s = {};
        for (let d of e.root.walk()) {
          let h = o.getNodeAtStart(d.id) || void 0,
            c = ke(h, d);
          (c && (s[c.id] = c), r.trackChange(d.id, c));
        }
        ((n = Object.values(s)), k.debug("load complete tree, diff:", n.length));
      } else (r.invalidateAllCursors(), k.debug("load complete tree, resending:", r.tree.size()));
      (r.incrementRemoteTreeIndex(1), (r.latestReversibleNodeChanges = null));
      let i = r.entries.length - r.remoteTreeIndex;
      return (
        l(i >= 0, "computed rebase is off"),
        e.lineage !== r.tree.lineage
          ? (r.reset(e), this.setRemoteTreeVersion(t), r.tree)
          : (i === 0
              ? this.addRemoteTreeWithChanges(e, n)
              : this.rebaseRemoteTreeWithChanges(e, n, i),
            this.setRemoteTreeVersion(t),
            this.trim(),
            r.tree.forEachNode((s) => r.trackChange(s.id)),
            r.tree)
      );
    }
    incrementRemoteTreeIndex() {
      this.timeline.incrementRemoteTreeIndex(1);
    }
    getRemoteIndex() {
      return this.timeline.remoteTreeIndex - this.timeline.trimmed;
    }
    getUnconfirmedChangeCount() {
      return this.timeline.localTreeIndex - this.timeline.remoteTreeIndex;
    }
    hasChangesForRemote() {
      let e = this.timeline.remoteTreeIndex + this.localChangesSentToRemote,
        t = this.timeline.localTreeIndex;
      return (l(e <= t, "inconsistency in getting local changes to send"), e < t);
    }
    hasOnlyEmptyChangesForRemote() {
      let e = this.timeline.remoteTreeIndex + this.localChangesSentToRemote,
        t = this.timeline.localTreeIndex;
      return e >= t ? !0 : this.timeline.computeForwardChanges(e, t).length === 0;
    }
    createUpdateToSend() {
      if (!this.isReady) throw Error("cannot create updates while not ready");
      if (!this.hasChangesForRemote()) return null;
      let { changes: e, count: t, reasons: r } = this.getForwardChangesForRemote(),
        n = ++this.seq,
        o = {
          appEnvironment: this.appEnvironment,
          session: this.session,
          seq: n,
          changes: e,
          count: t,
          reasons: r,
          confirmed: !1,
        };
      return (this.localUpdatesInFlight.push(o), o);
    }
    getForwardChangesForRemote() {
      let e = this.timeline.remoteTreeIndex + this.localChangesSentToRemote,
        t = this.timeline.localTreeIndex,
        r = this.timeline.getChangesBetweenEntries(e, t);
      return ((this.localChangesSentToRemote += r.count), r);
    }
    commitAndCreateUpdate(e = 0) {
      (l(D.isTest), this.timeline.commitLocalTree());
      let t = this.createUpdateToSend();
      return t ? Oe(t, e) : null;
    }
    trim() {
      if (this.timeline.isPartialLoading) return;
      let e = 0;
      (this.timeline.remoteTreeIndex > 0
        ? (e = this.getRemoteIndex() - 100)
        : (e = this.timeline.localTreeIndex - this.timeline.trimmed - 100),
        !(e <= 75) &&
          ((this.timeline.trimmed += e),
          k.debug(
            "trim",
            e,
            "new offset:",
            this.timeline.trimmed,
            "entries.length:",
            this.timeline.entries.length
          ),
          this.timeline.entries.splice(0, e),
          l(
            this.timeline.remoteTreeIndex === 0 || this.getRemoteIndex() >= 0,
            "must have some buffer before remoteTreeIndex"
          )));
    }
  };
var Ht = { cache: !0, update: !0, mutable: !0, children: !0 };
function Bt(a, e) {
  if (a !== "cached") return e;
}
function et(a) {
  return JSON.parse(JSON.stringify(a, Bt));
}
function tt(a, e, t) {
  let r = new Set(),
    n = !1;
  function o(s, d) {
    (r.add(s.id), (d += "." + s.id));
    let h = e.get(s.id);
    if (!h) ((n = !0), t.push("-node: " + d + (K(s) ? " (replica child)" : "")));
    else {
      let c = [],
        m = s.children?.map((p) => p.id).join(","),
        f = h.children?.map((p) => p.id).join(",");
      m !== f && c.push(" .children: [" + m + "] != [" + f + "]");
      for (let [p, b] of s.entries()) {
        if (p in Ht) continue;
        let T = h[p];
        P(b, T)
          ? b &&
            typeof b == "object" &&
            b.__proto__ !==
              (typeof T == "object" && T && "__proto__" in T ? T.__proto__ : void 0) &&
            c.push(" ." + p + ": different prototypes")
          : (b === void 0 || T === void 0 || !P(et(b), et(T))) &&
            p !== "contentHash" &&
            c.push(" ." + p + ": " + JSON.stringify(b) + " != " + JSON.stringify(T));
      }
      c.length > 0 &&
        ((n = !0), t.push("!node: " + d + (K(s) ? " (replica child)" : "")), t.push(...c));
    }
    for (let c of s.children ?? []) o(c, d);
  }
  function i(s, d) {
    ((d += "." + s.id),
      r.has(s.id) || ((n = !0), t.push("+node: " + d + (K(s) ? " (replica child)" : ""))));
    for (let h of s.children ?? []) i(h, d);
  }
  return (o(a.root, ""), i(e.root, ""), n);
}
var q = S("remote:connection"),
  B = S("remote:verify"),
  jt = 5,
  rt = class {
    constructor(e, t, r, n, o) {
      this.componentLoader = t;
      this.projectId = r;
      this.callbacks = n;
      (l(e instanceof Me, "timeline must be a TreeTimeline"),
        (this.treeSync = new he(e, t)),
        (this.treeSync.appEnvironment = o),
        (this.treeSync.waitingForTree = !0));
    }
    componentLoader;
    projectId;
    callbacks;
    treeSync;
    remoteUpdates = [];
    ignoreTreeVerifies = !1;
    ignoreTreeVerifyVersion = 0;
    shouldCrashFromDebug = !1;
    loader;
    get init() {
      return this.treeSync.init;
    }
    setTree(e, t, r) {
      this.treeSync.setTree(e, t, r);
    }
    get timeline() {
      return this.treeSync.timeline;
    }
    get treeVersion() {
      return this.treeSync.treeVersion;
    }
    get isReady() {
      return this.treeSync.isReady;
    }
    get waitingForTree() {
      return this.treeSync.waitingForTree;
    }
    get isLoading() {
      return this.treeSync.isLoading;
    }
    get session() {
      return this.treeSync.session;
    }
    resetSession() {
      this.treeSync.resetSession();
    }
    debugResetSessionAndTree(e) {
      this.treeSync.debugResetSessionAndTree(e);
    }
    debugCrash() {
      this.shouldCrashFromDebug = !0;
    }
    canProcessChanges() {
      if ((this.treeSync.trim(), !this.treeSync.isReady || this.shouldCrashFromDebug)) {
        if (this.treeSync.hasOnlyEmptyChangesForRemote()) return !1;
        let e = "is not ready";
        throw (
          this.treeSync.hasError
            ? (e = "had an error")
            : this.treeSync.waitingForTree
              ? (e = "is waiting for tree data")
              : this.treeSync.waitingForInitialUpdates
                ? (e = "is waiting for initial updates")
                : this.shouldCrashFromDebug &&
                  ((this.shouldCrashFromDebug = !1), (e = "is doing a deliberate crash test")),
          this.treeSync.error("cannot create local updates when the document " + e)
        );
      }
      return !0;
    }
    processViewOnly() {
      if (!this.treeSync.hasChangesForRemote()) return;
      let { changes: e, count: t } = this.treeSync.getForwardChangesForRemote();
      (q.warn("cannot create local updates when the user is a viewer, ignoring:", e),
        this.treeSync.confirmLocalChangesByRemote(t));
    }
    maybeSend(e) {
      if (!this.treeSync.isReady || !this.treeSync.hasChangesForRemote()) return "nothingToSend";
      let t = this.treeSync.localUpdatesInFlight.length;
      if (t >= jt) return "postpone";
      let r = this.treeSync.createUpdateToSend();
      return r
        ? (q.debug("sending update:", t, r.changes.length, r.reasons),
          e.sendMessage({ type: "treeUpdate", value: ne(r) }),
          "didSend")
        : "nothingToSend";
    }
    handleRows() {
      throw Error("Crdt tree updates cannot be handled by Json data handler");
    }
    handleConfirmRows() {
      throw Error("Crdt tree updates cannot be handled by Json data handler");
    }
    get hasUpdatesToProcess() {
      return !this.waitingForTree && this.remoteUpdates.length > 0;
    }
    handleInit(e, t) {
      return ((this.remoteUpdates.length = 0), { needsDownload: this.treeSync.handleInit(e, t) });
    }
    handleTreeVerify(e, t, r) {
      if (!this.treeSync.isReady || this.ignoreTreeVerifies || this.ignoreTreeVerifyVersion === t)
        return;
      if (!this.treeSync.verify(t, r)) {
        let i = this.treeSync.timeline.getTreeForVersion(t);
        if (i) {
          let d = this.treeSync.timeline.entries.slice();
          this.verifyLocalTreeWithServer(e, i, t, d);
        }
        ((this.remoteUpdates.length = 0), (this.treeSync.hasError = !0));
        let s = new Error("Local document out of sync with document on server.");
        this.callbacks.error(s);
        return;
      }
      let n = ee(),
        o = z.isDevelopment || z.isLocal;
      if (n || o) {
        let i = this.treeSync.timeline.getTreeForVersion(t);
        if (i) {
          let s = this.treeSync.timeline.entries.slice();
          this.verifyLocalTreeWithServer(e, i, t, s);
        }
      }
    }
    async verifyLocalTreeWithServer(e, t, r, n) {
      try {
        let o = e.replace(/\d+\.json/u, r + ".json"),
          i = await fetch(o, await O.withAuthorizationHeader({}));
        if (!i.ok) throw Error(`unable to fetch document json: ${i.status} ${i.statusText}`);
        let s = await i.text(),
          d = await this.loadServerTree(s, o, r);
        this.compareTreeWithServerJson(t, d, r, n);
      } catch (o) {
        B.error("Error:", o);
      }
    }
    compareTreeWithServerJson(e, t, r, n) {
      B.debug(
        "local:",
        e.computeTreeHash(),
        e.size(),
        "remote:",
        t.computeTreeHash(),
        t.size(),
        "version:",
        r
      );
      let o,
        i = [];
      return (
        tt(e, t, i)
          ? (B.warn(
              `trees are different
` +
                i.join(`
`)
            ),
            n && B.debug("timeline.entries", n),
            (o = Error("Local document different from server document.")),
            B.reportError(o, { differences: i, changes: n?.slice(-25).map((d) => d.changes) }))
          : i.length > 0
            ? B.debug(
                `trees have warnings:
` +
                  i.join(`
`)
              )
            : B.debug("trees are same"),
        o
      );
    }
    handleTreeUpdate(e) {
      this.remoteUpdates.push(e);
    }
    processRemoteUpdates() {
      if (this.treeSync.waitingForTree) return;
      let e;
      try {
        if (
          (l(!this.timeline.tree.hasUncommittedChanges(), "tree must not have uncommitted changes"),
          this.shouldCrashFromDebug)
        )
          throw ((this.shouldCrashFromDebug = !1), Error("RemoteDocument CrashTest"));
        for (; this.remoteUpdates.length > 0;) {
          let t = this.remoteUpdates.shift();
          if (!t) break;
          ((e = t),
            this.ensureAllScopesAreLoaded(t),
            this.treeSync.handleRemoteUpdate(t),
            this.loader && !de(t) && this.loader.addNodeChanges(t.changes));
        }
        if (this.loader) {
          let t = this.timeline.tree.root.children;
          if (!t.some((n) => W(n) && n.isValid())) {
            q.info("cannot show any page, forcing load of next page");
            let n = t.find((i) => W(i));
            if (!n) throw Error("No scope to load");
            let o = this.loader.loadScope(n.id);
            if (!o) throw Error("Unable to load scope");
            this.treeSync.loadOneScope(o, !1);
          }
        }
        this.callbacks.updateProcessed(this.timeline.tree);
      } catch (t) {
        let r = J(t);
        throw (
          (this.remoteUpdates.length = 0),
          q.error("Error processing remote updates:", r),
          q.debug("Last update:", e),
          this.treeSync.error(r.message),
          r
        );
      }
    }
    ensureAllScopesAreLoaded(e) {
      if (!this.loader || !ce(e)) return;
      let t = new Set();
      for (let r of e.changes) r.previousScope && (t.add(r.previousScope), t.add(r.to.parentid));
      for (let r of t) {
        if (this.loader.hasLoadedScope(r)) continue;
        let n = this.loader.loadScope(r);
        n && this.treeSync.loadOneScope(n, !1);
      }
    }
    createLoader(e, t, r) {
      this.loader?.scheduler.cancel();
      let n = new Se(this.componentLoader, t, e, r);
      return ((this.loader = n), this.loader);
    }
    async verifyTreeWithServer() {
      let e = `/projects/${this.projectId}/tree/latest?forceSnapshot=true`,
        t = new URL(e, window.location.href),
        r;
      try {
        ((this.ignoreTreeVerifies = !0), (r = await fetch(t, await O.withAuthorizationHeader({}))));
      } finally {
        this.ignoreTreeVerifies = !1;
      }
      if (!r.ok) throw Error(`unable to fetch document json: ${r.status} ${r.statusText}`);
      let n = r.headers.get("etag") || "",
        o = Number.parseInt(n.match(/Version-(\d+)/u)?.[1] ?? "0", 10);
      if (!Number.isFinite(o) || o <= 0)
        throw Error(`unable to parse document tree version from: ${n}`);
      let i = this.treeSync.treeVersion - o,
        s = this.treeSync.timeline.getTreeForVersion(o);
      if (!s) throw Error(`unable to get the local tree for version ${o}`);
      this.ignoreTreeVerifyVersion = o;
      let d = await r.text(),
        h = await this.loadServerTree(d, t.toString(), o),
        c = this.compareTreeWithServerJson(s, h, o);
      if (c) throw c;
      return i;
    }
    async loadServerTree(e, t, r) {
      l(!e || Re(e), "treeData must be a string");
      let n,
        o = new Se(this.componentLoader, r, t, {
          partialParsing: !0,
          loadInBackground: !0,
          loadedData: e,
          isUserIdleCallback: this.callbacks.isUserIdleCallback,
        });
      return (
        o.on("loadedFirstData", (i) => {
          (o.on("loadedScope", (s) => {
            let d = i.root.children.findIndex((h) => h.id === s.id);
            (i.remove(s.id), i.insertNode(s, i.root.id, d), (i = i.commit(this.componentLoader)));
          }),
            o.on("loadedAllData", () => {
              n = i;
            }));
        }),
        await o.start(),
        l(n, "loadedAllData not called"),
        n
      );
    }
    get localUpdatesInFlight() {
      return this.treeSync.localUpdatesInFlight;
    }
    get localUpdatesAtInit() {
      return this.treeSync.localUpdatesAtInit;
    }
    get hasError() {
      return this.treeSync.hasError;
    }
    flushUpdates(e) {
      if (this.localUpdatesInFlight.length === 0) return !1;
      let t = this.treeSync.createUpdateToSend();
      return (t && e.sendMessage({ type: "treeUpdate", value: ne(t) }), !0);
    }
    resendUnconfirmedUpdates(e) {
      l(this.isReady);
      let t = this.localUpdatesAtInit.filter((r) => !r.confirmed);
      if (t.length !== 0) {
        q.debug("resending local updates:", t.length);
        for (let r of t) e.sendMessage({ type: "treeUpdate", value: ne(r) });
      }
    }
    retryUnconfirmedUpdates() {}
    recoverAbandonedUpdatesIfNeeded() {}
    handleNetworkReady(e) {
      return (this.resendUnconfirmedUpdates(e), "nothingToSend");
    }
    getDocumentURL() {
      return new URL(`/projects/${this.projectId}/tree/latest`, window.location.href);
    }
    cancelAndClearLoader() {
      (this.loader?.scheduler.cancel(), (this.loader = void 0));
    }
    finishLoading() {
      this.loader = void 0;
    }
    loadOneScope(e, t) {
      return this.treeSync.loadOneScope(e, t);
    }
    loadedAllScopes() {
      this.treeSync.loadedAllScopes();
    }
    hasUnconfirmedChanges() {
      return this.treeSync.getUnconfirmedChangeCount() > 0;
    }
    remoteUpdateCount() {
      return this.remoteUpdates.length;
    }
    syncDiagnostics() {
      return {
        inflight: this.treeSync.localUpdatesInFlight.length,
        remoteUpdates: this.remoteUpdateCount(),
      };
    }
    error(e) {
      return this.treeSync.error(e);
    }
  };
export {
  Ge as a,
  ae as b,
  Mt as c,
  Dt as d,
  Nt as e,
  Ft as f,
  Br as g,
  Pt as h,
  Ot as i,
  qr as j,
  Jr as k,
  rt as l,
  $e as m,
};
//# sourceMappingURL=chunk-RLQLA6FA.mjs.map
