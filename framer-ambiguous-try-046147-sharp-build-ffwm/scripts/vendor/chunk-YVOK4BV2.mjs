var p = "--framer-will-change-override",
  a = "--framer-will-change-effect-override",
  g = "--framer-will-change-filter-override",
  s = "--overflow-clip-fallback",
  B = "--one-if-corner-shape-supported";
var w = "--list-style-type",
  l = "--max-list-digits";
function C(e, o, t) {
  let n = e + Math.max(o, 1) - 1;
  switch (t) {
    case "decimal":
      return i(n);
    case "lower-alpha":
    case "upper-alpha":
    case "lower-latin":
    case "upper-latin":
      return d(n);
    case "lower-roman":
    case "upper-roman":
      return h(n);
    default:
      return i(n);
  }
}
function i(e) {
  return String(e).length;
}
function d(e) {
  let o = 1;
  for (; c(o) < e;) o++;
  return o;
}
function c(e) {
  let o = 0;
  for (let t = 0; t < e; t++) o += 26 ** (t + 1);
  return o;
}
var f = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888];
function h(e) {
  let o = 0;
  for (let n of f) {
    if (e < n) return o;
    o++;
  }
  let t = Math.floor((e - 888) / 1e3);
  return t >= 1 ? Math.max(o, t + 12) : o;
}
var u = ((r) => (
  (r.Padding = "--framer-input-padding"),
  (r.BorderRadiusTopLeft = "--framer-input-border-radius-top-left"),
  (r.BorderRadiusTopRight = "--framer-input-border-radius-top-right"),
  (r.BorderRadiusBottomRight = "--framer-input-border-radius-bottom-right"),
  (r.BorderRadiusBottomLeft = "--framer-input-border-radius-bottom-left"),
  (r.CornerShape = "--framer-input-corner-shape"),
  (r.BorderColor = "--framer-input-border-color"),
  (r.BorderTopWidth = "--framer-input-border-top-width"),
  (r.BorderRightWidth = "--framer-input-border-right-width"),
  (r.BorderBottomWidth = "--framer-input-border-bottom-width"),
  (r.BorderLeftWidth = "--framer-input-border-left-width"),
  (r.BorderStyle = "--framer-input-border-style"),
  (r.Background = "--framer-input-background"),
  (r.FontFamily = "--framer-input-font-family"),
  (r.FontWeight = "--framer-input-font-weight"),
  (r.FontSize = "--framer-input-font-size"),
  (r.FontColor = "--framer-input-font-color"),
  (r.FontStyle = "--framer-input-font-style"),
  (r.FontLetterSpacing = "--framer-input-font-letter-spacing"),
  (r.FontTextAlignment = "--framer-input-font-text-alignment"),
  (r.FontLineHeight = "--framer-input-font-line-height"),
  (r.FontOpenType = "--framer-input-font-open-type-features"),
  (r.FontVariationAxes = "--framer-input-font-variation-axes"),
  (r.PlaceholderColor = "--framer-input-placeholder-color"),
  (r.BoxShadow = "--framer-input-box-shadow"),
  (r.FocusedBorderColor = "--framer-input-focused-border-color"),
  (r.FocusedBorderWidth = "--framer-input-focused-border-width"),
  (r.FocusedBorderStyle = "--framer-input-focused-border-style"),
  (r.FocusedBackground = "--framer-input-focused-background"),
  (r.FocusedBoxShadow = "--framer-input-focused-box-shadow"),
  (r.FocusedTransition = "--framer-input-focused-transition"),
  (r.BooleanCheckedBackground = "--framer-input-boolean-checked-background"),
  (r.BooleanCheckedBorderColor = "--framer-input-boolean-checked-border-color"),
  (r.BooleanCheckedBorderWidth = "--framer-input-boolean-checked-border-width"),
  (r.BooleanCheckedBorderStyle = "--framer-input-boolean-checked-border-style"),
  (r.BooleanCheckedBoxShadow = "--framer-input-boolean-checked-box-shadow"),
  (r.BooleanCheckedTransition = "--framer-input-boolean-checked-transition"),
  (r.InvalidTextColor = "--framer-input-invalid-text-color"),
  (r.IconBackgroundImage = "--framer-input-icon-image"),
  (r.IconMaskImage = "--framer-input-icon-mask-image"),
  (r.IconColor = "--framer-input-icon-color"),
  (r.IconContent = "--framer-input-icon-content"),
  (r.WrapperHeight = "--framer-input-wrapper-height"),
  r
))(u || {});
export { p as a, a as b, g as c, s as d, B as e, u as f, w as g, l as h, C as i };
//# sourceMappingURL=chunk-YVOK4BV2.mjs.map
