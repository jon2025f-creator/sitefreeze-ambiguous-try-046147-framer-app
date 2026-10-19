import {
  $ as Ac,
  $a as Tt,
  $b as dn,
  $c as An,
  A as pc,
  Aa as it,
  Ab as Oo,
  Ac as oe,
  Ad as Lo,
  B as dc,
  Ba as at,
  Bb as zo,
  Bc as re,
  Bd as ii,
  C as lc,
  Ca as ut,
  Cb as Eo,
  Cc as ce,
  Cd as ai,
  D as mc,
  Da as st,
  Db as Ut,
  Dc as te,
  Dd as I,
  E as fc,
  Ea as pt,
  Eb as Ct,
  Ec as ne,
  F as z,
  Fa as dt,
  Fb as Ft,
  Fc as ie,
  G as hc,
  Ga as lt,
  Gb as Mt,
  Gc as hn,
  H as uo,
  Ha as mt,
  Hb as Vt,
  Hc as yn,
  I as so,
  Ia as ft,
  Ib as Bt,
  Ic as xn,
  J as yc,
  Ja as ht,
  Jb as Kt,
  Jc as _n,
  K as xc,
  Ka as yt,
  Kb as Wt,
  Kc as kn,
  L as _c,
  La as xt,
  Lb as qt,
  Lc as gn,
  M as kc,
  Ma as _t,
  Mb as Yt,
  Mc as Zn,
  N as gc,
  Na as kt,
  Nb as Xt,
  Nc as Sn,
  O as Zc,
  Oa as gt,
  Ob as Gt,
  Oc as ae,
  P as Sc,
  Pa as Zt,
  Pb as Ht,
  Pc as $n,
  Q as $c,
  Qa as St,
  Qb as Qt,
  Qc as jo,
  R as bc,
  Ra as $t,
  Rb as en,
  Rc as bn,
  S as vc,
  Sa as bt,
  Sb as on,
  Sc as vn,
  T as wc,
  Ta as vt,
  Tb as rn,
  Tc as wn,
  U as Ic,
  Ua as wt,
  Ub as cn,
  Uc as In,
  V as Oc,
  Va as It,
  Vb as tn,
  Vc as On,
  W as zc,
  Wa as Ot,
  Wb as nn,
  Wc as zn,
  X as Ec,
  Xa as zt,
  Xb as an,
  Xc as En,
  Y as Pc,
  Ya as Et,
  Yb as un,
  Yc as Pn,
  Z as Nc,
  Za as Pt,
  Zb as sn,
  Zc as Nn,
  _ as Tc,
  _a as Nt,
  _b as pn,
  _c as Tn,
  a as Hr,
  aa as Dc,
  ab as At,
  ac as ln,
  ad as Dn,
  b as n,
  ba as jc,
  bb as Dt,
  bc as mn,
  bd as jn,
  c as io,
  ca as Rc,
  cb as jt,
  cc as fn,
  cd as Rn,
  d as Qr,
  da as Lc,
  db as Z,
  dc as b,
  dd as Ln,
  e as $,
  ea as Jc,
  eb as Rt,
  ec as k,
  ed as Jn,
  f as ao,
  fa as Uc,
  fb as Lt,
  fc as v,
  fd as Un,
  ga as Cc,
  gb as po,
  gc as x,
  gd as Cn,
  h as W,
  ha as Fc,
  hb as $e,
  hc as Po,
  hd as Fn,
  ia as Mc,
  ib as lo,
  ic as No,
  id as Mn,
  j as p,
  ja as Vc,
  jb as mo,
  jc as To,
  jd as Vn,
  k as ec,
  ka as Bc,
  kb as fo,
  kc as Ao,
  kd as Bn,
  l as Ze,
  la as Kc,
  lb as ho,
  lc as E,
  ld as Kn,
  m as Se,
  ma as Wc,
  mb as be,
  mc as P,
  md as Wn,
  n as oc,
  na as qc,
  nb as yo,
  nc as S,
  nd as qn,
  o as rc,
  oa as Yc,
  ob as xo,
  oc as D,
  od as Ro,
  p as cc,
  pa as Xc,
  pb as _o,
  pc as j,
  pd as Yn,
  qa as Gc,
  qb as ko,
  qc as w,
  qd as Xn,
  r as tc,
  ra as Hc,
  rb as go,
  rc as R,
  rd as Gn,
  sa as Qc,
  sb as Zo,
  sc as q,
  sd as Hn,
  t as nc,
  ta as et,
  tb as So,
  tc as Y,
  td as Qn,
  ua as ot,
  ub as $o,
  uc as X,
  ud as ei,
  v as ic,
  vb as bo,
  vc as G,
  vd as oi,
  wa as rt,
  wb as Jt,
  wc as H,
  wd as ri,
  x as ac,
  xa as ct,
  xb as vo,
  xc as Q,
  xd as ci,
  y as uc,
  ya as tt,
  yb as wo,
  yc as Do,
  yd as ti,
  z as sc,
  za as nt,
  zb as Io,
  zc as ee,
  zd as ni,
} from "chunk-7GKAI4PF.mjs";
import { b as ge } from "chunk-4JY5UMT2.mjs";
import { d as K } from "chunk-WLHSDIGQ.mjs";
function Ba(e, o = 0) {
  if (e.length === 0) return o;
  for (let r = 0, c = e.length; r < c; r++) {
    let t = e.charCodeAt(r);
    o = ((o << 5) - o + t) | 0;
  }
  return o;
}
var Ia = Symbol("deleted"),
  Oa = Symbol("keep"),
  Wa = Symbol("does-not-exist"),
  za = Symbol("inherited"),
  qa = "$keep",
  Ya = "$deleted",
  ve = new Map([
    [void 0, "undefined"],
    [Ia, "Symbol(deleted)"],
    [Oa, "Symbol(keep)"],
    [za, "Symbol(inherited)"],
  ]);
function Xa(e) {
  return ve.has(e);
}
var Jo = "__$$framerCrdtNativeField$$__",
  Ea = new Map([...ve].map(([e, o]) => [o, e]));
function Qa(e) {
  return typeof e == "object" && e !== null && Jo in e;
}
function eu(e) {
  return { [Jo]: ve.get(e) };
}
function ou(e) {
  return Ea.get(e[Jo]);
}
var ui = (e, o) => {
    (ec.init(e, o),
      (e.name = "ZodError"),
      Object.defineProperties(e, {
        format: { value: (r) => Se(e, r) },
        flatten: { value: (r) => Ze(e, r) },
        addIssue: {
          value: (r) => {
            (e.issues.push(r), (e.message = JSON.stringify(e.issues, ao, 2)));
          },
        },
        addIssues: {
          value: (r) => {
            (e.issues.push(...r), (e.message = JSON.stringify(e.issues, ao, 2)));
          },
        },
        isEmpty: {
          get() {
            return e.issues.length === 0;
          },
        },
      }));
  },
  Pa = n("ZodError", ui),
  y = n("ZodError", ui, { Parent: Error });
var Uo = cc(y),
  Co = tc(y),
  Fo = nc(y),
  Mo = ic(y),
  Vo = ac(y),
  Bo = uc(y),
  Ko = sc(y),
  Wo = pc(y),
  qo = dc(y),
  Yo = lc(y),
  Xo = mc(y),
  Go = fc(y);
var Yr = {};
K(Yr, {
  $brand: () => io,
  $input: () => Dt,
  $output: () => At,
  NEVER: () => Hr,
  TimePrecision: () => Ut,
  ZodAny: () => sr,
  ZodArray: () => mr,
  ZodBase64: () => Ke,
  ZodBase64URL: () => We,
  ZodBigInt: () => V,
  ZodBigIntFormat: () => Xe,
  ZodBoolean: () => M,
  ZodCIDRv4: () => Ve,
  ZodCIDRv6: () => Be,
  ZodCUID: () => Re,
  ZodCUID2: () => Le,
  ZodCatch: () => Dr,
  ZodCodec: () => to,
  ZodCustom: () => ke,
  ZodCustomStringFormat: () => C,
  ZodDate: () => fe,
  ZodDefault: () => zr,
  ZodDiscriminatedUnion: () => hr,
  ZodE164: () => qe,
  ZodEmail: () => Ae,
  ZodEmoji: () => De,
  ZodEnum: () => J,
  ZodError: () => Pa,
  ZodExactOptional: () => wr,
  ZodFile: () => br,
  ZodFirstPartyTypeKind: () => Wr,
  ZodFunction: () => Vr,
  ZodGUID: () => se,
  ZodIPv4: () => Fe,
  ZodIPv6: () => Me,
  ZodISODate: () => Oe,
  ZodISODateTime: () => Ie,
  ZodISODuration: () => Ee,
  ZodISOTime: () => ze,
  ZodIntersection: () => yr,
  ZodIssueCode: () => Ta,
  ZodJWT: () => Ye,
  ZodKSUID: () => Ce,
  ZodLazy: () => Cr,
  ZodLiteral: () => $r,
  ZodMAC: () => rr,
  ZodMap: () => Zr,
  ZodNaN: () => Rr,
  ZodNanoID: () => je,
  ZodNever: () => dr,
  ZodNonOptional: () => ro,
  ZodNull: () => ar,
  ZodNullable: () => Or,
  ZodNumber: () => F,
  ZodNumberFormat: () => T,
  ZodObject: () => ye,
  ZodOptional: () => oo,
  ZodPipe: () => co,
  ZodPrefault: () => Pr,
  ZodPromise: () => Mr,
  ZodReadonly: () => Lr,
  ZodRealError: () => y,
  ZodRecord: () => _e,
  ZodSet: () => Sr,
  ZodString: () => U,
  ZodStringFormat: () => l,
  ZodSuccess: () => Ar,
  ZodSymbol: () => nr,
  ZodTemplateLiteral: () => Ur,
  ZodTransform: () => vr,
  ZodTuple: () => _r,
  ZodType: () => u,
  ZodULID: () => Je,
  ZodURL: () => me,
  ZodUUID: () => g,
  ZodUndefined: () => ir,
  ZodUnion: () => xe,
  ZodUnknown: () => pr,
  ZodVoid: () => lr,
  ZodXID: () => Ue,
  ZodXor: () => fr,
  _ZodString: () => Te,
  _default: () => Er,
  _function: () => fa,
  any: () => Ki,
  array: () => he,
  base64: () => zi,
  base64url: () => Ei,
  bigint: () => Ci,
  boolean: () => tr,
  catch: () => jr,
  check: () => ha,
  cidrv4: () => Ii,
  cidrv6: () => Oi,
  clone: () => W,
  codec: () => da,
  coerce: () => qr,
  config: () => $,
  core: () => I,
  cuid: () => ki,
  cuid2: () => gi,
  custom: () => ya,
  date: () => qi,
  decode: () => Bo,
  decodeAsync: () => Wo,
  describe: () => xa,
  discriminatedUnion: () => ea,
  e164: () => Pi,
  email: () => si,
  emoji: () => xi,
  encode: () => Vo,
  encodeAsync: () => Ko,
  endsWith: () => Q,
  enum: () => Qe,
  exactOptional: () => Ir,
  file: () => aa,
  flattenError: () => Ze,
  float32: () => Ri,
  float64: () => Li,
  formatError: () => Se,
  fromJSONSchema: () => ba,
  function: () => fa,
  getErrorMap: () => Da,
  globalRegistry: () => Z,
  gt: () => v,
  gte: () => x,
  guid: () => pi,
  hash: () => ji,
  hex: () => Di,
  hostname: () => Ai,
  httpUrl: () => yi,
  includes: () => G,
  instanceof: () => ka,
  int: () => Ne,
  int32: () => Ji,
  int64: () => Fi,
  intersection: () => xr,
  ipv4: () => bi,
  ipv6: () => wi,
  iso: () => L,
  json: () => Za,
  jwt: () => Ni,
  keyof: () => Yi,
  ksuid: () => $i,
  lazy: () => Fr,
  length: () => R,
  literal: () => ia,
  locales: () => Tt,
  looseObject: () => Hi,
  looseRecord: () => ra,
  lowercase: () => Y,
  lt: () => b,
  lte: () => k,
  mac: () => vi,
  map: () => ca,
  maxLength: () => j,
  maxSize: () => P,
  meta: () => _a,
  mime: () => ee,
  minLength: () => w,
  minSize: () => S,
  multipleOf: () => E,
  nan: () => pa,
  nanoid: () => _i,
  nativeEnum: () => na,
  negative: () => No,
  never: () => Ge,
  nonnegative: () => Ao,
  nonoptional: () => Tr,
  nonpositive: () => To,
  normalize: () => re,
  null: () => ur,
  nullable: () => de,
  nullish: () => ua,
  number: () => cr,
  object: () => Xi,
  optional: () => pe,
  overwrite: () => oe,
  parse: () => Uo,
  parseAsync: () => Co,
  partialRecord: () => oa,
  pipe: () => le,
  positive: () => Po,
  prefault: () => Nr,
  preprocess: () => Sa,
  prettifyError: () => rc,
  promise: () => ma,
  property: () => Do,
  readonly: () => Jr,
  record: () => gr,
  refine: () => Br,
  regex: () => q,
  regexes: () => z,
  registry: () => jt,
  safeDecode: () => Yo,
  safeDecodeAsync: () => Go,
  safeEncode: () => qo,
  safeEncodeAsync: () => Xo,
  safeParse: () => Fo,
  safeParseAsync: () => Mo,
  set: () => ta,
  setErrorMap: () => Aa,
  size: () => D,
  slugify: () => ie,
  startsWith: () => H,
  strictObject: () => Gi,
  string: () => Pe,
  stringFormat: () => Ti,
  stringbool: () => ga,
  success: () => sa,
  superRefine: () => Kr,
  symbol: () => Vi,
  templateLiteral: () => la,
  toJSONSchema: () => ai,
  toLowerCase: () => te,
  toUpperCase: () => ne,
  transform: () => eo,
  treeifyError: () => oc,
  trim: () => ce,
  tuple: () => kr,
  uint32: () => Ui,
  uint64: () => Mi,
  ulid: () => Zi,
  undefined: () => Bi,
  union: () => He,
  unknown: () => N,
  uppercase: () => X,
  url: () => hi,
  util: () => p,
  uuid: () => di,
  uuidv4: () => li,
  uuidv6: () => mi,
  uuidv7: () => fi,
  void: () => Wi,
  xid: () => Si,
  xor: () => Qi,
});
var ue = {};
K(ue, {
  ZodAny: () => sr,
  ZodArray: () => mr,
  ZodBase64: () => Ke,
  ZodBase64URL: () => We,
  ZodBigInt: () => V,
  ZodBigIntFormat: () => Xe,
  ZodBoolean: () => M,
  ZodCIDRv4: () => Ve,
  ZodCIDRv6: () => Be,
  ZodCUID: () => Re,
  ZodCUID2: () => Le,
  ZodCatch: () => Dr,
  ZodCodec: () => to,
  ZodCustom: () => ke,
  ZodCustomStringFormat: () => C,
  ZodDate: () => fe,
  ZodDefault: () => zr,
  ZodDiscriminatedUnion: () => hr,
  ZodE164: () => qe,
  ZodEmail: () => Ae,
  ZodEmoji: () => De,
  ZodEnum: () => J,
  ZodExactOptional: () => wr,
  ZodFile: () => br,
  ZodFunction: () => Vr,
  ZodGUID: () => se,
  ZodIPv4: () => Fe,
  ZodIPv6: () => Me,
  ZodIntersection: () => yr,
  ZodJWT: () => Ye,
  ZodKSUID: () => Ce,
  ZodLazy: () => Cr,
  ZodLiteral: () => $r,
  ZodMAC: () => rr,
  ZodMap: () => Zr,
  ZodNaN: () => Rr,
  ZodNanoID: () => je,
  ZodNever: () => dr,
  ZodNonOptional: () => ro,
  ZodNull: () => ar,
  ZodNullable: () => Or,
  ZodNumber: () => F,
  ZodNumberFormat: () => T,
  ZodObject: () => ye,
  ZodOptional: () => oo,
  ZodPipe: () => co,
  ZodPrefault: () => Pr,
  ZodPromise: () => Mr,
  ZodReadonly: () => Lr,
  ZodRecord: () => _e,
  ZodSet: () => Sr,
  ZodString: () => U,
  ZodStringFormat: () => l,
  ZodSuccess: () => Ar,
  ZodSymbol: () => nr,
  ZodTemplateLiteral: () => Ur,
  ZodTransform: () => vr,
  ZodTuple: () => _r,
  ZodType: () => u,
  ZodULID: () => Je,
  ZodURL: () => me,
  ZodUUID: () => g,
  ZodUndefined: () => ir,
  ZodUnion: () => xe,
  ZodUnknown: () => pr,
  ZodVoid: () => lr,
  ZodXID: () => Ue,
  ZodXor: () => fr,
  _ZodString: () => Te,
  _default: () => Er,
  _function: () => fa,
  any: () => Ki,
  array: () => he,
  base64: () => zi,
  base64url: () => Ei,
  bigint: () => Ci,
  boolean: () => tr,
  catch: () => jr,
  check: () => ha,
  cidrv4: () => Ii,
  cidrv6: () => Oi,
  codec: () => da,
  cuid: () => ki,
  cuid2: () => gi,
  custom: () => ya,
  date: () => qi,
  describe: () => xa,
  discriminatedUnion: () => ea,
  e164: () => Pi,
  email: () => si,
  emoji: () => xi,
  enum: () => Qe,
  exactOptional: () => Ir,
  file: () => aa,
  float32: () => Ri,
  float64: () => Li,
  function: () => fa,
  guid: () => pi,
  hash: () => ji,
  hex: () => Di,
  hostname: () => Ai,
  httpUrl: () => yi,
  instanceof: () => ka,
  int: () => Ne,
  int32: () => Ji,
  int64: () => Fi,
  intersection: () => xr,
  ipv4: () => bi,
  ipv6: () => wi,
  json: () => Za,
  jwt: () => Ni,
  keyof: () => Yi,
  ksuid: () => $i,
  lazy: () => Fr,
  literal: () => ia,
  looseObject: () => Hi,
  looseRecord: () => ra,
  mac: () => vi,
  map: () => ca,
  meta: () => _a,
  nan: () => pa,
  nanoid: () => _i,
  nativeEnum: () => na,
  never: () => Ge,
  nonoptional: () => Tr,
  null: () => ur,
  nullable: () => de,
  nullish: () => ua,
  number: () => cr,
  object: () => Xi,
  optional: () => pe,
  partialRecord: () => oa,
  pipe: () => le,
  prefault: () => Nr,
  preprocess: () => Sa,
  promise: () => ma,
  readonly: () => Jr,
  record: () => gr,
  refine: () => Br,
  set: () => ta,
  strictObject: () => Gi,
  string: () => Pe,
  stringFormat: () => Ti,
  stringbool: () => ga,
  success: () => sa,
  superRefine: () => Kr,
  symbol: () => Vi,
  templateLiteral: () => la,
  transform: () => eo,
  tuple: () => kr,
  uint32: () => Ui,
  uint64: () => Mi,
  ulid: () => Zi,
  undefined: () => Bi,
  union: () => He,
  unknown: () => N,
  url: () => hi,
  uuid: () => di,
  uuidv4: () => li,
  uuidv6: () => mi,
  uuidv7: () => fi,
  void: () => Wi,
  xid: () => Si,
  xor: () => Qi,
});
var we = {};
K(we, {
  endsWith: () => Q,
  gt: () => v,
  gte: () => x,
  includes: () => G,
  length: () => R,
  lowercase: () => Y,
  lt: () => b,
  lte: () => k,
  maxLength: () => j,
  maxSize: () => P,
  mime: () => ee,
  minLength: () => w,
  minSize: () => S,
  multipleOf: () => E,
  negative: () => No,
  nonnegative: () => Ao,
  nonpositive: () => To,
  normalize: () => re,
  overwrite: () => oe,
  positive: () => Po,
  property: () => Do,
  regex: () => q,
  size: () => D,
  slugify: () => ie,
  startsWith: () => H,
  toLowerCase: () => te,
  toUpperCase: () => ne,
  trim: () => ce,
  uppercase: () => X,
});
var L = {};
K(L, {
  ZodISODate: () => Oe,
  ZodISODateTime: () => Ie,
  ZodISODuration: () => Ee,
  ZodISOTime: () => ze,
  date: () => Qo,
  datetime: () => Ho,
  duration: () => or,
  time: () => er,
});
var Ie = n("ZodISODateTime", (e, o) => {
  (Oc.init(e, o), l.init(e, o));
});
function Ho(e) {
  return Ct(Ie, e);
}
var Oe = n("ZodISODate", (e, o) => {
  (zc.init(e, o), l.init(e, o));
});
function Qo(e) {
  return Ft(Oe, e);
}
var ze = n("ZodISOTime", (e, o) => {
  (Ec.init(e, o), l.init(e, o));
});
function er(e) {
  return Mt(ze, e);
}
var Ee = n("ZodISODuration", (e, o) => {
  (Pc.init(e, o), l.init(e, o));
});
function or(e) {
  return Vt(Ee, e);
}
var u = n(
    "ZodType",
    (e, o) => (
      uo.init(e, o),
      Object.assign(e["~standard"], {
        jsonSchema: { input: jo(e, "input"), output: jo(e, "output") },
      }),
      (e.toJSONSchema = $n(e, {})),
      (e.def = o),
      (e.type = o.type),
      Object.defineProperty(e, "_def", { value: o }),
      (e.check = (...r) =>
        e.clone(
          p.mergeDefs(o, {
            checks: [
              ...(o.checks ?? []),
              ...r.map((c) =>
                typeof c == "function"
                  ? { _zod: { check: c, def: { check: "custom" }, onattach: [] } }
                  : c
              ),
            ],
          }),
          { parent: !0 }
        )),
      (e.with = e.check),
      (e.clone = (r, c) => W(e, r, c)),
      (e.brand = () => e),
      (e.register = (r, c) => (r.add(e, c), e)),
      (e.parse = (r, c) => Uo(e, r, c, { callee: e.parse })),
      (e.safeParse = (r, c) => Fo(e, r, c)),
      (e.parseAsync = async (r, c) => Co(e, r, c, { callee: e.parseAsync })),
      (e.safeParseAsync = async (r, c) => Mo(e, r, c)),
      (e.spa = e.safeParseAsync),
      (e.encode = (r, c) => Vo(e, r, c)),
      (e.decode = (r, c) => Bo(e, r, c)),
      (e.encodeAsync = async (r, c) => Ko(e, r, c)),
      (e.decodeAsync = async (r, c) => Wo(e, r, c)),
      (e.safeEncode = (r, c) => qo(e, r, c)),
      (e.safeDecode = (r, c) => Yo(e, r, c)),
      (e.safeEncodeAsync = async (r, c) => Xo(e, r, c)),
      (e.safeDecodeAsync = async (r, c) => Go(e, r, c)),
      (e.refine = (r, c) => e.check(Br(r, c))),
      (e.superRefine = (r) => e.check(Kr(r))),
      (e.overwrite = (r) => e.check(oe(r))),
      (e.optional = () => pe(e)),
      (e.exactOptional = () => Ir(e)),
      (e.nullable = () => de(e)),
      (e.nullish = () => pe(de(e))),
      (e.nonoptional = (r) => Tr(e, r)),
      (e.array = () => he(e)),
      (e.or = (r) => He([e, r])),
      (e.and = (r) => xr(e, r)),
      (e.transform = (r) => le(e, eo(r))),
      (e.default = (r) => Er(e, r)),
      (e.prefault = (r) => Nr(e, r)),
      (e.catch = (r) => jr(e, r)),
      (e.pipe = (r) => le(e, r)),
      (e.readonly = () => Jr(e)),
      (e.describe = (r) => {
        let c = e.clone();
        return (Z.add(c, { description: r }), c);
      }),
      Object.defineProperty(e, "description", {
        get() {
          return Z.get(e)?.description;
        },
        configurable: !0,
      }),
      (e.meta = (...r) => {
        if (r.length === 0) return Z.get(e);
        let c = e.clone();
        return (Z.add(c, r[0]), c);
      }),
      (e.isOptional = () => e.safeParse(void 0).success),
      (e.isNullable = () => e.safeParse(null).success),
      (e.apply = (r) => r(e)),
      e
    )
  ),
  Te = n("_ZodString", (e, o) => {
    (so.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (c, t, a) => bn(e, c, t, a)));
    let r = e._zod.bag;
    ((e.format = r.format ?? null),
      (e.minLength = r.minimum ?? null),
      (e.maxLength = r.maximum ?? null),
      (e.regex = (...c) => e.check(q(...c))),
      (e.includes = (...c) => e.check(G(...c))),
      (e.startsWith = (...c) => e.check(H(...c))),
      (e.endsWith = (...c) => e.check(Q(...c))),
      (e.min = (...c) => e.check(w(...c))),
      (e.max = (...c) => e.check(j(...c))),
      (e.length = (...c) => e.check(R(...c))),
      (e.nonempty = (...c) => e.check(w(1, ...c))),
      (e.lowercase = (c) => e.check(Y(c))),
      (e.uppercase = (c) => e.check(X(c))),
      (e.trim = () => e.check(ce())),
      (e.normalize = (...c) => e.check(re(...c))),
      (e.toLowerCase = () => e.check(te())),
      (e.toUpperCase = () => e.check(ne())),
      (e.slugify = () => e.check(ie())));
  }),
  U = n("ZodString", (e, o) => {
    (so.init(e, o),
      Te.init(e, o),
      (e.email = (r) => e.check(po(Ae, r))),
      (e.url = (r) => e.check(be(me, r))),
      (e.jwt = (r) => e.check(Eo(Ye, r))),
      (e.emoji = (r) => e.check(yo(De, r))),
      (e.guid = (r) => e.check($e(se, r))),
      (e.uuid = (r) => e.check(lo(g, r))),
      (e.uuidv4 = (r) => e.check(mo(g, r))),
      (e.uuidv6 = (r) => e.check(fo(g, r))),
      (e.uuidv7 = (r) => e.check(ho(g, r))),
      (e.nanoid = (r) => e.check(xo(je, r))),
      (e.guid = (r) => e.check($e(se, r))),
      (e.cuid = (r) => e.check(_o(Re, r))),
      (e.cuid2 = (r) => e.check(ko(Le, r))),
      (e.ulid = (r) => e.check(go(Je, r))),
      (e.base64 = (r) => e.check(Io(Ke, r))),
      (e.base64url = (r) => e.check(Oo(We, r))),
      (e.xid = (r) => e.check(Zo(Ue, r))),
      (e.ksuid = (r) => e.check(So(Ce, r))),
      (e.ipv4 = (r) => e.check($o(Fe, r))),
      (e.ipv6 = (r) => e.check(bo(Me, r))),
      (e.cidrv4 = (r) => e.check(vo(Ve, r))),
      (e.cidrv6 = (r) => e.check(wo(Be, r))),
      (e.e164 = (r) => e.check(zo(qe, r))),
      (e.datetime = (r) => e.check(Ho(r))),
      (e.date = (r) => e.check(Qo(r))),
      (e.time = (r) => e.check(er(r))),
      (e.duration = (r) => e.check(or(r))));
  });
function Pe(e) {
  return Rt(U, e);
}
var l = n("ZodStringFormat", (e, o) => {
    (yc.init(e, o), Te.init(e, o));
  }),
  Ae = n("ZodEmail", (e, o) => {
    (kc.init(e, o), l.init(e, o));
  });
function si(e) {
  return po(Ae, e);
}
var se = n("ZodGUID", (e, o) => {
  (xc.init(e, o), l.init(e, o));
});
function pi(e) {
  return $e(se, e);
}
var g = n("ZodUUID", (e, o) => {
  (_c.init(e, o), l.init(e, o));
});
function di(e) {
  return lo(g, e);
}
function li(e) {
  return mo(g, e);
}
function mi(e) {
  return fo(g, e);
}
function fi(e) {
  return ho(g, e);
}
var me = n("ZodURL", (e, o) => {
  (gc.init(e, o), l.init(e, o));
});
function hi(e) {
  return be(me, e);
}
function yi(e) {
  return be(me, { protocol: /^https?$/, hostname: z.domain, ...p.normalizeParams(e) });
}
var De = n("ZodEmoji", (e, o) => {
  (Zc.init(e, o), l.init(e, o));
});
function xi(e) {
  return yo(De, e);
}
var je = n("ZodNanoID", (e, o) => {
  (Sc.init(e, o), l.init(e, o));
});
function _i(e) {
  return xo(je, e);
}
var Re = n("ZodCUID", (e, o) => {
  ($c.init(e, o), l.init(e, o));
});
function ki(e) {
  return _o(Re, e);
}
var Le = n("ZodCUID2", (e, o) => {
  (bc.init(e, o), l.init(e, o));
});
function gi(e) {
  return ko(Le, e);
}
var Je = n("ZodULID", (e, o) => {
  (vc.init(e, o), l.init(e, o));
});
function Zi(e) {
  return go(Je, e);
}
var Ue = n("ZodXID", (e, o) => {
  (wc.init(e, o), l.init(e, o));
});
function Si(e) {
  return Zo(Ue, e);
}
var Ce = n("ZodKSUID", (e, o) => {
  (Ic.init(e, o), l.init(e, o));
});
function $i(e) {
  return So(Ce, e);
}
var Fe = n("ZodIPv4", (e, o) => {
  (Nc.init(e, o), l.init(e, o));
});
function bi(e) {
  return $o(Fe, e);
}
var rr = n("ZodMAC", (e, o) => {
  (Ac.init(e, o), l.init(e, o));
});
function vi(e) {
  return Jt(rr, e);
}
var Me = n("ZodIPv6", (e, o) => {
  (Tc.init(e, o), l.init(e, o));
});
function wi(e) {
  return bo(Me, e);
}
var Ve = n("ZodCIDRv4", (e, o) => {
  (Dc.init(e, o), l.init(e, o));
});
function Ii(e) {
  return vo(Ve, e);
}
var Be = n("ZodCIDRv6", (e, o) => {
  (jc.init(e, o), l.init(e, o));
});
function Oi(e) {
  return wo(Be, e);
}
var Ke = n("ZodBase64", (e, o) => {
  (Rc.init(e, o), l.init(e, o));
});
function zi(e) {
  return Io(Ke, e);
}
var We = n("ZodBase64URL", (e, o) => {
  (Lc.init(e, o), l.init(e, o));
});
function Ei(e) {
  return Oo(We, e);
}
var qe = n("ZodE164", (e, o) => {
  (Jc.init(e, o), l.init(e, o));
});
function Pi(e) {
  return zo(qe, e);
}
var Ye = n("ZodJWT", (e, o) => {
  (Uc.init(e, o), l.init(e, o));
});
function Ni(e) {
  return Eo(Ye, e);
}
var C = n("ZodCustomStringFormat", (e, o) => {
  (Cc.init(e, o), l.init(e, o));
});
function Ti(e, o, r = {}) {
  return ae(C, e, o, r);
}
function Ai(e) {
  return ae(C, "hostname", z.hostname, e);
}
function Di(e) {
  return ae(C, "hex", z.hex, e);
}
function ji(e, o) {
  let r = o?.enc ?? "hex",
    c = `${e}_${r}`,
    t = z[c];
  if (!t) throw new Error(`Unrecognized hash format: ${c}`);
  return ae(C, c, t, o);
}
var F = n("ZodNumber", (e, o) => {
  (Fc.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (c, t, a) => vn(e, c, t, a)),
    (e.gt = (c, t) => e.check(v(c, t))),
    (e.gte = (c, t) => e.check(x(c, t))),
    (e.min = (c, t) => e.check(x(c, t))),
    (e.lt = (c, t) => e.check(b(c, t))),
    (e.lte = (c, t) => e.check(k(c, t))),
    (e.max = (c, t) => e.check(k(c, t))),
    (e.int = (c) => e.check(Ne(c))),
    (e.safe = (c) => e.check(Ne(c))),
    (e.positive = (c) => e.check(v(0, c))),
    (e.nonnegative = (c) => e.check(x(0, c))),
    (e.negative = (c) => e.check(b(0, c))),
    (e.nonpositive = (c) => e.check(k(0, c))),
    (e.multipleOf = (c, t) => e.check(E(c, t))),
    (e.step = (c, t) => e.check(E(c, t))),
    (e.finite = () => e));
  let r = e._zod.bag;
  ((e.minValue =
    Math.max(
      r.minimum ?? Number.NEGATIVE_INFINITY,
      r.exclusiveMinimum ?? Number.NEGATIVE_INFINITY
    ) ?? null),
    (e.maxValue =
      Math.min(
        r.maximum ?? Number.POSITIVE_INFINITY,
        r.exclusiveMaximum ?? Number.POSITIVE_INFINITY
      ) ?? null),
    (e.isInt = (r.format ?? "").includes("int") || Number.isSafeInteger(r.multipleOf ?? 0.5)),
    (e.isFinite = !0),
    (e.format = r.format ?? null));
});
function cr(e) {
  return Bt(F, e);
}
var T = n("ZodNumberFormat", (e, o) => {
  (Mc.init(e, o), F.init(e, o));
});
function Ne(e) {
  return Wt(T, e);
}
function Ri(e) {
  return qt(T, e);
}
function Li(e) {
  return Yt(T, e);
}
function Ji(e) {
  return Xt(T, e);
}
function Ui(e) {
  return Gt(T, e);
}
var M = n("ZodBoolean", (e, o) => {
  (Vc.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => wn(e, r, c, t)));
});
function tr(e) {
  return Ht(M, e);
}
var V = n("ZodBigInt", (e, o) => {
  (Bc.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (c, t, a) => In(e, c, t, a)),
    (e.gte = (c, t) => e.check(x(c, t))),
    (e.min = (c, t) => e.check(x(c, t))),
    (e.gt = (c, t) => e.check(v(c, t))),
    (e.gte = (c, t) => e.check(x(c, t))),
    (e.min = (c, t) => e.check(x(c, t))),
    (e.lt = (c, t) => e.check(b(c, t))),
    (e.lte = (c, t) => e.check(k(c, t))),
    (e.max = (c, t) => e.check(k(c, t))),
    (e.positive = (c) => e.check(v(BigInt(0), c))),
    (e.negative = (c) => e.check(b(BigInt(0), c))),
    (e.nonpositive = (c) => e.check(k(BigInt(0), c))),
    (e.nonnegative = (c) => e.check(x(BigInt(0), c))),
    (e.multipleOf = (c, t) => e.check(E(c, t))));
  let r = e._zod.bag;
  ((e.minValue = r.minimum ?? null),
    (e.maxValue = r.maximum ?? null),
    (e.format = r.format ?? null));
});
function Ci(e) {
  return en(V, e);
}
var Xe = n("ZodBigIntFormat", (e, o) => {
  (Kc.init(e, o), V.init(e, o));
});
function Fi(e) {
  return rn(Xe, e);
}
function Mi(e) {
  return cn(Xe, e);
}
var nr = n("ZodSymbol", (e, o) => {
  (Wc.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => On(e, r, c, t)));
});
function Vi(e) {
  return tn(nr, e);
}
var ir = n("ZodUndefined", (e, o) => {
  (qc.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => En(e, r, c, t)));
});
function Bi(e) {
  return nn(ir, e);
}
var ar = n("ZodNull", (e, o) => {
  (Yc.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => zn(e, r, c, t)));
});
function ur(e) {
  return an(ar, e);
}
var sr = n("ZodAny", (e, o) => {
  (Xc.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => Tn(e, r, c, t)));
});
function Ki() {
  return un(sr);
}
var pr = n("ZodUnknown", (e, o) => {
  (Gc.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => An(e, r, c, t)));
});
function N() {
  return sn(pr);
}
var dr = n("ZodNever", (e, o) => {
  (Hc.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => Nn(e, r, c, t)));
});
function Ge(e) {
  return pn(dr, e);
}
var lr = n("ZodVoid", (e, o) => {
  (Qc.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => Pn(e, r, c, t)));
});
function Wi(e) {
  return dn(lr, e);
}
var fe = n("ZodDate", (e, o) => {
  (et.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (c, t, a) => Dn(e, c, t, a)),
    (e.min = (c, t) => e.check(x(c, t))),
    (e.max = (c, t) => e.check(k(c, t))));
  let r = e._zod.bag;
  ((e.minDate = r.minimum ? new Date(r.minimum) : null),
    (e.maxDate = r.maximum ? new Date(r.maximum) : null));
});
function qi(e) {
  return ln(fe, e);
}
var mr = n("ZodArray", (e, o) => {
  (ot.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Wn(e, r, c, t)),
    (e.element = o.element),
    (e.min = (r, c) => e.check(w(r, c))),
    (e.nonempty = (r) => e.check(w(1, r))),
    (e.max = (r, c) => e.check(j(r, c))),
    (e.length = (r, c) => e.check(R(r, c))),
    (e.unwrap = () => e.element));
});
function he(e, o) {
  return hn(mr, e, o);
}
function Yi(e) {
  let o = e._zod.def.shape;
  return Qe(Object.keys(o));
}
var ye = n("ZodObject", (e, o) => {
  (rt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => qn(e, r, c, t)),
    p.defineLazy(e, "shape", () => o.shape),
    (e.keyof = () => Qe(Object.keys(e._zod.def.shape))),
    (e.catchall = (r) => e.clone({ ...e._zod.def, catchall: r })),
    (e.passthrough = () => e.clone({ ...e._zod.def, catchall: N() })),
    (e.loose = () => e.clone({ ...e._zod.def, catchall: N() })),
    (e.strict = () => e.clone({ ...e._zod.def, catchall: Ge() })),
    (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
    (e.extend = (r) => p.extend(e, r)),
    (e.safeExtend = (r) => p.safeExtend(e, r)),
    (e.merge = (r) => p.merge(e, r)),
    (e.pick = (r) => p.pick(e, r)),
    (e.omit = (r) => p.omit(e, r)),
    (e.partial = (...r) => p.partial(oo, e, r[0])),
    (e.required = (...r) => p.required(ro, e, r[0])));
});
function Xi(e, o) {
  let r = { type: "object", shape: e ?? {}, ...p.normalizeParams(o) };
  return new ye(r);
}
function Gi(e, o) {
  return new ye({ type: "object", shape: e, catchall: Ge(), ...p.normalizeParams(o) });
}
function Hi(e, o) {
  return new ye({ type: "object", shape: e, catchall: N(), ...p.normalizeParams(o) });
}
var xe = n("ZodUnion", (e, o) => {
  (ct.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Ro(e, r, c, t)),
    (e.options = o.options));
});
function He(e, o) {
  return new xe({ type: "union", options: e, ...p.normalizeParams(o) });
}
var fr = n("ZodXor", (e, o) => {
  (xe.init(e, o),
    tt.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Ro(e, r, c, t)),
    (e.options = o.options));
});
function Qi(e, o) {
  return new fr({ type: "union", options: e, inclusive: !1, ...p.normalizeParams(o) });
}
var hr = n("ZodDiscriminatedUnion", (e, o) => {
  (xe.init(e, o), nt.init(e, o));
});
function ea(e, o, r) {
  return new hr({ type: "union", options: o, discriminator: e, ...p.normalizeParams(r) });
}
var yr = n("ZodIntersection", (e, o) => {
  (it.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => Yn(e, r, c, t)));
});
function xr(e, o) {
  return new yr({ type: "intersection", left: e, right: o });
}
var _r = n("ZodTuple", (e, o) => {
  (at.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Xn(e, r, c, t)),
    (e.rest = (r) => e.clone({ ...e._zod.def, rest: r })));
});
function kr(e, o, r) {
  let c = o instanceof uo,
    t = c ? r : o,
    a = c ? o : null;
  return new _r({ type: "tuple", items: e, rest: a, ...p.normalizeParams(t) });
}
var _e = n("ZodRecord", (e, o) => {
  (ut.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Gn(e, r, c, t)),
    (e.keyType = o.keyType),
    (e.valueType = o.valueType));
});
function gr(e, o, r) {
  return new _e({ type: "record", keyType: e, valueType: o, ...p.normalizeParams(r) });
}
function oa(e, o, r) {
  let c = W(e);
  return (
    (c._zod.values = void 0),
    new _e({ type: "record", keyType: c, valueType: o, ...p.normalizeParams(r) })
  );
}
function ra(e, o, r) {
  return new _e({
    type: "record",
    keyType: e,
    valueType: o,
    mode: "loose",
    ...p.normalizeParams(r),
  });
}
var Zr = n("ZodMap", (e, o) => {
  (st.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Bn(e, r, c, t)),
    (e.keyType = o.keyType),
    (e.valueType = o.valueType),
    (e.min = (...r) => e.check(S(...r))),
    (e.nonempty = (r) => e.check(S(1, r))),
    (e.max = (...r) => e.check(P(...r))),
    (e.size = (...r) => e.check(D(...r))));
});
function ca(e, o, r) {
  return new Zr({ type: "map", keyType: e, valueType: o, ...p.normalizeParams(r) });
}
var Sr = n("ZodSet", (e, o) => {
  (pt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Kn(e, r, c, t)),
    (e.min = (...r) => e.check(S(...r))),
    (e.nonempty = (r) => e.check(S(1, r))),
    (e.max = (...r) => e.check(P(...r))),
    (e.size = (...r) => e.check(D(...r))));
});
function ta(e, o) {
  return new Sr({ type: "set", valueType: e, ...p.normalizeParams(o) });
}
var J = n("ZodEnum", (e, o) => {
  (dt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (c, t, a) => jn(e, c, t, a)),
    (e.enum = o.entries),
    (e.options = Object.values(o.entries)));
  let r = new Set(Object.keys(o.entries));
  ((e.extract = (c, t) => {
    let a = {};
    for (let s of c)
      if (r.has(s)) a[s] = o.entries[s];
      else throw new Error(`Key ${s} not found in enum`);
    return new J({ ...o, checks: [], ...p.normalizeParams(t), entries: a });
  }),
    (e.exclude = (c, t) => {
      let a = { ...o.entries };
      for (let s of c)
        if (r.has(s)) delete a[s];
        else throw new Error(`Key ${s} not found in enum`);
      return new J({ ...o, checks: [], ...p.normalizeParams(t), entries: a });
    }));
});
function Qe(e, o) {
  let r = Array.isArray(e) ? Object.fromEntries(e.map((c) => [c, c])) : e;
  return new J({ type: "enum", entries: r, ...p.normalizeParams(o) });
}
function na(e, o) {
  return new J({ type: "enum", entries: e, ...p.normalizeParams(o) });
}
var $r = n("ZodLiteral", (e, o) => {
  (lt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Rn(e, r, c, t)),
    (e.values = new Set(o.values)),
    Object.defineProperty(e, "value", {
      get() {
        if (o.values.length > 1)
          throw new Error(
            "This schema contains multiple valid literal values. Use `.values` instead."
          );
        return o.values[0];
      },
    }));
});
function ia(e, o) {
  return new $r({ type: "literal", values: Array.isArray(e) ? e : [e], ...p.normalizeParams(o) });
}
var br = n("ZodFile", (e, o) => {
  (mt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Un(e, r, c, t)),
    (e.min = (r, c) => e.check(S(r, c))),
    (e.max = (r, c) => e.check(P(r, c))),
    (e.mime = (r, c) => e.check(ee(Array.isArray(r) ? r : [r], c))));
});
function aa(e) {
  return yn(br, e);
}
var vr = n("ZodTransform", (e, o) => {
  (ft.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Vn(e, r, c, t)),
    (e._zod.parse = (r, c) => {
      if (c.direction === "backward") throw new Qr(e.constructor.name);
      r.addIssue = (a) => {
        if (typeof a == "string") r.issues.push(p.issue(a, r.value, o));
        else {
          let s = a;
          (s.fatal && (s.continue = !1),
            s.code ?? (s.code = "custom"),
            s.input ?? (s.input = r.value),
            s.inst ?? (s.inst = e),
            r.issues.push(p.issue(s)));
        }
      };
      let t = o.transform(r.value, r);
      return t instanceof Promise ? t.then((a) => ((r.value = a), r)) : ((r.value = t), r);
    }));
});
function eo(e) {
  return new vr({ type: "transform", transform: e });
}
var oo = n("ZodOptional", (e, o) => {
  (ht.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Lo(e, r, c, t)),
    (e.unwrap = () => e._zod.def.innerType));
});
function pe(e) {
  return new oo({ type: "optional", innerType: e });
}
var wr = n("ZodExactOptional", (e, o) => {
  (yt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Lo(e, r, c, t)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Ir(e) {
  return new wr({ type: "optional", innerType: e });
}
var Or = n("ZodNullable", (e, o) => {
  (xt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Hn(e, r, c, t)),
    (e.unwrap = () => e._zod.def.innerType));
});
function de(e) {
  return new Or({ type: "nullable", innerType: e });
}
function ua(e) {
  return pe(de(e));
}
var zr = n("ZodDefault", (e, o) => {
  (_t.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => ei(e, r, c, t)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeDefault = e.unwrap));
});
function Er(e, o) {
  return new zr({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof o == "function" ? o() : p.shallowClone(o);
    },
  });
}
var Pr = n("ZodPrefault", (e, o) => {
  (kt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => oi(e, r, c, t)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Nr(e, o) {
  return new Pr({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof o == "function" ? o() : p.shallowClone(o);
    },
  });
}
var ro = n("ZodNonOptional", (e, o) => {
  (gt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Qn(e, r, c, t)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Tr(e, o) {
  return new ro({ type: "nonoptional", innerType: e, ...p.normalizeParams(o) });
}
var Ar = n("ZodSuccess", (e, o) => {
  (Zt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => Cn(e, r, c, t)),
    (e.unwrap = () => e._zod.def.innerType));
});
function sa(e) {
  return new Ar({ type: "success", innerType: e });
}
var Dr = n("ZodCatch", (e, o) => {
  (St.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => ri(e, r, c, t)),
    (e.unwrap = () => e._zod.def.innerType),
    (e.removeCatch = e.unwrap));
});
function jr(e, o) {
  return new Dr({ type: "catch", innerType: e, catchValue: typeof o == "function" ? o : () => o });
}
var Rr = n("ZodNaN", (e, o) => {
  ($t.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => Ln(e, r, c, t)));
});
function pa(e) {
  return fn(Rr, e);
}
var co = n("ZodPipe", (e, o) => {
  (bt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => ci(e, r, c, t)),
    (e.in = o.in),
    (e.out = o.out));
});
function le(e, o) {
  return new co({ type: "pipe", in: e, out: o });
}
var to = n("ZodCodec", (e, o) => {
  (co.init(e, o), vt.init(e, o));
});
function da(e, o, r) {
  return new to({ type: "pipe", in: e, out: o, transform: r.decode, reverseTransform: r.encode });
}
var Lr = n("ZodReadonly", (e, o) => {
  (wt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => ti(e, r, c, t)),
    (e.unwrap = () => e._zod.def.innerType));
});
function Jr(e) {
  return new Lr({ type: "readonly", innerType: e });
}
var Ur = n("ZodTemplateLiteral", (e, o) => {
  (It.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => Jn(e, r, c, t)));
});
function la(e, o) {
  return new Ur({ type: "template_literal", parts: e, ...p.normalizeParams(o) });
}
var Cr = n("ZodLazy", (e, o) => {
  (Et.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => ii(e, r, c, t)),
    (e.unwrap = () => e._zod.def.getter()));
});
function Fr(e) {
  return new Cr({ type: "lazy", getter: e });
}
var Mr = n("ZodPromise", (e, o) => {
  (zt.init(e, o),
    u.init(e, o),
    (e._zod.processJSONSchema = (r, c, t) => ni(e, r, c, t)),
    (e.unwrap = () => e._zod.def.innerType));
});
function ma(e) {
  return new Mr({ type: "promise", innerType: e });
}
var Vr = n("ZodFunction", (e, o) => {
  (Ot.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => Mn(e, r, c, t)));
});
function fa(e) {
  return new Vr({
    type: "function",
    input: Array.isArray(e?.input) ? kr(e?.input) : (e?.input ?? he(N())),
    output: e?.output ?? N(),
  });
}
var ke = n("ZodCustom", (e, o) => {
  (Pt.init(e, o), u.init(e, o), (e._zod.processJSONSchema = (r, c, t) => Fn(e, r, c, t)));
});
function ha(e) {
  let o = new hc({ check: "custom" });
  return ((o._zod.check = e), o);
}
function ya(e, o) {
  return xn(ke, e ?? (() => !0), o);
}
function Br(e, o = {}) {
  return _n(ke, e, o);
}
function Kr(e) {
  return kn(e);
}
var xa = gn,
  _a = Zn;
function ka(e, o = {}) {
  let r = new ke({
    type: "custom",
    check: "custom",
    fn: (c) => c instanceof e,
    abort: !0,
    ...p.normalizeParams(o),
  });
  return (
    (r._zod.bag.Class = e),
    (r._zod.check = (c) => {
      c.value instanceof e ||
        c.issues.push({
          code: "invalid_type",
          expected: e.name,
          input: c.value,
          inst: r,
          path: [...(r._zod.def.path ?? [])],
        });
    }),
    r
  );
}
var ga = (...e) => Sn({ Codec: to, Boolean: M, String: U }, ...e);
function Za(e) {
  let o = Fr(() => He([Pe(e), cr(), tr(), ur(), he(o), gr(Pe(), o)]));
  return o;
}
function Sa(e, o) {
  return le(eo(e), o);
}
var Ta = {
  invalid_type: "invalid_type",
  too_big: "too_big",
  too_small: "too_small",
  invalid_format: "invalid_format",
  not_multiple_of: "not_multiple_of",
  unrecognized_keys: "unrecognized_keys",
  invalid_union: "invalid_union",
  invalid_key: "invalid_key",
  invalid_element: "invalid_element",
  invalid_value: "invalid_value",
  custom: "custom",
};
function Aa(e) {
  $({ customError: e });
}
function Da() {
  return $().customError;
}
var Wr;
Wr || (Wr = {});
var i = { ...ue, ...we, iso: L },
  ja = new Set([
    "$schema",
    "$ref",
    "$defs",
    "definitions",
    "$id",
    "id",
    "$comment",
    "$anchor",
    "$vocabulary",
    "$dynamicRef",
    "$dynamicAnchor",
    "type",
    "enum",
    "const",
    "anyOf",
    "oneOf",
    "allOf",
    "not",
    "properties",
    "required",
    "additionalProperties",
    "patternProperties",
    "propertyNames",
    "minProperties",
    "maxProperties",
    "items",
    "prefixItems",
    "additionalItems",
    "minItems",
    "maxItems",
    "uniqueItems",
    "contains",
    "minContains",
    "maxContains",
    "minLength",
    "maxLength",
    "pattern",
    "format",
    "minimum",
    "maximum",
    "exclusiveMinimum",
    "exclusiveMaximum",
    "multipleOf",
    "description",
    "default",
    "contentEncoding",
    "contentMediaType",
    "contentSchema",
    "unevaluatedItems",
    "unevaluatedProperties",
    "if",
    "then",
    "else",
    "dependentSchemas",
    "dependentRequired",
    "nullable",
    "readOnly",
  ]);
function Ra(e, o) {
  let r = e.$schema;
  return r === "https://json-schema.org/draft/2020-12/schema"
    ? "draft-2020-12"
    : r === "http://json-schema.org/draft-07/schema#"
      ? "draft-7"
      : r === "http://json-schema.org/draft-04/schema#"
        ? "draft-4"
        : (o ?? "draft-2020-12");
}
function La(e, o) {
  if (!e.startsWith("#"))
    throw new Error("External $ref is not supported, only local refs (#/...) are allowed");
  let r = e.slice(1).split("/").filter(Boolean);
  if (r.length === 0) return o.rootSchema;
  let c = o.version === "draft-2020-12" ? "$defs" : "definitions";
  if (r[0] === c) {
    let t = r[1];
    if (!t || !o.defs[t]) throw new Error(`Reference not found: ${e}`);
    return o.defs[t];
  }
  throw new Error(`Reference not found: ${e}`);
}
function $a(e, o) {
  if (e.not !== void 0) {
    if (typeof e.not == "object" && Object.keys(e.not).length === 0) return i.never();
    throw new Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (e.unevaluatedItems !== void 0) throw new Error("unevaluatedItems is not supported");
  if (e.unevaluatedProperties !== void 0) throw new Error("unevaluatedProperties is not supported");
  if (e.if !== void 0 || e.then !== void 0 || e.else !== void 0)
    throw new Error("Conditional schemas (if/then/else) are not supported");
  if (e.dependentSchemas !== void 0 || e.dependentRequired !== void 0)
    throw new Error("dependentSchemas and dependentRequired are not supported");
  if (e.$ref) {
    let t = e.$ref;
    if (o.refs.has(t)) return o.refs.get(t);
    if (o.processing.has(t))
      return i.lazy(() => {
        if (!o.refs.has(t)) throw new Error(`Circular reference not resolved: ${t}`);
        return o.refs.get(t);
      });
    o.processing.add(t);
    let a = La(t, o),
      s = f(a, o);
    return (o.refs.set(t, s), o.processing.delete(t), s);
  }
  if (e.enum !== void 0) {
    let t = e.enum;
    if (o.version === "openapi-3.0" && e.nullable === !0 && t.length === 1 && t[0] === null)
      return i.null();
    if (t.length === 0) return i.never();
    if (t.length === 1) return i.literal(t[0]);
    if (t.every((s) => typeof s == "string")) return i.enum(t);
    let a = t.map((s) => i.literal(s));
    return a.length < 2 ? a[0] : i.union([a[0], a[1], ...a.slice(2)]);
  }
  if (e.const !== void 0) return i.literal(e.const);
  let r = e.type;
  if (Array.isArray(r)) {
    let t = r.map((a) => {
      let s = { ...e, type: a };
      return $a(s, o);
    });
    return t.length === 0 ? i.never() : t.length === 1 ? t[0] : i.union(t);
  }
  if (!r) return i.any();
  let c;
  switch (r) {
    case "string": {
      let t = i.string();
      if (e.format) {
        let a = e.format;
        a === "email"
          ? (t = t.check(i.email()))
          : a === "uri" || a === "uri-reference"
            ? (t = t.check(i.url()))
            : a === "uuid" || a === "guid"
              ? (t = t.check(i.uuid()))
              : a === "date-time"
                ? (t = t.check(i.iso.datetime()))
                : a === "date"
                  ? (t = t.check(i.iso.date()))
                  : a === "time"
                    ? (t = t.check(i.iso.time()))
                    : a === "duration"
                      ? (t = t.check(i.iso.duration()))
                      : a === "ipv4"
                        ? (t = t.check(i.ipv4()))
                        : a === "ipv6"
                          ? (t = t.check(i.ipv6()))
                          : a === "mac"
                            ? (t = t.check(i.mac()))
                            : a === "cidr"
                              ? (t = t.check(i.cidrv4()))
                              : a === "cidr-v6"
                                ? (t = t.check(i.cidrv6()))
                                : a === "base64"
                                  ? (t = t.check(i.base64()))
                                  : a === "base64url"
                                    ? (t = t.check(i.base64url()))
                                    : a === "e164"
                                      ? (t = t.check(i.e164()))
                                      : a === "jwt"
                                        ? (t = t.check(i.jwt()))
                                        : a === "emoji"
                                          ? (t = t.check(i.emoji()))
                                          : a === "nanoid"
                                            ? (t = t.check(i.nanoid()))
                                            : a === "cuid"
                                              ? (t = t.check(i.cuid()))
                                              : a === "cuid2"
                                                ? (t = t.check(i.cuid2()))
                                                : a === "ulid"
                                                  ? (t = t.check(i.ulid()))
                                                  : a === "xid"
                                                    ? (t = t.check(i.xid()))
                                                    : a === "ksuid" && (t = t.check(i.ksuid()));
      }
      (typeof e.minLength == "number" && (t = t.min(e.minLength)),
        typeof e.maxLength == "number" && (t = t.max(e.maxLength)),
        e.pattern && (t = t.regex(new RegExp(e.pattern))),
        (c = t));
      break;
    }
    case "number":
    case "integer": {
      let t = r === "integer" ? i.number().int() : i.number();
      (typeof e.minimum == "number" && (t = t.min(e.minimum)),
        typeof e.maximum == "number" && (t = t.max(e.maximum)),
        typeof e.exclusiveMinimum == "number"
          ? (t = t.gt(e.exclusiveMinimum))
          : e.exclusiveMinimum === !0 && typeof e.minimum == "number" && (t = t.gt(e.minimum)),
        typeof e.exclusiveMaximum == "number"
          ? (t = t.lt(e.exclusiveMaximum))
          : e.exclusiveMaximum === !0 && typeof e.maximum == "number" && (t = t.lt(e.maximum)),
        typeof e.multipleOf == "number" && (t = t.multipleOf(e.multipleOf)),
        (c = t));
      break;
    }
    case "boolean": {
      c = i.boolean();
      break;
    }
    case "null": {
      c = i.null();
      break;
    }
    case "object": {
      let t = {},
        a = e.properties || {},
        s = new Set(e.required || []);
      for (let [m, h] of Object.entries(a)) {
        let O = f(h, o);
        t[m] = s.has(m) ? O : O.optional();
      }
      if (e.propertyNames) {
        let m = f(e.propertyNames, o),
          h =
            e.additionalProperties && typeof e.additionalProperties == "object"
              ? f(e.additionalProperties, o)
              : i.any();
        if (Object.keys(t).length === 0) {
          c = i.record(m, h);
          break;
        }
        let O = i.object(t).passthrough(),
          _ = i.looseRecord(m, h);
        c = i.intersection(O, _);
        break;
      }
      if (e.patternProperties) {
        let m = e.patternProperties,
          h = Object.keys(m),
          O = [];
        for (let A of h) {
          let B = f(m[A], o),
            wa = i.string().regex(new RegExp(A));
          O.push(i.looseRecord(wa, B));
        }
        let _ = [];
        if (
          (Object.keys(t).length > 0 && _.push(i.object(t).passthrough()),
          _.push(...O),
          _.length === 0)
        )
          c = i.object({}).passthrough();
        else if (_.length === 1) c = _[0];
        else {
          let A = i.intersection(_[0], _[1]);
          for (let B = 2; B < _.length; B++) A = i.intersection(A, _[B]);
          c = A;
        }
        break;
      }
      let d = i.object(t);
      e.additionalProperties === !1
        ? (c = d.strict())
        : typeof e.additionalProperties == "object"
          ? (c = d.catchall(f(e.additionalProperties, o)))
          : (c = d.passthrough());
      break;
    }
    case "array": {
      let t = e.prefixItems,
        a = e.items;
      if (t && Array.isArray(t)) {
        let s = t.map((m) => f(m, o)),
          d = a && typeof a == "object" && !Array.isArray(a) ? f(a, o) : void 0;
        (d ? (c = i.tuple(s).rest(d)) : (c = i.tuple(s)),
          typeof e.minItems == "number" && (c = c.check(i.minLength(e.minItems))),
          typeof e.maxItems == "number" && (c = c.check(i.maxLength(e.maxItems))));
      } else if (Array.isArray(a)) {
        let s = a.map((m) => f(m, o)),
          d =
            e.additionalItems && typeof e.additionalItems == "object"
              ? f(e.additionalItems, o)
              : void 0;
        (d ? (c = i.tuple(s).rest(d)) : (c = i.tuple(s)),
          typeof e.minItems == "number" && (c = c.check(i.minLength(e.minItems))),
          typeof e.maxItems == "number" && (c = c.check(i.maxLength(e.maxItems))));
      } else if (a !== void 0) {
        let s = f(a, o),
          d = i.array(s);
        (typeof e.minItems == "number" && (d = d.min(e.minItems)),
          typeof e.maxItems == "number" && (d = d.max(e.maxItems)),
          (c = d));
      } else c = i.array(i.any());
      break;
    }
    default:
      throw new Error(`Unsupported type: ${r}`);
  }
  return (
    e.description && (c = c.describe(e.description)),
    e.default !== void 0 && (c = c.default(e.default)),
    c
  );
}
function f(e, o) {
  if (typeof e == "boolean") return e ? i.any() : i.never();
  let r = $a(e, o),
    c = e.type || e.enum !== void 0 || e.const !== void 0;
  if (e.anyOf && Array.isArray(e.anyOf)) {
    let d = e.anyOf.map((h) => f(h, o)),
      m = i.union(d);
    r = c ? i.intersection(r, m) : m;
  }
  if (e.oneOf && Array.isArray(e.oneOf)) {
    let d = e.oneOf.map((h) => f(h, o)),
      m = i.xor(d);
    r = c ? i.intersection(r, m) : m;
  }
  if (e.allOf && Array.isArray(e.allOf))
    if (e.allOf.length === 0) r = c ? r : i.any();
    else {
      let d = c ? r : f(e.allOf[0], o),
        m = c ? 0 : 1;
      for (let h = m; h < e.allOf.length; h++) d = i.intersection(d, f(e.allOf[h], o));
      r = d;
    }
  (e.nullable === !0 && o.version === "openapi-3.0" && (r = i.nullable(r)),
    e.readOnly === !0 && (r = i.readonly(r)));
  let t = {},
    a = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (let d of a) d in e && (t[d] = e[d]);
  let s = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (let d of s) d in e && (t[d] = e[d]);
  for (let d of Object.keys(e)) ja.has(d) || (t[d] = e[d]);
  return (Object.keys(t).length > 0 && o.registry.add(r, t), r);
}
function ba(e, o) {
  if (typeof e == "boolean") return e ? i.any() : i.never();
  let r = Ra(e, o?.defaultTarget),
    c = e.$defs || e.definitions || {},
    t = {
      version: r,
      defs: c,
      refs: new Map(),
      processing: new Set(),
      rootSchema: e,
      registry: o?.registry ?? Z,
    };
  return f(e, t);
}
var qr = {};
K(qr, { bigint: () => Fa, boolean: () => Ca, date: () => Ma, number: () => Ua, string: () => Ja });
function Ja(e) {
  return Lt(U, e);
}
function Ua(e) {
  return Kt(F, e);
}
function Ca(e) {
  return Qt(M, e);
}
function Fa(e) {
  return on(V, e);
}
function Ma(e) {
  return mn(fe, e);
}
$(Nt());
var va = Yr;
var Ou = va;
var Xr = class {
  constructor(o) {
    this.value = o;
  }
  value;
};
function Nu(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
function Tu(e) {
  return no(e);
}
function Au(e) {
  return Gr(e);
}
function no(e) {
  if (e instanceof Xr) return no(e.value);
  if (e === null || typeof e == "string" || typeof e == "boolean") return e;
  if (typeof e == "number")
    return (
      ge(Number.isFinite(e), () => `Inline atomic values only support finite numbers, got ${e}`),
      e === 0 ? 0 : e
    );
  if (Array.isArray(e))
    return e.map(
      (r) => (ge(r !== void 0, "Inline atomic values can't contain undefined array items"), no(r))
    );
  ge(Va(e), () => `Inline atomic values only support plain JSON, got ${String(e)}`);
  let o = {};
  for (let r in e) {
    let c = e[r];
    c !== void 0 && (o[r] = no(c));
  }
  return o;
}
function Gr(e) {
  if (typeof e != "object" || e === null) return e;
  if (Array.isArray(e)) return e.map(Gr);
  let o = {};
  for (let r in e) o[r] = Gr(e[r]);
  return o;
}
function Va(e) {
  if (typeof e != "object" || e === null) return !1;
  let o = Object.getPrototypeOf(e);
  return o === Object.prototype || o === null;
}
export {
  Xr as a,
  Nu as b,
  Tu as c,
  Au as d,
  Ba as e,
  Ia as f,
  Oa as g,
  Wa as h,
  za as i,
  qa as j,
  Ya as k,
  Xa as l,
  Qa as m,
  eu as n,
  ou as o,
  Mo as p,
  Yr as q,
  Ou as r,
};
//# sourceMappingURL=chunk-3WES2374.mjs.map
