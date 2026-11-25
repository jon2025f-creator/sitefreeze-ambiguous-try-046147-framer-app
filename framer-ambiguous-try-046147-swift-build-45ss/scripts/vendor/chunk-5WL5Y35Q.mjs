var A =
  /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
function N(t) {
  return typeof t == "string" && A.test(t);
}
var u = N;
var M = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  U = { randomUUID: M };
var y,
  V = new Uint8Array(16);
function v() {
  if (!y) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error(
        "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
      );
    y = crypto.getRandomValues.bind(crypto);
  }
  return y(V);
}
var i = [];
for (let t = 0; t < 256; ++t) i.push((t + 256).toString(16).slice(1));
function g(t, e = 0) {
  return (
    i[t[e + 0]] +
    i[t[e + 1]] +
    i[t[e + 2]] +
    i[t[e + 3]] +
    "-" +
    i[t[e + 4]] +
    i[t[e + 5]] +
    "-" +
    i[t[e + 6]] +
    i[t[e + 7]] +
    "-" +
    i[t[e + 8]] +
    i[t[e + 9]] +
    "-" +
    i[t[e + 10]] +
    i[t[e + 11]] +
    i[t[e + 12]] +
    i[t[e + 13]] +
    i[t[e + 14]] +
    i[t[e + 15]]
  ).toLowerCase();
}
function $(t, e, r) {
  if (U.randomUUID && !e && !t) return U.randomUUID();
  t = t || {};
  let n = t.random ?? t.rng?.() ?? v();
  if (n.length < 16) throw new Error("Random bytes length must be >= 16");
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), e)) {
    if (((r = r || 0), r < 0 || r + 16 > e.length))
      throw new RangeError(`UUID byte range ${r}:${r + 15} is out of buffer bounds`);
    for (let p = 0; p < 16; ++p) e[r + p] = n[p];
    return e;
  }
  return g(n);
}
var B = $;
function C(t) {
  if (!u(t)) throw TypeError("Invalid UUID");
  return parseInt(t.slice(14, 15), 16);
}
var j = C;
function H(t) {
  if (!u(t)) throw TypeError("Invalid UUID");
  let e;
  return Uint8Array.of(
    (e = parseInt(t.slice(0, 8), 16)) >>> 24,
    (e >>> 16) & 255,
    (e >>> 8) & 255,
    e & 255,
    (e = parseInt(t.slice(9, 13), 16)) >>> 8,
    e & 255,
    (e = parseInt(t.slice(14, 18), 16)) >>> 8,
    e & 255,
    (e = parseInt(t.slice(19, 23), 16)) >>> 8,
    e & 255,
    ((e = parseInt(t.slice(24, 36), 16)) / 1099511627776) & 255,
    (e / 4294967296) & 255,
    (e >>> 24) & 255,
    (e >>> 16) & 255,
    (e >>> 8) & 255,
    e & 255
  );
}
var w = H;
function X(t) {
  t = unescape(encodeURIComponent(t));
  let e = new Uint8Array(t.length);
  for (let r = 0; r < t.length; ++r) e[r] = t.charCodeAt(r);
  return e;
}
var E = "6ba7b810-9dad-11d1-80b4-00c04fd430c8",
  S = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
function I(t, e, r, n, p, l) {
  let c = typeof r == "string" ? X(r) : r,
    d = typeof n == "string" ? w(n) : n;
  if ((typeof n == "string" && (n = w(n)), n?.length !== 16))
    throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
  let o = new Uint8Array(16 + c.length);
  if (
    (o.set(d),
    o.set(c, d.length),
    (o = e(o)),
    (o[6] = (o[6] & 15) | t),
    (o[8] = (o[8] & 63) | 128),
    p)
  ) {
    if (((l = l || 0), l < 0 || l + 16 > p.length))
      throw new RangeError(`UUID byte range ${l}:${l + 15} is out of buffer bounds`);
    for (let f = 0; f < 16; ++f) p[l + f] = o[f];
    return p;
  }
  return g(o);
}
function k(t, e, r, n) {
  switch (t) {
    case 0:
      return (e & r) ^ (~e & n);
    case 1:
      return e ^ r ^ n;
    case 2:
      return (e & r) ^ (e & n) ^ (r & n);
    case 3:
      return e ^ r ^ n;
  }
}
function D(t, e) {
  return (t << e) | (t >>> (32 - e));
}
function G(t) {
  let e = [1518500249, 1859775393, 2400959708, 3395469782],
    r = [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
    n = new Uint8Array(t.length + 1);
  (n.set(t), (n[t.length] = 128), (t = n));
  let p = t.length / 4 + 2,
    l = Math.ceil(p / 16),
    c = new Array(l);
  for (let d = 0; d < l; ++d) {
    let o = new Uint32Array(16);
    for (let f = 0; f < 16; ++f)
      o[f] =
        (t[d * 64 + f * 4] << 24) |
        (t[d * 64 + f * 4 + 1] << 16) |
        (t[d * 64 + f * 4 + 2] << 8) |
        t[d * 64 + f * 4 + 3];
    c[d] = o;
  }
  ((c[l - 1][14] = ((t.length - 1) * 8) / Math.pow(2, 32)),
    (c[l - 1][14] = Math.floor(c[l - 1][14])),
    (c[l - 1][15] = ((t.length - 1) * 8) & 4294967295));
  for (let d = 0; d < l; ++d) {
    let o = new Uint32Array(80);
    for (let a = 0; a < 16; ++a) o[a] = c[d][a];
    for (let a = 16; a < 80; ++a) o[a] = D(o[a - 3] ^ o[a - 8] ^ o[a - 14] ^ o[a - 16], 1);
    let f = r[0],
      x = r[1],
      s = r[2],
      m = r[3],
      h = r[4];
    for (let a = 0; a < 80; ++a) {
      let b = Math.floor(a / 20),
        L = (D(f, 5) + k(b, x, s, m) + h + e[b] + o[a]) >>> 0;
      ((h = m), (m = s), (s = D(x, 30) >>> 0), (x = f), (f = L));
    }
    ((r[0] = (r[0] + f) >>> 0),
      (r[1] = (r[1] + x) >>> 0),
      (r[2] = (r[2] + s) >>> 0),
      (r[3] = (r[3] + m) >>> 0),
      (r[4] = (r[4] + h) >>> 0));
  }
  return Uint8Array.of(
    r[0] >> 24,
    r[0] >> 16,
    r[0] >> 8,
    r[0],
    r[1] >> 24,
    r[1] >> 16,
    r[1] >> 8,
    r[1],
    r[2] >> 24,
    r[2] >> 16,
    r[2] >> 8,
    r[2],
    r[3] >> 24,
    r[3] >> 16,
    r[3] >> 8,
    r[3],
    r[4] >> 24,
    r[4] >> 16,
    r[4] >> 8,
    r[4]
  );
}
var T = G;
function R(t, e, r, n) {
  return I(80, T, t, e, r, n);
}
R.DNS = E;
R.URL = S;
var K = R;
export { u as a, B as b, K as c, j as d };
//# sourceMappingURL=chunk-5WL5Y35Q.mjs.map
