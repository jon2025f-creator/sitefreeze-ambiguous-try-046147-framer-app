import {
  G as yt,
  I as v,
  K as pt,
  L as at,
  M as dt,
  N as gt,
  O as rt,
  P as ht,
  Q as T,
  R as U,
  Y as q,
  a as R,
  g as ft,
  j as nt,
} from "chunk-KU6N7BL4.mjs";
import { a as V, b as E } from "chunk-XD24P57D.mjs";
import { h as S } from "chunk-EIH2JWGG.mjs";
import { r as Ft } from "chunk-VHFKZWVR.mjs";
import { a as A } from "chunk-YRQ7G4QH.mjs";
function N(o) {
  return !!(o && Array.isArray(o));
}
function k(o) {
  if (!o || !Array.isArray(o)) return;
  let t = [];
  for (let e of o)
    jt(e) &&
      t.push({
        tag: e.tag,
        name: e.name,
        minValue: e.minValue,
        maxValue: e.maxValue,
        defaultValue: e.defaultValue,
      });
  return t;
}
function H(o) {
  return !(
    typeof o != "object" ||
    o === null ||
    !("tag" in o) ||
    typeof o.tag != "string" ||
    ("coverage" in o && typeof o.coverage < "u" && !Array.isArray(o.coverage))
  );
}
function jt(o) {
  return !(
    typeof o != "object" ||
    o === null ||
    !("tag" in o) ||
    typeof o.tag != "string" ||
    ("name" in o && typeof o.name != "string") ||
    !("minValue" in o) ||
    typeof o.minValue != "number" ||
    !("maxValue" in o) ||
    typeof o.maxValue != "number" ||
    !("defaultValue" in o) ||
    typeof o.defaultValue != "number"
  );
}
var D = "BI;",
  O = class {
    name = "builtIn";
    fontFamilies = [];
    byFamilyName = new Map();
    assetByKey = new Map();
    importFonts(t) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
      let e = [];
      for (let n of t) {
        if (!this.isValidBuiltInFont(n)) continue;
        let { properties: a } = n,
          r = a.font.fontFamily,
          s = this.createFontFamily(r, a.font.foundryName, a.font.fontVersion),
          i = a.font.openTypeData,
          c = a.font.variationAxes,
          l = Array.isArray(c),
          u = l ? "variable" : a.font.fontSubFamily || "regular",
          y = q(n),
          w = k(c),
          d = {
            assetKey: n.key,
            family: s,
            selector: this.createSelector(r, u, a.font.fontVersion),
            variant: u,
            file: y,
            hasOpenTypeFeatures: N(i),
            variationAxes: w,
            category: a.font.fontCategory,
            weight: l ? Kt(w, a.font.faceDescriptors?.weight) : _(u),
            style: bt(u),
            cssFamilyName: T(r, l),
          };
        (s.fonts.push(d), this.assetByKey.set(n.key, n), e.push(d));
      }
      for (let n of this.fontFamilies)
        n.fonts.sort((a, r) => {
          let s = _(a.variant),
            i = _(r.variant);
          return !s || !i ? 1 : s - i;
        });
      return e;
    }
    static parseVariant(t) {
      let e = Vt(t),
        a = e === "variable" || e === "variable-italic" ? 400 : wt[e],
        r = bt(t);
      return { weight: a, style: r };
    }
    getFontBySelector(t) {
      let e = this.parseSelector(t);
      if (!e) return;
      let n = this.getFontFamilyByName(e.name);
      if (n) return n.fonts.find((a) => a.selector === t);
    }
    getFontFamilyByName(t) {
      return this.byFamilyName.get(t) ?? null;
    }
    createFontFamily(t, e, n) {
      let a = this.byFamilyName.get(t);
      if (a && a.version === n) return a;
      let r = { source: this.name, name: t, fonts: [], foundryName: e, version: n };
      return (this.addFontFamily(r), r);
    }
    getOpenTypeFeatures(t) {
      V(t.assetKey, "Font must have an asset key");
      let n = this.assetByKey.get(t.assetKey)?.properties?.font?.openTypeData;
      return N(n)
        ? n?.map((a) => {
            if (H(a)) return { tag: a.tag, coverage: a.coverage };
          })
        : [];
    }
    isValidBuiltInFont(t) {
      return !t.mimeType.startsWith("font/") ||
        t.properties?.kind !== "font" ||
        !t.properties.font ||
        !t.properties.font.fontVersion ||
        !t.properties.font.fontFamily
        ? !1
        : "fontFamily" in t.properties.font;
    }
    createSelector(t, e, n) {
      return `${D}${t}/${e}/${n}`;
    }
    parseSelector(t) {
      if (!t.startsWith(D)) return null;
      let [e, n] = t.split(D);
      if (n === void 0) return null;
      let [a, r, s] = n.split("/");
      return !a || !r || !s
        ? null
        : {
            name: a,
            variant: r,
            source: this.name,
            isVariable: r.toLowerCase().includes("variable"),
          };
    }
    addFontFamily(t) {
      (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t));
    }
  },
  wt = {
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
function _(o) {
  let t = Vt(o);
  return wt[t];
}
function Kt(o, t) {
  let e = o?.find((n) => n.tag === "wght")?.defaultValue;
  return e !== void 0 && e >= 1 && e <= 1e3 ? e : (t ?? _("variable") ?? 500);
}
function Vt(o) {
  return o.toLowerCase().replace(/\s+/gu, "-");
}
function bt(o) {
  return (
    (o = o.toLowerCase()),
    o.includes("italic") || o.includes("oblique") || o.includes("slanted") ? "italic" : "normal"
  );
}
function L(o, t) {
  return { ...Et(o, t), ...Ut(o, t) };
}
function Et(o, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: e, style: n } = o,
    a = new Map(),
    r = new Map();
  for (let u of t)
    u.isVariable === o.isVariable &&
      (a.set(`${u.weight}-${u.style}`, u),
      !(u.weight <= e) && (r.has(u.style) || r.set(u.style, u)));
  let s = r.get(n),
    i = r.get("italic"),
    c = o.weight;
  c <= 300
    ? ((s = a.get(`400-${n}`) ?? s), (i = a.get("400-italic") ?? i))
    : c <= 500
      ? ((s = a.get(`700-${n}`) ?? s), (i = a.get("700-italic") ?? i))
      : ((s = a.get(`900-${n}`) ?? s), (i = a.get("900-italic") ?? i));
  let l = a.get(`${e}-italic`);
  return { variantBold: s, variantItalic: l, variantBoldItalic: i };
}
function Ut(o, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let e = new Map(),
    n,
    a,
    r,
    s;
  for (let i of t) {
    if (!i.isVariable) continue;
    let c = i.weight === o.weight,
      l = i.weight === 400;
    i.style === "normal"
      ? c
        ? (n = i)
        : l
          ? (r = i)
          : r || (r = i)
      : i.style === "italic" && (c ? (a = i) : l ? (s = i) : s || (s = i));
  }
  return { variantVariable: n ?? r, variantVariableItalic: a ?? s };
}
function M(o) {
  return !!o.variationAxes;
}
var qt = yt("custom-font-source"),
  it = "CUSTOM;",
  st = "CUSTOMV2;";
function X(o) {
  return Ht(o) || St(o);
}
function Ht(o) {
  return o.startsWith(st);
}
function St(o) {
  return o.startsWith(it);
}
function _t(o, t) {
  for (let e = 0; e < o.length; e++) {
    let n = o[e];
    if (n) {
      if (n.owner !== t.owner && n.file === t.file)
        return { existingFont: n, index: e, projectDuplicate: !0 };
      if (n && n.selector === t.selector)
        return { existingFont: n, index: e, projectDuplicate: !1 };
    }
  }
}
function zt(o) {
  let { font: t } = o,
    e = t.fontFamily,
    n = Array.isArray(t.variationAxes);
  if (n && e.toLowerCase().includes("variable")) return e;
  let a = n ? ht : t.fontSubFamily.trim();
  return a === "" ? e : `${e} ${a}`;
}
function Xt({ fontFamily: o, fontSubFamily: t, variationAxes: e, faceDescriptors: n }) {
  let a = t.trim() || "Regular",
    r = a.toLocaleLowerCase().includes("variable"),
    s = k(e) && !r ? `Variable ${a}` : a,
    i = "normal",
    c = 400;
  return (
    n && ((c = n.weight), (i = n.italic || n.oblique ? "italic" : "normal")),
    { family: o, variant: s, weight: c, style: i }
  );
}
var z = class o {
  name = "custom";
  fontFamilies = [];
  byFamilyName = new Map();
  assetsByKey = new Map();
  debugByFamily = new Map();
  debugFamilies;
  importFonts(t) {
    ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
    let e = {},
      n = new Map();
    for (let a of t) {
      if (!this.isValidCustomFontAsset(a)) continue;
      let { family: r, variant: s, weight: i, style: c } = Xt(a.properties.font),
        l = a.properties.font.variationAxes,
        u = Array.isArray(l),
        y = a.properties.font.openTypeData,
        w = q(a),
        d = Qt(a),
        m = zt(a.properties),
        g = o.createLegacySelector(m),
        p = this.createFontFamily(r),
        h = o.createSelector(p.name, s),
        f = {
          assetKey: a.key,
          family: p,
          selector: h,
          variant: s,
          weight: i,
          style: c,
          file: w,
          hasOpenTypeFeatures: N(y),
          variationAxes: k(l),
          owner: d,
          alternativeSelectors: {
            [g]: {
              variant: u ? "variable" : this.inferVariantName(m),
              cssFamilyName: o.cssFontFamilyFromSelector(g),
            },
          },
          cssFamilyName: o.cssFontFamilyFromSelector(h),
        },
        b = _t(p.fonts, f);
      if (b?.projectDuplicate) f.owner === "team" && ((p.fonts[b.index] = f), (e[h] = f));
      else if (b) {
        qt.debug("Duplicate font found for:", f, "with existing font:", b.existingFont);
        let F = b.existingFont,
          x = f.file?.endsWith(".woff2") ?? !1,
          K = F.file?.endsWith(".woff2") ?? !1,
          tt = x && !K,
          et = x === K,
          ot = f.owner === "team" || F.owner !== "team";
        (tt || (et && ot)) && ((p.fonts[b.index] = f), (e[h] = f));
      } else (p.fonts.push(f), (e[h] = f));
      (this.assetsByKey.set(a.key, a), Yt(n, r, s).fonts.push({ font: f, asset: a, selected: !1 }));
    }
    for (let a of this.fontFamilies) a.fonts.length > 0 && Jt(a);
    return ((this.debugByFamily = n), (this.debugFamilies = void 0), Object.values(e));
  }
  getDebugFamilies() {
    if (this.debugFamilies) return this.debugFamilies;
    let t = new Set();
    for (let e of this.fontFamilies)
      for (let n of e.fonts) n.assetKey && n.owner && t.add(`${n.assetKey}:${n.owner}`);
    return ((this.debugFamilies = Zt(this.debugByFamily, t)), this.debugFamilies);
  }
  static createSelector(t, e) {
    return `${st}${t}${e ? ` ${e}` : ""}`;
  }
  static createLegacySelector(t) {
    return `${it}${t}`;
  }
  static cssFontFamilyFromSelector(t) {
    return (
      V(X(t), "Selector must be a custom font selector"),
      St(t) ? t.slice(it.length) : t.slice(st.length)
    );
  }
  isValidCustomFontAsset(t) {
    return !t.mimeType.startsWith("font/") || t.properties?.kind !== "font" || !t.properties.font
      ? !1
      : "fontFamily" in t.properties.font;
  }
  getOpenTypeFeatures(t) {
    V(t.assetKey, "Font must have an asset key");
    let n = this.assetsByKey.get(t.assetKey)?.properties?.font?.openTypeData;
    return N(n)
      ? n?.map((a) => {
          if (H(a)) return { tag: a.tag, coverage: a.coverage };
        })
      : [];
  }
  inferVariantName(t) {
    let e = [
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
      n = [...e.map((i) => `${i} italic`), ...e],
      a = t.toLowerCase(),
      r = [...a.split(" "), ...a.split("-"), ...a.split("_")],
      s = n.find((i) => r.includes(i) || r.includes(i.replace(/\s+/gu, "")));
    return s ? s.replace(/^\w|\s\w/gu, (i) => i.toUpperCase()) : "Regular";
  }
  createFontFamily(t) {
    let e = this.byFamilyName.get(t);
    if (e) return e;
    let n = { source: this.name, name: t, fonts: [] };
    return (this.addFontFamily(n), n);
  }
  addFontFamily(t) {
    (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t));
  }
  getFontFamilyByName(t) {
    let e = this.byFamilyName.get(t);
    return e || null;
  }
};
function vt(o) {
  if (!(!o.weight || !o.style))
    return { weight: o.weight, style: o.style, isVariable: M(o), selector: o.selector };
}
function Jt(o) {
  let t = o.fonts.map((e) => vt(e)).filter((e) => e !== void 0);
  for (let e of o.fonts) {
    let n = vt(e);
    if (!n) continue;
    let a = L(n, t);
    ((e.selectorVariable = a.variantVariable?.selector),
      (e.selectorVariableItalic = a.variantVariableItalic?.selector),
      (e.selectorBold = a.variantBold?.selector),
      (e.selectorBoldItalic = a.variantBoldItalic?.selector),
      (e.selectorItalic = a.variantItalic?.selector));
  }
}
function Qt(o) {
  return o.ownerTypes.includes("team") ? "team" : "project";
}
function Yt(o, t, e) {
  let n = o.get(t);
  n || ((n = new Map()), o.set(t, n));
  let a = n.get(e);
  return (a || ((a = { fonts: [] }), n.set(e, a)), a);
}
function Zt(o, t) {
  return Array.from(o.entries())
    .sort(([e], [n]) => e.localeCompare(n))
    .map(([e, n]) => ({
      family: e,
      variants: Array.from(n.entries())
        .sort(([a], [r]) => a.localeCompare(r))
        .map(([, a]) => ({
          fonts: a.fonts.map((r) => ({
            ...r,
            selected:
              r.font.assetKey && r.font.owner ? t.has(`${r.font.assetKey}:${r.font.owner}`) : !1,
          })),
        })),
    }));
}
async function J(o) {
  switch (o) {
    case "google":
      return (await import("https://app.framerstatic.com/google-2OZFWWZ5.mjs")).default;
    case "fontshare":
      return (await import("https://app.framerstatic.com/fontshare-WSCBC7QJ.mjs")).default;
    default:
      throw new Error(`Unknown font source: ${o}`);
  }
}
async function B(o) {
  switch (o) {
    case "google":
      return (await import("https://app.framerstatic.com/google-G2Y5OCR2.mjs")).default;
    case "fontshare":
      return (await import("https://app.framerstatic.com/fontshare-GLIYW33A.mjs")).default;
    case "framer":
      return (await import("https://app.framerstatic.com/framer-font-N2MJBC4G.mjs")).default;
    default:
      throw new Error(`Unknown font source: ${o}`);
  }
}
var te = ["display", "sans", "serif", "slab", "handwritten", "script"];
function xt(o) {
  return o
    .split(",")
    .map((t) => t.trim().toLowerCase())
    .filter(ee);
}
function ee(o) {
  return te.includes(o);
}
var C = "FS;",
  At = {
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
  Tt = Object.keys(At),
  oe = new RegExp(`^(?:${[...Tt, "italic", "variable"].join("|")})`, "u"),
  $ = class o {
    name = "fontshare";
    fontFamilies = [];
    byFamilyName = new Map();
    getFontFamilyByName(t) {
      return this.byFamilyName.get(t) ?? null;
    }
    static parseVariant(t) {
      let e = t.toLowerCase().split(" "),
        n = Tt.find((i) => e.includes(i)),
        a = t.toLowerCase().includes("italic") ? "italic" : "normal";
      return { weight: (n && At[n]) || 400, style: a === "italic" ? a : "normal" };
    }
    parseSelector(t) {
      if (!t.startsWith(C)) return null;
      let e = t.split("-");
      if (e.length !== 2) return null;
      let [n, a] = e;
      return !n || !a
        ? null
        : {
            name: n.replace(C, ""),
            variant: a,
            source: this.name,
            isVariable: a.toLowerCase().includes("variable"),
          };
    }
    static createSelector(t, e) {
      return `${C}${t}-${e.toLowerCase()}`;
    }
    static createMetadataSelector(t) {
      return `${C}${t}`;
    }
    addFontFamily(t) {
      (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t));
    }
    async importFonts(t, e) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear());
      let n = await J("fontshare"),
        a = [];
      for (let r of t) {
        let i = r.font_styles
            .filter((m) => {
              let g = m.name.toLowerCase();
              return !(!oe.exec(g) || g.split(" ").includes("wide"));
            })
            .map((m) => ({
              ...o.parseVariant(m.name),
              selector: o.createSelector(r.name, m.name),
              isVariable: m.is_variable,
              fontshareVariantName: m.name,
              file: m.file,
            })),
          c = o.createMetadataSelector(r.name),
          l = e?.[c],
          u = r.name,
          y = this.getFontFamilyByName(u);
        y || ((y = { name: u, fonts: [], source: this.name }), this.addFontFamily(y));
        let w = o.createMetadataSelector(r.name),
          d = n[w];
        for (let m of i) {
          let {
              variantBold: g,
              variantBoldItalic: p,
              variantItalic: h,
              variantVariable: f,
              variantVariableItalic: b,
            } = L(m, i),
            W = {
              family: y,
              variant: m.fontshareVariantName.toLowerCase(),
              selector: m.selector,
              selectorBold: g?.selector,
              selectorBoldItalic: p?.selector,
              selectorItalic: h?.selector,
              selectorVariable: f?.selector,
              selectorVariableItalic: b?.selector,
              weight: m.weight,
              style: m.style,
              file: m.file,
              category: ne(r.category),
              hasOpenTypeFeatures: d,
              variationAxes: m.isVariable ? l : void 0,
              cssFamilyName: T(y.name, m.isVariable),
            };
          (y.fonts.push(W), a.push(W));
        }
      }
      return a;
    }
    async getOpenTypeFeatures(t) {
      let e = await B("fontshare"),
        n = o.createMetadataSelector(t.family.name);
      return e[n];
    }
  };
function ne(o) {
  let t = {
      serif: "serif",
      sans: "sans-serif",
      slab: "slab",
      display: "display",
      handwritten: "handwriting",
      script: "handwriting",
    },
    e = xt(o)[0];
  return e && t[e];
}
var ae = "Inter",
  Nt = "FR;";
var re = {
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
  G = class o {
    name = "framer";
    fontFamilies = [];
    byFamilyName = new Map();
    getFontFamilyByName(t) {
      return this.byFamilyName.get(t) ?? null;
    }
    addFontFamily(t) {
      let e = { name: t, fonts: [], source: this.name };
      return (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e), e);
    }
    static getDraftFontPropertiesBySelector(t) {
      if (!t.startsWith(Nt) && !t.startsWith(ae)) return null;
      let e = t.split("-"),
        [n, a = ""] = e;
      if (!n) return null;
      let r = a.includes("Italic") ? "italic" : "normal",
        s = a.replace("Italic", ""),
        i = (s && re[s]) || 400;
      return {
        cssFamilyName: n,
        style: r,
        weight: i,
        source: "framer",
        variant: void 0,
        category: "sans-serif",
      };
    }
    static createMetadataSelector(t) {
      return `${Nt}${t}`;
    }
    importFonts(t, e) {
      ((this.fontFamilies.length = 0), this.byFamilyName.clear());
      let n = [];
      return (
        t.forEach((a) => {
          let { uiFamilyName: r, ...s } = a,
            i = o.createMetadataSelector(a.uiFamilyName),
            c = e?.[i],
            l = this.getFontFamilyByName(r);
          l || (l = this.addFontFamily(r));
          let u = a.selector === a.selectorVariable || a.selector === a.selectorVariableItalic,
            y = { ...s, family: l, variationAxes: u ? c : void 0 };
          (l.fonts.push(y), n.push(y));
        }),
        n
      );
    }
    async getOpenTypeFeatures(t) {
      let e = await B("framer"),
        n = o.createMetadataSelector(t.family.name);
      return e[n];
    }
  };
var P = "GF;",
  j = class o {
    name = "google";
    fontFamilies = [];
    byFamilyName = new Map();
    supportedSubsetsByFamilyName = new Map();
    getFontFamilyByName(t) {
      return this.byFamilyName.get(t) ?? null;
    }
    getSupportedSubsetsByFamilyName(t) {
      return this.supportedSubsetsByFamilyName.get(t) ?? [];
    }
    static parseVariant(t) {
      if (t === "regular") return { style: "normal", weight: 400 };
      let e = /(\d*)(normal|italic)?/u.exec(t);
      if (!e) return {};
      let n = parseInt(e[1] || "400"),
        a = e[2] === "italic" ? "italic" : "normal";
      return { weight: n, style: a };
    }
    parseSelector(t) {
      if (!t.startsWith(P)) return null;
      let e = t.includes("-variable-"),
        n = e ? t.split("-variable-") : t.split("-");
      if (n.length !== 2) return null;
      let [a, r] = n;
      return !a || !r
        ? null
        : { name: a.replace(P, ""), variant: r, source: this.name, isVariable: e };
    }
    static createSelector(t, e, n) {
      return `${P}${t}-${n ? "variable-" : ""}${e}`;
    }
    static createMetadataSelector(t) {
      return `${P}${t}`;
    }
    addFontFamily(t) {
      let e = { name: t, fonts: [], source: this.name };
      return (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e), e);
    }
    async importFonts(t, e, n) {
      ((this.fontFamilies.length = 0),
        this.byFamilyName.clear(),
        this.supportedSubsetsByFamilyName.clear());
      let a = await J("google"),
        r = [],
        s = It(t, (c) => c.family),
        i = It(e, (c) => c.family);
      for (let c in s) {
        let l = s[c];
        if (!l) continue;
        this.supportedSubsetsByFamilyName.set(l.family, l.subsets ?? []);
        let u = this.getFontFamilyByName(l.family);
        u || (u = this.addFontFamily(l.family));
        let w = l.variants.map((F) => ({
            ...o.parseVariant(F),
            googleFontsVariantName: F,
            selector: o.createSelector(c, F, !1),
            isVariable: !1,
            file: l.files[F],
          })),
          d = i[c],
          m = d?.axes
            ? d.variants.map((F) => ({
                ...o.parseVariant(F),
                googleFontsVariantName: F,
                selector: o.createSelector(c, F, !0),
                isVariable: !0,
                file: d.files[F],
              }))
            : [],
          g = o.createMetadataSelector(l.family),
          p = n?.[g],
          h = [...w, ...m],
          f = h.filter(v),
          b = o.createMetadataSelector(c),
          W = a[b];
        for (let F of h) {
          let { weight: x, style: K, selector: tt, googleFontsVariantName: et } = F,
            ot = v(F) ? L(F, f) : void 0,
            {
              variantBold: Dt,
              variantItalic: Ot,
              variantBoldItalic: Mt,
              variantVariable: $t,
              variantVariableItalic: Gt,
            } = ot ?? {},
            mt = {
              family: u,
              variant: et,
              selector: tt,
              selectorBold: Dt?.selector,
              selectorBoldItalic: Mt?.selector,
              selectorItalic: Ot?.selector,
              selectorVariable: $t?.selector,
              selectorVariableItalic: Gt?.selector,
              weight: x,
              style: K,
              category: ie(l.category),
              file: F.file?.replace("http://", "https://"),
              variationAxes: F.isVariable ? p : void 0,
              hasOpenTypeFeatures: W,
              cssFamilyName: T(u.name, F.isVariable),
            };
          (u.fonts.push(mt), r.push(mt));
        }
      }
      return r;
    }
    async getOpenTypeFeatures(t) {
      let e = await B("google"),
        n = o.createMetadataSelector(t.family.name);
      return e[n];
    }
  };
function ie(o) {
  let t = {
    serif: "serif",
    "sans-serif": "sans-serif",
    display: "display",
    handwriting: "handwriting",
    monospace: "monospace",
  };
  if (o) return t[o];
}
function It(o, t) {
  return o.reduce((e, n) => ((e[t(n)] = n), e), {});
}
var lt = {
  "FR;Inter": [
    { tag: "opsz", minValue: 14, maxValue: 32, defaultValue: 14, name: "Optical size" },
    { tag: "wght", minValue: 100, maxValue: 900, defaultValue: 400, name: "Weight" },
  ],
};
function Q(o) {
  try {
    if (o === "framer") return Lt(lt) ? lt : void 0;
    {
      let t = (async () => {
        switch (o) {
          case "google":
            return (await import("https://app.framerstatic.com/google-DCCPZPI2.mjs")).default;
          case "fontshare":
            return (await import("https://app.framerstatic.com/fontshare-5JYJIQL5.mjs")).default;
          default:
            E(o);
        }
      })();
      return Lt(t) ? t : void 0;
    }
  } catch (t) {
    console.error(t);
    return;
  }
}
function Lt(o) {
  return nt(o) && Object.values(o).every(ce);
}
function le(o) {
  return nt(o) && ft(o.tag);
}
function ce(o) {
  return Array.isArray(o) && o.every(le);
}
var Y = class extends Map {
  _hash = 0;
  get hash() {
    return this._hash;
  }
  set(t, e) {
    return (this._hash++, super.set(t, e));
  }
  delete(t) {
    return (this._hash++, super.delete(t));
  }
  clear() {
    return (this._hash++, super.clear());
  }
};
var Bt = `${A().api}/web/built-in-fonts`,
  ue = typeof fetch < "u" ? fetch : () => Promise.reject("fetch is not available");
async function Ct() {
  let o = await ue(Bt, S(Bt, void 0));
  if (!o.ok)
    throw new Error(`Cannot fetch built-in fonts: fetch returned ${o.status} ${o.statusText}`);
  return (await o.json()).assets;
}
var Pt = `${A().api}/web/fontshare/fonts?omit_variable_styles=true`,
  me = typeof fetch < "u" ? fetch : () => Promise.reject("fetch is not available");
async function Wt() {
  let o = await me(Pt, S(Pt, void 0));
  if (!o.ok)
    throw new Error(`Cannot fetch fontshare fonts: fetch returned ${o.status} ${o.statusText}`);
  return (await o.json()).fonts;
}
var ct = `${A().api}/web/google-fonts`,
  Rt = typeof fetch < "u" ? fetch : () => Promise.reject("fetch is not available");
async function kt() {
  let [o, t] = await Promise.all([Fe(), fe()]);
  return { staticFonts: o, variableFonts: t };
}
async function Fe() {
  let o = await Rt(ct, S(ct, void 0));
  if (!o.ok)
    throw new Error(`Cannot fetch google fonts: fetch returned ${o.status} ${o.statusText}`);
  return (await o.json()).items;
}
async function fe() {
  let o = new URL(ct);
  (o.searchParams.append("capability", "VF"), o.searchParams.append("capability", "WOFF2"));
  let t = await Rt(o, S(o, void 0));
  if (!t.ok)
    throw new Error(`Cannot fetch variable fonts: fetch returned ${t.status} ${t.statusText}`);
  return (await t.json()).items;
}
function Z(o, t) {
  return { family: o.cssFamilyName, url: t, weight: o.weight, style: o.style };
}
function ye({ family: o, url: t, weight: e, style: n }) {
  return `${o}-${n}-${e}-${t}`;
}
var ut = class {
    bySelector = new Y();
    loadedSelectorsByDocument = new WeakMap();
    documents = new Set();
    getGoogleFontsListPromise;
    getFontshareFontsListPromise;
    getBuiltInFontsListPromise;
    customFontsImportPromise = new Promise((t) => {
      this.resolveCustomFontsImportPromise = t;
    });
    constructor() {
      ((this.local = new pt()),
        (this.google = new j()),
        (this.fontshare = new $()),
        (this.framer = new G()),
        (this.custom = new z()),
        (this.builtIn = new O()));
      for (let t of this.local.importFonts()) this.addFont(t);
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
    addFont(t) {
      if ((this.bySelector.set(t.selector, t), t.alternativeSelectors))
        for (let e of Object.keys(t.alternativeSelectors)) this.bySelector.set(e, t);
    }
    bySelectorValuesCache;
    getAvailableFonts() {
      if (!this.bySelectorValuesCache || this.bySelectorValuesCache.hash !== this.bySelector.hash) {
        let t = new Map();
        for (let e of this.bySelector.values()) t.set(e, !0);
        this.bySelectorValuesCache = { result: Array.from(t.keys()), hash: this.bySelector.hash };
      }
      return this.bySelectorValuesCache.result;
    }
    async importGoogleFonts() {
      return (
        this.getGoogleFontsListPromise ||
          (this.getGoogleFontsListPromise = Promise.resolve().then(async () => {
            let { staticFonts: t, variableFonts: e } = await kt(),
              n = await Q("google");
            for (let a of await this.google.importFonts(t, e, n)) this.addFont(a);
            return { staticFonts: t, variableFonts: e };
          })),
        this.getGoogleFontsListPromise
      );
    }
    async importFontshareFonts() {
      if (!this.getFontshareFontsListPromise) {
        this.getFontshareFontsListPromise = Wt();
        let t = await this.getFontshareFontsListPromise,
          e = await Q("fontshare");
        for (let n of await this.fontshare.importFonts(t, e)) this.addFont(n);
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
        this.getBuiltInFontsListPromise = Ct();
        let t = await this.getBuiltInFontsListPromise;
        for (let e of await this.builtIn.importFonts(t)) this.addFont(e);
      }
      return this.getBuiltInFontsListPromise;
    }
    importFramerFonts(t) {
      let e = Q("framer");
      this.framer.importFonts(t, e).forEach((n) => {
        this.addFont(n);
      });
    }
    importCustomFonts(t) {
      let e = new Map();
      this.bySelector.forEach((a, r) => {
        if (!X(r)) return;
        let s = this.getFontBySelector(r);
        (s && e.set(r, s), this.bySelector.delete(r));
      });
      for (let a of this.custom.importFonts(t)) this.addFont(a);
      let n = new Map();
      for (let [a, r] of e) {
        if (!r.file || this.getFontBySelector(a)?.file === r.file) continue;
        let s = Z(r, r.file);
        n.set(ye(s), s);
      }
      for (let a of n.values()) this.removeFontFromDocuments(a);
      this.resolveCustomFontsImportPromise();
    }
    getCustomFontsImportPromise() {
      return this.customFontsImportPromise;
    }
    trackDocument(t) {
      for (let e of this.documents) if (e.deref() === t) return;
      this.documents.add(new WeakRef(t));
    }
    removeFontFromDocuments(t) {
      for (let e of this.documents) {
        let n = e.deref();
        if (!n) {
          this.documents.delete(e);
          continue;
        }
        rt(t, n);
      }
    }
    getCustomFontDebugFamilies() {
      return this.custom.getDebugFamilies();
    }
    getFontFamily(t) {
      return this[t.source].getFontFamilyByName(t.name);
    }
    getFontBySelector(t) {
      if (!t) return;
      let e;
      if (((e = this.bySelector.get(t)), !!e))
        return e.alternativeSelectors && t in e.alternativeSelectors
          ? { ...e, ...e.alternativeSelectors[t] }
          : e;
    }
    getDraftPropertiesBySelector(t) {
      let e = this.getFontBySelector(t);
      if (e)
        return {
          style: e.style,
          weight: e.weight,
          variant: e.variant,
          cssFamilyName: e.cssFamilyName,
          source: e.family.source,
          category: e.category,
        };
      let n = this.google.parseSelector(t);
      if (n) {
        let i = j.parseVariant(n.variant);
        if (v(i))
          return {
            style: i.style,
            weight: i.weight,
            variant: n.variant,
            cssFamilyName: U(n, "google"),
            source: "google",
            category: void 0,
          };
      }
      let a = this.fontshare.parseSelector(t);
      if (a) {
        let i = $.parseVariant(a.variant);
        if (v(i))
          return {
            style: i.style,
            weight: i.weight,
            variant: a.variant,
            cssFamilyName: U(a, "fontshare"),
            source: "fontshare",
            category: void 0,
          };
      }
      let r = this.builtIn.parseSelector(t);
      if (r) {
        let i = O.parseVariant(r.variant);
        if (v(i))
          return {
            style: i.style,
            weight: i.weight,
            variant: r.variant,
            cssFamilyName: U(r, "builtIn"),
            source: "builtIn",
            category: void 0,
          };
      }
      let s = G.getDraftFontPropertiesBySelector(t);
      return s || null;
    }
    isSelectorLoaded(t, e = document) {
      let n = this.getFontBySelector(t);
      return n ? this.isLoadedFontAvailableInDocument(t, n, e) : !1;
    }
    isLoadedFontAvailableInDocument(t, e, n) {
      let a = e.family.source;
      return a === "local"
        ? !0
        : a === "framer" && !M(e)
          ? (this.loadedSelectorsByDocument.get(n)?.has(t) ?? !1)
          : e.file
            ? dt(Z(e, e.file), n)
            : !1;
    }
    markSelectorLoaded(t, e) {
      let n = this.loadedSelectorsByDocument.get(e);
      (n || ((n = new Set()), this.loadedSelectorsByDocument.set(e, n)), n.add(t));
    }
    async loadFont(t, e) {
      let n = this.getFontBySelector(t);
      if (!n) return 2;
      if (this.isLoadedFontAvailableInDocument(t, n, e)) return 0;
      this.trackDocument(e);
      let a = n.family.source,
        r = M(n);
      switch (a) {
        case "local":
          return 0;
        case "framer":
          return (
            Ft() || (await gt(n.family.name, n.style, n.weight, e)),
            r
              ? n.file
                ? (await at(Z(n, n.file), e), 1)
                : Promise.reject(`Unable to load font: ${t}`)
              : (this.markSelectorLoaded(t, e), 1)
          );
        case "google":
        case "fontshare":
        case "builtIn":
        case "custom": {
          if (!n.file) return Promise.reject(`Unable to load font: ${t}`);
          let s = Z(n, n.file);
          return (await at(s, e), this.getFontBySelector(t)?.file !== s.url ? (rt(s, e), 2) : 1);
        }
        default:
          E(a);
      }
    }
    async loadFontsFromSelectors(t, e) {
      let n = [];
      (t.some((l) => l.startsWith(C)) &&
        n.push(
          this.importFontshareFonts().catch((l) => {
            R("Failed to load Fontshare fonts:", l);
          })
        ),
        t.some((l) => l.startsWith(P)) &&
          n.push(
            this.importGoogleFonts().catch((l) => {
              R("Failed to load Google fonts:", l);
            })
          ),
        t.some((l) => l.startsWith(D)) &&
          n.push(
            this.importBuiltInFonts().catch((l) => {
              R("Failed to load built-in fonts:", l);
            })
          ),
        t.some(X) &&
          n.push(
            this.customFontsImportPromise.catch((l) => {
              R("Failed to load custom fonts:", l);
            })
          ),
        n.length > 0 && (await Promise.all(n)));
      let c = [];
      for (let l of t) c.push(this.loadFont(l, e));
      return Promise.allSettled(c);
    }
    async loadFonts(t, e = document) {
      return {
        newlyLoadedFontCount: (await this.loadFontsFromSelectors(t, e)).filter(
          (r) => r.status === "fulfilled" && r.value === 1
        ).length,
      };
    }
    async loadMissingFonts(t, e) {
      let n = t.filter((r) => !this.isSelectorLoaded(r));
      if (n.length === 0) return;
      (await this.loadWebFontsFromSelectors(n),
        n.every((r) => this.isSelectorLoaded(r)) && e && e());
    }
    async loadWebFontsFromSelectors(t) {
      return this.loadFontsFromSelectors(t, document);
    }
    get defaultFont() {
      let t = this.getFontBySelector("Inter");
      return (V(t, "Can\u2019t find Inter font"), t);
    }
    testing = { addFont: this.addFont.bind(this) };
  },
  Bo = new ut();
function Po(o) {
  return Object.keys(o);
}
export { M as a, X as b, Xt as c, $ as d, j as e, ut as f, Bo as g, Po as h };
//# sourceMappingURL=chunk-NXOC42YT.mjs.map
