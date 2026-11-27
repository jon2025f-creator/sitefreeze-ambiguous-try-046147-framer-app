import { a as I, b as g } from "chunk-FN3PMT3K.mjs";
import { B as x, C as A, v as O, x as h, y as K } from "chunk-RJVD5SHM.mjs";
var N = "codemark",
  k = 100,
  C = new A(N);
function m(t, n) {
  var e, r;
  return "schema" in t
    ? (e = n?.markType) !== null && e !== void 0
      ? e
      : t.schema.marks.code
    : (r = n?.markType) !== null && r !== void 0
      ? r
      : t.state.schema.marks.code;
}
function S(t, n) {
  return t.resolve(Math.min(Math.max(1, n), t.nodeSize - 2));
}
function R(t, n, e, r) {
  var o;
  let c = t.isInSet(
      (o = n.state.storedMarks) !== null && o !== void 0 ? o : n.state.doc.resolve(e).marks()
    ),
    a = n.state.doc.rangeHasMark(e, r, t);
  return !!(c || a);
}
var $ = {
    match: /`((?:[^`\w]|[\w])+)`$/,
    handler: (t, n, e, r, o, c, a, i) => {
      if (R(t, n, o, c)) return !1;
      let s = r[1],
        d = t.create(i),
        u = o + s.length,
        l = n.state.tr.delete(o, c).insertText(s).addMark(o, u, d),
        f = l.setSelection(h.create(l.doc, u)).removeStoredMark(t),
        M = f.setMeta(a.input, { transform: f, from: o, to: c, text: r[0] });
      return (n.dispatch(M), !0);
    },
  },
  _ = {
    match: /^`((?:[^`\w]|[\w])+)`/,
    handler: (t, n, e, r, o, c, a, i) => {
      if (R(t, n, o, c)) return !1;
      let s = t.create(i),
        d = r[1],
        u = o,
        l = n.state.tr
          .delete(o, c)
          .insertText(d)
          .addMark(o, o + d.length, s),
        f = l.setSelection(h.create(l.doc, u)).addStoredMark(s),
        M = f.setMeta(a.input, { transform: f, from: o, to: c, text: `\`${d}${e}` });
      return (n.dispatch(M), !0);
    },
  };
function D(t, n, e, r, o, c, a) {
  if (n.composing) return !1;
  let { state: i } = n,
    s = i.doc.resolve(e);
  if (s.parent.type.spec.code) return !1;
  let d = "\uFFFC",
    u = s.parent.textBetween(Math.max(0, s.parentOffset - k), s.parentOffset, void 0, d) + o,
    l =
      o +
      s.parent.textBetween(
        s.parentOffset,
        Math.min(s.parent.nodeSize - 2, s.parentOffset + k),
        void 0,
        d
      ),
    f = $.match.exec(u),
    M = _.match.exec(l);
  if (f) {
    let y = $.handler(t, n, o, f, e - f[0].length + o.length, r, c, a);
    if (y) return y;
  }
  return M ? _.handler(t, n, o, M, e, r + M[0].length - o.length, c, a) : !1;
}
function B(t, n) {
  n || (n = {});
  let e = new x({
    isInputRules: !0,
    state: {
      init: () => null,
      apply(r, o) {
        let c = r.getMeta(e);
        return c || (r.selectionSet || r.docChanged ? null : o);
      },
    },
    props: {
      handleDOMEvents: {
        compositionend(r) {
          return (
            setTimeout(() => {
              if (r.isDestroyed) return;
              let { $cursor: o } = r.state.selection;
              if (!o) return;
              let c = m(r, n);
              D(c, r, o.pos, o.pos, "", { input: e, cursor: t }, n.attrs);
            }),
            !1
          );
        },
      },
      handleTextInput(r, o, c, a) {
        let i = m(r, n);
        return D(i, r, o, c, a, { input: e, cursor: t }, n.attrs);
      },
    },
  });
  return e;
}
function p(t, n, e = "next") {
  let r = { action: e };
  return (t.dispatch(t.state.tr.setMeta(n, r)), !1);
}
function L(t, n, e, r, o) {
  if (t.state.selection.empty || e.metaKey || e.shiftKey || e.altKey || e.ctrlKey) return !1;
  let { from: c, to: a } = t.state.selection;
  if (a - c >= k || t.state.doc.rangeHasMark(c, a, r)) return !1;
  let i = t.state.tr.addMark(c, a, r.create(o)),
    s = i.setSelection(h.create(i.doc, a)).removeStoredMark(r);
  return (t.dispatch(s), !0);
}
function X(t, n, e, r, o) {
  var c;
  if (e.metaKey) return p(t, n);
  if (e.shiftKey || e.altKey || e.ctrlKey) return !1;
  let { selection: a, doc: i } = t.state;
  if (!a.empty) return !1;
  let s = n.getState(t.state),
    d = a.$from,
    u = !!r.isInSet(d.marks()),
    l = !!r.isInSet((c = d.marksAcross(S(i, a.from + 1))) !== null && c !== void 0 ? c : []);
  return d.pos === t.state.doc.nodeSize - 3 && d.parentOffset === d.parent.nodeSize - 2 && s?.active
    ? (t.dispatch(t.state.tr.removeStoredMark(r)), !0)
    : u === l && d.parentOffset !== 0
      ? !1
      : u && (!s?.active || s.side === -1) && d.parentOffset !== 0
        ? (t.dispatch(t.state.tr.removeStoredMark(r)), !0)
        : l && s?.side === -1
          ? (t.dispatch(t.state.tr.addStoredMark(r.create(o))), !0)
          : !1;
}
function H(t, n, e, r, o) {
  if (X(t, n, e, r, o)) return !0;
  let { selection: a } = t.state,
    i = a.$from;
  return a.empty && i.parentOffset === i.parent.nodeSize - 2 ? p(t, n) : !1;
}
function U(t, n, e, r, o) {
  var c;
  if (e.metaKey) return p(t, n);
  if (e.shiftKey || e.altKey || e.ctrlKey) return !1;
  let { selection: a, doc: i } = t.state,
    s = n.getState(t.state),
    d = !!r.isInSet(a.$from.marks()),
    u = !!r.isInSet(
      (c = S(i, a.empty ? a.from - 1 : a.from + 1).marks()) !== null && c !== void 0 ? c : []
    );
  if (d && s?.side === -1 && a.$from.parentOffset === 0) return !1;
  if (s?.side === 0 && a.$from.parentOffset === 0)
    return (t.dispatch(t.state.tr.removeStoredMark(r)), !0);
  if (d && u && s?.side === 0) return (t.dispatch(t.state.tr.addStoredMark(r.create(o))), !0);
  if ((d && !u && s?.active && a.$from.parentOffset === 0) || (!d && s?.active && s?.side === 0))
    return (t.dispatch(t.state.tr.removeStoredMark(r)), !0);
  if (d === u) return !1;
  if (u || (!a.empty && d)) {
    let l = a.empty ? a.from - 1 : a.from,
      f = t.state.tr.setSelection(h.create(i, l));
    return (
      !a.empty && u ? t.dispatch(f.addStoredMark(r.create(o))) : t.dispatch(f.removeStoredMark(r)),
      !0
    );
  }
  if ((u || (!a.empty && d)) && !s?.active) {
    let l = a.empty ? a.from - 1 : a.from;
    return (t.dispatch(t.state.tr.setSelection(h.create(i, l)).removeStoredMark(r)), !0);
  }
  if (d && !s?.active && a.$from.parentOffset > 0)
    return (
      t.dispatch(t.state.tr.setSelection(h.create(i, a.from - 1)).addStoredMark(r.create(o))),
      !0
    );
  if (d && !u && s?.active && s.side !== -1)
    return (t.dispatch(t.state.tr.addStoredMark(r.create(o))), !0);
  if (d && !u && s?.active) {
    let l = a.from - 1;
    return (t.dispatch(t.state.tr.setSelection(h.create(i, l)).addStoredMark(r.create(o))), !0);
  }
  return !1;
}
function v(t, n, e, r, o) {
  if (U(t, n, e, r, o)) return !0;
  let { selection: a } = t.state,
    i = a.$from,
    s = n.getState(t.state);
  return i.pos === 1 && i.parentOffset === 0 && s?.side === -1
    ? !0
    : a.empty && i.parentOffset === 0
      ? p(t, n)
      : !1;
}
function P(t, n, e, r) {
  if (e.metaKey || e.shiftKey || e.altKey || e.ctrlKey) return !1;
  let { selection: o, doc: c } = t.state,
    a = S(c, o.from - 1),
    i = !!r.isInSet(a.marks()),
    s = a.parentOffset === 0,
    d = !!r.isInSet(S(c, o.to + 1).marks());
  if ((!i || s) && !d) return p(t, n);
  let u = n.getState(t.state);
  if (o.empty && u?.side === -1) {
    let l = t.state.tr.delete(o.from - 1, o.from);
    return (t.dispatch(l), !0);
  }
  return !1;
}
function z(t, n, e, r) {
  if (e.metaKey || e.shiftKey || e.altKey || e.ctrlKey) return !1;
  let { selection: o, doc: c } = t.state,
    a = !!r.isInSet(o.$from.marks()),
    i = o.$from.parentOffset === 0,
    s = !!r.isInSet(S(c, o.to + 2).marks());
  return (!a || i) && !s ? p(t, n) : !1;
}
function E(t, n) {
  var e, r;
  if (!t) return null;
  let { selection: o, doc: c } = t;
  if (!o.empty) return null;
  let a = !!n.isInSet((e = t.storedMarks) !== null && e !== void 0 ? e : []),
    i = !!n.isInSet(o.$from.marks()),
    s = !!n.isInSet((r = S(c, o.from + 1).marks()) !== null && r !== void 0 ? r : []),
    d = o.$from.parentOffset === 0;
  return i !== s || (!i && a !== i) || (i && d) ? t.tr.removeStoredMark(n) : null;
}
function j() {
  let t = document.createElement("span");
  return (t.classList.add("fake-cursor"), t);
}
function F(t) {
  t || (t = {});
  let n = new x({
    key: C,
    appendTransaction: (e, r, o) => {
      var c;
      let a = n.getState(r),
        i = (c = e[0]) === null || c === void 0 ? void 0 : c.getMeta(n);
      return a?.next || i?.action === "click" ? E(o, m(o, t)) : null;
    },
    state: {
      init: () => null,
      apply(e, r, o, c) {
        var a;
        let i = e.getMeta(n);
        if (i?.action === "next") return { next: !0 };
        let s = m(c, t),
          d = s.isInSet(
            (a = c.storedMarks) !== null && a !== void 0
              ? a
              : c.doc.resolve(e.selection.from).marks()
          ),
          u = s.isInSet(c.doc.resolve(e.selection.from).marks()),
          l = s.isInSet(S(c.doc, e.selection.from + 1).marks()),
          f = e.selection.$from.parentOffset === 0;
        return e.selection.empty
          ? !d && l && (!u || f)
            ? { active: !0, side: -1 }
            : d && (!u || f)
              ? { active: !0, side: 0 }
              : !d && u && !l
                ? { active: !0, side: 0 }
                : d && u && !l
                  ? { active: !0, side: -1 }
                  : null
          : null;
      },
    },
    props: {
      attributes: (e) => {
        var r;
        let { active: o = !1 } = (r = n.getState(e)) !== null && r !== void 0 ? r : {};
        return Object.assign({}, o ? { class: "no-cursor" } : {});
      },
      decorations: (e) => {
        var r;
        let { active: o, side: c } = (r = n.getState(e)) !== null && r !== void 0 ? r : {};
        if (!o) return g.empty;
        let a = I.widget(e.selection.from, j, { side: c });
        return g.create(e.doc, [a]);
      },
      handleKeyDown(e, r) {
        switch (r.key) {
          case "`":
            return L(e, n, r, m(e, t), t.attrs);
          case "ArrowRight":
            return H(e, n, r, m(e, t), t.attrs);
          case "ArrowLeft":
            return v(e, n, r, m(e, t), t.attrs);
          case "Backspace":
            return P(e, n, r, m(e, t));
          case "Delete":
            return z(e, n, r, m(e, t));
          case "ArrowUp":
          case "ArrowDown":
          case "Home":
          case "End":
            return p(e, n);
          case "e":
          case "a":
            return r.ctrlKey ? p(e, n) : !1;
          default:
            return !1;
        }
      },
      handleClick(e) {
        return p(e, n, "click");
      },
    },
  });
  return n;
}
function b(t) {
  let n = F(t),
    e = B(n, t);
  return [n, e];
}
var st = b;
function dt(t) {
  return (n, e, r) =>
    t(
      n,
      e &&
        ((o) => {
          if ((o.setMeta("appendedTransaction", o), n.selection instanceof K)) {
            let c = o.mapping.map(n.selection.to);
            o.setSelection(O.near(o.doc.resolve(c), -1));
          }
          e(o);
        }),
      r
    );
}
export { st as a, dt as b };
//# sourceMappingURL=chunk-3ZETIB6E.mjs.map
