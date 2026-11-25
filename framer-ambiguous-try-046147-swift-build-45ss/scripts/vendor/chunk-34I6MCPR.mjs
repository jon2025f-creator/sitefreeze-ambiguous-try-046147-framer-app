import { b as Ie, c as ke, d as Ce, e as ve } from "chunk-6ZIHUJPW.mjs";
import { a as C } from "chunk-Z4N3QO2J.mjs";
import {
  $ as P,
  Pa as Ee,
  Y as k,
  _ as T,
  g as be,
  j as I,
  k as xe,
  l as F,
  tb as he,
} from "chunk-WUT466R3.mjs";
import {
  Qw as Se,
  Ri as de,
  cj as le,
  dj as fe,
  ej as ue,
  fj as ce,
  gj as w,
  hj as me,
  i as a,
  j as M,
  si as pe,
} from "chunk-RPMUQEFH.mjs";
import { bn as ye, cn as ge, dn as m, hn as L } from "chunk-GFXIFNNK.mjs";
import { c as R, f as g, o as ae, r as se } from "chunk-GV47JEYI.mjs";
import { g as Ue } from "chunk-3CKYEPG2.mjs";
import { d as ie } from "chunk-2CEDOG4D.mjs";
import { b as _ } from "chunk-ARJ7WQTJ.mjs";
import { j as D } from "chunk-EAUMDN6M.mjs";
import { b as x } from "chunk-4JY5UMT2.mjs";
import { e as _e } from "chunk-WLHSDIGQ.mjs";
function U() {
  return () => {};
}
a(U, "Close Overlay", {});
function j() {
  return () => {};
}
a(j, "Load More", {});
function $(t) {
  return (e) => {
    switch (t.type) {
      case "event":
        ($e(e) && e.persist(), console.log(e));
        break;
      case "message":
        console.log(t.message);
        break;
      case "count":
        console.count(t.message);
        break;
    }
  };
}
a($, "Console Log", {
  type: {
    type: "enum",
    options: ["event", "message", "count"],
    optionTitles: ["Event", "Message", "Count"],
    defaultValue: "event",
    title: "Type",
  },
  message: {
    type: "string",
    title: "Message",
    hidden(t) {
      return t.type === "event";
    },
  },
});
function je(t) {
  return !!t && typeof t == "object";
}
function $e(t) {
  return je(t) ? typeof t.persist == "function" : !1;
}
function K(t) {
  return () => {
    let { url: e } = t;
    if (!e) return;
    if (e.startsWith("#")) window.open(e, "_self");
    else {
      let n = e.includes(":") ? e : `http://${e}`;
      window.open(n, "_blank", "noopener");
    }
  };
}
a(K, "Open Link", { url: { type: "string", placeholder: "www.framer.com", title: "URL" } });
function z() {
  return () => {};
}
a(z, "Reset Variables", {});
function B() {
  return () => {};
}
a(B, "Set Locale", {
  localeId: { type: "enum", title: "Locale", options: ["default"], optionTitles: ["Default"] },
});
function q() {
  return () => {};
}
a(q, "Set Variable", {});
function W() {
  return () => {};
}
a(W, "Overlay", {});
function J() {
  return () => {};
}
a(J, "Overlay", {});
function Q(t) {
  return () => {};
}
a(Q, "Event", { id: { type: "string" } });
var Ke = [
  "framer/useNavigate",
  "framer/useOpenURL",
  "framer/useDismissOverlay",
  "framer/useLog",
  "framer/useSetVariant",
  "framer/useTriggerEvent",
  "framer/useShowOverlay",
  "framer/useShowRelativeOverlay",
  "framer/useSetLocale",
  "framer/useLoadMore",
  "framer/useSetVariableValue",
  "framer/useResetVariableValues",
];
function ze(t) {
  switch (t) {
    case "framer/useNavigate":
      return Se;
    case "framer/useDismissOverlay":
      return U;
    case "framer/useShowOverlay":
      return W;
    case "framer/useShowRelativeOverlay":
      return J;
    case "framer/useOpenURL":
      return K;
    case "framer/useLoadMore":
      return j;
    case "framer/useLog":
      return $;
    case "framer/useSetVariant":
      return be;
    case "framer/useTriggerEvent":
      return Q;
    case "framer/useSetLocale":
      return B;
    case "framer/useSetVariableValue":
      return q;
    case "framer/useResetVariableValues":
      return z;
  }
}
var A = {};
for (let t of Ke) {
  let e = ze(t),
    o = M(e);
  if (o?.title && o.controls) {
    let n = {
      class: e,
      depth: 1,
      file: "",
      identifier: t,
      name: o.title,
      packageIdentifier: "framer",
      properties: F(o.controls),
      type: "action",
      update: 0,
    };
    A[t] = n;
  }
}
var O = ((i) => (
    (i.Scroll = "framer/Scroll"),
    (i.Page = "framer/Page"),
    (i.Stack = "framer/Stack"),
    (i.Device = "__builtin/Device"),
    (i.Prototype = "framer/Prototype"),
    i
  ))(O || {}),
  H = "__builtin",
  De = Object.values(O);
var G = "Stack",
  X = "Scroll",
  Y = "Page",
  Z = "Device",
  Me = "Prototype",
  Qt = {
    "framer/Stack": {
      depth: 1,
      file: "",
      identifier: "framer/Stack",
      name: G,
      packageIdentifier: "framer",
      properties: N(m(L)),
      type: "component",
      update: 0,
    },
    "framer/Scroll": {
      depth: 1,
      file: "",
      identifier: "framer/Scroll",
      name: X,
      packageIdentifier: "framer",
      properties: { ...N(m(P)), children: { title: "Content", type: "slot", maxCount: 1 } },
      type: "component",
      update: 0,
    },
    "framer/Page": {
      depth: 1,
      file: "",
      identifier: "framer/Page",
      name: Y,
      packageIdentifier: "framer",
      properties: N(m(T)),
      type: "component",
      update: 0,
    },
    "__builtin/Device": {
      depth: 1,
      file: "",
      identifier: "__builtin/Device",
      name: Z,
      packageIdentifier: H,
      properties: N(m(k)),
      type: "component",
      update: 0,
    },
  };
function N(t) {
  return JSON.parse(JSON.stringify(t));
}
var Te = _e(Ue());
function ee(t, e) {
  (console.log(
    "%c Loader: %c " + t,
    "color: white; font-weight: bold; background-color: #EE4444; border-radius: 5px; padding: 2px 5px",
    "color: #EE4444"
  ),
    e && console.warn(e));
}
var Be = D("collectEntities");
function qe(t, e, o = "") {
  return (t.depth > 0 && (o = `${t.name}/${o}`), `${o}${e}`);
}
function We(t) {
  if (!(!E(t) || typeof t.userInterfaceName != "string")) return t.userInterfaceName;
}
function Je(t) {
  return t && JSON.parse(JSON.stringify(t));
}
function Qe(t) {
  let e = { ...t };
  for (let o in t) {
    let n = t[o];
    E(n) &&
      ((n.type !== "responsiveimage" && n.type !== "file") ||
        (typeof n.defaultValue == "string" &&
          typeof n.__defaultAssetReference != "string" &&
          (e[o] = { ...n, __defaultAssetReference: n.defaultValue })));
  }
  return e;
}
function S(
  t,
  e,
  { identifierPrefix: o, packageInfo: n, file: u, moduleIdentifier: i, update: s },
  c
) {
  let p;
  i
    ? (x(t.exportSpecifier, () => `export specifier was missing for ${t.name}`),
      (i = se(i, t.exportSpecifier)),
      (p = i.value))
    : (p = qe(n, t.name, o));
  let { type: l } = t;
  l ||
    (De.includes(p) || ee(`Entity info '${t.name}' doesn't have "type", assuming "component"`),
    (l = "component"));
  let d = {
    class: e,
    depth: n.depth,
    file: u ?? "",
    identifier: p,
    name: We(e) ?? t.name,
    packageIdentifier: n.name,
    properties: {},
    fonts: void 0,
    type: l,
    annotations: Je(t.annotations),
    update: s ?? 0,
  };
  if (l === "action") {
    let r = M(e);
    return (r?.controls && (d.properties = F(r.controls)), r?.title && (d.name = r.title), d);
  }
  if (l === "hook") {
    let r = d;
    return (
      (r.properties = Fe(p, m(e) ?? {}, "inputs")),
      (r.outputs = Fe(p, ye(e) ?? {}, "outputs")),
      Pe(e) && e.name && (r.name = e.name),
      we(e) && (r.title = e.displayName),
      r
    );
  }
  if ((we(e) && (d.name = e.displayName), l === "data")) {
    let r = d,
      h = m(e);
    return (
      h
        ? (r.properties = {
            id: {
              title: (0, Te.singular)(r.name),
              type: "collectionreference",
              dataIdentifier: r.identifier,
            },
            ...I(h),
          })
        : Be.reportError(new Error("Property controls not found for collection.")),
      (r.itemToSlug = c),
      r
    );
  }
  if (w(d))
    return (
      E(e) && E(e.propertyControls) && (d.properties = I(Qe(e.propertyControls))),
      E(e) && ie(e.title) && (d.title = e.title),
      d
    );
  let y = m(e),
    f = {};
  if (y) {
    let r = Re(e, l) ? e.defaultProps : void 0;
    Object.assign(f, I(y, r));
  }
  return (
    t.children && !f.children && (f.children = { title: "Content", type: "slot", maxCount: 1 }),
    (d.properties = f),
    (d.fonts = he(e)),
    Re(e, l) ? Object.assign(d, { type: "component", defaultProps: void 0 }) : d
  );
}
function Re(t, e) {
  return e === "component";
}
function E(t) {
  return !!t && typeof t == "object";
}
function Pe(t) {
  return typeof t == "function";
}
function we(t) {
  if ((!E(t) && !Pe(t)) || !("displayName" in t)) return !1;
  let e = t.displayName;
  return typeof e == "string" && e.trim().length > 0;
}
var Le = new Set();
function te(t, e) {
  let o = `${t}/${e}`;
  Le.has(o) ||
    (Le.add(o), ee(`Hook control '${e}' of ${t} has an unsupported type and is ignored`));
}
function Fe(t, e, o) {
  let n = o === "inputs" ? Ie : ke,
    u = o === "inputs" ? I(e) : xe(e),
    i = {};
  for (let s in e) {
    let c = u[s];
    if (!c || !Ce(s) || !n(c)) {
      te(t, s);
      continue;
    }
    if (o !== "outputs") {
      i[s] = c;
      continue;
    }
    let p = ve(c);
    for (let l of p.unsupported) te(t, `${s}.${l}`);
    if (!n(p.control)) {
      te(t, s);
      continue;
    }
    i[s] = p.control;
  }
  return i;
}
var V = {
    name: "framer",
    displayName: "framer",
    depth: 1,
    exportsObject: {},
    dependencies: {},
    sourceModules: {},
  },
  Ge = {
    name: H,
    displayName: "Built-in",
    depth: 1,
    exportsObject: {},
    dependencies: {},
    sourceModules: {},
  },
  oe = {
    "framer/Stack": S({ name: G, children: void 0, type: void 0 }, L, { packageInfo: V }),
    "framer/Scroll": S({ name: X, children: !0, type: void 0 }, P, { packageInfo: V }),
    "framer/Page": S({ name: Y, children: void 0, type: void 0 }, T, { packageInfo: V }),
    "framer/Prototype": S({ name: Me, children: void 0, type: void 0 }, k, { packageInfo: V }),
    "__builtin/Device": S({ name: Z, children: void 0, type: void 0 }, k, { packageInfo: Ge }),
  };
var Ae = class {
  environment = "sandbox";
  localModulesInitialized = !1;
  pendingLocalModuleIds = new Set();
  entities = new Map();
  constructor() {
    for (let e in oe) this.entities.set(e, oe[e]);
    for (let e in A) this.entities.set(e, A[e]);
  }
  componentForIdentifier(e) {
    return this.entities.get(e) ?? null;
  }
  reactComponentForIdentifier(e) {
    let o = this.componentForIdentifier(e);
    return !o || !le(o) ? null : o;
  }
  getPropertyControlsForIdentifier(e) {
    return this.componentForIdentifier(e)?.properties ?? null;
  }
  hookForIdentifier(e) {
    let o = this.componentForIdentifier(e);
    return !o || !ce(o) ? null : o;
  }
  renderableComponentForIdentifier(e) {
    let o = this.componentForIdentifier(e);
    return !o || !fe(o) ? null : o;
  }
  dataForIdentifier(e) {
    if (!e) return null;
    let o = this.componentForIdentifier(e);
    return !o || !ue(o) ? null : o;
  }
  shaderForIdentifier(e) {
    let o = this.componentForIdentifier(e);
    return !o || !w(o) ? null : o;
  }
  errorForIdentifier(e) {
    let o = ae(e);
    if (!o) return C(e, "Components that are not modules do not exist.", { fileDoesNotExist: !0 });
    let n = R(o),
      u = o.value === n,
      i = this.entities.get(n);
    if (me(i)) return i;
    if (g(o) && this.pendingLocalModuleIds.has(o.localId)) return null;
    if (g(o) || (u && this.localModulesInitialized)) {
      let s = "Component does not exist.";
      return (
        g(o) && o.type === "codeFile" && (s = "Component file does not exist."),
        C(e, s, { fileDoesNotExist: !0 })
      );
    }
    return null;
  }
  addPendingLocalModules(e) {
    for (let o of e) this.pendingLocalModuleIds.add(o);
  }
  deletePendingLocalModules(e) {
    for (let o of e) this.pendingLocalModuleIds.delete(o);
  }
  setLocalModulesInitialized(e) {
    this.localModulesInitialized = e;
  }
  updateModuleEntities(e, o) {
    for (let n of e) {
      let u = n.identifier;
      this.entities.set(u, n);
    }
    o && this.deletePendingLocalModules(o);
  }
  deleteModuleEntities(e) {
    for (let o of e) this.entities.delete(o);
  }
  testing = {
    setEntity: (e) => {
      this.entities.set(e.identifier, e);
    },
    clearEntities: () => {
      this.entities.clear();
    },
  };
};
function Oe(t) {
  return typeof t == "object" && t !== null && "exports" in t;
}
var ne = D("modules-runtime");
async function zo(t, e, o, n, u, i) {
  let { file: s, debugName: c } = Ze(e, u),
    p = et(o);
  if (p) {
    ne.error("Error in", c, ":", p);
    let y = R(e),
      f = C(y, p.message, { file: s });
    n.push(f);
    return;
  }
  x(!(o instanceof Error), "`evaluationResult` is not expected to be an `Error`.");
  let l = {
    packageInfo: {
      name: g(e) ? pe : e.importSpecifier,
      displayName: "Components",
      depth: g(e) ? 0 : 1,
      exportsObject: {},
      dependencies: {},
      sourceModules: {},
    },
    file: s,
    moduleIdentifier: e,
    update: i,
  };
  if (!Oe(o.__FramerMetadata__)) {
    ne.warn(c, "is missing export '__FramerMetadata__'");
    return;
  }
  let { exports: d } = o.__FramerMetadata__;
  await Promise.all(
    Object.entries(d).map(async ([y, f]) => {
      let b = o[y],
        r;
      switch (f.type) {
        case "override":
          r = "override";
          break;
        case "reactComponent":
          r = tt(f.annotations);
          break;
        case "reactHoc":
          r = "hoc";
          break;
        case "data":
          r = "data";
          break;
        case "shader":
          r = "shader";
          break;
        case "hook":
          r = "hook";
          break;
        default:
          return;
      }
      x(b, () => `${y} is not exported from ${c}`);
      let h;
      if (r === "data" && t)
        try {
          h = await Ye(b, t, f.annotations ?? {});
        } catch (Ve) {
          ne.reportError(Ve);
        }
      let He = {
          exportSpecifier: y,
          name: f.name || y,
          children: f.type === "reactComponent" ? f.slots?.includes("children") : void 0,
          type: r,
          annotations: f.annotations,
        },
        re = m(b);
      typeof re == "function" && ge(b, await re());
      let Ne = S(He, b, l, h);
      n.push(Ne);
    })
  );
}
async function Ye(t, e, o) {
  let n = o.framerRecordIdKey,
    u = o.framerSlug;
  if (!n || !u || !de(t) || Ee(t, void 0).query) return;
  let i = await e.query(
      {
        from: { type: "Collection", data: t },
        select: [
          { type: "Identifier", name: n },
          { type: "Identifier", name: u },
        ],
      },
      void 0
    ),
    s = {};
  for (let c of i) {
    let p = c[n];
    x(_(p), "Id is required");
    let l = c[u];
    _(l) && (s[p] = l);
  }
  return s;
}
function Ze(t, e) {
  let o, n;
  return (
    g(t)
      ? t.type === "codeFile" && e
        ? ((o = `./${e}`), (n = `${t.type}/${e}`))
        : ((o = `./${t.localIdName}`), (n = t.localId))
      : (o = n = `${t.moduleId}:${t.file}`),
    { file: o, debugName: n }
  );
}
function et(t) {
  let e;
  t instanceof Error && (e = t);
  try {
    t?.__FramerMetadata__;
  } catch (o) {
    e = new Error(
      "Unknown module evaluation error. Safari must've dropped the original `Error` object.",
      { cause: o }
    );
  }
  return e;
}
function tt(t) {
  return t?.framerScreen !== void 0
    ? "screen"
    : t?.framerResponsiveScreen !== void 0
      ? "responsiveScreen"
      : t?.framerPrototype !== void 0
        ? "prototype"
        : "component";
}
function qo(t) {
  window.esmsResolveHook = t;
}
function Wo() {
  return window.esmsResolveHook;
}
function Jo(t) {
  window.esmsFetchHook = t;
}
function Qo() {
  return window.esmsFetchHook;
}
async function Go(t) {
  return (
    await import("https://app.framerstatic.com/es-module-shims-X7L6TZWE.mjs"),
    window.importShim(t)
  );
}
export { Ae as a, zo as b, Ze as c, et as d, qo as e, Wo as f, Jo as g, Qo as h, Go as i };
//# sourceMappingURL=chunk-34I6MCPR.mjs.map
