import { b as j } from "chunk-B4LFU6TX.mjs";
import {
  H as oe,
  I as ne,
  Qb as se,
  Te as fe,
  Ue as pe,
  se as M,
  we as le,
  xe as me,
  ye as ce,
  ze as ue,
} from "chunk-2IN5JIEQ.mjs";
import { Lb as ie } from "chunk-7HMVTV2A.mjs";
import { g as N } from "chunk-CE2WTHAJ.mjs";
import { c as I } from "chunk-VT4INGX7.mjs";
import { I as de } from "chunk-7OWJJYXI.mjs";
import { Kt as re, Xx as ae } from "chunk-R26N4K3R.mjs";
import {
  Cl as $,
  Ha as J,
  Ik as k,
  Ja as Q,
  Nl as ee,
  Vm as Pe,
  Wq as S,
  Zq as P,
  ar as x,
  cr as T,
  nn as te,
  te as D,
  va as A,
  wa as q,
} from "chunk-3T2QI6IR.mjs";
import { F as Z, d as X, f as g } from "chunk-FPZZYJJC.mjs";
import { xf as w } from "chunk-DPHJW6UJ.mjs";
import { a as h } from "chunk-2FCXHKEL.mjs";
import { b as R, o as Y } from "chunk-5EE7LLRA.mjs";
import { b as E } from "chunk-4JY5UMT2.mjs";
import { a as K } from "chunk-SWYZG2NI.mjs";
import { e as C } from "chunk-WLHSDIGQ.mjs";
var O = C(K(), 1);
var Ce = C(K(), 1),
  ye = C(Pe(), 1);
var ge = C(h(), 1);
function xe(t, e) {
  return { ...A(t, e), transformTemplate: q(t) };
}
function Te(t) {
  if (!(t.width === "auto" && t.height === "auto")) return t.width ?? "auto";
}
function Me(t) {
  return ((t.__fromCanvasComponent = !0), (t.width = Te(t)), t);
}
var be = { [re]: !0 };
Object.freeze(be);
function Ie({
  node: t,
  combinedValueMap: e,
  frameProps: r,
  getCodeComponentProps: o,
  renderVectorWithIdentifier: n,
}) {
  let i = D(t.dynamicVectorSetIdentifier)
      ? t.resolveValue("dynamicVectorSetIdentifier", e)
      : t.codeComponentIdentifier,
    d = M(i) ? i?.identifier : R(i) && g(i) ? i : void 0,
    a = g(d),
    l = r.id ?? Z(t.id),
    c = t.isVisible(),
    p = (0, Ce.useRef)(null);
  J({ id: l, _needsMeasure: r._needsMeasure, visible: c }, p);
  let [f] = Q(Me(r));
  return !d || !i || !c
    ? null
    : a
      ? n(d, () => ({
          ...be,
          ...xe(r.center, f),
          ...o(),
          ref: p,
          id: l,
          style: f,
          "data-framer-component-type": "Frame",
        }))
      : (0, ye.isValidElementType)(i)
        ? (0, ge.jsx)(i, {
            ...o(),
            ...A(void 0, f),
            ref: p,
            id: l,
            style: f,
            "data-framer-component-type": "Frame",
          })
        : null;
}
var s = C(h(), 1);
function ve(t) {
  return O.default.forwardRef((e, r) => {
    let o = j(),
      [n, i] = N(o, t);
    switch (n.status) {
      case "loading":
        return (0, s.jsx)("div", {
          className: e.className,
          style: e.style,
          children: (0, s.jsx)(I, {}),
        });
      case "error":
        return (0, s.jsx)("div", {
          className: e.className,
          style: e.style,
          children: (0, s.jsx)(I, { error: { title: n.title, message: n.message } }),
        });
      default: {
        let d = n.definition.class;
        return (0, s.jsx)(i, { children: (0, s.jsx)(d, { ...e, ref: r }) });
      }
    }
  });
}
var Ne = O.default.forwardRef(function ({ tracker: e, identifier: r, getProps: o }, n) {
  let [i, d] = N(e.modulesRuntime, r),
    { id: a, style: l, className: c, ...p } = o();
  switch (i.status) {
    case "loading":
      return (
        a && e.trackLoading(a),
        (0, s.jsx)(w.div, { className: c, style: l, children: (0, s.jsx)(I, {}) })
      );
    case "error":
      return (
        a && e.trackLoaded(a),
        (0, s.jsx)(w.div, {
          className: c,
          style: l,
          children: (0, s.jsx)(I, { error: { title: i.title, message: i.message } }),
        })
      );
    default: {
      let f = i.definition.class;
      return (
        a && e.trackLoaded(a),
        (0, s.jsx)(d, {
          children: (0, s.jsx)(f, {
            ref: n,
            ...p,
            id: a,
            style: l,
            "data-framer-component-type": "Frame",
          }),
        })
      );
    }
  }
});
function Le({ identifier: t }) {
  let e = j();
  return (N(e, t), null);
}
function nt({ tracker: t, node: e, activeLocale: r, combinedValueMap: o, frameProps: n }) {
  return Ie({
    node: e,
    combinedValueMap: o,
    frameProps: n,
    getCodeComponentProps() {
      return e.getCodeComponentProps(
        t.componentLoader,
        pe(),
        o,
        r,
        t.createFetchDataValueResolver(e)
      );
    },
    renderVectorWithIdentifier(i, d) {
      let a = D(e.dynamicVectorSetIdentifier)
          ? e.resolveValue("dynamicVectorSetIdentifier", o)
          : e.codeComponentIdentifier,
        l = M(a) ? a.identifier : a;
      return (0, s.jsxs)(s.Fragment, {
        children: [
          l !== e.codeComponentIdentifier &&
          g(e.codeComponentIdentifier) &&
          X(e.codeComponentIdentifier)
            ? (0, s.jsx)(Le, { identifier: e.codeComponentIdentifier })
            : null,
          (0, s.jsx)(Ne, { tracker: t, getProps: d, identifier: i }),
        ],
      });
    },
  });
}
var U = class {
  constructor(e, r, o, n, i, d = "eager") {
    this.tree = e;
    this.componentLoader = r;
    this.collectionNode = o;
    this.locale = n;
    this.visibility = i;
    let a = le(o.variables),
      l = o.getSlugVariable(),
      c = o.getPropertyControls(e, r),
      p = Object.entries(c),
      f = {
        id: { type: "string", isNullable: !1 },
        [x]: { type: "date", isNullable: !0 },
        [T]: { type: "date", isNullable: !0 },
        [S]: { type: "string", isNullable: !0 },
        [P]: { type: "string", isNullable: !0 },
      };
    for (let [m, u] of p) {
      let b = ue(u);
      b && (f[m] = b);
    }
    this.schema = f;
    let L = ["id", x, T, S, P, ...Object.keys(c)],
      W = o.getSortedChildren(i, "group-drafts"),
      v = n ? W.filter((m) => oe(m, n.id) !== "exclude") : W,
      F = new Map(),
      _ = new Set();
    for (let m of $(e, "includeDrafts")) (F.set(m.id, m), _.add(m.id));
    for (let m = 0; m < v.length; m++) {
      let u = v.at(m);
      if (!u) continue;
      let b;
      if (n) {
        let y = ne(u, n, k, _);
        b = F.get(y) ?? F.get(k);
      }
      let B = v[m - 1],
        z = v[m + 1],
        G = (y) => {
          let V = c[y],
            H = V && me(y, V, a, c, u);
          if (V && H) {
            let Se = y === l?.id ? n : b;
            return (
              ce({ control: V, controlProp: H, resolvers: this.resolvers, locale: Se }) ?? null
            );
          }
          switch (y) {
            case "id":
              return { type: "string", value: u.id };
            case x:
              return u.createdAt
                ? { type: "date", value: new Date(u.createdAt).toISOString() }
                : null;
            case T:
              return u.updatedAt
                ? { type: "date", value: new Date(u.updatedAt).toISOString() }
                : null;
            case S:
              return B ? { type: "string", value: B.id } : null;
            case P:
              return z ? { type: "string", value: z.id } : null;
          }
        },
        Re = d === "eager" ? Fe(L, G) : Ee(L, G),
        De = { pointer: String(m), data: Re };
      this.items.push(De);
    }
    d === "lazy" && (this.scannedFields = { id: this.schema.id });
  }
  tree;
  componentLoader;
  collectionNode;
  locale;
  visibility;
  schema;
  items = [];
  indexes = [];
  scannedFields;
  assetResolver = fe();
  usedComponents = new Map();
  resolvers = {
    resolveColor: (e) => e,
    resolveFile: (e) => this.assetResolver(e),
    resolveImage: (e, r) => {
      let o = this.assetResolver(e);
      if (!Y(o)) return { src: o, ...r };
    },
    resolveLink: (e) => ie(this.tree, e),
    resolveRichTextPointer: (e) => e,
    resolveVectorSetItemPointer: (e) => e,
  };
  resolveRichText(e) {
    return we(e, this.tree, this.componentLoader, this.usedComponents);
  }
  resolveVectorSetItem(e) {
    return e;
  }
  async scanItems() {
    return this.items;
  }
  async resolveItems(e) {
    return e.map((r) => {
      let o = Number(r),
        n = this.items[o];
      return (E(n, "Item must exist"), n);
    });
  }
  compareItems(e, r) {
    return Number(e.pointer) - Number(r.pointer);
  }
};
function Fe(t, e) {
  let r = {};
  for (let o of t) {
    let n = e(o);
    n !== void 0 && (r[o] = n);
  }
  return r;
}
function Ee(t, e) {
  let r = {};
  for (let o of t)
    Object.defineProperty(r, o, {
      configurable: !0,
      enumerable: !0,
      get() {
        let n = e(o);
        return (Object.defineProperty(r, o, { value: n, enumerable: !0 }), n);
      },
    });
  return r;
}
function we(t, e, r, o) {
  E(ee(t), "Pointer must be rich text");
  for (let n of Ae(t)) {
    let i = r.reactComponentForIdentifier(n);
    i && o.set(n, i);
  }
  return de(t, { componentLoader: r, resolveVectorSetItem: (n) => ve(n), tree: e });
}
function Ae(t) {
  if (R(t)) return ae(t);
  let e = new Set();
  return (
    te(t, {
      module(r) {
        e.add(r.identifier);
      },
    }),
    e
  );
}
var Ve = new WeakMap();
function Dt(t, e, r, o, n) {
  let i = Ve.get(r) ?? [];
  Ve.set(r, i);
  let d = i.findIndex((c) => c.visibility === n && c.locale === o),
    a = i[d];
  if (a && ke(a, e)) return a;
  let l = new U(t, e, r, o, n);
  return (d >= 0 ? (i[d] = l) : i.push(l), l);
}
function ke(t, e) {
  for (let [r, o] of t.usedComponents) if (e.reactComponentForIdentifier(r) !== o) return !1;
  return !0;
}
var he = new WeakMap();
function je(t, e) {
  let r = he.get(e);
  if (r) return r;
  let o = [];
  if ((se(t, e, "includeInherited", "readsRawNodeData", void 0, (n) => o.push(n)), e.children))
    for (let n of e.children) {
      let i = je(t, n);
      o.push(...i);
    }
  return (he.set(e, o), o);
}
export { Ie as a, ve as b, nt as c, U as d, we as e, Ae as f, Dt as g, je as h };
//# sourceMappingURL=chunk-JWKRHQMQ.mjs.map
