import { o as s } from "chunk-K4MAAOA5.mjs";
import { b as c } from "chunk-4JY5UMT2.mjs";
var r = {
    lessThanXSeconds: "{{count}}s",
    xSeconds: "{{count}}s",
    halfAMinute: "30s",
    lessThanXMinutes: "{{count}}m",
    xMinutes: "{{count}}m",
    aboutXHours: "{{count}}h",
    xHours: "{{count}}h",
    xDays: "{{count}}d",
    aboutXWeeks: "{{count}}w",
    xWeeks: "{{count}}w",
    aboutXMonths: "{{count}}mo",
    xMonths: "{{count}}mo",
    aboutXYears: "{{count}}y",
    xYears: "{{count}}y",
    overXYears: "{{count}}y",
    almostXYears: "{{count}}y",
  },
  u = (e) => e in r,
  l = (e) =>
    e === "lessThanXSeconds" || e === "xSeconds" || e === "halfAMinute" || e === "lessThanXMinutes";
function i(e) {
  return (o, n, t) => {
    if (((t = t || {}), c(u(o), "Token should have correct value"), e && l(o))) return "Just now";
    let a = r[o].replace("{{count}}", String(n));
    return t.addSuffix ? (t.comparison && t.comparison > 0 ? "in " + a : a + " ago") : a;
  };
}
function D(e, o, n = Date.now()) {
  return ((o = o || {}), s(e, n, { ...o, locale: { ...o.locale, formatDistance: i(o.justNow) } }));
}
export { D as a };
//# sourceMappingURL=chunk-HR7IR2NY.mjs.map
