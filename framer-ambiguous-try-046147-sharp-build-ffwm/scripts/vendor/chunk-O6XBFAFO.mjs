import {
  a as ee,
  b as te,
  c as re,
  d as B,
  e as ne,
  f as oe,
  g as ae,
  i as ie,
} from "chunk-IEUK3IX7.mjs";
import { a as Q } from "chunk-JHU5KKUH.mjs";
import { a as O } from "chunk-OGQCKB6U.mjs";
import { a as J } from "chunk-XNIFBQQE.mjs";
import { a as Z } from "chunk-ISW56VHA.mjs";
import { a as he } from "chunk-J3A5W6BK.mjs";
import { a as z } from "chunk-2FCXHKEL.mjs";
import { a as G } from "chunk-SWYZG2NI.mjs";
import { H as k } from "chunk-L5AQ4LH7.mjs";
import { e as H } from "chunk-WLHSDIGQ.mjs";
var le = H(G());
function Pe({ children: e }) {
  return e;
}
var F = le.default.createContext(Pe);
F.displayName = "DragPreviewProvidersContext";
var L;
((d) => {
  function e({ x: n, y: o }, { x: a, y: m }) {
    let r = Math.abs(n - a),
      E = Math.abs(o - m);
    return Math.sqrt(r * r + E * E);
  }
  d.distance = e;
  function t({ x: n, y: o }, { x: a, y: m }) {
    return { x: a - n, y: m - o };
  }
  d.delta = t;
  function l({ x: n, y: o }, { x: a, y: m }) {
    return { x: n + a, y: o + m };
  }
  d.add = l;
})((L ||= {}));
var we = "data-is-sortable-item";
function se(e) {
  return e instanceof HTMLDivElement && e.hasAttribute(we);
}
var v = H(G()),
  Ee = H(he());
var W = class {
    _items = [];
    _types = [];
    setData = (t, l) => {
      let d = new U(t, l),
        n = this._items.findIndex((o) => o.format === t);
      n === -1 ? (this._items.push(d), this._types.push(t)) : (this._items[n] = d);
    };
    getData = (t) => {
      let l = this._items.find(({ format: d }) => d === t);
      return l ? l.data : void 0;
    };
    get types() {
      return this._types;
    }
    dropEffect = "none";
    dropEffectCursor;
  },
  U = class {
    constructor(t, l) {
      this.format = t;
      this.data = l;
    }
    format;
    data;
  };
var M = H(G());
var Te = 10,
  _ = 50,
  xe = 50,
  Se = 120,
  ce = 1e3 / Se;
function de(e, t, l, d) {
  let [n, o] = M.default.useState(null),
    a = M.default.useRef(null),
    m = M.default.useRef(null),
    r = M.default.useRef(d);
  r.current = d;
  let E = M.default.useCallback(
      (s) => {
        let u = a.current;
        if (!u || !n || u.cancelled) return;
        let { scrollX: P, scrollY: w, lastTimestamp: x } = u,
          p = x !== null ? s - x : ce,
          g = Math.min(p, xe) / ce;
        ((P || w) && ((n.scrollTop += w * g), (n.scrollLeft += P * g), r.current?.()),
          (u.lastTimestamp = s),
          (u.rafRef = requestAnimationFrame(E)));
      },
      [n]
    ),
    S = M.default.useCallback((s) => {
      let u = me(s);
      (o(u), u ? (m.current = { x: u.scrollLeft, y: u.scrollTop }) : (m.current = null));
    }, []),
    i = M.default.useCallback(() => {
      a.current && (a.current.cancelled = !0);
    }, []),
    D = M.default.useCallback(() => {
      (n && n.removeEventListener("wheel", i), o(null));
      let s = { x: 0, y: 0 };
      m.current &&
        n &&
        ((s.x = m.current.x - n.scrollLeft), (s.y = m.current.y - n.scrollTop), (m.current = null));
      let u = a.current;
      return u
        ? (window.cancelAnimationFrame(u.rafRef), (a.current = null), { scrollOffset: s })
        : { scrollOffset: s };
    }, [n, i]),
    b = M.default.useCallback(
      (s) => {
        if (!n || !e) return;
        let u = n.getBoundingClientRect(),
          P = 0,
          w = 0;
        a.current ||
          ((a.current = {
            rafRef: requestAnimationFrame(E),
            scrollX: P,
            scrollY: w,
            cancelled: !1,
            hasMovedUp: !1,
            hasMovedDown: !1,
            hasMovedLeft: !1,
            hasMovedRight: !1,
            lastTimestamp: null,
          }),
          n.addEventListener("wheel", i));
        let x = a.current;
        ((x.hasMovedUp ||= s.delta.y < 0),
          (x.hasMovedDown ||= s.delta.y > 0),
          (x.hasMovedLeft ||= s.delta.x < 0),
          (x.hasMovedRight ||= s.delta.x > 0));
        let { hasMovedUp: p, hasMovedDown: f, hasMovedLeft: g, hasMovedRight: T } = x;
        if (ae(s.client, u) || t) {
          let y = l?.() ?? 0,
            c = s.client.x - u.left,
            R = s.client.y - u.top - y,
            I = u.width,
            A = u.height - y,
            K = c / I,
            C = R / A,
            Y = fe(c, I),
            N = fe(R, A);
          ((P = ue(Y, K)),
            (w = ue(N, C)),
            !p && w < 0 && (w = 0),
            !f && w > 0 && (w = 0),
            !g && P < 0 && (P = 0),
            !T && P > 0 && (P = 0),
            (x.scrollX = P),
            (x.scrollY = w));
        }
      },
      [n, E, i, e, l, t]
    );
  return { beginAutoScroll: S, endAutoScroll: D, updateAutoScroll: b };
}
function ue(e, t) {
  if (e > _) return 0;
  let l = (_ - e) / _,
    d = t < 0.5 ? -1 : 1;
  return Te * d * l;
}
function fe(e, t) {
  let l = Math.min(e, t - e);
  return Math.max(0, l);
}
function Me(e) {
  let { overflow: t } = e.style;
  if (t === "visible" || t === "hidden" || t === "clip") return !1;
  let l = e.scrollWidth > e.clientWidth,
    d = e.scrollHeight > e.clientHeight;
  return l || d;
}
function me(e) {
  let { parentElement: t } = e;
  return t ? (Me(t) ? t : me(t)) : null;
}
var $ = H(G());
var He = {
  input: !0,
  button: !0,
  textarea: !0,
  select: !0,
  option: !0,
  optgroup: !0,
  video: !0,
  audio: !0,
};
function Oe(e) {
  return He[e.tagName.toLowerCase()] ?? !1;
}
function Le(e) {
  switch (e.getAttribute("draggable")) {
    case "true":
    case "false":
      return !0;
    default:
      return !1;
  }
}
function Re(e) {
  if (!e.hasAttribute("data-allow-drag")) return !1;
  let t = e.getAttribute("data-allow-drag");
  return t == null || t === "" || t === "true";
}
function ge(e, t) {
  return !t || !(t instanceof Element) || Re(t)
    ? !1
    : Oe(t) || Le(t)
      ? !0
      : t === e
        ? !1
        : se(t)
          ? !0
          : ge(e, t.parentElement);
}
function pe(e) {
  let { target: t, currentTarget: l } = e;
  return l instanceof HTMLElement ? !ge(l, t) : !0;
}
var Ce = 2;
function ve(e) {
  let t = e.ref,
    l = (0, $.useRef)(e);
  return (
    (l.current = e),
    (0, $.useEffect)(() => {
      let d = t.current;
      if (!d) return;
      let n = null;
      function o(i) {
        if (n) {
          if (n.began) {
            let { cancelled: D = !1, event: b } = i;
            l.current.onDragEnd({
              client: n.client,
              clientAtStart: n.clientAtStart,
              delta: n.delta,
              cancelled: D,
              duration: ye(n.startTime),
              altKey: b?.altKey === !0,
              ctrlKey: b?.ctrlKey === !0,
              cmdOrCtrlKey: b ? k(b) : !1,
              shiftKey: b?.shiftKey === !0,
            });
          }
          ((n = null), S());
        }
      }
      function a(i) {
        if (!n) return;
        (i.stopPropagation(), i.preventDefault());
        let { clientAtStart: D, began: b } = n,
          s = j(i),
          u = L.delta(D, s);
        ((n.client = s), (n.delta = u));
        let { onDrag: P, onDragStart: w } = l.current;
        if (b) {
          P({
            client: s,
            delta: u,
            clientAtStart: D,
            cancelled: !1,
            duration: ye(n.startTime),
            altKey: i.altKey,
            ctrlKey: i.ctrlKey,
            cmdOrCtrlKey: k(i),
            shiftKey: i.shiftKey,
          });
          return;
        }
        L.distance(D, s) > Ce &&
          ((n.began = !0),
          (n.startTime = Date.now()),
          w({
            client: s,
            delta: u,
            clientAtStart: D,
            cancelled: !1,
            duration: 0,
            altKey: i.altKey,
            ctrlKey: i.ctrlKey,
            cmdOrCtrlKey: k(i),
            shiftKey: i.shiftKey,
          }));
      }
      function m(i) {
        if (!n) return;
        let D = j(i);
        ((n.client = D), (n.delta = L.delta(n.clientAtStart, D)), o({ event: i }));
      }
      function r(i) {
        n &&
          i.key === "Escape" &&
          (i.preventDefault(), i.stopPropagation(), o({ cancelled: !0, event: i }));
      }
      function E(i) {
        if (!Q.isLeftMouseClick(i) || !pe(i)) return;
        let D = l.current.dragHandleRef?.current;
        if (D && (!(i.target instanceof Node) || !D.contains(i.target))) return;
        (i.preventDefault(), Ie());
        let b = j(i);
        ((n = { clientAtStart: b, client: b, delta: { x: 0, y: 0 }, began: !1, startTime: null }),
          window.addEventListener("mouseup", m, { capture: !0 }),
          window.addEventListener("mousemove", a, { capture: !0 }),
          window.addEventListener("keydown", r, { capture: !0 }));
      }
      d.addEventListener("mousedown", E);
      function S() {
        (window.removeEventListener("mouseup", m, { capture: !0 }),
          window.removeEventListener("mousemove", a, { capture: !0 }),
          window.removeEventListener("keydown", r, { capture: !0 }));
      }
      return () => {
        (o({ cancelled: !0 }), S(), d.removeEventListener("mousedown", E));
      };
    }, [t]),
    t
  );
}
function ye(e) {
  return e ? (Date.now() - e) / 1e3 : 0;
}
function j(e) {
  return { x: e.clientX, y: e.clientY };
}
function Ie() {
  document.activeElement instanceof HTMLElement && document.activeElement.blur();
}
var q = H(z());
function st(e = {}) {
  let { enabled: t, hideDragSource: l, dragHandleRef: d } = e,
    n = (0, v.useRef)(null),
    o = e.ref || n,
    a = (0, v.useRef)(e);
  a.current = e;
  let m = (0, v.useRef)(null),
    [r, E] = (0, v.useState)(null),
    S = (0, v.useRef)(null),
    {
      beginAutoScroll: i,
      endAutoScroll: D,
      updateAutoScroll: b,
    } = de(
      e.autoScrollEnabled ?? !0,
      e.keepAutoScrollingOutsideScrollArea ?? !1,
      e.getHeightOfStickyHeaders,
      () => {
        let p = m.current;
        p && e.onDrag?.(p);
      }
    ),
    s = (0, v.useContext)(ie),
    u = (0, v.useContext)(F),
    P = (0, v.useCallback)(
      (p) => {
        if (t === !1) return;
        let f = o.current;
        if (!f) return;
        let { top: g, left: T, width: h, height: y } = f.getBoundingClientRect(),
          { x: c, y: R } = p.client,
          I = s.dragSessionStart(),
          A = new W(),
          K = { x: T + h / 2 - c, y: g + y / 2 - R },
          C = {
            sessionId: I,
            startEvent: p,
            elementOffset: { x: T, y: g },
            elementWidth: h,
            elementHeight: y,
            previewElementPromise: Ge(
              f,
              K,
              a.current.customDragPreview,
              a.current.opaqueDragPreview,
              u
            ),
            previewElement: null,
            began: !1,
            ended: !1,
            originalOpacity: null,
            originalPointerEvents: null,
            centerOfGravityOffset: K,
            dataTransfer: A,
          },
          Y = (c - T) / h,
          N = (R - g) / y,
          V = Math.max(h, y, 1),
          be = a.current.dragScale ?? (V + 2) / V;
        ((S.current = C),
          E(C),
          De(C, { x: 0, y: 0 }),
          X({ scale: be, opacity: 0.8, originX: Y, originY: N }));
      },
      [t, u]
    ),
    w = (0, v.useCallback)(
      (p) => {
        if (!r || (De(r, p.delta), !r.began || r.ended)) return;
        let { dataTransfer: f } = r,
          g = {
            ...p,
            dataTransfer: f,
            centerOfGravityOffset: r.centerOfGravityOffset,
            elementWidth: r.elementWidth,
            elementHeight: r.elementHeight,
          };
        ((m.current = g), b(g), s.dragSessionChange(r.sessionId, g));
        let { onDrag: T, dragProperties: h } = a.current,
          y = "grabbing";
        if (
          (f.dropEffect !== "none"
            ? (f.dropEffectCursor
                ? (y = f.dropEffectCursor)
                : f.dropEffect === "copy" && (y = "copy"),
              a.current.hoveringDropTargetClassName && ne(a.current.hoveringDropTargetClassName))
            : B(),
          oe(y),
          T && T(g),
          h)
        ) {
          let c = h(g);
          c && X(c);
        }
      },
      [r, b, s]
    ),
    x = (0, v.useCallback)(
      (p) => {
        if (((m.current = null), !r)) {
          E(null);
          let c = S.current;
          c && (s.dragSessionEnd(c.sessionId, null), (S.current = null));
          return;
        }
        let f = p.cancelled || Ae(p.client),
          g = {
            ...p,
            dataTransfer: r.dataTransfer,
            centerOfGravityOffset: r.centerOfGravityOffset,
            elementWidth: r.elementWidth,
            elementHeight: r.elementHeight,
            cancelled: f,
          };
        (s.dragSessionEnd(r.sessionId, g),
          (S.current = null),
          a.current.onDragEnd && a.current.onDragEnd(g));
        let T = r.dataTransfer.dropEffect !== "none",
          h = { scale: 1, opacity: T ? 0 : 1 },
          { scrollOffset: y } = D();
        if (
          (T || ((h.x = r.elementOffset.x + y.x), (h.y = r.elementOffset.y + y.y), B()),
          !f && a.current.dropAnimationProperties)
        ) {
          let c = a.current.dropAnimationProperties(g);
          c && (h = c);
        }
        (a.current.onDropAnimationStart && a.current.onDropAnimationStart(),
          r.previewElement &&
            ((r.previewElement.style.transition = "transform 0.2s, opacity 0.2s"),
            (r.previewElement.style.webkitTransition = "transform 0.2s, opacity 0.2s")),
          X(h),
          setTimeout(() => E((c) => (c && c.sessionId !== r.sessionId ? c : null)), 250));
      },
      [r, D, s]
    );
  return (
    ve({ ref: o, onDragStart: P, onDrag: w, onDragEnd: x, dragHandleRef: d }),
    (0, v.useEffect)(() => {
      let p = !0;
      if (!r) return;
      let f = o.current;
      if (!f) return;
      (a.current.onDragStart &&
        a.current.onDragStart({
          ...r.startEvent,
          dataTransfer: r.dataTransfer,
          centerOfGravityOffset: r.centerOfGravityOffset,
          elementWidth: r.elementWidth,
          elementHeight: r.elementHeight,
        }),
        (r.began = !0),
        i(f));
      function g() {
        if (!r || r.ended) return;
        ((r.ended = !0), s.dragSessionEnd(r.sessionId, null), E(null));
        let { onDropAnimationEnd: c } = a.current;
        c && c();
      }
      function T(c) {
        c.currentTarget === c.target && g();
      }
      ((r.originalOpacity = f.style.opacity),
        (r.originalPointerEvents = f.style.pointerEvents),
        l !== !1 && (f.style.opacity = "0"),
        (f.style.pointerEvents = "none"));
      let { previewElementPromise: h } = r,
        y = null;
      return (
        h
          .then((c) => {
            p &&
              (r.ended ||
                ((y = c),
                ee(c, g),
                y.addEventListener("transitionend", T),
                (r.previewElement = c)));
          })
          .catch(() => {}),
        () => {
          ((p = !1),
            (f.style.opacity = r.originalOpacity ?? ""),
            (f.style.pointerEvents = r.originalPointerEvents ?? ""),
            y && (y.removeEventListener("transitionend", T), te(y)));
          let c = S.current;
          c && s.dragSessionEnd(c.sessionId, null);
        }
      );
    }, [i, s, r, l, o]),
    o
  );
}
function Ae(e) {
  return e.x < 0 || e.y < 0 || e.x > window.innerWidth || e.y > window.innerHeight;
}
function De(e, t) {
  X(L.add(t, e.elementOffset));
}
function Ke(e) {
  let t = {};
  return (
    O(e.x) && (t["--layout-transition-drag-preview-x"] = e.x + "px"),
    O(e.y) && (t["--layout-transition-drag-preview-y"] = e.y + "px"),
    O(e.scale) && (t["--layout-transition-drag-preview-scale"] = `${e.scale}`),
    O(e.opacity) && (t["--layout-transition-drag-preview-opacity"] = `${e.opacity}`),
    O(e.originX) && (t["--layout-transition-drag-preview-origin-x"] = `${e.originX * 100}%`),
    O(e.originY) && (t["--layout-transition-drag-preview-origin-y"] = `${e.originY * 100}%`),
    t
  );
}
function ke(e, t) {
  let l = getComputedStyle(t);
  if (l.backgroundImage !== "none") return;
  let d = l.backgroundColor,
    n = l.getPropertyValue(Z("panelBackground", J));
  e.style.background = `linear-gradient(${d}, ${d}), ${n}`;
}
function X(e) {
  re(Ke(e));
}
async function Ge(e, t, l, d, n) {
  let o,
    a = e.offsetWidth,
    m = e.offsetHeight;
  if (l) {
    let r = document.createElement("template");
    (await new Promise((E) => {
      Ee.createRoot(r).render(
        (0, q.jsx)(n, {
          children: (0, q.jsx)(We, {
            callback: E,
            children: l({ dragSourceWidth: a, dragSourceHeight: m, centerOfGravityOffset: t }),
          }),
        })
      );
    }),
      (o = r.firstChild));
  } else o = e.cloneNode(!0);
  return (
    (o.style.position = "absolute"),
    (o.style.left = "0px"),
    (o.style.top = "0px"),
    (o.style.minWidth = `${a}px`),
    (o.style.minHeight = `${m}px`),
    (o.style.maxWidth = `${a + 1}px`),
    (o.style.maxHeight = `${m + 1}px`),
    (o.style.marginLeft = "0px"),
    (o.style.marginRight = "0px"),
    (o.style.marginTop = "0px"),
    (o.style.marginBottom = "0px"),
    (o.style.pointerEvents = "none"),
    (o.style.userSelect = "none"),
    (o.style.webkitUserSelect = "none"),
    (o.style.animation = "none"),
    (o.style.transition = ""),
    (o.style.webkitTransition = ""),
    (o.style.zIndex = "100000"),
    (o.style.transform =
      "translateX(var(--layout-transition-drag-preview-x, 0px)) translateY(var(--layout-transition-drag-preview-y, 0px)) translateZ(2000px) scale(var(--layout-transition-drag-preview-scale, 0))"),
    (o.style.willChange = "transform"),
    (o.style.transformOrigin =
      "var(--layout-transition-drag-preview-origin-x, 50%) var(--layout-transition-drag-preview-origin-y, 50%)"),
    (o.style.opacity = "var(--layout-transition-drag-preview-opacity, 1)"),
    (o.style.cursor = "default"),
    d && ke(o, e),
    o
  );
}
function We({ children: e, callback: t }) {
  return ((0, v.useLayoutEffect)(t, [t]), e);
}
export { F as a, L as b, we as c, se as d, st as e };
//# sourceMappingURL=chunk-O6XBFAFO.mjs.map
