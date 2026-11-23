import {
  Ba as ue,
  Vd as A,
  _a as pe,
  cb as me,
  gd as ye,
  hd as j,
  if as Ie,
  jd as ge,
  kc as ve,
  l as ce,
  oc as he,
  pd as Ce,
  rd as b,
  sd as Ne,
  ua as le,
  ud as K,
  vd as S,
  wd as O,
} from "chunk-3F2A4VNK.mjs";
import { c as g, r as I } from "chunk-E5B536XW.mjs";
import {
  Bg as te,
  E as Q,
  Ng as re,
  Vn as F,
  Yf as R,
  dm as se,
  fg as ne,
  fm as de,
  ie as E,
  km as fe,
  lm as ae,
  ub as ee,
} from "chunk-GA7KAPYJ.mjs";
import {
  Bj as oe,
  Cf as T,
  lj as ie,
  nb as X,
  sb as Y,
  ue as Z,
  vf as D,
  zf as y,
} from "chunk-VHPQNF2H.mjs";
import { a as h } from "chunk-SMHMQ5IL.mjs";
import { g as _ } from "chunk-ARJ7WQTJ.mjs";
import { b as N } from "chunk-4JY5UMT2.mjs";
function We(e, n) {
  if (e.master !== n.master || e.inheritsFrom !== n.inheritsFrom) return !1;
  let t = e.overrides,
    r = n.overrides;
  if (t === r) return !0;
  if (!t || !r) return !1;
  let i = Object.keys(t),
    o = Object.keys(r);
  if (i.length !== o.length) return !1;
  for (let s of i) {
    let d = t[s],
      f = r[s];
    if (d !== f && (!d || !f || !qe(d, f))) return !1;
  }
  return !0;
}
function qe(e, n) {
  let t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (let i of t) if (!L(i, e[i], n[i])) return !1;
  return !0;
}
function Pe(e) {
  return e instanceof R ? e.toJS() : e;
}
function Me(e, n) {
  return h(Pe(e), Pe(n));
}
function L(e, n, t) {
  return n === t
    ? !0
    : !n || !t
      ? n !== n && t !== t
      : e === "replicaInfo"
        ? We(n, t)
        : e === "styledText"
          ? Me(n, t)
          : h(n, t);
}
function De(e) {
  return e === "_deleted" ? "__deleted" : e;
}
function w(e) {
  return e === "__deleted" ? "_deleted" : e;
}
function Se(e, n) {
  let { _deleted: t, ...r } = e,
    i = {};
  for (let o in r) i[w(o)] = r[o];
  for (let o of t ?? []) i[o] = n;
  return i;
}
function Ue(e, n) {
  return `override/${e}/${n}`;
}
function k(e) {
  return e.startsWith("override/");
}
function W(e) {
  let [n, t, r] = e.split("/");
  return n !== "override" || !t || !r ? [void 0, void 0] : [t, r];
}
function q(e, n, t, r) {
  let i = n.replicaInfo;
  if (!i) return null;
  let o = i.overrides,
    s = o[t],
    d = s ? void 0 : {};
  for (let a in r)
    a !== "_deleted" &&
      (L(a, s?.[a], r[a]) ||
        (d || (d = { ...s }),
        a === "masks"
          ? (d[w(a)] = O(r[a]))
          : a === "styledText"
            ? (d[w(a)] = S(r[a]))
            : (d[w(a)] = b(r[a]))));
  let f = r._deleted;
  if (f && s) for (let a of f) s[a] !== void 0 && (d || (d = { ...s }), delete d[a]);
  if (!d) return null;
  let c = n.asDraft(e),
    u = { ...o };
  return (
    oe(d) ? delete u[t] : (u[t] = d),
    c.setProp("replicaInfo", { ...i, overrides: u }),
    (c.cache.rebuildReplica = !0),
    c
  );
}
function gn(e, n, t) {
  let r = n.replicaInfo;
  if (!r) return;
  let i = r.overrides;
  if (!i?.[t]) return;
  let o = { ...i };
  delete o[t];
  let s = n.asDraft(e);
  return (s.setProp("replicaInfo", { ...r, overrides: o }), (s.cache.rebuildReplica = !0), s);
}
function Te(e, n) {
  return e === "styledText" && n?.toJS ? n.toJS() : n;
}
function Re(e, n, t, r, i) {
  return n === t || ((n = Te(e, n)), (t = Te(e, t)), h(n, t))
    ? !1
    : (n === void 0 ? (r._deleted || (r._deleted = []), r._deleted.push(e)) : (r[De(e)] = n),
      t === void 0 ? (i._deleted || (i._deleted = []), i._deleted.push(e)) : (i[De(e)] = t),
      !0);
}
function be(e, n, t, r) {
  let i = !1,
    o = {},
    s = {};
  for (let d in r) i = Re(d, t[d], r[d], s, o) || i;
  for (let d in t) d in r || (i = Re(d, t[d], r[d], s, o) || i);
  if (i) return { id: Ue(e, n), from: s, to: o };
}
function Oe(e, n, t) {
  if (!(y(n) || y(t))) return;
  let r = n ? n.id : t ? t.id : "",
    i = n?.replicaInfo?.overrides ?? {},
    o = t?.replicaInfo?.overrides ?? {};
  for (let s in o) {
    let d = o[s];
    if (!d) continue;
    let f = be(r, s, i[s] ?? {}, d);
    f && e.push(f);
  }
  for (let s in i) {
    if (o[s]) continue;
    let d = i[s];
    if (!d) continue;
    let f = be(r, s, d, {});
    f && e.push(f);
  }
}
function ze(e, n) {
  return !(e.master !== n.master || e.inheritsFrom !== n.inheritsFrom);
}
function we(e) {
  return e instanceof R ? e.toJS() : e;
}
function Ge(e, n) {
  return h(we(e), we(n));
}
function M(e, n, t) {
  return n === t
    ? !0
    : !n || !t
      ? n !== n && t !== t
      : e === "replicaInfo"
        ? ze(n, t)
        : e === "styledText"
          ? Ge(n, t)
          : h(n, t);
}
function U(e, n) {
  if (e === "replicaInfo") {
    let t = n;
    return (
      t &&
      (t.inheritsFrom ? { master: t.master, inheritsFrom: t.inheritsFrom } : { master: t.master })
    );
  }
  if (e === "styledText") {
    let t = n;
    return t && t.toJS();
  }
  return n;
}
function ke(e) {
  return e.startsWith("$");
}
function z(e) {
  if (e instanceof I) return e;
  if (Z(e)) return new I({ ...e });
  if (Array.isArray(e)) return e.map(z);
  if (_(e) && e.constructor === Object) {
    let n = Ie(e),
      t = {};
    for (let r in n) t[r] = z(n[r]);
    return t;
  }
  return e;
}
var Je = ["closure", "save", "transient"];
function $e(e) {
  return Je.some((n) => n === e);
}
function Be(e, n) {
  return $e(e) && _(n) && !(n instanceof I) ? new I(n) : z(n);
}
function xe(e) {
  let n = { ...e };
  for (let t in e) Reflect.set(n, t, Be(t, e[t]));
  return n;
}
var _e = new Set(["html", "textContent", "htmlContent"]);
function B(e, n, t, r, i) {
  if (!je(r)) return null;
  let o = e.get(r.parentid);
  if (!o || (F(o) && !o.isLoaded())) return null;
  let s = Fe(e, n, t, r);
  return (e.insertNode(s, r.parentid, i), s);
}
function Fe(e, n, t, r) {
  let i = ye(t);
  if (!i) throw new Error("Unknown node class: " + t);
  let o = r.replicaInfo;
  if (o) {
    let s = e.get(o.master);
    if (!s || !D(s)) throw Error("broken diff, replica without master: " + n + " " + o.master);
    let d = K(o);
    return re.create(e, s, {
      overrides: d?.overrides,
      owner: n,
      inheritsFrom: d?.inheritsFrom,
      duplicatedFrom: r.duplicatedFrom,
      fromDiff: !0,
    });
  }
  return ge(i)
    ? (N(ue(n), "Invalid EntityReferenceNode ID: " + n), new i({ ...J(r), id: n }))
    : new i({ ...J(r), id: n });
}
function je(e) {
  return e != null && typeof e.parentid == "string";
}
function Ke(e, n) {
  e.has(n) && e.remove(n);
}
function Ae(e, n) {
  return e === "guidesX" || e === "guidesY"
    ? Ne(n)
    : (Q(e) || e === "formSelectOptions") && Array.isArray(n)
      ? n
      : e === "replicaInfo"
        ? K(n)
        : te(e) || ne(e) || Ce(e)
          ? n
          : e === "masks"
            ? O(n)
            : e === "styledText"
              ? S(n)
              : b(n);
}
function J(e) {
  let n = {};
  for (let t in e) t !== "_deleted" && (n[t] = Ae(t, e[t]));
  return n;
}
function P(e, n, t, r = !1) {
  let i = e.get(n);
  if (!i) return null;
  let o = t.to;
  if (o.parentid && i.parentid !== o.parentid) {
    if (!e.get(o.parentid)) return (e.remove(n), null);
    e.move(n, o.parentid, t.position);
  } else t.position !== t.fromPosition && e.move(n, i.parentid, t.position);
  let s = He(e, i, o, r);
  return (s && o.replicaInfo && y(s) && (s.cache.rebuildReplica = !0), s);
}
function Ee(e, n, t) {
  e.setProp(n, t);
}
function He(e, n, t, r = !1) {
  let i = null,
    o = X(n),
    s = !1,
    d = !1;
  for (let c in t) {
    if (c === "_deleted") continue;
    let u = c;
    if (u === "id" || u === "__class") continue;
    let a = t[c];
    if (c === "replicaInfo" && a) {
      let p = n.replicaInfo;
      if (p?.master === a.master && p?.inheritsFrom === a.inheritsFrom) continue;
      a = { ...a, overrides: p?.overrides ?? {} };
    }
    if (M(c, n[u], a)) continue;
    i || (i = n.asDraft(e));
    let l = A.reviveProperty(c, a);
    (c.startsWith("$") ? i.setProp(c, l) : Ee(i, u, l), (s ||= o && E(c)), (d ||= _e.has(c)));
  }
  let f = t._deleted;
  if (f)
    for (let c of f) {
      let u = c;
      u === "id" ||
        u === "__class" ||
        (n[u] !== void 0 &&
          (i || (i = n.asDraft(e)),
          ke(c) ? i.deleteProp(c) : r ? i.resetToDefault(c) : Ee(i, u, void 0),
          (s ||= o && E(c)),
          (d ||= _e.has(c))));
    }
  return (i && d && Y(i) && i.cache.resetContent(), s && n.cache.controlPropVersion++, i);
}
function $(e, n, t) {
  let r = t.replicaInfo;
  if (r?.master) {
    let o = e.get(r.master);
    if (!o || !D(o)) return !0;
  }
  if (r?.inheritsFrom) {
    let o = e.get(r.inheritsFrom);
    if (!o || !(y(o) || D(o))) return !0;
  }
  if (!t.parentid) return !1;
  let i = t.parentid ? e.get(t.parentid) : void 0;
  return i ? e.isAncestorOfNode(i, n) : !0;
}
function Ve(e, n) {
  let t = e.length;
  if (t !== n.length) return !1;
  for (let r = 0; r < t; r++) if (e.at(r).id !== n[r]) return !1;
  return !0;
}
function Xe(e, n, t) {
  if (Ve(n.children, t)) return;
  let r = [];
  for (let s = 0, d = t.length; s < d; s++) {
    let f = e.get(t[s]);
    f && f.parentid === n.id && r.push(f);
  }
  let i = new Set(t),
    o = n.children;
  for (let s of o) i.has(s.id) || r.push(s);
  Ye(o, r) || n.asDraft(e).setProp("children", new ie(r));
}
function Ye(e, n) {
  return e.length !== n.length ? !1 : e.every((t, r) => n[r] === t);
}
function x(e, n, t) {
  if (!e) return;
  if (t) for (let o of t) o !== "_deleted" && delete e[o];
  if (!n) return;
  let r = [];
  for (let o of n) e[o] !== void 0 && r.push(o);
  if (r.length === n.length) {
    t || delete e._deleted;
    return;
  }
  let i = new Set(n);
  for (let o of r) i.delete(o);
  if (t) for (let o of t) i.add(o);
  i.size === 0 ? delete e._deleted : (e._deleted = Array.from(i));
}
function st(e, n) {
  N(e.id === n.id, "must be the same id");
  let t = e.to._deleted,
    r = n.to._deleted;
  if ((Object.assign(e.to, n.to), x(e.to, t, r), e.from && n.from)) {
    let i = e.from._deleted,
      o = n.from._deleted;
    (Object.assign(e.from, n.from, { ...e.from }), x(e.from, o, i));
  }
  (n.diffOverrides && (e.diffOverrides = n.diffOverrides),
    n.toChildren && (e.toChildren = n.toChildren),
    n.position !== void 0 && (e.position = n.position),
    n.fromPosition !== void 0 && e.fromPosition === void 0 && (e.fromPosition = n.fromPosition),
    n.removed
      ? (delete e.added, (e.removed = n.removed))
      : n.added && ((e.added = n.added), delete e.removed),
    n.previousScope && (e.previousScope = n.previousScope));
}
function dt(e) {
  let n = {},
    t = new Set();
  for (let r of e)
    for (let i of r.changes) {
      let o = n[i.id];
      if (!o)
        ((o = { ...i }),
          (o.to = { ...i.to }),
          (o.from = { ...i.from }),
          (n[i.id] = o),
          i.added && t.add(i.id));
      else {
        let s = o.to?._deleted,
          d = i.to?._deleted;
        (Object.assign(o.to, i.to), x(o.to, s, d));
        let f = o.from?._deleted,
          c = i.from?._deleted;
        (Object.assign(o.from, i.from, { ...o.from }),
          x(o.from, c, f),
          i.diffOverrides && (o.diffOverrides = i.diffOverrides),
          !o.fromChildren && i.fromChildren && (o.fromChildren = i.fromChildren),
          i.toChildren && (o.toChildren = i.toChildren),
          i.position !== void 0 && (o.position = i.position),
          o.fromPosition === void 0 &&
            i.fromPosition !== void 0 &&
            (o.fromPosition = i.fromPosition),
          i.removed
            ? t.has(i.id)
              ? delete n[i.id]
              : (delete o.added, (o.removed = i.removed))
            : i.added && ((o.added = i.added), delete o.removed));
      }
    }
  return Object.values(n);
}
function Qe(e, n) {
  let t = [];
  for (let r = 0, i = n.length; r < i; r++) {
    let o = n[r];
    if (!o.to.parentid) continue;
    let s = e.get(o.id);
    s && t.push(s.parentid);
  }
  return t;
}
function Ze(e, n, t) {
  if (!n.to.parentid) return;
  let r = e.get(n.id);
  if (!r) return;
  let i = t.indexOf(r.parentid);
  i !== -1 && t.splice(i, 1);
}
function ft(e, n) {
  e.lineage.withoutEditHooks(() => {
    e.applyingDiffs = !0;
    try {
      let t = n,
        r = Qe(e, n);
      for (; n.length > 0;) {
        let i = [];
        for (let o = 0, s = n.length; o < s; o++) {
          let d = n[o],
            f = d.id;
          d.added
            ? $(e, d.id, d.to)
              ? i.push(d)
              : e.has(f)
                ? P(e, f, d)
                : B(e, f, d.added, d.to, d.position)
            : d.removed || ($(e, d.id, d.to) ? i.push(d) : (Ze(e, d, r), P(e, f, d)));
        }
        if (i.length === 0 || i.length === n.length) break;
        n = i;
      }
      for (let i = 0, o = t.length; i < o; i++) {
        let s = t[i],
          d = s.toChildren;
        if (!d || d.length === 0) continue;
        let f = e.get(s.id);
        if (f) {
          if (!f.children) throw Error("assertion failure: node has no children");
          Xe(e, f, d);
        }
      }
      for (let i = 0, o = t.length; i < o; i++) {
        let s = t[i];
        s.removed && Ke(e, s.id);
      }
      for (let i = 0, o = t.length; i < o; i++) {
        let s = t[i];
        if (!k(s.id)) continue;
        let [d, f] = W(s.id);
        if (!d || !f) continue;
        let c = e.get(d);
        c && q(e, c, f, s.to);
      }
    } finally {
      e.applyingDiffs = !1;
    }
  });
}
function at(e, n, t, r = !1) {
  let i = on(n, t, r);
  return (i && e.push(i), Oe(e, n, t), i);
}
var en = new Set([...ee, "id", "children", "_deleted"]),
  nn = { parentid: !0, replicaInfo: !0, originalid: !0, duplicatedFrom: !0 };
function tn(e, n) {
  let t = e.length;
  if (t !== n.length) return !1;
  for (let r = 0; r < t; r++) if (e.at(r).id !== n.at(r).id) return !1;
  return !0;
}
function rn(e, n, t) {
  (n && t && tn(n, t)) ||
    (n && (e.fromChildren = n.map((r) => r.id)), t && (e.toChildren = t.map((r) => r.id)));
}
function on(e, n, t = !1) {
  let i = { id: n ? n.id : e ? e.id : "", from: {}, to: {} };
  if (n)
    if (e) {
      if (T(n)) return;
    } else {
      if (T(n)) return;
      let s = n.__class;
      ((e = j(s)), (i.added = s));
    }
  else {
    if (!e) throw Error("assertion failed: at least one node must be given");
    if (T(e)) return;
    let s = e.__class;
    ((n = j(s)), (i.removed = s));
  }
  let o = sn(e, n, i);
  if ((t && (delete i.to.parentid, delete i.from.parentid), !!o))
    return (
      (n instanceof fe ||
        n instanceof ae ||
        (n instanceof de && (i.added || i.removed || !i.to.codeComponentIdentifier)) ||
        n instanceof se ||
        n instanceof he ||
        (i.added && n instanceof le) ||
        (i.added && n instanceof ce) ||
        (i.added && n instanceof ve) ||
        n instanceof pe ||
        n instanceof me) &&
        (i.ignoreInUndo = !0),
      i
    );
}
function sn(e, n, t) {
  let r = t.from,
    i = t.to,
    o = y(e) || y(n),
    s = !1,
    d = new Set([...n.keys(), ...e.keys()]);
  for (let f of d) {
    if (o) {
      if (!(f in nn)) continue;
    } else {
      if (f === "children") {
        (rn(t, e.children, n.children), (t.fromChildren || t.toChildren) && (s = !0));
        continue;
      }
      if (en.has(f)) continue;
    }
    let c = f,
      u = e[c],
      a = n[c];
    M(f, u, a) ||
      (u === void 0 ? (r._deleted || (r._deleted = []), r._deleted.push(f)) : (r[f] = U(f, u)),
      a === void 0 ? (i._deleted || (i._deleted = []), i._deleted.push(f)) : (i[f] = U(f, a)),
      (s = !0));
  }
  if (!(!s && !t.added && !t.removed)) return t;
}
A.setGeneric("reviveProperty", Ae);
function G(e, n, t) {
  if (e.removed) {
    n.remove(e.id);
    return;
  }
  if (e.added) {
    if (!je(e.to)) return;
    if (!n.has(e.id)) {
      let d = Fe(n.getCanvasTreeProxy(), e.id, e.added, e.to);
      n.insertNode(d, e.to.parentid, e.position);
      return;
    }
  }
  if (e.to.parentid || e.position !== e.fromPosition) {
    let d = t.getParentId(e.id);
    if (d === g) return;
    let f = e.to.parentid ?? d;
    f && f !== g && t.moveNode(e.id, f, e.position);
  }
  let { _deleted: r, parentid: i, ...o } = e.to,
    s = n.getAnyNode(e.id);
  if (s) {
    for (let d of r ?? []) o[d] = void 0;
    s.set(J(o));
  }
}
function dn(e, n, t, r, i) {
  let o = n.to.parentid;
  if (!o) return !1;
  let s = e.get(o);
  return !s || (F(s) && !s.isLoaded()) || t.getParentId(n.id) === g
    ? !1
    : H(e, n.id, o, n.position, t, r, n.to, i);
}
function H(e, n, t, r, i, o, s, d) {
  if (e.has(n)) return !0;
  let f = i.getObject(n);
  if (!f || typeof f.__class != "string") return !1;
  let { children: c, parentid: u, id: a, ...l } = f,
    p = { ...l, ...s, ...d?.getEditedNodeFor(n), parentid: t };
  if (!B(e, n, f.__class, p, r)) return !1;
  for (let m of i.getChildrenIds(n))
    o.has(m) || (i.getParentId(m) !== g && H(e, m, n, void 0, i, o, void 0, d));
  return !0;
}
function fn(e, n, t, r) {
  let i = new Set(),
    o = new Set();
  for (let d of n) (o.add(d.id), d.added && (e.has(d.id) || i.add(d.id)));
  let s = (d) => {
    if (!r) return !1;
    let f = r.get(d);
    if (!f) return !1;
    let c = r.getScopeNodeFor(f)?.id;
    if (!c) return !1;
    let u = e.get(c);
    return u != null && !u.isLoaded();
  };
  for (let d of n) {
    if (!d.removed || e.has(d.id) || r?.get(d.id)) continue;
    let f = t.getParentId(d.id);
    f === void 0 || f === g || t.removeNode(d.id);
  }
  for (let d of i)
    for (let f of t.getChildrenIds(d)) o.has(f) || e.has(f) || s(f) || t.removeNode(f);
}
function an(e, n, t, r, i) {
  e.applyingDiffs = !0;
  let o = i?.transient === !0;
  t && !o && fn(e, n, t, r);
  let s = new Set(),
    d = new Set();
  for (let a of n) (a.added && d.add(a.id), (a.added || a.to.parentid) && s.add(a.id));
  let f = n,
    c = new Set(),
    u = n.filter((a) => !k(a.id));
  for (; u.length > 0;) {
    let a = [];
    for (let l of u) {
      let p = l.id;
      if (c.has(p)) {
        if (!l.added) continue;
        c.delete(p);
      }
      if (t && r && !e.has(p))
        if (l.added) {
          let m = r.get(l.to.parentid);
          if (!m) {
            a.push(l);
            continue;
          }
          let v = r.getScopeNodeFor(m)?.id,
            C = e.get(v);
          if (C && !C.isLoaded()) {
            (d.delete(p), o || G(l, r, t));
            continue;
          }
        } else if (l.removed) {
          (c.add(p), o || G(l, r, t));
          continue;
        } else if (l.to.parentid && !e.has(l.to.parentid) && d.has(l.to.parentid)) {
          a.push(l);
          continue;
        } else if (dn(e, l, t, s, r)) {
          P(e, p, l, !0);
          continue;
        } else {
          o || G(l, r, t);
          continue;
        }
      if (l.removed) {
        (Ke(e, p), c.add(p));
        continue;
      }
      if ($(e, l.id, l.to)) {
        a.push(l);
        continue;
      }
      if (l.added) {
        if ((d.delete(p), e.has(p))) P(e, p, l, !0);
        else if (B(e, p, l.added, l.to, l.position) && t && !o)
          for (let v of t.getChildrenIds(p))
            s.has(v) || (t.getParentId(v) !== g && H(e, v, p, void 0, t, s, void 0, r));
      } else P(e, p, l, !0);
    }
    if (a.length === 0 || a.length === u.length) break;
    u = a;
  }
  for (let a of f) {
    if (c.has(a.id) || !k(a.id)) continue;
    let [l, p] = W(a.id);
    if (!l || !p) continue;
    let m = e.get(l);
    if (!m && o) continue;
    let v = m ? null : r?.get(l),
      C = m ?? v;
    if (!C) {
      N(t, "Store must be defined to write data-only changes");
      let Le = xe(Se(a.to, g));
      t.updateNestedObject([l, "replicaInfo", "overrides", p], Le);
      continue;
    }
    let V = m ? e : r?.getCanvasTreeProxy();
    (N(V), q(V, C, p, a.to));
  }
  e.applyingDiffs = !1;
}
function ct(e, n, t, r, i) {
  let o = n
    .map((s) => {
      let d = s.id,
        f = s.added,
        c = s.removed,
        u = s.to,
        a = s.from;
      if (!a) throw Error("Changes cannot be reversed if they lack the 'from' field.");
      let l = s.diffOverrides,
        p = s.previousScope,
        m = s.fromPosition,
        v = s.position;
      return {
        id: d,
        added: c,
        removed: f,
        to: a,
        from: u,
        position: m,
        fromPosition: v,
        diffOverrides: l,
        previousScope: p,
      };
    })
    .reverse();
  an(e, o, t, r, i);
}
export {
  Se as a,
  k as b,
  W as c,
  q as d,
  gn as e,
  Oe as f,
  ke as g,
  Be as h,
  xe as i,
  J as j,
  He as k,
  st as l,
  dt as m,
  ft as n,
  at as o,
  on as p,
  an as q,
  ct as r,
};
//# sourceMappingURL=chunk-G3U73OK6.mjs.map
