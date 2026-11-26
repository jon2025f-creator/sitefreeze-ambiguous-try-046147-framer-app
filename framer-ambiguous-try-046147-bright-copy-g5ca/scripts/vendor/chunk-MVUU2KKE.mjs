import { a as m } from "chunk-UZNETSBG.mjs";
import { a as w, d as T } from "chunk-EZMKBVIS.mjs";
import { a as u } from "chunk-EQBCTBZ3.mjs";
import { b as y, j as g, s as x } from "chunk-ARJ7WQTJ.mjs";
function c(e) {
  let o = e.length & 3,
    a = e.length - o,
    r = 0,
    s = 0;
  for (; s < a;) {
    let l =
      (e.charCodeAt(s) & 255) |
      ((e.charCodeAt(++s) & 255) << 8) |
      ((e.charCodeAt(++s) & 255) << 16) |
      ((e.charCodeAt(++s) & 255) << 24);
    (++s,
      (l = ((l & 65535) * 3432918353 + ((((l >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (l = (l << 15) | (l >>> 17)),
      (l = ((l & 65535) * 461845907 + ((((l >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (r ^= l),
      (r = (r << 13) | (r >>> 19)));
    let d = ((r & 65535) * 5 + ((((r >>> 16) * 5) & 65535) << 16)) & 4294967295;
    r = (d & 65535) + 27492 + ((((d >>> 16) + 58964) & 65535) << 16);
  }
  let i = 0;
  return (
    o >= 3 && (i ^= (e.charCodeAt(s + 2) & 255) << 16),
    o >= 2 && (i ^= (e.charCodeAt(s + 1) & 255) << 8),
    o >= 1 &&
      ((i ^= e.charCodeAt(s) & 255),
      (i = ((i & 65535) * 3432918353 + ((((i >>> 16) * 3432918353) & 65535) << 16)) & 4294967295),
      (i = (i << 15) | (i >>> 17)),
      (i = ((i & 65535) * 461845907 + ((((i >>> 16) * 461845907) & 65535) << 16)) & 4294967295),
      (r ^= i)),
    (r ^= e.length),
    (r ^= r >>> 16),
    (r = ((r & 65535) * 2246822507 + ((((r >>> 16) * 2246822507) & 65535) << 16)) & 4294967295),
    (r ^= r >>> 13),
    (r = ((r & 65535) * 3266489909 + ((((r >>> 16) * 3266489909) & 65535) << 16)) & 4294967295),
    (r ^= r >>> 16),
    r >>> 0
  );
}
function h(e, n) {
  let t = new Set(e);
  return (t.add("on"), t.add("off"), { variants: [...t], value: n });
}
var b = {};
function K(e) {
  return b[e];
}
function I(e) {
  let n = {};
  for (let t in e) {
    let o = e[t];
    if (typeof o == "object") ((n[t] = o.value), (b[t] = o.variants));
    else if (typeof o == "string") n[t] = o;
    else throw Error(`Invalid experiment value: ${o}`);
  }
  return n;
}
var S = I({
    addViewBox: "off",
    advancedAgentControls: "off",
    advancedHostingFirewall: "on",
    "agent-2026-w25": "on",
    "agent-2026-w26": "on",
    "agent-2026-w28": "on",
    "agent-2026-w29": "on",
    "agent-2026-w30": "on",
    "agent-2026-w31": "on",
    "agent-2026-w32": "on",
    "agent-2026-w37": "off",
    "agent-2026-w38": "off",
    agentActivationOffers: "off",
    agentAlphaModels: "on",
    agentAsyncCrdtPreload: "off",
    agentBackendStorage: "off",
    agentBranchScriptApi: "on",
    agentChatInSiteSettings: "on",
    agentChatSuggestions: "off",
    agentComments: "off",
    agentConcisePromptDocs: "off",
    agentContextRow: "on",
    agentControls: "off",
    agentCRDTChangelog: "off",
    agentCustomCode: "on",
    agentEnrichment: "off",
    agentFramerConvertTriggers: "off",
    agentGeneratedShaders: "on",
    agentGPT6SolLunaViaOpenRouter: "off",
    agenticAnalyticsV2: "off",
    agentIntegrationProfound: "on",
    agentIntegrations: "on",
    agentLazyEvalExportBase: "off",
    agentLocalization: "off",
    agentLocalizationInWorker: "off",
    agentModelSpecificChecklist: "on",
    agentNextSuggestion: h(["pill", "inline"], "off"),
    agentNodeAttributeChangeTracking: "off",
    agentProjectMembers: "off",
    agentRating: "off",
    agentRichTextFontsFromDocument: "off",
    agentSharedRichTextSchema: "off",
    agentStaticFiles: "off",
    agentStyleOnSelect: "on",
    agentTerraLunaViaOpenRouter: "on",
    agentTsdocApi: "off",
    agentUI: "on",
    agentUseAnthropicMessagesAPI: "off",
    agentUseAnthropicServerSideCompaction: "on",
    agentUseOpenAIResponsesAPI: "off",
    agentUseOpenAIResponsesWebSocket: "off",
    agentUseOpenAIServerSideCompaction: "on",
    agentVersionHistory: "off",
    agentVisionImagePixelLimit: "on",
    agentWebSearch: "off",
    agentWorkerReleaseRawSnapshot: "off",
    aiCreditsOneTimeWithoutAddOn: "off",
    alignLocalizationAiModelPicker: "on",
    analyticsFunnelGroupBy: "off",
    apps: "off",
    appShortcutsWhileEditingText: "on",
    ariaProperties: "on",
    automations: "on",
    bulkHierarchyRehydrate: "off",
    canvasPerfImperativeCamera: "off",
    canvasPerfSkipSelectionPostProcess: "off",
    canvasRepeatSelection: "off",
    canvasSwitch: "off",
    canvasTreeCrdtDriver: "off",
    carouselEffect: "off",
    chatGPTPlan: "off",
    checkServerSideRouter: "on",
    clientModuleIds: "off",
    cmsDatabase: "off",
    cmsMultiplayerCursors: "on",
    cmsSandboxRpc: "off",
    cmsTablePlaceholderRow: "on",
    codeLinkPlugin: "off",
    codingAgentModelSelect: "off",
    collectionLocalModuleImportMapEntries: "off",
    commentsPushEvents: "on",
    componentRichTextContentOverlay: "on",
    componentSlotsAreChildNodes: "off",
    connectedApps: "off",
    crdtTreeEditUndo: "off",
    debugEditWhileLoadingRuntimeChecks: "off",
    deferCastleUntilLoaded: "on",
    deferMeasureWhileLoadingModules: "on",
    deferModulesUntilImported: "off",
    deferNonVisibleModuleEvaluation: "off",
    deferPreviewModulesUntilRequested: "off",
    disableHoverOnMobile: "off",
    dummyTest: "off",
    editorBarDisableFrameAncestorsSecurity: "off",
    effectsInDesignPages: "off",
    externalVectorIcons: "on",
    fastLargeSelection: "on",
    fastLocalization: "off",
    fastPreview: "off",
    fastPreviewLazy: "off",
    fixedSizeImageSrcset: "off",
    gradientTextShadowFilter: "off",
    granularPermissions: "off",
    harness2: "off",
    hideNestedLinkWarnings: "on",
    imageGeneration: "off",
    importMapPruning: "off",
    jsonRichTextStorage: h(["cms", "canvas,cms", "agent,canvas,cms"], "canvas,cms"),
    keepSVGViewBox: "off",
    layeredModuleRevisionHint: "on",
    layersVirtualization: "on",
    layoutScroll: "off",
    lazyAgentModule: "on",
    liveZoomStepScaleFactor: "on",
    localCacheSyncWorker: "off",
    localizationModelUpdate: "on",
    localizationProgressSummaries: "off",
    localizationTreeControls: "off",
    localizationUiUpdate: "on",
    localizedLinks: "off",
    locationControl: "off",
    locationTriggerConditions: "on",
    mobileAgentChat: "off",
    motionDivToDiv: "off",
    noNodeSetters: "off",
    objectVariables: "off",
    paneEdgeDoubleClickReset: "on",
    passkeys: "off",
    pasteStyleMatching: "off",
    pathRadiusSmoothing: "on",
    phoneDomainsPage: "off",
    phonePlansPage: "on",
    pinnedWorkspaces: "on",
    prefetchEditorFromDashboard: "on",
    preloadLoaderScheduling: "on",
    preventVariableDeletion: "on",
    previewSharing: "off",
    prioritizeFirstInitializedModulesUpdate: "off",
    projectAuditSkill: "off",
    publishingRecoveryProgress: "off",
    publishStaleModuleErrors: "off",
    quietCanvasImageUploads: "off",
    raindropSelfDiagnostics: "on",
    rebaseBranches: "off",
    recoverStaleModules: h(["withPagesAndTemplates"], "off"),
    richTextVideoModule: "on",
    scopedComponentElementIds: "on",
    scrollRestoration: "on",
    settingCardDesign: "on",
    sharedEnums: "off",
    showCanonicalUrlAsDefault: "off",
    siteCustomLogin: "off",
    siteFramerLogin: "off",
    siteLoginVisitorInfo: "off",
    skipPublishingLocalesFallingBackToDraft: "on",
    skipValueDedupeScan: "off",
    smartComponentResolvesOwnDefaults: "off",
    synchronousNavigationOnDesktop: "off",
    syncRowsBeforeExport: "on",
    textBalanceRequiresWrap: "off",
    transientLocalModuleTreeData: "off",
    translateAllProgressToast: "off",
    translationTransforms: "off",
    treeStateGroundId: "off",
    treeStoreReadsUpdaterTree: "off",
    ultrafastOpenAI: "on",
    unifiedStackActions: "on",
    yieldOnTap: "off",
    yieldThirdPartyScripts: "on",
  }),
  k = [
    "agentIntegrationProfound",
    "agentIntegrations",
    "canvasTreeCrdtDriver",
    "cmsSandboxRpc",
    "deferModulesUntilImported",
    "deferNonVisibleModuleEvaluation",
    "deferPreviewModulesUntilRequested",
    "fastPreview",
    "granularPermissions",
    "jsonRichTextStorage",
    "lazyAgentModule",
    "noNodeSetters",
    "treeStoreReadsUpdaterTree",
  ];
function q(e) {
  return k.includes(e);
}
var v = {
    agentAsyncCrdtPreload: "on",
    agentComments: "on",
    agentConcisePromptDocs: "on",
    agentControls: "on",
    agentEnrichment: "on",
    agentLazyEvalExportBase: "on",
    agentLocalization: "on",
    agentLocalizationInWorker: "on",
    agentRichTextFontsFromDocument: "on",
    agentSharedRichTextSchema: "on",
    agentStaticFiles: "on",
    agentUseOpenAIResponsesWebSocket: "on",
    agentWorkerReleaseRawSnapshot: "on",
    bulkHierarchyRehydrate: "on",
    canvasPerfImperativeCamera: "on",
    canvasPerfSkipSelectionPostProcess: "on",
    carouselEffect: "on",
    codeLinkPlugin: "on",
    codingAgentModelSelect: "on",
    crdtTreeEditUndo: "on",
    debugEditWhileLoadingRuntimeChecks: "on",
    deferModulesUntilImported: "on",
    deferNonVisibleModuleEvaluation: "on",
    deferPreviewModulesUntilRequested: "on",
    fastLocalization: "on",
    gradientTextShadowFilter: "on",
    layoutScroll: "on",
    noNodeSetters: "on",
    pasteStyleMatching: "on",
    prioritizeFirstInitializedModulesUpdate: "on",
    quietCanvasImageUploads: "on",
    smartComponentResolvesOwnDefaults: "on",
    treeStoreReadsUpdaterTree: "on",
  },
  R = {
    addViewBox: "on",
    "agent-2026-w37": "on",
    "agent-2026-w38": "on",
    agentCRDTChangelog: "on",
    agentFramerConvertTriggers: "on",
    agenticAnalyticsV2: "on",
    agentProjectMembers: "on",
    agentTsdocApi: "on",
    agentVersionHistory: "on",
    agentWebSearch: "on",
    canvasRepeatSelection: "on",
    canvasTreeCrdtDriver: "on",
    clientModuleIds: "on",
    cmsSandboxRpc: "on",
    disableHoverOnMobile: "on",
    effectsInDesignPages: "on",
    fastPreview: "on",
    harness2: "on",
    imageGeneration: "on",
    jsonRichTextStorage: "agent,canvas,cms",
    localCacheSyncWorker: "on",
    localizationTreeControls: "on",
    localizedLinks: "on",
    mobileAgentChat: "on",
    motionDivToDiv: "on",
    passkeys: "on",
    projectAuditSkill: "on",
    recoverStaleModules: "withPagesAndTemplates",
    sharedEnums: "on",
    synchronousNavigationOnDesktop: "on",
    textBalanceRequiresWrap: "on",
    translateAllProgressToast: "on",
    translationTransforms: "on",
    yieldOnTap: "on",
  },
  O = {
    agentActivationOffers: { sample: 0.5, scope: "User", includeEnterprise: !1, variant: "on" },
    agentChatSuggestions: { sample: 0.95, scope: "User", includeEnterprise: !1, variant: "on" },
    agentFramerConvertTriggers: {
      sample: 1,
      scope: "Team",
      includeEnterprise: !0,
      channels: ["beta", "stable"],
      variant: "on",
    },
    agenticAnalyticsV2: {
      sample: 1,
      scope: "Team",
      includeEnterprise: !0,
      channels: ["beta", "stable"],
      variant: "on",
    },
    agentUseOpenAIResponsesWebSocket: {
      sample: 0.01,
      scope: "User",
      includeEnterprise: !1,
      channels: ["stable"],
      variant: "on",
    },
    aiCreditsOneTimeWithoutAddOn: {
      sample: 0,
      scope: "User",
      includeEnterprise: !1,
      variant: "on",
    },
    crdtTreeEditUndo: {
      sample: 1,
      scope: "Project",
      includeEnterprise: !1,
      channels: ["stable"],
      variant: "on",
    },
    deferModulesUntilImported: {
      sample: 1,
      scope: "User",
      includeEnterprise: !0,
      channels: ["stable"],
      variant: "on",
    },
    deferNonVisibleModuleEvaluation: {
      sample: 0.01,
      scope: "Project",
      includeEnterprise: !1,
      channels: ["stable"],
      dependencies: { deferModulesUntilImported: "on" },
      variant: "on",
    },
    harness2: [
      {
        sample: 1,
        scope: "Team",
        includeEnterprise: !0,
        channels: ["beta"],
        dependencies: { localCacheSyncWorker: "on" },
        variant: "on",
      },
      {
        sample: 1,
        scope: "Team",
        includeEnterprise: !0,
        channels: ["stable"],
        dependencies: { localCacheSyncWorker: "on" },
        variant: "on",
      },
    ],
    imageGeneration: {
      sample: 1,
      scope: "Team",
      includeEnterprise: !0,
      channels: ["beta", "stable"],
      variant: "on",
    },
    prioritizeFirstInitializedModulesUpdate: {
      sample: 0.1,
      scope: "User",
      includeEnterprise: !1,
      channels: ["stable"],
      variant: "on",
    },
  };
var M = 4294967295,
  f = {
    hashes: { Project: null, Team: null, User: null },
    isEnterprise: { Project: null, Team: null, User: null },
    channel: null,
  };
function Q(e) {
  ((f.isEnterprise.Project = e.license.type === "enterpriseSite"), (f.hashes.Project = c(e.id)));
}
function P(e) {
  ((f.isEnterprise.User = e.spaces.some((n) => n.license?.type === "enterprise")),
    (f.hashes.User = c(e.id)));
}
function Y(e, n) {
  ((f.isEnterprise.Team = n === "enterprise"), (f.hashes.Team = c(e)));
}
function ee(e) {
  f.channel = e;
}
function N(e, { sample: n, scope: t, variant: o, includeEnterprise: a, channels: r }) {
  if (r)
    if (f.channel) {
      if (!r.includes(f.channel)) return !1;
    } else return !1;
  let s = n * M,
    i = c(e),
    l = c(o);
  return x(f.hashes[t]) || x(f.isEnterprise[t]) || (!a && f.isEnterprise[t])
    ? !1
    : (f.hashes[t] ^ i ^ l) >>> 0 < s;
}
function C(e = O) {
  let n = {};
  return (
    Object.keys(e).forEach((t) => {
      if (!e[t]) return;
      let o = g(e[t]) ? e[t] : [e[t]];
      for (let a of o) {
        if (!N(t, a)) continue;
        n[t] = a.variant;
        let r = a.dependencies ?? [];
        if (g(r)) for (let s of r) n[s] = a.variant;
        else Object.assign(n, r);
        break;
      }
    }),
    n
  );
}
typeof window < "u" && window.framerUser && P(window.framerUser);
var p = new T(G());
p.update(A());
var D = [];
function se() {
  let e = {};
  for (let n of D) e[`experiment_${n}`] = p.isOn(n);
  return e;
}
function E() {
  if (typeof window > "u") return "experiments";
  let e = u(window)?.channel;
  return e ? `experiments-${e}` : "experiments";
}
function U() {
  let e = {};
  if (typeof window > "u") return {};
  let n = u(window);
  if (!n) return e;
  let { channel: t, override: o } = n,
    a = o === "tunnel" && w.isDevelopment;
  return (
    (t === "alpha" || t === "local" || a) && Object.assign(e, v, R),
    t === "beta" && Object.assign(e, v),
    e
  );
}
function j() {
  let e = {};
  try {
    let n = JSON.parse(localStorage[E()] || "{}");
    Object.assign(e, n);
  } catch {}
  return e;
}
function W() {
  if (typeof window > "u") return {};
  if (!V(window)) return {};
  try {
    return JSON.parse(window.experiments);
  } catch {}
  return {};
}
function V(e) {
  return "experiments" in e && y(e.experiments);
}
function z() {
  let e = {};
  if (typeof window > "u") return {};
  for (let n of new URLSearchParams(window?.location.search).getAll("experiment")) {
    let [t, o = "on"] = n.split("=");
    e[t] = o;
  }
  return e;
}
function F() {
  let e = z();
  try {
    let n = { ...JSON.parse(sessionStorage.getItem("experiments") || "{}"), ...e };
    return (
      Object.keys(e).length > 0 && sessionStorage.setItem("experiments", JSON.stringify(n)),
      n
    );
  } catch {
    return e;
  }
}
function G() {
  return { ...S, ...U() };
}
function fe({ resetStorage: e, resetSession: n } = {}) {
  if (!(typeof window > "u")) {
    if ((e && localStorage.removeItem(E()), n)) {
      sessionStorage.removeItem("experiments");
      let t = new URL(window.location.href);
      (t.searchParams.delete("experiment"),
        window.history.replaceState(window.history.state, "", t.href));
    }
    p.update({ ...S, ...A() });
  }
}
function A() {
  return { ...C(), ...U(), ...j(), ...W(), ...F() };
}
typeof window < "u" && window.localStorage.removeItem("useThemeLogo");
function le(e) {
  let n = E(),
    t = {};
  try {
    t = JSON.parse(localStorage[n] || "{}");
  } catch {}
  let o = { ...t, ...e };
  for (let a of m(o)) p.getInitial(a) === o[a] && delete o[a];
  try {
    (Object.keys(o).length === 0
      ? localStorage.removeItem(n)
      : localStorage.setItem(n, JSON.stringify(o)),
      B(m(e)));
  } catch {}
}
function B(e) {
  if (typeof window > "u") return;
  try {
    let o = JSON.parse(sessionStorage.getItem("experiments") || "{}");
    for (let a of e) delete o[a];
    Object.keys(o).length === 0
      ? sessionStorage.removeItem("experiments")
      : sessionStorage.setItem("experiments", JSON.stringify(o));
  } catch {}
  let n = new URL(window.location.href),
    t = n.searchParams.getAll("experiment").filter((o) => !e.some((a) => a === o.split("=")[0]));
  n.searchParams.delete("experiment");
  for (let o of t) n.searchParams.append("experiment", o);
  window.history.replaceState(window.history.state, "", n.href);
}
export {
  K as a,
  S as b,
  q as c,
  v as d,
  R as e,
  O as f,
  c as g,
  Q as h,
  Y as i,
  ee as j,
  p as k,
  se as l,
  G as m,
  fe as n,
  le as o,
};
//# sourceMappingURL=chunk-MVUU2KKE.mjs.map
