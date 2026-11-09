import {
  Od as En,
  cd as mn,
  ld as k,
  md as v,
  od as xn,
  pd as Sn,
  qd as yn,
} from "chunk-JR7AR6TC.mjs";
import { a as Tn } from "chunk-SMHMQ5IL.mjs";
import { j as gn } from "chunk-ASMHRHTH.mjs";
import { o as H } from "chunk-MUEZJ6DD.mjs";
import { i as un } from "chunk-WBI6GGAG.mjs";
var A = un("tree-library");
function Cn(n) {
  ((this.master = n.master),
    n.inheritsFrom && (this.inheritsFrom = n.inheritsFrom),
    (this.overrides = nn(n.overrides)));
}
Cn.prototype = Object.prototype;
function Nn() {}
Nn.prototype = Object.prototype;
function In(n) {
  return Reflect.construct(Cn, [n]);
}
function nn(n) {
  if (n === null || typeof n != "object") return n;
  if (Array.isArray(n)) return Gt(n);
  if (typeof n == "object") {
    let t = Reflect.construct(Nn, []);
    for (let p in n) {
      let r = n[p];
      p === "styledText" &&
      r &&
      (typeof r == "object" || typeof r == "function") &&
      "toJS" in r &&
      typeof r.toJS == "function"
        ? (t[p] = r.toJS())
        : (t[p] = nn(r));
    }
    return t;
  }
  return n;
}
function Gt(n) {
  let t = new Array();
  for (let p = 0; p < n.length; p++) t[p] = nn(n[p]);
  return t;
}
function e(n, t) {
  ((n.duplicatedFrom = t.duplicatedFrom),
    (n.id = t.id),
    (n.name = t.name),
    (n.originalid = t.originalid),
    (n.parentid = t.parentid),
    (n.visible = t.visible));
}
function o(n, t) {
  if (t.replicaInfo) n.children = [];
  else if (t.children) {
    let p = (n.children = []);
    for (let r of t.children) p.push(P(r));
  }
}
function s(n, t) {
  ((n.moduleSourceRevision = t.moduleSourceRevision),
    (n.moduleSourceRevisionCommittedHint = t.moduleSourceRevisionCommittedHint),
    (n.moduleSourceRevisionHint = t.moduleSourceRevisionHint));
}
function f(n, t) {
  n.radius = t.radius;
}
function a(n, t) {
  ((n.height = t.height), (n.locked = t.locked), (n.opacity = t.opacity), (n.width = t.width));
}
function d(n, t) {
  ((n.position = t.position),
    (n.positionStickyBottom = t.positionStickyBottom),
    (n.positionStickyLeft = t.positionStickyLeft),
    (n.positionStickyRight = t.positionStickyRight),
    (n.positionStickyTop = t.positionStickyTop));
}
function l(n, t) {
  ((n.fillColor = t.fillColor),
    (n.fillConicGradient = t.fillConicGradient),
    (n.fillLinearGradient = t.fillLinearGradient),
    (n.fillRadialGradient = t.fillRadialGradient),
    (n.fillType = t.fillType));
}
function T(n, t) {
  ((n.radiusBottomLeft = t.radiusBottomLeft),
    (n.radiusBottomRight = t.radiusBottomRight),
    (n.radiusPerCorner = t.radiusPerCorner),
    (n.radiusTopLeft = t.radiusTopLeft),
    (n.radiusTopRight = t.radiusTopRight));
}
function c(n, t) {
  n.aspectRatio = t.aspectRatio;
}
function h(n, t) {
  n.fillEnabled = t.fillEnabled;
}
function w(n, t) {
  n.boxShadows = t.boxShadows;
}
function u(n, t) {
  n.exportOptions = t.exportOptions;
}
function y(n, t) {
  n.cornerShape = t.cornerShape;
}
function g(n, t) {
  n.rotation = t.rotation;
}
function E(n, t) {
  ((n.borderBottom = t.borderBottom),
    (n.borderColor = t.borderColor),
    (n.borderEnabled = t.borderEnabled),
    (n.borderLeft = t.borderLeft),
    (n.borderPerSide = t.borderPerSide),
    (n.borderRight = t.borderRight),
    (n.borderStyle = t.borderStyle),
    (n.borderTop = t.borderTop),
    (n.borderWidth = t.borderWidth));
}
function x(n, t) {
  ((n.fillImage = t.fillImage),
    (n.fillImageOriginalName = t.fillImageOriginalName),
    (n.fillImagePixelHeight = t.fillImagePixelHeight),
    (n.fillImagePixelWidth = t.fillImagePixelWidth),
    (n.fillImagePositionX = t.fillImagePositionX),
    (n.fillImagePositionY = t.fillImagePositionY),
    (n.fillImageResize = t.fillImageResize),
    (n.fillImageTileSize = t.fillImageTileSize));
}
function S(n, t) {
  n.zIndex = t.zIndex;
}
function C(n, t) {
  ((n.bottom = t.bottom),
    (n.centerAnchorX = t.centerAnchorX),
    (n.centerAnchorY = t.centerAnchorY),
    (n.constraintsLocked = t.constraintsLocked),
    (n.gridItemColumnSpan = t.gridItemColumnSpan),
    (n.gridItemHorizontalAlignment = t.gridItemHorizontalAlignment),
    (n.gridItemRowSpan = t.gridItemRowSpan),
    (n.gridItemVerticalAlignment = t.gridItemVerticalAlignment),
    (n.heightType = t.heightType),
    (n.left = t.left),
    (n.right = t.right),
    (n.top = t.top),
    (n.widthType = t.widthType));
}
function N(n, t) {
  n.tabIndex = t.tabIndex;
}
function I(n, t) {
  ((n.backgroundBlur = t.backgroundBlur),
    (n.blur = t.blur),
    (n.brightness = t.brightness),
    (n.contrast = t.contrast),
    (n.grayscale = t.grayscale),
    (n.gridItemFillCellHeight = t.gridItemFillCellHeight),
    (n.gridItemFillCellWidth = t.gridItemFillCellWidth),
    (n.hueRotate = t.hueRotate),
    (n.invert = t.invert),
    (n.saturate = t.saturate),
    (n.sepia = t.sepia));
}
function R(n, t) {
  n.radiusIsRelative = t.radiusIsRelative;
}
function z(n, t) {
  n.pointerEvents = t.pointerEvents;
}
function _(n, t) {
  ((n.blendingMode = t.blendingMode),
    (n.maxHeight = t.maxHeight),
    (n.maxWidth = t.maxWidth),
    (n.minHeight = t.minHeight),
    (n.minWidth = t.minWidth));
}
function B(n, t) {
  ((n.cursor = t.cursor),
    (n.customCursorAlignment = t.customCursorAlignment),
    (n.customCursorFollow = t.customCursorFollow),
    (n.customCursorOffsetX = t.customCursorOffsetX),
    (n.customCursorOffsetY = t.customCursorOffsetY),
    (n.customCursorPlacement = t.customCursorPlacement),
    (n.customCursorSmartComponentId = t.customCursorSmartComponentId),
    (n.customCursorTransition = t.customCursorTransition),
    (n.customCursorTransitionEnabled = t.customCursorTransitionEnabled),
    (n.customCursorType = t.customCursorType),
    (n.customCursorVariant = t.customCursorVariant),
    (n.masks = t.masks));
}
function O(n, t) {
  ((n.codeOverrideEnabled = t.codeOverrideEnabled),
    (n.codeOverrideIdentifier = t.codeOverrideIdentifier));
}
function b(n, t) {
  ((n.x = t.x), (n.y = t.y));
}
function M(n, t) {
  ((n.guidesX = t.guidesX), (n.guidesY = t.guidesY));
}
function L(n, t) {
  n.variables = t.variables;
}
function V(n, t) {
  ((n.padding = t.padding),
    (n.paddingBottom = t.paddingBottom),
    (n.paddingLeft = t.paddingLeft),
    (n.paddingPerSide = t.paddingPerSide),
    (n.paddingRight = t.paddingRight),
    (n.paddingTop = t.paddingTop));
}
function F(n, t) {
  ((n.fillOpacity = t.fillOpacity),
    (n.lineCap = t.lineCap),
    (n.lineJoin = t.lineJoin),
    (n.strokeAlignment = t.strokeAlignment),
    (n.strokeColor = t.strokeColor),
    (n.strokeDashArray = t.strokeDashArray),
    (n.strokeDashOffset = t.strokeDashOffset),
    (n.strokeEffectEnabled = t.strokeEffectEnabled),
    (n.strokeEffectGap = t.strokeEffectGap),
    (n.strokeEffectLength = t.strokeEffectLength),
    (n.strokeEffectLoop = t.strokeEffectLoop),
    (n.strokeEffectLoopType = t.strokeEffectLoopType),
    (n.strokeEffectOffset = t.strokeEffectOffset),
    (n.strokeEffectTransition = t.strokeEffectTransition),
    (n.strokeEnabled = t.strokeEnabled),
    (n.strokeMiterLimit = t.strokeMiterLimit),
    (n.strokeWidth = t.strokeWidth));
}
function Y(n, t) {
  n.path = t.path;
}
function X(n, t) {
  ((n.parallaxAdjustPosition = t.parallaxAdjustPosition),
    (n.parallaxEnabled = t.parallaxEnabled),
    (n.parallaxOffset = t.parallaxOffset),
    (n.parallaxSpeed = t.parallaxSpeed));
}
function D(n, t) {
  n.transition = t.transition;
}
function W(n, t) {
  n.userSelect = t.userSelect;
}
function q(n, t) {
  n.description = t.description;
}
function U(n, t) {
  n.codeOverrides = t.codeOverrides;
}
function G(n, t) {
  ((n.isExternalMaster = t.isExternalMaster),
    (n.isMaster = t.isMaster),
    (n.replicaInfo = t.replicaInfo ? In(t.replicaInfo) : null));
}
function $(n, t) {
  ((n.elementId = t.elementId),
    (n.enterEffectEnabled = t.enterEffectEnabled),
    (n.enterEffectOpacity = t.enterEffectOpacity),
    (n.enterEffectPerspective = t.enterEffectPerspective),
    (n.enterEffectRotate = t.enterEffectRotate),
    (n.enterEffectRotate3d = t.enterEffectRotate3d),
    (n.enterEffectRotateAdditiveDynamicValue = t.enterEffectRotateAdditiveDynamicValue),
    (n.enterEffectRotateX = t.enterEffectRotateX),
    (n.enterEffectRotateY = t.enterEffectRotateY),
    (n.enterEffectScale = t.enterEffectScale),
    (n.enterEffectSkewX = t.enterEffectSkewX),
    (n.enterEffectSkewY = t.enterEffectSkewY),
    (n.enterEffectTransition = t.enterEffectTransition),
    (n.enterEffectX = t.enterEffectX),
    (n.enterEffectY = t.enterEffectY),
    (n.exitEffectEnabled = t.exitEffectEnabled),
    (n.exitEffectOpacity = t.exitEffectOpacity),
    (n.exitEffectPerspective = t.exitEffectPerspective),
    (n.exitEffectRotate = t.exitEffectRotate),
    (n.exitEffectRotate3d = t.exitEffectRotate3d),
    (n.exitEffectRotateAdditiveDynamicValue = t.exitEffectRotateAdditiveDynamicValue),
    (n.exitEffectRotateX = t.exitEffectRotateX),
    (n.exitEffectRotateY = t.exitEffectRotateY),
    (n.exitEffectScale = t.exitEffectScale),
    (n.exitEffectSkewX = t.exitEffectSkewX),
    (n.exitEffectSkewY = t.exitEffectSkewY),
    (n.exitEffectTransition = t.exitEffectTransition),
    (n.exitEffectX = t.exitEffectX),
    (n.exitEffectY = t.exitEffectY),
    (n.scrollMarginTop = t.scrollMarginTop),
    (n.scrollTargetEnabled = t.scrollTargetEnabled),
    (n.styleAppearEffectAnimateOnce = t.styleAppearEffectAnimateOnce),
    (n.styleAppearEffectEnabled = t.styleAppearEffectEnabled),
    (n.styleAppearEffectLocked = t.styleAppearEffectLocked),
    (n.styleAppearEffectOpacity = t.styleAppearEffectOpacity),
    (n.styleAppearEffectPerspective = t.styleAppearEffectPerspective),
    (n.styleAppearEffectRotate = t.styleAppearEffectRotate),
    (n.styleAppearEffectRotateX = t.styleAppearEffectRotateX),
    (n.styleAppearEffectRotateY = t.styleAppearEffectRotateY),
    (n.styleAppearEffectScale = t.styleAppearEffectScale),
    (n.styleAppearEffectScrollDirection = t.styleAppearEffectScrollDirection),
    (n.styleAppearEffectScrollTarget = t.styleAppearEffectScrollTarget),
    (n.styleAppearEffectScrollTargetCollectionItem = t.styleAppearEffectScrollTargetCollectionItem),
    (n.styleAppearEffectThreshold = t.styleAppearEffectThreshold),
    (n.styleAppearEffectTransition = t.styleAppearEffectTransition),
    (n.styleAppearEffectTrigger = t.styleAppearEffectTrigger),
    (n.styleAppearEffectX = t.styleAppearEffectX),
    (n.styleAppearEffectY = t.styleAppearEffectY),
    (n.styleTransformEffectEnabled = t.styleTransformEffectEnabled),
    (n.styleTransformEffectScrollTargets = t.styleTransformEffectScrollTargets),
    (n.styleTransformEffectTransition = t.styleTransformEffectTransition),
    (n.styleTransformEffectTransitionEnabled = t.styleTransformEffectTransitionEnabled),
    (n.styleTransformEffectTrigger = t.styleTransformEffectTrigger),
    (n.styleTransformEffectViewportThreshold = t.styleTransformEffectViewportThreshold));
}
function en(n, t) {
  ((n.bindingType = t.bindingType),
    (n.formInputAutoFocus = t.formInputAutoFocus),
    (n.formInputFocusedBackgroundColor = t.formInputFocusedBackgroundColor),
    (n.formInputFocusedBorderColor = t.formInputFocusedBorderColor),
    (n.formInputFocusedBorderStyle = t.formInputFocusedBorderStyle),
    (n.formInputFocusedBorderWidth = t.formInputFocusedBorderWidth),
    (n.formInputFocusedBoxShadow = t.formInputFocusedBoxShadow),
    (n.formInputFocusedTransition = t.formInputFocusedTransition),
    (n.formInputHidden = t.formInputHidden),
    (n.formInputIconColor = t.formInputIconColor),
    (n.formInputIconImage = t.formInputIconImage),
    (n.formInputName = t.formInputName),
    (n.formInputRequired = t.formInputRequired),
    (n.formInputValue = t.formInputValue),
    (n.onBlur = t.onBlur),
    (n.onFocus = t.onFocus),
    (n.onInvalid = t.onInvalid),
    (n.onValid = t.onValid),
    (n.variableBinding = t.variableBinding));
}
function on(n, t) {
  n.paragraphSpacing = t.paragraphSpacing;
}
function _n(n, t) {
  ((n.font = t.font),
    (n.fontSize = t.fontSize),
    (n.letterSpacing = t.letterSpacing),
    (n.lineHeight = t.lineHeight),
    (n.openTypeFontFeatures = t.openTypeFontFeatures),
    (n.textAlignment = t.textAlignment),
    (n.textBackgroundColor = t.textBackgroundColor),
    (n.textBackgroundCornerShape = t.textBackgroundCornerShape),
    (n.textBackgroundPadding = t.textBackgroundPadding),
    (n.textBackgroundRadius = t.textBackgroundRadius),
    (n.textColor = t.textColor),
    (n.textDecoration = t.textDecoration),
    (n.textDecorationColor = t.textDecorationColor),
    (n.textDecorationOffset = t.textDecorationOffset),
    (n.textDecorationSkipInk = t.textDecorationSkipInk),
    (n.textDecorationStyle = t.textDecorationStyle),
    (n.textDecorationThickness = t.textDecorationThickness),
    (n.textStrokeColor = t.textStrokeColor),
    (n.textStrokeWidth = t.textStrokeWidth),
    (n.textTransform = t.textTransform));
}
function Z(n, t) {
  ((n.intrinsicHeight = t.intrinsicHeight), (n.intrinsicWidth = t.intrinsicWidth));
}
function K(n, t) {
  ((n.backfaceVisibility = t.backfaceVisibility),
    (n.dragEffectConstraintElement = t.dragEffectConstraintElement),
    (n.dragEffectConstraintItem = t.dragEffectConstraintItem),
    (n.dragEffectEnabled = t.dragEffectEnabled),
    (n.dragEffectFreeform = t.dragEffectFreeform),
    (n.dragEffectMomentum = t.dragEffectMomentum),
    (n.dragEffectSnapBack = t.dragEffectSnapBack),
    (n.dragEffectTransition = t.dragEffectTransition),
    (n.draggable = t.draggable),
    (n.loopEffectEnabled = t.loopEffectEnabled),
    (n.loopEffectOpacity = t.loopEffectOpacity),
    (n.loopEffectPauseOffscreen = t.loopEffectPauseOffscreen),
    (n.loopEffectRepeatDelay = t.loopEffectRepeatDelay),
    (n.loopEffectRepeatType = t.loopEffectRepeatType),
    (n.loopEffectRotate = t.loopEffectRotate),
    (n.loopEffectRotate3d = t.loopEffectRotate3d),
    (n.loopEffectRotateX = t.loopEffectRotateX),
    (n.loopEffectRotateY = t.loopEffectRotateY),
    (n.loopEffectScale = t.loopEffectScale),
    (n.loopEffectSkewX = t.loopEffectSkewX),
    (n.loopEffectSkewY = t.loopEffectSkewY),
    (n.loopEffectTransition = t.loopEffectTransition),
    (n.loopEffectX = t.loopEffectX),
    (n.loopEffectY = t.loopEffectY),
    (n.perspective = t.perspective),
    (n.rotate3d = t.rotate3d),
    (n.rotateX = t.rotateX),
    (n.rotateY = t.rotateY),
    (n.scale = t.scale),
    (n.skewX = t.skewX),
    (n.skewY = t.skewY),
    (n.transformOriginX = t.transformOriginX),
    (n.transformOriginY = t.transformOriginY),
    (n.transformStylePreserve3d = t.transformStylePreserve3d),
    (n.translateX = t.translateX),
    (n.translateY = t.translateY),
    (n.translateZ = t.translateZ),
    (n.whileHoverBackgroundColor = t.whileHoverBackgroundColor),
    (n.whileHoverBoxShadow = t.whileHoverBoxShadow),
    (n.whileHoverEnabled = t.whileHoverEnabled),
    (n.whileHoverOpacity = t.whileHoverOpacity),
    (n.whileHoverRotate = t.whileHoverRotate),
    (n.whileHoverRotate3d = t.whileHoverRotate3d),
    (n.whileHoverRotateAdditiveDynamicValue = t.whileHoverRotateAdditiveDynamicValue),
    (n.whileHoverRotateX = t.whileHoverRotateX),
    (n.whileHoverRotateY = t.whileHoverRotateY),
    (n.whileHoverScale = t.whileHoverScale),
    (n.whileHoverSkewX = t.whileHoverSkewX),
    (n.whileHoverSkewY = t.whileHoverSkewY),
    (n.whileHoverTransition = t.whileHoverTransition),
    (n.whileHoverX = t.whileHoverX),
    (n.whileHoverY = t.whileHoverY),
    (n.whileTapBackgroundColor = t.whileTapBackgroundColor),
    (n.whileTapBoxShadow = t.whileTapBoxShadow),
    (n.whileTapEnabled = t.whileTapEnabled),
    (n.whileTapOpacity = t.whileTapOpacity),
    (n.whileTapRotate = t.whileTapRotate),
    (n.whileTapRotate3d = t.whileTapRotate3d),
    (n.whileTapRotateAdditiveDynamicValue = t.whileTapRotateAdditiveDynamicValue),
    (n.whileTapRotateX = t.whileTapRotateX),
    (n.whileTapRotateY = t.whileTapRotateY),
    (n.whileTapScale = t.whileTapScale),
    (n.whileTapSkewX = t.whileTapSkewX),
    (n.whileTapSkewY = t.whileTapSkewY),
    (n.whileTapTransition = t.whileTapTransition),
    (n.whileTapX = t.whileTapX),
    (n.whileTapY = t.whileTapY));
}
function rn(n, t) {
  n.expandToAllLocales = t.expandToAllLocales;
}
function Q(n, t) {
  n.triggerActions = t.triggerActions;
}
function sn(n, t) {
  ((n.ariaAtomic = t.ariaAtomic),
    (n.ariaBusy = t.ariaBusy),
    (n.ariaChecked = t.ariaChecked),
    (n.ariaControls = t.ariaControls),
    (n.ariaCurrent = t.ariaCurrent),
    (n.ariaDescribedBy = t.ariaDescribedBy),
    (n.ariaDescription = t.ariaDescription),
    (n.ariaDetails = t.ariaDetails),
    (n.ariaDisabled = t.ariaDisabled),
    (n.ariaExpanded = t.ariaExpanded),
    (n.ariaHaspopup = t.ariaHaspopup),
    (n.ariaHidden = t.ariaHidden),
    (n.ariaLabelledBy = t.ariaLabelledBy),
    (n.ariaLive = t.ariaLive),
    (n.ariaModal = t.ariaModal),
    (n.ariaPressed = t.ariaPressed),
    (n.ariaReadonly = t.ariaReadonly),
    (n.ariaRequired = t.ariaRequired),
    (n.ariaRole = t.ariaRole),
    (n.ariaRoleDescription = t.ariaRoleDescription),
    (n.ariaSelected = t.ariaSelected));
}
function an(n, t) {
  n.baseVariantId = t.baseVariantId;
}
function dn(n, t) {
  n.radiusSmoothing = t.radiusSmoothing;
}
function cn(n, t) {
  n.previewSettings = t.previewSettings;
}
function Rn(n, t) {
  ((n.breakpointWidth = t.breakpointWidth),
    (n.fontBold = t.fontBold),
    (n.fontBoldItalic = t.fontBoldItalic),
    (n.fontItalic = t.fontItalic));
}
function fn(n, t) {
  ((n.link = t.link),
    (n.linkClickTrackingId = t.linkClickTrackingId),
    (n.linkLocalized = t.linkLocalized),
    (n.linkOpenInNewTab = t.linkOpenInNewTab),
    (n.linkPreserveParams = t.linkPreserveParams),
    (n.linkRelValues = t.linkRelValues),
    (n.linkSmoothScroll = t.linkSmoothScroll));
}
function ln(n, t) {
  n.title = t.title;
}
function zn(n, t) {
  ((n.linkCurrentFont = t.linkCurrentFont),
    (n.linkCurrentFontSize = t.linkCurrentFontSize),
    (n.linkCurrentTextBackgroundColor = t.linkCurrentTextBackgroundColor),
    (n.linkCurrentTextBackgroundCornerShape = t.linkCurrentTextBackgroundCornerShape),
    (n.linkCurrentTextBackgroundPadding = t.linkCurrentTextBackgroundPadding),
    (n.linkCurrentTextBackgroundRadius = t.linkCurrentTextBackgroundRadius),
    (n.linkCurrentTextColor = t.linkCurrentTextColor),
    (n.linkCurrentTextDecoration = t.linkCurrentTextDecoration),
    (n.linkCurrentTextDecorationColor = t.linkCurrentTextDecorationColor),
    (n.linkCurrentTextDecorationOffset = t.linkCurrentTextDecorationOffset),
    (n.linkCurrentTextDecorationSkipInk = t.linkCurrentTextDecorationSkipInk),
    (n.linkCurrentTextDecorationStyle = t.linkCurrentTextDecorationStyle),
    (n.linkCurrentTextDecorationThickness = t.linkCurrentTextDecorationThickness),
    (n.linkCurrentTextTransform = t.linkCurrentTextTransform),
    (n.linkFont = t.linkFont),
    (n.linkFontSize = t.linkFontSize),
    (n.linkHoverFont = t.linkHoverFont),
    (n.linkHoverFontSize = t.linkHoverFontSize),
    (n.linkHoverTextBackgroundColor = t.linkHoverTextBackgroundColor),
    (n.linkHoverTextBackgroundCornerShape = t.linkHoverTextBackgroundCornerShape),
    (n.linkHoverTextBackgroundPadding = t.linkHoverTextBackgroundPadding),
    (n.linkHoverTextBackgroundRadius = t.linkHoverTextBackgroundRadius),
    (n.linkHoverTextColor = t.linkHoverTextColor),
    (n.linkHoverTextDecoration = t.linkHoverTextDecoration),
    (n.linkHoverTextDecorationColor = t.linkHoverTextDecorationColor),
    (n.linkHoverTextDecorationOffset = t.linkHoverTextDecorationOffset),
    (n.linkHoverTextDecorationSkipInk = t.linkHoverTextDecorationSkipInk),
    (n.linkHoverTextDecorationStyle = t.linkHoverTextDecorationStyle),
    (n.linkHoverTextDecorationThickness = t.linkHoverTextDecorationThickness),
    (n.linkHoverTextTransform = t.linkHoverTextTransform),
    (n.linkTextBackgroundColor = t.linkTextBackgroundColor),
    (n.linkTextBackgroundCornerShape = t.linkTextBackgroundCornerShape),
    (n.linkTextBackgroundPadding = t.linkTextBackgroundPadding),
    (n.linkTextBackgroundRadius = t.linkTextBackgroundRadius),
    (n.linkTextColor = t.linkTextColor),
    (n.linkTextDecoration = t.linkTextDecoration),
    (n.linkTextDecorationColor = t.linkTextDecorationColor),
    (n.linkTextDecorationOffset = t.linkTextDecorationOffset),
    (n.linkTextDecorationSkipInk = t.linkTextDecorationSkipInk),
    (n.linkTextDecorationStyle = t.linkTextDecorationStyle),
    (n.linkTextDecorationThickness = t.linkTextDecorationThickness),
    (n.linkTextTransform = t.linkTextTransform));
}
function pn(n, t) {
  n.viewTransitionNone = t.viewTransitionNone;
}
function kn(n, t) {
  n.dataIdentifier = t.dataIdentifier;
}
function hn(n, t) {
  ((n.floatingAlignment = t.floatingAlignment),
    (n.floatingCollisionDetection = t.floatingCollisionDetection),
    (n.floatingCollisionPadding = t.floatingCollisionPadding),
    (n.floatingOffsetX = t.floatingOffsetX),
    (n.floatingOffsetY = t.floatingOffsetY),
    (n.floatingPlacement = t.floatingPlacement),
    (n.floatingPositionEnabled = t.floatingPositionEnabled),
    (n.floatingSafeArea = t.floatingSafeArea));
}
function Bn(n, t) {
  ((n.formInputFontColor = t.formInputFontColor),
    (n.formInputFontFamily = t.formInputFontFamily),
    (n.formInputFontLetterSpacing = t.formInputFontLetterSpacing),
    (n.formInputFontLetterSpacingUnit = t.formInputFontLetterSpacingUnit),
    (n.formInputFontLineHeight = t.formInputFontLineHeight),
    (n.formInputFontLineHeightUnit = t.formInputFontLineHeightUnit),
    (n.formInputFontSelector = t.formInputFontSelector),
    (n.formInputFontSize = t.formInputFontSize),
    (n.formInputFontStyle = t.formInputFontStyle),
    (n.formInputFontTextAlignment = t.formInputFontTextAlignment),
    (n.formInputFontWeight = t.formInputFontWeight),
    (n.formInputOpenTypeFontFeatures = t.formInputOpenTypeFontFeatures),
    (n.formInputVariationAxes = t.formInputVariationAxes));
}
function bn(n, t) {
  n.codeComponentIdentifier = t.codeComponentIdentifier;
}
function Mn(n, t) {
  n.to = t.to;
}
function Pn(n, t) {
  ((n.createdAt = t.createdAt), (n.updatedAt = t.updatedAt));
}
function An(n, t) {
  n.textWrapBalance = t.textWrapBalance;
}
function On(n, t) {
  ((n.isTarget = t.isTarget),
    (n.overflow = t.overflow),
    (n.overflowX = t.overflowX),
    (n.overflowY = t.overflowY));
}
function Ln(n, t) {
  n.targetUrl = t.targetUrl;
}
function Fn(n, t) {
  n.centered = t.centered;
}
function Dn(n, t) {
  ((n.defaultLocaleOverride = t.defaultLocaleOverride),
    (n.includedLocales = t.includedLocales),
    (n.isDraft = t.isDraft),
    (n.localeConfig = t.localeConfig));
}
function Hn(n, t) {
  n.managedByPlugin = t.managedByPlugin;
}
function Vn(n, t) {
  n.shadows = t.shadows;
}
function $t(n, t) {
  ((n.caseSensitive = t.caseSensitive),
    (n.term = t.term),
    (n.translatable = t.translatable),
    (n.translations = t.translations));
}
function Yn(n, t) {
  n.type = t.type;
}
function Xn(n, t) {
  ((n.ariaLabel = t.ariaLabel),
    (n.repeatArray = t.repeatArray),
    (n.repeatArrayTransforms = t.repeatArrayTransforms));
}
function Zt(n, t) {
  ((n.inlineCodeFillColor = t.inlineCodeFillColor),
    (n.inlineCodeFont = t.inlineCodeFont),
    (n.inlineCodeFontSizeScale = t.inlineCodeFontSizeScale),
    (n.inlineCodePaddingHorizontal = t.inlineCodePaddingHorizontal),
    (n.inlineCodePaddingVertical = t.inlineCodePaddingVertical),
    (n.inlineCodeTextColor = t.inlineCodeTextColor));
}
function Kt(n, t) {
  ((n.lineColor = t.lineColor),
    (n.lineEnabled = t.lineEnabled),
    (n.lineRadius = t.lineRadius),
    (n.lineWidth = t.lineWidth),
    (n.textStyleEnabled = t.textStyleEnabled));
}
function Wn(n, t) {
  n.abTestingParentId = t.abTestingParentId;
}
function Jn(n, t) {
  ((n.dataNosnippet = t.dataNosnippet),
    (n.imageRendering = t.imageRendering),
    (n.onAppear = t.onAppear),
    (n.onClick = t.onClick),
    (n.onKeyDown = t.onKeyDown),
    (n.onMouseDown = t.onMouseDown),
    (n.onMouseEnter = t.onMouseEnter),
    (n.onMouseLeave = t.onMouseLeave),
    (n.onMouseUp = t.onMouseUp),
    (n.onTap = t.onTap),
    (n.onTapStart = t.onTapStart),
    (n.overscrollBehavior = t.overscrollBehavior),
    (n.tapHighlightColor = t.tapHighlightColor),
    (n.textSelection = t.textSelection));
}
function Qt(n, t) {
  ((n.formInputAutofillEnabled = t.formInputAutofillEnabled),
    (n.formInputMaxLength = t.formInputMaxLength),
    (n.formInputPlaceholder = t.formInputPlaceholder),
    (n.formInputPlaceholderColor = t.formInputPlaceholderColor),
    (n.formInputPlaceholderLocalized = t.formInputPlaceholderLocalized),
    (n.formInputStep = t.formInputStep),
    (n.formTextAreaResizable = t.formTextAreaResizable),
    (n.formTextInputMaxNumber = t.formTextInputMaxNumber),
    (n.formTextInputMinNumber = t.formTextInputMinNumber),
    (n.formTextInputType = t.formTextInputType));
}
function jt(n, t) {
  ((n.textContent = t.textContent), (n.textVerticalAlignment = t.textVerticalAlignment));
}
function qn(n, t) {
  ((n.descriptionLocalized = t.descriptionLocalized),
    (n.titleLocalized = t.titleLocalized),
    (n.webMetadata = t.webMetadata));
}
function vt(n, t) {
  ((n.formBooleanInputCheckedBorderColor = t.formBooleanInputCheckedBorderColor),
    (n.formBooleanInputCheckedBorderStyle = t.formBooleanInputCheckedBorderStyle),
    (n.formBooleanInputCheckedBorderWidth = t.formBooleanInputCheckedBorderWidth),
    (n.formBooleanInputCheckedBoxShadow = t.formBooleanInputCheckedBoxShadow),
    (n.formBooleanInputCheckedFillColor = t.formBooleanInputCheckedFillColor),
    (n.formBooleanInputCheckedTransition = t.formBooleanInputCheckedTransition),
    (n.formBooleanInputType = t.formBooleanInputType),
    (n.formBooleanInputValue = t.formBooleanInputValue));
}
function ne(n, t) {
  ((n.tableBorderColor = t.tableBorderColor),
    (n.tableBorderEnabled = t.tableBorderEnabled),
    (n.tableBorderInner = t.tableBorderInner),
    (n.tableBorderOuter = t.tableBorderOuter),
    (n.tableBorderStyle = t.tableBorderStyle),
    (n.tableBorderWidth = t.tableBorderWidth),
    (n.tableFillColor = t.tableFillColor),
    (n.tableHeaderFillColor = t.tableHeaderFillColor));
}
function te(n, t) {
  ((n.trackingEventType = t.trackingEventType),
    (n.trackingId = t.trackingId),
    (n.trackingIdNodesSnapshot = t.trackingIdNodesSnapshot),
    (n.trackingIdNodesSnapshotCreatedAt = t.trackingIdNodesSnapshotCreatedAt),
    (n.trackingRoutePath = t.trackingRoutePath));
}
function ee(n, t) {
  n.componentIdentifier = t.componentIdentifier;
}
function oe(n, t) {
  n.linkTransition = t.linkTransition;
}
function ie(n, t) {
  n.tag = t.tag;
}
function re(n, t) {
  ((n.annotations = t.annotations),
    (n.group = t.group),
    (n.namespaceId = t.namespaceId),
    (n.ownerId = t.ownerId),
    (n.ownerType = t.ownerType),
    (n.pluginId = t.pluginId),
    (n.propertyControlsBySaveId = t.propertyControlsBySaveId),
    (n.scopeNodeId = t.scopeNodeId),
    (n.updateSaveId = t.updateSaveId),
    (n.version = t.version));
}
function se(n, t) {
  ((n.autoSize = t.autoSize),
    (n.contentHash = t.contentHash),
    (n.exportIncludesBackground = t.exportIncludesBackground),
    (n.isVectorSetItem = t.isVectorSetItem),
    (n.sizeToFit = t.sizeToFit));
}
function ae(n, t) {
  ((n.externalId = t.externalId),
    (n.privateToUserId = t.privateToUserId),
    (n.updatedAtByPlugin = t.updatedAtByPlugin));
}
function de(n, t) {
  n.originalSymbolId = t.originalSymbolId;
}
function ce(n, t) {
  ((n.action = t.action),
    (n.countries = t.countries),
    (n.localeId = t.localeId),
    (n.negateCountries = t.negateCountries),
    (n.negatePath = t.negatePath));
}
function fe(n, t) {
  ((n.appearEffectAnimateOnce = t.appearEffectAnimateOnce),
    (n.appearEffectEnabled = t.appearEffectEnabled),
    (n.appearEffectObscuredVariantId = t.appearEffectObscuredVariantId),
    (n.appearEffectScrollDirection = t.appearEffectScrollDirection),
    (n.appearEffectScrollDirectionTarget = t.appearEffectScrollDirectionTarget),
    (n.appearEffectScrollTargets = t.appearEffectScrollTargets),
    (n.appearEffectThreshold = t.appearEffectThreshold),
    (n.appearEffectTrigger = t.appearEffectTrigger),
    (n.appearEffectVisibleVariantId = t.appearEffectVisibleVariantId),
    (n.codeComponentPackageVersion = t.codeComponentPackageVersion),
    (n.dataLoaderDisabledVariant = t.dataLoaderDisabledVariant),
    (n.dataLoaderDisabledVariantEnabled = t.dataLoaderDisabledVariantEnabled),
    (n.dataLoaderLoadingVariant = t.dataLoaderLoadingVariant),
    (n.dataLoaderLoadingVariantEnabled = t.dataLoaderLoadingVariantEnabled),
    (n.dynamicVectorSetIdentifier = t.dynamicVectorSetIdentifier),
    (n.formButtonErrorVariant = t.formButtonErrorVariant),
    (n.formButtonErrorVariantEnabled = t.formButtonErrorVariantEnabled),
    (n.formButtonIncompleteVariant = t.formButtonIncompleteVariant),
    (n.formButtonIncompleteVariantEnabled = t.formButtonIncompleteVariantEnabled),
    (n.formButtonPendingVariant = t.formButtonPendingVariant),
    (n.formButtonPendingVariantEnabled = t.formButtonPendingVariantEnabled),
    (n.formButtonSuccessVariant = t.formButtonSuccessVariant),
    (n.formButtonSuccessVariantEnabled = t.formButtonSuccessVariantEnabled),
    (n.slotsAreChildNodes = t.slotsAreChildNodes),
    (n.tokenOverrides = t.tokenOverrides),
    (n.whileOpenEffectEnabled = t.whileOpenEffectEnabled),
    (n.whileOpenEffectVariant = t.whileOpenEffectVariant));
}
function le(n, t) {
  ((n.matchPagesFirst = t.matchPagesFirst), (n.rewriteType = t.rewriteType));
}
function pe(n, t) {
  n.pathBoolean = t.pathBoolean;
}
function ke(n, t) {
  n.polygonSides = t.polygonSides;
}
function he(n, t) {
  ((n.segment = t.segment), (n.segmentLocalized = t.segmentLocalized), (n.webPageId = t.webPageId));
}
function we(n, t) {
  n.slotPropertyKey = t.slotPropertyKey;
}
function ue(n, t) {
  n.headers = t.headers;
}
function Te(n, t) {
  n.save = t.save;
}
function ge(n, t) {
  ((n.allItemsLabel = t.allItemsLabel),
    (n.allItemsLabelLocalized = t.allItemsLabelLocalized),
    (n.booleanFalseLabel = t.booleanFalseLabel),
    (n.booleanFalseLabelLocalized = t.booleanFalseLabelLocalized),
    (n.booleanTrueLabel = t.booleanTrueLabel),
    (n.booleanTrueLabelLocalized = t.booleanTrueLabelLocalized),
    (n.formInputInvalidTextColor = t.formInputInvalidTextColor),
    (n.formSelectOptions = t.formSelectOptions));
}
function me(n, t) {
  ((n.cases = t.cases), (n.preventLocalization = t.preventLocalization));
}
function xe(n, t) {
  ((n.code = t.code),
    (n.disabled = t.disabled),
    (n.loadMode = t.loadMode),
    (n.pageIds = t.pageIds),
    (n.placement = t.placement));
}
function Se(n, t) {
  n.homeNodeId = t.homeNodeId;
}
function ye(n, t) {
  ((n.instruction = t.instruction), (n.trigger = t.trigger));
}
function Ee(n, t) {
  ((n.pluginVariableIds = t.pluginVariableIds),
    (n.sorting = t.sorting),
    (n.sortingRules = t.sortingRules),
    (n.statusFieldIndex = t.statusFieldIndex));
}
function Ce(n, t) {
  ((n.spikeCount = t.spikeCount), (n.spikeDepth = t.spikeDepth));
}
function Ne(n, t) {
  ((n.anchorLinkOffsetY = t.anchorLinkOffsetY),
    (n.html = t.html),
    (n.htmlContent = t.htmlContent),
    (n.htmlLocalized = t.htmlLocalized),
    (n.stylePresetAnchorLink = t.stylePresetAnchorLink),
    (n.stylePresetBlockquote = t.stylePresetBlockquote),
    (n.stylePresetHeading1 = t.stylePresetHeading1),
    (n.stylePresetHeading2 = t.stylePresetHeading2),
    (n.stylePresetHeading3 = t.stylePresetHeading3),
    (n.stylePresetHeading4 = t.stylePresetHeading4),
    (n.stylePresetHeading5 = t.stylePresetHeading5),
    (n.stylePresetHeading6 = t.stylePresetHeading6),
    (n.stylePresetImage = t.stylePresetImage),
    (n.stylePresetInlineCode = t.stylePresetInlineCode),
    (n.stylePresetLink = t.stylePresetLink),
    (n.stylePresetParagraph = t.stylePresetParagraph),
    (n.stylePresetTable = t.stylePresetTable),
    (n.textEffectBlur = t.textEffectBlur),
    (n.textEffectDelay = t.textEffectDelay),
    (n.textEffectEnabled = t.textEffectEnabled),
    (n.textEffectOpacity = t.textEffectOpacity),
    (n.textEffectReplay = t.textEffectReplay),
    (n.textEffectRotate = t.textEffectRotate),
    (n.textEffectRotate3d = t.textEffectRotate3d),
    (n.textEffectRotateX = t.textEffectRotateX),
    (n.textEffectRotateY = t.textEffectRotateY),
    (n.textEffectScale = t.textEffectScale),
    (n.textEffectScrollTarget = t.textEffectScrollTarget),
    (n.textEffectScrollTargetCollectionItem = t.textEffectScrollTargetCollectionItem),
    (n.textEffectSkewX = t.textEffectSkewX),
    (n.textEffectSkewY = t.textEffectSkewY),
    (n.textEffectThreshold = t.textEffectThreshold),
    (n.textEffectTokenization = t.textEffectTokenization),
    (n.textEffectTransition = t.textEffectTransition),
    (n.textEffectTrigger = t.textEffectTrigger),
    (n.textEffectType = t.textEffectType),
    (n.textEffectX = t.textEffectX),
    (n.textEffectY = t.textEffectY),
    (n.textFitScale = t.textFitScale),
    (n.textFitViewBoxSize = t.textFitViewBoxSize),
    (n.textFitViewBoxSizeLocalized = t.textFitViewBoxSizeLocalized),
    (n.textTruncation = t.textTruncation));
}
function Ie(n, t) {
  n.autoBranching = t.autoBranching;
}
function _e(n, t) {
  ((n.abTestingDistributionWeightPpm = t.abTestingDistributionWeightPpm),
    (n.layoutTemplateIdentifierOverride = t.layoutTemplateIdentifierOverride),
    (n.pagePath = t.pagePath));
}
function Re(n, t) {
  ((n.backdropDismissible = t.backdropDismissible),
    (n.backdropEnterTransition = t.backdropEnterTransition),
    (n.backdropExitTransition = t.backdropExitTransition),
    (n.backdropFill = t.backdropFill),
    (n.backdropFillEnabled = t.backdropFillEnabled),
    (n.backdropTransitionLocked = t.backdropTransitionLocked),
    (n.blockDocumentScrolling = t.blockDocumentScrolling));
}
function ze(n, t) {
  ((n.abDistributionMode = t.abDistributionMode),
    (n.abVariantsSnapshot = t.abVariantsSnapshot),
    (n.filterByBrowser = t.filterByBrowser),
    (n.filterByCountryCode = t.filterByCountryCode),
    (n.filterByDevice = t.filterByDevice),
    (n.filterByOs = t.filterByOs),
    (n.filterByUtmCampaign = t.filterByUtmCampaign),
    (n.filterByUtmContent = t.filterByUtmContent),
    (n.filterByUtmMedium = t.filterByUtmMedium),
    (n.filterByUtmSource = t.filterByUtmSource),
    (n.filterByUtmTerm = t.filterByUtmTerm),
    (n.startedAt = t.startedAt),
    (n.stoppedAt = t.stoppedAt));
}
function Be(n, t) {
  ((n.baseId = t.baseId),
    (n.closure = t.closure),
    (n.contributors = t.contributors),
    (n.createdBy = t.createdBy),
    (n.creationTrigger = t.creationTrigger),
    (n.deletedAt = t.deletedAt),
    (n.lastEdited = t.lastEdited));
}
function be(n, t) {
  n.committedRewritesHash = t.committedRewritesHash;
}
function Me(n, t) {
  ((n.shaderFallbackImage = t.shaderFallbackImage),
    (n.shaderFallbackImageHash = t.shaderFallbackImageHash),
    (n.shaderModuleIdentifier = t.shaderModuleIdentifier),
    (n.shaderMouseEnabled = t.shaderMouseEnabled),
    (n.shaderMouseSpringOptions = t.shaderMouseSpringOptions));
}
function Pe(n, t) {
  ((n.altAttribute = t.altAttribute),
    (n.altAttributeLocalized = t.altAttributeLocalized),
    (n.canvasChildIndex = t.canvasChildIndex),
    (n.carouselEffectAutoPlay = t.carouselEffectAutoPlay),
    (n.carouselEffectEnabled = t.carouselEffectEnabled),
    (n.carouselEffectInterval = t.carouselEffectInterval),
    (n.carouselEffectLoop = t.carouselEffectLoop),
    (n.carouselEffectSnap = t.carouselEffectSnap),
    (n.carouselEffectTransition = t.carouselEffectTransition),
    (n.childIndex = t.childIndex),
    (n.collectionFilters = t.collectionFilters),
    (n.collectionFiltersOperator = t.collectionFiltersOperator),
    (n.collectionLimit = t.collectionLimit),
    (n.collectionOrder = t.collectionOrder),
    (n.collectionPaginationPageSize = t.collectionPaginationPageSize),
    (n.collectionRepeatedItemId = t.collectionRepeatedItemId),
    (n.collectionReverse = t.collectionReverse),
    (n.collectionStartOffset = t.collectionStartOffset),
    (n.dataRepeaterArray = t.dataRepeaterArray),
    (n.dataSourceLoaderId = t.dataSourceLoaderId),
    (n.fillImageLocalized = t.fillImageLocalized),
    (n.flowEffectEnabled = t.flowEffectEnabled),
    (n.flowEffectTransition = t.flowEffectTransition),
    (n.formOnSuccessRedirectUrl = t.formOnSuccessRedirectUrl),
    (n.formSaveId = t.formSaveId),
    (n.formSubmitButtonId = t.formSubmitButtonId),
    (n.formSubmitTrackingId = t.formSubmitTrackingId),
    (n.framePreset = t.framePreset),
    (n.gap = t.gap),
    (n.gesture = t.gesture),
    (n.gridAlignment = t.gridAlignment),
    (n.gridColumnCount = t.gridColumnCount),
    (n.gridColumnMinWidth = t.gridColumnMinWidth),
    (n.gridColumnWidth = t.gridColumnWidth),
    (n.gridColumnWidthType = t.gridColumnWidthType),
    (n.gridRowCount = t.gridRowCount),
    (n.gridRowHeight = t.gridRowHeight),
    (n.gridRowHeightType = t.gridRowHeightType),
    (n.gridType = t.gridType),
    (n.hideScrollbars = t.hideScrollbars),
    (n.hookIdentifier = t.hookIdentifier),
    (n.htmlTag = t.htmlTag),
    (n.isBreakpoint = t.isBreakpoint),
    (n.isFormContainer = t.isFormContainer),
    (n.isScreen = t.isScreen),
    (n.isVariant = t.isVariant),
    (n.itemsOrder = t.itemsOrder),
    (n.layout = t.layout),
    (n.lightboxEffectBackdrop = t.lightboxEffectBackdrop),
    (n.lightboxEffectEnabled = t.lightboxEffectEnabled),
    (n.lightboxEffectMaxWidth = t.lightboxEffectMaxWidth),
    (n.lightboxEffectPadding = t.lightboxEffectPadding),
    (n.lightboxEffectPaddingBottom = t.lightboxEffectPaddingBottom),
    (n.lightboxEffectPaddingLeft = t.lightboxEffectPaddingLeft),
    (n.lightboxEffectPaddingPerSide = t.lightboxEffectPaddingPerSide),
    (n.lightboxEffectPaddingRight = t.lightboxEffectPaddingRight),
    (n.lightboxEffectPaddingTop = t.lightboxEffectPaddingTop),
    (n.lightboxEffectTransition = t.lightboxEffectTransition),
    (n.lightboxEffectZIndex = t.lightboxEffectZIndex),
    (n.onError = t.onError),
    (n.onLoading = t.onLoading),
    (n.onSuccess = t.onSuccess),
    (n.overlayGrid = t.overlayGrid),
    (n.pageEffects = t.pageEffects),
    (n.repeatedItemId = t.repeatedItemId),
    (n.rootFontSize = t.rootFontSize),
    (n.stackAlignment = t.stackAlignment),
    (n.stackDirection = t.stackDirection),
    (n.stackDistribution = t.stackDistribution),
    (n.stackWrapEnabled = t.stackWrapEnabled),
    (n.tickerEffectDirectionModifier = t.tickerEffectDirectionModifier),
    (n.tickerEffectDraggable = t.tickerEffectDraggable),
    (n.tickerEffectEnabled = t.tickerEffectEnabled),
    (n.tickerEffectHoverModifier = t.tickerEffectHoverModifier),
    (n.tickerEffectVelocity = t.tickerEffectVelocity),
    (n.variantTransition = t.variantTransition),
    (n.viewportHeight = t.viewportHeight));
}
function Ae(n, t) {
  ((n.moduleIdentifier = t.moduleIdentifier),
    (n.nodeId = t.nodeId),
    (n.reason = t.reason),
    (n.scopeId = t.scopeId),
    (n.sourceNodeId = t.sourceNodeId),
    (n.sourceNodeModuleType = t.sourceNodeModuleType));
}
function Oe(n, t) {
  ((n.allSlugsResolvedAtRuntime = t.allSlugsResolvedAtRuntime),
    (n.contentManagementSyncState = t.contentManagementSyncState),
    (n.disableBackdropFilters = t.disableBackdropFilters),
    (n.globalPageEffect = t.globalPageEffect),
    (n.homePageNodeId = t.homePageNodeId),
    (n.layoutTemplateIdentifier = t.layoutTemplateIdentifier),
    (n.locales = t.locales),
    (n.localizationProgressSummaries = t.localizationProgressSummaries),
    (n.patchDeploymentId = t.patchDeploymentId),
    (n.publishPaths = t.publishPaths),
    (n.publishRevisions = t.publishRevisions),
    (n.thumbnailNodeId = t.thumbnailNodeId));
}
function Le(n, t) {
  ((n.pathClosed = t.pathClosed), (n.pathSegments = t.pathSegments));
}
function Fe(n, t) {
  ((n.colorable = t.colorable), (n.originalFilename = t.originalFilename), (n.svg = t.svg));
}
function i(n) {
  ((this.__class = n.__class), e(this, n), o(this, n));
}
i.prototype = Object.prototype;
function Un(n) {
  ((this.__class = n.__class), e(this, n), q(this, n), ye(this, n));
}
Un.prototype = Object.prototype;
function Gn(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    f(this, n),
    l(this, n),
    T(this, n),
    h(this, n),
    y(this, n),
    E(this, n),
    x(this, n),
    R(this, n),
    V(this, n),
    G(this, n),
    on(this, n),
    _n(this, n),
    Rn(this, n),
    Kt(this, n));
}
Gn.prototype = Object.prototype;
function $n(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    a(this, n),
    d(this, n),
    l(this, n),
    c(this, n),
    h(this, n),
    w(this, n),
    u(this, n),
    g(this, n),
    x(this, n),
    b(this, n),
    F(this, n),
    pe(this, n));
}
$n.prototype = Object.prototype;
function Zn(n) {
  ((this.__class = n.__class), e(this, n), Be(this, n));
}
Zn.prototype = Object.prototype;
function Kn(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Ie(this, n));
}
Kn.prototype = Object.prototype;
function Qn(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), M(this, n), Se(this, n));
}
Qn.prototype = Object.prototype;
function jn(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    f(this, n),
    a(this, n),
    d(this, n),
    l(this, n),
    T(this, n),
    c(this, n),
    h(this, n),
    w(this, n),
    u(this, n),
    g(this, n),
    E(this, n),
    x(this, n),
    S(this, n),
    C(this, n),
    N(this, n),
    I(this, n),
    R(this, n),
    z(this, n),
    _(this, n),
    B(this, n),
    O(this, n),
    X(this, n),
    D(this, n),
    W(this, n),
    $(this, n),
    Z(this, n),
    K(this, n),
    Q(this, n),
    sn(this, n),
    cn(this, n),
    pn(this, n),
    hn(this, n),
    bn(this, n),
    Xn(this, n),
    fe(this, n));
  for (let t in n) (!t.startsWith("$control__") && !t.startsWith("$plugin__")) || (this[t] = n[t]);
}
jn.prototype = Object.prototype;
function vn(n) {
  ((this.__class = n.__class), e(this, n), s(this, n), Pn(this, n), Dn(this, n), ae(this, n));
  for (let t in n) t.startsWith("$control__") && (this[t] = n[t]);
}
vn.prototype = Object.prototype;
function nt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    L(this, n),
    Hn(this, n),
    Ee(this, n));
  for (let t in n) t.startsWith("$plugin__") && (this[t] = n[t]);
}
nt.prototype = Object.prototype;
function tt(n) {
  ((this.__class = n.__class), e(this, n), ee(this, n));
  for (let t in n) t.startsWith("$control__") && (this[t] = n[t]);
}
tt.prototype = Object.prototype;
function et(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Pn(this, n), Hn(this, n), xe(this, n));
}
et.prototype = Object.prototype;
function tn(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), s(this, n));
}
tn.prototype = Object.prototype;
function ot(n) {
  ((this.__class = n.__class), e(this, n), L(this, n));
}
ot.prototype = Object.prototype;
function it(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), M(this, n));
}
it.prototype = Object.prototype;
function rt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Yn(this, n), Ae(this, n));
}
rt.prototype = Object.prototype;
function st(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    Z(this, n),
    ln(this, n),
    bn(this, n),
    Yn(this, n),
    re(this, n));
}
st.prototype = Object.prototype;
function at(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Y(this, n), Mn(this, n), ce(this, n));
}
at.prototype = Object.prototype;
function dt(n) {
  ((this.__class = n.__class),
    e(this, n),
    f(this, n),
    a(this, n),
    d(this, n),
    l(this, n),
    T(this, n),
    c(this, n),
    h(this, n),
    w(this, n),
    y(this, n),
    E(this, n),
    S(this, n),
    C(this, n),
    N(this, n),
    I(this, n),
    R(this, n),
    z(this, n),
    _(this, n),
    B(this, n),
    O(this, n),
    U(this, n),
    en(this, n),
    vt(this, n));
}
dt.prototype = Object.prototype;
function ct(n) {
  ((this.__class = n.__class),
    e(this, n),
    f(this, n),
    a(this, n),
    d(this, n),
    l(this, n),
    T(this, n),
    c(this, n),
    h(this, n),
    w(this, n),
    y(this, n),
    E(this, n),
    S(this, n),
    C(this, n),
    N(this, n),
    I(this, n),
    R(this, n),
    z(this, n),
    _(this, n),
    B(this, n),
    O(this, n),
    V(this, n),
    U(this, n),
    en(this, n),
    Bn(this, n),
    Qt(this, n));
}
ct.prototype = Object.prototype;
function ft(n) {
  ((this.__class = n.__class),
    e(this, n),
    f(this, n),
    a(this, n),
    d(this, n),
    l(this, n),
    T(this, n),
    c(this, n),
    h(this, n),
    w(this, n),
    y(this, n),
    E(this, n),
    S(this, n),
    C(this, n),
    N(this, n),
    I(this, n),
    R(this, n),
    z(this, n),
    _(this, n),
    B(this, n),
    O(this, n),
    V(this, n),
    W(this, n),
    U(this, n),
    en(this, n),
    Bn(this, n),
    ge(this, n));
}
ft.prototype = Object.prototype;
function lt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    f(this, n),
    a(this, n),
    d(this, n),
    l(this, n),
    T(this, n),
    c(this, n),
    h(this, n),
    w(this, n),
    u(this, n),
    y(this, n),
    g(this, n),
    E(this, n),
    x(this, n),
    S(this, n),
    C(this, n),
    N(this, n),
    I(this, n),
    R(this, n),
    z(this, n),
    _(this, n),
    B(this, n),
    O(this, n),
    M(this, n),
    V(this, n),
    X(this, n),
    D(this, n),
    W(this, n),
    U(this, n),
    G(this, n),
    $(this, n),
    Z(this, n),
    K(this, n),
    Q(this, n),
    sn(this, n),
    cn(this, n),
    fn(this, n),
    pn(this, n),
    kn(this, n),
    hn(this, n),
    On(this, n),
    Xn(this, n),
    Jn(this, n),
    Pe(this, n));
  for (let t in n) (!t.startsWith("$control__") && !t.startsWith("$plugin__")) || (this[t] = n[t]);
}
lt.prototype = Object.prototype;
function pt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Wn(this, n), ze(this, n));
}
pt.prototype = Object.prototype;
function kt(n) {
  ((this.__class = n.__class), e(this, n), te(this, n));
}
kt.prototype = Object.prototype;
function ht(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Y(this, n), rn(this, n), ue(this, n));
}
ht.prototype = Object.prototype;
function wt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    f(this, n),
    T(this, n),
    w(this, n),
    y(this, n),
    E(this, n));
}
wt.prototype = Object.prototype;
function ut(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    f(this, n),
    T(this, n),
    y(this, n),
    E(this, n),
    Zt(this, n));
}
ut.prototype = Object.prototype;
function Tt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    M(this, n),
    L(this, n),
    an(this, n));
}
Tt.prototype = Object.prototype;
function gt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), s(this, n), zn(this, n), oe(this, n));
}
gt.prototype = Object.prototype;
function mt(n) {
  ((this.__class = n.__class), e(this, n), Te(this, n));
}
mt.prototype = Object.prototype;
function xt(n) {
  ((this.__class = n.__class), e(this, n), q(this, n), $t(this, n));
}
xt.prototype = Object.prototype;
function St(n) {
  ((this.__class = n.__class),
    e(this, n),
    a(this, n),
    d(this, n),
    l(this, n),
    c(this, n),
    h(this, n),
    w(this, n),
    u(this, n),
    g(this, n),
    x(this, n),
    b(this, n),
    F(this, n));
}
St.prototype = Object.prototype;
function yt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    S(this, n),
    G(this, n),
    Q(this, n),
    Re(this, n));
}
yt.prototype = Object.prototype;
function Et(n) {
  ((this.__class = n.__class),
    e(this, n),
    a(this, n),
    d(this, n),
    l(this, n),
    c(this, n),
    h(this, n),
    w(this, n),
    u(this, n),
    g(this, n),
    x(this, n),
    b(this, n),
    F(this, n),
    Le(this, n));
}
Et.prototype = Object.prototype;
function Ct(n) {
  ((this.__class = n.__class),
    e(this, n),
    f(this, n),
    a(this, n),
    d(this, n),
    l(this, n),
    c(this, n),
    h(this, n),
    w(this, n),
    u(this, n),
    g(this, n),
    x(this, n),
    b(this, n),
    F(this, n),
    dn(this, n),
    Fn(this, n),
    ke(this, n));
}
Ct.prototype = Object.prototype;
function Nt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Y(this, n), Ln(this, n));
}
Nt.prototype = Object.prototype;
function It(n) {
  ((this.__class = n.__class),
    e(this, n),
    f(this, n),
    a(this, n),
    d(this, n),
    l(this, n),
    T(this, n),
    c(this, n),
    h(this, n),
    w(this, n),
    u(this, n),
    g(this, n),
    x(this, n),
    b(this, n),
    F(this, n),
    dn(this, n));
}
It.prototype = Object.prototype;
function _t(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Y(this, n), rn(this, n), Mn(this, n));
}
_t.prototype = Object.prototype;
function Rt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    Y(this, n),
    rn(this, n),
    Ln(this, n),
    le(this, n));
}
Rt.prototype = Object.prototype;
function zt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    u(this, n),
    g(this, n),
    S(this, n),
    C(this, n),
    N(this, n),
    I(this, n),
    z(this, n),
    _(this, n),
    B(this, n),
    O(this, n),
    X(this, n),
    D(this, n),
    W(this, n),
    $(this, n),
    on(this, n),
    K(this, n),
    sn(this, n),
    zn(this, n),
    pn(this, n),
    An(this, n),
    On(this, n),
    Vn(this, n),
    Jn(this, n),
    jt(this, n),
    Ne(this, n));
  for (let t in n) t.startsWith("$componentPreset__") && (this[t] = n[t]);
}
zt.prototype = Object.prototype;
function Bt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), qn(this, n), Oe(this, n));
  for (let t in n) t.startsWith("$plugin__") && (this[t] = n[t]);
}
Bt.prototype = Object.prototype;
function bt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), kn(this, n), he(this, n));
}
bt.prototype = Object.prototype;
function Mt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), be(this, n));
}
Mt.prototype = Object.prototype;
function Pt(n) {
  ((this.__class = n.__class),
    e(this, n),
    a(this, n),
    d(this, n),
    l(this, n),
    c(this, n),
    u(this, n),
    g(this, n),
    x(this, n),
    S(this, n),
    C(this, n),
    N(this, n),
    I(this, n),
    _(this, n),
    D(this, n),
    q(this, n),
    Z(this, n),
    fn(this, n),
    ln(this, n),
    Vn(this, n),
    Fe(this, n));
  for (let t in n) t.startsWith("$plugin__") && (this[t] = n[t]);
}
Pt.prototype = Object.prototype;
function At(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    f(this, n),
    a(this, n),
    d(this, n),
    T(this, n),
    c(this, n),
    w(this, n),
    u(this, n),
    y(this, n),
    g(this, n),
    E(this, n),
    S(this, n),
    C(this, n),
    I(this, n),
    R(this, n),
    z(this, n),
    _(this, n),
    B(this, n),
    X(this, n),
    D(this, n),
    W(this, n),
    $(this, n),
    K(this, n),
    Q(this, n),
    hn(this, n),
    Me(this, n));
  for (let t in n) t.startsWith("$control__") && (this[t] = n[t]);
}
At.prototype = Object.prototype;
function Ot(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    f(this, n),
    a(this, n),
    l(this, n),
    T(this, n),
    h(this, n),
    u(this, n),
    x(this, n),
    S(this, n),
    C(this, n),
    N(this, n),
    X(this, n),
    D(this, n),
    q(this, n),
    cn(this, n),
    fn(this, n),
    ln(this, n),
    se(this, n));
}
Ot.prototype = Object.prototype;
function Lt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    u(this, n),
    g(this, n),
    b(this, n));
}
Lt.prototype = Object.prototype;
function Ft(n) {
  ((this.__class = n.__class), e(this, n), s(this, n), me(this, n));
}
Ft.prototype = Object.prototype;
function Dt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), we(this, n));
}
Dt.prototype = Object.prototype;
function Ht(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    M(this, n),
    L(this, n),
    an(this, n),
    de(this, n));
  for (let t in n) t.startsWith("$plugin__") && (this[t] = n[t]);
}
Ht.prototype = Object.prototype;
function Vt(n) {
  ((this.__class = n.__class),
    e(this, n),
    f(this, n),
    a(this, n),
    d(this, n),
    l(this, n),
    c(this, n),
    h(this, n),
    w(this, n),
    u(this, n),
    g(this, n),
    x(this, n),
    b(this, n),
    F(this, n),
    dn(this, n),
    Fn(this, n),
    Ce(this, n));
}
Vt.prototype = Object.prototype;
function Yt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    f(this, n),
    T(this, n),
    y(this, n),
    V(this, n),
    ne(this, n));
}
Yt.prototype = Object.prototype;
function Xt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    G(this, n),
    on(this, n),
    _n(this, n),
    Rn(this, n),
    An(this, n),
    ie(this, n));
  for (let t in n) t.startsWith("$plugin__") && (this[t] = n[t]);
}
Xt.prototype = Object.prototype;
function Wt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), s(this, n), M(this, n), L(this, n));
}
Wt.prototype = Object.prototype;
function Jt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    M(this, n),
    L(this, n),
    an(this, n),
    kn(this, n),
    Dn(this, n),
    Wn(this, n),
    qn(this, n),
    _e(this, n));
  for (let t in n) (!t.startsWith("$control__") && !t.startsWith("$plugin__")) || (this[t] = n[t]);
}
Jt.prototype = Object.prototype;
function P(n) {
  switch (n.__class) {
    case "AbTestsEntityTypeRootNode":
      return Reflect.construct(i, [n]);
    case "AgentSkillNode":
      return Reflect.construct(Un, [n]);
    case "AgentSkillsListNode":
      return Reflect.construct(i, [n]);
    case "AnalyticsScopeNode":
      return Reflect.construct(i, [n]);
    case "AssetsEntityTypeRootNode":
      return Reflect.construct(i, [n]);
    case "BlockquoteStylePresetNode":
      return Reflect.construct(Gn, [n]);
    case "BooleanShapeNode":
      return Reflect.construct($n, [n]);
    case "BranchNode":
      return Reflect.construct(Zn, [n]);
    case "BranchesNode":
      return Reflect.construct(Kn, [n]);
    case "CanvasPageNode":
      return Reflect.construct(Qn, [n]);
    case "CodeComponentNode":
      return Reflect.construct(jn, [n]);
    case "CollectionItemNode":
      return Reflect.construct(vn, [n]);
    case "CollectionNode":
      return Reflect.construct(nt, [n]);
    case "ColorStyleTokenListNode":
      return Reflect.construct(i, [n]);
    case "ColorStyleTokenNode":
      return n.toJS();
    case "ComponentPresetNode":
      return Reflect.construct(tt, [n]);
    case "ContentManagementEntityTypeRootNode":
      return Reflect.construct(i, [n]);
    case "ContentManagementNode":
      return Reflect.construct(i, [n]);
    case "CustomCodeNode":
      return Reflect.construct(et, [n]);
    case "CustomCodeScopeNode":
      return Reflect.construct(tn, [n]);
    case "DatabaseListNode":
      return Reflect.construct(i, [n]);
    case "DatabaseNode":
      return Reflect.construct(i, [n]);
    case "DatabaseTableNode":
      return Reflect.construct(ot, [n]);
    case "DesignPageEntityTypeRootNode":
      return Reflect.construct(i, [n]);
    case "DesignPageNode":
      return Reflect.construct(it, [n]);
    case "EntityFolderNode":
      return Reflect.construct(i, [n]);
    case "EntityReferenceNode":
      return Reflect.construct(i, [n]);
    case "ErrorListNode":
      return Reflect.construct(i, [n]);
    case "ErrorNode":
      return Reflect.construct(rt, [n]);
    case "ExternalModuleNode":
      return Reflect.construct(st, [n]);
    case "ExternalModulesListNode":
      return Reflect.construct(i, [n]);
    case "FirewallRouteNode":
      return Reflect.construct(at, [n]);
    case "FormBooleanInputNode":
      return Reflect.construct(dt, [n]);
    case "FormPlainTextInputNode":
      return Reflect.construct(ct, [n]);
    case "FormSelectNode":
      return Reflect.construct(ft, [n]);
    case "FrameNode":
      return Reflect.construct(lt, [n]);
    case "FunnelNode":
      return Reflect.construct(pt, [n]);
    case "FunnelStepActionNode":
      return Reflect.construct(kt, [n]);
    case "FunnelStepNode":
      return Reflect.construct(i, [n]);
    case "FunnelsEntityTypeRootNode":
      return Reflect.construct(i, [n]);
    case "HeaderRouteNode":
      return Reflect.construct(ht, [n]);
    case "ImageStylePresetNode":
      return Reflect.construct(wt, [n]);
    case "InlineCodeStylePresetNode":
      return Reflect.construct(ut, [n]);
    case "LayoutTemplateNode":
      return Reflect.construct(Tt, [n]);
    case "LinkStylePresetNode":
      return Reflect.construct(gt, [n]);
    case "LocalModuleNode":
      return Reflect.construct(mt, [n]);
    case "LocalModulesListNode":
      return Reflect.construct(i, [n]);
    case "LocalizationGlossaryItemNode":
      return Reflect.construct(xt, [n]);
    case "LocalizationGlossaryNode":
      return Reflect.construct(i, [n]);
    case "OvalShapeNode":
      return Reflect.construct(St, [n]);
    case "OverlayNode":
      return Reflect.construct(yt, [n]);
    case "PathNode":
      return Reflect.construct(Et, [n]);
    case "PolygonShapeNode":
      return Reflect.construct(Ct, [n]);
    case "PresetsListNode":
      return Reflect.construct(tn, [n]);
    case "ProxyRouteNode":
      return Reflect.construct(Nt, [n]);
    case "RectangleShapeNode":
      return Reflect.construct(It, [n]);
    case "RedirectRouteNode":
      return Reflect.construct(_t, [n]);
    case "RewriteRouteNode":
      return Reflect.construct(Rt, [n]);
    case "RichTextNode":
      return Reflect.construct(zt, [n]);
    case "RootNode":
      return Reflect.construct(Bt, [n]);
    case "RouteSegmentNode":
      return Reflect.construct(bt, [n]);
    case "RouteSegmentRootNode":
      return Reflect.construct(i, [n]);
    case "RoutesNode":
      return Reflect.construct(Mt, [n]);
    case "SVGNode":
      return Reflect.construct(Pt, [n]);
    case "ShaderNode":
      return Reflect.construct(At, [n]);
    case "ShapeContainerNode":
      return Reflect.construct(Ot, [n]);
    case "ShapeGroupNode":
      return Reflect.construct(Lt, [n]);
    case "SharedEnumListNode":
      return Reflect.construct(i, [n]);
    case "SharedEnumNode":
      return Reflect.construct(Ft, [n]);
    case "SlotNode":
      return Reflect.construct(i, [n]);
    case "SlotPropertyNode":
      return Reflect.construct(Dt, [n]);
    case "SmartComponentNode":
      return Reflect.construct(Ht, [n]);
    case "StarShapeNode":
      return Reflect.construct(Vt, [n]);
    case "TableStylePresetNode":
      return Reflect.construct(Yt, [n]);
    case "TextNode":
      return n.toJS();
    case "TextStylePresetNode":
      return Reflect.construct(Xt, [n]);
    case "VectorSetNode":
      return Reflect.construct(Wt, [n]);
    case "WebPageNode":
      return Reflect.construct(Jt, [n]);
  }
  let t = Object.create(Object.prototype);
  return ((t.__class = n.__class), t);
}
function wn(n) {
  return Number.isFinite(n) ? n : 0;
}
function De(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
var He = "generated";
function Ve(n) {
  return De(n) && He in n && n.generated === !0;
}
function qt(n) {
  return typeof n == "string" || Ve(n) ? n : null;
}
function j(n, t) {
  if (n.charCodeAt(0) < 109) {
    let r = n.length < 2 ? -1 : n.charCodeAt(1);
    if (r !== -1 && r < 111) {
      let m = n.length < 3 ? -1 : n.charCodeAt(2);
      if (m !== -1 && m < 110) {
        if (n === "fillConicGradient") return k(t);
        if (n === "fillLinearGradient") return k(t);
        if (n === "fillRadialGradient") return k(t);
      } else {
        if (n === "centerAnchorX") return wn(t);
        if (n === "centerAnchorY") return wn(t);
      }
    } else {
      let m = n.length < 3 ? -1 : n.charCodeAt(2);
      if (m !== -1 && m < 114) {
        if (n === "guidesX") return v(Array.isArray(t) ? t : []);
        if (n === "guidesY") return v(Array.isArray(t) ? t : []);
        if (n === "exportOptions") return k(t);
      } else {
        if (n === "formBooleanInputCheckedBoxShadow") return k(t);
        if (n === "formInputFocusedBoxShadow") return k(t);
        if (n === "boxShadows") return k(t);
      }
    }
  } else {
    let r = n.length < 2 ? -1 : n.charCodeAt(1);
    if (r !== -1 && r < 104) {
      let m = n.length < 3 ? -1 : n.charCodeAt(2);
      if (m !== -1 && m < 115) {
        if (n === "name") return qt(t);
        if (n === "replicaInfo") return xn(t);
      } else {
        if (n === "masks") return yn(t);
        if (n === "pathSegments") return k(t);
      }
    } else {
      let m = n.length < 3 ? -1 : n.charCodeAt(2);
      if (m !== -1 && m < 105) {
        if (n === "shadows") return k(t);
        if (n === "previewSettings") return k(t);
      } else {
        if (n === "whileHoverBoxShadow") return k(t);
        if (n === "whileTapBoxShadow") return k(t);
        if (n === "styledText") return Sn(t);
      }
    }
  }
  return t;
}
function Ut() {
  throw new ReferenceError(
    "This file is replaced by the generated version in production and should not be used"
  );
}
var J = Object.values({ valueFromNode: P, reviveProperty: j }).every((n) => n !== Ut);
function Ye() {
  if (!H.isDebugBuild) return;
  !J && H.isTest;
}
function Xe() {
  if (!J || !H.isDebugBuild) return !0;
  for (let n of mn()) if (!Tn(P(n), En.generics.valueFromNode(n))) return !1;
  return !0;
}
function We(n) {
  Ye();
  let t = Xe();
  if (
    (J
      ? t
        ? H.isDebugBuild
          ? A.debug("FastTreeLibrary build and up to date.")
          : A.debug("FastTreeLibrary build found.")
        : A.warn(
            "FastTreeLibrary build is out of date. Using generic methods instead. See tools/canvas-tree-tool/README.md"
          )
      : A.debug(
          "FastTreeLibrary has not been build. Using generic methods instead. See tools/canvas-tree-tool/README.md"
        ),
    !J || !t)
  ) {
    if (n.mode === "generic") return;
    n.resetIntegration();
    return;
  }
  let r = gn.isOn("fastTreeLibrary") && !!1;
  if ((A.debug("setup:", r ? "useFast" : "generic"), r)) {
    if (n.mode === "fast") return;
    n.updateIntegration("fast", { valueFromNode: P, reviveProperty: j });
  } else {
    if (n.mode === "generic") return;
    n.resetIntegration();
  }
}
export { We as a };
//# sourceMappingURL=chunk-T2WYRND6.mjs.map
