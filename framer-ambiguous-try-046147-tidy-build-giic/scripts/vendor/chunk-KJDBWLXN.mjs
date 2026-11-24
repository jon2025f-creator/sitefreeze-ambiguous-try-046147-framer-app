import {
  H as qr,
  K as _r,
  L as Kr,
  M as $r,
  N as zr,
  O as Xr,
  P as Yr,
  Q as Zr,
  R as Jr,
} from "chunk-XYNYPHUY.mjs";
import { a as Wr } from "chunk-UFDPOQSE.mjs";
import { $a as Br } from "chunk-VZL5AMBM.mjs";
import { fa as Hr, r as Gr, u as To, x as jr } from "chunk-XY3GRBQP.mjs";
import { a as Fr, b as kr } from "chunk-QNTOTSVH.mjs";
import {
  $f as Vo,
  He as xr,
  Wk as bo,
  Xk as xe,
  Yk as Dr,
  Zk as Mr,
  _f as Nr,
  b as Go,
  kc as vr,
  vl as Ar,
  wk as Sr,
} from "chunk-YIXIB7IO.mjs";
import { c as wr } from "chunk-3LLSLFWE.mjs";
import { tb as Pr } from "chunk-FWRJAE2N.mjs";
import { Ek as gr, Fk as ce, Gk as he, Og as rr, dg as or, pk as dr } from "chunk-RPMUQEFH.mjs";
import {
  Ao as ir,
  Bo as sr,
  Bp as mo,
  Co as lr,
  Dd as $o,
  Df as Qo,
  Dp as yo,
  Fd as Ie,
  Fq as Rr,
  Gd as zo,
  Hd as fe,
  Jp as cr,
  Kd as Xo,
  Ld as Y,
  Lp as Oe,
  Mj as tr,
  Nd as de,
  Od as ao,
  Oj as nr,
  Pd as Z,
  Qd as io,
  Rd as so,
  Sd as Yo,
  Td as lo,
  Tp as mr,
  Vp as yr,
  Wp as Vr,
  Xo as ur,
  ae as K,
  be as uo,
  cq as br,
  fp as pr,
  gp as fr,
  gq as Tr,
  he as Zo,
  hq as Cr,
  jb as Uo,
  kb as to,
  kr as me,
  lp as fo,
  me as se,
  nb as ve,
  ne as le,
  oe as Be,
  oq as hr,
  pd as no,
  pe as Jo,
  qd as _o,
  qm as ar,
  te as Ce,
  yp as co,
  zd as Ko,
  zh as er,
} from "chunk-GFXIFNNK.mjs";
import { a as Lr } from "chunk-EHVYGNVJ.mjs";
import { a as Er } from "chunk-JHU5KKUH.mjs";
import { c as Ur } from "chunk-Q5XY4RTY.mjs";
import { b as ue } from "chunk-TS24LVSZ.mjs";
import { a as Or } from "chunk-4HRYW54D.mjs";
import { d as Ir } from "chunk-Z2L5FPD7.mjs";
import { b as Re } from "chunk-X27LL6OM.mjs";
import { g as We } from "chunk-DDQ2IDFF.mjs";
import { a as $ } from "chunk-QFU6OGL3.mjs";
import { g as po } from "chunk-NJXSBLUG.mjs";
import { e as qo } from "chunk-3CKYEPG2.mjs";
import { c as ge } from "chunk-PWPT6KBA.mjs";
import { k as Ho } from "chunk-RPFS3VN5.mjs";
import { b as Lo } from "chunk-7JB7LKQK.mjs";
import { a as k } from "chunk-2FCXHKEL.mjs";
import { a as jo, b as ee, f as ke, j as oe, m as re, p as oo, r as ro } from "chunk-ARJ7WQTJ.mjs";
import { a as Te } from "chunk-SWYZG2NI.mjs";
import { b as v, c as Wo } from "chunk-4JY5UMT2.mjs";
import { e as S } from "chunk-WLHSDIGQ.mjs";
var Le = S(Te(), 1),
  $t = {},
  Qr = (0, Le.createContext)($t);
Qr.displayName = "ControlPropRowContext";
function Mn() {
  let e = (0, Le.useContext)(Qr);
  if (!e)
    throw new Error("useControlPropRows must be used within a ControlPropRowContext.Provider");
  return e;
}
var et = "dt2vdl5",
  Bn = "dc4gvpv",
  ot = "s1dpgfha";
function He(e) {
  return e?.type === "transform";
}
function zt(e) {
  return He(e) || Xt(e);
}
function $n(e) {
  return e?.type === "unknownTransform";
}
function Xt(e) {
  return e?.type === "transformWarning";
}
function Yt(e) {
  return e?.type === "typeError";
}
function zn(e) {
  return Yt(e) && "key" in e;
}
function te(e, o) {
  return oe(o) ? o.includes(e) : e === o;
}
function Zt(e) {
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
  (e.sort((r, t) => (r.outputType === t.outputType ? 0 : r.outputType === o ? -1 : 1)), Zt(e));
}
function Xn(e, o, r) {
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
function Jt(e, o, r) {
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
    let i = Jt(o, r, t);
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
function rt(e, o, r) {
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
function Qt(e) {
  if (!re(e)) return e;
  for (let o of e) if (se(o)) return o;
  throw Error("Expected type must be a computed value type");
}
function tt({
  mainInputType: e,
  inputControl: o,
  variableIsNegated: r,
  transforms: t,
  expectedType: n,
  supportedTransformNames: a,
  outputControl: i,
  computedValueOutputType: s,
}) {
  let l = Qt(n),
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
      let I = rt(t, N, r),
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
      if (C.name === "negate" && zt(M) && Z(M.transform.name))
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
  let b = t ? rt(t, t.length, r) : null,
    T = b ? b.name : null,
    P = T === "negate",
    B = T ? Z(T) : !1,
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
    en(h, b, n, A) &&
      (a.forEach((w) => {
        if (
          (w === "arrayToArray" && !y) ||
          (T === w && !so(w)) ||
          (w === "negate" && (!b || P || B))
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
function en(e, o, r, t) {
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
var X = S(Te(), 1);
var nt = S(Te());
var ye = S(k()),
  at = nt.default.forwardRef(function ({ style: o, ...r }, t) {
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
var it = "ib75oye",
  st = "dnxepni";
var wo = S(k(), 1);
function lt() {
  let e = ue();
  return (0, wo.jsx)("div", {
    title: "Drag to reorder or remove",
    className: $(it, e && st),
    children: (0, wo.jsx)(at, {}),
  });
}
var rn = { track: !0 };
function ut(e) {
  let o = { ...e, event: "variable_reference_delete" };
  Lo(o, rn);
}
function pt(e) {
  return e.tree.getNodes(e.stores.selectionStore.ids).every(Qo);
}
function ft(e, o, r) {
  if (!o && !r) return !1;
  let t = e.tree.getNodes(e.stores.selectionStore.ids),
    n = rr.overrideKeys(e.tree, t, !0);
  return Wr(n, o, r);
}
function dt(e, o, r) {
  Ar(e.tree, e.tree.getNodes(e.stores.selectionStore.ids), o, r);
}
var ct = S(Te(), 1);
function mt(e) {
  let o = ge(),
    { supportsFetchDataValues: r, onSelectFetchDataValue: t } = e,
    n = ue(),
    a = (0, ct.useCallback)(() => {
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
var Rt = S(Te(), 1);
function yt(e, o, r) {
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
function Vt(e, o) {
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
    let n = Sr(t);
    if (n)
      return {
        type: "repeatArrayItemField",
        repeatNodeId: t.getPrimaryId(),
        arrayVariableId: n.arrayVariable.id,
      };
  }
  return null;
}
function tn({ tree: e, componentLoader: o, node: r }) {
  let t = vr(r);
  if (t?.providerId)
    return br(t.providerId)
      ? Tr(r, t.providerId, o, void 0)?.variableMap.get(t.id)?.name
      : e.getNodeWithTrait(t.providerId, me)?.getVariable(t.id)?.name;
}
function nn(e, o, r) {
  let t = tn({ tree: e, componentLoader: o, node: r });
  if (t) return t;
  if (to(r)) return r.resolveValue("name") || "Component";
  if (or(r) && r.dataIdentifier) {
    let n = o.dataForIdentifier(r.dataIdentifier);
    if (n) return qo(n.name);
  }
  return r.resolveValue("name") || Pr(o, r);
}
function an(e) {
  return Uo(e) ? "List" : ve(e) ? "Page" : to(e) ? "Component" : "";
}
function sn(e) {
  if (e === hr) return "Localization";
  if (e === Rr) return "Carousel";
}
function bt(e, o, r, t = "long") {
  let n = sn(r);
  if (n) return n;
  let a = Cr(e, o, r);
  if (a) return a;
  let i = e.get(r);
  if (!i) return "Unknown";
  let s = nn(e, o, i),
    l = an(i);
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
function ln(e, o, r, t, n) {
  return n && Ne(e, n, r, t)
    ? [n]
    : re(o)
      ? o.filter((a) => Ne(e, a, r, t) && a !== "enum")
      : Ne(e, o, r, t)
        ? [o]
        : [];
}
function un({
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
  referencedModuleIdentifier: D,
  controlSourceIdentifier: x,
  vectorSetIdentifier: g,
  isReadOnly: h,
  controlKey: m,
  allowedFileTypes: b,
  displayTransformOptions: T,
  enabledValueTransformNames: P,
  onSelectVariable: B,
  onSelectComputedValue: A,
  onRemoveDynamicValue: V,
  computedValuePopoutId: w,
  variableFilter: N,
  hideCollectionNavigationVariables: R,
}) {
  let I = typeof l == "string" ? l : xe(l),
    C = wt(l, N),
    c = [],
    M = h || xr(e, "canDesign");
  if (r) {
    v(p, "variableInfo should be defined");
    let W = e.tree.getNodeWithTrait(s ?? p.idOfMutableVariableProvider, me);
    v(W, "variableProviderNode should exist when creating variables");
    let G = ln(W, I, d, x, u);
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
  let J = gn(e, p, I, d, y, D, g, x, m, b, T, C, R),
    Q = t
      ? wn({
          engine: e,
          variableInfo: p,
          compatibleVariablesByProvider: J,
          variableType: I,
          dynamicValue: o,
          variableReferenceType: d,
          referencedModuleIdentifier: D,
          vectorSetIdentifier: g,
          controlSourceIdentifier: x,
          controlKey: m,
          allowedFileTypes: b,
          supportsComputedValues: y,
          onSelectVariable: B,
          onSelectComputedValue: A,
          onRemoveDynamicValue: V,
          readonly: M,
          variableFilter: C,
          enabledValueTransformNames: P,
        })
      : [];
  Q.length > 0 && c.push({ label: "Set variable", submenu: Q });
  let q = On({
    engine: e,
    variableInfo: p,
    dynamicValue: o,
    variableType: Dr(I),
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
  let n = Vt(e.tree, r);
  return !n || !_o(o)
    ? { scopeId: t.id, context: void 0 }
    : n.type === "repeatArrayItemField"
      ? { scopeId: n.repeatNodeId, context: void 0 }
      : { scopeId: n.scopeId, context: { arrayItemVariableParentId: n.arrayVariableId } };
}
function Pt(e) {
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
      controlSourceIdentifier: D,
      vectorSetIdentifier: x,
      controlKey: g,
      allowedFileTypes: h,
      supportsComputedValues: m,
      onSelectComputedValue: b,
      displayTransformOptions: T = !0,
      computedValuePopoutId: P,
      variableFilter: B,
      hideCollectionNavigationVariables: A,
    } = e,
    V = Gr(),
    w = Ko(),
    { canCreateVariable: N, canChooseVariable: R, canAssignVariable: I } = pn(o, V, e),
    C = ue(),
    c = (0, Rt.useCallback)(() => {
      if (V && i)
        return un({
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
          controlSourceIdentifier: D,
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
          variableFilter: B,
          hideCollectionNavigationVariables: A,
        });
    }, [r, h, N, R, y, P, g, D, t, T, u, w, C, A, p, n, d, b, f, m, s, a, V, l, i, x, B]);
  return I ? c : void 0;
}
function wt(e, o) {
  return !e || !xe(e).includes("motionvalue")
    ? o
    : (r, t) => (r.type !== "motionvalue" || Mr(r, e)) && (!o || o(r, t));
}
function pn(e, o, r) {
  let { variableType: t, variableFilter: n } = r,
    a = t && (typeof t == "string" ? t : xe(t)),
    i = !!r.supportsVariables,
    s = o
      ? {
          assignableCollectionNavigationProviderId: Rn(e, o),
          hasCollectionNavigationVariables: o.ids.has(co) || o.ids.has(mo),
          hideCollectionNavigationVariables: r.hideCollectionNavigationVariables,
        }
      : void 0,
    l =
      i &&
      Tn(
        o,
        a,
        r.variableReferenceType,
        r.supportsComputedValues,
        r.referencedModuleIdentifier,
        r.vectorSetIdentifier,
        r.controlSourceIdentifier,
        r.controlKey,
        r.allowedFileTypes,
        wt(t, n),
        s
      ),
    u = e.tree.getNodeWithTrait(r.variableCreationProviderId ?? o?.idOfMutableVariableProvider, me),
    f = fn(u, r) && !!r.onCreateVariable,
    d = l && !!r.onSelectVariable;
  return { canCreateVariable: f, canChooseVariable: d, canAssignVariable: f || d };
}
function vt(e, o, r, t) {
  return (r && !r(e, o)) || (t?.hideCollectionNavigationVariables && Tt(e.id))
    ? !1
    : t?.hasCollectionNavigationVariables && Tt(e.id)
      ? o === t.assignableCollectionNavigationProviderId
      : !0;
}
function fn(e, o) {
  if (!e || !o.supportsVariables || !o.variableType) return !1;
  let r = xe(o.variableType);
  if (o.variableCreationType)
    return Ne(e, o.variableCreationType, o.variableReferenceType, o.controlSourceIdentifier);
  for (let t of r) if (Ne(e, t, o.variableReferenceType, o.controlSourceIdentifier)) return !0;
  return !1;
}
function Tt(e) {
  return yo(e) || Oe(e, co) || Oe(e, mo);
}
function dn(e) {
  return K(e) ? e : Jo(e) ? e.startValue : null;
}
function cn(e, o) {
  return e.type !== "vectorsetitem" || !o ? !1 : e.setModuleId === o;
}
function Ct(e, o) {
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
function mn(e) {
  return re(e) ? Array.from(e).sort().join() : e;
}
var It = (() => {
  let e = new Map();
  return (o) => {
    let r = mn(o),
      t = e.get(r);
    if (t) return t;
    let n = new Set();
    if (re(o)) for (let a of o) Ct(a, n);
    else Ct(o, n);
    return (e.set(r, n), n);
  };
})();
function Ot(e, o, r) {
  if (!o || !r) return;
  if (r === lr) return (v(ir(o)), sr(o));
  let t = e.reactComponentForIdentifier(r);
  if (t) return t.properties[o];
}
function Se(e, o, r, t, n, a) {
  let i = ee(o) ? o : o.type;
  for (let s of a) {
    let l = fe(s);
    if (!l || !l.includes(i)) continue;
    let u = Y(s),
      p = re(r) ? r.find((d) => u.includes(d)) : u.find((d) => d === r);
    if (!se(p)) continue;
    let f = Ot(e, t, n);
    return {
      outputType: p,
      valueTransform: he({ name: s, input: o, output: f?.type === p ? f : p }),
    };
  }
  return null;
}
function yn(e, o, r, t, n, a, i) {
  let s = ee(o) ? o : o.type,
    l = s === "enum" ? i.filter((d) => d !== "isSet") : i,
    u = Se(e, o, r, t, n, l);
  if (u) return Ce(u.outputType, a, [u.valueTransform]);
  let p = Se(e, o, "boolean", t, n, l),
    f = Se(e, "boolean", r, void 0, void 0, i);
  if (p && f) return Ce(f.outputType, a, [p.valueTransform, f.valueTransform]);
  throw new Error(
    `Could not generate computed value with input: ${s}, and output: ${oe(r) ? r.join(", ") : r}`
  );
}
function Vn(e, o) {
  for (let r of e) if (o.has(r)) return !0;
  return !1;
}
function gt(e, o, r, t, n, a, i, s, l, u) {
  if (e === "enum")
    return !a || !i ? !1 : o.enums.some(({ variable: p, sourceIdentifier: f }) => Vo(p, f, a, i));
  for (let [p, f] of o.combined) {
    let d = o.variableSourceIdentifiers[p];
    for (let [, y] of f) if (vt(y, p, l, u) && qe(y, p, d, e, r, t, n, a, i, s, l)) return !0;
  }
  return !1;
}
function bn(e, o, r, t) {
  for (let [n, a] of e.combined) for (let [, i] of a) if (vt(i, n, r, t) && o.has(z(i))) return !0;
  return !1;
}
function Tn(e, o, r, t, n, a, i, s, l, u, p) {
  if (!o || !e) return !1;
  if (re(o)) {
    if (o.some((d) => gt(d, e, r, n, a, i, s, l, u, p))) return !0;
  } else if (gt(o, e, r, n, a, i, s, l, u, p)) return !0;
  if (t) {
    let f = It(o);
    return f
      ? u || p?.hasCollectionNavigationVariables || e.types.has("sharedtype")
        ? bn(e, f, u, p)
        : Vn(f, e.types)
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
              ? cn(e, i)
              : t === "file"
                ? dr(e, u)
                : t === "controlReference" || e.type === "nodePropertyControlReference"
                  ? Nr(e, n, s, l)
                  : e.type === "enum"
                    ? Vo(e, r, s, l)
                    : e.type === t;
}
function xt(e, o, r) {
  return !r || !o ? !1 : (It(o)?.has(z(e)) ?? !1);
}
function Cn(e) {
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
function gn(e, o, r, t, n, a, i, s, l, u, p, f, d = !1) {
  let y = [],
    D = o.providerIds[0];
  function x(g, h, m, b, T) {
    let P = [];
    for (let B in h) {
      let A = h[B];
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
            label: R.title ?? B,
            getCompatibleNestedVariables: () => x(g, w, m, b, T),
          });
        continue;
      }
      if (
        (V.type === "collectionreference" && !cr(B, V.dataIdentifier, b)) ||
        (yo(V.id) && (d || !hn(g, T, D)))
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
        if (xt(V, r, n)) {
          let R = Nt(V, r);
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
    let { children: m } = Cn(h);
    v(m, "Variable tree should have children");
    let b = o.variableSourceIdentifiers[g];
    if (!b) continue;
    let T = e.tree.get(g),
      P = x(g, m, b, [], T);
    P &&
      y.push({
        providerId: g,
        providerTitle: o.providerTitles?.get(g) ?? bt(e.tree, e.componentLoader, g),
        compatibleVariables: P,
      });
  }
  return y;
}
function hn(e, o, r) {
  return ve(o) ? e === r : !1;
}
function Rn(e, o) {
  let r = o.providerIds[0],
    t = r ? e.tree.get(r) : void 0;
  return ve(t) ? r : void 0;
}
function Pn(e, o, r, t, n, a) {
  if (!le(e) || !r || !o) return null;
  let s = tt({
    mainInputType: z(r),
    inputControl: n,
    variableIsNegated: t,
    transforms: le(e) ? e.transforms : null,
    expectedType: o,
    supportedTransformNames: a,
  }).sections.find(He);
  return s ? { name: s.transform.name, isNegated: s.isNegated } : null;
}
function ht(e) {
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
function wn({
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
  onRemoveDynamicValue: D,
  readonly: x,
  variableFilter: g,
  enabledValueTransformNames: h,
}) {
  let m = [],
    b = o.fallbackProvider,
    T = dn(n),
    P = T ? To(T, o) : void 0,
    B = Ro(n, P),
    A = Pn(n, t, P, B, Io(e.tree, o, T, P), h);
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
        q = xn(C, R, T, B, b),
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
          (n && D?.(n), ut({ variableId: c.id, variableType: c.type }));
          return;
        }
        let E = uo(c.id, R);
        if (le(n) && n.transforms.length > 0 && P !== void 0 && z(P) === z(c) && !Po(n, P) && !O) {
          let j = { ...n, startValue: E };
          if (M !== B) {
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
        (v(xt(c, t, f), "Selected variable should be assignable using a computed value"),
          v(t, "Variable type should be defined"));
        let H = Io(e.tree, o, E, c) ?? z(c),
          F;
        if (O) {
          let j = Ot(e.componentLoader, u, l),
            L = O.outputType,
            ne = [he({ name: O.name, input: H, output: j?.type === L ? j : L })];
          O.isNegated && ne.push(ce());
          let ae = oe(t) ? t.find(se) : t;
          if ((v(se(ae)), O.outputType !== ae)) {
            let be = Se(e.componentLoader, O.outputType, ae, u, l, h);
            be && ne.push(be.valueTransform);
          }
          F = Ce(ae, E, ne);
        } else F = yn(e.componentLoader, H, t, u, l, E, h);
        if (le(n)) {
          let j = ht(n),
            L = ht(F);
          if (j && L) {
            let Ae = P ? z(P) : void 0,
              ne = z(c);
            Ae === ne && yt(ne, j, L);
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
function vn(e, o) {
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
var In = (() => {
  let e = new Map();
  return (o, r) => {
    let t = o + r;
    if (e.has(t)) return e.get(t);
    let n = vn(o, r),
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
function Nt(e, o) {
  let r = z(e);
  if (!zo(r)) return;
  let t = Array.isArray(o) ? o.find(se) : o;
  if (se(t)) return In(r, t);
}
function On({
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
  let D = Po(r, y),
    x = t === "boolean";
  if (le(r) && !D)
    return {
      label: `Edit ${po(x ? "Condition" : "Transform")}`,
      click: () => {
        (v(i), Hr.navigation.presentPopout(i));
      },
    };
  if (!K(r) && !D) return;
  let g = Nt(y, t);
  if (!g) return;
  let { valueTransformOptions: h, outputType: m } = g;
  return {
    label: `Add ${po(x ? "Condition" : "Transform")}`,
    submenu: h.map((b) => ({
      label: io(b.name, b.isNegated),
      enabled: !f,
      click: () => {
        let T = [];
        D && T.push(ce());
        let P = Io(e.tree, o, d, y),
          B = he({ name: b.name, input: P ?? z(y), output: b.outputType });
        if ((T.push(B), b.isNegated && T.push(ce()), ee(t) && b.outputType !== t)) {
          let V = Se(e.componentLoader, b.outputType, t, u, l, p);
          V && T.push(V.valueTransform);
        }
        let A = Ce(m, d, T);
        a(A);
      },
    })),
  };
}
function xn(e, o, r, t, n) {
  return !r || r.id !== e.variable.id || e.isNegated !== t ? !1 : (r.providerId || n) === o;
}
var Dt = S(k());
function St(e) {
  return (0, Dt.jsx)(Ur, { warning: !0, ...e });
}
var Pe = S(k());
function Mt() {
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
var Ve = S(k(), 1);
function At({
  title: e,
  className: o,
  displayPlusIcon: r,
  primaryMenuIsOpen: t,
  overridden: n,
  warning: a,
  ...i
}) {
  return (0, Ve.jsxs)("div", {
    className: $($r, a && zr, r && Yr, n ? Jr : t && Zr, o),
    ...i,
    children: [
      r && (0, Ve.jsx)(Mt, {}),
      (0, Ve.jsx)("div", { className: $(Ir, Xr), children: (0, Ve.jsx)(Or, { children: e }) }),
      a && (0, Ve.jsx)(St, { children: a }),
    ],
  });
}
var De = S(k(), 1),
  Et = ({
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
    ReorderControl: D,
    ...x
  }) => {
    let g = D !== void 0;
    g && ke(i) && (a = { ...a, "--reorder-column-count": i });
    let h = {};
    l && ((h.role = "button"), e && (h["aria-label"] = e));
    let m = y ? { onContextMenu: y, ...h } : {},
      b = d ? { onMouseDown: d, ...h } : {};
    return (0, De.jsxs)("div", {
      className: $(qr, g && _r, n, l && Kr),
      style: a,
      tabIndex: -1,
      ...m,
      ...b,
      ...x,
      children: [
        e &&
          (0, De.jsx)(At, {
            overridden: p,
            title: e,
            className: o,
            displayPlusIcon: u,
            warning: r,
            onMouseDown: d,
            primaryMenuIsOpen: f,
          }),
        t,
        g && !s && (0, De.jsx)(D, {}),
      ],
    });
  };
var kt = S(k(), 1);
function Ft({
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
  copyEnabled: D,
  resetToDefaultEnabled: x,
  setAsDefaultVisible: g = !1,
  withReorderControl: h = !1,
  traitTypes: m,
  traitTypeKeys: b,
  variableType: T,
  variableCreationType: P,
  additionalCreateVariableLabel: B,
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
    [ze, Do] = X.default.useState(!1),
    Ut = Nn(),
    Ee = Pt({
      variableType: T,
      variableCreationType: P,
      additionalCreateVariableLabel: B,
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
      supportsComputedValues: Ut && H,
      onSelectComputedValue: F,
      displayTransformOptions: j,
      computedValuePopoutId: L,
      variableFilter: R,
      hideCollectionNavigationVariables: I,
    }),
    Fe = mt({ supportsFetchDataValues: Ae ?? !1, onSelectFetchDataValue: ne }),
    Mo = !!Ee || !!Fe,
    Xe = !!(r && f && !U),
    Ye = !!(t && d && !U),
    Ao = !!n,
    qt = (0, X.useCallback)(
      async (ie) => {
        let { clientX: Je, clientY: Qe } = ie;
        (Xe || Ye || a || i || Ao || (s && g)) &&
          (ie.preventDefault(),
          _.stores.contextMenuStore.show(
            [
              { label: u || "Copy", click: a, visible: !!a, enabled: ro(D) ? D() : D },
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
      [Xe, Ye, a, i, Ao, s, g, u, D, p, U, y, r, l, t, n, x]
    ),
    Ze = (0, X.useCallback)(
      async (ie, Je = !1) => {
        let { target: Qe, currentTarget: Eo } = ie,
          Fo = Re(_) && pt(_),
          _t = Fo && !!(m || b);
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
                Re(_) && dt(_, m, b);
              },
              enabled: !U && Fo && ft(_, m, b),
              visible: Re(_) && _t,
            }
          ));
        let Bo = ie.currentTarget.getBoundingClientRect(),
          Kt = { x: Bo.left, y: Bo.bottom };
        (Do(!0),
          _.stores.contextMenuStore.show(we, {
            location: Kt,
            onDone: () => Do(!1),
            submenuPlacement: "left-start",
          }));
      },
      [m, b, Ee, pe, Fe, U]
    );
  return (
    (0, X.useImperativeHandle)(be, () => ({ displayPrimaryMenu: (ie) => Ze(ie, !0) }), [Ze]),
    (0, kt.jsx)(Et, {
      withButtonCursor: pe || Mo,
      displayPlusIcon: Mo,
      onMouseDown: Ze,
      isOverridden: pe,
      primaryMenuIsOpen: ze,
      onContextMenu: e ?? qt,
      ReorderControl: h ? lt : void 0,
      className: ae,
      ...$e,
      children: o,
    })
  );
}
var Oo = (0, X.createContext)(!1);
Oo.displayName = "ComputedValuesSupportedContext";
var ts = Oo.Provider;
function Nn() {
  return (0, X.useContext)(Oo);
}
var as = { gridColumn: "2 / -1" };
var Ht = S(Te(), 1);
var Bt = "ia3rrjn";
var Lt = S(k(), 1);
function Wt({ className: e, children: o, ...r }) {
  return (0, Lt.jsx)("div", { className: $(Bt, e), ...r, children: o });
}
var Ke = S(k(), 1),
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
var Gt = "d1ykgdi6",
  jt = "w1wgf3m";
var So = S(k(), 1),
  Rs = Ht.default.memo(function ({ fullWidth: o = !1, withMargin: r = !0, description: t }) {
    let n = Me(t);
    return (0, So.jsx)(Ft, {
      title: o ? void 0 : " ",
      children: (0, So.jsx)(Wt, { className: $(Gt, r ? jt : void 0, o ? ot : et), children: n }),
    });
  });
function vs(e, o) {
  return {
    type: "image",
    value: o,
    valueLocalized: e.valueLocalized,
    alt: e.alt,
    altLocalized: e.altLocalized,
  };
}
export {
  ut as a,
  et as b,
  Bn as c,
  ot as d,
  bt as e,
  at as f,
  pt as g,
  ft as h,
  dt as i,
  He as j,
  $n as k,
  Xt as l,
  Yt as m,
  zn as n,
  te as o,
  Xn as p,
  Qt as q,
  tt as r,
  yt as s,
  Ro as t,
  Po as u,
  Pt as v,
  Cn as w,
  gn as x,
  St as y,
  Et as z,
  Ft as A,
  ts as B,
  as as C,
  Wt as D,
  Rs as E,
  Qr as F,
  Mn as G,
  vs as H,
};
//# sourceMappingURL=chunk-KJDBWLXN.mjs.map
