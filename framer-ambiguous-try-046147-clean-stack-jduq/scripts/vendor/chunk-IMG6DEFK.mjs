import { a as i } from "chunk-2FCXHKEL.mjs";
import { a as H } from "chunk-SWYZG2NI.mjs";
import { e as l } from "chunk-WLHSDIGQ.mjs";
var o = l(H(), 1),
  s = l(i(), 1),
  d = (0, o.createContext)(!1);
function m({ children: e, enabled: n }) {
  return (0, s.jsx)(d.Provider, { value: n, children: e });
}
function b({ children: e }) {
  return (0, s.jsx)(m, { enabled: !1, children: e });
}
function p() {
  return (0, o.useContext)(d);
}
function M(e) {
  return e === 0;
}
function R(e, n) {
  return function (t) {
    return M(t.button) ? e?.(t) : n?.(t);
  };
}
function T(e, n = !1) {
  return function (t) {
    if (t.isTrusted && !(t.detail === 0)) {
      (typeof n == "function" ? n(t) : n) && t.preventDefault();
      return;
    }
    return e?.(t);
  };
}
function L(e, n, u) {
  let t = p(),
    a = (0, o.useRef)(!1);
  return (0, o.useMemo)(() => {
    let f = R(e, n),
      c = T(e, u);
    return t
      ? n && !e
        ? { onMouseDown: n, onClick: c }
        : {
            onMouseDown: (r) => {
              let E = f(r);
              return ((a.current = M(r.button) && r.isPropagationStopped()), E);
            },
            onClick: (r) => (
              a.current && r.isTrusted && r.detail !== 0 && r.stopPropagation(),
              (a.current = !1),
              c(r)
            ),
          }
      : { onMouseDown: n, onClick: e };
  }, [e, n, t, u]);
}
export { m as a, b, p as c, M as d, T as e, L as f };
//# sourceMappingURL=chunk-IMG6DEFK.mjs.map
