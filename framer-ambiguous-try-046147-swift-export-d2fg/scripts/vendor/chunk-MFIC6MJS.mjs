import { a as be } from "chunk-NJXSBLUG.mjs";
import { a as q, b as L, l as re } from "chunk-V6PD4VCB.mjs";
import { A as Me, d as ae, g as _e, z as Y } from "chunk-2CEDOG4D.mjs";
import { a as se } from "chunk-RNHTTH2C.mjs";
import { h as P } from "chunk-EIH2JWGG.mjs";
import { a as yt } from "chunk-SWYZG2NI.mjs";
import { l as G, r as Ae } from "chunk-L5AQ4LH7.mjs";
import { b as Le, c as Pe } from "chunk-4JY5UMT2.mjs";
import { a as k } from "chunk-5QSN7R54.mjs";
import { c as pt, e as ft } from "chunk-WLHSDIGQ.mjs";
var Je = pt((Jn, ve) => {
  "use strict";
  (function () {
    function n(l, c) {
      document.addEventListener ? l.addEventListener("scroll", c, !1) : l.attachEvent("scroll", c);
    }
    function e(l) {
      document.body
        ? l()
        : document.addEventListener
          ? document.addEventListener("DOMContentLoaded", function c() {
              (document.removeEventListener("DOMContentLoaded", c), l());
            })
          : document.attachEvent("onreadystatechange", function c() {
              (document.readyState == "interactive" || document.readyState == "complete") &&
                (document.detachEvent("onreadystatechange", c), l());
            });
    }
    function t(l) {
      ((this.g = document.createElement("div")),
        this.g.setAttribute("aria-hidden", "true"),
        this.g.appendChild(document.createTextNode(l)),
        (this.h = document.createElement("span")),
        (this.i = document.createElement("span")),
        (this.m = document.createElement("span")),
        (this.j = document.createElement("span")),
        (this.l = -1),
        (this.h.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.i.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.j.style.cssText =
          "max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;"),
        (this.m.style.cssText =
          "display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;"),
        this.h.appendChild(this.m),
        this.i.appendChild(this.j),
        this.g.appendChild(this.h),
        this.g.appendChild(this.i));
    }
    function o(l, c) {
      l.g.style.cssText =
        "max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:" +
        c +
        ";";
    }
    function i(l) {
      var c = l.g.offsetWidth,
        d = c + 100;
      return (
        (l.j.style.width = d + "px"),
        (l.i.scrollLeft = d),
        (l.h.scrollLeft = l.h.scrollWidth + 100),
        l.l !== c ? ((l.l = c), !0) : !1
      );
    }
    function a(l, c) {
      function d() {
        var f = F;
        i(f) && f.g.parentNode !== null && c(f.l);
      }
      var F = l;
      (n(l.h, d), n(l.i, d), i(l));
    }
    function r(l, c, d) {
      ((c = c || {}),
        (d = d || window),
        (this.family = l),
        (this.style = c.style || "normal"),
        (this.weight = c.weight || "normal"),
        (this.stretch = c.stretch || "normal"),
        (this.context = d));
    }
    var s = null,
      m = null,
      u = null,
      y = null;
    function h(l) {
      return (
        m === null &&
          (b(l) && /Apple/.test(window.navigator.vendor)
            ? ((l = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                window.navigator.userAgent
              )),
              (m = !!l && 603 > parseInt(l[1], 10)))
            : (m = !1)),
        m
      );
    }
    function b(l) {
      return (y === null && (y = !!l.document.fonts), y);
    }
    function p(l, c) {
      var d = l.style,
        F = l.weight;
      if (u === null) {
        var f = document.createElement("div");
        try {
          f.style.font = "condensed 100px sans-serif";
        } catch {}
        u = f.style.font !== "";
      }
      return [d, F, u ? l.stretch : "", "100px", c].join(" ");
    }
    ((r.prototype.load = function (l, c) {
      var d = this,
        F = l || "BESbswy",
        f = 0,
        S = c || 3e3,
        w = new Date().getTime();
      return new Promise(function (g, T) {
        if (b(d.context) && !h(d.context)) {
          var U = new Promise(function (I, v) {
              function C() {
                new Date().getTime() - w >= S
                  ? v(Error("" + S + "ms timeout exceeded"))
                  : d.context.document.fonts.load(p(d, '"' + d.family + '"'), F).then(function (B) {
                      1 <= B.length ? I() : setTimeout(C, 25);
                    }, v);
              }
              C();
            }),
            K = new Promise(function (I, v) {
              f = setTimeout(function () {
                v(Error("" + S + "ms timeout exceeded"));
              }, S);
            });
          Promise.race([K, U]).then(function () {
            (clearTimeout(f), g(d));
          }, T);
        } else
          e(function () {
            function I() {
              var _;
              ((_ = (D != -1 && R != -1) || (D != -1 && x != -1) || (R != -1 && x != -1)) &&
                ((_ = D != R && D != x && R != x) ||
                  (s === null &&
                    ((_ = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent)),
                    (s =
                      !!_ &&
                      (536 > parseInt(_[1], 10) ||
                        (parseInt(_[1], 10) === 536 && 11 >= parseInt(_[2], 10))))),
                  (_ =
                    s &&
                    ((D == ne && R == ne && x == ne) ||
                      (D == oe && R == oe && x == oe) ||
                      (D == ie && R == ie && x == ie)))),
                (_ = !_)),
                _ && (V.parentNode !== null && V.parentNode.removeChild(V), clearTimeout(f), g(d)));
            }
            function v() {
              if (new Date().getTime() - w >= S)
                (V.parentNode !== null && V.parentNode.removeChild(V),
                  T(Error("" + S + "ms timeout exceeded")));
              else {
                var _ = d.context.document.hidden;
                ((_ === !0 || _ === void 0) &&
                  ((D = C.g.offsetWidth), (R = B.g.offsetWidth), (x = A.g.offsetWidth), I()),
                  (f = setTimeout(v, 50)));
              }
            }
            var C = new t(F),
              B = new t(F),
              A = new t(F),
              D = -1,
              R = -1,
              x = -1,
              ne = -1,
              oe = -1,
              ie = -1,
              V = document.createElement("div");
            ((V.dir = "ltr"),
              o(C, p(d, "sans-serif")),
              o(B, p(d, "serif")),
              o(A, p(d, "monospace")),
              V.appendChild(C.g),
              V.appendChild(B.g),
              V.appendChild(A.g),
              d.context.document.body.appendChild(V),
              (ne = C.g.offsetWidth),
              (oe = B.g.offsetWidth),
              (ie = A.g.offsetWidth),
              v(),
              a(C, function (_) {
                ((D = _), I());
              }),
              o(C, p(d, '"' + d.family + '",sans-serif')),
              a(B, function (_) {
                ((R = _), I());
              }),
              o(B, p(d, '"' + d.family + '",serif')),
              a(A, function (_) {
                ((x = _), I());
              }),
              o(A, p(d, '"' + d.family + '",monospace')));
          });
      });
    }),
      typeof ve == "object"
        ? (ve.exports = r)
        : ((window.FontFaceObserver = r),
          (window.FontFaceObserver.prototype.load = r.prototype.load)));
  })();
});
var N = ((r) => (
  (r.Google = "google"),
  (r.Fontshare = "fontshare"),
  (r.Framer = "framer"),
  (r.Local = "local"),
  (r.Custom = "custom"),
  (r.BuiltIn = "builtIn"),
  r
))(N || {});
function M(n) {
  return n.weight !== void 0 && n.style !== void 0;
}
var we = "Variable";
function O(n, e) {
  return e ? `${n} ${we}` : n;
}
function le(n, e) {
  if (e === "custom") throw new Error("Custom fonts are not supported");
  return O(n.name, n.isVariable);
}
function W(n) {
  return !!(n && Array.isArray(n));
}
function z(n) {
  if (!n || !Array.isArray(n)) return;
  let e = [];
  for (let t of n)
    gt(t) &&
      e.push({
        tag: t.tag,
        name: t.name,
        minValue: t.minValue,
        maxValue: t.maxValue,
        defaultValue: t.defaultValue,
      });
  return e;
}
function ce(n) {
  return !(
    typeof n != "object" ||
    n === null ||
    !("tag" in n) ||
    typeof n.tag != "string" ||
    ("coverage" in n && typeof n.coverage < "u" && !Array.isArray(n.coverage))
  );
}
function gt(n) {
  return !(
    typeof n != "object" ||
    n === null ||
    !("tag" in n) ||
    typeof n.tag != "string" ||
    ("name" in n && typeof n.name != "string") ||
    !("minValue" in n) ||
    typeof n.minValue != "number" ||
    !("maxValue" in n) ||
    typeof n.maxValue != "number" ||
    !("defaultValue" in n) ||
    typeof n.defaultValue != "number"
  );
}
var Z = "BI;",
  J = class {
    name = "builtIn";
    fontFamilies = [];
    byFamilyName = new Map();
    assetByKey = new Map();
    importFonts(e) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
      let t = [];
      for (let o of e) {
        if (!this.isValidBuiltInFont(o)) continue;
        let { properties: i } = o,
          a = i.font.fontFamily,
          r = this.createFontFamily(a, i.font.foundryName, i.font.fontVersion),
          s = i.font.openTypeData,
          m = i.font.variationAxes,
          u = Array.isArray(m),
          y = u ? "variable" : i.font.fontSubFamily || "regular",
          h = re(o),
          b = z(m),
          p = {
            assetKey: o.key,
            family: r,
            selector: this.createSelector(a, y, i.font.fontVersion),
            variant: y,
            file: h,
            hasOpenTypeFeatures: W(s),
            variationAxes: b,
            category: i.font.fontCategory,
            weight: u ? ht(b, i.font.faceDescriptors?.weight) : de(y),
            style: Oe(y),
            cssFamilyName: O(a, u),
          };
        (r.fonts.push(p), this.assetByKey.set(o.key, o), t.push(p));
      }
      for (let o of this.fontFamilies)
        o.fonts.sort((i, a) => {
          let r = de(i.variant),
            s = de(a.variant);
          return !r || !s ? 1 : r - s;
        });
      return t;
    }
    static parseVariant(e) {
      let t = We(e),
        i = t === "variable" || t === "variable-italic" ? 400 : ke[t],
        a = Oe(e);
      return { weight: i, style: a };
    }
    getFontBySelector(e) {
      let t = this.parseSelector(e);
      if (!t) return;
      let o = this.getFontFamilyByName(t.name);
      if (o) return o.fonts.find((i) => i.selector === e);
    }
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    createFontFamily(e, t, o) {
      let i = this.byFamilyName.get(e);
      if (i && i.version === o) return i;
      let a = { source: this.name, name: e, fonts: [], foundryName: t, version: o };
      return (this.addFontFamily(a), a);
    }
    getOpenTypeFeatures(e) {
      Y(e.assetKey, "Font must have an asset key");
      let o = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
      return W(o)
        ? o?.map((i) => {
            if (ce(i)) return { tag: i.tag, coverage: i.coverage };
          })
        : [];
    }
    isValidBuiltInFont(e) {
      return !e.mimeType.startsWith("font/") ||
        e.properties?.kind !== "font" ||
        !e.properties.font ||
        !e.properties.font.fontVersion ||
        !e.properties.font.fontFamily
        ? !1
        : "fontFamily" in e.properties.font;
    }
    createSelector(e, t, o) {
      return `${Z}${e}/${t}/${o}`;
    }
    parseSelector(e) {
      if (!e.startsWith(Z)) return null;
      let [t, o] = e.split(Z);
      if (o === void 0) return null;
      let [i, a, r] = o.split("/");
      return !i || !a || !r
        ? null
        : {
            name: i,
            variant: a,
            source: this.name,
            isVariable: a.toLowerCase().includes("variable"),
          };
    }
    addFontFamily(e) {
      (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
    }
  },
  ke = {
    ultralight: 100,
    "ultralight-italic": 100,
    thin: 200,
    "thin-italic": 200,
    demi: 200,
    light: 300,
    "light-italic": 300,
    normal: 350,
    base: 400,
    regular: 400,
    classic: 400,
    "regular-slanted": 400,
    italic: 400,
    oblique: 400,
    dense: 400,
    brukt: 300,
    book: 400,
    "book-italic": 400,
    text: 400,
    "text-italic": 400,
    medium: 500,
    solid: 500,
    "medium-oblique": 500,
    "medium-italic": 500,
    mittel: 500,
    semibold: 600,
    "semibold-italic": 600,
    bold: 700,
    "bold-italic": 700,
    "bold-oblique": 700,
    fett: 700,
    ultrabold: 800,
    "ultrabold-italic": 800,
    extrabold: 800,
    "extrabold-italic": 800,
    black: 900,
    extralight: 100,
    "extralight-italic": 100,
    "black-italic": 900,
    "extra-italic": 900,
    "extra-italic-bold": 900,
    satt: 900,
    heavy: 900,
    "heavy-italic": 900,
    serif: 100,
    school: 200,
    expanded: 300,
    gothique: 500,
    "dense-light": 200,
    "dense-regular": 300,
    "dense-medium": 400,
    "dense-bold": 500,
    "solid-light": 600,
    "solid-regular": 700,
    "solid-medium": 800,
    "solid-bold": 900,
    53: 400,
    55: 600,
    "narrow-regular": 350,
    "narrow-black": 850,
    variable: 1e3,
    "variable-italic": 1e3,
  };
function de(n) {
  let e = We(n);
  return ke[e];
}
function ht(n, e) {
  let t = n?.find((o) => o.tag === "wght")?.defaultValue;
  return t !== void 0 && t >= 1 && t <= 1e3 ? t : (e ?? de("variable") ?? 500);
}
function We(n) {
  return n.toLowerCase().replace(/\s+/gu, "-");
}
function Oe(n) {
  return (
    (n = n.toLowerCase()),
    n.includes("italic") || n.includes("oblique") || n.includes("slanted") ? "italic" : "normal"
  );
}
function Ee(n) {
  return {
    trace(...e) {
      return L.getLogger(n)?.trace(...e);
    },
    debug(...e) {
      return L.getLogger(n)?.debug(...e);
    },
    info(...e) {
      return L.getLogger(n)?.info(...e);
    },
    warn(...e) {
      return L.getLogger(n)?.warn(...e);
    },
    error(...e) {
      return L.getLogger(n)?.error(...e);
    },
    get enabled() {
      return L.getLogger(n) !== void 0;
    },
  };
}
function E(n, e) {
  return { ...St(n, e), ..._t(n, e) };
}
function St(n, e) {
  if (e.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: t, style: o } = n,
    i = new Map(),
    a = new Map();
  for (let y of e)
    y.isVariable === n.isVariable &&
      (i.set(`${y.weight}-${y.style}`, y),
      !(y.weight <= t) && (a.has(y.style) || a.set(y.style, y)));
  let r = a.get(o),
    s = a.get("italic"),
    m = n.weight;
  m <= 300
    ? ((r = i.get(`400-${o}`) ?? r), (s = i.get("400-italic") ?? s))
    : m <= 500
      ? ((r = i.get(`700-${o}`) ?? r), (s = i.get("700-italic") ?? s))
      : ((r = i.get(`900-${o}`) ?? r), (s = i.get("900-italic") ?? s));
  let u = i.get(`${t}-italic`);
  return { variantBold: r, variantItalic: u, variantBoldItalic: s };
}
function _t(n, e) {
  if (e.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let t = new Map(),
    o,
    i,
    a,
    r;
  for (let s of e) {
    if (!s.isVariable) continue;
    let m = s.weight === n.weight,
      u = s.weight === 400;
    s.style === "normal"
      ? m
        ? (o = s)
        : u
          ? (a = s)
          : a || (a = s)
      : s.style === "italic" && (m ? (i = s) : u ? (r = s) : r || (r = s));
  }
  return { variantVariable: o ?? a, variantVariableItalic: i ?? r };
}
function X(n) {
  return !!n.variationAxes;
}
var bt = Ee("custom-font-source"),
  Te = "CUSTOM;",
  xe = "CUSTOMV2;";
function me(n) {
  return wt(n) || $e(n);
}
function wt(n) {
  return n.startsWith(xe);
}
function $e(n) {
  return n.startsWith(Te);
}
function Tt(n, e) {
  for (let t = 0; t < n.length; t++) {
    let o = n[t];
    if (o) {
      if (o.owner !== e.owner && o.file === e.file)
        return { existingFont: o, index: t, projectDuplicate: !0 };
      if (o && o.selector === e.selector)
        return { existingFont: o, index: t, projectDuplicate: !1 };
    }
  }
}
function xt(n) {
  let { font: e } = n,
    t = e.fontFamily,
    o = Array.isArray(e.variationAxes);
  if (o && t.toLowerCase().includes("variable")) return t;
  let i = o ? we : e.fontSubFamily.trim();
  return i === "" ? t : `${t} ${i}`;
}
function It({ fontFamily: n, fontSubFamily: e, variationAxes: t, faceDescriptors: o }) {
  let i = e.trim() || "Regular",
    a = i.toLocaleLowerCase().includes("variable"),
    r = z(t) && !a ? `Variable ${i}` : i,
    s = "normal",
    m = 400;
  return (
    o && ((m = o.weight), (s = o.italic || o.oblique ? "italic" : "normal")),
    { family: n, variant: r, weight: m, style: s }
  );
}
var ue = class n {
  name = "custom";
  fontFamilies = [];
  byFamilyName = new Map();
  assetsByKey = new Map();
  debugByFamily = new Map();
  debugFamilies;
  importFonts(e) {
    ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
    let t = {},
      o = new Map();
    for (let i of e) {
      if (!this.isValidCustomFontAsset(i)) continue;
      let { family: a, variant: r, weight: s, style: m } = It(i.properties.font),
        u = i.properties.font.variationAxes,
        y = Array.isArray(u),
        h = i.properties.font.openTypeData,
        b = re(i),
        p = Ct(i),
        l = xt(i.properties),
        c = n.createLegacySelector(l),
        d = this.createFontFamily(a),
        F = n.createSelector(d.name, r),
        f = {
          assetKey: i.key,
          family: d,
          selector: F,
          variant: r,
          weight: s,
          style: m,
          file: b,
          hasOpenTypeFeatures: W(h),
          variationAxes: z(u),
          owner: p,
          alternativeSelectors: {
            [c]: {
              variant: y ? "variable" : this.inferVariantName(l),
              cssFamilyName: n.cssFontFamilyFromSelector(c),
            },
          },
          cssFamilyName: n.cssFontFamilyFromSelector(F),
        },
        S = Tt(d.fonts, f);
      if (S?.projectDuplicate) f.owner === "team" && ((d.fonts[S.index] = f), (t[F] = f));
      else if (S) {
        bt.debug("Duplicate font found for:", f, "with existing font:", S.existingFont);
        let g = S.existingFont,
          T = f.file?.endsWith(".woff2") ?? !1,
          U = g.file?.endsWith(".woff2") ?? !1,
          K = T && !U,
          I = T === U,
          v = f.owner === "team" || g.owner !== "team";
        (K || (I && v)) && ((d.fonts[S.index] = f), (t[F] = f));
      } else (d.fonts.push(f), (t[F] = f));
      (this.assetsByKey.set(i.key, i), Dt(o, a, r).fonts.push({ font: f, asset: i, selected: !1 }));
    }
    for (let i of this.fontFamilies) i.fonts.length > 0 && vt(i);
    return ((this.debugByFamily = o), (this.debugFamilies = void 0), Object.values(t));
  }
  getDebugFamilies() {
    if (this.debugFamilies) return this.debugFamilies;
    let e = new Set();
    for (let t of this.fontFamilies)
      for (let o of t.fonts) o.assetKey && o.owner && e.add(`${o.assetKey}:${o.owner}`);
    return ((this.debugFamilies = Rt(this.debugByFamily, e)), this.debugFamilies);
  }
  static createSelector(e, t) {
    return `${xe}${e}${t ? ` ${t}` : ""}`;
  }
  static createLegacySelector(e) {
    return `${Te}${e}`;
  }
  static cssFontFamilyFromSelector(e) {
    return (
      Y(me(e), "Selector must be a custom font selector"),
      $e(e) ? e.slice(Te.length) : e.slice(xe.length)
    );
  }
  isValidCustomFontAsset(e) {
    return !e.mimeType.startsWith("font/") || e.properties?.kind !== "font" || !e.properties.font
      ? !1
      : "fontFamily" in e.properties.font;
  }
  getOpenTypeFeatures(e) {
    Y(e.assetKey, "Font must have an asset key");
    let o = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
    return W(o)
      ? o?.map((i) => {
          if (ce(i)) return { tag: i.tag, coverage: i.coverage };
        })
      : [];
  }
  inferVariantName(e) {
    let t = [
        "thin",
        "ultra light",
        "extra light",
        "light",
        "normal",
        "medium",
        "semi bold",
        "bold",
        "extra bold",
        "black",
      ],
      o = [...t.map((s) => `${s} italic`), ...t],
      i = e.toLowerCase(),
      a = [...i.split(" "), ...i.split("-"), ...i.split("_")],
      r = o.find((s) => a.includes(s) || a.includes(s.replace(/\s+/gu, "")));
    return r ? r.replace(/^\w|\s\w/gu, (s) => s.toUpperCase()) : "Regular";
  }
  createFontFamily(e) {
    let t = this.byFamilyName.get(e);
    if (t) return t;
    let o = { source: this.name, name: e, fonts: [] };
    return (this.addFontFamily(o), o);
  }
  addFontFamily(e) {
    (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
  }
  getFontFamilyByName(e) {
    let t = this.byFamilyName.get(e);
    return t || null;
  }
};
function He(n) {
  if (!(!n.weight || !n.style))
    return { weight: n.weight, style: n.style, isVariable: X(n), selector: n.selector };
}
function vt(n) {
  let e = n.fonts.map((t) => He(t)).filter((t) => t !== void 0);
  for (let t of n.fonts) {
    let o = He(t);
    if (!o) continue;
    let i = E(o, e);
    ((t.selectorVariable = i.variantVariable?.selector),
      (t.selectorVariableItalic = i.variantVariableItalic?.selector),
      (t.selectorBold = i.variantBold?.selector),
      (t.selectorBoldItalic = i.variantBoldItalic?.selector),
      (t.selectorItalic = i.variantItalic?.selector));
  }
}
function Ct(n) {
  return n.ownerTypes.includes("team") ? "team" : "project";
}
function Dt(n, e, t) {
  let o = n.get(e);
  o || ((o = new Map()), n.set(e, o));
  let i = o.get(t);
  return (i || ((i = { fonts: [] }), o.set(t, i)), i);
}
function Rt(n, e) {
  return Array.from(n.entries())
    .sort(([t], [o]) => t.localeCompare(o))
    .map(([t, o]) => ({
      family: t,
      variants: Array.from(o.entries())
        .sort(([i], [a]) => i.localeCompare(a))
        .map(([, i]) => ({
          fonts: i.fonts.map((a) => ({
            ...a,
            selected:
              a.font.assetKey && a.font.owner ? e.has(`${a.font.assetKey}:${a.font.owner}`) : !1,
          })),
        })),
    }));
}
async function Fe(n) {
  switch (n) {
    case "google":
      return (await import("https://app.framerstatic.com/google-2MTL523Z.mjs")).default;
    case "fontshare":
      return (await import("https://app.framerstatic.com/fontshare-WSCBC7QJ.mjs")).default;
    default:
      throw new Error(`Unknown font source: ${n}`);
  }
}
async function H(n) {
  switch (n) {
    case "google":
      return (await import("https://app.framerstatic.com/google-BM2FMF7T.mjs")).default;
    case "fontshare":
      return (await import("https://app.framerstatic.com/fontshare-GLIYW33A.mjs")).default;
    case "framer":
      return (await import("https://app.framerstatic.com/framer-font-N2MJBC4G.mjs")).default;
    default:
      throw new Error(`Unknown font source: ${n}`);
  }
}
var Vt = ["display", "sans", "serif", "slab", "handwritten", "script"];
function je(n) {
  return n
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Bt);
}
function Bt(n) {
  return Vt.includes(n);
}
var $ = "FS;",
  Ke = {
    thin: 100,
    hairline: 100,
    extralight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    ultra: 800,
    black: 900,
    heavy: 900,
  },
  Ge = Object.keys(Ke),
  Nt = new RegExp(`^(?:${[...Ge, "italic", "variable"].join("|")})`, "u"),
  Q = class n {
    name = "fontshare";
    fontFamilies = [];
    byFamilyName = new Map();
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    static parseVariant(e) {
      let t = e.toLowerCase().split(" "),
        o = Ge.find((s) => t.includes(s)),
        i = e.toLowerCase().includes("italic") ? "italic" : "normal";
      return { weight: (o && Ke[o]) || 400, style: i === "italic" ? i : "normal" };
    }
    parseSelector(e) {
      if (!e.startsWith($)) return null;
      let t = e.split("-");
      if (t.length !== 2) return null;
      let [o, i] = t;
      return !o || !i
        ? null
        : {
            name: o.replace($, ""),
            variant: i,
            source: this.name,
            isVariable: i.toLowerCase().includes("variable"),
          };
    }
    static createSelector(e, t) {
      return `${$}${e}-${t.toLowerCase()}`;
    }
    static createMetadataSelector(e) {
      return `${$}${e}`;
    }
    addFontFamily(e) {
      (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
    }
    async importFonts(e, t) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear());
      let o = await Fe("fontshare"),
        i = [];
      for (let a of e) {
        let s = a.font_styles
            .filter((l) => {
              let c = l.name.toLowerCase();
              return !(!Nt.exec(c) || c.split(" ").includes("wide"));
            })
            .map((l) => ({
              ...n.parseVariant(l.name),
              selector: n.createSelector(a.name, l.name),
              isVariable: l.is_variable,
              fontshareVariantName: l.name,
              file: l.file,
            })),
          m = n.createMetadataSelector(a.name),
          u = t?.[m],
          y = a.name,
          h = this.getFontFamilyByName(y);
        h || ((h = { name: y, fonts: [], source: this.name }), this.addFontFamily(h));
        let b = n.createMetadataSelector(a.name),
          p = o[b];
        for (let l of s) {
          let {
              variantBold: c,
              variantBoldItalic: d,
              variantItalic: F,
              variantVariable: f,
              variantVariableItalic: S,
            } = E(l, s),
            w = {
              family: h,
              variant: l.fontshareVariantName.toLowerCase(),
              selector: l.selector,
              selectorBold: c?.selector,
              selectorBoldItalic: d?.selector,
              selectorItalic: F?.selector,
              selectorVariable: f?.selector,
              selectorVariableItalic: S?.selector,
              weight: l.weight,
              style: l.style,
              file: l.file,
              category: Ut(a.category),
              hasOpenTypeFeatures: p,
              variationAxes: l.isVariable ? u : void 0,
              cssFamilyName: O(h.name, l.isVariable),
            };
          (h.fonts.push(w), i.push(w));
        }
      }
      return i;
    }
    async getOpenTypeFeatures(e) {
      let t = await H("fontshare"),
        o = n.createMetadataSelector(e.family.name);
      return t[o];
    }
  };
function Ut(n) {
  let e = {
      serif: "serif",
      sans: "sans-serif",
      slab: "slab",
      display: "display",
      handwritten: "handwriting",
      script: "handwriting",
    },
    t = je(n)[0];
  return t && e[t];
}
var At = "Inter",
  qe = "FR;";
var Lt = {
    Thin: 100,
    ExtraLight: 200,
    Light: 300,
    "": 400,
    Medium: 500,
    SemiBold: 600,
    Bold: 700,
    ExtraBold: 800,
    Black: 900,
  },
  ee = class n {
    name = "framer";
    fontFamilies = [];
    byFamilyName = new Map();
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
    }
    static getDraftFontPropertiesBySelector(e) {
      if (!e.startsWith(qe) && !e.startsWith(At)) return null;
      let t = e.split("-"),
        [o, i = ""] = t;
      if (!o) return null;
      let a = i.includes("Italic") ? "italic" : "normal",
        r = i.replace("Italic", ""),
        s = (r && Lt[r]) || 400;
      return {
        cssFamilyName: o,
        style: a,
        weight: s,
        source: "framer",
        variant: void 0,
        category: "sans-serif",
      };
    }
    static createMetadataSelector(e) {
      return `${qe}${e}`;
    }
    importFonts(e, t) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear());
      let o = [];
      return (
        e.forEach((i) => {
          let { uiFamilyName: a, ...r } = i,
            s = n.createMetadataSelector(i.uiFamilyName),
            m = t?.[s],
            u = this.getFontFamilyByName(a);
          u || (u = this.addFontFamily(a));
          let y = i.selector === i.selectorVariable || i.selector === i.selectorVariableItalic,
            h = { ...r, family: u, variationAxes: y ? m : void 0 };
          (u.fonts.push(h), o.push(h));
        }),
        o
      );
    }
    async getOpenTypeFeatures(e) {
      let t = await H("framer"),
        o = n.createMetadataSelector(e.family.name);
      return t[o];
    }
  };
var j = "GF;",
  te = class n {
    name = "google";
    fontFamilies = [];
    byFamilyName = new Map();
    supportedSubsetsByFamilyName = new Map();
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    getSupportedSubsetsByFamilyName(e) {
      return this.supportedSubsetsByFamilyName.get(e) ?? [];
    }
    static parseVariant(e) {
      if (e === "regular") return { style: "normal", weight: 400 };
      let t = /(\d*)(normal|italic)?/u.exec(e);
      if (!t) return {};
      let o = parseInt(t[1] || "400"),
        i = t[2] === "italic" ? "italic" : "normal";
      return { weight: o, style: i };
    }
    parseSelector(e) {
      if (!e.startsWith(j)) return null;
      let t = e.includes("-variable-"),
        o = t ? e.split("-variable-") : e.split("-");
      if (o.length !== 2) return null;
      let [i, a] = o;
      return !i || !a
        ? null
        : { name: i.replace(j, ""), variant: a, source: this.name, isVariable: t };
    }
    static createSelector(e, t, o) {
      return `${j}${e}-${o ? "variable-" : ""}${t}`;
    }
    static createMetadataSelector(e) {
      return `${j}${e}`;
    }
    addFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
    }
    async importFonts(e, t, o) {
      ((this.fontFamilies.length = 0),
        this.byFamilyName.clear(),
        this.supportedSubsetsByFamilyName.clear());
      let i = await Fe("google"),
        a = [],
        r = Ye(e, (m) => m.family),
        s = Ye(t, (m) => m.family);
      for (let m in r) {
        let u = r[m];
        if (!u) continue;
        this.supportedSubsetsByFamilyName.set(u.family, u.subsets ?? []);
        let y = this.getFontFamilyByName(u.family);
        y || (y = this.addFontFamily(u.family));
        let b = u.variants.map((g) => ({
            ...n.parseVariant(g),
            googleFontsVariantName: g,
            selector: n.createSelector(m, g, !1),
            isVariable: !1,
            file: u.files[g],
          })),
          p = s[m],
          l = p?.axes
            ? p.variants.map((g) => ({
                ...n.parseVariant(g),
                googleFontsVariantName: g,
                selector: n.createSelector(m, g, !0),
                isVariable: !0,
                file: p.files[g],
              }))
            : [],
          c = n.createMetadataSelector(u.family),
          d = o?.[c],
          F = [...b, ...l],
          f = F.filter(M),
          S = n.createMetadataSelector(m),
          w = i[S];
        for (let g of F) {
          let { weight: T, style: U, selector: K, googleFontsVariantName: I } = g,
            v = M(g) ? E(g, f) : void 0,
            {
              variantBold: C,
              variantItalic: B,
              variantBoldItalic: A,
              variantVariable: D,
              variantVariableItalic: R,
            } = v ?? {},
            x = {
              family: y,
              variant: I,
              selector: K,
              selectorBold: C?.selector,
              selectorBoldItalic: A?.selector,
              selectorItalic: B?.selector,
              selectorVariable: D?.selector,
              selectorVariableItalic: R?.selector,
              weight: T,
              style: U,
              category: Pt(u.category),
              file: g.file?.replace("http://", "https://"),
              variationAxes: g.isVariable ? d : void 0,
              hasOpenTypeFeatures: w,
              cssFamilyName: O(y.name, g.isVariable),
            };
          (y.fonts.push(x), a.push(x));
        }
      }
      return a;
    }
    async getOpenTypeFeatures(e) {
      let t = await H("google"),
        o = n.createMetadataSelector(e.family.name);
      return t[o];
    }
  };
function Pt(n) {
  let e = {
    serif: "serif",
    "sans-serif": "sans-serif",
    display: "display",
    handwriting: "handwriting",
    monospace: "monospace",
  };
  if (n) return e[n];
}
function Ye(n, e) {
  return n.reduce((t, o) => ((t[e(o)] = o), t), {});
}
var Mt = {
    Arial: {
      Regular: { selector: "Arial", weight: void 0 },
      Black: { selector: "Arial-Black", weight: void 0 },
      Narrow: { selector: "Arial Narrow", weight: void 0 },
      "Rounded Bold": { selector: "Arial Rounded MT Bold", weight: void 0 },
    },
    Avenir: {
      Book: { selector: "Avenir", weight: void 0 },
      Light: { selector: "Avenir-Light", weight: void 0 },
      Medium: { selector: "Avenir-Medium", weight: void 0 },
      Heavy: { selector: "Avenir-Heavy", weight: void 0 },
      Black: { selector: "Avenir-Black", weight: void 0 },
    },
    "Avenir Next": {
      Regular: { selector: "Avenir Next", weight: void 0 },
      "Ultra Light": { selector: "AvenirNext-UltraLight", weight: void 0 },
      Medium: { selector: "AvenirNext-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNext-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNext-Heavy", weight: void 0 },
    },
    "Avenir Next Condensed": {
      Regular: { selector: "Avenir Next Condensed", weight: void 0 },
      "Ultra Light": { selector: "AvenirNextCondensed-UltraLight", weight: void 0 },
      Medium: { selector: "AvenirNextCondensed-Medium", weight: void 0 },
      "Demi Bold": { selector: "AvenirNextCondensed-DemiBold", weight: void 0 },
      Heavy: { selector: "AvenirNextCondensed-Heavy", weight: void 0 },
    },
    Baskerville: {
      Regular: { selector: "Baskerville", weight: void 0 },
      "Semi Bold": { selector: "Baskerville-SemiBold", weight: void 0 },
    },
    "Bodoni 72": {
      Book: { selector: "Bodoni 72", weight: void 0 },
      Oldstyle: { selector: "Bodoni 72 Oldstyle", weight: void 0 },
      Smallcaps: { selector: "Bodoni 72 Smallcaps", weight: void 0 },
    },
    Courier: { Regular: { selector: "Courier", weight: void 0 } },
    "Courier New": { Regular: { selector: "Courier New", weight: void 0 } },
    Futura: {
      Medium: { selector: "Futura", weight: void 0 },
      Condensed: { selector: "Futura-CondensedMedium", weight: void 0 },
      "Condensed ExtraBold": { selector: "Futura-CondensedExtraBold", weight: void 0 },
    },
    Georgia: { Regular: { selector: "Georgia", weight: void 0 } },
    "Gill Sans": {
      Regular: { selector: "Gill Sans", weight: void 0 },
      Light: { selector: "GillSans-Light", weight: void 0 },
      SemiBold: { selector: "GillSans-SemiBold", weight: void 0 },
      UltraBold: { selector: "GillSans-UltraBold", weight: void 0 },
    },
    Helvetica: {
      Regular: { selector: "Helvetica", weight: void 0 },
      Light: { selector: "Helvetica-Light", weight: void 0 },
      Bold: { selector: "Helvetica-Bold", weight: void 0 },
      Oblique: { selector: "Helvetica-Oblique", weight: void 0 },
      "Light Oblique": { selector: "Helvetica-LightOblique", weight: void 0 },
      "Bold Oblique": { selector: "Helvetica-BoldOblique", weight: void 0 },
    },
    "Helvetica Neue": {
      Regular: { selector: "Helvetica Neue", weight: void 0 },
      UltraLight: { selector: "HelveticaNeue-UltraLight", weight: void 0 },
      Thin: { selector: "HelveticaNeue-Thin", weight: void 0 },
      Light: { selector: "HelveticaNeue-Light", weight: void 0 },
      Medium: { selector: "HelveticaNeue-Medium", weight: void 0 },
      Bold: { selector: "HelveticaNeue-Bold", weight: void 0 },
      Italic: { selector: "HelveticaNeue-Italic", weight: void 0 },
      "UltraLight Italic": { selector: "HelveticaNeue-UltraLightItalic", weight: void 0 },
      "Thin Italic": { selector: "HelveticaNeue-ThinItalic", weight: void 0 },
      "Light Italic": { selector: "HelveticaNeue-LightItalic", weight: void 0 },
      "Medium Italic": { selector: "HelveticaNeue-MediumItalic", weight: void 0 },
      "Bold Italic": { selector: "HelveticaNeue-BoldItalic", weight: void 0 },
      "Condensed Bold": { selector: "HelveticaNeue-CondensedBold", weight: void 0 },
      "Condensed Black": { selector: "HelveticaNeue-CondensedBlack", weight: void 0 },
    },
    "Hoefler Text": { Regular: { selector: "Hoefler Text", weight: void 0 } },
    Impact: { Regular: { selector: "Impact", weight: void 0 } },
    "Lucida Grande": { Regular: { selector: "Lucida Grande", weight: void 0 } },
    Menlo: { Regular: { selector: "Menlo", weight: void 0 } },
    Monaco: { Regular: { selector: "Monaco", weight: void 0 } },
    Optima: {
      Regular: { selector: "Optima", weight: void 0 },
      ExtraBlack: { selector: "Optima-ExtraBlack", weight: void 0 },
    },
    Palatino: { Regular: { selector: "Palatino", weight: void 0 } },
    "SF Pro Display": {
      Regular: { selector: "__SF-UI-Display-Regular__", weight: 400 },
      Ultralight: { selector: "__SF-UI-Display-Ultralight__", weight: 100 },
      Thin: { selector: "__SF-UI-Display-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Display-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Display-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Black__", weight: 900 },
      Italic: { selector: "__SF-UI-Display-Italic__", weight: 400 },
      "Ultralight Italic": { selector: "__SF-UI-Display-Ultralight-Italic__", weight: 100 },
      "Thin Italic": { selector: "__SF-UI-Display-Thin-Italic__", weight: 200 },
      "Light Italic": { selector: "__SF-UI-Display-Light-Italic__", weight: 300 },
      "Medium Italic": { selector: "__SF-UI-Display-Medium-Italic__", weight: 500 },
      "Semibold Italic": { selector: "__SF-UI-Display-Semibold-Italic__", weight: 600 },
      "Bold Italic": { selector: "__SF-UI-Display-Bold-Italic__", weight: 700 },
      "Heavy Italic": { selector: "__SF-UI-Display-Heavy-Italic__", weight: 800 },
      "Black Italic": { selector: "__SF-UI-Display-Black-Italic__", weight: 900 },
    },
    "SF Pro Display Condensed": {
      Regular: { selector: "__SF-UI-Display-Condensed-Regular__", weight: 400 },
      Ultralight: { selector: "__SF-UI-Display-Condensed-Ultralight__", weight: 100 },
      Thin: { selector: "__SF-UI-Display-Condensed-Thin__", weight: 200 },
      Light: { selector: "__SF-UI-Display-Condensed-Light__", weight: 300 },
      Medium: { selector: "__SF-UI-Display-Condensed-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Display-Condensed-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Display-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Display-Condensed-Heavy__", weight: 800 },
      Black: { selector: "__SF-UI-Display-Condensed-Black__", weight: 900 },
    },
    "SF Pro Text": {
      Regular: { selector: "__SF-UI-Text-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Heavy__", weight: 800 },
      Italic: { selector: "__SF-UI-Text-Italic__", weight: 400 },
      "Light Italic": { selector: "__SF-UI-Text-Light-Italic__", weight: 200 },
      "Medium Italic": { selector: "__SF-UI-Text-Medium-Italic__", weight: 500 },
      "Semibold Italic": { selector: "__SF-UI-Text-Semibold-Italic__", weight: 600 },
      "Bold Italic": { selector: "__SF-UI-Text-Bold-Italic__", weight: 700 },
      "Heavy Italic": { selector: "__SF-UI-Text-Heavy-Italic__", weight: 800 },
    },
    "SF Pro Text Condensed": {
      Regular: { selector: "__SF-UI-Text-Condensed-Regular__", weight: 400 },
      Light: { selector: "__SF-UI-Text-Condensed-Light__", weight: 200 },
      Medium: { selector: "__SF-UI-Text-Condensed-Medium__", weight: 500 },
      Semibold: { selector: "__SF-UI-Text-Condensed-Semibold__", weight: 600 },
      Bold: { selector: "__SF-UI-Text-Condensed-Bold__", weight: 700 },
      Heavy: { selector: "__SF-UI-Text-Condensed-Heavy__", weight: 800 },
    },
    Tahoma: { Regular: { selector: "Tahoma", weight: void 0 } },
    Times: { Regular: { selector: "Times", weight: void 0 } },
    "Times New Roman": { Regular: { selector: "Times New Roman", weight: void 0 } },
    Trebuchet: { Regular: { selector: "Trebuchet MS", weight: void 0 } },
    Verdana: { Regular: { selector: "Verdana", weight: void 0 } },
  },
  ze = {
    "__SF-Compact-Display-Regular__": "SFCompactDisplay-Regular|.SFCompactDisplay-Regular",
    "__SF-Compact-Display-Ultralight__": "SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight",
    "__SF-Compact-Display-Thin__": "SFCompactDisplay-Thin|.SFCompactDisplay-Thin",
    "__SF-Compact-Display-Light__": "SFCompactDisplay-Light|.SFCompactDisplay-Light",
    "__SF-Compact-Display-Medium__": "SFCompactDisplay-Medium|.SFCompactDisplay-Medium",
    "__SF-Compact-Display-Semibold__": "SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold",
    "__SF-Compact-Display-Heavy__": "SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy",
    "__SF-Compact-Display-Black__": "SFCompactDisplay-Black|.SFCompactDisplay-Black",
    "__SF-Compact-Display-Bold__": "SFCompactDisplay-Bold|.SFCompactDisplay-Bold",
    "__SF-UI-Text-Regular__": ".SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText",
    "__SF-UI-Text-Light__": ".SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light",
    "__SF-UI-Text-Medium__": ".SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium",
    "__SF-UI-Text-Semibold__":
      ".SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold",
    "__SF-UI-Text-Bold__": ".SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold",
    "__SF-UI-Text-Heavy__": ".SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy",
    "__SF-UI-Text-Italic__": ".SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic",
    "__SF-UI-Text-Light-Italic__":
      ".SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic",
    "__SF-UI-Text-Medium-Italic__":
      ".SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic",
    "__SF-UI-Text-Semibold-Italic__":
      ".SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic",
    "__SF-UI-Text-Bold-Italic__":
      ".SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic",
    "__SF-UI-Text-Heavy-Italic__":
      ".SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic",
    "__SF-Compact-Text-Regular__": "SFCompactText-Regular|.SFCompactText-Regular",
    "__SF-Compact-Text-Light__": "SFCompactText-Light|.SFCompactText-Light",
    "__SF-Compact-Text-Medium__": "SFCompactText-Medium|.SFCompactText-Medium",
    "__SF-Compact-Text-Semibold__": "SFCompactText-Semibold|.SFCompactText-Semibold",
    "__SF-Compact-Text-Bold__": "SFCompactText-Bold|.SFCompactText-Bold",
    "__SF-Compact-Text-Heavy__": "SFCompactText-Heavy|.SFCompactText-Heavy",
    "__SF-Compact-Text-Italic__": "SFCompactText-Italic|.SFCompactText-Italic",
    "__SF-Compact-Text-Light-Italic__": "SFCompactText-LightItalic|.SFCompactText-LightItalic",
    "__SF-Compact-Text-Medium-Italic__": "SFCompactText-MediumItalic|.SFCompactText-MediumItalic",
    "__SF-Compact-Text-Semibold-Italic__":
      "SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic",
    "__SF-Compact-Text-Bold-Italic__": "SFCompactText-BoldItalic|.SFCompactText-BoldItalic",
    "__SF-Compact-Text-Heavy-Italic__": "SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic",
    "__SF-UI-Display-Condensed-Regular__":
      ".SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular",
    "__SF-UI-Display-Condensed-Ultralight__":
      ".SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight",
    "__SF-UI-Display-Condensed-Thin__":
      ".SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin",
    "__SF-UI-Display-Condensed-Light__":
      ".SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light",
    "__SF-UI-Display-Condensed-Medium__":
      ".SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium",
    "__SF-UI-Display-Condensed-Semibold__":
      ".SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold",
    "__SF-UI-Display-Condensed-Bold__":
      ".SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold",
    "__SF-UI-Display-Condensed-Heavy__":
      ".SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy",
    "__SF-UI-Display-Condensed-Black__": ".SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black",
    "__SF-UI-Display-Regular__":
      ".SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay",
    "__SF-UI-Display-Ultralight__":
      ".SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight",
    "__SF-UI-Display-Thin__":
      ".SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin",
    "__SF-UI-Display-Light__":
      ".SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light",
    "__SF-UI-Display-Medium__":
      ".SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium",
    "__SF-UI-Display-Semibold__":
      ".SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold",
    "__SF-UI-Display-Bold__":
      ".SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold",
    "__SF-UI-Display-Heavy__":
      ".SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy",
    "__SF-UI-Display-Black__": ".SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black",
    "__SF-UI-Display-Italic__": ".SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic",
    "__SF-UI-Display-Ultralight-Italic__":
      ".SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic",
    "__SF-UI-Display-Thin-Italic__":
      ".SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic",
    "__SF-UI-Display-Light-Italic__":
      ".SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic",
    "__SF-UI-Display-Medium-Italic__":
      ".SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic",
    "__SF-UI-Display-Semibold-Italic__":
      ".SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic",
    "__SF-UI-Display-Bold-Italic__":
      ".SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic",
    "__SF-UI-Display-Heavy-Italic__":
      ".SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic",
    "__SF-UI-Display-Black-Italic__":
      ".SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic",
    "__SF-UI-Text-Condensed-Regular__":
      ".SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular",
    "__SF-UI-Text-Condensed-Light__":
      ".SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light",
    "__SF-UI-Text-Condensed-Medium__":
      ".SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium",
    "__SF-UI-Text-Condensed-Semibold__":
      ".SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold",
    "__SF-UI-Text-Condensed-Bold__":
      ".SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold",
    "__SF-UI-Text-Condensed-Heavy__": ".SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy",
    "__SF-Compact-Rounded-Regular__": "SFCompactRounded-Regular|.SFCompactRounded-Regular",
    "__SF-Compact-Rounded-Ultralight__": "SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight",
    "__SF-Compact-Rounded-Thin__": "SFCompactRounded-Thin|.SFCompactRounded-Thin",
    "__SF-Compact-Rounded-Light__": "SFCompactRounded-Light|.SFCompactRounded-Light",
    "__SF-Compact-Rounded-Medium__": "SFCompactRounded-Medium|.SFCompactRounded-Medium",
    "__SF-Compact-Rounded-Semibold__": "SFCompactRounded-Semibold|.SFCompactRounded-Semibold",
    "__SF-Compact-Rounded-Bold__": "SFCompactRounded-Bold|.SFCompactRounded-Bold",
    "__SF-Compact-Rounded-Heavy__": "SFCompactRounded-Heavy|.SFCompactRounded-Heavy",
    "__SF-Compact-Rounded-Black__": "SFCompactRounded-Black|.SFCompactRounded-Black",
  },
  Ie = Mt;
var Ot = "System Default",
  pe = class {
    name = "local";
    fontFamilies = [];
    byFamilyName = new Map();
    fontAliasBySelector = new Map();
    fontAliases = new Map();
    getFontFamilyByName(e) {
      return this.byFamilyName.get(e) ?? null;
    }
    createFontFamily(e) {
      let t = { name: e, fonts: [], source: this.name };
      return (this.addFontFamily(t), t);
    }
    addFontFamily(e) {
      (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
    }
    importFonts() {
      let e = [];
      for (let i of Object.keys(Ie)) {
        let a = Ie[i];
        if (!a) continue;
        let r = this.createFontFamily(i);
        for (let s of Object.keys(a)) {
          let m = a[s];
          if (!m) continue;
          let { selector: u, weight: y } = m,
            h = { variant: s, selector: u, weight: y, family: r, cssFamilyName: r.name };
          r.fonts.push(h);
        }
        e.push(...r.fonts);
      }
      for (let [i, a] of Object.entries(ze)) this.addFontAlias(i, a);
      let { fontFamily: t, aliases: o } = this.getSystemFontFamily();
      this.addFontFamily(t);
      for (let [i, a] of o) this.addFontAlias(i, a);
      return (e.push(...t.fonts), e);
    }
    addFontAlias(e, t) {
      (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
    }
    getSystemFontFamily() {
      let e =
          "system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif",
        t = { name: Ot, fonts: [], source: this.name },
        o = new Map(),
        i = [400, 100, 200, 300, 500, 600, 700, 800, 900],
        a = ["normal", "italic"];
      for (let r of a)
        for (let s of i) {
          let m = kt(s, r),
            u = `__SystemDefault-${s}-${r}__`,
            y = { variant: m, selector: u, style: r, weight: s, family: t, cssFamilyName: t.name };
          (t.fonts.push(y), o.set(u, e));
        }
      return { fontFamily: t, aliases: o };
    }
    getFontAliasBySelector(e) {
      return this.fontAliasBySelector.get(e) || null;
    }
    getFontSelectorByAlias(e) {
      return this.fontAliases.get(e) || null;
    }
    isFontFamilyAlias(e) {
      return !!(e && /^__.*__$/u.exec(e));
    }
  },
  Ze = {
    100: "Thin",
    200: "Extra Light",
    300: "Light",
    400: "Normal",
    500: "Medium",
    600: "Semi Bold",
    700: "Bold",
    800: "Extra Bold",
    900: "Black",
  };
function kt(n, e) {
  let t = e === "normal" ? "Regular" : "Italic";
  return n === 400 ? t : e !== "normal" ? `${Ze[n]} ${t}` : `${Ze[n]}`;
}
var Wt = Je(),
  Xe = 5e3,
  Et = 3,
  fe = class extends Error {
    constructor(e) {
      (super(e), (this.name = "FontLoadingError"));
    }
  },
  ye = new WeakMap();
function Qe(n) {
  let e = ye.get(n);
  return (
    e || ((e = { requests: new Map(), fontFaces: new Map(), ready: new Map() }), ye.set(n, e)),
    e
  );
}
function Ce(n, e, t, o) {
  return `${n}-${e}-${t}-${o}`;
}
function et(n, e, t) {
  return `${n}-${e}-${t}`;
}
var De = (n, e) => tt(n, e, 0);
async function tt(n, e, t) {
  let { family: o, url: i, stretch: a, unicodeRange: r } = n,
    s = n.weight,
    m = n.style || "normal",
    u = Ce(o, m, s, i),
    y = Qe(e),
    h = y.requests.get(u);
  if (!h || t > 0) {
    let b = new FontFace(o, `url(${i})`, {
      weight: ae(s) ? s : s?.toString(),
      style: m,
      stretch: a,
      unicodeRange: r,
    });
    ((h = b
      .load()
      .then(() => (e.fonts.add(b), y.fontFaces.set(u, b), Re(o, m, s, e)))
      .catch((l) => {
        if (l.name !== "NetworkError") throw l;
        if (t < Et) return tt(n, e, t + 1);
        throw new fe(
          `Font loading failed after ${t} retries due to network error: ${JSON.stringify({ family: o, style: m, weight: s, url: i, stretch: a, unicodeRange: r })}`
        );
      })),
      y.requests.set(u, h));
    let p = h;
    p.catch(() => {
      y.requests.get(u) === p && y.requests.delete(u);
    });
  }
  await h;
}
function nt(n, e) {
  let t = Ce(n.family, n.style || "normal", n.weight, n.url);
  return ye.get(e)?.fontFaces.has(t) ?? !1;
}
async function Re(n, e, t, o = document) {
  let i = Qe(o).ready,
    a = et(n, e, t),
    r = i.get(a);
  r ||
    ((r =
      o === document
        ? new Wt(n, { style: e, weight: t }).load(null, Xe)
        : o.fonts.ready.then(() => {})),
    i.set(a, r));
  try {
    await r;
  } catch {
    throw new fe(
      `Failed to check if font is ready (${Xe}ms timeout exceeded): ${JSON.stringify({ family: n, style: e, weight: t })}`
    );
  }
}
function Ve(n, e) {
  let { family: t, url: o, weight: i } = n,
    a = n.style || "normal",
    r = Ce(t, a, i, o),
    s = ye.get(e);
  if (!s) return;
  let m = s.fontFaces.get(r);
  (m && (e.fonts.delete(m), s.fontFaces.delete(r)),
    s.requests.delete(r),
    s.ready.delete(et(t, a, i)));
}
var Be = {
  "FR;Inter": [
    { tag: "opsz", minValue: 14, maxValue: 32, defaultValue: 14, name: "Optical size" },
    { tag: "wght", minValue: 100, maxValue: 900, defaultValue: 400, name: "Weight" },
  ],
};
function ge(n) {
  try {
    if (n === "framer") return ot(Be) ? Be : void 0;
    {
      let e = (async () => {
        switch (n) {
          case "google":
            return (await import("https://app.framerstatic.com/google-W2ZR3QV5.mjs")).default;
          case "fontshare":
            return (await import("https://app.framerstatic.com/fontshare-5JYJIQL5.mjs")).default;
          default:
            Me(n);
        }
      })();
      return ot(e) ? e : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function ot(n) {
  return _e(n) && Object.values(n).every(jt);
}
function $t(n) {
  return _e(n) && ae(n.tag);
}
function jt(n) {
  return Array.isArray(n) && n.every($t);
}
var he = class extends Map {
  _hash = 0;
  get hash() {
    return this._hash;
  }
  set(e, t) {
    return (this._hash++, super.set(e, t));
  }
  delete(e) {
    return (this._hash++, super.delete(e));
  }
  clear() {
    return (this._hash++, super.clear());
  }
};
var it = `${k().api}/web/built-in-fonts`,
  Kt = typeof fetch < "u" ? fetch : () => Promise.reject("fetch is not available");
async function at() {
  let n = await Kt(it, P(it, void 0));
  if (!n.ok)
    throw new Error(`Cannot fetch built-in fonts: fetch returned ${n.status} ${n.statusText}`);
  return (await n.json()).assets;
}
var rt = `${k().api}/web/fontshare/fonts?omit_variable_styles=true`,
  Gt = typeof fetch < "u" ? fetch : () => Promise.reject("fetch is not available");
async function st() {
  let n = await Gt(rt, P(rt, void 0));
  if (!n.ok)
    throw new Error(`Cannot fetch fontshare fonts: fetch returned ${n.status} ${n.statusText}`);
  return (await n.json()).fonts;
}
var Ne = `${k().api}/web/google-fonts`,
  lt = typeof fetch < "u" ? fetch : () => Promise.reject("fetch is not available");
async function ct() {
  let [n, e] = await Promise.all([qt(), Yt()]);
  return { staticFonts: n, variableFonts: e };
}
async function qt() {
  let n = await lt(Ne, P(Ne, void 0));
  if (!n.ok)
    throw new Error(`Cannot fetch google fonts: fetch returned ${n.status} ${n.statusText}`);
  return (await n.json()).items;
}
async function Yt() {
  let n = new URL(Ne);
  (n.searchParams.append("capability", "VF"), n.searchParams.append("capability", "WOFF2"));
  let e = await lt(n, P(n, void 0));
  if (!e.ok)
    throw new Error(`Cannot fetch variable fonts: fetch returned ${e.status} ${e.statusText}`);
  return (await e.json()).items;
}
function Se(n, e) {
  return { family: n.cssFamilyName, url: e, weight: n.weight, style: n.style };
}
function zt({ family: n, url: e, weight: t, style: o }) {
  return `${n}-${o}-${t}-${e}`;
}
var Ue = class {
    bySelector = new he();
    loadedSelectorsByDocument = new WeakMap();
    documents = new Set();
    getGoogleFontsListPromise;
    getFontshareFontsListPromise;
    getBuiltInFontsListPromise;
    customFontsImportPromise = new Promise((e) => {
      this.resolveCustomFontsImportPromise = e;
    });
    constructor() {
      ((this.local = new pe()),
        (this.google = new te()),
        (this.fontshare = new Q()),
        (this.framer = new ee()),
        (this.custom = new ue()),
        (this.builtIn = new J()));
      for (let e of this.local.importFonts()) this.addFont(e);
    }
    local;
    google;
    fontshare;
    builtIn;
    framer;
    custom;
    get hash() {
      return this.bySelector.hash;
    }
    addFont(e) {
      if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
        for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
    }
    bySelectorValuesCache;
    getAvailableFonts() {
      if (!this.bySelectorValuesCache || this.bySelectorValuesCache.hash !== this.bySelector.hash) {
        let e = new Map();
        for (let t of this.bySelector.values()) e.set(t, !0);
        this.bySelectorValuesCache = { result: Array.from(e.keys()), hash: this.bySelector.hash };
      }
      return this.bySelectorValuesCache.result;
    }
    async importGoogleFonts() {
      return (
        this.getGoogleFontsListPromise ||
          (this.getGoogleFontsListPromise = Promise.resolve().then(async () => {
            let { staticFonts: e, variableFonts: t } = await ct(),
              o = await ge("google");
            for (let i of await this.google.importFonts(e, t, o)) this.addFont(i);
            return { staticFonts: e, variableFonts: t };
          })),
        this.getGoogleFontsListPromise
      );
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = st();
        let e = await this.getFontshareFontsListPromise,
          t = await ge("fontshare");
        for (let o of await this.fontshare.importFonts(e, t)) this.addFont(o);
      }
      return this.getFontshareFontsListPromise;
    }
    async importAllWebFonts() {
      await Promise.all([
        this.importGoogleFonts(),
        this.importFontshareFonts(),
        this.importBuiltInFonts(),
      ]);
    }
    async importBuiltInFonts() {
      if (!this.getBuiltInFontsListPromise) {
        this.getBuiltInFontsListPromise = at();
        let e = await this.getBuiltInFontsListPromise;
        for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
      }
      return this.getBuiltInFontsListPromise;
    }
    importFramerFonts(e) {
      let t = ge("framer");
      this.framer.importFonts(e, t).forEach((o) => {
        this.addFont(o);
      });
    }
    importCustomFonts(e) {
      let t = new Map();
      this.bySelector.forEach((i, a) => {
        if (!me(a)) return;
        let r = this.getFontBySelector(a);
        (r && t.set(a, r), this.bySelector.delete(a));
      });
      for (let i of this.custom.importFonts(e)) this.addFont(i);
      let o = new Map();
      for (let [i, a] of t) {
        if (!a.file || this.getFontBySelector(i)?.file === a.file) continue;
        let r = Se(a, a.file);
        o.set(zt(r), r);
      }
      for (let i of o.values()) this.removeFontFromDocuments(i);
      this.resolveCustomFontsImportPromise();
    }
    getCustomFontsImportPromise() {
      return this.customFontsImportPromise;
    }
    trackDocument(e) {
      for (let t of this.documents) if (t.deref() === e) return;
      this.documents.add(new WeakRef(e));
    }
    removeFontFromDocuments(e) {
      for (let t of this.documents) {
        let o = t.deref();
        if (!o) {
          this.documents.delete(t);
          continue;
        }
        Ve(e, o);
      }
    }
    getCustomFontDebugFamilies() {
      return this.custom.getDebugFamilies();
    }
    getFontFamily(e) {
      return this[e.source].getFontFamilyByName(e.name);
    }
    getFontBySelector(e) {
      if (!e) return;
      let t;
      if (((t = this.bySelector.get(e)), !!t))
        return t.alternativeSelectors && e in t.alternativeSelectors
          ? { ...t, ...t.alternativeSelectors[e] }
          : t;
    }
    getDraftPropertiesBySelector(e) {
      let t = this.getFontBySelector(e);
      if (t)
        return {
          style: t.style,
          weight: t.weight,
          variant: t.variant,
          cssFamilyName: t.cssFamilyName,
          source: t.family.source,
          category: t.category,
        };
      let o = this.google.parseSelector(e);
      if (o) {
        let s = te.parseVariant(o.variant);
        if (M(s))
          return {
            style: s.style,
            weight: s.weight,
            variant: o.variant,
            cssFamilyName: le(o, "google"),
            source: "google",
            category: void 0,
          };
      }
      let i = this.fontshare.parseSelector(e);
      if (i) {
        let s = Q.parseVariant(i.variant);
        if (M(s))
          return {
            style: s.style,
            weight: s.weight,
            variant: i.variant,
            cssFamilyName: le(i, "fontshare"),
            source: "fontshare",
            category: void 0,
          };
      }
      let a = this.builtIn.parseSelector(e);
      if (a) {
        let s = J.parseVariant(a.variant);
        if (M(s))
          return {
            style: s.style,
            weight: s.weight,
            variant: a.variant,
            cssFamilyName: le(a, "builtIn"),
            source: "builtIn",
            category: void 0,
          };
      }
      let r = ee.getDraftFontPropertiesBySelector(e);
      return r || null;
    }
    isSelectorLoaded(e, t = document) {
      let o = this.getFontBySelector(e);
      return o ? this.isLoadedFontAvailableInDocument(e, o, t) : !1;
    }
    isLoadedFontAvailableInDocument(e, t, o) {
      let i = t.family.source;
      return i === "local"
        ? !0
        : i === "framer" && !X(t)
          ? (this.loadedSelectorsByDocument.get(o)?.has(e) ?? !1)
          : t.file
            ? nt(Se(t, t.file), o)
            : !1;
    }
    markSelectorLoaded(e, t) {
      let o = this.loadedSelectorsByDocument.get(t);
      (o || ((o = new Set()), this.loadedSelectorsByDocument.set(t, o)), o.add(e));
    }
    async loadFont(e, t) {
      let o = this.getFontBySelector(e);
      if (!o) return 2;
      if (this.isLoadedFontAvailableInDocument(e, o, t)) return 0;
      this.trackDocument(t);
      let i = o.family.source,
        a = X(o);
      switch (i) {
        case "local":
          return 0;
        case "framer":
          return (
            Ae() || (await Re(o.family.name, o.style, o.weight, t)),
            a
              ? o.file
                ? (await De(Se(o, o.file), t), 1)
                : Promise.reject(`Unable to load font: ${e}`)
              : (this.markSelectorLoaded(e, t), 1)
          );
        case "google":
        case "fontshare":
        case "builtIn":
        case "custom": {
          if (!o.file) return Promise.reject(`Unable to load font: ${e}`);
          let r = Se(o, o.file);
          return (await De(r, t), this.getFontBySelector(e)?.file !== r.url ? (Ve(r, t), 2) : 1);
        }
        default:
          Pe(i);
      }
    }
    async loadFontsFromSelectors(e, t) {
      let o = [];
      (e.some((u) => u.startsWith($)) &&
        o.push(
          this.importFontshareFonts().catch((u) => {
            q("Failed to load Fontshare fonts:", u);
          })
        ),
        e.some((u) => u.startsWith(j)) &&
          o.push(
            this.importGoogleFonts().catch((u) => {
              q("Failed to load Google fonts:", u);
            })
          ),
        e.some((u) => u.startsWith(Z)) &&
          o.push(
            this.importBuiltInFonts().catch((u) => {
              q("Failed to load built-in fonts:", u);
            })
          ),
        e.some(me) &&
          o.push(
            this.customFontsImportPromise.catch((u) => {
              q("Failed to load custom fonts:", u);
            })
          ),
        o.length > 0 && (await Promise.all(o)));
      let m = [];
      for (let u of e) m.push(this.loadFont(u, t));
      return Promise.allSettled(m);
    }
    async loadFonts(e, t = document) {
      return {
        newlyLoadedFontCount: (await this.loadFontsFromSelectors(e, t)).filter(
          (a) => a.status === "fulfilled" && a.value === 1
        ).length,
      };
    }
    async loadMissingFonts(e, t) {
      let o = e.filter((a) => !this.isSelectorLoaded(a));
      if (o.length === 0) return;
      (await this.loadWebFontsFromSelectors(o),
        o.every((a) => this.isSelectorLoaded(a)) && t && t());
    }
    async loadWebFontsFromSelectors(e) {
      return this.loadFontsFromSelectors(e, document);
    }
    get defaultFont() {
      let e = this.getFontBySelector("Inter");
      return (Le(e, "Can\u2019t find Inter font"), e);
    }
    testing = { addFont: this.addFont.bind(this) };
  },
  Lo = new Ue();
function Mo(n) {
  return Object.keys(n);
}
var Zt;
((b) => {
  function n(p, ...l) {
    return p.concat(l);
  }
  b.push = n;
  function e(p) {
    return p.slice(0, -1);
  }
  b.pop = e;
  function t(p, ...l) {
    return l.concat(p);
  }
  b.unshift = t;
  function o(p, l, ...c) {
    let d = p.length;
    if (l < 0 || l > d) throw Error("index out of range: " + l);
    let F = p.slice();
    return (F.splice(l, 0, ...c), F);
  }
  b.insert = o;
  function i(p, l, c) {
    let d = p.length;
    if (l < 0 || l >= d) throw Error("index out of range: " + l);
    let F = Array.isArray(c) ? c : [c],
      f = p.slice();
    return (f.splice(l, 1, ...F), f);
  }
  b.replace = i;
  function a(p, l) {
    let c = p.length;
    if (l < 0 || l >= c) throw Error("index out of range: " + l);
    let d = p.slice();
    return (d.splice(l, 1), d);
  }
  b.remove = a;
  function r(p, l, c) {
    let d = p.length;
    if (l < 0 || l >= d) throw Error("from index out of range: " + l);
    if (c < 0 || c >= d) throw Error("to index out of range: " + c);
    let F = p.slice();
    if (c === l) return F;
    let f = F[l];
    return (
      l < c ? (F.splice(c + 1, 0, f), F.splice(l, 1)) : (F.splice(l, 1), F.splice(c, 0, f)),
      F
    );
  }
  b.move = r;
  function s(p, l) {
    let c = [],
      d = Math.min(p.length, l.length);
    for (let F = 0; F < d; F++) c.push([p[F], l[F]]);
    return c;
  }
  b.zip = s;
  function m(p, l, c) {
    let d = p.slice(),
      F = d[l];
    return (F === void 0 || (d[l] = c(F)), d);
  }
  b.update = m;
  function u(p) {
    return Array.from(new Set(p));
  }
  b.unique = u;
  function y(p, ...l) {
    return Array.from(new Set([...p, ...l.flat()]));
  }
  b.union = y;
  function h(p, l) {
    return p.filter(l);
  }
  b.filter = h;
})((Zt ||= {}));
var Jt = Object.prototype.hasOwnProperty;
function Xt(n, e) {
  return Jt.call(n, e);
}
var Qt;
((o) => {
  function n(i, a, r) {
    for (let s of Object.keys(i)) Xt(a, s) || delete i[s];
    for (let s of Object.keys(a))
      if (i[s] === void 0) {
        if (s === "id") {
          i[s] = r();
          continue;
        }
        i[s] = a[s];
      }
    return (Object.setPrototypeOf(i, Object.getPrototypeOf(a)), i);
  }
  o.morphUsingTemplate = n;
  function e(i, a) {
    a && Object.assign(i, a);
  }
  o.writeOnce = e;
  function t(i, a) {
    return Object.assign(Object.create(Object.getPrototypeOf(i)), i, a);
  }
  o.update = t;
})((Qt ||= {}));
var en;
((i) => {
  function n(a, ...r) {
    return new Set([...a, ...r]);
  }
  i.add = n;
  function e(a, ...r) {
    let s = new Set(a);
    for (let m of r) s.delete(m);
    return s;
  }
  i.remove = e;
  function t(...a) {
    let r = new Set();
    for (let s of a) for (let m of s) r.add(m);
    return r;
  }
  i.union = t;
  function o(a, r) {
    return a.has(r) ? i.remove(a, r) : i.add(a, r);
  }
  i.toggle = o;
})((en ||= {}));
var tn;
((o) => {
  function n(i, ...a) {
    let r = new Map();
    i.forEach((m, u) => r.set(u, m));
    let s = !1;
    for (let m of a) m && (m.forEach((u, y) => r.set(y, u)), (s = !0));
    return s ? r : i;
  }
  o.merge = n;
  function e(i, a, r) {
    let s = new Map(i);
    return (s.set(a, r), s);
  }
  o.set = e;
  function t(i, a) {
    let r = new Map(i);
    return (r.delete(a), r);
  }
  o.remove = t;
})((tn ||= {}));
var dt = ft(yt(), 1);
function Wo(n) {
  let e = (0, dt.useRef)(null);
  return (e.current === null && (e.current = n()), e.current);
}
var nn = 1e3 / 60,
  on = 1e3 / 25,
  an = 500;
function Ko(n) {
  return typeof n == "function" ? n() : n;
}
var ut = { background: 0, "user-visible": 1, "user-blocking": 2 };
function Go(n, e) {
  return ut[n] > ut[e];
}
function rn() {
  if (!(typeof scheduler > "u")) return scheduler;
}
var Ft = Promise.resolve();
function mt(n, e) {
  let t = n?.priority,
    o = rn();
  return t === "background"
    ? (e?.() ?? be(1))
    : o?.yield
      ? o.yield(n).catch(se)
      : o?.postTask
        ? o.postTask(se, n).catch(se)
        : e
          ? e()
          : t === "user-blocking"
            ? Ft
            : be(0);
}
var sn = 100;
function qo(n, e, t) {
  let o = -1 / 0,
    i,
    a = new Set();
  function r() {
    for (let c of a) c();
    a.clear();
  }
  function s() {
    return document.hidden ? (r(), !0) : !1;
  }
  function m() {
    G() &&
      (document.addEventListener("visibilitychange", s), window.addEventListener("pagehide", r));
  }
  function u(c) {
    return new Promise((d) => {
      (setTimeout(d, sn),
        n(() => {
          mt(c, e).then(d);
        }));
    });
  }
  function y(c) {
    return G()
      ? new Promise((d) => {
          let F = !0,
            f = () => {
              F && ((F = !1), a.delete(f), d());
            };
          (a.add(f), s() || m(), c.then(f, f));
        })
      : c;
  }
  function h(c, d) {
    let { continueAfter: F, ensureContinueBeforeUnload: f, ...S } = c,
      g = (d ?? F === "paint") ? u(S) : mt(S, e);
    return f ? y(g) : g;
  }
  function b(c, d, F) {
    F && c.pendingPaintYieldCount++;
    let f = h(d, F),
      S = d.signal,
      w = !0,
      g = (U) => {
        w &&
          ((w = !1),
          S?.removeEventListener("abort", T),
          U && (o = performance.now()),
          F && c.pendingPaintYieldCount--,
          i === c && c.pendingPaintYieldCount === 0 && (i = void 0));
      },
      T = () => g(!1);
    return (
      S?.aborted ? T() : S?.addEventListener("abort", T, { once: !0 }),
      f.then(
        () => g(!0),
        () => g(!0)
      ),
      f
    );
  }
  function p(c, d) {
    let F = i;
    if (!F) {
      let S = performance.now(),
        w = d ?? (c.priority === "user-blocking" ? nn : on),
        g = G() && document.hidden ? an : w;
      if (S - o < g) return;
      ((F = { pendingPaintYieldCount: 0 }), (i = F));
    }
    let f = c.continueAfter === "paint" && (F.pendingPaintYieldCount > 0 || t?.() !== !1);
    return b(F, c, f);
  }
  function l(c) {
    let { batch: d, batchDuration: F, ...f } = c ?? {};
    return !G() && !e ? (d ? void 0 : Ft) : d ? p(f, F) : h(f);
  }
  return l;
}
export {
  N as a,
  M as b,
  we as c,
  Ee as d,
  X as e,
  me as f,
  It as g,
  Q as h,
  te as i,
  Ot as j,
  De as k,
  Ue as l,
  Lo as m,
  Mo as n,
  Zt as o,
  Qt as p,
  en as q,
  tn as r,
  nn as s,
  an as t,
  Ko as u,
  Go as v,
  qo as w,
  Wo as x,
};
//# sourceMappingURL=chunk-MFIC6MJS.mjs.map
