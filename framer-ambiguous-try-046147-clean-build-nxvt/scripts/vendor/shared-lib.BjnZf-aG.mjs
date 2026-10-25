import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as n,
  C as r,
  D as i,
  I as a,
  M as o,
  N as s,
  R as c,
  T as l,
  b as u,
  c as d,
  g as f,
  k as p,
  l as m,
  o as h,
  s as g,
  v as _,
  y as ee,
} from "./react.D20wc1Tc.mjs";
import { a as te, r as ne, t as re, x as v } from "./motion.DQ9lNKau.mjs";
import {
  B as ie,
  D as ae,
  H as oe,
  J as se,
  K as ce,
  R as le,
  S as y,
  U as ue,
  V as de,
  W as fe,
  X as pe,
  Y as me,
  d as he,
  f as ge,
  g as _e,
  o as ve,
  p as ye,
  q as be,
  r as xe,
  t as Se,
  u as Ce,
} from "./framer.Cz39Y8li.mjs";
function b(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function we(e) {
  return R.call(Xn, e) ? !0 : R.call(Yn, e) ? !1 : Jn.test(e) ? (Xn[e] = !0) : ((Yn[e] = !0), !1);
}
function x(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function Te(e) {
  return e[1].toUpperCase();
}
function S(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = er.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      (i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t));
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function C(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function Ee(e, t, n) {
  switch (t) {
    case `select`:
      return C(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return C(2, null);
    case `math`:
      return C(3, null);
    case `foreignObject`:
      return C(1, null);
    case `table`:
      return C(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return C(5, null);
    case `colgroup`:
      return C(7, null);
    case `tr`:
      return C(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? C(1, null) : e;
}
function De(e, t, n) {
  if (typeof n != `object`) throw Error(b(62));
  for (var r in ((t = !0), n))
    if (R.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = S(r);
          i = S((`` + i).trim());
        } else {
          a = r;
          var o = ir.get(a);
          (o !== void 0 ||
            ((o = S(a.replace(tr, `-$1`).toLowerCase().replace(nr, `-ms-`))), ir.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || R.call(Qn, r)
                  ? `` + i
                  : i + `px`
                : S((`` + i).trim())));
        }
        t ? ((t = !1), e.push(` style="`, a, `:`, i)) : e.push(`;`, a, `:`, i);
      }
    }
  t || e.push(`"`);
}
function w(e, t, n, r) {
  switch (n) {
    case `style`:
      De(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = z.hasOwnProperty(n) ? z[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = t.attributeName), t.type)) {
        case 3:
          r && e.push(` `, n, `=""`);
          break;
        case 4:
          !0 === r ? e.push(` `, n, `=""`) : !1 !== r && e.push(` `, n, `="`, S(r), `"`);
          break;
        case 5:
          isNaN(r) || e.push(` `, n, `="`, S(r), `"`);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(` `, n, `="`, S(r), `"`);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(` `, n, `="`, S(r), `"`));
      }
    } else if (we(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(` `, n, `="`, S(r), `"`);
    }
  }
}
function Oe(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(b(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(b(61));
    ((t = t.__html), t != null && e.push(`` + t));
  }
}
function ke(e) {
  var t = ``;
  return (
    qn.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Ae(e, t, n, r) {
  e.push(T(n));
  var i,
    a = (n = null);
  for (i in t)
    if (R.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            w(e, r, i, o);
        }
    }
  return (e.push(`>`), Oe(e, a, n), typeof n == `string` ? (e.push(S(n)), null) : n);
}
function T(e) {
  var t = or.get(e);
  if (t === void 0) {
    if (!ar.test(e)) throw Error(b(65, e));
    ((t = `<` + e), or.set(e, t));
  }
  return t;
}
function je(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(T(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (R.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                w(e, r, u, s);
            }
        }
      return (e.push(`>`), Oe(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(T(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (R.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                w(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? ke(s) : `` + c), rr(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(` selected=""`);
              break;
            }
        } else `` + o === n && e.push(` selected=""`);
      else l && e.push(` selected=""`);
      return (e.push(`>`), Oe(e, u, s), s);
    case `textarea`:
      for (s in (e.push(T(`textarea`)), (u = o = a = null), n))
        if (R.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(b(91));
            default:
              w(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(`>`), u != null)) {
        if (a != null) throw Error(b(92));
        if (rr(u) && 1 < u.length) throw Error(b(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a !== null && e.push(S(`` + a)),
        null
      );
    case `input`:
      for (o in (e.push(T(`input`)), (c = u = s = a = null), n))
        if (R.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(b(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              w(e, r, o, l);
          }
      return (
        u === null ? c !== null && w(e, r, `checked`, c) : w(e, r, `checked`, u),
        a === null ? s !== null && w(e, r, `value`, s) : w(e, r, `value`, a),
        e.push(`/>`),
        null
      );
    case `menuitem`:
      for (var f in (e.push(T(`menuitem`)), n))
        if (R.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(b(400));
            default:
              w(e, r, f, a);
          }
      return (e.push(`>`), null);
    case `title`:
      for (d in (e.push(T(`title`)), (a = null), n))
        if (R.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(b(434));
            default:
              w(e, r, d, o);
          }
      return (e.push(`>`), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(T(t)), (o = a = null), n))
        if (R.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              w(e, r, c, s);
          }
      if ((e.push(`>`), o != null)) {
        if (a != null) throw Error(b(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(b(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(
                  `
`,
                  n
                )
              : e.push(`` + n)));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(`
`),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(T(t)), n))
        if (R.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(b(399, t));
            default:
              w(e, r, p, a);
          }
      return (e.push(`/>`), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return Ae(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(`<!DOCTYPE html>`), Ae(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Ae(e, n, t, r);
      for (l in (e.push(T(t)), (o = a = null), n))
        if (R.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              De(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              we(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(` `, l, `="`, S(s), `"`);
          }
      return (e.push(`>`), Oe(e, o, a), a);
  }
}
function Me(e, t, n) {
  if ((e.push(`<!--$?--><template id="`), n === null)) throw Error(b(395));
  return (e.push(n), e.push(`"></template>`));
}
function Ne(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (
        e.push(`<div hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 2:
      return (
        e.push(`<svg aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 3:
      return (
        e.push(`<math aria-hidden="true" style="display:none" id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 4:
      return (
        e.push(`<table hidden id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 5:
      return (
        e.push(`<table hidden><tbody id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 6:
      return (
        e.push(`<table hidden><tr id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    case 7:
      return (
        e.push(`<table hidden><colgroup id="`),
        e.push(t.segmentPrefix),
        (t = r.toString(16)),
        e.push(t),
        e.push(`">`)
      );
    default:
      throw Error(b(397));
  }
}
function Pe(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return e.push(`</div>`);
    case 2:
      return e.push(`</svg>`);
    case 3:
      return e.push(`</math>`);
    case 4:
      return e.push(`</table>`);
    case 5:
      return e.push(`</tbody></table>`);
    case 6:
      return e.push(`</tr></table>`);
    case 7:
      return e.push(`</colgroup></table>`);
    default:
      throw Error(b(397));
  }
}
function Fe(e) {
  return JSON.stringify(e).replace(sr, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`
        );
    }
  });
}
function Ie(e, t) {
  return (
    (t = t === void 0 ? `` : t),
    {
      bootstrapChunks: [],
      startInlineScript: `<script>`,
      placeholderPrefix: t + `P:`,
      segmentPrefix: t + `S:`,
      boundaryPrefix: t + `B:`,
      idPrefix: t,
      nextSuspenseID: 0,
      sentCompleteSegmentFunction: !1,
      sentCompleteBoundaryFunction: !1,
      sentClientRenderFunction: !1,
      generateStaticMarkup: e,
    }
  );
}
function Le(e, t, n, r) {
  return n.generateStaticMarkup
    ? (e.push(S(t)), !1)
    : (t === `` ? (e = r) : (r && e.push(`<!-- -->`), e.push(S(t)), (e = !0)), e);
}
function Re(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case dr:
      return `Fragment`;
    case ur:
      return `Portal`;
    case pr:
      return `Profiler`;
    case fr:
      return `StrictMode`;
    case _r:
      return `Suspense`;
    case vr:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case hr:
        return (e.displayName || `Context`) + `.Consumer`;
      case mr:
        return (e._context.displayName || `Context`) + `.Provider`;
      case gr:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case yr:
        return ((t = e.displayName || null), t === null ? Re(e.type) || `Memo` : t);
      case br:
        ((t = e._payload), (e = e._init));
        try {
          return Re(e(t));
        } catch {}
    }
  return null;
}
function ze(e, t) {
  if (((e = e.contextTypes), !e)) return Er;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function Be(e, t) {
  if (e !== t) {
    ((e.context._currentValue2 = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(b(401));
    } else {
      if (n === null) throw Error(b(401));
      Be(e, n);
    }
    t.context._currentValue2 = t.value;
  }
}
function Ve(e) {
  ((e.context._currentValue2 = e.parentValue), (e = e.parent), e !== null && Ve(e));
}
function He(e) {
  var t = e.parent;
  (t !== null && He(t), (e.context._currentValue2 = e.value));
}
function Ue(e, t) {
  if (((e.context._currentValue2 = e.parentValue), (e = e.parent), e === null)) throw Error(b(402));
  e.depth === t.depth ? Be(e, t) : Ue(e, t);
}
function We(e, t) {
  var n = t.parent;
  if (n === null) throw Error(b(402));
  (e.depth === n.depth ? Be(e, n) : We(e, n), (t.context._currentValue2 = t.value));
}
function Ge(e) {
  var t = B;
  t !== e &&
    (t === null
      ? He(e)
      : e === null
        ? Ve(t)
        : t.depth === e.depth
          ? Be(t, e)
          : t.depth > e.depth
            ? Ue(t, e)
            : We(t, e),
    (B = e));
}
function Ke(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Dr), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue2 : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : cr({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && Dr.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = cr({}, a, s))) : cr(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function qe(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - kr(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - kr(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - kr(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function Je(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Ar(e) / jr) | 0)) | 0);
}
function Ye(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function Xe() {
  if (V === null) throw Error(b(321));
  return V;
}
function Ze() {
  if (0 < Rr) throw Error(b(312));
  return { memoizedState: null, queue: null, next: null };
}
function Qe() {
  return (
    H === null
      ? Pr === null
        ? ((Fr = !1), (Pr = H = Ze()))
        : ((Fr = !0), (H = Pr))
      : H.next === null
        ? ((Fr = !1), (H = H.next = Ze()))
        : ((Fr = !0), (H = H.next)),
    H
  );
}
function $e() {
  ((Nr = V = null), (Ir = !1), (Pr = null), (Rr = 0), (H = U = null));
}
function et(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function tt(e, t, n) {
  if (((V = Xe()), (H = Qe()), Fr)) {
    var r = H.queue;
    if (((t = r.dispatch), U !== null && ((n = U.get(r)), n !== void 0))) {
      (U.delete(r), (r = H.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((H.memoizedState = r), [r, t]);
    }
    return [H.memoizedState, t];
  }
  return (
    (e = e === et ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (H.memoizedState = e),
    (e = H.queue = { last: null, dispatch: null }),
    (e = e.dispatch = rt.bind(null, V, e)),
    [H.memoizedState, e]
  );
}
function nt(e, t) {
  if (((V = Xe()), (H = Qe()), (t = t === void 0 ? null : t), H !== null)) {
    var n = H.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!Mr(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), (H.memoizedState = [e, t]), e);
}
function rt(e, t, n) {
  if (25 <= Rr) throw Error(b(301));
  if (e === V)
    if (
      ((Ir = !0),
      (e = { action: n, next: null }),
      U === null && (U = new Map()),
      (n = U.get(t)),
      n === void 0)
    )
      U.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e;
    }
}
function it() {
  throw Error(b(394));
}
function at() {}
function ot(e) {
  return (console.error(e), null);
}
function st() {}
function ct(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? ot : i,
      onAllReady: a === void 0 ? st : a,
      onShellReady: o === void 0 ? st : o,
      onShellError: s === void 0 ? st : s,
      onFatalError: c === void 0 ? st : c,
    }),
    (n = ut(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = lt(t, e, null, n, u, Er, null, Or)),
    l.push(e),
    t
  );
}
function lt(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && Ct(e));
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return (i.add(c), c);
}
function ut(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function dt(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function ft(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), e.destination.destroy(t)));
}
function pt(e, t, n, r, i) {
  for (V = {}, Nr = t, Lr = 0, e = n(r, i); Ir;)
    ((Ir = !1), (Lr = 0), (Rr += 1), (H = null), (e = n(r, i)));
  return ($e(), e);
}
function mt(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(b(108, Re(r) || `Unknown`, s));
      r = cr({}, o, n);
    }
    ((t.legacyContext = r), E(e, t, i), (t.legacyContext = o));
  } else E(e, t, i);
}
function ht(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = cr({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function gt(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = ze(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue2 : i)),
        Ke(a, n, r, i),
        mt(e, t, a, n));
    } else {
      ((a = ze(n, t.legacyContext)), (i = pt(e, t, n, r, a)));
      var o = Lr !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (Ke(i, n, r, a), mt(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = qe(r, 1, 0)));
        try {
          E(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else E(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case Cr:
        case Sr:
        case fr:
        case pr:
        case dr:
          E(e, t, r.children);
          return;
        case vr:
          E(e, t, r.children);
          return;
        case xr:
          throw Error(b(343));
        case _r:
          e: {
            ((n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set()));
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = ut(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = ut(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (vt(e, t, r),
                e.responseState.generateStaticMarkup ||
                  (l.lastPushedText && l.textEmbedded && l.chunks.push(`<!-- -->`)),
                (l.status = 1),
                xt(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = dt(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = lt(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case gr:
            if (((r = pt(e, t, n.render, r, i)), Lr !== 0)) {
              ((n = t.treeContext), (t.treeContext = qe(n, 1, 0)));
              try {
                E(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else E(e, t, r);
            return;
          case yr:
            ((n = n.type), (r = ht(n, r)), gt(e, t, n, r, i));
            return;
          case mr:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue2),
              (n._currentValue2 = r),
              (o = B),
              (B = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              E(e, t, i),
              (e = B),
              e === null)
            )
              throw Error(b(403));
            ((r = e.parentValue),
              (e.context._currentValue2 = r === wr ? e.context._defaultValue : r),
              (e = B = e.parent),
              (t.context = e));
            return;
          case hr:
            ((r = r.children), (r = r(n._currentValue2)), E(e, t, r));
            return;
          case br:
            ((i = n._init), (n = i(n._payload)), (r = ht(n, r)), gt(e, t, n, r, void 0));
            return;
        }
      throw Error(b(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = je(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Ee(o, n, r)),
      vt(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(`</`, n, `>`);
    }
    i.lastPushedText = !1;
  }
}
function E(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case lr:
        gt(e, t, n.type, n.props, n.ref);
        return;
      case ur:
        throw Error(b(257));
      case br:
        var r = n._init;
        ((n = r(n._payload)), E(e, t, n));
        return;
    }
    if (rr(n)) {
      _t(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Tr && n[Tr]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        _t(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        b(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e)
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Le(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Le(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function _t(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = qe(a, r, i);
    try {
      vt(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function vt(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return E(e, t, n);
  } catch (c) {
    if (($e(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        Ge(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = ut(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = lt(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      Ge(a));
  }
}
function yt(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), St(this, t, e));
}
function bt(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.push(null)))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(b(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return bt(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function xt(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && xt(e, n));
  } else e.completedSegments.push(t);
}
function St(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(b(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = st), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && xt(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(yt, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (xt(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function Ct(e) {
  if (e.status !== 2) {
    var t = B,
      n = Vr.current;
    Vr.current = zr;
    var r = Br;
    Br = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          Ge(o.context);
          try {
            (E(s, o, o.node),
              s.responseState.generateStaticMarkup ||
                (c.lastPushedText && c.textEmbedded && c.chunks.push(`<!-- -->`)),
              o.abortSet.delete(o),
              (c.status = 1),
              St(s, o.blockedBoundary, c));
          } catch (e) {
            if (($e(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = dt(s, d);
              if (
                (u === null
                  ? ft(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      (a.splice(0, i), e.destination !== null && kt(e, e.destination));
    } catch (t) {
      (dt(e, t), ft(e, t));
    } finally {
      ((Br = r), (Vr.current = n), n === zr && Ge(t));
    }
  }
}
function wt(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        t.push(`<template id="`),
        t.push(e.placeholderPrefix),
        (e = r.toString(16)),
        t.push(e),
        t.push(`"></template>`)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) t.push(r[a]);
        i = Tt(e, t, i);
      }
      for (; a < r.length - 1; a++) t.push(r[a]);
      return (a < r.length && (i = t.push(r[a])), i);
    default:
      throw Error(b(390));
  }
}
function Tt(e, t, n) {
  var r = n.boundary;
  if (r === null) return wt(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    return (
      e.responseState.generateStaticMarkup ||
        ((r = r.errorDigest),
        t.push(`<!--$!-->`),
        t.push(`<template`),
        r && (t.push(` data-dgst="`), (r = S(r)), t.push(r), t.push(`"`)),
        t.push(`></template>`)),
      wt(e, t, n),
      (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)),
      e
    );
  if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    return (
      (i = i.boundaryPrefix + a.toString(16)),
      (r = r.id = i),
      Me(t, e.responseState, r),
      wt(e, t, n),
      t.push(`<!--/$-->`)
    );
  }
  if (r.byteSize > e.progressiveChunkSize)
    return (
      (r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      Me(t, e.responseState, r.id),
      wt(e, t, n),
      t.push(`<!--/$-->`)
    );
  if (
    (e.responseState.generateStaticMarkup || t.push(`<!--$-->`),
    (n = r.completedSegments),
    n.length !== 1)
  )
    throw Error(b(391));
  return (Tt(e, t, n[0]), (e = !!e.responseState.generateStaticMarkup || t.push(`<!--/$-->`)), e);
}
function Et(e, t, n) {
  return (Ne(t, e.responseState, n.formatContext, n.id), Tt(e, t, n), Pe(t, n.formatContext));
}
function Dt(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Ot(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    t.push(e.startInlineScript),
    e.sentCompleteBoundaryFunction
      ? t.push(`$RC("`)
      : ((e.sentCompleteBoundaryFunction = !0),
        t.push(
          `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
        )),
    r === null)
  )
    throw Error(b(395));
  return (
    (n = n.toString(16)),
    t.push(r),
    t.push(`","`),
    t.push(e.segmentPrefix),
    t.push(n),
    t.push(`")<\/script>`)
  );
}
function Ot(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(b(392));
    return Et(e, t, r);
  }
  return (
    Et(e, t, r),
    (e = e.responseState),
    t.push(e.startInlineScript),
    e.sentCompleteSegmentFunction
      ? t.push(`$RS("`)
      : ((e.sentCompleteSegmentFunction = !0),
        t.push(
          `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
        )),
    t.push(e.segmentPrefix),
    (i = i.toString(16)),
    t.push(i),
    t.push(`","`),
    t.push(e.placeholderPrefix),
    t.push(i),
    t.push(`")<\/script>`)
  );
}
function kt(e, t) {
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (Tt(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) t.push(r[n]);
      n < r.length && t.push(r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (r.push(s.startInlineScript),
        s.sentClientRenderFunction
          ? r.push(`$RX("`)
          : ((s.sentClientRenderFunction = !0),
            r.push(
              `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
            )),
        c === null)
      )
        throw Error(b(395));
      if ((r.push(c), r.push(`"`), l || u || d)) {
        r.push(`,`);
        var f = Fe(l || ``);
        r.push(f);
      }
      if (u || d) {
        r.push(`,`);
        var p = Fe(u || ``);
        r.push(p);
      }
      if (d) {
        r.push(`,`);
        var m = Fe(d);
        r.push(m);
      }
      if (!r.push(`)<\/script>`)) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var h = e.completedBoundaries;
    for (i = 0; i < h.length; i++)
      if (!Dt(e, t, h[i])) {
        ((e.destination = null), i++, h.splice(0, i));
        return;
      }
    h.splice(0, i);
    var g = e.partialBoundaries;
    for (i = 0; i < g.length; i++) {
      var _ = g[i];
      e: {
        ((a = e), (o = t));
        var ee = _.completedSegments;
        for (s = 0; s < ee.length; s++)
          if (!Ot(a, o, _, ee[s])) {
            (s++, ee.splice(0, s));
            var te = !1;
            break e;
          }
        (ee.splice(0, s), (te = !0));
      }
      if (!te) {
        ((e.destination = null), i++, g.splice(0, i));
        return;
      }
    }
    g.splice(0, i);
    var ne = e.completedBoundaries;
    for (i = 0; i < ne.length; i++)
      if (!Dt(e, t, ne[i])) {
        ((e.destination = null), i++, ne.splice(0, i));
        return;
      }
    ne.splice(0, i);
  } finally {
    e.allPendingTasks === 0 &&
      e.pingedTasks.length === 0 &&
      e.clientRenderedBoundaries.length === 0 &&
      e.completedBoundaries.length === 0 &&
      t.push(null);
  }
}
function At(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return bt(n, e, t);
    }),
      n.clear(),
      e.destination !== null && kt(e, e.destination));
  } catch (t) {
    (dt(e, t), ft(e, t));
  }
}
function jt() {}
function Mt(e, t, n, r) {
  var i = !1,
    a = null,
    o = ``,
    s = {
      push: function (e) {
        return (e !== null && (o += e), !0);
      },
      destroy: function (e) {
        ((i = !0), (a = e));
      },
    },
    c = !1;
  if (
    ((e = ct(
      e,
      Ie(n, t ? t.identifierPrefix : void 0),
      { insertionMode: 1, selectedValue: null },
      1 / 0,
      jt,
      void 0,
      function () {
        c = !0;
      },
      void 0,
      void 0
    )),
    Ct(e),
    At(e, r),
    e.status === 1)
  )
    ((e.status = 2), s.destroy(e.fatalError));
  else if (e.status !== 2 && e.destination === null) {
    e.destination = s;
    try {
      kt(e, s);
    } catch (t) {
      (dt(e, t), ft(e, t));
    }
  }
  if (i) throw a;
  if (!c) throw Error(b(426));
  return o;
}
function D(e) {
  for (
    var t = `https://reactjs.org/docs/error-decoder.html?invariant=` + e, n = 1;
    n < arguments.length;
    n++
  )
    t += `&args[]=` + encodeURIComponent(arguments[n]);
  return (
    `Minified React error #` +
    e +
    `; visit ` +
    t +
    ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
  );
}
function O(e, t) {
  if (t.length !== 0)
    if (512 < t.length)
      (0 < G && (e.enqueue(new Uint8Array(W.buffer, 0, G)), (W = new Uint8Array(512)), (G = 0)),
        e.enqueue(t));
    else {
      var n = W.length - G;
      (n < t.length &&
        (n === 0 ? e.enqueue(W) : (W.set(t.subarray(0, n), G), e.enqueue(W), (t = t.subarray(n))),
        (W = new Uint8Array(512)),
        (G = 0)),
        W.set(t, G),
        (G += t.length));
    }
}
function k(e, t) {
  return (O(e, t), !0);
}
function Nt(e) {
  W && 0 < G && (e.enqueue(new Uint8Array(W.buffer, 0, G)), (W = null), (G = 0));
}
function A(e) {
  return Gr.encode(e);
}
function j(e) {
  return Gr.encode(e);
}
function Pt(e, t) {
  typeof e.error == `function` ? e.error(t) : e.close();
}
function Ft(e) {
  return K.call(Jr, e) ? !0 : K.call(qr, e) ? !1 : Kr.test(e) ? (Jr[e] = !0) : ((qr[e] = !0), !1);
}
function M(e, t, n, r, i, a, o) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = a),
    (this.removeEmptyString = o));
}
function It(e) {
  return e[1].toUpperCase();
}
function N(e) {
  if (typeof e == `boolean` || typeof e == `number`) return `` + e;
  e = `` + e;
  var t = Qr.exec(e);
  if (t) {
    var n,
      r = ``,
      i = 0;
    for (n = t.index; n < e.length; n++) {
      switch (e.charCodeAt(n)) {
        case 34:
          t = `&quot;`;
          break;
        case 38:
          t = `&amp;`;
          break;
        case 39:
          t = `&#x27;`;
          break;
        case 60:
          t = `&lt;`;
          break;
        case 62:
          t = `&gt;`;
          break;
        default:
          continue;
      }
      (i !== n && (r += e.substring(i, n)), (i = n + 1), (r += t));
    }
    e = i === n ? r : r + e.substring(i, n);
  }
  return e;
}
function Lt(e, t, n, r) {
  return t + (n === `s` ? `\\u0073` : `\\u0053`) + r;
}
function Rt(e, t, n, r, i) {
  ((e = e === void 0 ? `` : e), (t = t === void 0 ? ni : j(`<script nonce="` + N(t) + `">`)));
  var a = [];
  if ((n !== void 0 && a.push(t, A((`` + n).replace(si, Lt)), ri), r !== void 0))
    for (n = 0; n < r.length; n++) a.push(ii, A(N(r[n])), oi);
  if (i !== void 0) for (r = 0; r < i.length; r++) a.push(ai, A(N(i[r])), oi);
  return {
    bootstrapChunks: a,
    startInlineScript: t,
    placeholderPrefix: j(e + `P:`),
    segmentPrefix: j(e + `S:`),
    boundaryPrefix: e + `B:`,
    idPrefix: e,
    nextSuspenseID: 0,
    sentCompleteSegmentFunction: !1,
    sentCompleteBoundaryFunction: !1,
    sentClientRenderFunction: !1,
  };
}
function P(e, t) {
  return { insertionMode: e, selectedValue: t };
}
function zt(e) {
  return P(
    e === `http://www.w3.org/2000/svg` ? 2 : e === `http://www.w3.org/1998/Math/MathML` ? 3 : 0,
    null
  );
}
function Bt(e, t, n) {
  switch (t) {
    case `select`:
      return P(1, n.value == null ? n.defaultValue : n.value);
    case `svg`:
      return P(2, null);
    case `math`:
      return P(3, null);
    case `foreignObject`:
      return P(1, null);
    case `table`:
      return P(4, null);
    case `thead`:
    case `tbody`:
    case `tfoot`:
      return P(5, null);
    case `colgroup`:
      return P(7, null);
    case `tr`:
      return P(6, null);
  }
  return 4 <= e.insertionMode || e.insertionMode === 0 ? P(1, null) : e;
}
function Vt(e, t, n, r) {
  return t === `` ? r : (r && e.push(ci), e.push(A(N(t))), !0);
}
function Ht(e, t, n) {
  if (typeof n != `object`) throw Error(D(62));
  for (var r in ((t = !0), n))
    if (K.call(n, r)) {
      var i = n[r];
      if (i != null && typeof i != `boolean` && i !== ``) {
        if (r.indexOf(`--`) === 0) {
          var a = A(N(r));
          i = A(N((`` + i).trim()));
        } else {
          a = r;
          var o = li.get(a);
          (o !== void 0 ||
            ((o = j(N(a.replace($r, `-$1`).toLowerCase().replace(ei, `-ms-`)))), li.set(a, o)),
            (a = o),
            (i =
              typeof i == `number`
                ? i === 0 || K.call(Xr, r)
                  ? A(`` + i)
                  : A(i + `px`)
                : A(N((`` + i).trim()))));
        }
        t ? ((t = !1), e.push(ui, a, di, i)) : e.push(fi, a, di, i);
      }
    }
  t || e.push(mi);
}
function F(e, t, n, r) {
  switch (n) {
    case `style`:
      Ht(e, t, r);
      return;
    case `defaultValue`:
    case `defaultChecked`:
    case `innerHTML`:
    case `suppressContentEditableWarning`:
    case `suppressHydrationWarning`:
      return;
  }
  if (!(2 < n.length) || (n[0] !== `o` && n[0] !== `O`) || (n[1] !== `n` && n[1] !== `N`)) {
    if (((t = q.hasOwnProperty(n) ? q[n] : null), t !== null)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (!t.acceptsBooleans) return;
      }
      switch (((n = A(t.attributeName)), t.type)) {
        case 3:
          r && e.push(J, n, hi);
          break;
        case 4:
          !0 === r ? e.push(J, n, hi) : !1 !== r && e.push(J, n, pi, A(N(r)), mi);
          break;
        case 5:
          isNaN(r) || e.push(J, n, pi, A(N(r)), mi);
          break;
        case 6:
          !isNaN(r) && 1 <= r && e.push(J, n, pi, A(N(r)), mi);
          break;
        default:
          (t.sanitizeURL && (r = `` + r), e.push(J, n, pi, A(N(r)), mi));
      }
    } else if (Ft(n)) {
      switch (typeof r) {
        case `function`:
        case `symbol`:
          return;
        case `boolean`:
          if (((t = n.toLowerCase().slice(0, 5)), t !== `data-` && t !== `aria-`)) return;
      }
      e.push(J, A(n), pi, A(N(r)), mi);
    }
  }
}
function Ut(e, t, n) {
  if (t != null) {
    if (n != null) throw Error(D(60));
    if (typeof t != `object` || !(`__html` in t)) throw Error(D(61));
    ((t = t.__html), t != null && e.push(A(`` + t)));
  }
}
function Wt(e) {
  var t = ``;
  return (
    Wr.Children.forEach(e, function (e) {
      e != null && (t += e);
    }),
    t
  );
}
function Gt(e, t, n, r) {
  e.push(I(n));
  var i,
    a = (n = null);
  for (i in t)
    if (K.call(t, i)) {
      var o = t[i];
      if (o != null)
        switch (i) {
          case `children`:
            n = o;
            break;
          case `dangerouslySetInnerHTML`:
            a = o;
            break;
          default:
            F(e, r, i, o);
        }
    }
  return (e.push(Y), Ut(e, a, n), typeof n == `string` ? (e.push(A(N(n))), null) : n);
}
function I(e) {
  var t = bi.get(e);
  if (t === void 0) {
    if (!yi.test(e)) throw Error(D(65, e));
    ((t = j(`<` + e)), bi.set(e, t));
  }
  return t;
}
function Kt(e, t, n, r, i) {
  switch (t) {
    case `select`:
      e.push(I(`select`));
      var a = null,
        o = null;
      for (u in n)
        if (K.call(n, u)) {
          var s = n[u];
          if (s != null)
            switch (u) {
              case `children`:
                a = s;
                break;
              case `dangerouslySetInnerHTML`:
                o = s;
                break;
              case `defaultValue`:
              case `value`:
                break;
              default:
                F(e, r, u, s);
            }
        }
      return (e.push(Y), Ut(e, o, a), a);
    case `option`:
      ((o = i.selectedValue), e.push(I(`option`)));
      var c = (s = null),
        l = null,
        u = null;
      for (a in n)
        if (K.call(n, a)) {
          var d = n[a];
          if (d != null)
            switch (a) {
              case `children`:
                s = d;
                break;
              case `selected`:
                l = d;
                break;
              case `dangerouslySetInnerHTML`:
                u = d;
                break;
              case `value`:
                c = d;
              default:
                F(e, r, a, d);
            }
        }
      if (o != null)
        if (((n = c === null ? Wt(s) : `` + c), ti(o))) {
          for (r = 0; r < o.length; r++)
            if (`` + o[r] === n) {
              e.push(_i);
              break;
            }
        } else `` + o === n && e.push(_i);
      else l && e.push(_i);
      return (e.push(Y), Ut(e, u, s), s);
    case `textarea`:
      for (s in (e.push(I(`textarea`)), (u = o = a = null), n))
        if (K.call(n, s) && ((c = n[s]), c != null))
          switch (s) {
            case `children`:
              u = c;
              break;
            case `value`:
              a = c;
              break;
            case `defaultValue`:
              o = c;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(D(91));
            default:
              F(e, r, s, c);
          }
      if ((a === null && o !== null && (a = o), e.push(Y), u != null)) {
        if (a != null) throw Error(D(92));
        if (ti(u) && 1 < u.length) throw Error(D(93));
        a = `` + u;
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(vi),
        a !== null && e.push(A(N(`` + a))),
        null
      );
    case `input`:
      for (o in (e.push(I(`input`)), (c = u = s = a = null), n))
        if (K.call(n, o) && ((l = n[o]), l != null))
          switch (o) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(D(399, `input`));
            case `defaultChecked`:
              c = l;
              break;
            case `defaultValue`:
              s = l;
              break;
            case `checked`:
              u = l;
              break;
            case `value`:
              a = l;
              break;
            default:
              F(e, r, o, l);
          }
      return (
        u === null ? c !== null && F(e, r, `checked`, c) : F(e, r, `checked`, u),
        a === null ? s !== null && F(e, r, `value`, s) : F(e, r, `value`, a),
        e.push(gi),
        null
      );
    case `menuitem`:
      for (var f in (e.push(I(`menuitem`)), n))
        if (K.call(n, f) && ((a = n[f]), a != null))
          switch (f) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(D(400));
            default:
              F(e, r, f, a);
          }
      return (e.push(Y), null);
    case `title`:
      for (d in (e.push(I(`title`)), (a = null), n))
        if (K.call(n, d) && ((o = n[d]), o != null))
          switch (d) {
            case `children`:
              a = o;
              break;
            case `dangerouslySetInnerHTML`:
              throw Error(D(434));
            default:
              F(e, r, d, o);
          }
      return (e.push(Y), a);
    case `listing`:
    case `pre`:
      for (c in (e.push(I(t)), (o = a = null), n))
        if (K.call(n, c) && ((s = n[c]), s != null))
          switch (c) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            default:
              F(e, r, c, s);
          }
      if ((e.push(Y), o != null)) {
        if (a != null) throw Error(D(60));
        if (typeof o != `object` || !(`__html` in o)) throw Error(D(61));
        ((n = o.__html),
          n != null &&
            (typeof n == `string` &&
            0 < n.length &&
            n[0] ===
              `
`
              ? e.push(vi, A(n))
              : e.push(A(`` + n))));
      }
      return (
        typeof a == `string` &&
          a[0] ===
            `
` &&
          e.push(vi),
        a
      );
    case `area`:
    case `base`:
    case `br`:
    case `col`:
    case `embed`:
    case `hr`:
    case `img`:
    case `keygen`:
    case `link`:
    case `meta`:
    case `param`:
    case `source`:
    case `track`:
    case `wbr`:
      for (var p in (e.push(I(t)), n))
        if (K.call(n, p) && ((a = n[p]), a != null))
          switch (p) {
            case `children`:
            case `dangerouslySetInnerHTML`:
              throw Error(D(399, t));
            default:
              F(e, r, p, a);
          }
      return (e.push(gi), null);
    case `annotation-xml`:
    case `color-profile`:
    case `font-face`:
    case `font-face-src`:
    case `font-face-uri`:
    case `font-face-format`:
    case `font-face-name`:
    case `missing-glyph`:
      return Gt(e, n, t, r);
    case `html`:
      return (i.insertionMode === 0 && e.push(xi), Gt(e, n, t, r));
    default:
      if (t.indexOf(`-`) === -1 && typeof n.is != `string`) return Gt(e, n, t, r);
      for (l in (e.push(I(t)), (o = a = null), n))
        if (K.call(n, l) && ((s = n[l]), s != null))
          switch (l) {
            case `children`:
              a = s;
              break;
            case `dangerouslySetInnerHTML`:
              o = s;
              break;
            case `style`:
              Ht(e, r, s);
              break;
            case `suppressContentEditableWarning`:
            case `suppressHydrationWarning`:
              break;
            default:
              Ft(l) &&
                typeof s != `function` &&
                typeof s != `symbol` &&
                e.push(J, A(l), pi, A(N(s)), mi);
          }
      return (e.push(Y), Ut(e, o, a), a);
  }
}
function qt(e, t, n) {
  if ((O(e, Di), n === null)) throw Error(D(395));
  return (O(e, n), k(e, Oi));
}
function Jt(e, t, n, r) {
  switch (n.insertionMode) {
    case 0:
    case 1:
      return (O(e, Fi), O(e, t.segmentPrefix), O(e, A(r.toString(16))), k(e, Ii));
    case 2:
      return (O(e, Ri), O(e, t.segmentPrefix), O(e, A(r.toString(16))), k(e, zi));
    case 3:
      return (O(e, Vi), O(e, t.segmentPrefix), O(e, A(r.toString(16))), k(e, Hi));
    case 4:
      return (O(e, Wi), O(e, t.segmentPrefix), O(e, A(r.toString(16))), k(e, Gi));
    case 5:
      return (O(e, qi), O(e, t.segmentPrefix), O(e, A(r.toString(16))), k(e, Ji));
    case 6:
      return (O(e, Xi), O(e, t.segmentPrefix), O(e, A(r.toString(16))), k(e, Zi));
    case 7:
      return (O(e, $i), O(e, t.segmentPrefix), O(e, A(r.toString(16))), k(e, ea));
    default:
      throw Error(D(397));
  }
}
function Yt(e, t) {
  switch (t.insertionMode) {
    case 0:
    case 1:
      return k(e, Li);
    case 2:
      return k(e, Bi);
    case 3:
      return k(e, Ui);
    case 4:
      return k(e, Ki);
    case 5:
      return k(e, Yi);
    case 6:
      return k(e, Qi);
    case 7:
      return k(e, ta);
    default:
      throw Error(D(397));
  }
}
function Xt(e) {
  return JSON.stringify(e).replace(ha, function (e) {
    switch (e) {
      case `<`:
        return `\\u003c`;
      case `\u2028`:
        return `\\u2028`;
      case `\u2029`:
        return `\\u2029`;
      default:
        throw Error(
          `escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React`
        );
    }
  });
}
function Zt(e) {
  if (e == null) return null;
  if (typeof e == `function`) return e.displayName || e.name || null;
  if (typeof e == `string`) return e;
  switch (e) {
    case ya:
      return `Fragment`;
    case va:
      return `Portal`;
    case xa:
      return `Profiler`;
    case ba:
      return `StrictMode`;
    case Ta:
      return `Suspense`;
    case Ea:
      return `SuspenseList`;
  }
  if (typeof e == `object`)
    switch (e.$$typeof) {
      case Ca:
        return (e.displayName || `Context`) + `.Consumer`;
      case Sa:
        return (e._context.displayName || `Context`) + `.Provider`;
      case wa:
        var t = e.render;
        return (
          (e = e.displayName),
          (e ||=
            ((e = t.displayName || t.name || ``),
            e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
          e
        );
      case Da:
        return ((t = e.displayName || null), t === null ? Zt(e.type) || `Memo` : t);
      case Oa:
        ((t = e._payload), (e = e._init));
        try {
          return Zt(e(t));
        } catch {}
    }
  return null;
}
function Qt(e, t) {
  if (((e = e.contextTypes), !e)) return Pa;
  var n,
    r = {};
  for (n in e) r[n] = t[n];
  return r;
}
function $t(e, t) {
  if (e !== t) {
    ((e.context._currentValue = e.parentValue), (e = e.parent));
    var n = t.parent;
    if (e === null) {
      if (n !== null) throw Error(D(401));
    } else {
      if (n === null) throw Error(D(401));
      $t(e, n);
    }
    t.context._currentValue = t.value;
  }
}
function en(e) {
  ((e.context._currentValue = e.parentValue), (e = e.parent), e !== null && en(e));
}
function tn(e) {
  var t = e.parent;
  (t !== null && tn(t), (e.context._currentValue = e.value));
}
function nn(e, t) {
  if (((e.context._currentValue = e.parentValue), (e = e.parent), e === null)) throw Error(D(402));
  e.depth === t.depth ? $t(e, t) : nn(e, t);
}
function rn(e, t) {
  var n = t.parent;
  if (n === null) throw Error(D(402));
  (e.depth === n.depth ? $t(e, n) : rn(e, n), (t.context._currentValue = t.value));
}
function an(e) {
  var t = Fa;
  t !== e &&
    (t === null
      ? tn(e)
      : e === null
        ? en(t)
        : t.depth === e.depth
          ? $t(t, e)
          : t.depth > e.depth
            ? nn(t, e)
            : rn(t, e),
    (Fa = e));
}
function on(e, t, n, r) {
  var i = e.state === void 0 ? null : e.state;
  ((e.updater = Ia), (e.props = n), (e.state = i));
  var a = { queue: [], replace: !1 };
  e._reactInternals = a;
  var o = t.contextType;
  if (
    ((e.context = typeof o == `object` && o ? o._currentValue : r),
    (o = t.getDerivedStateFromProps),
    typeof o == `function` && ((o = o(n, i)), (i = o == null ? i : ga({}, i, o)), (e.state = i)),
    typeof t.getDerivedStateFromProps != `function` &&
      typeof e.getSnapshotBeforeUpdate != `function` &&
      (typeof e.UNSAFE_componentWillMount == `function` ||
        typeof e.componentWillMount == `function`))
  )
    if (
      ((t = e.state),
      typeof e.componentWillMount == `function` && e.componentWillMount(),
      typeof e.UNSAFE_componentWillMount == `function` && e.UNSAFE_componentWillMount(),
      t !== e.state && Ia.enqueueReplaceState(e, e.state, null),
      a.queue !== null && 0 < a.queue.length)
    )
      if (((t = a.queue), (o = a.replace), (a.queue = null), (a.replace = !1), o && t.length === 1))
        e.state = t[0];
      else {
        for (a = o ? t[0] : e.state, i = !0, o = +!!o; o < t.length; o++) {
          var s = t[o];
          ((s = typeof s == `function` ? s.call(e, a, n, r) : s),
            s != null && (i ? ((i = !1), (a = ga({}, a, s))) : ga(a, s)));
        }
        e.state = a;
      }
    else a.queue = null;
}
function sn(e, t, n) {
  var r = e.id;
  e = e.overflow;
  var i = 32 - Ra(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var a = 32 - Ra(t) + i;
  if (30 < a) {
    var o = i - (i % 5);
    return (
      (a = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      { id: (1 << (32 - Ra(t) + i)) | (n << i) | r, overflow: a + e }
    );
  }
  return { id: (1 << a) | (n << i) | r, overflow: e };
}
function cn(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((za(e) / Ba) | 0)) | 0);
}
function ln(e, t) {
  return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
}
function un() {
  if (X === null) throw Error(D(321));
  return X;
}
function dn() {
  if (0 < qa) throw Error(D(312));
  return { memoizedState: null, queue: null, next: null };
}
function fn() {
  return (
    Z === null
      ? Ua === null
        ? ((Wa = !1), (Ua = Z = dn()))
        : ((Wa = !0), (Z = Ua))
      : Z.next === null
        ? ((Wa = !1), (Z = Z.next = dn()))
        : ((Wa = !0), (Z = Z.next)),
    Z
  );
}
function pn() {
  ((Ha = X = null), (Ga = !1), (Ua = null), (qa = 0), (Z = Q = null));
}
function mn(e, t) {
  return typeof t == `function` ? t(e) : t;
}
function hn(e, t, n) {
  if (((X = un()), (Z = fn()), Wa)) {
    var r = Z.queue;
    if (((t = r.dispatch), Q !== null && ((n = Q.get(r)), n !== void 0))) {
      (Q.delete(r), (r = Z.memoizedState));
      do ((r = e(r, n.action)), (n = n.next));
      while (n !== null);
      return ((Z.memoizedState = r), [r, t]);
    }
    return [Z.memoizedState, t];
  }
  return (
    (e = e === mn ? (typeof t == `function` ? t() : t) : n === void 0 ? t : n(t)),
    (Z.memoizedState = e),
    (e = Z.queue = { last: null, dispatch: null }),
    (e = e.dispatch = _n.bind(null, X, e)),
    [Z.memoizedState, e]
  );
}
function gn(e, t) {
  if (((X = un()), (Z = fn()), (t = t === void 0 ? null : t), Z !== null)) {
    var n = Z.memoizedState;
    if (n !== null && t !== null) {
      var r = n[1];
      e: if (r === null) r = !1;
      else {
        for (var i = 0; i < r.length && i < t.length; i++)
          if (!Va(t[i], r[i])) {
            r = !1;
            break e;
          }
        r = !0;
      }
      if (r) return n[0];
    }
  }
  return ((e = e()), (Z.memoizedState = [e, t]), e);
}
function _n(e, t, n) {
  if (25 <= qa) throw Error(D(301));
  if (e === X)
    if (
      ((Ga = !0),
      (e = { action: n, next: null }),
      Q === null && (Q = new Map()),
      (n = Q.get(t)),
      n === void 0)
    )
      Q.set(t, e);
    else {
      for (t = n; t.next !== null;) t = t.next;
      t.next = e;
    }
}
function vn() {
  throw Error(D(394));
}
function yn() {}
function bn(e) {
  return (console.error(e), null);
}
function xn() {}
function Sn(e, t, n, r, i, a, o, s, c) {
  var l = [],
    u = new Set();
  return (
    (t = {
      destination: null,
      responseState: t,
      progressiveChunkSize: r === void 0 ? 12800 : r,
      status: 0,
      fatalError: null,
      nextSegmentId: 0,
      allPendingTasks: 0,
      pendingRootTasks: 0,
      completedRootSegment: null,
      abortableTasks: u,
      pingedTasks: l,
      clientRenderedBoundaries: [],
      completedBoundaries: [],
      partialBoundaries: [],
      onError: i === void 0 ? bn : i,
      onAllReady: a === void 0 ? xn : a,
      onShellReady: o === void 0 ? xn : o,
      onShellError: s === void 0 ? xn : s,
      onFatalError: c === void 0 ? xn : c,
    }),
    (n = wn(t, 0, null, n, !1, !1)),
    (n.parentFlushed = !0),
    (e = Cn(t, e, null, n, u, Pa, null, La)),
    l.push(e),
    t
  );
}
function Cn(e, t, n, r, i, a, o, s) {
  (e.allPendingTasks++, n === null ? e.pendingRootTasks++ : n.pendingTasks++);
  var c = {
    node: t,
    ping: function () {
      var t = e.pingedTasks;
      (t.push(c), t.length === 1 && Ln(e));
    },
    blockedBoundary: n,
    blockedSegment: r,
    abortSet: i,
    legacyContext: a,
    context: o,
    treeContext: s,
  };
  return (i.add(c), c);
}
function wn(e, t, n, r, i, a) {
  return {
    status: 0,
    id: -1,
    index: t,
    parentFlushed: !1,
    chunks: [],
    children: [],
    formatContext: r,
    boundary: n,
    lastPushedText: i,
    textEmbedded: a,
  };
}
function Tn(e, t) {
  if (((e = e.onError(t)), e != null && typeof e != `string`))
    throw Error(
      `onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "` +
        typeof e +
        `" instead`
    );
  return e;
}
function En(e, t) {
  var n = e.onShellError;
  (n(t),
    (n = e.onFatalError),
    n(t),
    e.destination === null
      ? ((e.status = 1), (e.fatalError = t))
      : ((e.status = 2), Pt(e.destination, t)));
}
function Dn(e, t, n, r, i) {
  for (X = {}, Ha = t, Ka = 0, e = n(r, i); Ga;)
    ((Ga = !1), (Ka = 0), (qa += 1), (Z = null), (e = n(r, i)));
  return (pn(), e);
}
function On(e, t, n, r) {
  var i = n.render(),
    a = r.childContextTypes;
  if (a != null) {
    var o = t.legacyContext;
    if (typeof n.getChildContext != `function`) r = o;
    else {
      for (var s in ((n = n.getChildContext()), n))
        if (!(s in a)) throw Error(D(108, Zt(r) || `Unknown`, s));
      r = ga({}, o, n);
    }
    ((t.legacyContext = r), L(e, t, i), (t.legacyContext = o));
  } else L(e, t, i);
}
function kn(e, t) {
  if (e && e.defaultProps) {
    for (var n in ((t = ga({}, t)), (e = e.defaultProps), e)) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function An(e, t, n, r, i) {
  if (typeof n == `function`)
    if (n.prototype && n.prototype.isReactComponent) {
      i = Qt(n, t.legacyContext);
      var a = n.contextType;
      ((a = new n(r, typeof a == `object` && a ? a._currentValue : i)),
        on(a, n, r, i),
        On(e, t, a, n));
    } else {
      ((a = Qt(n, t.legacyContext)), (i = Dn(e, t, n, r, a)));
      var o = Ka !== 0;
      if (typeof i == `object` && i && typeof i.render == `function` && i.$$typeof === void 0)
        (on(i, n, r, a), On(e, t, i, n));
      else if (o) {
        ((r = t.treeContext), (t.treeContext = sn(r, 1, 0)));
        try {
          L(e, t, i);
        } finally {
          t.treeContext = r;
        }
      } else L(e, t, i);
    }
  else {
    if (typeof n != `string`) {
      switch (n) {
        case ja:
        case Aa:
        case ba:
        case xa:
        case ya:
          L(e, t, r.children);
          return;
        case Ea:
          L(e, t, r.children);
          return;
        case ka:
          throw Error(D(343));
        case Ta:
          e: {
            ((n = t.blockedBoundary),
              (i = t.blockedSegment),
              (a = r.fallback),
              (r = r.children),
              (o = new Set()));
            var s = {
                id: null,
                rootSegmentID: -1,
                parentFlushed: !1,
                pendingTasks: 0,
                forceClientRender: !1,
                completedSegments: [],
                byteSize: 0,
                fallbackAbortableTasks: o,
                errorDigest: null,
              },
              c = wn(e, i.chunks.length, s, i.formatContext, !1, !1);
            (i.children.push(c), (i.lastPushedText = !1));
            var l = wn(e, 0, null, i.formatContext, !1, !1);
            ((l.parentFlushed = !0), (t.blockedBoundary = s), (t.blockedSegment = l));
            try {
              if (
                (Mn(e, t, r),
                l.lastPushedText && l.textEmbedded && l.chunks.push(ci),
                (l.status = 1),
                Fn(s, l),
                s.pendingTasks === 0)
              )
                break e;
            } catch (t) {
              ((l.status = 4), (s.forceClientRender = !0), (s.errorDigest = Tn(e, t)));
            } finally {
              ((t.blockedBoundary = n), (t.blockedSegment = i));
            }
            ((t = Cn(e, a, n, c, o, t.legacyContext, t.context, t.treeContext)),
              e.pingedTasks.push(t));
          }
          return;
      }
      if (typeof n == `object` && n)
        switch (n.$$typeof) {
          case wa:
            if (((r = Dn(e, t, n.render, r, i)), Ka !== 0)) {
              ((n = t.treeContext), (t.treeContext = sn(n, 1, 0)));
              try {
                L(e, t, r);
              } finally {
                t.treeContext = n;
              }
            } else L(e, t, r);
            return;
          case Da:
            ((n = n.type), (r = kn(n, r)), An(e, t, n, r, i));
            return;
          case Sa:
            if (
              ((i = r.children),
              (n = n._context),
              (r = r.value),
              (a = n._currentValue),
              (n._currentValue = r),
              (o = Fa),
              (Fa = r =
                {
                  parent: o,
                  depth: o === null ? 0 : o.depth + 1,
                  context: n,
                  parentValue: a,
                  value: r,
                }),
              (t.context = r),
              L(e, t, i),
              (e = Fa),
              e === null)
            )
              throw Error(D(403));
            ((r = e.parentValue),
              (e.context._currentValue = r === Ma ? e.context._defaultValue : r),
              (e = Fa = e.parent),
              (t.context = e));
            return;
          case Ca:
            ((r = r.children), (r = r(n._currentValue)), L(e, t, r));
            return;
          case Oa:
            ((i = n._init), (n = i(n._payload)), (r = kn(n, r)), An(e, t, n, r, void 0));
            return;
        }
      throw Error(D(130, n == null ? n : typeof n, ``));
    }
    switch (
      ((i = t.blockedSegment),
      (a = Kt(i.chunks, n, r, e.responseState, i.formatContext)),
      (i.lastPushedText = !1),
      (o = i.formatContext),
      (i.formatContext = Bt(o, n, r)),
      Mn(e, t, a),
      (i.formatContext = o),
      n)
    ) {
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `img`:
      case `input`:
      case `keygen`:
      case `link`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
        break;
      default:
        i.chunks.push(Si, A(n), Ci);
    }
    i.lastPushedText = !1;
  }
}
function L(e, t, n) {
  if (((t.node = n), typeof n == `object` && n)) {
    switch (n.$$typeof) {
      case _a:
        An(e, t, n.type, n.props, n.ref);
        return;
      case va:
        throw Error(D(257));
      case Oa:
        var r = n._init;
        ((n = r(n._payload)), L(e, t, n));
        return;
    }
    if (ti(n)) {
      jn(e, t, n);
      return;
    }
    if (
      (typeof n != `object` || !n
        ? (r = null)
        : ((r = (Na && n[Na]) || n[`@@iterator`]), (r = typeof r == `function` ? r : null)),
      (r &&= r.call(n)))
    ) {
      if (((n = r.next()), !n.done)) {
        var i = [];
        do (i.push(n.value), (n = r.next()));
        while (!n.done);
        jn(e, t, i);
      }
      return;
    }
    throw (
      (e = Object.prototype.toString.call(n)),
      Error(
        D(31, e === `[object Object]` ? `object with keys {` + Object.keys(n).join(`, `) + `}` : e)
      )
    );
  }
  typeof n == `string`
    ? ((r = t.blockedSegment),
      (r.lastPushedText = Vt(t.blockedSegment.chunks, n, e.responseState, r.lastPushedText)))
    : typeof n == `number` &&
      ((r = t.blockedSegment),
      (r.lastPushedText = Vt(t.blockedSegment.chunks, `` + n, e.responseState, r.lastPushedText)));
}
function jn(e, t, n) {
  for (var r = n.length, i = 0; i < r; i++) {
    var a = t.treeContext;
    t.treeContext = sn(a, r, i);
    try {
      Mn(e, t, n[i]);
    } finally {
      t.treeContext = a;
    }
  }
}
function Mn(e, t, n) {
  var r = t.blockedSegment.formatContext,
    i = t.legacyContext,
    a = t.context;
  try {
    return L(e, t, n);
  } catch (c) {
    if ((pn(), typeof c != `object` || !c || typeof c.then != `function`))
      throw (
        (t.blockedSegment.formatContext = r),
        (t.legacyContext = i),
        (t.context = a),
        an(a),
        c
      );
    n = c;
    var o = t.blockedSegment,
      s = wn(e, o.chunks.length, null, o.formatContext, o.lastPushedText, !0);
    (o.children.push(s),
      (o.lastPushedText = !1),
      (e = Cn(
        e,
        t.node,
        t.blockedBoundary,
        s,
        t.abortSet,
        t.legacyContext,
        t.context,
        t.treeContext
      ).ping),
      n.then(e, e),
      (t.blockedSegment.formatContext = r),
      (t.legacyContext = i),
      (t.context = a),
      an(a));
  }
}
function Nn(e) {
  var t = e.blockedBoundary;
  ((e = e.blockedSegment), (e.status = 3), In(this, t, e));
}
function Pn(e, t, n) {
  var r = e.blockedBoundary;
  ((e.blockedSegment.status = 3),
    r === null
      ? (t.allPendingTasks--,
        t.status !== 2 && ((t.status = 2), t.destination !== null && t.destination.close()))
      : (r.pendingTasks--,
        r.forceClientRender ||
          ((r.forceClientRender = !0),
          (e = n === void 0 ? Error(D(432)) : n),
          (r.errorDigest = t.onError(e)),
          r.parentFlushed && t.clientRenderedBoundaries.push(r)),
        r.fallbackAbortableTasks.forEach(function (e) {
          return Pn(e, t, n);
        }),
        r.fallbackAbortableTasks.clear(),
        t.allPendingTasks--,
        t.allPendingTasks === 0 && ((r = t.onAllReady), r())));
}
function Fn(e, t) {
  if (t.chunks.length === 0 && t.children.length === 1 && t.children[0].boundary === null) {
    var n = t.children[0];
    ((n.id = t.id), (n.parentFlushed = !0), n.status === 1 && Fn(e, n));
  } else e.completedSegments.push(t);
}
function In(e, t, n) {
  if (t === null) {
    if (n.parentFlushed) {
      if (e.completedRootSegment !== null) throw Error(D(389));
      e.completedRootSegment = n;
    }
    (e.pendingRootTasks--,
      e.pendingRootTasks === 0 && ((e.onShellError = xn), (t = e.onShellReady), t()));
  } else
    (t.pendingTasks--,
      t.forceClientRender ||
        (t.pendingTasks === 0
          ? (n.parentFlushed && n.status === 1 && Fn(t, n),
            t.parentFlushed && e.completedBoundaries.push(t),
            t.fallbackAbortableTasks.forEach(Nn, e),
            t.fallbackAbortableTasks.clear())
          : n.parentFlushed &&
            n.status === 1 &&
            (Fn(t, n),
            t.completedSegments.length === 1 && t.parentFlushed && e.partialBoundaries.push(t))));
  (e.allPendingTasks--, e.allPendingTasks === 0 && ((e = e.onAllReady), e()));
}
function Ln(e) {
  if (e.status !== 2) {
    var t = Fa,
      n = Xa.current;
    Xa.current = Ja;
    var r = Ya;
    Ya = e.responseState;
    try {
      var i,
        a = e.pingedTasks;
      for (i = 0; i < a.length; i++) {
        var o = a[i],
          s = e,
          c = o.blockedSegment;
        if (c.status === 0) {
          an(o.context);
          try {
            (L(s, o, o.node),
              c.lastPushedText && c.textEmbedded && c.chunks.push(ci),
              o.abortSet.delete(o),
              (c.status = 1),
              In(s, o.blockedBoundary, c));
          } catch (e) {
            if ((pn(), typeof e == `object` && e && typeof e.then == `function`)) {
              var l = o.ping;
              e.then(l, l);
            } else {
              (o.abortSet.delete(o), (c.status = 4));
              var u = o.blockedBoundary,
                d = e,
                f = Tn(s, d);
              if (
                (u === null
                  ? En(s, d)
                  : (u.pendingTasks--,
                    u.forceClientRender ||
                      ((u.forceClientRender = !0),
                      (u.errorDigest = f),
                      u.parentFlushed && s.clientRenderedBoundaries.push(u))),
                s.allPendingTasks--,
                s.allPendingTasks === 0)
              ) {
                var p = s.onAllReady;
                p();
              }
            }
          }
        }
      }
      (a.splice(0, i), e.destination !== null && Un(e, e.destination));
    } catch (t) {
      (Tn(e, t), En(e, t));
    } finally {
      ((Ya = r), (Xa.current = n), n === Ja && an(t));
    }
  }
}
function Rn(e, t, n) {
  switch (((n.parentFlushed = !0), n.status)) {
    case 0:
      var r = (n.id = e.nextSegmentId++);
      return (
        (n.lastPushedText = !1),
        (n.textEmbedded = !1),
        (e = e.responseState),
        O(t, wi),
        O(t, e.placeholderPrefix),
        (e = A(r.toString(16))),
        O(t, e),
        k(t, Ti)
      );
    case 1:
      n.status = 2;
      var i = !0;
      r = n.chunks;
      var a = 0;
      n = n.children;
      for (var o = 0; o < n.length; o++) {
        for (i = n[o]; a < i.index; a++) O(t, r[a]);
        i = zn(e, t, i);
      }
      for (; a < r.length - 1; a++) O(t, r[a]);
      return (a < r.length && (i = k(t, r[a])), i);
    default:
      throw Error(D(390));
  }
}
function zn(e, t, n) {
  var r = n.boundary;
  if (r === null) return Rn(e, t, n);
  if (((r.parentFlushed = !0), r.forceClientRender))
    ((r = r.errorDigest),
      k(t, ki),
      O(t, ji),
      r && (O(t, Ni), O(t, A(N(r))), O(t, Mi)),
      k(t, Pi),
      Rn(e, t, n));
  else if (0 < r.pendingTasks) {
    ((r.rootSegmentID = e.nextSegmentId++),
      0 < r.completedSegments.length && e.partialBoundaries.push(r));
    var i = e.responseState,
      a = i.nextSuspenseID++;
    ((i = j(i.boundaryPrefix + a.toString(16))),
      (r = r.id = i),
      qt(t, e.responseState, r),
      Rn(e, t, n));
  } else if (r.byteSize > e.progressiveChunkSize)
    ((r.rootSegmentID = e.nextSegmentId++),
      e.completedBoundaries.push(r),
      qt(t, e.responseState, r.id),
      Rn(e, t, n));
  else {
    if ((k(t, Ei), (n = r.completedSegments), n.length !== 1)) throw Error(D(391));
    zn(e, t, n[0]);
  }
  return k(t, Ai);
}
function Bn(e, t, n) {
  return (Jt(t, e.responseState, n.formatContext, n.id), zn(e, t, n), Yt(t, n.formatContext));
}
function Vn(e, t, n) {
  for (var r = n.completedSegments, i = 0; i < r.length; i++) Hn(e, t, n, r[i]);
  if (
    ((r.length = 0),
    (e = e.responseState),
    (r = n.id),
    (n = n.rootSegmentID),
    O(t, e.startInlineScript),
    e.sentCompleteBoundaryFunction ? O(t, sa) : ((e.sentCompleteBoundaryFunction = !0), O(t, oa)),
    r === null)
  )
    throw Error(D(395));
  return ((n = A(n.toString(16))), O(t, r), O(t, ca), O(t, e.segmentPrefix), O(t, n), k(t, la));
}
function Hn(e, t, n, r) {
  if (r.status === 2) return !0;
  var i = r.id;
  if (i === -1) {
    if ((r.id = n.rootSegmentID) === -1) throw Error(D(392));
    return Bn(e, t, r);
  }
  return (
    Bn(e, t, r),
    (e = e.responseState),
    O(t, e.startInlineScript),
    e.sentCompleteSegmentFunction ? O(t, ra) : ((e.sentCompleteSegmentFunction = !0), O(t, na)),
    O(t, e.segmentPrefix),
    (i = A(i.toString(16))),
    O(t, i),
    O(t, ia),
    O(t, e.placeholderPrefix),
    O(t, i),
    k(t, aa)
  );
}
function Un(e, t) {
  ((W = new Uint8Array(512)), (G = 0));
  try {
    var n = e.completedRootSegment;
    if (n !== null && e.pendingRootTasks === 0) {
      (zn(e, t, n), (e.completedRootSegment = null));
      var r = e.responseState.bootstrapChunks;
      for (n = 0; n < r.length - 1; n++) O(t, r[n]);
      n < r.length && k(t, r[n]);
    }
    var i,
      a = e.clientRenderedBoundaries;
    for (i = 0; i < a.length; i++) {
      var o = a[i];
      r = t;
      var s = e.responseState,
        c = o.id,
        l = o.errorDigest,
        u = o.errorMessage,
        d = o.errorComponentStack;
      if (
        (O(r, s.startInlineScript),
        s.sentClientRenderFunction ? O(r, da) : ((s.sentClientRenderFunction = !0), O(r, ua)),
        c === null)
      )
        throw Error(D(395));
      if (
        (O(r, c),
        O(r, fa),
        (l || u || d) && (O(r, ma), O(r, A(Xt(l || ``)))),
        (u || d) && (O(r, ma), O(r, A(Xt(u || ``)))),
        d && (O(r, ma), O(r, A(Xt(d)))),
        !k(r, pa))
      ) {
        ((e.destination = null), i++, a.splice(0, i));
        return;
      }
    }
    a.splice(0, i);
    var f = e.completedBoundaries;
    for (i = 0; i < f.length; i++)
      if (!Vn(e, t, f[i])) {
        ((e.destination = null), i++, f.splice(0, i));
        return;
      }
    (f.splice(0, i), Nt(t), (W = new Uint8Array(512)), (G = 0));
    var p = e.partialBoundaries;
    for (i = 0; i < p.length; i++) {
      var m = p[i];
      e: {
        ((a = e), (o = t));
        var h = m.completedSegments;
        for (s = 0; s < h.length; s++)
          if (!Hn(a, o, m, h[s])) {
            (s++, h.splice(0, s));
            var g = !1;
            break e;
          }
        (h.splice(0, s), (g = !0));
      }
      if (!g) {
        ((e.destination = null), i++, p.splice(0, i));
        return;
      }
    }
    p.splice(0, i);
    var _ = e.completedBoundaries;
    for (i = 0; i < _.length; i++)
      if (!Vn(e, t, _[i])) {
        ((e.destination = null), i++, _.splice(0, i));
        return;
      }
    _.splice(0, i);
  } finally {
    (Nt(t),
      e.allPendingTasks === 0 &&
        e.pingedTasks.length === 0 &&
        e.clientRenderedBoundaries.length === 0 &&
        e.completedBoundaries.length === 0 &&
        t.close());
  }
}
function Wn(e, t) {
  try {
    var n = e.abortableTasks;
    (n.forEach(function (n) {
      return Pn(n, e, t);
    }),
      n.clear(),
      e.destination !== null && Un(e, e.destination));
  } catch (t) {
    (Tn(e, t), En(e, t));
  }
}
var Gn,
  Kn,
  qn,
  R,
  Jn,
  Yn,
  Xn,
  z,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  B,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  V,
  Nr,
  Pr,
  H,
  Fr,
  Ir,
  Lr,
  U,
  Rr,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  W,
  G,
  Gr,
  K,
  Kr,
  qr,
  Jr,
  q,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  J,
  pi,
  mi,
  hi,
  Y,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia,
  La,
  Ra,
  za,
  Ba,
  Va,
  X,
  Ha,
  Ua,
  Z,
  Wa,
  Ga,
  Ka,
  Q,
  qa,
  Ja,
  Ya,
  Xa,
  $,
  Za,
  Qa,
  $a,
  eo = t(() => {
    (r(),
      (Gn = `default` in l ? u : l),
      (Kn = {}),
      (qn = Gn),
      (R = Object.prototype.hasOwnProperty),
      (Jn =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (Yn = {}),
      (Xn = {}),
      (z = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          z[e] = new x(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        z[t] = new x(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        z[e] = new x(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          z[e] = new x(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          z[e] = new x(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        z[e] = new x(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        z[e] = new x(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        z[e] = new x(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        z[e] = new x(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Zn = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Zn, Te);
          z[t] = new x(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Zn, Te);
          z[t] = new x(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(Zn, Te);
        z[t] = new x(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        z[e] = new x(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (z.xlinkHref = new x(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        z[e] = new x(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (Qn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      }),
      ($n = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(Qn).forEach(function (e) {
        $n.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Qn[t] = Qn[e]));
        });
      }),
      (er = /["'&<>]/),
      (tr = /([A-Z])/g),
      (nr = /^ms-/),
      (rr = Array.isArray),
      (ir = new Map()),
      (ar = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (or = new Map()),
      (sr = /[<\u2028\u2029]/g),
      (cr = Object.assign),
      (lr = Symbol.for(`react.element`)),
      (ur = Symbol.for(`react.portal`)),
      (dr = Symbol.for(`react.fragment`)),
      (fr = Symbol.for(`react.strict_mode`)),
      (pr = Symbol.for(`react.profiler`)),
      (mr = Symbol.for(`react.provider`)),
      (hr = Symbol.for(`react.context`)),
      (gr = Symbol.for(`react.forward_ref`)),
      (_r = Symbol.for(`react.suspense`)),
      (vr = Symbol.for(`react.suspense_list`)),
      (yr = Symbol.for(`react.memo`)),
      (br = Symbol.for(`react.lazy`)),
      (xr = Symbol.for(`react.scope`)),
      (Sr = Symbol.for(`react.debug_trace_mode`)),
      (Cr = Symbol.for(`react.legacy_hidden`)),
      (wr = Symbol.for(`react.default_value`)),
      (Tr = Symbol.iterator),
      (Er = {}),
      (B = null),
      (Dr = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          ((e = e._reactInternals), e.queue !== null && e.queue.push(t));
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals), (e.replace = !0), (e.queue = [t]));
        },
        enqueueForceUpdate: function () {},
      }),
      (Or = { id: 1, overflow: `` }),
      (kr = Math.clz32 ? Math.clz32 : Je),
      (Ar = Math.log),
      (jr = Math.LN2),
      (Mr = typeof Object.is == `function` ? Object.is : Ye),
      (V = null),
      (Nr = null),
      (Pr = null),
      (H = null),
      (Fr = !1),
      (Ir = !1),
      (Lr = 0),
      (U = null),
      (Rr = 0),
      (zr = {
        readContext: function (e) {
          return e._currentValue2;
        },
        useContext: function (e) {
          return (Xe(), e._currentValue2);
        },
        useMemo: nt,
        useReducer: tt,
        useRef: function (e) {
          ((V = Xe()), (H = Qe()));
          var t = H.memoizedState;
          return t === null ? ((e = { current: e }), (H.memoizedState = e)) : t;
        },
        useState: function (e) {
          return tt(et, e);
        },
        useInsertionEffect: at,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return nt(function () {
            return e;
          }, t);
        },
        useImperativeHandle: at,
        useEffect: at,
        useDebugValue: at,
        useDeferredValue: function (e) {
          return (Xe(), e);
        },
        useTransition: function () {
          return (Xe(), [!1, it]);
        },
        useId: function () {
          var e = Nr.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - kr(e) - 1))).toString(32) + t));
          var n = Br;
          if (n === null) throw Error(b(404));
          return (
            (t = Lr++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (Xe(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(b(407));
          return n();
        },
      }),
      (Br = null),
      (Vr = qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (Kn.renderToNodeStream = function () {
        throw Error(b(207));
      }),
      (Kn.renderToStaticMarkup = function (e, t) {
        return Mt(
          e,
          t,
          !0,
          `The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (Kn.renderToStaticNodeStream = function () {
        throw Error(b(208));
      }),
      (Kn.renderToString = function (e, t) {
        return Mt(
          e,
          t,
          !1,
          `The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server`
        );
      }),
      (Kn.version = `18.2.0`),
      (Hr = `default` in l ? u : l),
      (Ur = {}),
      (Wr = Hr),
      (W = null),
      (G = 0),
      (Gr = new TextEncoder()),
      (K = Object.prototype.hasOwnProperty),
      (Kr =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/),
      (qr = {}),
      (Jr = {}),
      (q = {}),
      `children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`
        .split(` `)
        .forEach(function (e) {
          q[e] = new M(e, 0, !1, e, null, !1, !1);
        }),
      [
        [`acceptCharset`, `accept-charset`],
        [`className`, `class`],
        [`htmlFor`, `for`],
        [`httpEquiv`, `http-equiv`],
      ].forEach(function (e) {
        var t = e[0];
        q[t] = new M(t, 1, !1, e[1], null, !1, !1);
      }),
      [`contentEditable`, `draggable`, `spellCheck`, `value`].forEach(function (e) {
        q[e] = new M(e, 2, !1, e.toLowerCase(), null, !1, !1);
      }),
      [`autoReverse`, `externalResourcesRequired`, `focusable`, `preserveAlpha`].forEach(
        function (e) {
          q[e] = new M(e, 2, !1, e, null, !1, !1);
        }
      ),
      `allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`
        .split(` `)
        .forEach(function (e) {
          q[e] = new M(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
      [`checked`, `multiple`, `muted`, `selected`].forEach(function (e) {
        q[e] = new M(e, 3, !0, e, null, !1, !1);
      }),
      [`capture`, `download`].forEach(function (e) {
        q[e] = new M(e, 4, !1, e, null, !1, !1);
      }),
      [`cols`, `rows`, `size`, `span`].forEach(function (e) {
        q[e] = new M(e, 6, !1, e, null, !1, !1);
      }),
      [`rowSpan`, `start`].forEach(function (e) {
        q[e] = new M(e, 5, !1, e.toLowerCase(), null, !1, !1);
      }),
      (Yr = /[\-:]([a-z])/g),
      `accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Yr, It);
          q[t] = new M(t, 1, !1, e, null, !1, !1);
        }),
      `xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`
        .split(` `)
        .forEach(function (e) {
          var t = e.replace(Yr, It);
          q[t] = new M(t, 1, !1, e, `http://www.w3.org/1999/xlink`, !1, !1);
        }),
      [`xml:base`, `xml:lang`, `xml:space`].forEach(function (e) {
        var t = e.replace(Yr, It);
        q[t] = new M(t, 1, !1, e, `http://www.w3.org/XML/1998/namespace`, !1, !1);
      }),
      [`tabIndex`, `crossOrigin`].forEach(function (e) {
        q[e] = new M(e, 1, !1, e.toLowerCase(), null, !1, !1);
      }),
      (q.xlinkHref = new M(
        `xlinkHref`,
        1,
        !1,
        `xlink:href`,
        `http://www.w3.org/1999/xlink`,
        !0,
        !1
      )),
      [`src`, `href`, `action`, `formAction`].forEach(function (e) {
        q[e] = new M(e, 1, !1, e.toLowerCase(), null, !0, !0);
      }),
      (Xr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      }),
      (Zr = [`Webkit`, `ms`, `Moz`, `O`]),
      Object.keys(Xr).forEach(function (e) {
        Zr.forEach(function (t) {
          ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xr[t] = Xr[e]));
        });
      }),
      (Qr = /["'&<>]/),
      ($r = /([A-Z])/g),
      (ei = /^ms-/),
      (ti = Array.isArray),
      (ni = j(`<script>`)),
      (ri = j(`<\/script>`)),
      (ii = j(`<script src="`)),
      (ai = j(`<script type="module" src="`)),
      (oi = j(`" async=""><\/script>`)),
      (si = /(<\/|<)(s)(cript)/gi),
      (ci = j(`<!-- -->`)),
      (li = new Map()),
      (ui = j(` style="`)),
      (di = j(`:`)),
      (fi = j(`;`)),
      (J = j(` `)),
      (pi = j(`="`)),
      (mi = j(`"`)),
      (hi = j(`=""`)),
      (Y = j(`>`)),
      (gi = j(`/>`)),
      (_i = j(` selected=""`)),
      (vi = j(`
`)),
      (yi = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/),
      (bi = new Map()),
      (xi = j(`<!DOCTYPE html>`)),
      (Si = j(`</`)),
      (Ci = j(`>`)),
      (wi = j(`<template id="`)),
      (Ti = j(`"></template>`)),
      (Ei = j(`<!--$-->`)),
      (Di = j(`<!--$?--><template id="`)),
      (Oi = j(`"></template>`)),
      (ki = j(`<!--$!-->`)),
      (Ai = j(`<!--/$-->`)),
      (ji = j(`<template`)),
      (Mi = j(`"`)),
      (Ni = j(` data-dgst="`)),
      j(` data-msg="`),
      j(` data-stck="`),
      (Pi = j(`></template>`)),
      (Fi = j(`<div hidden id="`)),
      (Ii = j(`">`)),
      (Li = j(`</div>`)),
      (Ri = j(`<svg aria-hidden="true" style="display:none" id="`)),
      (zi = j(`">`)),
      (Bi = j(`</svg>`)),
      (Vi = j(`<math aria-hidden="true" style="display:none" id="`)),
      (Hi = j(`">`)),
      (Ui = j(`</math>`)),
      (Wi = j(`<table hidden id="`)),
      (Gi = j(`">`)),
      (Ki = j(`</table>`)),
      (qi = j(`<table hidden><tbody id="`)),
      (Ji = j(`">`)),
      (Yi = j(`</tbody></table>`)),
      (Xi = j(`<table hidden><tr id="`)),
      (Zi = j(`">`)),
      (Qi = j(`</tr></table>`)),
      ($i = j(`<table hidden><colgroup id="`)),
      (ea = j(`">`)),
      (ta = j(`</colgroup></table>`)),
      (na = j(
        `function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("`
      )),
      (ra = j(`$RS("`)),
      (ia = j(`","`)),
      (aa = j(`")<\/script>`)),
      (oa = j(
        `function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("`
      )),
      (sa = j(`$RC("`)),
      (ca = j(`","`)),
      (la = j(`")<\/script>`)),
      (ua = j(
        `function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("`
      )),
      (da = j(`$RX("`)),
      (fa = j(`"`)),
      (pa = j(`)<\/script>`)),
      (ma = j(`,`)),
      (ha = /[<\u2028\u2029]/g),
      (ga = Object.assign),
      (_a = Symbol.for(`react.element`)),
      (va = Symbol.for(`react.portal`)),
      (ya = Symbol.for(`react.fragment`)),
      (ba = Symbol.for(`react.strict_mode`)),
      (xa = Symbol.for(`react.profiler`)),
      (Sa = Symbol.for(`react.provider`)),
      (Ca = Symbol.for(`react.context`)),
      (wa = Symbol.for(`react.forward_ref`)),
      (Ta = Symbol.for(`react.suspense`)),
      (Ea = Symbol.for(`react.suspense_list`)),
      (Da = Symbol.for(`react.memo`)),
      (Oa = Symbol.for(`react.lazy`)),
      (ka = Symbol.for(`react.scope`)),
      (Aa = Symbol.for(`react.debug_trace_mode`)),
      (ja = Symbol.for(`react.legacy_hidden`)),
      (Ma = Symbol.for(`react.default_value`)),
      (Na = Symbol.iterator),
      (Pa = {}),
      (Fa = null),
      (Ia = {
        isMounted: function () {
          return !1;
        },
        enqueueSetState: function (e, t) {
          ((e = e._reactInternals), e.queue !== null && e.queue.push(t));
        },
        enqueueReplaceState: function (e, t) {
          ((e = e._reactInternals), (e.replace = !0), (e.queue = [t]));
        },
        enqueueForceUpdate: function () {},
      }),
      (La = { id: 1, overflow: `` }),
      (Ra = Math.clz32 ? Math.clz32 : cn),
      (za = Math.log),
      (Ba = Math.LN2),
      (Va = typeof Object.is == `function` ? Object.is : ln),
      (X = null),
      (Ha = null),
      (Ua = null),
      (Z = null),
      (Wa = !1),
      (Ga = !1),
      (Ka = 0),
      (Q = null),
      (qa = 0),
      (Ja = {
        readContext: function (e) {
          return e._currentValue;
        },
        useContext: function (e) {
          return (un(), e._currentValue);
        },
        useMemo: gn,
        useReducer: hn,
        useRef: function (e) {
          ((X = un()), (Z = fn()));
          var t = Z.memoizedState;
          return t === null ? ((e = { current: e }), (Z.memoizedState = e)) : t;
        },
        useState: function (e) {
          return hn(mn, e);
        },
        useInsertionEffect: yn,
        useLayoutEffect: function () {},
        useCallback: function (e, t) {
          return gn(function () {
            return e;
          }, t);
        },
        useImperativeHandle: yn,
        useEffect: yn,
        useDebugValue: yn,
        useDeferredValue: function (e) {
          return (un(), e);
        },
        useTransition: function () {
          return (un(), [!1, vn]);
        },
        useId: function () {
          var e = Ha.treeContext,
            t = e.overflow;
          ((e = e.id), (e = (e & ~(1 << (32 - Ra(e) - 1))).toString(32) + t));
          var n = Ya;
          if (n === null) throw Error(D(404));
          return (
            (t = Ka++),
            (e = `:` + n.idPrefix + `R` + e),
            0 < t && (e += `H` + t.toString(32)),
            e + `:`
          );
        },
        useMutableSource: function (e, t) {
          return (un(), t(e._source));
        },
        useSyncExternalStore: function (e, t, n) {
          if (n === void 0) throw Error(D(407));
          return n();
        },
      }),
      (Ya = null),
      (Xa = Wr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher),
      (Ur.renderToReadableStream = function (e, t) {
        return new Promise(function (n, r) {
          var i,
            a,
            o = new Promise(function (e, t) {
              ((a = e), (i = t));
            }),
            s = Sn(
              e,
              Rt(
                t ? t.identifierPrefix : void 0,
                t ? t.nonce : void 0,
                t ? t.bootstrapScriptContent : void 0,
                t ? t.bootstrapScripts : void 0,
                t ? t.bootstrapModules : void 0
              ),
              zt(t ? t.namespaceURI : void 0),
              t ? t.progressiveChunkSize : void 0,
              t ? t.onError : void 0,
              a,
              function () {
                var e = new ReadableStream(
                  {
                    type: `bytes`,
                    pull: function (e) {
                      if (s.status === 1) ((s.status = 2), Pt(e, s.fatalError));
                      else if (s.status !== 2 && s.destination === null) {
                        s.destination = e;
                        try {
                          Un(s, e);
                        } catch (e) {
                          (Tn(s, e), En(s, e));
                        }
                      }
                    },
                    cancel: function () {
                      Wn(s);
                    },
                  },
                  { highWaterMark: 0 }
                );
                ((e.allReady = o), n(e));
              },
              function (e) {
                (o.catch(function () {}), r(e));
              },
              i
            );
          if (t && t.signal) {
            var c = t.signal,
              l = function () {
                (Wn(s, c.reason), c.removeEventListener(`abort`, l));
              };
            c.addEventListener(`abort`, l);
          }
          Ln(s);
        });
      }),
      (Ur.version = `18.2.0`),
      ($ = {}),
      (Za = Kn),
      (Qa = Ur),
      ($.version = Za.version),
      ($.renderToString = Za.renderToString),
      ($.renderToStaticMarkup = Za.renderToStaticMarkup),
      ($.renderToNodeStream = Za.renderToNodeStream),
      ($.renderToStaticNodeStream = Za.renderToStaticNodeStream),
      ($.renderToReadableStream = Qa.renderToReadableStream),
      $.version,
      $.renderToString,
      $.renderToStaticMarkup,
      $.renderToNodeStream,
      $.renderToStaticNodeStream,
      ($a = $.renderToReadableStream));
  });
function to(e, t) {
  return { description: `Coming Soon!`, robots: `max-image-preview:large`, title: `JuyFol` };
}
var no = t(() => {});
function ro(e, t) {
  return {
    breakpoints: [{ hash: `72rtr7` }],
    description: to(e, t).description,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-p4uBd`,
    title: `JuyFol | Home`,
    viewport: `width=1200`,
  };
}
var io,
  ao,
  oo = t(() => {
    (no(),
      (io = 1),
      (ao = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo = t(() => {
    (h(),
      ae(),
      re(),
      r(),
      oo(),
      (so = {}),
      (co = []),
      (lo = `framer-p4uBd`),
      (uo = { WQLkyLRf1: `framer-v-72rtr7` }),
      (fo = (e, t, n) => (e && t ? `position` : n)),
      (po = (e, t) => `translateX(-50%) ${t}`),
      (mo = ({ value: e }) =>
        oe()
          ? null
          : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (ho = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (go = be(
        f(function (e, t) {
          let r = i(null),
            a = t ?? r,
            o = _(),
            { activeLocale: c, setLocale: l } = ue();
          le();
          let { style: u, className: f, layoutId: h, variant: g, ...ee } = ho(e);
          fe(n(() => ro({}, c), [c]));
          let [re, ae] = de(g, so, !1),
            oe = _e(lo),
            se = p(xe)?.isLayoutTemplate,
            ce = !!p(te)?.transition?.layout,
            y = fo(se, ce);
          return (
            ie({}),
            d(xe.Provider, {
              value: { activeVariantId: re, primaryVariantId: `WQLkyLRf1`, variantClassNames: uo },
              children: m(ne, {
                id: h ?? o,
                children: [
                  d(mo, {
                    value: `html body { background: linear-gradient(180deg, rgb(38, 252, 188) 20.078461745689655%, rgb(3, 196, 255) 100%); }`,
                  }),
                  m(v.div, {
                    ...ee,
                    className: _e(oe, `framer-72rtr7`, f),
                    ref: a,
                    style: { ...u },
                    children: [
                      d(he, {
                        __fromCanvasComponent: !0,
                        children: d(s, {
                          children: d(`p`, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `R0Y7SW9zZXZrYSBDaGFyb24gTW9uby1yZWd1bGFy`,
                              "--framer-font-family": `"Iosevka Charon Mono", "Iosevka Charon Mono Placeholder", monospace`,
                              "--framer-font-size": `74px`,
                            },
                            children: `We're working on something big.`,
                          }),
                        }),
                        className: `framer-yb0cla`,
                        fonts: [`GF;Iosevka Charon Mono-regular`],
                        layout: y,
                        transformTemplate: po,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      d(he, {
                        __fromCanvasComponent: !0,
                        children: d(s, {
                          children: d(`p`, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `R0Y7SW9zZXZrYSBDaGFyb24gTW9uby1yZWd1bGFy`,
                              "--framer-font-family": `"Iosevka Charon Mono", "Iosevka Charon Mono Placeholder", monospace`,
                              "--framer-font-size": `56px`,
                            },
                            children: `Check back soon! - JuyFol`,
                          }),
                        }),
                        className: `framer-ltqj2q`,
                        fonts: [`GF;Iosevka Charon Mono-regular`],
                        layout: y,
                        transformTemplate: po,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    ],
                  }),
                  d(`div`, { id: `overlay` }),
                ],
              }),
            })
          );
        }),
        [
          `.framer-p4uBd.framer-lux5qc, .framer-p4uBd .framer-lux5qc { display: block; }`,
          `.framer-p4uBd.framer-72rtr7 { background: linear-gradient(180deg, #26fcbc 20.078461745689655%, rgb(3, 196, 255) 100%); height: 1000px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1200px; }`,
          `.framer-p4uBd .framer-yb0cla { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 126px; transform: translateX(-50%); white-space: pre; width: auto; }`,
          `.framer-p4uBd .framer-ltqj2q { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; left: 50%; position: absolute; top: 242px; transform: translateX(-50%); white-space: pre; width: auto; }`,
        ],
        `framer-p4uBd`
      )),
      (go.displayName = `Home`),
      (go.defaultProps = { height: 1e3, width: 1200 }),
      ge(
        go,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Iosevka Charon Mono`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Iosevka Charon Mono`,
                url: `https://fonts.gstatic.com/s/iosevkacharonmono/v1/ZXu6e00asreaO3wM1TYAhasEUi4e1q2vhel9YbLsZ_A.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (_o = {
        exports: {
          queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FrameraugiA20Il`,
            slots: [],
            annotations: {
              framerColorSyntax: `true`,
              framerResponsiveScreen: `true`,
              framerAcceptsLayoutTemplate: `false`,
              framerImmutableVariables: `true`,
              framerContractVersion: `1`,
              framerIntrinsicHeight: `1000`,
              framerScrollSections: `false`,
              framerIntrinsicWidth: `1200`,
              framerDisplayContentsDiv: `false`,
              framerAutoSizeImages: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,
              framerLayoutTemplateFlowEffect: `true`,
              framerComponentViewportWidth: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
async function yo(e, t, n) {
  let r = xo[e],
    i = r ? await r(t, n) : void 0,
    a = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of bo) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(i);
    n && a[t.placement].push({ ...t, code: n });
  }
  return a;
}
var bo,
  xo,
  So,
  Co,
  wo = t(() => {
    ((bo = []),
      (xo = {}),
      (So = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] }),
      (Co = {
        exports: {
          snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
          getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  To,
  Eo,
  Do,
  Oo = t(() => {
    (h(),
      r(),
      ae(),
      (To = () => (
        o(() => {
          let e = document.querySelector(`meta[name="robots"]`);
          e
            ? e.setAttribute(`content`, `noindex`)
            : ((e = document.createElement(`meta`)),
              e.setAttribute(`name`, `robots`),
              e.setAttribute(`content`, `noindex`),
              document.head.appendChild(e));
        }, []),
        d(`div`, {
          className: `__framer-not-found-page`,
          style: {
            display: `flex`,
            height: `100vh`,
            alignItems: `center`,
            justifyContent: `center`,
            backgroundColor: `var(--color-primary)`,
            background: `var(--color-background)`,
            fontSize: `var(--font-size-body)`,
            boxSizing: `border-box`,
            fontFeatureSettings: `"liga", "clig"`,
            fontVariantLigatures: `common-ligatures`,
            textRendering: `optimizeLegibility`,
          },
          children: m(`main`, {
            style: {
              boxSizing: `border-box`,
              fontFamily: `"Inter", sans-serif`,
              fontWeight: 500,
              maxWidth: `240px`,
              width: `100%`,
              display: `flex`,
              alignItems: `center`,
              flexDirection: `column`,
              padding: `0 20px`,
              textWrap: `balance`,
            },
            children: [
              d(`svg`, {
                xmlns: `http://www.w3.org/2000/svg`,
                width: `14`,
                height: `21`,
                style: {
                  verticalAlign: `middle`,
                  color: `var(--color-primary)`,
                  marginBottom: `20px`,
                },
                children: d(`path`, {
                  d: `M 14 0 L 14 7 L 7 7 L 0 0 Z M 14 14 L 7 14 L 7 21 L 0 14 L 0 7 L 7 7 Z`,
                  fill: `currentColor`,
                }),
              }),
              d(`h1`, {
                style: {
                  margin: `0 0 10px 0`,
                  fontSize: `var(--font-size-title)`,
                  color: `var(--color-primary)`,
                  textAlign: `center`,
                },
                children: `Page Not Found`,
              }),
              d(`div`, {
                style: {
                  color: `var(--color-secondary)`,
                  marginBottom: `20px`,
                  lineHeight: `1.5em`,
                  textAlign: `center`,
                },
                children: `The page you are looking for does not exist or may have been moved.`,
              }),
              d(`a`, {
                href: `/`,
                role: `button`,
                style: {
                  backgroundColor: `var(--color-tint)`,
                  color: `#ffffff`,
                  paddingLeft: `8px`,
                  paddingRight: `8px`,
                  borderRadius: `8px`,
                  lineHeight: `30px`,
                  height: `30px`,
                  textDecoration: `none`,
                  verticalAlign: `baseline`,
                },
                children: `Back to Home`,
              }),
            ],
          }),
        })
      )),
      (Eo = be(To, [
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 600;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
        U+FE2E-FE2F;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+1F00-1FFF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0370-03FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
        U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
        U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
        U+2212, U+2215, U+FEFF, U+FFFD;
    }`,
        `@font-face {
      font-family: Inter;
      src: url(https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2);
      font-display: swap;
      font-style: normal;
      font-weight: 500;
      unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
        U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }`,
        `@font-face {
      font-family: Inter Placeholder;
      src: local("Arial");
      ascent-override: 89.79%;
      descent-override: 22.36%;
      line-gap-override: 0%;
      size-adjust: 107.89%;
    }`,
        `.__framer-not-found-page {
      --color-background: #ffffff;
      --color-primary: #333;
      --color-secondary: #888;
      --color-tint: #0099ff;
      --font-size-body: 12px;
      --font-size-title: 12px;
    }`,
        `@media (prefers-color-scheme: dark) {
      .__framer-not-found-page {
        --color-background: #000000;
        --color-primary: #fff;
        --color-secondary: #888;
      }
    }`,
      ])),
      (Do = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `component`,
            slots: [],
            annotations: { framerContractVersion: `1` },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  ko = e({ __FramerMetadata__: () => Do, default: () => Eo }),
  Ao = t(() => {
    (Oo(), Oo());
  });
function jo() {
  let e = !1;
  try {
    e = c.self !== c.top;
  } catch {
    e = !0;
  }
  if (!e) return !1;
  let t = null,
    n = !1;
  if (c.location.ancestorOrigins && c.location.ancestorOrigins.length > 0) {
    let e = c.location.ancestorOrigins[0];
    try {
      t = new URL(e).host;
    } catch {}
  } else if (document.referrer)
    try {
      t = new URL(document.referrer).host;
    } catch {}
  return (t && (n = t === Po || t.endsWith(`.${Po}`)), n);
}
function Mo(e) {
  return f((t, n) => {
    let r = ee(Fo, Io, Lo),
      i = Ce.current() === Ce.canvas;
    return r && !i
      ? null
      : d(e, {
          ...t,
          ref: n,
          onClick: (e) => {
            (e.preventDefault(),
              c.open(
                `https://www.framer.com/r/badge/?utm_campaign=freeplanbadge&utm_source=${encodeURIComponent(c?.location?.origin)}`
              ));
          },
          style: { ...t.style, pointerEvents: `auto` },
          title: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
          className: t.className + ` __framer-badge`,
        });
  });
}
function No(e) {
  return f((t, n) =>
    m(g, {
      children: [
        d(`p`, {
          style: { position: `absolute`, transform: `scale(0.001)` },
          children: `Create a free website with Framer, the website builder loved by startups, designers and agencies.`,
        }),
        d(e, { ...t, ref: n }),
      ],
    })
  );
}
var Po,
  Fo,
  Io,
  Lo,
  Ro = t(() => {
    (a(),
      h(),
      r(),
      ae(),
      (Po = `framer.com`),
      (Fo = () => () => {}),
      (Io = () => jo()),
      (Lo = () => !1));
  }),
  zo,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo = t(() => {
    (h(),
      ae(),
      r(),
      (zo = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 97 10" xmlns="http://www.w3.org/2000/svg"><path d="M 91.736 9.781 L 91.736 2.818 L 93.316 2.818 L 93.316 3.98 L 93.374 3.98 C 93.501 3.577 93.714 3.269 94.014 3.053 C 94.328 2.833 94.704 2.72 95.087 2.729 C 95.185 2.729 95.287 2.733 95.392 2.742 C 95.498 2.75 95.587 2.759 95.659 2.767 L 95.659 4.253 C 95.552 4.23 95.444 4.215 95.335 4.209 C 95.188 4.192 95.039 4.184 94.891 4.184 C 94.603 4.184 94.343 4.247 94.11 4.374 C 93.882 4.497 93.702 4.674 93.57 4.907 C 93.434 5.16 93.366 5.445 93.374 5.732 L 93.374 9.782 L 91.736 9.782 Z M 87.286 9.927 C 86.588 9.927 85.985 9.779 85.477 9.483 C 84.969 9.183 84.577 8.761 84.303 8.22 C 84.032 7.678 83.897 7.048 83.897 6.328 C 83.897 5.618 84.032 4.988 84.303 4.443 C 84.56 3.917 84.96 3.475 85.458 3.167 C 85.953 2.858 86.531 2.704 87.191 2.704 C 87.64 2.704 88.059 2.78 88.448 2.932 C 88.841 3.08 89.186 3.305 89.482 3.605 C 89.779 3.901 90.009 4.272 90.174 4.715 C 90.344 5.155 90.428 5.67 90.428 6.258 L 90.428 6.748 L 84.627 6.748 L 84.627 5.629 L 89.609 5.629 L 88.86 5.946 C 88.868 5.594 88.801 5.243 88.664 4.918 C 88.549 4.641 88.355 4.404 88.105 4.238 C 87.86 4.074 87.559 3.991 87.204 3.991 C 86.852 3.991 86.55 4.074 86.296 4.239 C 86.042 4.404 85.847 4.629 85.712 4.912 C 85.576 5.213 85.509 5.54 85.515 5.87 L 85.515 6.62 C 85.515 7.047 85.587 7.413 85.731 7.717 C 85.879 8.017 86.089 8.248 86.359 8.409 C 86.63 8.566 86.948 8.644 87.312 8.644 C 87.562 8.644 87.786 8.608 87.984 8.536 C 88.177 8.467 88.353 8.356 88.499 8.212 C 88.642 8.072 88.749 7.906 88.816 7.711 L 90.326 7.921 C 90.228 8.313 90.032 8.673 89.756 8.968 C 89.476 9.268 89.125 9.503 88.702 9.672 C 88.282 9.842 87.811 9.926 87.286 9.926 Z M 72.643 9.781 L 72.643 2.818 L 74.191 2.818 L 74.235 4.443 L 74.115 4.443 C 74.225 4.041 74.385 3.713 74.597 3.459 C 74.798 3.212 75.055 3.016 75.347 2.888 C 75.63 2.761 75.928 2.698 76.241 2.698 C 76.753 2.698 77.177 2.854 77.511 3.167 C 77.849 3.48 78.074 3.922 78.184 4.494 L 77.987 4.494 C 78.066 4.132 78.232 3.795 78.469 3.51 C 78.691 3.248 78.972 3.041 79.289 2.907 C 79.615 2.766 79.968 2.695 80.323 2.697 C 80.746 2.697 81.127 2.79 81.465 2.977 C 81.808 3.159 82.077 3.429 82.272 3.789 C 82.47 4.149 82.57 4.591 82.57 5.116 L 82.57 9.781 L 80.939 9.781 L 80.939 5.363 C 80.939 4.923 80.818 4.602 80.577 4.398 C 80.333 4.19 80.021 4.08 79.701 4.088 C 79.434 4.088 79.204 4.145 79.009 4.258 C 78.816 4.371 78.66 4.536 78.559 4.735 C 78.449 4.953 78.394 5.195 78.399 5.439 L 78.399 9.781 L 76.813 9.781 L 76.813 5.287 C 76.813 4.923 76.698 4.633 76.47 4.417 C 76.246 4.197 75.958 4.087 75.606 4.087 C 75.366 4.087 75.143 4.145 74.94 4.259 C 74.737 4.374 74.569 4.543 74.458 4.748 C 74.339 4.963 74.28 5.23 74.28 5.548 L 74.28 9.781 L 72.642 9.781 Z M 67.291 9.915 C 66.724 9.915 66.221 9.771 65.781 9.483 C 65.344 9.191 65 8.776 64.746 8.239 C 64.496 7.701 64.371 7.059 64.371 6.309 C 64.371 5.552 64.498 4.904 64.752 4.367 C 65.01 3.829 65.359 3.419 65.799 3.135 C 66.244 2.851 66.763 2.703 67.291 2.71 C 67.668 2.71 67.987 2.771 68.25 2.894 C 68.516 3.013 68.736 3.164 68.91 3.351 C 69.083 3.533 69.22 3.719 69.322 3.91 L 69.38 3.91 L 69.38 2.818 L 70.998 2.818 L 70.998 9.781 L 69.38 9.781 L 69.38 8.696 L 69.322 8.696 C 69.211 8.908 69.07 9.102 68.903 9.273 C 68.726 9.46 68.503 9.614 68.237 9.737 C 67.938 9.863 67.615 9.923 67.291 9.915 Z M 67.723 8.563 C 68.078 8.563 68.383 8.469 68.637 8.283 C 68.901 8.079 69.101 7.804 69.215 7.49 C 69.35 7.147 69.418 6.751 69.418 6.303 C 69.418 5.85 69.35 5.456 69.214 5.123 C 69.103 4.811 68.902 4.539 68.637 4.341 C 68.387 4.155 68.083 4.062 67.723 4.062 C 67.363 4.062 67.058 4.155 66.809 4.342 C 66.559 4.528 66.369 4.788 66.237 5.122 C 66.107 5.456 66.041 5.85 66.041 6.302 C 66.041 6.752 66.106 7.145 66.237 7.483 C 66.369 7.822 66.559 8.086 66.809 8.277 C 67.063 8.467 67.367 8.563 67.723 8.563 Z M 59.909 9.781 L 59.909 2.818 L 61.489 2.818 L 61.489 3.98 L 61.546 3.98 C 61.673 3.577 61.887 3.269 62.188 3.053 C 62.488 2.837 62.846 2.729 63.26 2.729 C 63.358 2.729 63.46 2.733 63.565 2.742 C 63.671 2.75 63.76 2.759 63.832 2.767 L 63.832 4.253 C 63.725 4.23 63.617 4.215 63.508 4.209 C 63.361 4.192 63.212 4.184 63.064 4.184 C 62.776 4.184 62.516 4.247 62.283 4.374 C 62.054 4.497 61.875 4.674 61.743 4.907 C 61.607 5.16 61.539 5.445 61.546 5.732 L 61.546 9.782 L 59.909 9.782 Z M 52.647 9.781 L 52.647 0.323 L 58.804 0.323 L 58.804 1.758 L 54.336 1.758 L 54.336 4.513 L 58.411 4.513 L 58.411 5.928 L 54.336 5.928 L 54.336 9.781 Z M 43.265 5.744 L 43.265 9.781 L 41.628 9.781 L 41.628 2.818 L 43.195 2.818 L 43.215 4.551 L 43.024 4.551 C 43.223 3.946 43.517 3.489 43.906 3.18 C 44.296 2.867 44.78 2.71 45.36 2.71 C 45.842 2.71 46.263 2.814 46.623 3.021 C 46.987 3.228 47.268 3.531 47.467 3.929 C 47.67 4.322 47.772 4.805 47.772 5.376 L 47.772 9.781 L 46.141 9.781 L 46.141 5.63 C 46.141 5.147 46.018 4.775 45.773 4.513 C 45.531 4.246 45.195 4.113 44.763 4.113 C 44.475 4.113 44.217 4.176 43.989 4.303 C 43.762 4.429 43.576 4.619 43.456 4.849 C 43.329 5.09 43.266 5.389 43.266 5.744 Z M 38.353 9.781 L 38.353 2.818 L 39.99 2.818 L 39.99 9.781 L 38.352 9.781 Z M 39.171 1.815 C 38.919 1.821 38.675 1.728 38.491 1.555 C 38.31 1.389 38.208 1.153 38.212 0.907 C 38.208 0.663 38.31 0.43 38.492 0.267 C 38.674 0.091 38.918 -0.005 39.171 0 C 39.438 0 39.664 0.088 39.851 0.266 C 40.041 0.44 40.136 0.653 40.136 0.907 C 40.136 1.161 40.041 1.377 39.85 1.555 C 39.667 1.728 39.423 1.821 39.171 1.815 Z M 30.741 9.927 C 30.043 9.927 29.44 9.779 28.932 9.483 C 28.426 9.185 28.018 8.746 27.758 8.22 C 27.488 7.678 27.352 7.048 27.352 6.328 C 27.352 5.618 27.487 4.988 27.758 4.443 C 28.015 3.917 28.415 3.475 28.913 3.167 C 29.408 2.858 29.986 2.704 30.646 2.704 C 31.095 2.704 31.514 2.78 31.903 2.932 C 32.293 3.079 32.646 3.308 32.938 3.605 C 33.234 3.901 33.464 4.272 33.629 4.715 C 33.799 5.155 33.883 5.67 33.883 6.258 L 33.883 6.748 L 28.083 6.748 L 28.083 5.629 L 33.066 5.629 L 32.316 5.946 C 32.316 5.553 32.251 5.21 32.12 4.918 C 32.005 4.641 31.811 4.404 31.561 4.238 C 31.316 4.074 31.015 3.991 30.66 3.991 C 30.34 3.983 30.024 4.069 29.752 4.239 C 29.498 4.404 29.303 4.629 29.168 4.912 C 29.032 5.213 28.965 5.54 28.971 5.87 L 28.971 6.62 C 28.971 7.047 29.043 7.413 29.187 7.717 C 29.335 8.017 29.545 8.248 29.816 8.409 C 30.086 8.566 30.404 8.644 30.768 8.644 C 31.018 8.644 31.242 8.608 31.441 8.536 C 31.634 8.467 31.809 8.356 31.955 8.212 C 32.099 8.072 32.205 7.906 32.272 7.711 L 33.782 7.921 C 33.684 8.313 33.488 8.673 33.212 8.968 C 32.932 9.268 32.581 9.503 32.158 9.672 C 31.707 9.847 31.226 9.934 30.742 9.926 Z M 22.312 9.915 C 21.777 9.924 21.251 9.774 20.801 9.483 C 20.361 9.191 20.016 8.776 19.766 8.239 C 19.516 7.701 19.392 7.059 19.392 6.309 C 19.392 5.552 19.519 4.904 19.772 4.367 C 20.027 3.829 20.374 3.419 20.814 3.135 C 21.254 2.852 21.751 2.71 22.305 2.71 C 22.682 2.71 23.001 2.771 23.264 2.894 C 23.53 3.013 23.748 3.164 23.918 3.351 C 24.091 3.533 24.228 3.721 24.33 3.916 L 24.381 3.916 L 24.381 0.323 L 26.019 0.323 L 26.019 9.781 L 24.413 9.781 L 24.413 8.689 L 24.343 8.689 C 24.233 8.904 24.091 9.101 23.923 9.273 C 23.734 9.468 23.51 9.626 23.263 9.737 C 23.001 9.855 22.684 9.915 22.312 9.915 Z M 22.737 8.563 C 23.092 8.563 23.397 8.469 23.651 8.283 C 23.915 8.079 24.115 7.804 24.229 7.49 C 24.364 7.147 24.432 6.751 24.432 6.303 C 24.432 5.85 24.364 5.456 24.229 5.123 C 24.118 4.811 23.917 4.539 23.651 4.341 C 23.385 4.151 23.064 4.053 22.737 4.062 C 22.41 4.053 22.089 4.152 21.823 4.342 C 21.573 4.528 21.383 4.79 21.252 5.128 C 21.118 5.505 21.054 5.903 21.062 6.303 C 21.062 6.751 21.127 7.145 21.258 7.483 C 21.389 7.822 21.58 8.086 21.829 8.277 C 22.079 8.467 22.381 8.563 22.737 8.563 Z M 14.352 9.915 C 13.817 9.924 13.291 9.774 12.841 9.483 C 12.405 9.191 12.061 8.776 11.806 8.239 C 11.556 7.701 11.432 7.059 11.432 6.309 C 11.432 5.552 11.559 4.904 11.812 4.367 C 12.071 3.829 12.42 3.419 12.86 3.135 C 13.3 2.852 13.797 2.71 14.352 2.71 C 14.728 2.71 15.048 2.771 15.31 2.894 C 15.577 3.013 15.797 3.164 15.97 3.351 C 16.144 3.533 16.281 3.719 16.383 3.91 L 16.44 3.91 L 16.44 2.818 L 18.059 2.818 L 18.059 9.781 L 16.44 9.781 L 16.44 8.696 L 16.383 8.696 C 16.272 8.908 16.131 9.102 15.964 9.273 C 15.786 9.46 15.564 9.614 15.298 9.737 C 14.999 9.863 14.676 9.923 14.352 9.915 Z M 14.783 8.563 C 15.139 8.563 15.443 8.469 15.697 8.283 C 15.951 8.093 16.144 7.828 16.275 7.49 C 16.41 7.147 16.478 6.751 16.478 6.303 C 16.478 5.85 16.41 5.456 16.275 5.123 C 16.164 4.811 15.963 4.539 15.697 4.341 C 15.447 4.155 15.143 4.062 14.783 4.062 C 14.423 4.062 14.119 4.155 13.869 4.342 C 13.608 4.543 13.41 4.813 13.298 5.122 C 13.167 5.456 13.101 5.85 13.101 6.302 C 13.101 6.752 13.167 7.145 13.298 7.483 C 13.429 7.822 13.62 8.086 13.869 8.277 C 14.123 8.467 14.428 8.563 14.783 8.563 Z M 0 9.781 L 0 0.323 L 2.507 0.323 L 4.322 5.236 C 4.382 5.418 4.452 5.646 4.532 5.922 C 4.612 6.197 4.695 6.493 4.779 6.811 C 4.864 7.124 4.942 7.428 5.014 7.725 C 5.09 8.017 5.154 8.273 5.204 8.493 L 4.843 8.493 C 5.045 7.633 5.267 6.778 5.509 5.928 C 5.589 5.648 5.662 5.418 5.725 5.236 L 7.509 0.323 L 10.023 0.323 L 10.023 9.781 L 8.347 9.781 L 8.347 4.989 C 8.35 4.443 8.358 3.897 8.372 3.351 L 8.398 2.38 C 8.406 2.054 8.412 1.743 8.417 1.447 L 8.563 1.447 C 8.473 1.773 8.379 2.107 8.277 2.45 L 7.979 3.446 C 7.886 3.764 7.795 4.056 7.706 4.322 C 7.636 4.546 7.561 4.768 7.483 4.989 L 5.719 9.781 L 4.303 9.781 L 2.513 4.989 L 2.291 4.329 C 2.198 4.04 2.107 3.75 2.018 3.459 L 1.713 2.469 C 1.613 2.129 1.514 1.788 1.415 1.447 L 1.593 1.447 C 1.597 1.73 1.603 2.035 1.612 2.361 C 1.62 2.682 1.627 3.006 1.631 3.332 C 1.639 3.654 1.646 3.958 1.65 4.246 C 1.658 4.534 1.663 4.781 1.663 4.989 L 1.663 9.781 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="9.927205036163329px" id="LLqmOOyHA" transform="translate(0 -0.25)" width="95.65900006103517px"/></svg>'), var(--framer-icon-mask, none)`),
      (Bo = `alpha, var(--framer-icon-mask-mode, add)`),
      (Vo = `no-repeat`),
      (Ho = `center`),
      (Uo = `auto`),
      (Wo = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? d(v.div, { ...a, layoutId: r, ref: t }) : d(`div`, { ...a, ref: t });
      })),
      (Go = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (Ko = be(
        f(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = Go(e);
          return d(Wo, {
            ...c,
            className: _e(`framer-g7oZR`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-g7oZR { -webkit-mask-image: ${zo}; -webkit-mask-position: ${Ho}; -webkit-mask-repeat: ${Vo}; -webkit-mask-size: ${Uo}; aspect-ratio: 9.7; background-color: var(--1bd4d3i); mask-image: ${zo}; mask-mode: ${Bo}; mask-position: ${Ho}; mask-repeat: ${Vo}; mask-size: ${Uo}; width: 97px; }`,
        ],
        `framer-g7oZR`
      )),
      (Ko.displayName = `Text`),
      ye(Ko, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: Se.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: Se.Color },
      }));
  }),
  Jo,
  Yo,
  Xo,
  Zo,
  Qo,
  $o,
  es,
  ts,
  ns = t(() => {
    (h(),
      ae(),
      r(),
      (Jo = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 12 0 L 12 6 L 6 6 Z M 0 6 L 6 6 L 12 12 L 6 12 L 6 18 L 0 12 Z" fill="var(--1bd4d3i, rgb(0, 0, 0))" height="18px" id="td4SVg2I8" transform="translate(0 1.5)" width="12px"/></svg>'), var(--framer-icon-mask, none)`),
      (Yo = `alpha, var(--framer-icon-mask-mode, add)`),
      (Xo = `no-repeat`),
      (Zo = `center`),
      (Qo = `auto`),
      ($o = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? d(v.div, { ...a, layoutId: r, ref: t }) : d(`div`, { ...a, ref: t });
      })),
      (es = ({ fill: e, fill2: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        vtL2DrqsL: t ?? a.vtL2DrqsL ?? `rgb(0, 0, 0)`,
        Z1QnXqTEb: e ?? a.Z1QnXqTEb ?? `rgb(0, 0, 0)`,
      })),
      (ts = be(
        f(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            Z1QnXqTEb: o,
            vtL2DrqsL: s,
            ...c
          } = es(e);
          return d($o, {
            ...c,
            className: _e(`framer-hcsc7`, r),
            layoutId: i,
            ref: t,
            style: { "--1bd4d3i": o, ...n },
          });
        }),
        [
          `.framer-hcsc7 { -webkit-mask-image: ${Jo}; -webkit-mask-position: ${Zo}; -webkit-mask-repeat: ${Xo}; -webkit-mask-size: ${Qo}; aspect-ratio: 0.6; background-color: var(--1bd4d3i); mask-image: ${Jo}; mask-mode: ${Yo}; mask-position: ${Zo}; mask-repeat: ${Xo}; mask-size: ${Qo}; width: 12px; }`,
        ],
        `framer-hcsc7`
      )),
      (ts.displayName = `Framer`),
      ye(ts, {
        Z1QnXqTEb: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Fill`, type: Se.Color },
        vtL2DrqsL: { defaultValue: `rgb(0, 0, 0)`, hidden: !0, title: `Fill 2`, type: Se.Color },
      }));
  }),
  rs = e({ __FramerMetadata__: () => bs, default: () => ys }),
  is,
  as,
  os,
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs,
  gs,
  _s,
  vs,
  ys,
  bs,
  xs = t(() => {
    (h(),
      ae(),
      re(),
      r(),
      Ro(),
      qo(),
      ns(),
      (is = y(ts)),
      (as = y(Ko)),
      (os = se(Ko, { nodeId: `pBR1Ew0r8`, override: No, scopeId: `PX9hIOIVM` })),
      (ss = pe(me(se(v.a, { nodeId: `HK2sXlagE`, override: Mo, scopeId: `PX9hIOIVM` })))),
      (cs = `framer-6jWyo`),
      (ls = { HK2sXlagE: `framer-v-n0ccwk` }),
      (us = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { damping: 40, delay: 1, mass: 1.5, stiffness: 350, type: `spring` },
        x: 0,
        y: 0,
      }),
      (ds = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      }),
      (fs = { duration: 0, type: `tween` }),
      (ps = (e, t) => `translate(-50%, -50%) ${t}`),
      (ms = (e, t) => `translateX(-50%) ${t}`),
      (hs = ({ value: e, children: t }) => {
        let r = p(te),
          i = e ?? r.transition,
          a = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return d(te.Provider, { value: a, children: t });
      }),
      (gs = v.create(s)),
      (_s = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (vs = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ys = be(
        f(function (e, t) {
          let n = i(null),
            r = t ?? n,
            a = _(),
            { activeLocale: o, setLocale: s } = ue();
          le();
          let { style: c, className: l, layoutId: u, variant: f, ...p } = _s(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: ee,
              gestureHandlers: te,
              gestureVariant: re,
              isLoading: ie,
              setGestureState: ae,
              setVariant: oe,
              variants: se,
            } = ce({ defaultVariant: `HK2sXlagE`, ref: r, variant: f, variantClassNames: ls }),
            y = vs(e, se),
            de = _e(cs);
          return d(ne, {
            id: u ?? a,
            children: d(gs, {
              animate: se,
              initial: !1,
              children: d(hs, {
                value: fs,
                children: d(ve, {
                  href: `https://www.framer.com`,
                  motionChild: !0,
                  nodeId: `HK2sXlagE`,
                  openInNewTab: !1,
                  relValues: [],
                  scopeId: `PX9hIOIVM`,
                  children: m(ss, {
                    ...p,
                    ...te,
                    __framer__presenceAnimate: us,
                    __framer__presenceInitial: ds,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: `${_e(de, `framer-n0ccwk`, l, g)} framer-bmpgw8`,
                    "data-framer-appear-id": `n0ccwk`,
                    "data-framer-name": `Light`,
                    "data-nosnippet": !0,
                    layoutDependency: y,
                    layoutId: `HK2sXlagE`,
                    optimized: !0,
                    ref: r,
                    style: { ...c },
                    children: [
                      d(v.div, {
                        className: `framer-13yxzio`,
                        "data-framer-name": `Backdrop`,
                        layoutDependency: y,
                        layoutId: `IH1cvP0s5`,
                        style: {
                          backgroundColor: `rgb(255, 255, 255)`,
                          borderBottomLeftRadius: 10,
                          borderBottomRightRadius: 10,
                          borderTopLeftRadius: 10,
                          borderTopRightRadius: 10,
                          boxShadow: `0px 0.6021873017743928px 1.5656869846134214px -1.5px rgba(0, 0, 0, 0.17), 0px 2.288533303243457px 5.950186588432988px -3px rgba(0, 0, 0, 0.14), 0px 10px 26px -4.5px rgba(0, 0, 0, 0.02)`,
                        },
                      }),
                      m(v.div, {
                        className: `framer-19yaanm`,
                        "data-framer-name": `Content`,
                        layoutDependency: y,
                        layoutId: `U6HIU1IEW`,
                        transformTemplate: ps,
                        children: [
                          d(v.div, {
                            className: `framer-1kflzx5`,
                            layoutDependency: y,
                            layoutId: `roMJYXHnO`,
                            children: d(ts, {
                              animated: !0,
                              className: `framer-e50co`,
                              "data-framer-name": `Logo`,
                              layoutDependency: y,
                              layoutId: `O3s3GcxMZ`,
                              style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                              transformTemplate: ms,
                            }),
                          }),
                          d(os, {
                            animated: !0,
                            className: `framer-1um7t9d`,
                            "data-framer-name": `Text`,
                            layoutDependency: y,
                            layoutId: `pBR1Ew0r8`,
                            style: { "--1bd4d3i": `rgb(0, 0, 0)`, "--otdjsv": `rgb(0, 0, 0)` },
                          }),
                        ],
                      }),
                      d(v.div, {
                        className: `framer-j4ugry`,
                        "data-framer-name": `Bottom`,
                        layoutDependency: y,
                        layoutId: `vCwsHyUh8`,
                        style: {
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                          mask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                          opacity: 0.06,
                          WebkitMask: `linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 100%) add`,
                        },
                      }),
                      d(v.div, {
                        className: `framer-jnuwbw`,
                        "data-framer-name": `Border`,
                        layoutDependency: y,
                        layoutId: `ZirFGX8Eh`,
                        style: {
                          borderBottomLeftRadius: 11,
                          borderBottomRightRadius: 11,
                          borderTopLeftRadius: 11,
                          borderTopRightRadius: 11,
                          boxShadow: `inset 0px 0px 0px 1px rgb(0, 0, 0)`,
                          opacity: 0.04,
                        },
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-6jWyo.framer-bmpgw8, .framer-6jWyo .framer-bmpgw8 { display: block; }`,
          `.framer-6jWyo.framer-n0ccwk { gap: 10px; height: 38px; overflow: visible; position: relative; text-decoration: none; width: 140px; }`,
          `.framer-6jWyo .framer-13yxzio { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-6jWyo .framer-19yaanm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }`,
          `.framer-6jWyo .framer-1kflzx5 { flex: none; height: 16px; overflow: visible; position: relative; width: 12px; }`,
          `.framer-6jWyo .framer-e50co { flex: none; height: var(--framer-aspect-ratio-supported, 20px); left: 50%; position: absolute; top: -2px; }`,
          `.framer-6jWyo .framer-1um7t9d { flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; }`,
          `.framer-6jWyo .framer-j4ugry, .framer-6jWyo .framer-jnuwbw { bottom: 0px; flex: none; left: 0px; overflow: visible; pointer-events: none; position: absolute; right: 0px; top: 0px; }`,
        ],
        `framer-6jWyo`
      )),
      (ys.displayName = `Badge`),
      (ys.defaultProps = { height: 38, width: 140 }),
      ge(ys, [{ explicitInter: !0, fonts: [] }, ...is, ...as], {
        supportsExplicitInterCodegen: !0,
      }),
      (bs = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerPX9hIOIVM`,
            slots: [],
            annotations: {
              framerAutoSizeImages: `true`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}`,
              framerIntrinsicWidth: `140`,
              framerIntrinsicHeight: `38`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export {
  $a as _,
  Co as a,
  So as c,
  vo as d,
  co as f,
  io as g,
  ro as h,
  Ao as i,
  go as l,
  oo as m,
  xs as n,
  yo as o,
  ao as p,
  ko as r,
  wo as s,
  rs as t,
  _o as u,
  eo as v,
};
//# sourceMappingURL=shared-lib.BjnZf-aG.mjs.map
