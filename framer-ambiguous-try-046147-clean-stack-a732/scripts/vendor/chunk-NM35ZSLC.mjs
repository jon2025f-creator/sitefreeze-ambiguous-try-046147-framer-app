import { o } from "chunk-3X2EKS3V.mjs";
function r(t) {
  return o.isAutomation ? t : `/s/app.${globalThis.framerBuildInfo.buildId}/${t}`;
}
function e(t) {
  let { host: n } = window.location;
  return `//${n}${r(t)}`;
}
export { r as a, e as b };
//# sourceMappingURL=chunk-NM35ZSLC.mjs.map
