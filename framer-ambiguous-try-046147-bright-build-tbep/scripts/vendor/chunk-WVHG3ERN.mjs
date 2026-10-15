import { a as i, b as a } from "chunk-5F7FIDUS.mjs";
import { j as r } from "chunk-ZS2L5D6F.mjs";
var t = {
  demoAnalytics: "off",
  disableAIAgentMessageRedaction: "off",
  disableLazyModuleLoading: "off",
  disablePartialDocumentLoading: "off",
  editableLegacyProjects: "off",
  moduleTools: "off",
  openPrimaryForBuiltInModules: "on",
  sandboxExportDebugging: "off",
  sandboxNodeDebugging: "off",
  showAdditionalAutosaves: "off",
  showDOMLayoutDebuggingPanel: "off",
  showErrorForOutdatedBuiltInModules: "on",
  showImportMap: "off",
  showDebugBar: "off",
  showStatusBar: "on",
  suppressDocumentLoading: "off",
  suppressUIMount: "off",
  userIsViewer: "off",
};
var l = Object.fromEntries(Object.keys(t).map((e) => [e, "off"])),
  s = new r(l);
s.update(f());
var g = i(s);
function d(e) {
  return a(s, e, (o) => o === "on");
}
function f() {
  if (globalThis?.framerUser?.isFramerEmployee !== !0) return {};
  let o = { ...t };
  try {
    let n = JSON.parse(localStorage.employeesOnlySettings || "{}");
    Object.assign(o, n);
  } catch {}
  return o;
}
export { t as a, s as b, g as c, d };
//# sourceMappingURL=chunk-WVHG3ERN.mjs.map
