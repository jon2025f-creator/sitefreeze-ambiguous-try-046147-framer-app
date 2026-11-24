import { a as T } from "chunk-NJXSBLUG.mjs";
import { a as E } from "chunk-SWYZG2NI.mjs";
import { c as O, f as a, g as c } from "chunk-R7Z3KLXQ.mjs";
import { b as y, d as P } from "chunk-EAUMDN6M.mjs";
import { e as D } from "chunk-WLHSDIGQ.mjs";
var G = "maxImageWidth",
  Q = "phonePreview";
var {
    onewayMethodTemplate: Y,
    voidMethodTemplate: Z,
    valueMethodTemplate: $,
    streamMethodTemplate: M,
  } = c,
  x;
((s) =>
  (s.service = {
    id: "__Flags__",
    fingerprint: "2dc758b5859fc43cd99a9ea5569fd9d8",
    methods: {
      experimentsUpdatesStream: {},
      employeesOnlySettingsUpdatesStream: {},
      projectFeaturesUpdatesStream: {},
    },
    newOutgoingWrapper: (e) => ({
      experimentsUpdatesStream: M.bind(-1, "experimentsUpdatesStream", e),
      employeesOnlySettingsUpdatesStream: M.bind(-1, "employeesOnlySettingsUpdatesStream", e),
      projectFeaturesUpdatesStream: M.bind(-1, "projectFeaturesUpdatesStream", e),
    }),
  }))((x ||= {}));
var N;
((i) => {
  i.service = x.service;
  function s(t) {
    let n = a.shared();
    return {
      expect: () => n.expectWithoutDiscovery(i.service, t),
      discover: (o) => n.discover(i.service, t, o),
      register: (o) => n.register({ channel: t, service: i.service, implementation: o }),
    };
  }
  i.on = s;
  async function e(t) {
    a.shared().unregister(t);
  }
  i.unregister = e;
})((N ||= {}));
var {
    onewayMethodTemplate: oe,
    voidMethodTemplate: m,
    valueMethodTemplate: ae,
    streamMethodTemplate: v,
  } = c,
  b;
((s) =>
  (s.service = {
    id: "__ModulePreviewSandbox__",
    fingerprint: "fea14287525cd1b600fd0d74d2edd65d",
    methods: {
      render: {},
      setColorMode: {},
      componentSizeStream: {},
      previewKeyboardEventStream: {},
      renderUpdateStream: {},
      setTargetModuleRevisions: {},
      setModuleWidth: {},
      setTapToOpen: {},
      tapStream: {},
    },
    newOutgoingWrapper: (e) => ({
      render: m.bind(-1, "render", !0, e),
      setColorMode: m.bind(-1, "setColorMode", !0, e),
      componentSizeStream: v.bind(-1, "componentSizeStream", e),
      previewKeyboardEventStream: v.bind(-1, "previewKeyboardEventStream", e),
      renderUpdateStream: v.bind(-1, "renderUpdateStream", e),
      setTargetModuleRevisions: m.bind(-1, "setTargetModuleRevisions", !0, e),
      setModuleWidth: m.bind(-1, "setModuleWidth", !0, e),
      setTapToOpen: m.bind(-1, "setTapToOpen", !0, e),
      tapStream: v.bind(-1, "tapStream", e),
    }),
  }))((b ||= {}));
var A;
((i) => {
  i.service = b.service;
  function s(t) {
    let n = a.shared();
    return {
      expect: () => n.expectWithoutDiscovery(i.service, t),
      discover: (o) => n.discover(i.service, t, o),
      register: (o) => n.register({ channel: t, service: i.service, implementation: o }),
    };
  }
  i.on = s;
  async function e(t) {
    a.shared().unregister(t);
  }
  i.unregister = e;
})((A ||= {}));
var {
    onewayMethodTemplate: me,
    voidMethodTemplate: ue,
    valueMethodTemplate: ve,
    streamMethodTemplate: U,
  } = c,
  h;
((s) =>
  (s.service = {
    id: "__ModulesUpdates__",
    fingerprint: "170b4b1e78f8ad9ae2c048b233235e85",
    methods: { moduleUpdatesStream: {}, fastRefreshModuleUpdatesStream: {} },
    newOutgoingWrapper: (e) => ({
      moduleUpdatesStream: U.bind(-1, "moduleUpdatesStream", e),
      fastRefreshModuleUpdatesStream: U.bind(-1, "fastRefreshModuleUpdatesStream", e),
    }),
  }))((h ||= {}));
var F;
((i) => {
  i.service = h.service;
  function s(t) {
    let n = a.shared();
    return {
      expect: () => n.expectWithoutDiscovery(i.service, t),
      discover: (o) => n.discover(i.service, t, o),
      register: (o) => n.register({ channel: t, service: i.service, implementation: o }),
    };
  }
  i.on = s;
  async function e(t) {
    a.shared().unregister(t);
  }
  i.unregister = e;
})((F ||= {}));
var {
    onewayMethodTemplate: xe,
    voidMethodTemplate: V,
    valueMethodTemplate: W,
    streamMethodTemplate: J,
  } = c,
  I;
((s) =>
  (s.service = {
    id: "__PreviewCmsQueries__",
    fingerprint: "5a1bdb7b35bd1f2903aaa2b2c310c3ff",
    methods: { ready: {}, subscribe: {}, unsubscribe: {}, answersStream: {} },
    newOutgoingWrapper: (e) => ({
      ready: V.bind(-1, "ready", !1, e),
      subscribe: W.bind(-1, "subscribe", !0, e),
      unsubscribe: V.bind(-1, "unsubscribe", !0, e),
      answersStream: J.bind(-1, "answersStream", e),
    }),
  }))((I ||= {}));
var L;
((i) => {
  i.service = I.service;
  function s(t) {
    let n = a.shared();
    return {
      expect: () => n.expectWithoutDiscovery(i.service, t),
      discover: (o) => n.discover(i.service, t, o),
      register: (o) => n.register({ channel: t, service: i.service, implementation: o }),
    };
  }
  i.on = s;
  async function e(t) {
    a.shared().unregister(t);
  }
  i.unregister = e;
})((L ||= {}));
var {
    onewayMethodTemplate: we,
    voidMethodTemplate: z,
    valueMethodTemplate: H,
    streamMethodTemplate: K,
  } = c,
  R;
((s) =>
  (s.service = {
    id: "__ModulePreviewTracking__",
    fingerprint: "e64b13394ec1b232e481ae2514ba7285",
    methods: { trackingStream: {}, getDiagnostics: {}, setTrackingContext: {} },
    newOutgoingWrapper: (e) => ({
      trackingStream: K.bind(-1, "trackingStream", e),
      getDiagnostics: H.bind(-1, "getDiagnostics", !1, e),
      setTrackingContext: z.bind(-1, "setTrackingContext", !0, e),
    }),
  }))((R ||= {}));
var j;
((i) => {
  i.service = R.service;
  function s(t) {
    let n = a.shared();
    return {
      expect: () => n.expectWithoutDiscovery(i.service, t),
      discover: (o) => n.discover(i.service, t, o),
      register: (o) => n.register({ channel: t, service: i.service, implementation: o }),
    };
  }
  i.on = s;
  async function e(t) {
    a.shared().unregister(t);
  }
  i.unregister = e;
})((j ||= {}));
var p = D(E());
function De(r, s) {
  let e = { service: r.service.service, onDiscover: r.onDiscover },
    i = (0, p.useRef)(e);
  if (i.current.service !== e.service)
    throw new Error("useServiceStream: service must be identical between re-renders");
  let t = { onStreamValue: s, onError: r.onError },
    n = (0, p.useRef)(t);
  n.current = t;
  let o = (0, p.useRef)(),
    { channel: S, enabled: C = !0 } = r;
  (0, p.useEffect)(() => {
    if (!C || !S) return;
    let d = !0,
      k = () => {
        let l = o.current;
        ((o.current = void 0), l?.cancel().catch(() => {}));
      };
    return (
      (async () => {
        let l = !1,
          f = 0;
        for (; !l;) {
          l = !0;
          try {
            let u = i.current,
              g = await a.shared().discover(u.service, S);
            if (!d) return;
            let w = u.onDiscover(g);
            ((o.current = w),
              (f = 0),
              await w.read((_) => (d ? n.current.onStreamValue(_) : Promise.resolve())));
          } catch (u) {
            if (!d) return;
            let g = n.current.onError(P(u));
            if ((f++, f > 1)) continue;
            if (g?.retry === !0) {
              if ((await T(0), !d)) return;
              l = !1;
            }
          }
        }
      })().catch(y),
      () => {
        ((d = !1), k());
      }
    );
  }, [S, C]);
}
function Ee(r) {
  if (r instanceof O.ServiceGone) return { retry: !0 };
  y(r);
}
export { N as a, A as b, j as c, F as d, L as e, G as f, Q as g, De as h, Ee as i };
//# sourceMappingURL=chunk-YI3AJGA6.mjs.map
