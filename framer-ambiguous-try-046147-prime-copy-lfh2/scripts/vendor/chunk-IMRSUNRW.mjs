import { a as T } from "chunk-NJXSBLUG.mjs";
import { a as E } from "chunk-SWYZG2NI.mjs";
import { c as w, f as a, g as c } from "chunk-R7Z3KLXQ.mjs";
import { b as y, d as C } from "chunk-EAUMDN6M.mjs";
import { e as k } from "chunk-WLHSDIGQ.mjs";
var J = "maxImageWidth",
  H = "phonePreview";
var {
    onewayMethodTemplate: G,
    voidMethodTemplate: B,
    valueMethodTemplate: Q,
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
    newOutgoingWrapper: (t) => ({
      experimentsUpdatesStream: M.bind(-1, "experimentsUpdatesStream", t),
      employeesOnlySettingsUpdatesStream: M.bind(-1, "employeesOnlySettingsUpdatesStream", t),
      projectFeaturesUpdatesStream: M.bind(-1, "projectFeaturesUpdatesStream", t),
    }),
  }))((x ||= {}));
var _;
((i) => {
  i.service = x.service;
  function s(r) {
    let o = a.shared();
    return {
      expect: () => o.expectWithoutDiscovery(i.service, r),
      discover: (n) => o.discover(i.service, r, n),
      register: (n) => o.register({ channel: r, service: i.service, implementation: n }),
    };
  }
  i.on = s;
  async function t(r) {
    a.shared().unregister(r);
  }
  i.unregister = t;
})((_ ||= {}));
var {
    onewayMethodTemplate: ee,
    voidMethodTemplate: m,
    valueMethodTemplate: te,
    streamMethodTemplate: u,
  } = c,
  h;
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
    newOutgoingWrapper: (t) => ({
      render: m.bind(-1, "render", !0, t),
      setColorMode: m.bind(-1, "setColorMode", !0, t),
      componentSizeStream: u.bind(-1, "componentSizeStream", t),
      previewKeyboardEventStream: u.bind(-1, "previewKeyboardEventStream", t),
      renderUpdateStream: u.bind(-1, "renderUpdateStream", t),
      setTargetModuleRevisions: m.bind(-1, "setTargetModuleRevisions", !0, t),
      setModuleWidth: m.bind(-1, "setModuleWidth", !0, t),
      setTapToOpen: m.bind(-1, "setTapToOpen", !0, t),
      tapStream: u.bind(-1, "tapStream", t),
    }),
  }))((h ||= {}));
var D;
((i) => {
  i.service = h.service;
  function s(r) {
    let o = a.shared();
    return {
      expect: () => o.expectWithoutDiscovery(i.service, r),
      discover: (n) => o.discover(i.service, r, n),
      register: (n) => o.register({ channel: r, service: i.service, implementation: n }),
    };
  }
  i.on = s;
  async function t(r) {
    a.shared().unregister(r);
  }
  i.unregister = t;
})((D ||= {}));
var {
    onewayMethodTemplate: se,
    voidMethodTemplate: ce,
    valueMethodTemplate: pe,
    streamMethodTemplate: O,
  } = c,
  b;
((s) =>
  (s.service = {
    id: "__ModulesUpdates__",
    fingerprint: "170b4b1e78f8ad9ae2c048b233235e85",
    methods: { moduleUpdatesStream: {}, fastRefreshModuleUpdatesStream: {} },
    newOutgoingWrapper: (t) => ({
      moduleUpdatesStream: O.bind(-1, "moduleUpdatesStream", t),
      fastRefreshModuleUpdatesStream: O.bind(-1, "fastRefreshModuleUpdatesStream", t),
    }),
  }))((b ||= {}));
var F;
((i) => {
  i.service = b.service;
  function s(r) {
    let o = a.shared();
    return {
      expect: () => o.expectWithoutDiscovery(i.service, r),
      discover: (n) => o.discover(i.service, r, n),
      register: (n) => o.register({ channel: r, service: i.service, implementation: n }),
    };
  }
  i.on = s;
  async function t(r) {
    a.shared().unregister(r);
  }
  i.unregister = t;
})((F ||= {}));
var {
    onewayMethodTemplate: Se,
    voidMethodTemplate: W,
    valueMethodTemplate: N,
    streamMethodTemplate: A,
  } = c,
  I;
((s) =>
  (s.service = {
    id: "__ModulePreviewTracking__",
    fingerprint: "e64b13394ec1b232e481ae2514ba7285",
    methods: { trackingStream: {}, getDiagnostics: {}, setTrackingContext: {} },
    newOutgoingWrapper: (t) => ({
      trackingStream: A.bind(-1, "trackingStream", t),
      getDiagnostics: N.bind(-1, "getDiagnostics", !1, t),
      setTrackingContext: W.bind(-1, "setTrackingContext", !0, t),
    }),
  }))((I ||= {}));
var L;
((i) => {
  i.service = I.service;
  function s(r) {
    let o = a.shared();
    return {
      expect: () => o.expectWithoutDiscovery(i.service, r),
      discover: (n) => o.discover(i.service, r, n),
      register: (n) => o.register({ channel: r, service: i.service, implementation: n }),
    };
  }
  i.on = s;
  async function t(r) {
    a.shared().unregister(r);
  }
  i.unregister = t;
})((L ||= {}));
var p = k(E());
function Ie(e, s) {
  let t = { service: e.service.service, onDiscover: e.onDiscover },
    i = (0, p.useRef)(t);
  if (i.current.service !== t.service)
    throw new Error("useServiceStream: service must be identical between re-renders");
  let r = { onStreamValue: s, onError: e.onError },
    o = (0, p.useRef)(r);
  o.current = r;
  let n = (0, p.useRef)(),
    { channel: S, enabled: R = !0 } = e;
  (0, p.useEffect)(() => {
    if (!R || !S) return;
    let d = !0,
      U = () => {
        let l = n.current;
        ((n.current = void 0), l?.cancel().catch(() => {}));
      };
    return (
      (async () => {
        let l = !1,
          g = 0;
        for (; !l;) {
          l = !0;
          try {
            let v = i.current,
              f = await a.shared().discover(v.service, S);
            if (!d) return;
            let P = v.onDiscover(f);
            ((n.current = P),
              (g = 0),
              await P.read((V) => (d ? o.current.onStreamValue(V) : Promise.resolve())));
          } catch (v) {
            if (!d) return;
            let f = o.current.onError(C(v));
            if ((g++, g > 1)) continue;
            if (f?.retry === !0) {
              if ((await T(0), !d)) return;
              l = !1;
            }
          }
        }
      })().catch(y),
      () => {
        ((d = !1), U());
      }
    );
  }, [S, R]);
}
function Re(e) {
  if (e instanceof w.ServiceGone) return { retry: !0 };
  y(e);
}
export { _ as a, D as b, L as c, F as d, J as e, H as f, Ie as g, Re as h };
//# sourceMappingURL=chunk-IMRSUNRW.mjs.map
