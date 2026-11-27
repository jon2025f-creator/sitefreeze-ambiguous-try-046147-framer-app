import {
  c as ae,
  d as se,
  e as S,
  g as ce,
  i as me,
  l as Ne,
  m as Ee,
  n as xe,
  o as U,
  p as y,
  q as Te,
  r as $,
  s as Re,
  x as be,
  y as G,
} from "chunk-UUJZFRP4.mjs";
import {
  J as pe,
  K as q,
  L as ge,
  M as g,
  N,
  O as ye,
  P as f,
  X as he,
  ca as E,
  da as x,
  ea as T,
} from "chunk-UCA6DIRC.mjs";
import { Al as L, Bl as H, Hl as fe, km as B, se as ue } from "chunk-RE42INF2.mjs";
import { i as le } from "chunk-L2QYKMOJ.mjs";
import { Ob as ne, lc as u, mc as C } from "chunk-3GNDJY2L.mjs";
import { h as ie } from "chunk-RJVD5SHM.mjs";
import { f as de } from "chunk-NJXSBLUG.mjs";
import { h as oe } from "chunk-EHED2EQW.mjs";
import { b, j as te, q as re, s as h } from "chunk-ARJ7WQTJ.mjs";
import { b as p } from "chunk-4JY5UMT2.mjs";
function V(e) {
  if (E(e)) return e.id;
  if (u(e) || C(e)) {
    for (let r of e.ancestors()) if (E(r)) return r.id;
  }
  throw new Error(
    "EntityReferenceNode | EntityFolderNode must have an EntityTypeRootNode as ancestor"
  );
}
function Ce(e, r, t) {
  if (x(r)) {
    e.has(r) || T(e, r);
    return;
  }
  let o = e.get(r),
    n = o ? V(o) : void 0,
    i = n ? Se(e, n, t) : g(t);
  if (e.has(i)) return;
  let a = new f({ id: i });
  e.insertNode(a, r);
}
function kr(e, r, t) {
  x(r) && !e.has(r) && T(e, r);
  let o = ge(t) ? ye(t) : t,
    n = e.get(r),
    i = n ? Se(e, V(n), o) : g(o);
  if (e.has(i)) return i;
  let a = new f({ id: i });
  return (e.insertNode(a, r), i);
}
function nt(e, r) {
  let t = e.get(r);
  if (h(t)) return;
  let o = e.get(t.parentid);
  if (!h(o)) return o.children?.findIndex((n) => n.id === r);
}
function Pr(e, r, t, o) {
  let n = f.get(e, r, o);
  if (h(n)) return;
  let i = n.id === N(r) ? N(t) : g(t),
    a = new f({ id: i }),
    s = nt(e, n.id),
    m = re(s) ? s + 1 : void 0;
  e.insertNode(a, n.parentid, m);
}
function Mr(e, r) {
  let t = e.get(r);
  h(t) || (e.remove(t.id), it(e, r));
}
function it(e, r, t) {
  let { isCodeFile: o = !1 } = t ?? {},
    n = o ? N(r) : g(r);
  e.remove(n);
}
function Se(e, r, t) {
  if (r === he) {
    let o = e.get(t);
    if (fe(o)) return N(t);
  }
  return g(t);
}
function at(e) {
  return (r) => u(r) && r.name === e;
}
function ve(e, r) {
  return e.children.find(at(r)) ?? null;
}
function j(e) {
  if (q(e)) return H(e.getName());
  let r = e.resolveValue("name");
  return B(e) && r ? H(r) : "Unknown";
}
function $r(e) {
  if (q(e)) return e.getName() || "Unknown";
  let r = e.resolveValue("name");
  return B(e) && r ? r : "Unknown";
}
function ct(e, r) {
  return e.children.find((t) => u(t) && t.getName() === r) ?? null;
}
function De(e) {
  return E(e) || u(e);
}
function oo(e, r, t, o) {
  let n = t;
  for (let [i, a] of r.entries()) {
    let s = e.getNode(n);
    if (!s || !De(s)) return !1;
    if (i === r.length - 1) return mt(e, s, a, o);
    let l = ct(s, a);
    if (!l) return !1;
    n = l.id;
  }
  return !1;
}
function mt(e, r, t, o) {
  for (let n of r.children)
    if (n.getName() === t && ((o === "folder" && u(n)) || (o === "reference" && C(n) && !lt(e, n))))
      return !0;
  return !1;
}
function lt(e, r) {
  let t = e.get(r.referenceId);
  return t ? ne(t) && !!t.softDeleted : !0;
}
function Fe(e) {
  return e.every((r) => r.length <= 255);
}
function Ie(e, r, t) {
  let o = 0,
    n = e.get(t);
  for (; u(n);) (o++, (n = e.get(n.parentid)));
  return o + r.length <= 33;
}
function ut(e, r, t) {
  return Fe(r) && Ie(e, r, t);
}
function dt(e, r, t) {
  (p(Fe(r), `Asset folder name is too long (max ${255} characters).`),
    p(Ie(e, r, t), `Asset folder path is too deep (max ${33} levels).`));
}
function ft(e, r, t) {
  let o = te(r) ? r : gt(r);
  if (o.length === 0) return t;
  (dt(e, o, t), x(t) && !e.has(t) && T(e, t));
  let n = e.get(t);
  p(n && De(n), "A reference must be in a folder.");
  for (let i of o) {
    let a = ve(n, i);
    if (a) {
      n = a;
      continue;
    }
    n = e.insertNode(new pe({ name: i }), n.id);
  }
  return n.id;
}
function no(e, r) {
  let t = e.tree.get(r);
  if (!u(t)) return "";
  let o = [t.name];
  for (let n of t.ancestors()) {
    if (!u(n)) break;
    o.unshift(n.name);
  }
  return `/${o.join("/")}`;
}
function Oe(e, r, t) {
  return _e(r, f.get(e, r.id, t));
}
function _e(e, r) {
  let t = [j(e)];
  if (r)
    for (let o of r.ancestors()) {
      if (!u(o)) break;
      t.unshift(j(o));
    }
  return t;
}
function io(e, r, t) {
  let o = e.get(r);
  return (p(o, "Node must exist"), Oe(e, o, t));
}
function ao(e, r, t, o = { leadingSlash: !0 }) {
  let n = e.get(r);
  return (p(n, "Node must exist"), pt(e, n, t, o));
}
function pt(e, r, t, o = { leadingSlash: !0 }) {
  let i = Oe(e, r, t).join("/");
  return o.leadingSlash ? `/${i}` : i;
}
function so(e, r) {
  return _e(r, f.get(e, r.id)).join("/");
}
function gt(e) {
  return L(e).slice(0, -1);
}
function co(e, r, t, o) {
  let n = L(t);
  if (n.length === 0) return;
  let i = n.pop();
  if (!ut(e, n, o)) return;
  let a = ft(e, t, o);
  return (Ce(e, a, r.id), r.set({ name: i }), a);
}
function ke() {
  return oe.isOn("harness2");
}
var v;
function Me() {
  return v ?? ke();
}
function W(e, r) {
  let t = v;
  v = e;
  try {
    return r();
  } finally {
    v = t;
  }
}
var Pe = 500,
  X = 350;
function w(e) {
  if (e.length <= Pe) return e;
  let r = Pe - X,
    t = e.length - X - r;
  return `${e.slice(0, X)}\u2026[${t} characters omitted]\u2026${e.slice(-r)}`;
}
function z(e) {
  return `\`${e}\``;
}
function po(e, r) {
  return Me() ? r : e;
}
function yt(e, r) {
  if (!Me()) return z(`${e}="${Nt(r)}"`);
  let t = /^[A-Za-z_$][\w$]*$/u.test(e) ? e : JSON.stringify(e);
  return z(`{ ${t}: ${ht(r)} }`);
}
function ht(e) {
  if (e === void 0) return "undefined";
  try {
    return w(JSON.stringify(e) ?? JSON.stringify(String(e)));
  } catch {
    return w(JSON.stringify(String(e)));
  }
}
function Nt(e) {
  return w(typeof e == "object" && e !== null ? (JSON.stringify(e) ?? String(e)) : String(e));
}
function go(e, r) {
  let t = r.map(z).join(" or ");
  return `a value compatible with ${yt("overflow", e ?? "visible")}: ${t}`;
}
var A = class extends Error {
  nodeIds = new Set();
  rawCommands = new Set();
  programMessage;
  projectUpdateMessage;
  constructor(r, t) {
    (super(b(r) ? r : r(), t),
      b(r) || ((this.programMessage = W(!0, r)), (this.projectUpdateMessage = W(!1, r))));
  }
  messageFor(r) {
    return r ? (this.programMessage ?? this.message) : (this.projectUpdateMessage ?? this.message);
  }
  track(r) {
    if (b(r)) this.nodeIds.add(r);
    else for (let t of r) this.nodeIds.add(t);
    return this;
  }
  trackCommand(r) {
    return (this.rawCommands.add(r), this);
  }
  absorb(r) {
    for (let t of r.nodeIds) this.nodeIds.add(t);
    for (let t of r.rawCommands) this.rawCommands.add(t);
    return this;
  }
};
var Le = class extends A {
  constructor(t, o) {
    super(o.message, { cause: o });
    this.raw = t;
    this.trackCommand(t);
  }
  raw;
  name = "CommandSyntaxError";
  severity = "syntax";
};
function Ro(e) {
  try {
    return JSON.parse(e);
  } catch {
    return;
  }
}
var Et = /["&'<>`]/g,
  xt = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
  Tt = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
  Rt = /[|\\{}()[\]^$+*?.]/g,
  He = new WeakMap();
function Be(e, r) {
  if (((e = e.replace(r.subset ? bt(r.subset) : Et, o)), r.subset || r.escapeOnly)) return e;
  return e.replace(xt, t).replace(Tt, o);
  function t(n, i, a) {
    return r.format(
      (n.charCodeAt(0) - 55296) * 1024 + n.charCodeAt(1) - 56320 + 65536,
      a.charCodeAt(i + 2),
      r
    );
  }
  function o(n, i, a) {
    return r.format(n.charCodeAt(0), a.charCodeAt(i + 1), r);
  }
}
function bt(e) {
  let r = He.get(e);
  return (r || ((r = Ct(e)), He.set(e, r)), r);
}
function Ct(e) {
  let r = [],
    t = -1;
  for (; ++t < e.length;) r.push(e[t].replace(Rt, "\\$&"));
  return new RegExp("(?:" + r.join("|") + ")", "g");
}
var St = /[\dA-Fa-f]/;
function qe(e, r, t) {
  let o = "&#x" + e.toString(16).toUpperCase();
  return t && r && !St.test(String.fromCharCode(r)) ? o : o + ";";
}
var vt = /\d/;
function Ue(e, r, t) {
  let o = "&#" + String(e);
  return t && r && !vt.test(String.fromCharCode(r)) ? o : o + ";";
}
var $e = [
  "AElig",
  "AMP",
  "Aacute",
  "Acirc",
  "Agrave",
  "Aring",
  "Atilde",
  "Auml",
  "COPY",
  "Ccedil",
  "ETH",
  "Eacute",
  "Ecirc",
  "Egrave",
  "Euml",
  "GT",
  "Iacute",
  "Icirc",
  "Igrave",
  "Iuml",
  "LT",
  "Ntilde",
  "Oacute",
  "Ocirc",
  "Ograve",
  "Oslash",
  "Otilde",
  "Ouml",
  "QUOT",
  "REG",
  "THORN",
  "Uacute",
  "Ucirc",
  "Ugrave",
  "Uuml",
  "Yacute",
  "aacute",
  "acirc",
  "acute",
  "aelig",
  "agrave",
  "amp",
  "aring",
  "atilde",
  "auml",
  "brvbar",
  "ccedil",
  "cedil",
  "cent",
  "copy",
  "curren",
  "deg",
  "divide",
  "eacute",
  "ecirc",
  "egrave",
  "eth",
  "euml",
  "frac12",
  "frac14",
  "frac34",
  "gt",
  "iacute",
  "icirc",
  "iexcl",
  "igrave",
  "iquest",
  "iuml",
  "laquo",
  "lt",
  "macr",
  "micro",
  "middot",
  "nbsp",
  "not",
  "ntilde",
  "oacute",
  "ocirc",
  "ograve",
  "ordf",
  "ordm",
  "oslash",
  "otilde",
  "ouml",
  "para",
  "plusmn",
  "pound",
  "quot",
  "raquo",
  "reg",
  "sect",
  "shy",
  "sup1",
  "sup2",
  "sup3",
  "szlig",
  "thorn",
  "times",
  "uacute",
  "ucirc",
  "ugrave",
  "uml",
  "uuml",
  "yacute",
  "yen",
  "yuml",
];
var D = {
  nbsp: "\xA0",
  iexcl: "\xA1",
  cent: "\xA2",
  pound: "\xA3",
  curren: "\xA4",
  yen: "\xA5",
  brvbar: "\xA6",
  sect: "\xA7",
  uml: "\xA8",
  copy: "\xA9",
  ordf: "\xAA",
  laquo: "\xAB",
  not: "\xAC",
  shy: "\xAD",
  reg: "\xAE",
  macr: "\xAF",
  deg: "\xB0",
  plusmn: "\xB1",
  sup2: "\xB2",
  sup3: "\xB3",
  acute: "\xB4",
  micro: "\xB5",
  para: "\xB6",
  middot: "\xB7",
  cedil: "\xB8",
  sup1: "\xB9",
  ordm: "\xBA",
  raquo: "\xBB",
  frac14: "\xBC",
  frac12: "\xBD",
  frac34: "\xBE",
  iquest: "\xBF",
  Agrave: "\xC0",
  Aacute: "\xC1",
  Acirc: "\xC2",
  Atilde: "\xC3",
  Auml: "\xC4",
  Aring: "\xC5",
  AElig: "\xC6",
  Ccedil: "\xC7",
  Egrave: "\xC8",
  Eacute: "\xC9",
  Ecirc: "\xCA",
  Euml: "\xCB",
  Igrave: "\xCC",
  Iacute: "\xCD",
  Icirc: "\xCE",
  Iuml: "\xCF",
  ETH: "\xD0",
  Ntilde: "\xD1",
  Ograve: "\xD2",
  Oacute: "\xD3",
  Ocirc: "\xD4",
  Otilde: "\xD5",
  Ouml: "\xD6",
  times: "\xD7",
  Oslash: "\xD8",
  Ugrave: "\xD9",
  Uacute: "\xDA",
  Ucirc: "\xDB",
  Uuml: "\xDC",
  Yacute: "\xDD",
  THORN: "\xDE",
  szlig: "\xDF",
  agrave: "\xE0",
  aacute: "\xE1",
  acirc: "\xE2",
  atilde: "\xE3",
  auml: "\xE4",
  aring: "\xE5",
  aelig: "\xE6",
  ccedil: "\xE7",
  egrave: "\xE8",
  eacute: "\xE9",
  ecirc: "\xEA",
  euml: "\xEB",
  igrave: "\xEC",
  iacute: "\xED",
  icirc: "\xEE",
  iuml: "\xEF",
  eth: "\xF0",
  ntilde: "\xF1",
  ograve: "\xF2",
  oacute: "\xF3",
  ocirc: "\xF4",
  otilde: "\xF5",
  ouml: "\xF6",
  divide: "\xF7",
  oslash: "\xF8",
  ugrave: "\xF9",
  uacute: "\xFA",
  ucirc: "\xFB",
  uuml: "\xFC",
  yacute: "\xFD",
  thorn: "\xFE",
  yuml: "\xFF",
  fnof: "\u0192",
  Alpha: "\u0391",
  Beta: "\u0392",
  Gamma: "\u0393",
  Delta: "\u0394",
  Epsilon: "\u0395",
  Zeta: "\u0396",
  Eta: "\u0397",
  Theta: "\u0398",
  Iota: "\u0399",
  Kappa: "\u039A",
  Lambda: "\u039B",
  Mu: "\u039C",
  Nu: "\u039D",
  Xi: "\u039E",
  Omicron: "\u039F",
  Pi: "\u03A0",
  Rho: "\u03A1",
  Sigma: "\u03A3",
  Tau: "\u03A4",
  Upsilon: "\u03A5",
  Phi: "\u03A6",
  Chi: "\u03A7",
  Psi: "\u03A8",
  Omega: "\u03A9",
  alpha: "\u03B1",
  beta: "\u03B2",
  gamma: "\u03B3",
  delta: "\u03B4",
  epsilon: "\u03B5",
  zeta: "\u03B6",
  eta: "\u03B7",
  theta: "\u03B8",
  iota: "\u03B9",
  kappa: "\u03BA",
  lambda: "\u03BB",
  mu: "\u03BC",
  nu: "\u03BD",
  xi: "\u03BE",
  omicron: "\u03BF",
  pi: "\u03C0",
  rho: "\u03C1",
  sigmaf: "\u03C2",
  sigma: "\u03C3",
  tau: "\u03C4",
  upsilon: "\u03C5",
  phi: "\u03C6",
  chi: "\u03C7",
  psi: "\u03C8",
  omega: "\u03C9",
  thetasym: "\u03D1",
  upsih: "\u03D2",
  piv: "\u03D6",
  bull: "\u2022",
  hellip: "\u2026",
  prime: "\u2032",
  Prime: "\u2033",
  oline: "\u203E",
  frasl: "\u2044",
  weierp: "\u2118",
  image: "\u2111",
  real: "\u211C",
  trade: "\u2122",
  alefsym: "\u2135",
  larr: "\u2190",
  uarr: "\u2191",
  rarr: "\u2192",
  darr: "\u2193",
  harr: "\u2194",
  crarr: "\u21B5",
  lArr: "\u21D0",
  uArr: "\u21D1",
  rArr: "\u21D2",
  dArr: "\u21D3",
  hArr: "\u21D4",
  forall: "\u2200",
  part: "\u2202",
  exist: "\u2203",
  empty: "\u2205",
  nabla: "\u2207",
  isin: "\u2208",
  notin: "\u2209",
  ni: "\u220B",
  prod: "\u220F",
  sum: "\u2211",
  minus: "\u2212",
  lowast: "\u2217",
  radic: "\u221A",
  prop: "\u221D",
  infin: "\u221E",
  ang: "\u2220",
  and: "\u2227",
  or: "\u2228",
  cap: "\u2229",
  cup: "\u222A",
  int: "\u222B",
  there4: "\u2234",
  sim: "\u223C",
  cong: "\u2245",
  asymp: "\u2248",
  ne: "\u2260",
  equiv: "\u2261",
  le: "\u2264",
  ge: "\u2265",
  sub: "\u2282",
  sup: "\u2283",
  nsub: "\u2284",
  sube: "\u2286",
  supe: "\u2287",
  oplus: "\u2295",
  otimes: "\u2297",
  perp: "\u22A5",
  sdot: "\u22C5",
  lceil: "\u2308",
  rceil: "\u2309",
  lfloor: "\u230A",
  rfloor: "\u230B",
  lang: "\u2329",
  rang: "\u232A",
  loz: "\u25CA",
  spades: "\u2660",
  clubs: "\u2663",
  hearts: "\u2665",
  diams: "\u2666",
  quot: '"',
  amp: "&",
  lt: "<",
  gt: ">",
  OElig: "\u0152",
  oelig: "\u0153",
  Scaron: "\u0160",
  scaron: "\u0161",
  Yuml: "\u0178",
  circ: "\u02C6",
  tilde: "\u02DC",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "\u200C",
  zwj: "\u200D",
  lrm: "\u200E",
  rlm: "\u200F",
  ndash: "\u2013",
  mdash: "\u2014",
  lsquo: "\u2018",
  rsquo: "\u2019",
  sbquo: "\u201A",
  ldquo: "\u201C",
  rdquo: "\u201D",
  bdquo: "\u201E",
  dagger: "\u2020",
  Dagger: "\u2021",
  permil: "\u2030",
  lsaquo: "\u2039",
  rsaquo: "\u203A",
  euro: "\u20AC",
};
var Ge = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"];
var Ve = {}.hasOwnProperty,
  K = {},
  F;
for (F in D) Ve.call(D, F) && (K[D[F]] = F);
var wt = /[^\dA-Za-z]/;
function je(e, r, t, o) {
  let n = String.fromCharCode(e);
  if (Ve.call(K, n)) {
    let i = K[n],
      a = "&" + i;
    return t &&
      $e.includes(i) &&
      !Ge.includes(i) &&
      (!o || (r && r !== 61 && wt.test(String.fromCharCode(r))))
      ? a
      : a + ";";
  }
  return "";
}
function Xe(e, r, t) {
  let o = qe(e, r, t.omitOptionalSemicolons),
    n;
  if (
    ((t.useNamedReferences || t.useShortestReferences) &&
      (n = je(e, r, t.omitOptionalSemicolons, t.attribute)),
    (t.useShortestReferences || !n) && t.useShortestReferences)
  ) {
    let i = Ue(e, r, t.omitOptionalSemicolons);
    i.length < o.length && (o = i);
  }
  return n && (!t.useShortestReferences || n.length < o.length) ? n : o;
}
function d(e, r) {
  return Be(e, Object.assign({ format: Xe }, r));
}
var At = /^>|^->|<!--|-->|--!>|<!-$/g,
  Dt = [">"],
  Ft = ["<", ">"];
function ze(e, r, t, o) {
  return o.settings.bogusComments
    ? "<?" + d(e.value, Object.assign({}, o.settings.characterReferences, { subset: Dt })) + ">"
    : "<!--" + e.value.replace(At, n) + "-->";
  function n(i) {
    return d(i, Object.assign({}, o.settings.characterReferences, { subset: Ft }));
  }
}
function We(e, r, t, o) {
  return (
    "<!" +
    (o.settings.upperDoctype ? "DOCTYPE" : "doctype") +
    (o.settings.tightDoctype ? "" : " ") +
    "html>"
  );
}
var c = Ke(1),
  Y = Ke(-1),
  It = [];
function Ke(e) {
  return r;
  function r(t, o, n) {
    let i = t ? t.children : It,
      a = (o || 0) + e,
      s = i[a];
    if (!n) for (; s && y(s);) ((a += e), (s = i[a]));
    return s;
  }
}
var Ot = {}.hasOwnProperty;
function I(e) {
  return r;
  function r(t, o, n) {
    return Ot.call(e, t.tagName) && e[t.tagName](t, o, n);
  }
}
var R = I({
  body: kt,
  caption: J,
  colgroup: J,
  dd: Ht,
  dt: Lt,
  head: J,
  html: _t,
  li: Mt,
  optgroup: Bt,
  option: qt,
  p: Pt,
  rp: Ye,
  rt: Ye,
  tbody: $t,
  td: Je,
  tfoot: Gt,
  th: Je,
  thead: Ut,
  tr: Vt,
});
function J(e, r, t) {
  let o = c(t, r, !0);
  return !o || (o.type !== "comment" && !(o.type === "text" && y(o.value.charAt(0))));
}
function _t(e, r, t) {
  let o = c(t, r);
  return !o || o.type !== "comment";
}
function kt(e, r, t) {
  let o = c(t, r);
  return !o || o.type !== "comment";
}
function Pt(e, r, t) {
  let o = c(t, r);
  return o
    ? o.type === "element" &&
        (o.tagName === "address" ||
          o.tagName === "article" ||
          o.tagName === "aside" ||
          o.tagName === "blockquote" ||
          o.tagName === "details" ||
          o.tagName === "div" ||
          o.tagName === "dl" ||
          o.tagName === "fieldset" ||
          o.tagName === "figcaption" ||
          o.tagName === "figure" ||
          o.tagName === "footer" ||
          o.tagName === "form" ||
          o.tagName === "h1" ||
          o.tagName === "h2" ||
          o.tagName === "h3" ||
          o.tagName === "h4" ||
          o.tagName === "h5" ||
          o.tagName === "h6" ||
          o.tagName === "header" ||
          o.tagName === "hgroup" ||
          o.tagName === "hr" ||
          o.tagName === "main" ||
          o.tagName === "menu" ||
          o.tagName === "nav" ||
          o.tagName === "ol" ||
          o.tagName === "p" ||
          o.tagName === "pre" ||
          o.tagName === "section" ||
          o.tagName === "table" ||
          o.tagName === "ul")
    : !t ||
        !(
          t.type === "element" &&
          (t.tagName === "a" ||
            t.tagName === "audio" ||
            t.tagName === "del" ||
            t.tagName === "ins" ||
            t.tagName === "map" ||
            t.tagName === "noscript" ||
            t.tagName === "video")
        );
}
function Mt(e, r, t) {
  let o = c(t, r);
  return !o || (o.type === "element" && o.tagName === "li");
}
function Lt(e, r, t) {
  let o = c(t, r);
  return !!(o && o.type === "element" && (o.tagName === "dt" || o.tagName === "dd"));
}
function Ht(e, r, t) {
  let o = c(t, r);
  return !o || (o.type === "element" && (o.tagName === "dt" || o.tagName === "dd"));
}
function Ye(e, r, t) {
  let o = c(t, r);
  return !o || (o.type === "element" && (o.tagName === "rp" || o.tagName === "rt"));
}
function Bt(e, r, t) {
  let o = c(t, r);
  return !o || (o.type === "element" && o.tagName === "optgroup");
}
function qt(e, r, t) {
  let o = c(t, r);
  return !o || (o.type === "element" && (o.tagName === "option" || o.tagName === "optgroup"));
}
function Ut(e, r, t) {
  let o = c(t, r);
  return !!(o && o.type === "element" && (o.tagName === "tbody" || o.tagName === "tfoot"));
}
function $t(e, r, t) {
  let o = c(t, r);
  return !o || (o.type === "element" && (o.tagName === "tbody" || o.tagName === "tfoot"));
}
function Gt(e, r, t) {
  return !c(t, r);
}
function Vt(e, r, t) {
  let o = c(t, r);
  return !o || (o.type === "element" && o.tagName === "tr");
}
function Je(e, r, t) {
  let o = c(t, r);
  return !o || (o.type === "element" && (o.tagName === "td" || o.tagName === "th"));
}
var Ze = I({ body: zt, colgroup: Wt, head: Xt, html: jt, tbody: Kt });
function jt(e) {
  let r = c(e, -1);
  return !r || r.type !== "comment";
}
function Xt(e) {
  let r = new Set();
  for (let o of e.children)
    if (o.type === "element" && (o.tagName === "base" || o.tagName === "title")) {
      if (r.has(o.tagName)) return !1;
      r.add(o.tagName);
    }
  let t = e.children[0];
  return !t || t.type === "element";
}
function zt(e) {
  let r = c(e, -1, !0);
  return (
    !r ||
    (r.type !== "comment" &&
      !(r.type === "text" && y(r.value.charAt(0))) &&
      !(
        r.type === "element" &&
        (r.tagName === "meta" ||
          r.tagName === "link" ||
          r.tagName === "script" ||
          r.tagName === "style" ||
          r.tagName === "template")
      ))
  );
}
function Wt(e, r, t) {
  let o = Y(t, r),
    n = c(e, -1, !0);
  return t &&
    o &&
    o.type === "element" &&
    o.tagName === "colgroup" &&
    R(o, t.children.indexOf(o), t)
    ? !1
    : !!(n && n.type === "element" && n.tagName === "col");
}
function Kt(e, r, t) {
  let o = Y(t, r),
    n = c(e, -1);
  return t &&
    o &&
    o.type === "element" &&
    (o.tagName === "thead" || o.tagName === "tbody") &&
    R(o, t.children.indexOf(o), t)
    ? !1
    : !!(n && n.type === "element" && n.tagName === "tr");
}
var O = {
  name: [
    [
      `	
\f\r &/=>`.split(""),
      `	
\f\r "&'/=>\``.split(""),
    ],
    [
      `\0	
\f\r "&'/<=>`.split(""),
      `\0	
\f\r "&'/<=>\``.split(""),
    ],
  ],
  unquoted: [
    [
      `	
\f\r &>`.split(""),
      `\0	
\f\r "&'<=>\``.split(""),
    ],
    [
      `\0	
\f\r "&'<=>\``.split(""),
      `\0	
\f\r "&'<=>\``.split(""),
    ],
  ],
  single: [
    ["&'".split(""), "\"&'`".split("")],
    ["\0&'".split(""), "\0\"&'`".split("")],
  ],
  double: [
    ['"&'.split(""), "\"&'`".split("")],
    ['\0"&'.split(""), "\0\"&'`".split("")],
  ],
};
function Qe(e, r, t, o) {
  let n = o.schema,
    i = n.space === "svg" ? !1 : o.settings.omitOptionalTags,
    a =
      n.space === "svg"
        ? o.settings.closeEmptyElements
        : o.settings.voids.includes(e.tagName.toLowerCase()),
    s = [],
    m;
  n.space === "html" && e.tagName === "svg" && (o.schema = S);
  let l = Yt(o, e.properties),
    ee = o.all(n.space === "html" && e.tagName === "template" ? e.content : e);
  return (
    (o.schema = n),
    ee && (a = !1),
    (l || !i || !Ze(e, r, t)) &&
      (s.push("<", e.tagName, l ? " " + l : ""),
      a &&
        (n.space === "svg" || o.settings.closeSelfClosing) &&
        ((m = l.charAt(l.length - 1)),
        (!o.settings.tightSelfClosing || m === "/" || (m && m !== '"' && m !== "'")) && s.push(" "),
        s.push("/")),
      s.push(">")),
    s.push(ee),
    !a && (!i || !R(e, r, t)) && s.push("</" + e.tagName + ">"),
    s.join("")
  );
}
function Yt(e, r) {
  let t = [],
    o = -1,
    n;
  if (r) {
    for (n in r)
      if (r[n] !== null && r[n] !== void 0) {
        let i = Jt(e, n, r[n]);
        i && t.push(i);
      }
  }
  for (; ++o < t.length;) {
    let i = e.settings.tightAttributes ? t[o].charAt(t[o].length - 1) : void 0;
    o !== t.length - 1 && i !== '"' && i !== "'" && (t[o] += " ");
  }
  return t.join("");
}
function Jt(e, r, t) {
  let o = ae(e.schema, r),
    n = e.settings.allowParseErrors && e.schema.space === "html" ? 0 : 1,
    i = e.settings.allowDangerousCharacters ? 0 : 1,
    a = e.quote,
    s;
  if (
    (o.overloadedBoolean && (t === o.attribute || t === "")
      ? (t = !0)
      : (o.boolean || o.overloadedBoolean) &&
        (typeof t != "string" || t === o.attribute || t === "") &&
        (t = !!t),
    t == null || t === !1 || (typeof t == "number" && Number.isNaN(t)))
  )
    return "";
  let m = d(
    o.attribute,
    Object.assign({}, e.settings.characterReferences, { subset: O.name[n][i] })
  );
  return t === !0 ||
    ((t = Array.isArray(t)
      ? (o.commaSeparated ? ce : me)(t, { padLeft: !e.settings.tightCommaSeparatedLists })
      : String(t)),
    e.settings.collapseEmptyAttributes && !t)
    ? m
    : (e.settings.preferUnquoted &&
        (s = d(
          t,
          Object.assign({}, e.settings.characterReferences, {
            attribute: !0,
            subset: O.unquoted[n][i],
          })
        )),
      s !== t &&
        (e.settings.quoteSmart && U(t, a) > U(t, e.alternative) && (a = e.alternative),
        (s =
          a +
          d(
            t,
            Object.assign({}, e.settings.characterReferences, {
              subset: (a === "'" ? O.single : O.double)[n][i],
              attribute: !0,
            })
          ) +
          a)),
      m + (s && "=" + s));
}
var Zt = ["<", "&"];
function _(e, r, t, o) {
  return t && t.type === "element" && (t.tagName === "script" || t.tagName === "style")
    ? e.value
    : d(e.value, Object.assign({}, o.settings.characterReferences, { subset: Zt }));
}
function et(e, r, t, o) {
  return o.settings.allowDangerousHtml ? e.value : _(e, r, t, o);
}
function tt(e, r, t, o) {
  return o.all(e);
}
var rt = le("type", {
  invalid: Qt,
  unknown: er,
  handlers: { comment: ze, doctype: We, element: Qe, raw: et, root: tt, text: _ },
});
function Qt(e) {
  throw new Error("Expected node, not `" + e + "`");
}
function er(e) {
  let r = e;
  throw new Error("Cannot compile unknown node `" + r.type + "`");
}
var tr = {},
  rr = {},
  or = [];
function Z(e, r) {
  let t = r || tr,
    o = t.quote || '"',
    n = o === '"' ? "'" : '"';
  if (o !== '"' && o !== "'") throw new Error("Invalid quote `" + o + "`, expected `'` or `\"`");
  return {
    one: nr,
    all: ir,
    settings: {
      omitOptionalTags: t.omitOptionalTags || !1,
      allowParseErrors: t.allowParseErrors || !1,
      allowDangerousCharacters: t.allowDangerousCharacters || !1,
      quoteSmart: t.quoteSmart || !1,
      preferUnquoted: t.preferUnquoted || !1,
      tightAttributes: t.tightAttributes || !1,
      upperDoctype: t.upperDoctype || !1,
      tightDoctype: t.tightDoctype || !1,
      bogusComments: t.bogusComments || !1,
      tightCommaSeparatedLists: t.tightCommaSeparatedLists || !1,
      tightSelfClosing: t.tightSelfClosing || !1,
      collapseEmptyAttributes: t.collapseEmptyAttributes || !1,
      allowDangerousHtml: t.allowDangerousHtml || !1,
      voids: t.voids || xe,
      characterReferences: t.characterReferences || rr,
      closeSelfClosing: t.closeSelfClosing || !1,
      closeEmptyElements: t.closeEmptyElements || !1,
    },
    schema: t.space === "svg" ? S : se,
    quote: o,
    alternative: n,
  }.one(Array.isArray(e) ? { type: "root", children: e } : e, void 0, void 0);
}
function nr(e, r, t) {
  return rt(e, r, t, this);
}
function ir(e) {
  let r = [],
    t = (e && e.children) || or,
    o = -1;
  for (; ++o < t.length;) r[o] = this.one(t[o], o, e);
  return r.join("");
}
function k(e) {
  let r = this,
    t = { ...r.data("settings"), ...e };
  r.compiler = o;
  function o(n) {
    return Z(n, t);
  }
}
function Q(e) {
  Te(e, [/\r?\n|\r/g, ar]);
}
function ar() {
  return { type: "break" };
}
function P() {
  return function (e) {
    Q(e);
  };
}
function M(e) {
  let r = this;
  r.compiler = t;
  function t(o) {
    return Ee(o, { ...r.data("settings"), ...e, extensions: r.data("toMarkdownExtensions") || [] });
  }
}
var sr = /^(#{1,6})\s+(.+)$/mu,
  cr = /\*\*(.*?)\*\*/u,
  mr = /\*(.*?)\*/u,
  lr = /^\s*[-*+]\s+(.+)$/mu,
  ur = /^\s*(\d+)\.\s+(.+)$/mu,
  dr = /^>\s+(.+)$/mu,
  fr = /\[([^\]]+)\]\((https?:\/\/[^)]+)\)/u,
  pr = /`([^`]+)`/u,
  gr = /```[\s\S]*?```/u,
  yr = /^\s*\|.+\|\s*$/mu,
  hr = /~~(.*?)~~/u,
  Nr = /^\s*[-*+]\s+\[[ x]\]\s+\S/m,
  Er = /^(-{3,}|_{3,})\s*$/mu,
  xr = /!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/u,
  Tr = /<(https?:\/\/[^>]+)>/u;
function Rr(e) {
  return !e || e.length === 0
    ? !1
    : [sr, cr, mr, lr, ur, dr, fr, pr, gr, yr, hr, Nr, Er, xr, Tr].some((t) => t.test(e));
}
function ri(e) {
  return Rr(e) ? ot(e) : e;
}
function ot(e, { singleNewlinesAsHardBreaks: r = !0 } = {}) {
  let t = G();
  return (
    t.use(Re),
    r && t.use(P),
    t.use($),
    t.use(be, {
      allowDangerousHtml: !0,
      handlers: {
        break: function (n, i) {
          let a = { type: "element", tagName: "br", properties: {}, children: [] };
          return (n.patch(i, a), [n.applyData(i, a)]);
        },
      },
    }),
    t.use(k, { allowDangerousHtml: !0 }),
    t.processSync(e).toString()
  );
}
function oi(e, r) {
  let t = ot(e),
    o = document.createElement("div");
  return ((o.innerHTML = t), ie.fromSchema(r).parseSlice(o, { preserveWhitespace: !0 }));
}
function ni(e, r, t) {
  let o = {},
    n;
  for (n in t.nodes) o[n] = t.nodes[n].spec.toMarkdown;
  let i = {},
    a;
  for (a in t.marks) {
    let m = t.marks[a].spec.toMarkdown;
    i[a] = (...l) => m(...l, r);
  }
  let s = ue(e, { schema: t, nodeHandlers: o, markHandlers: i });
  return G()
    .use($)
    .use(M, {
      handlers: {
        text(...m) {
          let [l] = m;
          return l.data?.avoidEscaping ? l.value : Ne.text(...m);
        },
      },
      bullet: "-",
      emphasis: "_",
    })
    .stringify(s);
}
function li(e) {
  switch (e) {
    case "motionvalue":
      return "Motion Value";
    case "eventhandler":
      return "Event";
    case "richtext":
      return "Formatted Text";
    case "string":
      return "Plain Text";
    case "boolean":
      return "Toggle";
    case "enum":
      return "Option";
    case "cursor":
      return "Cursor";
    case "boxshadow":
      return "Shadow";
    case "borderradius":
      return "Border Radius";
    case "scrollsectionref":
      return "Scroll Section";
    case "array":
      return "Gallery";
    case "linkrelvalues":
      return "Link Rel";
    case "location":
      return "Location";
    default:
      return de(e);
  }
}
export {
  j as a,
  $r as b,
  V as c,
  Ce as d,
  kr as e,
  Pr as f,
  Mr as g,
  it as h,
  Se as i,
  ct as j,
  De as k,
  oo as l,
  lt as m,
  ut as n,
  ft as o,
  no as p,
  io as q,
  ao as r,
  pt as s,
  so as t,
  gt as u,
  co as v,
  ke as w,
  Pe as x,
  w as y,
  z,
  po as A,
  yt as B,
  Nt as C,
  go as D,
  A as E,
  Le as F,
  Ro as G,
  Z as H,
  P as I,
  M as J,
  Rr as K,
  ri as L,
  ot as M,
  oi as N,
  ni as O,
  li as P,
};
//# sourceMappingURL=chunk-KK4V7WO4.mjs.map
