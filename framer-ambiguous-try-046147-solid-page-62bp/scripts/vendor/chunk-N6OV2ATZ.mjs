import {
  Pd as Cn,
  cd as xn,
  ld as k,
  md as nn,
  od as Sn,
  pd as yn,
  qd as En,
} from "chunk-OYVRAKR2.mjs";
import { a as gn } from "chunk-SMHMQ5IL.mjs";
import { k as mn } from "chunk-QJ5JZ2YH.mjs";
import { o as V } from "chunk-MH6PQK43.mjs";
import { j as un } from "chunk-PFWVXZ76.mjs";
var O = un("tree-library");
function Nn(n) {
  ((this.master = n.master),
    n.inheritsFrom && (this.inheritsFrom = n.inheritsFrom),
    (this.overrides = tn(n.overrides)));
}
Nn.prototype = Object.prototype;
function In() {}
In.prototype = Object.prototype;
function _n(n) {
  return Reflect.construct(Nn, [n]);
}
function tn(n) {
  if (n === null || typeof n != "object") return n;
  if (Array.isArray(n)) return $t(n);
  if (typeof n == "object") {
    let t = Reflect.construct(In, []);
    for (let h in n) {
      let r = n[h];
      h === "styledText" &&
      r &&
      (typeof r == "object" || typeof r == "function") &&
      "toJS" in r &&
      typeof r.toJS == "function"
        ? (t[h] = r.toJS())
        : (t[h] = tn(r));
    }
    return t;
  }
  return n;
}
function $t(n) {
  let t = new Array();
  for (let h = 0; h < n.length; h++) t[h] = tn(n[h]);
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
    let h = (n.children = []);
    for (let r of t.children) h.push(A(r));
  }
}
function s(n, t) {
  ((n.moduleSourceRevision = t.moduleSourceRevision),
    (n.moduleSourceRevisionCommittedHint = t.moduleSourceRevisionCommittedHint),
    (n.moduleSourceRevisionHint = t.moduleSourceRevisionHint));
}
function l(n, t) {
  n.radius = t.radius;
}
function a(n, t) {
  ((n.height = t.height), (n.locked = t.locked), (n.opacity = t.opacity), (n.width = t.width));
}
function d(n, t) {
  n.ref = t.ref;
}
function c(n, t) {
  ((n.position = t.position),
    (n.positionStickyBottom = t.positionStickyBottom),
    (n.positionStickyLeft = t.positionStickyLeft),
    (n.positionStickyRight = t.positionStickyRight),
    (n.positionStickyTop = t.positionStickyTop));
}
function p(n, t) {
  ((n.fillColor = t.fillColor),
    (n.fillConicGradient = t.fillConicGradient),
    (n.fillLinearGradient = t.fillLinearGradient),
    (n.fillRadialGradient = t.fillRadialGradient),
    (n.fillType = t.fillType));
}
function g(n, t) {
  ((n.radiusBottomLeft = t.radiusBottomLeft),
    (n.radiusBottomRight = t.radiusBottomRight),
    (n.radiusPerCorner = t.radiusPerCorner),
    (n.radiusTopLeft = t.radiusTopLeft),
    (n.radiusTopRight = t.radiusTopRight));
}
function f(n, t) {
  n.aspectRatio = t.aspectRatio;
}
function w(n, t) {
  n.fillEnabled = t.fillEnabled;
}
function T(n, t) {
  n.boxShadows = t.boxShadows;
}
function u(n, t) {
  n.exportOptions = t.exportOptions;
}
function E(n, t) {
  n.cornerShape = t.cornerShape;
}
function m(n, t) {
  n.rotation = t.rotation;
}
function C(n, t) {
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
function S(n, t) {
  ((n.fillImage = t.fillImage),
    (n.fillImageOriginalName = t.fillImageOriginalName),
    (n.fillImagePixelHeight = t.fillImagePixelHeight),
    (n.fillImagePixelWidth = t.fillImagePixelWidth),
    (n.fillImagePositionX = t.fillImagePositionX),
    (n.fillImagePositionY = t.fillImagePositionY),
    (n.fillImageResize = t.fillImageResize),
    (n.fillImageTileSize = t.fillImageTileSize));
}
function y(n, t) {
  n.zIndex = t.zIndex;
}
function N(n, t) {
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
function I(n, t) {
  n.tabIndex = t.tabIndex;
}
function _(n, t) {
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
function z(n, t) {
  n.radiusIsRelative = t.radiusIsRelative;
}
function B(n, t) {
  n.pointerEvents = t.pointerEvents;
}
function R(n, t) {
  ((n.blendingMode = t.blendingMode),
    (n.maxHeight = t.maxHeight),
    (n.maxWidth = t.maxWidth),
    (n.minHeight = t.minHeight),
    (n.minWidth = t.minWidth));
}
function b(n, t) {
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
function L(n, t) {
  ((n.codeOverrideEnabled = t.codeOverrideEnabled),
    (n.codeOverrideIdentifier = t.codeOverrideIdentifier));
}
function M(n, t) {
  ((n.x = t.x), (n.y = t.y));
}
function P(n, t) {
  ((n.guidesX = t.guidesX), (n.guidesY = t.guidesY));
}
function F(n, t) {
  n.variables = t.variables;
}
function Y(n, t) {
  ((n.padding = t.padding),
    (n.paddingBottom = t.paddingBottom),
    (n.paddingLeft = t.paddingLeft),
    (n.paddingPerSide = t.paddingPerSide),
    (n.paddingRight = t.paddingRight),
    (n.paddingTop = t.paddingTop));
}
function D(n, t) {
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
function X(n, t) {
  n.path = t.path;
}
function W(n, t) {
  ((n.parallaxAdjustPosition = t.parallaxAdjustPosition),
    (n.parallaxEnabled = t.parallaxEnabled),
    (n.parallaxOffset = t.parallaxOffset),
    (n.parallaxSpeed = t.parallaxSpeed));
}
function H(n, t) {
  n.transition = t.transition;
}
function J(n, t) {
  n.userSelect = t.userSelect;
}
function U(n, t) {
  n.description = t.description;
}
function G(n, t) {
  n.codeOverrides = t.codeOverrides;
}
function $(n, t) {
  ((n.isExternalMaster = t.isExternalMaster),
    (n.isMaster = t.isMaster),
    (n.replicaInfo = t.replicaInfo ? _n(t.replicaInfo) : null));
}
function Z(n, t) {
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
function on(n, t) {
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
function rn(n, t) {
  n.paragraphSpacing = t.paragraphSpacing;
}
function Rn(n, t) {
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
function K(n, t) {
  ((n.intrinsicHeight = t.intrinsicHeight), (n.intrinsicWidth = t.intrinsicWidth));
}
function Q(n, t) {
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
function sn(n, t) {
  n.expandToAllLocales = t.expandToAllLocales;
}
function j(n, t) {
  n.triggerActions = t.triggerActions;
}
function an(n, t) {
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
function dn(n, t) {
  n.baseVariantId = t.baseVariantId;
}
function cn(n, t) {
  n.radiusSmoothing = t.radiusSmoothing;
}
function fn(n, t) {
  n.previewSettings = t.previewSettings;
}
function zn(n, t) {
  ((n.breakpointWidth = t.breakpointWidth),
    (n.fontBold = t.fontBold),
    (n.fontBoldItalic = t.fontBoldItalic),
    (n.fontItalic = t.fontItalic));
}
function ln(n, t) {
  ((n.link = t.link),
    (n.linkClickTrackingId = t.linkClickTrackingId),
    (n.linkLocalized = t.linkLocalized),
    (n.linkOpenInNewTab = t.linkOpenInNewTab),
    (n.linkPreserveParams = t.linkPreserveParams),
    (n.linkRelValues = t.linkRelValues),
    (n.linkSmoothScroll = t.linkSmoothScroll));
}
function pn(n, t) {
  n.title = t.title;
}
function Bn(n, t) {
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
function hn(n, t) {
  n.viewTransitionNone = t.viewTransitionNone;
}
function kn(n, t) {
  n.dataIdentifier = t.dataIdentifier;
}
function wn(n, t) {
  ((n.floatingAlignment = t.floatingAlignment),
    (n.floatingCollisionDetection = t.floatingCollisionDetection),
    (n.floatingCollisionPadding = t.floatingCollisionPadding),
    (n.floatingOffsetX = t.floatingOffsetX),
    (n.floatingOffsetY = t.floatingOffsetY),
    (n.floatingPlacement = t.floatingPlacement),
    (n.floatingPositionEnabled = t.floatingPositionEnabled),
    (n.floatingSafeArea = t.floatingSafeArea));
}
function bn(n, t) {
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
function Mn(n, t) {
  n.codeComponentIdentifier = t.codeComponentIdentifier;
}
function Pn(n, t) {
  n.to = t.to;
}
function An(n, t) {
  ((n.createdAt = t.createdAt), (n.updatedAt = t.updatedAt));
}
function On(n, t) {
  n.textWrapBalance = t.textWrapBalance;
}
function Ln(n, t) {
  ((n.isTarget = t.isTarget),
    (n.overflow = t.overflow),
    (n.overflowX = t.overflowX),
    (n.overflowY = t.overflowY));
}
function Fn(n, t) {
  n.targetUrl = t.targetUrl;
}
function Dn(n, t) {
  n.centered = t.centered;
}
function Hn(n, t) {
  ((n.defaultLocaleOverride = t.defaultLocaleOverride),
    (n.includedLocales = t.includedLocales),
    (n.isDraft = t.isDraft),
    (n.localeConfig = t.localeConfig));
}
function Vn(n, t) {
  n.managedByPlugin = t.managedByPlugin;
}
function Yn(n, t) {
  n.shadows = t.shadows;
}
function Zt(n, t) {
  ((n.caseSensitive = t.caseSensitive),
    (n.term = t.term),
    (n.translatable = t.translatable),
    (n.translations = t.translations));
}
function Xn(n, t) {
  n.type = t.type;
}
function Wn(n, t) {
  ((n.ariaLabel = t.ariaLabel),
    (n.repeatArray = t.repeatArray),
    (n.repeatArrayTransforms = t.repeatArrayTransforms));
}
function Kt(n, t) {
  ((n.inlineCodeFillColor = t.inlineCodeFillColor),
    (n.inlineCodeFont = t.inlineCodeFont),
    (n.inlineCodeFontSizeScale = t.inlineCodeFontSizeScale),
    (n.inlineCodePaddingHorizontal = t.inlineCodePaddingHorizontal),
    (n.inlineCodePaddingVertical = t.inlineCodePaddingVertical),
    (n.inlineCodeTextColor = t.inlineCodeTextColor));
}
function Qt(n, t) {
  ((n.lineColor = t.lineColor),
    (n.lineEnabled = t.lineEnabled),
    (n.lineRadius = t.lineRadius),
    (n.lineWidth = t.lineWidth),
    (n.textStyleEnabled = t.textStyleEnabled));
}
function Jn(n, t) {
  n.abTestingParentId = t.abTestingParentId;
}
function qn(n, t) {
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
function jt(n, t) {
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
function vt(n, t) {
  ((n.textContent = t.textContent), (n.textVerticalAlignment = t.textVerticalAlignment));
}
function Un(n, t) {
  ((n.descriptionLocalized = t.descriptionLocalized),
    (n.titleLocalized = t.titleLocalized),
    (n.webMetadata = t.webMetadata));
}
function ne(n, t) {
  ((n.formBooleanInputCheckedBorderColor = t.formBooleanInputCheckedBorderColor),
    (n.formBooleanInputCheckedBorderStyle = t.formBooleanInputCheckedBorderStyle),
    (n.formBooleanInputCheckedBorderWidth = t.formBooleanInputCheckedBorderWidth),
    (n.formBooleanInputCheckedBoxShadow = t.formBooleanInputCheckedBoxShadow),
    (n.formBooleanInputCheckedFillColor = t.formBooleanInputCheckedFillColor),
    (n.formBooleanInputCheckedTransition = t.formBooleanInputCheckedTransition),
    (n.formBooleanInputType = t.formBooleanInputType),
    (n.formBooleanInputValue = t.formBooleanInputValue));
}
function te(n, t) {
  ((n.tableBorderColor = t.tableBorderColor),
    (n.tableBorderEnabled = t.tableBorderEnabled),
    (n.tableBorderInner = t.tableBorderInner),
    (n.tableBorderOuter = t.tableBorderOuter),
    (n.tableBorderStyle = t.tableBorderStyle),
    (n.tableBorderWidth = t.tableBorderWidth),
    (n.tableFillColor = t.tableFillColor),
    (n.tableHeaderFillColor = t.tableHeaderFillColor));
}
function ee(n, t) {
  ((n.trackingEventType = t.trackingEventType),
    (n.trackingId = t.trackingId),
    (n.trackingIdNodesSnapshot = t.trackingIdNodesSnapshot),
    (n.trackingIdNodesSnapshotCreatedAt = t.trackingIdNodesSnapshotCreatedAt),
    (n.trackingRoutePath = t.trackingRoutePath));
}
function oe(n, t) {
  n.componentIdentifier = t.componentIdentifier;
}
function ie(n, t) {
  n.linkTransition = t.linkTransition;
}
function re(n, t) {
  n.tag = t.tag;
}
function se(n, t) {
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
function ae(n, t) {
  ((n.autoSize = t.autoSize),
    (n.contentHash = t.contentHash),
    (n.exportIncludesBackground = t.exportIncludesBackground),
    (n.isVectorSetItem = t.isVectorSetItem),
    (n.sizeToFit = t.sizeToFit));
}
function de(n, t) {
  ((n.externalId = t.externalId),
    (n.privateToUserId = t.privateToUserId),
    (n.updatedAtByPlugin = t.updatedAtByPlugin));
}
function ce(n, t) {
  n.originalSymbolId = t.originalSymbolId;
}
function fe(n, t) {
  ((n.action = t.action),
    (n.countries = t.countries),
    (n.localeId = t.localeId),
    (n.negateCountries = t.negateCountries),
    (n.negatePath = t.negatePath));
}
function le(n, t) {
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
function pe(n, t) {
  ((n.matchPagesFirst = t.matchPagesFirst), (n.rewriteType = t.rewriteType));
}
function he(n, t) {
  n.pathBoolean = t.pathBoolean;
}
function ke(n, t) {
  n.polygonSides = t.polygonSides;
}
function we(n, t) {
  ((n.segment = t.segment), (n.segmentLocalized = t.segmentLocalized), (n.webPageId = t.webPageId));
}
function Te(n, t) {
  n.slotPropertyKey = t.slotPropertyKey;
}
function ue(n, t) {
  n.headers = t.headers;
}
function ge(n, t) {
  n.save = t.save;
}
function me(n, t) {
  ((n.allItemsLabel = t.allItemsLabel),
    (n.allItemsLabelLocalized = t.allItemsLabelLocalized),
    (n.booleanFalseLabel = t.booleanFalseLabel),
    (n.booleanFalseLabelLocalized = t.booleanFalseLabelLocalized),
    (n.booleanTrueLabel = t.booleanTrueLabel),
    (n.booleanTrueLabelLocalized = t.booleanTrueLabelLocalized),
    (n.formInputInvalidTextColor = t.formInputInvalidTextColor),
    (n.formSelectOptions = t.formSelectOptions));
}
function xe(n, t) {
  ((n.cases = t.cases), (n.preventLocalization = t.preventLocalization));
}
function Se(n, t) {
  ((n.code = t.code),
    (n.disabled = t.disabled),
    (n.loadMode = t.loadMode),
    (n.pageIds = t.pageIds),
    (n.placement = t.placement));
}
function ye(n, t) {
  n.homeNodeId = t.homeNodeId;
}
function Ee(n, t) {
  ((n.instruction = t.instruction), (n.trigger = t.trigger));
}
function Ce(n, t) {
  ((n.pluginVariableIds = t.pluginVariableIds),
    (n.sorting = t.sorting),
    (n.sortingRules = t.sortingRules),
    (n.statusFieldIndex = t.statusFieldIndex));
}
function Ne(n, t) {
  ((n.spikeCount = t.spikeCount), (n.spikeDepth = t.spikeDepth));
}
function Ie(n, t) {
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
function _e(n, t) {
  n.autoBranching = t.autoBranching;
}
function Re(n, t) {
  ((n.abTestingDistributionWeightPpm = t.abTestingDistributionWeightPpm),
    (n.layoutTemplateIdentifierOverride = t.layoutTemplateIdentifierOverride),
    (n.pagePath = t.pagePath));
}
function ze(n, t) {
  ((n.backdropDismissible = t.backdropDismissible),
    (n.backdropEnterTransition = t.backdropEnterTransition),
    (n.backdropExitTransition = t.backdropExitTransition),
    (n.backdropFill = t.backdropFill),
    (n.backdropFillEnabled = t.backdropFillEnabled),
    (n.backdropTransitionLocked = t.backdropTransitionLocked),
    (n.blockDocumentScrolling = t.blockDocumentScrolling));
}
function Be(n, t) {
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
function be(n, t) {
  ((n.baseId = t.baseId),
    (n.closure = t.closure),
    (n.contributors = t.contributors),
    (n.createdBy = t.createdBy),
    (n.creationTrigger = t.creationTrigger),
    (n.deletedAt = t.deletedAt),
    (n.lastEdited = t.lastEdited));
}
function Me(n, t) {
  n.committedRewritesHash = t.committedRewritesHash;
}
function Pe(n, t) {
  ((n.shaderFallbackImage = t.shaderFallbackImage),
    (n.shaderFallbackImageHash = t.shaderFallbackImageHash),
    (n.shaderModuleIdentifier = t.shaderModuleIdentifier),
    (n.shaderMouseEnabled = t.shaderMouseEnabled),
    (n.shaderMouseSpringOptions = t.shaderMouseSpringOptions));
}
function Ae(n, t) {
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
function Oe(n, t) {
  ((n.moduleIdentifier = t.moduleIdentifier),
    (n.nodeId = t.nodeId),
    (n.reason = t.reason),
    (n.scopeId = t.scopeId),
    (n.sourceNodeId = t.sourceNodeId),
    (n.sourceNodeModuleType = t.sourceNodeModuleType));
}
function Le(n, t) {
  ((n.allSlugsResolvedAtRuntime = t.allSlugsResolvedAtRuntime),
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
function Fe(n, t) {
  ((n.pathClosed = t.pathClosed), (n.pathSegments = t.pathSegments));
}
function De(n, t) {
  ((n.colorable = t.colorable), (n.originalFilename = t.originalFilename), (n.svg = t.svg));
}
function i(n) {
  ((this.__class = n.__class), e(this, n), o(this, n));
}
i.prototype = Object.prototype;
function Gn(n) {
  ((this.__class = n.__class), e(this, n), U(this, n), Ee(this, n));
}
Gn.prototype = Object.prototype;
function $n(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    l(this, n),
    p(this, n),
    g(this, n),
    w(this, n),
    E(this, n),
    C(this, n),
    S(this, n),
    z(this, n),
    Y(this, n),
    $(this, n),
    rn(this, n),
    Rn(this, n),
    zn(this, n),
    Qt(this, n));
}
$n.prototype = Object.prototype;
function Zn(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    p(this, n),
    f(this, n),
    w(this, n),
    T(this, n),
    u(this, n),
    m(this, n),
    S(this, n),
    M(this, n),
    D(this, n),
    he(this, n));
}
Zn.prototype = Object.prototype;
function Kn(n) {
  ((this.__class = n.__class), e(this, n), be(this, n));
}
Kn.prototype = Object.prototype;
function Qn(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), _e(this, n));
}
Qn.prototype = Object.prototype;
function jn(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), P(this, n), ye(this, n));
}
jn.prototype = Object.prototype;
function vn(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    l(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    p(this, n),
    g(this, n),
    f(this, n),
    w(this, n),
    T(this, n),
    u(this, n),
    m(this, n),
    C(this, n),
    S(this, n),
    y(this, n),
    N(this, n),
    I(this, n),
    _(this, n),
    z(this, n),
    B(this, n),
    R(this, n),
    b(this, n),
    L(this, n),
    W(this, n),
    H(this, n),
    J(this, n),
    Z(this, n),
    K(this, n),
    Q(this, n),
    j(this, n),
    an(this, n),
    fn(this, n),
    hn(this, n),
    wn(this, n),
    Mn(this, n),
    Wn(this, n),
    le(this, n));
  for (let t in n) (!t.startsWith("$control__") && !t.startsWith("$plugin__")) || (this[t] = n[t]);
}
vn.prototype = Object.prototype;
function nt(n) {
  ((this.__class = n.__class), e(this, n), s(this, n), An(this, n), Hn(this, n), de(this, n));
  for (let t in n) t.startsWith("$control__") && (this[t] = n[t]);
}
nt.prototype = Object.prototype;
function tt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    F(this, n),
    Vn(this, n),
    Ce(this, n));
  for (let t in n) t.startsWith("$plugin__") && (this[t] = n[t]);
}
tt.prototype = Object.prototype;
function et(n) {
  ((this.__class = n.__class), e(this, n), oe(this, n));
  for (let t in n) t.startsWith("$control__") && (this[t] = n[t]);
}
et.prototype = Object.prototype;
function ot(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), An(this, n), Vn(this, n), Se(this, n));
}
ot.prototype = Object.prototype;
function en(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), s(this, n));
}
en.prototype = Object.prototype;
function it(n) {
  ((this.__class = n.__class), e(this, n), F(this, n));
}
it.prototype = Object.prototype;
function rt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), P(this, n));
}
rt.prototype = Object.prototype;
function st(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Xn(this, n), Oe(this, n));
}
st.prototype = Object.prototype;
function at(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    K(this, n),
    pn(this, n),
    Mn(this, n),
    Xn(this, n),
    se(this, n));
}
at.prototype = Object.prototype;
function dt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), X(this, n), Pn(this, n), fe(this, n));
}
dt.prototype = Object.prototype;
function ct(n) {
  ((this.__class = n.__class),
    e(this, n),
    l(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    p(this, n),
    g(this, n),
    f(this, n),
    w(this, n),
    T(this, n),
    E(this, n),
    C(this, n),
    y(this, n),
    N(this, n),
    I(this, n),
    _(this, n),
    z(this, n),
    B(this, n),
    R(this, n),
    b(this, n),
    L(this, n),
    G(this, n),
    on(this, n),
    ne(this, n));
}
ct.prototype = Object.prototype;
function ft(n) {
  ((this.__class = n.__class),
    e(this, n),
    l(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    p(this, n),
    g(this, n),
    f(this, n),
    w(this, n),
    T(this, n),
    E(this, n),
    C(this, n),
    y(this, n),
    N(this, n),
    I(this, n),
    _(this, n),
    z(this, n),
    B(this, n),
    R(this, n),
    b(this, n),
    L(this, n),
    Y(this, n),
    G(this, n),
    on(this, n),
    bn(this, n),
    jt(this, n));
}
ft.prototype = Object.prototype;
function lt(n) {
  ((this.__class = n.__class),
    e(this, n),
    l(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    p(this, n),
    g(this, n),
    f(this, n),
    w(this, n),
    T(this, n),
    E(this, n),
    C(this, n),
    y(this, n),
    N(this, n),
    I(this, n),
    _(this, n),
    z(this, n),
    B(this, n),
    R(this, n),
    b(this, n),
    L(this, n),
    Y(this, n),
    J(this, n),
    G(this, n),
    on(this, n),
    bn(this, n),
    me(this, n));
}
lt.prototype = Object.prototype;
function pt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    l(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    p(this, n),
    g(this, n),
    f(this, n),
    w(this, n),
    T(this, n),
    u(this, n),
    E(this, n),
    m(this, n),
    C(this, n),
    S(this, n),
    y(this, n),
    N(this, n),
    I(this, n),
    _(this, n),
    z(this, n),
    B(this, n),
    R(this, n),
    b(this, n),
    L(this, n),
    P(this, n),
    Y(this, n),
    W(this, n),
    H(this, n),
    J(this, n),
    G(this, n),
    $(this, n),
    Z(this, n),
    K(this, n),
    Q(this, n),
    j(this, n),
    an(this, n),
    fn(this, n),
    ln(this, n),
    hn(this, n),
    kn(this, n),
    wn(this, n),
    Ln(this, n),
    Wn(this, n),
    qn(this, n),
    Ae(this, n));
  for (let t in n) (!t.startsWith("$control__") && !t.startsWith("$plugin__")) || (this[t] = n[t]);
}
pt.prototype = Object.prototype;
function ht(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Jn(this, n), Be(this, n));
}
ht.prototype = Object.prototype;
function kt(n) {
  ((this.__class = n.__class), e(this, n), ee(this, n));
}
kt.prototype = Object.prototype;
function wt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), X(this, n), sn(this, n), ue(this, n));
}
wt.prototype = Object.prototype;
function Tt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    l(this, n),
    g(this, n),
    T(this, n),
    E(this, n),
    C(this, n));
}
Tt.prototype = Object.prototype;
function ut(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    l(this, n),
    g(this, n),
    E(this, n),
    C(this, n),
    Kt(this, n));
}
ut.prototype = Object.prototype;
function gt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    P(this, n),
    F(this, n),
    dn(this, n));
}
gt.prototype = Object.prototype;
function mt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), s(this, n), Bn(this, n), ie(this, n));
}
mt.prototype = Object.prototype;
function xt(n) {
  ((this.__class = n.__class), e(this, n), ge(this, n));
}
xt.prototype = Object.prototype;
function St(n) {
  ((this.__class = n.__class), e(this, n), U(this, n), Zt(this, n));
}
St.prototype = Object.prototype;
function yt(n) {
  ((this.__class = n.__class),
    e(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    p(this, n),
    f(this, n),
    w(this, n),
    T(this, n),
    u(this, n),
    m(this, n),
    S(this, n),
    M(this, n),
    D(this, n));
}
yt.prototype = Object.prototype;
function Et(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    y(this, n),
    $(this, n),
    j(this, n),
    ze(this, n));
}
Et.prototype = Object.prototype;
function Ct(n) {
  ((this.__class = n.__class),
    e(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    p(this, n),
    f(this, n),
    w(this, n),
    T(this, n),
    u(this, n),
    m(this, n),
    S(this, n),
    M(this, n),
    D(this, n),
    Fe(this, n));
}
Ct.prototype = Object.prototype;
function Nt(n) {
  ((this.__class = n.__class),
    e(this, n),
    l(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    p(this, n),
    f(this, n),
    w(this, n),
    T(this, n),
    u(this, n),
    m(this, n),
    S(this, n),
    M(this, n),
    D(this, n),
    cn(this, n),
    Dn(this, n),
    ke(this, n));
}
Nt.prototype = Object.prototype;
function It(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), X(this, n), Fn(this, n));
}
It.prototype = Object.prototype;
function _t(n) {
  ((this.__class = n.__class),
    e(this, n),
    l(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    p(this, n),
    g(this, n),
    f(this, n),
    w(this, n),
    T(this, n),
    u(this, n),
    m(this, n),
    S(this, n),
    M(this, n),
    D(this, n),
    cn(this, n));
}
_t.prototype = Object.prototype;
function Rt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), X(this, n), sn(this, n), Pn(this, n));
}
Rt.prototype = Object.prototype;
function zt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    X(this, n),
    sn(this, n),
    Fn(this, n),
    pe(this, n));
}
zt.prototype = Object.prototype;
function Bt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    f(this, n),
    u(this, n),
    m(this, n),
    y(this, n),
    N(this, n),
    I(this, n),
    _(this, n),
    B(this, n),
    R(this, n),
    b(this, n),
    L(this, n),
    W(this, n),
    H(this, n),
    J(this, n),
    Z(this, n),
    rn(this, n),
    Q(this, n),
    an(this, n),
    Bn(this, n),
    hn(this, n),
    On(this, n),
    Ln(this, n),
    Yn(this, n),
    qn(this, n),
    vt(this, n),
    Ie(this, n));
  for (let t in n) t.startsWith("$componentPreset__") && (this[t] = n[t]);
}
Bt.prototype = Object.prototype;
function bt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Un(this, n), Le(this, n));
  for (let t in n) t.startsWith("$plugin__") && (this[t] = n[t]);
}
bt.prototype = Object.prototype;
function Mt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), kn(this, n), we(this, n));
}
Mt.prototype = Object.prototype;
function Pt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Me(this, n));
}
Pt.prototype = Object.prototype;
function At(n) {
  ((this.__class = n.__class),
    e(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    p(this, n),
    f(this, n),
    u(this, n),
    m(this, n),
    S(this, n),
    y(this, n),
    N(this, n),
    I(this, n),
    _(this, n),
    R(this, n),
    H(this, n),
    U(this, n),
    K(this, n),
    ln(this, n),
    pn(this, n),
    Yn(this, n),
    De(this, n));
  for (let t in n) t.startsWith("$plugin__") && (this[t] = n[t]);
}
At.prototype = Object.prototype;
function Ot(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    l(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    g(this, n),
    f(this, n),
    T(this, n),
    u(this, n),
    E(this, n),
    m(this, n),
    C(this, n),
    y(this, n),
    N(this, n),
    _(this, n),
    z(this, n),
    B(this, n),
    R(this, n),
    b(this, n),
    W(this, n),
    H(this, n),
    J(this, n),
    Z(this, n),
    Q(this, n),
    j(this, n),
    wn(this, n),
    Pe(this, n));
  for (let t in n) t.startsWith("$control__") && (this[t] = n[t]);
}
Ot.prototype = Object.prototype;
function Lt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    l(this, n),
    a(this, n),
    d(this, n),
    p(this, n),
    g(this, n),
    w(this, n),
    u(this, n),
    S(this, n),
    y(this, n),
    N(this, n),
    I(this, n),
    W(this, n),
    H(this, n),
    U(this, n),
    fn(this, n),
    ln(this, n),
    pn(this, n),
    ae(this, n));
}
Lt.prototype = Object.prototype;
function Ft(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    f(this, n),
    u(this, n),
    m(this, n),
    M(this, n));
}
Ft.prototype = Object.prototype;
function Dt(n) {
  ((this.__class = n.__class), e(this, n), s(this, n), xe(this, n));
}
Dt.prototype = Object.prototype;
function Ht(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), Te(this, n));
}
Ht.prototype = Object.prototype;
function Vt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    P(this, n),
    F(this, n),
    dn(this, n),
    ce(this, n));
  for (let t in n) t.startsWith("$plugin__") && (this[t] = n[t]);
}
Vt.prototype = Object.prototype;
function Yt(n) {
  ((this.__class = n.__class),
    e(this, n),
    l(this, n),
    a(this, n),
    d(this, n),
    c(this, n),
    p(this, n),
    f(this, n),
    w(this, n),
    T(this, n),
    u(this, n),
    m(this, n),
    S(this, n),
    M(this, n),
    D(this, n),
    cn(this, n),
    Dn(this, n),
    Ne(this, n));
}
Yt.prototype = Object.prototype;
function Xt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    l(this, n),
    g(this, n),
    E(this, n),
    Y(this, n),
    te(this, n));
}
Xt.prototype = Object.prototype;
function Wt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    $(this, n),
    rn(this, n),
    Rn(this, n),
    zn(this, n),
    On(this, n),
    re(this, n));
  for (let t in n) t.startsWith("$plugin__") && (this[t] = n[t]);
}
Wt.prototype = Object.prototype;
function Jt(n) {
  ((this.__class = n.__class), e(this, n), o(this, n), s(this, n), P(this, n), F(this, n));
}
Jt.prototype = Object.prototype;
function qt(n) {
  ((this.__class = n.__class),
    e(this, n),
    o(this, n),
    s(this, n),
    P(this, n),
    F(this, n),
    dn(this, n),
    kn(this, n),
    Hn(this, n),
    Jn(this, n),
    Un(this, n),
    Re(this, n));
  for (let t in n) (!t.startsWith("$control__") && !t.startsWith("$plugin__")) || (this[t] = n[t]);
}
qt.prototype = Object.prototype;
function A(n) {
  switch (n.__class) {
    case "AbTestsEntityTypeRootNode":
      return Reflect.construct(i, [n]);
    case "AgentSkillNode":
      return Reflect.construct(Gn, [n]);
    case "AgentSkillsListNode":
      return Reflect.construct(i, [n]);
    case "AnalyticsScopeNode":
      return Reflect.construct(i, [n]);
    case "AssetsEntityTypeRootNode":
      return Reflect.construct(i, [n]);
    case "BlockquoteStylePresetNode":
      return Reflect.construct($n, [n]);
    case "BooleanShapeNode":
      return Reflect.construct(Zn, [n]);
    case "BranchNode":
      return Reflect.construct(Kn, [n]);
    case "BranchesNode":
      return Reflect.construct(Qn, [n]);
    case "CanvasPageNode":
      return Reflect.construct(jn, [n]);
    case "CodeComponentNode":
      return Reflect.construct(vn, [n]);
    case "CollectionItemNode":
      return Reflect.construct(nt, [n]);
    case "CollectionNode":
      return Reflect.construct(tt, [n]);
    case "ColorStyleTokenListNode":
      return Reflect.construct(i, [n]);
    case "ColorStyleTokenNode":
      return n.toJS();
    case "ComponentPresetNode":
      return Reflect.construct(et, [n]);
    case "ContentManagementEntityTypeRootNode":
      return Reflect.construct(i, [n]);
    case "ContentManagementNode":
      return Reflect.construct(i, [n]);
    case "CustomCodeNode":
      return Reflect.construct(ot, [n]);
    case "CustomCodeScopeNode":
      return Reflect.construct(en, [n]);
    case "DatabaseListNode":
      return Reflect.construct(i, [n]);
    case "DatabaseNode":
      return Reflect.construct(i, [n]);
    case "DatabaseTableNode":
      return Reflect.construct(it, [n]);
    case "DesignPageEntityTypeRootNode":
      return Reflect.construct(i, [n]);
    case "DesignPageNode":
      return Reflect.construct(rt, [n]);
    case "EntityFolderNode":
      return Reflect.construct(i, [n]);
    case "EntityReferenceNode":
      return Reflect.construct(i, [n]);
    case "ErrorListNode":
      return Reflect.construct(i, [n]);
    case "ErrorNode":
      return Reflect.construct(st, [n]);
    case "ExternalModuleNode":
      return Reflect.construct(at, [n]);
    case "ExternalModulesListNode":
      return Reflect.construct(i, [n]);
    case "FirewallRouteNode":
      return Reflect.construct(dt, [n]);
    case "FormBooleanInputNode":
      return Reflect.construct(ct, [n]);
    case "FormPlainTextInputNode":
      return Reflect.construct(ft, [n]);
    case "FormSelectNode":
      return Reflect.construct(lt, [n]);
    case "FrameNode":
      return Reflect.construct(pt, [n]);
    case "FunnelNode":
      return Reflect.construct(ht, [n]);
    case "FunnelStepActionNode":
      return Reflect.construct(kt, [n]);
    case "FunnelStepNode":
      return Reflect.construct(i, [n]);
    case "FunnelsEntityTypeRootNode":
      return Reflect.construct(i, [n]);
    case "HeaderRouteNode":
      return Reflect.construct(wt, [n]);
    case "ImageStylePresetNode":
      return Reflect.construct(Tt, [n]);
    case "InlineCodeStylePresetNode":
      return Reflect.construct(ut, [n]);
    case "LayoutTemplateNode":
      return Reflect.construct(gt, [n]);
    case "LinkStylePresetNode":
      return Reflect.construct(mt, [n]);
    case "LocalModuleNode":
      return Reflect.construct(xt, [n]);
    case "LocalModulesListNode":
      return Reflect.construct(i, [n]);
    case "LocalizationGlossaryItemNode":
      return Reflect.construct(St, [n]);
    case "LocalizationGlossaryNode":
      return Reflect.construct(i, [n]);
    case "OvalShapeNode":
      return Reflect.construct(yt, [n]);
    case "OverlayNode":
      return Reflect.construct(Et, [n]);
    case "PathNode":
      return Reflect.construct(Ct, [n]);
    case "PolygonShapeNode":
      return Reflect.construct(Nt, [n]);
    case "PresetsListNode":
      return Reflect.construct(en, [n]);
    case "ProxyRouteNode":
      return Reflect.construct(It, [n]);
    case "RectangleShapeNode":
      return Reflect.construct(_t, [n]);
    case "RedirectRouteNode":
      return Reflect.construct(Rt, [n]);
    case "RewriteRouteNode":
      return Reflect.construct(zt, [n]);
    case "RichTextNode":
      return Reflect.construct(Bt, [n]);
    case "RootNode":
      return Reflect.construct(bt, [n]);
    case "RouteSegmentNode":
      return Reflect.construct(Mt, [n]);
    case "RouteSegmentRootNode":
      return Reflect.construct(i, [n]);
    case "RoutesNode":
      return Reflect.construct(Pt, [n]);
    case "SVGNode":
      return Reflect.construct(At, [n]);
    case "ShaderNode":
      return Reflect.construct(Ot, [n]);
    case "ShapeContainerNode":
      return Reflect.construct(Lt, [n]);
    case "ShapeGroupNode":
      return Reflect.construct(Ft, [n]);
    case "SharedEnumListNode":
      return Reflect.construct(i, [n]);
    case "SharedEnumNode":
      return Reflect.construct(Dt, [n]);
    case "SlotNode":
      return Reflect.construct(i, [n]);
    case "SlotPropertyNode":
      return Reflect.construct(Ht, [n]);
    case "SmartComponentNode":
      return Reflect.construct(Vt, [n]);
    case "StarShapeNode":
      return Reflect.construct(Yt, [n]);
    case "TableStylePresetNode":
      return Reflect.construct(Xt, [n]);
    case "TextNode":
      return n.toJS();
    case "TextStylePresetNode":
      return Reflect.construct(Wt, [n]);
    case "VectorSetNode":
      return Reflect.construct(Jt, [n]);
    case "WebPageNode":
      return Reflect.construct(qt, [n]);
  }
  let t = Object.create(Object.prototype);
  return ((t.__class = n.__class), t);
}
function Tn(n) {
  return Number.isFinite(n) ? n : 0;
}
function He(n) {
  return typeof n == "object" && n !== null && !Array.isArray(n);
}
var Ve = "generated";
function Ye(n) {
  return He(n) && Ve in n && n.generated === !0;
}
function Ut(n) {
  return typeof n == "string" || Ye(n) ? n : null;
}
function v(n, t) {
  if (n.charCodeAt(0) < 109) {
    let r = n.length < 2 ? -1 : n.charCodeAt(1);
    if (r !== -1 && r < 111) {
      let x = n.length < 3 ? -1 : n.charCodeAt(2);
      if (x !== -1 && x < 110) {
        if (n === "fillConicGradient") return k(t);
        if (n === "fillLinearGradient") return k(t);
        if (n === "fillRadialGradient") return k(t);
      } else {
        if (n === "centerAnchorX") return Tn(t);
        if (n === "centerAnchorY") return Tn(t);
      }
    } else {
      let x = n.length < 3 ? -1 : n.charCodeAt(2);
      if (x !== -1 && x < 114) {
        if (n === "guidesX") return nn(Array.isArray(t) ? t : []);
        if (n === "guidesY") return nn(Array.isArray(t) ? t : []);
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
      let x = n.length < 3 ? -1 : n.charCodeAt(2);
      if (x !== -1 && x < 115) {
        if (n === "name") return Ut(t);
        if (n === "replicaInfo") return Sn(t);
      } else {
        if (n === "masks") return En(t);
        if (n === "pathSegments") return k(t);
      }
    } else {
      let x = n.length < 3 ? -1 : n.charCodeAt(2);
      if (x !== -1 && x < 105) {
        if (n === "shadows") return k(t);
        if (n === "previewSettings") return k(t);
      } else {
        if (n === "whileHoverBoxShadow") return k(t);
        if (n === "whileTapBoxShadow") return k(t);
        if (n === "styledText") return yn(t);
      }
    }
  }
  return t;
}
function Gt() {
  throw new ReferenceError(
    "This file is replaced by the generated version in production and should not be used"
  );
}
var q = Object.values({ valueFromNode: A, reviveProperty: v }).every((n) => n !== Gt);
function Xe() {
  if (!V.isDebugBuild) return;
  !q && V.isTest;
}
function We() {
  if (!q || !V.isDebugBuild) return !0;
  for (let n of xn()) if (!gn(A(n), Cn.generics.valueFromNode(n))) return !1;
  return !0;
}
function Je(n) {
  Xe();
  let t = We();
  if (
    (q
      ? t
        ? V.isDebugBuild
          ? O.debug("FastTreeLibrary build and up to date.")
          : O.debug("FastTreeLibrary build found.")
        : O.warn(
            "FastTreeLibrary build is out of date. Using generic methods instead. See tools/canvas-tree-tool/README.md"
          )
      : O.debug(
          "FastTreeLibrary has not been build. Using generic methods instead. See tools/canvas-tree-tool/README.md"
        ),
    !q || !t)
  ) {
    if (n.mode === "generic") return;
    n.resetIntegration();
    return;
  }
  let r = mn.isOn("fastTreeLibrary") && !!1;
  if ((O.debug("setup:", r ? "useFast" : "generic"), r)) {
    if (n.mode === "fast") return;
    n.updateIntegration("fast", { valueFromNode: A, reviveProperty: v });
  } else {
    if (n.mode === "generic") return;
    n.resetIntegration();
  }
}
export { Je as a };
//# sourceMappingURL=chunk-N6OV2ATZ.mjs.map
