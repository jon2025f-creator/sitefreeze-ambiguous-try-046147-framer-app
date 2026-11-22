var n = (t) => t.stopPropagation();
function i() {
  let { activeElement: t } = document;
  if (t instanceof HTMLIFrameElement && t.contentWindow)
    try {
      t = t.contentWindow.document.activeElement;
    } catch (e) {
      if (e instanceof DOMException) return !0;
      throw e;
    }
  return t ? t.nodeName === "INPUT" || t.nodeName === "TEXTAREA" || t.isContentEditable : !1;
}
export { i as a, n as b };
//# sourceMappingURL=chunk-R2S4D7RI.mjs.map
