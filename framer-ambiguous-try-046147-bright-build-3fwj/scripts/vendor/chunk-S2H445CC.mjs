import { d as ye } from "chunk-P4GS252O.mjs";
import { Ve as Se, We as Le, xa as ke } from "chunk-HOIZ5U7H.mjs";
import { f as nr } from "chunk-3ISAX2MT.mjs";
import { A as he, B as ve, O as we } from "chunk-B5YB42VP.mjs";
import { gl as ge } from "chunk-IUBS3ZEM.mjs";
import { Lp as Ce, Pl as me, mb as K, xb as de } from "chunk-AXA2UK75.mjs";
import { a as xe } from "chunk-HDO2UBC4.mjs";
import { a as Q } from "chunk-5J75RUHV.mjs";
import { b as Ie } from "chunk-3WOJER5Z.mjs";
import { b as Ge } from "chunk-TS24LVSZ.mjs";
import { a as Ve } from "chunk-2NWYE64E.mjs";
import { w as z } from "chunk-AAHMUU7O.mjs";
import { c as j } from "chunk-52KW6HPC.mjs";
import { a as J } from "chunk-SMHMQ5IL.mjs";
import { a as o } from "chunk-2FCXHKEL.mjs";
import { a as U } from "chunk-SWYZG2NI.mjs";
import { c as W } from "chunk-4JY5UMT2.mjs";
import { e as r } from "chunk-WLHSDIGQ.mjs";
var C = r(U(), 1);
var Me = Symbol("uninitialized");
function ir(e) {
  return e + 1;
}
function gr(e, t, i, a) {
  let p = j(),
    [, l] = (0, C.useReducer)(ir, 0),
    c = (0, C.useRef)(Me);
  c.current === Me && (c.current = t());
  let u = (0, C.useRef)(t);
  u.current = t;
  let d = (0, C.useRef)(i);
  if (!z(i, d.current)) {
    d.current = i;
    let g = c.current,
      s = u.current();
    (a ? !J(g, s) : !z(g, s)) && (c.current = s);
  }
  let m = Array.isArray(e) ? e : [e];
  return (
    (0, C.useEffect)(() => {
      let g = () => {
          let fe = c.current,
            $ = u.current();
          (a ? J(fe, $) : z(fe, $)) || ((c.current = $), l());
        },
        s = [...m, g],
        tr = p.scheduler.changes.observe(...s);
      return () => p.scheduler.changes.removeObserver(tr);
    }, m),
    c.current
  );
}
var Pe = r(U(), 1);
function wr(e, t) {
  let i = j();
  return (0, Pe.useCallback)(i.scheduler.wrapHandler(e), t);
}
var f = r(o());
function Ee(e) {
  return (0, f.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    fill: "none",
    ...e,
    children: [
      (0, f.jsx)("path", {
        d: "M 1.75 1.25 C 2.164 1.25 2.5 1.586 2.5 2 C 2.5 2.414 2.164 2.75 1.75 2.75 C 1.336 2.75 1 2.414 1 2 C 1 1.586 1.336 1.25 1.75 1.25 Z",
        fill: "currentColor",
      }),
      (0, f.jsx)("path", {
        d: "M 1.75 5.25 C 2.164 5.25 2.5 5.586 2.5 6 C 2.5 6.414 2.164 6.75 1.75 6.75 C 1.336 6.75 1 6.414 1 6 C 1 5.586 1.336 5.25 1.75 5.25 Z",
        fill: "currentColor",
      }),
      (0, f.jsx)("path", {
        d: "M 1.75 9.25 C 2.164 9.25 2.5 9.586 2.5 10 C 2.5 10.414 2.164 10.75 1.75 10.75 C 1.336 10.75 1 10.414 1 10 C 1 9.586 1.336 9.25 1.75 9.25 Z",
        fill: "currentColor",
      }),
      (0, f.jsx)("path", {
        d: "M 4.5 2 L 10.5 2",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }),
      (0, f.jsx)("path", {
        d: "M 4.5 6 L 10.5 6",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }),
      (0, f.jsx)("path", {
        d: "M 4.5 10 L 10.5 10",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
      }),
    ],
  });
}
var M = r(o());
function be(e) {
  return (0, M.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, M.jsx)("path", {
        d: "M 0.5 5.999 C 0.5 4.067 2.067 2.5 3.999 2.5 C 5.277 2.5 6.722 2.5 8 2.5 C 9.933 2.5 11.5 4.067 11.5 6 C 11.5 6 11.5 6 11.5 6.001 C 11.5 7.933 9.933 9.5 8.001 9.5 C 6.723 9.5 5.278 9.5 4 9.5 C 2.067 9.5 0.5 7.933 0.5 6 C 0.5 6 0.5 6 0.5 5.999 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, M.jsx)("path", {
        d: "M 8 4.5 C 8.828 4.5 9.5 5.172 9.5 6 C 9.5 6.828 8.828 7.5 8 7.5 C 7.172 7.5 6.5 6.828 6.5 6 C 6.5 5.172 7.172 4.5 8 4.5 Z",
        fill: "currentColor",
      }),
    ],
  });
}
var X = r(o());
function Te(e) {
  return (0, X.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: (0, X.jsx)("path", {
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9.182 9.932a4.5 4.5 0 0 1-6.364-6.364l2.475-2.475a1 1 0 0 1 1.414 0l2.475 2.475a4.5 4.5 0 0 1 0 6.364",
    }),
  });
}
var v = r(o());
function De(e) {
  return (0, v.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, v.jsx)("path", {
        d: "M 1 2 L 11 2",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: "10",
      }),
      (0, v.jsx)("path", {
        d: "M 1 6 L 7 6",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: "10",
      }),
      (0, v.jsx)("path", {
        d: "M 1 10 L 4 10",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: "10",
      }),
    ],
  });
}
var Mr = "p1oxlfbn",
  Pr = "s1xpzgm5",
  Er = "p1chribc",
  br = "w18hzogu",
  Tr = "w1ar1ui";
function Ne(e, t, i) {
  let a = ke(t, i);
  (e.stores.analyticsStore.addFilter("collectionItemId", i.id, a), e.stores.analyticsStore.open());
}
function Re(e, t) {
  let i = sr(e, t);
  if (i) return Ne(e, i.collection, i.collectionItem);
  let a = he(e.tree, t),
    p = ve(e.tree, t);
  if (!a || !p) return;
  let l = we(a);
  (a !== "/" && e.stores.analyticsStore.addFilter("routePath", p, l),
    e.stores.analyticsStore.open());
}
function sr(e, t) {
  if (!t.dataIdentifier) return null;
  let i = me(e.tree, t.dataIdentifier);
  if (!i) return null;
  let a = e.stores.scopeStore.getSelectedCollectionItemForWebPage(t);
  if (a) {
    let l = e.tree.getNodeWithTrait(a, de);
    return l ? { collection: i, collectionItem: l } : null;
  }
  let p = i.getUnsortedChildren()[0];
  return p ? { collection: i, collectionItem: p } : null;
}
function jr(e) {
  e.stores.chromeStore.mainView === 5 && e.stores.chromeStore.setLocalizationsVisible(!1);
  let t = ar(e);
  if (t) return Ne(e, t.collection, t.collectionItem);
  let i = lr(e);
  if (i) return (e.stores.siteSettingsStore.close(), Re(e, i));
  if (e.stores.siteSettingsStore.isOpen) {
    (e.stores.siteSettingsStore.close(), e.stores.analyticsStore.open());
    return;
  }
  let a = e.stores.scopeStore.active;
  if (!K(a)) {
    e.stores.analyticsStore.open();
    return;
  }
  Re(e, a);
}
function ar(e) {
  let { treeStore: t, chromeStore: i } = e.stores,
    { mainView: a, contentManagementOverlayStack: p } = i,
    l = p.at(-1);
  if (a === 2 && l) {
    let c = Se({ stackElement: l, tree: e.tree }),
      u = Le({ treeStore: t, stackElement: l });
    return !c || !u ? void 0 : { collection: c, collectionItem: u };
  }
}
function lr(e) {
  if (e.stores.siteSettingsStore.isOpen && e.stores.siteSettingsStore.active?.tab === "page") {
    let t = e.stores.siteSettingsStore.active.id;
    return e.tree.getNodeWithTrait(t, K);
  }
  return null;
}
var w = r(o());
function Fe(e) {
  return (0, w.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: (0, w.jsxs)("g", {
      transform: "translate(1 1.5)",
      children: [
        (0, w.jsx)("path", {
          d: "M 7 1.5 C 7 1.5 8.93 3.706 9.924 4.841 C 10.254 5.219 10.254 5.781 9.924 6.159 C 8.93 7.294 7 9.5 7 9.5",
          fill: "transparent",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        (0, w.jsx)("path", {
          d: "M 9.5 5.5 C 9.5 5.5 5.315 5.5 2.5 5.5 C 1.119 5.5 0 4.381 0 3 C 0 1.547 0 0 0 0",
          fill: "transparent",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      ],
    }),
  });
}
var P = r(o());
function Ae(e) {
  return (0, P.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    fill: "none",
    viewBox: "0 0 12 12",
    ...e,
    children: [
      (0, P.jsx)("path", {
        d: "M 1 6 C 1 6 1 4.392 1 3 C 1 1.895 1.895 1 3 1 C 4.392 1 6 1 6 1",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, P.jsx)("path", {
        d: "M 11 6 C 11 6 11 7.608 11 9 C 11 10.104 10.104 11 9 11 C 7.608 11 6 11 6 11",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var E = r(o());
function Be(e) {
  return (0, E.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, E.jsx)("path", {
        d: "M 1 1 C 1 1 2.874 1 5 1 C 8.313 1 11 3.687 11 7 C 11 9.126 11 11 11 11",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, E.jsx)("path", {
        d: "M 1 6 C 1 6 3.541 6 5 6 C 5.552 6 6 6.448 6 7 C 6 8.459 6 11 6 11",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var b = r(o());
function Oe(e) {
  return (0, b.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, b.jsx)("path", {
        d: "M 6 0.5 C 8.209 0.5 10 2.291 10 4.5 C 10 6.709 8.209 8.5 6 8.5 C 3.791 8.5 2 6.709 2 4.5 C 2 2.291 3.791 0.5 6 0.5 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, b.jsx)("path", {
        d: "M 9.914 10.305 C 9.541 10.556 9.143 10.773 8.725 10.95 C 7.887 11.304 6.966 11.5 6 11.5 C 5.034 11.5 4.113 11.304 3.275 10.95 C 2.857 10.773 2.459 10.556 2.086 10.305",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var k = r(o());
function Ze(e) {
  return (0, k.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, k.jsx)("path", {
        d: "M 3.5 2 C 3.5 2 2.06 3.92 1.175 5.1 C 0.775 5.633 0.775 6.367 1.175 6.9 C 2.06 8.08 3.5 10 3.5 10",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, k.jsx)("path", {
        d: "M 8.5 2 C 8.5 2 9.94 3.92 10.825 5.1 C 11.225 5.633 11.225 6.367 10.825 6.9 C 9.94 8.08 8.5 10 8.5 10",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, k.jsx)("path", {
        d: "M 1 6 L 11 6",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var S = r(o());
function We(e) {
  return (0, S.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: (0, S.jsxs)("g", {
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        (0, S.jsx)("path", {
          d: "M 7 1.5 C 7 1.5 9.065 4.155 10.022 5.386 C 10.303 5.747 10.303 6.253 10.022 6.614 C 9.065 7.845 7 10.5 7 10.5",
        }),
        (0, S.jsx)("path", {
          d: "M 1.5 1.5 C 1.5 1.5 3.565 4.155 4.522 5.386 C 4.803 5.747 4.803 6.253 4.522 6.614 C 3.565 7.845 1.5 10.5 1.5 10.5",
        }),
      ],
    }),
  });
}
var Y = r(o());
function _(e) {
  return (0, Y.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: (0, Y.jsx)("path", {
      d: "M 1 3 L 11 3 M 1 9 L 11 9 M 3 1 L 3 11 M 9 1 L 9 11",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var L = r(o());
function je(e) {
  return (0, L.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    ...e,
    children: [
      (0, L.jsx)("path", {
        d: "M 5.25 0.733 C 5.714 0.465 6.286 0.465 6.75 0.733 C 7.68 1.27 9.256 2.18 10.186 2.717 C 10.65 2.985 10.936 3.48 10.936 4.016 C 10.936 5.09 10.936 6.91 10.936 7.984 C 10.936 8.52 10.65 9.015 10.186 9.283 C 9.256 9.82 7.68 10.73 6.75 11.267 C 6.286 11.535 5.714 11.535 5.25 11.267 C 4.32 10.73 2.744 9.82 1.814 9.283 C 1.35 9.015 1.064 8.52 1.064 7.984 C 1.064 6.91 1.064 5.09 1.064 4.016 C 1.064 3.48 1.35 2.985 1.814 2.717 C 2.744 2.18 4.32 1.27 5.25 0.733 Z",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, L.jsx)("path", {
        d: "M 1.5 3.25 L 6 6 L 10.5 3.25",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, L.jsx)("path", {
        d: "M 6 6 L 6 11.25",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var h = r(o());
function ze(e) {
  return (0, h.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, h.jsx)("path", {
        d: "M 3.5 1 L 8.5 1",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, h.jsx)("path", {
        d: "M 3.5 11 L 8.5 11",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, h.jsx)("path", {
        d: "M 1 3.5 L 1 8.5",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, h.jsx)("path", {
        d: "M 11 3.5 L 11 8.5",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var ee = r(o());
function re(e) {
  return (0, ee.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: (0, ee.jsx)("path", {
      d: "M 9 2 L 3 10",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var oe = r(o());
function He(e) {
  return (0, oe.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    fill: "none",
    viewBox: "0 0 12 12",
    ...e,
    children: (0, oe.jsx)("path", {
      d: "M 1.5 10.5 C 1.5 10.5 5.031 10.938 6 6 C 6.969 1.062 10.5 1.5 10.5 1.5",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var te = r(o()),
  qe =
    "M 6.645 1.504 C 6.25 0.839 5.281 0.857 4.909 1.536 C 3.738 3.673 1.646 7.495 0.612 9.383 C 0.394 9.781 0.777 10.241 1.209 10.097 C 2.618 9.627 4.861 8.88 5.684 8.605 C 5.889 8.537 6.111 8.537 6.316 8.605 C 7.126 8.875 9.312 9.604 10.725 10.075 C 11.164 10.221 11.549 9.743 11.312 9.345 C 10.176 7.435 7.906 3.622 6.645 1.504 Z",
  $e = "translate(-1.75 -1) rotate(-45 6 5.25)",
  ro = `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
	<path d="${qe}" transform="${$e}" fill="transparent" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
function Ue(e) {
  return (0, te.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    ...e,
    children: (0, te.jsx)("path", {
      d: qe,
      transform: $e,
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var T = r(o());
function Je(e) {
  return (0, T.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, T.jsx)("path", {
        d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 4.743 11 7.257 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.257 1 4.743 1 3 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, T.jsx)("path", {
        d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 3.784 11 4.5 11 4.5 L 1 4.5 C 1 4.5 1 3.784 1 3 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var D = r(o());
function H(e) {
  return (0, D.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, D.jsx)("path", {
        d: "M1 3c0-1.1.9-2 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, D.jsx)("path", {
        d: "m3.65 5.2 1.7 1.53a1 1 0 0 0 1.34 0L8.4 5.2",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var R = r(o());
function Ke(e) {
  return (0, R.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, R.jsx)("path", {
        d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 4.743 11 7.257 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.257 1 4.743 1 3 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, R.jsx)("path", {
        d: "M 1.986 7.31 C 4.396 5.623 7.604 5.623 10.014 7.31 C 10.594 7.716 11 8 11 8 C 11 8 11 8.449 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 8.449 1 8 1 8 C 1 8 1.406 7.716 1.986 7.31 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var V = r(o());
function ne(e) {
  return (0, V.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    ...e,
    children: (0, V.jsxs)("g", {
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        (0, V.jsx)("path", {
          d: "M 4 2 C 4 1.448 4.448 1 5 1 C 6.331 1 8.669 1 10 1 C 10.552 1 11 1.448 11 2 C 11 3.331 11 5.669 11 7 C 11 7.552 10.552 8 10 8 C 8.669 8 6.331 8 5 8 C 4.448 8 4 7.552 4 7 C 4 5.669 4 3.331 4 2 Z",
        }),
        (0, V.jsx)("path", {
          d: "M 7 11 C 7 11 4.745 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.255 1 5 1 5",
        }),
      ],
    }),
  });
}
var y = r(o());
function ie(e) {
  return (0, y.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    ...e,
    children: [
      (0, y.jsx)("path", {
        d: "M 2 5 C 2 5 2 5 1.999 5.001 C 0.619 6.381 0.619 8.619 1.999 9.999 C 2 10 2 10 2.001 10.001 C 3.381 11.381 5.619 11.381 6.999 10.001 C 7 10 7 10 7 10",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, y.jsx)("path", {
        d: "M 10 7 C 10 7 10 7 10.001 6.999 C 11.381 5.619 11.381 3.381 10.001 2.001 C 10 2 10 2 9.999 1.999 C 8.619 0.619 6.381 0.619 5.001 1.999 C 5 2 5 2 5 2",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, y.jsx)("path", {
        d: "M 5 7 L 7 5",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var N = r(o());
function Qe(e) {
  return (0, N.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    "aria-hidden": "true",
    ...e,
    children: [
      (0, N.jsx)("path", {
        d: "M 1.5 2.5 L 1.5 11.25",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, N.jsx)("path", {
        d: "M 1.5 2.014 C 1.5 1.69 1.652 1.386 1.911 1.192 C 1.911 1.192 1.911 1.191 1.912 1.191 C 2.859 0.481 4.156 0.459 5.126 1.139 C 5.464 1.375 5.827 1.629 6.184 1.879 C 7.523 2.816 9.343 2.657 10.499 1.501 C 10.5 1.5 10.5 1.5 10.5 1.5 L 10.5 8.5 C 10.5 8.5 10.5 8.5 10.499 8.501 C 9.361 9.639 7.549 9.739 6.292 8.734 C 6.098 8.579 5.902 8.421 5.708 8.266 C 4.451 7.261 2.639 7.361 1.501 8.499 C 1.5 8.5 1.5 8.5 1.5 8.5 C 1.5 8.5 1.5 3.629 1.5 2.014 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var se = r(o());
function Xe(e) {
  return (0, se.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    ...e,
    children: (0, se.jsx)("path", {
      d: "M 5.141 1.944 C 5.528 1.292 6.472 1.292 6.859 1.944 C 8.039 3.925 10.15 7.472 11.35 9.488 C 11.747 10.155 11.267 11 10.491 11 C 8.111 11 3.889 11 1.509 11 C 0.733 11 0.253 10.155 0.65 9.488 C 1.85 7.472 3.961 3.925 5.141 1.944 Z",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var Ye = r(nr(), 1);
function q(e) {
  return { src: (0, Ye.renderToStaticMarkup)(e), inlineSVG: !0, width: 12, height: 12 };
}
var n = r(o(), 1);
function ae(e) {
  switch (e) {
    case "string":
      return (0, n.jsx)(xe, {});
    case "richtext":
      return (0, n.jsx)(De, {});
    case "motionvalue":
    case "number":
    case "dimension":
    case "ref":
    case "scrollsectionref":
      return (0, n.jsx)(_, {});
    case "boolean":
      return (0, n.jsx)(be, {});
    case "color":
      return (0, n.jsx)(Te, {});
    case "image":
      return (0, n.jsx)(Ke, {});
    case "link":
      return (0, n.jsx)(ie, {});
    case "date":
      return (0, n.jsx)(Je, {});
    case "sharedtype":
    case "enum":
    case "controlReference":
    case "nodePropertyControlReference":
      return (0, n.jsx)(H, {});
    case "file":
      return (0, n.jsx)(Q, {});
    case "slug":
      return (0, n.jsx)(re, {});
    case "collectionreference":
      return (0, n.jsx)(Fe, {});
    case "multicollectionreference":
      return (0, n.jsx)(We, {});
    case "array":
      return (0, n.jsx)(Ee, {});
    case "object":
      return (0, n.jsx)(je, {});
    case "vectorsetitem":
      return (0, n.jsx)(Xe, {});
    case "eventhandler":
      return (0, n.jsx)(ye, {});
    case "customcursor":
    case "cursor":
      return (0, n.jsx)(Ue, {});
    case "transition":
      return (0, n.jsx)(He, {});
    case "border":
      return (0, n.jsx)(Ae, {});
    case "boxshadow":
      return (0, n.jsx)(Oe, {});
    case "gap":
      return (0, n.jsx)(Ze, {});
    case "padding":
      return (0, n.jsx)(ze, {});
    case "borderradius":
      return (0, n.jsx)(Be, {});
    case "trackingid":
      return (0, n.jsx)(_, {});
    case "location":
      return (0, n.jsx)(Qe, {});
    case "linkrelvalues":
      return (0, n.jsx)(ie, {});
    default:
      W(e, `panelIconForVariableType(), unsupported variable type: ${e}`);
  }
}
function qo(e) {
  if (e.type === "motionvalue") return ae(e.valueType);
  if (Ce(e)) return (0, n.jsx)(ne, {});
  if (ge(e)) return (0, n.jsx)(re, {});
  if (e.type === "controlReference" || e.type === "nodePropertyControlReference") {
    let { expectedType: t } = e;
    switch (t) {
      case "enum":
      case "segmentedenum":
        return (0, n.jsx)(H, {});
      case "file":
        return (0, n.jsx)(Q, {});
      default:
        W(t, `panelIconForVariable(), unsupported control reference type: ${t}`);
    }
  }
  if (e.type === "sharedtype") {
    let { kind: t } = e;
    if (t === "enum") return (0, n.jsx)(H, {});
    W(t, `panelIconForVariable(), unsupported shared type kind: ${t}`);
  }
  return ae(e.type);
}
var _e = new Map(),
  er,
  rr;
function $o(e) {
  let t = _e.get(e);
  if (t) return t;
  let i = q(ae(e));
  return (_e.set(e, i), i);
}
function Uo() {
  return ((er ??= q((0, n.jsx)(ne, {}))), er);
}
function Jo() {
  return ((rr ??= q((0, n.jsx)(Ie, {}))), rr);
}
var G = r(o());
function Qo(e) {
  return (0, G.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    ...e,
    children: [
      (0, G.jsx)("path", {
        d: "M 6 7.5 C 6.414 7.5 6.75 7.836 6.75 8.25 C 6.75 8.664 6.414 9 6 9 C 5.586 9 5.25 8.664 5.25 8.25 C 5.25 7.836 5.586 7.5 6 7.5 Z",
        fill: "currentColor",
      }),
      (0, G.jsx)("path", {
        d: "M 6 5.5 L 6 3.5",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, G.jsx)("path", {
        d: "M 0.75 5.999 C 0.75 3.1 3.1 0.75 5.999 0.75 C 6 0.75 6 0.75 6.001 0.75 C 8.9 0.75 11.25 3.1 11.25 5.999 C 11.25 6 11.25 6 11.25 6 C 11.25 8.9 8.9 11.25 6 11.25 C 6 11.25 6 11.25 5.999 11.25 C 3.1 11.25 0.75 8.9 0.75 6.001 C 0.75 6 0.75 6 0.75 5.999 Z",
        fill: "transparent",
        stroke: "currentColor",
      }),
    ],
  });
}
var le = r(o());
function Yo(e) {
  return (0, le.jsx)("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: (0, le.jsx)("path", {
      d: "M 5.036 1.497 C 5.072 0.992 5.493 0.6 5.999 0.6 C 6 0.6 6 0.6 6 0.6 C 6.507 0.6 6.928 0.992 6.964 1.497 C 6.967 1.539 6.97 1.581 6.973 1.625 C 7.103 3.447 8.553 4.897 10.375 5.027 C 10.419 5.03 10.461 5.033 10.503 5.036 C 11.008 5.072 11.4 5.493 11.4 5.999 C 11.4 6 11.4 6 11.4 6 C 11.4 6.507 11.008 6.928 10.503 6.964 C 10.461 6.967 10.419 6.97 10.375 6.973 C 8.553 7.103 7.103 8.553 6.973 10.375 C 6.97 10.419 6.967 10.461 6.964 10.503 C 6.928 11.008 6.507 11.4 6 11.4 C 6 11.4 6 11.4 5.999 11.4 C 5.493 11.4 5.072 11.008 5.036 10.503 C 5.033 10.461 5.03 10.419 5.027 10.375 C 4.897 8.553 3.447 7.103 1.625 6.973 C 1.581 6.97 1.539 6.967 1.497 6.964 C 0.992 6.928 0.6 6.507 0.6 6 C 0.6 6 0.6 6 0.6 5.999 C 0.6 5.493 0.992 5.072 1.497 5.036 C 1.539 5.033 1.581 5.03 1.624 5.027 C 3.447 4.897 4.897 3.447 5.027 1.624 C 5.03 1.581 5.033 1.539 5.036 1.497 Z",
      fill: "transparent",
      stroke: "currentColor",
      strokeWidth: "1",
    }),
  });
}
var x = r(U());
var or = r(o()),
  rt = x.default.forwardRef(
    ({ children: e, onDragEnter: t, onDragLeave: i, onDrop: a, readOnly: p, ...l }, c) => {
      let u = Ge(p),
        d = x.default.useRef(null),
        m = c || d;
      return (
        pr({ onDragEnter: t, onDragLeave: i, onDrop: a }, m, u),
        (0, or.jsx)("div", { ref: m, ...l, children: e })
      );
    }
  );
function pr(e, t, i) {
  let a = x.default.useRef(e);
  a.current = e;
  let p = x.default.useRef(0);
  x.default.useEffect(() => {
    if (i) return;
    let l = t.current;
    if (!l) return;
    function c(s) {
      !s.dataTransfer ||
        !pe(s) ||
        (s.preventDefault(), s.stopPropagation(), (s.dataTransfer.dropEffect = "copy"));
    }
    function u(s) {
      !s.dataTransfer ||
        !pe(s) ||
        ((p.current += 1),
        s.preventDefault(),
        s.stopPropagation(),
        (s.dataTransfer.dropEffect = "copy"),
        a.current.onDragEnter && a.current.onDragEnter(s));
    }
    function d(s) {
      p.current !== 0 && ((p.current = 0), a.current.onDragLeave && a.current.onDragLeave(s));
    }
    function m(s) {
      ((p.current = Math.max(0, p.current - 1)),
        p.current === 0 && a.current.onDragLeave && a.current.onDragLeave(s));
    }
    function g(s) {
      !s.dataTransfer ||
        !pe(s) ||
        (s.preventDefault(), s.stopPropagation(), d(s), a.current.onDrop(s));
    }
    return (
      l.addEventListener("dragover", c),
      l.addEventListener("dragenter", u),
      l.addEventListener("dragleave", m),
      l.addEventListener("drop", g),
      l.addEventListener("dragend", d),
      () => {
        (l.removeEventListener("dragover", c),
          l.removeEventListener("dragenter", u),
          l.removeEventListener("dragleave", m),
          l.removeEventListener("drop", g),
          l.removeEventListener("dragend", d));
      }
    );
  }, [i, t]);
}
var cr = "Files";
function pe(e) {
  return !!e.dataTransfer && e.dataTransfer.types.includes(cr);
}
var F = r(o());
function tt(e) {
  return (0, F.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    role: "presentation",
    "aria-hidden": "true",
    focusable: "false",
    ...e,
    children: [
      (0, F.jsx)("path", {
        d: "M 1.5 8.75 C 1.5 8.75 1.5 4.631 1.5 3.25 C 1.5 1.869 3.515 0.75 6 0.75 C 8.485 0.75 10.5 1.869 10.5 3.25 C 10.5 3.595 10.5 8.75 10.5 8.75 M 10.5 8.75 C 10.5 10.131 8.485 11.25 6 11.25 C 3.515 11.25 1.5 10.131 1.5 8.75",
        fill: "transparent",
        stroke: "currentColor",
      }),
      (0, F.jsx)("path", {
        d: "M 10.5 3.25 C 10.5 4.631 8.485 5.75 6 5.75 C 3.515 5.75 1.5 4.631 1.5 3.25",
        fill: "transparent",
        stroke: "currentColor",
      }),
    ],
  });
}
var A = r(o());
function it(e) {
  return (0, A.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    ...e,
    children: [
      (0, A.jsx)("path", {
        d: "M 3.5 2 C 3.5 2 2.06 3.92 1.175 5.1 C 0.775 5.633 0.775 6.367 1.175 6.9 C 2.06 8.08 3.5 10 3.5 10",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, A.jsx)("path", {
        d: "M 8.5 2 C 8.5 2 9.94 3.92 10.825 5.1 C 11.225 5.633 11.225 6.367 10.825 6.9 C 9.94 8.08 8.5 10 8.5 10",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var I = r(o());
function at(e) {
  return (0, I.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    ...e,
    children: [
      (0, I.jsx)("path", {
        d: "M 4.586 1.164 C 5.367 0.383 6.633 0.383 7.414 1.164 C 8.437 2.187 9.813 3.563 10.836 4.586 C 11.617 5.367 11.617 6.633 10.836 7.414 C 9.813 8.437 8.437 9.813 7.414 10.836 C 6.633 11.617 5.367 11.617 4.586 10.836 C 3.563 9.813 2.187 8.437 1.164 7.414 C 0.383 6.633 0.383 5.367 1.164 4.586 C 2.187 3.563 3.563 2.187 4.586 1.164 Z",
        fill: "transparent",
        stroke: "currentColor",
      }),
      (0, I.jsx)("path", { d: "M 3 3 L 9 9", fill: "transparent", stroke: "currentColor" }),
      (0, I.jsx)("path", { d: "M 9 3 L 3 9", fill: "transparent", stroke: "currentColor" }),
    ],
  });
}
var ce = r(o());
function pt(e) {
  return (0, ce.jsx)("svg", {
    ...e,
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    "aria-hidden": "true",
    children: (0, ce.jsx)("path", {
      d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 4.743 11 7.257 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.257 1 4.743 1 3 Z",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var ur = 10,
  fr = 5,
  gt = `calc(${ur}px + ${Ve.css.contentTitleIndentation} + ${fr}px)`,
  ht = "t3p7r61",
  vt = "w1ih3ztb",
  wt = "tkaasce",
  kt = "w1vx93q9",
  St = "aof63pb",
  Lt = "o1oauour";
var ue = r(o());
function yt({ strokeWidth: e = 1, ...t }) {
  return (0, ue.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "6",
    height: "6",
    viewBox: "0 0 6 6",
    fill: "none",
    "aria-hidden": "true",
    ...t,
    children: (0, ue.jsx)("path", {
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: e,
      d: "M 0.5 2 C 0.5 2 1.808 3.046 2.531 3.625 C 2.805 3.844 3.195 3.844 3.469 3.625 C 4.192 3.046 5.5 2 5.5 2",
    }),
  });
}
var B = r(o());
function xt(e) {
  return (0, B.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, B.jsx)("path", {
        d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 4.743 11 7.257 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.257 1 4.743 1 3 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, B.jsx)("path", {
        d: "M 3.5 3.5 L 3.5 8.75",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var O = r(o());
function Mt(e) {
  return (0, O.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, O.jsx)("path", {
        d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 4.743 11 7.257 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.257 1 4.743 1 3 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, O.jsx)("path", { d: "M 1.5 6 L 10.5 6", fill: "transparent", stroke: "currentColor" }),
    ],
  });
}
var Z = r(o());
function Et(e) {
  return (0, Z.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, Z.jsx)("path", {
        d: "M 1 3 C 1 1.895 1.895 1 3 1 C 4.743 1 7.257 1 9 1 C 10.104 1 11 1.896 11 3 C 11 4.743 11 7.257 11 9 C 11 10.104 10.104 11 9 11 C 7.257 11 4.743 11 3 11 C 1.895 11 1 10.105 1 9 C 1 7.257 1 4.743 1 3 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, Z.jsx)("path", { d: "M 6 1 L 6 11", fill: "transparent", stroke: "currentColor" }),
    ],
  });
}
export {
  Re as a,
  jr as b,
  gr as c,
  wr as d,
  Fe as e,
  Ee as f,
  be as g,
  Ae as h,
  Be as i,
  Oe as j,
  Te as k,
  Ze as l,
  We as m,
  _ as n,
  je as o,
  ze as p,
  re as q,
  He as r,
  ro as s,
  Ue as t,
  Je as u,
  H as v,
  Ke as w,
  ne as x,
  ie as y,
  Qe as z,
  De as A,
  Xe as B,
  q as C,
  ae as D,
  qo as E,
  $o as F,
  Uo as G,
  Jo as H,
  Mr as I,
  Pr as J,
  Er as K,
  br as L,
  Tr as M,
  ht as N,
  vt as O,
  wt as P,
  kt as Q,
  St as R,
  Lt as S,
  Qo as T,
  Yo as U,
  yt as V,
  rt as W,
  tt as X,
  it as Y,
  at as Z,
  pt as _,
  xt as $,
  Mt as aa,
  Et as ba,
};
//# sourceMappingURL=chunk-S2H445CC.mjs.map
