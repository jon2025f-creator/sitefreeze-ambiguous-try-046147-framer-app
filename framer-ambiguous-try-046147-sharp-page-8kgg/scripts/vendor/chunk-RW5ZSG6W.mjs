import { a as xi, b as o } from "chunk-3JXINZRV.mjs";
import { Cd as Ti } from "chunk-7GKAI4PF.mjs";
import { k as Rr } from "chunk-JUEYLPZJ.mjs";
import { c as Bn } from "chunk-4JY5UMT2.mjs";
import { c as Jo, d as Em, e as _i } from "chunk-WLHSDIGQ.mjs";
var mu = Jo((x0, pu) => {
  "use strict";
  var ms = Object.defineProperty,
    $h = Object.getOwnPropertyDescriptor,
    Fh = Object.getOwnPropertyNames,
    Uh = Object.prototype.hasOwnProperty,
    Vh = (e, t) => {
      for (var r in t) ms(e, r, { get: t[r], enumerable: !0 });
    },
    Lh = (e, t, r, a) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let n of Fh(t))
          !Uh.call(e, n) &&
            n !== r &&
            ms(e, n, { get: () => t[n], enumerable: !(a = $h(t, n)) || a.enumerable });
      return e;
    },
    zh = (e) => Lh(ms({}, "__esModule", { value: !0 }), e),
    du = {};
  Vh(du, { SYMBOL_FOR_REQ_CONTEXT: () => cu, getContext: () => Bh });
  pu.exports = zh(du);
  var cu = Symbol.for("@vercel/request-context");
  function Bh() {
    return globalThis[cu]?.get?.() ?? {};
  }
});
var gu = Jo((I0, hu) => {
  "use strict";
  var gs = Object.defineProperty,
    Jh = Object.getOwnPropertyDescriptor,
    Gh = Object.getOwnPropertyNames,
    Hh = Object.prototype.hasOwnProperty,
    Wh = (e, t) => {
      for (var r in t) gs(e, r, { get: t[r], enumerable: !0 });
    },
    Zh = (e, t, r, a) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let n of Gh(t))
          !Hh.call(e, n) &&
            n !== r &&
            gs(e, n, { get: () => t[n], enumerable: !(a = Jh(t, n)) || a.enumerable });
      return e;
    },
    Kh = (e) => Zh(gs({}, "__esModule", { value: !0 }), e),
    fu = {};
  Wh(fu, { AccessTokenMissingError: () => fs, RefreshAccessTokenFailedError: () => hs });
  hu.exports = Kh(fu);
  var fs = class extends Error {
      constructor() {
        (super("No authentication found. Please log in with the Vercel CLI (vercel login)."),
          (this.name = "AccessTokenMissingError"));
      }
    },
    hs = class extends Error {
      constructor(t) {
        (super("Failed to refresh authentication token.", { cause: t }),
          (this.name = "RefreshAccessTokenFailedError"));
      }
    };
});
var ys = Jo((S0, bu) => {
  "use strict";
  var vs = Object.defineProperty,
    Yh = Object.getOwnPropertyDescriptor,
    Xh = Object.getOwnPropertyNames,
    Qh = Object.prototype.hasOwnProperty,
    eg = (e, t) => {
      for (var r in t) vs(e, r, { get: t[r], enumerable: !0 });
    },
    tg = (e, t, r, a) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let n of Xh(t))
          !Qh.call(e, n) &&
            n !== r &&
            vs(e, n, { get: () => t[n], enumerable: !(a = Yh(t, n)) || a.enumerable });
      return e;
    },
    rg = (e) => tg(vs({}, "__esModule", { value: !0 }), e),
    yu = {};
  eg(yu, {
    AccessTokenMissingError: () => vu.AccessTokenMissingError,
    RefreshAccessTokenFailedError: () => vu.RefreshAccessTokenFailedError,
    getContext: () => ag.getContext,
    getVercelOidcToken: () => ng,
    getVercelOidcTokenSync: () => og,
    getVercelToken: () => sg,
  });
  bu.exports = rg(yu);
  var ag = mu(),
    vu = gu();
  async function ng() {
    return "";
  }
  function og() {
    return "";
  }
  async function sg() {
    throw new Error("getVercelToken is not supported in browser environments");
  }
});
var Xi = "vercel.ai.error",
  Mm = Symbol.for(Xi),
  Ii,
  Si,
  S = class Qi extends ((Si = Error), (Ii = Mm), Si) {
    constructor({ name: t, message: r, cause: a }) {
      (super(r), (this[Ii] = !0), (this.name = t), (this.cause = a));
    }
    static isInstance(t) {
      return Qi.hasMarker(t, Xi);
    }
    static hasMarker(t, r) {
      let a = Symbol.for(r);
      return t != null && typeof t == "object" && a in t && typeof t[a] == "boolean" && t[a] === !0;
    }
  },
  el = "AI_APICallError",
  tl = `vercel.ai.error.${el}`,
  km = Symbol.for(tl),
  Ei,
  Mi,
  ue = class extends ((Mi = S), (Ei = km), Mi) {
    constructor({
      message: e,
      url: t,
      requestBodyValues: r,
      statusCode: a,
      responseHeaders: n,
      responseBody: s,
      cause: i,
      isRetryable: l = a != null && (a === 408 || a === 409 || a === 429 || a >= 500),
      data: d,
    }) {
      (super({ name: el, message: e, cause: i }),
        (this[Ei] = !0),
        (this.url = t),
        (this.requestBodyValues = r),
        (this.statusCode = a),
        (this.responseHeaders = n),
        (this.responseBody = s),
        (this.isRetryable = l),
        (this.data = d));
    }
    static isInstance(e) {
      return S.hasMarker(e, tl);
    }
  },
  rl = "AI_EmptyResponseBodyError",
  al = `vercel.ai.error.${rl}`,
  Rm = Symbol.for(al),
  ki,
  Ri,
  Gn = class extends ((Ri = S), (ki = Rm), Ri) {
    constructor({ message: e = "Empty response body" } = {}) {
      (super({ name: rl, message: e }), (this[ki] = !0));
    }
    static isInstance(e) {
      return S.hasMarker(e, al);
    }
  };
function qt(e) {
  return e == null
    ? "unknown error"
    : typeof e == "string"
      ? e
      : e instanceof Error
        ? e.message
        : JSON.stringify(e);
}
var nl = "AI_InvalidArgumentError",
  ol = `vercel.ai.error.${nl}`,
  Cm = Symbol.for(ol),
  Ci,
  Ai,
  ua = class extends ((Ai = S), (Ci = Cm), Ai) {
    constructor({ message: e, cause: t, argument: r }) {
      (super({ name: nl, message: e, cause: t }), (this[Ci] = !0), (this.argument = r));
    }
    static isInstance(e) {
      return S.hasMarker(e, ol);
    }
  },
  sl = "AI_InvalidPromptError",
  il = `vercel.ai.error.${sl}`,
  Am = Symbol.for(il),
  Oi,
  Ni,
  rr = class extends ((Ni = S), (Oi = Am), Ni) {
    constructor({ prompt: e, message: t, cause: r }) {
      (super({ name: sl, message: `Invalid prompt: ${t}`, cause: r }),
        (this[Oi] = !0),
        (this.prompt = e));
    }
    static isInstance(e) {
      return S.hasMarker(e, il);
    }
  },
  ll = "AI_InvalidResponseDataError",
  ul = `vercel.ai.error.${ll}`,
  Om = Symbol.for(ul),
  Pi,
  ji,
  mr = class extends ((ji = S), (Pi = Om), ji) {
    constructor({ data: e, message: t = `Invalid response data: ${JSON.stringify(e)}.` }) {
      (super({ name: ll, message: t }), (this[Pi] = !0), (this.data = e));
    }
    static isInstance(e) {
      return S.hasMarker(e, ul);
    }
  },
  dl = "AI_JSONParseError",
  cl = `vercel.ai.error.${dl}`,
  Nm = Symbol.for(cl),
  Di,
  qi,
  fr = class extends ((qi = S), (Di = Nm), qi) {
    constructor({ text: e, cause: t }) {
      (super({
        name: dl,
        message: `JSON parsing failed: Text: ${e}.
Error message: ${qt(t)}`,
        cause: t,
      }),
        (this[Di] = !0),
        (this.text = e));
    }
    static isInstance(e) {
      return S.hasMarker(e, cl);
    }
  },
  pl = "AI_LoadAPIKeyError",
  ml = `vercel.ai.error.${pl}`,
  Pm = Symbol.for(ml),
  $i,
  Fi,
  zr = class extends ((Fi = S), ($i = Pm), Fi) {
    constructor({ message: e }) {
      (super({ name: pl, message: e }), (this[$i] = !0));
    }
    static isInstance(e) {
      return S.hasMarker(e, ml);
    }
  },
  fl = "AI_LoadSettingError",
  hl = `vercel.ai.error.${fl}`,
  jm = Symbol.for(hl),
  Ui,
  Vi,
  gl = class extends ((Vi = S), (Ui = jm), Vi) {
    constructor({ message: e }) {
      (super({ name: fl, message: e }), (this[Ui] = !0));
    }
    static isInstance(e) {
      return S.hasMarker(e, hl);
    }
  },
  vl = "AI_NoContentGeneratedError",
  yl = `vercel.ai.error.${vl}`,
  Dm = Symbol.for(yl),
  Li,
  zi,
  bl = class extends ((zi = S), (Li = Dm), zi) {
    constructor({ message: e = "No content generated." } = {}) {
      (super({ name: vl, message: e }), (this[Li] = !0));
    }
    static isInstance(e) {
      return S.hasMarker(e, yl);
    }
  },
  wl = "AI_NoSuchModelError",
  _l = `vercel.ai.error.${wl}`,
  qm = Symbol.for(_l),
  Bi,
  Ji,
  Je = class extends ((Ji = S), (Bi = qm), Ji) {
    constructor({
      errorName: e = wl,
      modelId: t,
      modelType: r,
      message: a = `No such ${r}: ${t}`,
    }) {
      (super({ name: e, message: a }), (this[Bi] = !0), (this.modelId = t), (this.modelType = r));
    }
    static isInstance(e) {
      return S.hasMarker(e, _l);
    }
  },
  Tl = "AI_TooManyEmbeddingValuesForCallError",
  xl = `vercel.ai.error.${Tl}`,
  $m = Symbol.for(xl),
  Gi,
  Hi,
  Il = class extends ((Hi = S), (Gi = $m), Hi) {
    constructor(e) {
      (super({
        name: Tl,
        message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`,
      }),
        (this[Gi] = !0),
        (this.provider = e.provider),
        (this.modelId = e.modelId),
        (this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall),
        (this.values = e.values));
    }
    static isInstance(e) {
      return S.hasMarker(e, xl);
    }
  },
  Sl = "AI_TypeValidationError",
  El = `vercel.ai.error.${Sl}`,
  Fm = Symbol.for(El),
  Wi,
  Zi,
  Ae = class Go extends ((Zi = S), (Wi = Fm), Zi) {
    constructor({ value: t, cause: r, context: a }) {
      let n = "Type validation failed";
      if ((a?.field && (n += ` for ${a.field}`), a?.entityName || a?.entityId)) {
        n += " (";
        let s = [];
        (a.entityName && s.push(a.entityName),
          a.entityId && s.push(`id: "${a.entityId}"`),
          (n += s.join(", ")),
          (n += ")"));
      }
      (super({
        name: Sl,
        message: `${n}: Value: ${JSON.stringify(t)}.
Error message: ${qt(r)}`,
        cause: r,
      }),
        (this[Wi] = !0),
        (this.value = t),
        (this.context = a));
    }
    static isInstance(t) {
      return S.hasMarker(t, El);
    }
    static wrap({ value: t, cause: r, context: a }) {
      var n, s, i;
      return Go.isInstance(r) &&
        r.value === t &&
        ((n = r.context) == null ? void 0 : n.field) === a?.field &&
        ((s = r.context) == null ? void 0 : s.entityName) === a?.entityName &&
        ((i = r.context) == null ? void 0 : i.entityId) === a?.entityId
        ? r
        : new Go({ value: t, cause: r, context: a });
    }
  },
  Ml = "AI_UnsupportedFunctionalityError",
  kl = `vercel.ai.error.${Ml}`,
  Um = Symbol.for(kl),
  Ki,
  Yi,
  Cr = class extends ((Yi = S), (Ki = Um), Yi) {
    constructor({ functionality: e, message: t = `'${e}' functionality not supported.` }) {
      (super({ name: Ml, message: t }), (this[Ki] = !0), (this.functionality = e));
    }
    static isInstance(e) {
      return S.hasMarker(e, kl);
    }
  };
function Jn(e) {
  return e === null || typeof e == "string" || typeof e == "number" || typeof e == "boolean"
    ? !0
    : Array.isArray(e)
      ? e.every(Jn)
      : typeof e == "object"
        ? Object.entries(e).every(([t, r]) => typeof t == "string" && (r === void 0 || Jn(r)))
        : !1;
}
function Ho(e) {
  return Array.isArray(e) && e.every(Jn);
}
function Xa(e) {
  return (
    e != null &&
    typeof e == "object" &&
    Object.entries(e).every(([t, r]) => typeof t == "string" && (r === void 0 || Jn(r)))
  );
}
var pe;
(function (e) {
  e.assertEqual = (n) => {};
  function t(n) {}
  e.assertIs = t;
  function r(n) {
    throw new Error();
  }
  ((e.assertNever = r),
    (e.arrayToEnum = (n) => {
      let s = {};
      for (let i of n) s[i] = i;
      return s;
    }),
    (e.getValidEnumValues = (n) => {
      let s = e.objectKeys(n).filter((l) => typeof n[n[l]] != "number"),
        i = {};
      for (let l of s) i[l] = n[l];
      return e.objectValues(i);
    }),
    (e.objectValues = (n) =>
      e.objectKeys(n).map(function (s) {
        return n[s];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (n) => Object.keys(n)
        : (n) => {
            let s = [];
            for (let i in n) Object.prototype.hasOwnProperty.call(n, i) && s.push(i);
            return s;
          }),
    (e.find = (n, s) => {
      for (let i of n) if (s(i)) return i;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (n) => Number.isInteger(n)
        : (n) => typeof n == "number" && Number.isFinite(n) && Math.floor(n) === n));
  function a(n, s = " | ") {
    return n.map((i) => (typeof i == "string" ? `'${i}'` : i)).join(s);
  }
  ((e.joinValues = a),
    (e.jsonStringifyReplacer = (n, s) => (typeof s == "bigint" ? s.toString() : s)));
})(pe || (pe = {}));
var Rl;
(function (e) {
  e.mergeShapes = (t, r) => ({ ...t, ...r });
})(Rl || (Rl = {}));
var j = pe.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  hr = (e) => {
    switch (typeof e) {
      case "undefined":
        return j.undefined;
      case "string":
        return j.string;
      case "number":
        return Number.isNaN(e) ? j.nan : j.number;
      case "boolean":
        return j.boolean;
      case "function":
        return j.function;
      case "bigint":
        return j.bigint;
      case "symbol":
        return j.symbol;
      case "object":
        return Array.isArray(e)
          ? j.array
          : e === null
            ? j.null
            : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function"
              ? j.promise
              : typeof Map < "u" && e instanceof Map
                ? j.map
                : typeof Set < "u" && e instanceof Set
                  ? j.set
                  : typeof Date < "u" && e instanceof Date
                    ? j.date
                    : j.object;
      default:
        return j.unknown;
    }
  };
var C = pe.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite",
]);
var Mt = class e extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    (super(),
      (this.issues = []),
      (this.addIssue = (a) => {
        this.issues = [...this.issues, a];
      }),
      (this.addIssues = (a = []) => {
        this.issues = [...this.issues, ...a];
      }));
    let r = new.target.prototype;
    (Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : (this.__proto__ = r),
      (this.name = "ZodError"),
      (this.issues = t));
  }
  format(t) {
    let r =
        t ||
        function (s) {
          return s.message;
        },
      a = { _errors: [] },
      n = (s) => {
        for (let i of s.issues)
          if (i.code === "invalid_union") i.unionErrors.map(n);
          else if (i.code === "invalid_return_type") n(i.returnTypeError);
          else if (i.code === "invalid_arguments") n(i.argumentsError);
          else if (i.path.length === 0) a._errors.push(r(i));
          else {
            let l = a,
              d = 0;
            for (; d < i.path.length;) {
              let c = i.path[d];
              (d === i.path.length - 1
                ? ((l[c] = l[c] || { _errors: [] }), l[c]._errors.push(r(i)))
                : (l[c] = l[c] || { _errors: [] }),
                (l = l[c]),
                d++);
            }
          }
      };
    return (n(this), a);
  }
  static assert(t) {
    if (!(t instanceof e)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, pe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    let r = Object.create(null),
      a = [];
    for (let n of this.issues)
      if (n.path.length > 0) {
        let s = n.path[0];
        ((r[s] = r[s] || []), r[s].push(t(n)));
      } else a.push(t(n));
    return { formErrors: a, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
};
Mt.create = (e) => new Mt(e);
var Vm = (e, t) => {
    let r;
    switch (e.code) {
      case C.invalid_type:
        e.received === j.undefined
          ? (r = "Required")
          : (r = `Expected ${e.expected}, received ${e.received}`);
        break;
      case C.invalid_literal:
        r = `Invalid literal value, expected ${JSON.stringify(e.expected, pe.jsonStringifyReplacer)}`;
        break;
      case C.unrecognized_keys:
        r = `Unrecognized key(s) in object: ${pe.joinValues(e.keys, ", ")}`;
        break;
      case C.invalid_union:
        r = "Invalid input";
        break;
      case C.invalid_union_discriminator:
        r = `Invalid discriminator value. Expected ${pe.joinValues(e.options)}`;
        break;
      case C.invalid_enum_value:
        r = `Invalid enum value. Expected ${pe.joinValues(e.options)}, received '${e.received}'`;
        break;
      case C.invalid_arguments:
        r = "Invalid function arguments";
        break;
      case C.invalid_return_type:
        r = "Invalid function return type";
        break;
      case C.invalid_date:
        r = "Invalid date";
        break;
      case C.invalid_string:
        typeof e.validation == "object"
          ? "includes" in e.validation
            ? ((r = `Invalid input: must include "${e.validation.includes}"`),
              typeof e.validation.position == "number" &&
                (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
            : "startsWith" in e.validation
              ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
              : "endsWith" in e.validation
                ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
                : pe.assertNever(e.validation)
          : e.validation !== "regex"
            ? (r = `Invalid ${e.validation}`)
            : (r = "Invalid");
        break;
      case C.too_small:
        e.type === "array"
          ? (r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`)
          : e.type === "string"
            ? (r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`)
            : e.type === "number"
              ? (r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`)
              : e.type === "bigint"
                ? (r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`)
                : e.type === "date"
                  ? (r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}`)
                  : (r = "Invalid input");
        break;
      case C.too_big:
        e.type === "array"
          ? (r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`)
          : e.type === "string"
            ? (r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`)
            : e.type === "number"
              ? (r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
              : e.type === "bigint"
                ? (r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`)
                : e.type === "date"
                  ? (r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}`)
                  : (r = "Invalid input");
        break;
      case C.custom:
        r = "Invalid input";
        break;
      case C.invalid_intersection_types:
        r = "Intersection results could not be merged";
        break;
      case C.not_multiple_of:
        r = `Number must be a multiple of ${e.multipleOf}`;
        break;
      case C.not_finite:
        r = "Number must be finite";
        break;
      default:
        ((r = t.defaultError), pe.assertNever(e));
    }
    return { message: r };
  },
  Ar = Vm;
var Lm = Ar;
function Qa() {
  return Lm;
}
var Hn = (e) => {
  let { data: t, path: r, errorMaps: a, issueData: n } = e,
    s = [...r, ...(n.path || [])],
    i = { ...n, path: s };
  if (n.message !== void 0) return { ...n, path: s, message: n.message };
  let l = "",
    d = a
      .filter((c) => !!c)
      .slice()
      .reverse();
  for (let c of d) l = c(i, { data: t, defaultError: l }).message;
  return { ...n, path: s, message: l };
};
function P(e, t) {
  let r = Qa(),
    a = Hn({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, r, r === Ar ? void 0 : Ar].filter(
        (n) => !!n
      ),
    });
  e.common.issues.push(a);
}
var at = class e {
    constructor() {
      this.value = "valid";
    }
    dirty() {
      this.value === "valid" && (this.value = "dirty");
    }
    abort() {
      this.value !== "aborted" && (this.value = "aborted");
    }
    static mergeArray(t, r) {
      let a = [];
      for (let n of r) {
        if (n.status === "aborted") return Y;
        (n.status === "dirty" && t.dirty(), a.push(n.value));
      }
      return { status: t.value, value: a };
    }
    static async mergeObjectAsync(t, r) {
      let a = [];
      for (let n of r) {
        let s = await n.key,
          i = await n.value;
        a.push({ key: s, value: i });
      }
      return e.mergeObjectSync(t, a);
    }
    static mergeObjectSync(t, r) {
      let a = {};
      for (let n of r) {
        let { key: s, value: i } = n;
        if (s.status === "aborted" || i.status === "aborted") return Y;
        (s.status === "dirty" && t.dirty(),
          i.status === "dirty" && t.dirty(),
          s.value !== "__proto__" &&
            (typeof i.value < "u" || n.alwaysSet) &&
            (a[s.value] = i.value));
      }
      return { status: t.value, value: a };
    }
  },
  Y = Object.freeze({ status: "aborted" }),
  da = (e) => ({ status: "dirty", value: e }),
  ft = (e) => ({ status: "valid", value: e }),
  Wo = (e) => e.status === "aborted",
  Zo = (e) => e.status === "dirty",
  Br = (e) => e.status === "valid",
  en = (e) => typeof Promise < "u" && e instanceof Promise;
var L;
(function (e) {
  ((e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) => (typeof t == "string" ? t : t?.message)));
})(L || (L = {}));
var $t = class {
    constructor(t, r, a, n) {
      ((this._cachedPath = []),
        (this.parent = t),
        (this.data = r),
        (this._path = a),
        (this._key = n));
    }
    get path() {
      return (
        this._cachedPath.length ||
          (Array.isArray(this._key)
            ? this._cachedPath.push(...this._path, ...this._key)
            : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
      );
    }
  },
  Cl = (e, t) => {
    if (Br(t)) return { success: !0, data: t.value };
    if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let r = new Mt(e.common.issues);
        return ((this._error = r), this._error);
      },
    };
  };
function te(e) {
  if (!e) return {};
  let { errorMap: t, invalid_type_error: r, required_error: a, description: n } = e;
  if (t && (r || a))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: n }
    : {
        errorMap: (i, l) => {
          let { message: d } = e;
          return i.code === "invalid_enum_value"
            ? { message: d ?? l.defaultError }
            : typeof l.data > "u"
              ? { message: d ?? a ?? l.defaultError }
              : i.code !== "invalid_type"
                ? { message: l.defaultError }
                : { message: d ?? r ?? l.defaultError };
        },
        description: n,
      };
}
var oe = class {
    get description() {
      return this._def.description;
    }
    _getType(t) {
      return hr(t.data);
    }
    _getOrReturnCtx(t, r) {
      return (
        r || {
          common: t.parent.common,
          data: t.data,
          parsedType: hr(t.data),
          schemaErrorMap: this._def.errorMap,
          path: t.path,
          parent: t.parent,
        }
      );
    }
    _processInputParams(t) {
      return {
        status: new at(),
        ctx: {
          common: t.parent.common,
          data: t.data,
          parsedType: hr(t.data),
          schemaErrorMap: this._def.errorMap,
          path: t.path,
          parent: t.parent,
        },
      };
    }
    _parseSync(t) {
      let r = this._parse(t);
      if (en(r)) throw new Error("Synchronous parse encountered promise.");
      return r;
    }
    _parseAsync(t) {
      let r = this._parse(t);
      return Promise.resolve(r);
    }
    parse(t, r) {
      let a = this.safeParse(t, r);
      if (a.success) return a.data;
      throw a.error;
    }
    safeParse(t, r) {
      let a = {
          common: { issues: [], async: r?.async ?? !1, contextualErrorMap: r?.errorMap },
          path: r?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: t,
          parsedType: hr(t),
        },
        n = this._parseSync({ data: t, path: a.path, parent: a });
      return Cl(a, n);
    }
    "~validate"(t) {
      let r = {
        common: { issues: [], async: !!this["~standard"].async },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: hr(t),
      };
      if (!this["~standard"].async)
        try {
          let a = this._parseSync({ data: t, path: [], parent: r });
          return Br(a) ? { value: a.value } : { issues: r.common.issues };
        } catch (a) {
          (a?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0),
            (r.common = { issues: [], async: !0 }));
        }
      return this._parseAsync({ data: t, path: [], parent: r }).then((a) =>
        Br(a) ? { value: a.value } : { issues: r.common.issues }
      );
    }
    async parseAsync(t, r) {
      let a = await this.safeParseAsync(t, r);
      if (a.success) return a.data;
      throw a.error;
    }
    async safeParseAsync(t, r) {
      let a = {
          common: { issues: [], contextualErrorMap: r?.errorMap, async: !0 },
          path: r?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data: t,
          parsedType: hr(t),
        },
        n = this._parse({ data: t, path: a.path, parent: a }),
        s = await (en(n) ? n : Promise.resolve(n));
      return Cl(a, s);
    }
    refine(t, r) {
      let a = (n) =>
        typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(n) : r;
      return this._refinement((n, s) => {
        let i = t(n),
          l = () => s.addIssue({ code: C.custom, ...a(n) });
        return typeof Promise < "u" && i instanceof Promise
          ? i.then((d) => (d ? !0 : (l(), !1)))
          : i
            ? !0
            : (l(), !1);
      });
    }
    refinement(t, r) {
      return this._refinement((a, n) =>
        t(a) ? !0 : (n.addIssue(typeof r == "function" ? r(a, n) : r), !1)
      );
    }
    _refinement(t) {
      return new zt({
        schema: this,
        typeName: A.ZodEffects,
        effect: { type: "refinement", refinement: t },
      });
    }
    superRefine(t) {
      return this._refinement(t);
    }
    constructor(t) {
      ((this.spa = this.safeParseAsync),
        (this._def = t),
        (this.parse = this.parse.bind(this)),
        (this.safeParse = this.safeParse.bind(this)),
        (this.parseAsync = this.parseAsync.bind(this)),
        (this.safeParseAsync = this.safeParseAsync.bind(this)),
        (this.spa = this.spa.bind(this)),
        (this.refine = this.refine.bind(this)),
        (this.refinement = this.refinement.bind(this)),
        (this.superRefine = this.superRefine.bind(this)),
        (this.optional = this.optional.bind(this)),
        (this.nullable = this.nullable.bind(this)),
        (this.nullish = this.nullish.bind(this)),
        (this.array = this.array.bind(this)),
        (this.promise = this.promise.bind(this)),
        (this.or = this.or.bind(this)),
        (this.and = this.and.bind(this)),
        (this.transform = this.transform.bind(this)),
        (this.brand = this.brand.bind(this)),
        (this.default = this.default.bind(this)),
        (this.catch = this.catch.bind(this)),
        (this.describe = this.describe.bind(this)),
        (this.pipe = this.pipe.bind(this)),
        (this.readonly = this.readonly.bind(this)),
        (this.isNullable = this.isNullable.bind(this)),
        (this.isOptional = this.isOptional.bind(this)),
        (this["~standard"] = { version: 1, vendor: "zod", validate: (r) => this["~validate"](r) }));
    }
    optional() {
      return Lt.create(this, this._def);
    }
    nullable() {
      return yr.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return Nr.create(this);
    }
    promise() {
      return Jr.create(this, this._def);
    }
    or(t) {
      return ha.create([this, t], this._def);
    }
    and(t) {
      return ga.create(this, t, this._def);
    }
    transform(t) {
      return new zt({
        ...te(this._def),
        schema: this,
        typeName: A.ZodEffects,
        effect: { type: "transform", transform: t },
      });
    }
    default(t) {
      let r = typeof t == "function" ? t : () => t;
      return new _a({ ...te(this._def), innerType: this, defaultValue: r, typeName: A.ZodDefault });
    }
    brand() {
      return new Wn({ typeName: A.ZodBranded, type: this, ...te(this._def) });
    }
    catch(t) {
      let r = typeof t == "function" ? t : () => t;
      return new Ta({ ...te(this._def), innerType: this, catchValue: r, typeName: A.ZodCatch });
    }
    describe(t) {
      let r = this.constructor;
      return new r({ ...this._def, description: t });
    }
    pipe(t) {
      return Zn.create(this, t);
    }
    readonly() {
      return xa.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  zm = /^c[^\s-]{8,}$/i,
  Bm = /^[0-9a-z]+$/,
  Jm = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Gm = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Hm = /^[a-z0-9_-]{21}$/i,
  Wm = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Zm =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Km = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Ym = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
  Ko,
  Xm =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Qm =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  ef =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  tf =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  rf = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  af = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  Al =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  nf = new RegExp(`^${Al}$`);
function Ol(e) {
  let t = "[0-5]\\d";
  e.precision ? (t = `${t}\\.\\d{${e.precision}}`) : e.precision == null && (t = `${t}(\\.\\d+)?`);
  let r = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`;
}
function of(e) {
  return new RegExp(`^${Ol(e)}$`);
}
function sf(e) {
  let t = `${Al}T${Ol(e)}`,
    r = [];
  return (
    r.push(e.local ? "Z?" : "Z"),
    e.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${r.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function lf(e, t) {
  return !!(((t === "v4" || !t) && Xm.test(e)) || ((t === "v6" || !t) && ef.test(e)));
}
function uf(e, t) {
  if (!Wm.test(e)) return !1;
  try {
    let [r] = e.split(".");
    if (!r) return !1;
    let a = r
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(r.length + ((4 - (r.length % 4)) % 4), "="),
      n = JSON.parse(atob(a));
    return !(
      typeof n != "object" ||
      n === null ||
      ("typ" in n && n?.typ !== "JWT") ||
      !n.alg ||
      (t && n.alg !== t)
    );
  } catch {
    return !1;
  }
}
function df(e, t) {
  return !!(((t === "v4" || !t) && Qm.test(e)) || ((t === "v6" || !t) && tf.test(e)));
}
var pa = class e extends oe {
  _parse(t) {
    if ((this._def.coerce && (t.data = String(t.data)), this._getType(t) !== j.string)) {
      let s = this._getOrReturnCtx(t);
      return (P(s, { code: C.invalid_type, expected: j.string, received: s.parsedType }), Y);
    }
    let a = new at(),
      n;
    for (let s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value &&
          ((n = this._getOrReturnCtx(t, n)),
          P(n, {
            code: C.too_small,
            minimum: s.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === "max")
        t.data.length > s.value &&
          ((n = this._getOrReturnCtx(t, n)),
          P(n, {
            code: C.too_big,
            maximum: s.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === "length") {
        let i = t.data.length > s.value,
          l = t.data.length < s.value;
        (i || l) &&
          ((n = this._getOrReturnCtx(t, n)),
          i
            ? P(n, {
                code: C.too_big,
                maximum: s.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: s.message,
              })
            : l &&
              P(n, {
                code: C.too_small,
                minimum: s.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: s.message,
              }),
          a.dirty());
      } else if (s.kind === "email")
        Km.test(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          P(n, { validation: "email", code: C.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === "emoji")
        (Ko || (Ko = new RegExp(Ym, "u")),
          Ko.test(t.data) ||
            ((n = this._getOrReturnCtx(t, n)),
            P(n, { validation: "emoji", code: C.invalid_string, message: s.message }),
            a.dirty()));
      else if (s.kind === "uuid")
        Gm.test(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          P(n, { validation: "uuid", code: C.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === "nanoid")
        Hm.test(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          P(n, { validation: "nanoid", code: C.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === "cuid")
        zm.test(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          P(n, { validation: "cuid", code: C.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === "cuid2")
        Bm.test(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          P(n, { validation: "cuid2", code: C.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === "ulid")
        Jm.test(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          P(n, { validation: "ulid", code: C.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          ((n = this._getOrReturnCtx(t, n)),
            P(n, { validation: "url", code: C.invalid_string, message: s.message }),
            a.dirty());
        }
      else
        s.kind === "regex"
          ? ((s.regex.lastIndex = 0),
            s.regex.test(t.data) ||
              ((n = this._getOrReturnCtx(t, n)),
              P(n, { validation: "regex", code: C.invalid_string, message: s.message }),
              a.dirty()))
          : s.kind === "trim"
            ? (t.data = t.data.trim())
            : s.kind === "includes"
              ? t.data.includes(s.value, s.position) ||
                ((n = this._getOrReturnCtx(t, n)),
                P(n, {
                  code: C.invalid_string,
                  validation: { includes: s.value, position: s.position },
                  message: s.message,
                }),
                a.dirty())
              : s.kind === "toLowerCase"
                ? (t.data = t.data.toLowerCase())
                : s.kind === "toUpperCase"
                  ? (t.data = t.data.toUpperCase())
                  : s.kind === "startsWith"
                    ? t.data.startsWith(s.value) ||
                      ((n = this._getOrReturnCtx(t, n)),
                      P(n, {
                        code: C.invalid_string,
                        validation: { startsWith: s.value },
                        message: s.message,
                      }),
                      a.dirty())
                    : s.kind === "endsWith"
                      ? t.data.endsWith(s.value) ||
                        ((n = this._getOrReturnCtx(t, n)),
                        P(n, {
                          code: C.invalid_string,
                          validation: { endsWith: s.value },
                          message: s.message,
                        }),
                        a.dirty())
                      : s.kind === "datetime"
                        ? sf(s).test(t.data) ||
                          ((n = this._getOrReturnCtx(t, n)),
                          P(n, {
                            code: C.invalid_string,
                            validation: "datetime",
                            message: s.message,
                          }),
                          a.dirty())
                        : s.kind === "date"
                          ? nf.test(t.data) ||
                            ((n = this._getOrReturnCtx(t, n)),
                            P(n, {
                              code: C.invalid_string,
                              validation: "date",
                              message: s.message,
                            }),
                            a.dirty())
                          : s.kind === "time"
                            ? of(s).test(t.data) ||
                              ((n = this._getOrReturnCtx(t, n)),
                              P(n, {
                                code: C.invalid_string,
                                validation: "time",
                                message: s.message,
                              }),
                              a.dirty())
                            : s.kind === "duration"
                              ? Zm.test(t.data) ||
                                ((n = this._getOrReturnCtx(t, n)),
                                P(n, {
                                  validation: "duration",
                                  code: C.invalid_string,
                                  message: s.message,
                                }),
                                a.dirty())
                              : s.kind === "ip"
                                ? lf(t.data, s.version) ||
                                  ((n = this._getOrReturnCtx(t, n)),
                                  P(n, {
                                    validation: "ip",
                                    code: C.invalid_string,
                                    message: s.message,
                                  }),
                                  a.dirty())
                                : s.kind === "jwt"
                                  ? uf(t.data, s.alg) ||
                                    ((n = this._getOrReturnCtx(t, n)),
                                    P(n, {
                                      validation: "jwt",
                                      code: C.invalid_string,
                                      message: s.message,
                                    }),
                                    a.dirty())
                                  : s.kind === "cidr"
                                    ? df(t.data, s.version) ||
                                      ((n = this._getOrReturnCtx(t, n)),
                                      P(n, {
                                        validation: "cidr",
                                        code: C.invalid_string,
                                        message: s.message,
                                      }),
                                      a.dirty())
                                    : s.kind === "base64"
                                      ? rf.test(t.data) ||
                                        ((n = this._getOrReturnCtx(t, n)),
                                        P(n, {
                                          validation: "base64",
                                          code: C.invalid_string,
                                          message: s.message,
                                        }),
                                        a.dirty())
                                      : s.kind === "base64url"
                                        ? af.test(t.data) ||
                                          ((n = this._getOrReturnCtx(t, n)),
                                          P(n, {
                                            validation: "base64url",
                                            code: C.invalid_string,
                                            message: s.message,
                                          }),
                                          a.dirty())
                                        : pe.assertNever(s);
    return { status: a.value, value: t.data };
  }
  _regex(t, r, a) {
    return this.refinement((n) => t.test(n), {
      validation: r,
      code: C.invalid_string,
      ...L.errToObj(a),
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...L.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...L.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...L.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...L.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...L.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...L.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...L.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...L.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...L.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: "base64url", ...L.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...L.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...L.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...L.errToObj(t) });
  }
  datetime(t) {
    return typeof t == "string"
      ? this._addCheck({ kind: "datetime", precision: null, offset: !1, local: !1, message: t })
      : this._addCheck({
          kind: "datetime",
          precision: typeof t?.precision > "u" ? null : t?.precision,
          offset: t?.offset ?? !1,
          local: t?.local ?? !1,
          ...L.errToObj(t?.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string"
      ? this._addCheck({ kind: "time", precision: null, message: t })
      : this._addCheck({
          kind: "time",
          precision: typeof t?.precision > "u" ? null : t?.precision,
          ...L.errToObj(t?.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...L.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({ kind: "regex", regex: t, ...L.errToObj(r) });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r?.position,
      ...L.errToObj(r?.message),
    });
  }
  startsWith(t, r) {
    return this._addCheck({ kind: "startsWith", value: t, ...L.errToObj(r) });
  }
  endsWith(t, r) {
    return this._addCheck({ kind: "endsWith", value: t, ...L.errToObj(r) });
  }
  min(t, r) {
    return this._addCheck({ kind: "min", value: t, ...L.errToObj(r) });
  }
  max(t, r) {
    return this._addCheck({ kind: "max", value: t, ...L.errToObj(r) });
  }
  length(t, r) {
    return this._addCheck({ kind: "length", value: t, ...L.errToObj(r) });
  }
  nonempty(t) {
    return this.min(1, L.errToObj(t));
  }
  trim() {
    return new e({ ...this._def, checks: [...this._def.checks, { kind: "trim" }] });
  }
  toLowerCase() {
    return new e({ ...this._def, checks: [...this._def.checks, { kind: "toLowerCase" }] });
  }
  toUpperCase() {
    return new e({ ...this._def, checks: [...this._def.checks, { kind: "toUpperCase" }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (let r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (let r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
};
pa.create = (e) => new pa({ checks: [], typeName: A.ZodString, coerce: e?.coerce ?? !1, ...te(e) });
function cf(e, t) {
  let r = (e.toString().split(".")[1] || "").length,
    a = (t.toString().split(".")[1] || "").length,
    n = r > a ? r : a,
    s = Number.parseInt(e.toFixed(n).replace(".", "")),
    i = Number.parseInt(t.toFixed(n).replace(".", ""));
  return (s % i) / 10 ** n;
}
var tn = class e extends oe {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(t) {
    if ((this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== j.number)) {
      let s = this._getOrReturnCtx(t);
      return (P(s, { code: C.invalid_type, expected: j.number, received: s.parsedType }), Y);
    }
    let a,
      n = new at();
    for (let s of this._def.checks)
      s.kind === "int"
        ? pe.isInteger(t.data) ||
          ((a = this._getOrReturnCtx(t, a)),
          P(a, {
            code: C.invalid_type,
            expected: "integer",
            received: "float",
            message: s.message,
          }),
          n.dirty())
        : s.kind === "min"
          ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
            ((a = this._getOrReturnCtx(t, a)),
            P(a, {
              code: C.too_small,
              minimum: s.value,
              type: "number",
              inclusive: s.inclusive,
              exact: !1,
              message: s.message,
            }),
            n.dirty())
          : s.kind === "max"
            ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
              ((a = this._getOrReturnCtx(t, a)),
              P(a, {
                code: C.too_big,
                maximum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message,
              }),
              n.dirty())
            : s.kind === "multipleOf"
              ? cf(t.data, s.value) !== 0 &&
                ((a = this._getOrReturnCtx(t, a)),
                P(a, { code: C.not_multiple_of, multipleOf: s.value, message: s.message }),
                n.dirty())
              : s.kind === "finite"
                ? Number.isFinite(t.data) ||
                  ((a = this._getOrReturnCtx(t, a)),
                  P(a, { code: C.not_finite, message: s.message }),
                  n.dirty())
                : pe.assertNever(s);
    return { status: n.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, L.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, L.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, L.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, L.toString(r));
  }
  setLimit(t, r, a, n) {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: r, inclusive: a, message: L.toString(n) }],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: L.toString(t) });
  }
  positive(t) {
    return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: L.toString(t) });
  }
  negative(t) {
    return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: L.toString(t) });
  }
  nonpositive(t) {
    return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: L.toString(t) });
  }
  nonnegative(t) {
    return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: L.toString(t) });
  }
  multipleOf(t, r) {
    return this._addCheck({ kind: "multipleOf", value: t, message: L.toString(r) });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: L.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: L.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: L.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (let r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (let r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) => t.kind === "int" || (t.kind === "multipleOf" && pe.isInteger(t.value))
    );
  }
  get isFinite() {
    let t = null,
      r = null;
    for (let a of this._def.checks) {
      if (a.kind === "finite" || a.kind === "int" || a.kind === "multipleOf") return !0;
      a.kind === "min"
        ? (r === null || a.value > r) && (r = a.value)
        : a.kind === "max" && (t === null || a.value < t) && (t = a.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
};
tn.create = (e) => new tn({ checks: [], typeName: A.ZodNumber, coerce: e?.coerce || !1, ...te(e) });
var rn = class e extends oe {
  constructor() {
    (super(...arguments), (this.min = this.gte), (this.max = this.lte));
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== j.bigint) return this._getInvalidInput(t);
    let a,
      n = new at();
    for (let s of this._def.checks)
      s.kind === "min"
        ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
          ((a = this._getOrReturnCtx(t, a)),
          P(a, {
            code: C.too_small,
            type: "bigint",
            minimum: s.value,
            inclusive: s.inclusive,
            message: s.message,
          }),
          n.dirty())
        : s.kind === "max"
          ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
            ((a = this._getOrReturnCtx(t, a)),
            P(a, {
              code: C.too_big,
              type: "bigint",
              maximum: s.value,
              inclusive: s.inclusive,
              message: s.message,
            }),
            n.dirty())
          : s.kind === "multipleOf"
            ? t.data % s.value !== BigInt(0) &&
              ((a = this._getOrReturnCtx(t, a)),
              P(a, { code: C.not_multiple_of, multipleOf: s.value, message: s.message }),
              n.dirty())
            : pe.assertNever(s);
    return { status: n.value, value: t.data };
  }
  _getInvalidInput(t) {
    let r = this._getOrReturnCtx(t);
    return (P(r, { code: C.invalid_type, expected: j.bigint, received: r.parsedType }), Y);
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, L.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, L.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, L.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, L.toString(r));
  }
  setLimit(t, r, a, n) {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: r, inclusive: a, message: L.toString(n) }],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !1, message: L.toString(t) });
  }
  negative(t) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !1, message: L.toString(t) });
  }
  nonpositive(t) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !0, message: L.toString(t) });
  }
  nonnegative(t) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: L.toString(t) });
  }
  multipleOf(t, r) {
    return this._addCheck({ kind: "multipleOf", value: t, message: L.toString(r) });
  }
  get minValue() {
    let t = null;
    for (let r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (let r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
};
rn.create = (e) => new rn({ checks: [], typeName: A.ZodBigInt, coerce: e?.coerce ?? !1, ...te(e) });
var an = class extends oe {
  _parse(t) {
    if ((this._def.coerce && (t.data = !!t.data), this._getType(t) !== j.boolean)) {
      let a = this._getOrReturnCtx(t);
      return (P(a, { code: C.invalid_type, expected: j.boolean, received: a.parsedType }), Y);
    }
    return ft(t.data);
  }
};
an.create = (e) => new an({ typeName: A.ZodBoolean, coerce: e?.coerce || !1, ...te(e) });
var nn = class e extends oe {
  _parse(t) {
    if ((this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== j.date)) {
      let s = this._getOrReturnCtx(t);
      return (P(s, { code: C.invalid_type, expected: j.date, received: s.parsedType }), Y);
    }
    if (Number.isNaN(t.data.getTime())) {
      let s = this._getOrReturnCtx(t);
      return (P(s, { code: C.invalid_date }), Y);
    }
    let a = new at(),
      n;
    for (let s of this._def.checks)
      s.kind === "min"
        ? t.data.getTime() < s.value &&
          ((n = this._getOrReturnCtx(t, n)),
          P(n, {
            code: C.too_small,
            message: s.message,
            inclusive: !0,
            exact: !1,
            minimum: s.value,
            type: "date",
          }),
          a.dirty())
        : s.kind === "max"
          ? t.data.getTime() > s.value &&
            ((n = this._getOrReturnCtx(t, n)),
            P(n, {
              code: C.too_big,
              message: s.message,
              inclusive: !0,
              exact: !1,
              maximum: s.value,
              type: "date",
            }),
            a.dirty())
          : pe.assertNever(s);
    return { status: a.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, r) {
    return this._addCheck({ kind: "min", value: t.getTime(), message: L.toString(r) });
  }
  max(t, r) {
    return this._addCheck({ kind: "max", value: t.getTime(), message: L.toString(r) });
  }
  get minDate() {
    let t = null;
    for (let r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (let r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
};
nn.create = (e) => new nn({ checks: [], coerce: e?.coerce || !1, typeName: A.ZodDate, ...te(e) });
var on = class extends oe {
  _parse(t) {
    if (this._getType(t) !== j.symbol) {
      let a = this._getOrReturnCtx(t);
      return (P(a, { code: C.invalid_type, expected: j.symbol, received: a.parsedType }), Y);
    }
    return ft(t.data);
  }
};
on.create = (e) => new on({ typeName: A.ZodSymbol, ...te(e) });
var ma = class extends oe {
  _parse(t) {
    if (this._getType(t) !== j.undefined) {
      let a = this._getOrReturnCtx(t);
      return (P(a, { code: C.invalid_type, expected: j.undefined, received: a.parsedType }), Y);
    }
    return ft(t.data);
  }
};
ma.create = (e) => new ma({ typeName: A.ZodUndefined, ...te(e) });
var fa = class extends oe {
  _parse(t) {
    if (this._getType(t) !== j.null) {
      let a = this._getOrReturnCtx(t);
      return (P(a, { code: C.invalid_type, expected: j.null, received: a.parsedType }), Y);
    }
    return ft(t.data);
  }
};
fa.create = (e) => new fa({ typeName: A.ZodNull, ...te(e) });
var sn = class extends oe {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(t) {
    return ft(t.data);
  }
};
sn.create = (e) => new sn({ typeName: A.ZodAny, ...te(e) });
var Or = class extends oe {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(t) {
    return ft(t.data);
  }
};
Or.create = (e) => new Or({ typeName: A.ZodUnknown, ...te(e) });
var ar = class extends oe {
  _parse(t) {
    let r = this._getOrReturnCtx(t);
    return (P(r, { code: C.invalid_type, expected: j.never, received: r.parsedType }), Y);
  }
};
ar.create = (e) => new ar({ typeName: A.ZodNever, ...te(e) });
var ln = class extends oe {
  _parse(t) {
    if (this._getType(t) !== j.undefined) {
      let a = this._getOrReturnCtx(t);
      return (P(a, { code: C.invalid_type, expected: j.void, received: a.parsedType }), Y);
    }
    return ft(t.data);
  }
};
ln.create = (e) => new ln({ typeName: A.ZodVoid, ...te(e) });
var Nr = class e extends oe {
  _parse(t) {
    let { ctx: r, status: a } = this._processInputParams(t),
      n = this._def;
    if (r.parsedType !== j.array)
      return (P(r, { code: C.invalid_type, expected: j.array, received: r.parsedType }), Y);
    if (n.exactLength !== null) {
      let i = r.data.length > n.exactLength.value,
        l = r.data.length < n.exactLength.value;
      (i || l) &&
        (P(r, {
          code: i ? C.too_big : C.too_small,
          minimum: l ? n.exactLength.value : void 0,
          maximum: i ? n.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: n.exactLength.message,
        }),
        a.dirty());
    }
    if (
      (n.minLength !== null &&
        r.data.length < n.minLength.value &&
        (P(r, {
          code: C.too_small,
          minimum: n.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: n.minLength.message,
        }),
        a.dirty()),
      n.maxLength !== null &&
        r.data.length > n.maxLength.value &&
        (P(r, {
          code: C.too_big,
          maximum: n.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: n.maxLength.message,
        }),
        a.dirty()),
      r.common.async)
    )
      return Promise.all(
        [...r.data].map((i, l) => n.type._parseAsync(new $t(r, i, r.path, l)))
      ).then((i) => at.mergeArray(a, i));
    let s = [...r.data].map((i, l) => n.type._parseSync(new $t(r, i, r.path, l)));
    return at.mergeArray(a, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new e({ ...this._def, minLength: { value: t, message: L.toString(r) } });
  }
  max(t, r) {
    return new e({ ...this._def, maxLength: { value: t, message: L.toString(r) } });
  }
  length(t, r) {
    return new e({ ...this._def, exactLength: { value: t, message: L.toString(r) } });
  }
  nonempty(t) {
    return this.min(1, t);
  }
};
Nr.create = (e, t) =>
  new Nr({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: A.ZodArray,
    ...te(t),
  });
function ca(e) {
  if (e instanceof kt) {
    let t = {};
    for (let r in e.shape) {
      let a = e.shape[r];
      t[r] = Lt.create(ca(a));
    }
    return new kt({ ...e._def, shape: () => t });
  } else
    return e instanceof Nr
      ? new Nr({ ...e._def, type: ca(e.element) })
      : e instanceof Lt
        ? Lt.create(ca(e.unwrap()))
        : e instanceof yr
          ? yr.create(ca(e.unwrap()))
          : e instanceof vr
            ? vr.create(e.items.map((t) => ca(t)))
            : e;
}
var kt = class e extends oe {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let t = this._def.shape(),
      r = pe.objectKeys(t);
    return ((this._cached = { shape: t, keys: r }), this._cached);
  }
  _parse(t) {
    if (this._getType(t) !== j.object) {
      let c = this._getOrReturnCtx(t);
      return (P(c, { code: C.invalid_type, expected: j.object, received: c.parsedType }), Y);
    }
    let { status: a, ctx: n } = this._processInputParams(t),
      { shape: s, keys: i } = this._getCached(),
      l = [];
    if (!(this._def.catchall instanceof ar && this._def.unknownKeys === "strip"))
      for (let c in n.data) i.includes(c) || l.push(c);
    let d = [];
    for (let c of i) {
      let u = s[c],
        p = n.data[c];
      d.push({
        key: { status: "valid", value: c },
        value: u._parse(new $t(n, p, n.path, c)),
        alwaysSet: c in n.data,
      });
    }
    if (this._def.catchall instanceof ar) {
      let c = this._def.unknownKeys;
      if (c === "passthrough")
        for (let u of l)
          d.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: n.data[u] },
          });
      else if (c === "strict")
        l.length > 0 && (P(n, { code: C.unrecognized_keys, keys: l }), a.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let c = this._def.catchall;
      for (let u of l) {
        let p = n.data[u];
        d.push({
          key: { status: "valid", value: u },
          value: c._parse(new $t(n, p, n.path, u)),
          alwaysSet: u in n.data,
        });
      }
    }
    return n.common.async
      ? Promise.resolve()
          .then(async () => {
            let c = [];
            for (let u of d) {
              let p = await u.key,
                m = await u.value;
              c.push({ key: p, value: m, alwaysSet: u.alwaysSet });
            }
            return c;
          })
          .then((c) => at.mergeObjectSync(a, c))
      : at.mergeObjectSync(a, d);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      L.errToObj,
      new e({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (r, a) => {
                let n = this._def.errorMap?.(r, a).message ?? a.defaultError;
                return r.code === "unrecognized_keys"
                  ? { message: L.errToObj(t).message ?? n }
                  : { message: n };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new e({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new e({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new e({ ...this._def, shape: () => ({ ...this._def.shape(), ...t }) });
  }
  merge(t) {
    return new e({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: A.ZodObject,
    });
  }
  setKey(t, r) {
    return this.augment({ [t]: r });
  }
  catchall(t) {
    return new e({ ...this._def, catchall: t });
  }
  pick(t) {
    let r = {};
    for (let a of pe.objectKeys(t)) t[a] && this.shape[a] && (r[a] = this.shape[a]);
    return new e({ ...this._def, shape: () => r });
  }
  omit(t) {
    let r = {};
    for (let a of pe.objectKeys(this.shape)) t[a] || (r[a] = this.shape[a]);
    return new e({ ...this._def, shape: () => r });
  }
  deepPartial() {
    return ca(this);
  }
  partial(t) {
    let r = {};
    for (let a of pe.objectKeys(this.shape)) {
      let n = this.shape[a];
      t && !t[a] ? (r[a] = n) : (r[a] = n.optional());
    }
    return new e({ ...this._def, shape: () => r });
  }
  required(t) {
    let r = {};
    for (let a of pe.objectKeys(this.shape))
      if (t && !t[a]) r[a] = this.shape[a];
      else {
        let s = this.shape[a];
        for (; s instanceof Lt;) s = s._def.innerType;
        r[a] = s;
      }
    return new e({ ...this._def, shape: () => r });
  }
  keyof() {
    return Nl(pe.objectKeys(this.shape));
  }
};
kt.create = (e, t) =>
  new kt({
    shape: () => e,
    unknownKeys: "strip",
    catchall: ar.create(),
    typeName: A.ZodObject,
    ...te(t),
  });
kt.strictCreate = (e, t) =>
  new kt({
    shape: () => e,
    unknownKeys: "strict",
    catchall: ar.create(),
    typeName: A.ZodObject,
    ...te(t),
  });
kt.lazycreate = (e, t) =>
  new kt({
    shape: e,
    unknownKeys: "strip",
    catchall: ar.create(),
    typeName: A.ZodObject,
    ...te(t),
  });
var ha = class extends oe {
  _parse(t) {
    let { ctx: r } = this._processInputParams(t),
      a = this._def.options;
    function n(s) {
      for (let l of s) if (l.result.status === "valid") return l.result;
      for (let l of s)
        if (l.result.status === "dirty")
          return (r.common.issues.push(...l.ctx.common.issues), l.result);
      let i = s.map((l) => new Mt(l.ctx.common.issues));
      return (P(r, { code: C.invalid_union, unionErrors: i }), Y);
    }
    if (r.common.async)
      return Promise.all(
        a.map(async (s) => {
          let i = { ...r, common: { ...r.common, issues: [] }, parent: null };
          return { result: await s._parseAsync({ data: r.data, path: r.path, parent: i }), ctx: i };
        })
      ).then(n);
    {
      let s,
        i = [];
      for (let d of a) {
        let c = { ...r, common: { ...r.common, issues: [] }, parent: null },
          u = d._parseSync({ data: r.data, path: r.path, parent: c });
        if (u.status === "valid") return u;
        (u.status === "dirty" && !s && (s = { result: u, ctx: c }),
          c.common.issues.length && i.push(c.common.issues));
      }
      if (s) return (r.common.issues.push(...s.ctx.common.issues), s.result);
      let l = i.map((d) => new Mt(d));
      return (P(r, { code: C.invalid_union, unionErrors: l }), Y);
    }
  }
  get options() {
    return this._def.options;
  }
};
ha.create = (e, t) => new ha({ options: e, typeName: A.ZodUnion, ...te(t) });
var gr = (e) =>
    e instanceof va
      ? gr(e.schema)
      : e instanceof zt
        ? gr(e.innerType())
        : e instanceof ya
          ? [e.value]
          : e instanceof ba
            ? e.options
            : e instanceof wa
              ? pe.objectValues(e.enum)
              : e instanceof _a
                ? gr(e._def.innerType)
                : e instanceof ma
                  ? [void 0]
                  : e instanceof fa
                    ? [null]
                    : e instanceof Lt
                      ? [void 0, ...gr(e.unwrap())]
                      : e instanceof yr
                        ? [null, ...gr(e.unwrap())]
                        : e instanceof Wn || e instanceof xa
                          ? gr(e.unwrap())
                          : e instanceof Ta
                            ? gr(e._def.innerType)
                            : [],
  Yo = class e extends oe {
    _parse(t) {
      let { ctx: r } = this._processInputParams(t);
      if (r.parsedType !== j.object)
        return (P(r, { code: C.invalid_type, expected: j.object, received: r.parsedType }), Y);
      let a = this.discriminator,
        n = r.data[a],
        s = this.optionsMap.get(n);
      return s
        ? r.common.async
          ? s._parseAsync({ data: r.data, path: r.path, parent: r })
          : s._parseSync({ data: r.data, path: r.path, parent: r })
        : (P(r, {
            code: C.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [a],
          }),
          Y);
    }
    get discriminator() {
      return this._def.discriminator;
    }
    get options() {
      return this._def.options;
    }
    get optionsMap() {
      return this._def.optionsMap;
    }
    static create(t, r, a) {
      let n = new Map();
      for (let s of r) {
        let i = gr(s.shape[t]);
        if (!i.length)
          throw new Error(
            `A discriminator value for key \`${t}\` could not be extracted from all schema options`
          );
        for (let l of i) {
          if (n.has(l))
            throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(l)}`);
          n.set(l, s);
        }
      }
      return new e({
        typeName: A.ZodDiscriminatedUnion,
        discriminator: t,
        options: r,
        optionsMap: n,
        ...te(a),
      });
    }
  };
function Xo(e, t) {
  let r = hr(e),
    a = hr(t);
  if (e === t) return { valid: !0, data: e };
  if (r === j.object && a === j.object) {
    let n = pe.objectKeys(t),
      s = pe.objectKeys(e).filter((l) => n.indexOf(l) !== -1),
      i = { ...e, ...t };
    for (let l of s) {
      let d = Xo(e[l], t[l]);
      if (!d.valid) return { valid: !1 };
      i[l] = d.data;
    }
    return { valid: !0, data: i };
  } else if (r === j.array && a === j.array) {
    if (e.length !== t.length) return { valid: !1 };
    let n = [];
    for (let s = 0; s < e.length; s++) {
      let i = e[s],
        l = t[s],
        d = Xo(i, l);
      if (!d.valid) return { valid: !1 };
      n.push(d.data);
    }
    return { valid: !0, data: n };
  } else return r === j.date && a === j.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
var ga = class extends oe {
  _parse(t) {
    let { status: r, ctx: a } = this._processInputParams(t),
      n = (s, i) => {
        if (Wo(s) || Wo(i)) return Y;
        let l = Xo(s.value, i.value);
        return l.valid
          ? ((Zo(s) || Zo(i)) && r.dirty(), { status: r.value, value: l.data })
          : (P(a, { code: C.invalid_intersection_types }), Y);
      };
    return a.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: a.data, path: a.path, parent: a }),
          this._def.right._parseAsync({ data: a.data, path: a.path, parent: a }),
        ]).then(([s, i]) => n(s, i))
      : n(
          this._def.left._parseSync({ data: a.data, path: a.path, parent: a }),
          this._def.right._parseSync({ data: a.data, path: a.path, parent: a })
        );
  }
};
ga.create = (e, t, r) => new ga({ left: e, right: t, typeName: A.ZodIntersection, ...te(r) });
var vr = class e extends oe {
  _parse(t) {
    let { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== j.array)
      return (P(a, { code: C.invalid_type, expected: j.array, received: a.parsedType }), Y);
    if (a.data.length < this._def.items.length)
      return (
        P(a, {
          code: C.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        Y
      );
    !this._def.rest &&
      a.data.length > this._def.items.length &&
      (P(a, {
        code: C.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      r.dirty());
    let s = [...a.data]
      .map((i, l) => {
        let d = this._def.items[l] || this._def.rest;
        return d ? d._parse(new $t(a, i, a.path, l)) : null;
      })
      .filter((i) => !!i);
    return a.common.async ? Promise.all(s).then((i) => at.mergeArray(r, i)) : at.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new e({ ...this._def, rest: t });
  }
};
vr.create = (e, t) => {
  if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new vr({ items: e, typeName: A.ZodTuple, rest: null, ...te(t) });
};
var Qo = class e extends oe {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(t) {
      let { status: r, ctx: a } = this._processInputParams(t);
      if (a.parsedType !== j.object)
        return (P(a, { code: C.invalid_type, expected: j.object, received: a.parsedType }), Y);
      let n = [],
        s = this._def.keyType,
        i = this._def.valueType;
      for (let l in a.data)
        n.push({
          key: s._parse(new $t(a, l, a.path, l)),
          value: i._parse(new $t(a, a.data[l], a.path, l)),
          alwaysSet: l in a.data,
        });
      return a.common.async ? at.mergeObjectAsync(r, n) : at.mergeObjectSync(r, n);
    }
    get element() {
      return this._def.valueType;
    }
    static create(t, r, a) {
      return r instanceof oe
        ? new e({ keyType: t, valueType: r, typeName: A.ZodRecord, ...te(a) })
        : new e({ keyType: pa.create(), valueType: t, typeName: A.ZodRecord, ...te(r) });
    }
  },
  un = class extends oe {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(t) {
      let { status: r, ctx: a } = this._processInputParams(t);
      if (a.parsedType !== j.map)
        return (P(a, { code: C.invalid_type, expected: j.map, received: a.parsedType }), Y);
      let n = this._def.keyType,
        s = this._def.valueType,
        i = [...a.data.entries()].map(([l, d], c) => ({
          key: n._parse(new $t(a, l, a.path, [c, "key"])),
          value: s._parse(new $t(a, d, a.path, [c, "value"])),
        }));
      if (a.common.async) {
        let l = new Map();
        return Promise.resolve().then(async () => {
          for (let d of i) {
            let c = await d.key,
              u = await d.value;
            if (c.status === "aborted" || u.status === "aborted") return Y;
            ((c.status === "dirty" || u.status === "dirty") && r.dirty(), l.set(c.value, u.value));
          }
          return { status: r.value, value: l };
        });
      } else {
        let l = new Map();
        for (let d of i) {
          let c = d.key,
            u = d.value;
          if (c.status === "aborted" || u.status === "aborted") return Y;
          ((c.status === "dirty" || u.status === "dirty") && r.dirty(), l.set(c.value, u.value));
        }
        return { status: r.value, value: l };
      }
    }
  };
un.create = (e, t, r) => new un({ valueType: t, keyType: e, typeName: A.ZodMap, ...te(r) });
var dn = class e extends oe {
  _parse(t) {
    let { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== j.set)
      return (P(a, { code: C.invalid_type, expected: j.set, received: a.parsedType }), Y);
    let n = this._def;
    (n.minSize !== null &&
      a.data.size < n.minSize.value &&
      (P(a, {
        code: C.too_small,
        minimum: n.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: n.minSize.message,
      }),
      r.dirty()),
      n.maxSize !== null &&
        a.data.size > n.maxSize.value &&
        (P(a, {
          code: C.too_big,
          maximum: n.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: n.maxSize.message,
        }),
        r.dirty()));
    let s = this._def.valueType;
    function i(d) {
      let c = new Set();
      for (let u of d) {
        if (u.status === "aborted") return Y;
        (u.status === "dirty" && r.dirty(), c.add(u.value));
      }
      return { status: r.value, value: c };
    }
    let l = [...a.data.values()].map((d, c) => s._parse(new $t(a, d, a.path, c)));
    return a.common.async ? Promise.all(l).then((d) => i(d)) : i(l);
  }
  min(t, r) {
    return new e({ ...this._def, minSize: { value: t, message: L.toString(r) } });
  }
  max(t, r) {
    return new e({ ...this._def, maxSize: { value: t, message: L.toString(r) } });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
};
dn.create = (e, t) =>
  new dn({ valueType: e, minSize: null, maxSize: null, typeName: A.ZodSet, ...te(t) });
var es = class e extends oe {
    constructor() {
      (super(...arguments), (this.validate = this.implement));
    }
    _parse(t) {
      let { ctx: r } = this._processInputParams(t);
      if (r.parsedType !== j.function)
        return (P(r, { code: C.invalid_type, expected: j.function, received: r.parsedType }), Y);
      function a(l, d) {
        return Hn({
          data: l,
          path: r.path,
          errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Qa(), Ar].filter((c) => !!c),
          issueData: { code: C.invalid_arguments, argumentsError: d },
        });
      }
      function n(l, d) {
        return Hn({
          data: l,
          path: r.path,
          errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Qa(), Ar].filter((c) => !!c),
          issueData: { code: C.invalid_return_type, returnTypeError: d },
        });
      }
      let s = { errorMap: r.common.contextualErrorMap },
        i = r.data;
      if (this._def.returns instanceof Jr) {
        let l = this;
        return ft(async function (...d) {
          let c = new Mt([]),
            u = await l._def.args.parseAsync(d, s).catch((_) => {
              throw (c.addIssue(a(d, _)), c);
            }),
            p = await Reflect.apply(i, this, u);
          return await l._def.returns._def.type.parseAsync(p, s).catch((_) => {
            throw (c.addIssue(n(p, _)), c);
          });
        });
      } else {
        let l = this;
        return ft(function (...d) {
          let c = l._def.args.safeParse(d, s);
          if (!c.success) throw new Mt([a(d, c.error)]);
          let u = Reflect.apply(i, this, c.data),
            p = l._def.returns.safeParse(u, s);
          if (!p.success) throw new Mt([n(u, p.error)]);
          return p.data;
        });
      }
    }
    parameters() {
      return this._def.args;
    }
    returnType() {
      return this._def.returns;
    }
    args(...t) {
      return new e({ ...this._def, args: vr.create(t).rest(Or.create()) });
    }
    returns(t) {
      return new e({ ...this._def, returns: t });
    }
    implement(t) {
      return this.parse(t);
    }
    strictImplement(t) {
      return this.parse(t);
    }
    static create(t, r, a) {
      return new e({
        args: t || vr.create([]).rest(Or.create()),
        returns: r || Or.create(),
        typeName: A.ZodFunction,
        ...te(a),
      });
    }
  },
  va = class extends oe {
    get schema() {
      return this._def.getter();
    }
    _parse(t) {
      let { ctx: r } = this._processInputParams(t);
      return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
    }
  };
va.create = (e, t) => new va({ getter: e, typeName: A.ZodLazy, ...te(t) });
var ya = class extends oe {
  _parse(t) {
    if (t.data !== this._def.value) {
      let r = this._getOrReturnCtx(t);
      return (P(r, { received: r.data, code: C.invalid_literal, expected: this._def.value }), Y);
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
};
ya.create = (e, t) => new ya({ value: e, typeName: A.ZodLiteral, ...te(t) });
function Nl(e, t) {
  return new ba({ values: e, typeName: A.ZodEnum, ...te(t) });
}
var ba = class e extends oe {
  _parse(t) {
    if (typeof t.data != "string") {
      let r = this._getOrReturnCtx(t),
        a = this._def.values;
      return (
        P(r, { expected: pe.joinValues(a), received: r.parsedType, code: C.invalid_type }),
        Y
      );
    }
    if ((this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data))) {
      let r = this._getOrReturnCtx(t),
        a = this._def.values;
      return (P(r, { received: r.data, code: C.invalid_enum_value, options: a }), Y);
    }
    return ft(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    let t = {};
    for (let r of this._def.values) t[r] = r;
    return t;
  }
  get Values() {
    let t = {};
    for (let r of this._def.values) t[r] = r;
    return t;
  }
  get Enum() {
    let t = {};
    for (let r of this._def.values) t[r] = r;
    return t;
  }
  extract(t, r = this._def) {
    return e.create(t, { ...this._def, ...r });
  }
  exclude(t, r = this._def) {
    return e.create(
      this.options.filter((a) => !t.includes(a)),
      { ...this._def, ...r }
    );
  }
};
ba.create = Nl;
var wa = class extends oe {
  _parse(t) {
    let r = pe.getValidEnumValues(this._def.values),
      a = this._getOrReturnCtx(t);
    if (a.parsedType !== j.string && a.parsedType !== j.number) {
      let n = pe.objectValues(r);
      return (
        P(a, { expected: pe.joinValues(n), received: a.parsedType, code: C.invalid_type }),
        Y
      );
    }
    if (
      (this._cache || (this._cache = new Set(pe.getValidEnumValues(this._def.values))),
      !this._cache.has(t.data))
    ) {
      let n = pe.objectValues(r);
      return (P(a, { received: a.data, code: C.invalid_enum_value, options: n }), Y);
    }
    return ft(t.data);
  }
  get enum() {
    return this._def.values;
  }
};
wa.create = (e, t) => new wa({ values: e, typeName: A.ZodNativeEnum, ...te(t) });
var Jr = class extends oe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    let { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== j.promise && r.common.async === !1)
      return (P(r, { code: C.invalid_type, expected: j.promise, received: r.parsedType }), Y);
    let a = r.parsedType === j.promise ? r.data : Promise.resolve(r.data);
    return ft(
      a.then((n) =>
        this._def.type.parseAsync(n, { path: r.path, errorMap: r.common.contextualErrorMap })
      )
    );
  }
};
Jr.create = (e, t) => new Jr({ type: e, typeName: A.ZodPromise, ...te(t) });
var zt = class extends oe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === A.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    let { status: r, ctx: a } = this._processInputParams(t),
      n = this._def.effect || null,
      s = {
        addIssue: (i) => {
          (P(a, i), i.fatal ? r.abort() : r.dirty());
        },
        get path() {
          return a.path;
        },
      };
    if (((s.addIssue = s.addIssue.bind(s)), n.type === "preprocess")) {
      let i = n.transform(a.data, s);
      if (a.common.async)
        return Promise.resolve(i).then(async (l) => {
          if (r.value === "aborted") return Y;
          let d = await this._def.schema._parseAsync({ data: l, path: a.path, parent: a });
          return d.status === "aborted"
            ? Y
            : d.status === "dirty"
              ? da(d.value)
              : r.value === "dirty"
                ? da(d.value)
                : d;
        });
      {
        if (r.value === "aborted") return Y;
        let l = this._def.schema._parseSync({ data: i, path: a.path, parent: a });
        return l.status === "aborted"
          ? Y
          : l.status === "dirty"
            ? da(l.value)
            : r.value === "dirty"
              ? da(l.value)
              : l;
      }
    }
    if (n.type === "refinement") {
      let i = (l) => {
        let d = n.refinement(l, s);
        if (a.common.async) return Promise.resolve(d);
        if (d instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return l;
      };
      if (a.common.async === !1) {
        let l = this._def.schema._parseSync({ data: a.data, path: a.path, parent: a });
        return l.status === "aborted"
          ? Y
          : (l.status === "dirty" && r.dirty(), i(l.value), { status: r.value, value: l.value });
      } else
        return this._def.schema
          ._parseAsync({ data: a.data, path: a.path, parent: a })
          .then((l) =>
            l.status === "aborted"
              ? Y
              : (l.status === "dirty" && r.dirty(),
                i(l.value).then(() => ({ status: r.value, value: l.value })))
          );
    }
    if (n.type === "transform")
      if (a.common.async === !1) {
        let i = this._def.schema._parseSync({ data: a.data, path: a.path, parent: a });
        if (!Br(i)) return Y;
        let l = n.transform(i.value, s);
        if (l instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: r.value, value: l };
      } else
        return this._def.schema
          ._parseAsync({ data: a.data, path: a.path, parent: a })
          .then((i) =>
            Br(i)
              ? Promise.resolve(n.transform(i.value, s)).then((l) => ({
                  status: r.value,
                  value: l,
                }))
              : Y
          );
    pe.assertNever(n);
  }
};
zt.create = (e, t, r) => new zt({ schema: e, typeName: A.ZodEffects, effect: t, ...te(r) });
zt.createWithPreprocess = (e, t, r) =>
  new zt({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: A.ZodEffects,
    ...te(r),
  });
var Lt = class extends oe {
  _parse(t) {
    return this._getType(t) === j.undefined ? ft(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Lt.create = (e, t) => new Lt({ innerType: e, typeName: A.ZodOptional, ...te(t) });
var yr = class extends oe {
  _parse(t) {
    return this._getType(t) === j.null ? ft(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
};
yr.create = (e, t) => new yr({ innerType: e, typeName: A.ZodNullable, ...te(t) });
var _a = class extends oe {
  _parse(t) {
    let { ctx: r } = this._processInputParams(t),
      a = r.data;
    return (
      r.parsedType === j.undefined && (a = this._def.defaultValue()),
      this._def.innerType._parse({ data: a, path: r.path, parent: r })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
_a.create = (e, t) =>
  new _a({
    innerType: e,
    typeName: A.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...te(t),
  });
var Ta = class extends oe {
  _parse(t) {
    let { ctx: r } = this._processInputParams(t),
      a = { ...r, common: { ...r.common, issues: [] } },
      n = this._def.innerType._parse({ data: a.data, path: a.path, parent: { ...a } });
    return en(n)
      ? n.then((s) => ({
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new Mt(a.common.issues);
                  },
                  input: a.data,
                }),
        }))
      : {
          status: "valid",
          value:
            n.status === "valid"
              ? n.value
              : this._def.catchValue({
                  get error() {
                    return new Mt(a.common.issues);
                  },
                  input: a.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
Ta.create = (e, t) =>
  new Ta({
    innerType: e,
    typeName: A.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...te(t),
  });
var cn = class extends oe {
  _parse(t) {
    if (this._getType(t) !== j.nan) {
      let a = this._getOrReturnCtx(t);
      return (P(a, { code: C.invalid_type, expected: j.nan, received: a.parsedType }), Y);
    }
    return { status: "valid", value: t.data };
  }
};
cn.create = (e) => new cn({ typeName: A.ZodNaN, ...te(e) });
var Wn = class extends oe {
    _parse(t) {
      let { ctx: r } = this._processInputParams(t),
        a = r.data;
      return this._def.type._parse({ data: a, path: r.path, parent: r });
    }
    unwrap() {
      return this._def.type;
    }
  },
  Zn = class e extends oe {
    _parse(t) {
      let { status: r, ctx: a } = this._processInputParams(t);
      if (a.common.async)
        return (async () => {
          let s = await this._def.in._parseAsync({ data: a.data, path: a.path, parent: a });
          return s.status === "aborted"
            ? Y
            : s.status === "dirty"
              ? (r.dirty(), da(s.value))
              : this._def.out._parseAsync({ data: s.value, path: a.path, parent: a });
        })();
      {
        let n = this._def.in._parseSync({ data: a.data, path: a.path, parent: a });
        return n.status === "aborted"
          ? Y
          : n.status === "dirty"
            ? (r.dirty(), { status: "dirty", value: n.value })
            : this._def.out._parseSync({ data: n.value, path: a.path, parent: a });
      }
    }
    static create(t, r) {
      return new e({ in: t, out: r, typeName: A.ZodPipeline });
    }
  },
  xa = class extends oe {
    _parse(t) {
      let r = this._def.innerType._parse(t),
        a = (n) => (Br(n) && (n.value = Object.freeze(n.value)), n);
      return en(r) ? r.then((n) => a(n)) : a(r);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
xa.create = (e, t) => new xa({ innerType: e, typeName: A.ZodReadonly, ...te(t) });
var G_ = { object: kt.lazycreate },
  A;
(function (e) {
  ((e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly"));
})(A || (A = {}));
var H_ = pa.create,
  W_ = tn.create,
  Z_ = cn.create,
  K_ = rn.create,
  Y_ = an.create,
  X_ = nn.create,
  Q_ = on.create,
  eT = ma.create,
  tT = fa.create,
  rT = sn.create,
  aT = Or.create,
  nT = ar.create,
  oT = ln.create,
  sT = Nr.create,
  iT = kt.create,
  lT = kt.strictCreate,
  uT = ha.create,
  dT = Yo.create,
  cT = ga.create,
  pT = vr.create,
  mT = Qo.create,
  fT = un.create,
  hT = dn.create,
  gT = es.create,
  vT = va.create,
  yT = ya.create,
  bT = ba.create,
  wT = wa.create,
  _T = Jr.create,
  TT = zt.create,
  xT = Lt.create,
  IT = yr.create,
  ST = zt.createWithPreprocess,
  ET = Zn.create;
var Kn = class extends Error {
    constructor(t, r) {
      (super(t),
        (this.name = "ParseError"),
        (this.type = r.type),
        (this.field = r.field),
        (this.value = r.value),
        (this.line = r.line));
    }
  },
  Pl = 10,
  mf = 13,
  Gr = 32;
function ts(e) {}
function ql(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  let { onEvent: t = ts, onError: r = ts, onRetry: a = ts, onComment: n } = e,
    s = [],
    i = !0,
    l,
    d = "",
    c = 0,
    u;
  function p(f) {
    if (
      (i &&
        ((i = !1),
        f.charCodeAt(0) === 239 &&
          f.charCodeAt(1) === 187 &&
          f.charCodeAt(2) === 191 &&
          (f = f.slice(3))),
      s.length === 0)
    ) {
      let I = m(f);
      I !== "" && s.push(I);
      return;
    }
    if (
      f.indexOf(`
`) === -1 &&
      f.indexOf("\r") === -1
    ) {
      s.push(f);
      return;
    }
    s.push(f);
    let v = s.join("");
    s.length = 0;
    let T = m(v);
    T !== "" && s.push(T);
  }
  function m(f) {
    let v = 0;
    if (f.indexOf("\r") === -1) {
      let T = f.indexOf(
        `
`,
        v
      );
      for (; T !== -1;) {
        if (v === T) {
          (c > 0 && t({ id: l, event: u, data: d }),
            (l = void 0),
            (d = ""),
            (c = 0),
            (u = void 0),
            (v = T + 1),
            (T = f.indexOf(
              `
`,
              v
            )));
          continue;
        }
        let I = f.charCodeAt(v);
        if (jl(f, v, I)) {
          let E = f.charCodeAt(v + 5) === Gr ? v + 6 : v + 5,
            g = f.slice(E, T);
          if (c === 0 && f.charCodeAt(T + 1) === Pl) {
            (t({ id: l, event: u, data: g }),
              (l = void 0),
              (d = ""),
              (u = void 0),
              (v = T + 2),
              (T = f.indexOf(
                `
`,
                v
              )));
            continue;
          }
          ((d =
            c === 0
              ? g
              : `${d}
${g}`),
            c++);
        } else
          Dl(f, v, I)
            ? (u = f.slice(f.charCodeAt(v + 6) === Gr ? v + 7 : v + 6, T) || void 0)
            : _(f, v, T);
        ((v = T + 1),
          (T = f.indexOf(
            `
`,
            v
          )));
      }
      return f.slice(v);
    }
    for (; v < f.length;) {
      let T = f.indexOf("\r", v),
        I = f.indexOf(
          `
`,
          v
        ),
        E = -1;
      if (
        (T !== -1 && I !== -1
          ? (E = T < I ? T : I)
          : T !== -1
            ? T === f.length - 1
              ? (E = -1)
              : (E = T)
            : I !== -1 && (E = I),
        E === -1)
      )
        break;
      (_(f, v, E), (v = E + 1), f.charCodeAt(v - 1) === mf && f.charCodeAt(v) === Pl && v++);
    }
    return f.slice(v);
  }
  function _(f, v, T) {
    if (v === T) {
      b();
      return;
    }
    let I = f.charCodeAt(v);
    if (jl(f, v, I)) {
      let N = f.charCodeAt(v + 5) === Gr ? v + 6 : v + 5,
        D = f.slice(N, T);
      ((d =
        c === 0
          ? D
          : `${d}
${D}`),
        c++);
      return;
    }
    if (Dl(f, v, I)) {
      u = f.slice(f.charCodeAt(v + 6) === Gr ? v + 7 : v + 6, T) || void 0;
      return;
    }
    if (I === 105 && f.charCodeAt(v + 1) === 100 && f.charCodeAt(v + 2) === 58) {
      let N = f.slice(f.charCodeAt(v + 3) === Gr ? v + 4 : v + 3, T);
      l = N.includes("\0") ? void 0 : N;
      return;
    }
    if (I === 58) {
      if (n) {
        let N = f.slice(v, T);
        n(N.slice(f.charCodeAt(v + 1) === Gr ? 2 : 1));
      }
      return;
    }
    let E = f.slice(v, T),
      g = E.indexOf(":");
    if (g === -1) {
      h(E, "", E);
      return;
    }
    let x = E.slice(0, g),
      M = E.charCodeAt(g + 1) === Gr ? 2 : 1,
      J = E.slice(g + M);
    h(x, J, E);
  }
  function h(f, v, T) {
    switch (f) {
      case "event":
        u = v || void 0;
        break;
      case "data":
        ((d =
          c === 0
            ? v
            : `${d}
${v}`),
          c++);
        break;
      case "id":
        l = v.includes("\0") ? void 0 : v;
        break;
      case "retry":
        /^\d+$/.test(v)
          ? a(parseInt(v, 10))
          : r(
              new Kn(`Invalid \`retry\` value: "${v}"`, {
                type: "invalid-retry",
                value: v,
                line: T,
              })
            );
        break;
      default:
        r(
          new Kn(`Unknown field "${f.length > 20 ? `${f.slice(0, 20)}\u2026` : f}"`, {
            type: "unknown-field",
            field: f,
            value: v,
            line: T,
          })
        );
        break;
    }
  }
  function b() {
    (c > 0 && t({ id: l, event: u, data: d }), (l = void 0), (d = ""), (c = 0), (u = void 0));
  }
  function y(f = {}) {
    if (f.consume && s.length > 0) {
      let v = s.join("");
      _(v, 0, v.length);
    }
    ((i = !0), (l = void 0), (d = ""), (c = 0), (u = void 0), (s.length = 0));
  }
  return { feed: p, reset: y };
}
function jl(e, t, r) {
  return (
    r === 100 &&
    e.charCodeAt(t + 1) === 97 &&
    e.charCodeAt(t + 2) === 116 &&
    e.charCodeAt(t + 3) === 97 &&
    e.charCodeAt(t + 4) === 58
  );
}
function Dl(e, t, r) {
  return (
    r === 101 &&
    e.charCodeAt(t + 1) === 118 &&
    e.charCodeAt(t + 2) === 101 &&
    e.charCodeAt(t + 3) === 110 &&
    e.charCodeAt(t + 4) === 116 &&
    e.charCodeAt(t + 5) === 58
  );
}
var Yn = class extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: a } = {}) {
    let n;
    super({
      start(s) {
        n = ql({
          onEvent: (i) => {
            s.enqueue(i);
          },
          onError(i) {
            t === "terminate" ? s.error(i) : typeof t == "function" && t(i);
          },
          onRetry: r,
          onComment: a,
        });
      },
      transform(s) {
        n.feed(s);
      },
    });
  }
};
function gt(...e) {
  return e.reduce((t, r) => ({ ...t, ...r }), {});
}
function UT({ tools: e = [], providerToolNames: t, resolveProviderToolName: r }) {
  var a;
  let n = {},
    s = {};
  for (let i of e)
    if (i.type === "provider") {
      let l = (a = r?.(i)) != null ? a : i.id in t ? t[i.id] : void 0;
      if (l == null) continue;
      ((n[i.name] = l), (s[l] = i.name));
    }
  return {
    toProviderToolName: (i) => {
      var l;
      return (l = n[i]) != null ? l : i;
    },
    toCustomToolName: (i) => {
      var l;
      return (l = s[i]) != null ? l : i;
    },
  };
}
async function pn(e, t) {
  if (e == null) return;
  let r = t?.abortSignal;
  return new Promise((a, n) => {
    if (r?.aborted) {
      n($l());
      return;
    }
    let s = setTimeout(() => {
        (i(), a());
      }, e),
      i = () => {
        (clearTimeout(s), r?.removeEventListener("abort", l));
      },
      l = () => {
        (i(), n($l()));
      };
    r?.addEventListener("abort", l);
  });
}
function $l() {
  return new DOMException("Delay was aborted", "AbortError");
}
var Tt = class {
  constructor() {
    ((this.status = { type: "pending" }), (this._resolve = void 0), (this._reject = void 0));
  }
  get promise() {
    return this._promise
      ? this._promise
      : ((this._promise = new Promise((e, t) => {
          (this.status.type === "resolved"
            ? e(this.status.value)
            : this.status.type === "rejected" && t(this.status.error),
            (this._resolve = e),
            (this._reject = t));
        })),
        this._promise);
  }
  resolve(e) {
    var t;
    ((this.status = { type: "resolved", value: e }),
      this._promise && ((t = this._resolve) == null || t.call(this, e)));
  }
  reject(e) {
    var t;
    ((this.status = { type: "rejected", error: e }),
      this._promise && ((t = this._reject) == null || t.call(this, e)));
  }
  isResolved() {
    return this.status.type === "resolved";
  }
  isRejected() {
    return this.status.type === "rejected";
  }
  isPending() {
    return this.status.type === "pending";
  }
};
function Hr(e) {
  return Object.fromEntries([...e.headers]);
}
var { btoa: ff, atob: hf } = globalThis;
function Ct(e) {
  let t = e.replace(/-/g, "+").replace(/_/g, "/"),
    r = hf(t),
    a = new Uint8Array(r.length);
  for (let n = 0; n < r.length; n++) a[n] = r.charCodeAt(n);
  return a;
}
function At(e) {
  var t;
  if (typeof ((t = globalThis.Buffer) == null ? void 0 : t.from) == "function")
    return globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("base64");
  let r = [],
    a = 4096;
  for (let n = 0; n < e.length; n += a) r.push(String.fromCodePoint(...e.subarray(n, n + a)));
  return ff(r.join(""));
}
var gf = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Uint8Array.prototype),
    Symbol.toStringTag
  ).get,
  vf = Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get;
function mn(e) {
  return ArrayBuffer.isView(e) && gf.call(e) === "Uint8Array";
}
function Xn(e) {
  if (typeof e != "object" || e === null || !("byteLength" in e)) return !1;
  try {
    return (vf.call(e), !0);
  } catch {
    return !1;
  }
}
function VT(e) {
  return mn(e) ? At(e) : e;
}
function LT(e, t = {}) {
  let { useArrayBrackets: r = !0 } = t,
    a = new FormData();
  for (let [n, s] of Object.entries(e))
    if (s != null) {
      if (Array.isArray(s)) {
        if (s.length === 1) {
          a.append(n, s[0]);
          continue;
        }
        let i = r ? `${n}[]` : n;
        for (let l of s) a.append(i, l);
        continue;
      }
      a.append(n, s);
    }
  return a;
}
async function fn(e) {
  var t;
  try {
    await ((t = e.body) == null ? void 0 : t.cancel());
  } catch {}
}
var Jl = "AI_DownloadError",
  Gl = `vercel.ai.error.${Jl}`,
  yf = Symbol.for(Gl),
  Fl,
  Ul,
  Ue = class extends ((Ul = S), (Fl = yf), Ul) {
    constructor({
      url: e,
      statusCode: t,
      statusText: r,
      cause: a,
      message: n = a == null
        ? `Failed to download ${e}: ${t} ${r}`
        : `Failed to download ${e}: ${a}`,
    }) {
      (super({ name: Jl, message: n, cause: a }),
        (this[Fl] = !0),
        (this.url = e),
        (this.statusCode = t),
        (this.statusText = r));
    }
    static isInstance(e) {
      return S.hasMarker(e, Gl);
    }
  };
function bf(e = globalThis) {
  return e.window != null;
}
function os(e, t) {
  try {
    return new URL(e).origin === new URL(t).origin;
  } catch {
    return !1;
  }
}
function wf(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    throw new Ue({ url: e, message: `Invalid URL: ${e}` });
  }
  if (t.protocol === "data:") return;
  if (t.protocol !== "http:" && t.protocol !== "https:")
    throw new Ue({ url: e, message: `URL scheme must be http, https, or data, got ${t.protocol}` });
  let r = t.hostname.toLowerCase().replace(/\.+$/, "");
  if (!r) throw new Ue({ url: e, message: "URL must have a hostname" });
  if (
    r === "localhost" ||
    r.endsWith(".local") ||
    r.endsWith(".localhost") ||
    r.endsWith(".internal")
  )
    throw new Ue({ url: e, message: `URL with hostname ${r} is not allowed` });
  if (r.startsWith("[") && r.endsWith("]")) {
    let a = r.slice(1, -1);
    if (Hl(a)) throw new Ue({ url: e, message: `URL with IPv6 address ${r} is not allowed` });
    return;
  }
  if (ls(r) && us(r)) throw new Ue({ url: e, message: `URL with IP address ${r} is not allowed` });
}
function _f({ address: e, family: t, hostname: r }) {
  if (t === 4 ? !ls(e) || us(e) : t === 6 ? Hl(e) : !0)
    throw new Ue({ url: r, message: `Hostname ${r} resolved to disallowed IP address ${e}` });
}
function ls(e) {
  let t = e.split(".");
  return t.length !== 4
    ? !1
    : t.every((r) => {
        let a = Number(r);
        return Number.isInteger(a) && a >= 0 && a <= 255 && String(a) === r;
      });
}
function us(e) {
  let t = e.split(".").map(Number),
    [r, a, n] = t;
  return (
    r === 0 ||
    r === 10 ||
    (r === 100 && a >= 64 && a <= 127) ||
    r === 127 ||
    (r === 169 && a === 254) ||
    (r === 172 && a >= 16 && a <= 31) ||
    (r === 192 && a === 0 && n === 0) ||
    (r === 192 && a === 168) ||
    (r === 198 && (a === 18 || a === 19)) ||
    r >= 240
  );
}
function Tf(e) {
  let t = e.toLowerCase(),
    r = t.indexOf("%");
  r !== -1 && (t = t.slice(0, r));
  let a = t.split("::");
  if (a.length > 2) return null;
  let n = (i) => {
      if (i === "") return [];
      let l = [],
        d = i.split(":");
      for (let c = 0; c < d.length; c++) {
        let u = d[c];
        if (u.includes(".")) {
          if (c !== d.length - 1 || !ls(u)) return null;
          let [p, m, _, h] = u.split(".").map(Number);
          l.push((p << 8) | m, (_ << 8) | h);
          continue;
        }
        if (!/^[0-9a-f]{1,4}$/.test(u)) return null;
        l.push(parseInt(u, 16));
      }
      return l;
    },
    s = n(a[0]);
  if (s === null) return null;
  if (a.length === 2) {
    let i = n(a[1]);
    if (i === null) return null;
    let l = 8 - s.length - i.length;
    return l < 0 ? null : [...s, ...new Array(l).fill(0), ...i];
  }
  return s.length === 8 ? s : null;
}
function Hl(e) {
  let t = Tf(e);
  if (t === null) return !0;
  let r = (n) => t.slice(0, n).every((s) => s === 0);
  if (
    (r(7) && (t[7] === 0 || t[7] === 1)) ||
    (t[0] & 65024) === 64512 ||
    (t[0] & 65472) === 65152 ||
    (t[0] & 65472) === 65216 ||
    (t[0] & 65280) === 65280
  )
    return !0;
  if (
    r(6) ||
    (r(5) && t[5] === 65535) ||
    (r(4) && t[4] === 65535 && t[5] === 0) ||
    (t[0] === 100 && t[1] === 65435 && t[2] === 0 && t[3] === 0 && t[4] === 0 && t[5] === 0) ||
    (t[0] === 100 && t[1] === 65435 && t[2] === 1)
  ) {
    let n = (t[6] >> 8) & 255,
      s = t[6] & 255,
      i = (t[7] >> 8) & 255,
      l = t[7] & 255;
    return us(`${n}.${s}.${i}.${l}`);
  }
  return !1;
}
function xf(e) {
  return (t, r, a) => {
    e(t, { ...r, all: !0 }, (n, s) => {
      if (n) {
        a(n);
        return;
      }
      try {
        let [i] = s;
        if (i == null) throw new Error(`Hostname ${t} did not resolve to an address`);
        for (let { address: l, family: d } of s) _f({ address: l, family: d, hostname: t });
        r.all === !0 ? a(null, s) : a(null, i.address, i.family);
      } catch (i) {
        a(i instanceof Error ? i : new Error(String(i)));
      }
    });
  };
}
var rs;
function If() {
  var e, t, r;
  let a = globalThis.process;
  return (
    ((e = a?.release) == null ? void 0 : e.name) === "node" &&
    ((t = a.versions) == null ? void 0 : t.bun) == null &&
    ((r = a.versions) == null ? void 0 : r.deno) == null &&
    a.title !== "workerd" &&
    globalThis.EdgeRuntime == null
  );
}
async function Sf() {
  return If() ? (rs ?? (rs = Ef())) : globalThis.fetch;
}
async function Ef() {
  let [e, { lookup: t }] = await Promise.all([Vl("node:module"), Vl("node:dns")]),
    r = e.createRequire(Wl()),
    { Agent: a, fetch: n } = r("undici"),
    s = new a({ connect: { lookup: xf(t) } });
  return (i, l) => n(i, { ...l, dispatcher: s });
}
async function Vl(e) {
  var t;
  let r = globalThis.process,
    a = (t = r?.getBuiltinModule) == null ? void 0 : t.call(r, e);
  if (a == null) throw new Error(`Node.js built-in module ${e} is unavailable`);
  return a;
}
function Wl() {
  let e = Error.prepareStackTrace;
  try {
    Error.prepareStackTrace = (n, s) => s;
    let t = new Error("Capture current module path");
    Error.captureStackTrace(t, Wl);
    let [r] = t.stack,
      a = r?.getFileName();
    if (a == null) throw new Error("Unable to determine the current module path");
    return a;
  } finally {
    Error.prepareStackTrace = e;
  }
}
var Mf = [
  "connection",
  "keep-alive",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "host",
  "forwarded",
  "proxy-authorization",
  "via",
  "x-forwarded-for",
  "x-forwarded-host",
  "x-forwarded-proto",
  "x-real-ip",
  "metadata",
  "metadata-flavor",
  "x-aws-ec2-metadata-token",
  "x-metadata-token",
  "cookie",
  "set-cookie",
];
function kf(e) {
  let t = new Headers(e);
  for (let r of Mf) t.delete(r);
  return t;
}
var Rf = 10,
  Cf = new Set([301, 302, 303, 307, 308]);
async function Af(e) {
  return e == null || e === globalThis.fetch ? await Sf() : e;
}
async function Qn({
  url: e,
  headers: t,
  abortSignal: r,
  maxRedirects: a = Rf,
  fetch: n,
  trustedOrigin: s,
}) {
  var i;
  let l = t === void 0 ? void 0 : kf(t),
    d = (u) => {
      let p = { signal: r, redirect: u };
      return (l !== void 0 && (p.headers = new Headers(l)), p);
    },
    c = e;
  for (let u = 0; u <= a; u++) {
    let p = s !== void 0 && os(c, s);
    p || wf(c);
    let m = p && n != null ? n : p ? globalThis.fetch : await Af(n),
      _ = await m(c, d("manual"));
    if (_.type === "opaqueredirect") {
      if (!bf())
        throw new Ue({
          url: e,
          message: `Redirect from ${c} could not be validated and was blocked`,
        });
      return await m(c, d("follow"));
    }
    let h = (i = _.headers) == null ? void 0 : i.get("location");
    if (Cf.has(_.status) && h) {
      fn(_);
      let b = new URL(h, c).toString();
      if (new URL(c).protocol === "https:" && new URL(b).protocol === "http:")
        throw new Ue({ url: e, message: "Redirect from HTTPS to HTTP was blocked" });
      if (l !== void 0 && !os(b, c)) {
        let y = l.get("user-agent");
        l = new Headers(y == null ? void 0 : { "user-agent": y });
      }
      c = b;
      continue;
    }
    return _;
  }
  throw new Ue({ url: e, message: `Too many redirects (max ${a})` });
}
var eo = 2 * 1024 * 1024 * 1024;
async function to({ response: e, url: t, maxBytes: r = eo }) {
  let a = e.headers.get("content-length");
  if (a != null) {
    let u = parseInt(a, 10);
    if (!isNaN(u) && u > r)
      throw (
        await fn(e),
        new Ue({
          url: t,
          message: `Download of ${t} exceeded maximum size of ${r} bytes (Content-Length: ${u}).`,
        })
      );
  }
  let n = e.body;
  if (n == null) return new Uint8Array(0);
  let s = n.getReader(),
    i = [],
    l = 0;
  try {
    for (;;) {
      let { done: u, value: p } = await s.read();
      if (u) break;
      if (((l += p.length), l > r))
        throw new Ue({ url: t, message: `Download of ${t} exceeded maximum size of ${r} bytes.` });
      i.push(p);
    }
  } finally {
    try {
      await s.cancel();
    } catch {
    } finally {
      s.releaseLock();
    }
  }
  let d = new Uint8Array(l),
    c = 0;
  for (let u of i) (d.set(u, c), (c += u.length));
  return d;
}
async function BT(e, t) {
  var r, a;
  try {
    let n = await Qn({ url: e, abortSignal: t?.abortSignal });
    if (!n.ok)
      throw (await fn(n), new Ue({ url: e, statusCode: n.status, statusText: n.statusText }));
    let s = await to({ response: n, url: e, maxBytes: (r = t?.maxBytes) != null ? r : eo }),
      i = (a = n.headers.get("content-type")) != null ? a : void 0;
    return new Blob([s], i ? { type: i } : void 0);
  } catch (n) {
    throw Ue.isInstance(n) ? n : new Ue({ url: e, cause: n });
  }
}
var ro = Symbol.for("vercel.ai.embeddingModel.maxInputBytesPerCall"),
  ao = Symbol.for("vercel.ai.embeddingModel.providerOptionsTransformer"),
  Gt = ({
    prefix: e,
    size: t = 16,
    alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    separator: a = "-",
  } = {}) => {
    let n = () => {
      let s = r.length,
        i = new Array(t);
      for (let l = 0; l < t; l++) i[l] = r[(Math.random() * s) | 0];
      return i.join("");
    };
    if (e == null) return n;
    if (r.includes(a))
      throw new ua({
        argument: "separator",
        message: `The separator "${a}" must not be part of the alphabet "${r}".`,
      });
    return () => `${e}${a}${n()}`;
  },
  Wr = Gt();
function ke(e) {
  return e == null
    ? "unknown error"
    : typeof e == "string"
      ? e
      : e instanceof Error
        ? e.message
        : JSON.stringify(e);
}
function br(e) {
  return (
    (e instanceof Error || e instanceof DOMException) &&
    (e.name === "AbortError" || e.name === "ResponseAborted" || e.name === "TimeoutError")
  );
}
var Of = ["fetch failed", "failed to fetch"],
  Nf = new Set([
    "ConnectionRefused",
    "ConnectionClosed",
    "FailedToOpenSocket",
    "ECONNRESET",
    "ECONNREFUSED",
    "ETIMEDOUT",
    "EPIPE",
    "UND_ERR_SOCKET",
    "UND_ERR_HEADERS_TIMEOUT",
    "UND_ERR_BODY_TIMEOUT",
    "UND_ERR_CONNECT_TIMEOUT",
  ]);
function Pf(e) {
  let t = new Set(),
    r = e;
  for (; r instanceof Error && !t.has(r);) {
    t.add(r);
    let a = r;
    if (typeof a.code == "string" && Nf.has(a.code)) return a;
    r = r.cause;
  }
}
function ds({ error: e, url: t, requestBodyValues: r }) {
  if (br(e)) return e;
  if (e instanceof TypeError && Of.includes(e.message.toLowerCase())) {
    let n = e.cause;
    if (n != null)
      return new ue({
        message: `Cannot connect to API: ${n.message}`,
        cause: n,
        url: t,
        requestBodyValues: r,
        isRetryable: !0,
      });
  }
  let a = Pf(e);
  return a != null
    ? ue.isInstance(e)
      ? new ue({
          message: e.message,
          cause: e.cause,
          url: e.url,
          requestBodyValues: e.requestBodyValues,
          statusCode: e.statusCode,
          responseHeaders: e.responseHeaders,
          responseBody: e.responseBody,
          data: e.data,
          isRetryable: !0,
        })
      : new ue({
          message: `Cannot connect to API: ${e instanceof Error ? e.message : a.message}`,
          cause: e,
          url: t,
          requestBodyValues: r,
          isRetryable: !0,
        })
    : e;
}
function Ia(e = globalThis) {
  var t, r, a;
  return e.window
    ? "runtime/browser"
    : (t = e.navigator) != null && t.userAgent
      ? `runtime/${e.navigator.userAgent.toLowerCase()}`
      : (a = (r = e.process) == null ? void 0 : r.versions) != null && a.node
        ? `runtime/node.js/${e.process.version.substring(0)}`
        : e.EdgeRuntime
          ? "runtime/vercel-edge"
          : "runtime/unknown";
}
function jr(e) {
  if (e == null) return {};
  let t = {};
  if (e instanceof Headers)
    e.forEach((r, a) => {
      t[a.toLowerCase()] = r;
    });
  else {
    Array.isArray(e) || (e = Object.entries(e));
    for (let [r, a] of e) a != null && (t[r.toLowerCase()] = a);
  }
  return t;
}
function Ne(e, ...t) {
  let r = new Headers(jr(e)),
    a = r.get("user-agent") || "";
  return (
    r.set("user-agent", [a, ...t].filter(Boolean).join(" ")),
    Object.fromEntries(r.entries())
  );
}
var Zl = "4.0.66",
  jf = () => globalThis.fetch,
  Zr = async ({
    url: e,
    headers: t = {},
    successfulResponseHandler: r,
    failedResponseHandler: a,
    abortSignal: n,
    fetch: s,
    validateUrl: i,
    credentialedOrigin: l,
    trustedOrigin: d,
  }) => {
    try {
      let c = s ?? jf(),
        u = l !== void 0 && !os(e, l) ? {} : t,
        p = Ne(u, `ai-sdk/provider-utils/${Zl}`, Ia()),
        m = i
          ? await Qn({ url: e, headers: p, abortSignal: n, fetch: s, trustedOrigin: d })
          : await c(e, { method: "GET", headers: p, signal: n }),
        _ = Hr(m);
      if (!m.ok) {
        let h;
        try {
          h = await a({ response: m, url: e, requestBodyValues: {} });
        } catch (b) {
          throw br(b) || ue.isInstance(b)
            ? b
            : new ue({
                message: "Failed to process error response",
                cause: b,
                statusCode: m.status,
                url: e,
                responseHeaders: _,
                requestBodyValues: {},
              });
        }
        throw h.value;
      }
      try {
        return await r({ response: m, url: e, requestBodyValues: {} });
      } catch (h) {
        throw h instanceof Error && (br(h) || ue.isInstance(h))
          ? h
          : new ue({
              message: "Failed to process successful response",
              cause: h,
              statusCode: m.status,
              url: e,
              responseHeaders: _,
              requestBodyValues: {},
            });
      }
    } catch (c) {
      throw ds({ error: c, url: e, requestBodyValues: {} });
    }
  };
function Kl(e) {
  return e != null;
}
function Yl({ mediaType: e, url: t, supportedUrls: r }) {
  return (
    (e = e.toLowerCase()),
    Object.entries(r)
      .map(([a, n]) => {
        let s = a.toLowerCase();
        return s === "*" || s === "*/*"
          ? { mediaTypePrefix: "", regexes: n }
          : { mediaTypePrefix: s.replace(/\*/, ""), regexes: n };
      })
      .filter(({ mediaTypePrefix: a }) => (a === "" || a.endsWith("/") ? e.startsWith(a) : e === a))
      .flatMap(({ regexes: a }) => a)
      .some((a) => a.test(t))
  );
}
function ZT({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: a,
}) {
  if (typeof e == "string") return e;
  if (e != null) throw new zr({ message: `${a} API key must be a string.` });
  if (typeof process > "u")
    throw new zr({
      message: `${a} API key is missing. Pass it using the '${r}' parameter. Environment variables are not supported in this environment.`,
    });
  if (((e = process.env[t]), e == null))
    throw new zr({
      message: `${a} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`,
    });
  if (typeof e != "string")
    throw new zr({
      message: `${a} API key must be a string. The value of the ${t} environment variable is not a string.`,
    });
  return e;
}
function Sa({ settingValue: e, environmentVariableName: t }) {
  if (typeof e == "string") return e;
  if (
    !(e != null || typeof process > "u") &&
    ((e = process.env[t]), !(e == null || typeof e != "string"))
  )
    return e;
}
function KT(e) {
  var t;
  let [r, a = ""] = e.toLowerCase().split("/");
  return (t = { mpeg: "mp3", "x-wav": "wav", opus: "ogg", mp4: "m4a", "x-m4a": "m4a" }[a]) != null
    ? t
    : a;
}
var Df =
    /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,
  qf =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function Ll(e) {
  let t = JSON.parse(e);
  return t === null || typeof t != "object" || (Df.test(e) === !1 && qf.test(e) === !1) ? t : $f(t);
}
function $f(e) {
  let t = [e];
  for (; t.length;) {
    let r = t;
    t = [];
    for (let a of r) {
      if (Object.prototype.hasOwnProperty.call(a, "__proto__"))
        throw new SyntaxError("Object contains forbidden prototype property");
      if (
        Object.prototype.hasOwnProperty.call(a, "constructor") &&
        a.constructor !== null &&
        typeof a.constructor == "object" &&
        Object.prototype.hasOwnProperty.call(a.constructor, "prototype")
      )
        throw new SyntaxError("Object contains forbidden prototype property");
      for (let n in a) {
        let s = a[n];
        s && typeof s == "object" && t.push(s);
      }
    }
  }
  return e;
}
function no(e) {
  let { stackTraceLimit: t } = Error;
  try {
    Error.stackTraceLimit = 0;
  } catch {
    return Ll(e);
  }
  try {
    return Ll(e);
  } finally {
    Error.stackTraceLimit = t;
  }
}
function cs(e) {
  if (e.type === "object" || (Array.isArray(e.type) && e.type.includes("object"))) {
    let { additionalProperties: r } = e;
    e.additionalProperties = r != null && typeof r != "boolean" ? Pr(r) : !1;
    let { properties: a } = e;
    if (a != null) for (let n of Object.keys(a)) a[n] = Pr(a[n]);
  }
  (e.items != null && (e.items = Array.isArray(e.items) ? e.items.map(Pr) : Pr(e.items)),
    e.anyOf != null && (e.anyOf = e.anyOf.map(Pr)),
    e.allOf != null && (e.allOf = e.allOf.map(Pr)),
    e.oneOf != null && (e.oneOf = e.oneOf.map(Pr)));
  let { definitions: t } = e;
  if (t != null) for (let r of Object.keys(t)) t[r] = Pr(t[r]);
  return e;
}
function Pr(e) {
  return typeof e == "boolean" ? e : cs(e);
}
var Ff = Symbol("Let zodToJsonSchema decide on which parser to use"),
  zl = {
    name: void 0,
    $refStrategy: "root",
    basePath: ["#"],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: !0,
    rejectedAdditionalProperties: !1,
    definitionPath: "definitions",
    strictUnions: !1,
    definitions: {},
    errorMessages: !1,
    patternStrategy: "escape",
    applyRegexFlags: !1,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref",
  },
  Uf = (e) => (typeof e == "string" ? { ...zl, name: e } : { ...zl, ...e });
function Rt() {
  return {};
}
function Vf(e, t) {
  var r, a, n;
  let s = { type: "array" };
  return (
    (r = e.type) != null &&
      r._def &&
      ((n = (a = e.type) == null ? void 0 : a._def) == null ? void 0 : n.typeName) !== A.ZodAny &&
      (s.items = xe(e.type._def, { ...t, currentPath: [...t.currentPath, "items"] })),
    e.minLength && (s.minItems = e.minLength.value),
    e.maxLength && (s.maxItems = e.maxLength.value),
    e.exactLength && ((s.minItems = e.exactLength.value), (s.maxItems = e.exactLength.value)),
    s
  );
}
function Lf(e) {
  let t = { type: "integer", format: "int64" };
  if (!e.checks) return t;
  for (let r of e.checks)
    switch (r.kind) {
      case "min":
        r.inclusive ? (t.minimum = r.value) : (t.exclusiveMinimum = r.value);
        break;
      case "max":
        r.inclusive ? (t.maximum = r.value) : (t.exclusiveMaximum = r.value);
        break;
      case "multipleOf":
        t.multipleOf = r.value;
        break;
    }
  return t;
}
function zf() {
  return { type: "boolean" };
}
function Xl(e, t) {
  return xe(e.type._def, t);
}
var Bf = (e, t) => xe(e.innerType._def, t);
function Ql(e, t, r) {
  let a = r ?? t.dateStrategy;
  if (Array.isArray(a)) return { anyOf: a.map((n, s) => Ql(e, t, n)) };
  switch (a) {
    case "string":
    case "format:date-time":
      return { type: "string", format: "date-time" };
    case "format:date":
      return { type: "string", format: "date" };
    case "integer":
      return Jf(e);
  }
}
var Jf = (e) => {
  let t = { type: "integer", format: "unix-time" };
  for (let r of e.checks)
    switch (r.kind) {
      case "min":
        t.minimum = r.value;
        break;
      case "max":
        t.maximum = r.value;
        break;
    }
  return t;
};
function Gf(e, t) {
  return { ...xe(e.innerType._def, t), default: e.defaultValue() };
}
function Hf(e, t) {
  return t.effectStrategy === "input" ? xe(e.schema._def, t) : Rt();
}
function Wf(e) {
  return { type: "string", enum: Array.from(e.values) };
}
var Zf = (e) => ("type" in e && e.type === "string" ? !1 : "allOf" in e);
function Kf(e, t) {
  let r = [
      xe(e.left._def, { ...t, currentPath: [...t.currentPath, "allOf", "0"] }),
      xe(e.right._def, { ...t, currentPath: [...t.currentPath, "allOf", "1"] }),
    ].filter((n) => !!n),
    a = [];
  return (
    r.forEach((n) => {
      if (Zf(n)) a.push(...n.allOf);
      else {
        let s = n;
        if ("additionalProperties" in n && n.additionalProperties === !1) {
          let { additionalProperties: i, ...l } = n;
          s = l;
        }
        a.push(s);
      }
    }),
    a.length ? { allOf: a } : void 0
  );
}
function Yf(e) {
  let t = typeof e.value;
  return t !== "bigint" && t !== "number" && t !== "boolean" && t !== "string"
    ? { type: Array.isArray(e.value) ? "array" : "object" }
    : { type: t === "bigint" ? "integer" : t, const: e.value };
}
var as = void 0,
  Bt = {
    cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    email:
      /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}$/,
    emoji: () => (
      as === void 0 && (as = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")),
      as
    ),
    uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ipv4Cidr:
      /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    ipv6Cidr:
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  };
function eu(e, t) {
  let r = { type: "string" };
  if (e.checks)
    for (let a of e.checks)
      switch (a.kind) {
        case "min":
          r.minLength = typeof r.minLength == "number" ? Math.max(r.minLength, a.value) : a.value;
          break;
        case "max":
          r.maxLength = typeof r.maxLength == "number" ? Math.min(r.maxLength, a.value) : a.value;
          break;
        case "email":
          switch (t.emailStrategy) {
            case "format:email":
              Jt(r, "email", a.message, t);
              break;
            case "format:idn-email":
              Jt(r, "idn-email", a.message, t);
              break;
            case "pattern:zod":
              ht(r, Bt.email, a.message, t);
              break;
          }
          break;
        case "url":
          Jt(r, "uri", a.message, t);
          break;
        case "uuid":
          Jt(r, "uuid", a.message, t);
          break;
        case "regex":
          ht(r, a.regex, a.message, t);
          break;
        case "cuid":
          ht(r, Bt.cuid, a.message, t);
          break;
        case "cuid2":
          ht(r, Bt.cuid2, a.message, t);
          break;
        case "startsWith":
          ht(r, RegExp(`^${ns(a.value, t)}`), a.message, t);
          break;
        case "endsWith":
          ht(r, RegExp(`${ns(a.value, t)}$`), a.message, t);
          break;
        case "datetime":
          Jt(r, "date-time", a.message, t);
          break;
        case "date":
          Jt(r, "date", a.message, t);
          break;
        case "time":
          Jt(r, "time", a.message, t);
          break;
        case "duration":
          Jt(r, "duration", a.message, t);
          break;
        case "length":
          ((r.minLength =
            typeof r.minLength == "number" ? Math.max(r.minLength, a.value) : a.value),
            (r.maxLength =
              typeof r.maxLength == "number" ? Math.min(r.maxLength, a.value) : a.value));
          break;
        case "includes": {
          ht(r, RegExp(ns(a.value, t)), a.message, t);
          break;
        }
        case "ip": {
          (a.version !== "v6" && Jt(r, "ipv4", a.message, t),
            a.version !== "v4" && Jt(r, "ipv6", a.message, t));
          break;
        }
        case "base64url":
          ht(r, Bt.base64url, a.message, t);
          break;
        case "jwt":
          ht(r, Bt.jwt, a.message, t);
          break;
        case "cidr": {
          (a.version !== "v6" && ht(r, Bt.ipv4Cidr, a.message, t),
            a.version !== "v4" && ht(r, Bt.ipv6Cidr, a.message, t));
          break;
        }
        case "emoji":
          ht(r, Bt.emoji(), a.message, t);
          break;
        case "ulid": {
          ht(r, Bt.ulid, a.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              Jt(r, "binary", a.message, t);
              break;
            }
            case "contentEncoding:base64": {
              r.contentEncoding = "base64";
              break;
            }
            case "pattern:zod": {
              ht(r, Bt.base64, a.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          ht(r, Bt.nanoid, a.message, t);
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
      }
  return r;
}
function ns(e, t) {
  return t.patternStrategy === "escape" ? Qf(e) : e;
}
var Xf = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function Qf(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) (Xf.has(e[r]) || (t += "\\"), (t += e[r]));
  return t;
}
function Jt(e, t, r, a) {
  var n;
  e.format || ((n = e.anyOf) != null && n.some((s) => s.format))
    ? (e.anyOf || (e.anyOf = []),
      e.format && (e.anyOf.push({ format: e.format }), delete e.format),
      e.anyOf.push({ format: t, ...(r && a.errorMessages && { errorMessage: { format: r } }) }))
    : (e.format = t);
}
function ht(e, t, r, a) {
  var n;
  e.pattern || ((n = e.allOf) != null && n.some((s) => s.pattern))
    ? (e.allOf || (e.allOf = []),
      e.pattern && (e.allOf.push({ pattern: e.pattern }), delete e.pattern),
      e.allOf.push({
        pattern: Bl(t, a),
        ...(r && a.errorMessages && { errorMessage: { pattern: r } }),
      }))
    : (e.pattern = Bl(t, a));
}
function Bl(e, t) {
  var r;
  if (!t.applyRegexFlags || !e.flags) return e.source;
  let a = { i: e.flags.includes("i"), m: e.flags.includes("m"), s: e.flags.includes("s") },
    n = a.i ? e.source.toLowerCase() : e.source,
    s = "",
    i = !1,
    l = !1,
    d = !1;
  for (let c = 0; c < n.length; c++) {
    if (i) {
      ((s += n[c]), (i = !1));
      continue;
    }
    if (a.i) {
      if (l) {
        if (n[c].match(/[a-z]/)) {
          d
            ? ((s += n[c]), (s += `${n[c - 2]}-${n[c]}`.toUpperCase()), (d = !1))
            : n[c + 1] === "-" && (r = n[c + 2]) != null && r.match(/[a-z]/)
              ? ((s += n[c]), (d = !0))
              : (s += `${n[c]}${n[c].toUpperCase()}`);
          continue;
        }
      } else if (n[c].match(/[a-z]/)) {
        s += `[${n[c]}${n[c].toUpperCase()}]`;
        continue;
      }
    }
    if (a.m) {
      if (n[c] === "^") {
        s += `(^|(?<=[\r
]))`;
        continue;
      } else if (n[c] === "$") {
        s += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (a.s && n[c] === ".") {
      s += l
        ? `${n[c]}\r
`
        : `[${n[c]}\r
]`;
      continue;
    }
    ((s += n[c]),
      n[c] === "\\" ? (i = !0) : l && n[c] === "]" ? (l = !1) : !l && n[c] === "[" && (l = !0));
  }
  try {
    new RegExp(s);
  } catch {
    return (
      console.warn(
        `Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`
      ),
      e.source
    );
  }
  return s;
}
function tu(e, t) {
  var r, a, n, s, i, l;
  let d = {
    type: "object",
    additionalProperties:
      (r = xe(e.valueType._def, {
        ...t,
        currentPath: [...t.currentPath, "additionalProperties"],
      })) != null
        ? r
        : t.allowedAdditionalProperties,
  };
  if (
    ((a = e.keyType) == null ? void 0 : a._def.typeName) === A.ZodString &&
    (n = e.keyType._def.checks) != null &&
    n.length
  ) {
    let { type: c, ...u } = eu(e.keyType._def, t);
    return { ...d, propertyNames: u };
  } else {
    if (((s = e.keyType) == null ? void 0 : s._def.typeName) === A.ZodEnum)
      return { ...d, propertyNames: { enum: e.keyType._def.values } };
    if (
      ((i = e.keyType) == null ? void 0 : i._def.typeName) === A.ZodBranded &&
      e.keyType._def.type._def.typeName === A.ZodString &&
      (l = e.keyType._def.type._def.checks) != null &&
      l.length
    ) {
      let { type: c, ...u } = Xl(e.keyType._def, t);
      return { ...d, propertyNames: u };
    }
  }
  return d;
}
function eh(e, t) {
  if (t.mapStrategy === "record") return tu(e, t);
  let r =
      xe(e.keyType._def, { ...t, currentPath: [...t.currentPath, "items", "items", "0"] }) || Rt(),
    a =
      xe(e.valueType._def, { ...t, currentPath: [...t.currentPath, "items", "items", "1"] }) ||
      Rt();
  return {
    type: "array",
    maxItems: 125,
    items: { type: "array", items: [r, a], minItems: 2, maxItems: 2 },
  };
}
function th(e) {
  let t = e.values,
    a = Object.keys(e.values)
      .filter((s) => typeof t[t[s]] != "number")
      .map((s) => t[s]),
    n = Array.from(new Set(a.map((s) => typeof s)));
  return {
    type: n.length === 1 ? (n[0] === "string" ? "string" : "number") : ["string", "number"],
    enum: a,
  };
}
function rh() {
  return { not: Rt() };
}
function ah() {
  return { type: "null" };
}
var ss = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null",
};
function nh(e, t) {
  let r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((a) => a._def.typeName in ss && (!a._def.checks || !a._def.checks.length))) {
    let a = r.reduce((n, s) => {
      let i = ss[s._def.typeName];
      return i && !n.includes(i) ? [...n, i] : n;
    }, []);
    return { type: a.length > 1 ? a : a[0] };
  } else if (r.every((a) => a._def.typeName === "ZodLiteral" && !a.description)) {
    let a = r.reduce((n, s) => {
      let i = typeof s._def.value;
      switch (i) {
        case "string":
        case "number":
        case "boolean":
          return [...n, i];
        case "bigint":
          return [...n, "integer"];
        case "object":
          if (s._def.value === null) return [...n, "null"];
        default:
          return n;
      }
    }, []);
    if (a.length === r.length) {
      let n = a.filter((s, i, l) => l.indexOf(s) === i);
      return {
        type: n.length > 1 ? n : n[0],
        enum: r.reduce((s, i) => (s.includes(i._def.value) ? s : [...s, i._def.value]), []),
      };
    }
  } else if (r.every((a) => a._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: r.reduce((a, n) => [...a, ...n._def.values.filter((s) => !a.includes(s))], []),
    };
  return oh(e, t);
}
var oh = (e, t) => {
  let r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options)
    .map((a, n) => xe(a._def, { ...t, currentPath: [...t.currentPath, "anyOf", `${n}`] }))
    .filter((a) => !!a && (!t.strictUnions || (typeof a == "object" && Object.keys(a).length > 0)));
  return r.length ? { anyOf: r } : void 0;
};
function sh(e, t) {
  if (
    ["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
      e.innerType._def.typeName
    ) &&
    (!e.innerType._def.checks || !e.innerType._def.checks.length)
  )
    return { type: [ss[e.innerType._def.typeName], "null"] };
  let r = xe(e.innerType._def, { ...t, currentPath: [...t.currentPath, "anyOf", "0"] });
  return r && { anyOf: [r, { type: "null" }] };
}
function ih(e) {
  let t = { type: "number" };
  if (!e.checks) return t;
  for (let r of e.checks)
    switch (r.kind) {
      case "int":
        t.type = "integer";
        break;
      case "min":
        r.inclusive ? (t.minimum = r.value) : (t.exclusiveMinimum = r.value);
        break;
      case "max":
        r.inclusive ? (t.maximum = r.value) : (t.exclusiveMaximum = r.value);
        break;
      case "multipleOf":
        t.multipleOf = r.value;
        break;
    }
  return t;
}
function lh(e, t) {
  let r = { type: "object", properties: {} },
    a = [],
    n = e.shape();
  for (let i in n) {
    let l = n[i];
    if (l === void 0 || l._def === void 0) continue;
    let d = dh(l),
      c = xe(l._def, {
        ...t,
        currentPath: [...t.currentPath, "properties", i],
        propertyPath: [...t.currentPath, "properties", i],
      });
    c !== void 0 && ((r.properties[i] = c), d || a.push(i));
  }
  a.length && (r.required = a);
  let s = uh(e, t);
  return (s !== void 0 && (r.additionalProperties = s), r);
}
function uh(e, t) {
  if (e.catchall._def.typeName !== "ZodNever")
    return xe(e.catchall._def, { ...t, currentPath: [...t.currentPath, "additionalProperties"] });
  switch (e.unknownKeys) {
    case "passthrough":
      return t.allowedAdditionalProperties;
    case "strict":
      return t.rejectedAdditionalProperties;
    case "strip":
      return t.removeAdditionalStrategy === "strict"
        ? t.allowedAdditionalProperties
        : t.rejectedAdditionalProperties;
  }
}
function dh(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
var ch = (e, t) => {
    var r;
    if (t.currentPath.toString() === ((r = t.propertyPath) == null ? void 0 : r.toString()))
      return xe(e.innerType._def, t);
    let a = xe(e.innerType._def, { ...t, currentPath: [...t.currentPath, "anyOf", "1"] });
    return a ? { anyOf: [{ not: Rt() }, a] } : Rt();
  },
  ph = (e, t) => {
    if (t.pipeStrategy === "input") return xe(e.in._def, t);
    if (t.pipeStrategy === "output") return xe(e.out._def, t);
    let r = xe(e.in._def, { ...t, currentPath: [...t.currentPath, "allOf", "0"] }),
      a = xe(e.out._def, { ...t, currentPath: [...t.currentPath, "allOf", r ? "1" : "0"] });
    return { allOf: [r, a].filter((n) => n !== void 0) };
  };
function mh(e, t) {
  return xe(e.type._def, t);
}
function fh(e, t) {
  let a = {
    type: "array",
    uniqueItems: !0,
    items: xe(e.valueType._def, { ...t, currentPath: [...t.currentPath, "items"] }),
  };
  return (
    e.minSize && (a.minItems = e.minSize.value),
    e.maxSize && (a.maxItems = e.maxSize.value),
    a
  );
}
function hh(e, t) {
  return e.rest
    ? {
        type: "array",
        minItems: e.items.length,
        items: e.items
          .map((r, a) => xe(r._def, { ...t, currentPath: [...t.currentPath, "items", `${a}`] }))
          .reduce((r, a) => (a === void 0 ? r : [...r, a]), []),
        additionalItems: xe(e.rest._def, {
          ...t,
          currentPath: [...t.currentPath, "additionalItems"],
        }),
      }
    : {
        type: "array",
        minItems: e.items.length,
        maxItems: e.items.length,
        items: e.items
          .map((r, a) => xe(r._def, { ...t, currentPath: [...t.currentPath, "items", `${a}`] }))
          .reduce((r, a) => (a === void 0 ? r : [...r, a]), []),
      };
}
function gh() {
  return { not: Rt() };
}
function vh() {
  return Rt();
}
var yh = (e, t) => xe(e.innerType._def, t),
  bh = (e, t, r) => {
    switch (t) {
      case A.ZodString:
        return eu(e, r);
      case A.ZodNumber:
        return ih(e);
      case A.ZodObject:
        return lh(e, r);
      case A.ZodBigInt:
        return Lf(e);
      case A.ZodBoolean:
        return zf();
      case A.ZodDate:
        return Ql(e, r);
      case A.ZodUndefined:
        return gh();
      case A.ZodNull:
        return ah();
      case A.ZodArray:
        return Vf(e, r);
      case A.ZodUnion:
      case A.ZodDiscriminatedUnion:
        return nh(e, r);
      case A.ZodIntersection:
        return Kf(e, r);
      case A.ZodTuple:
        return hh(e, r);
      case A.ZodRecord:
        return tu(e, r);
      case A.ZodLiteral:
        return Yf(e);
      case A.ZodEnum:
        return Wf(e);
      case A.ZodNativeEnum:
        return th(e);
      case A.ZodNullable:
        return sh(e, r);
      case A.ZodOptional:
        return ch(e, r);
      case A.ZodMap:
        return eh(e, r);
      case A.ZodSet:
        return fh(e, r);
      case A.ZodLazy:
        return () => e.getter()._def;
      case A.ZodPromise:
        return mh(e, r);
      case A.ZodNaN:
      case A.ZodNever:
        return rh();
      case A.ZodEffects:
        return Hf(e, r);
      case A.ZodAny:
        return Rt();
      case A.ZodUnknown:
        return vh();
      case A.ZodDefault:
        return Gf(e, r);
      case A.ZodBranded:
        return Xl(e, r);
      case A.ZodReadonly:
        return yh(e, r);
      case A.ZodCatch:
        return Bf(e, r);
      case A.ZodPipeline:
        return ph(e, r);
      case A.ZodFunction:
      case A.ZodVoid:
      case A.ZodSymbol:
        return;
      default:
        return ((a) => {})(t);
    }
  },
  wh = (e, t) => {
    let r = 0;
    for (; r < e.length && r < t.length && e[r] === t[r]; r++);
    return [(e.length - r).toString(), ...t.slice(r)].join("/");
  };
function xe(e, t, r = !1) {
  var a;
  let n = t.seen.get(e);
  if (t.override) {
    let d = (a = t.override) == null ? void 0 : a.call(t, e, t, n, r);
    if (d !== Ff) return d;
  }
  if (n && !r) {
    let d = _h(n, t);
    if (d !== void 0) return d;
  }
  let s = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, s);
  let i = bh(e, e.typeName, t),
    l = typeof i == "function" ? xe(i(), t) : i;
  if ((l && Th(e, t, l), t.postProcess)) {
    let d = t.postProcess(l, e, t);
    return ((s.jsonSchema = l), d);
  }
  return ((s.jsonSchema = l), l);
}
var _h = (e, t) => {
    switch (t.$refStrategy) {
      case "root":
        return { $ref: e.path.join("/") };
      case "relative":
        return { $ref: wh(t.currentPath, e.path) };
      case "none":
      case "seen":
        return e.path.length < t.currentPath.length &&
          e.path.every((r, a) => t.currentPath[a] === r)
          ? (console.warn(
              `Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`
            ),
            Rt())
          : t.$refStrategy === "seen"
            ? Rt()
            : void 0;
    }
  },
  Th = (e, t, r) => (e.description && (r.description = e.description), r),
  xh = (e) => {
    let t = Uf(e),
      r = t.name !== void 0 ? [...t.basePath, t.definitionPath, t.name] : t.basePath;
    return {
      ...t,
      currentPath: r,
      propertyPath: void 0,
      seen: new Map(
        Object.entries(t.definitions).map(([a, n]) => [
          n._def,
          { def: n._def, path: [...t.basePath, t.definitionPath, a], jsonSchema: void 0 },
        ])
      ),
    };
  },
  Ih = (e, t) => {
    var r;
    let a = xh(t),
      n =
        typeof t == "object" && t.definitions
          ? Object.entries(t.definitions).reduce((c, [u, p]) => {
              var m;
              return {
                ...c,
                [u]:
                  (m = xe(
                    p._def,
                    { ...a, currentPath: [...a.basePath, a.definitionPath, u] },
                    !0
                  )) != null
                    ? m
                    : Rt(),
              };
            }, {})
          : void 0,
      s = typeof t == "string" ? t : t?.nameStrategy === "title" ? void 0 : t?.name,
      i =
        (r = xe(
          e._def,
          s === void 0 ? a : { ...a, currentPath: [...a.basePath, a.definitionPath, s] },
          !1
        )) != null
          ? r
          : Rt(),
      l = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
    l !== void 0 && (i.title = l);
    let d =
      s === void 0
        ? n
          ? { ...i, [a.definitionPath]: n }
          : i
        : {
            $ref: [...(a.$refStrategy === "relative" ? [] : a.basePath), a.definitionPath, s].join(
              "/"
            ),
            [a.definitionPath]: { ...n, [s]: i },
          };
    return ((d.$schema = "http://json-schema.org/draft-07/schema#"), d);
  },
  is = Symbol.for("vercel.ai.schema");
function Z(e) {
  let t;
  return () => (t == null && (t = e()), t);
}
function Ea(e, { validate: t } = {}) {
  return {
    [is]: !0,
    _type: void 0,
    get jsonSchema() {
      return (typeof e == "function" && (e = e()), e);
    },
    validate: t,
  };
}
function Sh(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    is in e &&
    e[is] === !0 &&
    "jsonSchema" in e &&
    "validate" in e
  );
}
function nt(e) {
  return e == null
    ? Ea({ type: "object", properties: {}, additionalProperties: !1 })
    : Sh(e)
      ? e
      : "~standard" in e
        ? e["~standard"].vendor === "zod"
          ? G(e)
          : Eh(e)
        : e();
}
function Eh(e) {
  return Ea(
    () => {
      if (!Mh(e))
        throw new Error(
          `Standard schema vendor '${e["~standard"].vendor}' does not support JSON Schema conversion.`
        );
      return cs(e["~standard"].jsonSchema.input({ target: "draft-07" }));
    },
    {
      validate: async (t) => {
        let r = await e["~standard"].validate(t);
        return "value" in r
          ? { success: !0, value: r.value }
          : { success: !1, error: new Ae({ value: t, cause: r.issues }) };
      },
    }
  );
}
function Mh(e) {
  return e["~standard"].jsonSchema != null;
}
function kh(e, t) {
  var r;
  let a = (r = t?.useReferences) != null ? r : !1;
  return Ea(() => Ih(e, { $refStrategy: a ? "root" : "none" }), {
    validate: async (n) => {
      let s = await e.safeParseAsync(n);
      return s.success ? { success: !0, value: s.data } : { success: !1, error: s.error };
    },
  });
}
function Rh(e, t) {
  var r;
  let a = (r = t?.useReferences) != null ? r : !1;
  return Ea(() => cs(Ti(e, { target: "draft-7", io: "input", reused: a ? "ref" : "inline" })), {
    validate: async (n) => {
      let s = await xi(e, n);
      return s.success ? { success: !0, value: s.data } : { success: !1, error: s.error };
    },
  });
}
function Ch(e) {
  return "_zod" in e;
}
function G(e, t) {
  return Ch(e) ? Rh(e, t) : kh(e, t);
}
async function Ht({ value: e, schema: t, context: r }) {
  let a = await Re({ value: e, schema: t, context: r });
  if (!a.success) throw Ae.wrap({ value: e, cause: a.error, context: r });
  return a.value;
}
async function Re({ value: e, schema: t, context: r }) {
  let a = nt(t);
  try {
    if (a.validate == null) return { success: !0, value: e, rawValue: e };
    let n = await a.validate(e);
    return n.success
      ? { success: !0, value: n.value, rawValue: e }
      : { success: !1, error: Ae.wrap({ value: e, cause: n.error, context: r }), rawValue: e };
  } catch (n) {
    return { success: !1, error: Ae.wrap({ value: e, cause: n, context: r }), rawValue: e };
  }
}
async function Ah({ text: e, schema: t }) {
  try {
    let r = no(e);
    return t == null ? r : Ht({ value: r, schema: t });
  } catch (r) {
    throw fr.isInstance(r) || Ae.isInstance(r) ? r : new fr({ text: e, cause: r });
  }
}
async function Ye({ text: e, schema: t }) {
  try {
    let r = no(e);
    return t == null ? { success: !0, value: r, rawValue: r } : await Re({ value: r, schema: t });
  } catch (r) {
    return {
      success: !1,
      error: fr.isInstance(r) ? r : new fr({ text: e, cause: r }),
      rawValue: void 0,
    };
  }
}
function wr({ stream: e, schema: t }) {
  return e
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new Yn())
    .pipeThrough(
      new TransformStream({
        async transform({ data: r }, a) {
          r !== "[DONE]" && a.enqueue(await Ye({ text: r, schema: t }));
        },
      })
    );
}
async function o0({ provider: e, providerOptions: t, schema: r }) {
  if (t?.[e] == null) return;
  let a = await Re({ value: t[e], schema: r });
  if (!a.success)
    throw new ua({
      argument: "providerOptions",
      message: `invalid ${e} provider options`,
      cause: a.error,
    });
  return a.value;
}
var Oh = () => globalThis.fetch,
  vt = async ({
    url: e,
    headers: t,
    body: r,
    failedResponseHandler: a,
    successfulResponseHandler: n,
    abortSignal: s,
    fetch: i,
  }) =>
    ru({
      url: e,
      headers: { "Content-Type": "application/json", ...t },
      body: { content: JSON.stringify(r), values: r },
      failedResponseHandler: a,
      successfulResponseHandler: n,
      abortSignal: s,
      fetch: i,
    }),
  i0 = async ({
    url: e,
    headers: t,
    formData: r,
    failedResponseHandler: a,
    successfulResponseHandler: n,
    abortSignal: s,
    fetch: i,
  }) =>
    ru({
      url: e,
      headers: t,
      body: { content: r, values: Object.fromEntries(r.entries()) },
      failedResponseHandler: a,
      successfulResponseHandler: n,
      abortSignal: s,
      fetch: i,
    }),
  ru = async ({
    url: e,
    headers: t = {},
    body: r,
    successfulResponseHandler: a,
    failedResponseHandler: n,
    abortSignal: s,
    fetch: i = Oh(),
  }) => {
    try {
      let l = await i(e, {
          method: "POST",
          headers: Ne(t, `ai-sdk/provider-utils/${Zl}`, Ia()),
          body: r.content,
          signal: s,
        }),
        d = Hr(l);
      if (!l.ok) {
        let c;
        try {
          c = await n({ response: l, url: e, requestBodyValues: r.values });
        } catch (u) {
          throw br(u) || ue.isInstance(u)
            ? u
            : new ue({
                message: "Failed to process error response",
                cause: u,
                statusCode: l.status,
                url: e,
                responseHeaders: d,
                requestBodyValues: r.values,
              });
        }
        throw c.value;
      }
      try {
        return await a({ response: l, url: e, requestBodyValues: r.values });
      } catch (c) {
        throw c instanceof Error && (br(c) || ue.isInstance(c))
          ? c
          : new ue({
              message: "Failed to process successful response",
              cause: c,
              statusCode: l.status,
              url: e,
              responseHeaders: d,
              requestBodyValues: r.values,
            });
      }
    } catch (l) {
      throw ds({ error: l, url: e, requestBodyValues: r.values });
    }
  };
function au(e) {
  return e;
}
function nu(e) {
  return { ...e, type: "dynamic" };
}
function l0({ id: e, inputSchema: t }) {
  return ({
    execute: r,
    outputSchema: a,
    needsApproval: n,
    toModelOutput: s,
    onInputStart: i,
    onInputDelta: l,
    onInputAvailable: d,
    ...c
  }) => ({
    type: "provider",
    id: e,
    args: c,
    inputSchema: t,
    outputSchema: a,
    execute: r,
    needsApproval: n,
    toModelOutput: s,
    onInputStart: i,
    onInputDelta: l,
    onInputAvailable: d,
  });
}
function ot({ id: e, inputSchema: t, outputSchema: r, supportsDeferredResults: a }) {
  return ({
    execute: n,
    needsApproval: s,
    toModelOutput: i,
    onInputStart: l,
    onInputDelta: d,
    onInputAvailable: c,
    ...u
  }) => ({
    type: "provider",
    id: e,
    args: u,
    inputSchema: t,
    outputSchema: r,
    execute: n,
    needsApproval: s,
    toModelOutput: i,
    onInputStart: l,
    onInputDelta: d,
    onInputAvailable: c,
    supportsDeferredResults: a,
  });
}
async function ae(e) {
  return (typeof e == "function" && (e = e()), e);
}
var ou =
  ({
    maxRetries: e = 2,
    initialDelayInMs: t = 2e3,
    backoffFactor: r = 2,
    abortSignal: a,
    shouldRetry: n,
    getDelayInMs: s = ({ exponentialBackoffDelay: l }) => l,
    createRetryError: i = ({ message: l }) => new Error(l),
  }) =>
  async (l) =>
    su(l, {
      maxRetries: e,
      delayInMs: t,
      backoffFactor: r,
      abortSignal: a,
      shouldRetry: n,
      getDelayInMs: s,
      createRetryError: i,
    });
async function su(
  e,
  {
    maxRetries: t,
    delayInMs: r,
    backoffFactor: a,
    abortSignal: n,
    shouldRetry: s,
    getDelayInMs: i,
    createRetryError: l,
  },
  d = []
) {
  try {
    return await e();
  } catch (c) {
    if (br(c) || t === 0) throw c;
    let u = ke(c),
      p = [...d, c],
      m = p.length;
    if (m > t)
      throw l({
        message: `Failed after ${m} attempts. Last error: ${u}`,
        reason: "maxRetriesExceeded",
        errors: p,
      });
    if ((await s(c)) && m <= t)
      return (
        await pn(i({ error: c, exponentialBackoffDelay: r }), { abortSignal: n }),
        su(
          e,
          {
            maxRetries: t,
            delayInMs: a * r,
            backoffFactor: a,
            abortSignal: n,
            shouldRetry: s,
            getDelayInMs: i,
            createRetryError: l,
          },
          p
        )
      );
    throw m === 1
      ? c
      : l({
          message: `Failed after ${m} attempts with non-retryable error: '${u}'`,
          reason: "errorNotRetryable",
          errors: p,
        });
  }
}
var Nh = new TextDecoder();
function Ph({ stream: e, url: t, requestBodyValues: r, statusCode: a, responseHeaders: n }) {
  let s = e.getReader(),
    i = !1,
    l = () => {
      i || (s.releaseLock(), (i = !0));
    };
  return new ReadableStream({
    async pull(d) {
      try {
        let { done: c, value: u } = await s.read();
        c ? (l(), d.close()) : d.enqueue(u);
      } catch (c) {
        if ((l(), br(c))) {
          d.error(c);
          return;
        }
        d.error(
          ds({
            error: new ue({
              message: "Failed to process successful response",
              cause: c,
              statusCode: a,
              url: t,
              responseHeaders: n,
              requestBodyValues: r,
            }),
            url: t,
            requestBodyValues: r,
          })
        );
      }
    },
    async cancel(d) {
      try {
        await s.cancel(d);
      } finally {
        l();
      }
    },
  });
}
async function ps({ response: e, url: t }) {
  return Nh.decode(await to({ response: e, url: t }));
}
var De =
    ({ errorSchema: e, errorToMessage: t, isRetryable: r }) =>
    async ({ response: a, url: n, requestBodyValues: s }) => {
      let i = await ps({ response: a, url: n }),
        l = Hr(a);
      if (i.trim() === "")
        return {
          responseHeaders: l,
          value: new ue({
            message: a.statusText,
            url: n,
            requestBodyValues: s,
            statusCode: a.status,
            responseHeaders: l,
            responseBody: i,
            isRetryable: r?.(a),
          }),
        };
      try {
        let d = await Ah({ text: i, schema: e });
        return {
          responseHeaders: l,
          value: new ue({
            message: t(d),
            url: n,
            requestBodyValues: s,
            statusCode: a.status,
            responseHeaders: l,
            responseBody: i,
            data: d,
            isRetryable: r?.(a, d),
          }),
        };
      } catch {
        return {
          responseHeaders: l,
          value: new ue({
            message: a.statusText,
            url: n,
            requestBodyValues: s,
            statusCode: a.status,
            responseHeaders: l,
            responseBody: i,
            isRetryable: r?.(a),
          }),
        };
      }
    },
  iu =
    (e) =>
    async ({ response: t, url: r, requestBodyValues: a }) => {
      let n = Hr(t);
      if (t.body == null) throw new Gn({});
      return {
        responseHeaders: n,
        value: wr({
          stream: Ph({
            stream: t.body,
            url: r,
            requestBodyValues: a,
            statusCode: t.status,
            responseHeaders: n,
          }),
          schema: e,
        }),
      };
    },
  We =
    (e) =>
    async ({ response: t, url: r, requestBodyValues: a }) => {
      let n = await ps({ response: t, url: r }),
        s = await Ye({ text: n, schema: e }),
        i = Hr(t);
      if (!s.success)
        throw new ue({
          message: "Invalid JSON response",
          cause: s.error,
          statusCode: t.status,
          responseHeaders: i,
          responseBody: n,
          url: r,
          requestBodyValues: a,
        });
      return { responseHeaders: i, value: s.value, rawValue: s.rawValue };
    },
  d0 =
    () =>
    async ({ response: e, url: t, requestBodyValues: r }) => {
      let a = Hr(e);
      if (!e.body)
        throw new ue({
          message: "Response body is empty",
          url: t,
          requestBodyValues: r,
          statusCode: e.status,
          responseHeaders: a,
          responseBody: void 0,
        });
      try {
        let n = await e.arrayBuffer();
        return { responseHeaders: a, value: new Uint8Array(n) };
      } catch (n) {
        throw new ue({
          message: "Failed to read response as array buffer",
          url: t,
          requestBodyValues: r,
          statusCode: e.status,
          responseHeaders: a,
          responseBody: void 0,
          cause: n,
        });
      }
    },
  c0 =
    () =>
    async ({ response: e, url: t, requestBodyValues: r }) => {
      let a = Hr(e),
        n = await ps({ response: e, url: t });
      return {
        responseHeaders: a,
        value: new ue({
          message: e.statusText,
          url: t,
          requestBodyValues: r,
          statusCode: e.status,
          responseHeaders: a,
          responseBody: n,
        }),
      };
    };
function jh(e) {
  if (typeof e != "string") return !1;
  let t = e.trimStart()[0];
  return t === "{" || t === "[";
}
var Dh = class {
    constructor(e = "") {
      ((this.structure = { kind: "undetermined" }), this.append(e));
    }
    get hasCompleteStructuredValue() {
      return this.structure.kind === "structured" && this.structure.complete === !0;
    }
    append(e) {
      let t = this.structure;
      for (let r of e) {
        if (t.kind === "undetermined") {
          if (/\s/.test(r)) continue;
          if (r !== "{" && r !== "[") {
            t = { kind: "other" };
            continue;
          }
          t = { kind: "structured", stack: [r], inString: !1, escaped: !1, complete: !1 };
          continue;
        }
        if (!(t.kind !== "structured" || t.complete)) {
          if (t.inString) {
            t.escaped
              ? (t.escaped = !1)
              : r === "\\"
                ? (t.escaped = !0)
                : r === '"' && (t.inString = !1);
            continue;
          }
          if (r === '"') t.inString = !0;
          else if (r === "{" || r === "[") t.stack.push(r);
          else if (r === "}" || r === "]") {
            let a = r === "}" ? "{" : "[";
            if (t.stack[t.stack.length - 1] !== a) {
              t = { kind: "other" };
              continue;
            }
            (t.stack.pop(), t.stack.length === 0 && (t.complete = !0));
          }
        }
      }
      this.structure = t;
    }
  },
  m0 = class {
    constructor(e, t = {}) {
      ((this.toolCalls = []),
        (this.toolCallsById = new Map()),
        (this.toolCallsByIndex = new Map()),
        (this.usedToolCallIds = new Set()),
        (this.nextGeneratedIdSuffixes = new Map()));
      var r, a;
      ((this.controller = e),
        (this._generateId = (r = t.generateId) != null ? r : Wr),
        (this.typeValidation = (a = t.typeValidation) != null ? a : "none"),
        (this.extractMetadata = t.extractMetadata),
        (this.buildToolCallProviderMetadata = t.buildToolCallProviderMetadata));
    }
    processDelta(e) {
      var t, r;
      let a = (t = e.function) == null ? void 0 : t.name,
        n = typeof a == "string" && a.trim().length === 0,
        s = this.getNonBlankString(e.id),
        i = this.getNonBlankString(a),
        { index: l } = e,
        d = this.resolveToolCall({
          wireId: s,
          index: l,
          name: i,
          hasExplicitCallStart: i != null && jh((r = e.function) == null ? void 0 : r.arguments),
        });
      if (d.kind === "ambiguous") return;
      let c;
      if (d.kind === "new") {
        if (n) return;
        c = this.processNewToolCall(e, { wireId: s, index: l, name: i });
      } else
        ((c = d.toolCall),
          s != null && this.associateWireId(c, s),
          this.processExistingToolCall(c, e));
      l != null && this.associateIndex(c, l);
    }
    flush() {
      let e = this.toolCalls.every((t) => t.index != null)
        ? [...this.toolCalls].sort((t, r) => t.index - r.index || t.sequence - r.sequence)
        : this.toolCalls;
      for (let t of e) t.hasFinished || this.finishToolCall(t);
    }
    resolveToolCall({ wireId: e, index: t, name: r, hasExplicitCallStart: a }) {
      let n = t != null ? this.toolCallsByIndex.get(t) : void 0,
        s = this.filterToolCallsByName(n, r);
      if (e != null) {
        let l = this.toolCallsById.get(e);
        if (l != null) {
          if (t != null) {
            let d = s.filter((u) => l.has(u)),
              c = this.resolveMatchingToolCall(d, a);
            return c.kind !== "new"
              ? c
              : r != null
                ? { kind: "new" }
                : n != null
                  ? { kind: "ambiguous" }
                  : this.resolveMatchingToolCall([...l], !1);
          }
          if (r != null) {
            let d = [...l].filter((c) => c.function.name === r);
            return this.resolveMatchingToolCall(d, a);
          }
          return this.resolveMatchingToolCall([...l], !1);
        }
        return s.length > 0
          ? a
            ? { kind: "new" }
            : this.resolveMatchingToolCall(s, !1)
          : { kind: "new" };
      }
      if (n != null) return this.resolveMatchingToolCall(s, a);
      if (r != null) return { kind: "new" };
      let i = this.toolCalls.filter((l) => !l.hasFinished);
      return i.length === 1
        ? { kind: "existing", toolCall: i[0] }
        : i.length > 1
          ? { kind: "ambiguous" }
          : { kind: "new" };
    }
    filterToolCallsByName(e, t) {
      return e == null ? [] : [...e].filter((r) => t == null || r.function.name === t);
    }
    resolveMatchingToolCall(e, t) {
      if (e.length === 0) return { kind: "new" };
      if (!t) return e.length === 1 ? { kind: "existing", toolCall: e[0] } : { kind: "ambiguous" };
      let r = e.filter((a) => !a.argumentState.hasCompleteStructuredValue);
      return r.length === 1
        ? { kind: "existing", toolCall: r[0] }
        : r.length > 1
          ? { kind: "ambiguous" }
          : { kind: "new" };
    }
    processNewToolCall(e, { wireId: t, index: r, name: a }) {
      var n, s, i, l, d;
      if (this.typeValidation === "required") {
        if (e.type !== "function") throw new mr({ data: e, message: "Expected 'function' type." });
      } else if (this.typeValidation === "if-present" && e.type != null && e.type !== "function")
        throw new mr({ data: e, message: "Expected 'function' type." });
      if (a == null) throw new mr({ data: e, message: "Expected 'function.name' to be a string." });
      let c = this.createToolCallId(t);
      this.controller.enqueue({ type: "tool-input-start", id: c, toolName: a });
      let u = {
        id: c,
        index: r ?? void 0,
        sequence: this.toolCalls.length,
        type: "function",
        function: {
          name: a,
          arguments: (s = (n = e.function) == null ? void 0 : n.arguments) != null ? s : "",
        },
        argumentState: new Dh(
          (l = (i = e.function) == null ? void 0 : i.arguments) != null ? l : ""
        ),
        hasFinished: !1,
        metadata: (d = this.extractMetadata) == null ? void 0 : d.call(this, e),
      };
      return (
        this.toolCalls.push(u),
        t != null && this.associateWireId(u, t),
        u.function.arguments.length > 0 &&
          this.controller.enqueue({
            type: "tool-input-delta",
            id: u.id,
            delta: u.function.arguments,
          }),
        u
      );
    }
    associateWireId(e, t) {
      let r = this.toolCallsById.get(t);
      (r == null && ((r = new Set()), this.toolCallsById.set(t, r)), r.add(e));
    }
    associateIndex(e, t) {
      let r = this.toolCallsByIndex.get(t);
      (r == null && ((r = new Set()), this.toolCallsByIndex.set(t, r)), r.add(e));
    }
    createToolCallId(e) {
      var t, r;
      if (e != null && !this.usedToolCallIds.has(e)) return (this.usedToolCallIds.add(e), e);
      let a = (t = this.getNonBlankString(this._generateId())) != null ? t : "tool-call";
      if (!this.usedToolCallIds.has(a)) return (this.usedToolCallIds.add(a), a);
      let n = (r = this.nextGeneratedIdSuffixes.get(a)) != null ? r : 1,
        s = n + this.usedToolCallIds.size;
      for (let i = n; i <= s; i++) {
        let l = `${a}-${i}`;
        if (!this.usedToolCallIds.has(l))
          return (this.usedToolCallIds.add(l), this.nextGeneratedIdSuffixes.set(a, i + 1), l);
      }
      throw new Error("Failed to create a unique tool call ID.");
    }
    getNonBlankString(e) {
      return e != null && e.trim().length > 0 ? e : void 0;
    }
    processExistingToolCall(e, t) {
      var r;
      !e.hasFinished &&
        ((r = t.function) == null ? void 0 : r.arguments) != null &&
        (e.argumentState.append(t.function.arguments),
        (e.function.arguments += t.function.arguments),
        this.controller.enqueue({
          type: "tool-input-delta",
          id: e.id,
          delta: t.function.arguments,
        }));
    }
    finishToolCall(e) {
      var t;
      this.controller.enqueue({ type: "tool-input-end", id: e.id });
      let r = (t = this.buildToolCallProviderMetadata) == null ? void 0 : t.call(this, e.metadata);
      (this.controller.enqueue({
        type: "tool-call",
        toolCallId: e.id,
        toolName: e.function.name,
        input: e.function.arguments,
        ...(r ? { providerMetadata: r } : {}),
      }),
        (e.hasFinished = !0));
    }
  };
function lu(e) {
  return e?.replace(/\/$/, "");
}
function qh(e) {
  return e != null && typeof e[Symbol.asyncIterator] == "function";
}
async function* uu({ execute: e, input: t, options: r }) {
  let a = e(t, r);
  if (qh(a)) {
    let n;
    for await (let s of a) ((n = s), yield { type: "preliminary", output: s });
    yield { type: "final", output: n };
  } else yield { type: "final", output: await a };
}
function f0(e) {
  let t = [];
  return JSON.stringify(e, function (r, a) {
    if (typeof a == "bigint") return a.toString();
    if (typeof a != "object" || a === null) return a;
    for (; t.length > 0 && t.at(-1) !== this;) t.pop();
    return t.includes(a) ? "[Circular]" : (t.push(a), a);
  });
}
var d_ = {};
Em(d_, {
  AISDKError: () => S,
  APICallError: () => ue,
  AbstractChat: () => n_,
  DefaultChatTransport: () => Im,
  DefaultGeneratedFile: () => Fr,
  DirectChatTransport: () => o_,
  DownloadError: () => Ue,
  EmptyResponseBodyError: () => Gn,
  Experimental_Agent: () => jb,
  HttpChatTransport: () => fi,
  InvalidArgumentError: () => Se,
  InvalidDataContentError: () => js,
  InvalidMessageRoleError: () => ep,
  InvalidPromptError: () => rr,
  InvalidResponseDataError: () => mr,
  InvalidStreamPartError: () => iy,
  InvalidToolApprovalError: () => tc,
  InvalidToolApprovalSignatureError: () => Os,
  InvalidToolInputError: () => Mn,
  JSONParseError: () => fr,
  JsonToSseTransformStream: () => ri,
  LoadAPIKeyError: () => zr,
  LoadSettingError: () => gl,
  MessageConversionError: () => np,
  MissingToolResultsError: () => Ns,
  NoContentGeneratedError: () => bl,
  NoImageGeneratedError: () => vc,
  NoObjectGeneratedError: () => St,
  NoOutputGeneratedError: () => Tn,
  NoSpeechGeneratedError: () => Mc,
  NoSuchModelError: () => Je,
  NoSuchProviderError: () => _m,
  NoSuchToolError: () => Mo,
  NoTranscriptGeneratedError: () => Ac,
  NoVideoGeneratedError: () => Pc,
  Output: () => Lp,
  RetryError: () => Hs,
  SerialJobExecutor: () => hm,
  TextStreamChatTransport: () => u_,
  TooManyEmbeddingValuesForCallError: () => Il,
  ToolCallNotFoundForApprovalError: () => Ao,
  ToolCallRepairError: () => Bc,
  ToolChoiceViolationError: () => Gs,
  ToolLoopAgent: () => jb,
  TypeValidationError: () => Ae,
  UIMessageStreamError: () => Kr,
  UI_MESSAGE_STREAM_HEADERS: () => ai,
  UnsupportedFunctionalityError: () => Cr,
  UnsupportedModelVersionError: () => Vr,
  addToolInputExamplesMiddleware: () => Fw,
  asSchema: () => nt,
  assistantModelMessageSchema: () => Ep,
  bindTelemetryIntegration: () => nb,
  callCompletionApi: () => r_,
  consumeStream: () => An,
  convertFileListToFileUIParts: () => xm,
  convertToModelMessages: () => ui,
  cosineSimilarity: () => cw,
  createAgentUIStream: () => di,
  createAgentUIStreamResponse: () => Gb,
  createDownload: () => ci,
  createGateway: () => _s,
  createIdGenerator: () => Gt,
  createProviderRegistry: () => Tm,
  createTextStreamResponse: () => ei,
  createUIMessageStream: () => Db,
  createUIMessageStreamResponse: () => ni,
  customProvider: () => vm,
  defaultEmbeddingSettingsMiddleware: () => Aw,
  defaultSettingsMiddleware: () => Ow,
  dynamicTool: () => nu,
  embed: () => Wb,
  embedMany: () => Yb,
  experimental_createProviderRegistry: () => Hw,
  experimental_customProvider: () => Jw,
  experimental_generateImage: () => aw,
  experimental_generateSpeech: () => ww,
  experimental_generateVideo: () => Mw,
  experimental_transcribe: () => Xw,
  extractJsonMiddleware: () => Pw,
  extractReasoningMiddleware: () => Dw,
  gateway: () => lo,
  generateId: () => Wr,
  generateImage: () => cm,
  generateObject: () => uw,
  generateText: () => Xp,
  getStaticToolName: () => En,
  getTextFromDataUrl: () => mw,
  getToolName: () => In,
  getToolOrDynamicToolName: () => Rb,
  hasToolCall: () => bb,
  isDataUIPart: () => Io,
  isDeepEqualData: () => xr,
  isDynamicToolUIPart: () => si,
  isFileUIPart: () => Eo,
  isLoopFinished: () => yb,
  isReasoningUIPart: () => Bs,
  isStaticToolUIPart: () => Sn,
  isTextUIPart: () => So,
  isToolOrDynamicToolUIPart: () => kb,
  isToolUIPart: () => Ze,
  jsonSchema: () => Ea,
  lastAssistantMessageIsCompleteWithApprovalResponses: () => s_,
  lastAssistantMessageIsCompleteWithToolCalls: () => i_,
  modelMessageSchema: () => kp,
  parseJsonEventStream: () => wr,
  parsePartialJson: () => ra,
  pipeAgentUIStreamToResponse: () => Hb,
  pipeTextStreamToResponse: () => ti,
  pipeUIMessageStreamToResponse: () => li,
  pruneMessages: () => Tw,
  readUIMessageStream: () => $b,
  registerTelemetryIntegration: () => rb,
  rerank: () => Zw,
  safeValidateUIMessages: () => im,
  simulateReadableStream: () => fw,
  simulateStreamingMiddleware: () => qw,
  smoothStream: () => Sw,
  stepCountIs: () => jo,
  streamObject: () => vw,
  streamText: () => am,
  systemModelMessageSchema: () => Ip,
  tool: () => au,
  toolModelMessageSchema: () => Mp,
  uiMessageChunkSchema: () => oi,
  userModelMessageSchema: () => Sp,
  validateUIMessages: () => Jb,
  wrapEmbeddingModel: () => Vw,
  wrapImageModel: () => mi,
  wrapLanguageModel: () => pi,
  wrapProvider: () => Bw,
  zodSchema: () => G,
});
var w0 = o;
var vd = _i(ys(), 1),
  yd = _i(ys(), 1),
  ig = "vercel.ai.gateway.error",
  bs = Symbol.for(ig),
  wu,
  _u,
  Ve = class rd extends ((_u = Error), (wu = bs), _u) {
    constructor({
      message: t,
      statusCode: r = 500,
      cause: a,
      generationId: n,
      isRetryable: s = r != null && (r === 408 || r === 409 || r === 429 || r >= 500),
    }) {
      (super(n ? `${t} [${n}]` : t),
        (this[wu] = !0),
        (this.statusCode = r),
        (this.cause = a),
        (this.generationId = n),
        (this.isRetryable = s));
    }
    static isInstance(t) {
      return rd.hasMarker(t);
    }
    static hasMarker(t) {
      return typeof t == "object" && t !== null && bs in t && t[bs] === !0;
    }
  },
  ad = "GatewayAuthenticationError",
  lg = `vercel.ai.gateway.error.${ad}`,
  Tu = Symbol.for(lg),
  xu,
  Iu,
  oo = class nd extends ((Iu = Ve), (xu = Tu), Iu) {
    constructor({
      message: t = "Authentication failed",
      statusCode: r = 401,
      cause: a,
      generationId: n,
    } = {}) {
      (super({ message: t, statusCode: r, cause: a, generationId: n }),
        (this[xu] = !0),
        (this.name = ad),
        (this.type = "authentication_error"));
    }
    static isInstance(t) {
      return Ve.hasMarker(t) && Tu in t;
    }
    static createContextualError({
      apiKeyProvided: t,
      oidcTokenProvided: r,
      message: a = "Authentication failed",
      statusCode: n = 401,
      cause: s,
      generationId: i,
    }) {
      let l;
      return (
        t
          ? (l = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`)
          : r
            ? (l = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys`)
            : (l = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`),
        new nd({ message: l, statusCode: n, cause: s, generationId: i })
      );
    }
  },
  od = "GatewayInvalidRequestError",
  ug = `vercel.ai.gateway.error.${od}`,
  Su = Symbol.for(ug),
  Eu,
  Mu,
  dg = class extends ((Mu = Ve), (Eu = Su), Mu) {
    constructor({
      message: e = "Invalid request",
      statusCode: t = 400,
      cause: r,
      generationId: a,
    } = {}) {
      (super({ message: e, statusCode: t, cause: r, generationId: a }),
        (this[Eu] = !0),
        (this.name = od),
        (this.type = "invalid_request_error"));
    }
    static isInstance(e) {
      return Ve.hasMarker(e) && Su in e;
    }
  },
  sd = "GatewayRateLimitError",
  cg = `vercel.ai.gateway.error.${sd}`,
  ku = Symbol.for(cg),
  Ru,
  Cu,
  pg = class extends ((Cu = Ve), (Ru = ku), Cu) {
    constructor({
      message: e = "Rate limit exceeded",
      statusCode: t = 429,
      cause: r,
      generationId: a,
    } = {}) {
      (super({ message: e, statusCode: t, cause: r, generationId: a }),
        (this[Ru] = !0),
        (this.name = sd),
        (this.type = "rate_limit_exceeded"));
    }
    static isInstance(e) {
      return Ve.hasMarker(e) && ku in e;
    }
  },
  id = "GatewayModelNotFoundError",
  mg = `vercel.ai.gateway.error.${id}`,
  Au = Symbol.for(mg),
  fg = Z(() => G(o.object({ modelId: o.string() }))),
  Ou,
  Nu,
  hg = class extends ((Nu = Ve), (Ou = Au), Nu) {
    constructor({
      message: e = "Model not found",
      statusCode: t = 404,
      modelId: r,
      cause: a,
      generationId: n,
    } = {}) {
      (super({ message: e, statusCode: t, cause: a, generationId: n }),
        (this[Ou] = !0),
        (this.name = id),
        (this.type = "model_not_found"),
        (this.modelId = r));
    }
    static isInstance(e) {
      return Ve.hasMarker(e) && Au in e;
    }
  },
  ld = "GatewayInternalServerError",
  gg = `vercel.ai.gateway.error.${ld}`,
  Pu = Symbol.for(gg),
  ju,
  Du,
  qu = class extends ((Du = Ve), (ju = Pu), Du) {
    constructor({
      message: e = "Internal server error",
      statusCode: t = 500,
      cause: r,
      generationId: a,
    } = {}) {
      (super({ message: e, statusCode: t, cause: r, generationId: a }),
        (this[ju] = !0),
        (this.name = ld),
        (this.type = "internal_server_error"));
    }
    static isInstance(e) {
      return Ve.hasMarker(e) && Pu in e;
    }
  },
  ud = "GatewayFailedDependencyError",
  vg = `vercel.ai.gateway.error.${ud}`,
  $u = Symbol.for(vg),
  Fu,
  Uu,
  yg = class extends ((Uu = Ve), (Fu = $u), Uu) {
    constructor({
      message: e = "Failed dependency",
      statusCode: t = 424,
      cause: r,
      generationId: a,
    } = {}) {
      (super({ message: e, statusCode: t, cause: r, generationId: a }),
        (this[Fu] = !0),
        (this.name = ud),
        (this.type = "failed_dependency"));
    }
    static isInstance(e) {
      return Ve.hasMarker(e) && $u in e;
    }
  },
  dd = "GatewayForbiddenError",
  bg = `vercel.ai.gateway.error.${dd}`,
  Vu = Symbol.for(bg),
  wg = Z(() => G(o.object({ ruleId: o.string() }))),
  Lu,
  zu,
  _g = class extends ((zu = Ve), (Lu = Vu), zu) {
    constructor({
      message: e = "Forbidden",
      statusCode: t = 403,
      cause: r,
      generationId: a,
      ruleId: n,
    } = {}) {
      (super({ message: e, statusCode: t, cause: r, generationId: a }),
        (this[Lu] = !0),
        (this.name = dd),
        (this.type = "forbidden"),
        (this.ruleId = n));
    }
    static isInstance(e) {
      return Ve.hasMarker(e) && Vu in e;
    }
  },
  cd = "GatewayResponseError",
  Tg = `vercel.ai.gateway.error.${cd}`,
  Bu = Symbol.for(Tg),
  Ju,
  Gu,
  xg = class extends ((Gu = Ve), (Ju = Bu), Gu) {
    constructor({
      message: e = "Invalid response from Gateway",
      statusCode: t = 502,
      response: r,
      validationError: a,
      cause: n,
      generationId: s,
      isRetryable: i,
    } = {}) {
      (super({ message: e, statusCode: t, cause: n, generationId: s, isRetryable: i }),
        (this[Ju] = !0),
        (this.name = cd),
        (this.type = "response_error"),
        (this.response = r),
        (this.validationError = a));
    }
    static isInstance(e) {
      return Ve.hasMarker(e) && Bu in e;
    }
  };
async function Hu({
  response: e,
  statusCode: t,
  defaultMessage: r = "Gateway request failed",
  cause: a,
  authMethod: n,
  isRetryable: s,
}) {
  var i;
  let l = await Re({ value: e, schema: Ig });
  if (!l.success) {
    let m = typeof e == "object" && e !== null && "generationId" in e ? e.generationId : void 0;
    return new xg({
      message: `Invalid error response format: ${r}`,
      statusCode: t,
      response: e,
      validationError: l.error,
      cause: a,
      generationId: m,
      isRetryable: s,
    });
  }
  let d = l.value,
    c = d.error.type,
    u = d.error.message,
    p = (i = d.generationId) != null ? i : void 0;
  switch (c) {
    case "authentication_error":
      return oo.createContextualError({
        apiKeyProvided: n === "api-key",
        oidcTokenProvided: n === "oidc",
        statusCode: t,
        cause: a,
        generationId: p,
      });
    case "invalid_request_error":
      return new dg({ message: u, statusCode: t, cause: a, generationId: p });
    case "rate_limit_exceeded":
      return new pg({ message: u, statusCode: t, cause: a, generationId: p });
    case "model_not_found": {
      let m = await Re({ value: d.error.param, schema: fg });
      return new hg({
        message: u,
        statusCode: t,
        modelId: m.success ? m.value.modelId : void 0,
        cause: a,
        generationId: p,
      });
    }
    case "internal_server_error":
      return new qu({ message: u, statusCode: t, cause: a, generationId: p });
    case "failed_dependency":
      return new yg({ message: u, statusCode: t, cause: a, generationId: p });
    case "forbidden": {
      let m = await Re({ value: d.error.param, schema: wg });
      return new _g({
        message: u,
        statusCode: t,
        cause: a,
        generationId: p,
        ruleId: m.success ? m.value.ruleId : void 0,
      });
    }
    default:
      return new qu({ message: u, statusCode: t, cause: a, generationId: p });
  }
}
var Ig = Z(() =>
  G(
    o.object({
      error: o.object({
        message: o.string(),
        type: o.string().nullish(),
        param: o.unknown().nullish(),
        code: o.union([o.string(), o.number()]).nullish(),
      }),
      generationId: o.string().nullish(),
    })
  )
);
function Sg(e) {
  if (e.data !== void 0) return e.data;
  if (e.responseBody != null)
    try {
      return no(e.responseBody);
    } catch {
      return e.responseBody;
    }
  return {};
}
var pd = "GatewayTimeoutError",
  Eg = `vercel.ai.gateway.error.${pd}`,
  Wu = Symbol.for(Eg),
  Zu,
  Ku,
  Yu = class md extends ((Ku = Ve), (Zu = Wu), Ku) {
    constructor({
      message: t = "Request timed out",
      statusCode: r = 408,
      cause: a,
      generationId: n,
    } = {}) {
      (super({ message: t, statusCode: r, cause: a, generationId: n }),
        (this[Zu] = !0),
        (this.name = pd),
        (this.type = "timeout_error"));
    }
    static isInstance(t) {
      return Ve.hasMarker(t) && Wu in t;
    }
    static createTimeoutError({
      originalMessage: t,
      statusCode: r = 408,
      cause: a,
      generationId: n,
    }) {
      let s = `Gateway request timed out: ${t}

    This is a client-side timeout. To resolve this, increase your timeout configuration: https://vercel.com/docs/ai-gateway/capabilities/video-generation#extending-timeouts-for-node.js`;
      return new md({ message: s, statusCode: r, cause: a, generationId: n });
    }
  };
function Xu(e) {
  if (!(e instanceof Error)) return !1;
  let t = e.code;
  return typeof t == "string"
    ? ["UND_ERR_HEADERS_TIMEOUT", "UND_ERR_BODY_TIMEOUT", "UND_ERR_CONNECT_TIMEOUT"].includes(t)
    : !1;
}
async function st(e, t) {
  var r;
  if (
    (e instanceof Error || (typeof DOMException == "function" && e instanceof DOMException)) &&
    (e.name === "AbortError" || e.name === "TimeoutError")
  )
    throw e;
  return Ve.isInstance(e)
    ? e
    : Xu(e)
      ? Yu.createTimeoutError({
          originalMessage: e instanceof Error ? e.message : "Unknown error",
          cause: e,
        })
      : ue.isInstance(e)
        ? e.cause && Xu(e.cause)
          ? Yu.createTimeoutError({ originalMessage: e.message, cause: e })
          : await Hu({
              response: Sg(e),
              statusCode: (r = e.statusCode) != null ? r : 500,
              defaultMessage: "Gateway request failed",
              cause: e,
              authMethod: t,
              isRetryable:
                e.isRetryable && (e.statusCode == null || e.statusCode < 400) ? !0 : void 0,
            })
        : await Hu({
            response: {},
            statusCode: 500,
            defaultMessage:
              e instanceof Error ? `Gateway request failed: ${e.message}` : "Unknown Gateway error",
            cause: e,
            authMethod: t,
          });
}
var fd = "ai-gateway-auth-method";
async function Ft(e) {
  let t = await Re({ value: e[fd], schema: Mg });
  return t.success ? t.value : void 0;
}
var Mg = Z(() => G(o.union([o.literal("api-key"), o.literal("oidc")]))),
  kg = ["embedding", "image", "language", "reranking", "speech", "transcription", "video"],
  Qu = class {
    constructor(e) {
      this.config = e;
    }
    async getAvailableModels() {
      try {
        let { value: e } = await Zr({
          url: `${this.config.baseURL}/config`,
          headers: await ae(this.config.headers()),
          successfulResponseHandler: We(Rg),
          failedResponseHandler: De({
            errorSchema: o.any(),
            errorToMessage: (t) => {
              var r;
              return (r = ke(t)) != null ? r : "unknown error";
            },
          }),
          fetch: this.config.fetch,
        });
        return e;
      } catch (e) {
        throw await st(e);
      }
    }
    async getCredits() {
      try {
        let e = new URL(this.config.baseURL),
          { value: t } = await Zr({
            url: `${e.origin}/v1/credits`,
            headers: await ae(this.config.headers()),
            successfulResponseHandler: We(Cg),
            failedResponseHandler: De({
              errorSchema: o.any(),
              errorToMessage: (r) => {
                var a;
                return (a = ke(r)) != null ? a : "unknown error";
              },
            }),
            fetch: this.config.fetch,
          });
        return t;
      } catch (e) {
        throw await st(e);
      }
    }
  },
  Rg = Z(() =>
    G(
      o.object({
        models: o
          .array(
            o.object({
              id: o.string(),
              name: o.string(),
              description: o.string().nullish(),
              pricing: o
                .object({
                  input: o.string(),
                  output: o.string(),
                  input_cache_read: o.string().nullish(),
                  input_cache_write: o.string().nullish(),
                })
                .transform(
                  ({ input: e, output: t, input_cache_read: r, input_cache_write: a }) => ({
                    input: e,
                    output: t,
                    ...(r ? { cachedInputTokens: r } : {}),
                    ...(a ? { cacheCreationInputTokens: a } : {}),
                  })
                )
                .nullish(),
              specification: o.object({
                specificationVersion: o.literal("v3"),
                provider: o.string(),
                modelId: o.string(),
              }),
              modelType: o.string().nullish(),
            })
          )
          .transform((e) => e.filter((t) => t.modelType == null || kg.includes(t.modelType))),
      })
    )
  ),
  Cg = Z(() =>
    G(
      o
        .object({ balance: o.string(), total_used: o.string() })
        .transform(({ balance: e, total_used: t }) => ({ balance: e, totalUsed: t }))
    )
  ),
  Ag = class {
    constructor(e) {
      this.config = e;
    }
    async getSpendReport(e) {
      try {
        let t = new URL(this.config.baseURL),
          r = new URLSearchParams();
        (r.set("start_date", e.startDate),
          r.set("end_date", e.endDate),
          e.groupBy && r.set("group_by", e.groupBy),
          e.datePart && r.set("date_part", e.datePart),
          e.userId && r.set("user_id", e.userId),
          e.model && r.set("model", e.model),
          e.provider && r.set("provider", e.provider),
          e.credentialType && r.set("credential_type", e.credentialType),
          e.tags && e.tags.length > 0 && r.set("tags", e.tags.join(",")));
        let { value: a } = await Zr({
          url: `${t.origin}/v1/report?${r.toString()}`,
          headers: await ae(this.config.headers()),
          successfulResponseHandler: We(Og),
          failedResponseHandler: De({
            errorSchema: o.any(),
            errorToMessage: (n) => {
              var s;
              return (s = ke(n)) != null ? s : "unknown error";
            },
          }),
          fetch: this.config.fetch,
        });
        return a;
      } catch (t) {
        throw await st(t);
      }
    }
  },
  Og = Z(() =>
    G(
      o.object({
        results: o.array(
          o
            .object({
              day: o.string().optional(),
              hour: o.string().optional(),
              user: o.string().optional(),
              model: o.string().optional(),
              tag: o.string().optional(),
              provider: o.string().optional(),
              credential_type: o.enum(["byok", "system"]).optional(),
              total_cost: o.number(),
              market_cost: o.number().optional(),
              input_tokens: o.number().optional(),
              output_tokens: o.number().optional(),
              cached_input_tokens: o.number().optional(),
              cache_creation_input_tokens: o.number().optional(),
              reasoning_tokens: o.number().optional(),
              request_count: o.number().optional(),
            })
            .transform(
              ({
                credential_type: e,
                total_cost: t,
                market_cost: r,
                input_tokens: a,
                output_tokens: n,
                cached_input_tokens: s,
                cache_creation_input_tokens: i,
                reasoning_tokens: l,
                request_count: d,
                ...c
              }) => ({
                ...c,
                ...(e !== void 0 ? { credentialType: e } : {}),
                totalCost: t,
                ...(r !== void 0 ? { marketCost: r } : {}),
                ...(a !== void 0 ? { inputTokens: a } : {}),
                ...(n !== void 0 ? { outputTokens: n } : {}),
                ...(s !== void 0 ? { cachedInputTokens: s } : {}),
                ...(i !== void 0 ? { cacheCreationInputTokens: i } : {}),
                ...(l !== void 0 ? { reasoningTokens: l } : {}),
                ...(d !== void 0 ? { requestCount: d } : {}),
              })
            )
        ),
      })
    )
  ),
  Ng = class {
    constructor(e) {
      this.config = e;
    }
    async getGenerationInfo(e) {
      try {
        let t = new URL(this.config.baseURL),
          { value: r } = await Zr({
            url: `${t.origin}/v1/generation?id=${encodeURIComponent(e.id)}`,
            headers: await ae(this.config.headers()),
            successfulResponseHandler: We(Pg),
            failedResponseHandler: De({
              errorSchema: o.any(),
              errorToMessage: (a) => {
                var n;
                return (n = ke(a)) != null ? n : "unknown error";
              },
            }),
            fetch: this.config.fetch,
          });
        return r;
      } catch (t) {
        throw await st(t);
      }
    }
  },
  Pg = Z(() =>
    G(
      o
        .object({
          data: o
            .object({
              id: o.string(),
              total_cost: o.number(),
              upstream_inference_cost: o.number(),
              usage: o.number(),
              created_at: o.string(),
              model: o.string(),
              is_byok: o.boolean(),
              provider_name: o.string(),
              streamed: o.boolean(),
              finish_reason: o.string(),
              latency: o.number(),
              generation_time: o.number(),
              native_tokens_prompt: o.number(),
              native_tokens_completion: o.number(),
              native_tokens_reasoning: o.number(),
              native_tokens_cached: o.number(),
              native_tokens_cache_creation: o.number(),
              billable_web_search_calls: o.number(),
            })
            .transform(
              ({
                total_cost: e,
                upstream_inference_cost: t,
                created_at: r,
                is_byok: a,
                provider_name: n,
                finish_reason: s,
                generation_time: i,
                native_tokens_prompt: l,
                native_tokens_completion: d,
                native_tokens_reasoning: c,
                native_tokens_cached: u,
                native_tokens_cache_creation: p,
                billable_web_search_calls: m,
                ..._
              }) => ({
                ..._,
                totalCost: e,
                upstreamInferenceCost: t,
                createdAt: r,
                isByok: a,
                providerName: n,
                finishReason: s,
                generationTime: i,
                promptTokens: l,
                completionTokens: d,
                reasoningTokens: c,
                cachedTokens: u,
                cacheCreationTokens: p,
                billableWebSearchCalls: m,
              })
            ),
        })
        .transform(({ data: e }) => e)
    )
  ),
  jg = class {
    constructor(e, t) {
      ((this.modelId = e),
        (this.config = t),
        (this.specificationVersion = "v3"),
        (this.supportedUrls = { "*/*": [/.*/] }));
    }
    get provider() {
      return this.config.provider;
    }
    async getArgs(e) {
      let { abortSignal: t, ...r } = e;
      return { args: this.maybeEncodeFileParts(r), warnings: [] };
    }
    async doGenerate(e) {
      var t;
      let { args: r, warnings: a } = await this.getArgs(e),
        { abortSignal: n } = e,
        s = await ae(this.config.headers());
      try {
        let {
          responseHeaders: i,
          value: l,
          rawValue: d,
        } = await vt({
          url: this.getUrl(),
          headers: gt(
            s,
            e.headers,
            this.getModelConfigHeaders(this.modelId, !1),
            await ae(this.config.o11yHeaders)
          ),
          body: r,
          successfulResponseHandler: We(o.any()),
          failedResponseHandler: De({
            errorSchema: o.any(),
            errorToMessage: (c) => {
              var u;
              return (u = ke(c)) != null ? u : "unknown error";
            },
          }),
          ...(n && { abortSignal: n }),
          fetch: this.config.fetch,
        });
        return {
          ...l,
          request: { body: r },
          response: { headers: i, body: d },
          warnings: [...((t = l.warnings) != null ? t : []), ...a],
        };
      } catch (i) {
        throw await st(i, await Ft(s));
      }
    }
    async doStream(e) {
      let { args: t, warnings: r } = await this.getArgs(e),
        { abortSignal: a } = e,
        n = await ae(this.config.headers());
      try {
        let { value: s, responseHeaders: i } = await vt({
          url: this.getUrl(),
          headers: gt(
            n,
            e.headers,
            this.getModelConfigHeaders(this.modelId, !0),
            await ae(this.config.o11yHeaders)
          ),
          body: t,
          successfulResponseHandler: iu(o.any()),
          failedResponseHandler: De({
            errorSchema: o.any(),
            errorToMessage: (l) => {
              var d;
              return (d = ke(l)) != null ? d : "unknown error";
            },
          }),
          ...(a && { abortSignal: a }),
          fetch: this.config.fetch,
        });
        return {
          stream: s.pipeThrough(
            new TransformStream({
              start(l) {
                r.length > 0 && l.enqueue({ type: "stream-start", warnings: r });
              },
              transform(l, d) {
                if (l.success) {
                  let c = l.value;
                  if (c.type === "raw" && !e.includeRawChunks) return;
                  (c.type === "response-metadata" &&
                    c.timestamp &&
                    typeof c.timestamp == "string" &&
                    (c.timestamp = new Date(c.timestamp)),
                    d.enqueue(c));
                } else d.error(l.error);
              },
            })
          ),
          request: { body: t },
          response: { headers: i },
        };
      } catch (s) {
        throw await st(s, await Ft(n));
      }
    }
    isFilePart(e) {
      return e && typeof e == "object" && "type" in e && e.type === "file";
    }
    maybeEncodeFileParts(e) {
      for (let t of e.prompt)
        for (let r of t.content)
          if (this.isFilePart(r)) {
            let a = r;
            if (a.data instanceof Uint8Array) {
              let n = Uint8Array.from(a.data),
                s = Buffer.from(n).toString("base64");
              a.data = new URL(`data:${a.mediaType || "application/octet-stream"};base64,${s}`);
            }
          }
      return e;
    }
    getUrl() {
      return `${this.config.baseURL}/language-model`;
    }
    getModelConfigHeaders(e, t) {
      return {
        "ai-language-model-specification-version": "3",
        "ai-language-model-id": e,
        "ai-language-model-streaming": String(t),
      };
    }
  },
  Dg = class {
    constructor(e, t) {
      ((this.modelId = e),
        (this.config = t),
        (this.specificationVersion = "v3"),
        (this.maxEmbeddingsPerCall = 2048),
        (this.supportsParallelCalls = !0));
    }
    get provider() {
      return this.config.provider;
    }
    async doEmbed({ values: e, headers: t, abortSignal: r, providerOptions: a }) {
      var n, s;
      let i = await ae(this.config.headers());
      try {
        let {
          responseHeaders: l,
          value: d,
          rawValue: c,
        } = await vt({
          url: this.getUrl(),
          headers: gt(i, t ?? {}, this.getModelConfigHeaders(), await ae(this.config.o11yHeaders)),
          body: { values: e, ...(a ? { providerOptions: a } : {}) },
          successfulResponseHandler: We($g),
          failedResponseHandler: De({
            errorSchema: o.any(),
            errorToMessage: (u) => {
              var p;
              return (p = ke(u)) != null ? p : "unknown error";
            },
          }),
          ...(r && { abortSignal: r }),
          fetch: this.config.fetch,
        });
        return {
          embeddings: d.embeddings,
          usage: (n = d.usage) != null ? n : void 0,
          providerMetadata: d.providerMetadata,
          response: { headers: l, body: c },
          warnings: (s = d.warnings) != null ? s : [],
        };
      } catch (l) {
        throw await st(l, await Ft(i));
      }
    }
    getUrl() {
      return `${this.config.baseURL}/embedding-model`;
    }
    getModelConfigHeaders() {
      return { "ai-embedding-model-specification-version": "3", "ai-model-id": this.modelId };
    }
  },
  qg = () =>
    o.discriminatedUnion("type", [
      o.object({
        type: o.literal("unsupported"),
        feature: o.string(),
        details: o.string().optional(),
      }),
      o.object({
        type: o.literal("compatibility"),
        feature: o.string(),
        details: o.string().optional(),
      }),
      o.object({ type: o.literal("other"), message: o.string() }),
    ]),
  $g = Z(() =>
    G(
      o.object({
        embeddings: o.array(o.array(o.number())),
        usage: o.object({ tokens: o.number() }).nullish(),
        warnings: o.array(qg()).optional(),
        providerMetadata: o.record(o.string(), o.record(o.string(), o.unknown())).optional(),
      })
    )
  );
function so(e) {
  return (e ?? []).map((t) =>
    t.type === "deprecated" ? { type: "other", message: t.message } : t
  );
}
var Fg = class {
  constructor(e, t) {
    ((this.modelId = e),
      (this.config = t),
      (this.specificationVersion = "v3"),
      (this.maxImagesPerCall = Number.MAX_SAFE_INTEGER));
  }
  get provider() {
    return this.config.provider;
  }
  async doGenerate({
    prompt: e,
    n: t,
    size: r,
    aspectRatio: a,
    seed: n,
    files: s,
    mask: i,
    providerOptions: l,
    headers: d,
    abortSignal: c,
  }) {
    var u, p, m;
    let _ = await ae(this.config.headers());
    try {
      let {
        responseHeaders: h,
        value: b,
        rawValue: y,
      } = await vt({
        url: this.getUrl(),
        headers: gt(_, d ?? {}, this.getModelConfigHeaders(), await ae(this.config.o11yHeaders)),
        body: {
          prompt: e,
          n: t,
          ...(r && { size: r }),
          ...(a && { aspectRatio: a }),
          ...(n && { seed: n }),
          ...(l && { providerOptions: l }),
          ...(s && { files: s.map((f) => ed(f)) }),
          ...(i && { mask: ed(i) }),
        },
        successfulResponseHandler: We(zg),
        failedResponseHandler: De({
          errorSchema: o.any(),
          errorToMessage: (f) => {
            var v;
            return (v = ke(f)) != null ? v : "unknown error";
          },
        }),
        ...(c && { abortSignal: c }),
        fetch: this.config.fetch,
      });
      return {
        images: b.images,
        ...(b.isRetryable != null && { isRetryable: b.isRetryable }),
        warnings: so(b.warnings),
        providerMetadata: b.providerMetadata,
        response: { timestamp: new Date(), modelId: this.modelId, headers: h },
        ...(b.usage != null && {
          usage: {
            inputTokens: (u = b.usage.inputTokens) != null ? u : void 0,
            outputTokens: (p = b.usage.outputTokens) != null ? p : void 0,
            totalTokens: (m = b.usage.totalTokens) != null ? m : void 0,
          },
        }),
      };
    } catch (h) {
      throw await st(h, await Ft(_));
    }
  }
  getUrl() {
    return `${this.config.baseURL}/image-model`;
  }
  getModelConfigHeaders() {
    return { "ai-image-model-specification-version": "3", "ai-model-id": this.modelId };
  }
};
function ed(e) {
  return e.type === "file" && e.data instanceof Uint8Array ? { ...e, data: At(e.data) } : e;
}
var Ug = () => o.object({ images: o.array(o.unknown()).optional() }).catchall(o.unknown()),
  Vg = () =>
    o.discriminatedUnion("type", [
      o.object({
        type: o.literal("unsupported"),
        feature: o.string(),
        details: o.string().optional(),
      }),
      o.object({
        type: o.literal("compatibility"),
        feature: o.string(),
        details: o.string().optional(),
      }),
      o.object({ type: o.literal("deprecated"), setting: o.string(), message: o.string() }),
      o.object({ type: o.literal("other"), message: o.string() }),
    ]),
  Lg = () =>
    o.object({
      inputTokens: o.number().nullish(),
      outputTokens: o.number().nullish(),
      totalTokens: o.number().nullish(),
    }),
  zg = Z(() =>
    G(
      o.object({
        images: o.array(o.string()),
        isRetryable: o.boolean().optional(),
        warnings: o.array(Vg()).optional(),
        providerMetadata: o.record(o.string(), Ug()).optional(),
        usage: Lg().optional(),
      })
    )
  ),
  Bg = class {
    constructor(e, t) {
      ((this.modelId = e),
        (this.config = t),
        (this.specificationVersion = "v3"),
        (this.maxVideosPerCall = Number.MAX_SAFE_INTEGER));
    }
    get provider() {
      return this.config.provider;
    }
    async doGenerate({
      prompt: e,
      n: t,
      aspectRatio: r,
      resolution: a,
      duration: n,
      fps: s,
      seed: i,
      generateAudio: l,
      image: d,
      frameImages: c,
      inputReferences: u,
      providerOptions: p,
      headers: m,
      abortSignal: _,
    }) {
      let h = await ae(this.config.headers());
      try {
        let { responseHeaders: b, value: y } = await vt({
          url: this.getUrl(),
          headers: gt(h, m ?? {}, this.getModelConfigHeaders(), await ae(this.config.o11yHeaders), {
            accept: "text/event-stream",
          }),
          body: {
            prompt: e,
            n: t,
            ...(r && { aspectRatio: r }),
            ...(a && { resolution: a }),
            ...(n && { duration: n }),
            ...(s && { fps: s }),
            ...(i && { seed: i }),
            ...(l !== void 0 && { generateAudio: l }),
            ...(p && { providerOptions: p }),
            ...(d && { image: ws(d) }),
            ...(c && { frameImages: c.map((f) => ({ ...f, image: ws(f.image) })) }),
            ...(u && { inputReferences: u.map((f) => ws(f)) }),
          },
          successfulResponseHandler: async ({ response: f, url: v, requestBodyValues: T }) => {
            if (f.body == null)
              throw new ue({
                message: "SSE response body is empty",
                url: v,
                requestBodyValues: T,
                statusCode: f.status,
              });
            let E = wr({ stream: f.body, schema: Wg }).getReader(),
              { done: g, value: x } = await E.read();
            if ((E.releaseLock(), g || !x))
              throw new ue({
                message: "SSE stream ended without a data event",
                url: v,
                requestBodyValues: T,
                statusCode: f.status,
              });
            if (!x.success)
              throw new ue({
                message: "Failed to parse video SSE event",
                cause: x.error,
                url: v,
                requestBodyValues: T,
                statusCode: f.status,
              });
            let M = x.value;
            if (M.type === "error")
              throw new ue({
                message: M.message,
                statusCode: M.statusCode,
                url: v,
                requestBodyValues: T,
                responseHeaders: Object.fromEntries([...f.headers]),
                responseBody: JSON.stringify(M),
                data: { error: { message: M.message, type: M.errorType, param: M.param } },
              });
            return {
              value: {
                videos: M.videos,
                warnings: M.warnings,
                providerMetadata: M.providerMetadata,
              },
              responseHeaders: Object.fromEntries([...f.headers]),
            };
          },
          failedResponseHandler: De({
            errorSchema: o.any(),
            errorToMessage: (f) => {
              var v;
              return (v = ke(f)) != null ? v : "unknown error";
            },
          }),
          ...(_ && { abortSignal: _ }),
          fetch: this.config.fetch,
        });
        return {
          videos: y.videos,
          warnings: so(y.warnings),
          providerMetadata: y.providerMetadata,
          response: { timestamp: new Date(), modelId: this.modelId, headers: b },
        };
      } catch (b) {
        throw await st(b, await Ft(h));
      }
    }
    getUrl() {
      return `${this.config.baseURL}/video-model`;
    }
    getModelConfigHeaders() {
      return { "ai-video-model-specification-version": "3", "ai-model-id": this.modelId };
    }
  };
function ws(e) {
  return e.type === "file" && e.data instanceof Uint8Array ? { ...e, data: At(e.data) } : e;
}
var Jg = () => o.object({ videos: o.array(o.unknown()).optional() }).catchall(o.unknown()),
  Gg = () =>
    o.union([
      o.object({ type: o.literal("url"), url: o.string(), mediaType: o.string() }),
      o.object({ type: o.literal("base64"), data: o.string(), mediaType: o.string() }),
    ]),
  Hg = () =>
    o.discriminatedUnion("type", [
      o.object({
        type: o.literal("unsupported"),
        feature: o.string(),
        details: o.string().optional(),
      }),
      o.object({
        type: o.literal("compatibility"),
        feature: o.string(),
        details: o.string().optional(),
      }),
      o.object({ type: o.literal("deprecated"), setting: o.string(), message: o.string() }),
      o.object({ type: o.literal("other"), message: o.string() }),
    ]),
  Wg = Z(() =>
    G(
      o.discriminatedUnion("type", [
        o.object({
          type: o.literal("result"),
          videos: o.array(Gg()),
          warnings: o.array(Hg()).optional(),
          providerMetadata: o.record(o.string(), Jg()).optional(),
        }),
        o.object({
          type: o.literal("error"),
          message: o.string(),
          errorType: o.string(),
          statusCode: o.number(),
          param: o.unknown().nullable(),
        }),
      ])
    )
  ),
  Zg = class {
    constructor(e, t) {
      ((this.modelId = e), (this.config = t), (this.specificationVersion = "v3"));
    }
    get provider() {
      return this.config.provider;
    }
    async doRerank({
      documents: e,
      query: t,
      topN: r,
      headers: a,
      abortSignal: n,
      providerOptions: s,
    }) {
      var i;
      let l = await ae(this.config.headers());
      try {
        let {
          responseHeaders: d,
          value: c,
          rawValue: u,
        } = await vt({
          url: this.getUrl(),
          headers: gt(l, a ?? {}, this.getModelConfigHeaders(), await ae(this.config.o11yHeaders)),
          body: {
            documents: e,
            query: t,
            ...(r != null ? { topN: r } : {}),
            ...(s ? { providerOptions: s } : {}),
          },
          successfulResponseHandler: We(Yg),
          failedResponseHandler: De({
            errorSchema: o.any(),
            errorToMessage: (p) => {
              var m;
              return (m = ke(p)) != null ? m : "unknown error";
            },
          }),
          ...(n && { abortSignal: n }),
          fetch: this.config.fetch,
        });
        return {
          ranking: c.ranking,
          providerMetadata: c.providerMetadata,
          response: { headers: d, body: u },
          warnings: (i = c.warnings) != null ? i : [],
        };
      } catch (d) {
        throw await st(d, await Ft(l));
      }
    }
    getUrl() {
      return `${this.config.baseURL}/reranking-model`;
    }
    getModelConfigHeaders() {
      return { "ai-reranking-model-specification-version": "3", "ai-model-id": this.modelId };
    }
  },
  Kg = () =>
    o.discriminatedUnion("type", [
      o.object({
        type: o.literal("unsupported"),
        feature: o.string(),
        details: o.string().optional(),
      }),
      o.object({
        type: o.literal("compatibility"),
        feature: o.string(),
        details: o.string().optional(),
      }),
      o.object({ type: o.literal("other"), message: o.string() }),
    ]),
  Yg = Z(() =>
    G(
      o.object({
        ranking: o.array(o.object({ index: o.number(), relevanceScore: o.number() })),
        warnings: o.array(Kg()).optional(),
        providerMetadata: o.record(o.string(), o.record(o.string(), o.unknown())).optional(),
      })
    )
  ),
  Xg = class {
    constructor(e, t) {
      ((this.modelId = e), (this.config = t), (this.specificationVersion = "v3"));
    }
    get provider() {
      return this.config.provider;
    }
    async doGenerate({
      text: e,
      voice: t,
      outputFormat: r,
      instructions: a,
      speed: n,
      language: s,
      providerOptions: i,
      headers: l,
      abortSignal: d,
    }) {
      let c = await ae(this.config.headers());
      try {
        let {
          responseHeaders: u,
          value: p,
          rawValue: m,
        } = await vt({
          url: this.getUrl(),
          headers: gt(c, l ?? {}, this.getModelConfigHeaders(), await ae(this.config.o11yHeaders)),
          body: {
            text: e,
            ...(t && { voice: t }),
            ...(r && { outputFormat: r }),
            ...(a && { instructions: a }),
            ...(n != null && { speed: n }),
            ...(s && { language: s }),
            ...(i && { providerOptions: i }),
          },
          successfulResponseHandler: We(tv),
          failedResponseHandler: De({
            errorSchema: o.any(),
            errorToMessage: (_) => {
              var h;
              return (h = ke(_)) != null ? h : "unknown error";
            },
          }),
          ...(d && { abortSignal: d }),
          fetch: this.config.fetch,
        });
        return {
          audio: p.audio,
          warnings: so(p.warnings),
          providerMetadata: p.providerMetadata,
          response: { timestamp: new Date(), modelId: this.modelId, headers: u, body: m },
        };
      } catch (u) {
        throw await st(u, await Ft(c ?? {}));
      }
    }
    getUrl() {
      return `${this.config.baseURL}/speech-model`;
    }
    getModelConfigHeaders() {
      return { "ai-speech-model-specification-version": "3", "ai-model-id": this.modelId };
    }
  },
  Qg = () => o.object({}).catchall(o.unknown()),
  ev = () =>
    o.discriminatedUnion("type", [
      o.object({
        type: o.literal("unsupported"),
        feature: o.string(),
        details: o.string().optional(),
      }),
      o.object({
        type: o.literal("compatibility"),
        feature: o.string(),
        details: o.string().optional(),
      }),
      o.object({ type: o.literal("deprecated"), setting: o.string(), message: o.string() }),
      o.object({ type: o.literal("other"), message: o.string() }),
    ]),
  tv = Z(() =>
    G(
      o.object({
        audio: o.string(),
        warnings: o.array(ev()).optional(),
        providerMetadata: o.record(o.string(), Qg()).optional(),
      })
    )
  ),
  rv = class {
    constructor(e, t) {
      ((this.modelId = e), (this.config = t), (this.specificationVersion = "v3"));
    }
    get provider() {
      return this.config.provider;
    }
    async doGenerate({ audio: e, mediaType: t, providerOptions: r, headers: a, abortSignal: n }) {
      var s, i, l;
      let d = await ae(this.config.headers());
      try {
        let {
          responseHeaders: c,
          value: u,
          rawValue: p,
        } = await vt({
          url: this.getUrl(),
          headers: gt(d, a ?? {}, this.getModelConfigHeaders(), await ae(this.config.o11yHeaders)),
          body: {
            audio: e instanceof Uint8Array ? At(e) : e,
            mediaType: t,
            ...(r && { providerOptions: r }),
          },
          successfulResponseHandler: We(ov),
          failedResponseHandler: De({
            errorSchema: o.any(),
            errorToMessage: (m) => {
              var _;
              return (_ = ke(m)) != null ? _ : "unknown error";
            },
          }),
          ...(n && { abortSignal: n }),
          fetch: this.config.fetch,
        });
        return {
          text: u.text,
          segments: (s = u.segments) != null ? s : [],
          language: (i = u.language) != null ? i : void 0,
          durationInSeconds: (l = u.durationInSeconds) != null ? l : void 0,
          warnings: so(u.warnings),
          providerMetadata: u.providerMetadata,
          response: { timestamp: new Date(), modelId: this.modelId, headers: c, body: p },
        };
      } catch (c) {
        throw await st(c, await Ft(d ?? {}));
      }
    }
    getUrl() {
      return `${this.config.baseURL}/transcription-model`;
    }
    getModelConfigHeaders() {
      return { "ai-transcription-model-specification-version": "3", "ai-model-id": this.modelId };
    }
  },
  av = () => o.object({}).catchall(o.unknown()),
  nv = () =>
    o.discriminatedUnion("type", [
      o.object({
        type: o.literal("unsupported"),
        feature: o.string(),
        details: o.string().optional(),
      }),
      o.object({
        type: o.literal("compatibility"),
        feature: o.string(),
        details: o.string().optional(),
      }),
      o.object({ type: o.literal("deprecated"), setting: o.string(), message: o.string() }),
      o.object({ type: o.literal("other"), message: o.string() }),
    ]),
  ov = Z(() =>
    G(
      o.object({
        text: o.string(),
        segments: o
          .array(o.object({ text: o.string(), startSecond: o.number(), endSecond: o.number() }))
          .optional(),
        language: o.string().nullish(),
        durationInSeconds: o.number().nullish(),
        warnings: o.array(nv()).optional(),
        providerMetadata: o.record(o.string(), av()).optional(),
      })
    )
  ),
  hd = () => o.record(o.string(), o.unknown()),
  sv = Z(() =>
    G(
      o.object({
        url: o.string().url().describe("URL of the page to fetch."),
        allow_redirects: o
          .boolean()
          .optional()
          .describe("Whether to follow HTTP redirects (default: false)."),
        allow_insecure_ssl: o
          .boolean()
          .optional()
          .describe(
            "Whether to bypass TLS certificate verification (default: false). Only use for trusted hosts."
          ),
        proxies: o
          .boolean()
          .optional()
          .describe("Whether to route the request through Browserbase proxies (default: false)."),
        format: o
          .enum(["raw", "json", "markdown"])
          .optional()
          .describe(
            "Output format. raw returns the response body unchanged, markdown returns page content as Markdown, and json returns structured content using schema."
          ),
        schema: hd()
          .optional()
          .describe("JSON Schema for structured extraction. Only use with format set to json."),
      })
    )
  ),
  iv = Z(() =>
    G(
      o.union([
        o.object({
          id: o.string(),
          content: o.union([o.string(), hd()]),
          contentType: o.string(),
          encoding: o.string(),
          headers: o.record(o.string(), o.string()),
          statusCode: o.number(),
        }),
        o.object({
          error: o.enum([
            "api_error",
            "configuration_error",
            "execution_error",
            "invalid_input",
            "rate_limit",
            "timeout",
            "unknown",
          ]),
          statusCode: o.number().optional(),
          message: o.string(),
        }),
      ])
    )
  ),
  lv = ot({ id: "gateway.browserbase_fetch", inputSchema: sv, outputSchema: iv }),
  uv = (e = {}) => lv(e),
  dv = Z(() =>
    G(
      o.object({
        query: o
          .string()
          .min(1)
          .max(200)
          .describe("Web search query. Must be between 1 and 200 characters."),
        num_results: o
          .number()
          .int()
          .min(1)
          .max(25)
          .optional()
          .describe("Maximum number of results to return (1-25, default: 10)."),
      })
    )
  ),
  cv = Z(() =>
    G(
      o.union([
        o.object({
          query: o.string(),
          requestId: o.string(),
          results: o.array(
            o.object({
              id: o.string(),
              title: o.string(),
              url: o.string(),
              author: o.string().optional(),
              favicon: o.string().optional(),
              image: o.string().optional(),
              publishedDate: o.string().optional(),
            })
          ),
        }),
        o.object({
          error: o.enum([
            "api_error",
            "configuration_error",
            "execution_error",
            "invalid_input",
            "rate_limit",
            "timeout",
            "unknown",
          ]),
          statusCode: o.number().optional(),
          message: o.string(),
        }),
      ])
    )
  ),
  pv = ot({ id: "gateway.browserbase_search", inputSchema: dv, outputSchema: cv }),
  mv = (e = {}) => pv(e),
  io = () =>
    o
      .object({
        error: o.enum([
          "api_error",
          "configuration_error",
          "execution_error",
          "gateway_rate_limit",
          "invalid_input",
          "rate_limit",
          "timeout",
          "unknown",
          "unknown_tool",
        ]),
        message: o.string(),
        statusCode: o.number().optional(),
        retryAfter: o.string().optional(),
        statusText: o.string().optional(),
      })
      .passthrough(),
  fv = Z(() =>
    G(
      o.object({
        url: o
          .string()
          .describe(
            "URL to fetch, at most 8192 characters; HTTP(S) only, without a username or password."
          ),
      })
    )
  ),
  hv = Z(() =>
    G(o.union([o.object({ title: o.string().nullish(), content: o.string() }).passthrough(), io()]))
  ),
  gv = ot({ id: "gateway.deepseek_fetch", inputSchema: fv, outputSchema: hv }),
  vv = (e = {}) => gv(e),
  yv = Z(() =>
    G(
      o.object({
        query: o
          .string()
          .describe(
            "Web search query, 1 to 128 Unicode characters. Supports site:, -site:, lang:, after:, before:, and quoted phrases."
          ),
        count: o.number().int().optional().describe("Number of results, 1 to 50 (default: 10)."),
        need_content: o
          .boolean()
          .optional()
          .describe("Include available page content (default: false)."),
        ori_question: o
          .string()
          .nullable()
          .optional()
          .describe("Original user question, 1 to 128 Unicode characters."),
      })
    )
  ),
  bv = Z(() =>
    G(
      o.union([
        o
          .object({
            results: o.array(
              o
                .object({
                  authority: o.number().nullish(),
                  content: o.string().nullish(),
                  date: o.string().nullish(),
                  rerank_score: o.number().nullish(),
                  site_icon: o.string().nullish(),
                  site_name: o.string().nullish(),
                  snippet: o.string().nullish(),
                  summary: o.string().nullish(),
                  title: o.string().nullish(),
                  url: o.string().nullish(),
                })
                .passthrough()
            ),
          })
          .passthrough(),
        io(),
      ])
    )
  ),
  wv = ot({ id: "gateway.deepseek_search", inputSchema: yv, outputSchema: bv }),
  _v = (e = {}) => wv(e),
  Tv = Z(() =>
    G(
      o.object({
        query: o.string().describe("Natural-language web search query. This is required."),
        type: o
          .enum(["auto", "fast", "instant"])
          .optional()
          .describe("Search method. Use auto for the default balance of speed and quality."),
        num_results: o
          .number()
          .optional()
          .describe("Maximum number of results to return (1-100, default: 10)."),
        category: o
          .enum([
            "company",
            "people",
            "research paper",
            "news",
            "personal site",
            "financial report",
          ])
          .optional()
          .describe("Optional content category to focus results."),
        user_location: o.string().optional().describe("Two-letter ISO country code such as 'US'."),
        include_domains: o
          .array(o.string())
          .optional()
          .describe("Only return results from these domains."),
        exclude_domains: o
          .array(o.string())
          .optional()
          .describe("Exclude results from these domains."),
        start_published_date: o
          .string()
          .optional()
          .describe("Only return links published after this ISO 8601 date."),
        end_published_date: o
          .string()
          .optional()
          .describe("Only return links published before this ISO 8601 date."),
        contents: o
          .object({
            text: o
              .union([
                o.boolean(),
                o.object({
                  max_characters: o.number().optional(),
                  include_html_tags: o.boolean().optional(),
                  verbosity: o.enum(["compact", "standard", "full"]).optional(),
                  include_sections: o
                    .array(
                      o.enum([
                        "header",
                        "navigation",
                        "banner",
                        "body",
                        "sidebar",
                        "footer",
                        "metadata",
                      ])
                    )
                    .optional(),
                  exclude_sections: o
                    .array(
                      o.enum([
                        "header",
                        "navigation",
                        "banner",
                        "body",
                        "sidebar",
                        "footer",
                        "metadata",
                      ])
                    )
                    .optional(),
                }),
              ])
              .optional(),
            highlights: o
              .union([
                o.boolean(),
                o.object({ query: o.string().optional(), max_characters: o.number().optional() }),
              ])
              .optional(),
            max_age_hours: o.number().optional(),
            livecrawl_timeout: o.number().optional(),
            subpages: o.number().optional(),
            subpage_target: o.union([o.string(), o.array(o.string())]).optional(),
            extras: o
              .object({ links: o.number().optional(), image_links: o.number().optional() })
              .optional(),
          })
          .optional()
          .describe("Controls extracted page content and freshness."),
      })
    )
  ),
  xv = Z(() =>
    G(
      o.union([
        o.object({
          requestId: o.string(),
          searchType: o.string().optional(),
          resolvedSearchType: o.string().optional(),
          results: o.array(
            o.object({
              title: o.string(),
              url: o.string(),
              id: o.string(),
              publishedDate: o.string().nullable().optional(),
              author: o.string().nullable().optional(),
              image: o.string().nullable().optional(),
              favicon: o.string().nullable().optional(),
              text: o.string().optional(),
              highlights: o.array(o.string()).optional(),
              highlightScores: o.array(o.number()).optional(),
              summary: o.string().optional(),
              subpages: o.array(o.any()).optional(),
              extras: o
                .object({
                  links: o.array(o.string()).optional(),
                  imageLinks: o.array(o.string()).optional(),
                })
                .optional(),
            })
          ),
          costDollars: o
            .object({ total: o.number().optional(), search: o.record(o.number()).optional() })
            .optional(),
        }),
        o.object({
          error: o.enum([
            "api_error",
            "rate_limit",
            "timeout",
            "invalid_input",
            "configuration_error",
            "execution_error",
            "unknown",
          ]),
          statusCode: o.number().optional(),
          message: o.string(),
        }),
      ])
    )
  ),
  Iv = ot({ id: "gateway.exa_search", inputSchema: Tv, outputSchema: xv }),
  Sv = (e = {}) => Iv(e),
  Ev = ["turbo", "fast", "basic", "advanced", "one-shot", "agentic"],
  Mv = Z(() =>
    G(
      o.object({
        objective: o
          .string()
          .describe(
            "Natural-language description of the web research goal, including source or freshness guidance and broader context from the task. Maximum 5000 characters."
          ),
        search_queries: o
          .array(o.string())
          .optional()
          .describe(
            "Provide 2-3 concise keyword queries, 3-6 words each (max 5, 200 chars each). Strongly recommended; the search runs on these queries."
          ),
        mode: o
          .enum(Ev)
          .optional()
          .describe(
            'Search mode: "turbo" and "fast" return quickly with shorter excerpts, "basic" is balanced (default), "advanced" is the most thorough. "turbo" supports English and Japanese only. "one-shot" and "agentic" are deprecated aliases of "basic" and "advanced".'
          ),
        max_results: o
          .number()
          .optional()
          .describe("Maximum number of results to return (1-20). Defaults to 10 if not specified."),
        source_policy: o
          .object({
            include_domains: o
              .array(o.string())
              .optional()
              .describe(
                "Domains or domain/path prefixes to restrict results to, without scheme or port. Example: ['wikipedia.org', 'docs.python.org/3']."
              ),
            exclude_domains: o
              .array(o.string())
              .optional()
              .describe(
                "Domains or domain/path prefixes to exclude, without scheme or port. Example: ['reddit.com']."
              ),
            after_date: o
              .string()
              .optional()
              .describe(
                "Only include results published on or after this date. Use an ISO 8601 calendar date formatted YYYY-MM-DD (e.g. 2025-01-01); do not include a time."
              ),
          })
          .optional()
          .describe(
            "Source policy for controlling which domains to include/exclude and freshness."
          ),
        excerpts: o
          .object({
            max_chars_per_result: o.number().optional().describe("Maximum characters per result."),
            max_chars_total: o
              .number()
              .optional()
              .describe("Deprecated: use the top-level max_chars_total."),
          })
          .optional()
          .describe("Excerpt configuration for controlling result length."),
        max_chars_total: o
          .number()
          .optional()
          .describe("Maximum total characters across all result excerpts."),
        fetch_policy: o
          .object({
            max_age_seconds: o
              .number()
              .optional()
              .describe(
                "Maximum age of cached content in seconds before a live fetch, minimum 600."
              ),
            timeout_seconds: o
              .number()
              .optional()
              .describe(
                "Timeout in seconds for a live fetch when content is not cached. Capped by the gateway tool timeout."
              ),
            disable_cache_fallback: o
              .boolean()
              .optional()
              .describe("Return an error instead of older cached content when a live fetch fails."),
          })
          .optional()
          .describe("Fetch policy for controlling content freshness."),
        location: o
          .string()
          .optional()
          .describe('ISO 3166-1 alpha-2 country code to localize results, e.g. "us".'),
      })
    )
  ),
  kv = Z(() =>
    G(
      o.union([
        o.object({
          search_id: o.string(),
          results: o.array(
            o.object({
              url: o.string(),
              title: o.string().nullable().optional(),
              publish_date: o.string().nullable().optional(),
              excerpts: o.array(o.string()),
            })
          ),
          warnings: o
            .array(
              o.object({
                type: o.string(),
                message: o.string(),
                detail: o.record(o.string(), o.unknown()).nullable().optional(),
              })
            )
            .nullable()
            .optional(),
          usage: o
            .array(o.object({ name: o.string(), count: o.number().optional() }))
            .nullable()
            .optional(),
          session_id: o.string().optional(),
        }),
        io(),
      ])
    )
  ),
  Rv = ot({ id: "gateway.parallel_search", inputSchema: Mv, outputSchema: kv }),
  Cv = (e = {}) => Rv(e),
  Av = Z(() =>
    G(
      o.object({
        query: o
          .union([o.string(), o.array(o.string())])
          .describe(
            "Search query (string) or multiple queries (array of up to 5 strings). Multi-query searches return combined results from all queries."
          ),
        max_results: o
          .number()
          .optional()
          .describe("Maximum number of search results to return (1-20, default: 10)"),
        max_tokens_per_page: o
          .number()
          .optional()
          .describe(
            "Maximum number of tokens to extract per search result page (256-2048, default: 2048)"
          ),
        max_tokens: o
          .number()
          .optional()
          .describe(
            "Maximum total tokens across all search results (default: 25000, max: 1000000)"
          ),
        country: o
          .string()
          .optional()
          .describe(
            "Two-letter ISO 3166-1 alpha-2 country code for regional search results (e.g., 'US', 'GB', 'FR')"
          ),
        search_domain_filter: o
          .array(o.string())
          .optional()
          .describe(
            "List of domains to include or exclude from search results (max 20). To include: ['nature.com', 'science.org']. To exclude: ['-example.com', '-spam.net']"
          ),
        search_language_filter: o
          .array(o.string())
          .optional()
          .describe(
            "List of ISO 639-1 language codes to filter results (max 10, lowercase). Examples: ['en', 'fr', 'de']"
          ),
        search_after_date: o
          .string()
          .optional()
          .describe(
            "Include only results published after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."
          ),
        search_before_date: o
          .string()
          .optional()
          .describe(
            "Include only results published before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."
          ),
        last_updated_after_filter: o
          .string()
          .optional()
          .describe(
            "Include only results last updated after this date. Format: 'MM/DD/YYYY' (e.g., '3/1/2025'). Cannot be used with search_recency_filter."
          ),
        last_updated_before_filter: o
          .string()
          .optional()
          .describe(
            "Include only results last updated before this date. Format: 'MM/DD/YYYY' (e.g., '3/15/2025'). Cannot be used with search_recency_filter."
          ),
        search_recency_filter: o
          .enum(["day", "week", "month", "year"])
          .optional()
          .describe(
            "Filter results by relative time period. Cannot be used with search_after_date or search_before_date."
          ),
      })
    )
  ),
  Ov = Z(() =>
    G(
      o.union([
        o.object({
          results: o.array(
            o.object({
              title: o.string(),
              url: o.string(),
              snippet: o.string(),
              date: o.string().optional(),
              lastUpdated: o.string().optional(),
            })
          ),
          id: o.string(),
        }),
        o.object({
          error: o.enum(["api_error", "rate_limit", "timeout", "invalid_input", "unknown"]),
          statusCode: o.number().optional(),
          message: o.string(),
        }),
      ])
    )
  ),
  Nv = ot({ id: "gateway.perplexity_search", inputSchema: Av, outputSchema: Ov }),
  Pv = (e = {}) => Nv(e),
  jv = () =>
    o.object({
      count: o
        .number()
        .optional()
        .describe(
          "Maximum number of data results to return (1-20). When include_contents is true, each additional result adds its own data surcharge."
        ),
      include_contents: o
        .boolean()
        .optional()
        .describe(
          "Inline rows for each data result. This adds a data surcharge based on row count and dataset source. To estimate cost, search with include_contents disabled and inspect cards.content.export_pricing. This applies to every returned card; limit sources.data.count and sources.data.max_rows to control cost."
        ),
      mode: o
        .enum(["inline", "url"])
        .optional()
        .describe("Requested data delivery mode. Search card data is always inline."),
      content_format: o
        .enum(["card_json", "csv", "json_compact", "json_records"])
        .optional()
        .describe("Serialization for inlined card data."),
      max_rows: o
        .number()
        .optional()
        .describe(
          "Maximum rows to inline per result. Omit to use the allowance in cards.content.export_pricing. A data surcharge applies per 1,000 exported rows; lower values reduce cost."
        ),
      node_ids: o
        .array(o.string())
        .optional()
        .describe("Data Graph node IDs to prioritize. Maximum 20."),
      strict: o
        .boolean()
        .optional()
        .describe("Only return cards matching node_ids. Requires a non-empty node_ids."),
    }),
  Dv = () =>
    o.object({
      count: o.number().optional().describe("Maximum number of web results to return (1-20)."),
      include_contents: o
        .boolean()
        .optional()
        .describe("Inline extracted web page text. This can add a data charge."),
      category: o
        .enum(["finance", "news", "sports"])
        .optional()
        .describe("Optional web-result category filter."),
      include_domains: o
        .array(o.string())
        .optional()
        .describe("Only return results from these bare domains."),
      exclude_domains: o
        .array(o.string())
        .optional()
        .describe("Exclude results from these bare domains."),
      snippet_max_chars: o
        .number()
        .optional()
        .describe("Maximum characters in each web-result snippet."),
      highlights: o
        .boolean()
        .optional()
        .describe("Include highlighted passages in web results. Defaults to true in AI Gateway."),
      article_content_max_chars: o
        .number()
        .optional()
        .describe("Maximum extracted characters per web page when including contents."),
      published_after: o
        .string()
        .optional()
        .describe("Keep results published on or after this ISO date (YYYY-MM-DD)."),
      published_before: o
        .string()
        .optional()
        .describe("Keep results published on or before this ISO date (YYYY-MM-DD)."),
    }),
  qv = Z(() =>
    G(
      o.object({
        query: o
          .string()
          .describe(
            'Natural-language search query. Include the entity, metric, and time period. Quote a phrase to force it to one entity, for example "Tesla":PRODUCT price.'
          ),
        effort: o
          .enum(["deep", "fast", "instant"])
          .optional()
          .describe(
            "Search effort. fast is the balanced default, instant favors cached results and low latency, and deep broadens retrieval with reranking at higher cost and latency."
          ),
        sources: o
          .object({ data: jv().optional(), web: Dv().optional() })
          .optional()
          .describe(
            "Sources to search. Omit to search both curated data and the web. When provided, only keys present are searched."
          ),
        location: o
          .object({
            latitude: o.number().describe("Latitude between -90 and 90."),
            longitude: o.number().describe("Longitude between -180 and 180."),
          })
          .optional()
          .describe("End-user coordinates for localized results."),
        country_code: o
          .string()
          .optional()
          .describe("Two-letter ISO 3166-1 country code, such as 'US'."),
        locale: o.string().optional().describe("BCP-47 locale, such as 'en-US'."),
        timezone: o.string().optional().describe("IANA timezone, such as 'America/New_York'."),
        output_settings: o
          .object({
            image_dark_mode: o
              .boolean()
              .optional()
              .describe("Render card preview images in dark mode."),
            force_refresh: o
              .boolean()
              .optional()
              .describe("Instant-effort only. Request a refreshed instant result."),
          })
          .optional()
          .describe("Controls card rendering in the search response."),
        include_related: o
          .number()
          .optional()
          .describe("Maximum related search suggestions to include (1-20)."),
      })
    )
  ),
  td = () => o.union([o.boolean(), o.number(), o.string()]).nullable(),
  gd = () =>
    o
      .object({
        content_format: o.enum(["card_json", "csv", "json_compact", "json_records"]).nullish(),
        cost: o.number().optional(),
        data: o.string().nullish(),
        records: o.array(o.record(o.string(), td())).nullish(),
        dataset: o
          .object({
            columns: o.array(
              o.object({
                name: o.string(),
                type: o.enum(["boolean", "date", "datetime", "number", "string"]),
                unit: o.string().nullish(),
              })
            ),
            rows: o.array(o.array(td())),
            total_rows: o.number(),
            truncated: o.boolean(),
            ref: o.string(),
            sources: o.array(
              o.object({ name: o.string(), index: o.enum(["data", "web"]).optional() })
            ),
            provenance: o.enum(["query", "web_extraction"]).optional(),
          })
          .nullish(),
        card_data: o.object({}).passthrough().nullish(),
        card_data_schema: o.object({}).passthrough().nullish(),
        url: o.string().nullish(),
        expires_at: o.string().nullish(),
        total_rows: o.number().nullish(),
        truncated: o.boolean().optional(),
        premium_rows: o.record(o.string(), o.number()).nullish(),
        redacted_cells: o.record(o.string(), o.array(o.number())).nullish(),
        total_matching: o.number().nullish(),
        export_pricing: o
          .object({
            baseline_usd: o.number(),
            free_rows: o.number().optional(),
            max_rows_ceiling: o.number(),
            row_cpm_usd: o.number(),
            premium_row_cpm_usd: o.record(o.string(), o.number()).nullish(),
            variable_cost_max_usd: o.number().nullish(),
          })
          .passthrough()
          .nullish(),
        manifest: o
          .array(
            o.object({
              dtype: o.enum(["boolean", "date", "datetime", "number", "string"]).nullish(),
              entity: o.string().nullish(),
              metric: o.string().nullish(),
              name: o.string().nullish(),
              unit: o.string().nullish(),
            })
          )
          .nullish(),
      })
      .passthrough(),
  $v = () =>
    o
      .object({
        card_id: o.string().nullish(),
        title: o.string().nullish(),
        description: o.string().nullish(),
        semantic_description: o.string().nullish(),
        webpage_url: o.string().nullish(),
        image_url: o.string().nullish(),
        embed_url: o.string().nullish(),
        sources: o
          .array(
            o.object({
              source_name: o.string().nullish(),
              source_description: o.string().nullish(),
              source_index: o.enum(["data", "web"]),
              source_text: o.string().nullish(),
              url: o.string().nullish(),
            })
          )
          .nullish(),
        methodologies: o
          .array(
            o.object({
              methodology_name: o.string().nullable(),
              methodology_description: o.string().nullable(),
            })
          )
          .nullish(),
        source_indexes: o.array(o.enum(["data", "web"])).nullish(),
        card_type: o.string().nullish(),
        relevance: o.enum(["High", "Low", "Medium"]).nullish(),
        relevance_score: o.number().nullish(),
        content: gd().nullish(),
        exportable: o.boolean().optional(),
        nodes: o
          .array(
            o.object({
              id: o.string(),
              type: o.enum(["entity", "metric"]),
              name: o.string(),
              description: o.string().nullish(),
            })
          )
          .nullish(),
        metric_definitions: o
          .array(o.object({ name: o.string(), definition: o.string() }))
          .nullish(),
        data_freshness: o
          .object({
            coverage_end: o.string().nullish(),
            data_as_of: o.string().nullish(),
            last_updated: o.string().nullish(),
          })
          .nullish(),
        placeholder: o
          .object({
            withheld_source: o.string(),
            reason: o.enum(["not_served", "over_cap"]).nullish(),
          })
          .passthrough()
          .nullish(),
      })
      .passthrough(),
  Fv = () =>
    o
      .object({
        title: o.string(),
        url: o.string(),
        snippet: o.string().nullish(),
        source_name: o.string().nullish(),
        publish_date: o.string().nullish(),
        content: gd().nullish(),
      })
      .passthrough(),
  Uv = Z(() =>
    G(
      o.union([
        o
          .object({
            request_id: o.string(),
            cards: o.array($v()).optional(),
            web_results: o.array(Fv()).optional(),
            usage: o
              .object({
                total_cost_usd: o.number(),
                compute: o.object({ cost_usd: o.number() }).passthrough().nullish(),
                data: o
                  .object({
                    cost_usd: o.number(),
                    datasets: o.number(),
                    data_points: o.number().nullish(),
                  })
                  .passthrough()
                  .nullish(),
                variable_cost: o.object({ cost_usd: o.number() }).passthrough().nullish(),
              })
              .passthrough()
              .nullish(),
            related: o.array(o.object({}).passthrough()).nullish(),
          })
          .passthrough(),
        io(),
      ])
    )
  ),
  Vv = ot({ id: "gateway.tako_search", inputSchema: qv, outputSchema: Uv }),
  Lv = (e = {}) => Vv(e),
  zv = {
    browserbaseFetch: uv,
    browserbaseSearch: mv,
    deepseekFetch: vv,
    deepseekSearch: _v,
    exaSearch: Sv,
    parallelSearch: Cv,
    perplexitySearch: Pv,
    takoSearch: Lv,
  };
async function Bv() {
  var e;
  return (e = (0, vd.getContext)().headers) == null ? void 0 : e["x-vercel-id"];
}
var Jv = "3.0.236",
  Gv = "0.0.1";
function _s(e = {}) {
  var t, r;
  let a = null,
    n = null,
    s = (t = e.metadataCacheRefreshMillis) != null ? t : 1e3 * 60 * 5,
    i = 0,
    l = (r = lu(e.baseURL)) != null ? r : "https://ai-gateway.vercel.sh/v3/ai",
    d = async () => {
      try {
        let I = await Hv(e);
        return Ne(
          {
            Authorization: `Bearer ${I.token}`,
            "ai-gateway-protocol-version": Gv,
            [fd]: I.authMethod,
            ...e.headers,
          },
          `ai-sdk/gateway/${Jv}`
        );
      } catch (I) {
        throw oo.createContextualError({
          apiKeyProvided: !1,
          oidcTokenProvided: !1,
          statusCode: 401,
          cause: I,
        });
      }
    },
    c = () => {
      let I = Sa({ settingValue: void 0, environmentVariableName: "VERCEL_DEPLOYMENT_ID" }),
        E = Sa({ settingValue: void 0, environmentVariableName: "VERCEL_ENV" }),
        g = Sa({ settingValue: void 0, environmentVariableName: "VERCEL_REGION" }),
        x = Sa({ settingValue: void 0, environmentVariableName: "VERCEL_PROJECT_ID" });
      return async () => {
        let M = await Bv();
        return {
          ...(I && { "ai-o11y-deployment-id": I }),
          ...(E && { "ai-o11y-environment": E }),
          ...(g && { "ai-o11y-region": g }),
          ...(M && { "ai-o11y-request-id": M }),
          ...(x && { "ai-o11y-project-id": x }),
        };
      };
    },
    u = (I) =>
      new jg(I, { provider: "gateway", baseURL: l, headers: d, fetch: e.fetch, o11yHeaders: c() }),
    p = async () => {
      var I, E, g;
      let x =
        (g =
          (E = (I = e._internal) == null ? void 0 : I.currentDate) == null
            ? void 0
            : E.call(I).getTime()) != null
          ? g
          : Date.now();
      return (
        (!a || x - i > s) &&
          ((i = x),
          (a = new Qu({ baseURL: l, headers: d, fetch: e.fetch })
            .getAvailableModels()
            .then((M) => ((n = M), M))
            .catch(async (M) => {
              throw await st(M, await Ft(await d()));
            }))),
        n ? Promise.resolve(n) : a
      );
    },
    m = async () =>
      new Qu({ baseURL: l, headers: d, fetch: e.fetch }).getCredits().catch(async (I) => {
        throw await st(I, await Ft(await d()));
      }),
    _ = async (I) =>
      new Ag({ baseURL: l, headers: d, fetch: e.fetch }).getSpendReport(I).catch(async (E) => {
        throw await st(E, await Ft(await d()));
      }),
    h = async (I) =>
      new Ng({ baseURL: l, headers: d, fetch: e.fetch }).getGenerationInfo(I).catch(async (E) => {
        throw await st(E, await Ft(await d()));
      }),
    b = function (I) {
      if (new.target)
        throw new Error(
          "The Gateway Provider model function cannot be called with the new keyword."
        );
      return u(I);
    };
  ((b.specificationVersion = "v3"),
    (b.getAvailableModels = p),
    (b.getCredits = m),
    (b.getSpendReport = _),
    (b.getGenerationInfo = h),
    (b.imageModel = (I) =>
      new Fg(I, { provider: "gateway", baseURL: l, headers: d, fetch: e.fetch, o11yHeaders: c() })),
    (b.languageModel = u));
  let y = (I) =>
    new Dg(I, { provider: "gateway", baseURL: l, headers: d, fetch: e.fetch, o11yHeaders: c() });
  ((b.embeddingModel = y),
    (b.textEmbeddingModel = y),
    (b.videoModel = (I) =>
      new Bg(I, {
        provider: "gateway",
        baseURL: l,
        headers: d,
        fetch: e.fetch,
        o11yHeaders: c(),
      })));
  let f = (I) =>
    new Zg(I, { provider: "gateway", baseURL: l, headers: d, fetch: e.fetch, o11yHeaders: c() });
  ((b.rerankingModel = f), (b.reranking = f));
  let v = (I) =>
    new Xg(I, { provider: "gateway", baseURL: l, headers: d, fetch: e.fetch, o11yHeaders: c() });
  ((b.speechModel = v), (b.speech = v));
  let T = (I) =>
    new rv(I, { provider: "gateway", baseURL: l, headers: d, fetch: e.fetch, o11yHeaders: c() });
  return (
    (b.transcriptionModel = T),
    (b.transcription = T),
    (b.chat = b.languageModel),
    (b.embedding = b.embeddingModel),
    (b.image = b.imageModel),
    (b.video = b.videoModel),
    (b.tools = zv),
    b
  );
}
var lo = _s();
async function Hv(e) {
  let t = Sa({ settingValue: e.apiKey, environmentVariableName: "AI_GATEWAY_API_KEY" });
  return t
    ? { token: t, authMethod: "api-key" }
    : { token: await (0, yd.getVercelOidcToken)(), authMethod: "oidc" };
}
var _r = "1.9.1";
var bd = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function Wv(e) {
  let t = new Set([e]),
    r = new Set(),
    a = e.match(bd);
  if (!a) return () => !1;
  let n = { major: +a[1], minor: +a[2], patch: +a[3], prerelease: a[4] };
  if (n.prerelease != null)
    return function (d) {
      return d === e;
    };
  function s(l) {
    return (r.add(l), !1);
  }
  function i(l) {
    return (t.add(l), !0);
  }
  return function (d) {
    if (t.has(d)) return !0;
    if (r.has(d)) return !1;
    let c = d.match(bd);
    if (!c) return s(d);
    let u = { major: +c[1], minor: +c[2], patch: +c[3], prerelease: c[4] };
    return u.prerelease != null || n.major !== u.major
      ? s(d)
      : n.major === 0
        ? n.minor === u.minor && n.patch <= u.patch
          ? i(d)
          : s(d)
        : n.minor <= u.minor
          ? i(d)
          : s(d);
  };
}
var wd = Wv(_r);
var Zv = _r.split(".")[0],
  hn = Symbol.for(`opentelemetry.js.api.${Zv}`),
  gn =
    typeof globalThis == "object"
      ? globalThis
      : typeof self == "object"
        ? self
        : typeof window == "object" || typeof window == "object"
          ? window
          : {};
function Ma(e, t, r, a = !1) {
  var n;
  let s = (gn[hn] = (n = gn[hn]) !== null && n !== void 0 ? n : { version: _r });
  if (!a && s[e]) {
    let i = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
    return (r.error(i.stack || i.message), !1);
  }
  if (s.version !== _r) {
    let i = new Error(
      `@opentelemetry/api: Registration of version v${s.version} for ${e} does not match previously registered API v${_r}`
    );
    return (r.error(i.stack || i.message), !1);
  }
  return ((s[e] = t), r.debug(`@opentelemetry/api: Registered a global for ${e} v${_r}.`), !0);
}
function Tr(e) {
  var t, r;
  let a = (t = gn[hn]) === null || t === void 0 ? void 0 : t.version;
  if (!(!a || !wd(a))) return (r = gn[hn]) === null || r === void 0 ? void 0 : r[e];
}
function ka(e, t) {
  t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${_r}.`);
  let r = gn[hn];
  r && delete r[e];
}
var uo = class {
  constructor(t) {
    this._namespace = t.namespace || "DiagComponentLogger";
  }
  debug(...t) {
    return vn("debug", this._namespace, t);
  }
  error(...t) {
    return vn("error", this._namespace, t);
  }
  info(...t) {
    return vn("info", this._namespace, t);
  }
  warn(...t) {
    return vn("warn", this._namespace, t);
  }
  verbose(...t) {
    return vn("verbose", this._namespace, t);
  }
};
function vn(e, t, r) {
  let a = Tr("diag");
  if (a) return a[e](t, ...r);
}
var yt;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"),
    (e[(e.ERROR = 30)] = "ERROR"),
    (e[(e.WARN = 50)] = "WARN"),
    (e[(e.INFO = 60)] = "INFO"),
    (e[(e.DEBUG = 70)] = "DEBUG"),
    (e[(e.VERBOSE = 80)] = "VERBOSE"),
    (e[(e.ALL = 9999)] = "ALL"));
})(yt || (yt = {}));
function _d(e, t) {
  (e < yt.NONE ? (e = yt.NONE) : e > yt.ALL && (e = yt.ALL), (t = t || {}));
  function r(a, n) {
    let s = t[a];
    return typeof s == "function" && e >= n ? s.bind(t) : function () {};
  }
  return {
    error: r("error", yt.ERROR),
    warn: r("warn", yt.WARN),
    info: r("info", yt.INFO),
    debug: r("debug", yt.DEBUG),
    verbose: r("verbose", yt.VERBOSE),
  };
}
var Kv = "diag",
  Dr = class e {
    static instance() {
      return (this._instance || (this._instance = new e()), this._instance);
    }
    constructor() {
      function t(n) {
        return function (...s) {
          let i = Tr("diag");
          if (i) return i[n](...s);
        };
      }
      let r = this,
        a = (n, s = { logLevel: yt.INFO }) => {
          var i, l, d;
          if (n === r) {
            let p = new Error(
              "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation"
            );
            return (r.error((i = p.stack) !== null && i !== void 0 ? i : p.message), !1);
          }
          typeof s == "number" && (s = { logLevel: s });
          let c = Tr("diag"),
            u = _d((l = s.logLevel) !== null && l !== void 0 ? l : yt.INFO, n);
          if (c && !s.suppressOverrideMessage) {
            let p =
              (d = new Error().stack) !== null && d !== void 0
                ? d
                : "<failed to generate stacktrace>";
            (c.warn(`Current logger will be overwritten from ${p}`),
              u.warn(`Current logger will overwrite one already registered from ${p}`));
          }
          return Ma("diag", u, r, !0);
        };
      ((r.setLogger = a),
        (r.disable = () => {
          ka(Kv, r);
        }),
        (r.createComponentLogger = (n) => new uo(n)),
        (r.verbose = t("verbose")),
        (r.debug = t("debug")),
        (r.info = t("info")),
        (r.warn = t("warn")),
        (r.error = t("error")));
    }
  };
function Td(e) {
  return Symbol.for(e);
}
var Ts = class e {
    constructor(t) {
      let r = this;
      ((r._currentContext = t ? new Map(t) : new Map()),
        (r.getValue = (a) => r._currentContext.get(a)),
        (r.setValue = (a, n) => {
          let s = new e(r._currentContext);
          return (s._currentContext.set(a, n), s);
        }),
        (r.deleteValue = (a) => {
          let n = new e(r._currentContext);
          return (n._currentContext.delete(a), n);
        }));
    }
  },
  xd = new Ts();
var co = class {
  active() {
    return xd;
  }
  with(t, r, a, ...n) {
    return r.call(a, ...n);
  }
  bind(t, r) {
    return r;
  }
  enable() {
    return this;
  }
  disable() {
    return this;
  }
};
var xs = "context",
  Yv = new co(),
  qr = class e {
    constructor() {}
    static getInstance() {
      return (this._instance || (this._instance = new e()), this._instance);
    }
    setGlobalContextManager(t) {
      return Ma(xs, t, Dr.instance());
    }
    active() {
      return this._getContextManager().active();
    }
    with(t, r, a, ...n) {
      return this._getContextManager().with(t, r, a, ...n);
    }
    bind(t, r) {
      return this._getContextManager().bind(t, r);
    }
    _getContextManager() {
      return Tr(xs) || Yv;
    }
    disable() {
      (this._getContextManager().disable(), ka(xs, Dr.instance()));
    }
  };
var po;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.SAMPLED = 1)] = "SAMPLED"));
})(po || (po = {}));
var Is = "0000000000000000",
  Ss = "00000000000000000000000000000000",
  Id = { traceId: Ss, spanId: Is, traceFlags: po.NONE };
var nr = class {
  constructor(t = Id) {
    this._spanContext = t;
  }
  spanContext() {
    return this._spanContext;
  }
  setAttribute(t, r) {
    return this;
  }
  setAttributes(t) {
    return this;
  }
  addEvent(t, r) {
    return this;
  }
  addLink(t) {
    return this;
  }
  addLinks(t) {
    return this;
  }
  setStatus(t) {
    return this;
  }
  updateName(t) {
    return this;
  }
  end(t) {}
  isRecording() {
    return !1;
  }
  recordException(t, r) {}
};
var Es = Td("OpenTelemetry Context Key SPAN");
function mo(e) {
  return e.getValue(Es) || void 0;
}
function Sd() {
  return mo(qr.getInstance().active());
}
function yn(e, t) {
  return e.setValue(Es, t);
}
function Ed(e) {
  return e.deleteValue(Es);
}
function Md(e, t) {
  return yn(e, new nr(t));
}
function fo(e) {
  var t;
  return (t = mo(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var ho = new Uint8Array([
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
  1, 1, 1, 1,
]);
function kd(e, t) {
  if (typeof e != "string" || e.length !== t) return !1;
  let r = 0;
  for (let a = 0; a < e.length; a += 4)
    r +=
      (ho[e.charCodeAt(a)] | 0) +
      (ho[e.charCodeAt(a + 1)] | 0) +
      (ho[e.charCodeAt(a + 2)] | 0) +
      (ho[e.charCodeAt(a + 3)] | 0);
  return r === t;
}
function Xv(e) {
  return kd(e, 32) && e !== Ss;
}
function Qv(e) {
  return kd(e, 16) && e !== Is;
}
function go(e) {
  return Xv(e.traceId) && Qv(e.spanId);
}
function Rd(e) {
  return new nr(e);
}
var Ms = qr.getInstance(),
  Ra = class {
    startSpan(t, r, a = Ms.active()) {
      if (!!r?.root) return new nr();
      let s = a && fo(a);
      return ey(s) && go(s) ? new nr(s) : new nr();
    }
    startActiveSpan(t, r, a, n) {
      let s, i, l;
      if (arguments.length < 2) return;
      arguments.length === 2
        ? (l = r)
        : arguments.length === 3
          ? ((s = r), (l = a))
          : ((s = r), (i = a), (l = n));
      let d = i ?? Ms.active(),
        c = this.startSpan(t, s, d),
        u = yn(d, c);
      return Ms.with(u, l, void 0, c);
    }
  };
function ey(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "spanId" in e &&
    typeof e.spanId == "string" &&
    "traceId" in e &&
    typeof e.traceId == "string" &&
    "traceFlags" in e &&
    typeof e.traceFlags == "number"
  );
}
var ty = new Ra(),
  vo = class {
    constructor(t, r, a, n) {
      ((this._provider = t), (this.name = r), (this.version = a), (this.options = n));
    }
    startSpan(t, r, a) {
      return this._getTracer().startSpan(t, r, a);
    }
    startActiveSpan(t, r, a, n) {
      let s = this._getTracer();
      return Reflect.apply(s.startActiveSpan, s, arguments);
    }
    _getTracer() {
      if (this._delegate) return this._delegate;
      let t = this._provider.getDelegateTracer(this.name, this.version, this.options);
      return t ? ((this._delegate = t), this._delegate) : ty;
    }
  };
var yo = class {
  getTracer(t, r, a) {
    return new Ra();
  }
};
var ry = new yo(),
  bn = class {
    getTracer(t, r, a) {
      var n;
      return (n = this.getDelegateTracer(t, r, a)) !== null && n !== void 0
        ? n
        : new vo(this, t, r, a);
    }
    getDelegate() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : ry;
    }
    setDelegate(t) {
      this._delegate = t;
    }
    getDelegateTracer(t, r, a) {
      var n;
      return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(t, r, a);
    }
  };
var Ca;
(function (e) {
  ((e[(e.UNSET = 0)] = "UNSET"), (e[(e.OK = 1)] = "OK"), (e[(e.ERROR = 2)] = "ERROR"));
})(Ca || (Ca = {}));
var bo = qr.getInstance();
var ks = "trace",
  wo = class e {
    constructor() {
      ((this._proxyTracerProvider = new bn()),
        (this.wrapSpanContext = Rd),
        (this.isSpanContextValid = go),
        (this.deleteSpan = Ed),
        (this.getSpan = mo),
        (this.getActiveSpan = Sd),
        (this.getSpanContext = fo),
        (this.setSpan = yn),
        (this.setSpanContext = Md));
    }
    static getInstance() {
      return (this._instance || (this._instance = new e()), this._instance);
    }
    setGlobalTracerProvider(t) {
      let r = Ma(ks, this._proxyTracerProvider, Dr.instance());
      return (r && this._proxyTracerProvider.setDelegate(t), r);
    }
    getTracerProvider() {
      return Tr(ks) || this._proxyTracerProvider;
    }
    getTracer(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }
    disable() {
      (ka(ks, Dr.instance()), (this._proxyTracerProvider = new bn()));
    }
  };
var Rs = wo.getInstance();
var ay = Object.defineProperty,
  ny = (e, t) => {
    for (var r in t) ay(e, r, { get: t[r], enumerable: !0 });
  },
  Gd = "AI_InvalidArgumentError",
  Hd = `vercel.ai.error.${Gd}`,
  oy = Symbol.for(Hd),
  Wd,
  Se = class extends S {
    constructor({ parameter: e, value: t, message: r }) {
      (super({ name: Gd, message: `Invalid argument for parameter ${e}: ${r}` }),
        (this[Wd] = !0),
        (this.parameter = e),
        (this.value = t));
    }
    static isInstance(e) {
      return S.hasMarker(e, Hd);
    }
  };
Wd = oy;
var Zd = "AI_InvalidStreamPartError",
  Kd = `vercel.ai.error.${Zd}`,
  sy = Symbol.for(Kd),
  Yd,
  iy = class extends S {
    constructor({ chunk: e, message: t }) {
      (super({ name: Zd, message: t }), (this[Yd] = !0), (this.chunk = e));
    }
    static isInstance(e) {
      return S.hasMarker(e, Kd);
    }
  };
Yd = sy;
var Xd = "AI_InvalidToolApprovalError",
  Qd = `vercel.ai.error.${Xd}`,
  ly = Symbol.for(Qd),
  ec,
  tc = class extends S {
    constructor({ approvalId: e }) {
      (super({
        name: Xd,
        message: `Tool approval response references unknown approvalId: "${e}". No matching tool-approval-request found in message history.`,
      }),
        (this[ec] = !0),
        (this.approvalId = e));
    }
    static isInstance(e) {
      return S.hasMarker(e, Qd);
    }
  };
ec = ly;
var rc = "AI_InvalidToolApprovalSignatureError",
  ac = `vercel.ai.error.${rc}`,
  uy = Symbol.for(ac),
  nc,
  Os = class extends S {
    constructor({ approvalId: e, toolCallId: t, reason: r }) {
      (super({
        name: rc,
        message: `Tool approval signature verification failed for approval "${e}" (tool call "${t}"): ${r}`,
      }),
        (this[nc] = !0),
        (this.approvalId = e),
        (this.toolCallId = t));
    }
    static isInstance(e) {
      return S.hasMarker(e, ac);
    }
  };
nc = uy;
var oc = "AI_InvalidToolInputError",
  sc = `vercel.ai.error.${oc}`,
  dy = Symbol.for(sc),
  ic,
  Mn = class extends S {
    constructor({
      toolInput: e,
      toolName: t,
      cause: r,
      message: a = `Invalid input for tool ${t}: ${qt(r)}`,
    }) {
      (super({ name: oc, message: a, cause: r }),
        (this[ic] = !0),
        (this.toolInput = e),
        (this.toolName = t));
    }
    static isInstance(e) {
      return S.hasMarker(e, sc);
    }
  };
ic = dy;
var lc = "AI_ToolCallNotFoundForApprovalError",
  uc = `vercel.ai.error.${lc}`,
  cy = Symbol.for(uc),
  dc,
  Ao = class extends S {
    constructor({ toolCallId: e, approvalId: t }) {
      (super({ name: lc, message: `Tool call "${e}" not found for approval request "${t}".` }),
        (this[dc] = !0),
        (this.toolCallId = e),
        (this.approvalId = t));
    }
    static isInstance(e) {
      return S.hasMarker(e, uc);
    }
  };
dc = cy;
var cc = "AI_MissingToolResultsError",
  pc = `vercel.ai.error.${cc}`,
  py = Symbol.for(pc),
  mc,
  Ns = class extends S {
    constructor({ toolCallIds: e }) {
      (super({
        name: cc,
        message: `Tool result${e.length > 1 ? "s are" : " is"} missing for tool call${e.length > 1 ? "s" : ""} ${e.join(", ")}.`,
      }),
        (this[mc] = !0),
        (this.toolCallIds = e));
    }
    static isInstance(e) {
      return S.hasMarker(e, pc);
    }
  };
mc = py;
var fc = "AI_NoImageGeneratedError",
  hc = `vercel.ai.error.${fc}`,
  my = Symbol.for(hc),
  gc,
  vc = class extends S {
    constructor({ message: e = "No image generated.", cause: t, responses: r }) {
      (super({ name: fc, message: e, cause: t }), (this[gc] = !0), (this.responses = r));
    }
    static isInstance(e) {
      return S.hasMarker(e, hc);
    }
  };
gc = my;
var yc = "AI_NoObjectGeneratedError",
  bc = `vercel.ai.error.${yc}`,
  fy = Symbol.for(bc),
  wc,
  St = class extends S {
    constructor({
      message: e = "No object generated.",
      cause: t,
      text: r,
      response: a,
      usage: n,
      finishReason: s,
    }) {
      (super({ name: yc, message: e, cause: t }),
        (this[wc] = !0),
        (this.text = r),
        (this.response = a),
        (this.usage = n),
        (this.finishReason = s));
    }
    static isInstance(e) {
      return S.hasMarker(e, bc);
    }
  };
wc = fy;
var _c = "AI_NoOutputGeneratedError",
  Tc = `vercel.ai.error.${_c}`,
  hy = Symbol.for(Tc),
  xc,
  Tn = class extends S {
    constructor({ message: e = "No output generated.", cause: t } = {}) {
      (super({ name: _c, message: e, cause: t }), (this[xc] = !0));
    }
    static isInstance(e) {
      return S.hasMarker(e, Tc);
    }
  };
xc = hy;
var Ic = "AI_NoSpeechGeneratedError",
  Sc = `vercel.ai.error.${Ic}`,
  gy = Symbol.for(Sc),
  Ec,
  Mc = class extends S {
    constructor(e) {
      (super({ name: Ic, message: "No speech audio generated." }),
        (this[Ec] = !0),
        (this.responses = e.responses));
    }
    static isInstance(e) {
      return S.hasMarker(e, Sc);
    }
  };
Ec = gy;
var kc = "AI_NoTranscriptGeneratedError",
  Rc = `vercel.ai.error.${kc}`,
  vy = Symbol.for(Rc),
  Cc,
  Ac = class extends S {
    constructor(e) {
      (super({ name: kc, message: "No transcript generated." }),
        (this[Cc] = !0),
        (this.responses = e.responses));
    }
    static isInstance(e) {
      return S.hasMarker(e, Rc);
    }
  };
Cc = vy;
var Ps = "AI_NoVideoGeneratedError",
  Oc = `vercel.ai.error.${Ps}`,
  yy = Symbol.for(Oc),
  Nc,
  Pc = class extends S {
    constructor({ message: e = "No video generated.", cause: t, responses: r }) {
      (super({ name: Ps, message: e, cause: t }), (this[Nc] = !0), (this.responses = r));
    }
    static isInstance(e) {
      return S.hasMarker(e, Oc);
    }
    static isNoVideoGeneratedError(e) {
      return e instanceof Error && e.name === Ps && typeof e.responses < "u";
    }
    toJSON() {
      return {
        name: this.name,
        message: this.message,
        stack: this.stack,
        cause: this.cause,
        responses: this.responses,
      };
    }
  };
Nc = yy;
var jc = "AI_NoSuchToolError",
  Dc = `vercel.ai.error.${jc}`,
  by = Symbol.for(Dc),
  qc,
  Mo = class extends S {
    constructor({
      toolName: e,
      availableTools: t = void 0,
      message:
        r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`,
    }) {
      (super({ name: jc, message: r }),
        (this[qc] = !0),
        (this.toolName = e),
        (this.availableTools = t));
    }
    static isInstance(e) {
      return S.hasMarker(e, Dc);
    }
  };
qc = by;
var $c = "AI_ToolChoiceViolationError",
  Fc = `vercel.ai.error.${$c}`,
  wy = Symbol.for(Fc),
  Uc,
  Gs = class extends S {
    constructor({
      toolChoice: e,
      finishReason: t,
      provider: r,
      modelId: a,
      content: n,
      message: s = e.type === "none"
        ? "Model response contained a tool call even though tool choice was none."
        : e.type === "required"
          ? "Model response did not contain a tool call even though tool choice was required."
          : `Model response did not contain a call to the required tool '${e.toolName}'.`,
    }) {
      (super({ name: $c, message: s }),
        (this[Uc] = !0),
        (this.toolChoice = e),
        (this.finishReason = t),
        (this.provider = r),
        (this.modelId = a),
        (this.content = n));
    }
    static isInstance(e) {
      return S.hasMarker(e, Fc);
    }
  };
Uc = wy;
var Vc = "AI_ToolCallRepairError",
  Lc = `vercel.ai.error.${Vc}`,
  _y = Symbol.for(Lc),
  zc,
  Bc = class extends S {
    constructor({
      cause: e,
      originalError: t,
      message: r = `Error repairing tool call: ${qt(e)}`,
    }) {
      (super({ name: Vc, message: r, cause: e }), (this[zc] = !0), (this.originalError = t));
    }
    static isInstance(e) {
      return S.hasMarker(e, Lc);
    }
  };
zc = _y;
var Vr = class extends S {
    constructor(e) {
      (super({
        name: "AI_UnsupportedModelVersionError",
        message: `Unsupported model version ${e.version} for provider "${e.provider}" and model "${e.modelId}". AI SDK 5 only supports models that implement specification version "v2".`,
      }),
        (this.version = e.version),
        (this.provider = e.provider),
        (this.modelId = e.modelId));
    }
  },
  Jc = "AI_UIMessageStreamError",
  Gc = `vercel.ai.error.${Jc}`,
  Ty = Symbol.for(Gc),
  Hc,
  Kr = class extends S {
    constructor({ chunkType: e, chunkId: t, message: r }) {
      (super({ name: Jc, message: r }), (this[Hc] = !0), (this.chunkType = e), (this.chunkId = t));
    }
    static isInstance(e) {
      return S.hasMarker(e, Gc);
    }
  };
Hc = Ty;
var Wc = "AI_InvalidDataContentError",
  Zc = `vercel.ai.error.${Wc}`,
  xy = Symbol.for(Zc),
  Kc,
  js = class extends S {
    constructor({
      content: e,
      cause: t,
      message:
        r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`,
    }) {
      (super({ name: Wc, message: r, cause: t }), (this[Kc] = !0), (this.content = e));
    }
    static isInstance(e) {
      return S.hasMarker(e, Zc);
    }
  };
Kc = xy;
var Yc = "AI_InvalidMessageRoleError",
  Xc = `vercel.ai.error.${Yc}`,
  Iy = Symbol.for(Xc),
  Qc,
  ep = class extends S {
    constructor({
      role: e,
      message:
        t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`,
    }) {
      (super({ name: Yc, message: t }), (this[Qc] = !0), (this.role = e));
    }
    static isInstance(e) {
      return S.hasMarker(e, Xc);
    }
  };
Qc = Iy;
var tp = "AI_MessageConversionError",
  rp = `vercel.ai.error.${tp}`,
  Sy = Symbol.for(rp),
  ap,
  np = class extends S {
    constructor({ originalMessage: e, message: t }) {
      (super({ name: tp, message: t }), (this[ap] = !0), (this.originalMessage = e));
    }
    static isInstance(e) {
      return S.hasMarker(e, rp);
    }
  };
ap = Sy;
var op = "AI_RetryError",
  sp = `vercel.ai.error.${op}`,
  Ey = Symbol.for(sp),
  ip,
  Hs = class extends S {
    constructor({ message: e, reason: t, errors: r }) {
      (super({ name: op, message: e }),
        (this[ip] = !0),
        (this.reason = t),
        (this.errors = r),
        (this.lastError = r[r.length - 1]));
    }
    static isInstance(e) {
      return S.hasMarker(e, sp);
    }
  };
ip = Ey;
function sr(e) {
  return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
async function it(e) {
  for (let t of sr(e.callbacks))
    if (t != null)
      try {
        await t(e.event);
      } catch {}
}
function My({ warning: e, provider: t, model: r }) {
  let a = `AI SDK Warning (${t} / ${r}):`;
  switch (e.type) {
    case "unsupported": {
      let n = `${a} The feature "${e.feature}" is not supported.`;
      return (e.details && (n += ` ${e.details}`), n);
    }
    case "compatibility": {
      let n = `${a} The feature "${e.feature}" is used in a compatibility mode.`;
      return (e.details && (n += ` ${e.details}`), n);
    }
    case "other":
      return `${a} ${e.message}`;
    default:
      return `${a} ${JSON.stringify(e, null, 2)}`;
  }
}
var ky =
    "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.",
  Cd = !1,
  Ot = (e) => {
    if (e.warnings.length === 0) return;
    let t = globalThis.AI_SDK_LOG_WARNINGS;
    if (t !== !1) {
      if (typeof t == "function") {
        t(e);
        return;
      }
      Cd || ((Cd = !0), console.info(ky));
      for (let r of e.warnings)
        console.warn(My({ warning: r, provider: e.provider, model: e.model }));
    }
  };
function kn({ provider: e, modelId: t }) {
  Ot({
    warnings: [
      {
        type: "compatibility",
        feature: "specificationVersion",
        details: "Using v2 specification compatibility mode. Some features may not be available.",
      },
    ],
    provider: e,
    model: t,
  });
}
function lp(e) {
  return e.specificationVersion === "v3"
    ? e
    : (kn({ provider: e.provider, modelId: e.modelId }),
      new Proxy(e, {
        get(t, r) {
          return r === "specificationVersion" ? "v3" : t[r];
        },
      }));
}
function up(e) {
  return e.specificationVersion === "v3"
    ? e
    : (kn({ provider: e.provider, modelId: e.modelId }),
      new Proxy(e, {
        get(t, r) {
          return r === "specificationVersion" ? "v3" : t[r];
        },
      }));
}
function dp(e) {
  return e.specificationVersion === "v3"
    ? e
    : (kn({ provider: e.provider, modelId: e.modelId }),
      new Proxy(e, {
        get(t, r) {
          switch (r) {
            case "specificationVersion":
              return "v3";
            case "doGenerate":
              return async (...a) => {
                let n = await t.doGenerate(...a);
                return { ...n, finishReason: cp(n.finishReason), usage: pp(n.usage) };
              };
            case "doStream":
              return async (...a) => {
                let n = await t.doStream(...a);
                return { ...n, stream: Ry(n.stream) };
              };
            default:
              return t[r];
          }
        },
      }));
}
function Ry(e) {
  return e.pipeThrough(
    new TransformStream({
      transform(t, r) {
        t.type === "finish"
          ? r.enqueue({ ...t, finishReason: cp(t.finishReason), usage: pp(t.usage) })
          : r.enqueue(t);
      },
    })
  );
}
function cp(e) {
  return { unified: e === "unknown" ? "other" : e, raw: void 0 };
}
function pp(e) {
  return {
    inputTokens: {
      total: e.inputTokens,
      noCache: void 0,
      cacheRead: e.cachedInputTokens,
      cacheWrite: void 0,
    },
    outputTokens: { total: e.outputTokens, text: void 0, reasoning: e.reasoningTokens },
    raw: e.totalTokens == null ? void 0 : { totalTokens: e.totalTokens },
  };
}
function mp(e) {
  return e.specificationVersion === "v3"
    ? e
    : (kn({ provider: e.provider, modelId: e.modelId }),
      new Proxy(e, {
        get(t, r) {
          return r === "specificationVersion" ? "v3" : t[r];
        },
      }));
}
function fp(e) {
  return e.specificationVersion === "v3"
    ? e
    : (kn({ provider: e.provider, modelId: e.modelId }),
      new Proxy(e, {
        get(t, r) {
          return r === "specificationVersion" ? "v3" : t[r];
        },
      }));
}
function Oa(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      let t = e;
      throw new Vr({ version: t.specificationVersion, provider: t.provider, modelId: t.modelId });
    }
    return dp(e);
  }
  return Xr().languageModel(e);
}
function hp(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      let t = e;
      throw new Vr({ version: t.specificationVersion, provider: t.provider, modelId: t.modelId });
    }
    return lp(e);
  }
  return Xr().embeddingModel(e);
}
function Cy(e) {
  var t, r;
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      let a = e;
      throw new Vr({ version: a.specificationVersion, provider: a.provider, modelId: a.modelId });
    }
    return fp(e);
  }
  return (r = (t = Xr()).transcriptionModel) == null ? void 0 : r.call(t, e);
}
function Ay(e) {
  var t, r;
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      let a = e;
      throw new Vr({ version: a.specificationVersion, provider: a.provider, modelId: a.modelId });
    }
    return mp(e);
  }
  return (r = (t = Xr()).speechModel) == null ? void 0 : r.call(t, e);
}
function Oy(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      let t = e;
      throw new Vr({ version: t.specificationVersion, provider: t.provider, modelId: t.modelId });
    }
    return up(e);
  }
  return Xr().imageModel(e);
}
function Ny(e) {
  if (typeof e == "string") {
    let r = Xr().videoModel;
    if (!r)
      throw new Error(
        'The default provider does not support video models. Please use a Experimental_VideoModelV3 object from a provider (e.g., vertex.video("model-id")).'
      );
    return r(e);
  }
  if (e.specificationVersion !== "v3") {
    let t = e;
    throw new Vr({ version: t.specificationVersion, provider: t.provider, modelId: t.modelId });
  }
  return e;
}
function Py(e) {
  if (typeof e == "string") {
    let r = Xr().rerankingModel;
    if (!r)
      throw new Error(
        'The default provider does not support reranking models. Please use a RerankingModel object from a provider (e.g., gateway.rerankingModel("model-id")).'
      );
    return r(e);
  }
  if (e.specificationVersion !== "v3") {
    let t = e;
    throw new Vr({ version: t.specificationVersion, provider: t.provider, modelId: t.modelId });
  }
  return e;
}
function Xr() {
  var e;
  return (e = globalThis.AI_SDK_DEFAULT_PROVIDER) != null ? e : lo;
}
function Ws(e) {
  if (e != null) return typeof e == "number" ? e : e.totalMs;
}
function gp(e) {
  if (!(e == null || typeof e == "number")) return e.stepMs;
}
function jy(e) {
  if (!(e == null || typeof e == "number")) return e.chunkMs;
}
var Na = [
    { mediaType: "image/gif", bytesPrefix: [71, 73, 70] },
    { mediaType: "image/png", bytesPrefix: [137, 80, 78, 71] },
    { mediaType: "image/jpeg", bytesPrefix: [255, 216] },
    {
      mediaType: "image/webp",
      bytesPrefix: [82, 73, 70, 70, null, null, null, null, 87, 69, 66, 80],
    },
    { mediaType: "image/bmp", bytesPrefix: [66, 77] },
    { mediaType: "image/tiff", bytesPrefix: [73, 73, 42, 0] },
    { mediaType: "image/tiff", bytesPrefix: [77, 77, 0, 42] },
    { mediaType: "image/avif", bytesPrefix: [0, 0, 0, 32, 102, 116, 121, 112, 97, 118, 105, 102] },
    { mediaType: "image/heic", bytesPrefix: [0, 0, 0, 32, 102, 116, 121, 112, 104, 101, 105, 99] },
  ],
  vp = [
    { mediaType: "audio/mpeg", bytesPrefix: [255, 251] },
    { mediaType: "audio/mpeg", bytesPrefix: [255, 250] },
    { mediaType: "audio/mpeg", bytesPrefix: [255, 243] },
    { mediaType: "audio/mpeg", bytesPrefix: [255, 242] },
    { mediaType: "audio/mpeg", bytesPrefix: [255, 227] },
    { mediaType: "audio/mpeg", bytesPrefix: [255, 226] },
    {
      mediaType: "audio/wav",
      bytesPrefix: [82, 73, 70, 70, null, null, null, null, 87, 65, 86, 69],
    },
    { mediaType: "audio/ogg", bytesPrefix: [79, 103, 103, 83] },
    { mediaType: "audio/flac", bytesPrefix: [102, 76, 97, 67] },
    { mediaType: "audio/aac", bytesPrefix: [64, 21, 0, 0] },
    { mediaType: "audio/mp4", bytesPrefix: [0, 0, 0, null, 102, 116, 121, 112] },
    { mediaType: "audio/webm", bytesPrefix: [26, 69, 223, 163] },
  ],
  Ds = [
    { mediaType: "video/mp4", bytesPrefix: [0, 0, 0, null, 102, 116, 121, 112] },
    { mediaType: "video/webm", bytesPrefix: [26, 69, 223, 163] },
    { mediaType: "video/quicktime", bytesPrefix: [0, 0, 0, 20, 102, 116, 121, 112, 113, 116] },
    { mediaType: "video/x-msvideo", bytesPrefix: [82, 73, 70, 70] },
  ],
  Dy = 18,
  qy = 12,
  $y = 128 * 1024,
  Fy = $y + qy;
function Ad(e, t) {
  if (typeof e != "string") return e.length > t ? e.subarray(0, t) : e;
  let r = Math.ceil(t / 3) * 4,
    a = Ct(e.substring(0, Math.min(e.length, r)));
  return a.length > t ? a.subarray(0, t) : a;
}
function Uy(e) {
  return e.length > 10 && e[0] === 73 && e[1] === 68 && e[2] === 51;
}
var Vy = (e) => {
  let t = ((e[6] & 127) << 21) | ((e[7] & 127) << 14) | ((e[8] & 127) << 7) | (e[9] & 127);
  return e.subarray(t + 10);
};
function Zt({ data: e, signatures: t }) {
  let r = Ad(e, Dy);
  Uy(r) && (r = Vy(Ad(e, Fy)));
  for (let a of t)
    if (r.length >= a.bytesPrefix.length && a.bytesPrefix.every((n, s) => n === null || r[s] === n))
      return a.mediaType;
}
var ir = "6.0.331",
  yp = async ({ url: e, maxBytes: t, abortSignal: r }) => {
    var a;
    let n = e.toString();
    try {
      let s = Ne({}, `ai-sdk/${ir}`, Ia()),
        i = await Qn({ url: n, headers: s, abortSignal: r });
      if (!i.ok)
        throw (await fn(i), new Ue({ url: n, statusCode: i.status, statusText: i.statusText }));
      return {
        data: await to({ response: i, url: n, maxBytes: t ?? eo }),
        mediaType: (a = i.headers.get("content-type")) != null ? a : void 0,
      };
    } catch (s) {
      throw Ue.isInstance(s) ? s : new Ue({ url: n, cause: s });
    }
  },
  Ly =
    (e = yp, t) =>
    (r) =>
      Promise.all(
        r.map(async (a) => (a.isUrlSupportedByModel ? null : await e({ ...a, abortSignal: t })))
      );
function Qr(e, t) {
  if (e === void 0 && t === void 0) return;
  if (e === void 0) return t;
  if (t === void 0) return e;
  let r = { ...e };
  for (let a in t)
    if (
      !(a === "__proto__" || a === "constructor" || a === "prototype") &&
      Object.prototype.hasOwnProperty.call(t, a)
    ) {
      let n = t[a];
      if (n === void 0) continue;
      let s = a in e ? e[a] : void 0,
        i =
          n !== null &&
          typeof n == "object" &&
          !Array.isArray(n) &&
          !(n instanceof Date) &&
          !(n instanceof RegExp),
        l =
          s != null &&
          typeof s == "object" &&
          !Array.isArray(s) &&
          !(s instanceof Date) &&
          !(s instanceof RegExp);
      i && l ? (r[a] = Qr(s, n)) : (r[a] = n);
    }
  return r;
}
function Zs(e) {
  try {
    let [t, r] = e.split(",");
    return { mediaType: t.split(";")[0].split(":")[1], base64Content: r };
  } catch {
    return { mediaType: void 0, base64Content: void 0 };
  }
}
var bp = o.union([
  o.string(),
  o.custom(mn, { message: "Must be a Uint8Array" }),
  o.custom(Xn, { message: "Must be an ArrayBuffer" }),
  o.custom(
    (e) => {
      var t, r;
      return (r = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? r : !1;
    },
    { message: "Must be a Buffer" }
  ),
]);
function Ks(e) {
  let t;
  if (mn(e)) return { data: Rn(e), mediaType: void 0 };
  if (Xn(e)) return { data: new Uint8Array(e), mediaType: void 0 };
  if (typeof e == "string")
    try {
      let r = new URL(e);
      ((t = r.toString() !== e ? e : void 0), (e = r));
    } catch {}
  if (e instanceof URL && e.protocol === "data:") {
    let { mediaType: r, base64Content: a } = Zs(e.toString());
    if (r == null || a == null)
      throw new S({
        name: "InvalidDataContentError",
        message: `Invalid data URL format in content ${e.toString()}`,
      });
    return { data: a, mediaType: r };
  }
  return { data: e, mediaType: void 0, ...(t != null ? { originalUrl: t } : {}) };
}
function qs(e) {
  return typeof e == "string" ? e : At(Rn(e));
}
function Rn(e) {
  if (mn(e)) {
    if (e instanceof Uint8Array) return e;
    let { buffer: t, byteOffset: r, byteLength: a } = e;
    return new Uint8Array(t, r, a);
  }
  if (typeof e == "string")
    try {
      return Ct(e);
    } catch (t) {
      throw new js({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t,
      });
    }
  if (Xn(e)) return new Uint8Array(e);
  throw new js({ content: e });
}
async function Oo({ prompt: e, supportedUrls: t, download: r, abortSignal: a }) {
  let n = await By(e.messages, r ?? Ly(void 0, a), t),
    s = [
      ...(e.system != null
        ? typeof e.system == "string"
          ? [{ role: "system", content: e.system }]
          : sr(e.system).map((d) => ({
              role: "system",
              content: d.content,
              providerOptions: d.providerOptions,
            }))
        : []),
      ...e.messages.map((d) => zy({ message: d, downloadedAssets: n })),
    ],
    i = [];
  for (let d of s) {
    if (d.role !== "tool") {
      i.push(d);
      continue;
    }
    let c = i.at(-1);
    if (c?.role === "tool") {
      let u = c.content.at(-1);
      (u != null &&
        c.providerOptions != null &&
        (u.providerOptions = Qr(c.providerOptions, u.providerOptions)),
        c.content.push(...d.content),
        (c.providerOptions = d.providerOptions));
    } else i.push(d);
  }
  let l = new Set();
  for (let d of i)
    switch (d.role) {
      case "assistant": {
        for (let c of d.content)
          c.type === "tool-call" && !c.providerExecuted && l.add(c.toolCallId);
        break;
      }
      case "tool": {
        for (let c of d.content) c.type === "tool-result" && l.delete(c.toolCallId);
        break;
      }
      case "user":
      case "system":
        if (l.size > 0) throw new Ns({ toolCallIds: Array.from(l) });
        break;
    }
  if (l.size > 0) throw new Ns({ toolCallIds: Array.from(l) });
  return i.filter((d) => d.role !== "tool" || d.content.length > 0);
}
function zy({ message: e, downloadedAssets: t }) {
  let r = e.role;
  switch (r) {
    case "system":
      return { role: "system", content: e.content, providerOptions: e.providerOptions };
    case "user":
      return typeof e.content == "string"
        ? {
            role: "user",
            content: [{ type: "text", text: e.content }],
            providerOptions: e.providerOptions,
          }
        : {
            role: "user",
            content: e.content
              .map((a) => Jy(a, t))
              .filter((a) => a.type !== "text" || a.text !== ""),
            providerOptions: e.providerOptions,
          };
    case "assistant":
      return typeof e.content == "string"
        ? {
            role: "assistant",
            content: [{ type: "text", text: e.content }],
            providerOptions: e.providerOptions,
          }
        : {
            role: "assistant",
            content: e.content
              .filter((a) => a.type !== "text" || a.text !== "" || a.providerOptions != null)
              .filter((a) => a.type !== "tool-approval-request")
              .map((a) => {
                let n = a.providerOptions;
                switch (a.type) {
                  case "file": {
                    let { data: s, mediaType: i } = Ks(a.data);
                    return {
                      type: "file",
                      data: s,
                      filename: a.filename,
                      mediaType: i ?? a.mediaType,
                      providerOptions: n,
                    };
                  }
                  case "reasoning":
                    return { type: "reasoning", text: a.text, providerOptions: n };
                  case "text":
                    return { type: "text", text: a.text, providerOptions: n };
                  case "tool-call":
                    return {
                      type: "tool-call",
                      toolCallId: a.toolCallId,
                      toolName: a.toolName,
                      input: a.input,
                      providerExecuted: a.providerExecuted,
                      providerOptions: n,
                    };
                  case "tool-result":
                    return {
                      type: "tool-result",
                      toolCallId: a.toolCallId,
                      toolName: a.toolName,
                      output: Od({ output: a.output, downloadedAssets: t }),
                      providerOptions: n,
                    };
                }
              }),
            providerOptions: e.providerOptions,
          };
    case "tool":
      return {
        role: "tool",
        content: e.content
          .filter((a) => a.type !== "tool-approval-response" || a.providerExecuted)
          .map((a) => {
            switch (a.type) {
              case "tool-result":
                return {
                  type: "tool-result",
                  toolCallId: a.toolCallId,
                  toolName: a.toolName,
                  output: Od({ output: a.output, downloadedAssets: t }),
                  providerOptions: a.providerOptions,
                };
              case "tool-approval-response":
                return {
                  type: "tool-approval-response",
                  approvalId: a.approvalId,
                  approved: a.approved,
                  reason: a.reason,
                };
            }
          }),
        providerOptions: e.providerOptions,
      };
    default: {
      let a = r;
      throw new ep({ role: a });
    }
  }
}
async function By(e, t, r) {
  var a;
  let n = [];
  for (let l of e) {
    if (l.role === "user" && Array.isArray(l.content))
      for (let d of l.content)
        (d.type === "image" || d.type === "file") &&
          n.push({
            data: d.type === "image" ? d.image : d.data,
            mediaType: (a = d.mediaType) != null ? a : d.type === "image" ? "image/*" : void 0,
          });
    if (l.role === "tool" || l.role === "assistant") {
      if (!Array.isArray(l.content)) continue;
      for (let d of l.content)
        if (d.type === "tool-result" && d.output.type === "content")
          for (let c of d.output.value)
            (c.type === "image-url" || c.type === "file-url") &&
              n.push({
                data: new URL(c.url),
                mediaType: c.type === "image-url" ? "image/*" : c.mediaType,
              });
    }
  }
  let s = n
      .map((l) => {
        let d = l.mediaType,
          { data: c } = Ks(l.data);
        return { mediaType: d, data: c };
      })
      .filter((l) => l.data instanceof URL)
      .map((l) => ({
        url: l.data,
        isUrlSupportedByModel:
          l.mediaType != null &&
          Yl({ url: l.data.toString(), mediaType: l.mediaType, supportedUrls: r }),
      })),
    i = await t(s);
  return Object.fromEntries(
    i
      .map((l, d) =>
        l == null ? null : [s[d].url.toString(), { data: l.data, mediaType: l.mediaType }]
      )
      .filter((l) => l != null)
  );
}
function Jy(e, t) {
  var r;
  if (e.type === "text") return { type: "text", text: e.text, providerOptions: e.providerOptions };
  let a,
    n = e.type;
  switch (n) {
    case "image":
      a = e.image;
      break;
    case "file":
      a = e.data;
      break;
    default:
      throw new Error(`Unsupported part type: ${n}`);
  }
  let { data: s, mediaType: i, originalUrl: l } = Ks(a),
    d = i ?? e.mediaType,
    c = s;
  if (c instanceof URL) {
    let u = t[c.toString()];
    u && ((c = u.data), d ?? (d = u.mediaType));
  }
  switch (n) {
    case "image":
      return (
        (c instanceof Uint8Array || typeof c == "string") &&
          (d = (r = Zt({ data: c, signatures: Na })) != null ? r : d),
        {
          type: "file",
          mediaType: d ?? "image/*",
          filename: void 0,
          data: c,
          ...(c instanceof URL && l != null ? { originalUrl: l } : {}),
          providerOptions: e.providerOptions,
        }
      );
    case "file": {
      if (d == null) throw new Error("Media type is missing for file part");
      return {
        type: "file",
        mediaType: d,
        filename: e.filename,
        data: c,
        ...(c instanceof URL && l != null ? { originalUrl: l } : {}),
        providerOptions: e.providerOptions,
      };
    }
  }
}
function Od({ output: e, downloadedAssets: t }) {
  return e.type !== "content"
    ? e
    : {
        type: "content",
        value: e.value.map((r) => {
          var a, n;
          if (r.type === "image-url") {
            let s = t[new URL(r.url).toString()];
            return s
              ? {
                  type: "image-data",
                  data: qs(s.data),
                  mediaType: (a = s.mediaType) != null ? a : "image/*",
                  providerOptions: r.providerOptions,
                }
              : r;
          }
          if (r.type === "file-url") {
            let s = t[new URL(r.url).toString()];
            return s
              ? {
                  type: "file-data",
                  data: qs(s.data),
                  mediaType: (n = s.mediaType) != null ? n : "application/octet-stream",
                  providerOptions: r.providerOptions,
                }
              : r;
          }
          return r.type !== "media"
            ? r
            : r.mediaType.startsWith("image/")
              ? { type: "image-data", data: r.data, mediaType: r.mediaType }
              : { type: "file-data", data: r.data, mediaType: r.mediaType };
        }),
      };
}
async function $r({ toolCallId: e, input: t, output: r, tool: a, errorMode: n }) {
  return n === "text"
    ? { type: "error-text", value: qt(r) }
    : n === "json"
      ? { type: "error-json", value: Nd(r) }
      : a?.toModelOutput
        ? await a.toModelOutput({ toolCallId: e, input: t, output: r })
        : typeof r == "string"
          ? { type: "text", value: r }
          : { type: "json", value: Nd(r) };
}
function Nd(e) {
  return e === void 0 ? null : e;
}
function Ur({
  maxOutputTokens: e,
  temperature: t,
  topP: r,
  topK: a,
  presencePenalty: n,
  frequencyPenalty: s,
  seed: i,
  stopSequences: l,
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new Se({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be an integer",
      });
    if (e < 1)
      throw new Se({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be >= 1",
      });
  }
  if (t != null && typeof t != "number")
    throw new Se({ parameter: "temperature", value: t, message: "temperature must be a number" });
  if (r != null && typeof r != "number")
    throw new Se({ parameter: "topP", value: r, message: "topP must be a number" });
  if (a != null && typeof a != "number")
    throw new Se({ parameter: "topK", value: a, message: "topK must be a number" });
  if (n != null && typeof n != "number")
    throw new Se({
      parameter: "presencePenalty",
      value: n,
      message: "presencePenalty must be a number",
    });
  if (s != null && typeof s != "number")
    throw new Se({
      parameter: "frequencyPenalty",
      value: s,
      message: "frequencyPenalty must be a number",
    });
  if (i != null && !Number.isInteger(i))
    throw new Se({ parameter: "seed", value: i, message: "seed must be an integer" });
  return {
    maxOutputTokens: e,
    temperature: t,
    topP: r,
    topK: a,
    presencePenalty: n,
    frequencyPenalty: s,
    stopSequences: l,
    seed: i,
  };
}
function Gy(e) {
  return e != null && Object.keys(e).length > 0;
}
async function wp({ tools: e, toolChoice: t, activeTools: r }) {
  if (!Gy(e)) return { tools: void 0, toolChoice: t === "none" ? { type: "none" } : void 0 };
  let a = r != null ? Object.entries(e).filter(([s]) => r.includes(s)) : Object.entries(e),
    n = [];
  for (let [s, i] of a) {
    let l = i.type;
    switch (l) {
      case void 0:
      case "dynamic":
      case "function":
        n.push({
          type: "function",
          name: s,
          description: i.description,
          inputSchema: await nt(i.inputSchema).jsonSchema,
          ...(i.inputExamples != null ? { inputExamples: i.inputExamples } : {}),
          providerOptions: i.providerOptions,
          ...(i.strict != null ? { strict: i.strict } : {}),
        });
        break;
      case "provider":
        n.push({ type: "provider", name: s, id: i.id, args: i.args });
        break;
      default: {
        let d = l;
        throw new Error(`Unsupported tool type: ${d}`);
      }
    }
  }
  return {
    tools: n,
    toolChoice:
      t == null
        ? { type: "auto" }
        : typeof t == "string"
          ? { type: t }
          : { type: "tool", toolName: t.toolName },
  };
}
var Yr = o.lazy(() =>
    o.union([
      o.null(),
      o.string(),
      o.number(),
      o.boolean(),
      o.record(o.string(), Yr.optional()),
      o.array(Yr),
    ])
  ),
  le = o.record(o.string(), o.record(o.string(), Yr.optional())),
  _p = o.object({ type: o.literal("text"), text: o.string(), providerOptions: le.optional() }),
  Hy = o.object({
    type: o.literal("image"),
    image: o.union([bp, o.instanceof(URL)]),
    mediaType: o.string().optional(),
    providerOptions: le.optional(),
  }),
  Tp = o.object({
    type: o.literal("file"),
    data: o.union([bp, o.instanceof(URL)]),
    filename: o.string().optional(),
    mediaType: o.string(),
    providerOptions: le.optional(),
  }),
  Wy = o.object({ type: o.literal("reasoning"), text: o.string(), providerOptions: le.optional() }),
  Zy = o.object({
    type: o.literal("tool-call"),
    toolCallId: o.string(),
    toolName: o.string(),
    input: o.unknown(),
    providerOptions: le.optional(),
    providerExecuted: o.boolean().optional(),
  }),
  Ky = o.discriminatedUnion("type", [
    o.object({ type: o.literal("text"), value: o.string(), providerOptions: le.optional() }),
    o.object({ type: o.literal("json"), value: Yr, providerOptions: le.optional() }),
    o.object({
      type: o.literal("execution-denied"),
      reason: o.string().optional(),
      providerOptions: le.optional(),
    }),
    o.object({ type: o.literal("error-text"), value: o.string(), providerOptions: le.optional() }),
    o.object({ type: o.literal("error-json"), value: Yr, providerOptions: le.optional() }),
    o.object({
      type: o.literal("content"),
      value: o.array(
        o.union([
          o.object({ type: o.literal("text"), text: o.string(), providerOptions: le.optional() }),
          o.object({ type: o.literal("media"), data: o.string(), mediaType: o.string() }),
          o.object({
            type: o.literal("file-data"),
            data: o.string(),
            mediaType: o.string(),
            filename: o.string().optional(),
            providerOptions: le.optional(),
          }),
          o.object({
            type: o.literal("file-url"),
            url: o.string(),
            mediaType: o.string().optional(),
            providerOptions: le.optional(),
          }),
          o.object({
            type: o.literal("file-id"),
            fileId: o.union([o.string(), o.record(o.string(), o.string())]),
            providerOptions: le.optional(),
          }),
          o.object({
            type: o.literal("image-data"),
            data: o.string(),
            mediaType: o.string(),
            providerOptions: le.optional(),
          }),
          o.object({
            type: o.literal("image-url"),
            url: o.string(),
            providerOptions: le.optional(),
          }),
          o.object({
            type: o.literal("image-file-id"),
            fileId: o.union([o.string(), o.record(o.string(), o.string())]),
            providerOptions: le.optional(),
          }),
          o.object({ type: o.literal("custom"), providerOptions: le.optional() }),
        ])
      ),
    }),
  ]),
  xp = o.object({
    type: o.literal("tool-result"),
    toolCallId: o.string(),
    toolName: o.string(),
    output: Ky,
    providerOptions: le.optional(),
  }),
  Yy = o.object({
    type: o.literal("tool-approval-request"),
    approvalId: o.string(),
    toolCallId: o.string(),
    signature: o.string().optional(),
    inputSchemaInput: o.unknown().optional(),
  }),
  Xy = o.object({
    type: o.literal("tool-approval-response"),
    approvalId: o.string(),
    approved: o.boolean(),
    reason: o.string().optional(),
  }),
  Ip = o.object({ role: o.literal("system"), content: o.string(), providerOptions: le.optional() }),
  Sp = o.object({
    role: o.literal("user"),
    content: o.union([o.string(), o.array(o.union([_p, Hy, Tp]))]),
    providerOptions: le.optional(),
  }),
  Ep = o.object({
    role: o.literal("assistant"),
    content: o.union([o.string(), o.array(o.union([_p, Tp, Wy, Zy, xp, Yy]))]),
    providerOptions: le.optional(),
  }),
  Mp = o.object({
    role: o.literal("tool"),
    content: o.array(o.union([xp, Xy])),
    providerOptions: le.optional(),
  }),
  kp = o.union([Ip, Sp, Ep, Mp]);
async function No({ allowSystemInMessages: e, system: t, prompt: r, messages: a }) {
  if (r == null && a == null)
    throw new rr({ prompt: r, message: "prompt or messages must be defined" });
  if (r != null && a != null)
    throw new rr({ prompt: r, message: "prompt and messages cannot be defined at the same time" });
  if (typeof t != "string" && !sr(t).every((s) => s.role === "system"))
    throw new rr({
      prompt: r,
      message: "system must be a string, SystemModelMessage, or array of SystemModelMessage",
    });
  if (r != null && typeof r == "string") a = [{ role: "user", content: r }];
  else if (r != null && Array.isArray(r)) a = r;
  else if (a == null) throw new rr({ prompt: r, message: "prompt or messages must be defined" });
  if (a.length === 0) throw new rr({ prompt: r, message: "messages must not be empty" });
  if (a.some((s) => s.role === "system")) {
    if (e === !1)
      throw new rr({
        prompt: r,
        message:
          "System messages are not allowed in the prompt or messages fields. Use the system option instead.",
      });
    e === void 0 &&
      console.warn(
        "AI SDK Warning: System messages in the prompt or messages fields can be a security risk because they may enable prompt injection attacks. Use the system option instead when possible. Set allowSystemInMessages to true to suppress this warning, or false to throw an error."
      );
  }
  let n = await Re({ value: a, schema: o.array(kp) });
  if (!n.success)
    throw new rr({
      prompt: r,
      message: "The messages do not match the ModelMessage[] schema.",
      cause: n.error,
    });
  return { messages: a, system: t };
}
function Aa(e) {
  if (!oo.isInstance(e)) return e;
  let t = (process == null ? void 0 : "production") === "production",
    r = "https://ai-sdk.dev/unauthenticated-ai-gateway";
  return t
    ? new S({
        name: "GatewayError",
        message: `Unauthenticated. Configure AI_GATEWAY_API_KEY or use a provider module. Learn more: ${r}`,
      })
    : Object.assign(
        new Error(`\x1B[1m\x1B[31mUnauthenticated request to AI Gateway.\x1B[0m

To authenticate, set the \x1B[33mAI_GATEWAY_API_KEY\x1B[0m environment variable with your API key.

Alternatively, you can use a provider module instead of the AI Gateway.

Learn more: \x1B[34m${r}\x1B[0m

`),
        { name: "GatewayAuthenticationError" }
      );
}
function lt({ operationId: e, telemetry: t }) {
  return {
    "operation.name": `${e}${t?.functionId != null ? ` ${t.functionId}` : ""}`,
    "resource.name": t?.functionId,
    "ai.operationId": e,
    "ai.telemetry.functionId": t?.functionId,
  };
}
function ea({ model: e, settings: t, telemetry: r, headers: a }) {
  var n;
  return {
    "ai.model.provider": e.provider,
    "ai.model.id": e.modelId,
    ...Object.entries(t).reduce((s, [i, l]) => {
      if (i === "timeout") {
        let d = Ws(l);
        d != null && (s[`ai.settings.${i}`] = d);
      } else s[`ai.settings.${i}`] = l;
      return s;
    }, {}),
    ...Object.entries((n = r?.metadata) != null ? n : {}).reduce(
      (s, [i, l]) => ((s[`ai.telemetry.metadata.${i}`] = l), s),
      {}
    ),
    ...Object.entries(a ?? {}).reduce(
      (s, [i, l]) => (l !== void 0 && (s[`ai.request.headers.${i}`] = l), s),
      {}
    ),
  };
}
var Qy = {
    startSpan() {
      return _o;
    },
    startActiveSpan(e, t, r, a) {
      if (typeof t == "function") return t(_o);
      if (typeof r == "function") return r(_o);
      if (typeof a == "function") return a(_o);
    },
  },
  _o = {
    spanContext() {
      return eb;
    },
    setAttribute() {
      return this;
    },
    setAttributes() {
      return this;
    },
    addEvent() {
      return this;
    },
    addLink() {
      return this;
    },
    addLinks() {
      return this;
    },
    setStatus() {
      return this;
    },
    updateName() {
      return this;
    },
    end() {
      return this;
    },
    isRecording() {
      return !1;
    },
    recordException() {
      return this;
    },
  },
  eb = { traceId: "", spanId: "", traceFlags: 0 };
function ta({ isEnabled: e = !1, tracer: t } = {}) {
  return e ? t || Rs.getTracer("ai") : Qy;
}
async function ut({
  name: e,
  tracer: t,
  attributes: r,
  fn: a,
  endWhenDone: n = !0,
  endOnError: s = n,
}) {
  return t.startActiveSpan(e, { attributes: await r }, async (i) => {
    let l = bo.active();
    try {
      let d = await bo.with(l, () => a(i));
      return (n && i.end(), d);
    } catch (d) {
      try {
        Rp(i, d);
      } finally {
        s && i.end();
      }
      throw d;
    }
  });
}
function Rp(e, t) {
  t instanceof Error
    ? (e.recordException({ name: t.name, message: t.message, stack: t.stack }),
      e.setStatus({ code: Ca.ERROR, message: t.message }))
    : e.setStatus({ code: Ca.ERROR });
}
function tb(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean";
}
function Cs(e) {
  if (!Array.isArray(e)) return e;
  let t = new Set(e.filter(tb).map((a) => typeof a));
  if (t.size !== 1) return;
  let [r] = t;
  return r === "string"
    ? e.filter((a) => typeof a == "string")
    : r === "number"
      ? e.filter((a) => typeof a == "number")
      : e.filter((a) => typeof a == "boolean");
}
async function he({ telemetry: e, attributes: t }) {
  if (e?.isEnabled !== !0) return {};
  let r = {};
  for (let [a, n] of Object.entries(t)) {
    if (n == null) continue;
    if (typeof n == "object" && "input" in n && typeof n.input == "function") {
      if (e?.recordInputs === !1) continue;
      let i = await n.input();
      if (i != null) {
        let l = Cs(i);
        l != null && (r[a] = l);
      }
      continue;
    }
    if (typeof n == "object" && "output" in n && typeof n.output == "function") {
      if (e?.recordOutputs === !1) continue;
      let i = await n.output();
      if (i != null) {
        let l = Cs(i);
        l != null && (r[a] = l);
      }
      continue;
    }
    let s = Cs(n);
    s != null && (r[a] = s);
  }
  return r;
}
function Po(e) {
  return JSON.stringify(
    e.map((t) => ({
      ...t,
      content:
        typeof t.content == "string"
          ? t.content
          : t.content.map((r) =>
              r.type === "file"
                ? { ...r, data: r.data instanceof Uint8Array ? qs(r.data) : r.data }
                : r
            ),
    }))
  );
}
function Cp(e) {
  if (e.type !== "provider") return e;
  let t = e.args;
  if (!wn(t)) return e;
  if (e.id === "openai.mcp")
    return {
      ...e,
      args: {
        ...t,
        ...(t.authorization != null ? { authorization: "[redacted]" } : {}),
        ...(wn(t.headers)
          ? { headers: Object.fromEntries(Object.keys(t.headers).map((s) => [s, "[redacted]"])) }
          : {}),
      },
    };
  let r =
    e.id === "openai.code_interpreter"
      ? "container"
      : e.id === "openai.shell"
        ? "environment"
        : void 0;
  if (r == null) return e;
  let a = t[r];
  if (!wn(a)) return e;
  let n = a.networkPolicy;
  return !wn(n) || !Array.isArray(n.domainSecrets)
    ? e
    : {
        ...e,
        args: {
          ...t,
          [r]: {
            ...a,
            networkPolicy: {
              ...n,
              domainSecrets: n.domainSecrets.map((s) =>
                wn(s) && "value" in s ? { ...s, value: "[redacted]" } : s
              ),
            },
          },
        },
      };
}
function wn(e) {
  return e != null && typeof e == "object" && !Array.isArray(e);
}
function rb(e) {
  (globalThis.AI_SDK_TELEMETRY_INTEGRATIONS || (globalThis.AI_SDK_TELEMETRY_INTEGRATIONS = []),
    globalThis.AI_SDK_TELEMETRY_INTEGRATIONS.push(e));
}
function ab() {
  var e;
  return (e = globalThis.AI_SDK_TELEMETRY_INTEGRATIONS) != null ? e : [];
}
function nb(e) {
  var t, r, a, n, s, i;
  return {
    onStart: (t = e.onStart) == null ? void 0 : t.bind(e),
    onStepStart: (r = e.onStepStart) == null ? void 0 : r.bind(e),
    onToolCallStart: (a = e.onToolCallStart) == null ? void 0 : a.bind(e),
    onToolCallFinish: (n = e.onToolCallFinish) == null ? void 0 : n.bind(e),
    onStepFinish: (s = e.onStepFinish) == null ? void 0 : s.bind(e),
    onFinish: (i = e.onFinish) == null ? void 0 : i.bind(e),
  };
}
function Ap() {
  let e = ab();
  return (t) => {
    let r = sr(t),
      a = [...e, ...r];
    function n(s) {
      let i = a.map(s).filter(Boolean);
      return async (l) => {
        for (let d of i)
          try {
            await d(l);
          } catch {}
      };
    }
    return {
      onStart: n((s) => s.onStart),
      onStepStart: n((s) => s.onStepStart),
      onToolCallStart: n((s) => s.onToolCallStart),
      onToolCallFinish: n((s) => s.onToolCallFinish),
      onStepFinish: n((s) => s.onStepFinish),
      onFinish: n((s) => s.onFinish),
    };
  };
}
function Pa(e) {
  return {
    inputTokens: e.inputTokens.total,
    inputTokenDetails: {
      noCacheTokens: e.inputTokens.noCache,
      cacheReadTokens: e.inputTokens.cacheRead,
      cacheWriteTokens: e.inputTokens.cacheWrite,
    },
    outputTokens: e.outputTokens.total,
    outputTokenDetails: {
      textTokens: e.outputTokens.text,
      reasoningTokens: e.outputTokens.reasoning,
    },
    totalTokens: It(e.inputTokens.total, e.outputTokens.total),
    raw: e.raw,
    reasoningTokens: e.outputTokens.reasoning,
    cachedInputTokens: e.inputTokens.cacheRead,
  };
}
function xo() {
  return {
    inputTokens: void 0,
    inputTokenDetails: { noCacheTokens: void 0, cacheReadTokens: void 0, cacheWriteTokens: void 0 },
    outputTokens: void 0,
    outputTokenDetails: { textTokens: void 0, reasoningTokens: void 0 },
    totalTokens: void 0,
    raw: void 0,
  };
}
function Op(e, t) {
  var r, a, n, s, i, l, d, c, u, p;
  let m = Pd(e) ? t.raw : Pd(t) ? e.raw : void 0;
  return {
    inputTokens: It(e.inputTokens, t.inputTokens),
    inputTokenDetails: {
      noCacheTokens: It(
        (r = e.inputTokenDetails) == null ? void 0 : r.noCacheTokens,
        (a = t.inputTokenDetails) == null ? void 0 : a.noCacheTokens
      ),
      cacheReadTokens: It(
        (n = e.inputTokenDetails) == null ? void 0 : n.cacheReadTokens,
        (s = t.inputTokenDetails) == null ? void 0 : s.cacheReadTokens
      ),
      cacheWriteTokens: It(
        (i = e.inputTokenDetails) == null ? void 0 : i.cacheWriteTokens,
        (l = t.inputTokenDetails) == null ? void 0 : l.cacheWriteTokens
      ),
    },
    outputTokens: It(e.outputTokens, t.outputTokens),
    outputTokenDetails: {
      textTokens: It(
        (d = e.outputTokenDetails) == null ? void 0 : d.textTokens,
        (c = t.outputTokenDetails) == null ? void 0 : c.textTokens
      ),
      reasoningTokens: It(
        (u = e.outputTokenDetails) == null ? void 0 : u.reasoningTokens,
        (p = t.outputTokenDetails) == null ? void 0 : p.reasoningTokens
      ),
    },
    totalTokens: It(e.totalTokens, t.totalTokens),
    reasoningTokens: It(e.reasoningTokens, t.reasoningTokens),
    cachedInputTokens: It(e.cachedInputTokens, t.cachedInputTokens),
    ...(m == null ? {} : { raw: m }),
  };
}
function Pd(e) {
  var t, r, a, n, s;
  return (
    e.inputTokens == null &&
    ((t = e.inputTokenDetails) == null ? void 0 : t.noCacheTokens) == null &&
    ((r = e.inputTokenDetails) == null ? void 0 : r.cacheReadTokens) == null &&
    ((a = e.inputTokenDetails) == null ? void 0 : a.cacheWriteTokens) == null &&
    e.outputTokens == null &&
    ((n = e.outputTokenDetails) == null ? void 0 : n.textTokens) == null &&
    ((s = e.outputTokenDetails) == null ? void 0 : s.reasoningTokens) == null &&
    e.totalTokens == null &&
    e.raw == null
  );
}
function It(e, t) {
  return e == null && t == null ? void 0 : (e ?? 0) + (t ?? 0);
}
function ob(e, t) {
  return {
    inputTokens: It(e.inputTokens, t.inputTokens),
    outputTokens: It(e.outputTokens, t.outputTokens),
    totalTokens: It(e.totalTokens, t.totalTokens),
  };
}
function sb({ error: e, exponentialBackoffDelay: t }) {
  let r = ue.isInstance(e)
    ? e.responseHeaders
    : ue.isInstance(e.cause)
      ? e.cause.responseHeaders
      : void 0;
  if (!r) return t;
  let a,
    n = r["retry-after-ms"];
  if (n) {
    let i = parseFloat(n);
    Number.isNaN(i) || (a = i);
  }
  let s = r["retry-after"];
  if (s && a === void 0) {
    let i = parseFloat(s);
    Number.isNaN(i) ? (a = Date.parse(s) - Date.now()) : (a = i * 1e3);
  }
  return a != null && !Number.isNaN(a) && 0 <= a && (a < 60 * 1e3 || a < t) ? a : t;
}
var ib = ({
  maxRetries: e = 2,
  initialDelayInMs: t = 2e3,
  backoffFactor: r = 2,
  abortSignal: a,
  additionalRetryableError: n,
} = {}) =>
  ou({
    maxRetries: e,
    initialDelayInMs: t,
    backoffFactor: r,
    abortSignal: a,
    shouldRetry: async (s) =>
      (s instanceof Error &&
        ((ue.isInstance(s) && s.isRetryable === !0) ||
          (Ve.isInstance(s) && s.isRetryable === !0))) ||
      (n != null && (await n(s))),
    getDelayInMs: ({ error: s, exponentialBackoffDelay: i }) =>
      sb({ error: s, exponentialBackoffDelay: i }),
    createRetryError: ({ message: s, reason: i, errors: l }) =>
      new Hs({ message: s, reason: i, errors: l }),
  });
function Kt({ maxRetries: e, abortSignal: t, additionalRetryableError: r }) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new Se({ parameter: "maxRetries", value: e, message: "maxRetries must be an integer" });
    if (e < 0)
      throw new Se({ parameter: "maxRetries", value: e, message: "maxRetries must be >= 0" });
  }
  let a = e ?? 2;
  return {
    maxRetries: a,
    retry: ib({ maxRetries: a, abortSignal: t, additionalRetryableError: r }),
  };
}
function $s({ abortController: e, label: t, timeoutMs: r }) {
  if (!(e == null || r == null))
    return setTimeout(
      () => e.abort(new DOMException(`${t} timeout of ${r}ms exceeded`, "TimeoutError")),
      r
    );
}
function Np({ messages: e }) {
  let t = e.at(-1);
  if (t?.role != "tool") return { approvedToolApprovals: [], deniedToolApprovals: [] };
  let r = {};
  for (let c of e)
    if (c.role === "assistant" && typeof c.content != "string") {
      let u = c.content;
      for (let p of u) p.type === "tool-call" && (r[p.toolCallId] = p);
    }
  let a = {};
  for (let c of e)
    if (c.role === "assistant" && typeof c.content != "string") {
      let u = c.content;
      for (let p of u) p.type === "tool-approval-request" && (a[p.approvalId] = p);
    }
  let n = {};
  for (let c of t.content) c.type === "tool-result" && (n[c.toolCallId] = c);
  let s = [],
    i = [],
    l = new Set(),
    d = t.content.filter((c) => c.type === "tool-approval-response");
  for (let c of d) {
    let u = a[c.approvalId];
    if (u == null) throw new tc({ approvalId: c.approvalId });
    if (n[u.toolCallId] != null) continue;
    let p = r[u.toolCallId];
    if (p == null) throw new Ao({ toolCallId: u.toolCallId, approvalId: u.approvalId });
    if (l.has(p.toolCallId)) continue;
    l.add(p.toolCallId);
    let m = { approvalRequest: u, approvalResponse: c, toolCall: p };
    c.approved ? s.push(m) : i.push(m);
  }
  return { approvedToolApprovals: s, deniedToolApprovals: i };
}
function xn() {
  var e, t;
  return (t = (e = globalThis?.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
async function Ys({
  toolCall: e,
  tools: t,
  tracer: r,
  telemetry: a,
  messages: n,
  abortSignal: s,
  experimental_context: i,
  stepNumber: l,
  model: d,
  onPreliminaryToolResult: c,
  onToolCallStart: u,
  onToolCallFinish: p,
}) {
  var m;
  let { toolName: _, toolCallId: h, input: b } = e,
    y = t?.[_];
  if (y?.execute == null) return;
  let f = {
    stepNumber: l,
    model: d,
    toolCall: e,
    messages: n,
    abortSignal: s,
    functionId: a?.functionId,
    metadata: a?.metadata,
    experimental_context: i,
  };
  return ut({
    name: "ai.toolCall",
    attributes: he({
      telemetry: a,
      attributes: {
        ...lt({ operationId: "ai.toolCall", telemetry: a }),
        ...Object.fromEntries(
          Object.entries((m = a?.metadata) != null ? m : {}).map(([v, T]) => [
            `ai.telemetry.metadata.${v}`,
            T,
          ])
        ),
        "ai.toolCall.name": _,
        "ai.toolCall.id": h,
        "ai.toolCall.args": { output: () => JSON.stringify(b) },
      },
    }),
    tracer: r,
    fn: async (v) => {
      let T;
      await it({ event: f, callbacks: u });
      let I = xn();
      try {
        let g = uu({
          execute: y.execute.bind(y),
          input: b,
          options: { toolCallId: h, messages: n, abortSignal: s, experimental_context: i },
        });
        for await (let x of g)
          x.type === "preliminary"
            ? c?.({ ...e, type: "tool-result", output: x.output, preliminary: !0 })
            : (T = x.output);
      } catch (g) {
        let x = xn() - I;
        return (
          await it({ event: { ...f, success: !1, error: g, durationMs: x }, callbacks: p }),
          Rp(v, g),
          {
            type: "tool-error",
            toolCallId: h,
            toolName: _,
            input: b,
            error: g,
            dynamic: y.type === "dynamic",
            ...(e.providerMetadata != null ? { providerMetadata: e.providerMetadata } : {}),
            ...(e.toolMetadata != null ? { toolMetadata: e.toolMetadata } : {}),
          }
        );
      }
      let E = xn() - I;
      await it({ event: { ...f, success: !0, output: T, durationMs: E }, callbacks: p });
      try {
        v.setAttributes(
          await he({
            telemetry: a,
            attributes: { "ai.toolCall.result": { output: () => JSON.stringify(T) } },
          })
        );
      } catch {}
      return {
        type: "tool-result",
        toolCallId: h,
        toolName: _,
        input: b,
        output: T,
        dynamic: y.type === "dynamic",
        ...(e.providerMetadata != null ? { providerMetadata: e.providerMetadata } : {}),
        ...(e.toolMetadata != null ? { toolMetadata: e.toolMetadata } : {}),
      };
    },
  });
}
function Fs(e) {
  let t = e.filter((r) => r.type === "reasoning");
  return t.length === 0
    ? void 0
    : t.map((r) => r.text).join(`
`);
}
function Us(e) {
  let t = e.filter((r) => r.type === "text");
  if (t.length !== 0) return t.map((r) => r.text).join("");
}
function Pp({ tools: e, activeTools: t }) {
  return e == null || t == null
    ? e
    : Object.fromEntries(Object.entries(e).filter(([r]) => t.includes(r)));
}
var Fr = class {
    constructor({ data: e, mediaType: t }) {
      ((this.base64Data = typeof e == "string" ? e : void 0),
        (this.uint8ArrayData = typeof e == "string" ? void 0 : Rn(e)),
        (this.mediaType = t));
    }
    get base64() {
      return (
        this.base64Data == null && (this.base64Data = At(this.uint8ArrayData)),
        this.base64Data
      );
    }
    get uint8Array() {
      return (
        this.uint8ArrayData == null && (this.uint8ArrayData = Ct(this.base64Data)),
        this.uint8ArrayData
      );
    }
  },
  lb = class extends Fr {
    constructor() {
      (super(...arguments), (this.type = "file"));
    }
  };
async function Xs({ tool: e, toolCall: t, messages: r, experimental_context: a }) {
  return e.needsApproval == null
    ? !1
    : typeof e.needsApproval == "boolean"
      ? e.needsApproval
      : await e.needsApproval(t.input, {
          toolCallId: t.toolCallId,
          messages: r,
          experimental_context: a,
        });
}
function jp(e) {
  return e === "stop" || e === "tool-calls";
}
var Qs = new TextEncoder();
function Vs(e) {
  return e == null || typeof e != "object"
    ? JSON.stringify(e)
    : Array.isArray(e)
      ? `[${e.map(Vs).join(",")}]`
      : `{${Object.keys(e)
          .sort()
          .map((a) => `${JSON.stringify(a)}:${Vs(e[a])}`)
          .join(",")}}`;
}
function Dp(e) {
  return At(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function ub(e) {
  return Ct(e);
}
async function qp(e) {
  let t = typeof e == "string" ? Qs.encode(e) : e;
  return crypto.subtle.importKey("raw", t, { name: "HMAC", hash: "SHA-256" }, !1, [
    "sign",
    "verify",
  ]);
}
async function $p(e) {
  let t = Vs(e),
    r = await crypto.subtle.digest("SHA-256", Qs.encode(t));
  return Dp(new Uint8Array(r));
}
function Fp(e, t, r, a) {
  return Qs.encode(`${e}
${t}
${r}
${a}`);
}
async function db({ secret: e, approvalId: t, toolCallId: r, toolName: a, input: n }) {
  let s = await qp(e),
    i = await $p(n),
    l = Fp(t, r, a, i),
    d = await crypto.subtle.sign("HMAC", s, l);
  return Dp(new Uint8Array(d));
}
async function cb({
  secret: e,
  signature: t,
  approvalId: r,
  toolCallId: a,
  toolName: n,
  input: s,
}) {
  let i = await qp(e),
    l = await $p(s),
    d = Fp(r, a, n, l),
    c = ub(t);
  return crypto.subtle.verify("HMAC", i, c, d);
}
async function Up({ secret: e, approvalId: t, toolCallId: r, toolName: a, input: n }) {
  if (e != null) return db({ secret: e, approvalId: t, toolCallId: r, toolName: a, input: n });
}
function xr(e, t) {
  if (e === t) return !0;
  if (e == null || t == null) return !1;
  if (typeof e != "object" && typeof t != "object") return e === t;
  if (e.constructor !== t.constructor) return !1;
  if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
  if (Array.isArray(e)) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!xr(e[n], t[n])) return !1;
    return !0;
  }
  let r = Object.keys(e),
    a = Object.keys(t);
  if (r.length !== a.length) return !1;
  for (let n of r) if (!a.includes(n) || !xr(e[n], t[n])) return !1;
  return !0;
}
async function Vp({
  approvedToolApprovals: e,
  tools: t,
  messages: r,
  experimental_context: a,
  toolApprovalSecret: n,
}) {
  var s;
  let i = [],
    l = [],
    d = [];
  for (let c of e) {
    let { toolCall: u, approvalRequest: p } = c,
      m = t?.[u.toolName];
    if (n != null) {
      if (p.signature == null)
        throw new Os({
          approvalId: p.approvalId,
          toolCallId: u.toolCallId,
          reason: "missing signature",
        });
      if (
        !(await cb({
          secret: n,
          signature: p.signature,
          approvalId: p.approvalId,
          toolCallId: u.toolCallId,
          toolName: u.toolName,
          input: u.input,
        }))
      )
        throw new Os({
          approvalId: p.approvalId,
          toolCallId: u.toolCallId,
          reason: "invalid signature",
        });
    }
    if (m != null && typeof m.execute == "function" && m.inputSchema != null) {
      let h = Object.prototype.hasOwnProperty.call(p, "inputSchemaInput"),
        b = await Re({ value: h ? p.inputSchemaInput : u.input, schema: nt(m.inputSchema) }),
        y;
      if (
        (b.success
          ? xr(b.value, u.input) ||
            (y = new Error("Approved tool input does not match the validated schema output."))
          : (y = b.error),
        y != null)
      ) {
        d.push({
          ...c,
          error: new Mn({ toolName: u.toolName, toolInput: JSON.stringify(u.input), cause: y }),
        });
        continue;
      }
    }
    m != null && (await Xs({ tool: m, toolCall: u, messages: r, experimental_context: a }))
      ? i.push(c)
      : l.push({
          ...c,
          approvalResponse: {
            ...c.approvalResponse,
            approved: !1,
            reason:
              (s = c.approvalResponse.reason) != null
                ? s
                : `Tool "${u.toolName}" does not require approval`,
          },
        });
  }
  return { approvedToolApprovals: i, deniedToolApprovals: l, invalidToolApprovals: d };
}
var Lp = {};
ny(Lp, { array: () => fb, choice: () => hb, json: () => gb, object: () => mb, text: () => ko });
var zp = new WeakMap();
function jd(e) {
  var t;
  return (t = zp.get(e)) == null ? void 0 : t();
}
function Bp(e, t) {
  let r = 0,
    a = "",
    n = "",
    s = 0,
    i = !1,
    l = !1,
    d = !1,
    c = [],
    u = [],
    p;
  async function m() {
    let h = await Ye({ text: n });
    if (!h.success) return !1;
    let b = await Re({ value: h.value, schema: e });
    if (b.success) c = [b.value];
    else if (!t) return !1;
    return ((n = ""), !0);
  }
  function _() {
    (u.push(...c), (c = []));
  }
  return async (h) => {
    for (let f of h) {
      if (r === 0) {
        if (((a += f), f === "[")) {
          if (!/^\s*\{\s*"elements"\s*:\s*\[$/.test(a)) return "fallback";
          r = 1;
        } else if (a.length > 256) return "fallback";
        continue;
      }
      if (r === 2 || r === 3) {
        if (/\s/.test(f)) continue;
        if (r === 2 && f === "}") {
          (_(), (r = 3));
          continue;
        }
        return "fallback";
      }
      if (!i && s === 0 && (f === "," || f === "]")) {
        if (n.length > 0) {
          if (!(await m())) return "fallback";
        } else if (f === "," || d) return "fallback";
        ((d = f === ","), f === "]" && (r = 2));
        continue;
      }
      if (n.length === 0) {
        if (/\s/.test(f)) continue;
        (_(), (d = !1));
      }
      ((n += f),
        i
          ? l
            ? (l = !1)
            : f === "\\"
              ? (l = !0)
              : f === '"' && (i = !1)
          : f === '"'
            ? (i = !0)
            : f === "{" || f === "["
              ? s++
              : (f === "}" || f === "]") && s--);
    }
    if (r === 0 || p === u.length) return;
    let b = p ?? 0,
      y =
        (p == null ? "[" : "") +
        (b > 0 && u.length > b ? "," : "") +
        u
          .slice(b)
          .map((f) => JSON.stringify(f))
          .join(",") +
        (r === 3 ? "]" : "");
    return ((p = u.length), { partial: u.slice(), textDelta: y });
  };
}
function pb(e) {
  let t = ["ROOT"],
    r = -1,
    a = null,
    n = 0;
  function s(u) {
    return (u >= "0" && u <= "9") || (u >= "A" && u <= "F") || (u >= "a" && u <= "f");
  }
  function i(u, p, m) {
    switch (u) {
      case '"': {
        ((r = p), t.pop(), t.push(m), t.push("INSIDE_STRING"));
        break;
      }
      case "f":
      case "t":
      case "n": {
        ((r = p), (a = p), t.pop(), t.push(m), t.push("INSIDE_LITERAL"));
        break;
      }
      case "-": {
        (t.pop(), t.push(m), t.push("INSIDE_NUMBER"));
        break;
      }
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        ((r = p), t.pop(), t.push(m), t.push("INSIDE_NUMBER"));
        break;
      }
      case "{": {
        ((r = p), t.pop(), t.push(m), t.push("INSIDE_OBJECT_START"));
        break;
      }
      case "[": {
        ((r = p), t.pop(), t.push(m), t.push("INSIDE_ARRAY_START"));
        break;
      }
    }
  }
  function l(u, p) {
    switch (u) {
      case ",": {
        (t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA"));
        break;
      }
      case "}": {
        ((r = p), t.pop());
        break;
      }
    }
  }
  function d(u, p) {
    switch (u) {
      case ",": {
        (t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA"));
        break;
      }
      case "]": {
        ((r = p), t.pop());
        break;
      }
    }
  }
  for (let u = 0; u < e.length; u++) {
    let p = e[u];
    switch (t[t.length - 1]) {
      case "ROOT":
        i(p, u, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (p) {
          case '"': {
            (t.pop(), t.push("INSIDE_OBJECT_KEY"));
            break;
          }
          case "}": {
            ((r = u), t.pop());
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        p === '"' && (t.pop(), t.push("INSIDE_OBJECT_KEY"));
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        p === '"' && (t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY"));
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        p === ":" && (t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE"));
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        i(p, u, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        l(p, u);
        break;
      }
      case "INSIDE_STRING": {
        switch (p) {
          case '"': {
            (t.pop(), (r = u));
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            r = u;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        p === "]" ? ((r = u), t.pop()) : ((r = u), i(p, u, "INSIDE_ARRAY_AFTER_VALUE"));
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (p) {
          case ",": {
            (t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA"));
            break;
          }
          case "]": {
            ((r = u), t.pop());
            break;
          }
          default: {
            r = u;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        i(p, u, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        (t.pop(), p === "u" ? ((n = 0), t.push("INSIDE_STRING_UNICODE_ESCAPE")) : (r = u));
        break;
      }
      case "INSIDE_STRING_UNICODE_ESCAPE": {
        s(p) && (n++, n === 4 && (t.pop(), (r = u)));
        break;
      }
      case "INSIDE_NUMBER": {
        switch (p) {
          case "0":
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9": {
            r = u;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            (t.pop(),
              t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && d(p, u),
              t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && l(p, u));
            break;
          }
          case "}": {
            (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && l(p, u));
            break;
          }
          case "]": {
            (t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && d(p, u));
            break;
          }
          default: {
            t.pop();
            break;
          }
        }
        break;
      }
      case "INSIDE_LITERAL": {
        let _ = e.substring(a, u + 1);
        !"false".startsWith(_) && !"true".startsWith(_) && !"null".startsWith(_)
          ? (t.pop(),
            t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE"
              ? l(p, u)
              : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && d(p, u))
          : (r = u);
        break;
      }
    }
  }
  let c = e.slice(0, r + 1);
  for (let u = t.length - 1; u >= 0; u--)
    switch (t[u]) {
      case "INSIDE_STRING": {
        c += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        c += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        c += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        let m = e.substring(a, e.length);
        "true".startsWith(m)
          ? (c += "true".slice(m.length))
          : "false".startsWith(m)
            ? (c += "false".slice(m.length))
            : "null".startsWith(m) && (c += "null".slice(m.length));
      }
    }
  return c;
}
async function ra(e) {
  if (e === void 0) return { value: void 0, state: "undefined-input" };
  let t = await Ye({ text: e });
  return t.success
    ? { value: t.value, state: "successful-parse" }
    : ((t = await Ye({ text: pb(e) })),
      t.success
        ? { value: t.value, state: "repaired-parse" }
        : { value: void 0, state: "failed-parse" });
}
var ko = () => ({
    name: "text",
    responseFormat: Promise.resolve({ type: "text" }),
    async parseCompleteOutput({ text: e }) {
      return e;
    },
    async parsePartialOutput({ text: e }) {
      return { partial: e };
    },
    createElementStreamTransform() {},
  }),
  mb = ({ schema: e, name: t, description: r }) => {
    let a = nt(e);
    return {
      name: "object",
      responseFormat: ae(a.jsonSchema).then((n) => ({
        type: "json",
        schema: n,
        ...(t != null && { name: t }),
        ...(r != null && { description: r }),
      })),
      async parseCompleteOutput({ text: n }, s) {
        let i = await Ye({ text: n });
        if (!i.success)
          throw new St({
            ...s,
            message: "No object generated: could not parse the response.",
            cause: i.error,
            text: n,
          });
        let l = await Re({ value: i.value, schema: a });
        if (!l.success)
          throw new St({
            ...s,
            message: "No object generated: response did not match schema.",
            cause: l.error,
            text: n,
          });
        return l.value;
      },
      async parsePartialOutput({ text: n }) {
        let s = await ra(n);
        switch (s.state) {
          case "failed-parse":
          case "undefined-input":
            return;
          case "repaired-parse":
          case "successful-parse":
            return { partial: s.value };
        }
      },
      createElementStreamTransform() {},
    };
  },
  fb = ({ element: e, name: t, description: r }) => {
    let a = nt(e),
      n = {
        name: "array",
        responseFormat: ae(a.jsonSchema).then((i) => {
          let { $schema: l, ...d } = i;
          return {
            type: "json",
            schema: {
              $schema: "http://json-schema.org/draft-07/schema#",
              type: "object",
              properties: { elements: { type: "array", items: d } },
              required: ["elements"],
              additionalProperties: !1,
            },
            ...(t != null && { name: t }),
            ...(r != null && { description: r }),
          };
        }),
        async parseCompleteOutput({ text: i }, l) {
          let d = await Ye({ text: i });
          if (!d.success)
            throw new St({
              ...l,
              message: "No object generated: could not parse the response.",
              cause: d.error,
              text: i,
            });
          let c = d.value;
          if (c == null || typeof c != "object" || !("elements" in c) || !Array.isArray(c.elements))
            throw new St({
              ...l,
              message: "No object generated: response did not match schema.",
              cause: new Ae({
                value: c,
                cause: "response must be an object with an elements array",
              }),
              text: i,
            });
          let u = [];
          for (let p of c.elements) {
            let m = await Re({ value: p, schema: a });
            if (!m.success)
              throw new St({
                ...l,
                message: "No object generated: response did not match schema.",
                cause: m.error,
                text: i,
              });
            u.push(m.value);
          }
          return u;
        },
        async parsePartialOutput({ text: i }) {
          let l = await ra(i);
          switch (l.state) {
            case "failed-parse":
            case "undefined-input":
              return;
            case "repaired-parse":
            case "successful-parse": {
              let d = l.value;
              if (
                d == null ||
                typeof d != "object" ||
                !("elements" in d) ||
                !Array.isArray(d.elements)
              )
                return;
              let c =
                  l.state === "repaired-parse" && d.elements.length > 0
                    ? d.elements.slice(0, -1)
                    : d.elements,
                u = [];
              for (let p of c) {
                let m = await Re({ value: p, schema: a });
                m.success && u.push(m.value);
              }
              return { partial: u };
            }
          }
        },
        createElementStreamTransform() {
          let i = 0;
          return new TransformStream({
            transform({ partialOutput: l }, d) {
              if (l != null) for (; i < l.length; i++) d.enqueue(l[i]);
            },
          });
        },
      },
      s = n.parsePartialOutput;
    return (zp.set(n, () => (n.parsePartialOutput === s ? Bp(a, !0) : void 0)), n);
  },
  hb = ({ options: e, name: t, description: r }) => ({
    name: "choice",
    responseFormat: Promise.resolve({
      type: "json",
      schema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: { result: { type: "string", enum: e } },
        required: ["result"],
        additionalProperties: !1,
      },
      ...(t != null && { name: t }),
      ...(r != null && { description: r }),
    }),
    async parseCompleteOutput({ text: a }, n) {
      let s = await Ye({ text: a });
      if (!s.success)
        throw new St({
          ...n,
          message: "No object generated: could not parse the response.",
          cause: s.error,
          text: a,
        });
      let i = s.value;
      if (
        i == null ||
        typeof i != "object" ||
        !("result" in i) ||
        typeof i.result != "string" ||
        !e.includes(i.result)
      )
        throw new St({
          ...n,
          message: "No object generated: response did not match schema.",
          cause: new Ae({
            value: i,
            cause: "response must be an object that contains a choice value.",
          }),
          text: a,
        });
      return i.result;
    },
    async parsePartialOutput({ text: a }) {
      let n = await ra(a);
      switch (n.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse": {
          let s = n.value;
          if (s == null || typeof s != "object" || !("result" in s) || typeof s.result != "string")
            return;
          let i = e.filter((l) => l.startsWith(s.result));
          return n.state === "successful-parse"
            ? i.includes(s.result)
              ? { partial: s.result }
              : void 0
            : i.length === 1
              ? { partial: i[0] }
              : void 0;
        }
      }
    },
    createElementStreamTransform() {},
  }),
  gb = ({ name: e, description: t } = {}) => ({
    name: "json",
    responseFormat: Promise.resolve({
      type: "json",
      ...(e != null && { name: e }),
      ...(t != null && { description: t }),
    }),
    async parseCompleteOutput({ text: r }, a) {
      let n = await Ye({ text: r });
      if (!n.success)
        throw new St({
          ...a,
          message: "No object generated: could not parse the response.",
          cause: n.error,
          text: r,
        });
      return n.value;
    },
    async parsePartialOutput({ text: r }) {
      let a = await ra(r);
      switch (a.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse":
          return a.value === void 0 ? void 0 : { partial: a.value };
      }
    },
    createElementStreamTransform() {},
  }),
  Ls = Symbol("ai-sdk-tool-call-input-schema-input");
function vb(e, t) {
  return (Object.defineProperty(e, Ls, { value: t }), e);
}
function Jp(e) {
  return Ls in e ? { value: e[Ls] } : void 0;
}
async function Gp({ toolCall: e, tools: t, repairToolCall: r, system: a, messages: n }) {
  try {
    if (t == null) {
      if (e.providerExecuted && e.dynamic) return await Hp(e);
      throw new Mo({ toolName: e.toolName });
    }
    try {
      return await Dd({ toolCall: e, tools: t });
    } catch (s) {
      if (r == null || !(Mo.isInstance(s) || Mn.isInstance(s))) throw s;
      let i = null;
      try {
        i = await r({
          toolCall: e,
          tools: t,
          inputSchema: async ({ toolName: l }) => {
            let { inputSchema: d } = t[l];
            return await nt(d).jsonSchema;
          },
          system: a,
          messages: n,
          error: s,
        });
      } catch (l) {
        throw new Bc({ cause: l, originalError: s });
      }
      if (i == null) throw s;
      return await Dd({ toolCall: i, tools: t });
    }
  } catch (s) {
    let i = await Ye({ text: e.input }),
      l = i.success ? i.value : e.input,
      d = t?.[e.toolName];
    return {
      type: "tool-call",
      toolCallId: e.toolCallId,
      toolName: e.toolName,
      input: l,
      dynamic: !0,
      invalid: !0,
      error: s,
      title: d?.title,
      providerExecuted: e.providerExecuted,
      providerMetadata: e.providerMetadata,
      ...(d?.metadata != null ? { toolMetadata: d.metadata } : {}),
    };
  }
}
async function Hp(e) {
  let t = e.input.trim() === "" ? { success: !0, value: {} } : await Ye({ text: e.input });
  if (t.success === !1) throw new Mn({ toolName: e.toolName, toolInput: e.input, cause: t.error });
  return {
    type: "tool-call",
    toolCallId: e.toolCallId,
    toolName: e.toolName,
    input: t.value,
    providerExecuted: !0,
    dynamic: !0,
    providerMetadata: e.providerMetadata,
  };
}
async function Dd({ toolCall: e, tools: t }) {
  let r = e.toolName,
    a = t[r];
  if (a == null) {
    if (e.providerExecuted && e.dynamic) return await Hp(e);
    throw new Mo({ toolName: e.toolName, availableTools: Object.keys(t) });
  }
  let n = nt(a.inputSchema),
    s =
      e.input.trim() === ""
        ? await Re({ value: {}, schema: n })
        : await Ye({ text: e.input, schema: n });
  if (s.success === !1) throw new Mn({ toolName: r, toolInput: e.input, cause: s.error });
  return vb(
    a.type === "dynamic"
      ? {
          type: "tool-call",
          toolCallId: e.toolCallId,
          toolName: e.toolName,
          input: s.value,
          providerExecuted: e.providerExecuted,
          providerMetadata: e.providerMetadata,
          ...(a.metadata != null ? { toolMetadata: a.metadata } : {}),
          dynamic: !0,
          title: a.title,
        }
      : {
          type: "tool-call",
          toolCallId: e.toolCallId,
          toolName: r,
          input: s.value,
          providerExecuted: e.providerExecuted,
          providerMetadata: e.providerMetadata,
          ...(a.metadata != null ? { toolMetadata: a.metadata } : {}),
          title: a.title,
        },
    s.rawValue
  );
}
function Wp({ callSettings: e, stepSettings: t }) {
  var r, a, n, s, i, l, d, c;
  return Ur({
    maxOutputTokens: (r = t?.maxOutputTokens) != null ? r : e.maxOutputTokens,
    temperature: (a = t?.temperature) != null ? a : e.temperature,
    topP: (n = t?.topP) != null ? n : e.topP,
    topK: (s = t?.topK) != null ? s : e.topK,
    presencePenalty: (i = t?.presencePenalty) != null ? i : e.presencePenalty,
    frequencyPenalty: (l = t?.frequencyPenalty) != null ? l : e.frequencyPenalty,
    stopSequences: (d = t?.stopSequences) != null ? d : e.stopSequences,
    seed: (c = t?.seed) != null ? c : e.seed,
  });
}
var Zp = class {
  constructor({
    stepNumber: e,
    model: t,
    functionId: r,
    metadata: a,
    experimental_context: n,
    content: s,
    finishReason: i,
    rawFinishReason: l,
    usage: d,
    warnings: c,
    request: u,
    response: p,
    providerMetadata: m,
  }) {
    ((this.stepNumber = e),
      (this.model = t),
      (this.functionId = r),
      (this.metadata = a),
      (this.experimental_context = n),
      (this.content = s),
      (this.finishReason = i),
      (this.rawFinishReason = l),
      (this.usage = d),
      (this.warnings = c),
      (this.request = u),
      (this.response = p),
      (this.providerMetadata = m));
  }
  get text() {
    return this.content
      .filter((e) => e.type === "text")
      .map((e) => e.text)
      .join("");
  }
  get reasoning() {
    return this.content.filter((e) => e.type === "reasoning");
  }
  get reasoningText() {
    return this.reasoning.length === 0 ? void 0 : this.reasoning.map((e) => e.text).join("");
  }
  get files() {
    return this.content.filter((e) => e.type === "file").map((e) => e.file);
  }
  get sources() {
    return this.content.filter((e) => e.type === "source");
  }
  get toolCalls() {
    return this.content.filter((e) => e.type === "tool-call");
  }
  get staticToolCalls() {
    return this.toolCalls.filter((e) => e.dynamic !== !0);
  }
  get dynamicToolCalls() {
    return this.toolCalls.filter((e) => e.dynamic === !0);
  }
  get toolResults() {
    return this.content.filter((e) => e.type === "tool-result");
  }
  get staticToolResults() {
    return this.toolResults.filter((e) => e.dynamic !== !0);
  }
  get dynamicToolResults() {
    return this.toolResults.filter((e) => e.dynamic === !0);
  }
};
function jo(e) {
  return ({ steps: t }) => t.length === e;
}
function yb() {
  return () => !1;
}
function bb(e) {
  return ({ steps: t }) => {
    var r, a, n;
    return (n =
      (a = (r = t[t.length - 1]) == null ? void 0 : r.toolCalls) == null
        ? void 0
        : a.some((s) => s.toolName === e)) != null
      ? n
      : !1;
  };
}
async function Kp({ stopConditions: e, steps: t }) {
  return (await Promise.all(e.map((r) => r({ steps: t })))).some((r) => r);
}
async function zs({ content: e, tools: t }) {
  let r = [],
    a = new Map(),
    n = [];
  for (let i of e)
    if (
      i.type !== "source" &&
      !((i.type === "tool-result" || i.type === "tool-error") && !i.providerExecuted) &&
      !(i.type === "text" && i.text.length === 0)
    )
      switch (i.type) {
        case "text":
          n.push({ type: "text", text: i.text, providerOptions: i.providerMetadata });
          break;
        case "reasoning":
          n.push({ type: "reasoning", text: i.text, providerOptions: i.providerMetadata });
          break;
        case "file":
          n.push({
            type: "file",
            data: i.file.base64,
            mediaType: i.file.mediaType,
            providerOptions: i.providerMetadata,
          });
          break;
        case "tool-call":
          (a.has(i.toolCallId) || a.set(i.toolCallId, a.size),
            n.push({
              type: "tool-call",
              toolCallId: i.toolCallId,
              toolName: i.toolName,
              input: i.invalid && typeof i.input != "object" ? {} : i.input,
              providerExecuted: i.providerExecuted,
              providerOptions: i.providerMetadata,
            }));
          break;
        case "tool-result": {
          let d = await $r({
            toolCallId: i.toolCallId,
            input: i.input,
            tool: t?.[i.toolName],
            output: i.output,
            errorMode: "none",
          });
          n.push({
            type: "tool-result",
            toolCallId: i.toolCallId,
            toolName: i.toolName,
            output: d,
            providerOptions: i.providerMetadata,
          });
          break;
        }
        case "tool-error": {
          let d = await $r({
            toolCallId: i.toolCallId,
            input: i.input,
            tool: t?.[i.toolName],
            output: i.error,
            errorMode: "json",
          });
          n.push({
            type: "tool-result",
            toolCallId: i.toolCallId,
            toolName: i.toolName,
            output: d,
            providerOptions: i.providerMetadata,
          });
          break;
        }
        case "tool-approval-request":
          let l = Jp(i.toolCall);
          n.push({
            type: "tool-approval-request",
            approvalId: i.approvalId,
            toolCallId: i.toolCall.toolCallId,
            ...(i.signature != null ? { signature: i.signature } : {}),
            ...(l != null && !xr(l.value, i.toolCall.input) ? { inputSchemaInput: l.value } : {}),
          });
          break;
      }
  n.length > 0 && r.push({ role: "assistant", content: n });
  let s = [];
  for (let i of e) {
    if (!(i.type === "tool-result" || i.type === "tool-error") || i.providerExecuted) continue;
    let l = await $r({
      toolCallId: i.toolCallId,
      input: i.input,
      tool: t?.[i.toolName],
      output: i.type === "tool-result" ? i.output : i.error,
      errorMode: i.type === "tool-error" ? "text" : "none",
    });
    s.push({
      type: "tool-result",
      toolCallId: i.toolCallId,
      toolName: i.toolName,
      output: l,
      ...(i.providerMetadata != null ? { providerOptions: i.providerMetadata } : {}),
    });
  }
  return (
    s.length > 0 &&
      r.push({ role: "tool", content: wb({ toolResultContent: s, toolCallOrder: a }) }),
    r
  );
}
function wb({ toolResultContent: e, toolCallOrder: t }) {
  let r = e
      .filter((n) => n.type === "tool-result")
      .map((n, s) => ({ part: n, index: s }))
      .sort((n, s) => {
        let i = t.get(n.part.toolCallId),
          l = t.get(s.part.toolCallId);
        return i == null && l == null
          ? n.index - s.index
          : i == null
            ? 1
            : l == null
              ? -1
              : i - l || n.index - s.index;
      })
      .map(({ part: n }) => n),
    a = 0;
  return e.map((n) => (n.type === "tool-result" ? r[a++] : n));
}
function Yp(...e) {
  let t = e.filter((a) => a != null);
  if (t.length === 0) return;
  if (t.length === 1) return t[0];
  let r = new AbortController();
  for (let a of t) {
    if (a.aborted) return (r.abort(a.reason), r.signal);
    a.addEventListener(
      "abort",
      () => {
        r.abort(a.reason);
      },
      { once: !0 }
    );
  }
  return r.signal;
}
var _b = Gt({ prefix: "aitxt", size: 24 });
async function Xp({
  model: e,
  tools: t,
  toolChoice: r,
  system: a,
  prompt: n,
  messages: s,
  allowSystemInMessages: i,
  maxRetries: l,
  abortSignal: d,
  timeout: c,
  headers: u,
  stopWhen: p = jo(1),
  experimental_output: m,
  output: _ = m,
  experimental_telemetry: h,
  providerOptions: b,
  experimental_activeTools: y,
  activeTools: f = y,
  experimental_prepareStep: v,
  prepareStep: T = v,
  experimental_repairToolCall: I,
  experimental_download: E,
  experimental_context: g,
  experimental_toolApprovalSecret: x,
  experimental_include: M,
  _internal: { generateId: J = _b } = {},
  experimental_onStart: N,
  experimental_onStepStart: D,
  experimental_onToolCallStart: H,
  experimental_onToolCallFinish: w,
  onStepFinish: F,
  onFinish: U,
  ...k
}) {
  let R = Oa(e),
    q = Ap(),
    se = sr(p),
    de = Ws(c),
    X = gp(c),
    z = X != null ? new AbortController() : void 0,
    ee = Yp(d, de != null ? AbortSignal.timeout(de) : void 0, z?.signal),
    { maxRetries: ie, retry: $ } = Kt({ maxRetries: l, abortSignal: ee }),
    W = Ur(k),
    Ce = Ne(u ?? {}, `ai/${ir}`),
    Xe = ea({ model: R, telemetry: h, headers: Ce, settings: { ...W, maxRetries: ie } }),
    qe = { provider: R.provider, modelId: R.modelId },
    dt = await No({ system: a, prompt: n, messages: s, allowSystemInMessages: i }),
    Ge = q(h?.integrations);
  await it({
    event: {
      model: qe,
      system: a,
      prompt: n,
      messages: s,
      tools: t,
      toolChoice: r,
      activeTools: f,
      maxOutputTokens: W.maxOutputTokens,
      temperature: W.temperature,
      topP: W.topP,
      topK: W.topK,
      presencePenalty: W.presencePenalty,
      frequencyPenalty: W.frequencyPenalty,
      stopSequences: W.stopSequences,
      seed: W.seed,
      maxRetries: ie,
      timeout: c,
      headers: u,
      providerOptions: b,
      stopWhen: p,
      output: _,
      abortSignal: d,
      include: M,
      functionId: h?.functionId,
      metadata: h?.metadata,
      experimental_context: g,
    },
    callbacks: [N, Ge.onStart],
  });
  let bt = ta(h);
  try {
    return await ut({
      name: "ai.generateText",
      attributes: he({
        telemetry: h,
        attributes: {
          ...lt({ operationId: "ai.generateText", telemetry: h }),
          ...Xe,
          "ai.model.provider": R.provider,
          "ai.model.id": R.modelId,
          "ai.prompt": { input: () => JSON.stringify({ system: a, prompt: n, messages: s }) },
        },
      }),
      tracer: bt,
      fn: async (Ke) => {
        var je, Nt, ve, Ie, Qe, wt, ce, me, Lr, lr, ur, Oe, Ut, _t, Ir, Pn, Sr, ja, Da, jn;
        let dr = dt.messages,
          ct = [],
          { approvedToolApprovals: Dn, deniedToolApprovals: He } = Np({ messages: dr }),
          {
            approvedToolApprovals: qa,
            deniedToolApprovals: $a,
            invalidToolApprovals: we,
          } = await Vp({
            approvedToolApprovals: Dn.filter((ze) => !ze.toolCall.providerExecuted),
            tools: t,
            messages: dr,
            experimental_context: g,
            toolApprovalSecret: x,
          }),
          Ee = [...He, ...$a];
        if (Ee.length > 0 || qa.length > 0 || we.length > 0) {
          let ze = await qd({
              toolCalls: qa.map((B) => B.toolCall),
              tools: t,
              tracer: bt,
              telemetry: h,
              messages: dr,
              abortSignal: ee,
              experimental_context: g,
              stepNumber: 0,
              model: qe,
              onToolCallStart: [H, Ge.onToolCallStart],
              onToolCallFinish: [w, Ge.onToolCallFinish],
            }),
            ye = [];
          for (let B of ze) {
            let _e = await $r({
              toolCallId: B.toolCallId,
              input: B.input,
              tool: t?.[B.toolName],
              output: B.type === "tool-result" ? B.output : B.error,
              errorMode: B.type === "tool-error" ? "text" : "none",
            });
            ye.push({
              type: "tool-result",
              toolCallId: B.toolCallId,
              toolName: B.toolName,
              output: _e,
            });
          }
          for (let B of we)
            ye.push({
              type: "tool-result",
              toolCallId: B.toolCall.toolCallId,
              toolName: B.toolCall.toolName,
              output: await $r({
                toolCallId: B.toolCall.toolCallId,
                input: B.toolCall.input,
                tool: t?.[B.toolCall.toolName],
                output: B.error,
                errorMode: "text",
              }),
            });
          for (let B of Ee)
            ye.push({
              type: "tool-result",
              toolCallId: B.toolCall.toolCallId,
              toolName: B.toolCall.toolName,
              output: {
                type: "execution-denied",
                reason: B.approvalResponse.reason,
                ...(B.toolCall.providerExecuted && {
                  providerOptions: { openai: { approvalId: B.approvalResponse.approvalId } },
                }),
              },
            });
          ct.push({ role: "tool", content: ye });
        }
        let Le = Ur(k),
          re,
          pt = [],
          mt = [],
          O = [],
          fe = new Map();
        do {
          O.length > 0 && ee?.throwIfAborted();
          let ze = $s({ abortController: z, label: "Step", timeoutMs: X });
          try {
            let ye = [...dr, ...ct],
              B = await T?.({
                model: R,
                steps: O,
                stepNumber: O.length,
                messages: ye,
                experimental_context: g,
              }),
              _e = Oa((je = B?.model) != null ? je : R),
              Me = { provider: _e.provider, modelId: _e.modelId },
              Te = await Oo({
                prompt: {
                  system: (Nt = B?.system) != null ? Nt : dt.system,
                  messages: (ve = B?.messages) != null ? ve : ye,
                },
                supportedUrls: await _e.supportedUrls,
                download: E,
                abortSignal: ee,
              });
            g = (Ie = B?.experimental_context) != null ? Ie : g;
            let Er = (Qe = B?.activeTools) != null ? Qe : f,
              Pt = Pp({ tools: t, activeTools: Er }),
              { toolChoice: jt, tools: na } = await wp({
                tools: t,
                toolChoice: (wt = B?.toolChoice) != null ? wt : r,
                activeTools: Er,
              }),
              Mr = (ce = B?.messages) != null ? ce : ye,
              $o = (me = B?.system) != null ? me : dt.system,
              qn = Qr(b, B?.providerOptions),
              Yt = Wp({ callSettings: Le, stepSettings: B });
            (await it({
              event: {
                stepNumber: O.length,
                model: Me,
                system: $o,
                messages: Mr,
                tools: t,
                toolChoice: jt,
                activeTools: Er,
                steps: [...O],
                providerOptions: qn,
                timeout: c,
                headers: u,
                stopWhen: p,
                output: _,
                abortSignal: d,
                include: M,
                functionId: h?.functionId,
                metadata: h?.metadata,
                experimental_context: g,
              },
              callbacks: [D, Ge.onStepStart],
            }),
              (re = await $(() =>
                ut({
                  name: "ai.generateText.doGenerate",
                  attributes: he({
                    telemetry: h,
                    attributes: {
                      ...lt({ operationId: "ai.generateText.doGenerate", telemetry: h }),
                      ...Xe,
                      "ai.model.provider": _e.provider,
                      "ai.model.id": _e.modelId,
                      "ai.prompt.messages": { input: () => Po(Te) },
                      "ai.prompt.tools": { input: () => na?.map((K) => JSON.stringify(Cp(K))) },
                      "ai.prompt.toolChoice": {
                        input: () => (jt != null ? JSON.stringify(jt) : void 0),
                      },
                      "gen_ai.system": _e.provider,
                      "gen_ai.request.model": _e.modelId,
                      "gen_ai.request.frequency_penalty": Yt.frequencyPenalty,
                      "gen_ai.request.max_tokens": Yt.maxOutputTokens,
                      "gen_ai.request.presence_penalty": Yt.presencePenalty,
                      "gen_ai.request.stop_sequences": Yt.stopSequences,
                      "gen_ai.request.temperature": Yt.temperature,
                      "gen_ai.request.top_k": Yt.topK,
                      "gen_ai.request.top_p": Yt.topP,
                    },
                  }),
                  tracer: bt,
                  fn: async (K) => {
                    var et, kr, er, Va, Vt, Fn, La, oa;
                    let ge = await _e.doGenerate({
                        ...Yt,
                        tools: na,
                        toolChoice: jt,
                        responseFormat: await _?.responseFormat,
                        prompt: Te,
                        providerOptions: qn,
                        abortSignal: ee,
                        headers: Ce,
                      }),
                      pr = {
                        id: (kr = (et = ge.response) == null ? void 0 : et.id) != null ? kr : J(),
                        timestamp:
                          (Va = (er = ge.response) == null ? void 0 : er.timestamp) != null
                            ? Va
                            : new Date(),
                        modelId:
                          (Fn = (Vt = ge.response) == null ? void 0 : Vt.modelId) != null
                            ? Fn
                            : _e.modelId,
                        headers: (La = ge.response) == null ? void 0 : La.headers,
                        body: (oa = ge.response) == null ? void 0 : oa.body,
                      },
                      Fo = Pa(ge.usage);
                    return (
                      K.setAttributes(
                        await he({
                          telemetry: h,
                          attributes: {
                            "ai.response.finishReason": ge.finishReason.unified,
                            "ai.response.text": { output: () => Us(ge.content) },
                            "ai.response.reasoning": { output: () => Fs(ge.content) },
                            "ai.response.toolCalls": {
                              output: () => {
                                let Un = $d(ge.content);
                                return Un == null ? void 0 : JSON.stringify(Un);
                              },
                            },
                            "ai.response.id": pr.id,
                            "ai.response.model": pr.modelId,
                            "ai.response.timestamp": pr.timestamp.toISOString(),
                            "ai.response.providerMetadata": {
                              output: () => JSON.stringify(ge.providerMetadata),
                            },
                            "ai.usage.inputTokens": ge.usage.inputTokens.total,
                            "ai.usage.inputTokenDetails.noCacheTokens":
                              ge.usage.inputTokens.noCache,
                            "ai.usage.inputTokenDetails.cacheReadTokens":
                              ge.usage.inputTokens.cacheRead,
                            "ai.usage.inputTokenDetails.cacheWriteTokens":
                              ge.usage.inputTokens.cacheWrite,
                            "ai.usage.outputTokens": ge.usage.outputTokens.total,
                            "ai.usage.outputTokenDetails.textTokens": ge.usage.outputTokens.text,
                            "ai.usage.outputTokenDetails.reasoningTokens":
                              ge.usage.outputTokens.reasoning,
                            "ai.usage.totalTokens": Fo.totalTokens,
                            "ai.usage.reasoningTokens": ge.usage.outputTokens.reasoning,
                            "ai.usage.cachedInputTokens": ge.usage.inputTokens.cacheRead,
                            "gen_ai.response.finish_reasons": [ge.finishReason.unified],
                            "gen_ai.response.id": pr.id,
                            "gen_ai.response.model": pr.modelId,
                            "gen_ai.usage.input_tokens": ge.usage.inputTokens.total,
                            "gen_ai.usage.output_tokens": ge.usage.outputTokens.total,
                          },
                        })
                      ),
                      { ...ge, response: pr }
                    );
                  },
                })
              )));
            let cr = await Promise.all(
                re.content
                  .filter((K) => K.type === "tool-call")
                  .map((K) =>
                    Gp({
                      toolCall: K,
                      tools: Pt,
                      repairToolCall: jt?.type === "none" ? void 0 : I,
                      system: a,
                      messages: ye,
                    })
                  )
              ),
              Et = jt?.type === "auto" ? void 0 : jt;
            if (
              Et != null &&
              (Et.type === "none"
                ? cr.length > 0
                : !cr.some((K) => Et.type === "required" || K.toolName === Et.toolName))
            )
              throw new Gs({
                toolChoice: Et,
                finishReason: re.finishReason.unified,
                provider: _e.provider,
                modelId: _e.modelId,
                content: re.content,
              });
            let Xt = {};
            for (let K of cr) {
              if (K.invalid) continue;
              let et = Pt?.[K.toolName];
              if (
                et != null &&
                (et.onInputStart != null &&
                  (await et.onInputStart({
                    toolCallId: K.toolCallId,
                    messages: ye,
                    abortSignal: ee,
                    experimental_context: g,
                  })),
                et.onInputAvailable != null &&
                  (await et.onInputAvailable({
                    input: K.input,
                    toolCallId: K.toolCallId,
                    messages: ye,
                    abortSignal: ee,
                    experimental_context: g,
                  })),
                await Xs({ tool: et, toolCall: K, messages: ye, experimental_context: g }))
              ) {
                let kr = J(),
                  er = await Up({
                    secret: x,
                    approvalId: kr,
                    toolCallId: K.toolCallId,
                    toolName: K.toolName,
                    input: K.input,
                  });
                Xt[K.toolCallId] = {
                  type: "tool-approval-request",
                  approvalId: kr,
                  toolCall: K,
                  ...(er != null ? { signature: er } : {}),
                };
              }
            }
            let $e = cr.filter((K) => K.invalid && K.dynamic && !K.providerExecuted);
            mt = [];
            for (let K of $e)
              mt.push({
                type: "tool-error",
                toolCallId: K.toolCallId,
                toolName: K.toolName,
                input: K.input,
                error: ke(K.error),
                dynamic: !0,
              });
            ((pt = cr.filter((K) => !K.providerExecuted)),
              Pt != null &&
                jp(re.finishReason.unified) &&
                mt.push(
                  ...(await qd({
                    toolCalls: pt.filter((K) => !K.invalid && Xt[K.toolCallId] == null),
                    tools: Pt,
                    tracer: bt,
                    telemetry: h,
                    messages: ye,
                    abortSignal: ee,
                    experimental_context: g,
                    stepNumber: O.length,
                    model: Me,
                    onToolCallStart: [H, Ge.onToolCallStart],
                    onToolCallFinish: [w, Ge.onToolCallFinish],
                  }))
                ));
            for (let K of cr) {
              if (!K.providerExecuted) continue;
              let et = Pt?.[K.toolName];
              et?.type === "provider" &&
                et.supportsDeferredResults &&
                (re.content.some(
                  (er) => er.type === "tool-result" && er.toolCallId === K.toolCallId
                ) ||
                  fe.set(K.toolCallId, { toolName: K.toolName }));
            }
            for (let K of re.content) K.type === "tool-result" && fe.delete(K.toolCallId);
            let Dt = xb({
              content: re.content,
              toolCalls: cr,
              toolOutputs: mt,
              toolApprovalRequests: Object.values(Xt),
              tools: Pt,
            });
            ct.push(...(await zs({ content: Dt, tools: Pt })));
            let Fa =
                (Lr = M?.requestBody) == null || Lr
                  ? (lr = re.request) != null
                    ? lr
                    : {}
                  : { ...re.request, body: void 0 },
              $n = {
                ...re.response,
                messages: structuredClone(ct),
                body:
                  (ur = M?.responseBody) == null || ur
                    ? (Oe = re.response) == null
                      ? void 0
                      : Oe.body
                    : void 0,
              },
              Ua = O.length,
              Qt = new Zp({
                stepNumber: Ua,
                model: Me,
                functionId: h?.functionId,
                metadata: h?.metadata,
                experimental_context: g,
                content: Dt,
                finishReason: re.finishReason.unified,
                rawFinishReason: re.finishReason.raw,
                usage: Pa(re.usage),
                warnings: re.warnings,
                providerMetadata: re.providerMetadata,
                request: Fa,
                response: $n,
              });
            (Ot({
              warnings: (Ut = re.warnings) != null ? Ut : [],
              provider: Me.provider,
              model: Me.modelId,
            }),
              O.push(Qt),
              await it({ event: Qt, callbacks: [F, Ge.onStepFinish] }));
          } finally {
            ze != null && clearTimeout(ze);
          }
        } while (
          ((pt.length > 0 && mt.length === pt.length) || fe.size > 0) &&
          !(await Kp({ stopConditions: se, steps: O }))
        );
        Ke.setAttributes(
          await he({
            telemetry: h,
            attributes: {
              "ai.response.finishReason": re.finishReason.unified,
              "ai.response.text": { output: () => Us(re.content) },
              "ai.response.reasoning": { output: () => Fs(re.content) },
              "ai.response.toolCalls": {
                output: () => {
                  let ze = $d(re.content);
                  return ze == null ? void 0 : JSON.stringify(ze);
                },
              },
              "ai.response.providerMetadata": { output: () => JSON.stringify(re.providerMetadata) },
            },
          })
        );
        let Q = O[O.length - 1],
          be = O.reduce((ze, ye) => Op(ze, ye.usage), {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0,
            reasoningTokens: void 0,
            cachedInputTokens: void 0,
          });
        (Ke.setAttributes(
          await he({
            telemetry: h,
            attributes: {
              "ai.usage.inputTokens": be.inputTokens,
              "ai.usage.inputTokenDetails.noCacheTokens":
                (_t = be.inputTokenDetails) == null ? void 0 : _t.noCacheTokens,
              "ai.usage.inputTokenDetails.cacheReadTokens":
                (Ir = be.inputTokenDetails) == null ? void 0 : Ir.cacheReadTokens,
              "ai.usage.inputTokenDetails.cacheWriteTokens":
                (Pn = be.inputTokenDetails) == null ? void 0 : Pn.cacheWriteTokens,
              "ai.usage.outputTokens": be.outputTokens,
              "ai.usage.outputTokenDetails.textTokens":
                (Sr = be.outputTokenDetails) == null ? void 0 : Sr.textTokens,
              "ai.usage.outputTokenDetails.reasoningTokens":
                (ja = be.outputTokenDetails) == null ? void 0 : ja.reasoningTokens,
              "ai.usage.totalTokens": be.totalTokens,
              "ai.usage.reasoningTokens":
                (Da = be.outputTokenDetails) == null ? void 0 : Da.reasoningTokens,
              "ai.usage.cachedInputTokens":
                (jn = be.inputTokenDetails) == null ? void 0 : jn.cacheReadTokens,
            },
          })
        ),
          await it({
            event: {
              stepNumber: Q.stepNumber,
              model: Q.model,
              functionId: Q.functionId,
              metadata: Q.metadata,
              experimental_context: Q.experimental_context,
              finishReason: Q.finishReason,
              rawFinishReason: Q.rawFinishReason,
              usage: Q.usage,
              content: Q.content,
              text: Q.text,
              reasoningText: Q.reasoningText,
              reasoning: Q.reasoning,
              files: Q.files,
              sources: Q.sources,
              toolCalls: Q.toolCalls,
              staticToolCalls: Q.staticToolCalls,
              dynamicToolCalls: Q.dynamicToolCalls,
              toolResults: Q.toolResults,
              staticToolResults: Q.staticToolResults,
              dynamicToolResults: Q.dynamicToolResults,
              request: Q.request,
              response: Q.response,
              warnings: Q.warnings,
              providerMetadata: Q.providerMetadata,
              steps: O,
              totalUsage: be,
            },
            callbacks: [U, Ge.onFinish],
          }));
        let ne;
        return (
          (Q.finishReason === "stop" || (Q.finishReason !== "tool-calls" && Q.text.length > 0)) &&
            (ne = await (_ ?? ko()).parseCompleteOutput(
              { text: Q.text },
              { response: Q.response, usage: Q.usage, finishReason: Q.finishReason }
            )),
          new Tb({ steps: O, totalUsage: be, output: ne })
        );
      },
    });
  } catch (Ke) {
    throw Aa(Ke);
  }
}
async function qd({
  toolCalls: e,
  tools: t,
  tracer: r,
  telemetry: a,
  messages: n,
  abortSignal: s,
  experimental_context: i,
  stepNumber: l,
  model: d,
  onToolCallStart: c,
  onToolCallFinish: u,
}) {
  return (
    await Promise.all(
      e.map(async (m) =>
        Ys({
          toolCall: m,
          tools: t,
          tracer: r,
          telemetry: a,
          messages: n,
          abortSignal: s,
          experimental_context: i,
          stepNumber: l,
          model: d,
          onToolCallStart: c,
          onToolCallFinish: u,
        })
      )
    )
  ).filter((m) => m != null);
}
var Tb = class {
  constructor(e) {
    ((this.steps = e.steps), (this._output = e.output), (this.totalUsage = e.totalUsage));
  }
  get finalStep() {
    return this.steps[this.steps.length - 1];
  }
  get content() {
    return this.finalStep.content;
  }
  get text() {
    return this.finalStep.text;
  }
  get files() {
    return this.finalStep.files;
  }
  get reasoningText() {
    return this.finalStep.reasoningText;
  }
  get reasoning() {
    return this.finalStep.reasoning;
  }
  get toolCalls() {
    return this.finalStep.toolCalls;
  }
  get staticToolCalls() {
    return this.finalStep.staticToolCalls;
  }
  get dynamicToolCalls() {
    return this.finalStep.dynamicToolCalls;
  }
  get toolResults() {
    return this.finalStep.toolResults;
  }
  get staticToolResults() {
    return this.finalStep.staticToolResults;
  }
  get dynamicToolResults() {
    return this.finalStep.dynamicToolResults;
  }
  get sources() {
    return this.finalStep.sources;
  }
  get finishReason() {
    return this.finalStep.finishReason;
  }
  get rawFinishReason() {
    return this.finalStep.rawFinishReason;
  }
  get warnings() {
    return this.finalStep.warnings;
  }
  get providerMetadata() {
    return this.finalStep.providerMetadata;
  }
  get response() {
    return this.finalStep.response;
  }
  get request() {
    return this.finalStep.request;
  }
  get usage() {
    return this.finalStep.usage;
  }
  get experimental_output() {
    return this.output;
  }
  get output() {
    if (this._output == null) throw new Tn();
    return this._output;
  }
};
function $d(e) {
  let t = e.filter((r) => r.type === "tool-call");
  if (t.length !== 0)
    return t.map((r) => ({ toolCallId: r.toolCallId, toolName: r.toolName, input: r.input }));
}
function xb({ content: e, toolCalls: t, toolOutputs: r, toolApprovalRequests: a, tools: n }) {
  let s = [];
  for (let i of e)
    switch (i.type) {
      case "text":
      case "reasoning":
      case "source":
        s.push(i);
        break;
      case "file": {
        s.push({
          type: "file",
          file: new Fr(i),
          ...(i.providerMetadata != null ? { providerMetadata: i.providerMetadata } : {}),
        });
        break;
      }
      case "tool-call": {
        s.push(t.find((l) => l.toolCallId === i.toolCallId));
        break;
      }
      case "tool-result": {
        let l = t.find((d) => d.toolCallId === i.toolCallId);
        if (l == null) {
          let d = n?.[i.toolName];
          if (!(d?.type === "provider" && d.supportsDeferredResults))
            throw new Error(`Tool call ${i.toolCallId} not found.`);
          i.isError
            ? s.push({
                type: "tool-error",
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                input: void 0,
                error: i.result,
                providerExecuted: !0,
                dynamic: i.dynamic,
                ...(i.providerMetadata != null ? { providerMetadata: i.providerMetadata } : {}),
                ...(d?.metadata != null ? { toolMetadata: d.metadata } : {}),
              })
            : s.push({
                type: "tool-result",
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                input: void 0,
                output: i.result,
                providerExecuted: !0,
                dynamic: i.dynamic,
                ...(i.providerMetadata != null ? { providerMetadata: i.providerMetadata } : {}),
                ...(d?.metadata != null ? { toolMetadata: d.metadata } : {}),
              });
          break;
        }
        i.isError
          ? s.push({
              type: "tool-error",
              toolCallId: i.toolCallId,
              toolName: i.toolName,
              input: l.input,
              error: i.result,
              providerExecuted: !0,
              dynamic: l.dynamic,
              ...(i.providerMetadata != null ? { providerMetadata: i.providerMetadata } : {}),
              ...(l.toolMetadata != null ? { toolMetadata: l.toolMetadata } : {}),
            })
          : s.push({
              type: "tool-result",
              toolCallId: i.toolCallId,
              toolName: i.toolName,
              input: l.input,
              output: i.result,
              providerExecuted: !0,
              dynamic: l.dynamic,
              ...(i.providerMetadata != null ? { providerMetadata: i.providerMetadata } : {}),
              ...(l.toolMetadata != null ? { toolMetadata: l.toolMetadata } : {}),
            });
        break;
      }
      case "tool-approval-request": {
        let l = t.find((d) => d.toolCallId === i.toolCallId);
        if (l == null) throw new Ao({ toolCallId: i.toolCallId, approvalId: i.approvalId });
        s.push({ type: "tool-approval-request", approvalId: i.approvalId, toolCall: l });
        break;
      }
    }
  return [...s, ...r, ...a];
}
function Cn(e, t) {
  let r = new Headers(e ?? {});
  for (let [a, n] of Object.entries(t)) r.has(a) || r.set(a, n);
  return r;
}
function ei({ status: e, statusText: t, headers: r, textStream: a }) {
  return new Response(a.pipeThrough(new TextEncoderStream()), {
    status: e ?? 200,
    statusText: t,
    headers: Cn(r, { "content-type": "text/plain; charset=utf-8" }),
  });
}
function Qp({ response: e, status: t, statusText: r, headers: a, stream: n }) {
  let s = t ?? 200;
  r !== void 0 ? e.writeHead(s, r, a) : e.writeHead(s, a);
  let i = n.getReader(),
    l = !1,
    d,
    c = () => {
      e.writableFinished ||
        ((l = !0), d?.(), i.cancel(new Error("Client disconnected.")).catch(() => {}));
    };
  return (
    e.once("close", c),
    e.destroyed && c(),
    (async () => {
      try {
        for (;;) {
          let { done: p, value: m } = await i.read();
          if (p || l || e.destroyed) break;
          e.write(m) ||
            (await new Promise((h) => {
              ((d = h), e.once("drain", h));
            }),
            (d = void 0));
        }
      } finally {
        (e.off("close", c), l || e.destroyed ? i.cancel().catch(() => {}) : e.end());
      }
    })()
  );
}
function ti({ response: e, status: t, statusText: r, headers: a, textStream: n }) {
  return Qp({
    response: e,
    status: t,
    statusText: r,
    headers: Object.fromEntries(Cn(a, { "content-type": "text/plain; charset=utf-8" }).entries()),
    stream: n.pipeThrough(new TextEncoderStream()),
  });
}
var Ib = `: stream-open

`,
  Sb = `: keep-alive

`;
function em({ stream: e, keepAliveMs: t }) {
  if (t == null) return e;
  if (!Number.isFinite(t) || t <= 0 || t > 2147483647)
    throw new Error(
      "keepAliveMs must be a positive finite timer duration no greater than 2147483647"
    );
  let r = e.getReader(),
    a,
    n = !1,
    s = () => {
      (clearTimeout(a), (a = void 0));
    },
    i = (l) => {
      (s(),
        (a = setTimeout(() => {
          n || (l.desiredSize != null && l.desiredSize > 0 && l.enqueue(Sb), i(l));
        }, t)));
    };
  return new ReadableStream({
    start(l) {
      (l.enqueue(Ib), i(l));
    },
    pull(l) {
      return r.read().then(
        (d) => {
          (s(), !n && (d.done ? l.close() : (l.enqueue(d.value), i(l))));
        },
        (d) => {
          if ((s(), !n)) throw d;
        }
      );
    },
    async cancel(l) {
      ((n = !0), s(), await r.cancel(l));
    },
  });
}
var ri = class extends TransformStream {
    constructor() {
      super({
        transform(e, t) {
          t.enqueue(`data: ${JSON.stringify(e)}

`);
        },
        flush(e) {
          e.enqueue(`data: [DONE]

`);
        },
      });
    }
  },
  ai = {
    "content-type": "text/event-stream",
    "cache-control": "no-cache",
    connection: "keep-alive",
    "x-vercel-ai-ui-message-stream": "v1",
    "x-accel-buffering": "no",
  };
function ni({
  status: e,
  statusText: t,
  headers: r,
  stream: a,
  keepAliveMs: n,
  consumeSseStream: s,
}) {
  let i = em({ stream: a.pipeThrough(new ri()), keepAliveMs: n });
  if (s) {
    let [l, d] = i.tee();
    ((i = l), s({ stream: d }));
  }
  return new Response(i.pipeThrough(new TextEncoderStream()), {
    status: e,
    statusText: t,
    headers: Cn(r, ai),
  });
}
function Eb({ originalMessages: e, responseMessageId: t }) {
  if (e == null) return;
  let r = e[e.length - 1];
  return r?.role === "assistant" ? r.id : typeof t == "function" ? t() : t;
}
var _n = o.record(o.string(), Yr.optional()),
  oi = Z(() =>
    G(
      o.union([
        o.looseObject({
          type: o.literal("text-start"),
          id: o.string(),
          providerMetadata: le.optional(),
        }),
        o.looseObject({
          type: o.literal("text-delta"),
          id: o.string(),
          delta: o.string(),
          providerMetadata: le.optional(),
        }),
        o.looseObject({
          type: o.literal("text-end"),
          id: o.string(),
          providerMetadata: le.optional(),
        }),
        o.looseObject({ type: o.literal("error"), errorText: o.string() }),
        o.looseObject({
          type: o.literal("tool-input-start"),
          toolCallId: o.string(),
          toolName: o.string(),
          inputEncoding: o.enum(["json", "text"]).optional(),
          providerExecuted: o.boolean().optional(),
          providerMetadata: le.optional(),
          toolMetadata: _n.optional(),
          dynamic: o.boolean().optional(),
          title: o.string().optional(),
        }),
        o.looseObject({
          type: o.literal("tool-input-delta"),
          toolCallId: o.string(),
          inputTextDelta: o.string(),
        }),
        o.looseObject({
          type: o.literal("tool-input-available"),
          toolCallId: o.string(),
          toolName: o.string(),
          input: o.unknown(),
          providerExecuted: o.boolean().optional(),
          providerMetadata: le.optional(),
          toolMetadata: _n.optional(),
          dynamic: o.boolean().optional(),
          title: o.string().optional(),
        }),
        o.looseObject({
          type: o.literal("tool-input-error"),
          toolCallId: o.string(),
          toolName: o.string(),
          input: o.unknown(),
          providerExecuted: o.boolean().optional(),
          providerMetadata: le.optional(),
          toolMetadata: _n.optional(),
          dynamic: o.boolean().optional(),
          errorText: o.string(),
          title: o.string().optional(),
        }),
        o.looseObject({
          type: o.literal("tool-approval-request"),
          approvalId: o.string(),
          toolCallId: o.string(),
          approvalDescriptor: o.unknown().optional(),
          inputSchemaInput: o.unknown().optional(),
          signature: o.string().optional(),
        }),
        o.looseObject({
          type: o.literal("tool-output-available"),
          toolCallId: o.string(),
          output: o.unknown(),
          providerExecuted: o.boolean().optional(),
          providerMetadata: le.optional(),
          toolMetadata: _n.optional(),
          dynamic: o.boolean().optional(),
          preliminary: o.boolean().optional(),
        }),
        o.looseObject({
          type: o.literal("tool-output-error"),
          toolCallId: o.string(),
          errorText: o.string(),
          providerExecuted: o.boolean().optional(),
          providerMetadata: le.optional(),
          toolMetadata: _n.optional(),
          dynamic: o.boolean().optional(),
        }),
        o.looseObject({ type: o.literal("tool-output-denied"), toolCallId: o.string() }),
        o.looseObject({
          type: o.literal("reasoning-start"),
          id: o.string(),
          providerMetadata: le.optional(),
        }),
        o.looseObject({
          type: o.literal("reasoning-delta"),
          id: o.string(),
          delta: o.string(),
          providerMetadata: le.optional(),
        }),
        o.looseObject({
          type: o.literal("reasoning-end"),
          id: o.string(),
          providerMetadata: le.optional(),
        }),
        o.looseObject({
          type: o.literal("source-url"),
          sourceId: o.string(),
          url: o.string(),
          title: o.string().optional(),
          providerMetadata: le.optional(),
        }),
        o.looseObject({
          type: o.literal("source-document"),
          sourceId: o.string(),
          mediaType: o.string(),
          title: o.string(),
          filename: o.string().optional(),
          providerMetadata: le.optional(),
        }),
        o.looseObject({
          type: o.literal("file"),
          url: o.string(),
          mediaType: o.string(),
          providerMetadata: le.optional(),
        }),
        o.looseObject({
          type: o.custom((e) => typeof e == "string" && e.startsWith("data-"), {
            message: 'Type must start with "data-"',
          }),
          id: o.string().optional(),
          data: o.unknown(),
          transient: o.boolean().optional(),
        }),
        o.looseObject({ type: o.literal("start-step") }),
        o.looseObject({ type: o.literal("finish-step") }),
        o.looseObject({
          type: o.literal("start"),
          messageId: o.string().optional(),
          messageMetadata: o.unknown().optional(),
        }),
        o.looseObject({
          type: o.literal("finish"),
          finishReason: o
            .enum(["stop", "length", "content-filter", "tool-calls", "error", "other"])
            .optional(),
          messageMetadata: o.unknown().optional(),
        }),
        o.looseObject({ type: o.literal("abort"), reason: o.string().optional() }),
        o.looseObject({ type: o.literal("message-metadata"), messageMetadata: o.unknown() }),
      ])
    )
  );
function Mb(e) {
  return e.type.startsWith("data-");
}
function Wt() {
  return Object.create(null);
}
function Io(e) {
  return e.type.startsWith("data-");
}
function So(e) {
  return e.type === "text";
}
function Eo(e) {
  return e.type === "file";
}
function Bs(e) {
  return e.type === "reasoning";
}
function Sn(e) {
  return e.type.startsWith("tool-");
}
function si(e) {
  return e.type === "dynamic-tool";
}
function Ze(e) {
  return Sn(e) || si(e);
}
var kb = Ze;
function En(e) {
  return e.type.split("-").slice(1).join("-");
}
function In(e) {
  return si(e) ? e.toolName : En(e);
}
var Rb = In;
function Do({ lastMessage: e, messageId: t }) {
  var r;
  let a = e?.role === "assistant" ? e : { id: t, metadata: void 0, role: "assistant", parts: [] },
    n = Wt(),
    s = a.parts.findLastIndex((l) => l.type === "step-start"),
    i = 0;
  for (let l of a.parts.slice(s + 1)) {
    if (!Ze(l)) continue;
    let d = i;
    (Sn(l) && i++,
      l.state === "input-streaming" &&
        (n[l.toolCallId] = {
          text: (r = l.rawInput) != null ? r : "",
          inputEncoding: l.inputEncoding,
          index: d,
          toolName: l.type === "dynamic-tool" ? l.toolName : En(l),
          dynamic: l.type === "dynamic-tool",
          title: l.title,
          toolMetadata: l.toolMetadata,
        }));
  }
  return { message: a, activeTextParts: Wt(), activeReasoningParts: Wt(), partialToolCalls: n };
}
function ii({
  stream: e,
  messageMetadataSchema: t,
  dataPartSchemas: r,
  runUpdateMessageJob: a,
  onError: n,
  onToolCall: s,
  onData: i,
  resetStateOnMessageIdChange: l = !1,
  resetStateOnFirstMessageStart: d = !1,
}) {
  let c = !0;
  return e.pipeThrough(
    new TransformStream({
      async transform(u, p) {
        await a(async ({ state: m, write: _ }) => {
          var h, b, y, f, v, T, I, E, g;
          function x() {
            let w = m.message.parts,
              F = w.length - 1;
            for (; F >= 0 && w[F].type !== "step-start";) F--;
            return w.slice(F + 1);
          }
          function M() {
            return x().filter(Ze);
          }
          function J(w) {
            let U = M().find((k) => k.toolCallId === w);
            if (U == null) {
              let k = m.message.parts;
              for (let R = k.length - 1; R >= 0; R--) {
                let q = k[R];
                if (Ze(q) && q.toolCallId === w) {
                  U = q;
                  break;
                }
              }
            }
            if (U == null)
              throw new Kr({
                chunkType: "tool-invocation",
                chunkId: w,
                message: `No tool invocation found for tool call ID "${w}".`,
              });
            return U;
          }
          function N(w, F) {
            var U;
            let k = F ?? x().find((se) => Sn(se) && se.toolCallId === w.toolCallId),
              R = w,
              q = k;
            if (k != null) {
              ((k.state = w.state),
                (q.type = `tool-${w.toolName}`),
                (q.input = R.input),
                (q.output = R.output),
                (q.errorText = R.errorText),
                (q.rawInput = R.rawInput),
                R.inputEncoding != null
                  ? (q.inputEncoding = R.inputEncoding)
                  : delete q.inputEncoding,
                (q.preliminary = R.preliminary),
                w.title !== void 0 && (q.title = w.title),
                w.toolMetadata !== void 0 && (q.toolMetadata = w.toolMetadata),
                (q.providerExecuted = (U = R.providerExecuted) != null ? U : k.providerExecuted));
              let se = R.providerMetadata;
              if (se != null)
                if (w.state === "output-available" || w.state === "output-error") {
                  let de = k;
                  de.resultProviderMetadata = se;
                } else k.callProviderMetadata = se;
            } else
              m.message.parts.push({
                type: `tool-${w.toolName}`,
                toolCallId: w.toolCallId,
                state: w.state,
                title: w.title,
                ...(w.toolMetadata !== void 0 ? { toolMetadata: w.toolMetadata } : {}),
                input: R.input,
                ...(R.inputEncoding != null ? { inputEncoding: R.inputEncoding } : {}),
                output: R.output,
                rawInput: R.rawInput,
                errorText: R.errorText,
                providerExecuted: R.providerExecuted,
                preliminary: R.preliminary,
                ...(R.providerMetadata != null &&
                (w.state === "output-available" || w.state === "output-error")
                  ? { resultProviderMetadata: R.providerMetadata }
                  : {}),
                ...(R.providerMetadata != null &&
                !(w.state === "output-available" || w.state === "output-error")
                  ? { callProviderMetadata: R.providerMetadata }
                  : {}),
              });
          }
          function D(w, F) {
            var U;
            let k =
                F ?? x().find((se) => se.type === "dynamic-tool" && se.toolCallId === w.toolCallId),
              R = w,
              q = k;
            if (k != null) {
              ((k.state = w.state),
                (q.toolName = w.toolName),
                (q.input = R.input),
                (q.output = R.output),
                (q.errorText = R.errorText),
                (q.rawInput = R.rawInput),
                R.inputEncoding != null
                  ? (q.inputEncoding = R.inputEncoding)
                  : delete q.inputEncoding,
                (q.preliminary = R.preliminary),
                w.title !== void 0 && (q.title = w.title),
                w.toolMetadata !== void 0 && (q.toolMetadata = w.toolMetadata),
                (q.providerExecuted = (U = R.providerExecuted) != null ? U : k.providerExecuted));
              let se = R.providerMetadata;
              if (se != null)
                if (w.state === "output-available" || w.state === "output-error") {
                  let de = k;
                  de.resultProviderMetadata = se;
                } else k.callProviderMetadata = se;
            } else
              m.message.parts.push({
                type: "dynamic-tool",
                toolName: w.toolName,
                toolCallId: w.toolCallId,
                state: w.state,
                input: R.input,
                ...(R.inputEncoding != null ? { inputEncoding: R.inputEncoding } : {}),
                output: R.output,
                errorText: R.errorText,
                preliminary: R.preliminary,
                providerExecuted: R.providerExecuted,
                title: w.title,
                ...(w.toolMetadata !== void 0 ? { toolMetadata: w.toolMetadata } : {}),
                ...(R.providerMetadata != null &&
                (w.state === "output-available" || w.state === "output-error")
                  ? { resultProviderMetadata: R.providerMetadata }
                  : {}),
                ...(R.providerMetadata != null &&
                !(w.state === "output-available" || w.state === "output-error")
                  ? { callProviderMetadata: R.providerMetadata }
                  : {}),
              });
          }
          async function H(w) {
            if (w != null) {
              let F = m.message.metadata != null ? Qr(m.message.metadata, w) : w;
              (t != null &&
                (await Ht({
                  value: F,
                  schema: t,
                  context: { field: "message.metadata", entityId: m.message.id },
                })),
                (m.message.metadata = F));
            }
          }
          switch (u.type) {
            case "text-start": {
              let w = {
                type: "text",
                text: "",
                providerMetadata: u.providerMetadata,
                state: "streaming",
              };
              ((m.activeTextParts[u.id] = w), m.message.parts.push(w), _());
              break;
            }
            case "text-delta": {
              let w = m.activeTextParts[u.id];
              if (w == null)
                throw new Kr({
                  chunkType: "text-delta",
                  chunkId: u.id,
                  message: `Received text-delta for missing text part with ID "${u.id}". Ensure a "text-start" chunk is sent before any "text-delta" chunks.`,
                });
              ((w.text += u.delta),
                (w.providerMetadata = (h = u.providerMetadata) != null ? h : w.providerMetadata),
                _());
              break;
            }
            case "text-end": {
              let w = m.activeTextParts[u.id];
              if (w == null)
                throw new Kr({
                  chunkType: "text-end",
                  chunkId: u.id,
                  message: `Received text-end for missing text part with ID "${u.id}". Ensure a "text-start" chunk is sent before any "text-end" chunks.`,
                });
              ((w.state = "done"),
                (w.providerMetadata = (b = u.providerMetadata) != null ? b : w.providerMetadata),
                delete m.activeTextParts[u.id],
                _());
              break;
            }
            case "reasoning-start": {
              let w = {
                type: "reasoning",
                id: u.id,
                text: "",
                providerMetadata: u.providerMetadata,
                state: "streaming",
              };
              ((m.activeReasoningParts[u.id] = w), m.message.parts.push(w), _());
              break;
            }
            case "reasoning-delta": {
              let w = m.activeReasoningParts[u.id];
              if (w == null)
                throw new Kr({
                  chunkType: "reasoning-delta",
                  chunkId: u.id,
                  message: `Received reasoning-delta for missing reasoning part with ID "${u.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-delta" chunks.`,
                });
              ((w.text += u.delta),
                (w.providerMetadata = (y = u.providerMetadata) != null ? y : w.providerMetadata),
                _());
              break;
            }
            case "reasoning-end": {
              let w = m.activeReasoningParts[u.id];
              if (w == null)
                throw new Kr({
                  chunkType: "reasoning-end",
                  chunkId: u.id,
                  message: `Received reasoning-end for missing reasoning part with ID "${u.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-end" chunks.`,
                });
              ((w.providerMetadata = (f = u.providerMetadata) != null ? f : w.providerMetadata),
                (w.state = "done"),
                delete m.activeReasoningParts[u.id],
                _());
              break;
            }
            case "file": {
              (m.message.parts.push({
                type: "file",
                mediaType: u.mediaType,
                url: u.url,
                ...(u.providerMetadata != null ? { providerMetadata: u.providerMetadata } : {}),
              }),
                _());
              break;
            }
            case "source-url": {
              (m.message.parts.push({
                type: "source-url",
                sourceId: u.sourceId,
                url: u.url,
                title: u.title,
                providerMetadata: u.providerMetadata,
              }),
                _());
              break;
            }
            case "source-document": {
              (m.message.parts.push({
                type: "source-document",
                sourceId: u.sourceId,
                mediaType: u.mediaType,
                title: u.title,
                filename: u.filename,
                providerMetadata: u.providerMetadata,
              }),
                _());
              break;
            }
            case "tool-input-start": {
              let w = x().filter(Sn);
              ((m.partialToolCalls[u.toolCallId] = {
                text: "",
                inputEncoding: u.inputEncoding,
                toolName: u.toolName,
                index: w.length,
                dynamic: u.dynamic,
                title: u.title,
                toolMetadata: u.toolMetadata,
              }),
                u.dynamic
                  ? D({
                      toolCallId: u.toolCallId,
                      toolName: u.toolName,
                      state: "input-streaming",
                      inputEncoding: u.inputEncoding,
                      input: void 0,
                      providerExecuted: u.providerExecuted,
                      title: u.title,
                      toolMetadata: u.toolMetadata,
                      providerMetadata: u.providerMetadata,
                    })
                  : N({
                      toolCallId: u.toolCallId,
                      toolName: u.toolName,
                      state: "input-streaming",
                      inputEncoding: u.inputEncoding,
                      input: void 0,
                      providerExecuted: u.providerExecuted,
                      title: u.title,
                      toolMetadata: u.toolMetadata,
                      providerMetadata: u.providerMetadata,
                    }),
                _());
              break;
            }
            case "tool-input-delta": {
              let w = m.partialToolCalls[u.toolCallId];
              if (w == null)
                throw new Kr({
                  chunkType: "tool-input-delta",
                  chunkId: u.toolCallId,
                  message: `Received tool-input-delta for missing tool call with ID "${u.toolCallId}". Ensure a "tool-input-start" chunk is sent before any "tool-input-delta" chunks.`,
                });
              w.text += u.inputTextDelta;
              let F = w.inputEncoding === "text" ? w.text : (await ra(w.text)).value;
              (w.dynamic
                ? D({
                    toolCallId: u.toolCallId,
                    toolName: w.toolName,
                    state: "input-streaming",
                    inputEncoding: w.inputEncoding,
                    input: F,
                    rawInput: w.text,
                    title: w.title,
                    toolMetadata: w.toolMetadata,
                  })
                : N({
                    toolCallId: u.toolCallId,
                    toolName: w.toolName,
                    state: "input-streaming",
                    inputEncoding: w.inputEncoding,
                    input: F,
                    rawInput: w.text,
                    title: w.title,
                    toolMetadata: w.toolMetadata,
                  }),
                _());
              break;
            }
            case "tool-input-available": {
              (u.dynamic
                ? D({
                    toolCallId: u.toolCallId,
                    toolName: u.toolName,
                    state: "input-available",
                    input: u.input,
                    providerExecuted: u.providerExecuted,
                    providerMetadata: u.providerMetadata,
                    title: u.title,
                    toolMetadata: u.toolMetadata,
                  })
                : N({
                    toolCallId: u.toolCallId,
                    toolName: u.toolName,
                    state: "input-available",
                    input: u.input,
                    providerExecuted: u.providerExecuted,
                    providerMetadata: u.providerMetadata,
                    title: u.title,
                    toolMetadata: u.toolMetadata,
                  }),
                _(),
                s && !u.providerExecuted && (await s({ toolCall: u })));
              break;
            }
            case "tool-input-error": {
              let w = x()
                .filter(Ze)
                .find((U) => U.toolCallId === u.toolCallId);
              ((w != null ? w.type === "dynamic-tool" : !!u.dynamic)
                ? D({
                    toolCallId: u.toolCallId,
                    toolName: u.toolName,
                    state: "output-error",
                    input: u.input,
                    errorText: u.errorText,
                    providerExecuted: u.providerExecuted,
                    providerMetadata: u.providerMetadata,
                    toolMetadata: u.toolMetadata,
                  })
                : N({
                    toolCallId: u.toolCallId,
                    toolName: u.toolName,
                    state: "output-error",
                    input: void 0,
                    rawInput: u.input,
                    errorText: u.errorText,
                    providerExecuted: u.providerExecuted,
                    providerMetadata: u.providerMetadata,
                    toolMetadata: u.toolMetadata,
                  }),
                _());
              break;
            }
            case "tool-approval-request": {
              let w = J(u.toolCallId);
              ((w.state = "approval-requested"),
                (w.approval = {
                  id: u.approvalId,
                  ...(u.approvalDescriptor != null ? { descriptor: u.approvalDescriptor } : {}),
                  ...(Object.prototype.hasOwnProperty.call(u, "inputSchemaInput")
                    ? { inputSchemaInput: u.inputSchemaInput }
                    : {}),
                  ...(u.signature != null ? { signature: u.signature } : {}),
                }),
                _());
              break;
            }
            case "tool-output-denied": {
              let w = J(u.toolCallId);
              ((w.state = "output-denied"), _());
              break;
            }
            case "tool-output-available": {
              let w = J(u.toolCallId);
              (w.type === "dynamic-tool"
                ? D(
                    {
                      toolCallId: u.toolCallId,
                      toolName: w.toolName,
                      state: "output-available",
                      input: w.input,
                      output: u.output,
                      preliminary: u.preliminary,
                      providerExecuted: u.providerExecuted,
                      providerMetadata: u.providerMetadata,
                      title: w.title,
                      toolMetadata: (v = u.toolMetadata) != null ? v : w.toolMetadata,
                    },
                    w
                  )
                : N(
                    {
                      toolCallId: u.toolCallId,
                      toolName: En(w),
                      state: "output-available",
                      input: w.input,
                      output: u.output,
                      providerExecuted: u.providerExecuted,
                      preliminary: u.preliminary,
                      providerMetadata: u.providerMetadata,
                      title: w.title,
                      toolMetadata: (T = u.toolMetadata) != null ? T : w.toolMetadata,
                    },
                    w
                  ),
                _());
              break;
            }
            case "tool-output-error": {
              let w = J(u.toolCallId);
              (w.type === "dynamic-tool"
                ? D(
                    {
                      toolCallId: u.toolCallId,
                      toolName: w.toolName,
                      state: "output-error",
                      input: w.input,
                      errorText: u.errorText,
                      providerExecuted: u.providerExecuted,
                      providerMetadata: u.providerMetadata,
                      title: w.title,
                      toolMetadata: (I = u.toolMetadata) != null ? I : w.toolMetadata,
                    },
                    w
                  )
                : N(
                    {
                      toolCallId: u.toolCallId,
                      toolName: En(w),
                      state: "output-error",
                      input: w.input,
                      rawInput: w.rawInput,
                      errorText: u.errorText,
                      providerExecuted: u.providerExecuted,
                      providerMetadata: u.providerMetadata,
                      title: w.title,
                      toolMetadata: (E = u.toolMetadata) != null ? E : w.toolMetadata,
                    },
                    w
                  ),
                _());
              break;
            }
            case "start-step": {
              m.message.parts.push({ type: "step-start" });
              break;
            }
            case "finish-step": {
              ((m.activeTextParts = Wt()), (m.activeReasoningParts = Wt()));
              break;
            }
            case "start": {
              let w = (d && c) || (l && u.messageId != null && u.messageId !== m.message.id);
              ((c = !1),
                w &&
                  Object.assign(
                    m,
                    Do({
                      lastMessage: void 0,
                      messageId: (g = u.messageId) != null ? g : m.message.id,
                    }),
                    { finishReason: void 0 }
                  ),
                u.messageId != null && (m.message.id = u.messageId),
                await H(u.messageMetadata),
                (w || u.messageId != null || u.messageMetadata != null) && _({ updateStatus: !1 }));
              break;
            }
            case "finish": {
              (u.finishReason != null && (m.finishReason = u.finishReason),
                await H(u.messageMetadata),
                u.messageMetadata != null && _());
              break;
            }
            case "message-metadata": {
              (await H(u.messageMetadata), u.messageMetadata != null && _());
              break;
            }
            case "error": {
              n?.(new Error(u.errorText));
              break;
            }
            default:
              if (Mb(u)) {
                if (r?.[u.type] != null) {
                  let U = m.message.parts.findIndex(
                      (R) => "id" in R && "data" in R && R.id === u.id && R.type === u.type
                    ),
                    k = U >= 0 ? U : m.message.parts.length;
                  await Ht({
                    value: u.data,
                    schema: r[u.type],
                    context: {
                      field: `message.parts[${k}].data`,
                      entityName: u.type,
                      entityId: u.id,
                    },
                  });
                }
                let w = u;
                if (w.transient) {
                  i?.(w);
                  break;
                }
                let F =
                  w.id != null
                    ? m.message.parts.find((U) => w.type === U.type && w.id === U.id)
                    : void 0;
                (F != null ? (F.data = w.data) : m.message.parts.push(w), i?.(w), _());
              }
          }
          p.enqueue(u);
        });
      },
    })
  );
}
function tm({
  messageId: e,
  originalMessages: t = [],
  onStepFinish: r,
  onFinish: a,
  onError: n,
  stream: s,
  getOutcome: i,
}) {
  let l = t?.[t.length - 1];
  l?.role !== "assistant" ? (l = void 0) : (e = l.id);
  let d = !1,
    c = !1,
    u,
    p = (v) => {
      ((c = !0), (u = v));
    },
    m = s.pipeThrough(
      new TransformStream({
        transform(v, T) {
          try {
            let I = v;
            if (v.type === "start") {
              let E = v;
              E.messageId == null && e != null && (I = { ...E, messageId: e });
            }
            (v.type === "abort" && (d = !0), T.enqueue(I));
          } catch (I) {
            throw (p(I), I);
          }
        },
      })
    );
  if (a == null && r == null) return m;
  let _ = Do({ lastMessage: l ? structuredClone(l) : void 0, messageId: e ?? "" }),
    h = async (v) => {
      try {
        await v({ state: _, write: () => {} });
      } catch (T) {
        throw (p(T), T);
      }
    },
    b = !1,
    y = async () => {
      var v;
      if (b || !a) return;
      b = !0;
      let T = _.message.id === l?.id,
        I = (v = i?.()) != null ? v : { status: "unknown" },
        E = c
          ? { status: "failed", error: u }
          : I.status === "unknown" && d
            ? { status: "aborted" }
            : I;
      await a({
        isAborted: d || E.status === "aborted",
        isContinuation: T,
        outcome: E,
        responseMessage: _.message,
        messages: [...(T ? t.slice(0, -1) : t), _.message],
        finishReason: _.finishReason,
      });
    },
    f = async () => {
      if (!r) return;
      let v = _.message.id === l?.id;
      try {
        await r({
          isContinuation: v,
          responseMessage: structuredClone(_.message),
          messages: [...(v ? t.slice(0, -1) : t), structuredClone(_.message)],
        });
      } catch (T) {
        try {
          n(T);
        } catch (I) {
          throw (p(I), await y(), I);
        }
      }
    };
  return ii({ stream: m, runUpdateMessageJob: h, onError: n }).pipeThrough(
    new TransformStream({
      async transform(v, T) {
        (v.type === "finish-step" && (await f()), T.enqueue(v));
      },
      async cancel() {
        await y();
      },
      async flush() {
        await y();
      },
    })
  );
}
function li({
  response: e,
  status: t,
  statusText: r,
  headers: a,
  stream: n,
  keepAliveMs: s,
  consumeSseStream: i,
}) {
  let l = em({ stream: n.pipeThrough(new ri()), keepAliveMs: s });
  if (i) {
    let [d, c] = l.tee();
    ((l = d), i({ stream: c }));
  }
  return Qp({
    response: e,
    status: t,
    statusText: r,
    headers: Object.fromEntries(Cn(a, ai).entries()),
    stream: l.pipeThrough(new TextEncoderStream()),
  });
}
function or(e) {
  let t = e.pipeThrough(new TransformStream());
  return (
    (t[Symbol.asyncIterator] = function () {
      let r = this.getReader(),
        a = !1;
      async function n(s) {
        var i;
        if (!a) {
          a = !0;
          try {
            s && (await ((i = r.cancel) == null ? void 0 : i.call(r)));
          } finally {
            try {
              r.releaseLock();
            } catch {}
          }
        }
      }
      return {
        async next() {
          if (a) return { done: !0, value: void 0 };
          let { done: s, value: i } = await r.read();
          return s ? (await n(!0), { done: !0, value: void 0 }) : { done: !1, value: i };
        },
        async return() {
          return (await n(!0), { done: !0, value: void 0 });
        },
        async throw(s) {
          throw (await n(!0), s);
        },
      };
    }),
    t
  );
}
async function An({ stream: e, onError: t, abortSignal: r }) {
  let a = e.getReader(),
    n = () => {
      a.cancel().catch(() => {});
    };
  r?.aborted ? n() : r?.addEventListener("abort", n, { once: !0 });
  try {
    for (;;) {
      let { done: s } = await a.read();
      if (s) break;
    }
  } catch (s) {
    t?.(s);
  } finally {
    (r?.removeEventListener("abort", n), a.releaseLock());
  }
}
function Js() {
  let e, t;
  return {
    promise: new Promise((a, n) => {
      ((e = a), (t = n));
    }),
    resolve: e,
    reject: t,
  };
}
function rm() {
  let e = [],
    t = null,
    r = !1,
    a = !1,
    n = Js(),
    s = () => {
      a ||
        ((r = !0),
        n.resolve(),
        e.forEach(({ reader: l, onCancel: d }) => {
          (d?.(), l.cancel());
        }),
        (e = []),
        t?.close());
    },
    i = async () => {
      var l;
      if (a) return;
      if (r && e.length === 0) {
        t?.close();
        return;
      }
      if (e.length === 0) return ((n = Js()), await n.promise, i());
      let d = e[0];
      try {
        let { value: c, done: u } = await d.reader.read();
        if (a) return;
        u ? (e.shift(), e.length === 0 && r ? t?.close() : await i()) : t?.enqueue(c);
      } catch (c) {
        if (a) return;
        ((l = d.onError) == null || l.call(d, c), t?.error(c), e.shift(), s());
      }
    };
  return {
    stream: new ReadableStream({
      start(l) {
        t = l;
      },
      pull: i,
      async cancel() {
        ((a = !0), (r = !0), n.resolve());
        for (let { reader: l, onCancel: d } of e) (d?.(), await l.cancel());
        e = [];
      },
    }),
    addStream: (l, d) => {
      var c;
      if (a) {
        ((c = d?.onCancel) == null || c.call(d), l.cancel().catch(() => {}));
        return;
      }
      if (r) throw new Error("Cannot add inner stream: outer stream is closed");
      (e.push({ reader: l.getReader(), ...d }), n.resolve());
    },
    close: () => {
      a || ((r = !0), n.resolve(), e.length === 0 && t?.close());
    },
    terminate: s,
  };
}
function Cb({
  tools: e,
  toolChoice: t,
  generatorStream: r,
  tracer: a,
  telemetry: n,
  system: s,
  messages: i,
  abortSignal: l,
  repairToolCall: d,
  experimental_context: c,
  toolApprovalSecret: u,
  generateId: p,
  stepNumber: m,
  model: _,
  onToolCallStart: h,
  onToolCallFinish: b,
}) {
  let y = null,
    f = !1,
    v = new ReadableStream({
      start(k) {
        y = k;
      },
      cancel() {
        f = !0;
      },
    });
  function T(k) {
    if (!f)
      try {
        y.enqueue(k);
      } catch {
        f = !0;
      }
  }
  function I() {
    if (!f) {
      f = !0;
      try {
        y.close();
      } catch {}
    }
  }
  let E = new Set(),
    g = [],
    x = new Map(),
    M = !1,
    J;
  function N() {
    M && E.size === 0 && (J != null && T(J), I());
  }
  function D(k) {
    let R = p();
    (E.add(R),
      Ys({
        toolCall: k,
        tools: e,
        tracer: a,
        telemetry: n,
        messages: i,
        abortSignal: l,
        experimental_context: c,
        stepNumber: m,
        model: _,
        onToolCallStart: h,
        onToolCallFinish: b,
        onPreliminaryToolResult: (q) => {
          T(q);
        },
      })
        .then((q) => {
          T(q);
        })
        .catch((q) => {
          T({ type: "error", error: q });
        })
        .finally(() => {
          (E.delete(R), N());
        }));
  }
  let H = new Map(),
    w = t?.type === "none",
    F = [],
    U = new TransformStream({
      async transform(k, R) {
        var q, se, de, X, z, ee;
        let ie = k.type;
        if (!(
          w &&
          (ie === "tool-input-start" ||
            ie === "tool-input-delta" ||
            ie === "tool-input-end" ||
            ie === "tool-approval-request")
        )) {
          if (w && (ie === "tool-call" || ie === "tool-result")) {
            F.push(k);
            return;
          }
          switch (ie) {
            case "stream-start":
            case "text-start":
            case "text-delta":
            case "text-end":
            case "reasoning-start":
            case "reasoning-delta":
            case "reasoning-end":
            case "source":
            case "response-metadata":
            case "error":
            case "raw": {
              R.enqueue(k);
              break;
            }
            case "tool-input-start": {
              (H.set(k.id, k.toolName),
                await ((se = (q = e?.[k.toolName]) == null ? void 0 : q.onInputStart) == null
                  ? void 0
                  : se.call(q, {
                      toolCallId: k.id,
                      messages: i,
                      abortSignal: l,
                      experimental_context: c,
                    })),
                R.enqueue(k));
              break;
            }
            case "tool-input-delta": {
              let $ = H.get(k.id);
              ($ != null &&
                (await ((X = (de = e?.[$]) == null ? void 0 : de.onInputDelta) == null
                  ? void 0
                  : X.call(de, {
                      inputTextDelta: k.delta,
                      toolCallId: k.id,
                      messages: i,
                      abortSignal: l,
                      experimental_context: c,
                    }))),
                R.enqueue(k));
              break;
            }
            case "tool-input-end": {
              (H.delete(k.id), R.enqueue(k));
              break;
            }
            case "file": {
              R.enqueue({
                type: "file",
                file: new lb({ data: k.data, mediaType: k.mediaType }),
                ...(k.providerMetadata != null ? { providerMetadata: k.providerMetadata } : {}),
              });
              break;
            }
            case "finish": {
              let $ =
                w && F.some((W) => W.type === "tool-call")
                  ? new Gs({
                      toolChoice: { type: "none" },
                      finishReason: k.finishReason.unified,
                      provider: (z = _?.provider) != null ? z : "unknown",
                      modelId: (ee = _?.modelId) != null ? ee : "unknown",
                      content: F,
                    })
                  : void 0;
              if (
                ((J = {
                  type: "finish",
                  finishReason: $ == null ? k.finishReason.unified : "error",
                  rawFinishReason: k.finishReason.raw,
                  usage: Pa(k.usage),
                  providerMetadata: k.providerMetadata,
                }),
                $ != null && R.enqueue({ type: "error", error: $ }),
                jp(k.finishReason.unified))
              )
                for (let W of g.splice(0)) D(W);
              else g.length = 0;
              break;
            }
            case "tool-approval-request": {
              let $ = x.get(k.toolCallId);
              if ($ == null) {
                T({
                  type: "error",
                  error: new Ao({ toolCallId: k.toolCallId, approvalId: k.approvalId }),
                });
                break;
              }
              R.enqueue({ type: "tool-approval-request", approvalId: k.approvalId, toolCall: $ });
              break;
            }
            case "tool-call": {
              try {
                let $ = await Gp({
                  toolCall: k,
                  tools: e,
                  repairToolCall: d,
                  system: s,
                  messages: i,
                });
                if ((x.set($.toolCallId, $), R.enqueue({ ...$ }), $.invalid)) {
                  $.providerExecuted ||
                    T({
                      type: "tool-error",
                      toolCallId: $.toolCallId,
                      toolName: $.toolName,
                      input: $.input,
                      error: ke($.error),
                      dynamic: !0,
                      title: $.title,
                      ...($.toolMetadata != null ? { toolMetadata: $.toolMetadata } : {}),
                    });
                  break;
                }
                let W = e?.[$.toolName];
                if (W == null) break;
                if (
                  (W.onInputAvailable != null &&
                    (await W.onInputAvailable({
                      input: $.input,
                      toolCallId: $.toolCallId,
                      messages: i,
                      abortSignal: l,
                      experimental_context: c,
                    })),
                  await Xs({ tool: W, toolCall: $, messages: i, experimental_context: c }))
                ) {
                  let Ce = p(),
                    Xe = await Up({
                      secret: u,
                      approvalId: Ce,
                      toolCallId: $.toolCallId,
                      toolName: $.toolName,
                      input: $.input,
                    });
                  T({
                    type: "tool-approval-request",
                    approvalId: Ce,
                    toolCall: $,
                    ...(Xe != null ? { signature: Xe } : {}),
                  });
                  break;
                }
                W.execute != null && $.providerExecuted !== !0 && g.push($);
              } catch ($) {
                T({ type: "error", error: $ });
              }
              break;
            }
            case "tool-result": {
              let $ = k.toolName,
                W = x.get(k.toolCallId);
              k.isError
                ? T({
                    type: "tool-error",
                    toolCallId: k.toolCallId,
                    toolName: $,
                    input: W?.input,
                    providerExecuted: !0,
                    error: k.result,
                    dynamic: k.dynamic,
                    ...(k.providerMetadata != null ? { providerMetadata: k.providerMetadata } : {}),
                    ...(W?.toolMetadata != null ? { toolMetadata: W.toolMetadata } : {}),
                  })
                : R.enqueue({
                    type: "tool-result",
                    toolCallId: k.toolCallId,
                    toolName: $,
                    input: W?.input,
                    output: k.result,
                    providerExecuted: !0,
                    dynamic: k.dynamic,
                    ...(k.providerMetadata != null ? { providerMetadata: k.providerMetadata } : {}),
                    ...(W?.toolMetadata != null ? { toolMetadata: W.toolMetadata } : {}),
                  });
              break;
            }
            default: {
              let $ = ie;
              throw new Error(`Unhandled chunk type: ${$}`);
            }
          }
        }
      },
      flush() {
        ((M = !0), N());
      },
    });
  return new ReadableStream({
    async start(k) {
      return Promise.all([
        r.pipeThrough(U).pipeTo(
          new WritableStream({
            write(R) {
              k.enqueue(R);
            },
            close() {},
          })
        ),
        v.pipeTo(
          new WritableStream({
            write(R) {
              k.enqueue(R);
            },
            close() {
              k.close();
            },
          })
        ),
      ]);
    },
  });
}
var Ab = Gt({ prefix: "aitxt", size: 24 }),
  Ob = {
    file: !0,
    source: !0,
    "text-start": !0,
    "text-end": !0,
    "text-delta": !0,
    "reasoning-start": !0,
    "reasoning-end": !0,
    "reasoning-delta": !0,
    "tool-input-start": !0,
    "tool-input-end": !0,
    "tool-input-delta": !0,
    "tool-approval-request": !0,
    "tool-call": !0,
    "tool-result": !0,
    "tool-error": !0,
    "stream-start": !1,
    "response-metadata": !1,
    finish: !1,
    error: !1,
    raw: !1,
  };
function am({
  model: e,
  tools: t,
  toolChoice: r,
  system: a,
  prompt: n,
  messages: s,
  allowSystemInMessages: i,
  maxRetries: l,
  abortSignal: d,
  timeout: c,
  headers: u,
  stopWhen: p = jo(1),
  experimental_output: m,
  output: _ = m,
  experimental_telemetry: h,
  prepareStep: b,
  providerOptions: y,
  experimental_activeTools: f,
  activeTools: v = f,
  experimental_repairToolCall: T,
  experimental_transform: I,
  experimental_download: E,
  includeRawChunks: g = !1,
  onChunk: x,
  onError: M = ({ error: z }) => {
    console.error(z);
  },
  onFinish: J,
  onAbort: N,
  onStepFinish: D,
  experimental_onStart: H,
  experimental_onStepStart: w,
  experimental_onToolCallStart: F,
  experimental_onToolCallFinish: U,
  experimental_context: k,
  experimental_toolApprovalSecret: R,
  experimental_include: q,
  _internal: { now: se = xn, generateId: de = Ab } = {},
  ...X
}) {
  let z = Ws(c),
    ee = gp(c),
    ie = jy(c),
    $ = ee != null ? new AbortController() : void 0,
    W = ie != null ? new AbortController() : void 0;
  return new Pb({
    model: Oa(e),
    telemetry: h,
    headers: u,
    settings: X,
    maxRetries: l,
    abortSignal: Yp(d, z != null ? AbortSignal.timeout(z) : void 0, $?.signal, W?.signal),
    stepTimeoutMs: ee,
    stepAbortController: $,
    chunkTimeoutMs: ie,
    chunkAbortController: W,
    system: a,
    prompt: n,
    messages: s,
    allowSystemInMessages: i,
    tools: t,
    toolChoice: r,
    transforms: sr(I),
    activeTools: v,
    repairToolCall: T,
    stopConditions: sr(p),
    output: _,
    providerOptions: y,
    prepareStep: b,
    includeRawChunks: g,
    timeout: c,
    stopWhen: p,
    originalAbortSignal: d,
    onChunk: x,
    onError: M,
    onFinish: J,
    onAbort: N,
    onStepFinish: D,
    onStart: H,
    onStepStart: w,
    onToolCallStart: F,
    onToolCallFinish: U,
    now: se,
    generateId: de,
    experimental_context: k,
    experimental_toolApprovalSecret: R,
    download: E,
    include: q,
  });
}
function Nb(e) {
  let t,
    r = "",
    a = "",
    n,
    s = jd(e),
    i,
    l,
    d = !1;
  function c() {
    ((s = jd(e)), (i = void 0), (t = void 0), (r = ""), (a = ""), (n = void 0), (l = ""));
  }
  function u({ controller: p, partialOutput: m = void 0 }) {
    (p.enqueue({
      part: { type: "text-delta", id: t, text: a, providerMetadata: n },
      partialOutput: m,
    }),
      (a = ""));
  }
  return new TransformStream({
    async transform(p, m) {
      var _;
      if (
        (p.type === "start-step" && c(),
        p.type === "finish-step" && a.length > 0 && u({ controller: m }),
        p.type !== "text-delta" && p.type !== "text-start" && p.type !== "text-end")
      ) {
        m.enqueue({ part: p, partialOutput: void 0 });
        return;
      }
      if (t == null) t = p.id;
      else if (p.id !== t) {
        m.enqueue({ part: p, partialOutput: void 0 });
        return;
      }
      if (p.type === "text-start") {
        m.enqueue({ part: p, partialOutput: void 0 });
        return;
      }
      if (p.type === "text-end") {
        (a.length > 0 && u({ controller: m }), m.enqueue({ part: p, partialOutput: void 0 }));
        return;
      }
      if (
        ((r += p.text),
        (a += p.text),
        (n = (_ = p.providerMetadata) != null ? _ : n),
        p.text.length === 0 && p.providerMetadata != null)
      ) {
        m.enqueue({ part: p, partialOutput: void 0 });
        return;
      }
      if (s != null) {
        let b = await s(p.text);
        if (b !== "fallback") {
          b != null && ((i = b.partial), u({ controller: m, partialOutput: i }));
          return;
        }
        ((s = void 0), i != null && ((l = JSON.stringify(i)), (d = !0)));
      }
      let h = await e.parsePartialOutput({ text: r });
      if (h !== void 0) {
        let b = typeof h.partial == "string" ? h.partial : JSON.stringify(h.partial);
        (!d || b !== l) && (u({ controller: m, partialOutput: h.partial }), (l = b), (d = !0));
      }
    },
  });
}
var Pb = class {
    constructor({
      model: e,
      telemetry: t,
      headers: r,
      settings: a,
      maxRetries: n,
      abortSignal: s,
      stepTimeoutMs: i,
      stepAbortController: l,
      chunkTimeoutMs: d,
      chunkAbortController: c,
      system: u,
      prompt: p,
      messages: m,
      allowSystemInMessages: _,
      tools: h,
      toolChoice: b,
      transforms: y,
      activeTools: f,
      repairToolCall: v,
      stopConditions: T,
      output: I,
      providerOptions: E,
      prepareStep: g,
      includeRawChunks: x,
      now: M,
      generateId: J,
      timeout: N,
      stopWhen: D,
      originalAbortSignal: H,
      onChunk: w,
      onError: F,
      onFinish: U,
      onAbort: k,
      onStepFinish: R,
      onStart: q,
      onStepStart: se,
      onToolCallStart: de,
      onToolCallFinish: X,
      experimental_context: z,
      experimental_toolApprovalSecret: ee,
      download: ie,
      include: $,
    }) {
      ((this._totalUsage = new Tt()),
        (this._finishReason = new Tt()),
        (this._rawFinishReason = new Tt()),
        (this._steps = new Tt()),
        (this.outputSpecification = I),
        (this.includeRawChunks = x),
        (this.tools = h));
      let Ce = Ap()(t?.integrations),
        Xe,
        qe = [],
        dt = [],
        Ge,
        bt,
        Ke,
        je = {},
        Nt = [],
        ve = [],
        Ie,
        Qe = h,
        wt = e,
        ce = () => {
          let we = new Set();
          return (Ee) => {
            if (!we.has(Ee)) return (we.add(Ee), Ee);
            let Le = J(),
              re = Le,
              pt = 0;
            for (; we.has(re);) re = `${Le}-${++pt}`;
            return (we.add(re), re);
          };
        },
        me = ce(),
        Lr = ce(),
        lr = new Map(),
        ur,
        Oe = Wt(),
        Ut = Wt(),
        _t = new TransformStream({
          async transform(we, Ee) {
            var Le, re, pt, mt;
            Ee.enqueue(we);
            let { part: O } = we;
            if (
              ((O.type === "text-delta" ||
                O.type === "reasoning-delta" ||
                O.type === "source" ||
                O.type === "tool-call" ||
                O.type === "tool-result" ||
                O.type === "tool-input-start" ||
                O.type === "tool-input-delta" ||
                O.type === "raw") &&
                (await it({ event: { chunk: O }, callbacks: w })),
              O.type === "error")
            ) {
              let fe = Aa(O.error);
              (Tn.isInstance(fe) && (Ie = fe), await it({ event: { error: fe }, callbacks: F }));
            }
            if (
              (O.type === "text-start" &&
                ((Oe[O.id] = { type: "text", text: "", providerMetadata: O.providerMetadata }),
                qe.push(Oe[O.id])),
              O.type === "text-delta")
            ) {
              let fe = Oe[O.id];
              if (fe == null) {
                Ee.enqueue({
                  part: { type: "error", error: `text part ${O.id} not found` },
                  partialOutput: void 0,
                });
                return;
              }
              ((fe.text += O.text),
                (fe.providerMetadata =
                  (Le = O.providerMetadata) != null ? Le : fe.providerMetadata));
            }
            if (O.type === "text-end") {
              let fe = Oe[O.id];
              if (fe == null) {
                Ee.enqueue({
                  part: { type: "error", error: `text part ${O.id} not found` },
                  partialOutput: void 0,
                });
                return;
              }
              ((fe.providerMetadata = (re = O.providerMetadata) != null ? re : fe.providerMetadata),
                delete Oe[O.id]);
            }
            if (
              (O.type === "reasoning-start" &&
                ((Ut[O.id] = { type: "reasoning", text: "", providerMetadata: O.providerMetadata }),
                qe.push(Ut[O.id])),
              O.type === "reasoning-delta")
            ) {
              let fe = Ut[O.id];
              if (fe == null) {
                Ee.enqueue({
                  part: { type: "error", error: `reasoning part ${O.id} not found` },
                  partialOutput: void 0,
                });
                return;
              }
              ((fe.text += O.text),
                (fe.providerMetadata =
                  (pt = O.providerMetadata) != null ? pt : fe.providerMetadata));
            }
            if (O.type === "reasoning-end") {
              let fe = Ut[O.id];
              if (fe == null) {
                Ee.enqueue({
                  part: { type: "error", error: `reasoning part ${O.id} not found` },
                  partialOutput: void 0,
                });
                return;
              }
              ((fe.providerMetadata = (mt = O.providerMetadata) != null ? mt : fe.providerMetadata),
                delete Ut[O.id]);
            }
            if (
              (O.type === "file" &&
                qe.push({
                  type: "file",
                  file: O.file,
                  ...(O.providerMetadata != null ? { providerMetadata: O.providerMetadata } : {}),
                }),
              O.type === "source" && qe.push(O),
              O.type === "tool-call" && qe.push(O),
              O.type === "tool-result" && !O.preliminary && qe.push(O),
              O.type === "tool-approval-request" && qe.push(O),
              O.type === "tool-error" && qe.push(O),
              O.type === "start-step" &&
                ((qe = []), (Ut = Wt()), (Oe = Wt()), (je = O.request), (Nt = O.warnings)),
              O.type === "finish-step")
            ) {
              let fe = await zs({ content: qe, tools: Qe }),
                Q = new Zp({
                  stepNumber: ve.length,
                  model: { provider: wt.provider, modelId: wt.modelId },
                  ...$a,
                  experimental_context: z,
                  content: qe,
                  finishReason: O.finishReason,
                  rawFinishReason: O.rawFinishReason,
                  usage: O.usage,
                  warnings: Nt,
                  request: je,
                  response: { ...O.response, messages: [...dt, ...fe] },
                  providerMetadata: O.providerMetadata,
                });
              (await it({ event: Q, callbacks: [R, Ce.onStepFinish] }),
                Ot({ warnings: Nt, provider: wt.provider, model: wt.modelId }),
                ve.push(Q),
                dt.push(...fe),
                Xe.resolve());
            }
            O.type === "finish" &&
              ((Ke = O.totalUsage), (Ge = O.finishReason), (bt = O.rawFinishReason));
          },
          async flush(we) {
            var Ee, Le, re, pt, mt, O, fe;
            try {
              if (ve.length === 0 || Ie != null) {
                let B = s?.aborted
                  ? s.reason
                  : (Ie ??
                    new Tn({ message: "No output generated. Check the stream for errors." }));
                (He._finishReason.reject(B),
                  He._rawFinishReason.reject(B),
                  He._totalUsage.reject(B),
                  He._steps.reject(B));
                return;
              }
              let Q = Ge ?? "other",
                be = Ke ?? xo();
              (He._finishReason.resolve(Q),
                He._rawFinishReason.resolve(bt),
                He._totalUsage.resolve(be),
                He._steps.resolve(ve));
              let ne = ve[ve.length - 1],
                ze = {
                  stepNumber: ne.stepNumber,
                  model: ne.model,
                  functionId: ne.functionId,
                  metadata: ne.metadata,
                  experimental_context: ne.experimental_context,
                  finishReason: ne.finishReason,
                  rawFinishReason: ne.rawFinishReason,
                  totalUsage: be,
                  usage: ne.usage,
                  content: ne.content,
                  text: ne.text,
                  reasoningText: ne.reasoningText,
                  reasoning: ne.reasoning,
                  files: ne.files,
                  sources: ne.sources,
                  toolCalls: ne.toolCalls,
                  staticToolCalls: ne.staticToolCalls,
                  dynamicToolCalls: ne.dynamicToolCalls,
                  toolResults: ne.toolResults,
                  staticToolResults: ne.staticToolResults,
                  dynamicToolResults: ne.dynamicToolResults,
                  request: ne.request,
                  response: ne.response,
                  warnings: ne.warnings,
                  providerMetadata: ne.providerMetadata,
                  steps: ve,
                },
                ye =
                  U == null
                    ? void 0
                    : async (B) => {
                        let _e = I == null ? void 0 : await He.getOutputPromise().catch(() => {});
                        await U({ ...B, ...(I != null ? { output: _e } : {}) });
                      };
              (await Promise.all([
                it({ event: ze, callbacks: ye }),
                it({ event: ze, callbacks: Ce.onFinish }),
              ]),
                ur.setAttributes(
                  await he({
                    telemetry: t,
                    attributes: {
                      "ai.response.finishReason": Q,
                      "ai.response.text": { output: () => ne.text },
                      "ai.response.reasoning": { output: () => ne.reasoningText },
                      "ai.response.toolCalls": {
                        output: () => {
                          var B;
                          return (B = ne.toolCalls) != null && B.length
                            ? JSON.stringify(ne.toolCalls)
                            : void 0;
                        },
                      },
                      "ai.response.providerMetadata": {
                        output: () => JSON.stringify(ne.providerMetadata),
                      },
                      "ai.usage.inputTokens": be.inputTokens,
                      "ai.usage.inputTokenDetails.noCacheTokens":
                        (Ee = be.inputTokenDetails) == null ? void 0 : Ee.noCacheTokens,
                      "ai.usage.inputTokenDetails.cacheReadTokens":
                        (Le = be.inputTokenDetails) == null ? void 0 : Le.cacheReadTokens,
                      "ai.usage.inputTokenDetails.cacheWriteTokens":
                        (re = be.inputTokenDetails) == null ? void 0 : re.cacheWriteTokens,
                      "ai.usage.outputTokens": be.outputTokens,
                      "ai.usage.outputTokenDetails.textTokens":
                        (pt = be.outputTokenDetails) == null ? void 0 : pt.textTokens,
                      "ai.usage.outputTokenDetails.reasoningTokens":
                        (mt = be.outputTokenDetails) == null ? void 0 : mt.reasoningTokens,
                      "ai.usage.totalTokens": be.totalTokens,
                      "ai.usage.reasoningTokens":
                        (O = be.outputTokenDetails) == null ? void 0 : O.reasoningTokens,
                      "ai.usage.cachedInputTokens":
                        (fe = be.inputTokenDetails) == null ? void 0 : fe.cacheReadTokens,
                    },
                  })
                ));
            } catch (Q) {
              we.error(Q);
            } finally {
              ur.end();
            }
          },
        }),
        Ir = rm();
      ((this.addStream = Ir.addStream), (this.closeStream = Ir.close));
      let Pn = Ir.stream.getReader(),
        Sr = new ReadableStream({
          async start(we) {
            we.enqueue({ type: "start" });
          },
          async pull(we) {
            function Ee() {
              (k?.({ steps: ve }),
                we.enqueue({
                  type: "abort",
                  ...(s?.reason !== void 0 ? { reason: qt(s.reason) } : {}),
                }),
                we.close());
            }
            try {
              let { done: Le, value: re } = await Pn.read();
              if (Le) {
                we.close();
                return;
              }
              if (s?.aborted) {
                Ee();
                return;
              }
              we.enqueue(re);
            } catch (Le) {
              br(Le) && s?.aborted ? Ee() : we.error(Le);
            }
          },
          cancel(we) {
            return Ir.stream.cancel(we);
          },
        }),
        ja = !0;
      Sr = Sr.pipeThrough(
        new TransformStream({
          async transform(we, Ee) {
            ja && Ee.enqueue(we);
          },
        })
      );
      for (let we of y)
        Sr = Sr.pipeThrough(
          we({
            tools: h,
            stopStream() {
              (Ir.terminate(), (ja = !1));
            },
          })
        );
      this.baseStream = Sr.pipeThrough(Nb(I ?? ko())).pipeThrough(_t);
      let { maxRetries: Da, retry: jn } = Kt({ maxRetries: n, abortSignal: s }),
        dr = ta(t),
        ct = Ur(a),
        Dn = ea({ model: e, telemetry: t, headers: r, settings: { ...ct, maxRetries: Da } }),
        He = this,
        qa = { provider: e.provider, modelId: e.modelId },
        $a = { functionId: t?.functionId, metadata: t?.metadata };
      ut({
        name: "ai.streamText",
        attributes: he({
          telemetry: t,
          attributes: {
            ...lt({ operationId: "ai.streamText", telemetry: t }),
            ...Dn,
            "ai.prompt": { input: () => JSON.stringify({ system: u, prompt: p, messages: m }) },
          },
        }),
        tracer: dr,
        endWhenDone: !1,
        fn: async (we) => {
          ur = we;
          let Ee = await No({ system: u, prompt: p, messages: m, allowSystemInMessages: _ });
          await it({
            event: {
              model: qa,
              system: u,
              prompt: p,
              messages: m,
              tools: h,
              toolChoice: b,
              activeTools: f,
              maxOutputTokens: ct.maxOutputTokens,
              temperature: ct.temperature,
              topP: ct.topP,
              topK: ct.topK,
              presencePenalty: ct.presencePenalty,
              frequencyPenalty: ct.frequencyPenalty,
              stopSequences: ct.stopSequences,
              seed: ct.seed,
              maxRetries: Da,
              timeout: N,
              headers: r,
              providerOptions: E,
              stopWhen: D,
              output: I,
              abortSignal: H,
              include: $,
              ...$a,
              experimental_context: z,
            },
            callbacks: [q, Ce.onStart],
          });
          let Le = Ee.messages,
            re = [],
            { approvedToolApprovals: pt, deniedToolApprovals: mt } = Np({ messages: Le });
          if (mt.length > 0 || pt.length > 0) {
            let {
                approvedToolApprovals: fe,
                deniedToolApprovals: Q,
                invalidToolApprovals: be,
              } = await Vp({
                approvedToolApprovals: pt.filter((_e) => !_e.toolCall.providerExecuted),
                tools: h,
                messages: Le,
                experimental_context: z,
                toolApprovalSecret: ee,
              }),
              ne = [...mt.filter((_e) => !_e.toolCall.providerExecuted), ...Q],
              ze = mt.filter((_e) => _e.toolCall.providerExecuted),
              ye,
              B = new ReadableStream({
                start(_e) {
                  ye = _e;
                },
              });
            He.addStream(B);
            try {
              for (let Me of [...ne, ...ze])
                ye?.enqueue({
                  type: "tool-output-denied",
                  toolCallId: Me.toolCall.toolCallId,
                  toolName: Me.toolCall.toolName,
                });
              for (let Me of be)
                ye?.enqueue({
                  type: "tool-error",
                  toolCallId: Me.toolCall.toolCallId,
                  toolName: Me.toolCall.toolName,
                  input: Me.toolCall.input,
                  error: qt(Me.error),
                  title: Me.toolCall.title,
                  ...(Me.toolCall.dynamic === !0 ? { dynamic: !0 } : {}),
                  ...(Me.toolCall.toolMetadata != null
                    ? { toolMetadata: Me.toolCall.toolMetadata }
                    : {}),
                });
              let _e = [];
              if (
                (await Promise.all(
                  fe.map(async (Me) => {
                    let Te = await Ys({
                      toolCall: Me.toolCall,
                      tools: h,
                      tracer: dr,
                      telemetry: t,
                      messages: Le,
                      abortSignal: s,
                      experimental_context: z,
                      stepNumber: ve.length,
                      model: qa,
                      onToolCallStart: [de, Ce.onToolCallStart],
                      onToolCallFinish: [X, Ce.onToolCallFinish],
                      onPreliminaryToolResult: (Er) => {
                        ye?.enqueue(Er);
                      },
                    });
                    Te != null && (ye?.enqueue(Te), _e.push(Te));
                  })
                ),
                _e.length > 0 || ne.length > 0 || be.length > 0)
              ) {
                let Me = [];
                for (let Te of _e)
                  Me.push({
                    type: "tool-result",
                    toolCallId: Te.toolCallId,
                    toolName: Te.toolName,
                    output: await $r({
                      toolCallId: Te.toolCallId,
                      input: Te.input,
                      tool: h?.[Te.toolName],
                      output: Te.type === "tool-result" ? Te.output : Te.error,
                      errorMode: Te.type === "tool-error" ? "text" : "none",
                    }),
                  });
                for (let Te of be)
                  Me.push({
                    type: "tool-result",
                    toolCallId: Te.toolCall.toolCallId,
                    toolName: Te.toolCall.toolName,
                    output: await $r({
                      toolCallId: Te.toolCall.toolCallId,
                      input: Te.toolCall.input,
                      tool: h?.[Te.toolCall.toolName],
                      output: Te.error,
                      errorMode: "text",
                    }),
                  });
                for (let Te of ne)
                  Me.push({
                    type: "tool-result",
                    toolCallId: Te.toolCall.toolCallId,
                    toolName: Te.toolCall.toolName,
                    output: { type: "execution-denied", reason: Te.approvalResponse.reason },
                  });
                re.push({ role: "tool", content: Me });
              }
            } finally {
              ye?.close();
            }
          }
          dt.push(...re);
          async function O({ currentStep: fe, responseMessages: Q, usage: be }) {
            var ne, ze, ye, B, _e, Me, Te, Er, Pt;
            let jt = He.includeRawChunks,
              na = $s({ abortController: l, label: "Step", timeoutMs: i }),
              Mr;
            function $o() {
              (Mr != null && clearTimeout(Mr),
                (Mr = $s({ abortController: c, label: "Chunk", timeoutMs: d })));
            }
            function qn() {
              Mr != null && (clearTimeout(Mr), (Mr = void 0));
            }
            function Yt() {
              na != null && clearTimeout(na);
            }
            function cr() {
              (Yt(), qn());
            }
            function Et() {
              (s?.removeEventListener("abort", Et), cr());
            }
            s?.addEventListener("abort", Et, { once: !0 });
            try {
              Xe = new Tt();
              let Xt = [...Le, ...Q],
                $e = await g?.({
                  model: e,
                  steps: ve,
                  stepNumber: ve.length,
                  messages: Xt,
                  experimental_context: z,
                }),
                Dt = Oa((ne = $e?.model) != null ? ne : e);
              wt = Dt;
              let Fa = { provider: Dt.provider, modelId: Dt.modelId },
                $n = await Oo({
                  prompt: {
                    system: (ze = $e?.system) != null ? ze : Ee.system,
                    messages: (ye = $e?.messages) != null ? ye : Xt,
                  },
                  supportedUrls: await Dt.supportedUrls,
                  download: ie,
                  abortSignal: s,
                }),
                Ua = (B = $e?.activeTools) != null ? B : f,
                Qt = Pp({ tools: h, activeTools: Ua });
              Qe = Qt;
              let { toolChoice: K, tools: et } = await wp({
                tools: h,
                toolChoice: (_e = $e?.toolChoice) != null ? _e : b,
                activeTools: Ua,
              });
              z = (Me = $e?.experimental_context) != null ? Me : z;
              let kr = (Te = $e?.messages) != null ? Te : Xt,
                er = (Er = $e?.system) != null ? Er : Ee.system,
                Va = Qr(E, $e?.providerOptions),
                Vt = Wp({ callSettings: ct, stepSettings: $e });
              await it({
                event: {
                  stepNumber: ve.length,
                  model: Fa,
                  system: er,
                  messages: kr,
                  tools: h,
                  toolChoice: K,
                  activeTools: Ua,
                  steps: [...ve],
                  providerOptions: Va,
                  timeout: N,
                  headers: r,
                  stopWhen: D,
                  output: I,
                  abortSignal: H,
                  include: $,
                  ...$a,
                  experimental_context: z,
                },
                callbacks: [se, Ce.onStepStart],
              });
              let {
                  result: { stream: Fn, response: La, request: oa },
                  doStreamSpan: ge,
                  startTimestampMs: pr,
                } = await jn(() =>
                  ut({
                    name: "ai.streamText.doStream",
                    attributes: he({
                      telemetry: t,
                      attributes: {
                        ...lt({ operationId: "ai.streamText.doStream", telemetry: t }),
                        ...Dn,
                        "ai.model.provider": Dt.provider,
                        "ai.model.id": Dt.modelId,
                        "ai.prompt.messages": { input: () => Po($n) },
                        "ai.prompt.tools": { input: () => et?.map((V) => JSON.stringify(Cp(V))) },
                        "ai.prompt.toolChoice": {
                          input: () => (K != null ? JSON.stringify(K) : void 0),
                        },
                        "gen_ai.system": Dt.provider,
                        "gen_ai.request.model": Dt.modelId,
                        "gen_ai.request.frequency_penalty": Vt.frequencyPenalty,
                        "gen_ai.request.max_tokens": Vt.maxOutputTokens,
                        "gen_ai.request.presence_penalty": Vt.presencePenalty,
                        "gen_ai.request.stop_sequences": Vt.stopSequences,
                        "gen_ai.request.temperature": Vt.temperature,
                        "gen_ai.request.top_k": Vt.topK,
                        "gen_ai.request.top_p": Vt.topP,
                      },
                    }),
                    tracer: dr,
                    endWhenDone: !1,
                    endOnError: !0,
                    fn: async (V) => ({
                      startTimestampMs: M(),
                      doStreamSpan: V,
                      result: await Dt.doStream({
                        ...Vt,
                        tools: et,
                        toolChoice: K,
                        responseFormat: await I?.responseFormat,
                        prompt: $n,
                        providerOptions: Va,
                        abortSignal: s,
                        headers: r,
                        includeRawChunks: jt,
                      }),
                    }),
                  })
                ),
                Fo = Cb({
                  tools: Qt,
                  toolChoice: K,
                  generatorStream: Fn,
                  tracer: dr,
                  telemetry: t,
                  system: u,
                  messages: Xt,
                  repairToolCall: v,
                  abortSignal: s,
                  experimental_context: z,
                  toolApprovalSecret: ee,
                  generateId: J,
                  stepNumber: ve.length,
                  model: Fa,
                  onToolCallStart: [de, Ce.onToolCallStart],
                  onToolCallFinish: [X, Ce.onToolCallFinish],
                }),
                Un = (Pt = $?.requestBody) == null || Pt ? (oa ?? {}) : { ...oa, body: void 0 },
                za = [],
                Ba = [],
                Uo,
                sa = "other",
                Vo,
                Lo = !1,
                yi = !1,
                rt = xo(),
                bi,
                wi = !0,
                tr = { id: J(), timestamp: new Date(), modelId: Fa.modelId },
                Sm = "",
                Vn = new Map(),
                Ln = new Map();
              He.addStream(
                Fo.pipeThrough(
                  new TransformStream({
                    async transform(V, Fe) {
                      var Ja, Ga, Ha, Wa, Za, Ka, zn, Ya, ia;
                      if (($o(), V.type === "stream-start")) {
                        Uo = V.warnings;
                        return;
                      }
                      if (wi) {
                        let Be = M() - pr;
                        ((wi = !1),
                          ge.addEvent("ai.stream.firstChunk", { "ai.response.msToFirstChunk": Be }),
                          ge.setAttributes({ "ai.response.msToFirstChunk": Be }),
                          Fe.enqueue({ type: "start-step", request: Un, warnings: Uo ?? [] }));
                      }
                      let la = V.type;
                      switch ((Ob[la] && (yi = !0), la)) {
                        case "tool-approval-request": {
                          Fe.enqueue(V);
                          break;
                        }
                        case "text-start": {
                          let Be = me(V.id);
                          (Vn.set(V.id, Be), Fe.enqueue({ ...V, id: Be }));
                          break;
                        }
                        case "text-end": {
                          (Fe.enqueue({ ...V, id: (Ja = Vn.get(V.id)) != null ? Ja : V.id }),
                            Vn.delete(V.id));
                          break;
                        }
                        case "text-delta": {
                          ((V.delta.length > 0 || V.providerMetadata != null) &&
                            Fe.enqueue({
                              type: "text-delta",
                              id: (Ga = Vn.get(V.id)) != null ? Ga : V.id,
                              text: V.delta,
                              providerMetadata: V.providerMetadata,
                            }),
                            (Sm += V.delta));
                          break;
                        }
                        case "reasoning-start": {
                          let Be = Lr(V.id);
                          (Ln.set(V.id, Be), Fe.enqueue({ ...V, id: Be }));
                          break;
                        }
                        case "reasoning-end": {
                          (Fe.enqueue({ ...V, id: (Ha = Ln.get(V.id)) != null ? Ha : V.id }),
                            Ln.delete(V.id));
                          break;
                        }
                        case "reasoning-delta": {
                          Fe.enqueue({
                            type: "reasoning-delta",
                            id: (Wa = Ln.get(V.id)) != null ? Wa : V.id,
                            text: V.delta,
                            providerMetadata: V.providerMetadata,
                          });
                          break;
                        }
                        case "tool-call": {
                          (Fe.enqueue(V), za.push(V));
                          break;
                        }
                        case "tool-result": {
                          (Fe.enqueue(V), V.preliminary || Ba.push(V));
                          break;
                        }
                        case "tool-error": {
                          (Fe.enqueue(V), Ba.push(V));
                          break;
                        }
                        case "response-metadata": {
                          tr = {
                            id: (Za = V.id) != null ? Za : tr.id,
                            timestamp: (Ka = V.timestamp) != null ? Ka : tr.timestamp,
                            modelId: (zn = V.modelId) != null ? zn : tr.modelId,
                          };
                          break;
                        }
                        case "finish": {
                          ((Lo = !0),
                            (rt = V.usage),
                            (sa = V.finishReason),
                            (Vo = V.rawFinishReason),
                            (bi = V.providerMetadata));
                          let Be = M() - pr;
                          (ge.addEvent("ai.stream.finish"),
                            ge.setAttributes({
                              "ai.response.msToFinish": Be,
                              "ai.response.avgOutputTokensPerSecond":
                                (1e3 * ((Ya = rt.outputTokens) != null ? Ya : 0)) / Be,
                            }));
                          break;
                        }
                        case "file": {
                          Fe.enqueue(V);
                          break;
                        }
                        case "source": {
                          Fe.enqueue(V);
                          break;
                        }
                        case "tool-input-start": {
                          let Be = Qt?.[V.toolName];
                          Fe.enqueue({
                            ...V,
                            dynamic: (ia = V.dynamic) != null ? ia : Be?.type === "dynamic",
                            title: Be?.title,
                          });
                          break;
                        }
                        case "tool-input-end": {
                          Fe.enqueue(V);
                          break;
                        }
                        case "tool-input-delta": {
                          Fe.enqueue(V);
                          break;
                        }
                        case "error": {
                          ((Lo = !0), Fe.enqueue(V), (sa = "error"));
                          break;
                        }
                        case "raw": {
                          jt && Fe.enqueue(V);
                          break;
                        }
                        default: {
                          let Be = la;
                          throw new Error(`Unknown chunk type: ${Be}`);
                        }
                      }
                    },
                    async flush(V) {
                      var Fe, Ja, Ga, Ha, Wa, Za, Ka;
                      if (!Lo && !yi) {
                        (V.enqueue({
                          type: "error",
                          error: new Tn({
                            message:
                              "No output generated. The model stream ended without a finish chunk.",
                          }),
                        }),
                          ge.end(),
                          Et(),
                          He.closeStream());
                        return;
                      }
                      let zn = za.length > 0 ? JSON.stringify(za) : void 0;
                      try {
                        ge.setAttributes(
                          await he({
                            telemetry: t,
                            attributes: {
                              "ai.response.finishReason": sa,
                              "ai.response.toolCalls": { output: () => zn },
                              "ai.response.id": tr.id,
                              "ai.response.model": tr.modelId,
                              "ai.response.timestamp": tr.timestamp.toISOString(),
                              "ai.usage.inputTokens": rt.inputTokens,
                              "ai.usage.inputTokenDetails.noCacheTokens":
                                (Fe = rt.inputTokenDetails) == null ? void 0 : Fe.noCacheTokens,
                              "ai.usage.inputTokenDetails.cacheReadTokens":
                                (Ja = rt.inputTokenDetails) == null ? void 0 : Ja.cacheReadTokens,
                              "ai.usage.inputTokenDetails.cacheWriteTokens":
                                (Ga = rt.inputTokenDetails) == null ? void 0 : Ga.cacheWriteTokens,
                              "ai.usage.outputTokens": rt.outputTokens,
                              "ai.usage.outputTokenDetails.textTokens":
                                (Ha = rt.outputTokenDetails) == null ? void 0 : Ha.textTokens,
                              "ai.usage.outputTokenDetails.reasoningTokens":
                                (Wa = rt.outputTokenDetails) == null ? void 0 : Wa.reasoningTokens,
                              "ai.usage.totalTokens": rt.totalTokens,
                              "ai.usage.reasoningTokens":
                                (Za = rt.outputTokenDetails) == null ? void 0 : Za.reasoningTokens,
                              "ai.usage.cachedInputTokens":
                                (Ka = rt.inputTokenDetails) == null ? void 0 : Ka.cacheReadTokens,
                              "gen_ai.response.finish_reasons": [sa],
                              "gen_ai.response.id": tr.id,
                              "gen_ai.response.model": tr.modelId,
                              "gen_ai.usage.input_tokens": rt.inputTokens,
                              "gen_ai.usage.output_tokens": rt.outputTokens,
                            },
                          })
                        );
                      } catch {}
                      V.enqueue({
                        type: "finish-step",
                        finishReason: sa,
                        rawFinishReason: Vo,
                        usage: rt,
                        providerMetadata: bi,
                        response: { ...tr, headers: La?.headers },
                      });
                      let Ya = Op(be, rt);
                      await Xe.promise;
                      let ia = ve[ve.length - 1];
                      try {
                        ge.setAttributes(
                          await he({
                            telemetry: t,
                            attributes: {
                              "ai.response.text": { output: () => ia.text },
                              "ai.response.reasoning": { output: () => ia.reasoningText },
                              "ai.response.providerMetadata": {
                                output: () => JSON.stringify(ia.providerMetadata),
                              },
                            },
                          })
                        );
                      } catch {
                      } finally {
                        ge.end();
                      }
                      let la = za.filter((tt) => tt.providerExecuted !== !0),
                        Be = Ba.filter((tt) => tt.providerExecuted !== !0);
                      for (let tt of za) {
                        if (tt.providerExecuted !== !0) continue;
                        let zo = Qt?.[tt.toolName];
                        zo?.type === "provider" &&
                          zo.supportsDeferredResults &&
                          (Ba.some(
                            (Bo) =>
                              (Bo.type === "tool-result" || Bo.type === "tool-error") &&
                              Bo.toolCallId === tt.toolCallId
                          ) ||
                            lr.set(tt.toolCallId, { toolName: tt.toolName }));
                      }
                      for (let tt of Ba)
                        (tt.type === "tool-result" || tt.type === "tool-error") &&
                          lr.delete(tt.toolCallId);
                      if (
                        (Et(),
                        ((la.length > 0 && Be.length === la.length) || lr.size > 0) &&
                          !(await Kp({ stopConditions: T, steps: ve })))
                      ) {
                        Q.push(...(await zs({ content: ve[ve.length - 1].content, tools: Qt })));
                        try {
                          await O({ currentStep: fe + 1, responseMessages: Q, usage: Ya });
                        } catch (tt) {
                          (V.enqueue({ type: "error", error: tt }), He.closeStream());
                        }
                      } else
                        (V.enqueue({
                          type: "finish",
                          finishReason: sa,
                          rawFinishReason: Vo,
                          totalUsage: Ya,
                        }),
                          He.closeStream());
                    },
                  })
                ),
                { onError: Et, onCancel: Et }
              );
            } catch (Xt) {
              throw (Et(), Xt);
            }
          }
          await O({ currentStep: 0, responseMessages: re, usage: xo() });
        },
      }).catch((we) => {
        (He.addStream(
          new ReadableStream({
            start(Ee) {
              (Ee.enqueue({ type: "error", error: we }), Ee.close());
            },
          })
        ),
          He.closeStream());
      });
    }
    get steps() {
      return (this.consumeStream(), this._steps.promise);
    }
    get finalStep() {
      return this.steps.then((e) => e[e.length - 1]);
    }
    get content() {
      return this.finalStep.then((e) => e.content);
    }
    get warnings() {
      return this.finalStep.then((e) => e.warnings);
    }
    get providerMetadata() {
      return this.finalStep.then((e) => e.providerMetadata);
    }
    get text() {
      return this.finalStep.then((e) => e.text);
    }
    get reasoningText() {
      return this.finalStep.then((e) => e.reasoningText);
    }
    get reasoning() {
      return this.finalStep.then((e) => e.reasoning);
    }
    get sources() {
      return this.finalStep.then((e) => e.sources);
    }
    get files() {
      return this.finalStep.then((e) => e.files);
    }
    get toolCalls() {
      return this.finalStep.then((e) => e.toolCalls);
    }
    get staticToolCalls() {
      return this.finalStep.then((e) => e.staticToolCalls);
    }
    get dynamicToolCalls() {
      return this.finalStep.then((e) => e.dynamicToolCalls);
    }
    get toolResults() {
      return this.finalStep.then((e) => e.toolResults);
    }
    get staticToolResults() {
      return this.finalStep.then((e) => e.staticToolResults);
    }
    get dynamicToolResults() {
      return this.finalStep.then((e) => e.dynamicToolResults);
    }
    get usage() {
      return this.finalStep.then((e) => e.usage);
    }
    get request() {
      return this.finalStep.then((e) => e.request);
    }
    get response() {
      return this.finalStep.then((e) => e.response);
    }
    get totalUsage() {
      return (this.consumeStream(), this._totalUsage.promise);
    }
    get finishReason() {
      return (this.consumeStream(), this._finishReason.promise);
    }
    get rawFinishReason() {
      return (this.consumeStream(), this._rawFinishReason.promise);
    }
    teeStream() {
      let [e, t] = this.baseStream.tee();
      return ((this.baseStream = t), e);
    }
    get textStream() {
      return or(
        this.teeStream().pipeThrough(
          new TransformStream({
            transform({ part: e }, t) {
              e.type === "text-delta" && t.enqueue(e.text);
            },
          })
        )
      );
    }
    get fullStream() {
      return or(
        this.teeStream().pipeThrough(
          new TransformStream({
            transform({ part: e }, t) {
              t.enqueue(e);
            },
          })
        )
      );
    }
    rejectResultPromises(e) {
      (this._finishReason.isPending() && this._finishReason.reject(e),
        this._rawFinishReason.isPending() && this._rawFinishReason.reject(e),
        this._totalUsage.isPending() && this._totalUsage.reject(e),
        this._steps.isPending() && this._steps.reject(e));
    }
    async consumeStream(e) {
      var t;
      try {
        await An({
          stream: this.fullStream,
          onError: (r) => {
            var a;
            (this.rejectResultPromises(r), (a = e?.onError) == null || a.call(e, r));
          },
        });
      } catch (r) {
        (this.rejectResultPromises(r), (t = e?.onError) == null || t.call(e, r));
      }
    }
    get experimental_partialOutputStream() {
      return this.partialOutputStream;
    }
    get partialOutputStream() {
      return or(
        this.teeStream().pipeThrough(
          new TransformStream({
            transform({ partialOutput: e }, t) {
              e !== void 0 && t.enqueue(e);
            },
          })
        )
      );
    }
    get elementStream() {
      var e, t, r;
      let a = (e = this.outputSpecification) == null ? void 0 : e.createElementStreamTransform();
      if (a == null)
        throw new Cr({
          functionality: `element streams in ${(r = (t = this.outputSpecification) == null ? void 0 : t.name) != null ? r : "text"} mode`,
        });
      return or(this.teeStream().pipeThrough(a));
    }
    getOutputPromise() {
      return (
        this.outputPromise == null &&
          (this.outputPromise = this.finalStep.then((e) => {
            var t;
            return ((t = this.outputSpecification) != null ? t : ko()).parseCompleteOutput(
              { text: e.text },
              { response: e.response, usage: e.usage, finishReason: e.finishReason }
            );
          })),
        this.outputPromise
      );
    }
    get output() {
      return this.getOutputPromise();
    }
    toUIMessageStream({
      originalMessages: e,
      generateMessageId: t,
      onFinish: r,
      messageMetadata: a,
      sendReasoning: n = !0,
      sendSources: s = !1,
      sendStart: i = !0,
      sendFinish: l = !0,
      onError: d,
      redactToolErrors: c = d != null,
    } = {}) {
      let u = d ?? (() => "An error occurred."),
        p = (g) => {
          var x;
          if (c) return u(g);
          try {
            return (x = qt(g)) != null ? x : u(g);
          } catch {
            return u(g);
          }
        },
        m = { status: "unknown" },
        _ = !1,
        h = (g) => {
          !_ &&
            m.status !== "completed" &&
            m.status !== "aborted" &&
            g.status !== "unknown" &&
            (m.status === "unknown" || g.status !== "failed") &&
            (m = g);
        },
        b = (g) => {
          ((_ = !0), (m = { status: "failed", error: g }));
        },
        y = t != null ? Eb({ originalMessages: e, responseMessageId: t }) : void 0,
        f = (g) => {
          var x;
          let M = (x = this.tools) == null ? void 0 : x[g.toolName];
          return M == null ? g.dynamic : M?.type === "dynamic" ? !0 : void 0;
        },
        v = (g) => {
          let x = g.getReader(),
            M = !1,
            J = !1,
            N = () => {
              M || (x.releaseLock(), (M = !0));
            };
          return new ReadableStream({
            async pull(D) {
              try {
                let { done: H, value: w } = await x.read();
                H ? (N(), J || D.close()) : D.enqueue(w);
              } catch (H) {
                (N(), J || (b(H), D.error(H)));
              }
            },
            async cancel(D) {
              if (((J = !0), !M))
                try {
                  await x.cancel(D);
                } finally {
                  N();
                }
            },
          });
        },
        I = v(this.fullStream).pipeThrough(
          new TransformStream({
            transform: async (g, x) => {
              let M = a?.({ part: g }),
                J = g.type;
              switch (J) {
                case "text-start": {
                  x.enqueue({
                    type: "text-start",
                    id: g.id,
                    ...(g.providerMetadata != null ? { providerMetadata: g.providerMetadata } : {}),
                  });
                  break;
                }
                case "text-delta": {
                  x.enqueue({
                    type: "text-delta",
                    id: g.id,
                    delta: g.text,
                    ...(g.providerMetadata != null ? { providerMetadata: g.providerMetadata } : {}),
                  });
                  break;
                }
                case "text-end": {
                  x.enqueue({
                    type: "text-end",
                    id: g.id,
                    ...(g.providerMetadata != null ? { providerMetadata: g.providerMetadata } : {}),
                  });
                  break;
                }
                case "reasoning-start":
                case "reasoning-end": {
                  n &&
                    x.enqueue({
                      type: J,
                      id: g.id,
                      ...(g.providerMetadata != null
                        ? { providerMetadata: g.providerMetadata }
                        : {}),
                    });
                  break;
                }
                case "reasoning-delta": {
                  n &&
                    x.enqueue({
                      type: "reasoning-delta",
                      id: g.id,
                      delta: g.text,
                      ...(g.providerMetadata != null
                        ? { providerMetadata: g.providerMetadata }
                        : {}),
                    });
                  break;
                }
                case "file": {
                  x.enqueue({
                    type: "file",
                    mediaType: g.file.mediaType,
                    url: `data:${g.file.mediaType};base64,${g.file.base64}`,
                    ...(g.providerMetadata != null ? { providerMetadata: g.providerMetadata } : {}),
                  });
                  break;
                }
                case "source": {
                  (s &&
                    g.sourceType === "url" &&
                    x.enqueue({
                      type: "source-url",
                      sourceId: g.id,
                      url: g.url,
                      title: g.title,
                      ...(g.providerMetadata != null
                        ? { providerMetadata: g.providerMetadata }
                        : {}),
                    }),
                    s &&
                      g.sourceType === "document" &&
                      x.enqueue({
                        type: "source-document",
                        sourceId: g.id,
                        mediaType: g.mediaType,
                        title: g.title,
                        filename: g.filename,
                        ...(g.providerMetadata != null
                          ? { providerMetadata: g.providerMetadata }
                          : {}),
                      }));
                  break;
                }
                case "tool-input-start": {
                  let N = f(g);
                  x.enqueue({
                    type: "tool-input-start",
                    toolCallId: g.id,
                    toolName: g.toolName,
                    ...(g.inputEncoding != null ? { inputEncoding: g.inputEncoding } : {}),
                    ...(g.providerExecuted != null ? { providerExecuted: g.providerExecuted } : {}),
                    ...(g.providerMetadata != null ? { providerMetadata: g.providerMetadata } : {}),
                    ...(g.toolMetadata != null ? { toolMetadata: g.toolMetadata } : {}),
                    ...(N != null ? { dynamic: N } : {}),
                    ...(g.title != null ? { title: g.title } : {}),
                  });
                  break;
                }
                case "tool-input-delta": {
                  x.enqueue({
                    type: "tool-input-delta",
                    toolCallId: g.id,
                    inputTextDelta: g.delta,
                  });
                  break;
                }
                case "tool-call": {
                  let N = f(g);
                  g.invalid
                    ? x.enqueue({
                        type: "tool-input-error",
                        toolCallId: g.toolCallId,
                        toolName: g.toolName,
                        input: g.input,
                        ...(g.providerExecuted != null
                          ? { providerExecuted: g.providerExecuted }
                          : {}),
                        ...(g.providerMetadata != null
                          ? { providerMetadata: g.providerMetadata }
                          : {}),
                        ...(g.toolMetadata != null ? { toolMetadata: g.toolMetadata } : {}),
                        ...(N != null ? { dynamic: N } : {}),
                        errorText: g.providerExecuted ? u(g.error) : p(g.error),
                        ...(g.title != null ? { title: g.title } : {}),
                      })
                    : x.enqueue({
                        type: "tool-input-available",
                        toolCallId: g.toolCallId,
                        toolName: g.toolName,
                        input: g.input,
                        ...(g.providerExecuted != null
                          ? { providerExecuted: g.providerExecuted }
                          : {}),
                        ...(g.providerMetadata != null
                          ? { providerMetadata: g.providerMetadata }
                          : {}),
                        ...(g.toolMetadata != null ? { toolMetadata: g.toolMetadata } : {}),
                        ...(N != null ? { dynamic: N } : {}),
                        ...(g.title != null ? { title: g.title } : {}),
                      });
                  break;
                }
                case "tool-approval-request": {
                  let N = Jp(g.toolCall);
                  x.enqueue({
                    type: "tool-approval-request",
                    approvalId: g.approvalId,
                    toolCallId: g.toolCall.toolCallId,
                    ...(N != null && !xr(N.value, g.toolCall.input)
                      ? { inputSchemaInput: N.value }
                      : {}),
                    ...(g.signature != null ? { signature: g.signature } : {}),
                  });
                  break;
                }
                case "tool-result": {
                  let N = f(g);
                  x.enqueue({
                    type: "tool-output-available",
                    toolCallId: g.toolCallId,
                    output: g.output === void 0 ? null : g.output,
                    ...(g.providerExecuted != null ? { providerExecuted: g.providerExecuted } : {}),
                    ...(g.providerMetadata != null ? { providerMetadata: g.providerMetadata } : {}),
                    ...(g.toolMetadata != null ? { toolMetadata: g.toolMetadata } : {}),
                    ...(g.preliminary != null ? { preliminary: g.preliminary } : {}),
                    ...(N != null ? { dynamic: N } : {}),
                  });
                  break;
                }
                case "tool-error": {
                  let N = f(g);
                  x.enqueue({
                    type: "tool-output-error",
                    toolCallId: g.toolCallId,
                    errorText: g.providerExecuted
                      ? typeof g.error == "string"
                        ? g.error
                        : JSON.stringify(g.error)
                      : p(g.error),
                    ...(g.providerExecuted != null ? { providerExecuted: g.providerExecuted } : {}),
                    ...(g.providerMetadata != null ? { providerMetadata: g.providerMetadata } : {}),
                    ...(g.toolMetadata != null ? { toolMetadata: g.toolMetadata } : {}),
                    ...(N != null ? { dynamic: N } : {}),
                  });
                  break;
                }
                case "tool-output-denied": {
                  x.enqueue({ type: "tool-output-denied", toolCallId: g.toolCallId });
                  break;
                }
                case "error": {
                  x.enqueue({ type: "error", errorText: u(g.error) });
                  break;
                }
                case "start-step": {
                  x.enqueue({ type: "start-step" });
                  break;
                }
                case "finish-step": {
                  x.enqueue({ type: "finish-step" });
                  break;
                }
                case "start": {
                  i &&
                    x.enqueue({
                      type: "start",
                      ...(M != null ? { messageMetadata: M } : {}),
                      ...(y != null ? { messageId: y } : {}),
                    });
                  break;
                }
                case "finish": {
                  l &&
                    x.enqueue({
                      type: "finish",
                      finishReason: g.finishReason,
                      ...(M != null ? { messageMetadata: M } : {}),
                    });
                  break;
                }
                case "abort": {
                  x.enqueue(g);
                  break;
                }
                case "tool-input-end":
                  break;
                case "raw":
                  break;
                default: {
                  let N = J;
                  throw new Error(`Unknown chunk type: ${N}`);
                }
              }
              (M != null &&
                J !== "start" &&
                J !== "finish" &&
                x.enqueue({ type: "message-metadata", messageMetadata: M }),
                g.type === "finish"
                  ? h({ status: "completed" })
                  : g.type === "abort"
                    ? h({ status: "aborted" })
                    : g.type === "error" && h({ status: "failed", error: g.error }));
            },
          })
        ),
        E = v(I);
      return or(
        tm({
          stream: E,
          messageId: y ?? t?.(),
          originalMessages: e,
          onFinish: r,
          onError: u,
          getOutcome: () => m,
        })
      );
    }
    pipeUIMessageStreamToResponse(
      e,
      {
        originalMessages: t,
        generateMessageId: r,
        onFinish: a,
        messageMetadata: n,
        sendReasoning: s,
        sendSources: i,
        sendFinish: l,
        sendStart: d,
        onError: c,
        redactToolErrors: u,
        ...p
      } = {}
    ) {
      return li({
        response: e,
        stream: this.toUIMessageStream({
          originalMessages: t,
          generateMessageId: r,
          onFinish: a,
          messageMetadata: n,
          sendReasoning: s,
          sendSources: i,
          sendFinish: l,
          sendStart: d,
          onError: c,
          redactToolErrors: u,
        }),
        ...p,
      });
    }
    pipeTextStreamToResponse(e, t) {
      return ti({ response: e, textStream: this.textStream, ...t });
    }
    toUIMessageStreamResponse({
      originalMessages: e,
      generateMessageId: t,
      onFinish: r,
      messageMetadata: a,
      sendReasoning: n,
      sendSources: s,
      sendFinish: i,
      sendStart: l,
      onError: d,
      redactToolErrors: c,
      ...u
    } = {}) {
      return ni({
        stream: this.toUIMessageStream({
          originalMessages: e,
          generateMessageId: t,
          onFinish: r,
          messageMetadata: a,
          sendReasoning: n,
          sendSources: s,
          sendFinish: i,
          sendStart: l,
          onError: d,
          redactToolErrors: c,
        }),
        ...u,
      });
    }
    toTextStreamResponse(e) {
      return ei({ textStream: this.textStream, ...e });
    }
  },
  jb = class {
    constructor(e) {
      ((this.version = "agent-v1"), (this.settings = e));
    }
    get id() {
      return this.settings.id;
    }
    get tools() {
      return this.settings.tools;
    }
    async prepareCall(e) {
      var t, r, a, n;
      if (this.settings.callOptionsSchema != null && e.options !== void 0) {
        let h = await Ht({
          value: e.options,
          schema: this.settings.callOptionsSchema,
          context: { field: "options" },
        });
        e = { ...e, options: h };
      }
      let { onStepFinish: s, ...i } = this.settings,
        l = { ...i, stopWhen: (t = this.settings.stopWhen) != null ? t : jo(20), ...e },
        d =
          (n = await ((a = (r = this.settings).prepareCall) == null ? void 0 : a.call(r, l))) !=
          null
            ? n
            : l,
        { instructions: c, allowSystemInMessages: u, messages: p, prompt: m, ..._ } = d;
      return { ..._, system: c, allowSystemInMessages: u, messages: p, prompt: m };
    }
    mergeOnStepFinishCallbacks(e) {
      let t = this.settings.onStepFinish;
      return e && t
        ? async (r) => {
            (await t(r), await e(r));
          }
        : (e ?? t);
    }
    async generate({ abortSignal: e, timeout: t, onStepFinish: r, ...a }) {
      let n = await this.prepareCall(a);
      return Xp({
        ...n,
        abortSignal: e,
        timeout: t ?? n.timeout,
        onStepFinish: this.mergeOnStepFinishCallbacks(r),
      });
    }
    async stream({ abortSignal: e, timeout: t, experimental_transform: r, onStepFinish: a, ...n }) {
      let s = await this.prepareCall(n);
      return am({
        ...s,
        abortSignal: e,
        timeout: t ?? s.timeout,
        experimental_transform: r,
        onStepFinish: this.mergeOnStepFinishCallbacks(a),
      });
    }
  };
function Db({
  execute: e,
  onError: t = () => "An error occurred.",
  originalMessages: r,
  onStepFinish: a,
  onFinish: n,
  generateId: s = Wr,
}) {
  let i,
    l = [],
    d = { status: "unknown" },
    c = new ReadableStream({
      start(y) {
        i = y;
      },
    });
  function u(y) {
    try {
      i.enqueue(y);
    } catch {}
  }
  function p(y) {
    d.status === "unknown" && y.status !== "unknown" && (d = y);
  }
  function m(y) {
    d = { status: "failed", error: y };
  }
  function _(y) {
    try {
      i.error(y);
    } catch {}
  }
  function h(y) {
    m(y);
    let f;
    try {
      f = t(y);
    } catch (v) {
      (m(v), _(v));
      return;
    }
    u({ type: "error", errorText: f });
  }
  try {
    let y = e({
      writer: {
        write(f) {
          u(f);
        },
        merge(f) {
          l.push(
            (async () => {
              let v = f.getReader();
              for (;;) {
                let { done: T, value: I } = await v.read();
                if (T) break;
                u(I);
              }
            })().catch((v) => {
              h(v);
            })
          );
        },
        setOutcome: p,
        onError: t,
      },
    });
    y &&
      l.push(
        y.catch((f) => {
          h(f);
        })
      );
  } catch (y) {
    h(y);
  }
  return (
    (async () => {
      for (; l.length > 0;) await l.shift();
    })().finally(() => {
      try {
        i.close();
      } catch {}
    }),
    tm({
      stream: c,
      messageId: s(),
      originalMessages: r,
      onStepFinish: a,
      onFinish: n,
      onError: t,
      getOutcome: () => d,
    })
  );
}
function qb(e) {
  let t = new Map(),
    r = {
      ...e,
      parts: e.parts.map((n, s) =>
        n.type === "text" || n.type === "reasoning" ? (t.set(s, n.text), { ...n, text: "" }) : n
      ),
    },
    a = structuredClone(r);
  for (let [n, s] of t) {
    let i = a.parts[n];
    (i.type === "text" || i.type === "reasoning") && (i.text = s);
  }
  return a;
}
function $b({ message: e, stream: t, onError: r, terminateOnError: a = !1 }) {
  var n;
  let s,
    i = !1,
    l = !1,
    d = new AbortController(),
    c = new ReadableStream({
      start(m) {
        s = m;
      },
      cancel() {
        ((l = !0), d.abort());
      },
    }),
    u = Do({ messageId: (n = e?.id) != null ? n : "", lastMessage: e }),
    p = (m) => {
      (r?.(m), !i && a && ((i = !0), s?.error(m)));
    };
  return (
    An({
      stream: ii({
        stream: t,
        resetStateOnMessageIdChange: !0,
        runUpdateMessageJob(m) {
          return m({
            state: u,
            write: () => {
              l || s?.enqueue(qb(u.message));
            },
          });
        },
        onError: p,
      }),
      onError: p,
      abortSignal: d.signal,
    }).finally(() => {
      !i && !l && s?.close();
    }),
    or(c)
  );
}
function On(e, t) {
  return e != null && Object.hasOwn(e, t) ? e[t] : void 0;
}
function Fb(e) {
  return ((e.dynamic = !1), e);
}
function Ub(e) {
  return e.type === "dynamic-tool" && e.dynamic === !1;
}
async function ui(e, t) {
  let r = [];
  t?.ignoreIncompleteToolCalls &&
    (e = e.map((n) => ({
      ...n,
      parts: n.parts.filter(
        (s) =>
          !Ze(s) ||
          s.state === "approval-responded" ||
          (s.state === "output-available" && s.preliminary !== !0) ||
          s.state === "output-error" ||
          s.state === "output-denied"
      ),
    })));
  async function a({ toolPart: n, toolName: s, output: i, errorMode: l }) {
    let d = On(t?.tools, s);
    return l === "none" && d == null && Ub(n)
      ? { type: "text", value: "Tool output omitted because the tool is no longer available." }
      : $r({ toolCallId: n.toolCallId, input: n.input, output: i, tool: d, errorMode: l });
  }
  for (let n of e)
    switch (n.role) {
      case "system": {
        let s = n.parts.filter((l) => l.type === "text"),
          i = s.reduce(
            (l, d) => (d.providerMetadata != null ? { ...l, ...d.providerMetadata } : l),
            {}
          );
        r.push({
          role: "system",
          content: s.map((l) => l.text).join(""),
          ...(Object.keys(i).length > 0 ? { providerOptions: i } : {}),
        });
        break;
      }
      case "user": {
        r.push({
          role: "user",
          content: n.parts
            .map((s) => {
              var i;
              if (So(s))
                return {
                  type: "text",
                  text: s.text,
                  ...(s.providerMetadata != null ? { providerOptions: s.providerMetadata } : {}),
                };
              if (Eo(s))
                return {
                  type: "file",
                  mediaType: s.mediaType,
                  filename: s.filename,
                  data: s.url,
                  ...(s.providerMetadata != null ? { providerOptions: s.providerMetadata } : {}),
                };
              if (Io(s)) return (i = t?.convertDataPart) == null ? void 0 : i.call(t, s);
            })
            .filter(Kl),
        });
        break;
      }
      case "assistant": {
        if (n.parts != null) {
          let s = [];
          async function i() {
            var l, d, c, u, p, m, _;
            if (s.length === 0) return;
            let h = [];
            for (let y of s)
              if (So(y))
                h.push({
                  type: "text",
                  text: y.text,
                  ...(y.providerMetadata != null ? { providerOptions: y.providerMetadata } : {}),
                });
              else if (Eo(y))
                h.push({
                  type: "file",
                  mediaType: y.mediaType,
                  filename: y.filename,
                  data: y.url,
                  ...(y.providerMetadata != null ? { providerOptions: y.providerMetadata } : {}),
                });
              else if (Bs(y))
                h.push({ type: "reasoning", text: y.text, providerOptions: y.providerMetadata });
              else if (Ze(y)) {
                let f = In(y);
                if (y.state !== "input-streaming") {
                  let v =
                    (l = y.callProviderMetadata) != null
                      ? l
                      : y.state === "output-error"
                        ? y.resultProviderMetadata
                        : void 0;
                  if (
                    (h.push({
                      type: "tool-call",
                      toolCallId: y.toolCallId,
                      toolName: f,
                      input:
                        y.state === "output-error"
                          ? (d = y.input) != null
                            ? d
                            : "rawInput" in y
                              ? y.rawInput
                              : void 0
                          : y.input,
                      providerExecuted: y.providerExecuted,
                      ...(v != null ? { providerOptions: v } : {}),
                    }),
                    y.approval != null &&
                      h.push({
                        type: "tool-approval-request",
                        approvalId: y.approval.id,
                        toolCallId: y.toolCallId,
                        ...(Object.prototype.hasOwnProperty.call(y.approval, "inputSchemaInput")
                          ? { inputSchemaInput: y.approval.inputSchemaInput }
                          : {}),
                        ...(y.approval.signature != null
                          ? { signature: y.approval.signature }
                          : {}),
                      }),
                    y.providerExecuted === !0 &&
                      y.state !== "approval-responded" &&
                      (y.state === "output-available" || y.state === "output-error"))
                  ) {
                    let T = (c = y.resultProviderMetadata) != null ? c : y.callProviderMetadata;
                    h.push({
                      type: "tool-result",
                      toolCallId: y.toolCallId,
                      toolName: f,
                      output: await a({
                        toolPart: y,
                        toolName: f,
                        output: y.state === "output-error" ? y.errorText : y.output,
                        errorMode: y.state === "output-error" ? "json" : "none",
                      }),
                      ...(T != null ? { providerOptions: T } : {}),
                    });
                  }
                }
              } else if (Io(y)) {
                let f = (u = t?.convertDataPart) == null ? void 0 : u.call(t, y);
                f != null && h.push(f);
              } else {
                let f = y;
                throw new Error(`Unsupported part: ${f}`);
              }
            h.length > 0 && r.push({ role: "assistant", content: h });
            let b = s.filter((y) => {
              var f;
              return (
                Ze(y) &&
                (y.providerExecuted !== !0 ||
                  ((f = y.approval) == null ? void 0 : f.approved) != null)
              );
            });
            if (b.length > 0) {
              let y = [];
              for (let f of b)
                if (
                  (((p = f.approval) == null ? void 0 : p.approved) != null &&
                    y.push({
                      type: "tool-approval-response",
                      approvalId: f.approval.id,
                      approved: f.approval.approved,
                      reason: f.approval.reason,
                      providerExecuted: f.providerExecuted,
                    }),
                  f.providerExecuted !== !0)
                )
                  switch (f.state) {
                    case "output-denied": {
                      y.push({
                        type: "tool-result",
                        toolCallId: f.toolCallId,
                        toolName: In(f),
                        output: {
                          type: "error-text",
                          value:
                            (_ = (m = f.approval) == null ? void 0 : m.reason) != null
                              ? _
                              : "Tool call execution denied.",
                        },
                        ...(f.callProviderMetadata != null
                          ? { providerOptions: f.callProviderMetadata }
                          : {}),
                      });
                      break;
                    }
                    case "output-error":
                    case "output-available": {
                      let v = In(f);
                      y.push({
                        type: "tool-result",
                        toolCallId: f.toolCallId,
                        toolName: v,
                        output: await a({
                          toolPart: f,
                          toolName: v,
                          output: f.state === "output-error" ? f.errorText : f.output,
                          errorMode: f.state === "output-error" ? "text" : "none",
                        }),
                        ...(f.callProviderMetadata != null
                          ? { providerOptions: f.callProviderMetadata }
                          : {}),
                      });
                      break;
                    }
                  }
              y.length > 0 && r.push({ role: "tool", content: y });
            }
            s = [];
          }
          for (let l of n.parts)
            So(l) || Bs(l) || Eo(l) || Ze(l) || Io(l)
              ? s.push(l)
              : l.type === "step-start" && (await i());
          await i();
          break;
        }
        break;
      }
      default: {
        let s = n.role;
        throw new np({ originalMessage: n, message: `Unsupported role: ${s}` });
      }
    }
  return r;
}
function nm(e, t = [], r = new WeakSet()) {
  switch (typeof e) {
    case "number":
      return Number.isFinite(e) ? void 0 : [...t];
    case "bigint":
    case "symbol":
    case "function":
      return [...t];
    case "object": {
      if (e === null || r.has(e)) return;
      r.add(e);
      let a = Array.isArray(e) ? e.keys() : Object.keys(e);
      for (let n of a) {
        if (n === "__proto__") continue;
        t.push(n);
        let s = nm(e[n], t, r);
        if (s != null) return s;
        t.pop();
      }
      return;
    }
    default:
      return;
  }
}
function om(e, t = []) {
  return o
    .unknown()
    .check((r) => {
      let a = r.value;
      for (let s of t) a = a != null && typeof a == "object" ? a[s] : void 0;
      let n = nm(a);
      n != null &&
        r.issues.push({
          code: "custom",
          message:
            "Invalid JSON value. Expected null, a string, a finite number, a boolean, an array, or an object.",
          input: r.value,
          path: [...t, ...n],
        });
    })
    .pipe(e);
}
var Vb = o.record(o.string(), Yr.optional()),
  xt = om(Vb),
  Pe = om(le);
function Lb(e) {
  return e != null && typeof e == "object" && !Array.isArray(e) && Object.keys(e).length === 0;
}
function Fd(e) {
  let { type: t, ...r } = e;
  return Fb({ ...r, type: "dynamic-tool", toolName: t.slice(5) });
}
function zb(e) {
  return e.approval != null && Object.prototype.hasOwnProperty.call(e.approval, "inputSchemaInput")
    ? { value: e.approval.inputSchemaInput }
    : void 0;
}
function Ud(e) {
  return o.array(o.unknown()).transform((t, r) => {
    let a = [];
    for (let [n, s] of t.entries()) {
      let i = e(s).safeParse(s);
      if (!i.success) {
        for (let l of i.error.issues) r.issues.push({ ...l, path: [n, ...l.path] });
        return o.NEVER;
      }
      a.push(i.data);
    }
    return a;
  });
}
var Bb = Z(() => {
  let e = o.object({
      id: o.string(),
      approved: o.never().optional(),
      descriptor: o.unknown().optional(),
      reason: o.never().optional(),
      signature: o.string().optional(),
      inputSchemaInput: o.unknown().optional(),
    }),
    t = e.extend({ approved: o.boolean(), reason: o.string().optional() }),
    r = t.extend({ approved: o.literal(!0) }),
    a = t.extend({ approved: o.literal(!1) }),
    n =
      'Invalid UI message part type. Expected a known part type (for example "text" or "dynamic-tool") or a type starting with "data-" or "tool-".',
    s = o.discriminatedUnion(
      "type",
      [
        o.object({
          type: o.literal("text"),
          text: o.string(),
          state: o.enum(["streaming", "done"]).optional(),
          providerMetadata: Pe.optional(),
        }),
        o.object({
          type: o.literal("reasoning"),
          id: o.string().optional(),
          text: o.string(),
          state: o.enum(["streaming", "done"]).optional(),
          providerMetadata: Pe.optional(),
        }),
        o.object({
          type: o.literal("source-url"),
          sourceId: o.string(),
          url: o.string(),
          title: o.string().optional(),
          providerMetadata: Pe.optional(),
        }),
        o.object({
          type: o.literal("source-document"),
          sourceId: o.string(),
          mediaType: o.string(),
          title: o.string(),
          filename: o.string().optional(),
          providerMetadata: Pe.optional(),
        }),
        o.object({
          type: o.literal("file"),
          mediaType: o.string(),
          filename: o.string().optional(),
          url: o.string(),
          providerMetadata: Pe.optional(),
        }),
        o.object({ type: o.literal("step-start") }),
      ],
      { error: (u) => (u.code === "invalid_union" ? n : void 0) }
    ),
    i = o.object({
      type: o.string().startsWith("data-"),
      id: o.string().optional(),
      data: o.unknown(),
    }),
    l = o.discriminatedUnion("state", [
      o.object({
        type: o.literal("dynamic-tool"),
        dynamic: o.literal(!1).optional(),
        toolName: o.string(),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("input-streaming"),
        input: o.unknown().optional(),
        rawInput: o.string().optional(),
        inputEncoding: o.enum(["json", "text"]).optional(),
        providerExecuted: o.boolean().optional(),
        callProviderMetadata: Pe.optional(),
        output: o.never().optional(),
        errorText: o.never().optional(),
        approval: o.never().optional(),
      }),
      o.object({
        type: o.literal("dynamic-tool"),
        dynamic: o.literal(!1).optional(),
        toolName: o.string(),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("input-available"),
        input: o.unknown(),
        providerExecuted: o.boolean().optional(),
        output: o.never().optional(),
        errorText: o.never().optional(),
        callProviderMetadata: Pe.optional(),
        approval: o.never().optional(),
      }),
      o.object({
        type: o.literal("dynamic-tool"),
        dynamic: o.literal(!1).optional(),
        toolName: o.string(),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("approval-requested"),
        input: o.unknown(),
        providerExecuted: o.boolean().optional(),
        output: o.never().optional(),
        errorText: o.never().optional(),
        callProviderMetadata: Pe.optional(),
        approval: e,
      }),
      o.object({
        type: o.literal("dynamic-tool"),
        dynamic: o.literal(!1).optional(),
        toolName: o.string(),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("approval-responded"),
        input: o.unknown(),
        providerExecuted: o.boolean().optional(),
        output: o.never().optional(),
        errorText: o.never().optional(),
        callProviderMetadata: Pe.optional(),
        approval: t,
      }),
      o.object({
        type: o.literal("dynamic-tool"),
        dynamic: o.literal(!1).optional(),
        toolName: o.string(),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("output-available"),
        input: o.unknown(),
        providerExecuted: o.boolean().optional(),
        output: o.unknown(),
        errorText: o.never().optional(),
        callProviderMetadata: Pe.optional(),
        resultProviderMetadata: Pe.optional(),
        preliminary: o.boolean().optional(),
        approval: r.optional(),
      }),
      o.object({
        type: o.literal("dynamic-tool"),
        dynamic: o.literal(!1).optional(),
        toolName: o.string(),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("output-error"),
        input: o.unknown().optional(),
        rawInput: o.unknown().optional(),
        providerExecuted: o.boolean().optional(),
        output: o.never().optional(),
        errorText: o.string(),
        callProviderMetadata: Pe.optional(),
        resultProviderMetadata: Pe.optional(),
        approval: r.optional(),
      }),
      o.object({
        type: o.literal("dynamic-tool"),
        dynamic: o.literal(!1).optional(),
        toolName: o.string(),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("output-denied"),
        input: o.unknown(),
        providerExecuted: o.boolean().optional(),
        output: o.never().optional(),
        errorText: o.never().optional(),
        callProviderMetadata: Pe.optional(),
        approval: a,
      }),
    ]),
    d = o.discriminatedUnion("state", [
      o.object({
        type: o.string().startsWith("tool-"),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("input-streaming"),
        providerExecuted: o.boolean().optional(),
        callProviderMetadata: Pe.optional(),
        input: o.unknown().optional(),
        rawInput: o.string().optional(),
        inputEncoding: o.enum(["json", "text"]).optional(),
        output: o.never().optional(),
        errorText: o.never().optional(),
        approval: o.never().optional(),
      }),
      o.object({
        type: o.string().startsWith("tool-"),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("input-available"),
        providerExecuted: o.boolean().optional(),
        input: o.unknown(),
        output: o.never().optional(),
        errorText: o.never().optional(),
        callProviderMetadata: Pe.optional(),
        approval: o.never().optional(),
      }),
      o.object({
        type: o.string().startsWith("tool-"),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("approval-requested"),
        input: o.unknown(),
        providerExecuted: o.boolean().optional(),
        output: o.never().optional(),
        errorText: o.never().optional(),
        callProviderMetadata: Pe.optional(),
        approval: e,
      }),
      o.object({
        type: o.string().startsWith("tool-"),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("approval-responded"),
        input: o.unknown(),
        providerExecuted: o.boolean().optional(),
        output: o.never().optional(),
        errorText: o.never().optional(),
        callProviderMetadata: Pe.optional(),
        approval: t,
      }),
      o.object({
        type: o.string().startsWith("tool-"),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("output-available"),
        providerExecuted: o.boolean().optional(),
        input: o.unknown(),
        output: o.unknown(),
        errorText: o.never().optional(),
        callProviderMetadata: Pe.optional(),
        resultProviderMetadata: Pe.optional(),
        preliminary: o.boolean().optional(),
        approval: r.optional(),
      }),
      o.object({
        type: o.string().startsWith("tool-"),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("output-error"),
        providerExecuted: o.boolean().optional(),
        input: o.unknown().optional(),
        rawInput: o.unknown().optional(),
        output: o.never().optional(),
        errorText: o.string(),
        callProviderMetadata: Pe.optional(),
        resultProviderMetadata: Pe.optional(),
        approval: r.optional(),
      }),
      o.object({
        type: o.string().startsWith("tool-"),
        toolCallId: o.string(),
        toolMetadata: xt.optional(),
        state: o.literal("output-denied"),
        providerExecuted: o.boolean().optional(),
        input: o.unknown(),
        output: o.never().optional(),
        errorText: o.never().optional(),
        callProviderMetadata: Pe.optional(),
        approval: a,
      }),
    ]),
    c = o
      .object({
        id: o.string(),
        role: o.enum(["system", "user", "assistant"]),
        metadata: o.unknown().optional(),
        parts: Ud((u) => {
          let p = u?.type;
          if (typeof p == "string") {
            if (p.startsWith("data-")) return i;
            if (p.startsWith("tool-")) return d;
            if (p === "dynamic-tool") return l;
          }
          return s;
        }),
      })
      .superRefine((u, p) => {
        u.role !== "assistant" &&
          u.parts.length === 0 &&
          p.addIssue({
            origin: "array",
            code: "too_small",
            minimum: 1,
            inclusive: !0,
            input: u.parts,
            path: ["parts"],
            message: "Message must contain at least one part",
          });
      });
  return G(Ud(() => c).check(o.minLength(1, "Messages array must not be empty")));
});
async function sm(
  { messages: e, metadataSchema: t, dataSchemas: r, tools: a },
  { convertMissingTerminalToolsToDynamic: n }
) {
  try {
    if (e == null)
      return {
        success: !1,
        error: new Se({
          parameter: "messages",
          value: e,
          message: "messages parameter must be provided",
        }),
      };
    let s = await Ht({ value: e, schema: Bb });
    if (t)
      for (let [l, d] of s.entries())
        d.metadata = await Ht({
          value: d.metadata,
          schema: t,
          context: { field: `messages[${l}].metadata`, entityId: d.id },
        });
    let i = a != null || n;
    if (r || i)
      for (let [l, d] of s.entries())
        for (let [c, u] of d.parts.entries()) {
          if (r && u.type.startsWith("data-")) {
            let p = u,
              m = p.type.slice(5),
              _ = r[m];
            if (!_)
              return {
                success: !1,
                error: new Ae({
                  value: p.data,
                  cause: `No data schema found for data part ${m}`,
                  context: {
                    field: `messages[${l}].parts[${c}].data`,
                    entityName: m,
                    entityId: p.id,
                  },
                }),
              };
            p.data = await Ht({
              value: p.data,
              schema: _,
              context: { field: `messages[${l}].parts[${c}].data`, entityName: m, entityId: p.id },
            });
          }
          if (i && u.type.startsWith("tool-")) {
            let p = u,
              m = p.type.slice(5),
              _ = On(a, m),
              h =
                p.state === "output-available" ||
                p.state === "output-error" ||
                p.state === "output-denied";
            if (!_ && h) {
              (a != null || n) && (d.parts[c] = Fd(p));
              continue;
            }
            if (!_)
              return {
                success: !1,
                error: new Ae({
                  value: p.input,
                  cause: `No tool schema found for tool part ${m}`,
                  context: {
                    field: `messages[${l}].parts[${c}].input`,
                    entityName: m,
                    entityId: p.toolCallId,
                  },
                }),
              };
            let b = {
                field: `messages[${l}].parts[${c}].input`,
                entityName: m,
                entityId: p.toolCallId,
              },
              y = zb(p),
              f = y == null ? p.input : y.value,
              v = !1;
            if (
              p.state !== "input-streaming" &&
              (p.state !== "output-error" || y != null || p.input !== void 0)
            ) {
              let T = await Re({ value: f, schema: _.inputSchema, context: b }),
                I;
              if (
                (T.success
                  ? y != null &&
                    (xr(T.value, p.input) ||
                      (I = new Ae({
                        value: p.input,
                        cause:
                          "Tool input does not match the output reconstructed from inputSchemaInput.",
                        context: b,
                      })))
                  : (I = T.error),
                I != null)
              )
                if (p.state === "output-error" || (p.state === "output-available" && Lb(p.input)))
                  v = !0;
                else throw I;
            }
            (p.state === "output-available" &&
              _.outputSchema &&
              (await Ht({
                value: p.output,
                schema: _.outputSchema,
                context: {
                  field: `messages[${l}].parts[${c}].output`,
                  entityName: m,
                  entityId: p.toolCallId,
                },
              })),
              v && (d.parts[c] = Fd(p)));
          }
        }
    return { success: !0, data: s };
  } catch (s) {
    return { success: !1, error: s };
  }
}
async function im(e) {
  return sm(e, { convertMissingTerminalToolsToDynamic: !1 });
}
async function Jb(e) {
  let t = await im(e);
  if (!t.success) throw t.error;
  return t.data;
}
async function lm(e) {
  let t = await sm(e, { convertMissingTerminalToolsToDynamic: !0 });
  if (!t.success) throw t.error;
  return t.data;
}
async function di({
  agent: e,
  uiMessages: t,
  options: r,
  abortSignal: a,
  timeout: n,
  experimental_transform: s,
  onStepFinish: i,
  ...l
}) {
  var d;
  let c = t ?? l.originalMessages,
    u = await lm({ messages: c, tools: e.tools }),
    p = await ui(u, { tools: e.tools });
  return (
    await e.stream({
      prompt: p,
      options: r,
      abortSignal: a,
      timeout: n,
      experimental_transform: s,
      onStepFinish: i,
    })
  ).toUIMessageStream({ ...l, originalMessages: (d = l.originalMessages) != null ? d : u });
}
async function Gb({
  headers: e,
  status: t,
  statusText: r,
  keepAliveMs: a,
  consumeSseStream: n,
  ...s
}) {
  return ni({
    headers: e,
    status: t,
    statusText: r,
    keepAliveMs: a,
    consumeSseStream: n,
    stream: await di(s),
  });
}
async function Hb({
  response: e,
  headers: t,
  status: r,
  statusText: a,
  keepAliveMs: n,
  consumeSseStream: s,
  ...i
}) {
  return li({
    response: e,
    headers: t,
    status: r,
    statusText: a,
    keepAliveMs: n,
    consumeSseStream: s,
    stream: await di(i),
  });
}
async function Wb({
  model: e,
  value: t,
  providerOptions: r,
  maxRetries: a,
  abortSignal: n,
  headers: s,
  experimental_telemetry: i,
}) {
  let l = hp(e),
    { maxRetries: d, retry: c } = Kt({ maxRetries: a, abortSignal: n }),
    u = Ne(s ?? {}, `ai/${ir}`),
    p = ea({ model: l, telemetry: i, headers: u, settings: { maxRetries: d } }),
    m = ta(i);
  return ut({
    name: "ai.embed",
    attributes: he({
      telemetry: i,
      attributes: {
        ...lt({ operationId: "ai.embed", telemetry: i }),
        ...p,
        "ai.value": { input: () => JSON.stringify(t) },
      },
    }),
    tracer: m,
    fn: async (_) => {
      let {
        embedding: h,
        usage: b,
        warnings: y,
        response: f,
        providerMetadata: v,
      } = await c(() =>
        ut({
          name: "ai.embed.doEmbed",
          attributes: he({
            telemetry: i,
            attributes: {
              ...lt({ operationId: "ai.embed.doEmbed", telemetry: i }),
              ...p,
              "ai.values": { input: () => [JSON.stringify(t)] },
            },
          }),
          tracer: m,
          fn: async (T) => {
            var I, E;
            let g = await l.doEmbed({
                values: [t],
                abortSignal: n,
                headers: u,
                providerOptions: r,
              }),
              x = g.embeddings[0],
              M = (I = g.usage) != null ? I : { tokens: NaN };
            if (
              (T.setAttributes(
                await he({
                  telemetry: i,
                  attributes: {
                    "ai.embeddings": { output: () => g.embeddings.map((J) => JSON.stringify(J)) },
                    "ai.usage.tokens": M.tokens,
                  },
                })
              ),
              x == null)
            )
              throw new mr({ data: g.embeddings, message: "No embedding generated." });
            return {
              embedding: x,
              usage: M,
              warnings: (E = g.warnings) != null ? E : [],
              providerMetadata: g.providerMetadata,
              response: g.response,
            };
          },
        })
      );
      return (
        _.setAttributes(
          await he({
            telemetry: i,
            attributes: {
              "ai.embedding": { output: () => JSON.stringify(h) },
              "ai.usage.tokens": b.tokens,
            },
          })
        ),
        Ot({ warnings: y, provider: l.provider, model: l.modelId }),
        new Zb({ value: t, embedding: h, usage: b, warnings: y, providerMetadata: v, response: f })
      );
    },
  });
}
var Zb = class {
  constructor(e) {
    ((this.value = e.value),
      (this.embedding = e.embedding),
      (this.usage = e.usage),
      (this.warnings = e.warnings),
      (this.providerMetadata = e.providerMetadata),
      (this.response = e.response));
  }
};
function Ro(e, t, r) {
  Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 });
}
function um(e) {
  return e[ro];
}
function dm(e) {
  return e[ao];
}
function Kb(e, t) {
  if (t <= 0) throw new Error("chunkSize must be greater than 0");
  let r = [];
  for (let a = 0; a < e.length; a += t) r.push(e.slice(a, a + t));
  return r;
}
async function Yb({
  model: e,
  values: t,
  maxParallelCalls: r = 1 / 0,
  maxRetries: a,
  abortSignal: n,
  headers: s,
  providerOptions: i,
  experimental_telemetry: l,
}) {
  let d = hp(e),
    { maxRetries: c, retry: u } = Kt({ maxRetries: a, abortSignal: n }),
    p = Ne(s ?? {}, `ai/${ir}`),
    m = ea({ model: d, telemetry: l, headers: p, settings: { maxRetries: c } }),
    _ = ta(l);
  return ut({
    name: "ai.embedMany",
    attributes: he({
      telemetry: l,
      attributes: {
        ...lt({ operationId: "ai.embedMany", telemetry: l }),
        ...m,
        "ai.values": { input: () => t.map((h) => JSON.stringify(h)) },
      },
    }),
    tracer: _,
    fn: async (h) => {
      let [b, y, f] = await Promise.all([d.maxEmbeddingsPerCall, um(d), d.supportsParallelCalls]),
        v = b != null && b !== 1 / 0,
        T = y != null && y !== 1 / 0;
      if (!v && !T) {
        let {
          embeddings: w,
          usage: F,
          warnings: U,
          response: k,
          providerMetadata: R,
        } = await u(() =>
          ut({
            name: "ai.embedMany.doEmbed",
            attributes: he({
              telemetry: l,
              attributes: {
                ...lt({ operationId: "ai.embedMany.doEmbed", telemetry: l }),
                ...m,
                "ai.values": { input: () => t.map((q) => JSON.stringify(q)) },
              },
            }),
            tracer: _,
            fn: async (q) => {
              var se, de;
              let X = await d.doEmbed({
                  values: t,
                  abortSignal: n,
                  headers: p,
                  providerOptions: i,
                }),
                z = X.embeddings,
                ee = (se = X.usage) != null ? se : { tokens: NaN };
              return (
                q.setAttributes(
                  await he({
                    telemetry: l,
                    attributes: {
                      "ai.embeddings": { output: () => z.map((ie) => JSON.stringify(ie)) },
                      "ai.usage.tokens": ee.tokens,
                    },
                  })
                ),
                {
                  embeddings: z,
                  usage: ee,
                  warnings: (de = X.warnings) != null ? de : [],
                  providerMetadata: X.providerMetadata,
                  response: X.response,
                }
              );
            },
          })
        );
        return (
          h.setAttributes(
            await he({
              telemetry: l,
              attributes: {
                "ai.embeddings": { output: () => w.map((q) => JSON.stringify(q)) },
                "ai.usage.tokens": F.tokens,
              },
            })
          ),
          Ot({ warnings: U, provider: d.provider, model: d.modelId }),
          new Vd({
            values: t,
            embeddings: w,
            usage: F,
            warnings: U,
            providerMetadata: R,
            responses: [k],
          })
        );
      }
      let I = Qb({
          values: t,
          maxEmbeddingsPerCall: v ? b : 1 / 0,
          maxInputBytesPerCall: T ? y : 1 / 0,
        }),
        E = dm(d),
        g = [],
        x = [],
        M = [],
        J = 0,
        N,
        D = Kb(I, f ? r : 1),
        H = 0;
      for (let w of D) {
        let F = await Promise.all(
          w.map(async (U) => {
            let k = H;
            H += U.length;
            let R = E
              ? await E({ providerOptions: i, values: t, startIndex: k, endIndex: k + U.length })
              : i;
            return u(() =>
              ut({
                name: "ai.embedMany.doEmbed",
                attributes: he({
                  telemetry: l,
                  attributes: {
                    ...lt({ operationId: "ai.embedMany.doEmbed", telemetry: l }),
                    ...m,
                    "ai.values": { input: () => U.map((q) => JSON.stringify(q)) },
                  },
                }),
                tracer: _,
                fn: async (q) => {
                  var se, de;
                  let X = await d.doEmbed({
                      values: U,
                      abortSignal: n,
                      headers: p,
                      providerOptions: R,
                    }),
                    z = X.embeddings,
                    ee = (se = X.usage) != null ? se : { tokens: NaN };
                  return (
                    q.setAttributes(
                      await he({
                        telemetry: l,
                        attributes: {
                          "ai.embeddings": { output: () => z.map((ie) => JSON.stringify(ie)) },
                          "ai.usage.tokens": ee.tokens,
                        },
                      })
                    ),
                    {
                      embeddings: z,
                      usage: ee,
                      warnings: (de = X.warnings) != null ? de : [],
                      providerMetadata: X.providerMetadata,
                      response: X.response,
                    }
                  );
                },
              })
            );
          })
        );
        for (let U of F)
          if (
            (g.push(...U.embeddings),
            x.push(...U.warnings),
            M.push(U.response),
            (J += U.usage.tokens),
            U.providerMetadata)
          )
            if (!N) N = { ...U.providerMetadata };
            else
              for (let [k, R] of Object.entries(U.providerMetadata))
                Ro(N, k, { ...On(N, k), ...R });
      }
      return (
        h.setAttributes(
          await he({
            telemetry: l,
            attributes: {
              "ai.embeddings": { output: () => g.map((w) => JSON.stringify(w)) },
              "ai.usage.tokens": J,
            },
          })
        ),
        Ot({ warnings: x, provider: d.provider, model: d.modelId }),
        new Vd({
          values: t,
          embeddings: g,
          usage: { tokens: J },
          warnings: x,
          providerMetadata: N,
          responses: M,
        })
      );
    },
  });
}
var Xb = new TextEncoder();
function Qb({ values: e, maxEmbeddingsPerCall: t, maxInputBytesPerCall: r }) {
  if (t <= 0) throw new Error("maxEmbeddingsPerCall must be greater than 0");
  if (r <= 0) throw new Error("maxInputBytesPerCall must be greater than 0");
  if (e.length === 0) return [];
  let a = [],
    n = [],
    s = 0;
  for (let i of e) {
    let l = Xb.encode(i).length;
    (n.length > 0 && (n.length >= t || s + l > r) && (a.push(n), (n = []), (s = 0)),
      n.push(i),
      (s += l));
  }
  return (a.push(n), a);
}
var Vd = class {
    constructor(e) {
      ((this.values = e.values),
        (this.embeddings = e.embeddings),
        (this.usage = e.usage),
        (this.warnings = e.warnings),
        (this.providerMetadata = e.providerMetadata),
        (this.responses = e.responses));
    }
  },
  To = class extends Error {
    constructor() {
      (super("No image generated."), (this.name = "RetryableNoImageResultError"));
    }
  };
async function cm({
  model: e,
  prompt: t,
  n: r = 1,
  maxImagesPerCall: a,
  size: n,
  aspectRatio: s,
  seed: i,
  providerOptions: l,
  maxRetries: d,
  abortSignal: c,
  headers: u,
}) {
  var p, m;
  let _ = Oy(e),
    h = Ne(u ?? {}, `ai/${ir}`),
    { retry: b } = Kt({
      maxRetries: d,
      abortSignal: c,
      additionalRetryableError: (N) => N instanceof To,
    }),
    y = (p = a ?? (await tw(_))) != null ? p : 1,
    f = Math.ceil(r / y),
    v = Array.from({ length: f }, (N, D) => {
      if (D < f - 1) return y;
      let H = r % y;
      return H === 0 ? y : H;
    }),
    I = (
      await Promise.all(
        v.map(async (N) => {
          let D = [];
          try {
            return (
              await b(async () => {
                let { prompt: H, files: w, mask: F } = rw(t),
                  U = await _.doGenerate({
                    prompt: H,
                    files: w,
                    mask: F,
                    n: N,
                    abortSignal: c,
                    headers: h,
                    size: n,
                    aspectRatio: s,
                    seed: i,
                    providerOptions: l ?? {},
                  });
                if ((D.push(U), U.images.length === 0 && U.isRetryable !== !1)) throw new To();
                return U;
              }),
              D
            );
          } catch (H) {
            if (
              (H instanceof To
                ? H
                : Hs.isInstance(H) && H.lastError instanceof To
                  ? H.lastError
                  : void 0) != null
            )
              return D;
            throw H;
          }
        })
      )
    ).flat(),
    E = [],
    g = [],
    x = [],
    M = {},
    J = { inputTokens: void 0, outputTokens: void 0, totalTokens: void 0 };
  for (let N of I) {
    if (
      (E.push(
        ...N.images.map((D) => {
          var H;
          return new Fr({
            data: D,
            mediaType: (H = Zt({ data: D, signatures: Na })) != null ? H : "image/png",
          });
        })
      ),
      g.push(...N.warnings),
      N.usage != null && (J = ob(J, N.usage)),
      N.providerMetadata)
    )
      for (let [D, H] of Object.entries(N.providerMetadata))
        if (D === "gateway") {
          let w = M[D];
          w != null && typeof w == "object" ? (M[D] = { ...w, ...H }) : (M[D] = H);
          let F = M[D].images;
          Array.isArray(F) && F.length === 0 && delete M[D].images;
        } else {
          let w = (m = On(M, D)) != null ? m : { images: [] };
          (w.images.push(...N.providerMetadata[D].images), Ro(M, D, w));
        }
    x.push(N.response);
  }
  if ((Ot({ warnings: g, provider: _.provider, model: _.modelId }), !E.length))
    throw new vc({ responses: x });
  return new ew({ images: E, warnings: g, responses: x, providerMetadata: M, usage: J });
}
var ew = class {
  constructor(e) {
    ((this.images = e.images),
      (this.warnings = e.warnings),
      (this.responses = e.responses),
      (this.providerMetadata = e.providerMetadata),
      (this.usage = e.usage));
  }
  get image() {
    return this.images[0];
  }
};
async function tw(e) {
  return e.maxImagesPerCall instanceof Function
    ? e.maxImagesPerCall({ modelId: e.modelId })
    : e.maxImagesPerCall;
}
function rw(e) {
  return typeof e == "string"
    ? { prompt: e, files: void 0, mask: void 0 }
    : { prompt: e.text, files: e.images.map(Ld), mask: e.mask ? Ld(e.mask) : void 0 };
}
function Ld(e) {
  if (typeof e == "string" && e.startsWith("http")) return { type: "url", url: e };
  if (typeof e == "string" && e.startsWith("data:")) {
    let { mediaType: r, base64Content: a } = Zs(e);
    if (a != null) {
      let n = Ct(a);
      return {
        type: "file",
        data: n,
        mediaType: r || Zt({ data: n, signatures: Na }) || "image/png",
      };
    }
  }
  let t = Rn(e);
  return { type: "file", data: t, mediaType: Zt({ data: t, signatures: Na }) || "image/png" };
}
var aw = cm,
  nw = {
    type: "no-schema",
    jsonSchema: async () => {},
    async validatePartialResult({ value: e, textDelta: t }) {
      return { success: !0, value: { partial: e, textDelta: t } };
    },
    async validateFinalResult(e, t) {
      return e === void 0
        ? {
            success: !1,
            error: new St({
              message: "No object generated: response did not match schema.",
              text: t.text,
              response: t.response,
              usage: t.usage,
              finishReason: t.finishReason,
            }),
          }
        : { success: !0, value: e };
    },
    createElementStream() {
      throw new Cr({ functionality: "element streams in no-schema mode" });
    },
  },
  ow = (e) => ({
    type: "object",
    jsonSchema: async () => await e.jsonSchema,
    async validatePartialResult({ value: t, textDelta: r }) {
      return { success: !0, value: { partial: t, textDelta: r } };
    },
    async validateFinalResult(t) {
      return Re({ value: t, schema: e });
    },
    createElementStream() {
      throw new Cr({ functionality: "element streams in object mode" });
    },
  }),
  sw = (e) => ({
    type: "array",
    createArrayStreamParser: () => Bp(e, !1),
    jsonSchema: async () => {
      let { $schema: t, ...r } = await e.jsonSchema;
      return {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: { elements: { type: "array", items: r } },
        required: ["elements"],
        additionalProperties: !1,
      };
    },
    async validatePartialResult({ value: t, latestObject: r, isFirstDelta: a, isFinalDelta: n }) {
      var s;
      if (!Xa(t) || !Ho(t.elements))
        return {
          success: !1,
          error: new Ae({
            value: t,
            cause: "value must be an object that contains an array of elements",
          }),
        };
      let i = t.elements,
        l = [];
      for (let u = 0; u < i.length; u++) {
        let p = i[u],
          m = await Re({ value: p, schema: e });
        if (!(u === i.length - 1 && !n)) {
          if (!m.success) return m;
          l.push(m.value);
        }
      }
      let d = (s = r?.length) != null ? s : 0,
        c = "";
      return (
        a && (c += "["),
        d > 0 && (c += ","),
        (c += l
          .slice(d)
          .map((u) => JSON.stringify(u))
          .join(",")),
        n && (c += "]"),
        { success: !0, value: { partial: l, textDelta: c } }
      );
    },
    async validateFinalResult(t) {
      if (!Xa(t) || !Ho(t.elements))
        return {
          success: !1,
          error: new Ae({
            value: t,
            cause: "value must be an object that contains an array of elements",
          }),
        };
      let r = t.elements,
        a = [];
      for (let n of r) {
        let s = await Re({ value: n, schema: e });
        if (!s.success) return s;
        a.push(s.value);
      }
      return { success: !0, value: a };
    },
    createElementStream(t) {
      let r = 0;
      return or(
        t.pipeThrough(
          new TransformStream({
            transform(a, n) {
              switch (a.type) {
                case "object": {
                  let s = a.object;
                  for (; r < s.length; r++) n.enqueue(s[r]);
                  break;
                }
                case "text-delta":
                case "finish":
                case "error":
                  break;
                default: {
                  let s = a;
                  throw new Error(`Unsupported chunk type: ${s}`);
                }
              }
            },
          })
        )
      );
    },
  }),
  iw = (e) => ({
    type: "enum",
    jsonSchema: async () => ({
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: { result: { type: "string", enum: e } },
      required: ["result"],
      additionalProperties: !1,
    }),
    async validateFinalResult(t) {
      if (!Xa(t) || typeof t.result != "string")
        return {
          success: !1,
          error: new Ae({
            value: t,
            cause: 'value must be an object that contains a string in the "result" property.',
          }),
        };
      let r = t.result;
      return e.includes(r)
        ? { success: !0, value: r }
        : { success: !1, error: new Ae({ value: t, cause: "value must be a string in the enum" }) };
    },
    async validatePartialResult({ value: t, textDelta: r }) {
      if (!Xa(t) || typeof t.result != "string")
        return {
          success: !1,
          error: new Ae({
            value: t,
            cause: 'value must be an object that contains a string in the "result" property.',
          }),
        };
      let a = t.result,
        n = e.filter((s) => s.startsWith(a));
      return t.result.length === 0 || n.length === 0
        ? { success: !1, error: new Ae({ value: t, cause: "value must be a string in the enum" }) }
        : { success: !0, value: { partial: n.length > 1 ? a : n[0], textDelta: r } };
    },
    createElementStream() {
      throw new Cr({ functionality: "element streams in enum mode" });
    },
  });
function pm({ output: e, schema: t, enumValues: r }) {
  switch (e) {
    case "object":
      return ow(nt(t));
    case "array":
      return sw(nt(t));
    case "enum":
      return iw(r);
    case "no-schema":
      return nw;
    default: {
      let a = e;
      throw new Error(`Unsupported output: ${a}`);
    }
  }
}
async function zd(e, t, r) {
  let a = await Ye({ text: e });
  if (!a.success)
    throw new St({
      message: "No object generated: could not parse the response.",
      cause: a.error,
      text: e,
      response: r.response,
      usage: r.usage,
      finishReason: r.finishReason,
    });
  let n = await t.validateFinalResult(a.value, { text: e, response: r.response, usage: r.usage });
  if (!n.success)
    throw new St({
      message: "No object generated: response did not match schema.",
      cause: n.error,
      text: e,
      response: r.response,
      usage: r.usage,
      finishReason: r.finishReason,
    });
  return n.value;
}
async function mm(e, t, r, a) {
  try {
    return await zd(e, t, a);
  } catch (n) {
    if (r != null && St.isInstance(n) && (fr.isInstance(n.cause) || Ae.isInstance(n.cause))) {
      let s = await r({ text: e, error: n.cause });
      if (s === null) throw n;
      return await zd(s, t, a);
    }
    throw n;
  }
}
function fm({ output: e, schema: t, schemaName: r, schemaDescription: a, enumValues: n }) {
  if (e != null && e !== "object" && e !== "array" && e !== "enum" && e !== "no-schema")
    throw new Se({ parameter: "output", value: e, message: "Invalid output type." });
  if (e === "no-schema") {
    if (t != null)
      throw new Se({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for no-schema output.",
      });
    if (a != null)
      throw new Se({
        parameter: "schemaDescription",
        value: a,
        message: "Schema description is not supported for no-schema output.",
      });
    if (r != null)
      throw new Se({
        parameter: "schemaName",
        value: r,
        message: "Schema name is not supported for no-schema output.",
      });
    if (n != null)
      throw new Se({
        parameter: "enumValues",
        value: n,
        message: "Enum values are not supported for no-schema output.",
      });
  }
  if (e === "object") {
    if (t == null)
      throw new Se({
        parameter: "schema",
        value: t,
        message: "Schema is required for object output.",
      });
    if (n != null)
      throw new Se({
        parameter: "enumValues",
        value: n,
        message: "Enum values are not supported for object output.",
      });
  }
  if (e === "array") {
    if (t == null)
      throw new Se({
        parameter: "schema",
        value: t,
        message: "Element schema is required for array output.",
      });
    if (n != null)
      throw new Se({
        parameter: "enumValues",
        value: n,
        message: "Enum values are not supported for array output.",
      });
  }
  if (e === "enum") {
    if (t != null)
      throw new Se({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for enum output.",
      });
    if (a != null)
      throw new Se({
        parameter: "schemaDescription",
        value: a,
        message: "Schema description is not supported for enum output.",
      });
    if (r != null)
      throw new Se({
        parameter: "schemaName",
        value: r,
        message: "Schema name is not supported for enum output.",
      });
    if (n == null)
      throw new Se({
        parameter: "enumValues",
        value: n,
        message: "Enum values are required for enum output.",
      });
    for (let s of n)
      if (typeof s != "string")
        throw new Se({
          parameter: "enumValues",
          value: s,
          message: "Enum values must be strings.",
        });
  }
}
var lw = Gt({ prefix: "aiobj", size: 24 });
async function uw(e) {
  let {
      model: t,
      output: r = "object",
      system: a,
      prompt: n,
      messages: s,
      allowSystemInMessages: i,
      maxRetries: l,
      abortSignal: d,
      headers: c,
      experimental_repairText: u,
      experimental_telemetry: p,
      experimental_download: m,
      providerOptions: _,
      _internal: { generateId: h = lw, currentDate: b = () => new Date() } = {},
      ...y
    } = e,
    f = Oa(t),
    v = "enum" in e ? e.enum : void 0,
    { schema: T, schemaDescription: I, schemaName: E } = "schema" in e ? e : {};
  fm({ output: r, schema: T, schemaName: E, schemaDescription: I, enumValues: v });
  let { maxRetries: g, retry: x } = Kt({ maxRetries: l, abortSignal: d }),
    M = pm({ output: r, schema: T, enumValues: v }),
    J = Ur(y),
    N = Ne(c ?? {}, `ai/${ir}`),
    D = ea({ model: f, telemetry: p, headers: N, settings: { ...J, maxRetries: g } }),
    H = ta(p),
    w = await M.jsonSchema();
  try {
    return await ut({
      name: "ai.generateObject",
      attributes: he({
        telemetry: p,
        attributes: {
          ...lt({ operationId: "ai.generateObject", telemetry: p }),
          ...D,
          "ai.prompt": { input: () => JSON.stringify({ system: a, prompt: n, messages: s }) },
          "ai.schema": w != null ? { input: () => JSON.stringify(w) } : void 0,
          "ai.schema.name": E,
          "ai.schema.description": I,
          "ai.settings.output": M.type,
        },
      }),
      tracer: H,
      fn: async (F) => {
        var U;
        let k,
          R,
          q,
          se,
          de,
          X,
          z,
          ee,
          ie = await No({ system: a, prompt: n, messages: s, allowSystemInMessages: i }),
          $ = await Oo({
            prompt: ie,
            supportedUrls: await f.supportedUrls,
            download: m,
            abortSignal: d,
          }),
          W = await x(() =>
            ut({
              name: "ai.generateObject.doGenerate",
              attributes: he({
                telemetry: p,
                attributes: {
                  ...lt({ operationId: "ai.generateObject.doGenerate", telemetry: p }),
                  ...D,
                  "ai.prompt.messages": { input: () => Po($) },
                  "gen_ai.system": f.provider,
                  "gen_ai.request.model": f.modelId,
                  "gen_ai.request.frequency_penalty": J.frequencyPenalty,
                  "gen_ai.request.max_tokens": J.maxOutputTokens,
                  "gen_ai.request.presence_penalty": J.presencePenalty,
                  "gen_ai.request.temperature": J.temperature,
                  "gen_ai.request.top_k": J.topK,
                  "gen_ai.request.top_p": J.topP,
                },
              }),
              tracer: H,
              fn: async (Xe) => {
                var qe, dt, Ge, bt, Ke, je, Nt, ve;
                let Ie = await f.doGenerate({
                    responseFormat: { type: "json", schema: w, name: E, description: I },
                    ...Ur(y),
                    prompt: $,
                    providerOptions: _,
                    abortSignal: d,
                    headers: N,
                  }),
                  Qe = {
                    id: (dt = (qe = Ie.response) == null ? void 0 : qe.id) != null ? dt : h(),
                    timestamp:
                      (bt = (Ge = Ie.response) == null ? void 0 : Ge.timestamp) != null ? bt : b(),
                    modelId:
                      (je = (Ke = Ie.response) == null ? void 0 : Ke.modelId) != null
                        ? je
                        : f.modelId,
                    headers: (Nt = Ie.response) == null ? void 0 : Nt.headers,
                    body: (ve = Ie.response) == null ? void 0 : ve.body,
                  },
                  wt = Us(Ie.content),
                  ce = Fs(Ie.content);
                if (wt === void 0)
                  throw new St({
                    message: "No object generated: the model did not return a response.",
                    response: Qe,
                    usage: Pa(Ie.usage),
                    finishReason: Ie.finishReason.unified,
                  });
                return (
                  Xe.setAttributes(
                    await he({
                      telemetry: p,
                      attributes: {
                        "ai.response.finishReason": Ie.finishReason.unified,
                        "ai.response.object": { output: () => wt },
                        "ai.response.id": Qe.id,
                        "ai.response.model": Qe.modelId,
                        "ai.response.timestamp": Qe.timestamp.toISOString(),
                        "ai.response.providerMetadata": {
                          output: () => JSON.stringify(Ie.providerMetadata),
                        },
                        "ai.usage.promptTokens": Ie.usage.inputTokens.total,
                        "ai.usage.completionTokens": Ie.usage.outputTokens.total,
                        "gen_ai.response.finish_reasons": [Ie.finishReason.unified],
                        "gen_ai.response.id": Qe.id,
                        "gen_ai.response.model": Qe.modelId,
                        "gen_ai.usage.input_tokens": Ie.usage.inputTokens.total,
                        "gen_ai.usage.output_tokens": Ie.usage.outputTokens.total,
                      },
                    })
                  ),
                  { ...Ie, objectText: wt, reasoning: ce, responseData: Qe }
                );
              },
            })
          );
        ((k = W.objectText),
          (R = W.finishReason.unified),
          (q = Pa(W.usage)),
          (se = W.warnings),
          (z = W.providerMetadata),
          (X = (U = W.request) != null ? U : {}),
          (de = W.responseData),
          (ee = W.reasoning),
          Ot({ warnings: se, provider: f.provider, model: f.modelId }));
        let Ce = await mm(k, M, u, { response: de, usage: q, finishReason: R });
        return (
          F.setAttributes(
            await he({
              telemetry: p,
              attributes: {
                "ai.response.finishReason": R,
                "ai.response.object": { output: () => JSON.stringify(Ce) },
                "ai.response.providerMetadata": { output: () => JSON.stringify(z) },
                "ai.usage.promptTokens": q.inputTokens,
                "ai.usage.completionTokens": q.outputTokens,
              },
            })
          ),
          new dw({
            object: Ce,
            reasoning: ee,
            finishReason: R,
            usage: q,
            warnings: se,
            request: X,
            response: de,
            providerMetadata: z,
          })
        );
      },
    });
  } catch (F) {
    throw Aa(F);
  }
}
var dw = class {
  constructor(e) {
    ((this.object = e.object),
      (this.finishReason = e.finishReason),
      (this.usage = e.usage),
      (this.warnings = e.warnings),
      (this.providerMetadata = e.providerMetadata),
      (this.response = e.response),
      (this.request = e.request),
      (this.reasoning = e.reasoning));
  }
  toJsonResponse(e) {
    var t;
    return new Response(JSON.stringify(this.object), {
      status: (t = e?.status) != null ? t : 200,
      headers: Cn(e?.headers, { "content-type": "application/json; charset=utf-8" }),
    });
  }
};
function cw(e, t) {
  if (e.length !== t.length)
    throw new Se({
      parameter: "vector1,vector2",
      value: { vector1Length: e.length, vector2Length: t.length },
      message: "Vectors must have the same length",
    });
  let r = e.length;
  if (r === 0) return 0;
  let a = 0,
    n = 0,
    s = 0;
  for (let i = 0; i < r; i++) {
    let l = e[i],
      d = t[i];
    ((a += l * l), (n += d * d), (s += l * d));
  }
  return a === 0 || n === 0 ? 0 : s / (Math.sqrt(a) * Math.sqrt(n));
}
function ci(e) {
  return ({ url: t, abortSignal: r }) => yp({ url: t, maxBytes: e?.maxBytes, abortSignal: r });
}
var { atob: pw } = globalThis;
function mw(e) {
  let [t, r] = e.split(",");
  if (t.split(";")[0].split(":")[1] == null || r == null)
    throw new Error("Invalid data URL format");
  try {
    return pw(r);
  } catch {
    throw new Error("Error decoding data URL");
  }
}
var hm = class {
  constructor() {
    ((this.queue = []), (this.isProcessing = !1), (this.idleWaiters = []));
  }
  async processQueue() {
    if (!this.isProcessing) {
      this.isProcessing = !0;
      try {
        for (; this.queue.length > 0;) (await this.queue[0](), this.queue.shift());
      } finally {
        this.isProcessing = !1;
        for (let e of this.idleWaiters.splice(0)) e();
      }
    }
  }
  async run(e) {
    return new Promise((t, r) => {
      (this.queue.push(async () => {
        try {
          (await e(), t());
        } catch (a) {
          r(a);
        }
      }),
        this.processQueue());
    });
  }
  async waitForIdle() {
    (!this.isProcessing && this.queue.length === 0) ||
      (await new Promise((e) => {
        this.idleWaiters.push(e);
      }));
  }
};
function fw({ chunks: e, initialDelayInMs: t = 0, chunkDelayInMs: r = 0, _internal: a }) {
  var n;
  let s = (n = a?.delay) != null ? n : pn,
    i = 0;
  return new ReadableStream({
    async pull(l) {
      i < e.length ? (await s(i === 0 ? t : r), l.enqueue(e[i++])) : l.close();
    },
  });
}
var hw = Gt({ prefix: "aiobj", size: 24 });
async function gw(e) {
  try {
    await e;
  } catch {}
}
function vw(e) {
  let {
      model: t,
      output: r = "object",
      system: a,
      prompt: n,
      messages: s,
      allowSystemInMessages: i,
      maxRetries: l,
      abortSignal: d,
      headers: c,
      experimental_repairText: u,
      experimental_telemetry: p,
      experimental_download: m,
      providerOptions: _,
      onError: h = ({ error: J }) => {
        console.error(J);
      },
      onFinish: b,
      _internal: { generateId: y = hw, currentDate: f = () => new Date(), now: v = xn } = {},
      ...T
    } = e,
    I = "enum" in e && e.enum ? e.enum : void 0,
    { schema: E, schemaDescription: g, schemaName: x } = "schema" in e ? e : {};
  fm({ output: r, schema: E, schemaName: x, schemaDescription: g, enumValues: I });
  let M = pm({ output: r, schema: E, enumValues: I });
  return new yw({
    model: t,
    telemetry: p,
    headers: c,
    settings: T,
    maxRetries: l,
    abortSignal: d,
    outputStrategy: M,
    system: a,
    prompt: n,
    messages: s,
    allowSystemInMessages: i,
    schemaName: x,
    schemaDescription: g,
    providerOptions: _,
    repairText: u,
    onError: h,
    onFinish: b,
    download: m,
    generateId: y,
    currentDate: f,
    now: v,
  });
}
var yw = class {
    constructor({
      model: e,
      headers: t,
      telemetry: r,
      settings: a,
      maxRetries: n,
      abortSignal: s,
      outputStrategy: i,
      system: l,
      prompt: d,
      messages: c,
      allowSystemInMessages: u,
      schemaName: p,
      schemaDescription: m,
      providerOptions: _,
      repairText: h,
      onError: b,
      onFinish: y,
      download: f,
      generateId: v,
      currentDate: T,
      now: I,
    }) {
      ((this._object = new Tt()),
        (this._usage = new Tt()),
        (this._providerMetadata = new Tt()),
        (this._warnings = new Tt()),
        (this._request = new Tt()),
        (this._response = new Tt()),
        (this._finishReason = new Tt()));
      let E = Oa(e),
        { maxRetries: g, retry: x } = Kt({ maxRetries: n, abortSignal: s }),
        M = Ur(a),
        J = ea({ model: E, telemetry: r, headers: t, settings: { ...M, maxRetries: g } }),
        N = ta(r),
        D = this,
        H = rm(),
        w = new TransformStream({
          transform(F, U) {
            (U.enqueue(F),
              F.type === "error" && it({ event: { error: Aa(F.error) }, callbacks: b }));
          },
        });
      ((this.baseStream = H.stream.pipeThrough(w)),
        ut({
          name: "ai.streamObject",
          attributes: he({
            telemetry: r,
            attributes: {
              ...lt({ operationId: "ai.streamObject", telemetry: r }),
              ...J,
              "ai.prompt": { input: () => JSON.stringify({ system: l, prompt: d, messages: c }) },
              "ai.schema": { input: async () => JSON.stringify(await i.jsonSchema()) },
              "ai.schema.name": p,
              "ai.schema.description": m,
              "ai.settings.output": i.type,
            },
          }),
          tracer: N,
          endWhenDone: !1,
          endOnError: !0,
          fn: async (F) => {
            var U;
            let k = await No({ system: l, prompt: d, messages: c, allowSystemInMessages: u }),
              R = {
                responseFormat: {
                  type: "json",
                  schema: await i.jsonSchema(),
                  name: p,
                  description: m,
                },
                ...Ur(a),
                prompt: await Oo({
                  prompt: k,
                  supportedUrls: await E.supportedUrls,
                  download: f,
                  abortSignal: s,
                }),
                providerOptions: _,
                abortSignal: s,
                headers: t,
                includeRawChunks: !1,
              },
              q = {
                transform: (ce, me) => {
                  switch (ce.type) {
                    case "text-delta":
                      me.enqueue(ce.delta);
                      break;
                    case "response-metadata":
                    case "finish":
                    case "error":
                    case "stream-start":
                      me.enqueue(ce);
                      break;
                  }
                },
              },
              {
                result: { stream: se, response: de, request: X },
                doStreamSpan: z,
                startTimestampMs: ee,
              } = await x(() =>
                ut({
                  name: "ai.streamObject.doStream",
                  attributes: he({
                    telemetry: r,
                    attributes: {
                      ...lt({ operationId: "ai.streamObject.doStream", telemetry: r }),
                      ...J,
                      "ai.prompt.messages": { input: () => Po(R.prompt) },
                      "gen_ai.system": E.provider,
                      "gen_ai.request.model": E.modelId,
                      "gen_ai.request.frequency_penalty": M.frequencyPenalty,
                      "gen_ai.request.max_tokens": M.maxOutputTokens,
                      "gen_ai.request.presence_penalty": M.presencePenalty,
                      "gen_ai.request.temperature": M.temperature,
                      "gen_ai.request.top_k": M.topK,
                      "gen_ai.request.top_p": M.topP,
                    },
                  }),
                  tracer: N,
                  endWhenDone: !1,
                  endOnError: !0,
                  fn: async (ce) => ({
                    startTimestampMs: I(),
                    doStreamSpan: ce,
                    result: await E.doStream(R),
                  }),
                })
              );
            D._request.resolve(X ?? {});
            let ie,
              $ = xo(),
              W,
              Ce,
              Xe,
              qe,
              dt,
              Ge = (U = i.createArrayStreamParser) == null ? void 0 : U.call(i),
              bt = "",
              Ke = "",
              je = { id: v(), timestamp: T(), modelId: E.modelId },
              Nt,
              ve,
              Ie = !0,
              Qe = !0,
              wt = se.pipeThrough(new TransformStream(q)).pipeThrough(
                new TransformStream({
                  async transform(ce, me) {
                    var Lr, lr, ur;
                    if (typeof ce == "object" && ce.type === "stream-start") {
                      ie = ce.warnings;
                      return;
                    }
                    if (Ie) {
                      let Oe = I() - ee;
                      ((Ie = !1),
                        z.addEvent("ai.stream.firstChunk", { "ai.stream.msToFirstChunk": Oe }),
                        z.setAttributes({ "ai.stream.msToFirstChunk": Oe }));
                    }
                    if (typeof ce == "string") {
                      if (((bt += ce), (Ke += ce), Ge != null)) {
                        let _t = await Ge(ce);
                        if (_t !== "fallback") {
                          _t != null &&
                            ((ve = _t.partial),
                            me.enqueue({ type: "object", object: ve }),
                            me.enqueue({ type: "text-delta", textDelta: _t.textDelta }),
                            (Ke = ""),
                            (Qe = !1));
                          return;
                        }
                        Ge = void 0;
                      }
                      let { value: Oe, state: Ut } = await ra(bt);
                      if (Oe !== void 0 && !xr(Nt, Oe)) {
                        let _t = await i.validatePartialResult({
                          value: Oe,
                          textDelta: Ke,
                          latestObject: ve,
                          isFirstDelta: Qe,
                          isFinalDelta: Ut === "successful-parse",
                        });
                        _t.success &&
                          !xr(ve, _t.value.partial) &&
                          ((Nt = Oe),
                          (ve = _t.value.partial),
                          me.enqueue({ type: "object", object: ve }),
                          me.enqueue({ type: "text-delta", textDelta: _t.value.textDelta }),
                          (Ke = ""),
                          (Qe = !1));
                      }
                      return;
                    }
                    switch (ce.type) {
                      case "response-metadata": {
                        je = {
                          id: (Lr = ce.id) != null ? Lr : je.id,
                          timestamp: (lr = ce.timestamp) != null ? lr : je.timestamp,
                          modelId: (ur = ce.modelId) != null ? ur : je.modelId,
                        };
                        break;
                      }
                      case "error": {
                        if (dt === void 0) {
                          let Oe = Aa(ce.error);
                          ((dt = { error: Oe }),
                            (qe = Oe),
                            (W = "error"),
                            D.rejectResultPromises(Oe));
                        }
                        me.enqueue(ce);
                        break;
                      }
                      case "finish": {
                        if (
                          (Ke !== "" && me.enqueue({ type: "text-delta", textDelta: Ke }),
                          (W = dt === void 0 ? ce.finishReason.unified : "error"),
                          ($ = Pa(ce.usage)),
                          (Ce = ce.providerMetadata),
                          me.enqueue({ ...ce, finishReason: W, usage: $, response: je }),
                          Ot({ warnings: ie ?? [], provider: E.provider, model: E.modelId }),
                          dt !== void 0)
                        )
                          break;
                        (D._usage.resolve($),
                          D._providerMetadata.resolve(Ce),
                          D._warnings.resolve(ie),
                          D._response.resolve({ ...je, headers: de?.headers }),
                          D._finishReason.resolve(W ?? "other"));
                        try {
                          ((Xe = await mm(bt, i, h, { response: je, usage: $, finishReason: W })),
                            D._object.resolve(Xe));
                        } catch (Oe) {
                          ((qe = Oe), D._object.reject(Oe));
                        }
                        break;
                      }
                      default: {
                        me.enqueue(ce);
                        break;
                      }
                    }
                  },
                  async flush(ce) {
                    try {
                      let me = $ ?? { promptTokens: NaN, completionTokens: NaN, totalTokens: NaN };
                      (z.setAttributes(
                        await he({
                          telemetry: r,
                          attributes: {
                            "ai.response.finishReason": W,
                            "ai.response.object": { output: () => JSON.stringify(Xe) },
                            "ai.response.id": je.id,
                            "ai.response.model": je.modelId,
                            "ai.response.timestamp": je.timestamp.toISOString(),
                            "ai.response.providerMetadata": { output: () => JSON.stringify(Ce) },
                            "ai.usage.inputTokens": me.inputTokens,
                            "ai.usage.outputTokens": me.outputTokens,
                            "ai.usage.totalTokens": me.totalTokens,
                            "ai.usage.reasoningTokens": me.reasoningTokens,
                            "ai.usage.cachedInputTokens": me.cachedInputTokens,
                            "gen_ai.response.finish_reasons": [W],
                            "gen_ai.response.id": je.id,
                            "gen_ai.response.model": je.modelId,
                            "gen_ai.usage.input_tokens": me.inputTokens,
                            "gen_ai.usage.output_tokens": me.outputTokens,
                          },
                        })
                      ),
                        z.end(),
                        F.setAttributes(
                          await he({
                            telemetry: r,
                            attributes: {
                              "ai.usage.inputTokens": me.inputTokens,
                              "ai.usage.outputTokens": me.outputTokens,
                              "ai.usage.totalTokens": me.totalTokens,
                              "ai.usage.reasoningTokens": me.reasoningTokens,
                              "ai.usage.cachedInputTokens": me.cachedInputTokens,
                              "ai.response.object": { output: () => JSON.stringify(Xe) },
                              "ai.response.providerMetadata": { output: () => JSON.stringify(Ce) },
                            },
                          })
                        ),
                        await y?.({
                          usage: me,
                          object: Xe,
                          error: qe,
                          response: { ...je, headers: de?.headers },
                          warnings: ie,
                          providerMetadata: Ce,
                        }));
                    } catch (me) {
                      ce.enqueue({ type: "error", error: me });
                    } finally {
                      F.end();
                    }
                  },
                })
              );
            H.addStream(wt, {
              onError(ce) {
                let me = Aa(ce);
                (D.rejectResultPromises(me), it({ event: { error: me }, callbacks: b }));
              },
            });
          },
        })
          .catch((F) => {
            (D.rejectResultPromises(F),
              H.addStream(
                new ReadableStream({
                  start(U) {
                    (U.enqueue({ type: "error", error: F }), U.close());
                  },
                })
              ));
          })
          .finally(() => {
            H.close();
          }),
        (this.outputStrategy = i));
    }
    rejectResultPromises(e) {
      (this.rejectResultPromise({ delayedPromise: this._object, error: e }),
        this.rejectResultPromise({ delayedPromise: this._usage, error: e }),
        this.rejectResultPromise({ delayedPromise: this._providerMetadata, error: e }),
        this.rejectResultPromise({ delayedPromise: this._warnings, error: e }),
        this.rejectResultPromise({ delayedPromise: this._request, error: e }),
        this.rejectResultPromise({ delayedPromise: this._response, error: e }),
        this.rejectResultPromise({ delayedPromise: this._finishReason, error: e }));
    }
    rejectResultPromise({ delayedPromise: e, error: t }) {
      e.isPending() && (e.reject(t), gw(e.promise));
    }
    get object() {
      return this._object.promise;
    }
    get usage() {
      return this._usage.promise;
    }
    get providerMetadata() {
      return this._providerMetadata.promise;
    }
    get warnings() {
      return this._warnings.promise;
    }
    get request() {
      return this._request.promise;
    }
    get response() {
      return this._response.promise;
    }
    get finishReason() {
      return this._finishReason.promise;
    }
    get partialObjectStream() {
      return or(
        this.baseStream.pipeThrough(
          new TransformStream({
            transform(e, t) {
              switch (e.type) {
                case "object":
                  t.enqueue(e.object);
                  break;
                case "text-delta":
                case "finish":
                case "error":
                  break;
                default: {
                  let r = e;
                  throw new Error(`Unsupported chunk type: ${r}`);
                }
              }
            },
          })
        )
      );
    }
    get elementStream() {
      return this.outputStrategy.createElementStream(this.baseStream);
    }
    get textStream() {
      return or(
        this.baseStream.pipeThrough(
          new TransformStream({
            transform(e, t) {
              switch (e.type) {
                case "text-delta":
                  t.enqueue(e.textDelta);
                  break;
                case "object":
                case "finish":
                case "error":
                  break;
                default: {
                  let r = e;
                  throw new Error(`Unsupported chunk type: ${r}`);
                }
              }
            },
          })
        )
      );
    }
    get fullStream() {
      return or(this.baseStream);
    }
    pipeTextStreamToResponse(e, t) {
      return ti({ response: e, textStream: this.textStream, ...t });
    }
    toTextStreamResponse(e) {
      return ei({ textStream: this.textStream, ...e });
    }
  },
  bw = class extends Fr {
    constructor({ data: e, mediaType: t }) {
      super({ data: e, mediaType: t });
      let r = "mp3";
      if (t) {
        let a = t.split("/");
        a.length === 2 && t !== "audio/mpeg" && (r = a[1]);
      }
      if (!r) throw new Error("Audio format must be provided or determinable from media type");
      this.format = r;
    }
  };
async function ww({
  model: e,
  text: t,
  voice: r,
  outputFormat: a,
  instructions: n,
  speed: s,
  language: i,
  providerOptions: l = {},
  maxRetries: d,
  abortSignal: c,
  headers: u,
}) {
  var p;
  let m = Ay(e);
  if (!m) throw new Error("Model could not be resolved");
  let _ = Ne(u ?? {}, `ai/${ir}`),
    { retry: h } = Kt({ maxRetries: d, abortSignal: c }),
    b = await h(() =>
      m.doGenerate({
        text: t,
        voice: r,
        outputFormat: a,
        instructions: n,
        speed: s,
        language: i,
        abortSignal: c,
        headers: _,
        providerOptions: l,
      })
    );
  if (!b.audio || b.audio.length === 0) throw new Mc({ responses: [b.response] });
  return (
    Ot({ warnings: b.warnings, provider: m.provider, model: m.modelId }),
    new _w({
      audio: new bw({
        data: b.audio,
        mediaType: (p = Zt({ data: b.audio, signatures: vp })) != null ? p : "audio/mp3",
      }),
      warnings: b.warnings,
      responses: [b.response],
      providerMetadata: b.providerMetadata,
    })
  );
}
var _w = class {
  constructor(e) {
    var t;
    ((this.audio = e.audio),
      (this.warnings = e.warnings),
      (this.responses = e.responses),
      (this.providerMetadata = (t = e.providerMetadata) != null ? t : {}));
  }
};
function Tw({
  messages: e,
  reasoning: t = "none",
  toolCalls: r = [],
  emptyMessages: a = "remove",
}) {
  ((t === "all" || t === "before-last-message") &&
    (e = e.map((n, s) =>
      n.role !== "assistant" ||
      typeof n.content == "string" ||
      (t === "before-last-message" && s === e.length - 1)
        ? n
        : { ...n, content: n.content.filter((i) => i.type !== "reasoning") }
    )),
    r === "none"
      ? (r = [])
      : r === "all"
        ? (r = [{ type: "all" }])
        : r === "before-last-message"
          ? (r = [{ type: "before-last-message" }])
          : typeof r == "string" && (r = [{ type: r }]));
  for (let n of r) {
    let s =
        n.type === "all"
          ? void 0
          : n.type === "before-last-message"
            ? 1
            : Number(n.type.slice(12).slice(0, -9)),
      i = new Set(),
      l = new Set();
    if (s != null) {
      for (let p of e.slice(-s))
        if ((p.role === "assistant" || p.role === "tool") && typeof p.content != "string")
          for (let m of p.content)
            m.type === "tool-call" || m.type === "tool-result"
              ? i.add(m.toolCallId)
              : (m.type === "tool-approval-request" || m.type === "tool-approval-response") &&
                l.add(m.approvalId);
    }
    let d = new Map();
    for (let p of e)
      if ((p.role === "assistant" || p.role === "tool") && typeof p.content != "string")
        for (let m of p.content)
          (m.type === "tool-call" || m.type === "tool-result") && d.set(m.toolCallId, m.toolName);
    let c = new Map(),
      u = new Map();
    for (let p of e)
      if ((p.role === "assistant" || p.role === "tool") && typeof p.content != "string") {
        for (let m of p.content)
          if (m.type === "tool-approval-request") {
            c.set(m.approvalId, m.toolCallId);
            let _ = d.get(m.toolCallId);
            _ != null && u.set(m.approvalId, _);
          }
      }
    for (let p of l) {
      let m = c.get(p);
      m != null && i.add(m);
    }
    e = e.map((p, m) => {
      if (
        (p.role !== "assistant" && p.role !== "tool") ||
        typeof p.content == "string" ||
        (s && m >= e.length - s)
      )
        return p;
      let _ = p.content.map((h) => {
        if (
          (h.type !== "tool-call" &&
            h.type !== "tool-result" &&
            h.type !== "tool-approval-request" &&
            h.type !== "tool-approval-response") ||
          ((h.type === "tool-call" || h.type === "tool-result") && i.has(h.toolCallId)) ||
          ((h.type === "tool-approval-request" || h.type === "tool-approval-response") &&
            l.has(h.approvalId))
        )
          return !0;
        let b =
          h.type === "tool-call" || h.type === "tool-result" ? h.toolName : u.get(h.approvalId);
        return n.tools != null && b != null && !n.tools.includes(b);
      });
      if (p.role === "assistant")
        for (let h = 0; h < p.content.length; h++) {
          if (p.content[h].type !== "reasoning") continue;
          let y = h + 1;
          for (; y < p.content.length && p.content[y].type === "reasoning";) y++;
          let f = y,
            v = !1,
            T = !1;
          for (; f < p.content.length && p.content[f].type !== "reasoning";)
            ((v = !0), T || (T = _[f]), f++);
          if (v && !T) for (let I = h; I < y; I++) _[I] = !1;
          h = f - 1;
        }
      return { ...p, content: p.content.filter((h, b) => _[b]) };
    });
  }
  return (a === "remove" && (e = e.filter((n) => n.content.length > 0)), e);
}
var xw = { word: /\S+\s+/m, line: /\n+/m };
function Iw() {
  return typeof document < "u" && document.visibilityState === "hidden";
}
function Sw({ delayInMs: e = 10, chunking: t = "word", _internal: { delay: r = pn } = {} } = {}) {
  let a;
  if (t != null && typeof t == "object" && "segment" in t && typeof t.segment == "function") {
    let n = t;
    a = (s) => {
      if (s.length === 0) return null;
      let l = n.segment(s)[Symbol.iterator]().next().value;
      return l?.segment || null;
    };
  } else if (typeof t == "function")
    a = (n) => {
      let s = t(n);
      if (s == null) return null;
      if (!s.length) throw new Error("Chunking function must return a non-empty string.");
      if (!n.startsWith(s))
        throw new Error(
          `Chunking function must return a match that is a prefix of the buffer. Received: "${s}" expected to start with "${n}"`
        );
      return s;
    };
  else {
    let n = typeof t == "string" ? xw[t] : t instanceof RegExp ? t : void 0;
    if (n == null)
      throw new ua({
        argument: "chunking",
        message: `Chunking must be "word", "line", a RegExp, an Intl.Segmenter, or a ChunkDetector function. Received: ${t}`,
      });
    a = (s) => {
      let i = n.exec(s);
      return i ? s.slice(0, i.index) + i?.[0] : null;
    };
  }
  return () => {
    let n = "",
      s = "",
      i,
      l;
    function d(c) {
      i !== void 0 &&
        (n.length > 0 || l != null) &&
        (c.enqueue({ type: i, text: n, id: s, ...(l != null ? { providerMetadata: l } : {}) }),
        (n = ""),
        (l = void 0));
    }
    return new TransformStream({
      async transform(c, u) {
        if (c.type !== "text-delta" && c.type !== "reasoning-delta") {
          (d(u), u.enqueue(c));
          return;
        }
        if (c.text.length === 0 && c.providerMetadata != null) {
          (d(u), u.enqueue(c));
          return;
        }
        (n.length > 0 &&
          (c.type !== i || c.id !== s || l != null || c.providerMetadata != null) &&
          d(u),
          (n += c.text),
          (s = c.id),
          (i = c.type),
          (l = c.providerMetadata));
        let p;
        for (; (p = a(n)) != null;)
          (u.enqueue({ type: i, text: p, id: s, ...(l != null ? { providerMetadata: l } : {}) }),
            (n = n.slice(p.length)),
            await r(Iw() ? null : e));
        n.length === 0 && (l = void 0);
      },
    });
  };
}
var Ew = ci();
async function Mw({
  model: e,
  prompt: t,
  n: r = 1,
  maxVideosPerCall: a,
  aspectRatio: n,
  resolution: s,
  duration: i,
  fps: l,
  seed: d,
  frameImages: c,
  inputReferences: u,
  generateAudio: p,
  providerOptions: m,
  maxRetries: _,
  abortSignal: h,
  headers: b,
  download: y = Ew,
}) {
  var f, v;
  let T = Ny(e),
    I = Ne(b ?? {}, `ai/${ir}`),
    { retry: E } = Kt({ maxRetries: _, abortSignal: h }),
    { prompt: g, image: x } = kw(t),
    M = c?.flatMap((X) => {
      let z = Co(X.image);
      return z != null ? [{ image: z, frameType: X.frameType }] : [];
    }),
    J = u?.flatMap((X) => {
      let z = Rw(X);
      return z != null ? [z] : [];
    }),
    N = M != null && M.length > 0 ? void 0 : J,
    D = [];
  M != null &&
    M.length > 0 &&
    J != null &&
    J.length > 0 &&
    D.push({
      type: "other",
      message:
        "inputReferences were ignored because frameImages were provided; frameImages and inputReferences cannot be combined.",
    });
  let H = (f = M?.find((X) => X.frameType === "first_frame")) == null ? void 0 : f.image;
  x != null &&
    H != null &&
    D.push({
      type: "other",
      message:
        "prompt.image was ignored because a first_frame frameImage was provided; the first_frame frameImage takes precedence as the start image.",
    });
  let w = H ?? x,
    F = (v = a ?? (await Cw(T))) != null ? v : 1,
    U = Math.ceil(r / F),
    k = Array.from({ length: U }, (X, z) => {
      let ee = r - z * F;
      return Math.min(ee, F);
    }),
    R = await Promise.all(
      k.map(
        async (X) =>
          await E(() =>
            T.doGenerate({
              prompt: g,
              n: X,
              aspectRatio: n,
              resolution: s,
              duration: i,
              fps: l,
              seed: d,
              image: w,
              frameImages: M,
              inputReferences: N,
              generateAudio: p,
              providerOptions: m ?? {},
              headers: I,
              abortSignal: h,
            })
          )
      )
    ),
    q = [],
    se = [],
    de = {};
  for (let X of R) {
    for (let z of X.videos)
      switch (z.type) {
        case "url": {
          let { data: ee, mediaType: ie } = await y({ url: new URL(z.url), abortSignal: h }),
            $ = (Ce) => !!Ce && Ce !== "application/octet-stream",
            W =
              ($(z.mediaType) && z.mediaType) ||
              ($(ie) && ie) ||
              Zt({ data: ee, signatures: Ds }) ||
              "video/mp4";
          q.push(new Fr({ data: ee, mediaType: W }));
          break;
        }
        case "base64": {
          q.push(new Fr({ data: z.data, mediaType: z.mediaType || "video/mp4" }));
          break;
        }
        case "binary": {
          let ee = z.mediaType || Zt({ data: z.data, signatures: Ds }) || "video/mp4";
          q.push(new Fr({ data: z.data, mediaType: ee }));
          break;
        }
      }
    if (
      (D.push(...X.warnings),
      se.push({
        timestamp: X.response.timestamp,
        modelId: X.response.modelId,
        headers: X.response.headers,
        providerMetadata: X.providerMetadata,
      }),
      X.providerMetadata != null)
    )
      for (let [z, ee] of Object.entries(X.providerMetadata)) {
        let ie = On(de, z);
        ie != null && typeof ie == "object"
          ? (Ro(de, z, { ...ie, ...ee }),
            "videos" in ie &&
              Array.isArray(ie.videos) &&
              "videos" in ee &&
              Array.isArray(ee.videos) &&
              (de[z].videos = [...ie.videos, ...ee.videos]))
          : Ro(de, z, ee);
      }
  }
  if (q.length === 0) throw new Pc({ responses: se });
  return (
    D.length > 0 && Ot({ warnings: D, provider: T.provider, model: T.modelId }),
    { video: q[0], videos: q, warnings: D, responses: se, providerMetadata: de }
  );
}
function kw(e) {
  return typeof e == "string"
    ? { prompt: e, image: void 0 }
    : { prompt: e.text, image: e.image != null ? Co(e.image) : void 0 };
}
function As(e, t) {
  var r;
  let a = t
    ? Zt({ data: e, signatures: Na })
    : (r = Zt({ data: e, signatures: Na })) != null
      ? r
      : Zt({ data: e, signatures: Ds });
  return a ?? "image/png";
}
function Co(e, { restrictToImages: t = !0 } = {}) {
  if (typeof e == "string") {
    if (e.startsWith("http://") || e.startsWith("https://")) return { type: "url", url: e };
    if (e.startsWith("data:")) {
      let { mediaType: a, base64Content: n } = Zs(e),
        s = Ct(n ?? "");
      return { type: "file", mediaType: a ?? As(s, t), data: s };
    }
    let r = Ct(e);
    return { type: "file", mediaType: As(r, t), data: r };
  }
  if (e instanceof Uint8Array || e instanceof ArrayBuffer) {
    let r = e instanceof Uint8Array ? e : new Uint8Array(e);
    return { type: "file", mediaType: As(r, t), data: r };
  }
}
function Rw(e) {
  if (!(
    typeof e == "object" &&
    e != null &&
    !(e instanceof Uint8Array) &&
    !(e instanceof ArrayBuffer) &&
    "data" in e
  ))
    return Co(e, { restrictToImages: !1 });
  let r = Co(e.data, { restrictToImages: !1 });
  return r == null ? r : { ...r, ...(e.mediaType != null ? { mediaType: e.mediaType } : {}) };
}
async function Cw(e) {
  return typeof e.maxVideosPerCall == "function"
    ? await e.maxVideosPerCall({ modelId: e.modelId })
    : e.maxVideosPerCall;
}
function Aw({ settings: e }) {
  return { specificationVersion: "v3", transformParams: async ({ params: t }) => Qr(e, t) };
}
function Ow({ settings: e }) {
  return { specificationVersion: "v3", transformParams: async ({ params: t }) => Qr(e, t) };
}
function Nw(e) {
  return e
    .replace(/^```(?:json)?\s*\n?/, "")
    .replace(/\n?```\s*$/, "")
    .trim();
}
function Bd(e) {
  return e.replace(/\n?```\s*$/, "").trimEnd();
}
function Pw(e) {
  var t;
  let r = (t = e?.transform) != null ? t : Nw,
    a = e?.transform !== void 0;
  return {
    specificationVersion: "v3",
    wrapGenerate: async ({ doGenerate: n }) => {
      let { content: s, ...i } = await n(),
        l = [];
      for (let d of s) {
        if (d.type !== "text") {
          l.push(d);
          continue;
        }
        l.push({ ...d, text: r(d.text) });
      }
      return { content: l, ...i };
    },
    wrapStream: async ({ doStream: n }) => {
      let { stream: s, ...i } = await n(),
        l = Wt(),
        d = 12;
      return {
        stream: s.pipeThrough(
          new TransformStream({
            transform: (c, u) => {
              if (c.type === "text-start") {
                l[c.id] = {
                  startEvent: c,
                  phase: a ? "buffering" : "prefix",
                  buffer: "",
                  prefixStripped: !1,
                };
                return;
              }
              if (c.type === "text-delta") {
                let p = l[c.id];
                if (!p) {
                  u.enqueue(c);
                  return;
                }
                if (((p.buffer += c.delta), p.phase === "buffering")) return;
                if (p.phase === "prefix")
                  if (p.buffer.length > 0 && !p.buffer.startsWith("`"))
                    ((p.phase = "streaming"), u.enqueue(p.startEvent));
                  else if (p.buffer.startsWith("```")) {
                    if (
                      p.buffer.includes(`
`)
                    ) {
                      let m = p.buffer.match(/^```(?:json)?\s*\n/);
                      m
                        ? ((p.buffer = p.buffer.slice(m[0].length)),
                          (p.prefixStripped = !0),
                          (p.phase = "streaming"),
                          u.enqueue(p.startEvent))
                        : ((p.phase = "streaming"), u.enqueue(p.startEvent));
                    }
                  } else
                    p.buffer.length >= 3 &&
                      !p.buffer.startsWith("```") &&
                      ((p.phase = "streaming"), u.enqueue(p.startEvent));
                if (p.phase === "streaming" && p.buffer.length > d) {
                  let m = p.buffer.slice(0, -d);
                  ((p.buffer = p.buffer.slice(-d)),
                    u.enqueue({ type: "text-delta", id: c.id, delta: m }));
                }
                return;
              }
              if (c.type === "text-end") {
                let p = l[c.id];
                if (p) {
                  (p.phase === "prefix" || p.phase === "buffering") && u.enqueue(p.startEvent);
                  let m = p.buffer;
                  (p.phase === "buffering"
                    ? (m = r(m))
                    : p.prefixStripped
                      ? (m = Bd(m))
                      : p.phase === "prefix"
                        ? (m = r(m))
                        : (m = Bd(m)),
                    m.length > 0 && u.enqueue({ type: "text-delta", id: c.id, delta: m }),
                    u.enqueue(c),
                    delete l[c.id]);
                  return;
                }
              }
              u.enqueue(c);
            },
          })
        ),
        ...i,
      };
    },
  };
}
function jw(e, t) {
  if (t.length === 0) return null;
  let r = e.indexOf(t);
  if (r !== -1) return r;
  for (let a = e.length - 1; a >= 0; a--) {
    let n = e.substring(a);
    if (t.startsWith(n)) return a;
  }
  return null;
}
function Dw({
  tagName: e,
  separator: t = `
`,
  startWithReasoning: r = !1,
}) {
  let a = `<${e}>`,
    n = `</${e}>`;
  return {
    specificationVersion: "v3",
    wrapGenerate: async ({ doGenerate: s }) => {
      let { content: i, ...l } = await s(),
        d = [];
      for (let c of i) {
        if (c.type !== "text") {
          d.push(c);
          continue;
        }
        let u = r ? a + c.text : c.text,
          p = new RegExp(`${a}(.*?)${n}`, "gs"),
          m = Array.from(u.matchAll(p));
        if (!m.length) {
          d.push(c);
          continue;
        }
        let _ = m.map((b) => b[1]).join(t),
          h = u;
        for (let b = m.length - 1; b >= 0; b--) {
          let y = m[b],
            f = h.slice(0, y.index),
            v = h.slice(y.index + y[0].length);
          h = f + (f.length > 0 && v.length > 0 ? t : "") + v;
        }
        (d.push({ type: "reasoning", text: _ }), d.push({ type: "text", text: h }));
      }
      return { content: d, ...l };
    },
    wrapStream: async ({ doStream: s }) => {
      let { stream: i, ...l } = await s(),
        d = Wt(),
        c;
      return {
        stream: i.pipeThrough(
          new TransformStream({
            transform: (u, p) => {
              if (u.type === "text-start") {
                c = u;
                return;
              }
              if (
                (u.type === "text-end" && c && (p.enqueue(c), (c = void 0)),
                u.type !== "text-delta")
              ) {
                p.enqueue(u);
                return;
              }
              d[u.id] == null &&
                (d[u.id] = {
                  isFirstReasoning: !0,
                  isFirstText: !0,
                  afterSwitch: !1,
                  isReasoning: r,
                  buffer: "",
                  idCounter: 0,
                  textId: u.id,
                });
              let m = d[u.id];
              m.buffer += u.delta;
              function _(h) {
                if (h.length > 0) {
                  let b =
                    m.afterSwitch && (m.isReasoning ? !m.isFirstReasoning : !m.isFirstText)
                      ? t
                      : "";
                  (m.isReasoning &&
                    (m.afterSwitch || m.isFirstReasoning) &&
                    p.enqueue({ type: "reasoning-start", id: `reasoning-${m.idCounter}` }),
                    m.isReasoning
                      ? p.enqueue({
                          type: "reasoning-delta",
                          delta: b + h,
                          id: `reasoning-${m.idCounter}`,
                        })
                      : (c && (p.enqueue(c), (c = void 0)),
                        p.enqueue({ type: "text-delta", delta: b + h, id: m.textId })),
                    (m.afterSwitch = !1),
                    m.isReasoning ? (m.isFirstReasoning = !1) : (m.isFirstText = !1));
                }
              }
              do {
                let h = m.isReasoning ? n : a,
                  b = jw(m.buffer, h);
                if (b == null) {
                  (_(m.buffer), (m.buffer = ""));
                  break;
                }
                if ((_(m.buffer.slice(0, b)), b + h.length <= m.buffer.length))
                  ((m.buffer = m.buffer.slice(b + h.length)),
                    m.isReasoning &&
                      (m.isFirstReasoning &&
                        p.enqueue({ type: "reasoning-start", id: `reasoning-${m.idCounter}` }),
                      p.enqueue({ type: "reasoning-end", id: `reasoning-${m.idCounter++}` })),
                    (m.isReasoning = !m.isReasoning),
                    (m.afterSwitch = !0));
                else {
                  m.buffer = m.buffer.slice(b);
                  break;
                }
              } while (!0);
            },
          })
        ),
        ...l,
      };
    },
  };
}
function qw() {
  return {
    specificationVersion: "v3",
    wrapStream: async ({ doGenerate: e }) => {
      let t = await e(),
        r = 0;
      return {
        stream: new ReadableStream({
          start(n) {
            (n.enqueue({ type: "stream-start", warnings: t.warnings }),
              n.enqueue({ type: "response-metadata", ...t.response }));
            for (let s of t.content)
              switch (s.type) {
                case "text": {
                  s.text.length > 0 &&
                    (n.enqueue({
                      type: "text-start",
                      id: String(r),
                      ...(s.providerMetadata != null
                        ? { providerMetadata: s.providerMetadata }
                        : {}),
                    }),
                    n.enqueue({ type: "text-delta", id: String(r), delta: s.text }),
                    n.enqueue({ type: "text-end", id: String(r) }),
                    r++);
                  break;
                }
                case "reasoning": {
                  (n.enqueue({
                    type: "reasoning-start",
                    id: String(r),
                    providerMetadata: s.providerMetadata,
                  }),
                    n.enqueue({ type: "reasoning-delta", id: String(r), delta: s.text }),
                    n.enqueue({ type: "reasoning-end", id: String(r) }),
                    r++);
                  break;
                }
                default: {
                  n.enqueue(s);
                  break;
                }
              }
            (n.enqueue({
              type: "finish",
              finishReason: t.finishReason,
              usage: t.usage,
              providerMetadata: t.providerMetadata,
            }),
              n.close());
          },
        }),
        request: t.request,
        response: t.response,
      };
    },
  };
}
function $w(e) {
  return JSON.stringify(e.input);
}
function Fw({ prefix: e = "Input Examples:", format: t = $w, remove: r = !0 } = {}) {
  return {
    specificationVersion: "v3",
    transformParams: async ({ params: a }) => {
      var n;
      if (!((n = a.tools) != null && n.length)) return a;
      let s = a.tools.map((i) => {
        var l;
        if (i.type !== "function" || !((l = i.inputExamples) != null && l.length)) return i;
        let d = i.inputExamples.map((p, m) => t(p, m)).join(`
`),
          c = `${e}
${d}`,
          u = i.description
            ? `${i.description}

${c}`
            : c;
        return { ...i, description: u, inputExamples: r ? void 0 : i.inputExamples };
      });
      return { ...a, tools: s };
    },
  };
}
var pi = ({ model: e, middleware: t, modelId: r, providerId: a }) =>
    [...sr(t)]
      .reverse()
      .reduce((n, s) => Uw({ model: n, middleware: s, modelId: r, providerId: a }), e),
  Uw = ({
    model: e,
    middleware: {
      transformParams: t,
      wrapGenerate: r,
      wrapStream: a,
      overrideProvider: n,
      overrideModelId: s,
      overrideSupportedUrls: i,
    },
    modelId: l,
    providerId: d,
  }) => {
    var c, u, p;
    async function m({ params: _, type: h }) {
      return t ? await t({ params: _, type: h, model: e }) : _;
    }
    return {
      specificationVersion: "v3",
      provider: (c = d ?? n?.({ model: e })) != null ? c : e.provider,
      modelId: (u = l ?? s?.({ model: e })) != null ? u : e.modelId,
      supportedUrls: (p = i?.({ model: e })) != null ? p : e.supportedUrls,
      async doGenerate(_) {
        let h = await m({ params: _, type: "generate" }),
          b = async () => e.doGenerate(h);
        return r
          ? r({ doGenerate: b, doStream: async () => e.doStream(h), params: h, model: e })
          : b();
      },
      async doStream(_) {
        let h = await m({ params: _, type: "stream" }),
          b = async () => e.doGenerate(h),
          y = async () => e.doStream(h);
        return a ? a({ doGenerate: b, doStream: y, params: h, model: e }) : y();
      },
    };
  },
  Vw = ({ model: e, middleware: t, modelId: r, providerId: a }) =>
    [...sr(t)]
      .reverse()
      .reduce((n, s) => Lw({ model: n, middleware: s, modelId: r, providerId: a }), e),
  Lw = ({
    model: e,
    middleware: {
      transformParams: t,
      wrapEmbed: r,
      overrideProvider: a,
      overrideModelId: n,
      overrideMaxEmbeddingsPerCall: s,
      overrideSupportsParallelCalls: i,
    },
    modelId: l,
    providerId: d,
  }) => {
    var c, u, p, m;
    async function _({ params: h }) {
      return t ? await t({ params: h, model: e }) : h;
    }
    return {
      specificationVersion: "v3",
      provider: (c = d ?? a?.({ model: e })) != null ? c : e.provider,
      modelId: (u = l ?? n?.({ model: e })) != null ? u : e.modelId,
      maxEmbeddingsPerCall: (p = s?.({ model: e })) != null ? p : e.maxEmbeddingsPerCall,
      [ro]: um(e),
      [ao]: dm(e),
      supportsParallelCalls: (m = i?.({ model: e })) != null ? m : e.supportsParallelCalls,
      async doEmbed(h) {
        let b = await _({ params: h }),
          y = async () => e.doEmbed(b);
        return r ? r({ doEmbed: y, params: b, model: e }) : y();
      },
    };
  },
  mi = ({ model: e, middleware: t, modelId: r, providerId: a }) =>
    [...sr(t)]
      .reverse()
      .reduce((n, s) => zw({ model: n, middleware: s, modelId: r, providerId: a }), e),
  zw = ({
    model: e,
    middleware: {
      transformParams: t,
      wrapGenerate: r,
      overrideProvider: a,
      overrideModelId: n,
      overrideMaxImagesPerCall: s,
    },
    modelId: i,
    providerId: l,
  }) => {
    var d, c, u;
    async function p({ params: h }) {
      return t ? await t({ params: h, model: e }) : h;
    }
    let m = (d = s?.({ model: e })) != null ? d : e.maxImagesPerCall,
      _ = m instanceof Function ? m.bind(e) : m;
    return {
      specificationVersion: "v3",
      provider: (c = l ?? a?.({ model: e })) != null ? c : e.provider,
      modelId: (u = i ?? n?.({ model: e })) != null ? u : e.modelId,
      maxImagesPerCall: _,
      async doGenerate(h) {
        let b = await p({ params: h }),
          y = async () => e.doGenerate(b);
        return r ? r({ doGenerate: y, params: b, model: e }) : y();
      },
    };
  };
function gm(e) {
  if ("specificationVersion" in e && e.specificationVersion === "v3") return e;
  let t = e;
  return {
    specificationVersion: "v3",
    languageModel: (r) => dp(t.languageModel(r)),
    embeddingModel: (r) => lp(t.textEmbeddingModel(r)),
    imageModel: (r) => up(t.imageModel(r)),
    transcriptionModel: t.transcriptionModel ? (r) => fp(t.transcriptionModel(r)) : void 0,
    speechModel: t.speechModel ? (r) => mp(t.speechModel(r)) : void 0,
    rerankingModel: void 0,
  };
}
function Bw({ provider: e, languageModelMiddleware: t, imageModelMiddleware: r }) {
  let a = gm(e);
  return {
    specificationVersion: "v3",
    languageModel: (n) => pi({ model: a.languageModel(n), middleware: t }),
    embeddingModel: a.embeddingModel,
    imageModel: (n) => {
      let s = a.imageModel(n);
      return (r != null && (s = mi({ model: s, middleware: r })), s);
    },
    transcriptionModel: a.transcriptionModel,
    speechModel: a.speechModel,
    rerankingModel: a.rerankingModel,
  };
}
function vm({
  languageModels: e,
  embeddingModels: t,
  imageModels: r,
  transcriptionModels: a,
  speechModels: n,
  rerankingModels: s,
  videoModels: i,
  fallbackProvider: l,
}) {
  let d = l ? gm(l) : void 0;
  return {
    specificationVersion: "v3",
    languageModel(c) {
      if (e != null && c in e) return e[c];
      if (d) return d.languageModel(c);
      throw new Je({ modelId: c, modelType: "languageModel" });
    },
    embeddingModel(c) {
      if (t != null && c in t) return t[c];
      if (d) return d.embeddingModel(c);
      throw new Je({ modelId: c, modelType: "embeddingModel" });
    },
    imageModel(c) {
      if (r != null && c in r) return r[c];
      if (d?.imageModel) return d.imageModel(c);
      throw new Je({ modelId: c, modelType: "imageModel" });
    },
    transcriptionModel(c) {
      if (a != null && c in a) return a[c];
      if (d?.transcriptionModel) return d.transcriptionModel(c);
      throw new Je({ modelId: c, modelType: "transcriptionModel" });
    },
    speechModel(c) {
      if (n != null && c in n) return n[c];
      if (d?.speechModel) return d.speechModel(c);
      throw new Je({ modelId: c, modelType: "speechModel" });
    },
    rerankingModel(c) {
      if (s != null && c in s) return s[c];
      if (d?.rerankingModel) return d.rerankingModel(c);
      throw new Je({ modelId: c, modelType: "rerankingModel" });
    },
    videoModel(c) {
      if (i != null && c in i) return i[c];
      let u = d?.videoModel;
      if (u) return u(c);
      throw new Je({ modelId: c, modelType: "videoModel" });
    },
  };
}
var Jw = vm,
  ym = "AI_NoSuchProviderError",
  bm = `vercel.ai.error.${ym}`,
  Gw = Symbol.for(bm),
  wm,
  _m = class extends Je {
    constructor({
      modelId: e,
      modelType: t,
      providerId: r,
      availableProviders: a,
      message: n = `No such provider: ${r} (available providers: ${a.join()})`,
    }) {
      (super({ errorName: ym, modelId: e, modelType: t, message: n }),
        (this[wm] = !0),
        (this.providerId = r),
        (this.availableProviders = a));
    }
    static isInstance(e) {
      return S.hasMarker(e, bm);
    }
  };
wm = Gw;
function Tm(e, { separator: t = ":", languageModelMiddleware: r, imageModelMiddleware: a } = {}) {
  let n = new Ww({ separator: t, languageModelMiddleware: r, imageModelMiddleware: a });
  for (let [s, i] of Object.entries(e)) n.registerProvider({ id: s, provider: i });
  return n;
}
var Hw = Tm,
  Ww = class {
    constructor({ separator: e, languageModelMiddleware: t, imageModelMiddleware: r }) {
      ((this.providers = Object.create(null)),
        (this.separator = e),
        (this.languageModelMiddleware = t),
        (this.imageModelMiddleware = r));
    }
    registerProvider({ id: e, provider: t }) {
      this.providers[e] = t;
    }
    getProvider(e, t) {
      let r = this.providers[e];
      if (r == null)
        throw new _m({
          modelId: e,
          modelType: t,
          providerId: e,
          availableProviders: Object.keys(this.providers),
        });
      return r;
    }
    splitId(e, t) {
      let r = e.indexOf(this.separator);
      if (r === -1)
        throw new Je({
          modelId: e,
          modelType: t,
          message: `Invalid ${t} id for registry: ${e} (must be in the format "providerId${this.separator}modelId")`,
        });
      return [e.slice(0, r), e.slice(r + this.separator.length)];
    }
    languageModel(e) {
      var t, r;
      let [a, n] = this.splitId(e, "languageModel"),
        s =
          (r = (t = this.getProvider(a, "languageModel")).languageModel) == null
            ? void 0
            : r.call(t, n);
      if (s == null) throw new Je({ modelId: e, modelType: "languageModel" });
      return (
        this.languageModelMiddleware != null &&
          (s = pi({ model: s, middleware: this.languageModelMiddleware })),
        s
      );
    }
    embeddingModel(e) {
      var t;
      let [r, a] = this.splitId(e, "embeddingModel"),
        n = this.getProvider(r, "embeddingModel"),
        s = (t = n.embeddingModel) == null ? void 0 : t.call(n, a);
      if (s == null) throw new Je({ modelId: e, modelType: "embeddingModel" });
      return s;
    }
    imageModel(e) {
      var t;
      let [r, a] = this.splitId(e, "imageModel"),
        n = this.getProvider(r, "imageModel"),
        s = (t = n.imageModel) == null ? void 0 : t.call(n, a);
      if (s == null) throw new Je({ modelId: e, modelType: "imageModel" });
      return (
        this.imageModelMiddleware != null &&
          (s = mi({ model: s, middleware: this.imageModelMiddleware })),
        s
      );
    }
    transcriptionModel(e) {
      var t;
      let [r, a] = this.splitId(e, "transcriptionModel"),
        n = this.getProvider(r, "transcriptionModel"),
        s = (t = n.transcriptionModel) == null ? void 0 : t.call(n, a);
      if (s == null) throw new Je({ modelId: e, modelType: "transcriptionModel" });
      return s;
    }
    speechModel(e) {
      var t;
      let [r, a] = this.splitId(e, "speechModel"),
        n = this.getProvider(r, "speechModel"),
        s = (t = n.speechModel) == null ? void 0 : t.call(n, a);
      if (s == null) throw new Je({ modelId: e, modelType: "speechModel" });
      return s;
    }
    rerankingModel(e) {
      var t;
      let [r, a] = this.splitId(e, "rerankingModel"),
        n = this.getProvider(r, "rerankingModel"),
        s = (t = n.rerankingModel) == null ? void 0 : t.call(n, a);
      if (s == null) throw new Je({ modelId: e, modelType: "rerankingModel" });
      return s;
    }
  };
async function Zw({
  model: e,
  documents: t,
  query: r,
  topN: a,
  maxRetries: n,
  abortSignal: s,
  headers: i,
  providerOptions: l,
  experimental_telemetry: d,
}) {
  let c = Py(e);
  if (t.length === 0)
    return new Jd({
      originalDocuments: [],
      ranking: [],
      providerMetadata: void 0,
      response: { timestamp: new Date(), modelId: c.modelId },
    });
  let { maxRetries: u, retry: p } = Kt({ maxRetries: n, abortSignal: s }),
    m = typeof t[0] == "string" ? { type: "text", values: t } : { type: "object", values: t },
    _ = ea({ model: c, telemetry: d, headers: i, settings: { maxRetries: u } }),
    h = ta(d);
  return ut({
    name: "ai.rerank",
    attributes: he({
      telemetry: d,
      attributes: {
        ...lt({ operationId: "ai.rerank", telemetry: d }),
        ..._,
        "ai.documents": { input: () => t.map((b) => JSON.stringify(b)) },
      },
    }),
    tracer: h,
    fn: async () => {
      var b, y;
      let {
        ranking: f,
        response: v,
        providerMetadata: T,
        warnings: I,
      } = await p(() =>
        ut({
          name: "ai.rerank.doRerank",
          attributes: he({
            telemetry: d,
            attributes: {
              ...lt({ operationId: "ai.rerank.doRerank", telemetry: d }),
              ..._,
              "ai.documents": { input: () => t.map((E) => JSON.stringify(E)) },
            },
          }),
          tracer: h,
          fn: async (E) => {
            let g = await c.doRerank({
                documents: m,
                query: r,
                topN: a,
                providerOptions: l,
                abortSignal: s,
                headers: i,
              }),
              x = g.ranking;
            return (
              E.setAttributes(
                await he({
                  telemetry: d,
                  attributes: {
                    "ai.ranking.type": m.type,
                    "ai.ranking": { output: () => x.map((M) => JSON.stringify(M)) },
                  },
                })
              ),
              {
                ranking: x,
                providerMetadata: g.providerMetadata,
                response: g.response,
                warnings: g.warnings,
              }
            );
          },
        })
      );
      return (
        Kw({ ranking: f, documents: t }),
        Ot({ warnings: I ?? [], provider: c.provider, model: c.modelId }),
        new Jd({
          originalDocuments: t,
          ranking: f.map((E) => ({
            originalIndex: E.index,
            score: E.relevanceScore,
            document: t[E.index],
          })),
          providerMetadata: T,
          response: {
            id: v?.id,
            timestamp: (b = v?.timestamp) != null ? b : new Date(),
            modelId: (y = v?.modelId) != null ? y : c.modelId,
            headers: v?.headers,
            body: v?.body,
          },
        })
      );
    },
  });
}
function Kw({ ranking: e, documents: t }) {
  for (let { index: r } of e)
    if (!Number.isInteger(r) || r < 0 || r >= t.length)
      throw new mr({
        data: e,
        message: `Invalid ranking index ${r}. Expected an integer between 0 and ${t.length - 1}.`,
      });
}
var Jd = class {
    constructor(e) {
      ((this.originalDocuments = e.originalDocuments),
        (this.ranking = e.ranking),
        (this.response = e.response),
        (this.providerMetadata = e.providerMetadata));
    }
    get rerankedDocuments() {
      return this.ranking.map((e) => e.document);
    }
  },
  Yw = ci();
async function Xw({
  model: e,
  audio: t,
  providerOptions: r = {},
  maxRetries: a,
  abortSignal: n,
  headers: s,
  download: i = Yw,
}) {
  let l = Cy(e);
  if (!l) throw new Error("Model could not be resolved");
  let { retry: d } = Kt({ maxRetries: a, abortSignal: n }),
    c = Ne(s ?? {}, `ai/${ir}`),
    u = t instanceof URL ? (await i({ url: t, abortSignal: n })).data : Rn(t),
    p = await d(() => {
      var m;
      return l.doGenerate({
        audio: u,
        abortSignal: n,
        headers: c,
        providerOptions: r,
        mediaType: (m = Zt({ data: u, signatures: vp })) != null ? m : "audio/wav",
      });
    });
  if ((Ot({ warnings: p.warnings, provider: l.provider, model: l.modelId }), !p.text))
    throw new Ac({ responses: [p.response] });
  return new Qw({
    text: p.text,
    segments: p.segments,
    language: p.language,
    durationInSeconds: p.durationInSeconds,
    warnings: p.warnings,
    responses: [p.response],
    providerMetadata: p.providerMetadata,
  });
}
var Qw = class {
  constructor(e) {
    var t;
    ((this.text = e.text),
      (this.segments = e.segments),
      (this.language = e.language),
      (this.durationInSeconds = e.durationInSeconds),
      (this.warnings = e.warnings),
      (this.responses = e.responses),
      (this.providerMetadata = (t = e.providerMetadata) != null ? t : {}));
  }
};
async function e_({ stream: e, onTextPart: t }) {
  let r = e.pipeThrough(new TextDecoderStream()).getReader();
  for (;;) {
    let { done: a, value: n } = await r.read();
    if (a) break;
    await t(n);
  }
}
var t_ = () => fetch;
async function r_({
  api: e,
  prompt: t,
  credentials: r,
  headers: a,
  body: n,
  streamProtocol: s = "data",
  setCompletion: i,
  setLoading: l,
  setError: d,
  setAbortController: c,
  onFinish: u,
  onError: p,
  fetch: m = t_(),
}) {
  var _;
  try {
    (l(!0), d(void 0));
    let h = new AbortController();
    (c(h), i(""));
    let b = await m(e, {
      method: "POST",
      body: JSON.stringify({ prompt: t, ...n }),
      credentials: r,
      headers: Ne({ "Content-Type": "application/json", ...a }, `ai-sdk/${ir}`, Ia()),
      signal: h.signal,
    }).catch((f) => {
      throw f;
    });
    if (!b.ok)
      throw new Error((_ = await b.text()) != null ? _ : "Failed to fetch the chat response.");
    if (!b.body) throw new Error("The response body is empty.");
    let y = "";
    switch (s) {
      case "text": {
        await e_({
          stream: b.body,
          onTextPart: (f) => {
            ((y += f), i(y));
          },
        });
        break;
      }
      case "data": {
        await An({
          stream: wr({ stream: b.body, schema: oi }).pipeThrough(
            new TransformStream({
              async transform(f) {
                if (!f.success) throw f.error;
                let v = f.value;
                if (v.type === "text-delta") ((y += v.delta), i(y));
                else if (v.type === "error") throw new Error(v.errorText);
              },
            })
          ),
          onError: (f) => {
            throw f;
          },
        });
        break;
      }
      default: {
        let f = s;
        throw new Error(`Unknown stream protocol: ${f}`);
      }
    }
    return (u && u(t, y), c(null), y);
  } catch (h) {
    if (h.name === "AbortError") return (c(null), null);
    (h instanceof Error && p && p(h), d(h));
  } finally {
    l(!1);
  }
}
async function xm(e) {
  if (e == null) return [];
  if (!globalThis.FileList || !(e instanceof globalThis.FileList))
    throw new Error("FileList is not supported in the current environment");
  return Promise.all(
    Array.from(e).map(async (t) => {
      let { name: r, type: a } = t,
        n = await new Promise((s, i) => {
          let l = new FileReader();
          ((l.onload = (d) => {
            var c;
            s((c = d.target) == null ? void 0 : c.result);
          }),
            (l.onerror = (d) => i(d)),
            l.readAsDataURL(t));
        });
      return { type: "file", mediaType: a, filename: r, url: n };
    })
  );
}
function a_(e, t) {
  let r = e.search(/[?#]/),
    a = r === -1 ? e : e.slice(0, r),
    n = r === -1 ? "" : e.slice(r);
  return `${a.endsWith("/") && t.startsWith("/") ? a.slice(0, -1) : a}${t}${n}`;
}
var fi = class {
    constructor({
      api: e = "/api/chat",
      credentials: t,
      headers: r,
      body: a,
      fetch: n,
      prepareSendMessagesRequest: s,
      prepareReconnectToStreamRequest: i,
    }) {
      ((this.api = e),
        (this.credentials = t),
        (this.headers = r),
        (this.body = a),
        (this.fetch = n),
        (this.prepareSendMessagesRequest = s),
        (this.prepareReconnectToStreamRequest = i));
    }
    async sendMessages({ abortSignal: e, ...t }) {
      var r, a, n, s, i;
      let l = await ae(this.body),
        d = await ae(this.headers),
        c = await ae(this.credentials),
        u = { ...jr(d), ...jr(t.headers) },
        p = await ((r = this.prepareSendMessagesRequest) == null
          ? void 0
          : r.call(this, {
              api: this.api,
              id: t.chatId,
              messages: t.messages,
              body: { ...l, ...t.body },
              headers: u,
              credentials: c,
              requestMetadata: t.metadata,
              trigger: t.trigger,
              messageId: t.messageId,
            })),
        m = (a = p?.api) != null ? a : this.api,
        _ = p?.headers !== void 0 ? jr(p.headers) : u,
        h =
          p?.body !== void 0
            ? p.body
            : {
                ...l,
                ...t.body,
                id: t.chatId,
                messages: t.messages,
                trigger: t.trigger,
                messageId: t.messageId,
              },
        b = (n = p?.credentials) != null ? n : c,
        f = await ((s = this.fetch) != null ? s : globalThis.fetch)(m, {
          method: "POST",
          headers: { "content-type": "application/json", ..._ },
          body: JSON.stringify(h),
          credentials: b,
          signal: e,
        });
      if (!f.ok)
        throw new Error((i = await f.text()) != null ? i : "Failed to fetch the chat response.");
      if (!f.body) throw new Error("The response body is empty.");
      return this.processResponseStream(f.body);
    }
    async reconnectToStream(e) {
      var t, r, a, n;
      let s = await ae(this.body),
        i = await ae(this.headers),
        l = await ae(this.credentials),
        d = { ...jr(i), ...jr(e.headers) },
        c = await ((t = this.prepareReconnectToStreamRequest) == null
          ? void 0
          : t.call(this, {
              api: this.api,
              id: e.chatId,
              body: { ...s, ...e.body },
              headers: d,
              credentials: l,
              requestMetadata: e.metadata,
            })),
        u = c?.api;
      if (u == null) {
        if (e.chatId === "." || e.chatId === "..")
          throw new Se({
            parameter: "chatId",
            value: e.chatId,
            message: 'Chat IDs must not be "." or ".." when using the default reconnect URL.',
          });
        u = a_(this.api, `/${encodeURIComponent(e.chatId)}/stream`);
      }
      let p = c?.headers !== void 0 ? jr(c.headers) : d,
        m = (r = c?.credentials) != null ? r : l,
        h = await ((a = this.fetch) != null ? a : globalThis.fetch)(u, {
          method: "GET",
          headers: p,
          credentials: m,
          signal: e.abortSignal,
        });
      if (h.status === 204) return null;
      if (!h.ok)
        throw new Error((n = await h.text()) != null ? n : "Failed to fetch the chat response.");
      if (!h.body) throw new Error("The response body is empty.");
      return this.processResponseStream(h.body);
    }
  },
  Im = class extends fi {
    constructor({ resumeStreamIsReplay: e = !0, ...t } = {}) {
      (super(t), (this.resumeStreamIsReplay = e));
    }
    processResponseStream(e) {
      return wr({ stream: e, schema: oi }).pipeThrough(
        new TransformStream({
          async transform(t, r) {
            if (!t.success) throw t.error;
            r.enqueue(t.value);
          },
        })
      );
    }
  },
  n_ = class {
    constructor({
      generateId: e = Wr,
      id: t = e(),
      transport: r = new Im(),
      messageMetadataSchema: a,
      dataPartSchemas: n,
      state: s,
      onError: i,
      onToolCall: l,
      onFinish: d,
      onData: c,
      sendAutomaticallyWhen: u,
    }) {
      ((this.activeResponse = void 0),
        (this.activeResumeRequest = void 0),
        (this.resumableStreamState = void 0),
        (this.jobExecutor = new hm()),
        (this.activeStopCount = 0),
        (this.stopGeneration = 0),
        (this.sendMessage = async (p, m) => {
          var _, h, b, y;
          if (p == null) {
            let v = this.pendingApprovalMessageId;
            if (v == null) {
              v = (_ = this.lastMessage) == null ? void 0 : _.id;
              for (let E = this.state.messages.length - 1; E >= 0; E--) {
                let g = this.state.messages[E];
                if (
                  g.role === "assistant" &&
                  g.parts.some((x) => Ze(x) && x.state === "approval-responded")
                ) {
                  v = g.id;
                  break;
                }
              }
            }
            let I =
              v != null && v === this.pendingApprovalMessageId
                ? this.state.messages.findIndex((E) => E.id === v)
                : -1;
            await this.makeRequestForToolApproval({ messageId: v, messageIndex: I, ...m });
            return;
          }
          let f;
          if (
            ("text" in p || "files" in p
              ? (f = {
                  parts: [
                    ...(Array.isArray(p.files) ? p.files : await xm(p.files)),
                    ...("text" in p && p.text != null ? [{ type: "text", text: p.text }] : []),
                  ],
                })
              : (f = p),
            p.messageId != null)
          ) {
            let v = this.state.messages.findIndex((T) => T.id === p.messageId);
            if (v === -1) throw new Error(`message with id ${p.messageId} not found`);
            if (this.state.messages[v].role !== "user")
              throw new Error(`message with id ${p.messageId} is not a user message`);
            ((this.state.messages = this.state.messages.slice(0, v + 1)),
              this.state.replaceMessage(v, {
                ...f,
                id: p.messageId,
                role: (h = f.role) != null ? h : "user",
                metadata: p.metadata,
              }));
          } else
            this.state.pushMessage({
              ...f,
              id: (b = f.id) != null ? b : this.generateId(),
              role: (y = f.role) != null ? y : "user",
              metadata: p.metadata,
            });
          await this.makeRequest({ trigger: "submit-message", messageId: p.messageId, ...m });
        }),
        (this.regenerate = async ({ messageId: p, ...m } = {}) => {
          let _ =
            p == null
              ? this.state.messages.length - 1
              : this.state.messages.findIndex((h) => h.id === p);
          if (_ === -1) throw new Error(`message ${p} not found`);
          ((this.state.messages = this.state.messages.slice(
            0,
            this.messages[_].role === "assistant" ? _ : _ + 1
          )),
            await this.makeRequest({ trigger: "regenerate-message", messageId: p, ...m }));
        }),
        (this.resumeStream = async (p = {}) => {
          await this.makeRequest({ trigger: "resume-stream", ...p });
        }),
        (this["~resumeStreamIfDisconnected"] = async ({ shouldResume: p = () => !0 } = {}) => {
          let m = this.activeResponse;
          (this.resumableStreamState == null &&
            m != null &&
            (await m.completionPromise, this.resumableStreamState !== m.state)) ||
            (this.resumableStreamState != null && p() && (await this.resumeStream()));
        }),
        (this.clearError = () => {
          this.status === "error" &&
            ((this.state.error = void 0), this.setStatus({ status: "ready" }));
        }),
        (this.addToolApprovalResponse = async ({ id: p, approved: m, reason: _, options: h }) =>
          this.jobExecutor.run(async () => {
            let b = this.state.messages,
              y = (v) =>
                Ze(v) && v.state === "approval-requested" && v.approval.id === p
                  ? {
                      ...v,
                      state: "approval-responded",
                      approval: { ...v.approval, id: p, approved: m, reason: _ },
                    }
                  : v,
              f = b.findIndex((v) =>
                v.parts.some(
                  (T) => Ze(T) && T.state === "approval-requested" && T.approval.id === p
                )
              );
            if (f !== -1) {
              let v = b[f];
              (this.state.replaceMessage(f, { ...v, parts: v.parts.map(y) }),
                (this.pendingApprovalMessageId = v.id));
            }
            if (
              (this.activeResponse &&
                (this.activeResponse.state.message.parts =
                  this.activeResponse.state.message.parts.map(y)),
              this.status !== "streaming" &&
                this.status !== "submitted" &&
                this.sendAutomaticallyWhen)
            ) {
              let v = await this.shouldSendAutomatically();
              v &&
                this.runAutomaticRequest(() => {
                  var T;
                  let I = f === -1 ? ((T = this.lastMessage) == null ? void 0 : T.id) : b[f].id;
                  return this.makeRequestForToolApproval({ messageId: I, messageIndex: f, ...h });
                }, v);
            }
          })),
        (this.addToolOutput = async ({
          state: p = "output-available",
          toolCallId: m,
          output: _,
          errorText: h,
          options: b,
        }) =>
          this.jobExecutor.run(async () => {
            let y = this.state.messages,
              f = (T) =>
                Ze(T) && T.toolCallId === m ? { ...T, state: p, output: _, errorText: h } : T,
              v = y.findIndex((T) => T.parts.some((I) => Ze(I) && I.toolCallId === m));
            if (v !== -1) {
              let T = y[v];
              this.state.replaceMessage(v, { ...T, parts: T.parts.map(f) });
            }
            if (
              (this.activeResponse &&
                (this.activeResponse.state.message.parts =
                  this.activeResponse.state.message.parts.map(f)),
              v !== -1 &&
                this.status !== "streaming" &&
                this.status !== "submitted" &&
                this.sendAutomaticallyWhen)
            ) {
              let T = await this.shouldSendAutomatically();
              T &&
                this.runAutomaticRequest(
                  () => this.makeRequest({ trigger: "submit-message", messageId: y[v].id, ...b }),
                  T
                );
            }
          })),
        (this.addToolResult = this.addToolOutput),
        (this.stop = async () => {
          (this.activeStopCount++, this.stopGeneration++);
          try {
            let p = this.activeResumeRequest,
              m = this.activeResponse;
            (p?.abortController.abort(),
              m?.abortController.abort(),
              await Promise.all([p?.completionPromise, m?.completionPromise]),
              await this.jobExecutor.waitForIdle());
          } finally {
            this.activeStopCount--;
          }
        }),
        (this.id = t),
        (this.transport = r),
        (this.generateId = e),
        (this.messageMetadataSchema = a),
        (this.dataPartSchemas = n),
        (this.state = s),
        (this.onError = i),
        (this.onToolCall = l),
        (this.onFinish = d),
        (this.onData = c),
        (this.sendAutomaticallyWhen = u));
    }
    get status() {
      return this.state.status;
    }
    setStatus({ status: e, error: t }) {
      if (this.status === e) {
        this.error !== t && (this.state.error = t);
        return;
      }
      ((this.state.status = e), (this.state.error = t));
    }
    get error() {
      return this.state.error;
    }
    get messages() {
      return this.state.messages;
    }
    get lastMessage() {
      return this.state.messages[this.state.messages.length - 1];
    }
    set messages(e) {
      this.state.messages = e;
    }
    async shouldSendAutomatically() {
      if (!this.sendAutomaticallyWhen) return !1;
      let e = this.sendAutomaticallyWhen({ messages: this.state.messages });
      return e && typeof e == "object" && "then" in e ? await e : e;
    }
    async runAutomaticRequest(e, t) {
      let r = this.stopGeneration,
        a = this.activeStopCount > 0;
      (t ?? (await this.shouldSendAutomatically())) &&
        (a || r !== this.stopGeneration || this.activeStopCount > 0 || (await e()));
    }
    async makeRequestForToolApproval({ messageId: e, messageIndex: t, ...r }) {
      var a, n;
      let s = e != null && e === this.pendingApprovalMessageId;
      (s && (this.pendingApprovalMessageId = void 0),
        await this.makeRequest({ trigger: "submit-message", messageId: e, ...r }),
        s &&
          this.status === "error" &&
          this.pendingApprovalMessageId == null &&
          (this.pendingApprovalMessageId =
            (n = (a = this.state.messages[t]) == null ? void 0 : a.id) != null ? n : e));
    }
    async makeRequest(e) {
      let t = Js();
      try {
        await this.makeRequestImpl({ ...e, completionPromise: t.promise });
      } finally {
        t.resolve();
      }
    }
    async makeRequestImpl({
      trigger: e,
      metadata: t,
      headers: r,
      body: a,
      messageId: n,
      completionPromise: s,
    }) {
      var i, l;
      e !== "resume-stream" && (this.resumableStreamState = void 0);
      let d = new AbortController(),
        c = e === "resume-stream" ? { abortController: d, completionPromise: s } : void 0;
      c &&
        ((i = this.activeResumeRequest) == null || i.abortController.abort(),
        (this.activeResumeRequest = c));
      let u = () => c == null || this.activeResumeRequest === c,
        p = () => {
          this.activeResumeRequest === c && (this.activeResumeRequest = void 0);
        },
        m;
      if (e === "resume-stream")
        try {
          let x = await this.transport.reconnectToStream({
            chatId: this.id,
            abortSignal: d.signal,
            metadata: t,
            headers: r,
            body: a,
          });
          if (d.signal.aborted || !u()) {
            (await x?.cancel().catch(() => {}),
              u() && (this.setStatus({ status: "ready" }), (this.resumableStreamState = void 0)),
              p());
            return;
          }
          if (x == null) {
            (this.setStatus({ status: "ready" }), (this.resumableStreamState = void 0), p());
            return;
          }
          m = x;
        } catch (x) {
          if (d.signal.aborted || x.name === "AbortError") {
            (u() && (this.setStatus({ status: "ready" }), (this.resumableStreamState = void 0)),
              p());
            return;
          }
          if (!u()) return;
          (this.onError && x instanceof Error && this.onError(x),
            this.setStatus({ status: "error", error: x }),
            p());
          return;
        }
      this.setStatus({ status: "submitted", error: void 0 });
      let _ = this.lastMessage,
        h =
          e === "submit-message" && n != null
            ? this.state.messages.findIndex((x) => x.id === n)
            : this.state.messages.length - 1,
        b = h === -1 ? _ : this.state.messages[h],
        y = b?.id,
        f =
          e === "resume-stream" &&
          b?.role === "assistant" &&
          b.parts.some((x) => Ze(x) && x.state === "input-streaming")
            ? this.state.snapshot(b)
            : void 0,
        v = h !== -1 && h < this.state.messages.length - 1 && b?.role === "assistant",
        T = !1,
        I = !1,
        E = !1,
        g;
      try {
        let x = {
          state:
            e === "resume-stream" && this.resumableStreamState != null
              ? this.resumableStreamState
              : Do({
                  lastMessage:
                    e === "resume-stream"
                      ? f
                      : e === "regenerate-message"
                        ? void 0
                        : this.state.snapshot(b),
                  messageId: this.generateId(),
                }),
          abortController: d,
          completionPromise: s,
        };
        ((g = x),
          x.abortController.signal.addEventListener("abort", () => {
            T = !0;
          }),
          (this.activeResponse = x));
        let M;
        e === "resume-stream"
          ? (M = m)
          : (M = await this.transport.sendMessages({
              chatId: this.id,
              messages: this.state.messages,
              abortSignal: x.abortController.signal,
              metadata: t,
              headers: r,
              body: a,
              trigger: e,
              messageId: n,
            }));
        let J = (N) =>
          this.jobExecutor.run(() =>
            x.abortController.signal.aborted
              ? Promise.resolve()
              : N({
                  state: x.state,
                  write: ({ updateStatus: D = !0 } = {}) => {
                    if (x.abortController.signal.aborted) return;
                    D && this.setStatus({ status: "streaming" });
                    let H = this.state.messages.findLastIndex((w) => w.id === x.state.message.id);
                    if (H !== -1) this.state.replaceMessage(H, x.state.message);
                    else if (v) {
                      let w = this.state.messages.findLastIndex((F) => F.id === y);
                      w !== -1
                        ? this.state.replaceMessage(w, x.state.message)
                        : this.state.pushMessage(x.state.message);
                    } else this.state.pushMessage(x.state.message);
                  },
                })
          );
        if (
          (await An({
            stream: ii({
              stream: M,
              resetStateOnMessageIdChange: e === "resume-stream",
              resetStateOnFirstMessageStart:
                e === "resume-stream" && this.transport.resumeStreamIsReplay,
              onToolCall: this.onToolCall,
              onData: this.onData,
              messageMetadataSchema: this.messageMetadataSchema,
              dataPartSchemas: this.dataPartSchemas,
              runUpdateMessageJob: J,
              onError: (N) => {
                throw N;
              },
            }),
            abortSignal: x.abortController.signal,
            onError: (N) => {
              throw N;
            },
          }),
          T)
        )
          return (
            u() &&
              (this.setStatus({ status: "ready" }),
              this.resumableStreamState === x.state && (this.resumableStreamState = void 0)),
            null
          );
        u() &&
          (this.setStatus({ status: "ready" }),
          this.resumableStreamState === x.state && (this.resumableStreamState = void 0));
      } catch (x) {
        if (T || x.name === "AbortError")
          return (
            (T = !0),
            u() &&
              (this.setStatus({ status: "ready" }),
              this.resumableStreamState === g?.state && (this.resumableStreamState = void 0)),
            null
          );
        if (!u()) return null;
        ((E = !0),
          x instanceof TypeError &&
            (x.message.toLowerCase().includes("fetch") ||
              x.message.toLowerCase().includes("network")) &&
            (I = !0),
          I
            ? (this.resumableStreamState = g?.state)
            : this.resumableStreamState === g?.state && (this.resumableStreamState = void 0),
          this.onError && x instanceof Error && this.onError(x),
          this.setStatus({ status: "error", error: x }));
      } finally {
        try {
          g &&
            ((l = this.onFinish) == null ||
              l.call(this, {
                message: g.state.message,
                messages: this.state.messages,
                isAbort: T,
                isDisconnect: I,
                isError: E,
                finishReason: g.state.finishReason,
              }));
        } finally {
          (this.activeResponse === g && (this.activeResponse = void 0), p());
        }
      }
      !T &&
        !E &&
        (await this.runAutomaticRequest(() => {
          var x;
          return this.makeRequest({
            trigger: "submit-message",
            messageId: (x = this.lastMessage) == null ? void 0 : x.id,
            metadata: t,
            headers: r,
            body: a,
          });
        }));
    }
  },
  o_ = class {
    constructor({ agent: e, options: t, ...r }) {
      ((this.agent = e), (this.agentOptions = t), (this.uiMessageStreamOptions = r));
    }
    async sendMessages({ messages: e, abortSignal: t }) {
      let r = await lm({ messages: e, tools: this.agent.tools }),
        a = await ui(r, { tools: this.agent.tools });
      return (
        await this.agent.stream({
          prompt: a,
          abortSignal: t,
          ...(this.agentOptions !== void 0 ? { options: this.agentOptions } : {}),
        })
      ).toUIMessageStream(this.uiMessageStreamOptions);
    }
    async reconnectToStream(e) {
      return null;
    }
  };
function s_({ messages: e }) {
  let t = e[e.length - 1];
  if (!t || t.role !== "assistant") return !1;
  let r = t.parts.reduce((n, s, i) => (s.type === "step-start" ? i : n), -1),
    a = t.parts.slice(r + 1).filter(Ze);
  return (
    a.filter((n) => n.state === "approval-responded").length > 0 &&
    a.every(
      (n) =>
        (n.state === "output-available" && n.preliminary !== !0) ||
        n.state === "output-error" ||
        n.state === "output-denied" ||
        n.state === "approval-responded"
    )
  );
}
function i_({ messages: e }) {
  let t = e[e.length - 1];
  if (!t || t.role !== "assistant") return !1;
  let r = t.parts.reduce((i, l, d) => (l.type === "step-start" ? d : i), -1),
    a = t.parts.slice(r + 1),
    n = a.filter(Ze).filter((i) => !i.providerExecuted),
    s = a.reduce((i, l, d) => (Ze(l) && !l.providerExecuted ? d : i), -1);
  return (
    n.length > 0 &&
    !a.slice(s + 1).some((i) => i.type === "text" && i.state !== "done") &&
    n.every(
      (i) => (i.state === "output-available" && i.preliminary !== !0) || i.state === "output-error"
    )
  );
}
function l_({ stream: e }) {
  return e.pipeThrough(
    new TransformStream({
      start(t) {
        (t.enqueue({ type: "start" }),
          t.enqueue({ type: "start-step" }),
          t.enqueue({ type: "text-start", id: "text-1" }));
      },
      async transform(t, r) {
        r.enqueue({ type: "text-delta", id: "text-1", delta: t });
      },
      async flush(t) {
        (t.enqueue({ type: "text-end", id: "text-1" }),
          t.enqueue({ type: "finish-step" }),
          t.enqueue({ type: "finish" }));
      },
    })
  );
}
var u_ = class extends fi {
  constructor(e = {}) {
    super(e);
  }
  processResponseStream(e) {
    return l_({ stream: e.pipeThrough(new TextDecoderStream()) });
  }
};
function AM(e, t) {
  return e
    ? t === "harness2"
      ? qo(e)
      : t === "agentBranchScriptApi"
        ? vi(e)
        : t === "agentUI"
          ? p_(e)
          : t === "agentVersionHistory" || t === "agentProjectMembers"
            ? qo(e) && Rr.isOn(t)
            : t === "agentWebSearch" && aa(e)
              ? !0
              : Rr.isOn(t)
    : Rr.isOn(t);
}
function aa(e) {
  return e.agent === "api" && e.caller === "automation";
}
function hi(e) {
  return aa(e) ? e.metadata.commentBranchId : void 0;
}
function Nn(e) {
  return e.agent === "api" && e.caller === "slack";
}
function OM(e) {
  if (!aa(e)) return {};
  let { automationId: t, runId: r, trigger: a } = e.metadata;
  return {
    ...(t ? { automationId: t } : {}),
    ...(r ? { automationRunId: r } : {}),
    automationTriggerType: a,
  };
}
function c_(e) {
  return e.agent === "api" || e.agent === "app" ? e.caller : void 0;
}
function NM(e) {
  return Nn(e) ? "slack-agent" : aa(e) ? "automation" : "agents";
}
function gi(e) {
  return e.agent === "app" || e.agent === "user-agent";
}
function PM(e) {
  return gi(e);
}
function p_(e) {
  return gi(e) && qo(e) && Rr.isOn("agentUI");
}
function qo(e) {
  switch (e.agent) {
    case "mcp":
      return !0;
    case "api":
      return Nn(e) ? Rr.isOn("harness2") : aa(e);
    case "app":
    case "user-agent":
      return Rr.isOn("harness2");
    default:
      return Bn(e);
  }
}
function jM(e) {
  return e.prompt === "in-app" && !vi(e) && hi(e) === void 0;
}
function vi(e) {
  return (
    e.prompt === "in-app" &&
    qo(e) &&
    hi(e) === void 0 &&
    (e.agent === "mcp" || Rr.isOn("agentBranchScriptApi"))
  );
}
function DM(e) {
  return vi(e) || hi(e) !== void 0;
}
function qM(e) {
  switch (e.agent) {
    case "app":
    case "user-agent":
    case "mcp":
      return { scope: "all" };
    case "api":
      return Nn(e)
        ? { scope: "all" }
        : aa(e) && e.metadata.trigger === "commentCreated"
          ? { scope: "thread", threadId: e.metadata.threadId }
          : void 0;
    default:
      return Bn(e);
  }
}
function $M(e) {
  return e.agent !== "user-agent";
}
function FM(e) {
  return gi(e) && c_(e) === void 0;
}
function UM(e) {
  return e.agent === "app" || aa(e) || Nn(e);
}
function m_(e) {
  return e.agent !== "mcp";
}
function VM(e) {
  if (!m_(e)) throw new Error("This operation is unavailable.");
}
function f_(e) {
  switch (e.agent) {
    case "app":
    case "user-agent":
      return !0;
    case "mcp":
      return !1;
    case "api":
      return !Nn(e);
    default:
      return Bn(e);
  }
}
function LM(e) {
  if (!f_(e)) throw new Error("This operation is unavailable.");
}
export {
  ue as a,
  ua as b,
  rr as c,
  mr as d,
  Je as e,
  Il as f,
  Cr as g,
  Xa as h,
  A as i,
  gt as j,
  UT as k,
  Ct as l,
  VT as m,
  LT as n,
  BT as o,
  ro as p,
  Wr as q,
  Ne as r,
  Zr as s,
  Kl as t,
  ZT as u,
  Sa as v,
  KT as w,
  no as x,
  Z as y,
  Ea as z,
  nt as A,
  G as B,
  Ht as C,
  Re as D,
  Ah as E,
  Ye as F,
  wr as G,
  o0 as H,
  vt as I,
  i0 as J,
  l0 as K,
  ot as L,
  ae as M,
  De as N,
  iu as O,
  We as P,
  d0 as Q,
  c0 as R,
  m0 as S,
  lu as T,
  f0 as U,
  w0 as V,
  Hs as W,
  kp as X,
  Lp as Y,
  jo as Z,
  Xp as _,
  am as $,
  pi as aa,
  d_ as ba,
  AM as ca,
  aa as da,
  hi as ea,
  Nn as fa,
  OM as ga,
  c_ as ha,
  NM as ia,
  gi as ja,
  PM as ka,
  p_ as la,
  qo as ma,
  jM as na,
  vi as oa,
  DM as pa,
  qM as qa,
  $M as ra,
  FM as sa,
  UM as ta,
  m_ as ua,
  VM as va,
  f_ as wa,
  LM as xa,
};
//# sourceMappingURL=chunk-RW5ZSG6W.mjs.map
