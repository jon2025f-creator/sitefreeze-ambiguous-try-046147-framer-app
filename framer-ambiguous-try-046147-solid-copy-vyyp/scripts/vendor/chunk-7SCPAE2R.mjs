import { a as ko, b as o } from "chunk-3JXINZRV.mjs";
import { Cd as Mo } from "chunk-7GKAI4PF.mjs";
import { c as is, d as cp, e as Eo } from "chunk-WLHSDIGQ.mjs";
var vl = is((Rw, gl) => {
  "use strict";
  var Es = Object.defineProperty,
    lm = Object.getOwnPropertyDescriptor,
    um = Object.getOwnPropertyNames,
    dm = Object.prototype.hasOwnProperty,
    cm = (e, t) => {
      for (var r in t) Es(e, r, { get: t[r], enumerable: !0 });
    },
    pm = (e, t, r, a) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let n of um(t))
          !dm.call(e, n) &&
            n !== r &&
            Es(e, n, { get: () => t[n], enumerable: !(a = lm(t, n)) || a.enumerable });
      return e;
    },
    fm = (e) => pm(Es({}, "__esModule", { value: !0 }), e),
    ml = {};
  cm(ml, { SYMBOL_FOR_REQ_CONTEXT: () => hl, getContext: () => mm });
  gl.exports = fm(ml);
  var hl = Symbol.for("@vercel/request-context");
  function mm() {
    return globalThis[hl]?.get?.() ?? {};
  }
});
var wl = is((Aw, bl) => {
  "use strict";
  var Rs = Object.defineProperty,
    hm = Object.getOwnPropertyDescriptor,
    gm = Object.getOwnPropertyNames,
    vm = Object.prototype.hasOwnProperty,
    ym = (e, t) => {
      for (var r in t) Rs(e, r, { get: t[r], enumerable: !0 });
    },
    bm = (e, t, r, a) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let n of gm(t))
          !vm.call(e, n) &&
            n !== r &&
            Rs(e, n, { get: () => t[n], enumerable: !(a = hm(t, n)) || a.enumerable });
      return e;
    },
    wm = (e) => bm(Rs({}, "__esModule", { value: !0 }), e),
    yl = {};
  ym(yl, { AccessTokenMissingError: () => Ms, RefreshAccessTokenFailedError: () => ks });
  bl.exports = wm(yl);
  var Ms = class extends Error {
      constructor() {
        (super("No authentication found. Please log in with the Vercel CLI (vercel login)."),
          (this.name = "AccessTokenMissingError"));
      }
    },
    ks = class extends Error {
      constructor(t) {
        (super("Failed to refresh authentication token.", { cause: t }),
          (this.name = "RefreshAccessTokenFailedError"));
      }
    };
});
var Cs = is((Cw, xl) => {
  "use strict";
  var As = Object.defineProperty,
    _m = Object.getOwnPropertyDescriptor,
    Tm = Object.getOwnPropertyNames,
    xm = Object.prototype.hasOwnProperty,
    Im = (e, t) => {
      for (var r in t) As(e, r, { get: t[r], enumerable: !0 });
    },
    Sm = (e, t, r, a) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let n of Tm(t))
          !xm.call(e, n) &&
            n !== r &&
            As(e, n, { get: () => t[n], enumerable: !(a = _m(t, n)) || a.enumerable });
      return e;
    },
    Em = (e) => Sm(As({}, "__esModule", { value: !0 }), e),
    Tl = {};
  Im(Tl, {
    AccessTokenMissingError: () => _l.AccessTokenMissingError,
    RefreshAccessTokenFailedError: () => _l.RefreshAccessTokenFailedError,
    getContext: () => Mm.getContext,
    getVercelOidcToken: () => km,
    getVercelOidcTokenSync: () => Rm,
    getVercelToken: () => Am,
  });
  xl.exports = Em(Tl);
  var Mm = vl(),
    _l = wl();
  async function km() {
    return "";
  }
  function Rm() {
    return "";
  }
  async function Am() {
    throw new Error("getVercelToken is not supported in browser environments");
  }
});
var ai = "vercel.ai.error",
  pp = Symbol.for(ai),
  Ro,
  Ao,
  I = class ni extends ((Ao = Error), (Ro = pp), Ao) {
    constructor({ name: t, message: r, cause: a }) {
      (super(r), (this[Ro] = !0), (this.name = t), (this.cause = a));
    }
    static isInstance(t) {
      return ni.hasMarker(t, ai);
    }
    static hasMarker(t, r) {
      let a = Symbol.for(r);
      return t != null && typeof t == "object" && a in t && typeof t[a] == "boolean" && t[a] === !0;
    }
  },
  si = "AI_APICallError",
  oi = `vercel.ai.error.${si}`,
  fp = Symbol.for(oi),
  Co,
  Oo,
  ae = class extends ((Oo = I), (Co = fp), Oo) {
    constructor({
      message: e,
      url: t,
      requestBodyValues: r,
      statusCode: a,
      responseHeaders: n,
      responseBody: s,
      cause: l,
      isRetryable: i = a != null && (a === 408 || a === 409 || a === 429 || a >= 500),
      data: d,
    }) {
      (super({ name: si, message: e, cause: l }),
        (this[Co] = !0),
        (this.url = t),
        (this.requestBodyValues = r),
        (this.statusCode = a),
        (this.responseHeaders = n),
        (this.responseBody = s),
        (this.isRetryable = i),
        (this.data = d));
    }
    static isInstance(e) {
      return I.hasMarker(e, oi);
    }
  },
  ii = "AI_EmptyResponseBodyError",
  li = `vercel.ai.error.${ii}`,
  mp = Symbol.for(li),
  No,
  Po,
  wn = class extends ((Po = I), (No = mp), Po) {
    constructor({ message: e = "Empty response body" } = {}) {
      (super({ name: ii, message: e }), (this[No] = !0));
    }
    static isInstance(e) {
      return I.hasMarker(e, li);
    }
  };
function Bt(e) {
  return e == null
    ? "unknown error"
    : typeof e == "string"
      ? e
      : e instanceof Error
        ? e.message
        : JSON.stringify(e);
}
var ui = "AI_InvalidArgumentError",
  di = `vercel.ai.error.${ui}`,
  hp = Symbol.for(di),
  jo,
  Do,
  Qr = class extends ((Do = I), (jo = hp), Do) {
    constructor({ message: e, cause: t, argument: r }) {
      (super({ name: ui, message: e, cause: t }), (this[jo] = !0), (this.argument = r));
    }
    static isInstance(e) {
      return I.hasMarker(e, di);
    }
  },
  ci = "AI_InvalidPromptError",
  pi = `vercel.ai.error.${ci}`,
  gp = Symbol.for(pi),
  $o,
  Fo,
  Zt = class extends ((Fo = I), ($o = gp), Fo) {
    constructor({ prompt: e, message: t, cause: r }) {
      (super({ name: ci, message: `Invalid prompt: ${t}`, cause: r }),
        (this[$o] = !0),
        (this.prompt = e));
    }
    static isInstance(e) {
      return I.hasMarker(e, pi);
    }
  },
  fi = "AI_InvalidResponseDataError",
  mi = `vercel.ai.error.${fi}`,
  vp = Symbol.for(mi),
  qo,
  Uo,
  hi = class extends ((Uo = I), (qo = vp), Uo) {
    constructor({ data: e, message: t = `Invalid response data: ${JSON.stringify(e)}.` }) {
      (super({ name: fi, message: t }), (this[qo] = !0), (this.data = e));
    }
    static isInstance(e) {
      return I.hasMarker(e, mi);
    }
  },
  gi = "AI_JSONParseError",
  vi = `vercel.ai.error.${gi}`,
  yp = Symbol.for(vi),
  Vo,
  Lo,
  nr = class extends ((Lo = I), (Vo = yp), Lo) {
    constructor({ text: e, cause: t }) {
      (super({
        name: gi,
        message: `JSON parsing failed: Text: ${e}.
Error message: ${Bt(t)}`,
        cause: t,
      }),
        (this[Vo] = !0),
        (this.text = e));
    }
    static isInstance(e) {
      return I.hasMarker(e, vi);
    }
  },
  yi = "AI_LoadAPIKeyError",
  bi = `vercel.ai.error.${yi}`,
  bp = Symbol.for(bi),
  Jo,
  zo,
  Or = class extends ((zo = I), (Jo = bp), zo) {
    constructor({ message: e }) {
      (super({ name: yi, message: e }), (this[Jo] = !0));
    }
    static isInstance(e) {
      return I.hasMarker(e, bi);
    }
  },
  wi = "AI_LoadSettingError",
  _i = `vercel.ai.error.${wi}`,
  wp = Symbol.for(_i),
  Go,
  Bo,
  Ti = class extends ((Bo = I), (Go = wp), Bo) {
    constructor({ message: e }) {
      (super({ name: wi, message: e }), (this[Go] = !0));
    }
    static isInstance(e) {
      return I.hasMarker(e, _i);
    }
  },
  xi = "AI_NoContentGeneratedError",
  Ii = `vercel.ai.error.${xi}`,
  _p = Symbol.for(Ii),
  Zo,
  Ho,
  Si = class extends ((Ho = I), (Zo = _p), Ho) {
    constructor({ message: e = "No content generated." } = {}) {
      (super({ name: xi, message: e }), (this[Zo] = !0));
    }
    static isInstance(e) {
      return I.hasMarker(e, Ii);
    }
  },
  Ei = "AI_NoSuchModelError",
  Mi = `vercel.ai.error.${Ei}`,
  Tp = Symbol.for(Mi),
  Wo,
  Ko,
  Ce = class extends ((Ko = I), (Wo = Tp), Ko) {
    constructor({
      errorName: e = Ei,
      modelId: t,
      modelType: r,
      message: a = `No such ${r}: ${t}`,
    }) {
      (super({ name: e, message: a }), (this[Wo] = !0), (this.modelId = t), (this.modelType = r));
    }
    static isInstance(e) {
      return I.hasMarker(e, Mi);
    }
  },
  ki = "AI_TooManyEmbeddingValuesForCallError",
  Ri = `vercel.ai.error.${ki}`,
  xp = Symbol.for(Ri),
  Yo,
  Xo,
  Ai = class extends ((Xo = I), (Yo = xp), Xo) {
    constructor(e) {
      (super({
        name: ki,
        message: `Too many values for a single embedding call. The ${e.provider} model "${e.modelId}" can only embed up to ${e.maxEmbeddingsPerCall} values per call, but ${e.values.length} values were provided.`,
      }),
        (this[Yo] = !0),
        (this.provider = e.provider),
        (this.modelId = e.modelId),
        (this.maxEmbeddingsPerCall = e.maxEmbeddingsPerCall),
        (this.values = e.values));
    }
    static isInstance(e) {
      return I.hasMarker(e, Ri);
    }
  },
  Ci = "AI_TypeValidationError",
  Oi = `vercel.ai.error.${Ci}`,
  Ip = Symbol.for(Oi),
  Qo,
  ei,
  ge = class ls extends ((ei = I), (Qo = Ip), ei) {
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
        name: Ci,
        message: `${n}: Value: ${JSON.stringify(t)}.
Error message: ${Bt(r)}`,
        cause: r,
      }),
        (this[Qo] = !0),
        (this.value = t),
        (this.context = a));
    }
    static isInstance(t) {
      return I.hasMarker(t, Oi);
    }
    static wrap({ value: t, cause: r, context: a }) {
      var n, s, l;
      return ls.isInstance(r) &&
        r.value === t &&
        ((n = r.context) == null ? void 0 : n.field) === a?.field &&
        ((s = r.context) == null ? void 0 : s.entityName) === a?.entityName &&
        ((l = r.context) == null ? void 0 : l.entityId) === a?.entityId
        ? r
        : new ls({ value: t, cause: r, context: a });
    }
  },
  Ni = "AI_UnsupportedFunctionalityError",
  Pi = `vercel.ai.error.${Ni}`,
  Sp = Symbol.for(Pi),
  ti,
  ri,
  wr = class extends ((ri = I), (ti = Sp), ri) {
    constructor({ functionality: e, message: t = `'${e}' functionality not supported.` }) {
      (super({ name: Ni, message: t }), (this[ti] = !0), (this.functionality = e));
    }
    static isInstance(e) {
      return I.hasMarker(e, Pi);
    }
  };
function bn(e) {
  return e === null || typeof e == "string" || typeof e == "number" || typeof e == "boolean"
    ? !0
    : Array.isArray(e)
      ? e.every(bn)
      : typeof e == "object"
        ? Object.entries(e).every(([t, r]) => typeof t == "string" && (r === void 0 || bn(r)))
        : !1;
}
function us(e) {
  return Array.isArray(e) && e.every(bn);
}
function Ua(e) {
  return (
    e != null &&
    typeof e == "object" &&
    Object.entries(e).every(([t, r]) => typeof t == "string" && (r === void 0 || bn(r)))
  );
}
var K;
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
      for (let l of n) s[l] = l;
      return s;
    }),
    (e.getValidEnumValues = (n) => {
      let s = e.objectKeys(n).filter((i) => typeof n[n[i]] != "number"),
        l = {};
      for (let i of s) l[i] = n[i];
      return e.objectValues(l);
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
            for (let l in n) Object.prototype.hasOwnProperty.call(n, l) && s.push(l);
            return s;
          }),
    (e.find = (n, s) => {
      for (let l of n) if (s(l)) return l;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (n) => Number.isInteger(n)
        : (n) => typeof n == "number" && Number.isFinite(n) && Math.floor(n) === n));
  function a(n, s = " | ") {
    return n.map((l) => (typeof l == "string" ? `'${l}'` : l)).join(s);
  }
  ((e.joinValues = a),
    (e.jsonStringifyReplacer = (n, s) => (typeof s == "bigint" ? s.toString() : s)));
})(K || (K = {}));
var ji;
(function (e) {
  e.mergeShapes = (t, r) => ({ ...t, ...r });
})(ji || (ji = {}));
var O = K.arrayToEnum([
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
  sr = (e) => {
    switch (typeof e) {
      case "undefined":
        return O.undefined;
      case "string":
        return O.string;
      case "number":
        return Number.isNaN(e) ? O.nan : O.number;
      case "boolean":
        return O.boolean;
      case "function":
        return O.function;
      case "bigint":
        return O.bigint;
      case "symbol":
        return O.symbol;
      case "object":
        return Array.isArray(e)
          ? O.array
          : e === null
            ? O.null
            : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function"
              ? O.promise
              : typeof Map < "u" && e instanceof Map
                ? O.map
                : typeof Set < "u" && e instanceof Set
                  ? O.set
                  : typeof Date < "u" && e instanceof Date
                    ? O.date
                    : O.object;
      default:
        return O.unknown;
    }
  };
var S = K.arrayToEnum([
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
var yt = class e extends Error {
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
        for (let l of s.issues)
          if (l.code === "invalid_union") l.unionErrors.map(n);
          else if (l.code === "invalid_return_type") n(l.returnTypeError);
          else if (l.code === "invalid_arguments") n(l.argumentsError);
          else if (l.path.length === 0) a._errors.push(r(l));
          else {
            let i = a,
              d = 0;
            for (; d < l.path.length;) {
              let u = l.path[d];
              (d === l.path.length - 1
                ? ((i[u] = i[u] || { _errors: [] }), i[u]._errors.push(r(l)))
                : (i[u] = i[u] || { _errors: [] }),
                (i = i[u]),
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
    return JSON.stringify(this.issues, K.jsonStringifyReplacer, 2);
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
yt.create = (e) => new yt(e);
var Ep = (e, t) => {
    let r;
    switch (e.code) {
      case S.invalid_type:
        e.received === O.undefined
          ? (r = "Required")
          : (r = `Expected ${e.expected}, received ${e.received}`);
        break;
      case S.invalid_literal:
        r = `Invalid literal value, expected ${JSON.stringify(e.expected, K.jsonStringifyReplacer)}`;
        break;
      case S.unrecognized_keys:
        r = `Unrecognized key(s) in object: ${K.joinValues(e.keys, ", ")}`;
        break;
      case S.invalid_union:
        r = "Invalid input";
        break;
      case S.invalid_union_discriminator:
        r = `Invalid discriminator value. Expected ${K.joinValues(e.options)}`;
        break;
      case S.invalid_enum_value:
        r = `Invalid enum value. Expected ${K.joinValues(e.options)}, received '${e.received}'`;
        break;
      case S.invalid_arguments:
        r = "Invalid function arguments";
        break;
      case S.invalid_return_type:
        r = "Invalid function return type";
        break;
      case S.invalid_date:
        r = "Invalid date";
        break;
      case S.invalid_string:
        typeof e.validation == "object"
          ? "includes" in e.validation
            ? ((r = `Invalid input: must include "${e.validation.includes}"`),
              typeof e.validation.position == "number" &&
                (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
            : "startsWith" in e.validation
              ? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
              : "endsWith" in e.validation
                ? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
                : K.assertNever(e.validation)
          : e.validation !== "regex"
            ? (r = `Invalid ${e.validation}`)
            : (r = "Invalid");
        break;
      case S.too_small:
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
      case S.too_big:
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
      case S.custom:
        r = "Invalid input";
        break;
      case S.invalid_intersection_types:
        r = "Intersection results could not be merged";
        break;
      case S.not_multiple_of:
        r = `Number must be a multiple of ${e.multipleOf}`;
        break;
      case S.not_finite:
        r = "Number must be finite";
        break;
      default:
        ((r = t.defaultError), K.assertNever(e));
    }
    return { message: r };
  },
  _r = Ep;
var Mp = _r;
function Va() {
  return Mp;
}
var _n = (e) => {
  let { data: t, path: r, errorMaps: a, issueData: n } = e,
    s = [...r, ...(n.path || [])],
    l = { ...n, path: s };
  if (n.message !== void 0) return { ...n, path: s, message: n.message };
  let i = "",
    d = a
      .filter((u) => !!u)
      .slice()
      .reverse();
  for (let u of d) i = u(l, { data: t, defaultError: i }).message;
  return { ...n, path: s, message: i };
};
function A(e, t) {
  let r = Va(),
    a = _n({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, r, r === _r ? void 0 : _r].filter(
        (n) => !!n
      ),
    });
  e.common.issues.push(a);
}
var Ke = class e {
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
        if (n.status === "aborted") return V;
        (n.status === "dirty" && t.dirty(), a.push(n.value));
      }
      return { status: t.value, value: a };
    }
    static async mergeObjectAsync(t, r) {
      let a = [];
      for (let n of r) {
        let s = await n.key,
          l = await n.value;
        a.push({ key: s, value: l });
      }
      return e.mergeObjectSync(t, a);
    }
    static mergeObjectSync(t, r) {
      let a = {};
      for (let n of r) {
        let { key: s, value: l } = n;
        if (s.status === "aborted" || l.status === "aborted") return V;
        (s.status === "dirty" && t.dirty(),
          l.status === "dirty" && t.dirty(),
          s.value !== "__proto__" &&
            (typeof l.value < "u" || n.alwaysSet) &&
            (a[s.value] = l.value));
      }
      return { status: t.value, value: a };
    }
  },
  V = Object.freeze({ status: "aborted" }),
  ea = (e) => ({ status: "dirty", value: e }),
  rt = (e) => ({ status: "valid", value: e }),
  ds = (e) => e.status === "aborted",
  cs = (e) => e.status === "dirty",
  Nr = (e) => e.status === "valid",
  La = (e) => typeof Promise < "u" && e instanceof Promise;
var P;
(function (e) {
  ((e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) => (typeof t == "string" ? t : t?.message)));
})(P || (P = {}));
var It = class {
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
  Di = (e, t) => {
    if (Nr(t)) return { success: !0, data: t.value };
    if (!e.common.issues.length) throw new Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        let r = new yt(e.common.issues);
        return ((this._error = r), this._error);
      },
    };
  };
function z(e) {
  if (!e) return {};
  let { errorMap: t, invalid_type_error: r, required_error: a, description: n } = e;
  if (t && (r || a))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: n }
    : {
        errorMap: (l, i) => {
          let { message: d } = e;
          return l.code === "invalid_enum_value"
            ? { message: d ?? i.defaultError }
            : typeof i.data > "u"
              ? { message: d ?? a ?? i.defaultError }
              : l.code !== "invalid_type"
                ? { message: i.defaultError }
                : { message: d ?? r ?? i.defaultError };
        },
        description: n,
      };
}
var W = class {
    get description() {
      return this._def.description;
    }
    _getType(t) {
      return sr(t.data);
    }
    _getOrReturnCtx(t, r) {
      return (
        r || {
          common: t.parent.common,
          data: t.data,
          parsedType: sr(t.data),
          schemaErrorMap: this._def.errorMap,
          path: t.path,
          parent: t.parent,
        }
      );
    }
    _processInputParams(t) {
      return {
        status: new Ke(),
        ctx: {
          common: t.parent.common,
          data: t.data,
          parsedType: sr(t.data),
          schemaErrorMap: this._def.errorMap,
          path: t.path,
          parent: t.parent,
        },
      };
    }
    _parseSync(t) {
      let r = this._parse(t);
      if (La(r)) throw new Error("Synchronous parse encountered promise.");
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
          parsedType: sr(t),
        },
        n = this._parseSync({ data: t, path: a.path, parent: a });
      return Di(a, n);
    }
    "~validate"(t) {
      let r = {
        common: { issues: [], async: !!this["~standard"].async },
        path: [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: sr(t),
      };
      if (!this["~standard"].async)
        try {
          let a = this._parseSync({ data: t, path: [], parent: r });
          return Nr(a) ? { value: a.value } : { issues: r.common.issues };
        } catch (a) {
          (a?.message?.toLowerCase()?.includes("encountered") && (this["~standard"].async = !0),
            (r.common = { issues: [], async: !0 }));
        }
      return this._parseAsync({ data: t, path: [], parent: r }).then((a) =>
        Nr(a) ? { value: a.value } : { issues: r.common.issues }
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
          parsedType: sr(t),
        },
        n = this._parse({ data: t, path: a.path, parent: a }),
        s = await (La(n) ? n : Promise.resolve(n));
      return Di(a, s);
    }
    refine(t, r) {
      let a = (n) =>
        typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(n) : r;
      return this._refinement((n, s) => {
        let l = t(n),
          i = () => s.addIssue({ code: S.custom, ...a(n) });
        return typeof Promise < "u" && l instanceof Promise
          ? l.then((d) => (d ? !0 : (i(), !1)))
          : l
            ? !0
            : (i(), !1);
      });
    }
    refinement(t, r) {
      return this._refinement((a, n) =>
        t(a) ? !0 : (n.addIssue(typeof r == "function" ? r(a, n) : r), !1)
      );
    }
    _refinement(t) {
      return new Pt({
        schema: this,
        typeName: E.ZodEffects,
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
      return Nt.create(this, this._def);
    }
    nullable() {
      return lr.create(this, this._def);
    }
    nullish() {
      return this.nullable().optional();
    }
    array() {
      return xr.create(this);
    }
    promise() {
      return Pr.create(this, this._def);
    }
    or(t) {
      return sa.create([this, t], this._def);
    }
    and(t) {
      return oa.create(this, t, this._def);
    }
    transform(t) {
      return new Pt({
        ...z(this._def),
        schema: this,
        typeName: E.ZodEffects,
        effect: { type: "transform", transform: t },
      });
    }
    default(t) {
      let r = typeof t == "function" ? t : () => t;
      return new ca({ ...z(this._def), innerType: this, defaultValue: r, typeName: E.ZodDefault });
    }
    brand() {
      return new Tn({ typeName: E.ZodBranded, type: this, ...z(this._def) });
    }
    catch(t) {
      let r = typeof t == "function" ? t : () => t;
      return new pa({ ...z(this._def), innerType: this, catchValue: r, typeName: E.ZodCatch });
    }
    describe(t) {
      let r = this.constructor;
      return new r({ ...this._def, description: t });
    }
    pipe(t) {
      return xn.create(this, t);
    }
    readonly() {
      return fa.create(this);
    }
    isOptional() {
      return this.safeParse(void 0).success;
    }
    isNullable() {
      return this.safeParse(null).success;
    }
  },
  kp = /^c[^\s-]{8,}$/i,
  Rp = /^[0-9a-z]+$/,
  Ap = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  Cp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  Op = /^[a-z0-9_-]{21}$/i,
  Np = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  Pp =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  jp = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  Dp = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
  ps,
  $p =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  Fp =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  qp =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  Up =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  Vp = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  Lp = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  $i =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  Jp = new RegExp(`^${$i}$`);
function Fi(e) {
  let t = "[0-5]\\d";
  e.precision ? (t = `${t}\\.\\d{${e.precision}}`) : e.precision == null && (t = `${t}(\\.\\d+)?`);
  let r = e.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`;
}
function zp(e) {
  return new RegExp(`^${Fi(e)}$`);
}
function Gp(e) {
  let t = `${$i}T${Fi(e)}`,
    r = [];
  return (
    r.push(e.local ? "Z?" : "Z"),
    e.offset && r.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${r.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function Bp(e, t) {
  return !!(((t === "v4" || !t) && $p.test(e)) || ((t === "v6" || !t) && qp.test(e)));
}
function Zp(e, t) {
  if (!Np.test(e)) return !1;
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
function Hp(e, t) {
  return !!(((t === "v4" || !t) && Fp.test(e)) || ((t === "v6" || !t) && Up.test(e)));
}
var ra = class e extends W {
  _parse(t) {
    if ((this._def.coerce && (t.data = String(t.data)), this._getType(t) !== O.string)) {
      let s = this._getOrReturnCtx(t);
      return (A(s, { code: S.invalid_type, expected: O.string, received: s.parsedType }), V);
    }
    let a = new Ke(),
      n;
    for (let s of this._def.checks)
      if (s.kind === "min")
        t.data.length < s.value &&
          ((n = this._getOrReturnCtx(t, n)),
          A(n, {
            code: S.too_small,
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
          A(n, {
            code: S.too_big,
            maximum: s.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: s.message,
          }),
          a.dirty());
      else if (s.kind === "length") {
        let l = t.data.length > s.value,
          i = t.data.length < s.value;
        (l || i) &&
          ((n = this._getOrReturnCtx(t, n)),
          l
            ? A(n, {
                code: S.too_big,
                maximum: s.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: s.message,
              })
            : i &&
              A(n, {
                code: S.too_small,
                minimum: s.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: s.message,
              }),
          a.dirty());
      } else if (s.kind === "email")
        jp.test(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          A(n, { validation: "email", code: S.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === "emoji")
        (ps || (ps = new RegExp(Dp, "u")),
          ps.test(t.data) ||
            ((n = this._getOrReturnCtx(t, n)),
            A(n, { validation: "emoji", code: S.invalid_string, message: s.message }),
            a.dirty()));
      else if (s.kind === "uuid")
        Cp.test(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          A(n, { validation: "uuid", code: S.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === "nanoid")
        Op.test(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          A(n, { validation: "nanoid", code: S.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === "cuid")
        kp.test(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          A(n, { validation: "cuid", code: S.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === "cuid2")
        Rp.test(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          A(n, { validation: "cuid2", code: S.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === "ulid")
        Ap.test(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          A(n, { validation: "ulid", code: S.invalid_string, message: s.message }),
          a.dirty());
      else if (s.kind === "url")
        try {
          new URL(t.data);
        } catch {
          ((n = this._getOrReturnCtx(t, n)),
            A(n, { validation: "url", code: S.invalid_string, message: s.message }),
            a.dirty());
        }
      else
        s.kind === "regex"
          ? ((s.regex.lastIndex = 0),
            s.regex.test(t.data) ||
              ((n = this._getOrReturnCtx(t, n)),
              A(n, { validation: "regex", code: S.invalid_string, message: s.message }),
              a.dirty()))
          : s.kind === "trim"
            ? (t.data = t.data.trim())
            : s.kind === "includes"
              ? t.data.includes(s.value, s.position) ||
                ((n = this._getOrReturnCtx(t, n)),
                A(n, {
                  code: S.invalid_string,
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
                      A(n, {
                        code: S.invalid_string,
                        validation: { startsWith: s.value },
                        message: s.message,
                      }),
                      a.dirty())
                    : s.kind === "endsWith"
                      ? t.data.endsWith(s.value) ||
                        ((n = this._getOrReturnCtx(t, n)),
                        A(n, {
                          code: S.invalid_string,
                          validation: { endsWith: s.value },
                          message: s.message,
                        }),
                        a.dirty())
                      : s.kind === "datetime"
                        ? Gp(s).test(t.data) ||
                          ((n = this._getOrReturnCtx(t, n)),
                          A(n, {
                            code: S.invalid_string,
                            validation: "datetime",
                            message: s.message,
                          }),
                          a.dirty())
                        : s.kind === "date"
                          ? Jp.test(t.data) ||
                            ((n = this._getOrReturnCtx(t, n)),
                            A(n, {
                              code: S.invalid_string,
                              validation: "date",
                              message: s.message,
                            }),
                            a.dirty())
                          : s.kind === "time"
                            ? zp(s).test(t.data) ||
                              ((n = this._getOrReturnCtx(t, n)),
                              A(n, {
                                code: S.invalid_string,
                                validation: "time",
                                message: s.message,
                              }),
                              a.dirty())
                            : s.kind === "duration"
                              ? Pp.test(t.data) ||
                                ((n = this._getOrReturnCtx(t, n)),
                                A(n, {
                                  validation: "duration",
                                  code: S.invalid_string,
                                  message: s.message,
                                }),
                                a.dirty())
                              : s.kind === "ip"
                                ? Bp(t.data, s.version) ||
                                  ((n = this._getOrReturnCtx(t, n)),
                                  A(n, {
                                    validation: "ip",
                                    code: S.invalid_string,
                                    message: s.message,
                                  }),
                                  a.dirty())
                                : s.kind === "jwt"
                                  ? Zp(t.data, s.alg) ||
                                    ((n = this._getOrReturnCtx(t, n)),
                                    A(n, {
                                      validation: "jwt",
                                      code: S.invalid_string,
                                      message: s.message,
                                    }),
                                    a.dirty())
                                  : s.kind === "cidr"
                                    ? Hp(t.data, s.version) ||
                                      ((n = this._getOrReturnCtx(t, n)),
                                      A(n, {
                                        validation: "cidr",
                                        code: S.invalid_string,
                                        message: s.message,
                                      }),
                                      a.dirty())
                                    : s.kind === "base64"
                                      ? Vp.test(t.data) ||
                                        ((n = this._getOrReturnCtx(t, n)),
                                        A(n, {
                                          validation: "base64",
                                          code: S.invalid_string,
                                          message: s.message,
                                        }),
                                        a.dirty())
                                      : s.kind === "base64url"
                                        ? Lp.test(t.data) ||
                                          ((n = this._getOrReturnCtx(t, n)),
                                          A(n, {
                                            validation: "base64url",
                                            code: S.invalid_string,
                                            message: s.message,
                                          }),
                                          a.dirty())
                                        : K.assertNever(s);
    return { status: a.value, value: t.data };
  }
  _regex(t, r, a) {
    return this.refinement((n) => t.test(n), {
      validation: r,
      code: S.invalid_string,
      ...P.errToObj(a),
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...P.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...P.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...P.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...P.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...P.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...P.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...P.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...P.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...P.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: "base64url", ...P.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...P.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...P.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...P.errToObj(t) });
  }
  datetime(t) {
    return typeof t == "string"
      ? this._addCheck({ kind: "datetime", precision: null, offset: !1, local: !1, message: t })
      : this._addCheck({
          kind: "datetime",
          precision: typeof t?.precision > "u" ? null : t?.precision,
          offset: t?.offset ?? !1,
          local: t?.local ?? !1,
          ...P.errToObj(t?.message),
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
          ...P.errToObj(t?.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...P.errToObj(t) });
  }
  regex(t, r) {
    return this._addCheck({ kind: "regex", regex: t, ...P.errToObj(r) });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r?.position,
      ...P.errToObj(r?.message),
    });
  }
  startsWith(t, r) {
    return this._addCheck({ kind: "startsWith", value: t, ...P.errToObj(r) });
  }
  endsWith(t, r) {
    return this._addCheck({ kind: "endsWith", value: t, ...P.errToObj(r) });
  }
  min(t, r) {
    return this._addCheck({ kind: "min", value: t, ...P.errToObj(r) });
  }
  max(t, r) {
    return this._addCheck({ kind: "max", value: t, ...P.errToObj(r) });
  }
  length(t, r) {
    return this._addCheck({ kind: "length", value: t, ...P.errToObj(r) });
  }
  nonempty(t) {
    return this.min(1, P.errToObj(t));
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
ra.create = (e) => new ra({ checks: [], typeName: E.ZodString, coerce: e?.coerce ?? !1, ...z(e) });
function Wp(e, t) {
  let r = (e.toString().split(".")[1] || "").length,
    a = (t.toString().split(".")[1] || "").length,
    n = r > a ? r : a,
    s = Number.parseInt(e.toFixed(n).replace(".", "")),
    l = Number.parseInt(t.toFixed(n).replace(".", ""));
  return (s % l) / 10 ** n;
}
var Ja = class e extends W {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(t) {
    if ((this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== O.number)) {
      let s = this._getOrReturnCtx(t);
      return (A(s, { code: S.invalid_type, expected: O.number, received: s.parsedType }), V);
    }
    let a,
      n = new Ke();
    for (let s of this._def.checks)
      s.kind === "int"
        ? K.isInteger(t.data) ||
          ((a = this._getOrReturnCtx(t, a)),
          A(a, {
            code: S.invalid_type,
            expected: "integer",
            received: "float",
            message: s.message,
          }),
          n.dirty())
        : s.kind === "min"
          ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
            ((a = this._getOrReturnCtx(t, a)),
            A(a, {
              code: S.too_small,
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
              A(a, {
                code: S.too_big,
                maximum: s.value,
                type: "number",
                inclusive: s.inclusive,
                exact: !1,
                message: s.message,
              }),
              n.dirty())
            : s.kind === "multipleOf"
              ? Wp(t.data, s.value) !== 0 &&
                ((a = this._getOrReturnCtx(t, a)),
                A(a, { code: S.not_multiple_of, multipleOf: s.value, message: s.message }),
                n.dirty())
              : s.kind === "finite"
                ? Number.isFinite(t.data) ||
                  ((a = this._getOrReturnCtx(t, a)),
                  A(a, { code: S.not_finite, message: s.message }),
                  n.dirty())
                : K.assertNever(s);
    return { status: n.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, P.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, P.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, P.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, P.toString(r));
  }
  setLimit(t, r, a, n) {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: r, inclusive: a, message: P.toString(n) }],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: P.toString(t) });
  }
  positive(t) {
    return this._addCheck({ kind: "min", value: 0, inclusive: !1, message: P.toString(t) });
  }
  negative(t) {
    return this._addCheck({ kind: "max", value: 0, inclusive: !1, message: P.toString(t) });
  }
  nonpositive(t) {
    return this._addCheck({ kind: "max", value: 0, inclusive: !0, message: P.toString(t) });
  }
  nonnegative(t) {
    return this._addCheck({ kind: "min", value: 0, inclusive: !0, message: P.toString(t) });
  }
  multipleOf(t, r) {
    return this._addCheck({ kind: "multipleOf", value: t, message: P.toString(r) });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: P.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: P.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: P.toString(t),
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
      (t) => t.kind === "int" || (t.kind === "multipleOf" && K.isInteger(t.value))
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
Ja.create = (e) => new Ja({ checks: [], typeName: E.ZodNumber, coerce: e?.coerce || !1, ...z(e) });
var za = class e extends W {
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
    if (this._getType(t) !== O.bigint) return this._getInvalidInput(t);
    let a,
      n = new Ke();
    for (let s of this._def.checks)
      s.kind === "min"
        ? (s.inclusive ? t.data < s.value : t.data <= s.value) &&
          ((a = this._getOrReturnCtx(t, a)),
          A(a, {
            code: S.too_small,
            type: "bigint",
            minimum: s.value,
            inclusive: s.inclusive,
            message: s.message,
          }),
          n.dirty())
        : s.kind === "max"
          ? (s.inclusive ? t.data > s.value : t.data >= s.value) &&
            ((a = this._getOrReturnCtx(t, a)),
            A(a, {
              code: S.too_big,
              type: "bigint",
              maximum: s.value,
              inclusive: s.inclusive,
              message: s.message,
            }),
            n.dirty())
          : s.kind === "multipleOf"
            ? t.data % s.value !== BigInt(0) &&
              ((a = this._getOrReturnCtx(t, a)),
              A(a, { code: S.not_multiple_of, multipleOf: s.value, message: s.message }),
              n.dirty())
            : K.assertNever(s);
    return { status: n.value, value: t.data };
  }
  _getInvalidInput(t) {
    let r = this._getOrReturnCtx(t);
    return (A(r, { code: S.invalid_type, expected: O.bigint, received: r.parsedType }), V);
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, P.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, P.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, P.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, P.toString(r));
  }
  setLimit(t, r, a, n) {
    return new e({
      ...this._def,
      checks: [...this._def.checks, { kind: t, value: r, inclusive: a, message: P.toString(n) }],
    });
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !1, message: P.toString(t) });
  }
  negative(t) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !1, message: P.toString(t) });
  }
  nonpositive(t) {
    return this._addCheck({ kind: "max", value: BigInt(0), inclusive: !0, message: P.toString(t) });
  }
  nonnegative(t) {
    return this._addCheck({ kind: "min", value: BigInt(0), inclusive: !0, message: P.toString(t) });
  }
  multipleOf(t, r) {
    return this._addCheck({ kind: "multipleOf", value: t, message: P.toString(r) });
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
za.create = (e) => new za({ checks: [], typeName: E.ZodBigInt, coerce: e?.coerce ?? !1, ...z(e) });
var Ga = class extends W {
  _parse(t) {
    if ((this._def.coerce && (t.data = !!t.data), this._getType(t) !== O.boolean)) {
      let a = this._getOrReturnCtx(t);
      return (A(a, { code: S.invalid_type, expected: O.boolean, received: a.parsedType }), V);
    }
    return rt(t.data);
  }
};
Ga.create = (e) => new Ga({ typeName: E.ZodBoolean, coerce: e?.coerce || !1, ...z(e) });
var Ba = class e extends W {
  _parse(t) {
    if ((this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== O.date)) {
      let s = this._getOrReturnCtx(t);
      return (A(s, { code: S.invalid_type, expected: O.date, received: s.parsedType }), V);
    }
    if (Number.isNaN(t.data.getTime())) {
      let s = this._getOrReturnCtx(t);
      return (A(s, { code: S.invalid_date }), V);
    }
    let a = new Ke(),
      n;
    for (let s of this._def.checks)
      s.kind === "min"
        ? t.data.getTime() < s.value &&
          ((n = this._getOrReturnCtx(t, n)),
          A(n, {
            code: S.too_small,
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
            A(n, {
              code: S.too_big,
              message: s.message,
              inclusive: !0,
              exact: !1,
              maximum: s.value,
              type: "date",
            }),
            a.dirty())
          : K.assertNever(s);
    return { status: a.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new e({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, r) {
    return this._addCheck({ kind: "min", value: t.getTime(), message: P.toString(r) });
  }
  max(t, r) {
    return this._addCheck({ kind: "max", value: t.getTime(), message: P.toString(r) });
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
Ba.create = (e) => new Ba({ checks: [], coerce: e?.coerce || !1, typeName: E.ZodDate, ...z(e) });
var Za = class extends W {
  _parse(t) {
    if (this._getType(t) !== O.symbol) {
      let a = this._getOrReturnCtx(t);
      return (A(a, { code: S.invalid_type, expected: O.symbol, received: a.parsedType }), V);
    }
    return rt(t.data);
  }
};
Za.create = (e) => new Za({ typeName: E.ZodSymbol, ...z(e) });
var aa = class extends W {
  _parse(t) {
    if (this._getType(t) !== O.undefined) {
      let a = this._getOrReturnCtx(t);
      return (A(a, { code: S.invalid_type, expected: O.undefined, received: a.parsedType }), V);
    }
    return rt(t.data);
  }
};
aa.create = (e) => new aa({ typeName: E.ZodUndefined, ...z(e) });
var na = class extends W {
  _parse(t) {
    if (this._getType(t) !== O.null) {
      let a = this._getOrReturnCtx(t);
      return (A(a, { code: S.invalid_type, expected: O.null, received: a.parsedType }), V);
    }
    return rt(t.data);
  }
};
na.create = (e) => new na({ typeName: E.ZodNull, ...z(e) });
var Ha = class extends W {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(t) {
    return rt(t.data);
  }
};
Ha.create = (e) => new Ha({ typeName: E.ZodAny, ...z(e) });
var Tr = class extends W {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(t) {
    return rt(t.data);
  }
};
Tr.create = (e) => new Tr({ typeName: E.ZodUnknown, ...z(e) });
var Ht = class extends W {
  _parse(t) {
    let r = this._getOrReturnCtx(t);
    return (A(r, { code: S.invalid_type, expected: O.never, received: r.parsedType }), V);
  }
};
Ht.create = (e) => new Ht({ typeName: E.ZodNever, ...z(e) });
var Wa = class extends W {
  _parse(t) {
    if (this._getType(t) !== O.undefined) {
      let a = this._getOrReturnCtx(t);
      return (A(a, { code: S.invalid_type, expected: O.void, received: a.parsedType }), V);
    }
    return rt(t.data);
  }
};
Wa.create = (e) => new Wa({ typeName: E.ZodVoid, ...z(e) });
var xr = class e extends W {
  _parse(t) {
    let { ctx: r, status: a } = this._processInputParams(t),
      n = this._def;
    if (r.parsedType !== O.array)
      return (A(r, { code: S.invalid_type, expected: O.array, received: r.parsedType }), V);
    if (n.exactLength !== null) {
      let l = r.data.length > n.exactLength.value,
        i = r.data.length < n.exactLength.value;
      (l || i) &&
        (A(r, {
          code: l ? S.too_big : S.too_small,
          minimum: i ? n.exactLength.value : void 0,
          maximum: l ? n.exactLength.value : void 0,
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
        (A(r, {
          code: S.too_small,
          minimum: n.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: n.minLength.message,
        }),
        a.dirty()),
      n.maxLength !== null &&
        r.data.length > n.maxLength.value &&
        (A(r, {
          code: S.too_big,
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
        [...r.data].map((l, i) => n.type._parseAsync(new It(r, l, r.path, i)))
      ).then((l) => Ke.mergeArray(a, l));
    let s = [...r.data].map((l, i) => n.type._parseSync(new It(r, l, r.path, i)));
    return Ke.mergeArray(a, s);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new e({ ...this._def, minLength: { value: t, message: P.toString(r) } });
  }
  max(t, r) {
    return new e({ ...this._def, maxLength: { value: t, message: P.toString(r) } });
  }
  length(t, r) {
    return new e({ ...this._def, exactLength: { value: t, message: P.toString(r) } });
  }
  nonempty(t) {
    return this.min(1, t);
  }
};
xr.create = (e, t) =>
  new xr({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: E.ZodArray,
    ...z(t),
  });
function ta(e) {
  if (e instanceof bt) {
    let t = {};
    for (let r in e.shape) {
      let a = e.shape[r];
      t[r] = Nt.create(ta(a));
    }
    return new bt({ ...e._def, shape: () => t });
  } else
    return e instanceof xr
      ? new xr({ ...e._def, type: ta(e.element) })
      : e instanceof Nt
        ? Nt.create(ta(e.unwrap()))
        : e instanceof lr
          ? lr.create(ta(e.unwrap()))
          : e instanceof ir
            ? ir.create(e.items.map((t) => ta(t)))
            : e;
}
var bt = class e extends W {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    let t = this._def.shape(),
      r = K.objectKeys(t);
    return ((this._cached = { shape: t, keys: r }), this._cached);
  }
  _parse(t) {
    if (this._getType(t) !== O.object) {
      let u = this._getOrReturnCtx(t);
      return (A(u, { code: S.invalid_type, expected: O.object, received: u.parsedType }), V);
    }
    let { status: a, ctx: n } = this._processInputParams(t),
      { shape: s, keys: l } = this._getCached(),
      i = [];
    if (!(this._def.catchall instanceof Ht && this._def.unknownKeys === "strip"))
      for (let u in n.data) l.includes(u) || i.push(u);
    let d = [];
    for (let u of l) {
      let c = s[u],
        f = n.data[u];
      d.push({
        key: { status: "valid", value: u },
        value: c._parse(new It(n, f, n.path, u)),
        alwaysSet: u in n.data,
      });
    }
    if (this._def.catchall instanceof Ht) {
      let u = this._def.unknownKeys;
      if (u === "passthrough")
        for (let c of i)
          d.push({
            key: { status: "valid", value: c },
            value: { status: "valid", value: n.data[c] },
          });
      else if (u === "strict")
        i.length > 0 && (A(n, { code: S.unrecognized_keys, keys: i }), a.dirty());
      else if (u !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      let u = this._def.catchall;
      for (let c of i) {
        let f = n.data[c];
        d.push({
          key: { status: "valid", value: c },
          value: u._parse(new It(n, f, n.path, c)),
          alwaysSet: c in n.data,
        });
      }
    }
    return n.common.async
      ? Promise.resolve()
          .then(async () => {
            let u = [];
            for (let c of d) {
              let f = await c.key,
                p = await c.value;
              u.push({ key: f, value: p, alwaysSet: c.alwaysSet });
            }
            return u;
          })
          .then((u) => Ke.mergeObjectSync(a, u))
      : Ke.mergeObjectSync(a, d);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      P.errToObj,
      new e({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (r, a) => {
                let n = this._def.errorMap?.(r, a).message ?? a.defaultError;
                return r.code === "unrecognized_keys"
                  ? { message: P.errToObj(t).message ?? n }
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
      typeName: E.ZodObject,
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
    for (let a of K.objectKeys(t)) t[a] && this.shape[a] && (r[a] = this.shape[a]);
    return new e({ ...this._def, shape: () => r });
  }
  omit(t) {
    let r = {};
    for (let a of K.objectKeys(this.shape)) t[a] || (r[a] = this.shape[a]);
    return new e({ ...this._def, shape: () => r });
  }
  deepPartial() {
    return ta(this);
  }
  partial(t) {
    let r = {};
    for (let a of K.objectKeys(this.shape)) {
      let n = this.shape[a];
      t && !t[a] ? (r[a] = n) : (r[a] = n.optional());
    }
    return new e({ ...this._def, shape: () => r });
  }
  required(t) {
    let r = {};
    for (let a of K.objectKeys(this.shape))
      if (t && !t[a]) r[a] = this.shape[a];
      else {
        let s = this.shape[a];
        for (; s instanceof Nt;) s = s._def.innerType;
        r[a] = s;
      }
    return new e({ ...this._def, shape: () => r });
  }
  keyof() {
    return qi(K.objectKeys(this.shape));
  }
};
bt.create = (e, t) =>
  new bt({
    shape: () => e,
    unknownKeys: "strip",
    catchall: Ht.create(),
    typeName: E.ZodObject,
    ...z(t),
  });
bt.strictCreate = (e, t) =>
  new bt({
    shape: () => e,
    unknownKeys: "strict",
    catchall: Ht.create(),
    typeName: E.ZodObject,
    ...z(t),
  });
bt.lazycreate = (e, t) =>
  new bt({ shape: e, unknownKeys: "strip", catchall: Ht.create(), typeName: E.ZodObject, ...z(t) });
var sa = class extends W {
  _parse(t) {
    let { ctx: r } = this._processInputParams(t),
      a = this._def.options;
    function n(s) {
      for (let i of s) if (i.result.status === "valid") return i.result;
      for (let i of s)
        if (i.result.status === "dirty")
          return (r.common.issues.push(...i.ctx.common.issues), i.result);
      let l = s.map((i) => new yt(i.ctx.common.issues));
      return (A(r, { code: S.invalid_union, unionErrors: l }), V);
    }
    if (r.common.async)
      return Promise.all(
        a.map(async (s) => {
          let l = { ...r, common: { ...r.common, issues: [] }, parent: null };
          return { result: await s._parseAsync({ data: r.data, path: r.path, parent: l }), ctx: l };
        })
      ).then(n);
    {
      let s,
        l = [];
      for (let d of a) {
        let u = { ...r, common: { ...r.common, issues: [] }, parent: null },
          c = d._parseSync({ data: r.data, path: r.path, parent: u });
        if (c.status === "valid") return c;
        (c.status === "dirty" && !s && (s = { result: c, ctx: u }),
          u.common.issues.length && l.push(u.common.issues));
      }
      if (s) return (r.common.issues.push(...s.ctx.common.issues), s.result);
      let i = l.map((d) => new yt(d));
      return (A(r, { code: S.invalid_union, unionErrors: i }), V);
    }
  }
  get options() {
    return this._def.options;
  }
};
sa.create = (e, t) => new sa({ options: e, typeName: E.ZodUnion, ...z(t) });
var or = (e) =>
    e instanceof ia
      ? or(e.schema)
      : e instanceof Pt
        ? or(e.innerType())
        : e instanceof la
          ? [e.value]
          : e instanceof ua
            ? e.options
            : e instanceof da
              ? K.objectValues(e.enum)
              : e instanceof ca
                ? or(e._def.innerType)
                : e instanceof aa
                  ? [void 0]
                  : e instanceof na
                    ? [null]
                    : e instanceof Nt
                      ? [void 0, ...or(e.unwrap())]
                      : e instanceof lr
                        ? [null, ...or(e.unwrap())]
                        : e instanceof Tn || e instanceof fa
                          ? or(e.unwrap())
                          : e instanceof pa
                            ? or(e._def.innerType)
                            : [],
  fs = class e extends W {
    _parse(t) {
      let { ctx: r } = this._processInputParams(t);
      if (r.parsedType !== O.object)
        return (A(r, { code: S.invalid_type, expected: O.object, received: r.parsedType }), V);
      let a = this.discriminator,
        n = r.data[a],
        s = this.optionsMap.get(n);
      return s
        ? r.common.async
          ? s._parseAsync({ data: r.data, path: r.path, parent: r })
          : s._parseSync({ data: r.data, path: r.path, parent: r })
        : (A(r, {
            code: S.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [a],
          }),
          V);
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
        let l = or(s.shape[t]);
        if (!l.length)
          throw new Error(
            `A discriminator value for key \`${t}\` could not be extracted from all schema options`
          );
        for (let i of l) {
          if (n.has(i))
            throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
          n.set(i, s);
        }
      }
      return new e({
        typeName: E.ZodDiscriminatedUnion,
        discriminator: t,
        options: r,
        optionsMap: n,
        ...z(a),
      });
    }
  };
function ms(e, t) {
  let r = sr(e),
    a = sr(t);
  if (e === t) return { valid: !0, data: e };
  if (r === O.object && a === O.object) {
    let n = K.objectKeys(t),
      s = K.objectKeys(e).filter((i) => n.indexOf(i) !== -1),
      l = { ...e, ...t };
    for (let i of s) {
      let d = ms(e[i], t[i]);
      if (!d.valid) return { valid: !1 };
      l[i] = d.data;
    }
    return { valid: !0, data: l };
  } else if (r === O.array && a === O.array) {
    if (e.length !== t.length) return { valid: !1 };
    let n = [];
    for (let s = 0; s < e.length; s++) {
      let l = e[s],
        i = t[s],
        d = ms(l, i);
      if (!d.valid) return { valid: !1 };
      n.push(d.data);
    }
    return { valid: !0, data: n };
  } else return r === O.date && a === O.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
var oa = class extends W {
  _parse(t) {
    let { status: r, ctx: a } = this._processInputParams(t),
      n = (s, l) => {
        if (ds(s) || ds(l)) return V;
        let i = ms(s.value, l.value);
        return i.valid
          ? ((cs(s) || cs(l)) && r.dirty(), { status: r.value, value: i.data })
          : (A(a, { code: S.invalid_intersection_types }), V);
      };
    return a.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: a.data, path: a.path, parent: a }),
          this._def.right._parseAsync({ data: a.data, path: a.path, parent: a }),
        ]).then(([s, l]) => n(s, l))
      : n(
          this._def.left._parseSync({ data: a.data, path: a.path, parent: a }),
          this._def.right._parseSync({ data: a.data, path: a.path, parent: a })
        );
  }
};
oa.create = (e, t, r) => new oa({ left: e, right: t, typeName: E.ZodIntersection, ...z(r) });
var ir = class e extends W {
  _parse(t) {
    let { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== O.array)
      return (A(a, { code: S.invalid_type, expected: O.array, received: a.parsedType }), V);
    if (a.data.length < this._def.items.length)
      return (
        A(a, {
          code: S.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        V
      );
    !this._def.rest &&
      a.data.length > this._def.items.length &&
      (A(a, {
        code: S.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      r.dirty());
    let s = [...a.data]
      .map((l, i) => {
        let d = this._def.items[i] || this._def.rest;
        return d ? d._parse(new It(a, l, a.path, i)) : null;
      })
      .filter((l) => !!l);
    return a.common.async ? Promise.all(s).then((l) => Ke.mergeArray(r, l)) : Ke.mergeArray(r, s);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new e({ ...this._def, rest: t });
  }
};
ir.create = (e, t) => {
  if (!Array.isArray(e)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new ir({ items: e, typeName: E.ZodTuple, rest: null, ...z(t) });
};
var hs = class e extends W {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(t) {
      let { status: r, ctx: a } = this._processInputParams(t);
      if (a.parsedType !== O.object)
        return (A(a, { code: S.invalid_type, expected: O.object, received: a.parsedType }), V);
      let n = [],
        s = this._def.keyType,
        l = this._def.valueType;
      for (let i in a.data)
        n.push({
          key: s._parse(new It(a, i, a.path, i)),
          value: l._parse(new It(a, a.data[i], a.path, i)),
          alwaysSet: i in a.data,
        });
      return a.common.async ? Ke.mergeObjectAsync(r, n) : Ke.mergeObjectSync(r, n);
    }
    get element() {
      return this._def.valueType;
    }
    static create(t, r, a) {
      return r instanceof W
        ? new e({ keyType: t, valueType: r, typeName: E.ZodRecord, ...z(a) })
        : new e({ keyType: ra.create(), valueType: t, typeName: E.ZodRecord, ...z(r) });
    }
  },
  Ka = class extends W {
    get keySchema() {
      return this._def.keyType;
    }
    get valueSchema() {
      return this._def.valueType;
    }
    _parse(t) {
      let { status: r, ctx: a } = this._processInputParams(t);
      if (a.parsedType !== O.map)
        return (A(a, { code: S.invalid_type, expected: O.map, received: a.parsedType }), V);
      let n = this._def.keyType,
        s = this._def.valueType,
        l = [...a.data.entries()].map(([i, d], u) => ({
          key: n._parse(new It(a, i, a.path, [u, "key"])),
          value: s._parse(new It(a, d, a.path, [u, "value"])),
        }));
      if (a.common.async) {
        let i = new Map();
        return Promise.resolve().then(async () => {
          for (let d of l) {
            let u = await d.key,
              c = await d.value;
            if (u.status === "aborted" || c.status === "aborted") return V;
            ((u.status === "dirty" || c.status === "dirty") && r.dirty(), i.set(u.value, c.value));
          }
          return { status: r.value, value: i };
        });
      } else {
        let i = new Map();
        for (let d of l) {
          let u = d.key,
            c = d.value;
          if (u.status === "aborted" || c.status === "aborted") return V;
          ((u.status === "dirty" || c.status === "dirty") && r.dirty(), i.set(u.value, c.value));
        }
        return { status: r.value, value: i };
      }
    }
  };
Ka.create = (e, t, r) => new Ka({ valueType: t, keyType: e, typeName: E.ZodMap, ...z(r) });
var Ya = class e extends W {
  _parse(t) {
    let { status: r, ctx: a } = this._processInputParams(t);
    if (a.parsedType !== O.set)
      return (A(a, { code: S.invalid_type, expected: O.set, received: a.parsedType }), V);
    let n = this._def;
    (n.minSize !== null &&
      a.data.size < n.minSize.value &&
      (A(a, {
        code: S.too_small,
        minimum: n.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: n.minSize.message,
      }),
      r.dirty()),
      n.maxSize !== null &&
        a.data.size > n.maxSize.value &&
        (A(a, {
          code: S.too_big,
          maximum: n.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: n.maxSize.message,
        }),
        r.dirty()));
    let s = this._def.valueType;
    function l(d) {
      let u = new Set();
      for (let c of d) {
        if (c.status === "aborted") return V;
        (c.status === "dirty" && r.dirty(), u.add(c.value));
      }
      return { status: r.value, value: u };
    }
    let i = [...a.data.values()].map((d, u) => s._parse(new It(a, d, a.path, u)));
    return a.common.async ? Promise.all(i).then((d) => l(d)) : l(i);
  }
  min(t, r) {
    return new e({ ...this._def, minSize: { value: t, message: P.toString(r) } });
  }
  max(t, r) {
    return new e({ ...this._def, maxSize: { value: t, message: P.toString(r) } });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
};
Ya.create = (e, t) =>
  new Ya({ valueType: e, minSize: null, maxSize: null, typeName: E.ZodSet, ...z(t) });
var gs = class e extends W {
    constructor() {
      (super(...arguments), (this.validate = this.implement));
    }
    _parse(t) {
      let { ctx: r } = this._processInputParams(t);
      if (r.parsedType !== O.function)
        return (A(r, { code: S.invalid_type, expected: O.function, received: r.parsedType }), V);
      function a(i, d) {
        return _n({
          data: i,
          path: r.path,
          errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Va(), _r].filter((u) => !!u),
          issueData: { code: S.invalid_arguments, argumentsError: d },
        });
      }
      function n(i, d) {
        return _n({
          data: i,
          path: r.path,
          errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, Va(), _r].filter((u) => !!u),
          issueData: { code: S.invalid_return_type, returnTypeError: d },
        });
      }
      let s = { errorMap: r.common.contextualErrorMap },
        l = r.data;
      if (this._def.returns instanceof Pr) {
        let i = this;
        return rt(async function (...d) {
          let u = new yt([]),
            c = await i._def.args.parseAsync(d, s).catch((w) => {
              throw (u.addIssue(a(d, w)), u);
            }),
            f = await Reflect.apply(l, this, c);
          return await i._def.returns._def.type.parseAsync(f, s).catch((w) => {
            throw (u.addIssue(n(f, w)), u);
          });
        });
      } else {
        let i = this;
        return rt(function (...d) {
          let u = i._def.args.safeParse(d, s);
          if (!u.success) throw new yt([a(d, u.error)]);
          let c = Reflect.apply(l, this, u.data),
            f = i._def.returns.safeParse(c, s);
          if (!f.success) throw new yt([n(c, f.error)]);
          return f.data;
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
      return new e({ ...this._def, args: ir.create(t).rest(Tr.create()) });
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
        args: t || ir.create([]).rest(Tr.create()),
        returns: r || Tr.create(),
        typeName: E.ZodFunction,
        ...z(a),
      });
    }
  },
  ia = class extends W {
    get schema() {
      return this._def.getter();
    }
    _parse(t) {
      let { ctx: r } = this._processInputParams(t);
      return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
    }
  };
ia.create = (e, t) => new ia({ getter: e, typeName: E.ZodLazy, ...z(t) });
var la = class extends W {
  _parse(t) {
    if (t.data !== this._def.value) {
      let r = this._getOrReturnCtx(t);
      return (A(r, { received: r.data, code: S.invalid_literal, expected: this._def.value }), V);
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
};
la.create = (e, t) => new la({ value: e, typeName: E.ZodLiteral, ...z(t) });
function qi(e, t) {
  return new ua({ values: e, typeName: E.ZodEnum, ...z(t) });
}
var ua = class e extends W {
  _parse(t) {
    if (typeof t.data != "string") {
      let r = this._getOrReturnCtx(t),
        a = this._def.values;
      return (A(r, { expected: K.joinValues(a), received: r.parsedType, code: S.invalid_type }), V);
    }
    if ((this._cache || (this._cache = new Set(this._def.values)), !this._cache.has(t.data))) {
      let r = this._getOrReturnCtx(t),
        a = this._def.values;
      return (A(r, { received: r.data, code: S.invalid_enum_value, options: a }), V);
    }
    return rt(t.data);
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
ua.create = qi;
var da = class extends W {
  _parse(t) {
    let r = K.getValidEnumValues(this._def.values),
      a = this._getOrReturnCtx(t);
    if (a.parsedType !== O.string && a.parsedType !== O.number) {
      let n = K.objectValues(r);
      return (A(a, { expected: K.joinValues(n), received: a.parsedType, code: S.invalid_type }), V);
    }
    if (
      (this._cache || (this._cache = new Set(K.getValidEnumValues(this._def.values))),
      !this._cache.has(t.data))
    ) {
      let n = K.objectValues(r);
      return (A(a, { received: a.data, code: S.invalid_enum_value, options: n }), V);
    }
    return rt(t.data);
  }
  get enum() {
    return this._def.values;
  }
};
da.create = (e, t) => new da({ values: e, typeName: E.ZodNativeEnum, ...z(t) });
var Pr = class extends W {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    let { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== O.promise && r.common.async === !1)
      return (A(r, { code: S.invalid_type, expected: O.promise, received: r.parsedType }), V);
    let a = r.parsedType === O.promise ? r.data : Promise.resolve(r.data);
    return rt(
      a.then((n) =>
        this._def.type.parseAsync(n, { path: r.path, errorMap: r.common.contextualErrorMap })
      )
    );
  }
};
Pr.create = (e, t) => new Pr({ type: e, typeName: E.ZodPromise, ...z(t) });
var Pt = class extends W {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === E.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    let { status: r, ctx: a } = this._processInputParams(t),
      n = this._def.effect || null,
      s = {
        addIssue: (l) => {
          (A(a, l), l.fatal ? r.abort() : r.dirty());
        },
        get path() {
          return a.path;
        },
      };
    if (((s.addIssue = s.addIssue.bind(s)), n.type === "preprocess")) {
      let l = n.transform(a.data, s);
      if (a.common.async)
        return Promise.resolve(l).then(async (i) => {
          if (r.value === "aborted") return V;
          let d = await this._def.schema._parseAsync({ data: i, path: a.path, parent: a });
          return d.status === "aborted"
            ? V
            : d.status === "dirty"
              ? ea(d.value)
              : r.value === "dirty"
                ? ea(d.value)
                : d;
        });
      {
        if (r.value === "aborted") return V;
        let i = this._def.schema._parseSync({ data: l, path: a.path, parent: a });
        return i.status === "aborted"
          ? V
          : i.status === "dirty"
            ? ea(i.value)
            : r.value === "dirty"
              ? ea(i.value)
              : i;
      }
    }
    if (n.type === "refinement") {
      let l = (i) => {
        let d = n.refinement(i, s);
        if (a.common.async) return Promise.resolve(d);
        if (d instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return i;
      };
      if (a.common.async === !1) {
        let i = this._def.schema._parseSync({ data: a.data, path: a.path, parent: a });
        return i.status === "aborted"
          ? V
          : (i.status === "dirty" && r.dirty(), l(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema
          ._parseAsync({ data: a.data, path: a.path, parent: a })
          .then((i) =>
            i.status === "aborted"
              ? V
              : (i.status === "dirty" && r.dirty(),
                l(i.value).then(() => ({ status: r.value, value: i.value })))
          );
    }
    if (n.type === "transform")
      if (a.common.async === !1) {
        let l = this._def.schema._parseSync({ data: a.data, path: a.path, parent: a });
        if (!Nr(l)) return V;
        let i = n.transform(l.value, s);
        if (i instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: r.value, value: i };
      } else
        return this._def.schema
          ._parseAsync({ data: a.data, path: a.path, parent: a })
          .then((l) =>
            Nr(l)
              ? Promise.resolve(n.transform(l.value, s)).then((i) => ({
                  status: r.value,
                  value: i,
                }))
              : V
          );
    K.assertNever(n);
  }
};
Pt.create = (e, t, r) => new Pt({ schema: e, typeName: E.ZodEffects, effect: t, ...z(r) });
Pt.createWithPreprocess = (e, t, r) =>
  new Pt({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: E.ZodEffects,
    ...z(r),
  });
var Nt = class extends W {
  _parse(t) {
    return this._getType(t) === O.undefined ? rt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
};
Nt.create = (e, t) => new Nt({ innerType: e, typeName: E.ZodOptional, ...z(t) });
var lr = class extends W {
  _parse(t) {
    return this._getType(t) === O.null ? rt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
};
lr.create = (e, t) => new lr({ innerType: e, typeName: E.ZodNullable, ...z(t) });
var ca = class extends W {
  _parse(t) {
    let { ctx: r } = this._processInputParams(t),
      a = r.data;
    return (
      r.parsedType === O.undefined && (a = this._def.defaultValue()),
      this._def.innerType._parse({ data: a, path: r.path, parent: r })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ca.create = (e, t) =>
  new ca({
    innerType: e,
    typeName: E.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...z(t),
  });
var pa = class extends W {
  _parse(t) {
    let { ctx: r } = this._processInputParams(t),
      a = { ...r, common: { ...r.common, issues: [] } },
      n = this._def.innerType._parse({ data: a.data, path: a.path, parent: { ...a } });
    return La(n)
      ? n.then((s) => ({
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new yt(a.common.issues);
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
                    return new yt(a.common.issues);
                  },
                  input: a.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
};
pa.create = (e, t) =>
  new pa({
    innerType: e,
    typeName: E.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...z(t),
  });
var Xa = class extends W {
  _parse(t) {
    if (this._getType(t) !== O.nan) {
      let a = this._getOrReturnCtx(t);
      return (A(a, { code: S.invalid_type, expected: O.nan, received: a.parsedType }), V);
    }
    return { status: "valid", value: t.data };
  }
};
Xa.create = (e) => new Xa({ typeName: E.ZodNaN, ...z(e) });
var Tn = class extends W {
    _parse(t) {
      let { ctx: r } = this._processInputParams(t),
        a = r.data;
      return this._def.type._parse({ data: a, path: r.path, parent: r });
    }
    unwrap() {
      return this._def.type;
    }
  },
  xn = class e extends W {
    _parse(t) {
      let { status: r, ctx: a } = this._processInputParams(t);
      if (a.common.async)
        return (async () => {
          let s = await this._def.in._parseAsync({ data: a.data, path: a.path, parent: a });
          return s.status === "aborted"
            ? V
            : s.status === "dirty"
              ? (r.dirty(), ea(s.value))
              : this._def.out._parseAsync({ data: s.value, path: a.path, parent: a });
        })();
      {
        let n = this._def.in._parseSync({ data: a.data, path: a.path, parent: a });
        return n.status === "aborted"
          ? V
          : n.status === "dirty"
            ? (r.dirty(), { status: "dirty", value: n.value })
            : this._def.out._parseSync({ data: n.value, path: a.path, parent: a });
      }
    }
    static create(t, r) {
      return new e({ in: t, out: r, typeName: E.ZodPipeline });
    }
  },
  fa = class extends W {
    _parse(t) {
      let r = this._def.innerType._parse(t),
        a = (n) => (Nr(n) && (n.value = Object.freeze(n.value)), n);
      return La(r) ? r.then((n) => a(n)) : a(r);
    }
    unwrap() {
      return this._def.innerType;
    }
  };
fa.create = (e, t) => new fa({ innerType: e, typeName: E.ZodReadonly, ...z(t) });
var ab = { object: bt.lazycreate },
  E;
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
})(E || (E = {}));
var nb = ra.create,
  sb = Ja.create,
  ob = Xa.create,
  ib = za.create,
  lb = Ga.create,
  ub = Ba.create,
  db = Za.create,
  cb = aa.create,
  pb = na.create,
  fb = Ha.create,
  mb = Tr.create,
  hb = Ht.create,
  gb = Wa.create,
  vb = xr.create,
  yb = bt.create,
  bb = bt.strictCreate,
  wb = sa.create,
  _b = fs.create,
  Tb = oa.create,
  xb = ir.create,
  Ib = hs.create,
  Sb = Ka.create,
  Eb = Ya.create,
  Mb = gs.create,
  kb = ia.create,
  Rb = la.create,
  Ab = ua.create,
  Cb = da.create,
  Ob = Pr.create,
  Nb = Pt.create,
  Pb = Nt.create,
  jb = lr.create,
  Db = Pt.createWithPreprocess,
  $b = xn.create;
var In = class extends Error {
    constructor(t, r) {
      (super(t),
        (this.name = "ParseError"),
        (this.type = r.type),
        (this.field = r.field),
        (this.value = r.value),
        (this.line = r.line));
    }
  },
  Ui = 10,
  Yp = 13,
  jr = 32;
function vs(e) {}
function Ji(e) {
  if (typeof e == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  let { onEvent: t = vs, onError: r = vs, onRetry: a = vs, onComment: n } = e,
    s = [],
    l = !0,
    i,
    d = "",
    u = 0,
    c;
  function f(g) {
    if (
      (l &&
        ((l = !1),
        g.charCodeAt(0) === 239 &&
          g.charCodeAt(1) === 187 &&
          g.charCodeAt(2) === 191 &&
          (g = g.slice(3))),
      s.length === 0)
    ) {
      let M = p(g);
      M !== "" && s.push(M);
      return;
    }
    if (
      g.indexOf(`
`) === -1 &&
      g.indexOf("\r") === -1
    ) {
      s.push(g);
      return;
    }
    s.push(g);
    let y = s.join("");
    s.length = 0;
    let m = p(y);
    m !== "" && s.push(m);
  }
  function p(g) {
    let y = 0;
    if (g.indexOf("\r") === -1) {
      let m = g.indexOf(
        `
`,
        y
      );
      for (; m !== -1;) {
        if (y === m) {
          (u > 0 && t({ id: i, event: c, data: d }),
            (i = void 0),
            (d = ""),
            (u = 0),
            (c = void 0),
            (y = m + 1),
            (m = g.indexOf(
              `
`,
              y
            )));
          continue;
        }
        let M = g.charCodeAt(y);
        if (Vi(g, y, M)) {
          let T = g.charCodeAt(y + 5) === jr ? y + 6 : y + 5,
            _ = g.slice(T, m);
          if (u === 0 && g.charCodeAt(m + 1) === Ui) {
            (t({ id: i, event: c, data: _ }),
              (i = void 0),
              (d = ""),
              (c = void 0),
              (y = m + 2),
              (m = g.indexOf(
                `
`,
                y
              )));
            continue;
          }
          ((d =
            u === 0
              ? _
              : `${d}
${_}`),
            u++);
        } else
          Li(g, y, M)
            ? (c = g.slice(g.charCodeAt(y + 6) === jr ? y + 7 : y + 6, m) || void 0)
            : w(g, y, m);
        ((y = m + 1),
          (m = g.indexOf(
            `
`,
            y
          )));
      }
      return g.slice(y);
    }
    for (; y < g.length;) {
      let m = g.indexOf("\r", y),
        M = g.indexOf(
          `
`,
          y
        ),
        T = -1;
      if (
        (m !== -1 && M !== -1
          ? (T = m < M ? m : M)
          : m !== -1
            ? m === g.length - 1
              ? (T = -1)
              : (T = m)
            : M !== -1 && (T = M),
        T === -1)
      )
        break;
      (w(g, y, T), (y = T + 1), g.charCodeAt(y - 1) === Yp && g.charCodeAt(y) === Ui && y++);
    }
    return g.slice(y);
  }
  function w(g, y, m) {
    if (y === m) {
      b();
      return;
    }
    let M = g.charCodeAt(y);
    if (Vi(g, y, M)) {
      let F = g.charCodeAt(y + 5) === jr ? y + 6 : y + 5,
        k = g.slice(F, m);
      ((d =
        u === 0
          ? k
          : `${d}
${k}`),
        u++);
      return;
    }
    if (Li(g, y, M)) {
      c = g.slice(g.charCodeAt(y + 6) === jr ? y + 7 : y + 6, m) || void 0;
      return;
    }
    if (M === 105 && g.charCodeAt(y + 1) === 100 && g.charCodeAt(y + 2) === 58) {
      let F = g.slice(g.charCodeAt(y + 3) === jr ? y + 4 : y + 3, m);
      i = F.includes("\0") ? void 0 : F;
      return;
    }
    if (M === 58) {
      if (n) {
        let F = g.slice(y, m);
        n(F.slice(g.charCodeAt(y + 1) === jr ? 2 : 1));
      }
      return;
    }
    let T = g.slice(y, m),
      _ = T.indexOf(":");
    if (_ === -1) {
      h(T, "", T);
      return;
    }
    let C = T.slice(0, _),
      x = T.charCodeAt(_ + 1) === jr ? 2 : 1,
      N = T.slice(_ + x);
    h(C, N, T);
  }
  function h(g, y, m) {
    switch (g) {
      case "event":
        c = y || void 0;
        break;
      case "data":
        ((d =
          u === 0
            ? y
            : `${d}
${y}`),
          u++);
        break;
      case "id":
        i = y.includes("\0") ? void 0 : y;
        break;
      case "retry":
        /^\d+$/.test(y)
          ? a(parseInt(y, 10))
          : r(
              new In(`Invalid \`retry\` value: "${y}"`, {
                type: "invalid-retry",
                value: y,
                line: m,
              })
            );
        break;
      default:
        r(
          new In(`Unknown field "${g.length > 20 ? `${g.slice(0, 20)}\u2026` : g}"`, {
            type: "unknown-field",
            field: g,
            value: y,
            line: m,
          })
        );
        break;
    }
  }
  function b() {
    (u > 0 && t({ id: i, event: c, data: d }), (i = void 0), (d = ""), (u = 0), (c = void 0));
  }
  function v(g = {}) {
    if (g.consume && s.length > 0) {
      let y = s.join("");
      w(y, 0, y.length);
    }
    ((l = !0), (i = void 0), (d = ""), (u = 0), (c = void 0), (s.length = 0));
  }
  return { feed: f, reset: v };
}
function Vi(e, t, r) {
  return (
    r === 100 &&
    e.charCodeAt(t + 1) === 97 &&
    e.charCodeAt(t + 2) === 116 &&
    e.charCodeAt(t + 3) === 97 &&
    e.charCodeAt(t + 4) === 58
  );
}
function Li(e, t, r) {
  return (
    r === 101 &&
    e.charCodeAt(t + 1) === 118 &&
    e.charCodeAt(t + 2) === 101 &&
    e.charCodeAt(t + 3) === 110 &&
    e.charCodeAt(t + 4) === 116 &&
    e.charCodeAt(t + 5) === 58
  );
}
var Sn = class extends TransformStream {
  constructor({ onError: t, onRetry: r, onComment: a } = {}) {
    let n;
    super({
      start(s) {
        n = Ji({
          onEvent: (l) => {
            s.enqueue(l);
          },
          onError(l) {
            t === "terminate" ? s.error(l) : typeof t == "function" && t(l);
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
function $t(...e) {
  return e.reduce((t, r) => ({ ...t, ...(r ?? {}) }), {});
}
function Yb({ tools: e = [], providerToolNames: t, resolveProviderToolName: r }) {
  var a;
  let n = {},
    s = {};
  for (let l of e)
    if (l.type === "provider") {
      let i = (a = r?.(l)) != null ? a : l.id in t ? t[l.id] : void 0;
      if (i == null) continue;
      ((n[l.name] = i), (s[i] = l.name));
    }
  return {
    toProviderToolName: (l) => {
      var i;
      return (i = n[l]) != null ? i : l;
    },
    toCustomToolName: (l) => {
      var i;
      return (i = s[l]) != null ? i : l;
    },
  };
}
async function ma(e, t) {
  if (e == null) return Promise.resolve();
  let r = t?.abortSignal;
  return new Promise((a, n) => {
    if (r?.aborted) {
      n(zi());
      return;
    }
    let s = setTimeout(() => {
        (l(), a());
      }, e),
      l = () => {
        (clearTimeout(s), r?.removeEventListener("abort", i));
      },
      i = () => {
        (l(), n(zi()));
      };
    r?.addEventListener("abort", i);
  });
}
function zi() {
  return new DOMException("Delay was aborted", "AbortError");
}
var lt = class {
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
function ha(e) {
  return Object.fromEntries([...e.headers]);
}
var { btoa: Xp, atob: Qp } = globalThis;
function ut(e) {
  let t = e.replace(/-/g, "+").replace(/_/g, "/"),
    r = Qp(t);
  return Uint8Array.from(r, (a) => a.codePointAt(0));
}
function St(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) t += String.fromCodePoint(e[r]);
  return Xp(t);
}
function Xb(e) {
  return e instanceof Uint8Array ? St(e) : e;
}
function Qb(e, t = {}) {
  let { useArrayBrackets: r = !0 } = t,
    a = new FormData();
  for (let [n, s] of Object.entries(e))
    if (s != null) {
      if (Array.isArray(s)) {
        if (s.length === 1) {
          a.append(n, s[0]);
          continue;
        }
        let l = r ? `${n}[]` : n;
        for (let i of s) a.append(l, i);
        continue;
      }
      a.append(n, s);
    }
  return a;
}
var Ki = "AI_DownloadError",
  Yi = `vercel.ai.error.${Ki}`,
  ef = Symbol.for(Yi),
  Gi,
  Bi,
  Pe = class extends ((Bi = I), (Gi = ef), Bi) {
    constructor({
      url: e,
      statusCode: t,
      statusText: r,
      cause: a,
      message: n = a == null
        ? `Failed to download ${e}: ${t} ${r}`
        : `Failed to download ${e}: ${a}`,
    }) {
      (super({ name: Ki, message: n, cause: a }),
        (this[Gi] = !0),
        (this.url = e),
        (this.statusCode = t),
        (this.statusText = r));
    }
    static isInstance(e) {
      return I.hasMarker(e, Yi);
    }
  };
function tf(e = globalThis) {
  return e.window != null;
}
function rf(e) {
  let t;
  try {
    t = new URL(e);
  } catch {
    throw new Pe({ url: e, message: `Invalid URL: ${e}` });
  }
  if (t.protocol === "data:") return;
  if (t.protocol !== "http:" && t.protocol !== "https:")
    throw new Pe({ url: e, message: `URL scheme must be http, https, or data, got ${t.protocol}` });
  let r = t.hostname.toLowerCase().replace(/\.+$/, "");
  if (!r) throw new Pe({ url: e, message: "URL must have a hostname" });
  if (r === "localhost" || r.endsWith(".local") || r.endsWith(".localhost"))
    throw new Pe({ url: e, message: `URL with hostname ${r} is not allowed` });
  if (r.startsWith("[") && r.endsWith("]")) {
    let a = r.slice(1, -1);
    if (nf(a)) throw new Pe({ url: e, message: `URL with IPv6 address ${r} is not allowed` });
    return;
  }
  if (Xi(r)) {
    if (Qi(r)) throw new Pe({ url: e, message: `URL with IP address ${r} is not allowed` });
    return;
  }
}
function Xi(e) {
  let t = e.split(".");
  return t.length !== 4
    ? !1
    : t.every((r) => {
        let a = Number(r);
        return Number.isInteger(a) && a >= 0 && a <= 255 && String(a) === r;
      });
}
function Qi(e) {
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
function af(e) {
  let t = e.toLowerCase(),
    r = t.indexOf("%");
  r !== -1 && (t = t.slice(0, r));
  let a = t.split("::");
  if (a.length > 2) return null;
  let n = (l) => {
      if (l === "") return [];
      let i = [],
        d = l.split(":");
      for (let u = 0; u < d.length; u++) {
        let c = d[u];
        if (c.includes(".")) {
          if (u !== d.length - 1 || !Xi(c)) return null;
          let [f, p, w, h] = c.split(".").map(Number);
          i.push((f << 8) | p, (w << 8) | h);
          continue;
        }
        if (!/^[0-9a-f]{1,4}$/.test(c)) return null;
        i.push(parseInt(c, 16));
      }
      return i;
    },
    s = n(a[0]);
  if (s === null) return null;
  if (a.length === 2) {
    let l = n(a[1]);
    if (l === null) return null;
    let i = 8 - s.length - l.length;
    return i < 0 ? null : [...s, ...new Array(i).fill(0), ...l];
  }
  return s.length === 8 ? s : null;
}
function nf(e) {
  let t = af(e);
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
      l = (t[7] >> 8) & 255,
      i = t[7] & 255;
    return Qi(`${n}.${s}.${l}.${i}`);
  }
  return !1;
}
var sf = 10;
async function Ts({ url: e, headers: t, abortSignal: r, maxRedirects: a = sf }) {
  let n = { signal: r };
  t !== void 0 && (n.headers = t);
  let s = e;
  for (let l = 0; l <= a; l++) {
    rf(s);
    let i = await fetch(s, { ...n, redirect: "manual" });
    if (i.type === "opaqueredirect") {
      if (!tf())
        throw new Pe({
          url: e,
          message: `Redirect from ${s} could not be validated and was blocked`,
        });
      return await fetch(s, { ...n, redirect: "follow" });
    }
    let d = i.headers.get("location");
    if (i.status >= 300 && i.status < 400 && d) {
      s = new URL(d, s).toString();
      continue;
    }
    return i;
  }
  throw new Pe({ url: e, message: `Too many redirects (max ${a})` });
}
var En = 2 * 1024 * 1024 * 1024;
async function xs({ response: e, url: t, maxBytes: r = En }) {
  let a = e.headers.get("content-length");
  if (a != null) {
    let c = parseInt(a, 10);
    if (!isNaN(c) && c > r)
      throw new Pe({
        url: t,
        message: `Download of ${t} exceeded maximum size of ${r} bytes (Content-Length: ${c}).`,
      });
  }
  let n = e.body;
  if (n == null) return new Uint8Array(0);
  let s = n.getReader(),
    l = [],
    i = 0;
  try {
    for (;;) {
      let { done: c, value: f } = await s.read();
      if (c) break;
      if (((i += f.length), i > r))
        throw new Pe({ url: t, message: `Download of ${t} exceeded maximum size of ${r} bytes.` });
      l.push(f);
    }
  } finally {
    try {
      await s.cancel();
    } finally {
      s.releaseLock();
    }
  }
  let d = new Uint8Array(i),
    u = 0;
  for (let c of l) (d.set(c, u), (u += c.length));
  return d;
}
async function tw(e, t) {
  var r, a;
  try {
    let n = await Ts({ url: e, abortSignal: t?.abortSignal });
    if (!n.ok) throw new Pe({ url: e, statusCode: n.status, statusText: n.statusText });
    let s = await xs({ response: n, url: e, maxBytes: (r = t?.maxBytes) != null ? r : En }),
      l = (a = n.headers.get("content-type")) != null ? a : void 0;
    return new Blob([s], l ? { type: l } : void 0);
  } catch (n) {
    throw Pe.isInstance(n) ? n : new Pe({ url: e, cause: n });
  }
}
var Ft = ({
    prefix: e,
    size: t = 16,
    alphabet: r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    separator: a = "-",
  } = {}) => {
    let n = () => {
      let s = r.length,
        l = new Array(t);
      for (let i = 0; i < t; i++) l[i] = r[(Math.random() * s) | 0];
      return l.join("");
    };
    if (e == null) return n;
    if (r.includes(a))
      throw new Qr({
        argument: "separator",
        message: `The separator "${a}" must not be part of the alphabet "${r}".`,
      });
    return () => `${e}${a}${n()}`;
  },
  ga = Ft();
function va(e) {
  return e == null
    ? "unknown error"
    : typeof e == "string"
      ? e
      : e instanceof Error
        ? e.message
        : JSON.stringify(e);
}
function ur(e) {
  return (
    (e instanceof Error || e instanceof DOMException) &&
    (e.name === "AbortError" || e.name === "ResponseAborted" || e.name === "TimeoutError")
  );
}
var of = ["fetch failed", "failed to fetch"],
  lf = [
    "ConnectionRefused",
    "ConnectionClosed",
    "FailedToOpenSocket",
    "ECONNRESET",
    "ECONNREFUSED",
    "ETIMEDOUT",
    "EPIPE",
  ];
function uf(e) {
  if (!(e instanceof Error)) return !1;
  let t = e.code;
  return !!(typeof t == "string" && lf.includes(t));
}
function el({ error: e, url: t, requestBodyValues: r }) {
  if (ur(e)) return e;
  if (e instanceof TypeError && of.includes(e.message.toLowerCase())) {
    let a = e.cause;
    if (a != null)
      return new ae({
        message: `Cannot connect to API: ${a.message}`,
        cause: a,
        url: t,
        requestBodyValues: r,
        isRetryable: !0,
      });
  }
  return uf(e)
    ? new ae({
        message: `Cannot connect to API: ${e.message}`,
        cause: e,
        url: t,
        requestBodyValues: r,
        isRetryable: !0,
      })
    : e;
}
function ya(e = globalThis) {
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
function Ir(e) {
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
function ye(e, ...t) {
  let r = new Headers(Ir(e)),
    a = r.get("user-agent") || "";
  return (
    r.set("user-agent", [a, ...t].filter(Boolean).join(" ")),
    Object.fromEntries(r.entries())
  );
}
var tl = "4.0.29",
  df = () => globalThis.fetch,
  $r = async ({
    url: e,
    headers: t = {},
    successfulResponseHandler: r,
    failedResponseHandler: a,
    abortSignal: n,
    fetch: s = df(),
  }) => {
    try {
      let l = await s(e, {
          method: "GET",
          headers: ye(t, `ai-sdk/provider-utils/${tl}`, ya()),
          signal: n,
        }),
        i = ha(l);
      if (!l.ok) {
        let d;
        try {
          d = await a({ response: l, url: e, requestBodyValues: {} });
        } catch (u) {
          throw ur(u) || ae.isInstance(u)
            ? u
            : new ae({
                message: "Failed to process error response",
                cause: u,
                statusCode: l.status,
                url: e,
                responseHeaders: i,
                requestBodyValues: {},
              });
        }
        throw d.value;
      }
      try {
        return await r({ response: l, url: e, requestBodyValues: {} });
      } catch (d) {
        throw d instanceof Error && (ur(d) || ae.isInstance(d))
          ? d
          : new ae({
              message: "Failed to process successful response",
              cause: d,
              statusCode: l.status,
              url: e,
              responseHeaders: i,
              requestBodyValues: {},
            });
      }
    } catch (l) {
      throw el({ error: l, url: e, requestBodyValues: {} });
    }
  };
function rl(e) {
  return e != null;
}
function al({ mediaType: e, url: t, supportedUrls: r }) {
  return (
    (t = t.toLowerCase()),
    (e = e.toLowerCase()),
    Object.entries(r)
      .map(([a, n]) => {
        let s = a.toLowerCase();
        return s === "*" || s === "*/*"
          ? { mediaTypePrefix: "", regexes: n }
          : { mediaTypePrefix: s.replace(/\*/, ""), regexes: n };
      })
      .filter(({ mediaTypePrefix: a }) => e.startsWith(a))
      .flatMap(({ regexes: a }) => a)
      .some((a) => a.test(t))
  );
}
function ow({
  apiKey: e,
  environmentVariableName: t,
  apiKeyParameterName: r = "apiKey",
  description: a,
}) {
  if (typeof e == "string") return e;
  if (e != null) throw new Or({ message: `${a} API key must be a string.` });
  if (typeof process > "u")
    throw new Or({
      message: `${a} API key is missing. Pass it using the '${r}' parameter. Environment variables are not supported in this environment.`,
    });
  if (((e = process.env[t]), e == null))
    throw new Or({
      message: `${a} API key is missing. Pass it using the '${r}' parameter or the ${t} environment variable.`,
    });
  if (typeof e != "string")
    throw new Or({
      message: `${a} API key must be a string. The value of the ${t} environment variable is not a string.`,
    });
  return e;
}
function ba({ settingValue: e, environmentVariableName: t }) {
  if (typeof e == "string") return e;
  if (
    !(e != null || typeof process > "u") &&
    ((e = process.env[t]), !(e == null || typeof e != "string"))
  )
    return e;
}
function iw(e) {
  var t;
  let [r, a = ""] = e.toLowerCase().split("/");
  return (t = { mpeg: "mp3", "x-wav": "wav", opus: "ogg", mp4: "m4a", "x-m4a": "m4a" }[a]) != null
    ? t
    : a;
}
var cf =
    /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/,
  pf =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
function Zi(e) {
  let t = JSON.parse(e);
  return t === null || typeof t != "object" || (cf.test(e) === !1 && pf.test(e) === !1) ? t : ff(t);
}
function ff(e) {
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
function Is(e) {
  let { stackTraceLimit: t } = Error;
  try {
    Error.stackTraceLimit = 0;
  } catch {
    return Zi(e);
  }
  try {
    return Zi(e);
  } finally {
    Error.stackTraceLimit = t;
  }
}
function Ss(e) {
  if (e.type === "object" || (Array.isArray(e.type) && e.type.includes("object"))) {
    e.additionalProperties = !1;
    let { properties: r } = e;
    if (r != null) for (let a of Object.keys(r)) r[a] = Dr(r[a]);
  }
  (e.items != null && (e.items = Array.isArray(e.items) ? e.items.map(Dr) : Dr(e.items)),
    e.anyOf != null && (e.anyOf = e.anyOf.map(Dr)),
    e.allOf != null && (e.allOf = e.allOf.map(Dr)),
    e.oneOf != null && (e.oneOf = e.oneOf.map(Dr)));
  let { definitions: t } = e;
  if (t != null) for (let r of Object.keys(t)) t[r] = Dr(t[r]);
  return e;
}
function Dr(e) {
  return typeof e == "boolean" ? e : Ss(e);
}
var mf = Symbol("Let zodToJsonSchema decide on which parser to use"),
  Hi = {
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
  hf = (e) => (typeof e == "string" ? { ...Hi, name: e } : { ...Hi, ...e });
function wt() {
  return {};
}
function gf(e, t) {
  var r, a, n;
  let s = { type: "array" };
  return (
    (r = e.type) != null &&
      r._def &&
      ((n = (a = e.type) == null ? void 0 : a._def) == null ? void 0 : n.typeName) !== E.ZodAny &&
      (s.items = ue(e.type._def, { ...t, currentPath: [...t.currentPath, "items"] })),
    e.minLength && (s.minItems = e.minLength.value),
    e.maxLength && (s.maxItems = e.maxLength.value),
    e.exactLength && ((s.minItems = e.exactLength.value), (s.maxItems = e.exactLength.value)),
    s
  );
}
function vf(e) {
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
function yf() {
  return { type: "boolean" };
}
function nl(e, t) {
  return ue(e.type._def, t);
}
var bf = (e, t) => ue(e.innerType._def, t);
function sl(e, t, r) {
  let a = r ?? t.dateStrategy;
  if (Array.isArray(a)) return { anyOf: a.map((n, s) => sl(e, t, n)) };
  switch (a) {
    case "string":
    case "format:date-time":
      return { type: "string", format: "date-time" };
    case "format:date":
      return { type: "string", format: "date" };
    case "integer":
      return wf(e);
  }
}
var wf = (e) => {
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
function _f(e, t) {
  return { ...ue(e.innerType._def, t), default: e.defaultValue() };
}
function Tf(e, t) {
  return t.effectStrategy === "input" ? ue(e.schema._def, t) : wt();
}
function xf(e) {
  return { type: "string", enum: Array.from(e.values) };
}
var If = (e) => ("type" in e && e.type === "string" ? !1 : "allOf" in e);
function Sf(e, t) {
  let r = [
      ue(e.left._def, { ...t, currentPath: [...t.currentPath, "allOf", "0"] }),
      ue(e.right._def, { ...t, currentPath: [...t.currentPath, "allOf", "1"] }),
    ].filter((n) => !!n),
    a = [];
  return (
    r.forEach((n) => {
      if (If(n)) a.push(...n.allOf);
      else {
        let s = n;
        if ("additionalProperties" in n && n.additionalProperties === !1) {
          let { additionalProperties: l, ...i } = n;
          s = i;
        }
        a.push(s);
      }
    }),
    a.length ? { allOf: a } : void 0
  );
}
function Ef(e) {
  let t = typeof e.value;
  return t !== "bigint" && t !== "number" && t !== "boolean" && t !== "string"
    ? { type: Array.isArray(e.value) ? "array" : "object" }
    : { type: t === "bigint" ? "integer" : t, const: e.value };
}
var ys = void 0,
  jt = {
    cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    email:
      /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    emoji: () => (
      ys === void 0 && (ys = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")),
      ys
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
function ol(e, t) {
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
              Dt(r, "email", a.message, t);
              break;
            case "format:idn-email":
              Dt(r, "idn-email", a.message, t);
              break;
            case "pattern:zod":
              at(r, jt.email, a.message, t);
              break;
          }
          break;
        case "url":
          Dt(r, "uri", a.message, t);
          break;
        case "uuid":
          Dt(r, "uuid", a.message, t);
          break;
        case "regex":
          at(r, a.regex, a.message, t);
          break;
        case "cuid":
          at(r, jt.cuid, a.message, t);
          break;
        case "cuid2":
          at(r, jt.cuid2, a.message, t);
          break;
        case "startsWith":
          at(r, RegExp(`^${bs(a.value, t)}`), a.message, t);
          break;
        case "endsWith":
          at(r, RegExp(`${bs(a.value, t)}$`), a.message, t);
          break;
        case "datetime":
          Dt(r, "date-time", a.message, t);
          break;
        case "date":
          Dt(r, "date", a.message, t);
          break;
        case "time":
          Dt(r, "time", a.message, t);
          break;
        case "duration":
          Dt(r, "duration", a.message, t);
          break;
        case "length":
          ((r.minLength =
            typeof r.minLength == "number" ? Math.max(r.minLength, a.value) : a.value),
            (r.maxLength =
              typeof r.maxLength == "number" ? Math.min(r.maxLength, a.value) : a.value));
          break;
        case "includes": {
          at(r, RegExp(bs(a.value, t)), a.message, t);
          break;
        }
        case "ip": {
          (a.version !== "v6" && Dt(r, "ipv4", a.message, t),
            a.version !== "v4" && Dt(r, "ipv6", a.message, t));
          break;
        }
        case "base64url":
          at(r, jt.base64url, a.message, t);
          break;
        case "jwt":
          at(r, jt.jwt, a.message, t);
          break;
        case "cidr": {
          (a.version !== "v6" && at(r, jt.ipv4Cidr, a.message, t),
            a.version !== "v4" && at(r, jt.ipv6Cidr, a.message, t));
          break;
        }
        case "emoji":
          at(r, jt.emoji(), a.message, t);
          break;
        case "ulid": {
          at(r, jt.ulid, a.message, t);
          break;
        }
        case "base64": {
          switch (t.base64Strategy) {
            case "format:binary": {
              Dt(r, "binary", a.message, t);
              break;
            }
            case "contentEncoding:base64": {
              r.contentEncoding = "base64";
              break;
            }
            case "pattern:zod": {
              at(r, jt.base64, a.message, t);
              break;
            }
          }
          break;
        }
        case "nanoid":
          at(r, jt.nanoid, a.message, t);
        case "toLowerCase":
        case "toUpperCase":
        case "trim":
          break;
        default:
      }
  return r;
}
function bs(e, t) {
  return t.patternStrategy === "escape" ? kf(e) : e;
}
var Mf = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
function kf(e) {
  let t = "";
  for (let r = 0; r < e.length; r++) (Mf.has(e[r]) || (t += "\\"), (t += e[r]));
  return t;
}
function Dt(e, t, r, a) {
  var n;
  e.format || ((n = e.anyOf) != null && n.some((s) => s.format))
    ? (e.anyOf || (e.anyOf = []),
      e.format && (e.anyOf.push({ format: e.format }), delete e.format),
      e.anyOf.push({ format: t, ...(r && a.errorMessages && { errorMessage: { format: r } }) }))
    : (e.format = t);
}
function at(e, t, r, a) {
  var n;
  e.pattern || ((n = e.allOf) != null && n.some((s) => s.pattern))
    ? (e.allOf || (e.allOf = []),
      e.pattern && (e.allOf.push({ pattern: e.pattern }), delete e.pattern),
      e.allOf.push({
        pattern: Wi(t, a),
        ...(r && a.errorMessages && { errorMessage: { pattern: r } }),
      }))
    : (e.pattern = Wi(t, a));
}
function Wi(e, t) {
  var r;
  if (!t.applyRegexFlags || !e.flags) return e.source;
  let a = { i: e.flags.includes("i"), m: e.flags.includes("m"), s: e.flags.includes("s") },
    n = a.i ? e.source.toLowerCase() : e.source,
    s = "",
    l = !1,
    i = !1,
    d = !1;
  for (let u = 0; u < n.length; u++) {
    if (l) {
      ((s += n[u]), (l = !1));
      continue;
    }
    if (a.i) {
      if (i) {
        if (n[u].match(/[a-z]/)) {
          d
            ? ((s += n[u]), (s += `${n[u - 2]}-${n[u]}`.toUpperCase()), (d = !1))
            : n[u + 1] === "-" && (r = n[u + 2]) != null && r.match(/[a-z]/)
              ? ((s += n[u]), (d = !0))
              : (s += `${n[u]}${n[u].toUpperCase()}`);
          continue;
        }
      } else if (n[u].match(/[a-z]/)) {
        s += `[${n[u]}${n[u].toUpperCase()}]`;
        continue;
      }
    }
    if (a.m) {
      if (n[u] === "^") {
        s += `(^|(?<=[\r
]))`;
        continue;
      } else if (n[u] === "$") {
        s += `($|(?=[\r
]))`;
        continue;
      }
    }
    if (a.s && n[u] === ".") {
      s += i
        ? `${n[u]}\r
`
        : `[${n[u]}\r
]`;
      continue;
    }
    ((s += n[u]),
      n[u] === "\\" ? (l = !0) : i && n[u] === "]" ? (i = !1) : !i && n[u] === "[" && (i = !0));
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
function il(e, t) {
  var r, a, n, s, l, i;
  let d = {
    type: "object",
    additionalProperties:
      (r = ue(e.valueType._def, {
        ...t,
        currentPath: [...t.currentPath, "additionalProperties"],
      })) != null
        ? r
        : t.allowedAdditionalProperties,
  };
  if (
    ((a = e.keyType) == null ? void 0 : a._def.typeName) === E.ZodString &&
    (n = e.keyType._def.checks) != null &&
    n.length
  ) {
    let { type: u, ...c } = ol(e.keyType._def, t);
    return { ...d, propertyNames: c };
  } else {
    if (((s = e.keyType) == null ? void 0 : s._def.typeName) === E.ZodEnum)
      return { ...d, propertyNames: { enum: e.keyType._def.values } };
    if (
      ((l = e.keyType) == null ? void 0 : l._def.typeName) === E.ZodBranded &&
      e.keyType._def.type._def.typeName === E.ZodString &&
      (i = e.keyType._def.type._def.checks) != null &&
      i.length
    ) {
      let { type: u, ...c } = nl(e.keyType._def, t);
      return { ...d, propertyNames: c };
    }
  }
  return d;
}
function Rf(e, t) {
  if (t.mapStrategy === "record") return il(e, t);
  let r =
      ue(e.keyType._def, { ...t, currentPath: [...t.currentPath, "items", "items", "0"] }) || wt(),
    a =
      ue(e.valueType._def, { ...t, currentPath: [...t.currentPath, "items", "items", "1"] }) ||
      wt();
  return {
    type: "array",
    maxItems: 125,
    items: { type: "array", items: [r, a], minItems: 2, maxItems: 2 },
  };
}
function Af(e) {
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
function Cf() {
  return { not: wt() };
}
function Of() {
  return { type: "null" };
}
var ws = {
  ZodString: "string",
  ZodNumber: "number",
  ZodBigInt: "integer",
  ZodBoolean: "boolean",
  ZodNull: "null",
};
function Nf(e, t) {
  let r = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
  if (r.every((a) => a._def.typeName in ws && (!a._def.checks || !a._def.checks.length))) {
    let a = r.reduce((n, s) => {
      let l = ws[s._def.typeName];
      return l && !n.includes(l) ? [...n, l] : n;
    }, []);
    return { type: a.length > 1 ? a : a[0] };
  } else if (r.every((a) => a._def.typeName === "ZodLiteral" && !a.description)) {
    let a = r.reduce((n, s) => {
      let l = typeof s._def.value;
      switch (l) {
        case "string":
        case "number":
        case "boolean":
          return [...n, l];
        case "bigint":
          return [...n, "integer"];
        case "object":
          if (s._def.value === null) return [...n, "null"];
        default:
          return n;
      }
    }, []);
    if (a.length === r.length) {
      let n = a.filter((s, l, i) => i.indexOf(s) === l);
      return {
        type: n.length > 1 ? n : n[0],
        enum: r.reduce((s, l) => (s.includes(l._def.value) ? s : [...s, l._def.value]), []),
      };
    }
  } else if (r.every((a) => a._def.typeName === "ZodEnum"))
    return {
      type: "string",
      enum: r.reduce((a, n) => [...a, ...n._def.values.filter((s) => !a.includes(s))], []),
    };
  return Pf(e, t);
}
var Pf = (e, t) => {
  let r = (e.options instanceof Map ? Array.from(e.options.values()) : e.options)
    .map((a, n) => ue(a._def, { ...t, currentPath: [...t.currentPath, "anyOf", `${n}`] }))
    .filter((a) => !!a && (!t.strictUnions || (typeof a == "object" && Object.keys(a).length > 0)));
  return r.length ? { anyOf: r } : void 0;
};
function jf(e, t) {
  if (
    ["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(
      e.innerType._def.typeName
    ) &&
    (!e.innerType._def.checks || !e.innerType._def.checks.length)
  )
    return { type: [ws[e.innerType._def.typeName], "null"] };
  let r = ue(e.innerType._def, { ...t, currentPath: [...t.currentPath, "anyOf", "0"] });
  return r && { anyOf: [r, { type: "null" }] };
}
function Df(e) {
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
function $f(e, t) {
  let r = { type: "object", properties: {} },
    a = [],
    n = e.shape();
  for (let l in n) {
    let i = n[l];
    if (i === void 0 || i._def === void 0) continue;
    let d = qf(i),
      u = ue(i._def, {
        ...t,
        currentPath: [...t.currentPath, "properties", l],
        propertyPath: [...t.currentPath, "properties", l],
      });
    u !== void 0 && ((r.properties[l] = u), d || a.push(l));
  }
  a.length && (r.required = a);
  let s = Ff(e, t);
  return (s !== void 0 && (r.additionalProperties = s), r);
}
function Ff(e, t) {
  if (e.catchall._def.typeName !== "ZodNever")
    return ue(e.catchall._def, { ...t, currentPath: [...t.currentPath, "additionalProperties"] });
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
function qf(e) {
  try {
    return e.isOptional();
  } catch {
    return !0;
  }
}
var Uf = (e, t) => {
    var r;
    if (t.currentPath.toString() === ((r = t.propertyPath) == null ? void 0 : r.toString()))
      return ue(e.innerType._def, t);
    let a = ue(e.innerType._def, { ...t, currentPath: [...t.currentPath, "anyOf", "1"] });
    return a ? { anyOf: [{ not: wt() }, a] } : wt();
  },
  Vf = (e, t) => {
    if (t.pipeStrategy === "input") return ue(e.in._def, t);
    if (t.pipeStrategy === "output") return ue(e.out._def, t);
    let r = ue(e.in._def, { ...t, currentPath: [...t.currentPath, "allOf", "0"] }),
      a = ue(e.out._def, { ...t, currentPath: [...t.currentPath, "allOf", r ? "1" : "0"] });
    return { allOf: [r, a].filter((n) => n !== void 0) };
  };
function Lf(e, t) {
  return ue(e.type._def, t);
}
function Jf(e, t) {
  let a = {
    type: "array",
    uniqueItems: !0,
    items: ue(e.valueType._def, { ...t, currentPath: [...t.currentPath, "items"] }),
  };
  return (
    e.minSize && (a.minItems = e.minSize.value),
    e.maxSize && (a.maxItems = e.maxSize.value),
    a
  );
}
function zf(e, t) {
  return e.rest
    ? {
        type: "array",
        minItems: e.items.length,
        items: e.items
          .map((r, a) => ue(r._def, { ...t, currentPath: [...t.currentPath, "items", `${a}`] }))
          .reduce((r, a) => (a === void 0 ? r : [...r, a]), []),
        additionalItems: ue(e.rest._def, {
          ...t,
          currentPath: [...t.currentPath, "additionalItems"],
        }),
      }
    : {
        type: "array",
        minItems: e.items.length,
        maxItems: e.items.length,
        items: e.items
          .map((r, a) => ue(r._def, { ...t, currentPath: [...t.currentPath, "items", `${a}`] }))
          .reduce((r, a) => (a === void 0 ? r : [...r, a]), []),
      };
}
function Gf() {
  return { not: wt() };
}
function Bf() {
  return wt();
}
var Zf = (e, t) => ue(e.innerType._def, t),
  Hf = (e, t, r) => {
    switch (t) {
      case E.ZodString:
        return ol(e, r);
      case E.ZodNumber:
        return Df(e);
      case E.ZodObject:
        return $f(e, r);
      case E.ZodBigInt:
        return vf(e);
      case E.ZodBoolean:
        return yf();
      case E.ZodDate:
        return sl(e, r);
      case E.ZodUndefined:
        return Gf();
      case E.ZodNull:
        return Of();
      case E.ZodArray:
        return gf(e, r);
      case E.ZodUnion:
      case E.ZodDiscriminatedUnion:
        return Nf(e, r);
      case E.ZodIntersection:
        return Sf(e, r);
      case E.ZodTuple:
        return zf(e, r);
      case E.ZodRecord:
        return il(e, r);
      case E.ZodLiteral:
        return Ef(e);
      case E.ZodEnum:
        return xf(e);
      case E.ZodNativeEnum:
        return Af(e);
      case E.ZodNullable:
        return jf(e, r);
      case E.ZodOptional:
        return Uf(e, r);
      case E.ZodMap:
        return Rf(e, r);
      case E.ZodSet:
        return Jf(e, r);
      case E.ZodLazy:
        return () => e.getter()._def;
      case E.ZodPromise:
        return Lf(e, r);
      case E.ZodNaN:
      case E.ZodNever:
        return Cf();
      case E.ZodEffects:
        return Tf(e, r);
      case E.ZodAny:
        return wt();
      case E.ZodUnknown:
        return Bf();
      case E.ZodDefault:
        return _f(e, r);
      case E.ZodBranded:
        return nl(e, r);
      case E.ZodReadonly:
        return Zf(e, r);
      case E.ZodCatch:
        return bf(e, r);
      case E.ZodPipeline:
        return Vf(e, r);
      case E.ZodFunction:
      case E.ZodVoid:
      case E.ZodSymbol:
        return;
      default:
        return ((a) => {})(t);
    }
  },
  Wf = (e, t) => {
    let r = 0;
    for (; r < e.length && r < t.length && e[r] === t[r]; r++);
    return [(e.length - r).toString(), ...t.slice(r)].join("/");
  };
function ue(e, t, r = !1) {
  var a;
  let n = t.seen.get(e);
  if (t.override) {
    let d = (a = t.override) == null ? void 0 : a.call(t, e, t, n, r);
    if (d !== mf) return d;
  }
  if (n && !r) {
    let d = Kf(n, t);
    if (d !== void 0) return d;
  }
  let s = { def: e, path: t.currentPath, jsonSchema: void 0 };
  t.seen.set(e, s);
  let l = Hf(e, e.typeName, t),
    i = typeof l == "function" ? ue(l(), t) : l;
  if ((i && Yf(e, t, i), t.postProcess)) {
    let d = t.postProcess(i, e, t);
    return ((s.jsonSchema = i), d);
  }
  return ((s.jsonSchema = i), i);
}
var Kf = (e, t) => {
    switch (t.$refStrategy) {
      case "root":
        return { $ref: e.path.join("/") };
      case "relative":
        return { $ref: Wf(t.currentPath, e.path) };
      case "none":
      case "seen":
        return e.path.length < t.currentPath.length &&
          e.path.every((r, a) => t.currentPath[a] === r)
          ? (console.warn(
              `Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`
            ),
            wt())
          : t.$refStrategy === "seen"
            ? wt()
            : void 0;
    }
  },
  Yf = (e, t, r) => (e.description && (r.description = e.description), r),
  Xf = (e) => {
    let t = hf(e),
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
  Qf = (e, t) => {
    var r;
    let a = Xf(t),
      n =
        typeof t == "object" && t.definitions
          ? Object.entries(t.definitions).reduce((u, [c, f]) => {
              var p;
              return {
                ...u,
                [c]:
                  (p = ue(
                    f._def,
                    { ...a, currentPath: [...a.basePath, a.definitionPath, c] },
                    !0
                  )) != null
                    ? p
                    : wt(),
              };
            }, {})
          : void 0,
      s = typeof t == "string" ? t : t?.nameStrategy === "title" ? void 0 : t?.name,
      l =
        (r = ue(
          e._def,
          s === void 0 ? a : { ...a, currentPath: [...a.basePath, a.definitionPath, s] },
          !1
        )) != null
          ? r
          : wt(),
      i = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
    i !== void 0 && (l.title = i);
    let d =
      s === void 0
        ? n
          ? { ...l, [a.definitionPath]: n }
          : l
        : {
            $ref: [...(a.$refStrategy === "relative" ? [] : a.basePath), a.definitionPath, s].join(
              "/"
            ),
            [a.definitionPath]: { ...n, [s]: l },
          };
    return ((d.$schema = "http://json-schema.org/draft-07/schema#"), d);
  },
  _s = Symbol.for("vercel.ai.schema");
function pe(e) {
  let t;
  return () => (t == null && (t = e()), t);
}
function wa(e, { validate: t } = {}) {
  return {
    [_s]: !0,
    _type: void 0,
    get jsonSchema() {
      return (typeof e == "function" && (e = e()), e);
    },
    validate: t,
  };
}
function em(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    _s in e &&
    e[_s] === !0 &&
    "jsonSchema" in e &&
    "validate" in e
  );
}
function Ye(e) {
  return e == null
    ? wa({ properties: {}, additionalProperties: !1 })
    : em(e)
      ? e
      : "~standard" in e
        ? e["~standard"].vendor === "zod"
          ? ne(e)
          : tm(e)
        : e();
}
function tm(e) {
  return wa(() => Ss(e["~standard"].jsonSchema.input({ target: "draft-07" })), {
    validate: async (t) => {
      let r = await e["~standard"].validate(t);
      return "value" in r
        ? { success: !0, value: r.value }
        : { success: !1, error: new ge({ value: t, cause: r.issues }) };
    },
  });
}
function rm(e, t) {
  var r;
  let a = (r = t?.useReferences) != null ? r : !1;
  return wa(() => Qf(e, { $refStrategy: a ? "root" : "none" }), {
    validate: async (n) => {
      let s = await e.safeParseAsync(n);
      return s.success ? { success: !0, value: s.data } : { success: !1, error: s.error };
    },
  });
}
function am(e, t) {
  var r;
  let a = (r = t?.useReferences) != null ? r : !1;
  return wa(() => Ss(Mo(e, { target: "draft-7", io: "input", reused: a ? "ref" : "inline" })), {
    validate: async (n) => {
      let s = await ko(e, n);
      return s.success ? { success: !0, value: s.data } : { success: !1, error: s.error };
    },
  });
}
function nm(e) {
  return "_zod" in e;
}
function ne(e, t) {
  return nm(e) ? am(e, t) : rm(e, t);
}
async function Et({ value: e, schema: t, context: r }) {
  let a = await Te({ value: e, schema: t, context: r });
  if (!a.success) throw ge.wrap({ value: e, cause: a.error, context: r });
  return a.value;
}
async function Te({ value: e, schema: t, context: r }) {
  let a = Ye(t);
  try {
    if (a.validate == null) return { success: !0, value: e, rawValue: e };
    let n = await a.validate(e);
    return n.success
      ? { success: !0, value: n.value, rawValue: e }
      : { success: !1, error: ge.wrap({ value: e, cause: n.error, context: r }), rawValue: e };
  } catch (n) {
    return { success: !1, error: ge.wrap({ value: e, cause: n, context: r }), rawValue: e };
  }
}
async function sm({ text: e, schema: t }) {
  try {
    let r = Is(e);
    return t == null ? r : Et({ value: r, schema: t });
  } catch (r) {
    throw nr.isInstance(r) || ge.isInstance(r) ? r : new nr({ text: e, cause: r });
  }
}
async function Xe({ text: e, schema: t }) {
  try {
    let r = Is(e);
    return t == null ? { success: !0, value: r, rawValue: r } : await Te({ value: r, schema: t });
  } catch (r) {
    return {
      success: !1,
      error: nr.isInstance(r) ? r : new nr({ text: e, cause: r }),
      rawValue: void 0,
    };
  }
}
function mw(e) {
  try {
    return (Is(e), !0);
  } catch {
    return !1;
  }
}
function dr({ stream: e, schema: t }) {
  return e
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(new Sn())
    .pipeThrough(
      new TransformStream({
        async transform({ data: r }, a) {
          r !== "[DONE]" && a.enqueue(await Xe({ text: r, schema: t }));
        },
      })
    );
}
async function vw({ provider: e, providerOptions: t, schema: r }) {
  if (t?.[e] == null) return;
  let a = await Te({ value: t[e], schema: r });
  if (!a.success)
    throw new Qr({
      argument: "providerOptions",
      message: `invalid ${e} provider options`,
      cause: a.error,
    });
  return a.value;
}
var om = () => globalThis.fetch,
  qt = async ({
    url: e,
    headers: t,
    body: r,
    failedResponseHandler: a,
    successfulResponseHandler: n,
    abortSignal: s,
    fetch: l,
  }) =>
    ll({
      url: e,
      headers: { "Content-Type": "application/json", ...t },
      body: { content: JSON.stringify(r), values: r },
      failedResponseHandler: a,
      successfulResponseHandler: n,
      abortSignal: s,
      fetch: l,
    }),
  bw = async ({
    url: e,
    headers: t,
    formData: r,
    failedResponseHandler: a,
    successfulResponseHandler: n,
    abortSignal: s,
    fetch: l,
  }) =>
    ll({
      url: e,
      headers: t,
      body: { content: r, values: Object.fromEntries(r.entries()) },
      failedResponseHandler: a,
      successfulResponseHandler: n,
      abortSignal: s,
      fetch: l,
    }),
  ll = async ({
    url: e,
    headers: t = {},
    body: r,
    successfulResponseHandler: a,
    failedResponseHandler: n,
    abortSignal: s,
    fetch: l = om(),
  }) => {
    try {
      let i = await l(e, {
          method: "POST",
          headers: ye(t, `ai-sdk/provider-utils/${tl}`, ya()),
          body: r.content,
          signal: s,
        }),
        d = ha(i);
      if (!i.ok) {
        let u;
        try {
          u = await n({ response: i, url: e, requestBodyValues: r.values });
        } catch (c) {
          throw ur(c) || ae.isInstance(c)
            ? c
            : new ae({
                message: "Failed to process error response",
                cause: c,
                statusCode: i.status,
                url: e,
                responseHeaders: d,
                requestBodyValues: r.values,
              });
        }
        throw u.value;
      }
      try {
        return await a({ response: i, url: e, requestBodyValues: r.values });
      } catch (u) {
        throw u instanceof Error && (ur(u) || ae.isInstance(u))
          ? u
          : new ae({
              message: "Failed to process successful response",
              cause: u,
              statusCode: i.status,
              url: e,
              responseHeaders: d,
              requestBodyValues: r.values,
            });
      }
    } catch (i) {
      throw el({ error: i, url: e, requestBodyValues: r.values });
    }
  };
function ul(e) {
  return e;
}
function dl(e) {
  return { ...e, type: "dynamic" };
}
function ww({ id: e, inputSchema: t }) {
  return ({
    execute: r,
    outputSchema: a,
    needsApproval: n,
    toModelOutput: s,
    onInputStart: l,
    onInputDelta: i,
    onInputAvailable: d,
    ...u
  }) => ({
    type: "provider",
    id: e,
    args: u,
    inputSchema: t,
    outputSchema: a,
    execute: r,
    needsApproval: n,
    toModelOutput: s,
    onInputStart: l,
    onInputDelta: i,
    onInputAvailable: d,
  });
}
function Mn({ id: e, inputSchema: t, outputSchema: r, supportsDeferredResults: a }) {
  return ({
    execute: n,
    needsApproval: s,
    toModelOutput: l,
    onInputStart: i,
    onInputDelta: d,
    onInputAvailable: u,
    ...c
  }) => ({
    type: "provider",
    id: e,
    args: c,
    inputSchema: t,
    outputSchema: r,
    execute: n,
    needsApproval: s,
    toModelOutput: l,
    onInputStart: i,
    onInputDelta: d,
    onInputAvailable: u,
    supportsDeferredResults: a,
  });
}
async function ee(e) {
  return (typeof e == "function" && (e = e()), Promise.resolve(e));
}
var De =
    ({ errorSchema: e, errorToMessage: t, isRetryable: r }) =>
    async ({ response: a, url: n, requestBodyValues: s }) => {
      let l = await a.text(),
        i = ha(a);
      if (l.trim() === "")
        return {
          responseHeaders: i,
          value: new ae({
            message: a.statusText,
            url: n,
            requestBodyValues: s,
            statusCode: a.status,
            responseHeaders: i,
            responseBody: l,
            isRetryable: r?.(a),
          }),
        };
      try {
        let d = await sm({ text: l, schema: e });
        return {
          responseHeaders: i,
          value: new ae({
            message: t(d),
            url: n,
            requestBodyValues: s,
            statusCode: a.status,
            responseHeaders: i,
            responseBody: l,
            data: d,
            isRetryable: r?.(a, d),
          }),
        };
      } catch {
        return {
          responseHeaders: i,
          value: new ae({
            message: a.statusText,
            url: n,
            requestBodyValues: s,
            statusCode: a.status,
            responseHeaders: i,
            responseBody: l,
            isRetryable: r?.(a),
          }),
        };
      }
    },
  cl =
    (e) =>
    async ({ response: t }) => {
      let r = ha(t);
      if (t.body == null) throw new wn({});
      return { responseHeaders: r, value: dr({ stream: t.body, schema: e }) };
    },
  nt =
    (e) =>
    async ({ response: t, url: r, requestBodyValues: a }) => {
      let n = await t.text(),
        s = await Xe({ text: n, schema: e }),
        l = ha(t);
      if (!s.success)
        throw new ae({
          message: "Invalid JSON response",
          cause: s.error,
          statusCode: t.status,
          responseHeaders: l,
          responseBody: n,
          url: r,
          requestBodyValues: a,
        });
      return { responseHeaders: l, value: s.value, rawValue: s.rawValue };
    },
  Tw =
    () =>
    async ({ response: e, url: t, requestBodyValues: r }) => {
      let a = ha(e);
      if (!e.body)
        throw new ae({
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
        throw new ae({
          message: "Failed to read response as array buffer",
          url: t,
          requestBodyValues: r,
          statusCode: e.status,
          responseHeaders: a,
          responseBody: void 0,
          cause: n,
        });
      }
    };
function pl(e) {
  return e?.replace(/\/$/, "");
}
function im(e) {
  return e != null && typeof e[Symbol.asyncIterator] == "function";
}
async function* fl({ execute: e, input: t, options: r }) {
  let a = e(t, r);
  if (im(a)) {
    let n;
    for await (let s of a) ((n = s), yield { type: "preliminary", output: s });
    yield { type: "final", output: n };
  } else yield { type: "final", output: await a };
}
var Sy = {};
cp(Sy, {
  AISDKError: () => I,
  APICallError: () => ae,
  AbstractChat: () => by,
  DefaultChatTransport: () => lp,
  DefaultGeneratedFile: () => Mr,
  DirectChatTransport: () => wy,
  DownloadError: () => Pe,
  EmptyResponseBodyError: () => wn,
  Experimental_Agent: () => pv,
  HttpChatTransport: () => _o,
  InvalidArgumentError: () => fe,
  InvalidDataContentError: () => Gs,
  InvalidMessageRoleError: () => Wd,
  InvalidPromptError: () => Zt,
  InvalidResponseDataError: () => hi,
  InvalidStreamPartError: () => Hh,
  InvalidToolApprovalError: () => Qu,
  InvalidToolApprovalSignatureError: () => Ls,
  InvalidToolInputError: () => dn,
  JSONParseError: () => nr,
  JsonToSseTransformStream: () => io,
  LoadAPIKeyError: () => Or,
  LoadSettingError: () => Ti,
  MessageConversionError: () => Qd,
  MissingToolResultsError: () => Js,
  NoContentGeneratedError: () => Si,
  NoImageGeneratedError: () => hd,
  NoObjectGeneratedError: () => ft,
  NoOutputGeneratedError: () => sn,
  NoSpeechGeneratedError: () => Sd,
  NoSuchModelError: () => Ce,
  NoSuchProviderError: () => sp,
  NoSuchToolError: () => Bn,
  NoTranscriptGeneratedError: () => Rd,
  NoVideoGeneratedError: () => Od,
  Output: () => Dc,
  RetryError: () => Bs,
  SerialJobExecutor: () => Qc,
  TextStreamChatTransport: () => Iy,
  TooManyEmbeddingValuesForCallError: () => Ai,
  ToolCallNotFoundForApprovalError: () => Kn,
  ToolCallRepairError: () => qd,
  ToolLoopAgent: () => pv,
  TypeValidationError: () => ge,
  UIMessageStreamError: () => Fr,
  UI_MESSAGE_STREAM_HEADERS: () => lo,
  UnsupportedFunctionalityError: () => wr,
  UnsupportedModelVersionError: () => kr,
  addToolInputExamplesMiddleware: () => ry,
  asSchema: () => Ye,
  assistantModelMessageSchema: () => Tc,
  bindTelemetryIntegration: () => qg,
  callCompletionApi: () => yy,
  consumeStream: () => fn,
  convertFileListToFileUIParts: () => ip,
  convertToModelMessages: () => ho,
  cosineSimilarity: () => Ov,
  createAgentUIStream: () => vo,
  createAgentUIStreamResponse: () => gv,
  createDownload: () => yo,
  createGateway: () => Ns,
  createIdGenerator: () => Ft,
  createProviderRegistry: () => op,
  createTextStreamResponse: () => so,
  createUIMessageStream: () => fv,
  createUIMessageStreamResponse: () => uo,
  customProvider: () => tp,
  defaultEmbeddingSettingsMiddleware: () => Hv,
  defaultSettingsMiddleware: () => Wv,
  dynamicTool: () => dl,
  embed: () => yv,
  embedMany: () => wv,
  experimental_createProviderRegistry: () => dy,
  experimental_customProvider: () => ly,
  experimental_generateImage: () => Iv,
  experimental_generateSpeech: () => qv,
  experimental_generateVideo: () => Gv,
  experimental_transcribe: () => my,
  extractJsonMiddleware: () => Yv,
  extractReasoningMiddleware: () => Qv,
  gateway: () => Rn,
  generateId: () => ga,
  generateImage: () => Wc,
  generateObject: () => Av,
  generateText: () => Lc,
  getStaticToolName: () => Wn,
  getTextFromDataUrl: () => Nv,
  getToolName: () => ln,
  getToolOrDynamicToolName: () => ov,
  hasToolCall: () => Qg,
  isDataUIPart: () => Jn,
  isDeepEqualData: () => un,
  isFileUIPart: () => Gn,
  isLoopFinished: () => Xg,
  isReasoningUIPart: () => Xs,
  isStaticToolUIPart: () => Hn,
  isTextUIPart: () => zn,
  isToolOrDynamicToolUIPart: () => sv,
  isToolUIPart: () => Mt,
  jsonSchema: () => wa,
  lastAssistantMessageIsCompleteWithApprovalResponses: () => _y,
  lastAssistantMessageIsCompleteWithToolCalls: () => Ty,
  modelMessageSchema: () => Ic,
  parseJsonEventStream: () => dr,
  parsePartialJson: () => Gr,
  pipeAgentUIStreamToResponse: () => vv,
  pipeTextStreamToResponse: () => oo,
  pipeUIMessageStreamToResponse: () => mo,
  pruneMessages: () => Vv,
  readUIMessageStream: () => mv,
  registerTelemetryIntegration: () => $g,
  rerank: () => py,
  safeValidateUIMessages: () => Hc,
  simulateReadableStream: () => Pv,
  simulateStreamingMiddleware: () => ey,
  smoothStream: () => Jv,
  stepCountIs: () => ts,
  streamObject: () => Dv,
  streamText: () => Zc,
  systemModelMessageSchema: () => wc,
  tool: () => ul,
  toolModelMessageSchema: () => xc,
  uiMessageChunkSchema: () => co,
  userModelMessageSchema: () => _c,
  validateUIMessages: () => go,
  wrapEmbeddingModel: () => ny,
  wrapImageModel: () => wo,
  wrapLanguageModel: () => bo,
  wrapProvider: () => iy,
  zodSchema: () => ne,
});
var Ew = o;
var yu = Eo(Cs(), 1),
  bu = Eo(Cs(), 1),
  Cm = "vercel.ai.gateway.error",
  Os = Symbol.for(Cm),
  Il,
  Sl,
  Se = class su extends ((Sl = Error), (Il = Os), Sl) {
    constructor({
      message: t,
      statusCode: r = 500,
      cause: a,
      generationId: n,
      isRetryable: s = r != null && (r === 408 || r === 409 || r === 429 || r >= 500),
    }) {
      (super(n ? `${t} [${n}]` : t),
        (this[Il] = !0),
        (this.statusCode = r),
        (this.cause = a),
        (this.generationId = n),
        (this.isRetryable = s));
    }
    static isInstance(t) {
      return su.hasMarker(t);
    }
    static hasMarker(t) {
      return typeof t == "object" && t !== null && Os in t && t[Os] === !0;
    }
  },
  ou = "GatewayAuthenticationError",
  Om = `vercel.ai.gateway.error.${ou}`,
  El = Symbol.for(Om),
  Ml,
  kl,
  kn = class iu extends ((kl = Se), (Ml = El), kl) {
    constructor({
      message: t = "Authentication failed",
      statusCode: r = 401,
      cause: a,
      generationId: n,
    } = {}) {
      (super({ message: t, statusCode: r, cause: a, generationId: n }),
        (this[Ml] = !0),
        (this.name = ou),
        (this.type = "authentication_error"));
    }
    static isInstance(t) {
      return Se.hasMarker(t) && El in t;
    }
    static createContextualError({
      apiKeyProvided: t,
      oidcTokenProvided: r,
      message: a = "Authentication failed",
      statusCode: n = 401,
      cause: s,
      generationId: l,
    }) {
      let i;
      return (
        t
          ? (i = `AI Gateway authentication failed: Invalid API key.

Create a new API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys

Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.`)
          : r
            ? (i = `AI Gateway authentication failed: Invalid OIDC token.

Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.

Alternatively, use an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys`)
            : (i = `AI Gateway authentication failed: No authentication provided.

Option 1 - API key:
Create an API key: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%2Fapi-keys
Provide via 'apiKey' option or 'AI_GATEWAY_API_KEY' environment variable.

Option 2 - OIDC token:
Run 'npx vercel link' to link your project, then 'vc env pull' to fetch the token.`),
        new iu({ message: i, statusCode: n, cause: s, generationId: l })
      );
    }
  },
  lu = "GatewayInvalidRequestError",
  Nm = `vercel.ai.gateway.error.${lu}`,
  Rl = Symbol.for(Nm),
  Al,
  Cl,
  Pm = class extends ((Cl = Se), (Al = Rl), Cl) {
    constructor({
      message: e = "Invalid request",
      statusCode: t = 400,
      cause: r,
      generationId: a,
    } = {}) {
      (super({ message: e, statusCode: t, cause: r, generationId: a }),
        (this[Al] = !0),
        (this.name = lu),
        (this.type = "invalid_request_error"));
    }
    static isInstance(e) {
      return Se.hasMarker(e) && Rl in e;
    }
  },
  uu = "GatewayRateLimitError",
  jm = `vercel.ai.gateway.error.${uu}`,
  Ol = Symbol.for(jm),
  Nl,
  Pl,
  Dm = class extends ((Pl = Se), (Nl = Ol), Pl) {
    constructor({
      message: e = "Rate limit exceeded",
      statusCode: t = 429,
      cause: r,
      generationId: a,
    } = {}) {
      (super({ message: e, statusCode: t, cause: r, generationId: a }),
        (this[Nl] = !0),
        (this.name = uu),
        (this.type = "rate_limit_exceeded"));
    }
    static isInstance(e) {
      return Se.hasMarker(e) && Ol in e;
    }
  },
  du = "GatewayModelNotFoundError",
  $m = `vercel.ai.gateway.error.${du}`,
  jl = Symbol.for($m),
  Fm = pe(() => ne(o.object({ modelId: o.string() }))),
  Dl,
  $l,
  qm = class extends (($l = Se), (Dl = jl), $l) {
    constructor({
      message: e = "Model not found",
      statusCode: t = 404,
      modelId: r,
      cause: a,
      generationId: n,
    } = {}) {
      (super({ message: e, statusCode: t, cause: a, generationId: n }),
        (this[Dl] = !0),
        (this.name = du),
        (this.type = "model_not_found"),
        (this.modelId = r));
    }
    static isInstance(e) {
      return Se.hasMarker(e) && jl in e;
    }
  },
  cu = "GatewayInternalServerError",
  Um = `vercel.ai.gateway.error.${cu}`,
  Fl = Symbol.for(Um),
  ql,
  Ul,
  Vl = class extends ((Ul = Se), (ql = Fl), Ul) {
    constructor({
      message: e = "Internal server error",
      statusCode: t = 500,
      cause: r,
      generationId: a,
    } = {}) {
      (super({ message: e, statusCode: t, cause: r, generationId: a }),
        (this[ql] = !0),
        (this.name = cu),
        (this.type = "internal_server_error"));
    }
    static isInstance(e) {
      return Se.hasMarker(e) && Fl in e;
    }
  },
  pu = "GatewayFailedDependencyError",
  Vm = `vercel.ai.gateway.error.${pu}`,
  Ll = Symbol.for(Vm),
  Jl,
  zl,
  Lm = class extends ((zl = Se), (Jl = Ll), zl) {
    constructor({
      message: e = "Failed dependency",
      statusCode: t = 424,
      cause: r,
      generationId: a,
    } = {}) {
      (super({ message: e, statusCode: t, cause: r, generationId: a }),
        (this[Jl] = !0),
        (this.name = pu),
        (this.type = "failed_dependency"));
    }
    static isInstance(e) {
      return Se.hasMarker(e) && Ll in e;
    }
  },
  fu = "GatewayForbiddenError",
  Jm = `vercel.ai.gateway.error.${fu}`,
  Gl = Symbol.for(Jm),
  Bl,
  Zl,
  zm = class extends ((Zl = Se), (Bl = Gl), Zl) {
    constructor({ message: e = "Forbidden", statusCode: t = 403, cause: r, generationId: a } = {}) {
      (super({ message: e, statusCode: t, cause: r, generationId: a }),
        (this[Bl] = !0),
        (this.name = fu),
        (this.type = "forbidden"));
    }
    static isInstance(e) {
      return Se.hasMarker(e) && Gl in e;
    }
  },
  mu = "GatewayResponseError",
  Gm = `vercel.ai.gateway.error.${mu}`,
  Hl = Symbol.for(Gm),
  Wl,
  Kl,
  Bm = class extends ((Kl = Se), (Wl = Hl), Kl) {
    constructor({
      message: e = "Invalid response from Gateway",
      statusCode: t = 502,
      response: r,
      validationError: a,
      cause: n,
      generationId: s,
    } = {}) {
      (super({ message: e, statusCode: t, cause: n, generationId: s }),
        (this[Wl] = !0),
        (this.name = mu),
        (this.type = "response_error"),
        (this.response = r),
        (this.validationError = a));
    }
    static isInstance(e) {
      return Se.hasMarker(e) && Hl in e;
    }
  };
async function Yl({
  response: e,
  statusCode: t,
  defaultMessage: r = "Gateway request failed",
  cause: a,
  authMethod: n,
}) {
  var s;
  let l = await Te({ value: e, schema: Zm });
  if (!l.success) {
    let f = typeof e == "object" && e !== null && "generationId" in e ? e.generationId : void 0;
    return new Bm({
      message: `Invalid error response format: ${r}`,
      statusCode: t,
      response: e,
      validationError: l.error,
      cause: a,
      generationId: f,
    });
  }
  let i = l.value,
    d = i.error.type,
    u = i.error.message,
    c = (s = i.generationId) != null ? s : void 0;
  switch (d) {
    case "authentication_error":
      return kn.createContextualError({
        apiKeyProvided: n === "api-key",
        oidcTokenProvided: n === "oidc",
        statusCode: t,
        cause: a,
        generationId: c,
      });
    case "invalid_request_error":
      return new Pm({ message: u, statusCode: t, cause: a, generationId: c });
    case "rate_limit_exceeded":
      return new Dm({ message: u, statusCode: t, cause: a, generationId: c });
    case "model_not_found": {
      let f = await Te({ value: i.error.param, schema: Fm });
      return new qm({
        message: u,
        statusCode: t,
        modelId: f.success ? f.value.modelId : void 0,
        cause: a,
        generationId: c,
      });
    }
    case "internal_server_error":
      return new Vl({ message: u, statusCode: t, cause: a, generationId: c });
    case "failed_dependency":
      return new Lm({ message: u, statusCode: t, cause: a, generationId: c });
    case "forbidden":
      return new zm({ message: u, statusCode: t, cause: a, generationId: c });
    default:
      return new Vl({ message: u, statusCode: t, cause: a, generationId: c });
  }
}
var Zm = pe(() =>
  ne(
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
function Hm(e) {
  if (e.data !== void 0) return e.data;
  if (e.responseBody != null)
    try {
      return JSON.parse(e.responseBody);
    } catch {
      return e.responseBody;
    }
  return {};
}
var hu = "GatewayTimeoutError",
  Wm = `vercel.ai.gateway.error.${hu}`,
  Xl = Symbol.for(Wm),
  Ql,
  eu,
  tu = class gu extends ((eu = Se), (Ql = Xl), eu) {
    constructor({
      message: t = "Request timed out",
      statusCode: r = 408,
      cause: a,
      generationId: n,
    } = {}) {
      (super({ message: t, statusCode: r, cause: a, generationId: n }),
        (this[Ql] = !0),
        (this.name = hu),
        (this.type = "timeout_error"));
    }
    static isInstance(t) {
      return Se.hasMarker(t) && Xl in t;
    }
    static createTimeoutError({
      originalMessage: t,
      statusCode: r = 408,
      cause: a,
      generationId: n,
    }) {
      let s = `Gateway request timed out: ${t}

    This is a client-side timeout. To resolve this, increase your timeout configuration: https://vercel.com/docs/ai-gateway/capabilities/video-generation#extending-timeouts-for-node.js`;
      return new gu({ message: s, statusCode: r, cause: a, generationId: n });
    }
  };
function ru(e) {
  if (!(e instanceof Error)) return !1;
  let t = e.code;
  return typeof t == "string"
    ? ["UND_ERR_HEADERS_TIMEOUT", "UND_ERR_BODY_TIMEOUT", "UND_ERR_CONNECT_TIMEOUT"].includes(t)
    : !1;
}
async function dt(e, t) {
  var r;
  return Se.isInstance(e)
    ? e
    : ru(e)
      ? tu.createTimeoutError({
          originalMessage: e instanceof Error ? e.message : "Unknown error",
          cause: e,
        })
      : ae.isInstance(e)
        ? e.cause && ru(e.cause)
          ? tu.createTimeoutError({ originalMessage: e.message, cause: e })
          : await Yl({
              response: Hm(e),
              statusCode: (r = e.statusCode) != null ? r : 500,
              defaultMessage: "Gateway request failed",
              cause: e,
              authMethod: t,
            })
        : await Yl({
            response: {},
            statusCode: 500,
            defaultMessage:
              e instanceof Error ? `Gateway request failed: ${e.message}` : "Unknown Gateway error",
            cause: e,
            authMethod: t,
          });
}
var vu = "ai-gateway-auth-method";
async function Wt(e) {
  let t = await Te({ value: e[vu], schema: Km });
  return t.success ? t.value : void 0;
}
var Km = pe(() => ne(o.union([o.literal("api-key"), o.literal("oidc")]))),
  Ym = ["embedding", "image", "language", "reranking", "video"],
  au = class {
    constructor(e) {
      this.config = e;
    }
    async getAvailableModels() {
      try {
        let { value: e } = await $r({
          url: `${this.config.baseURL}/config`,
          headers: await ee(this.config.headers()),
          successfulResponseHandler: nt(Xm),
          failedResponseHandler: De({ errorSchema: o.any(), errorToMessage: (t) => t }),
          fetch: this.config.fetch,
        });
        return e;
      } catch (e) {
        throw await dt(e);
      }
    }
    async getCredits() {
      try {
        let e = new URL(this.config.baseURL),
          { value: t } = await $r({
            url: `${e.origin}/v1/credits`,
            headers: await ee(this.config.headers()),
            successfulResponseHandler: nt(Qm),
            failedResponseHandler: De({ errorSchema: o.any(), errorToMessage: (r) => r }),
            fetch: this.config.fetch,
          });
        return t;
      } catch (e) {
        throw await dt(e);
      }
    }
  },
  Xm = pe(() =>
    ne(
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
          .transform((e) => e.filter((t) => t.modelType == null || Ym.includes(t.modelType))),
      })
    )
  ),
  Qm = pe(() =>
    ne(
      o
        .object({ balance: o.string(), total_used: o.string() })
        .transform(({ balance: e, total_used: t }) => ({ balance: e, totalUsed: t }))
    )
  ),
  eh = class {
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
        let { value: a } = await $r({
          url: `${t.origin}/v1/report?${r.toString()}`,
          headers: await ee(this.config.headers()),
          successfulResponseHandler: nt(th),
          failedResponseHandler: De({ errorSchema: o.any(), errorToMessage: (n) => n }),
          fetch: this.config.fetch,
        });
        return a;
      } catch (t) {
        throw await dt(t);
      }
    }
  },
  th = pe(() =>
    ne(
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
                cache_creation_input_tokens: l,
                reasoning_tokens: i,
                request_count: d,
                ...u
              }) => ({
                ...u,
                ...(e !== void 0 ? { credentialType: e } : {}),
                totalCost: t,
                ...(r !== void 0 ? { marketCost: r } : {}),
                ...(a !== void 0 ? { inputTokens: a } : {}),
                ...(n !== void 0 ? { outputTokens: n } : {}),
                ...(s !== void 0 ? { cachedInputTokens: s } : {}),
                ...(l !== void 0 ? { cacheCreationInputTokens: l } : {}),
                ...(i !== void 0 ? { reasoningTokens: i } : {}),
                ...(d !== void 0 ? { requestCount: d } : {}),
              })
            )
        ),
      })
    )
  ),
  rh = class {
    constructor(e) {
      this.config = e;
    }
    async getGenerationInfo(e) {
      try {
        let t = new URL(this.config.baseURL),
          { value: r } = await $r({
            url: `${t.origin}/v1/generation?id=${encodeURIComponent(e.id)}`,
            headers: await ee(this.config.headers()),
            successfulResponseHandler: nt(ah),
            failedResponseHandler: De({ errorSchema: o.any(), errorToMessage: (a) => a }),
            fetch: this.config.fetch,
          });
        return r;
      } catch (t) {
        throw await dt(t);
      }
    }
  },
  ah = pe(() =>
    ne(
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
                generation_time: l,
                native_tokens_prompt: i,
                native_tokens_completion: d,
                native_tokens_reasoning: u,
                native_tokens_cached: c,
                native_tokens_cache_creation: f,
                billable_web_search_calls: p,
                ...w
              }) => ({
                ...w,
                totalCost: e,
                upstreamInferenceCost: t,
                createdAt: r,
                isByok: a,
                providerName: n,
                finishReason: s,
                generationTime: l,
                promptTokens: i,
                completionTokens: d,
                reasoningTokens: u,
                cachedTokens: c,
                cacheCreationTokens: f,
                billableWebSearchCalls: p,
              })
            ),
        })
        .transform(({ data: e }) => e)
    )
  ),
  nh = class {
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
      let { args: t, warnings: r } = await this.getArgs(e),
        { abortSignal: a } = e,
        n = await ee(this.config.headers());
      try {
        let {
          responseHeaders: s,
          value: l,
          rawValue: i,
        } = await qt({
          url: this.getUrl(),
          headers: $t(
            n,
            e.headers,
            this.getModelConfigHeaders(this.modelId, !1),
            await ee(this.config.o11yHeaders)
          ),
          body: t,
          successfulResponseHandler: nt(o.any()),
          failedResponseHandler: De({ errorSchema: o.any(), errorToMessage: (d) => d }),
          ...(a && { abortSignal: a }),
          fetch: this.config.fetch,
        });
        return { ...l, request: { body: t }, response: { headers: s, body: i }, warnings: r };
      } catch (s) {
        throw await dt(s, await Wt(n));
      }
    }
    async doStream(e) {
      let { args: t, warnings: r } = await this.getArgs(e),
        { abortSignal: a } = e,
        n = await ee(this.config.headers());
      try {
        let { value: s, responseHeaders: l } = await qt({
          url: this.getUrl(),
          headers: $t(
            n,
            e.headers,
            this.getModelConfigHeaders(this.modelId, !0),
            await ee(this.config.o11yHeaders)
          ),
          body: t,
          successfulResponseHandler: cl(o.any()),
          failedResponseHandler: De({ errorSchema: o.any(), errorToMessage: (i) => i }),
          ...(a && { abortSignal: a }),
          fetch: this.config.fetch,
        });
        return {
          stream: s.pipeThrough(
            new TransformStream({
              start(i) {
                r.length > 0 && i.enqueue({ type: "stream-start", warnings: r });
              },
              transform(i, d) {
                if (i.success) {
                  let u = i.value;
                  if (u.type === "raw" && !e.includeRawChunks) return;
                  (u.type === "response-metadata" &&
                    u.timestamp &&
                    typeof u.timestamp == "string" &&
                    (u.timestamp = new Date(u.timestamp)),
                    d.enqueue(u));
                } else d.error(i.error);
              },
            })
          ),
          request: { body: t },
          response: { headers: l },
        };
      } catch (s) {
        throw await dt(s, await Wt(n));
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
  sh = class {
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
      let l = await ee(this.config.headers());
      try {
        let {
          responseHeaders: i,
          value: d,
          rawValue: u,
        } = await qt({
          url: this.getUrl(),
          headers: $t(l, t ?? {}, this.getModelConfigHeaders(), await ee(this.config.o11yHeaders)),
          body: { values: e, ...(a ? { providerOptions: a } : {}) },
          successfulResponseHandler: nt(ih),
          failedResponseHandler: De({ errorSchema: o.any(), errorToMessage: (c) => c }),
          ...(r && { abortSignal: r }),
          fetch: this.config.fetch,
        });
        return {
          embeddings: d.embeddings,
          usage: (n = d.usage) != null ? n : void 0,
          providerMetadata: d.providerMetadata,
          response: { headers: i, body: u },
          warnings: (s = d.warnings) != null ? s : [],
        };
      } catch (i) {
        throw await dt(i, await Wt(l));
      }
    }
    getUrl() {
      return `${this.config.baseURL}/embedding-model`;
    }
    getModelConfigHeaders() {
      return { "ai-embedding-model-specification-version": "3", "ai-model-id": this.modelId };
    }
  },
  oh = o.discriminatedUnion("type", [
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
  ih = pe(() =>
    ne(
      o.object({
        embeddings: o.array(o.array(o.number())),
        usage: o.object({ tokens: o.number() }).nullish(),
        warnings: o.array(oh).optional(),
        providerMetadata: o.record(o.string(), o.record(o.string(), o.unknown())).optional(),
      })
    )
  ),
  lh = class {
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
      mask: l,
      providerOptions: i,
      headers: d,
      abortSignal: u,
    }) {
      var c, f, p, w;
      let h = await ee(this.config.headers());
      try {
        let {
          responseHeaders: b,
          value: v,
          rawValue: g,
        } = await qt({
          url: this.getUrl(),
          headers: $t(h, d ?? {}, this.getModelConfigHeaders(), await ee(this.config.o11yHeaders)),
          body: {
            prompt: e,
            n: t,
            ...(r && { size: r }),
            ...(a && { aspectRatio: a }),
            ...(n && { seed: n }),
            ...(i && { providerOptions: i }),
            ...(s && { files: s.map((y) => nu(y)) }),
            ...(l && { mask: nu(l) }),
          },
          successfulResponseHandler: nt(ph),
          failedResponseHandler: De({ errorSchema: o.any(), errorToMessage: (y) => y }),
          ...(u && { abortSignal: u }),
          fetch: this.config.fetch,
        });
        return {
          images: v.images,
          warnings: (c = v.warnings) != null ? c : [],
          providerMetadata: v.providerMetadata,
          response: { timestamp: new Date(), modelId: this.modelId, headers: b },
          ...(v.usage != null && {
            usage: {
              inputTokens: (f = v.usage.inputTokens) != null ? f : void 0,
              outputTokens: (p = v.usage.outputTokens) != null ? p : void 0,
              totalTokens: (w = v.usage.totalTokens) != null ? w : void 0,
            },
          }),
        };
      } catch (b) {
        throw await dt(b, await Wt(h));
      }
    }
    getUrl() {
      return `${this.config.baseURL}/image-model`;
    }
    getModelConfigHeaders() {
      return { "ai-image-model-specification-version": "3", "ai-model-id": this.modelId };
    }
  };
function nu(e) {
  return e.type === "file" && e.data instanceof Uint8Array ? { ...e, data: St(e.data) } : e;
}
var uh = o.object({ images: o.array(o.unknown()).optional() }).catchall(o.unknown()),
  dh = o.discriminatedUnion("type", [
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
  ch = o.object({
    inputTokens: o.number().nullish(),
    outputTokens: o.number().nullish(),
    totalTokens: o.number().nullish(),
  }),
  ph = o.object({
    images: o.array(o.string()),
    warnings: o.array(dh).optional(),
    providerMetadata: o.record(o.string(), uh).optional(),
    usage: ch.optional(),
  }),
  fh = class {
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
      seed: l,
      image: i,
      providerOptions: d,
      headers: u,
      abortSignal: c,
    }) {
      var f;
      let p = await ee(this.config.headers());
      try {
        let { responseHeaders: w, value: h } = await qt({
          url: this.getUrl(),
          headers: $t(p, u ?? {}, this.getModelConfigHeaders(), await ee(this.config.o11yHeaders), {
            accept: "text/event-stream",
          }),
          body: {
            prompt: e,
            n: t,
            ...(r && { aspectRatio: r }),
            ...(a && { resolution: a }),
            ...(n && { duration: n }),
            ...(s && { fps: s }),
            ...(l && { seed: l }),
            ...(d && { providerOptions: d }),
            ...(i && { image: mh(i) }),
          },
          successfulResponseHandler: async ({ response: b, url: v, requestBodyValues: g }) => {
            if (b.body == null)
              throw new ae({
                message: "SSE response body is empty",
                url: v,
                requestBodyValues: g,
                statusCode: b.status,
              });
            let m = dr({ stream: b.body, schema: yh }).getReader(),
              { done: M, value: T } = await m.read();
            if ((m.releaseLock(), M || !T))
              throw new ae({
                message: "SSE stream ended without a data event",
                url: v,
                requestBodyValues: g,
                statusCode: b.status,
              });
            if (!T.success)
              throw new ae({
                message: "Failed to parse video SSE event",
                cause: T.error,
                url: v,
                requestBodyValues: g,
                statusCode: b.status,
              });
            let _ = T.value;
            if (_.type === "error")
              throw new ae({
                message: _.message,
                statusCode: _.statusCode,
                url: v,
                requestBodyValues: g,
                responseHeaders: Object.fromEntries([...b.headers]),
                responseBody: JSON.stringify(_),
                data: { error: { message: _.message, type: _.errorType, param: _.param } },
              });
            return {
              value: {
                videos: _.videos,
                warnings: _.warnings,
                providerMetadata: _.providerMetadata,
              },
              responseHeaders: Object.fromEntries([...b.headers]),
            };
          },
          failedResponseHandler: De({ errorSchema: o.any(), errorToMessage: (b) => b }),
          ...(c && { abortSignal: c }),
          fetch: this.config.fetch,
        });
        return {
          videos: h.videos,
          warnings: (f = h.warnings) != null ? f : [],
          providerMetadata: h.providerMetadata,
          response: { timestamp: new Date(), modelId: this.modelId, headers: w },
        };
      } catch (w) {
        throw await dt(w, await Wt(p));
      }
    }
    getUrl() {
      return `${this.config.baseURL}/video-model`;
    }
    getModelConfigHeaders() {
      return { "ai-video-model-specification-version": "3", "ai-model-id": this.modelId };
    }
  };
function mh(e) {
  return e.type === "file" && e.data instanceof Uint8Array ? { ...e, data: St(e.data) } : e;
}
var hh = o.object({ videos: o.array(o.unknown()).optional() }).catchall(o.unknown()),
  gh = o.union([
    o.object({ type: o.literal("url"), url: o.string(), mediaType: o.string() }),
    o.object({ type: o.literal("base64"), data: o.string(), mediaType: o.string() }),
  ]),
  vh = o.discriminatedUnion("type", [
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
  yh = o.discriminatedUnion("type", [
    o.object({
      type: o.literal("result"),
      videos: o.array(gh),
      warnings: o.array(vh).optional(),
      providerMetadata: o.record(o.string(), hh).optional(),
    }),
    o.object({
      type: o.literal("error"),
      message: o.string(),
      errorType: o.string(),
      statusCode: o.number(),
      param: o.unknown().nullable(),
    }),
  ]),
  bh = class {
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
      var l;
      let i = await ee(this.config.headers());
      try {
        let {
          responseHeaders: d,
          value: u,
          rawValue: c,
        } = await qt({
          url: this.getUrl(),
          headers: $t(i, a ?? {}, this.getModelConfigHeaders(), await ee(this.config.o11yHeaders)),
          body: {
            documents: e,
            query: t,
            ...(r != null ? { topN: r } : {}),
            ...(s ? { providerOptions: s } : {}),
          },
          successfulResponseHandler: nt(_h),
          failedResponseHandler: De({ errorSchema: o.any(), errorToMessage: (f) => f }),
          ...(n && { abortSignal: n }),
          fetch: this.config.fetch,
        });
        return {
          ranking: u.ranking,
          providerMetadata: u.providerMetadata,
          response: { headers: d, body: c },
          warnings: (l = u.warnings) != null ? l : [],
        };
      } catch (d) {
        throw await dt(d, await Wt(i));
      }
    }
    getUrl() {
      return `${this.config.baseURL}/reranking-model`;
    }
    getModelConfigHeaders() {
      return { "ai-reranking-model-specification-version": "3", "ai-model-id": this.modelId };
    }
  },
  wh = o.discriminatedUnion("type", [
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
  _h = pe(() =>
    ne(
      o.object({
        ranking: o.array(o.object({ index: o.number(), relevanceScore: o.number() })),
        warnings: o.array(wh).optional(),
        providerMetadata: o.record(o.string(), o.record(o.string(), o.unknown())).optional(),
      })
    )
  ),
  Th = pe(() =>
    ne(
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
            "Optional search queries to supplement the objective. Maximum 200 characters per query."
          ),
        mode: o
          .enum(["one-shot", "agentic"])
          .optional()
          .describe(
            'Mode preset: "one-shot" for comprehensive results with longer excerpts (default), "agentic" for concise, token-efficient results for multi-step workflows.'
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
              .describe("List of domains to include in search results."),
            exclude_domains: o
              .array(o.string())
              .optional()
              .describe("List of domains to exclude from search results."),
            after_date: o
              .string()
              .optional()
              .describe("Only include results published after this date (ISO 8601 format)."),
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
              .describe("Maximum total characters across all results."),
          })
          .optional()
          .describe("Excerpt configuration for controlling result length."),
        fetch_policy: o
          .object({
            max_age_seconds: o
              .number()
              .optional()
              .describe(
                "Maximum age in seconds for cached content. Set to 0 to always fetch fresh content."
              ),
          })
          .optional()
          .describe("Fetch policy for controlling content freshness."),
      })
    )
  ),
  xh = pe(() =>
    ne(
      o.union([
        o.object({
          searchId: o.string(),
          results: o.array(
            o.object({
              url: o.string(),
              title: o.string(),
              excerpt: o.string(),
              publishDate: o.string().nullable().optional(),
              relevanceScore: o.number().optional(),
            })
          ),
        }),
        o.object({
          error: o.enum([
            "api_error",
            "rate_limit",
            "timeout",
            "invalid_input",
            "configuration_error",
            "unknown",
          ]),
          statusCode: o.number().optional(),
          message: o.string(),
        }),
      ])
    )
  ),
  Ih = Mn({ id: "gateway.parallel_search", inputSchema: Th, outputSchema: xh }),
  Sh = (e = {}) => Ih(e),
  Eh = pe(() =>
    ne(
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
  Mh = pe(() =>
    ne(
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
  kh = Mn({ id: "gateway.perplexity_search", inputSchema: Eh, outputSchema: Mh }),
  Rh = (e = {}) => kh(e),
  Ah = { parallelSearch: Sh, perplexitySearch: Rh };
async function Ch() {
  var e;
  return (e = (0, yu.getContext)().headers) == null ? void 0 : e["x-vercel-id"];
}
var Oh = "3.0.131",
  Nh = "0.0.1";
function Ns(e = {}) {
  var t, r;
  let a = null,
    n = null,
    s = (t = e.metadataCacheRefreshMillis) != null ? t : 1e3 * 60 * 5,
    l = 0,
    i = (r = pl(e.baseURL)) != null ? r : "https://ai-gateway.vercel.sh/v3/ai",
    d = async () => {
      try {
        let y = await Ph(e);
        return ye(
          {
            Authorization: `Bearer ${y.token}`,
            "ai-gateway-protocol-version": Nh,
            [vu]: y.authMethod,
            ...e.headers,
          },
          `ai-sdk/gateway/${Oh}`
        );
      } catch (y) {
        throw kn.createContextualError({
          apiKeyProvided: !1,
          oidcTokenProvided: !1,
          statusCode: 401,
          cause: y,
        });
      }
    },
    u = () => {
      let y = ba({ settingValue: void 0, environmentVariableName: "VERCEL_DEPLOYMENT_ID" }),
        m = ba({ settingValue: void 0, environmentVariableName: "VERCEL_ENV" }),
        M = ba({ settingValue: void 0, environmentVariableName: "VERCEL_REGION" }),
        T = ba({ settingValue: void 0, environmentVariableName: "VERCEL_PROJECT_ID" });
      return async () => {
        let _ = await Ch();
        return {
          ...(y && { "ai-o11y-deployment-id": y }),
          ...(m && { "ai-o11y-environment": m }),
          ...(M && { "ai-o11y-region": M }),
          ...(_ && { "ai-o11y-request-id": _ }),
          ...(T && { "ai-o11y-project-id": T }),
        };
      };
    },
    c = (y) =>
      new nh(y, { provider: "gateway", baseURL: i, headers: d, fetch: e.fetch, o11yHeaders: u() }),
    f = async () => {
      var y, m, M;
      let T =
        (M =
          (m = (y = e._internal) == null ? void 0 : y.currentDate) == null
            ? void 0
            : m.call(y).getTime()) != null
          ? M
          : Date.now();
      return (
        (!a || T - l > s) &&
          ((l = T),
          (a = new au({ baseURL: i, headers: d, fetch: e.fetch })
            .getAvailableModels()
            .then((_) => ((n = _), _))
            .catch(async (_) => {
              throw await dt(_, await Wt(await d()));
            }))),
        n ? Promise.resolve(n) : a
      );
    },
    p = async () =>
      new au({ baseURL: i, headers: d, fetch: e.fetch }).getCredits().catch(async (y) => {
        throw await dt(y, await Wt(await d()));
      }),
    w = async (y) =>
      new eh({ baseURL: i, headers: d, fetch: e.fetch }).getSpendReport(y).catch(async (m) => {
        throw await dt(m, await Wt(await d()));
      }),
    h = async (y) =>
      new rh({ baseURL: i, headers: d, fetch: e.fetch }).getGenerationInfo(y).catch(async (m) => {
        throw await dt(m, await Wt(await d()));
      }),
    b = function (y) {
      if (new.target)
        throw new Error(
          "The Gateway Provider model function cannot be called with the new keyword."
        );
      return c(y);
    };
  ((b.specificationVersion = "v3"),
    (b.getAvailableModels = f),
    (b.getCredits = p),
    (b.getSpendReport = w),
    (b.getGenerationInfo = h),
    (b.imageModel = (y) =>
      new lh(y, { provider: "gateway", baseURL: i, headers: d, fetch: e.fetch, o11yHeaders: u() })),
    (b.languageModel = c));
  let v = (y) =>
    new sh(y, { provider: "gateway", baseURL: i, headers: d, fetch: e.fetch, o11yHeaders: u() });
  ((b.embeddingModel = v),
    (b.textEmbeddingModel = v),
    (b.videoModel = (y) =>
      new fh(y, {
        provider: "gateway",
        baseURL: i,
        headers: d,
        fetch: e.fetch,
        o11yHeaders: u(),
      })));
  let g = (y) =>
    new bh(y, { provider: "gateway", baseURL: i, headers: d, fetch: e.fetch, o11yHeaders: u() });
  return (
    (b.rerankingModel = g),
    (b.reranking = g),
    (b.chat = b.languageModel),
    (b.embedding = b.embeddingModel),
    (b.image = b.imageModel),
    (b.video = b.videoModel),
    (b.tools = Ah),
    b
  );
}
var Rn = Ns();
async function Ph(e) {
  let t = ba({ settingValue: e.apiKey, environmentVariableName: "AI_GATEWAY_API_KEY" });
  return t
    ? { token: t, authMethod: "api-key" }
    : { token: await (0, bu.getVercelOidcToken)(), authMethod: "oidc" };
}
var cr = "1.9.1";
var wu = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
function jh(e) {
  let t = new Set([e]),
    r = new Set(),
    a = e.match(wu);
  if (!a) return () => !1;
  let n = { major: +a[1], minor: +a[2], patch: +a[3], prerelease: a[4] };
  if (n.prerelease != null)
    return function (d) {
      return d === e;
    };
  function s(i) {
    return (r.add(i), !1);
  }
  function l(i) {
    return (t.add(i), !0);
  }
  return function (d) {
    if (t.has(d)) return !0;
    if (r.has(d)) return !1;
    let u = d.match(wu);
    if (!u) return s(d);
    let c = { major: +u[1], minor: +u[2], patch: +u[3], prerelease: u[4] };
    return c.prerelease != null || n.major !== c.major
      ? s(d)
      : n.major === 0
        ? n.minor === c.minor && n.patch <= c.patch
          ? l(d)
          : s(d)
        : n.minor <= c.minor
          ? l(d)
          : s(d);
  };
}
var _u = jh(cr);
var Dh = cr.split(".")[0],
  Qa = Symbol.for(`opentelemetry.js.api.${Dh}`),
  en =
    typeof globalThis == "object"
      ? globalThis
      : typeof self == "object"
        ? self
        : typeof window == "object" || typeof window == "object"
          ? window
          : {};
function _a(e, t, r, a = !1) {
  var n;
  let s = (en[Qa] = (n = en[Qa]) !== null && n !== void 0 ? n : { version: cr });
  if (!a && s[e]) {
    let l = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
    return (r.error(l.stack || l.message), !1);
  }
  if (s.version !== cr) {
    let l = new Error(
      `@opentelemetry/api: Registration of version v${s.version} for ${e} does not match previously registered API v${cr}`
    );
    return (r.error(l.stack || l.message), !1);
  }
  return ((s[e] = t), r.debug(`@opentelemetry/api: Registered a global for ${e} v${cr}.`), !0);
}
function pr(e) {
  var t, r;
  let a = (t = en[Qa]) === null || t === void 0 ? void 0 : t.version;
  if (!(!a || !_u(a))) return (r = en[Qa]) === null || r === void 0 ? void 0 : r[e];
}
function Ta(e, t) {
  t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${cr}.`);
  let r = en[Qa];
  r && delete r[e];
}
var An = class {
  constructor(t) {
    this._namespace = t.namespace || "DiagComponentLogger";
  }
  debug(...t) {
    return tn("debug", this._namespace, t);
  }
  error(...t) {
    return tn("error", this._namespace, t);
  }
  info(...t) {
    return tn("info", this._namespace, t);
  }
  warn(...t) {
    return tn("warn", this._namespace, t);
  }
  verbose(...t) {
    return tn("verbose", this._namespace, t);
  }
};
function tn(e, t, r) {
  let a = pr("diag");
  if (a) return a[e](t, ...r);
}
var st;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"),
    (e[(e.ERROR = 30)] = "ERROR"),
    (e[(e.WARN = 50)] = "WARN"),
    (e[(e.INFO = 60)] = "INFO"),
    (e[(e.DEBUG = 70)] = "DEBUG"),
    (e[(e.VERBOSE = 80)] = "VERBOSE"),
    (e[(e.ALL = 9999)] = "ALL"));
})(st || (st = {}));
function Tu(e, t) {
  (e < st.NONE ? (e = st.NONE) : e > st.ALL && (e = st.ALL), (t = t || {}));
  function r(a, n) {
    let s = t[a];
    return typeof s == "function" && e >= n ? s.bind(t) : function () {};
  }
  return {
    error: r("error", st.ERROR),
    warn: r("warn", st.WARN),
    info: r("info", st.INFO),
    debug: r("debug", st.DEBUG),
    verbose: r("verbose", st.VERBOSE),
  };
}
var $h = "diag",
  Sr = class e {
    static instance() {
      return (this._instance || (this._instance = new e()), this._instance);
    }
    constructor() {
      function t(n) {
        return function (...s) {
          let l = pr("diag");
          if (l) return l[n](...s);
        };
      }
      let r = this,
        a = (n, s = { logLevel: st.INFO }) => {
          var l, i, d;
          if (n === r) {
            let f = new Error(
              "Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation"
            );
            return (r.error((l = f.stack) !== null && l !== void 0 ? l : f.message), !1);
          }
          typeof s == "number" && (s = { logLevel: s });
          let u = pr("diag"),
            c = Tu((i = s.logLevel) !== null && i !== void 0 ? i : st.INFO, n);
          if (u && !s.suppressOverrideMessage) {
            let f =
              (d = new Error().stack) !== null && d !== void 0
                ? d
                : "<failed to generate stacktrace>";
            (u.warn(`Current logger will be overwritten from ${f}`),
              c.warn(`Current logger will overwrite one already registered from ${f}`));
          }
          return _a("diag", c, r, !0);
        };
      ((r.setLogger = a),
        (r.disable = () => {
          Ta($h, r);
        }),
        (r.createComponentLogger = (n) => new An(n)),
        (r.verbose = t("verbose")),
        (r.debug = t("debug")),
        (r.info = t("info")),
        (r.warn = t("warn")),
        (r.error = t("error")));
    }
  };
function xu(e) {
  return Symbol.for(e);
}
var Ps = class e {
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
  Iu = new Ps();
var Cn = class {
  active() {
    return Iu;
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
var js = "context",
  Fh = new Cn(),
  Er = class e {
    constructor() {}
    static getInstance() {
      return (this._instance || (this._instance = new e()), this._instance);
    }
    setGlobalContextManager(t) {
      return _a(js, t, Sr.instance());
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
      return pr(js) || Fh;
    }
    disable() {
      (this._getContextManager().disable(), Ta(js, Sr.instance()));
    }
  };
var On;
(function (e) {
  ((e[(e.NONE = 0)] = "NONE"), (e[(e.SAMPLED = 1)] = "SAMPLED"));
})(On || (On = {}));
var Ds = "0000000000000000",
  $s = "00000000000000000000000000000000",
  Su = { traceId: $s, spanId: Ds, traceFlags: On.NONE };
var Kt = class {
  constructor(t = Su) {
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
var Fs = xu("OpenTelemetry Context Key SPAN");
function Nn(e) {
  return e.getValue(Fs) || void 0;
}
function Eu() {
  return Nn(Er.getInstance().active());
}
function rn(e, t) {
  return e.setValue(Fs, t);
}
function Mu(e) {
  return e.deleteValue(Fs);
}
function ku(e, t) {
  return rn(e, new Kt(t));
}
function Pn(e) {
  var t;
  return (t = Nn(e)) === null || t === void 0 ? void 0 : t.spanContext();
}
var jn = new Uint8Array([
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
  1, 1, 1, 1,
]);
function Ru(e, t) {
  if (typeof e != "string" || e.length !== t) return !1;
  let r = 0;
  for (let a = 0; a < e.length; a += 4)
    r +=
      (jn[e.charCodeAt(a)] | 0) +
      (jn[e.charCodeAt(a + 1)] | 0) +
      (jn[e.charCodeAt(a + 2)] | 0) +
      (jn[e.charCodeAt(a + 3)] | 0);
  return r === t;
}
function qh(e) {
  return Ru(e, 32) && e !== $s;
}
function Uh(e) {
  return Ru(e, 16) && e !== Ds;
}
function Dn(e) {
  return qh(e.traceId) && Uh(e.spanId);
}
function Au(e) {
  return new Kt(e);
}
var qs = Er.getInstance(),
  xa = class {
    startSpan(t, r, a = qs.active()) {
      if (!!r?.root) return new Kt();
      let s = a && Pn(a);
      return Vh(s) && Dn(s) ? new Kt(s) : new Kt();
    }
    startActiveSpan(t, r, a, n) {
      let s, l, i;
      if (arguments.length < 2) return;
      arguments.length === 2
        ? (i = r)
        : arguments.length === 3
          ? ((s = r), (i = a))
          : ((s = r), (l = a), (i = n));
      let d = l ?? qs.active(),
        u = this.startSpan(t, s, d),
        c = rn(d, u);
      return qs.with(c, i, void 0, u);
    }
  };
function Vh(e) {
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
var Lh = new xa(),
  $n = class {
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
      return t ? ((this._delegate = t), this._delegate) : Lh;
    }
  };
var Fn = class {
  getTracer(t, r, a) {
    return new xa();
  }
};
var Jh = new Fn(),
  an = class {
    getTracer(t, r, a) {
      var n;
      return (n = this.getDelegateTracer(t, r, a)) !== null && n !== void 0
        ? n
        : new $n(this, t, r, a);
    }
    getDelegate() {
      var t;
      return (t = this._delegate) !== null && t !== void 0 ? t : Jh;
    }
    setDelegate(t) {
      this._delegate = t;
    }
    getDelegateTracer(t, r, a) {
      var n;
      return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(t, r, a);
    }
  };
var Ia;
(function (e) {
  ((e[(e.UNSET = 0)] = "UNSET"), (e[(e.OK = 1)] = "OK"), (e[(e.ERROR = 2)] = "ERROR"));
})(Ia || (Ia = {}));
var qn = Er.getInstance();
var Us = "trace",
  Un = class e {
    constructor() {
      ((this._proxyTracerProvider = new an()),
        (this.wrapSpanContext = Au),
        (this.isSpanContextValid = Dn),
        (this.deleteSpan = Mu),
        (this.getSpan = Nn),
        (this.getActiveSpan = Eu),
        (this.getSpanContext = Pn),
        (this.setSpan = rn),
        (this.setSpanContext = ku));
    }
    static getInstance() {
      return (this._instance || (this._instance = new e()), this._instance);
    }
    setGlobalTracerProvider(t) {
      let r = _a(Us, this._proxyTracerProvider, Sr.instance());
      return (r && this._proxyTracerProvider.setDelegate(t), r);
    }
    getTracerProvider() {
      return pr(Us) || this._proxyTracerProvider;
    }
    getTracer(t, r) {
      return this.getTracerProvider().getTracer(t, r);
    }
    disable() {
      (Ta(Us, Sr.instance()), (this._proxyTracerProvider = new an()));
    }
  };
var Vs = Un.getInstance();
var zh = Object.defineProperty,
  Gh = (e, t) => {
    for (var r in t) zh(e, r, { get: t[r], enumerable: !0 });
  },
  zu = "AI_InvalidArgumentError",
  Gu = `vercel.ai.error.${zu}`,
  Bh = Symbol.for(Gu),
  Bu,
  fe = class extends I {
    constructor({ parameter: e, value: t, message: r }) {
      (super({ name: zu, message: `Invalid argument for parameter ${e}: ${r}` }),
        (this[Bu] = !0),
        (this.parameter = e),
        (this.value = t));
    }
    static isInstance(e) {
      return I.hasMarker(e, Gu);
    }
  };
Bu = Bh;
var Zu = "AI_InvalidStreamPartError",
  Hu = `vercel.ai.error.${Zu}`,
  Zh = Symbol.for(Hu),
  Wu,
  Hh = class extends I {
    constructor({ chunk: e, message: t }) {
      (super({ name: Zu, message: t }), (this[Wu] = !0), (this.chunk = e));
    }
    static isInstance(e) {
      return I.hasMarker(e, Hu);
    }
  };
Wu = Zh;
var Ku = "AI_InvalidToolApprovalError",
  Yu = `vercel.ai.error.${Ku}`,
  Wh = Symbol.for(Yu),
  Xu,
  Qu = class extends I {
    constructor({ approvalId: e }) {
      (super({
        name: Ku,
        message: `Tool approval response references unknown approvalId: "${e}". No matching tool-approval-request found in message history.`,
      }),
        (this[Xu] = !0),
        (this.approvalId = e));
    }
    static isInstance(e) {
      return I.hasMarker(e, Yu);
    }
  };
Xu = Wh;
var ed = "AI_InvalidToolApprovalSignatureError",
  td = `vercel.ai.error.${ed}`,
  Kh = Symbol.for(td),
  rd,
  Ls = class extends I {
    constructor({ approvalId: e, toolCallId: t, reason: r }) {
      (super({
        name: ed,
        message: `Tool approval signature verification failed for approval "${e}" (tool call "${t}"): ${r}`,
      }),
        (this[rd] = !0),
        (this.approvalId = e),
        (this.toolCallId = t));
    }
    static isInstance(e) {
      return I.hasMarker(e, td);
    }
  };
rd = Kh;
var ad = "AI_InvalidToolInputError",
  nd = `vercel.ai.error.${ad}`,
  Yh = Symbol.for(nd),
  sd,
  dn = class extends I {
    constructor({
      toolInput: e,
      toolName: t,
      cause: r,
      message: a = `Invalid input for tool ${t}: ${Bt(r)}`,
    }) {
      (super({ name: ad, message: a, cause: r }),
        (this[sd] = !0),
        (this.toolInput = e),
        (this.toolName = t));
    }
    static isInstance(e) {
      return I.hasMarker(e, nd);
    }
  };
sd = Yh;
var od = "AI_ToolCallNotFoundForApprovalError",
  id = `vercel.ai.error.${od}`,
  Xh = Symbol.for(id),
  ld,
  Kn = class extends I {
    constructor({ toolCallId: e, approvalId: t }) {
      (super({ name: od, message: `Tool call "${e}" not found for approval request "${t}".` }),
        (this[ld] = !0),
        (this.toolCallId = e),
        (this.approvalId = t));
    }
    static isInstance(e) {
      return I.hasMarker(e, id);
    }
  };
ld = Xh;
var ud = "AI_MissingToolResultsError",
  dd = `vercel.ai.error.${ud}`,
  Qh = Symbol.for(dd),
  cd,
  Js = class extends I {
    constructor({ toolCallIds: e }) {
      (super({
        name: ud,
        message: `Tool result${e.length > 1 ? "s are" : " is"} missing for tool call${e.length > 1 ? "s" : ""} ${e.join(", ")}.`,
      }),
        (this[cd] = !0),
        (this.toolCallIds = e));
    }
    static isInstance(e) {
      return I.hasMarker(e, dd);
    }
  };
cd = Qh;
var pd = "AI_NoImageGeneratedError",
  fd = `vercel.ai.error.${pd}`,
  eg = Symbol.for(fd),
  md,
  hd = class extends I {
    constructor({ message: e = "No image generated.", cause: t, responses: r }) {
      (super({ name: pd, message: e, cause: t }), (this[md] = !0), (this.responses = r));
    }
    static isInstance(e) {
      return I.hasMarker(e, fd);
    }
  };
md = eg;
var gd = "AI_NoObjectGeneratedError",
  vd = `vercel.ai.error.${gd}`,
  tg = Symbol.for(vd),
  yd,
  ft = class extends I {
    constructor({
      message: e = "No object generated.",
      cause: t,
      text: r,
      response: a,
      usage: n,
      finishReason: s,
    }) {
      (super({ name: gd, message: e, cause: t }),
        (this[yd] = !0),
        (this.text = r),
        (this.response = a),
        (this.usage = n),
        (this.finishReason = s));
    }
    static isInstance(e) {
      return I.hasMarker(e, vd);
    }
  };
yd = tg;
var bd = "AI_NoOutputGeneratedError",
  wd = `vercel.ai.error.${bd}`,
  rg = Symbol.for(wd),
  _d,
  sn = class extends I {
    constructor({ message: e = "No output generated.", cause: t } = {}) {
      (super({ name: bd, message: e, cause: t }), (this[_d] = !0));
    }
    static isInstance(e) {
      return I.hasMarker(e, wd);
    }
  };
_d = rg;
var Td = "AI_NoSpeechGeneratedError",
  xd = `vercel.ai.error.${Td}`,
  ag = Symbol.for(xd),
  Id,
  Sd = class extends I {
    constructor(e) {
      (super({ name: Td, message: "No speech audio generated." }),
        (this[Id] = !0),
        (this.responses = e.responses));
    }
    static isInstance(e) {
      return I.hasMarker(e, xd);
    }
  };
Id = ag;
var Ed = "AI_NoTranscriptGeneratedError",
  Md = `vercel.ai.error.${Ed}`,
  ng = Symbol.for(Md),
  kd,
  Rd = class extends I {
    constructor(e) {
      (super({ name: Ed, message: "No transcript generated." }),
        (this[kd] = !0),
        (this.responses = e.responses));
    }
    static isInstance(e) {
      return I.hasMarker(e, Md);
    }
  };
kd = ng;
var zs = "AI_NoVideoGeneratedError",
  Ad = `vercel.ai.error.${zs}`,
  sg = Symbol.for(Ad),
  Cd,
  Od = class extends I {
    constructor({ message: e = "No video generated.", cause: t, responses: r }) {
      (super({ name: zs, message: e, cause: t }), (this[Cd] = !0), (this.responses = r));
    }
    static isInstance(e) {
      return I.hasMarker(e, Ad);
    }
    static isNoVideoGeneratedError(e) {
      return e instanceof Error && e.name === zs && typeof e.responses < "u";
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
Cd = sg;
var Nd = "AI_NoSuchToolError",
  Pd = `vercel.ai.error.${Nd}`,
  og = Symbol.for(Pd),
  jd,
  Bn = class extends I {
    constructor({
      toolName: e,
      availableTools: t = void 0,
      message:
        r = `Model tried to call unavailable tool '${e}'. ${t === void 0 ? "No tools are available." : `Available tools: ${t.join(", ")}.`}`,
    }) {
      (super({ name: Nd, message: r }),
        (this[jd] = !0),
        (this.toolName = e),
        (this.availableTools = t));
    }
    static isInstance(e) {
      return I.hasMarker(e, Pd);
    }
  };
jd = og;
var Dd = "AI_ToolCallRepairError",
  $d = `vercel.ai.error.${Dd}`,
  ig = Symbol.for($d),
  Fd,
  qd = class extends I {
    constructor({
      cause: e,
      originalError: t,
      message: r = `Error repairing tool call: ${Bt(e)}`,
    }) {
      (super({ name: Dd, message: r, cause: e }), (this[Fd] = !0), (this.originalError = t));
    }
    static isInstance(e) {
      return I.hasMarker(e, $d);
    }
  };
Fd = ig;
var kr = class extends I {
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
  Ud = "AI_UIMessageStreamError",
  Vd = `vercel.ai.error.${Ud}`,
  lg = Symbol.for(Vd),
  Ld,
  Fr = class extends I {
    constructor({ chunkType: e, chunkId: t, message: r }) {
      (super({ name: Ud, message: r }), (this[Ld] = !0), (this.chunkType = e), (this.chunkId = t));
    }
    static isInstance(e) {
      return I.hasMarker(e, Vd);
    }
  };
Ld = lg;
var Jd = "AI_InvalidDataContentError",
  zd = `vercel.ai.error.${Jd}`,
  ug = Symbol.for(zd),
  Gd,
  Gs = class extends I {
    constructor({
      content: e,
      cause: t,
      message:
        r = `Invalid data content. Expected a base64 string, Uint8Array, ArrayBuffer, or Buffer, but got ${typeof e}.`,
    }) {
      (super({ name: Jd, message: r, cause: t }), (this[Gd] = !0), (this.content = e));
    }
    static isInstance(e) {
      return I.hasMarker(e, zd);
    }
  };
Gd = ug;
var Bd = "AI_InvalidMessageRoleError",
  Zd = `vercel.ai.error.${Bd}`,
  dg = Symbol.for(Zd),
  Hd,
  Wd = class extends I {
    constructor({
      role: e,
      message:
        t = `Invalid message role: '${e}'. Must be one of: "system", "user", "assistant", "tool".`,
    }) {
      (super({ name: Bd, message: t }), (this[Hd] = !0), (this.role = e));
    }
    static isInstance(e) {
      return I.hasMarker(e, Zd);
    }
  };
Hd = dg;
var Kd = "AI_MessageConversionError",
  Yd = `vercel.ai.error.${Kd}`,
  cg = Symbol.for(Yd),
  Xd,
  Qd = class extends I {
    constructor({ originalMessage: e, message: t }) {
      (super({ name: Kd, message: t }), (this[Xd] = !0), (this.originalMessage = e));
    }
    static isInstance(e) {
      return I.hasMarker(e, Yd);
    }
  };
Xd = cg;
var ec = "AI_RetryError",
  tc = `vercel.ai.error.${ec}`,
  pg = Symbol.for(tc),
  rc,
  Bs = class extends I {
    constructor({ message: e, reason: t, errors: r }) {
      (super({ name: ec, message: e }),
        (this[rc] = !0),
        (this.reason = t),
        (this.errors = r),
        (this.lastError = r[r.length - 1]));
    }
    static isInstance(e) {
      return I.hasMarker(e, tc);
    }
  };
rc = pg;
function Xt(e) {
  return e === void 0 ? [] : Array.isArray(e) ? e : [e];
}
async function Ut(e) {
  for (let t of Xt(e.callbacks))
    if (t != null)
      try {
        await t(e.event);
      } catch {}
}
function fg({ warning: e, provider: t, model: r }) {
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
var mg =
    "AI SDK Warning System: To turn off warning logging, set the AI_SDK_LOG_WARNINGS global to false.",
  Cu = !1,
  _t = (e) => {
    if (e.warnings.length === 0) return;
    let t = globalThis.AI_SDK_LOG_WARNINGS;
    if (t !== !1) {
      if (typeof t == "function") {
        t(e);
        return;
      }
      Cu || ((Cu = !0), console.info(mg));
      for (let r of e.warnings)
        console.warn(fg({ warning: r, provider: e.provider, model: e.model }));
    }
  };
function cn({ provider: e, modelId: t }) {
  _t({
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
function ac(e) {
  return e.specificationVersion === "v3"
    ? e
    : (cn({ provider: e.provider, modelId: e.modelId }),
      new Proxy(e, {
        get(t, r) {
          return r === "specificationVersion" ? "v3" : t[r];
        },
      }));
}
function nc(e) {
  return e.specificationVersion === "v3"
    ? e
    : (cn({ provider: e.provider, modelId: e.modelId }),
      new Proxy(e, {
        get(t, r) {
          return r === "specificationVersion" ? "v3" : t[r];
        },
      }));
}
function sc(e) {
  return e.specificationVersion === "v3"
    ? e
    : (cn({ provider: e.provider, modelId: e.modelId }),
      new Proxy(e, {
        get(t, r) {
          switch (r) {
            case "specificationVersion":
              return "v3";
            case "doGenerate":
              return async (...a) => {
                let n = await t.doGenerate(...a);
                return { ...n, finishReason: oc(n.finishReason), usage: ic(n.usage) };
              };
            case "doStream":
              return async (...a) => {
                let n = await t.doStream(...a);
                return { ...n, stream: hg(n.stream) };
              };
            default:
              return t[r];
          }
        },
      }));
}
function hg(e) {
  return e.pipeThrough(
    new TransformStream({
      transform(t, r) {
        t.type === "finish"
          ? r.enqueue({ ...t, finishReason: oc(t.finishReason), usage: ic(t.usage) })
          : r.enqueue(t);
      },
    })
  );
}
function oc(e) {
  return { unified: e === "unknown" ? "other" : e, raw: void 0 };
}
function ic(e) {
  return {
    inputTokens: {
      total: e.inputTokens,
      noCache: void 0,
      cacheRead: e.cachedInputTokens,
      cacheWrite: void 0,
    },
    outputTokens: { total: e.outputTokens, text: void 0, reasoning: e.reasoningTokens },
  };
}
function lc(e) {
  return e.specificationVersion === "v3"
    ? e
    : (cn({ provider: e.provider, modelId: e.modelId }),
      new Proxy(e, {
        get(t, r) {
          return r === "specificationVersion" ? "v3" : t[r];
        },
      }));
}
function uc(e) {
  return e.specificationVersion === "v3"
    ? e
    : (cn({ provider: e.provider, modelId: e.modelId }),
      new Proxy(e, {
        get(t, r) {
          return r === "specificationVersion" ? "v3" : t[r];
        },
      }));
}
function Sa(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      let t = e;
      throw new kr({ version: t.specificationVersion, provider: t.provider, modelId: t.modelId });
    }
    return sc(e);
  }
  return Lr().languageModel(e);
}
function dc(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      let t = e;
      throw new kr({ version: t.specificationVersion, provider: t.provider, modelId: t.modelId });
    }
    return ac(e);
  }
  return Lr().embeddingModel(e);
}
function gg(e) {
  var t, r;
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      let a = e;
      throw new kr({ version: a.specificationVersion, provider: a.provider, modelId: a.modelId });
    }
    return uc(e);
  }
  return (r = (t = Lr()).transcriptionModel) == null ? void 0 : r.call(t, e);
}
function vg(e) {
  var t, r;
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      let a = e;
      throw new kr({ version: a.specificationVersion, provider: a.provider, modelId: a.modelId });
    }
    return lc(e);
  }
  return (r = (t = Lr()).speechModel) == null ? void 0 : r.call(t, e);
}
function yg(e) {
  if (typeof e != "string") {
    if (e.specificationVersion !== "v3" && e.specificationVersion !== "v2") {
      let t = e;
      throw new kr({ version: t.specificationVersion, provider: t.provider, modelId: t.modelId });
    }
    return nc(e);
  }
  return Lr().imageModel(e);
}
function bg(e) {
  if (typeof e == "string") {
    let r = Lr().videoModel;
    if (!r)
      throw new Error(
        'The default provider does not support video models. Please use a Experimental_VideoModelV3 object from a provider (e.g., vertex.video("model-id")).'
      );
    return r(e);
  }
  if (e.specificationVersion !== "v3") {
    let t = e;
    throw new kr({ version: t.specificationVersion, provider: t.provider, modelId: t.modelId });
  }
  return e;
}
function wg(e) {
  if (typeof e == "string") {
    let r = Lr().rerankingModel;
    if (!r)
      throw new Error(
        'The default provider does not support reranking models. Please use a RerankingModel object from a provider (e.g., gateway.rerankingModel("model-id")).'
      );
    return r(e);
  }
  if (e.specificationVersion !== "v3") {
    let t = e;
    throw new kr({ version: t.specificationVersion, provider: t.provider, modelId: t.modelId });
  }
  return e;
}
function Lr() {
  var e;
  return (e = globalThis.AI_SDK_DEFAULT_PROVIDER) != null ? e : Rn;
}
function Qs(e) {
  if (e != null) return typeof e == "number" ? e : e.totalMs;
}
function cc(e) {
  if (!(e == null || typeof e == "number")) return e.stepMs;
}
function _g(e) {
  if (!(e == null || typeof e == "number")) return e.chunkMs;
}
var Ea = [
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
  pc = [
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
    { mediaType: "audio/mp4", bytesPrefix: [102, 116, 121, 112] },
    { mediaType: "audio/webm", bytesPrefix: [26, 69, 223, 163] },
  ],
  Ou = [
    { mediaType: "video/mp4", bytesPrefix: [0, 0, 0, null, 102, 116, 121, 112] },
    { mediaType: "video/webm", bytesPrefix: [26, 69, 223, 163] },
    { mediaType: "video/quicktime", bytesPrefix: [0, 0, 0, 20, 102, 116, 121, 112, 113, 116] },
    { mediaType: "video/x-msvideo", bytesPrefix: [82, 73, 70, 70] },
  ],
  Tg = (e) => {
    let t = typeof e == "string" ? ut(e) : e,
      r = ((t[6] & 127) << 21) | ((t[7] & 127) << 14) | ((t[8] & 127) << 7) | (t[9] & 127);
    return t.slice(r + 10);
  };
function xg(e) {
  return (typeof e == "string" && e.startsWith("SUQz")) ||
    (typeof e != "string" && e.length > 10 && e[0] === 73 && e[1] === 68 && e[2] === 51)
    ? Tg(e)
    : e;
}
function Qt({ data: e, signatures: t }) {
  let r = xg(e),
    a = typeof r == "string" ? ut(r.substring(0, Math.min(r.length, 24))) : r;
  for (let n of t)
    if (a.length >= n.bytesPrefix.length && n.bytesPrefix.every((s, l) => s === null || a[l] === s))
      return n.mediaType;
}
var er = "6.0.205",
  fc = async ({ url: e, maxBytes: t, abortSignal: r }) => {
    var a;
    let n = e.toString();
    try {
      let s = ye({}, `ai-sdk/${er}`, ya()),
        l = await Ts({ url: n, headers: s, abortSignal: r });
      if (!l.ok) throw new Pe({ url: n, statusCode: l.status, statusText: l.statusText });
      return {
        data: await xs({ response: l, url: n, maxBytes: t ?? En }),
        mediaType: (a = l.headers.get("content-type")) != null ? a : void 0,
      };
    } catch (s) {
      throw Pe.isInstance(s) ? s : new Pe({ url: n, cause: s });
    }
  },
  Ig =
    (e = fc) =>
    (t) =>
      Promise.all(t.map(async (r) => (r.isUrlSupportedByModel ? null : e(r))));
function eo(e) {
  try {
    let [t, r] = e.split(",");
    return { mediaType: t.split(";")[0].split(":")[1], base64Content: r };
  } catch {
    return { mediaType: void 0, base64Content: void 0 };
  }
}
var mc = o.union([
  o.string(),
  o.instanceof(Uint8Array),
  o.instanceof(ArrayBuffer),
  o.custom(
    (e) => {
      var t, r;
      return (r = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? r : !1;
    },
    { message: "Must be a Buffer" }
  ),
]);
function to(e) {
  if (e instanceof Uint8Array) return { data: e, mediaType: void 0 };
  if (e instanceof ArrayBuffer) return { data: new Uint8Array(e), mediaType: void 0 };
  if (typeof e == "string")
    try {
      e = new URL(e);
    } catch {}
  if (e instanceof URL && e.protocol === "data:") {
    let { mediaType: t, base64Content: r } = eo(e.toString());
    if (t == null || r == null)
      throw new I({
        name: "InvalidDataContentError",
        message: `Invalid data URL format in content ${e.toString()}`,
      });
    return { data: r, mediaType: t };
  }
  return { data: e, mediaType: void 0 };
}
function Zs(e) {
  return typeof e == "string" ? e : e instanceof ArrayBuffer ? St(new Uint8Array(e)) : St(e);
}
function hc(e) {
  if (e instanceof Uint8Array) return e;
  if (typeof e == "string")
    try {
      return ut(e);
    } catch (t) {
      throw new Gs({
        message: "Invalid data content. Content string is not a base64-encoded media.",
        content: e,
        cause: t,
      });
    }
  if (e instanceof ArrayBuffer) return new Uint8Array(e);
  throw new Gs({ content: e });
}
async function Yn({ prompt: e, supportedUrls: t, download: r = Ig() }) {
  let a = await Eg(e.messages, r, t),
    n = new Map();
  for (let u of e.messages)
    if (u.role === "assistant" && Array.isArray(u.content))
      for (let c of u.content)
        c.type === "tool-approval-request" &&
          "approvalId" in c &&
          "toolCallId" in c &&
          n.set(c.approvalId, c.toolCallId);
  let s = new Set();
  for (let u of e.messages)
    if (u.role === "tool") {
      for (let c of u.content)
        if (c.type === "tool-approval-response") {
          let f = n.get(c.approvalId);
          f && s.add(f);
        }
    }
  let l = [
      ...(e.system != null
        ? typeof e.system == "string"
          ? [{ role: "system", content: e.system }]
          : Xt(e.system).map((u) => ({
              role: "system",
              content: u.content,
              providerOptions: u.providerOptions,
            }))
        : []),
      ...e.messages.map((u) => Sg({ message: u, downloadedAssets: a })),
    ],
    i = [];
  for (let u of l) {
    if (u.role !== "tool") {
      i.push(u);
      continue;
    }
    let c = i.at(-1);
    c?.role === "tool" ? c.content.push(...u.content) : i.push(u);
  }
  let d = new Set();
  for (let u of i)
    switch (u.role) {
      case "assistant": {
        for (let c of u.content)
          c.type === "tool-call" && !c.providerExecuted && d.add(c.toolCallId);
        break;
      }
      case "tool": {
        for (let c of u.content) c.type === "tool-result" && d.delete(c.toolCallId);
        break;
      }
      case "user":
      case "system":
        for (let c of s) d.delete(c);
        if (d.size > 0) throw new Js({ toolCallIds: Array.from(d) });
        break;
    }
  for (let u of s) d.delete(u);
  if (d.size > 0) throw new Js({ toolCallIds: Array.from(d) });
  return i.filter((u) => u.role !== "tool" || u.content.length > 0);
}
function Sg({ message: e, downloadedAssets: t }) {
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
              .map((a) => Mg(a, t))
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
                    let { data: s, mediaType: l } = to(a.data);
                    return {
                      type: "file",
                      data: s,
                      filename: a.filename,
                      mediaType: l ?? a.mediaType,
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
                      output: Nu({ output: a.output, downloadedAssets: t }),
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
                  output: Nu({ output: a.output, downloadedAssets: t }),
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
      throw new Wd({ role: a });
    }
  }
}
async function Eg(e, t, r) {
  var a;
  let n = [];
  for (let i of e) {
    if (i.role === "user" && Array.isArray(i.content))
      for (let d of i.content)
        (d.type === "image" || d.type === "file") &&
          n.push({
            data: d.type === "image" ? d.image : d.data,
            mediaType: (a = d.mediaType) != null ? a : d.type === "image" ? "image/*" : void 0,
          });
    if (i.role === "tool" || i.role === "assistant") {
      if (!Array.isArray(i.content)) continue;
      for (let d of i.content)
        if (d.type === "tool-result" && d.output.type === "content")
          for (let u of d.output.value)
            (u.type === "image-url" || u.type === "file-url") &&
              n.push({
                data: new URL(u.url),
                mediaType: u.type === "image-url" ? "image/*" : void 0,
              });
    }
  }
  let s = n
      .map((i) => {
        let d = i.mediaType,
          { data: u } = to(i.data);
        return { mediaType: d, data: u };
      })
      .filter((i) => i.data instanceof URL)
      .map((i) => ({
        url: i.data,
        isUrlSupportedByModel:
          i.mediaType != null &&
          al({ url: i.data.toString(), mediaType: i.mediaType, supportedUrls: r }),
      })),
    l = await t(s);
  return Object.fromEntries(
    l
      .map((i, d) =>
        i == null ? null : [s[d].url.toString(), { data: i.data, mediaType: i.mediaType }]
      )
      .filter((i) => i != null)
  );
}
function Mg(e, t) {
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
  let { data: s, mediaType: l } = to(a),
    i = l ?? e.mediaType,
    d = s;
  if (d instanceof URL) {
    let u = t[d.toString()];
    u && ((d = u.data), i ?? (i = u.mediaType));
  }
  switch (n) {
    case "image":
      return (
        (d instanceof Uint8Array || typeof d == "string") &&
          (i = (r = Qt({ data: d, signatures: Ea })) != null ? r : i),
        {
          type: "file",
          mediaType: i ?? "image/*",
          filename: void 0,
          data: d,
          providerOptions: e.providerOptions,
        }
      );
    case "file": {
      if (i == null) throw new Error("Media type is missing for file part");
      return {
        type: "file",
        mediaType: i,
        filename: e.filename,
        data: d,
        providerOptions: e.providerOptions,
      };
    }
  }
}
function Nu({ output: e, downloadedAssets: t }) {
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
                  data: Zs(s.data),
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
                  data: Zs(s.data),
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
async function qr({ toolCallId: e, input: t, output: r, tool: a, errorMode: n }) {
  return n === "text"
    ? { type: "error-text", value: Bt(r) }
    : n === "json"
      ? { type: "error-json", value: Pu(r) }
      : a?.toModelOutput
        ? await a.toModelOutput({ toolCallId: e, input: t, output: r })
        : typeof r == "string"
          ? { type: "text", value: r }
          : { type: "json", value: Pu(r) };
}
function Pu(e) {
  return e === void 0 ? null : e;
}
function Ur({
  maxOutputTokens: e,
  temperature: t,
  topP: r,
  topK: a,
  presencePenalty: n,
  frequencyPenalty: s,
  seed: l,
  stopSequences: i,
}) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new fe({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be an integer",
      });
    if (e < 1)
      throw new fe({
        parameter: "maxOutputTokens",
        value: e,
        message: "maxOutputTokens must be >= 1",
      });
  }
  if (t != null && typeof t != "number")
    throw new fe({ parameter: "temperature", value: t, message: "temperature must be a number" });
  if (r != null && typeof r != "number")
    throw new fe({ parameter: "topP", value: r, message: "topP must be a number" });
  if (a != null && typeof a != "number")
    throw new fe({ parameter: "topK", value: a, message: "topK must be a number" });
  if (n != null && typeof n != "number")
    throw new fe({
      parameter: "presencePenalty",
      value: n,
      message: "presencePenalty must be a number",
    });
  if (s != null && typeof s != "number")
    throw new fe({
      parameter: "frequencyPenalty",
      value: s,
      message: "frequencyPenalty must be a number",
    });
  if (l != null && !Number.isInteger(l))
    throw new fe({ parameter: "seed", value: l, message: "seed must be an integer" });
  return {
    maxOutputTokens: e,
    temperature: t,
    topP: r,
    topK: a,
    presencePenalty: n,
    frequencyPenalty: s,
    stopSequences: i,
    seed: l,
  };
}
function kg(e) {
  return e != null && Object.keys(e).length > 0;
}
async function gc({ tools: e, toolChoice: t, activeTools: r }) {
  if (!kg(e)) return { tools: void 0, toolChoice: void 0 };
  let a = r != null ? Object.entries(e).filter(([s]) => r.includes(s)) : Object.entries(e),
    n = [];
  for (let [s, l] of a) {
    let i = l.type;
    switch (i) {
      case void 0:
      case "dynamic":
      case "function":
        n.push({
          type: "function",
          name: s,
          description: l.description,
          inputSchema: await Ye(l.inputSchema).jsonSchema,
          ...(l.inputExamples != null ? { inputExamples: l.inputExamples } : {}),
          providerOptions: l.providerOptions,
          ...(l.strict != null ? { strict: l.strict } : {}),
        });
        break;
      case "provider":
        n.push({ type: "provider", name: s, id: l.id, args: l.args });
        break;
      default: {
        let d = i;
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
var Vr = o.lazy(() =>
    o.union([
      o.null(),
      o.string(),
      o.number(),
      o.boolean(),
      o.record(o.string(), Vr.optional()),
      o.array(Vr),
    ])
  ),
  j = o.record(o.string(), o.record(o.string(), Vr.optional())),
  vc = o.object({ type: o.literal("text"), text: o.string(), providerOptions: j.optional() }),
  Rg = o.object({
    type: o.literal("image"),
    image: o.union([mc, o.instanceof(URL)]),
    mediaType: o.string().optional(),
    providerOptions: j.optional(),
  }),
  yc = o.object({
    type: o.literal("file"),
    data: o.union([mc, o.instanceof(URL)]),
    filename: o.string().optional(),
    mediaType: o.string(),
    providerOptions: j.optional(),
  }),
  Ag = o.object({ type: o.literal("reasoning"), text: o.string(), providerOptions: j.optional() }),
  Cg = o.object({
    type: o.literal("tool-call"),
    toolCallId: o.string(),
    toolName: o.string(),
    input: o.unknown(),
    providerOptions: j.optional(),
    providerExecuted: o.boolean().optional(),
  }),
  Og = o.discriminatedUnion("type", [
    o.object({ type: o.literal("text"), value: o.string(), providerOptions: j.optional() }),
    o.object({ type: o.literal("json"), value: Vr, providerOptions: j.optional() }),
    o.object({
      type: o.literal("execution-denied"),
      reason: o.string().optional(),
      providerOptions: j.optional(),
    }),
    o.object({ type: o.literal("error-text"), value: o.string(), providerOptions: j.optional() }),
    o.object({ type: o.literal("error-json"), value: Vr, providerOptions: j.optional() }),
    o.object({
      type: o.literal("content"),
      value: o.array(
        o.union([
          o.object({ type: o.literal("text"), text: o.string(), providerOptions: j.optional() }),
          o.object({ type: o.literal("media"), data: o.string(), mediaType: o.string() }),
          o.object({
            type: o.literal("file-data"),
            data: o.string(),
            mediaType: o.string(),
            filename: o.string().optional(),
            providerOptions: j.optional(),
          }),
          o.object({ type: o.literal("file-url"), url: o.string(), providerOptions: j.optional() }),
          o.object({
            type: o.literal("file-id"),
            fileId: o.union([o.string(), o.record(o.string(), o.string())]),
            providerOptions: j.optional(),
          }),
          o.object({
            type: o.literal("image-data"),
            data: o.string(),
            mediaType: o.string(),
            providerOptions: j.optional(),
          }),
          o.object({
            type: o.literal("image-url"),
            url: o.string(),
            providerOptions: j.optional(),
          }),
          o.object({
            type: o.literal("image-file-id"),
            fileId: o.union([o.string(), o.record(o.string(), o.string())]),
            providerOptions: j.optional(),
          }),
          o.object({ type: o.literal("custom"), providerOptions: j.optional() }),
        ])
      ),
    }),
  ]),
  bc = o.object({
    type: o.literal("tool-result"),
    toolCallId: o.string(),
    toolName: o.string(),
    output: Og,
    providerOptions: j.optional(),
  }),
  Ng = o.object({
    type: o.literal("tool-approval-request"),
    approvalId: o.string(),
    toolCallId: o.string(),
  }),
  Pg = o.object({
    type: o.literal("tool-approval-response"),
    approvalId: o.string(),
    approved: o.boolean(),
    reason: o.string().optional(),
  }),
  wc = o.object({ role: o.literal("system"), content: o.string(), providerOptions: j.optional() }),
  _c = o.object({
    role: o.literal("user"),
    content: o.union([o.string(), o.array(o.union([vc, Rg, yc]))]),
    providerOptions: j.optional(),
  }),
  Tc = o.object({
    role: o.literal("assistant"),
    content: o.union([o.string(), o.array(o.union([vc, yc, Ag, Cg, bc, Ng]))]),
    providerOptions: j.optional(),
  }),
  xc = o.object({
    role: o.literal("tool"),
    content: o.array(o.union([bc, Pg])),
    providerOptions: j.optional(),
  }),
  Ic = o.union([wc, _c, Tc, xc]);
async function Xn({ allowSystemInMessages: e, system: t, prompt: r, messages: a }) {
  if (r == null && a == null)
    throw new Zt({ prompt: r, message: "prompt or messages must be defined" });
  if (r != null && a != null)
    throw new Zt({ prompt: r, message: "prompt and messages cannot be defined at the same time" });
  if (typeof t != "string" && !Xt(t).every((s) => s.role === "system"))
    throw new Zt({
      prompt: r,
      message: "system must be a string, SystemModelMessage, or array of SystemModelMessage",
    });
  if (r != null && typeof r == "string") a = [{ role: "user", content: r }];
  else if (r != null && Array.isArray(r)) a = r;
  else if (a == null) throw new Zt({ prompt: r, message: "prompt or messages must be defined" });
  if (a.length === 0) throw new Zt({ prompt: r, message: "messages must not be empty" });
  if (a.some((s) => s.role === "system")) {
    if (e === !1)
      throw new Zt({
        prompt: r,
        message:
          "System messages are not allowed in the prompt or messages fields. Use the system option instead.",
      });
    e === void 0 &&
      console.warn(
        "AI SDK Warning: System messages in the prompt or messages fields can be a security risk because they may enable prompt injection attacks. Use the system option instead when possible. Set allowSystemInMessages to true to suppress this warning, or false to throw an error."
      );
  }
  let n = await Te({ value: a, schema: o.array(Ic) });
  if (!n.success)
    throw new Zt({
      prompt: r,
      message: "The messages do not match the ModelMessage[] schema.",
      cause: n.error,
    });
  return { messages: a, system: t };
}
function Qn(e) {
  if (!kn.isInstance(e)) return e;
  let t = (process == null ? void 0 : "production") === "production",
    r = "https://ai-sdk.dev/unauthenticated-ai-gateway";
  return t
    ? new I({
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
function Qe({ operationId: e, telemetry: t }) {
  return {
    "operation.name": `${e}${t?.functionId != null ? ` ${t.functionId}` : ""}`,
    "resource.name": t?.functionId,
    "ai.operationId": e,
    "ai.telemetry.functionId": t?.functionId,
  };
}
function Jr({ model: e, settings: t, telemetry: r, headers: a }) {
  var n;
  return {
    "ai.model.provider": e.provider,
    "ai.model.id": e.modelId,
    ...Object.entries(t).reduce((s, [l, i]) => {
      if (l === "timeout") {
        let d = Qs(i);
        d != null && (s[`ai.settings.${l}`] = d);
      } else s[`ai.settings.${l}`] = i;
      return s;
    }, {}),
    ...Object.entries((n = r?.metadata) != null ? n : {}).reduce(
      (s, [l, i]) => ((s[`ai.telemetry.metadata.${l}`] = i), s),
      {}
    ),
    ...Object.entries(a ?? {}).reduce(
      (s, [l, i]) => (i !== void 0 && (s[`ai.request.headers.${l}`] = i), s),
      {}
    ),
  };
}
var jg = {
    startSpan() {
      return Vn;
    },
    startActiveSpan(e, t, r, a) {
      if (typeof t == "function") return t(Vn);
      if (typeof r == "function") return r(Vn);
      if (typeof a == "function") return a(Vn);
    },
  },
  Vn = {
    spanContext() {
      return Dg;
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
  Dg = { traceId: "", spanId: "", traceFlags: 0 };
function zr({ isEnabled: e = !1, tracer: t } = {}) {
  return e ? t || Vs.getTracer("ai") : jg;
}
async function et({ name: e, tracer: t, attributes: r, fn: a, endWhenDone: n = !0 }) {
  return t.startActiveSpan(e, { attributes: await r }, async (s) => {
    let l = qn.active();
    try {
      let i = await qn.with(l, () => a(s));
      return (n && s.end(), i);
    } catch (i) {
      try {
        Sc(s, i);
      } finally {
        s.end();
      }
      throw i;
    }
  });
}
function Sc(e, t) {
  t instanceof Error
    ? (e.recordException({ name: t.name, message: t.message, stack: t.stack }),
      e.setStatus({ code: Ia.ERROR, message: t.message }))
    : e.setStatus({ code: Ia.ERROR });
}
async function te({ telemetry: e, attributes: t }) {
  if (e?.isEnabled !== !0) return {};
  let r = {};
  for (let [a, n] of Object.entries(t))
    if (n != null) {
      if (typeof n == "object" && "input" in n && typeof n.input == "function") {
        if (e?.recordInputs === !1) continue;
        let s = await n.input();
        s != null && (r[a] = s);
        continue;
      }
      if (typeof n == "object" && "output" in n && typeof n.output == "function") {
        if (e?.recordOutputs === !1) continue;
        let s = await n.output();
        s != null && (r[a] = s);
        continue;
      }
      r[a] = n;
    }
  return r;
}
function es(e) {
  return JSON.stringify(
    e.map((t) => ({
      ...t,
      content:
        typeof t.content == "string"
          ? t.content
          : t.content.map((r) =>
              r.type === "file"
                ? { ...r, data: r.data instanceof Uint8Array ? Zs(r.data) : r.data }
                : r
            ),
    }))
  );
}
function $g(e) {
  (globalThis.AI_SDK_TELEMETRY_INTEGRATIONS || (globalThis.AI_SDK_TELEMETRY_INTEGRATIONS = []),
    globalThis.AI_SDK_TELEMETRY_INTEGRATIONS.push(e));
}
function Fg() {
  var e;
  return (e = globalThis.AI_SDK_TELEMETRY_INTEGRATIONS) != null ? e : [];
}
function qg(e) {
  var t, r, a, n, s, l;
  return {
    onStart: (t = e.onStart) == null ? void 0 : t.bind(e),
    onStepStart: (r = e.onStepStart) == null ? void 0 : r.bind(e),
    onToolCallStart: (a = e.onToolCallStart) == null ? void 0 : a.bind(e),
    onToolCallFinish: (n = e.onToolCallFinish) == null ? void 0 : n.bind(e),
    onStepFinish: (s = e.onStepFinish) == null ? void 0 : s.bind(e),
    onFinish: (l = e.onFinish) == null ? void 0 : l.bind(e),
  };
}
function Ec() {
  let e = Fg();
  return (t) => {
    let r = Xt(t),
      a = [...e, ...r];
    function n(s) {
      let l = a.map(s).filter(Boolean);
      return async (i) => {
        for (let d of l)
          try {
            await d(i);
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
function Ma(e) {
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
    totalTokens: pt(e.inputTokens.total, e.outputTokens.total),
    raw: e.raw,
    reasoningTokens: e.outputTokens.reasoning,
    cachedInputTokens: e.inputTokens.cacheRead,
  };
}
function Ln() {
  return {
    inputTokens: void 0,
    inputTokenDetails: { noCacheTokens: void 0, cacheReadTokens: void 0, cacheWriteTokens: void 0 },
    outputTokens: void 0,
    outputTokenDetails: { textTokens: void 0, reasoningTokens: void 0 },
    totalTokens: void 0,
    raw: void 0,
  };
}
function Mc(e, t) {
  var r, a, n, s, l, i, d, u, c, f;
  return {
    inputTokens: pt(e.inputTokens, t.inputTokens),
    inputTokenDetails: {
      noCacheTokens: pt(
        (r = e.inputTokenDetails) == null ? void 0 : r.noCacheTokens,
        (a = t.inputTokenDetails) == null ? void 0 : a.noCacheTokens
      ),
      cacheReadTokens: pt(
        (n = e.inputTokenDetails) == null ? void 0 : n.cacheReadTokens,
        (s = t.inputTokenDetails) == null ? void 0 : s.cacheReadTokens
      ),
      cacheWriteTokens: pt(
        (l = e.inputTokenDetails) == null ? void 0 : l.cacheWriteTokens,
        (i = t.inputTokenDetails) == null ? void 0 : i.cacheWriteTokens
      ),
    },
    outputTokens: pt(e.outputTokens, t.outputTokens),
    outputTokenDetails: {
      textTokens: pt(
        (d = e.outputTokenDetails) == null ? void 0 : d.textTokens,
        (u = t.outputTokenDetails) == null ? void 0 : u.textTokens
      ),
      reasoningTokens: pt(
        (c = e.outputTokenDetails) == null ? void 0 : c.reasoningTokens,
        (f = t.outputTokenDetails) == null ? void 0 : f.reasoningTokens
      ),
    },
    totalTokens: pt(e.totalTokens, t.totalTokens),
    reasoningTokens: pt(e.reasoningTokens, t.reasoningTokens),
    cachedInputTokens: pt(e.cachedInputTokens, t.cachedInputTokens),
  };
}
function pt(e, t) {
  return e == null && t == null ? void 0 : (e ?? 0) + (t ?? 0);
}
function Ug(e, t) {
  return {
    inputTokens: pt(e.inputTokens, t.inputTokens),
    outputTokens: pt(e.outputTokens, t.outputTokens),
    totalTokens: pt(e.totalTokens, t.totalTokens),
  };
}
function ka(e, t) {
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
        l =
          n !== null &&
          typeof n == "object" &&
          !Array.isArray(n) &&
          !(n instanceof Date) &&
          !(n instanceof RegExp),
        i =
          s != null &&
          typeof s == "object" &&
          !Array.isArray(s) &&
          !(s instanceof Date) &&
          !(s instanceof RegExp);
      l && i ? (r[a] = ka(s, n)) : (r[a] = n);
    }
  return r;
}
function Vg({ error: e, exponentialBackoffDelay: t }) {
  let r = ae.isInstance(e)
    ? e.responseHeaders
    : ae.isInstance(e.cause)
      ? e.cause.responseHeaders
      : void 0;
  if (!r) return t;
  let a,
    n = r["retry-after-ms"];
  if (n) {
    let l = parseFloat(n);
    Number.isNaN(l) || (a = l);
  }
  let s = r["retry-after"];
  if (s && a === void 0) {
    let l = parseFloat(s);
    Number.isNaN(l) ? (a = Date.parse(s) - Date.now()) : (a = l * 1e3);
  }
  return a != null && !Number.isNaN(a) && 0 <= a && (a < 60 * 1e3 || a < t) ? a : t;
}
var Lg =
  ({ maxRetries: e = 2, initialDelayInMs: t = 2e3, backoffFactor: r = 2, abortSignal: a } = {}) =>
  async (n) =>
    kc(n, { maxRetries: e, delayInMs: t, backoffFactor: r, abortSignal: a });
async function kc(e, { maxRetries: t, delayInMs: r, backoffFactor: a, abortSignal: n }, s = []) {
  try {
    return await e();
  } catch (l) {
    if (ur(l) || t === 0) throw l;
    let i = va(l),
      d = [...s, l],
      u = d.length;
    if (u > t)
      throw new Bs({
        message: `Failed after ${u} attempts. Last error: ${i}`,
        reason: "maxRetriesExceeded",
        errors: d,
      });
    if (
      l instanceof Error &&
      ((ae.isInstance(l) && l.isRetryable === !0) || (Se.isInstance(l) && l.isRetryable === !0)) &&
      u <= t
    )
      return (
        await ma(Vg({ error: l, exponentialBackoffDelay: r }), { abortSignal: n }),
        kc(e, { maxRetries: t, delayInMs: a * r, backoffFactor: a, abortSignal: n }, d)
      );
    throw u === 1
      ? l
      : new Bs({
          message: `Failed after ${u} attempts with non-retryable error: '${i}'`,
          reason: "errorNotRetryable",
          errors: d,
        });
  }
}
function Lt({ maxRetries: e, abortSignal: t }) {
  if (e != null) {
    if (!Number.isInteger(e))
      throw new fe({ parameter: "maxRetries", value: e, message: "maxRetries must be an integer" });
    if (e < 0)
      throw new fe({ parameter: "maxRetries", value: e, message: "maxRetries must be >= 0" });
  }
  let r = e ?? 2;
  return { maxRetries: r, retry: Lg({ maxRetries: r, abortSignal: t }) };
}
function Rc({ messages: e }) {
  let t = e.at(-1);
  if (t?.role != "tool") return { approvedToolApprovals: [], deniedToolApprovals: [] };
  let r = {};
  for (let d of e)
    if (d.role === "assistant" && typeof d.content != "string") {
      let u = d.content;
      for (let c of u) c.type === "tool-call" && (r[c.toolCallId] = c);
    }
  let a = {};
  for (let d of e)
    if (d.role === "assistant" && typeof d.content != "string") {
      let u = d.content;
      for (let c of u) c.type === "tool-approval-request" && (a[c.approvalId] = c);
    }
  let n = {};
  for (let d of t.content) d.type === "tool-result" && (n[d.toolCallId] = d);
  let s = [],
    l = [],
    i = t.content.filter((d) => d.type === "tool-approval-response");
  for (let d of i) {
    let u = a[d.approvalId];
    if (u == null) throw new Qu({ approvalId: d.approvalId });
    if (n[u.toolCallId] != null) continue;
    let c = r[u.toolCallId];
    if (c == null) throw new Kn({ toolCallId: u.toolCallId, approvalId: u.approvalId });
    let f = { approvalRequest: u, approvalResponse: d, toolCall: c };
    d.approved ? s.push(f) : l.push(f);
  }
  return { approvedToolApprovals: s, deniedToolApprovals: l };
}
function on() {
  var e, t;
  return (t = (e = globalThis?.performance) == null ? void 0 : e.now()) != null ? t : Date.now();
}
async function ro({
  toolCall: e,
  tools: t,
  tracer: r,
  telemetry: a,
  messages: n,
  abortSignal: s,
  experimental_context: l,
  stepNumber: i,
  model: d,
  onPreliminaryToolResult: u,
  onToolCallStart: c,
  onToolCallFinish: f,
}) {
  let { toolName: p, toolCallId: w, input: h } = e,
    b = t?.[p];
  if (b?.execute == null) return;
  let v = {
    stepNumber: i,
    model: d,
    toolCall: e,
    messages: n,
    abortSignal: s,
    functionId: a?.functionId,
    metadata: a?.metadata,
    experimental_context: l,
  };
  return et({
    name: "ai.toolCall",
    attributes: te({
      telemetry: a,
      attributes: {
        ...Qe({ operationId: "ai.toolCall", telemetry: a }),
        "ai.toolCall.name": p,
        "ai.toolCall.id": w,
        "ai.toolCall.args": { output: () => JSON.stringify(h) },
      },
    }),
    tracer: r,
    fn: async (g) => {
      let y;
      await Ut({ event: v, callbacks: c });
      let m = on();
      try {
        let T = fl({
          execute: b.execute.bind(b),
          input: h,
          options: { toolCallId: w, messages: n, abortSignal: s, experimental_context: l },
        });
        for await (let _ of T)
          _.type === "preliminary"
            ? u?.({ ...e, type: "tool-result", output: _.output, preliminary: !0 })
            : (y = _.output);
      } catch (T) {
        let _ = on() - m;
        return (
          await Ut({ event: { ...v, success: !1, error: T, durationMs: _ }, callbacks: f }),
          Sc(g, T),
          {
            type: "tool-error",
            toolCallId: w,
            toolName: p,
            input: h,
            error: T,
            dynamic: b.type === "dynamic",
            ...(e.providerMetadata != null ? { providerMetadata: e.providerMetadata } : {}),
            ...(e.toolMetadata != null ? { toolMetadata: e.toolMetadata } : {}),
          }
        );
      }
      let M = on() - m;
      await Ut({ event: { ...v, success: !0, output: y, durationMs: M }, callbacks: f });
      try {
        g.setAttributes(
          await te({
            telemetry: a,
            attributes: { "ai.toolCall.result": { output: () => JSON.stringify(y) } },
          })
        );
      } catch {}
      return {
        type: "tool-result",
        toolCallId: w,
        toolName: p,
        input: h,
        output: y,
        dynamic: b.type === "dynamic",
        ...(e.providerMetadata != null ? { providerMetadata: e.providerMetadata } : {}),
        ...(e.toolMetadata != null ? { toolMetadata: e.toolMetadata } : {}),
      };
    },
  });
}
function Hs(e) {
  let t = e.filter((r) => r.type === "reasoning");
  return t.length === 0
    ? void 0
    : t.map((r) => r.text).join(`
`);
}
function Ws(e) {
  let t = e.filter((r) => r.type === "text");
  if (t.length !== 0) return t.map((r) => r.text).join("");
}
var Mr = class {
    constructor({ data: e, mediaType: t }) {
      let r = e instanceof Uint8Array;
      ((this.base64Data = r ? void 0 : e),
        (this.uint8ArrayData = r ? e : void 0),
        (this.mediaType = t));
    }
    get base64() {
      return (
        this.base64Data == null && (this.base64Data = St(this.uint8ArrayData)),
        this.base64Data
      );
    }
    get uint8Array() {
      return (
        this.uint8ArrayData == null && (this.uint8ArrayData = ut(this.base64Data)),
        this.uint8ArrayData
      );
    }
  },
  Jg = class extends Mr {
    constructor(e) {
      (super(e), (this.type = "file"));
    }
  };
async function ao({ tool: e, toolCall: t, messages: r, experimental_context: a }) {
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
var no = new TextEncoder();
function Ks(e) {
  return e == null || typeof e != "object"
    ? JSON.stringify(e)
    : Array.isArray(e)
      ? `[${e.map(Ks).join(",")}]`
      : `{${Object.keys(e)
          .sort()
          .map((a) => `${JSON.stringify(a)}:${Ks(e[a])}`)
          .join(",")}}`;
}
function Ac(e) {
  return St(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
function zg(e) {
  return ut(e);
}
async function Cc(e) {
  let t = typeof e == "string" ? no.encode(e) : e;
  return crypto.subtle.importKey("raw", t, { name: "HMAC", hash: "SHA-256" }, !1, [
    "sign",
    "verify",
  ]);
}
async function Oc(e) {
  let t = Ks(e),
    r = await crypto.subtle.digest("SHA-256", no.encode(t));
  return Ac(new Uint8Array(r));
}
function Nc(e, t, r, a) {
  return no.encode(`${e}
${t}
${r}
${a}`);
}
async function Gg({ secret: e, approvalId: t, toolCallId: r, toolName: a, input: n }) {
  let s = await Cc(e),
    l = await Oc(n),
    i = Nc(t, r, a, l),
    d = await crypto.subtle.sign("HMAC", s, i);
  return Ac(new Uint8Array(d));
}
async function Bg({
  secret: e,
  signature: t,
  approvalId: r,
  toolCallId: a,
  toolName: n,
  input: s,
}) {
  let l = await Cc(e),
    i = await Oc(s),
    d = Nc(r, a, n, i),
    u = zg(t);
  return crypto.subtle.verify("HMAC", l, u, d);
}
async function Pc({ secret: e, approvalId: t, toolCallId: r, toolName: a, input: n }) {
  if (e != null) return Gg({ secret: e, approvalId: t, toolCallId: r, toolName: a, input: n });
}
async function jc({
  approvedToolApprovals: e,
  tools: t,
  messages: r,
  experimental_context: a,
  toolApprovalSecret: n,
}) {
  var s;
  let l = [],
    i = [];
  for (let d of e) {
    let { toolCall: u, approvalRequest: c } = d,
      f = t?.[u.toolName];
    if (n != null) {
      if (c.signature == null)
        throw new Ls({
          approvalId: c.approvalId,
          toolCallId: u.toolCallId,
          reason: "missing signature",
        });
      if (
        !(await Bg({
          secret: n,
          signature: c.signature,
          approvalId: c.approvalId,
          toolCallId: u.toolCallId,
          toolName: u.toolName,
          input: u.input,
        }))
      )
        throw new Ls({
          approvalId: c.approvalId,
          toolCallId: u.toolCallId,
          reason: "invalid signature",
        });
    }
    if (f != null && typeof f.execute == "function" && f.inputSchema != null) {
      let w = await Te({ value: u.input, schema: Ye(f.inputSchema) });
      if (!w.success)
        throw new dn({ toolName: u.toolName, toolInput: JSON.stringify(u.input), cause: w.error });
    }
    f != null && (await ao({ tool: f, toolCall: u, messages: r, experimental_context: a }))
      ? l.push(d)
      : i.push({
          ...d,
          approvalResponse: {
            ...d.approvalResponse,
            approved: !1,
            reason:
              (s = d.approvalResponse.reason) != null
                ? s
                : `Tool "${u.toolName}" does not require approval`,
          },
        });
  }
  return { approvedToolApprovals: l, deniedToolApprovals: i };
}
var Dc = {};
Gh(Dc, { array: () => Wg, choice: () => Kg, json: () => Yg, object: () => Hg, text: () => Zn });
function Zg(e) {
  let t = ["ROOT"],
    r = -1,
    a = null;
  function n(d, u, c) {
    switch (d) {
      case '"': {
        ((r = u), t.pop(), t.push(c), t.push("INSIDE_STRING"));
        break;
      }
      case "f":
      case "t":
      case "n": {
        ((r = u), (a = u), t.pop(), t.push(c), t.push("INSIDE_LITERAL"));
        break;
      }
      case "-": {
        (t.pop(), t.push(c), t.push("INSIDE_NUMBER"));
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
        ((r = u), t.pop(), t.push(c), t.push("INSIDE_NUMBER"));
        break;
      }
      case "{": {
        ((r = u), t.pop(), t.push(c), t.push("INSIDE_OBJECT_START"));
        break;
      }
      case "[": {
        ((r = u), t.pop(), t.push(c), t.push("INSIDE_ARRAY_START"));
        break;
      }
    }
  }
  function s(d, u) {
    switch (d) {
      case ",": {
        (t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA"));
        break;
      }
      case "}": {
        ((r = u), t.pop());
        break;
      }
    }
  }
  function l(d, u) {
    switch (d) {
      case ",": {
        (t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA"));
        break;
      }
      case "]": {
        ((r = u), t.pop());
        break;
      }
    }
  }
  for (let d = 0; d < e.length; d++) {
    let u = e[d];
    switch (t[t.length - 1]) {
      case "ROOT":
        n(u, d, "FINISH");
        break;
      case "INSIDE_OBJECT_START": {
        switch (u) {
          case '"': {
            (t.pop(), t.push("INSIDE_OBJECT_KEY"));
            break;
          }
          case "}": {
            ((r = d), t.pop());
            break;
          }
        }
        break;
      }
      case "INSIDE_OBJECT_AFTER_COMMA": {
        u === '"' && (t.pop(), t.push("INSIDE_OBJECT_KEY"));
        break;
      }
      case "INSIDE_OBJECT_KEY": {
        u === '"' && (t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY"));
        break;
      }
      case "INSIDE_OBJECT_AFTER_KEY": {
        u === ":" && (t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE"));
        break;
      }
      case "INSIDE_OBJECT_BEFORE_VALUE": {
        n(u, d, "INSIDE_OBJECT_AFTER_VALUE");
        break;
      }
      case "INSIDE_OBJECT_AFTER_VALUE": {
        s(u, d);
        break;
      }
      case "INSIDE_STRING": {
        switch (u) {
          case '"': {
            (t.pop(), (r = d));
            break;
          }
          case "\\": {
            t.push("INSIDE_STRING_ESCAPE");
            break;
          }
          default:
            r = d;
        }
        break;
      }
      case "INSIDE_ARRAY_START": {
        u === "]" ? ((r = d), t.pop()) : ((r = d), n(u, d, "INSIDE_ARRAY_AFTER_VALUE"));
        break;
      }
      case "INSIDE_ARRAY_AFTER_VALUE": {
        switch (u) {
          case ",": {
            (t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA"));
            break;
          }
          case "]": {
            ((r = d), t.pop());
            break;
          }
          default: {
            r = d;
            break;
          }
        }
        break;
      }
      case "INSIDE_ARRAY_AFTER_COMMA": {
        n(u, d, "INSIDE_ARRAY_AFTER_VALUE");
        break;
      }
      case "INSIDE_STRING_ESCAPE": {
        (t.pop(), (r = d));
        break;
      }
      case "INSIDE_NUMBER": {
        switch (u) {
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
            r = d;
            break;
          }
          case "e":
          case "E":
          case "-":
          case ".":
            break;
          case ",": {
            (t.pop(),
              t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && l(u, d),
              t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(u, d));
            break;
          }
          case "}": {
            (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && s(u, d));
            break;
          }
          case "]": {
            (t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && l(u, d));
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
        let f = e.substring(a, d + 1);
        !"false".startsWith(f) && !"true".startsWith(f) && !"null".startsWith(f)
          ? (t.pop(),
            t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE"
              ? s(u, d)
              : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && l(u, d))
          : (r = d);
        break;
      }
    }
  }
  let i = e.slice(0, r + 1);
  for (let d = t.length - 1; d >= 0; d--)
    switch (t[d]) {
      case "INSIDE_STRING": {
        i += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        i += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        i += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        let c = e.substring(a, e.length);
        "true".startsWith(c)
          ? (i += "true".slice(c.length))
          : "false".startsWith(c)
            ? (i += "false".slice(c.length))
            : "null".startsWith(c) && (i += "null".slice(c.length));
      }
    }
  return i;
}
async function Gr(e) {
  if (e === void 0) return { value: void 0, state: "undefined-input" };
  let t = await Xe({ text: e });
  return t.success
    ? { value: t.value, state: "successful-parse" }
    : ((t = await Xe({ text: Zg(e) })),
      t.success
        ? { value: t.value, state: "repaired-parse" }
        : { value: void 0, state: "failed-parse" });
}
var Zn = () => ({
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
  Hg = ({ schema: e, name: t, description: r }) => {
    let a = Ye(e);
    return {
      name: "object",
      responseFormat: ee(a.jsonSchema).then((n) => ({
        type: "json",
        schema: n,
        ...(t != null && { name: t }),
        ...(r != null && { description: r }),
      })),
      async parseCompleteOutput({ text: n }, s) {
        let l = await Xe({ text: n });
        if (!l.success)
          throw new ft({
            message: "No object generated: could not parse the response.",
            cause: l.error,
            text: n,
            response: s.response,
            usage: s.usage,
            finishReason: s.finishReason,
          });
        let i = await Te({ value: l.value, schema: a });
        if (!i.success)
          throw new ft({
            message: "No object generated: response did not match schema.",
            cause: i.error,
            text: n,
            response: s.response,
            usage: s.usage,
            finishReason: s.finishReason,
          });
        return i.value;
      },
      async parsePartialOutput({ text: n }) {
        let s = await Gr(n);
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
  Wg = ({ element: e, name: t, description: r }) => {
    let a = Ye(e);
    return {
      name: "array",
      responseFormat: ee(a.jsonSchema).then((n) => {
        let { $schema: s, ...l } = n;
        return {
          type: "json",
          schema: {
            $schema: "http://json-schema.org/draft-07/schema#",
            type: "object",
            properties: { elements: { type: "array", items: l } },
            required: ["elements"],
            additionalProperties: !1,
          },
          ...(t != null && { name: t }),
          ...(r != null && { description: r }),
        };
      }),
      async parseCompleteOutput({ text: n }, s) {
        let l = await Xe({ text: n });
        if (!l.success)
          throw new ft({
            message: "No object generated: could not parse the response.",
            cause: l.error,
            text: n,
            response: s.response,
            usage: s.usage,
            finishReason: s.finishReason,
          });
        let i = l.value;
        if (i == null || typeof i != "object" || !("elements" in i) || !Array.isArray(i.elements))
          throw new ft({
            message: "No object generated: response did not match schema.",
            cause: new ge({ value: i, cause: "response must be an object with an elements array" }),
            text: n,
            response: s.response,
            usage: s.usage,
            finishReason: s.finishReason,
          });
        for (let d of i.elements) {
          let u = await Te({ value: d, schema: a });
          if (!u.success)
            throw new ft({
              message: "No object generated: response did not match schema.",
              cause: u.error,
              text: n,
              response: s.response,
              usage: s.usage,
              finishReason: s.finishReason,
            });
        }
        return i.elements;
      },
      async parsePartialOutput({ text: n }) {
        let s = await Gr(n);
        switch (s.state) {
          case "failed-parse":
          case "undefined-input":
            return;
          case "repaired-parse":
          case "successful-parse": {
            let l = s.value;
            if (
              l == null ||
              typeof l != "object" ||
              !("elements" in l) ||
              !Array.isArray(l.elements)
            )
              return;
            let i =
                s.state === "repaired-parse" && l.elements.length > 0
                  ? l.elements.slice(0, -1)
                  : l.elements,
              d = [];
            for (let u of i) {
              let c = await Te({ value: u, schema: a });
              c.success && d.push(c.value);
            }
            return { partial: d };
          }
        }
      },
      createElementStreamTransform() {
        let n = 0;
        return new TransformStream({
          transform({ partialOutput: s }, l) {
            if (s != null) for (; n < s.length; n++) l.enqueue(s[n]);
          },
        });
      },
    };
  },
  Kg = ({ options: e, name: t, description: r }) => ({
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
      let s = await Xe({ text: a });
      if (!s.success)
        throw new ft({
          message: "No object generated: could not parse the response.",
          cause: s.error,
          text: a,
          response: n.response,
          usage: n.usage,
          finishReason: n.finishReason,
        });
      let l = s.value;
      if (
        l == null ||
        typeof l != "object" ||
        !("result" in l) ||
        typeof l.result != "string" ||
        !e.includes(l.result)
      )
        throw new ft({
          message: "No object generated: response did not match schema.",
          cause: new ge({
            value: l,
            cause: "response must be an object that contains a choice value.",
          }),
          text: a,
          response: n.response,
          usage: n.usage,
          finishReason: n.finishReason,
        });
      return l.result;
    },
    async parsePartialOutput({ text: a }) {
      let n = await Gr(a);
      switch (n.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse": {
          let s = n.value;
          if (s == null || typeof s != "object" || !("result" in s) || typeof s.result != "string")
            return;
          let l = e.filter((i) => i.startsWith(s.result));
          return n.state === "successful-parse"
            ? l.includes(s.result)
              ? { partial: s.result }
              : void 0
            : l.length === 1
              ? { partial: l[0] }
              : void 0;
        }
      }
    },
    createElementStreamTransform() {},
  }),
  Yg = ({ name: e, description: t } = {}) => ({
    name: "json",
    responseFormat: Promise.resolve({
      type: "json",
      ...(e != null && { name: e }),
      ...(t != null && { description: t }),
    }),
    async parseCompleteOutput({ text: r }, a) {
      let n = await Xe({ text: r });
      if (!n.success)
        throw new ft({
          message: "No object generated: could not parse the response.",
          cause: n.error,
          text: r,
          response: a.response,
          usage: a.usage,
          finishReason: a.finishReason,
        });
      return n.value;
    },
    async parsePartialOutput({ text: r }) {
      let a = await Gr(r);
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
  });
async function $c({ toolCall: e, tools: t, repairToolCall: r, system: a, messages: n }) {
  try {
    if (t == null) {
      if (e.providerExecuted && e.dynamic) return await Fc(e);
      throw new Bn({ toolName: e.toolName });
    }
    try {
      return await ju({ toolCall: e, tools: t });
    } catch (s) {
      if (r == null || !(Bn.isInstance(s) || dn.isInstance(s))) throw s;
      let l = null;
      try {
        l = await r({
          toolCall: e,
          tools: t,
          inputSchema: async ({ toolName: i }) => {
            let { inputSchema: d } = t[i];
            return await Ye(d).jsonSchema;
          },
          system: a,
          messages: n,
          error: s,
        });
      } catch (i) {
        throw new qd({ cause: i, originalError: s });
      }
      if (l == null) throw s;
      return await ju({ toolCall: l, tools: t });
    }
  } catch (s) {
    let l = await Xe({ text: e.input }),
      i = l.success ? l.value : e.input,
      d = t?.[e.toolName];
    return {
      type: "tool-call",
      toolCallId: e.toolCallId,
      toolName: e.toolName,
      input: i,
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
async function Fc(e) {
  let t = e.input.trim() === "" ? { success: !0, value: {} } : await Xe({ text: e.input });
  if (t.success === !1) throw new dn({ toolName: e.toolName, toolInput: e.input, cause: t.error });
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
async function ju({ toolCall: e, tools: t }) {
  let r = e.toolName,
    a = t[r];
  if (a == null) {
    if (e.providerExecuted && e.dynamic) return await Fc(e);
    throw new Bn({ toolName: e.toolName, availableTools: Object.keys(t) });
  }
  let n = Ye(a.inputSchema),
    s =
      e.input.trim() === ""
        ? await Te({ value: {}, schema: n })
        : await Xe({ text: e.input, schema: n });
  if (s.success === !1) throw new dn({ toolName: r, toolInput: e.input, cause: s.error });
  return a.type === "dynamic"
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
      };
}
var qc = class {
  constructor({
    stepNumber: e,
    model: t,
    functionId: r,
    metadata: a,
    experimental_context: n,
    content: s,
    finishReason: l,
    rawFinishReason: i,
    usage: d,
    warnings: u,
    request: c,
    response: f,
    providerMetadata: p,
  }) {
    ((this.stepNumber = e),
      (this.model = t),
      (this.functionId = r),
      (this.metadata = a),
      (this.experimental_context = n),
      (this.content = s),
      (this.finishReason = l),
      (this.rawFinishReason = i),
      (this.usage = d),
      (this.warnings = u),
      (this.request = c),
      (this.response = f),
      (this.providerMetadata = p));
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
function ts(e) {
  return ({ steps: t }) => t.length === e;
}
function Xg() {
  return () => !1;
}
function Qg(e) {
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
async function Uc({ stopConditions: e, steps: t }) {
  return (await Promise.all(e.map((r) => r({ steps: t })))).some((r) => r);
}
async function Ys({ content: e, tools: t }) {
  let r = [],
    a = [];
  for (let s of e)
    if (
      s.type !== "source" &&
      !((s.type === "tool-result" || s.type === "tool-error") && !s.providerExecuted) &&
      !(s.type === "text" && s.text.length === 0)
    )
      switch (s.type) {
        case "text":
          a.push({ type: "text", text: s.text, providerOptions: s.providerMetadata });
          break;
        case "reasoning":
          a.push({ type: "reasoning", text: s.text, providerOptions: s.providerMetadata });
          break;
        case "file":
          a.push({
            type: "file",
            data: s.file.base64,
            mediaType: s.file.mediaType,
            providerOptions: s.providerMetadata,
          });
          break;
        case "tool-call":
          a.push({
            type: "tool-call",
            toolCallId: s.toolCallId,
            toolName: s.toolName,
            input: s.invalid && typeof s.input != "object" ? {} : s.input,
            providerExecuted: s.providerExecuted,
            providerOptions: s.providerMetadata,
          });
          break;
        case "tool-result": {
          let l = await qr({
            toolCallId: s.toolCallId,
            input: s.input,
            tool: t?.[s.toolName],
            output: s.output,
            errorMode: "none",
          });
          a.push({
            type: "tool-result",
            toolCallId: s.toolCallId,
            toolName: s.toolName,
            output: l,
            providerOptions: s.providerMetadata,
          });
          break;
        }
        case "tool-error": {
          let l = await qr({
            toolCallId: s.toolCallId,
            input: s.input,
            tool: t?.[s.toolName],
            output: s.error,
            errorMode: "json",
          });
          a.push({
            type: "tool-result",
            toolCallId: s.toolCallId,
            toolName: s.toolName,
            output: l,
            providerOptions: s.providerMetadata,
          });
          break;
        }
        case "tool-approval-request":
          a.push({
            type: "tool-approval-request",
            approvalId: s.approvalId,
            toolCallId: s.toolCall.toolCallId,
            ...(s.signature != null ? { signature: s.signature } : {}),
          });
          break;
      }
  a.length > 0 && r.push({ role: "assistant", content: a });
  let n = [];
  for (let s of e) {
    if (!(s.type === "tool-result" || s.type === "tool-error") || s.providerExecuted) continue;
    let l = await qr({
      toolCallId: s.toolCallId,
      input: s.input,
      tool: t?.[s.toolName],
      output: s.type === "tool-result" ? s.output : s.error,
      errorMode: s.type === "tool-error" ? "text" : "none",
    });
    n.push({
      type: "tool-result",
      toolCallId: s.toolCallId,
      toolName: s.toolName,
      output: l,
      ...(s.providerMetadata != null ? { providerOptions: s.providerMetadata } : {}),
    });
  }
  return (n.length > 0 && r.push({ role: "tool", content: n }), r);
}
function Vc(...e) {
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
var ev = Ft({ prefix: "aitxt", size: 24 });
async function Lc({
  model: e,
  tools: t,
  toolChoice: r,
  system: a,
  prompt: n,
  messages: s,
  allowSystemInMessages: l,
  maxRetries: i,
  abortSignal: d,
  timeout: u,
  headers: c,
  stopWhen: f = ts(1),
  experimental_output: p,
  output: w = p,
  experimental_telemetry: h,
  providerOptions: b,
  experimental_activeTools: v,
  activeTools: g = v,
  experimental_prepareStep: y,
  prepareStep: m = y,
  experimental_repairToolCall: M,
  experimental_download: T,
  experimental_context: _,
  experimental_toolApprovalSecret: C,
  experimental_include: x,
  _internal: { generateId: N = ev } = {},
  experimental_onStart: F,
  experimental_onStepStart: k,
  experimental_onToolCallStart: D,
  experimental_onToolCallFinish: L,
  onStepFinish: U,
  onFinish: Y,
  ...se
}) {
  let oe = Sa(e),
    xe = Ec(),
    $e = Xt(f),
    Le = Qs(u),
    Je = cc(u),
    me = Je != null ? new AbortController() : void 0,
    Ee = Vc(d, Le != null ? AbortSignal.timeout(Le) : void 0, me?.signal),
    { maxRetries: ze, retry: Me } = Lt({ maxRetries: i, abortSignal: Ee }),
    ie = Ur(se),
    ke = ye(c ?? {}, `ai/${er}`),
    kt = Jr({ model: oe, telemetry: h, headers: ke, settings: { ...ie, maxRetries: ze } }),
    Ie = { provider: oe.provider, modelId: oe.modelId },
    Ge = await Xn({ system: a, prompt: n, messages: s, allowSystemInMessages: l }),
    le = xe(h?.integrations);
  await Ut({
    event: {
      model: Ie,
      system: a,
      prompt: n,
      messages: s,
      tools: t,
      toolChoice: r,
      activeTools: g,
      maxOutputTokens: ie.maxOutputTokens,
      temperature: ie.temperature,
      topP: ie.topP,
      topK: ie.topK,
      presencePenalty: ie.presencePenalty,
      frequencyPenalty: ie.frequencyPenalty,
      stopSequences: ie.stopSequences,
      seed: ie.seed,
      maxRetries: ze,
      timeout: u,
      headers: c,
      providerOptions: b,
      stopWhen: f,
      output: w,
      abortSignal: d,
      include: x,
      functionId: h?.functionId,
      metadata: h?.metadata,
      experimental_context: _,
    },
    callbacks: [F, le.onStart],
  });
  let mt = zr(h);
  try {
    return await et({
      name: "ai.generateText",
      attributes: te({
        telemetry: h,
        attributes: {
          ...Qe({ operationId: "ai.generateText", telemetry: h }),
          ...kt,
          "ai.model.provider": oe.provider,
          "ai.model.id": oe.modelId,
          "ai.prompt": { input: () => JSON.stringify({ system: a, prompt: n, messages: s }) },
        },
      }),
      tracer: mt,
      fn: async (Be) => {
        var Rt, Tt, ce, q, Z, ht, ot, xt, tt, Jt, tr, Br, Ra, mn, Rr, Re, Aa, Oe, rr, Zr;
        let he = Ge.messages,
          be = [],
          { approvedToolApprovals: Fe, deniedToolApprovals: gt } = Rc({ messages: he }),
          { approvedToolApprovals: At, deniedToolApprovals: Ct } = await jc({
            approvedToolApprovals: Fe.filter((qe) => !qe.toolCall.providerExecuted),
            tools: t,
            messages: he,
            experimental_context: _,
            toolApprovalSecret: C,
          }),
          R = [...gt, ...Ct];
        if (R.length > 0 || At.length > 0) {
          let qe = await Du({
              toolCalls: At.map((H) => H.toolCall),
              tools: t,
              tracer: mt,
              telemetry: h,
              messages: he,
              abortSignal: Ee,
              experimental_context: _,
              stepNumber: 0,
              model: Ie,
              onToolCallStart: [D, le.onToolCallStart],
              onToolCallFinish: [L, le.onToolCallFinish],
            }),
            Ze = [];
          for (let H of qe) {
            let it = await qr({
              toolCallId: H.toolCallId,
              input: H.input,
              tool: t?.[H.toolName],
              output: H.type === "tool-result" ? H.output : H.error,
              errorMode: H.type === "tool-error" ? "text" : "none",
            });
            Ze.push({
              type: "tool-result",
              toolCallId: H.toolCallId,
              toolName: H.toolName,
              output: it,
            });
          }
          for (let H of R)
            Ze.push({
              type: "tool-result",
              toolCallId: H.toolCall.toolCallId,
              toolName: H.toolCall.toolName,
              output: {
                type: "execution-denied",
                reason: H.approvalResponse.reason,
                ...(H.toolCall.providerExecuted && {
                  providerOptions: { openai: { approvalId: H.approvalResponse.approvalId } },
                }),
              },
            });
          be.push({ role: "tool", content: Ze });
        }
        let re = Ur(se),
          X,
          we = [],
          B = [],
          Q = [],
          fr = new Map();
        do {
          let qe = Je != null ? setTimeout(() => me.abort(), Je) : void 0;
          try {
            let Ze = [...he, ...be],
              H = await m?.({
                model: oe,
                steps: Q,
                stepNumber: Q.length,
                messages: Ze,
                experimental_context: _,
              }),
              it = Sa((Rt = H?.model) != null ? Rt : oe),
              mr = { provider: it.provider, modelId: it.modelId },
              ar = await Yn({
                prompt: {
                  system: (Tt = H?.system) != null ? Tt : Ge.system,
                  messages: (ce = H?.messages) != null ? ce : Ze,
                },
                supportedUrls: await it.supportedUrls,
                download: T,
              });
            _ = (q = H?.experimental_context) != null ? q : _;
            let hn = (Z = H?.activeTools) != null ? Z : g,
              { toolChoice: hr, tools: Ar } = await gc({
                tools: t,
                toolChoice: (ht = H?.toolChoice) != null ? ht : r,
                activeTools: hn,
              }),
              gr = (ot = H?.messages) != null ? ot : Ze,
              Ae = (xt = H?.system) != null ? xt : Ge.system,
              Ot = ka(b, H?.providerOptions);
            (await Ut({
              event: {
                stepNumber: Q.length,
                model: mr,
                system: Ae,
                messages: gr,
                tools: t,
                toolChoice: hr,
                activeTools: hn,
                steps: [...Q],
                providerOptions: Ot,
                timeout: u,
                headers: c,
                stopWhen: f,
                output: w,
                abortSignal: d,
                include: x,
                functionId: h?.functionId,
                metadata: h?.metadata,
                experimental_context: _,
              },
              callbacks: [k, le.onStepStart],
            }),
              (X = await Me(() => {
                var G;
                return et({
                  name: "ai.generateText.doGenerate",
                  attributes: te({
                    telemetry: h,
                    attributes: {
                      ...Qe({ operationId: "ai.generateText.doGenerate", telemetry: h }),
                      ...kt,
                      "ai.model.provider": it.provider,
                      "ai.model.id": it.modelId,
                      "ai.prompt.messages": { input: () => es(ar) },
                      "ai.prompt.tools": { input: () => Ar?.map((He) => JSON.stringify(He)) },
                      "ai.prompt.toolChoice": {
                        input: () => (hr != null ? JSON.stringify(hr) : void 0),
                      },
                      "gen_ai.system": it.provider,
                      "gen_ai.request.model": it.modelId,
                      "gen_ai.request.frequency_penalty": se.frequencyPenalty,
                      "gen_ai.request.max_tokens": se.maxOutputTokens,
                      "gen_ai.request.presence_penalty": se.presencePenalty,
                      "gen_ai.request.stop_sequences": se.stopSequences,
                      "gen_ai.request.temperature": (G = se.temperature) != null ? G : void 0,
                      "gen_ai.request.top_k": se.topK,
                      "gen_ai.request.top_p": se.topP,
                    },
                  }),
                  tracer: mt,
                  fn: async (He) => {
                    var zt, Ue, Na, vn, yn, yr, br, Wr;
                    let de = await it.doGenerate({
                        ...re,
                        tools: Ar,
                        toolChoice: hr,
                        responseFormat: await w?.responseFormat,
                        prompt: ar,
                        providerOptions: Ot,
                        abortSignal: Ee,
                        headers: ke,
                      }),
                      vt = {
                        id: (Ue = (zt = de.response) == null ? void 0 : zt.id) != null ? Ue : N(),
                        timestamp:
                          (vn = (Na = de.response) == null ? void 0 : Na.timestamp) != null
                            ? vn
                            : new Date(),
                        modelId:
                          (yr = (yn = de.response) == null ? void 0 : yn.modelId) != null
                            ? yr
                            : it.modelId,
                        headers: (br = de.response) == null ? void 0 : br.headers,
                        body: (Wr = de.response) == null ? void 0 : Wr.body,
                      },
                      Pa = Ma(de.usage);
                    return (
                      He.setAttributes(
                        await te({
                          telemetry: h,
                          attributes: {
                            "ai.response.finishReason": de.finishReason.unified,
                            "ai.response.text": { output: () => Ws(de.content) },
                            "ai.response.reasoning": { output: () => Hs(de.content) },
                            "ai.response.toolCalls": {
                              output: () => {
                                let Kr = $u(de.content);
                                return Kr == null ? void 0 : JSON.stringify(Kr);
                              },
                            },
                            "ai.response.id": vt.id,
                            "ai.response.model": vt.modelId,
                            "ai.response.timestamp": vt.timestamp.toISOString(),
                            "ai.response.providerMetadata": JSON.stringify(de.providerMetadata),
                            "ai.usage.inputTokens": de.usage.inputTokens.total,
                            "ai.usage.inputTokenDetails.noCacheTokens":
                              de.usage.inputTokens.noCache,
                            "ai.usage.inputTokenDetails.cacheReadTokens":
                              de.usage.inputTokens.cacheRead,
                            "ai.usage.inputTokenDetails.cacheWriteTokens":
                              de.usage.inputTokens.cacheWrite,
                            "ai.usage.outputTokens": de.usage.outputTokens.total,
                            "ai.usage.outputTokenDetails.textTokens": de.usage.outputTokens.text,
                            "ai.usage.outputTokenDetails.reasoningTokens":
                              de.usage.outputTokens.reasoning,
                            "ai.usage.totalTokens": Pa.totalTokens,
                            "ai.usage.reasoningTokens": de.usage.outputTokens.reasoning,
                            "ai.usage.cachedInputTokens": de.usage.inputTokens.cacheRead,
                            "gen_ai.response.finish_reasons": [de.finishReason.unified],
                            "gen_ai.response.id": vt.id,
                            "gen_ai.response.model": vt.modelId,
                            "gen_ai.usage.input_tokens": de.usage.inputTokens.total,
                            "gen_ai.usage.output_tokens": de.usage.outputTokens.total,
                          },
                        })
                      ),
                      { ...de, response: vt }
                    );
                  },
                });
              })));
            let vr = await Promise.all(
                X.content
                  .filter((G) => G.type === "tool-call")
                  .map((G) =>
                    $c({ toolCall: G, tools: t, repairToolCall: M, system: a, messages: Ze })
                  )
              ),
              Hr = {};
            for (let G of vr) {
              if (G.invalid) continue;
              let He = t?.[G.toolName];
              if (
                He != null &&
                (He?.onInputAvailable != null &&
                  (await He.onInputAvailable({
                    input: G.input,
                    toolCallId: G.toolCallId,
                    messages: Ze,
                    abortSignal: Ee,
                    experimental_context: _,
                  })),
                await ao({ tool: He, toolCall: G, messages: Ze, experimental_context: _ }))
              ) {
                let zt = N(),
                  Ue = await Pc({
                    secret: C,
                    approvalId: zt,
                    toolCallId: G.toolCallId,
                    toolName: G.toolName,
                    input: G.input,
                  });
                Hr[G.toolCallId] = {
                  type: "tool-approval-request",
                  approvalId: zt,
                  toolCall: G,
                  ...(Ue != null ? { signature: Ue } : {}),
                };
              }
            }
            let gn = vr.filter((G) => G.invalid && G.dynamic);
            B = [];
            for (let G of gn)
              B.push({
                type: "tool-error",
                toolCallId: G.toolCallId,
                toolName: G.toolName,
                input: G.input,
                error: va(G.error),
                dynamic: !0,
              });
            ((we = vr.filter((G) => !G.providerExecuted)),
              t != null &&
                B.push(
                  ...(await Du({
                    toolCalls: we.filter((G) => !G.invalid && Hr[G.toolCallId] == null),
                    tools: t,
                    tracer: mt,
                    telemetry: h,
                    messages: Ze,
                    abortSignal: Ee,
                    experimental_context: _,
                    stepNumber: Q.length,
                    model: mr,
                    onToolCallStart: [D, le.onToolCallStart],
                    onToolCallFinish: [L, le.onToolCallFinish],
                  }))
                ));
            for (let G of vr) {
              if (!G.providerExecuted) continue;
              let He = t?.[G.toolName];
              He?.type === "provider" &&
                He.supportsDeferredResults &&
                (X.content.some(
                  (Ue) => Ue.type === "tool-result" && Ue.toolCallId === G.toolCallId
                ) ||
                  fr.set(G.toolCallId, { toolName: G.toolName }));
            }
            for (let G of X.content) G.type === "tool-result" && fr.delete(G.toolCallId);
            let Cr = rv({
              content: X.content,
              toolCalls: vr,
              toolOutputs: B,
              toolApprovalRequests: Object.values(Hr),
              tools: t,
            });
            be.push(...(await Ys({ content: Cr, tools: t })));
            let Ca =
                (tt = x?.requestBody) == null || tt
                  ? (Jt = X.request) != null
                    ? Jt
                    : {}
                  : { ...X.request, body: void 0 },
              rs = {
                ...X.response,
                messages: structuredClone(be),
                body:
                  (tr = x?.responseBody) == null || tr
                    ? (Br = X.response) == null
                      ? void 0
                      : Br.body
                    : void 0,
              },
              as = Q.length,
              Oa = new qc({
                stepNumber: as,
                model: mr,
                functionId: h?.functionId,
                metadata: h?.metadata,
                experimental_context: _,
                content: Cr,
                finishReason: X.finishReason.unified,
                rawFinishReason: X.finishReason.raw,
                usage: Ma(X.usage),
                warnings: X.warnings,
                providerMetadata: X.providerMetadata,
                request: Ca,
                response: rs,
              });
            (_t({
              warnings: (Ra = X.warnings) != null ? Ra : [],
              provider: mr.provider,
              model: mr.modelId,
            }),
              Q.push(Oa),
              await Ut({ event: Oa, callbacks: [U, le.onStepFinish] }));
          } finally {
            qe != null && clearTimeout(qe);
          }
        } while (
          ((we.length > 0 && B.length === we.length) || fr.size > 0) &&
          !(await Uc({ stopConditions: $e, steps: Q }))
        );
        Be.setAttributes(
          await te({
            telemetry: h,
            attributes: {
              "ai.response.finishReason": X.finishReason.unified,
              "ai.response.text": { output: () => Ws(X.content) },
              "ai.response.reasoning": { output: () => Hs(X.content) },
              "ai.response.toolCalls": {
                output: () => {
                  let qe = $u(X.content);
                  return qe == null ? void 0 : JSON.stringify(qe);
                },
              },
              "ai.response.providerMetadata": JSON.stringify(X.providerMetadata),
            },
          })
        );
        let J = Q[Q.length - 1],
          ve = Q.reduce((qe, Ze) => Mc(qe, Ze.usage), {
            inputTokens: void 0,
            outputTokens: void 0,
            totalTokens: void 0,
            reasoningTokens: void 0,
            cachedInputTokens: void 0,
          });
        (Be.setAttributes(
          await te({
            telemetry: h,
            attributes: {
              "ai.usage.inputTokens": ve.inputTokens,
              "ai.usage.inputTokenDetails.noCacheTokens":
                (mn = ve.inputTokenDetails) == null ? void 0 : mn.noCacheTokens,
              "ai.usage.inputTokenDetails.cacheReadTokens":
                (Rr = ve.inputTokenDetails) == null ? void 0 : Rr.cacheReadTokens,
              "ai.usage.inputTokenDetails.cacheWriteTokens":
                (Re = ve.inputTokenDetails) == null ? void 0 : Re.cacheWriteTokens,
              "ai.usage.outputTokens": ve.outputTokens,
              "ai.usage.outputTokenDetails.textTokens":
                (Aa = ve.outputTokenDetails) == null ? void 0 : Aa.textTokens,
              "ai.usage.outputTokenDetails.reasoningTokens":
                (Oe = ve.outputTokenDetails) == null ? void 0 : Oe.reasoningTokens,
              "ai.usage.totalTokens": ve.totalTokens,
              "ai.usage.reasoningTokens":
                (rr = ve.outputTokenDetails) == null ? void 0 : rr.reasoningTokens,
              "ai.usage.cachedInputTokens":
                (Zr = ve.inputTokenDetails) == null ? void 0 : Zr.cacheReadTokens,
            },
          })
        ),
          await Ut({
            event: {
              stepNumber: J.stepNumber,
              model: J.model,
              functionId: J.functionId,
              metadata: J.metadata,
              experimental_context: J.experimental_context,
              finishReason: J.finishReason,
              rawFinishReason: J.rawFinishReason,
              usage: J.usage,
              content: J.content,
              text: J.text,
              reasoningText: J.reasoningText,
              reasoning: J.reasoning,
              files: J.files,
              sources: J.sources,
              toolCalls: J.toolCalls,
              staticToolCalls: J.staticToolCalls,
              dynamicToolCalls: J.dynamicToolCalls,
              toolResults: J.toolResults,
              staticToolResults: J.staticToolResults,
              dynamicToolResults: J.dynamicToolResults,
              request: J.request,
              response: J.response,
              warnings: J.warnings,
              providerMetadata: J.providerMetadata,
              steps: Q,
              totalUsage: ve,
            },
            callbacks: [Y, le.onFinish],
          }));
        let _e;
        return (
          J.finishReason === "stop" &&
            (_e = await (w ?? Zn()).parseCompleteOutput(
              { text: J.text },
              { response: J.response, usage: J.usage, finishReason: J.finishReason }
            )),
          new tv({ steps: Q, totalUsage: ve, output: _e })
        );
      },
    });
  } catch (Be) {
    throw Qn(Be);
  }
}
async function Du({
  toolCalls: e,
  tools: t,
  tracer: r,
  telemetry: a,
  messages: n,
  abortSignal: s,
  experimental_context: l,
  stepNumber: i,
  model: d,
  onToolCallStart: u,
  onToolCallFinish: c,
}) {
  return (
    await Promise.all(
      e.map(async (p) =>
        ro({
          toolCall: p,
          tools: t,
          tracer: r,
          telemetry: a,
          messages: n,
          abortSignal: s,
          experimental_context: l,
          stepNumber: i,
          model: d,
          onToolCallStart: u,
          onToolCallFinish: c,
        })
      )
    )
  ).filter((p) => p != null);
}
var tv = class {
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
    if (this._output == null) throw new sn();
    return this._output;
  }
};
function $u(e) {
  let t = e.filter((r) => r.type === "tool-call");
  if (t.length !== 0)
    return t.map((r) => ({ toolCallId: r.toolCallId, toolName: r.toolName, input: r.input }));
}
function rv({ content: e, toolCalls: t, toolOutputs: r, toolApprovalRequests: a, tools: n }) {
  let s = [];
  for (let l of e)
    switch (l.type) {
      case "text":
      case "reasoning":
      case "source":
        s.push(l);
        break;
      case "file": {
        s.push({
          type: "file",
          file: new Mr(l),
          ...(l.providerMetadata != null ? { providerMetadata: l.providerMetadata } : {}),
        });
        break;
      }
      case "tool-call": {
        s.push(t.find((i) => i.toolCallId === l.toolCallId));
        break;
      }
      case "tool-result": {
        let i = t.find((d) => d.toolCallId === l.toolCallId);
        if (i == null) {
          let d = n?.[l.toolName];
          if (!(d?.type === "provider" && d.supportsDeferredResults))
            throw new Error(`Tool call ${l.toolCallId} not found.`);
          l.isError
            ? s.push({
                type: "tool-error",
                toolCallId: l.toolCallId,
                toolName: l.toolName,
                input: void 0,
                error: l.result,
                providerExecuted: !0,
                dynamic: l.dynamic,
                ...(l.providerMetadata != null ? { providerMetadata: l.providerMetadata } : {}),
                ...(d?.metadata != null ? { toolMetadata: d.metadata } : {}),
              })
            : s.push({
                type: "tool-result",
                toolCallId: l.toolCallId,
                toolName: l.toolName,
                input: void 0,
                output: l.result,
                providerExecuted: !0,
                dynamic: l.dynamic,
                ...(l.providerMetadata != null ? { providerMetadata: l.providerMetadata } : {}),
                ...(d?.metadata != null ? { toolMetadata: d.metadata } : {}),
              });
          break;
        }
        l.isError
          ? s.push({
              type: "tool-error",
              toolCallId: l.toolCallId,
              toolName: l.toolName,
              input: i.input,
              error: l.result,
              providerExecuted: !0,
              dynamic: i.dynamic,
              ...(l.providerMetadata != null ? { providerMetadata: l.providerMetadata } : {}),
              ...(i.toolMetadata != null ? { toolMetadata: i.toolMetadata } : {}),
            })
          : s.push({
              type: "tool-result",
              toolCallId: l.toolCallId,
              toolName: l.toolName,
              input: i.input,
              output: l.result,
              providerExecuted: !0,
              dynamic: i.dynamic,
              ...(l.providerMetadata != null ? { providerMetadata: l.providerMetadata } : {}),
              ...(i.toolMetadata != null ? { toolMetadata: i.toolMetadata } : {}),
            });
        break;
      }
      case "tool-approval-request": {
        let i = t.find((d) => d.toolCallId === l.toolCallId);
        if (i == null) throw new Kn({ toolCallId: l.toolCallId, approvalId: l.approvalId });
        s.push({ type: "tool-approval-request", approvalId: l.approvalId, toolCall: i });
        break;
      }
    }
  return [...s, ...r, ...a];
}
function pn(e, t) {
  let r = new Headers(e ?? {});
  for (let [a, n] of Object.entries(t)) r.has(a) || r.set(a, n);
  return r;
}
function so({ status: e, statusText: t, headers: r, textStream: a }) {
  return new Response(a.pipeThrough(new TextEncoderStream()), {
    status: e ?? 200,
    statusText: t,
    headers: pn(r, { "content-type": "text/plain; charset=utf-8" }),
  });
}
function Jc({ response: e, status: t, statusText: r, headers: a, stream: n }) {
  let s = t ?? 200;
  r !== void 0 ? e.writeHead(s, r, a) : e.writeHead(s, a);
  let l = n.getReader();
  (async () => {
    try {
      for (;;) {
        let { done: d, value: u } = await l.read();
        if (d) break;
        e.write(u) ||
          (await new Promise((f) => {
            e.once("drain", f);
          }));
      }
    } catch (d) {
      throw d;
    } finally {
      e.end();
    }
  })();
}
function oo({ response: e, status: t, statusText: r, headers: a, textStream: n }) {
  Jc({
    response: e,
    status: t,
    statusText: r,
    headers: Object.fromEntries(pn(a, { "content-type": "text/plain; charset=utf-8" }).entries()),
    stream: n.pipeThrough(new TextEncoderStream()),
  });
}
var io = class extends TransformStream {
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
  lo = {
    "content-type": "text/event-stream",
    "cache-control": "no-cache",
    connection: "keep-alive",
    "x-vercel-ai-ui-message-stream": "v1",
    "x-accel-buffering": "no",
  };
function uo({ status: e, statusText: t, headers: r, stream: a, consumeSseStream: n }) {
  let s = a.pipeThrough(new io());
  if (n) {
    let [l, i] = s.tee();
    ((s = l), n({ stream: i }));
  }
  return new Response(s.pipeThrough(new TextEncoderStream()), {
    status: e,
    statusText: t,
    headers: pn(r, lo),
  });
}
function av({ originalMessages: e, responseMessageId: t }) {
  if (e == null) return;
  let r = e[e.length - 1];
  return r?.role === "assistant" ? r.id : typeof t == "function" ? t() : t;
}
var nn = o.record(o.string(), Vr.optional()),
  co = pe(() =>
    ne(
      o.union([
        o.strictObject({
          type: o.literal("text-start"),
          id: o.string(),
          providerMetadata: j.optional(),
        }),
        o.strictObject({
          type: o.literal("text-delta"),
          id: o.string(),
          delta: o.string(),
          providerMetadata: j.optional(),
        }),
        o.strictObject({
          type: o.literal("text-end"),
          id: o.string(),
          providerMetadata: j.optional(),
        }),
        o.strictObject({ type: o.literal("error"), errorText: o.string() }),
        o.strictObject({
          type: o.literal("tool-input-start"),
          toolCallId: o.string(),
          toolName: o.string(),
          providerExecuted: o.boolean().optional(),
          providerMetadata: j.optional(),
          toolMetadata: nn.optional(),
          dynamic: o.boolean().optional(),
          title: o.string().optional(),
        }),
        o.strictObject({
          type: o.literal("tool-input-delta"),
          toolCallId: o.string(),
          inputTextDelta: o.string(),
        }),
        o.strictObject({
          type: o.literal("tool-input-available"),
          toolCallId: o.string(),
          toolName: o.string(),
          input: o.unknown(),
          providerExecuted: o.boolean().optional(),
          providerMetadata: j.optional(),
          toolMetadata: nn.optional(),
          dynamic: o.boolean().optional(),
          title: o.string().optional(),
        }),
        o.strictObject({
          type: o.literal("tool-input-error"),
          toolCallId: o.string(),
          toolName: o.string(),
          input: o.unknown(),
          providerExecuted: o.boolean().optional(),
          providerMetadata: j.optional(),
          toolMetadata: nn.optional(),
          dynamic: o.boolean().optional(),
          errorText: o.string(),
          title: o.string().optional(),
        }),
        o.strictObject({
          type: o.literal("tool-approval-request"),
          approvalId: o.string(),
          toolCallId: o.string(),
          signature: o.string().optional(),
        }),
        o.strictObject({
          type: o.literal("tool-output-available"),
          toolCallId: o.string(),
          output: o.unknown(),
          providerExecuted: o.boolean().optional(),
          providerMetadata: j.optional(),
          toolMetadata: nn.optional(),
          dynamic: o.boolean().optional(),
          preliminary: o.boolean().optional(),
        }),
        o.strictObject({
          type: o.literal("tool-output-error"),
          toolCallId: o.string(),
          errorText: o.string(),
          providerExecuted: o.boolean().optional(),
          providerMetadata: j.optional(),
          toolMetadata: nn.optional(),
          dynamic: o.boolean().optional(),
        }),
        o.strictObject({ type: o.literal("tool-output-denied"), toolCallId: o.string() }),
        o.strictObject({
          type: o.literal("reasoning-start"),
          id: o.string(),
          providerMetadata: j.optional(),
        }),
        o.strictObject({
          type: o.literal("reasoning-delta"),
          id: o.string(),
          delta: o.string(),
          providerMetadata: j.optional(),
        }),
        o.strictObject({
          type: o.literal("reasoning-end"),
          id: o.string(),
          providerMetadata: j.optional(),
        }),
        o.strictObject({
          type: o.literal("source-url"),
          sourceId: o.string(),
          url: o.string(),
          title: o.string().optional(),
          providerMetadata: j.optional(),
        }),
        o.strictObject({
          type: o.literal("source-document"),
          sourceId: o.string(),
          mediaType: o.string(),
          title: o.string(),
          filename: o.string().optional(),
          providerMetadata: j.optional(),
        }),
        o.strictObject({
          type: o.literal("file"),
          url: o.string(),
          mediaType: o.string(),
          providerMetadata: j.optional(),
        }),
        o.strictObject({
          type: o.custom((e) => typeof e == "string" && e.startsWith("data-"), {
            message: 'Type must start with "data-"',
          }),
          id: o.string().optional(),
          data: o.unknown(),
          transient: o.boolean().optional(),
        }),
        o.strictObject({ type: o.literal("start-step") }),
        o.strictObject({ type: o.literal("finish-step") }),
        o.strictObject({
          type: o.literal("start"),
          messageId: o.string().optional(),
          messageMetadata: o.unknown().optional(),
        }),
        o.strictObject({
          type: o.literal("finish"),
          finishReason: o
            .enum(["stop", "length", "content-filter", "tool-calls", "error", "other"])
            .optional(),
          messageMetadata: o.unknown().optional(),
        }),
        o.strictObject({ type: o.literal("abort"), reason: o.string().optional() }),
        o.strictObject({ type: o.literal("message-metadata"), messageMetadata: o.unknown() }),
      ])
    )
  );
function nv(e) {
  return e.type.startsWith("data-");
}
function Vt() {
  return Object.create(null);
}
function Jn(e) {
  return e.type.startsWith("data-");
}
function zn(e) {
  return e.type === "text";
}
function Gn(e) {
  return e.type === "file";
}
function Xs(e) {
  return e.type === "reasoning";
}
function Hn(e) {
  return e.type.startsWith("tool-");
}
function zc(e) {
  return e.type === "dynamic-tool";
}
function Mt(e) {
  return Hn(e) || zc(e);
}
var sv = Mt;
function Wn(e) {
  return e.type.split("-").slice(1).join("-");
}
function ln(e) {
  return zc(e) ? e.toolName : Wn(e);
}
var ov = ln;
function po({ lastMessage: e, messageId: t }) {
  return {
    message:
      e?.role === "assistant" ? e : { id: t, metadata: void 0, role: "assistant", parts: [] },
    activeTextParts: Vt(),
    activeReasoningParts: Vt(),
    partialToolCalls: Vt(),
  };
}
function fo({
  stream: e,
  messageMetadataSchema: t,
  dataPartSchemas: r,
  runUpdateMessageJob: a,
  onError: n,
  onToolCall: s,
  onData: l,
}) {
  return e.pipeThrough(
    new TransformStream({
      async transform(i, d) {
        await a(async ({ state: u, write: c }) => {
          var f, p, w, h;
          function b(m) {
            let T = u.message.parts.filter(Mt).find((_) => _.toolCallId === m);
            if (T == null)
              throw new Fr({
                chunkType: "tool-invocation",
                chunkId: m,
                message: `No tool invocation found for tool call ID "${m}".`,
              });
            return T;
          }
          function v(m) {
            var M;
            let T = u.message.parts.find((x) => Hn(x) && x.toolCallId === m.toolCallId),
              _ = m,
              C = T;
            if (T != null) {
              ((T.state = m.state),
                (C.input = _.input),
                (C.output = _.output),
                (C.errorText = _.errorText),
                (C.rawInput = _.rawInput),
                (C.preliminary = _.preliminary),
                m.title !== void 0 && (C.title = m.title),
                m.toolMetadata !== void 0 && (C.toolMetadata = m.toolMetadata),
                (C.providerExecuted = (M = _.providerExecuted) != null ? M : T.providerExecuted));
              let x = _.providerMetadata;
              if (x != null)
                if (m.state === "output-available" || m.state === "output-error") {
                  let N = T;
                  N.resultProviderMetadata = x;
                } else T.callProviderMetadata = x;
            } else
              u.message.parts.push({
                type: `tool-${m.toolName}`,
                toolCallId: m.toolCallId,
                state: m.state,
                title: m.title,
                ...(m.toolMetadata !== void 0 ? { toolMetadata: m.toolMetadata } : {}),
                input: _.input,
                output: _.output,
                rawInput: _.rawInput,
                errorText: _.errorText,
                providerExecuted: _.providerExecuted,
                preliminary: _.preliminary,
                ...(_.providerMetadata != null &&
                (m.state === "output-available" || m.state === "output-error")
                  ? { resultProviderMetadata: _.providerMetadata }
                  : {}),
                ...(_.providerMetadata != null &&
                !(m.state === "output-available" || m.state === "output-error")
                  ? { callProviderMetadata: _.providerMetadata }
                  : {}),
              });
          }
          function g(m) {
            var M, T;
            let _ = u.message.parts.find(
                (N) => N.type === "dynamic-tool" && N.toolCallId === m.toolCallId
              ),
              C = m,
              x = _;
            if (_ != null) {
              ((_.state = m.state),
                (x.toolName = m.toolName),
                (x.input = C.input),
                (x.output = C.output),
                (x.errorText = C.errorText),
                (x.rawInput = (M = C.rawInput) != null ? M : x.rawInput),
                (x.preliminary = C.preliminary),
                m.title !== void 0 && (x.title = m.title),
                m.toolMetadata !== void 0 && (x.toolMetadata = m.toolMetadata),
                (x.providerExecuted = (T = C.providerExecuted) != null ? T : _.providerExecuted));
              let N = C.providerMetadata;
              if (N != null)
                if (m.state === "output-available" || m.state === "output-error") {
                  let F = _;
                  F.resultProviderMetadata = N;
                } else _.callProviderMetadata = N;
            } else
              u.message.parts.push({
                type: "dynamic-tool",
                toolName: m.toolName,
                toolCallId: m.toolCallId,
                state: m.state,
                input: C.input,
                output: C.output,
                errorText: C.errorText,
                preliminary: C.preliminary,
                providerExecuted: C.providerExecuted,
                title: m.title,
                ...(m.toolMetadata !== void 0 ? { toolMetadata: m.toolMetadata } : {}),
                ...(C.providerMetadata != null &&
                (m.state === "output-available" || m.state === "output-error")
                  ? { resultProviderMetadata: C.providerMetadata }
                  : {}),
                ...(C.providerMetadata != null &&
                !(m.state === "output-available" || m.state === "output-error")
                  ? { callProviderMetadata: C.providerMetadata }
                  : {}),
              });
          }
          async function y(m) {
            if (m != null) {
              let M = u.message.metadata != null ? ka(u.message.metadata, m) : m;
              (t != null &&
                (await Et({
                  value: M,
                  schema: t,
                  context: { field: "message.metadata", entityId: u.message.id },
                })),
                (u.message.metadata = M));
            }
          }
          switch (i.type) {
            case "text-start": {
              let m = {
                type: "text",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming",
              };
              ((u.activeTextParts[i.id] = m), u.message.parts.push(m), c());
              break;
            }
            case "text-delta": {
              let m = u.activeTextParts[i.id];
              if (m == null)
                throw new Fr({
                  chunkType: "text-delta",
                  chunkId: i.id,
                  message: `Received text-delta for missing text part with ID "${i.id}". Ensure a "text-start" chunk is sent before any "text-delta" chunks.`,
                });
              ((m.text += i.delta),
                (m.providerMetadata = (f = i.providerMetadata) != null ? f : m.providerMetadata),
                c());
              break;
            }
            case "text-end": {
              let m = u.activeTextParts[i.id];
              if (m == null)
                throw new Fr({
                  chunkType: "text-end",
                  chunkId: i.id,
                  message: `Received text-end for missing text part with ID "${i.id}". Ensure a "text-start" chunk is sent before any "text-end" chunks.`,
                });
              ((m.state = "done"),
                (m.providerMetadata = (p = i.providerMetadata) != null ? p : m.providerMetadata),
                delete u.activeTextParts[i.id],
                c());
              break;
            }
            case "reasoning-start": {
              let m = {
                type: "reasoning",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming",
              };
              ((u.activeReasoningParts[i.id] = m), u.message.parts.push(m), c());
              break;
            }
            case "reasoning-delta": {
              let m = u.activeReasoningParts[i.id];
              if (m == null)
                throw new Fr({
                  chunkType: "reasoning-delta",
                  chunkId: i.id,
                  message: `Received reasoning-delta for missing reasoning part with ID "${i.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-delta" chunks.`,
                });
              ((m.text += i.delta),
                (m.providerMetadata = (w = i.providerMetadata) != null ? w : m.providerMetadata),
                c());
              break;
            }
            case "reasoning-end": {
              let m = u.activeReasoningParts[i.id];
              if (m == null)
                throw new Fr({
                  chunkType: "reasoning-end",
                  chunkId: i.id,
                  message: `Received reasoning-end for missing reasoning part with ID "${i.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-end" chunks.`,
                });
              ((m.providerMetadata = (h = i.providerMetadata) != null ? h : m.providerMetadata),
                (m.state = "done"),
                delete u.activeReasoningParts[i.id],
                c());
              break;
            }
            case "file": {
              (u.message.parts.push({
                type: "file",
                mediaType: i.mediaType,
                url: i.url,
                ...(i.providerMetadata != null ? { providerMetadata: i.providerMetadata } : {}),
              }),
                c());
              break;
            }
            case "source-url": {
              (u.message.parts.push({
                type: "source-url",
                sourceId: i.sourceId,
                url: i.url,
                title: i.title,
                providerMetadata: i.providerMetadata,
              }),
                c());
              break;
            }
            case "source-document": {
              (u.message.parts.push({
                type: "source-document",
                sourceId: i.sourceId,
                mediaType: i.mediaType,
                title: i.title,
                filename: i.filename,
                providerMetadata: i.providerMetadata,
              }),
                c());
              break;
            }
            case "tool-input-start": {
              let m = u.message.parts.filter(Hn);
              ((u.partialToolCalls[i.toolCallId] = {
                text: "",
                toolName: i.toolName,
                index: m.length,
                dynamic: i.dynamic,
                title: i.title,
                toolMetadata: i.toolMetadata,
              }),
                i.dynamic
                  ? g({
                      toolCallId: i.toolCallId,
                      toolName: i.toolName,
                      state: "input-streaming",
                      input: void 0,
                      providerExecuted: i.providerExecuted,
                      title: i.title,
                      toolMetadata: i.toolMetadata,
                      providerMetadata: i.providerMetadata,
                    })
                  : v({
                      toolCallId: i.toolCallId,
                      toolName: i.toolName,
                      state: "input-streaming",
                      input: void 0,
                      providerExecuted: i.providerExecuted,
                      title: i.title,
                      toolMetadata: i.toolMetadata,
                      providerMetadata: i.providerMetadata,
                    }),
                c());
              break;
            }
            case "tool-input-delta": {
              let m = u.partialToolCalls[i.toolCallId];
              if (m == null)
                throw new Fr({
                  chunkType: "tool-input-delta",
                  chunkId: i.toolCallId,
                  message: `Received tool-input-delta for missing tool call with ID "${i.toolCallId}". Ensure a "tool-input-start" chunk is sent before any "tool-input-delta" chunks.`,
                });
              m.text += i.inputTextDelta;
              let { value: M } = await Gr(m.text);
              (m.dynamic
                ? g({
                    toolCallId: i.toolCallId,
                    toolName: m.toolName,
                    state: "input-streaming",
                    input: M,
                    title: m.title,
                    toolMetadata: m.toolMetadata,
                  })
                : v({
                    toolCallId: i.toolCallId,
                    toolName: m.toolName,
                    state: "input-streaming",
                    input: M,
                    title: m.title,
                    toolMetadata: m.toolMetadata,
                  }),
                c());
              break;
            }
            case "tool-input-available": {
              (i.dynamic
                ? g({
                    toolCallId: i.toolCallId,
                    toolName: i.toolName,
                    state: "input-available",
                    input: i.input,
                    providerExecuted: i.providerExecuted,
                    providerMetadata: i.providerMetadata,
                    title: i.title,
                    toolMetadata: i.toolMetadata,
                  })
                : v({
                    toolCallId: i.toolCallId,
                    toolName: i.toolName,
                    state: "input-available",
                    input: i.input,
                    providerExecuted: i.providerExecuted,
                    providerMetadata: i.providerMetadata,
                    title: i.title,
                    toolMetadata: i.toolMetadata,
                  }),
                c(),
                s && !i.providerExecuted && (await s({ toolCall: i })));
              break;
            }
            case "tool-input-error": {
              let m = u.message.parts.filter(Mt).find((T) => T.toolCallId === i.toolCallId);
              ((m != null ? m.type === "dynamic-tool" : !!i.dynamic)
                ? g({
                    toolCallId: i.toolCallId,
                    toolName: i.toolName,
                    state: "output-error",
                    input: i.input,
                    errorText: i.errorText,
                    providerExecuted: i.providerExecuted,
                    providerMetadata: i.providerMetadata,
                    toolMetadata: i.toolMetadata,
                  })
                : v({
                    toolCallId: i.toolCallId,
                    toolName: i.toolName,
                    state: "output-error",
                    input: void 0,
                    rawInput: i.input,
                    errorText: i.errorText,
                    providerExecuted: i.providerExecuted,
                    providerMetadata: i.providerMetadata,
                    toolMetadata: i.toolMetadata,
                  }),
                c());
              break;
            }
            case "tool-approval-request": {
              let m = b(i.toolCallId);
              ((m.state = "approval-requested"),
                (m.approval = {
                  id: i.approvalId,
                  ...(i.signature != null ? { signature: i.signature } : {}),
                }),
                c());
              break;
            }
            case "tool-output-denied": {
              let m = b(i.toolCallId);
              ((m.state = "output-denied"), c());
              break;
            }
            case "tool-output-available": {
              let m = b(i.toolCallId);
              (m.type === "dynamic-tool"
                ? g({
                    toolCallId: i.toolCallId,
                    toolName: m.toolName,
                    state: "output-available",
                    input: m.input,
                    output: i.output,
                    preliminary: i.preliminary,
                    providerExecuted: i.providerExecuted,
                    providerMetadata: i.providerMetadata,
                    title: m.title,
                    toolMetadata: m.toolMetadata,
                  })
                : v({
                    toolCallId: i.toolCallId,
                    toolName: Wn(m),
                    state: "output-available",
                    input: m.input,
                    output: i.output,
                    providerExecuted: i.providerExecuted,
                    preliminary: i.preliminary,
                    providerMetadata: i.providerMetadata,
                    title: m.title,
                    toolMetadata: m.toolMetadata,
                  }),
                c());
              break;
            }
            case "tool-output-error": {
              let m = b(i.toolCallId);
              (m.type === "dynamic-tool"
                ? g({
                    toolCallId: i.toolCallId,
                    toolName: m.toolName,
                    state: "output-error",
                    input: m.input,
                    errorText: i.errorText,
                    providerExecuted: i.providerExecuted,
                    providerMetadata: i.providerMetadata,
                    title: m.title,
                    toolMetadata: m.toolMetadata,
                  })
                : v({
                    toolCallId: i.toolCallId,
                    toolName: Wn(m),
                    state: "output-error",
                    input: m.input,
                    rawInput: m.rawInput,
                    errorText: i.errorText,
                    providerExecuted: i.providerExecuted,
                    providerMetadata: i.providerMetadata,
                    title: m.title,
                    toolMetadata: m.toolMetadata,
                  }),
                c());
              break;
            }
            case "start-step": {
              u.message.parts.push({ type: "step-start" });
              break;
            }
            case "finish-step": {
              ((u.activeTextParts = Vt()), (u.activeReasoningParts = Vt()));
              break;
            }
            case "start": {
              (i.messageId != null && (u.message.id = i.messageId),
                await y(i.messageMetadata),
                (i.messageId != null || i.messageMetadata != null) && c());
              break;
            }
            case "finish": {
              (i.finishReason != null && (u.finishReason = i.finishReason),
                await y(i.messageMetadata),
                i.messageMetadata != null && c());
              break;
            }
            case "message-metadata": {
              (await y(i.messageMetadata), i.messageMetadata != null && c());
              break;
            }
            case "error": {
              n?.(new Error(i.errorText));
              break;
            }
            default:
              if (nv(i)) {
                if (r?.[i.type] != null) {
                  let T = u.message.parts.findIndex(
                      (C) => "id" in C && "data" in C && C.id === i.id && C.type === i.type
                    ),
                    _ = T >= 0 ? T : u.message.parts.length;
                  await Et({
                    value: i.data,
                    schema: r[i.type],
                    context: {
                      field: `message.parts[${_}].data`,
                      entityName: i.type,
                      entityId: i.id,
                    },
                  });
                }
                let m = i;
                if (m.transient) {
                  l?.(m);
                  break;
                }
                let M =
                  m.id != null
                    ? u.message.parts.find((T) => m.type === T.type && m.id === T.id)
                    : void 0;
                (M != null ? (M.data = m.data) : u.message.parts.push(m), l?.(m), c());
              }
          }
          d.enqueue(i);
        });
      },
    })
  );
}
function Gc({
  messageId: e,
  originalMessages: t = [],
  onStepFinish: r,
  onFinish: a,
  onError: n,
  stream: s,
}) {
  let l = t?.[t.length - 1];
  l?.role !== "assistant" ? (l = void 0) : (e = l.id);
  let i = !1,
    d = s.pipeThrough(
      new TransformStream({
        transform(h, b) {
          if (h.type === "start") {
            let v = h;
            v.messageId == null && e != null && (v.messageId = e);
          }
          (h.type === "abort" && (i = !0), b.enqueue(h));
        },
      })
    );
  if (a == null && r == null) return d;
  let u = po({ lastMessage: l ? structuredClone(l) : void 0, messageId: e ?? "" }),
    c = async (h) => {
      await h({ state: u, write: () => {} });
    },
    f = !1,
    p = async () => {
      if (f || !a) return;
      f = !0;
      let h = u.message.id === l?.id;
      await a({
        isAborted: i,
        isContinuation: h,
        responseMessage: u.message,
        messages: [...(h ? t.slice(0, -1) : t), u.message],
        finishReason: u.finishReason,
      });
    },
    w = async () => {
      if (!r) return;
      let h = u.message.id === l?.id;
      try {
        await r({
          isContinuation: h,
          responseMessage: structuredClone(u.message),
          messages: [...(h ? t.slice(0, -1) : t), structuredClone(u.message)],
        });
      } catch (b) {
        n(b);
      }
    };
  return fo({ stream: d, runUpdateMessageJob: c, onError: n }).pipeThrough(
    new TransformStream({
      async transform(h, b) {
        (h.type === "finish-step" && (await w()), b.enqueue(h));
      },
      async cancel() {
        await p();
      },
      async flush() {
        await p();
      },
    })
  );
}
function mo({ response: e, status: t, statusText: r, headers: a, stream: n, consumeSseStream: s }) {
  let l = n.pipeThrough(new io());
  if (s) {
    let [i, d] = l.tee();
    ((l = i), s({ stream: d }));
  }
  Jc({
    response: e,
    status: t,
    statusText: r,
    headers: Object.fromEntries(pn(a, lo).entries()),
    stream: l.pipeThrough(new TextEncoderStream()),
  });
}
function Yt(e) {
  let t = e.pipeThrough(new TransformStream());
  return (
    (t[Symbol.asyncIterator] = function () {
      let r = this.getReader(),
        a = !1;
      async function n(s) {
        var l;
        if (!a) {
          a = !0;
          try {
            s && (await ((l = r.cancel) == null ? void 0 : l.call(r)));
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
          let { done: s, value: l } = await r.read();
          return s ? (await n(!0), { done: !0, value: void 0 }) : { done: !1, value: l };
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
async function fn({ stream: e, onError: t }) {
  let r = e.getReader();
  try {
    for (;;) {
      let { done: a } = await r.read();
      if (a) break;
    }
  } catch (a) {
    t?.(a);
  } finally {
    r.releaseLock();
  }
}
function Fu() {
  let e, t;
  return {
    promise: new Promise((a, n) => {
      ((e = a), (t = n));
    }),
    resolve: e,
    reject: t,
  };
}
function Bc() {
  let e = [],
    t = null,
    r = !1,
    a = Fu(),
    n = () => {
      ((r = !0), a.resolve(), e.forEach((l) => l.cancel()), (e = []), t?.close());
    },
    s = async () => {
      if (r && e.length === 0) {
        t?.close();
        return;
      }
      if (e.length === 0) return ((a = Fu()), await a.promise, s());
      try {
        let { value: l, done: i } = await e[0].read();
        i ? (e.shift(), e.length === 0 && r ? t?.close() : await s()) : t?.enqueue(l);
      } catch (l) {
        (t?.error(l), e.shift(), n());
      }
    };
  return {
    stream: new ReadableStream({
      start(l) {
        t = l;
      },
      pull: s,
      async cancel() {
        for (let l of e) await l.cancel();
        ((e = []), (r = !0));
      },
    }),
    addStream: (l) => {
      if (r) throw new Error("Cannot add inner stream: outer stream is closed");
      (e.push(l.getReader()), a.resolve());
    },
    close: () => {
      ((r = !0), a.resolve(), e.length === 0 && t?.close());
    },
    terminate: n,
  };
}
function iv({
  tools: e,
  generatorStream: t,
  tracer: r,
  telemetry: a,
  system: n,
  messages: s,
  abortSignal: l,
  repairToolCall: i,
  experimental_context: d,
  toolApprovalSecret: u,
  generateId: c,
  stepNumber: f,
  model: p,
  onToolCallStart: w,
  onToolCallFinish: h,
}) {
  let b = null,
    v = new ReadableStream({
      start(x) {
        b = x;
      },
    }),
    g = new Set(),
    y = new Map(),
    m = new Map(),
    M = !1,
    T;
  function _() {
    M && g.size === 0 && (T != null && b.enqueue(T), b.close());
  }
  let C = new TransformStream({
    async transform(x, N) {
      let F = x.type;
      switch (F) {
        case "stream-start":
        case "text-start":
        case "text-delta":
        case "text-end":
        case "reasoning-start":
        case "reasoning-delta":
        case "reasoning-end":
        case "tool-input-start":
        case "tool-input-delta":
        case "tool-input-end":
        case "source":
        case "response-metadata":
        case "error":
        case "raw": {
          N.enqueue(x);
          break;
        }
        case "file": {
          N.enqueue({
            type: "file",
            file: new Jg({ data: x.data, mediaType: x.mediaType }),
            ...(x.providerMetadata != null ? { providerMetadata: x.providerMetadata } : {}),
          });
          break;
        }
        case "finish": {
          T = {
            type: "finish",
            finishReason: x.finishReason.unified,
            rawFinishReason: x.finishReason.raw,
            usage: Ma(x.usage),
            providerMetadata: x.providerMetadata,
          };
          break;
        }
        case "tool-approval-request": {
          let k = m.get(x.toolCallId);
          if (k == null) {
            b.enqueue({
              type: "error",
              error: new Kn({ toolCallId: x.toolCallId, approvalId: x.approvalId }),
            });
            break;
          }
          N.enqueue({ type: "tool-approval-request", approvalId: x.approvalId, toolCall: k });
          break;
        }
        case "tool-call": {
          try {
            let k = await $c({ toolCall: x, tools: e, repairToolCall: i, system: n, messages: s });
            if ((m.set(k.toolCallId, k), N.enqueue(k), k.invalid)) {
              b.enqueue({
                type: "tool-error",
                toolCallId: k.toolCallId,
                toolName: k.toolName,
                input: k.input,
                error: va(k.error),
                dynamic: !0,
                title: k.title,
                ...(k.toolMetadata != null ? { toolMetadata: k.toolMetadata } : {}),
              });
              break;
            }
            let D = e?.[k.toolName];
            if (D == null) break;
            if (
              (D.onInputAvailable != null &&
                (await D.onInputAvailable({
                  input: k.input,
                  toolCallId: k.toolCallId,
                  messages: s,
                  abortSignal: l,
                  experimental_context: d,
                })),
              await ao({ tool: D, toolCall: k, messages: s, experimental_context: d }))
            ) {
              let L = c(),
                U = await Pc({
                  secret: u,
                  approvalId: L,
                  toolCallId: k.toolCallId,
                  toolName: k.toolName,
                  input: k.input,
                });
              b.enqueue({
                type: "tool-approval-request",
                approvalId: L,
                toolCall: k,
                ...(U != null ? { signature: U } : {}),
              });
              break;
            }
            if ((y.set(k.toolCallId, k.input), D.execute != null && k.providerExecuted !== !0)) {
              let L = c();
              (g.add(L),
                ro({
                  toolCall: k,
                  tools: e,
                  tracer: r,
                  telemetry: a,
                  messages: s,
                  abortSignal: l,
                  experimental_context: d,
                  stepNumber: f,
                  model: p,
                  onToolCallStart: w,
                  onToolCallFinish: h,
                  onPreliminaryToolResult: (U) => {
                    b.enqueue(U);
                  },
                })
                  .then((U) => {
                    b.enqueue(U);
                  })
                  .catch((U) => {
                    b.enqueue({ type: "error", error: U });
                  })
                  .finally(() => {
                    (g.delete(L), _());
                  }));
            }
          } catch (k) {
            b.enqueue({ type: "error", error: k });
          }
          break;
        }
        case "tool-result": {
          let k = x.toolName,
            D = m.get(x.toolCallId);
          x.isError
            ? b.enqueue({
                type: "tool-error",
                toolCallId: x.toolCallId,
                toolName: k,
                input: y.get(x.toolCallId),
                providerExecuted: !0,
                error: x.result,
                dynamic: x.dynamic,
                ...(x.providerMetadata != null ? { providerMetadata: x.providerMetadata } : {}),
                ...(D?.toolMetadata != null ? { toolMetadata: D.toolMetadata } : {}),
              })
            : N.enqueue({
                type: "tool-result",
                toolCallId: x.toolCallId,
                toolName: k,
                input: y.get(x.toolCallId),
                output: x.result,
                providerExecuted: !0,
                dynamic: x.dynamic,
                ...(x.providerMetadata != null ? { providerMetadata: x.providerMetadata } : {}),
                ...(D?.toolMetadata != null ? { toolMetadata: D.toolMetadata } : {}),
              });
          break;
        }
        default: {
          let k = F;
          throw new Error(`Unhandled chunk type: ${k}`);
        }
      }
    },
    flush() {
      ((M = !0), _());
    },
  });
  return new ReadableStream({
    async start(x) {
      return Promise.all([
        t.pipeThrough(C).pipeTo(
          new WritableStream({
            write(N) {
              x.enqueue(N);
            },
            close() {},
          })
        ),
        v.pipeTo(
          new WritableStream({
            write(N) {
              x.enqueue(N);
            },
            close() {
              x.close();
            },
          })
        ),
      ]);
    },
  });
}
var lv = Ft({ prefix: "aitxt", size: 24 }),
  uv = {
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
function Zc({
  model: e,
  tools: t,
  toolChoice: r,
  system: a,
  prompt: n,
  messages: s,
  allowSystemInMessages: l,
  maxRetries: i,
  abortSignal: d,
  timeout: u,
  headers: c,
  stopWhen: f = ts(1),
  experimental_output: p,
  output: w = p,
  experimental_telemetry: h,
  prepareStep: b,
  providerOptions: v,
  experimental_activeTools: g,
  activeTools: y = g,
  experimental_repairToolCall: m,
  experimental_transform: M,
  experimental_download: T,
  includeRawChunks: _ = !1,
  onChunk: C,
  onError: x = ({ error: me }) => {
    console.error(me);
  },
  onFinish: N,
  onAbort: F,
  onStepFinish: k,
  experimental_onStart: D,
  experimental_onStepStart: L,
  experimental_onToolCallStart: U,
  experimental_onToolCallFinish: Y,
  experimental_context: se,
  experimental_toolApprovalSecret: oe,
  experimental_include: xe,
  _internal: { now: $e = on, generateId: Le = lv } = {},
  ...Je
}) {
  let me = Qs(u),
    Ee = cc(u),
    ze = _g(u),
    Me = Ee != null ? new AbortController() : void 0,
    ie = ze != null ? new AbortController() : void 0;
  return new cv({
    model: Sa(e),
    telemetry: h,
    headers: c,
    settings: Je,
    maxRetries: i,
    abortSignal: Vc(d, me != null ? AbortSignal.timeout(me) : void 0, Me?.signal, ie?.signal),
    stepTimeoutMs: Ee,
    stepAbortController: Me,
    chunkTimeoutMs: ze,
    chunkAbortController: ie,
    system: a,
    prompt: n,
    messages: s,
    allowSystemInMessages: l,
    tools: t,
    toolChoice: r,
    transforms: Xt(M),
    activeTools: y,
    repairToolCall: m,
    stopConditions: Xt(f),
    output: w,
    providerOptions: v,
    prepareStep: b,
    includeRawChunks: _,
    timeout: u,
    stopWhen: f,
    originalAbortSignal: d,
    onChunk: C,
    onError: x,
    onFinish: N,
    onAbort: F,
    onStepFinish: k,
    onStart: D,
    onStepStart: L,
    onToolCallStart: U,
    onToolCallFinish: Y,
    now: $e,
    generateId: Le,
    experimental_context: se,
    experimental_toolApprovalSecret: oe,
    download: T,
    include: xe,
  });
}
function dv(e) {
  let t,
    r = "",
    a = "",
    n,
    s = "";
  function l({ controller: i, partialOutput: d = void 0 }) {
    (i.enqueue({
      part: { type: "text-delta", id: t, text: a, providerMetadata: n },
      partialOutput: d,
    }),
      (a = ""));
  }
  return new TransformStream({
    async transform(i, d) {
      var u;
      if (
        (i.type === "finish-step" && a.length > 0 && l({ controller: d }),
        i.type !== "text-delta" && i.type !== "text-start" && i.type !== "text-end")
      ) {
        d.enqueue({ part: i, partialOutput: void 0 });
        return;
      }
      if (t == null) t = i.id;
      else if (i.id !== t) {
        d.enqueue({ part: i, partialOutput: void 0 });
        return;
      }
      if (i.type === "text-start") {
        d.enqueue({ part: i, partialOutput: void 0 });
        return;
      }
      if (i.type === "text-end") {
        (a.length > 0 && l({ controller: d }), d.enqueue({ part: i, partialOutput: void 0 }));
        return;
      }
      ((r += i.text), (a += i.text), (n = (u = i.providerMetadata) != null ? u : n));
      let c = await e.parsePartialOutput({ text: r });
      if (c !== void 0) {
        let f = typeof c.partial == "string" ? c.partial : JSON.stringify(c.partial);
        f !== s && (l({ controller: d, partialOutput: c.partial }), (s = f));
      }
    },
  });
}
var cv = class {
    constructor({
      model: e,
      telemetry: t,
      headers: r,
      settings: a,
      maxRetries: n,
      abortSignal: s,
      stepTimeoutMs: l,
      stepAbortController: i,
      chunkTimeoutMs: d,
      chunkAbortController: u,
      system: c,
      prompt: f,
      messages: p,
      allowSystemInMessages: w,
      tools: h,
      toolChoice: b,
      transforms: v,
      activeTools: g,
      repairToolCall: y,
      stopConditions: m,
      output: M,
      providerOptions: T,
      prepareStep: _,
      includeRawChunks: C,
      now: x,
      generateId: N,
      timeout: F,
      stopWhen: k,
      originalAbortSignal: D,
      onChunk: L,
      onError: U,
      onFinish: Y,
      onAbort: se,
      onStepFinish: oe,
      onStart: xe,
      onStepStart: $e,
      onToolCallStart: Le,
      onToolCallFinish: Je,
      experimental_context: me,
      experimental_toolApprovalSecret: Ee,
      download: ze,
      include: Me,
    }) {
      ((this._totalUsage = new lt()),
        (this._finishReason = new lt()),
        (this._rawFinishReason = new lt()),
        (this._steps = new lt()),
        (this.outputSpecification = M),
        (this.includeRawChunks = C),
        (this.tools = h));
      let ke = Ec()(t?.integrations),
        kt,
        Ie = [],
        Ge = [],
        le,
        mt,
        Be,
        Rt = {},
        Tt = [],
        ce = [],
        q,
        Z = new Map(),
        ht,
        ot = Vt(),
        xt = Vt(),
        tt = new TransformStream({
          async transform(he, be) {
            var Fe, gt, At, Ct;
            be.enqueue(he);
            let { part: R } = he;
            if (
              ((R.type === "text-delta" ||
                R.type === "reasoning-delta" ||
                R.type === "source" ||
                R.type === "tool-call" ||
                R.type === "tool-result" ||
                R.type === "tool-input-start" ||
                R.type === "tool-input-delta" ||
                R.type === "raw") &&
                (await L?.({ chunk: R })),
              R.type === "error")
            ) {
              let re = Qn(R.error);
              (sn.isInstance(re) && (q = re), await U({ error: re }));
            }
            if (
              (R.type === "text-start" &&
                ((ot[R.id] = { type: "text", text: "", providerMetadata: R.providerMetadata }),
                Ie.push(ot[R.id])),
              R.type === "text-delta")
            ) {
              let re = ot[R.id];
              if (re == null) {
                be.enqueue({
                  part: { type: "error", error: `text part ${R.id} not found` },
                  partialOutput: void 0,
                });
                return;
              }
              ((re.text += R.text),
                (re.providerMetadata =
                  (Fe = R.providerMetadata) != null ? Fe : re.providerMetadata));
            }
            if (R.type === "text-end") {
              let re = ot[R.id];
              if (re == null) {
                be.enqueue({
                  part: { type: "error", error: `text part ${R.id} not found` },
                  partialOutput: void 0,
                });
                return;
              }
              ((re.providerMetadata = (gt = R.providerMetadata) != null ? gt : re.providerMetadata),
                delete ot[R.id]);
            }
            if (
              (R.type === "reasoning-start" &&
                ((xt[R.id] = { type: "reasoning", text: "", providerMetadata: R.providerMetadata }),
                Ie.push(xt[R.id])),
              R.type === "reasoning-delta")
            ) {
              let re = xt[R.id];
              if (re == null) {
                be.enqueue({
                  part: { type: "error", error: `reasoning part ${R.id} not found` },
                  partialOutput: void 0,
                });
                return;
              }
              ((re.text += R.text),
                (re.providerMetadata =
                  (At = R.providerMetadata) != null ? At : re.providerMetadata));
            }
            if (R.type === "reasoning-end") {
              let re = xt[R.id];
              if (re == null) {
                be.enqueue({
                  part: { type: "error", error: `reasoning part ${R.id} not found` },
                  partialOutput: void 0,
                });
                return;
              }
              ((re.providerMetadata = (Ct = R.providerMetadata) != null ? Ct : re.providerMetadata),
                delete xt[R.id]);
            }
            if (
              (R.type === "file" &&
                Ie.push({
                  type: "file",
                  file: R.file,
                  ...(R.providerMetadata != null ? { providerMetadata: R.providerMetadata } : {}),
                }),
              R.type === "source" && Ie.push(R),
              R.type === "tool-call" && Ie.push(R),
              R.type === "tool-result" && !R.preliminary && Ie.push(R),
              R.type === "tool-approval-request" && Ie.push(R),
              R.type === "tool-error" && Ie.push(R),
              R.type === "start-step" &&
                ((Ie = []), (xt = Vt()), (ot = Vt()), (Rt = R.request), (Tt = R.warnings)),
              R.type === "finish-step")
            ) {
              let re = await Ys({ content: Ie, tools: h }),
                X = new qc({
                  stepNumber: ce.length,
                  model: rr,
                  ...Zr,
                  experimental_context: me,
                  content: Ie,
                  finishReason: R.finishReason,
                  rawFinishReason: R.rawFinishReason,
                  usage: R.usage,
                  warnings: Tt,
                  request: Rt,
                  response: { ...R.response, messages: [...Ge, ...re] },
                  providerMetadata: R.providerMetadata,
                });
              (await Ut({ event: X, callbacks: [oe, ke.onStepFinish] }),
                _t({ warnings: Tt, provider: rr.provider, model: rr.modelId }),
                ce.push(X),
                Ge.push(...re),
                kt.resolve());
            }
            R.type === "finish" &&
              ((Be = R.totalUsage), (le = R.finishReason), (mt = R.rawFinishReason));
          },
          async flush(he) {
            var be, Fe, gt, At, Ct, R, re;
            try {
              if (ce.length === 0 || q != null) {
                let Q = s?.aborted
                  ? s.reason
                  : (q ?? new sn({ message: "No output generated. Check the stream for errors." }));
                (Oe._finishReason.reject(Q),
                  Oe._rawFinishReason.reject(Q),
                  Oe._totalUsage.reject(Q),
                  Oe._steps.reject(Q));
                return;
              }
              let X = le ?? "other",
                we = Be ?? Ln();
              (Oe._finishReason.resolve(X),
                Oe._rawFinishReason.resolve(mt),
                Oe._totalUsage.resolve(we),
                Oe._steps.resolve(ce));
              let B = ce[ce.length - 1];
              (await Ut({
                event: {
                  stepNumber: B.stepNumber,
                  model: B.model,
                  functionId: B.functionId,
                  metadata: B.metadata,
                  experimental_context: B.experimental_context,
                  finishReason: B.finishReason,
                  rawFinishReason: B.rawFinishReason,
                  totalUsage: we,
                  usage: B.usage,
                  content: B.content,
                  text: B.text,
                  reasoningText: B.reasoningText,
                  reasoning: B.reasoning,
                  files: B.files,
                  sources: B.sources,
                  toolCalls: B.toolCalls,
                  staticToolCalls: B.staticToolCalls,
                  dynamicToolCalls: B.dynamicToolCalls,
                  toolResults: B.toolResults,
                  staticToolResults: B.staticToolResults,
                  dynamicToolResults: B.dynamicToolResults,
                  request: B.request,
                  response: B.response,
                  warnings: B.warnings,
                  providerMetadata: B.providerMetadata,
                  steps: ce,
                },
                callbacks: [Y, ke.onFinish],
              }),
                ht.setAttributes(
                  await te({
                    telemetry: t,
                    attributes: {
                      "ai.response.finishReason": X,
                      "ai.response.text": { output: () => B.text },
                      "ai.response.reasoning": { output: () => B.reasoningText },
                      "ai.response.toolCalls": {
                        output: () => {
                          var Q;
                          return (Q = B.toolCalls) != null && Q.length
                            ? JSON.stringify(B.toolCalls)
                            : void 0;
                        },
                      },
                      "ai.response.providerMetadata": JSON.stringify(B.providerMetadata),
                      "ai.usage.inputTokens": we.inputTokens,
                      "ai.usage.inputTokenDetails.noCacheTokens":
                        (be = we.inputTokenDetails) == null ? void 0 : be.noCacheTokens,
                      "ai.usage.inputTokenDetails.cacheReadTokens":
                        (Fe = we.inputTokenDetails) == null ? void 0 : Fe.cacheReadTokens,
                      "ai.usage.inputTokenDetails.cacheWriteTokens":
                        (gt = we.inputTokenDetails) == null ? void 0 : gt.cacheWriteTokens,
                      "ai.usage.outputTokens": we.outputTokens,
                      "ai.usage.outputTokenDetails.textTokens":
                        (At = we.outputTokenDetails) == null ? void 0 : At.textTokens,
                      "ai.usage.outputTokenDetails.reasoningTokens":
                        (Ct = we.outputTokenDetails) == null ? void 0 : Ct.reasoningTokens,
                      "ai.usage.totalTokens": we.totalTokens,
                      "ai.usage.reasoningTokens":
                        (R = we.outputTokenDetails) == null ? void 0 : R.reasoningTokens,
                      "ai.usage.cachedInputTokens":
                        (re = we.inputTokenDetails) == null ? void 0 : re.cacheReadTokens,
                    },
                  })
                ));
            } catch (X) {
              he.error(X);
            } finally {
              ht.end();
            }
          },
        }),
        Jt = Bc();
      ((this.addStream = Jt.addStream), (this.closeStream = Jt.close));
      let tr = Jt.stream.getReader(),
        Br = new ReadableStream({
          async start(he) {
            he.enqueue({ type: "start" });
          },
          async pull(he) {
            function be() {
              (se?.({ steps: ce }),
                he.enqueue({
                  type: "abort",
                  ...(s?.reason !== void 0 ? { reason: Bt(s.reason) } : {}),
                }),
                he.close());
            }
            try {
              let { done: Fe, value: gt } = await tr.read();
              if (Fe) {
                he.close();
                return;
              }
              if (s?.aborted) {
                be();
                return;
              }
              he.enqueue(gt);
            } catch (Fe) {
              ur(Fe) && s?.aborted ? be() : he.error(Fe);
            }
          },
          cancel(he) {
            return Jt.stream.cancel(he);
          },
        });
      for (let he of v)
        Br = Br.pipeThrough(
          he({
            tools: h,
            stopStream() {
              Jt.terminate();
            },
          })
        );
      this.baseStream = Br.pipeThrough(dv(M ?? Zn())).pipeThrough(tt);
      let { maxRetries: Ra, retry: mn } = Lt({ maxRetries: n, abortSignal: s }),
        Rr = zr(t),
        Re = Ur(a),
        Aa = Jr({ model: e, telemetry: t, headers: r, settings: { ...Re, maxRetries: Ra } }),
        Oe = this,
        rr = { provider: e.provider, modelId: e.modelId },
        Zr = { functionId: t?.functionId, metadata: t?.metadata };
      et({
        name: "ai.streamText",
        attributes: te({
          telemetry: t,
          attributes: {
            ...Qe({ operationId: "ai.streamText", telemetry: t }),
            ...Aa,
            "ai.prompt": { input: () => JSON.stringify({ system: c, prompt: f, messages: p }) },
          },
        }),
        tracer: Rr,
        endWhenDone: !1,
        fn: async (he) => {
          ht = he;
          let be = await Xn({ system: c, prompt: f, messages: p, allowSystemInMessages: w });
          await Ut({
            event: {
              model: rr,
              system: c,
              prompt: f,
              messages: p,
              tools: h,
              toolChoice: b,
              activeTools: g,
              maxOutputTokens: Re.maxOutputTokens,
              temperature: Re.temperature,
              topP: Re.topP,
              topK: Re.topK,
              presencePenalty: Re.presencePenalty,
              frequencyPenalty: Re.frequencyPenalty,
              stopSequences: Re.stopSequences,
              seed: Re.seed,
              maxRetries: Ra,
              timeout: F,
              headers: r,
              providerOptions: T,
              stopWhen: k,
              output: M,
              abortSignal: D,
              include: Me,
              ...Zr,
              experimental_context: me,
            },
            callbacks: [xe, ke.onStart],
          });
          let Fe = be.messages,
            gt = [],
            { approvedToolApprovals: At, deniedToolApprovals: Ct } = Rc({ messages: Fe });
          if (Ct.length > 0 || At.length > 0) {
            let { approvedToolApprovals: re, deniedToolApprovals: X } = await jc({
                approvedToolApprovals: At.filter((J) => !J.toolCall.providerExecuted),
                tools: h,
                messages: Fe,
                experimental_context: me,
                toolApprovalSecret: Ee,
              }),
              we = [...Ct.filter((J) => !J.toolCall.providerExecuted), ...X],
              B = Ct.filter((J) => J.toolCall.providerExecuted),
              Q,
              fr = new ReadableStream({
                start(J) {
                  Q = J;
                },
              });
            Oe.addStream(fr);
            try {
              for (let ve of [...we, ...B])
                Q?.enqueue({
                  type: "tool-output-denied",
                  toolCallId: ve.toolCall.toolCallId,
                  toolName: ve.toolCall.toolName,
                });
              let J = [];
              if (
                (await Promise.all(
                  re.map(async (ve) => {
                    let _e = await ro({
                      toolCall: ve.toolCall,
                      tools: h,
                      tracer: Rr,
                      telemetry: t,
                      messages: Fe,
                      abortSignal: s,
                      experimental_context: me,
                      stepNumber: ce.length,
                      model: rr,
                      onToolCallStart: [Le, ke.onToolCallStart],
                      onToolCallFinish: [Je, ke.onToolCallFinish],
                      onPreliminaryToolResult: (qe) => {
                        Q?.enqueue(qe);
                      },
                    });
                    _e != null && (Q?.enqueue(_e), J.push(_e));
                  })
                ),
                J.length > 0 || we.length > 0)
              ) {
                let ve = [];
                for (let _e of J)
                  ve.push({
                    type: "tool-result",
                    toolCallId: _e.toolCallId,
                    toolName: _e.toolName,
                    output: await qr({
                      toolCallId: _e.toolCallId,
                      input: _e.input,
                      tool: h?.[_e.toolName],
                      output: _e.type === "tool-result" ? _e.output : _e.error,
                      errorMode: _e.type === "tool-error" ? "text" : "none",
                    }),
                  });
                for (let _e of we)
                  ve.push({
                    type: "tool-result",
                    toolCallId: _e.toolCall.toolCallId,
                    toolName: _e.toolCall.toolName,
                    output: { type: "execution-denied", reason: _e.approvalResponse.reason },
                  });
                gt.push({ role: "tool", content: ve });
              }
            } finally {
              Q?.close();
            }
          }
          Ge.push(...gt);
          async function R({ currentStep: re, responseMessages: X, usage: we }) {
            var B, Q, fr, J, ve, _e, qe, Ze, H;
            let it = Oe.includeRawChunks,
              mr = l != null ? setTimeout(() => i.abort(), l) : void 0,
              ar;
            function hn() {
              d != null && (ar != null && clearTimeout(ar), (ar = setTimeout(() => u.abort(), d)));
            }
            function hr() {
              ar != null && (clearTimeout(ar), (ar = void 0));
            }
            function Ar() {
              mr != null && clearTimeout(mr);
            }
            try {
              kt = new lt();
              let gr = [...Fe, ...X],
                Ae = await _?.({
                  model: e,
                  steps: ce,
                  stepNumber: ce.length,
                  messages: gr,
                  experimental_context: me,
                }),
                Ot = Sa((B = Ae?.model) != null ? B : e),
                vr = { provider: Ot.provider, modelId: Ot.modelId },
                Hr = await Yn({
                  prompt: {
                    system: (Q = Ae?.system) != null ? Q : be.system,
                    messages: (fr = Ae?.messages) != null ? fr : gr,
                  },
                  supportedUrls: await Ot.supportedUrls,
                  download: ze,
                }),
                gn = (J = Ae?.activeTools) != null ? J : g,
                { toolChoice: Cr, tools: Ca } = await gc({
                  tools: h,
                  toolChoice: (ve = Ae?.toolChoice) != null ? ve : b,
                  activeTools: gn,
                });
              me = (_e = Ae?.experimental_context) != null ? _e : me;
              let rs = (qe = Ae?.messages) != null ? qe : gr,
                as = (Ze = Ae?.system) != null ? Ze : be.system,
                Oa = ka(T, Ae?.providerOptions);
              await Ut({
                event: {
                  stepNumber: ce.length,
                  model: vr,
                  system: as,
                  messages: rs,
                  tools: h,
                  toolChoice: Cr,
                  activeTools: gn,
                  steps: [...ce],
                  providerOptions: Oa,
                  timeout: F,
                  headers: r,
                  stopWhen: k,
                  output: M,
                  abortSignal: D,
                  include: Me,
                  ...Zr,
                  experimental_context: me,
                },
                callbacks: [$e, ke.onStepStart],
              });
              let {
                  result: { stream: G, response: He, request: zt },
                  doStreamSpan: Ue,
                  startTimestampMs: Na,
                } = await mn(() =>
                  et({
                    name: "ai.streamText.doStream",
                    attributes: te({
                      telemetry: t,
                      attributes: {
                        ...Qe({ operationId: "ai.streamText.doStream", telemetry: t }),
                        ...Aa,
                        "ai.model.provider": Ot.provider,
                        "ai.model.id": Ot.modelId,
                        "ai.prompt.messages": { input: () => es(Hr) },
                        "ai.prompt.tools": { input: () => Ca?.map(($) => JSON.stringify($)) },
                        "ai.prompt.toolChoice": {
                          input: () => (Cr != null ? JSON.stringify(Cr) : void 0),
                        },
                        "gen_ai.system": Ot.provider,
                        "gen_ai.request.model": Ot.modelId,
                        "gen_ai.request.frequency_penalty": Re.frequencyPenalty,
                        "gen_ai.request.max_tokens": Re.maxOutputTokens,
                        "gen_ai.request.presence_penalty": Re.presencePenalty,
                        "gen_ai.request.stop_sequences": Re.stopSequences,
                        "gen_ai.request.temperature": Re.temperature,
                        "gen_ai.request.top_k": Re.topK,
                        "gen_ai.request.top_p": Re.topP,
                      },
                    }),
                    tracer: Rr,
                    endWhenDone: !1,
                    fn: async ($) => ({
                      startTimestampMs: x(),
                      doStreamSpan: $,
                      result: await Ot.doStream({
                        ...Re,
                        tools: Ca,
                        toolChoice: Cr,
                        responseFormat: await M?.responseFormat,
                        prompt: Hr,
                        providerOptions: Oa,
                        abortSignal: s,
                        headers: r,
                        includeRawChunks: it,
                      }),
                    }),
                  })
                ),
                vn = iv({
                  tools: h,
                  generatorStream: G,
                  tracer: Rr,
                  telemetry: t,
                  system: c,
                  messages: gr,
                  repairToolCall: y,
                  abortSignal: s,
                  experimental_context: me,
                  toolApprovalSecret: Ee,
                  generateId: N,
                  stepNumber: ce.length,
                  model: vr,
                  onToolCallStart: [Le, ke.onToolCallStart],
                  onToolCallFinish: [Je, ke.onToolCallFinish],
                }),
                yn = (H = Me?.requestBody) == null || H ? (zt ?? {}) : { ...zt, body: void 0 },
                yr = [],
                br = [],
                Wr,
                de = {},
                vt = "other",
                Pa,
                Kr = !1,
                To = !1,
                We = Ln(),
                xo,
                Io = !0,
                Gt = { id: N(), timestamp: new Date(), modelId: rr.modelId },
                up = "";
              Oe.addStream(
                vn.pipeThrough(
                  new TransformStream({
                    async transform($, je) {
                      var ja, Da, $a, Fa, qa;
                      if ((hn(), $.type === "stream-start")) {
                        Wr = $.warnings;
                        return;
                      }
                      if (Io) {
                        let Ne = x() - Na;
                        ((Io = !1),
                          Ue.addEvent("ai.stream.firstChunk", { "ai.response.msToFirstChunk": Ne }),
                          Ue.setAttributes({ "ai.response.msToFirstChunk": Ne }),
                          je.enqueue({ type: "start-step", request: yn, warnings: Wr ?? [] }));
                      }
                      let Yr = $.type;
                      switch ((uv[Yr] && (To = !0), Yr)) {
                        case "tool-approval-request":
                        case "text-start":
                        case "text-end": {
                          je.enqueue($);
                          break;
                        }
                        case "text-delta": {
                          $.delta.length > 0 &&
                            (je.enqueue({
                              type: "text-delta",
                              id: $.id,
                              text: $.delta,
                              providerMetadata: $.providerMetadata,
                            }),
                            (up += $.delta));
                          break;
                        }
                        case "reasoning-start":
                        case "reasoning-end": {
                          je.enqueue($);
                          break;
                        }
                        case "reasoning-delta": {
                          je.enqueue({
                            type: "reasoning-delta",
                            id: $.id,
                            text: $.delta,
                            providerMetadata: $.providerMetadata,
                          });
                          break;
                        }
                        case "tool-call": {
                          (je.enqueue($), yr.push($));
                          break;
                        }
                        case "tool-result": {
                          (je.enqueue($), $.preliminary || br.push($));
                          break;
                        }
                        case "tool-error": {
                          (je.enqueue($), br.push($));
                          break;
                        }
                        case "response-metadata": {
                          Gt = {
                            id: (ja = $.id) != null ? ja : Gt.id,
                            timestamp: (Da = $.timestamp) != null ? Da : Gt.timestamp,
                            modelId: ($a = $.modelId) != null ? $a : Gt.modelId,
                          };
                          break;
                        }
                        case "finish": {
                          ((Kr = !0),
                            (We = $.usage),
                            (vt = $.finishReason),
                            (Pa = $.rawFinishReason),
                            (xo = $.providerMetadata));
                          let Ne = x() - Na;
                          (Ue.addEvent("ai.stream.finish"),
                            Ue.setAttributes({
                              "ai.response.msToFinish": Ne,
                              "ai.response.avgOutputTokensPerSecond":
                                (1e3 * ((Fa = We.outputTokens) != null ? Fa : 0)) / Ne,
                            }));
                          break;
                        }
                        case "file": {
                          je.enqueue($);
                          break;
                        }
                        case "source": {
                          je.enqueue($);
                          break;
                        }
                        case "tool-input-start": {
                          de[$.id] = $.toolName;
                          let Ne = h?.[$.toolName];
                          (Ne?.onInputStart != null &&
                            (await Ne.onInputStart({
                              toolCallId: $.id,
                              messages: gr,
                              abortSignal: s,
                              experimental_context: me,
                            })),
                            je.enqueue({
                              ...$,
                              dynamic: (qa = $.dynamic) != null ? qa : Ne?.type === "dynamic",
                              title: Ne?.title,
                            }));
                          break;
                        }
                        case "tool-input-end": {
                          (delete de[$.id], je.enqueue($));
                          break;
                        }
                        case "tool-input-delta": {
                          let Ne = de[$.id],
                            Xr = h?.[Ne];
                          (Xr?.onInputDelta != null &&
                            (await Xr.onInputDelta({
                              inputTextDelta: $.delta,
                              toolCallId: $.id,
                              messages: gr,
                              abortSignal: s,
                              experimental_context: me,
                            })),
                            je.enqueue($));
                          break;
                        }
                        case "error": {
                          ((Kr = !0), je.enqueue($), (vt = "error"));
                          break;
                        }
                        case "raw": {
                          it && je.enqueue($);
                          break;
                        }
                        default: {
                          let Ne = Yr;
                          throw new Error(`Unknown chunk type: ${Ne}`);
                        }
                      }
                    },
                    async flush($) {
                      var je, ja, Da, $a, Fa, qa, Yr;
                      if (!Kr && !To) {
                        ($.enqueue({
                          type: "error",
                          error: new sn({
                            message:
                              "No output generated. The model stream ended without a finish chunk.",
                          }),
                        }),
                          Ue.end(),
                          Ar(),
                          hr(),
                          Oe.closeStream());
                        return;
                      }
                      let Ne = yr.length > 0 ? JSON.stringify(yr) : void 0;
                      try {
                        Ue.setAttributes(
                          await te({
                            telemetry: t,
                            attributes: {
                              "ai.response.finishReason": vt,
                              "ai.response.toolCalls": { output: () => Ne },
                              "ai.response.id": Gt.id,
                              "ai.response.model": Gt.modelId,
                              "ai.response.timestamp": Gt.timestamp.toISOString(),
                              "ai.usage.inputTokens": We.inputTokens,
                              "ai.usage.inputTokenDetails.noCacheTokens":
                                (je = We.inputTokenDetails) == null ? void 0 : je.noCacheTokens,
                              "ai.usage.inputTokenDetails.cacheReadTokens":
                                (ja = We.inputTokenDetails) == null ? void 0 : ja.cacheReadTokens,
                              "ai.usage.inputTokenDetails.cacheWriteTokens":
                                (Da = We.inputTokenDetails) == null ? void 0 : Da.cacheWriteTokens,
                              "ai.usage.outputTokens": We.outputTokens,
                              "ai.usage.outputTokenDetails.textTokens":
                                ($a = We.outputTokenDetails) == null ? void 0 : $a.textTokens,
                              "ai.usage.outputTokenDetails.reasoningTokens":
                                (Fa = We.outputTokenDetails) == null ? void 0 : Fa.reasoningTokens,
                              "ai.usage.totalTokens": We.totalTokens,
                              "ai.usage.reasoningTokens":
                                (qa = We.outputTokenDetails) == null ? void 0 : qa.reasoningTokens,
                              "ai.usage.cachedInputTokens":
                                (Yr = We.inputTokenDetails) == null ? void 0 : Yr.cacheReadTokens,
                              "gen_ai.response.finish_reasons": [vt],
                              "gen_ai.response.id": Gt.id,
                              "gen_ai.response.model": Gt.modelId,
                              "gen_ai.usage.input_tokens": We.inputTokens,
                              "gen_ai.usage.output_tokens": We.outputTokens,
                            },
                          })
                        );
                      } catch {}
                      $.enqueue({
                        type: "finish-step",
                        finishReason: vt,
                        rawFinishReason: Pa,
                        usage: We,
                        providerMetadata: xo,
                        response: { ...Gt, headers: He?.headers },
                      });
                      let Xr = Mc(we, We);
                      await kt.promise;
                      let ns = ce[ce.length - 1];
                      try {
                        Ue.setAttributes(
                          await te({
                            telemetry: t,
                            attributes: {
                              "ai.response.text": { output: () => ns.text },
                              "ai.response.reasoning": { output: () => ns.reasoningText },
                              "ai.response.providerMetadata": JSON.stringify(ns.providerMetadata),
                            },
                          })
                        );
                      } catch {
                      } finally {
                        Ue.end();
                      }
                      let So = yr.filter((Ve) => Ve.providerExecuted !== !0),
                        dp = br.filter((Ve) => Ve.providerExecuted !== !0);
                      for (let Ve of yr) {
                        if (Ve.providerExecuted !== !0) continue;
                        let ss = h?.[Ve.toolName];
                        ss?.type === "provider" &&
                          ss.supportsDeferredResults &&
                          (br.some(
                            (os) =>
                              (os.type === "tool-result" || os.type === "tool-error") &&
                              os.toolCallId === Ve.toolCallId
                          ) ||
                            Z.set(Ve.toolCallId, { toolName: Ve.toolName }));
                      }
                      for (let Ve of br)
                        (Ve.type === "tool-result" || Ve.type === "tool-error") &&
                          Z.delete(Ve.toolCallId);
                      if (
                        (Ar(),
                        hr(),
                        ((So.length > 0 && dp.length === So.length) || Z.size > 0) &&
                          !(await Uc({ stopConditions: m, steps: ce })))
                      ) {
                        X.push(...(await Ys({ content: ce[ce.length - 1].content, tools: h })));
                        try {
                          await R({ currentStep: re + 1, responseMessages: X, usage: Xr });
                        } catch (Ve) {
                          ($.enqueue({ type: "error", error: Ve }), Oe.closeStream());
                        }
                      } else
                        ($.enqueue({
                          type: "finish",
                          finishReason: vt,
                          rawFinishReason: Pa,
                          totalUsage: Xr,
                        }),
                          Oe.closeStream());
                    },
                  })
                )
              );
            } finally {
              (Ar(), hr());
            }
          }
          await R({ currentStep: 0, responseMessages: gt, usage: Ln() });
        },
      }).catch((he) => {
        (Oe.addStream(
          new ReadableStream({
            start(be) {
              (be.enqueue({ type: "error", error: he }), be.close());
            },
          })
        ),
          Oe.closeStream());
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
      return Yt(
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
      return Yt(
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
        await fn({
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
      return Yt(
        this.teeStream().pipeThrough(
          new TransformStream({
            transform({ partialOutput: e }, t) {
              e != null && t.enqueue(e);
            },
          })
        )
      );
    }
    get elementStream() {
      var e, t, r;
      let a = (e = this.outputSpecification) == null ? void 0 : e.createElementStreamTransform();
      if (a == null)
        throw new wr({
          functionality: `element streams in ${(r = (t = this.outputSpecification) == null ? void 0 : t.name) != null ? r : "text"} mode`,
        });
      return Yt(this.teeStream().pipeThrough(a));
    }
    get output() {
      return this.finalStep.then((e) => {
        var t;
        return ((t = this.outputSpecification) != null ? t : Zn()).parseCompleteOutput(
          { text: e.text },
          { response: e.response, usage: e.usage, finishReason: e.finishReason }
        );
      });
    }
    toUIMessageStream({
      originalMessages: e,
      generateMessageId: t,
      onFinish: r,
      messageMetadata: a,
      sendReasoning: n = !0,
      sendSources: s = !1,
      sendStart: l = !0,
      sendFinish: i = !0,
      onError: d = () => "An error occurred.",
    } = {}) {
      let u = t != null ? av({ originalMessages: e, responseMessageId: t }) : void 0,
        c = (p) => {
          var w;
          let h = (w = this.tools) == null ? void 0 : w[p.toolName];
          return h == null ? p.dynamic : h?.type === "dynamic" ? !0 : void 0;
        },
        f = this.fullStream.pipeThrough(
          new TransformStream({
            transform: async (p, w) => {
              let h = a?.({ part: p }),
                b = p.type;
              switch (b) {
                case "text-start": {
                  w.enqueue({
                    type: "text-start",
                    id: p.id,
                    ...(p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}),
                  });
                  break;
                }
                case "text-delta": {
                  w.enqueue({
                    type: "text-delta",
                    id: p.id,
                    delta: p.text,
                    ...(p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}),
                  });
                  break;
                }
                case "text-end": {
                  w.enqueue({
                    type: "text-end",
                    id: p.id,
                    ...(p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}),
                  });
                  break;
                }
                case "reasoning-start":
                case "reasoning-end": {
                  n &&
                    w.enqueue({
                      type: b,
                      id: p.id,
                      ...(p.providerMetadata != null
                        ? { providerMetadata: p.providerMetadata }
                        : {}),
                    });
                  break;
                }
                case "reasoning-delta": {
                  n &&
                    w.enqueue({
                      type: "reasoning-delta",
                      id: p.id,
                      delta: p.text,
                      ...(p.providerMetadata != null
                        ? { providerMetadata: p.providerMetadata }
                        : {}),
                    });
                  break;
                }
                case "file": {
                  w.enqueue({
                    type: "file",
                    mediaType: p.file.mediaType,
                    url: `data:${p.file.mediaType};base64,${p.file.base64}`,
                    ...(p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}),
                  });
                  break;
                }
                case "source": {
                  (s &&
                    p.sourceType === "url" &&
                    w.enqueue({
                      type: "source-url",
                      sourceId: p.id,
                      url: p.url,
                      title: p.title,
                      ...(p.providerMetadata != null
                        ? { providerMetadata: p.providerMetadata }
                        : {}),
                    }),
                    s &&
                      p.sourceType === "document" &&
                      w.enqueue({
                        type: "source-document",
                        sourceId: p.id,
                        mediaType: p.mediaType,
                        title: p.title,
                        filename: p.filename,
                        ...(p.providerMetadata != null
                          ? { providerMetadata: p.providerMetadata }
                          : {}),
                      }));
                  break;
                }
                case "tool-input-start": {
                  let v = c(p);
                  w.enqueue({
                    type: "tool-input-start",
                    toolCallId: p.id,
                    toolName: p.toolName,
                    ...(p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {}),
                    ...(p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}),
                    ...(p.toolMetadata != null ? { toolMetadata: p.toolMetadata } : {}),
                    ...(v != null ? { dynamic: v } : {}),
                    ...(p.title != null ? { title: p.title } : {}),
                  });
                  break;
                }
                case "tool-input-delta": {
                  w.enqueue({
                    type: "tool-input-delta",
                    toolCallId: p.id,
                    inputTextDelta: p.delta,
                  });
                  break;
                }
                case "tool-call": {
                  let v = c(p);
                  p.invalid
                    ? w.enqueue({
                        type: "tool-input-error",
                        toolCallId: p.toolCallId,
                        toolName: p.toolName,
                        input: p.input,
                        ...(p.providerExecuted != null
                          ? { providerExecuted: p.providerExecuted }
                          : {}),
                        ...(p.providerMetadata != null
                          ? { providerMetadata: p.providerMetadata }
                          : {}),
                        ...(p.toolMetadata != null ? { toolMetadata: p.toolMetadata } : {}),
                        ...(v != null ? { dynamic: v } : {}),
                        errorText: d(p.error),
                        ...(p.title != null ? { title: p.title } : {}),
                      })
                    : w.enqueue({
                        type: "tool-input-available",
                        toolCallId: p.toolCallId,
                        toolName: p.toolName,
                        input: p.input,
                        ...(p.providerExecuted != null
                          ? { providerExecuted: p.providerExecuted }
                          : {}),
                        ...(p.providerMetadata != null
                          ? { providerMetadata: p.providerMetadata }
                          : {}),
                        ...(p.toolMetadata != null ? { toolMetadata: p.toolMetadata } : {}),
                        ...(v != null ? { dynamic: v } : {}),
                        ...(p.title != null ? { title: p.title } : {}),
                      });
                  break;
                }
                case "tool-approval-request": {
                  w.enqueue({
                    type: "tool-approval-request",
                    approvalId: p.approvalId,
                    toolCallId: p.toolCall.toolCallId,
                    ...(p.signature != null ? { signature: p.signature } : {}),
                  });
                  break;
                }
                case "tool-result": {
                  let v = c(p);
                  w.enqueue({
                    type: "tool-output-available",
                    toolCallId: p.toolCallId,
                    output: p.output,
                    ...(p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {}),
                    ...(p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}),
                    ...(p.toolMetadata != null ? { toolMetadata: p.toolMetadata } : {}),
                    ...(p.preliminary != null ? { preliminary: p.preliminary } : {}),
                    ...(v != null ? { dynamic: v } : {}),
                  });
                  break;
                }
                case "tool-error": {
                  let v = c(p);
                  w.enqueue({
                    type: "tool-output-error",
                    toolCallId: p.toolCallId,
                    errorText: p.providerExecuted
                      ? typeof p.error == "string"
                        ? p.error
                        : JSON.stringify(p.error)
                      : d(p.error),
                    ...(p.providerExecuted != null ? { providerExecuted: p.providerExecuted } : {}),
                    ...(p.providerMetadata != null ? { providerMetadata: p.providerMetadata } : {}),
                    ...(p.toolMetadata != null ? { toolMetadata: p.toolMetadata } : {}),
                    ...(v != null ? { dynamic: v } : {}),
                  });
                  break;
                }
                case "tool-output-denied": {
                  w.enqueue({ type: "tool-output-denied", toolCallId: p.toolCallId });
                  break;
                }
                case "error": {
                  w.enqueue({ type: "error", errorText: d(p.error) });
                  break;
                }
                case "start-step": {
                  w.enqueue({ type: "start-step" });
                  break;
                }
                case "finish-step": {
                  w.enqueue({ type: "finish-step" });
                  break;
                }
                case "start": {
                  l &&
                    w.enqueue({
                      type: "start",
                      ...(h != null ? { messageMetadata: h } : {}),
                      ...(u != null ? { messageId: u } : {}),
                    });
                  break;
                }
                case "finish": {
                  i &&
                    w.enqueue({
                      type: "finish",
                      finishReason: p.finishReason,
                      ...(h != null ? { messageMetadata: h } : {}),
                    });
                  break;
                }
                case "abort": {
                  w.enqueue(p);
                  break;
                }
                case "tool-input-end":
                  break;
                case "raw":
                  break;
                default: {
                  let v = b;
                  throw new Error(`Unknown chunk type: ${v}`);
                }
              }
              h != null &&
                b !== "start" &&
                b !== "finish" &&
                w.enqueue({ type: "message-metadata", messageMetadata: h });
            },
          })
        );
      return Yt(
        Gc({ stream: f, messageId: u ?? t?.(), originalMessages: e, onFinish: r, onError: d })
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
        sendSources: l,
        sendFinish: i,
        sendStart: d,
        onError: u,
        ...c
      } = {}
    ) {
      mo({
        response: e,
        stream: this.toUIMessageStream({
          originalMessages: t,
          generateMessageId: r,
          onFinish: a,
          messageMetadata: n,
          sendReasoning: s,
          sendSources: l,
          sendFinish: i,
          sendStart: d,
          onError: u,
        }),
        ...c,
      });
    }
    pipeTextStreamToResponse(e, t) {
      oo({ response: e, textStream: this.textStream, ...t });
    }
    toUIMessageStreamResponse({
      originalMessages: e,
      generateMessageId: t,
      onFinish: r,
      messageMetadata: a,
      sendReasoning: n,
      sendSources: s,
      sendFinish: l,
      sendStart: i,
      onError: d,
      ...u
    } = {}) {
      return uo({
        stream: this.toUIMessageStream({
          originalMessages: e,
          generateMessageId: t,
          onFinish: r,
          messageMetadata: a,
          sendReasoning: n,
          sendSources: s,
          sendFinish: l,
          sendStart: i,
          onError: d,
        }),
        ...u,
      });
    }
    toTextStreamResponse(e) {
      return so({ textStream: this.textStream, ...e });
    }
  },
  pv = class {
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
        let h = await Et({
          value: e.options,
          schema: this.settings.callOptionsSchema,
          context: { field: "options" },
        });
        e = { ...e, options: h };
      }
      let { onStepFinish: s, ...l } = this.settings,
        i = { ...l, stopWhen: (t = this.settings.stopWhen) != null ? t : ts(20), ...e },
        d =
          (n = await ((a = (r = this.settings).prepareCall) == null ? void 0 : a.call(r, i))) !=
          null
            ? n
            : i,
        { instructions: u, allowSystemInMessages: c, messages: f, prompt: p, ...w } = d;
      return { ...w, system: u, allowSystemInMessages: c, messages: f, prompt: p };
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
      return Lc({
        ...(await this.prepareCall(a)),
        abortSignal: e,
        timeout: t,
        onStepFinish: this.mergeOnStepFinishCallbacks(r),
      });
    }
    async stream({ abortSignal: e, timeout: t, experimental_transform: r, onStepFinish: a, ...n }) {
      return Zc({
        ...(await this.prepareCall(n)),
        abortSignal: e,
        timeout: t,
        experimental_transform: r,
        onStepFinish: this.mergeOnStepFinishCallbacks(a),
      });
    }
  };
function fv({
  execute: e,
  onError: t = () => "An error occurred.",
  originalMessages: r,
  onStepFinish: a,
  onFinish: n,
  generateId: s = ga,
}) {
  let l,
    i = [],
    d = new ReadableStream({
      start(f) {
        l = f;
      },
    });
  function u(f) {
    try {
      l.enqueue(f);
    } catch {}
  }
  try {
    let f = e({
      writer: {
        write(p) {
          u(p);
        },
        merge(p) {
          i.push(
            (async () => {
              let w = p.getReader();
              for (;;) {
                let { done: h, value: b } = await w.read();
                if (h) break;
                u(b);
              }
            })().catch((w) => {
              u({ type: "error", errorText: t(w) });
            })
          );
        },
        onError: t,
      },
    });
    f &&
      i.push(
        f.catch((p) => {
          u({ type: "error", errorText: t(p) });
        })
      );
  } catch (f) {
    u({ type: "error", errorText: t(f) });
  }
  return (
    new Promise(async (f) => {
      for (; i.length > 0;) await i.shift();
      f();
    }).finally(() => {
      try {
        l.close();
      } catch {}
    }),
    Gc({ stream: d, messageId: s(), originalMessages: r, onStepFinish: a, onFinish: n, onError: t })
  );
}
function mv({ message: e, stream: t, onError: r, terminateOnError: a = !1 }) {
  var n;
  let s,
    l = !1,
    i = new ReadableStream({
      start(c) {
        s = c;
      },
    }),
    d = po({ messageId: (n = e?.id) != null ? n : "", lastMessage: e }),
    u = (c) => {
      (r?.(c), !l && a && ((l = !0), s?.error(c)));
    };
  return (
    fn({
      stream: fo({
        stream: t,
        runUpdateMessageJob(c) {
          return c({
            state: d,
            write: () => {
              s?.enqueue(structuredClone(d.message));
            },
          });
        },
        onError: u,
      }),
      onError: u,
    }).finally(() => {
      l || s?.close();
    }),
    Yt(i)
  );
}
async function ho(e, t) {
  let r = [];
  t?.ignoreIncompleteToolCalls &&
    (e = e.map((a) => ({
      ...a,
      parts: a.parts.filter(
        (n) => !Mt(n) || (n.state !== "input-streaming" && n.state !== "input-available")
      ),
    })));
  for (let a of e)
    switch (a.role) {
      case "system": {
        let n = a.parts.filter((l) => l.type === "text"),
          s = n.reduce(
            (l, i) => (i.providerMetadata != null ? { ...l, ...i.providerMetadata } : l),
            {}
          );
        r.push({
          role: "system",
          content: n.map((l) => l.text).join(""),
          ...(Object.keys(s).length > 0 ? { providerOptions: s } : {}),
        });
        break;
      }
      case "user": {
        r.push({
          role: "user",
          content: a.parts
            .map((n) => {
              var s;
              if (zn(n))
                return {
                  type: "text",
                  text: n.text,
                  ...(n.providerMetadata != null ? { providerOptions: n.providerMetadata } : {}),
                };
              if (Gn(n))
                return {
                  type: "file",
                  mediaType: n.mediaType,
                  filename: n.filename,
                  data: n.url,
                  ...(n.providerMetadata != null ? { providerOptions: n.providerMetadata } : {}),
                };
              if (Jn(n)) return (s = t?.convertDataPart) == null ? void 0 : s.call(t, n);
            })
            .filter(rl),
        });
        break;
      }
      case "assistant": {
        if (a.parts != null) {
          let n = [];
          async function s() {
            var l, i, d, u, c, f, p, w;
            if (n.length === 0) return;
            let h = [];
            for (let v of n)
              if (zn(v))
                h.push({
                  type: "text",
                  text: v.text,
                  ...(v.providerMetadata != null ? { providerOptions: v.providerMetadata } : {}),
                });
              else if (Gn(v))
                h.push({
                  type: "file",
                  mediaType: v.mediaType,
                  filename: v.filename,
                  data: v.url,
                  ...(v.providerMetadata != null ? { providerOptions: v.providerMetadata } : {}),
                });
              else if (Xs(v))
                h.push({ type: "reasoning", text: v.text, providerOptions: v.providerMetadata });
              else if (Mt(v)) {
                let g = ln(v);
                if (
                  v.state !== "input-streaming" &&
                  (h.push({
                    type: "tool-call",
                    toolCallId: v.toolCallId,
                    toolName: g,
                    input:
                      v.state === "output-error"
                        ? (l = v.input) != null
                          ? l
                          : "rawInput" in v
                            ? v.rawInput
                            : void 0
                        : v.input,
                    providerExecuted: v.providerExecuted,
                    ...(v.callProviderMetadata != null
                      ? { providerOptions: v.callProviderMetadata }
                      : {}),
                  }),
                  v.approval != null &&
                    h.push({
                      type: "tool-approval-request",
                      approvalId: v.approval.id,
                      toolCallId: v.toolCallId,
                      ...(v.approval.signature != null ? { signature: v.approval.signature } : {}),
                    }),
                  v.providerExecuted === !0 &&
                    v.state !== "approval-responded" &&
                    (v.state === "output-available" || v.state === "output-error"))
                ) {
                  let y = (i = v.resultProviderMetadata) != null ? i : v.callProviderMetadata;
                  h.push({
                    type: "tool-result",
                    toolCallId: v.toolCallId,
                    toolName: g,
                    output: await qr({
                      toolCallId: v.toolCallId,
                      input: v.input,
                      output: v.state === "output-error" ? v.errorText : v.output,
                      tool: (d = t?.tools) == null ? void 0 : d[g],
                      errorMode: v.state === "output-error" ? "json" : "none",
                    }),
                    ...(y != null ? { providerOptions: y } : {}),
                  });
                }
              } else if (Jn(v)) {
                let g = (u = t?.convertDataPart) == null ? void 0 : u.call(t, v);
                g != null && h.push(g);
              } else {
                let g = v;
                throw new Error(`Unsupported part: ${g}`);
              }
            r.push({ role: "assistant", content: h });
            let b = n.filter((v) => {
              var g;
              return (
                Mt(v) &&
                (v.providerExecuted !== !0 ||
                  ((g = v.approval) == null ? void 0 : g.approved) != null)
              );
            });
            if (b.length > 0) {
              let v = [];
              for (let g of b)
                if (
                  (((c = g.approval) == null ? void 0 : c.approved) != null &&
                    v.push({
                      type: "tool-approval-response",
                      approvalId: g.approval.id,
                      approved: g.approval.approved,
                      reason: g.approval.reason,
                      providerExecuted: g.providerExecuted,
                    }),
                  g.providerExecuted !== !0)
                )
                  switch (g.state) {
                    case "output-denied": {
                      v.push({
                        type: "tool-result",
                        toolCallId: g.toolCallId,
                        toolName: ln(g),
                        output: {
                          type: "error-text",
                          value:
                            (p = (f = g.approval) == null ? void 0 : f.reason) != null
                              ? p
                              : "Tool execution denied.",
                        },
                        ...(g.callProviderMetadata != null
                          ? { providerOptions: g.callProviderMetadata }
                          : {}),
                      });
                      break;
                    }
                    case "output-error":
                    case "output-available": {
                      let y = ln(g);
                      v.push({
                        type: "tool-result",
                        toolCallId: g.toolCallId,
                        toolName: y,
                        output: await qr({
                          toolCallId: g.toolCallId,
                          input: g.input,
                          output: g.state === "output-error" ? g.errorText : g.output,
                          tool: (w = t?.tools) == null ? void 0 : w[y],
                          errorMode: g.state === "output-error" ? "text" : "none",
                        }),
                        ...(g.callProviderMetadata != null
                          ? { providerOptions: g.callProviderMetadata }
                          : {}),
                      });
                      break;
                    }
                  }
              v.length > 0 && r.push({ role: "tool", content: v });
            }
            n = [];
          }
          for (let l of a.parts)
            zn(l) || Xs(l) || Gn(l) || Mt(l) || Jn(l)
              ? n.push(l)
              : l.type === "step-start" && (await s());
          await s();
          break;
        }
        break;
      }
      default: {
        let n = a.role;
        throw new Qd({ originalMessage: a, message: `Unsupported role: ${n}` });
      }
    }
  return r;
}
var ct = o.record(o.string(), Vr.optional()),
  hv = pe(() =>
    ne(
      o
        .array(
          o.object({
            id: o.string(),
            role: o.enum(["system", "user", "assistant"]),
            metadata: o.unknown().optional(),
            parts: o
              .array(
                o.union([
                  o.object({
                    type: o.literal("text"),
                    text: o.string(),
                    state: o.enum(["streaming", "done"]).optional(),
                    providerMetadata: j.optional(),
                  }),
                  o.object({
                    type: o.literal("reasoning"),
                    text: o.string(),
                    state: o.enum(["streaming", "done"]).optional(),
                    providerMetadata: j.optional(),
                  }),
                  o.object({
                    type: o.literal("source-url"),
                    sourceId: o.string(),
                    url: o.string(),
                    title: o.string().optional(),
                    providerMetadata: j.optional(),
                  }),
                  o.object({
                    type: o.literal("source-document"),
                    sourceId: o.string(),
                    mediaType: o.string(),
                    title: o.string(),
                    filename: o.string().optional(),
                    providerMetadata: j.optional(),
                  }),
                  o.object({
                    type: o.literal("file"),
                    mediaType: o.string(),
                    filename: o.string().optional(),
                    url: o.string(),
                    providerMetadata: j.optional(),
                  }),
                  o.object({ type: o.literal("step-start") }),
                  o.object({
                    type: o.string().startsWith("data-"),
                    id: o.string().optional(),
                    data: o.unknown(),
                  }),
                  o.object({
                    type: o.literal("dynamic-tool"),
                    toolName: o.string(),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("input-streaming"),
                    input: o.unknown().optional(),
                    providerExecuted: o.boolean().optional(),
                    callProviderMetadata: j.optional(),
                    output: o.never().optional(),
                    errorText: o.never().optional(),
                    approval: o.never().optional(),
                  }),
                  o.object({
                    type: o.literal("dynamic-tool"),
                    toolName: o.string(),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("input-available"),
                    input: o.unknown(),
                    providerExecuted: o.boolean().optional(),
                    output: o.never().optional(),
                    errorText: o.never().optional(),
                    callProviderMetadata: j.optional(),
                    approval: o.never().optional(),
                  }),
                  o.object({
                    type: o.literal("dynamic-tool"),
                    toolName: o.string(),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("approval-requested"),
                    input: o.unknown(),
                    providerExecuted: o.boolean().optional(),
                    output: o.never().optional(),
                    errorText: o.never().optional(),
                    callProviderMetadata: j.optional(),
                    approval: o.object({
                      id: o.string(),
                      approved: o.never().optional(),
                      reason: o.never().optional(),
                      signature: o.string().optional(),
                    }),
                  }),
                  o.object({
                    type: o.literal("dynamic-tool"),
                    toolName: o.string(),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("approval-responded"),
                    input: o.unknown(),
                    providerExecuted: o.boolean().optional(),
                    output: o.never().optional(),
                    errorText: o.never().optional(),
                    callProviderMetadata: j.optional(),
                    approval: o.object({
                      id: o.string(),
                      approved: o.boolean(),
                      reason: o.string().optional(),
                      signature: o.string().optional(),
                    }),
                  }),
                  o.object({
                    type: o.literal("dynamic-tool"),
                    toolName: o.string(),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("output-available"),
                    input: o.unknown(),
                    providerExecuted: o.boolean().optional(),
                    output: o.unknown(),
                    errorText: o.never().optional(),
                    callProviderMetadata: j.optional(),
                    resultProviderMetadata: j.optional(),
                    preliminary: o.boolean().optional(),
                    approval: o
                      .object({
                        id: o.string(),
                        approved: o.literal(!0),
                        reason: o.string().optional(),
                        signature: o.string().optional(),
                      })
                      .optional(),
                  }),
                  o.object({
                    type: o.literal("dynamic-tool"),
                    toolName: o.string(),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("output-error"),
                    input: o.unknown().optional(),
                    rawInput: o.unknown().optional(),
                    providerExecuted: o.boolean().optional(),
                    output: o.never().optional(),
                    errorText: o.string(),
                    callProviderMetadata: j.optional(),
                    resultProviderMetadata: j.optional(),
                    approval: o
                      .object({
                        id: o.string(),
                        approved: o.literal(!0),
                        reason: o.string().optional(),
                        signature: o.string().optional(),
                      })
                      .optional(),
                  }),
                  o.object({
                    type: o.literal("dynamic-tool"),
                    toolName: o.string(),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("output-denied"),
                    input: o.unknown(),
                    providerExecuted: o.boolean().optional(),
                    output: o.never().optional(),
                    errorText: o.never().optional(),
                    callProviderMetadata: j.optional(),
                    approval: o.object({
                      id: o.string(),
                      approved: o.literal(!1),
                      reason: o.string().optional(),
                      signature: o.string().optional(),
                    }),
                  }),
                  o.object({
                    type: o.string().startsWith("tool-"),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("input-streaming"),
                    providerExecuted: o.boolean().optional(),
                    callProviderMetadata: j.optional(),
                    input: o.unknown().optional(),
                    output: o.never().optional(),
                    errorText: o.never().optional(),
                    approval: o.never().optional(),
                  }),
                  o.object({
                    type: o.string().startsWith("tool-"),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("input-available"),
                    providerExecuted: o.boolean().optional(),
                    input: o.unknown(),
                    output: o.never().optional(),
                    errorText: o.never().optional(),
                    callProviderMetadata: j.optional(),
                    approval: o.never().optional(),
                  }),
                  o.object({
                    type: o.string().startsWith("tool-"),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("approval-requested"),
                    input: o.unknown(),
                    providerExecuted: o.boolean().optional(),
                    output: o.never().optional(),
                    errorText: o.never().optional(),
                    callProviderMetadata: j.optional(),
                    approval: o.object({
                      id: o.string(),
                      approved: o.never().optional(),
                      reason: o.never().optional(),
                      signature: o.string().optional(),
                    }),
                  }),
                  o.object({
                    type: o.string().startsWith("tool-"),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("approval-responded"),
                    input: o.unknown(),
                    providerExecuted: o.boolean().optional(),
                    output: o.never().optional(),
                    errorText: o.never().optional(),
                    callProviderMetadata: j.optional(),
                    approval: o.object({
                      id: o.string(),
                      approved: o.boolean(),
                      reason: o.string().optional(),
                      signature: o.string().optional(),
                    }),
                  }),
                  o.object({
                    type: o.string().startsWith("tool-"),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("output-available"),
                    providerExecuted: o.boolean().optional(),
                    input: o.unknown(),
                    output: o.unknown(),
                    errorText: o.never().optional(),
                    callProviderMetadata: j.optional(),
                    resultProviderMetadata: j.optional(),
                    preliminary: o.boolean().optional(),
                    approval: o
                      .object({
                        id: o.string(),
                        approved: o.literal(!0),
                        reason: o.string().optional(),
                        signature: o.string().optional(),
                      })
                      .optional(),
                  }),
                  o.object({
                    type: o.string().startsWith("tool-"),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("output-error"),
                    providerExecuted: o.boolean().optional(),
                    input: o.unknown().optional(),
                    rawInput: o.unknown().optional(),
                    output: o.never().optional(),
                    errorText: o.string(),
                    callProviderMetadata: j.optional(),
                    resultProviderMetadata: j.optional(),
                    approval: o
                      .object({
                        id: o.string(),
                        approved: o.literal(!0),
                        reason: o.string().optional(),
                        signature: o.string().optional(),
                      })
                      .optional(),
                  }),
                  o.object({
                    type: o.string().startsWith("tool-"),
                    toolCallId: o.string(),
                    toolMetadata: ct.optional(),
                    state: o.literal("output-denied"),
                    providerExecuted: o.boolean().optional(),
                    input: o.unknown(),
                    output: o.never().optional(),
                    errorText: o.never().optional(),
                    callProviderMetadata: j.optional(),
                    approval: o.object({
                      id: o.string(),
                      approved: o.literal(!1),
                      reason: o.string().optional(),
                      signature: o.string().optional(),
                    }),
                  }),
                ])
              )
              .nonempty("Message must contain at least one part"),
          })
        )
        .nonempty("Messages array must not be empty")
    )
  );
async function Hc({ messages: e, metadataSchema: t, dataSchemas: r, tools: a }) {
  try {
    if (e == null)
      return {
        success: !1,
        error: new fe({
          parameter: "messages",
          value: e,
          message: "messages parameter must be provided",
        }),
      };
    let n = await Et({ value: e, schema: hv });
    if (t)
      for (let [s, l] of n.entries())
        await Et({
          value: l.metadata,
          schema: t,
          context: { field: `messages[${s}].metadata`, entityId: l.id },
        });
    if (r || a)
      for (let [s, l] of n.entries())
        for (let [i, d] of l.parts.entries()) {
          if (r && d.type.startsWith("data-")) {
            let u = d,
              c = u.type.slice(5),
              f = r[c];
            if (!f)
              return {
                success: !1,
                error: new ge({
                  value: u.data,
                  cause: `No data schema found for data part ${c}`,
                  context: {
                    field: `messages[${s}].parts[${i}].data`,
                    entityName: c,
                    entityId: u.id,
                  },
                }),
              };
            await Et({
              value: u.data,
              schema: f,
              context: { field: `messages[${s}].parts[${i}].data`, entityName: c, entityId: u.id },
            });
          }
          if (a && d.type.startsWith("tool-")) {
            let u = d,
              c = u.type.slice(5),
              f = a[c];
            if (
              !f &&
              (u.state === "output-available" ||
                u.state === "output-error" ||
                u.state === "output-denied")
            )
              continue;
            if (!f)
              return {
                success: !1,
                error: new ge({
                  value: u.input,
                  cause: `No tool schema found for tool part ${c}`,
                  context: {
                    field: `messages[${s}].parts[${i}].input`,
                    entityName: c,
                    entityId: u.toolCallId,
                  },
                }),
              };
            ((u.state === "input-available" || u.state === "output-available") &&
              (await Et({
                value: u.input,
                schema: f.inputSchema,
                context: {
                  field: `messages[${s}].parts[${i}].input`,
                  entityName: c,
                  entityId: u.toolCallId,
                },
              })),
              u.state === "output-available" &&
                f.outputSchema &&
                (await Et({
                  value: u.output,
                  schema: f.outputSchema,
                  context: {
                    field: `messages[${s}].parts[${i}].output`,
                    entityName: c,
                    entityId: u.toolCallId,
                  },
                })));
          }
        }
    return { success: !0, data: n };
  } catch (n) {
    return { success: !1, error: n };
  }
}
async function go({ messages: e, metadataSchema: t, dataSchemas: r, tools: a }) {
  let n = await Hc({ messages: e, metadataSchema: t, dataSchemas: r, tools: a });
  if (!n.success) throw n.error;
  return n.data;
}
async function vo({
  agent: e,
  uiMessages: t,
  options: r,
  abortSignal: a,
  timeout: n,
  experimental_transform: s,
  onStepFinish: l,
  ...i
}) {
  var d;
  let u = await go({ messages: t, tools: e.tools }),
    c = await ho(u, { tools: e.tools });
  return (
    await e.stream({
      prompt: c,
      options: r,
      abortSignal: a,
      timeout: n,
      experimental_transform: s,
      onStepFinish: l,
    })
  ).toUIMessageStream({ ...i, originalMessages: (d = i.originalMessages) != null ? d : u });
}
async function gv({ headers: e, status: t, statusText: r, consumeSseStream: a, ...n }) {
  return uo({ headers: e, status: t, statusText: r, consumeSseStream: a, stream: await vo(n) });
}
async function vv({
  response: e,
  headers: t,
  status: r,
  statusText: a,
  consumeSseStream: n,
  ...s
}) {
  mo({
    response: e,
    headers: t,
    status: r,
    statusText: a,
    consumeSseStream: n,
    stream: await vo(s),
  });
}
async function yv({
  model: e,
  value: t,
  providerOptions: r,
  maxRetries: a,
  abortSignal: n,
  headers: s,
  experimental_telemetry: l,
}) {
  let i = dc(e),
    { maxRetries: d, retry: u } = Lt({ maxRetries: a, abortSignal: n }),
    c = ye(s ?? {}, `ai/${er}`),
    f = Jr({ model: i, telemetry: l, headers: c, settings: { maxRetries: d } }),
    p = zr(l);
  return et({
    name: "ai.embed",
    attributes: te({
      telemetry: l,
      attributes: {
        ...Qe({ operationId: "ai.embed", telemetry: l }),
        ...f,
        "ai.value": { input: () => JSON.stringify(t) },
      },
    }),
    tracer: p,
    fn: async (w) => {
      let {
        embedding: h,
        usage: b,
        warnings: v,
        response: g,
        providerMetadata: y,
      } = await u(() =>
        et({
          name: "ai.embed.doEmbed",
          attributes: te({
            telemetry: l,
            attributes: {
              ...Qe({ operationId: "ai.embed.doEmbed", telemetry: l }),
              ...f,
              "ai.values": { input: () => [JSON.stringify(t)] },
            },
          }),
          tracer: p,
          fn: async (m) => {
            var M, T;
            let _ = await i.doEmbed({
                values: [t],
                abortSignal: n,
                headers: c,
                providerOptions: r,
              }),
              C = _.embeddings[0],
              x = (M = _.usage) != null ? M : { tokens: NaN };
            return (
              m.setAttributes(
                await te({
                  telemetry: l,
                  attributes: {
                    "ai.embeddings": { output: () => _.embeddings.map((N) => JSON.stringify(N)) },
                    "ai.usage.tokens": x.tokens,
                  },
                })
              ),
              {
                embedding: C,
                usage: x,
                warnings: (T = _.warnings) != null ? T : [],
                providerMetadata: _.providerMetadata,
                response: _.response,
              }
            );
          },
        })
      );
      return (
        w.setAttributes(
          await te({
            telemetry: l,
            attributes: {
              "ai.embedding": { output: () => JSON.stringify(h) },
              "ai.usage.tokens": b.tokens,
            },
          })
        ),
        _t({ warnings: v, provider: i.provider, model: i.modelId }),
        new bv({ value: t, embedding: h, usage: b, warnings: v, providerMetadata: y, response: g })
      );
    },
  });
}
var bv = class {
  constructor(e) {
    ((this.value = e.value),
      (this.embedding = e.embedding),
      (this.usage = e.usage),
      (this.warnings = e.warnings),
      (this.providerMetadata = e.providerMetadata),
      (this.response = e.response));
  }
};
function qu(e, t) {
  if (t <= 0) throw new Error("chunkSize must be greater than 0");
  let r = [];
  for (let a = 0; a < e.length; a += t) r.push(e.slice(a, a + t));
  return r;
}
async function wv({
  model: e,
  values: t,
  maxParallelCalls: r = 1 / 0,
  maxRetries: a,
  abortSignal: n,
  headers: s,
  providerOptions: l,
  experimental_telemetry: i,
}) {
  let d = dc(e),
    { maxRetries: u, retry: c } = Lt({ maxRetries: a, abortSignal: n }),
    f = ye(s ?? {}, `ai/${er}`),
    p = Jr({ model: d, telemetry: i, headers: f, settings: { maxRetries: u } }),
    w = zr(i);
  return et({
    name: "ai.embedMany",
    attributes: te({
      telemetry: i,
      attributes: {
        ...Qe({ operationId: "ai.embedMany", telemetry: i }),
        ...p,
        "ai.values": { input: () => t.map((h) => JSON.stringify(h)) },
      },
    }),
    tracer: w,
    fn: async (h) => {
      var b;
      let [v, g] = await Promise.all([d.maxEmbeddingsPerCall, d.supportsParallelCalls]);
      if (v == null || v === 1 / 0) {
        let {
          embeddings: N,
          usage: F,
          warnings: k,
          response: D,
          providerMetadata: L,
        } = await c(() =>
          et({
            name: "ai.embedMany.doEmbed",
            attributes: te({
              telemetry: i,
              attributes: {
                ...Qe({ operationId: "ai.embedMany.doEmbed", telemetry: i }),
                ...p,
                "ai.values": { input: () => t.map((U) => JSON.stringify(U)) },
              },
            }),
            tracer: w,
            fn: async (U) => {
              var Y, se;
              let oe = await d.doEmbed({
                  values: t,
                  abortSignal: n,
                  headers: f,
                  providerOptions: l,
                }),
                xe = oe.embeddings,
                $e = (Y = oe.usage) != null ? Y : { tokens: NaN };
              return (
                U.setAttributes(
                  await te({
                    telemetry: i,
                    attributes: {
                      "ai.embeddings": { output: () => xe.map((Le) => JSON.stringify(Le)) },
                      "ai.usage.tokens": $e.tokens,
                    },
                  })
                ),
                {
                  embeddings: xe,
                  usage: $e,
                  warnings: (se = oe.warnings) != null ? se : [],
                  providerMetadata: oe.providerMetadata,
                  response: oe.response,
                }
              );
            },
          })
        );
        return (
          h.setAttributes(
            await te({
              telemetry: i,
              attributes: {
                "ai.embeddings": { output: () => N.map((U) => JSON.stringify(U)) },
                "ai.usage.tokens": F.tokens,
              },
            })
          ),
          _t({ warnings: k, provider: d.provider, model: d.modelId }),
          new Uu({
            values: t,
            embeddings: N,
            usage: F,
            warnings: k,
            providerMetadata: L,
            responses: [D],
          })
        );
      }
      let y = qu(t, v),
        m = [],
        M = [],
        T = [],
        _ = 0,
        C,
        x = qu(y, g ? r : 1);
      for (let N of x) {
        let F = await Promise.all(
          N.map((k) =>
            c(() =>
              et({
                name: "ai.embedMany.doEmbed",
                attributes: te({
                  telemetry: i,
                  attributes: {
                    ...Qe({ operationId: "ai.embedMany.doEmbed", telemetry: i }),
                    ...p,
                    "ai.values": { input: () => k.map((D) => JSON.stringify(D)) },
                  },
                }),
                tracer: w,
                fn: async (D) => {
                  var L, U;
                  let Y = await d.doEmbed({
                      values: k,
                      abortSignal: n,
                      headers: f,
                      providerOptions: l,
                    }),
                    se = Y.embeddings,
                    oe = (L = Y.usage) != null ? L : { tokens: NaN };
                  return (
                    D.setAttributes(
                      await te({
                        telemetry: i,
                        attributes: {
                          "ai.embeddings": { output: () => se.map((xe) => JSON.stringify(xe)) },
                          "ai.usage.tokens": oe.tokens,
                        },
                      })
                    ),
                    {
                      embeddings: se,
                      usage: oe,
                      warnings: (U = Y.warnings) != null ? U : [],
                      providerMetadata: Y.providerMetadata,
                      response: Y.response,
                    }
                  );
                },
              })
            )
          )
        );
        for (let k of F)
          if (
            (m.push(...k.embeddings),
            M.push(...k.warnings),
            T.push(k.response),
            (_ += k.usage.tokens),
            k.providerMetadata)
          )
            if (!C) C = { ...k.providerMetadata };
            else
              for (let [D, L] of Object.entries(k.providerMetadata))
                C[D] = { ...((b = C[D]) != null ? b : {}), ...L };
      }
      return (
        h.setAttributes(
          await te({
            telemetry: i,
            attributes: {
              "ai.embeddings": { output: () => m.map((N) => JSON.stringify(N)) },
              "ai.usage.tokens": _,
            },
          })
        ),
        _t({ warnings: M, provider: d.provider, model: d.modelId }),
        new Uu({
          values: t,
          embeddings: m,
          usage: { tokens: _ },
          warnings: M,
          providerMetadata: C,
          responses: T,
        })
      );
    },
  });
}
var Uu = class {
  constructor(e) {
    ((this.values = e.values),
      (this.embeddings = e.embeddings),
      (this.usage = e.usage),
      (this.warnings = e.warnings),
      (this.providerMetadata = e.providerMetadata),
      (this.responses = e.responses));
  }
};
async function Wc({
  model: e,
  prompt: t,
  n: r = 1,
  maxImagesPerCall: a,
  size: n,
  aspectRatio: s,
  seed: l,
  providerOptions: i,
  maxRetries: d,
  abortSignal: u,
  headers: c,
}) {
  var f, p;
  let w = yg(e),
    h = ye(c ?? {}, `ai/${er}`),
    { retry: b } = Lt({ maxRetries: d, abortSignal: u }),
    v = (f = a ?? (await Tv(w))) != null ? f : 1,
    g = Math.ceil(r / v),
    y = Array.from({ length: g }, (N, F) => {
      if (F < g - 1) return v;
      let k = r % v;
      return k === 0 ? v : k;
    }),
    m = await Promise.all(
      y.map(async (N) =>
        b(() => {
          let { prompt: F, files: k, mask: D } = xv(t);
          return w.doGenerate({
            prompt: F,
            files: k,
            mask: D,
            n: N,
            abortSignal: u,
            headers: h,
            size: n,
            aspectRatio: s,
            seed: l,
            providerOptions: i ?? {},
          });
        })
      )
    ),
    M = [],
    T = [],
    _ = [],
    C = {},
    x = { inputTokens: void 0, outputTokens: void 0, totalTokens: void 0 };
  for (let N of m) {
    if (
      (M.push(
        ...N.images.map((F) => {
          var k;
          return new Mr({
            data: F,
            mediaType: (k = Qt({ data: F, signatures: Ea })) != null ? k : "image/png",
          });
        })
      ),
      T.push(...N.warnings),
      N.usage != null && (x = Ug(x, N.usage)),
      N.providerMetadata)
    )
      for (let [F, k] of Object.entries(N.providerMetadata))
        if (F === "gateway") {
          let D = C[F];
          D != null && typeof D == "object" ? (C[F] = { ...D, ...k }) : (C[F] = k);
          let L = C[F].images;
          Array.isArray(L) && L.length === 0 && delete C[F].images;
        } else
          ((p = C[F]) != null || (C[F] = { images: [] }),
            C[F].images.push(...N.providerMetadata[F].images));
    _.push(N.response);
  }
  if ((_t({ warnings: T, provider: w.provider, model: w.modelId }), !M.length))
    throw new hd({ responses: _ });
  return new _v({ images: M, warnings: T, responses: _, providerMetadata: C, usage: x });
}
var _v = class {
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
async function Tv(e) {
  return e.maxImagesPerCall instanceof Function
    ? e.maxImagesPerCall({ modelId: e.modelId })
    : e.maxImagesPerCall;
}
function xv(e) {
  return typeof e == "string"
    ? { prompt: e, files: void 0, mask: void 0 }
    : { prompt: e.text, files: e.images.map(Vu), mask: e.mask ? Vu(e.mask) : void 0 };
}
function Vu(e) {
  if (typeof e == "string" && e.startsWith("http")) return { type: "url", url: e };
  if (typeof e == "string" && e.startsWith("data:")) {
    let { mediaType: r, base64Content: a } = eo(e);
    if (a != null) {
      let n = ut(a);
      return {
        type: "file",
        data: n,
        mediaType: r || Qt({ data: n, signatures: Ea }) || "image/png",
      };
    }
  }
  let t = hc(e);
  return { type: "file", data: t, mediaType: Qt({ data: t, signatures: Ea }) || "image/png" };
}
var Iv = Wc,
  Sv = {
    type: "no-schema",
    jsonSchema: async () => {},
    async validatePartialResult({ value: e, textDelta: t }) {
      return { success: !0, value: { partial: e, textDelta: t } };
    },
    async validateFinalResult(e, t) {
      return e === void 0
        ? {
            success: !1,
            error: new ft({
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
      throw new wr({ functionality: "element streams in no-schema mode" });
    },
  },
  Ev = (e) => ({
    type: "object",
    jsonSchema: async () => await e.jsonSchema,
    async validatePartialResult({ value: t, textDelta: r }) {
      return { success: !0, value: { partial: t, textDelta: r } };
    },
    async validateFinalResult(t) {
      return Te({ value: t, schema: e });
    },
    createElementStream() {
      throw new wr({ functionality: "element streams in object mode" });
    },
  }),
  Mv = (e) => ({
    type: "array",
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
      if (!Ua(t) || !us(t.elements))
        return {
          success: !1,
          error: new ge({
            value: t,
            cause: "value must be an object that contains an array of elements",
          }),
        };
      let l = t.elements,
        i = [];
      for (let c = 0; c < l.length; c++) {
        let f = l[c],
          p = await Te({ value: f, schema: e });
        if (!(c === l.length - 1 && !n)) {
          if (!p.success) return p;
          i.push(p.value);
        }
      }
      let d = (s = r?.length) != null ? s : 0,
        u = "";
      return (
        a && (u += "["),
        d > 0 && (u += ","),
        (u += i
          .slice(d)
          .map((c) => JSON.stringify(c))
          .join(",")),
        n && (u += "]"),
        { success: !0, value: { partial: i, textDelta: u } }
      );
    },
    async validateFinalResult(t) {
      if (!Ua(t) || !us(t.elements))
        return {
          success: !1,
          error: new ge({
            value: t,
            cause: "value must be an object that contains an array of elements",
          }),
        };
      let r = t.elements,
        a = [];
      for (let n of r) {
        let s = await Te({ value: n, schema: e });
        if (!s.success) return s;
        a.push(s.value);
      }
      return { success: !0, value: a };
    },
    createElementStream(t) {
      let r = 0;
      return Yt(
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
  kv = (e) => ({
    type: "enum",
    jsonSchema: async () => ({
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: { result: { type: "string", enum: e } },
      required: ["result"],
      additionalProperties: !1,
    }),
    async validateFinalResult(t) {
      if (!Ua(t) || typeof t.result != "string")
        return {
          success: !1,
          error: new ge({
            value: t,
            cause: 'value must be an object that contains a string in the "result" property.',
          }),
        };
      let r = t.result;
      return e.includes(r)
        ? { success: !0, value: r }
        : { success: !1, error: new ge({ value: t, cause: "value must be a string in the enum" }) };
    },
    async validatePartialResult({ value: t, textDelta: r }) {
      if (!Ua(t) || typeof t.result != "string")
        return {
          success: !1,
          error: new ge({
            value: t,
            cause: 'value must be an object that contains a string in the "result" property.',
          }),
        };
      let a = t.result,
        n = e.filter((s) => s.startsWith(a));
      return t.result.length === 0 || n.length === 0
        ? { success: !1, error: new ge({ value: t, cause: "value must be a string in the enum" }) }
        : { success: !0, value: { partial: n.length > 1 ? a : n[0], textDelta: r } };
    },
    createElementStream() {
      throw new wr({ functionality: "element streams in enum mode" });
    },
  });
function Kc({ output: e, schema: t, enumValues: r }) {
  switch (e) {
    case "object":
      return Ev(Ye(t));
    case "array":
      return Mv(Ye(t));
    case "enum":
      return kv(r);
    case "no-schema":
      return Sv;
    default: {
      let a = e;
      throw new Error(`Unsupported output: ${a}`);
    }
  }
}
async function Lu(e, t, r) {
  let a = await Xe({ text: e });
  if (!a.success)
    throw new ft({
      message: "No object generated: could not parse the response.",
      cause: a.error,
      text: e,
      response: r.response,
      usage: r.usage,
      finishReason: r.finishReason,
    });
  let n = await t.validateFinalResult(a.value, { text: e, response: r.response, usage: r.usage });
  if (!n.success)
    throw new ft({
      message: "No object generated: response did not match schema.",
      cause: n.error,
      text: e,
      response: r.response,
      usage: r.usage,
      finishReason: r.finishReason,
    });
  return n.value;
}
async function Yc(e, t, r, a) {
  try {
    return await Lu(e, t, a);
  } catch (n) {
    if (r != null && ft.isInstance(n) && (nr.isInstance(n.cause) || ge.isInstance(n.cause))) {
      let s = await r({ text: e, error: n.cause });
      if (s === null) throw n;
      return await Lu(s, t, a);
    }
    throw n;
  }
}
function Xc({ output: e, schema: t, schemaName: r, schemaDescription: a, enumValues: n }) {
  if (e != null && e !== "object" && e !== "array" && e !== "enum" && e !== "no-schema")
    throw new fe({ parameter: "output", value: e, message: "Invalid output type." });
  if (e === "no-schema") {
    if (t != null)
      throw new fe({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for no-schema output.",
      });
    if (a != null)
      throw new fe({
        parameter: "schemaDescription",
        value: a,
        message: "Schema description is not supported for no-schema output.",
      });
    if (r != null)
      throw new fe({
        parameter: "schemaName",
        value: r,
        message: "Schema name is not supported for no-schema output.",
      });
    if (n != null)
      throw new fe({
        parameter: "enumValues",
        value: n,
        message: "Enum values are not supported for no-schema output.",
      });
  }
  if (e === "object") {
    if (t == null)
      throw new fe({
        parameter: "schema",
        value: t,
        message: "Schema is required for object output.",
      });
    if (n != null)
      throw new fe({
        parameter: "enumValues",
        value: n,
        message: "Enum values are not supported for object output.",
      });
  }
  if (e === "array") {
    if (t == null)
      throw new fe({
        parameter: "schema",
        value: t,
        message: "Element schema is required for array output.",
      });
    if (n != null)
      throw new fe({
        parameter: "enumValues",
        value: n,
        message: "Enum values are not supported for array output.",
      });
  }
  if (e === "enum") {
    if (t != null)
      throw new fe({
        parameter: "schema",
        value: t,
        message: "Schema is not supported for enum output.",
      });
    if (a != null)
      throw new fe({
        parameter: "schemaDescription",
        value: a,
        message: "Schema description is not supported for enum output.",
      });
    if (r != null)
      throw new fe({
        parameter: "schemaName",
        value: r,
        message: "Schema name is not supported for enum output.",
      });
    if (n == null)
      throw new fe({
        parameter: "enumValues",
        value: n,
        message: "Enum values are required for enum output.",
      });
    for (let s of n)
      if (typeof s != "string")
        throw new fe({
          parameter: "enumValues",
          value: s,
          message: "Enum values must be strings.",
        });
  }
}
var Rv = Ft({ prefix: "aiobj", size: 24 });
async function Av(e) {
  let {
      model: t,
      output: r = "object",
      system: a,
      prompt: n,
      messages: s,
      allowSystemInMessages: l,
      maxRetries: i,
      abortSignal: d,
      headers: u,
      experimental_repairText: c,
      experimental_telemetry: f,
      experimental_download: p,
      providerOptions: w,
      _internal: { generateId: h = Rv, currentDate: b = () => new Date() } = {},
      ...v
    } = e,
    g = Sa(t),
    y = "enum" in e ? e.enum : void 0,
    { schema: m, schemaDescription: M, schemaName: T } = "schema" in e ? e : {};
  Xc({ output: r, schema: m, schemaName: T, schemaDescription: M, enumValues: y });
  let { maxRetries: _, retry: C } = Lt({ maxRetries: i, abortSignal: d }),
    x = Kc({ output: r, schema: m, enumValues: y }),
    N = Ur(v),
    F = ye(u ?? {}, `ai/${er}`),
    k = Jr({ model: g, telemetry: f, headers: F, settings: { ...N, maxRetries: _ } }),
    D = zr(f),
    L = await x.jsonSchema();
  try {
    return await et({
      name: "ai.generateObject",
      attributes: te({
        telemetry: f,
        attributes: {
          ...Qe({ operationId: "ai.generateObject", telemetry: f }),
          ...k,
          "ai.prompt": { input: () => JSON.stringify({ system: a, prompt: n, messages: s }) },
          "ai.schema": L != null ? { input: () => JSON.stringify(L) } : void 0,
          "ai.schema.name": T,
          "ai.schema.description": M,
          "ai.settings.output": x.type,
        },
      }),
      tracer: D,
      fn: async (U) => {
        var Y;
        let se,
          oe,
          xe,
          $e,
          Le,
          Je,
          me,
          Ee,
          ze = await Xn({ system: a, prompt: n, messages: s, allowSystemInMessages: l }),
          Me = await Yn({ prompt: ze, supportedUrls: await g.supportedUrls, download: p }),
          ie = await C(() =>
            et({
              name: "ai.generateObject.doGenerate",
              attributes: te({
                telemetry: f,
                attributes: {
                  ...Qe({ operationId: "ai.generateObject.doGenerate", telemetry: f }),
                  ...k,
                  "ai.prompt.messages": { input: () => es(Me) },
                  "gen_ai.system": g.provider,
                  "gen_ai.request.model": g.modelId,
                  "gen_ai.request.frequency_penalty": N.frequencyPenalty,
                  "gen_ai.request.max_tokens": N.maxOutputTokens,
                  "gen_ai.request.presence_penalty": N.presencePenalty,
                  "gen_ai.request.temperature": N.temperature,
                  "gen_ai.request.top_k": N.topK,
                  "gen_ai.request.top_p": N.topP,
                },
              }),
              tracer: D,
              fn: async (kt) => {
                var Ie, Ge, le, mt, Be, Rt, Tt, ce;
                let q = await g.doGenerate({
                    responseFormat: { type: "json", schema: L, name: T, description: M },
                    ...Ur(v),
                    prompt: Me,
                    providerOptions: w,
                    abortSignal: d,
                    headers: F,
                  }),
                  Z = {
                    id: (Ge = (Ie = q.response) == null ? void 0 : Ie.id) != null ? Ge : h(),
                    timestamp:
                      (mt = (le = q.response) == null ? void 0 : le.timestamp) != null ? mt : b(),
                    modelId:
                      (Rt = (Be = q.response) == null ? void 0 : Be.modelId) != null
                        ? Rt
                        : g.modelId,
                    headers: (Tt = q.response) == null ? void 0 : Tt.headers,
                    body: (ce = q.response) == null ? void 0 : ce.body,
                  },
                  ht = Ws(q.content),
                  ot = Hs(q.content);
                if (ht === void 0)
                  throw new ft({
                    message: "No object generated: the model did not return a response.",
                    response: Z,
                    usage: Ma(q.usage),
                    finishReason: q.finishReason.unified,
                  });
                return (
                  kt.setAttributes(
                    await te({
                      telemetry: f,
                      attributes: {
                        "ai.response.finishReason": q.finishReason.unified,
                        "ai.response.object": { output: () => ht },
                        "ai.response.id": Z.id,
                        "ai.response.model": Z.modelId,
                        "ai.response.timestamp": Z.timestamp.toISOString(),
                        "ai.response.providerMetadata": JSON.stringify(q.providerMetadata),
                        "ai.usage.promptTokens": q.usage.inputTokens.total,
                        "ai.usage.completionTokens": q.usage.outputTokens.total,
                        "gen_ai.response.finish_reasons": [q.finishReason.unified],
                        "gen_ai.response.id": Z.id,
                        "gen_ai.response.model": Z.modelId,
                        "gen_ai.usage.input_tokens": q.usage.inputTokens.total,
                        "gen_ai.usage.output_tokens": q.usage.outputTokens.total,
                      },
                    })
                  ),
                  { ...q, objectText: ht, reasoning: ot, responseData: Z }
                );
              },
            })
          );
        ((se = ie.objectText),
          (oe = ie.finishReason.unified),
          (xe = Ma(ie.usage)),
          ($e = ie.warnings),
          (me = ie.providerMetadata),
          (Je = (Y = ie.request) != null ? Y : {}),
          (Le = ie.responseData),
          (Ee = ie.reasoning),
          _t({ warnings: $e, provider: g.provider, model: g.modelId }));
        let ke = await Yc(se, x, c, { response: Le, usage: xe, finishReason: oe });
        return (
          U.setAttributes(
            await te({
              telemetry: f,
              attributes: {
                "ai.response.finishReason": oe,
                "ai.response.object": { output: () => JSON.stringify(ke) },
                "ai.response.providerMetadata": JSON.stringify(me),
                "ai.usage.promptTokens": xe.inputTokens,
                "ai.usage.completionTokens": xe.outputTokens,
              },
            })
          ),
          new Cv({
            object: ke,
            reasoning: Ee,
            finishReason: oe,
            usage: xe,
            warnings: $e,
            request: Je,
            response: Le,
            providerMetadata: me,
          })
        );
      },
    });
  } catch (U) {
    throw Qn(U);
  }
}
var Cv = class {
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
      headers: pn(e?.headers, { "content-type": "application/json; charset=utf-8" }),
    });
  }
};
function Ov(e, t) {
  if (e.length !== t.length)
    throw new fe({
      parameter: "vector1,vector2",
      value: { vector1Length: e.length, vector2Length: t.length },
      message: "Vectors must have the same length",
    });
  let r = e.length;
  if (r === 0) return 0;
  let a = 0,
    n = 0,
    s = 0;
  for (let l = 0; l < r; l++) {
    let i = e[l],
      d = t[l];
    ((a += i * i), (n += d * d), (s += i * d));
  }
  return a === 0 || n === 0 ? 0 : s / (Math.sqrt(a) * Math.sqrt(n));
}
function yo(e) {
  return ({ url: t, abortSignal: r }) => fc({ url: t, maxBytes: e?.maxBytes, abortSignal: r });
}
function Nv(e) {
  let [t, r] = e.split(",");
  if (t.split(";")[0].split(":")[1] == null || r == null)
    throw new Error("Invalid data URL format");
  try {
    return window.atob(r);
  } catch {
    throw new Error("Error decoding data URL");
  }
}
function un(e, t) {
  if (e === t) return !0;
  if (e == null || t == null) return !1;
  if (typeof e != "object" && typeof t != "object") return e === t;
  if (e.constructor !== t.constructor) return !1;
  if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
  if (Array.isArray(e)) {
    if (e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (!un(e[n], t[n])) return !1;
    return !0;
  }
  let r = Object.keys(e),
    a = Object.keys(t);
  if (r.length !== a.length) return !1;
  for (let n of r) if (!a.includes(n) || !un(e[n], t[n])) return !1;
  return !0;
}
var Qc = class {
  constructor() {
    ((this.queue = []), (this.isProcessing = !1));
  }
  async processQueue() {
    if (!this.isProcessing) {
      for (this.isProcessing = !0; this.queue.length > 0;)
        (await this.queue[0](), this.queue.shift());
      this.isProcessing = !1;
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
};
function Pv({ chunks: e, initialDelayInMs: t = 0, chunkDelayInMs: r = 0, _internal: a }) {
  var n;
  let s = (n = a?.delay) != null ? n : ma,
    l = 0;
  return new ReadableStream({
    async pull(i) {
      l < e.length ? (await s(l === 0 ? t : r), i.enqueue(e[l++])) : i.close();
    },
  });
}
var jv = Ft({ prefix: "aiobj", size: 24 });
function Dv(e) {
  let {
      model: t,
      output: r = "object",
      system: a,
      prompt: n,
      messages: s,
      allowSystemInMessages: l,
      maxRetries: i,
      abortSignal: d,
      headers: u,
      experimental_repairText: c,
      experimental_telemetry: f,
      experimental_download: p,
      providerOptions: w,
      onError: h = ({ error: N }) => {
        console.error(N);
      },
      onFinish: b,
      _internal: { generateId: v = jv, currentDate: g = () => new Date(), now: y = on } = {},
      ...m
    } = e,
    M = "enum" in e && e.enum ? e.enum : void 0,
    { schema: T, schemaDescription: _, schemaName: C } = "schema" in e ? e : {};
  Xc({ output: r, schema: T, schemaName: C, schemaDescription: _, enumValues: M });
  let x = Kc({ output: r, schema: T, enumValues: M });
  return new $v({
    model: t,
    telemetry: f,
    headers: u,
    settings: m,
    maxRetries: i,
    abortSignal: d,
    outputStrategy: x,
    system: a,
    prompt: n,
    messages: s,
    allowSystemInMessages: l,
    schemaName: C,
    schemaDescription: _,
    providerOptions: w,
    repairText: c,
    onError: h,
    onFinish: b,
    download: p,
    generateId: v,
    currentDate: g,
    now: y,
  });
}
var $v = class {
    constructor({
      model: e,
      headers: t,
      telemetry: r,
      settings: a,
      maxRetries: n,
      abortSignal: s,
      outputStrategy: l,
      system: i,
      prompt: d,
      messages: u,
      allowSystemInMessages: c,
      schemaName: f,
      schemaDescription: p,
      providerOptions: w,
      repairText: h,
      onError: b,
      onFinish: v,
      download: g,
      generateId: y,
      currentDate: m,
      now: M,
    }) {
      ((this._object = new lt()),
        (this._usage = new lt()),
        (this._providerMetadata = new lt()),
        (this._warnings = new lt()),
        (this._request = new lt()),
        (this._response = new lt()),
        (this._finishReason = new lt()));
      let T = Sa(e),
        { maxRetries: _, retry: C } = Lt({ maxRetries: n, abortSignal: s }),
        x = Ur(a),
        N = Jr({ model: T, telemetry: r, headers: t, settings: { ...x, maxRetries: _ } }),
        F = zr(r),
        k = this,
        D = Bc(),
        L = new TransformStream({
          transform(U, Y) {
            (Y.enqueue(U), U.type === "error" && b({ error: Qn(U.error) }));
          },
        });
      ((this.baseStream = D.stream.pipeThrough(L)),
        et({
          name: "ai.streamObject",
          attributes: te({
            telemetry: r,
            attributes: {
              ...Qe({ operationId: "ai.streamObject", telemetry: r }),
              ...N,
              "ai.prompt": { input: () => JSON.stringify({ system: i, prompt: d, messages: u }) },
              "ai.schema": { input: async () => JSON.stringify(await l.jsonSchema()) },
              "ai.schema.name": f,
              "ai.schema.description": p,
              "ai.settings.output": l.type,
            },
          }),
          tracer: F,
          endWhenDone: !1,
          fn: async (U) => {
            let Y = await Xn({ system: i, prompt: d, messages: u, allowSystemInMessages: c }),
              se = {
                responseFormat: {
                  type: "json",
                  schema: await l.jsonSchema(),
                  name: f,
                  description: p,
                },
                ...Ur(a),
                prompt: await Yn({ prompt: Y, supportedUrls: await T.supportedUrls, download: g }),
                providerOptions: w,
                abortSignal: s,
                headers: t,
                includeRawChunks: !1,
              },
              oe = {
                transform: (q, Z) => {
                  switch (q.type) {
                    case "text-delta":
                      Z.enqueue(q.delta);
                      break;
                    case "response-metadata":
                    case "finish":
                    case "error":
                    case "stream-start":
                      Z.enqueue(q);
                      break;
                  }
                },
              },
              {
                result: { stream: xe, response: $e, request: Le },
                doStreamSpan: Je,
                startTimestampMs: me,
              } = await C(() =>
                et({
                  name: "ai.streamObject.doStream",
                  attributes: te({
                    telemetry: r,
                    attributes: {
                      ...Qe({ operationId: "ai.streamObject.doStream", telemetry: r }),
                      ...N,
                      "ai.prompt.messages": { input: () => es(se.prompt) },
                      "gen_ai.system": T.provider,
                      "gen_ai.request.model": T.modelId,
                      "gen_ai.request.frequency_penalty": x.frequencyPenalty,
                      "gen_ai.request.max_tokens": x.maxOutputTokens,
                      "gen_ai.request.presence_penalty": x.presencePenalty,
                      "gen_ai.request.temperature": x.temperature,
                      "gen_ai.request.top_k": x.topK,
                      "gen_ai.request.top_p": x.topP,
                    },
                  }),
                  tracer: F,
                  endWhenDone: !1,
                  fn: async (q) => ({
                    startTimestampMs: M(),
                    doStreamSpan: q,
                    result: await T.doStream(se),
                  }),
                })
              );
            k._request.resolve(Le ?? {});
            let Ee,
              ze = Ln(),
              Me,
              ie,
              ke,
              kt,
              Ie = "",
              Ge = "",
              le = { id: y(), timestamp: m(), modelId: T.modelId },
              mt,
              Be,
              Rt = !0,
              Tt = !0,
              ce = xe.pipeThrough(new TransformStream(oe)).pipeThrough(
                new TransformStream({
                  async transform(q, Z) {
                    var ht, ot, xt;
                    if (typeof q == "object" && q.type === "stream-start") {
                      Ee = q.warnings;
                      return;
                    }
                    if (Rt) {
                      let tt = M() - me;
                      ((Rt = !1),
                        Je.addEvent("ai.stream.firstChunk", { "ai.stream.msToFirstChunk": tt }),
                        Je.setAttributes({ "ai.stream.msToFirstChunk": tt }));
                    }
                    if (typeof q == "string") {
                      ((Ie += q), (Ge += q));
                      let { value: tt, state: Jt } = await Gr(Ie);
                      if (tt !== void 0 && !un(mt, tt)) {
                        let tr = await l.validatePartialResult({
                          value: tt,
                          textDelta: Ge,
                          latestObject: Be,
                          isFirstDelta: Tt,
                          isFinalDelta: Jt === "successful-parse",
                        });
                        tr.success &&
                          !un(Be, tr.value.partial) &&
                          ((mt = tt),
                          (Be = tr.value.partial),
                          Z.enqueue({ type: "object", object: Be }),
                          Z.enqueue({ type: "text-delta", textDelta: tr.value.textDelta }),
                          (Ge = ""),
                          (Tt = !1));
                      }
                      return;
                    }
                    switch (q.type) {
                      case "response-metadata": {
                        le = {
                          id: (ht = q.id) != null ? ht : le.id,
                          timestamp: (ot = q.timestamp) != null ? ot : le.timestamp,
                          modelId: (xt = q.modelId) != null ? xt : le.modelId,
                        };
                        break;
                      }
                      case "finish": {
                        (Ge !== "" && Z.enqueue({ type: "text-delta", textDelta: Ge }),
                          (Me = q.finishReason.unified),
                          (ze = Ma(q.usage)),
                          (ie = q.providerMetadata),
                          Z.enqueue({
                            ...q,
                            finishReason: q.finishReason.unified,
                            usage: ze,
                            response: le,
                          }),
                          _t({ warnings: Ee ?? [], provider: T.provider, model: T.modelId }),
                          k._usage.resolve(ze),
                          k._providerMetadata.resolve(ie),
                          k._warnings.resolve(Ee),
                          k._response.resolve({ ...le, headers: $e?.headers }),
                          k._finishReason.resolve(Me ?? "other"));
                        try {
                          ((ke = await Yc(Ie, l, h, { response: le, usage: ze, finishReason: Me })),
                            k._object.resolve(ke));
                        } catch (tt) {
                          ((kt = tt), k._object.reject(tt));
                        }
                        break;
                      }
                      default: {
                        Z.enqueue(q);
                        break;
                      }
                    }
                  },
                  async flush(q) {
                    try {
                      let Z = ze ?? { promptTokens: NaN, completionTokens: NaN, totalTokens: NaN };
                      (Je.setAttributes(
                        await te({
                          telemetry: r,
                          attributes: {
                            "ai.response.finishReason": Me,
                            "ai.response.object": { output: () => JSON.stringify(ke) },
                            "ai.response.id": le.id,
                            "ai.response.model": le.modelId,
                            "ai.response.timestamp": le.timestamp.toISOString(),
                            "ai.response.providerMetadata": JSON.stringify(ie),
                            "ai.usage.inputTokens": Z.inputTokens,
                            "ai.usage.outputTokens": Z.outputTokens,
                            "ai.usage.totalTokens": Z.totalTokens,
                            "ai.usage.reasoningTokens": Z.reasoningTokens,
                            "ai.usage.cachedInputTokens": Z.cachedInputTokens,
                            "gen_ai.response.finish_reasons": [Me],
                            "gen_ai.response.id": le.id,
                            "gen_ai.response.model": le.modelId,
                            "gen_ai.usage.input_tokens": Z.inputTokens,
                            "gen_ai.usage.output_tokens": Z.outputTokens,
                          },
                        })
                      ),
                        Je.end(),
                        U.setAttributes(
                          await te({
                            telemetry: r,
                            attributes: {
                              "ai.usage.inputTokens": Z.inputTokens,
                              "ai.usage.outputTokens": Z.outputTokens,
                              "ai.usage.totalTokens": Z.totalTokens,
                              "ai.usage.reasoningTokens": Z.reasoningTokens,
                              "ai.usage.cachedInputTokens": Z.cachedInputTokens,
                              "ai.response.object": { output: () => JSON.stringify(ke) },
                              "ai.response.providerMetadata": JSON.stringify(ie),
                            },
                          })
                        ),
                        await v?.({
                          usage: Z,
                          object: ke,
                          error: kt,
                          response: { ...le, headers: $e?.headers },
                          warnings: Ee,
                          providerMetadata: ie,
                        }));
                    } catch (Z) {
                      q.enqueue({ type: "error", error: Z });
                    } finally {
                      U.end();
                    }
                  },
                })
              );
            D.addStream(ce);
          },
        })
          .catch((U) => {
            D.addStream(
              new ReadableStream({
                start(Y) {
                  (Y.enqueue({ type: "error", error: U }), Y.close());
                },
              })
            );
          })
          .finally(() => {
            D.close();
          }),
        (this.outputStrategy = l));
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
      return Yt(
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
      return Yt(
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
      return Yt(this.baseStream);
    }
    pipeTextStreamToResponse(e, t) {
      oo({ response: e, textStream: this.textStream, ...t });
    }
    toTextStreamResponse(e) {
      return so({ textStream: this.textStream, ...e });
    }
  },
  Fv = class extends Mr {
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
async function qv({
  model: e,
  text: t,
  voice: r,
  outputFormat: a,
  instructions: n,
  speed: s,
  language: l,
  providerOptions: i = {},
  maxRetries: d,
  abortSignal: u,
  headers: c,
}) {
  var f;
  let p = vg(e);
  if (!p) throw new Error("Model could not be resolved");
  let w = ye(c ?? {}, `ai/${er}`),
    { retry: h } = Lt({ maxRetries: d, abortSignal: u }),
    b = await h(() =>
      p.doGenerate({
        text: t,
        voice: r,
        outputFormat: a,
        instructions: n,
        speed: s,
        language: l,
        abortSignal: u,
        headers: w,
        providerOptions: i,
      })
    );
  if (!b.audio || b.audio.length === 0) throw new Sd({ responses: [b.response] });
  return (
    _t({ warnings: b.warnings, provider: p.provider, model: p.modelId }),
    new Uv({
      audio: new Fv({
        data: b.audio,
        mediaType: (f = Qt({ data: b.audio, signatures: pc })) != null ? f : "audio/mp3",
      }),
      warnings: b.warnings,
      responses: [b.response],
      providerMetadata: b.providerMetadata,
    })
  );
}
var Uv = class {
  constructor(e) {
    var t;
    ((this.audio = e.audio),
      (this.warnings = e.warnings),
      (this.responses = e.responses),
      (this.providerMetadata = (t = e.providerMetadata) != null ? t : {}));
  }
};
function Vv({
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
        : { ...n, content: n.content.filter((l) => l.type !== "reasoning") }
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
      l = new Set(),
      i = new Set();
    if (s != null) {
      for (let d of e.slice(-s))
        if ((d.role === "assistant" || d.role === "tool") && typeof d.content != "string")
          for (let u of d.content)
            u.type === "tool-call" || u.type === "tool-result"
              ? l.add(u.toolCallId)
              : (u.type === "tool-approval-request" || u.type === "tool-approval-response") &&
                i.add(u.approvalId);
    }
    e = e.map((d, u) => {
      if (
        (d.role !== "assistant" && d.role !== "tool") ||
        typeof d.content == "string" ||
        (s && u >= e.length - s)
      )
        return d;
      let c = {},
        f = {};
      return {
        ...d,
        content: d.content.filter((p) =>
          (p.type !== "tool-call" &&
            p.type !== "tool-result" &&
            p.type !== "tool-approval-request" &&
            p.type !== "tool-approval-response") ||
          (p.type === "tool-call"
            ? (c[p.toolCallId] = p.toolName)
            : p.type === "tool-approval-request" && (f[p.approvalId] = c[p.toolCallId]),
          ((p.type === "tool-call" || p.type === "tool-result") && l.has(p.toolCallId)) ||
            ((p.type === "tool-approval-request" || p.type === "tool-approval-response") &&
              i.has(p.approvalId)))
            ? !0
            : n.tools != null &&
              !n.tools.includes(
                p.type === "tool-call" || p.type === "tool-result" ? p.toolName : f[p.approvalId]
              )
        ),
      };
    });
  }
  return (a === "remove" && (e = e.filter((n) => n.content.length > 0)), e);
}
var Lv = { word: /\S+\s+/m, line: /\n+/m };
function Jv({ delayInMs: e = 10, chunking: t = "word", _internal: { delay: r = ma } = {} } = {}) {
  let a;
  if (t != null && typeof t == "object" && "segment" in t && typeof t.segment == "function") {
    let n = t;
    a = (s) => {
      if (s.length === 0) return null;
      let i = n.segment(s)[Symbol.iterator]().next().value;
      return i?.segment || null;
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
    let n = typeof t == "string" ? Lv[t] : t instanceof RegExp ? t : void 0;
    if (n == null)
      throw new Qr({
        argument: "chunking",
        message: `Chunking must be "word", "line", a RegExp, an Intl.Segmenter, or a ChunkDetector function. Received: ${t}`,
      });
    a = (s) => {
      let l = n.exec(s);
      return l ? s.slice(0, l.index) + l?.[0] : null;
    };
  }
  return () => {
    let n = "",
      s = "",
      l,
      i;
    function d(u) {
      n.length > 0 &&
        l !== void 0 &&
        (u.enqueue({ type: l, text: n, id: s, ...(i != null ? { providerMetadata: i } : {}) }),
        (n = ""),
        (i = void 0));
    }
    return new TransformStream({
      async transform(u, c) {
        if (u.type !== "text-delta" && u.type !== "reasoning-delta") {
          (d(c), c.enqueue(u));
          return;
        }
        ((u.type !== l || u.id !== s) && n.length > 0 && d(c),
          (n += u.text),
          (s = u.id),
          (l = u.type),
          u.providerMetadata != null && (i = u.providerMetadata));
        let f;
        for (; (f = a(n)) != null;)
          (c.enqueue({ type: l, text: f, id: s }), (n = n.slice(f.length)), await r(e));
      },
    });
  };
}
var zv = yo();
async function Gv({
  model: e,
  prompt: t,
  n: r = 1,
  maxVideosPerCall: a,
  aspectRatio: n,
  resolution: s,
  duration: l,
  fps: i,
  seed: d,
  providerOptions: u,
  maxRetries: c,
  abortSignal: f,
  headers: p,
  download: w = zv,
}) {
  var h;
  let b = bg(e),
    v = ye(p ?? {}, `ai/${er}`),
    { retry: g } = Lt({ maxRetries: c, abortSignal: f }),
    { prompt: y, image: m } = Bv(t),
    M = (h = a ?? (await Zv(b))) != null ? h : 1,
    T = Math.ceil(r / M),
    _ = Array.from({ length: T }, (D, L) => {
      let U = r - L * M;
      return Math.min(U, M);
    }),
    C = await Promise.all(
      _.map(async (D) =>
        g(() =>
          b.doGenerate({
            prompt: y,
            n: D,
            aspectRatio: n,
            resolution: s,
            duration: l,
            fps: i,
            seed: d,
            image: m,
            providerOptions: u ?? {},
            headers: v,
            abortSignal: f,
          })
        )
      )
    ),
    x = [],
    N = [],
    F = [],
    k = {};
  for (let D of C) {
    for (let L of D.videos)
      switch (L.type) {
        case "url": {
          let { data: U, mediaType: Y } = await w({ url: new URL(L.url), abortSignal: f }),
            se = (xe) => !!xe && xe !== "application/octet-stream",
            oe =
              (se(L.mediaType) && L.mediaType) ||
              (se(Y) && Y) ||
              Qt({ data: U, signatures: Ou }) ||
              "video/mp4";
          x.push(new Mr({ data: U, mediaType: oe }));
          break;
        }
        case "base64": {
          x.push(new Mr({ data: L.data, mediaType: L.mediaType || "video/mp4" }));
          break;
        }
        case "binary": {
          let U = L.mediaType || Qt({ data: L.data, signatures: Ou }) || "video/mp4";
          x.push(new Mr({ data: L.data, mediaType: U }));
          break;
        }
      }
    if (
      (N.push(...D.warnings),
      F.push({
        timestamp: D.response.timestamp,
        modelId: D.response.modelId,
        headers: D.response.headers,
        providerMetadata: D.providerMetadata,
      }),
      D.providerMetadata != null)
    )
      for (let [L, U] of Object.entries(D.providerMetadata)) {
        let Y = k[L];
        Y != null && typeof Y == "object"
          ? ((k[L] = { ...Y, ...U }),
            "videos" in Y &&
              Array.isArray(Y.videos) &&
              "videos" in U &&
              Array.isArray(U.videos) &&
              (k[L].videos = [...Y.videos, ...U.videos]))
          : (k[L] = U);
      }
  }
  if (x.length === 0) throw new Od({ responses: F });
  return (
    N.length > 0 && _t({ warnings: N, provider: b.provider, model: b.modelId }),
    { video: x[0], videos: x, warnings: N, responses: F, providerMetadata: k }
  );
}
function Bv(e) {
  var t, r;
  if (typeof e == "string") return { prompt: e, image: void 0 };
  let a;
  if (e.image != null) {
    let n = e.image;
    if (typeof n == "string")
      if (n.startsWith("http://") || n.startsWith("https://")) a = { type: "url", url: n };
      else if (n.startsWith("data:")) {
        let { mediaType: s, base64Content: l } = eo(n);
        a = { type: "file", mediaType: s ?? "image/png", data: ut(l ?? "") };
      } else {
        let s = ut(n);
        a = {
          type: "file",
          mediaType: (t = Qt({ data: s, signatures: Ea })) != null ? t : "image/png",
          data: s,
        };
      }
    else
      n instanceof Uint8Array &&
        (a = {
          type: "file",
          mediaType: (r = Qt({ data: n, signatures: Ea })) != null ? r : "image/png",
          data: n,
        });
  }
  return { prompt: e.text, image: a };
}
async function Zv(e) {
  return typeof e.maxVideosPerCall == "function"
    ? await e.maxVideosPerCall({ modelId: e.modelId })
    : e.maxVideosPerCall;
}
function Hv({ settings: e }) {
  return { specificationVersion: "v3", transformParams: async ({ params: t }) => ka(e, t) };
}
function Wv({ settings: e }) {
  return { specificationVersion: "v3", transformParams: async ({ params: t }) => ka(e, t) };
}
function Kv(e) {
  return e
    .replace(/^```(?:json)?\s*\n?/, "")
    .replace(/\n?```\s*$/, "")
    .trim();
}
function Yv(e) {
  var t;
  let r = (t = e?.transform) != null ? t : Kv,
    a = e?.transform !== void 0;
  return {
    specificationVersion: "v3",
    wrapGenerate: async ({ doGenerate: n }) => {
      let { content: s, ...l } = await n(),
        i = [];
      for (let d of s) {
        if (d.type !== "text") {
          i.push(d);
          continue;
        }
        i.push({ ...d, text: r(d.text) });
      }
      return { content: i, ...l };
    },
    wrapStream: async ({ doStream: n }) => {
      let { stream: s, ...l } = await n(),
        i = Vt(),
        d = 12;
      return {
        stream: s.pipeThrough(
          new TransformStream({
            transform: (u, c) => {
              if (u.type === "text-start") {
                i[u.id] = {
                  startEvent: u,
                  phase: a ? "buffering" : "prefix",
                  buffer: "",
                  prefixStripped: !1,
                };
                return;
              }
              if (u.type === "text-delta") {
                let f = i[u.id];
                if (!f) {
                  c.enqueue(u);
                  return;
                }
                if (((f.buffer += u.delta), f.phase === "buffering")) return;
                if (f.phase === "prefix")
                  if (f.buffer.length > 0 && !f.buffer.startsWith("`"))
                    ((f.phase = "streaming"), c.enqueue(f.startEvent));
                  else if (f.buffer.startsWith("```")) {
                    if (
                      f.buffer.includes(`
`)
                    ) {
                      let p = f.buffer.match(/^```(?:json)?\s*\n/);
                      p
                        ? ((f.buffer = f.buffer.slice(p[0].length)),
                          (f.prefixStripped = !0),
                          (f.phase = "streaming"),
                          c.enqueue(f.startEvent))
                        : ((f.phase = "streaming"), c.enqueue(f.startEvent));
                    }
                  } else
                    f.buffer.length >= 3 &&
                      !f.buffer.startsWith("```") &&
                      ((f.phase = "streaming"), c.enqueue(f.startEvent));
                if (f.phase === "streaming" && f.buffer.length > d) {
                  let p = f.buffer.slice(0, -d);
                  ((f.buffer = f.buffer.slice(-d)),
                    c.enqueue({ type: "text-delta", id: u.id, delta: p }));
                }
                return;
              }
              if (u.type === "text-end") {
                let f = i[u.id];
                if (f) {
                  (f.phase === "prefix" || f.phase === "buffering") && c.enqueue(f.startEvent);
                  let p = f.buffer;
                  (f.phase === "buffering"
                    ? (p = r(p))
                    : f.prefixStripped
                      ? (p = p.replace(/\n?```\s*$/, "").trimEnd())
                      : (p = r(p)),
                    p.length > 0 && c.enqueue({ type: "text-delta", id: u.id, delta: p }),
                    c.enqueue(u),
                    delete i[u.id]);
                  return;
                }
              }
              c.enqueue(u);
            },
          })
        ),
        ...l,
      };
    },
  };
}
function Xv(e, t) {
  if (t.length === 0) return null;
  let r = e.indexOf(t);
  if (r !== -1) return r;
  for (let a = e.length - 1; a >= 0; a--) {
    let n = e.substring(a);
    if (t.startsWith(n)) return a;
  }
  return null;
}
function Qv({
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
      let { content: l, ...i } = await s(),
        d = [];
      for (let u of l) {
        if (u.type !== "text") {
          d.push(u);
          continue;
        }
        let c = r ? a + u.text : u.text,
          f = new RegExp(`${a}(.*?)${n}`, "gs"),
          p = Array.from(c.matchAll(f));
        if (!p.length) {
          d.push(u);
          continue;
        }
        let w = p.map((b) => b[1]).join(t),
          h = c;
        for (let b = p.length - 1; b >= 0; b--) {
          let v = p[b],
            g = h.slice(0, v.index),
            y = h.slice(v.index + v[0].length);
          h = g + (g.length > 0 && y.length > 0 ? t : "") + y;
        }
        (d.push({ type: "reasoning", text: w }), d.push({ type: "text", text: h }));
      }
      return { content: d, ...i };
    },
    wrapStream: async ({ doStream: s }) => {
      let { stream: l, ...i } = await s(),
        d = Vt(),
        u;
      return {
        stream: l.pipeThrough(
          new TransformStream({
            transform: (c, f) => {
              if (c.type === "text-start") {
                u = c;
                return;
              }
              if (
                (c.type === "text-end" && u && (f.enqueue(u), (u = void 0)),
                c.type !== "text-delta")
              ) {
                f.enqueue(c);
                return;
              }
              d[c.id] == null &&
                (d[c.id] = {
                  isFirstReasoning: !0,
                  isFirstText: !0,
                  afterSwitch: !1,
                  isReasoning: r,
                  buffer: "",
                  idCounter: 0,
                  textId: c.id,
                });
              let p = d[c.id];
              p.buffer += c.delta;
              function w(h) {
                if (h.length > 0) {
                  let b =
                    p.afterSwitch && (p.isReasoning ? !p.isFirstReasoning : !p.isFirstText)
                      ? t
                      : "";
                  (p.isReasoning &&
                    (p.afterSwitch || p.isFirstReasoning) &&
                    f.enqueue({ type: "reasoning-start", id: `reasoning-${p.idCounter}` }),
                    p.isReasoning
                      ? f.enqueue({
                          type: "reasoning-delta",
                          delta: b + h,
                          id: `reasoning-${p.idCounter}`,
                        })
                      : (u && (f.enqueue(u), (u = void 0)),
                        f.enqueue({ type: "text-delta", delta: b + h, id: p.textId })),
                    (p.afterSwitch = !1),
                    p.isReasoning ? (p.isFirstReasoning = !1) : (p.isFirstText = !1));
                }
              }
              do {
                let h = p.isReasoning ? n : a,
                  b = Xv(p.buffer, h);
                if (b == null) {
                  (w(p.buffer), (p.buffer = ""));
                  break;
                }
                if ((w(p.buffer.slice(0, b)), b + h.length <= p.buffer.length))
                  ((p.buffer = p.buffer.slice(b + h.length)),
                    p.isReasoning &&
                      (p.isFirstReasoning &&
                        f.enqueue({ type: "reasoning-start", id: `reasoning-${p.idCounter}` }),
                      f.enqueue({ type: "reasoning-end", id: `reasoning-${p.idCounter++}` })),
                    (p.isReasoning = !p.isReasoning),
                    (p.afterSwitch = !0));
                else {
                  p.buffer = p.buffer.slice(b);
                  break;
                }
              } while (!0);
            },
          })
        ),
        ...i,
      };
    },
  };
}
function ey() {
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
                    (n.enqueue({ type: "text-start", id: String(r) }),
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
function ty(e) {
  return JSON.stringify(e.input);
}
function ry({ prefix: e = "Input Examples:", format: t = ty, remove: r = !0 } = {}) {
  return {
    specificationVersion: "v3",
    transformParams: async ({ params: a }) => {
      var n;
      if (!((n = a.tools) != null && n.length)) return a;
      let s = a.tools.map((l) => {
        var i;
        if (l.type !== "function" || !((i = l.inputExamples) != null && i.length)) return l;
        let d = l.inputExamples.map((f, p) => t(f, p)).join(`
`),
          u = `${e}
${d}`,
          c = l.description
            ? `${l.description}

${u}`
            : u;
        return { ...l, description: c, inputExamples: r ? void 0 : l.inputExamples };
      });
      return { ...a, tools: s };
    },
  };
}
var bo = ({ model: e, middleware: t, modelId: r, providerId: a }) =>
    [...Xt(t)]
      .reverse()
      .reduce((n, s) => ay({ model: n, middleware: s, modelId: r, providerId: a }), e),
  ay = ({
    model: e,
    middleware: {
      transformParams: t,
      wrapGenerate: r,
      wrapStream: a,
      overrideProvider: n,
      overrideModelId: s,
      overrideSupportedUrls: l,
    },
    modelId: i,
    providerId: d,
  }) => {
    var u, c, f;
    async function p({ params: w, type: h }) {
      return t ? await t({ params: w, type: h, model: e }) : w;
    }
    return {
      specificationVersion: "v3",
      provider: (u = d ?? n?.({ model: e })) != null ? u : e.provider,
      modelId: (c = i ?? s?.({ model: e })) != null ? c : e.modelId,
      supportedUrls: (f = l?.({ model: e })) != null ? f : e.supportedUrls,
      async doGenerate(w) {
        let h = await p({ params: w, type: "generate" }),
          b = async () => e.doGenerate(h);
        return r
          ? r({ doGenerate: b, doStream: async () => e.doStream(h), params: h, model: e })
          : b();
      },
      async doStream(w) {
        let h = await p({ params: w, type: "stream" }),
          b = async () => e.doGenerate(h),
          v = async () => e.doStream(h);
        return a ? a({ doGenerate: b, doStream: v, params: h, model: e }) : v();
      },
    };
  },
  ny = ({ model: e, middleware: t, modelId: r, providerId: a }) =>
    [...Xt(t)]
      .reverse()
      .reduce((n, s) => sy({ model: n, middleware: s, modelId: r, providerId: a }), e),
  sy = ({
    model: e,
    middleware: {
      transformParams: t,
      wrapEmbed: r,
      overrideProvider: a,
      overrideModelId: n,
      overrideMaxEmbeddingsPerCall: s,
      overrideSupportsParallelCalls: l,
    },
    modelId: i,
    providerId: d,
  }) => {
    var u, c, f, p;
    async function w({ params: h }) {
      return t ? await t({ params: h, model: e }) : h;
    }
    return {
      specificationVersion: "v3",
      provider: (u = d ?? a?.({ model: e })) != null ? u : e.provider,
      modelId: (c = i ?? n?.({ model: e })) != null ? c : e.modelId,
      maxEmbeddingsPerCall: (f = s?.({ model: e })) != null ? f : e.maxEmbeddingsPerCall,
      supportsParallelCalls: (p = l?.({ model: e })) != null ? p : e.supportsParallelCalls,
      async doEmbed(h) {
        let b = await w({ params: h }),
          v = async () => e.doEmbed(b);
        return r ? r({ doEmbed: v, params: b, model: e }) : v();
      },
    };
  },
  wo = ({ model: e, middleware: t, modelId: r, providerId: a }) =>
    [...Xt(t)]
      .reverse()
      .reduce((n, s) => oy({ model: n, middleware: s, modelId: r, providerId: a }), e),
  oy = ({
    model: e,
    middleware: {
      transformParams: t,
      wrapGenerate: r,
      overrideProvider: a,
      overrideModelId: n,
      overrideMaxImagesPerCall: s,
    },
    modelId: l,
    providerId: i,
  }) => {
    var d, u, c;
    async function f({ params: h }) {
      return t ? await t({ params: h, model: e }) : h;
    }
    let p = (d = s?.({ model: e })) != null ? d : e.maxImagesPerCall,
      w = p instanceof Function ? p.bind(e) : p;
    return {
      specificationVersion: "v3",
      provider: (u = i ?? a?.({ model: e })) != null ? u : e.provider,
      modelId: (c = l ?? n?.({ model: e })) != null ? c : e.modelId,
      maxImagesPerCall: w,
      async doGenerate(h) {
        let b = await f({ params: h }),
          v = async () => e.doGenerate(b);
        return r ? r({ doGenerate: v, params: b, model: e }) : v();
      },
    };
  };
function ep(e) {
  if ("specificationVersion" in e && e.specificationVersion === "v3") return e;
  let t = e;
  return {
    specificationVersion: "v3",
    languageModel: (r) => sc(t.languageModel(r)),
    embeddingModel: (r) => ac(t.textEmbeddingModel(r)),
    imageModel: (r) => nc(t.imageModel(r)),
    transcriptionModel: t.transcriptionModel ? (r) => uc(t.transcriptionModel(r)) : void 0,
    speechModel: t.speechModel ? (r) => lc(t.speechModel(r)) : void 0,
    rerankingModel: void 0,
  };
}
function iy({ provider: e, languageModelMiddleware: t, imageModelMiddleware: r }) {
  let a = ep(e);
  return {
    specificationVersion: "v3",
    languageModel: (n) => bo({ model: a.languageModel(n), middleware: t }),
    embeddingModel: a.embeddingModel,
    imageModel: (n) => {
      let s = a.imageModel(n);
      return (r != null && (s = wo({ model: s, middleware: r })), s);
    },
    transcriptionModel: a.transcriptionModel,
    speechModel: a.speechModel,
    rerankingModel: a.rerankingModel,
  };
}
function tp({
  languageModels: e,
  embeddingModels: t,
  imageModels: r,
  transcriptionModels: a,
  speechModels: n,
  rerankingModels: s,
  videoModels: l,
  fallbackProvider: i,
}) {
  let d = i ? ep(i) : void 0;
  return {
    specificationVersion: "v3",
    languageModel(u) {
      if (e != null && u in e) return e[u];
      if (d) return d.languageModel(u);
      throw new Ce({ modelId: u, modelType: "languageModel" });
    },
    embeddingModel(u) {
      if (t != null && u in t) return t[u];
      if (d) return d.embeddingModel(u);
      throw new Ce({ modelId: u, modelType: "embeddingModel" });
    },
    imageModel(u) {
      if (r != null && u in r) return r[u];
      if (d?.imageModel) return d.imageModel(u);
      throw new Ce({ modelId: u, modelType: "imageModel" });
    },
    transcriptionModel(u) {
      if (a != null && u in a) return a[u];
      if (d?.transcriptionModel) return d.transcriptionModel(u);
      throw new Ce({ modelId: u, modelType: "transcriptionModel" });
    },
    speechModel(u) {
      if (n != null && u in n) return n[u];
      if (d?.speechModel) return d.speechModel(u);
      throw new Ce({ modelId: u, modelType: "speechModel" });
    },
    rerankingModel(u) {
      if (s != null && u in s) return s[u];
      if (d?.rerankingModel) return d.rerankingModel(u);
      throw new Ce({ modelId: u, modelType: "rerankingModel" });
    },
    videoModel(u) {
      if (l != null && u in l) return l[u];
      let c = d?.videoModel;
      if (c) return c(u);
      throw new Ce({ modelId: u, modelType: "videoModel" });
    },
  };
}
var ly = tp,
  rp = "AI_NoSuchProviderError",
  ap = `vercel.ai.error.${rp}`,
  uy = Symbol.for(ap),
  np,
  sp = class extends Ce {
    constructor({
      modelId: e,
      modelType: t,
      providerId: r,
      availableProviders: a,
      message: n = `No such provider: ${r} (available providers: ${a.join()})`,
    }) {
      (super({ errorName: rp, modelId: e, modelType: t, message: n }),
        (this[np] = !0),
        (this.providerId = r),
        (this.availableProviders = a));
    }
    static isInstance(e) {
      return I.hasMarker(e, ap);
    }
  };
np = uy;
function op(e, { separator: t = ":", languageModelMiddleware: r, imageModelMiddleware: a } = {}) {
  let n = new cy({ separator: t, languageModelMiddleware: r, imageModelMiddleware: a });
  for (let [s, l] of Object.entries(e)) n.registerProvider({ id: s, provider: l });
  return n;
}
var dy = op,
  cy = class {
    constructor({ separator: e, languageModelMiddleware: t, imageModelMiddleware: r }) {
      ((this.providers = {}),
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
        throw new sp({
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
        throw new Ce({
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
      if (s == null) throw new Ce({ modelId: e, modelType: "languageModel" });
      return (
        this.languageModelMiddleware != null &&
          (s = bo({ model: s, middleware: this.languageModelMiddleware })),
        s
      );
    }
    embeddingModel(e) {
      var t;
      let [r, a] = this.splitId(e, "embeddingModel"),
        n = this.getProvider(r, "embeddingModel"),
        s = (t = n.embeddingModel) == null ? void 0 : t.call(n, a);
      if (s == null) throw new Ce({ modelId: e, modelType: "embeddingModel" });
      return s;
    }
    imageModel(e) {
      var t;
      let [r, a] = this.splitId(e, "imageModel"),
        n = this.getProvider(r, "imageModel"),
        s = (t = n.imageModel) == null ? void 0 : t.call(n, a);
      if (s == null) throw new Ce({ modelId: e, modelType: "imageModel" });
      return (
        this.imageModelMiddleware != null &&
          (s = wo({ model: s, middleware: this.imageModelMiddleware })),
        s
      );
    }
    transcriptionModel(e) {
      var t;
      let [r, a] = this.splitId(e, "transcriptionModel"),
        n = this.getProvider(r, "transcriptionModel"),
        s = (t = n.transcriptionModel) == null ? void 0 : t.call(n, a);
      if (s == null) throw new Ce({ modelId: e, modelType: "transcriptionModel" });
      return s;
    }
    speechModel(e) {
      var t;
      let [r, a] = this.splitId(e, "speechModel"),
        n = this.getProvider(r, "speechModel"),
        s = (t = n.speechModel) == null ? void 0 : t.call(n, a);
      if (s == null) throw new Ce({ modelId: e, modelType: "speechModel" });
      return s;
    }
    rerankingModel(e) {
      var t;
      let [r, a] = this.splitId(e, "rerankingModel"),
        n = this.getProvider(r, "rerankingModel"),
        s = (t = n.rerankingModel) == null ? void 0 : t.call(n, a);
      if (s == null) throw new Ce({ modelId: e, modelType: "rerankingModel" });
      return s;
    }
  };
async function py({
  model: e,
  documents: t,
  query: r,
  topN: a,
  maxRetries: n,
  abortSignal: s,
  headers: l,
  providerOptions: i,
  experimental_telemetry: d,
}) {
  let u = wg(e);
  if (t.length === 0)
    return new Ju({
      originalDocuments: [],
      ranking: [],
      providerMetadata: void 0,
      response: { timestamp: new Date(), modelId: u.modelId },
    });
  let { maxRetries: c, retry: f } = Lt({ maxRetries: n, abortSignal: s }),
    p = typeof t[0] == "string" ? { type: "text", values: t } : { type: "object", values: t },
    w = Jr({ model: u, telemetry: d, headers: l, settings: { maxRetries: c } }),
    h = zr(d);
  return et({
    name: "ai.rerank",
    attributes: te({
      telemetry: d,
      attributes: {
        ...Qe({ operationId: "ai.rerank", telemetry: d }),
        ...w,
        "ai.documents": { input: () => t.map((b) => JSON.stringify(b)) },
      },
    }),
    tracer: h,
    fn: async () => {
      var b, v;
      let {
        ranking: g,
        response: y,
        providerMetadata: m,
        warnings: M,
      } = await f(() =>
        et({
          name: "ai.rerank.doRerank",
          attributes: te({
            telemetry: d,
            attributes: {
              ...Qe({ operationId: "ai.rerank.doRerank", telemetry: d }),
              ...w,
              "ai.documents": { input: () => t.map((T) => JSON.stringify(T)) },
            },
          }),
          tracer: h,
          fn: async (T) => {
            let _ = await u.doRerank({
                documents: p,
                query: r,
                topN: a,
                providerOptions: i,
                abortSignal: s,
                headers: l,
              }),
              C = _.ranking;
            return (
              T.setAttributes(
                await te({
                  telemetry: d,
                  attributes: {
                    "ai.ranking.type": p.type,
                    "ai.ranking": { output: () => C.map((x) => JSON.stringify(x)) },
                  },
                })
              ),
              {
                ranking: C,
                providerMetadata: _.providerMetadata,
                response: _.response,
                warnings: _.warnings,
              }
            );
          },
        })
      );
      return (
        _t({ warnings: M ?? [], provider: u.provider, model: u.modelId }),
        new Ju({
          originalDocuments: t,
          ranking: g.map((T) => ({
            originalIndex: T.index,
            score: T.relevanceScore,
            document: t[T.index],
          })),
          providerMetadata: m,
          response: {
            id: y?.id,
            timestamp: (b = y?.timestamp) != null ? b : new Date(),
            modelId: (v = y?.modelId) != null ? v : u.modelId,
            headers: y?.headers,
            body: y?.body,
          },
        })
      );
    },
  });
}
var Ju = class {
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
  fy = yo();
async function my({
  model: e,
  audio: t,
  providerOptions: r = {},
  maxRetries: a,
  abortSignal: n,
  headers: s,
  download: l = fy,
}) {
  let i = gg(e);
  if (!i) throw new Error("Model could not be resolved");
  let { retry: d } = Lt({ maxRetries: a, abortSignal: n }),
    u = ye(s ?? {}, `ai/${er}`),
    c = t instanceof URL ? (await l({ url: t, abortSignal: n })).data : hc(t),
    f = await d(() => {
      var p;
      return i.doGenerate({
        audio: c,
        abortSignal: n,
        headers: u,
        providerOptions: r,
        mediaType: (p = Qt({ data: c, signatures: pc })) != null ? p : "audio/wav",
      });
    });
  if ((_t({ warnings: f.warnings, provider: i.provider, model: i.modelId }), !f.text))
    throw new Rd({ responses: [f.response] });
  return new hy({
    text: f.text,
    segments: f.segments,
    language: f.language,
    durationInSeconds: f.durationInSeconds,
    warnings: f.warnings,
    responses: [f.response],
    providerMetadata: f.providerMetadata,
  });
}
var hy = class {
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
async function gy({ stream: e, onTextPart: t }) {
  let r = e.pipeThrough(new TextDecoderStream()).getReader();
  for (;;) {
    let { done: a, value: n } = await r.read();
    if (a) break;
    await t(n);
  }
}
var vy = () => fetch;
async function yy({
  api: e,
  prompt: t,
  credentials: r,
  headers: a,
  body: n,
  streamProtocol: s = "data",
  setCompletion: l,
  setLoading: i,
  setError: d,
  setAbortController: u,
  onFinish: c,
  onError: f,
  fetch: p = vy(),
}) {
  var w;
  try {
    (i(!0), d(void 0));
    let h = new AbortController();
    (u(h), l(""));
    let b = await p(e, {
      method: "POST",
      body: JSON.stringify({ prompt: t, ...n }),
      credentials: r,
      headers: ye({ "Content-Type": "application/json", ...a }, `ai-sdk/${er}`, ya()),
      signal: h.signal,
    }).catch((g) => {
      throw g;
    });
    if (!b.ok)
      throw new Error((w = await b.text()) != null ? w : "Failed to fetch the chat response.");
    if (!b.body) throw new Error("The response body is empty.");
    let v = "";
    switch (s) {
      case "text": {
        await gy({
          stream: b.body,
          onTextPart: (g) => {
            ((v += g), l(v));
          },
        });
        break;
      }
      case "data": {
        await fn({
          stream: dr({ stream: b.body, schema: co }).pipeThrough(
            new TransformStream({
              async transform(g) {
                if (!g.success) throw g.error;
                let y = g.value;
                if (y.type === "text-delta") ((v += y.delta), l(v));
                else if (y.type === "error") throw new Error(y.errorText);
              },
            })
          ),
          onError: (g) => {
            throw g;
          },
        });
        break;
      }
      default: {
        let g = s;
        throw new Error(`Unknown stream protocol: ${g}`);
      }
    }
    return (c && c(t, v), u(null), v);
  } catch (h) {
    if (h.name === "AbortError") return (u(null), null);
    (h instanceof Error && f && f(h), d(h));
  } finally {
    i(!1);
  }
}
async function ip(e) {
  if (e == null) return [];
  if (!globalThis.FileList || !(e instanceof globalThis.FileList))
    throw new Error("FileList is not supported in the current environment");
  return Promise.all(
    Array.from(e).map(async (t) => {
      let { name: r, type: a } = t,
        n = await new Promise((s, l) => {
          let i = new FileReader();
          ((i.onload = (d) => {
            var u;
            s((u = d.target) == null ? void 0 : u.result);
          }),
            (i.onerror = (d) => l(d)),
            i.readAsDataURL(t));
        });
      return { type: "file", mediaType: a, filename: r, url: n };
    })
  );
}
var _o = class {
    constructor({
      api: e = "/api/chat",
      credentials: t,
      headers: r,
      body: a,
      fetch: n,
      prepareSendMessagesRequest: s,
      prepareReconnectToStreamRequest: l,
    }) {
      ((this.api = e),
        (this.credentials = t),
        (this.headers = r),
        (this.body = a),
        (this.fetch = n),
        (this.prepareSendMessagesRequest = s),
        (this.prepareReconnectToStreamRequest = l));
    }
    async sendMessages({ abortSignal: e, ...t }) {
      var r, a, n, s, l;
      let i = await ee(this.body),
        d = await ee(this.headers),
        u = await ee(this.credentials),
        c = { ...Ir(d), ...Ir(t.headers) },
        f = await ((r = this.prepareSendMessagesRequest) == null
          ? void 0
          : r.call(this, {
              api: this.api,
              id: t.chatId,
              messages: t.messages,
              body: { ...i, ...t.body },
              headers: c,
              credentials: u,
              requestMetadata: t.metadata,
              trigger: t.trigger,
              messageId: t.messageId,
            })),
        p = (a = f?.api) != null ? a : this.api,
        w = f?.headers !== void 0 ? Ir(f.headers) : c,
        h =
          f?.body !== void 0
            ? f.body
            : {
                ...i,
                ...t.body,
                id: t.chatId,
                messages: t.messages,
                trigger: t.trigger,
                messageId: t.messageId,
              },
        b = (n = f?.credentials) != null ? n : u,
        g = await ((s = this.fetch) != null ? s : globalThis.fetch)(p, {
          method: "POST",
          headers: { "Content-Type": "application/json", ...w },
          body: JSON.stringify(h),
          credentials: b,
          signal: e,
        });
      if (!g.ok)
        throw new Error((l = await g.text()) != null ? l : "Failed to fetch the chat response.");
      if (!g.body) throw new Error("The response body is empty.");
      return this.processResponseStream(g.body);
    }
    async reconnectToStream(e) {
      var t, r, a, n, s;
      let l = await ee(this.body),
        i = await ee(this.headers),
        d = await ee(this.credentials),
        u = { ...Ir(i), ...Ir(e.headers) },
        c = await ((t = this.prepareReconnectToStreamRequest) == null
          ? void 0
          : t.call(this, {
              api: this.api,
              id: e.chatId,
              body: { ...l, ...e.body },
              headers: u,
              credentials: d,
              requestMetadata: e.metadata,
            })),
        f = (r = c?.api) != null ? r : `${this.api}/${e.chatId}/stream`,
        p = c?.headers !== void 0 ? Ir(c.headers) : u,
        w = (a = c?.credentials) != null ? a : d,
        b = await ((n = this.fetch) != null ? n : globalThis.fetch)(f, {
          method: "GET",
          headers: p,
          credentials: w,
        });
      if (b.status === 204) return null;
      if (!b.ok)
        throw new Error((s = await b.text()) != null ? s : "Failed to fetch the chat response.");
      if (!b.body) throw new Error("The response body is empty.");
      return this.processResponseStream(b.body);
    }
  },
  lp = class extends _o {
    constructor(e = {}) {
      super(e);
    }
    processResponseStream(e) {
      return dr({ stream: e, schema: co }).pipeThrough(
        new TransformStream({
          async transform(t, r) {
            if (!t.success) throw t.error;
            r.enqueue(t.value);
          },
        })
      );
    }
  },
  by = class {
    constructor({
      generateId: e = ga,
      id: t = e(),
      transport: r = new lp(),
      messageMetadataSchema: a,
      dataPartSchemas: n,
      state: s,
      onError: l,
      onToolCall: i,
      onFinish: d,
      onData: u,
      sendAutomaticallyWhen: c,
    }) {
      ((this.activeResponse = void 0),
        (this.jobExecutor = new Qc()),
        (this.sendMessage = async (f, p) => {
          var w, h, b, v;
          if (f == null) {
            await this.makeRequest({
              trigger: "submit-message",
              messageId: (w = this.lastMessage) == null ? void 0 : w.id,
              ...p,
            });
            return;
          }
          let g;
          if (
            ("text" in f || "files" in f
              ? (g = {
                  parts: [
                    ...(Array.isArray(f.files) ? f.files : await ip(f.files)),
                    ...("text" in f && f.text != null ? [{ type: "text", text: f.text }] : []),
                  ],
                })
              : (g = f),
            f.messageId != null)
          ) {
            let y = this.state.messages.findIndex((m) => m.id === f.messageId);
            if (y === -1) throw new Error(`message with id ${f.messageId} not found`);
            if (this.state.messages[y].role !== "user")
              throw new Error(`message with id ${f.messageId} is not a user message`);
            ((this.state.messages = this.state.messages.slice(0, y + 1)),
              this.state.replaceMessage(y, {
                ...g,
                id: f.messageId,
                role: (h = g.role) != null ? h : "user",
                metadata: f.metadata,
              }));
          } else
            this.state.pushMessage({
              ...g,
              id: (b = g.id) != null ? b : this.generateId(),
              role: (v = g.role) != null ? v : "user",
              metadata: f.metadata,
            });
          await this.makeRequest({ trigger: "submit-message", messageId: f.messageId, ...p });
        }),
        (this.regenerate = async ({ messageId: f, ...p } = {}) => {
          let w =
            f == null
              ? this.state.messages.length - 1
              : this.state.messages.findIndex((h) => h.id === f);
          if (w === -1) throw new Error(`message ${f} not found`);
          ((this.state.messages = this.state.messages.slice(
            0,
            this.messages[w].role === "assistant" ? w : w + 1
          )),
            await this.makeRequest({ trigger: "regenerate-message", messageId: f, ...p }));
        }),
        (this.resumeStream = async (f = {}) => {
          await this.makeRequest({ trigger: "resume-stream", ...f });
        }),
        (this.clearError = () => {
          this.status === "error" &&
            ((this.state.error = void 0), this.setStatus({ status: "ready" }));
        }),
        (this.addToolApprovalResponse = async ({ id: f, approved: p, reason: w, options: h }) =>
          this.jobExecutor.run(async () => {
            let b = this.state.messages,
              v = b[b.length - 1],
              g = (y) =>
                Mt(y) && y.state === "approval-requested" && y.approval.id === f
                  ? {
                      ...y,
                      state: "approval-responded",
                      approval: { id: f, approved: p, reason: w },
                    }
                  : y;
            (this.state.replaceMessage(b.length - 1, { ...v, parts: v.parts.map(g) }),
              this.activeResponse &&
                (this.activeResponse.state.message.parts =
                  this.activeResponse.state.message.parts.map(g)),
              this.status !== "streaming" &&
                this.status !== "submitted" &&
                this.sendAutomaticallyWhen &&
                this.shouldSendAutomatically().then((y) => {
                  var m;
                  y &&
                    this.makeRequest({
                      trigger: "submit-message",
                      messageId: (m = this.lastMessage) == null ? void 0 : m.id,
                      ...h,
                    });
                }));
          })),
        (this.addToolOutput = async ({
          state: f = "output-available",
          toolCallId: p,
          output: w,
          errorText: h,
          options: b,
        }) =>
          this.jobExecutor.run(async () => {
            let v = this.state.messages,
              g = v[v.length - 1],
              y = (m) =>
                Mt(m) && m.toolCallId === p ? { ...m, state: f, output: w, errorText: h } : m;
            (this.state.replaceMessage(v.length - 1, { ...g, parts: g.parts.map(y) }),
              this.activeResponse &&
                (this.activeResponse.state.message.parts =
                  this.activeResponse.state.message.parts.map(y)),
              this.status !== "streaming" &&
                this.status !== "submitted" &&
                this.sendAutomaticallyWhen &&
                this.shouldSendAutomatically().then((m) => {
                  var M;
                  m &&
                    this.makeRequest({
                      trigger: "submit-message",
                      messageId: (M = this.lastMessage) == null ? void 0 : M.id,
                      ...b,
                    });
                }));
          })),
        (this.addToolResult = this.addToolOutput),
        (this.stop = async () => {
          var f;
          (this.status !== "streaming" && this.status !== "submitted") ||
            ((f = this.activeResponse) != null &&
              f.abortController &&
              this.activeResponse.abortController.abort());
        }),
        (this.id = t),
        (this.transport = r),
        (this.generateId = e),
        (this.messageMetadataSchema = a),
        (this.dataPartSchemas = n),
        (this.state = s),
        (this.onError = l),
        (this.onToolCall = i),
        (this.onFinish = d),
        (this.onData = u),
        (this.sendAutomaticallyWhen = c));
    }
    get status() {
      return this.state.status;
    }
    setStatus({ status: e, error: t }) {
      this.status !== e && ((this.state.status = e), (this.state.error = t));
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
    async makeRequest({ trigger: e, metadata: t, headers: r, body: a, messageId: n }) {
      var s, l, i;
      let d;
      if (e === "resume-stream")
        try {
          let w = await this.transport.reconnectToStream({
            chatId: this.id,
            metadata: t,
            headers: r,
            body: a,
          });
          if (w == null) return;
          d = w;
        } catch (w) {
          (this.onError && w instanceof Error && this.onError(w),
            this.setStatus({ status: "error", error: w }));
          return;
        }
      this.setStatus({ status: "submitted", error: void 0 });
      let u = this.lastMessage,
        c = !1,
        f = !1,
        p = !1;
      try {
        let w = {
          state: po({ lastMessage: this.state.snapshot(u), messageId: this.generateId() }),
          abortController: new AbortController(),
        };
        (w.abortController.signal.addEventListener("abort", () => {
          c = !0;
        }),
          (this.activeResponse = w));
        let h;
        e === "resume-stream"
          ? (h = d)
          : (h = await this.transport.sendMessages({
              chatId: this.id,
              messages: this.state.messages,
              abortSignal: w.abortController.signal,
              metadata: t,
              headers: r,
              body: a,
              trigger: e,
              messageId: n,
            }));
        let b = (v) =>
          this.jobExecutor.run(() =>
            v({
              state: w.state,
              write: () => {
                var g;
                (this.setStatus({ status: "streaming" }),
                  w.state.message.id === ((g = this.lastMessage) == null ? void 0 : g.id)
                    ? this.state.replaceMessage(this.state.messages.length - 1, w.state.message)
                    : this.state.pushMessage(w.state.message));
              },
            })
          );
        (await fn({
          stream: fo({
            stream: h,
            onToolCall: this.onToolCall,
            onData: this.onData,
            messageMetadataSchema: this.messageMetadataSchema,
            dataPartSchemas: this.dataPartSchemas,
            runUpdateMessageJob: b,
            onError: (v) => {
              throw v;
            },
          }),
          onError: (v) => {
            throw v;
          },
        }),
          this.setStatus({ status: "ready" }));
      } catch (w) {
        if (c || w.name === "AbortError")
          return ((c = !0), this.setStatus({ status: "ready" }), null);
        ((p = !0),
          w instanceof TypeError &&
            (w.message.toLowerCase().includes("fetch") ||
              w.message.toLowerCase().includes("network")) &&
            (f = !0),
          this.onError && w instanceof Error && this.onError(w),
          this.setStatus({ status: "error", error: w }));
      } finally {
        try {
          (l = this.onFinish) == null ||
            l.call(this, {
              message: this.activeResponse.state.message,
              messages: this.state.messages,
              isAbort: c,
              isDisconnect: f,
              isError: p,
              finishReason: (s = this.activeResponse) == null ? void 0 : s.state.finishReason,
            });
        } catch (w) {
          console.error(w);
        }
        this.activeResponse = void 0;
      }
      !p &&
        (await this.shouldSendAutomatically()) &&
        (await this.makeRequest({
          trigger: "submit-message",
          messageId: (i = this.lastMessage) == null ? void 0 : i.id,
          metadata: t,
          headers: r,
          body: a,
        }));
    }
  },
  wy = class {
    constructor({ agent: e, options: t, ...r }) {
      ((this.agent = e), (this.agentOptions = t), (this.uiMessageStreamOptions = r));
    }
    async sendMessages({ messages: e, abortSignal: t }) {
      let r = await go({ messages: e, tools: this.agent.tools }),
        a = await ho(r, { tools: this.agent.tools });
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
function _y({ messages: e }) {
  let t = e[e.length - 1];
  if (!t || t.role !== "assistant") return !1;
  let r = t.parts.reduce((n, s, l) => (s.type === "step-start" ? l : n), -1),
    a = t.parts.slice(r + 1).filter(Mt);
  return (
    a.filter((n) => n.state === "approval-responded").length > 0 &&
    a.every(
      (n) =>
        n.state === "output-available" ||
        n.state === "output-error" ||
        n.state === "approval-responded"
    )
  );
}
function Ty({ messages: e }) {
  let t = e[e.length - 1];
  if (!t || t.role !== "assistant") return !1;
  let r = t.parts.reduce((n, s, l) => (s.type === "step-start" ? l : n), -1),
    a = t.parts
      .slice(r + 1)
      .filter(Mt)
      .filter((n) => !n.providerExecuted);
  return (
    a.length > 0 && a.every((n) => n.state === "output-available" || n.state === "output-error")
  );
}
function xy({ stream: e }) {
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
var Iy = class extends _o {
  constructor(e = {}) {
    super(e);
  }
  processResponseStream(e) {
    return xy({ stream: e.pipeThrough(new TextDecoderStream()) });
  }
};
export {
  ae as a,
  Zt as b,
  hi as c,
  Ai as d,
  wr as e,
  E as f,
  Sn as g,
  $t as h,
  Yb as i,
  ut as j,
  Xb as k,
  Qb as l,
  tw as m,
  ga as n,
  ye as o,
  rl as p,
  ow as q,
  ba as r,
  iw as s,
  pe as t,
  wa as u,
  Ye as v,
  ne as w,
  Et as x,
  sm as y,
  mw as z,
  vw as A,
  qt as B,
  bw as C,
  ww as D,
  Mn as E,
  De as F,
  cl as G,
  nt as H,
  Tw as I,
  pl as J,
  Ew as K,
  Ic as L,
  Dc as M,
  ts as N,
  Lc as O,
  Zc as P,
  bo as Q,
  Sy as R,
};
//# sourceMappingURL=chunk-7SCPAE2R.mjs.map
