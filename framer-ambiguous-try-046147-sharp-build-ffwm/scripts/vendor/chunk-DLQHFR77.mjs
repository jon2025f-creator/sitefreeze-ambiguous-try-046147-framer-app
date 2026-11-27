import {
  d as Ur,
  g as qr,
  h as _r,
  i as Kr,
  j as $r,
  k as zr,
  l as Xr,
  m as Yr,
  n as Zr,
} from "chunk-FL6VGE4G.mjs";
import { kb as Br } from "chunk-BBA4GW72.mjs";
import { a as Wr } from "chunk-63HWJ7Y5.mjs";
import { da as Hr, n as Gr, q as To, t as jr } from "chunk-7DT3LIKR.mjs";
import { a as Fr, b as kr } from "chunk-2QV7RDTD.mjs";
import {
  If as Nr,
  Jf as Vo,
  Nk as Ar,
  Sb as vr,
  Xj as Dr,
  b as Go,
  nk as xe,
  ok as Sr,
  pe as xr,
  pk as Mr,
} from "chunk-AYKOIAZZ.mjs";
import { P as bo } from "chunk-KK4V7WO4.mjs";
import { c as wr } from "chunk-TDXZ5LG3.mjs";
import { cb as Pr } from "chunk-WKXIZXJ4.mjs";
import { $j as he, Kj as dr, Mg as rr, Zj as gr, _j as ce, bg as or } from "chunk-RE42INF2.mjs";
import { a as me } from "chunk-3AEIJ7F4.mjs";
import {
  $d as uo,
  Ao as sr,
  Ap as mo,
  Bd as $o,
  Bf as Qo,
  Bo as lr,
  Cp as yo,
  Dd as Ie,
  Ed as zo,
  Eq as Rr,
  Fd as fe,
  Id as Xo,
  Ip as cr,
  Jd as Y,
  Kj as tr,
  Kp as Oe,
  Ld as de,
  Md as ao,
  Mj as nr,
  Nd as Z,
  Od as io,
  Pd as so,
  Qd as Yo,
  Rd as lo,
  Sp as mr,
  Up as yr,
  Vp as Vr,
  Wo as ur,
  _d as K,
  bq as br,
  ep as pr,
  fe as Zo,
  fp as fr,
  fq as Tr,
  gb as Uo,
  gq as Cr,
  hb as to,
  kb as ve,
  ke as se,
  kp as fo,
  le,
  me as Be,
  nd as no,
  ne as Jo,
  nq as hr,
  od as _o,
  om as ar,
  re as Ce,
  xd as Ko,
  xh as er,
  xp as co,
  zo as ir,
} from "chunk-3GNDJY2L.mjs";
import { a as Jr } from "chunk-XKZOB7VB.mjs";
import { a as Lr } from "chunk-WCXXMBKP.mjs";
import { a as Er } from "chunk-JHU5KKUH.mjs";
import { b as ue } from "chunk-TS24LVSZ.mjs";
import { a as Or } from "chunk-4HRYW54D.mjs";
import { d as Ir } from "chunk-Z2L5FPD7.mjs";
import { b as Re } from "chunk-X27LL6OM.mjs";
import { g as We } from "chunk-FEH5ILSY.mjs";
import { a as $ } from "chunk-QFU6OGL3.mjs";
import { g as po } from "chunk-NJXSBLUG.mjs";
import { e as qo } from "chunk-3CKYEPG2.mjs";
import { c as ge } from "chunk-PWPT6KBA.mjs";
import { h as Ho } from "chunk-EHED2EQW.mjs";
import { b as Lo } from "chunk-TE4NJLC6.mjs";
import { a as B } from "chunk-2FCXHKEL.mjs";
import { a as jo, b as ee, f as ke, j as oe, m as re, p as oo, r as ro } from "chunk-ARJ7WQTJ.mjs";
import { a as Te } from "chunk-SWYZG2NI.mjs";
import { b as v, c as Wo } from "chunk-4JY5UMT2.mjs";
import { e as D } from "chunk-WLHSDIGQ.mjs";
var Le = D(Te(), 1),
  _t = {},
  Qr = (0, Le.createContext)(_t);
Qr.displayName = "ControlPropRowContext";
function Dn() {
  let e = (0, Le.useContext)(Qr);
  if (!e)
    throw new Error("useControlPropRows must be used within a ControlPropRowContext.Provider");
  return e;
}
function He(e) {
  return e?.type === "transform";
}
function Kt(e) {
  return He(e) || $t(e);
}
function Gn(e) {
  return e?.type === "unknownTransform";
}
function $t(e) {
  return e?.type === "transformWarning";
}
function zt(e) {
  return e?.type === "typeError";
}
function jn(e) {
  return zt(e) && "key" in e;
}
function te(e, o) {
  return oe(o) ? o.includes(e) : e === o;
}
function Xt(e) {
  let o = -1,
    r = -1;
  for (let a = 0, i = e.length; a < i; a++) {
    let s = e[a];
    s &&
      (s.name === "greaterThan" && s.isNegated
        ? (o = a)
        : s.name === "lessThan" && !s.isNegated && (r = a));
  }
  if (o === -1 || r === -1) return;
  let t = e[o];
  v(t);
  let n = e[r];
  (v(n), (e[o] = n), (e[r] = t));
}
function Ue(e, o) {
  (e.sort((r, t) => (r.outputType === t.outputType ? 0 : r.outputType === o ? -1 : 1)), Xt(e));
}
function Hn(e, o, r) {
  let t = e.at(-1);
  if (!t) return;
  let n = de(t);
  if (n === r) return;
  let a = Ie(n);
  if (a)
    for (let i of a) {
      let s = Y(i);
      if (s && s.includes(r)) {
        e.push(he({ name: i, input: n, output: o ?? r }));
        return;
      }
    }
}
var go = 2;
function Yt(e, o, r) {
  let t = [{ transformName: e, depth: 1 }],
    a = r === "boolean" && o === r ? 1 : go,
    i = new Set();
  for (; t.length > 0;) {
    let { transformName: s, depth: l } = t.shift();
    if (i.has(s)) continue;
    i.add(s);
    let u = Y(s);
    if (u) {
      if (u.includes(r)) return !0;
      if (a !== l && !lo(s))
        for (let p of u) {
          let f = Ie(p);
          if (f) for (let d of f) t.push({ transformName: d, depth: l + 1 });
        }
    }
  }
  return !1;
}
var ho = (() => {
  let e = new Map();
  return (o, r, t) => {
    let n = o + r + t,
      a = e.get(n);
    if (jo(a)) return a;
    let i = Yt(o, r, t);
    return (e.set(n, i), i);
  };
})();
function Ge({
  input: e,
  output: o,
  currentTransform: r,
  currentTransformOutput: t,
  transformBefore: n,
  variableConsumesNegated: a,
  supportedTransformNames: i,
  arrayMappingCanBeAdded: s,
}) {
  let l = [];
  return (
    i.forEach((u) => {
      if (u === "arrayToArray" && !s && r !== "arrayToArray") return;
      let p = fe(u);
      if ((!p || !p.includes(e)) && u !== r) return;
      let f = Y(u);
      if (u !== r && Yo(u) && !f.includes(o)) return;
      let d;
      if (f.includes(o)) d = o;
      else if (t && f.includes(t)) d = t;
      else {
        if (!ho(u, e, o)) return;
        let x = Y(u);
        d = x.includes(o) ? o : x[0];
      }
      if (n === u && r !== u && !so(u)) return;
      let y = !!(n && Z(n));
      (y && u === "negate") ||
        (y && u === "isSet") ||
        (!n && a && u === "negate") ||
        (l.push({ name: u, isNegated: !1, outputType: d }),
        Z(u) && l.push({ name: u, isNegated: !0, outputType: d }));
    }),
    Ue(l, o),
    l.length > 0 ? l : null
  );
}
function et(e, o, r) {
  if ((v(o >= 0), o === 0 || (o === 1 && r))) return null;
  let t,
    n = r ? 1 : 0;
  for (let a = o - 1; a >= n; a--) {
    let i = e[a];
    if ((v(i), i.name === "negate")) {
      t = i;
      continue;
    }
    return t && !Z(i.name) ? t : i;
  }
  return (v(t), t);
}
function Zt(e) {
  if (!re(e)) return e;
  for (let o of e) if (se(o)) return o;
  throw Error("Expected type must be a computed value type");
}
function ot({
  mainInputType: e,
  inputControl: o,
  variableIsNegated: r,
  transforms: t,
  expectedType: n,
  supportedTransformNames: a,
  outputControl: i,
  computedValueOutputType: s,
}) {
  let l = Zt(n),
    u = s !== void 0 && gr(s, t, i),
    p = fo(o) && fo(i),
    f = t?.filter((w) => w.name === "arrayToArray").length ?? 0,
    d = f > 0,
    y = p && !d,
    x = te(e, n) && e !== "enum",
    g = e === "boolean",
    h = {
      sections: [],
      errorBefore: null,
      errorAfter: null,
      transformAdditionOptions: [],
      variableIsNegated: r,
      canRemoveAllTransforms: x && !p && (t?.length ?? 0) > 0,
    },
    m = e;
  if (t) {
    let w = r ? 1 : 0;
    for (let N = w, R = t.length; N < R; N++) {
      let I = et(t, N, r),
        C = t[N];
      if ((v(C), !$o(C.name))) {
        h.sections.push({ type: "unknownTransform", transform: C });
        continue;
      }
      let c = fe(C.name);
      (v(c),
        te(m, c) ||
          (N === 0
            ? (h.errorBefore = {
                type: "typeError",
                expected: c,
                received: m,
                replaceOptions: Ge({
                  input: m,
                  output: l,
                  currentTransformOutput: null,
                  currentTransform: null,
                  transformBefore: null,
                  variableConsumesNegated: g,
                  supportedTransformNames: a,
                  arrayMappingCanBeAdded: y,
                }),
              })
            : (v(I),
              h.sections.push({
                type: "typeError",
                key: `${C.id}-error`,
                expected: c,
                received: m,
                replaceOptions: Ge({
                  input: m,
                  output: l,
                  currentTransformOutput: null,
                  currentTransform: null,
                  transformBefore: I.name,
                  variableConsumesNegated: g,
                  supportedTransformNames: a,
                  arrayMappingCanBeAdded: y,
                }),
                transformBefore: I,
                transformAfter: C,
              }))));
      let M = h.sections[h.sections.length - 1];
      if (C.name === "negate" && Kt(M) && Z(M.transform.name))
        He(M) && (M.isNegated = !M.isNegated);
      else {
        let J = de(C),
          Q = h.sections.some((G) => {
            if (G.type === "typeError" || G.type === "unknownTransform") return !0;
            let O = de(G.transform);
            return te(O, n);
          }),
          q = p && C.name === "arrayToArray" && f === 1,
          W = !q && (x || Q || !!I);
        if (u && C.name === "arrayToArray") {
          (h.sections.push({
            type: "transformWarning",
            key: `${C.id}-warning`,
            message: "Incompatible",
            transform: C,
          }),
            (m = J));
          continue;
        }
        (h.sections.push({
          type: "transform",
          transform: C,
          inputType: m,
          inputControl: w === N || C.name === "arrayToArray" ? o : void 0,
          consumesNegated: Z(C.name),
          isNegated: !1,
          canBeDeleted: W,
          replaceOptions: q
            ? null
            : Ge({
                input: m,
                output: l,
                currentTransformOutput: J,
                currentTransform: C.name,
                transformBefore: I?.name ?? null,
                variableConsumesNegated: g,
                supportedTransformNames: a,
                arrayMappingCanBeAdded: y,
              }),
        }),
          (m = J));
      }
    }
  }
  if (p && !d && t && t.length > 0) {
    let w = t.at(-1);
    (v(w),
      h.sections.push({
        type: "transformWarning",
        key: `${w.id}-missing-array-mapping`,
        message: "Needs a map",
        transform: w,
      }));
  }
  let b = t ? et(t, t.length, r) : null,
    T = b ? b.name : null,
    P = T === "negate",
    k = T ? Z(T) : !1,
    A = !te(m, n);
  return (
    A &&
      (h.errorAfter = {
        type: "typeError",
        expected: n,
        received: m,
        replaceOptions: Ge({
          input: m,
          output: l,
          currentTransformOutput: null,
          currentTransform: null,
          transformBefore: T,
          variableConsumesNegated: g,
          supportedTransformNames: a,
          arrayMappingCanBeAdded: y,
        }),
      }),
    Jt(h, b, n, A) &&
      (a.forEach((w) => {
        if (
          (w === "arrayToArray" && !y) ||
          (T === w && !so(w)) ||
          (w === "negate" && (!b || P || k))
        )
          return;
        let N = fe(w);
        if (!N || !N.includes(m)) return;
        let R = Y(w),
          I = R.find((C) => te(C, n)) ?? R[0];
        (te(m, n) && !te(I, n)) ||
          (lo(w) && !te(I, n)) ||
          (h.transformAdditionOptions.push({ name: w, isNegated: !1, outputType: I }),
          Z(w) && h.transformAdditionOptions.push({ name: w, isNegated: !0, outputType: I }));
      }),
      Ue(h.transformAdditionOptions, l)),
    h
  );
}
function Jt(e, o, r, t) {
  return t
    ? !0
    : r === "boolean"
      ? o?.name !== "equals"
      : te("enum", r)
        ? !o || !o.name
          ? !0
          : !Y(o.name).includes("enum")
        : !0;
}
function Ro(e, o) {
  return !e || !o || K(e) || Be(e)
    ? !1
    : (le(e) || Wo(e),
      v(e.startValue.id === o.id),
      o.type === "boolean" && e.transforms[0]?.name === "negate");
}
function Po(e, o) {
  return Ro(e, o) && e.transforms.length === 1;
}
var X = D(Te(), 1);
var rt = D(Te());
var ye = D(B()),
  tt = rt.default.forwardRef(function ({ style: o, ...r }, t) {
    return (0, ye.jsxs)("svg", {
      role: "presentation",
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      ...r,
      style: { ...o, ...Lr },
      ref: t,
      children: [
        (0, ye.jsx)("circle", { cx: "3.75", cy: "3.75", r: "1", fill: "currentColor" }),
        (0, ye.jsx)("circle", { cx: "8.25", cy: "3.75", r: "1", fill: "currentColor" }),
        (0, ye.jsx)("circle", { cx: "3.75", cy: "8.25", r: "1", fill: "currentColor" }),
        (0, ye.jsx)("circle", { cx: "8.25", cy: "8.25", r: "1", fill: "currentColor" }),
      ],
    });
  });
var nt = "ib75oye",
  at = "dnxepni";
var wo = D(B(), 1);
function it() {
  let e = ue();
  return (0, wo.jsx)("div", {
    title: "Drag to reorder or remove",
    className: $(nt, e && at),
    children: (0, wo.jsx)(tt, {}),
  });
}
var en = { track: !0 };
function st(e) {
  let o = { ...e, event: "variable_reference_delete" };
  Lo(o, en);
}
function lt(e) {
  return e.tree.getNodes(e.stores.selectionStore.ids).every(Qo);
}
function ut(e, o, r) {
  if (!o && !r) return !1;
  let t = e.tree.getNodes(e.stores.selectionStore.ids),
    n = rr.overrideKeys(e.tree, t, !0);
  return Wr(n, o, r);
}
function pt(e, o, r) {
  Ar(e.tree, e.tree.getNodes(e.stores.selectionStore.ids), o, r);
}
var ft = D(Te(), 1);
function dt(e) {
  let o = ge(),
    { supportsFetchDataValues: r, onSelectFetchDataValue: t } = e,
    n = ue(),
    a = (0, ft.useCallback)(() => {
      if (r)
        return [
          {
            label: "Add fetch",
            click: () => {
              v(t);
              let i = t();
              We("fetch_computed_value_create", { outputType: i.outputType });
            },
            enabled: !n && !(Re(o) && wr(o.tree, o.stores.selectionStore.ids)),
            submenu: void 0,
          },
        ];
    }, [t, n, r]);
  if (!(!r || !t)) return a;
}
var gt = D(Te(), 1);
function ct(e, o, r) {
  switch (r.name) {
    case "equals":
      switch (o.name) {
        case "equals":
        case "startsWith":
        case "endsWith":
        case "contains":
        case "lessThan":
        case "greaterThan":
        case "isAfter":
        case "isBefore":
          switch (e) {
            case "string":
            case "boolean":
            case "number":
            case "enum":
            case "date":
            case "collectionreference":
              ar(e, o.value) && (r.value = o.value);
              break;
          }
      }
      return;
    case "isAfter":
    case "isBefore":
      switch (o.name) {
        case "isBefore":
        case "isAfter":
        case "equals":
          ee(o.value) && (r.value = o.value);
          break;
      }
      break;
    case "lessThan":
    case "greaterThan":
      switch (o.name) {
        case "lessThan":
        case "greaterThan":
          r.value = o.value;
          break;
        case "equals":
          ke(o.value) && (r.value = o.value);
          break;
      }
      break;
    case "startsWith":
    case "endsWith":
    case "contains":
      switch (o.name) {
        case "startsWith":
        case "endsWith":
        case "contains":
        case "equals":
          ee(o.value) && (r.value = o.value);
      }
      break;
    case "prefix":
    case "suffix":
      switch (o.name) {
        case "prefix":
        case "suffix":
          ((r.value = o.value), (r.valueLocalized = o.valueLocalized));
      }
      break;
    case "isIncludedIn":
      o.name === "isIncludedIn" && oe(o.value) && o.value.every(ee) && (r.value = o.value);
      break;
    case "containsAny":
    case "containsAll":
      switch (o.name) {
        case "containsAny":
        case "containsAll":
          (K(o.value) || (oe(o.value) && o.value.every(ee))) && (r.value = o.value);
      }
      break;
  }
}
function mt(e, o) {
  if (kr(o)) {
    let r = Fr(o);
    if (!r) return null;
    let t = e.getNodeWithTrait(r.providerId, me),
      n = t?.getVariable(r.variableId);
    return !t || !n || !ur(n)
      ? null
      : { type: "scopeArrayItemField", scopeId: t.id, arrayVariableId: n.id };
  }
  for (let r of o.providerIds) {
    let t = e.get(r);
    if (!er(t)) continue;
    let n = Dr(t);
    if (n)
      return {
        type: "repeatArrayItemField",
        repeatNodeId: t.getPrimaryId(),
        arrayVariableId: n.arrayVariable.id,
      };
  }
  return null;
}
function on({ tree: e, componentLoader: o, node: r }) {
  let t = vr(r);
  if (t?.providerId)
    return br(t.providerId)
      ? Tr(r, t.providerId, o, void 0)?.variableMap.get(t.id)?.name
      : e.getNodeWithTrait(t.providerId, me)?.getVariable(t.id)?.name;
}
function rn(e, o, r) {
  let t = on({ tree: e, componentLoader: o, node: r });
  if (t) return t;
  if (to(r)) return r.resolveValue("name") || "Component";
  if (or(r) && r.dataIdentifier) {
    let n = o.dataForIdentifier(r.dataIdentifier);
    if (n) return qo(n.name);
  }
  return r.resolveValue("name") || Pr(o, r);
}
function tn(e) {
  return Uo(e) ? "List" : ve(e) ? "Page" : to(e) ? "Component" : "";
}
function nn(e) {
  if (e === hr) return "Localization";
  if (e === Rr) return "Carousel";
}
function yt(e, o, r, t = "long") {
  let n = nn(r);
  if (n) return n;
  let a = Cr(e, o, r);
  if (a) return a;
  let i = e.get(r);
  if (!i) return "Unknown";
  let s = rn(e, o, i),
    l = tn(i);
  return t === "type" ? l : !l || s === l ? s : `${s} ${l}`;
}
function Ne(e, o, r, t) {
  return o !== "controlReference"
    ? e.canCreateVariable({ type: o })
    : !r || !t
      ? !1
      : (re(r) ? r : [r]).some(
          (a) =>
            pr(a) &&
            e.canCreateVariable({ type: "controlReference", expectedType: a, entityIdentifier: t })
        );
}
function an(e, o, r, t, n) {
  return n && Ne(e, n, r, t)
    ? [n]
    : re(o)
      ? o.filter((a) => Ne(e, a, r, t) && a !== "enum")
      : Ne(e, o, r, t)
        ? [o]
        : [];
}
function sn({
  engine: e,
  dynamicValue: o,
  canCreateVariable: r,
  canChooseVariable: t,
  additionalCreateVariableLabel: n,
  createVariableLabel: a,
  onAdditionalCreateVariable: i,
  variableCreationProviderId: s,
  variableType: l,
  variableCreationType: u,
  variableInfo: p,
  onCreateVariable: f,
  variableReferenceType: d,
  supportsComputedValues: y,
  referencedModuleIdentifier: S,
  controlSourceIdentifier: x,
  vectorSetIdentifier: g,
  isReadOnly: h,
  controlKey: m,
  allowedFileTypes: b,
  displayTransformOptions: T,
  enabledValueTransformNames: P,
  onSelectVariable: k,
  onSelectComputedValue: A,
  onRemoveDynamicValue: V,
  computedValuePopoutId: w,
  variableFilter: N,
  hideCollectionNavigationVariables: R,
}) {
  let I = typeof l == "string" ? l : xe(l),
    C = Rt(l, N),
    c = [],
    M = h || xr(e, "canDesign");
  if (r) {
    v(p, "variableInfo should be defined");
    let W = e.tree.getNodeWithTrait(s ?? p.idOfMutableVariableProvider, me);
    v(W, "variableProviderNode should exist when creating variables");
    let G = an(W, I, d, x, u);
    if (G.length === 1) {
      let O = G[0];
      (v(no(O), "onlyVariableType should be defined"),
        c.push({
          label: a ?? "Create variable",
          enabled: !M,
          click: () => {
            v(f, "onCreateVariable should be defined");
            let E = vo(e, O, p, W);
            f(E.scopeId, O, E.context);
          },
        }),
        n &&
          i &&
          c.push(
            {
              label: n,
              enabled: !M,
              click: () => {
                let E = vo(e, O, p, W);
                i(E.scopeId, O, E.context);
              },
            },
            { type: "separator" }
          ));
    } else if (G.length > 1) {
      let O = Ho.isOn("apps"),
        E = G.map((H) => ({
          label: O ? bo(H) : `Create ${bo(H).toLocaleLowerCase()} variable`,
          enabled: !M,
          click: () => {
            v(f, "onCreateVariable should be defined");
            let F = vo(e, H, p, W);
            f(F.scopeId, H, F.context);
          },
        }));
      O ? c.push({ label: a ?? "Create variable", enabled: !M, submenu: E }) : c.push(...E);
    }
  }
  let J = Tn(e, p, I, d, y, S, g, x, m, b, T, C, R),
    Q = t
      ? Rn({
          engine: e,
          variableInfo: p,
          compatibleVariablesByProvider: J,
          variableType: I,
          dynamicValue: o,
          variableReferenceType: d,
          referencedModuleIdentifier: S,
          vectorSetIdentifier: g,
          controlSourceIdentifier: x,
          controlKey: m,
          allowedFileTypes: b,
          supportsComputedValues: y,
          onSelectVariable: k,
          onSelectComputedValue: A,
          onRemoveDynamicValue: V,
          readonly: M,
          variableFilter: C,
          enabledValueTransformNames: P,
        })
      : [];
  Q.length > 0 && c.push({ label: "Set variable", submenu: Q });
  let q = vn({
    engine: e,
    variableInfo: p,
    dynamicValue: o,
    variableType: Sr(I),
    supportsComputedValues: y,
    onSelectComputedValue: A,
    computedValuePopoutId: w,
    displayTransformOptions: T,
    controlSourceIdentifier: x,
    controlKey: m,
    enabledValueTransformNames: P,
    readonly: M,
  });
  return (q && c.push(q), c);
}
function vo(e, o, r, t) {
  let n = mt(e.tree, r);
  return !n || !_o(o)
    ? { scopeId: t.id, context: void 0 }
    : n.type === "repeatArrayItemField"
      ? { scopeId: n.repeatNodeId, context: void 0 }
      : { scopeId: n.scopeId, context: { arrayItemVariableParentId: n.arrayVariableId } };
}
function ht(e) {
  let o = ge(),
    {
      additionalCreateVariableLabel: r,
      createVariableLabel: t,
      onAdditionalCreateVariable: n,
      variableCreationProviderId: a,
      variableType: i,
      variableCreationType: s,
      variableReferenceType: l,
      dynamicValue: u,
      onCreateVariable: p,
      onSelectVariable: f,
      onRemoveDynamicValue: d,
      referencedModuleIdentifier: y,
      controlSourceIdentifier: S,
      vectorSetIdentifier: x,
      controlKey: g,
      allowedFileTypes: h,
      supportsComputedValues: m,
      onSelectComputedValue: b,
      displayTransformOptions: T = !0,
      computedValuePopoutId: P,
      variableFilter: k,
      hideCollectionNavigationVariables: A,
    } = e,
    V = Gr(),
    w = Ko(),
    { canCreateVariable: N, canChooseVariable: R, canAssignVariable: I } = ln(o, V, e),
    C = ue(),
    c = (0, gt.useCallback)(() => {
      if (V && i)
        return sn({
          engine: o,
          variableInfo: V,
          additionalCreateVariableLabel: r,
          createVariableLabel: t,
          onAdditionalCreateVariable: n,
          variableCreationProviderId: a,
          variableType: i,
          variableCreationType: s,
          variableReferenceType: l,
          supportsComputedValues: m,
          referencedModuleIdentifier: y,
          controlSourceIdentifier: S,
          vectorSetIdentifier: x,
          controlKey: g,
          allowedFileTypes: h,
          displayTransformOptions: T,
          enabledValueTransformNames: w,
          dynamicValue: u,
          onSelectComputedValue: b,
          onSelectVariable: f,
          isReadOnly: C,
          onRemoveDynamicValue: d,
          onCreateVariable: p,
          canCreateVariable: N,
          canChooseVariable: R,
          computedValuePopoutId: P,
          variableFilter: k,
          hideCollectionNavigationVariables: A,
        });
    }, [r, h, N, R, y, P, g, S, t, T, u, w, C, A, p, n, d, b, f, m, s, a, V, l, i, x, k]);
  return I ? c : void 0;
}
function Rt(e, o) {
  return !e || !xe(e).includes("motionvalue")
    ? o
    : (r, t) => (r.type !== "motionvalue" || Mr(r, e)) && (!o || o(r, t));
}
function ln(e, o, r) {
  let { variableType: t, variableFilter: n } = r,
    a = t && (typeof t == "string" ? t : xe(t)),
    i = !!r.supportsVariables,
    s = o
      ? {
          assignableCollectionNavigationProviderId: gn(e, o),
          hasCollectionNavigationVariables: o.ids.has(co) || o.ids.has(mo),
          hideCollectionNavigationVariables: r.hideCollectionNavigationVariables,
        }
      : void 0,
    l =
      i &&
      Vn(
        o,
        a,
        r.variableReferenceType,
        r.supportsComputedValues,
        r.referencedModuleIdentifier,
        r.vectorSetIdentifier,
        r.controlSourceIdentifier,
        r.controlKey,
        r.allowedFileTypes,
        Rt(t, n),
        s
      ),
    u = e.tree.getNodeWithTrait(r.variableCreationProviderId ?? o?.idOfMutableVariableProvider, me),
    f = un(u, r) && !!r.onCreateVariable,
    d = l && !!r.onSelectVariable;
  return { canCreateVariable: f, canChooseVariable: d, canAssignVariable: f || d };
}
function Pt(e, o, r, t) {
  return (r && !r(e, o)) || (t?.hideCollectionNavigationVariables && Vt(e.id))
    ? !1
    : t?.hasCollectionNavigationVariables && Vt(e.id)
      ? o === t.assignableCollectionNavigationProviderId
      : !0;
}
function un(e, o) {
  if (!e || !o.supportsVariables || !o.variableType) return !1;
  let r = xe(o.variableType);
  if (o.variableCreationType)
    return Ne(e, o.variableCreationType, o.variableReferenceType, o.controlSourceIdentifier);
  for (let t of r) if (Ne(e, t, o.variableReferenceType, o.controlSourceIdentifier)) return !0;
  return !1;
}
function Vt(e) {
  return yo(e) || Oe(e, co) || Oe(e, mo);
}
function pn(e) {
  return K(e) ? e : Jo(e) ? e.startValue : null;
}
function fn(e, o) {
  return e.type !== "vectorsetitem" || !o ? !1 : e.setModuleId === o;
}
function bt(e, o) {
  let r = [{ type: e, depth: 1 }];
  for (; r.length > 0;) {
    let { type: t, depth: n } = r.shift(),
      a = n === go,
      i = Xo(t);
    if (i)
      for (let s of i) {
        let l = fe(s);
        if (l)
          for (let u of l)
            o.has(u) || (o.add(u), no(u) && (a || r.push({ type: u, depth: n + 1 })));
      }
  }
}
function dn(e) {
  return re(e) ? Array.from(e).sort().join() : e;
}
var wt = (() => {
  let e = new Map();
  return (o) => {
    let r = dn(o),
      t = e.get(r);
    if (t) return t;
    let n = new Set();
    if (re(o)) for (let a of o) bt(a, n);
    else bt(o, n);
    return (e.set(r, n), n);
  };
})();
function vt(e, o, r) {
  if (!o || !r) return;
  if (r === lr) return (v(ir(o)), sr(o));
  let t = e.reactComponentForIdentifier(r);
  if (t) return t.properties[o];
}
function De(e, o, r, t, n, a) {
  let i = ee(o) ? o : o.type;
  for (let s of a) {
    let l = fe(s);
    if (!l || !l.includes(i)) continue;
    let u = Y(s),
      p = re(r) ? r.find((d) => u.includes(d)) : u.find((d) => d === r);
    if (!se(p)) continue;
    let f = vt(e, t, n);
    return {
      outputType: p,
      valueTransform: he({ name: s, input: o, output: f?.type === p ? f : p }),
    };
  }
  return null;
}
function cn(e, o, r, t, n, a, i) {
  let s = ee(o) ? o : o.type,
    l = s === "enum" ? i.filter((d) => d !== "isSet") : i,
    u = De(e, o, r, t, n, l);
  if (u) return Ce(u.outputType, a, [u.valueTransform]);
  let p = De(e, o, "boolean", t, n, l),
    f = De(e, "boolean", r, void 0, void 0, i);
  if (p && f) return Ce(f.outputType, a, [p.valueTransform, f.valueTransform]);
  throw new Error(
    `Could not generate computed value with input: ${s}, and output: ${oe(r) ? r.join(", ") : r}`
  );
}
function mn(e, o) {
  for (let r of e) if (o.has(r)) return !0;
  return !1;
}
function Tt(e, o, r, t, n, a, i, s, l, u) {
  if (e === "enum")
    return !a || !i ? !1 : o.enums.some(({ variable: p, sourceIdentifier: f }) => Vo(p, f, a, i));
  for (let [p, f] of o.combined) {
    let d = o.variableSourceIdentifiers[p];
    for (let [, y] of f) if (Pt(y, p, l, u) && qe(y, p, d, e, r, t, n, a, i, s, l)) return !0;
  }
  return !1;
}
function yn(e, o, r, t) {
  for (let [n, a] of e.combined) for (let [, i] of a) if (Pt(i, n, r, t) && o.has(z(i))) return !0;
  return !1;
}
function Vn(e, o, r, t, n, a, i, s, l, u, p) {
  if (!o || !e) return !1;
  if (re(o)) {
    if (o.some((d) => Tt(d, e, r, n, a, i, s, l, u, p))) return !0;
  } else if (Tt(o, e, r, n, a, i, s, l, u, p)) return !0;
  if (t) {
    let f = wt(o);
    return f
      ? u || p?.hasCollectionNavigationVariables || e.types.has("sharedtype")
        ? yn(e, f, u, p)
        : mn(f, e.types)
      : !1;
  }
  return !1;
}
function qe(e, o, r, t, n, a, i, s, l, u, p) {
  return p && !p(e, o)
    ? !1
    : oe(t)
      ? t.some((f) => qe(e, o, r, f, n, a, i, s, l, u, p))
      : t === "collectionreference"
        ? e.type === "collectionreference" && e.dataIdentifier === a
        : t === "multicollectionreference"
          ? e.type === "multicollectionreference" && e.dataIdentifier === a
          : t === "sharedtype"
            ? e.type === "sharedtype" && e.moduleIdentifier === a
            : t === "vectorsetitem"
              ? fn(e, i)
              : t === "file"
                ? dr(e, u)
                : t === "controlReference" || e.type === "nodePropertyControlReference"
                  ? Nr(e, n, s, l)
                  : e.type === "enum"
                    ? Vo(e, r, s, l)
                    : e.type === t;
}
function It(e, o, r) {
  return !r || !o ? !1 : (wt(o)?.has(z(e)) ?? !1);
}
function bn(e) {
  let o = { children: {} };
  for (let [r, t] of e) {
    let n = yr(r),
      a = o;
    for (let i = 0; i < n.length; i++) {
      let s = n[i];
      oo(s) || ((a.children ??= {}), (a = a.children[s] ??= { id: Vr(n.slice(0, i + 1)) }));
    }
    a.variable = t;
  }
  return o;
}
function Tn(e, o, r, t, n, a, i, s, l, u, p, f, d = !1) {
  let y = [],
    S = o.providerIds[0];
  function x(g, h, m, b, T) {
    let P = [];
    for (let k in h) {
      let A = h[k];
      if (!A) continue;
      let { variable: V, children: w } = A;
      if (oo(V)) {
        let R = o.combinedControls.get(g)?.get(A.id ?? "");
        g === Zo &&
          A.id &&
          w &&
          R?.type === "object" &&
          P.push({
            type: "group",
            id: A.id,
            label: R.title ?? k,
            getCompatibleNestedVariables: () => x(g, w, m, b, T),
          });
        continue;
      }
      if (
        (V.type === "collectionreference" && !cr(k, V.dataIdentifier, b)) ||
        (yo(V.id) && (d || !Cn(g, T, S)))
      )
        continue;
      if (qe(V, g, m, r, t, a, i, s, l, u, f)) {
        (P.push({ type: "variable", variable: V, isNegated: !1, transforms: null }),
          n &&
            V.type === "boolean" &&
            P.push({ type: "variable", variable: V, isNegated: !0, transforms: null }));
        continue;
      }
      let N;
      if (w && V.type === "collectionreference") {
        let R = V.dataIdentifier,
          I = [...b, R];
        N = () => x(g, w, R, I, T);
      } else w && V.type === "object" && (N = () => x(g, w, m, b, T));
      if (!mr(V.id)) {
        if (It(V, r, n)) {
          let R = Ot(V, r);
          if (!p) {
            if (V.type === "object" && N) {
              P.push({
                type: "variable",
                variable: V,
                isNegated: !1,
                transforms: null,
                getCompatibleNestedVariables: N,
              });
              continue;
            }
            if ((P.push({ type: "variable", variable: V, isNegated: !1, transforms: null }), R)) {
              let I = R.valueTransformOptions.filter((C) => !ao.has(C.name));
              n &&
                V.type === "boolean" &&
                I.length > 0 &&
                P.push({ type: "variable", variable: V, isNegated: !0, transforms: null });
            }
            continue;
          }
          if (R && R.valueTransformOptions.length > 0) {
            P.push({
              type: "variable",
              variable: V,
              isNegated: !1,
              transforms: R.valueTransformOptions,
              getCompatibleNestedVariables: N,
            });
            let I = R.valueTransformOptions.filter((C) => !ao.has(C.name));
            n &&
              V.type === "boolean" &&
              I.length > 0 &&
              P.push({ type: "variable", variable: V, isNegated: !0, transforms: I });
          }
          continue;
        }
        N &&
          P.push({
            type: "variable",
            variable: V,
            isNegated: !1,
            transforms: null,
            getCompatibleNestedVariables: N,
          });
      }
    }
    if (P.length !== 0) return P;
  }
  for (let [g, h] of o.combined) {
    let { children: m } = bn(h);
    v(m, "Variable tree should have children");
    let b = o.variableSourceIdentifiers[g];
    if (!b) continue;
    let T = e.tree.get(g),
      P = x(g, m, b, [], T);
    P &&
      y.push({
        providerId: g,
        providerTitle: o.providerTitles?.get(g) ?? yt(e.tree, e.componentLoader, g),
        compatibleVariables: P,
      });
  }
  return y;
}
function Cn(e, o, r) {
  return ve(o) ? e === r : !1;
}
function gn(e, o) {
  let r = o.providerIds[0],
    t = r ? e.tree.get(r) : void 0;
  return ve(t) ? r : void 0;
}
function hn(e, o, r, t, n, a) {
  if (!le(e) || !r || !o) return null;
  let s = ot({
    mainInputType: z(r),
    inputControl: n,
    variableIsNegated: t,
    transforms: le(e) ? e.transforms : null,
    expectedType: o,
    supportedTransformNames: a,
  }).sections.find(He);
  return s ? { name: s.transform.name, isNegated: s.isNegated } : null;
}
function Ct(e) {
  return e.transforms.find((o) => o.name !== "negate");
}
function Io(e, o, r, t) {
  if (!r || !t) return;
  let n = r.providerId ?? o.fallbackProvider;
  if (!n) return;
  let a = o.combinedControls.get(n)?.get(r.id);
  if (!a) return;
  let i = nr(e, a) ?? a;
  return i.type === z(t) ? i : void 0;
}
function z(e) {
  return tr(e) ? "enum" : fr(e);
}
function Rn({
  engine: e,
  variableInfo: o,
  compatibleVariablesByProvider: r,
  variableType: t,
  dynamicValue: n,
  variableReferenceType: a,
  referencedModuleIdentifier: i,
  vectorSetIdentifier: s,
  controlSourceIdentifier: l,
  controlKey: u,
  allowedFileTypes: p,
  supportsComputedValues: f,
  onSelectVariable: d,
  onSelectComputedValue: y,
  onRemoveDynamicValue: S,
  readonly: x,
  variableFilter: g,
  enabledValueTransformNames: h,
}) {
  let m = [],
    b = o.fallbackProvider,
    T = pn(n),
    P = T ? To(T, o) : void 0,
    k = Ro(n, P),
    A = hn(n, t, P, k, Io(e.tree, o, T, P), h);
  function V(N, R, I) {
    return N.map((C) => {
      if (C.type === "group") {
        let O = C.id;
        return {
          label: C.label,
          checked: K(T) && (T.providerId ?? b) === R && Oe(T.id, O),
          submenu: () => {
            let E = C.getCompatibleNestedVariables();
            if (E) return V(E, R, I);
          },
        };
      }
      let { variable: c, isNegated: M, transforms: J, getCompatibleNestedVariables: Q } = C,
        q = In(C, R, T, k, b),
        W = J?.map((O) => ({
          label: io(O.name, O.isNegated),
          enabled: !x,
          checked: q && A?.name === O.name && A.isNegated === O.isNegated,
          click: () => G(O),
        }));
      if (Q) {
        v(
          c.type === "collectionreference" || c.type === "array" || c.type === "object",
          "Invalid variable type"
        );
        let O = c.type === "collectionreference" ? c.dataIdentifier : I,
          E = K(T) && (T.providerId ?? b) === R && Oe(T.id, c.id);
        return {
          label: c.name,
          checked: E,
          submenu: () => {
            let H = Q(),
              F = H ? V(H, R, O) : [];
            if (W) return F.length > 0 ? [...W, { type: "separator" }, ...F] : W;
            if (F.length > 0) return F;
          },
        };
      }
      function G(O) {
        if (q && !O) {
          (n && S?.(n), st({ variableId: c.id, variableType: c.type }));
          return;
        }
        let E = uo(c.id, R);
        if (le(n) && n.transforms.length > 0 && P !== void 0 && z(P) === z(c) && !Po(n, P) && !O) {
          let j = { ...n, startValue: E };
          if (M !== k) {
            v(c.type === "boolean");
            let L = Array.from(j.transforms);
            ((j.transforms = L), M ? L.unshift(ce()) : (v(L[0]?.name === "negate"), L.shift()));
          }
          y?.(j);
          return;
        }
        if (qe(c, R, I, t, a, i, s, l, u, p, g) && !O) {
          if (M) {
            (v(c.type === "boolean"), y?.(Ce("boolean", E, [ce()])));
            return;
          }
          (d?.(uo(c.id, R), c.type), Go({ variableId: c.id, variableType: c.type }));
          return;
        }
        (v(It(c, t, f), "Selected variable should be assignable using a computed value"),
          v(t, "Variable type should be defined"));
        let H = Io(e.tree, o, E, c) ?? z(c),
          F;
        if (O) {
          let j = vt(e.componentLoader, u, l),
            L = O.outputType,
            ne = [he({ name: O.name, input: H, output: j?.type === L ? j : L })];
          O.isNegated && ne.push(ce());
          let ae = oe(t) ? t.find(se) : t;
          if ((v(se(ae)), O.outputType !== ae)) {
            let be = De(e.componentLoader, O.outputType, ae, u, l, h);
            be && ne.push(be.valueTransform);
          }
          F = Ce(ae, E, ne);
        } else F = cn(e.componentLoader, H, t, u, l, E, h);
        if (le(n)) {
          let j = Ct(n),
            L = Ct(F);
          if (j && L) {
            let Ae = P ? z(P) : void 0,
              ne = z(c);
            Ae === ne && ct(ne, j, L);
            let ae = de(j),
              be = de(L);
            if (ae === be) {
              let $e = n.transforms.findIndex((U) => U === j),
                _ = n.transforms.slice($e + 1);
              if (_.length > 0) {
                let U = F.transforms.findIndex((ze) => ze === L),
                  pe = F.transforms.slice(0, U + 1);
                (pe.push(..._), (F.transforms = pe));
              }
            }
          }
        }
        (M && (v(c.type === "boolean"), (F.transforms = [ce(), ...F.transforms])),
          y?.(F),
          We("computed_value_create", {
            initialTransformName: F.transforms[0]?.name,
            inputType: c.type,
            outputType: F.outputType,
            source: "property_panel_row",
          }));
      }
      return {
        label: Br(c.name || "Unknown", M),
        checked: q,
        enabled: !x,
        click: () => G(),
        submenu: W,
      };
    });
  }
  let w = r.entries();
  for (let [N, { providerId: R, providerTitle: I, compatibleVariables: C }] of w) {
    let c = o.variableSourceIdentifiers[R];
    if (!c) continue;
    let M = V(C, R, c);
    N === 0
      ? m.push(...M)
      : (N === 1 && m.push({ type: "separator" }),
        m.push({ label: I, submenu: M, checked: K(T) && (T.providerId ?? b) === R }));
  }
  return m;
}
function Pn(e, o) {
  let r = new Map(),
    t = Ie(e);
  if (!t) return r;
  let n = e === "array" && o === "array";
  for (let a of t) {
    if ((n && a !== "arrayToArray") || !ho(a, e, o)) continue;
    let s = Y(a),
      l = s.includes(o) ? o : s[0];
    r.set(a, l);
  }
  return r;
}
var wn = (() => {
  let e = new Map();
  return (o, r) => {
    let t = o + r;
    if (e.has(t)) return e.get(t);
    let n = Pn(o, r),
      a = [];
    for (let [s, l] of n)
      (s === "negate" && o === "boolean") ||
        (a.push({ name: s, isNegated: !1, outputType: l }),
        Z(s) && a.push({ name: s, isNegated: !0, outputType: l }));
    if (a.length === 0) {
      e.set(t, void 0);
      return;
    }
    Ue(a, r);
    let i = { valueTransformOptions: a, outputType: r };
    return (e.set(t, i), i);
  };
})();
function Ot(e, o) {
  let r = z(e);
  if (!zo(r)) return;
  let t = Array.isArray(o) ? o.find(se) : o;
  if (se(t)) return wn(r, t);
}
function vn({
  engine: e,
  variableInfo: o,
  dynamicValue: r,
  variableType: t,
  supportsComputedValues: n,
  onSelectComputedValue: a,
  computedValuePopoutId: i,
  displayTransformOptions: s,
  controlSourceIdentifier: l,
  controlKey: u,
  enabledValueTransformNames: p,
  readonly: f,
}) {
  if (!n || !a || !t || !r || Be(r) || !s) return;
  let d = K(r) ? r : r.startValue,
    y = To(d, o);
  if (!y || y.type === "motionvalue") return;
  let S = Po(r, y),
    x = t === "boolean";
  if (le(r) && !S)
    return {
      label: `Edit ${po(x ? "Condition" : "Transform")}`,
      click: () => {
        (v(i), Hr.navigation.presentPopout(i));
      },
    };
  if (!K(r) && !S) return;
  let g = Ot(y, t);
  if (!g) return;
  let { valueTransformOptions: h, outputType: m } = g;
  return {
    label: `Add ${po(x ? "Condition" : "Transform")}`,
    submenu: h.map((b) => ({
      label: io(b.name, b.isNegated),
      enabled: !f,
      click: () => {
        let T = [];
        S && T.push(ce());
        let P = Io(e.tree, o, d, y),
          k = he({ name: b.name, input: P ?? z(y), output: b.outputType });
        if ((T.push(k), b.isNegated && T.push(ce()), ee(t) && b.outputType !== t)) {
          let V = De(e.componentLoader, b.outputType, t, u, l, p);
          V && T.push(V.valueTransform);
        }
        let A = Ce(m, d, T);
        a(A);
      },
    })),
  };
}
function In(e, o, r, t, n) {
  return !r || r.id !== e.variable.id || e.isNegated !== t ? !1 : (r.providerId || n) === o;
}
var Pe = D(B());
function xt() {
  return (0, Pe.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    fill: "none",
    children: [
      (0, Pe.jsx)("path", {
        d: "M 5 0 C 7.761 0 10 2.239 10 5 C 10 7.761 7.761 10 5 10 C 2.239 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 Z",
        fill: "rgba(136, 136, 136, 0.2)",
      }),
      (0, Pe.jsx)("path", {
        d: "M 5 2.5 L 5 7.5",
        fill: "transparent",
        stroke: "rgb(153, 153, 153)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, Pe.jsx)("path", {
        d: "M 2.5 5 L 7.5 5",
        fill: "transparent",
        stroke: "rgb(153, 153, 153)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var Ve = D(B(), 1);
function Nt({
  title: e,
  className: o,
  displayPlusIcon: r,
  primaryMenuIsOpen: t,
  overridden: n,
  warning: a,
  ...i
}) {
  return (0, Ve.jsxs)("div", {
    className: $(Kr, a && $r, r && Xr, n ? Zr : t && Yr, o),
    ...i,
    children: [
      r && (0, Ve.jsx)(xt, {}),
      (0, Ve.jsx)("div", { className: $(Ir, zr), children: (0, Ve.jsx)(Or, { children: e }) }),
      a && (0, Ve.jsx)(Jr, { children: a }),
    ],
  });
}
var Se = D(B(), 1),
  Dt = ({
    title: e,
    titleClassName: o,
    warning: r,
    children: t,
    className: n,
    style: a,
    reorderColumnCount: i,
    reorderControlHidden: s,
    withButtonCursor: l = !1,
    displayPlusIcon: u = !1,
    isOverridden: p = !1,
    primaryMenuIsOpen: f = !1,
    onMouseDown: d,
    onContextMenu: y,
    ReorderControl: S,
    ...x
  }) => {
    let g = S !== void 0;
    g && ke(i) && (a = { ...a, "--reorder-column-count": i });
    let h = {};
    l && ((h.role = "button"), e && (h["aria-label"] = e));
    let m = y ? { onContextMenu: y, ...h } : {},
      b = d ? { onMouseDown: d, ...h } : {};
    return (0, Se.jsxs)("div", {
      className: $(Ur, g && qr, n, l && _r),
      style: a,
      tabIndex: -1,
      ...m,
      ...b,
      ...x,
      children: [
        e &&
          (0, Se.jsx)(Nt, {
            overridden: p,
            title: e,
            className: o,
            displayPlusIcon: u,
            warning: r,
            onMouseDown: d,
            primaryMenuIsOpen: f,
          }),
        t,
        g && !s && (0, Se.jsx)(S, {}),
      ],
    });
  };
var Mt = D(B(), 1);
function St({
  onContextMenu: e,
  children: o,
  onAdd: r,
  onDelete: t,
  onResetToDefault: n,
  onCopy: a,
  onPaste: i,
  onSetAsDefault: s,
  deleteTitle: l,
  copyTitle: u,
  pasteTitle: p,
  addEnabled: f = !0,
  deleteEnabled: d = !0,
  pasteEnabled: y,
  copyEnabled: S,
  resetToDefaultEnabled: x,
  setAsDefaultVisible: g = !1,
  withReorderControl: h = !1,
  traitTypes: m,
  traitTypeKeys: b,
  variableType: T,
  variableCreationType: P,
  additionalCreateVariableLabel: k,
  createVariableLabel: A,
  onAdditionalCreateVariable: V,
  variableCreationProviderId: w,
  variableReferenceType: N,
  variableFilter: R,
  hideCollectionNavigationVariables: I,
  dynamicValue: C,
  onCreateVariable: c,
  onSelectVariable: M,
  onRemoveDynamicValue: J,
  supportsVariables: Q = !1,
  referencedModuleIdentifier: q,
  vectorSetIdentifier: W,
  controlSourceIdentifier: G,
  controlKey: O,
  allowedFileTypes: E,
  supportsComputedValues: H = !1,
  onSelectComputedValue: F,
  displayTransformOptions: j,
  computedValuePopoutId: L,
  supportsFetchDataValues: Ae,
  onSelectFetchDataValue: ne,
  className: ae,
  panelRowApiRef: be,
  ...$e
}) {
  let _ = ge(),
    U = ue(),
    pe = jr(b, m),
    [ze, So] = X.default.useState(!1),
    jt = On(),
    Ee = ht({
      variableType: T,
      variableCreationType: P,
      additionalCreateVariableLabel: k,
      createVariableLabel: A,
      onAdditionalCreateVariable: V,
      variableCreationProviderId: w,
      variableReferenceType: N,
      dynamicValue: C,
      onCreateVariable: c,
      onSelectVariable: M,
      onRemoveDynamicValue: J,
      supportsVariables: Q,
      referencedModuleIdentifier: q,
      vectorSetIdentifier: W,
      controlSourceIdentifier: G,
      controlKey: O,
      allowedFileTypes: E,
      supportsComputedValues: jt && H,
      onSelectComputedValue: F,
      displayTransformOptions: j,
      computedValuePopoutId: L,
      variableFilter: R,
      hideCollectionNavigationVariables: I,
    }),
    Fe = dt({ supportsFetchDataValues: Ae ?? !1, onSelectFetchDataValue: ne }),
    Mo = !!Ee || !!Fe,
    Xe = !!(r && f && !U),
    Ye = !!(t && d && !U),
    Ao = !!n,
    Ht = (0, X.useCallback)(
      async (ie) => {
        let { clientX: Je, clientY: Qe } = ie;
        (Xe || Ye || a || i || Ao || (s && g)) &&
          (ie.preventDefault(),
          _.stores.contextMenuStore.show(
            [
              { label: u || "Copy", click: a, visible: !!a, enabled: ro(S) ? S() : S },
              {
                label: p ? await p() : "Paste",
                click: i,
                visible: !!i,
                enabled: !U && (ro(y) ? await y() : y),
              },
              { type: "separator" },
              { label: "Add", click: r, visible: Xe },
              { label: l || "Remove", click: t, visible: Ye },
              { label: "Reset to default", click: n, enabled: !U && x, visible: !!n },
              { label: "Set as default", click: s, enabled: !U && !!s, visible: !!s && g },
            ],
            { location: { x: Je, y: Qe } }
          ));
      },
      [Xe, Ye, a, i, Ao, s, g, u, S, p, U, y, r, l, t, n, x]
    ),
    Ze = (0, X.useCallback)(
      async (ie, Je = !1) => {
        let { target: Qe, currentTarget: Eo } = ie,
          Fo = Re(_) && lt(_),
          Ut = Fo && !!(m || b);
        if (!Je && (!Er.isLeftMouseClick(ie) || Qe !== Eo)) return;
        let eo = Ee?.();
        if (!Ee && !pe && !Fe) return;
        let we = [];
        eo && we.push(...eo);
        let ko = Fe?.();
        (ko && (eo && we.push({ type: "separator" }), we.push(...ko)),
          we.push(
            { type: "separator" },
            {
              label: "Reset override",
              click() {
                Re(_) && pt(_, m, b);
              },
              enabled: !U && Fo && ut(_, m, b),
              visible: Re(_) && Ut,
            }
          ));
        let Bo = ie.currentTarget.getBoundingClientRect(),
          qt = { x: Bo.left, y: Bo.bottom };
        (So(!0),
          _.stores.contextMenuStore.show(we, {
            location: qt,
            onDone: () => So(!1),
            submenuPlacement: "left-start",
          }));
      },
      [m, b, Ee, pe, Fe, U]
    );
  return (
    (0, X.useImperativeHandle)(be, () => ({ displayPrimaryMenu: (ie) => Ze(ie, !0) }), [Ze]),
    (0, Mt.jsx)(Dt, {
      withButtonCursor: pe || Mo,
      displayPlusIcon: Mo,
      onMouseDown: Ze,
      isOverridden: pe,
      primaryMenuIsOpen: ze,
      onContextMenu: e ?? Ht,
      ReorderControl: h ? it : void 0,
      className: ae,
      ...$e,
      children: o,
    })
  );
}
var Oo = (0, X.createContext)(!1);
Oo.displayName = "ComputedValuesSupportedContext";
var zi = Oo.Provider;
function On() {
  return (0, X.useContext)(Oo);
}
var At = "dt2vdl5",
  Qi = "dc4gvpv",
  Et = "s1dpgfha";
var Gt = D(Te(), 1);
var Ft = "ia3rrjn";
var Bt = D(B(), 1);
function kt({ className: e, children: o, ...r }) {
  return (0, Bt.jsx)("div", { className: $(Ft, e), ...r, children: o });
}
var Ke = D(B(), 1),
  xo = /\[([^\]]+)\]\((https?:\/\/[\w./?=#%&-]+)\)/gu,
  No = /\*([^*]+)\*/gu,
  _e = /(\n)/gu;
function Me(e, o = 0, r = [xo, No, _e]) {
  let [t, n] = r
    .map((s) => ((s.lastIndex = o), s.exec(e)))
    .reduce(
      (s, l, u) => {
        let [p] = s;
        if (p && l) {
          if (p.index < l.index) return s;
        } else if (p) return s;
        return [l, r[u]];
      },
      [null, void 0]
    );
  if (!t || !n) return o === e.length ? [] : [e.substring(o)];
  let a = [];
  t.index - o > 0 && a.push(e.substring(o, t.index));
  let i = n.lastIndex;
  if (n === xo) {
    let [, s, l] = t;
    v(s !== void 0 && l !== void 0, "Link matches must capture text and URL");
    let u = Me(s, 0, [No, _e]);
    a.push((0, Ke.jsx)("a", { href: l, target: "_blank", children: u }, t.index));
  }
  if (n === No) {
    let [, s] = t;
    v(s !== void 0, "Emphasis matches must capture text");
    let l = Me(s, 0, [xo, _e]);
    a.push((0, Ke.jsx)("em", { children: l }, t.index));
  }
  return (n === _e && a.push((0, Ke.jsx)("br", {}, t.index)), a.push(...Me(e, i)), a);
}
var Wt = "d1ykgdi6",
  Lt = "w1wgf3m";
var Do = D(B(), 1),
  Vs = Gt.default.memo(function ({ fullWidth: o = !1, withMargin: r = !0, description: t }) {
    let n = Me(t);
    return (0, Do.jsx)(St, {
      title: o ? void 0 : " ",
      children: (0, Do.jsx)(kt, { className: $(Wt, r ? Lt : void 0, o ? Et : At), children: n }),
    });
  });
function Cs(e, o) {
  return {
    type: "image",
    value: o,
    valueLocalized: e.valueLocalized,
    alt: e.alt,
    altLocalized: e.altLocalized,
  };
}
var hs = { gridColumn: "2 / -1" };
export {
  st as a,
  Qr as b,
  Dn as c,
  kt as d,
  tt as e,
  lt as f,
  ut as g,
  pt as h,
  He as i,
  Gn as j,
  $t as k,
  zt as l,
  jn as m,
  te as n,
  Hn as o,
  Zt as p,
  ot as q,
  ct as r,
  yt as s,
  Ro as t,
  Po as u,
  ht as v,
  bn as w,
  Tn as x,
  Dt as y,
  St as z,
  zi as A,
  At as B,
  Qi as C,
  Et as D,
  Vs as E,
  Cs as F,
  hs as G,
};
//# sourceMappingURL=chunk-DLQHFR77.mjs.map
