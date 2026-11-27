import { b as U } from "chunk-ABHAING4.mjs";
import {
  Cd as fe,
  Dd as pe,
  Gd as ye,
  Hd as Ce,
  ce as be,
  de as Ie,
  p as de,
  ud as ce,
  vd as k,
  wd as L,
} from "chunk-QXUDYZJG.mjs";
import { vb as le } from "chunk-WKXIZXJ4.mjs";
import { g as N } from "chunk-DFCPVMPE.mjs";
import { c as I } from "chunk-QRTZQIB6.mjs";
import { N as ue } from "chunk-DRVF2SUD.mjs";
import { Il as me, qh as se } from "chunk-BP2ZYPEN.mjs";
import {
  Ap as x,
  Dp as T,
  Fa as Z,
  Fp as M,
  Ha as $,
  Hm as ae,
  Jk as ne,
  Qj as A,
  Sj as oe,
  Vk as ie,
  mm as Me,
  se as R,
  ta as w,
  ua as Y,
  xp as P,
} from "chunk-3GNDJY2L.mjs";
import { G as re, d as ee, g } from "chunk-GV47JEYI.mjs";
import { xf as E } from "chunk-DPHJW6UJ.mjs";
import { a as D } from "chunk-2FCXHKEL.mjs";
import { b as S, p as te } from "chunk-ARJ7WQTJ.mjs";
import { a as X } from "chunk-SWYZG2NI.mjs";
import { b as V } from "chunk-4JY5UMT2.mjs";
import { e as C } from "chunk-WLHSDIGQ.mjs";
var j = C(X(), 1);
var ge = C(X(), 1),
  ve = C(Me(), 1);
var De = C(D(), 1);
function Le(t, e) {
  return { ...w(t, e), transformTemplate: Y(t) };
}
function Ne(t) {
  if (!(t.width === "auto" && t.height === "auto")) return t.width ?? "auto";
}
function Fe(t) {
  return ((t.__fromCanvasComponent = !0), (t.width = Ne(t)), t);
}
var he = { [se]: !0 };
Object.freeze(he);
function Ve({
  node: t,
  combinedValueMap: e,
  frameProps: r,
  getCodeComponentProps: n,
  renderVectorWithIdentifier: o,
}) {
  let i = R(t.dynamicVectorSetIdentifier)
      ? t.resolveValue("dynamicVectorSetIdentifier", e)
      : t.codeComponentIdentifier,
    l = L(i) ? i?.identifier : S(i) && g(i) ? i : void 0,
    s = g(l),
    m = r.id ?? re(t.id),
    f = t.isVisible(),
    y = (0, ge.useRef)(null);
  Z({ id: m, _needsMeasure: r._needsMeasure, visible: f }, y);
  let [u] = $(Fe(r));
  return !l || !i || !f
    ? null
    : s
      ? o(l, () => ({
          ...he,
          ...Le(r.center, u),
          ...n(),
          ref: y,
          id: m,
          style: u,
          "data-framer-component-type": "Frame",
        }))
      : (0, ve.isValidElementType)(i)
        ? (0, De.jsx)(i, {
            ...n(),
            ...w(void 0, u),
            ref: y,
            id: m,
            style: u,
            "data-framer-component-type": "Frame",
          })
        : null;
}
var d = C(D(), 1);
function Se(t) {
  return j.default.forwardRef((e, r) => {
    let n = U(),
      [o, i] = N(n, t);
    switch (o.status) {
      case "loading":
        return (0, d.jsx)("div", {
          className: e.className,
          style: e.style,
          children: (0, d.jsx)(I, {}),
        });
      case "error":
        return (0, d.jsx)("div", {
          className: e.className,
          style: e.style,
          children: (0, d.jsx)(I, { error: { title: o.title, message: o.message } }),
        });
      default: {
        let l = o.definition.class;
        return (0, d.jsx)(i, { children: (0, d.jsx)(l, { ...e, ref: r }) });
      }
    }
  });
}
var Ee = j.default.forwardRef(function ({ tracker: e, identifier: r, getProps: n }, o) {
  let [i, l] = N(e.modulesRuntime, r),
    { id: s, style: m, className: f, ...y } = n();
  switch (i.status) {
    case "loading":
      return (
        s && e.trackLoading(s),
        (0, d.jsx)(E.div, { className: f, style: m, children: (0, d.jsx)(I, {}) })
      );
    case "error":
      return (
        s && e.trackLoaded(s),
        (0, d.jsx)(E.div, {
          className: f,
          style: m,
          children: (0, d.jsx)(I, { error: { title: i.title, message: i.message } }),
        })
      );
    default: {
      let u = i.definition.class;
      return (
        s && e.trackLoaded(s),
        (0, d.jsx)(l, {
          children: (0, d.jsx)(u, {
            ref: o,
            ...y,
            id: s,
            style: m,
            "data-framer-component-type": "Frame",
          }),
        })
      );
    }
  }
});
function we({ identifier: t }) {
  let e = U();
  return (N(e, t), null);
}
function at({ tracker: t, node: e, activeLocale: r, combinedValueMap: n, frameProps: o }) {
  return Ve({
    node: e,
    combinedValueMap: n,
    frameProps: o,
    getCodeComponentProps() {
      return e.getCodeComponentProps(
        t.componentLoader,
        Ie(),
        n,
        r,
        t.createFetchDataValueResolver(e)
      );
    },
    renderVectorWithIdentifier(i, l) {
      let s = R(e.dynamicVectorSetIdentifier)
          ? e.resolveValue("dynamicVectorSetIdentifier", n)
          : e.codeComponentIdentifier,
        m = L(s) ? s.identifier : s;
      return (0, d.jsxs)(d.Fragment, {
        children: [
          m !== e.codeComponentIdentifier &&
          g(e.codeComponentIdentifier) &&
          ee(e.codeComponentIdentifier)
            ? (0, d.jsx)(we, { identifier: e.codeComponentIdentifier })
            : null,
          (0, d.jsx)(Ee, { tracker: t, getProps: l, identifier: i }),
        ],
      });
    },
  });
}
var O = class {
  constructor(e, r, n, o, i, l = "eager", s, m) {
    this.componentLoader = r;
    this.collectionNode = n;
    this.locale = o;
    this.visibility = i;
    ((this.sharedTypesUpdate = k(e, n.variables)),
      (this.includeDrafts = m),
      (this.resolvers = s ?? {
        resolveColor: (a) => a,
        resolveFile: (a) => this.assetResolver(a),
        resolveImage: (a, c) => {
          let p = this.assetResolver(a);
          if (!te(p)) return { src: p, ...c };
        },
        resolveLink: (a) => le(this.tree, a),
        resolveRichTextPointer: (a) => a,
        resolveVectorSetItemPointer: (a) => a,
      }));
    let f = fe(n.variables),
      y = n.getSlugVariable(),
      u = ce(e, n.getPropertyControls(e, r)),
      W = Object.entries(u),
      _ = {
        id: { type: "string", isNullable: !1 },
        [T]: { type: "date", isNullable: !0 },
        [M]: { type: "date", isNullable: !0 },
        [P]: { type: "string", isNullable: !0 },
        [x]: { type: "string", isNullable: !0 },
      };
    for (let [a, c] of W) {
      let p = Ce(c);
      p && (_[a] = p);
    }
    this.schema = _;
    let B = ["id", T, M, P, x, ...Object.keys(u)],
      z = n.getSortedChildren(i, "group-drafts"),
      G = m === !1 ? z.filter((a) => a.isDraft !== !0) : z,
      v = o ? G.filter((a) => oe(a, o.id) !== "exclude") : G,
      F = new Map(),
      H = new Set();
    for (let a of ne(e, "includeDrafts")) (F.set(a.id, a), H.add(a.id));
    for (let a = 0; a < v.length; a++) {
      let c = v.at(a);
      if (!c) continue;
      let p;
      if (o) {
        let b = de(c, o, A, H);
        p = F.get(b) ?? F.get(A);
      }
      let K = v[a - 1],
        q = v[a + 1],
        J = (b) => {
          let h = u[b],
            Q = h && pe(b, h, f, u, c);
          if (h && Q) {
            let Te = b === y?.id ? o : p;
            return (
              ye({ control: h, controlProp: Q, resolvers: this.resolvers, locale: Te }) ?? null
            );
          }
          switch (b) {
            case "id":
              return { type: "string", value: c.id };
            case T:
              return c.createdAt
                ? { type: "date", value: new Date(c.createdAt).toISOString() }
                : null;
            case M:
              return c.updatedAt
                ? { type: "date", value: new Date(c.updatedAt).toISOString() }
                : null;
            case P:
              return K ? { type: "string", value: K.id } : null;
            case x:
              return q ? { type: "string", value: q.id } : null;
          }
        },
        Pe = l === "eager" ? Ae(B, J) : ke(B, J),
        xe = { pointer: String(a), data: Pe };
      this.items.push(xe);
    }
    l === "lazy" && (this.scannedFields = { id: this.schema.id });
  }
  componentLoader;
  collectionNode;
  locale;
  visibility;
  schema;
  items = [];
  indexes = [];
  scannedFields;
  assetResolver = be();
  usedComponents = new Map();
  sharedTypesUpdate;
  resolvers;
  includeDrafts;
  get tree() {
    let e = this.collectionNode.tree();
    return (V(e, "Collection node must be in a tree"), e);
  }
  resolveRichText(e) {
    return Ue(e, this.tree, this.componentLoader, this.usedComponents);
  }
  resolveVectorSetItem(e) {
    return e;
  }
  async scanItems() {
    return this.items;
  }
  async resolveItems(e) {
    return e.map((r) => {
      let n = Number(r),
        o = this.items[n];
      return (V(o, "Item must exist"), o);
    });
  }
  compareItems(e, r) {
    return Number(e.pointer) - Number(r.pointer);
  }
};
function Ae(t, e) {
  let r = {};
  for (let n of t) {
    let o = e(n);
    o !== void 0 && (r[n] = o);
  }
  return r;
}
function ke(t, e) {
  let r = {};
  for (let n of t)
    Object.defineProperty(r, n, {
      configurable: !0,
      enumerable: !0,
      get() {
        let o = e(n);
        return (Object.defineProperty(r, n, { value: o, enumerable: !0 }), o);
      },
    });
  return r;
}
function Ue(t, e, r, n) {
  V(ie(t), "Pointer must be rich text");
  for (let o of je(t)) {
    let i = r.reactComponentForIdentifier(o);
    i && n.set(o, i);
  }
  return ue(t, { componentLoader: r, resolveVectorSetItem: (o) => Se(o), tree: e });
}
function je(t) {
  if (S(t)) return me(t);
  let e = new Set();
  return (
    ae(t, {
      module(r) {
        e.add(r.identifier);
      },
    }),
    e
  );
}
var Re = new WeakMap();
function xt(t, e, r, n, o) {
  let i = Re.get(r) ?? [];
  Re.set(r, i);
  let l = i.findIndex((f) => f.visibility === o && f.locale === n),
    s = i[l];
  if (s && s.sharedTypesUpdate === k(t, r.variables) && Oe(s, e)) return s;
  let m = new O(t, e, r, n, o);
  return (l >= 0 ? (i[l] = m) : i.push(m), m);
}
function Oe(t, e) {
  for (let [r, n] of t.usedComponents) if (e.reactComponentForIdentifier(r) !== n) return !1;
  return !0;
}
export { Ve as a, Se as b, at as c, O as d, Ue as e, je as f, xt as g };
//# sourceMappingURL=chunk-2AOQBIUG.mjs.map
