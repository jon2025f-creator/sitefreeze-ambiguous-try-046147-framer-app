import {
  Hl as oe,
  Qk as ee,
  ai as v,
  fi as X,
  il as te,
  ql as N,
  ul as c,
} from "chunk-RE42INF2.mjs";
import { La as s, Nk as h, Pb as j, Qj as k, ed as g, kb as _, zk as J } from "chunk-3GNDJY2L.mjs";
import { a as H } from "chunk-VBCXFFMV.mjs";
import { q as A } from "chunk-K4MAAOA5.mjs";
import { o as L } from "chunk-3G3Z6KCN.mjs";
import { t as Q } from "chunk-XWVB37KR.mjs";
import { d as q } from "chunk-3CKYEPG2.mjs";
import { a as Z } from "chunk-MSHSIAEI.mjs";
import { b as U, d as K } from "chunk-ARJ7WQTJ.mjs";
import { b as a, c as T } from "chunk-4JY5UMT2.mjs";
var re = 1e3,
  ne = [
    { value: " ", message: (e) => `The ${e} cannot contain spaces` },
    { value: "*", message: (e) => `The ${e} cannot contain *` },
    { value: "|", message: (e) => `The ${e} cannot contain |` },
  ];
function ie(e, t, o) {
  if (((e = e.trim()), !e)) return { result: "empty" };
  if (e.length > re)
    return { result: "error", message: `The ${t} is too long (max ${re} characters)` };
  if (o?.blockInvalidCharacters) {
    let r;
    o.blockInvalidCharacters === "spaces-only"
      ? (r = ne.filter((n) => n.value === " "))
      : o.blockInvalidCharacters === "all"
        ? (r = ne)
        : Array.isArray(o.blockInvalidCharacters)
          ? (r = o.blockInvalidCharacters)
          : T(o.blockInvalidCharacters);
    for (let n of r) if (e.includes(n.value)) return { result: "error", message: n.message(t) };
  }
  return t === "path" && !e.startsWith("/")
    ? { result: "error", message: "The path must begin with /" }
    : { result: "ok", normalizedValue: e };
}
var ae = "Please enter a valid path",
  Pe = /\\\(/gu,
  be = /\\\)/gu;
function ve(e) {
  return e.replace(Pe, "(").replace(be, ")");
}
function x(e) {
  return ve(e);
}
var xe = /:[a-z]\w*[?+*]/i,
  De = /^\/_framer\/login/u,
  Se = /\/\.well-known/u,
  w = /^\/\.well-known\/acme-challenge(\/|$)/u,
  F = /^\/\.well-known\/(\*|\(|:[^/]+)/u;
function at(e, t, o = [], r) {
  for (let n of o)
    if (t === n.path && n.id !== r)
      return {
        result: "error",
        message: `A ${e === "proxy" ? "file" : e} for this path already exists`,
      };
  return { result: "ok", normalizedValue: void 0 };
}
var _e = /[(){}]/gu;
function st(e, t, o = {}) {
  let r = ie(t, "path", { blockInvalidCharacters: "spaces-only" });
  if (r.result !== "ok") return r;
  if (((t = r.normalizedValue), xe.exec(t))) return { result: "error", message: ae };
  if (t.includes("?")) return { result: "error", message: "Can't use query parameters (?)" };
  if (t.includes("#")) return { result: "error", message: "Can't use a scroll target (#)" };
  if (t.includes("$")) return { result: "error", message: "The path cannot contain $" };
  if (t.includes("|")) return { result: "error", message: "The path cannot contain |" };
  for (let i of t.matchAll(_e))
    if (
      (a(i.index, "validateRouteNodePath: match.index should be defined"),
      t.charAt(i.index - 1) !== "\\")
    )
      return { result: "error", message: ae };
  let n = [De];
  return (
    e === "redirect" || (e === "rewrite" && o.allowWellKnownRewrites) || e === "proxy"
      ? n.push(w, F)
      : n.push(Se),
    n.some((i) => i.test(t))
      ? { result: "error", message: "Reserved path, not allowed" }
      : { result: "ok", normalizedValue: t }
  );
}
function se(e) {
  for (let t in e) return e[t];
}
var de = ":missing-slug";
function pt(e, t) {
  return t.replace(g, (o, r) => {
    let n = e.properties[r];
    return n?.title ? `:${v(n.title)}` : de;
  });
}
function ft(e, t, o, r = "title") {
  return e.replace(g, (n, d) => {
    if (r === "value" && d === o.id) {
      let i = se(t);
      if (i) return i;
    }
    return `:${v(o.name)}`;
  });
}
function le(e, t) {
  return e.replace(g, (o, r) => (t ? `:${v(t.name)}` : de));
}
var bt = "/unknown";
function ke(e, t, o) {
  let r = o.get(e) ?? e;
  return t.get(r);
}
function Le(e, t, o) {
  let r;
  return (
    o !== k && (r = h(e).getWebPageIdToRawPathLocalizedMap(e).get(t)?.[o]),
    r || h(e).getWebPageIdToRawPathMap(e).get(t)
  );
}
function vt(e, t, o = k, r, n) {
  let d = e.root.getABTestingParentIdMap(),
    i = e.root.getDataIdentifierByWebPageIdMap(),
    f = te(e)?.loaded?.getSlugVariableByIdentifierMap(),
    u = d.get(t.id) ?? t.id,
    l = Le(e, u, o);
  if (!l) return;
  let y = i.get(u);
  if (!y) return x(l);
  if (r) return x(X(l, r, n) ?? "");
  let Ee = f?.get(y);
  return x(le(l, Ee));
}
function Ae(e, t) {
  if (!t) return;
  let o = h(e).getWebPageIdToRawPathMap(e),
    r = e.root.getABTestingParentIdMap();
  return ke(t.id, o, r);
}
function xt(e, t) {
  if (!_(t, !0)) return !1;
  let o = Ae(e, t);
  return K(o) && J.has(o);
}
function Dt(e, t) {
  if (!t) return;
  let o = e.getNodeWithTrait(t.abTestingParentId, _) ?? t;
  return h(e).getRawWebPagePathLocalizedByWebPageId(e, o.id);
}
function At(e) {
  return e === "/" ? "Home" : e;
}
function wt(e) {
  return e === "/"
    ? "Home"
    : ((e = Fe(e)),
      (e = we(e)),
      (e = ue(e)),
      (e = We(e)),
      (e = e.trim()),
      (e = e.split(" ").map(q).join(" ")),
      e);
}
function we(e) {
  return e.replace(/-+/gu, " ");
}
function Fe(e) {
  return e.replace(g, "");
}
var ce = /\s*\/[/\s]*/gu;
function We(e) {
  return e.replace(ce, " / ");
}
function ue(e) {
  return e.replace(/^[/\s]+|[/\s]+$/gu, "");
}
var Ve = /\s+/gu,
  Oe = /-+/gu;
function Ft(e) {
  if (e === "Home") return "/";
  let t = e;
  return (
    (t = ue(t)),
    (t = t.replace(ce, "-")),
    (t = t.replace(Ve, "-")),
    (t = t.replace(Oe, "-")),
    (t = t.toLowerCase()),
    "/" + t
  );
}
var Ge = "__created_at__",
  $e = { id: Ge, initialValue: A(0), name: "Created", options: { displayTime: !0 }, type: "date" },
  ze = "__updated_at__",
  Be = { id: ze, initialValue: A(0), name: "Edited", options: { displayTime: !0 }, type: "date" };
!1;
var D = "__cmsStatus__",
  Ye = 1;
function pe(e, t) {
  return typeof e != "number" ? Math.min(Ye, t) : H(e, 0, t);
}
function me(e) {
  return e === D;
}
function Ut(e, t) {
  return L.insert(e, pe(t, e.length), D);
}
function Kt({ displayList: e, fromDisplayIndex: t, toDisplayIndex: o }) {
  let r = e.length - 1;
  if (r < 1 || t === o || t < 0 || t > r || o < 0 || o > r) return null;
  let n = e.indexOf(D);
  if (t === n) return { statusFieldIndex: o };
  let d = L.move(e, t, o),
    i = d.indexOf(D),
    f = e.filter((y) => !me(y)),
    u = d.filter((y) => !me(y)),
    l = {};
  return (
    Q(u, f) || (l.variables = u),
    i !== n && (l.statusFieldIndex = i),
    l.variables === void 0 && l.statusFieldIndex === void 0 ? null : l
  );
}
function jt(e, t) {
  if (e !== void 0) return t >= e ? e : e + 1;
}
function qt(e, t) {
  if (e !== void 0) return t >= e ? e : e - 1;
}
function Ht(e, t, o) {
  let r = pe(e, o);
  return t >= r ? e : r + 1;
}
function Zt(e, t, o) {
  let r = e.isDraft ? 0 : 1,
    n = t.isDraft ? 0 : 1;
  return o === "ascending" ? r - n : n - r;
}
var S = "colorStyles",
  Ue = { id: S },
  fe = class e extends s("ColorStyleTokenListNode", c) {
    constructor(t) {
      let o = { ...t, id: S };
      (super(o), N(this, Ue, o));
    }
    static get(t) {
      return t.get(S);
    }
    static getAllTokenNodes(t) {
      return e.get(t)?.children.toArray() ?? Z();
    }
    static getTokenNodes(t) {
      let o = e.getAllTokenNodes(t);
      return o.some((r) => r.softDeleted) ? o.filter((r) => !r.softDeleted) : o;
    }
    static ensure(t) {
      let o = t.get(S);
      return (
        a(
          !t.isViewOnly,
          "CanvasTree: Cannot ensure the ColorStyleTokenListNode in view only mode."
        ),
        j(o) ? o : t.insertNode(new e())
      );
    }
  };
var m = "entity-ref-";
var Ke = "code-file-",
  je = `${m}${Ke}`;
function ye(e) {
  return typeof e == "string" && e.startsWith(m);
}
function V(e) {
  return (a(!ye(e), "Invalid reference id"), `${m}${e}`);
}
function ge(e) {
  return (a(!ye(e), "Invalid reference id"), `${je}${e}`);
}
var qe = "ComponentNode",
  He = "CodeFileNode",
  Ze = {
    AssetsEntityTypeRootNode: {
      referenceTypes: [
        "BlockquoteStylePresetNode",
        "ColorStyleTokenNode",
        "ComponentPresetNode",
        "ExternalModuleNode",
        "ImageStylePresetNode",
        "InlineCodeStylePresetNode",
        "LayoutTemplateNode",
        "LinkStylePresetNode",
        "SharedEnumNode",
        "TableStylePresetNode",
        "TextStylePresetNode",
        "VectorSetNode",
        qe,
        He,
      ],
      name: "Assets",
    },
    AbTestsEntityTypeRootNode: { referenceTypes: ["FunnelNode"], name: "A/B test" },
    ContentManagementEntityTypeRootNode: {
      referenceTypes: ["CollectionNode"],
      name: "Collections",
    },
    DesignPageEntityTypeRootNode: { referenceTypes: ["DesignPageNode"], name: "Design pages" },
    FunnelsEntityTypeRootNode: { referenceTypes: ["FunnelNode"], name: "Funnel" },
  };
function C(e) {
  let t = Ze[e];
  return (a(t, `Missing entity type root descriptor for ${e}`), t);
}
var R = "contentManagementEntityRoot",
  I = "funnelsEntityRoot",
  E = "abTestsEntityRoot",
  P = "designPageEntityRoot",
  b = "assetsEntityRoot",
  B = [R, I, E, P, b];
function Ro(e) {
  switch (e) {
    case b:
      return "assets";
    case R:
      return "collection";
    case P:
      return "component";
    case I:
    case E:
      return "funnel";
    default:
      T(e);
  }
}
var Je = new Set(B),
  p = class extends c {
    constructor(t) {
      (super(t), this.assign(t ?? {}));
    }
    getName() {
      throw new Error("EntityTypeRootNode should not be used for getName");
    }
  },
  O = class extends s("FunnelsEntityTypeRootNode", p) {
    constructor(t) {
      let o = { ...t, id: I };
      (super(o), this.assign(o));
    }
    getName() {
      return C(this.__class).name;
    }
    static get(t) {
      return t.get(I);
    }
  },
  M = class extends s("AbTestsEntityTypeRootNode", p) {
    constructor(t) {
      let o = { ...t, id: E };
      (super(o), this.assign(o));
    }
    getName() {
      return C(this.__class).name;
    }
    static get(t) {
      return t.get(E);
    }
  },
  G = class extends s("DesignPageEntityTypeRootNode", p) {
    constructor(t) {
      let o = { ...t, id: P };
      (super(o), this.assign(o));
    }
    getName() {
      return C(this.__class).name;
    }
    static get(t) {
      return t.get(P);
    }
  },
  $ = class extends s("ContentManagementEntityTypeRootNode", p) {
    constructor(t) {
      let o = { ...t, id: R };
      (super(o), this.assign(o));
    }
    getName() {
      return C(this.__class).name;
    }
    static get(t) {
      return t.get(R);
    }
  },
  z = class extends s("AssetsEntityTypeRootNode", p) {
    constructor(t) {
      let o = { ...t, id: b };
      (super(o), this.assign(o));
    }
    getName() {
      return "Assets";
    }
    static get(t) {
      return t.get(b);
    }
  };
function Io(e) {
  return e instanceof p;
}
function Eo(e) {
  return U(e) && Je.has(e);
}
function Qe(e) {
  switch (e) {
    case b:
      return new z();
    case I:
      return new O();
    case E:
      return new M();
    case R:
      return new $();
    case P:
      return new G();
    default:
      T(e);
  }
}
function Xe(e, t) {
  let o = e.get(t);
  return (
    a(!e.isViewOnly, "CanvasTree: Cannot ensure the EntityTypeRootNode in view only mode."),
    o || e.insertNode(Qe(t), e.root.id)
  );
}
function Po(e) {
  if (!e.isViewOnly) for (let t of B) e.has(t) || Xe(e, t);
}
function bo(e) {
  for (let t of B) if (!e.has(t)) return !1;
  return !0;
}
var Ne = "agentSkills";
function et(e) {
  if (e.name !== void 0) return ee(e.name);
}
function ko(e, t) {
  return e.children.find((o) => et(o) === t);
}
function Lo(e, t, o) {
  let r = Y.get(e);
  if (!r) return;
  let n = r.children.filter((u) => u.trigger !== "always"),
    d = n[t],
    i = n[o];
  if (!d || !i) return;
  let f = r.children.findIndex((u) => u.id === i.id);
  e.move(d.id, r.id, f);
}
var Y = class e extends s("AgentSkillsListNode", c) {
  constructor(t) {
    super({ ...t, id: Ne });
  }
  static get(t) {
    return t.get(Ne);
  }
  static ensure(t) {
    let o = e.get(t);
    return (
      o ||
      (a(!t.isViewOnly, "CanvasTree: Cannot ensure the AgentSkillsListNode in view only mode."),
      t.insertNode(new e(), t.root.id))
    );
  }
};
var Te = class extends s("EntityFolderNode", c) {
  constructor(t) {
    (super(t), N(this, {}, t));
  }
  getName() {
    let t = this.resolveValue("name");
    return (a(t, "EntityFolderNode must have a name"), t);
  }
};
var tt = "getName";
function he(e) {
  return tt in e;
}
var Ce = `${m}code-file-`;
function Re(e) {
  return (
    a(e.startsWith(m), "EntityReferenceNode must have a valid id"),
    e.startsWith(Ce) ? e.slice(Ce.length) : e.slice(m.length)
  );
}
var Ie = class extends s("EntityReferenceNode", c) {
  get referenceId() {
    return Re(this.id);
  }
  static createIdFromProps(t) {
    return V("123");
  }
  constructor(t) {
    (super(t), N(this, {}, t));
  }
  clone(t) {
    return (
      console.warn(
        "EntityReferenceNode.clone() should not be used, id needs to point to a valid reference node."
      ),
      super.clone(t)
    );
  }
  cloneWithCallback(t, o) {
    return (
      console.warn(
        "EntityReferenceNode.cloneWithCallback() should not be used, id needs to point to a valid reference node."
      ),
      super.cloneWithCallback(t, o)
    );
  }
  getName() {
    let t = this.tree();
    a(t, "EntityReferenceNode must have a tree");
    let o = t.get(this.referenceId);
    return o && he(o) ? o.getName() : o?.resolveValue("name") || "Unknown";
  }
  static get(t, o, r) {
    let n = t.get(o);
    if (!n) return null;
    let d = oe(n) ? ge(o) : V(o),
      i = t.get(d);
    return !i || (r && ![...i.ancestors()].some((f) => f.id === r)) ? null : i;
  }
};
export {
  Ne as a,
  et as b,
  ko as c,
  Lo as d,
  Y as e,
  re as f,
  ie as g,
  x as h,
  at as i,
  st as j,
  pt as k,
  ft as l,
  le as m,
  bt as n,
  vt as o,
  Ae as p,
  xt as q,
  Dt as r,
  At as s,
  wt as t,
  Ft as u,
  Ge as v,
  $e as w,
  ze as x,
  Be as y,
  D as z,
  me as A,
  Ut as B,
  Kt as C,
  jt as D,
  qt as E,
  Ht as F,
  Zt as G,
  S as H,
  fe as I,
  Te as J,
  he as K,
  ye as L,
  V as M,
  ge as N,
  Re as O,
  Ie as P,
  qe as Q,
  He as R,
  C as S,
  R as T,
  I as U,
  E as V,
  P as W,
  b as X,
  Ro as Y,
  O as Z,
  M as _,
  G as $,
  $ as aa,
  z as ba,
  Io as ca,
  Eo as da,
  Xe as ea,
  Po as fa,
  bo as ga,
};
//# sourceMappingURL=chunk-UCA6DIRC.mjs.map
