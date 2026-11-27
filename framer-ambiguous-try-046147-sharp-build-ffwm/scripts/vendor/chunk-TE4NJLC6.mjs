var r = [];
function a(e) {
  return (
    r.push(e),
    function () {
      r = r.filter((i) => e !== i);
    }
  );
}
function p(e, t) {
  r.forEach((i) => i(e, t));
}
var n = new Map([["appVersion", String(globalThis.framerBuildInfo.version)]]),
  s,
  o = globalThis.crashReport;
o?.initialize(1024).then(
  () => {
    s = o;
    for (let [e, t] of n) o.set(e, t);
    n.clear();
  },
  () => {
    n.clear();
  }
);
function u(e, t) {
  s ? s.set(e, String(t)) : o && n.set(e, String(t));
}
function h(e) {
  return Math.round(e / 1024 / 1024);
}
function l() {
  return Math.floor(performance.now() / 6e4);
}
export { a, p as b, u as c, h as d, l as e };
//# sourceMappingURL=chunk-TE4NJLC6.mjs.map
