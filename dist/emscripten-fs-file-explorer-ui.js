var Je = Array.isArray, Yr = Array.prototype.indexOf, bt = Array.from, Gr = Object.defineProperty, se = Object.getOwnPropertyDescriptor, Kr = Object.getOwnPropertyDescriptors, zr = Object.prototype, Zr = Array.prototype, Yt = Object.getPrototypeOf, Tt = Object.isExtensible;
function Oe(e) {
  return typeof e == "function";
}
const Y = () => {
};
function Gt(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Xr(e, t) {
  if (Array.isArray(e))
    return e;
  if (!(Symbol.iterator in e))
    return Array.from(e);
  const r = [];
  for (const n of e)
    if (r.push(n), r.length === t) break;
  return r;
}
const B = 2, wt = 4, Qe = 8, yt = 16, ue = 32, Ae = 64, mt = 128, U = 256, We = 512, H = 1024, ve = 2048, ye = 4096, le = 8192, $e = 16384, Kt = 32768, Ue = 65536, Ot = 1 << 17, Jr = 1 << 18, zt = 1 << 19, vt = 1 << 20, Zt = 1 << 21, ce = Symbol("$state"), Xt = Symbol("legacy props"), Qr = Symbol(""), Jt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Qt(e) {
  return e === this.v;
}
function $r(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function en(e, t) {
  return e !== t;
}
function $t(e) {
  return !$r(e, this.v);
}
function tn(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function rn() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function nn(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ln() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function an(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function un() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function on() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function fn() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
const sn = 1, cn = 2, vn = 16, dn = 1, _n = 4, hn = 8, gn = 16, pn = 1, bn = 2, O = Symbol(), wn = "http://www.w3.org/1999/xhtml", yn = "http://www.w3.org/2000/svg", mn = "@attach";
function En(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let G = null;
function Ct(e) {
  G = e;
}
function D(e, t = !1, r) {
  G = {
    p: G,
    c: null,
    e: null,
    s: e,
    x: null,
    l: null
  };
}
function x(e) {
  var t = (
    /** @type {ComponentContext} */
    G
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      sr(n);
  }
  return G = t.p, /** @type {T} */
  {};
}
function er() {
  return !0;
}
function ie(e) {
  if (typeof e != "object" || e === null || ce in e)
    return e;
  const t = Yt(e);
  if (t !== zr && t !== Zr)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Je(e), i = /* @__PURE__ */ M(0), l = we, a = (o) => {
    if (we === l)
      return o();
    var u = N, d = we;
    _e(null), It(l);
    var c = o();
    return _e(u), It(d), c;
  };
  return n && r.set("length", /* @__PURE__ */ M(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, u, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && un();
        var c = r.get(u);
        return c === void 0 ? c = a(() => {
          var v = /* @__PURE__ */ M(d.value);
          return r.set(u, v), v;
        }) : A(c, d.value, !0), !0;
      },
      deleteProperty(o, u) {
        var d = r.get(u);
        if (d === void 0) {
          if (u in o) {
            const f = a(() => /* @__PURE__ */ M(O));
            r.set(u, f), ut(i);
          }
        } else {
          if (n && typeof u == "string") {
            var c = (
              /** @type {Source<number>} */
              r.get("length")
            ), v = Number(u);
            Number.isInteger(v) && v < c.v && A(c, v);
          }
          A(d, O), ut(i);
        }
        return !0;
      },
      get(o, u, d) {
        if (u === ce)
          return e;
        var c = r.get(u), v = u in o;
        if (c === void 0 && (!v || se(o, u)?.writable) && (c = a(() => {
          var s = ie(v ? o[u] : O), _ = /* @__PURE__ */ M(s);
          return _;
        }), r.set(u, c)), c !== void 0) {
          var f = b(c);
          return f === O ? void 0 : f;
        }
        return Reflect.get(o, u, d);
      },
      getOwnPropertyDescriptor(o, u) {
        var d = Reflect.getOwnPropertyDescriptor(o, u);
        if (d && "value" in d) {
          var c = r.get(u);
          c && (d.value = b(c));
        } else if (d === void 0) {
          var v = r.get(u), f = v?.v;
          if (v !== void 0 && f !== O)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return d;
      },
      has(o, u) {
        if (u === ce)
          return !0;
        var d = r.get(u), c = d !== void 0 && d.v !== O || Reflect.has(o, u);
        if (d !== void 0 || S !== null && (!c || se(o, u)?.writable)) {
          d === void 0 && (d = a(() => {
            var f = c ? ie(o[u]) : O, s = /* @__PURE__ */ M(f);
            return s;
          }), r.set(u, d));
          var v = b(d);
          if (v === O)
            return !1;
        }
        return c;
      },
      set(o, u, d, c) {
        var v = r.get(u), f = u in o;
        if (n && u === "length")
          for (var s = d; s < /** @type {Source<number>} */
          v.v; s += 1) {
            var _ = r.get(s + "");
            _ !== void 0 ? A(_, O) : s in o && (_ = a(() => /* @__PURE__ */ M(O)), r.set(s + "", _));
          }
        if (v === void 0)
          (!f || se(o, u)?.writable) && (v = a(() => /* @__PURE__ */ M(void 0)), A(v, ie(d)), r.set(u, v));
        else {
          f = v.v !== O;
          var g = a(() => ie(d));
          A(v, g);
        }
        var p = Reflect.getOwnPropertyDescriptor(o, u);
        if (p?.set && p.set.call(c, d), !f) {
          if (n && typeof u == "string") {
            var w = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(u);
            Number.isInteger(h) && h >= w.v && A(w, h + 1);
          }
          ut(i);
        }
        return !0;
      },
      ownKeys(o) {
        b(i);
        var u = Reflect.ownKeys(o).filter((v) => {
          var f = r.get(v);
          return f === void 0 || f.v !== O;
        });
        for (var [d, c] of r)
          c.v !== O && !(d in o) && u.push(d);
        return u;
      },
      setPrototypeOf() {
        on();
      }
    }
  );
}
function Mt(e) {
  try {
    if (e !== null && typeof e == "object" && ce in e)
      return e[ce];
  } catch {
  }
  return e;
}
function Sn(e, t) {
  return Object.is(Mt(e), Mt(t));
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  var t = B | ve, r = N !== null && (N.f & B) !== 0 ? (
    /** @type {Derived} */
    N
  ) : null;
  return S === null || r !== null && (r.f & U) !== 0 ? t |= U : S.f |= zt, {
    ctx: G,
    deps: null,
    effects: null,
    equals: Qt,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      O
    ),
    wv: 0,
    parent: r ?? S,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  const t = /* @__PURE__ */ Be(e);
  return wr(t), t;
}
// @__NO_SIDE_EFFECTS__
function tr(e) {
  const t = /* @__PURE__ */ Be(e);
  return t.equals = $t, t;
}
function rr(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      q(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Fn(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & B) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Et(e) {
  var t, r = S;
  ke(Fn(e));
  try {
    rr(e), t = Er(e);
  } finally {
    ke(r);
  }
  return t;
}
function nr(e) {
  var t = Et(e);
  if (e.equals(t) || (e.v = t, e.wv = yr()), !de) {
    var r = (fe || (e.f & U) !== 0) && e.deps !== null ? ye : H;
    ee(e, r);
  }
}
const pe = /* @__PURE__ */ new Map();
function Ge(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Qt,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function M(e, t) {
  const r = Ge(e);
  return wr(r), r;
}
// @__NO_SIDE_EFFECTS__
function kn(e, t = !1, r = !0) {
  const n = Ge(e);
  return t || (n.equals = $t), n;
}
function A(e, t, r = !1) {
  N !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!X || (N.f & Ot) !== 0) && er() && (N.f & (B | yt | Ot)) !== 0 && !ae?.includes(e) && fn();
  let n = r ? ie(t) : t;
  return ir(e, n);
}
function ir(e, t) {
  if (!e.equals(t)) {
    var r = e.v;
    de ? pe.set(e, t) : pe.set(e, r), e.v = t, (e.f & B) !== 0 && ((e.f & ve) !== 0 && Et(
      /** @type {Derived} */
      e
    ), ee(e, (e.f & U) === 0 ? H : ye)), e.wv = yr(), lr(e, ve), S !== null && (S.f & H) !== 0 && (S.f & (ue | Ae)) === 0 && (W === null ? jn([e]) : W.push(e));
  }
  return t;
}
function ut(e) {
  A(e, e.v + 1);
}
function lr(e, t) {
  var r = e.reactions;
  if (r !== null)
    for (var n = r.length, i = 0; i < n; i++) {
      var l = r[i], a = l.f;
      (a & ve) === 0 && (ee(l, t), (a & (H | U)) !== 0 && ((a & B) !== 0 ? lr(
        /** @type {Derived} */
        l,
        ye
      ) : nt(
        /** @type {Effect} */
        l
      )));
    }
}
function Nn() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let An = !1;
var Dt, ar, ur, or;
function Pn() {
  if (Dt === void 0) {
    Dt = window, ar = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ur = se(t, "firstChild").get, or = se(t, "nextSibling").get, Tt(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Tt(r) && (r.__t = void 0);
  }
}
function et(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Se(e) {
  return ur.call(e);
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  return or.call(e);
}
function P(e, t) {
  return /* @__PURE__ */ Se(e);
}
function C(e, t) {
  {
    var r = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Se(
        /** @type {Node} */
        e
      )
    );
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ tt(r) : r;
  }
}
function R(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ tt(n);
  return n;
}
function Tn(e) {
  e.textContent = "";
}
function On(e) {
  S === null && N === null && nn(), N !== null && (N.f & U) !== 0 && S === null && rn(), de && tn();
}
function Cn(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function me(e, t, r, n = !0) {
  var i = S, l = {
    ctx: G,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | ve,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i,
    b: i && i.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (r)
    try {
      Nt(l), l.f |= Kt;
    } catch (u) {
      throw q(l), u;
    }
  else t !== null && nt(l);
  var a = r && l.deps === null && l.first === null && l.nodes_start === null && l.teardown === null && (l.f & (zt | mt)) === 0;
  if (!a && n && (i !== null && Cn(l, i), N !== null && (N.f & B) !== 0)) {
    var o = (
      /** @type {Derived} */
      N
    );
    (o.effects ??= []).push(l);
  }
  return l;
}
function fr(e) {
  const t = me(Qe, null, !1);
  return ee(t, H), t.teardown = e, t;
}
function Mn(e) {
  if (On(), !N && S && (S.f & ue) !== 0) {
    var t = (
      /** @type {ComponentContext} */
      G
    );
    (t.e ??= []).push(e);
  } else
    return sr(e);
}
function sr(e) {
  return me(wt | Zt, e, !1);
}
function Dn(e) {
  const t = me(Ae, e, !0);
  return (r = {}) => new Promise((n) => {
    r.outro ? Fe(t, () => {
      q(t), n(void 0);
    }) : (q(t), n(void 0));
  });
}
function St(e) {
  return me(wt, e, !1);
}
function cr(e) {
  return me(Qe, e, !0);
}
function Ke(e, t = [], r = Be) {
  const n = t.map(r);
  return he(() => e(...n.map(b)));
}
function he(e, t = 0) {
  var r = me(Qe | yt | t, e, !0);
  return r;
}
function $(e, t = !0) {
  return me(Qe | ue, e, !0, t);
}
function vr(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = de, n = N;
    xt(!0), _e(null);
    try {
      t.call(null);
    } finally {
      xt(r), _e(n);
    }
  }
}
function dr(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    r.ac?.abort(Jt);
    var n = r.next;
    (r.f & Ae) !== 0 ? r.parent = null : q(r, t), r = n;
  }
}
function xn(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ue) === 0 && q(t), t = r;
  }
}
function q(e, t = !0) {
  var r = !1;
  (t || (e.f & Jr) !== 0) && e.nodes_start !== null && e.nodes_end !== null && (In(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), r = !0), dr(e, t && !r), Ze(e, 0), ee(e, $e);
  var n = e.transitions;
  if (n !== null)
    for (const l of n)
      l.stop();
  vr(e);
  var i = e.parent;
  i !== null && i.first !== null && _r(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = e.ac = null;
}
function In(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tt(e)
    );
    e.remove(), e = r;
  }
}
function _r(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function Fe(e, t) {
  var r = [];
  Ft(e, r, !0), hr(r, () => {
    q(e), t && t();
  });
}
function hr(e, t) {
  var r = e.length;
  if (r > 0) {
    var n = () => --r || t();
    for (var i of e)
      i.out(n);
  } else
    t();
}
function Ft(e, t, r) {
  if ((e.f & le) === 0) {
    if (e.f ^= le, e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || r) && t.push(a);
    for (var n = e.first; n !== null; ) {
      var i = n.next, l = (n.f & Ue) !== 0 || (n.f & ue) !== 0;
      Ft(n, t, l ? r : !1), n = i;
    }
  }
}
function Ie(e) {
  gr(e, !0);
}
function gr(e, t) {
  if ((e.f & le) !== 0) {
    e.f ^= le;
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & Ue) !== 0 || (r.f & ue) !== 0;
      gr(r, i ? t : !1), r = n;
    }
    if (e.transitions !== null)
      for (const l of e.transitions)
        (l.is_global || t) && l.in();
  }
}
let Le = [], dt = [];
function pr() {
  var e = Le;
  Le = [], Gt(e);
}
function Ln() {
  var e = dt;
  dt = [], Gt(e);
}
function kt(e) {
  Le.length === 0 && queueMicrotask(pr), Le.push(e);
}
function Rn() {
  Le.length > 0 && pr(), dt.length > 0 && Ln();
}
function Vn(e) {
  var t = (
    /** @type {Effect} */
    S
  );
  if ((t.f & Kt) === 0) {
    if ((t.f & mt) === 0)
      throw e;
    t.fn(e);
  } else
    br(e, t);
}
function br(e, t) {
  for (; t !== null; ) {
    if ((t.f & mt) !== 0)
      try {
        t.b.error(e);
        return;
      } catch {
      }
    t = t.parent;
  }
  throw e;
}
let Re = !1, Ve = null, be = !1, de = !1;
function xt(e) {
  de = e;
}
let xe = [];
let N = null, X = !1;
function _e(e) {
  N = e;
}
let S = null;
function ke(e) {
  S = e;
}
let ae = null;
function wr(e) {
  N !== null && N.f & vt && (ae === null ? ae = [e] : ae.push(e));
}
let L = null, j = 0, W = null;
function jn(e) {
  W = e;
}
let ze = 1, je = 0, we = je;
function It(e) {
  we = e;
}
let fe = !1;
function yr() {
  return ++ze;
}
function rt(e) {
  var t = e.f;
  if ((t & ve) !== 0)
    return !0;
  if ((t & ye) !== 0) {
    var r = e.deps, n = (t & U) !== 0;
    if (r !== null) {
      var i, l, a = (t & We) !== 0, o = n && S !== null && !fe, u = r.length;
      if (a || o) {
        var d = (
          /** @type {Derived} */
          e
        ), c = d.parent;
        for (i = 0; i < u; i++)
          l = r[i], (a || !l?.reactions?.includes(d)) && (l.reactions ??= []).push(d);
        a && (d.f ^= We), o && c !== null && (c.f & U) === 0 && (d.f ^= U);
      }
      for (i = 0; i < u; i++)
        if (l = r[i], rt(
          /** @type {Derived} */
          l
        ) && nr(
          /** @type {Derived} */
          l
        ), l.wv > e.wv)
          return !0;
    }
    (!n || S !== null && !fe) && ee(e, H);
  }
  return !1;
}
function mr(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !ae?.includes(e))
    for (var i = 0; i < n.length; i++) {
      var l = n[i];
      (l.f & B) !== 0 ? mr(
        /** @type {Derived} */
        l,
        t,
        !1
      ) : t === l && (r ? ee(l, ve) : (l.f & H) !== 0 && ee(l, ye), nt(
        /** @type {Effect} */
        l
      ));
    }
}
function Er(e) {
  var t = L, r = j, n = W, i = N, l = fe, a = ae, o = G, u = X, d = we, c = e.f;
  L = /** @type {null | Value[]} */
  null, j = 0, W = null, fe = (c & U) !== 0 && (X || !be || N === null), N = (c & (ue | Ae)) === 0 ? e : null, ae = null, Ct(e.ctx), X = !1, we = ++je, e.f |= vt, e.ac !== null && (e.ac.abort(Jt), e.ac = null);
  try {
    var v = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (L !== null) {
      var s;
      if (Ze(e, j), f !== null && j > 0)
        for (f.length = j + L.length, s = 0; s < L.length; s++)
          f[j + s] = L[s];
      else
        e.deps = f = L;
      if (!fe || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      (c & B) !== 0 && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (s = j; s < f.length; s++)
          (f[s].reactions ??= []).push(e);
    } else f !== null && j < f.length && (Ze(e, j), f.length = j);
    if (er() && W !== null && !X && f !== null && (e.f & (B | ye | ve)) === 0)
      for (s = 0; s < /** @type {Source[]} */
      W.length; s++)
        mr(
          W[s],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (je++, W !== null && (n === null ? n = W : n.push(.../** @type {Source[]} */
    W))), v;
  } catch (_) {
    Vn(_);
  } finally {
    L = t, j = r, W = n, N = i, fe = l, ae = a, Ct(o), X = u, we = d, e.f ^= vt;
  }
}
function Un(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Yr.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  r === null && (t.f & B) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (L === null || !L.includes(t)) && (ee(t, ye), (t.f & (U | We)) === 0 && (t.f ^= We), rr(
    /** @type {Derived} **/
    t
  ), Ze(
    /** @type {Derived} **/
    t,
    0
  ));
}
function Ze(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      Un(e, r[n]);
}
function Nt(e) {
  var t = e.f;
  if ((t & $e) === 0) {
    ee(e, H);
    var r = S, n = be;
    S = e, be = !0;
    try {
      (t & yt) !== 0 ? xn(e) : dr(e), vr(e);
      var i = Er(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ze;
      var l;
    } finally {
      be = n, S = r;
    }
  }
}
function Bn() {
  try {
    ln();
  } catch (e) {
    if (Ve !== null)
      br(e, Ve);
    else
      throw e;
  }
}
function Sr() {
  var e = be;
  try {
    var t = 0;
    for (be = !0; xe.length > 0; ) {
      t++ > 1e3 && Bn();
      var r = xe, n = r.length;
      xe = [];
      for (var i = 0; i < n; i++) {
        var l = qn(r[i]);
        Hn(l);
      }
      pe.clear();
    }
  } finally {
    Re = !1, be = e, Ve = null;
  }
}
function Hn(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; r++) {
      var n = e[r];
      if ((n.f & ($e | le)) === 0 && rt(n)) {
        var i = ze;
        if (Nt(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? _r(n) : n.fn = null), ze > i && (n.f & Zt) !== 0)
          break;
      }
    }
    for (; r < t; r += 1)
      nt(e[r]);
  }
}
function nt(e) {
  Re || (Re = !0, queueMicrotask(Sr));
  for (var t = Ve = e; t.parent !== null; ) {
    t = t.parent;
    var r = t.f;
    if ((r & (Ae | ue)) !== 0) {
      if ((r & H) === 0) return;
      t.f ^= H;
    }
  }
  xe.push(t);
}
function qn(e) {
  for (var t = [], r = e; r !== null; ) {
    var n = r.f, i = (n & (ue | Ae)) !== 0, l = i && (n & H) !== 0;
    if (!l && (n & le) === 0) {
      (n & wt) !== 0 ? t.push(r) : i ? r.f ^= H : rt(r) && Nt(r);
      var a = r.first;
      if (a !== null) {
        r = a;
        continue;
      }
    }
    var o = r.parent;
    for (r = r.next; r === null && o !== null; )
      r = o.next, o = o.parent;
  }
  return t;
}
function Wn(e) {
  for (var t; ; ) {
    if (Rn(), xe.length === 0)
      return Re = !1, Ve = null, /** @type {T} */
      t;
    Re = !0, Sr();
  }
}
async function Yn() {
  await Promise.resolve(), Wn();
}
function b(e) {
  var t = e.f, r = (t & B) !== 0;
  if (N !== null && !X) {
    if (!ae?.includes(e)) {
      var n = N.deps;
      e.rv < je && (e.rv = je, L === null && n !== null && n[j] === e ? j++ : L === null ? L = [e] : (!fe || !L.includes(e)) && L.push(e));
    }
  } else if (r && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var i = (
      /** @type {Derived} */
      e
    ), l = i.parent;
    l !== null && (l.f & U) === 0 && (i.f ^= U);
  }
  if (r && !de && (i = /** @type {Derived} */
  e, rt(i) && nr(i)), de) {
    if (pe.has(e))
      return pe.get(e);
    if (r) {
      i = /** @type {Derived} */
      e;
      var a = i.v;
      return ((i.f & H) !== 0 || Fr(i)) && (a = Et(i)), pe.set(i, a), a;
    }
  }
  return e.v;
}
function Fr(e) {
  if (e.v === O) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (pe.has(t) || (t.f & B) !== 0 && Fr(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function it(e) {
  var t = X;
  try {
    return X = !0, e();
  } finally {
    X = t;
  }
}
const Gn = -7169;
function ee(e, t) {
  e.f = e.f & Gn | t;
}
function Kn(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const zn = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Zn(e) {
  return zn.includes(e);
}
const Xn = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Jn(e) {
  return e = e.toLowerCase(), Xn[e] ?? e;
}
const Qn = ["touchstart", "touchmove"];
function $n(e) {
  return Qn.includes(e);
}
function ei(e, t) {
  if (t) {
    const r = document.body;
    e.autofocus = !0, kt(() => {
      document.activeElement === r && e.focus();
    });
  }
}
let Lt = !1;
function ti() {
  Lt || (Lt = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function kr(e) {
  var t = N, r = S;
  _e(null), ke(null);
  try {
    return e();
  } finally {
    _e(t), ke(r);
  }
}
function ri(e, t, r, n = r) {
  e.addEventListener(t, () => kr(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), ti();
}
const Nr = /* @__PURE__ */ new Set(), _t = /* @__PURE__ */ new Set();
function Ar(e, t, r, n = {}) {
  function i(l) {
    if (n.capture || De.call(t, l), !l.cancelBubble)
      return kr(() => r?.call(this, l));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? kt(() => {
    t.addEventListener(e, i, n);
  }) : t.addEventListener(e, i, n), i;
}
function ni(e, t, r, n, i) {
  var l = { capture: n, passive: i }, a = Ar(e, t, r, l);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && fr(() => {
    t.removeEventListener(e, a, l);
  });
}
function lt(e) {
  for (var t = 0; t < e.length; t++)
    Nr.add(e[t]);
  for (var r of _t)
    r(e);
}
function De(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], l = (
    /** @type {null | Element} */
    i[0] || e.target
  ), a = 0, o = e.__root;
  if (o) {
    var u = i.indexOf(o);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var d = i.indexOf(t);
    if (d === -1)
      return;
    u <= d && (a = u);
  }
  if (l = /** @type {Element} */
  i[a] || e.target, l !== t) {
    Gr(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || r;
      }
    });
    var c = N, v = S;
    _e(null), ke(null);
    try {
      for (var f, s = []; l !== null; ) {
        var _ = l.assignedSlot || l.parentNode || /** @type {any} */
        l.host || null;
        try {
          var g = l["__" + n];
          if (g != null && (!/** @type {any} */
          l.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === l))
            if (Je(g)) {
              var [p, ...w] = g;
              p.apply(l, [e, ...w]);
            } else
              g.call(l, e);
        } catch (h) {
          f ? s.push(h) : f = h;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        l = _;
      }
      if (f) {
        for (let h of s)
          queueMicrotask(() => {
            throw h;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, _e(c), ke(v);
    }
  }
}
function Pr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function Ne(e, t) {
  var r = (
    /** @type {Effect} */
    S
  );
  r.nodes_start === null && (r.nodes_start = e, r.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ge(e, t) {
  var r = (t & pn) !== 0, n = (t & bn) !== 0, i, l = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Pr(l ? e : "<!>" + e), r || (i = /** @type {Node} */
    /* @__PURE__ */ Se(i)));
    var a = (
      /** @type {TemplateNode} */
      n || ar ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Se(a)
      ), u = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      Ne(o, u);
    } else
      Ne(a, a);
    return a;
  };
}
// @__NO_SIDE_EFFECTS__
function ii(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), i = `<${r}>${n ? e : "<!>" + e}</${r}>`, l;
  return () => {
    if (!l) {
      var a = (
        /** @type {DocumentFragment} */
        Pr(i)
      ), o = (
        /** @type {Element} */
        /* @__PURE__ */ Se(a)
      );
      l = /** @type {Element} */
      /* @__PURE__ */ Se(o);
    }
    var u = (
      /** @type {TemplateNode} */
      l.cloneNode(!0)
    );
    return Ne(u, u), u;
  };
}
// @__NO_SIDE_EFFECTS__
function li(e, t) {
  return /* @__PURE__ */ ii(e, t, "svg");
}
function ht(e = "") {
  {
    var t = et(e + "");
    return Ne(t, t), t;
  }
}
function V() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = et();
  return e.append(t, r), Ne(t, r), e;
}
function k(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Tr(e, t) {
  var r = t == null ? "" : typeof t == "object" ? t + "" : t;
  r !== (e.__t ??= e.nodeValue) && (e.__t = r, e.nodeValue = r + "");
}
function ai(e, t) {
  return ui(e, t);
}
const Ee = /* @__PURE__ */ new Map();
function ui(e, { target: t, anchor: r, props: n = {}, events: i, context: l, intro: a = !0 }) {
  Pn();
  var o = /* @__PURE__ */ new Set(), u = (v) => {
    for (var f = 0; f < v.length; f++) {
      var s = v[f];
      if (!o.has(s)) {
        o.add(s);
        var _ = $n(s);
        t.addEventListener(s, De, { passive: _ });
        var g = Ee.get(s);
        g === void 0 ? (document.addEventListener(s, De, { passive: _ }), Ee.set(s, 1)) : Ee.set(s, g + 1);
      }
    }
  };
  u(bt(Nr)), _t.add(u);
  var d = void 0, c = Dn(() => {
    var v = r ?? t.appendChild(et());
    return $(() => {
      if (l) {
        D({});
        var f = (
          /** @type {ComponentContext} */
          G
        );
        f.c = l;
      }
      i && (n.$$events = i), d = e(v, n) || {}, l && x();
    }), () => {
      for (var f of o) {
        t.removeEventListener(f, De);
        var s = (
          /** @type {number} */
          Ee.get(f)
        );
        --s === 0 ? (document.removeEventListener(f, De), Ee.delete(f)) : Ee.set(f, s);
      }
      _t.delete(u), v !== r && v.parentNode?.removeChild(v);
    };
  });
  return oi.set(d, c), d;
}
let oi = /* @__PURE__ */ new WeakMap();
function Q(e, t, [r, n] = [0, 0]) {
  var i = e, l = null, a = null, o = O, u = r > 0 ? Ue : 0, d = !1;
  const c = (f, s = !0) => {
    d = !0, v(s, f);
  }, v = (f, s) => {
    o !== (o = f) && (o ? (l ? Ie(l) : s && (l = $(() => s(i))), a && Fe(a, () => {
      a = null;
    })) : (a ? Ie(a) : s && (a = $(() => s(i, [r + 1, n]))), l && Fe(l, () => {
      l = null;
    })));
  };
  he(() => {
    d = !1, t(c), d || v(null, null);
  }, u);
}
function fi(e, t, r) {
  var n = e, i = O, l, a = en;
  he(() => {
    a(i, i = t()) && (l && Fe(l), l = $(() => r(n)));
  });
}
function Or(e, t) {
  return t;
}
function si(e, t, r, n) {
  for (var i = [], l = t.length, a = 0; a < l; a++)
    Ft(t[a].e, i, !0);
  var o = l > 0 && i.length === 0 && r !== null;
  if (o) {
    var u = (
      /** @type {Element} */
      /** @type {Element} */
      r.parentNode
    );
    Tn(u), u.append(
      /** @type {Element} */
      r
    ), n.clear(), oe(e, t[0].prev, t[l - 1].next);
  }
  hr(i, () => {
    for (var d = 0; d < l; d++) {
      var c = t[d];
      o || (n.delete(c.k), oe(e, c.prev, c.next)), q(c.e, !o);
    }
  });
}
function Cr(e, t, r, n, i, l = null) {
  var a = e, o = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, u = null, d = !1, c = /* @__PURE__ */ tr(() => {
    var v = r();
    return Je(v) ? v : v == null ? [] : bt(v);
  });
  he(() => {
    var v = b(c), f = v.length;
    d && f === 0 || (d = f === 0, ci(v, o, a, i, t, n, r), l !== null && (f === 0 ? u ? Ie(u) : u = $(() => l(a)) : u !== null && Fe(u, () => {
      u = null;
    })), b(c));
  });
}
function ci(e, t, r, n, i, l, a) {
  var o = e.length, u = t.items, d = t.first, c = d, v, f = null, s = [], _ = [], g, p, w, h;
  for (h = 0; h < o; h += 1) {
    if (g = e[h], p = l(g, h), w = u.get(p), w === void 0) {
      var y = c ? (
        /** @type {TemplateNode} */
        c.e.nodes_start
      ) : r;
      f = di(
        y,
        t,
        f,
        f === null ? t.first : f.next,
        g,
        p,
        h,
        n,
        i,
        a
      ), u.set(p, f), s = [], _ = [], c = f.next;
      continue;
    }
    if (vi(w, g, h), (w.e.f & le) !== 0 && Ie(w.e), w !== c) {
      if (v !== void 0 && v.has(w)) {
        if (s.length < _.length) {
          var E = _[0], m;
          f = E.prev;
          var F = s[0], I = s[s.length - 1];
          for (m = 0; m < s.length; m += 1)
            Rt(s[m], E, r);
          for (m = 0; m < _.length; m += 1)
            v.delete(_[m]);
          oe(t, F.prev, I.next), oe(t, f, F), oe(t, I, E), c = E, f = I, h -= 1, s = [], _ = [];
        } else
          v.delete(w), Rt(w, c, r), oe(t, w.prev, w.next), oe(t, w, f === null ? t.first : f.next), oe(t, f, w), f = w;
        continue;
      }
      for (s = [], _ = []; c !== null && c.k !== p; )
        (c.e.f & le) === 0 && (v ??= /* @__PURE__ */ new Set()).add(c), _.push(c), c = c.next;
      if (c === null)
        continue;
      w = c;
    }
    s.push(w), f = w, c = w.next;
  }
  if (c !== null || v !== void 0) {
    for (var T = v === void 0 ? [] : bt(v); c !== null; )
      (c.e.f & le) === 0 && T.push(c), c = c.next;
    var Z = T.length;
    if (Z > 0) {
      var Pe = null;
      si(t, T, Pe, u);
    }
  }
  S.first = t.first && t.first.e, S.last = f && f.e;
}
function vi(e, t, r, n) {
  ir(e.v, t), e.i = r;
}
function di(e, t, r, n, i, l, a, o, u, d) {
  var c = (u & sn) !== 0, v = (u & vn) === 0, f = c ? v ? /* @__PURE__ */ kn(i, !1, !1) : Ge(i) : i, s = (u & cn) === 0 ? a : Ge(a), _ = {
    i: s,
    v: f,
    k: l,
    a: null,
    // @ts-expect-error
    e: null,
    prev: r,
    next: n
  };
  try {
    return _.e = $(() => o(e, f, s, d), An), _.e.prev = r && r.e, _.e.next = n && n.e, r === null ? t.first = _ : (r.next = _, r.e.next = _.e), n !== null && (n.prev = _, n.e.prev = _.e), _;
  } finally {
  }
}
function Rt(e, t, r) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : r, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : r, l = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); l !== n; ) {
    var a = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ tt(l)
    );
    i.before(l), l = a;
  }
}
function oe(e, t, r) {
  t === null ? e.first = r : (t.next = r, t.e.next = r && r.e), r !== null && (r.prev = t, r.e.prev = t && t.e);
}
function K(e, t, ...r) {
  var n = e, i = Y, l;
  he(() => {
    i !== (i = t()) && (l && (q(l), l = null), l = $(() => (
      /** @type {SnippetFn} */
      i(n, ...r)
    )));
  }, Ue);
}
function _i(e, t, r, n, i, l) {
  var a, o, u = null, d = (
    /** @type {TemplateNode} */
    e
  ), c;
  he(() => {
    const v = t() || null;
    var f = yn;
    v !== a && (c && (v === null ? Fe(c, () => {
      c = null, o = null;
    }) : v === o ? Ie(c) : q(c)), v && v !== o && (c = $(() => {
      if (u = document.createElementNS(f, v), Ne(u, u), n) {
        var s = (
          /** @type {TemplateNode} */
          u.appendChild(et())
        );
        n(u, s);
      }
      S.nodes_end = u, d.before(u);
    })), a = v, a && (o = a));
  }, Ue);
}
function hi(e, t) {
  var r = void 0, n;
  he(() => {
    r !== (r = t()) && (n && (q(n), n = null), r && (n = $(() => {
      St(() => (
        /** @type {(node: Element) => void} */
        r(e)
      ));
    })));
  });
}
function Mr(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = Mr(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function gi() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = Mr(e)) && (n && (n += " "), n += t);
  return n;
}
function pi(e) {
  return typeof e == "object" ? gi(e) : e ?? "";
}
const Vt = [...` 	
\r\f \v\uFEFF`];
function bi(e, t, r) {
  var n = e == null ? "" : "" + e;
  if (r) {
    for (var i in r)
      if (r[i])
        n = n ? n + " " + i : i;
      else if (n.length)
        for (var l = i.length, a = 0; (a = n.indexOf(i, a)) >= 0; ) {
          var o = a + l;
          (a === 0 || Vt.includes(n[a - 1])) && (o === n.length || Vt.includes(n[o])) ? n = (a === 0 ? "" : n.substring(0, a)) + n.substring(o + 1) : a = o;
        }
  }
  return n === "" ? null : n;
}
function jt(e, t = !1) {
  var r = t ? " !important;" : ";", n = "";
  for (var i in e) {
    var l = e[i];
    l != null && l !== "" && (n += " " + i + ": " + l + r);
  }
  return n;
}
function ot(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function wi(e, t) {
  if (t) {
    var r = "", n, i;
    if (Array.isArray(t) ? (n = t[0], i = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var l = !1, a = 0, o = !1, u = [];
      n && u.push(...Object.keys(n).map(ot)), i && u.push(...Object.keys(i).map(ot));
      var d = 0, c = -1;
      const g = e.length;
      for (var v = 0; v < g; v++) {
        var f = e[v];
        if (o ? f === "/" && e[v - 1] === "*" && (o = !1) : l ? l === f && (l = !1) : f === "/" && e[v + 1] === "*" ? o = !0 : f === '"' || f === "'" ? l = f : f === "(" ? a++ : f === ")" && a--, !o && l === !1 && a === 0) {
          if (f === ":" && c === -1)
            c = v;
          else if (f === ";" || v === g - 1) {
            if (c !== -1) {
              var s = ot(e.substring(d, c).trim());
              if (!u.includes(s)) {
                f !== ";" && v++;
                var _ = e.substring(d, v).trim();
                r += " " + _ + ";";
              }
            }
            d = v + 1, c = -1;
          }
        }
      }
    }
    return n && (r += jt(n)), i && (r += jt(i, !0)), r = r.trim(), r === "" ? null : r;
  }
  return e == null ? null : String(e);
}
function yi(e, t, r, n, i, l) {
  var a = e.__className;
  if (a !== r || a === void 0) {
    var o = bi(r, n, l);
    o == null ? e.removeAttribute("class") : t ? e.className = o : e.setAttribute("class", o), e.__className = r;
  } else if (l && i !== l)
    for (var u in l) {
      var d = !!l[u];
      (i == null || d !== !!i[u]) && e.classList.toggle(u, d);
    }
  return l;
}
function ft(e, t = {}, r, n) {
  for (var i in r) {
    var l = r[i];
    t[i] !== l && (r[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, l, n));
  }
}
function mi(e, t, r, n) {
  var i = e.__style;
  if (i !== t) {
    var l = wi(t, n);
    l == null ? e.removeAttribute("style") : e.style.cssText = l, e.__style = t;
  } else n && (Array.isArray(n) ? (ft(e, r?.[0], n[0]), ft(e, r?.[1], n[1], "important")) : ft(e, r, n));
  return n;
}
function gt(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Je(t))
      return Nn();
    for (var n of e.options)
      n.selected = t.includes(Ut(n));
    return;
  }
  for (n of e.options) {
    var i = Ut(n);
    if (Sn(i, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function Ei(e) {
  var t = new MutationObserver(() => {
    gt(e, e.__value);
  });
  t.observe(e, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), fr(() => {
    t.disconnect();
  });
}
function Ut(e) {
  return "__value" in e ? e.__value : e.value;
}
const Ce = Symbol("class"), Me = Symbol("style"), Dr = Symbol("is custom element"), xr = Symbol("is html");
function Si(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Bt(e, t, r, n) {
  var i = Ir(e);
  i[t] !== (i[t] = r) && (t === "loading" && (e[Qr] = r), r == null ? e.removeAttribute(t) : typeof r != "string" && Lr(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function Fi(e, t, r, n, i = !1) {
  var l = Ir(e), a = l[Dr], o = !l[xr], u = t || {}, d = e.tagName === "OPTION";
  for (var c in t)
    c in r || (r[c] = null);
  r.class ? r.class = pi(r.class) : r[Ce] && (r.class = null), r[Me] && (r.style ??= null);
  var v = Lr(e);
  for (const h in r) {
    let y = r[h];
    if (d && h === "value" && y == null) {
      e.value = e.__value = "", u[h] = y;
      continue;
    }
    if (h === "class") {
      var f = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      yi(e, f, y, n, t?.[Ce], r[Ce]), u[h] = y, u[Ce] = r[Ce];
      continue;
    }
    if (h === "style") {
      mi(e, y, t?.[Me], r[Me]), u[h] = y, u[Me] = r[Me];
      continue;
    }
    var s = u[h];
    if (!(y === s && !(y === void 0 && e.hasAttribute(h)))) {
      u[h] = y;
      var _ = h[0] + h[1];
      if (_ !== "$$")
        if (_ === "on") {
          const E = {}, m = "$$" + h;
          let F = h.slice(2);
          var g = Zn(F);
          if (Kn(F) && (F = F.slice(0, -7), E.capture = !0), !g && s) {
            if (y != null) continue;
            e.removeEventListener(F, u[m], E), u[m] = null;
          }
          if (y != null)
            if (g)
              e[`__${F}`] = y, lt([F]);
            else {
              let I = function(T) {
                u[h].call(this, T);
              };
              u[m] = Ar(F, e, I, E);
            }
          else g && (e[`__${F}`] = void 0);
        } else if (h === "style")
          Bt(e, h, y);
        else if (h === "autofocus")
          ei(
            /** @type {HTMLElement} */
            e,
            !!y
          );
        else if (!a && (h === "__value" || h === "value" && y != null))
          e.value = e.__value = y;
        else if (h === "selected" && d)
          Si(
            /** @type {HTMLOptionElement} */
            e,
            y
          );
        else {
          var p = h;
          o || (p = Jn(p));
          var w = p === "defaultValue" || p === "defaultChecked";
          if (y == null && !a && !w)
            if (l[h] = null, p === "value" || p === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                e
              );
              const m = t === void 0;
              if (p === "value") {
                let F = E.defaultValue;
                E.removeAttribute(p), E.defaultValue = F, E.value = E.__value = m ? F : null;
              } else {
                let F = E.defaultChecked;
                E.removeAttribute(p), E.defaultChecked = F, E.checked = m ? F : !1;
              }
            } else
              e.removeAttribute(h);
          else w || v.includes(p) && (a || typeof y != "string") ? e[p] = y : typeof y != "function" && Bt(e, p, y);
        }
    }
  }
  return u;
}
function Ht(e, t, r = [], n, i = !1, l = Be) {
  const a = r.map(l);
  var o = void 0, u = {}, d = e.nodeName === "SELECT", c = !1;
  if (he(() => {
    var f = t(...a.map(b)), s = Fi(e, o, f, n, i);
    c && d && "value" in f && gt(
      /** @type {HTMLSelectElement} */
      e,
      f.value
    );
    for (let g of Object.getOwnPropertySymbols(u))
      f[g] || q(u[g]);
    for (let g of Object.getOwnPropertySymbols(f)) {
      var _ = f[g];
      g.description === mn && (!o || _ !== o[g]) && (u[g] && q(u[g]), u[g] = $(() => hi(e, () => _))), s[g] = _;
    }
    o = s;
  }), d) {
    var v = (
      /** @type {HTMLSelectElement} */
      e
    );
    St(() => {
      gt(
        v,
        /** @type {Record<string | symbol, any>} */
        o.value,
        !0
      ), Ei(v);
    });
  }
  c = !0;
}
function Ir(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Dr]: e.nodeName.includes("-"),
      [xr]: e.namespaceURI === wn
    }
  );
}
var qt = /* @__PURE__ */ new Map();
function Lr(e) {
  var t = qt.get(e.nodeName);
  if (t) return t;
  qt.set(e.nodeName, t = []);
  for (var r, n = e, i = Element.prototype; i !== n; ) {
    r = Kr(n);
    for (var l in r)
      r[l].set && t.push(l);
    n = Yt(n);
  }
  return t;
}
function pt(e, t, r = t) {
  ri(e, "input", (n) => {
    var i = n ? e.defaultValue : e.value;
    if (i = st(e) ? ct(i) : i, r(i), i !== (i = t())) {
      var l = e.selectionStart, a = e.selectionEnd;
      e.value = i ?? "", a !== null && (e.selectionStart = l, e.selectionEnd = Math.min(a, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  it(t) == null && e.value && r(st(e) ? ct(e.value) : e.value), cr(() => {
    var n = t();
    st(e) && n === ct(e.value) || e.type === "date" && !n && !e.value || n !== e.value && (e.value = n ?? "");
  });
}
function st(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function ct(e) {
  return e === "" ? null : +e;
}
function Wt(e, t) {
  return e === t || e?.[ce] === t;
}
function Rr(e = {}, t, r, n) {
  return St(() => {
    var i, l;
    return cr(() => {
      i = l, l = [], it(() => {
        e !== r(...l) && (t(e, ...l), i && Wt(r(...i), e) && t(null, ...i));
      });
    }), () => {
      kt(() => {
        l && Wt(r(...l), e) && t(null, ...l);
      });
    };
  }), e;
}
let qe = !1;
function ki(e) {
  var t = qe;
  try {
    return qe = !1, [e(), qe];
  } finally {
    qe = t;
  }
}
const Ni = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function z(e, t, r) {
  return new Proxy(
    { props: e, exclude: t },
    Ni
  );
}
const Ai = {
  get(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Oe(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, r) {
    let n = e.props.length;
    for (; n--; ) {
      let i = e.props[n];
      Oe(i) && (i = i());
      const l = se(i, t);
      if (l && l.set)
        return l.set(r), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let r = e.props.length;
    for (; r--; ) {
      let n = e.props[r];
      if (Oe(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const i = se(n, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === ce || t === Xt) return !1;
    for (let r of e.props)
      if (Oe(r) && (r = r()), r != null && t in r) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let r of e.props)
      if (Oe(r) && (r = r()), !!r) {
        for (const n in r)
          t.includes(n) || t.push(n);
        for (const n of Object.getOwnPropertySymbols(r))
          t.includes(n) || t.push(n);
      }
    return t;
  }
};
function te(...e) {
  return new Proxy({ props: e }, Ai);
}
function J(e, t, r, n) {
  var i = (r & hn) !== 0, l = (r & gn) !== 0, a = (
    /** @type {V} */
    n
  ), o = !0, u = () => (o && (o = !1, a = l ? it(
    /** @type {() => V} */
    n
  ) : (
    /** @type {V} */
    n
  )), a), d;
  if (i) {
    var c = ce in e || Xt in e;
    d = se(e, t)?.set ?? (c && t in e ? (h) => e[t] = h : void 0);
  }
  var v, f = !1;
  i ? [v, f] = ki(() => (
    /** @type {V} */
    e[t]
  )) : v = /** @type {V} */
  e[t], v === void 0 && n !== void 0 && (v = u(), d && (an(), d(v)));
  var s;
  if (s = () => {
    var h = (
      /** @type {V} */
      e[t]
    );
    return h === void 0 ? u() : (o = !0, h);
  }, (r & _n) === 0)
    return s;
  if (d) {
    var _ = e.$$legacy;
    return function(h, y) {
      return arguments.length > 0 ? ((!y || _ || f) && d(y ? s() : h), h) : s();
    };
  }
  var g = !1, p = ((r & dn) !== 0 ? Be : tr)(() => (g = !1, s()));
  i && b(p);
  var w = (
    /** @type {Effect} */
    S
  );
  return function(h, y) {
    if (arguments.length > 0) {
      const E = y ? b(p) : i ? ie(h) : h;
      return A(p, E), g = !0, a !== void 0 && (a = E), h;
    }
    return de && g || (w.f & $e) !== 0 ? p.v : b(p);
  };
}
function Pi(e) {
  G === null && En(), Mn(() => {
    const t = it(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
const Ti = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(Ti);
/**
 * @license @lucide/svelte v0.525.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const Oi = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var Ci = /* @__PURE__ */ li("<svg><!><!></svg>");
function re(e, t) {
  D(t, !0);
  const r = J(t, "color", 3, "currentColor"), n = J(t, "size", 3, 24), i = J(t, "strokeWidth", 3, 2), l = J(t, "absoluteStrokeWidth", 3, !1), a = J(t, "iconNode", 19, () => []), o = /* @__PURE__ */ z(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
    "children"
  ]);
  var u = Ci();
  Ht(
    u,
    (v) => ({
      ...Oi,
      ...o,
      width: n(),
      height: n(),
      stroke: r(),
      "stroke-width": v,
      class: [
        "lucide-icon lucide",
        t.name && `lucide-${t.name}`,
        t.class
      ]
    }),
    [
      () => l() ? Number(i()) * 24 / Number(n()) : i()
    ]
  );
  var d = P(u);
  Cr(d, 17, a, Or, (v, f) => {
    var s = /* @__PURE__ */ Ye(() => Xr(b(f), 2));
    let _ = () => b(s)[0], g = () => b(s)[1];
    var p = V(), w = C(p);
    _i(w, _, !0, (h, y) => {
      Ht(h, () => ({ ...g() }));
    }), k(v, p);
  });
  var c = R(d);
  K(c, () => t.children ?? Y), k(e, u), x();
}
function Vr(e, t) {
  D(t, !0);
  /**
   * @license @lucide/svelte v0.525.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ z(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    ["path", { d: "m12 19-7-7 7-7" }],
    ["path", { d: "M19 12H5" }]
  ];
  re(e, te(
    { name: "arrow-left" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, l) => {
        var a = V(), o = C(a);
        K(o, () => t.children ?? Y), k(i, a);
      },
      $$slots: { default: !0 }
    }
  )), x();
}
function Mi(e, t) {
  D(t, !0);
  /**
   * @license @lucide/svelte v0.525.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ z(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [["path", { d: "M20 6 9 17l-5-5" }]];
  re(e, te(
    { name: "check" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, l) => {
        var a = V(), o = C(a);
        K(o, () => t.children ?? Y), k(i, a);
      },
      $$slots: { default: !0 }
    }
  )), x();
}
function Di(e, t) {
  D(t, !0);
  /**
   * @license @lucide/svelte v0.525.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ z(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    ["path", { d: "M12 15V3" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["path", { d: "m7 10 5 5 5-5" }]
  ];
  re(e, te(
    { name: "download" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, l) => {
        var a = V(), o = C(a);
        K(o, () => t.children ?? Y), k(i, a);
      },
      $$slots: { default: !0 }
    }
  )), x();
}
function xi(e, t) {
  D(t, !0);
  /**
   * @license @lucide/svelte v0.525.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ z(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    ["path", { d: "m10 18 3-3-3-3" }],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    [
      "path",
      {
        d: "M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
      }
    ]
  ];
  re(e, te(
    { name: "file-symlink" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, l) => {
        var a = V(), o = C(a);
        K(o, () => t.children ?? Y), k(i, a);
      },
      $$slots: { default: !0 }
    }
  )), x();
}
function Ii(e, t) {
  D(t, !0);
  /**
   * @license @lucide/svelte v0.525.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ z(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
    ["path", { d: "M12 12v6" }],
    ["path", { d: "m15 15-3-3-3 3" }]
  ];
  re(e, te(
    { name: "file-up" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, l) => {
        var a = V(), o = C(a);
        K(o, () => t.children ?? Y), k(i, a);
      },
      $$slots: { default: !0 }
    }
  )), x();
}
function Li(e, t) {
  D(t, !0);
  /**
   * @license @lucide/svelte v0.525.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ z(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    [
      "path",
      {
        d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
      }
    ],
    ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }]
  ];
  re(e, te(
    { name: "file" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, l) => {
        var a = V(), o = C(a);
        K(o, () => t.children ?? Y), k(i, a);
      },
      $$slots: { default: !0 }
    }
  )), x();
}
function Ri(e, t) {
  D(t, !0);
  /**
   * @license @lucide/svelte v0.525.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ z(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    ["path", { d: "M12 10v6" }],
    ["path", { d: "M9 13h6" }],
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ]
  ];
  re(e, te(
    { name: "folder-plus" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, l) => {
        var a = V(), o = C(a);
        K(o, () => t.children ?? Y), k(i, a);
      },
      $$slots: { default: !0 }
    }
  )), x();
}
function Vi(e, t) {
  D(t, !0);
  /**
   * @license @lucide/svelte v0.525.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ z(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
      }
    ]
  ];
  re(e, te(
    { name: "folder" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, l) => {
        var a = V(), o = C(a);
        K(o, () => t.children ?? Y), k(i, a);
      },
      $$slots: { default: !0 }
    }
  )), x();
}
function ji(e, t) {
  D(t, !0);
  /**
   * @license @lucide/svelte v0.525.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ z(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    [
      "path",
      {
        d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
      }
    ],
    ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" }],
    ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7" }]
  ];
  re(e, te(
    { name: "save" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, l) => {
        var a = V(), o = C(a);
        K(o, () => t.children ?? Y), k(i, a);
      },
      $$slots: { default: !0 }
    }
  )), x();
}
function Ui(e, t) {
  D(t, !0);
  /**
   * @license @lucide/svelte v0.525.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   */
  let r = /* @__PURE__ */ z(t, ["$$slots", "$$events", "$$legacy"]);
  const n = [
    ["path", { d: "M18 6 6 18" }],
    ["path", { d: "m6 6 12 12" }]
  ];
  re(e, te(
    { name: "x" },
    () => r,
    {
      get iconNode() {
        return n;
      },
      children: (i, l) => {
        var a = V(), o = C(a);
        K(o, () => t.children ?? Y), k(i, a);
      },
      $$slots: { default: !0 }
    }
  )), x();
}
function Xe(e) {
  return new Promise((t, r) => {
    e.syncfs(!1, (n) => {
      n && r(n), t();
    });
  });
}
async function Bi(e, t, r) {
  const n = t + r.name, i = new Uint8Array(await r.arrayBuffer());
  e.writeFile(n, i, { flags: "w+" });
}
async function jr(e, t, r) {
  await Promise.all(
    r.map(async (n) => {
      await Bi(e, t, n);
    })
  );
}
function Hi(e, t, r) {
  const n = t.dirData.data.parentPath;
  r(r().path = n, !0), t.FS.chdir(n);
}
var qi = (e, t, r) => {
  A(t, !0), Yn().then(() => b(r).focus());
}, Wi = (e, t, r) => {
  A(t, !1), A(r, null);
}, Yi = /* @__PURE__ */ ge('<div class="error svelte-154ab8g"> </div>'), Gi = /* @__PURE__ */ ge('<form class="new-folder svelte-154ab8g"><input type="text" placeholder="Folder name" required/> <button type="submit" aria-label="Create folder" title="Create folder"><!></button> <button type="button" aria-label="Cancel" title="Cancel"><!></button></form> <div role="alert"><!></div>', 1), Ki = /* @__PURE__ */ ge('<section role="toolbar" class="toolbar svelte-154ab8g"><button aria-label="Go back" title="Go back"><!></button> <button aria-label="Import files" title="Import files"><!></button> <button aria-label="New folder" title="New folder"><!></button> <input type="text" disabled aria-label="Current directory" title="Current directory" class="svelte-154ab8g"/></section> <!> <hr/>', 1);
function zi(e, t) {
  D(t, !0);
  let r = J(t, "dirPath", 15), n = /* @__PURE__ */ M(void 0), i = /* @__PURE__ */ M(!1), l = /* @__PURE__ */ M(""), a = /* @__PURE__ */ Ye(() => b(l).trim() !== ""), o = /* @__PURE__ */ M(null);
  function u() {
    const m = document.createElement("input");
    m.type = "file", m.hidden = !0, m.multiple = !0, m.onchange = async () => {
      const F = Array.from(m.files);
      if (F.length) {
        let I = r().path;
        I.endsWith("/") || (I += "/");
        try {
          await jr(t.FS, I, F), await Xe(t.FS), r(r().path = void 0, !0), r(r().path = t.FS.cwd(), !0);
        } catch (T) {
          console.log(T);
        }
      }
      m.remove();
    }, document.body.append(m), m.click();
  }
  async function d() {
    try {
      t.FS.mkdir(b(l));
      try {
        await Xe(t.FS);
      } catch (m) {
        console.log(m);
      }
      r(r().path = void 0, !0), r(r().path = t.FS.cwd(), !0), A(o, null), A(l, ""), A(i, !1);
    } catch (m) {
      A(o, m, !0);
    }
  }
  var c = Ki(), v = C(c), f = P(v);
  f.__click = [Hi, t, r];
  var s = P(f);
  Vr(s, {});
  var _ = R(f, 2);
  _.__click = u;
  var g = P(_);
  Ii(g, {});
  var p = R(_, 2);
  p.__click = [qi, i, n];
  var w = P(p);
  Ri(w, {});
  var h = R(p, 2), y = R(v, 2);
  {
    var E = (m) => {
      var F = Gi(), I = C(F), T = P(I);
      Rr(T, (ne) => A(n, ne), () => b(n));
      var Z = R(T, 2), Pe = P(Z);
      Mi(Pe, {});
      var He = R(Z, 2);
      He.__click = [Wi, i, o];
      var at = P(He);
      Ui(at, {});
      var Te = R(I, 2), Ur = P(Te);
      {
        var Br = (ne) => {
          var At = V(), Hr = C(At);
          fi(Hr, () => b(o), (qr) => {
            var Pt = Yi(), Wr = P(Pt);
            Ke(() => Tr(Wr, b(o))), k(qr, Pt);
          }), k(ne, At);
        };
        Q(Ur, (ne) => {
          b(o) && ne(Br);
        });
      }
      Ke(() => Z.disabled = !b(a)), ni("submit", I, (ne) => {
        ne.preventDefault(), d();
      }), pt(T, () => b(l), (ne) => A(l, ne)), k(m, F);
    };
    Q(y, (m) => {
      b(i) && m(E);
    });
  }
  pt(h, () => r().path, (m) => r(r().path = m, !0)), k(e, c), x();
}
lt(["click"]);
function Zi(e, t, r, n) {
  if (t.FS.isDir(t.entry.mode)) {
    const i = t.FS.getPath(t.entry);
    r(r().path = i, !0), t.FS.chdir(i);
  }
  if (t.FS.isFile(t.entry.mode)) {
    const i = t.FS.getPath(t.entry);
    n(n().path = i, !0);
  }
}
var Xi = /* @__PURE__ */ ge('<button aria-label="Download" title="Download" class="svelte-134320g"><!></button>'), Ji = /* @__PURE__ */ ge('<div class="container svelte-134320g"><button class="svelte-134320g"><!> </button> <!></div>');
function Qi(e, t) {
  D(t, !0);
  let r = J(t, "dirPath", 15), n = J(t, "editorOpened", 15);
  function i() {
    const s = new Blob([
      t.FS.readFile(t.FS.getPath(t.entry), { encoding: "binary" })
    ]), _ = document.createElement("a");
    _.href = URL.createObjectURL(s), _.download = t.entry.name, document.body.appendChild(_), _.click(), setTimeout(
      () => {
        URL.revokeObjectURL(_.href), document.body.removeChild(_);
      },
      1e3
    );
  }
  var l = Ji(), a = P(l);
  a.__click = [Zi, t, r, n];
  var o = P(a);
  {
    var u = (s) => {
      Vi(s, { "aria-label": "Directory" });
    }, d = (s, _) => {
      {
        var g = (w) => {
          Li(w, { "aria-label": "File" });
        }, p = (w, h) => {
          {
            var y = (E) => {
              xi(E, { "aria-label": "Symlink" });
            };
            Q(
              w,
              (E) => {
                t.FS.isLink(t.entry.mode) && E(y);
              },
              h
            );
          }
        };
        Q(
          s,
          (w) => {
            t.FS.isFile(t.entry.mode) ? w(g) : w(p, !1);
          },
          _
        );
      }
    };
    Q(o, (s) => {
      t.FS.isDir(t.entry.mode) ? s(u) : s(d, !1);
    });
  }
  var c = R(o), v = R(a, 2);
  {
    var f = (s) => {
      var _ = Xi();
      _.__click = i;
      var g = P(_);
      Di(g, {}), k(s, _);
    };
    Q(v, (s) => {
      t.FS.isFile(t.entry.mode) && s(f);
    });
  }
  Ke(() => Tr(c, ` ${t.entry.name ?? ""}`)), k(e, l), x();
}
lt(["click"]);
async function $i(e, t, r, n, i) {
  A(t, !0), r.FS.writeFile(n().path, b(i));
  try {
    await Xe(r.FS);
  } catch (l) {
    console.log(l);
  } finally {
    A(t, !1);
  }
}
function el(e, t) {
  t(t().path = null, !0);
}
var tl = /* @__PURE__ */ ge('<div class="container svelte-531ovd"><section role="toolbar"><button title="Close" aria-label="Close" class="svelte-531ovd"><!></button> <button class="svelte-531ovd"><!> <!></button></section> <textarea aria-label="File contents" class="svelte-531ovd"></textarea></div>');
function rl(e, t) {
  D(t, !0);
  let r = J(t, "editorOpened", 15), n = /* @__PURE__ */ M(ie(t.FS.readFile(r().path, { encoding: "utf8" }))), i = /* @__PURE__ */ M(!1);
  var l = tl(), a = P(l), o = P(a);
  o.__click = [el, r];
  var u = P(o);
  Vr(u, {});
  var d = R(o, 2);
  d.__click = [$i, i, t, r, n];
  var c = P(d);
  ji(c, {});
  var v = R(c, 2);
  {
    var f = (g) => {
      var p = ht("Saving...");
      k(g, p);
    }, s = (g) => {
      var p = ht("Save");
      k(g, p);
    };
    Q(v, (g) => {
      b(i) ? g(f) : g(s, !1);
    });
  }
  var _ = R(a, 2);
  Ke(() => d.disabled = b(i)), pt(_, () => b(n), (g) => A(n, g)), k(e, l), x();
}
lt(["click"]);
var nl = /* @__PURE__ */ ge('<!> <section class="folder-content svelte-1h9hx1y" aria-label="Folder content"><!></section>', 1), il = /* @__PURE__ */ ge('<div class="container svelte-1h9hx1y"><!></div>');
function ll(e, t) {
  D(t, !0);
  let r = J(t, "initialDir", 19, () => t.FS.cwd());
  t.FS.chdir(r());
  let n = /* @__PURE__ */ M(ie({ path: r() })), i = /* @__PURE__ */ Ye(() => ({ data: t.FS.analyzePath(b(n).path) })), l = /* @__PURE__ */ M(ie({ path: null })), a;
  Pi(() => {
    ["dragenter", "dragover", "dragleave", "drop"].forEach((s) => {
      a.addEventListener(s, f, !1);
    });
    function f(s) {
      s.preventDefault(), s.stopPropagation();
    }
    a.addEventListener("drop", o);
  });
  async function o(f) {
    const s = Array.from(f.dataTransfer.files);
    if (!s.length) return;
    let _ = b(n).path;
    _.endsWith("/") || (_ += "/");
    try {
      await jr(t.FS, _, s), await Xe(t.FS), b(n).path = void 0, b(n).path = t.FS.cwd();
    } catch (g) {
      console.log(g);
    }
  }
  var u = il(), d = P(u);
  {
    var c = (f) => {
      rl(f, {
        get FS() {
          return t.FS;
        },
        get editorOpened() {
          return b(l);
        },
        set editorOpened(s) {
          A(l, s, !0);
        }
      });
    }, v = (f) => {
      var s = nl(), _ = C(s);
      zi(_, {
        get FS() {
          return t.FS;
        },
        get dirData() {
          return b(i);
        },
        get dirPath() {
          return b(n);
        },
        set dirPath(h) {
          A(n, h, !0);
        }
      });
      var g = R(_, 2), p = P(g);
      {
        var w = (h) => {
          var y = V();
          const E = /* @__PURE__ */ Ye(() => Object.values(b(i).data.object.contents));
          var m = C(y);
          {
            var F = (T) => {
              var Z = V(), Pe = C(Z);
              Cr(Pe, 17, () => b(E), Or, (He, at) => {
                Qi(He, {
                  get FS() {
                    return t.FS;
                  },
                  get entry() {
                    return b(at);
                  },
                  get dirPath() {
                    return b(n);
                  },
                  set dirPath(Te) {
                    A(n, Te, !0);
                  },
                  get editorOpened() {
                    return b(l);
                  },
                  set editorOpened(Te) {
                    A(l, Te, !0);
                  }
                });
              }), k(T, Z);
            }, I = (T) => {
              var Z = ht("This folder is empty");
              k(T, Z);
            };
            Q(m, (T) => {
              b(E).length > 0 ? T(F) : T(I, !1);
            });
          }
          k(h, y);
        };
        Q(p, (h) => {
          b(i).data.object.contents && h(w);
        });
      }
      k(f, s);
    };
    Q(d, (f) => {
      b(l).path !== null ? f(c) : f(v, !1);
    });
  }
  Rr(u, (f) => a = f, () => a), k(e, u), x();
}
function ul(e, t, r) {
  ai(ll, {
    target: e,
    props: { FS: t, initialDir: r }
  });
}
export {
  ul as default
};
