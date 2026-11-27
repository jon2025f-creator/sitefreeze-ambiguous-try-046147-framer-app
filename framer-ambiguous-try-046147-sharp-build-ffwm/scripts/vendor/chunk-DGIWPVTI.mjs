import { b as Pe } from "chunk-DVLP366F.mjs";
import { Ef as Z, nm as Te, ql as Me, te as $, ul as Ae } from "chunk-RE42INF2.mjs";
import {
  La as de,
  Xb as G,
  Zb as me,
  _b as ge,
  ab as fe,
  ac as W,
  bc as we,
  cc as I,
  dc as Se,
  fc as L,
  gc as O,
  lb as ue,
  vb as pe,
  xf as F,
  yb as he,
  yf as ye,
} from "chunk-3GNDJY2L.mjs";
import { a as Re, b as ve } from "chunk-FN3PMT3K.mjs";
import {
  B as Q,
  C as H,
  a as b,
  c as N,
  u as Ce,
  v as R,
  w as be,
  x as v,
  y as Ne,
} from "chunk-RJVD5SHM.mjs";
import { a as xe } from "chunk-MSHSIAEI.mjs";
import { g as ae, h as J } from "chunk-EHED2EQW.mjs";
import { j as ie } from "chunk-EAUMDN6M.mjs";
import { c as ce } from "chunk-4JY5UMT2.mjs";
var Ge = "moduleSourceRevisionHint",
  Ut = "moduleSourceRevisionCommittedHint",
  ke = {
    moduleSourceRevision: void 0,
    moduleSourceRevisionHint: void 0,
    moduleSourceRevisionCommittedHint: void 0,
  },
  Qe = "moduleSourceRevision";
function Ze(t) {
  return Qe in t;
}
function et(t, e) {
  return F(t) ? !1 : tt(t, e);
}
function tt(t, e) {
  return !(
    !Ze(t) ||
    (pe(t) && J.isOn("cmsDatabase")) ||
    (fe(t) && !ue(e.get(t.parentid))) ||
    (he(t) && !Te(t))
  );
}
function ot(t, e) {
  let o = t.moduleSourceRevisionHint;
  if (!J.isOn("layeredModuleRevisionHint")) return o;
  let n = e.getShadowedValues(t.id, Ge);
  return n.length === 0 ? o : ae([o, ...n].join(","));
}
function nt(t, e) {
  return t.moduleSourceRevisionCommittedHint !== ot(t, e);
}
var rt = "moduleSourceRevisionHint";
function Vt(t, e, o) {
  return nt(t, e) && o.some((n) => rt in n.to);
}
var lt = ie("ModuleSourceRevision");
function He(t, e) {
  if (!e.inEditor || !e.processingLocalUserEdits || e.applyingDiffs || !et(t, e)) return;
  let o = e.getNodeAtStart(t.id),
    r = Math.max(t.moduleSourceRevisionHint ?? 0, o?.moduleSourceRevisionHint ?? 0) + 1;
  (t.setProp("moduleSourceRevisionHint", r),
    lt.trace("Incrementing moduleSourceRevisionHint for", t.id, ":", r));
}
var st = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];
function Yt(t) {
  return st.includes(t);
}
var it = "tag";
function Jt(t) {
  return it in t;
}
var Gt = { tag: "p" };
function Qt(t, e) {
  switch (t) {
    case "h1":
      return e ? "H1" : "Heading 1";
    case "h2":
      return e ? "H2" : "Heading 2";
    case "h3":
      return e ? "H3" : "Heading 3";
    case "h4":
      return e ? "H4" : "Heading 4";
    case "h5":
      return e ? "H5" : "Heading 5";
    case "h6":
      return e ? "H6" : "Heading 6";
    case "p":
      return e ? "p" : "Paragraph";
    default:
      ce(t);
  }
}
function K(t) {
  return me(t) || W(t) || we(t) || I(t) || O(t) || L(t);
}
function oo(t) {
  return K(t) && ye(t);
}
function no(t) {
  return K(t) && F(t);
}
var so = {
  inline: !0,
  group: "inline",
  selectable: !1,
  leafText: () => `
`,
  toMarkdown: $("break"),
  toDOM() {
    return document.createElement("br");
  },
  parseDOM: [{ tag: "br.trailing-break", ignore: !0 }, { tag: "br" }],
};
var te, oe;
if (typeof WeakMap < "u") {
  let t = new WeakMap();
  ((te = (e) => t.get(e)), (oe = (e, o) => (t.set(e, o), o)));
} else {
  let t = [],
    o = 0;
  ((te = (n) => {
    for (let r = 0; r < t.length; r += 2) if (t[r] == n) return t[r + 1];
  }),
    (oe = (n, r) => (o == 10 && (o = 0), (t[o++] = n), (t[o++] = r))));
}
var y = class {
  constructor(t, e, o, n) {
    ((this.width = t), (this.height = e), (this.map = o), (this.problems = n));
  }
  findCell(t) {
    for (let e = 0; e < this.map.length; e++) {
      let o = this.map[e];
      if (o != t) continue;
      let n = e % this.width,
        r = (e / this.width) | 0,
        l = n + 1,
        s = r + 1;
      for (let c = 1; l < this.width && this.map[e + c] == o; c++) l++;
      for (let c = 1; s < this.height && this.map[e + this.width * c] == o; c++) s++;
      return { left: n, top: r, right: l, bottom: s };
    }
    throw new RangeError(`No cell with offset ${t} found`);
  }
  colCount(t) {
    for (let e = 0; e < this.map.length; e++) if (this.map[e] == t) return e % this.width;
    throw new RangeError(`No cell with offset ${t} found`);
  }
  nextCell(t, e, o) {
    let { left: n, right: r, top: l, bottom: s } = this.findCell(t);
    return e == "horiz"
      ? (o < 0 ? n == 0 : r == this.width)
        ? null
        : this.map[l * this.width + (o < 0 ? n - 1 : r)]
      : (o < 0 ? l == 0 : s == this.height)
        ? null
        : this.map[n + this.width * (o < 0 ? l - 1 : s)];
  }
  rectBetween(t, e) {
    let { left: o, right: n, top: r, bottom: l } = this.findCell(t),
      { left: s, right: c, top: i, bottom: a } = this.findCell(e);
    return {
      left: Math.min(o, s),
      top: Math.min(r, i),
      right: Math.max(n, c),
      bottom: Math.max(l, a),
    };
  }
  cellsInRect(t) {
    let e = [],
      o = {};
    for (let n = t.top; n < t.bottom; n++)
      for (let r = t.left; r < t.right; r++) {
        let l = n * this.width + r,
          s = this.map[l];
        o[s] ||
          ((o[s] = !0),
          !(
            (r == t.left && r && this.map[l - 1] == s) ||
            (n == t.top && n && this.map[l - this.width] == s)
          ) && e.push(s));
      }
    return e;
  }
  positionAt(t, e, o) {
    for (let n = 0, r = 0; ; n++) {
      let l = r + o.child(n).nodeSize;
      if (n == t) {
        let s = e + t * this.width,
          c = (t + 1) * this.width;
        for (; s < c && this.map[s] < r;) s++;
        return s == c ? l - 1 : this.map[s];
      }
      r = l;
    }
  }
  static get(t) {
    return te(t) || oe(t, ct(t));
  }
};
function ct(t) {
  if (t.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + t.type.name);
  let e = at(t),
    o = t.childCount,
    n = [],
    r = 0,
    l = null,
    s = [];
  for (let a = 0, d = e * o; a < d; a++) n[a] = 0;
  for (let a = 0, d = 0; a < o; a++) {
    let f = t.child(a);
    d++;
    for (let h = 0; ; h++) {
      for (; r < n.length && n[r] != 0;) r++;
      if (h == f.childCount) break;
      let m = f.child(h),
        { colspan: g, rowspan: S, colwidth: D } = m.attrs;
      for (let z = 0; z < S; z++) {
        if (z + a >= o) {
          (l || (l = [])).push({ type: "overlong_rowspan", pos: d, n: S - z });
          break;
        }
        let X = r + z * e;
        for (let P = 0; P < g; P++) {
          n[X + P] == 0
            ? (n[X + P] = d)
            : (l || (l = [])).push({ type: "collision", row: a, pos: d, n: g - P });
          let B = D && D[P];
          if (B) {
            let E = ((X + P) % e) * 2,
              Y = s[E];
            Y == null || (Y != B && s[E + 1] == 1)
              ? ((s[E] = B), (s[E + 1] = 1))
              : Y == B && s[E + 1]++;
          }
        }
      }
      ((r += g), (d += m.nodeSize));
    }
    let u = (a + 1) * e,
      p = 0;
    for (; r < u;) n[r++] == 0 && p++;
    (p && (l || (l = [])).push({ type: "missing", row: a, n: p }), d++);
  }
  let c = new y(e, o, n, l),
    i = !1;
  for (let a = 0; !i && a < s.length; a += 2) s[a] != null && s[a + 1] < o && (i = !0);
  return (i && dt(c, s, t), c);
}
function at(t) {
  let e = -1,
    o = !1;
  for (let n = 0; n < t.childCount; n++) {
    let r = t.child(n),
      l = 0;
    if (o)
      for (let s = 0; s < n; s++) {
        let c = t.child(s);
        for (let i = 0; i < c.childCount; i++) {
          let a = c.child(i);
          s + a.attrs.rowspan > n && (l += a.attrs.colspan);
        }
      }
    for (let s = 0; s < r.childCount; s++) {
      let c = r.child(s);
      ((l += c.attrs.colspan), c.attrs.rowspan > 1 && (o = !0));
    }
    e == -1 ? (e = l) : e != l && (e = Math.max(e, l));
  }
  return e;
}
function dt(t, e, o) {
  t.problems || (t.problems = []);
  let n = {};
  for (let r = 0; r < t.map.length; r++) {
    let l = t.map[r];
    if (n[l]) continue;
    n[l] = !0;
    let s = o.nodeAt(l);
    if (!s) throw new RangeError(`No cell with offset ${l} found`);
    let c = null,
      i = s.attrs;
    for (let a = 0; a < i.colspan; a++) {
      let d = (r + a) % t.width,
        f = e[d * 2];
      f != null && (!i.colwidth || i.colwidth[a] != f) && ((c || (c = ft(i)))[a] = f);
    }
    c && t.problems.unshift({ type: "colwidth mismatch", pos: l, colwidth: c });
  }
}
function ft(t) {
  if (t.colwidth) return t.colwidth.slice();
  let e = [];
  for (let o = 0; o < t.colspan; o++) e.push(0);
  return e;
}
function De(t, e) {
  if (typeof t == "string") return {};
  let o = t.getAttribute("data-colwidth"),
    n = o && /^\d+(,\d+)*$/.test(o) ? o.split(",").map((s) => Number(s)) : null,
    r = Number(t.getAttribute("colspan") || 1),
    l = {
      colspan: r,
      rowspan: Number(t.getAttribute("rowspan") || 1),
      colwidth: n && n.length == r ? n : null,
    };
  for (let s in e) {
    let c = e[s].getFromDOM,
      i = c && c(t);
    i != null && (l[s] = i);
  }
  return l;
}
function ze(t, e) {
  let o = {};
  (t.attrs.colspan != 1 && (o.colspan = t.attrs.colspan),
    t.attrs.rowspan != 1 && (o.rowspan = t.attrs.rowspan),
    t.attrs.colwidth && (o["data-colwidth"] = t.attrs.colwidth.join(",")));
  for (let n in e) {
    let r = e[n].setDOMAttr;
    r && r(t.attrs[n], o);
  }
  return o;
}
function ho(t) {
  let e = t.cellAttributes || {},
    o = { colspan: { default: 1 }, rowspan: { default: 1 }, colwidth: { default: null } };
  for (let n in e) o[n] = { default: e[n].default };
  return {
    table: {
      content: "table_row+",
      tableRole: "table",
      isolating: !0,
      group: t.tableGroup,
      parseDOM: [{ tag: "table" }],
      toDOM() {
        return ["table", ["tbody", 0]];
      },
    },
    table_row: {
      content: "(table_cell | table_header)*",
      tableRole: "row",
      parseDOM: [{ tag: "tr" }],
      toDOM() {
        return ["tr", 0];
      },
    },
    table_cell: {
      content: t.cellContent,
      attrs: o,
      tableRole: "cell",
      isolating: !0,
      parseDOM: [{ tag: "td", getAttrs: (n) => De(n, e) }],
      toDOM(n) {
        return ["td", ze(n, e), 0];
      },
    },
    table_header: {
      content: t.cellContent,
      attrs: o,
      tableRole: "header_cell",
      isolating: !0,
      parseDOM: [{ tag: "th", getAttrs: (n) => De(n, e) }],
      toDOM(n) {
        return ["th", ze(n, e), 0];
      },
    },
  };
}
function C(t) {
  let e = t.cached.tableNodeTypes;
  if (!e) {
    e = t.cached.tableNodeTypes = {};
    for (let o in t.nodes) {
      let n = t.nodes[o],
        r = n.spec.tableRole;
      r && (e[r] = n);
    }
  }
  return e;
}
var T = new H("selectingCells");
function _(t) {
  for (let e = t.depth - 1; e > 0; e--)
    if (t.node(e).type.spec.tableRole == "row") return t.node(0).resolve(t.before(e + 1));
  return null;
}
function ut(t) {
  for (let e = t.depth; e > 0; e--) {
    let o = t.node(e).type.spec.tableRole;
    if (o === "cell" || o === "header_cell") return t.node(e);
  }
  return null;
}
function x(t) {
  let e = t.selection.$head;
  for (let o = e.depth; o > 0; o--) if (e.node(o).type.spec.tableRole == "row") return !0;
  return !1;
}
function re(t) {
  let e = t.selection;
  if ("$anchorCell" in e && e.$anchorCell)
    return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  let o = _(e.$head) || pt(e.$head);
  if (o) return o;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function pt(t) {
  for (let e = t.nodeAfter, o = t.pos; e; e = e.firstChild, o++) {
    let n = e.type.spec.tableRole;
    if (n == "cell" || n == "header_cell") return t.doc.resolve(o);
  }
  for (let e = t.nodeBefore, o = t.pos; e; e = e.lastChild, o--) {
    let n = e.type.spec.tableRole;
    if (n == "cell" || n == "header_cell") return t.doc.resolve(o - e.nodeSize);
  }
}
function Ee(t) {
  return t.parent.type.spec.tableRole == "row" && !!t.nodeAfter;
}
function ht(t) {
  return t.node(0).resolve(t.pos + t.nodeAfter.nodeSize);
}
function le(t, e) {
  return t.depth == e.depth && t.pos >= e.start(-1) && t.pos <= e.end(-1);
}
function $e(t, e, o) {
  let n = t.node(-1),
    r = y.get(n),
    l = t.start(-1),
    s = r.nextCell(t.pos - l, e, o);
  return s == null ? null : t.node(0).resolve(l + s);
}
function k(t, e, o = 1) {
  let n = { ...t, colspan: t.colspan - o };
  return (
    n.colwidth &&
      ((n.colwidth = n.colwidth.slice()),
      n.colwidth.splice(e, o),
      n.colwidth.some((r) => r > 0) || (n.colwidth = null)),
    n
  );
}
function Ke(t, e, o = 1) {
  let n = { ...t, colspan: t.colspan + o };
  if (n.colwidth) {
    n.colwidth = n.colwidth.slice();
    for (let r = 0; r < o; r++) n.colwidth.splice(e, 0, 0);
  }
  return n;
}
function mt(t, e, o) {
  let n = C(e.type.schema).header_cell;
  for (let r = 0; r < t.height; r++) if (e.nodeAt(t.map[o + r * t.width]).type != n) return !1;
  return !0;
}
var w = class A extends R {
  constructor(e, o = e) {
    let n = e.node(-1),
      r = y.get(n),
      l = e.start(-1),
      s = r.rectBetween(e.pos - l, o.pos - l),
      c = e.node(0),
      i = r.cellsInRect(s).filter((d) => d != o.pos - l);
    i.unshift(o.pos - l);
    let a = i.map((d) => {
      let f = n.nodeAt(d);
      if (!f) throw RangeError(`No cell with offset ${d} found`);
      let u = l + d + 1;
      return new be(c.resolve(u), c.resolve(u + f.content.size));
    });
    (super(a[0].$from, a[0].$to, a), (this.$anchorCell = e), (this.$headCell = o));
  }
  map(e, o) {
    let n = e.resolve(o.map(this.$anchorCell.pos)),
      r = e.resolve(o.map(this.$headCell.pos));
    if (Ee(n) && Ee(r) && le(n, r)) {
      let l = this.$anchorCell.node(-1) != n.node(-1);
      return l && this.isRowSelection()
        ? A.rowSelection(n, r)
        : l && this.isColSelection()
          ? A.colSelection(n, r)
          : new A(n, r);
    }
    return v.between(n, r);
  }
  content() {
    let e = this.$anchorCell.node(-1),
      o = y.get(e),
      n = this.$anchorCell.start(-1),
      r = o.rectBetween(this.$anchorCell.pos - n, this.$headCell.pos - n),
      l = {},
      s = [];
    for (let i = r.top; i < r.bottom; i++) {
      let a = [];
      for (let d = i * o.width + r.left, f = r.left; f < r.right; f++, d++) {
        let u = o.map[d];
        if (l[u]) continue;
        l[u] = !0;
        let p = o.findCell(u),
          h = e.nodeAt(u);
        if (!h) throw RangeError(`No cell with offset ${u} found`);
        let m = r.left - p.left,
          g = p.right - r.right;
        if (m > 0 || g > 0) {
          let S = h.attrs;
          if ((m > 0 && (S = k(S, 0, m)), g > 0 && (S = k(S, S.colspan - g, g)), p.left < r.left)) {
            if (((h = h.type.createAndFill(S)), !h))
              throw RangeError(`Could not create cell with attrs ${JSON.stringify(S)}`);
          } else h = h.type.create(S, h.content);
        }
        if (p.top < r.top || p.bottom > r.bottom) {
          let S = { ...h.attrs, rowspan: Math.min(p.bottom, r.bottom) - Math.max(p.top, r.top) };
          p.top < r.top ? (h = h.type.createAndFill(S)) : (h = h.type.create(S, h.content));
        }
        a.push(h);
      }
      s.push(e.child(i).copy(b.from(a)));
    }
    let c = this.isColSelection() && this.isRowSelection() ? e : s;
    return new N(b.from(c), 1, 1);
  }
  replace(e, o = N.empty) {
    let n = e.steps.length,
      r = this.ranges;
    for (let s = 0; s < r.length; s++) {
      let { $from: c, $to: i } = r[s],
        a = e.mapping.slice(n);
      e.replace(a.map(c.pos), a.map(i.pos), s ? N.empty : o);
    }
    let l = R.findFrom(e.doc.resolve(e.mapping.slice(n).map(this.to)), -1);
    l && e.setSelection(l);
  }
  replaceWith(e, o) {
    this.replace(e, new N(b.from(o), 0, 0));
  }
  forEachCell(e) {
    let o = this.$anchorCell.node(-1),
      n = y.get(o),
      r = this.$anchorCell.start(-1),
      l = n.cellsInRect(n.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r));
    for (let s = 0; s < l.length; s++) e(o.nodeAt(l[s]), r + l[s]);
  }
  isColSelection() {
    let e = this.$anchorCell.index(-1),
      o = this.$headCell.index(-1);
    if (Math.min(e, o) > 0) return !1;
    let n = e + this.$anchorCell.nodeAfter.attrs.rowspan,
      r = o + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(n, r) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, o = e) {
    let n = e.node(-1),
      r = y.get(n),
      l = e.start(-1),
      s = r.findCell(e.pos - l),
      c = r.findCell(o.pos - l),
      i = e.node(0);
    return (
      s.top <= c.top
        ? (s.top > 0 && (e = i.resolve(l + r.map[s.left])),
          c.bottom < r.height && (o = i.resolve(l + r.map[r.width * (r.height - 1) + c.right - 1])))
        : (c.top > 0 && (o = i.resolve(l + r.map[c.left])),
          s.bottom < r.height &&
            (e = i.resolve(l + r.map[r.width * (r.height - 1) + s.right - 1]))),
      new A(e, o)
    );
  }
  isRowSelection() {
    let e = this.$anchorCell.node(-1),
      o = y.get(e),
      n = this.$anchorCell.start(-1),
      r = o.colCount(this.$anchorCell.pos - n),
      l = o.colCount(this.$headCell.pos - n);
    if (Math.min(r, l) > 0) return !1;
    let s = r + this.$anchorCell.nodeAfter.attrs.colspan,
      c = l + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(s, c) == o.width;
  }
  eq(e) {
    return (
      e instanceof A &&
      e.$anchorCell.pos == this.$anchorCell.pos &&
      e.$headCell.pos == this.$headCell.pos
    );
  }
  static rowSelection(e, o = e) {
    let n = e.node(-1),
      r = y.get(n),
      l = e.start(-1),
      s = r.findCell(e.pos - l),
      c = r.findCell(o.pos - l),
      i = e.node(0);
    return (
      s.left <= c.left
        ? (s.left > 0 && (e = i.resolve(l + r.map[s.top * r.width])),
          c.right < r.width && (o = i.resolve(l + r.map[r.width * (c.top + 1) - 1])))
        : (c.left > 0 && (o = i.resolve(l + r.map[c.top * r.width])),
          s.right < r.width && (e = i.resolve(l + r.map[r.width * (s.top + 1) - 1]))),
      new A(e, o)
    );
  }
  toJSON() {
    return { type: "cell", anchor: this.$anchorCell.pos, head: this.$headCell.pos };
  }
  static fromJSON(e, o) {
    return new A(e.resolve(o.anchor), e.resolve(o.head));
  }
  static create(e, o, n = o) {
    return new A(e.resolve(o), e.resolve(n));
  }
  getBookmark() {
    return new gt(this.$anchorCell.pos, this.$headCell.pos);
  }
};
w.prototype.visible = !1;
R.jsonID("cell", w);
var gt = class je {
  constructor(e, o) {
    ((this.anchor = e), (this.head = o));
  }
  map(e) {
    return new je(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    let o = e.resolve(this.anchor),
      n = e.resolve(this.head);
    return o.parent.type.spec.tableRole == "row" &&
      n.parent.type.spec.tableRole == "row" &&
      o.index() < o.parent.childCount &&
      n.index() < n.parent.childCount &&
      le(o, n)
      ? new w(o, n)
      : R.near(n, 1);
  }
};
function wt(t) {
  if (!(t.selection instanceof w)) return null;
  let e = [];
  return (
    t.selection.forEachCell((o, n) => {
      e.push(Re.node(n, n + o.nodeSize, { class: "selectedCell" }));
    }),
    ve.create(t.doc, e)
  );
}
function St({ $from: t, $to: e }) {
  if (t.pos == e.pos || t.pos < e.pos - 6) return !1;
  let o = t.pos,
    n = e.pos,
    r = t.depth;
  for (; r >= 0 && !(t.after(r + 1) < t.end(r)); r--, o++);
  for (let l = e.depth; l >= 0 && !(e.before(l + 1) > e.start(l)); l--, n--);
  return o == n && /row|table/.test(t.node(r).type.spec.tableRole);
}
function yt({ $from: t, $to: e }) {
  let o, n;
  for (let r = t.depth; r > 0; r--) {
    let l = t.node(r);
    if (l.type.spec.tableRole === "cell" || l.type.spec.tableRole === "header_cell") {
      o = l;
      break;
    }
  }
  for (let r = e.depth; r > 0; r--) {
    let l = e.node(r);
    if (l.type.spec.tableRole === "cell" || l.type.spec.tableRole === "header_cell") {
      n = l;
      break;
    }
  }
  return o !== n && e.parentOffset === 0;
}
function Ct(t, e, o) {
  let n = (e || t).selection,
    r = (e || t).doc,
    l,
    s;
  if (n instanceof Ne && (s = n.node.type.spec.tableRole)) {
    if (s == "cell" || s == "header_cell") l = w.create(r, n.from);
    else if (s == "row") {
      let c = r.resolve(n.from + 1);
      l = w.rowSelection(c, c);
    } else if (!o) {
      let c = y.get(n.node),
        i = n.from + 1,
        a = i + c.map[c.width * c.height - 1];
      l = w.create(r, i + 1, a);
    }
  } else
    n instanceof v && St(n)
      ? (l = v.create(r, n.from))
      : n instanceof v && yt(n) && (l = v.create(r, n.$from.start(), n.$from.end()));
  return (l && (e || (e = t.tr)).setSelection(l), e);
}
var bt = new H("fix-tables");
function Ue(t, e, o, n) {
  let r = t.childCount,
    l = e.childCount;
  e: for (let s = 0, c = 0; s < l; s++) {
    let i = e.child(s);
    for (let a = c, d = Math.min(r, s + 3); a < d; a++)
      if (t.child(a) == i) {
        ((c = a + 1), (o += i.nodeSize));
        continue e;
      }
    (n(i, o),
      c < r && t.child(c).sameMarkup(i)
        ? Ue(t.child(c), i, o + 1, n)
        : i.nodesBetween(0, i.content.size, n, o + 1),
      (o += i.nodeSize));
  }
}
function Nt(t, e) {
  let o,
    n = (r, l) => {
      r.type.spec.tableRole == "table" && (o = Rt(t, r, l, o));
    };
  return (e ? e.doc != t.doc && Ue(e.doc, t.doc, 0, n) : t.doc.descendants(n), o);
}
function Rt(t, e, o, n) {
  let r = y.get(e);
  if (!r.problems) return n;
  n || (n = t.tr);
  let l = [];
  for (let i = 0; i < r.height; i++) l.push(0);
  for (let i = 0; i < r.problems.length; i++) {
    let a = r.problems[i];
    if (a.type == "collision") {
      let d = e.nodeAt(a.pos);
      if (!d) continue;
      let f = d.attrs;
      for (let u = 0; u < f.rowspan; u++) l[a.row + u] += a.n;
      n.setNodeMarkup(n.mapping.map(o + 1 + a.pos), null, k(f, f.colspan - a.n, a.n));
    } else if (a.type == "missing") l[a.row] += a.n;
    else if (a.type == "overlong_rowspan") {
      let d = e.nodeAt(a.pos);
      if (!d) continue;
      n.setNodeMarkup(n.mapping.map(o + 1 + a.pos), null, {
        ...d.attrs,
        rowspan: d.attrs.rowspan - a.n,
      });
    } else if (a.type == "colwidth mismatch") {
      let d = e.nodeAt(a.pos);
      if (!d) continue;
      n.setNodeMarkup(n.mapping.map(o + 1 + a.pos), null, { ...d.attrs, colwidth: a.colwidth });
    }
  }
  let s, c;
  for (let i = 0; i < l.length; i++) l[i] && (s == null && (s = i), (c = i));
  for (let i = 0, a = o + 1; i < r.height; i++) {
    let d = e.child(i),
      f = a + d.nodeSize,
      u = l[i];
    if (u > 0) {
      let p = "cell";
      d.firstChild && (p = d.firstChild.type.spec.tableRole);
      let h = [];
      for (let g = 0; g < u; g++) {
        let S = C(t.schema)[p].createAndFill();
        S && h.push(S);
      }
      let m = (i == 0 || s == i - 1) && c == i ? a + 1 : f - 1;
      n.insert(n.mapping.map(m), h);
    }
    a = f;
  }
  return n.setMeta(bt, { fixTables: !0 });
}
function M(t) {
  let e = t.selection,
    o = re(t),
    n = o.node(-1),
    r = o.start(-1),
    l = y.get(n);
  return {
    ...(e instanceof w
      ? l.rectBetween(e.$anchorCell.pos - r, e.$headCell.pos - r)
      : l.findCell(o.pos - r)),
    tableStart: r,
    map: l,
    table: n,
  };
}
function Ve(t, { map: e, tableStart: o, table: n }, r) {
  let l = r > 0 ? -1 : 0;
  mt(e, n, r + l) && (l = r == 0 || r == e.width ? null : 0);
  for (let s = 0; s < e.height; s++) {
    let c = s * e.width + r;
    if (r > 0 && r < e.width && e.map[c - 1] == e.map[c]) {
      let i = e.map[c],
        a = n.nodeAt(i);
      (t.setNodeMarkup(t.mapping.map(o + i), null, Ke(a.attrs, r - e.colCount(i))),
        (s += a.attrs.rowspan - 1));
    } else {
      let i = l == null ? C(n.type.schema).cell : n.nodeAt(e.map[c + l]).type,
        a = e.positionAt(s, r, n);
      t.insert(t.mapping.map(o + a), i.createAndFill());
    }
  }
  return t;
}
function bo(t, e) {
  if (!x(t)) return !1;
  if (e) {
    let o = M(t);
    e(Ve(t.tr, o, o.left));
  }
  return !0;
}
function No(t, e) {
  if (!x(t)) return !1;
  if (e) {
    let o = M(t);
    e(Ve(t.tr, o, o.right));
  }
  return !0;
}
function vt(t, { map: e, table: o, tableStart: n }, r) {
  let l = t.mapping.maps.length;
  for (let s = 0; s < e.height;) {
    let c = s * e.width + r,
      i = e.map[c],
      a = o.nodeAt(i),
      d = a.attrs;
    if ((r > 0 && e.map[c - 1] == i) || (r < e.width - 1 && e.map[c + 1] == i))
      t.setNodeMarkup(t.mapping.slice(l).map(n + i), null, k(d, r - e.colCount(i)));
    else {
      let f = t.mapping.slice(l).map(n + i);
      t.delete(f, f + a.nodeSize);
    }
    s += d.rowspan;
  }
}
function Ro(t, e) {
  if (!x(t)) return !1;
  if (e) {
    let o = M(t),
      n = t.tr;
    if (o.left == 0 && o.right == o.map.width) return !1;
    for (let r = o.right - 1; vt(n, o, r), r != o.left; r--) {
      let l = o.tableStart ? n.doc.nodeAt(o.tableStart - 1) : n.doc;
      if (!l) throw RangeError("No table found");
      ((o.table = l), (o.map = y.get(l)));
    }
    e(n);
  }
  return !0;
}
function xt(t, e, o) {
  var n;
  let r = C(e.type.schema).header_cell;
  for (let l = 0; l < t.width; l++)
    if (((n = e.nodeAt(t.map[l + o * t.width])) == null ? void 0 : n.type) != r) return !1;
  return !0;
}
function qe(t, { map: e, tableStart: o, table: n }, r) {
  var l;
  let s = o;
  for (let a = 0; a < r; a++) s += n.child(a).nodeSize;
  let c = [],
    i = r > 0 ? -1 : 0;
  xt(e, n, r + i) && (i = r == 0 || r == e.height ? null : 0);
  for (let a = 0, d = e.width * r; a < e.width; a++, d++)
    if (r > 0 && r < e.height && e.map[d] == e.map[d - e.width]) {
      let f = e.map[d],
        u = n.nodeAt(f).attrs;
      (t.setNodeMarkup(o + f, null, { ...u, rowspan: u.rowspan + 1 }), (a += u.colspan - 1));
    } else {
      let f =
          i == null
            ? C(n.type.schema).cell
            : (l = n.nodeAt(e.map[d + i * e.width])) == null
              ? void 0
              : l.type,
        u = f?.createAndFill();
      u && c.push(u);
    }
  return (t.insert(s, C(n.type.schema).row.create(null, c)), t);
}
function vo(t, e) {
  if (!x(t)) return !1;
  if (e) {
    let o = M(t);
    e(qe(t.tr, o, o.top));
  }
  return !0;
}
function xo(t, e) {
  if (!x(t)) return !1;
  if (e) {
    let o = M(t);
    e(qe(t.tr, o, o.bottom));
  }
  return !0;
}
function Mt(t, { map: e, table: o, tableStart: n }, r) {
  let l = 0;
  for (let a = 0; a < r; a++) l += o.child(a).nodeSize;
  let s = l + o.child(r).nodeSize,
    c = t.mapping.maps.length;
  t.delete(l + n, s + n);
  let i = new Set();
  for (let a = 0, d = r * e.width; a < e.width; a++, d++) {
    let f = e.map[d];
    if (!i.has(f)) {
      if ((i.add(f), r > 0 && f == e.map[d - e.width])) {
        let u = o.nodeAt(f).attrs;
        (t.setNodeMarkup(t.mapping.slice(c).map(f + n), null, { ...u, rowspan: u.rowspan - 1 }),
          (a += u.colspan - 1));
      } else if (r < e.height && f == e.map[d + e.width]) {
        let u = o.nodeAt(f),
          p = u.attrs,
          h = u.type.create({ ...p, rowspan: u.attrs.rowspan - 1 }, u.content),
          m = e.positionAt(r + 1, a, o);
        (t.insert(t.mapping.slice(c).map(n + m), h), (a += p.colspan - 1));
      }
    }
  }
}
function Mo(t, e) {
  if (!x(t)) return !1;
  if (e) {
    let o = M(t),
      n = t.tr;
    if (o.top == 0 && o.bottom == o.map.height) return !1;
    for (let r = o.bottom - 1; Mt(n, o, r), r != o.top; r--) {
      let l = o.tableStart ? n.doc.nodeAt(o.tableStart - 1) : n.doc;
      if (!l) throw RangeError("No table found");
      ((o.table = l), (o.map = y.get(o.table)));
    }
    e(n);
  }
  return !0;
}
function Ie(t) {
  let e = t.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function At({ width: t, height: e, map: o }, n) {
  let r = n.top * t + n.left,
    l = r,
    s = (n.bottom - 1) * t + n.left,
    c = r + (n.right - n.left - 1);
  for (let i = n.top; i < n.bottom; i++) {
    if ((n.left > 0 && o[l] == o[l - 1]) || (n.right < t && o[c] == o[c + 1])) return !0;
    ((l += t), (c += t));
  }
  for (let i = n.left; i < n.right; i++) {
    if ((n.top > 0 && o[r] == o[r - t]) || (n.bottom < e && o[s] == o[s + t])) return !0;
    (r++, s++);
  }
  return !1;
}
function Ao(t, e) {
  let o = t.selection;
  if (!(o instanceof w) || o.$anchorCell.pos == o.$headCell.pos) return !1;
  let n = M(t),
    { map: r } = n;
  if (At(r, n)) return !1;
  if (e) {
    let l = t.tr,
      s = {},
      c = b.empty,
      i,
      a;
    for (let d = n.top; d < n.bottom; d++)
      for (let f = n.left; f < n.right; f++) {
        let u = r.map[d * r.width + f],
          p = n.table.nodeAt(u);
        if (!(s[u] || !p))
          if (((s[u] = !0), i == null)) ((i = u), (a = p));
          else {
            Ie(p) || (c = c.append(p.content));
            let h = l.mapping.map(u + n.tableStart);
            l.delete(h, h + p.nodeSize);
          }
      }
    if (i == null || a == null) return !0;
    if (
      (l.setNodeMarkup(i + n.tableStart, null, {
        ...Ke(a.attrs, a.attrs.colspan, n.right - n.left - a.attrs.colspan),
        rowspan: n.bottom - n.top,
      }),
      c.size)
    ) {
      let d = i + 1 + a.content.size,
        f = Ie(a) ? i + 1 : d;
      l.replaceWith(f + n.tableStart, d + n.tableStart, c);
    }
    (l.setSelection(new w(l.doc.resolve(i + n.tableStart))), e(l));
  }
  return !0;
}
function To(t, e) {
  let o = C(t.schema);
  return Tt(({ node: n }) => o[n.type.spec.tableRole])(t, e);
}
function Tt(t) {
  return (e, o) => {
    var n;
    let r = e.selection,
      l,
      s;
    if (r instanceof w) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      ((l = r.$anchorCell.nodeAfter), (s = r.$anchorCell.pos));
    } else {
      if (((l = ut(r.$from)), !l)) return !1;
      s = (n = _(r.$from)) == null ? void 0 : n.pos;
    }
    if (l == null || s == null || (l.attrs.colspan == 1 && l.attrs.rowspan == 1)) return !1;
    if (o) {
      let c = l.attrs,
        i = [],
        a = c.colwidth;
      (c.rowspan > 1 && (c = { ...c, rowspan: 1 }), c.colspan > 1 && (c = { ...c, colspan: 1 }));
      let d = M(e),
        f = e.tr;
      for (let p = 0; p < d.right - d.left; p++)
        i.push(a ? { ...c, colwidth: a && a[p] ? [a[p]] : null } : c);
      let u;
      for (let p = d.top; p < d.bottom; p++) {
        let h = d.map.positionAt(p, d.left, d.table);
        p == d.top && (h += l.nodeSize);
        for (let m = d.left, g = 0; m < d.right; m++, g++)
          (m == d.left && p == d.top) ||
            f.insert(
              (u = f.mapping.map(h + d.tableStart, 1)),
              t({ node: l, row: p, col: m }).createAndFill(i[g])
            );
      }
      (f.setNodeMarkup(s, t({ node: l, row: d.top, col: d.left }), i[0]),
        r instanceof w &&
          f.setSelection(new w(f.doc.resolve(r.$anchorCell.pos), u ? f.doc.resolve(u) : void 0)),
        o(f));
    }
    return !0;
  };
}
function Pt(t) {
  return function (e, o) {
    if (!x(e)) return !1;
    if (o) {
      let n = C(e.schema),
        r = M(e),
        l = e.tr,
        s = r.map.cellsInRect(
          t == "column"
            ? { left: r.left, top: 0, right: r.right, bottom: r.map.height }
            : t == "row"
              ? { left: 0, top: r.top, right: r.map.width, bottom: r.bottom }
              : r
        ),
        c = s.map((i) => r.table.nodeAt(i));
      for (let i = 0; i < s.length; i++)
        c[i].type == n.header_cell && l.setNodeMarkup(r.tableStart + s[i], n.cell, c[i].attrs);
      if (l.steps.length == 0)
        for (let i = 0; i < s.length; i++)
          l.setNodeMarkup(r.tableStart + s[i], n.header_cell, c[i].attrs);
      o(l);
    }
    return !0;
  };
}
function Le(t, e, o) {
  let n = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: t == "row" ? e.map.width : 1,
    bottom: t == "column" ? e.map.height : 1,
  });
  for (let r = 0; r < n.length; r++) {
    let l = e.table.nodeAt(n[r]);
    if (l && l.type !== o.header_cell) return !1;
  }
  return !0;
}
function se(t, e) {
  return (
    (e = e || { useDeprecatedLogic: !1 }),
    e.useDeprecatedLogic
      ? Pt(t)
      : function (o, n) {
          if (!x(o)) return !1;
          if (n) {
            let r = C(o.schema),
              l = M(o),
              s = o.tr,
              c = Le("row", l, r),
              i = Le("column", l, r),
              d = (t === "column" ? c : t === "row" ? i : !1) ? 1 : 0,
              f =
                t == "column"
                  ? { left: 0, top: d, right: 1, bottom: l.map.height }
                  : t == "row"
                    ? { left: d, top: 0, right: l.map.width, bottom: 1 }
                    : l,
              u =
                t == "column"
                  ? i
                    ? r.cell
                    : r.header_cell
                  : t == "row"
                    ? c
                      ? r.cell
                      : r.header_cell
                    : r.cell;
            (l.map.cellsInRect(f).forEach((p) => {
              let h = p + l.tableStart,
                m = s.doc.nodeAt(h);
              m && s.setNodeMarkup(h, u, m.attrs);
            }),
              n(s));
          }
          return !0;
        }
  );
}
var Po = se("row", { useDeprecatedLogic: !0 }),
  ko = se("column", { useDeprecatedLogic: !0 }),
  Ho = se("cell", { useDeprecatedLogic: !0 });
function kt(t, e) {
  if (e < 0) {
    let o = t.nodeBefore;
    if (o) return t.pos - o.nodeSize;
    for (let n = t.index(-1) - 1, r = t.before(); n >= 0; n--) {
      let l = t.node(-1).child(n),
        s = l.lastChild;
      if (s) return r - 1 - s.nodeSize;
      r -= l.nodeSize;
    }
  } else {
    if (t.index() < t.parent.childCount - 1) return t.pos + t.nodeAfter.nodeSize;
    let o = t.node(-1);
    for (let n = t.indexAfter(-1), r = t.after(); n < o.childCount; n++) {
      let l = o.child(n);
      if (l.childCount) return r + 1;
      r += l.nodeSize;
    }
  }
  return null;
}
function Do(t) {
  return function (e, o) {
    if (!x(e)) return !1;
    let n = kt(re(e), t);
    if (n == null) return !1;
    if (o) {
      let r = e.doc.resolve(n);
      o(e.tr.setSelection(v.between(r, ht(r))).scrollIntoView());
    }
    return !0;
  };
}
function zo(t, e) {
  let o = t.selection.$anchor;
  for (let n = o.depth; n > 0; n--)
    if (o.node(n).type.spec.tableRole == "table")
      return (e && e(t.tr.delete(o.before(n), o.after(n)).scrollIntoView()), !0);
  return !1;
}
function j(t, e) {
  let o = t.selection;
  if (!(o instanceof w)) return !1;
  if (e) {
    let n = t.tr,
      r = C(t.schema).cell.createAndFill().content;
    (o.forEachCell((l, s) => {
      l.content.eq(r) ||
        n.replace(n.mapping.map(s + 1), n.mapping.map(s + l.nodeSize - 1), new N(r, 0, 0));
    }),
      n.docChanged && e(n));
  }
  return !0;
}
function Ht(t) {
  if (!t.size) return null;
  let { content: e, openStart: o, openEnd: n } = t;
  for (; e.childCount == 1 && ((o > 0 && n > 0) || e.child(0).type.spec.tableRole == "table");)
    (o--, n--, (e = e.child(0).content));
  let r = e.child(0),
    l = r.type.spec.tableRole,
    s = r.type.schema,
    c = [];
  if (l == "row")
    for (let i = 0; i < e.childCount; i++) {
      let a = e.child(i).content,
        d = i ? 0 : Math.max(0, o - 1),
        f = i < e.childCount - 1 ? 0 : Math.max(0, n - 1);
      ((d || f) && (a = ne(C(s).row, new N(a, d, f)).content), c.push(a));
    }
  else if (l == "cell" || l == "header_cell")
    c.push(o || n ? ne(C(s).row, new N(e, o, n)).content : e);
  else return null;
  return Dt(s, c);
}
function Dt(t, e) {
  let o = [];
  for (let r = 0; r < e.length; r++) {
    let l = e[r];
    for (let s = l.childCount - 1; s >= 0; s--) {
      let { rowspan: c, colspan: i } = l.child(s).attrs;
      for (let a = r; a < r + c; a++) o[a] = (o[a] || 0) + i;
    }
  }
  let n = 0;
  for (let r = 0; r < o.length; r++) n = Math.max(n, o[r]);
  for (let r = 0; r < o.length; r++)
    if ((r >= e.length && e.push(b.empty), o[r] < n)) {
      let l = C(t).cell.createAndFill(),
        s = [];
      for (let c = o[r]; c < n; c++) s.push(l);
      e[r] = e[r].append(b.from(s));
    }
  return { height: e.length, width: n, rows: e };
}
function ne(t, e) {
  let o = t.createAndFill();
  return new Ce(o).replace(0, o.content.size, e).doc;
}
function zt({ width: t, height: e, rows: o }, n, r) {
  if (t != n) {
    let l = [],
      s = [];
    for (let c = 0; c < o.length; c++) {
      let i = o[c],
        a = [];
      for (let d = l[c] || 0, f = 0; d < n; f++) {
        let u = i.child(f % i.childCount);
        (d + u.attrs.colspan > n &&
          (u = u.type.createChecked(
            k(u.attrs, u.attrs.colspan, d + u.attrs.colspan - n),
            u.content
          )),
          a.push(u),
          (d += u.attrs.colspan));
        for (let p = 1; p < u.attrs.rowspan; p++) l[c + p] = (l[c + p] || 0) + u.attrs.colspan;
      }
      s.push(b.from(a));
    }
    ((o = s), (t = n));
  }
  if (e != r) {
    let l = [];
    for (let s = 0, c = 0; s < r; s++, c++) {
      let i = [],
        a = o[c % e];
      for (let d = 0; d < a.childCount; d++) {
        let f = a.child(d);
        (s + f.attrs.rowspan > r &&
          (f = f.type.create({ ...f.attrs, rowspan: Math.max(1, r - f.attrs.rowspan) }, f.content)),
          i.push(f));
      }
      l.push(b.from(i));
    }
    ((o = l), (e = r));
  }
  return { width: t, height: e, rows: o };
}
function Et(t, e, o, n, r, l, s) {
  let c = t.doc.type.schema,
    i = C(c),
    a,
    d;
  if (r > e.width)
    for (let f = 0, u = 0; f < e.height; f++) {
      let p = o.child(f);
      u += p.nodeSize;
      let h = [],
        m;
      p.lastChild == null || p.lastChild.type == i.cell
        ? (m = a || (a = i.cell.createAndFill()))
        : (m = d || (d = i.header_cell.createAndFill()));
      for (let g = e.width; g < r; g++) h.push(m);
      t.insert(t.mapping.slice(s).map(u - 1 + n), h);
    }
  if (l > e.height) {
    let f = [];
    for (let h = 0, m = (e.height - 1) * e.width; h < Math.max(e.width, r); h++) {
      let g = h >= e.width ? !1 : o.nodeAt(e.map[m + h]).type == i.header_cell;
      f.push(g ? d || (d = i.header_cell.createAndFill()) : a || (a = i.cell.createAndFill()));
    }
    let u = i.row.create(null, b.from(f)),
      p = [];
    for (let h = e.height; h < l; h++) p.push(u);
    t.insert(t.mapping.slice(s).map(n + o.nodeSize - 2), p);
  }
  return !!(a || d);
}
function _e(t, e, o, n, r, l, s, c) {
  if (s == 0 || s == e.height) return !1;
  let i = !1;
  for (let a = r; a < l; a++) {
    let d = s * e.width + a,
      f = e.map[d];
    if (e.map[d - e.width] == f) {
      i = !0;
      let u = o.nodeAt(f),
        { top: p, left: h } = e.findCell(f);
      (t.setNodeMarkup(t.mapping.slice(c).map(f + n), null, { ...u.attrs, rowspan: s - p }),
        t.insert(
          t.mapping.slice(c).map(e.positionAt(s, h, o)),
          u.type.createAndFill({ ...u.attrs, rowspan: p + u.attrs.rowspan - s })
        ),
        (a += u.attrs.colspan - 1));
    }
  }
  return i;
}
function Be(t, e, o, n, r, l, s, c) {
  if (s == 0 || s == e.width) return !1;
  let i = !1;
  for (let a = r; a < l; a++) {
    let d = a * e.width + s,
      f = e.map[d];
    if (e.map[d - 1] == f) {
      i = !0;
      let u = o.nodeAt(f),
        p = e.colCount(f),
        h = t.mapping.slice(c).map(f + n);
      (t.setNodeMarkup(h, null, k(u.attrs, s - p, u.attrs.colspan - (s - p))),
        t.insert(h + u.nodeSize, u.type.createAndFill(k(u.attrs, 0, s - p))),
        (a += u.attrs.rowspan - 1));
    }
  }
  return i;
}
function We(t, e, o, n, r) {
  let l = o ? t.doc.nodeAt(o - 1) : t.doc;
  if (!l) throw new Error("No table found");
  let s = y.get(l),
    { top: c, left: i } = n,
    a = i + r.width,
    d = c + r.height,
    f = t.tr,
    u = 0;
  function p() {
    if (((l = o ? f.doc.nodeAt(o - 1) : f.doc), !l)) throw new Error("No table found");
    ((s = y.get(l)), (u = f.mapping.maps.length));
  }
  (Et(f, s, l, o, a, d, u) && p(),
    _e(f, s, l, o, i, a, c, u) && p(),
    _e(f, s, l, o, i, a, d, u) && p(),
    Be(f, s, l, o, c, d, i, u) && p(),
    Be(f, s, l, o, c, d, a, u) && p());
  for (let h = c; h < d; h++) {
    let m = s.positionAt(h, i, l),
      g = s.positionAt(h, a, l);
    f.replace(
      f.mapping.slice(u).map(m + o),
      f.mapping.slice(u).map(g + o),
      new N(r.rows[h - c], 0, 0)
    );
  }
  (p(),
    f.setSelection(
      new w(
        f.doc.resolve(o + s.positionAt(c, i, l)),
        f.doc.resolve(o + s.positionAt(d - 1, a - 1, l))
      )
    ),
    e(f));
}
var It = Pe({
  ArrowLeft: U("horiz", -1),
  ArrowRight: U("horiz", 1),
  ArrowUp: U("vert", -1),
  ArrowDown: U("vert", 1),
  "Shift-ArrowLeft": V("horiz", -1),
  "Shift-ArrowRight": V("horiz", 1),
  "Shift-ArrowUp": V("vert", -1),
  "Shift-ArrowDown": V("vert", 1),
  Backspace: j,
  "Mod-Backspace": j,
  Delete: j,
  "Mod-Delete": j,
});
function q(t, e, o) {
  return o.eq(t.selection) ? !1 : (e && e(t.tr.setSelection(o).scrollIntoView()), !0);
}
function U(t, e) {
  return (o, n, r) => {
    if (!r) return !1;
    let l = o.selection;
    if (l instanceof w) return q(o, n, R.near(l.$headCell, e));
    if (t != "horiz" && !l.empty) return !1;
    let s = Xe(r, t, e);
    if (s == null) return !1;
    if (t == "horiz") return q(o, n, R.near(o.doc.resolve(l.head + e), e));
    {
      let c = o.doc.resolve(s),
        i = $e(c, t, e),
        a;
      return (
        i
          ? (a = R.near(i, 1))
          : e < 0
            ? (a = R.near(o.doc.resolve(c.before(-1)), -1))
            : (a = R.near(o.doc.resolve(c.after(-1)), 1)),
        q(o, n, a)
      );
    }
  };
}
function V(t, e) {
  return (o, n, r) => {
    if (!r) return !1;
    let l = o.selection,
      s;
    if (l instanceof w) s = l;
    else {
      let i = Xe(r, t, e);
      if (i == null) return !1;
      s = new w(o.doc.resolve(i));
    }
    let c = $e(s.$headCell, t, e);
    return c ? q(o, n, new w(s.$anchorCell, c)) : !1;
  };
}
function Lt(t, e) {
  let o = t.state.doc,
    n = _(o.resolve(e));
  return n ? (t.dispatch(t.state.tr.setSelection(new w(n))), !0) : !1;
}
function _t(t, e, o) {
  if (!x(t.state)) return !1;
  let n = Ht(o),
    r = t.state.selection;
  if (r instanceof w) {
    n || (n = { width: 1, height: 1, rows: [b.from(ne(C(t.state.schema).cell, o))] });
    let l = r.$anchorCell.node(-1),
      s = r.$anchorCell.start(-1),
      c = y.get(l).rectBetween(r.$anchorCell.pos - s, r.$headCell.pos - s);
    return ((n = zt(n, c.right - c.left, c.bottom - c.top)), We(t.state, t.dispatch, s, c, n), !0);
  } else if (n) {
    let l = re(t.state),
      s = l.start(-1);
    return (We(t.state, t.dispatch, s, y.get(l.node(-1)).findCell(l.pos - s), n), !0);
  } else return !1;
}
function Bt(t, e) {
  var o;
  if (e.ctrlKey || e.metaKey) return;
  let n = Oe(t, e.target),
    r;
  if (e.shiftKey && t.state.selection instanceof w)
    (l(t.state.selection.$anchorCell, e), e.preventDefault());
  else if (
    e.shiftKey &&
    n &&
    (r = _(t.state.selection.$anchor)) != null &&
    ((o = ee(t, e)) == null ? void 0 : o.pos) != r.pos
  )
    (l(r, e), e.preventDefault());
  else if (!n) return;
  function l(i, a) {
    let d = ee(t, a),
      f = T.getState(t.state) == null;
    if (!d || !le(i, d))
      if (f) d = i;
      else return;
    let u = new w(i, d);
    if (f || !t.state.selection.eq(u)) {
      let p = t.state.tr.setSelection(u);
      (f && p.setMeta(T, i.pos), t.dispatch(p));
    }
  }
  function s() {
    (t.root.removeEventListener("mouseup", s),
      t.root.removeEventListener("dragstart", s),
      t.root.removeEventListener("mousemove", c),
      T.getState(t.state) != null && t.dispatch(t.state.tr.setMeta(T, -1)));
  }
  function c(i) {
    let a = i,
      d = T.getState(t.state),
      f;
    if (d != null) f = t.state.doc.resolve(d);
    else if (Oe(t, a.target) != n && ((f = ee(t, e)), !f)) return s();
    f && l(f, a);
  }
  (t.root.addEventListener("mouseup", s),
    t.root.addEventListener("dragstart", s),
    t.root.addEventListener("mousemove", c));
}
function Xe(t, e, o) {
  if (!(t.state.selection instanceof v)) return null;
  let { $head: n } = t.state.selection;
  for (let r = n.depth - 1; r >= 0; r--) {
    let l = n.node(r);
    if ((o < 0 ? n.index(r) : n.indexAfter(r)) != (o < 0 ? 0 : l.childCount)) return null;
    if (l.type.spec.tableRole == "cell" || l.type.spec.tableRole == "header_cell") {
      let c = n.before(r),
        i = e == "vert" ? (o > 0 ? "down" : "up") : o > 0 ? "right" : "left";
      return t.endOfTextblock(i) ? c : null;
    }
  }
  return null;
}
function Oe(t, e) {
  for (; e && e != t.dom; e = e.parentNode) if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function ee(t, e) {
  let o = t.posAtCoords({ left: e.clientX, top: e.clientY });
  return o && o ? _(t.state.doc.resolve(o.pos)) : null;
}
var _o = class {
  constructor(t, e) {
    ((this.node = t),
      (this.defaultCellMinWidth = e),
      (this.dom = document.createElement("div")),
      (this.dom.className = "tableWrapper"),
      (this.table = this.dom.appendChild(document.createElement("table"))),
      this.table.style.setProperty("--default-cell-min-width", `${e}px`),
      (this.colgroup = this.table.appendChild(document.createElement("colgroup"))),
      Fe(t, this.colgroup, this.table, e),
      (this.contentDOM = this.table.appendChild(document.createElement("tbody"))));
  }
  update(t) {
    return t.type != this.node.type
      ? !1
      : ((this.node = t), Fe(t, this.colgroup, this.table, this.defaultCellMinWidth), !0);
  }
  ignoreMutation(t) {
    return t.type == "attributes" && (t.target == this.table || this.colgroup.contains(t.target));
  }
};
function Fe(t, e, o, n, r, l) {
  var s;
  let c = 0,
    i = !0,
    a = e.firstChild,
    d = t.firstChild;
  if (d) {
    for (let f = 0, u = 0; f < d.childCount; f++) {
      let { colspan: p, colwidth: h } = d.child(f).attrs;
      for (let m = 0; m < p; m++, u++) {
        let g = r == u ? l : h && h[m],
          S = g ? g + "px" : "";
        if (((c += g || n), g || (i = !1), a))
          (a.style.width != S && (a.style.width = S), (a = a.nextSibling));
        else {
          let D = document.createElement("col");
          ((D.style.width = S), e.appendChild(D));
        }
      }
    }
    for (; a;) {
      let f = a.nextSibling;
      ((s = a.parentNode) == null || s.removeChild(a), (a = f));
    }
    i
      ? ((o.style.width = c + "px"), (o.style.minWidth = ""))
      : ((o.style.width = ""), (o.style.minWidth = c + "px"));
  }
}
var Bo = new H("tableColumnResizing");
function Wo({ allowTableNodeSelection: t = !1 } = {}) {
  return new Q({
    key: T,
    state: {
      init() {
        return null;
      },
      apply(e, o) {
        let n = e.getMeta(T);
        if (n != null) return n == -1 ? null : n;
        if (o == null || !e.docChanged) return o;
        let { deleted: r, pos: l } = e.mapping.mapResult(o);
        return r ? null : l;
      },
    },
    props: {
      decorations: wt,
      handleDOMEvents: { mousedown: Bt },
      createSelectionBetween(e) {
        return T.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: Lt,
      handleKeyDown: It,
      handlePaste: _t,
    },
    appendTransaction(e, o, n) {
      return Ct(n, Nt(n, o), t);
    },
  });
}
var Ye = "presets",
  Je = class t extends de("PresetsListNode", Ae) {
    constructor(e) {
      let o = { ...e, id: Ye };
      (super(o), Me(this, ke, o));
    }
    getComponentPresets() {
      return this.children.filter(G);
    }
    getStylePresets() {
      return this.children.filter(K);
    }
    getTextStylePresets() {
      return this.children.filter(ge);
    }
    getLinkStylePresets() {
      return this.children.filter(W);
    }
    getBlockquoteStylePresets() {
      return this.children.filter(Se);
    }
    getTableStylePresets() {
      return this.children.filter(I);
    }
    getInlineCodeStylePresets() {
      return this.children.filter(O);
    }
    getImageStylePresets() {
      return this.children.filter(L);
    }
    getCmsPresets() {
      return this.children.filter((e) => L(e) || I(e) || G(e));
    }
    preFreeze(e) {
      He(this, e);
    }
    static get(e) {
      return e.get(Ye);
    }
    static ensure(e) {
      let o = t.get(e);
      return o || e.insertNode(new t(), e.root.id);
    }
    static getNodes(e) {
      return t.get(e)?.children.toArray() ?? xe();
    }
  };
function Qo(t, e = Z) {
  let o = t.$from,
    n = o.parent,
    r = n.childAfter(o.parentOffset);
  if (!r.node) return t.from;
  let l = r.node.marks.find(e);
  if (l === void 0) return t.from;
  let s = o.start() + r.offset;
  for (let c = o.index() - 1; c >= 0; c--) {
    let i = n.child(c);
    if (!l.isInSet(i.marks)) break;
    s -= i.nodeSize;
  }
  return s;
}
function Zo(t, e = Z) {
  let o = t.$to,
    n = o.parent,
    r = n.childBefore(o.parentOffset);
  if (!r.node) return t.to;
  let l = r.node.marks.find(e);
  if (l === void 0) return t.to;
  let s = o.start() + r.offset + r.node.nodeSize;
  for (let c = o.indexAfter(); c < n.childCount; c++) {
    let i = n.child(c);
    if (!l.isInSet(i.marks)) break;
    s += i.nodeSize;
  }
  return s;
}
var on = { content: "block+", toMarkdown: $("root") };
export {
  Ge as a,
  Ut as b,
  ke as c,
  et as d,
  tt as e,
  ot as f,
  nt as g,
  Vt as h,
  He as i,
  st as j,
  Yt as k,
  Jt as l,
  Gt as m,
  Qt as n,
  K as o,
  oo as p,
  no as q,
  on as r,
  so as s,
  y as t,
  ho as u,
  x as v,
  w,
  Nt as x,
  bo as y,
  No as z,
  Ro as A,
  vo as B,
  xo as C,
  Mo as D,
  Ao as E,
  To as F,
  Po as G,
  ko as H,
  Ho as I,
  Do as J,
  zo as K,
  _t as L,
  _o as M,
  Wo as N,
  Ye as O,
  Je as P,
  Qo as Q,
  Zo as R,
};
//# sourceMappingURL=chunk-DGIWPVTI.mjs.map
