import { a } from "chunk-2FCXHKEL.mjs";
import { a as c } from "chunk-SWYZG2NI.mjs";
import { e as u } from "chunk-WLHSDIGQ.mjs";
var o = u(c(), 1),
  l = u(a(), 1),
  s = (0, o.createContext)(!1);
function i({ children: e, enabled: t }) {
  return (0, l.jsx)(s.Provider, { value: t, children: e });
}
function m({ children: e }) {
  return (0, l.jsx)(i, { enabled: !1, children: e });
}
function M() {
  return (0, o.useContext)(s);
}
function d(e) {
  return e === 0;
}
function f(e, t) {
  return function (n) {
    return d(n.button) ? e?.(n) : t?.(n);
  };
}
function H(e, t = !1) {
  return function (n) {
    if (n.isTrusted && !(n.detail === 0)) {
      (typeof t == "function" ? t(n) : t) && n.preventDefault();
      return;
    }
    return e?.(n);
  };
}
function b(e, t, r) {
  let n = M();
  return (0, o.useMemo)(
    () => ({ onMouseDown: (t && !e) || !n ? t : f(e, t), onClick: n ? H(e, r) : e }),
    [e, t, n, r]
  );
}
export { i as a, m as b, M as c, d, H as e, b as f };
//# sourceMappingURL=chunk-7ROE5JUC.mjs.map
