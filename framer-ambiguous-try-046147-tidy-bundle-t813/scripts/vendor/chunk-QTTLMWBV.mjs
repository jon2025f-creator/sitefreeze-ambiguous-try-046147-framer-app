import { E as me, b as ae, n as ce, nc as fe, oc as ge } from "chunk-BH442IVQ.mjs";
import { K as ue, ea as de, g as se, j as le, k as pe } from "chunk-DA4ZBDF2.mjs";
import { R as ie } from "chunk-2PQQ6YAS.mjs";
import { a as G } from "chunk-UUZ2PIR2.mjs";
import { Bi as I, Jh as ne } from "chunk-4KNOZXT3.mjs";
import { Hv as x, qv as oe, tv as re } from "chunk-LBKZPB25.mjs";
import {
  Cd as M,
  Oc as J,
  Qd as Q,
  Qk as b,
  Rd as h,
  Sk as _,
  Tc as P,
  Tk as K,
  Vk as ee,
  lb as $,
} from "chunk-KZ3J5BLF.mjs";
import { c as X } from "chunk-UYIYJ4FN.mjs";
import { a as te } from "chunk-K6L5GVTR.mjs";
import { b as w } from "chunk-RHJ4RSOB.mjs";
import { b as Y, d as Z } from "chunk-4SNIJDUQ.mjs";
import { a as j, b as L } from "chunk-WRBBN7SY.mjs";
import { a as O } from "chunk-2FCXHKEL.mjs";
import { b as C, m as q } from "chunk-LA34HORX.mjs";
import { a as U } from "chunk-SWYZG2NI.mjs";
import { e as k } from "chunk-WLHSDIGQ.mjs";
function be() {
  te("https://www.framer.com/downloads/");
}
var he = k(U(), 1),
  Ie = {
    type: "add",
    variant: "info",
    icon: "color-wheel",
    action: { title: "Install", onClick: be },
    primaryText: "Use latest desktop app",
    secondaryText: "to sample colors.",
    key: "install-desktop-app",
    duration: 5e3,
    showCloseButton: "never",
  };
function Qe({ channel: r, toast: o }) {
  (0, he.useEffect)(() => {
    if (!r) return;
    let e,
      c = {
        async sampleColor() {
          if (window.EyeDropper) {
            e?.abort();
            let u = new AbortController();
            e = u;
            let i = new window.EyeDropper();
            try {
              return {
                color: (
                  await i.open({ signal: u.signal }).catch((g) => {
                    if (g?.name === "AbortError") return { sRGBHex: void 0 };
                    throw g;
                  })
                ).sRGBHex,
              };
            } finally {
              e === u && (e = void 0);
            }
          }
          return (o(Ie), {});
        },
      },
      m = G.on(r).register(c);
    return () => {
      (e?.abort(), m());
    };
  }, [r, o]);
}
var y = k(U(), 1);
var s = k(O(), 1),
  v = "link",
  ye = ["*"];
function R(r) {
  return `computed-link-${r}`;
}
var So = y.default.memo(function ({
  control: o,
  controlKey: e,
  controlProp: c,
  onChange: m,
  onContextMenu: u,
  sortable: i,
  traitTypeKeys: f,
  deleteEnabled: g,
  deleteTitle: V,
  onDelete: ke,
  supportsVariables: D = !1,
  supportsComputedValues: S = !1,
  supportsFetchDataValues: E = !1,
  nodeIds: F,
}) {
  let a = Y(),
    B = (0, y.useMemo)(() => F ?? [], [F]),
    Ce = (0, y.useMemo)(() => me(e || X()), [e]),
    { value: l } = c,
    t = h(l) || b(l) ? l : j,
    d = (n) => {
      (m(e, (p) => ({ ...p, value: n }), B), ae(t, n));
    },
    T = (n) => {
      let { defaultValue: p } = o;
      return C(p) ? p : n;
    },
    Pe = () => {
      let n = T();
      q(n) && d(n);
    },
    we = () => {
      d(void 0);
    },
    ve = a.scheduler.wrapHandler((n) => {
      let p = o.title || P(e),
        xe = C(t) ? t : T("");
      a.beginUndoGroup();
      let N = ne({ engine: a, scopeId: n, type: v, name: p, initialValue: xe });
      (N && d(N), a.endUndoGroup());
    }),
    H = a.scheduler.wrapHandler(() => {
      h(t) && d(void 0);
    }),
    Ve = a.scheduler.wrapHandler(() => {
      let n = J({ type: "link", value: b(l) ? l : void 0 }),
        p = Q("link", n, []);
      return (z(p), p);
    }),
    z = a.scheduler.wrapHandler((n) => {
      (d(n), ie.navigation.presentPopout(R(e)));
    }),
    De = i ? void 0 : o.title || P(e),
    A = T(),
    W = !M(t) && !b(t),
    Te = fe(a, t),
    Le = Ee(a, t),
    Me = C(A) && b(l) && !ee(l, K({ url: A }));
  return (0, s.jsx)(ue, {
    title: De,
    onContextMenu: u,
    onResetToDefault: Pe,
    resetToDefaultEnabled: Me,
    variableType: I[v],
    allowedFileTypes: ye,
    variableCreationType: v,
    onCreateVariable: ve,
    onRemoveDynamicValue: H,
    dynamicValue: h(l) ? l : null,
    onSelectVariable: d,
    traitTypeKeys: f,
    withReorderControl: i,
    reorderColumnCount: 2,
    deleteEnabled: g,
    deleteTitle: V,
    onDelete: ke,
    supportsVariables: D,
    supportsComputedValues: S,
    computedValuePopoutId: R(e),
    onSelectComputedValue: z,
    supportsFetchDataValues: E,
    onSelectFetchDataValue: Ve,
    children: h(t)
      ? (0, s.jsx)(ce, {
          title: o.title || P(e),
          value: t,
          outputControl: o,
          expectedType: I[v],
          allowedFileTypes: ye,
          popoutId: R(e),
          onRemove: H,
          onChangeDynamicValue: d,
          nodeIds: B,
          supportsComputedValues: S,
          supportsFetchDataValues: E,
          controlReferenceInfo: void 0,
        })
      : (0, s.jsx)(de, {
          id: Ce,
          sortable: i,
          popout: (0, s.jsx)(ge, {
            link: L(t) ? void 0 : t,
            onChange: d,
            supportsVariables: D,
            supportsPageLinks: Se(a),
            supportsSlugVariables: D,
          }),
          navigationTitle: "Link",
          displayDivider: !0,
          title: L(t) ? "Add\u2026" : Te,
          previewWithoutWrapper: !0,
          preview: (0, s.jsx)(Re, { isSuggestion: W, icon: Le }),
          onDelete: b(t) ? we : void 0,
          titleColor: W ? w.inputLabel : void 0,
        }),
  });
});
function Re({ isSuggestion: r, icon: o }) {
  let e = r ? w.swatchBackgroundPlaceholderForLink : w.swatchBackgroundForLink;
  return (0, s.jsx)("span", {
    style: { display: "flex", marginLeft: 3, color: e },
    children: o ?? (0, s.jsx)(se, {}),
  });
}
function Se(r) {
  if (!Z(r)) return !0;
  let { scopeType: o } = r.stores.scopeStore;
  switch (o) {
    case "CanvasPage":
    case "DesignPage":
      return !1;
    default:
      return !0;
  }
}
function Ee(r, o) {
  if (!_(o)) return;
  let { webPageId: e, pathVariables: c } = o;
  if (!c) return;
  let m = r.tree.getNodeWithTrait(e, $);
  if (!m) return;
  let u = r.componentLoader.dataForIdentifier(m.dataIdentifier);
  if (!u) return;
  let i = u.annotations?.framerSlug;
  if (!i) return;
  let f = c[i];
  if (!M(f)) return;
  let g = x(oe, i);
  if (f.id === g) return (0, s.jsx)(pe, {});
  let V = x(re, i);
  if (f.id === V) return (0, s.jsx)(le, {});
}
export { Qe as a, So as b };
//# sourceMappingURL=chunk-QTTLMWBV.mjs.map
