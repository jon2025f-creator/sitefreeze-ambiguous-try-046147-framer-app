import { b as G, c as $, d as j, e as y } from "chunk-U7D3G5NZ.mjs";
import { a as o } from "chunk-FCYBJO5T.mjs";
import { a as s, b as h } from "chunk-RHJ4RSOB.mjs";
import { a as c, b as r, c as e } from "chunk-W3QI3SCZ.mjs";
import { a as S, b as V, c as l } from "chunk-ISW56VHA.mjs";
import { a as W } from "chunk-QFU6OGL3.mjs";
import { d as L, e as E } from "chunk-AYNVEX5D.mjs";
import { a as O } from "chunk-2FCXHKEL.mjs";
import { a as F } from "chunk-SWYZG2NI.mjs";
import { b as R } from "chunk-4JY5UMT2.mjs";
import { e as T } from "chunk-WLHSDIGQ.mjs";
var i = T(F());
var m = "shadow";
var dr = (f) => (f === "light" ? e : o),
  pr = (f) =>
    Object.entries(f).map(([a, t]) => `${a}: ${t};`).join(`
`);
function n(f, a, t = {}) {
  let B = dr(f),
    b = {};
  return (
    Object.entries(B).forEach(([g, x]) => {
      if (g in t) {
        let d = t[g];
        if (!d) return;
        b[S(g, s)] = d;
        return;
      }
      if (x in a) {
        let d = a[x];
        if (!d) return;
        b[S(g, s)] = d;
      }
    }),
    pr(b)
  );
}
var K = {
    [e.tint]: e.componentTint,
    [e.tintDark]: r.purple140,
    [e.tintDimmed]: e.componentTintDimmed,
    [r.blue75]: r.purple150,
    [c(r.blue60, 0.4)]: c(r.purple100, 0.4),
    [c(r.blue60, 0.8)]: c(r.purple100, 0.8),
    [c(e.tint, 0.05)]: c(e.componentTint, 0.05),
    [c(e.tint, 0.08)]: c(e.componentTint, 0.08),
    [c(e.tint, 0.1)]: c(e.componentTint, 0.1),
    [c(e.tint, 0.15)]: c(e.componentTint, 0.15),
    [c(e.tint, 0.5)]: c(e.componentTint, 0.5),
  },
  z = {
    [o.tint]: o.componentTint,
    [o.tintDark]: r.purple95,
    [o.tintDimmed]: o.componentTintDimmed,
    [r.blue75]: r.purple150,
    [c(r.blue60, 0.4)]: c(r.purple90, 0.4),
    [c(r.blue60, 0.8)]: c(r.purple90, 0.8),
    [c(o.tint, 0.05)]: c(o.componentTint, 0.05),
    [c(o.tint, 0.08)]: c(o.componentTint, 0.08),
    [c(o.tint, 0.1)]: c(o.componentTint, 0.1),
    [c(o.tint, 0.15)]: c(o.componentTint, 0.15),
    [c(o.tint, 0.5)]: c(o.componentTint, 0.5),
  },
  U = {
    buttonBackgroundPrimaryActive: r.purple150,
    buttonWithDepthPrimaryShadow: e.buttonWithDepthPrimaryComponentShadow,
    buttonWithDepthPrimaryShadowHover:
      "0px 1px 2px 0px rgba(119, 51, 255, 0.15), 0px 2px 4px 0px rgba(119, 51, 255, 0.3)",
    layerItemIconDimmed: e.layerItemIconComponentDimmed,
    selectionBackground: "color(display-p3 0.52 0.357 0.965 / 0.15)",
    breadcrumbItemBackgroundTinted: e.componentTintDimmed,
  },
  q = {
    buttonBackgroundPrimaryActive: r.purple150,
    layerItemIconDimmed: o.layerItemIconComponentDimmed,
    selectionBackground: "color(display-p3 0.52 0.357 0.965 / 0.15)",
    breadcrumbItemBackgroundTinted: o.componentTintDimmed,
  },
  gr = {
    avatarTinted: `inset 0 0 0 1px ${c(e.componentTint, 0.15)}`,
    distributionSliderKnobSelected: `inset 0 0 0 3px white, inset 0 0 0 4px ${e.componentTint}, 0 0 0 1px ${e.componentTint}`,
    gradientSliderKnobSelected: `inset 0 0 0 3px white, inset 0 0 0 4px ${e.componentTint}, 0 0 0 1px ${e.componentTint}`,
  },
  ur = { tokens: gr, scope: m },
  Br = {
    avatarTinted: `inset 0 0 0 1px ${c(o.componentTint, 0.15)}`,
    distributionSliderKnobSelected: `inset 0 0 0 3px white, inset 0 0 0 4px ${o.componentTint}, 0 0 0 1px ${o.componentTint}`,
    gradientSliderKnobSelected: `inset 0 0 0 3px white, inset 0 0 0 4px rgba(0, 0, 0, 0.1), 0 0 0 1px ${o.panelBackground}, 0 0 0 2px ${o.componentTint}`,
  },
  br = { tokens: Br, scope: m },
  I = {
    light: `
	${n("light", K, U)}
	${l([ur])}
`,
    dark: `
	${n("dark", z, q)}
	${l([br])}
`,
  },
  P = {
    light: n("light", K, {
      ...U,
      canvasBackground: e.canvasComponentOverlayEditModeBackground,
      rulerBackground: "#DFCEFF",
      rulerBorderColor: e.rulerComponentOverlayEditModeBorderColor,
      rulerTextColor: e.rulerComponentOverlayEditModeTextColor,
      rulerTickColor: e.rulerComponentOverlayEditModeTickColor,
      rulerFadeOut: "rgba(136, 85, 255, 0)",
    }),
    dark: n("dark", z, {
      ...q,
      canvasBackground: o.canvasComponentOverlayEditModeBackground,
      rulerBackground: "#332455",
      rulerBorderColor: o.rulerComponentOverlayEditModeBorderColor,
      rulerTextColor: o.rulerComponentOverlayEditModeTextColor,
      rulerTickColor: o.rulerComponentOverlayEditModeTickColor,
      rulerFadeOut: "rgba(136, 85, 255, 0)",
    }),
  };
var N = {
    tint: r.white100,
    buttonBackgroundPrimary: r.white100,
    buttonBackgroundPrimaryHover: c(r.white100, 0.98),
    buttonBackgroundPrimaryActive: c(r.white100, 0.96),
    buttonTextPrimary: r.dark90,
    inputBorderActive: r.white100,
    comboBoxHighlightedRowTint: c(r.white100, 0.2),
    comboBoxHighlightedRowText: r.white100,
    swatchBackgroundPlaceholderForLink: r.dark50,
  },
  Q = n("light", {}, N),
  J = n("dark", {}, N);
var p = "0px 3px 6px 0px rgba(0, 0, 0, 0.08)",
  v = `${p}, 0px 0px 0px 1px rgba(0, 0, 0, 0.05)`,
  k = `inset 0px 0px 0px 1px ${c(r.white100, 0.07)}`;
var kr = { popoverInset: k },
  xr = { tokens: kr, scope: m },
  X = l([xr]);
var Tr = {
    panelBackground: o.popoverBackground,
    panelDivider: o.popoverDivider,
    inputBackground: r.dark83,
    buttonBackground: r.dark82,
    buttonBackgroundHover: r.dark80,
    popupButtonBackground: r.dark71,
    radioButtonBackground: r.dark71,
    segmentedControlDivider: r.dark60,
    segmentedControlItemBackgroundSelected: r.dark63,
    checkboxLabel: r.light80,
    menuBackground: r.dark81,
    menuSeparator: c(r.white100, 0.07),
    menuBackgroundActive: r.dark74,
    menuText: r.white100,
    menuTextActive: r.white100,
    tabsBackgroundSelected: r.dark83,
  },
  hr = { menu: `${p}, 0px 0px 0px 1px ${r.dark72}` },
  vr = {
    menuBackgroundActive: r.light59,
    menuText: r.dark80,
    menuTextActive: r.dark90,
    inputBackground: r.light55,
    inputText: r.dark90,
  },
  Cr = { tokens: vr, scope: s },
  Y = l([Cr]),
  Sr = { tokens: Tr, scope: s },
  yr = { tokens: hr, scope: m },
  Z = l([Sr, yr]);
var Ir = { tooltipBackground: r.dark81 },
  Pr = { tokens: Ir, scope: s },
  _ = l([Pr]);
var D = {
    light: n(
      "light",
      {
        [e.tint]: e.warningTint,
        [e.inputBorder]: e.warningTint,
        [e.tintDimmed]: e.warningTintDimmed,
      },
      { selectionBackground: "color(display-p3 1 0.733 0 / 0.15)" }
    ),
    dark: n(
      "dark",
      {
        [o.tint]: o.warningTint,
        [o.inputBorder]: o.warningTint,
        [o.tintDimmed]: o.warningTintDimmed,
      },
      { selectionBackground: "color(display-p3 1 0.733 0 / 0.15)" }
    ),
  },
  w = {
    light: n("light", {
      [e.tint]: e.tint,
      [e.inputBorder]: e.inputBorder,
      [e.tintDimmed]: e.tintDimmed,
    }),
    dark: n("dark", {
      [o.tint]: o.tint,
      [o.inputBorder]: o.inputBorder,
      [o.tintDimmed]: o.tintDimmed,
    }),
  };
var rr = {
  avatar: `inset 0 0 0 1px ${c(r.white100, 0.1)}`,
  avatarOverlap: `0px 0px 0px 1.5px ${h.panelBackground}, inset 0 0 0 1px ${c(r.white100, 0.05)}`,
  avatarTinted: `inset 0 0 0 1px ${c(o.tint, 0.15)}`,
  buttonSelected: "0px 2px 4px 0px rgba(0, 0, 0, 0.3), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)",
  canvasTooltip:
    "0px 3px 6px 0px rgba(0, 0, 0, 0.08), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.07)",
  card: "0 5px 20px rgba(0, 0, 0, 0.3)",
  checkbox: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
  checkboxDarker: "inset 0 0 0 1px rgba(255, 255, 255, 0.1)",
  checkboxChecked: "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
  checkboxDarkerChecked: "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
  distributionSliderBar:
    "inset 0 0 0 1px var(--framer-fresco-gradientStopSliderBorder-color, rgba(0, 0, 0, 0.05))",
  distributionSliderKnob:
    "inset 0 0 0 3px white, inset 0 0 0 4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1)",
  distributionSliderKnobSelected: `inset 0 0 0 3px white, inset 0 0 0 4px ${o.tint}, 0 0 0 1px ${o.tint}`,
  gradientSliderKnobSelected: `inset 0 0 0 3px white, inset 0 0 0 4px rgba(0, 0, 0, 0.1), 0 0 0 1px ${o.panelBackground}, 0 0 0 2px ${o.tint}`,
  insertImage: "0px 4px 8px 0px rgba(0, 0, 0, 0.2)",
  menu: `${p}, 0px 0px 0px 1px ${r.dark80}`,
  modal: p,
  modalInset: k,
  popover: p,
  popoverInset: k,
  popoverDropShadow:
    "drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.08)) drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2))",
  projectMenuButton: "none",
  radioButton: "inset 0 0 0 1px rgba(0, 0, 0, 0.05)",
  radioButtonChecked: "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
  settingsCard: "0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.05)",
  sideOverlay:
    "0px 3px 6px 0px rgba(0, 0, 0, 0.08), 0px 0px 0px 1px rgba(0, 0, 0, 0.05), inset 1px 0 0 0 #222222",
  segmentedControlItemSelected: "inset 0 0 0 1px rgba(255, 255, 255, 0.03)",
  multiComboBoxToken: "none",
  sliderKnob: "none",
  toggleTack: "0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.05)",
  settingsImageClearButton:
    "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 0.5px 0px 0px rgba(0, 0, 0, 0.1)",
};
var A = {
  avatar: "inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
  avatarOverlap: `0px 0px 0px 1.5px ${h.panelBackground}, inset 0 0 0 1px ${c(r.white100, 0.05)}`,
  avatarTinted: `inset 0 0 0 1px ${c(e.tint, 0.15)}`,
  buttonSelected: "0px 2px 4px 0px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(0, 0, 0, 0.05)",
  canvasTooltip: "0px 3px 6px 0px rgba(0, 0, 0, 0.08), 0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
  card: "0 5px 20px rgba(0, 0, 0, 0.15)",
  checkbox: "inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
  checkboxDarker: "inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
  checkboxChecked: "none",
  checkboxDarkerChecked: "none",
  distributionSliderBar:
    "inset 0 0 0 1px var(--framer-fresco-gradientStopSliderBorder-color, rgba(0, 0, 0, 0.05))",
  distributionSliderKnob:
    "inset 0 0 0 3px white, inset 0 0 0 4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1)",
  distributionSliderKnobSelected: `inset 0 0 0 3px white, inset 0 0 0 4px ${e.tint}, 0 0 0 1px ${e.tint}`,
  gradientSliderKnobSelected: `inset 0 0 0 3px white, inset 0 0 0 4px ${e.tint}, 0 0 0 1px ${e.tint}`,
  insertImage: "0px 4px 8px 0px rgba(0, 0, 0, 0.1)",
  menu: v,
  modal: v,
  modalInset: "none",
  popover: v,
  popoverInset: "none",
  popoverDropShadow:
    "drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.08)) drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.1))",
  projectMenuButton:
    "0px 0px 0px 1px rgba(0, 0, 0, 0.02), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
  radioButton: "inset 0 0 0 1px rgba(0, 0, 0, 0.08)",
  radioButtonChecked: "none",
  settingsCard: "0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.05)",
  sideOverlay: "0px 3px 6px 0px rgba(0, 0, 0, 0.08), 0px 0px 0px 1px rgba(0, 0, 0, 0.05)",
  segmentedControlItemSelected:
    "0px 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 1px 0px 0px rgba(0, 0, 0, 0.04), 0px 2px 4px 0px rgba(0, 0, 0, 0.08)",
  multiComboBoxToken: "0px 0px 0px 1px rgba(0, 0, 0, 0.03)",
  sliderKnob:
    "0px 2px 4px 0px rgba(0, 0, 0, 0.1), 0px 1px 0px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(0, 0, 0, 0.03)",
  toggleTack: "0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 2px 10px 0px rgba(0, 0, 0, 0.05)",
  settingsImageClearButton:
    "0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 0.5px 0px 0px rgba(0, 0, 0, 0.1)",
};
var Vo = V(A, m),
  or = { tokens: A, scope: m },
  er = { tokens: rr, scope: m };
var Dr = { tokens: e, scope: s },
  wr = { tokens: o, scope: s },
  cr = l([Dr, or]),
  fr = l([wr, er]);
var ee = {
    component: `
		body[data-framer-theme="light"] & {
			${I.light}
		}
		body[data-framer-theme="dark"] & {
			${I.dark}
		}
`,
    componentOverlayEditMode: `
		body[data-framer-theme="light"] & {
			${P.light}
		}
		body[data-framer-theme="dark"] & {
			${P.dark}
		}
`,
    popover: `
		body[data-framer-theme="dark"] & {
			${Z}
		}
		body[data-framer-theme="light"] & {
			${Y}
		}
`,
    darkOnDarkPopoutWindow: `
		body[data-framer-theme="dark"] & {
			${X}
		}
`,
    tooltipVariantLighter: `
		body[data-framer-theme="dark"] & {
			${_}
		}
`,
    darkOnDarkModal: `
		body[data-framer-theme="dark"] & {
			${G}
		}
`,
    modalVariantDefault: `
		body[data-framer-theme="light"] & {
			${y}
		}
		body[data-framer-theme="dark"] & {
			${$}
		}
`,
    modalVariantDarker: `
		body[data-framer-theme="light"] & {
			${y}
		}
		body[data-framer-theme="dark"] & {
			${j}
		}
`,
    inverted: `
		body[data-framer-theme="light"] & {
			${fr}
		}
		body[data-framer-theme="dark"] & {
			${cr}
		}
`,
    warning: `
		body[data-framer-theme="light"] & {
			${D.light}
		}
		body[data-framer-theme="dark"] & {
			${D.dark}
		}
`,
    warningReset: `
		body[data-framer-theme="light"] & {
			${w.light}
		}
		body[data-framer-theme="dark"] & {
			${w.dark}
		}
`,
    onPageEditing: `
		body[data-framer-theme="light"] & {
			${Q}
		}
		body[data-framer-theme="dark"] & {
			${J}
		}
`,
  },
  ar = {
    component: "c1umhcny",
    componentOverlayEditMode: "c12c8kmr",
    popover: "p752w4z",
    darkOnDarkPopoutWindow: "d1ng92sv",
    tooltipVariantLighter: "t1cyscb0",
    darkOnDarkModal: "d1f7bw7u",
    modalVariantDefault: "m1ysjty9",
    modalVariantDarker: "m1js5p3h",
    inverted: "i7h4j38",
    warning: "w800e5d",
    warningReset: "wpnx597",
    onPageEditing: "oedhysz",
  },
  tr = "wek7k3x";
var u = T(O());
function Ar(f) {
  return f !== !1 && f !== void 0;
}
var H = i.default.createContext(void 0);
H.displayName = "BaseThemeContext";
var M = i.default.createContext(void 0);
M.displayName = "ThemeOverrideModeContext";
function lr() {
  return i.default.useContext(H);
}
function nr() {
  return i.default.useContext(M);
}
var sr = i.default.forwardRef(function ({ mode: a, children: t, className: B, ...b }, g) {
    let x = nr(),
      d = lr(),
      C = a || x || d,
      ir = Ar(C) ? ar[C] : void 0;
    return (0, u.jsx)(M.Provider, {
      value: C,
      children: (0, u.jsx)("div", { ref: g, className: W(tr, ir, B), ...b, children: t }),
    });
  }),
  le = i.default.memo(function ({ mode: a, children: t }) {
    let B = lr();
    return (
      R(
        B === void 0,
        "Nested BaseTheme components are not allowed. BaseTheme should only be used once per application root."
      ),
      (0, u.jsx)(H.Provider, { value: a, children: (0, u.jsx)(sr, { children: t }) })
    );
  }),
  ne = i.default.memo(function ({ children: a }) {
    let t = nr();
    return (0, u.jsx)(sr, { mode: t === "warning" ? "warningReset" : t, children: a });
  });
var mr = T(F());
function Hr(f, a) {
  if (L(f)) {
    f(a);
    return;
  }
  if (E(f)) {
    f.current = a;
    return;
  }
}
function Mr(...f) {
  return (a) => {
    f.forEach((t) => {
      Hr(t, a);
    });
  };
}
function ie(...f) {
  return (0, mr.useMemo)(() => Mr(...f), f);
}
export { Vo as a, lr as b, nr as c, sr as d, le as e, ne as f, ie as g };
//# sourceMappingURL=chunk-T5LHM4YT.mjs.map
