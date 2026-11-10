import { a as c } from "chunk-UZNETSBG.mjs";
import { a as s } from "chunk-KASGXAVV.mjs";
import { a as S, d as y } from "chunk-HPV3KV4H.mjs";
import { a as p } from "chunk-EQBCTBZ3.mjs";
import { b as v, i as d, r as m } from "chunk-5EE7LLRA.mjs";
function u(e, n) {
  let t = new Set(e);
  return (t.add("on"), t.add("off"), { variants: [...t], value: n });
}
var E = {};
function H(e) {
  return E[e];
}
function I(e) {
  let n = {};
  for (let t in e) {
    let o = e[t];
    if (typeof o == "object") ((n[t] = o.value), (E[t] = o.variants));
    else if (typeof o == "string") n[t] = o;
    else throw Error(`Invalid experiment value: ${o}`);
  }
  return n;
}
var g = I({
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
    agentAlphaModels: "on",
    agentBranchScriptApi: "on",
    agentChatSuggestions: "off",
    agentChatVirtualization: "off",
    agentComments: "off",
    agentContextRow: "on",
    agentControls: "off",
    agentCRDTChangelog: "off",
    agentCustomCode: "off",
    agentFramerConvertTriggers: "off",
    agentGeneratedShaders: "off",
    agentGPT6SolLunaViaOpenRouter: "off",
    agenticAnalyticsV2: "off",
    agentIconSetIds: "on",
    agentIntegrationProfound: "off",
    agentIntegrations: "off",
    agentLocalization: "off",
    agentLocalizationInWorker: "off",
    agentModelSpecificChecklist: "on",
    agentNodeAttributeChangeTracking: "off",
    agentRating: "off",
    agentScriptComponentLookup: "on",
    agentStaticFiles: "off",
    agentStyleOnSelect: "off",
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
    aiCreditsOneTimeWithoutAddOn: "off",
    alignLocalizationAiModelPicker: "off",
    analyticsFunnelGroupBy: "off",
    apps: "off",
    appShortcutsWhileEditingText: "on",
    ariaProperties: "on",
    automations: "off",
    bulkHierarchyRehydrate: "off",
    canvasPerfImperativeCamera: "off",
    canvasPerfSkipSelectionPostProcess: "off",
    canvasRepeatSelection: "off",
    canvasSwitch: "off",
    canvasTreeCrdtDriver: "off",
    carouselEffect: "off",
    chatGPTPlan: "off",
    checkoutDrawer: "off",
    checkServerSideRouter: "on",
    clientModuleIds: "off",
    cmsCodeGenWorker: "off",
    cmsDatabase: "off",
    cmsMultiplayerCursors: "on",
    cmsSandboxRpc: "off",
    cmsTablePlaceholderRow: "on",
    codeLinkPlugin: "off",
    codingAgentModelSelect: "off",
    collectionLocalModuleImportMapEntries: "off",
    componentRichTextContentOverlay: "on",
    componentSlotsAreChildNodes: "off",
    confirmInviteSeats: "off",
    crdtTreeEditUndo: "off",
    debugEditWhileLoadingRuntimeChecks: "off",
    deferCastleUntilLoaded: "on",
    deferMeasureWhileLoadingModules: "off",
    deferModulesUntilImported: "off",
    deferNonVisibleModuleEvaluation: "off",
    deferPreviewModulesUntilRequested: "off",
    disableHoverOnMobile: "off",
    domainsRedesign: "off",
    dummyTest: "off",
    editorBarDisableFrameAncestorsSecurity: "off",
    effectsInDesignPages: "off",
    externalVectorIcons: "on",
    fastLargeSelection: "on",
    fastLocalization: "off",
    fastPreview: "off",
    fastPreviewLazy: "off",
    fastTreeLibrary: "on",
    fixedSizeImageSrcset: "off",
    granularPermissions: "off",
    harness2: "off",
    hideLoadedOffscreenGroundNodes: "on",
    hideNestedLinkWarnings: "on",
    imageGeneration: "off",
    importMapPruning: "off",
    jsonRichTextStorage: u(["cms", "canvas,cms"], "cms"),
    layeredModuleRevisionHint: "off",
    layersVirtualization: "on",
    layoutScroll: "off",
    lazyAgentModule: "off",
    lazyCodeBlockLanguages: "off",
    lazySmartComponentLocales: "on",
    liveZoomStepScaleFactor: "on",
    localCacheSyncWorker: "off",
    localizationModelUpdate: "on",
    localizationProgressSummaries: "off",
    localizationTreeControls: "off",
    localizationUiUpdate: "on",
    localizationWaitsForAllModules: "off",
    localizedLinks: "off",
    locationControl: "off",
    locationTriggerConditions: "on",
    motionDivToDiv: "off",
    noNodeSetters: "off",
    objectVariables: "off",
    onlyMonthlyBandwidthAddOn: "on",
    paneEdgeDoubleClickReset: "on",
    passkeys: "off",
    pasteStyleMatching: "off",
    pathRadiusSmoothing: "on",
    persistDataTreeAcrossFrames: u(["persistOnWrite"], "off"),
    phonePlansPage: "on",
    pinnedWorkspaces: "off",
    prefetchEditorFromDashboard: "off",
    preloadLoaderScheduling: "on",
    preventVariableDeletion: "on",
    previewSharing: "off",
    prioritizedInitialModuleEvaluation: "on",
    prioritizeFirstInitializedModulesUpdate: "off",
    projectAuditSkill: "off",
    publishingRecoveryProgress: "off",
    publishStaleModuleErrors: "off",
    quietCanvasImageUploads: "off",
    raindropSelfDiagnostics: "on",
    rebaseBranches: "off",
    reconnectInPlace: "on",
    recoverStaleModules: u(["withPagesAndTemplates"], "off"),
    replaceCanvasTreeWithDataTree: "off",
    richTextBlockSelection: "on",
    richTextVideoModule: "on",
    scopedComponentElementIds: "on",
    scrollRestoration: "on",
    showCanonicalUrlAsDefault: "off",
    siteCustomLogin: "off",
    siteFramerLogin: "off",
    skipPublishingLocalesFallingBackToDraft: "on",
    skipValueDedupeScan: "off",
    slabLatestMap: "off",
    smartComponentResolvesOwnDefaults: "off",
    synchronousNavigationOnDesktop: "off",
    textBalanceRequiresWrap: "off",
    transientLocalModuleTreeData: "off",
    translateAllProgressToast: "off",
    translationTransforms: "off",
    treeStateGroundId: "off",
    treeStoreReadsUpdaterTree: "off",
    unifiedStackActions: "on",
    verifyTreeOnCommit: "off",
    yieldOnTap: "off",
    yieldThirdPartyScripts: "on",
  }),
  U = [
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
    "lazyCodeBlockLanguages",
    "noNodeSetters",
    "replaceCanvasTreeWithDataTree",
    "treeStoreReadsUpdaterTree",
  ];
function K(e) {
  return U.includes(e);
}
var h = {
    agentChatVirtualization: "on",
    agentCustomCode: "on",
    agentGeneratedShaders: "on",
    agentLocalization: "on",
    agentStyleOnSelect: "on",
    agentUseOpenAIResponsesWebSocket: "on",
    bulkHierarchyRehydrate: "on",
    canvasPerfImperativeCamera: "on",
    canvasPerfSkipSelectionPostProcess: "on",
    cmsCodeGenWorker: "on",
    codeLinkPlugin: "on",
    codingAgentModelSelect: "on",
    crdtTreeEditUndo: "on",
    debugEditWhileLoadingRuntimeChecks: "on",
    deferModulesUntilImported: "on",
    fastLocalization: "on",
    jsonRichTextStorage: "canvas,cms",
    layoutScroll: "on",
    lazyCodeBlockLanguages: "on",
    noNodeSetters: "on",
    pasteStyleMatching: "on",
    persistDataTreeAcrossFrames: "on",
    pinnedWorkspaces: "on",
    prefetchEditorFromDashboard: "on",
    quietCanvasImageUploads: "on",
    slabLatestMap: "on",
    smartComponentResolvesOwnDefaults: "on",
    treeStoreReadsUpdaterTree: "on",
  },
  T = {
    addViewBox: "on",
    "agent-2026-w37": "on",
    "agent-2026-w38": "on",
    agentControls: "on",
    agentCRDTChangelog: "on",
    agentFramerConvertTriggers: "on",
    agenticAnalyticsV2: "on",
    agentIntegrationProfound: "on",
    agentIntegrations: "on",
    agentStaticFiles: "on",
    agentTsdocApi: "on",
    agentVersionHistory: "on",
    alignLocalizationAiModelPicker: "on",
    automations: "on",
    canvasRepeatSelection: "on",
    carouselEffect: "on",
    checkoutDrawer: "on",
    clientModuleIds: "on",
    deferMeasureWhileLoadingModules: "on",
    deferNonVisibleModuleEvaluation: "on",
    disableHoverOnMobile: "on",
    domainsRedesign: "on",
    effectsInDesignPages: "on",
    fastPreview: "on",
    harness2: "on",
    imageGeneration: "on",
    layeredModuleRevisionHint: "on",
    lazyAgentModule: "on",
    localCacheSyncWorker: "on",
    localizationTreeControls: "on",
    localizedLinks: "on",
    motionDivToDiv: "on",
    passkeys: "on",
    prioritizeFirstInitializedModulesUpdate: "on",
    projectAuditSkill: "on",
    recoverStaleModules: "withPagesAndTemplates",
    synchronousNavigationOnDesktop: "on",
    textBalanceRequiresWrap: "on",
    translateAllProgressToast: "on",
    translationTransforms: "on",
    verifyTreeOnCommit: "on",
    yieldOnTap: "on",
  },
  w = {
    agentChatSuggestions: { sample: 1, scope: "User", includeEnterprise: !1, variant: "on" },
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
    aiCreditsOneTimeWithoutAddOn: {
      sample: 0.5,
      scope: "User",
      includeEnterprise: !1,
      variant: "on",
    },
    checkoutDrawer: { sample: 1, scope: "User", includeEnterprise: !1, variant: "on" },
    cmsCodeGenWorker: {
      sample: 1,
      scope: "Project",
      includeEnterprise: !1,
      channels: ["stable"],
      variant: "on",
    },
    crdtTreeEditUndo: {
      sample: 1,
      scope: "Project",
      includeEnterprise: !1,
      channels: ["stable"],
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
    jsonRichTextStorage: {
      sample: 1,
      scope: "Project",
      includeEnterprise: !1,
      channels: ["stable"],
      variant: "canvas,cms",
    },
    persistDataTreeAcrossFrames: {
      sample: 0.1,
      scope: "Project",
      includeEnterprise: !1,
      channels: ["stable"],
      variant: "on",
    },
    slabLatestMap: {
      sample: 1,
      scope: "Project",
      includeEnterprise: !1,
      channels: ["stable"],
      variant: "on",
    },
  };
var M = 4294967295,
  a = {
    hashes: { Project: null, Team: null, User: null },
    isEnterprise: { Project: null, Team: null, User: null },
    channel: null,
  };
function Z(e) {
  ((a.isEnterprise.Project = e.license.type === "enterpriseSite"), (a.hashes.Project = s(e.id)));
}
function b(e) {
  ((a.isEnterprise.User = e.spaces.some((n) => n.license?.type === "enterprise")),
    (a.hashes.User = s(e.id)));
}
function Q(e, n) {
  ((a.isEnterprise.Team = n === "enterprise"), (a.hashes.Team = s(e)));
}
function Y(e) {
  a.channel = e;
}
function A(e, { sample: n, scope: t, variant: o, includeEnterprise: r, channels: i }) {
  if (i)
    if (a.channel) {
      if (!i.includes(a.channel)) return !1;
    } else return !1;
  let f = n * M,
    P = s(e),
    k = s(o);
  return m(a.hashes[t]) || m(a.isEnterprise[t]) || (!r && a.isEnterprise[t])
    ? !1
    : (a.hashes[t] ^ P ^ k) >>> 0 < f;
}
function O(e = w) {
  let n = {};
  return (
    Object.keys(e).forEach((t) => {
      if (!e[t]) return;
      let o = d(e[t]) ? e[t] : [e[t]];
      for (let r of o) {
        if (!A(t, r)) continue;
        n[t] = r.variant;
        let i = r.dependencies ?? [];
        if (d(i)) for (let f of i) n[f] = r.variant;
        else Object.assign(n, i);
        break;
      }
    }),
    n
  );
}
typeof window < "u" && window.framerUser && b(window.framerUser);
var l = new y(F());
l.update(C());
var N = [];
function ie() {
  let e = {};
  for (let n of N) e[`experiment_${n}`] = l.isOn(n);
  return e;
}
function x() {
  if (typeof window > "u") return "experiments";
  let e = p(window)?.channel;
  return e ? `experiments-${e}` : "experiments";
}
function R() {
  let e = {};
  if (typeof window > "u") return {};
  let n = p(window);
  if (!n) return e;
  let { channel: t, override: o } = n,
    r = o === "tunnel" && S.isDevelopment;
  return (
    (t === "alpha" || t === "local" || r) && Object.assign(e, h, T),
    t === "beta" && Object.assign(e, h),
    e
  );
}
function D() {
  let e = {};
  try {
    let n = JSON.parse(localStorage[x()] || "{}");
    Object.assign(e, n);
  } catch {}
  return e;
}
function j() {
  if (typeof window > "u") return {};
  if (!W(window)) return {};
  try {
    return JSON.parse(window.experiments);
  } catch {}
  return {};
}
function W(e) {
  return "experiments" in e && v(e.experiments);
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
function V() {
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
function F() {
  return { ...g, ...R() };
}
function se({ resetStorage: e, resetSession: n } = {}) {
  if (!(typeof window > "u")) {
    if ((e && localStorage.removeItem(x()), n)) {
      sessionStorage.removeItem("experiments");
      let t = new URL(window.location.href);
      (t.searchParams.delete("experiment"),
        window.history.replaceState(window.history.state, "", t.href));
    }
    l.update({ ...g, ...C() });
  }
}
function C() {
  return { ...O(), ...R(), ...D(), ...j(), ...V() };
}
typeof window < "u" && window.localStorage.removeItem("useThemeLogo");
function le(e) {
  let n = x(),
    t = {};
  try {
    t = JSON.parse(localStorage[n] || "{}");
  } catch {}
  let o = { ...t, ...e };
  for (let r of c(o)) l.getInitial(r) === o[r] && delete o[r];
  try {
    (Object.keys(o).length === 0
      ? localStorage.removeItem(n)
      : localStorage.setItem(n, JSON.stringify(o)),
      G(c(e)));
  } catch {}
}
function G(e) {
  if (typeof window > "u") return;
  try {
    let o = JSON.parse(sessionStorage.getItem("experiments") || "{}");
    for (let r of e) delete o[r];
    Object.keys(o).length === 0
      ? sessionStorage.removeItem("experiments")
      : sessionStorage.setItem("experiments", JSON.stringify(o));
  } catch {}
  let n = new URL(window.location.href),
    t = n.searchParams.getAll("experiment").filter((o) => !e.some((r) => r === o.split("=")[0]));
  n.searchParams.delete("experiment");
  for (let o of t) n.searchParams.append("experiment", o);
  window.history.replaceState(window.history.state, "", n.href);
}
export {
  H as a,
  g as b,
  K as c,
  h as d,
  T as e,
  w as f,
  Z as g,
  Q as h,
  Y as i,
  l as j,
  ie as k,
  F as l,
  se as m,
  le as n,
};
//# sourceMappingURL=chunk-ASMHRHTH.mjs.map
