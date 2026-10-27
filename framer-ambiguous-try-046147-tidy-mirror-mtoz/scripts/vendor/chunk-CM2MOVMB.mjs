import { a as ue, b as he, c as ge, h as V } from "chunk-KAGEVRIQ.mjs";
import { $d as fe, Gb as pe, N as me, Ne as T, Pe as w, u as O } from "chunk-OI2UHGTV.mjs";
import { Zm as de, qg as ae, sl as ce } from "chunk-ZMQ5KVTE.mjs";
import {
  Dc as oe,
  Ic as te,
  Jb as q,
  Jk as le,
  Lb as Q,
  Mf as ie,
  Nf as x,
  Of as re,
  Pb as b,
  Rf as A,
  Uf as M,
  Vb as X,
  Wb as R,
  dc as Y,
  kc as Z,
  lc as _,
  rc as ee,
  si as F,
  xb as G,
  xi as se,
  yb as H,
} from "chunk-DWJUKCZJ.mjs";
import { a as $, c as ne } from "chunk-TXCWPKWI.mjs";
import { b as g, e as j, f as v, h as y } from "chunk-Y3GZLMBF.mjs";
import { b as C } from "chunk-4JY5UMT2.mjs";
import { c as J, i as L } from "chunk-WBI6GGAG.mjs";
var U = class extends Error {
    constructor(o, t) {
      super(`Document version is too low. Expected ${t}, got ${o}.`);
    }
  },
  K = class extends Error {
    constructor(o, t) {
      super(`Document version is too high. Expected ${t}, got ${o}.`);
    }
  };
function Ce(e) {
  if (!he(e) || e === null) throw Error("Invalid document.");
  if (!j(e.version)) throw Error("Unable to read document.version");
  if (!e.root) throw Error("Unable to read document.root");
  if (e.version < T.minimumLegacySerializationVersion)
    throw new U(e.version, T.minimumLegacySerializationVersion);
  if (e.version > O) throw new K(e.version, O);
}
function D(e, o) {
  let t = !1;
  function n(s, c, a) {
    if (!s) return;
    let l = s.id;
    if (a.has(l)) {
      ((t = !0), o && o.push({ id: l, stack: c.slice() }));
      return;
    }
    if ((a.add(l), c.push(l), b(s))) {
      let d = s.getRawControlProps(),
        f = Object.keys(d);
      for (let u of f) {
        let p = d[u];
        if (p) {
          if (p.type === "slot" && y(p.value))
            for (let h of p.value) {
              if (!v(h)) continue;
              let P = h["reference"];
              if (!g(P)) continue;
              let Se = e.get(P);
              n(Se, c, a);
            }
          else if (p.type === "componentinstance" && g(p.value)) {
            let h = e.get(p.value);
            n(h, c, a);
          } else if (y(p.value))
            for (let h of p.value) {
              if (!v(h) || h.type !== "componentinstance") continue;
              let N = h.value;
              if (!g(N)) continue;
              let P = e.get(N);
              n(P, c, a);
            }
        }
      }
    }
    let m = s.children;
    if (m) for (let d of m) n(d, c, a);
    (a.delete(l), c.pop());
  }
  let r = new Set(),
    i = [];
  return (n(e.root, i, r), t);
}
var Le = L("TreeRepair"),
  xe = 100;
function k(e) {
  e.length !== 0 &&
    Le.reportErrorOnceEveryTenMinutes(
      J(new Error("TreeRepair caught errors"), ["TreeRepair caught errors"]),
      { errorCount: e.length, errors: e.slice(0, xe) }
    );
}
function co(e, o, t) {
  Ce(e);
  let n = ge(e),
    r = w(n.root, null, { extraChecksAndFixes: !0, errors: t, warnings: t });
  if (!r) throw Error("Unable to create load document");
  ve(r, t);
  let i = new Map();
  (E(i, t, r, $), ye(i, r, t));
  let s = T.createByAdoptingRoot(r);
  (s.verify(), (s = ae.treeDidLoad(s, o, t).didNonLinearMove(o)));
  let c = [];
  return (
    D(s, c) &&
      (c.forEach((a) => {
        (t.push(`${a.id}: code component links itself via ${a.stack}`), z(s, a.id, a.stack));
      }),
      (s = s.commit(o))),
    s
  );
}
function mo(e, o) {
  ve(e, o);
  let t = new Map();
  (E(t, o, e, $), ye(t, e, o));
}
function W(e, o) {
  let t = new Map();
  (E(t, o, e, e.parentid), ke(t, e, o));
}
function De(e) {
  return Q(e) || q(e);
}
function ve(e, o = []) {
  let t = e.children,
    n = t.find(De);
  n === void 0 &&
    (o.push(`${e.id}: Root does not contain a page`), (n = new me({ id: ue(e) })), t.push(n));
  for (let r = 0; r < t.length; r++) {
    let i = t.at(r);
    if (
      i &&
      !de(i) &&
      !re(i) &&
      !te(i) &&
      !ce(i) &&
      !ee(i) &&
      !Y(i) &&
      !Z(i) &&
      !oe(i) &&
      !pe(i) &&
      !_(i) &&
      !R(i) &&
      !G(i) &&
      !H(i)
    ) {
      if (X(i)) {
        (o.push(`${i.id}: BranchNode is not under BranchesNode`), t.splice(r--, 1));
        let s = e.children.find(R);
        (s || ((s = new fe()), e.children.push(s)),
          s.children.push(i),
          i.setProp("parentid", s.id));
        continue;
      }
      (o.push(`${i.id}: Ground node is not on a page`),
        t.splice(r--, 1),
        n.children.push(i),
        i.setProp("parentid", n.id));
    }
  }
}
function z(e, o, t) {
  let n = e.get(t[t.length - 1]);
  if (!b(n)) return;
  let r = n.getRawControlProps(),
    i = {};
  for (let c in r) {
    let a = r[c];
    if (!a) continue;
    let { type: l, value: m } = a;
    if (l === "slot" && y(m)) {
      let d = m.filter((f) => (v(f) ? f["reference"] !== o : !0));
      d.length !== m.length && (i[c] = { type: "slot", value: d });
    } else if (l === "componentinstance" && m === o) i[c] = { type: "slot", value: [] };
    else if (y(m)) {
      let d = m.filter((f) => (!v(f) || f.type !== "componentinstance" ? !0 : f.value !== o));
      d.length !== m.length && (i[c] = { type: "array", value: d });
    }
  }
  if (le(i)) return;
  let s = se(i);
  n.set(s);
}
function E(e, o, t, n) {
  for (t.setProp("parentid", n); e.has(t.id);)
    (o.push(`${t.id}: duplicate id in document`), (t.id = ne()));
  e.set(t.id, t);
  let r = t.children;
  if (r) for (let i of r) E(e, o, i, t.id);
}
function ye(e, o, t) {
  for (let n of o.walk())
    (C(n.isMutable()),
      b(n) && Te(e, n.id, new Set([n.id]), n, t),
      x(n) && Ne(e, n, n, t),
      A(n) && (be(e, n, t), Ae(e, n, t)),
      M(n) && we(n, t));
}
function ke(e, o, t) {
  for (let n of o.walk()) (C(n.isMutable()), A(n) ? Ae(e, n, t) : M(n) && we(n, t));
}
function Te(e, o, t, n, r) {
  function i(a) {
    if (!g(a)) return !1;
    if (t.has(a)) return (r.push(`${o}: code component links itself via ${n.id}`), !0);
    let l = e.get(a);
    if (!l) return (r.push(`${n.id}: code component has bad link at ${a}`), !0);
    let m = !1;
    for (let d of l.walk())
      t.has(d.id)
        ? (r.push(`${o}: code component links itself via ${n.id} via ${a}`), (m = !0))
        : b(d) && Te(e, o, new Set([...t, d.id]), d, r);
    return m;
  }
  let s = n.getRawControlProps(),
    c = Object.keys(s);
  for (let a of c) {
    let l = s[a];
    if (!F(l)) continue;
    if (l.type === "slot" && y(l.value)) {
      let f = [];
      for (let u = 0; u < l.value.length; u++) {
        let p = l.value[u];
        if (!v(p)) continue;
        let N = p["reference"];
        g(N) && i(N) && f.push(u);
      }
      for (; f.length > 0;) l.value.splice(f.pop(), 1);
      continue;
    }
    if (l.type === "componentinstance" && g(l.value)) {
      if (!i(l.value)) continue;
      l.value = void 0;
      continue;
    }
    let m = l.value;
    if (!Array.isArray(m)) continue;
    let d = [];
    for (let f = 0, u = m.length; f < u; f++) {
      let p = m[f];
      F(p) && p.type === "componentinstance" && g(p.value) && i(p.value) && d.push(f);
    }
    for (; d.length > 0;) m.splice(d.pop(), 1);
  }
}
function B(e) {
  (e.setProp("originalid", null), e.setProp("replicaInfo", null));
}
function Ne(e, o, t, n) {
  for (let r of t.walk())
    if (r !== t && ie(r) && A(r)) {
      let i = be(e, r, n);
      if (!i) continue;
      if (o === i) {
        (n.push(`${o.id}: template component links itself via ${t.id}`), B(r));
        continue;
      }
      Ne(e, o, i, n);
    }
}
function be(e, o, t) {
  let n = o.replicaInfo.master,
    r = e.get(n);
  return r
    ? x(r)
      ? (o.originalid !== n &&
          (t.push(`${o.id}: template originalid doesn't point to master id: ${o.originalid}`),
          o.setProp("originalid", n)),
        r)
      : (t.push(`${o.id}: template references a node that is not a master: ${n}`), B(o), null)
    : (t.push(`${o.id}: template references a master that doesn't exist: ${n}`), B(o), null);
}
function Ae(e, o, t) {
  if (!o.replicaInfo) return;
  let n = o.replicaInfo.inheritsFrom;
  if (!n) return;
  let r = e.get(n);
  r
    ? !x(r) &&
      !A(r) &&
      (t.push(`${o.id}: template references an inherit that isn't a master or a replica: ${n}`),
      (o.replicaInfo.inheritsFrom = void 0))
    : (t.push(`${o.id}: template references an inherit that doesn't exist: ${n}`),
      (o.replicaInfo.inheritsFrom = void 0));
}
function we(e, o) {
  e.originalid &&
    (e.setProp("originalid", null),
    o.push(`${e.id}: removing original id from orphan replica child`));
}
var I = L("remote:verify");
function To(e, o, t, n) {
  let r = e.getPartialDocumentForPageIds(t),
    i = [],
    s = I.isLoggingTraceMessages() ? [] : void 0,
    c = w(r, null, { extraChecksAndFixes: !0, errors: i, warnings: s });
  (V("parsingRootNode"), C(c, () => `error loading root node: ${r.id} ${JSON.stringify(i)}`));
  for (let l of c.children ?? []) l.children && l.children.length > 0 && W(l, i);
  (i.length > 0 &&
    I.warn(
      "errors loading server tree: " +
        i.join(`
`)
    ),
    k(i),
    s &&
      s.length > 0 &&
      I.trace(
        "warnings loading server tree: " +
          s.join(`
`)
      ));
  let a = T.createByAdoptingRoot(c, n);
  return (
    a.loadReplicasAndCodeComponents(a.root),
    V("parsingReplicasExpansion"),
    a.hasUncommittedChanges() && (a = a.commit(o)),
    a
  );
}
function No(e, o) {
  let t = e.parseNextPage();
  if (!t) return !0;
  let n = [],
    r = w(t, e.root.id, { extraChecksAndFixes: !0, errors: n });
  return (
    C(r, () => `error loading page node: ${t.id} ${JSON.stringify(n)}`),
    W(r, n),
    n.length > 0 &&
      I.warn(
        "warnings loading server tree: " +
          n.join(`
`)
      ),
    k(n),
    o.set(r.id, r),
    !1
  );
}
function bo(e, o, t) {
  return (
    e.makeLatest(),
    (e.editClosed = !1),
    (e.isViewOnly = !1),
    e.root.children.forEach((n, r) => {
      let i = t.get(n.id);
      i && (e.remove(i.id), e.insertNode(i, e.root.id, r));
    }),
    (e.inEditor = !1),
    e.loadReplicasAndCodeComponents(e.root),
    e.hasUncommittedChanges() && (e = e.commit(o)),
    (e.inEditor = !0),
    e
  );
}
var S = class e {
    editClosed = !1;
    isViewOnly = !1;
    inEditor = !1;
    processingLocalUserEdits = !1;
    static from(o) {
      let t = new e();
      return (
        (t.editClosed = o.editClosed),
        (t.isViewOnly = o.isViewOnly),
        (t.inEditor = o.inEditor),
        (t.processingLocalUserEdits = o.processingLocalUserEdits),
        t
      );
    }
    restore(o) {
      ((o.editClosed = this.editClosed),
        (o.isViewOnly = this.isViewOnly),
        (o.inEditor = this.inEditor),
        (o.processingLocalUserEdits = this.processingLocalUserEdits));
    }
    static setForAssembly(o) {
      ((o.editClosed = !1),
        (o.isViewOnly = !1),
        (o.inEditor = !1),
        (o.processingLocalUserEdits = !1));
    }
  },
  Ie = class {
    constructor(o, t, n) {
      this.engine = o;
      this.treeToAssemble = t;
      this.pagesToAssemble = Array.from(n.values());
    }
    engine;
    treeToAssemble;
    pagesToAssemble;
    isSetupNeeded = !0;
    engineTreeFlags = new S();
    setupAssemblerTreeStateIfNeeded() {
      this.isSetupNeeded &&
        ((this.isSetupNeeded = !1),
        (this.engineTreeFlags = S.from(this.engine.tree)),
        this.treeToAssemble.isLatest() || this.treeToAssemble.makeLatest(),
        S.setForAssembly(this.treeToAssemble));
    }
    restoreEngineTreeState() {
      this.isSetupNeeded ||
        ((this.isSetupNeeded = !0),
        this.treeToAssemble.hasUncommittedChanges() &&
          (this.treeToAssemble = this.treeToAssemble.commit(this.engine.componentLoader)),
        this.engine.tree.isLatest() || this.engine.tree.makeLatest(),
        this.engineTreeFlags.restore(this.engine.tree));
    }
    assembleOnePage() {
      if (this.pagesToAssemble.length === 0) return !0;
      this.setupAssemblerTreeStateIfNeeded();
      let o = this.pagesToAssemble.pop();
      C(o);
      let t = this.treeToAssemble.root.children.findIndex((n) => n.id === o.id);
      return t < 0
        ? !1
        : (this.treeToAssemble.remove(o.id),
          this.treeToAssemble.insertNode(o, this.treeToAssemble.root.id, t),
          this.treeToAssemble.loadReplicasAndCodeComponents(o),
          (this.treeToAssemble = this.treeToAssemble.commit(this.engine.componentLoader)),
          this.pagesToAssemble.length === 0);
    }
    buildCompleteTree() {
      (C(this.pagesToAssemble.length === 0, "must be done with assembleOnePage"),
        this.setupAssemblerTreeStateIfNeeded(),
        this.treeToAssemble.loadReplicasAndCodeComponents(this.treeToAssemble.root),
        this.treeToAssemble.hasUncommittedChanges() &&
          (this.treeToAssemble = this.treeToAssemble.commit(this.engine.componentLoader)),
        this.treeToAssemble.verify());
      let o = [],
        t = [];
      return (
        D(this.treeToAssemble, t) &&
          (t.forEach((n) => {
            (o.push(`${n.id}: code component links itself via ${n.stack}`),
              z(this.treeToAssemble, n.id, n.stack));
          }),
          (this.treeToAssemble = this.treeToAssemble.commit(this.engine.componentLoader))),
        o.length > 0 &&
          I.warn(
            "warnings loading server tree: " +
              o.join(`
`)
          ),
        k(o),
        this.engineTreeFlags.restore(this.treeToAssemble),
        this.treeToAssemble
      );
    }
  };
export {
  D as a,
  k as b,
  co as c,
  mo as d,
  W as e,
  z as f,
  To as g,
  No as h,
  bo as i,
  S as j,
  Ie as k,
};
//# sourceMappingURL=chunk-CM2MOVMB.mjs.map
