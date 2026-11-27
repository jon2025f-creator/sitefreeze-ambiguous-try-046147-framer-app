import { d as A, e as R, f as pe, i as ue, j as M, m as fe } from "chunk-EGLN23RY.mjs";
import { a as me } from "chunk-OG42JQ3L.mjs";
import { a as le } from "chunk-LBJXR2KQ.mjs";
import { Oe as ie, Pe as se, ia as ne } from "chunk-AYKOIAZZ.mjs";
import { a as je } from "chunk-FJLPC3KG.mjs";
import { o as oe, p as re, s as te } from "chunk-UCA6DIRC.mjs";
import { _k as ee } from "chunk-RE42INF2.mjs";
import { Rk as Y, Zo as _, kb as N, vb as X } from "chunk-3GNDJY2L.mjs";
import { d as de } from "chunk-KWO2CDCY.mjs";
import { b as ce } from "chunk-R3ILDE7C.mjs";
import { a as F } from "chunk-5J75RUHV.mjs";
import { a as ae } from "chunk-R23XQVNE.mjs";
import { w as G } from "chunk-XWVB37KR.mjs";
import { c as b } from "chunk-PWPT6KBA.mjs";
import { a as E } from "chunk-YVT73FKN.mjs";
import { a as r } from "chunk-2FCXHKEL.mjs";
import { a as Q } from "chunk-SWYZG2NI.mjs";
import { c as x } from "chunk-4JY5UMT2.mjs";
import { e as o } from "chunk-WLHSDIGQ.mjs";
var p = o(Q(), 1);
var Ce = Symbol("uninitialized");
function De(e) {
  return e + 1;
}
function Xe(e, t, i, s) {
  let a = b(),
    [, l] = (0, p.useReducer)(De, 0),
    c = (0, p.useRef)(Ce);
  c.current === Ce && (c.current = t());
  let m = (0, p.useRef)(t);
  m.current = t;
  let U = (0, p.useRef)(i);
  if (!G(i, U.current)) {
    U.current = i;
    let L = c.current,
      w = m.current();
    (s ? !E(L, w) : !G(L, w)) && (c.current = w);
  }
  let J = Array.isArray(e) ? e : [e];
  return (
    (0, p.useEffect)(() => {
      let L = () => {
          let K = c.current,
            P = m.current();
          (s ? E(K, P) : G(K, P)) || ((c.current = P), l());
        },
        w = [...J, L],
        ze = a.scheduler.changes.observe(...w);
      return () => a.scheduler.changes.removeObserver(ze);
    }, J),
    c.current
  );
}
var he = o(Q(), 1);
function eo(e, t) {
  let i = b();
  return (0, he.useCallback)(i.scheduler.wrapHandler(e), t);
}
var W = o(r());
function ge(e) {
  return (0, W.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: (0, W.jsx)("path", {
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M9.182 9.932a4.5 4.5 0 0 1-6.364-6.364l2.475-2.475a1 1 0 0 1 1.414 0l2.475 2.475a4.5 4.5 0 0 1 0 6.364",
    }),
  });
}
var so = "p1oxlfbn",
  ao = "s1xpzgm5",
  lo = "p1chribc",
  co = "w18hzogu",
  po = "w1ar1ui";
var v = o(r());
function we(e) {
  return (0, v.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, v.jsx)("path", {
        d: "M 0.5 5.999 C 0.5 4.067 2.067 2.5 3.999 2.5 C 5.277 2.5 6.722 2.5 8 2.5 C 9.933 2.5 11.5 4.067 11.5 6 C 11.5 6 11.5 6 11.5 6.001 C 11.5 7.933 9.933 9.5 8.001 9.5 C 6.723 9.5 5.278 9.5 4 9.5 C 2.067 9.5 0.5 7.933 0.5 6 C 0.5 6 0.5 6 0.5 5.999 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, v.jsx)("path", {
        d: "M 8 4.5 C 8.828 4.5 9.5 5.172 9.5 6 C 9.5 6.828 8.828 7.5 8 7.5 C 7.172 7.5 6.5 6.828 6.5 6 C 6.5 5.172 7.172 4.5 8 4.5 Z",
        fill: "currentColor",
      }),
    ],
  });
}
var f = o(r());
function ve(e) {
  return (0, f.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, f.jsx)("path", {
        d: "M 1 2 L 11 2",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: "10",
      }),
      (0, f.jsx)("path", {
        d: "M 1 6 L 7 6",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: "10",
      }),
      (0, f.jsx)("path", {
        d: "M 1 10 L 4 10",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeMiterlimit: "10",
      }),
    ],
  });
}
var k = o(r());
function ke(e) {
  return (0, k.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    "aria-hidden": "true",
    ...e,
    children: [
      (0, k.jsx)("path", {
        d: "M 1.5 2.5 L 1.5 11.25",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, k.jsx)("path", {
        d: "M 1.5 2.014 C 1.5 1.69 1.652 1.386 1.911 1.192 C 1.911 1.192 1.911 1.191 1.912 1.191 C 2.859 0.481 4.156 0.459 5.126 1.139 C 5.464 1.375 5.827 1.629 6.184 1.879 C 7.523 2.816 9.343 2.657 10.499 1.501 C 10.5 1.5 10.5 1.5 10.5 1.5 L 10.5 8.5 C 10.5 8.5 10.5 8.5 10.499 8.501 C 9.361 9.639 7.549 9.739 6.292 8.734 C 6.098 8.579 5.902 8.421 5.708 8.266 C 4.451 7.261 2.639 7.361 1.501 8.499 C 1.5 8.5 1.5 8.5 1.5 8.5 C 1.5 8.5 1.5 3.629 1.5 2.014 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var B = o(r()),
  Se =
    "M 6.645 1.504 C 6.25 0.839 5.281 0.857 4.909 1.536 C 3.738 3.673 1.646 7.495 0.612 9.383 C 0.394 9.781 0.777 10.241 1.209 10.097 C 2.618 9.627 4.861 8.88 5.684 8.605 C 5.889 8.537 6.111 8.537 6.316 8.605 C 7.126 8.875 9.312 9.604 10.725 10.075 C 11.164 10.221 11.549 9.743 11.312 9.345 C 10.176 7.435 7.906 3.622 6.645 1.504 Z",
  ye = "translate(-1.75 -1) rotate(-45 6 5.25)",
  ho = `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none">
	<path d="${Se}" transform="${ye}" fill="transparent" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
function Ve(e) {
  return (0, B.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    ...e,
    children: (0, B.jsx)("path", {
      d: Se,
      transform: ye,
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var O = o(r());
function z(e) {
  return (0, O.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: (0, O.jsx)("path", {
      d: "M 1 3 L 11 3 M 1 9 L 11 9 M 3 1 L 3 11 M 9 1 L 9 11",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var j = o(r());
function vo(e) {
  return (0, j.jsx)("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: (0, j.jsx)("path", {
      d: "M 5.036 1.497 C 5.072 0.992 5.493 0.6 5.999 0.6 C 6 0.6 6 0.6 6 0.6 C 6.507 0.6 6.928 0.992 6.964 1.497 C 6.967 1.539 6.97 1.581 6.973 1.625 C 7.103 3.447 8.553 4.897 10.375 5.027 C 10.419 5.03 10.461 5.033 10.503 5.036 C 11.008 5.072 11.4 5.493 11.4 5.999 C 11.4 6 11.4 6 11.4 6 C 11.4 6.507 11.008 6.928 10.503 6.964 C 10.461 6.967 10.419 6.97 10.375 6.973 C 8.553 7.103 7.103 8.553 6.973 10.375 C 6.97 10.419 6.967 10.461 6.964 10.503 C 6.928 11.008 6.507 11.4 6 11.4 C 6 11.4 6 11.4 5.999 11.4 C 5.493 11.4 5.072 11.008 5.036 10.503 C 5.033 10.461 5.03 10.419 5.027 10.375 C 4.897 8.553 3.447 7.103 1.625 6.973 C 1.581 6.97 1.539 6.967 1.497 6.964 C 0.992 6.928 0.6 6.507 0.6 6 C 0.6 6 0.6 6 0.6 5.999 C 0.6 5.493 0.992 5.072 1.497 5.036 C 1.539 5.033 1.581 5.03 1.624 5.027 C 3.447 4.897 4.897 3.447 5.027 1.624 C 5.03 1.581 5.033 1.539 5.036 1.497 Z",
      fill: "transparent",
      stroke: "currentColor",
      strokeWidth: "1",
    }),
  });
}
function Le(e, t, i) {
  let s = ne(t, i);
  (e.stores.analyticsStore.addFilter("collectionItemId", i.id, s), e.stores.analyticsStore.open());
}
function Ie(e, t) {
  let i = qe(e, t);
  if (i) return Le(e, i.collection, i.collectionItem);
  let s = oe(e.tree, t),
    a = re(e.tree, t);
  if (!s || !a) return;
  let l = te(s);
  (s !== "/" && e.stores.analyticsStore.addFilter("routePath", a, l),
    e.stores.analyticsStore.open());
}
function qe(e, t) {
  if (!t.dataIdentifier) return null;
  let i = Y(e.tree, t.dataIdentifier);
  if (!i) return null;
  let s = e.stores.scopeStore.getSelectedCollectionItemForWebPage(t);
  if (s) {
    let l = e.tree.getNodeWithTrait(s, X);
    return l ? { collection: i, collectionItem: l } : null;
  }
  let a = i.getUnsortedChildren()[0];
  return a ? { collection: i, collectionItem: a } : null;
}
function Mo(e) {
  e.stores.chromeStore.mainView === 5 && e.stores.chromeStore.setLocalizationsVisible(!1);
  let t = Ze(e);
  if (t) return Le(e, t.collection, t.collectionItem);
  let i = $e(e);
  if (i) return (e.stores.siteSettingsStore.close(), Ie(e, i));
  if (e.stores.siteSettingsStore.isOpen) {
    (e.stores.siteSettingsStore.close(), e.stores.analyticsStore.open());
    return;
  }
  let s = e.stores.scopeStore.active;
  if (!N(s)) {
    e.stores.analyticsStore.open();
    return;
  }
  Ie(e, s);
}
function Ze(e) {
  let { treeStore: t, chromeStore: i } = e.stores,
    { mainView: s, contentManagementOverlayStack: a } = i,
    l = a.at(-1);
  if (s === 2 && l) {
    let c = ie({ stackElement: l, tree: e.tree }),
      m = se({ treeStore: t, stackElement: l });
    return !c || !m ? void 0 : { collection: c, collectionItem: m };
  }
}
function $e(e) {
  if (e.stores.siteSettingsStore.isOpen && e.stores.siteSettingsStore.active?.tab === "page") {
    let t = e.stores.siteSettingsStore.active.id;
    return e.tree.getNodeWithTrait(t, N);
  }
  return null;
}
var d = o(r());
function xe(e) {
  return (0, d.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: (0, d.jsxs)("g", {
      transform: "translate(1 1.5)",
      children: [
        (0, d.jsx)("path", {
          d: "M 7 1.5 C 7 1.5 8.93 3.706 9.924 4.841 C 10.254 5.219 10.254 5.781 9.924 6.159 C 8.93 7.294 7 9.5 7 9.5",
          fill: "transparent",
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        (0, d.jsx)("path", {
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
var S = o(r());
function be(e) {
  return (0, S.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    fill: "none",
    viewBox: "0 0 12 12",
    ...e,
    children: [
      (0, S.jsx)("path", {
        d: "M 1 6 C 1 6 1 4.392 1 3 C 1 1.895 1.895 1 3 1 C 4.392 1 6 1 6 1",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, S.jsx)("path", {
        d: "M 11 6 C 11 6 11 7.608 11 9 C 11 10.104 10.104 11 9 11 C 7.608 11 6 11 6 11",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var y = o(r());
function Ge(e) {
  return (0, y.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, y.jsx)("path", {
        d: "M 1 1 C 1 1 2.874 1 5 1 C 8.313 1 11 3.687 11 7 C 11 9.126 11 11 11 11",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, y.jsx)("path", {
        d: "M 1 6 C 1 6 3.541 6 5 6 C 5.552 6 6 6.448 6 7 C 6 8.459 6 11 6 11",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var V = o(r());
function Me(e) {
  return (0, V.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, V.jsx)("path", {
        d: "M 6 0.5 C 8.209 0.5 10 2.291 10 4.5 C 10 6.709 8.209 8.5 6 8.5 C 3.791 8.5 2 6.709 2 4.5 C 2 2.291 3.791 0.5 6 0.5 Z",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, V.jsx)("path", {
        d: "M 9.914 10.305 C 9.541 10.556 9.143 10.773 8.725 10.95 C 7.887 11.304 6.966 11.5 6 11.5 C 5.034 11.5 4.113 11.304 3.275 10.95 C 2.857 10.773 2.459 10.556 2.086 10.305",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var C = o(r());
function Te(e) {
  return (0, C.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, C.jsx)("path", {
        d: "M 3.5 2 C 3.5 2 2.06 3.92 1.175 5.1 C 0.775 5.633 0.775 6.367 1.175 6.9 C 2.06 8.08 3.5 10 3.5 10",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, C.jsx)("path", {
        d: "M 8.5 2 C 8.5 2 9.94 3.92 10.825 5.1 C 11.225 5.633 11.225 6.367 10.825 6.9 C 9.94 8.08 8.5 10 8.5 10",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, C.jsx)("path", {
        d: "M 1 6 L 11 6",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var h = o(r());
function Pe(e) {
  return (0, h.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: (0, h.jsxs)("g", {
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        (0, h.jsx)("path", {
          d: "M 7 1.5 C 7 1.5 9.065 4.155 10.022 5.386 C 10.303 5.747 10.303 6.253 10.022 6.614 C 9.065 7.845 7 10.5 7 10.5",
        }),
        (0, h.jsx)("path", {
          d: "M 1.5 1.5 C 1.5 1.5 3.565 4.155 4.522 5.386 C 4.803 5.747 4.803 6.253 4.522 6.614 C 3.565 7.845 1.5 10.5 1.5 10.5",
        }),
      ],
    }),
  });
}
var g = o(r());
function Ee(e) {
  return (0, g.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "none",
    ...e,
    children: [
      (0, g.jsx)("path", {
        d: "M 5.25 0.733 C 5.714 0.465 6.286 0.465 6.75 0.733 C 7.68 1.27 9.256 2.18 10.186 2.717 C 10.65 2.985 10.936 3.48 10.936 4.016 C 10.936 5.09 10.936 6.91 10.936 7.984 C 10.936 8.52 10.65 9.015 10.186 9.283 C 9.256 9.82 7.68 10.73 6.75 11.267 C 6.286 11.535 5.714 11.535 5.25 11.267 C 4.32 10.73 2.744 9.82 1.814 9.283 C 1.35 9.015 1.064 8.52 1.064 7.984 C 1.064 6.91 1.064 5.09 1.064 4.016 C 1.064 3.48 1.35 2.985 1.814 2.717 C 2.744 2.18 4.32 1.27 5.25 0.733 Z",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, g.jsx)("path", {
        d: "M 1.5 3.25 L 6 6 L 10.5 3.25",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, g.jsx)("path", {
        d: "M 6 6 L 6 11.25",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var u = o(r());
function Ne(e) {
  return (0, u.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: [
      (0, u.jsx)("path", {
        d: "M 3.5 1 L 8.5 1",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, u.jsx)("path", {
        d: "M 3.5 11 L 8.5 11",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, u.jsx)("path", {
        d: "M 1 3.5 L 1 8.5",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, u.jsx)("path", {
        d: "M 11 3.5 L 11 8.5",
        fill: "transparent",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var D = o(r());
function q(e) {
  return (0, D.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    ...e,
    children: (0, D.jsx)("path", {
      d: "M 9 2 L 3 10",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var Z = o(r());
function Ae(e) {
  return (0, Z.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    fill: "none",
    viewBox: "0 0 12 12",
    ...e,
    children: (0, Z.jsx)("path", {
      d: "M 1.5 10.5 C 1.5 10.5 5.031 10.938 6 6 C 6.969 1.062 10.5 1.5 10.5 1.5",
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
var I = o(r());
function Re(e) {
  return (0, I.jsxs)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    fill: "none",
    "aria-hidden": "true",
    focusable: "false",
    ...e,
    children: [
      (0, I.jsx)("path", {
        d: "M 4.435 0.764 C 4.243 0.427 3.757 0.427 3.565 0.764 C 2.861 2.002 1.466 4.453 0.645 5.896 C 0.419 6.294 0.803 6.763 1.238 6.618 C 2.19 6.3 3.412 5.893 3.842 5.75 C 3.945 5.715 4.055 5.715 4.158 5.75 C 4.588 5.893 5.81 6.3 6.762 6.618 C 7.197 6.763 7.581 6.295 7.355 5.896 C 6.534 4.454 5.139 2.002 4.435 0.764 Z",
        transform: "translate(3 3.5) rotate(-45 4 3.5)",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
      (0, I.jsx)("path", {
        d: "M 3 9.5 H 2.5 A 2 2 0 0 1 0.5 7.5 V 2.5 A 2 2 0 0 1 2.5 0.5 H 7.5 A 2 2 0 0 1 9.5 2.5 V 3",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }),
    ],
  });
}
var Fe = o(je(), 1);
function T(e) {
  return { src: (0, Fe.renderToStaticMarkup)(e), inlineSVG: !0, width: 12, height: 12 };
}
var n = o(r(), 1);
function $(e) {
  switch (e) {
    case "string":
      return (0, n.jsx)(ce, {});
    case "richtext":
      return (0, n.jsx)(ve, {});
    case "motionvalue":
    case "number":
    case "dimension":
    case "scrollsectionref":
      return (0, n.jsx)(z, {});
    case "boolean":
      return (0, n.jsx)(we, {});
    case "color":
      return (0, n.jsx)(ge, {});
    case "image":
      return (0, n.jsx)(me, {});
    case "link":
      return (0, n.jsx)(R, {});
    case "date":
      return (0, n.jsx)(ue, {});
    case "sharedtype":
    case "enum":
    case "controlReference":
    case "nodePropertyControlReference":
      return (0, n.jsx)(M, {});
    case "file":
      return (0, n.jsx)(F, {});
    case "slug":
      return (0, n.jsx)(q, {});
    case "collectionreference":
      return (0, n.jsx)(xe, {});
    case "multicollectionreference":
      return (0, n.jsx)(Pe, {});
    case "array":
      return (0, n.jsx)(fe, {});
    case "object":
      return (0, n.jsx)(Ee, {});
    case "vectorsetitem":
      return (0, n.jsx)(pe, {});
    case "eventhandler":
      return (0, n.jsx)(le, {});
    case "customcursor":
    case "cursor":
      return (0, n.jsx)(Ve, {});
    case "ref":
      return (0, n.jsx)(Re, {});
    case "transition":
      return (0, n.jsx)(Ae, {});
    case "border":
      return (0, n.jsx)(be, {});
    case "boxshadow":
      return (0, n.jsx)(Me, {});
    case "gap":
      return (0, n.jsx)(Te, {});
    case "padding":
      return (0, n.jsx)(Ne, {});
    case "borderradius":
      return (0, n.jsx)(Ge, {});
    case "trackingid":
      return (0, n.jsx)(z, {});
    case "location":
      return (0, n.jsx)(ke, {});
    case "linkrelvalues":
      return (0, n.jsx)(R, {});
    default:
      x(e, `panelIconForVariableType(), unsupported variable type: ${e}`);
  }
}
function Vr(e) {
  if (e.type === "motionvalue") return $(e.valueType);
  if (_(e)) return (0, n.jsx)(A, {});
  if (ee(e)) return (0, n.jsx)(q, {});
  if (e.type === "controlReference" || e.type === "nodePropertyControlReference") {
    let { expectedType: t } = e;
    switch (t) {
      case "enum":
      case "segmentedenum":
        return (0, n.jsx)(M, {});
      case "file":
        return (0, n.jsx)(F, {});
      default:
        x(t, `panelIconForVariable(), unsupported control reference type: ${t}`);
    }
  }
  if (e.type === "sharedtype") {
    let { kind: t } = e;
    if (t === "enum") return (0, n.jsx)(M, {});
    x(t, `panelIconForVariable(), unsupported shared type kind: ${t}`);
  }
  return $(e.type);
}
var We = new Map(),
  Be,
  Oe;
function Ir(e) {
  let t = We.get(e);
  if (t) return t;
  let i = T($(e));
  return (We.set(e, i), i);
}
function Lr() {
  return ((Be ??= T((0, n.jsx)(A, {}))), Be);
}
function xr() {
  return ((Oe ??= T((0, n.jsx)(de, {}))), Oe);
}
var He = 10,
  Ue = 5,
  Nr = `calc(${He}px + ${ae.css.contentTitleIndentation} + ${Ue}px)`,
  Ar = "t3p7r61",
  Rr = "w1ih3ztb",
  Fr = "tkaasce",
  Wr = "w1vx93q9",
  Br = "aof63pb",
  Or = "o1oauour";
var H = o(r());
function jr({ strokeWidth: e = 1, ...t }) {
  return (0, H.jsx)("svg", {
    role: "presentation",
    xmlns: "http://www.w3.org/2000/svg",
    width: "6",
    height: "6",
    viewBox: "0 0 6 6",
    fill: "none",
    "aria-hidden": "true",
    ...t,
    children: (0, H.jsx)("path", {
      fill: "transparent",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: e,
      d: "M 0.5 2 C 0.5 2 1.808 3.046 2.531 3.625 C 2.805 3.844 3.195 3.844 3.469 3.625 C 4.192 3.046 5.5 2 5.5 2",
    }),
  });
}
export {
  eo as a,
  ge as b,
  ke as c,
  so as d,
  ao as e,
  lo as f,
  co as g,
  po as h,
  Ar as i,
  Rr as j,
  Fr as k,
  Wr as l,
  Br as m,
  Or as n,
  T as o,
  ho as p,
  Ve as q,
  z as r,
  vo as s,
  jr as t,
  Xe as u,
  Ie as v,
  Mo as w,
  xe as x,
  we as y,
  be as z,
  Ge as A,
  Me as B,
  Te as C,
  Pe as D,
  Ee as E,
  Ne as F,
  q as G,
  Ae as H,
  Re as I,
  ve as J,
  $ as K,
  Vr as L,
  Ir as M,
  Lr as N,
  xr as O,
};
//# sourceMappingURL=chunk-FL6VGE4G.mjs.map
