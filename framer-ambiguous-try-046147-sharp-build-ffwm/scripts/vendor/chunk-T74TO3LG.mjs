import { a as Y } from "chunk-JHU5KKUH.mjs";
import { a as J } from "chunk-VD6KMVU6.mjs";
import { b as B } from "chunk-QTLVX45S.mjs";
import { a as X } from "chunk-QFU6OGL3.mjs";
import { a as x } from "chunk-2FCXHKEL.mjs";
import { r as Z } from "chunk-ARJ7WQTJ.mjs";
import { a as q } from "chunk-SWYZG2NI.mjs";
import { e as v } from "chunk-WLHSDIGQ.mjs";
var u = v(q());
var P = v(q());
var Q = v(x()),
  I = P.default.createContext({ smallNudgeIncrement: 1, largeNudgeIncrement: 10 });
I.displayName = "FrescoSettingsContext";
var de = P.default.memo(function ({
  children: f,
  smallNudgeIncrement: o = 1,
  largeNudgeIncrement: t = 10,
  beginUndoGroup: n,
  endUndoGroup: s,
  mouseTrackerWillStart: m,
  mouseTrackerDidEnd: c,
}) {
  let [E, i] = P.default.useState({
    smallNudgeIncrement: o,
    largeNudgeIncrement: t,
    beginUndoGroup: n,
    endUndoGroup: s,
    mouseTrackerWillStart: m,
    mouseTrackerDidEnd: c,
  });
  return (
    P.default.useEffect(() => {
      i({
        smallNudgeIncrement: o,
        largeNudgeIncrement: t,
        beginUndoGroup: n,
        endUndoGroup: s,
        mouseTrackerWillStart: m,
        mouseTrackerDidEnd: c,
      });
    }, [n, s, m, c, o, t]),
    (0, Q.jsx)(I.Provider, { value: E, children: f })
  );
});
var V = "m1hscir8",
  _ = "m1qod7cs",
  $ = "m9s9u3y";
var O = v(x()),
  U = u.default.forwardRef(function (f, o) {
    let {
        onDrag: t,
        onDragStart: n,
        onDragEnd: s,
        children: m,
        className: c,
        cursor: E,
        enabled: i = !0,
        ...D
      } = f,
      l = u.default.useRef(null),
      y = J(l, o),
      R = { onDrag: t, onDragEnd: s, onDragStart: n },
      L = u.default.useRef(R);
    L.current = R;
    let k = u.default.useRef(!1),
      b = u.default.useRef(null),
      [p, T] = u.default.useState(null),
      C = u.default.useRef(),
      a = u.default.useContext(I),
      [, te] = u.default.useState(0),
      H = u.default.useCallback(
        (d) => {
          if (!Y.isOnlyLeftMouseClick(d) || !i) return;
          k.current = !1;
          let g = { x: d.clientX, y: d.clientY },
            h = j(d.nativeEvent, l, g);
          ((b.current = h),
            !(!g || !h) &&
              (a.mouseTrackerWillStart && a.mouseTrackerWillStart(), n && n(h), t(h), T(g)));
        },
        [a, n, t, i]
      );
    u.default.useLayoutEffect(() => {
      if (!p) return;
      if (!i) {
        T(null);
        return;
      }
      let d = !1,
        g = () => {
          ((d = !0), T(null));
        },
        h = (r) => {
          r.key === "Escape" && g();
        },
        S = (r) => {
          if ((r.key !== "Shift" && r.key !== "Alt") || !k.current) return;
          let M = b.current;
          if (!M) return;
          let K = { ...M, shiftKey: r.shiftKey, altKey: r.altKey };
          ((b.current = K), L.current.onDrag(K));
        },
        N = (r) => {
          let M = j(r, l, p);
          if ((r.preventDefault(), !M)) {
            T(null);
            return;
          }
          if (!k.current) {
            let K = Math.abs(M.offset.x) > 1 || Math.abs(M.offset.y) > 1;
            ((k.current = K), te((re) => re + 1));
          }
          ((b.current = M), L.current.onDrag(M));
        },
        A = C.current,
        W = (r) => {
          r.pointerType === "mouse" || r.pointerId !== A || N(r);
        },
        F = (r) => {
          r.pointerType === "mouse" || r.pointerId !== A || g();
        };
      return (
        window.addEventListener("mousemove", N),
        window.addEventListener("mouseup", g, !0),
        window.addEventListener("pointermove", W),
        window.addEventListener("pointerup", F, !0),
        window.addEventListener("pointercancel", F),
        window.addEventListener("contextmenu", g),
        window.addEventListener("keydown", h),
        window.addEventListener("keyup", h),
        window.addEventListener("keydown", S),
        window.addEventListener("keyup", S),
        () => {
          (window.removeEventListener("mousemove", N),
            window.removeEventListener("mouseup", g, !0),
            window.removeEventListener("pointermove", W),
            window.removeEventListener("pointerup", F, !0),
            window.removeEventListener("pointercancel", F),
            window.removeEventListener("contextmenu", g),
            window.removeEventListener("keydown", h),
            window.removeEventListener("keyup", h),
            window.removeEventListener("keydown", S),
            window.removeEventListener("keyup", S));
          let r = b.current;
          (d
            ? (L.current.onDragEnd?.(r), a.mouseTrackerDidEnd?.())
            : queueMicrotask(() => {
                (L.current.onDragEnd?.(r), a.mouseTrackerDidEnd?.());
              }),
            (b.current = null),
            (k.current = !1));
        }
      );
    }, [p, a, i]);
    let ne = u.default.useCallback(
      (d) => {
        d.pointerType === "mouse" || p || (d.preventDefault(), (C.current = d.pointerId), H(d));
      },
      [H, p]
    );
    return (0, O.jsxs)("div", {
      ref: y,
      draggable: !1,
      className: X(c, _, i && $),
      ...D,
      onMouseDown: H,
      onPointerDown: ne,
      children: [
        m,
        p && k.current && (0, O.jsx)("div", { style: E ? { cursor: E } : void 0, className: V }),
      ],
    });
  });
function j(e, f, o) {
  let t = f.current;
  if (!t) return null;
  let { clientX: n, clientY: s } = e,
    m = { x: n, y: s },
    c = { x: n - o.x, y: s - o.y },
    E = t.getBoundingClientRect(),
    i = n - E.left,
    D = s - E.top,
    l = t.clientWidth || 1,
    y = t.clientHeight || 1;
  ((i = Math.max(0, Math.min(i, l))), (D = Math.max(0, Math.min(D, y))));
  let R = { x: i / l, y: D / y };
  return { client: m, offset: c, progress: R, shiftKey: e.shiftKey, altKey: e.altKey };
}
var w = v(q(), 1);
var ee = v(x(), 1),
  G = "resize-zone",
  Me = w.default.memo(
    ({
      side: e,
      minSize: f,
      defaultSize: o,
      maxSize: t,
      getSize: n,
      setSize: s,
      onResizeStart: m,
      onResizeEnd: c,
    }) => {
      let E = B("paneEdgeDoubleClickReset"),
        [i, D] = w.default.useState("ew-resize"),
        l = w.default.useCallback(
          (p) => {
            let T = Z(t) ? t() : t,
              C = ae(p, f, T, e);
            D((a) => (a === C ? a : C));
          },
          [f, t, e]
        );
      w.default.useEffect(() => {
        requestAnimationFrame(() => {
          l(n());
        });
      }, []);
      let y = w.default.useRef(),
        R = w.default.useCallback(() => {
          ((y.current = n()), m && m());
        }, [n, m]),
        L = w.default.useCallback(
          (p) => {
            if (y.current === void 0) return;
            let T = e === "left" ? -1 : 1,
              C = e === "top" ? p.offset.y : p.offset.x,
              a = y.current + C * T;
            (Math.abs(a - o) < 10 && (a = o), s(a), l(n()));
          },
          [e, o, s, l, n]
        ),
        k = w.default.useCallback(() => {
          ((y.current = void 0), c && c());
        }, [c]),
        b = w.default.useCallback(() => {
          (s(o), l(n()), c?.());
        }, [o, s, l, n, c]);
      return (0, ee.jsx)(U, {
        onDragStart: R,
        onDrag: L,
        onDragEnd: k,
        onDoubleClick: E ? b : void 0,
        cursor: i,
        className: G,
        style: {
          cursor: i,
          position: "absolute",
          top: se(e),
          bottom: 0,
          right: ce(e),
          left: ie(e),
          width: e === "top" ? void 0 : 6,
          height: e === "top" ? 6 : void 0,
          zIndex: 27,
          transform: "translate3d(0, 0, 0)",
          opacity: 0.5,
        },
      });
    }
  );
function se(e) {
  return e === "top" ? -3 : 0;
}
function ie(e) {
  switch (e) {
    case "left":
      return -3;
    case "top":
      return 0;
  }
}
function ce(e) {
  switch (e) {
    case "right":
      return -3;
    case "top":
      return 0;
  }
}
function xe(e) {
  return e instanceof HTMLDivElement && e.classList.contains(G);
}
function ae(e, f, o, t) {
  if (t === "top")
    switch (e) {
      case f:
        return "s-resize";
      case o:
        return "n-resize";
      default:
        return "ns-resize";
    }
  switch (e) {
    case f:
      return t === "right" ? "e-resize" : "w-resize";
    case o:
      return t === "right" ? "w-resize" : "e-resize";
    default:
      return "ew-resize";
  }
}
var z = v(x());
function Le() {
  return (0, z.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "10",
    fill: "none",
    role: "presentation",
    children: (0, z.jsx)("path", {
      d: "m6.75 1.5-2.793 2.793a1 1 0 0 0 0 1.414L6.75 8.5",
      fill: "transparent",
      strokeWidth: "1",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
export { Le as a, I as b, de as c, U as d, Me as e, xe as f };
//# sourceMappingURL=chunk-T74TO3LG.mjs.map
